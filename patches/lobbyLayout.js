import ModUtils from "../modUtils.js";
import { compactLobbyHeights } from "../patchUtils/lobbyLayoutAst.js";

export default (/** @type {ModUtils} */ modUtils) => {
    const { replaceRawCode } = modUtils;
    const results = [];

    const tryReplace = (id, raw, replacement) => {
        try {
            replaceRawCode(raw, replacement);
            results.push({ id, applied: true });
        } catch (error) {
            results.push({ id, applied: false, reason: error.message.split("\n")[0] });
        }
    };

    try {
        modUtils.script = compactLobbyHeights(modUtils.script);
        results.push({ id: "lobby-heights-ast", applied: true });
    } catch (error) {
        results.push({ id: "lobby-heights-ast", applied: false, reason: error.message });
    }

    tryReplace("player-card-spacing", 'gI.style.margin="0.2em 0.2em 0.2em 0.2em"',
        'gI.style.margin=__fx.settings.enhancedLobbyLayout?"0.05em 0.1em":"0.2em 0.2em 0.2em 0.2em"');
    tryReplace("player-card-width", 'p2.style.width=p2.style.maxWidth=ov===2?"10em":"9em"',
        'p2.style.width=p2.style.maxWidth="100%"');
    tryReplace("lobby-summary-font", 'aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(.02,.3))',
        'aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(__fx.settings.enhancedLobbyLayout ? .018 : .02,.3))');
    tryReplace("lobby-summary-text",
        'aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk)',
        `__fx.settings.enhancedLobbyLayout?(aIe[0].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk),aIe[1].gI.textContent=""):(aIe[0].gI.textContent="Lobby",aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk))`);
    tryReplace("chat-message-spacing", 'kp.style.margin="0.6em 0.6em"',
        'kp.style.margin="0.3em 0.6em"');

    const applied = results.filter(result => result.applied).length;
    const skipped = results.filter(result => !result.applied);
    console.info(`[FXClient] Lobby patches: ${applied}/${results.length} applied.`);
    for (const result of skipped) {
        console.warn(`[FXClient] Skipped lobby patch "${result.id}": ${result.reason}`);
    }
};
