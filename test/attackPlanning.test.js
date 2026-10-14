import test from 'node:test';
import assert from 'node:assert/strict';
import { planSend, combatCost, estimateTroops, selectBot, smartPlan, validatePresets, OpeningScheduler, openingTime, formatOpeningTick } from '../src/attackPlanning.js';

const action = (id, tick, mode = 'troops', value = 100) => ({ id, tick, mode, value, enabled: true });
const preset = (id, actions) => ({ id, name: id, actions });
const bot = (id, extra = {}) => ({ id, bot: true, neighbor: true, attackable: true, underMyAttack: false, troops: 100, territory: 20, counterTroops: 0, ...extra });

test('opening clock uses the same 0–9 ticks and rollover as the native balance HUD', () => {
    for (const [native, expected] of [[0, [0, 1, 0]], [9, [0, 1, 0]], [10, [1, 1, 1]],
        [69, [6, 1, 6]], [70, [7, 1, 7]], [99, [9, 1, 9]], [100, [10, 2, 0]], [140, [14, 2, 4]]]) {
        const t = openingTime(native); assert.deepEqual([t.absolute, t.cycle, t.tick], expected);
    }
    assert.equal(openingTime(undefined), null); assert.equal(openingTime(-1), null);
    assert.equal(formatOpeningTick(14), 'Cycle 2, Tick 4');
});

test('explicit cycle 1 / tick 0 executes at the start, not again on repeated callbacks', () => {
    const scheduler = new OpeningScheduler(); let calls = 0;
    const p = preset('zero', [action('start', 0)]);
    validatePresets([p]);
    for (let i = 0; i < 10; i++) scheduler.advance(0, p, true, { allowed: true, getBalance: () => 1000 }, () => { calls++; return true; });
    assert.equal(calls, 1);
});

test('presets validate, sort and preserve IDs; reject invalid input', () => {
    assert.deepEqual(validatePresets([preset('p', [action('b', 7), action('a', 2)])])[0].actions.map(a => a.tick), [2, 7]);
    for (const invalid of [action('a', -1), action('a', 1, 'percent', 101), action('a', 1, 'troops', -5), action('a', 1, 'troops', 1.5), action('a', 1, 'percent', NaN)])
        assert.throws(() => validatePresets([preset('p', [invalid])]));
    assert.throws(() => validatePresets([preset('p', []), preset('p', [])]));
    assert.throws(() => validatePresets([preset('p', [action('a', 1), action('a', 2)])]));
});

test('native fraction rounding never exceeds requested troops or total cap', () => {
    for (const balance of [1, 100, 1023, 1024, 123456, 1500000000]) {
        for (const requested of [1, 100, 999, balance / 2, balance]) {
            const send = planSend(balance, requested, balance);
            if (send) { assert.ok(send.troops <= requested); assert.ok(send.debit <= balance); }
            const smart = planSend(balance, requested, Math.floor(balance / 2), true);
            if (smart) { assert.ok(smart.troops >= requested); assert.ok(smart.debit <= Math.floor(balance / 2)); }
        }
    }
    assert.equal(planSend(10000, 5000, 5000, true), null); // fee pushes it above 50%
    assert.equal(planSend(0, 100), null);
});

test('one-shot scheduling, current balance, skipped ticks, switch, OFF and new game', () => {
    const scheduler = new OpeningScheduler();
    let balance = 10000;
    const sent = [];
    const state = { allowed: true, neutralId: 512, getBalance: () => balance };
    const send = (plan, target) => { sent.push([plan.troops, target]); balance -= plan.debit; return true; };
    const a = preset('a', [action('a', 1, 'percent', 20), action('b', 2), action('c', 4)]);
    const b = preset('b', [action('a', 1), action('b', 3)]);
    scheduler.advance(1, a, true, state, send);
    scheduler.advance(1, a, true, state, send);
    assert.equal(sent.length, 1); assert.ok(sent[0][0] <= 2000); assert.equal(sent[0][1], 512);
    scheduler.advance(2, b, true, state, send);
    scheduler.advance(3, b, true, state, send);
    scheduler.advance(4, a, false, state, send);
    scheduler.advance(5, a, true, state, send);
    assert.equal(sent.length, 2);
    scheduler.reset(); scheduler.advance(1, a, true, state, send);
    assert.equal(sent.length, 3);
});

