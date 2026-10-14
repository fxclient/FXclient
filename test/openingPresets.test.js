import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { zipSync, strToU8 } from 'fflate';
import { parsePresetFile, importPreset, exportPreset, exportPresetCollection, previewPresetImport, configAfterImport,
    readPresetZip, PRESET_LIMITS, groupedPresets, externalTime, parsePresetJSON, presetStatus } from '../src/openingPresets.js';
import { OpeningScheduler, openingTime, validatePresets } from '../src/attackPlanning.js';

const archive = new Uint8Array(fs.readFileSync(new URL('../static/opening/territorial_opening_presets_35.zip', import.meta.url)));
const pack = () => parsePresetFile(archive, 'pack.zip');
const raw = (id = 'custom-1', changes = {}) => ({ schemaVersion: 1, type: 'territorial-opening-preset', id, name: id,
    strategy: 'custom', status: 'experimental_unvalidated', actions: [{ cycle: 1, tickInCycle: 6, mode: 'percent', value: 28, enabled: true }], ...changes });
const jsonFile = value => parsePresetFile(strToU8(JSON.stringify(value)), 'presets.json');

test('single JSON, arrays and embedded manifests import without changing metadata', () => {
    const source = raw('one', { objective: 'custom', notes: '<img src=x onerror=alert(1)>', extra: { labels: ['one', 'two'], example: 7 } });
    const p = jsonFile(source)[0];
    assert.equal(p.actions[0].tick, 5);
    const exported = exportPreset(p);
    for (const [field, value] of Object.entries(source)) if (field !== 'actions') assert.deepEqual(exported[field], value);
    for (const [field, value] of Object.entries(source.actions[0])) assert.deepEqual(exported.actions[0][field], value);
    assert.equal(jsonFile([source, raw('two')]).length, 2);
    assert.equal(jsonFile({ schemaVersion: 1, type: 'territorial-opening-presets', presets: [source] }).length, 1);
    assert.throws(() => jsonFile({ schemaVersion: 1, presets: [{ file: 'missing.json' }] }), /actual JSON files/);
});

test('the supplied archive contains exactly five strategies with C2–C8 each; all are experimental', () => {
    const presets = pack(); assert.equal(presets.length, 35);
    const groups = groupedPresets(presets); assert.equal(groups.length, 5);
    for (const group of groups) {
        assert.equal(group.presets.length, 7); assert.deepEqual(group.presets.map(p => p.targetCycle), [2, 3, 4, 5, 6, 7, 8]);
        for (const p of group.presets) {
            assert.equal(p.status, 'experimental_unvalidated'); assert.equal(presetStatus(p), 'Experimental');
            assert.ok(p.actions.every(action => action.tick < (p.targetCycle - 1) * 10));
            assert.equal(new Set(p.actions.map(a => a.tick)).size, p.actions.length);
            assert.equal(p.evaluationCycle, p.strategy === 'long_term' ? p.targetCycle + 3 : p.targetCycle);
        }
    }
});

test('all 35 round-trip through a self-contained JSON export', () => {
    const presets = pack(); const exported = exportPresetCollection(presets), reimported = parsePresetFile(strToU8(exported), 'all.json');
    assert.deepEqual(reimported, presets);
});

test('file ticks 1..10 map exactly to HUD 0..9 and native boundaries', () => {
    for (let cycle = 1; cycle <= 8; cycle++) for (let tick = 1; tick <= 10; tick++) {
        const internal = externalTime(cycle, tick), time = openingTime(internal * 10);
        assert.equal(time.cycle, cycle); assert.equal(time.tick, tick - 1);
        if (internal > 0) assert.equal(openingTime(internal * 10 - 1).absolute, internal - 1);
    }
    assert.equal(externalTime(1, 1), 0); assert.equal(externalTime(1, 10), 9); assert.equal(externalTime(2, 1), 10);
});

test('percent 0 and fractional troops are valid; invalid ranges/schema/IDs/actions abort', () => {
    for (const action of [{ cycle: 1, tickInCycle: 1, mode: 'percent', value: 0, enabled: true },
        { cycle: 1, tickInCycle: 10, mode: 'troops', value: 10.5, enabled: true }])
        assert.equal(jsonFile(raw('ok', { actions: [action] })).length, 1);
    const invalid = [{ schemaVersion: 2 }, { type: 'code' }, { id: '' }, { name: '' }, { strategy: 'optimal' },
        { actions: [] }, { actions: undefined }, { targetCycle: 9, strategy: 'army' }, { status: 'optimal' }];
    for (const change of invalid) assert.throws(() => jsonFile(raw('bad', change)));
    for (const change of [{ value: 101 }, { value: -1 }, { mode: 'troops', value: -1 }, { mode: 'troops', value: 0 },
        { cycle: 0 }, { tickInCycle: 0 }, { tickInCycle: 11 }, { enabled: 'yes' }, { mode: 'javascript' }])
        assert.throws(() => jsonFile(raw('bad', { actions: [{ ...raw().actions[0], ...change }] })));
    assert.throws(() => jsonFile([raw('same'), raw('same')]), /Duplicate preset ID/);
    assert.throws(() => jsonFile(raw('same-time', { actions: [raw().actions[0], raw().actions[0]] })), /Conflicting actions/);
    assert.throws(() => jsonFile(raw('after-target', { strategy: 'army', targetCycle: 2, evaluationCycle: 2,
        actions: [{ ...raw().actions[0], cycle: 2 }] })), /before/);
});

test('critical error anywhere in the collection refuses partial import', () => {
    let applied = false;
    assert.throws(() => { const parsed = jsonFile([raw('good'), raw('bad', { schemaVersion: 77 })]); previewPresetImport([], parsed); applied = true; }, /found 2, valid 1, invalid 1/);
    assert.equal(applied, false);
    assert.throws(() => parsePresetFile(strToU8('{invalid'), 'bad.json'));
    assert.throws(() => parsePresetFile(new Uint8Array(PRESET_LIMITS.fileBytes + 1), 'huge.zip'));
});

