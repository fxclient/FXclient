// Pure planning logic. Native commands encode the troop fraction in 10 bits.
export function planSend(balance, requested, maxDebit = balance, roundUp = false) {
    if (![balance, requested, maxDebit].every(Number.isFinite) || balance <= 0 || requested <= 0) return null;
    const fee = Math.floor(balance * 12 / 1024);
    let best = null;
    for (let code = 0; code < 1024; code++) {
        const troops = Math.min(Math.floor(balance * (code + 1) / 1024), balance - fee);
        if (troops <= 0 || troops + fee > maxDebit) continue;
        if (roundUp) {
            if (troops >= requested) return { code, troops, fee, debit: troops + fee };
        } else if (troops <= requested) best = { code, troops, fee, debit: troops + fee };
    }
    return best;
}

export function selectBot(candidates, playerId) {
    return candidates.filter(bot => bot.id !== playerId && bot.bot && bot.neighbor && bot.attackable && !bot.underMyAttack
        && Number.isFinite(bot.troops) && bot.troops >= 0 && Number.isSafeInteger(bot.territory) && bot.territory > 0)
        .sort((a, b) => a.troops - b.troops || b.territory - a.territory || a.id - b.id)[0] ?? null;
}

// Verified native per-wave formula, including troops defending against us.
export function combatCost(pixels, defenderBalance, defenderTerritory, counterTroops = 0, tileCost = 2) {
    const defenderLoss = Math.floor(pixels * defenderBalance / (1 + Math.floor(10 * defenderTerritory / 16)));
    return { defenderLoss, attackerLoss: pixels * tileCost + 2 * defenderLoss + counterTroops };
}

// Snapshot budget, not a prediction of future income, reinforcements or geometry.
// Each successful wave spends tileCost*pixels and twice the defender's loss.
// Until the last wave, defender loss <= current balance; final-wave overshoot
// is < 1.6*remaining balance. Add frontier slack for native strict comparisons.
export function estimateTroops(bot, tileCost = 2) {
    if (!Number.isFinite(bot.troops) || bot.troops < 0 || !Number.isSafeInteger(bot.territory)
        || bot.territory <= 0 || !Number.isFinite(bot.counterTroops) || bot.counterTroops < 0 || tileCost !== 2) return null;
    return Math.ceil((tileCost + 1) * bot.territory + 3.2 * bot.troops + bot.counterTroops + 1);
}

export function smartPlan(state, options) {
    const bot = selectBot(state.bots, state.playerId);
    if (!bot) return { reason: 'No available neighboring bots' };
    const required = estimateTroops(bot, state.tileCost);
    if (required === null) return { bot, reason: 'Unsupported combat state; no reliable estimate' };
    const multiplier = Number(options.safetyMultiplier), percentage = Number(options.maxPercentage);
    if (!Number.isFinite(multiplier) || multiplier < 1 || !Number.isFinite(percentage) || percentage < 1 || percentage > 50)
        return { bot, reason: 'Invalid Smart Attack settings' };
    const recommended = Math.ceil(required * multiplier);
    const send = planSend(state.balance, recommended, Math.floor(state.balance * percentage / 100), true);
    return send ? { bot, required, recommended, send } : { bot, required, recommended, reason: `Required troops and fee exceed ${percentage}%` };
}

export function validatePresets(presets) {
    if (!Array.isArray(presets)) throw new Error('Opening presets must be an array');
    const ids = new Set();
    return presets.map(preset => {
        if (!preset || typeof preset.id !== 'string' || !preset.id || ids.has(preset.id)
            || typeof preset.name !== 'string' || !preset.name.trim() || !Array.isArray(preset.actions))
            throw new Error('Each preset needs a unique ID, a name and actions');
        ids.add(preset.id);
        const actions = new Set();
        return { id: preset.id, name: preset.name.trim(), actions: preset.actions.map(action => {
            if (!action || typeof action.id !== 'string' || !action.id || actions.has(action.id)
                || !Number.isSafeInteger(action.tick) || action.tick < 1 || typeof action.enabled !== 'boolean'
                || !['troops', 'percent'].includes(action.mode) || !Number.isFinite(action.value) || action.value <= 0
                || (action.mode === 'percent' ? action.value > 100 : !Number.isSafeInteger(action.value)))
                throw new Error('Actions require tick >= 1, positive whole troops or a percentage in (0, 100]');
            actions.add(action.id);
            return { ...action };
        }).sort((a, b) => a.tick - b.tick) };
    });
}

export class OpeningScheduler {
    constructor(log = () => {}) { this.log = log; this.reset(); }
    reset() { this.tick = 0; this.seen = new Set(); }
    next(preset) {
        return preset?.actions.find(action => action.enabled && action.tick > this.tick
            && !this.seen.has(`${preset.id}/${action.id}`));
    }
    advance(tick, preset, enabled, state, send) {
        if (!Number.isSafeInteger(tick) || tick <= this.tick) return;
        this.tick = tick;
        if (!enabled || !preset || !state.allowed) return;
        for (const action of preset.actions) {
            const key = `${preset.id}/${action.id}`;
            if (!action.enabled || action.tick !== tick || this.seen.has(key)) continue;
            this.seen.add(key); // Consume before dispatch; failures are never retried.
            const balance = state.getBalance();
            const amount = action.mode === 'percent' ? Math.floor(balance * action.value / 100) : Math.min(balance, action.value);
            const plan = planSend(balance, amount);
            const result = plan && send(plan, state.neutralId);
            this.log(`Tick ${tick}: ${result ? `sending ${plan.troops} troops${action.mode === 'percent' ? ` (${action.value}%)` : ''}` : 'skipped, attack unavailable or insufficient troops'}`);
        }
    }
}
