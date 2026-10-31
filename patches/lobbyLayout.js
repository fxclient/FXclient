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
    tryReplace(".05*aSB),aSC=bN.au>bN.aV,aSD=bQ.bR.lV(.06*aSB+.03*aSC),aSE=bQ.bR.lV(.08*aSB+.03*aSC),aSF=bQ.bR.lV(.04+.02*aSC),aSC=bQ.bR.lV(.02*aSB+.01*aSC)",
        "(__fx.settings.enhancedLobbyLayout ? .034 : .05)*aSB),aSC=bN.au>bN.aV,aSD=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .06)*aSB+(__fx.settings.enhancedLobbyLayout ? .02 : .03)*aSC),aSE=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .08)*aSB+(__fx.settings.enhancedLobbyLayout ? .02 : .03)*aSC),aSF=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .04)+(__fx.settings.enhancedLobbyLayout ? .02 : .02)*aSC),aSC=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .016 : .02)*aSB+(__fx.settings.enhancedLobbyLayout ? .007 : .01)*aSC)");

    tryReplace('gI.style.margin="0.2em 0.2em 0.2em 0.2em"', 'gI.style.margin=__fx.settings.enhancedLobbyLayout?"0.05em 0.1em":"0.2em 0.2em 0.2em 0.2em"');
    tryReplace('gI.style.width=gI.style.maxWidth=2===aak?"10.5em":"9.5em"', 'gI.style.width=gI.style.maxWidth="100%"');
    tryReplace('aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(.02,.3))', 'aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(__fx.settings.enhancedLobbyLayout ? .018 : .02,.3))');

    tryReplace(
        'aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk)',
        `__fx.settings.enhancedLobbyLayout?(aIe[0].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk),aIe[1].gI.textContent=""):(aIe[0].gI.textContent="Lobby",aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk))`
    );

    tryReplace('kp.style.margin="0.6em 0.6em"', 'kp.style.margin="0.3em 0.6em"');

    tryReplace(
        'for(var aL=0;aL<a8l.length;aL++)a8l[aL].r2(qx),a8l[aL].button.style.height="100%",a8l[aL].button.style.padding="0.0em 0.9em",a8l[aL].button.style.whiteSpace="pre",qj.kp.appendChild(a8l[aL].button)',
        'for(var aL=0;aL<a8l.length;aL++){var tabButton=a8l[aL].button,tabLabel=tabButton.textContent.trim();a8l[aL].r2(qx),tabButton.style.height="100%",tabButton.style.padding="0.0em 0.9em",tabButton.style.whiteSpace="pre";if(tabLabel==="Chat"||tabLabel==="Players"||tabLabel==="Spieler"){tabButton.setAttribute("aria-label",tabLabel);tabButton.title=tabLabel;tabButton.style.fontSize=".85em";var icon=document.createElementNS("http://www.w3.org/2000/svg","svg");icon.setAttribute("viewBox","0 0 24 24");icon.setAttribute("aria-hidden","true");icon.style.width=icon.style.height="1.1em";icon.style.fill="none";icon.style.stroke="currentColor";icon.style.strokeWidth="2";icon.style.strokeLinecap=icon.style.strokeLinejoin="round";var shape;if(tabLabel==="Chat"){shape=document.createElementNS("http://www.w3.org/2000/svg","path");shape.setAttribute("d","M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.7 8.7 0 0 1-4-.95L3 21l1.95-5.5A8.7 8.7 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8.5Z")}else{shape=document.createElementNS("http://www.w3.org/2000/svg","g");var head=document.createElementNS("http://www.w3.org/2000/svg","circle");head.setAttribute("cx","9");head.setAttribute("cy","8");head.setAttribute("r","3.5");shape.appendChild(head);var bodies=document.createElementNS("http://www.w3.org/2000/svg","path");bodies.setAttribute("d","M2.5 20v-1.5A4.5 4.5 0 0 1 7 14h4a4.5 4.5 0 0 1 4.5 4.5V20M16 4.8a3.5 3.5 0 0 1 0 6.7M17 14h.5a4 4 0 0 1 4 4v2");shape.appendChild(bodies)}icon.appendChild(shape);var label=document.createElement("span");label.textContent=tabLabel;tabButton.replaceChildren(icon,document.createTextNode(" "),label)}qj.kp.appendChild(tabButton)}'
    );

    tryReplace(
        'a5M.style.fontFamily="Arial Black, system-ui",a5M.style.fontSize="inherit",a5M.style.fontWeight="inherit"',
        'a5M.style.fontFamily="Arial Black, system-ui",a5M.style.fontSize=__fx.settings.enhancedLobbyLayout?"0.72em":"inherit",a5M.style.fontWeight="inherit"'
    );
};
