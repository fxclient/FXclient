import automation, { validateConfig } from './automation.js';
import { getSettings } from './settings.js';
import WindowManager from './windowManager.js';
import { createSmartAttackKeyHandler } from './smartAttackInput.js';
import { formatOpeningTick, openingTime } from './attackPlanning.js';
import { openingTransferUI } from './openingTransferUI.js';
import { STRATEGIES, presetStatus, presetGroup, groupedPresets, evaluationCycleFor } from './openingPresets.js';
import { makePanelDraggable } from './draggablePanel.js';

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
        element('p', 'Singleplayer only. Ticks match the 0–9 counter beside your troop balance. Cycle 1 starts at Tick 0; the next 0 is Cycle 2. Apply saves immediately.', body);
        openingTransferUI(body, { automation,
            hasPendingChanges: () => JSON.stringify(draft) !== JSON.stringify(automation.config),
            selectedId: () => selected,
            onImported: () => { draft = copy(automation.config); error.textContent = 'Presets imported; activation unchanged. Choose a preset explicitly to run it.'; render(); },
            showError: message => { error.textContent = message; error.scrollIntoView({ block: 'nearest' }); } });
        check(body, 'Enable Scheduler', draft.enabled, value => draft.enabled = value);
        const picker = element('select', undefined, body);
        picker.setAttribute('aria-label', 'Opening preset');
        element('option', 'Select preset', picker).value = '';
        draft.presets.forEach(preset => element('option', `${preset.name} · ${preset.targetCycle ? `C${preset.targetCycle} · ` : ''}${presetStatus(preset)}`, picker).value = preset.id);
        picker.value = selected ?? '';
        picker.addEventListener('change', () => { selected = picker.value; render(); });
        button(body, 'New preset', () => {
            const preset = { id: id(), name: 'My Opening', actions: [] };
            draft.presets.push(preset); selected = preset.id; render();
        });
        const preset = draft.presets.find(p => p.id === selected);
        if (preset) {
            element('p', `${presetStatus(preset)} · ${STRATEGIES[preset.strategy] ?? 'Custom'}${preset.targetCycle ? ` · Target: start of C${preset.targetCycle}` : ''}${evaluationCycleFor(preset) ? ` · Evaluation: C${evaluationCycleFor(preset)}` : ''}`, body);
            if (preset.notes) element('p', preset.notes, body);
            const edited = () => { preset.status = 'experimental_unvalidated'; };
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
                check(row, 'On', action.enabled, value => { action.enabled = value; edited(); });
                let cycle = Math.floor(action.tick / 10) + 1, hudTick = action.tick % 10;
                const updateTime = () => { action.tick = Number.isSafeInteger(cycle) && cycle >= 1
                    && Number.isInteger(hudTick) && hudTick >= 0 && hudTick <= 9 ? (cycle - 1) * 10 + hudTick : NaN; edited(); };
                readNumber(row, 'Cycle', cycle, 1, null, 1, value => { cycle = value; updateTime(); });
                readNumber(row, 'Tick (HUD)', hudTick, 0, 9, 1, value => { hudTick = value; updateTime(); });
                const mode = element('select', undefined, row);
                mode.setAttribute('aria-label', 'Send mode');
                element('option', 'Troops', mode).value = 'troops';
                element('option', 'Percent', mode).value = 'percent';
                mode.value = action.mode;
                mode.addEventListener('change', () => { action.mode = mode.value; edited(); render(); });
                readNumber(row, 'Value', action.value, action.mode === 'percent' ? 0 : 0.01, action.mode === 'percent' ? 100 : null,
                    0.01, value => { action.value = value; edited(); });
                button(row, 'Delete action', () => { preset.actions = preset.actions.filter(a => a.id !== action.id); edited(); render(); });
            });
            button(body, 'Add action', () => {
                preset.actions.push({ id: id(), tick: (preset.actions.at(-1)?.tick ?? 0) + 1, mode: 'percent', value: 20, enabled: true }); edited(); render();
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
    header.title = 'Drag to move Opening Control';
    const title = element('span', 'OPENING CONTROL', header);
    const collapse = button(header, '−', () => automation.update({ ...automation.config, collapsed: !automation.config.collapsed }));
    collapse.setAttribute('aria-label', 'Collapse or expand Opening Control');
    const content = element('div', undefined, panel);
    const presets = element('div', undefined, content); presets.className = 'opening-presets';
    const active = element('div', undefined, content);
    const current = element('div', undefined, content);
    const next = element('div', undefined, content);
    const smartControls = element('div', undefined, panel); smartControls.className = 'opening-presets';
    const smartToggle = button(smartControls, 'Smart: OFF', () => automation.update({ ...automation.config,
        smart: { ...automation.config.smart, enabled: !automation.config.smart.enabled } }));
    const smartSend = button(smartControls, 'Attack bot', () => automation.smartAttack());
    const notification = element('div', '', panel); notification.setAttribute('role', 'status');
    button(content, 'Edit / Settings', () => WindowManager.openWindow('settings'));
    let buttonsKey = '';
    let selectedStrategy = '', selectedCycle = '', selectedPreset = '';
    const renderSelectors = () => {
        const groups = groupedPresets(automation.config.presets);
        const saved = automation.preset();
        if (!selectedStrategy && saved) { selectedStrategy = presetGroup(saved); selectedCycle = String(saved.targetCycle ?? 'custom'); selectedPreset = saved.id; }
        presets.replaceChildren();
        const off = button(presets, 'OFF', () => automation.select(null));
        off.setAttribute('aria-pressed', String(!automation.config.enabled));
        if (!groups.length) { element('span', 'No presets saved', presets); return; }
        if (!groups.some(group => group.strategy === selectedStrategy)) selectedStrategy = groups[0].strategy;
        const strategyLabel = element('label', 'Strategy ', presets), strategy = element('select', undefined, strategyLabel);
        strategy.setAttribute('aria-label', 'Opening strategy');
        groups.forEach(group => element('option', group.label, strategy).value = group.strategy);
        strategy.value = selectedStrategy;
        strategy.addEventListener('change', () => { selectedStrategy = strategy.value; selectedCycle = ''; selectedPreset = ''; renderSelectors(); });
        const group = groups.find(item => item.strategy === selectedStrategy);
        const cycles = [...new Set(group.presets.map(p => p.targetCycle ?? 'custom'))];
        if (!cycles.some(cycle => String(cycle) === selectedCycle)) selectedCycle = String(cycles[0]);
        const cycleLabel = element('label', 'End cycle ', presets), cycle = element('select', undefined, cycleLabel);
        cycle.setAttribute('aria-label', 'Opening end cycle');
        cycles.forEach(value => element('option', value === 'custom' ? 'Custom' : `C${value}`, cycle).value = String(value));
        cycle.value = selectedCycle; cycleLabel.hidden = selectedStrategy === 'custom' && cycles.length === 1;
        cycle.addEventListener('change', () => { selectedCycle = cycle.value; selectedPreset = ''; renderSelectors(); });
        const options = group.presets.filter(p => String(p.targetCycle ?? 'custom') === selectedCycle);
        if (!options.some(p => p.id === selectedPreset)) selectedPreset = options[0]?.id ?? '';
        const variants = element('select', undefined, presets); variants.setAttribute('aria-label', 'Opening preset variant');
        options.forEach(p => element('option', p.name, variants).value = p.id);
        variants.value = selectedPreset; variants.hidden = options.length === 1 && selectedStrategy !== 'custom';
        variants.addEventListener('change', () => { selectedPreset = variants.value; renderSelectors(); });
        const chosen = options.find(p => p.id === selectedPreset);
        const activate = button(presets, 'Activate', () => automation.select(selectedPreset)); activate.disabled = !chosen;
        activate.setAttribute('aria-pressed', String(automation.config.enabled && automation.config.activeId === selectedPreset));
        if (chosen) element('small', `${chosen.name}${chosen.targetCycle ? ` · C${chosen.targetCycle}` : ''} · ${presetStatus(chosen)}`, presets);
    };
    const render = () => {
        const config = automation.config, preset = automation.preset();
        content.hidden = config.collapsed;
        title.textContent = config.collapsed ? `Opening: ${config.enabled ? preset?.name : 'OFF'}` : 'OPENING CONTROL';
        collapse.textContent = config.collapsed ? '+' : '−';
        collapse.setAttribute('aria-expanded', String(!config.collapsed));
        const key = JSON.stringify([config.presets.map(p => [p.id, p.name, p.strategy, p.targetCycle, p.status]), config.enabled, config.activeId]);
        if (key !== buttonsKey) {
            buttonsKey = key; renderSelectors();
        }
        active.textContent = config.enabled ? `Active: ${preset?.name}${preset?.targetCycle ? ` · C${preset.targetCycle}` : ''} · ${presetStatus(preset)}` : 'Opening: OFF';
        const action = config.enabled && automation.scheduler.next(preset);
        const state = automation.hooks?.snapshot();
        const time = openingTime(state?.nativeTick);
        current.textContent = state?.allowed && time ? `Now: ${formatOpeningTick(time.absolute)}` : 'Waiting · singleplayer only';
        next.textContent = action
            ? `Next: ${formatOpeningTick(action.tick)} — ${action.value}${action.mode === 'percent' ? '%' : ' troops'}` : 'No future actions';
        notification.textContent = config.smart.notifications ? automation.message : '';
        smartToggle.textContent = `Smart: ${config.smart.enabled ? 'ON' : 'OFF'}`;
        smartToggle.setAttribute('aria-pressed', String(config.smart.enabled));
        smartSend.textContent = `Attack bot [${config.smart.key}]`;
        smartSend.disabled = !config.smart.enabled;
    };
    automation.listeners.add(render);
    render();
    makePanelDraggable(panel, header, { position: automation.config.panelPosition,
        save: panelPosition => automation.update({ ...automation.config, panelPosition }),
        onError: error => { automation.message = 'Panel position was not saved: ' + error.message; automation.changed(); } });
    // Refresh waiting/end state even when the native simulation is paused.
    setInterval(render, 500);
    document.addEventListener('keydown', createSmartAttackKeyHandler(automation, getSettings, document), true);
}
