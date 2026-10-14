# Portable Opening presets and experimental C2–C8 strategies

The existing Scheduler, native HUD clock, singleplayer guard and `fx_automation`
store are retained. The original FX general settings import/export uses a separate
`fx_settings` object; it neither includes automation nor understands the preset ZIP.
Use the dedicated Opening import/export controls for portable presets.

## Importing the provided pack

The exact user-provided `territorial_opening_presets_35.zip` is bundled in
`static/opening/`. **Load experimental pack (35)** reads it locally, validates the
manifest and its 35 JSON files and opens the same preview as **Import Presets**.
Nothing is written until **Import reviewed presets** is clicked. This review step
is intentional; the pack is not silently seeded into an existing browser's storage.
No external server, uploaded file, generated replacement strategy or automatic
activation is involved.

There are five groups with seven horizons each: Army, Expansion, Economy, Balanced
and Long-term at C2 through C8. Every supplied preset remains
`experimental_unvalidated`. `targetCycle` means its **start**, so every action must
be earlier. Long-term keeps `evaluationCycle = targetCycle + 3`; other strategies
evaluate at the target. Objective, notes, assumptions, additional fields and the
manifest's source/version metadata survive export and re-import. The objectives are
descriptions of heuristic intent, not results of a proved or measured optimization.
Balanced is not presented as an unnormalized sum of army and territory.

The editor shows status, strategy, target and evaluation horizon. Opening Control
uses Strategy and End cycle selectors plus Activate and OFF. Custom presets and
duplicate variants remain separately selectable. Changing a selector never starts
attacks. Active preset and next cycle/tick remain visible.

## Timing adapter

Version 1 of the supplied schema is explicitly **one-based slots**: `cycle >= 1`,
`tickInCycle` 1–10. The native HUD in this checkout is visibly **zero-based**, 0–9.
The mapping is stated in the preview rather than assuming they are identical:

| Portable action | Internal linear HUD index | Native simulation tick | HUD |
| --- | ---: | ---: | --- |
| Cycle 1, tickInCycle 1 | 0 | 0 | 0 |
| Cycle 1, tickInCycle 6 | 5 | 50 | 5 |
| Cycle 1, tickInCycle 10 | 9 | 90 | 9 |
| Cycle 2, tickInCycle 1 | 10 | 100 | 0 |

The formula is `((cycle - 1) * 10 + tickInCycle - 1) * 10`. Export reverses it.
The scheduler still uses actual native `bi.kr()`, not wall time or callback counts.
Unchanged IDs retain per-match execution history. Missed ticks never catch up;
repeated callbacks do not repeat a send; a new match resets execution history.

## Formats, conflicts and atomic storage

Supported input is one preset JSON, an array, an embedded collection/manifest, or
a ZIP with JSON files and an optional manifest. File-only manifests require their
actual files in the ZIP. Manifests are checked for missing references, duplicate
references, descriptor mismatches and undeclared JSON members. Unknown versions,
types, strategies, statuses and malformed actions are refused.

Presets need unique IDs and action IDs. Actions require unique times, valid mode,
finite positive troops or percent 0–100, explicit boolean enable flags and a time
strictly before targetCycle. A 0% action is an explicit no-op. Fractional troop
requests are permitted; the existing sender converts them to representable whole
troops without exceeding the requested quantity. Imported presets retain their
metadata when edited, but action edits reset status to Experimental.

Preview lists found/valid/conflicting counts and each Add/Skip/Rename/Replace.
Default **Skip** preserves existing data. **Rename** creates unique IDs and names.
**Replace** is available only through explicit selection; ambiguous ID/name matches
to different existing presets refuse replacement. Replacing the active preset keeps
its selection but disarms Scheduler. Other imports keep the original selected
preset and its enable state. No imported preset is automatically activated.

The entire file is validated before a plan can be committed. A critical error in
any member blocks the whole collection. Previews detect subsequent stored-preset
changes and require review again. Pending editor changes must be applied before
import. Saving calls `localStorage.setItem` before assigning the runtime config;
quota/storage failure leaves runtime state unchanged. Successful import refreshes
the editor and compact selectors immediately. Export one selected preset or all
saved presets as self-contained JSON; existing global FX JSON settings remain separate.

Imported `status=validated` is preserved only as metadata and displayed
**Validated (imported claim)**. It does not prove this engine/scenario was tested.
Status never grants activation permission.

## Input limits and archive safety

