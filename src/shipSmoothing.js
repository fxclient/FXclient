import { getSettings } from "./settings.js";

const MAX_POINTS = 256;
const MIN_SPAN_TICKS = 5;
const HISTORY = 16;

const shipSmoothing = new (function () {
    let store = null, names = null, stepTicks = 10, rowSize = 0, lastTick = -1, wasEnabled = false, failed = false;
    let computedTick = -1, computedCount = -1, positions = null, segments = null;
    const entries = new Map();
    const slotIds = [];
    const points = new Uint32Array(MAX_POINTS);
    const point = new Float64Array(2);

    this.onTick = function (shipStore, tick, ticksPerStep, width) {
        try {
            store = shipStore; names = shipStore.fxNames; stepTicks = ticksPerStep; rowSize = width;
            if (tick < lastTick) entries.clear();
            lastTick = tick;
        } catch (error) {
            failed = true;
        }
    };

    function pointAt(e, d, out) {
        const n = e.count;
        if (n === 1 || d <= 0) { out[0] = e.xs[0]; out[1] = e.ys[0]; return 0; }
        if (d >= e.length) { out[0] = e.xs[n - 1]; out[1] = e.ys[n - 1]; return n - 2; }
        let k = 1;
        while (k < n - 1 && e.dist[k] < d) k++;
        const segLength = e.dist[k] - e.dist[k - 1];
        const f = segLength > 0 ? (d - e.dist[k - 1]) / segLength : 1;
        out[0] = e.xs[k - 1] + (e.xs[k] - e.xs[k - 1]) * f;
        out[1] = e.ys[k - 1] + (e.ys[k] - e.ys[k - 1]) * f;
        return k - 1;
    }

    function curve(e, phase, out) {
        const minSpan = Math.min(MIN_SPAN_TICKS, stepTicks);
        const u = Math.min(Math.max((phase - e.startPhase) / Math.max(stepTicks - e.startPhase, minSpan), 0), 1);
        const corners = pointAt(e, u * e.length, out);
        const fade = 1 - Math.min(Math.max((phase - e.offPhase) / Math.max(stepTicks - e.offPhase, minSpan), 0), 1);
        out[0] += e.offsetX * fade; out[1] += e.offsetY * fade;
        return corners;
    }

    function rebuild(e, i, isNew, cycle, phase) {
        const sameMove = !isNew && e.cycle === cycle;
        if (!isNew) curve(e, sameMove ? phase : stepTicks, point);
        const refX = point[0], refY = point[1];
        const count = store.fxPredict(i, points);
        if (e.xs.length < count) {
            e.xs = new Float64Array(count); e.ys = new Float64Array(count); e.dist = new Float64Array(count);
        }
        let total = 0;
        for (let k = 0; k < count; k++) {
            const x = points[k] % rowSize, y = Math.floor(points[k] / rowSize);
            if (k > 0) total += Math.hypot(x - e.xs[k - 1], y - e.ys[k - 1]);
            e.xs[k] = x; e.ys[k] = y; e.dist[k] = total;
        }
        e.count = count; e.length = total;
        e.startPhase = isNew ? phase : sameMove ? e.startPhase : 0;
        e.offPhase = sameMove ? phase : 0; e.offsetX = 0; e.offsetY = 0;
        if (!isNew) {
            curve(e, e.offPhase, point);
            const ox = refX - point[0], oy = refY - point[1];
            if (Math.hypot(ox, oy) <= Math.max(160, 2 * total)) { e.offsetX = ox; e.offsetY = oy; }
        }
        e.cycle = cycle;
    }

    function compute() {
        const s = store, n = names;
        const pos = s[n.fxPos], count = s[n.fxCount], ids = s[n.fxId], paths = s[n.fxPath], segs = s[n.fxSeg];
        const progresses = s[n.fxProgress], troops = s[n.fxTroops], blocked = s[n.fxBlocked];
        if (positions === null || positions.length !== pos.length) {
            positions = new Uint32Array(pos.length); segments = new Uint16Array(pos.length);
        }
        computedTick = lastTick; computedCount = count;
        const cycle = Math.floor(lastTick / stepTicks), phase = lastTick % stepTicks, delay = stepTicks >> 1;

        for (let i = 0; i < count; i++) {
            const id = ids[i];
            let e = entries.get(id);
            const isNew = e === undefined;
            if (isNew) {
                e = { cycle: -1, count: 0, xs: new Float64Array(8), ys: new Float64Array(8), dist: new Float64Array(8),
                    born: lastTick, newest: HISTORY - 1, kept: 0, ticks: new Int32Array(HISTORY).fill(-1), shown: new Uint32Array(HISTORY), shownSeg: new Uint16Array(HISTORY) };
                entries.set(id, e);
            }
            if (isNew || e.cycle !== cycle || e.real !== pos[i] || e.path !== paths[i] || e.seg !== segs[i]
                || e.progress !== progresses[i] || e.troops !== troops[i] || e.blocked !== blocked[i]) {
                rebuild(e, i, isNew, cycle, phase);
                e.real = pos[i]; e.path = paths[i]; e.seg = segs[i];
                e.progress = progresses[i]; e.troops = troops[i]; e.blocked = blocked[i];
            }

            const corners = curve(e, phase, point);
            const x = point[0], y = point[1];
            e.seenTick = lastTick;
            slotIds[i] = id;
            if (e.ticks[e.newest] !== lastTick) { e.newest = (e.newest + 1) % HISTORY; e.kept = Math.min(e.kept + 1, HISTORY); }
            e.ticks[e.newest] = lastTick; e.shownSeg[e.newest] = segs[i] + corners;
            e.shown[e.newest] = Math.max(Math.round(y), 0) * rowSize + Math.min(Math.max(Math.round(x), 0), rowSize - 1);
            const lag = Math.min(delay, (lastTick - e.born) >> 1);
            let k = e.newest, pick = k;
            for (let c = 0; c < e.kept; c++, k = (k + HISTORY - 1) % HISTORY) { pick = k; if (e.ticks[k] <= lastTick - lag) break; }
            positions[i] = e.shown[pick]; segments[i] = e.shownSeg[pick];
        }
        if (entries.size > count + 32)
            for (const [id, e] of entries) if (e.seenTick !== lastTick) entries.delete(id);
    }

    function ready() {
        if (failed) return false;
        try {
            const on = getSettings().smoothShipMovement && store !== null;
            if (on !== wasEnabled) { entries.clear(); computedTick = -1; wasEnabled = on; }
            if (on && (computedTick !== lastTick || computedCount !== store[names.fxCount])) compute();
            return on;
        } catch (error) {
            failed = true;
            entries.clear();
            console.error("ship smoothing disabled after an error:", error);
            return false;
        }
    }

    this.smoothedPosition = function (i, real) {
        return ready() && store[names.fxId][i] === slotIds[i] ? positions[i] : real;
    };

    this.smoothedSegment = function (i, real) {
        return ready() && store[names.fxId][i] === slotIds[i] ? segments[i] : real;
    };

    this.smoothedPositions = function (real) {
        return ready() ? positions : real;
    };
})();

export default shipSmoothing;
