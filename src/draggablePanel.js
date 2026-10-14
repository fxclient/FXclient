export function clampPanelPosition(position, size, viewport) {
    return { x: Math.max(0, Math.min(position.x, Math.max(0, viewport.width - size.width))),
        y: Math.max(0, Math.min(position.y, Math.max(0, viewport.height - size.height))) };
}

// Pointer capture keeps the drag attached to the header if the pointer leaves it.
// Persist once on release; clicking controls inside the header never starts a drag.
export function makePanelDraggable(panel, header, { position = null, save, onError = console.warn, viewport = window }) {
    let preferred = position, drag = null;
    const apply = point => {
        const rect = panel.getBoundingClientRect();
        const clamped = clampPanelPosition(point, rect, { width: viewport.innerWidth, height: viewport.innerHeight });
        panel.style.left = `${Math.round(clamped.x)}px`; panel.style.top = `${Math.round(clamped.y)}px`;
        return clamped;
    };
    const constrain = () => {
        if (drag) return;
        const rect = panel.getBoundingClientRect();
        apply(preferred ?? { x: rect.left, y: rect.top });
    };
    const finish = (event, cancelled) => {
        if (!drag || drag.id !== event.pointerId) return;
        const previous = drag.previous;
        const point = drag.point;
        drag = null;
        header.classList.remove('dragging');
        if (header.hasPointerCapture?.(event.pointerId)) header.releasePointerCapture(event.pointerId);
        if (cancelled) { preferred = previous; constrain(); return; }
        try { save(point); preferred = point; }
        catch (error) { preferred = previous; constrain(); onError(error); }
    };
    header.addEventListener('pointerdown', event => {
        if (drag || event.isPrimary === false || event.button !== 0
            || event.target?.closest?.('button,input,select,textarea,a')) return;
        const rect = panel.getBoundingClientRect();
        drag = { id: event.pointerId, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top,
            previous: preferred ?? { x: rect.left, y: rect.top }, point: { x: rect.left, y: rect.top } };
        header.setPointerCapture(event.pointerId); header.classList.add('dragging');
        event.preventDefault(); event.stopPropagation();
    });
    header.addEventListener('pointermove', event => {
        if (!drag || drag.id !== event.pointerId) return;
        drag.point = apply({ x: drag.left + event.clientX - drag.startX, y: drag.top + event.clientY - drag.startY });
        event.preventDefault(); event.stopPropagation();
    });
    header.addEventListener('pointerup', event => finish(event, false));
    header.addEventListener('pointercancel', event => finish(event, true));
    header.addEventListener('lostpointercapture', event => finish(event, true));
    viewport.addEventListener('resize', constrain);
    const observer = typeof viewport.ResizeObserver === 'function' ? new viewport.ResizeObserver(constrain) : null;
    observer?.observe(panel);
    constrain();
}
