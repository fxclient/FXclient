import automation, { validateConfig } from './automation.js';
import { getSettings } from './settings.js';
import WindowManager from './windowManager.js';

const element = (tag, text, parent) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    parent?.append(node);
    return node;
};
const button = (parent, text, action) => {
    const node = element('button', text, parent);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
};
const id = () => crypto.randomUUID();
const copy = value => JSON.parse(JSON.stringify(value));

// A custom settings element, following the existing settings manager's API.
// Apply is immediate and does not reload an active game.
export function OpeningSettings(container) {
    container.className = 'automation-editor';
    let draft;
    let selected = null;
    const error = element('p', '', container);
    error.setAttribute('role', 'alert');
    const body = element('div', undefined, container);
    const validateDraft = () => {
        try {
            validateConfig(draft);
            if (getSettings().attackPercentageKeybinds.some(binding => binding.key === draft.smart.key))
                throw new Error('Hotkey conflicts with an attack percentage keybind');
            return true;
        } catch (err) { error.textContent = err.message; error.scrollIntoView({ block: 'nearest' }); return false; }
    };
    const readNumber = (parent, label, value, min, max, step, change) => {
        const wrapper = element('label', label + ' ', parent);
        const input = element('input', undefined, wrapper);
        input.type = 'number'; input.value = value; input.min = min; input.step = step;
        if (max !== null) input.max = max;
        input.addEventListener('input', () => change(input.value === '' ? NaN : Number(input.value)));
        return input;
    };
    const check = (parent, label, value, change) => {
        const wrapper = element('label', label + ' ', parent);
        const input = element('input', undefined, wrapper);
        input.type = 'checkbox'; input.checked = value;
        input.addEventListener('change', () => change(input.checked));
    };
    const render = () => {
        body.replaceChildren();
        element('h3', 'Opening', body);
        element('p', 'Singleplayer only. Absolute game ticks start at 1. Apply Opening / Smart Attack saves immediately; no reload needed.', body);
        check(body, 'Enable Scheduler', draft.enabled, value => draft.enabled = value);
        const picker = element('select', undefined, body);
        picker.setAttribute('aria-label', 'Opening preset');
        element('option', 'Select preset', picker).value = '';
        draft.presets.forEach(preset => element('option', preset.name, picker).value = preset.id);
        picker.value = selected ?? '';
        picker.addEventListener('change', () => { selected = picker.value; render(); });
        button(body, 'New preset', () => {
            const preset = { id: id(), name: 'My Opening', actions: [] };
            draft.presets.push(preset); selected = preset.id; render();
        });
        const preset = draft.presets.find(p => p.id === selected);
        if (preset) {
            const name = element('input', undefined, body);
            name.setAttribute('aria-label', 'Preset name'); name.value = preset.name;
            name.addEventListener('input', () => preset.name = name.value);
            check(body, 'Active preset', draft.activeId === preset.id, value => {
                draft.activeId = value ? preset.id : null; render();
            });
            button(body, 'Duplicate preset', () => {
                const duplicate = { ...copy(preset), id: id(), name: preset.name + ' copy' };
                duplicate.actions.forEach(action => action.id = id());
                draft.presets.push(duplicate); selected = duplicate.id; render();
            });
            button(body, 'Delete preset', () => {
                draft.presets = draft.presets.filter(p => p.id !== preset.id);
                if (draft.activeId === preset.id) { draft.activeId = null; draft.enabled = false; }
                selected = null; render();
            });
            const rows = element('div', undefined, body);
            preset.actions.forEach(action => {
                const row = element('div', undefined, rows); row.className = 'opening-action';
                check(row, 'On', action.enabled, value => action.enabled = value);
                readNumber(row, 'Tick', action.tick, 1, null, 1, value => action.tick = value);
                const mode = element('select', undefined, row);
                mode.setAttribute('aria-label', 'Send mode');
                element('option', 'Troops', mode).value = 'troops';
                element('option', 'Percent', mode).value = 'percent';
                mode.value = action.mode;
                mode.addEventListener('change', () => { action.mode = mode.value; render(); });
                readNumber(row, 'Value', action.value, 0.01, action.mode === 'percent' ? 100 : null,
                    action.mode === 'percent' ? 0.01 : 1, value => action.value = value);
                button(row, 'Delete action', () => { preset.actions = preset.actions.filter(a => a.id !== action.id); render(); });
            });
            button(body, 'Add action', () => {
                preset.actions.push({ id: id(), tick: (preset.actions.at(-1)?.tick ?? 0) + 1, mode: 'percent', value: 20, enabled: true }); render();
            });
        }
        element('h3', 'Smart Attack', body);
        element('p', 'One press sends one attack. Uses a conservative snapshot estimate with safety margin; income and other battles can change the outcome. The cap includes the sending fee.', body);
        const smart = draft.smart;
        check(body, 'Enable Smart Bot Attack', smart.enabled, value => smart.enabled = value);
        const hotkeyLabel = element('label', 'Hotkey ', body);
        const hotkey = element('input', undefined, hotkeyLabel);
        hotkey.value = smart.key; hotkey.maxLength = 1;
        hotkey.addEventListener('input', () => smart.key = hotkey.value);
        readNumber(body, 'Maximum Attack Percentage', smart.maxPercentage, 1, 50, 1, value => smart.maxPercentage = value);
        readNumber(body, 'Safety Multiplier', smart.safetyMultiplier, 1, null, 0.01, value => smart.safetyMultiplier = value);
        check(body, 'Notifications', smart.notifications, value => smart.notifications = value);
        button(body, 'Apply Opening / Smart Attack', () => {
            if (!validateDraft()) return;
            automation.update(draft); draft = copy(automation.config);
            error.textContent = 'Saved'; render();
        });
    };
    this.update = () => { draft = copy(automation.config); selected = draft.activeId; error.textContent = ''; render(); };
    this.validate = validateDraft;
    this.save = () => automation.update(draft);
    this.update();
}

