import assets from '../assets.js';
import ModUtils from '../modUtils.js';

export default (/** @type {ModUtils} */ modUtils) => {
    const { insertCode, waitForMinification } = modUtils

    // Render win count
    insertCode(`var s = Math.floor((Device.a1.largeUIEnabled() ? 0.018 : 0.0137) * h___.hz);
		ctx.font = Util.qd.sS(0, Math.max(5, s));
		Util.qd.textBaseline(ctx, 0);
		Util.qd.textAlign(ctx, 2);
		ctx.fillStyle = Colors.nl;
		ctx.fillText(clientInfo.gameVersion, h___.w, 0);
        /* here */`,
        `const text = "Win count: " + __fx.wins.count;
        const textLength = ctx.measureText(text).width;
        const size = Math.max(5, s);
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(text, ctx.canvas.width - textLength - size / 2, size * 2);`)

    // Make the main canvas context have an alpha channel if a custom background is being used
    insertCode(`mainCanvasElement = document.getElementById("canvasA");
		if (Device.id === 2) { mainCanvasElement.style.webkitUserSelect = "none"; }
		mainCanvas = mainCanvasElement.getContext("2d", { alpha: /* here */ false });`,
    `__fx.makeMainMenuTransparent ? true :`)

	// Reset donation history and leaderboard filter when a new game is started
	insertCode(`an.init();ai.a5l();bA.pQ.qC = [];bA.hZ.pT = 1;/* here */`,
	`__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow();`);

    waitForMinification(() => applyPatches(modUtils))
}
//export const requiredVariables = ["game", "playerId", "playerData", "rawPlayerNames", "gIsSingleplayer", "playerTerritories"];

