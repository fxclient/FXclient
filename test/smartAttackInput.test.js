import test from 'node:test';
import assert from 'node:assert/strict';
import { createSmartAttackKeyHandler } from '../src/smartAttackInput.js';

function setup({ windows = [], target = 'canvas', enabled = true, key = '.', nativeConflict = false, nativeModal = false, bindings = [] } = {}) {
    let attacks = 0, prevented = 0; const messages = [];
    const automation = { config: { smart: { enabled, key } }, hooks: { keyConflict: () => nativeConflict, inputBlocked: () => nativeModal },
        smartAttack: () => { attacks++; return true; }, notifySmart: message => messages.push(message) };
    const document = { querySelectorAll: () => windows.map(([id, visible]) => ({ id, getClientRects: () => visible ? [{}] : [] })) };
    const handler = createSmartAttackKeyHandler(automation, () => ({ attackPercentageKeybinds: bindings }), document);
    const event = { key: '.', code: 'Period', target: { closest: selector => target === 'input' && selector.includes('input')
        || target === 'button' && selector.includes('button') }, preventDefault: () => prevented++, stopImmediatePropagation: () => {} };
    return { press: extra => handler({ ...event, ...extra }), counts: () => ({ attacks, prevented }), messages };
}

test('hotkey remains usable while an update banner is visible', () => {
    const s = setup({ windows: [['settings', false], ['updateNotification', true]] });
    s.press(); assert.deepEqual(s.counts(), { attacks: 1, prevented: 1 });
});

test('panel buttons retaining keyboard focus do not block the hotkey', () => {
    const s = setup({ target: 'button' }); s.press(); assert.equal(s.counts().attacks, 1);
});

test('the default physical period key works with a Russian layout', () => {
    const s = setup(); s.press({ key: 'ю', code: 'Period' }); assert.equal(s.counts().attacks, 1);
    const custom = setup({ key: 'x' }); custom.press({ key: 'ю', code: 'Period' }); assert.equal(custom.counts().attacks, 0);
});

test('editing, FX/native dialogs, repeat and modifiers remain blocked', () => {
    for (const options of [{ target: 'input' }, { windows: [['settings', true]] }, { nativeModal: true }]) {
        const s = setup(options); s.press(); assert.equal(s.counts().attacks, 0);
    }
    for (const extra of [{ repeat: true }, { ctrlKey: true }, { altKey: true }, { metaKey: true }, { isComposing: true }]) {
        const s = setup(); s.press(extra); assert.equal(s.counts().attacks, 0);
    }
});

test('conflicting shortcuts are diagnosed and left to native handling', () => {
    for (const options of [{ nativeConflict: true }, { bindings: [{ key: '.' }] }]) {
        const s = setup(options); s.press(); assert.deepEqual(s.counts(), { attacks: 0, prevented: 0 });
        assert.match(s.messages[0], /another action/);
    }
});
