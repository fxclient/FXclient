import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parsePresetFile } from '../src/openingPresets.js';
import { EXACT_CONFORMANCE_TESTS, evaluateOpening, exportRecalculatedPreset } from '../src/openingEvaluation.js';

const presets = parsePresetFile(new Uint8Array(fs.readFileSync(new URL('../static/opening/territorial_opening_presets_35.zip', import.meta.url))), 'pack.zip');
const scenario = JSON.parse(fs.readFileSync(new URL('../docs/opening-scenario.example.json', import.meta.url), 'utf8'));

test('capture v2 missing evaluationCycle uses the strategy horizon without trusting modeled results', async () => {
    const capture = parsePresetFile(new Uint8Array(fs.readFileSync(new URL('./fixtures/territorial_capture_v2_presets.zip', import.meta.url))), 'pack.zip');
    for (const preset of capture) {
        const report = await evaluateOpening(preset, scenario);
        assert.equal(report.evaluationNativeTick, (preset.targetCycle + (preset.strategy === 'long_term' ? 3 : 0) - 1) * 100);
        assert.equal(report.exactSimulator, false);
        assert.ok(Object.values(report.metrics).every(value => value === null));
    }
});

test('all 35 prepare explicit evaluation requests without fabricated metrics or validated labels', async () => {
    for (const preset of presets) {
        const report = await evaluateOpening(preset, scenario);
        assert.equal(report.exactSimulator, false); assert.equal(report.status, 'experimental_unvalidated');
        assert.ok(report.blockers.length); assert.ok(Object.values(report.metrics).every(value => value === null));
        assert.ok(report.actions.every(action => action.nativeTick < report.targetNativeTick));
        assert.equal(report.evaluationNativeTick, ((preset.strategy === 'long_term' ? preset.targetCycle + 3 : preset.targetCycle) - 1) * 100);
        assert.throws(() => exportRecalculatedPreset(preset, report), /successful exact/);
    }
});

test('approximate models, changed game sources, missing geometry and failed tests cannot validate', async () => {
    const preset = presets[0];
    await assert.rejects(evaluateOpening(preset, scenario, { exact: false }), /Exact adapter/);
    await assert.rejects(evaluateOpening(preset, scenario, { exact: true, sourceSha256: '0'.repeat(64) }), /mismatch/);
    await assert.rejects(evaluateOpening(preset, scenario, { exact: true, sourceSha256: scenario.gameSourceSha256 }), /hashed map/);
    const complete = { ...scenario, map: { id: 'fixture', sha256: 'a'.repeat(64) }, availableNeutralLand: 1000 };
    await assert.rejects(evaluateOpening(preset, complete, { exact: true, sourceSha256: scenario.gameSourceSha256, selfTest: async () => [] }), /conformance/);
    assert.throws(() => exportRecalculatedPreset(preset, JSON.parse(JSON.stringify({ status: 'validated', exactSimulator: true }))), /successful exact/);
});

test('future exact-adapter contract requires source-linked self-tests and complete metrics before validated export', async () => {
    // Contract test only. This stub is not an implemented game simulator.
    const preset = presets.find(p => p.strategy === 'long_term');
    const complete = { ...scenario, map: { id: 'fixture', sha256: 'a'.repeat(64) }, availableNeutralLand: 1000 };
    const adapter = { exact: true, sourceSha256: scenario.gameSourceSha256,
        selfTest: async () => EXACT_CONFORMANCE_TESTS.map(name => ({ name, passed: true, fixtureSha256: 'b'.repeat(64) })),
        run: async () => ({ finalArmy: 1, finalTerritory: 1, cumulativeIncome: 0, attackCount: 1, totalCosts: 0,
            lastAttackFinishedTick: 10, minimumReserve: 0, evaluationArmy: 1 }) };
    const report = await evaluateOpening(preset, complete, adapter);
    assert.equal(exportRecalculatedPreset(preset, report).status, 'validated');
    assert.throws(() => exportRecalculatedPreset({ ...preset, name: 'changed' }, report), /changed after/);
    await assert.rejects(evaluateOpening(preset, complete, { ...adapter, run: async () => ({}) }), /metric/);
});
