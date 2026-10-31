import ModUtils from '../modUtils.js';

export default (/** @type {ModUtils} */ { replaceRawCode }) => {
    const tryReplace = (raw, result) => {
        try {
            replaceRawCode(raw, result);
        } catch (error) {
            console.warn("[FXClient] Skipped a lobby layout patch that no longer matches the game code.", error);
        }
    };

    // Keep each lobby replacement independent so a changed pattern cannot disable its siblings.
    tryReplace('tx=aV.d1.iq(aUH*.05)', 'tx=aV.d1.iq(aUH*(__fx.settings.enhancedLobbyLayout?.034:.05))');
    tryReplace('aUJ=aV.d1.iq(aUH*.06+.03*aUI)', 'aUJ=aV.d1.iq(aUH*(__fx.settings.enhancedLobbyLayout?.04:.06)+(__fx.settings.enhancedLobbyLayout?.02:.03)*aUI)');
    tryReplace('aUK=aV.d1.iq(aUH*.08+.03*aUI)', 'aUK=aV.d1.iq(aUH*(__fx.settings.enhancedLobbyLayout?.04:.08)+(__fx.settings.enhancedLobbyLayout?.02:.03)*aUI)');
    tryReplace('aUM=aV.d1.iq(aUH*.02+.01*aUI)', 'aUM=aV.d1.iq(aUH*(__fx.settings.enhancedLobbyLayout?.016:.02)+(__fx.settings.enhancedLobbyLayout?.007:.01)*aUI)');

    tryReplace('gI.style.margin="0.2em 0.2em 0.2em 0.2em"', 'gI.style.margin=__fx.settings.enhancedLobbyLayout?"0.05em 0.1em":"0.2em 0.2em 0.2em 0.2em"');
    tryReplace('p2.style.width=p2.style.maxWidth=ov===2?"10em":"9em"', 'p2.style.width=p2.style.maxWidth="100%"');
    tryReplace('aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(.02,.3))', 'aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(__fx.settings.enhancedLobbyLayout ? .018 : .02,.3))');

    tryReplace(
        'aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk)',
        `__fx.settings.enhancedLobbyLayout?(aIe[0].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk),aIe[1].gI.textContent=""):(aIe[0].gI.textContent="Lobby",aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk))`
    );

    tryReplace('kp.style.margin="0.6em 0.6em"', 'kp.style.margin="0.3em 0.6em"');

};
