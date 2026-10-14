import { OpeningScheduler, smartPlan, validatePresets } from './attackPlanning.js';

export const defaultConfig = () => ({ presets: [], activeId: null, enabled: false, collapsed: false,
    smart: { enabled: false, key: '.', maxPercentage: 50, safetyMultiplier: 1.10, notifications: true } });

export function validateConfig(value) {
    const config = { ...defaultConfig(), ...value, smart: { ...defaultConfig().smart, ...value?.smart } };
    config.presets = validatePresets(config.presets);
    if (config.activeId !== null && !config.presets.some(p => p.id === config.activeId)) config.activeId = null;
    config.enabled = config.enabled === true && config.activeId !== null;
    config.collapsed = config.collapsed === true;
    const s = config.smart;
    s.enabled = s.enabled === true;
    s.notifications = s.notifications === true;
    if (typeof s.key !== 'string' || s.key.length !== 1 || /\s/.test(s.key) || !Number.isFinite(s.maxPercentage)
        || s.maxPercentage < 1 || s.maxPercentage > 50 || !Number.isFinite(s.safetyMultiplier) || s.safetyMultiplier < 1)
        throw new Error('Smart Attack needs a single key, max 1–50%, multiplier >= 1');
    return config;
}

export class Automation {
    constructor(config = defaultConfig(), save = () => {}, log = console.log) {
        this.config = validateConfig(config);
        this.save = save;
        this.log = log;
        this.listeners = new Set();
        this.hooks = null;
        this.scheduler = new OpeningScheduler(message => this.log('[Opening] ' + message));
        this.tick = 0;
        this.lastSmartTick = -1;
        this.message = '';
    }
    install(hooks) {
        if (typeof hooks?.snapshot !== 'function' || typeof hooks?.send !== 'function') throw new Error('[Automation] Invalid native hooks');
        this.hooks = hooks;
    }
    reset() {
        this.tick = 0;
        this.lastSmartTick = -1;
        this.scheduler.reset();
        this.message = '';
        this.changed();
    }
    changed() { this.listeners.forEach(callback => callback()); }
    update(config) {
        this.config = validateConfig(config);
        this.save(this.config);
        this.changed();
    }
    select(id) {
        this.update({ ...this.config, activeId: id, enabled: id !== null });
        this.log(id === null ? '[Opening] Disabled by user' : `[Opening] Selected preset: ${this.preset()?.name}`);
    }
    preset() { return this.config.presets.find(preset => preset.id === this.config.activeId); }
    onTick() {
        if (!this.hooks) return;
        const state = this.hooks.snapshot();
        this.scheduler.advance(++this.tick, this.preset(), this.config.enabled, state,
            (plan, target) => this.hooks.send(plan.code, target));
        this.changed();
    }
    notifySmart(message) {
        this.message = message;
        this.log('[SmartAttack] ' + message);
        this.changed();
    }
    smartAttack() {
        if (!this.config.smart.enabled) { this.notifySmart('Disabled: enable Smart Attack in settings or on the panel'); return false; }
        if (!this.hooks) { this.notifySmart('Waiting for an active singleplayer match'); return false; }
        const state = this.hooks.snapshot();
        if (!state.allowed) { this.notifySmart(state.blockedReason || 'Unavailable: requires an active, unpaused singleplayer match'); return false; }
        if (this.lastSmartTick === this.tick) return false;
        this.lastSmartTick = this.tick; // One dispatch per simulation tick, including rapid key presses.
        const bots = state.bots();
        this.log(`[SmartAttack] ${bots.length} neighboring bots, ${bots.filter(b => b.underMyAttack).length} under my attack`);
        const plan = smartPlan({ ...state, bots }, this.config.smart);
        if (plan.bot) this.log(`[SmartAttack] Selected Bot #${plan.bot.id}: ${plan.bot.troops} troops; required estimate: ${plan.required ?? 'unavailable'}`);
        if (plan.reason) this.message = 'Skipped: ' + plan.reason;
        else {
            const sent = this.hooks.send(plan.send.code, plan.bot.id);
            this.message = sent ? `Bot #${plan.bot.id}: sending ${plan.send.troops} (+${plan.send.fee} fee), required estimate ${plan.required}` : 'Skipped: native command rejected';
        }
        this.log('[SmartAttack] ' + this.message);
        this.changed();
        return true;
    }
}

let config = defaultConfig();
try {
    const saved = localStorage.getItem('fx_automation');
    if (saved !== null) config = validateConfig(JSON.parse(saved));
} catch (error) { console.warn('[Automation] Invalid saved settings; disabled:', error.message); }
const automation = new Automation(config, value => {
    try { localStorage.setItem('fx_automation', JSON.stringify(value)); }
    catch (error) { console.warn('[Automation] Could not save settings:', error.message); }
});
export default automation;
