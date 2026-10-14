import fs from 'node:fs';
import crypto from 'node:crypto';
import { parsePresetFile } from '../src/openingPresets.js';
import { evaluateOpening } from '../src/openingEvaluation.js';

const source = 'game/latest.js';
if (!fs.existsSync(source)) throw new Error('Run npm run build first to download the native source');
const scenario = JSON.parse(fs.readFileSync(process.argv[2] ?? 'docs/opening-scenario.example.json', 'utf8'));
scenario.gameSourceSha256 = crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex');
const presets = parsePresetFile(new Uint8Array(fs.readFileSync('static/opening/territorial_opening_presets_35.zip')), 'pack.zip');
const reports = await Promise.all(presets.map(preset => evaluateOpening(preset, scenario)));
const output = process.argv[3] ?? 'build/opening-evaluation-report.json';
fs.writeFileSync(output, JSON.stringify({ schemaVersion: 1, exactSimulator: false, status: 'experimental_unvalidated', reports }, null, 2));
console.log(`Prepared ${reports.length} evaluation requests in ${output}; no exact simulator, no optimization or validated claims.`);
