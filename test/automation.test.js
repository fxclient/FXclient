import test from 'node:test';
import assert from 'node:assert/strict';

const storage = new Map();
globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) };
const { Automation, defaultConfig, validateConfig } = await import('../src/automation.js');
const action = (id, tick) => ({ id, tick, mode: 'troops', value: 100, enabled: true });
const p = { id: 'p', name: 'Test', actions: [action('a', 1), action('b', 3)] };

function fixture(allowed = true) {
    const calls = []; let active = false;
    const engine = { allowed, nativeTick: 0, balance: 10000, getBalance: () => 10000, playerId: 0, neutralId: 512, tileCost: 2,
        bots: () => [{ id: 1, bot: true, neighbor: true, attackable: true, underMyAttack: active, troops: 10, territory: 10, counterTroops: 0 }] };
    const config = { ...defaultConfig(), presets: [p], activeId: 'p', enabled: true };
    config.smart.enabled = true;
    const automation = new Automation(config, () => {}, () => {});
    automation.install({ snapshot: () => engine, send: (code, target) => { calls.push([code, target]); active = target !== 512; return true; } });
    return { automation, engine, calls, finish: () => active = false,
        step: () => { engine.nativeTick += 10; automation.onTick(); } };
}

test('default OFF, configuration roundtrip, malformed data rejection', () => {
    assert.equal(defaultConfig().enabled, false);
    assert.equal(defaultConfig().smart.enabled, false);
    const config = validateConfig({ ...defaultConfig(), presets: [p], activeId: 'p', enabled: true });
    assert.deepEqual(validateConfig(JSON.parse(JSON.stringify(config))), config);
    for (const smart of [{ maxPercentage: 51 }, { safetyMultiplier: 0.9 }, { key: '' }, { key: ' ' }])
        assert.throws(() => validateConfig({ ...defaultConfig(), smart }));
});

test('game lifecycle resets schedule and OFF cancels immediately', () => {
    const { automation: a, engine, calls, step } = fixture();
    step(); assert.equal(calls.length, 1);
    a.select(null); step(); step(); assert.equal(calls.length, 1);
    a.select('p'); step(); assert.equal(calls.length, 1);
    a.reset(); engine.nativeTick = 0; step(); assert.equal(calls.length, 2);
});

test('replay, multiplayer, pause, dead player and ended game dispatch nothing', () => {
    // Adapter's allowed flag is computed from all native eligibility conditions.
    for (const mode of ['replay', 'multiplayer', 'paused', 'dead', 'ended']) {
        const { automation: a, calls } = fixture(false);
        a.onTick(); a.smartAttack(); assert.equal(calls.length, 0, mode);
    }
});

test('smart press limit and native active attack eligibility after completion', () => {
    const { automation: a, calls, finish, step } = fixture();
    a.select(null);
    assert.equal(a.smartAttack(), true); assert.equal(calls.length, 1);
    assert.equal(a.smartAttack(), false); assert.equal(calls.length, 1);
    step(); a.smartAttack(); assert.equal(calls.length, 1); // own active attack excluded
    finish(); step(); a.smartAttack(); assert.equal(calls.length, 2);
});

test('changing presets cannot replay elapsed actions, including switch back', () => {
    const { automation: a, calls, step } = fixture();
    step(); step();
    a.update({ ...a.config, presets: [...a.config.presets, { id: 'q', name: 'Other', actions: [action('a', 1), action('b', 4)] }] });
    a.select('q'); step(); assert.equal(calls.length, 1);
    step(); assert.equal(calls.length, 2);
    a.select('p'); step(); assert.equal(calls.length, 2);
});

test('disabled, uninitialized and ineligible Smart Attack report why they cannot run', () => {
    const { automation: a, engine, calls } = fixture();
    a.update({ ...a.config, smart: { ...a.config.smart, enabled: false } });
    assert.equal(a.smartAttack(), false); assert.match(a.message, /Disabled/);
    a.update({ ...a.config, smart: { ...a.config.smart, enabled: true } });
    const hooks = a.hooks; a.hooks = null;
    assert.equal(a.smartAttack(), false); assert.match(a.message, /Waiting/);
    a.hooks = hooks; engine.allowed = false; engine.blockedReason = 'Game is paused';
    assert.equal(a.smartAttack(), false); assert.equal(a.message, 'Game is paused');
    assert.equal(calls.length, 0);
});

test('opening follows the balance HUD: no send during HUD 0, exactly once at HUD 7', () => {
    const { automation: a, engine, calls } = fixture();
    a.update({ ...a.config, presets: [{ ...p, actions: [action('hud7', 7), action('nextCycle', 10)] }] });
    for (let native = 0; native < 70; native++) {
        engine.nativeTick = native;
        a.onTick(); a.onTick(); // More callbacks do not accelerate native time.
        assert.equal(calls.length, 0, `sent early at native tick ${native}`);
    }
    engine.nativeTick = 70; a.onTick(); a.onTick(); assert.equal(calls.length, 1);
    for (let native = 71; native < 100; native++) { engine.nativeTick = native; a.onTick(); }
    assert.equal(calls.length, 1);
    engine.nativeTick = 100; a.onTick(); a.onTick(); assert.equal(calls.length, 2);
});

test('native time jumps do not catch up missed HUD ticks; missing clock cannot send', () => {
    const { automation: a, engine, calls } = fixture();
    engine.nativeTick = undefined;
    for (let i = 0; i < 50; i++) a.onTick();
    assert.equal(calls.length, 0);
    engine.nativeTick = 0; a.onTick();
    engine.nativeTick = 20; a.onTick(); // Missed tick 1.
    assert.equal(calls.length, 0);
    engine.nativeTick = 30; a.onTick(); assert.equal(calls.length, 1);
});

test('old simulation-step presets are preserved but disarmed until reviewed', () => {
    const config = defaultConfig(); delete config.timingVersion;
    const migrated = validateConfig({ ...config, presets: [p], activeId: 'p', enabled: true });
    assert.equal(migrated.enabled, false); assert.equal(migrated.presets[0].actions[0].tick, 1);
    assert.equal(migrated.timingVersion, 'hud-v1');
    assert.equal(validateConfig({ ...migrated, enabled: true }).enabled, true);
});

test('storage failure leaves the saved and in-memory preset collection unchanged', () => {
    const config = { ...defaultConfig(), presets: [p] };
    const a = new Automation(config, () => { throw new Error('QuotaExceeded'); }, () => {});
    assert.throws(() => a.update({ ...a.config, presets: [] }), /QuotaExceeded/);
    assert.deepEqual(a.config.presets, config.presets);
});