export function initAutomationUI() {
    const panel = element('section', undefined, document.getElementById('windowContainer'));
    panel.id = 'openingControl';
    panel.setAttribute('aria-label', 'Opening Control');
    const header = element('div', undefined, panel); header.className = 'opening-header';
    const title = element('span', 'OPENING CONTROL', header);
    const collapse = button(header, '−', () => automation.update({ ...automation.config, collapsed: !automation.config.collapsed }));
    collapse.setAttribute('aria-label', 'Collapse or expand Opening Control');
    const content = element('div', undefined, panel);
    const presets = element('div', undefined, content); presets.className = 'opening-presets';
    const active = element('div', undefined, content);
    const next = element('div', undefined, content);
    const notification = element('div', '', content); notification.setAttribute('role', 'status');
    button(content, 'Edit / Settings', () => WindowManager.openWindow('settings'));
    let buttonsKey = '';
    const render = () => {
        const config = automation.config, preset = automation.preset();
        content.hidden = config.collapsed;
        title.textContent = config.collapsed ? `Opening: ${config.enabled ? preset?.name : 'OFF'}` : 'OPENING CONTROL';
        collapse.textContent = config.collapsed ? '+' : '−';
        collapse.setAttribute('aria-expanded', String(!config.collapsed));
        const key = JSON.stringify([config.presets.map(p => [p.id, p.name]), config.enabled, config.activeId]);
        if (key !== buttonsKey) {
            buttonsKey = key; presets.replaceChildren();
            const off = button(presets, 'OFF', () => automation.select(null));
            off.setAttribute('aria-pressed', String(!config.enabled));
            config.presets.forEach(p => {
                const node = button(presets, p.name, () => automation.select(p.id));
                node.setAttribute('aria-pressed', String(config.enabled && config.activeId === p.id));
            });
        }
        active.textContent = config.enabled ? `Active: ${preset?.name}` : 'Opening: OFF';
        const action = config.enabled && automation.scheduler.next(preset);
        const allowed = automation.hooks?.snapshot().allowed;
        next.textContent = !allowed ? 'Waiting · singleplayer only' : action
            ? `Next: Tick ${action.tick} — ${action.value}${action.mode === 'percent' ? '%' : ' troops'}` : 'No future actions';
        notification.textContent = config.smart.notifications ? automation.message : '';
    };
    automation.listeners.add(render);
    render();
    // Refresh waiting/end state even when the native simulation is paused.
    setInterval(render, 500);
    document.addEventListener('keydown', event => {
        const target = event.target;
        if (!automation.config.smart.enabled || event.key !== automation.config.smart.key || event.repeat
            || event.ctrlKey || event.metaKey || event.altKey || event.isComposing
            || target?.closest?.('input,textarea,select,button,[contenteditable]:not([contenteditable="false"])')
            || [...document.querySelectorAll('.window,[role="dialog"],dialog[open]')].some(node => node.getClientRects().length > 0)
            || automation.hooks?.keyConflict?.(event.code)
            || automation.hooks?.inputBlocked?.()
            || getSettings().attackPercentageKeybinds.some(binding => binding.key === event.key)) return;
        if (automation.smartAttack()) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, true);
}
