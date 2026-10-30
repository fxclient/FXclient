import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ safeDictionary: dict, modifyCode, waitForMinification, matchCode, replaceOne, replaceRawCode }) => {

	// Player list and leaderboard filter tabs

    const uiOffset = dict.uiSizes + "." + dict.gap
    const rawPlayerNames = dict.playerData + "." + dict.rawPlayerNames

	const { topBarHeight } = matchCode(`aAn = 0.000 * aAd; topBarHeight = Math.floor(0.45 * aAm + aAf);`)
	const buttonBoundsCheck = `__fx.utils.isPointInRectangle(x, y, ${uiOffset} + 12, ${uiOffset} + 12, ${topBarHeight} - 22, ${topBarHeight} - 22)`

	// Handle player list button and leaderboard tabs mouseDown
	// and create a function for scrolling the leaderboard to the top
	modifyCode(`/*insert line:*/__fx.leaderboardFilter.scrollToTop = function(){position = 0;}
			this.mouseDown = function(x, y) {
	if (a4L(x, y)) {
		/*insert line:*/ if (${buttonBoundsCheck}) return (__fx.playerList.display(${rawPlayerNames}), true)
		/*insert line:*/ if (y - ${uiOffset} > __fx.leaderboardFilter.verticalClickThreshold)
		/*insert line:*/    return __fx.leaderboardFilter.handleMouseDown(x - ${uiOffset})
		var aZA = aZB(y);
		if (aZA >= 0) {
			aYm = aF.time;
			aYn = true;
			aYo = aYp = aZA;
			if (qr.rA()) {
				aZA = iA(-1, aYp, windowHeight);
				aZA = (aZA === windowHeight) ? -1 : aZA;
				if (aYl !== aZA) {
					aYl = aZA;
					drawFunction();
					aF.requestRepaint = true;
				}
			}
			return true;
		}
		if (aYq) {
			aYq = false;
			drawFunction();
			aF.requestRepaint = true;
		}
		fZ.ff(10, 0, new zU({ zW: 1 }));
		return true;
	}
	return false;
	};`)

	// Handle player list button and leaderboard tabs hover
	// and create a function for repainting the leaderboard
	modifyCode(`/*insert line:*/ var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() { drawFunction(), aF.requestRepaint = true; };
	this.mouseMove = function(x, y) {
		${insert(`if (${buttonBoundsCheck}) {
						__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, repaintLb());
				} else {
						__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, repaintLb());
				}
				if (__fx.leaderboardFilter.setHovering(
						__fx.utils.isPointInRectangle(
								x, y, ${uiOffset}, ${uiOffset} + __fx.leaderboardFilter.verticalClickThreshold,
								__fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset
						), x - ${uiOffset}
				)) return;`)}
		var aJ;
		var aZA = aZB(y);
		var aZC = a4L(x, y);
		var aZD = !!(aZA < 0 && aZC && !qr.rA());
		if (aYn) {
			aJ = position;
			position += aYo - aZA;
			position = iA(0, position, game.gMaxPlayers - windowHeight);
			if (position !== aJ) {
				aYq = aZD;
				aYo = aZA;
				aZA = iA(-1, aZA, windowHeight);
				aZA = (aZA === windowHeight || !aZC) ? -1 : aZA;
				aYl = aZA;
				drawFunction();
				aF.requestRepaint = true;
			} /*...*/
		}
	};`)

	// Display donations for a player when clicking on them in the leaderboard
	// and skip handling clicks when clicking on an empty space (see the isEmptySpace
	// variable in the modified leaderboard click handler from the leaderboard filter)
	{
		const { game, gIsTeamGame, gIsSingleplayer, rawPlayerNames, playerData } = dict
		const { playerId } = matchCode(
			`this.someMethod = function(player) { return player === game.playerId && playerData.someArr[player] !== 2; };`,
			{ dictionary: { game, playerData }, addToDictionary: ["playerId"] }
		)
		modifyCode(`
			${insert(`if (!isEmptySpace && game.gIsTeamGame && __fx.settings.openDonationHistoryFromLb)
				__fx.donationsTracker.displayHistory(player, playerData.rawPlayerNames, game.gIsSingleplayer);`)}
			if (playerData.b[player] !== 0 ${insert(`&& !isEmptySpace`)} && !(game.d && !game.e && !game.f ${insert(`&& player !== ${game}.${playerId}`)})) {
				c.animateCamera(player, 800, false, 0);
			}`, { dictionary: { game, gIsTeamGame, gIsSingleplayer, rawPlayerNames }})
	}

    waitForMinification(() => {
        const { cachedDisplayNameProp } = matchCode(
            `PD.cachedDisplayNameProp[i] = someObj1.someObj2.someFn(RPN[i], someFont, someWidth)`,
            { dictionary: { PD: dict.playerData, RPN: rawPlayerNames } }
        )
        const cachedDisplayName = dict.playerData + "." + cachedDisplayNameProp

        // capture the property controlling player state (for fixing underscore on clans in rivals tab)
        const { playerStateProp } = matchCode(
            `someCanvas.fillText(CDN[i], someX, someY), 0 !== PD.playerStateProp[i] && (someCanvas.font = someFont)`,
            { dictionary: { PD: dict.playerData, CDN: cachedDisplayName } }
        )
        const playerState = dict.playerData + "." + playerStateProp

        // Draw player list button
        replaceOne(/(="";function (?<drawFunction>\w+)\(\){[^}]+?(?<canvas>\w+)\.fillRect\(0,(?<topBarHeight>\w+),\w+,1\),(?:\3\.fillRect\([^()]+\),)+\3\.font=\w+,(\w+\.\w+)\.textBaseline\(\3,1\),\5\.textAlign\(\3,1\),\3\.fillText\(\w+,Math\.floor\()(\w+)\/2\),(Math\.floor\(\w+\+\w+\/2\)\));/g,
            "$1($6 + $<topBarHeight> - 22) / 2), $7; __fx.playerList.drawButton($<canvas>, 12, 12, $<topBarHeight> - 22);")

        { // Leaderboard filter
            // for the leaderboard draw function:
            replaceRawCode("function drawFunction(){a0A.clearRect(0,0,a04,y9),a0A.fillStyle=aYq?aZ.a4s:aZ.a4o,a0A.fillRect(0,0,a04,a0F),a0A.fillStyle=aZ.kZ,a0A.fillRect(0,a0F,a04,y9-a0F),leaderboardPositionsById[game.playerId]>=position&&a0Z(leaderboardPositionsById[game.playerId]-position,aZ.kw),0!==leaderboardPositionsById[game.playerId]&&0===position&&a0Z(0,aZ.lJ),-1!==a0P&&a0Z(a0P,aZ.kd),a0A.fillStyle=aZ.gF,a0A.fillRect(0,a0F,a04,1),a0A.fillRect(0,0,a04,b0.ur),a0A.fillRect(0,0,b0.ur,y9),a0A.fillRect(a04-b0.ur,0,b0.ur,y9),a0A.fillRect(0,y9-b0.ur,a04,b0.ur),",

                `var leaderboardHasChanged = true;
		this.playerPos = game.playerId;
		__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;
		function updateFilteredLb() {
			if (!leaderboardHasChanged) return;
			__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
				.map(id => leaderboardPositionsById[id]).sort((a, b) => a - b);
			leaderboardHasChanged = false;
			this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(leaderboardPositionsById[game.playerId]);
		}
		function drawFunction() {
		a0A.clearRect(0, 0, a04, y9),
		a0A.fillStyle = aYq ? aZ.a4s : aZ.a4o,
		a0A.fillRect(0, 0, a04, a0F),
		a0A.fillStyle = aZ.kZ,
		a0A.fillRect(0, a0F, a04, y9 - a0F);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled
			? this.playerPos
			: leaderboardPositionsById[game.playerId]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a0P = -1;
		if (__fx.leaderboardFilter.enabled && a0P >= __fx.leaderboardFilter.filteredLeaderboard.length) a0P = -1;
		(__fx.leaderboardFilter.showingRivals
			? (function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) a0Z(ownClanIndex - position, aZ.kw);
			})()
			: (playerPos >= position && a0Z(playerPos - position, aZ.kw),
				0 !== leaderboardPositionsById[game.playerId] && 0 === position && a0Z(0, aZ.lJ))
		),
		-1 !== a0P && a0Z(a0P, aZ.kd),
		a0A.fillStyle = aZ.kZ,
		//console.log("drawing", a0P),
		a0A.clearRect(0, y9 - __fx.leaderboardFilter.tabBarOffset, a04, __fx.leaderboardFilter.tabBarOffset);
		a0A.fillRect(0, y9 - __fx.leaderboardFilter.tabBarOffset, a04, __fx.leaderboardFilter.tabBarOffset);
		a0A.fillStyle = aZ.gF,
		a0A.fillRect(0, a0F, a04, 1),
		a0A.fillRect(0, y9 - __fx.leaderboardFilter.tabBarOffset, a04, 1),
		__fx.leaderboardFilter.drawTabs(a0A, a04, y9 - __fx.leaderboardFilter.tabBarOffset, aZ.kw),
		a0A.fillRect(0, 0, a04, b0.ur),
		a0A.fillRect(0, 0, b0.ur, y9),
		a0A.fillRect(a04 - b0.ur, 0, b0.ur, y9),
		a0A.fillRect(0, y9 - b0.ur, a04, b0.ur),`)
            replaceRawCode("var hZ,eh=leaderboardPositionsById[game.playerId]<position+windowHeight-1?1:2;for(a0A.font=a07,aY.g0.textAlign(a0A,0),hZ=windowHeight-eh;0<=hZ;hZ--)a0a(leaderboardArray[hZ+position]),a0b(hZ,hZ+position,leaderboardArray[hZ+position]);for(aY.g0.textAlign(a0A,2),hZ=windowHeight-eh;0<=hZ;hZ--)a0a(leaderboardArray[hZ+position]),a0c(hZ,leaderboardArray[hZ+position]);",
                `var hZ, eh = playerPos < position + windowHeight - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) eh = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - windowHeight)
				position = (rivalsCount > windowHeight ? rivalsCount : windowHeight) - windowHeight;
			var rivalsRestore = [];
			var rivalsTerritories = __fx.getPlayerTerritories();
			try {
				for (var rivalsRow = 0; rivalsRow < windowHeight; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, rivalsTerritories[repId], ${cachedDisplayName}[repId], ${playerState}[repId]]);
					rivalsTerritories[repId] = rivalsEntry.territory;
					${cachedDisplayName}[repId] = "[" + rivalsEntry.clan + "]";
					${playerState}[repId] = 0;
				}
				for (a0A.font = a07, aY.g0.textAlign(a0A, 0), hZ = windowHeight - eh; 0 <= hZ; hZ--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[hZ + position];
					if (rivalsEntryLeft !== undefined)
						a0a(rivalsEntryLeft.representativeId), a0b(hZ, hZ + position, rivalsEntryLeft.representativeId);
				}
				for (aY.g0.textAlign(a0A, 2), hZ = windowHeight - eh; 0 <= hZ; hZ--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[hZ + position];
					if (rivalsEntryRight !== undefined)
						a0a(rivalsEntryRight.representativeId), a0c(hZ, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					rivalsTerritories[entry[0]] = entry[1];
					${cachedDisplayName}[entry[0]] = entry[2];
					${playerState}[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - windowHeight)
				position = (result.length > windowHeight ? result.length : windowHeight) - windowHeight;
			//if (position >= result.length) position = result.length - 1;
			for (a0A.font = a07, aY.g0.textAlign(a0A, 0), hZ = windowHeight - eh; 0 <= hZ; hZ--) {
				const pos = result[hZ + position];
				if (pos !== undefined)
					a0a(leaderboardArray[pos]), a0b(hZ, pos, leaderboardArray[pos]);
			}
			for (aY.g0.textAlign(a0A, 2), hZ = windowHeight - eh; 0 <= hZ; hZ--) {
				const pos = result[hZ + position];
				if (pos !== undefined)
					a0a(leaderboardArray[pos]), a0c(hZ, leaderboardArray[pos]);
			}
		} else {
			for (a0A.font = a07, aY.g0.textAlign(a0A, 0), hZ = windowHeight - eh; 0 <= hZ; hZ--)
				a0a(leaderboardArray[hZ + position]), a0b(hZ, hZ + position, leaderboardArray[hZ + position]);
			for (aY.g0.textAlign(a0A, 2), hZ = windowHeight - eh; 0 <= hZ; hZ--)
				a0a(leaderboardArray[hZ + position]), a0c(hZ, leaderboardArray[hZ + position]);
		}`)
            // in the leaderboard resize handler: make space for the tab buttons at the bottom of the leaderboard
            replaceRawCode(",a09.height=y9,a09_ctx=a09.getContext(\"2d\",{alpha:!0}),a0D=.025*a04,a06=.16*a04,a0E=0*a04,a0F=Math.floor(.45*a0D+a06),a0G=(y9-a06-2*a0D-a0E)/a08,a05=aY.g0.g1(1,Math.floor(.55*a06)),",
                `,a09.height=y9,a09_ctx=a09.getContext("2d",{alpha:!0}),a0D=.025*a04,a06=.16*a04,a0E=0*a04,a0F=Math.floor(.45*a0D+a06),a0G=(y9-a06-2*a0D-a0E)/a08,
		a09.height = y9 += a0G, __fx.leaderboardFilter.tabBarOffset = Math.floor(a0G * 1.3), __fx.leaderboardFilter.verticalClickThreshold = y9 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a04,
		a05=aY.g0.g1(1,Math.floor(.55*a06)),`)
            // Set the leaderboardHasChanged flag on leaderboard updates
            replaceRawCode("for(var eM=a0q-1;0<=eM;eM--)a14[eM]=jR[eM],a15[eM]=a8.f8[jR[eM]];a14[a0q]=a0l[b.ed],a15[a0q]=a8.f8[b.ed]",
                `for(var eM=a0q-1;0<=eM;eM--)a14[eM]=jR[eM],a15[eM]=a8.f8[jR[eM]];a14[a0q]=a0l[b.ed],a15[a0q]=a8.f8[b.ed]; leaderboardHasChanged = true;`);
            // handle clicking on a player in the leaderboard
            replaceRawCode("var a0p=a0q(fJ);return ag.tQ()&&-1!==a0P&&(a0P=-1,a0Y(),b3.d1=!0),b3.dY-a0Q<350&&a0T===a0p&&-1!==(a0p=(a0p=yr(-1,a0p,windowHeight))!==windowHeight&&vU(x,y)?a0p:-1)&&(x=leaderboardArray[a0p+position],a0p===windowHeight-1&&leaderboardPositionsById[game.playerId]>=position+windowHeight-1&&(x=game.playerId),",
                `var a0p = a0q(fJ);
		var isEmptySpace = false;
		return ag.tQ() && -1 !== a0P && (a0P = -1, a0Y(), b3.d1 = !0), b3.dY - a0Q < 350 && a0T === a0p && -1 !== (a0p = (a0p = yr(-1, a0p, windowHeight)) !== windowHeight && vU(x, y) ? a0p : -1) && (x = (__fx.leaderboardFilter.showingRivals
			? (isEmptySpace = __fx.leaderboardFilter.rivalsData[a0p + position] === undefined, __fx.leaderboardFilter.rivalsData[a0p + position]?.representativeId ?? game.playerId)
			: __fx.leaderboardFilter.enabled ? (updateFilteredLb(), leaderboardArray[__fx.leaderboardFilter.filteredLeaderboard[a0p + position] ?? (isEmptySpace = true, leaderboardPositionsById[game.playerId])]) : leaderboardArray[a0p + position]),
			a0p === windowHeight - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : leaderboardPositionsById[game.playerId]) >=
			position + windowHeight - 1 && (x = game.playerId),`);
            // Get clan parsing function
            replaceRawCode(`this.uI=function(username){var uK,uJ=username.indexOf("[");return!(uJ<0)&&1<(uK=username.indexOf("]"))-uJ&&uK-uJ<=8?username.substring(uJ+1,uK).toUpperCase().trim():null},`,
                `this.uI=function(username){var uK,uJ=username.indexOf("[");return!(uJ<0)&&1<(uK=username.indexOf("]"))-uJ&&uK-uJ<=8?username.substring(uJ+1,uK).toUpperCase().trim():null}, __fx.leaderboardFilter.parseClanFromPlayerName = this.uI;`);
			// no pinning player on leaderboard in rivals tab
            replaceRawCode(
                `2==gi&&(aBj(aE.et),bD.r2.textAlign(aBH,0),aBk(aBF-1,kF[aE.et],aE.et),bD.r2.textAlign(aBH,2),aBl(aBF-1,aE.et)),`,
                `!__fx.leaderboardFilter.showingRivals&&2==gi&&(aBj(aE.et),bD.r2.textAlign(aBH,0),aBk(aBF-1,kF[aE.et],aE.et),bD.r2.textAlign(aBH,2),aBl(aBF-1,aE.et)),`
            );
        }
    })
})
