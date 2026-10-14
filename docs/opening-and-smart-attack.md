# Opening Scheduler and Smart Bot Attack: implementation notes

## Scope and validation status

Implemented on FX Client main `66a20c8` in local branch
`feature/opening-and-smart-attack`. Upstream main was fetched and matched this checkout.
Dependencies were installed with `npm ci`; the original download/build passed before
changes. No server data or alternative network protocol was added.

Validated downloaded game script SHA-256:
`3A5E4B6464CD25245212BEE3E546B4B2E4AA38D3F1A83757A7AF315D86FE7FDF`.
Names below refer to that downloaded version; the patch resolves them by structural
matches rather than depending on those names. `npm run build-only` reapplies all
patches and rebuilds the bundle. A changed native interface stops the build with
`[Automation] Native game interface changed; automation build stopped`.

Automated tests and repeated full patch/bundle builds passed. Local HTTP serving
was checked. Live browser verification was blocked by Computer Use: URL policy
enforcement is unsupported for the installed Yandex browser. No visual or live
gameplay success is claimed. No multiplayer game was entered. Changes remain local;
no remote branch or Draft PR was published.

## Scheduler and settings

`patches/automation.js` hooks native `n8()` at the start of each simulation step.
The clock is now read directly from native `bi.kr()`, the same clock used by the
balance HUD. Its bar-rendering method computes `9 - floor((nativeTick % 100) / 10)`;
FX draws `9 - thatValue`. Thus the displayed HUD tick is
`floor((nativeTick % 100) / 10)`, in 0–9. Opening cycles start at 1 and increment
each 100 native simulation steps. Internally actions keep a linear HUD index
`(cycle - 1) * 10 + tick`; the scheduler reads `floor(nativeTick / 10)` rather than
counting callbacks. For example, Cycle 1 / Tick 7 is native step 70, not step 7.
Cycle 2 / Tick 0 is native step 100. Spawn selection does not advance the singleplayer
simulation. An explicit Cycle 1 / Tick 0 action is permitted at the start.

The former callback counter sent early while the HUD still displayed 0. A follow-up
fix adds Cycle and HUD Tick inputs, current/next cycle status, native-clock structural
validation, and regression tests for the initial 0, 7, 9-to-0 rollover, repeated
callbacks and missed ticks. Schedules saved with the old simulation-step timing are
preserved but disabled once until reviewed and selected again (`timingVersion: hud-v1`).
Missing or invalid native clock data cannot dispatch an opening attack.

The existing new-game reset patch calls `automation.reset()`. The scheduler tracks
consumed actions by preset ID and action ID. Only actions exactly matching the current
HUD index run. Consumption precedes dispatch, even for rejected commands. A switch changes
the selected preset synchronously; no timers or queued scheduler callbacks survive it.
Switching back keeps consumed IDs. OFF still advances the time cursor while disabling
dispatch, so re-enabling cannot catch up. A new match clears the cursor and history.

`OpeningSettings` plugs into the settings manager's custom element API. The editor
validates IDs, names, finite values, positive integer troops/cycles, HUD ticks 0–9 and percentages
in (0,100], sorting by tick when saved. New IDs prevent duplicates from sharing execution
history. It supports create/rename/edit/delete/duplicate, enable flags and active
selection. Main settings save validates before closing. The dedicated Apply button
persists without reload. Buttons use `textContent`, including user-provided names.

`Opening Control` lives inside the existing window container and uses the FX font,
dark background and bordered buttons. It is visible before play, has one button per
preset, aria-pressed selection, OFF, next-action status and persisted collapse state.
Its size is bounded with scrolling for large collections. Its placement still needs
visual checking against the game's controls on the user's viewport.

All automation preferences use `fx_automation`; the existing FX settings import,
export and reset only operate on `fx_settings` and do not include this separate key.

## Native attack adapter

Both helpers call `bB.hz.i6(fractionCode, targetId)`, the same public sender used by
manual land attacks. In singleplayer it calls `bB.qg.i6(player, fractionCode, target)`.
It leaves the manually selected attack bar unchanged. The native command validates
the player's eligibility, target, attack capacity and frontier before spending troops.

Neutral land uses the native sentinel `aE.fW` (maximum player count) and the same
sender. `bv.i5(player)` checks whether a neutral cell borders the player's land.
No synthetic map click or sea landing is used.

The adapter obtains current player, balances and territories from `aE.fJ`, `ah.hb`
and `ah.hN`. It requires singleplayer, non-replay, native active phase `bD.gv.hk(1)`,
native living-player predicate `bD.gv.hl(player)` and a closed escape/pause menu.
It rechecks native eligibility immediately before dispatch. Native modal state
`u.iL()` and configured keybindings `ba.aDv` additionally guard the hotkey.

The engine sends fractions, not arbitrary absolute troop counts. For balance B and
10-bit code q:

```text
fee = floor(12 * B / 1024)
troops = min(floor(B * (q + 1) / 1024), B - fee)
debit = troops + fee
```

