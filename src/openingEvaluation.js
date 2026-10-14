import { exportPreset, externalTime, safeData } from './openingPresets.js';

export const EXACT_CONFORMANCE_TESTS = Object.freeze(['interest-order-rounding', 'territory-bonus-order', 'density-cap',
    'frontier-expansion', 'attack-completion', 'fraction-quantization']);
const validatedReports = new WeakSet();
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

export function prepareOpeningEvaluation(preset, scenario) {
    const portable = exportPreset(preset), input = safeData(scenario);
    requireValue(Number.isSafeInteger(portable.targetCycle) && portable.targetCycle >= 2, 'Evaluation needs an explicit targetCycle');
    requireValue(input.schemaVersion === 1 && input.type === 'territorial-opening-scenario', 'Unknown scenario schema');
    requireValue(input.mode === 'singleplayer', 'Only singleplayer evaluation is supported');
    requireValue(Number.isFinite(input.startArmy) && input.startArmy >= 0 && Number.isSafeInteger(input.startTerritory)
        && input.startTerritory >= 0 && Array.isArray(input.opponents) && input.map && typeof input.map.id === 'string', 'Scenario needs explicit starting values, map and opponents');
    requireValue(/^[a-f0-9]{64}$/i.test(input.gameSourceSha256), 'Scenario needs the exact native source SHA-256');
    return { schemaVersion: 1, type: 'territorial-opening-evaluation', presetId: portable.id,
        status: 'experimental_unvalidated', exactSimulator: false, scenario: input, presetFingerprint: JSON.stringify(portable),
        targetNativeTick: (portable.targetCycle - 1) * 100,
        evaluationNativeTick: ((portable.evaluationCycle ?? portable.targetCycle) - 1) * 100,
        actions: portable.actions.map(action => ({ ...action, nativeTick: externalTime(action.cycle, action.tickInCycle) * 10 })),
        requiredConformanceTests: [...EXACT_CONFORMANCE_TESTS],
        blockers: ['No exact native simulator is implemented; geometric frontier/attack completion and economic step ordering must be tested'],
        metrics: { finalArmy: null, finalTerritory: null, cumulativeIncome: null, attackCount: null,
            totalCosts: null, lastAttackFinishedTick: null, minimumReserve: null, evaluationArmy: null } };
}

// Future adapters are trusted local modules, never code loaded from preset files.
// No instantaneous "two troops = one pixel" approximation is accepted here.
export async function evaluateOpening(preset, scenario, adapter) {
    const report = prepareOpeningEvaluation(preset, scenario);
    if (!adapter) return report;
    requireValue(adapter.exact === true && adapter.sourceSha256?.toLowerCase() === scenario.gameSourceSha256.toLowerCase(), 'Exact adapter/source mismatch');
    requireValue(/^[a-f0-9]{64}$/i.test(scenario.map.sha256) && Number.isSafeInteger(scenario.availableNeutralLand)
        && scenario.availableNeutralLand >= 0, 'Exact validation requires a hashed map and explicit neutral land');
    const tests = safeData(await adapter.selfTest());
    requireValue(Array.isArray(tests) && EXACT_CONFORMANCE_TESTS.every(name => tests.some(result => result.name === name
        && result.passed === true && /^[a-f0-9]{64}$/i.test(result.fixtureSha256))), 'Native conformance tests are incomplete or failed');
    const metrics = safeData(await adapter.run(report));
    for (const field of ['finalArmy', 'finalTerritory', 'cumulativeIncome', 'attackCount', 'totalCosts', 'minimumReserve'])
        requireValue(Number.isFinite(metrics[field]) && metrics[field] >= 0, 'Missing/invalid exact metric: ' + field);
    requireValue(metrics.lastAttackFinishedTick === null && metrics.attackCount === 0
        || Number.isSafeInteger(metrics.lastAttackFinishedTick) && metrics.lastAttackFinishedTick >= 0, 'Missing attack completion metric');
    if (preset.strategy === 'long_term') requireValue(Number.isFinite(metrics.evaluationArmy) && metrics.evaluationArmy >= 0, 'Missing Long-term evaluation army');
    Object.assign(report, { status: 'validated', exactSimulator: true, blockers: [], conformanceTests: tests, metrics });
    validatedReports.add(report);
    return report;
}

export function exportRecalculatedPreset(preset, report) {
    requireValue(validatedReports.has(report) && report.status === 'validated' && report.exactSimulator === true, 'Validated export requires a successful exact evaluation in this process');
    const portable = exportPreset(preset);
    requireValue(JSON.stringify(portable) === report.presetFingerprint, 'Preset changed after validation');
    return { ...portable, status: 'validated', validation: { sourceSha256: report.scenario.gameSourceSha256,
        scenario: report.scenario, metrics: report.metrics, conformanceTests: report.conformanceTests } };
}
