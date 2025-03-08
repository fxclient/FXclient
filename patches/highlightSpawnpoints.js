import ModUtils from "../modUtils.js";

// Highlight clan spawnpoints
export default (/** @type {ModUtils} */ { replaceCode, waitForMinification, replaceRawCode }) => {
    // when rendered on game start
    replaceCode(
        `var x = (d.minX[i] + d.maxX[i] + 1 - hQ - 2) >> 1;
        var y = (d.minY[i] + d.maxY[i] + 1 - hQ - 2) >> 1;
        ctx.drawImage(a1e[game.gIsTeamGame ? ((game.gGameType === 9 && aD.a[i] === 5) ? 3 : t.ids[i]) : (i < game.gHumans ? 1 : 0)], x, y);`,
        `var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[i];
        if (highlight) hQ *= 2;
        var x = (d.minX[i] + d.maxX[i] + 1 - hQ - 2) >> 1;
        var y = (d.minY[i] + d.maxY[i] + 1 - hQ - 2) >> 1;
        if (highlight) ctx.drawImage(a1e[game.gIsTeamGame ? ((game.gGameType === 9 && aD.a[i] === 5) ? 3 : t.ids[i]) : (i < game.gHumans ? 1 : 0)], x, y, hQ, hQ);
        else ctx.drawImage(a1e[game.gIsTeamGame ? ((game.gGameType === 9 && aD.a[i] === 5) ? 3 : t.ids[i]) : (i < game.gHumans ? 1 : 0)], x, y);`,
    )
    waitForMinification(() => {
        // when rendered during spawn selection
        replaceRawCode("function(a6,es,bK,hP,hQ,hR,ov){0===dV.eg[a6]||0===dV.ev[a6]||(hQ=ay.ak*((dV.nu[a6]+dV.nw[a6]+1)/2-bK)/(hQ-bK)-.5*es,bK=ay.al*((dV.nv[a6]+dV.nx[a6]+1)/2-hP)/(hR-hP)-.5*es,hQ>ay.ak)||bK>ay.al||hQ<-es||bK<-es||(bI.setTransform(cz,0,0,cz,hQ,bK),",
            `function(a6,es,bK,hP,hQ,hR,ov){
            var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a6];
            if (highlight) es *= 2;
            0===dV.eg[a6]||0===dV.ev[a6]||(hQ=ay.ak*((dV.nu[a6]+dV.nw[a6]+1)/2-bK)/(hQ-bK)-.5*es,bK=ay.al*((dV.nv[a6]+dV.nx[a6]+1)/2-hP)/(hR-hP)-.5*es,hQ>ay.ak)||bK>ay.al||hQ<-es||bK<-es||(bI.setTransform(highlight?cz*2:cz,0,0,highlight?cz*2:cz,hQ,bK),`
        )
    })
}