test('Skip is default; Rename keeps the original; Replace requires explicit policy', () => {
    const original = importPreset(raw('one'));
    assert.equal(previewPresetImport([original], [original]).skipped, 1);
    let n = 0; const makeId = () => `new-${++n}`;
    const renamed = previewPresetImport([original], [original], 'rename', makeId);
    assert.equal(renamed.presets.length, 2); assert.deepEqual(renamed.presets[0], original);
    assert.notEqual(renamed.presets[1].id, original.id); assert.notEqual(renamed.presets[1].name, original.name);
    const replacement = importPreset(raw('one', { notes: 'changed' }));
    const replaced = previewPresetImport([original], [replacement], 'replace', makeId);
    assert.equal(replaced.presets.length, 1); assert.equal(replaced.replaced, 1); assert.equal(replaced.presets[0].notes, 'changed');
    assert.notEqual(replaced.presets[0].actions[0].id, original.actions[0].id);
});

test('name conflicts and ambiguous replacements are handled explicitly', () => {
    const a = importPreset(raw('a', { name: 'Same' })), b = importPreset(raw('b', { name: 'Other' }));
    const incoming = importPreset(raw('new', { name: 'same' }));
    assert.equal(previewPresetImport([a], [incoming]).conflicts, 1);
    assert.throws(() => previewPresetImport([a, b], [importPreset(raw('a', { name: 'Other' }))], 'replace'), /Ambiguous/);
});

test('import does not activate a preset; user selection is preserved and active replacement is disarmed', () => {
    const custom = importPreset(raw('mine'));
    const config = { presets: [custom], enabled: false, activeId: 'mine', smart: { enabled: false } };
    const imported = configAfterImport(config, previewPresetImport(config.presets, pack()));
    assert.equal(imported.enabled, false); assert.equal(imported.activeId, 'mine'); assert.equal(imported.presets.length, 36);
    const active = { ...config, enabled: true };
    assert.equal(configAfterImport(active, previewPresetImport(config.presets, pack())).enabled, true);
    assert.equal(configAfterImport(active, previewPresetImport(config.presets, [custom], 'replace')).enabled, false);
    assert.equal(groupedPresets(imported.presets).find(g => g.strategy === 'custom').presets[0].id, 'mine');
});

test('JSON pollution keys are rejected recursively, strings remain inert data', () => {
    for (const key of ['__proto__', 'constructor', 'prototype'])
        assert.throws(() => parsePresetJSON(`{"metadata":{"${key}":{"polluted":true}}}`), /Unsafe JSON key/);
    assert.equal({}.polluted, undefined);
    const p = jsonFile(raw('xss', { name: '<img src=x onerror=alert(1)>' }))[0];
    assert.equal(p.name, '<img src=x onerror=alert(1)>');
});

test('ZIP traversal, duplicate paths, missing manifest members and CRC errors are rejected', () => {
    for (const path of ['../escape.json', '/absolute.json', 'C:/drive.json', 'safe/../../escape.json', 'safe\\escape.json'])
        assert.throws(() => parsePresetFile(zipSync({ [path]: strToU8(JSON.stringify(raw())) }), 'bad.zip'), /ZIP path/);
    assert.throws(() => readPresetZip(zipSync({ 'same.json': strToU8('{}'), 'SAME.json': strToU8('{}') })), /Duplicate ZIP path/);
    assert.throws(() => parsePresetFile(zipSync({ 'manifest.json': strToU8(JSON.stringify({ schemaVersion: 1, presets: [{ file: 'missing.json' }] })) }), 'bad.zip'), /Missing manifest/);
    const corrupt = zipSync({ 'one.json': [strToU8(JSON.stringify(raw())), { level: 0 }] }); corrupt[30 + 'one.json'.length] ^= 1;
    assert.throws(() => readPresetZip(corrupt), /CRC/);
});

test('ZIP bombs and false expanded sizes cannot bypass actual output limits', () => {
    assert.throws(() => readPresetZip(zipSync({ 'huge.json': new Uint8Array(PRESET_LIMITS.entryBytes + 1) })), /expansion limits/);
    const forged = zipSync({ 'forged.json': new Uint8Array(10000).fill(65) });
    const view = new DataView(forged.buffer); view.setUint32(22, 4, true);
    let central = 0; while (view.getUint32(central, true) !== 0x02014b50) central++;
    view.setUint32(central + 24, 4, true);
    assert.throws(() => readPresetZip(forged), /actual output exceeds limit/);
});

test('all horizons schedule once, never after target, never catch up and reset with the match', () => {
    for (const p of pack()) {
        const scheduler = new OpeningScheduler(); const sends = [];
        const state = { allowed: true, neutralId: 512, getBalance: () => 100000 };
        const send = () => { sends.push(scheduler.tick); return true; };
        for (let native = 0; native <= (p.targetCycle - 1) * 100; native++) {
            const tick = openingTime(native).absolute;
            scheduler.advance(tick, p, true, state, send); scheduler.advance(tick, p, true, state, send);
        }
        assert.deepEqual(sends, p.actions.map(action => action.tick));
        assert.ok(sends.every(tick => tick * 10 < (p.targetCycle - 1) * 100));
        scheduler.reset(); const before = sends.length;
        scheduler.advance(p.actions[0].tick + 1, p, true, state, send);
        assert.equal(sends.length, before);
        scheduler.reset(); scheduler.advance(p.actions[0].tick, p, true, state, send); assert.equal(sends.length, before + 1);
    }
});
