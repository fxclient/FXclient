import { PRESET_LIMITS, TICK_CONVENTION, parsePresetFile, previewPresetImport, configAfterImport,
    exportPreset, exportPresetCollection } from './openingPresets.js';

const node = (tag, text, parent) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    parent?.append(element); return element;
};
const button = (parent, label, callback) => {
    const element = node('button', label, parent); element.type = 'button'; element.addEventListener('click', callback); return element;
};
function download(json, name) {
    if (new TextEncoder().encode(json).length > PRESET_LIMITS.entryBytes) throw new Error('Export exceeds 512 KiB; export fewer presets');
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = name; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function openingTransferUI(parent, { automation, hasPendingChanges, selectedId, onImported, showError }) {
    const controls = node('div', undefined, parent); controls.className = 'opening-transfer';
    const preview = node('div', undefined, parent); preview.className = 'opening-import-preview';
    const input = node('input', undefined, controls); input.type = 'file'; input.accept = '.json,.zip'; input.hidden = true;
    let incoming = null, policy = 'skip', generation = 0;
    const cleanDraft = () => { if (hasPendingChanges()) throw new Error('Apply your pending Opening / Smart Attack changes before importing'); };
    const showPreview = () => {
        preview.replaceChildren();
        if (!incoming) return;
        node('h4', 'Import preview — no changes saved yet', preview);
        node('p', 'Experimental presets are heuristics, not proven optima. Imported presets will not be activated.', preview);
        node('p', TICK_CONVENTION, preview);
        const label = node('label', 'Conflicts ', preview), select = node('select', undefined, label);
        select.setAttribute('aria-label', 'Import conflict policy');
        for (const [value, title] of [['skip', 'Skip (default)'], ['rename', 'Rename'], ['replace', 'Replace existing presets']]) node('option', title, select).value = value;
        select.value = policy; select.addEventListener('change', () => { policy = select.value; showPreview(); });
        let plan;
        const existingFingerprint = JSON.stringify(automation.config.presets);
        try { plan = previewPresetImport(automation.config.presets, incoming, policy); }
        catch (error) { node('p', 'Import blocked: ' + error.message, preview).setAttribute('role', 'alert'); return; }
        node('p', `Found: ${plan.found} · Valid: ${plan.valid} · Conflicts: ${plan.conflicts} · Add: ${plan.added} · Replace: ${plan.replaced} · Skip: ${plan.skipped}`, preview);
        const list = node('ul', undefined, preview); list.className = 'opening-import-list';
        plan.items.forEach(item => node('li', `${item.action}: ${item.name}${item.importedName && item.importedName !== item.name ? ` → ${item.importedName}` : ''}`, list));
        if (plan.replaced) node('p', 'Replace is explicitly selected. Replacing the active preset will turn its Scheduler OFF.', preview);
        const apply = button(preview, 'Import reviewed presets', () => {
            try {
                cleanDraft();
                // Recompute conflicts against current saved state; no stale preview overwrite.
                if (JSON.stringify(automation.config.presets) !== existingFingerprint) { showPreview(); showError('Presets changed; review the refreshed preview before importing'); return; }
                automation.update(configAfterImport(automation.config, plan));
                incoming = null; generation++; onImported();
            } catch (error) { showError('Nothing imported: ' + error.message); }
        });
        apply.disabled = plan.added + plan.replaced === 0;
        button(preview, 'Cancel import', () => { incoming = null; generation++; preview.replaceChildren(); });
    };
    const load = async (read, name) => {
        const request = ++generation;
        try {
            cleanDraft(); incoming = null; preview.replaceChildren(); node('p', 'Reading and validating locally…', preview);
            const bytes = await read(); if (request !== generation || !parent.isConnected) return;
            incoming = parsePresetFile(bytes, name); policy = 'skip'; showPreview();
        } catch (error) {
            if (request !== generation) return;
            incoming = null; preview.replaceChildren(); showError('Nothing imported: ' + error.message);
        }
    };
    button(controls, 'Import Presets', () => input.click());
    input.addEventListener('change', () => {
        const file = input.files[0]; input.value = ''; if (!file) return;
        load(async () => {
            if (file.size > PRESET_LIMITS.fileBytes) throw new Error('File exceeds 4 MiB limit');
            return new Uint8Array(await file.arrayBuffer());
        }, file.name);
    });
    button(controls, 'Load experimental pack (35)', () => load(async () => {
        const response = await fetch('./opening/territorial_opening_presets_35.zip', { cache: 'no-store' });
        if (!response.ok) throw new Error('Bundled pack could not be loaded');
        const blob = await response.blob(); if (blob.size > PRESET_LIMITS.fileBytes) throw new Error('Pack exceeds size limit');
        return new Uint8Array(await blob.arrayBuffer());
    }, 'territorial_opening_presets_35.zip'));
    button(controls, 'Export Presets', () => {
        try { cleanDraft(); download(exportPresetCollection(automation.config.presets), 'fx-opening-presets.json'); }
        catch (error) { showError(error.message); }
    });
    button(controls, 'Export Selected Preset', () => {
        try {
            cleanDraft(); const preset = automation.config.presets.find(p => p.id === selectedId());
            if (!preset) throw new Error('Select a preset to export');
            download(JSON.stringify(exportPreset(preset), null, 2), 'fx-opening-preset.json');
        } catch (error) { showError(error.message); }
    });
}
