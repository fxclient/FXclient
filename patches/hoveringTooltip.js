import ModUtils from "../modUtils.js"

export default (/** @type {ModUtils} */ { insertCode, replaceRawCode, waitForMinification }) => {

    insertCode(`/* here */
        this.click = function(lK, lL, a1m) {
        var gy = bL.gz(lK);
        var h0 = bL.h1(lL);
        var eV = bL.f7(gy, h0);
        var eN = bL.eZ(eV);
        if (!bL.isInMapBounds(gy, h0)) { return false; }
        var a5C = (Device.a1.largeUIEnabled() ? 0.025 : 0.0144) * h___.hu;
        var dp = performance.now();
        if (Math.abs(lK - a4t) > a5C || Math.abs(lL - a4u) > a5C || dp > time + 500) { return false; }
        time = dp;
        if (a1m) { a5D(lK, lL, eN); return false; }
        /*...*/}`,
        `__fx.hoveringTooltip.display = function(mouseX, mouseY) {
            var coordX = bL.gz(mouseX), coordY = bL.h1(mouseY),
                coord = bL.f7(coordX, coordY), point = bL.eZ(coord);
            // if (coordX < 0 || coordY < 0) return;
            if (bL.isInMapBounds(coordX, coordY)) (function(lK, lL, eN) {
                a5D(lK, lL, eN)
            }(mouseX, mouseY, point))
        }`)
    insertCode(`player = aQ.eF(eR);
		if (game.gIsReplay /* here */) { game.playerId = player; }
		str = __L(/* Player: {0} */ [b0.context.truncateAndFillText(playerData.rawPlayerNames[player], b0.qZ.sN(0, 10), 150)]) + "   ";
		str += __L(/* Strength: {10} */ [b0.rY.formatNumber(playerData.playerBalances[player])]) + "   ";
		str += __L(/* Territory: {10} */ [b0.rY.formatNumber(playerData.playerTerritories[player])]) + "   ";`,
    `&& __fx.hoveringTooltip.active === false`)
    
    waitForMinification(() => {
        replaceRawCode("aK.nH=(window.devicePixelRatio||1)*aEr,",
            `aK.nH = (window.devicePixelRatio || 1) * aEr, __fx.hoveringTooltip.canvasPixelScale = aK.nH,`)
    })

}