import { Inflate } from 'fflate';
import { validatePresets } from './attackPlanning.js';

export const PRESET_LIMITS = Object.freeze({ fileBytes: 4 * 1024 * 1024, entryBytes: 512 * 1024,
    expandedBytes: 4 * 1024 * 1024, entries: 256, presets: 200, actions: 500 });
export const STRATEGIES = Object.freeze({ army: 'Army', expansion: 'Expansion', economy: 'Economy', balanced: 'Balanced', long_term: 'Long-term', custom: 'Custom' });
export const TICK_CONVENTION = 'cycle 1-based, tickInCycle 1..10; file tick 1 = HUD 0; native tick = ((cycle-1)*10+tickInCycle-1)*10';
const TYPE = 'territorial-opening-preset';
const COLLECTION = 'territorial-opening-presets';
const forbidden = new Set(['__proto__', 'prototype', 'constructor']);
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8', { fatal: true });
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const text = (value, name, max = 200) => requireValue(typeof value === 'string' && value.trim().length > 0 && value.length <= max, `Invalid ${name}`);
const integer = (value, min, max, name) => requireValue(Number.isSafeInteger(value) && value >= min && value <= max, `Invalid ${name}`);

export function safeData(value, depth = 0) {
    requireValue(depth <= 32, 'JSON nesting exceeds limit');
    if (Array.isArray(value)) {
        requireValue(value.length <= 2000, 'JSON array exceeds limit');
        return value.map(item => safeData(item, depth + 1));
    }
    if (object(value)) {
        const entries = Object.entries(value);
        requireValue(entries.length <= 1000, 'JSON object exceeds limit');
        const result = {};
        for (const [key, item] of entries) {
            requireValue(!forbidden.has(key), `Unsafe JSON key: ${key}`);
            result[key] = safeData(item, depth + 1);
        }
        return result;
    }
    requireValue(value === null || ['string', 'number', 'boolean'].includes(typeof value), 'Unsupported JSON value');
    requireValue(typeof value !== 'number' || Number.isFinite(value), 'Nonfinite JSON number');
    return value;
}

export function parsePresetJSON(input) {
    requireValue(typeof input === 'string' && encoder.encode(input).length <= PRESET_LIMITS.entryBytes, 'JSON file exceeds size limit');
    try { return safeData(JSON.parse(input.replace(/^\uFEFF/, ''))); }
    catch (error) { throw new Error('Invalid preset JSON: ' + error.message); }
}

export function externalTime(cycle, tickInCycle) {
    integer(cycle, 1, 100000, 'cycle'); integer(tickInCycle, 1, 10, 'tickInCycle (1..10)');
    return (cycle - 1) * 10 + tickInCycle - 1;
}

export function importPreset(input) {
    const preset = safeData(input);
    requireValue(object(preset), 'Preset must be an object');
    requireValue(preset.schemaVersion === 1, 'Unsupported schemaVersion');
    requireValue(preset.type === TYPE, 'Unsupported preset type');
    text(preset.id, 'preset ID'); text(preset.name, 'preset name');
    requireValue(Object.hasOwn(STRATEGIES, preset.strategy), 'Unknown strategy');
    if (preset.strategy !== 'custom') {
        integer(preset.targetCycle, 2, 8, 'targetCycle (C2..C8)');
        const expectedEvaluation = preset.strategy === 'long_term' ? preset.targetCycle + 3 : preset.targetCycle;
        requireValue(preset.evaluationCycle === expectedEvaluation, 'evaluationCycle does not match the strategy horizon');
    } else if (preset.targetCycle !== undefined) integer(preset.targetCycle, 1, 100000, 'targetCycle');
    requireValue(['experimental_unvalidated', 'validated'].includes(preset.status), 'Invalid preset status');
    requireValue(Array.isArray(preset.actions) && preset.actions.length > 0 && preset.actions.length <= PRESET_LIMITS.actions, 'Preset must contain 1–500 actions');
    const times = new Set(), ids = new Set();
    const actions = preset.actions.map((action, index) => {
        requireValue(object(action), 'Action must be an object');
        const tick = externalTime(action.cycle, action.tickInCycle);
        requireValue(!times.has(tick), 'Conflicting actions at the same cycle/tick'); times.add(tick);
        requireValue(preset.targetCycle === undefined || action.cycle < preset.targetCycle, 'Action must be strictly before the start of targetCycle');
        requireValue(['percent', 'troops'].includes(action.mode), 'Unknown action mode');
        requireValue(Number.isFinite(action.value) && (action.mode === 'percent' ? action.value >= 0 && action.value <= 100
            : action.value > 0), 'Invalid action value');
        requireValue(typeof action.enabled === 'boolean', 'Action enabled must be boolean');
        const id = action.id ?? `action-${index + 1}`;
        text(id, 'action ID'); requireValue(!ids.has(id), 'Duplicate action ID'); ids.add(id);
        return { ...action, id, tick };
    });
    return validatePresets([{ ...preset, actions }])[0];
}