The planner enumerates all 1024 codes. Opening chooses the largest representable
send not exceeding the requested amount; requests below the native quantum skip.
Absolute requests are capped by available balance. Percentages use the balance just
before each command, including multiple actions at the same tick.
Smart Attack chooses the smallest code covering its recommended force while keeping
**debit**, including fee, below the configured cap (never above 50%). If no code fits,
it skips. Special mode 10 is not estimated because it changes send amounts.

## Neighbor and active-attack detection

`bv.i8(player, target)` traverses actual land-border cells `ah.hF`, the four map
offsets `ad.fb`, land predicate `ad.h9` and ownership `ad.fR`. It tests the smaller
border first. No distance heuristic or sea reachability is involved.

Native bot classification uses `id >= aE.ku` or the engine's bot state; live/target
eligibility is also required. Allied targets are excluded using `bv.fS`.
`ae.kF(player, target)` checks the native per-attacker active target array. Entries
are removed by the game's own completion logic. Other attackers' entries do not
exclude a target. Native singleplayer dispatch updates this state synchronously;
the additional one-attempt-per-tick guard and keyboard-repeat rejection prevent
rapid duplicate sends. Completed attacks do not leave a local permanent blacklist.

## Confirmed combat formula and estimate limitations

Native `hU()`, `hR()`, `hW()` and `hZ()` establish the per-wave formula:

```text
defenderLoss = floor(pixels * defenderBalance /
                     (1 + floor(10 * defenderTerritory / 16)))
attackerCost = pixels * tileCost + 2 * defenderLoss + counterTroops
```

The balance here is the **defender's**, not the attacker's. `tileCost` is normally 2.
`counterTroops = ae.hc(defender, attacker)` accounts for the defender's attack against
us. The native comparison is strict and uses a per-frontier-cell budget; failure
can return the remaining attack. Defender loss is capped by its remaining balance.
The patch verifies combat and native send-cost shapes before enabling a build.

The implemented static budget is:

```text
requiredEstimate = ceil(3 * targetTerritory + 3.2 * targetBalance + counterTroops + 1)
recommended = ceil(requiredEstimate * safetyMultiplier)
```

This is a conservative static budget, **not an exact minimum**. Tile costs sum to
2 times the captured area. Successful defense losses before the last wave cannot
exceed the initial balance; a final-wave overshoot is below 1.6 times the remaining
balance. Multiplying by 2 bounds the static defense component by 3.2 times initial
balance. The extra territory term and 1 provide frontier/strict-comparison slack.
The 10% default margin is applied afterward. Unsupported or nonfinite inputs skip.

This bound assumes no income, new land, returning attacks or reinforcements during
the attack. Real games can violate those assumptions. A snapshot cannot establish a
guaranteed minimum winning force for a moving target; this requirement remains
unresolved. The UI explicitly calls the result an estimate. If a guaranteed minimum
is essential, Smart Attack should remain disabled until a bounded dynamic combat
model has been validated with native gameplay. Neither this document nor the UI
promises victory from the estimate.

## Tests and remaining checks

Follow-up Smart Attack fix: the keyboard router no longer treats a focused panel
button or the nonmodal update banner as a reason to ignore the key. The default
physical Period key also works when `event.key` is Russian `ю`. The panel now has a
Smart ON/OFF toggle, an Attack bot button and diagnostic reasons for disabled or
ineligible attempts. Local service workers immediately activate, claim clients and
leave requests to the network so rebuilds cannot keep serving an older cached bundle.
Regression tests exercise these routes and preserve text/modal/native-shortcut guards.

An additional diagnostic against constructors extracted from the currently built
native engine verified: a real land neighbor was selected; the native sender and
command handler deducted 1,659 troops (488 sent plus 1,171 fee) from a 100,000 balance;
the native attack registry then reported that target as under our attack. Map data,
render/notification dependencies and frontier setup were fixture data. This verifies
the bridge on a local state, not an entire live match or visual browser behavior.

`npm test` covers validation/sorting, duplicate IDs, fraction quantization, fees,
hard debit caps, current-balance percentages, duplicate ticks, disabled actions,
missed ticks, failed commands, OFF, switching/backtracking, new-match reset, default
OFF and storage round-trip, target tie-breaking, own/other attack filtering,
unsupported estimates, safety margin and rapid repeated attempts on mocked local
states. The native patch/bundle rebuild separately verifies upstream structure.

Manual browser checklist still pending:

- Load localhost; verify panel positioning and no runtime errors.
- Create, rename, duplicate and remove presets/actions; reject invalid fields.
- Apply, reload and verify persistence; test collapse and button highlighting.
- Select before spawning; observe native sends at the configured ticks.
- Switch and OFF mid-match; restart and check reset; inspect paused/end/replay guards.
- Grow beside bots; press the hotkey once, verify target and actual debit in native state.
- Verify active attack exclusion and re-eligibility after completion.
- Check text inputs, FX/native dialogs, shortcut rebinding and manual attack controls.

The pre-existing dependency audit reports vulnerabilities in the installed dependency
tree; dependency upgrades were outside this feature change and were not applied.
