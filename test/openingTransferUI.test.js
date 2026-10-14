import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { openingTransferUI } from '../src/openingTransferUI.js';
import { importPreset } from '../src/openingPresets.js';

// DOM component tests, not browser automation. Imported text is deliberately
// forbidden from using an HTML parser in this fixture.
class Element {
    constructor(tag) { this.tag = tag; this.children = []; this.events = {}; this.isConnected = true; this.textContent = ''; }
    append(...children) { this.children.push(...children); }
    replaceChildren(...children) { this.children = children; }
    setAttribute(key, value) { this[key] = value; }
    addEventListener(name, callback) { this.events[name] = callback; }
    click() { if (!this.disabled) return this.events.click?.(); }
    set innerHTML(_) { throw new Error('Imported text must never be parsed as HTML'); }
    all() { return [this, ...this.children.flatMap(child => child.all())]; }
}
const source = (id = 'one', name = id) => ({ schemaVersion: 1, type: 'territorial-opening-preset', id, name, strategy: 'custom',
    status: 'experimental_unvalidated', actions: [{ cycle: 1, tickInCycle: 5, mode: 'percent', value: 20, enabled: true }] });

function setup(presets = []) {
    globalThis.document = { createElement: tag => new Element(tag) };
    const root = new Element('div'), errors = []; let writes = 0, imported = 0;
    const automation = { config: { presets, enabled: false, activeId: presets[0]?.id ?? null },
        update: value => { automation.config = value; writes++; } };
    openingTransferUI(root, { automation, hasPendingChanges: () => false, selectedId: () => null,
        onImported: () => imported++, showError: message => errors.push(message) });
    return { root, automation, errors, counts: () => ({ writes, imported }),
        button: label => root.all().find(element => element.tag === 'button' && element.textContent === label),
        loadJSON: async value => {
            const input = root.all().find(element => element.tag === 'input');
            input.files = [{ name: 'preset.json', size: 1024, arrayBuffer: async () => new TextEncoder().encode(JSON.stringify(value)).buffer }];
            input.events.change(); await new Promise(resolve => setImmediate(resolve));
        } };
}

test('UI shows all 35 preview items and applies them only on explicit Import, leaving OFF', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => ({ ok: true, blob: async () => new Blob([fs.readFileSync(new URL('../static/opening/territorial_opening_presets_35.zip', import.meta.url))]) });
    try {
        const ui = setup(); await ui.button('Load experimental pack (35)').click();
        assert.equal(ui.root.all().filter(element => element.tag === 'li').length, 35);
        assert.deepEqual(ui.counts(), { writes: 0, imported: 0 });
        assert.ok(ui.root.all().some(element => element.textContent.includes('Found: 35 · Valid: 35')));
        ui.button('Import reviewed presets').click();
        assert.deepEqual(ui.counts(), { writes: 1, imported: 1 });
        assert.equal(ui.automation.config.presets.length, 35); assert.equal(ui.automation.config.enabled, false);
        assert.equal(ui.automation.config.activeId, null);
    } finally { globalThis.fetch = originalFetch; }
});

test('Rename preview commits stable reviewed IDs and preserves original preset; XSS stays plain text', async () => {
    const original = importPreset(source('one', '<img src=x onerror=alert(1)>'));
    const ui = setup([original]); await ui.loadJSON(source('one', original.name));
    assert.equal(ui.button('Import reviewed presets').disabled, true); // Default Skip.
    const policy = ui.root.all().find(element => element['aria-label'] === 'Import conflict policy');
    policy.value = 'rename'; policy.events.change();
    ui.button('Import reviewed presets').click();
    assert.equal(ui.errors.length, 0); assert.equal(ui.automation.config.presets.length, 2);
    assert.deepEqual(ui.automation.config.presets[0], original);
    assert.ok(ui.automation.config.presets[1].name.includes('<img'));
    assert.equal(ui.root.all().some(element => element.tag === 'img' || element.tag === 'script'), false);
});

test('UI refuses partial imports and refuses to apply a stale preview', async () => {
    const ui = setup(); await ui.loadJSON([source('good'), { ...source('bad'), schemaVersion: 2 }]);
    assert.equal(ui.button('Import reviewed presets'), undefined); assert.equal(ui.counts().writes, 0);
    assert.match(ui.errors.at(-1), /Nothing imported.*valid 1/);
    await ui.loadJSON(source('valid'));
    ui.automation.config.presets = [importPreset(source('changed-elsewhere'))];
    ui.button('Import reviewed presets').click();
    assert.equal(ui.counts().writes, 0); assert.match(ui.errors.at(-1), /refreshed preview/);
});