export function exportPreset(input) {
    const preset = safeData(validatePresets([input])[0]);
    requireValue(preset.actions.length > 0, 'An empty preset cannot be exported');
    const exported = { ...preset, schemaVersion: 1, type: TYPE, strategy: preset.strategy ?? 'custom',
        status: preset.status ?? 'experimental_unvalidated', actions: preset.actions.map(action => {
            const { tick, ...metadata } = action;
            return { ...metadata, cycle: Math.floor(tick / 10) + 1, tickInCycle: tick % 10 + 1 };
        }) };
    importPreset(exported); // Do not create a portable file that our importer would reject.
    return exported;
}

export function exportPresetCollection(presets) {
    requireValue(presets.length > 0 && presets.length <= PRESET_LIMITS.presets, 'Export needs 1–200 presets');
    const data = { schemaVersion: 1, type: COLLECTION, tickConvention: TICK_CONVENTION, presets: presets.map(exportPreset) };
    const json = JSON.stringify(data, null, 2);
    requireValue(encoder.encode(json).length <= PRESET_LIMITS.entryBytes, 'Export exceeds JSON size limit; export smaller selections');
    return json;
}

export function safeZipPath(name) {
    text(name, 'ZIP path', 500);
    requireValue(!/[\\:\x00-\x1f]/.test(name) && !name.startsWith('/') && !name.split('/').some(part => part === '.' || part === '..' || part === ''), 'Unsafe ZIP path: ' + name);
    return name;
}

const crcTable = Array.from({ length: 256 }, (_, index) => {
    let c = index; for (let bit = 0; bit < 8; bit++) c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
    return c >>> 0;
});
function crc32(bytes) { let c = 0xffffffff; for (const b of bytes) c = crcTable[(c ^ b) & 255] ^ c >>> 8; return (c ^ 0xffffffff) >>> 0; }

// Inspect central and local headers before inflating anything. Never extract to disk.
// Inflate in small chunks and bound actual output, not just untrusted ZIP sizes.
export function readPresetZip(bytes) {
    requireValue(bytes instanceof Uint8Array && bytes.length >= 22 && bytes.length <= PRESET_LIMITS.fileBytes, 'ZIP size is invalid');
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const u16 = offset => view.getUint16(offset, true), u32 = offset => view.getUint32(offset, true);
    let end = bytes.length - 22;
    while (end >= Math.max(0, bytes.length - 65557) && u32(end) !== 0x06054b50) end--;
    requireValue(end >= 0 && u32(end) === 0x06054b50 && end + 22 + u16(end + 20) === bytes.length, 'Invalid ZIP end record');
    const count = u16(end + 10), start = u32(end + 16), centralSize = u32(end + 12);
    requireValue(u16(end + 4) === 0 && u16(end + 6) === 0 && u16(end + 8) === count && count > 0 && count <= PRESET_LIMITS.entries
        && start + centralSize === end, 'Unsupported ZIP layout, ZIP64 or entry count');
    const entries = [], names = new Set(), ranges = []; let cursor = start, declaredTotal = 0;
    for (let index = 0; index < count; index++) {
        requireValue(cursor + 46 <= end && u32(cursor) === 0x02014b50, 'Invalid ZIP central header');
        const flags = u16(cursor + 8), method = u16(cursor + 10), crc = u32(cursor + 16), size = u32(cursor + 20), expanded = u32(cursor + 24);
        const nameSize = u16(cursor + 28), extraSize = u16(cursor + 30), commentSize = u16(cursor + 32), local = u32(cursor + 42);
        requireValue(cursor + 46 + nameSize + extraSize + commentSize <= end && !(flags & 1) && [0, 8].includes(method)
            && u16(cursor + 34) === 0 && ((u32(cursor + 38) >>> 16) & 0xf000) !== 0xa000, 'Unsupported/encrypted ZIP entry');
        const name = decoder.decode(bytes.subarray(cursor + 46, cursor + 46 + nameSize));
        const directory = name.endsWith('/'); safeZipPath(directory ? name.slice(0, -1) : name);
        const key = name.toLocaleLowerCase('en-US'); requireValue(!names.has(key), 'Duplicate ZIP path'); names.add(key);
        requireValue(expanded <= PRESET_LIMITS.entryBytes && size <= PRESET_LIMITS.fileBytes && expanded <= size * 200 + 1024, 'ZIP entry exceeds expansion limits');
        declaredTotal += expanded; requireValue(declaredTotal <= PRESET_LIMITS.expandedBytes, 'ZIP expanded size exceeds limit');
        requireValue(local + 30 <= start && u32(local) === 0x04034b50 && u16(local + 6) === flags && u16(local + 8) === method, 'ZIP local header mismatch');
        const localNameSize = u16(local + 26), payload = local + 30 + localNameSize + u16(local + 28);
        requireValue(payload + size <= start && decoder.decode(bytes.subarray(local + 30, local + 30 + localNameSize)) === name, 'ZIP entry bounds/name mismatch');
        if (!(flags & 8)) requireValue(u32(local + 14) === crc && u32(local + 18) === size && u32(local + 22) === expanded, 'ZIP size/checksum header mismatch');
        requireValue(!ranges.some(([a, b]) => local < b && payload + size > a), 'Overlapping ZIP entries'); ranges.push([local, payload + size]);
        entries.push({ name, directory, method, crc, expanded, payload, size });
        cursor += 46 + nameSize + extraSize + commentSize;
    }
    requireValue(cursor === end, 'Unexpected ZIP central data');
    const files = new Map(); let actualTotal = 0;
    for (const entry of entries) {
        let length = 0; const chunks = [];
        const append = chunk => {
            length += chunk.length; actualTotal += chunk.length;
            requireValue(length <= entry.expanded && length <= PRESET_LIMITS.entryBytes && actualTotal <= PRESET_LIMITS.expandedBytes, 'ZIP actual output exceeds limit');
            chunks.push(chunk);
        };
        const compressed = bytes.subarray(entry.payload, entry.payload + entry.size);
        if (entry.method === 0) append(compressed);
        else {
            let finalSeen = false;
            const inflate = new Inflate((chunk, final) => { append(chunk); finalSeen = final; });
            for (let offset = 0; offset < compressed.length; offset += 64) inflate.push(compressed.subarray(offset, offset + 64), offset + 64 >= compressed.length);
            requireValue(finalSeen, 'Truncated ZIP stream');
        }
        requireValue(length === entry.expanded, 'ZIP output length mismatch');
        const data = new Uint8Array(length); let offset = 0; for (const chunk of chunks) { data.set(chunk, offset); offset += chunk.length; }
        requireValue(crc32(data) === entry.crc, 'ZIP CRC mismatch');
        if (!entry.directory) files.set(entry.name, data);
    }
    return files;
}