function applyPatches(/** @type {ModUtils} */ { replace, replaceOne, replaceRawCode, safeDictionary, matchOne, matchRawCode, escapeRegExp }) {

    // Constants for easy usage of otherwise long variable access expressions
    const dict = safeDictionary;
    const playerId = `${dict.game}.${dict.playerId}`;
    const rawPlayerNames = `${dict.playerData}.${dict.rawPlayerNames}`;
    const gIsSingleplayer = `${dict.game}.${dict.gIsSingleplayer}`;

    // Compact the HTML based lobby header while preserving room for the chat/player summary row.
    replaceRawCode(".05*aSB),aSC=bN.au>bN.aV,aSD=bQ.bR.lV(.06*aSB+.03*aSC),aSE=bQ.bR.lV(.08*aSB+.03*aSC),aSF=bQ.bR.lV(.04+.02*aSC),aSC=bQ.bR.lV(.02*aSB+.01*aSC)",
        "(__fx.settings.enhancedLobbyLayout ? .034 : .05)*aSB),aSC=bN.au>bN.aV,aSD=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .06)*aSB+(__fx.settings.enhancedLobbyLayout ? .02 : .03)*aSC),aSE=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .08)*aSB+(__fx.settings.enhancedLobbyLayout ? .02 : .03)*aSC),aSF=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .04 : .04)+(__fx.settings.enhancedLobbyLayout ? .02 : .02)*aSC),aSC=bQ.bR.lV((__fx.settings.enhancedLobbyLayout ? .016 : .02)*aSB+(__fx.settings.enhancedLobbyLayout ? .007 : .01)*aSC)");

    replaceRawCode(
        "aIg.resize(aRx),aIa.resize(aRx),aRv.resize(aRx),aIh.resize(aRx),aSA?this.aIr.resize(aS0):this.aIu.resize()",
        "aIg.resize(aRx),aIg.ft&&aIg.ft.forEach(tab=>__fx.settings.enhancedLobbyLayout?tab.button.style.fontSize='0.72em':tab.r3(0)),aIg.ft&&aIg.ft.forEach((tab,index)=>index>0&&(tab.button.style.borderLeftWidth=__fx.settings.enhancedLobbyLayout?'0.5px':'')),aIa.resize(aRx),aRv.resize(aRx),aRv.ft&&aRv.ft.forEach(tab=>__fx.settings.enhancedLobbyLayout?tab.button.style.fontSize='0.72em':tab.r3(0)),aRv.ft&&aRv.ft.forEach((tab,index)=>index>0&&(tab.button.style.borderLeftWidth=__fx.settings.enhancedLobbyLayout?'0.5px':'')),aIh.resize(aRx),aIh.ft&&aIh.ft.forEach(tab=>__fx.settings.enhancedLobbyLayout?tab.button.style.fontSize='0.72em':tab.r3(0)),aIh.ft&&aIh.ft.forEach((tab,index)=>index>0&&(tab.button.style.borderLeftWidth=__fx.settings.enhancedLobbyLayout?'0.5px':'')),aSA?this.aIr.resize(aS0):this.aIu.resize()"
    );

    replaceRawCode('gI.style.margin="0.2em 0.2em 0.2em 0.2em"', 'gI.style.margin=__fx.settings.enhancedLobbyLayout?"0.05em 0.1em":"0.2em 0.2em 0.2em 0.2em"');
    replaceRawCode('gI.style.width=gI.style.maxWidth=2===aak?"10.5em":"9.5em"', 'gI.style.width=gI.style.maxWidth="100%"');
    replaceRawCode('aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(.02,.3))', 'aS0.style.fontSize=bQ.bR.fy(bQ.bR.lV(__fx.settings.enhancedLobbyLayout ? .018 : .02,.3))');

    replaceRawCode(
        'aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk)',
        `__fx.settings.enhancedLobbyLayout?(aIe[0].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk),aIe[1].gI.textContent=""):(aIe[0].gI.textContent="Lobby",aIe[1].gI.textContent="MP: "+jl.d9.aJE[0]+"   SP: "+jl.d9.aJE[1]+"   Lobby: "+bQ.oY.aJF(jl.jm.jk)),(()=>{var parseClan=__fx.leaderboardFilter?.parseClanFromPlayerName,ownClan=or.a65&&parseClan?parseClan(or.a65.username):null;window.__fx.lobbyOwnClan=ownClan;var members=or.ox.oy[aMU]||[],readyCount=or.ox.oz[aMU]||0,clanmateReady=!!ownClan&&members.slice(0,readyCount).some(member=>member.aE!==or.a64&&parseClan(member.username)===ownClan),readyButton=aMC.aFC[1].button,badge=readyButton.querySelector('.fx-ready-clan-badge');if(clanmateReady){if(!badge){badge=document.createElement('span');badge.className='fx-ready-clan-badge';badge.style.cssText='display:inline-block;margin-left:.35em;padding:.05em .3em;border-radius:.3em;background:rgba(55,190,105,.22);color:#9af0b8;font-size:.72em;vertical-align:middle';readyButton.appendChild(badge)}badge.textContent='['+ownClan+']';readyButton.style.boxShadow='inset 0 0 0 2px #55d98b'}else{badge&&badge.remove();readyButton.style.boxShadow=''}})()`
    );

    // Reduce vertical spacing between chat messages.
    replaceRawCode('kp.style.margin="0.6em 0.6em"', 'kp.style.margin="0.3em 0.6em"');

    // Use compact, recognizable icons for the chat and player tabs.
    replaceRawCode(
        'for(var aL=0;aL<a8l.length;aL++)a8l[aL].r2(qx),a8l[aL].button.style.height="100%",a8l[aL].button.style.padding="0.0em 0.9em",a8l[aL].button.style.whiteSpace="pre",qj.kp.appendChild(a8l[aL].button)',
        'for(var aL=0;aL<a8l.length;aL++){var tabButton=a8l[aL].button,tabLabel=tabButton.textContent.trim();a8l[aL].r2(qx),tabButton.style.height="100%",tabButton.style.padding="0.0em 0.9em",tabButton.style.whiteSpace="pre";if(tabLabel==="Chat"||tabLabel==="Players"||tabLabel==="Spieler"){tabButton.setAttribute("aria-label",tabLabel);tabButton.title=tabLabel;tabButton.style.fontSize=".85em";var icon=document.createElementNS("http://www.w3.org/2000/svg","svg");icon.setAttribute("viewBox","0 0 24 24");icon.setAttribute("aria-hidden","true");icon.style.width=icon.style.height="1.1em";icon.style.fill="none";icon.style.stroke="currentColor";icon.style.strokeWidth="2";icon.style.strokeLinecap=icon.style.strokeLinejoin="round";var shape;if(tabLabel==="Chat"){shape=document.createElementNS("http://www.w3.org/2000/svg","path");shape.setAttribute("d","M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.7 8.7 0 0 1-4-.95L3 21l1.95-5.5A8.7 8.7 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8.5Z")}else{shape=document.createElementNS("http://www.w3.org/2000/svg","g");var head=document.createElementNS("http://www.w3.org/2000/svg","circle");head.setAttribute("cx","9");head.setAttribute("cy","8");head.setAttribute("r","3.5");shape.appendChild(head);var bodies=document.createElementNS("http://www.w3.org/2000/svg","path");bodies.setAttribute("d","M2.5 20v-1.5A4.5 4.5 0 0 1 7 14h4a4.5 4.5 0 0 1 4.5 4.5V20M16 4.8a3.5 3.5 0 0 1 0 6.7M17 14h.5a4 4 0 0 1 4 4v2");shape.appendChild(bodies)}icon.appendChild(shape);var label=document.createElement("span");label.textContent=tabLabel;tabButton.replaceChildren(icon,document.createTextNode(" "),label)}qj.kp.appendChild(tabButton)}'
    );

    replaceRawCode(
        'a5M.style.fontFamily="Arial Black, system-ui",a5M.style.fontSize="inherit",a5M.style.fontWeight="inherit"',
        'a5M.style.fontFamily="Arial Black, system-ui",a5M.style.fontSize=__fx.settings.enhancedLobbyLayout?"0.72em":"inherit",a5M.style.fontWeight="inherit"'
    );

    // Replace assets
    replaceOne(/(\(4,"crown",4,")[^"]+"\),/g, "$1" + assets.crownIcon + "\"),");
    replaceOne(/(\(6,"territorial\.io",6,")[^"]+"\),/g, "$1" + assets.fxClientLogo + "\"),");
    replaceOne(/(\(22,"logo",8,")[^"]+"\)/g, "$1" + assets.smallLogo + "\")");

    // Add update information
    replaceRawCode(`new k("🚀 New Game Update","The game was updated! Please reload the game. An internet connection is required.",!0,[`,
        `new k("🚀 New Game Update","The game was updated! Please reload the game. An internet connection is required."
        + "<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",!0,[`
    );

    // Max size for custom maps: from 4096x4096 to 8192x8192
    // TODO: test this; it might cause issues with new boat mechanics?

    { // Add Troop Density and Maximum Troops in side panel
        const { valuesArray } = replaceRawCode(`,labels[5]=__L(0,"Interest"),labels[6]=__L(),labels[7]=__L(),(truncatedLabels=new Array(labels.length)).fill(""),(valuesArray=new Array(labels.length))[0]=game.io?`,
            `,labels[5]=__L(0,"Interest"),labels[6]=__L(),labels[7]=__L(),
		labels.push("Max Troops", "Density"), // add labels
		(truncatedLabels=new Array(labels.length)).fill(""),(valuesArray=new Array(labels.length))[0]=game.io?`);
        replaceOne(new RegExp(/(:(?<valueIndex>\w+)<7\?\w+\.\w+\.\w+\(valuesArray\[\2\]\)):(\w+\.\w+\(valuesArray\[7\]\))}/
            .source.replace(/valuesArray/g, valuesArray), "g"),
            '$1 : $<valueIndex> === 7 ? $3 '
            + `: $<valueIndex> === 8 ? __fx.utils.getMaxTroops(${dict.playerData}.${dict.playerTerritories}, ${playerId}) `
            + `: __fx.utils.getDensity(${playerId}) }`);
        // increase the size of the side panel by 25% to make the text easier to read
        replaceOne(/(this\.\w+=Math\.floor\(\(\w+\.\w+\.\w+\(\)\?\.1646:\.126\))\*(\w+\.\w+\),)/g, "$1 * 1.25 * $2");
    }

    // Increment win counter on wins
    replaceRawCode(`=function(sE){a8.gD[sE]&&(o.ha(sE,2),b.h9<100?xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0):xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0))`,
        `=function(sE){
		if (${playerId} === sE && !${gIsSingleplayer} && !${dict.game}.${dict.gIsReplay})
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			xD(0,"Your Win Count is now " + __fx.wins.count,3,sE,ad.gN,ad.kl,-1,!0);
		a8.gD[sE]&&(o.ha(sE,2),b.h9<100?xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0):xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0))`);


    { // Add settings button and custom lobby button
        // add buttons
        replaceRawCode(`,new nQ("☰<br>"+__L(),function(){aD6(3)},aa.ks),new nQ("",function(){at.d5(12)},aa.kg,!1)]`,
            `,new nQ("☰<br>"+__L(),function(){aD6(3)},aa.ks),new nQ("",function(){at.d5(12)},aa.kg,!1),
            new nQ("FX Client settings", function() { __fx.WindowManager.openWindow("settings"); }, "rgba(0, 0, 20, 0.5)"),
            new nQ("Join/Create custom lobby", function() { __fx.customLobby.showJoinPrompt(); }, "rgba(20, 9, 77, 0.5)")]`)
        // set position
        replaceRawCode(`aZ.g5.vO(aD3[3].button,x+a0S+gap,a3X+h+gap,a0S,h);`,
            `aZ.g5.vO(aD3[3].button,x+a0S+gap,a3X+h+gap,a0S,h);
            aZ.g5.vO(aD3[5].button, x, a3X + h * 2 + gap * 2, a0S * 2 + gap, h / 3);
            aZ.g5.vO(aD3[6].button, x, a3X + h * 2.33 + gap * 3, a0S * 2 + gap, h / 3);`);
    }

    { // Keybinds
        // match required variables
        const { 0: match, groups: { attackBarObject, setRelative } } = matchOne(/:\w+\.\w+\(\w+,8\)\?(?<attackBarObject>\w+)\.(?<setRelative>\w+)\(32\/31\):/g);
        // create a setAbsolutePercentage function on the attack percentage bar object,
        // and also register the keybind handler functions
        replaceOne(/}(function \w+\((\w+)\){return!\(1<\2&&1===(?<attackPercentage>\w+)\|\|\(1<\2&&\2\*\3-\3<1\/1024\?\2=\(\3\+1\/1024\)\/\3:\2<1)/g,
            "} this.setAbsolutePercentage = function(newPercentage) { $<attackPercentage> = newPercentage; }; "
            + "__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage; "
            + `__fx.keybindFunctions.setRelative = (arg1) => ${attackBarObject}.${setRelative}(arg1); $1`);
        // insert keybind handling code into the keyDown handler function
        replaceOne(new RegExp(/(function \w+\((?<event>\w+)\){)([^}]+matched)/g.source.replace(/matched/g, escapeRegExp(match)), "g"),
            "$1 if (__fx.keybindHandler($<event>.key)) return; $3");
    }

    // Custom starting attack percentage
    replaceRawCode(`il=(bm.eU.data[182].value+1)/1024`,
        `il = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.eU.data[182].value+1)/1024`)

    // Set the default font to Trebuchet MS
    replace(/sans-serif"/g, 'Trebuchet MS"');

    // Realistic bot names setting
    // matches c4[i] = c4[i].replace(a6U[dx], a6V[dx])
    replaceOne(/(((\w+)\[\w+\])=\2\.replace\(\w+(\[\w+\]),\w+\4\))/g, "$1; if (__fx.settings.realisticNames) $3 = realisticNames;")

    // Hide all links in main menu depending on settings
    //replaceOne(/(this\.\w+=function\(\){)((\w+\.\w+)\[2\]=\3\[3\]=\3\[4\]=(?<linksHidden>!this\.\w+\.\w+),)/g,
    //"$1 if (settings.hideAllLinks) $3[0] = $3[1] = $<linksHidden>; else $3[0] = $3[1] = true; $2")

    // Clear canvas background if a custom background is being used
    replaceRawCode(`,this.qk=function(){var a4n,a4m;aq.pd?(a4m=aL.gA/aq.eE,a4n=aL.gF/aq.eF,canvas.setTransform(a4m=a4n<a4m?a4m:a4n,0,0,a4m,`,
        `,this.qk=function(){var a4n,a4m;
        if (__fx.makeMainMenuTransparent) canvas.clearRect(0,0,aL.gA,aL.gF);
        else aq.pd?(a4m=aL.gA/aq.eE,a4n=aL.gF/aq.eF,canvas.setTransform(a4m=a4n<a4m?a4m:a4n,0,0,a4m,`);

    // Track donations
    replaceOne(/(this\.\w+=function\((\w+),(\w+)\)\{)(\2===\w+\.\w+&&\(\w+\.\w+\((\w+\.\w+)\[0\],\5\[1\],\3\),this\.(\w+)\[12\]\+=\5\[1\],this\.\6\[16\]\+=\5\[0\]\),\3===\w+\.\w+&&\()/g,
        `$1 __fx.donationsTracker.logDonation($2, $3, $5[0], ${dict.sidebar}.${dict.getTime}()); $4`)


    // Detailed team pie chart percentage
    replaceRawCode(`qr=Math.floor(100*f0+.5)+"%"`,
        `qr = (__fx.settings.detailedTeamPercentage ? (100*f0).toFixed(2) : Math.floor(100*f0+.5)) + "%"`)
    replaceRawCode(",fontSize=+dz*Math.min(f0,.37);", ",fontSize=(__fx.settings.detailedTeamPercentage ? 0.75 : 1)*dz*Math.min(f0,.37);")

    console.log('Removing ads...');
    // Remove ads
    replace('//api.adinplay.com/libs/aiptag/pub/TRT/territorial.io/tag.min.js', '');
}
