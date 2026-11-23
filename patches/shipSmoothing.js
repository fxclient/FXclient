import { definePatch } from "../modUtils.js"

export default definePatch(({ matchCode, insertCode, replaceCode }) => {
    const move = matchCode(`function moveShips(store) {
        var oldPos, newPos; var config = sim.config; var stepTicks = config.moveInterval;
        if (clock.tick() % stepTicks !== 0) { return; }
        var pos = store.pos; var troops = store.troops; var blocked = store.blocked; var progress = store.progress;
        var cell = store.cell; var path = store.path; var segment = store.segment; var count = store.shipCount;
        var rowSize = map.width << 4;
        for (var i = count - 1; i >= 0; i--) {
            if (progress[i] === 65535 || blocked[i]) { continue; }
            var t = troops[i];
            var speed = config.speedBase + Math.min(config.speedPerTroop * t, config.speedTroopCap) + Math.min(t >> 3, config.speedBonusCap);
            oldPos = pos[i]; pos[i] = newPos = advance(store, i, speed * stepTicks, rowSize);
            cell[i] = sim.grid.move(cell[i], oldPos, newPos);
        }
    }`)
    const { pathStart, geo, pathPoint } = matchCode(`function advance(store, i, distance, rowSize) {
        var points = store.path[i]; var len = points.length; var seg = store.segment[i];
        var from = seg === 0 ? store.pathStart[i] : geo.pathPoint(points[seg]);
        /*...*/}`, { dictionary: { advance: move.advance, path: move.path, segment: move.segment } })
    const { shipId } = matchCode(`this.owner[n] = slot; this.pos[n] = start; this.progress[n] = 0;
        if (amount < 60) { a.b.c(player, 60 - amount); amount = 60; }
        this.troops[n] = amount; this.cell[n] = sim.grid.add(n, geo.cellOf(start)); this.shipId[n] = id;`,
        { dictionary: { pos: move.pos, progress: move.progress, troops: move.troops, cell: move.cell } })

    insertCode(`function moveShips(store) {
        var oldPos, newPos; var config = sim.config; var stepTicks = config.moveInterval;
        /* here */if (clock.tick() % stepTicks !== 0) { return; }
        var pos = store.pos; /*...*/}`,
        `__fx.shipSmoothing.onTick(store, clock.tick(), stepTicks, map.width << 4);`,
        { dictionary: { moveShips: move.moveShips, sim: move.sim, config: move.config, stepTicks: move.stepTicks, moveInterval: move.moveInterval,
            clock: move.clock, tick: move.tick, pos: move.pos, map: move.map, width: move.width } })

    insertCode(`this.tick = function() {
        sim.a.tick(); sim.b.tick(); var config = sim.config; moveShips(this);
        if (clock.now() % config.c === 0) { var d = e.f; var g = sim.h.i(d); j(this); k.l(d, g - sim.h.i(d), 15); }
        if (clock.now() % config.m === config.n) { o(this); }
        p(this);
    };/* here */`,
        `this.fxNames = { fxPos: "${move.pos}", fxId: "${shipId}", fxPath: "${move.path}", fxSeg: "${move.segment}",
            fxProgress: "${move.progress}", fxTroops: "${move.troops}", fxBlocked: "${move.blocked}", fxCount: "${move.shipCount}" };
        var fxFake = null;
        this.fxPredict = function(fxIndex, fxOut) {
            var fxCount = 0;
            fxOut[fxCount++] = this.${move.pos}[fxIndex];
            var fxPoints = this.${move.path}[fxIndex];
            if (this.${move.progress}[fxIndex] === 65535 || this.${move.blocked}[fxIndex] || fxPoints === null) { return fxCount; }
            var fxConfig = sim.config;
            var fxTroops = this.${move.troops}[fxIndex];
            var fxSpeed = fxConfig.${move.speedBase} + Math.min(fxConfig.${move.speedPerTroop} * fxTroops, fxConfig.${move.speedTroopCap})
                + Math.min(fxTroops >> 3, fxConfig.${move.speedBonusCap});
            if (fxFake === null) {
                fxFake = { ${move.path}: null, ${pathStart}: null,
                    ${move.segment}: new Uint16Array(this.${move.pos}.length), ${move.progress}: new Uint16Array(this.${move.pos}.length) };
            }
            fxFake.${move.path} = this.${move.path};
            fxFake.${pathStart} = this.${pathStart};
            var fxFrom = this.${move.segment}[fxIndex];
            fxFake.${move.segment}[fxIndex] = fxFrom;
            fxFake.${move.progress}[fxIndex] = this.${move.progress}[fxIndex];
            var fxEnd = ${move.advance}(fxFake, fxIndex, fxSpeed * fxConfig.${move.moveInterval}, ${move.map}.${move.width} << 4);
            var fxTo = fxFake.${move.segment}[fxIndex];
            for (var fxK = fxFrom + 1; fxK <= fxTo && fxCount < fxOut.length - 1; fxK++) { fxOut[fxCount++] = ${geo}.${pathPoint}(fxPoints[fxK]); }
            fxOut[fxCount++] = fxEnd;
            return fxCount;
        };`,
        { dictionary: { moveShips: move.moveShips, sim: move.sim, config: move.config } })

    // ship troop labels
    replaceCode(`pos = positions[i]; x = (pos % rowSize) / 16 * zoom - camX; y = Math.floor(pos / rowSize) / 16 * zoom - camY; margin = fontSize * 1.5;`,
        `pos = __fx.shipSmoothing.smoothedPosition(i, positions[i]); x = (pos % rowSize) / 16 * zoom - camX; y = Math.floor(pos / rowSize) / 16 * zoom - camY; margin = fontSize * 1.5;`)
    // ship icons
    replaceCode(`var pos = positions[i]; var mapX = (pos % rowSize) / 16; var mapY = Math.floor(pos / rowSize) / 16;`,
        `var pos = __fx.shipSmoothing.smoothedPosition(i, positions[i]); var mapX = (pos % rowSize) / 16; var mapY = Math.floor(pos / rowSize) / 16;`)
    // troop label hit test
    replaceCode(`var pos = store.positions[i]; var x = (pos % rowSize) / 16 * zoom - camX; var y = Math.floor(pos / rowSize) / 16 * zoom - camY; var h = a * fontSize;`,
        `var pos = __fx.shipSmoothing.smoothedPosition(i, store.positions[i]); var x = (pos % rowSize) / 16 * zoom - camX; var y = Math.floor(pos / rowSize) / 16 * zoom - camY; var h = a * fontSize;`)
    // route line end
    replaceCode(`function drawRoute(ctx, i) { var store = a.b; var points = store.path[i]; var seg = store.segment[i];
        var last = points.length - 1; var pos = store.positions[i]; ctx.beginPath(); /*...*/}`,
        `function drawRoute(ctx, i) { var store = a.b; var points = store.path[i]; var seg = __fx.shipSmoothing.smoothedSegment(i, store.segment[i]);
        var last = points.length - 1; var pos = __fx.shipSmoothing.smoothedPosition(i, store.positions[i]); ctx.beginPath(); /*...*/}`)
    // hovered ship pick
    replaceCode(`this.shipAt = function(mouseX, mouseY) { var count = a.b.c; if (count < 1) { return -1; } var positions = a.b.d; var troops = a.b.e; /*...*/}`,
        `this.shipAt = function(mouseX, mouseY) { var count = a.b.c; if (count < 1) { return -1; } var positions = __fx.shipSmoothing.smoothedPositions(a.b.d); var troops = a.b.e; /*...*/}`)
    // own ship click pick
    replaceCode(`var dx = mapX - geo.x(store.positions[i]); var dy = mapY - geo.y(store.positions[i]); var dist = dx * dx + dy * dy;`,
        `var fxDrawn = __fx.shipSmoothing.smoothedPosition(i, store.positions[i]); var dx = mapX - geo.x(fxDrawn); var dy = mapY - geo.y(fxDrawn); var dist = dx * dx + dy * dy;`)
})