function documentPresets(document, files, base = '') {
    if (Array.isArray(document)) return document;
    requireValue(object(document), 'JSON must contain a preset or collection');
    if (document.type === TYPE) return [document];
    requireValue(document.schemaVersion === 1, 'Unsupported collection schemaVersion');
    requireValue(document.type === undefined || document.type === COLLECTION, 'Unsupported collection type');
    requireValue(Array.isArray(document.presets) && document.presets.length > 0, 'Manifest has no explicit presets');
    const references = new Set();
    const resolved = document.presets.flatMap(item => {
        if (!object(item) || !Object.hasOwn(item, 'file')) return [item];
        requireValue(files, 'Manifest file references need a ZIP with actual JSON files');
        const path = safeZipPath(base + safeZipPath(item.file));
        requireValue(!references.has(path), 'Duplicate manifest file reference'); references.add(path);
        requireValue(files.has(path), 'Missing manifest file: ' + path);
        const preset = parsePresetJSON(decoder.decode(files.get(path)));
        for (const field of ['id', 'name', 'strategy', 'targetCycle'])
            requireValue(item[field] === undefined || item[field] === preset[field], 'Manifest metadata mismatch: ' + field);
        return [{ ...preset, collectionEntry: preset.collectionEntry ?? item }];
    });
    const { presets, ...collectionMetadata } = document;
    return resolved.map(preset => object(preset) ? { ...preset, collectionMetadata: preset.collectionMetadata ?? collectionMetadata } : preset);
}