- Input archive: 4 MiB; individual JSON/ZIP member: 512 KiB; total expanded ZIP: 4 MiB.
- ZIP: at most 256 members; collection: at most 200 imported presets; 500 actions each.
- JSON: finite primitive values, bounded containers and nesting at most 32.
- Prototype keys `__proto__`, `prototype`, `constructor` are rejected recursively.
- ZIP paths are validated in central/local headers. Absolute, drive, backslash,
  control-character, empty, dot and parent segments are refused. No file is extracted
  to disk. Symlinks, encryption, ZIP64/multidisk layouts, duplicate case-insensitive
  paths and overlapping entry ranges are refused.
- Declared lengths and compression ratios are checked before decompression; raw
  DEFLATE is streamed in 64-byte input chunks with actual output limits. False sizes,
  truncated streams and bad CRC32 abort the import. README members are inert data.
- File strings use `textContent`, never `innerHTML`; JSON is never evaluated as code.

ZIP decoding uses the pinned fflate dependency. It operates entirely in memory.

## Offline evaluation: contract prepared, exact simulator absent

Run `npm run evaluate-openings` after a build. It reads the local `game/latest.js`,
records its SHA-256 and prepares 35 unvalidated requests using
`docs/opening-scenario.example.json`. An alternative scenario/output can be passed:

```powershell
npm run evaluate-openings -- my-scenario.json my-report.json
```

The example's army 512 and territory 84 are **configured example values**, not a
claim about default map spawns. Replace map ID/hash, opponent setup, neutral land,
starting values and economic/game options with the actual experiment. The example
deliberately lacks geometry/hash and neutral-land counts, so it cannot validate.

The current source hash is
`3a5e4b6464cd25245212bee3e546b4b2e4aa38d3f1a83757a7af315d86fe7fdf`.
The pack manifest reports source version `2.16.54`, dated 2026-09-25, with an explicit
runtime-verification warning. That manifest claim is preserved; matching current
combat/economy behavior is not assumed from the version string.

Inspection of this native source establishes:

- The Scheduler hook is before native `n8()` work; native counter increments last.
- `af.ee()` executes before attack progression `aG.ee()` and bot processing `ap.ee()`.
- Income runs when native tick `% 10 === 9`. Percentage income `aLd()` runs first,
  optional additional income `aLe()` second. At `% 100 === 99`, territory income
  `aLf()` follows both, before that step's attack progression.
- Percentage income computes `floor(rate * balance / 10000)`, with native minimum
  and player-specific rate rules; territory income normally computes
  `floor(32 * territory / 32)`. Scenario options can change both rates and add income.
- Native `bD.gv.gy/a5i` applies rounding, density/global caps and debt behavior.
- Neutral expansion uses real wave/frontier progression, available border cells,
  per-cell costs and attack lifetimes. Two troops are not instantaneously converted
  to one pixel in the evaluation infrastructure.

These observations are an audit, **not a complete reproduced exact simulator**.
Reports therefore have `exactSimulator=false`, explicit blockers and null metrics.
No numerical performance, Pareto optimality or best strategy claim is produced.

The future trusted local adapter contract requires matching native source hash,
hashed map and explicit neutral land, passing source-linked conformance tests for
income order/rounding, territory bonuses, caps, frontier progression, attack
completion and fraction encoding. Only then may it return final army/territory,
cumulative income, attacks, total costs, last attack completion, minimum reserve
and Long-term evaluation army. `exportRecalculatedPreset` accepts only a successful
evaluation report branded in that process; imported JSON cannot authorize a locally
validated export, and edits after validation invalidate the fingerprint.

There is no exact adapter shipped yet. Adapter tests use an explicitly labeled
contract stub; their metrics are not game results and never populate the supplied pack.

## Verification and remaining checks

Automated tests cover the original 35-member pack, standalone/array/manifest input,
metadata round-trip, every strategy/horizon, boundary timing, missed/repeated ticks,
new games, conflicts, OFF/selection preservation, invalid data and atomic storage
failure, pollution keys, XSS strings, ZIP traversal/duplicates/checksums/false output
sizes/bombs, DOM import preview and explicit commit, stale preview refresh and
future exact-adapter validation gates. DOM tests assert that no imported text goes
through `innerHTML`. Full native patch/bundle rebuild and local HTTP asset serving
are checked separately.

Live browser smoke testing remains unconfirmed: the available Computer Use helper
previously refused the installed Yandex browser because URL enforcement is unsupported.
Real map capture timing, full native economic conformance and strategy performance
remain unvalidated; use only the permitted singleplayer mode already enforced by
the client. No multiplayer automation permission is assumed.
