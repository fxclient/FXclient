import { definePatch } from '../modUtils.js';

export default definePatch(mod => {
    const { matchCode, insertCode, safeDictionary: d } = mod;
    try {
        const v = { game: d.game, single: d.gIsSingleplayer, replay: d.gIsReplay,
            data: d.playerData, balances: d.playerBalances, territories: d.playerTerritories };
        Object.assign(v, matchCode(`this.sendAttack = function(fraction, target) {
            if (this.firstSend) { this.firstSend = 0; storage.writer.write(182, fraction); }
            if (game.single) { commands.handler.i6(game.player, fraction, target); }
            else { network.sender.netSend(fraction, target); }
        };`, { dictionary: { game: v.game, single: v.single } }));
        Object.assign(v, matchCode(`this.live = function(id) { return data.alive[id] !== 0 && data.states[id] !== 2; };`,
            { dictionary: { data: v.data } }));
        Object.assign(v, matchCode(`this.phase = function(stage) {
            if (stage === 0) { return game.state === 1 && game.spawn; }
            if (stage === 1) { return game.state === 1 && !game.spawn; }
            return game.state === 2;
        };`, { dictionary: { game: v.game } }));
        Object.assign(v, matchCode(`this.prepare = function(id, fraction, feeRate, minimum) {
            var balance = data.balances[id];
            var troops = math.divide(balance * (fraction + 1), 1024);
            var fee = math.divide(feeRate * balance, 1024);
            troops = Math.min(troops, balance - fee);
            if (game.mode === 10) { troops = specialMode.adjust(id, troops); }
            scratch.values[0] = troops; scratch.values[1] = fee;
            return troops >= minimum;
        };`, { dictionary: { game: v.game, data: v.data, balances: v.balances } }));
        matchCode(`this.i6 = function(id, fraction, target) {
            if (!utils.rules.phase(1)) { return; }
            if (!utils.rules.live(id)) { return; }
            if (!utils.rules.different(id, target)) { return; }
            if (!utils.rules.prepare(id, fraction, 12, 0)) { return; }
            /*...*/
        };`, { dictionary: { phase: v.phase, live: v.live, prepare: v.prepare } });
        Object.assign(v, matchCode(`this.hasAttack = function(id, target) {
            var index; var offset = attackOffset(id);
            for (index = attackSizes[id] - 1; index >= 0; index--) {
                if (attackTargets[offset + index] === target) { return true; }
            } return false;
        };`));
        Object.assign(v, matchCode(`function defenderCost() {
            return math.divide(pixels * data.balances[defender], 1 + math.divide(10 * data.territories[defender], 16));
        }`, { dictionary: { data: v.data, balances: v.balances, territories: v.territories } }));
        // Verify the full combat-cost shape. Fail the build if upstream mechanics change.
        const combat = matchCode(`function waveCost() {
            var landCost = pixels * game.tileCost;
            var defense = defenderCost(); var counter = counterCost();
            var total = landCost + 2 * defense + counter;
            var budget = perPixel * pixels;
            if (budget > total) { remaining -= total; stats.loss(attacker, total, 13); applyLoss(total - landCost, counter); return true; }
            else {
                if (support && counter === 0) { remaining -= budget; budget += utils.rules.withdraw(attacker, total - budget + 1);
                    stats.loss(attacker, budget, 13); applyLoss(budget - landCost, 0); return true; }
                remaining -= budget; stats.loss(attacker, budget, 13); applyLoss(budget - landCost, counter); return false;
            }
        }`, { dictionary: { game: v.game, pixels: v.pixels, defenderCost: v.defenderCost } });
        Object.assign(v, combat);
        Object.assign(v, matchCode(`function counterCost() { return attacks.counter(defender, attacker); }`,
            { dictionary: { counterCost: v.counterCost, defender: v.defender, attacker: v.attacker } }));
        Object.assign(v, matchCode(`return id >= game.humans || data.states[id] === 2;`,
            { dictionary: { game: v.game, data: v.data, states: v.states } }));
        Object.assign(v, matchCode(`this.landNeighbor = function(left, right) {
            var index, swap, direction, delta, point;
            var leftSize = data.borders[left].length;
            var rightSize = data.borders[right].length;
            if (rightSize < leftSize) { swap = left; left = right; right = swap; swap = leftSize; leftSize = rightSize; rightSize = swap; }
            var offsets = map.offsets;
            for (direction = 3; direction >= 0; direction--) { delta = offsets[direction];
                for (index = 0; index < leftSize; index++) { point = data.borders[left][index] + delta;
                    if (map.isLand(point) && map.owner(point) === right) { return true; }
                }
            } return false;
        };`, { dictionary: { data: v.data } }));
        Object.assign(v, matchCode(`this.neutralNeighbor = function(id) {
            var direction, index, delta; var count = data.borders[id].length; var offsets = map.offsets;
            for (direction = 3; direction >= 0; direction--) { delta = offsets[direction];
                for (index = 0; index < count; index++) { if (map.isNeutral(data.borders[id][index] + delta)) { return true; } }
            } return false;
        };`, { dictionary: { data: v.data, borders: v.borders, map: v.map, offsets: v.offsets } }));
        Object.assign(v, matchCode(`this.enemy = function(id, target) { return teams.ids[id] === 0 || teams.ids[id] !== teams.ids[target]; };`));
        Object.assign(v, matchCode(`this.matchesKey = function(code, index) { return code === this.keys[index] || code === this.keys[index + 1]; };`));
        Object.assign(v, matchCode(`function prevent(event, id) {
            if (id === 0 && modalManager.hasModal()) { return; }
            if (zoomed()) { return; }
            if (menuManager.menuState() === 0) { return; }
            event.preventDefault();
        }`));
        // Same clock and arithmetic used by the balance HUD's recurring 0–9 tick.
        Object.assign(v, matchCode(`this.drawTickBars = function() {
            var hudTick = clock.nativeTick() % 100;
            hudTick -= hudTick % 10;
            hudTick = 9 - clockMath.divide(hudTick, 10);
            /*...*/
        };`));
        v.keybinds = mod.matchOne(new RegExp(`(\\w+)\\.${v.matchesKey}\\(\\w+,8\\)`, 'g'))[1];
        Object.assign(v, matchCode(`return (this.replay ? (escapeMenu.isOpen || !replayPanel.playing)
            : (this.single && (escapeMenu.isOpen || this.spawn)));`,
            { dictionary: { replay: v.replay, single: v.single, spawn: v.spawn } }));
        // Rules object and native sender are obtained from their actual call sites.
        Object.assign(v, matchCode(`if (neighbors.neutralNeighbor(game.player)) { commands.sender.sendAttack(bar.fraction(), game.maxPlayers); }`,
            { dictionary: { neutralNeighbor: v.neutralNeighbor, game: v.game, player: v.player, commands: v.commands, sendAttack: v.sendAttack } }));
        const r = `${v.utils}.${v.rules}`, g = v.game, p = `${g}.${v.player}`, a = v.attacks, pd = v.data;
        const hooks = `{
            snapshot: () => ({
                nativeTick: ${v.clock}.${v.nativeTick}(),
                allowed: ${g}.${v.single} && !${g}.${v.replay} && !${v.escapeMenu}.${v.isOpen} && ${r}.${v.phase}(1) && ${r}.${v.live}(${p}),
                blockedReason: !${g}.${v.single} ? 'Singleplayer only' : ${g}.${v.replay} ? 'Disabled in replays'
                    : ${v.escapeMenu}.${v.isOpen} ? 'Game is paused; close the escape menu'
                    : !${r}.${v.phase}(1) ? 'Waiting for active play (spawn selection or match ended)'
                    : !${r}.${v.live}(${p}) ? 'Player is no longer active' : '',
                playerId: ${p}, balance: ${pd}.${v.balances}[${p}], neutralId: ${g}.${v.maxPlayers},
                tileCost: ${g}.${v.mode} === 10 ? null : ${g}.${v.tileCost},
                getBalance: () => ${pd}.${v.balances}[${p}],
                bots: () => {
                    const result = [];
                    for (let id = 0; id < ${g}.${v.maxPlayers}; id++) {
                        if (id === ${p} || !${r}.${v.live}(id) || !(id >= ${g}.${v.humans} || ${pd}.${v.states}[id] === 2)) continue;
                        if (!${v.neighbors}.${v.landNeighbor}(${p}, id)) continue;
                        result.push({ id, bot: true, neighbor: true, attackable: ${v.neighbors}.${v.enemy}(${p}, id),
                            underMyAttack: ${a}.${v.hasAttack}(${p}, id), troops: ${pd}.${v.balances}[id],
                            territory: ${pd}.${v.territories}[id], counterTroops: ${a}.${v.counter}(id, ${p}) });
                    } return result;
                }
            }),
            keyConflict: code => ${v.keybinds}.${v.keys}.includes(code),
            inputBlocked: () => ${v.modalManager}.${v.hasModal}(),
            send: (code, target) => {
                if (!${g}.${v.single} || ${g}.${v.replay} || !${r}.${v.phase}(1) || !${r}.${v.live}(${p})) return false;
                if (target === ${g}.${v.maxPlayers} ? !${v.neighbors}.${v.neutralNeighbor}(${p})
                    : !${r}.${v.live}(target) || !${v.neighbors}.${v.enemy}(${p}, target) || !${v.neighbors}.${v.landNeighbor}(${p}, target)) return false;
                const before = ${pd}.${v.balances}[${p}];
                ${v.commands}.${v.sender}.${v.sendAttack}(code, target);
                return ${pd}.${v.balances}[${p}] < before;
            }
        }`;
        insertCode(`function fxNativeTick() { /* here */ fxNativeQueue.ee(); fxNativePlayers.ee(); fxNativeIncome.ee(); fxNativeGrowth.ee(); fxNativeMode.ee();
            fxNativeTerritories.ee(); fxNativeBots.ee(); fxNativeBoats.fxNativeState.ee(); fxNativeRanking.fxNativeUpdate(); /*...*/ }`,
            `if (!__fx.automation.hooks) __fx.automation.install(${hooks}); __fx.automation.onTick();`);
    } catch (error) {
        throw new Error(`[Automation] Native game interface changed; automation build stopped: ${error.message}`);
    }
});