test('multiple actions at one tick recalculate balance, disabled/replay consume no commands', () => {
    const scheduler = new OpeningScheduler(); let balance = 10000; const sent = [];
    const p = preset('p', [action('a', 1, 'percent', 50), action('b', 1, 'percent', 50), { ...action('c', 1), enabled: false }]);
    scheduler.advance(1, p, true, { allowed: true, neutralId: 512, getBalance: () => balance }, plan => {
        sent.push(plan.troops); balance -= plan.debit; return true;
    });
    assert.equal(sent.length, 2); assert.ok(sent[1] < sent[0]);
    scheduler.reset(); scheduler.advance(1, p, true, { allowed: false }, () => assert.fail('replay sent attack'));
    scheduler.advance(2, p, true, { allowed: true }, () => assert.fail('late action'));
});

test('failed native command consumed exactly once; switch back cannot repeat action', () => {
    let calls = 0; const s = new OpeningScheduler(); const p = preset('p', [action('a', 1)]);
    const state = { allowed: true, getBalance: () => 1000 };
    s.advance(1, p, true, state, () => { calls++; return false; });
    s.advance(1, null, false, state, () => calls++);
    s.advance(1, p, true, state, () => calls++);
    assert.equal(calls, 1);
});

test('target selection: troops, larger territory, stable ID and only own attacks excluded', () => {
    assert.equal(selectBot([bot(1), bot(2, { troops: 50, underMyAttack: true }), bot(3, { troops: 1, neighbor: false }), bot(4, { troops: 1, attackable: false })], 0).id, 1);
    assert.equal(selectBot([bot(2), bot(1, { territory: 30 }), bot(3, { territory: 30 })], 0).id, 1);
    assert.equal(selectBot([bot(1, { underOtherAttack: true })], 0).id, 1);
    assert.equal(selectBot([bot(1, { bot: false }), bot(0)], 0), null);
});

test('confirmed wave formula uses defender balance and counter-attack troops', () => {
    assert.deepEqual(combatCost(10, 1000, 160, 40), { defenderLoss: 99, attackerLoss: 258 });
    assert.equal(estimateTroops(bot(1), 3), null);
    assert.equal(estimateTroops(bot(1, { counterTroops: NaN })), null);
    assert.ok(estimateTroops(bot(1)) > 0);
});

test('Smart Attack safety margin and hard total 50% cap', () => {
    const options = { maxPercentage: 50, safetyMultiplier: 1.1 };
    const state = { playerId: 0, bots: [bot(1)], balance: 10000, tileCost: 2 };
    const result = smartPlan(state, options);
    assert.ok(result.send.troops >= Math.ceil(result.required * 1.1)); assert.ok(result.send.debit <= 5000);
    assert.ok(smartPlan({ ...state, balance: 100 }, options).reason);
    assert.ok(smartPlan(state, { ...options, maxPercentage: 51 }).reason);
    assert.ok(smartPlan({ ...state, bots: [] }, options).reason);
});

test('snapshot budget survives varied native combat wave sizes without income', () => {
    let seed = 12345;
    const random = max => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed % max; };
    for (let i = 0; i < 1000; i++) {
        const target = bot(1, { territory: 1 + random(2000), troops: random(300000), counterTroops: random(10000) });
        let remaining = estimateTroops(target), territory = target.territory, balance = target.troops, counter = target.counterTroops;
        while (territory > 0) {
            const pixels = 1 + random(territory);
            const budget = Math.floor(remaining / pixels) * pixels;
            const cost = combatCost(pixels, balance, territory, counter);
            assert.ok(budget > cost.attackerLoss, `insufficient frontier budget at case ${i}`);
            remaining -= cost.attackerLoss;
            balance -= Math.min(balance, cost.defenderLoss);
            territory -= pixels; counter = 0;
        }
    }
});