export function parsePresetFile(bytes, filename) {
    requireValue(bytes instanceof Uint8Array && bytes.length <= PRESET_LIMITS.fileBytes, 'File exceeds 4 MiB limit');
    let documents;
    if (filename.toLowerCase().endsWith('.zip')) {
        const files = readPresetZip(bytes);
        const manifests = [...files.keys()].filter(name => name.split('/').at(-1).toLowerCase() === 'manifest.json');
        requireValue(manifests.length <= 1, 'Multiple ZIP manifests');
        if (manifests.length) {
            const path = manifests[0], base = path.slice(0, path.lastIndexOf('/') + 1);
            documents = documentPresets(parsePresetJSON(decoder.decode(files.get(path))), files, base);
            const declared = new Set(documentPresetsFiles(parsePresetJSON(decoder.decode(files.get(path))), base));
            requireValue([...files.keys()].filter(name => name.endsWith('.json') && name !== path).every(name => declared.has(name)), 'Undeclared JSON files in ZIP manifest');
        } else documents = [...files].filter(([name]) => name.toLowerCase().endsWith('.json'))
            .flatMap(([, data]) => documentPresets(parsePresetJSON(decoder.decode(data))));
    } else {
        requireValue(filename.toLowerCase().endsWith('.json'), 'Choose a .json or .zip file');
        documents = documentPresets(parsePresetJSON(decoder.decode(bytes)));
    }
    requireValue(documents.length > 0 && documents.length <= PRESET_LIMITS.presets, 'Import needs 1–200 presets');
    // An invalid member aborts the whole preview. No partial collection can be applied.
    const presets = [], issues = [], ids = new Set();
    for (const [index, document] of documents.entries()) {
        try {
            const preset = importPreset(document);
            requireValue(!ids.has(preset.id), 'Duplicate preset ID in import'); ids.add(preset.id); presets.push(preset);
        } catch (error) { issues.push(`Preset ${index + 1}: ${error.message}`); }
    }
    if (issues.length) {
        const error = new Error(`Import aborted: found ${documents.length}, valid ${presets.length}, invalid ${issues.length}. ${issues.join('; ')}`);
        error.found = documents.length; error.valid = presets.length; throw error;
    }
    return presets;
}
function documentPresetsFiles(document, base) { return document.presets.filter(item => object(item) && typeof item.file === 'string').map(item => base + item.file); }

const folded = value => value.trim().toLocaleLowerCase('en-US');
export function previewPresetImport(existing, incoming, policy = 'skip', makeId = () => crypto.randomUUID()) {
    requireValue(['skip', 'rename', 'replace'].includes(policy), 'Unknown conflict policy');
    const result = validatePresets(safeData(existing)), imported = validatePresets(safeData(incoming));
    requireValue(result.length + imported.length <= PRESET_LIMITS.presets * 2, 'Too many presets');
    const items = []; let conflicts = 0, added = 0, replaced = 0, skipped = 0;
    for (const source of imported) {
        const matches = result.filter(p => p.id === source.id || folded(p.name) === folded(source.name));
        if (matches.length) conflicts++;
        if (matches.length && policy === 'skip') { skipped++; items.push({ name: source.name, action: 'Skip', conflicts: matches.map(p => p.id) }); continue; }
        let preset = source;
        if (matches.length && policy === 'replace') {
            requireValue(matches.length === 1, 'Ambiguous replacement: ID and name match different presets');
            preset = { ...source, id: matches[0].id, actions: source.actions.map(action => ({ ...action, id: makeId() })) };
            result[result.findIndex(p => p.id === matches[0].id)] = preset; replaced++;
        } else {
            if (matches.length) {
                let suffix = 2, name = source.name;
                while (result.some(p => folded(p.name) === folded(name))) name = `${source.name} (${suffix++})`;
                let id = makeId(); for (let tries = 0; result.some(p => p.id === id); tries++) { requireValue(tries < 20, 'Unable to create a unique ID'); id = makeId(); }
                preset = { ...source, id, name, actions: source.actions.map(action => ({ ...action, id: makeId() })) };
            }
            result.push(preset); added++;
        }
        items.push({ name: source.name, importedName: preset.name, action: matches.length ? policy === 'replace' ? 'Replace' : 'Rename' : 'Add', id: preset.id });
    }
    return { presets: validatePresets(result), found: imported.length, valid: imported.length, conflicts, added, replaced, skipped, items };
}

export function presetGroup(preset) { return preset.strategy && preset.strategy !== 'custom' && Object.hasOwn(STRATEGIES, preset.strategy) ? preset.strategy : 'custom'; }
export function presetStatus(preset) { return preset.status === 'validated' ? 'Validated (imported claim)' : 'Experimental'; }

export function groupedPresets(presets) {
    return Object.keys(STRATEGIES).map(strategy => ({ strategy, label: STRATEGIES[strategy],
        presets: presets.filter(p => presetGroup(p) === strategy).sort((a, b) => (a.targetCycle ?? 0) - (b.targetCycle ?? 0) || a.name.localeCompare(b.name)) }))
        .filter(group => group.presets.length > 0);
}

export function configAfterImport(config, preview) {
    const replacesActive = preview.items.some(item => item.action === 'Replace' && item.id === config.activeId);
    return { ...config, presets: preview.presets, enabled: replacesActive ? false : config.enabled };
}
