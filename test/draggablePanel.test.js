import test from 'node:test';
import assert from 'node:assert/strict';
import { clampPanelPosition, makePanelDraggable } from '../src/draggablePanel.js';

function fixture(position = null, failSave = false) {
    const handlers = {}, viewportHandlers = {}, saved = [], errors = [];
    let captured = null, observed;
    const panel = { style: {}, width: 300, height: 200,
        getBoundingClientRect() { return { left: parseFloat(this.style.left ?? 10), top: parseFloat(this.style.top ?? 20), width: this.width, height: this.height }; } };
    const header = { addEventListener: (name, fn) => handlers[name] = fn,
        classList: { add() {}, remove() {} },
        setPointerCapture: id => captured = id, hasPointerCapture: id => captured === id,
        releasePointerCapture: () => captured = null };
    const viewport = { innerWidth: 800, innerHeight: 600,
        addEventListener: (name, fn) => viewportHandlers[name] = fn,
        ResizeObserver: class { constructor(fn) { observed = fn; } observe() {} } };
    makePanelDraggable(panel, header, { position, viewport, save: point => {
        if (failSave) throw new Error('Storage full'); saved.push(point);
    }, onError: error => errors.push(error.message) });
    const event = (name, extra = {}) => handlers[name]({ pointerId: 1, button: 0, isPrimary: true,
        clientX: 20, clientY: 30, target: { closest: () => false }, preventDefault() {}, stopPropagation() {}, ...extra });
    const point = () => ({ x: panel.getBoundingClientRect().left, y: panel.getBoundingClientRect().top });
    return { panel, viewport, saved, errors, event, point, resize: () => viewportHandlers.resize(), expand: () => observed() };
}

test('restores saved position and clamps on viewport resize and panel expansion', () => {
    const f = fixture({ x: 450, y: 350 });
    assert.deepEqual(f.point(), { x: 450, y: 350 });
    f.viewport.innerWidth = 500; f.viewport.innerHeight = 300; f.resize();
    assert.deepEqual(f.point(), { x: 200, y: 100 });
    f.panel.height = 290; f.expand();
    assert.deepEqual(f.point(), { x: 200, y: 10 });
    assert.deepEqual(f.saved, []);
    assert.deepEqual(clampPanelPosition({ x: -10, y: 30 }, { width: 900, height: 700 }, { width: 800, height: 600 }), { x: 0, y: 0 });
});

test('header drag follows pointer, respects screen bounds and saves once on release', () => {
    const f = fixture(); f.event('pointerdown');
    f.event('pointermove', { clientX: 120, clientY: 80 });
    assert.deepEqual(f.point(), { x: 110, y: 70 }); assert.equal(f.saved.length, 0);
    f.event('pointermove', { clientX: 2000, clientY: 2000 });
    assert.deepEqual(f.point(), { x: 500, y: 400 });
    f.event('pointerup'); f.event('lostpointercapture');
    assert.deepEqual(f.saved, [{ x: 500, y: 400 }]);
});

test('buttons, secondary pointers and right clicks do not start dragging', () => {
    for (const extra of [{ target: { closest: () => true } }, { isPrimary: false }, { button: 2 }]) {
        const f = fixture(); f.event('pointerdown', extra);
        f.event('pointermove', { clientX: 300 }); f.event('pointerup');
        assert.deepEqual(f.point(), { x: 10, y: 20 }); assert.equal(f.saved.length, 0);
    }
    const f = fixture(); f.event('pointerdown'); f.event('pointermove', { pointerId: 2, clientX: 300 });
    assert.deepEqual(f.point(), { x: 10, y: 20 });
});

test('cancellation and failed storage restore previous position', () => {
    for (const name of ['pointercancel', 'lostpointercapture']) {
        const f = fixture({ x: 50, y: 60 }); f.event('pointerdown');
        f.event('pointermove', { clientX: 300 }); f.event(name);
        assert.deepEqual(f.point(), { x: 50, y: 60 }); assert.equal(f.saved.length, 0);
    }
    const f = fixture({ x: 50, y: 60 }, true); f.event('pointerdown');
    f.event('pointermove', { clientX: 300 }); f.event('pointerup');
    assert.deepEqual(f.point(), { x: 50, y: 60 }); assert.deepEqual(f.errors, ['Storage full']);
});
