var aQ, aR, aS, xE, xF, xG, xH, aFW, aFV, aFX, aFn, aFl, aFK, aFZ, aNS, aFs, aNT, aNU, aNV, aFT, kH, q, v, z1, z2, cM, yv, yw, aPE, cd, j9, g5, kF, yz, l9, mS, cl, kD, yP, mX, jK, z0, a19, uW, jz, bl, eb, yB, yl, ez, b7, pQ, yn, et, aIt, ct, aLZ, ym,
	yt, wi, aER, aH3, ys, aPF, zA, gv, aGn, bD, r2, yi, hW, z6, wq, aIv, z4, z5, lq, z7, z8, nD, jd, jR, r, bO, j1, hy, aBQ, oh, i3, hx, zK, c9, aD7, hA, f7, il, d7, yy, aPG, pc, dR, aPH, n, yh, y5, aPI, xO, gs, a1E, aEB, jE, bY, dg, mb, bL, aC, d5,
	b2, a0j, b5, pp, a88, aPJ, tb, uN, oq, a4E, vw, aLX, a4Q, uj, fH, fG, fI, aSy, cS, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "span",
		"1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Player ", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave",
		"keydown", "inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	var b, c, d;

	function h() {
		l(), 3 !== q.data.botDifficultyType || r.s.x(q.data.botDifficultyData) || (q.data.botDifficultyType = 0), 3 !== q.data.botDifficultyType && (q.data.botDifficultyData = null), n.o()[19] = null, n.p()
	}

	function l() {
		3 === q.data.botDifficultyType && r.s.t(d.u(), q.data.botDifficultyData, v.w.length - 1)
	}

	function a0(y, a9) {
		var a3 = new a4,
			value = (a3.a5(a9 < 0 ? L(0) : L(7) + " " + aC.aD[a9 % 9]), 0 <= a9 && (a3.aE(L(8) + ": " + q.data.teamPlayerCount[a9]).style.marginBottom = "1em"), a9 < 0 ? q.data.botDifficultyValue : q.data.botDifficultyTeam[a9]);
		a3.a7(new a8({
			a6: v.w,
			value: value
		}, function(aF) {
			a9 < 0 ? q.data.botDifficultyValue = aF : q.data.botDifficultyTeam[a9] = aF
		})), y.push(a3)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(0), [new g("⬅️ " + L(1), h)]), c = new i(b.j, function() {
		var y = [];
		if (function(y) {
				var a3 = new a4,
					a6 = (a3.a5(L(2)), [L(3), L(4), L(5), L(6)]),
					value = q.data.botDifficultyType;
				0 === q.data.gameMode && (value = Math.min(value, 2), a6.splice(2, 1));
				a3.a7(new a8({
					a6: a6,
					value: value
				}, function(a9) {
					l(), q.data.botDifficultyType = a9, 0 === q.data.gameMode && 2 === a9 && (q.data.botDifficultyType = 3), 3 !== q.data.botDifficultyType || q.data.botDifficultyData || (q.data.botDifficultyData = new Uint8Array(
						q.aA)), 2 !== q.data.botDifficultyType || q.data.botDifficultyTeam || (q.data.botDifficultyTeam = new Uint8Array(9)), n.aB(25)
				})), y.push(a3)
			}(y), 0 === q.data.botDifficultyType) a0(y, -1);
		else if (2 === q.data.botDifficultyType)
			for (var a1 = 0; a1 < q.data.teamPlayerCount.length; a1++) q.data.teamPlayerCount[a1] && a0(y, a1);
		else 3 === q.data.botDifficultyType && ! function(y) {
			var a3 = new a4;
			a3.a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.botDifficultyData, 8)), a3.aK(d), y.push(a3)
		}(y);
		return y
	}())
}

function aT() {
	var aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, position, aq, ar, at, au, av, aw = 1,
		ax = 1,
		ay = "";
	var leaderboardHasChanged = true;
	this.playerPos = q.bS;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => aS[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(aS[q.bS]);
	}

	function bC() {
		aa.clearRect(0, 0, aU, aQ),
			aa.fillStyle = av ? bO.bP : bO.bQ,
			aa.fillRect(0, 0, aU, af),
			aa.fillStyle = bO.bR,
			aa.fillRect(0, af, aU, aQ - af);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aY)
				position = (rivalsCount > aY ? rivalsCount : aY) - aY;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			aS[q.bS]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) ap = -1;
		if (__fx.leaderboardFilter.enabled && ap >= __fx.leaderboardFilter.filteredLeaderboard.length) ap = -1;
		if (__fx.leaderboardFilter.showingRivals && ap + position >= __fx.leaderboardFilter.rivalsData.length) ap = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aY) bT(ownClanIndex - position, bO.bU);
			})() :
			(playerPos >= position && bT(playerPos - position, bO.bU),
				0 !== aS[q.bS] && 0 === position && bT(0, bO.bV))
		),
		-1 !== ap && bT(ap, bO.bW),
			aa.fillStyle = bO.bR,
			//console.log("drawing", ap),
			aa.clearRect(0, aQ - __fx.leaderboardFilter.tabBarOffset, aU, __fx.leaderboardFilter.tabBarOffset);
		aa.fillRect(0, aQ - __fx.leaderboardFilter.tabBarOffset, aU, __fx.leaderboardFilter.tabBarOffset);
		aa.fillStyle = bO.bX,
			aa.fillRect(0, af, aU, 1),
			aa.fillRect(0, aQ - __fx.leaderboardFilter.tabBarOffset, aU, 1),
			__fx.leaderboardFilter.drawTabs(aa, aU, aQ - __fx.leaderboardFilter.tabBarOffset, bO.bU),
			aa.fillRect(0, 0, aU, bY.bZ),
			aa.fillRect(0, 0, bY.bZ, aQ),
			aa.fillRect(aU - bY.bZ, 0, bY.bZ, aQ),
			aa.fillRect(0, aQ - bY.bZ, aU, bY.bZ), aa.font = aV, r.bF.textBaseline(aa, 1), r.bF.textAlign(aa, 1), aa.fillText(ay, Math.floor((aU + af - 22) / 2), Math.floor(ad + aW / 2));
		__fx.playerList.drawButton(aa, 12, 12, af - 22);
		var bN, ba = playerPos < position + aY - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) ba = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aY; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, b7.br[repId], b7.b8[repId], b7.bo[repId]]);
					b7.br[repId] = rivalsEntry.territory;
					b7.b8[repId] = "[" + rivalsEntry.clan + "]";
					b7.bo[repId] = 0;
				}
				for (aa.font = aX, r.bF.textAlign(aa, 0), bN = aY - ba; 0 <= bN; bN--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[bN + position];
					if (rivalsEntryLeft !== undefined)
						bb(rivalsEntryLeft.representativeId), bc(bN, bN + position, rivalsEntryLeft.representativeId);
				}
				for (r.bF.textAlign(aa, 2), bN = aY - ba; 0 <= bN; bN--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[bN + position];
					if (rivalsEntryRight !== undefined)
						bb(rivalsEntryRight.representativeId), bd(bN, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					b7.br[entry[0]] = entry[1];
					b7.b8[entry[0]] = entry[2];
					b7.bo[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aY)
				position = (result.length > aY ? result.length : aY) - aY;
			//if (position >= result.length) position = result.length - 1;
			for (aa.font = aX, r.bF.textAlign(aa, 0), bN = aY - ba; 0 <= bN; bN--) {
				const pos = result[bN + position];
				if (pos !== undefined)
					bb(aR[pos]), bc(bN, pos, aR[pos]);
			}
			for (r.bF.textAlign(aa, 2), bN = aY - ba; 0 <= bN; bN--) {
				const pos = result[bN + position];
				if (pos !== undefined)
					bb(aR[pos]), bd(bN, aR[pos]);
			}
		} else {
			for (aa.font = aX, r.bF.textAlign(aa, 0), bN = aY - ba; 0 <= bN; bN--)
				bb(aR[bN + position]), bc(bN, bN + position, aR[bN + position]);
			for (r.bF.textAlign(aa, 2), bN = aY - ba; 0 <= bN; bN--)
				bb(aR[bN + position]), bd(bN, aR[bN + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == ba && (bb(q.bS), r.bF.textAlign(aa, 0), bc(aY - 1, aS[q.bS], q.bS), r.bF.textAlign(aa, 2), bd(aY - 1, q.bS)), 0 === position && (ba = .7 * ag / bl.get(4).height, aa.setTransform(ba, 0, 0, ba,
			Math.floor(ah + .58 * ag + .5 * ba * bl.get(4).width), Math.floor(ad + aW + .4 * ag)), aa.imageSmoothingEnabled = !0, aa.drawImage(bl.get(4), -Math.floor(bl.get(4).width / 2), -Math.floor(bl.get(4).height / 2)), aa.setTransform(1,
			0, 0, 1, 0, 0))
	}

	function bb(player) {
		q.bf && (aa.fillStyle = aC.bg[aC.bh[player]])
	}

	function bT(a1, bi) {
		aa.fillStyle = bi, a1 = aY - 1 < a1 ? aY - 1 : a1;
		bi = Math.floor((a1 === aY - 1 ? 2 : 0 === a1 ? 1.15 : 1) * ag), bi = a1 === aY - 2 ? Math.floor(af + 9.15 * ag) - Math.floor(af + 8.15 * ag) : bi;
		aa.fillRect(0, Math.floor(af + (a1 + (0 === a1 ? 0 : .15)) * ag), aU, bi)
	}

	function bc(bm, bn, a1) {
		aa.fillText(al[bn], ah, Math.floor(ad + aW + (bm + .5) * ag)), 1 === b7.bo[a1] && (aa.font = "italic " + aX);
		bn = Math.floor(ad + aW + (bm + .5) * ag);
		aa.fillText(b7.b8[a1], ai, bn), 0 !== b7.bo[a1] && (aa.font = aX), a1 < q.bq && 2 !== b7.bo[a1] || aa.fillRect(ai, bn + .35 * aw, ak[a1], Math.max(1, .1 * aw))
	}

	function bd(bm, a1) {
		aa.fillText(b7.br[a1], aj, Math.floor(ad + aW + (bm + .5) * ag))
	}
	this.az = function() {
		var a1;
		for (n.b0.b1[0] = 0, au = at = aq = 0, av = ar = !1, ap = -1, aY = b2.b3.b4() ? 6 : 10, ax = (position = 0) === (ax = b5.buffer.data[11].value) ? 10 : 1 === ax ? 5 : 1, ao = !1, am = new Uint16Array(aY + 1), an = new Uint32Array(aY + 1),
			ac = q.aA, aR = new Uint16Array(ac), aS = new Uint16Array(ac), a1 = ac - 1; 0 <= a1; a1--) aR[a1] = a1, aS[a1] = a1;
		this.resize(!0), ak = new Uint16Array(q.aA);
		var b6 = Math.floor(aU - ai - ah - ab);
		for (al = new Array(q.aA), aa.font = aX, a1 = q.aA - 1; 0 <= a1; a1--) al[a1] = a1 + 1 + ".", b7.b8[a1] = r.b9.bA(b7.bB[a1], aX, b6), ak[a1] = Math.floor(aa.measureText(b7.b8[a1]).width);
		bC()
	}, this.resize = function(az) {
		if (aQ = b2.b3.b4() ? (aU = Math.floor(.335 * bD.bE), Math.floor(aY * aU / 8)) : (aU = Math.floor(.27 * bD.bE), Math.floor(aY * aU / 10)), aU = Math.floor(.97 * aU), (aZ = document.createElement("canvas")).width = aU, aZ.height = aQ, aa =
			aZ.getContext("2d", {
				alpha: !0
			}), ad = .025 * aU, aW = .16 * aU, ae = 0 * aU, af = Math.floor(.45 * ad + aW), ag = (aQ - aW - 2 * ad - ae) / aY,
			aZ.height = aQ += ag, __fx.leaderboardFilter.tabBarOffset = Math.floor(ag * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aQ - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aU,
			aV = r.bF.bG(1, Math.floor(.55 * aW)), aw = Math.floor((b2.b3.b4() ? .67 : .72) * ag), aX = r.bF.bG(0, aw), aa.font = aX, ah = Math.floor(.04 * aU), ai = Math.floor((b2.b3.b4() ? .195 : .18) * aU), ab = Math.floor(aa.measureText(
				"00920600").width), aa.font = aV, aj = aU - ah, !az) {
			aa.font = aX;
			for (var a1 = q.aA - 1; 0 <= a1; a1--) ak[a1] = Math.floor(aa.measureText(b7.b8[a1]).width);
			bC()
		}
		ay = r.b9.bA(L(9), aV, .96 * aU)
	}, this.bH = function() {
		return aU
	}, this.bI = function(bJ, bK) {
		(bK || ao && (bJ || bL.bM() % ax == 0)) && (ao = !1, bC())
	}, this.bs = function() {
		! function() {
			for (var bN = ac - 1; 0 <= bN; bN--) 0 === b7.c0[aR[bN]] && ! function(bN) {
				var c2 = aR[bN];
				ac--;
				for (var a1 = bN; a1 < ac; a1++) aR[a1] = aR[a1 + 1], aS[aR[a1]] = a1;
				aR[ac] = c2, aS[aR[ac]] = ac
			}(bN)
		}();
		for (var by, bz = ac - 1, bN = 0; bN < bz; bN++) b7.br[aR[bN]] < b7.br[aR[bN + 1]] && (by = aR[bN], aR[bN] = aR[bN + 1], aR[bN + 1] = by, aS[aR[bN]] = bN, aS[aR[bN + 1]] = bN + 1);
		! function() {
			for (var bx = ao, ba = (ao = !0, aS[q.bS] >= aY - 1 ? aY - 2 : aY - 1), a1 = ba; 0 <= a1; a1--)
				if (am[a1] !== aR[a1] || an[a1] !== b7.br[aR[a1]]) return;
			(ba != aY - 2 || am[aY] === aS[q.bS] && an[aY] === b7.br[q.bS]) && (ao = bx)
		}();
		for (var a1 = aY - 1; 0 <= a1; a1--) am[a1] = aR[a1], an[a1] = b7.br[aR[a1]];
		am[aY] = aS[q.bS], an[aY] = b7.br[q.bS];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.c3 = function(c4, bp) {
		if (c5(c4, bp)) {
			if (__fx.utils.isPointInRectangle(c4, bp, bY.gap + 12, bY.gap + 12, af - 22, af - 22)) __fx.playerList.display(b7.bB);
			else {
				if (bp - bY.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(c4 - bY.gap);
				c4 = c7(bp);
				0 <= c4 ? (aq = bL.c8, ar = !0, at = au = c4, c9.cA() && (c4 = cB(-1, au, aY), ap !== (c4 = c4 === aY ? -1 : c4)) && (ap = c4, bC(), bL.cC = !0)) : (av && (av = !1, bC(), bL.cC = !0), n.aB(10, 0, new cD({
					cE: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		bC(), bL.cC = !0
	};

	function c7(bp) {
		return (bp -= bY.gap + af) < 0 ? Math.floor(bp / ag) - 1 : bp < (aY - 1) * ag ? Math.floor(bp / ag) : bp < aQ - af ? aY - 1 : (bp -= aQ - af, aY + Math.floor(bp / ag))
	}

	function c5(c4, bp) {
		return c4 >= bY.gap && c4 < bY.gap + aU && bp >= bY.gap && bp < bY.gap + aQ
	}
	this.cF = function(c4, bp) {
		var bx, c6;
		if (__fx.utils.isPointInRectangle(c4, bp, bY.gap + 12, bY.gap + 12, af - 22, af - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(c4, bp, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), c4 - bY.gap)) return c6 = c7(bp), c4 = c5(c4, bp), bp = !(!(c6 < 0 && c4) || c9.cA()), ar ? (bx = position, (position = cB(0, position += at - c6, q.aA - aY)) !== bx ? (av = bp, c6 = cB(-1,
			at = c6, aY), ap = c6 = c6 !== aY && c4 ? c6 : -1, bC(), bL.cC = !0) : av !== bp && (av = bp, bC(), bL.cC = !0), !0) : (c6 = (c6 = cB(-1, c6, aY)) === aY || !c4 || c9.cA() ? -1 : c6, (ap !== c6 || av !== bp) && (ap = c6, av =
			bp, bC(), bL.cC = !0))
	}, this.cI = function(c4, bp) {
		if (!ar) return !1;
		ar = !1;
		var c6 = c7(bp);
		var isEmptySpace = false;
		return c9.cA() && -1 !== ap && (ap = -1, bC(), bL.cC = !0), bL.c8 - aq < 350 && au === c6 && -1 !== (c6 = (c6 = cB(-1, c6, aY)) !== aY && c5(c4, bp) ? c6 : -1) && (c4 = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[c6 + position] === undefined, __fx.leaderboardFilter.rivalsData[c6 + position]?.representativeId ?? q.bS) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), aR[__fx.leaderboardFilter.filteredLeaderboard[c6 + position] ?? (isEmptySpace = true, aS[q.bS])]) : aR[c6 + position]),
			c6 === aY - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : aS[q.bS]) >=
			position + aY - 1 && (c4 = q.bS), !isEmptySpace && q.bf && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(c4, b7.bB, q.cK), 0 === b7.c0[c4] || isEmptySpace || q.cJ && !q.cK && !q.cL && c4 !== q
			.bS || cM.cN(c4, 800, !1, 0)), !0
	}, this.cO = function(c4, bp, deltaY) {
		var cQ;
		return !(ar || q.cP || (cQ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !c5(c4, bp)) || (c4 = (c4 = cB(-1, c7(bp), aY)) === aY || c9.cA() ? -1 : c4, 0 < deltaY ? position < q.aA - aY && (position += Math.min(q.aA - aY - position,
			cQ), ap = c4, bC(), bL.cC = !0) : 0 < position && (position -= Math.min(position, cQ), ap = c4, bC(), bL.cC = !0), 0))
	}, this.cR = function() {
		cS.drawImage(aZ, bY.gap, bY.gap)
	}
}

function cT() {
	var cU, cV, cW, cX, cY = 0,
		cZ = 0;

	function ch() {
		return Math.pow(Math.pow(cW - cU, 2) + Math.pow(cX - cV, 2), .5)
	}

	function cc(cb) {
		cU = bD.cp * cb.touches[0].clientX, cV = bD.cp * cb.touches[0].clientY, cW = bD.cp * cb.touches[1].clientX, cX = bD.cp * cb.touches[1].clientY
	}
	this.ca = function(cb) {
		return 1 < cb.touches.length ? (cZ = bL.c8, cY = 3, cc(cb), cd.aL(), !0) : (cY = 0, !1)
	}, this.ce = function(cb) {
		var cg, cj, ck;
		return 0 !== q.cf && 1 < cb.touches.length && (cY = Math.max(cY - 1, 0), cM.bz() && (cg = ch(), cc(cb), cb = ch(), cj = Math.floor((cU + cW) / 2), ck = Math.floor((cV + cX) / 2), cl.cm(cj, ck, Math.max(.125, cb) / Math.max(.125, cg)), bL
			.cC = !0), !0)
	}, this.cn = function() {
		var c4, bp;
		return !!(cY && (cY = 0, bL.c8 < cZ + 500)) && (c4 = (cU + cW) / 2, bp = (cV + cX) / 2, cd.co(c4, bp), cd.click(c4, bp, !0) && (bL.cC = !0), !0)
	}
}

function cq() {
	this.cr = function() {
		for (var cs = ct.cu, cv = ct.cw, cx = [], a1 = 0; a1 < cs; a1++) {
			var cy = cv[a1];
			r.cz.d0(cy) && cx.push(cy)
		}
		return cx
	}, this.d1 = function() {
		if (0 === aC.d2[q.d3]) return this.d4();
		d5.d6(q.d3);
		for (var cx = [], cs = d7.d8[0], d9 = d7.d9, a1 = 0; a1 < cs; a1++) {
			var cy = d9[a1];
			r.cz.d0(cy) && cx.push(cy)
		}
		return cx
	}, this.d4 = function() {
		var cy = aR[0];
		return r.cz.d0(cy) ? [cy] : []
	}, this.dA = function(cx) {
		for (var cs = cx.length, bx = 0, br = b7.br, a1 = 0; a1 < cs; a1++) bx += br[cx[a1]];
		return bx
	}
}

function dB() {
	this.dC = new Array(4), this.dD = new Uint16Array(2), this.d8 = new Uint16Array(2), this.dE = new Int32Array(2), this.dF = new Uint32Array(2), this.dG = new Uint32Array(2), this.dH = new Uint8Array(4), this.dI = new Uint8Array(4), this.dJ =
		new Uint32Array(4), this.dK = new Uint32Array(5), this.dL = new Uint32Array(8), this.dM = new Uint32Array(8), this.dN = new Uint16Array(16), this.d9 = new Uint16Array(512), this.dO = new Uint16Array(512), this.dP = new Uint16Array(512), this
		.dQ = new Uint16Array(0), this.az = function() {
			var cs = dR.dS * dR.dT;
			this.dQ.length !== cs && (this.dQ = new Uint16Array(cs))
		}, this.dU = function(dC, dV) {
			return dC[0] = dV, dC
		}, this.dW = function(dC, dV, dX) {
			return dC[0] = dV, dC[1] = dX, dC
		}, this.dY = function(dC, dV, dX, dZ) {
			return dC[0] = dV, dC[1] = dX, dC[2] = dZ, dC
		}, this.da = function(dC, dV, dX, dZ, db) {
			return dC[0] = dV, dC[1] = dX, dC[2] = dZ, dC[3] = db, dC
		}
}

function dc() {
	this.az = function() {
		if (0 === q.data.sResourcesType) {
			for (var dj = q.bq, di = b7.di, a1 = 0; a1 < dj; a1++) di[a1] = 512;
			var dk = q.dl,
				dm = v.dm,
				dn = v.dn;
			for (a1 = dj; a1 < dk; a1++) di[a1] = dm[dn[a1]]
		} else(1 === q.data.sResourcesType ? function() {
			for (var cs = q.dl, di = b7.di, sResourcesValue = q.data.sResourcesValue, a1 = 0; a1 < cs; a1++) di[a1] = sResourcesValue
		} : function() {
			for (var cs = q.dl, di = b7.di, sResourcesData = q.data.sResourcesData, a1 = 0; a1 < cs; a1++) di[a1] = sResourcesData[a1]
		})();
		dg.dh[8] = b7.di[q.bS]
	}
}

function dp(dq, dr, ds) {
	this.c4 = 0, this.bp = 0, this.dt = 0, this.du = 0, this.resize = function() {
		this.du = Math.min(r.bF.dv(ds || .5) * dq[1] * bD.bE, bD.du - 2 * bY.gap), this.dt = Math.min(this.du * (dq[0] / dq[1]), bD.dt - 2 * bY.gap), this.du = dq[1] * this.dt / dq[0], this.c4 = bY.gap + dr[0] * (bD.dt - this.dt - 2 * bY.gap),
			this.bp = bY.gap + dr[1] * (bD.du - this.du - 2 * bY.gap)
	}, this.dw = function() {
		return this.c4 + .5 * this.dt
	}
}

function dx() {
	var dy, dz, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, eA, eB, eC, eD, eE, eF, eH, eI, eJ, eK, eL, eR, eS, eG = null,
		eN = 0,
		eO = !1,
		eP = new Float32Array(4),
		eQ = 0,
		ax = 112,
		eT = 0;

	function eV() {
		e6 = Math.floor(+bD.bE), e7 = Math.floor(.5 * e6), eG.width = bD.dt, eG.height = bD.du, eH = eG.getContext("2d", {
			alpha: !0
		}), r.bF.textAlign(eH, 1), r.bF.textBaseline(eH, 1), eH.imageSmoothingEnabled = !0
	}

	function eW() {
		var a1, eg;
		for (cS.font = r.bF.bG(1, 100 * e8), eg = 80 / Math.floor(cS.measureText(r.aI.eh(q.ei)).width), cS.font = r.bF.bG(1, 100), a1 = q.aA - 1; 0 <= a1; a1--) e5[a1] = 100 / Math.floor(cS.measureText(b7.b8[a1]).width), e4[a1] = Math.min(eg, e5[a1])
	}

	function ej(a1) {
		return !eT || (a1 = b7.di[a1]) < 1e6 ? 1 : a1 < 1e7 ? eP[0] : eP[Math.min(Math.floor(Math.log10(a1)) - 6, 3)]
	}

	function ef(fF) {
		eO = !1, eN = bL.c8, eF = !1, eE = 1, eC = eD = 0, fF.clearRect(0, 0, bD.dt, bD.du);
		for (var fJ, fK, a1, fL, fontSize, fM, cU = fG / fH, cV = fI / fH, cW = (bD.dt + fG) / fH, cX = (bD.du + fI) / fH, fN = 0 !== b7.c0[q.bS] && !r.cz.fO(q.bS), bN = ct.cu - 1; 0 <= bN; bN--) a1 = ct.cw[bN], (fontSize = Math.floor(eB * fH * ej(
			a1) * e4[a1] * e2[a1])) < eA || e6 <= fontSize || e0[a1] + e2[a1] > cU && e0[a1] < cW && e1[a1] + e3[a1] > cV && e1[a1] < cX && (fJ = Math.floor(bD.dt * (e0[a1] + e2[a1] / 2 - cU) / (cW - cU)), fK = Math.floor(bD.du * (e1[a1] + e3[
				a1] / 2 - cV) / (cX - cV) - .1 * fontSize), fL = eb.ec[a1], fF.font = r.bF.bG(1 === b7.bo[a1] ? 4 : 1, fontSize), fF.fillStyle = fP(fontSize, fL % 2), eT ? fQ(fF, a1, fontSize, fJ, fK, fL) : fR(a1, fontSize, fJ, fK, fF), eF = !0,
			0 < eJ[a1] ? function(fJ, fK, fontSize, a1, fF) {
				0 === aS[a1] ? et.eu.ev(eI[a1]) ? (function(fJ, fK, fontSize, player, fj, fF) {
					for (var fc = fK, fu = (fF.globalAlpha = fd(fontSize), ej(player) * (eT ? eQ : e5[player])), fb = fJ - .5 * fontSize / fu - .9 * fontSize, fv = 0; fv < 2; fv++) fF.fillText(et.eu.fq(fj), fb, fc), fb = fJ + .5 *
						fontSize / fu + .9 * fontSize;
					fF.globalAlpha = 1
				}(fJ, fK, fontSize, a1, eI[a1], fF), fT(fJ, fK, fontSize, 0, 0, fF)) : et.eu.fh(eI[a1]) ? (fi(fJ, fK, fontSize, eI[a1], 0, fF), fT(fJ, fK, fontSize, 0, 1, fF)) : (fi(fJ, fK, fontSize, eI[a1], 1, fF), fT(fJ, fK, fontSize, 1, 0,
					fF)) : fi(fJ, fK, fontSize, eI[a1], 0, fF)
			}(fJ, fK, fontSize, a1, fF) : 0 === aS[a1] && fT(fJ, fK, fontSize, 0, 0, fF), fN && (0 < eJ[a1 + q.aA] || 0 < eJ[a1 + 2 * q.aA] || 0 < eJ[a1 + 3 * q.aA] || 0 < eJ[a1 + 4 * q.aA]) && function(fJ, fK, fontSize, a1, fF) {
				var aN, fe = -1;
				for (aN = 4; 1 <= aN; aN--) 0 < eJ[a1 + aN * q.aA] && fe++;
				for (aN = 1; aN < 5; aN++) 0 < eJ[a1 + aN * q.aA] && (! function(fJ, fK, fontSize, aN, a1, fZ, bx, fF) {
					var fr;
					if (1 === aN) {
						a1 = eI[a1 + q.aA];
						if (!et.eu.fl(a1)) return function(fJ, fK, fontSize, fj, fZ, fF) {
							fF.globalAlpha = fd(fontSize);
							fJ -= .534 * fZ * fontSize, fZ = fK + 1.59 * fontSize;
							fF.font = r.bF.bG(0, .785 * fontSize), fF.fillText(et.eu.fq(fj), fJ, fZ), fF.globalAlpha = 1
						}(fJ, fK, fontSize, a1, fZ, fF);
						fr = et.fm.fo[a1 - 1024 + et.eu.fp]
					} else fr = 2 === aN ? cd.ft()[4].canvas[+(bx < 255)] : (3 === aN ? cd.ft()[5] : cd.ft()[6]).canvas[0];
					a1 = et.fm.fn, bx = .8 * fontSize / a1, aN = fJ - .5 * bx * a1 - .534 * fZ * fontSize, fJ = fK + 1.4 * bx * a1;
					fF.setTransform(bx, 0, 0, bx, aN, fJ), fF.globalAlpha = fd(fontSize), fF.drawImage(fr, 0, 0), fF.globalAlpha = 1, fF.setTransform(1, 0, 0, 1, 0, 0)
				}(fJ, fK, fontSize, aN, a1, fe, eJ[a1 + aN * q.aA], fF), fe -= 2)
			}(fJ, fK, fontSize, a1, fF), (fM = e8 * fontSize) < eA || (fF.font = r.bF.bG(1, fM), fK += Math.floor(.78 * fontSize), eT ? fR(a1, fM, fJ, fK, fF) : fQ(fF, a1, fM, fJ, fK, fL)))
	}

	function fR(a1, fontSize, c4, bp, fF) {
		var ___id = a1;
		var showName = a1 < q.bq || !__fx.settings.hideBotNames;
		if (showName) fF.fillText(b7.b8[a1], c4, bp), a1 < q.bq && 2 !== b7.bo[a1] || (a1 = fontSize / e5[a1], fF.fillRect(c4 - .5 * a1, bp + r.bF.fW * fontSize, a1, Math.max(1, .1 * fontSize)));
		eT && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (fF.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			fF.fillText(__fx.utils.getDensity(___id), c4, showName ? bp + fontSize : bp)
		);
	}

	function fQ(fF, a1, fontSize, fJ, fK, fL) {
		var fX = b7.fX[a1],
			fY = r.aI.eh(b7.di[a1] - fX);

		function drawDensity() {
			!eT && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (fF.fillStyle = __fx.utils.textStyleBasedOnDensity(a1)), fF.fillText(__fx.utils.getDensity(a1), fJ, fK + fontSize))
		}
		fX ? (fX = fF.fillStyle, fF.fillStyle = fP(fontSize, 2 + fL % 2), fF.fillText(fY, fJ, fK), fF.fillStyle = fX) : fL >> 1 & 1 ? (fF.lineWidth = .05 * fontSize, fF.strokeStyle = fP(fontSize, fL % 2), fF.strokeText(fY, fJ, fK)) : (1 < fL && (fF
			.lineWidth = .12 * fontSize, fF.strokeStyle = fP(fontSize, fL), fF.strokeText(fY, fJ, fK)), fF.fillText(fY, fJ, fK)), drawDensity()
	}

	function fT(fJ, fK, fontSize, fZ, fa, fF) {
		var bk = .95 * fontSize / eL,
			fJ = fJ - .5 * bk * eK + .8 * fZ * fontSize,
			fZ = fK - 1.76 * bk * eL - (.35 - r.bF.fW + .7) * fa * fontSize;
		fF.setTransform(bk, 0, 0, bk, fJ, fZ), fF.globalAlpha = fd(fontSize), fF.drawImage(bl.get(4), 0, 0), fF.globalAlpha = 1, fF.setTransform(1, 0, 0, 1, 0, 0)
	}

	function fi(fJ, fK, fontSize, fj, fZ, fF) {
		var fk, fb, bk;
		fF.globalAlpha = fd(fontSize), et.eu.fl(fj) ? (fk = et.fm.fn, fF.setTransform(bk = 1.1 * fontSize / fk, 0, 0, bk, fb = fJ - .5 * bk * fk - .8 * fZ * fontSize, bk = fK - 1.55 * bk * fk), fF.drawImage(et.fm.fo[fj - 1024 + et.eu.fp], 0, 0), fF
			.setTransform(1, 0, 0, 1, 0, 0)) : (fb = fJ - .8 * fZ * fontSize, bk = fK - (.35 - r.bF.fW + 1) * fontSize, fF.fillText(et.eu.fq(fj), fb, bk)), fF.globalAlpha = 1
	}

	function fP(fontSize, fL) {
		return e7 <= fontSize && fontSize < e6 ? aC.fw[fL] + fd(fontSize).toFixed(3) + ")" : aC.fx[fL]
	}

	function fd(fontSize) {
		return e7 <= fontSize && fontSize < e6 ? 1 - (fontSize - e7) / (e6 - e7) : 1
	}

	function gE(fu, dt) {
		return 1 + Math.floor(e9 * fu * dt)
	}

	function gB(a1) {
		for (var left = e0[a1], bN = e0[a1] - b7.el[a1] - 1; 0 <= bN; bN--)
			if (!gK(a1, --left, e1[a1], e3[a1])) {
				left++;
				break
			} var right = e0[a1];
		for (bN = b7.eo[a1] - e0[a1] - e2[a1]; 0 <= bN; bN--)
			if (!gK(a1, ++right + e2[a1] - 1, e1[a1], e3[a1])) {
				right--;
				break
			} var c4 = Math.floor((left + right) / 2),
			top = e1[a1];
		for (bN = e1[a1] - b7.em[a1] - 1; 0 <= bN; bN--)
			if (!gL(a1, c4, --top, e2[a1])) {
				top++;
				break
			} var bottom = e1[a1];
		for (bN = b7.ep[a1] - e1[a1] - e3[a1]; 0 <= bN; bN--)
			if (!gL(a1, c4, ++bottom + e3[a1] - 1, e2[a1])) {
				bottom--;
				break
			} var bp = Math.floor((top + bottom) / 2);
		g8(a1, c4, bp, e2[a1], e3[a1]) && (e0[a1] = c4, e1[a1] = bp)
	}

	function g8(player, c4, bp, dt, du) {
		gM = Math.floor(.2 * dt);
		for (var gM, aN = c4 + dt - 1; c4 <= aN; aN--)
			if (!gK(player, aN, bp, du)) return;
		for (aN = bp + du - 1 - (gM = (gM = Math.floor(.25 * du)) < 1 ? 1 : gM); bp + gM <= aN; aN--)
			if (!gL(player, c4, aN, dt)) return;
		return 1
	}

	function gK(player, c4, bp, du) {
		return eb.gN(player, 4 * (bp * dR.dS + c4)) && eb.gN(player, 4 * ((bp + du - 1) * dR.dS + c4))
	}

	function gL(player, c4, bp, dt) {
		return eb.gN(player, 4 * (bp * dR.dS + c4)) && eb.gN(player, 4 * (bp * dR.dS + c4 + dt - 1))
	}
	this.az = function() {
		if (eT = b5.buffer.data[7].value || 8 === q.eU, eF = !1, eB = .88, e8 = .5, e9 = 1.8, eA = 12 - 3 * b5.buffer.data[9].value, dz = dy = 0, e0 = new Uint16Array(q.aA), e1 = new Uint16Array(q.aA), e2 = new Uint16Array(q.aA), e3 =
			new Uint16Array(q.aA), e4 = new Float32Array(q.aA), e5 = new Float32Array(q.aA), eI = new Uint16Array(2 * q.aA), eJ = new Uint8Array(5 * q.aA), eR = new Uint8Array(q.aA), eS = new Uint8Array(q.aA), eG = eG || document.createElement(
				"canvas"), eV(), eD = eC = 0, eE = 1, eT) {
			var a1, eg;
			for (eW(), cS.font = r.bF.bG(1, 100), eg = 100 / Math.floor(cS.measureText("900 000").width), a1 = q.aA - 1; 0 <= a1; a1--) e4[a1] = Math.min(eg, 2 * e5[a1]);
			eQ = eg, eP[0] = 100 / (eg * Math.floor(cS.measureText("5 000 000").width)), eP[1] = 100 / (eg * Math.floor(cS.measureText("50 000 000").width)), eP[2] = 100 / (eg * Math.floor(cS.measureText("500 000 000").width)), eP[3] = 100 / (
				eg * Math.floor(cS.measureText("1 000 000 000").width))
		} else eW();
		! function() {
			var a1;
			for (a1 = q.aA - 1; 0 <= a1; a1--) b7.br[a1] < 12 ? (e0[a1] = b7.el[a1] + 1, e1[a1] = b7.em[a1] + 1, e2[a1] = 1, e3[a1] = 1) : (e0[a1] = b7.el[a1], e1[a1] = b7.em[a1] + 1, e2[a1] = 4, e3[a1] = 2);
			if (q.cJ)
				for (a1 = 0; a1 < q.bq; a1++) e2[a1] = 0;
			eK = bl.get(4).width, eL = bl.get(4).height
		}()
	}, this.eZ = function(cy, ea) {
		ea > 18 * b7.br[cy] ? (eS[cy] = 6, eb.ec[cy] = 2 + eb.ec[cy] % 2) : (eR[cy] = 4, (eb.ec[cy] < 2 || 3 < eb.ec[cy]) && (eb.ec[cy] = 6 + eb.ec[cy] % 2))
	}, this.ed = function(cy, ea) {
		ea > 6 * b7.br[cy] ? (eS[cy] = 6, eb.ec[cy] = 4 + eb.ec[cy] % 2) : (eR[cy] = 4, (eb.ec[cy] < 4 || 5 < eb.ec[cy]) && (eb.ec[cy] = 8 + eb.ec[cy] % 2))
	}, this.resize = function() {
		eV(), ef(eH)
	}, this.en = function() {
		for (var a1 = 0; a1 < q.bq; a1++) b7.eo[a1] - b7.el[a1] != 3 || b7.ep[a1] - b7.em[a1] != 3 ? (e0[a1] = b7.el[a1] + (b7.eo[a1] !== b7.el[a1] ? 1 : 0), e1[a1] = b7.em[a1], e2[a1] = 1, e3[a1] = 1) : (e0[a1] = b7.el[a1], e1[a1] = b7.em[a1] +
			1, e2[a1] = 4, e3[a1] = 2)
	}, this.eq = function(player, a9, er) {
		! function(player, a9, er) {
			player += a9 * q.aA;
			0 === a9 ? eI[player] === er && 0 < eJ[player] ? eJ[player] = 0 : (eI[player] = er, eJ[player] = et.eu.ev(er) ? 255 : 64) : 1 === a9 ? (eJ[player] = 64, eI[player] = er) : eJ[player] = er
		}(player, a9, er), 2 === q.cf && this.bI(!0)
	}, this.cR = function() {
		eF && (1 !== eE ? (cS.imageSmoothingEnabled = !0, cS.setTransform(eE, 0, 0, eE, 0, 0), cS.drawImage(eG, -eC / eE, -eD / eE), cS.setTransform(1, 0, 0, 1, 0, 0), cS.imageSmoothingEnabled = !1) : cS.drawImage(eG, -eC, -eD))
	}, this.ew = function(ex, ey) {
		eC += ex, eD += ey
	}, this.cF = function(ex, ey) {
		ez.ew(ex, ey)
	}, this.zoom = function(f0, f1, f2) {
		eE *= f0, eC = (eC + f1) * f0 - f1, eD = (eD + f2) * f0 - f2
	}, this.f5 = function(player) {
		var el = b7.el[player],
			eo = b7.eo[player],
			em = b7.em[player],
			ep = b7.ep[player],
			f6 = f7.f8(0),
			f9 = f7.fA(0),
			fB = f7.f8(bD.dt),
			fC = f7.fA(bD.du);
		el < fB && f6 < eo && em < fC && f9 < ep && (e2[player] = 0, eO = !0)
	}, this.bI = function(bJ) {
		return !(!eO && !bJ && bL.c8 < eN + (1 === eE && 0 === eC && 0 === eD && (q.f4() || q.cJ || 2 === q.cf) ? 1e3 : ax) || (ef(eH), 0))
	}, this.fD = function(a1) {
		return ej(a1) * e4[a1]
	}, this.fE = function(player) {
		return e4[player]
	}, this.bs = function() {
		bL.bM() % 10 == 9 && (eO = eO || q.fy() && !q.f4()), !q.f4() && 4 <= ++dz && function() {
			var a1, bN, fv;
			for (dz = 0, fv = 4; 1 <= fv; fv--)
				for (bN = ct.cu - 1; 0 <= bN; bN--) a1 = ct.cw[bN] + fv * q.aA, 0 < eJ[a1] && eJ[a1] < 255 && eJ[a1]--;
			if (2 !== q.cf)
				for (bN = ct.cu - 1; 0 <= bN; bN--) a1 = ct.cw[bN], 0 < eJ[a1] && eJ[a1] < 255 && eJ[a1]--
		}();
		var a1, bN, cs = Math.floor(.1 * ct.cu);
		for (cs = (cs = cs < 8 ? 8 : cs) > ct.cu ? ct.cu : cs, a1 = dy + cs - 1; dy <= a1; a1--) bN = a1 % ct.cu, ! function(a1) {
			var fu = ej(a1) * e4[a1];
			0 < e2[a1] && g8(a1, e0[a1], e1[a1], e2[a1], e3[a1]) ? ! function(a1) {
				for (var c4, bp, dt, du, gF = !1, fv = 0; fv < 8; fv++) {
					if (dt = e2[a1] + 2, du = e3[a1] + 2, dt > b7.eo[a1] - b7.el[a1] + 1 || du > b7.ep[a1] - b7.em[a1] + 1) return gF;
					if (c4 = e0[a1] - 1, bp = e1[a1] - 1, !g8(a1, c4, bp, dt, du)) return gF;
					e0[a1] = c4, e1[a1] = bp, e2[a1] = dt, e3[a1] = du, gF = !0
				}
				return gF
			}(a1) && function(a1, fu) {
				for (var c4, bp, dt, du, gF = !1, gG = e2[a1], gH = 1 + Math.floor(.02 * gG), fv = 1; fv < 5; fv++) {
					if ((dt = gG + fv * gH) > b7.eo[a1] - b7.el[a1] + 1) return gF;
					if ((du = gE(fu, dt)) > b7.ep[a1] - b7.em[a1] + 1) return gF;
					c4 = b7.el[a1] + Math.floor(Math.random() * (b7.eo[a1] - b7.el[a1] + 2 - dt)), bp = b7.em[a1] + Math.floor(Math.random() * (b7.ep[a1] - b7.em[a1] + 2 - du)), g8(a1, c4, bp, dt, du) && (e0[a1] = c4, e1[a1] = bp, e2[
						a1] = dt, e3[a1] = du, gF = !0)
				}
				return gF
			}(a1, fu) && gB(a1) : ! function(a1, fu) {
				var du, c4 = e0[a1] + 1,
					bp = e1[a1] + 1,
					dt = e2[a1] - 2;
				for (;;) {
					if (dt < 1) {
						e2[a1] = 0;
						break
					}
					if (du = gE(fu, dt), g8(a1, c4, bp, dt, du)) return e0[a1] = c4, e1[a1] = bp, e2[a1] = dt, e3[a1] = du, 1;
					c4++, bp++, dt -= 2
				}
				return
			}(a1, fu) ? function(a1, fu) {
				var c4, bp, dt, du, fv, bz, gI = b7.eo[a1] - b7.el[a1] + 1,
					gJ = Math.floor(.02 * gI);
				for (bz = -6 * (gJ = gJ < 1 ? 1 : gJ), fv = gI; bz <= fv; fv -= gJ)
					if (du = gE(fu, dt = 0 < fv ? fv : 1), c4 = b7.el[a1] + Math.floor(Math.random() * (b7.eo[a1] - b7.el[a1] + 2 - dt)), bp = b7.em[a1] + Math.floor(Math.random() * (b7.ep[a1] - b7.em[a1] + 2 - du)), g8(a1, c4, bp, dt,
							du)) return e0[a1] = c4, e1[a1] = bp, e2[a1] = dt, e3[a1] = du
			}(a1, fu) : gB(a1)
		}(ct.cw[bN]);
		dy = (dy += cs) % ct.cu
	}, this.g1 = function() {
		var a1, cy, g2, g3;
		if (bL.bM() % 4 == 1)
			for (a1 = ct.cu - 1; 0 <= a1; a1--) cy = ct.cw[a1], eb.ec[cy] < 2 || ((g2 = Math.max(eR[cy] - 1, 0)) === (g3 = Math.max(eS[cy] - 1, 0)) ? 0 === g2 && (eb.ec[cy] %= 2) : 0 === g3 && eb.ec[cy] < 6 && (eb.ec[cy] += 4), eR[cy] = g2, eS[
				cy] = g3)
	}, this.g4 = function(player) {
		var a1 = player + 2 * q.aA,
			bx = eJ[a1];
		return 0 < bx && (g5.g6(50, player), eJ[a1] = 0, 255 === bx)
	}, this.g7 = function(player) {
		return 255 === eJ[player + 2 * q.aA]
	}
}

function gO() {
	var gP, canvas, aD, gQ;

	function gY(a9, name, gZ, ga) {
		aD[a9] = name, canvas[a9] = new Image, canvas[a9].onload = function() {
			! function(a9, gZ) {
				var ge, gd = null;
				7 === gZ ? ge = r.gf.gg : 8 === gZ ? (ge = r.gf.gh, gd = .1) : 3 === gZ ? (ge = r.gf.gi, gd = .06) : 5 === gZ ? ge = r.gf.gj : 6 === gZ ? ge = r.gf.gk : 4 === gZ && (ge = r.gf.gl);
				canvas[a9] = r.gf.gm(canvas[a9], ge, gd)
			}(a9, gZ), gc()
		}, canvas[a9].onerror = function(cb) {
			console.error("Error loading image at index", a9, "Error:", cb), gc()
		}, canvas[a9].src = "data:image/png;base64," + ga
	}

	function gc() {
		gP--, gV()
	}

	function gV() {
		0 === gP && (gP = -1, gX(), bL.cC = !0, canvas[7] = gQ, canvas[8] = gQ, canvas[9] = gQ, canvas[10] = gQ, 5 === n.go) && n.gp().gq.resize()
	}

	function gX() {
		cd.gr(), gs.gt([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== b2.id, 1 !== b2.id, !0, !0, !0]), et.fm = new gu, et.fm.az(), gv.gw()
	}
	this.az = function() {
		if (void 0 === canvas) {
			gP = 23, canvas = new Array(gP), aD = new Array(gP), (gQ = document.createElement("canvas")).width = 1;
			for (var a1 = gP - (gQ.height = 1); 0 <= a1; a1--) canvas[a1] = gQ;
			gX(), gY(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), gY(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), gY(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(3, "orders", 6,
					"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"
					), gY(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), gY(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), gY(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), gY(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(8,
					"googleplay", 3,
					"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"
					), gY(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), gY(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gY(14, "bestPlayer", 5,
					"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"
					), gY(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), gY(16, "apple", 3,
					"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"
					), gY(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), gY(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), gY(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), gY(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), gY(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), gY(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(a9) {
		return canvas[a9]
	}, this.gS = function(name) {
		for (var a1 = aD.length - 1; 0 <= a1; a1--)
			if (aD[a1] === name) return canvas[a1];
		return gQ
	}, this.gT = function() {
		return gP <= 0
	}, this.gU = function() {
		gP = 0, gV()
	}
}

function gx() {
	var gy = {
			":joy:": "😂",
			":rofl:": "🤣",
			":sob:": "😭",
			":sad": "😔",
			":eyes:": "👀",
			":skull:": "💀",
			":fire:": "🔥",
			":100:": "💯",
			":clown:": "🤡",
			":sunglasses:": "😎",
			":thinking:": "🤔",
			":zzz:": "😴",
			":rage:": "😡",
			":poop:": "💩",
			":thumbsup:": "👍",
			":thumbsdown:": "👎",
			":pray:": "🙏",
			":clap:": "👏",
			":trophy:": "🏆",
			":sparkles:": "✨",
			":heart:": "❤️",
			":brokenheart:": "💔",
			":laughing:": "😆",
			":grimacing:": "😬",
			":grinning:": "😀",
			":ok:": "👌",
			":pepehands:": "🙌",
			":gold:": "🧈"
		},
		gz = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.h0 = function(h1) {
		return h1.replace(gz, function(match) {
			return gy[match] || match
		})
	}, this.eh = function(h2) {
		var a1, h3, h4, h5, h6;
		if (h2 < 0) return "-" + this.eh(Math.abs(h2));
		if (h2 < 1e3) return h2.toString();
		for (h3 = Math.floor(Math.log(h2 + .5) / Math.log(10)) + 1, h4 = Math.floor((h3 - 1) / 3), h6 = (h5 = h2.toString()).substring(h3 - 3, h3), a1 = 1; a1 < h4; a1++) h6 = h5.substring(h3 - 3 * (a1 + 1), h3 - 3 * a1) + " " + h6;
		return h5.substring(0, h3 - 3 * h4) + " " + h6
	}, this.h7 = function(cy, h3) {
		return cy.toFixed(h3) + "%"
	}, this.h8 = function(h2, h9) {
		return h2.toFixed(hA.hB(Math.floor((void 0 === h9 ? 3 : h9) - Math.log10(Math.max(h2, 1))), 0, 8))
	}, this.hC = function(h2, gH, h3) {
		return (h2 * gH).toFixed(h3)
	}, this.hD = function(username) {
		var hF, hE = username.indexOf("[");
		return !(hE < 0) && 1 < (hF = username.indexOf("]")) - hE && hF - hE <= 8 ? username.substring(hE + 1, hF).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.hD;
	this.hG = function(ga) {
		for (var bN = Math.floor(.5 * ga.length + .5), bz = Math.floor(.5 * (bN - 1)), a1 = 0; a1 < bz; a1++)
			for (var fv = -1; fv < 2; fv += 2) {
				var aN = bN + fv * a1;
				if (" " === ga[aN]) return [this.hH(ga.substring(0, aN)), this.hI(ga.substring(aN))]
			}
		return [ga.substring(0, bN), ga.substring(bN)]
	}, this.hI = function(ga) {
		for (var cs = ga.length, a1 = 0; a1 < cs; a1++)
			if (" " !== ga[a1]) return ga.substring(a1);
		return ga
	}, this.hH = function(ga) {
		for (var a1 = ga.length - 1; 0 <= a1; a1--)
			if (" " !== ga[a1]) return ga.substring(0, a1 + 1);
		return ga
	}, this.hJ = function(ga, hK) {
		return ga.split("(")[0] + "(🧈 " + hK.toFixed(2) + ")"
	}, this.startsWith = function(ga, hL) {
		return ga.substring(0, hL.length) === hL
	}, this.hM = function(ga, hL) {
		var cs = ga.length;
		return ga.substring(cs - hL.length, cs) === hL
	}, this.aJ = function(dC, hN, hO) {
		var ga = "",
			cs = dC.length - 1;
		hO = hO || "";
		for (var a1 = 0; a1 < cs; a1++) ga += hO + dC[a1] + hO + ",", (a1 + 1) % hN == 0 && (ga += "\n");
		return ga += hO + dC[cs] + hO
	}, this.hP = function(ga, g2, g3) {
		return ga.replace(new RegExp(g2, "g"), g3)
	}
}

function hQ() {
	var gM = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + gM + .5) / 15))
}

function hR() {
	var hS, hT, y;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(10), [new g("⬅️ " + L(1), function() {
		n.p()
	})]), hT = new i(hS.j, ((y = []).push(function() {
		function hd() {
			he.button.textContent = L(14), ha.cb.readOnly = !1, hc.cb.readOnly = !1, hf.hg(1), hf.button.style.color = bO.bX
		}
		var a3 = new a4,
			hY = (a3.aE(hW.b0.hX("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", a3.a5(L(11)), new hZ({
				value: b5.buffer.data[105].value,
				a9: -1
			})),
			ha = (hY.cb.readOnly = !0, a3.aK(hY), a3.a5(L(12), "0.8em"), new hZ(b5.buffer.data[148], 0, void 0, function(cb) {
				hb(b5.buffer.data[149].value, cb.target.value)
			})),
			hc = (a3.aK(ha), a3.a5(L(13), "0.8em"), new hZ(b5.buffer.data[149], 1, void 0, function(cb) {
				hb(cb.target.value, b5.buffer.data[148].value)
			})),
			he = (a3.aK(hc), new g(L(14), function(cb) {
				return cb.textContent === L(14) ? (cb.textContent = L(15), ha.cb.readOnly = !0, hc.cb.readOnly = !0, hf.hg(0), hf.button.style.color = bO.hh, b5.hi.hj(149, hc.cb.value), hb(b5.buffer.data[149].value, b5.buffer
					.data[148].value)) : hd(), !0
			})),
			hf = (a3.aK(new hk([he.button])), new g(L(16), function(cb) {
				return ha.cb.readOnly && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.ho({
					action: 0,
					hp: b5.buffer.data[148].value,
					value: parseInt(b5.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			hq = a3.hr(),
			hb = (a3.hr(L(17)).style.fontWeight = "bold", function(h2, ga) {
				hq.innerHTML = n.b0.hs(h2, b5.buffer.data[105].value, ga)
			});
		return a3.aK(new hk([hf.button])), hb(b5.buffer.data[149].value, b5.buffer.data[148].value), a3
	}()), y))
}

function ht() {
	this.eu = new hu, this.fm = new gu
}

function hv() {
	this.hw = function() {
		var a1;
		if (hx.size < hy.hz(23)) hW.b0.i0(0, 3259);
		else {
			var i1 = hx.i2(6),
				cs = hx.i2(10),
				data = [];
			if (9 === i1 || 10 === i1 || 11 === i1 || 13 === i1) {
				for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(30), i3.i4.i5(5), hx.i6(32), 0, hx.i2(30)]);
				8 === n.go && n.gp().i7(21, !0, {
					i1: i1,
					data: data
				})
			} else if (12 === i1) {
				for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(20), hx.i2(30), hx.i2(30), hx.i6(32), hx.i2(30), i3.i4.i5(5), i3.i4.i5(5)]);
				8 === n.go && n.gp().i7(21, !0, {
					i1: i1,
					data: data
				})
			} else {
				var i8 = hx.i2(16);
				if (hx.i9(39 + 16 * i8 + cs * (0 === i1 ? 111 : 1 === i1 ? 101 : 2 === i1 || 3 === i1 ? 127 : 212))) {
					if (0 === i1)
						for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(30), i3.iA.iB(hx.i2(5)), hx.i2(16), hx.i2(30), hx.i2(30)]);
					else if (1 === i1)
						for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(16), i3.iA.iB(hx.i2(3)), hx.i2(16), i3.iA.iB(hx.i2(5)), hx.i2(31), hx.i2(30)]);
					else if (2 === i1 || 3 === i1)
						for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(30), i3.iA.iB(hx.i2(5)), hx.i6(32), hx.i2(30), hx.i2(30)]);
					else
						for (a1 = 0; a1 < cs; a1++) data.push([hx.i2(20), hx.i2(30), hx.i2(30), hx.i2(30), hx.i2(30), hx.i6(32), hx.i2(30), i3.iA.iB(hx.i2(5)), i3.iA.iB(hx.i2(5))]);
					8 === n.go && n.gp().i7(21, !0, {
						i1: i1,
						data: data
					})
				} else hW.b0.i0(0, 3260)
			}
		}
	}, this.iC = function() {
		if (hx.size < hy.hz(29)) hW.b0.i0(0, 3265);
		else {
			var iD = hx.i2(4),
				iE = hx.i2(7),
				iF = hx.i2(11);
			if (hx.i9(29 + 16 * iE + 16 * iF + 11 * iD)) {
				for (var data = [], a1 = 0; a1 < iD; a1++) {
					for (var iG = i3.iA.iB(hx.i2(3)), iH = hx.i2(8), iI = [], bN = 0; bN < iH; bN++) iI.push(hx.i2(16));
					data.push({
						name: "[" + iG + "]",
						iI: iI
					})
				}
				8 === n.go && n.gp().i7(23, !0, data)
			} else hW.b0.i0(0, 3266)
		}
	}
}

function iJ() {
	var hS, hT, y;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f("🔒 " + L(18), [new g("⬅️ " + L(1), function() {
		n.p()
	})]), hT = new i(hS.j, ((y = []).push(function() {
		var a3 = new a4,
			iL = (a3.aE(hW.b0.hX("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", a3.a5(L(19)), new hZ({
				value: "",
				a9: -1
			})),
			iM = (a3.aK(iL), a3.a5(L(20), "0.8em"), new hZ({
				value: "",
				a9: -1
			}, 0, 0)),
			hf = (iM.cb.type = "email", iM.cb.autocomplete = "email", iM.cb.name = "email", iM.cb.inputMode = "email", iM.cb.spellcheck = !1, a3.aK(iM), new g(L(21), function(cb) {
				return r.bF.hm(cb), hW.hn.iN({
					action: 4,
					ga: iL.cb.value.trim() + iM.cb.value.trim().substring(0, 63)
				}), !0
			}));
		return a3.aK(new hk([hf.button])), a3
	}()), y))
}

function iO() {
	this.iP = 32, this.c4 = 0, this.bp = 0, this.iQ = 0, this.iR = 0, this.iS = 4, this.iT = null, this.iU = new Int16Array(9), this.az = function() {
		this.iQ = 1 + hA.iV(dR.dS - 1, this.iP), this.iR = 1 + hA.iV(dR.dT - 1, this.iP), this.iT = new Array(this.iQ * this.iR), r.s.iW(this.iT);
		var c4, bp, iU = this.iU,
			dt = this.iQ;
		for (c4 = -1; c4 <= 1; c4++)
			for (bp = -1; bp <= 1; bp++) iU[3 * (1 + bp) + 1 + c4] = bp * dt + c4
	}, this.iY = function(iZ, a1) {
		return this.iT[a1].push(iZ), this.iT[a1].length - 1
	}, this.ia = function(ib, ic, ie) {
		var ig, ih, ic = f7.ij(ic),
			ie = f7.ij(ie);
		return ic === ie ? ib : (ig = this.iT[ic].pop(), this.iT[ic].length === ib ? this.iY(ig, ie) : (ih = this.iT[ic][ib], this.iT[ic][ib] = ig, il.b0.im[ig] = ib, this.iY(ih, ie)))
	}
}

function io() {
	var b, c, d, y;

	function h() {
		l(), 2 !== q.data.spawningType || r.s.x(q.data.spawningData) || (q.data.spawningType = 0), 2 !== q.data.spawningType && (q.data.spawningData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.spawningType && r.s.t(d.u(), q.data.spawningData, dR.ip - 1)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(22), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4,
			a6 = (a3.a5(L(2)), [L(23), L(24), L(6)]),
			value = q.data.spawningType;
		0 === q.data.gameMode && (a6.splice(1, 1), 0 < value) && (value = 1);
		a3.a7(new a8({
			a6: a6,
			value: value
		}, function(a9) {
			l(), q.data.spawningType = a9, 0 === q.data.gameMode && 1 === a9 && (q.data.spawningType = 2), 2 !== q.data.spawningType || q.data.spawningData || (q.data.spawningData = new Uint16Array(2 * q.aA)), n.aB(24)
		})), y.push(a3)
	}(y = []), function(y) {
		var a3 = new a4;
		a3.a5("My Spawn"), a3.aK(new is({
			value: q.data.selectableSpawn
		}, L(25), function(value) {
			q.data.selectableSpawn = value
		})), y.push(a3)
	}(y), function(y) {
		var a3 = new a4,
			it = (a3.a5("Seed"), new hZ({
				a9: -1,
				value: q.data.spawningSeed
			}, 1, 0, function(cb) {
				var value = Math.abs(Math.floor(cb.target.value)) % 16384;
				cb.target.value = q.data.spawningSeed = value
			}));
		a3.aK(it), a3.aK(new hk([new g(L(23), function() {
			it.cb.value = q.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3;
		2 === q.data.spawningType && ((a3 = new a4).a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.spawningData, 2)), a3.aK(d), y.push(a3))
	}(y), y))
}

function iu() {
	var iv, iw, ix, iy, iz, a9 = 0,
		c8 = bL.c8;

	function jD() {
		! function() {
			if (!q.cJ) return;
			if (q.cK) return;
			if (2 !== q.cf)
				if (iz % 7 != 0) iz++;
				else if (iy === q.jJ) {
				if (!jH()) return;
				jK.jL(iy), q.jM.bs()
			} else {
				if (!jH()) return;
				iz++, iy++, ez.en(), ez.bI(!0)
			}
			return 1
		}() && jH() && jI()
	}

	function jF() {
		a9 = 0, (q.cJ ? (bL.cC = jK.jL(iy - (iz % 7 == 0 ? 0 : 1) + iz % 7 / 7) || bL.cC, jN) : j9.jA || !j1.jB ? jN : (bL.cC = !0, jO))()
	}

	function jH() {
		var a1, cs, jQ = jR.jS.jT,
			dV = jR.jS.jU,
			dX = jR.jS.jV,
			dZ = jR.jS.jW,
			jX = jR.jS.jY,
			jZ = jR.jS.ja;
		if (!(iv >= jZ.length)) {
			if (jZ = jZ[iv], jX[iv]) {
				for (cs = iw + jZ, a1 = iw; a1 < cs; a1++) jd.je.jf(jQ[a1], dV[a1], dX[a1], dZ[a1]);
				iw += jZ, iv++
			} else ++ix >= jZ && (iv++, ix = 0);
			return __fx.replay.tick++, 1
		}
		g5.jb("Replay file smaller than expected."), j1.jc(!1), q.cf = 2
	}
	this.j0 = 0, this.az = function() {
		iz = iy = ix = iw = iv = 0, __fx.replay.registerHooks({
			advance: () => jD(),
			finishTick: () => jE.render(),
			requestRedraw: () => {
				bL.cC = !0
			},
			isEnded: () => 2 === q.cf,
			getTickInterval: () => bL.j8
		})
	}, this.bs = function() {
		var j7;
		bD.bs(), __fx.replay.frame() ? jC() : j1.j2() < 1.7 ? 0 === a9 ? bL.c8 >= c8 && (j7 = bL.j8 / j1.j2(), c8 += j7 * Math.floor(1 + (bL.c8 - c8) / j7), 2 === q.cf || j9.jA || !j1.jB ? jC() : (jD(), jE.render()), a9++) : jF() : function() {
			var j7;
			if (bL.c8 >= c8)
				if (2 === q.cf || j9.jA || !j1.jB) jC(), c8 = bL.c8;
				else {
					for (j7 = bL.j8 / j1.j2(), 16 < (bL.c8 - c8) / j7 && (c8 = bL.c8 - 16 * j7); bL.c8 >= c8 && 2 !== q.cf;) c8 += j7, jD();
					jE.render()
				} jF()
		}(), j5(), bL.cC && (bL.cC = !1, j6())
	}, this.jg = function() {
		jR.jS.ja.length - iv <= 2 || g5.jb("Replay file larger than expected.")
	}
}

function jh() {
	var ji, jj, jk, iL, jl, jm = 0;
	this.gq = new jn, jk = new dp([.45, .27], [.5, .5], 2 / 3), jj = [new g("⚔️<br>" + L(26), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : jo(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bO.jp), new g("🗡️<br>" + L(27), function() {
			jo(1)
		}, bO.jq), new g("🔑<br>" + L(28), function() {
			jo(2)
		}, bO.jr), new g("☰<br>" + L(29), function() {
			jo(3)
		}, bO.js), new g("", function() {
			n.aB(12)
		}, bO.bR, !1),
		new g("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new g("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], iL = new hZ(b5.buffer.data[122]);
	for (var a1 = 0; a1 < jj.length; a1++) jj[a1].button.style.position = "absolute";

	function jo(a9) {
		b2.b3.setState(10), bl.gT() || bl.gU(), 0 === a9 ? n.b0.jt(1) : 1 === a9 ? (jR.ju.i5(b5.buffer.data[156].value, 1) || q.jv.jw(), n.aB(19)) : 2 === a9 ? 0 !== b2.id || b5.buffer.data[140].value ? n.aB(8, n.go, new jx(16)) : n.b0.jy(n.go, 16) :
			3 === a9 && n.aB(1)
	}
	iL.cb.style.position = "absolute", iL.cb.style.textAlign = "center", iL.cb.placeholder = L(30), this.show = function() {
		jz.setState(0), b2.b3.setState(12), this.gq.show(), jj[4].hg(r.color.k0(b5.buffer.data[121].value)), this.resize(), document.body.appendChild(iL.cb);
		for (var a1 = 0; a1 < jj.length; a1++) document.body.appendChild(jj[a1].button);
		1 !== b2.id || b2.k2 < 5 || (jl && bL.c8 > jl + 144e5 ? b2.k3.setState(14) : jl = bL.c8)
	}, this.aL = function() {
		this.gq.aL(), n.removeChild(document.body, iL.cb);
		for (var a1 = 0; a1 < jj.length; a1++) n.removeChild(document.body, jj[a1].button)
	}, this.resize = function() {
		this.gq.resize(), this.gq.resize(), jk.resize();
		var gap = .5 * bY.gap,
			k4 = 10 / 99 * .84 * jk.dt,
			k6 = .16 * jk.du,
			k7 = .19 * jk.dt,
			c4 = jk.c4 + k7,
			k4 = jk.bp + k4 + 3 * gap,
			dt = .5 * (jk.dt - gap) - k7,
			k7 = jk.dt - 2 * k7 - k6 - gap,
			k7 = (r.bF.k9(iL.cb, c4, k4, k7, k6), r.bF.k9(jj[4].button, c4 + k7 + gap, k4, k6, k6), jm = k4, .5 * (jk.bp + jk.du - (k4 += k6 + gap) - gap));
		r.bF.k9(jj[0].button, c4, k4, dt, k7), r.bF.k9(jj[1].button, c4 + dt + gap, k4, dt, k7), r.bF.k9(jj[2].button, c4, k4 + k7 + gap, dt, k7), r.bF.k9(jj[3].button, c4 + dt + gap, k4 + k7 + gap, dt, k7);
		r.bF.k9(jj[5].button, c4, k4 + k7 * 2 + gap * 2, dt * 2 + gap, k7 / 3);
		r.bF.k9(jj[6].button, c4, k4 + k7 * 2.33 + gap * 3, dt * 2 + gap, k7 / 3);
		for (var a1 = 0; a1 < jj.length; a1++) jj[a1].button.style.font = r.bF.bG(0, r.bF.kA(.065 * jk.du)), r.bF.kB(jj[a1].button, 5);
		iL.cb.style.font = r.bF.bG(0, r.bF.kA(.08 * jk.du)), r.bF.kB(iL.cb, 5)
	}, this.cR = function() {
		if (jz.kC(), kD.cR(), cs = Math.floor((b2.b3.b4() ? .018 : .0137) * bD.bE), cS.font = r.bF.bG(0, Math.max(5, cs)), r.bF.textBaseline(cS, 0), r.bF.textAlign(cS, 2), cS.fillStyle = bO.bX, cS.fillText(kH.k2, bD.dt, 0), text = "Win count: " +
			__fx.wins.count, textLength = cS.measureText(text).width, cs = Math.max(5, cs), cS.textAlign = "left", cS.textBaseline = "middle", cS.fillText(text, cS.canvas.width - textLength - cs / 2, 2 * cs), kF.cR(jm), gs.cR(), bl.gT()) {
			cS.imageSmoothingEnabled = !1;
			var text = bl.gS("territorial.io"),
				textLength = .84 * jk.dt / text.width;
			cS.setTransform(textLength, 0, 0, textLength, jk.c4 + .08 * jk.dt, jk.bp), ji = ji || r.gf.gm(text, r.gf.kI, [0, 0, 0]);
			for (var c4 = -1; c4 <= 1; c4 += 2)
				for (var bp = -1; bp <= 1; bp += 2) cS.drawImage(ji, c4, bp);
			cS.drawImage(text, 0, 0), cS.imageSmoothingEnabled = !0;
			var cs = bl.gS("logo"),
				kJ = .6666 * textLength * text.height / cs.height,
				cW = .5 * bD.dt,
				cX = jk.bp + .5 * textLength * text.height - .5 * kJ * cs.height;
			cS.setTransform(kJ, 0, 0, kJ, cW - .6 * textLength * text.width, cX), cS.drawImage(cs, 0, 0), cS.setTransform(kJ, 0, 0, kJ, cW + .6 * textLength * text.width - kJ * cs.width, cX), cS.drawImage(cs, 0, 0), cS.setTransform(1, 0, 0, 1, 0,
				0), cS.imageSmoothingEnabled = !0
		}
	}
}

function kK() {
	var hS, kL, kM, kO;

	function kN(a1) {
		n.aB(8, n.go, new jx(21, {
			i1: a1,
			ii: 0,
			ik: 10
		}))
	}
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), kL.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, kM = [new g(L(31), function() {
		kN(5)
	}, 0, 0, 1), new g(L(32), function() {
		kN(6)
	}, 0, 0, 1), new g(L(33), function() {
		kN(7)
	}, 0, 0, 1), new g("Audit Log", function() {
		kN(12)
	}, 0, 0, 1)], kO = [new g("⬅️ " + L(1), function() {
		n.p()
	})], hS = new f(L(34), kO), kL = new kP(kM, hS.j)
}

function kQ() {
	this.b0 = new kR, this.kS = new kT, this.kU = new kV, this.kW = new kX, this.kY = new kZ, this.hn = new ka, this.kb = new kc, this.kd = new ke, this.kf = new kg, this.kh = new ki, this.kj = new kk, this.kl = new km, this.kn = new hv, this.az =
		function() {
			this.b0.az()
		}
}

function ko() {
	this.dt = 0, this.du = 0, this.kp = 0, this.kq = 0, this.kr = 0, this.ks = 0, this.kt = 0, this.ku = 0;
	var kw = this.kv = 0;
	this.kx = 0, this.ky = 0, this.kz = 0, this.l0 = 0, this.a9 = 0, this.l1 = null, this.l2 = !1, this.l3 = -1, this.l4 = !1, this.l5 = [0, 0], this.gw = function() {
		this.l1 = [L(35), L(36, 0, "Balance"), L(37, 0, "Interest"), L(38)]
	}, this.az = function() {
		this.l2 = !1, this.l3 = -1, this.l4 = !1, this.resize()
	}, this.resize = function() {
		this.dt = bD.dt < 1.369 * bD.du ? bD.dt : 1.369 * bD.du;
		var gM = b2.b3.b4() && bD.dt < bD.du ? 1 : b2.b3.b4() ? .8 : bD.dt < bD.du ? .65 : .59;
		this.dt = Math.floor(gM * this.dt), this.dt -= b2.b3.b4() && bD.dt < bD.du ? 2 * bY.gap + 2 : 0, this.du = Math.floor(this.dt / 1.369), this.l0 = Math.floor(this.du / 150), this.l0 = Math.max(this.l0, 1.5), this.kp = Math.floor(1 + .02 *
			this.dt), this.kq = Math.floor(1 + .04 * this.dt), this.kt = this.kq, kw = Math.floor(.75 * this.kt), this.ku = Math.floor(1 + .075 * this.dt), this.kx = Math.floor(1 + .1125 * this.dt), this.ky = Math.floor(this.dt * (b2.b3
		.b4() ? .03 : .029)), this.ky = Math.max(this.ky, 4), this.kz = Math.floor(.035 * this.dt), this.kz = Math.max(this.kz, 4), this.kv = this.du - 2 * this.kt - this.ku - this.kx, this.l2 && this.l6()
	}, this.c3 = function(f1, f2) {
		var fc, fb;
		return !!this.l2 && (fb = f1, fc = f2, f1 -= hA.iV(bD.dt - this.dt, 2), f2 -= hA.iV(bD.du - this.du, 2), f1 < 0 || f2 < 0 || f1 >= this.dt || f2 >= this.du || f1 >= this.dt - this.kx && f2 < this.kx ? -1 !== j9.c3(fb, fc) || j1.c3(fb,
			fc) || this.aL() : f2 < this.kx || (f2 < this.du - this.ku ? (this.l4 = !0, this.l3 = (f1 - 2 * this.kp - this.kr) / this.ks, 3 !== this.a9 && (bL.cC = !0)) : (fb = (fb = Math.floor(f1 / (this.dt / this.l1.length))) < 0 ? 0 :
				fb >= this.l1.length ? this.l1.length - 1 : fb) !== this.a9 && (this.a9 = fb, this.l6(), bL.cC = !0)), !0)
	}, this.cF = function(f1, f2) {
		return this.l5[0] = f1, this.l5[1] = f2, !(!this.l2 || !this.l4 || (f1 -= hA.iV(bD.dt - this.dt, 2), f2 = this.l3, this.l3 = (f1 - 2 * this.kp - this.kr) / this.ks, (0 <= this.l3 && this.l3 <= 1 || 0 <= f2 && f2 <= 1) && (bL.cC = !0), 0))
	}, this.cI = function() {
		this.l4 && (this.l4 = !1)
	}, this.l7 = function() {
		this.l2 ? this.aL() : this.show()
	}, this.show = function() {
		dg.l8 < 2 || (this.l2 = !0, this.l6())
	}, this.aL = function() {
		this.l2 = !1, this.l3 = -1, bL.cC = !0
	}, this.l6 = function() {
		this.a9 < 2 ? this.kr = l9.measureText(r.aI.eh(dg.max[this.a9]), r.bF.bG(0, this.ky)) : 2 === this.a9 && (this.kr = l9.measureText(r.aI.h7(6, 2), r.bF.bG(0, this.ky))), this.ks = this.dt - 2 * this.kp - this.kr - this.kq
	}, this.lA = function() {
		this.l2 && this.l6()
	}, this.cR = function() {
		this.l2 && this.lB()
	}, this.lB = function() {
		var c4 = hA.iV(bD.dt - this.dt, 2),
			bp = hA.iV(bD.du - this.du, 2);
		cS.setTransform(1, 0, 0, 1, c4, bp), cS.fillStyle = bO.lC, cS.fillRect(0, this.kx, this.dt, this.du - this.kx), this.lD(), this.kG(), cS.strokeRect(0, 0, this.dt, this.du), r.bF.textAlign(cS, 2), cS.font = r.bF.bG(0, this.ky), 0 === this
			.a9 ? this.lE(dg.lF, c4, bp) : 1 === this.a9 ? this.lE(dg.lG, c4, bp) : 2 === this.a9 ? this.lH(c4, bp) : 3 === this.a9 && (this.lI(c4, bp), this.lJ(c4, bp)), j9.lK(Math.floor(c4 + this.dt - .725 * this.kx), Math.floor(bp + .275 *
				this.kx), Math.floor(.45 * this.kx)), cS.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lD = function() {
		var a1, bx;
		for (cS.lineWidth = this.l0, r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 1), cS.strokeStyle = bO.bX, cS.font = r.bF.bG(1, this.kz), bx = this.dt / this.l1.length, cS.fillStyle = bO.lL, cS.fillRect(this.a9 * bx, this.du - this.ku, bx,
				this.ku), cS.fillStyle = bO.bX, cS.fillRect(0, this.du - this.ku - .5 * this.l0, this.dt, this.l0), a1 = 1; a1 <= 3; a1++) cS.fillRect(a1 * bx, this.du - this.ku, this.l0, this.ku);
		for (a1 = this.l1.length - 1; 0 <= a1; a1--) cS.fillText(r.b9.bA(this.l1[a1], 0, .9 * bx), (a1 + .5) * bx, this.du - .46 * this.ku)
	}, this.kG = function() {
		cS.fillStyle = bO.lM, cS.fillRect(0, 0, this.dt, this.kx), cS.fillStyle = bO.bX, cS.fillRect(0, this.kx - .5 * this.l0, this.dt, this.l0), cS.font = r.bF.bG(1, .39 * this.kx), cS.fillText(r.b9.bA(L(39), 0, .8 * this.dt), Math.floor(this
			.dt / 2), Math.floor(.55 * this.kx))
	}, this.lE = function(dC, c4, bp) {
		var jP = dg.max[this.a9],
			f0 = (cS.setTransform(1, 0, 0, 1, c4 + 2 * this.kp + this.kr, bp + this.kt + this.kx), cS.lineWidth = 2, this.kv / Math.sqrt(jP));
		cS.beginPath(), cS.moveTo(this.ks, this.kv - f0 * Math.sqrt(dC[dg.l8 - 1]));
		for (var a1 = dg.l8 - 2; 0 <= a1; a1--) cS.lineTo(a1 * this.ks / (dg.l8 - 1), this.kv - f0 * Math.sqrt(dC[a1]));
		cS.stroke();
		c4 = this.lK(dC, f0, .5);
		c4 < .95 && cS.fillText(r.aI.eh(jP), -this.kp, 0), .05 < Math.abs(c4 - .5) && cS.fillText(r.aI.eh(Math.floor(jP / 4)), -this.kp, Math.floor(this.kv / 2)), .05 < c4 && cS.fillText("0", -this.kp, this.kv)
	}, this.lH = function(c4, bp) {
		cS.setTransform(1, 0, 0, 1, c4 + 2 * this.kp + this.kr, bp + this.kt + this.kx), cS.lineWidth = 2;
		var f0 = this.kv / Math.max(dg.max[this.a9], 1);
		cS.beginPath(), cS.moveTo(this.ks, this.kv - f0 * dg.lN[dg.l8 - 1]);
		for (var a1 = dg.l8 - 2; 0 <= a1; a1--) cS.lineTo(a1 * this.ks / (dg.l8 - 1), this.kv - f0 * dg.lN[a1]);
		cS.stroke();
		c4 = this.lK(dg.lN, f0, 1), bp = dg.max[this.a9] / 100;
		c4 < .95 && cS.fillText(r.aI.h7(bp, 2), -this.kp, 0), .05 < Math.abs(c4 - .5) && cS.fillText(r.aI.h7(bp / 2, 2), -this.kp, Math.floor(this.kv / 2)), .05 < c4 && cS.fillText(r.aI.h7(0, 2), -this.kp, this.kv)
	}, this.lI = function(c4, bp) {
		cS.setTransform(1, 0, 0, 1, c4 + .34 * this.dt, bp + 2 * kw + this.kx), r.bF.textAlign(cS, 2);
		for (var bj = this.du - 4 * kw - this.ku - this.kx, dC = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a1 = 9; 0 <= a1; a1--) cS.fillText(r.b9.bA(dg.lO[dC[a1]], 0, .31 * this.dt), 0, a1 * bj / 9);
		var h2 = dg.dh;
		for (cS.setTransform(1, 0, 0, 1, c4 + .39 * this.dt, bp + 2 * kw + this.kx), r.bF.textAlign(cS, 0), cS.fillText(r.aI.h7(100 * h2[0] / (1024 * Math.max(h2[1], 1)), 1), 0, 0), a1 = 8; 1 <= a1; a1--) cS.fillText(h2[dC[a1]].toString(), 0,
			a1 * bj / 9);
		cS.fillText(r.aI.h7(100 * (1 - b7.br[q.bS] / h2[7]), 0), 0, bj)
	}, this.lJ = function(c4, bp) {
		cS.setTransform(1, 0, 0, 1, c4 + .79 * this.dt, bp + 2 * kw + this.kx), r.bF.textAlign(cS, 2);
		var a1, bj = this.du - 4 * kw - this.ku - this.kx;
		for (cS.fillStyle = bO.lP, a1 = 2; 0 <= a1; a1--) cS.fillText(r.b9.bA(dg.lO[a1 + 8], 0, .31 * this.dt), 0, a1 * bj / 9);
		cS.fillText(r.b9.bA(dg.lO[18], 0, .31 * this.dt), 0, 3 * bj / 9), cS.fillStyle = bO.lQ, cS.fillText(r.b9.bA(dg.lO[11], 0, .31 * this.dt), 0, 4 * bj / 9), cS.fillStyle = bO.lR, cS.fillText(r.b9.bA(dg.lO[13], 0, .31 * this.dt), 0, 5 * bj /
				9), cS.fillText(r.b9.bA(dg.lO[15], 0, .31 * this.dt), 0, 6 * bj / 9), cS.fillText(r.b9.bA(dg.lO[16], 0, .31 * this.dt), 0, 7 * bj / 9), cS.fillText(r.b9.bA(dg.lO[12], 0, .31 * this.dt), 0, 8 * bj / 9), cS.fillStyle = bO.lS, cS
			.fillText(r.b9.bA(dg.lO[17], 0, .31 * this.dt), 0, bj), cS.fillStyle = bO.lP;
		var h2 = dg.dh,
			lT = h2[8] + h2[9] + h2[10] + h2[18],
			lT = r.aI.eh(lT),
			lV = cS.measureText(lT).width,
			c4 = (cS.setTransform(1, 0, 0, 1, c4 + .83 * this.dt + lV, bp + 2 * kw + this.kx), cS.fillText(r.aI.eh(h2[8]), 0, 0), cS.fillText(r.aI.eh(h2[9]), 0, bj / 9), cS.fillText(r.aI.eh(h2[10]), 0, 2 * bj / 9), cS.fillText(r.aI.eh(h2[18]), 0,
					3 * bj / 9), cS.fillStyle = bO.lQ, cS.fillText(lT, 0, 4 * bj / 9), cS.fillStyle = bO.lR, cS.fillText(r.aI.eh(h2[13]), 0, 5 * bj / 9), cS.fillText(r.aI.eh(h2[15]), 0, 6 * bj / 9), cS.fillText(r.aI.eh(h2[16]), 0, 7 * bj / 9), cS
				.fillText(r.aI.eh(h2[12]), 0, 8 * bj / 9), h2[12] + h2[13] + h2[15] + h2[16]);
		cS.fillStyle = bO.lS, cS.fillText(r.aI.eh(c4), 0, bj), cS.fillStyle = bO.bX
	}, this.lK = function(dC, f0, lX) {
		var a1, cb, dV;
		return this.l3 < 0 || 1 < this.l3 ? .25 : (a1 = this.l3 * (dg.l8 - 1), dV = dC[cb = Math.floor(a1)], dV += (a1 - cb) * (dC[cb < dg.l8 - 1 ? cb + 1 : cb] - dV), cS.strokeStyle = bO.lY, .04 < this.l3 && this.lZ(0, this.kv - f0 * Math.pow(
				dV, lX), a1 * this.ks / (dg.l8 - 1), this.kv - f0 * Math.pow(dV, lX)), .04 < dV / dg.max[this.a9] && this.lZ(a1 * this.ks / (dg.l8 - 1), this.kv, a1 * this.ks / (dg.l8 - 1), this.kv - f0 * Math.pow(dV, lX)), cS.fillStyle = bO
			.la, cS.beginPath(), cS.arc(a1 * this.ks / (dg.l8 - 1), this.kv - f0 * Math.pow(dV, lX), Math.max(2, .014 * this.du), 0, 2 * Math.PI), cS.fill(), dC = this.l3 * bL.j8, dC = 0 === b7.c0[q.bS] ? Math.floor(dC * dg.lb) : Math.floor(
				dC * bL.bM()), cS.fillStyle = bO.bX, cS.fillText(1 === lX ? r.aI.h7(dV / 100, 2) : r.aI.eh(Math.floor(dV)), -this.kp, this.kv - f0 * Math.pow(dV, lX)), r.bF.textAlign(cS, 1), cS.fillText(jK.lc(dC), a1 * this.ks / (dg.l8 - 1),
				this.kv + this.ky - (b2.b3.b4() ? 2 : 0) - this.l0), r.bF.textAlign(cS, 2), f0 * Math.pow(dV, lX) / this.kv)
	}, this.lZ = function(cU, cV, cW, cX) {
		cS.beginPath(), cS.moveTo(cU, cV), cS.lineTo(cW, cX), cS.stroke()
	}
}

function ld() {
	this.az = function() {
		! function() {
			var data = b5.buffer.data;
			0 === data[2].k2 && (bD.du > bD.dt || 0 !== b2.id) && (data[2].value = data[2].lg = 1);
			0 === data[100].k2 && (data[100].value = data[100].lg = (0 === b2.id ? "Player " : 1 === b2.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a1, data = b5.buffer.data,
			cs = data.length;
		for (a1 = 0; a1 < cs; a1++) {
			var lh = b5.aP.li(a1, !0);
			data[a1] && data[a1].k2 === lh && (null === (lh = b5.aP.lj(a1)) ? data[a1].value = data[a1].lg : 2 === data[a1].type ? data[a1].value = lh : (lh = Number(lh), isNaN(lh) ? data[a1].value = data[a1].lg : data[a1].value = lh))
		}
	}
}

function ll() {
	var input;

	function lm(cb) {
		(cb = cb.target.files) && 0 < cb.length && lq.lr(cb[0])
	}

	function lv(cb) {
		var aN = new Image;
		aN.onload = lw, aN.src = cb.target.result
	}

	function lw(cb) {
		var cb = cb.target,
			dt = cb.width,
			du = cb.height,
			ly = b5.buffer.data[162].value,
			max = Math.min(dR.ip, ly),
			ly = (max = b2.id || c9.lz() ? Math.min(1400, ly) : max) / Math.max(dt, du);
		if (ly < 1 && (dt = Math.floor(ly * dt + .125), du = Math.floor(ly * du + .125)), max < dt || max < du || dt < 10 || du < 10) ly = "Invalid Image Dimensions!", b2.k3 ? b2.k3.showToast(ly) : alert(ly);
		else {
			for (var max = document.createElement("canvas"), ly = (max.width = dt, max.height = du, max.getContext("2d")), m1 = document.createElement("canvas"), m2 = (m1.width = cb.width, m1.height = cb.height, m1.getContext("2d")), cb = (m2
					.drawImage(cb, 0, 0), m2.getImageData(0, 0, m1.width, m1.height)), m2 = ly.createImageData(dt, du), src = cb.data, m5 = m2.data, m6 = m1.width / dt, m7 = m1.height / du, bp = 0; bp < du; bp++)
				for (var c4 = 0; c4 < dt; c4++) {
					var m8 = Math.floor(c4 * m6),
						m8 = 4 * (Math.floor(bp * m7) * m1.width + m8),
						mB = 4 * (bp * dt + c4);
					m5[mB] = src[m8], m5[1 + mB] = src[1 + m8], m5[2 + mB] = src[2 + m8], m5[3 + mB] = 255
				}
			ly.putImageData(m2, 0, 0), 20 === n.go && n.gp().lw(max)
		}
	}
	this.az = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = lm
	}, this.ln = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.lo = function() {
		input.click()
	}, this.lr = function(ls) {
		var dC = ls.name.split("."),
			dC = dC[dC.length - 1].toLowerCase();
		"gif" !== dC && "jpg" !== dC && "jpeg" !== dC && "png" !== dC || ((dC = new FileReader).onload = lv, dC.readAsDataURL(ls))
	}
}

function mC() {
	this.c8 = bL.c8, this.a9 = 0, this.j0 = 0, this.iy = 0, this.mD = null, this.mE = 7, this.mF = 0, this.az = function() {
		this.iy = 0, this.mD = [], this.a9 = 0, this.j0 = 0
	}, this.mG = function(mH) {
		if (q.cJ) this.jL(mH);
		else if (this.mD.push(mH), 2 === q.cf) {
			for (var a1 = 0; a1 < this.mD.length; a1++) jd.je.bs(this.mD[a1]);
			this.mD = []
		}
	}, this.jL = function(mH) {
		2 !== q.cf && (jd.je.bs(mH), jR.bs(), jK.jL(this.iy), this.iy === q.jJ ? (q.jM.bs(), this.iy = 0, this.a9 = 0, this.j0 = 0, this.c8 = bL.c8) : (this.iy++, ez.en(), ez.bI(!0), jE.render()))
	}, this.bs = function() {
		bD.bs(), q.cJ ? (bL.cC = jK.jL(-1) || bL.cC, jN()) : (0 !== this.a9 || bL.c8 >= this.c8 && (this.c8 += bL.j8 * Math.floor(1 + (bL.c8 - this.c8) / bL.j8), 2 === q.cf ? jC() : this.mI(), this.a9++, 27 < bL.c8 - this.mF)) && this.mJ(), j5(),
			bL.cC && (bL.cC = !1, j6()), this.mF = bL.c8
	}, this.mJ = function() {
		bL.cC = !0, jO(), this.a9 = 0
	}, this.mI = function() {
		var mK, a1;
		if (this.j0 !== 7 * this.iy) jI(), jE.render();
		else {
			mK = !1;
			loop: for (; this.mL() && (mK = !0, jI(), 2 !== q.cf) && 0 < this.mD.length;)
				for (a1 = this.mE - 2; 0 <= a1; a1--)
					if (jI(), 2 === q.cf) break loop;
			mK ? jE.render() : (jC(), jE.mM())
		}
	}, this.mL = function() {
		return 0 < this.mD.length && (this.iy++, jd.je.bs(this.mD[0]), this.mD.shift(), !0)
	}
}

function mN() {
	var du, canvas, mO, mP, mQ, mR = -1;

	function mT() {
		var bk, b9 = canvas.getContext("2d", {
			alpha: !0
		});
		b9.clearRect(0, 0, du, du), b9.fillStyle = bO.bR, b9.fillRect(0, 0, du, du), 9 === mP && (b9.fillStyle = bO.bW, b9.fillRect(0, 0, du, du)), b9.fillStyle = bO.bX, b9.fillRect(0, 0, du, 1), b9.fillRect(0, 0, 1, du), b9.fillRect(0, du - 1, du,
			1), b9.fillRect(du - 1, 0, 1, du), bk = .9 * du / bl.get(0).width, b9.imageSmoothingEnabled = !0, b9.setTransform(bk, 0, 0, bk, Math.floor((du - bk * bl.get(0).width) / 2), Math.floor((du - bk * bl.get(0).height) / 2)), b9.drawImage(
			bl.get(0), 0, 0), b9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function mZ(f1, f2) {
		if (!j9.jA) return f1 <= du + bY.gap && f2 >= mS.bp ? 9 : -1;
		if (f1 <= 4 * du + bY.gap) {
			if (f2 >= mS.bp) return 0;
			if (f2 >= mS.bp - du - mQ * bY.gap) return 2
		} else if (f1 <= 7 * du + bY.gap && f2 >= mS.bp - du - mQ * bY.gap) return 1;
		return -1
	}
	this.jA = !1, this.az = function() {
		mP = -1, this.jA = !1, mQ = b2.b3.b4() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		du = mS.du, (canvas = document.createElement("canvas")).width = du, canvas.height = du, mO = r.bF.bG(1, (b2.b3.b4() ? .5 : .45) * du), mT()
	}, this.mU = function() {
		return !(1 !== q.cf || q.cJ || (q.cL ? !j1.jB : this.jA && q.cK))
	}, this.l7 = function() {
		this.jA = !this.jA, this.jA ? (j1.mV(!1), q.cL && j1.jB && j1.jc(!0), this.mW(), 9 === mP && (mP = 0)) : (mP = -1, mT(), !q.cK || 1 !== q.cf || q.cJ || q.cL || b2.b3.setState(1)), bL.cC = !0
	}, this.mW = function() {
		(q.cK || q.cL) && 1 === q.cf && (mX.bI(!0), q.cJ || setTimeout(function() {
			jE.mY()
		}, 0), b2.b3.setState(0))
	}, this.c3 = function(f1, f2) {
		return 0 <= (mR = mZ(f1, f2)) || !j9.jA || q.cK || q.cL || mb.l2 || j9.l7(), mR
	}, this.cF = function(f1, f2) {
		f1 = mZ(f1, f2);
		f1 !== mP && (mP = f1, this.jA || mT(), bL.cC = !0)
	}, this.md = function(f1, f2) {
		f1 = mZ(f1, f2);
		return -1 !== f1 && mR === f1 && (this.jA ? q.cP ? (0 <= f1 && j1.mV(!1), !q.cL) : (0 === f1 ? q.me() : 1 === f1 ? this.l7() : 2 === f1 && n.aB(1, 0), !0) : 9 === f1 && (this.l7(), !0))
	}, this.cR = function() {
		var dt;
		this.jA ? (dt = Math.floor(5.5 * du), cS.setTransform(1, 0, 0, 1, bY.gap, mS.bp), cS.fillStyle = bO.bR, cS.fillRect(0, 0, dt, du), 0 === mP ? (cS.fillStyle = bO.bW, cS.fillRect(0, 0, 4 * du, du)) : 1 === mP && (cS.fillStyle = bO.bW, cS
				.fillRect(4 * du, 0, Math.floor(1.5 * du), du)), cS.fillStyle = bO.bX, cS.fillRect(0, 0, dt, 1), cS.fillRect(0, 0, 1, du), cS.fillRect(4 * du, 0, 1, du), cS.fillRect(0, du - 1, dt, 1), cS.fillRect(dt - 1, 0, 1, du), cS.font =
			mO, r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 1), cS.fillText(L(40), 2 * du, .54 * du), dt = .4 * du, j9.lK(bY.gap + 4 * du + (1.5 * du - dt) / 2, mS.bp + .3 * du, dt), dt = 1, cS.setTransform(1, 0, 0, 1, bY.gap, mS.bp - dt *
				mQ * bY.gap - dt * du), cS.fillStyle = bO.bR, cS.fillRect(0, 0, 4 * du, du), mP === dt + 1 && (cS.fillStyle = bO.bW, cS.fillRect(0, 0, 4 * du, du)), cS.fillStyle = bO.bX, cS.fillRect(0, 0, 4 * du, 1), cS.fillRect(0, 0, 1, du),
			cS.fillRect(4 * du, 0, 1, du), cS.fillRect(0, du - 1, 4 * du, 1), cS.fillText(L(0 === dt ? 40 : 41), 2 * du, .54 * du), cS.setTransform(1, 0, 0, 1, 0, 0)) : cS.drawImage(canvas, bY.gap, mS.bp)
	}, this.mh = function(player) {
		return 0 !== b7.c0[player] && 2 !== q.cf && !r.cz.fO(player)
	}, this.lK = function(c4, bp, cs) {
		cS.setTransform(1, 0, 0, 1, c4, bp), cS.lineWidth = bY.bZ, cS.strokeStyle = bO.bX, cS.beginPath(), cS.moveTo(0, 0), cS.lineTo(cs, cs), cS.moveTo(0, cs), cS.lineTo(cs, 0), cS.stroke()
	}
}

function mj(bN, fv) {
	return 0 <= bN ? hA.iV(bN, fv) : -hA.iV(-bN, fv)
}

function mk(h2) {
	return h2 * h2
}

function ml(bN, fv) {
	return fv < bN ? bN : fv
}

function mm(bN, fv) {
	return bN < fv ? bN : fv
}

function cB(bN, h2, fv) {
	return h2 < bN ? bN : fv < h2 ? fv : h2
}

function mn(h2, cs) {
	for (var aN = hA.iV(h2 + 1, 2), a1 = 0; a1 < cs; a1++) aN = hA.iV(aN + hA.iV(h2, aN), 2);
	return aN
}

function mo(h2, cs) {
	return h2 < 1 ? 0 : mn(h2, cs)
}

function mp(cU, cV, kp, kt, cW, cX, kq, ku) {
	return !(cU + kp <= cW || cV + kt <= cX || cW + kq <= cU || cX + ku <= cV)
}

function mq(cU, cV, kp, kt, cW, cX, kq, ku) {
	return cU <= cW && cV <= cX && cW + kq <= cU + kp && cX + ku <= cV + kt
}

function mr(h2) {
	return Math.floor(!!h2 * (1 + Math.log2(h2 + .5)))
}

function ms() {
	var mt = [L(42), L(43), L(44), L(45), L(46), L(47), L(48)],
		mu = [100, 60, 30, 15, 6, 1],
		mv = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		mw = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		my = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.mz = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.n0 = function(id, n1, a9) {
		n1 = this.n2(n1);
		return +(mv[n1][id] > a9)
	}, this.n2 = function(n1) {
		for (var a1 = 0; a1 < mu.length; a1++)
			if (mu[a1] <= n1) return a1;
		return mu.length
	}, this.n3 = function(n1) {
		return mt[this.n2(n1)]
	}, this.n4 = function(id, n5) {
		return mw[id].replace(new RegExp("x", "g"), n5)
	}, this.n6 = function(id, n5) {
		return my[id].replace(new RegExp("x", "g"), n5)
	}, this.n7 = function(id, n8) {
		return this.mz[5][id]
	}
}

function n9() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.nA = null
}

function L(value, nB, lg, nC) {
	var ga = "number" == typeof value ? nD.nE[value] : value;
	if (lg && nD.nF() && (ga = lg), !nB) return nC ? ga.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : ga;
	for (var cs = nB.length, a1 = 0; a1 < cs; a1++)
		for (var bN = 0; bN < 3; bN++) ga = ga.replace("{" + (10 * bN + a1) + "}", nB[a1]);
	return ga
}

function jn() {
	var nL, nM, nG = document.createElement("div"),
		nH = document.createElement("div"),
		nI = document.createElement("div"),
		nJ = document.createElement("div"),
		nK = [],
		mx = [L(49), L(50), L(51), L(52), L(53), L(54), L(55), L(56)],
		nN = [1, 2, 3, 0, 9, 10, 11, 13];

	function nQ(a1) {
		n.aB(8, 0, new jx(21, {
			i1: nN[a1],
			ii: 0,
			ik: 10
		}))
	}
	this.show = function() {
			this.hj(n.b0.nY), document.body.appendChild(nG)
		}, this.aL = function() {
			n.removeChild(document.body, nG)
		}, this.hj = function(nY) {
			for (var nZ = [3, 0, 1, 2, 4, 5, 6, 7], a1 = 0; a1 < nK.length; a1++) {
				var dt = nY[a1];
				nL[nZ[a1]][1].na.textContent = dt || ""
			}
		}, this.resize = function() {
			var a1, nb = bY.gap,
				du = r.bF.nc(.085),
				dt = Math.min(4 * du, bD.dt - 2 * nb),
				cs = nK.length;
			for (r.bF.k9(nG, nb, bD.du - nb - du, dt, du), r.bF.kB(nG), r.bF.kB(nH, 6), a1 = 0; a1 < cs - 1; a1++) r.bF.kB(nK[a1].button, 6);
			for (a1 = 0; a1 < cs; a1++) nL[a1][0].resize(), nL[a1][1].resize();
			for (nK[0].c4 = 0, nK[0].button.style.left = r.bF.nO(nK[0].c4), nK[0].button.style.width = r.bF.nd(1.7 * du), a1 = 1; a1 < cs; a1++) nK[a1].c4 = nK[a1 - 1].c4 + nK[a1 - 1].button.offsetWidth, nK[a1].button.style.left = r.bF.nO(nK[a1].c4);
			if (!nM) {
				if (!bl.gT()) return;
				(nM = bl.get(14)).style.width = "24%", nM.style.position = "absolute", nH.appendChild(nM)
			}
			nM.style.left = r.bF.nO(0), nM.style.top = "7%", nI.ne && (nI.scrollLeft = nI.ne)
		}, nG.style.position = "absolute", nH.style.width = "25%", nH.style.height = "100%", nH.style.backgroundColor = bO.bR, nI.style.position = "absolute", nI.style.width = "75%", nI.style.height = "100%", nI.style.backgroundColor = bO.bR, nI
		.style.top = nI.style.right = r.bF.nO(0), r.bF.nP(nI), nJ.style.height = nJ.style.maxHeight = "100%", nK.push(new g("", function() {
			nQ(0)
		}, bO.nR)), nK.push(new g("", function() {
			nQ(1)
		}, bO.jq)), nK.push(new g("", function() {
			nQ(2)
		}, bO.nS)), nK.push(new g("", function() {
			nQ(3)
		}, bO.nT)), nK.push(new g("", function() {
			nQ(4)
		}, bO.nU)), nK.push(new g("", function() {
			nQ(5)
		}, bO.nV)), nK.push(new g("", function() {
			nQ(6)
		}, bO.nU)), nK.push(new g("", function() {
			nQ(7)
		}, bO.nW)), nL = new Array(nK.length);
	for (var a1 = 0; a1 < nK.length; a1++) nK[a1].button.style.position = "absolute", nL[a1] = [new nX(mx[a1], nK[a1].button, .25, .45), new nX("", nK[a1].button, .53, .84, 1)], nK[a1].button.style.height = nK[a1].button.style.maxHeight = "100%", nK[
		a1].button.top = r.bF.nO(0), nJ.appendChild(nK[a1].button);
	nI.appendChild(nJ), nG.appendChild(nH), nG.appendChild(nI)
}

function nf() {
	function o6(c4, cs, bp, nm, nz, oH, player) {
		if (!(bp < 1 || nz < bp))
			for (var a1 = 0; a1 <= cs; a1++) {
				var gF = f7.oI(c4, bp);
				if (il.nr.oJ(gF) && !r.s.has(nm, eb.np(gF)) && eb.oK(gF, player)) return gF >> 2;
				c4 += oH
			}
		return -1
	}

	function oB(bp, cs, c4, nm, ny, oH, player) {
		if (!(c4 < 1 || ny < c4)) {
			cs = Math.max(cs, 0);
			for (var a1 = 0; a1 <= cs; a1++) {
				var gF = f7.oI(c4, bp);
				if (il.nr.oJ(gF) && !r.s.has(nm, eb.np(gF)) && eb.oK(gF, player)) return gF >> 2;
				bp += oH
			}
		}
		return -1
	}

	function oF(o5, o7, nh) {
		return -1 !== o7 && (-1 === o5 || f7.oG(o7, nh) < f7.oG(o5, nh)) ? o7 : o5
	}
	this.ng = function(player, nh) {
		if (il.ni.nj(player))
			for (var nk = f7.nl(), nm = [];;) {
				var nn = function(nh, nk, nm, player) {
					for (var nu = f7.nv(nh), nw = f7.nx(nh), ny = dR.dS - 2, nz = dR.dT - 2, o0 = -1, gM = 0; gM < nk; gM++) {
						var o1 = Math.max(nu - gM, 1),
							o2 = Math.max(nw - gM, 1),
							o3 = Math.min(nu + gM, ny),
							o4 = Math.min(nw + gM, nz),
							o5 = o6(nu, o3 - nu, nw - gM, nm, nz, 1, player),
							o7 = o6(nu - 1, nu - o1 - 1, nw - gM, nm, nz, -1, player),
							o3 = o6(nu, o3 - nu, nw + gM, nm, nz, 1, player),
							o1 = o6(nu - 1, nu - o1 - 1, nw + gM, nm, nz, -1, player),
							oA = oB(nw, o4 - nw - 1, nu - gM, nm, ny, 1, player),
							oC = oB(nw - 1, nw - o2 - 2, nu - gM, nm, ny, -1, player),
							o4 = oB(nw, o4 - nw - 1, nu + gM, nm, ny, 1, player),
							o2 = oB(nw - 1, nw - o2 - 2, nu + gM, nm, ny, -1, player);
						if (o0 = oF(o0, o5, nh), o0 = oF(o0, o7, nh), o0 = oF(o0, o3, nh), o0 = oF(o0, o1, nh), o0 = oF(o0, oA, nh), o0 = oF(o0, oC, nh), o0 = oF(o0, o4, nh), 0 <= (o0 = oF(o0, o2, nh)) && gM * gM >= f7.oG(o0, nh)) return o0
					}
					return -1
				}(nh, nk, nm, player);
				if (-1 === nn) break;
				var id = eb.np(f7.nq(nn));
				if (il.nr.ns(player, id)) return !! function(player, nn, nh) {
					for (var oL = f7.oM(nn, nh), a1 = 0; a1 < 4; a1++) {
						var oN = f7.oO(nn, oL);
						if (eb.oP(f7.nq(oN), player)) return d7.dM[6] = oL, 1;
						oL = (oL + 1) % 4
					}
					return
				}(player, nn, nh) && (d7.dM[7] = nn, !0);
				nm.push(id)
			}
		return !1
	}
}

function oQ() {
	this.resize = function() {
		var a1, oR = document.head.querySelector("style#ss");
		if (oR)
			for (a1 = oR.sheet.cssRules.length - 1; 0 <= a1; a1--) oR.sheet.deleteRule(0);
		else(oR = document.createElement("style")).id = "ss", document.head.appendChild(oR);
		var oS = "::-webkit-scrollbar",
			oT = r.bF.nO(bY.oU),
			fk = r.bF.nO(Math.max(r.bF.oV(.012), 8));
		try {
			oR.sheet.insertRule(oS + "{width:" + fk + ";height:" + fk + ";}", oR.sheet.cssRules.length), oR.sheet.insertRule(oS + "-thumb{background-color:white;}", oR.sheet.cssRules.length), oR.sheet.insertRule(oS + "-track{background:" + bO
				.bR + ";}", oR.sheet.cssRules.length), oR.sheet.insertRule(oS + "-track:horizontal{border-top:" + oT + " solid white;}", oR.sheet.cssRules.length), oR.sheet.insertRule(oS + "-track:vertical{border-left:" + oT +
				" solid white;}", oR.sheet.cssRules.length), oR.sheet.insertRule(oS + "-button{display:none;}", oR.sheet.cssRules.length)
		} catch (cb) {
			for (console.log("error 3425: " + cb), a1 = oR.sheet.cssRules.length - 1; 0 <= a1; a1--) oR.sheet.deleteRule(0)
		}
	}
}

function cD(data) {
	var hS, oW;

	function op(cs) {
		return cs < 60 ? 1 === cs ? cs + " Second" : cs + " Seconds" : cs < 3600 ? 1 === (cs = Math.floor(cs / 60)) ? cs + " Minute" : cs + " Minutes" : cs < 172800 ? 1 === (cs = Math.floor(cs / 3600)) ? cs + " Hour" : cs + " Hours" : (cs = Math
			.floor(cs / 172800)) + " Days"
	}

	function oZ(os) {
		var cs = data.data.length;
		if (cs) {
			for (var ii, max = min = parseInt(data.data[0][0]), a1 = 1; a1 < cs; a1++) var lT = parseInt(data.data[a1][0]),
				min = Math.min(lT, min),
				max = Math.max(lT, max);
			ii = os < 0 ? min + os : max + 1, n.aB(8, n.gp().ot, new jx(21, {
				i1: data.i1,
				ii: ii,
				ik: ii + Math.abs(os)
			}))
		}
	}
	if (this.show = function() {
			hS.show(), this.resize()
		}, this.aL = function() {
			hS.aL()
		}, this.resize = function() {
			hS.resize(), oW.resize()
		}, this.aM = function(aN) {
			2 === aN && hS.aO[0].aP()
		}, data.cE) {
		hS = new f(L(57), [new g("⬅️ " + L(1), function() {
			n.p()
		})]);
		var gM = {
				od: [],
				ob: [L(71), L(72), L(73) + " ↗"],
				oe: [12, 50, 38]
			},
			nA = q.data.nA;
		if (nA) {
			for (var cs = nA.length, od = gM.od, b8 = b7.b8, a1 = 0; a1 < cs; a1++) od.push([{
				h2: a1 + 1 + ".",
				bx: 0
			}, {
				h2: b8[a1],
				bx: 0
			}, {
				h2: oh.oi.eh(nA[a1], 5),
				bx: 1,
				hp: nA[a1],
				oj: 0
			}]);
			oW = new og(hS.j, gM, {
				ok: 1
			})
		} else oW = new og(hS.j, gM)
	} else {
		var gM = data.data.length ? 0 : 1,
			oY = [new g("⬅️ " + L(1), function() {
				n.p()
			}), new g(L(58), function() {
				oZ(-10)
			}, gM, 0, 1), new g(L(59), function() {
				oZ(10)
			}, gM, 0, 1), new g(L(60), function() {
				n.aB(11, 10, new oa({
					i1: data.i1
				}))
			})],
			ob = [L(61), L(62), L(63), L(64), L(65), L(31), L(32), L(33), L(66), L(67), L(68), L(69), "Audit Log", L(70)];
		hS = new f(ob[data.i1], oY), ! function() {
			var a1, gM = {
					od: []
				},
				od = gM.od,
				ol = data.data,
				cs = ol.length;
			cs && 0 === ol[0][0] && 0 <= (a9 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.i1]) && (n.b0.nY[a9] = ol[0][1]);
			var gH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.i1],
				h3 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.i1],
				a9 = [
					[L(74), L(75) + " ↗", L(76)],
					[L(74), L(77), L(78), L(79) + " ↗"],
					[L(74), L(75) + " ↗", L(78)],
					[L(74), L(75) + " ↗", L(78)],
					[L(71), L(80), L(81) + " ↗", L(82) + " ↗", L(83)],
					[L(71), L(80), L(84) + " ↗", L(12) + " ↗", L(85)],
					[L(71), L(80), L(86) + " ↗", L(87) + " ↗", L(13)],
					[L(71), L(80), L(84) + " ↗", L(12) + " ↗", L(88)],
					[L(71), L(80), L(81) + " ↗", L(82) + " ↗", L(83)],
					[L(74), L(75) + " ↗", L(78)],
					[L(74), L(75) + " ↗", L(89)],
					[L(74), L(75) + " ↗", L(78)],
					[L(71), L(80), L(81) + " ↗", L(82) + " ↗", L(90)],
					[L(74), L(75) + " ↗", L(78)]
				];
			if (gM.ob = a9[data.i1], gM.oe = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 15, 25, 25, 25],
					[25, 40, 35]
				][data.i1], 0 === data.i1 || 2 === data.i1 || 3 === data.i1 || 9 === data.i1 || 10 === data.i1 || 11 === data.i1 || 13 === data.i1)
				for (a1 = 0; a1 < cs; a1++) od.push([{
					h2: ol[a1][0] + 1 + ".",
					bx: 0
				}, {
					h2: ol[a1][1],
					bx: 1,
					hp: ol[a1][4],
					oj: ol[a1][3]
				}, {
					h2: (gH * ol[a1][2]).toFixed(h3),
					bx: 0
				}]);
			else if (12 === data.i1)
				for (a1 = 0; a1 < cs; a1++) {
					var oo = ol[a1][3];
					od.push([{
						h2: "" + ol[a1][0],
						bx: 0
					}, {
						h2: op(ol[a1][4]),
						bx: 0
					}, {
						h2: ol[a1][5],
						bx: 1,
						hp: ol[a1][1],
						oj: 0
					}, {
						h2: ol[a1][6],
						bx: 1,
						hp: ol[a1][2],
						oj: 0
					}, {
						h2: oq.n7(oo, oh.oi.eh(ol[a1][1], 5)),
						bx: 0
					}])
				} else if (1 === data.i1)
					for (a1 = 0; a1 < cs; a1++) od.push([{
						h2: ol[a1][0] + 1 + ".",
						bx: 0
					}, {
						h2: ol[a1][1],
						bx: 0
					}, {
						h2: (gH * ol[a1][2]).toFixed(h3),
						bx: 0
					}, {
						h2: ol[a1][3],
						bx: 1,
						hp: ol[a1][5],
						oj: ol[a1][4]
					}]);
				else if (4 === data.i1 || 5 === data.i1 || 6 === data.i1 || 7 === data.i1 || 8 === data.i1)
				for (a1 = 0; a1 < cs; a1++) {
					var or = ol[a1][5];
					4 === data.i1 || 8 === data.i1 ? "100%" === (or = (or % 64 * 100 / (or >> 6)).toFixed(0) + "%") && (4 === data.i1 ? or += " (" + L(91) + ")" : or += " (" + L(92) + ")") : 5 === data.i1 ? 32768 <= or && (or = -(or - 32768)) :
						or = (gH * or).toFixed(h3), od.push([{
							h2: "" + ol[a1][0],
							bx: 0
						}, {
							h2: op(ol[a1][6]),
							bx: 0
						}, {
							h2: ol[a1][7],
							bx: 1,
							hp: ol[a1][1],
							oj: ol[a1][2]
						}, {
							h2: ol[a1][8],
							bx: 1,
							hp: ol[a1][3],
							oj: ol[a1][4]
						}, {
							h2: "" + or,
							bx: 0
						}])
				}
			oW = new og(hS.j, gM)
		}()
	}
}

function ou() {
	var du, canvas, b9, ov, ow, ox, oy, oz, p0, p1, p2, p4, p3 = !1,
		fr = (this.l2 = !1, this.dt = 0, new Array(2)),
		p5 = 0;

	function lA() {
		var dt = gv.dt,
			jP = (oz = !1, p9(b9, dt, du), Math.floor(dt / 2));
		1 === ov ? (b9.fillStyle = bO.pA, b9.fillRect(jP, 0, jP, du)) : -1 === ov && (b9.fillStyle = bO.pB, b9.fillRect(0, 0, jP, du)), pC(b9, dt, du, 2);
		var jP = (jP = Math.floor(.25 * du)) < 2 ? 2 : jP,
			pE = (b9.fillStyle = bO.pD, Math.floor((du - 4) * ow[1] / ox[1]));
		0 < pE && b9.fillRect(2, du - 2 - pE, jP, pE), 0 < (pE = Math.floor((du - 4) * ow[0] / ox[0])) && b9.fillRect(dt - 2 - jP, du - 2 - pE, jP, pE);
		jP = (jP = Math.floor(du / 8)) < 2 ? 2 : jP, pG(b9, Math.floor(.4 * du), 0, du, jP, .5, !1), pG(b9, Math.floor(dt - 1.4 * du), 0, du, jP, .5, !0), pE = 1.1 * du / fr[0].width;
		b9.imageSmoothingEnabled = !0, b9.setTransform(pE, 0, 0, pE, (dt - pE * fr[0].width) / 2, -.05 * du), b9.drawImage(fr[+p3], 0, 0), b9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function pP() {
		p4 = -1, p3 = pQ.pR(), g5.pS(257), g5.pT(p3), gv.l2 = !0, oz = !0, p0 = 360;
		for (var h2, bx = 0, a1 = ct.cu - 1; 0 <= a1; a1--) r.cz.fO(ct.cw[a1]) || (bx += b7.br[ct.cw[a1]]);
		p3 ? ox[0] = Math.max(hA.iV(3 * bx, 4), 1) : q.bf ? (h2 = 9 === q.eU ? 8 === aC.d2[d5.pb()] ? 80 : (h2 = hA.iV(100 * d5.pY(), q.pZ), hA.iV(hA.hB(1550 - 11 * h2, 400, 1e3), 10)) : (h2 = hA.iV(100 * d5.pY(), q.pZ), hA.iV(hA.hB(1600 - 12 * h2,
			400, 1e3), 10)), h2 = hA.iV(h2 * bx, 100), ox[0] = Math.max(h2, 1)) : 8 === q.eU ? ox[0] = Math.max(hA.iV(3 * bx, 4), 1) : ox[0] = Math.max(hA.iV(3 * bx, 5), 1), ox[1] = Math.max(bx - ox[0], 1)
	}

	function pL() {
		p2 = bL.bM(), oz = !0, p0 = ov = 0, oy = [], gv.l2 = !1, g5.g6(247), ow[0] = ow[1] = 0, g5.pS(673)
	}

	function pH() {
		return mS.pm(g5.pn()) ? __fx.settings.keybindButtons ? mS.bp - 2 * (du + bY.gap) : mS.bp - du - bY.gap : j1.pm(g5.po()) ? j1.pH() - du - bY.gap : bD.du - du - pp.pq() * bY.gap
	}
	this.gw = function() {
		for (var a1 = 0; a1 < 2; a1++) fr[a1] = r.canvas.p6(bl.get(3), 8 - a1, bO.p7), fr[a1] = r.canvas.p8(fr[a1])
	}, this.az = function() {
		p2 = -1e4, p1 = p5 = 0, p4 = -1, this.l2 = !1, oz = p3 = !1, ow = [ov = p0 = 0, 0], ox = [1, 1], oy = [], this.resize()
	}, this.resize = function() {
		du = mS.du, this.dt = 4 * du, (canvas = document.createElement("canvas")).width = this.dt, canvas.height = du, b9 = canvas.getContext("2d", {
			alpha: !0
		}), lA()
	}, this.bI = function() {
		oz && lA()
	}, this.c3 = function(c4, bp) {
		return !!this.l2 && !(c4 < bD.dt - this.dt - bY.gap || bp < pH() || (q.cL || this.pI(q.bS) && (j9.jA && j9.l7(), jd.pJ.pK(c4 > bD.dt - bY.gap - this.dt / 2 ? 1 : 0)), 0))
	}, this.bs = function() {
		0 < p1 ? 0 === --p1 && pL() : this.l2 ? 180 == --p0 && 3 * ow[0] < ox[0] ? pL() : ow[0] >= ox[0] ? p3 ? pc.pd.pe() : pc.pd.pf() : ow[1] >= ox[1] ? p1 = 4 : p0 <= 0 && pL() : ! function() {
			var pV = bL.bM();
			if (pV % 40 == 14) {
				if (p5) return !(pV < p5) && !(pV < p2 + 535) && (p5 = pV + 1071, r.cz.pW()) ? (pP(), 1) : 0;
				(1 === ct.cu || (q.bf ? d5.pY() : b7.br[aR[0]]) >= hA.iV(96 * q.pZ, 100)) && (p5 = pV + 535)
			}
			return
		}() && 0 <= p4 && (g5.pa(250, L(93, [b7.b8[p4]]), 673, p4, bO.bX, bO.lC, -1, !0), pP())
	}, this.pg = function() {
		this.l2 && ow[0] < ox[0] && pL()
	}, this.ph = function(player, pi) {
		var pj = L(pi ? 94 : 95, [b7.b8[player]]),
			pj = (g5.pa(450, pj, 257, player, pi ? bO.pk : bO.pl, bO.lC, -1, !0), oy.push(player), oz = !0, q.cK ? Math.max(ox[0], ox[1]) : b7.br[player]),
			pj = Math.max(pj, 1);
		pi ? ow[0] += pj : ow[1] += pj, player === q.bS && (ov = pi ? 1 : -1)
	}, this.cR = function() {
		var bp;
		this.l2 && (bp = pH(), cS.drawImage(canvas, bD.dt - this.dt - bY.gap, bp))
	}, this.pr = function(player) {
		if (0 !== p0) return !1;
		if (!r.cz.ps(1)) return !1;
		if (!r.cz.pt(player)) return !1;
		if (10 <= aS[player] && !r.cz.pu(player, 9)) return !1;
		if (!q.cK) {
			player = bL.bM();
			if (player < p2 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.pI = function(cy) {
		if (!r.cz.ps(1)) return !1;
		if (!r.cz.pt(cy)) return !1;
		if (!this.l2) return !1;
		for (var a1 = oy.length - 1; 0 <= a1; a1--)
			if (oy[a1] === cy) return !1;
		return !0
	}, this.pw = function(player) {
		p4 = player
	}
}

function px() {
	this.py = 0, this.pz = 0, this.q0 = 0, this.q1 = 0, this.q2 = 0, this.q3 = 0, this.q4 = [0, 0, 0, 0], this.q5 = function() {
		this.py = cl.q6(), this.pz = cl.pH(), this.q0 = -this.py, this.q1 = -this.pz, this.q2 = bD.dt / fH, this.q3 = bD.du / fH, this.q4[0] = Math.floor(this.q0), this.q4[1] = Math.floor(this.q1), this.q4[2] = Math.floor(this.q4[0] + this.q2 +
			1), this.q4[3] = Math.floor(this.q4[1] + this.q3 + 1), jE.q7 = !0
	}
}

function q8() {
	this.iB = function(size) {
		for (var q9 = hx, dC = [], a1 = 0; a1 < size; a1++) dC.push(String.fromCharCode(q9.i2(16)));
		return dC.join("")
	}, this.qA = function(ga) {
		return 20 < (ga = ga.trim()).length ? ga.substring(0, 20) : ga
	}
}

function qB() {
	this.qC = 2, this.qD = 1764, this.qE = 0;
	this.rVersion = 25, this.az = function() {
		this.qJ = "2.16.65", this.k2 = "🎃 30 Oct 2026 [" + this.qJ + "]", this.hostname = window.location.hostname.toLowerCase(), this.qK = 0 <= this.hostname.indexOf("territorial.io"), this.qL = 0 <= this.hostname.indexOf("github.io"), this
			.qM = 0 <= this.hostname.indexOf("game.territorial.io"), this.qN = function() {
				try {
					return window.self !== window.top
				} catch (cb) {
					return !0
				}
			}(), this.qP = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.qK + " validMod: " + +this.qL)
	}, this.qQ = 0
}

function qR() {
	var qS, qT, qU, qV, du, mO, fontSize, qW, qX, l0, qY, canvas, b9, qZ, qa;

	function u(a1) {
		return L(0 === a1 ? 96 : 1 === a1 ? 97 : 2 === a1 ? 98 : 99)
	}

	function qn() {
		q.bf ? aQ + 4 * bY.gap + du + d5.qo() > mS.bp ? cS.drawImage(canvas, 2 * bY.gap + d5.qo(), aQ + 2 * bY.gap) : cS.drawImage(canvas, bY.gap, aQ + 3 * bY.gap + d5.qo()) : cS.drawImage(canvas, bY.gap, aQ + 2 * bY.gap)
	}

	function qb() {
		canvas.width = qS[0].width + l0, canvas.height = du + l0, (b9 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, qS[0].width + l0, du + l0), b9.translate(Math.floor(l0 / 2), Math.floor(l0 / 2)), b9.lineWidth = l0, b9.fillStyle = 1 === qS[0].ql ? bO.qp : bO.lC, qq(), b9.fill(), b9.strokeStyle = 1 === qS[0].ql ? bO.nW : bO.bX,
		qq(), b9.stroke(), r.bF.textAlign(b9, 1), r.bF.textBaseline(b9, 1), b9.fillStyle = 1 === qS[0].ql ? bO.nW : bO.bX, b9.font = mO[0], b9.fillText(u(qS[0].qk), Math.floor(qS[0].width / 2), Math.floor(.72 * qW[0] * du)), b9.font = mO[1], b9
			.fillText(qS[0].ga, Math.floor(qS[0].width / 2), Math.floor((qW[0] + .48 * qW[1]) * du))
	}

	function qq() {
		b9.beginPath(), b9.moveTo(qY, 0), b9.lineTo(qS[0].width - qY, 0), b9.lineTo(qS[0].width, qY), b9.lineTo(qS[0].width, du - qY), b9.lineTo(qS[0].width - qY, du), b9.lineTo(qY, du), b9.lineTo(0, du - qY), b9.lineTo(0, qY), b9.closePath()
	}
	this.az = function() {
		qT = 4, qU = qV = qZ = 0, qS = [], mO = new Array(2), fontSize = new Array(2), (qW = new Array(2))[0] = .3, qW[1] = .7, qX = new Array(4), canvas = document.createElement("canvas"), qa = bL.c8 + 2e3, this.resize()
	}, this.resize = function() {
		var a1, dt;
		for (du = Math.floor((b2.b3.b4() ? .062 : .047) * bD.bE), fontSize[0] = Math.floor(.85 * qW[0] * du), fontSize[1] = Math.floor(.85 * qW[1] * du), mO[0] = r.bF.bG(1, fontSize[0]), mO[1] = r.bF.bG(1, fontSize[1]), a1 = qX.length - 1; 0 <=
			a1; a1--) qX[a1] = this.measureText(u(a1) + "000", mO[0]);
		if (l0 = Math.floor(1 + .05 * du), qY = Math.floor(.2 * du), 0 < qS.length) {
			for (a1 = qS.length - 1; 0 <= a1; a1--) dt = this.measureText(qS[a1].ga + "00", mO[1]), qS[a1].width = dt < qX[a1] ? qX[a1] : dt;
			qb()
		}
	}, this.bs = function() {
		0 !== qT && (4 === qT ? bL.c8 > qa && (qT = 0, 1 === q.cf) && l9.qd(dR.qe.qf[dR.qg].name, 3, 1, 9) : (1 === qT ? (0 === qU && (qb(), qU = 1e-4), 1 <= (qU += .002 * (bL.c8 - qZ)) && (qV = 0, qT = 2, qU = 1), bL.cC = !0) : 2 === qT ? ((
			qV += (bL.c8 - qZ) / 1e3) > qS[0].qm || 1 < qV && 1 < qS.length) && (qT = 3) : 3 === qT && ((qU -= .002 * (bL.c8 - qZ)) <= 0 && (qU = 0, qS.shift(), qT = 0 < qS.length ? 1 : 0), bL.cC = !0), qZ = bL.c8))
	}, this.measureText = function(ga, mO) {
		return cS.font = mO, Math.floor(cS.measureText(ga).width)
	}, this.qi = function(qj, a1) {
		this.qd(b7.b8[qj], a1, 1, 0 === a1 ? 3 : 7)
	}, this.qd = function(ga, qk, ql, qm) {
		var dt;
		ga.length && (dt = (dt = this.measureText(ga + "00", mO[1])) < qX[qk] ? qX[qk] : dt, qS.push({
			ga: ga,
			width: dt,
			qk: qk,
			ql: ql,
			qm: qm
		}), 0 === qT) && (qU = 0, qT = 1, qZ = bL.c8)
	}, this.cR = function() {
		0 !== qT && 0 !== qU && (qU < 1 ? (cS.globalAlpha = qU, qn(), cS.globalAlpha = 1) : qn())
	}
}

function qr() {
	var qs;
	this.qt = null, this.qu = 0, this.az = function() {
		qs = [], 9 === q.eU && this.qv()
	}, this.qv = function() {
		this.qt = [0, 0, 0, 0, 0, 0];
		for (var qw = [250, 226, 166, 148, 100, this.qu = 0, 0, 0], qx = [0, 8, 24, 30, 46, 70, 256, 333], qy = [0, 0, 3, 9, 17, 25, 256, 179], du = q.bq, a1 = 1; a1 < qw.length; a1++)
			if (du <= qx[a1]) {
				this.qu = qw[a1 - 1] - hA.iV((du - qx[a1 - 1]) * (qw[a1 - 1] - qw[a1]), qx[a1] - qx[a1 - 1]), this.qt[5] = qy[a1 - 1] - hA.iV((du - qx[a1 - 1]) * (qy[a1 - 1] - qy[a1]), qx[a1] - qx[a1 - 1]), this.qt[0] = q.aA - du - this.qu - this
					.qt[5];
				break
			} q.qz = q.aA - q.bq, q.data.numberTeams = (0 < q.bq) + (0 < q.qz), q.data.playerCount = q.dl = q.bq + q.qz, q.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, q.bq + this.qu, q.qz - this.qu]), q.jv.r0()
	}, this.r1 = function(player) {
		qs.push({
			player: player,
			fe: 14 + r2.r3(20)
		})
	}, this.bs = function() {
		if (9 === q.eU)
			for (var a1 = qs.length - 1; 0 <= a1; a1--) --qs[a1].fe <= 0 && (ez.eq(qs[a1].player, 0, et.eu.r5 + et.eu.r6), qs.splice(a1, 1))
	}
}

function r7() {
	function rC(player, rA) {
		rA = f7.rO(il.b0.rP[rA]), rA = eb.np(f7.nq(rA));
		return !!il.nr.ns(player, rA)
	}

	function r9(player) {
		return il.ni.nj(player) && !il.rk.rp()
	}
	this.r8 = function(player, oN) {
		return !!r9(player) && -1 !== (oN = function(player, oN) {
			for (var cs = il.b0.rm, rP = il.b0.rP, rS = il.b0.rS, rn = f7.nl(), ro = -1, a1 = 0; a1 < cs; a1++) {
				var rh = f7.rX(oN, f7.rO(rP[a1]));
				rh < rn && r.cz.rR(player, rS[a1] >> 3) && (rn = rh, ro = a1)
			}
			return ro
		}(player, oN)) && !!rC(player, oN) && (d7.dM[3] = il.b0.rD[oN], !0)
	}, this.rE = function(player, rF) {
		return !!r9(player) && !!il.nr.rG(rF) && !!rC(player, d7.dM[2])
	}, this.rH = function(player, rF, rI) {
		return !! function(player, rF, rI) {
			if (r9(player) && il.nr.rG(rF)) {
				rF = d7.dM[2];
				if (r.cz.rR(player, il.b0.rS[rF] >> 3)) {
					if (function(player, rA) {
							return il.nr.rj(player, rA) && (d7.dC[0] = il.rk.rl(il.b0.rc[rA]), d7.dM[1] = 6, !0)
						}(player, rF)) return 1;
					var rN = f7.rO(il.b0.rP[rF]),
						rU = il.nr.rV(player, rN);
					if (-1 !== rU) {
						rU = f7.rX(rU, rN);
						if (!(rI && 120 < rU)) {
							rI = function(rA, rW, rN) {
								var rb = il.b0.rc[rA],
									rA = il.b0.re[rA],
									rf = f7.rX(rN, rb[rA + 1]);
								if (rW <= rf) return il.nr.rg(rN, rb[rA + 1], rf, rW);
								for (var rh = rW - rf, cs = rb.length - 1, a1 = rA + 1; a1 < cs; a1++) {
									var ri = f7.rX(rb[a1], rb[a1 + 1]);
									if (rh <= ri) return il.nr.rg(rb[a1], rb[a1 + 1], ri, rh);
									rh -= ri
								}
								return rb[cs]
							}(rF, rU, rN);
							if (il.rZ.ra(player, rI, 1)) return d7.dM[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, rF, rI) && (player = d7.dM[2], il.b0.rK[player] = 64 + il.b0.rK[player] % 64, il.rL.qi(rF, il.b0.rM), !0)
	}
}

function rq() {
	this.rr = function(dC) {
		dC.fill(0)
	}, this.iW = function(dC) {
		for (var cs = dC.length, a1 = 0; a1 < cs; a1++) dC[a1] = []
	}, this.rs = function(g2, f0) {
		for (var g3 = d7.dI, a1 = 0; a1 < 3; a1++) g3[a1] = f0 * g2[a1];
		return g3
	}, this.rt = function(g2, g3, ru) {
		for (var os = 0, a1 = 0; a1 < 3; a1++) os += Math.abs(g2[a1] - g3[a1]);
		return ru <= os
	}, this.rv = function(g2, rw) {
		for (var a1 = 0; a1 < 3; a1++) g2[a1] = hA.hB(g2[a1] + rw, 0, 255);
		return g2
	}, this.x = function(dC, ii, ik) {
		ik = ik || dC.length - 1;
		for (var rx = 0, a1 = ii = ii || 0; a1 <= ik; a1++) rx += dC[a1];
		return rx
	}, this.ry = function(dC, rz) {
		for (var a1, s0, cs = dC.length, s1 = [], bN = cs - 1; 0 <= bN; bN--) {
			for (a1 = s0 = 0; a1 < cs; a1++) rz(dC[a1]) < rz(dC[s0]) && (s0 = a1);
			cs--, s1.push(dC[s0]), dC[s0] = dC[cs], dC.pop()
		}
		return s1
	}, this.min = function(dC) {
		var a1, h2, cs = dC.length;
		if (0 === cs) return 0;
		for (h2 = dC[0], a1 = 1; a1 < cs; a1++) h2 = Math.min(h2, dC[a1]);
		return h2
	}, this.max = function(dC) {
		var cs = dC.length;
		if (0 === cs) return 0;
		for (var h2 = dC[0], a1 = 1; a1 < cs; a1++) h2 = Math.max(h2, dC[a1]);
		return h2
	}, this.s2 = function(dC, h2) {
		for (var cs = dC.length, fe = 0, a1 = 0; a1 < cs; a1++) fe += dC[a1] > h2;
		return fe
	}, this.s3 = function(s4, s5, min) {
		for (var cs = s5[0], a1 = cs - 1; 0 <= a1; a1--) s4[a1] < min && (s4[a1] = s4[--cs]);
		s5[0] = cs
	}, this.s6 = function(dC, cs, value) {
		for (var a1 = 0; a1 < cs; a1++) dC[a1] -= value
	}, this.s7 = function(dC) {
		for (var cs = dC.length, a1 = 0; a1 < cs; a1++)
			if ("string" != typeof dC[a1]) return !1;
		return !0
	}, this.t = function(ga, dC, s8) {
		dC.fill(0);
		for (var nb = ga.split(","), cs = Math.min(nb.length, dC.length), a1 = 0; a1 < cs; a1++) dC[a1] = Math.min(parseInt(nb[a1]), s8)
	}, this.s9 = function(ga, dC, sA) {
		dC.fill("");
		for (var nb = ga.split('"'), cs = Math.min(nb.length, 2 * dC.length), aF = 0, a1 = 1; a1 < cs; a1 += 2) dC[aF++] = nb[a1].slice(0, sA)
	}, this.sB = function(dC, fe) {
		if (0 === fe) dC.fill(0);
		else {
			var rx = this.x(dC),
				cs = dC.length;
			if (0 === rx) dC.fill(hA.iV(fe, cs));
			else
				for (var a1 = 0; a1 < cs; a1++) dC[a1] = hA.iV(fe * dC[a1], rx);
			if (0 === (rx = this.x(dC))) dC[1] = fe;
			else
				for (var aF = 0; rx++ < fe;) dC[aF = (aF + 1) % cs] && dC[aF]++
		}
	}, this.sC = function(dC) {
		if (!dC) return 0;
		var cs = dC.length;
		if (0 === cs) return 0;
		for (var h2 = dC[cs - 1], a1 = cs - 2; 0 <= a1; a1--)
			if (dC[a1] !== h2) return a1 + 2;
		return 1
	}, this.sD = function(dC) {
		for (var rx = 0, a1 = 0; a1 < dC.length; a1++) rx += dC[a1].length;
		return rx
	}, this.sE = function(sF) {
		for (var dC = [], a1 = 0; a1 < sF.length; a1++) dC = dC.concat(sF[a1]);
		return dC
	}, this.has = function(dC, h2) {
		for (var cs = dC.length, a1 = 0; a1 < cs; a1++)
			if (dC[a1] === h2) return !0;
		return !1
	}
}

function sG() {
	this.sH = new sI, this.sJ = new sK, this.sL = new sM
}

function sN() {
	this.data = new sO;
	var sP = (new sQ).L84,
		sS = (this.nE = sP, !(this.sR = "en"));
	this.az = function() {
		var ga, dC;
		sS = !1, ("en" === (ga = b5.buffer.data[12].value).split("-")[0].toLowerCase() ? (nD.nE = sP, nD.sR = ga, 1) : b5.buffer.data[12].value === b5.buffer.data[145].value && 0 < b5.buffer.data[146].value && (ga = b5.buffer.data[146].value, (
			dC = b5.aP.sY(ga, !1)).length === ga) && !!r.s.s7(dC) && function(dC) {
			for (var cs = dC.length, du = 0; du < cs; du++) dC[du] = dC[du].replace("&#39;", "'");
			var sa = b5.aP.sY(cs, !0);
			if (cs !== sa.length) return !1;
			if (!r.s.s7(sa)) return !1;
			for (var jP = sP.length, sb = new Array(jP), sc = jP === cs, fe = Math.min(cs, jP), a1 = 0; a1 < jP; a1++)
				if (sb[a1] = sP[a1], a1 < cs && sa[a1] === sb[a1]) sb[a1] = dC[a1];
				else {
					sc = !1;
					for (var fv = 0; fv < fe; fv++)
						if (sa[fv] === sb[a1]) {
							sb[a1] = dC[fv];
							break
						}
				} return nD.nE = sb, nD.sR = b5.buffer.data[12].value, sc
		}(dC)) || (sS = !0)
	}, this.sX = function() {
		aC.gw(), v.gw(), mb.gw(), dg.gw(), kF.az(), oq = new ms
	}, this.nF = function() {
		return this.nE === sP || !sP.length
	}, this.sd = function() {
		var se;
		return !!sS && (sS = !1, 0 !== sP.length) && (se = b5.buffer.data[12].value, hW.kY.sf(0, se.slice(0, 20)), !0)
	}, this.sg = function(dC) {
		dC.length !== sP.length ? 8 === n.go && n.gp().i7(30, 0, 1) : (this.nE = dC, this.sR = b5.buffer.data[12].value, b5.hi.hj(145, this.sR), b5.hi.hj(146, dC.length), b5.aP.sh(dC, !1), b5.aP.sh(sP, !0), 8 === n.go ? n.gp().i7(30) : 0 === jz
			.si() && 5 === n.go && n.b0.sj())
	}, this.sk = function() {
		var lh, dC = navigator.languages;
		return dC && dC.length ? (lh = Math.max(nD.data.sl(dC[0]), 0), 1 === dC.length ? [lh, lh] : [lh, Math.max(nD.data.sl(dC[1]), 0)]) : [0, 0]
	}
}

function sm() {
	var sn = null;
	this.fW = 0, this.so = function() {
		var h2 = b5.buffer.data[5].value;
		sn = "px " + h2, "system-ui" !== h2 && (sn += ", system-ui"), this.fW = sp(32, 32, ["a", "b", "m"], 200, sn)
	}, this.sq = function(dt, du) {
		var aN = document.createElement("canvas");
		return aN.width = dt, aN.height = du, aN
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(b9, dt, du) {
		return b9.getImageData(0, 0, dt, du)
	}, this.bG = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + sn : 1 === type ? "bold " + size + sn : 2 === type ? "lighter " + size + sn : 3 === type ? "italic " + size + sn : 4 === type ? "oblique " + size + sn : 5 === type ? "small-caps " +
			size + sn : "small-caps bold " + size + sn
	}, this.textAlign = function(fF, id) {
		fF.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(fF, id) {
		fF.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.kB = function(cb, code, color) {
		color = this.nO(bY.oU) + " solid " + (color || bO.bX);
		5 === (code = code || 5) ? cb.style.border = color : 4 === code ? cb.style.borderLeft = color : 2 === code ? cb.style.borderBottom = color : 6 === code ? cb.style.borderRight = color : cb.style.borderTop = color
	}, this.k9 = function(cb, c4, bp, dt, du) {
		cb = cb.style;
		cb.left = this.nd(c4), cb.top = this.nd(bp), cb.width = this.nd(dt), cb.height = this.nd(du)
	}, this.dv = function(h2) {
		return 1 + h2 * b2.b3.b4()
	}, this.oV = function(gH, ba) {
		return gH * this.dv(void 0 === ba ? .5 : ba) * bD.bE / bD.cp
	}, this.nc = function(gH, ba) {
		return gH * this.dv(void 0 === ba ? .5 : ba) * bD.bE
	}, this.ss = function(gH, ba, st) {
		return this.dv(ba) * Math.min(gH * bD.bE, st * bD.dt) / bD.cp
	}, this.nO = function(h2) {
		return h2.toFixed(1) + "px"
	}, this.nd = function(h2) {
		return this.kA(h2).toFixed(1) + "px"
	}, this.kA = function(h2) {
		return h2 / bD.cp
	}, this.sv = function(sw) {
		for (var ga = "<ul>", cs = sw.length, a1 = 0; a1 < cs; a1++) ga += "<li>" + sw[a1][0] + ": <a href='" + sw[a1][1] + "' target='_blank'>" + sw[a1][0] + "</a></li>";
		return ga += "</ul>"
	}, this.sx = function(sy) {
		return "<a href='" + sy + "' target='_blank'>" + sy + "</a>"
	}, this.sz = function(cb) {
		navigator.clipboard && navigator.clipboard.writeText(cb.value)
	}, this.hm = function(cb) {
		var bx = cb.textContent;
		r.aI.hM(bx, "✔") || (1 === bx.length ? cb.textContent = "✔" : cb.textContent = bx + " ✔", setTimeout(function() {
			cb.textContent = bx
		}, 500))
	}, this.measureText = function(ga) {
		return cS.measureText(ga).width
	}, this.nP = function(t0) {
		t0.style.overflowX = "auto", t0.style.overflowY = "hidden", t0.style.whiteSpace = "nowrap", t0.addEventListener("wheel", function(cb) {
			Math.abs(cb.deltaY) < Math.abs(cb.deltaX) || (this.scrollLeft += cb.deltaY, this.ne = this.scrollLeft, cb.preventDefault())
		}), t0.addEventListener("scroll", function() {
			this.ne = this.scrollLeft
		})
	}
}

function t1() {
	var b, c, y;

	function t4() {
		var fe;
		1 === q.data.gameMode ? (q.data.teamPlayerCount || (q.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), q.jv.r0()), fe = r.s.s2(q.data.teamPlayerCount, 0), q.data.numberTeams = fe) : (2 === q.data.botDifficultyType && (q
			.data.botDifficultyType = 0), 1 === q.data.spawningType && (q.data.spawningType = 0))
	}

	function h() {
		1 !== q.data.gameMode && (q.data.teamPlayerCount = null), t9(), q.data.canvas = null, n.aB(5, 5)
	}

	function t9() {
		jR.jS.az(), b5.hi.hj(156, jR.tA.tB())
	}

	function t2() {
		q.data.isReplay = 0, t9(), q.jv.tC(), jz.tD(), q.jv.tE(), q.data.canvas = 2 === q.data.mapType ? dR.t6 : null, q.tF(), q.tG = 1
	}

	function tV() {
		t4();
		for (var dC = [tK(), tL(), tM()], a1 = 3; a1 < 6; a1++) n.removeChild(c.tW, c.tX[a1].tY), c.tX[a1] = dC[a1 - 3], c.tW.appendChild(c.tX[a1].tY);
		c.resize()
	}

	function tK() {
		var tZ, a3 = new a4;
		return a3.a5(L(104)), tZ = 0 === q.data.gameMode ? [L(23), L(6)][q.data.colorsType] : q.data.numberTeams + " Team" + (1 === q.data.numberTeams ? "" : "s"), a3.aE(tZ), a3.aK(new hk([new g(L(102), function() {
			n.aB(21)
		}).button])), a3
	}

	function tL() {
		var a3 = new a4,
			dC = (a3.a5(L(0)), [L(3) + ": " + v.w[q.data.botDifficultyValue], L(4), L(5), L(6)]);
		return a3.aE(dC[q.data.botDifficultyType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(25)
		}).button])), a3
	}

	function tM() {
		var a3 = new a4,
			dC = (a3.a5("Spawning"), [L(23), L(24), L(6)]);
		return a3.aE(dC[q.data.spawningType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(24)
		}).button])), a3
	}
	this.show = function() {
		b.show(), this.resize(), b.j.scrollTop = n.b0.b1[0]
	}, this.aL = function() {
		n.b0.b1[0] = b.j.scrollTop, b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f("🔧 " + L(27), [new g("⬅️ " + L(1), h), new g(L(100), t2)]), t4(), q.data.canvas || (2 === q.data.mapType ? q.data.canvas = dR.t6 : 1 === q.data.mapType ? q.data.canvas = dR.t7(dR.t8(q.data), 0).t6 : (q.data.mapType = 0, q.data
		.passableWater = q.data.passableMountains = 1, q.data.canvas = dR.t7(dR.t8(q.data), q.data.mapSeed).t6)), c = new i(b.j, (function(y) {
		var a3 = new a4,
			fr = (a3.a5(L(101)), q.data.canvas);
		fr.style.width = "100%", a3.aK({
			cb: fr
		}), a3.aK(new hk([new g(L(102), function() {
			n.aB(20)
		}).button])), y.push(a3)
	}(y = []), function(y) {
		var a3 = new a4;
		a3.a5(L(8)), a3.aK(new hZ({
			a9: -1,
			value: q.data.playerCount
		}, 1, 0, function(cb) {
			var playerCount = hA.hB(Math.floor(cb.target.value), 1, 512);
			cb.target.value = q.data.playerCount = playerCount, 1 === q.data.gameMode && (cb = r.s.s2(q.data.teamPlayerCount, 0), q.jv.r0(), r.s.s2(q.data.teamPlayerCount, 0) !== cb) && tV()
		})), y.push(a3)
	}(y), function(y) {
		var a3 = new a4;
		a3.a5(L(103)), a3.a7(new a8({
			a6: ["Battle Royale", "Teams"],
			value: q.data.gameMode
		}, function(a9) {
			q.data.gameMode !== a9 && (1 === (q.data.gameMode = a9) && (q.data.colorsData || (q.data.colorsData = new Uint32Array(1)), q.data.colorsData[0] = 258049), tV())
		})), y.push(a3)
	}(y), y.push(tK()), y.push(tL()), y.push(tM()), function(y) {
		var a3 = new a4,
			dC = (a3.a5(L(105)), [L(106), L(107), L(6)]);
		a3.aE(dC[q.data.playerNamesType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(23)
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3 = new a4,
			dC = (a3.a5(L(108)), [L(109), L(3) + ": " + q.data.aIncomeValue, L(6)]);
		a3.aE(dC[q.data.aIncomeType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(22)
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3 = new a4,
			dC = (a3.a5(L(110)), [L(109), L(3) + ": " + q.data.tIncomeValue, L(6)]);
		a3.aE(dC[q.data.tIncomeType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(26)
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3 = new a4,
			dC = (a3.a5(L(111)), [L(109), L(3) + ": " + q.data.iIncomeValue, L(6)]);
		a3.aE(dC[q.data.iIncomeType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(27)
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3 = new a4,
			dC = (a3.a5(L(112)), [L(109), L(3) + ": " + q.data.sResourcesValue, L(6)]);
		a3.aE(dC[q.data.sResourcesType]), a3.aK(new hk([new g(L(102), function() {
			n.aB(28)
		}).button])), y.push(a3)
	}(y), function(y) {
		var a3 = new a4;
		a3.a5(L(113)), a3.aK(new hk([new g(L(114), function() {
			n.ta(), q.jv.jw(), n.b0.b1[0] = 0, n.aB(19)
		}).button])), a3.aK(new hk([new g(L(115), function() {
			tb.tc()
		}).button])), a3.aK(new hk([new g(L(116), function() {
			return tb.td(), !0
		}).button])), y.push(a3)
	}(y), y))
}

function te() {
	this.tf = new tg, this.th = new ti, this.turnstile = new tj, this.az = function() {
		b2.b3.tk(), this.turnstile.az()
	}, this.tl = function() {
		return b5.buffer.data[160].value
	}
}

function g(tm, tn, tp, tq, tr) {
	var self, ts = document.createElement("button");

	function tw() {
		var u2;
		c9.lz() || (u2 = r.color.u3(tp), !1 !== tq && 0 < u2[0] && u2[0] < 255 && u2[0] === u2[1] && u2[0] === u2[2]) || (128 < u2[0] && 128 < u2[1] && 128 < u2[2] ? ts.style.backgroundColor = r.color.u4(tp, -50) : ts.style.backgroundColor = r.color
			.u4(tp, u2[3] && u2[3] < 120 ? 150 : 50))
	}

	function tv() {
		if (tq) {
			var u2 = r.color.u3(tp);
			if (u2[0] === u2[1] && u2[0] === u2[2]) return
		}
		tn && ((u2 = tn(this)) ? 2 === u2 && tw() : u6(this))
	}

	function ty() {
		this.style.backgroundColor = tp
	}

	function tx() {
		u6(this)
	}

	function u6(gM) {
		gM.style.backgroundColor = tp, gM.blur()
	}
	this.button = ts, this.aP = tn, this.tt = tp, this.tu = function(tz) {
		tz = 1.1 - Math.min(.01 * tm.length, .6) + .2 * tz;
		ts.style.fontSize = tz.toFixed(1) + "em"
	}, this.hg = function(aN) {
		aN ? 1 === aN ? aN = bO.u1 : 2 === aN && (tq = 1, aN = bO.u1) : (tq = 0, aN = bO.bR), this.tt = tp = aN, ts.style.backgroundColor = aN
	}, self = this, ts.innerHTML = tm, ts.style.color = tr ? bO.hh : bO.bX, ts.style.userSelect = "none", ts.style.outline = "none", ts.style.overflowWrap = "break-word", self.hg(tp), ts.style.border = "none", ts.style.font = "inherit", self.tu(
		0), ts.style.padding = "0em 0.3em", ts.onclick = tv, ts.addEventListener("mouseover", tw), ts.addEventListener("mouseout", tx), ts.addEventListener("focus", tw), ts.addEventListener("blur", ty)
}

function u7() {
	function uC(nu, f9, fC) {
		for (var gI = Math.min(f9, fC), bz = Math.max(f9, fC), bp = gI + 1; bp < bz; bp++)
			if (!eb.uF(f7.oI(nu, bp))) return;
		return 1
	}

	function uD(nw, f6, fB) {
		for (var gI = Math.min(f6, fB), bz = Math.max(f6, fB), c4 = gI + 1; c4 < bz; c4++)
			if (!eb.uF(f7.oI(c4, nw))) return;
		return 1
	}

	function uE(f6, f9, fB, fC, u8, u9) {
		for (var cs = Math.min(Math.abs(fB - f6), Math.abs(fC - f9)), ex = Math.sign(fB - f6), ey = Math.sign(fC - f9), a1 = 0; a1 < cs; a1++)
			if (!eb.uF(f7.oI(f6 += ex, f9 += ey))) return null;
		return f6 === fB ? uC(f6, f9, fC) ? new Uint32Array([u8, f7.uG(f6, f9), u9]) : null : uD(f9, f6, fB) ? new Uint32Array([u8, f7.uG(f6, f9), u9]) : null
	}
	this.ra = function(u8, u9) {
		u8 = function(u8, u9) {
			var f6 = f7.nv(u8),
				f9 = f7.nx(u8),
				fB = f7.nv(u9),
				fC = f7.nx(u9);
			if (f6 === fB) {
				if (uC(f6, f9, fC)) return new Uint32Array([u8, u9])
			} else {
				if (f9 !== fC) return uE(f6, f9, fB, fC, u8, u9) || uE(fB, fC, f6, f9, u8, u9);
				if (uD(f9, f6, fB)) return new Uint32Array([u8, u9])
			}
			return null
		}(u8, u9);
		return null === u8 ? -1 : il.rk.uB(u8)
	}
}

function uH() {
	function uM(cb) {
		ud(cb), n.aB(4, 5, new uT("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new g("⬅️ " + L(1), function() {
				n.p()
			}), new g("🔄 Reload", function() {
				b2.b3.uf()
			}, bO.ug)]))
	}

	function ua(cb) {
		ud(cb), n.aB(4, 5, new uT(L(117), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [cb] ?? uU(cb), !0))
	}

	function uU(cb) {
		var ga = " [" + cb + "]";
		return 3249 === cb || 1006 === cb ? "No Internet / No Server Response / Server Restart" + ga : 4527 === cb ? "Player already in lobby" + ga : 4577 === cb ? "Your IP is banned." + ga : 4530 === cb ? "Lobby Timeout" + ga : 4528 === cb ?
			"Lobby Kick: Another login detected." + ga : 4540 === cb ? "You have been kicked." + ga : 4495 === cb ? "Account doesn't exist." : 4229 === cb ? "Bad Internet / Unresponsive Client" + ga : 4555 === cb ? "This Account is blocked." + ga :
			4580 === cb ? "More Gold needed" + ga : 4557 <= cb && cb <= 4560 || 4589 == cb ? "Please try again later!" + ga : 4591 === cb ? "The algo determined you are a bot." + ga : "Unknown error" + ga
	}

	function ud(cb) {
		uQ(cb), n.b0.uh()
	}

	function uQ(cb) {
		4540 === cb && hW.b0.ui(cb);
		var uV = jz.si();
		uj.close(), 6 === uV ? hW.b0.ui(cb) : uN.uO ? (n.ta(), uN.ln(), hW.b0.close(hW.b0.uP, 3256)) : 8 === uV && q.me(!0)
	}
	this.uI = [], this.uJ = function(uK, cb) {
		if (1 === uK && __fx.customLobby.isActive() && 6 !== jz.si() && __fx.customLobby.setActive(!1), this.uI.push(cb), 4321 === cb && (data = b5.b0.uL(0), console.log("Reset to: " + data.hp), b5.hi.hj(105, data.hp), b5.hi.hj(106, data
				.password)), 8 === n.go && 0 === uK)
			if (4211 === cb) uM(cb);
			else {
				if (uN.uO && (4495 === cb || 4480 === cb) && hW.b0.uP !== uK) return void n.p();
				if (8 !== jz.si() && uQ(), 4480 === cb) return b5.hi.ue(), void n.aB(4, 0, new uT(L(119), L(120), !0));
				var data = 0;
				n.gp() && 10 === n.gp().ot && (data = n.gp().ot), n.aB(4, data, new uT(L(117), uU(cb), !0))
			}
		else {
			data = jz.si();
			if (6 === data) {
				if (4211 === cb) return void uM(cb);
				if (4215 !== cb && 4516 !== cb && 4527 !== cb && 4533 !== cb && 4528 !== cb && !(4557 <= cb && cb <= 4560) && 4577 !== cb && 4576 !== cb) return void uW.uX(uK)
			} else if (uN.uO) {
				if (uK !== hW.b0.uP) return
			} else {
				if (8 === data) return void(uK !== hW.b0.uY || q.cK || 1 !== q.cf || q.cL || g5.jb(L(118, [cb])));
				if (!(4579 <= cb && cb <= 4589)) return
			}(4591 === cb ? function(cb) {
				ud(cb), n.aB(4, 5, new uT("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new g("⬅️ " + L(1), function() {
					n.p()
				}), new g("🔄 Reload", function() {
					b2.b3.uf()
				}, bO.ug)]))
			} : ua)(cb)
		}
	}, this.ub = function(cb) {
		this.uI.push(cb), 8 === jz.si() ? q.cK || 1 !== q.cf || g5.jb(L(118, [cb])) : ua(cb)
	}, this.uc = function() {
		this.uI.push(3268), ud(3268)
	}
}

function sK() {
	this.uk = function() {
		for (var cy, cs = ct.cu, cv = ct.cw, ul = b7.ul, pV = this.um(), a1 = 0; a1 < cs; a1++) cy = cv[a1], r.cz.fO(cy) || (ul[cy] = pV);
		var un = b7.un,
			uo = b7.uo,
			up = b7.up,
			uq = b7.uq,
			cs = q.bq;
		for (a1 = 0; a1 < cs; a1++)(0 === uq[a1] || up[a1] < 1 || 2 * un[a1] > 3 * (uo[a1] + up[a1])) && (ul[a1] = 0);
		var ur = 0;
		for (a1 = 0; a1 < cs; a1++) ur += 0 < ul[a1];
		return ur
	}, this.um = function() {
		return Math.min(65535, bL.bM())
	}
}

function us() {
	this.b0 = new ut, this.go = 0;
	var uu = new Array(32);

	function ux() {
		for (var cs = uu.length, a1 = 0; a1 < cs; a1++) uu[a1] = null
	}
	this.az = function() {
		for (var uv, uw = document.body.firstChild; uw;) uv = uw.nextSibling, !document.body.contains(uw) || "DIV" !== uw.tagName && "INPUT" !== uw.tagName && "BUTTON" !== uw.tagName || n.removeChild(document.body, uw), uw = uv
	}, this.aB = function(a9, ot, gd) {
		void 0 === ot && (ot = this.go), bL.cC = !0, 0 === a9 && (0 === jz.si() ? a9 = 5 : b2.b3.setState(13)), this.aL(), this.go === a9 && (ot = uu[a9].ot, uu[a9] = null), this.go = a9;
		var jP = uu[a9];
		if (!jP || 4 === a9 || 7 === a9 || 8 === a9 || 9 === a9 || 10 === a9 || 11 === a9 || 13 === a9 || 15 === a9 || 18 === a9 || 20 <= a9 && a9 <= 28 || 32 === a9 || 33 === a9) {
			if (0 === a9) return void ux();
			1 === a9 ? jP = new uy : 2 === a9 ? jP = new uz : 3 === a9 ? jP = new v0 : 4 === a9 || 9 === a9 || 10 === a9 || 11 === a9 || 13 === a9 || 33 === a9 ? jP = gd : 5 === a9 ? jP = new jh : 6 === a9 ? jP = new v1 : 7 === a9 ? jP = new v2(n
					.b0.v3) : 8 === a9 ? jP = gd : 12 === a9 ? jP = new v4 : 14 === a9 ? jP = new v5 : 15 === a9 ? jP = new v2(n.b0.v6) : 16 === a9 ? jP = new v7 : 17 === a9 ? jP = new kK : 18 === a9 ? jP = new hR : 19 === a9 ? jP = new t1 :
				20 === a9 ? jP = new v8 : 21 === a9 ? jP = new v9 : 22 === a9 ? jP = new vA : 23 === a9 ? jP = new vB : 24 === a9 ? jP = new io : 25 === a9 ? jP = new a : 26 === a9 ? jP = new vC : 27 === a9 ? jP = new vD : 28 === a9 ? jP =
				new vE : 29 === a9 ? jP = new vF : 30 === a9 ? jP = new vG : 31 === a9 ? jP = new vH : 32 === a9 && (jP = new iJ), jP.ot = ot, uu[a9] = jP
		}
		jP.show(gd)
	}, this.p = function() {
		this.l2() && this.vI(this.gp().ot)
	}, this.vI = function(a9) {
		this.l2() && (uu[a9] ? (this.aL(), bL.cC = !0, this.go = a9, uu[a9].show()) : this.aB(a9))
	}, this.aL = function() {
		this.l2() && uu[this.go].aL()
	}, this.ta = function() {
		this.l2() && (uu[this.go].aL(), ux(), this.go = 0, b2.b3.setState(13))
	}, this.cR = function() {
		var jP;
		this.l2() && (jP = uu[this.go]).cR && jP.cR()
	}, this.resize = function() {
		if (!this.l2()) return !1;
		uu[this.go].resize()
	}, this.c3 = function(c4, bp) {
		var jP;
		this.l2() && (jP = uu[this.go]).c3 && jP.c3(c4, bp)
	}, this.cF = function(c4, bp) {
		var jP;
		this.l2() && (jP = uu[this.go]).cF && jP.cF(c4, bp)
	}, this.vJ = function() {
		var jP;
		this.l2() && (jP = uu[this.go]).vJ && jP.vJ()
	}, this.cO = function(f1, f2, deltaY) {
		var jP;
		this.l2() && (jP = uu[this.go]).cO && jP.cO(f1, f2, deltaY)
	}, this.aM = function(code) {
		var jP;
		return !!this.l2() && ((jP = uu[this.go]).aM && jP.aM(code), !0)
	}, this.bs = function() {
		var jP;
		this.l2() && (jP = uu[this.go]) && jP.bs && jP.bs()
	}, this.l2 = function() {
		return 0 < this.go
	}, this.gp = function() {
		return uu[this.go]
	}, this.vK = function(a9) {
		return uu[a9]
	}, this.o = function() {
		return uu
	}, this.removeChild = function(vL, t0) {
		try {
			vL.removeChild(t0)
		} catch (cb) {
			console.log("removeChild error " + cb)
		}
	}
}

function vM() {
	var qS, du, vN, vO, vP, vQ, vR, vS, vT;

	function pH() {
		return mS.pm(g5.pn()) ? gv.l2 ? __fx.settings.keybindButtons ? mS.bp - 2 * mS.du - 3 * vN : mS.bp - mS.du - 2 * vN : __fx.settings.keybindButtons ? mS.bp - mS.du - 2 * vN : mS.bp - vN : j1.pm(g5.po()) ? gv.l2 ? j1.pH() - mS.du - 2 * vN : j1
			.pH() - vN : gv.l2 ? bD.du - mS.du - (pp.pq() + 1) * vN : bD.du - pp.pq() * bY.gap
	}

	function vb(bx, ga, id, cy, ve, vf, vg, vh, vi, vj, vt) {
		var a1, b9, fr, vu, vv = void 0 !== vi,
			dt = Math.floor(l9.measureText(ga, g5.mO) + 1.5 * vO + (vv ? du : 1.5 * vO));
		if (bL.cC = !0, vt || vw.pa(ga, vi), dt + 2 * vN + mS.du > bD.dt && !vv && 50 !== id && 20 < ga.length) vb(bx, (vt = r.aI.hG(ga))[0], id, cy, ve, vf, vg, vh, vi, vj, !0), vb(bx, vt[1], id, cy, ve, vf, vg, vh, vi, vj, !0);
		else if (vt = dt + (50 === id ? vP : 0), (fr = document.createElement("canvas")).width = dt, fr.height = du, (b9 = fr.getContext("2d", {
				alpha: !0
			})).font = g5.mO, r.bF.textBaseline(b9, 1), r.bF.textAlign(b9, 0), b9.clearRect(0, 0, dt, du), b9.fillStyle = vf, b9.fillRect(0, 0, dt, du), b9.fillStyle = ve, b9.fillText(ga, Math.floor(1.5 * vO), Math.floor(du / 2)), vv && (b9
				.imageSmoothingEnabled = !0, et.fm.vx(vi, b9, dt - du, 0, du)), 0 === (vu = {
				c8: bx,
				ga: ga,
				id: id,
				player: cy,
				canvas: fr,
				ve: ve,
				vf: vf,
				dt: dt,
				vl: vt,
				vg: vg,
				vh: vh,
				vi: vi,
				vj: vj
			}).c8 || 0 < qS.length && 0 < qS[0].c8) qS.unshift(vu);
		else {
			for (a1 = 1; a1 < qS.length; a1++)
				if (0 < qS[a1].c8) return void qS.splice(a1, 0, vu);
			qS.push(vu)
		}
	}

	function vc(n1, nb, fv) {
		return "rgb(" + n1 + "," + nb + "," + fv + ")"
	}

	function vy(id, fe) {
		for (var cs = qS.length, a1 = 0; a1 < cs; a1++) qS[a1].id === id && fe-- <= 0 && (qS.splice(a1, 1), a1--, cs--)
	}

	function vz(id, player) {
		for (var wa = !1, a1 = qS.length - 1; 0 <= a1; a1--) qS[a1].id !== id || player !== q.aA && qS[a1].player !== player || (qS.splice(a1, 1), wa = !0);
		return wa
	}

	function wg(ga) {
		vb(340, ga, 6, 0, vc(215, 245, 255), bO.lC, -1, !1)
	}
	this.vU = "", this.az = function() {
		var self;
		vS = 0, vR = b2.b3.b4() ? 7 : 12, vQ = {
			cv: [0, 0, 0],
			vV: [0, 0, 0],
			qm: [220, 180, 180],
			vW: [0, 0, 0],
			aN: [0, 0, 0]
		}, qS = [], this.resize(), q.cJ && this.vX(0, 18), dR.qe.qf[dR.qg].name.length && wg(L(161, [dR.qe.qf[dR.qg].name])), dR.qe.qf[dR.qg].wh && wg(L(162, [dR.qe.qf[dR.qg].wh])), wg(L(163, [dR.dS - 2 + "x" + (dR.dT - 2)])), wg(L(164, [r.aI
			.eh(wi.pE)
		])), wi.pE !== wi.wj && wg(L(165, [r.aI.eh(wi.wj) + " (" + r.aI.h7(100 * wi.wj / wi.pE, 1) + ")"])), 0 < wi.wk && wg(L(141, [r.aI.eh(wi.wk) + " (" + r.aI.h7(100 * wi.wk / wi.pE, 1) + ")"])), 0 < wi.wl && wg(L(166, [r.aI.eh(wi.wl) +
			" (" + r.aI.h7(100 * wi.wl / wi.pE, 1) + ")"
		])), 10 === q.eU && vb(120, L(167), 6, 0, vc(235, 255, 120), bO.lC, -1, !1), 0 !== (self = this).vU.length && (vb(200, self.vU, 0, 0, bO.bX, bO.lC, -1, !1), self.vU = ""), q.va && vb(340, L(121), 6, 0, vc(255, 200, 0), bO.lC, -1, !1)
	}, this.resize = function() {
		var vd, a1;
		if (du = (du = Math.floor((b2.b3.b4() ? .031 : .0249) * bD.bE)) < 10 ? 10 : du, this.fontSize = Math.floor(2 * du / 3), this.mO = r.bF.bG(1, this.fontSize), vN = bY.gap, vO = Math.floor(du / 5), 0 < qS.length)
			for (vd = qS, qS = [], a1 = vd.length - 1; 0 <= a1; a1--) vb(vd[a1].c8, vd[a1].ga, vd[a1].id, vd[a1].player, vd[a1].ve, vd[a1].vf, vd[a1].vg, vd[a1].vh, vd[a1].vi, vd[a1].vj, !0);
		this.vk()
	}, this.vk = function() {
		vT = document.createElement("canvas");
		var ga = L(122),
			b9 = (vP = l9.measureText(ga, this.mO) + 5 * vO, vT.height = du, vT.width = vP, vT.getContext("2d", {
				alpha: !0
			}));
		b9.font = this.mO, r.bF.textBaseline(b9, 1), r.bF.textAlign(b9, 1), b9.clearRect(0, 0, vP, du), b9.fillStyle = bO.ug, b9.fillRect(0, 0, vP, du), b9.fillStyle = bO.bX, b9.fillText(ga, Math.floor(vP / 2), Math.floor(du / 2))
	}, this.pn = function() {
		var cs;
		return gv.l2 ? gv.dt : 0 === (cs = qS.length) ? 0 : 1 === cs ? qS[0].vl : ml(qS[0].vl, qS[1].vl)
	}, this.po = function() {
		var cs = qS.length;
		return gv.l2 ? cs ? ml(gv.dt, qS[0].vl) : gv.dt : 0 === cs ? 0 : 1 === cs ? qS[0].vl : 2 === cs ? ml(qS[0].vl, qS[1].vl) : ml(ml(qS[0].vl, qS[1].vl), qS[2].vl)
	}, this.c3 = function(c4, bp) {
		for (var cU, vm, vn = pH(), a1 = qS.length - 1; 0 <= a1; a1--)
			if ((vm = vn - (a1 + 1) * du) <= bp && bp < vm + du) return 50 === qS[a1].id ? c4 >= bD.dt - vP - vN - qS[a1].dt && (c4 >= bD.dt - vP - vN ? jd.cz.vo(qS[a1].player) : cM.cN(qS[a1].player, 800, !1, 0), !0) : c4 >= bD.dt - qS[a1].dt -
				vN && (736 === qS[a1].id ? window.open("https://" + qS[a1].ga, "_blank") : qS[a1].vh && (qS[a1].vj && qS[a1].vj.bN ? (vm = qS[a1].vj.oN, cU = f7.nv(vm) - 10, vm = f7.nx(vm) - 10, cM.vp(cU, vm, 19 + cU, 19 + vm)) : qS[a1].vj &&
					qS[a1].vj.fv ? cM.vq(qS[a1].player, qS[a1].vj.rF) : (cM.cN(qS[a1].player, 800, !1, 0), 0 <= qS[a1].vg && (cU = qS[a1].vg, qS[a1].vg = qS[a1].player, qS[a1].player = cU))), !0);
		return !1
	}, this.pa = function(bx, ga, id, cy, ve, vf, vg, vh, vi, vj) {
		vb(bx, ga, id, cy, ve, vf, vg, vh, vi, vj)
	}, this.vr = function(vs) {
		vb(300, vs, 252, 0, bO.bX, bO.lC, -1, !1)
	}, this.pS = function(id) {
		for (var a1 = qS.length - 1; 0 <= a1; a1--) qS[a1].id === id && (qS[a1].c8 = 1)
	}, this.vX = function(player, id) {
		0 === id ? (l9.qi(player, 0), vy(423, 2), vb(160, L(123, [b7.b8[player]]), 423, player, "rgb(10,220,10)", bO.lC, -1, !1)) : 1 === id ? (vz(50, q.aA), l9.qi(player, 1), vb(360, L(124, [b7.b8[player]]), 0, player, bO.w0, bO.lC, -1, !0), cM
			.cN(player, 2700, !1, 0)) : 2 === id ? (l9.qi(player, 2), vb(0, L(125), 0, player, "rgb(10,255,255)", bO.lC, -1, !0), cM.cN(player, 2700, !1, 0)) : 3 === id ? (l9.qi(player, 2), vb(0, L(126, [b7.b8[player]]), 0, player, bO.bX, bO
			.lC, -1, !0), cM.cN(player, 2700, !1, 0)) : 4 === id ? this.w1(1, player, player) : 5 === id ? r.cz.fO(q.bS) || (function(id, wK) {
			var a1, wL = 0,
				cs = qS.length;
			for (a1 = 0; a1 < cs; a1++)
				if (qS[a1].id === id && wK <= ++wL) return qS.splice(a1, 1)
		}(1, 5), ez.g4(player) && vb(180, L(127, [b7.b8[player]]), 1, player, vc(255, 200, 180), bO.lC, -1, !0), r.cz.w3(player, 10) && (vy(573, 0), vb(180, L(128, [b7.b8[player]]), 573, player, bO.w0, bO.lC, -1, !0))) : 18 === id ? vb(255,
			L(129), 18, 0, bO.bX, bO.lC, -1, !1) : 21 === id ? vb(220, L(130), id, 0, bO.bX, bO.lC, -1, !1) : 22 === id ? this.w1(2, player, player) : 59 === id && vb(0, L(131), id, 0, bO.w4, bO.lC, 0, !1)
	}, this.jb = function(vs) {
		vb(200, L(132, [vs]), 94, 0, bO.bX, bO.w5, -1, !1)
	}, this.w6 = function(w7) {
		if (q.bS === w7 && !q.cK && !q.cL)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			vb(0, "Your Win Count is now " + __fx.wins.count, 3, w7, bO.bX, bO.lC, -1, !0);
		b7.br[w7] && (l9.qi(w7, 2), q.bq < 100 ? vb(0, L(126, [b7.b8[w7]]), 3, w7, bO.bX, bO.lC, -1, !0) : vb(0, L(133, [b7.b8[w7]]), 3, w7, bO.bX, bO.lC, -1, !0))
	}, this.w8 = function(gF) {
		var ga, wC, lU = "(" + f7.nv(gF >> 2) + ", " + f7.nx(gF >> 2) + ")",
			vh = !1,
			player = 0;
		eb.w9(gF) ? eb.wA(gF) ? lU = L(134, [lU]) : (player = eb.wB(gF), q.cL && !1 === __fx.hoveringTooltip.active && (q.bS = player), ga = L(135, [r.b9.bA(b7.bB[player], r.bF.bG(0, 10), 150)]) + "   ", ga = (ga += L(136, [r.aI.eh(b7.di[
			player])]) + "   ") + L(137, [r.aI.eh(b7.br[player])]) + "   ", q.bf && (wC = aC.aD[aC.d2[aC.wD[player]]], ga += L(7) + ": " + wC + "   "), r.cz.fO(player) && (ga += L(0) + ": " + v.w[v.dn[player]] + "   "), lU = ga = (ga +=
			L(138, [player]) + "   ") + L(139, [lU]), vh = !0) : lU = eb.wE(gF) ? L(140, [lU]) + "   #" + eb.np(gF) : L(141, [lU]), vy(55, 0), vb(220, lU, 55, player, bO.bX, bO.lC, -1, vh, void 0, void 0, !0)
	}, this.wF = function(wG) {
		var jP = il.b0,
			player = jP.rS[wG] >> 3,
			ga = (bL.cC = !0, vy(55, 0), L(142, [b7.b8[player]]) + "   ");
		vb(220, ga += L(136, [r.aI.eh(jP.wH[wG])]), 55, player, bO.bX, bO.lC, -1, !0)
	}, this.wI = function(kU, kf, fj) {
		kU === q.bS ? vb(175, " " + L(143, [b7.b8[kf]]) + ": ", 1001, kf, vc(200, 255, 210), bO.lC, -1, !0, fj) : this.wJ(kU, fj)
	}, this.wJ = function(kU, fj) {
		vy(1e3, 0), vb(175, b7.b8[kU] + ": ", 1e3, kU, bO.bX, "rgba(5,60,25,0.9)", -1, !0, fj)
	}, this.wM = function() {
		var vs;
		q.wN ? (vs = L(144), l9.qd(L(145), 2, 1, 12), vb(0, vs, 40, 0, "rgb(10,220,10)", bO.lC, -1, !1)) : (vs = L(146), l9.qd(L(147), 2, 0, 16), vb(0, vs, 41, 0, bO.bX, bO.lC, -1, !1))
	}, this.wO = function() {
		var fe = b7.b8,
			gM = q.data;
		vb(300, fe[0] + " [" + q.wP.wQ(gM.elo[0]) + "] vs " + fe[1] + " [" + q.wP.wQ(gM.elo[1]) + "]", 65, 0, bO.nW, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wR = function(vs) {
		vb(350, vs, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.pT = function(p3) {
		vb(0, L(p3 ? 148 : 149), 247, 0, bO.hh, bO.lC, -1, !1)
	}, this.wS = function(wT, wU, wV) {
		var gM = q.data,
			fe = b7.b8;
		vb(0, fe[0] + ": " + q.wP.wQ(gM.elo[0]) + " -> " + wT, 66, 0, bO.bX, wV[0], -1, !1), vb(0, fe[1] + ": " + q.wP.wQ(gM.elo[1]) + " -> " + wU, 66, 1, bO.bX, wV[1], -1, !1)
	}, this.wW = function(player, id) {
		0 === id ? vz(50, player) ? (vb(128, L(150, [b7.b8[player]]), 52, player, vc(180, 255, 180), bO.lC, -1, !0), ez.eq(player, 2, 255)) : vb(384, L(151, [b7.b8[player]]), 51, player, vc(210, 210, 255), bO.lC, -1, !0) : vz(51, player) ? (vb(
			128, L(152, [b7.b8[player]]), 52, player, bO.bX, "rgba(60,120,10,0.9)", -1, !0), ez.eq(player, 2, 255)) : (vb(384, L(153, [b7.b8[player]]), 50, player, bO.bX, "rgba(90,90,90,0.9)", -1, !0), ez.eq(player, 2, 96))
	}, this.wX = function(cv, target) {
		var color = vc(210, 255, 210);
		1 < cv.length ? vb(230, L(154, [cv.length, b7.b8[target]]), 66, target, color, bO.lC, -1, !0) : vb(230, L(155, [b7.b8[cv[0]], b7.b8[target]]), 66, cv[0], color, bO.lC, target, !0)
	}, this.wY = function(player, target) {
		vb(230, L(156, [b7.b8[player], b7.b8[target]]), 66, player, bO.bX, "rgba(75,65,5,0.9)", target, !0)
	}, this.wZ = function(id, fe) {
		vy(id, fe)
	}, this.g6 = function(id, player) {
		vz(id, void 0 === player ? q.aA : player)
	}, this.wb = function(id) {
		for (var a1 = qS.length - 1; 0 <= a1; a1--)
			if (qS[a1].id === id) return qS[a1];
		return null
	}, this.wc = function(ea, wd, player) {
		2 !== b7.bo[q.bS] && vb(200, 1 === ea ? L(157, [b7.b8[player]]) : L(158, [r.aI.eh(ea), b7.b8[player]]), 30, player, "rgb(190,255,190)", bO.lC, -1, !0)
	}, this.wf = function(ea, player) {
		2 !== b7.bo[q.bS] && (vy(31, 0), ea = " (" + r.aI.eh(ea) + ") 💸", vb(150, ea = r.cz.fO(player) ? L(159) + ea : L(160, [b7.b8[player]]) + ea, 31, player, bO.nW, "rgba(205,205,205,0.9)", -1, !0))
	}, this.wm = function(bJ) {
		for (var aN = bL.bM(), a1 = 2; 0 <= a1; a1--) 0 < vQ.vW[a1] && (bJ || vQ.aN[a1] < aN - 220) && this.wn(a1)
	}, this.wn = function(id) {
		var ga, cs = vQ.vW[id],
			player = vQ.cv[id];
		vQ.vW[id] = 0, 1 === cs ? (0 === id ? ga = L(168, [b7.b8[player], b7.b8[vQ.vV[0]]]) : 1 === id ? ga = L(169, [b7.b8[player]]) : 2 === id ? ga = L(170, [b7.b8[player]]) : 3 === id && (ga = L(171, [b7.b8[player]])), vy(7, 0), vb(vQ.qm[id],
			ga, 7, vQ.vV[id], bO.bX, bO.lC, -1, !0)) : (ga = L(0 === id ? 172 : 1 === id ? 173 : 174, [cs]), vy(7, 0), vb(vQ.qm[id], ga, 7, player, bO.bX, bO.lC, -1, !1))
	}, this.w1 = function(id, wo, vg) {
		var aN = bL.bM(),
			cs = vQ.vW[id] + 1;
		vQ.vW[id]++, vQ.cv[id] = wo, vQ.vV[id] = vg, 1 === cs && (vQ.aN[id] = aN), (1 === cs && (q.wp < 32 || 2 === q.cf) || 1 < cs && (vQ.aN[id] < aN - 140 || 2 === q.cf)) && this.wn(id)
	}, this.bs = function() {
		wq.bs();
		for (var os = (os = qS.length - vR) <= 1 ? 1 : os * os, a1 = qS.length - 1; 0 <= a1; a1--) 0 < qS[a1].c8 && (qS[a1].c8 -= os, qS[a1].c8 <= 0) && (bL.cC = !0, qS.splice(a1, 1));
		! function() {
			var fe, a1;
			if (128 !== vS && !(++vS < 128))
				for (fe = 5, a1 = ct.cu - 1; 0 <= a1; a1--) 1 === b7.bo[ct.cw[a1]] && 0 < fe-- && vb(240, L(171, [b7.b8[ct.cw[a1]]]), 1, ct.cw[a1], bO.nW, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.wm(!1)
	}, this.cR = function() {
		for (var fc, bp = pH(), a1 = qS.length - 1; 0 <= a1; a1--) fc = bp - (a1 + 1) * du, 50 === qS[a1].id ? (cS.drawImage(qS[a1].canvas, bD.dt - qS[a1].dt - vP - vN, fc), cS.drawImage(vT, bD.dt - vP - vN, fc)) : cS.drawImage(qS[a1].canvas, bD
			.dt - qS[a1].dt - vN, fc)
	}, this.ws = function(id, dn) {
		var lU, wt = bO.wu;
		0 === id ? lU = L(175) : 1 === id ? (lU = L(176), wt = bO.wv) : 2 === id ? lU = L(177) : 3 === id ? lU = L(178) : (lU = r.aI.eh(dn), wt = 5 === id ? bO.wv : bO.lC), vy(74, 0), vb(0, lU, 74, 0, bO.bX, wt, -1, !1, void 0, void 0, !0)
	}
}

function ke() {
	this.ww = function(i1, ii, ik) {
		hy.wx(75), hy.wy(1, 0), hy.wy(6, 21), hy.wy(6, i1), hy.wy(1, +(ii < 0)), hy.wy(1, +(ik < 0)), hy.wy(30, Math.abs(ii)), hy.wy(30, Math.abs(ik)), hW.b0.send(0, hy.mH)
	}, this.wz = function(i1, x0, x1) {
		hy.wx(18 + 16 * x0.length + 30), hy.wy(1, 0), hy.wy(6, 22), hy.wy(6, i1), hW.kY.x2(x0), hy.wy(30, x1), hW.b0.send(0, hy.mH)
	}, this.x3 = function(i1, x0, x1) {
		hy.wx(73), hy.wy(1, 0), hy.wy(6, 28), hy.wy(6, i1), i3.oi.x4(x0, 5), hy.wy(30, x1), hW.b0.send(0, hy.mH)
	}, this.x5 = function(x6, x7) {
		for (var cs = x7.length, i8 = 0, a1 = 0; a1 < cs; a1++) i8 += x7[a1].length;
		for (hy.wx(21 + 3 * cs + 16 * i8), hy.wy(1, 0), hy.wy(6, 23), hy.wy(3, x6), hy.wy(4, cs), hy.wy(7, i8), a1 = 0; a1 < cs; a1++) hy.wy(3, x7[a1].length), oh.iA.x8(x7[a1]);
		hW.b0.send(0, hy.mH)
	}, this.x9 = function(x6, ii, ik) {
		hy.wx(52), hy.wy(1, 0), hy.wy(6, 24), hy.wy(3, x6), hy.wy(1, +(ii < 0)), hy.wy(1, +(ik < 0)), hy.wy(20, Math.abs(ii)), hy.wy(20, Math.abs(ik)), hW.b0.send(0, hy.mH)
	}
}

function xA(xB) {
	var xC = document.createElement("div");

	function tw() {
		c9.lz() || (xC.style.backgroundColor = r.color.u4(bO.bR, 50))
	}

	function tx() {
		xC.style.backgroundColor = bO.bR
	}
	this.hj = function(xD) {
			xC.textContent = xD
		}, this.show = function() {
			document.body.appendChild(xC)
		}, this.resize = function() {
			var du = r.bF.oV(.03, .5);
			xC.style.width = 2 * du + "px", xC.style.height = du + "px", xC.style.font = r.bF.bG(1, .75 * du), r.bF.kB(xC, 4), r.bF.kB(xC, 2)
		}, this.ln = function() {
			xC.onclick = null, xC.onmouseover = null, xC.onmouseout = null, n.removeChild(document.body, xC), xC = null
		}, xC.style.position = "absolute", tx(), xC.style.color = bO.bX, xC.style.zIndex = "3", xC.style.right = "0", xC.style.top = "0", xC.style.display = "flex", xC.style.justifyContent = "center", xC.style.alignItems = "center", xC.style
		.userSelect = "none", xC.style.outline = "none", xC.onclick = xB, xC.onmouseover = tw, xC.onmouseout = tx
}

function xI() {
	(xE = void 0 === xE ? document.createElement("canvas") : xE).width = dR.dS, xE.height = dR.dT, xG = xE.getContext("2d", {
		alpha: !0
	}), xH = xF = null, xH = xG.getImageData(0, 0, dR.dS, dR.dT), xF = xH.data, r.s.rr(xF)
}

function xJ() {
	this.xK = [L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194)];
	var xL = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.xM = new Array(xL.length), this.az = function() {
		var dC = b5.buffer.data[155].value.split(";"),
			jP = dC.length;
		if (function() {
				for (var cs = xL.length, a1 = 0; a1 < cs; a1++) xO.xM[a1] = xL[a1]
			}(), !(jP > xL.length))
			for (var a1 = 0; a1 < jP; a1++) dC[a1].length && (this.xM[a1] = dC[a1])
	}, this.xP = function(a9, code) {
		for (var xM = this.xM, xQ = xL, ga = (xM[a9] = code, ""), cs = xM.length, xR = [], a1 = 0; a1 < cs; a1++) xR.push(xM[a1] === xQ[a1] ? "" : xM[a1]);
		cs--;
		for (a1 = 0; a1 < cs; a1++) ga += xR[a1] + ";";
		b5.hi.hj(155, ga += xR[cs])
	}, this.xS = function() {
		b5.hi.hj(155, ""), this.az()
	}, this.aN = function(code, a9) {
		return code === this.xM[a9] || code === this.xM[a9 + 1]
	}
}

function xT() {
	var xU, xV, xW, xX, xY, xZ = 0,
		xa = 0;

	function xd(a1) {
		var xe = !0,
			g2 = bO.bX,
			dt = (1 === xU[a1].id ? xU[a1].b9.fillStyle = bO.xf : xU[a1].xg === q.aA ? xU[a1].b9.fillStyle = bO.xh : (eb.xi(xU[a1].xg), xU[a1].b9.fillStyle = r.color.xj(d7.dH[0], d7.dH[1], d7.dH[2], .87), 400 < r.s.x(d7.dH, 0, 2) && (xe = !1, g2 = bO
				.nW)), xU[a1].canvas.width),
			kp = (xU[a1].b9.clearRect(0, 0, dt, xX), xU[a1].b9.fillRect(0, 0, dt, xX), xU[a1].b9.fillStyle = g2, ! function(b9, dt, xX) {
				b9.fillRect(0, 0, dt, 1), b9.fillRect(0, xX - 1, dt, 1), b9.fillRect(0, 0, 1, xX), b9.fillRect(dt - 1, 0, 1, xX)
			}(xU[a1].b9, dt, xX), xV + 2 * xX < dt && (xU[a1].b9.fillRect(dt - xV - xX, 0, 1, xX), xU[a1].b9.fillText(b7.b8[xU[a1].xg], Math.floor((dt - xV) / 2), Math.floor(.57 * xX))), 0 !== xU[a1].id ? 0 : xX);
		xU[a1].b9.fillText(r.aI.eh(xU[a1].dn), Math.floor(dt - xV / 2 - kp), Math.floor(.57 * xX)),
			function(a1, dt, kp, xe) {
				xU[a1].b9.fillStyle = xe ? bO.xo : bO.xp;
				xe = Math.floor(xV * xU[a1].dn / xU[a1].xr);
				xU[a1].b9.fillRect(Math.floor(dt - xV - kp), xX - xY, xe, xY)
			}(a1, dt, kp, xe), 0 === xU[a1].id ? (xm(a1, dt, xe, g2), function(a1, dt, xe) {
				xU[a1].b9.strokeStyle = xe ? bO.pk : bO.xu, xU[a1].b9.fillRect(xX, 0, 1, xX);
				xe = dt - xX;
				xU[a1].b9.beginPath(), xU[a1].b9.moveTo(Math.floor(.3 * xX + xe), Math.floor(xX / 2)), xU[a1].b9.lineTo(Math.floor(xX - .3 * xX + 0 + xe), Math.floor(xX / 2)), xU[a1].b9.stroke(), xU[a1].b9.beginPath(), xU[a1].b9.moveTo(Math
					.floor(xX / 2 + xe), Math.floor(.3 * xX)), xU[a1].b9.lineTo(Math.floor(xX / 2 + xe), Math.floor(xX - .3 * xX + 0)), xU[a1].b9.stroke()
			}(a1, dt, xe)) : xm(a1, 2 * xX, xe, g2)
	}

	function xm(a1, dt, xe, g2) {
		xU[a1].b9.strokeStyle = xU[a1].xs ? bO.xt : xe ? bO.lS : bO.lR, xU[a1].b9.fillStyle = g2, xU[a1].b9.fillRect(dt - xX, 0, 1, xX), xU[a1].b9.lineWidth = Math.max(Math.floor(xX / 12), 3), xU[a1].b9.lineCap = "round";
		xe = .35;
		dt = xX + 1, xU[a1].b9.beginPath(), xU[a1].b9.moveTo(Math.floor(dt - xe * xX + 0), Math.floor(xe * xX)), xU[a1].b9.lineTo(Math.floor(dt - xX + xe * xX), Math.floor(xX - xe * xX + 0)), xU[a1].b9.stroke(), xU[a1].b9.beginPath(), xU[a1].b9
			.moveTo(Math.floor(dt - xX + xe * xX), Math.floor(xe * xX)), xU[a1].b9.lineTo(Math.floor(dt - xe * xX + 0), Math.floor(xX - xe * xX + 0)), xU[a1].b9.stroke()
	}

	function yE(dC, tT) {
		for (var dn, a1 = tT - 1; 0 <= a1; a1--) dn = yB.yN(q.bS, a1), dC[a1].dn !== dn && (dC[a1].dn = dn, dC[a1].xr = Math.max(dn, dC[a1].xr), dC[a1].oz = !0)
	}

	function yI(dC, tU) {
		for (var ii = q.bS << 3, wH = il.b0.wH, rK = il.b0.rK, yL = il.b0.yL, a1 = tU - 1; 0 <= a1; a1--) {
			var yM = yL[ii + a1],
				dn = wH[yM];
			dC[a1].dn !== dn ? (dC[a1].dn = dn, dC[a1].xr = Math.max(dn, dC[a1].xr), dC[a1].oz = !0) : dC[a1].xs || rK[yM] % 64 != 5 || (dC[a1].xs = !0, dC[a1].oz = !0)
		}
	}

	function xc(yO) {
		yO.canvas = document.createElement("canvas"), dR.xb.font = xW;
		var dt = xV;
		yO.xg < q.aA && 0 === yO.id && (dt += Math.floor(dR.xb.measureText(b7.b8[yO.xg] + "000").width)), dt += xX, 0 === yO.id && (dt += xX), yO.canvas.width = dt, yO.canvas.height = xX, yO.b9 = yO.canvas.getContext("2d", {
			alpha: !0
		}), yO.b9.font = xW, r.bF.textBaseline(yO.b9, 1), r.bF.textAlign(yO.b9, 1)
	}

	function y1(a1) {
		return yP.yQ() ? bD.dt - xU[a1].canvas.width - bY.gap : yP.c4
	}

	function y2(a1) {
		return Math.floor(2 * bY.gap + (yP.yQ() ? jK.du + bY.gap : 0) + yP.du + a1 * (1.3 * xX))
	}
	this.az = function() {
		xZ = xa = 0, xU = [], this.resize()
	}, this.resize = function() {
		xW = g5.mO, xX = g5.fontSize + 5, xX = Math.floor(1.25 * xX), b2.b3.b4() && (xX = Math.floor(1.25 * xX)), xY = Math.floor(.15 * xX), dR.xb.font = xW, xV = Math.floor(dR.xb.measureText("02 000 000 0000").width);
		for (var a1 = xU.length - 1; 0 <= a1; a1--) xc(xU[a1]), xd(a1)
	}, this.bI = function() {
		for (var a1 = xU.length - 1; 0 <= a1; a1--) xU[a1].oz && (xU[a1].oz = !1, xd(a1))
	}, this.c3 = function(f1, f2) {
		if (2 !== q.cf && 0 !== b7.c0[q.bS] && !q.cL && !r.cz.fO(q.bS))
			for (var xw, xx, xy, xz = b2.b3.b4() ? xX : 0, y0 = b2.b3.b4() ? Math.floor(.15 * xX) : 0, a1 = xU.length - 1; 0 <= a1; a1--)
				if (xw = y1(a1), xx = y2(a1), xy = xU[a1].canvas.width, xx - y0 <= f2 && f2 <= xx + xX + y0) {
					if (xw - xz <= f1 && f1 <= xw + xX + xz) return xU[a1].xs || (xU[a1].oz = !0, xU[a1].xs = !0, 0 === xU[a1].id ? jd.pJ.y3(xU[a1].xg) : jd.pJ.y4(xU[a1].xg)), !0;
					if (0 === xU[a1].id && xw + xy - xX - xz <= f1 && f1 <= xw + xy + xz) return y5.y6(3), jd.pJ.y7(mS.y8(), xU[a1].xg), !0
				} return !1
	}, this.bs = function() {
		var s4, s5, dC, tT;
		0 === b7.c0[q.bS] || r.cz.fO(q.bS) && !q.cL || (s4 = xU.slice(0, xZ), s5 = xU.slice(xZ, xZ + xa), dC = s4, tT = yB.yC(q.bS), function(dC, tT) {
			if (xZ !== tT) return 1;
			for (var a1 = tT - 1; 0 <= a1; a1--)
				if (dC[a1].xg !== yB.yK(q.bS, a1)) return 1;
			return
		}(dC, tT) ? yE(dC = function(dC, tT) {
			var a1, xg, fv, dn, vd = [];
			loop: for (a1 = 0; a1 < tT; a1++) {
				for (xg = yB.yK(q.bS, a1), fv = 0; fv < dC.length; fv++)
					if (dC[fv].xg === xg) {
						vd.push(dC.splice(fv, 1)[0]);
						continue loop
					} dn = yB.yN(q.bS, a1), xc(dn = {
					xg: xg,
					dn: dn,
					xr: dn,
					id: 0,
					oz: !0,
					xs: !1,
					canvas: null,
					b9: null
				}), vd.push(dn)
			}
			return vd
		}(dC, tT), tT) : yE(dC, tT), s4 = dC, s5 = function(dC) {
			var tU = il.b0.yG[q.bS];
			return function(dC, tU) {
				if (xa !== tU) return 1;
				for (var ii = q.bS << 3, rD = il.b0.rD, yL = il.b0.yL, a1 = tU - 1; 0 <= a1; a1--) {
					var yM = yL[ii + a1];
					if (dC[a1].xg !== rD[yM]) return 1
				}
				return
			}(dC, tU) ? yI(dC = function(dC, tU) {
				var a1, xg, fv, vd = [],
					ii = q.bS << 3,
					rD = il.b0.rD,
					wH = il.b0.wH,
					yL = il.b0.yL;
				loop: for (a1 = 0; a1 < tU; a1++) {
					var yM = yL[ii + a1];
					for (xg = rD[yM], fv = 0; fv < dC.length; fv++)
						if (dC[fv].xg === xg) {
							vd.push(dC.splice(fv, 1)[0]);
							continue loop
						} yM = wH[yM], xc(yM = {
						xg: xg,
						dn: yM,
						xr: yM,
						id: 1,
						oz: !0,
						xs: !1,
						canvas: null,
						b9: null
					}), vd.push(yM)
				}
				return vd
			}(dC, tU), tU) : yI(dC, tU), dC
		}(s5), xZ = s4.length, xa = s5.length, xU = s4.concat(s5))
	}, this.cR = function() {
		if (0 !== b7.c0[q.bS] && (!r.cz.fO(q.bS) || q.cL))
			for (var a1 = xU.length - 1; 0 <= a1; a1--) cS.drawImage(xU[a1].canvas, y1(a1), y2(a1))
	}
}

function yR() {
	this.aA = 512, this.ei = 15e8, this.yS = 1e9, this.yT = 5e4, this.yU = 512, this.yV = 2, this.bS = 0, this.bq = 0, this.wp = 0, this.qz = 0, this.yW = 0, this.dl = 512, this.yX = 512, this.yY = 150, this.cK = !0, this.cL = 0, this.cf = 0, this
		.pZ = 0, this.cP = !1, this.cJ = 0, this.yZ = 0, this.bf = !1, this.ya = 0, this.yb = 0, this.eU = 0, this.va = 0, this.jM = null, this.wP = new yc, this.jJ = 30, this.yd = 0, this.wN = 0, this.ye = 0, this.d3 = 0, this.data = new n9, this
		.jv = new yf, this.tG = 0, this.yg = "", this.tF = function() {
			yh.turnstile.close(), d7.az(), pc.az(), vw.clear(), this.wp = this.bq = this.data.humanCount, this.cK = 1 === this.wp && !__fx.customLobby.isActive(), this.cP = !1, this.cL = this.data.isReplay, this.eU = 0 === this.data.gameMode ? [7,
					10, 8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.va = this.data.isContest, this.bf = this.eU < 7 || 9 === this.eU, this.eU = 10 === this.eU && this.cK ? 7 : this.eU, this.eU = 8 === this
				.eU && 2 !== this.bq ? 7 : this.eU, yi.az(), this.ya = this.data.numberTeams, this.data.teamPlayerCount ? this.yb = +(0 < this.data.teamPlayerCount[0]) : (this.yb = 0, this.bf && this.cK && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.ya + 1), q.jv.r0())), this.jJ = this.bq <= 2 ? 30 : this.bq <= 50 ? 40 : 50, this.yZ = this.cJ = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.jM = this.cJ ? new yj : null, this.dl = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.bq) : 1 === kH.qC ? this.dl =
				this.bq : this.dl = this.data.playerCount,
				this.yX = this.dl, this.qz = this.dl - this.bq, this.yW = 0, this.bS = this.data.selectedPlayer, this.yd = 0, this.wN = 0, this.ye = 0, this.d3 = 0, r2.yk(this.data.spawningSeed), yl.az(), b7.az(), ym.az(), yn.yo(), jd.je.yp = [], jd
				.pJ.yq = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), aC.az(), this.cf = 1, dg.az(), xI(), eb.gw(), wi.yr(), jE.az(), eb.az(), ys.az(), f7.az(), il
				.az(), yt.az(), y5.yu(), v.az(), yn.wx(), yv.az(), yw.az(), ct.yx(), jR.az(), d5.az(), yy.az(), mb.az(), xG.putImageData(xH, 0, 0), mX.az(), cl.az(), mS.az(), j1.az(), gv.az(), yP.az(), jK.az(), j9.az(), l9.az(), g5.az(), yz.az(), cd
				.az(), z0.az(), z1.az(), z2.az(), z3(), yB.az(), ez.az(), z4.az(), z5.az(), z6.az(), z7.az(), z8.az(), this.wP.az(), bL.yu(), cM.zB(), 0 === b7.c0[q.bS] && z0.show(!1, !0), ez.bI(!0), zA.az(), bL.cC = !0, this.cL || this.cK && this
				.cJ || b2.b3.setState(1), this.tG = 0
		}, this.me = function(zC) {
			jR.jS.zD.length ? this.yg = jR.jS.zD : this.yg = jR.tA.tB(), __fx.replayHistory.save(this.yg), !1 === __fx.customLobby.isActive() && hW.b0.zE(), vw.clear(), this.cf = 0, bL.zF(), b2.b3.setState(0), jz.setState(0), __fx.customLobby
				.isActive() || yh.tf.show(zC), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.tG ? n.b0.jt(0) : 1 === this.tG ? n.aB(19) : n.aB(5, 5)
		}, this.f4 = function() {
			return this.cL ? j9.jA || !j1.jB : this.cK && (j9.jA || this.cJ)
		}, this.fy = function() {
			return 1 === this.cf && !this.cJ
		}
}

function zG() {
	function zJ(key) {
		var zM;
		return "undefined" == typeof URLSearchParams || (zM = window.location.search, "string" != typeof(zM = new URLSearchParams(zM).get(key))) || zM.length < 1 ? null : i3.oi.zO(zM, 5)
	}
	this.zH = function() {
		if (0 !== b2.id) return !1;
		if (! function() {
				var value = zJ("account");
				if (!value && !(value = zJ("a"))) return void zK.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (zK.clear(), n.aB(8, n.go, new jx(1e3, {
					action: 0,
					hp: value,
					oj: 0
				})), !0) : (zK.clear(), !1)
			}()) {
			var value = zJ("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.aB(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zL = new URL(window.location.href);
		zL.search = "";
		try {
			return history.replaceState(null, "", zL.toString()), !0
		} catch (cb) {
			console.log("error 352: " + cb)
		}
		return !1
	}, this.zP = function(key, value) {
		if (0 === b2.id) try {
			var zL = new URL(window.location.href),
				cy = zL.searchParams;
			cy.set(key, value), zL.search = cy.toString(), history.replaceState(null, "", zL.toString())
		} catch (cb) {
			console.log("error 358: " + cb)
		}
	}
}

function zQ() {
	this.zR = function() {
		if (2 === q.yd) q.wN = 2;
		else {
			if (8 === q.eU) r.cz.fO(0) || 0 === b7.c0[0] ? q.ye = 1 : r.cz.fO(1) || 0 === b7.c0[1] ? q.ye = 0 : q.ye = +(b7.br[1] > b7.br[0]);
			else {
				if (q.bf) {
					var zT = d5.zU();
					if (q.d3 = zT, aC.d2[zT]) return void(q.wN = +(aC.wD[q.bS] === zT))
				}
				q.ye = aR[0]
			}
			q.wN = +(q.ye === q.bS)
		}
	}
}

function ki() {
	function a01() {
		var id = hx.i2(3);
		return 0 === id ? {
			id: id,
			hp: hx.i2(30),
			vs: uN.a04.a05(i3.i4.i5(7))
		} : 1 === id ? {
			id: id,
			hp: hx.i2(30),
			a06: hx.i2(3),
			value: hx.i2(30),
			target: hx.i2(30)
		} : 2 === id ? {
			id: id,
			hp: hx.i2(30),
			a06: hx.i2(3)
		} : 3 === id ? {
			id: id,
			hp: hx.i2(30),
			a06: hx.i2(3),
			value: hx.i2(4),
			target: hx.i2(30)
		} : 4 === id ? {
			id: id,
			hp: hx.i2(30),
			a06: hx.i2(3),
			target: hx.i2(30)
		} : 5 === id ? {
			id: id,
			a06: hx.i2(6)
		} : 6 === id ? {
			id: id,
			value: hx.i2(17)
		} : null
	}
	this.zV = function(uK) {
		if (uK !== hW.b0.uP) hW.b0.close(uK, 3239);
		else if (6 !== jz.si()) hW.b0.close(uK, 3271);
		else {
			uN.az();
			for (var a1 = 0; a1 < 4; a1++) {
				var zW = uN.b0.zX[a1],
					playerCount = (zW.zY = hx.i2(10), zW.qg = hx.i2(6), zW.mapSeed = hx.i2(14), zW.zZ = hx.i2(4), zW.za = hx.i2(6), zW.zb = hx.i2(14), zW.zc = hx.i2(4), zW.zd = hx.i2(1), zW.ze = hx.i2(12), zW.spawningSeed = hx.i2(14), hx.i2(16));
				uN.zf.zg[a1] = hx.i2(16);
				for (var bN = 0; bN < playerCount; bN++) uN.zf.zh(a1, hx.i2(30), i3.i4.i5(5), hx.i2(4), hx.i2(30), hx.i2(7), hx.i2(16), hx.i2(18), hx.i2(11), hx.i2(12), hx.i2(6))
			}
			n.aB(29), uN.b0.zi(!0)
		}
	}, this.zj = function(uK) {
		if (uK !== hW.b0.uP) hW.b0.close(uK, 3239);
		else if (uN.uO) {
			uN.b0.zk[0] = hx.i2(20), uN.b0.zk[1] = hx.i2(20);
			for (var zl = hx.i2(16), bN = 0; bN < zl; bN++) {
				var id = hx.i2(3);
				0 === id ? uN.zf.zh(hx.i2(2), hx.i2(30), i3.i4.i5(5), 0, 1234566, 127, 0, hx.i2(18), 0, hx.i2(12), 0) : 1 === id ? uN.zf.zm(hx.i2(16), hx.i2(2)) : 2 === id ? uN.zf.zn(hx.i2(16), hx.i2(2), hx.i2(2)) : 3 === id ? uN.zf.zo(hx.i2(16),
					hx.i2(2)) : 4 === id ? uN.zf.zp(hx.i2(16), hx.i2(2), hx.i2(4), hx.i2(30), hx.i2(7), hx.i2(16), hx.i2(11), hx.i2(18)) : 5 === id ? uN.zf.zq(hx.i2(16), hx.i2(2), hx.i2(1)) : 6 === id && uN.zf.zr(hx.i2(16), hx.i2(2), hx.i2(
					6))
			}
			for (var a1 = 0; a1 < 4; a1++) {
				var zW = uN.b0.zX[a1];
				if (zW.zY = hx.i2(10), zW.za = hx.i2(6), zW.zb = hx.i2(14), zW.zc = hx.i2(4), 0 === zW.zY) {
					if (zW.uY = hx.i2(10), zW.zs = hx.i2(10), uN.zt.zH(a1)) return;
					zW.qg = hx.i2(6), zW.mapSeed = hx.i2(14), zW.zZ = hx.i2(4), zW.zd = hx.i2(1), zW.ze = hx.i2(12), zW.spawningSeed = hx.i2(14), zW.zu.push(zW.zu[0]), zW.zu.shift()
				}
			}
			uN.b0.zv()
		} else hW.b0.close(uK, 3251)
	}, this.zw = function(uK) {
		if (uK !== hW.b0.uP) hW.b0.close(uK, 3272);
		else if (uN.uO) {
			for (var zx = hx.i2(4), zW = uN.b0.zX[zx], zy = zW.zy, xD = (zW.zz = hx.i2(20), hx.i2(6)), a1 = 0; a1 < xD; a1++) {
				var a00 = a01();
				uN.eu.a02(a00), zy.push(a00)
			}
			uN.b0.a03(zx)
		} else hW.b0.close(uK, 3273)
	}, this.a07 = function(uK) {
		uK !== hW.b0.uP ? hW.b0.close(uK, 3276) : uN.uO ? uN.message.a08(a01()) : hW.b0.close(uK, 3277)
	}
}

function v4() {
	var hS, jk, a09, a0A, a0B, a0C, colors = [0, 0, 0],
		a0D = -1;

	function a0K(a1) {
		var a0L = jk.bp + a1 * (bY.gap + a0C);
		cS.fillStyle = "rgb(" + (0 === a1 ? 150 : 2 === a1 ? 30 : 0) + "," + (1 === a1 ? 130 : 2 === a1 ? 30 : 0) + "," + (2 === a1 ? 220 : 0) + ")", cS.fillRect(a0A, a0L, colors[a1] * a0B, a0C), cS.strokeStyle = bO.bX, cS.strokeRect(a0A, a0L, a0B,
			a0C), cS.fillStyle = bO.bX, cS.font = r.bF.bG(0, .32 * a0C), r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 0), cS.fillText(L(0 === a1 ? 197 : 1 === a1 ? 198 : 199) + a0E(a1), a0A + bY.gap, a0L + .53 * a0C)
	}

	function a0E(a1, a0M) {
		return a0M = a0M || 256, hA.hB(Math.floor(a0M * colors[a1]), 0, a0M - 1)
	}

	function a0N(f1, f2) {
		return !(f1 < a0A || f2 < jk.bp || f1 > jk.c4 + jk.dt || f2 > jk.bp + jk.du)
	}
	this.show = function() {
		var h2 = b5.buffer.data[121].value;
		colors[0] = (h2 >> 12) / 63, colors[1] = (h2 >> 6 & 63) / 63, colors[2] = (63 & h2) / 63, hS.show(), this.resize()
	}, this.aL = function() {
		b5.hi.hj(121, (a0E(0, 64) << 12) + (a0E(1, 64) << 6) + a0E(2, 64)), hS.aL()
	}, this.resize = function() {
		hS.resize(), jk.resize();
		var aN = bD.cp,
			vW = hS.a0F(),
			a0H = (jk.bp = Math.max(jk.bp, aN * vW.a0G + bY.gap), aN * vW.a0I - 2 * bY.gap);
		jk.du = Math.min(jk.du, a0H), jk.dt = 2 * jk.du, jk.bp = aN * vW.a0G + .5 * (aN * vW.a0I - jk.du), jk.c4 = .5 * (bD.dt - jk.dt), a09 = .25 * jk.dt, a0A = jk.c4 + a09 + bY.gap, a0B = jk.dt - a09 - bY.gap, a0C = (jk.du - 2 * bY.gap) / 3
	}, this.cR = function() {
		var n1, nb, fv;
		hS.cR(), cS.lineWidth = bY.bZ, n1 = a0E(0), nb = a0E(1), fv = a0E(2), cS.fillStyle = "rgb(" + n1 + "," + nb + "," + fv + ")", cS.fillRect(jk.c4, jk.bp, a09, jk.du), cS.strokeStyle = bO.bX, cS.strokeRect(jk.c4, jk.bp, a09, jk.du), cS
			.fillStyle = n1 + nb + fv < 306 && nb < 150 ? bO.bX : bO.nW, r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 1), cS.font = r.bF.bG(0, .1 * jk.du), cS.rotate(-Math.PI / 2), cS.fillText(L(196), -jk.bp - .5 * jk.du, jk.c4 + .5 * a09), cS
			.setTransform(1, 0, 0, 1, 0, 0), a0K(0), a0K(1), a0K(2)
	}, this.c3 = function(f1, f2) {
		a0N(f1, f2) && (a0D = hA.hB(Math.floor((f2 - jk.bp) / (a0C + .75 * bY.gap)), 0, 2), colors[a0D] = hA.hB((f1 - a0A) / a0B, 0, 1), bL.cC = !0)
	}, this.cF = function(f1) {
		-1 !== a0D && (colors[a0D] = hA.hB((f1 - a0A) / a0B, 0, 1), bL.cC = !0)
	}, this.cO = function(f1, f2, deltaY) {
		a0N(f1, f2) && (f1 = hA.hB(Math.floor((f2 - jk.bp) / (a0C + .75 * bY.gap)), 0, 2), colors[f1] = hA.hB(colors[f1] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bL.cC = !0)
	}, this.vJ = function() {
		0 <= a0D && (a0D = -1, bL.cC = !0)
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(195), [new g("⬅️ " + L(1), function() {
		n.b0.sj()
	})], !1), jk = new dp([.5, .25], [.5, .5], 1)
}

function a0O() {
	function a0X(player) {
		var bx;
		r.cz.a0c(player) && (bx = b7.di[player] - b7.fX[player] + yB.a0d(player), dg.a0e(player, Math.abs(bx), bx < 0 ? 18 : 12)), b7.di[player] = 0, b7.fX[player] = 0
	}

	function a0m() {
		z0.show(!1, !1, !1, !0), jK.a0o(), pc.a0p.a0q()
	}

	function a0T(player, a0k) {
		for (var a1 = a0k.length - 1; 0 <= a1; a1--) yB.a0r(a0k[a1], player)
	}

	function a0V(player) {
		var el = b7.el,
			eo = b7.eo,
			em = b7.em,
			ep = b7.ep,
			dS = dR.dS;
		if (b7.br[player]) {
			b7.br[player] = 0;
			for (var cU = el[player], cV = em[player], c4 = eo[player]; cU <= c4; c4--)
				for (var bp = ep[player]; cV <= bp; bp--) {
					var cy = 4 * (bp * dS + c4);
					eb.gN(player, cy) && eb.a0w(cy)
				}
		}
		eo[player] = ep[player] = 0, el[player] = em[player] = Math.max(dS, dR.dT)
	}
	this.zH = function(cy) {
		var player, bx = b7.br[cy] + b7.a0P[cy];
		il.b0.yG[cy] ? bx && (a0T(player = cy, yB.a0U(player)), ez.f5(player), a0V(player), z1.a0W(player), yB.clear(player), a0X(player), function(player) {
			b7.a0P[player] = 0, b7.a0S[player] = [], b7.a0Z[player] = [], b7.a0a[player] = [], b7.a0b[player] = []
		}(player)) : !bx && b7.a0S[cy].length || this.a0R(cy)
	}, this.a0R = function(player) {
		! function(player) {
			r.cz.fO(player) || (b7.ul[player] = a0j.sJ.um(), q.yW++);
			var a0k = yB.a0U(player);
			0 === a0k.length ? r.cz.a0l(player) && a0m() : (a0T(player, a0k), function(player, a0k) {
				var a0t = a0k[function(a0k) {
					var a1, a9 = 0;
					for (a1 = a0k.length - 1; 1 <= a1; a1--) b7.br[a0k[a1]] > b7.br[a0k[a9]] && (a9 = a1);
					return a9
				}(a0k)];
				9 === q.eU && (1 === aC.wD[player] ? r2.a0u(8) && yi.r1(a0t) : v.dn[player] && (g5.wZ(765, 0), g5.pa(280, L(200, [b7.b8[a0t], b7.b8[player]]), 765, a0t, bO.nW, bO.a0v, -1, !0)));
				if (r.cz.a0l(player)) a0m(), g5.vX(a0t, 1);
				else {
					for (var a1 = a0k.length - 1; 0 <= a1; a1--)
						if (r.cz.a0c(a0k[a1]) && (dg.dh[4 - r.cz.fO(player)]++, r.cz.a0l(a0k[a1]))) return g5.vX(player, 0);
					r.cz.fO(player) || g5.w1(0, player, a0t)
				}
			}(player, a0k))
		}(player), ez.f5(player), a0V(player), a0X(player),
			function(player) {
				b7.c0[player] = 0, b7.a0S[player] = null, b7.a0Z[player] = null, b7.a0a[player] = null, b7.a0b[player] = null
			}(player), z1.a0W(player), yB.clear(player), il.a0h.a0i(player)
	}
}

function a0x() {
	this.pd = new a0y, this.result = new a0z, this.a10 = new cq, this.a11 = new a12, this.a13 = new zQ, this.a0p = new a14, this.az = function() {
		this.result.az()
	}
}

function a15() {
	var qU, qZ;
	this.az = function() {
		qU = 1, qZ = 0
	}, this.bs = function() {
		0 < qU && (qZ = 0 === qZ ? bL.c8 + 16 : qZ, qU = (qU -= .001 * (bL.c8 - qZ)) < 0 ? 0 : qU, qZ = bL.c8, bL.cC = !0)
	}, this.cR = function() {
		0 < qU && (cS.fillStyle = "rgba(0,0,0," + qU + ")", cS.fillRect(0, 0, bD.dt, bD.du))
	}
}

function a18() {
	var uV = 0;
	this.az = function() {
		a19.az(), uV = 0
	}, this.setState = function(a1A) {
		uV = a1A
	}, this.si = function() {
		return uV
	}, this.tD = function() {
		this.setState(8), n.ta()
	}, this.aM = function(cb) {
		if (!dR.a1B) return !1;
		if (!(bL.c8 < 400)) {
			if ("Enter" === cb.key || "Escape" === cb.key) {
				if (this.a1C()) return !0;
				if ("Enter" === cb.key) {
					if (0 === uV) return !0;
					if (7 === uV) return !0
				}
			}
			return !1
		}
	}, this.a1D = function() {
		a1E.resize()
	}, this.a1C = function() {
		return !!a1E.aL()
	}, this.c3 = function(c4, bp) {
		!dR.a1B || a1E.c3(c4, bp) || 6 === uV && uW.c3(c4, bp) || gs.c3(c4, bp) || kD.c3(c4, bp)
	}, this.cF = function(c4, bp) {
		!kD.a1F && a19.cF(c4, bp, !0) || kD.cF(c4, bp)
	}, this.click = function(c4, bp) {
		kD.cI()
	}, this.cO = function(c4, bp, deltaY) {}, this.a1G = function() {
		a19.a1H(), bL.cC = !0
	}, this.cR = function() {
		8 !== uV && 10 !== uV && (cS.imageSmoothingEnabled = !0, this.a1I(), 0 !== uV && (kD.cR(), kF.cR(), this.kC(), gs.cR()), 0 !== uV && 6 === uV && uW.cR(), a1E.cR(), n.cR())
	}, this.a1I = function() {
		var a1K, a1J;
		if (__fx.makeMainMenuTransparent) cS.clearRect(0, 0, bD.dt, bD.du);
		else dR.a1B ? (a1J = bD.dt / dR.dS, a1K = bD.du / dR.dT, cS.setTransform(a1J = a1K < a1J ? a1J : a1K, 0, 0, a1J, Math.floor((bD.dt - a1J * dR.dS) / 2), Math.floor((bD.du - a1J * dR.dT) / 2)), cS.drawImage(dR.t6, 0, 0), cS.setTransform(1,
			0, 0, 1, 0, 0), cS.fillStyle = bO.a1L) : cS.fillStyle = bO.nW, cS.fillRect(0, 0, bD.dt, bD.du)
	}, this.kC = function() {
		var bp = Math.floor(.3 * bD.du),
			canvas = bl.gS("territorial.io"),
			fu = (fu = 1.75 * bD.du / canvas.width) * canvas.width < .98 * bD.dt ? .98 * bD.dt / canvas.width : fu,
			c4 = (cS.globalAlpha = .15, cS.imageSmoothingEnabled = !1, Math.floor(.5 * (bD.dt - fu * canvas.width))),
			c4 = Math.floor(c4 / fu),
			bp = Math.floor(bp - .5 * canvas.height * fu),
			bp = Math.floor(bp / fu);
		cS.setTransform(fu, 0, 0, fu, c4, bp), cS.drawImage(canvas, c4, bp), cS.setTransform(1, 0, 0, 1, 0, 0), cS.globalAlpha = 1, cS.imageSmoothingEnabled = !0
	}
}

function a1M() {
	var a1N = [],
		nL = [],
		a1O = [];

	function a1Q(vu) {
		for (var vs = vu.vs, a1P = [];;) {
			var aN = function a1V(vs, position) {
				position = vs.indexOf("@", position);
				if (position < 0) return -1;
				var ga = vs.substring(position + 1, position + 6);
				if (5 !== ga.length) return a1V(vs, position + 1);
				if (r.aI.startsWith(ga, "room")) return a1V(vs, position + 1);
				var a1u = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!a1u.test(ga)) return a1V(vs, position + 1);
				a1u = vs.substring(position + 6, position + 7);
				if (1 !== a1u.length) return position;
				ga = new RegExp("^[ :!.]+$");
				if (!ga.test(a1u)) return a1V(vs, position + 1);
				return position
			}(vs, 0);
			if (-1 === aN) {
				a1P.push(a1W(vs, vu));
				break
			}
			0 === aN ? a1P.push(a1X(vs.substring(1, 6), vu, aN)) : (a1P.push(a1W(vs.substring(0, aN), vu)), a1P.push(a1X(vs.substring(aN + 1, aN + 6), vu, aN))), vs = vs.substring(aN + 6)
		}
		return a1P
	}

	function a1X(ga, vu, aN) {
		var a1Y = function(ga) {
				var hp = i3.oi.a1q(ga, 5),
					a1Y = uN.zf.a1r(hp);
				if (a1Y) {
					for (a1N.push(a1Y); 75 < a1N.length;) a1N.shift();
					return a1Y
				}
				for (var a1s = uN.zf.a1s, a1 = a1s.length - 1; 0 <= a1; a1--)
					if (a1Y = a1s[a1], hp === a1Y.hp) return a1N.push(a1Y), a1Y;
				for (a1 = a1N.length - 1; 0 <= a1; a1--)
					if (a1Y = a1N[a1], hp === a1Y.hp) return a1N.push(a1Y), a1Y;
				return uN.zf.a1t(hp, ga, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(ga),
			ga = (0 === aN && 0 === vu.a1R.id && vu.a1S && (vu.fontSize = uN.nr.a1a(a1Y.a1b, a1Y.bn), vu.a1U = uN.nr.a1c(a1Y.bn)), document.createElement("span"));
		return ga.textContent = function(a1Y, vu, aN) {
				if (a1Y.a1l) return a1Y.a1l--, aN = 2 === vu.a1R.id || (3 === vu.a1R.id || 4 === vu.a1R.id) && 0 !== aN, a1Y.username + (aN ? " (" + a1Y.a1n + ")" : "");
				if (vu.a1R.a1o) return "Redacted " + oh.oi.eh(a1Y.hp, 2);
				return a1Y.username
			}(a1Y, vu, aN), ga.style.display = "inline-block", ga.style.color = uN.nr.a1e(a1Y.a1b), 11 === a1Y.a1b && (ga.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), ga.style.cursor =
			"pointer", ga.style.margin = "0", ga.style.font = "inherit", ga.style.minWidth = ga.style.minHeight = "1em", uN.nr.a1f(a1Y) && (ga.style.textDecoration = "underline"), a1Y.a1g && (ga.style.textDecorationLine = "underline", ga.style
				.textDecorationStyle = "dotted"), uN.nr.a1c(a1Y.bn) && (ga.style.fontWeight = "bold"), ga.onclick = function(cb) {
				uN.a1h.a1i(cb, a1Y)
			}, c9.lz() || (ga.onmouseover = function(cb) {
				uN.a1j.a1k(cb.target, a1Y)
			}), nL.push(ga), ga
	}

	function a1W(vs, vu) {
		var na = document.createElement("span");
		return na.textContent = vs, na.style.color = vu.a1p, na.style.margin = "0", na.style.font = "inherit", na
	}

	function a1y(a1Y, a1x, hp) {
		hp !== a1Y.hp || a1Y.a1n || (a1Y.a1n = a1Y.username, a1Y.username = a1x)
	}
	this.ln = function() {
		for (var a1 = 0; a1 < nL.length; a1++) nL[a1].onclick = nL[a1].onmouseover = null;
		a1O = nL = null
	}, this.transform = function(vu) {
		for (var tY = document.createElement("div"), a1P = a1Q(vu), a1 = 0; a1 < a1P.length; a1++) tY.appendChild(a1P[a1]);
		0 === vu.a1R.id && (tY.vx143 = vu.a1R, a1O.push(tY)), tY.style.margin = "0.6em 0.6em", vu.a1S && (tY.style.marginLeft = tY.style.marginRight = "inherit"), tY.style.font = "inherit";
		var a1T = 0 < vu.a1R.id;
		return vu.a1U && (tY.style.fontWeight = "bold"), a1T && (tY.style.paddingLeft = "0.7em"), a1T && (tY.style.fontStyle = "italic"), tY.style.fontSize = vu.fontSize.toFixed(2) + "em", tY
	}, this.a02 = function(a00) {
		if (a00 && (2 === a00.id && 1 === a00.a06 || 3 === a00.id && 2 === a00.a06)) {
			var hp = 3 === a00.id ? a00.target : a00.hp;
			if (!uN.zf.a1r(hp)) {
				for (var a1x = "Redacted " + oh.oi.eh(hp, 2), a1s = uN.zf.a1s, a1 = a1s.length - 1; 0 <= a1; a1--) a1y(a1s[a1], a1x, hp);
				for (a1 = a1N.length - 1; 0 <= a1; a1--) a1y(a1N[a1], a1x, hp)
			}
		}
	}, this.a1z = function(hp) {
		for (var a20 = a1O, a21 = "@" + oh.oi.eh(hp, 5), a1 = a20.length - 1; 0 <= a1; a1--) {
			var gM = a20[a1];
			if (gM.vx143.hp === hp || 0 <= gM.vx143.vs.indexOf(a21)) {
				for (; gM.firstChild;) n.removeChild(gM, gM.firstChild);
				for (var a1P = a1Q(uN.nr.a22(gM.vx143, uN.nr.a23(gM.vx143))), bN = 0; bN < a1P.length; bN++) gM.appendChild(a1P[bN]);
				a20.splice(a1, 1)
			}
		}
	}, this.a24 = function(hp) {
		for (var a20 = a1O, a1 = a20.length - 1; 0 <= a1; a1--) {
			var gM = a20[a1];
			if (gM.vx143.hp === hp) {
				for (; gM.firstChild;) n.removeChild(gM, gM.firstChild);
				gM.vx143.vs = "[Redacted Message]";
				for (var a1P = a1Q(uN.nr.a22(gM.vx143, uN.nr.a23(gM.vx143))), bN = 0; bN < a1P.length; bN++) gM.appendChild(a1P[bN]);
				a20.splice(a1, 1)
			}
		}
	}
}

function a25() {
	this.li = function(a9, k2) {
		return Number(this.lj(a9, k2))
	}, this.lj = function(a9, k2) {
		var h2 = null;
		return 0 === b2.id ? b2.a26 && (h2 = b2.a26.getItem((k2 ? "v" : "d") + a9)) : 1 === b2.id ? h2 = b2.k3.loadString((k2 ? 1e3 : 2e3) + a9) : 2 === b2.id && (h2 = b2.a27[(k2 ? "v" : "d") + a9]), h2 && 0 !== h2.length ? h2 : null
	}, this.sY = function(cs, a28) {
		var dC = [],
			a29 = a28 ? "e" : "l";
		if (0 === b2.id) {
			if (b2.a26)
				for (a1 = 0; a1 < cs; a1++) dC.push(b2.a26.getItem(a29 + a1))
		} else if (1 === b2.id)
			for (var a2A = a28 ? 5e3 : 3e3, a1 = 0; a1 < cs; a1++) dC.push(b2.k3.loadString(a2A + a1));
		else if (2 === b2.id)
			for (a1 = 0; a1 < cs; a1++) dC.push(b2.a27[a29 + a1]);
		return dC
	}, this.save = function(a9, value, k2) {
		var mK = (k2 ? "v" : "d") + a9;
		if (0 === b2.id) {
			if (b2.a26 && b5.buffer.data[140].value) try {
				b2.a26.setItem(mK, value)
			} catch (cb) {
				console.log(cb)
			}
		} else 1 === b2.id ? b2.k3.saveString((k2 ? 1e3 : 2e3) + a9, value) : 2 === b2.id && (b2.a27[mK] = value, b2.a2B.postMessage(mK + " " + value))
	}, this.sh = function(dC, a28) {
		var cs = dC.length,
			a29 = a28 ? "e" : "l";
		if (0 === b2.id) {
			if (b2.a26 && b5.buffer.data[140].value) try {
				for (a1 = 0; a1 < cs; a1++) b2.a26.setItem(a29 + a1, dC[a1])
			} catch (cb) {
				console.log(cb)
			}
		} else if (1 === b2.id)
			for (var a2A = a28 ? 5e3 : 3e3, a1 = 0; a1 < cs; a1++) b2.k3.saveString(a2A + a1, dC[a1]);
		else if (2 === b2.id)
			for (a1 = 0; a1 < cs; a1++) b2.a27[a29 + a1] = dC[a1], b2.a2B.postMessage(a29 + a1 + " " + dC[a1])
	}
}

function v0() {
	var b, a2C;

	function a2F() {
		n.ta();
		var ga = jR.a2I(a2C.u());
		(q.cf && 0 < ga.length && ga === jR.jS.zD || jR.ju.i5(ga)) && jR.a2J()
	}
	this.show = function(zM) {
		this.a2G(zM), b.show(), this.resize()
	}, this.a2G = function(zM) {
		0 === q.cf ? zM ? a2C.aH(zM) : q.yg.length && a2C.aH(q.yg) : (q.cL || (jR.jS.zD = jR.tA.tB()), a2C.aH(jR.a2H(jR.jS.zD)))
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), a2C.resize()
	}, this.aM = function(aN) {
		2 === aN ? b.aO[0].aP() : a2F()
	}, b = new f(L(201), [new g("⬅️ " + L(1), function() {
		n.vI(1)
	}), new g(L(202), function() {
		a2C.a2D()
	}), new g(L(203), function() {
		a2C.a2E()
	}), new g(L(204), function() {
		a2C.clear()
	}), new g(L(205), function() {
		a2F()
	})]), a2C = new aG(L(206)), b.j.appendChild(a2C.cb)
}

function a2K() {
	var a2L = 0,
		a2M = null;
	this.az = function() {
		null === a2M && (a2M = new Uint16Array(2 * il.b0.a2N)), a2L = 0
	}, this.qi = function(a2O, rL) {
		var a2P = a2M;
		a2P[a2L++] = a2O, a2P[a2L++] = rL
	}, this.a2Q = function(player, a2R) {
		for (var a2P = a2M, cs = a2L, a1 = 0; a1 < cs; a1 += 2)
			if (a2P[a1] === a2R && il.nr.rG(a2P[a1 + 1]) && player === il.b0.rS[d7.dM[2]] >> 3) return !0;
		return !1
	}, this.a2S = function(a2T) {
		var a2U = il.b0.rK[a2T];
		if (!(a2U < 64)) {
			for (var a2R = il.b0.rD[a2T], a2P = a2M, cs = a2L, a1 = cs - 2; 0 <= a1; a1 -= 2)
				if (a2P[a1] === a2R) {
					{
						a2Z = void 0;
						var a2Z = a2P[a1 + 1];
						il.nr.rG(a2Z) && il.rL.a2h(d7.dM[2])
					}
					a2P[a1] = a2P[cs - 2], a2P[a1 + 1] = a2P[cs - 1], cs -= 2
				} a2L = cs
		}
	}, this.a2W = function(a2X, a2Y) {
		for (var a2Z = il.b0.rD[a2X], a2R = -1, a2P = a2M, cs = a2L, a1 = 1; a1 < cs; a1 += 2)
			if (a2P[a1] === a2Z) {
				a2R = a2P[a1 - 1];
				break
			} if (-1 === a2R) return !1;
		if (!il.nr.rG(a2R)) return !1;
		var a2T = d7.dM[2],
			rb = il.b0.rc[a2T];
		if (a2Y === rb[rb.length - 1]) il.b0.rc[a2X] = il.rk.a2a(il.b0.rc[a2X], il.rk.rl(rb));
		else {
			var a2b = il.nr.a2c(rb, a2Y);
			if (-1 === a2b) return !1;
			var a2d = il.b0.re[a2T];
			a2b === a2d ? (a2T = f7.rO(il.b0.rP[a2T]), il.b0.rc[a2X] = il.rk.a2f(il.b0.rc[a2X], rb, a2b, a2Y, f7.rX(rb[a2b], a2Y) > f7.rX(rb[a2b], a2T))) : il.b0.rc[a2X] = il.rk.a2f(il.b0.rc[a2X], rb, a2b, a2Y, a2d < a2b)
		}
		return !0
	}, this.a2h = function(rA) {
		var rb, jP = il.b0,
			a2U = jP.rK[rA];
		return a2U % 64 != 5 && (rb = jP.rc[rA], jP.a2i[rA] = 65535 - jP.a2i[rA], jP.re[rA] = rb.length - jP.re[rA] - 2, jP.rc[rA] = il.rk.rl(rb), jP.rK[rA] = a2U - a2U % 64 + 5, !0)
	}
}

function a2j() {
	this.qf = null, this.a2k = null, this.a2l = null, this.az = function() {
		this.a2m = [L(207), L(208), L(209), L(210), L(211), L(212), L(213), L(214), L(215), L(216), L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227), L(228), L(229), L(230), "Mare Nostrum"];
		var a2n = [120, 105, 92],
			cos = [12, 12, 60],
			a2o = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a2p = [140, 130, 120],
			a2q = [12, 12, 76],
			a2r = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a2s = [130, 117, 106],
			a2t = [12, 12, 68],
			a2u = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.qf = new Array(dR.a2y + 1), __fx.customLobby.setMapInfo(this.qf), this.qf[0] = {
			dt: 230,
			du: 230,
			a2z: 1e3,
			a30: 2e3,
			a31: 173
		}, this.qf[1] = {
			dt: 800,
			du: 800,
			a2z: 100,
			a30: 50,
			a31: 43
		}, this.qf[2] = {
			dt: 512,
			du: 512,
			a2z: 128,
			a30: 32,
			a31: 0
		}, this.qf[3] = {
			dt: 960,
			du: 960,
			a2z: 60,
			a30: 8,
			a31: 0
		}, this.qf[4] = {
			dt: 900,
			du: 900,
			a2z: 100,
			a30: 5,
			a31: 0
		}, this.qf[5] = {
			dt: 1e3,
			du: 1e3,
			a2z: 100,
			a30: 40,
			a31: 0
		}, this.qf[6] = {
			dt: 1e3,
			du: 1e3,
			a2z: 100,
			a30: 20,
			a31: 0
		}, this.qf[7] = {
			dt: 1024,
			du: 1024,
			a2z: 128,
			a30: 32,
			a31: 0
		}, this.qf[8] = {
			dt: 820,
			du: 820,
			a2z: 200,
			a30: 100,
			a31: 0
		}, this.qf[9] = {
			dt: 1024,
			du: 1024,
			a2z: 128,
			a30: 32,
			a31: 0
		}, this.qf[10] = {
			a32: a2p,
			a33: a2q,
			a34: a2r
		}, this.qf[11] = {
			a32: a2s,
			a33: a2t,
			a34: a2u
		}, this.qf[12] = {
			a32: a2s,
			a33: a2t,
			a34: a2u
		}, this.qf[13] = {
			a32: a2n,
			a33: cos,
			a34: a2o
		}, this.qf[14] = {
			a32: a2n,
			a33: cos,
			a34: a2o
		}, this.qf[15] = {
			a32: a2p,
			a33: a2q,
			a34: a2r
		}, this.qf[16] = {
			a32: a2p,
			a33: a2q,
			a34: a2r
		}, this.qf[17] = {
			a32: a2n,
			a33: cos,
			a34: a2o
		}, this.qf[18] = {
			a32: a2s,
			a33: a2t,
			a34: a2u
		}, this.qf[19] = {
			a32: a2n,
			a33: cos,
			a34: a2o
		}, this.qf[20] = {
			dt: 1024,
			du: 1024,
			a2z: 128,
			a30: 32,
			a31: 0
		}, this.qf[21] = {
			dt: 940,
			du: 940,
			a2z: 80,
			a30: 8,
			a31: 0
		}, this.qf[22] = {
			a32: a2s,
			a33: a2t,
			a34: a2u
		}, this.qf[23] = {
			a32: a2p,
			a33: a2q,
			a34: a2r
		}, this.qf[24] = {
			a32: [157, 136, 117],
			a33: [16, 13, 68],
			a34: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			wh: "[OG] Neutronian"
		};
		for (var a1 = 0; a1 < dR.a2y; a1++) this.qf[a1].name = this.a2m[a1];
		this.qf[dR.a2y] = {
			name: ""
		}, this.a2k = new Uint8Array(12);
		for (a1 = 0; a1 < 10; a1++) this.a2k[a1] = a1;
		for (this.a2k[10] = 20, this.a2k[11] = 21, this.a2l = new Uint8Array(dR.a35), a1 = 0; a1 < 10; a1++) this.a2l[a1] = 10 + a1;
		this.a2l[10] = 22, this.a2l[11] = 23, this.a2l[12] = 24
	}
}

function a36() {
	var a37;
	this.az = function() {
		a37 = !1
	}, this.bs = function() {
		var cy;
		if (function() {
				if (!a37) {
					if (bL.bM() % 30 != 9) return;
					if (!r.cz.a3D(90)) return;
					a37 = !0
				}
				return 1
			}() && (! function() {
				var vu = g5.wb(956);
				if (vu) {
					if (r.cz.a3E(vu.player)) return 1;
					g5.wZ(956, 0)
				}
				return
			}() && (-1 === (cy = (q.bf ? function() {
				var id = d5.pb(),
					cs = ct.cu;
				if (aC.d2[id])
					for (var cv = ct.cw, wD = aC.wD, a1 = 0; a1 < cs; a1++) {
						var cy = cv[a1];
						if (wD[cy] !== id) return cy
					} else if (1 < cs) return aR[cs - 1];
				return -1
			} : function() {
				for (var a3H = ct.cu, a3I = ct.cw, a3J = aS, a1 = 0; a1 < a3H; a1++) {
					var cy = a3I[a1];
					if (0 !== a3J[cy]) return cy
				}
				return -1
			})()) ? ! function() {
				var vu = g5.wb(957);
				if (vu && vu.vj) {
					if (eb.wA(vu.vj.oN << 2)) return 1;
					g5.wZ(957, 0)
				}
				return
			}() : (g5.pa(0, L(231, [b7.b8[cy]]), 956, cy, bO.bX, bO.lC, -1, !0), 0)))) {
			var cs = yt.a3K.a3L;
			if (0 !== cs)
				for (var buffer = yt.a3K.buffer, a1 = 0; a1 < cs; a1++) {
					var oN = buffer[a1];
					if (eb.wA(oN << 2)) return void g5.pa(0, L(232, [f7.nv(oN), f7.nx(oN)]), 957, 0, bO.bX, bO.lC, -1, !0, void 0, {
						bN: 1,
						oN: oN
					})
				}
		}
	}
}

function a3M() {
	this.a3N = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.bg = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bO.bX, "rgb(170,170,170)"
	], this.a3O = [bO.bX, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bO.bX, bO.nW], this.a3P = [bO.nW, bO.bX, bO.bX, bO.bX, bO.nW, bO.nW, bO.nW, bO.nW, bO.bX];
	var qx = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.fw = ["rgba(" + qx[0] + ",", "rgba(" + qx[1] + ",", "rgba(" + qx[2] + ",", "rgba(" + qx[3] + ",", "rgba(" + qx[4] + ",", "rgba(" + qx[5] + ",", "rgba(" + qx[6] + ",", "rgba(" + qx[7] + ",", "rgba(" + qx[8] + ",", "rgba(" + qx[9] + ","], this
		.fx = ["rgb(" + qx[0] + ")", "rgb(" + qx[1] + ")", "rgb(" + qx[2] + ")", "rgb(" + qx[3] + ")", "rgb(" + qx[4] + ")", "rgb(" + qx[5] + ")", "rgb(" + qx[6] + ")", "rgb(" + qx[7] + ")", "rgb(" + qx[8] + ")", "rgb(" + qx[9] + ")"], this.aD =
		null, this.a3Q = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.a3R = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.d2 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.wD = new Uint8Array(q.aA), this.bh = new Uint8Array(q.aA), this.a3S = new Uint16Array(q.aA), this.a3T = new Uint16Array(this.d2.length + 1), this.a3U = new Uint16Array(this.d2.length), this.gw =
		function() {
			this.aD = [L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241)]
		}, this.az = function() {
			if (this.wD.fill(0), this.bh.fill(0), this.a3V(), q.bf) {
				if (9 === q.eU) {
					for (var wD = aC.wD, a1 = q.data.teamPlayerCount[7] - 1; 0 <= a1; a1--) wD[a1] = 1;
					var cs = q.aA;
					for (a1 = q.data.teamPlayerCount[7]; a1 < cs; a1++) wD[a1] = 2;
					aC.d2[1] = 7, aC.d2[2] = 8
				} else q.cK ? function() {
					var a3R = aC.a3R,
						colorsData = q.data.colorsData;
					if (!q.data.selectableColor)
						for (var a1 = q.bq - 1; 0 <= a1; a1--) colorsData[a1] = r2.r3(262144);
					var a3h = 0,
						rh = 768,
						a3i = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = q.data.teamPlayerCount;
					for (a1 = 0; a1 < 9; a1++)
						if (teamPlayerCount[a1]) {
							for (var gM = 0, fv = 0; fv < 3; fv++) gM += Math.abs(a3R[a1][fv] - a3i[fv]);
							gM < rh && (a3h = a1, rh = gM)
						} var a3j = new Uint16Array(9);
					for (a1 = 0; a1 < 9; a1++) a3j[a1] = teamPlayerCount[a1];
					var d2 = aC.d2,
						a3k = new Uint8Array(9),
						fe = (d2[0] = 0, 1);
					for (a1 = 1; a1 < 9; a1++) a3j[a1] && (a3k[a1] = fe, d2[fe++] = a1);
					var gI = q.bq,
						wD = aC.wD;
					a3j[a3h] ? (a3j[a3h]--, wD[0] = a3k[a3h]) : gI = 0;
					var aN = 0;
					for (a1 = gI; a1 < q.dl; a1++) {
						var aF = d2[aN];
						if (a3j[aF]) a3j[aF]--, wD[a1] = a3k[aF];
						else if (a1--, 9 <= ++aN) return console.log("error 325")
					}
				}() : this.bs();
				! function() {
					for (var cs = q.aA, a3S = aC.a3S, a3T = aC.a3T, a3U = aC.a3U, wD = aC.wD, d2 = aC.d2, a3t = d2.length, buffer = new Array(a3t), a1 = 0; a1 < a3t; a1++) buffer[a1] = [];
					for (a1 = 0; a1 < cs; a1++) buffer[d2[wD[a1]]].push(a1);
					for (a1 = 1; a1 <= a3t; a1++) a3T[a1] = a3T[a1 - 1] + buffer[a1 - 1].length;
					for (a1 = 0; a1 < a3t; a1++)
						for (var fe = buffer[a1].length, jP = a3T[a1], aF = 0; aF < fe; aF++) a3S[aF + jP] = buffer[a1][aF];
					var bq = q.bq;
					for (a1 = 0; a1 < a3t; a1++)
						for (fe = buffer[a1].length, jP = a3T[a1], aF = 0; aF < fe; aF++)
							if (a3S[aF + jP] >= bq) {
								a3U[a1] = aF;
								break
							}
				}(), ! function() {
					for (var cs = q.aA, wD = aC.wD, bh = aC.bh, d2 = aC.d2, a1 = 0; a1 < cs; a1++) bh[a1] = d2[wD[a1]];
					9 === q.eU && bh.fill(1, cs - yi.qt[5])
				}()
			}
		}, this.a3V = function() {
			for (var a1 = this.d2.length - 1; 0 <= a1; a1--) this.d2[a1] = a1
		}, this.bs = function() {
			var g2 = new Uint8Array(q.bq),
				g3 = new Uint8Array(q.bq),
				a3a = new Uint16Array(8),
				a3b = new Uint16Array(this.d2.length);
			this.a3c(g2, g3, a3a, 1), this.a3d(a3a), this.a3e(a3b, g2, g3), this.a3f(g2, g3, a3b), this.a3g()
		}, this.a3c = function(g2, g3, a3j, a3l) {
			for (var fv, cb, a3m, cs = this.d2.length - a3l, dC = new Uint16Array(cs), a3R = this.a3R, colorsData = q.data.colorsData, a1 = q.bq - 1; 0 <= a1; a1--) {
				for (fv = cs; a3l <= fv; fv--) dC[fv - 1] = Math.abs(4 * (colorsData[a1] >> 12) - a3R[fv][0]) + Math.abs(4 * (colorsData[a1] >> 6 & 63) - a3R[fv][1]) + Math.abs(4 * (63 & colorsData[a1]) - a3R[fv][2]);
				for (a3m = 768, fv = cs - 1; 0 <= fv; fv--) dC[cb = (fv + a1) % cs] < a3m && (a3m = dC[cb], g2[a1] = cb);
				for (a3j[g2[a1]] += 4, a3m = 768, fv = cs - 1; 0 <= fv; fv--) dC[cb = (fv + a1) % cs] < a3m && cb !== g2[a1] && (a3m = dC[cb], g3[a1] = cb);
				a3j[g3[a1]]++
			}
		}, this.a3d = function(a3j) {
			for (var fv, mc, cs = this.d2.length - 1, a1 = cs; 0 <= a1; a1--) this.d2[a1] = a1;
			for (a1 = cs - 1; 0 <= a1; a1--) a3j[a1]++;
			for (a1 = 1; a1 <= cs; a1++) {
				for (mc = 0, fv = 1; fv < cs; fv++) a3j[fv] > a3j[mc] && (mc = fv);
				a3j[mc] = 0, this.d2[a1] = mc + 1
			}
		}, this.a3e = function(a3b, g2, g3) {
			var fv, iG, aN, gM, cb, gH, nb, a3n = this.d2.length - 1,
				u2 = new Uint16Array(a3n),
				a3o = [],
				a3p = 0,
				x7 = [],
				a3q = [];
			loop: for (var a1 = 0; a1 < q.bq; a1++)
				if (null !== (iG = r.aI.hD(b7.bB[a1]))) {
					for (fv = x7.length - 1; 0 <= fv; fv--)
						if (iG === x7[fv]) {
							a3q[fv].push(a1), a3p = Math.max(a3p, a3q[fv].length);
							continue loop
						} x7.push(iG), a3o.push(!1), a3q.push([a1]), a3p = Math.max(a3p, 1)
				}
			for (; 2 < q.ya && a3p > hA.iV(q.bq, q.ya);) q.ya--, q.eU--;
			for (fv = x7.length - 1; 0 <= fv; fv--) {
				for (gM = -1, aN = x7.length - 1; 0 <= aN; aN--) !a3o[aN] && (-1 === gM || a3q[aN].length > a3q[gM].length) && (gM = aN);
				for (aN = a3n - 1; 0 <= aN; aN--) u2[aN] = 1;
				for (aN = a3q[gM].length - 1; 0 <= aN; aN--) u2[g2[a3q[gM][aN]]] += 3, u2[g3[a3q[gM][aN]]]++;
				for (a1 = a3n - 1; 0 <= a1; a1--) {
					for (cb = gM % a3n, aN = a3n - 1; 0 <= aN; aN--) u2[aN] > u2[cb] && (cb = aN);
					for (gH = -1, aN = q.ya; 0 < aN; aN--)
						if (this.d2[aN] === cb + 1) {
							gH = aN;
							break
						} if (u2[cb] = 0, -1 !== gH) {
						for (nb = 0, aN = q.ya; 0 < aN; aN--) a3b[gH] > a3b[aN] && nb++;
						if (nb !== q.ya - 1) {
							for (aN = a3q[gM].length - 1; 0 <= aN; aN--) a3b[gH]++, this.wD[a3q[gM][aN]] = gH;
							break
						}
					}
				}
				a3o[gM] = !0
			}
		}, this.a3f = function(g2, g3, a3b) {
			for (var a1, a3r, cs = this.d2.length - 1, border = hA.iV(q.bq, q.ya), a3s = (0 < q.bq % q.ya && border++, new Uint8Array(1 + cs)), fv = cs; 1 <= fv; fv--) a3s[this.d2[fv]] = fv;
			for (a1 = 0; a1 < q.bq; a1++) a3r = a3s[g2[a1] + 1], 0 === this.wD[a1] && a3r <= q.ya && a3b[a3r] < border && (a3b[a3r]++, this.wD[a1] = a3r);
			for (a1 = 0; a1 < q.bq; a1++) a3r = a3s[g3[a1] + 1], 0 === this.wD[a1] && a3r <= q.ya && a3b[a3r] < border && (a3b[a3r]++, this.wD[a1] = a3r);
			for (fv = q.ya; 1 <= fv; fv--)
				for (a1 = q.bq - 1; 0 <= a1 && !(a3b[fv] >= border); a1--) 0 === this.wD[a1] && (a3b[fv]++, this.wD[a1] = fv)
		}, this.a3g = function() {
			if (q.ya < 8) q.ya++, q.eU++, q.yb = 1;
			else
				for (var a1 = q.bq; a1 < q.aA; a1++) this.wD[a1] = 1 + a1 % q.ya
		}
}

function v5() {
	var hS, hT, y, a3u = -1;
	this.show = function() {
		hS.show(), this.resize(), a3u = b5.buffer.data[125].value
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(242), [new g("⬅️ " + L(1), function() {
		a3u !== b5.buffer.data[125].value ? n.b0.a3v() : n.vI(13)
	})]), hT = new i(hS.j, ((y = []).push(function() {
		var a3 = new a4,
			a40 = (a3.a5(L(243)), a3.hr(L(244)), new g(L(245), function() {
				b5.hi.hj(130, 0), n.b0.a3v()
			}, 0, 0, 1)),
			iL = new hZ(b5.buffer.data[126], 0, function() {
				a40.button.click()
			});
		return a3.aK(iL), iL.cb.placeholder = "a,b,c", iL.cb.style.marginTop = "0.5em", a3.aK(new hk([a40.button])), a3
	}()), y.push(function() {
		var a3 = new a4,
			a40 = new g(L(245), function() {
				b5.hi.hj(130, 1), n.b0.a3v()
			}, 0, 0, 1),
			a41 = new hZ(b5.buffer.data[129], 1, function() {
				a41.cb.focus()
			}),
			a42 = new hZ(b5.buffer.data[128], 1, function() {
				a40.button.click()
			});
		return a3.a5(L(246)), a3.aK(a42), a42.cb.style.marginBottom = "0.5em", a3.a5(L(247)), a3.aK(a41), a3.aK(new hk([a40.button])), a3
	}()), y.push(function() {
		var a3 = new a4;
		return a3.a5(L(248)), b5.buffer.data[125].a6 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], a3.a7(new a8(b5.buffer.data[125])), a3
	}()), y.push(function() {
		var a3 = new a4;
		return a3.a5(L(249)), a3.aK(new is(b5.buffer.data[127], L(250))), a3
	}()), y))
}

function a43() {
	this.zh = function(player) {
		z2.a44(player), q.yW++, b7.bo[player] = 2, b7.ul[player] = a0j.sJ.um(), player === q.bS && (z0.show(!1, !1), jK.a0o(), pc.a0p.a0q()), ez.g4(player)
	}
}

function a45() {
	var a46, a47 = [],
		a48 = -1,
		a49 = 0,
		a4A = 0;

	function a4H() {
		a49 = bL.c8, (3 === this.a4I ? a4G : (a48 = (a47.length + a48 + 2 * this.a4I - 1) % a47.length, a4F))()
	}

	function a4F() {
		0 !== a47.length && (a4A = 0, a46 && a46.ln(), (a46 = new a4J(a4H)).hj(a48, a47.length), a46.show(a47[a48]), uN.message.resize())
	}

	function a4G() {
		a4A = 1, a46 && a46.ln(), (a46 = new xA(a4F)).hj(a47.length), a46.show(), uN.message.resize()
	}
	this.a08 = function(a1R) {
		var vu;
		2 === a1R.id && 3 === a1R.a06 ? uN.nr.a24(a1R.hp) : (vu = uN.nr.a22(a1R, uN.nr.a23(a1R)), (5 !== a1R.id && 6 !== a1R.id || (n.vK(29).a4B().a4C(vu), 5 === a1R.id)) && (vu = bL.c8 < a49 + 2e4, a48 !== a47.length - 1 && vu || (a48 = a47
			.length), __fx.pingFilter.isMuted(a1R, "vs") || (a47.push(a1R), b5.buffer.data[14].value || 7 === a1R.id || a4E.play(), a46 && (a4A && (b5.buffer.data[13].value || vu) ? a46.hj(a47.length) : a4F()))))
	}, this.show = function() {
		a4G()
	}, this.aL = function() {
		a48 = a47.length - 1, a46 && a46.ln(), a46 = null
	}, this.resize = function() {
		a46 && a46.resize()
	}, this.a4K = function() {
		return a47
	}
}

function a4L() {
	function a4V(player, dn, a4S, rN) {
		var xg;
		if (eb.wA(a4S)) xg = q.aA;
		else {
			if ((xg = eb.wB(a4S)) === player) return void dg.a0e(player, dn - r.cz.a4c(player, dn), 12);
			if (!a4Q.a4R(player, xg)) return void jd.a4d.a4e(player, xg, dn)
		}
		yB.a4f(player, xg) || yB.a4g(player) ? (b7.a0S[player].push(rN << 2), yB.qi(player, dn, xg), z1.a4h(player, !0)) : dg.a0e(player, dn, 12)
	}
	this.bs = function() {
		for (var rK = il.b0.rK, rP = il.b0.rP, a2i = il.b0.a2i, a1 = il.b0.rm - 1; 0 <= a1; a1--) 65535 === a2i[a1] && function(a1, rN, oL) {
			if (6 === oL) {
				if (il.rL.a2W(a1, rN)) return il.b0.re[a1]++, il.b0.a2i[a1] = 0, 0
			} else {
				var player = il.b0.rS[a1] >> 3,
					a1 = il.b0.wH[a1];
				dg.a4U(player), oL < 4 ? a4V(player, a1, rN + f7.a4T[oL] << 2, rN) : 4 === oL ? function(player, dn, rN) {
					var a1, hF, a4Y = f7.a4Z,
						hE = f7.nq(rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.wA(hF)) return a4V(player, dn, hF, rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.a4a(hF) && !eb.a4b(player, hF)) return a4V(player, dn, hF, rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.a4a(hF)) return a4V(player, dn, hF, rN)
				}(player, a1, rN) : 5 === oL && function(player, dn, rN) {
					var a1, hF, a4Y = f7.a4Z,
						hE = f7.nq(rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.a4a(hF) && eb.a4b(player, hF)) return a4V(player, dn, hF, rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.a4a(hF)) return a4V(player, dn, hF, rN);
					for (a1 = 0; a1 < 4; a1++)
						if (hF = hE + a4Y[a1], eb.wA(hF)) return a4V(player, dn, hF, rN)
				}(player, a1, rN)
			}
			return 1
		}(a1, f7.rO(rP[a1]), rK[a1] % 64) && (il.rL.a2S(a1), il.a0h.a4N(a1))
	}, this.a4O = function(player, oN, oL, rF, dn) {
		if (!(5 <= oL)) {
			var a4P = q.bS;
			if (r.cz.pt(a4P) && a4Q.a4R(player, a4P) && player !== a4P && 0 !== b7.a0a[a4P].length && r.cz.w3(player, 5)) {
				for (var a4S, wa = !1, a1 = 0; a1 < 4; a1++)
					if (a4S = oN + f7.a4T[a1] << 2, eb.w9(a4S) && !eb.wA(a4S) && eb.wB(a4S) === a4P) {
						wa = !0;
						break
					} wa && (g5.wZ(719, 0), oL = dn < 25e3 ? L(251) + " (" + r.aI.eh(dn) + ") ⛵" : L(252) + " (" + r.aI.eh(dn) + ") 🚢", g5.pa(180, oL, 719, player, bO.pl, bO.lC, -1, !0, void 0, {
					fv: 1,
					rF: rF
				}))
			}
		}
	}
}

function a4i() {
	var a4j = [];
	this.az = function() {
		a4j = []
	}, this.rp = function() {
		return 65536 === a4j.length
	}, this.a4k = function(u8, u9) {
		for (var rk = a4j, cs = rk.length, a1 = 0; a1 < cs; a1++) {
			var cy = rk[a1];
			if (cy[0] === u8 && cy[cy.length - 1] === u9) return a1
		}
		return -1
	}, this.rl = function(rb) {
		var a4l = new Uint32Array(rb.length);
		return a4l.set(rb), a4l.reverse()
	}, this.a2a = function(wo, vg) {
		var fe = wo.length - 1,
			a4m = new Uint32Array(fe + vg.length);
		return a4m.set(wo, 0), a4m.set(vg, fe), a4m
	}, this.a2f = function(wo, vg, bm, oN, a4n) {
		a4n && (bm = (vg = this.rl(vg)).length - bm - 2);
		a4n = vg.subarray(bm + 1 + (oN === vg[bm + 1])), oN = new Uint32Array(wo.length + a4n.length);
		return oN.set(wo, 0), oN.set(a4n, wo.length), oN
	}, this.uB = function(rb) {
		return a4j.push(rb), a4j.length - 1
	}, this.get = function(a1) {
		return a4j[a1]
	}, this.a4p = function() {
		return a4j
	}, this.a4q = function(u8, u9) {
		return null
	}
}

function a4r() {
	var qT = new Uint8Array(q.aA),
		a4s = new Uint16Array(q.aA),
		a4t = new Uint16Array(q.aA),
		a4u = new Uint8Array(q.aA),
		a4v = (this.dn = new Uint8Array(q.aA), new Uint16Array(q.aA)),
		a4w = new Uint16Array(q.aA);

	function a56(a1) {
		qT[a1] = 1 + hA.iV(a4v[a1] * r2.random(), 10 * r2.value(100))
	}
	this.w = null, this.a4x = [97, 94, 70, 40, 20, 0, 100], this.a4y = [500, 450, 400, 300, 80, 50, 100], this.a4z = [0, 0, 5, 25, 50, 100, 0], this.dm = [60, 74, 112, 200, 256, 512, 512], this.a2N = [1, 2, 3, 4, 6, 8, 1], this.a50 = [500, 450, 400,
		300, 80, 50, 100
	], this.a51 = [100, 150, 250, 400, 600, 1e3, 100], this.gw = function() {
		this.w = [L(253), L(254), L(255), L(256), L(257), L(258), "H Bot"]
	}, this.az = function() {
		qT.fill(0), a4s.fill(0), a4t.fill(0), a4u.fill(0), this.dn.fill(0), a4v.fill(0), a4w.fill(0);
		var a52 = q.bq;
		if (9 === q.eU) this.a53();
		else if (__fx.customLobby.isActive())
			for (a1 = q.qz - 1; 0 <= a1; a1--) this.dn[a1 + a52] = __fx.customLobby.gameInfo.difficulty;
		else if (q.cK)
			if (3 === q.data.botDifficultyType)
				for (a1 = q.qz - 1; 0 <= a1; a1--) {
					var aF = a1 + a52;
					this.dn[aF] = q.data.botDifficultyData[aF]
				} else if (2 === q.data.botDifficultyType)
					for (a1 = q.qz - 1; 0 <= a1; a1--) this.dn[aF = a1 + a52] = q.data.botDifficultyTeam[aC.d2[aC.wD[aF]]];
				else if (1 === q.data.botDifficultyType) {
			var a55 = this.w.length;
			for (a1 = q.qz - 1; 0 <= a1; a1--) this.dn[a1 + a52] = a1 % a55
		} else
			for (a55 = q.data.botDifficultyValue, a1 = q.qz - 1; 0 <= a1; a1--) this.dn[a1 + a52] = a55;
		else
			for (var a54 = 8 === q.eU ? 1 : 0, a1 = q.qz - 1; 0 <= a1; a1--) this.dn[a1 + a52] = a54;
		for (a1 = 0; a1 < a52; a1++) this.dn[a1] = 6;
		var cs = q.aA;
		for (a1 = 0; a1 < cs; a1++) this.dn[a1] <= 2 ? (a4u[a1] = 5, a4v[a1] = a4w[a1] = 1040, 0 === this.dn[a1] ? (a4s[a1] = 980, a4t[a1] = 980) : 1 === this.dn[a1] ? (a4s[a1] = 980, a4t[a1] = 920, a4v[a1] = a4w[a1] = 1100) : (a4s[a1] = 825,
				a4t[a1] = 750)) : this.dn[a1] <= 4 ? (a4u[a1] = 1 + r2.r3(20), 3 === this.dn[a1] ? (a4s[a1] = a4t[a1] = 500, a4v[a1] = a4w[a1] = 1e3) : (a4w[a1] = 250 + r2.r3(1501), a4v[a1] = 500 + r2.r3(501), a4s[a1] = 300 + r2.r3(201), a4t[
				a1] = 100 + r2.r3(201))) : this.dn[a1] <= 5 ? (a4v[a1] = 1e3, a4w[a1] = 1e3, a4u[a1] = 35 + r2.r3(16), a4s[a1] = 300 + r2.r3(201), a4t[a1] = 50 + r2.r3(101)) : (a4v[a1] = a4w[a1] = 800, a4u[a1] = 5, a4s[a1] = 10, a4t[a1] = 250),
			a56(a1)
	}, this.a53 = function() {
		for (var gF = yi.qu, a52 = q.bq, a1 = gF - 1; 0 <= a1; a1--) this.dn[a1 + a52] = 0;
		for (var fv = 0; fv < 6; fv++) {
			for (a1 = gF + yi.qt[fv] - 1; gF <= a1; a1--) this.dn[a1 + a52] = fv;
			gF += yi.qt[fv]
		}
	}, this.a57 = function(cy, value) {
		qT[cy] = Math.min(value, qT[cy])
	}, this.bs = function(cy) {
		0 == --qT[cy] && ! function(cy) {
			(function(cy) {
				a4v[cy] !== a4w[cy] && (a4v[cy] += a4v[cy] < a4w[cy] ? 3 : -3);
				a4s[cy] !== a4t[cy] && (a4s[cy] += a4s[cy] < a4t[cy] ? a4u[cy] : -a4u[cy], a4s[cy] = (Math.abs(a4s[cy] - a4t[cy]) <= a4u[cy] ? a4t : a4s)[cy]);
				qT[cy] = hA.iV(a4v[cy], 10)
			})(cy), yt.a5A.a5B(cy, hA.iV(a4s[cy] * b7.di[cy], 1e3))
		}(cy)
	}, this.a5C = function(cy, fe) {
		a4v[cy] = a4w[cy] = fe
	}
}

function a5D() {
	this.gm = function(canvas, ge, gd) {
		var dt = canvas.width,
			du = canvas.height,
			aN = r.bF.sq(dt, du),
			fF = r.bF.getContext(aN, !0),
			canvas = (fF.drawImage(canvas, 0, 0), fF.getImageData(0, 0, dt, du));
		return ge(canvas.data, dt, du, gd), fF.putImageData(canvas, 0, 0), aN
	}, this.gk = function(fm, dt, du) {
		for (var c4 = dt - 1; 0 <= c4; c4--)
			for (var bp = du - 1; 0 <= bp; bp--) {
				var a1 = 4 * (c4 + bp * dt);
				fm[3 + a1] = fm[a1], fm[a1] = fm[1 + a1] = fm[2 + a1] = 255
			}
	}, this.gg = function(fm, dt, du) {
		for (var c4 = dt - 1; 0 <= c4; c4--)
			for (var bp = du - 1; 0 <= bp; bp--) {
				var a1 = 4 * (c4 + bp * dt);
				fm[1 + a1] > fm[2 + a1] + 10 && (fm[3 + a1] = fm[a1], fm[1 + a1] = fm[2 + a1])
			}
	}, this.gi = function(fm, dt, du, gd) {
		for (var gap = Math.floor(Math.min(dt, du) * gd), c4 = 0; c4 < dt; c4++)
			for (var a1, bp = 0; bp < du; bp++)(c4 < gap || bp < gap || dt - gap <= c4 || du - gap <= bp) && (fm[3 + (a1 = 4 * (c4 + bp * dt))] = 255 - 255 * (fm[1 + a1] - fm[a1]) / (255 - fm[a1]))
	}, this.kI = function(fm, dt, du, gd) {
		for (var c4 = dt - 1; 0 <= c4; c4--)
			for (var bp = du - 1; 0 <= bp; bp--) {
				var a1 = 4 * (c4 + bp * dt);
				fm[a1] = gd[0], fm[1 + a1] = gd[1], fm[2 + a1] = gd[2]
			}
	}, this.gh = function(fm, dt, du, gd) {
		for (var gap = Math.floor(dt * gd), c4 = 0; c4 < dt; c4++)
			for (var a1, bp = 0; bp < du; bp++)(c4 < gap || bp < gap || dt - gap <= c4 || du - gap <= bp) && (fm[a1 = 4 * (c4 + bp * dt)] = fm[1 + a1] = fm[2 + a1] = 0)
	}, this.gj = function(fm, dt, du) {
		for (var bp, a1, c4 = dt - 1; 0 <= c4; c4--)
			for (bp = du - 1; 0 <= bp; bp--) 200 < fm[1 + (a1 = 4 * (c4 + bp * dt))] && fm[1 + a1] - 20 > fm[a1] && fm[1 + a1] - 20 > fm[2 + a1] ? fm[a1] + fm[2 + a1] < 40 ? fm[3 + a1] = 0 : (fm[3 + a1] = fm[a1], fm[a1] = 255, fm[1 + a1] = 255,
				fm[2 + a1] = 255) : fm[a1] < 50 && fm[1 + a1] < 50 && fm[2 + a1] < 50 && (fm[a1] + fm[1 + a1] + fm[2 + a1] < 50 ? fm[3 + a1] = 180 : fm[3 + a1] = 180 + Math.floor(75 * (fm[a1] + fm[1 + a1] + fm[2 + a1] - 50) / 100))
	}, this.gl = function(fm, dt, du) {
		for (var bp, a1, c4 = dt - 1; 0 <= c4; c4--)
			for (bp = du - 1; 0 <= bp; bp--) fm[1 + (a1 = 4 * (c4 + bp * dt))] > fm[a1] + 20 && fm[1 + a1] > fm[2 + a1] + 20 && fm[a1] + fm[2] < 40 && (fm[3 + a1] = 255 - fm[1 + a1], fm[a1] = fm[1 + a1] = fm[2 + a1] = fm[a1])
	}, this.a5F = function(fm, dt, du, gd) {
		for (var n1 = dt >> 1, c4 = 0; c4 < dt; c4++)
			for (var bp = 0; bp < du; bp++) Math.sqrt((c4 - n1) * (c4 - n1) + (bp - n1) * (bp - n1)) > gd * n1 && (fm[4 * (c4 + bp * dt) + 3] = 0)
	}
}

function kc() {
	this.a5G = function() {
		for (var cs = q.bq, cx = pc.result.cx, jP = cx.length, ul = (hy.wx(17 + 16 * cs + 33 * jP), hy.wy(1, 1), hy.wy(4, 12), hy.wy(10, jP), hy.wy(1, +(2 === q.yd)), hy.wy(1, q.ye % 2), b7.ul), a1 = 0; a1 < cs; a1++) hy.wy(16, ul[a1]);
		for (var br = b7.br, a1 = 0; a1 < jP; a1++) {
			var cy = cx[a1];
			hy.wy(9, cy), hy.wy(24, br[cy])
		}
		hW.b0.send(hW.b0.uY, hy.mH)
	}
}

function a5H() {
	var l2, a5I, dt, du, kt, a5J, a5K, qU, canvas, qZ, a5L;

	function pH() {
		return Math.floor((bD.dt - dt) / 2) < mS.du + 2 * bY.gap ? bD.du - du - 4 * bY.gap - mS.du : bD.du - du - 2 * bY.gap
	}
	this.az = function() {
		a5L = l2 = !1, kt = .61, a5J = .07, a5K = .09, qZ = qU = du = 0
	}, this.resize = function() {
		var b9, cU, aN, a5P, a5Q, bk;
		l2 && (dt = mm(dt = b2.b3.b4() ? Math.floor(.69 * bD.bE) : Math.floor(.5 * bD.bE), ml(bD.dt - 2 * bY.gap, 10)), dt = mm(dt, Math.floor(3.57 * ml(bD.du - 2 * bY.gap, 3))), du = Math.floor(.28 * dt), (canvas = document.createElement(
			"canvas")).width = dt, canvas.height = du, b9 = canvas.getContext("2d", {
			alpha: !0
		}), cU = Math.floor(1 + du / 40), b9.clearRect(0, 0, dt, du), b9.fillStyle = bO.lC, b9.fillRect(cU, cU, dt - 2 * cU, du - 2 * cU), b9.lineJoin = "bevel", b9.lineWidth = 2 * cU, b9.strokeStyle = bO.bX, b9.strokeRect(cU, cU, dt -
			2 * cU, du - 2 * cU), b9.imageSmoothingEnabled = !1, aN = bl.get(a5I), a5P = aN.width, bk = (1 === a5I ? .85 : 21 === a5I ? .666 : .9) * kt * du / (a5Q = aN.height), b9.setTransform(bk, 0, 0, bk, Math.floor((dt - bk * a5P) /
			2), Math.floor((du - bk * a5Q) / 2)), b9.drawImage(aN, 0, 0), b9.setTransform(1, 0, 0, 1, Math.floor(dt - a5K * du - a5J * du - cU), Math.floor(cU + a5J * du)), function(b9, cs) {
			b9.lineWidth = Math.floor(1 + du / 80), b9.strokeStyle = bO.bX, b9.beginPath(), b9.moveTo(0, 0), b9.lineTo(cs, cs), b9.moveTo(0, cs), b9.lineTo(cs, 0), b9.stroke()
		}(b9, Math.floor(a5K * du)), b9.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(h2, a5N, pR, a5O) {
		l2 || a5O && a5L || (a5I = pR ? 21 : h2 ? 1 : 2, l2 = a5L = !0, this.resize(), cd.aL(), mS.pL(), qZ = bL.c8, qU = a5N ? 1 : 0)
	}, this.bs = function() {
		!l2 || 1 <= qU || (qU = 1 < (qU += 5e-4 * (bL.c8 - qZ)) ? 1 : qU, qZ = bL.c8, bL.cC = !0)
	}, this.c3 = function(c4, bp) {
		return !(!l2 || qU <= 0 || (c4 -= Math.floor((bD.dt - dt) / 2), bp -= pH(), c4 < 0) || bp < 0 || dt < c4 || du < bp || (dt - du / 3 < c4 && bp < du / 3 && (l2 = !1, bL.cC = !0), 0))
	}, this.cR = function() {
		!l2 || qU <= 0 || (cS.globalAlpha = qU, cS.drawImage(canvas, Math.floor((bD.dt - dt) / 2), pH()), cS.globalAlpha = 1)
	}
}

function a5S(a5T) {
	var a5U = document.createElement("div"),
		a5V = document.createElement("div"),
		a5W = (this.c4 = 0, this.bp = 0);

	function a5Z() {
		uN.a1h.aL()
	}
	this.nK = a5T, this.show = function(c4, bp, a5b) {
		if (a5W) return [0, 0];
		a5W = 1, this.c4 = c4, this.bp = bp,
			function(self, a5b) {
				var dt = r.bF.oV(.16, .7),
					du = a5T.length * dt / 3,
					a5d = bD.dt / bD.cp,
					a5e = bD.du / bD.cp,
					gH = Math.min(1, Math.min(a5d / dt, a5e / du));
				dt *= gH, du *= gH, a5b && (self.c4 += r.bF.oV(.03, .5)), self.c4 = hA.hB(self.c4, 0, a5d - dt), self.bp = hA.hB(self.bp, 0, a5e - du), a5V.style.left = self.c4 + "px", a5V.style.top = self.bp + "px", a5V.style.width = dt + "px",
					a5V.style.height = du + "px", a5V.style.font = r.bF.bG(0, .3 * du / a5T.length), r.bF.kB(a5V, 5);
				for (var a1 = 1; a1 < a5T.length; a1++) r.bF.kB(a5T[a1].button, 8)
			}(this, a5b), document.body.appendChild(a5U)
	}, this.aL = function() {
		a5W && (a5W = 0, a5U.removeEventListener("click", a5Z), n.removeChild(document.body, a5U))
	};
	for (var a1 = 0; a1 < a5T.length; a1++) new a5X("" + (1 + a1), a5T[a1].button, 0, 1);
	a5U.style.position = "fixed", a5U.style.top = "0", a5U.style.left = "0", a5U.style.width = "100%", a5U.style.height = "100%", a5U.style.zIndex = "5", a5V.style.position = "absolute",
		function() {
			for (var a5a = (100 / a5T.length).toFixed(2) + "%", a1 = 0; a1 < a5T.length; a1++) a5T[a1].button.style.width = "100%", a5T[a1].button.style.height = a5T[a1].button.style.maxHeight = a5a, a5T[a1].button.style.padding = "0.0em 0.9em", a5V
				.appendChild(a5T[a1].button)
		}(), a5U.appendChild(a5V), a5U.addEventListener("click", a5Z)
}

function km() {
	this.a5f = function() {
		b5.b0.a5g(), b5.hi.hj(105, oh.oi.a5h(oh.oi.a5i(5))), b5.hi.hj(106, oh.oi.a5h(oh.oi.a5i(15))), b5.hi.hj(109, 0), b5.hi.hj(108, b5.buffer.data[109].value), b5.hi.hj(111, b5.buffer.data[109].value + 1), b5.hi.hj(107, 0), b5.hi.hj(110, "")
	}, this.a5j = function() {
		var data;
		hx.size < hy.hz(29) ? hW.b0.i0(0, 3254) : ((data = {
			oj: hx.i2(30),
			a5k: hx.i2(16),
			a5l: hx.i2(30),
			a5m: hx.i2(30),
			a5n: hx.i2(30),
			a5o: hx.i6(32),
			username: i3.i4.i5(5),
			a5p: i3.i4.i5(3),
			a5q: i3.i4.i5(3),
			a5r: hx.i6(32),
			a5s: hx.i6(32),
			a5t: hx.i2(30),
			a5u: hx.i6(32),
			a5v: hx.i6(32),
			a5w: hx.i6(32),
			a5x: hx.i6(32),
			a5y: hx.i6(32),
			a5z: hx.i6(30),
			a60: hx.i6(32),
			a61: i3.i4.i5(3),
			a62: hx.i6(2),
			a63: hx.i6(10),
			a64: i3.i4.i5(8),
			a65: hx.i6(5),
			a66: hx.i2(30),
			a67: hx.i2(30),
			a68: hx.i6(32),
			a69: hx.i2(3),
			a6A: hx.i2(8),
			a6B: hx.i2(30),
			a6C: hx.i6(32),
			a6D: hx.i2(1),
			a6E: i3.i4.i5(6),
			a6F: hx.i2(1),
			a6G: hx.i2(1),
			a6H: hx.i2(1),
			a6I: hx.i2(30),
			a6J: hx.i2(1),
			a6K: hx.i2(1)
		}).a6J && (data.a6L = hx.i6(32), data.a6M = hx.i2(30), data.a6N = hx.i2(30), data.a6O = hx.i2(1)), 8 === n.go && (25 === n.gp().a6P ? (data.a6Q = !0, n.b0.v6 = data, n.gp().i7(25, !1)) : (data.a6Q = !1, b5.hi.hj(160, +(data.a6J &&
			data.a6O)), data.hp = b5.buffer.data[105].value, n.b0.v3 = data, b5.hi.a6R(data), n.gp().i7(16, !0))))
	}
}

function a6S() {
	var a6T = new Uint16Array(q.aA),
		a6U = 0;

	function a6c(kf, a6a) {
		var aN = bL.bM();
		return 3213 <= aN ? 4 + hA.iV(100 * a6a, yl.a6d(kf)) : (kf = 1 + hA.iV(q.pZ, 300), aN < 357 ? 2 + hA.iV(100 * a6a, kf) : aN < 714 ? 2 + hA.iV(100 * a6a, 4 * kf) : aN < 1071 ? 2 + hA.iV(100 * a6a, 10 * kf) : aN < 2142 ? 2 + hA.iV(100 * a6a,
			30 * kf) : 2 + hA.iV(100 * a6a, 100 * kf))
	}

	function a6b(kf) {
		return q.cK || 4284 <= bL.bM() || r.cz.fO(kf)
	}
	this.az = function() {
		a6T.fill(0), a6U = 15
	}, this.r8 = function(a6V) {
		var player = q.bS;
		return !!r.cz.a6W(player, a6V) && !(!r.cz.a6X(player, r.cz.a6Y(player, mS.y8()), a6V) || (player = a6V, a6V = d7.dF[0], !a6b(player) && a6T[player] + a6c(player, a6V) > a6U))
	}, this.qi = function(kf, a6a) {
		if (!a6b(kf)) {
			a6a = a6c(kf, a6a);
			if (a6T[kf] + a6a > a6U) return !1;
			a6T[kf] += a6a
		}
		return !0
	}, this.bs = function() {
		bL.bM() % 100 == 99 && (bL.bM() < 1071 ? a6U += 4 : bL.bM() < 2142 ? a6U += 6 : bL.bM() < 3213 ? a6U += 8 : a6U += 10)
	}
}

function a6e() {
	var a6f, a6g, a6h;

	function a6n(a1) {
		var button = a19.nK[a1],
			c4 = button.c4,
			bp = button.bp,
			dt = button.dt,
			du = button.du;
		cS.fillStyle = button.a6l, cS.fillRect(c4, bp, dt, du), a1 === a6f && (cS.fillStyle = a6h, cS.fillRect(c4, bp, dt, du)), cS.lineWidth = bY.bZ, cS.strokeStyle = a6g, cS.strokeRect(c4, bp, dt, du),
			function(button) {
				var c4 = button.c4,
					bp = button.bp,
					dt = button.dt,
					du = button.du;
				r.bF.textAlign(cS, 1), r.bF.textBaseline(cS, 1), cS.font = button.font, cS.fillStyle = a6g, cS.fillText(button.a6k, Math.floor(c4 + dt / 2), Math.floor(bp + du / 2 + .1 * button.fontSize))
			}(button)
	}
	this.dt = 0, this.du = 0, this.bp = 0, this.gap = 0, this.az = function() {
		a6f = -1, a6g = bO.bX, a6h = "rgba(255,255,255,0.16)", this.nK = new Array(7), this.du = Math.floor((b2.b3.b4() ? .123 : .093) * bD.bE), this.dt = Math.floor((b2.b3.b4() ? 3.96 : 4.2) * this.du), this.gap = Math.floor(.025 * this.dt);
		var a6i = Math.floor(.26 * this.du),
			a6j = r.bF.bG(1, a6i);
		this.nK[0] = {
			c4: 0,
			bp: 0,
			dt: Math.floor(.6 * this.dt - this.gap / 2),
			du: this.du,
			a6k: "Multiplayer",
			font: a6j,
			a6l: "rgba(22,88,22,0.8)",
			fontSize: a6i
		}, a6i = Math.floor(.18 * this.du), a6j = r.bF.bG(1, a6i), this.nK[1] = {
			c4: 0,
			bp: 0,
			dt: this.dt - this.nK[0].dt - this.gap,
			du: this.du,
			a6k: "Single Player",
			font: a6j,
			a6l: "rgba(22,88,88,0.8)",
			fontSize: a6i
		}, this.nK[2] = {
			c4: 0,
			bp: 0,
			dt: this.dt,
			du: Math.floor(.3 * this.du),
			a6k: "",
			font: this.nK[1].font,
			a6l: "rgba(100,0,0,0.8)",
			fontSize: this.nK[1].fontSize
		}, this.nK[3] = {
			c4: 0,
			bp: 0,
			dt: this.dt,
			du: this.du,
			a6k: "Back",
			font: this.nK[0].font,
			a6l: "rgba(0,0,0,0.8)",
			fontSize: this.nK[0].fontSize
		}, this.nK[4] = {
			c4: 0,
			bp: 0,
			dt: this.dt,
			du: Math.floor(.3 * this.du),
			a6k: "The game was updated!",
			font: this.nK[1].font,
			a6l: "rgba(100,0,0,0.8)",
			fontSize: this.nK[1].fontSize
		}, this.nK[5] = {
			c4: 0,
			bp: 0,
			dt: this.nK[0].dt,
			du: Math.floor(.8 * this.du),
			a6k: "Reload",
			font: this.nK[0].font,
			a6l: "rgba(0,100,0,0.8)",
			fontSize: this.nK[0].fontSize
		}, this.nK[6] = {
			c4: 0,
			bp: 0,
			dt: this.nK[1].dt,
			du: this.nK[5].du,
			a6k: "Back",
			font: this.nK[0].font,
			a6l: "rgba(0,0,0,0.8)",
			fontSize: this.nK[0].fontSize
		}, this.a1H()
	}, this.a1H = function() {
		this.bp = Math.floor(.54 * bD.du), this.nK[0].c4 = Math.floor(.5 * bD.dt - .5 * this.dt), this.nK[1].c4 = this.nK[0].c4 + this.nK[0].dt + this.gap, this.nK[2].c4 = this.nK[3].c4 = this.nK[0].c4, this.nK[4].c4 = this.nK[5].c4 = this.nK[0]
			.c4, this.nK[6].c4 = this.nK[1].c4, this.nK[0].bp = Math.floor(.54 * bD.du), this.nK[1].bp = this.nK[0].bp, this.nK[2].bp = Math.floor((bD.du - this.nK[2].du - this.nK[3].du - this.gap) / 2), this.nK[3].bp = this.nK[2].bp + this.nK[2]
			.du + this.gap, this.nK[4].bp = Math.floor((bD.du - this.nK[4].du - this.nK[5].du - this.gap) / 2), this.nK[5].bp = this.nK[6].bp = this.nK[4].bp + this.nK[4].du + this.gap
	}, this.a6m = function() {
		a6n(0), a6n(1)
	}, this.a6o = function() {
		a6n(2), a6n(3)
	}, this.a6p = function() {
		a6n(4), a6n(5), a6n(6)
	}, this.cF = function(c4, bp, bI) {
		var a1 = -1;
		return 0 === jz.si() ? a1 = this.a0N(c4, bp, 0, 2) : 3 === jz.si() ? a1 = this.a0N(c4, bp, 3, 1) : 5 === jz.si() && (a1 = this.a0N(c4, bp, 5, 2)), a6f !== a1 && (a6f = a1, bI) && (bL.cC = !0), -1 !== a1 && (kD.reset(), !0)
	}, this.a0N = function(c4, bp, a6q, size) {
		for (var a1 = a6q; a1 < a6q + size; a1++)
			if (c4 >= this.nK[a1].c4 && bp >= this.nK[a1].bp && c4 <= this.nK[a1].c4 + this.nK[a1].dt && bp <= this.nK[a1].bp + this.nK[a1].du) return a1;
		return -1
	}
}

function a6s() {
	this.nj = function(player) {
		return !!q.data.passableWater && il.b0.rm !== il.b0.a2N && il.b0.yG[player] !== il.b0.a6t && 0 !== b7.a0a[player].length
	}, this.a6u = function(nh) {
		var a2U = d7.dM[1];
		return !(4 <= a2U || !il.nr.oJ(f7.nq(nh))) && eb.w9(f7.nq(f7.oO(nh, a2U)))
	}
}

function yj() {
	this.qi = function(player, oN) {
		yv.a6v(player, f7.nv(oN), f7.nx(oN)) && (bL.cC = !0), q.cK && this.bs()
	}, this.bs = function() {
		q.cJ = !1;
		for (var a1 = 0; a1 < q.bq; a1++) 0 !== b7.c0[a1] && 0 === b7.br[a1] && yv.a6w(a1);
		0 !== b7.c0[q.bS] ? (dg.dh[7] = b7.br[q.bS], dg.dh[8] = b7.di[q.bS], mS.a6x(), jK.a6y(), q.cL || cM.vp(b7.el[q.bS] - 5, b7.em[q.bS] - 5, b7.eo[q.bS] + 5, b7.ep[q.bS] + 5), zA.az()) : z0.show(!1, !1, !1, !0), g5.pS(18), ez.en(), ez.bI(!0),
			yy.b0.a6z(), cd.aL(), q.jM = null, jE.a70 = !0, jE.mM(), q.cK && b2.b3.setState(1)
	}
}

function sI() {
	function a74(dC, h2, aF) {
		for (var a1 = 0; a1 < 256; a1++) dC[a1] = (dC[a1] + (h2 >> (a1 + aF) % 30 & 1)) % 256
	}
	this.bs = function(a71, a72) {
		var dC = new Uint8Array(256);
		return function(dC, a71, a72) {
				var a1, a77 = 3 + (4 + a71) % 32768,
					a78 = 12 + a72 % 32768,
					a79 = 17 + ((a71 & a72) + (a71 | a72) + a71) % 32768;
				for (a1 = 0; a1 < 256; a1++) a77 = 1 + a77 * a78 % a79, dC[a1] = a77 % 256
			}(dC, a71, a72), a74(dC, a71, 2), a74(dC, a72, 7),
			function(dC) {
				var a1, h2, a9 = 0;
				for (a1 = 0; a1 < 3e4; a1++) h2 = dC[a9], dC[a9] = (h2 + a1 + dC[(a9 + a1) % 256]) % 256, a9 = (h2 + a1 + a9 + (h2 & a9)) % 256
			}(dC),
			function(dC) {
				var a1, kt = 1,
					ku = 1;
				for (a1 = 0; a1 < 256; a1 += 2) kt = (1 + kt) * (dC[a1] + 1) % 1073741824, ku = (1 + ku) * (dC[a1 + 1] + 1) % 1073741824;
				return [kt, ku]
			}(dC)
	}, this.a7A = function(a7B, a7C, a7D, result) {
		for (var fe = 1 << a7B, a1 = 0; a1 < fe; a1++)
			if (this.a7E(a1, a7C, a7D) === result) return a1;
		return 0
	}, this.a7E = function(a7F, a7C, a7D) {
		for (var a7G = a7C + a7F, a7H = a7D + a7F, h2 = a7G + a7H & 2147483647, bN = 1; bN <= 16; bN++) h2 = (h2 = (h2 ^ h2 >> bN) >>> 1 + (3 & a7G)) * (7 + (1023 & (a7G | a7H))) & 1073741823, a7H >>= 1 + (1 & (a7G >>= 1 + (1 & (h2 += 65535 &
			a7H))));
		return h2 &= 1073741823
	}
}

function a7I(data) {
	var hS, a7J, a7K, a09, a7L, a7M, a7N, colors, a7O, a7P, a7Q = 0,
		a7R = 0,
		a7S = !1,
		a7T = !1,
		a7U = [1, 5, 60, 240, 1440, 10080, 43200];

	function a81(f1, f2) {
		! function(f1, f2) {
			return a7J < f1 && f1 < a7J + a09 && a7K < f2 && f2 < a7K + a7L
		}(a7Q = f1, a7R = f2) ? (a7S && (bL.cC = !0), a7S = !1) : (a7S = !0, bL.cC = !0)
	}
	this.show = function() {
		a7T = b5.buffer.data[127].value, hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize();
		var aN = bD.cp,
			vW = hS.a0F(),
			a7f = aN * vW.a0I,
			aN = aN * vW.a0G;
		a7M = r.bF.nc(.06), a7N = r.bF.nc(.04), a7J = r.bF.nc(.06), a7K = aN + a7M, a09 = bD.dt - a7J - a7N, a7L = a7f + aN - a7K - a7N
	}, this.cR = function() {
		hS.cR(),
			function() {
				var a1, iI, fe, c4, bN, dC = data.data,
					a7i = 1,
					a7j = .125,
					a7k = a7T ? 65536 : 0;
				for (a1 = 0; a1 < dC.length; a1++)
					for (iI = dC[a1].iI, fe = iI.length, a7i = Math.max(fe, a7i), bN = 0; bN < fe; bN++) a7j = Math.max(iI[bN], a7j), a7k = Math.min(iI[bN], a7k);
				var cV = a7K + a7L,
					a7l = a7L / (a7j - a7k),
					a7m = 1 / (a7i - 1);
				for (cS.lineWidth = bY.bZ, a1 = 0; a1 < dC.length; a1++) {
					for (iI = dC[a1].iI, fe = iI.length, c4 = a7J, cS.beginPath(), cS.moveTo(c4 + a09, cV - a7l * (iI[fe - 1] - a7k)), bN = fe - 2; 0 <= bN; bN--) cS.lineTo(c4 + a7m * bN * a09, cV - a7l * (iI[bN] - a7k));
					cS.strokeStyle = colors[a1], cS.stroke()
				}(function(a7k, a7j, cV, a7l) {
					cS.font = r.bF.bG(0, .25 * a7J), r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 2), cS.fillStyle = colors[0];
					for (var c4 = .92 * a7J, a1 = 0; a1 < 3; a1++) {
						var h2 = a7k + a1 * (a7j - a7k) / 2;
						cS.fillText((h2 / 1e3).toFixed(3), c4, cV - a7l * (h2 - a7k))
					}
				})(a7k, a7j, cV, a7l),
				function(a7i) {
					var bp = a7K + a7L + .15 * a7N;
					cS.font = r.bF.bG(0, Math.min(.4 * a7N, .028 * bD.dt)), r.bF.textBaseline(cS, 0), r.bF.textAlign(cS, 2), cS.fillStyle = colors[0], cS.fillText(r.a7Z.a7p(a7O), a7J + a09, bp), r.bF.textAlign(cS, 0), cS.fillText(r.a7Z.a7p(
						new Date(a7P.getTime() - 6e4 * (a7i - 1) * a7U[data.x6])), a7J, bp)
				}(a7i),
				function(a7i, a7k, a7j) {
					if (a7S && !(a7i < 2)) {
						for (var oS, a9 = (a7Q - a7J) / a09 * (a7i - 1), a7q = Math.floor(a9), a7r = Math.floor(1 + a9), a7s = a9 - a7q, a7t = 1e5, ro = -1, a7u = -1, a7v = a7j - (a7j - a7k) * (a7R - a7K) / a7L, dC = data.data, a1 = 0; a1 < dC
							.length; a1++) {
							var a7w, iI = dC[a1].iI;
							iI.length <= a7r || (iI = iI[a7q] + a7s * (iI[a7r] - iI[a7q]), (a7w = Math.abs(a7v - iI)) < a7t && (a7t = a7w, ro = a1, a7u = iI))
						} - 1 !== ro && (a7j = a7K + a7L - (a7u - a7k) / (a7j - a7k) * a7L, cS.lineWidth = .5 * bY.bZ, cS.strokeStyle = colors[ro], cS.beginPath(), cS.moveTo(a7J, a7j), cS.lineTo(a7Q, a7j), cS.lineTo(a7Q, a7K + a7L), cS.stroke(),
							cS.beginPath(), cS.arc(a7Q, a7j, .1 * a7J, 0, 2 * Math.PI), cS.fillStyle = colors[ro], cS.fill(), a7k = a7K + a7L + .15 * a7N, r.bF.textAlign(cS, 1), oS = a7i - 2 < a9 ? (oS = a7P.getTime() - 6e4 * a7U[data.x6],
								new Date(oS + (a9 - (a7i - 2)) * (a7O.getTime() - oS))) : new Date(a7P.getTime() - 6e4 * (a7i - a9 - 1) * a7U[data.x6]), a7i = r.a7Z.a7p(oS), a9 = r.bF.measureText(a7i), oS = hA.hB(a7Q, a7J + .5 * a9, a7J +
								a09 - .5 * a9), cS.fillStyle = r.color.a7e(70, 50, 20), cS.fillRect(oS - .52 * a9, a7K + a7L, 1.04 * a9, .55 * a7N), cS.fillStyle = colors[0], cS.fillText(a7i, oS, a7k), cS.font = r.bF.bG(0, .25 * a7J), r.bF
							.textBaseline(cS, 1), r.bF.textAlign(cS, 2), oS = .92 * a7J, a7i = (a7u / 1e3).toFixed(3), a9 = r.bF.measureText(a7i), a7k = oS - 1.04 * a9, cS.fillStyle = r.color.a7e(70, 50, 20), cS.fillRect(a7k, a7j - .1625 *
								a7J, a7J - a7k, .275 * a7J), cS.fillStyle = colors[ro], cS.fillText(a7i, oS, a7j))
					}
				}(a7i, a7k, a7j)
			}(), cS.lineWidth = bY.bZ, cS.strokeStyle = bO.bX, cS.beginPath(), cS.moveTo(a7J, a7K), cS.lineTo(a7J, a7K + a7L), cS.lineTo(a7J + a09, a7K + a7L), cS.stroke();
		var a1, fontSize = .5 * a7M,
			dC = (cS.font = r.bF.bG(0, fontSize), r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 0), data.data),
			cs = dC.length,
			bp = a7K - .5 * a7M,
			ga = "";
		for (a1 = 0; a1 < cs; a1++) ga += dC[a1].name + "  ";
		ga = ga.trim();
		var lV = r.bF.measureText(ga),
			c4 = .5 * (bD.dt - lV);
		for (bD.dt < lV && (c4 = 0, cS.font = r.bF.bG(0, bD.dt / lV * fontSize)), a1 = 0; a1 < cs; a1++) cS.fillStyle = colors[a1], cS.fillText(dC[a1].name, c4, bp), c4 += r.bF.measureText(dC[a1].name + "  ")
	}, this.c3 = function(f1, f2) {
		a81(f1, f2)
	}, this.cF = function(f1, f2) {
		a81(f1, f2)
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	};
	var a1, bx, a7b, aF, gM = data.data,
		cs = gM.length,
		max = 1;
	for (a1 = 0; a1 < cs; a1++) max = Math.max(max, gM[a1].iI.length);
	for (a1 = 0; a1 < cs; a1++)
		for (; gM[a1].iI.length < max;) gM[a1].iI.unshift(0);
	bx = new Date, a7b = 6e4 * bx.getTimezoneOffset(), aF = bx.getTime() - a7b, a7O = new Date(aF), 6 === data.x6 ? function(bx, a7b) {
		var a7d = bx.getUTCFullYear(),
			bx = bx.getUTCMonth() + 1;
		a7P = bx < 12 ? new Date(Date.UTC(a7d, bx) - a7b) : new Date(Date.UTC(a7d + 1, 0) - a7b)
	}(bx, a7b) : (a7b = 6e4 * a7U[data.x6], a7P = data.x6 <= 4 ? new Date(aF + a7b - bx.getTime() % a7b) : new Date(aF + a7b - (bx.getTime() + 2592e5) % a7b)), aF = r.color, colors = [bO.bX, aF.a7e(255, 0, 0), aF.a7e(0, 200, 0), aF.a7e(80, 80,
		255), aF.a7e(255, 255, 0), aF.a7e(255, 0, 255), aF.a7e(0, 255, 255), aF.a7e(255, 140, 0), aF.a7e(128, 128, 128), aF.a7e(0, 255, 140)], hS = new f(L(259) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.x6] + ", " + r.a7Z.a7a(a7O),
		[new g("⬅️ " + L(1), function() {
			n.aB(1)
		}), new g(L(60), function() {
			n.aB(14)
		})], !1)
}

function a82() {
	var a83, a84;

	function a89() {
		(a83 = new WebSocket("wss://territorial.io/s52/")).onopen = a8A, a83.onclose = function() {
			a8B()
		}
	}

	function a8A() {
		if (a83 && a83.readyState === a83.OPEN) {
			var dt = new a8D;
			dt.wx(1608), dt.wy(1, 0), dt.wy(6, 7), dt.wy(2, b2 ? b2.id : 3), dt.wy(1, kH.qK ? 1 : 0), dt.wy(1, kH.qN ? 1 : 0), dt.wy(1, kH ? kH.qQ : 0);
			for (var a1 = 0; a1 < a84.length && a1 < 228; a1++) dt.wy(7, a84.charCodeAt(a1) % 128);
			a83.send(dt.mH), a8B()
		}
	}

	function a8B() {
		a83 && (a83.onclose = null, a83.onopen = null, a83 = null)
	}
	window.addEventListener("error", function a85(cb) {
		a84 = "";
		try {
			var a86 = function(cb) {
				if (!cb.error) return 0;
				var stack = cb.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a8C = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a8C.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(cb);
			return 0 === a86 || cb.lineno <= 3 ? void console.log("Error: External Code | " + a86) : (window.removeEventListener("error", a85), a84 = cb.lineno + " " + cb.colno + "|" + a86, __fx.reportError(cb, a84), alert("Error:\n" + cb
				.filename + " " + cb.lineno + " " + cb.colno + " " + cb.message))
		} catch (cb) {
			a84 = "SE|" + a84 + "|" + cb, console.log(a84), alert(a84)
		}
		a89()
	})
}

function a8E() {
	this.bB = new Array(q.aA), this.b8 = new Array(q.aA), this.bo = new Uint8Array(q.aA), this.c0 = new Uint8Array(q.aA), this.el = new Uint16Array(q.aA), this.em = new Uint16Array(q.aA), this.eo = new Uint16Array(q.aA), this.ep = new Uint16Array(q
			.aA), this.br = new Uint32Array(q.aA), this.a0P = new Uint32Array(q.aA), this.di = new Uint32Array(q.aA), this.a0S = null, this.a0Z = null, this.a0a = null, this.a0b = null, this.un = new Uint16Array(q.aA), this.uo = new Uint16Array(q
		.aA), this.up = new Uint16Array(q.aA), this.ul = new Uint16Array(q.aA), this.uq = new Uint8Array(q.aA), this.fX = new Uint16Array(q.aA), this.az = function() {
			this.bB.fill(""), this.b8.fill(""), this.bo.fill(0), this.c0.fill(0), this.el.fill(0), this.em.fill(0), this.eo.fill(0), this.ep.fill(0), this.br.fill(0), this.a0P.fill(0), this.di.fill(0), this.a0S = new Array(q.aA), this.a0Z =
				new Array(q.aA), this.a0a = new Array(q.aA), this.a0b = new Array(q.aA), this.un.fill(0), this.uo.fill(0), this.up.fill(0), this.ul.fill(0), this.uq.fill(0), this.fX.fill(0)
		}
}

function a8F() {
	function a8W(dC, ii, ik) {
		var a8X = dC[ii];
		dC[ii] = dC[ik], dC[ik] = a8X
	}
	this.a8G = [
		[],
		[],
		[],
		[]
	], this.zg = [0, 0, 0, 0], this.a1s = [], this.zh = function(a8H, hp, username, a1b, bn, a8I, elo, color, a5o, a8J, code) {
		username = this.a1t(hp, username, a1b, bn, a8I, elo, color, a5o, a8J, code);
		this.a8G[a8H].push(username), uN.a8K === hp && (uN.a8L = username), uN.a8M.a8N(hp) && (username.a1g = 1), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8H && 1 === uN.b0.a8P[2]
	}, this.a1t = function(hp, username, a1b, bn, a8I, elo, color, a5o, a8J, code) {
		return {
			hp: hp,
			username: code ? __fx.nameFilter.filter(username) : "Player " + oh.oi.eh(hp, 2),
			a8Q: __fx.nameFilter.filter(username),
			a1b: a1b,
			bn: bn,
			a8I: a8I,
			elo: elo,
			color: color,
			a5o: a5o,
			a8J: a8J
		}
	}, this.zp = function(a9, a8H, a1b, bn, a8I, elo, a5o, color) {
		a9 = this.a8G[a8H][a9];
		a9.a1b = a1b, a9.bn = bn, a9.a8I = a8I, a9.elo = elo, a9.a5o = a5o, a9.color = color, uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8H && 1 === uN.b0.a8P[2]
	}, this.zr = function(a9, a8H, code) {
		a9 = this.a8G[a8H][a9];
		1 === code && (a9.username = a9.a8Q), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8H && 1 === uN.b0.a8P[2]
	}, this.zq = function(a9, a8H, a8R) {
		var a9 = this.a8G[a8H][a9],
			a8S = a9.username,
			a1x = "Redacted " + oh.oi.eh(a9.hp, 2);
		a9.username = a8R ? "[" + r.aI.hD(a8S) + "] " + a1x : a1x, a8S.indexOf("Redacted") < 0 && (a9.a1n = a8S), uN.eu.a1z(a9.hp), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8H && 1 === uN.b0.a8P[2]
	}, this.zn = function(a9, a8T, a8U) {
		var player = this.a8G[a8T][a9];
		this.zo(a9, a8T), this.a8G[a8U].push(player), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8U && 1 === uN.b0.a8P[2]
	}, this.zo = function(a9, a8T) {
		var zf = this.a8G[a8T];
		this.a1s.push(zf[a9]), 1e3 < this.a1s.length && this.a1s.shift(), a9 >= this.zg[a8T] ? zf[a9] = zf[zf.length - 1] : (this.zg[a8T]--, 2 === a8T ? (zf.splice(this.zg[a8T] + 1, 0, zf[zf.length - 1]), zf.splice(a9, 1)) : (zf[a9] = zf[this.zg[
			a8T]], zf[this.zg[a8T]] = zf[zf.length - 1])), zf.pop(), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a8T && 1 === uN.b0.a8P[2]
	}, this.zm = function(a9, zx) {
		uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === zx && 1 === uN.b0.a8P[2];
		var zf = this.a8G[zx],
			vu = zf[a9];
		if (2 === zx)
			if (a9 >= this.zg[zx]) {
				uN.a8M.join(vu);
				for (var a8V = this.zg[zx], elo = vu.elo; a8V && elo > zf[a8V - 1].elo;) a8V--;
				zf[a9] = zf[this.zg[zx]], zf.splice(this.zg[zx]++, 1), zf.splice(a8V, 0, vu)
			} else zf.splice(this.zg[zx]--, 0, vu), zf.splice(a9, 1);
		else a9 >= this.zg[zx] ? (uN.a8M.join(vu), a8W(zf, this.zg[zx]++, a9)) : a8W(zf, --this.zg[zx], a9)
	}, this.a1r = function(hp) {
		for (var a8G = this.a8G, cs = a8G.length, a1 = 0; a1 < cs; a1++)
			for (var zf = a8G[a1], jP = zf.length, bN = 0; bN < jP; bN++)
				if (hp === zf[bN].hp) return zf[bN];
		return null
	}
}

function og(a8Y, data, a6) {
	var cs = data.od.length,
		a8Z = document.createElement("div"),
		a8a = document.createElement("div"),
		nJ = document.createElement("div"),
		a8b = new Array(cs),
		y = new Array(cs),
		a8c = new Array(data.ob.length),
		a8d = r.color.xj(70, 70, 0, .35);

	function u4() {
		this.style.backgroundColor = r.color.u4(a8d, 160)
	}

	function a8i() {
		this.style.backgroundColor = a8d
	}

	function eV() {
		var bN;
		for (a8Y.style.font = r.bF.bG(0, r.bF.ss(.026, .5, .03)), a1 = 1; a1 < a8c.length; a1++) r.bF.kB(a8c[a1], 4);
		if (r.bF.kB(a8Z, 2), cs) {
			for (var wo, kp = a8Z.offsetWidth, kq = nJ.offsetWidth, a1 = 0; a1 < a8c.length; a1++) wo = .01 * data.oe[a1] * kq, a8c[a1].style.width = (100 * wo / kp).toFixed(2) + "%";
			var jP = data.od[0].length;
			for (a1 = 0; a1 < cs; a1++)
				for (r.bF.kB(a8b[a1], 2), bN = 1; bN < jP; bN++) r.bF.kB(y[a1][bN], 4);
			a8a.a8e && (a8a.scrollTop = a8a.a8e)
		}
	}
	this.resize = function() {
			eV(), eV()
		}, a8Y.style.display = "flex", a8Y.style.flexDirection = "column", a8a.style.overflowX = "hidden", a8a.style.overflowY = "auto", a8a.addEventListener("scroll", function() {
			this.a8e = this.scrollTop, a6 && a6.ok && (n.b0.b1[a6.ok] = this.scrollTop)
		}),
		function() {
			var gM, a1, od = data.od,
				jP = cs ? od[0].length : 0;
			for (a1 = 0; a1 < cs; a1++) {
				a8b[a1] = document.createElement("div"), a8b[a1].style.backgroundColor = function(a1) {
					return a1 % 2 == 1 ? r.color.xj(130, 130, 130, .35) : bO.a8k
				}(a1), a8b[a1].style.width = "100%", a8b[a1].style.display = "flex", y[a1] = new Array(jP);
				for (var bN = 0; bN < jP; bN++) y[a1][bN] = gM = document.createElement("div"), gM.style.display = "flex", gM.style.justifyContent = "center", gM.style.wordBreak = "break-all", gM.style.padding = "0.4em 0em", gM.style.width = data.oe[
					bN] + "%", gM.textContent = od[a1][bN].h2, 1 === od[a1][bN].bx && (gM.name = "" + a1, gM.style.color = bO.hh, gM.style.backgroundColor = a8d, gM.addEventListener("mouseover", u4), gM.addEventListener("mouseout", a8i),
					function(gM, hp, oj) {
						2147483647 !== oj && gM.addEventListener("click", function() {
							hy.wx(30), hy.wy(30, hp), hx.az(hy.mH), this.style.backgroundColor = a8d, n.aB(8, n.go, new jx(25, {
								action: 0,
								hp: oh.oi.a5h(oh.oi.a5i(5)),
								oj: oj
							}))
						})
					}(gM, od[a1][bN].hp, od[a1][bN].oj)), a8b[a1].appendChild(gM)
			}
			for (a8Z.style.display = "flex", a8Z.style.backgroundColor = r.color.xj(0, 120, 0, .35), a1 = 0; a1 < a8c.length; a1++) a8c[a1] = gM = document.createElement("div"), gM.style.display = "flex", gM.style.justifyContent = "center", gM.style
				.wordBreak = "break-all", gM.style.padding = "0.4em 0em", gM.style.width = data.oe[a1] + "%", gM.innerHTML = data.ob[a1], a8Z.appendChild(gM)
		}();
	for (var a1 = 0; a1 < cs; a1++) nJ.appendChild(a8b[a1]);
	a8a.appendChild(nJ), a8Y.appendChild(a8Z), a8Y.appendChild(a8a), a6 && a6.ok && (a8a.a8e = n.b0.b1[a6.ok])
}

function a8l() {
	this.bs = function(player) {
		var a8m = function(player) {
			for (var rk = il.rk.a4p(), cs = rk.length, jP = Math.min(cs, 32), aF = r2.r3(cs), a1 = 0; a1 < jP; a1++) {
				var a8m = (a1 + aF) % cs,
					rb = rk[a8m],
					o5 = rb[0],
					o7 = rb[rb.length - 1];
				if (il.nr.a8o(player, o5) && il.nr.a8p(player, o7)) return a8m;
				if (il.nr.a8o(player, o7) && il.nr.a8p(player, o5)) return 0 <= (a8m = il.rk.a4k(o7, o5)) ? a8m : il.rk.rp() ? -1 : il.rk.uB(il.rk.rl(rb))
			}
			return -1
		}(player);
		return -1 !== a8m && (a8m = il.rk.get(a8m), !il.nr.a8n(player, a8m)) && (d7.dC[0] = a8m, !0)
	}
}

function a8q() {
	var a8t, jm, xC = document.createElement("div"),
		a8r = document.createElement("div"),
		a5W = 0,
		a8s = 0;
	this.show = function(c4, bp, ga, a8u, a8v, aN) {
			if (a5W) {
				if (!a8u) return;
				this.aL()
			}
			c4 === bp && -1 === c4 ? (c4 = a8t, bp = jm) : (a8t = c4, jm = bp);
			var a8w = Math.floor(r.bF.oV(.018)),
				a8v = (c4 = Math.max(a8w + 2, c4), a8v || (a8s = a8u), a5W = 1, bD.dt / bD.cp),
				a8u = (xC.style.whiteSpace = "pre", xC.textContent = ga, r.bF.kB(xC, 5), xC.style.font = r.bF.bG(0, r.bF.oV(.015)), xC.style.padding = "0.3em 0.6em", xC.style.left = c4 + "px", xC.style.top = "0px", document.body.appendChild(xC), c4 +
					xC.offsetWidth - a8v),
				ga = (0 < a8u && (c4 -= a8u, c4 = Math.max(a8w + 1, c4), xC.style.left = c4 + "px", c4 < a8w + 2) && (xC.style.whiteSpace = "pre-wrap"), xC.offsetHeight);
			xC.style.top = bp - ga + a8s * bY.oU + "px", c4 -= a8w, a8r.style.backgroundColor = r.color.a7e(aN >> 12 << 2, (aN >> 6 & 63) << 2, (63 & aN) << 2), a8r.style.left = c4 + "px", a8r.style.top = xC.style.top, a8r.style.width = a8w + "px",
				a8r.style.height = ga + "px", r.bF.kB(a8r, 4), r.bF.kB(a8r, 8), r.bF.kB(a8r, 2), document.body.appendChild(a8r)
		}, this.aL = function(a8z) {
			if (a5W) {
				if (a8z && a8s) return 0;
				a5W = 0, n.removeChild(document.body, xC), n.removeChild(document.body, a8r)
			}
			return 1
		}, xC.style.position = "absolute", xC.style.backgroundColor = bO.bR, xC.style.color = bO.bX, xC.style.pointerEvents = "none", xC.style.zIndex = "5", xC.style.maxWidth = "100%", a8r.style.position = "absolute", a8r.style.color = bO.bX, a8r
		.style.pointerEvents = "none", a8r.style.zIndex = "5"
}

function a90() {
	this.iV = function(bN, fv) {
		return Math.floor((bN + .5) / fv)
	}, this.a91 = function(bN, fv) {
		return Math.floor(bN * (fv + .5))
	}, this.sqrt = function(h2) {
		return ~~Math.sqrt(h2 + .5)
	}, this.pow = function(cb) {
		return Math.floor(Math.pow(2, cb) + .5)
	}, this.hB = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a92 = function(dV, dX, dZ) {
		return Math.max(Math.min(dV, dX), dZ)
	}, this.a93 = function(a94, a95, c4, bp) {
		c4 -= a94, a94 = bp - a95, bp = 0;
		return 0 == c4 ? bp = 0 <= a94 ? Math.PI : 0 : (bp = Math.atan(a94 / c4), bp += 0 < c4 ? .5 * Math.PI : 1.5 * Math.PI), bp
	}, this.log2 = function(h2) {
		return Math.floor(!!h2 * (1 + Math.log2(h2 + .5)))
	}, this.log10 = function(h2) {
		return Math.floor(Math.log10(h2 + .5))
	}, this.a97 = function(a98, a99, a9A, a9B, a9C) {
		return a9A - a9C < a98 && a98 < a9A + a9C && a9B - a9C < a99 && a99 < a9B + a9C
	}, this.a9D = function(a9E, a9F) {
		return a9E * a9E + a9F * a9F
	}
}

function a9G() {
	function a9I() {
		n.vK(29) && (uN.b0.a8O && 1 === uN.b0.a8P[2] && n.vK(29).a9L(), uN.b0.a8O = 0, n.vK(29).a9M(), n.vK(29).a9N(), uN.a1j.a9O())
	}
	this.zX = new Array(4), this.a8P = [0, 0, 1, 0], this.a8O = 0, this.zk = [0, 0], this.az = function() {
		for (var a1 = 0; a1 < this.zX.length; a1++) this.zX[a1] = new a9H;
		this.a8P[0] = b5.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.zX), __fx.lobbyReminders.setPopupHandler(function(text) {
			uN.message.a08({
				id: 7,
				vs: text
			})
		})
	}, this.zi = function() {
		a9I(), uN.a8M.az(), __fx.lobbyReminders.check()
	}, this.zv = function() {
		uN.a8M.zv();
		for (var a1 = 0; a1 < uN.b0.zX.length; a1++) {
			var zW = uN.b0.zX[a1];
			0 === zW.zY ? zW.a9P = 0 : (zW.ze = Math.max(zW.ze - zW.a9P % 2, 0), zW.a9P++)
		}
		a9I(), __fx.lobbyReminders.check()
	}, this.a03 = function(zx) {
		this.a8P[0] !== zx || this.a8P[2] || n.vK(29).a9Q()
	}
}

function a9R() {
	var size, a9S;
	this.az = function() {
		size = q.qz, a9S = new Uint16Array(q.aA);
		for (var bq = q.bq, a1 = q.qz - 1; 0 <= a1; a1--) a9S[a1] = bq + a1
	}, this.bs = function() {
		yt.a9T.bs();
		for (var a1 = size - 1; 0 <= a1; a1--)
			if (0 === b7.c0[a9S[a1]]) {
				bN = void 0;
				var bN = a1;
				size--, a9S[bN] = a9S[size]
			} else v.bs(a9S[a1])
	}, this.a44 = function(cy) {
		a9S[size++] = cy
	}
}

function hZ(a9W, type, a9X, a9Y) {
	var cb;
	this.cb = document.createElement("input"), (cb = this.cb).type = type ? "number" : "text", cb.id = "input" + n.b0.a9Z++, cb.value = a9W.value, cb.style.width = "100%", cb.style.userSelect = "none", cb.style.outline = "none", cb.style.resize =
		"none", cb.style.border = "inherit", cb.style.font = "inherit", cb.style.color = bO.bX, cb.style.backgroundColor = bO.a9a, cb.style.fontSize = "1em", cb.style.padding = "0.1em 0.2em", cb.addEventListener("focus", function() {
			bD.a9b++
		}), cb.addEventListener("blur", function() {
			bD.a9b--, -1 !== a9W.a9 && b5.hi.hj(a9W.a9, cb.value)
		}), cb.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a9W.a9 && b5.hi.hj(a9W.a9, cb.value), a9X ? a9X() : cb.blur())
		}), a9Y && cb.addEventListener("input", function(vu) {
			a9Y(vu)
		})
}

function a9c() {
	this.a9d = new a9e
}

function hu() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.fp = 13, this.a9f = this.emojis.length, this.r5 = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.r5, this.a9g = 1024, this.r6 = this.emojis.indexOf(
		"💀"), this.a9h = this.r6 + 1, this.a9i = this.emojis.indexOf("🥇"), this.a9j = this.emojis.indexOf("😊"), this.fq = function(h2) {
			return h2 < this.r5 ? String.fromCharCode(55356, 56806 + hA.iV(h2, 26), 55356, 56806 + h2 % 26) : this.emojis[Math.min(h2 - this.r5, this.a9f - 1)]
		}, this.a9k = function(ga) {
			for (var cs = ga.length - 2, dC = [], a1 = 0; a1 < cs; a1++) {
				var g2 = ga.charCodeAt(a1) - 56806,
					g3 = ga.charCodeAt(a1 + 2) - 56806;
				0 <= g2 && g2 < 26 && 0 <= g3 && g3 < 26 && (dC.push(26 * g2 + g3), a1 += 3)
			}
			return dC
		}, this.ev = function(h2) {
			return h2 < this.r5
		}, this.fl = function(h2) {
			return h2 >= 1024 - this.fp
		}, this.fh = function(h2) {
			return h2 >= this.r5 && h2 < this.r5 + this.a9h
		}
}

function a9l() {
	var a9m = null,
		a9n = null,
		a9o = 0,
		a9p = 0,
		a9q = null;

	function a9r() {
		0 !== a9n.a1b && (uN.a1h.aL(), n.aB(8, 29, new jx(25, {
			action: 0,
			hp: oh.oi.eh(a9n.hp, 5),
			oj: 0
		}, 29)))
	}

	function a9t() {
		return !uN.a8L || uN.nr.a1f(a9n) ? 1 : 0
	}

	function a9s() {
		var c4 = a9m.c4,
			bp = a9m.bp,
			a9z = (uN.a1h.aL(), a9t());
		a9m = new a5S([new g(oq.mz[5][0], function() {
			a9w(5, 0)
		}, a9z), new g(oq.mz[5][1], function() {
			a9w(5, 1)
		}, a9z), new g(oq.mz[5][2], function() {
			a9w(5, 2)
		}, a9z), new g(oq.mz[5][3], function() {
			a9w(5, 3)
		}, a9z)]), a9v(c4, bp), a9p = a9o = 2
	}

	function a9u() {
		29 === n.go && n.gp().a04(oh.oi.eh(a9n.hp, 5))
	}

	function a9w(id, value) {
		5 === id && hW.hn.ho({
			action: 3,
			hp: oh.oi.eh(a9n.hp, 5),
			value: value
		})
	}

	function a9v(c4, bp, a5b) {
		a9m.show(c4, bp, a5b), uN.a1j.show(a9m.c4, a9m.bp, a9n, 1)
	}
	this.a1i = function(cb, vu) {
		a9o = 1, a9n = vu, a9m = new a5S([new g(L(260), a9r, 0 === vu.a1b ? 1 : 0), new g(L(261), a9s, a9t()), new g(L(262), a9u, 0)]), a9v((a9q = {
			clientX: cb.clientX,
			clientY: cb.clientY
		}).clientX, a9q.clientY, 1)
	}, this.aM = function(code) {
		if (29 !== n.go) return !1;
		if (!a9n) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.aL();
			else if (r.aI.startsWith(code, "Numpad") || r.aI.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === a9o) this.a1i(a9q, a9n);
				else {
					if (!a9m) return !1;
					1 === a9o ? code <= 1 ? a9r() : 2 === code ? a9s() : (a9u(), this.aL()) : (a9w(a9p, hA.hB(code - 1, 0, oq.mz[a9p].length - 1)), this.aL())
				}
		}
		return !0
	}, this.aL = function() {
		a9o = 0, a9m && a9m.aL(), a9m = null, uN.a1j.aL()
	}
}

function v9() {
	var b, c, d, nK;

	function h() {
		l(), n.o()[19] = null, n.p()
	}

	function aA4() {
		l(), n.aB(21)
	}

	function l() {
		1 === q.data.gameMode ? q.jv.r0() : 0 === q.data.gameMode && 1 === q.data.colorsType && r.s.t(d.u(), q.data.colorsData, 262143)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, nK = [new g("⬅️ " + L(1), h)], 1 === q.data.gameMode && nK.push(new g(L(263), aA4, 1, 1)), b = new f(L(104), nK), c = new i(b.j, (nK = [], 0 === q.data.gameMode ? (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(23), L(6)],
			value: q.data.colorsType
		}, function(a9) {
			l(), q.data.colorsType = a9, 1 !== q.data.colorsType || q.data.colorsData && q.data.colorsData.length === q.aA || (q.data.colorsData = new Uint32Array(q.aA)), n.aB(21)
		})), y.push(a3)
	}(nK), 1 === q.data.colorsType && function(y) {
		var a3 = new a4;
		a3.a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.colorsData, 1)), a3.aK(d), y.push(a3)
	}(nK)) : (q.jv.r0(), nK.push(function() {
		var a3 = new a4;
		a3.a5(L(8));
		for (var a1 = 0; a1 < aC.aD.length; a1++) {
			var aF = (a1 + 1) % aC.aD.length,
				cb = a3.aE((0 == aF ? "" : "Team ") + aC.aD[aF]);
			a1 && (cb.style.marginTop = "0.5em"), a3.aK(new hZ({
				a9: -1,
				value: q.data.teamPlayerCount[aF]
			}, 1, 0, function(cb) {
				b.aO[1].hg(0);
				var playerCount = hA.hB(Math.floor(cb.target.value), 0, 512);
				cb.target.value = playerCount, q.data.teamPlayerCount[cb.target.aA6] = playerCount
			})).cb.aA6 = aF
		}
		return a3
	}()), function(y) {
		for (var a3 = new a4, a6 = (a3.a5(L(264)), []), a1 = 0; a1 < aC.aD.length; a1++) {
			var aF = (a1 + 1) % aC.aD.length;
			a6.push(aC.aD[aF])
		}
		q.data.colorsData || (q.data.colorsData = new Uint32Array(1));
		a3.a7(new a8({
			a6: a6,
			value: (q.data.colorsData[0] % 16 + aC.aD.length - 1) % aC.aD.length
		}, function(a9) {
			var a9 = (a9 + 1) % aC.aD.length,
				a3i = aC.a3R[a9],
				a3i = (a3i[0] >> 2 << 12) + (a3i[1] >> 2 << 6) + (a3i[2] >> 2);
			q.data.colorsData[0] = a3i - (15 & a3i) + a9
		})), y.push(a3)
	}(nK)), nK))
}

function aA8() {
	var xU = [];
	this.aA9 = function(player, a6V, ea, aAA) {
		player === q.bS || a6V === q.bS || !aAA && r.cz.fO(player) || r.cz.fO(a6V) || this.pa(b7.b8[player] + " supported " + b7.b8[a6V] + " with " + r.aI.eh(ea) + " ressource" + (1 === ea ? "." : "s."))
	}, this.pa = function(ga, fj) {
		ga = {
			c8: jK.aAB(),
			ga: ga,
			fj: fj
		};
		xU.push(ga), 30 === n.go && n.gp().pa(ga)
	}, this.clear = function() {
		xU = [];
		var nb = n.vK(30);
		nb && nb.clear()
	}, this.aAC = function() {
		return xU
	}
}

function aAD() {
	var aAE = -1,
		aAF = null,
		aAG = -1,
		aAH = 4;

	function aAM() {
		j9.mU() ? jE.render() : jE.mY()
	}

	function aAU(aN, gM) {
		var n1 = aN >> 16,
			nb = aN >> 8 & 255,
			aN = 255 & aN,
			aAV = 255 - gM,
			aAV = (aAV < n1 && aAV < nb && aAV < aN && (gM = -gM), aAE >> 7),
			aAX = aAE >> 5 & 3,
			aAY = aAE >> 3 & 3;
		return (Math.max(Math.min(n1 + gM, 252 + aAV), aAV) << 16) + (Math.max(Math.min(nb + gM, 252 + aAX), aAX) << 8) + Math.max(Math.min(aN + gM, 252 + aAY), aAY)
	}

	function aAL() {
		return -1 !== aAE && (eb.aAS(aAE, aAF[0], aAF[1], aAF[2]), aAT(aAE), aAE = -1)
	}

	function aAT(player) {
		bL.cC = !0;
		for (var el = b7.el[player], em = b7.em[player], eo = b7.eo[player], ep = b7.ep[player], bp = em; bp <= ep; bp++)
			for (var c4 = el; c4 <= eo; c4++) {
				var gF = eb.aAZ(c4, bp);
				eb.gN(player, gF) && (eb.aAa(gF) ? eb.aAb(gF, player) : eb.aAc(gF) ? eb.aAd(gF, player) : eb.aAe(gF, player))
			}
	}
	this.az = function() {
		aAF = null, aAG = aAE = -1, aAH = hA.hB(Math.floor(b5.buffer.data[16].value), 0, 16)
	}, this.bs = function(bJ) {
		if (b5.buffer.data[15].value && 0 !== aAH && (bJ || !c9.lz())) {
			var bJ = f7.f8(c9.aAI),
				nw = f7.fA(c9.aAJ);
			if (f7.aAK(bJ, nw)) {
				bJ = f7.uG(bJ, nw), nw = f7.nq(bJ);
				if (aAG === nw)
					if (eb.a4a(nw)) {
						if (aAE === eb.wB(nw)) return
					} else if (-1 === aAE) return;
				! function(gF) {
					eb.a4a(gF) ? (gF = eb.wB(gF)) !== aAE && (aAL(), function(player) {
						aAE = player, aAF = eb.aAP(player);
						var aAQ = function() {
							var vu = aAF,
								cg = aAH << 2,
								ci = cg << 1;
							return [aAU(vu[0], cg), aAU(vu[1], ci), aAU(vu[2], ci)]
						}();
						eb.aAS(player, aAQ[0], aAQ[1], aAQ[2]), aAT(player)
					}(gF), aAM()) : aAL() && aAM()
				}(aAG = nw)
			} else aAL() && aAM()
		}
	}
}

function sO() {
	this.dC = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAf = function() {
		for (var aAg = [], dC = this.dC, cs = dC.length, a1 = 0; a1 < cs; a1++) aAg.push(dC[a1]);
		var a7w = b5.buffer.data[12].lg;
		for (a1 = 0; a1 < cs; a1++)
			if (aAg[a1] === a7w) {
				aAg.splice(a1, 1), cs--;
				break
			} aAg.sort(), cs++, aAg.unshift(a7w);
		try {
			if ("undefined" == typeof Intl) return aAg;
			for (a1 = 0; a1 < cs; a1++) {
				var ga = new Intl.DisplayNames([aAg[a1]], {
					type: "language"
				}).of(aAg[a1]);
				ga !== aAg[a1] && (aAg[a1] = aAg[a1] + ": " + ga)
			}
		} catch (cb) {
			console.log("error 3646: " + cb)
		}
		return aAg
	}, this.aAi = function(eJ) {
		for (var ga = b5.buffer.data[12].value, cs = eJ.length, a1 = 0; a1 < cs; a1++)
			if (ga === eJ[a1].split(":")[0]) return a1;
		return 0
	}, this.sl = function(aAj) {
		if (aAj && !(aAj.length < 2)) {
			aAj = aAj.split("-")[0].toLowerCase();
			for (var dC = this.dC, cs = dC.length, a1 = 0; a1 < cs; a1++)
				if (aAj === dC[a1]) return a1
		}
		return -1
	}
}

function oa(gd) {
	var hS, hT, y;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(265), [new g("⬅️ " + L(1), function() {
		n.vI(10)
	})]), hT = new i(hS.j, ((y = []).push(function() {
		var a40, a3 = new a4,
			a41 = new hZ(b5.buffer.data[132], 1, function() {
				a40.button.click()
			}),
			a42 = new hZ(b5.buffer.data[131], 1, function() {
				a41.cb.focus()
			});
		a3.a5(L(246)), a3.aK(a42), a42.cb.style.marginBottom = "0.8em", a3.a5(L(247)), a3.aK(a41);
		return a40 = new g(L(245), function() {
			ii = Math.floor(a42.cb.value), ik = Math.floor(a41.cb.value);
			var ik, ii = {
				s0: Math.min(ii, ik),
				aAn: Math.max(ii, ik)
			};
			n.aB(8, n.vK(10).ot, new jx(21, {
				i1: gd.i1,
				ii: ii.s0,
				ik: ii.aAn
			}))
		}, 0, 0, 1), a3.aK(new hk([a40.button])), a3
	}()), y.push(function() {
		var a40, a3 = new a4,
			a41 = new hZ(b5.buffer.data[134], 1, function() {
				a40.button.click()
			}),
			a42 = new hZ(b5.buffer.data[133], 0, function() {
				a41.cb.focus()
			});
		return a3.a5(1 === gd.i1 ? L(266) : L(267)), a3.aK(a42), a42.cb.style.marginBottom = "0.8em", a3.a5(L(268)), a3.aK(a41), a40 = new g(L(245), function() {
			var x0 = a42.cb.value.slice(0, 20),
				x1 = Math.abs(Math.floor(a41.cb.value));
			n.aB(8, n.vK(10).ot, new jx(22, {
				i1: gd.i1,
				x0: x0,
				x1: x1
			}))
		}, 0, 0, 1), a3.aK(new hk([a40.button])), a3
	}()), y.push(function() {
		var a40, a3 = new a4,
			a41 = new hZ(b5.buffer.data[152], 1, function() {
				a40.button.click()
			}),
			a42 = new hZ(b5.buffer.data[151], 0, function() {
				a41.cb.focus()
			});
		return a3.a5(L(269)), a3.aK(a42), a42.cb.style.marginBottom = "0.8em", a3.a5(L(268)), a3.aK(a41), a40 = new g(L(245), function() {
			var x0 = a42.cb.value.slice(0, 5),
				x1 = Math.abs(Math.floor(a41.cb.value));
			n.aB(8, n.vK(10).ot, new jx(28, {
				i1: gd.i1,
				x0: x0,
				x1: x1
			}))
		}, 0, 0, 1), a3.aK(new hk([a40.button])), a3
	}()), y))
}

function aAo() {
	this.x8 = function(ga) {
		for (var cs = ga.length, dt = hy, a1 = 0; a1 < cs; a1++) dt.wy(16, ga.charCodeAt(a1))
	}
}

function aAp() {
	this.ns = function(player, id) {
		for (var aAq = b7.a0a[player], cs = aAq.length, a1 = 0; a1 < cs; a1++)
			if (f7.aAr(aAq[a1], id)) return !0;
		return !1
	}, this.rV = function(player, oN) {
		for (var o7, aAs, gF, aAq = b7.a0a[player], cs = aAq.length, dt = dR.dS, aAu = f7.nv(oN), aAv = f7.nx(oN), aAw = -1, min = dR.dS * dR.dS + dR.dT * dR.dT, id = eb.np(f7.nq(oN)), a1 = 0; a1 < cs; a1++)(aAs = (aAs = aAu - (o7 = (gF = aAq[
			a1]) >> 2) % dt) * aAs + (aAs = aAv - ~~((.5 + o7) / dt)) * aAs) < min && f7.aAr(gF, id) && (min = aAs, aAw = o7);
		return aAw
	}, this.aAx = function(o5, o7) {
		for (var id = eb.np(f7.nq(o7)), a4Y = f7.a4Z, gF = f7.nq(o5), aAy = -1, a1 = 0; a1 < 4; a1++) {
			var hE = gF + a4Y[a1];
			eb.uF(hE) && eb.np(hE) === id && (-1 === aAy || f7.oG(f7.aAz(hE), o7) < f7.oG(aAy, o7)) && (aAy = f7.aAz(hE))
		}
		return aAy
	}, this.a8o = function(player, oN) {
		for (var a4Y = f7.a4Z, gF = f7.nq(oN), a1 = 0; a1 < 4; a1++) {
			var hE = gF + a4Y[a1];
			if (eb.a4a(hE) && eb.a4b(player, hE)) return !0
		}
		return !1
	}, this.a8p = function(player, oN) {
		for (var a4Y = f7.a4Z, gF = f7.nq(oN), a1 = 0; a1 < 4; a1++) {
			var hE = gF + a4Y[a1];
			if (eb.wA(hE)) return !0;
			if (eb.a4a(hE)) {
				hE = eb.wB(hE);
				if (player !== hE && a4Q.a4R(player, hE)) return !0
			}
		}
		return !1
	}, this.aB0 = function(oN) {
		for (var a4Y = f7.a4Z, gF = f7.nq(oN), a1 = 0; a1 < 4; a1++) {
			var hE = gF + a4Y[a1];
			if (eb.a4a(hE)) {
				hE = eb.wB(hE);
				if (r.cz.fO(hE)) return hE
			}
		}
		return -1
	}, this.oJ = function(gF) {
		if (eb.uF(gF))
			for (var a4Y = f7.a4Z, a1 = 0; a1 < 4; a1++)
				if (eb.w9(gF + a4Y[a1])) return !0;
		return !1
	}, this.aB1 = function(player, id) {
		for (var ii = player << 3, ik = ii + il.b0.yG[player], rD = il.b0.rD, yL = il.b0.yL, a1 = ii; a1 < ik; a1++) {
			var yM = yL[a1];
			if (rD[yM] === id) return yM
		}
		return -1
	}, this.aB2 = function(player) {
		return 0 === il.b0.yG[player] ? -1 : il.b0.yL[player << 3]
	}, this.aB3 = function(f1, f2) {
		var cs = il.b0.rm;
		if (cs < 1) return -1;
		for (var rP = il.b0.rP, rn = 80, ro = -1, a1 = 0; a1 < cs; a1++) {
			var rh = f7.aB4(f1, f2, rP[a1]);
			rh < rn && (rn = rh, ro = a1)
		}
		return function(a1, f1, f2) {
			if (a1 < 0) return;
			var aB9 = il.b0.rP[a1],
				aBA = f7.aBB(aB9),
				aB9 = f7.aBD(aB9),
				a1 = 20 * (.9 + .1 * Math.log10(il.b0.wH[a1]));
			return a1 = Math.max(a1, f7.aBE(r.bF.nc(.02, 1.7))), hA.a97(f7.aBF(f1), f7.aBG(f2), aBA, aB9, a1)
		}(ro, f1, f2) ? ro : -1
	}, this.rG = function(rF) {
		for (var cs = il.b0.rm, rD = il.b0.rD, a1 = 0; a1 < cs; a1++)
			if (rD[a1] === rF) return d7.dM[2] = a1, !0;
		return !1
	}, this.a0d = function(player) {
		for (var ii = player << 3, ik = ii + il.b0.yG[player], yL = il.b0.yL, wH = il.b0.wH, dn = 0, a1 = ii; a1 < ik; a1++) dn += wH[yL[a1]];
		return dn
	}, this.rj = function(player, rA) {
		rA = il.b0.rc[rA];
		return this.a8o(player, rA[rA.length - 1])
	}, this.rg = function(o5, o7, rh, aB6) {
		var f6 = f7.nv(o5),
			o5 = f7.nx(o5),
			fB = f7.nv(o7),
			o7 = f7.nx(o7),
			fB = (rh = Math.max(rh, 1), fB - f6),
			o7 = o7 - o5,
			ex = hA.iV(Math.abs(fB) * aB6, rh),
			aB6 = hA.iV(Math.abs(o7) * aB6, rh);
		return f7.uG(f6 + Math.sign(fB) * ex, o5 + Math.sign(o7) * aB6)
	}, this.a2c = function(rb, oN) {
		for (var cs = rb.length - 1, c4 = f7.nv(oN), bp = f7.nx(oN), a1 = 0; a1 < cs; a1++) {
			var o5 = rb[a1],
				o7 = rb[a1 + 1],
				cU = f7.nv(o5),
				o5 = f7.nx(o5),
				cW = f7.nv(o7),
				o7 = f7.nx(o7);
			if (!(c4 !== cU && c4 !== cW && Math.sign(c4 - cU) === Math.sign(c4 - cW) || bp !== o5 && bp !== o7 && Math.sign(bp - o5) === Math.sign(bp - o7))) {
				if (cU === cW || o5 === o7) return a1;
				if (Math.abs(c4 - cU) === Math.abs(bp - o5) && Math.abs(c4 - cW) === Math.abs(bp - o7)) return a1
			}
		}
		return -1
	}, this.aBH = function() {
		for (var aBI = aR[0], rS = il.b0.rS, rm = il.b0.rm, dC = [], a1 = 0; a1 < rm; a1++) r.cz.rR(aBI, rS[a1] >> 3) && dC.push(a1);
		return dC
	}, this.a8n = function(player, rb) {
		for (var ii = player << 3, ik = ii + il.b0.yG[player], yL = il.b0.yL, rc = il.b0.rc, wo = rb[0], vg = rb[rb.length - 1], a1 = ii; a1 < ik; a1++) {
			var cy = rc[yL[a1]];
			if (cy[0] === wo && cy[cy.length - 1] === vg) return !0
		}
		return !1
	}
}

function kZ() {
	this.aBJ = function(uK) {
		var aBZ;
		hy.wx(55 + a0j.sL.i2()), hy.wy(1, 0), hy.wy(6, 13), hy.wy(14, kH.qD), hy.wy(4, b2.id), hy.wy(7, b2.k2), hy.wy(1, +kH.qK), hy.wy(1, +kH.qN), hy.wy(5, (new Date).getHours() % 24), aBZ = nD.sk(), hy.wy(8, aBZ[0]), hy.wy(8, aBZ[1]), a0j.sL
			.tB(), hW.b0.send(uK, hy.mH)
	}, this.aBL = function(uK, u5, aBM, aBN) {
		hy.wx(70), hy.wy(1, 0), hy.wy(6, 30), hy.wy(3, aBM), hy.wy(30, u5), hy.wy(30, aBN), hW.b0.send(uK, hy.mH)
	}, this.aBO = function(aBP) {
		aBQ.az(), aBQ.wy(1, 0), aBQ.wy(6, 6), oh.i4.tB(aBP, 16, aBQ), hW.b0.send(hW.b0.uP, aBQ.aBR())
	}, this.aBS = function(id) {
		hy.wx(13), hy.wy(1, 0), hy.wy(6, 15), hy.wy(6, id), hW.b0.send(0, hy.mH)
	}, this.aBT = function(id, value) {
		hy.wx(43), hy.wy(1, 0), hy.wy(6, 3), hy.wy(6, id), hy.wy(30, value), hW.b0.send(0, hy.mH)
	}, this.sf = function(id, ga) {
		var cs = Math.min(ga.length, 63);
		hy.wx(19 + 16 * cs), hy.wy(1, 0), hy.wy(6, 26), hy.wy(6, id), hy.wy(6, cs), oh.iA.x8(ga), hW.b0.send(0, hy.mH)
	}, this.aBU = function(aBV, vu) {
		hy.wx(7 + 26 * vu.length), hy.wy(1, 0), hy.wy(6, 9);
		for (var a1 = 0; a1 < vu.length; a1++) hy.wy(16, vu[a1][0]), hy.wy(10, vu[a1][1]);
		hW.b0.send(aBV, hy.mH)
	}, this.aBW = function(aBX, aBY) {
		hy.wx(20), hy.wy(1, 0), hy.wy(6, 19), hy.wy(1, aBX), hy.wy(12, aBY), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.x2 = function(username) {
		hy.wy(5, username.length), oh.iA.x8(username)
	}, this.aBa = function(aBb, aBc, uK, pow) {
		hy.wx(88), hy.wy(1, 0), hy.wy(6, 8), hy.wy(3, pow.aBM), hy.wy(30, pow.u5), hy.aBd(32, aBc), hy.wy(16, aBb), hW.b0.send(uK, hy.mH)
	}
}

function aBe(aBf, aBg, aBh, aBi, aBj, aBk) {
	var a5U = document.createElement("div"),
		aBl = document.createElement("div"),
		aBm = document.createElement("div"),
		aBn = document.createElement("div"),
		aBo = document.createElement("div"),
		aBp = document.createElement("div"),
		aBq = document.createElement("div"),
		aBr = document.createElement("div"),
		aBs = document.createElement("span"),
		aBt = document.createElement("div");
	this.aBu = new aBv(aBj, aBk), this.aBw = new aBx(aBk), this.aBy = [aBf, aBg, aBh, aBi], this.aC1 = function(zY) {
		zY = (zY / 10).toFixed(1) + "%";
		aBr.style.width = zY, aBs.innerHTML = zY
	}, this.aC2 = function() {
		this.aBw.aL(aBp), this.aBu.show(aBp)
	}, this.aC3 = function() {
		this.aBu.aL(aBp), this.aBw.show(aBp)
	}, this.aC4 = function() {
		return aBl
	}, this.show = function() {
		document.body.appendChild(a5U)
	}, this.aL = function() {
		n.removeChild(document.body, a5U)
	}, this.resize = function(aC5) {
		var aC6 = 1 - .4 * b2.b3.b4() * (bD.dt > 1.6 * bD.du),
			k4 = r.bF.oV(.05 * aC6),
			aC7 = bD.du > bD.dt,
			aC8 = r.bF.oV(.06 * aC6 + .03 * aC7),
			aC9 = r.bF.oV(.08 * aC6 + .03 * aC7),
			aCA = r.bF.oV(.04 + .02 * aC7),
			aC7 = r.bF.oV(.02 * aC6 + .01 * aC7),
			aCC = r.bF.oV(.025);
		a5U.style.font = r.bF.bG(0, aCC), aBo.style.font = r.bF.bG(0, .9 * aCC), aBt.style.font = r.bF.bG(0, .9 * aCC), aC6 < 1 && (aCC = r.bF.bG(0, aC6 * aCC), aBm.style.font = aCC, aBo.style.font = aCC, aBt.style.font = aCC, aBq.style.font =
				aCC, aBn.style.font = aCC), aBl.style.height = r.bF.nO(k4), aBl.style.font = r.bF.bG(0, .72 * k4), r.bF.kB(aBl, 2), aBm.style.top = r.bF.nO(k4), aBm.style.height = r.bF.nO(aC9), r.bF.kB(aBm, 2), aBn.style.font = r.bF.bG(0, aC6 * r
				.bF.oV(.02)), aBn.style.top = r.bF.nO(k4 + aC9), aBn.style.height = r.bF.nO(aCA), r.bF.kB(aBn, 2), aBo.style.top = r.bF.nO(k4 + aC9 + aCA), aBo.style.height = r.bF.nO(aC8), r.bF.kB(aBo, 2), aBp.style.top = r.bF.nO(k4 + aC9 + aCA +
				aC8), aBp.style.height = r.bF.nO(bD.du / bD.cp - k4 - aC9 - 2 * aC8 - aCA - aC7), aBq.style.top = r.bF.nO(bD.du / bD.cp - aC8 - aC7), aBq.style.height = r.bF.nO(aC7), r.bF.kB(aBq, 8), aBs.style.font = r.bF.bG(0, .8 * aC7), aBt
			.style.top = r.bF.nO(bD.du / bD.cp - aC8), aBt.style.height = r.bF.nO(aC8), r.bF.kB(aBt, 8), aBf.resize(aBm), aBg.resize(aBm), aBh.resize(aBm), aBi.resize(aBm), aC5 ? this.aBu.resize(aBp) : this.aBw.resize()
	};
	aBj = this;
	a5U.style.position = "absolute", a5U.style.top = "0", a5U.style.left = "0", a5U.style.width = "100%", a5U.style.height = "100%", a5U.style.backgroundColor = bO.a8k, c9.lz() || (a5U.style.backdropFilter = "blur(4px)", a5U.style
			.webkitBackdropFilter = "blur(4px)"),
		__fx.customLobby.isActive() && (a5U.style.display = "none"), aBl.style.position = "absolute", aBl.style.top = "0", aBl.style.left = "0", aBl.style.width = "100%", aBl.style.display = "flex", aBl.style.alignItems = "center", aBl.translate = !
		1;
	for (var dC = [aBm, aBn, aBo, aBt], a1 = 0; a1 < dC.length; a1++) dC[a1].style.position = "absolute", dC[a1].style.left = "0", dC[a1].style.width = "100%", r.bF.nP(dC[a1]);
	aBp.style.position = "absolute", aBp.style.left = "0", aBp.style.width = "100%", aBp.style.font = "inherit", aBq.style.position = "absolute", aBq.style.left = "0", aBq.style.width = "100%", aBr.style.position = "absolute", aBr.style.top = "0",
		aBr.style.left = "0", aBr.style.height = "100%", aBr.style.width = "50%", aBr.style.backgroundColor = bO.lL, aBs.innerHTML = "", aBs.style.position = "absolute", aBs.style.top = "50%", aBs.style.left = "50%", aBs.style.transform =
		"translate(-50%, -50%)", aBs.translate = !1, aBl.appendChild(function() {
			var ku = document.createElement("h1");
			return ku.textContent = L(270), ku.style.margin = "0 auto 0.15em auto", ku.style.fontFamily = "Arial Black, system-ui", ku.style.fontSize = "inherit", ku.style.fontWeight = "inherit", ku
		}()), aBm.appendChild(aBf.tY), aBn.appendChild(aBg.tY), aBo.appendChild(aBh.tY), aBq.appendChild(aBr), aBq.appendChild(aBs), aBt.appendChild(aBi.tY), a5U.appendChild(aBl), a5U.appendChild(aBm), a5U.appendChild(aBn), a5U.appendChild(aBo), a5U
		.appendChild(aBp), a5U.appendChild(aBq), a5U.appendChild(aBt), aBj.aBw.show(aBp)
}

function aCE() {
	var aCF, aCG, aCH;
	aCF = [32, 65, 191, 913, 931], aCG = [64, 127, 688, 930, 1155], aCH = new Array(aCF.length + 1);
	for (var a1 = 0; a1 < aCH.length; a1++) {
		aCH[a1] = 0;
		for (var bN = a1 - 1; 0 <= bN; bN--) aCH[a1] += aCG[bN] - aCF[bN]
	}

	function aCN(aN) {
		for (var a1 = aCF.length - 1; 0 <= a1; a1--)
			if (aN >= aCF[a1] && aN < aCG[a1]) return a1;
		return -1
	}
	this.qA = function(ga) {
		return 0 !== (ga = ga.trim()).indexOf("Bot ") && 0 !== ga.indexOf("[Bot] ") && function(ga, aCK, aCL) {
			var cs = (ga = ga.trim()).length;
			if (cs < aCK || aCL < cs) return !1;
			for (var aN, aCM = 0, a1 = 0; a1 < cs; a1++)
				if (aN = ga.charCodeAt(a1), aCM += 65 <= aN && aN <= 90 || 1040 <= aN && aN <= 1071 ? 1 : 0, -1 === aCN(aN)) return !1;
			if (3 < aCM && aCM > Math.floor(cs / 2)) return !1;
			return !0
		}(ga, 3, 20)
	}, this.tB = function(ga) {
		for (var cs = (ga = ga.trim()).length, dC = [], a1 = 0; a1 < cs; a1++) {
			var aN, cy = aCN(aN = ga.charCodeAt(a1));
			dC.push(aCH[cy] + aN - aCF[cy])
		}
		return dC
	}, this.i5 = function(dC) {
		for (var aN, fv, ga = "", cs = dC.length, a1 = 0; a1 < cs; a1++)
			for (fv = 1; fv < aCH.length; fv++)
				if (dC[a1] < aCH[fv]) {
					aN = aCF[fv - 1] + dC[a1] - aCH[fv - 1], ga += String.fromCharCode(aN);
					break
				} return ga
	}, this.aCO = function(ga) {
		for (var dC = this.tB(ga), result = "", a1 = 0; a1 < dC.length; a1++) result = (result += dC[a1] < 10 ? "00" : dC[a1] < 100 ? "0" : "") + dC[a1].toString(10);
		return result
	}, this.aCP = function(ga) {
		for (var dC = new Array(Math.floor(ga.length / 3)), a1 = 0; a1 < ga.length; a1 += 3) dC[Math.floor(a1 / 3)] = parseInt(ga.substring(a1, a1 + 3));
		return this.i5(dC)
	}, this.aCQ = function(ga) {
		for (var h2, dC = [ga.length], a1 = 0; a1 < ga.length; a1++) dC[a1] = ga.charCodeAt(a1) - 48;
		var result = "";
		for (a1 = 0; a1 < ga.length; a1++) a1 === ga.length - 1 || 51 < 10 * dC[a1] + dC[a1 + 1] ? result += dC[a1].toString() : (h2 = 10 * dC[a1] + dC[a1 + 1], result += String.fromCharCode(h2 + (h2 < 26 ? 65 : 71)), a1++);
		return result
	}, this.aCR = function(ga) {
		for (var aN, result = "", a1 = 0; a1 < ga.length; a1++) 48 <= (aN = ga.charCodeAt(a1)) && aN < 58 ? result += String.fromCharCode(aN) : 65 <= aN && aN < 75 ? result += "0" + (aN - 65).toString() : 75 <= aN && aN < 91 ? result += (aN - 65)
			.toString() : 97 <= aN && aN < 123 && (result += (aN - 71).toString());
		return result
	}, this.aCS = function(ga) {
		for (var cs = ga.length, dC = [], a1 = 0; a1 < cs; a1++)(aN = ga.charCodeAt(a1)) < 58 ? dC.push(ga[a1]) : (aN -= aN < 91 ? 65 : 71, dC.push(String(hA.iV(aN, 10))), dC.push(String(aN - 10 * hA.iV(aN, 10))));
		var cs = dC.length - 2,
			aN = 0,
			aCT = [];
		for (a1 = 0; a1 < cs; a1 += 3) aCT[aN++] = parseInt(dC[a1] + dC[a1 + 1] + dC[a1 + 2]);
		return aCT
	}, this.aCU = function() {
		for (var n1, aCV = "", a1 = 0; a1 < 6; a1++) n1 = 48 + r2.random() % 36, n1 += 58 <= n1 ? 39 : 0, aCV += String.fromCharCode(n1);
		return aCV
	}
}

function kk() {
	this.aCW = function() {
		for (var id = hx.i2(20), colors = new Array(11), a1 = 0; a1 < 11; a1++) colors[a1] = new Uint8Array([hx.i2(8), hx.i2(8), hx.i2(8)]);
		var h1 = i3.i4.i5(8);
		yh.th.qi({
			id: id,
			colors: colors,
			h1: h1
		})
	}, this.aCX = function(uK) {
		var aBM = hx.i2(3),
			gM = hx.i2(5),
			gM = a0j.sH.a7A(gM, hx.i2(30), hx.i2(30), hx.i2(30));
		hW.kY.aBL(uK, gM, aBM, 0)
	}, this.aCY = function(uK) {
		this.aCX(uK), b5.hi.hj(183, oh.oi.a5h(oh.oi.a5i(15))), 0 === uK && 0 === b5.buffer.data[105].value.length ? hW.kY.aBS(0) : hW.hn.aCZ(uK), 4 === hW.b0.aCa(uK).aCb() ? 6 === jz.si() && hW.kW.aCc(uK) : 5 !== hW.b0.aCa(uK).aCb() || 8 !== jz
			.si() && 10 !== jz.si() || hW.kU.aCd()
	}, this.aCe = function(uK) {
		var id = hx.i2(6);
		1 === id ? (b5.hi.hj(160, hx.i2(30)), hW.b0.aCf(uK), kD.aCg || hW.kY.aBS(1), nD.sd(), 8 === n.go && n.gp().aCh()) : 21 === id ? 8 === n.go && n.gp().i7(17) : 22 === id && (b5.hi.hj(106, b5.buffer.data[110].value), b5.hi.hj(110, ""), 8 ===
			n.go) && n.gp().i7(15)
	}, this.aCi = function() {
		var cs = hx.i2(16),
			aCj = hx.i2(16);
		if (hx.i9(55 + 10 * cs + 16 * aCj)) {
			for (var dC = [], a1 = 0; a1 < cs; a1++) dC.push(i3.iA.iB(hx.i2(10)));
			nD.sg(dC)
		} else hW.b0.i0(0, 3270)
	}, this.aCk = function(uK) {
		for (var aBM = hx.i2(3), gM = hx.i2(5), aBM = {
				aBM: aBM,
				u5: a0j.sH.a7A(gM, hx.i2(30), hx.i2(30), hx.i2(30))
			}, gM = hx.i6(32), aCl = [], a1 = 0; a1 < 17; a1++) aCl.push(new Uint8Array(hx.i2(16)));
		for (a1 = 0; a1 < 17; a1++)
			for (var dC = aCl[a1], cs = dC.length, aF = 0; aF < cs; aF++) dC[aF] = hx.i6(8);
		uj.show(aCl, gM, uK, aBM)
	}
}

function aCm() {
	var aCn, aCo, aCp;
	this.az = function() {
		aCn =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aCo =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aCp = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var we = ["K ", " Y", "E ", " Z", " z", " s", "S "], aCq = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a1 = aCn.length - 1; 0 <= a1; a1--)
			for (var bN = we.length - 1; 0 <= bN; bN--) aCn[a1] = aCn[a1].replace(we[bN], aCq[bN]);
		if (__fx.settings.realisticNames) aCn = realisticNames;
	}, this.yo = function() {
		var cs = q.bq,
			b8 = b7.b8,
			bB = b7.bB,
			playerNamesData = q.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < cs)
			for (var a1 = 0; a1 < cs; a1++) b8[a1] = bB[a1] = "Player " + r2.r3(1e3);
		else
			for (a1 = 0; a1 < cs; a1++) b8[a1] = bB[a1] = __fx.nameFilter.filter(playerNamesData[a1])
	}, this.wx = function() {
		if (9 === q.eU) {
			for (var n1 = r2.random(), aCw = aCp, aCx = aCo, dn = v.dn, cs = aCw.length, jP = q.data.teamPlayerCount[7], b8 = b7.b8, bB = b7.bB, a1 = jP - 1; a1 >= q.bq; a1--) b8[a1] = bB[a1] = aCw[(a1 + n1) % cs];
			for (cs = aCx.length - 1, a1 = jP; a1 < q.aA; a1++) b8[a1] = bB[a1] = aCx[dn[a1] ? cs : a1 % cs]
		} else(2 === q.data.playerNamesType ? function() {
			for (var cs = q.aA, b8 = b7.b8, bB = b7.bB, playerNamesData = q.data.playerNamesData, a1 = q.bq; a1 < cs; a1++) b8[a1] = bB[a1] = __fx.nameFilter.filter(playerNamesData[a1])
		} : 1 === q.data.playerNamesType ? function() {
			for (var b8 = b7.b8, bB = b7.bB, a1 = q.bq; a1 < q.aA; a1++) b8[a1] = bB[a1] = "Bot " + r2.r3(1e3)
		} : function() {
			for (var aCy = aCn, cs = aCy.length, n1 = r2.random(), b8 = b7.b8, bB = b7.bB, a1 = q.bq; a1 < q.aA; a1++) b8[a1] = bB[a1] = aCy[(a1 + n1) % cs]
		})()
	}
}

function uy() {
	var hS, kL, kM, kO;

	function aCz(id) {
		0 !== b2.id || b5.buffer.data[140].value ? 0 === id ? n.aB(8, 1, new jx(16)) : n.aB(2) : n.b0.jy(n.go, 0 === id ? 16 : 0)
	}
	this.show = function() {
		b2.b3.setState(12), hS.show(), this.resize(), this.bs()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), kL.resize()
	}, this.bs = function() {
		8 === jz.si() && (2 <= dg.l8 ? kM[2].tt === bO.u1 && kM[2].hg(0) : kM[2].tt !== bO.u1 && kM[2].hg(bO.u1), !q.cL && j9.mh(q.bS) ? kM[1].tt === bO.u1 && kM[1].hg(0) : kM[1].tt !== bO.u1 && kM[1].hg(bO.u1), !q.cL && gv.pr(q.bS) ? kM[0]
			.tt === bO.u1 && kM[0].hg(0) : kM[0].tt !== bO.u1 && kM[0].hg(bO.u1))
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, kM = [new g(L(271), function() {
		aCz(0)
	}), new g(L(272), function() {
		n.aB(16)
	}), new g(L(34), function() {
		n.aB(17)
	}), new g(L(273), function() {
		n.b0.a3v()
	}, 0, 0, 1), new g(L(201), function() {
		n.aB(3, 1)
	}), new g(L(10), function() {
		n.aB(18)
	}), new g(L(274), function() {
		n.aB(31)
	}), new g(L(275), function() {
		n.b0.jt(2)
	}), new g(L(276), function() {
		aCz(1)
	}), new g("🔒 " + L(18), function() {
		n.aB(32)
	}), new g(L(277), function() {
		var sw, sr;
		(sw = []).push(["Wiki", (sr = "https://territorial.io/") + "wiki/gold"]), sw.push(["Team Games", sr + "log/team"]), sw.push(["Battle Royale Games", sr + "log/br"]), sw.push(["1v1 Games", sr + "log/1v1"]), sw.push(["Zombie Games",
			sr + "log/zombies"
		]), sw.push(["Transactions", sr + "log/transactions"]), sw.push(["Changelog", sr + "changelog"]), 2 !== b2.id && sw.push(["Android App", aD7.aD8]), 1 !== b2.id && sw.push(["iOS App", aD7.aD9]), 0 === b2.id && sw.push([
			"Patreon", aD7.aDA
		]), sw.push(["Terms", aD7.aDB]), sw.push(["Privacy", aD7.aDC]), n.aB(4, 1, new uT(L(277), r.bF.sv(sw), !1, [new g("⬅️ " + L(1), function() {
			n.aB(1)
		})]))
	}), new g(L(278), function() {
		n.aB(4, 1, new uT(L(278), kH.k2 + "<br>" + hW.b0.hX("/changelog") + "<br><br><kH>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></kH>", !0, [new g("⬅️ " + L(1),
				function() {
					n.aB(1)
				})]))
	}), new g(L(279), function() {
		n.aB(4, 1, new uT(L(279), L(287) + "<br>" + L(288), !1, [new g("⬅️ " + L(1), function() {
			n.aB(1)
		}), new g(L(289), function() {
			b2.b3.aDD(), n.aB(1)
		})]))
	}), new g("👁️ " + L(280), function() {
		b2.b3.aD3(), n.aB(4, 1, new uT(L(290), L(291) + " " + hW.b0.hX("/privacy"), !1, [new g("⬅️ " + L(1), function() {
			n.aB(1)
		})]))
	})], kO = [new g("⬅️ " + L(1), function() {
		n.b0.sj()
	})], 8 === jz.si() && (kM.unshift(new g(L(283), function() {
		n.aB(30)
	})), kM.unshift(new g(L(284), function() {
		2 <= dg.l8 && (n.ta(), mb.l7(), bL.cC = !0)
	}, 0, 1)), kM.unshift(new g(L(285), function() {
		!q.cL && j9.mh(q.bS) && (jd.pJ.aD6(), n.ta(), j9.jA) && j9.l7()
	}, 0, 1)), kM.unshift(new g(L(286), function() {
		!q.cL && gv.pr(q.bS) && (y5.y6(2), jd.pJ.pw(), n.ta(), j9.jA) && j9.l7()
	}, 0, 1))), 1 === b2.id && 5 <= b2.k2 && kM.push(new g(L(281), function() {
		b2.b3.aD5()
	})), hS = new f(L(282), kO), kL = new kP(kM, hS.j)
}

function aDE() {
	this.pq = function() {
		return b2.b3.b4() ? 2 : 1
	}
}

function aDF() {
	function aDJ(player) {
		for (var a0b = b7.a0b[player], cs = a0b.length, oH = Math.max(hA.iV(cs, 12), 1), aDQ = eb.aDQ, n1 = r2.r3(cs), a1 = 0; a1 < cs; a1 += oH)
			for (var hE = a0b[(a1 + n1) % cs], gM = 3; 0 <= gM; gM--) {
				var hF = hE + aDQ[gM];
				if (eb.wE(hF)) return {
					gF: hF,
					id: eb.np(hF),
					cy: player
				}
			}
		return null
	}

	function aDO(player, aDR) {
		var dn = r.cz.aDS(player, v.a50[v.dn[player]]);
		b7.a0S[player].push(aDR.gF), yB.qi(player, dn, aDR.cy), z1.a4h(player, !0)
	}
	this.bs = function(player) {
		return !!dR.aDG(dR.qg) && !!q.data.passableMountains && 0 !== b7.a0b[player].length && function(player) {
			var aDI = aDJ(player);
			if (null === aDI) return !1;
			! function(player) {
				for (var cw = ct.cw, cu = ct.cu, cs = Math.min(cu, 12), ba = r2.r3(cu), dN = d7.dN, a0b = b7.a0b, fe = 0, a1 = 0; a1 < cs; a1++) {
					var cy = cw[(a1 + ba) % cu];
					cy !== player && a0b[cy].length && a4Q.a4R(player, cy) && (dN[fe++] = cy)
				}
				d7.d8[0] = fe
			}(player);
			var aDL = function(aDP) {
				for (var cs = d7.d8[0], dN = d7.dN, a1 = 0; a1 < cs; a1++) {
					var aDR = aDJ(dN[a1]);
					if (null !== aDR && aDR.id === aDP) return aDR
				}
				return null
			}(aDI.id);
			return null !== aDL ? (aDO(player, aDL), !0) : function(player, aDP) {
				var cs = yt.a3K.a3L;
				if (0 !== cs)
					for (var gF = yt.a3K.buffer[r2.r3(cs)] << 2, aDQ = eb.aDQ, gM = r2.r3(4);;) {
						if (gF += aDQ[gM], eb.wE(gF)) {
							if (eb.np(gF) === aDP) return aDO(player, {
								gF: gF,
								cy: q.aA
							}), !0;
							break
						}
						if (!eb.wA(gF)) break
					}
				return !1
			}(player, aDI.id)
		}(player)
	}
}

function aDT() {
	var aDU = 0,
		aDV = !0;

	function aDZ(id) {
		id = [L(292), L(293), L(294), L(295)][id];
		g5.wR(id)
	}
	this.bs = function() {
		var bx, aDX;
		bL.c8 < aDU || (aDU = bL.c8 + 3e3, q.cL) || q.cK || r.cz.pt(q.bS) || (bx = new Date, aDX = bx.getUTCSeconds(), aDV ? aDX < 43 && (aDV = !1) : aDX < 43 || (aDU += 52e3, aDV = !0, (aDX = (bx.getUTCMinutes() + 2) % 60) % 10 == 0 ? q.eU <
			7 && aDZ(0) : aDX % 10 == 5 ? 7 !== q.eU && 10 !== q.eU || aDZ(1) : aDX % 10 == 7 ? 8 === q.eU && aDZ(2) : aDX % 10 == 2 && 9 === q.eU && aDZ(3)))
	}
}

function aDa() {
	var aDb = new Uint8Array(64);
	this.az = function() {
		var a1;
		for (aDb[0] = 45, aDb[37] = 95, a1 = 0; a1 < 10; a1++) aDb[a1 + 1] = 48 + a1;
		for (a1 = 0; a1 < 26; a1++) aDb[a1 + 11] = 65 + a1, aDb[a1 + 38] = 97 + a1
	}, this.a5i = function(aDc) {
		for (var q9 = hx, aCT = new Uint8Array(aDc), a1 = 0; a1 < aDc; a1++) aCT[a1] = q9.i2(6);
		return aCT
	}, this.a5h = function(aCT) {
		for (var cs = aCT.length, aDd = aDb, dC = [], a1 = 0; a1 < cs; a1++) dC.push(String.fromCharCode(aDd[aCT[a1]]));
		return dC.join("")
	}, this.eh = function(value, aDe) {
		for (var aDd = aDb, dC = [], a1 = 0; a1 < aDe; a1++) dC.push(String.fromCharCode(aDd[value >> 6 * (aDe - 1 - a1) & 63]));
		return dC.join("")
	}
}

function aDf() {
	this.a0h = new aDg, this.aDh = new aDi, this.b0 = new aDj, this.iT = new iO, this.aDk = new aDl, this.a2U = new a4L, this.a9S = new aDm, this.rZ = new aDn, this.aDo = new u7, this.aDp = new aDq, this.ni = new a6s, this.aDr = new nf, this.rk =
		new a4i, this.nr = new aAp, this.aDs = new r7, this.rL = new a2K, this.aDt = new aDu, this.az = function() {
			this.rk.az(), this.aDh.az(), this.b0.az(), this.iT.az(), this.aDk.az(), this.aDp.az(), this.rL.az()
		}, this.cR = function() {
			this.aDp.cR(), this.aDh.cR()
		}
}

function aDv(a8Y, aDw) {
	var tY = document.createElement("div");
	this.tW = tY, this.resize = function() {
		tY.style.padding = r.bF.nO(bY.aDx), tY.style.lineHeight = r.bF.nO(r.bF.oV(.035))
	}, a8Y.style.overflowX = "hidden", a8Y.style.overflowY = "auto", tY.innerHTML = aDw, a8Y.appendChild(tY)
}

function aDy() {
	var aDz = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7a = function(c8) {
		var aE0, ga = new Date(c8.getTime() - 6e4 * c8.getTimezoneOffset()).toUTCString();
		return ga.length < 12 || (ga = ga.substring(5, ga.length), 0 === (c8 = c8.getTimezoneOffset())) ? ga : (aE0 = (c8 < 0 ? "+" : "-") + hA.iV(Math.abs(c8), 60), 0 == (c8 = Math.abs(c8) % 60) ? ga + aE0 : ga + aE0 + ":" + (c8 < 10 ? "0" :
			"") + c8)
	}, this.a7p = function(c8) {
		var ga = c8.toUTCString();
		return ga.length < 12 ? ga : function(c8) {
			return aDz[c8.getUTCDay()]
		}(c8) + ", " + ga.substring(5, ga.length - 4)
	}
}

function aE2() {
	var aE3, aE4, uF, aE5;
	this.az = function() {
		var a1, c4, bp, a3i, aE6, dt, du, b9, a5E, fm, h2, cy, rh, bN, aDk;
		if (function() {
				if (uF = !0, aE5 = "rgb(" + dR.aE9[0] + "," + dR.aE9[1] + "," + dR.aE9[2] + ")", dR.aEA(dR.qg)) return 1;
				return uF = !1, 0
			}()) aE4 = null;
		else {
			for (aE3 = hA.iV(96, 4), aE6 = 1 === dR.qg ? (a3i = 0, 160) : (a3i = 128, 32), aE5 = "rgb(" + a3i + "," + a3i + "," + a3i + ")", aE4 = new Array(4), a1 = 3; 0 <= a1; a1--) {
				if (aE4[a1] = document.createElement("canvas"), dt = a1 % 2 == 0 ? dR.dS : aE3, du = a1 % 2 == 0 ? aE3 : dR.dT + 2 * aE3, aE4[a1].width = dt, aE4[a1].height = du, fm = (a5E = (b9 = aE4[a1].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, dt, du)).data, a1 % 2 == 0)
					for (bp = aE3 - 1; 0 <= bp; bp--)
						for (h2 = aE6 + Math.floor((bp + 1) * (a3i - aE6) / (aE3 + 1)), c4 = dt - 1; 0 <= c4; c4--) fm[cy = 4 * ((0 === a1 ? aE3 - bp - 1 : bp) * dt + c4)] = h2, fm[cy + 1] = h2, fm[cy + 2] = h2, fm[cy + 3] = 255;
				else {
					for (c4 = aE3 - 1; 0 <= c4; c4--)
						for (h2 = aE6 + Math.floor((c4 + 1) * (a3i - aE6) / (aE3 + 1)), bp = du - 1 - aE3; aE3 <= bp; bp--) fm[cy = 4 * (bp * dt + (3 === a1 ? aE3 - c4 - 1 : c4))] = h2, fm[cy + 1] = h2, fm[cy + 2] = h2, fm[cy + 3] = 255;
					for (bN = 1; 0 <= bN; bN--)
						for (c4 = aE3 - 1; 0 <= c4; c4--)
							for (bp = aE3 - 1; 0 <= bp; bp--) rh = (Math.pow(c4 * c4 + bp * bp, .5) + 1) / (aE3 + 1), h2 = aE6 + Math.floor((1 < rh ? 1 : rh) * (a3i - aE6)), fm[cy = 4 * ((0 === bN ? aE3 - bp - 1 : bp + bN * (du - aE3)) * dt + (
								1 === a1 ? c4 : aE3 - c4 - 1))] = h2, fm[cy + 1] = h2, fm[cy + 2] = h2, fm[cy + 3] = 255
				}
				b9.putImageData(a5E, 0, 0)
			}
			aDk = aE6, dR.xb.fillStyle = "rgb(" + aDk + "," + aDk + "," + aDk + ")", dR.xb.fillRect(0, 0, dR.dS, 1), dR.xb.fillRect(0, dR.dT - 1, dR.dS, 1), dR.xb.fillRect(0, 0, 1, dR.dT), dR.xb.fillRect(dR.dS - 1, 0, 1, dR.dT)
		}
	}, this.a1I = function() {
		var bN = uF ? 0 : -aE3;
		mq(bN, bN, dR.dS - 2 * bN, dR.dT - 2 * bN, aEB.q0, aEB.q1, aEB.q2, aEB.q3) || (cS.fillStyle = aE5, cS.fillRect(0, 0, bD.dt, bD.du))
	}, this.cR = function() {
		uF || (mp(0, -aE3, dR.dS, aE3, aEB.q0, aEB.q1, aEB.q2, aEB.q3) && cS.drawImage(aE4[0], aEB.py, aEB.pz - aE3), mp(dR.dS, -aE3, aE3, dR.dT + 2 * aE3, aEB.q0, aEB.q1, aEB.q2, aEB.q3) && cS.drawImage(aE4[1], aEB.py + dR.dS, aEB.pz - aE3), mp(
			0, dR.dT, dR.dS, aE3, aEB.q0, aEB.q1, aEB.q2, aEB.q3) && cS.drawImage(aE4[2], aEB.py, aEB.pz + dR.dT), mp(-aE3, -aE3, aE3, dR.dT + 2 * aE3, aEB.q0, aEB.q1, aEB.q2, aEB.q3) && cS.drawImage(aE4[3], aEB.py - aE3, aEB.pz - aE3))
	}
}

function aEC() {
	var gap, l1, c4 = [0, 0, 0, 0, 0],
		bp = [0, 0, 0, 0, 0],
		gH = [1, 1, 1, 1, 1],
		h2 = [!0, !0, !0, !1, !1],
		aN = (this.dZ = [!0, !0, !0, !1, !1], null);
	this.gt = function(fr, aED) {
		aN = fr, h2 = aED, l1 = [aD7.aD8, aD7.aD9, aD7.aEE, aD7.aEE, aD7.aEF], this.az()
	}, this.az = function() {
		if (bl.gT()) {
			var a1, kp = Math.floor((b2.b3.b4() ? .261 : .195) * bD.bE),
				kq = Math.floor(.9 * kp),
				kt = Math.floor(.17 * kq);
			if (gap = b2.b3.b4() ? 2 * bY.gap : bY.gap, gH[0] = kp / aN[0].width, gH[1] = kq / aN[1].width, gH[2] = kt / aN[2].height, gH[3] = kt / aN[3].height, gH[4] = kt / aN[4].height, gH[2] *= 1.7, gH[3] *= 1.07, c4[0] = gap, c4[1] = gap,
				c4[2] = gap, c4[3] = gap, c4[4] = Math.floor(2 * gap + gH[3] * aN[3].width), bp[0] = gap, bp[1] = bp[0] + gap + gH[0] * aN[0].height, bp[2] = bp[1] + gap + gH[1] * aN[1].height, bp[3] = bp[2] + gap + gH[2] * aN[2].height, bp[4] =
				bp[3], !h2[0])
				for (a1 = 0; a1 < 5; a1++) bp[a1] -= gH[0] * aN[0].height + gap;
			if (!h2[1])
				for (a1 = 2; a1 < 5; a1++) bp[a1] -= gH[1] * aN[1].height + gap
		}
	}, this.l2 = function() {
		return !(7 === jz.si() && b2.b3.b4())
	}, this.c3 = function(cj, ck) {
		if (aN && this.l2())
			for (var a1 = h2.length - 1; 0 <= a1; a1--)
				if (h2[a1] && this.dZ[a1] && c4[a1] < cj && bp[a1] < ck && cj < c4[a1] + gH[a1] * aN[a1].width && ck < bp[a1] + gH[a1] * aN[a1].height) return n.aB(9, n.go, new aEG(L(296), r.bF.sx(l1[a1]))), !0;
		return !1
	}, this.cR = function() {
		if (aN && this.l2()) {
			var a1;
			for (cS.imageSmoothingEnabled = !0, a1 = 0; a1 < 5; a1++) h2[a1] && this.dZ[a1] && (cS.setTransform(gH[a1], 0, 0, gH[a1], c4[a1], bp[a1]), cS.drawImage(aN[a1], 0, 0));
			cS.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aEH() {
	function aEV() {
		return {
			dS: dR.dS,
			dT: dR.dT,
			t6: dR.t6,
			xb: dR.xb,
			aEI: dR.aEI,
			aE9: dR.aE9,
			qg: dR.qg,
			mapSeed: dR.mapSeed,
			a1B: dR.a1B
		}
	}

	function aEN(a1) {
		return 1 !== a1 && dR.aEP(a1) && a1 !== dR.aEY()
	}
	this.a2y = 25, this.a35 = 13, this.ip = 4096, this.dS = 0, this.dT = 0, this.t6 = null, this.xb = null, this.aEI = null, this.aE9 = null, this.qg = 0, this.mapSeed = 0, this.a1B = !1, this.aEJ = new aEK, this.qe = new a2j, this.wl = new aEL, this
		.az = function() {
			this.qe.az()
		}, this.wx = function(map, aEM) {
			((map %= this.a2y) !== this.qg || aEN(this.qg) && aEM !== this.mapSeed) && (this.a1B = !1, this.aEJ.aEO(), r2.yk(map), this.qg = map, this.mapSeed = aEM, aEN(map) && (dR.qe.qf[map].a31 = aEM), this.aEP(this.qg) ? (map = dR.qe.qf[this.qg],
				this.dS = map.dt, this.dT = map.du, r2.yk(map.a31), aER.wx([this.dS, this.dT, map.a2z, map.a30]), aES(), wi.aET(), aER.aEU()) : aEQ())
		}, this.t7 = function(map, aEM) {
			var dV = aEV(),
				map = (this.wx(map, aEM), this.aEJ.aEO(), aEV());
			return aEM = dV, dR.dS = aEM.dS, dR.dT = aEM.dT, dR.t6 = aEM.t6, dR.xb = aEM.xb, dR.aEI = aEM.aEI, dR.aE9 = aEM.aE9, dR.qg = aEM.qg, dR.mapSeed = aEM.mapSeed, dR.a1B = aEM.a1B, map
		}, this.aEX = function(canvas) {
			canvas && this.t6 !== canvas && (this.dS = canvas.width, this.dT = canvas.height, this.t6 = canvas, this.xb = this.t6.getContext("2d", {
				alpha: !1
			}), this.a5E = this.xb.getImageData(0, 0, this.dS, this.dT), this.aE9 = this.a5E.data, this.qg = this.aEY(), this.mapSeed = 0, dR.qe.qf[this.qg].name = q.data.mapName)
		}, this.aDG = function(a1) {
			return 3 === a1 || 7 === a1 || 9 === a1 || 21 === a1 || a1 === this.aEY()
		}, this.aEA = function(a1) {
			return 2 === a1 || 7 === a1 || 9 === a1 || 20 === a1
		}, this.aEZ = function(a1) {
			return 1 === a1
		}, this.aEY = function() {
			return this.a2y
		}, this.aEP = function(a1) {
			return void 0 === this.qe.qf[a1].a34
		}, this.t8 = function(vu) {
			return 0 === vu.mapType ? vu.mapProceduralIndex < 10 ? vu.mapProceduralIndex : 10 + vu.mapProceduralIndex : 1 === vu.mapType ? 10 <= vu.mapRealisticIndex ? 22 + vu.mapRealisticIndex - 10 : vu.mapRealisticIndex + 10 : void 0
		}, this.aEa = function(vu, aEb) {
			0 === vu.mapType ? vu.mapProceduralIndex = aEb < 10 ? aEb : aEb - 10 : 1 === vu.mapType && (vu.mapRealisticIndex = aEb - (22 <= aEb ? 12 : 10))
		}
}

function aEc() {
	this.i5 = function(aEd) {
		for (var q9 = hx, size = q9.i2(aEd), aEe = 7 + 9 * q9.i2(1), dC = [], a1 = 0; a1 < size; a1++) dC.push(String.fromCharCode(q9.i2(aEe)));
		return dC.join("")
	}
}

function ka() {
	this.aEf = function() {
		hy.wx(39), hy.wy(1, 0), hy.wy(6, 16), hW.kY.aEg(), hW.b0.send(0, hy.mH)
	}, this.aCZ = function(uK) {
		hy.wx(127), hy.wy(1, 0), hy.wy(6, 17), i3.oi.x4(b5.buffer.data[105].value, 5), i3.oi.x4(b5.buffer.data[106].value, 15), hW.b0.send(uK, hy.mH)
	}, this.aEi = function() {
		hy.wx(97), hy.wy(1, 0), hy.wy(6, 18), i3.oi.x4(b5.buffer.data[110].value, 15), hW.b0.send(0, hy.mH)
	}, this.iN = function(gd) {
		var cs = gd.ga.length;
		hy.wx(21 + 16 * cs), hy.wy(1, 0), hy.wy(6, 29), hy.wy(6, gd.action), hy.wy(8, cs), oh.iA.x8(gd.ga), hW.b0.send(0, hy.mH)
	}, this.aEj = function(a5o, colors, aEk, h1) {
		aBQ.az(), aBQ.wy(1, 0), aBQ.wy(6, 16), aBQ.wy(20, Math.min(a5o, 1e6));
		for (var a1 = 0; a1 < 11; a1++)
			for (var bN = 0; bN < 3; bN++) aBQ.wy(8, colors[a1][bN]);
		a5o = nD.data.sl(aEk.trim());
		aBQ.wy(8, -1 === a5o ? 255 : a5o), oh.i4.tB(h1.trim().substring(0, 180), 8, aBQ), hW.b0.send(0, aBQ.aBR())
	}, this.aEl = function(data) {
		hy.wx(43), hy.wy(1, 0), hy.wy(6, 25), hy.wy(6, data.action), i3.oi.x4(data.hp, 5), hW.b0.send(0, hy.mH)
	}, this.ho = function(data) {
		hy.wx(75), hy.wy(1, 0), hy.wy(6, 27), hy.wy(6, data.action), i3.oi.x4(data.hp, 5), hy.aBd(32, data.value), hW.b0.send(0, hy.mH)
	}
}

function aEm() {
	function o6(c4, cs, bp, pd, nz, oH) {
		if (!(bp < 1 || nz < bp))
			for (var a1 = 0; a1 <= cs; a1++) {
				var gF = f7.oI(c4, bp);
				if (pd(gF)) return gF >> 2;
				c4 += oH
			}
		return -1
	}

	function oB(bp, cs, c4, pd, ny, oH) {
		if (!(c4 < 1 || ny < c4)) {
			cs = Math.max(cs, 0);
			for (var a1 = 0; a1 <= cs; a1++) {
				var gF = f7.oI(c4, bp);
				if (pd(gF)) return gF >> 2;
				bp += oH
			}
		}
		return -1
	}

	function oF(o5, o7, nh) {
		return -1 !== o7 && (-1 === o5 || f7.oG(o7, nh) < f7.oG(o5, nh)) ? o7 : o5
	}
	this.aEn = function(nh) {
		return this.zR(nh, function(gF) {
			return eb.w9(gF)
		})
	}, this.aEo = function(nh) {
		return this.zR(nh, function(gF) {
			return eb.oP(gF, q.bS)
		})
	}, this.zR = function(nh, pd) {
		return function(nh, nk, pd) {
			for (var nu = f7.nv(nh), nw = f7.nx(nh), ny = dR.dS - 2, nz = dR.dT - 2, o0 = -1, gM = 0; gM < nk; gM++) {
				var o1 = Math.max(nu - gM, 1),
					o2 = Math.max(nw - gM, 1),
					o3 = Math.min(nu + gM, ny),
					o4 = Math.min(nw + gM, nz),
					o5 = o6(nu, o3 - nu, nw - gM, pd, nz, 1),
					o7 = o6(nu - 1, nu - o1 - 1, nw - gM, pd, nz, -1),
					o3 = o6(nu, o3 - nu, nw + gM, pd, nz, 1),
					o1 = o6(nu - 1, nu - o1 - 1, nw + gM, pd, nz, -1),
					oA = oB(nw, o4 - nw - 1, nu - gM, pd, ny, 1),
					oC = oB(nw - 1, nw - o2 - 2, nu - gM, pd, ny, -1),
					o4 = oB(nw, o4 - nw - 1, nu + gM, pd, ny, 1),
					o2 = oB(nw - 1, nw - o2 - 2, nu + gM, pd, ny, -1);
				if (o0 = oF(o0, o5, nh), o0 = oF(o0, o7, nh), o0 = oF(o0, o3, nh), o0 = oF(o0, o1, nh), o0 = oF(o0, oA, nh), o0 = oF(o0, oC, nh), o0 = oF(o0, o4, nh), 0 <= (o0 = oF(o0, o2, nh)) && gM * gM >= f7.oG(o0, nh)) return o0
			}
			return -1
		}(nh, f7.nl(), pd)
	}
}

function aEq() {
	this.a3K = new aEr, this.aEs = new aEt, this.aEu = new aEv, this.performance = new aEw, this.aEx = new aEy, this.a5A = new aEz, this.aF0 = new aDF, this.aF1 = new a8l, this.a9T = new aF2, this.az = function() {
		this.a3K.az(), this.aEu.az(), this.performance.az(), this.aEx.az(), this.a5A.az()
	}, this.bs = function() {
		this.performance.bs(), this.a3K.bs(), this.aEu.aF3()
	}
}

function aF4() {
	this.jS = new aF5, this.tA = new aF6, this.ju = new aF7, this.az = function() {
		q.cL || this.jS.az()
	}, this.bs = function() {
		q.cL || (this.jS.bs(), 3 !== n.go) || bL.bM() % 15 != 5 && 2 !== q.cf || n.gp().a2G()
	}, __fx.replay.restartReplay = () => this.a2J(), this.a2J = function() {
		var aF9 = 0 !== q.cf,
			aFA = q.tG;
		aF9 || jz.tD(), q.jv.tE(), q.data.canvas = null, hW.b0.close(hW.b0.uY, 3257), hW.b0.uY = 0, q.data.isReplay = 1, q.tF(), aF9 && (q.tG = aFA)
	}, this.a2I = function(ga) {
		var a1 = ga.indexOf("=");
		return 0 <= a1 ? ga.substring(a1 + 1) : ga
	}, this.a2H = function(ga) {
		return ga
	}, __fx.replayHistory.load = saved => {
		saved = jR.a2I(saved), jR.ju.i5(saved) && jR.a2J()
	}
}

function vB() {
	var b, c, d, y;

	function h() {
		l(), 2 === q.data.playerNamesType && 1 === r.s.x(q.data.playerNamesData).length && (q.data.playerNamesType = 0), 2 !== q.data.playerNamesType && (q.data.playerNamesData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.playerNamesType && r.s.s9(d.u(), q.data.playerNamesData, 20)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(105), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(106), L(107), L(6)],
			value: q.data.playerNamesType
		}, function(a9) {
			l(), q.data.playerNamesType = a9, n.aB(23)
		})), a3.aK(new aFB), a3.aK(new is({
			value: q.data.selectableName
		}, L(297), function(value) {
			q.data.selectableName = value
		})), y.push(a3)
	}(y = []), function(y) {
		var a3;
		2 === q.data.playerNamesType && ((a3 = new a4).a5("Data"), d = new aG(0, 1, 0, 1), q.data.playerNamesData && q.data.playerNamesData.length === q.aA || (q.data.playerNamesData = new Array(q.aA), q.data.playerNamesData.fill("")), d
			.aH(r.aI.aJ(q.data.playerNamesData, 1, '"')), a3.aK(d), y.push(a3))
	}(y), y))
}

function aFC() {
	this.b0 = new aFD, this.aDh = new aFE, this.az = function() {
		this.b0.az()
	}, this.bs = function() {
		0 !== this.b0.aFF && this.b0.aFF--
	}
}

function aDu() {
	this.bs = function(player, rF) {
		player = il.nr.aB1(player, rF);
		return !(player < 0 || !il.rL.a2h(player) || (il.rL.a2S(player), 0))
	}
}

function aFH() {
	aFI() ? (aFJ(), aFK !== q.aA && aFL()) : aFM()
}

function aFL() {
	a4Q.aFN(), a4Q.aFO(b7.a0Z[aFK]), a4Q.aFO(b7.a0a[aFK]), dR.aDG(dR.qg) && a4Q.aFO(b7.a0b[aFK]), a4Q.aFP(b7.a0S[aFK]), a4Q.aFQ(b7.a0a[aFK]), a4Q.aFQ(b7.a0b[aFK]), a4Q.aFR(), a4Q.aFS()
}

function aFJ() {
	aFT = !0, yB.aFU(aFV, aFW, aFX), yB.aFY(aFV, aFW), b7.br[aFV] += aFZ, a4Q.aFa(), aFb()
}

function aFI() {
	return (aFK === q.aA ? aFc : aFd)()
}

function aFd() {
	var aFe = aFZ * q.yV,
		aFf = aFg(),
		aFh = aFi(),
		aFf = aFe + 2 * aFf + aFh,
		aFk = aFl * aFZ;
	return aFf < aFk ? (aFX -= aFf, dg.a0e(aFV, aFf, 13), aFm(aFf - aFe, aFh), !0) : aFn && 0 === aFh ? (aFX -= aFk, aFk += r.cz.aFo(aFV, aFf - aFk + 1), dg.a0e(aFV, aFk, 13), aFm(aFk - aFe, 0), !0) : (aFX -= aFk, dg.a0e(aFV, aFk, 13), aFm(aFk - aFe,
		aFh), !1)
}

function aFm(aFk, aFh) {
	if (0 < aFh) {
		if (aFk <= aFh) return dg.a0e(aFK, aFk, 13), void yB.aFp(aFK, aFV, aFh - aFk);
		yB.aFp(aFK, aFV, 0), aFk -= aFh
	}
	aFk = hA.iV(aFk, 2), aFk = Math.min(b7.di[aFK], aFk), dg.a0e(aFK, aFk, 13), b7.di[aFK] -= aFk
}

function aFi() {
	return yB.aFq(aFK, aFV)
}

function aFg() {
	return hA.iV(aFZ * b7.di[aFK], 1 + hA.iV(10 * b7.br[aFK], 16))
}

function aFc() {
	var aFr = aFZ * q.yV;
	return aFX -= aFr, dg.a0e(aFV, aFr, 13), !0
}

function aFb() {
	for (var a1 = aFZ - 1; 0 <= a1; a1--) b7.a0S[aFV].push(aFs[a1]), b7.a0Z[aFV].push(aFs[a1]), eb.aAd(aFs[a1], aFV)
}

function aFt() {
	var aFu = 0,
		aFv = 0,
		aFw = 0,
		aFx = 0,
		aAG = -1;

	function aG1(gF) {
		if (aAG === gF) return !1;
		if (-1 === (aAG = gF)) aFu = 0, g5.ws(aFu, 0);
		else {
			if (eb.a4a(gF)) return aFw = eb.wB(gF), aG2 = b7.di[aFw] - b7.fX[aFw], (4 !== aFu || aG2 !== aFv) && (aFu = 4, aFv = aG2, g5.ws(aFu, aG2), !0);
			if (eb.wA(gF)) return 3 !== aFu && (aFu = 3, g5.ws(aFu, 0), !0);
			if (eb.wE(gF)) return 2 !== aFu && (aFu = 2, g5.ws(aFu, 0), !0);
			var aG2 = il.nr.aB3(c9.aAI, c9.aAJ);
			if (-1 === aG2) return 1 !== aFu && (aFu = 1, g5.ws(aFu, 0), !0);
			gF = il.b0.wH[aG2];
			if (aFw = il.b0.rD[aG2], aFx = il.b0.rS[aG2] >> 3, 5 === aFu && gF === aFv) return !1;
			aFu = 5, aFv = gF, g5.ws(aFu, gF)
		}
		return !0
	}
	this.az = function() {
		aFx = aFw = aFv = aFu = 0, aAG = -1
	}, this.bs = function(bJ) {
		var nw;
		!bJ && c9.lz() || (bJ = f7.f8(c9.aAI), nw = f7.fA(c9.aAJ), f7.aAK(bJ, nw) ? (bJ = f7.uG(bJ, nw), aG1(f7.nq(bJ))) : aG1(-1))
	}, this.aFz = function() {
		var aG5, aG2, aG3, aG4;
		if (0 !== aFu && 2 !== aFu)
			if (c9.lz()) {
				if (1 !== aFu && 3 !== aFu) {
					if (4 === aFu) return void(aG2 = b7.di[aFw] - b7.fX[aFw], aFv === aG2 || (aFv = aG2, g5.ws(aFu, aG2)));
					(aG3 = il.nr.aB1(aFx, aFw)) < 0 ? (aFu = 1, g5.ws(aFu, 0)) : (aG4 = il.b0.wH[aG3]) !== aFv && (aFv = aG4, g5.ws(aFu, aG4))
				}
			} else if (1 === aFu) - 1 !== (aG3 = il.nr.aB3(c9.aAI, c9.aAJ)) && (aFu = 5, aFv = il.b0.wH[aG3], g5.ws(aFu, aFv));
		else if (3 === aFu) eb.a4a(aAG) && (aFu = 4, aG5 = eb.wB(aAG), aFv = b7.di[aG5] - b7.fX[aG5], g5.ws(aFu, aFv));
		else if (4 === aFu) {
			if (eb.a4a(aAG)) return void(aG5 = eb.wB(aAG), aG2 = b7.di[aG5] - b7.fX[aG5], aFv === aG2 || (aFv = aG2, g5.ws(aFu, aG2)));
			aFu = 3, g5.ws(aFu, 0)
		} else - 1 === (aG3 = il.nr.aB3(c9.aAI, c9.aAJ)) ? (aFu = 1, g5.ws(aFu, 0)) : (aG4 = il.b0.wH[aG3]) !== aFv && (aFv = aG4, g5.ws(aFu, aG4))
	}
}

function a9e() {
	this.aG6 = function(gF) {
		var aDP;
		return dR.aDG(dR.qg) && q.data.passableMountains && (aDP = eb.np(gF), this.aG7(q.bS, aDP) || this.aG8(q.bS, aDP)) && 0 !== (aDP = function(aAw) {
			for (var c4 = f7.nv(aAw), bp = f7.nx(aAw), max = Math.max(dR.dS, dR.dT) - 2, aGC = max * max, wa = !1, aGD = 0, rh = 0; rh < max; rh++) {
				var aGE, oN = function(c4, bp, rh) {
					for (var a1 = 0; a1 <= rh; a1++)
						for (var bN = -1; bN < 2; bN += 2)
							for (var fv = -1; fv < 2; fv += 2)
								for (var aN = 0; aN < 2; aN++) {
									var gF = function(c4, bp) {
										if (f7.aGH(c4, bp)) {
											c4 = f7.uG(c4, bp), bp = f7.nq(c4);
											if (eb.w9(bp) && eb.aGI(bp)) return c4
										}
										return 0
									}(c4 + aN * bN * a1 + (1 - aN) * fv * rh, bp + aN * fv * rh + (1 - aN) * bN * a1);
									if (gF) return gF
								}
					return 0
				}(c4, bp, rh);
				oN && (aGE = f7.aGF(c4, bp, oN)) < aGC && (aGD = oN, aGC = aGE, wa || (wa = !0, max = Math.floor(Math.sqrt(aGE)) + 1))
			}
			return aGD
		}(f7.aAz(gF))) && (gF = f7.nq(aDP), eb.wA(gF) || (gF = eb.wB(gF)) !== q.bS && a4Q.a4R(gF, q.bS)) ? aDP : 0
	}, this.aGA = function(player, oN) {
		oN = f7.nq(oN);
		if (eb.w9(oN)) {
			if (eb.wA(oN)) d7.dL[0] = q.aA;
			else if (eb.wB(oN) !== d7.dL[0]) return !1;
			for (var wD = function(gF) {
					var aDQ = eb.aDQ,
						wD = [];
					loop: for (var gM = 3; 0 <= gM; gM--) {
						var hF = gF + aDQ[gM];
						if (eb.wE(hF)) {
							for (var id = eb.np(hF), a1 = 0; a1 < wD.length; a1++)
								if (id === wD[a1]) continue loop;
							d7.dJ[wD.length] = hF, wD.push(id)
						}
					}
					return wD
				}(oN), cs = wD.length, a1 = 0; a1 < cs; a1++)
				if (this.aG7(player, wD[a1]) || this.aG8(player, wD[a1])) return d7.dJ[0] = d7.dJ[a1], !0
		}
		return !1
	}, this.aG7 = function(player, aDP) {
		for (var a0b = b7.a0b[player], cs = a0b.length, oH = Math.max(hA.iV(cs, 12), 1), aDQ = eb.aDQ, a1 = 0; a1 < cs; a1 += oH)
			for (var hE = a0b[a1], gM = 3; 0 <= gM; gM--) {
				var hF = hE + aDQ[gM];
				if (eb.wE(hF) && aDP === eb.np(hF)) return !0
			}
		return !1
	}, this.aG8 = function(player, aDP) {
		for (var a0b = b7.a0b[player], cs = a0b.length, aDQ = eb.aDQ, a1 = 0; a1 < cs; a1++)
			for (var hE = a0b[a1], gM = 3; 0 <= gM; gM--) {
				var hF = hE + aDQ[gM];
				if (eb.wE(hF) && aDP === eb.np(hF)) return !0
			}
		return !1
	}
}

function aGJ() {
	this.aGK = [], this.aGL = [], this.az = function() {
		this.aGK = [], this.aGL = []
	}, this.bs = function() {
		0 <= this.aGK.length && this.aGM(this.aGK), 0 <= this.aGL.length && this.aGM(this.aGL)
	}, this.aGM = function(dC) {
		for (var fv = -1, a1 = dC.length - 1; 0 <= a1; a1--)
			if (dC[a1].c8--, dC[a1].c8 <= 0) {
				fv = a1;
				break
			} for (a1 = fv; 0 <= a1; a1--) dC.shift()
	}, this.aGN = function(id, cv, aGO) {
		return this.aGG(this.aGK, id, cv, aGO)
	}, this.aGP = function(id, cv, aGO) {
		return this.aGG(this.aGL, id, cv, aGO)
	}, this.aGG = function(dC, id, cv, aGO) {
		return ! function(dC, id, cv) {
			var a1, aF;
			for (a1 = cv.length - 1; 0 <= a1; a1--)
				for (aF = dC.length - 1; 0 <= aF; aF--)
					if (dC[aF].player === cv[a1] && id === dC[aF].id) return 1;
			return
		}(dC, id, cv) && (aGO && function(dC, id, cv) {
			var a1;
			for (a1 = cv.length - 1; 0 <= a1; a1--) dC.push({
				player: cv[a1],
				id: id,
				c8: 384
			})
		}(dC, id, cv), !0)
	}
}

function aGS() {
	var aGT;

	function aGe(fr, fu, c4, bp, globalAlpha) {
		dR.xb.save(), dR.xb.globalAlpha = globalAlpha, dR.xb.imageSmoothingEnabled = !1, dR.xb.scale(fu, fu), dR.xb.drawImage(fr, Math.floor(c4 * (dR.dS / fu - fr.width)), Math.floor(bp * (dR.dT / fu - fr.height))), dR.xb.restore()
	}
	this.pE = 0, this.wj = 0, this.wk = 0, this.wl = 0, this.az = function() {
		(aGT = new Array(dR.a2y))[0] = {
			dt: [0, 5e3, 8e3, 1e4],
			n1: [220, 250, 255, 220],
			nb: [190, 220, 0, 0],
			fv: [170, 200, 0, 0]
		}, aGT[1] = {
			dt: [0, 4e3, 5e3, 6e3, 1e4],
			n1: [25, 0, 100, 0, 25],
			nb: [25, 0, 0, 0, 25],
			fv: [25, 0, 0, 0, 25]
		}, aGT[2] = {
			dt: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			n1: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			nb: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fv: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aGT[3] = {
			dt: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			n1: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			nb: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fv: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aGT[4] = {
			dt: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			n1: [10, 10, 20, 10, 10, 170, 212],
			nb: [20, 20, 60, 100, 100, 110, 170],
			fv: [70, 70, 160, 30, 30, 60, 120]
		}, aGT[5] = {
			dt: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			n1: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			nb: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fv: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aGT[6] = {
			dt: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			n1: [10, 10, 60, 255, 255, 200, 200],
			nb: [10, 10, 60, 255, 255, 200, 200],
			fv: [80, 80, 255, 255, 255, 200, 200]
		}, aGT[7] = {
			dt: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			n1: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			nb: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fv: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aGT[8] = {
			dt: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			n1: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			nb: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fv: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aGT[9] = {
			dt: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			n1: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			nb: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fv: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aGT[20] = {
			dt: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			n1: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			nb: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fv: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aGT[21] = {
			dt: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			n1: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			nb: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fv: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aET = function() {
		var aGd, a1, bN, dV, a5E = function() {
				var a5E;
				return dR.t6 = document.createElement("canvas"), dR.t6.width = dR.dS, dR.t6.height = dR.dT, dR.xb = dR.t6.getContext("2d", {
					alpha: !1
				}), a5E = dR.xb.getImageData(0, 0, dR.dS, dR.dT), dR.aE9 = a5E.data, a5E
			}(),
			dt = aGT[dR.qg].dt,
			n1 = aGT[dR.qg].n1,
			nb = aGT[dR.qg].nb,
			fv = aGT[dR.qg].fv,
			h2 = aER.aGX(),
			cs = dt.length - 2,
			aGY = new Array(1 + cs),
			aGZ = new Array(1 + cs),
			aGa = new Array(1 + cs),
			aGb = new Array(1 + cs);
		for (bN = cs; 0 <= bN; bN--) aGY[bN] = dt[bN + 1] - dt[bN], aGZ[bN] = n1[bN + 1] - n1[bN], aGa[bN] = nb[bN + 1] - nb[bN], aGb[bN] = fv[bN + 1] - fv[bN];
		for (a1 = dR.dS * dR.dT - 1; 0 <= a1; a1--)
			for (bN = cs; 0 <= bN; bN--)
				if (h2[a1] >= dt[bN]) {
					dV = h2[a1] - dt[bN], dR.aE9[4 * a1] = n1[bN] + mj(aGZ[bN] * dV, aGY[bN]), dR.aE9[4 * a1 + 1] = nb[bN] + mj(aGa[bN] * dV, aGY[bN]), dR.aE9[4 * a1 + 2] = fv[bN] + mj(aGb[bN] * dV, aGY[bN]), dR.aE9[4 * a1 + 3] = 255;
					break
				} dR.xb.putImageData(a5E, 0, 0), dR.aEZ(dR.qg) && bl.gT() && dR.aEZ(dR.qg) && (a5E = bl.gS("arena"), aGd = bl.gS("territorial.io"), aGe(a5E, 5, .5, .5, .1), aGe(aGd, 2, .5, .45, .1)), dR.a1B = !0, bL.cC = !0
	}, this.yr = function() {
		for (var cy, c4, bp, aGf, aGg, dX, wj = 0, dt = dR.dS, du = dR.dT, dV = dt * du * 4, aGh = xF, aGi = dR.aE9, a1 = dt - 1; 0 <= a1; a1--) aGh[(cy = a1 << 2) + 2] = aGh[dV - cy - 2] = 3;
		for (dV = 4 * dt, a1 = du - 1; 0 <= a1; a1--) aGh[(cy = a1 * dV) + 2] = aGh[cy + dV - 2] = 3;
		for (aGf = dt - 1, aGg = du - 1, bp = 1; bp < aGg; bp++)
			for (dV = bp * dt, c4 = 1; c4 < aGf; c4++) dX = 1 - (aGi[(cy = dV + c4 << 2) + 2] > aGi[cy + 1] && aGi[cy + 2] > aGi[cy]), aGh[cy + 2] = 6 - 5 * dX, wj += dX;
		this.pE = (dt - 2) * (du - 2), this.wl = 0, dR.aDG(dR.qg) && (dR.wl.aGj(), dR.wl.aGk(4, 5)), this.wj = q.pZ = wj - this.wl, this.wk = this.pE - this.wj - this.wl, this.wk && (dR.wl.aGk(6, 2), dR.wl.aGl())
	}
}

function aGm() {
	this.j0 = 0, this.bs = function() {
		kF.bs(), uW.bs(), bD.bs(), hW.b0.bs(), aGn.aGo(), yh.th.bs(), bL.cC && (bL.cC = !1, jz.cR())
	}
}

function aGp() {
	this.aGq = new oQ, this.az = function() {
		this.aGq.resize()
	}
}

function aGr() {
	var aGt, aGu, aGv, aGw, aGs = !1;

	function aGx() {
		aGs = !0, aGt = -1, aGu = new Array(4);
		for (var a1 = 3; 0 <= a1; a1--) aGu[a1] = !1;
		var a9D = Math.floor(1 + .02 * bD.min);
		aGv = new Array(4), (aGw = new Array(4))[1] = aGw[3] = aGv[0] = aGv[2] = 0, aGw[0] = aGv[3] = -a9D, aGv[1] = aGw[2] = a9D
	}

	function aGz() {
		if (-1 !== aGt)
			if (0 !== q.cf && cM.bz()) {
				for (var aH1 = !1, a1 = 3; 0 <= a1; a1--) aGu[a1] && (aH1 = !0, fG += aGv[a1], fI += aGw[a1], ez.cF(aGv[a1], aGw[a1]), cl.aH4());
				aH1 ? bL.cC = !0 : aH3.aH2()
			} else aH3.aH2()
	}
	this.aGy = function(a9) {
		0 !== q.cf && cM.bz() && (aGs || aGx(), aGu[a9] = !0, -1 === aGt) && (aGt = setInterval(aGz, 20), aGz())
	}, this.aH0 = function(a9) {
		if (0 !== q.cf && (aGs || aGx(), aGu[a9] = !1, -1 !== aGt)) {
			for (var aH1 = !1, a1 = 3; 0 <= a1; a1--) aH1 = aH1 || aGu[a1];
			aH1 || this.aH2()
		}
	}, this.aH2 = function() {
		if (aGs && -1 !== aGt) {
			for (var a1 = 3; 0 <= a1; a1--) aGu[a1] = !1;
			clearInterval(aGt), aGt = -1
		}
	}
}

function aDi() {
	var aH5, aH6 = 8,
		aH7 = null;

	function aHD(fm, oN, a9) {
		oN *= 4;
		fm[oN] = 255, fm[1 + oN] = 255, fm[2 + oN] = a9, fm[3 + oN] = 255
	}

	function aHF(fF, aE5) {
		var c4, bp, ex, oN, aHG, aHH, fk = aH6,
			a5E = r.bF.getImageData(fF, fk, fk),
			fm = a5E.data,
			jP = (fk >> 1) - .5,
			aHJ = r.s.rs(aE5, .5);
		for (r.s.rt(aE5, aHJ, 300) || r.s.rv(aE5, 100), bp = 0; bp < fk; bp++)
			for (c4 = 0; c4 < fk; c4++) aHH = (fk - 1.5) * (fk - 1.5) / 4, fm[oN = 4 * (bp * fk + c4)] = (aHG = (ex = (ex = c4 - jP) * ex + (ex = bp - jP) * ex) <= (fk - 4.5) * (fk - 4.5) / 4 ? aHJ : aE5)[0], fm[1 + oN] = aHG[1], fm[2 + oN] = aHG[2],
				fm[3 + oN] = aHH < ex ? 0 : 255;
		fF.putImageData(a5E, 0, 0)
	}
	this.az = function() {
		var a9, fk, fr, fF, a5E, fm;
		(aH5 = aH5 || new Array(q.aA)).fill(null), a9 = 255, fk = aH6 + 4, fr = r.bF.sq(fk, fk), fF = r.bF.getContext(fr, !0), a5E = r.bF.getImageData(fF, fk, fk), aHD(fm = a5E.data, fk + 1, a9), aHD(fm, fk + 2, a9), aHD(fm, 2 * fk + 1, a9), aHD(
				fm, 2 * fk - 3, a9), aHD(fm, 2 * fk - 2, a9), aHD(fm, 3 * fk - 2, a9), aHD(fm, fk * (fk - 3) + 1, a9), aHD(fm, fk * (fk - 2) + 1, a9), aHD(fm, fk * (fk - 2) + 2, a9), aHD(fm, fk * (fk - 2) - 2, a9), aHD(fm, fk * (fk - 1) - 3, a9),
			aHD(fm, fk * (fk - 1) - 2, a9), fF.putImageData(a5E, 0, 0), aH7 = fr,
			function() {
				if (q.bf)
					for (var fr = new Array(aC.d2.length), cs = q.aA, aHA = aH5, bh = aC.bh, a1 = 0; a1 < cs; a1++) {
						var aHB = bh[a1];
						fr[aHB] || (fr[aHB] = function(aHB) {
							var fr = r.bF.sq(aH6, aH6),
								fF = r.bF.getContext(fr, !0),
								dC = d7.dH;
							return dC.set(aC.a3R[aHB]), aHF(fF, dC), fr
						}(aHB)), aHA[a1] = fr[aHB]
					}
			}()
	}, this.cR = function() {
		var a1, player, aHK, a98, dn, a3r, aHM, aHO, aHP, rP = il.b0.rP,
			rS = il.b0.rS,
			wH = il.b0.wH,
			aHQ = il.b0.aHQ,
			aHR = aH5,
			a4P = q.bS,
			cs = il.b0.rm,
			aHS = bD.dt,
			aHT = bD.du,
			aHU = dR.dS << 4,
			hE = fH,
			gF = hE / aH6,
			cU = fG / hE,
			cV = fI / hE,
			ex = (aHS + fG) / hE - cU,
			ey = (aHT + fI) / hE - cV,
			fF = cS;
		for (fF.imageSmoothingEnabled = hE < 9, r.bF.textAlign(fF, 1), r.bF.textBaseline(fF, 1), a1 = 0; a1 < cs; a1++) player = rS[a1] >> 3, dn = wH[a1], aHK = .9 + .1 * Math.log10(dn), a98 = (a3r = rP[a1]) % aHU / 16 - aHK, a3r = aHT * (Math
			.floor(a3r / aHU) / 16 - aHK - cV) / ey, aHM = -2 * (aHP = hE * aHK) * (1 + (aHO = +(player === a4P)) / 8), aHO = aHO * aHP / 4, (aHP = aHS * (a98 - cU) / ex) < aHM || a3r < aHM || aHS + aHO < aHP || aHT + aHO < a3r || (a98 = 2 *
			aHK * gF, aHM = aHK * hE, null === (aHO = aHR[player]) && (aHR[player] = aHO = function(player) {
				var fr = r.bF.sq(aH6, aH6);
				return aHF(r.bF.getContext(fr, !0), eb.xi(player)), fr
			}(player)), player === a4P && (fF.setTransform(a98, 0, 0, a98, aHP - 2 * a98, a3r - 2 * a98), fF.drawImage(aH7, 0, 0)), fF.setTransform(a98, 0, 0, a98, aHP, a3r), fF.drawImage(aHO, 0, 0), (aHK = Math.floor(function(dn) {
				if (dn < 1e3) return .42;
				if (dn < 1e4) return .34;
				if (dn < 1e6) return .26;
				if (dn < 1e8) return .19;
				return .15
			}(dn) * aHM)) < 6) || (fF.setTransform(1, 0, 0, 1, 0, 0), fF.fillStyle = aHQ[a1] ? bO.lS : bO.bX, fF.font = r.bF.bG(1, aHK), fF.fillText(r.aI.eh(dn), aHP + aHM, a3r + aHM + .1 * aHK));
		fF.imageSmoothingEnabled = !1, fF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aF7() {
	var aHX = 0;

	function aHe(ga, id) {
		console.log(ga), aHX || (id ? 1 === id ? g5.vU = L(299) + ": " + ga : n.aB(4, 3, new uT(L(300), ga, 1)) : n.aB(4, 3, new uT("⚠️ " + L(298), ga, 1)))
	}
	this.i5 = function(ga, aHY) {
		var a3r, vu;
		return aHX = aHY, i3.oi.aHZ(i3.oi.aHa(i3.oi.aHb(ga))), g5.vU = "", !! function() {
			if (hx.size < 10) aHe("File Too Small");
			else {
				var aHh = hx.i2(12),
					vs = (aHh !== kH.rVersion && (vs = "Incompatible Version   Required: " + kH.rVersion, aHe(vs = (vs += "   Found: " + aHh) + ("   Compatible at " + hW.b0.aHi() + "/" + aHh), 1)), hx.i2(12)),
					aHj = hx.i2(31);
				if (aHj !== hx.size) aHe("Size Error: Stated Size " + aHj + " Actual Size " + hx.size);
				else if (function(du, aHh) {
						for (var cy = hx.mH, cs = hx.size, aBY = aHh, a1 = 3; a1 < cs; a1++) aBY = aBY + cy[a1] & 4095;
						return aBY === du || (aHe("Hash Error: " + aBY + " " + du + " " + cs), !1)
					}(vs, aHh)) return 1
			}
			return
		}() && (a3r = hx, (vu = q.data = new n9).mapType = a3r.i2(2), vu.mapProceduralIndex = a3r.i2(8), vu.mapRealisticIndex = a3r.i2(8), vu.mapSeed = a3r.i2(14), vu.mapName = a3r.aHl(5), 2 === vu.mapType && a3r.aHm(), vu.passableWater = a3r
			.i2(1), vu.passableMountains = a3r.i2(1), vu.playerCount = a3r.i2(10), vu.humanCount = a3r.i2(10), vu.selectedPlayer = a3r.i2(9), vu.gameMode = a3r.i2(1), vu.playerMode = a3r.i2(2), vu.battleRoyaleMode = a3r.i2(2), vu
			.numberTeams = a3r.i2(4), vu.isZombieMode = a3r.i2(1), vu.isContest = a3r.i2(1), vu.isReplay = a3r.i2(1), vu.elo = a3r.aHn(2, 14, 2), vu.colorsType = a3r.i2(1), vu.colorsPersonalized = a3r.i2(1), vu.colorsData = a3r.aHn(10, 18,
				512), vu.selectableColor = a3r.i2(1), vu.teamPlayerCount = a3r.aHn(4, 10, 9), vu.neutralBots = a3r.i2(1), vu.botDifficultyType = a3r.i2(2), vu.botDifficultyValue = a3r.i2(4), vu.botDifficultyTeam = a3r.aHn(4, 4, 9), vu
			.botDifficultyData = a3r.aHn(10, 4, 512), vu.spawningType = a3r.i2(2), vu.spawningSeed = a3r.i2(14), vu.spawningData = a3r.aHn(11, 12, 1024), vu.selectableSpawn = a3r.i2(1), vu.playerNamesType = a3r.i2(2), vu.playerNamesData = a3r
			.aHo(10, 5, 512), vu.selectableName = a3r.i2(1), vu.aIncomeType = a3r.i2(2), vu.aIncomeValue = a3r.i2(8), vu.aIncomeData = a3r.aHn(10, 8, 512), vu.tIncomeType = a3r.i2(2), vu.tIncomeValue = a3r.i2(8), vu.tIncomeData = a3r.aHn(10,
				8, 512), vu.iIncomeType = a3r.i2(2), vu.iIncomeValue = a3r.i2(8), vu.iIncomeData = a3r.aHn(10, 8, 512), vu.sResourcesType = a3r.i2(2), vu.sResourcesValue = a3r.i2(11), vu.sResourcesData = a3r.aHn(10, 11, 512), vu.nA = a3r.aHn(
				10, 30, 0), !! function() {
				var a3r = hx,
					ek = a3r.i2(5),
					aHp = a3r.i2(30),
					aHq = a3r.i2(30);
				if (aHp + aHq > 8 * a3r.size) return void aHe("Corrupted File");
				return function(cs) {
						var aHt = new Uint8Array(cs),
							aHu = new Uint16Array(cs),
							aHv = new Uint32Array(cs),
							aHw = new Uint32Array(cs);
						jR.jS.jT = aHt, jR.jS.jU = aHu, jR.jS.jV = aHv, jR.jS.jW = aHw;
						for (var a1 = 0; a1 < cs; a1++) {
							var id = hx.i2(4);
							aHt[a1] = id, aHu[a1] = hx.i2(9), 0 === id ? aHv[a1] = hx.i2(22) : 1 === id ? (aHv[a1] = hx.i2(10), aHw[a1] = hx.i2(10)) : 2 === id ? (aHv[a1] = hx.i2(10), aHw[a1] = hx.i2(9)) : 3 === id ? (aHv[a1] = hx.i2(10),
								aHw[a1] = hx.i2(27)) : 4 === id ? (aHv[a1] = hx.i2(10), aHw[a1] = hx.i2(16)) : 5 === id || 6 === id ? aHv[a1] = hx.i2(10) : 7 === id ? aHv[a1] = hx.i2(1) : 10 === id && (aHv[a1] = hx.i2(20), aHw[a1] = hx
								.i2(22))
						}
					}(aHp),
					function(cs, ek) {
						var jY = new Uint8Array(cs),
							ja = new Array(cs);
						ja.fill(0), jR.jS.jY = jY, jR.jS.ja = ja;
						for (var a1 = 0; a1 < cs; a1++) jY[a1] = hx.i2(1), ja[a1] = hx.i2(ek)
					}(aHq, ek), 1
			}()) && (hx.a9 < 8 * hx.size - 13 || hx.a9 > 8 * hx.size ? (aHe("Out Of Bounds Error: " + hx.a9 + " " + 8 * hx.size), !1) : (jR.jS.zD = ga, 2 !== q.data.mapType || (aHe("Load base64 image...", 2), aHY)))
	}, this.aHf = function(lx, aHg) {
		var fr = document.createElement("canvas"),
			fF = fr.getContext("2d");
		if (fr.width = lx.width, fr.height = lx.height, fF.drawImage(lx, 0, 0), q.data.canvas = fr, aHX || aHg) return q.cf ? void 0 : (q.data.mapType = 2, n.ta(), void n.aB(19));
		jR.a2J()
	}
}

function aHx() {
	"function" != typeof Math.log2 && (Math.log2 = function(c4) {
		return Math.log(c4) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(c4) {
		return Math.log(c4) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(c4) {
		return 0 < c4 ? 1 : c4 < 0 ? -1 : 0
	})
}

function aHy() {
	var aHz = 0,
		aI1 = new Uint16Array(64);

	function aI4(aHB) {
		aHz -= 2;
		for (var a1 = aHB; a1 < aHz; a1 += 2) aI1[a1] = aI1[a1 + 2], aI1[a1 + 1] = aI1[a1 + 3]
	}
	this.az = function() {
		aHz = 0
	}, this.bs = function() {
		var a1, xg, aI3;
		if (0 !== aHz)
			if (0 === b7.c0[q.bS]) aHz = 0;
			else if (0 === yB.yC(q.bS)) aHz = 0;
		else
			for (a1 = aHz - 2; 0 <= a1; a1 -= 2)(xg = aI1[a1]) < q.aA && 0 === b7.c0[xg] ? aI4(a1) : (aI3 = aI1[a1 + 1], (q.aA <= xg && a4Q.aI5(q.bS) || xg < q.aA && a4Q.aI6(q.bS, xg)) && (jd.pJ.y7(aI3, xg), aI4(a1)))
	}, this.aI7 = function(xg, aI3) {
		! function(xg, aI3) {
			for (var a1 = 0; a1 < aHz; a1 += 2)
				if (aI1[a1] === xg) return aI1[a1 + 1] = Math.min(aI1[a1 + 1] + aI3, 1023), 1;
			return
		}(xg, aI3) && 64 !== aHz && (aI1[aHz] = xg, aI1[aHz + 1] = aI3, aHz += 2)
	}
}

function aI9() {
	for (var aN = document.createElement("canvas"), aN = (aN.width = 24, aN.height = 24, aN.getContext("2d", {
			alpha: !1
		})), gM = (aN.fillStyle = "rgb(0,0,0)", aN.fillRect(0, 0, 24, 24), aN.font = "22px system-ui", aN.textBaseline = "middle", aN.textAlign = "center", aN.fillStyle = "rgb(255,255,255)", aN.fillText("Q", 12, 12), aN.getImageData(0, 0, 24, 24)
			.data), cs = gM.length, jP = 0, a1 = 0; a1 < cs; a1 += 4) jP += gM[a1];
	return 16383 & jP
}

function aFE() {
	this.cR = function() {
		if (0 !== yy.b0.aFF && (cS.globalAlpha = Math.min(yy.b0.aFF / 580, 1), cS.drawImage(yy.b0.aIC, 1 + cl.q6(), 1 + cl.pH()), cS.globalAlpha = 1, q.cJ)) {
			for (var cU = fG / fH, cV = fI / fH, cW = (bD.dt + fG) / fH, cX = (bD.du + fI) / fH, ba = yy.b0.aID * fH, aIE = yy.b0.aIE, a1 = q.bq - 1; 0 <= a1; a1--) ! function(a1, ba, cU, cV, cW, cX, aIE) {
				var highlight;
				0 === b7.c0[a1] || 0 === b7.br[a1] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a1]) && (ba *= 2), cW = bD.dt * ((b7.el[a1] + b7.eo[a1] + 1) / 2 - cU) / (cW - cU) - .5 * ba, cU = bD.du * ((b7
					.em[a1] + b7.ep[a1] + 1) / 2 - cV) / (cX - cV) - .5 * ba, bD.dt < cW) || cU > bD.du || cW < -ba || cU < -ba || (highlight ? cS.setTransform(2 * fH, 0, 0, 2 * fH, cW, cU) : cS.setTransform(fH, 0, 0, fH, cW, cU), cS
					.drawImage(aIE[q.bf ? aC.wD[a1] : 1], 0, 0))
			}(a1, ba, cU, cV, cW, cX, aIE);
			cS.setTransform(fH, 0, 0, fH, 0, 0)
		}
	}
}

function aG(aIG, aIH, aII, aIJ) {
	var a2C = document.createElement("textarea"),
		aIK = (this.cb = a2C, !0);

	function aIL() {
		a2C.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aIH && r.bF.kB(a2C, 5)
		}, this.aH = function(h1) {
			a2C.value = h1
		}, this.u = function() {
			return a2C.value
		}, this.a2D = function() {
			a2C.select()
		}, this.clear = function() {
			a2C.value = ""
		}, this.a2E = function() {
			aIK && navigator.clipboard ? (a2C.select(), navigator.clipboard.writeText(a2C.value).catch(function() {
				aIK = !1, aIL()
			})) : aIL()
		}, a2C.setAttribute("id", "textArea" + n.b0.a9Z++), a2C.setAttribute("autocomplete", "off"), aIG && a2C.setAttribute("placeholder", aIG), a2C.style.top = "0", a2C.style.left = "0", a2C.style.width = "100%", a2C.style.height = "100%", a2C
		.style.userSelect = "none", a2C.style.outline = "none", a2C.style.resize = "none", a2C.style.border = "none", a2C.style.color = bO.bX, a2C.style.backgroundColor = bO.a9a, aIJ ? (a2C.style.fontSize = "1em", a2C.rows = 6, a2C.style.padding =
			"0.25em") : (a2C.style.padding = "0.45em", a2C.style.fontSize = "1.2em"), aII && a2C.addEventListener("input", function(cb) {
			aII(cb)
		}), a2C.addEventListener("focus", function() {
			bD.a9b++
		}), a2C.addEventListener("blur", function() {
			bD.a9b--
		})
}

function aIM() {
	this.aIN = new aIO
}

function aIP() {
	var aI0 = 501,
		aIQ = (this.lF = new Uint32Array(aI0), this.lG = new Uint32Array(aI0), this.lN = new Uint16Array(aI0), this.l8 = 0, 1),
		aIR = 0;

	function aIS(self) {
		self.max.fill(0)
	}

	function aIY(self, a1) {
		self.max[0] = Math.max(self.lF[a1], self.max[0]), self.max[1] = Math.max(self.lG[a1], self.max[1]), self.max[2] = Math.max(self.lN[a1], self.max[2])
	}
	this.max = [0, 0, 0], this.lb = 0, this.dh = new Array(21), this.lO = null, this.gw = function() {
		this.lO = [L(301), L(302), L(303), L(304), L(305), L(306), L(307), L(308), L(110), L(111), L(309), L(310), L(311), L(312), "", L(313), L(314), L(315), L(108), L(316), L(317)]
	}, this.az = function() {
		this.l8 = 0, aIQ = 1, this.lb = 0, aIR = 0, aIS(this), this.dh.fill(0)
	}, this.aIT = function(player, aI3) {
		r.cz.a0c(player) && (this.dh[0] += aI3 + 1, this.dh[1]++, this.dh[12] += d7.dF[1])
	}, this.wc = function(player, a6V) {
		__fx.donationsTracker.logDonation(player, a6V, d7.dF[0], jK.aAB());
		player === q.bS && (g5.wc(d7.dF[0], d7.dF[1], a6V), this.dh[12] += d7.dF[1], this.dh[16] += d7.dF[0]), a6V === q.bS && (g5.wf(d7.dF[0], player), this.dh[10] += d7.dF[0])
	}, this.aIU = function(player) {
		r.cz.a0c(player) && (this.dh[2]++, this.dh[12] += d7.dF[1])
	}, this.aIV = function(player) {
		r.cz.a0c(player) && (this.dh[19]++, this.dh[12] += d7.dF[1])
	}, this.a4U = function(player) {
		r.cz.a0c(player) && this.dh[20]++
	}, this.a0e = function(player, hK, a9) {
		r.cz.a0c(player) && (this.dh[a9] += hK)
	}, this.bs = function() {
		var self;
		this.lb || 0 < aIR-- || ((self = this).lF[self.l8] = b7.br[q.bS], self.lG[self.l8] = b7.di[q.bS], self.lN[self.l8] = yl.aIX(q.bS), aIY(self, self.l8), self.l8++, self.l8 === aI0 && function(self) {
			aIS(self), aIY(self, 0), self.l8 = 1 + hA.iV(aI0, 2);
			for (var a1 = 1; a1 < self.l8; a1++) self.lF[a1] = self.lF[2 * a1], self.lG[a1] = self.lG[2 * a1], self.lN[a1] = self.lN[2 * a1], aIY(self, a1);
			aIQ *= 2
		}(self), aIR = aIQ - 1, mb.lA(), 0 === b7.c0[q.bS] && (self.lb = bL.bM()))
	}
}

function yc() {
	this.az = function() {
		8 === q.eU && g5.wO()
	}, this.aIa = function(aIb) {
		var elo = q.data.elo,
			os = (elo[aIb] - elo[1 - aIb]) / 10,
			os = 8 / (1 + Math.pow(2, os / 32)),
			os = Math.floor(10 * os + .5),
			aId = elo[aIb] + os,
			wT = this.wQ(aId),
			elo = this.wQ(elo[1 - aIb] - os),
			os = (0 === aIb ? g5.wS(wT, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : g5.wS(elo, wT, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aId * hA.sqrt(aId) >> 8),
			elo = ((1 + q.va) * os / 100).toFixed(2);
		aIb === q.bS ? g5.pa(640, L(318, [elo]), 40, 0, bO.bX, bO.lC, -1, !1) : g5.pa(640, L(319, [b7.b8[aIb], elo]), 40, 0, bO.bX, bO.lC, -1, !1)
	}, this.wQ = function(elo) {
		return 16e3 === (elo = hA.hB(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function aDq() {
	var aIg;
	this.az = function() {
		if (!aIg) {
			aIg = new Array(aC.a3Q.length);
			for (var a1 = 0; a1 < aIg.length; a1++) aIg[a1] = yy.b0.aIi(20, aC.a3Q[a1])
		}
	}, this.cR = function() {
		var aIj = fH;
		if (!(5 <= aIj)) {
			var aHS = bD.dt,
				aHT = bD.du,
				cU = fG / aIj,
				cV = fI / aIj,
				cW = (aHS + fG) / aIj,
				cX = (aHT + fI) / aIj,
				ba = -20 * aIj,
				aIk = .5 * ba,
				aHU = dR.dS << 4,
				cs = il.b0.rm,
				rP = il.b0.rP,
				rS = il.b0.rS,
				bh = aC.bh,
				fr = aIg,
				fF = cS;
			3 < aIj && (fF.globalAlpha = .5 * (5 - aIj));
			for (var a1 = 0; a1 < cs; a1++) {
				var a3r = rP[a1],
					c4 = aHS * (a3r % aHU / 16 - cU) / (cW - cU) + aIk,
					a3r = aHT * (Math.floor(a3r / aHU) / 16 - cV) / (cX - cV) + aIk;
				aHS < c4 || aHT < a3r || c4 < ba || a3r < ba || (fF.setTransform(aIj, 0, 0, aIj, c4, a3r), c4 = fr[bh[rS[a1] >> 3]], fF.drawImage(c4, 0, 0))
			}
			fF.globalAlpha = 1, fF.setTransform(aIj, 0, 0, aIj, 0, 0)
		}
	}
}

function aIp() {
	function aIr() {
		8 === q.eU && 1 === q.cf && pc.pd.pf()
	}

	function aIq(player) {
		q.cJ ? (aIt.a0R(player), ct.aIu(), q.cK && q.jM.bs()) : aIv.zh(player)
	}
	this.aD6 = function(player) {
		g5.vX(player, player === q.bS ? 21 : 22), aIq(player), aIr()
	}, this.aIs = function(player) {
		1 === q.cf && 0 !== b7.c0[player] && 2 !== b7.bo[player] && aIq(player), q.wp--, q.yW--, g5.vX(player, 4), r.cz.ps(2) && jK.bI(!0), aIr()
	}
}

function aF5() {
	this.jT = null, this.jU = null, this.jV = null, this.jW = null, this.jY = null, this.ja = null, this.zD = "";
	var aIw = 0;
	this.az = function() {
		this.jT = [], this.jU = [], this.jV = [], this.jW = [], this.jY = [0], this.ja = [0], aIw = 0, this.zD = ""
	}, this.aIx = function(id, dV, dX, dZ) {
		q.cL || 2 === q.cf || (0 === this.jY[aIw] && (this.ja[aIw] ? (this.jY.push(1), this.ja.push(0), aIw++) : this.jY[aIw] = 1), this.jT.push(id), this.jU.push(dV), this.jV.push(void 0 === dX ? 0 : dX), this.jW.push(void 0 === dZ ? 0 : dZ),
			this.ja[aIw]++)
	}, this.bs = function() {
		0 === this.jY[aIw] ? this.ja[aIw]++ : (this.jY.push(0), this.ja.push(0), aIw++)
	}
}

function aIy() {
	var aIz = new Array(1),
		aJ0 = new Array(1),
		aJ1 = 20,
		aJ2 = 0,
		aJ3 = !1;

	function aJ5() {
		aJ1++, a4E.play()
	}
	this.az = function() {
		if (!window.document.documentMode) {
			for (var a1 = 0; 0 <= a1; a1--) ! function(a1, src) {
				aJ0[a1] = 0, aIz[a1] = document.createElement("audio"), aIz[a1].src = src, aIz[a1].setAttribute("preload", "auto"), aIz[a1].setAttribute("controls", "none"), aIz[a1].style.display = "none", aIz[a1].onpause = function() {
					aJ0[a1] = 1
				}, aIz[a1].oncanplaythrough = function() {
					aJ0[a1] = 0 === aJ0[a1] ? 1 : aJ0[a1]
				}, document.body.appendChild(aIz[a1])
			}(a1,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aJ3 = !0
		}
	}, this.ln = function() {
		if (aJ3) {
			aJ3 = !1;
			for (var a1 = 0; 0 <= a1; a1--) aIz[a1].onpause = null, aIz[a1].oncanplaythrough = null, n.removeChild(document.body, aIz[a1]), aIz[a1] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		a4E.play()
	}), this.play = function() {
		if (aJ3) {
			var bx = performance.now();
			if (aJ2 + 66 < bx)
				for (var a1 = 0; 0 <= a1; a1--)
					if (1 === aJ0[a1]) return aJ2 = bx, aJ0[a1] = 2, void aIz[a1].play();
			0 < aJ1 && (aJ1--, setTimeout(aJ5, 66))
		}
	}
}

function jC() {
	g5.bs(), ez.bs(), jK.aJ6(), hW.b0.bs()
}

function jI() {
	z6.bs(), z2.bs(), ym.bs(), yl.bs(), z4.bs(), z1.bs(), yt.bs(), il.b0.bs(), ct.aJ7(), mX.bs(), yi.bs(), y5.bs(), ez.bs(), ez.g1(), jK.bs(), yy.bs(), yP.bs(), yz.bs(), z8.aFz(), g5.bs(), z5.bs(), mS.bs(), gv.bs(), dg.bs(), d5.bs(), hW.b0.bs(), hW
		.kS.bs(), n.bs(), yh.th.bs(), jR.bs(), bL.bs()
}

function j5() {
	cM.bs(), z0.bs(), l9.bs(), zA.bs(), j1.bs(), z7.bs(), z8.bs(), aGn.aJ8()
}

function jO() {
	mX.bI(!1), yz.bI(), jK.bI(!1), yP.bI(), mS.bI(), gv.bI(), ez.bI(!1), d5.lA()
}

function jN() {
	ez.bI(!1) && (bL.cC = !0), hW.b0.bs()
}

function aJ9() {
	var canvas, b9, aJA, font, oS = 0,
		aJB = !1,
		aJC = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aJD = 5;

	function lB() {
		if (aJB) {
			var a1, cs = aJC.length,
				kt = Math.floor(.5 * aJA.du),
				du = cs * kt,
				c4 = Math.floor(Math.floor(aJA.c4) + .3 * aJA.dt - .5),
				bp = Math.floor(Math.floor(aJA.bp) - du),
				dt = Math.floor(.4 * aJA.dt + 2.5);
			for (cS.fillStyle = bO.bR, cS.fillRect(c4, bp, dt, du), cS.fillStyle = bO.bU, cS.fillRect(c4, bp + aJD * kt, dt, kt), cS.fillStyle = bO.bX, cS.fillRect(c4, bp, 2, du), cS.fillRect(c4, bp, dt, 2), cS.fillRect(c4 + dt - 2, bp, 2, du), a1 =
				1; a1 < cs; a1++) cS.fillRect(c4, bp + a1 * kt, dt, 2);
			for (cS.fillStyle = bO.bX, r.bF.textAlign(cS, 1), r.bF.textBaseline(cS, 1), cS.font = r.bF.bG(0, .6 * kt), c4 += .5 * dt, a1 = 0; a1 < cs; a1++) cS.fillText(aJT(a1), c4, bp + (a1 + .6) * kt)
		}
		cS.drawImage(canvas, Math.floor(aJA.c4), Math.floor(aJA.bp))
	}

	function lA(aJM) {
		var c4, cU, cV, kt;
		b9.clearRect(0, 0, Math.floor(aJA.dt), Math.floor(aJA.du)), b9.fillStyle = bO.bR, b9.fillRect(0, 0, Math.floor(aJA.dt), Math.floor(aJA.du)), q.cP && (b9.fillStyle = bO.bU, b9.fillRect(0, 0, Math.floor(.3 * aJA.dt), Math.floor(aJA.du))), b9
			.fillStyle = bO.bX, b9.fillText("Hide UI", .15 * aJA.dt, .5 * aJA.du), b9.fillRect(Math.floor(.3 * aJA.dt - .5), 0, 2, Math.floor(aJA.du)), c4 = .5 * aJA.dt, b9.fillText("Replay Speed", c4, .31 * aJA.du), b9.fillText(aJT(aJD), c4, .69 *
				aJA.du), b9.fillRect(Math.floor(.7 * aJA.dt - .5), 0, 2, Math.floor(aJA.du)), aJM.jB ? (c4 = Math.floor(.02 * aJA.dt), aJM = Math.floor(.025 * aJA.dt), cU = Math.floor(.85 * aJA.dt - c4 - .5 * aJM), cV = Math.floor(.25 * aJA.du), kt =
				Math.floor(aJA.du) - 2 * cV, b9.fillRect(cU, cV, c4, kt), b9.fillRect(cU + c4 + aJM, cV, c4, kt)) : function() {
				var dt = Math.floor(.46 * aJA.du),
					du = Math.floor(.23 * aJA.du),
					c4 = Math.floor(.85 * aJA.dt - .5 * dt + dt / 12),
					bp = Math.floor(.5 * aJA.du - du);
				b9.beginPath(), b9.moveTo(c4, bp), b9.lineTo(c4 + dt, bp + du), b9.lineTo(c4, bp + (du << 1)), b9.fill()
			}(), b9.fillRect(0, 0, Math.floor(aJA.dt), 2), b9.fillRect(0, 0, 2, Math.floor(aJA.du)), b9.fillRect(0, Math.floor(aJA.du) - 2, Math.floor(aJA.dt), 2), b9.fillRect(Math.floor(aJA.dt - 2), 0, 2, Math.floor(aJA.du))
	}

	function aJT(a1) {
		return 5 === a1 ? "Normal" : "" + aJC[a1]
	}
	this.jB = !1, this.az = function() {
		q.cL && (aJD = 5, this.jB = !1, aJB = !1, aJA = new dp([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.j2 = function() {
		return aJC[aJD]
	}, this.pH = function() {
		return aJA.bp
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.jB,
		fxGetSpeedIndex: () => aJD,
		fxSetSpeedIndex: index => {
			aJD = index, this.resize()
		},
		fxGetPanelTop: () => aJA && aJA.bp
	}, this.pm = function(aJE) {
		return !!q.cL && aJA.c4 + aJA.dt > bD.dt - aJE - bY.gap
	}, this.resize = function() {
		q.cL && (aJA.resize(), aJA.bp -= (pp.pq() - 1) * bY.gap, font = r.bF.bG(0, .3 * aJA.du), (canvas = document.createElement("canvas")).width = Math.floor(aJA.dt), canvas.height = Math.floor(aJA.du), (b9 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, r.bF.textAlign(b9, 1), r.bF.textBaseline(b9, 1), lA(this))
	}, this.mV = function(aJF) {
		0 === q.cf || n.l2() || aJF !== q.cP && (q.cP = aJF, d5.resize(), bL.cC = !0, q.cL) && (oS = bL.c8 + 2e3, lA(this))
	}, this.c3 = function(c4, bp) {
		if (!q.cL) return !1;
		if (c4 < aJA.c4 || bp < aJA.bp || c4 > aJA.c4 + aJA.dt) return aJB && function(aJM, c4, bp) {
			var cs = aJC.length,
				kt = Math.floor(.5 * aJA.du),
				du = cs * kt,
				cU = Math.floor(Math.floor(aJA.c4) + .3 * aJA.dt - .5),
				du = Math.floor(Math.floor(aJA.bp) - du),
				dt = Math.floor(.4 * aJA.dt + 2.5);
			return aJB = !1, bL.cC = !0, c4 < cU || cU + dt < c4 || bp < du || (aJD = cB(0, Math.floor((bp - du) / kt), cs - 1), lA(aJM)), !0
		}(this, c4, bp);
		if ((c4 -= aJA.c4) < .3 * aJA.dt) aJB = !1, this.mV(!q.cP);
		else {
			if (c4 < .7 * aJA.dt) return aJB = !aJB, bL.cC = !0;
			this.jc(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.jc(!0), this.jc = function(aJH) {
		2 === q.cf ? (this.mV(!1), n.aB(3)) : (aJB = !1, this.jB = !this.jB, this.jB ? (j9.jA && j9.l7(), b2.b3.setState(1)) : aJH || j9.mW(), bL.cC = !0, lA(this))
	}, this.aJI = function() {
		this.jB = !1, j9.mW(), bL.cC = !0, lA(this)
	}, this.aJJ = function(c4, bp) {
		return !!q.cP && (0 <= j9.c3(c4, bp) || (q.cL ? ((bL.c8 > oS || !this.c3(c4, bp)) && cl.c3(c4, bp), bL.cC = !0, oS = bL.c8 + 2e3) : cl.c3(c4, bp)), !0)
	}, this.bs = function() {
		q.cL && q.cP && bL.c8 > oS - 1e3 && bL.c8 < oS && (bL.cC = !0)
	}, this.aJK = function() {
		q.cL && (this.jB = !1, bL.cC = !0, lA(this))
	}, this.cR = function() {
		if (q.cL) {
			if (q.cP) {
				if (bL.c8 > oS) return;
				if (oS - 1e3 < bL.c8) return cS.globalAlpha = cB(0, (1e3 - (bL.c8 - (oS - 1e3))) / 1e3, 1), lB(), void(cS.globalAlpha = 1)
			}
			lB()
		}
	}
}

function aJU() {
	var a5W = 0,
		aJV = 0,
		aJW = 0,
		aJX = null,
		aJY = null;

	function aJb(vu, aJc, aJd) {
		var ga = vu.username;
		return (ga += "   " + uN.nr.aJe(vu.a1b, vu.bn, vu.a8I)) + function(vu) {
			vu = vu.a5o;
			if (vu < 1e3) return "   Gold: " + vu;
			if ((vu %= 1024) < 1e3) return "   Gold: " + vu + "k";
			return "   Gold: " + (vu - 999) + "M"
		}(vu) + ("   IP: " + oh.oi.eh(vu.a8J, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJd ? aJV : aJa(vu, aJc)])
	}

	function aJa(vu, aJc) {
		return aJV = aJc || uN.zf.a1r(vu.hp) ? 1 : 0
	}
	this.aJZ = 0, this.a9O = function() {
		!a5W || aJV === aJa(aJY) && aJW === aJY.a5o || (aJW = aJY.a5o, aJX.show(-1, -1, aJb(aJY, 0, 1), 1, 1, aJY.color))
	}, this.a1k = function(cb, vu, aJc) {
		var aJA = cb.getBoundingClientRect();
		this.show(aJA.left, aJA.top, vu, 0, aJc), cb.addEventListener("mouseleave", function remove() {
			cb.removeEventListener("mouseleave", remove), uN.a1j && uN.a1j.aL(1)
		}), this.aJZ = aJc
	}, this.show = function(c4, bp, vu, a8u, aJc) {
		aJX = aJX || new a8q, aJW = (aJY = vu).a5o, aJX.show(c4, bp, aJb(vu, aJc), a8u, 0, aJY.color), a5W = 1
	}, this.aL = function(a8z) {
		this.aJZ = 0, aJX && aJX.aL(a8z) && (a5W = 0, aJY = null)
	}
}

function tg() {
	var aJ2 = 12e3;
	this.show = function(zC) {
		return !zC && !yh.tl() && (0 === b2.id ? yh.th.show() : !(bL.c8 < aJ2) && (zC = 1 === b2.id ? 72e4 : 108e4, aJ2 = bL.c8 + zC, 2 === kH.qC) && b2.b3.aJg(Math.floor(zC)))
	}
}

function kV() {
	this.aJh = function(uK, aJi) {
		hy.wx(11), hy.wy(1, 0), hy.wy(6, 4), hy.wy(1, aJi ? 1 : 0), hy.wy(3, 0 === q.cf ? uN.uO ? 6 : 0 : q.cL ? 1 : q.cK ? 7 : q.eU < 7 ? 2 : 8 === q.eU ? 4 : 9 === q.eU ? 5 : 3), hW.b0.send(uK, hy.mH)
	}, this.aCd = function() {
		hy.wx(58), hy.wy(1, 0), hy.wy(6, 5), hy.wy(8, hW.b0.uP), hy.wy(10, aGn.zs), hy.wy(9, aGn.aJj), hy.wy(10, kH.qP), hy.wy(14, kH.qD), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJk = function(oN) {
		hy.wx(27), hy.wy(1, 1), hy.wy(4, 0), hy.wy(22, oN), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJl = function(aI3, xg) {
		hy.wx(25), hy.wy(1, 1), hy.wy(4, 1), hy.wy(10, aI3), hy.wy(10, xg), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJm = function(aI3, a6V) {
		hy.wx(24), hy.wy(1, 1), hy.wy(4, 2), hy.wy(10, aI3), hy.wy(9, a6V), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJn = function(aI3, aJo) {
		hy.wx(42), hy.wy(1, 1), hy.wy(4, 3), hy.wy(10, aI3), hy.wy(27, aJo), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJp = function(aI3, rF) {
		hy.wx(31), hy.wy(1, 1), hy.wy(4, 4), hy.wy(10, aI3), hy.wy(16, rF), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJq = function(xg) {
		hy.wx(15), hy.wy(1, 1), hy.wy(4, 5), hy.wy(10, xg), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJr = function(a9) {
		hy.wx(15), hy.wy(1, 1), hy.wy(4, 6), hy.wy(10, a9), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJs = function(aJt) {
		hy.wx(6), hy.wy(1, 1), hy.wy(4, 7), hy.wy(1, aJt), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJu = function() {
		hy.wx(5), hy.wy(1, 1), hy.wy(4, 8), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJv = function(aI3, oN, xg) {
		hy.wx(47), hy.wy(1, 1), hy.wy(4, 10), hy.wy(10, aI3), hy.wy(10, xg), hy.wy(22, oN), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJw = function(aJx, aJy) {
		hy.wx(24), hy.wy(1, 1), hy.wy(4, 15), hy.wy(9, aJy), hy.wy(10, aJx), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aJz = function(kf) {
		hy.wx(14), hy.wy(1, 1), hy.wy(4, 14), hy.wy(9, kf), hW.b0.send(hW.b0.uY, hy.mH)
	}, this.aK0 = function(aK1, target) {
		var a1, cs = aK1.length;
		for (hy.wx(14 + 9 * cs), hy.wy(1, 1), hy.wy(4, 13), hy.wy(9, target), a1 = 0; a1 < cs; a1++) hy.wy(9, aK1[a1]);
		hW.b0.send(hW.b0.uY, hy.mH)
	}
}

function aEy() {
	var aK2, aK4 = new Uint16Array(8);

	function aKA(size, player) {
		for (var a1 = b7.a0S[player].length - 1; size <= a1; a1--) eb.aAb(b7.a0S[player][a1], player)
	}
	this.az = function() {
		aK2 = 0
	}, this.aK5 = function(player, aK6) {
		return d7.dL[1] = b7.a0S[player].length, d7.dL[0] === q.aA ? yt.aEx.aK7(player) : this.aK8(player, d7.dL[0]), (0 !== d7.dL[1] || 0 !== b7.a0S[player].length) && !(!aK6 && d7.dL[1] === b7.a0S[player].length || (d7.dL[0] === q.aA ? b7.uo[
			player]++ : b7.up[player]++, 0))
	}, this.aK9 = function(player) {
		aKA(d7.dL[1], player), yB.qi(player, d7.dF[0], d7.dL[0]), z1.a4h(player, !1)
	}, this.aKB = function(player, xg, cs, dn) {
		var aKC = hA.iV(12 * b7.di[player], 1024);
		dn -= dn >= hA.iV(b7.di[player], 2) ? aKC : 0, aKA(cs, player), yB.qi(player, dn, xg), b7.di[player] -= dn + aKC, z1.a4h(player, !1)
	}, this.aK8 = function(player, xg) {
		for (var oL, aDQ = eb.aDQ, a1 = b7.a0Z[player].length - 1; 0 <= a1; a1--)
			if (eb.aAc(b7.a0Z[player][a1]))
				for (oL = 3; 0 <= oL; oL--)
					if (eb.a4a(b7.a0Z[player][a1] + aDQ[oL]) && eb.wB(b7.a0Z[player][a1] + aDQ[oL]) === xg) {
						b7.a0S[player].push(b7.a0Z[player][a1]);
						break
					}
	}, this.aK7 = function(player) {
		for (var aDQ = eb.aDQ, a1 = b7.a0Z[player].length - 1; 0 <= a1; a1--)
			if (eb.aAc(b7.a0Z[player][a1]))
				for (var oL = 3; 0 <= oL; oL--)
					if (eb.wA(b7.a0Z[player][a1] + aDQ[oL])) {
						b7.a0S[player].push(b7.a0Z[player][a1]);
						break
					}
	}, this.aKD = function(player, aKE) {
		var a1, bN, oL, aKF, cs = b7.a0Z[player].length,
			os = 256 <= cs ? 12 : 32 <= cs ? 6 : 1,
			gI = cs - 1 - r2.r3(os),
			aDQ = eb.aDQ;
		aK2 = 0;
		loop: for (a1 = gI; 0 <= a1; a1 -= os)
			for (oL = 3; 0 <= oL; oL--)
				if ((aKF = eb.wA(b7.a0Z[player][a1] + aDQ[oL]) ? q.aA : eb.wB(b7.a0Z[player][a1] + aDQ[oL])) === q.aA || eb.a4a(b7.a0Z[player][a1] + aDQ[oL]) && aKF !== player && (aKE || a4Q.a4R(player, aKF))) {
					for (bN = aK2 - 1; 0 <= bN; bN--)
						if (aK4[bN] === aKF) continue loop;
					if (aK4[aK2] = aKF, 8 <= ++aK2) return !0
				}
		return 0 < aK2
	}, this.aKG = function(player, aKE) {
		var a1, oL, aKF, aDQ = eb.aDQ;
		for (aK2 = 0, a1 = b7.a0Z[player].length - 1; 0 <= a1; a1--)
			for (oL = 3; 0 <= oL; oL--)
				if ((aKF = eb.wA(b7.a0Z[player][a1] + aDQ[oL]) ? q.aA : eb.wB(b7.a0Z[player][a1] + aDQ[oL])) === q.aA || eb.a4a(b7.a0Z[player][a1] + aDQ[oL]) && aKF !== player && (aKE || a4Q.a4R(player, aKF))) return aK4[aK2++] = aKF, !0;
		return !1
	}, this.aKH = function() {
		for (var fv, a1 = aK2 - 1; 0 <= a1; a1--)
			if (aK4[a1] === q.aA) {
				for (aK2--, fv = a1; fv < aK2; fv++) aK4[fv] = aK4[fv + 1];
				return !0
			} return !1
	}, this.aKI = function(player) {
		for (var fv, a1 = aK2 - 1; 0 <= a1; a1--)
			if (yB.a4f(player, aK4[a1]))
				for (aK2--, fv = a1; fv < aK2; fv++) aK4[fv] = aK4[fv + 1];
		return 0 === aK2
	}, this.aKJ = function() {
		for (var a1 = aK2 - 1; 0 <= a1; a1--)
			if (r.cz.fO(aK4[a1])) return !0;
		return !1
	}, this.aKK = function() {
		for (var a1 = aK2 - 1; 0 <= a1; a1--) r.cz.fO(aK4[a1]) || (aK4[a1] = aK4[--aK2]);
		return 0 < aK2
	}, this.aKL = function(player) {
		for (var fv, aKM = aK4[0], aKN = b7.di[aKM] + yB.aFq(aKM, player), a1 = aK2 - 1; 1 <= a1; a1--)(fv = b7.di[aK4[a1]] + yB.aFq(aK4[a1], player)) < aKN && (aKM = aK4[a1], aKN = fv);
		return aKM
	}, this.aKO = function(player) {
		var du, aKP = aK4[0];
		if (1 !== aK2)
			for (var aKQ = hA.iV(b7.eo[player] + b7.el[player], 2), aKR = hA.iV(b7.ep[player] + b7.em[player], 2), rh = mk(aKQ - hA.iV(b7.eo[aKP] + b7.el[aKP], 2)) + mk(aKR - hA.iV(b7.ep[aKP] + b7.em[aKP], 2)), a1 = aK2 - 1; 1 <= a1; a1--)(du =
				mk(aKQ - hA.iV(b7.eo[aK4[a1]] + b7.el[aK4[a1]], 2)) + mk(aKR - hA.iV(b7.ep[aK4[a1]] + b7.em[aK4[a1]], 2))) < rh && (rh = du, aKP = aK4[a1]);
		return aKP
	}, this.aKS = function() {
		for (var aKT = aK4, aKU = aKT[0], di = b7.di, aKV = di[aKU], a1 = aK2 - 1; 1 <= a1; a1--) {
			var cy = aKT[a1],
				fv = di[cy];
			aKV < fv && (aKU = cy, aKV = fv)
		}
		return aKU
	}, this.aKW = function() {
		return aK4[r2.r3(aK2)]
	}
}

function aKX(a6) {
	this.uK = -1, this.pow = -1;
	var aIJ = a6 || {},
		aKY = this,
		aKZ = null,
		aKa = null,
		aKb = null,
		aKc = null,
		aKd = null,
		aKe = [],
		aKf = 0,
		aKg = null,
		aKh = null,
		aKi = null,
		aKj = !1,
		aKk = null,
		aKn = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function aKo(aKp, vL, className) {
		aKp = document.createElement(aKp);
		return className && (aKp.className = className), vL && vL.appendChild(aKp), aKp
	}

	function aKq(h1, vL, action) {
		vL = aKo("button", vL);
		return vL.type = "button", vL.textContent = h1, vL.addEventListener("click", action), vL
	}

	function aKr(vL) {
		vL = aKo("canvas", vL);
		return vL.width = vL.height = 128, vL
	}

	function aKw(canvas, aKx) {
		for (var canvas = canvas.getContext("2d"), data = (aKh || (aKh = canvas.createImageData(128, 128), aKi = new Uint32Array(aKh.data.buffer)), aKx), aKt = aKi, aKu = 0, position = 0, color = 0; position < 16384; aKu += 6, color ^= 1) {
			for (var a9 = aKu >> 3, bz = position + ((data[a9] << 8 | data[1 + a9]) >> 10 - (7 & aKu) & 63), gf = color ? aKn : 4294967295, a1 = position; a1 < bz; a1++) aKt[a1] = gf;
			position = bz
		}
		canvas.putImageData(aKh, 0, 0)
	}

	function aKy() {
		if (aKZ) {
			aKZ.setAttribute("aria-busy", String(aKj)), aKd.disabled = aKj, aKc.disabled = aKj || !aKf;
			for (var a1 = 0; a1 < aKe.length; a1++) aKe[a1].disabled = aKj, aKe[a1].setAttribute("aria-pressed", String(Boolean(aKf & 1 << a1)))
		}
	}

	function aL0(event) {
		var aL1, nK;
		"Escape" === event.key && (event.preventDefault(), aKY.close()), "Tab" === event.key && aKZ && (aL1 = (nK = aKZ.querySelectorAll("button:not(:disabled)"))[0], nK = nK[nK.length - 1], event.shiftKey && document.activeElement === aL1 ? (event
			.preventDefault(), nK.focus()) : event.shiftKey || document.activeElement !== nK || (event.preventDefault(), aL1.focus()))
	}

	function aL3() {
		aKk = document.activeElement, (aKZ = aKo("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), aKZ.setAttribute("aria-modal", "true"), aKZ.setAttribute("aria-label", "Select all images matching the reference");
		aKo("style", aKZ).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var aL4 = aKo("div", aKZ, "captcha-reference-row");
		aKo("span", aL4, "captcha-reference-label").textContent = "Find All:", (aKb = aKr(aL4)).className = "captcha-reference", aKb.setAttribute("aria-label", "Reference image"), aKa = aKo("div", aKZ, "captcha-grid");
		for (var a1 = 0; a1 < 16; a1++) aKe.push(function(a9) {
			var button = aKq("", aKa, function() {
				aKj || (aKf ^= 1 << a9, aKy())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (a9 + 1)), button.setAttribute("aria-pressed", "false"), aKr(button).setAttribute("aria-hidden", "true"), button
		}(a1));
		var aL4 = aKo("div", aKZ, "captcha-actions"),
			aL7 = aKq("Close", aL4, function() {
				aKY.close()
			});
		aKd = aKq("Reload", aL4, aL8), aKc = aKq("Verify", aL4, aL9), aKZ.addEventListener("keydown", aL0), aKY.resize(), aKy(), aL7.focus()
	}

	function aL8() {
		aKj || (aKY.close(), hW.kY.aBa(0, 0, uj.uK, uj.pow))
	}

	function aL9() {
		var aBb, aBc;
		!aKj && aKf && (aBb = aKf, aBc = aKg, aKY.close(), hW.kY.aBa(aBb, aBc, uj.uK, uj.pow))
	}
	this.show = function(aLA, aBc, uK, pow) {
		this.uK = uK, this.pow = pow, aKg = aBc, aKZ || aL3(), aKw(aKb, aLA[0]);
		for (var aF = 0; aF < 16; aF++) aKw(aKe[aF].firstChild, aLA[aF + 1]);
		aKf = 0, aKj = !1, aKy(), "function" == typeof aIJ.aLB && aIJ.aLB()
	}, this.resize = function() {
		var size;
		aKZ && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), aKZ.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (aKZ) {
			for (var aLC = aKZ.querySelectorAll("canvas"), a1 = 0; a1 < aLC.length; a1++) aLC[a1].width = aLC[a1].height = 0;
			aKZ.remove(), aKZ = aKa = aKb = aKc = aKd = null, aKh = aKi = aKg = null, aKf = 0, aKj = !(aKe = []), aKk && document.body.contains(aKk) && aKk.focus(), aKk = null, "function" == typeof aIJ.aLD && aIJ.aLD()
		}
	}
}

function kX() {
	this.aCc = function(uK) {
		var username = b5.buffer.data[122].value.slice(0, 20),
			username = (hy.wx(24 + 16 * username.length + 18), hy.wy(1, 0), hy.wy(6, 1), hy.wy(10, kH.qP), hy.wy(2, b5.buffer.data[158].value), hW.kY.x2(username), r.color.aLE(b5.b0.aLF()));
		hy.wy(6, username[0]), hy.wy(6, username[1]), hy.wy(6, username[2]), hW.b0.uP = uK, hW.b0.send(uK, hy.mH)
	}, this.aLG = function(aLH, gd) {
		aBQ.az(), aBQ.wy(1, 0), aBQ.wy(6, 2), aBQ.wy(3, aLH), 2 === aLH ? aBQ.wy(2, gd) : 3 === aLH ? oh.i4.tB(gd, 7, aBQ) : 5 === aLH && (aBQ.wy(3, gd.id), aBQ.wy(3, gd.value), aBQ.wy(30, gd.hp)), hW.b0.send(hW.b0.uP, aBQ.aBR())
	}
}

function aLI() {
	function aLJ(a1, type, lg, k2) {
		b5.buffer.data.push({
			a9: a1,
			type: type || 0,
			value: lg || 0,
			lg: lg || 0,
			k2: k2 || 0
		})
	}

	function aLK(a1, type, lg, k2) {
		b5.buffer.data.push({
			a9: a1,
			type: type,
			value: lg || "",
			lg: lg || "",
			k2: k2 || 0
		})
	}

	function aLL(bz) {
		for (var a1 = b5.buffer.data.length; a1 < bz; a1++) b5.buffer.data.push(null)
	}
	this.data = [], this.az = function() {
		aLJ(0, 1, 0, 5), aLJ(1, 1, 1), aLJ(2, 0), aLK(3, 2), aLJ(4, 1), aLK(5, 2, "system-ui", 2), aLJ(6, 0), aLJ(7, 0, 0), aLJ(8, 0), aLJ(9, 1, 1), aLJ(10, 1), aLJ(11, 1, 1), aLK(12, 2, navigator.language), aLJ(13), aLJ(14), aLJ(15, 0, 1), aLJ(
				16, 0, 3), aLL(100), aLK(100, 2), aLK(101, 2), aLK(102, 2), aLK(103, 2), aLK(104, 2), aLK(105, 2), aLK(106, 2), aLJ(107), aLJ(108), aLJ(109), aLK(110, 2), aLJ(111), aLJ(112), aLJ(113), aLK(114, 2), aLJ(115), aLK(116, 2), aLJ(117,
				1), aLK(118, 2, "", 2), aLJ(119, 1, 0, 1), aLK(120, 2), aLJ(121, 1, ~~(262144 * Math.random())), aLK(122, 2, "Player " + Math.floor(1e3 * Math.random())), aLJ(123), aLK(124), aLJ(125, 1), aLK(126, 2), aLJ(127, 0, 1), aLJ(128),
			aLJ(129), aLJ(130), aLJ(131), aLJ(132), aLK(133, 2), aLJ(134, 0, 5), aLK(135, 2), aLK(136, 2), aLJ(137), aLJ(138), aLJ(139), aLJ(140), aLJ(141), aLJ(142), aLJ(143), aLJ(144), aLK(145, 2), aLJ(146), aLJ(147), aLK(148, 2), aLJ(149),
			aLJ(150, 0, 1), aLK(151, 2), aLJ(152, 0, 5), aLJ(153, 1), aLJ(154, 1), aLK(155, 2), aLK(156, 2), aLJ(157), aLJ(158), aLJ(159), aLJ(160), aLK(161, 2), aLJ(162, 0, 1024), aLK(163, 2, "0,0,0"), aLK(164, 2, "100,100,100"), aLK(165, 2,
				"30,30,30"), aLK(166, 2, "70,70,70"), aLK(167, 2, "100,100,100"), aLK(168, 2, "85,85,85"), aLK(169, 2, "100,100,100");
		for (var a1 = 0; a1 < 4; a1++) aLK(170 + a1, 2, "255,255,255");
		aLK(174, 2), aLK(175, 2), aLJ(176, 0, 200), aLL(180), aLJ(180, 0), aLJ(181, 0), aLJ(182, 0, 1023), aLK(183, 2), aLJ(184, 0, 100), aLK(185, 2)
	}, this.hj = function(a9, value) {
		this.data[a9].value = value
	}, this.aLM = function(a9, value) {
		this.hj(a9, value);
		var value = String(value),
			cs = value.length;
		5e4 < cs ? console.log("storage value too large: index " + a9 + " size " + cs) : (b5.aP.save(a9, value), b5.aP.save(a9, String(this.data[a9].k2), !0))
	}, this.aLN = function(a9) {
		return Number(this.data[a9].value)
	}, this.aLO = function(a9) {
		return String(this.data[a9].value)
	}
}

function aLP() {
	var aAI = 0,
		aAJ = 0;
	this.aLQ = function(c4, bp) {
		aAI = c4, aAJ = bp
	}, this.aLR = function(code) {
		var nu, nw, oN;
		q.cL || j9.jA || (r.cz.ps(0) || r.cz.ps(1)) && r.cz.pt(q.bS) && (mS.c3(aAI, aAJ) ? mS.aLS = !1 : yz.c3(aAI, aAJ) || (nu = f7.f8(aAI), nw = f7.fA(aAJ), oN = f7.uG(nu, nw), f7.aAK(nu, nw) && (0 === code ? function(oN) {
			var aLW, gF, hE;
			q.cJ ? -1 !== (aLW = aLX.aEn(oN)) && jd.pJ.aLY(oN) : (gF = f7.nq(oN), eb.wE(gF) ? (aLW = aLZ.a9d.aG6(gF)) && (hE = f7.nq(aLW), hE = eb.wA(hE) ? q.aA : eb.wB(hE), jd.pJ.aLa(mS.y8(), aLW, hE)) : (aLW = aLX.aEo(oN)) <
				0 || (gF = f7.nq(aLW), eb.wA(gF) ? a4Q.aLb(q.bS) ? jd.pJ.y7(mS.y8(), q.aA) : yB.yC(q.bS) && z6.aI7(q.aA, mS.y8()) : (hE = eb.wB(gF), a4Q.a4R(hE, q.bS) && (a4Q.aLc(q.bS, hE) ? jd.pJ.y7(mS.y8(), hE) : yB.yC(q
					.bS) && z6.aI7(hE, mS.y8())))))
		}(oN) : 1 === code ? function(oN) {
			il.aDr.ng(q.bS, oN) && jd.pJ.aLd(mS.y8(), d7.dM[7])
		}(oN) : 2 === code && function(oN) {
			il.aDs.r8(q.bS, oN) && jd.pJ.aLe(mS.y8())
		}(oN))))
	}, this.aLf = function() {
		if (!q.cL && !j9.jA && r.cz.ps(1)) {
			var cy = q.bS;
			if (r.cz.pt(cy)) {
				var cs = yB.yC(cy);
				if (cs < 1) ! function() {
					var cy = q.bS;
					if (a4Q.aLb(cy)) jd.pJ.y7(mS.y8(), q.aA);
					else
						for (var aDQ = eb.aDQ, a0Z = b7.a0Z, cs = a0Z[cy].length, aGg = Math.floor(Math.random() * cs), a1 = 0; a1 < cs; a1++)
							for (var oL = 3; 0 <= oL; oL--) {
								var aF = a0Z[cy][(a1 + aGg) % cs] + aDQ[oL];
								if (eb.a4a(aF)) {
									aF = eb.wB(aF);
									if (aF !== cy && (!q.bf || a4Q.a4R(cy, aF))) return jd.pJ.y7(mS.y8(), aF)
								}
							}
				}();
				else {
					for (var aLh = 0, dn = yB.yN(cy, 0), a1 = 1; a1 < cs; a1++) {
						var aLi = yB.yN(cy, a1);
						aLi < dn && (dn = aLi, aLh = a1)
					}
					jd.pJ.y7(mS.y8(), yB.yK(cy, aLh))
				}
			}
		}
	}, this.pw = function() {
		if (!q.cL && !j9.jA && r.cz.pt(q.bS) && r.cz.ps(1)) return gv.l2 ? gv.pI(q.bS) ? void jd.pJ.pK(1) : void 0 : void(gv.pr(q.bS) && jd.pJ.pw())
	}
}

function aLj() {
	this.cw = null, this.cu = 0, this.yx = function() {
		for (this.cu = 0, a1 = q.aA - 1; 0 <= a1; a1--) 0 !== b7.c0[a1] && this.cu++;
		this.cw = new Uint16Array(this.cu);
		for (var cs = 0, a1 = 0; a1 < q.aA; a1++) 0 !== b7.c0[a1] && (this.cw[cs++] = a1)
	}, this.aJ7 = function() {
		for (var br = b7.br, a0P = b7.a0P, uq = b7.uq, cw = ct.cw, a1 = ct.cu - 1; 0 <= a1; a1--) {
			var cy = cw[a1],
				bx = br[cy],
				jP = a0P[cy];
			bx <= hA.iV(jP, 4) ? aIt.zH(cy) : jP <= bx ? 250 <= (a0P[cy] = bx) && (uq[cy] = 1) : a0P[cy] = jP - Math.max(1, hA.iV(jP - bx, 1e3))
		}
		this.aIu()
	}, this.aIu = function() {
		for (var c0 = b7.c0, a3I = this.cw, a3H = this.cu, a1 = a3H - 1; 0 <= a1; a1--) 0 === c0[a3I[a1]] && (a3I[a1] = a3I[--a3H]);
		this.cu = a3H
	}
}

function aLl() {
	this.aFa = function() {
		for (var c4, bp, a1 = aFZ - 1; 0 <= a1; a1--) c4 = hA.iV(aFs[a1], 4) % dR.dS, bp = hA.iV(aFs[a1], 4 * dR.dS), b7.el[aFV] = Math.min(c4, b7.el[aFV]), b7.em[aFV] = Math.min(bp, b7.em[aFV]), b7.eo[aFV] = Math.max(c4, b7.eo[aFV]), b7.ep[
			aFV] = Math.max(bp, b7.ep[aFV])
	}, this.aLm = function() {
		var gM, cy, a1, cs = b7.a0S[aFV].length,
			aDQ = eb.aDQ;
		loop: for (a1 = cs - 1; 0 <= a1; a1--) {
			for (gM = 3; 0 <= gM; gM--)
				if (cy = b7.a0S[aFV][a1] + aDQ[gM], eb.wA(cy) || eb.a4a(cy) && eb.wB(cy) !== aFV) {
					eb.aAb(b7.a0S[aFV][a1], aFV);
					continue loop
				} b7.a0S[aFV][a1] = b7.a0S[aFV][cs - 1], b7.a0S[aFV].pop(), cs--
		}
	}, this.aLn = function() {
		var player = aFV,
			a0Z = b7.a0Z,
			a0a = b7.a0a,
			a0b = b7.a0b,
			cs = a0Z[player].length,
			aDQ = eb.aDQ;
		loop: for (var a1 = cs - 1; 0 <= a1; a1--) {
			for (var aLo = !1, aLp = !1, gM = 3; 0 <= gM; gM--) {
				var cy = a0Z[player][a1] + aDQ[gM];
				if (eb.oP(cy, player)) continue loop;
				aLo = aLo || eb.uF(cy), aLp = aLp || eb.aLq(cy)
			}
			aLo ? a0a[player].push(a0Z[player][a1]) : aLp ? a0b[player].push(a0Z[player][a1]) : eb.aAe(a0Z[player][a1], player), a0Z[player][a1] = a0Z[player][cs - 1], a0Z[player].pop(), cs--
		}
	}, this.aFN = function() {
		b7.br[aFK] -= aFZ
	}, this.aFO = function(border) {
		for (var cs = border.length, a1 = cs - 1; 0 <= a1; a1--) eb.gN(aFK, border[a1]) || (border[a1] = border[cs - 1], border.pop(), cs--)
	}, this.aFP = function(border) {
		for (var cs = border.length, a1 = cs - 1; 0 <= a1; a1--) !eb.gN(aFK, border[a1]) && eb.w9(border[a1]) && (border[a1] = border[cs - 1], border.pop(), cs--)
	}, this.aFQ = function(border) {
		for (var gM, cy, cs = border.length, aDQ = eb.aDQ, a1 = cs - 1; 0 <= a1; a1--)
			for (gM = 3; 0 <= gM; gM--)
				if (cy = border[a1] + aDQ[gM], eb.oP(cy, aFK)) {
					b7.a0Z[aFK].push(border[a1]), border[a1] = border[cs - 1], border.pop(), cs--;
					break
				}
	}, this.aFR = function() {
		for (var gM, cy, aDQ = eb.aDQ, a1 = aFZ - 1; 0 <= a1; a1--)
			for (gM = 3; 0 <= gM; gM--) cy = aFs[a1] + aDQ[gM], eb.a4b(aFK, cy) && eb.aLr(cy) && (b7.a0Z[aFK].push(cy), eb.aAd(cy, aFK))
	}, this.aFS = function() {
		var c4, bp;
		loop: for (; b7.em[aFK] < b7.ep[aFK];) {
			for (c4 = b7.eo[aFK]; c4 >= b7.el[aFK]; c4--)
				if (eb.gN(aFK, 4 * (b7.em[aFK] * dR.dS + c4))) break loop;
			b7.em[aFK]++
		}
		loop: for (; b7.em[aFK] < b7.ep[aFK];) {
			for (c4 = b7.eo[aFK]; c4 >= b7.el[aFK]; c4--)
				if (eb.gN(aFK, 4 * (b7.ep[aFK] * dR.dS + c4))) break loop;
			b7.ep[aFK]--
		}
		loop: for (; b7.el[aFK] < b7.eo[aFK];) {
			for (bp = b7.ep[aFK]; bp >= b7.em[aFK]; bp--)
				if (eb.gN(aFK, 4 * (bp * dR.dS + b7.el[aFK]))) break loop;
			b7.el[aFK]++
		}
		loop: for (; b7.el[aFK] < b7.eo[aFK];) {
			for (bp = b7.ep[aFK]; bp >= b7.em[aFK]; bp--)
				if (eb.gN(aFK, 4 * (bp * dR.dS + b7.eo[aFK]))) break loop;
			b7.eo[aFK]--
		}
	}, this.a4R = function(player, xg) {
		return 0 === aC.wD[player] || aC.wD[player] !== aC.wD[xg]
	}, this.aLb = function(player) {
		for (var a1, ba, cs = b7.a0Z[player].length, aDQ = eb.aDQ, gM = 3; 0 <= gM; gM--)
			for (ba = aDQ[gM], a1 = 0; a1 < cs; a1++)
				if (eb.wA(b7.a0Z[player][a1] + ba)) return !0;
		return !1
	}, this.aI5 = function(player) {
		for (var a1, ba, cs = b7.a0Z[player].length, aDQ = eb.aDQ, gM = 3; 0 <= gM; gM--)
			for (ba = aDQ[gM], a1 = 0; a1 < cs; a1++)
				if (eb.aAc(b7.a0Z[player][a1]) && eb.wA(b7.a0Z[player][a1] + ba)) return !0;
		return !1
	}, this.aLc = function(aLs, aLt) {
		for (var a1, bx, ba, cy, dj = b7.a0Z[aLs].length, dk = b7.a0Z[aLt].length, aDQ = (dk < dj && (bx = aLs, aLs = aLt, aLt = bx, bx = dj, dj = dk, 0), eb.aDQ), gM = 3; 0 <= gM; gM--)
			for (ba = aDQ[gM], a1 = 0; a1 < dj; a1++)
				if (cy = b7.a0Z[aLs][a1] + ba, eb.a4a(cy) && eb.wB(cy) === aLt) return !0;
		return !1
	}, this.aI6 = function(aLs, aLt) {
		for (var a1, ba, cy, dj = b7.a0Z[aLs].length, aDQ = eb.aDQ, gM = 3; 0 <= gM; gM--)
			for (ba = aDQ[gM], a1 = 0; a1 < dj; a1++)
				if (eb.aAc(b7.a0Z[aLs][a1]) && (cy = b7.a0Z[aLs][a1] + ba, eb.a4a(cy)) && eb.wB(cy) === aLt) return !0;
		return !1
	}
}

function aLu() {
	var dC, o1, nz, aLv, gap, aLw, aLx, aLy, aLz, aM0, mO, aM1, aAI, lX, xq, aGt, aM2;

	function aM4() {
		aLv = Math.floor(.2 * (b2.b3.b4() ? .07 : .035) * bD.bE), aLv = ml(b2.b3.b4() ? 3 : 1, aLv);
		var aM6 = bD.dt / (dC.length + gap);
		aLv = aLv < aM6 ? aM6 : aLv, xq = Math.floor((1 - gap) * aLv), o1 = 0, aM7()
	}

	function aM7() {
		o1 = (o1 = o1 < -20 ? -20 : o1) > (dC.length - 15) * aLv ? (dC.length - 15) * aLv : o1, aLx = Math.floor(o1 / aLv), aLy = (aLy = aLx + Math.floor(bD.dt / aLv)) > dC.length - 1 ? dC.length - 1 : aLy, aLx = (aLx = aLy < aLx ? aLy : aLx) < 0 ?
			0 : aLx;
		var jP = aLy;
		aLw = nz / dC[jP];
		for (var a1 = aLy - 1; aLx <= a1; a1--) dC[a1] > dC[jP] && (jP = a1, aLw = nz / Math.pow(dC[a1], lX))
	}

	function aM9(c4) {
		c4 = Math.floor((o1 + bD.dt - c4 - gap * aLv) / aLv);
		return (c4 = c4 < -1 ? -1 : -1 === c4 ? 0 : c4 > dC.length - 1 ? -1 : c4) !== aLz && (aLz = c4, -1 === aGt && 0 === aLz && kD.aCg && (aGt = setInterval(aMA, 100)), 1)
	}

	function aMB(a1) {
		var aMD = Math.floor(aLw * Math.pow(dC[a1], lX));
		cS.fillRect(o1 + bD.dt - (a1 + 1) * aLv, bD.du - aMD, xq, aMD)
	}

	function aMA() {
		var cy;
		0 !== (aLz = 8 === jz.si() ? -1 : aLz) ? (aM2 = (new Date).getTime(), clearInterval(aGt), aGt = -1) : (cy = dC[1] / 864e3, -1 !== aM2 && (cy += ((new Date).getTime() - aM2) * dC[1] / 864e5, aM2 = -1), 0 < cy && (dC[0] += Math.floor(cy), bL
			.cC = !0))
	}
	this.aCg = !1, this.az = function() {
		aM2 = aGt = -1, aLz = -(lX = 1), this.a1F = !1, aAI = 0, aM1 = new Date, o1 = 0, gap = .3, dC = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		nz = Math.floor(.15 * bD.du), aM0 = (aM0 = Math.floor((b2.b3.b4() ? .018 : .0137) * bD.bE)) < 2 ? 2 : aM0, mO = r.bF.bG(1, aM0), aM4()
	}, this.aM5 = function(sb) {
		var a1;
		for (this.aCg = !0, a1 = 0; a1 < sb.length; a1++) dC.unshift(sb[a1]);
		aM4(), bL.cC = !0
	}, this.a1H = function() {
		aM7()
	}, this.cF = function(c4, bp) {
		bp > bD.du - .6 * nz ? this.a1F ? c4 !== aAI && (o1 += c4 - aAI, aAI = c4, aM7(), aM9(c4), this.a1F = -1 !== aLz, bL.cC = !0) : aM9(c4) && (bL.cC = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aLz && (this.a1F = !1, aLz = -1, bL.cC = !0)
	}, this.cO = function(c4, deltaY) {
		-1 !== aLz && (o1 += Math.floor(deltaY), aM7(), aM9(c4), bL.cC = !0)
	}, this.c3 = function(c4, bp) {
		this.cF(c4, bp), -1 !== aLz && (aAI = c4, this.a1F = !0)
	}, this.cI = function() {
		-1 !== aLz && (this.a1F = !1)
	}, this.cR = function() {
		cS.fillStyle = bO.lY;
		for (var aME, month, bx, kq, aMH, aMI, cV, aMJ, aMK, a1 = aLy; aLx <= a1; a1--) aMB(a1);
		this.aCg && 0 === aLx && (cS.fillStyle = bO.pB, aMB(0)), -1 !== aLz && (cS.fillStyle = bO.xo, aMB(aLz)), -1 !== aLz && (cS.font = mO, r.bF.textBaseline(cS, 2), (bx = new Date).setTime(aM1.getTime() - 1e3 * aLz * 60 * 60 * 24), month =
			"month", aME = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(bx), aME = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(bx)), aME = aME + ", " + bx.getUTCDate() + " " + month + " " + bx.getFullYear(), month = 1 === dC[aLz] ? L(320) : L(321), month = r.aI.eh(dC[aLz]) + " " + month, bx = Math.floor(cS.measureText(aME).width), kq = Math
			.floor(cS.measureText(month).width), aMH = Math.floor(.5 * (bx + aM0)), aMI = (aMI = o1 + bD.dt - (aLz + 1) * aLv) < aMH ? aMH : aMI > bD.dt - aMH ? bD.dt - aMH : aMI, cV = bD.du - Math.floor(aLw * Math.pow(dC[aLz], lX)), aMJ =
			Math.floor(1.1 * aM0), aMK = cV > bD.du - aMJ ? bD.du - aMJ : cV, cS.fillStyle = bO.lC, cS.fillRect(bD.dt - kq - aM0, aMK - aMJ, kq + aM0, aMJ), cS.fillRect(aMI - aMH, bD.du - aMJ, bx + aM0, aMJ), cS.fillStyle = bO.bX, r.bF
			.textAlign(cS, 2), cS.fillText(month, Math.floor(bD.dt - .5 * aM0), aMK), r.bF.textAlign(cS, 1), cS.fillText(aME, aMI, bD.du), cS.strokeStyle = bO.aML, cS.lineWidth = 1, cS.beginPath(), cS.moveTo(0, cV), cS.lineTo(bD.dt, cV), cS
			.closePath(), cS.stroke())
	}
}

function i(a8Y, y) {
	var tY = document.createElement("div");

	function eV() {
		var a1, sr, du, ba, gM, aMN = bD.cp * tY.offsetWidth,
			aMP = new Float64Array(function(aMN) {
				var dt = .25 * r.bF.dv(.6) * bD.bE;
				return Math.max(Math.floor(aMN / dt), 1)
			}(aMN)),
			aDx = bY.aDx,
			aMQ = (aMN - (aMP.length + 1) * bY.gap) / (aMP.length * bD.cp);
		for (aMP.fill(aDx), a1 = 0; a1 < y.length; a1++) sr = (gM = y[a1].tY).style, du = r.s.min(aMP), ba = aMP.indexOf(du), sr.top = r.bF.nO(du), sr.left = r.bF.nO(aDx + ba * (aMQ + aDx)), sr.width = r.bF.nO(aMQ), r.bF.kB(gM, 5), aMP[ba] += gM
			.offsetHeight + 3 * aDx;
		tY.style.height = r.bF.nO(r.s.max(aMP) - 2 * aDx)
	}
	this.tW = tY, this.tX = y, this.resize = function() {
		var a1;
		for (a1 = 0; a1 < y.length; a1++) y[a1].resize();
		eV(), eV()
	}, tY.style.width = "100%", tY.style.maxWidth = "100%", a8Y.style.lineHeight = "1.5em", a8Y.style.overflowX = "hidden", a8Y.style.overflowY = "auto";
	for (var a1 = 0; a1 < y.length; a1++) tY.appendChild(y[a1].tY);
	a8Y.appendChild(tY)
}

function aDg() {
	this.a0i = function(player) {
		for (var yL = il.b0.yL, ii = player << 3, a1 = ii + il.b0.yG[player] - 1; ii <= a1; a1--) this.a4N(yL[a1])
	}, this.a4N = function(aMR) {
		var b0 = il.b0,
			aMS = b0.rm - 1,
			aMT = b0.rS[aMR],
			aMU = b0.im[aMR],
			aMV = b0.rP[aMR];
		b0.rm = aMS, b0.rS[aMR] = b0.rS[aMS], b0.rP[aMR] = b0.rP[aMS], b0.a2i[aMR] = b0.a2i[aMS], b0.wH[aMR] = b0.wH[aMS], b0.im[aMR] = b0.im[aMS], b0.rD[aMR] = b0.rD[aMS], b0.rK[aMR] = b0.rK[aMS], b0.aHQ[aMR] = b0.aHQ[aMS], b0.rc[aMR] = b0.rc[
				aMS], b0.re[aMR] = b0.re[aMS], b0.yL[b0.rS[aMR]] = aMR,
			function(aMY) {
				var player = aMY >> 3,
					b0 = il.b0,
					cs = b0.yG[player] - 1,
					aMZ = (player << 3) + cs;
				b0.yG[player] = cs, aMZ !== aMY && (b0.yL[aMY] = b0.yL[aMZ], b0.rS[b0.yL[aMY]] = aMY)
			}(aMT), il.iT.iT[f7.ij(b0.rP[aMR])][b0.im[aMR]] = aMR, aMS = f7.ij(aMV), aMT = aMU, aMS = il.iT.iT[aMS], b0 = aMS.pop(), aMT !== aMS.length && (aMS[aMT] = b0, il.b0.im[b0] = aMT)
	}
}

function aMb() {
	var aMc, aMd, size, xg, dn, aMe;

	function aMf(player) {
		return player < q.bq ? aMc * player : aMc * q.bq + aMd * (player - q.bq)
	}
	this.az = function() {
		aMc = q.bq < 16 ? 12 : 8, aMd = 4;
		var cs = aMf(q.aA);
		size = new Uint8Array(q.aA), xg = new Uint16Array(cs), dn = new Uint32Array(cs), aMe = new Uint8Array(cs)
	}, this.aMg = function(qj, aMh) {
		var aMi = this.aFq(qj, aMh),
			aMh = (this.aFp(qj, aMh, 0), r.cz.a4c(qj, aMi));
		dg.a0e(qj, aMi - aMh, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a0r = function(player, aMh) {
		var aMl, aMh = function(player, aMh) {
			var a1, jP = aMf(player);
			for (a1 = size[player] - 1; 0 <= a1; a1--)
				if (xg[jP + a1] === aMh) return a1;
			return size[player]
		}(player, aMh);
		aMh !== size[player] && (aMl = dn[aMf(player) + aMh], this.aMm(player, aMh), this.qi(player, aMl, q.aA))
	}, this.a4f = function(player, aMh) {
		for (var jP = aMf(player), a1 = size[player] - 1; 0 <= a1; a1--)
			if (xg[jP + a1] === aMh) return !0;
		return !1
	}, this.a4g = function(player) {
		return player < q.bq ? size[player] < aMc : size[player] < aMd
	}, this.yC = function(player) {
		return size[player]
	}, this.yK = function(player, a1) {
		return xg[aMf(player) + a1]
	}, this.yN = function(player, a1) {
		return dn[aMf(player) + a1]
	}, this.aFq = function(player, aMh) {
		for (var jP = aMf(player), a1 = size[player] - 1; 0 <= a1; a1--)
			if (xg[jP + a1] === aMh) return dn[jP + a1];
		return 0
	}, this.a0d = function(player) {
		for (var jP = aMf(player), h2 = 0, a1 = size[player] - 1; 0 <= a1; a1--) h2 += dn[jP + a1];
		return h2
	}, this.aFp = function(player, aMh, aMl) {
		for (var jP = aMf(player), a1 = size[player] - 1; 0 <= a1; a1--) xg[jP + a1] === aMh && (dn[jP + a1] = aMl)
	}, this.aFU = function(player, a1, aMl) {
		dn[aMf(player) + a1] = Math.max(aMl, 0)
	}, this.aFY = function(player, a1) {
		aMe[aMf(player) + a1] = 0
	}, this.aMn = function(player, a1) {
		return aMe[aMf(player) + a1]
	}, this.qi = function(player, aMl, aMh) {
		yt.a5A.aMo[player] = yt.a5A.aMo[aMh] = 8, r.cz.a0c(aMh) && dg.dh[6 - r.cz.fO(player)]++;
		for (var jP = aMf(player), a1 = size[player] - 1; 0 <= a1; a1--)
			if (xg[jP + a1] === aMh) return dn[jP + a1] += aMl, void(dn[jP + a1] = dn[jP + a1] > q.ei ? q.ei : dn[jP + a1]);
		xg[jP + size[player]] = aMh, dn[jP + size[player]] = aMl, aMe[jP + size[player]] = 1, size[player]++, aMh === q.bS ? g5.vX(player, 5) : player < q.bq && player === q.bS && ez.g4(aMh)
	}, this.aMm = function(player, a9) {
		var bN, jP;
		if (0 !== size[player])
			for (jP = aMf(player), size[player]--, bN = a9; bN < size[player]; bN++) xg[jP + bN] = xg[jP + bN + 1], dn[jP + bN] = dn[jP + bN + 1], aMe[jP + bN] = aMe[jP + bN + 1]
	}, this.a0U = function(player) {
		for (var bN, jP, a0k = [], a1 = ct.cu - 1; 0 <= a1; a1--)
			for (jP = aMf(ct.cw[a1]), bN = size[ct.cw[a1]] - 1; 0 <= bN; bN--)
				if (xg[jP + bN] === player) {
					a0k.push(ct.cw[a1]);
					break
				} return a0k
	}
}

function vF() {
	var aMp, aBg, aMs, aBf, aBi, aMq = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aMr = new Array(4),
		aMt = new Array(2),
		aMu = [L(7), L(322), L(323), L(324)];

	function aN1() {
		var a6k;
		!uN.uO || (a6k = aMp.aBu.iL.cb.value.trim().slice(0, 127)).length < 1 || (aMp.aBu.iL.cb.value = "", uN.a04.zR(a6k))
	}

	function aN0(aN3) {
		uN.b0.a8P[3] = 1 - uN.b0.a8P[3], aN2(3, 1, uN.b0.a8P[3]), aN3 && hW.kW.aLG(4), uN.b0.a8P[3] && b5.hi.hj(158, uN.b0.a8P[0])
	}

	function aMw(bN, fv) {
		uN.b0.a8P[bN] !== fv && (0 === bN && uN.b0.a8P[3] && aN0(0), aN2(bN, uN.b0.a8P[bN], 0), aN2(bN, fv, 1), uN.b0.a8P[bN] = fv, 0 === bN ? (hW.kW.aLG(2, fv), uN.b0.a8P[2] ? (aMp.aBw.lA(), aMp.aBu.reset(1)) : aMp.aBu.reset(0), n.gp().a9N(), n.gp()
			.a9M()) : 2 === bN && (0 === fv ? (hW.kW.aLG(0), aMp.aBu.lA(), aMp.aC2()) : (hW.kW.aLG(1), aMp.aBw.lA(), aMp.aC3())))
	}

	function aN2(bN, fv, color) {
		aMp.aBy[bN].nK[fv].hg(color ? bO.bU : bO.aMx)
	}

	function aN6(qg) {
		return dR.qe.a2m[qg]
	}

	function aN7(zZ) {
		return zZ < 7 ? "   " + (zZ + 2) + " Teams" : 10 === zZ ? "   No Full-Sending" : ""
	}

	function aN8(ze, aNG) {
		return aNG ? ze <= 90 && 60 < ze ? "   Contest" : "" : ze <= 60 ? "   Contest" : ""
	}
	this.a4B = function() {
		return aMp.aBu
	}, this.a04 = function(hp) {
		aMw(2, 0);
		var ga = aMp.aBu.iL.cb.value,
			hp = "@" + hp + " ";
		ga.length && !r.aI.hM(ga, " ") && (hp = " " + hp), aMp.aBu.iL.cb.value = ga += hp, aMp.aBu.iL.cb.focus()
	}, this.a9L = function() {
		aMp.aBw.lA()
	}, this.a9N = function() {
		var aN5 = uN.b0.a8P[0],
			aN5 = uN.b0.zX[aN5],
			fv = (dR.wx(aN5.qg, aN5.mapSeed), aBg.nK),
			we = aN6(aN5.qg, aN5.mapSeed) + aN7(aN5.zZ) + aN8(aN5.ze),
			aN5 = L(328) + "   " + aN6(aN5.za, aN5.zb) + aN7(aN5.zc) + aN8(aN5.ze, 1);
		fv[0].button.textContent === we && fv[1].button.textContent === aN5 || (fv[0].button.textContent = we, fv[1].button.textContent = aN5, aBg.resize())
	}, this.a9M = function() {
		var aN5 = uN.b0.a8P[0],
			zW = uN.b0.zX[aN5];
		aMp.aC1(zW.zY);
		for (var h2, aDY, a1 = 0; a1 < uN.zf.a8G.length; a1++) aMq[0][a1].na.textContent = uN.zf.a8G[a1].length, aMq[1][a1].na.textContent = (h2 = uN.b0.zX[a1].ze, aDY = void 0, ((aDY = hA.iV(h2, 60)) < 10 ? "0" : "") + aDY + ":" + ((h2 %= 60) <
			10 ? "0" : "") + h2);
		var zW = uN.zf.a8G[aN5],
			aNA = zW.length,
			aNB = uN.zf.zg[aN5];
		aMq[2][1].na.textContent = "" + aNA, aMq[3][1].na.textContent = "" + aNB;
		for (a1 = 0; a1 < 4; a1++) {
			var aNC = uN.b0.zX[a1];
			aMr[a1] ? 0 === aNC.zY && (aMr[a1].na.textContent = dR.qe.a2m[aNC.qg]) : aMr[a1] = new a5X(dR.qe.a2m[aNC.qg], aBf.nK[a1].button, 1, 1), r.aI.startsWith(aMu[a1], "🏆 ") ? aNC.zd || (aMu[a1] = aMu[a1].substring(3), aBf.nK[a1].button
				.textContent = aMu[a1], aBf.nK[a1].button.appendChild(aMq[1][a1].na), aBf.nK[a1].button.appendChild(aMq[0][a1].na), aBf.nK[a1].button.appendChild(aMr[a1].na)) : aNC.zd && (aMu[a1] = "🏆 " + aMu[a1], aBf.nK[a1].button
				.textContent = aMu[a1], aBf.nK[a1].button.appendChild(aMq[1][a1].na), aBf.nK[a1].button.appendChild(aMq[0][a1].na), aBf.nK[a1].button.appendChild(aMr[a1].na))
		}
		var aND = "",
			aNE = "";
		0 === aN5 && (aND = uN.nr.aNF(zW, 0, aNA), aNE = uN.nr.aNF(zW, 0, aNB)), aMs[0].na.textContent = aND, aMs[1].na.textContent = aNE, aMt[1].na.textContent = "MP: " + uN.b0.zk[0] + "   SP: " + uN.b0.zk[1] + "   Lobby: " + r.s.sD(uN.zf.a8G)
	}, this.a9Q = function() {
		aMp.aBu.lA()
	}, this.show = function() {
		uN.b0.a8O++, aMp.show(), this.resize(), uN.message.show()
	}, this.aL = function() {
		aMp.aL(), uN.a1h.aL(), uN.a1j.aL(), uN.message.aL()
	}, this.resize = function() {
		aMp.resize(1 - uN.b0.a8P[2]), uN.message.resize()
	}, this.aM = function(aN) {
		2 === aN ? uN.b0.a8P[3] ? aN0(1) : aMp.aBy[3].nK[0].aP() : aN < 2 && aN0(1)
	}, aBf = new aMv([new g(aMu[0], function() {
		return aMw(0, 0), 2
	}), new g(aMu[1], function() {
		return aMw(0, 1), 2
	}), new g(aMu[2], function() {
		return aMw(0, 2), 2
	}), new g(aMu[3], function() {
		return aMw(0, 3), 2
	})], bO.aMx), (aBg = new aMv([new g("", 0, 2), new g("", 0, 2)], bO.aMy, 1)).tY.translate = !1;
	var aMz = new aMv([new g(L(325), function() {
		return aMw(2, 0), 2
	}), new g(L(57), function() {
		return aMw(2, 1), 2
	})], bO.aMx);
	aBi = new aMv([new g(L(326, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			n.ta(), uN.ln(), hW.b0.ui(3240), __fx.customLobby.setActive(false), n.aB(5, 5)
		}),
		function() {
			n.ta(), uN.ln(), hW.b0.ui(3240), __fx.customLobby.setActive(false), n.aB(5, 5)
		})), new g(L(327), function() {
		return aN0(1), 2
	})], bO.aMx), aMp = new aBe(aBf, aBg, aMz, aBi, aN1, uN.a1h.a1i);
	for (var a1 = 0; a1 < 4; a1++) aMq[0][a1] = new a5X("0", aBf.nK[a1].button), aMq[1][a1] = new a5X("0", aBf.nK[a1].button, 1);
	aMq[2][1] = new a5X("0", aMz.nK[1].button), aMq[3][1] = new a5X("0", aBi.nK[1].button), (aMs = [new a5X("", aMz.nK[1].button, 1, 1), new a5X("", aBi.nK[1].button, 1, 1)])[0].na.style.bottom = "0em", aMs[1].na.style.bottom = "0em", aMs[0].na
		.translate = !1, aMs[1].na.translate = !1, aN2(0, uN.b0.a8P[0], 1), aN2(2, uN.b0.a8P[2], 1), (aMt = [new a5X(L(8), aMp.aC4(), 1, 0), new a5X("", aMp.aC4(), 1, 1)])[0].na.style.fontSize = "0.4em", aMt[1].na.style.fontSize = "0.4em"
}

function aDn() {
	this.aNH = function(player, u9) {
		return -1 !== u9 && !!il.nr.a8p(player, u9) && this.ra(player, u9, 0)
	}, this.ra = function(player, u9, aNI) {
		player = function(player, u9, aNI) {
			var rU = il.nr.rV(player, u9);
			if (-1 === rU) return -1;
			rU = il.nr.aAx(rU, u9);
			if (-1 === rU) return -1;
			var a8m = il.rk.a4k(rU, u9);
			if (0 <= a8m) return a8m;
			if (il.rk.rp()) return -1;
			if (0 <= (a8m = il.rk.a4k(u9, rU))) return il.rk.uB(il.rk.rl(il.rk.get(a8m)));
			if (rU === u9) return il.rk.uB(new Uint32Array([rU, u9]));
			if (0 <= (a8m = il.aDo.ra(rU, u9))) return a8m;
			return aNI ? function(aNK, player) {
				var dQ = d7.dQ,
					buffer = (dQ.fill(0), [aNK]),
					aNL = (dQ[aNK] = 1, f7.aNL),
					nn = -1,
					cs = buffer.length;
				for (; - 1 === nn && cs;) {
					for (var dC = [], a1 = 0; a1 < cs; a1++)
						for (var oN = buffer[a1], hK = dQ[oN], gM = 0; gM < 8; gM++) {
							var aNM, aNN, aAw = oN + aNL[gM],
								gF = 4 * aAw;
							eb.uF(gF) ? (aNM = dQ[aAw], aNN = hK + 5 + ((1 & gM) << 1), 0 === aNM ? (dC.push(aAw), dQ[aAw] = aNN) : dQ[aAw] = Math.min(aNN, aNM)) : -1 === nn && gM % 2 == 0 && eb.gN(player, gF) && (nn = oN)
						}
					cs = (buffer = dC).length
				}
				return -1 !== nn ? function(o5, aNP) {
					var aNL = f7.aNL,
						aNQ = -1,
						oL = 0,
						dh = [];
					for (; aNP !== o5;)(oL = function(oN, oL) {
						var dQ = d7.dQ,
							aNL = f7.aNL,
							hK = dQ[oN];
						if (hK - dQ[oN + aNL[oL]] != 5 + ((1 & oL) << 1))
							for (var bN = 0; bN < 8; bN++) {
								var gM = bN + oL + 6 & 7;
								if (hK - dQ[oN + aNL[gM]] == 5 + ((1 & gM) << 1)) return gM
							}
						return oL
					}(aNP, oL)) !== aNQ && (dh.push(aNP), aNQ = oL), aNP += aNL[oL];
					dh.push(o5);
					var a8m = il.rk.a4k(dh[0], o5);
					if (0 <= a8m) return a8m;
					return il.rk.uB(new Uint32Array(dh))
				}(aNK, nn) : -1
			}(u9, player) : -1
		}(player, u9, aNI);
		return -1 !== player && (d7.dC[0] = il.rk.get(player), !0)
	}
}

function z3() {
	aFZ = 0, aNS = 2048, aFs = new Uint32Array(4 * aNS), aNT = 0, aNU = new Uint32Array(aNS), aNV = new Uint8Array(dR.dS * dR.dT)
}

function aNW(player) {
	aFV = player, aFT = !1, aNX(), aNY();
	for (var a1 = yB.yC(aFV) - 1; 0 <= a1; a1--) aFW = a1, aNZ();
	aFT && aNa()
}

function aNa() {
	a4Q.aLm(), a4Q.aLn()
}

function aNZ() {
	aFK = yB.yK(aFV, aFW), aFX = yB.yN(aFV, aFW), aFn = yB.aMn(aFV, aFW), aNb(), (0 !== aFZ && (aNc(), aNd()) ? aFH : aFM)()
}

function aNd() {
	if (!((aFl = hA.iV(aFX, aFZ)) > q.yV)) {
		if (!aFn) return !1;
		var aNe = aFZ * (1 + q.yV);
		aFX += r.cz.aFo(aFV, aNe - aFX), aFl = hA.iV(aFX, aFZ)
	}
	return !0
}

function aNc() {
	for (var a1 = aFZ - 1; 0 <= a1; a1--) aNV[hA.iV(aFs[a1], 4)] = 0
}

function aFM() {
	1 === yB.yC(aFV) && z1.a0W(aFV);
	var bx = r.cz.a4c(aFV, aFX);
	dg.a0e(aFV, aFX - bx, 12), yB.aMm(aFV, aFW)
}

function aNX() {
	for (var player = aFV, a0S = b7.a0S, cs = Math.min(a0S[player].length, aNS), fe = 0, aNf = aNU, a1 = cs - 1; 0 <= a1; a1--) aNf[fe++] = a0S[player][a1];
	aNT = fe
}

function aNY() {
	for (var a1 = b7.a0S[aFV].length - 1; 0 <= a1; a1--) eb.w9(b7.a0S[aFV][a1]) && eb.aAd(b7.a0S[aFV][a1], aFV);
	b7.a0S[aFV] = []
}

function aNb() {
	aFZ = 0, (aFK === q.aA ? aNg : aNh)()
}

function aNh() {
	for (var cy, ba, a1, aDQ = eb.aDQ, gM = 3; 0 <= gM; gM--)
		for (a1 = aNT - 1; 0 <= a1; a1--) cy = aNU[a1] + aDQ[gM], ba = hA.iV(cy, 4), 0 === aNV[ba] && eb.a4a(cy) && eb.wB(cy) === aFK && (aNV[ba] = 1, aFs[aFZ++] = cy)
}

function aNg() {
	for (var cy, ba, a1, aDQ = eb.aDQ, gM = 3; 0 <= gM; gM--)
		for (a1 = aNT - 1; 0 <= a1; a1--) cy = aNU[a1] + aDQ[gM], ba = hA.iV(cy, 4), 0 === aNV[ba] && eb.wA(cy) && (aNV[ba] = 1, aFs[aFZ++] = cy)
}

function kR() {
	var aNk, aNl;
	this.aNi = 4, this.aNj = null, this.uY = 0, this.uP = 0;

	function aNu() {
		return 0 === uW.aNv ? kH.qM ? 1 : 0 : uW.aNv - 1
	}

	function aNy(uK, ot, aNx) {
		aNl[uK].aGs = !0, aNo(uK), aNk[uK] = new aO1, aNk[uK].az(uK, ot, aNx)
	}

	function aNz(a1) {
		return aNl[a1].aGs && aNk[a1].aNz()
	}

	function aNo(uK) {
		aNl[uK].c8 = bL.c8, aNl[uK].aJi = !1
	}
	this.az = function() {
		this.aNj = new Array(this.aNi), this.aNj[0] = "territorial.io", this.aNj[1] = "1.territorial.io", this.aNj[2] = "4.territorial.io", this.aNj[3] = "5.territorial.io", aNk = new Array(this.aNi), aNl = new Array(this.aNi);
		for (var a1 = this.aNi - 1; 0 <= a1; a1--) aNl[a1] = {
			aGs: !1,
			c8: 0,
			aJi: !1
		};
		this.aNn(0, 0, 0)
	}, this.aCa = function(a1) {
		return aNk[a1]
	}, this.bs = function() {
		for (var a1 = this.aNi - 1; 0 <= a1; a1--) this.hl(a1) && bL.c8 > aNl[a1].c8 + 15e3 && (hW.kU.aJh(a1, aNl[a1].aJi), aNo(a1));
		!this.hl(0) && bL.c8 > aNl[0].c8 + 8e3 && (aNl[0].c8 = bL.c8, this.aNn(0, 0, 0))
	}, this.aNp = function(id) {
		return this.aNn(0, id, 0) && this.aNq(0)
	}, this.aNr = function(aNs) {
		return aNs ? uW.aNt : aNu()
	}, this.aHi = function() {
		return aNu() ? "game.territorial.io" : "territorial.io"
	}, this.hX = function(aNw) {
		aNw = this.aHi() + aNw;
		return "<a href='https://" + aNw + "' target='_blank'>" + aNw + "</a>"
	}, this.aNn = function(uK, ot, aNs) {
		aNs = this.aNr(aNs);
		if (aNl[uK].aGs) {
			if (aNk[uK].aNz()) return aNk[uK].aO0(ot), aNk[uK].hl();
			aNk[uK].aL()
		}
		return aNy(uK, ot, aNs), !1
	}, this.aO2 = function(uK, ot) {
		console.log("Connection to Server " + uK), hW.kY.aBJ(uK)
	}, this.aNq = function(a1) {
		return this.hl(a1) && aNk[a1].aNq()
	}, this.aCf = function(a1) {
		aNk[a1].aCf()
	}, this.hl = function(a1) {
		return aNl[a1].aGs && aNk[a1].hl()
	}, this.send = function(uK, mH) {
		0 !== uK && aNo(uK), aNk[uK].send(mH)
	}, __fx.customLobby.setSendFunction(this.send), this.aO3 = function(uK) {
		8 === jz.si() && (aNl[uK].aJi = !0, hW.kS.aO4 = !0)
	}, this.close = function(uK, aO5) {
		aNz(uK) && aNk[uK].close(aO5)
	}, this.i0 = function(uK, aO5) {
		a88.ub(aO5), aNz(uK) && aNk[uK].close(aO5)
	}, this.ui = function(aO5) {
		for (var a1 = this.aNi - 1; 0 <= a1; a1--) this.close(a1, aO5)
	}, this.aO6 = function(uK, aO5) {
		for (var a1 = this.aNi - 1; 0 <= a1; a1--) a1 !== uK && this.close(a1, aO5)
	}, this.zE = function() {
		0 === this.uY && (q.cK || q.cL) || this.close(this.uY, 3246)
	}, this.aO7 = function(uK, cb) {
		aNk[uK].aL(), a88.uJ(uK, cb.code)
	}
}

function vG() {
	var b, aO8 = !0;

	function aOC(aOB, yO) {
		var tY = document.createElement("div"),
			aOD = document.createElement("span"),
			aOE = document.createElement("span");
		aOD.textContent = jK.lc(yO.c8) + ":", aOD.style.color = bO.aOF, aOD.style.paddingRight = "0.4em", aOD.style.display = "table-cell", aOD.style.width = "6ch", aOD.style.textAlign = "end", tY.appendChild(aOD), aOE.textContent = yO.ga, tY
			.appendChild(aOE), tY.style.display = "table", yO.fj && function(tY, fj) {
				{
					var lx;
					fj >= 1024 - et.eu.fp ? ((lx = document.createElement("img")).src = et.fm.fo[fj - 1024 + et.eu.fp].toDataURL(), lx.style.width = "1.5em", lx.style.height = "1.5em", lx.style.verticalAlign = "middle", tY.appendChild(lx)) : ((lx =
						document.createElement("span")).textContent = et.eu.fq(fj), lx.style.display = "inline-block", lx.style.fontSize = "1.5em", lx.style.lineHeight = "1em", lx.style.verticalAlign = "middle", tY.appendChild(lx))
				}
			}(tY, yO.fj), aOB.appendChild(tY)
	}

	function aOA() {
		aO8 && (b.j.scrollTop = b.j.scrollHeight)
	}
	this.clear = function() {
		b.j.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var qS = vw.aAC(), cs = qS.length, aOB = document.createDocumentFragment(), a1 = 0; a1 < cs; a1++) aOC(aOB, qS[a1]);
		b.j.appendChild(aOB), aOA(), b.show(), this.resize(), aO8 = !0, aOA()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), b.j.style.padding = "0.4em " + r.bF.nO(bY.aDx)
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, this.pa = function(yO) {
		var aOB = document.createDocumentFragment();
		aOC(aOB, yO), b.j.appendChild(aOB), aOA()
	}, (b = new f(L(283), [new g("⬅️ " + L(1), function() {
		n.vI(1)
	})])).j.style.overflowY = "auto", b.j.addEventListener("scroll", function() {
		aO8 = b.j.scrollTop >= b.j.scrollHeight - b.j.clientHeight - 2
	})
}

function v2(data) {
	var hS, hT;

	function aOH(y, aOu) {
		if (!data.a6Q) {
			if (data.a6D) {
				if (aOu) return
			} else {
				if (!aOu) return;
				if (data.a5o < 1e4) return
			}
			var aOx, a3 = new a4,
				aOv = aOu && 1e5 <= data.a5o,
				aOw = a3.a5(aOu ? (aOv ? "⚠️ " : "") + L(424) : L(20)),
				iM = (aOv && (aOw.style.color = "yellow"), aOu ? a3.hr(L(425, [r.aI.hC(data.a5o, .01, 0)])) : ((aOx = new hZ({
					value: data.a6E,
					a9: -1
				})).cb.readOnly = !0, aOx.cb.type = "password", a3.aK(aOx), a3.aK(new hk([new g(L(359), function(cb) {
					return cb.textContent === L(359) ? (cb.textContent = L(360), aOx.cb.type = "text") : (cb.textContent = L(359), aOx.cb.type = "password"), !0
				}).button, new g(L(356), function(cb) {
					return r.bF.sz(aOx.cb), r.bF.hm(cb), !0
				}).button]))), a3.aE(L(aOu ? 20 : 426)).style.marginTop = "0.75em", new hZ({
					value: "",
					a9: -1
				}, 0, 0)),
				aOy = (iM.cb.type = "email", iM.cb.autocomplete = "email", iM.cb.name = "email", iM.cb.inputMode = "email", iM.cb.spellcheck = !1, a3.aK(iM), a3.aK(new hk([new g(L(427), function(cb) {
					return hW.hn.iN({
						action: 3,
						ga: iM.cb.value.trim().substring(0, 63)
					}), r.bF.hm(cb), !0
				}).button])), aOu && a3.hr(L(428)), a3.aE(L(429)).style.marginTop = "0.75em", new hZ({
					value: "",
					a9: -1
				}, 1));
			a3.aK(aOy), a3.aK(new hk([new g(L(430), function() {
				hW.hn.ho({
					action: 4,
					hp: "",
					value: Math.floor(+aOy.cb.value)
				}), n.aB(8, n.gp().ot, new jx(18))
			}).button])), y.push(a3)
		}
	}
	this.show = function() {
		data.a6Q && zK.zP("account", data.hp), hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(data.username, [new g("⬅️ " + L(1), function() {
		zK.clear(), n.p()
	}), new g(data.a6Q ? "🔄 " + L(329) : L(330), function() {
		n.aB(8, data.a6Q ? n.gp().ot : void 0, new jx(25, {
			action: 0,
			hp: data.hp,
			oj: data.oj
		}))
	}, 0, 0, 1)]), hT = new i(hS.j, function() {
		var y = [];
		aOH(y, 1), y.push(function() {
				var a3 = new a4;
				a3.a5(L(397)), data.a6D && (a3.aE("✅ " + L(398)).style.marginBottom = "0.75em");
				var aOr = data.a6A;
				aOr < 1 ? (a3.aE(L(399)), 0 === data.a69 ? a3.hr(L(400)) : 1 === data.a69 ? a3.hr(L(401)) : 2 === data.a69 ? a3.hr(L(402)) : 3 === data.a69 ? a3.hr(L(403)) : 4 === data.a69 ? a3.hr(L(404)) : 5 === data.a69 ? a3.hr(L(
					405)) : 6 === data.a69 ? a3.hr(L(406)) : a3.hr(L(407))) : (a3.aE(L(408)), aOr = aOr < 2 ? L(409) : aOr < 61 ? 2 === aOr ? L(410) : L(411, [aOr - 1]) : aOr < 84 ? 61 === aOr ? L(412) : L(413, [aOr - 60]) : aOr <
					255 ? 84 === aOr ? L(414) : L(415, [aOr - 83]) : L(416), a3.hr(aOr));
				{
					var hq, hb;
					a3.aK(new aFB), data.a6Q && (hq = a3.hr(), a3.aK(new hk([new g(b5.aOg.a1g(data.hp) ? L(417) : L(418), function(cb) {
						return b5.aOg.aOs(data.hp) ? (cb.textContent = L(417), hb(1)) : (cb.textContent = L(418), hb(0)), !0
					}).button])), hb = function(h2) {
						hq.textContent = h2 ? L(419) : ""
					}, b5.aOg.a1g(data.hp) && hb(1), a3.aK(new aFB))
				}
				var sr, iL = new hZ({
					value: data.username,
					a9: -1
				});
				iL.cb.readOnly = !0, a3.aK(iL), a3.aK(new hk([new g(L(356), function(cb) {
					return r.bF.sz(iL.cb), r.bF.hm(cb), !0
				}).button])), data.a6Q || a3.hr(L(420));
				(data.a6F || data.a6G || data.a6H) && (a3.aK(new aFB), a3.hr(L(421)), data.a6F && (a3.hr("• Account Timeout").style.color = "orange"), data.a6G && ((sr = a3.hr("• Muted")).style.color = "orange", sr.style.marginTop =
					"0.5em"), data.a6H) && ((sr = a3.hr("• Redacted")).style.color = "orange", sr.style.marginTop = "0.5em");
				data.a6Q && (a3.aK(new aFB), a3.aE(hW.b0.hX("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", a3.aK(new hk([new g(L(422), function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 0
					}), r.bF.hm(cb), !0
				}, bO.aOf).button])), a3.aK(new hk([new g(L(423), function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 1
					}), r.bF.hm(cb), !0
				}, bO.aOf).button])), a3.aK(new hk([new g("Cheater", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 2
					}), r.bF.hm(cb), !0
				}, bO.aOf).button])), a3.aK(new hk([new g("False Reporter", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 3
					}), r.bF.hm(cb), !0
				}, bO.aOf).button])), aOr = "CRTOR" === (aOr = b5.buffer.data[105].value) || "ADMIN" === aOr) && (a3.aK(new hk([new g("Block Account", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 4
					}), r.bF.hm(cb), !0
				}, bO.nS).button])), a3.aK(new hk([new g("Ban IP", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 5
					}), r.bF.hm(cb), !0
				}, bO.nS).button])), a3.aK(new hk([new g("Gold Seizure", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 6
					}), r.bF.hm(cb), !0
				}, bO.nS).button])), a3.aK(new hk([new g("Remove Punishments", function(cb) {
					return hW.hn.ho({
						action: 3,
						hp: data.hp,
						value: 7
					}), r.bF.hm(cb), !0
				}, bO.xu).button])));
				return a3
			}()),
			function(y) {
				var a3, iL, du, hf, a40, hd;
				data.a6Q && data.a6I && ((a3 = new a4).a5(L(354)), a3.hr(L(351)), (iL = new hZ({
					value: data.a6I,
					a9: -1
				})).cb.readOnly = !0, a3.aK(iL), du = !1, hf = new g(L(355), function(cb) {
					return du && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.aEl({
						action: 9,
						hp: data.hp
					}), b5.hi.hj(105, i3.oi.zO(data.hp, 5)), n.aB(8, n.vK(7).ot, new jx(18))), !0
				}, 1), a40 = new g(L(14), function(cb) {
					return cb.textContent === L(14) ? (du = !0, cb.textContent = L(15), hf.hg(0), hf.button.style.color = bO.hh) : hd(), !0
				}), a3.aK(new hk([a40.button])), hd = function() {
					du = !1, a40.button.textContent = L(14), hf.hg(1), hf.button.style.color = bO.bX
				}, a3.aK(new hk([hf.button])), y.push(a3))
			}(y),
			function(y) {
				var a3, hq, sc, aOz, hf, a40, hd;
				data.a6Q || ((a3 = new a4).a5(L(431)), (hq = a3.hr(data.a64.length + " / 160")).style.textAlign = "center", sc = !0, (aOz = new aG(0, 1, function(cb) {
					cb = cb.target.value.length;
					hq.textContent = cb + " / 160", 160 < cb ? sc && (sc = !1, a40.hg(1)) : sc || (sc = !0, a40.hg(0))
				})).cb.rows = 6, aOz.cb.style.fontSize = "1em", aOz.aH(data.a64), a3.aK(aOz), 0 !== data.a62 ? (a40 = new g(L(432), function() {
					if (!sc) return !0;
					n.aB(8, n.gp().ot, new jx(29, {
						action: 1,
						ga: aOz.u().substring(0, 160)
					}))
				}, 0, 0, 1), a3.aK(new hk([a40.button])), a3.aK(new hk([new g(1 === data.a62 ? L(433) : L(434), function() {
					n.aB(8, n.gp().ot, new jx(29, {
						action: 0,
						ga: ""
					}))
				}, 0, 0, 1).button])), a3.hr(1 === data.a62 ? L(435, [data.a65 - 1]) : L(436, [data.a65 - 1])), a3.hr(L(437, [data.a63]))) : (hf = new g(L(355), function() {
					if (!aOz.cb.readOnly) return !0;
					n.aB(8, n.gp().ot, new jx(29, {
						action: 1,
						ga: aOz.u().substring(0, 160)
					}))
				}, 1), a40 = new g(L(14), function(cb) {
					if (cb.textContent === L(14)) {
						if (!sc) return !0;
						cb.textContent = L(15), aOz.cb.readOnly = !0, hf.hg(0), hf.button.style.color = bO.hh
					} else hd();
					return !0
				}), a3.aK(new hk([a40.button])), a3.hr(L(437, [data.a63])), hd = function() {
					a40.button.textContent = L(14), aOz.cb.readOnly = !1, hf.hg(1), hf.button.style.color = bO.bX
				}, a3.aK(new hk([hf.button]))), y.push(a3))
			}(y),
			function(y) {
				var a3;
				data.a6Q && 0 !== data.a62 && ((a3 = new a4).a5(L(438)), a3.aP0(data.a64), a3.aK(new hk([new g(L(439, 0, "Report"), function(cb) {
					return hW.b0.hl(0) && (r.bF.hm(cb), hW.hn.aEl({
						action: 5,
						hp: data.hp
					})), !0
				}, 0, 0, 1).button])), y.push(a3))
			}(y), y.push(function() {
				var a3 = new a4,
					aOb = (a3.a5(L(331)), a3.aE(hW.b0.hX("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(332), L(333), L(334), L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345)]),
					n1 = data.a66;
				return a3.aE(L(346) + r.aI.hC(data.a5o, .01, 2) + "<br>" + L(347) + (n1 + 1) + " / " + data.a5n + "<br>" + L(348) + aOb[function(n1, a5o) {
					if (n1 < 10) return 0;
					if (n1 < 30) return 1;
					if (n1 < 60) return 2;
					if (3e4 <= (a5o = hA.iV(a5o, 100))) return 3;
					if (12e3 <= a5o) return 4;
					if (7e3 <= a5o) return 5;
					if (3e3 <= a5o) return 6;
					if (1e3 <= a5o) return 7;
					if (500 <= a5o) return 8;
					if (200 <= a5o) return 9;
					if (70 <= a5o) return 10;
					if (20 <= a5o) return 11;
					if (3 <= a5o) return 12;
					return 13
				}(n1, data.a5o)]), a3
			}()), data.a6Q && y.push(function() {
				var a3 = new a4,
					iL = (a3.a5(L(349)), a3.aE(hW.b0.hX("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new hZ({
						value: b5.buffer.data[147].value,
						a9: -1
					}, 1, void 0, function(cb) {
						b5.hi.hj(147, hb(cb.target.value))
					})),
					hf = (a3.aK(iL), new g(L(16), function(cb) {
						return iL.cb.readOnly && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.ho({
							action: 0,
							hp: data.hp,
							value: parseInt(b5.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					a40 = new g(L(14), function(cb) {
						return cb.textContent === L(14) ? (cb.textContent = L(15), iL.cb.readOnly = !0, hf.hg(0), hf.button.style.color = bO.hh, b5.hi.hj(147, iL.cb.value), hb(b5.buffer.data[147].value)) : hd(), !0
					}),
					hq = (a3.aK(new hk([a40.button])), a3.hr()),
					hb = function(h2) {
						return hq.innerHTML = n.b0.hs(h2, b5.buffer.data[105].value, data.hp), h2
					},
					hd = function() {
						a40.button.textContent = L(14), iL.cb.readOnly = !1, hf.hg(1), hf.button.style.color = bO.bX
					};
				return hb(b5.buffer.data[147].value), a3.aK(new hk([hf.button])), a3
			}());
		y.push(function() {
			var a3 = new a4,
				iL = (a3.a5(L(19)), new hZ({
					value: data.hp,
					a9: -1
				})),
				aOd = (iL.cb.readOnly = !0, a3.aK(iL), a3.aK(new hk([new g(L(356), function(cb) {
					return r.bF.sz(iL.cb), r.bF.hm(cb), !0
				}).button])), a3.aK(new aFB), new hZ({
					value: data.hp,
					a9: -1
				}));
			return a3.aK(aOd), a3.aK(new hk([new g(L(357), function(cb) {
				n.aB(8, n.gp().ot, new jx(25, {
					action: 0,
					hp: aOd.cb.value,
					oj: 0
				}))
			}).button])), a3
		}()), data.a6Q || (y.push(function() {
			var a3 = new a4,
				aOe = (a3.a5(L(358)), new hZ(b5.buffer.data[106])),
				customPasswordInput = (aOe.cb.readOnly = !0, aOe.cb.type = "password", a3.aK(aOe), a3.aK(new hk([new g(L(359), function(cb) {
					return cb.textContent === L(359) ? (cb.textContent = L(360), aOe.cb.type = "text") : (cb.textContent = L(359), aOe.cb.type = "password"), !0
				}).button, new g(L(356), function(cb) {
					return r.bF.sz(aOe.cb), r.bF.hm(cb), !0
				}).button])), new hZ({
					value: "",
					a9: -1
				}));
			return customPasswordInput.cb.placeholder = "Custom new password (optional)", a3.aK(customPasswordInput), a3.aK(new hk([new g(L(361), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.cb.value) && n.aB(8, n.gp().ot, new jx(15))
			}).button])), a3.a5(L(362), "0.8em"), a3.hr(L(363)), a3.hr(L(364)), a3.hr(L(365)), a3
		}()), y.push(function() {
			var a3 = new a4;
			return a3.a5(L(366)), a3.aK(new hk([new g(L(367), function() {
				n.aB(6, n.gp().ot)
			}).button])), a3.aK(new hk([new g(L(368), function() {
				b5.hi.hj(105, ""), n.aB(8, n.gp().ot, new jx(18))
			}).button])), a3.aK(new hk([new g(L(369) + b5.buffer.data[105].value, function() {
				n.aB(4, 0, new uT(L(370), L(371), !0, [new g("⬅️ " + L(1), function() {
					n.aB(7, n.vK(7).ot)
				})]))
			}, bO.aOf).button])), a3
		}()), y.push(function() {
			function aOj(a9) {
				aOi[0].hg(0 === a9 ? bO.u1 : bO.ug), aOi[1].hg(0 === a9 ? bO.u1 : bO.aOf)
			}
			var aOh, aOi, a3 = new a4;
			a3.a5(L(375)), a3.hr(L(376)), b5.b0.aOn();
			return aOi = [new g(L(377), function() {
				var a9 = Math.min(b5.buffer.data[117].value, aOh.aOl.length - 1);
				a9 < 1 || (a9 = b5.b0.uL(a9), b5.hi.hj(105, a9.hp), b5.hi.hj(106, a9.password), n.aB(8, n.gp().ot, new jx(18)))
			}, bO.u1, 1), new g(L(374), function() {
				var a9 = Math.min(b5.buffer.data[117].value, aOh.aOl.length - 1);
				if (!(a9 < 1)) {
					aOh.aOl[a9].remove(), aOh.aOl.splice(a9, 1);
					for (var a1 = a9; a1 < aOh.aOl.length; a1++) aOh.aOl[a1].name = "" + a1;
					b5.b0.aOo(a9), a9 = b5.buffer.data[117].value, aOh.aOl[a9].textContent = aOh.aOl[a9].textContent.replace("⚪", "🟢"), aOj(a9)
				}
			}, bO.u1, 1)], aOh = new a8(b5.buffer.data[117], aOj), __fx.savedAccounts.decorate(aOh.aOl, b5.buffer.data[117].a6), aOj(0), aOh.aOl[0].style.marginTop = "0.5em", a3.a7(aOh), a3.aK(new hk([aOi[0].button])), a3.aK(
				new hk([new g("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(b5.buffer.data[117].value)
				}).button])), a3.aK(new hk([aOi[1].button])), a3
		}()));
		return y.push(function() {
				var a3 = new a4,
					aOb = (a3.a5(L(381)), [L(382), L(383), L(384), L(385)]),
					n1 = data.a67;
				return a3.aE(L(386) + (data.a68 / 100).toFixed(2) + "<br>" + L(347) + (n1 + 1) + " / " + data.a5n + "<br>" + L(348) + aOb[n1 < 10 ? 0 : n1 < 50 ? 1 : n1 < 200 ? 2 : 3]), a3
			}()), y.push(function() {
				var a3 = new a4;
				return a3.a5(L(378)), a3.aE(L(379) + r.aI.hC(data.a5k, .1, 1) + "<br>" + L(347) + (data.a5l + 1) + " / " + data.a5n + "<br>" + L(380) + data.a5m), a3
			}()),
			function(y) {
				var a3 = new a4,
					aP1 = data.a5r,
					aP2 = (a3.a5(L(440)), a3.aE(L(441, [data.a5p.length ? "[" + data.a5p + "]" : "-"])), a3.aE(L(442, [r.aI.hC(aP1, .01, 2)])), a3.aE(L(443, [data.a5t + 1 + " / " + data.a5n])), data.a5u),
					aP3 = (a3.aE(L(444, [r.aI.hC(aP2, .1, 1)])), data.a5w);
				a3.aE(L(445, [aP3])), a3.aE(L(446, [r.aI.hC(aP2 / Math.max(aP3, 1), .1, 2)])), aP1 = data.a5s, a3.a5(L(447), "0.8em"), a3.aE(L(441, [data.a5q.length ? "[" + data.a5q + "]" : "-"])), a3.aE(L(442, [r.aI.hC(aP1, .01, 2)])), aP2 =
					data.a5v, a3.aE(L(444, [r.aI.hC(aP2, .1, 1)])), aP3 = data.a5x, a3.aE(L(445, [aP3])), a3.aE(L(446, [r.aI.hC(aP2 / Math.max(aP3, 1), .1, 2)])), a3.aE(hW.b0.hX("/wiki/clans"), "0.75em").style.marginTop = "0.8em", y.push(a3)
			}(y),
			function(y) {
				var a3 = new a4;
				a3.a5(L(448)), a3.aE(L(386) + (data.a60 / 10).toFixed(1) + "<br>" + L(348) + (data.a61.length ? L(449, [data.a61]) : L(450))), data.a6Q && a3.aK(new hk([new g(L(395), function(cb) {
					return hW.b0.hl(0) && (r.bF.hm(cb), hW.hn.aEl({
						action: 4,
						hp: data.hp
					})), !0
				}, 0, 0, 1).button]));
				a3.aE(hW.b0.hX("/wiki/clans"), "0.75em").style.marginTop = "0.8em", y.push(a3)
			}(y), y.push(function() {
				var a3 = new a4;
				{
					var iL, a40, aOp, hq, hb, hd;
					a3.a5(L(393)), a3.aE(L(394) + data.a5y + "<br>" + L(347) + (data.a5z + 1) + " / " + data.a5n + "<br>" + L(348) + oq.n3(data.a5z)), data.a6Q && ((iL = new hZ({
						value: b5.buffer.data[157].value,
						a9: -1
					}, 1, void 0, function(cb) {
						b5.hi.hj(157, hb(cb.target.value))
					})).cb.style.marginTop = "0.6em", a3.aK(iL), a40 = new g(L(14), function(cb) {
						return cb.textContent === L(14) ? (cb.textContent = L(15), iL.cb.readOnly = !0, aOp[0].hg(0), aOp[0].button.style.color = bO.hh, hb(b5.buffer.data[157].value)) : hd(), !0
					}), a3.aK(new hk([a40.button])), aOp = [new g(L(395), function(cb) {
						return iL.cb.readOnly && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.ho({
							action: 1,
							hp: data.hp,
							value: hA.hB(parseInt(b5.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], hq = a3.hr(), hb = function(h2) {
						return h2 = r.cz.aOq(h2, 2, 3e4), hq.textContent = L(396, [h2 - 1, h2, b5.buffer.data[105].value]), h2
					}, a3.aK(new hk([aOp[0].button])), hd = function() {
						a40.button.textContent = L(14), iL.cb.readOnly = !1, aOp[0].hg(1), aOp[0].button.style.color = bO.bX
					}, hb(b5.buffer.data[157].value))
				}
				return a3
			}()),
			function(y) {
				var a3, sy;
				data.a6Q && !data.a6J || (0 === b2.id || data.a6Q || data.a6J) && ((a3 = new a4).a5("Patreon"), !data.a6Q && data.a6K ? a3.aK(new hk([new g(L(359), function() {
					hW.hn.aEl({
						action: 7,
						hp: data.hp
					}), data.a6K = 0, n.aB(7)
				}).button])) : data.a6J ? (a3.aE(L(451, [(data.a6L / 100).toFixed(2)]) + "<br>" + L(452, [1 + data.a6M + " / " + data.a6N]) + "<br>" + L(453, [data.a6O ? L(454) : L(455)])), data.a6Q || a3.aK(new hk([new g(L(456),
					function() {
						hW.hn.aEl({
							action: 8,
							hp: data.hp
						}), data.a6J = 0, b5.hi.hj(160, 0), n.aB(7)
					}).button]))) : (a3.aE(L(457), "0.75em").style.marginBottom = "0.3em", a3.aE("  • " + L(458), "0.75em").style.whiteSpace = "pre", a3.aE("  • " + L(459), "0.75em").style.whiteSpace = "pre", a3.aE("  • " + L(460),
						"0.75em").style.whiteSpace = "pre", a3.aE(L(461), "0.75em").style.marginTop = "1.0em", a3.aE(L(462), "0.75em").style.marginTop = "1.0em", a3.aE("<a href='" + aD7.aDA +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", sy = "https://www.patreon.com/oauth2/authorize?state=" + data.hp +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + hW.b0.aHi() + "/", a3.aE(L(463), "0.75em").style.marginTop = "1.0em", a3.aE("<a href='" +
						sy + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.a6Q || (a3.aK(new aFB), a3.aK(new hk([new g(L(360), function() {
						hW.hn.aEl({
							action: 6,
							hp: data.hp
						}), data.a6K = 1, n.aB(7)
					}).button])), a3.aE(L(464), "0.75em").style.marginTop = "0.75em")), y.push(a3))
			}(y), y.push(function() {
				var a3 = new a4,
					aOb = (a3.a5(L(387)), [L(388), L(389), L(390), L(391), "Scout", L(392)]),
					n1 = data.a6B;
				return a3.aE(L(386) + (data.a6C / 100).toFixed(2) + "<br>" + L(347) + (n1 + 1) + " / " + data.a5n + "<br>" + L(348) + aOb[n1 < 3 ? 0 : n1 < 20 ? 1 : n1 < 100 ? 2 : n1 < 500 ? 3 : n1 < 2e3 ? 4 : 5]), a3.aE(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", a3
			}()),
			function(y) {
				var a3, iL, aOd, hf, a40, hd;
				data.a6Q || ((a3 = new a4).a5(L(350)), a3.hr(L(351)), iL = new hZ({
					value: b5.buffer.data[184].value,
					a9: -1
				}, 1, void 0, function(cb) {
					b5.hi.hj(184, cb.target.value)
				}), a3.aK(iL), a3.hr(L(352)), aOd = new hZ({
					value: b5.buffer.data[185].value,
					a9: -1
				}, 0, void 0, function(cb) {
					b5.hi.hj(185, cb.target.value)
				}), a3.aK(aOd), hf = new g(L(353), function(cb) {
					return iL.cb.readOnly && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.ho({
						action: 5,
						hp: b5.buffer.data[185].value,
						value: hA.hB(parseInt(b5.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), a40 = new g(L(14), function(cb) {
					return cb.textContent === L(14) ? (cb.textContent = L(15), iL.cb.readOnly = !0, aOd.cb.readOnly = !0, hf.hg(0), hf.button.style.color = bO.hh, b5.hi.hj(184, iL.cb.value)) : hd(), !0
				}), a3.aK(new hk([a40.button])), hd = function() {
					a40.button.textContent = L(14), iL.cb.readOnly = !1, aOd.cb.readOnly = !1, hf.hg(1), hf.button.style.color = bO.bX
				}, a3.aK(new hk([hf.button])), y.push(a3))
			}(y),
			function(y) {
				var a3, aOh, aOi, a9, aOj;
				data.a6Q || b5.aOg.get().length && ((a3 = new a4).a5(L(372)), a9 = 0, aOj = function() {
					var oR = b5.aOg.get().length;
					aOi[0].hg(a9 === oR ? bO.u1 : bO.ug), aOi[1].hg(a9 === oR ? bO.u1 : bO.aOf)
				}, aOi = [new g(L(373), function() {
					n.aB(8, void 0, new jx(25, {
						action: 0,
						hp: b5.aOg.get()[a9],
						oj: 0
					}))
				}, bO.u1, 1), new g(L(374), function() {
					b5.aOg.aOk(a9), aOh.aOl[a9].remove(), aOh.aOl.splice(a9, 1);
					for (var a1 = a9; a1 < aOh.aOl.length; a1++) aOh.aOl[a1].name = "" + a1;
					b5.aOg.get().length && (a9 = Math.max(a9 - 1, 0), aOh.aOl[a9].textContent = aOh.aOl[a9].textContent.replace("⚪", "🟢")), aOj()
				}, bO.u1, 1)], aOj(), aOh = new a8(b5.aOg.aOm(), function(a1) {
					a9 = a1, aOj()
				}), __fx.followedAccounts.decorate(aOh.aOl, b5.aOg.get()), aOh.aOl[0].style.marginTop = "0.5em", a3.a7(aOh), a3.aK(new hk([aOi[0].button])), a3.aK(new hk([new g("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(a9)
				}).button])), a3.aK(new hk([aOi[1].button])), y.push(a3))
			}(y), aOH(y, 0), y
	}())
}

function aEQ() {
	var ga;
	10 === dR.qg ? ga =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === dR.qg ? ga =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === dR.qg ? ga =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === dR.qg ? ga =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === dR.qg ? ga =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === dR.qg ? ga =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === dR.qg ? ga =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === dR.qg ? ga =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === dR.qg ? ga =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === dR.qg ? ga =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === dR.qg ? ga =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === dR.qg ? ga =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === dR.qg && (ga =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new aP4).i5(ga)
}

function aMv(a5T, tp, aP5) {
	this.tY = document.createElement("div"), this.nK = a5T;
	var aP6 = 0;
	this.resize = function(a8Y, aP7) {
		var cs = a5T.length;
		if (!aP5)
			for (var a1 = 1; a1 < cs; a1++) r.bF.kB(a5T[a1].button, 4);
		for (var aP8 = 0, a1 = 0; a1 < cs; a1++) aP8 += a5T[a1].button.offsetWidth;
		if (a8Y && (aP6 = a8Y.offsetWidth), aP7 && aP8 < aP6)
			for (a1 = 0; a1 < cs; a1++) a5T[a1].button.style.width = (100 * a5T[a1].button.offsetWidth / aP8).toFixed(2) + "%";
		else
			for (a1 = 0; a1 < cs; a1++) a5T[a1].button.style.width = "auto";
		aP7 || this.resize(a8Y, 1)
	};
	var aJM = this;
	aJM.tY.style.height = aJM.tY.style.maxHeight = "100%";
	for (var a1 = 0; a1 < a5T.length; a1++) a5T[a1].hg(tp), a5T[a1].button.style.height = "100%", a5T[a1].button.style.padding = "0.0em 0.9em", a5T[a1].button.style.whiteSpace = "pre", aJM.tY.appendChild(a5T[a1].button)
}

function a8D() {
	this.size = 0, this.a9 = 0, this.mH = null, this.az = function(mH) {
		this.a9 = 0, this.mH = mH, this.size = mH.length
	}, this.wx = function(aP9) {
		return this.az(new Uint8Array(this.hz(aP9))), this.mH
	}, this.ln = function() {
		this.mH = null
	}, this.wy = function(size, aPA) {
		for (var mH = this.mH, bz = this.a9 + size - 1, a1 = this.a9; a1 <= bz; a1++) mH[a1 >> 3] |= (aPA >> bz - a1 & 1) << 7 - (7 & a1);
		this.a9 += size, this.a9 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aBd = function(size, aPA) {
		var fv = size >> 1,
			gM = 1 << fv;
		this.wy(size - fv, hA.iV(aPA, gM)), this.wy(fv, aPA % gM)
	}, this.aPB = function(size) {
		for (var mH = this.mH, bz = this.a9 + size, a1 = this.a9; a1 < bz; a1++) mH[a1 >> 3] &= 255 ^ 128 >>> (7 & a1)
	}, this.hz = function(aP9) {
		return aP9 + 7 >> 3
	}, this.aPC = function(dC, gI, bz, aPD) {
		for (var a1 = gI; a1 < bz; a1++) this.wy(aPD, dC[a1])
	}
}

function aIn(bJ) {
	kH && !bJ || (aHx(), hA = new a90, aD7 = new aPL, r = new aPM, bO = new aPN, q = new yR, nD = new sN, oh = new aPO, i3 = new aPP, v = new a4r, z1 = new aPQ, z2 = new a9R, cM = new aPR, yv = new aPS, yw = new dc, aPE = new aCE, cd = new aPT, j9 =
		new mN, g5 = new vM, kF = new aPU, yz = new xT, l9 = new qR, mS = new aPV, cl = new aPW, kD = new aLu, yP = new aPX, mX = new aT, jK = new aPY, z0 = new a5H, a19 = new a6e, uW = new aPZ, jz = new a18, bl = new gO, eb = new aPa, aIt =
		new a0O, ct = new aLj, ym = new a6S, aLZ = new a9c, yB = new aMb, yl = new aPb, pQ = new aPc, ez = new dx, b7 = new a8E, yn = new aCm, yi = new qr, et = new ht, wi = new aGS, aER = new aPd, aH3 = new aGr, hW = new kQ, r2 = new aPe, yt =
		new aEq, ys = new aE2, aPF = new cT, zA = new a15, bD = new aPf, gv = new ou, aGn = new aPg, z6 = new aHy, wq = new aDT, aIv = new a43, z4 = new aPh, z5 = new aGJ, lq = new ll, z7 = new aAD, z8 = new aFt, jd = new aPi, jR = new aF4, j1 =
		new aJ9, hy = new a8D, aBQ = new aPj, hx = new aPk, zK = new zG, c9 = new aPl, f7 = new aPm, il = new aDf, d7 = new dB, yy = new aFC, aPG = new aIp, pc = new a0x, dR = new aEH, aPH = new aLP, n = new us, yh = new te, b2 = new aPn, kH =
		new qB, a0j = new sG, b5 = new aPo, aC = new a3M, d5 = new aPp, aEB = new px, jE = new aPq, y5 = new aPr, aPI = new aGp, dg = new aIP, mb = new ko, bL = new aPs, pp = new aDE, bY = new aPt, a88 = new uH, aPJ = new aIM, tb = new aPu, uN =
		new aPv, a4E = new aIy, vw = new aA8, aLX = new aEm, a4Q = new aLl, uj = new aKX, kH.az(), b2.az(), bD.gw(), b5.az(), nD.az(), nD.sX(), (xO = new xJ).az(), r.az(), y5.az(), hW.az(), oh.az(), i3.az(), dR.az(), n.az(), gs = new aEC, bD
	.az(), bL.az(), bY.az(), aPI.az(), a1E = new aPx, r2.az(), yl.aPy(), yh.az(), wi.az(), jz.az(), kD.az(), yn.az(), c9.az(), bl.az(), bL.cC = !0, setTimeout(function() {
			dR.wx(2, 14071)
		}, 0), n.aB(5, 5), zK.zH() || b2.b3.aPz(), bD.aQ0(), kH.qQ = 1)
}

function aPV() {
	var dt, c4, aQ1, canvas, b9, l2, aI3, hK, mO, oz, aQ2 = 11 / 12;

	function aQ4() {
		var xq = Math.floor(aI3 * (dt - 2 * aQ1)),
			aQ6 = 1 + Math.floor(.0625 * mS.du),
			aQ7 = 1 + Math.floor(.3 * mS.du),
			kt = Math.floor(.55 * mS.du);
		b9.clearRect(0, 0, dt, mS.du), b9.fillStyle = bO.bR, b9.fillRect(0, 0, aQ1, mS.du), b9.fillRect(aQ1 + xq, 0, dt - aQ1 - xq, mS.du), b9.fillStyle = aI3 < 1 / 3 ? "rgba(" + Math.floor(3 * aI3 * 130) + ",130,0,0.85)" : aI3 < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (aI3 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (aI3 - 2 / 3) * 130) + ",0.85)", b9.fillRect(aQ1, 0, xq, mS.du), b9.fillStyle = bO.bX, b9.fillRect(0, 0, dt, 1), b9.fillRect(0, mS
				.du - 1, dt, 1), b9.fillRect(0, 0, 1, mS.du), b9.fillRect(aQ1, 0, 1, mS.du), b9.fillRect(aQ1 + xq, 0, 1, mS.du), b9.fillRect(dt - aQ1, 0, 1, mS.du), b9.fillRect(dt - 1, 0, 1, mS.du), b9.fillRect(Math.floor(.25 * mS.du) + aQ7, Math
				.floor((mS.du - aQ6) / 2), mS.du - 2 * aQ7, aQ6), b9.fillRect(Math.floor(dt - 1.25 * mS.du) + aQ7, Math.floor((mS.du - aQ6) / 2), mS.du - 2 * aQ7 - aQ7 % 2, aQ6), b9.fillRect(Math.floor(dt - 1.25 * mS.du) + Math.floor((mS.du - aQ6) /
				2), aQ7, aQ6, mS.du - 2 * aQ7 - aQ7 % 2), hK = r.cz.a6Y(q.bS, mS.y8()), b9.fillText(r.aI.eh(hK) + " (" + r.aI.h7(100 * aI3, +(aI3 < .1)) + ")", Math.floor(.5 * dt), kt)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		aI3 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => mS.aQE(arg1);

	function aQC(f0) {
		return !(1 < f0 && 1 === aI3 || (1 < f0 && f0 * aI3 - aI3 < 1 / 1024 ? f0 = (aI3 + 1 / 1024) / aI3 : f0 < 1 && aI3 - f0 * aI3 < 1 / 1024 && (f0 = (aI3 - 1 / 1024) / aI3), aI3 = hA.hB(aI3 * f0, 1 / 1024, 1), aQ4(), 0))
	}

	function aQD(f1) {
		return aI3 !== (aI3 = hA.hB((f1 - c4 - aQ1) / (dt - 2 * aQ1), 1 / 1024, 1)) && (aQ4(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aQ4(), bL.cC = !0
	}, this.bp = 0, this.aLS = !1, this.az = function() {
		l2 = !q.cJ && !q.cL, oz = !1, aI3 = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (b5.buffer.data[182].value + 1) / 1024, hK = 0, this.aLS = !1, this.resize()
	}, this.resize = function() {
		b2.b3.b4() && bD.dt < .8 * bD.du ? (this.du = Math.floor(.066 * bD.bE), dt = bD.dt - 4 * bY.gap - this.du) : (dt = Math.floor((b2.b3.b4() ? .65 : .389) * bD.bE), dt += 12 - dt % 12, this.du = Math.floor(dt / 12)), aQ1 = Math.floor(3 *
			this.du / 2), mO = r.bF.bG(1, Math.floor(.5 * this.du)), (canvas = document.createElement("canvas")).width = dt, __fx.mobileKeybinds.setSize(dt, this.du, cS), canvas.height = this.du, (b9 = canvas.getContext("2d", {
			alpha: !0
		})).font = mO, r.bF.textBaseline(b9, 1), r.bF.textAlign(b9, 1), this.aQ3(), aQ4()
	}, this.aQ3 = function() {
		c4 = b2.b3.b4() && bD.dt < .8 * bD.du ? this.du + 3 * bY.gap : Math.floor((bD.dt - dt) / 2), this.bp = bD.du - this.du - pp.pq() * bY.gap
	}, this.bI = function() {
		oz && (oz = !1, aQ4())
	}, this.l2 = function() {
		return !(!l2 || j9.jA && c4 < Math.floor(bY.gap + 5.5 * this.du))
	}, this.pm = function(aJE) {
		return !!this.l2() && c4 + dt > bD.dt - aJE - bY.gap
	}, this.a6x = function() {
		l2 = !q.cL
	}, this.pL = function() {
		l2 = !1
	}, this.y8 = function() {
		return hA.hB(Math.floor(1024 * aI3 + .5) - 1, 0, 1023)
	}, this.a0N = function(f1, f2) {
		return this.l2() && c4 < f1 && f1 < c4 + dt && f2 > this.bp
	}, this.c3 = function(f1, f2) {
		if (!this.l2()) return !1;
		if (!(__fx.settings.keybindButtons && f2 > this.bp - Math.floor(bY.gap / 4) - this.du && f2 < this.bp - Math.floor(bY.gap / 4) && __fx.mobileKeybinds.click(f1 - c4))) {
			if (!mS.a0N(f1, f2)) return !1;
			cl.aQA = !1, ! function(aJM, f1, f2) {
				if (function(f1, f2) {
						return c4 < f1 && f1 < c4 + aQ1 && f2 > mS.bp
					}(f1, f2)) return aQC(aQ2);
				if (function(f1, f2) {
						return c4 + dt - aQ1 < f1 && f1 < c4 + dt && f2 > mS.bp
					}(f1, f2)) return aQC(1 / aQ2);
				return aJM.aLS = !0, aQD(f1)
			}(this, f1, f2) || (bL.cC = !0)
		}
		return !0
	}, this.aQE = function(gH) {
		0 !== q.cf && this.l2() && aQC(gH) && (bL.cC = !0)
	}, this.cO = function(deltaY) {
		var gH;
		return !(0 === deltaY || !this.l2()) && aQC(gH = 0 < deltaY ? (gH = 400 / (400 + deltaY)) < aQ2 ? aQ2 : gH : 1 / aQ2 < (gH = (400 - deltaY) / 400) ? 1 / aQ2 : gH)
	}, this.cF = function(f1) {
		return !!this.aLS && aQD(f1)
	}, this.aQF = function() {
		this.aLS = !1
	}, this.bs = function() {
		this.l2() && hK !== r.cz.a6Y(q.bS, this.y8()) && (oz = !0)
	}, this.cR = function() {
		this.l2() && (cS.drawImage(canvas, c4, this.bp), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(cS, c4, this.bp)
	}
}

function sQ() {
	this.L84 = ["Bot Difficulty", "Back", "Options", "Uniform", "Mixed", "Team dependent", "Customized", "Team", "Player Count", "LEADERBOARD", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send",
		"Send gold only to trusted accounts!", "Account Recovery", "Account Name", "Email", "Request Email", "Spawning", "Random", "Clustered", "Manual Spawn", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name",
		"Admin Election", "Blockchain", "Clan Leader Election", "📜 Logs", "Territory", "Income", "Growth", "Numbers", "Statistics", "Quit Game", "More", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator",
		"Head Admin", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Players", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Richest Players", "Patreon Members", "Zombie Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan",
		"Rating", "Leader", "Time Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "{0} called the peace vote.", "{0} voted for peace.",
		"{0} rejected peace.", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "⚔️ Play", "Map", "Settings", "Game Mode", "Colors", "Player Names", "Kingdom Names", "Simple Names", "Additional Income", "Default",
		"Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!",
		"You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}",
		"Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ",
		"{0} defeated {1}!", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo",
		"Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.",
		"Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Incoming Boat!", "Incoming Ship!", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Clan Chart", "🔑 Show Account",
		"🚩 Report Abuse", "💬 Mention", "Adjust", "My Color", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Lobby", "🔑 My Account", "🏆 Leaderboards", "📈 Clan Charts", "📰 Propaganda",
		"⚔️ Join Lobby 2", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "You are leaving Territorial.io.", "Selectable Name", "Replay Error", "Warning",
		"Loading...", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs",
		"Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "You earned {10} gold!", "{0} earned {11} gold!", "second played", "seconds played", "Battle Royale", "1v1", "Zombie",
		"Chat", "Close {button}", "Ready", "Next Game", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf",
		"Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy", "Copy", "Search", "Password",
		"Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User",
		"Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Humans", "Bots", "Spectators", "Threshold", "Time", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Loading",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!",
		"You earned an additional {10} gold because you played for {1}.", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"Propaganda", "Report Abuse", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch", "Team {0}", "Team {0} won the game!", "Contest", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}",
		"Gold to be Received: {10}", "Ship launched!", "Ship intercepted!", "Clans", "Clan Members", "Admins", "1v1 Players", "Type your message here...", "Activated", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "You are leaving Territorial.io!"
	]
}

function gu() {
	this.l2 = !1;
	this.fo = [], this.fn = 100;
	var cU, cV, gap, fk, aQG, aQI, aQJ = 0,
		aQK = new Array(9),
		aQL = [],
		aQM = [],
		aQN = 0,
		aQO = 0,
		aQP = 0,
		aQQ = 0;

	function aQX() {
		aQK.sort(function(bN, fv) {
			return fv.qT - bN.qT
		});
		for (var ga = "" + aQK[0].fj, a1 = 1; a1 < 9; a1++) ga += "," + aQK[a1].fj;
		for (a1 = 0; a1 < 9; a1++) ga += "," + aQK[a1].qT;
		b5.buffer.aLM(120, ga)
	}
	this.az = function() {
		for (var aQR = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a1 = 0; a1 < aQR.length; a1++) {
			var color = 6 === aQR[a1] ? bO.aQS : bO.xp;
			this.fo.push(r.canvas.p6(bl.get(3), aQR[a1], color))
		}
		for (a1 = 0; a1 < et.eu.fp; a1++) aQM.push(et.eu.a9g - et.eu.fp + a1);
		for (a1 = 0; a1 < et.eu.a9f; a1++) aQM.push(et.eu.r5 + a1);
		var aQT = et.eu.a9k(aD7.aQT);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = aQT.slice(), a1 = 0; a1 < aQT.length; a1++) aQM.push(aQT[a1]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					aQK[q] = {
						fj: isNaN(qcode) ? 1015 + q : qcode,
						qT: 0
					}
				} else {
					var a1, dC = b5.buffer.data[120].value.split(",");
					if (18 !== dC.length)
						for (a1 = 0; a1 < 9; a1++) aQK[a1] = {
							fj: 1015 + a1,
							qT: 0
						};
					else
						for (a1 = 0; a1 < 9; a1++) {
							var h2 = parseInt(dC[a1]),
								aN = (h2 = 0 <= h2 && h2 < et.eu.a9g ? h2 : 0, parseInt(dC[a1 + 9]));
							aN = 0 <= aN && aN < 1e3 ? aN : 0, aQK[a1] = {
								fj: h2,
								qT: aN
							}
						}
				}
		}()
	}, this.show = function(f1, f2, aQY) {
		var a1;
		if (aQN = f1, aQO = f2, aQJ = aQY || 0, this.l2 = !0, aQL = [], 0 === aQJ)
			for (a1 = 0; a1 < 9; a1++) aQL.push(aQK[a1].fj);
		else {
			var fv = 49 * aQJ,
				aQY = fv - 49;
			for (aQY >= aQM.length && (aQJ = 1, aQY = 0, fv = 49), a1 = aQY = (fv = Math.min(fv, aQM.length)) - 49; a1 < fv; a1++) aQL.push(aQM[a1])
		}
		aQL.push(1024);
		aQY = aQL.length, fk = Math.floor((b2.b3.b4() ? .075 : .0468) * bD.bE), gap = Math.floor(fk / 3), (aQP = 10 * (aQG = fk + gap)) > bD.dt && (aQP = bD.dt, gap = (aQG = aQP / 10) - (fk = 3 * aQG / 4)), aQI = hA.iV(aQY, 10) + !!(aQY % 10), (
			aQQ = aQI * aQG) > bD.du && (aQQ = bD.du, gap = (aQG = aQQ / aQI) - (fk = 3 * aQG / 4)), aQY = .5 * gap;
		cU = Math.min(Math.max(f1 - .5 * aQP + aQY, aQY), bD.dt - aQP + aQY), cV = Math.min(Math.max(f2 - .5 * aQQ + aQY, aQY), bD.du - aQQ + aQY)
	}, this.c3 = function(f1, f2, player) {
		if (!this.l2) return !1;
		if (this.c5(f1, f2)) {
			f1 = hA.hB(hA.iV(f1 - cU + .5 * gap, aQG), 0, 9);
			if ((f1 += 10 * hA.hB(hA.iV(f2 - cV + .5 * gap, aQG), 0, 9)) >= aQL.length) return cd.aL(), !0;
			f2 = aQL[f1];
			if (1024 === f2) return this.show(aQN, aQO, aQJ + 1), !0;
			! function(fj) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var a1 = 0; a1 < 9; a1++) aQK[a1].qT = Math.floor(.99 * aQK[a1].qT);
					for (a1 = 0; a1 < 9; a1++)
						if (fj === aQK[a1].fj) return aQK[a1].qT = Math.min(aQK[a1].qT + 30, 999), aQX();
					aQK.splice(5, 0, {
						fj: fj,
						qT: Math.max(aQK[4].qT, 30)
					}), aQK.pop(), aQX()
				}
			}(f2), player === q.bS ? jd.pJ.wI(f2) : jd.cz.aQa(f2, player)
		}
		return cd.aL(), !0
	}, this.c5 = function(f1, f2) {
		return !(f1 < cU - .5 * gap || f2 < cV - .5 * gap || cU + aQP - .5 * gap <= f1 || cV + aQQ - .5 * gap <= f2)
	}, this.cR = function() {
		cS.fillStyle = bO.lC, cS.fillRect(cU - .5 * gap, cV - .5 * gap, aQP, aQQ);
		for (var aF = .5 * bY.bZ, cs = (cS.lineWidth = bY.bZ, cS.strokeStyle = cS.fillStyle = bO.bX, cS.strokeRect(cU - .5 * gap + aF, cV - .5 * gap + aF, aQP - 2 * aF, aQQ - 2 * aF), cS.imageSmoothingEnabled = !0, aQL.length), a1 = 0; a1 <
			cs; a1++) this.vx(aQL[a1], cS, cU + a1 % 10 * aQG, cV + hA.iV(a1, 10) * aQG, fk);
		cS.imageSmoothingEnabled = !1
	}, this.vx = function(fj, fF, c4, bp, fk) {
		var gF;
		fj >= 1024 - et.eu.fp ? (gF = fk / this.fn, fF.setTransform(gF, 0, 0, gF, c4, bp), fF.drawImage(this.fo[fj - 1024 + et.eu.fp], 0, 0), fF.setTransform(1, 0, 0, 1, 0, 0)) : (r.bF.textAlign(fF, 1), r.bF.textBaseline(fF, 1), fF.font = r.bF
			.bG(0, .89 * fk), fF.fillText(et.eu.fq(fj), c4 + .5 * fk, bp + (.35 - r.bF.fW + .56) * fk))
	}
}

function aPO() {
	this.oi = new aDa, this.iA = new aAo, this.i4 = new aQb, this.az = function() {
		this.oi.az()
	}
}

function kP(nK, a8Y) {
	var tY;
	this.resize = function() {
		for (var a1 = 0; a1 < nK.length; a1++) r.bF.kB(nK[a1].button);
		tY.style.gap = tY.style.padding = r.bF.nO(bY.aDx)
	}, (tY = document.createElement("div")).style.display = "grid", tY.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tY.style.overflowY = "auto", tY.style.gridAutoRows = "5.3em", tY.style.maxHeight = "100%";
	for (var a1 = 0; a1 < nK.length; a1++) nK[a1].tu(1), tY.appendChild(nK[a1].button);
	a8Y.appendChild(tY)
}

function j6() {
	ys.a1I(), cS.setTransform(fH, 0, 0, fH, 0, 0), cS.imageSmoothingEnabled = fH < 3, cS.drawImage(dR.t6, cl.q6(), cl.pH()), yy.aDh.cR(), cS.drawImage(xE, cl.q6(), cl.pH()), ys.cR(), il.cR(), ez.cR(), (q.cP ? (d5.cR(), j1) : (g5.cR(), mX.cR(), mS
	.cR(), j1.cR(), gv.cR(), jK.cR(), cl.cR(), l9.cR(), d5.cR(), yP.cR(), yz.cR(), j9.cR(), cd.cR(), z0.cR(), mb.cR(), zA)).cR(), n.cR()
}

function p9(b9, dt, du) {
	b9.clearRect(0, 0, dt, du), b9.fillStyle = bO.lC, b9.fillRect(0, 0, dt, du)
}

function pC(b9, dt, du, pF) {
	b9.fillStyle = bO.bX, b9.fillRect(0, 0, dt, pF), b9.fillRect(0, 0, pF, du), b9.fillRect(dt - pF, 0, pF, du), b9.fillRect(0, du - pF, dt, pF)
}

function pG(b9, c4, bp, fk, pF, cy, aQc) {
	b9.fillStyle = bO.bX;
	var cy = Math.floor(fk * cy),
		kq = (cy += (cy - pF) % 2, Math.floor((cy - pF) / 2)),
		fk = Math.floor((fk - cy) / 2);
	b9.fillRect(c4 + fk, bp + fk + kq, cy, pF), aQc && b9.fillRect(c4 + fk + kq, bp + fk, pF, cy)
}

function aPY() {
	var canvas, b9, c4, bp, aMD, aQe, gap, aQf, fontSize, aQg, l1, aQh, aQi, aQj, aQk, aQl, aQm, aQn;

	function aQr() {
		b9.clearRect(0, 0, jK.dt, jK.du), b9.fillStyle = bO.lC, b9.fillRect(0, 0, jK.dt, jK.du), b9.fillStyle = bO.pA, gF = 0 < aQl ? aQl : aQi[4] / 1e4, b9.fillRect(0, jK.du - aMD - 1, Math.floor(gF * jK.dt), aMD), b9.fillStyle = bO.bX, b9.fillRect(
			0, 0, jK.dt, 1), b9.fillRect(0, 0, 1, jK.du), b9.fillRect(jK.dt - 1, 0, 1, jK.du), b9.fillRect(0, jK.du - 1, jK.dt, 1), b9.fillRect(0, jK.du - aMD - 1, jK.dt, 1);
		for (var gF, aQs, bx = 0, a1 = 0; a1 < aQh.length; a1++) aQj[a1] ? (r.bF.textAlign(b9, 0), aQs = Math.floor((aQe - aMD + 2 * aQf) * (a1 - bx + 1) / (aQh.length + 1) - .7 * aQf), b9.fillText(aQh[a1], gap, aQs), r.bF.textAlign(b9, 2), 5 ===
			a1 && 0 !== b7.c0[q.bS] && b7.di[q.bS] >= yl.a6d(q.bS) ? (b9.fillStyle = bO.aQt, b9.fillText(aQp(a1), jK.dt - gap, aQs), b9.fillStyle = bO.bX) : b9.fillText(aQp(a1), jK.dt - gap, aQs)) : bx++
	}

	function aQp(a1) {
		return a1 < 3 ? aQi[a1].toString() : 3 === a1 || 4 === a1 || 5 === a1 ? r.aI.h7(aQi[a1] / 100, 2) : a1 < 7 ? r.aI.eh(aQi[a1]) : a1 === 7 ? jK.lc(aQi[7]) : a1 === 8 ? __fx.utils.getMaxTroops(b7.br, q.bS) : __fx.utils.getDensity(q.bS)
	}

	function aQo() {
		b7.br[q.bS] !== aQi[6] && (aQi[6] = b7.br[q.bS], aQg++)
	}
	this.az = function() {
		aQl = aQm = 0, (l1 = new Array(8))[0] = L(465), l1[1] = q.cK ? L(57) : L(466), l1[2] = L(467), l1[3] = L(468), l1[4] = L(83), l1[5] = L(37, 0, "Interest"), l1[6] = L(36), l1[7] = L(469),
			l1.push("Max Troops", "Density"), // add l1
			(aQh = new Array(l1.length)).fill(""), (aQi = new Array(l1.length))[0] = q.cK ? 0 : q.bq, aQi[1] = q.cK ? ct.cu : q.qz, aQi[2] = q.yW, aQi[3] = 0, aQi[4] = hA.iV(1e4 * b7.br[0], Math.max(q.pZ, 1)), aQi[5] = 0 === q.data.iIncomeType ?
			700 : 1 === q.data.iIncomeType ? hA.iV(700 * q.data.iIncomeValue, 64) : hA.iV(700 * q.data.iIncomeData[q.bS], 64), aQi[6] = 0, aQo(), aQi[7] = 0, aQk = aQp(6), (aQj = new Array(l1.length)).fill(!0), aQn = 0, aQn = q.cK ? (aQj[0] = !1,
				aQj[2] = !1, aQj[3] = !1, 3) : (aQj[3] = !1, 1), aQg = 0, this.resize()
	}, this.resize = function() {
		this.dt = Math.floor((b2.b3.b4() ? .1646 : .126) * 1.25 * bD.bE), this.du = Math.floor(1.18 * this.dt), aMD = Math.floor(.04 * this.dt), gap = Math.floor(.035 * this.dt), aQf = .04 * this.dt, aQe = this.du, this.du -= Math.floor(aQn * (
			this.du - 2 * aMD) / l1.length), fontSize = Math.floor(.7 * (aQe - aMD) / l1.length);
		var mO = r.bF.bG(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.dt, canvas.height = this.du,
			function(mO, dt) {
				for (var a1 = 0; a1 < aQh.length; a1++) aQh[a1] = r.b9.bA(l1[a1], mO, dt)
			}((b9 = canvas.getContext("2d", {
				alpha: !0
			})).font = mO, .575 * this.dt), r.bF.textBaseline(b9, 1), b9.lineWidth = 1, this.a6y(), this.aQ3(), yP.aQ3(), aQr()
	}, this.aQ3 = function() {
		c4 = bD.dt - this.dt - bY.gap
	}, this.a0o = function() {
		bp = bY.gap
	}, this.a6y = function() {
		bp = bY.gap + (yP.yQ() && 0 !== b7.c0[q.bS] && !q.cJ ? yP.du + bY.gap : 0)
	}, this.bI = function(bJ) {
		(bJ || 100 <= aQg) && (aQg = 0, aQr())
	}, this.aAB = function() {
		return aQi[7]
	}, this.lc = function(value) {
		var jP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * jP) / 1e3);
		return value < 10 ? jP + ":0" + value : jP + ":" + value
	}, this.bs = function() {
		var lN, per;
		aQj[0] && q.wp - q.yW !== aQi[0] && (aQi[0] = q.wp - q.yW, aQg++), ct.cu - aQi[0] !== aQi[1] && (aQi[1] = ct.cu - aQi[0], aQg++), this.aJ6(), (lN = yl.aIX(q.bS)) !== aQi[5] && (aQi[5] = lN, aQg++), aQo(), aQi[7] += bL.j8, lN = aQp(7),
			aQk !== lN && (aQk = lN, aQg += 100), lN = q.bf ? d5.pY() : b7.br[aR[0]], per = hA.iV(1e4 * lN, Math.max(q.pZ, 1)), aQi[3] = lN, aQi[4] !== per && (aQg++, aQi[4] = per), 8 === q.eU && function() {
				for (var a1 = 0; a1 < 2; a1++)
					if (!r.cz.pt(a1)) return pc.pd.pf(), 1;
				return
			}() || aQi[3] < q.pZ || ! function() {
				for (var a1 = ct.cu - 1; 0 <= a1; a1--)
					if (0 < b7.a0S[ct.cw[a1]].length) return;
				return 1
			}() || il.nr.aBH().length || q.bf && d5.pY(1) < q.pZ || pc.pd.pf()
	}, this.aJ6 = function() {
		aQj[2] && q.yW !== aQi[2] && (aQi[2] = q.yW, aQg += 2 === q.cf ? 100 : 1)
	}, this.aR0 = function() {
		return aQi[3] === q.pZ
	}, this.jL = function(a1) {
		var nb, aR3, bx;
		return 2 !== q.cf && (a1 % 2 == 1 && (mX.bI(1, 1), bL.cC = !0), a1 === q.jJ ? (aQl = 0, aQr(), !1) : (-1 !== a1 || 0 !== aQm) && (aR3 = aQl, aQl = q.cL ? a1 / q.jJ : (bx = performance.now(), 0 <= a1 && (nb = bx - 392 * a1, aQm = 0 ===
			a1 || nb < aQm ? nb : aQm), 1 < (aQl = (bx - aQm) / (392 * q.jJ)) ? 1 : aQl), aQr(), aQl !== aR3))
	}, this.cR = function() {
		cS.drawImage(canvas, c4, bp)
	}
}

function uz() {
	var hS, hT, y, a3;

	function aR4() {
		nD.sR !== b5.buffer.data[12].value ? (nD.az(), n.aB(8, 1, new jx(30))) : n.aB(1)
	}
	this.show = function() {
			hS.show(), this.resize()
		}, this.aL = function() {
			hS.aL()
		}, this.resize = function() {
			hS.resize(), hT.resize()
		}, this.aM = function(aN) {
			2 === aN && hS.aO[0].aP()
		}, hS = new f(L(276), [new g("⬅️ " + L(1), aR4), new g(L(470), function() {
			n.ta(), b5.hi.aR5(), n.aB(2)
		})]), y = [], (a3 = new a4).a5(L(471)), a3.hr(L(472)), y.push(a3),
		function(y) {
			var a3 = new a4,
				dC = (a3.a5(L(499)), nD.data.aAf());
			a3.a7(new a8({
				a6: dC,
				value: nD.data.aAi(dC)
			}, function(a9) {
				return b5.hi.hj(12, dC[a9].split(":")[0]), !0
			})), y.push(a3)
		}(y),
		function(y) {
			var a3 = new a4,
				aR8 = (a3.a5(L(497)), []);
			a3.aK(new hk([new g(L(498), function(cb) {
				xO.xS();
				for (var a1 = 0; a1 < aR8.length; a1++) aR8[a1].cb.value = xO.xM[a1];
				return r.bF.hm(cb), !0
			}).button]));
			for (var a1 = 0; a1 < xO.xK.length; a1++) {
				a3.hr(xO.xK[a1]);
				for (var bN = 0; bN < 2; bN++) {
					var a9 = 2 * a1 + bN,
						iL = new hZ({
							value: xO.xM[a9],
							a9: -1
						});
					iL.cb.aR9 = a9, aR8.push(iL), iL.cb.addEventListener("keydown", function(cb) {
						cb.preventDefault();
						var code = cb.code;
						cb.target.value = code, xO.xP(cb.target.aR9, code)
					}), bN && (iL.cb.style.marginLeft = "4%"), iL.cb.style.width = "48%", a3.aK(iL)
				}
			}
			y.push(a3)
		}(y), (a3 = new a4).a5(L(473)), b5.buffer.data[1].a6 = [L(474), L(475), L(476), L(477)], a3.a7(new a8(b5.buffer.data[1])), y.push(a3), (a3 = new a4).a5(L(478)), b5.buffer.data[9].a6 = [L(475), L(479), L(480)], a3.a7(new a8(b5.buffer.data[
		9])), y.push(a3), (a3 = new a4).a5(L(481)), b5.buffer.data[11].a6 = [L(482), L(255), L(483)], a3.a7(new a8(b5.buffer.data[11])), y.push(a3), (a3 = new a4).a5(L(484)), a3.aK(new is(b5.buffer.data[2])), y.push(a3), (a3 = new a4).a5(L(485)), a3
		.aK(new is(b5.buffer.data[7])), y.push(a3), (a3 = new a4).a5(L(486)), a3.aK(new is(b5.buffer.data[8])), y.push(a3), (a3 = new a4).a5(L(487)), a3.aK(new hZ(b5.buffer.data[5])), y.push(a3), (a3 = new a4).a5(L(488)), a3.aK(new is(b5.buffer.data[
			13], L(489))), a3.aK(new is(b5.buffer.data[14], L(490))), y.push(a3), (a3 = new a4).a5(L(491)), a3.a7(new a8({
			a6: [L(492), L(493), L(494)],
			value: uW.aNv
		}, function(a1) {
			uW.aNv = a1
		})), y.push(a3), (a3 = new a4).a5(L(495)), a3.aK(new is(b5.buffer.data[15])), a3.hr(L(496)), a3.aK(new hZ(b5.buffer.data[16], 1, 0, function(cb) {
			cb.target.value = hA.hB(Math.floor(cb.target.value), 0, 16)
		})), y.push(a3), hT = new i(hS.j, y)
}

function jx(id, gd, aRA) {
	var hS, aRB;

	function aRE() {
		aRB.tW.innerHTML += "<br>" + L(502)
	}

	function aRF() {
		var fv = 1;
		n.aB(4, 1, new uT(L(503), L(504), !1, [new g("🔄 Reload", function() {
			fv && (setTimeout(function() {
				n.aB(1)
			}, 5e3), b2.b3.uf()), fv = 0
		}, bO.ug)]))
	}

	function aRD() {
		hy.wx(90), hy.wy(30, Math.floor(hA.pow(30) * Math.random())), hy.wy(30, Math.floor(hA.pow(30) * Math.random())), hy.wy(30, Math.floor(hA.pow(30) * Math.random())), hx.az(hy.mH), b5.hi.hj(110, __fx.passwordReset.getCustomPassword() || oh.oi
			.a5h(oh.oi.a5i(15))), hW.hn.aEi()
	}
	this.aRC = !0, this.a6P = id, this.show = function() {
		hS.show(), this.resize(), 15 === id ? (hW.b0.aNp(id) ? aRD : aRE)() : 16 === id ? hW.b0.aNp(id) ? hW.kY.aBS(2) : aRE() : 17 === id ? hW.b0.aNp(id) ? hW.kY.aBS(3) : aRE() : 18 === id ? (hW.b0.close(0, 3253), hW.b0.aNn(0, id, 0), aRE()) :
			21 === id ? hW.b0.aNp(id) ? hW.kd.ww(gd.i1, gd.ii, gd.ik) : aRE() : 22 === id ? hW.b0.aNp(id) ? hW.kd.wz(gd.i1, gd.x0, gd.x1) : aRE() : 23 === id ? hW.b0.aNp(id) ? hW.kd.x5(gd.x6, gd.x7) : aRE() : 24 === id ? hW.b0.aNp(id) ? hW.kd.x9(
				gd.x6, gd.ii, gd.ik) : aRE() : 25 === id ? hW.b0.aNp(id) ? hW.hn.aEl(gd) : aRE() : 28 === id ? hW.b0.aNp(id) ? hW.kd.x3(gd.i1, gd.x0, gd.x1) : aRE() : 29 === id ? hW.b0.aNp(id) ? hW.hn.iN(gd) : aRE() : 30 === id && (hW.b0.aNp(
				id) ? nD.sd() || aRF() : aRE())
	}, this.aCh = function() {
		15 === id ? aRD() : 16 === id ? hW.kY.aBS(2) : 17 === id ? hW.kY.aBS(3) : 18 === id ? n.aB(8, this.ot, new jx(16)) : 21 === id ? hW.kd.ww(gd.i1, gd.ii, gd.ik) : 22 === id ? hW.kd.wz(gd.i1, gd.x0, gd.x1) : 23 === id ? hW.kd.x5(gd.x6, gd
			.x7) : 24 === id ? hW.kd.x9(gd.x6, gd.ii, gd.ik) : 25 === id ? hW.hn.aEl(gd) : 28 === id ? hW.kd.x3(gd.i1, gd.x0, gd.x1) : 29 === id ? hW.hn.iN(gd) : 30 === id ? nD.sd() || aRF() : 1e3 === id && (this.a6P = id = 25, hW.hn.aEl(gd))
	}, this.i7 = function(code, bJ, data) {
		!bJ && code !== id || (15 === code || 16 === code ? n.aB(7, this.ot) : 17 === code ? (hW.b0.close(0, 3252), b5.b0.aOo(0), b5.buffer.data[117].a6 && 0 < b5.buffer.data[117].a6.length ? (bJ = b5.b0.uL(0), b5.hi.hj(105, bJ.hp), b5.hi.hj(106,
			bJ.password), n.aB(8, this.ot, new jx(16))) : (b5.hi.hj(105, ""), n.b0.sj())) : 21 === code ? n.aB(10, this.ot, new cD(data)) : 23 === code ? n.aB(13, this.ot, new a7I({
			data: data,
			x6: gd.x6
		})) : 25 === code ? (n.b0.v6.hp = gd.hp, b5.aOg.lA(gd.hp), n.aB(15, this.ot)) : 30 === code && (data ? n.aB(1) : aRF()))
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), aRB.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(500), [new g("⬅️ " + L(1), function() {
		aRA ? n.aB(29) : n.b0.sj()
	})]), aRB = new aDv(hS.j, L(501))
}

function aRG() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aPZ() {
	var aRH, aRI, xY, aRJ, aRK, aRL, aRM, aRN, aRO, xW, aRP, aDU, aRQ, aRR = 1,
		aRT = 0;

	function aRW(aRX) {
		aRX ? aRQ = (aRQ + 1) % hW.b0.aNi : (hW.b0.close(aRQ, 3280), aRR ? aRR = 0 : (aRQ = (aRQ + 1) % hW.b0.aNi, hW.b0.close(aRQ, 3280))), aDU = bL.c8, uW.aNt = aRT, hW.b0.aNn(aRQ, 4, 1) && hW.kW.aCc(aRQ)
	}

	function aRY() {
		if (0 !== aRQ) return 1 === aRQ && __fx.customLobby.isActive() ? (a88.ub(3249), __fx.customLobby.setActive(!1)) : void aRW();
		a88.ub(3249)
	}

	function aRe(bp, aLv, zY) {
		var cU = Math.floor((bD.dt - aRJ) / 2) + aRM,
			cW = cU + Math.floor(zY * (aRJ - 2 * aRM));
		cS.lineWidth = aLv, cS.beginPath(), cS.moveTo(cU, bp), cS.lineTo(cW, bp), cS.lineTo(Math.floor(cU - aRM + zY * aRJ), bp + xY), cS.lineTo(cU - aRM, bp + xY), cS.closePath()
	}
	this.aRU = 1, this.aNv = 0, this.aNt = 0, this.az = function() {
		yh.turnstile.aRV(), jz.setState(6), aRH = 0, aRI = 1, aRN = "rgba(0,220,120,0.4)", aRO = "rgba(0,0,0,0.8)", this.resize(), bL.cC = !0, aRR = 1, aRQ = this.aRU - 1, aRT = 0, aRW(1)
	}, this.resize = function() {
		aRJ = Math.floor((b2.b3.b4() ? .5 : .25) * bD.bE), aRK = aRJ + 12, xY = Math.floor(.125 * aRJ), aRM = 3 * xY, aRL = Math.floor(.225 * aRJ), aRP = Math.floor(.3 * xY), xW = r.bF.bG(0, aRP)
	}, this.uX = function(uK) {
		uK === aRQ && aRY()
	}, this.c3 = function(c4, bp) {
		var cU = Math.floor((bD.dt - aRK) / 2),
			cV = Math.floor(.5 * (bD.du - bY.gap - xY - aRL)) + xY + bY.gap;
		return cU < c4 && c4 < cU + aRK && cV < bp && bp < cV + aRL && (this.aRa(), a19.cF(c4, bp, !1), !0)
	}, this.aRa = function() {
		hW.b0.ui(3260), __fx.customLobby.setActive(false), n.b0.uh()
	}, this.bs = function() {
		6 === jz.si() && (bL.c8 > aDU + 12e3 && aRY(), 100 < (aRH += .07 * aRI * (aRH < 16 ? 5 + aRH : 84 < aRH ? 105 - aRH : 17)) ? (aRH = 100, aRI = -1) : aRH < 0 && (aRH = 0, aRI = 1), aRN = "rgba(0," + Math.floor(190 - 1.9 * aRH) + "," + Math
			.floor(120 - 1.2 * aRH) + "," + (.4 + .004 * aRH) + ")", aRO = "rgba(0," + Math.floor(1.9 * aRH) + "," + Math.floor(1.2 * aRH) + "," + (.8 - .004 * aRH) + ")", bL.cC = !0)
	}, this.cR = function() {
		var c4 = Math.floor((bD.dt - aRK) / 2),
			bp = Math.floor(.5 * (bD.du - bY.gap - xY - aRL));
		! function(title, bp, aLv, zY) {
			cS.fillStyle = aRO, aRe(bp, aLv, 1), cS.fill(), cS.fillStyle = aRN, aRe(bp, aLv, zY), cS.fill(), cS.strokeStyle = bO.bX, aRe(bp, aLv, 1), cS.stroke(),
				function(aRg, bp) {
					r.bF.textAlign(cS, 1), r.bF.textBaseline(cS, 1), cS.font = xW, cS.fillStyle = bO.bX, cS.fillText(aRg, Math.floor(.5 * bD.dt), Math.floor(bp + .58 * xY))
				}(title, bp)
		}(L(505), bp, 3, aRH / 100),
		function(c4, bp, dt, du, a6k) {
			cS.fillStyle = bO.a1L, cS.fillRect(c4, bp, dt, du), cS.lineWidth = 3, cS.strokeStyle = bO.bX, cS.strokeRect(c4, bp, dt, du);
			var cs = Math.floor(.3 * du);
			r.bF.textAlign(cS, 1), r.bF.textBaseline(cS, 1), cS.font = r.bF.bG(0, cs), cS.fillStyle = bO.bX, cS.fillText(a6k, Math.floor(c4 + dt / 2), Math.floor(bp + du / 2 + .1 * cs))
		}(c4, bp + xY + bY.gap, aRK, aRL, L(1))
	}
}

function aRh() {
	var aRi = [],
		aRj = [],
		aRk = 0;

	function aRl(dC, we, aCq, aRn) {
		var cs = dC.length;
		if (0 === cs) return "";
		var ga = "@" + dC[0];
		if (1 === cs) return ga + we + aRn;
		for (var a1 = 1; a1 < cs - 1; a1++) ga += ", @" + dC[a1];
		return ga + " and @" + dC[cs - 1] + aCq + aRn
	}
	this.az = function() {
		var ga = aRl(aRj, " is", " are", " in the lobby.");
		ga.length && uN.message.a08({
			id: 7,
			vs: ga
		}), aRi = [], aRj = [], aRk = 0
	}, this.a8N = function(aRm) {
		return uN.a8K !== aRm && (aRm = oh.oi.eh(aRm, 5), !!b5.aOg.a1g(aRm)) && (aRj.push(aRm), !0)
	}, this.join = function(player) {
		uN.a8K !== player.hp && (player = oh.oi.eh(player.hp, 5), b5.aOg.a1g(player)) && aRi.push(player)
	}, this.zv = function() {
		var we, aCq;
		++aRk < 3 || (aRk = 0, we = aRl(aRj, "", "", " entered the lobby!"), (we = (aCq = aRl(aRi, "", "", " joined a game!")).length ? we.length ? we + " " + aCq : aCq : we).length && uN.message.a08({
			id: 7,
			vs: we
		}), aRi = [], aRj = [])
	}
}

function a14() {
	function aRv() {
		var nb;
		return 8 === q.eU ? 0 : (nb = Math.floor(b7.ul[q.bS] / 50), (nb = Math.min(nb, 200)) / 100)
	}

	function aRp() {
		var nb = aRv();
		0 !== nb && g5.pa(440, L(506, [nb.toFixed(2)]), 40, 0, bO.pk, bO.lC, -1, !1)
	}
	this.bs = function() {
		var a68;
		0 === pc.result.aRo || 0 === pc.result.cx.length || 8 === q.eU ? r.cz.pt(q.bS) && aRp() : (function(a68) {
			7 !== q.eU && 10 !== q.eU && 9 !== q.eU || 0 !== q.wN && a68 && g5.pa(600, L(510, [a68.toFixed(2)]), 40, 0, bO.bX, bO.lC, -1, !1)
		}(a68 = function() {
			g5.pa(520, L(507), 40, 0, bO.bX, bO.lC, -1, !1);
			for (var cx = pc.result.cx, cs = cx.length, br = b7.br, dC = [], a1 = 0; a1 < cs; a1++) {
				var cy = cx[a1];
				dC.push({
					cy: cy,
					bx: br[cy]
				})
			}
			dC.sort((bN, fv) => fv.bx - bN.bx);
			var aD = b7.b8,
				bx = pc.result.aRw,
				nb = pc.result.aRo,
				ga = "",
				a68 = 0;
			for (a1 = 0; a1 < cs; a1++) {
				var aLi = dC[a1].bx * nb / (100 * bx),
					aRy = aD[dC[a1].cy] + ": " + aLi.toFixed(2) + "   ";
				dC[a1].cy === q.bS && (a68 = aLi), 2 < a1 && 4 !== cs ? 3 === a1 && (ga += "(" + L(508, [cs - 3]) + ")") : ga += aRy
			}
			g5.pa(560, r.aI.hH(ga), 40, 0, bO.pk, bO.lC, -1, !1), a68 ? g5.pa(580, L(509, [a68.toFixed(2) + " + " + aRv().toFixed(2)]), 40, 0, bO.pk, bO.lC, -1, !1) : r.cz.pt(q.bS) && aRp();
			return a68
		}()), 2 === q.yd || 7 <= q.eU || function(a68) {
			var cx = pc.result.cx,
				cs = cx.length,
				bB = b7.bB,
				br = b7.br,
				x7 = [];
			loop: for (var a1 = 0; a1 < cs; a1++) {
				var cy = cx[a1],
					iG = r.aI.hD(bB[cy]);
				if (null !== iG) {
					for (var aOr = br[cy], fv = x7.length - 1; 0 <= fv; fv--)
						if (iG === x7[fv].name) {
							x7[fv].bx += aOr, x7[fv].dC.push({
								cy: cy,
								bx: aOr
							});
							continue loop
						} x7.push({
						name: iG,
						bx: aOr,
						dC: [{
							cy: cy,
							bx: aOr
						}]
					})
				}
			}
			if (0 !== x7.length) {
				x7.sort((bN, fv) => fv.bx - bN.bx);
				var dC = x7[0].dC,
					aNN = (dC.sort((bN, fv) => fv.bx - bN.bx), "[" + x7[0].name + "]"),
					aRz = 512 * pc.result.aRo / 26214400,
					jP = (g5.pa(0, L(511, [aNN, aRz.toFixed(4)]), 40, 0, bO.bX, bO.lC, -1, !1), dC.length),
					aNM = x7[0].bx,
					aS0 = 1e4 * aRz;
				for (a1 = 0; a1 < jP; a1++)
					if (dC[a1].cy === q.bS) {
						g5.pa(600, L(512, [(aS0 * dC[a1].bx / (10 * aNM)).toFixed(2)]), 40, 0, bO.bX, bO.lC, -1, !1), g5.pa(640, L(513, [(.2 * a68).toFixed(2), aNN]), 40, 0, bO.bX, bO.lC, -1, !1);
						break
					}
			}
		}(a68))
	}, this.a0q = function() {
		var aRt, aRu;
		q.cK || (aRt = b7, aRu = q.bS, 0 === aRt.uq[aRu]) || aRt.up[aRu] < 1 || 2 * aRt.un[aRu] > 3 * (aRt.uo[aRu] + aRt.up[aRu]) || aRp()
	}
}

function aS1() {
	var aS2 = [];

	function aS3(hp) {
		aS2.unshift(hp), b5.hi.hj(161, aS2.join(";"))
	}

	function aI4(hp) {
		for (var aS4 = aS2, cs = aS4.length, a1 = 0; a1 < cs; a1++)
			if (aS4[a1] === hp) return aS4.splice(a1, 1), b5.hi.hj(161, aS4.join(";")), 1
	}
	this.az = function() {
		var ga = b5.buffer.data[161].value;
		ga.length && (aS2 = ga.split(";"))
	}, this.get = function() {
		return aS2
	}, this.aOm = function() {
		return {
			a6: aS2,
			value: 0
		}
	}, this.a1g = function(hp) {
		return r.s.has(aS2, hp)
	}, this.aOs = function(hp) {
		return aI4(hp) ? 0 : (aS3(hp), 1)
	}, this.lA = function(hp) {
		aI4(hp) && aS3(hp)
	}, this.aOk = function(a9) {
		a9 < aS2.length && (aS2.splice(a9, 1), b5.hi.hj(161, aS2.join(";")))
	}
}

function vC() {
	var b, c, d, y;

	function h() {
		l(), 2 !== q.data.tIncomeType && (q.data.tIncomeData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.tIncomeType && r.s.t(d.u(), q.data.tIncomeData, 255)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(110), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(109), L(3), L(6)],
			value: q.data.tIncomeType
		}, function(a9) {
			l(), 2 !== a9 || q.data.tIncomeData || (q.data.tIncomeData = new Uint8Array(q.aA), q.data.tIncomeData.fill(32)), q.data.tIncomeType = a9, n.aB(26)
		})), y.push(a3)
	}(y = []), function(y) {
		var a3;
		1 === q.data.tIncomeType && ((a3 = new a4).a5("Value"), a3.aK(new hZ({
			a9: -1,
			value: q.data.tIncomeValue
		}, 1, 0, function(cb) {
			var value = hA.hB(Math.floor(cb.target.value), 0, 255);
			cb.target.value = q.data.tIncomeValue = value
		})), y.push(a3))
	}(y), function(y) {
		var a3;
		2 === q.data.tIncomeType && ((a3 = new a4).a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.tIncomeData, 4)), a3.aK(d), y.push(a3))
	}(y), y))
}

function aEL() {
	this.aGj = function() {
		for (var cy, c4, dV, aGh = xF, aGi = dR.aE9, dt = dR.dS, aGf = dt - 1, aGg = dR.dT - 1, fe = 0, bp = 1; bp < aGg; bp++)
			for (dV = bp * dt, c4 = 1; c4 < aGf; c4++) aGi[cy = dV + c4 << 2] === aGi[1 + cy] && aGi[cy] === aGi[2 + cy] && (fe++, aGh[2 + cy] = 4);
		wi.wl = fe
	}, this.aGk = function(aS5, aS6) {
		for (var aGh = xF, dt = dR.dS, aGf = dt - 1, aGg = dR.dT - 1, id = 0, bp = 1; bp < aGg; bp++)
			for (var dV = bp * dt, c4 = 1; c4 < aGf; c4++) {
				var gF = 2 + (dV + c4 << 2);
				aGh[gF] === aS5 && (! function(gF, id, aS5, aS6) {
					var cs = 1,
						aGh = xF,
						aDQ = eb.aS8,
						s4 = [gF],
						aS9 = id >> 8 << 1,
						aSA = 255 & id;
					aGh[gF - 2] = aS9, aGh[gF - 1] = aSA, aGh[gF] = 5;
					for (; cs;) {
						for (var s5 = [], a1 = 0; a1 < cs; a1++)
							for (var hE = s4[a1], gM = 0; gM < 8; gM++) {
								var hF = hE + aDQ[gM];
								aGh[hF] === aS5 && (aGh[hF - 2] = aS9, aGh[hF - 1] = aSA, aGh[hF] = aS6, s5.push(hF))
							}
						cs = (s4 = s5).length
					}
				}(gF, id, aS5, aS6), id = (id + 1) % 32768)
			}
	}, this.aGl = function() {
		for (var aGh = xF, dt = dR.dS, aGf = dt - 3, aGg = dR.dT - 3, aSC = 12 * dt, bp = 3; bp < aGg; bp++)
			for (var dV = bp * dt, c4 = 3; c4 < aGf; c4++) {
				var gF = 2 + (dV + c4 << 2);
				2 !== aGh[gF] || 2 === aGh[gF - 12] && 2 === aGh[12 + gF] && 2 === aGh[gF - aSC] && 2 === aGh[gF + aSC] || (aGh[gF - 2] = 1 | aGh[gF - 2])
			}
	}
}

function aO1() {
	var aSD, aSE, a83, aSF = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSG = 0;

	function aO2() {
		hW.b0.aO2(aSD, aSE)
	}

	function aSJ(cb) {
		hW.kf.aSL(aSD, new Uint8Array(cb.data))
	}

	function aSK() {}

	function aO7(cb) {
		hW.b0.aO7(aSD, cb)
	}
	this.az = function(a9, ot, aNx) {
		aSD = a9, aSE = ot,
			function(aNx) {
				aNx = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : kH.qE ? "ws://localhost:" + (7130 + aSD) + "/" : aNx ? aSF[0] + "game.territorial.io/x0" + aSD + "/" : aSF[0] + hW.b0.aNj[aSD] + aSF[1 + kH.qC];
				(a83 = new WebSocket(aNx)).binaryType = "arraybuffer", a83.onopen = aO2, a83.onmessage = aSJ, a83.onclose = aO7, a83.onerror = aSK
			}(aNx)
	}, this.aSI = function() {
		return a83.readyState === a83.CONNECTING
	}, this.hl = function() {
		return a83.readyState === a83.OPEN
	}, this.aNq = function() {
		return aSG
	}, this.aCf = function() {
		aSG = 1
	}, this.aNz = function() {
		return this.aSI() || this.hl()
	}, this.aO0 = function(ot) {
		aSE = ot
	}, this.aCb = function() {
		return aSE
	}, this.send = function(mH) {
		this.hl() && a83.send(mH)
	}, this.close = function(aO5) {
		this.aNz() && (this.aL(), a83.close(aO5))
	}, this.aL = function() {
		a83.onopen = null, a83.onmessage = null, a83.onclose = null, a83.onerror = null
	}
}

function aPW() {
	var aSM, aSN, dt, c4, bp, aSO, aSP;
	this.az = function() {
		aSM = new Array(2), aSN = new Array(2), this.aQA = !1, aSP = aSO = fI = fG = 0, fH = 1, this.resize()
	}, this.resize = function() {
		dt = (dt = Math.floor((b2.b3.b4() ? .072 : .0502) * bD.bE)) < 8 ? 8 : dt;
		for (var a1 = 1; 0 <= a1; a1--) aSM[a1] = document.createElement("canvas"), aSM[a1].width = dt, aSM[a1].height = dt, aSN[a1] = aSM[a1].getContext("2d", {
			alpha: !0
		});
		this.aQ3(),
			function() {
				for (var aSa = Math.floor(1 + dt / 20), a1 = 1; 0 <= a1; a1--) aSN[a1].clearRect(0, 0, dt, dt), aSN[a1].fillStyle = bO.a9a, aSN[a1].beginPath(), aSN[a1].arc(dt / 2, dt / 2, dt / 2 - aSa, 0, 2 * Math.PI), aSN[a1].fill(), aSN[a1]
					.lineWidth = aSa, aSN[a1].fillStyle = bO.bX, aSN[a1].strokeStyle = bO.bX, aSN[a1].beginPath(), aSN[a1].arc(dt / 2, dt / 2, dt / 2 - aSa, 0, 2 * Math.PI), aSN[a1].stroke(), pG(aSN[a1], 0, 0, dt, aSa, .3, 0 === a1)
			}()
	}, this.q6 = function() {
		return -fG / fH
	}, this.pH = function() {
		return -fI / fH
	}, this.aST = function(m6, cj) {
		fG = fH * m6 - cj
	}, this.aSU = function(m7, ck) {
		fI = fH * m7 - ck
	}, this.c3 = function(aSS, vm) {
		return q.cP || ! function(aSS, vm) {
			return Math.pow(aSS - (c4 + dt / 2), 2) + Math.pow(vm - (bp + dt / 2), 2) < dt * dt / 4 || Math.pow(aSS - (c4 + dt / 2), 2) + Math.pow(vm - (bp + 2 * dt), 2) < dt * dt / 4
		}(aSS, vm) || b5.buffer.data[8].value ? (cM.bz() && (this.aQA = !0, aSO = aSS, aSP = vm), !1) : vm < bp + 1.25 * dt ? this.cO(Math.floor(bD.dt / 2), Math.floor(bD.du / 2), -200) : this.cO(Math.floor(bD.dt / 2), Math.floor(bD.du / 2),
			200)
	}, this.cF = function(aSS, vm) {
		var aSV, aSW, ex, ey;
		return !cM.bz() || (aSV = fG, aSW = fI, fG += ex = aSO - aSS, fI += ey = aSP - vm, ez.cF(ex, ey), this.aH4(), aSO = aSS, aSP = vm, aSV !== fG) || aSW !== fI
	}, this.cO = function(f1, f2, deltaY) {
		var gH;
		if (cM.bz()) {
			if (0 < deltaY) gH = (gH = 500 / (500 + deltaY)) < .5 ? .5 : gH;
			else {
				if (!(deltaY < 0)) return !1;
				gH = 2 < (gH = (500 - deltaY) / 500) ? 2 : gH
			}
			this.cm(f1, f2, gH), bL.cC = !0
		}
		return !0
	}, this.cm = function(c4, bp, gF) {
		var f0;
		gF = f0 = (f0 = 1024 < (f0 = gF) * fH ? 1024 / fH : f0) * fH < .125 ? .125 / fH : f0, ez.zoom(gF, c4, bp),
			function(f0, f1, f2) {
				fH *= f0, fG = (fG + f1) * f0 - f1, fI = (fI + f2) * f0 - f2, cl.aH4()
			}(gF, c4, bp)
	}, this.aH4 = function() {
		var k7 = bD.dt / 16,
			a9E = 0,
			aSZ = bD.du / 16,
			a9F = 0;
		fG < -bD.dt + k7 && (a9E = -bD.dt + k7 - fG), fG > fH * dR.dS - k7 && (a9E = fH * dR.dS - k7 - fG), fI < -bD.du + aSZ && (a9F = -bD.du + aSZ - fI), fI > fH * dR.dT - aSZ && (a9F = fH * dR.dT - aSZ - fI), fG += a9E, fI += a9F, aEB.q5(), ez
			.ew(a9E, a9F)
	}, this.aQ3 = function() {
		c4 = bD.dt - dt - bY.gap, bp = Math.floor(bD.du / 2 - 1.25 * dt)
	}, this.cR = function() {
		b5.buffer.data[8].value || (cS.drawImage(aSM[0], c4, bp), cS.drawImage(aSM[1], c4, Math.floor(bp + 3 * dt / 2)))
	}
}

function aES() {
	var a6 = aSb(dR.qg);
	a6 && aSc(a6[0], a6[1], a6[2], a6[3], a6[4])
}

function aSb(qg) {
	return 2 === qg ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === qg ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === qg ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === qg ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === qg ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aSc(aSd, aSe, aSf, aSg, aSh) {
	for (var c4, bp, cg, ci, f0, aSk, a3r = aSd.length - 1, aSi = dR.dS + dR.dT, cs = (aSi *= aSi, aSf.length), aSj = Array(cs), a1 = cs - 1; 0 <= a1; a1--) aSj[a1] = aSf[a1] * aSf[a1];
	var aSl = new Array(cs),
		a7w = new Array(cs),
		aSm = new Array(cs),
		h2 = aER.aGX();
	if (void 0 === aSh)
		for (aSh = new Array(cs), a1 = cs - 1; 0 <= a1; a1--) aSh[a1] = 0;
	for (a1 = 1; a1 < cs; a1++) aSl[a1] = aSj[a1] - aSj[a1 - 1], a7w[a1] = aSg[a1] - aSg[a1 - 1], aSm[a1] = aSh[a1] - aSh[a1 - 1];
	for (c4 = dR.dS - 1; 0 <= c4; c4--)
		for (bp = dR.dT - 1; 0 <= bp; bp--) {
			for (cg = aSi, a1 = a3r; 0 <= a1; a1--) cg = (ci = (c4 - aSd[a1]) * (c4 - aSd[a1]) + (bp - aSe[a1]) * (bp - aSe[a1])) < cg ? ci : cg;
			for (f0 = aSg[cs - 1], aSk = aSh[cs - 1], a1 = 1; a1 < cs; a1++)
				if (cg < aSj[a1]) {
					f0 = aSg[a1 - 1] + mj((cg - aSj[a1 - 1]) * a7w[a1], aSl[a1]), aSk = aSh[a1 - 1] + mj((cg - aSj[a1 - 1]) * aSm[a1], aSl[a1]);
					break
				} aSn(dR.dS * bp + c4, f0, aSk, h2)
		}
}

function aSn(a9, f0, aSk, h2) {
	f0 < 500 ? h2[a9] = hA.iV(h2[a9] * f0 * 2, 1e3) : 500 < f0 && (h2[a9] += hA.iV(2 * (1e4 - h2[a9]) * (f0 - 500), 1e3)), h2[a9] += hA.iV(aSk * (10 * f0 - h2[a9]), 1e3)
}

function aPh() {
	this.aSo = new Uint32Array(q.aA), this.az = function() {
		10 === q.eU && this.aSo.fill(0)
	}, this.bs = function() {
		10 === q.eU && this.nr()
	}, this.nr = function() {
		for (var cy, target, lN, aSo = this.aSo, cv = ct.cw, lG = b7.di, a1 = ct.cu - 1; 0 <= a1; a1--)(cy = cv[a1]) >= q.bq || (target = Math.max(hA.iV(lG[cy], 4), 2048), lN = Math.max(yl.aIX(cy), 100), aSo[cy] += hA.iV(lN * target, 1e4), aSo[
			cy] > target && (aSo[cy] = target))
	}, this.aSp = function(player, dn) {
		return 10 !== q.eU || r.cz.fO(player) ? dn : Math.min(this.aSo[player], dn)
	}, this.aSq = function(player, dn) {
		10 !== q.eU || r.cz.fO(player) || (this.aSo[player] -= dn)
	}
}

function aPl() {
	var aSr, aSs, aSt = -15e3,
		aSu = !1;

	function c3(cb) {
		aT9() || (aSu = !0, aTA(cb, 1), hW.b0.aO3(hW.b0.uY), aTB(Math.floor(bD.cp * cb.clientX), Math.floor(bD.cp * cb.clientY)))
	}

	function ca(cb) {
		aSt = bL.c8, aTA(cb, 1), hW.b0.aO3(hW.b0.uY), 0 < cb.touches.length && (aSr = Math.floor(bD.cp * cb.touches[0].clientX), aSs = Math.floor(bD.cp * cb.touches[0].clientY), aPF.ca(cb) || aTB(aSr, aSs))
	}

	function aTB(c4, bp) {
		n.c3(c4, bp), 0 === q.cf ? jz.c3(c4, bp) : j1.aJJ(c4, bp) || mb.c3(c4, bp) || z0.c3(c4, bp) || cd.aTC(c4, bp) || yz.c3(c4, bp) || 0 <= j9.c3(c4, bp) || gv.c3(c4, bp) || c9.aTD(c4, bp) || cd.co(c4, bp)
	}

	function cF(cb) {
		aT9() || (aSu = !0, aTA(cb, 1), aTE(Math.floor(bD.cp * cb.clientX), Math.floor(bD.cp * cb.clientY)))
	}

	function ce(cb) {
		aSt = bL.c8, aTA(cb, 1), 0 < cb.touches.length && (aSr = Math.floor(bD.cp * cb.touches[0].clientX), aSs = Math.floor(bD.cp * cb.touches[0].clientY), aPF.ce(cb) || aTE(aSr, aSs))
	}

	function aTE(c4, bp) {
		c9.lz() || (c9.aAI = c4, c9.aAJ = bp), n.cF(c4, bp), 0 === q.cf ? jz.cF(c4, bp) : (aPH.aLQ(c4, bp), mb.cF(c4, bp) || (j9.cF(c4, bp), cd.l2() ? cd.cF(c4, bp) : mS.aLS ? mS.cF(c4) && (bL.cC = !0) : (mX.cF(c4, bp), cl.aQA && cl.cF(c4, bp) && (bL
			.cC = !0))))
	}

	function aSz(cb) {
		aT9() || (aTA(cb, 1), vJ(), 0 === q.cf ? (jz.click(-1024, -1024), kD.reset()) : (mX.cI(-1024, -1024), j9.cF(-1024, -1024), mS.aQF(), cl.aQA = !1))
	}

	function md(cb) {
		aT9() || (aTA(cb, 1), aTF(Math.floor(bD.cp * cb.clientX), Math.floor(bD.cp * cb.clientY), 2 === cb.button), c9.aSx && (c9.aSx = !1, cb.preventDefault()))
	}

	function click(cb) {
		aT9() || aTA(cb, 1)
	}

	function aT0(cb) {
		aSt = bL.c8, aTA(cb, 1), cb && cb.touches && 0 < cb.touches.length && 0 !== q.cf ? cl.aQA = !1 : aPF.cn() || (aTF(aSr, aSs, !1), c9.aSx && (c9.aSx = !1, cb.preventDefault()))
	}

	function aT1(cb) {
		aSt = bL.c8, aTA(cb, 1), aTF(aSr, aSs, !1), c9.aSx && (c9.aSx = !1, cb.preventDefault())
	}

	function aT2(cb) {}

	function aT3(cb) {}

	function aT4(cb) {
		aT9() || aTA(cb, 0)
	}

	function aTF(c4, bp, aTG) {
		vJ(), 0 === q.cf ? jz.click(c4, bp) : (mX.cI(c4, bp), mb.cI(), mS.aQF(), cl.aQA = !1, cd.click(c4, bp, aTG) ? bL.cC = !0 : j9.md(c4, bp))
	}

	function vJ() {
		n.vJ()
	}

	function cO(cb) {
		var c4, bp, deltaY;
		aT9() || (aTA(cb, 1), hW.b0.aO3(hW.b0.uY), c4 = Math.floor(bD.cp * cb.clientX), bp = Math.floor(bD.cp * cb.clientY), deltaY = cb.deltaY, 1 === cb.deltaMode && (deltaY *= 16), n.cO(c4, bp, deltaY), 0 === q.cf ? jz.cO(c4, bp, deltaY) : mX.cO(
			c4, bp, deltaY) || (mS.a0N(c4, bp) ? mS.cO(deltaY) && (bL.cC = !0) : cl.cO(c4, bp, deltaY)))
	}

	function aT5(cb) {
		aTA(cb, 0)
	}

	function aTA(cb, id) {
		0 === id && n.l2() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== jz.si() && cb.preventDefault()
	}

	function aT6(cb) {
		if (__fx.keybindHandler(cb.key)) return;
		aT9() || 0 < bD.a9b || (cb = cb.code) && cb.length && (xO.aN(cb, 18) ? aH3.aGy(3) : xO.aN(cb, 22) ? aH3.aGy(0) : xO.aN(cb, 20) ? aH3.aGy(1) : xO.aN(cb, 24) ? aH3.aGy(2) : xO.aN(cb, 10) ? mS.aQE(31 / 32) : xO.aN(cb, 8) ? mS.aQE(32 / 31) : xO
			.aN(cb, 6) ? mS.aQE(7 / 8) : xO.aN(cb, 4) ? mS.aQE(8 / 7) : xO.aN(cb, 14) ? 0 !== q.cf && cl.cO(Math.floor(bD.dt / 2), Math.floor(bD.du / 2), -200) : xO.aN(cb, 16) ? 0 !== q.cf && cl.cO(Math.floor(bD.dt / 2), Math.floor(bD.du / 2),
				200) : xO.aN(cb, 0) ? q.cf && aPH.aLR(0) : xO.aN(cb, 2) ? q.cf && aPH.aLR(1) : xO.aN(cb, 30) ? q.cf && aPH.aLR(2) : xO.aN(cb, 26) ? q.cf && aPH.aLf() : xO.aN(cb, 28) && q.cf && aPH.pw())
	}

	function aT7(cb) {
		if (!aT9() && !(0 < bD.a9b || bL.c8 < 400)) {
			var code = cb.code;
			if (code && code.length && !("Enter" === code && n.aM(1) || "Space" === code && n.aM(0))) return uN.uO ? uN.a1h.aM(code) ? void 0 : void("Escape" === code && c9.aIo()) : void(8 !== jz.si() && jz.aM(cb) ? bL.cC = !0 : "Escape" === code ?
				c9.aIo() : xO.aN(code, 18) ? aH3.aH0(3) : xO.aN(code, 22) ? aH3.aH0(0) : xO.aN(code, 20) ? aH3.aH0(1) : xO.aN(code, 24) ? aH3.aH0(2) : xO.aN(code, 12) ? j1.mV(!q.cP) : "Space" === code && q.cf && (j9.jA && j9.l7(), q.cL) && j1
				.jc(!1))
		}
	}

	function aT8() {
		"hidden" !== document.visibilityState && (bL.cC = !0)
	}

	function aT9() {
		return aSt + 15e3 > bL.c8
	}

	function resize() {
		bD.aTI()
	}
	this.aSv = 0, this.aSw = "", this.aSx = !1, this.aAI = 0, this.aAJ = 0, this.az = function() {
		aSy.addEventListener("mousedown", c3, {
			passive: !1
		}), aSy.addEventListener("mousemove", cF, {
			passive: !1
		}), aSy.addEventListener("mouseup", md, {
			passive: !1
		}), aSy.addEventListener("click", click, {
			passive: !1
		}), aSy.addEventListener("mouseleave", aSz, {
			passive: !1
		}), aSy.addEventListener("wheel", cO, {
			passive: !1
		}), aSy.addEventListener("touchstart", ca, {
			passive: !1
		}), aSy.addEventListener("touchmove", ce, {
			passive: !1
		}), aSy.addEventListener("touchend", aT0, {
			passive: !1
		}), aSy.addEventListener("touchcancel", aT1, {
			passive: !1
		}), aSy.addEventListener("dragover", aT2), aSy.addEventListener("drop", aT3), aSy.addEventListener("dblclick", aT4), document.addEventListener("contextmenu", aT5), document.addEventListener("keydown", aT6), document.addEventListener(
			"keyup", aT7), document.addEventListener("visibilitychange", aT8), window.addEventListener("resize", resize)
	}, this.aTD = function(c4, bp) {
		return !!j1.c3(c4, bp) || !!(mX.c3(c4, bp) || cl.c3(c4, bp) || mS.c3(c4, bp) || g5.c3(c4, bp))
	}, this.cA = aT9, this.lz = function() {
		return !aSu || 0 < aSt
	}, this.aIo = function() {
		if (!n.l2()) return 8 === jz.si() ? q.cP ? void j1.mV(!1) : mb.l2 ? void mb.l7() : void j9.l7() : void(7 !== jz.si() && 6 === jz.si() && uW.aRa());
		n.aM(2)
	}
}

function tj() {
	this.aTJ = 0;
	var aTM, aTK = null,
		aTL = 0,
		aTN = "",
		aTO = 0,
		aTP = null,
		aTQ = -1,
		aTR = -1,
		aTS = 0;

	function aI4() {
		if (null !== aTP && null !== aTK) {
			aTL = 0;
			try {
				window.turnstile.remove(aTK), aTP.remove()
			} catch (cb) {
				console.log("turnstile remove failed " + cb)
			}
			aTK = aTP = null
		}
	}

	function aTV(aTX) {
		return "" !== aTN && aTO + 1e3 * (300 - aTX) > performance.now()
	}
	this.az = function() {
		var aTU;
		kH.qE || !kH.qK && !kH.qL ? (console.log("turnstile cannot be loaded"), this.aTJ = -1) : ((aTU = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aTU.async = !0, aTU.onload =
			function() {
				yh.turnstile.aTJ = 1, console.log("turnstile onload"), yh.turnstile.aRV()
			}, aTU.onerror = function() {
				yh.turnstile.aTJ = -1, console.log("turnstile onerror")
			}, document.head.appendChild(aTU))
	}, this.aRV = function() {
		var bx;
		return !(1 !== this.aTJ || (window.turnstile ? aTL ? (console.log("turnstile error 246"), 1) : aTV(30) || (bx = performance.now()) < aTS && aTQ === i3.oi.a1q(b5.buffer.data[105].value, 5) && aTR === uW.aRU || (aTN = "", aTL = 1, aTM = bx,
			(aTP = document.createElement("div")).style.position = "fixed", aTP.style.left = "0", aTP.style.top = "0", aTP.style.zIndex = "100", document.body.appendChild(aTP), console.log("turnstile render"), aTK = window.turnstile
			.render(aTP, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(aBP) {
					console.log("turnstile success " + Math.floor(performance.now() - aTM)), aTN = aBP, aTO = performance.now(), yh.turnstile.aTW(), aI4()
				},
				"expired-callback": function() {
					aI4(), console.log("turnstile expired " + Math.floor(performance.now() - aTM))
				},
				"error-callback": function() {
					aI4(), console.log("turnstile callback error " + Math.floor(performance.now() - aTM)), yh.turnstile.aTJ = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		aI4()
	}, this.aTW = function() {
		aTV(8) && uN.uO && hW.b0.hl(hW.b0.uP) && (aTS = performance.now() + 36e5 - 1e4, aTQ = i3.oi.a1q(b5.buffer.data[105].value, 5), aTR = uW.aRU, hW.kY.aBO(aTN), aTN = "", console.log("sendTokenToLobby success"))
	}
}

function aTY() {
	this.bA = function(ga, font, maxWidth) {
		if (font && (cS.font = font), cS.measureText(ga).width <= maxWidth) return ga;
		for (var a1 = ga.length - 1; 1 <= a1; a1--)
			if (ga = ga.substring(0, a1), cS.measureText(ga + "...").width <= maxWidth) return ga + "...";
		return "..."
	}
}

function vE() {
	var b, c, d, y;

	function h() {
		l(), 2 !== q.data.sResourcesType && (q.data.sResourcesData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.sResourcesType && r.s.t(d.u(), q.data.sResourcesData, 2047)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(112), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(109), L(3), L(6)],
			value: q.data.sResourcesType
		}, function(a9) {
			l(), 2 !== a9 || q.data.sResourcesData || (q.data.sResourcesData = new Uint16Array(q.aA)), q.data.sResourcesType = a9, n.aB(28)
		})), y.push(a3)
	}(y = []), function(y) {
		var a3;
		1 === q.data.sResourcesType && ((a3 = new a4).a5("Value"), a3.aK(new hZ({
			a9: -1,
			value: q.data.sResourcesValue
		}, 1, 0, function(cb) {
			var value = hA.hB(Math.floor(cb.target.value), 0, 2047);
			cb.target.value = q.data.sResourcesValue = value
		})), y.push(a3))
	}(y), function(y) {
		var a3;
		2 === q.data.sResourcesType && ((a3 = new a4).a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.sResourcesData, 2)), a3.aK(d), y.push(a3))
	}(y), y))
}

function f(title, kO, aTa) {
	var nG = document.createElement("div"),
		aTb = document.createElement("div"),
		nJ = document.createElement("div"),
		aTc = document.createElement("div"),
		aTd = document.createElement("div");
	this.j = nJ, this.aO = kO, this.show = function() {
			!1 !== aTa ? document.body.appendChild(nG) : (document.body.appendChild(aTb), document.body.appendChild(aTc))
		}, this.aL = function() {
			!1 !== aTa ? n.removeChild(document.body, nG) : (n.removeChild(document.body, aTb), n.removeChild(document.body, aTc))
		}, this.a0F = function() {
			var a0G = r.bF.oV(.1),
				aTh = r.bF.oV(.08 + .04 * (bD.aTi < 1), .3);
			return {
				a0G: a0G,
				aTh: aTh,
				a0I: bD.du / bD.cp - a0G - aTh
			}
		}, this.resize = function(aP7) {
			var cs = kO.length,
				vW = this.a0F(),
				a0G = vW.a0G,
				aTh = vW.aTh;
			for (aTb.style.height = r.bF.nO(a0G), r.bF.kB(aTb, 2), aTc.style.top = r.bF.nO(bD.du / bD.cp - aTh), aTc.style.height = r.bF.nO(aTh), r.bF.kB(aTc, 8), nJ.style.top = r.bF.nO(a0G), nJ.style.height = nJ.style.maxHeight = r.bF.nO(vW.a0I),
				aTb.style.font = r.bF.bG(0, r.bF.oV(.02, .15)), aTc.style.font = r.bF.bG(0, r.bF.oV(.02, .7)), nJ.style.font = r.bF.bG(0, r.bF.oV(.02, .35)), a1 = 1; a1 < cs; a1++) r.bF.kB(kO[a1].button, 4);
			for (var aP8 = 0, a1 = 0; a1 < cs; a1++) aP8 += kO[a1].button.offsetWidth;
			if (aP7 && aP8 < aTc.offsetWidth)
				for (a1 = 0; a1 < cs; a1++) kO[a1].button.style.width = (100 * kO[a1].button.offsetWidth / aP8).toFixed(2) + "%";
			else
				for (a1 = 0; a1 < cs; a1++) kO[a1].button.style.width = "auto";
			aTc.ne && (aTc.scrollLeft = aTc.ne), aP7 || this.resize(!0)
		}, this.cR = function() {
			var vW = this.a0F(),
				aN = bD.cp;
			cS.fillStyle = bO.bR, cS.fillRect(0, aN * vW.a0G, bD.dt, aN * vW.a0I)
		}, nG.style.position = "absolute", nG.style.top = "0", nG.style.left = "0", nG.style.width = "100%", nG.style.height = "100%", aTb.style.position = "absolute", aTb.style.top = "0", aTb.style.left = "0", aTb.style.width = "100%", aTb.style
		.display = "flex", aTb.style.backgroundColor = bO.bR, aTc.style.position = "absolute", aTc.style.left = "0", aTc.style.width = "100%", r.bF.nP(aTc), aTd.style.height = aTd.style.maxHeight = "100%", nJ.style.position = "absolute", nJ.style
		.width = "100%", nJ.style.backgroundColor = bO.bR,
		function() {
			for (var a1 = 0; a1 < kO.length; a1++) kO[a1].button.style.height = "100%", kO[a1].button.style.padding = "0.0em 0.9em"
		}();
	for (var a1 = 0; a1 < kO.length; a1++) aTd.appendChild(kO[a1].button);
	aTb.appendChild(function() {
		var aTg = document.createElement("h1");
		return aTg.textContent = title, aTg.style.margin = "auto", aTg.style.fontSize = 18 <= title.length && bD.du > bD.dt ? "1.8em" : "2.3em", aTg.style.fontFamily = "Arial Black, system-ui", aTg
	}()), aTc.appendChild(aTd), !1 !== aTa && (nG.appendChild(nJ), nG.appendChild(aTb), nG.appendChild(aTc))
}

function aPu() {
	function aTj(cb) {
		var dC, cb = cb.target.files;
		cb && 0 < cb.length && (cb = cb[0], "json" === (dC = cb.name.split("."))[dC.length - 1].toLowerCase()) && ((dC = new FileReader).onload = aTr, dC.readAsText(cb))
	}

	function aTr(cb) {
		var aTu;
		q.cf || (cb = JSON.parse(cb.target.result), aTu = q.data = new n9, aTv(cb, aTu, "mapType", 0, 2), aTv(cb, aTu, "mapProceduralIndex", 0, 255), aTv(cb, aTu, "mapRealisticIndex", 0, 255), aTv(cb, aTu, "mapSeed", 0, 16383), function(aTt, aTu, ba,
				max) {
				aTt = aTt[ba];
				aTu[ba] = aU1(aTt) ? aTt.slice(0, max) : aTu[ba]
			}(cb, aTu, "mapName", 20), function(aTt, aTu, ba) {
				var lx;
				2 === aTu.mapType && (!aU1(aTt = aTt[ba]) || aTt.length <= 20 ? aTu.mapType = 0 : ((lx = new Image).onload = function() {
					jR.ju.aHf(lx, 1), lx.onload = null, lx = null
				}, lx.src = aTt))
			}(cb, aTu, "canvas"), aTv(cb, aTu, "passableWater", 0, 1), aTv(cb, aTu, "passableMountains", 0, 1), aTv(cb, aTu, "playerCount", 1, 512), aTv(cb, aTu, "humanCount", 1, 1), aTv(cb, aTu, "selectedPlayer", 0, 0), aTv(cb, aTu, "gameMode",
				0, 1), aTv(cb, aTu, "playerMode", 0, 0), aTv(cb, aTu, "battleRoyaleMode", 0, 0), aTv(cb, aTu, "numberTeams", 0, 8), aTv(cb, aTu, "isZombieMode", 0, 0), aTv(cb, aTu, "isContest", 0, 0), aTv(cb, aTu, "isReplay", 0, 0), aTy(cb, aTu,
				"elo", 16, 2, 16383), aTv(cb, aTu, "colorsType", 0, 1), aTv(cb, aTu, "colorsPersonalized", 0, 1), aTy(cb, aTu, "colorsData", 32, 512, 262143), aTv(cb, aTu, "selectableColor", 0, 1), aTy(cb, aTu, "teamPlayerCount", 16, 9, 512),
			aTv(cb, aTu, "neutralBots", 0, 1), aTv(cb, aTu, "botDifficultyType", 0, 3), aTv(cb, aTu, "botDifficultyValue", 0, 15), aTy(cb, aTu, "botDifficultyTeam", 8, 9, 15), aTy(cb, aTu, "botDifficultyData", 8, 512, 15), aTv(cb, aTu,
				"spawningType", 0, 2), aTv(cb, aTu, "spawningSeed", 0, 16383), aTy(cb, aTu, "spawningData", 16, 1024, 4095), aTv(cb, aTu, "selectableSpawn", 0, 1), aTv(cb, aTu, "playerNamesType", 0, 2),
			function(aTt, aTu, ba, size, max) {
				var s4 = aTt[ba];
				if (Array.isArray(s4)) {
					for (var s5 = new Array(size), cs = Math.min(s4.length, size), a1 = 0; a1 < cs; a1++) s5[a1] = aU1(s4[a1]) ? s4[a1].slice(0, max) : "";
					s5.fill("", cs), aTu[ba] = s5
				}
			}(cb, aTu, "playerNamesData", 512, 20), aTv(cb, aTu, "selectableName", 0, 1), aTv(cb, aTu, "aIncomeType", 0, 2), aTv(cb, aTu, "aIncomeValue", 0, 255), aTy(cb, aTu, "aIncomeData", 8, 512, 255), aTv(cb, aTu, "tIncomeType", 0, 2), aTv(
				cb, aTu, "tIncomeValue", 0, 255), aTy(cb, aTu, "tIncomeData", 8, 512, 255), aTv(cb, aTu, "iIncomeType", 0, 2), aTv(cb, aTu, "iIncomeValue", 0, 255), aTy(cb, aTu, "iIncomeData", 8, 512, 255), aTv(cb, aTu, "sResourcesType", 0, 2),
			aTv(cb, aTu, "sResourcesValue", 0, 2047), aTy(cb, aTu, "sResourcesData", 16, 512, 2047), n.ta(), n.b0.b1[0] = 0, n.aB(19))
	}

	function aTv(aTt, aTu, ba, min, max) {
		aTt = aTt[ba];
		aTu[ba] = "number" == typeof aTt && min <= aTt && aTt <= max ? Math.floor(aTt) : aTu[ba]
	}

	function aU1(ga) {
		return "string" == typeof ga
	}

	function aTy(aTt, aTu, ba, aU2, size, max) {
		var s4 = aTt[ba];
		if (Array.isArray(s4)) {
			for (var s5 = new(8 === aU2 ? Uint8Array : 16 === aU2 ? Uint16Array : Uint32Array)(size), cs = Math.min(s4.length, size), a1 = 0; a1 < cs; a1++) s5[a1] = hA.hB(s4[a1], 0, max);
			aTu[ba] = s5
		}
	}
	this.tc = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aTj, input.click()
	}, this.td = function() {
		for (var aTm, aTp, yO = q.data, keys = Object.keys(yO), aTk = {}, a1 = 0; a1 < keys.length; a1++) {
			var key = keys[a1];
			yO[key] instanceof Uint8Array || yO[key] instanceof Uint16Array || yO[key] instanceof Uint32Array ? aTk[key] = Array.from(yO[key]) : aTk[key] = yO[key]
		}
		aTk.canvas = 2 === aTk.mapType && aTk.canvas ? aTk.canvas.toDataURL() : null, aTm = aTk, aTm = JSON.stringify(aTm, null, 2), aTm = new Blob([aTm], {
			type: "application/json"
		}), (aTp = document.createElement("a")).href = URL.createObjectURL(aTm), aTp.download = "tt_scenario.json", aTp.click()
	}
}

function a9H() {
	this.zY = 0, this.qg = 0, this.mapSeed = 0, this.zZ = 0, this.za = 0, this.zb = 0, this.zc = 0, this.zd = 0, this.ze = 0, this.spawningSeed = 0, this.uY = 0, this.zs = 0, this.zy = [], this.zz = 1048575, this.a9P = 0, this.zu = [{
		qg: 0,
		mapSeed: 0,
		zZ: 0,
		c8: 100,
		zd: 0
	}, {
		qg: 1,
		mapSeed: 0,
		zZ: 1,
		c8: 200,
		zd: 0
	}, {
		qg: 2,
		mapSeed: 0,
		zZ: 2,
		c8: 300,
		zd: 0
	}, {
		qg: 3,
		mapSeed: 0,
		zZ: 3,
		c8: 400,
		zd: 0
	}, {
		qg: 0,
		mapSeed: 0,
		zZ: 9,
		c8: 500,
		zd: 0
	}, {
		qg: 1,
		mapSeed: 0,
		zZ: 10,
		c8: 600,
		zd: 0
	}, {
		qg: 2,
		mapSeed: 0,
		zZ: 8,
		c8: 700,
		zd: 0
	}, {
		qg: 3,
		mapSeed: 0,
		zZ: 3,
		c8: 800,
		zd: 0
	}]
}

function aDj() {
	this.a2N = 512, this.a6t = 8, this.rm = 0, this.rM = 0, this.rS = new Uint16Array(this.a2N), this.rP = new Uint32Array(this.a2N), this.a2i = new Uint16Array(this.a2N), this.wH = new Uint32Array(this.a2N), this.im = new Uint16Array(this.a2N), this
		.rD = new Uint16Array(this.a2N), this.rK = new Uint8Array(this.a2N), this.aHQ = new Uint8Array(this.a2N), this.rc = new Array(this.a2N), this.re = new Uint16Array(this.a2N), this.yG = new Uint8Array(q.aA), this.yL = new Uint16Array(this.a6t *
			q.aA), this.az = function() {
			this.rm = 0, this.rM = 0, this.yG.fill(0), this.rc.fill(null)
		}, this.iY = function(player) {
			var dn = d7.dF[0],
				a2U = d7.dM[1],
				rb = d7.dC[0],
				aU3 = this.rM,
				cs = this.rm,
				ic = f7.aU4(rb[0]),
				dj = this.yG[player],
				dk = (player << 3) + dj;
			this.rS[cs] = dk, this.rP[cs] = ic, this.a2i[cs] = 0, dn < 60 && (r.cz.aFo(player, 60 - dn), dn = 60), this.wH[cs] = dn, this.im[cs] = il.iT.iY(cs, f7.ij(ic)), this.rD[cs] = aU3, this.rK[cs] = a2U, this.aHQ[cs] = 0, this.rc[cs] = rb, this
				.re[cs] = 0, this.rM = (aU3 + 1) % 65536, this.yG[player] = dj + 1, this.yL[dk] = cs, this.rm++, il.a2U.a4O(player, rb[rb.length - 1], a2U, aU3, dn)
		}, this.bs = function() {
			il.a2U.bs();
			for (var cy = q.bS, bx = il.nr.a0d(cy), aJM = (! function(aJM) {
					for (var aU9, rP = aJM.rP, wH = aJM.wH, aHQ = aJM.aHQ, a2i = aJM.a2i, im = aJM.im, rc = aJM.rc, re = aJM.re, aJM = aJM.rm, aHU = dR.dS << 4, a1 = aJM - 1; 0 <= a1; a1--) {
						var aUA = rP[a1],
							rb = rc[a1],
							aUB = re[a1],
							ic = f7.aU4(rb[aUB]),
							ie = f7.aU4(rb[aUB + 1]),
							aUC = ic % aHU,
							ic = ~~((ic + .5) / aHU),
							aUE = ie % aHU,
							aUF = ~~((ie + .5) / aHU),
							aUG = aUE - aUC,
							aUH = aUF - ic,
							gM = Math.max(~~Math.sqrt(aUG * aUG + aUH * aUH + .5), 1),
							aG4 = wH[a1],
							aG4 = (aG4 = aHQ[a1] ? 4e4 : 25e4 + Math.min(20 * aG4, 3e5) + Math.min(aG4 >> 3, 5e4), a2i[a1] + Math.max(~~((aG4 + .5) / gM), 1));
						65535 <= aG4 ? aUB + 2 < rb.length ? (re[a1] = aUB + 1, rP[a1] = aU9 = function(a1, aUI, aUC, aUD, aUB, gM, rb, aHU) {
							aUI = Math.min(aUI - 65535, 65535);
							var rb = f7.aU4(rb[aUB + 2]),
								aUB = rb % aHU - aUC,
								rb = ~~((rb + .5) / aHU) - aUD,
								aUK = Math.max(~~Math.sqrt(aUB * aUB + rb * rb + .5), 1);
							return aUI = Math.min(Math.floor((gM * aUI + .5) / aUK), 65534), il.b0.a2i[a1] = aUI, aUC + hA.iV(aUI * aUB, 65535) + aHU * (aUD + hA.iV(aUI * rb, 65535))
						}(a1, aG4, aUE, aUF, aUB, gM, rb, aHU)) : (rP[a1] = aU9 = ie, a2i[a1] = 65535) : (a2i[a1] = aG4, rP[a1] = aU9 = aUC + hA.iV(aG4 * aUG, 65535) + aHU * (ic + hA.iV(aG4 * aUH, 65535))), im[a1] = il.iT.ia(im[a1], aUA,
							aU9)
					}
				}(this), ! function(aJM) {
					if (bL.bM() % 2 == 1) {
						var a1, aF, jP, fv, aN, aUL, aQY, aUM, wo, cU, cV, ic, aUN, a9E, aUP, vg, cs = aJM.rm,
							rP = aJM.rP,
							rS = aJM.rS,
							wH = aJM.wH,
							aHQ = aJM.aHQ,
							iT = il.iT.iT,
							j7 = iT.length,
							iU = il.iT.iU,
							aHU = dR.dS << 4,
							aUR = q.bf,
							aUS = aC.wD,
							ba = (cs - 1) * (hA.iV(bL.bM(), 2) % 2);
						for (a1 = 0; a1 < cs; a1++)
							for (aF = Math.abs(a1 - ba), ic = rP[aF], jP = f7.ij(ic), wo = rS[aF] >> 3, cU = ic % aHU, cV = ~~((ic + .5) / aHU), aUP = wH[aF], fv = 0; fv < 9; fv++)
								if (!((aUL = jP + iU[fv]) < 0 || j7 <= aUL))
									for (aUM = iT[aUL], aQY = aUM.length, aN = 0; aN < aQY; aN++) aUN = aUM[aN], vg = rS[aUN] >> 3, wo == vg || aUR && aUS[wo] === aUS[vg] && aUS[wo] || (vg = rP[aUN], (a9E = cU - vg % aHU) * a9E + (a9E = cV -
										~~((vg + .5) / aHU)) * a9E < 14400 && (vg = wH[aUN], a9E = vg <= aUP ? Math.max(1, hA.iV(vg + hA.iV(aUP - vg, 10), 10)) : Math.max(1, hA.iV(aUP, 10)), wH[aUN] = Math.max(vg - a9E, 0), aHQ[aUN] =
										4))
					}
				}(this), ! function(aJM) {
					if (bL.bM() % 5 == 3)
						for (var wH = aJM.wH, cs = aJM.rm, a1 = 0; a1 < cs; a1++) {
							var dn = wH[a1];
							wH[a1] = Math.max(dn - Math.max(1, dn >> 7), 0)
						}
				}(this), this), wH = aJM.wH, aHQ = aJM.aHQ, a1 = aJM.rm - 1; 0 <= a1; a1--) aHQ[a1] = aHQ[a1] >> 1, 0 === wH[a1] && (il.rL.a2S(a1), il.a0h.a4N(a1));
			dg.a0e(cy, bx - il.nr.a0d(cy), 15)
		}
}

function aPN() {
	var aN = r.color;
	this.nW = aN.a7e(0, 0, 0), this.a9a = aN.xj(0, 0, 0, .7), this.a1L = aN.xj(0, 0, 0, .5), this.bR = aN.xj(0, 0, 0, .85), this.lC = aN.xj(0, 0, 0, .75), this.xp = aN.xj(0, 0, 0, .6), this.a8k = aN.xj(0, 0, 0, .35), this.bX = aN.a7e(255, 255, 255),
		this.bW = aN.xj(255, 255, 255, .3), this.xo = aN.xj(255, 255, 255, .6), this.lY = aN.xj(255, 255, 255, .4), this.aML = aN.xj(255, 255, 255, .25), this.qp = aN.xj(255, 255, 255, .85), this.pD = aN.xj(255, 255, 255, .75), this.aUT = aN.xj(255,
			255, 255, .15), this.aUU = aN.xj(255, 255, 255, .11), this.xt = aN.a7e(128, 128, 128), this.wu = aN.xj(64, 64, 64, .75), this.xh = aN.xj(88, 88, 88, .83), this.u1 = aN.xj(60, 60, 60, .85), this.js = aN.xj(80, 60, 60, .85), this.aUV = aN
		.a7e(170, 170, 170), this.aOF = aN.a7e(200, 235, 245), this.lQ = aN.a7e(30, 255, 30), this.lP = aN.a7e(0, 200, 0), this.pk = aN.a7e(128, 255, 128), this.aUW = aN.xj(10, 65, 10, .75), this.pA = aN.xj(0, 255, 0, .6), this.aUX = aN.xj(0, 255, 0,
			.5), this.lL = aN.xj(0, 200, 0, .5), this.ug = aN.xj(0, 100, 0, .75), this.nT = aN.xj(0, 60, 0, .8), this.bU = aN.xj(0, 255, 0, .3), this.aQS = aN.xj(0, 180, 0, .6), this.aUY = aN.xj(0, 120, 0, .85), this.xu = aN.a7e(0, 120, 0), this.jp =
		aN.xj(0, 70, 0, .85), this.aUZ = aN.a7e(190, 230, 190), this.aUa = aN.a7e(0, 255, 0), this.aUb = aN.a7e(255, 120, 120), this.pl = aN.a7e(255, 160, 160), this.lS = aN.a7e(255, 70, 70), this.lR = aN.a7e(230, 0, 0), this.pB = aN.xj(220, 0, 0,
			.6), this.la = aN.xj(255, 100, 100, .8), this.w5 = aN.xj(100, 0, 0, .85), this.nS = aN.xj(60, 0, 0, .85), this.aUc = aN.xj(200, 0, 0, .6), this.aOf = aN.xj(120, 0, 0, .85), this.w0 = aN.a7e(255, 70, 10), this.aUd = aN.a7e(230, 190, 190),
		this.aUe = aN.a7e(255, 0, 0), this.aUf = aN.a7e(255, 0, 255), this.nR = aN.xj(60, 0, 60, .85), this.jq = aN.xj(0, 60, 60, .85), this.lM = aN.xj(10, 60, 60, .9), this.aUg = aN.xj(0, 96, 96, .75), this.aUh = aN.a7e(0, 255, 255), this.aUi = aN
		.a7e(160, 160, 255), this.bQ = aN.xj(0, 40, 90, .75), this.aUj = aN.xj(0, 0, 255, .6), this.aUk = aN.a7e(200, 200, 255), this.xf = aN.xj(50, 50, 255, .83), this.bP = aN.xj(20, 90, 150, .75), this.wv = aN.xj(10, 10, 120, .75), this.aQt = aN
		.a7e(255, 120, 100), this.aUl = aN.xj(255, 255, 0, .5), this.bV = aN.xj(255, 255, 150, .2), this.hh = aN.a7e(255, 255, 0), this.w4 = aN.a7e(255, 255, 200), this.aUm = aN.xj(200, 200, 0, .6), this.aUn = aN.xj(140, 120, 0, .75), this.aUo = aN
		.xj(180, 160, 40, .75), this.jr = aN.xj(70, 50, 20, .85), this.aUp = aN.xj(30, 30, 0, .85), this.nV = aN.xj(60, 60, 0, .85), this.aUq = aN.a7e(255, 255, 100), this.aUr = aN.a7e(255, 255, 140), this.aUs = aN.xj(255, 140, 0, .75), this.nU = aN
		.xj(70, 40, 0, .85), this.aUt = aN.a7e(255, 150, 0), this.a0v = aN.xj(255, 200, 80, .85), this.p7 = aN.xj(0, 0, 0, 0), this.aMx = aN.xj(255, 255, 255, 0), this.aMy = aN.xj(254, 254, 254, 0)
}

function vA() {
	var b, c, d, y;

	function h() {
		l(), 2 !== q.data.aIncomeType && (q.data.aIncomeData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.aIncomeType ? (r.s.t(d.u(), q.data.aIncomeData, 255), r.s.max(q.data.aIncomeData) || (q.data.aIncomeType = 0)) : 1 !== q.data.aIncomeType || q.data.aIncomeValue || (q.data.aIncomeType = 0)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(108), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(109), L(3), L(6)],
			value: q.data.aIncomeType
		}, function(a9) {
			l(), 2 !== a9 || q.data.aIncomeData || (q.data.aIncomeData = new Uint8Array(q.aA)), q.data.aIncomeType = a9, n.aB(22)
		})), y.push(a3)
	}(y = []), function(y) {
		var a3;
		1 === q.data.aIncomeType && ((a3 = new a4).a5("Value"), a3.aK(new hZ({
			a9: -1,
			value: q.data.aIncomeValue
		}, 1, 0, function(cb) {
			var value = hA.hB(Math.floor(cb.target.value), 0, 255);
			cb.target.value = q.data.aIncomeValue = value
		})), y.push(a3))
	}(y), function(y) {
		var a3;
		2 === q.data.aIncomeType && ((a3 = new a4).a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.aIncomeData, 4)), a3.aK(d), y.push(a3))
	}(y), y))
}

function a4J(xB) {
	var a5U = document.createElement("div"),
		aUu = document.createElement("div"),
		aUv = [];

	function tw() {
		c9.lz() || (this.style.backgroundColor = r.color.u4(bO.bR, 50))
	}

	function tx() {
		this.style.backgroundColor = bO.bR
	}
	this.hj = function(aUw, xD) {
			aUv[2].textContent = aUw + 1 + " / " + xD
		}, this.show = function(vu) {
			vu = uN.nr.a22(vu, uN.nr.a23(vu)), aUu.appendChild(uN.eu.transform(vu)), document.body.appendChild(a5U)
		}, this.resize = function() {
			var du = r.bF.oV(.03, .5);
			a5U.style.width = 10 * du + "px", a5U.style.font = r.bF.bG(1, .75 * du), r.bF.kB(a5U, 4), aUu.style.top = du + "px", aUu.style.font = r.bF.bG(0, .55 * du), r.bF.kB(aUu, 2), a5U.style.height = du + aUu.offsetHeight + "px";
			for (var a1 = 0; a1 < 3; a1++) r.bF.kB(aUv[a1], 6), aUv[[0, 1, 3][a1]].style.width = 2 * du + "px";
			for (a1 = 0; a1 < 4; a1++) aUv[a1].style.height = du + "px", r.bF.kB(aUv[a1], 2);
			aUv[2].style.width = 4 * du + "px", aUv[1].style.left = 2 * du + "px", aUv[2].style.left = 4 * du + "px", aUv[3].style.left = 8 * du + "px"
		}, this.ln = function() {
			for (var a1 = 0; a1 < 4; a1++) aUv[a1].onclick = null, aUv[a1].onmouseover = null, aUv[a1].onmouseout = null;
			n.removeChild(document.body, a5U), a5U = aUu = aUv = null
		}, a5U.style.position = "absolute", a5U.style.color = bO.bX, a5U.style.zIndex = "3", a5U.style.right = "0", a5U.style.top = "0", aUu.style.position = "absolute", aUu.style.height = "auto", aUu.style.color = bO.bX, aUu.style.backgroundColor =
		bO.bR, aUu.style.left = "0", aUu.style.width = "100%", aUu.style.overflowWrap = "break-word", a5U.appendChild(aUu);
	for (var a1 = 0; a1 < 4; a1++) aUv[a1] = document.createElement("div"), aUv[a1].style.position = "absolute", aUv[a1].style.backgroundColor = bO.bR, aUv[a1].style.color = bO.bX, aUv[a1].style.top = "0", aUv[a1].style.display = "flex", aUv[a1]
		.style.justifyContent = "center", aUv[a1].style.alignItems = "center", aUv[a1].style.userSelect = "none", aUv[a1].style.outline = "none", aUv[a1].style.font = "inherit", 2 !== (aUv[a1].a4I = a1) && (aUv[a1].onclick = xB, aUv[a1].onmouseover =
			tw, aUv[a1].onmouseout = tx), a5U.appendChild(aUv[a1]);
	aUv[0].textContent = "◀", aUv[1].textContent = "▶", aUv[3].textContent = "✖"
}

function a5X(aUx, aUy, aUz, aV0) {
	var self;
	this.na = document.createElement("span"), (self = this).na.textContent = aUx, self.na.style.color = bO.bX, self.na.style.position = "absolute", self.na.style.font = "inherit", aV0 ? self.na.style.bottom = "0.06em" : self.na.style.top = "0.12em",
		aUz ? self.na.style.left = "0.2em" : self.na.style.right = "0.2em", self.na.style.fontSize = "0.6em", self.na.style.pointerEvents = "none", self.na.style.whiteSpace = "pre", aUy.style.position = "relative", aUy.style.overflow = "hidden", aUy
		.appendChild(self.na)
}

function uT(title, aDw, aV1, oY) {
	var hS, aRB;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), aRB.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, oY = oY || [new g("⬅️ " + L(1), function() {
		n.p()
	})], hS = new f(title, oY), aRB = new aDv(hS.j, aDw), aV1 && r.bF.textAlign(hS.j.style, 1)
}

function aPo() {
	this.aP = new a25, this.buffer = new aLI, this.hi = new aV2, this.b0 = new aV3, this.aOg = new aS1, this.az = function() {
		this.buffer.az(), (new ld).az(), this.aOg.az(), this.b0.aV4()
	}
}

function aP4() {
	var dt, du, aV5;

	function aVG(wo, gM, aVE, aV8, fm) {
		gM = aVF(wo, gM + 1 + 2 * aV8 & 3);
		! function(wo, vg) {
			return 1 < Math.abs(wo % dt - vg % dt) || 1 < Math.abs(aVJ(wo) - aVJ(vg))
		}(wo, gM) && 0 === fm[gM << 2] && (fm[gM << 2] = aVE)
	}

	function aVJ(cy) {
		return Math.floor((cy + .5) / dt) % du
	}

	function aVF(cy, gM) {
		return cy + aV5[gM]
	}
	this.i5 = function(ga) {
		var a1, ek, cs, aV6, q9 = hx;
		for (i3.oi.aHZ(i3.oi.aHa(ga)), dR.qe.qf[dR.qg].dt = dR.dS = dt = q9.i2(12), dR.qe.qf[dR.qg].du = dR.dT = du = q9.i2(12), aV5 = [-dt, -1, dt, 1], dR.t6 = document.createElement("canvas"), dR.t6.width = dR.dS, dR.t6.height = dR.dT, dR.xb =
			dR.t6.getContext("2d", {
				alpha: !1
			}), dR.aEI = dR.aE9 = null, dR.aEI = dR.xb.getImageData(0, 0, dR.dS, dR.dT), dR.aE9 = dR.aEI.data, r.s.rr(dR.aE9), cs = q9.i2(12), ek = q9.i2(5), aV6 = mr(dt * du - 1), a1 = 0; a1 < cs; a1++) ! function(jP, cy, aV7, aV8) {
			var a1, gM, q9 = hx,
				fm = dR.aE9,
				aRu = cy,
				aVB = cy,
				aVC = 0,
				aVD = 1 + aV7,
				aVE = 2 - aV7;
			for (fm[cy << 2] = aVD, a1 = 0; a1 < jP; a1++) gM = q9.i2(2), cy = aVF(cy, gM), fm[cy << 2] === aVD ? aVC % 2 == 1 && aVG(aVB, aVC + 2 * aV8 + 3, aVE, aV8, fm) : fm[cy << 2] = aVD, aVG(cy, gM, aVE, aV8, fm), aVG(aVB, gM, aVE, aV8,
				fm), aVB = cy, aVC = gM;
			aVF(cy, 0) === aRu ? (aVG(cy, 0, aVE, aV8, fm), aVG(aRu, 0, aVE, aV8, fm)) : aVF(cy, 1) === aRu && (aVG(cy, 0, aVE, aV8, fm), aVG(aRu, 2, aVE, aV8, fm));
			0 === jP && (aVG(aRu, 0, aVE, aV8, fm), aVG(aRu, 2, aVE, aV8, fm))
		}(q9.i2(ek), q9.i2(aV6), 1 === q9.i2(1), 1 === q9.i2(1));
		var c4, bp, aF, aVK, aVL, aVM, fm = dR.aE9,
			aVN = !0,
			a32 = dR.qe.qf[dR.qg].a32,
			a33 = dR.qe.qf[dR.qg].a33;
		for (bp = 0; bp < du; bp++)
			for (aVK = !0, aVL = aVN, c4 = aVM = 0; c4 < dt; c4++) aF = 4 * bp * dt + 4 * c4, aVM <= c4 && 0 < fm[aF] && (aVL = 2 === fm[aF], aVK) && (aVK = !1, aVL !== aVN) ? (aVN = aVL, aVM = c4 + 1, c4 = -1) : (aVL ? (fm[aF] = a33[0], fm[1 +
				aF] = a33[1], fm[2 + aF] = a33[2]) : (fm[aF] = a32[0], fm[1 + aF] = a32[1], fm[2 + aF] = a32[2]), fm[3 + aF] = 255);
		dR.xb.putImageData(dR.aEI, 0, 0), dR.a1B = !0, dR.aEJ.az(), bL.cC = !0
	}
}

function aVO() {
	this.aDD = function() {
		b5.hi.aR5(), b5.hi.aVP(), hW.b0.close(0, 3255), 0 === b2.id ? b2.a26 && b2.a26.clear() : 1 === b2.id ? b2.k3.saveString(199, "") : 2 === b2.id && b2.a2B.postMessage("clear")
	}, this.aD3 = function() {
		2 === b2.id ? b2.a2B.postMessage("showConsentForm") : 1 === b2.id && b2.k3.setState(7)
	}, this.aD5 = function() {
		this.setState(14)
	}, this.b4 = function() {
		return 1 === b5.buffer.aLN(2)
	}, this.aVQ = function() {
		b5.buffer.aLM(102, "")
	}, this.setState = function(uV) {
		1 === b2.id && 5 <= b2.k2 && b2.k3.setState(uV)
	}, this.uf = function() {
		var zL;
		1 === b2.id && 7 <= b2.k2 ? b2.k3.setState(5) : 2 === b2.id ? b2.a2B.postMessage("reload 0") : ((zL = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zL.toString())
	}, this.tk = function() {
		0 !== b2.id && (1 === b2.id ? b2.k3.prepareAd("8646194357") : 2 === b2.id && (0 === b2.k2 ? b2.a2B.postMessage("prepare ad 2904813909") : b2.a2B.postMessage("loadAds 2904813909")))
	}, this.aJg = function(bx) {
		return 0 !== b2.id && (1 === b2.id ? 12 <= b2.k2 && (b2.k3.presentAd(bx), !0) : 2 === b2.id && 0 !== b2.k2 && (b2.a2B.postMessage("showAd"), !0))
	}, this.aPz = function() {
		2 === b2.id && b2.k2 < 23 && n.aB(4, 1, new uT("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + aD7.aD9 + "' target='_blank'>" + aD7
			.aD9 + "</a>", !0, [new g("⬅️ " + L(1), function() {
				n.aB(0)
			}, bO.aOf)]))
	}
}

function yf() {
	this.r0 = function() {
		var aVR = q.data;
		r.s.sB(aVR.teamPlayerCount, aVR.playerCount), aVR.numberTeams = r.s.s2(aVR.teamPlayerCount, 0), aVR.teamPlayerCount[0] && aVR.teamPlayerCount[7] && (aVR.teamPlayerCount[7] = 0, this.r0())
	}, this.tE = function() {
		var aVR = q.data;
		aVR.mapType < 2 ? dR.wx(dR.t8(aVR), aVR.mapSeed) : dR.aEX(aVR.canvas)
	}, this.tC = function() {
		var aVR = q.data;
		aVR.colorsData || (aVR.colorsData = new Uint32Array(1)), 0 === aVR.gameMode && (aVR.colorsData[0] = b5.b0.aLF()), aVR.selectableName && (aVR.playerNamesData || (aVR.playerNamesData = new Array(1)), aVR.playerNamesData[0] = b5.buffer.data[
			122].value), aVR.nA = new Uint32Array(1), aVR.nA[0] = i3.oi.a1q(b5.buffer.data[105].value, 5)
	}, this.jw = function() {
		q.data = new n9
	}
}

function aPT() {
	var nK, c4, bp, aVS, aVT, aVU, c8, aVV, aVW, aVX, aVY, gap, zoom, aVZ, aVa;

	function aVl(f1, f2, gF) {
		eb.w9(gF) || -1 === (f1 = il.nr.aB3(f1, f2)) ? g5.w8(gF) : g5.wF(f1)
	}

	function aVh(aVV) {
		for (var a1 = aVZ.length - 1; 0 <= a1; a1--)
			if (aVZ[a1] === aVV) return 1
	}

	function aVf(aHB) {
		var a1, cs;
		if (-1 !== aHB)
			for (cs = nK.length, a1 = 0; a1 < cs; a1++)
				if (nK[a1].l2 && nK[a1].c4 + 1 === aHB % 4 && nK[a1].bp + 1 === aHB >> 2) return a1;
		return -1
	}

	function aVd(f1, f2) {
		var nb = gap / 2;
		return f1 < c4 - aVS - 3 * nb || c4 + 3 * aVS + 5 * nb < f1 || f2 < bp - aVS - 3 * nb || bp + 2 * aVS + 3 * nb < f2 ? -1 : 4 * (f2 < bp - nb ? 0 : f2 < bp + aVS + nb ? 1 : 2) + (f1 < c4 - nb ? 0 : f1 < c4 + aVS + nb ? 1 : f1 < c4 + 2 * aVS +
			3 * nb ? 2 : 3)
	}
	this.gr = function() {
		var a1, fv, aVc = [bO.aQS, bO.aUc, bO.xp, bO.aUm, bO.aUj];
		for (nK = new Array(10), a1 = 0; a1 < 10; a1++) nK[a1] = {
			id: a1,
			l2: !1,
			mc: 0,
			canvas: [],
			c4: 0,
			bp: 0
		};
		for (nK[0].colors = [0, 1, 2, 3], nK[0].c4 = 0, nK[0].bp = 0, nK[1].colors = [1, 4], nK[1].c4 = 1, nK[1].bp = 0, nK[2].colors = [0, 1], nK[2].c4 = -1, nK[2].bp = 0, nK[3].colors = [0], nK[3].c4 = 0, nK[3].bp = 0, nK[4].colors = [0, 2],
			nK[4].c4 = 1, nK[4].bp = 1, nK[5].colors = [3], nK[5].c4 = 0, nK[5].bp = -1, nK[6].id = 20, nK[6].colors = [0], nK[6].c4 = 1, nK[6].bp = -1, nK[7].id = 21, nK[7].colors = [0], nK[7].c4 = 0, nK[7].bp = 1, nK[8].id = 16, nK[8]
			.colors = [0], nK[8].c4 = 0, nK[8].bp = 0, nK[9].id = 10, nK[9].colors = [4], nK[9].c4 = 2, nK[9].bp = 0, a1 = 0; a1 < 10; a1++)
			for (fv = 0; fv < nK[a1].colors.length; fv++) nK[a1].canvas.push(function(id, a2v) {
				if (id < 20) return r.canvas.p6(bl.get(3), id, a2v);
				var a2v = bl.get(3).height,
					fr = r.bF.sq(a2v, a2v),
					fF = r.bF.getContext(fr);
				20 === id ? fF.drawImage(bl.get(18), 0, 0) : 21 === id && et.fm.vx(et.eu.r5 + et.eu.a9j, fF, 0, 0, a2v);
				return fr
			}(nK[a1].id, aVc[nK[a1].colors[fv]]))
	}, this.ft = function() {
		return nK
	}, this.az = function() {
		aVZ = [], c4 = bp = c8 = 0, aVT = aVU = -1e3, this.resize()
	}, this.resize = function() {
		aVS = Math.floor((b2.b3.b4() ? .075 : .0468) * bD.bE), zoom = aVS / bl.get(3).height, gap = Math.floor(aVS / 3)
	}, this.aTC = function(f1, f2) {
		return !!this.l2() && (bL.cC = !0, !!et.fm.c3(f1, f2, aVW) || (f1 = function(f1, f2) {
			aVU = aVT = -1e3;
			var aVe = aVf(aVd(f1, f2));
			if (-1 === aVe) return 0;
			if (1 !== nK[aVe].colors[nK[aVe].mc])
				if (5 === aVe) {
					if (! function() {
							var bx = performance.now();
							aVa + 4e3 < bx && (aVZ = []);
							aVa = bx
						}(), aVh(aVV)) return 1;
					aVZ.push(aVV), 16 < aVZ.length && aVZ.shift()
				} else if (6 === aVe) {
				for (var a1 = aVZ.length - 1; 0 <= a1; a1--) 0 === b7.c0[aVZ[a1]] && aVZ.splice(a1, 1);
				0 < aVZ.length && (z5.aGN(1, aVZ, !0) && jd.cz.aVi(aVZ, aVV), aVZ = [])
			} else if (2 === aVe) ym.r8(aVV) && jd.pJ.aVj(mS.y8(), aVV);
			else if (3 === aVe) q.cJ && jd.pJ.aLY(aVX);
			else if (0 === aVe)
				if (0 === nK[0].mc) {
					if (q.yZ && jK.aAB() < 350) return 1;
					y5.y6(4), jd.pJ.y7(mS.y8(), aVV)
				} else z6.aI7(aVV, mS.y8());
			else if (1 === aVe) jd.pJ.aLd(mS.y8(), aVX);
			else if (9 === aVe) jd.pJ.aLe(mS.y8());
			else {
				if (7 === aVe) return y5.y6(0), et.fm.show(f1, f2), 2;
				if (4 === aVe) z5.aGN(0, [aVV], !0) && jd.cz.vo(aVV);
				else {
					if (8 !== aVe) return 0;
					jd.pJ.aLa(mS.y8(), aVY, aVV)
				}
			}
			return 1
		}(f1, f2), this.aL(), 2 === f1 && (et.fm.l2 = !0), 0 < f1))
	}, this.co = function(f1, f2) {
		this.l2() || (aVT = f1, aVU = f2, c8 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = f7.f8(mouseX),
			coordY = f7.fA(mouseY),
			point = f7.nq(f7.uG(coordX, coordY));
		f7.aAK(coordX, coordY) && aVl(mouseX, mouseY, point)
	}, this.click = function(f1, f2, aTG) {
		var nu = f7.f8(f1),
			nw = f7.fA(f2),
			oN = f7.uG(nu, nw),
			gF = f7.nq(oN),
			aVk = (b2.b3.b4() ? .025 : .0144) * bD.bE,
			bx = performance.now();
		return !(Math.abs(f1 - aVT) > aVk || Math.abs(f2 - aVU) > aVk || c8 + 500 < bx || (c8 = bx, c9.lz() && (c9.aAI = f1, c9.aAJ = f2, z7.bs(1), z8.bs(1)), !f7.aAK(nu, nw))) && (aTG ? (aVl(f1, f2, gF), !1) : j9.jA || this.l2() || !r.cz.pt(q
			.bS) || q.cL ? (this.aL(), !1) : (q.cJ ? 0 <= (aVX = aLX.aEn(oN)) && (nK[3].l2 = !0) : 2 === q.cf ? eb.a4a(gF) && (aVV = eb.wB(gF), r.cz.fO(aVV) || (nK[0].l2 = !0, nK[0].mc = 1, nK[7].l2 = !0)) : (il.aDs.r8(q.bS, oN) && (nK[0]
				.l2 = !0, nK[0].mc = 1, nK[1].l2 = !0, nK[1].mc = 0, nK[9].l2 = !0, nK[9].mc = 0), il.aDr.ng(q.bS, oN) && (nK[0].l2 = !0, nK[0].mc = 1, nK[1].l2 = !0, nK[1].mc = 1, aVX = d7.dM[7]), eb.wE(gF) ? (aVY = aLZ.a9d.aG6(
			gF)) && (aVk = f7.nq(aVY), nK[8].l2 = !0, aVV = eb.wA(aVk) ? q.aA : eb.wB(aVk)) : (eb.gN(q.bS, gF) && (aVW = q.bS, nK[0].l2 = !0, nK[0].mc = 1, nK[7].l2 = !0), -1 !== (bx = aLX.aEo(oN)) && (eb.wA(bx << 2) ? (aVV = q.aA,
				a4Q.aLb(q.bS) ? (nK[0].l2 = !0, nK[0].mc = 0) : yB.yC(q.bS) && (nK[0].l2 = !0, nK[0].mc = 3)) : (aVV = eb.wB(bx << 2), nK[0].mc = 1, nK[5].l2 = function(aVV) {
				return !r.cz.fO(aVV) && !aVh(aVV) && z5.aGN(1, [aVV], !1)
			}(aVV), nK[7].l2 || r.cz.fO(aVV) || (aVW = aVV, nK[7].l2 = !0), nK[4].l2 = !r.cz.fO(aVV) && !ez.g7(aVV) && z5.aGN(0, [aVV], !1), nK[6].l2 = function(aVV) {
				if (0 === aVZ.length) return !1;
				if (performance.now() > aVa + 4e3) return !(aVZ = []);
				return !aVh(aVV) && ! function(aVV) {
					var a1;
					if (q.bf)
						for (a1 = aVZ.length - 1; 0 <= a1; a1--)
							if (!a4Q.a4R(aVV, aVZ[a1])) return 1;
					return
				}(aVV)
			}(aVV), a4Q.a4R(aVV, q.bS) ? (a4Q.aLc(q.bS, aVV) ? (nK[0].mc = 0, nK[0].l2 = !0) : yB.yC(q.bS) && (nK[0].mc = 3, nK[0].l2 = !0), nK[0].l2 = this.aVq()) : (nK[2].l2 = !0, ym.r8(aVV) ? nK[2].mc = 0 : nK[2].mc =
				1, nK[0].l2 = !0))))), this.aVm(f1, f2)))
	}, this.aVm = function(f1, f2) {
		return c4 = f1 - Math.floor(aVS / 2), bp = f2 - Math.floor(aVS / 2), !!this.l2()
	}, this.cF = function(f1, f2) {
		return !!this.l2() && (et.fm.l2 ? !et.fm.c5(f1, f2) && (et.fm.l2 = !1, bL.cC = !0) : function(aJM, f1, f2) {
			f1 = aVd(f1, f2);
			if (0 <= aVf(f1)) return !1;
			if ((1 === f1 || 6 === f1) && 0 <= aVf(2)) return !1;
			if ((6 === f1 || 9 === f1) && 0 <= aVf(10)) return !1;
			return aJM.aL(), bL.cC = !0
		}(this, f1, f2))
	}, this.aL = function() {
		for (var a1 = nK.length - 1; 0 <= a1; a1--) nK[a1].l2 = !1, nK[a1].mc = 0;
		et.fm.l2 = !1
	}, this.l2 = function() {
		return this.aVq() || et.fm.l2
	}, this.aVq = function() {
		for (var cs = nK.length, a1 = 0; a1 < cs; a1++)
			if (nK[a1].l2) return !0;
		return !1
	}, this.cR = function() {
		if (this.l2())
			if (et.fm.l2) et.fm.cR();
			else {
				var a1, fF = cS,
					fv = nK,
					cs = fv.length,
					aVu = (aVS + gap) / zoom;
				for (fF.imageSmoothingEnabled = !0, fF.setTransform(zoom, 0, 0, zoom, c4, bp), a1 = 0; a1 < cs; a1++) fv[a1].l2 && cS.drawImage(fv[a1].canvas[fv[a1].mc], fv[a1].c4 * aVu, fv[a1].bp * aVu);
				fF.imageSmoothingEnabled = !1, fF.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function nX(aUx, aUy, aVv, aVw, aVx) {
	var self;
	this.na = document.createElement("span"), this.resize = function() {
			this.na.style.fontSize = ((aVw - aVv) * aUy.offsetHeight).toFixed(1) + "px"
		}, (self = this).na.textContent = aUx, self.na.style.color = bO.bX, self.na.style.font = "inherit", self.na.style.margin = "0.1em 0.6em", self.na.style.pointerEvents = "none", aVx && (self.na.style.fontWeight = "bold"), self.na.style
		.whiteSpace = "nowrap", self.na.style.display = "block", aUy.appendChild(self.na)
}

function aEw() {
	this.aVy = 0, this.az = function() {
		this.aVy = 0
	}, this.bs = function() {
		if (!this.aVy && bL.bM() % 30 == 7 && r.cz.a3D(90) && (yt.performance.aVy = 1)) {
			if (q.bf) {
				var zT = d5.pb();
				if (aC.d2[zT]) {
					d5.d6(zT);
					var dC = d7.d9,
						cs = d7.d8[0];
					if (0 !== cs)
						for (var aW3 = Math.min(100 + 10 * (cs - 1), 400), a1 = 0; a1 < cs; a1++) v.a5C(dC[a1], aW3)
				}
			}
			v.a5C(aR[0], 100)
		}
	}
}

function aW4() {
	this.aLE = function(h2) {
		return [h2 >> 12 & 63, h2 >> 6 & 63, 63 & h2]
	}, this.aW5 = function(h2) {
		for (var dC = this.aLE(h2), a1 = 0; a1 < 3; a1++) dC[a1] = ~~(4.05 * dC[a1]);
		return dC
	}, this.k0 = function(h2) {
		h2 = this.aW5(h2);
		return r.color.a7e(h2[0], h2[1], h2[2])
	}, this.aW6 = function(dC) {
		for (var a1 = 0; a1 < 3; a1++) dC[a1] = ~~(dC[a1] / 4.04);
		return (dC[0] << 12) + (dC[1] << 6) + dC[2]
	}, this.a7e = function(n1, nb, fv) {
		return "rgb(" + n1 + "," + nb + "," + fv + ")"
	}, this.xj = function(n1, nb, fv, bN) {
		return "rgba(" + n1 + "," + nb + "," + fv + "," + bN.toFixed(3) + ")"
	}, this.u3 = function(aN) {
		for (var dC = aN.split("(")[1].split(","), dH = d7.dH, a1 = 0; a1 < 3; a1++) dH[a1] = parseInt(dC[a1]);
		return 4 === dC.length ? dH[3] = 255 * parseFloat(dC[3].slice(0, -1)) : dH[3] = 255, dH
	}, this.u4 = function(aW7, gM) {
		for (var dC = aW7.slice(aW7.indexOf("(") + 1, aW7.indexOf(")")).split(","), dH = d7.dH, a1 = 0; a1 < 3; a1++) dH[a1] = hA.hB(parseInt(dC[a1].trim(), 10) + gM, 0, 255);
		return 3 === dC.length ? this.a7e(dH[0], dH[1], dH[2]) : (aW7 = parseFloat(dC[3].trim()), this.xj(dH[0], dH[1], dH[2], aW7 = 0 === aW7 ? .3 : aW7))
	}, this.aW8 = function(aW9, aWA) {
		for (var os = 0, a1 = 0; a1 < 3; a1++) os += Math.abs(aWA[a1] - aW9[a1]);
		if (!(240 <= os))
			for (a1 = 0; a1 < 3; a1++) aWA[a1] = aW9[a1] + (aW9[a1] < 128 ? 80 : -80)
	}, this.aWB = function(dC) {
		for (var ga = "#", a1 = 0; a1 < 3; a1++) {
			var n1 = dC[a1].toString(16);
			ga += 1 === n1.length ? "0" + n1 : n1
		}
		return ga
	}, this.aWC = function(ga) {
		var n1, nb;
		return ga.length < 7 ? bO.nW : (n1 = parseInt(ga.slice(1, 3), 16), nb = parseInt(ga.slice(3, 5), 16), ga = parseInt(ga.slice(5, 7), 16), this.a7e(n1, nb, ga))
	}
}

function v8() {
	var b, c, aWD, y;

	function h() {
		lq.ln(), n.o()[19] = null, n.p()
	}

	function aWK() {
		aWN(), aWL()
	}

	function aWN() {
		aWD.tY.lastChild && n.removeChild(aWD.tY, aWD.tY.lastChild)
	}

	function aWL() {
		var aWO = dR.t8(q.data);
		q.data.canvas = dR.t7(aWO, q.data.mapSeed).t6, aWM()
	}

	function aWM() {
		var fr = q.data.canvas;
		fr.style.width = "100%", aWD.tY.appendChild(fr)
	}
	this.lw = function(fr) {
		q.data.canvas && aWN(), q.data.canvas = fr, aWM()
	}, this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(101), [new g("⬅️ " + L(1), h)]), 2 === q.data.mapType && lq.az(), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(514), L(515), L(516)],
			value: q.data.mapType
		}, function(a9) {
			2 === (q.data.mapType = a9) ? (lq.az(), q.data.canvas = null) : (q.data.passableWater = q.data.passableMountains = 1, lq.ln()), n.aB(20)
		})), 2 <= q.data.mapType && (a3.aK(new aFB), a3.aK(new is({
			value: q.data.passableWater
		}, L(517), function(value) {
			q.data.passableWater = value
		})), a3.aK(new is({
			value: q.data.passableMountains
		}, L(518), function(value) {
			q.data.passableMountains = value
		})));
		y.push(a3)
	}(y = []), function(y) {
		if (0 === q.data.mapType) {
			for (var a3 = new a4, a6 = (a3.a5(L(101)), []), a1 = 0; a1 < dR.qe.a2k.length; a1++) a6.push(dR.qe.qf[dR.qe.a2k[a1]].name);
			a3.a7(new a8({
				a6: a6,
				value: q.data.mapProceduralIndex
			}, function(a9) {
				q.data.mapProceduralIndex = a9, aWK()
			})), y.push(a3)
		}
	}(y), function(y) {
		if (1 === q.data.mapType) {
			for (var a3 = new a4, a6 = (a3.a5(L(101)), []), a1 = 0; a1 < dR.qe.a2l.length; a1++) a6.push(dR.qe.qf[dR.qe.a2l[a1]].name);
			a3.a7(new a8({
				a6: a6,
				value: q.data.mapRealisticIndex
			}, function(a9) {
				q.data.mapRealisticIndex = a9, aWK()
			})), y.push(a3)
		}
	}(y), function(y) {
		var a3;
		2 === q.data.mapType && ((a3 = new a4).a5(L(519)), a3.aK(new hZ(b5.buffer.data[162], 1)), a3.a5(L(520), "0.8em"), a3.aK(new hk([new g(L(521), function() {
			return lq.lo(), !0
		}).button])), y.push(a3))
	}(y), function(y) {
		var a3, iL;
		2 === q.data.mapType && ((a3 = new a4).a5(L(522)), iL = new hZ({
			a9: -1,
			value: q.data.mapName
		}, 0, 0, function(cb) {
			q.data.mapName = cb.target.value = cb.target.value.slice(0, 20)
		}), a3.aK(iL), y.push(a3))
	}(y), function(y) {
		var a3, iL, a40;
		0 === q.data.mapType && ((a3 = new a4).a5("Seed"), iL = new hZ({
			a9: -1,
			value: q.data.mapSeed
		}, 1, 0, function(cb) {
			cb = Math.abs(Math.floor(cb.target.value)) % 16384;
			q.data.mapSeed !== cb && (q.data.mapSeed = cb, aWK())
		}), a40 = new g(L(23), function(cb) {
			var a31 = Math.floor(16384 * Math.random());
			if (q.data.mapSeed !== a31) return iL.cb.value = q.data.mapSeed = a31, aWK(), !0
		}), a3.aK(iL), a3.aK(new hk([a40.button])), y.push(a3))
	}(y), function(y) {
		(aWD = new a4).a5(L(523)), 2 !== q.data.mapType ? aWL() : q.data.canvas && aWM();
		y.push(aWD)
	}(y), y))
}

function aEK() {
	function aWX() {
		dR.aEJ.bs()
	}

	function aWe(cy, aWd) {
		0 < aWd && (dR.aE9[cy] += aWd, dR.aE9[cy + 1] += aWd, dR.aE9[cy + 2] += aWd)
	}

	function uF(cy) {
		return dR.aE9[cy + 2] > dR.aE9[cy] && dR.aE9[cy + 2] > dR.aE9[cy + 1]
	}
	this.aGt = -1, this.uV = 0, this.aWP = 0, this.aWQ = 8, this.aWR = 32, this.aWS = 8, this.aWT = 32, this.aWU = [0, 0], this.ec = [0, 0, 0, 0], this.iT = null, this.aWV = !0, this.aWW = !1, this.aEO = function() {
		-1 !== this.aGt && clearTimeout(this.aGt), this.aGt = -1, this.iT = null, aER.aEU()
	}, this.az = function() {
		7 === jz.si() || this.aWW || (this.aWV = !0, this.uV = 0, this.aWP = 1, this.aWU = [dR.qe.qf[dR.qg].a32[0], dR.qe.qf[dR.qg].a33[0]], this.ec = [dR.qe.qf[dR.qg].a34[3], dR.qe.qf[dR.qg].a34[4], dR.qe.qf[dR.qg].a34[5], dR.qe.qf[dR.qg].a34[
			6]], this.aWQ = dR.qe.qf[dR.qg].a34[7], this.aWR = dR.qe.qf[dR.qg].a34[8], this.aWS = dR.qe.qf[dR.qg].a34[9], this.aWT = dR.qe.qf[dR.qg].a34[10], this.aWV ? this.aGt = setTimeout(aWX, 16) : this.bs())
	}, this.bs = function() {
		if (8 === jz.si() && cM.aWY()) this.aGt = setTimeout(aWX, 16);
		else {
			if (0 === this.uV) {
				var a31 = r2.aWZ();
				if (r2.yk(dR.qe.qf[dR.qg].a34[2]), aER.wx([dR.dS, dR.dT, dR.qe.qf[dR.qg].a34[0], dR.qe.qf[dR.qg].a34[1]]), r2.yk(a31), this.iT = aER.aGX(), this.uV++, this.aWV) return void(this.aGt = setTimeout(aWX, 16))
			}
			for (var cy, oN, a31 = this.aWV ? 10 : 1e6, a31 = dR.dT - this.aWP - 1 < a31 ? dR.dT - this.aWP - 1 : a31, o4 = this.aWP + a31, bp = this.aWP; bp < o4; bp++)
				for (var c4 = 1; c4 < dR.dS - 1; c4++) uF(cy = 4 * (oN = c4 + bp * dR.dS)) ? this.aWa(cy, oN, 1) : (this.aWa(cy, oN, 0), function(c4, bp, cy) {
					return 1 < c4 && uF(cy - 4) || c4 < dR.dS - 2 && uF(cy + 4) || 1 < bp && uF(cy - 4 * dR.dS) || bp < dR.dT - 2 && uF(cy + 4 * dR.dS)
				}(c4, bp, cy) && this.aWc(c4, bp));
			this.aWP = o4, this.aWP >= dR.dT - 1 ? (dR.xb.putImageData(dR.aEI, 0, 0, 1, 1, dR.dS - 2, dR.dT - 2), bL.cC = !0, this.aEO()) : this.aWV && (this.aGt = setTimeout(aWX, 16))
		}
	}, this.aWa = function(cy, oN, a9) {
		aWe(cy, Math.floor(this.aWU[a9] + this.ec[a9] * this.iT[oN] / 1e4) - dR.aE9[cy])
	}, this.aWf = function(cy, n1, aWg, a9, ec) {
		aWe(cy, Math.floor(this.aWU[a9] + (1 - n1 / aWg) * ec) - dR.aE9[cy])
	}, this.aWc = function(f1, f2) {
		for (var cy, n1, aWg, o1 = f1 - this.aWR, o2 = f2 - this.aWR, o3 = f1 + this.aWR, o4 = f2 + this.aWR, o1 = o1 < 1 ? 1 : o1, o3 = o3 > dR.dS - 2 ? dR.dS - 2 : o3, o4 = o4 > dR.dT - 2 ? dR.dT - 2 : o4, bp = o2 < 1 ? 1 : o2; bp <= o4; bp++)
			for (var c4 = o1; c4 <= o3; c4++) uF(cy = 4 * (c4 + bp * dR.dS)) ? (aWg = this.aWQ + (this.aWR - this.aWQ) * this.iT[c4 + dR.dS * bp] / 1e4, Math.abs(f1 - c4) > aWg || Math.abs(f2 - bp) > aWg || aWg <= (n1 = Math.sqrt((f1 - c4) * (
				f1 - c4) + (f2 - bp) * (f2 - bp))) || this.aWf(cy, n1, aWg, 1, this.ec[3])) : (aWg = this.aWS + (this.aWT - this.aWS) * this.iT[c4 + dR.dS * bp] / 1e4, Math.abs(f1 - c4) > aWg || Math.abs(f2 - bp) > aWg || aWg <= (n1 = Math
				.sqrt((f1 - c4) * (f1 - c4) + (f2 - bp) * (f2 - bp))) || this.aWf(cy, n1, aWg, 0, this.ec[2]))
	}
}

function aPe() {
	var aWh, dC;
	this.az = function() {
		for (var a1 = (dC = new Uint16Array(101)).length - 1; 0 <= a1; a1--) dC[a1] = hA.iV(32768 * a1, 100);
		this.yk(0)
	}, this.value = function(cy) {
		return dC[cy]
	}, this.aWZ = function() {
		return hA.iV(aWh - 1, 2)
	}, this.yk = function(a31) {
		aWh = 2 * a31 % 32768 + 1
	}, this.random = function() {
		return aWh = 167 * aWh % 32768
	}, this.r3 = function(wK) {
		return hA.iV(wK * this.random(), 32768)
	}, this.a0u = function(cy) {
		return 0 !== cy && this.random() < this.value(cy)
	}, this.aWi = function(bN, fv) {
		return bN + this.r3(fv - bN)
	}
}

function aPn() {
	this.id = 0, this.k2 = 0, this.a26 = null, this.k3 = null, this.a27 = null, this.a2B = null, this.b3 = new aVO, this.az = function() {
		var self, k2;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (k2 = Android.getVersion()) < 12 || (self.k2 = k2, self.id = 1, self.k3 = Android),
			function(self) {
				var k2;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.a27 = mwIOSdataX, self.a2B = window.webkit.messageHandlers.iosCommandA, k2 =
					self.a27.version, self.k2 = k2 ? Number(k2) : 0)
			}(this),
			function(self) {
				var a26;
				try {
					if (!(a26 = window.localStorage)) return;
					a26.setItem("tls7", "1"), a26.removeItem("tls7")
				} catch (error) {
					return
				}
				self.a26 = a26
			}(this)
	}
}

function aPr() {
	var aWm, aWn = new Uint8Array(5),
		aWo = new Uint8Array(5);
	this.aWp = new a36, this.az = function() {
		for (var h2 = b5.buffer.data[119].value, a1 = 0; a1 < aWn.length; a1++) aWn[a1] = (h2 >> 2 * a1) % 4
	}, this.yu = function() {
		aWm = [L(524), "", L(525, [xO.xM[28]]), L(526, [xO.xM[26]]), L(527, [xO.xM[0]])], this.aWp.az()
	}, this.bs = function() {
		this.aWp.bs()
	}, this.y6 = function(id) {
		1 < id && c9.lz() || ! function(a9) {
			if (3 === aWn[a9] || 1 === aWo[a9]) return;
			if (aWo[a9] = 1, !(Math.random() < .6)) {
				aWn[a9]++;
				for (var h2 = 0, a1 = 0; a1 < aWn.length; a1++) h2 += aWn[a1] << 2 * a1;
				b5.hi.hj(119, h2)
			}
			return 1
		}(id) || g5.vr(aWm[id])
	}
}

function aPq() {
	this.q7 = !1, this.aWr = !1, this.a70 = !1, this.aWs = [0, 0, 0, 0], this.render = function() {
		var cU, cV, cW, cX;
		this.a70 = this.a70 || this.aWr, (this.aWr || this.q7 && this.a70) && (cU = aEB.q4[0], cV = aEB.q4[1], cW = aEB.q4[2], cX = aEB.q4[3], cU = cU < this.aWs[0] ? this.aWs[0] : cU, cV = cV < this.aWs[1] ? this.aWs[1] : cV, cW = cW > this.aWs[
				2] ? this.aWs[2] : cW, cX = cX > this.aWs[3] ? this.aWs[3] : cX, this.aWr = !1, this.q7 = !1, cU === this.aWs[0] && cV === this.aWs[1] && cW === this.aWs[2] && cX === this.aWs[3] ? this.mM() : cU <= cW && cV <= cX && xG
			.putImageData(xH, 0, 0, cU, cV, cW - cU + 1, cX - cV + 1))
	}, this.mM = function() {
		this.a70 && this.aWs[2] >= this.aWs[0] && this.aWs[3] >= this.aWs[1] && xG.putImageData(xH, 0, 0, this.aWs[0], this.aWs[1], this.aWs[2] - this.aWs[0] + 1, this.aWs[3] - this.aWs[1] + 1), this.a70 = !1
	}, this.mY = function() {
		this.aWs[2] >= this.aWs[0] && this.aWs[3] >= this.aWs[1] && xG.putImageData(xH, 0, 0, this.aWs[0], this.aWs[1], this.aWs[2] - this.aWs[0] + 1, this.aWs[3] - this.aWs[1] + 1), this.a70 = !1
	}, this.az = function() {
		var c4, bp;
		this.q7 = !1, this.aWr = !1, this.a70 = !1, this.aWs[0] = dR.dS, this.aWs[1] = dR.dT, this.aWs[2] = this.aWs[3] = 0;
		loop: for (c4 = 1; c4 < dR.dS - 1; c4++)
			for (bp = dR.dT - 2; 1 < bp; bp--)
				if (1 === xF[eb.aAZ(c4, bp) + 2]) {
					this.aWs[0] = c4;
					break loop
				} loop: for (bp = 1; bp < dR.dT - 1; bp++)
			for (c4 = dR.dS - 2; 1 < c4; c4--)
				if (1 === xF[eb.aAZ(c4, bp) + 2]) {
					this.aWs[1] = bp;
					break loop
				} loop: for (c4 = dR.dS - 2; 0 < c4; c4--)
			for (bp = dR.dT - 2; 1 < bp; bp--)
				if (1 === xF[eb.aAZ(c4, bp) + 2]) {
					this.aWs[2] = c4;
					break loop
				} loop: for (bp = dR.dT - 2; 0 < bp; bp--)
			for (c4 = dR.dS - 2; 1 < c4; c4--)
				if (1 === xF[eb.aAZ(c4, bp) + 2]) {
					this.aWs[3] = bp;
					break loop
				}
	}
}

function aWt() {
	this.aQa = function(fj, player) {
		g5.wI(q.bS, player, fj), hW.kU.aJw(fj, player)
	}, this.vo = function(player) {
		g5.wW(player, 0), hW.kU.aJz(player)
	}, this.aVi = function(aVZ, player) {
		g5.wX(aVZ, player), hW.kU.aK0(aVZ, player)
	}, this.a5G = function() {
		q.cK || q.cL || hW.kb.a5G()
	}
}

function aWu() {
	this.zH = function(a9) {
		if ((zg = uN.zf.zg[a9]) < 2 && !__fx.customLobby.isActive()) return !1;
		var zW = uN.b0.zX[a9],
			aWv = 9 === zW.zZ ? 333 : 512,
			zg = Math.min(zg, aWv);
		8 === zW.zZ && (zg -= zg % 2);
		aWv = uN.zf.a8G[a9].splice(0, zg), uN.zf.zg[a9] -= zg, zg = function(aWw) {
			if (uN.a8L) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var cs = aWw.length, hp = uN.a8L.hp, a1 = 0; a1 < cs; a1++)
					if (aWw[a1].hp === hp) return a1
			}
			return -1
		}(aWv);
		return -1 === zg ? (uN.zf.a1s = uN.zf.a1s.concat(aWv), 1e3 < uN.zf.a1s.length && uN.zf.a1s.splice(0, uN.zf.a1s.length - 1e3), uN.b0.a8O += 29 === n.go && uN.b0.a8P[0] === a9 && 1 === uN.b0.a8P[2], !1) : (8 === zW.zZ && (zW.zs = (zW.zs + (
			zg >> 1)) % 1024, a9 = zg - zg % 2, zg %= 2, aWv = aWv.slice(a9, 2 + a9)), aGn.az(zW, aWv, zg), !0)
	}, this.aWz = function(zW, aWw, aWx) {
		var gM = q.data = new n9,
			aX0 = (gM.spawningSeed = zW.spawningSeed, zW.zZ < 7 ? (gM.gameMode = 1, gM.numberTeams = zW.zZ + 2) : 9 === zW.zZ ? (gM.gameMode = gM.isZombieMode = 1, gM.numberTeams = 2) : (gM.gameMode = 0, gM.battleRoyaleMode = 7 === zW.zZ ? 0 :
				10 === zW.zZ ? 1 : 2), gM.selectedPlayer = aWx, gM.isContest = zW.zd, gM.mapType = dR.aEP(zW.qg) ? 0 : 1, dR.aEa(gM, zW.qg), gM.mapSeed = zW.mapSeed, gM.humanCount = aWw.length);
		gM.selectableSpawn = 1 === gM.gameMode || aX0 < 100, gM.colorsData = new Uint32Array(aX0), gM.playerNamesData = new Array(aX0), gM.nA = new Uint32Array(aX0);
		for (var a1 = 0; a1 < aX0; a1++) gM.colorsData[a1] = aWw[a1].color, gM.playerNamesData[a1] = aWw[a1].username, gM.nA[a1] = aWw[a1].hp;
		if (2 === gM.battleRoyaleMode)
			for (gM.elo = new Uint16Array(aX0), a1 = 0; a1 < aX0; a1++) gM.elo[a1] = aWw[a1].elo;
		uj.close(), jz.setState(8), dR.wx(zW.qg, gM.mapSeed), q.tF(), q.tG = 2
	}
}

function aEz() {
	function aX8(player, xg, aX2) {
		3 <= aX2 && 2142 < bL.bM() && (xg === q.aA || b7.di[xg] < hA.iV(b7.di[player], 20)) && v.a57(player, 20)
	}

	function aX9(player, dn, xg, aX2) {
		3 <= aX2 && aX2 < 6 && hA.iV(b7.di[player], 8) > b7.di[xg] && (dn = Math.max(hA.iV(11 * b7.di[xg], 5), hA.iV(b7.di[player], 10)));
		aX2 = b7.a0S[player].length;
		yt.aEx.aK8(player, xg), yt.aEx.aKB(player, xg, aX2, dn)
	}

	function aX7(player, dn) {
		var xg = q.aA,
			cs = b7.a0S[player].length;
		yt.aEx.aK7(player), b7.a0S[player].length !== cs && yt.aEx.aKB(player, xg, cs, dn)
	}
	this.aMo = new Uint8Array(q.aA), this.az = function() {
		this.aMo.fill(0)
	}, this.a5B = function(player, dn) {
		var aX1, aX2, aX3, aX4;
		yB.a4g(player) && (aX1 = yl.a6d(player), 3 <= (aX2 = v.dn[player]) && aX2 < 6 && (dn = Math.max(b7.di[player] - aX1, dn)), aX3 = b7.a0a[player].length, aX4 = b7.a0Z[player].length, 30 * b7.br[player] > q.pZ && aS[player] < 10 && 100 *
			aX4 <= aX3 && v.a57(player, 10), q.bf ? function(player, dn, aX2, aX1) {
				var xg;
				if (yt.aEx.aKD(player, !1) || yt.aEx.aKG(player, !1)) {
					if (!yt.aEx.aKI(player))
						if (yt.aEx.aKH()) aX7(player, dn), aX8(player, q.aA, aX2);
						else {
							if (r2.a0u(v.a4z[aX2])) xg = yt.aEx.aKL(player);
							else {
								if (yt.aEx.aKJ() && r2.a0u(v.a4x[aX2]) && yt.aEx.aKK(), 6 === aX2) return aX9(player, dn, yt.aEx.aKW(), aX2);
								xg = yt.aEx.aKO(player)
							}
							aX9(player, dn, xg, aX2), aX8(player, xg, aX2)
						}
				} else il.a9S.bs(player) || yt.aF0.bs(player) || ! function(player, dn, aX2, aX1) {
					var aMo = yt.a5A.aMo;
					aMo[player] = 0;
					var aXB = aC.wD[player];
					if (0 !== aXB) {
						var aG2 = b7.di[player],
							br = b7.br;
						if (player < q.bq && (dn = aG2), !(aG2 < br[player] || 5 === aX2 && aG2 < aX1 || 4 === aX2 && aG2 < hA.iV(aX1, 2))) {
							d5.d6(aXB);
							for (var cs = d7.d8[0], d9 = d7.d9, a1 = r2.r3(cs), fv = 0; fv < cs; fv++) {
								var aN = d9[(fv + a1) % cs];
								if (aMo[aN]) return jd.a4d.aXC(player, aN, dn)
							}
							var yG = il.b0.yG;
							for (fv = 0; fv < cs; fv++)
								if (aN = d9[(fv + a1) % cs], yG[aN] && aN !== player) return jd.a4d.aXC(player, aN, dn)
						}
					}
				}(player, dn, aX2, aX1)
			}(player, dn, aX2, aX1) : (!aX4 || aX3 && (aX3 < aX4 && !r2.r3(10) || 100 * aX4 <= aX3 && r2.r3(3) || !r2.r3(8))) && il.a9S.bs(player) || function(player, dn, aX2) {
				yt.aEx.aKD(player, !0) || yt.aEx.aKG(player, !0) ? yt.aEx.aKI(player) || (yt.aEx.aKH() ? aX7(player, dn) : r2.a0u(v.a4z[aX2]) ? aX9(player, dn, yt.aEx.aKL(player), aX2) : 5 === aX2 ? aX9(player, dn, yt.aEx.aKS(), aX2) : (yt
					.aEx.aKJ() && r2.a0u(v.a4x[aX2]) && yt.aEx.aKK(), aX9(player, dn, 6 === aX2 ? yt.aEx.aKW() : yt.aEx.aKO(player), aX2))) : yt.aF0.bs(player)
			}(player, dn, aX2))
	}
}

function kg() {
	this.aSL = function(uK, mH) {
		hx.az(mH), 0 === hx.size ? hW.b0.i0(uK, 3205) : __fx.customLobby.isCustomMessage(mH) || ((0 === hx.i2(1) ? function(uK) {
			var aXG = hx.i2(6);
			0 === aXG ? function(uK) {
					if (0 === uK && 8 !== jz.si()) {
						n.b0.aXI();
						for (var aXJ = hx.i2(12), aXK = hx.i2(6), dC = new Array(aXJ), a1 = 0; a1 < aXJ; a1++) dC[a1] = hx.i2(aXK);
						kD.aM5(dC)
					}
				}(uK) : 2 === aXG ? hW.kh.zV(uK) : 3 === aXG || 4 === aXG ? aGn.az() : 5 === aXG ? hW.kj.aCW() : 9 === aXG ? hW.kj.aCY(uK) : 10 === aXG ? hW.kl.a5f() : 11 === aXG ? hW.kj.aCe(uK) : 12 === aXG ? hW.kl.a5j() : 13 ===
				aXG ? hW.kn.hw() : 14 === aXG ? hW.kn.iC() : 15 === aXG ? hW.kj.aCi() : 16 === aXG ? hW.kh.zj(uK) : 17 === aXG ? hW.kh.zw(uK) : 19 === aXG ? hW.kh.a07(uK) : 20 === aXG ? hW.kj.aCX(uK) : 21 !== aXG && 22 !== aXG &&
				23 === aXG && hW.kj.aCk(uK)
		} : function(uK) {
			if (8 !== jz.si() && !aGn.aXL()) return;
			if (uK !== hW.b0.uY) hW.b0.i0(uK, 3244);
			else if (0 === hx.i2(1)) bL.aXM.mG(hx.mH);
			else {
				var a1, uK = hx.i2(2);
				if (0 === uK) {
					var fj, kU = hx.i2(9);
					0 !== b7.c0[kU] && 0 !== b7.c0[q.bS] && (fj = hx.i2(10), g5.wI(kU, q.bS, fj), ez.eq(kU, 1, fj))
				} else if (1 === uK) ! function() {
					var kU = hx.i2(9);
					0 !== b7.c0[kU] && 0 !== b7.c0[q.bS] && z5.aGP(0, [kU], !0) && g5.wW(kU, 1)
				}();
				else if (2 === uK) ! function() {
					var kU = hx.i2(9),
						target = hx.i2(9);
					0 !== b7.c0[kU] && 0 !== b7.c0[target] && 0 !== b7.c0[q.bS] && z5.aGP(1, [kU], !0) && (ez.eq(kU, 3, 96), ez.eq(target, 4, 96), g5.wY(kU, target))
				}();
				else if (kH.qK && !kH.qN) {
					var cs = 540;
					for (hy.wx(17287), hy.wy(1, 0), hy.wy(6, 10), cs = Math.min(jd.je.yp.length, 540), a1 = 0; a1 < cs; a1++) hy.aBd(32, jd.je.yp[a1]);
					hW.b0.send(hW.b0.uY, hy.mH)
				}
			}
		})(uK), bL.aXF())
	}
}

function aEr() {
	var aXS = 0,
		aXT = 0,
		aXU = 300,
		aXV = 300,
		aXW = 0;
	this.a3L = 0, this.buffer = new Uint32Array(512), this.az = function() {
		aXT = aXS = 0, this.a3L = 0, aXW = 0
	}, this.bs = function() {
		if (function() {
				var cs = yt.a3K.a3L;
				if (0 === cs) return 1;
				var buffer = yt.a3K.buffer;
				if (bL.bM() % 35 == 6) {
					for (var a1 = cs - 1; 0 <= a1; a1--) eb.wA(buffer[a1] << 2) || (cs--, buffer[a1] = buffer[cs]);
					yt.a3K.a3L = cs
				}
				return cs < buffer.length
			}())
			if (aXU <= aXS) {
				var aXa = yt.a3K.a3L;
				if (aXa) {
					if (bL.bM() % 350 != 1) return;
					if (aXW !== aXa) return void(aXW = aXa);
					if (!r.cz.fO(aR[0])) return
				} else if (bL.bM() % 12 != 8) return;
				r.cz.aXb() || yt.a3K.az()
			} else {
				var a1, dt = dR.dS,
					aXc = dt - 2,
					aXa = aXc * (dR.dT - 2),
					aXd = aXU,
					buffer = yt.a3K.buffer,
					jP = yt.a3K.a3L,
					aXe = buffer.length,
					ba = Math.min(aXT + aXd * ((1 + 19 * yt.performance.aVy) * aXV), aXa);
				for (a1 = aXT; a1 < ba; a1 += aXd) {
					var gF = 4 * (a1 % aXc + (hA.iV(a1, aXc) + 1) * dt + 1);
					if (eb.wA(gF) && (buffer[jP] = gF >> 2, ++jP === aXe)) {
						a1 += aXd;
						break
					}
				}(aXT = a1) >= aXa && (aXT = ++aXS), yt.a3K.a3L = jP
			}
	}
}

function aXf() {
	var a9 = 0,
		c8 = bL.c8;
	this.j0 = 0, this.bs = function() {
		bD.bs(), q.cJ ? jN() : 0 === a9 ? bL.c8 >= c8 && (c8 += bL.j8 * Math.floor(1 + (bL.c8 - c8) / bL.j8), 2 === q.cf || j9.jA ? jC() : (jI(), jE.render()), a9++) : ((j9.jA ? jN : (bL.cC = !0, jO))(), a9 = 0), j5(), bL.cC && (bL.cC = !1, j6())
	}
}

function aXg() {
	this.ps = function(uV) {
		return 0 === uV ? 1 === q.cf && q.cJ : 1 === uV ? 1 === q.cf && !q.cJ : 2 === q.cf
	}, this.pt = function(player) {
		return 0 !== b7.c0[player] && 2 !== b7.bo[player]
	}, this.a0l = function(player) {
		return player === q.bS && 2 !== b7.bo[player]
	}, this.rR = function(player, xg) {
		return player !== xg && (0 === aC.wD[player] || aC.wD[player] !== aC.wD[xg])
	}, this.aXb = function() {
		return ct.cu < 2 ? 0 : q.bf ? 1 < d5.aXh() : b7.br[aR[1]]
	}, this.pW = function() {
		var cu = ct.cu;
		if (0 !== cu) {
			if (!q.bf) return !this.fO(aR[0]);
			for (var wD = aC.wD, zT = d5.pb(), cw = ct.cw, a1 = cu - 1; 0 <= a1; a1--) {
				var cy = cw[a1];
				if (wD[cy] === zT && !this.fO(cy)) return 1
			}
		}
		return 0
	}, this.a0c = function(player) {
		return player === q.bS
	}, this.w3 = function(xg, gH) {
		return b7.di[q.bS] < gH * b7.di[xg]
	}, this.fO = function(player) {
		return player >= q.bq || 2 === b7.bo[player]
	}, this.a3E = function(player) {
		return 0 !== b7.c0[player]
	}, this.d0 = function(player) {
		return player < q.bq
	}, this.aXi = function(aLs, aLt) {
		return aLs !== aLt
	}, this.a4c = function(player, h2) {
		var min;
		return h2 = this.aXj(player, h2), b7.di[player] += h2, b7.fX[player] && (min = Math.min(b7.fX[player], b7.di[player]), b7.fX[player] -= min, b7.di[player] -= min), h2
	}, this.aXj = function(player, h2) {
		var lG = b7.di[player];
		return h2 = Math.min(h2, b7.br[player] * q.yY - lG), h2 = Math.min(h2, q.ei - lG), Math.max(h2, 0)
	}, this.aXk = function(player, aI3, aXl, aXm) {
		var lG = b7.di[player],
			aI3 = hA.iV(lG * (aI3 + 1), 1024),
			aXl = hA.iV(aXl * lG, 1024),
			aI3 = Math.min(aI3, lG - aXl);
		return aI3 = z4.aSp(player, aI3), d7.dF[0] = aI3, d7.dF[1] = aXl, aXm <= aI3
	}, this.a6X = function(player, aXo, a6V) {
		var player = b7.di[player],
			aXn = hA.iV(64 * player, 1024);
		return aXo = Math.min(aXo, player - aXn), aXo = this.aXj(a6V, aXo), d7.dF[0] = aXo, d7.dF[1] = aXn, 1 <= aXo
	}, this.aXp = function(player, aXo, a6V) {
		var player = b7.di[player],
			aXn = hA.iV(64 * player, 1024);
		return aXo = Math.min(aXo, player - aXn), this.aXj(a6V, aXo)
	}, this.aXq = function(aXo, a6V) {
		return aXo = this.aXj(a6V, aXo), d7.dF[0] = aXo, d7.dF[1] = 0, 1 <= aXo
	}, this.a6Y = function(player, aXr) {
		return hA.iV(b7.di[player] * (aXr + 1), 1024)
	}, this.aXs = function(player, aXl) {
		aXl = hA.iV(aXl * b7.di[player], 1024);
		d7.dF[1] = aXl, b7.di[player] -= aXl
	}, this.aFo = function(player, aXt) {
		var dX, dZ, fv = b7.di[player];
		return aXt <= fv ? b7.di[player] -= aXt : (b7.di[player] = 0, dZ = b7.fX[player] + (dX = 5 * ((fv = aXt - fv) >> 2)), dg.a0e(player, dX - fv, 12), dZ <= q.yT ? b7.fX[player] = dZ : (b7.fX[player] = q.yT, dg.a0e(player, dZ - q.yT, 18))),
			aXt
	}, this.aDS = function(player, aI3) {
		var di = b7.di,
			lG = di[player],
			aI3 = hA.iV(lG * (aI3 + 1), 1024),
			aXn = Math.max(hA.iV(lG, 10), 1e3);
		return (aI3 = Math.min(aI3, lG - aXn)) < 0 ? (di[player] = 0, aXn = Math.min(1e3, lG + q.yT - b7.fX[player]), d7.dF[1] = aXn, b7.fX[player] += aXn - lG, 0) : (d7.dF[1] = aXn, aI3 = z4.aSp(player, aI3), di[player] -= aXn + aI3, z4.aSq(
			player, aI3), aI3)
	}, this.aXu = function(player) {
		var dn = d7.dF[0];
		b7.di[player] -= dn + d7.dF[1], z4.aSq(player, dn)
	}, this.aXv = function(player, xg) {
		return (xg = Math.min(xg, q.aA)) < q.aA && 0 === b7.c0[xg] && (xg = q.aA), (d7.dL[0] = xg) === q.aA || a4Q.a4R(player, xg)
	}, this.a6W = function(player, a6V) {
		return 0 !== b7.c0[a6V] && !a4Q.a4R(player, a6V)
	}, this.pu = function(player, aXw) {
		for (var cy, cs = ct.cu, bn = 0, aXx = aR, a1 = 0; a1 < cs; a1++)
			if (cy = aXx[a1], !this.fO(cy)) {
				if (player === cy) return !0;
				if (++bn > aXw) return !1
			} return !1
	}, this.a3D = function(cy) {
		var pX = q.bf ? d5.pY() : b7.br[aR[0]];
		return pX >= hA.iV(cy * q.pZ, 100)
	}, this.aOq = function(h2, min, max) {
		return Math.floor(hA.hB(isNaN(h2) ? 0 : Number(h2), min, max))
	}
}

function aV3() {
	function aXz(dC) {
		if (0 === dC.length) b5.hi.hj(116, "");
		else {
			for (var aY0 = dC[0], a1 = 1; a1 < dC.length; a1++) aY0 += ";" + dC[a1];
			b5.hi.hj(116, aY0)
		}
	}
	this.a5g = function() {
		b5.buffer.data[110].value.length && (b5.buffer.data[106].value = b5.buffer.data[110], b5.hi.hj(110, ""), this.aOn())
	}, this.aOn = function() {
		var dC = b5.buffer.data[116].value.split(";");
		for (dC.length % 2 == 1 && dC.pop(), dC.unshift(b5.buffer.data[106].value), dC.unshift(b5.buffer.data[105].value), a1 = 2; a1 < dC.length; a1 += 2)
			if (dC[a1] === dC[0]) {
				dC.splice(a1, 2);
				break
			} for (var aXy = [], a1 = 0; a1 < dC.length; a1 += 2) aXy.push(dC[a1]);
		aXz(dC), b5.buffer.data[117].value = 0, b5.buffer.data[117].a6 = aXy
	}, this.aOo = function(a9) {
		b5.buffer.data[117].a6.splice(a9, 1), b5.buffer.data[117].value = Math.min(a9, b5.buffer.data[117].a6.length - 1);
		var dC = b5.buffer.data[116].value.split(";");
		dC.splice(2 * a9, 2), aXz(dC)
	}, this.uL = function(a9) {
		var dC = b5.buffer.data[116].value.split(";");
		return {
			hp: dC[2 * a9],
			password: dC[2 * a9 + 1]
		}
	}, this.aLF = function() {
		var h2 = hA.hB(b5.buffer.data[121].value, -1, 262143);
		return h2 = -1 === h2 ? ~~(262144 * Math.random()) : h2
	}, this.aV4 = function() {
		for (var dC = document.cookie.split(";"), a1 = 0; a1 < dC.length; a1++) {
			var bm, ga = dC[a1].trim();
			0 !== ga.length && (bm = 0 <= (bm = ga.indexOf("=")) ? ga.substring(0, bm) : ga, document.cookie = bm + "=;expires=0;path=/", document.cookie = bm + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = bm +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function aPj() {
	this.az = function() {
		this.dC = [], this.a9 = 0
	}, this.aBR = function() {
		return new Uint8Array(this.dC)
	}, this.wy = function(aY1, value) {
		for (var dC = this.dC, bz = this.a9 + aY1 - 1, aY2 = 1 + (bz >> 3); dC.length < aY2;) dC.push(0);
		for (var a1 = this.a9; a1 <= bz; a1++) dC[a1 >> 3] |= (value >> bz - a1 & 1) << 7 - (7 & a1);
		this.a9 += aY1
	}, this.aPy = function(dC, aEd, aY3) {
		var aY4 = r.s.sC(dC);
		this.wy(aEd, aY4);
		for (var a1 = 0; a1 < aY4; a1++) this.wy(aY3, dC[a1])
	}, this.aY5 = function(dC, aEd, aY6) {
		var aY4 = r.s.sC(dC);
		this.wy(aEd, aY4);
		for (var a1 = 0; a1 < aY4; a1++) this.aY7(dC[a1], aY6)
	}, this.aY7 = function(ga, aEd) {
		var cs = ga.length;
		this.wy(aEd, cs);
		for (var a1 = 0; a1 < cs; a1++) this.wy(16, ga.charCodeAt(a1))
	}, this.aY8 = function(fr) {
		var aY9 = (fr = fr.toDataURL()).split(",");
		if (aY9.length < 2) console.log("error 266");
		else {
			fr = r.aI.hP(fr = aY9[aY9.length - 1], "/", "_"), fr = r.aI.hP(fr, "\\+", "-");
			var fr = r.aI.hP(fr, "=", ""),
				aCT = i3.oi.aHa(fr),
				cs = aCT.length;
			this.wy(30, cs);
			for (var a1 = 0; a1 < cs; a1++) this.wy(6, aCT[a1])
		}
	}
}

function aEv() {
	var aYA = new Uint16Array(q.aA);

	function aYJ(player, aYG) {
		for (var cs = d7.d8[0], dN = d7.dN, aYP = -1, mc = q.aA, a1 = 0; a1 < cs; a1++) {
			var rh, cy = dN[a1];
			a4Q.a4R(player, cy) && (rh = f7.oG(aYG, f7.aYQ(cy)), -1 === aYP || rh < aYP) && (aYP = rh, mc = cy)
		}
		return mc
	}

	function aYL(aYI, aYG) {
		if (aYI === q.aA) return 0;
		var a0a = b7.a0a[aYI],
			jP = a0a.length;
		if (0 === jP) return 0;
		for (var cs = Math.min(jP, 10), mc = 0, aYP = f7.oG(a0a[mc] >> 2, aYG), a1 = 0; a1 < cs; a1++) {
			var aF = r2.r3(jP),
				rh = f7.oG(a0a[aF] >> 2, aYG);
			rh < aYP && (aYP = rh, mc = aF)
		}
		return a0a[mc] >> 2
	}

	function aYM(player, aYG, xg, aYR) {
		var aYS;
		(aYR === q.aA || (aYS = f7.aYQ(xg), aYR = f7.aYQ(aYR), f7.oG(aYG, aYS) < f7.oG(aYG, aYR))) && (aYA[player] = xg)
	}
	this.az = function() {
		aYA.fill(q.aA)
	}, this.aF3 = function() {
		if (bL.bM() % 109 == 9 && !(ct.cu < 20) && q.bf && !(d5.pY() < hA.iV(8 * q.pZ, 10))) {
			var zT = d5.pb();
			if (aC.d2[zT]) {
				d5.aYB(zT);
				var cs = d7.d8[0];
				if (0 !== cs)
					for (var dC = d7.d9, cw = ct.cw, cu = ct.cu, aYC = aYA, aF = r2.r3(cs), a1 = 0; a1 < cu; a1++) {
						var wo = cw[a1],
							vg = dC[aF];
						r.cz.rR(wo, vg) && 512 === aYC[wo] && (aYC[wo] = vg, aF = (aF + 1) % cs)
					}
			}
		}
	}, this.bs = function(player) {
		var aYG, aYK, aYI, aYD = function(player) {
			var xg = aYA[player];
			if (xg !== q.aA) {
				if (r.cz.a3E(xg) && b7.a0a[xg]) return xg;
				aYA[player] = q.aA
			}
			return q.aA
		}(player);
		return function(player) {
			for (var a3I = ct.cw, jP = ct.cu, cs = Math.min(jP, jP < 17 && 5 === r2.r3(20) ? 1 : 16), ba = r2.r3(jP), dN = d7.dN, a0a = b7.a0a, fe = 0, a1 = 0; a1 < cs; a1++) {
				var cy = a3I[(a1 + ba) % jP];
				cy !== player && a0a[cy].length && (dN[fe++] = cy)
			}
			d7.d8[0] = fe
		}(player), 0 !== d7.d8[0] && (0 < (aYK = aYL(aYI = aYJ(player, aYG = f7.aYH(player)), aYG)) && il.rZ.aNH(player, il.nr.aAx(aYK, aYG)) ? (aYM(player, aYG, aYI, aYD), !0) : 0 < (aYI = function(player, aYG) {
			for (var cs = d7.d8[0], dN = d7.dN, aYC = aYA, ba = 0, a1 = 0; a1 < cs; a1++) {
				var cy = dN[a1],
					cy = aYC[cy];
				cy !== q.aA && r.cz.a3E(cy) && player !== cy && a4Q.a4R(player, cy) && (dN[ba++] = cy)
			}
			return 0 !== (d7.d8[0] = ba) ? aYL(aYJ(player, aYG), aYG) : 0
		}(player, aYG)) && il.rZ.aNH(player, il.nr.aAx(aYI, aYG)) ? (aYM(player, aYG, eb.wB(aYI << 2), aYD), !0) : !!(0 < (aYK = aYL(aYD, aYG)) && il.rZ.aNH(player, il.nr.aAx(aYK, aYG))))
	}
}

function aYU() {
	var aYV, aIR, aFu;

	function aYb(a1) {
		return r.color.a7e(aIR[a1][0], aIR[a1][1], aIR[a1][2])
	}

	function aAH(bN, fv) {
		return r.color.aW8(aIR[bN], aIR[fv]), aYb(fv)
	}

	function aYZ() {
		aYV && (aYV.remove(), aYV = null)
	}
	this.show = function(h1, colors, id) {
		0 <= (aFu = id) && hW.b0.hl(0) && hW.kY.aBT(0, id), h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = (h1 = h1.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aIR = colors, (aYV = document.createElement("div")).style.position = "fixed", aYV.style.top = "0", aYV.style.left = "0", aYV.style.width = "100%", aYV.style.height = "100%", aYV.style.backgroundColor = r.color.xj(aIR[0][0], aIR[0][1],
				aIR[0][2], .6), aYV.style.zIndex = "6", aYV.onclick = function(cb) {
				cb.target === aYV && aYZ()
			},
			function(h1) {
				var fk, aYa = document.createElement("div");
				aYa.style.position = "absolute", aYa.style.display = "flex", aYa.style.flexDirection = "column", aYa.style.top = "50%", aYa.style.left = "50%", aYa.style.backgroundColor = aYb(2), fk = b2.b3.b4() ? r.bF.kA(bD.min) : r.bF.oV(.4);
				fk = Math.max(fk, 200), aYa.style.width = r.bF.nO(fk), aYa.style.height = r.bF.nO(fk), aYa.style.transform = "translate(-50%, -50%)",
					function(aYa, fk) {
						var aYf = document.createElement("div");
						aYf.style.flex = "0 0 10%", aYf.style.overflow = "hidden", aYf.style.backgroundColor = aYb(1), aYf.style.color = aAH(1, 7), aYf.style.font = r.bF.bG(1, .05 * fk), aYf.style.display = "flex", aYf.style.alignItems =
							"center", aYf.style.justifyContent = "center", aYf.innerHTML = L(528), aYa.appendChild(aYf)
					}(aYa, fk),
					function(aYa, h1, fk) {
						var aYg = document.createElement("div");
						aYg.style.flex = "0 0 70%", aYg.style.overflowY = "auto", aYg.style.overflowX = "hidden", aYg.style.whiteSpace = "pre-wrap", aYg.style.wordWrap = "break-word", aYg.style.padding = r.bF.nO(.02 * fk), aYg.style
							.backgroundColor = aYb(2), aYg.style.color = aAH(2, 8), aYg.style.font = r.bF.bG(0, .07 * fk), aYg.innerHTML = h1, aYg.innerHTML = "<style>a { color: inherit; }</style>" + aYg.innerHTML, aYa.appendChild(aYg)
					}(aYa, h1, fk),
					function(aYa, fk) {
						var vL = document.createElement("div"),
							aYh = (vL.style.display = "flex", vL.style.flexDirection = "row", vL.style.justifyContent = "space-between", vL.style.alignItems = "stretch", vL.style.backgroundColor = aYb(3), vL.style.flex = "1", vL.style.padding = r
								.bF.nO(.01 * fk), vL.style.gap = r.bF.nO(.01 * fk), document.createElement("div")),
							aYi = (aYh.style.flex = "0 0 60%", aYh.style.height = "100%", new g(L(326, 0, 0, 1), function() {
								aYZ()
							}, aYb(4), !1)),
							aYi = (aYi.button.style.width = "100%", aYi.button.style.height = "100%", aYi.button.style.color = aAH(4, 9), aYi.button.style.font = r.bF.bG(1, .05 * fk), aYh.appendChild(aYi.button), document.createElement("div")),
							aYk = (aYi.style.flex = "0 0 15%", aYi.style.height = "100%", aYi.style.backgroundColor = aYb(5), document.createElement("div")),
							aYl = (aYk.style.flex = "1", aYk.style.height = "100%", new g(L(529), function(cb) {
								return r.bF.hm(cb), aFu < 0 || hW.b0.hl(0) && (hW.kY.aBT(1, aFu), aFu = -1), !0
							}, aYb(6), !1));
						aYl.button.style.width = "100%", aYl.button.style.height = "100%", aYl.button.style.color = aAH(6, 10), aYl.button.style.font = r.bF.bG(1, .035 * fk), aYk.appendChild(aYl.button), vL.appendChild(aYh), vL.appendChild(aYi),
							vL.appendChild(aYk), aYa.appendChild(vL)
					}(aYa, fk), aYV.appendChild(aYa)
			}(h1), document.body.appendChild(aYV)
	}
}

function kT() {
	this.aO4 = !1, this.bs = function() {
		bL.bM() % 250 != 249 || q.cL || (hW.kY.aBW(+(this.aO4 && b7.c0[q.bS]), ct.cu + il.b0.rm), this.aO4 = !1)
	}
}

function hk(aYn) {
	var tY = document.createElement("div");
	this.cb = tY, this.aYo = aYn, this.resize = function() {
		for (var cs = aYn.length, a1 = 1; a1 < cs; a1++) r.bF.kB(aYn[a1], 4)
	};
	var a1, cs = aYn.length;
	for (tY.style.width = "100%", tY.style.height = "2.7em", tY.style.marginTop = "0.6em", tY.style.border = "inherit", a1 = 0; a1 < cs; a1++) aYn[a1].style.verticalAlign = "top", aYn[a1].style.width = (100 / cs).toFixed(2) + "%", aYn[a1].style
		.height = "100%", aYn[a1].style.fontSize = "0.75em", tY.appendChild(aYn[a1])
}

function ti() {
	var aYp = null,
		aJ2 = 2e4,
		aYq = 0;
	this.bs = function() {
		bL.c8 < aJ2 || (aJ2 = bL.c8 + 1e4, 0 !== b2.id) || aYp || yh.tl() || (hW.b0.hl(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || hW.kY.aBS(5) : aJ2 = bL.c8 + 1e3)
	}, this.qi = function(aN) {
		aYp = aN
	}, this.show = function() {
		return !(!aYp || bL.c8 < aYq) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aYq = bL.c8 + 6e4, (new aYU).show(aYp.h1, aYp.colors, aYp.id), !(aYp = null)))
	}
}

function vH() {
	var b, c, y;

	function aYw() {
		for (var colors = new Array(11), a1 = 0; a1 < 11; a1++) {
			var dC = b5.buffer.data[163 + a1].value.split(",");
			colors[a1] = new Uint8Array(3);
			for (var bN = 0; bN < 3; bN++) bN < dC.length && (colors[a1][bN] = Number(dC[bN]))
		}
		return colors
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(274), [new g("⬅️ " + L(1), function() {
		n.p()
	})]), c = new i(b.j, ((y = []).push(function() {
		var a3 = new a4;
		return a3.a5(L(530)), a3.aE(hW.b0.hX("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", a3.aE("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), a3
	}()), y.push(function() {
		var a3 = new a4,
			h1 = (a3.a5(L(531)), b5.buffer.data[174].value),
			hq = a3.hr(h1.length + " / 180"),
			aOz = (hq.style.textAlign = "center", new aG(0, 1, function(cb) {
				var cb = cb.target.value,
					fe = cb.length;
				hq.textContent = fe + " / 180", fe <= 180 && b5.hi.hj(174, cb)
			}));
		return aOz.cb.rows = 6, aOz.cb.style.fontSize = "1em", aOz.aH(h1), a3.aK(aOz), a3
	}()), y.push(function() {
		var a3 = new a4;
		a3.a5(L(104));
		for (var a1 = 0; a1 < 11; a1++) {
			var a3r = a3.aK(new hZ(b5.buffer.data[163 + a1]));
			a1 && (a3r.cb.style.marginTop = "0.6em")
		}
		return a3.aK(new hk([new g(L(498), function() {
			for (var data = b5.buffer.data, a1 = 163; a1 < 174; a1++) data[a1] && b5.buffer.aLM(a1, data[a1].lg);
			n.p(), n.o()[31] = null, n.aB(31)
		}).button])), a3
	}()), y.push(function() {
		var a3 = new a4;
		return a3.a5("Targeting"), a3.aE(L(499)), a3.aK(new hZ(b5.buffer.data[175], 0, 0)), a3
	}()), y.push(function() {
		var a3 = new a4;
		return a3.a5(L(523)), a3.aK(new hk([new g(L(359), function() {
			(new aYU).show(b5.buffer.data[174].value, aYw(), -1)
		}).button])), a3
	}()), y.push(function() {
		var a3 = new a4,
			aYx = (a3.a5(L(532)), a3.aE(L(533)), new hZ(b5.buffer.data[176], 1, 0)),
			aYy = (a3.aK(aYx), new g(L(534), function(cb) {
				return he.button.textContent === L(15) && hW.b0.hl(0) && (r.bF.hm(cb), hd(), hW.hn.aEj(b5.buffer.data[176].value, aYw(), b5.buffer.data[175].value, b5.buffer.data[174].value)), !0
			}, 1)),
			hd = function() {
				he.button.textContent = L(14), aYy.hg(1), aYy.button.style.color = bO.bX
			},
			he = new g(L(14), function(cb) {
				return cb.textContent === L(14) ? (cb.textContent = L(15), aYy.hg(0), aYy.button.style.color = bO.hh) : hd(), !0
			});
		return a3.aK(new hk([he.button, aYy.button])), a3
	}()), y))
}

function aPs() {
	this.aXM = null, this.cC = !1, this.c8 = 0, this.j8 = 56;
	var aYz = 0;

	function aZ0() {
		bL.c8 = aYz = performance.now(), bL.aXM.bs(), window.requestAnimationFrame(aZ0)
	}
	this.az = function() {
		this.zF(), window.requestAnimationFrame(aZ0), this.c8 = performance.now()
	}, this.yu = function() {
		q.cL ? (this.aXM = new iu, this.aXM.az()) : q.cK ? this.aXM = new aXf : (this.aXM = new mC, this.aXM.az())
	}, this.zF = function() {
		this.aXM = new aGm, this.cC = !0
	}, this.bs = function() {
		this.aXM.j0++
	}, this.bM = function() {
		return this.aXM.j0
	}, this.aXF = function() {
		var bx = performance.now();
		bx < aYz + 1e3 || (this.c8 = bx, this.aXM.bs())
	}
}

function aPb() {
	var aZ2;

	function aZ3(player) {
		var n1, aX1;
		return r.cz.fO(player) && player < q.bq ? 0 : (n1 = aZ2[hA.iV((q.aA - 1) * b7.br[player], q.pZ)], bL.bM() < 1920 && (n1 = Math.max(hA.iV(100 * (13440 - 6 * bL.bM()), 1920), n1)), aX1 = yl.a6d(player), b7.di[player] > aX1 && (n1 -= hA.iV(2 *
			n1 * (b7.di[player] - aX1), aX1)), Math.min(Math.max(n1, 0), 700))
	}

	function aZE(gH) {
		for (var br = b7.br, cw = ct.cw, a1 = ct.cu - 1; 0 <= a1; a1--) {
			var cy = cw[a1];
			r.cz.a4c(cy, hA.iV(gH * br[cy], 32))
		}
	}

	function aZB() {
		var aRu = q.bS;
		d7.dE[0] = b7.di[aRu] - b7.fX[aRu]
	}

	function aZD(a9) {
		var aRu = q.bS,
			aRu = b7.di[aRu] - b7.fX[aRu] - d7.dE[0];
		yl.aZ1 += aRu, dg.dh[a9] += aRu
	}
	this.aZ1 = 0, this.aPy = function() {
		for (var cs = q.aA, a1 = (aZ2 = new Uint16Array(cs), 0); a1 < cs; a1++) aZ2[a1] = 100 + mo(hA.iV(25600 * a1, cs - 4), 9)
	}, this.az = function() {
		(this.aZ1 = 0) === q.data.iIncomeType ? this.aIX = aZ3 : 1 === q.data.iIncomeType ? this.aIX = function(player) {
			return hA.iV(q.data.iIncomeValue * aZ3(player), 64)
		} : this.aIX = function(player) {
			return hA.iV(q.data.iIncomeData[player] * aZ3(player), 64)
		}
	}, this.bs = function() {
		if (bL.bM() % 10 == 9 && (yl.aZ1 = 0, function() {
				aZB();
				for (var cw = ct.cw, di = b7.di, a1 = ct.cu - 1; 0 <= a1; a1--) {
					var cy = cw[a1],
						aZC = hA.iV(yl.aIX(cy) * di[cy], 1e4);
					r.cz.a4c(cy, Math.max(aZC, 1))
				}
				aZD(9)
			}(), function() {
				if (0 !== q.data.aIncomeType) {
					if (aZB(), 1 === q.data.aIncomeType)
						for (var br = b7.br, cw = ct.cw, gH = q.data.aIncomeValue, a1 = ct.cu - 1; 0 <= a1; a1--) {
							var cy = cw[a1];
							r.cz.a4c(cy, hA.iV(gH * br[cy], 128))
						} else 2 === q.data.aIncomeType && function() {
							for (var br = b7.br, cw = ct.cw, gH = q.data.aIncomeData, a1 = ct.cu - 1; 0 <= a1; a1--) {
								var cy = cw[a1];
								r.cz.a4c(cy, hA.iV(gH[cy] * br[cy], 128))
							}
						}();
					aZD(18)
				}
			}(), bL.bM() % 100 == 99)) {
			if (aZB(), 0 === q.data.tIncomeType) aZE(32);
			else if (1 === q.data.tIncomeType) aZE(q.data.tIncomeValue);
			else
				for (var br = b7.br, cw = ct.cw, gH = q.data.tIncomeData, a1 = ct.cu - 1; 0 <= a1; a1--) {
					var cy = cw[a1];
					r.cz.a4c(cy, hA.iV(gH[cy] * br[cy], 32))
				}
			aZD(8)
		}
	}, this.a6d = function(player) {
		return Math.min(100 * b7.br[player], q.yS)
	}, this.aVj = function(player, a6V) {
		vw.aA9(player, a6V, d7.dF[0], 0), r.cz.a4c(a6V, d7.dF[0]), dg.wc(player, a6V), ez.eZ(player, d7.dF[0] + d7.dF[1]), ez.ed(a6V, d7.dF[0]), r.cz.aXu(player)
	}, this.aZ5 = function() {
		for (var cs = ct.cu, cv = ct.cw, jP = 0, lG = b7.di, a1 = 0; a1 < cs; a1++) jP += lG[cv[a1]];
		return jP
	}, this.aZ6 = function(aZ7) {
		for (var cy, cs = ct.cu, cv = ct.cw, jP = 0, lG = b7.di, wD = aC.wD, a1 = 0; a1 < cs; a1++) wD[cy = cv[a1]] === aZ7 && (jP += lG[cy]);
		return jP
	}
}

function aDm() {
	this.bs = function(player) {
		return !!il.ni.nj(player) && !(il.b0.yG[player] >= Math.max(3 * yt.performance.aVy, v.a2N[v.dn[player]]) || !r.cz.aXk(player, v.a4y[v.dn[player]], 32, 0)) && (jK.aR0() ? function(player) {
			var aZK = il.nr.aBH(),
				cs = aZK.length;
			if (0 === cs) return !1;
			aZK = aZK[r2.r3(cs)], cs = il.b0.rD[aZK];
			if (il.rL.a2Q(player, cs)) return !1;
			return !! function(player, aFG) {
				var aFG = f7.rO(il.b0.rP[aFG]),
					nu = f7.nv(aFG),
					aFG = f7.nx(aFG),
					cU = b7.el[player],
					cV = b7.em[player],
					cW = b7.eo[player],
					player = b7.ep[player],
					cW = Math.max(nu - cW, cU - nu),
					cU = Math.max(aFG - player, cV - aFG);
				return cW < 100 && cU < 100
			}(player, aZK) && !!il.aDs.rH(player, cs, 1) && (r.cz.aXu(player), il.b0.iY(player), !0)
		}(player) : !!(yt.aF1.bs(player) || yt.aEs.bs(player) || yt.aEu.bs(player)) && (function(player) {
			d7.dM[1] = 4, r.cz.aXu(player), il.b0.iY(player)
		}(player), !0))
	}
}

function aPp() {
	var gap, aZM = !1,
		aFF = 0,
		dt = 0,
		kp = 0,
		canvas = null,
		b9 = null,
		rx = null;

	function aZQ() {
		for (var a1 = q.ya; 0 <= a1; a1--) rx[a1] = 0;
		for (a1 = ct.cu - 1; 0 <= a1; a1--) rx[aC.wD[ct.cw[a1]]] += b7.br[ct.cw[a1]];
		aZM = !0
	}

	function aZO() {
		for (var aZU, aZS = 0, cs = 0, aN = Math.floor(dt / 2), n1 = Math.floor(kp / 2), aZT = 1.5 * Math.PI, a1 = q.ya; 0 <= a1; a1--) cs += rx[a1], 0 === rx[a1] && aZS++;
		if (aZM = !1, b9.clearRect(0, 0, dt, dt), 0 < cs)
			if (aZS === q.ya) {
				for (a1 = q.ya; 0 <= a1; a1--)
					if (0 < rx[a1]) {
						! function(a1, aN, n1) {
							b9.fillStyle = aC.a3N[aC.d2[a1]], b9.beginPath(), b9.arc(aN, aN, n1, 0, 2 * Math.PI), b9.fill()
						}(a1, aN, n1);
						break
					}!
				function(aN) {
					var fontSize = aN / 3;
					b9.font = r.bF.bG(1, fontSize), b9.fillStyle = bO.bX, b9.fillText("100%", aN, aN + .1 * fontSize)
				}(aN)
			} else {
				for (a1 = 0; a1 <= q.ya; a1++) 0 < rx[a1] && (! function(a1, aN, n1, aZT, aZU) {
					b9.fillStyle = aC.a3N[aC.d2[a1]], b9.beginPath(), b9.arc(aN, aN, n1, aZT, aZU), b9.lineTo(aN, aN), b9.fill()
				}(a1, aN, n1, aZT, aZU = aZT + 2 * Math.PI * rx[a1] / cs), function(aN, n1, aZT, aZU) {
					var h2 = (aZU - aZT) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * n1 * Math.min(h2, .37);
					fontSize < 8 || (aZT = (aZT + aZU) / 2, aZU = (__fx.settings.detailedTeamPercentage ? (100 * h2).toFixed(2) : Math.floor(100 * h2 + .5)) + "%", n1 *= .525 - Math.max(.6 * (h2 - .7), 0), b9.font = r.bF.bG(1, fontSize), b9
						.fillStyle = bO.bX, b9.fillText(aZU, aN + Math.cos(aZT) * n1, aN + Math.cos(aZT + 1.5 * Math.PI) * n1))
				}(aN, n1, aZT, aZU), 0 !== a1 && aZZ(aN, n1, aZT), aZT = aZU);
				aZZ(aN, n1, 1.5 * Math.PI)
			}!
		function(aN, n1) {
			b9.beginPath(), b9.arc(aN, aN, n1, 0, 2 * Math.PI), b9.stroke()
		}(aN, n1)
	}

	function aZZ(aN, n1, aMY) {
		b9.beginPath(), b9.moveTo(aN, aN), b9.lineTo(aN + Math.cos(aMY) * n1, aN + Math.cos(aMY + 1.5 * Math.PI) * n1), b9.stroke()
	}
	this.az = function() {
		if (q.bf) {
			aFF = 0, rx = new Uint32Array(q.ya + 1);
			for (var a1 = q.ya; 0 <= a1; a1--) rx[a1] = 0;
			for (a1 = ct.cu - 1; 0 <= a1; a1--) rx[aC.wD[ct.cw[a1]]] += 1;
			this.resize()
		} else rx = b9 = canvas = null
	}, this.qo = function() {
		return dt
	}, this.resize = function() {
		q.bf && (dt = Math.floor(.95 * (b2.b3.b4() && !q.cP ? .18 * bD.min : .13 * bD.bE)), dt = (dt *= 1 + (.5 + .2 * b2.b3.b4()) * q.cP) + dt % 2, gap = Math.max(1, .015 * dt), kp = Math.floor(dt - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = dt, canvas.height = dt, (b9 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, b9.strokeStyle = bO.bX, r.bF.textAlign(b9, 1), r.bF.textBaseline(b9, 1), aZO())
	}, this.pY = function(aZP) {
		aZP && aZQ();
		var bx, aZP = this.pb();
		return aC.d2[aZP] || (aZP = function() {
			for (var zT = -1, a1 = q.ya; 1 <= a1; a1--)(-1 === zT || rx[a1] > rx[zT]) && (zT = a1);
			return zT
		}(), bx = b7.br[aR[0]], -1 !== aZP && rx[aZP] > bx) ? rx[aZP] : bx
	}, this.zU = function() {
		return aFF = 31, this.bs(), this.pb()
	}, this.pb = function() {
		for (var zT = 0, a1 = q.ya; 0 < a1; a1--) rx[a1] > rx[zT] && (zT = a1);
		return zT
	}, this.d6 = function(aUS) {
		for (var fe = 0, cw = ct.cw, wD = aC.wD, cs = ct.cu, d9 = d7.d9, a1 = 0; a1 < cs; a1++) {
			var cy = cw[a1];
			wD[cy] === aUS && (d9[fe++] = cy)
		}
		d7.d8[0] = fe
	}, this.aYB = function(aUS) {
		for (var fe = 0, cw = ct.cw, wD = aC.wD, cs = ct.cu, d9 = d7.d9, a1 = 0; a1 < cs; a1++) {
			var cy = cw[a1];
			wD[cy] !== aUS && (d9[fe++] = cy)
		}
		d7.d8[0] = fe
	}, this.aXh = function() {
		for (var fe = 0, a1 = q.ya; 0 <= a1; a1--) fe += 0 < rx[a1];
		return fe
	}, this.bs = function() {
		q.bf && 32 <= ++aFF && (aFF = 0, aZQ())
	}, this.lA = function() {
		q.bf && aZM && aZO()
	}, this.cR = function() {
		q.bf && (q.cP ? cS.drawImage(canvas, bY.gap, bY.gap) : cS.drawImage(canvas, bY.gap, aQ + 2 * bY.gap))
	}
}

function aQb() {
	this.tB = function(ga, aEd, aZb) {
		for (var aZc = [], cs = ga.length, max = 0, a1 = 0; a1 < cs; a1++) {
			var h2 = ga.charCodeAt(a1);
			aZc.push(h2), max = Math.max(max, h2)
		}
		var aEe = max < 128 ? 7 : 16;
		for (aZb.wy(aEd, cs), aZb.wy(1, +(16 == aEe)), a1 = 0; a1 < cs; a1++) aZb.wy(aEe, aZc[a1])
	}
}

function aPk() {
	this.size = 0, this.a9 = 0, this.mH = null, this.az = function(mH) {
		this.a9 = 0, this.mH = mH, this.size = mH.length
	}, this.ln = function() {
		this.mH = null
	}, this.i2 = function(size) {
		for (var h2 = 0, mH = this.mH, bz = this.a9 + size - 1, a1 = this.a9; a1 <= bz; a1++) h2 |= (mH[a1 >> 3] >> 7 - (7 & a1) & 1) << bz - a1;
		return this.a9 += size, this.a9 > 8 * this.size && console.error("Unwrapper Overflow"), h2
	}, this.i6 = function(size) {
		var fv = size >> 1;
		return (1 << fv) * this.i2(size - fv) + this.i2(fv)
	}, this.i9 = function(aP9) {
		return this.size === hy.hz(aP9)
	}, this.aHn = function(aEd, aY3, aZd) {
		var fe = this.i2(aEd);
		if (!fe) return null;
		for (var aEd = Math.max(fe, aZd), dC = new(aY3 <= 8 ? Uint8Array : aY3 <= 16 ? Uint16Array : Uint32Array)(aEd), a1 = 0; a1 < fe; a1++) dC[a1] = this.i2(aY3);
		aZd = dC[fe - 1];
		return aZd && dC.fill(aZd, fe), dC
	}, this.aHo = function(aEd, aY6, aZd) {
		var fe = this.i2(aEd);
		if (!fe) return null;
		for (var aEd = Math.max(fe, aZd), dC = new Array(aEd), a1 = 0; a1 < fe; a1++) dC[a1] = this.aHl(aY6);
		return dC.fill(dC[fe - 1], fe), dC
	}, this.aHl = function(aEd) {
		return i3.iA.iB(this.i2(aEd))
	}, this.aHm = function() {
		var aDc = this.i2(30);
		if (!(6 * aDc > 8 * this.size - this.a9)) {
			var ga = oh.oi.a5h(oh.oi.a5i(aDc)),
				ga = r.aI.hP(ga, "_", "/");
			ga = r.aI.hP(ga, "-", "+");
			for (var aZe = "";
				(ga.length + aZe.length) % 4;) aZe += "=";
			ga = "data:image/png;base64," + ga + aZe;
			var lx = new Image;
			lx.onload = function() {
				jR.ju.aHf(lx), lx.onload = null, lx = null
			}, lx.src = ga
		}
	}
}

function aPt() {
	this.bZ = 0, this.gap = 0, this.oU = 0, this.aDx = 0, this.az = function() {
		this.resize()
	}, this.resize = function() {
		this.bZ = .0022 * r.bF.dv(.5) * bD.bE, this.oU = this.bZ / bD.cp, this.gap = Math.max(Math.floor((b2.b3.b4() ? .0114 : .01296) * bD.bE), 2), this.aDx = this.gap / bD.cp
	}
}

function aV2() {
	this.hj = function(a9, value) {
		2 !== b5.buffer.data[a9].type && (value = Math.floor(value)), b5.buffer.data[a9].value !== value && (b5.buffer.aLM(a9, value), 0 === a9 ? (n.ta(), nD.az(), n.aB(2)) : 1 === a9 ? bD.aQ0(1) : 2 === a9 ? bD.aQ0(0) : 5 === a9 && (r.bF.so(),
			bD.aQ0(0)))
	}, this.aR5 = function() {
		for (var data = b5.buffer.data, a1 = 0; a1 < 100; a1++) data[a1] && b5.buffer.aLM(a1, data[a1].lg);
		r.bF.so(), bD.aQ0(1)
	}, this.aVP = function() {
		for (var data = b5.buffer.data, a1 = 0; a1 < data.length; a1++) data[a1] && b5.buffer.hj(a1, data[a1].lg)
	}, this.ue = function() {
		for (var fv = b5.buffer, a1 = 128; a1 < 135; a1++) fv.aLM(a1, fv.data[a1].lg)
	}, this.a6R = function(data) {
		b5.hi.hj(109, data.oj), b5.hi.hj(107, data.a5k), b5.hi.hj(108, data.a5l), b5.hi.hj(112, data.a5m), b5.hi.hj(111, data.a5n), b5.hi.hj(113, data.a5o), b5.hi.hj(135, data.a5p), b5.hi.hj(136, data.a5q), b5.hi.hj(137, data.a5r), b5.hi.hj(138,
			data.a5s), b5.hi.hj(139, data.a5t), b5.hi.hj(141, data.a5u), b5.hi.hj(142, data.a5v), b5.hi.hj(143, data.a5w), b5.hi.hj(144, data.a5x)
	}
}

function a8(a9W, aA7) {
	this.aOl = [];
	var aZf = this.aOl;

	function click() {
		for (var a1 = 0; a1 < aZf.length; a1++) aZf[a1].textContent = aZf[a1].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var a9 = parseInt(this.name);
		void 0 !== a9W.a9 && b5.hi.hj(a9W.a9, a9), aA7 && aA7(a9)
	}
	for (var aZg, cs = a9W.a6.length, a1 = 0; a1 < cs; a1++)(aZg = document.createElement("p")).textContent = "⚪ " + a9W.a6[a1], aZg.style.margin = "0", aZg.name = "" + a1, aZg.style.cursor = "pointer", aZg.style.fontSize = "1em", aZg
		.addEventListener("click", click), aZf.push(aZg);
	aZf[a9W.value].textContent = aZf[a9W.value].textContent.replace("⚪", "🟢")
}

function a12() {
	this.bs = function() {
		var aZm;
		2 === q.yd ? (g5.vX(0, 59), cM.aZh(2700)) : q.eU < 7 ? (aZm = aC.d2[q.d3], aZm = aC.aD[aZm], l9.qd(L(535, [aZm]), 2, 1, 12), g5.pa(0, L(536, [aZm]), 40, 0, bO.bX, bO.lC, -1, !1), cM.aZh(2700)) : 8 === q.eU ? (q.wN ? g5.vX(q.ye, 2) : g5
			.vX(1 - q.bS, 3), q.wP.aIa(q.ye), cM.cN(q.ye, 2700, !1, 0)) : 9 === q.eU ? (g5.wM(), cM.aZh(2700)) : (g5.w6(q.ye), cM.cN(q.ye, 2700, !1, 0))
	}, this.aZo = function() {
		var ga;
		q.cL || q.cK || (ga = hW.b0.aHi(), q.eU < 7 ? ga += "/log/team" : 8 === q.eU ? ga += "/log/1v1" : 9 === q.eU ? ga += "/log/zombies" : ga += "/log/br", g5.pa(720, ga, 736, 0, bO.bX, bO.nT, -1, !1))
	}
}

function sM() {
	var aZp = aI9(),
		aZq = hQ(),
		aZr = aRG();
	this.i2 = function() {
		return 123
	}, this.tB = function() {
		i3.oi.x4(b5.buffer.data[183].value, 15), hy.wy(14, aZp), hy.wy(7, aZq), hy.wy(12, aZr)
	}
}

function aBx(aBk) {
	var a5U = document.createElement("div"),
		aBp = document.createElement("div");
	this.lA = function() {
			aBp.textContent = "", uN.a1j.aJZ && uN.a1j.aL(1);
			for (var aOB = document.createDocumentFragment(), aZs = uN.b0.a8P[0], zf = uN.zf.a8G[aZs], zg = uN.zf.zg[aZs], a1 = 0; a1 < zf.length; a1++) ! function(aOB, vu, aZu, aZs) {
				var na = document.createElement("span");
				na.textContent = (aZu ? "🟢 " : "⚪ ") + uN.nr.aZv(vu, aZs), na.style.color = uN.nr.a1e(vu.a1b), 11 === vu.a1b && (na.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				na.style.cursor = "pointer", na.style.margin = "0.2em 0.2em 0.2em 0.2em", na.style.width = na.style.maxWidth = 2 === aZs ? "10em" : "9em", na.style.height = na.style.maxHeight = "1.4em", na.style.whiteSpace = "nowrap", na.style
					.overflow = "hidden", na.style.textOverflow = "ellipsis", na.style.font = "inherit", na.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aZu = __fx.utils.getDuplicateIpHighlightColor(vu, uN.zf.a8G[aZs],
						"a8J")) && (na.style.backgroundColor = aZu, na.style.borderRadius = "0.3em");
				__fx.settings.highlightSameClan && (aZs = __fx.utils.getSameClanHighlightColor(vu, uN.a8L, "username")) && (na.style.backgroundColor ? na.style.boxShadow = "inset 0 0 0 2px " + aZs : na.style.backgroundColor = aZs, na.style
					.borderRadius = "0.3em");
				uN.nr.a1f(vu) && (na.style.textDecoration = "underline"), vu.a1g && (na.style.textDecorationLine = "underline", na.style.textDecorationStyle = "dotted");
				na.onclick = function(cb) {
					aBk(cb, vu)
				}, c9.lz() || (na.onmouseover = function(cb) {
					uN.a1j.a1k(cb.target, vu, 1)
				}), aOB.appendChild(na)
			}(aOB, zf[a1], a1 < zg, aZs);
			aBp.appendChild(aOB)
		}, this.show = function(a8Y) {
			a8Y.appendChild(a5U)
		}, this.aL = function(a8Y) {
			n.removeChild(a8Y, a5U)
		}, this.resize = function() {
			aBp.style.fontSize = r.bF.nO(r.bF.oV(.02, .3))
		}, a5U.style.top = "0", a5U.style.left = "0", a5U.style.width = a5U.style.height = "100%", a5U.style.overflowX = "hidden", a5U.style.overflowY = "auto", a5U.style.font = "inherit", aBp.style.font = "inherit", aBp.style.margin = "0.4em", a5U
		.appendChild(aBp)
}

function a0z() {
	this.az = function() {
		this.ur = 0, this.cx = [], this.aRw = 0, this.aRo = 0
	}, this.zR = function() {
		var aJM;
		q.cK || (aJM = this, 2 === q.yd ? aJM.cx = pc.a10.cr() : q.bf ? aJM.cx = pc.a10.d1() : aJM.cx = pc.a10.d4(), aJM.ur = a0j.sJ.uk(), aJM.aRw = Math.max(1, pc.a10.dA(aJM.cx)), jd.cz.a5G(), 8 === q.eU ? pc.result.aRo = 0 : aJM.aRo = 100 * pc
			.result.ur * (1 + q.va))
	}
}

function aPv() {
	this.a8K = 0, this.a8L = null, this.zf = null, this.nr = null, this.b0 = null, this.a1h = null, this.a1j = null, this.message = null, this.a04 = null, this.eu = null, this.a8M = null, this.zt = new aWu, this.uO = 0, this.aM1 = 0, this.az =
		function() {
			this.aM1 = bL.c8, this.a8K = i3.oi.a1q(b5.buffer.data[105].value, 5), this.zf = new a8F, this.nr = new aZy, this.b0 = new a9G, this.a1h = new a9l, this.a1j = new aJU, this.message = new a45, this.a04 = new aZz, this.eu = new a1M, this
				.a8M = new aRh, this.b0.az(), a4E.az(), this.uO = 1, b2.b3.setState(1), jz.setState(0), yh.turnstile.aTW()
		}, this.ln = function() {
			this.eu && this.eu.ln(), this.a8L = null, this.zf = null, this.nr = null, this.b0 = null, this.a1h = null, this.a1j = null, this.message = null, this.a04 = null, this.eu = null, this.a8M = null, this.uO = 0, a4E.ln(), b2.b3.setState(0)
		}
}

function aDl() {
	var fn = 32,
		fo = new Array(2);

	function sq(aN) {
		var c4, bp, oN, ey, ex, fk = fn,
			fr = r.bF.sq(fk, fk),
			fF = r.bF.getContext(fr, !0),
			a5E = r.bF.getImageData(fF, fk, fk),
			fm = a5E.data,
			jP = (fk >> 1) - .5,
			aYP = Math.sqrt(jP * jP);
		for (fm.fill(255), bp = 0; bp < fk; bp++)
			for (c4 = 0; c4 < fk; c4++) ex = c4 - jP, ey = bp - jP, oN = 4 * (bp * fk + c4), ex = 714 * (aYP - Math.sqrt(ex * ex + ey * ey)) / aYP, fm[2 + oN] = aN, fm[3 + oN] = 255 < ex ? 0 : ex;
		return fF.putImageData(a5E, 0, 0), fr
	}
	this.aa0 = -1, this.az = function() {
		this.aa0 = -1, fo[0] || (fo[0] = sq(255), fo[1] = sq(0))
	}, this.aa1 = function(fF, gF, c4, bp, n1, a1) {
		r.cz.pt(q.bS) && (fF.setTransform(gF *= 4 / 3 * .625, 0, 0, gF, c4 - (n1 *= 4 / 3), bp - n1), fF.drawImage(fo[+(il.b0.rD[a1] === this.aa0)], 0, 0))
	}
}

function aPm() {
	this.a4T = new Int16Array(4), this.a4Z = new Int16Array(4), this.aNL = null, this.az = function() {
		var a1;
		for (this.a4T[0] = -dR.dS, this.a4T[1] = 1, this.a4T[2] = dR.dS, this.a4T[3] = -1, this.aNL = new Int16Array([-dR.dS, 1 - dR.dS, 1, dR.dS + 1, dR.dS, dR.dS - 1, -1, -dR.dS - 1]), a1 = 0; a1 < 4; a1++) this.a4Z[a1] = 4 * this.a4T[a1]
	}, this.nl = function() {
		return hA.hB(Math.floor(.15 * (1 + .25 * b2.b3.b4()) * bD.bE / fH), 4, 128)
	}, this.aAr = function(gF, id) {
		for (var a4Y = this.a4Z, a1 = 0; a1 < 4; a1++) {
			var hE = gF + a4Y[a1];
			if (eb.uF(hE) && eb.np(hE) === id) return !0
		}
		return !1
	}, this.aa2 = function(player, gF) {
		return !eb.wA(gF) && player === eb.wB(gF)
	}, this.aGF = function(nu, nw, oN) {
		return (nu -= this.nv(oN)) * nu + (nw -= this.nx(oN)) * nw
	}, this.aB4 = function(cj, ck, a3r) {
		cj = this.aBF(cj) - this.aBB(a3r), ck = this.aBG(ck) - this.aBD(a3r);
		return Math.sqrt(cj * cj + ck * ck)
	}, this.rX = function(o5, o7) {
		var ex = this.nv(o5) - this.nv(o7),
			o5 = this.nx(o5) - this.nx(o7);
		return ~~Math.sqrt(ex * ex + o5 * o5 + .5)
	}, this.oG = function(o5, o7) {
		var ex = this.nv(o5) - this.nv(o7),
			o5 = this.nx(o5) - this.nx(o7);
		return ex * ex + o5 * o5
	}, this.aa3 = function(f6, f9, fB, fC) {
		return (f6 -= fB) * f6 + (f9 -= fC) * f9
	}, this.a6Y = function(cy, aI3) {
		return hA.iV(aI3 * b7.di[cy], 1e3)
	}, this.aBF = function(cj) {
		return 16 * (cj + fG) / fH
	}, this.aBG = function(ck) {
		return 16 * (ck + fI) / fH
	}, this.aBE = function(gM) {
		return 16 * gM / fH
	}, this.f8 = function(cj) {
		return Math.floor((cj + fG) / fH)
	}, this.fA = function(ck) {
		return Math.floor((ck + fI) / fH)
	}, this.aAK = function(nu, nw) {
		return 1 <= nu && 1 <= nw && nu < dR.dS - 1 && nw < dR.dT - 1
	}, this.nv = function(oN) {
		return oN % dR.dS
	}, this.nx = function(oN) {
		return hA.iV(oN, dR.dS)
	}, this.uG = function(nu, nw) {
		return nw * dR.dS + nu
	}, this.oI = function(nu, nw) {
		return 4 * this.uG(nu, nw)
	}, this.aa4 = function(oN) {
		return this.aGH(this.nv(oN), this.nx(oN))
	}, this.aGH = function(nu, nw) {
		return 0 < nu && nu < dR.dS - 1 && 0 < nw && nw < dR.dT - 1
	}, this.nq = function(oN) {
		return oN << 2
	}, this.aAz = function(gF) {
		return gF >> 2
	}, this.aa5 = function(oN) {
		return dR.dS * this.nx(oN) * 256 + (this.nv(oN) << 4)
	}, this.aU4 = function(oN) {
		return this.aa5(oN) + 8 + (dR.dS << 7)
	}, this.rO = function(a3r) {
		return dR.dS * (this.aBD(a3r) >> 4) + (this.aBB(a3r) >> 4)
	}, this.ij = function(a3r) {
		a3r = this.rO(a3r);
		return (this.nv(a3r) >> 5) + il.iT.iQ * (this.nx(a3r) >> 5)
	}, this.aBB = function(a3r) {
		return a3r % (dR.dS << 4)
	}, this.aBD = function(a3r) {
		return hA.iV(a3r, dR.dS << 4)
	}, this.oO = function(oN, oL) {
		return oN + this.a4T[oL]
	}, this.aa6 = function(gF, oL) {
		return gF + this.a4Z[oL]
	}, this.oM = function(o5, o7) {
		var ex = this.nv(o7) - this.nv(o5),
			o7 = this.nx(o7) - this.nx(o5);
		return Math.abs(ex) >= Math.abs(o7) ? 1 + 2 * (ex < 0) : 2 * (0 < o7)
	}, this.aYQ = function(player) {
		return this.uG(b7.el[player] + b7.eo[player] >> 1, b7.em[player] + b7.ep[player] >> 1)
	}, this.aYH = function(player) {
		return this.uG(r2.aWi(b7.el[player], b7.eo[player]), r2.aWi(b7.em[player], b7.ep[player]))
	}
}

function aa7() {
	this.yq = 1, this.aLY = function(oN) {
		q.cK ? jd.aa8.aLY(q.bS, oN) : hW.kU.aJk(oN)
	}, this.y7 = function(aI3, xg) {
		this.yq && (this.yq = 0, b5.hi.hj(182, aI3)), q.cK ? jd.aa8.y7(q.bS, aI3, xg) : hW.kU.aJl(aI3, xg)
	}, this.aVj = function(aI3, a6V) {
		q.cK ? jd.aa8.aXo(q.bS, aI3, a6V) : hW.kU.aJm(aI3, a6V)
	}, this.aLd = function(aI3, oN) {
		oN = (oN << 3) + d7.dM[6];
		q.cK ? jd.aa8.aLd(q.bS, aI3, oN) : il.ni.nj(q.bS) && hW.kU.aJn(aI3, oN)
	}, this.aLe = function(aI3) {
		849 === aI3 && (aI3 = 850);
		var rF = d7.dM[3];
		q.cK ? jd.aa8.aLe(q.bS, aI3, rF) : il.aDs.rE(q.bS, rF) && hW.kU.aJp(aI3, rF)
	}, this.y4 = function(rF) {
		q.cK ? jd.aa8.y4(q.bS, rF) : hW.kU.aJp(849, rF)
	}, this.y3 = function(xg) {
		q.cK ? jd.aa8.y3(q.bS, xg) : hW.kU.aJq(xg)
	}, this.wI = function(fj) {
		q.cK ? jd.aa8.aa9(q.bS, fj) : hW.kU.aJr(fj)
	}, this.pK = function(aJt) {
		q.cK ? jd.aa8.pK(q.bS, aJt) : hW.kU.aJs(aJt)
	}, this.aD6 = function() {
		q.cK ? jd.aa8.aD6(q.bS) : hW.kU.aJu()
	}, this.pw = function() {
		q.cK ? jd.aa8.pw(q.bS) : hW.kU.aJq(513)
	}, this.aLa = function(aI3, oN, xg) {
		q.cK ? jd.aa8.aLa(q.bS, aI3, oN, xg) : hW.kU.aJv(aI3, oN, xg)
	}
}

function aFB() {
	var cb;
	this.cb = document.createElement("hr"), this.resize = function() {
		r.bF.kB(this.cb, 8, bO.xt)
	}, (cb = this.cb).style.marginBottom = cb.style.marginTop = "0.65em", cb.style.marginLeft = cb.style.marginRight = "-4%", cb.style.border = "none"
}

function aF2() {
	this.bs = function() {
		if (bL.bM() % 51 == 45)
			for (var cs = il.b0.rm, rK = il.b0.rK, rc = il.b0.rc, rD = il.b0.rD, rS = il.b0.rS, a51 = v.a51, dn = v.dn, a1 = 0; a1 < cs; a1++) {
				var rb, player, a2R, a2U = rK[a1];
				a2U % 64 == 6 || (rb = rc[a1], (player = il.nr.aB0(rb[rb.length - 1])) < 0) || !r.cz.rR(player, rS[a1] >> 3) || r2.r3(1e3) >= a51[dn[player]] || ! function(aFG, rb) {
					for (var cs = rb.length - 1, rd = il.b0.re[aFG], rh = 0, a1 = rd + 1; a1 < cs; a1++) rh += f7.rX(rb[a1], rb[a1 + 1]);
					return (rh += f7.rX(f7.rO(il.b0.rP[aFG]), rb[rd + 1])) <= 60
				}(a1, rb) || (a2R = rD[a1], 64 <= a2U && il.rL.a2Q(player, a2R)) || function(player, rb, a2R, aFG, a2U) {
					il.ni.nj(player) && r.cz.aXk(player, v.a4y[v.dn[player]], 32, 0) && (il.b0.rK[aFG] = 64 + a2U % 64, il.rL.qi(a2R, il.b0.rM), d7.dC[0] = il.rk.rl(rb), d7.dM[1] = 6, r.cz.aXu(player), il.b0.iY(player))
				}(player, rb, a2R, a1, a2U)
			}
	}
}

function aPi() {
	this.pJ = new aa7, this.cz = new aWt, this.aa8 = new aaC, this.je = new aaD, this.a4d = new aaE
}

function aPU() {
	var aaH, aaI, aUx = "",
		aaF = 0,
		xX = 0,
		aaG = -1,
		mx = ["Team", "Zombie", "BR", "1v1"];

	function aaJ() {
		for (var bx = new Date, aDY = bx.getUTCMinutes(), bx = bx.getUTCSeconds(), aaK = [], aaL = 0, a1 = 0; a1 < 6; a1++) aaK.push(aaL), aaK.push(aaL + 2), aaK.push(aaL + 5), aaK.push(aaL + 7), aaL += 10;
		for (var cs = aaK.length, a1 = 1; a1 < cs && !(aDY < aaK[a1]); a1++);
		a1 %= cs;
		bx = (aaK[0] = 60) * (aaK[a1] - aDY) - bx;
		return bx !== aaG && (aUx = mx[a1 % 4] + " " + aaI + ": " + aaN(Math.floor(bx / 60)) + ":" + aaN(bx % 60), aaG = bx, aaF = l9.measureText(aUx, aaH), aaF += Math.floor(.4 * xX), 1)
	}

	function aaN(aPA) {
		return aPA < 10 ? "0" + aPA : String(aPA)
	}
	this.az = function() {
		aaI = L(537)
	}, this.resize = function() {
		aaF = Math.floor((b2.b3.b4() ? .53 : .36) * bD.bE), xX = Math.floor(.065 * aaF), aaH = r.bF.bG(1, Math.floor(.9 * xX)), aaG += 1e3, aaJ()
	}, this.bs = function() {
		aaJ() && (bL.cC = !0)
	}, this.cR = function(bp) {
		cS.lineWidth = 1 + Math.floor(xX / 15), cS.translate(bD.dt - xX, bp + aaF), cS.rotate(-Math.PI / 2), cS.fillStyle = bO.bX, cS.fillRect(0, 0, aaF, xX), cS.strokeStyle = bO.nW, cS.strokeRect(0, 0, aaF, xX + 10), cS.fillStyle = bO.nW, cS
			.font = aaH, r.bF.textBaseline(cS, 1), r.bF.textAlign(cS, 1), cS.fillText(aUx, Math.floor(aaF / 2), Math.floor(.59 * xX)), cS.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aPf() {
	var aN, bJ = !1,
		aaO = !1,
		aaP = -1e4,
		aaQ = -1,
		aaR = 0;

	function resize(aaV) {
		aN = 0, bl.gT() && (aaT(aaV) || bJ) && (bJ = !1, bY.resize(), aPI.aGq.resize(), a19.az(), gs.az(), uW.resize(), kD.resize(), kF.resize(), uj.resize(), n.resize(), 1 <= q.cf ? (mX.resize(!1), yP.resize(), jK.resize(), cl.resize(), mS.resize(),
			g5.resize(), j9.resize(), j1.resize(), gv.resize(), yz.resize(), l9.resize(), cd.resize(), mb.resize(), ez.resize(), z0.resize(), d5.resize(), cl.aH4()) : (jz.a1D(), jz.a1G()), bL.cC = !0)
	}

	function aaS(h2) {
		return h2 && 128 < h2 ? Math.floor(h2) : 128
	}

	function aaT(aaV) {
		var dt, du, aaX, kp, kt;
		if (!(0 < bD.a9b)) return kp = aaS(document.documentElement.clientWidth), kt = aaS(window.visualViewport && 2 !== b2.id ? window.visualViewport.height : document.documentElement.clientHeight), dt = kp, du = kt, aaX = 0 !== b2.id || dt < du ?
			700 : 1200, aaX = Math.min(aaX / ((dt + du) / 2), 1), aaX = 0 === b5.buffer.data[1].value ? 2 * aaX / 3 : Math.min(aaX + (b5.buffer.data[1].value - 1) * (1 - aaX) / 2, 1), bD.cp = (window.devicePixelRatio || 1) * aaX, __fx
			.hoveringTooltip.canvasPixelScale = bD.cp, aaV && !aaO ? (aaO = !0, n.removeChild(document.body, aSy)) : aaO && (aaO = !1, document.body.appendChild(aSy)), dt = Math.floor(.5 + kp * bD.cp), du = Math.floor(.5 + kt * bD.cp), dt !== bD
			.dt || du !== bD.du ? (bD.dt = dt, bD.du = du, bD.min = mm(dt, du), bD.max = ml(dt, du), bD.bE = hA.iV(dt + du, 2), bD.aTi = dt / du, aSy.width = dt, aSy.height = du, aSy.style.width = kp + "px", aSy.style.height = kt + "px", aaQ = bL
				.c8 + 1e3, 1) : void 0
	}
	this.dt = 0, this.du = 0, this.min = 0, this.max = 0, this.bE = 0, this.aTi = 1, this.cp = 1, this.a9b = 0, this.gw = function() {
		this.dt = aaS(document.documentElement.clientWidth) + 2, this.du = aaS(document.documentElement.clientHeight) + 2
	}, this.az = function() {
		aN = 1, aSy = document.getElementById("canvasA"), 2 === b2.id && (aSy.style.webkitUserSelect = "none"), (cS = aSy.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aaT(0)
	}, this.bs = function() {
		50 <= ++aN && resize(0), -1 === aaQ || bL.c8 < aaQ || (aaQ = -1, 2e3 * ++aaR >= bL.c8 + 8e3 ? console.log("error 3748") : b2.b3.setState(15))
	}, this.aQ0 = function(os) {
		bJ = !0, resize(os)
	}, this.aTI = function() {
		aaP + 1e3 > bL.c8 || (aaP = bL.c8, resize(0))
	}
}

function aZy() {
	var mt = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aaZ = [bO.aUV, bO.aUV, bO.aOF, bO.aUe, bO.aUf, bO.aUa, bO.aUh, bO.aOF, bO.aUt, bO.hh, bO.aUr, bO.nW],
		aaa = [
			[1],
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2]
		],
		aab = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aaf(zy, hp, aag) {
		for (var fv = zy.length - 1; 0 <= fv; fv--) {
			var vu = zy[fv];
			0 === vu.id && vu.hp === hp && (vu.vs = "[Redacted Message]", aag) && (vu.a1o = 1)
		}
	}
	this.a23 = function(a1R) {
		var aac, aOr;
		return a1R.id < 5 && (aac = "@" + oh.oi.eh(a1R.hp, 5)), 0 === a1R.id ? aac + ": " + a1R.vs : 1 === a1R.id ? (aOr = "@" + oh.oi.eh(a1R.target, 5), 0 === a1R.a06 ? 32768 <= a1R.value ? aac + " voted with " + (a1R.value - 32768 + 1) +
				" gold against " + aOr + " to weaken the latter's admin position. 📉" : aac + " voted with " + (a1R.value + 1) + " gold for " + aOr + " to strengthen the latter's admin position. 💪" : 1 === a1R.a06 ? aac + " sent " + Math.floor(
					a1R.value / 100) + " 🧈 gold to " + aOr + "." : aac + " voted with " + (a1R.value / 10).toFixed(1) + " points for " + aOr + " to acknowledge the latter as clan leader. ✅") : 2 === a1R.id ? 0 === a1R.a06 ? aac +
			" was 🔇 muted for 1 Hour." : 1 === a1R.a06 ? "The username of " + aac + " was ✂️ redacted. Duration: 1 Day" : aac + " 👢 was kicked." : 3 === a1R.id ? aac + oq.n4(a1R.a06, oq.mz[a1R.a06][a1R.value]) + "@" + oh.oi.eh(a1R.target, 5) +
			oq.n6(a1R.a06, oq.mz[a1R.a06][a1R.value]) : 4 === a1R.id ? aac + oq.n4(5, oq.mz[5][a1R.a06]) + "@" + oh.oi.eh(a1R.target, 5) + oq.n6(5, oq.mz[5][a1R.a06]) : 5 === a1R.id ? aab[a1R.a06] : 6 === a1R.id ? "You are about to mention " +
			a1R.value + " player" + (1 === a1R.value ? "" : "s") + ". This action will cost " + (Math.max(10 * a1R.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === a1R.id ? a1R.vs : void 0
	}, this.a22 = function(a1R, a6k) {
		return {
			a1R: a1R,
			vs: a6k,
			a1U: 0,
			fontSize: 1,
			a1S: 0,
			a1p: a1R.id ? bO.aUd : bO.bX
		}
	}, this.aZv = function(player, zx) {
		return (2 === zx ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.a1e = function(a1b) {
		return aaZ[a1b]
	}, this.a1a = function(a1b, bn) {
		return a1b < 3 || 7 === a1b ? aaa[a1b][0] : 4 === a1b ? aaa[a1b][bn < 1 ? 0 : bn < 10 ? 1 : 2] : aaa[a1b][bn < 10 ? 0 : 1]
	}, this.a1c = function(bn) {
		return 0 === bn
	}, this.a1r = function(zx, hp) {
		for (var a8G = uN.zf.a8G, zf = a8G[zx], cs = zf.length, a1 = 0; a1 < cs; a1++)
			if (hp === zf[a1].hp) return zf[a1];
		for (var fv = 0; fv < a8G.length; fv++)
			if (zx !== fv)
				for (cs = (zf = a8G[fv]).length, a1 = 0; a1 < cs; a1++)
					if (hp === zf[a1].hp) return zf[a1];
		return null
	}, this.a1f = function(vu) {
		return !!uN.a8L && vu.hp === uN.a8L.hp
	}, this.aNF = function(zf, aad, aae) {
		var x7 = [];
		loop: for (var a1 = aad; a1 < aae; a1++) {
			var iG = r.aI.hD(zf[a1].username);
			if (iG) {
				for (var fv = x7.length - 1; 0 <= fv; fv--)
					if (iG === x7[fv].name) {
						x7[fv].fe++;
						continue loop
					} x7.push({
					name: iG,
					fe: 1
				})
			}
		}
		if (x7.sort(function(bN, fv) {
				return fv.fe - bN.fe
			}), 0 === x7.length) return "";
		for (var ga = x7[0].name + ": " + x7[0].fe, a1 = 1; a1 < x7.length; a1++) ga += "   " + x7[a1].name + ": " + x7[a1].fe;
		return ga
	}, this.aJe = function(a1b, bn, a8I) {
		return 0 === mt[a1b].length ? "Rank: " + (bn + 1) : mt[a1b] + " Rank: " + (bn + 1) + (3 !== a1b && a8I < 100 ? "   " + mt[3] + " Rank: " + (a8I + 1) : "")
	}, this.a24 = function(hp) {
		for (var zX = uN.b0.zX, a1 = 0; a1 < zX.length; a1++) aaf(zX[a1].zy, hp);
		aaf(uN.message.a4K(), hp, 1), uN.eu.a24(hp)
	}
}

function aEt() {
	this.bs = function(player) {
		return il.rZ.aNH(player, function(player) {
			var cs = yt.a3K.a3L;
			if (0 === cs) return -1;
			for (var jP = Math.min(cs, yt.performance.aVy ? cs : 10), buffer = yt.a3K.buffer, gI = hA.iV(r2.random() * cs, r2.value(100)), cb = gI + jP, f1 = r2.aWi(b7.el[player], b7.eo[player]), f2 = r2.aWi(b7.em[player], b7.ep[player]),
					mc = -1, rh = f7.aa3(0, 0, dR.dS, dR.dT), a1 = gI; a1 < cb; a1++) {
				var ba = a1 % cs,
					aai = f7.aGF(f1, f2, buffer[ba]);
				aai < rh && (rh = aai, mc = ba)
			}
			return -1 !== mc ? function(oN, f1, f2) {
				var nu = f7.nv(oN),
					nw = f7.nx(oN),
					ex = f1 - nu,
					ey = f2 - nw;
				Math.abs(ex) >= Math.abs(ey) ? (ey = 0, ex = Math.sign(ex)) : (ex = 0, ey = Math.sign(ey));
				ex === ey && (ex = 1);
				for (;;) {
					if (nu += ex, nw += ey, !f7.aGH(nu, nw)) break;
					if (oN = f7.uG(nu, nw), eb.uF(f7.nq(oN))) return oN
				}
				return -1
			}(buffer[mc], f1, f2) : -1
		}(player))
	}
}

function aaE() {
	this.aXC = function(player, a6V, dn) {
		r.cz.a6X(player, dn, a6V) && (yl.aVj(player, a6V), !r.cz.fO(a6V)) && yt.a5A.aMo[a6V] && yt.a5A.aMo[a6V]--
	}, this.a4e = function(player, a6V, dn) {
		r.cz.aXq(dn, a6V) ? ym.qi(a6V, d7.dF[0]) && (vw.aA9(player, a6V, d7.dF[0], 1), r.cz.a4c(a6V, d7.dF[0]), dg.wc(player, a6V), ez.ed(a6V, d7.dF[0])) : dg.a0e(player, dn, 12)
	}
}

function aPM() {
	this.bF = new sm, this.s = new rq, this.cz = new aXg, this.aI = new gx, this.b9 = new aTY, this.gf = new a5D, this.canvas = new aak, this.color = new aW4, this.a7Z = new aDy, this.az = function() {
		this.bF.so()
	}
}

function aF6() {
	this.tB = function() {
		var ek = function() {
				for (var ja = jR.jS.ja, cs = ja.length, max = 0, a1 = 0; a1 < cs; a1++) max = Math.max(max, ja[a1]);
				return mr(Math.max(max, 1))
			}(),
			dt = (vu = q.data, (dt = aBQ).az(), dt.wy(12, kH.rVersion), dt.a9 += 43, dt.wy(2, vu.mapType), dt.wy(8, vu.mapProceduralIndex), dt.wy(8, vu.mapRealisticIndex), dt.wy(14, vu.mapSeed), dt.aY7(vu.mapName, 5), 2 === vu.mapType && dt.aY8(
				vu.canvas), dt.wy(1, vu.passableWater), dt.wy(1, vu.passableMountains), dt.wy(10, vu.playerCount), dt.wy(10, vu.humanCount), dt.wy(9, vu.selectedPlayer), dt.wy(1, vu.gameMode), dt.wy(2, vu.playerMode), dt.wy(2, vu
				.battleRoyaleMode), dt.wy(4, vu.numberTeams), dt.wy(1, vu.isZombieMode), dt.wy(1, vu.isContest), dt.wy(1, vu.isReplay), dt.aPy(vu.elo, 2, 14), dt.wy(1, vu.colorsType), dt.wy(1, vu.colorsPersonalized), dt.aPy(vu.colorsData, 10,
				18), dt.wy(1, vu.selectableColor), dt.aPy(vu.teamPlayerCount, 4, 10), dt.wy(1, vu.neutralBots), dt.wy(2, vu.botDifficultyType), dt.wy(4, vu.botDifficultyValue), dt.aPy(vu.botDifficultyTeam, 4, 4), dt.aPy(vu.botDifficultyData,
				10, 4), dt.wy(2, vu.spawningType), dt.wy(14, vu.spawningSeed), dt.aPy(vu.spawningData, 11, 12), dt.wy(1, vu.selectableSpawn), dt.wy(2, vu.playerNamesType), dt.aY5(vu.playerNamesData, 10, 5), dt.wy(1, vu.selectableName), dt.wy(
				2, vu.aIncomeType), dt.wy(8, vu.aIncomeValue), dt.aPy(vu.aIncomeData, 10, 8), dt.wy(2, vu.tIncomeType), dt.wy(8, vu.tIncomeValue), dt.aPy(vu.tIncomeData, 10, 8), dt.wy(2, vu.iIncomeType), dt.wy(8, vu.iIncomeValue), dt.aPy(vu
				.iIncomeData, 10, 8), dt.wy(2, vu.sResourcesType), dt.wy(11, vu.sResourcesValue), dt.aPy(vu.sResourcesData, 10, 11), dt.aPy(vu.nA, 10, 30), ! function(ek) {
				var dt = aBQ,
					jT = jR.jS.jT,
					dV = jR.jS.jU,
					dX = jR.jS.jV,
					dZ = jR.jS.jW,
					cs = jT.length;
				dt.wy(5, ek), dt.wy(30, cs), dt.wy(30, jR.jS.ja.length);
				for (var a1 = 0; a1 < cs; a1++) {
					var aN = jT[a1];
					dt.wy(4, aN), dt.wy(9, dV[a1]), 0 === aN ? dt.wy(22, dX[a1]) : 1 === aN ? (dt.wy(10, dX[a1]), dt.wy(10, dZ[a1])) : 2 === aN ? (dt.wy(10, dX[a1]), dt.wy(9, dZ[a1])) : 3 === aN ? (dt.wy(10, dX[a1]), dt.wy(27, dZ[a1])) :
						4 === aN ? (dt.wy(10, dX[a1]), dt.wy(16, dZ[a1])) : 5 === aN || 6 === aN ? dt.wy(10, dX[a1]) : 7 === aN ? dt.wy(1, dX[a1]) : 10 === aN && (dt.wy(20, dX[a1]), dt.wy(22, dZ[a1]))
				}
			}(ek), ! function(ek) {
				for (var dt = aBQ, jY = jR.jS.jY, ja = jR.jS.ja, cs = jY.length, a1 = 0; a1 < cs; a1++) dt.wy(1, jY[a1]), dt.wy(ek, ja[a1])
			}(ek), aBQ.a9),
			vu = hA.iV(dt - 1, 6) + 1,
			ek = (hy.hz(6 * vu) !== aBQ.dC.length && aBQ.dC.push(0), ! function() {
				var dt = aBQ;
				dt.a9 = 24, dt.wy(31, dt.dC.length), dt.a9 = 12, dt.wy(12, function() {
					for (var dC = aBQ.dC, cs = dC.length, aBY = kH.rVersion, a1 = 3; a1 < cs; a1++) aBY = aBY + dC[a1] & 4095;
					return aBY
				}())
			}(), hx.az(aBQ.dC), oh.oi.a5h(oh.oi.a5i(vu)));
		return hx.ln(), aBQ.az(), ek
	}
}

function vD() {
	var b, c, d, y;

	function h() {
		l(), 2 !== q.data.iIncomeType && (q.data.iIncomeData = null), n.o()[19] = null, n.p()
	}

	function l() {
		2 === q.data.iIncomeType && r.s.t(d.u(), q.data.iIncomeData, 255)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.aL = function() {
		b.aL()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.aM = function(aN) {
		2 === aN && b.aO[0].aP()
	}, b = new f(L(111), [new g("⬅️ " + L(1), h)]), c = new i(b.j, (function(y) {
		var a3 = new a4;
		a3.a5(L(2)), a3.a7(new a8({
			a6: [L(109), L(3), L(6)],
			value: q.data.iIncomeType
		}, function(a9) {
			l(), 2 !== a9 || q.data.iIncomeData || (q.data.iIncomeData = new Uint8Array(q.aA), q.data.iIncomeData.fill(32)), q.data.iIncomeType = a9, n.aB(27)
		})), y.push(a3)
	}(y = []), function(y) {
		var a3;
		1 === q.data.iIncomeType && ((a3 = new a4).a5("Value"), a3.aK(new hZ({
			a9: -1,
			value: q.data.iIncomeValue
		}, 1, 0, function(cb) {
			var value = hA.hB(Math.floor(cb.target.value), 0, 255);
			cb.target.value = q.data.iIncomeValue = value
		})), y.push(a3))
	}(y), function(y) {
		var a3;
		2 === q.data.iIncomeType && ((a3 = new a4).a5("Data"), (d = new aG(0, 1, 0, 1)).aH(r.aI.aJ(q.data.iIncomeData, 4)), a3.aK(d), y.push(a3))
	}(y), y))
}

function aPa() {
	var aas = [
			[100, 100, 100],
			[144, 0, 0],
			[0, 128, 0],
			[0, 0, 144],
			[128, 128, 0],
			[128, 0, 128],
			[0, 128, 128],
			[196, 196, 196],
			[0, 0, 0]
		],
		aat = [
			[4, 4, 4, 20],
			[4, 0, 0, 27],
			[0, 4, 0, 31],
			[0, 0, 4, 27],
			[4, 4, 0, 31],
			[4, 0, 4, 31],
			[0, 4, 4, 31],
			[4, 4, 4, 14],
			[4, 4, 4, 13]
		];
	this.aau = null, this.aav = null, this.aaw = null, this.aax = null, this.aay = null, this.aaz = null, this.ab0 = null, this.ab1 = null, this.ab2 = null, this.ab3 = null;

	function ab8(gI, bz) {
		for (var aau = eb.aau, aav = eb.aav, aaw = eb.aaw, a1 = gI; a1 < bz; a1++) aau[a1] = hA.iV(64 * r2.random(), r2.value(100)) << 2, aav[a1] = hA.iV(64 * r2.random(), r2.value(100)) << 2, aaw[a1] = hA.iV(64 * r2.random(), r2.value(100)) << 2
	}

	function ab7(gI, bz) {
		for (var colorsData = q.data.colorsData, aau = eb.aau, aav = eb.aav, aaw = eb.aaw, a1 = gI; a1 < bz; a1++) {
			var h2 = colorsData[a1];
			aau[a1] = 4 * (h2 >> 12), aav[a1] = 4 * (h2 >> 6 & 63), aaw[a1] = 4 * (63 & h2)
		}
	}

	function abJ(gF, abL) {
		xF[gF] = 0, xF[gF + 1] = 0, xF[gF + 2] = abL, xF[gF + 3] = 0, abM(gF)
	}

	function abM(gF) {
		var c4;
		jE.aWr || (c4 = eb.q6(gF), gF = eb.pH(gF), jE.aWr = c4 >= aEB.q4[0] && c4 <= aEB.q4[2] && gF >= aEB.q4[1] && gF <= aEB.q4[3])
	}
	this.aDQ = new Int32Array(4), this.aS8 = new Int32Array(8), this.gw = function() {
		var aDQ = this.aDQ,
			aDQ = (aDQ[0] = -4 * dR.dS, aDQ[1] = 4, aDQ[2] = -aDQ[0], aDQ[3] = -aDQ[1], this.aS8);
		aDQ[0] = -4 * dR.dS - 4, aDQ[1] = -4 * dR.dS, aDQ[2] = -4 * dR.dS + 4, aDQ[3] = -4, aDQ[4] = 4, aDQ[5] = 4 * dR.dS - 4, aDQ[6] = 4 * dR.dS, aDQ[7] = 4 * dR.dS + 4
	}, this.az = function() {
		if (this.aau ? (this.aau.fill(0), this.aav.fill(0), this.aaw.fill(0), this.aax.fill(0), this.aay.fill(0), this.aaz.fill(0), this.ab0.fill(0), this.ab1.fill(0), this.ab2.fill(0), this.ab3.fill(0), this.ec.fill(0)) : (this.aau =
				new Uint8Array(q.aA), this.aav = new Uint8Array(q.aA), this.aaw = new Uint8Array(q.aA), this.aax = new Uint8Array(q.aA), this.aay = new Uint8Array(q.aA), this.aaz = new Uint8Array(q.aA), this.ab0 = new Uint8Array(q.aA), this.ab1 =
				new Uint8Array(q.aA), this.ab2 = new Uint8Array(q.aA), this.ab3 = new Uint8Array(q.aA), this.ec = new Uint8Array(q.aA)), q.bf)
			for (var bh = aC.bh, aau = eb.aau, aav = eb.aav, aaw = eb.aaw, a1 = q.aA - 1; 0 <= a1; a1--) {
				var aN = bh[a1],
					jP = hA.iV((aat[aN][3] + 1) * r2.random(), r2.value(100));
				aau[a1] = aas[aN][0] + jP * aat[aN][0], aav[a1] = aas[aN][1] + jP * aat[aN][1], aaw[a1] = aas[aN][2] + jP * aat[aN][2]
			} else 0 === q.data.colorsType ? q.data.selectableColor ? (ab7(0, q.bq), ab8(q.bq, q.aA)) : ab8(0, q.aA) : ab7(0, q.aA);
		! function() {
			var a1, gM, aau = eb.aau,
				aav = eb.aav,
				aaw = eb.aaw;
			for (a1 = q.aA - 1; 0 <= a1; a1--) gM = hA.iV(aau[a1] + aav[a1] + aaw[a1], 3), aau[a1] += mj(gM - aau[a1], 2), aav[a1] += mj(gM - aav[a1], 2), aaw[a1] += mj(gM - aaw[a1], 2), aau[a1] -= aau[a1] % 4, aav[a1] -= aav[a1] % 4, aaw[a1] -=
				aaw[a1] % 4
		}(),
		function() {
			for (var cs = q.aA, aau = eb.aau, aav = eb.aav, aaw = eb.aaw, aax = eb.aax, a1 = 0; a1 < cs; a1++) aau[a1] += a1 >> 7, aav[a1] += a1 >> 5 & 3, aaw[a1] += a1 >> 3 & 3, aax[a1] = 7 & a1
		}(), this.abB(),
			function() {
				for (var cs = q.aA, aay = eb.aay, aaz = eb.aaz, ab0 = eb.ab0, aau = eb.aau, aav = eb.aav, aaw = eb.aaw, a1 = 0; a1 < cs; a1++) {
					var n1 = aau[a1],
						nb = aav[a1],
						fv = aaw[a1];
					60 <= n1 + nb + fv ? (aay[a1] = Math.max(n1 - 40, 3 & n1), aaz[a1] = Math.max(nb - 40, 3 & nb), ab0[a1] = Math.max(fv - 40, 3 & fv)) : (aay[a1] = n1 + 40, aaz[a1] = nb + 40, ab0[a1] = fv + 40)
				}
			}(),
			function() {
				for (var cs = q.aA, ab1 = eb.ab1, ab2 = eb.ab2, ab3 = eb.ab3, aau = eb.aau, aav = eb.aav, aaw = eb.aaw, a1 = 0; a1 < cs; a1++) {
					var n1 = aau[a1],
						nb = aav[a1],
						fv = aaw[a1];
					688 <= n1 + nb + fv ? (ab1[a1] = n1 - 88, ab2[a1] = nb - 88, ab3[a1] = fv - 88) : (ab1[a1] = Math.min(n1 + 88, 252 + (3 & n1)), ab2[a1] = Math.min(nb + 88, 252 + (3 & nb)), ab3[a1] = Math.min(fv + 88, 252 + (3 & fv)))
				}
			}()
	}, this.xi = function(player) {
		var dC = d7.dH;
		return dC[0] = this.aau[player], dC[1] = this.aav[player], dC[2] = this.aaw[player], dC
	}, this.abB = function() {
		for (var a1 = q.aA - 1; 0 <= a1; a1--) this.ec[a1] = this.aau[a1] + this.aav[a1] + this.aaw[a1] < 280 ? 0 : 1
	}, this.q6 = function(gF) {
		return hA.iV(gF, 4) % dR.dS
	}, this.pH = function(gF) {
		return hA.iV(gF, 4 * dR.dS)
	}, this.aAZ = function(c4, bp) {
		return Math.floor(4 * (bp * dR.dS + c4))
	}, this.abE = function(gF) {
		var aDQ = this.aDQ;
		return this.aLq(gF + aDQ[0]) || this.aLq(gF + aDQ[1]) || this.aLq(gF + aDQ[2]) || this.aLq(gF + aDQ[3])
	}, this.aGI = function(gF) {
		var aDQ = this.aDQ;
		return this.wE(gF + aDQ[0]) || this.wE(gF + aDQ[1]) || this.wE(gF + aDQ[2]) || this.wE(gF + aDQ[3])
	}, this.oK = function(gF, player) {
		var aDQ = this.aDQ;
		return this.oP(gF + aDQ[0], player) || this.oP(gF + aDQ[1], player) || this.oP(gF + aDQ[2], player) || this.oP(gF + aDQ[3], player)
	}, this.aAS = function(a1, abF, abG, abH) {
		this.aau[a1] = abF >> 16, this.aav[a1] = abF >> 8 & 255, this.aaw[a1] = 255 & abF, this.aay[a1] = abG >> 16, this.aaz[a1] = abG >> 8 & 255, this.ab0[a1] = 255 & abG, this.ab1[a1] = abH >> 16, this.ab2[a1] = abH >> 8 & 255, this.ab3[a1] =
			255 & abH
	}, this.aAP = function(a1) {
		return [(this.aau[a1] << 16) + (this.aav[a1] << 8) + this.aaw[a1], (this.aay[a1] << 16) + (this.aaz[a1] << 8) + this.ab0[a1], (this.ab1[a1] << 16) + (this.ab2[a1] << 8) + this.ab3[a1]]
	}, this.a4a = function(gF) {
		return 208 <= xF[gF + 3]
	}, this.gN = function(player, gF) {
		return this.a4a(gF) && this.a4b(player, gF)
	}, this.a4b = function(player, gF) {
		return player === this.wB(gF)
	}, this.aLr = function(gF) {
		return 208 <= xF[gF + 3] && xF[gF + 3] < 224
	}, this.aAc = function(gF) {
		return 224 <= xF[gF + 3] && xF[gF + 3] < 248
	}, this.aAa = function(gF) {
		return 248 <= xF[gF + 3]
	}, this.aWb = function(gF) {
		for (var aDQ = this.aDQ, a1 = 3; 0 <= a1; a1--)
			if (this.uF(gF + aDQ[a1])) return !0;
		return !1
	}, this.w9 = function(gF) {
		return this.a4a(gF) || this.wA(gF)
	}, this.uF = function(gF) {
		return 0 === xF[gF + 3] && 2 === xF[gF + 2]
	}, this.wA = function(gF) {
		return 0 === xF[gF + 3] && 1 === xF[gF + 2]
	}, this.aVH = function(gF) {
		return 0 === xF[gF + 3] && 3 === xF[gF + 2]
	}, this.wE = function(gF) {
		return 0 === xF[gF + 3] && 5 === xF[gF + 2]
	}, this.aLq = function(gF) {
		return 0 === xF[gF + 3] && 3 <= xF[gF + 2]
	}, this.np = function(gF) {
		return (xF[gF] >> 1 << 8) + xF[gF + 1]
	}, this.abI = function(gF) {
		return 1 & xF[gF]
	}, this.oP = function(gF, player) {
		return this.wA(gF) || this.a4a(gF) && player !== this.wB(gF)
	}, this.wB = function(gF) {
		return ((3 & xF[gF]) << 7) + ((3 & xF[gF + 1]) << 5) + ((3 & xF[gF + 2]) << 3) + (7 & xF[gF + 3])
	}, this.a0w = function(gF) {
		abJ(gF, 1)
	}, this.abK = function(gF) {
		abJ(gF, 2)
	}, this.aAe = function(gF, player) {
		xF[gF] = this.aau[player], xF[gF + 1] = this.aav[player], xF[gF + 2] = this.aaw[player], xF[gF + 3] = 208 + this.aax[player], abM(gF)
	}, this.aAd = function(gF, player) {
		xF[gF] = this.aay[player], xF[gF + 1] = this.aaz[player], xF[gF + 2] = this.ab0[player], xF[gF + 3] = 224 + this.aax[player], abM(gF)
	}, this.aAb = function(gF, player) {
		xF[gF] = this.ab1[player], xF[gF + 1] = this.ab2[player], xF[gF + 2] = this.ab3[player], xF[gF + 3] = 248 + this.aax[player], abM(gF)
	}
}

function a0y() {
	function abN() {
		if (2 === q.cf) return 1;
		gv.pg(), q.cf = 2, q.yW = q.wp
	}

	function abO() {
		pc.a13.zR(), z0.show(1 === q.wN, !1, 2 === q.wN), pc.result.zR(), pc.a0p.bs(), pc.a11.bs(), pc.a11.aZo(), g5.wm(!0), g5.g6(247), g5.g6(956), g5.g6(957), mX.bI(!0), jK.bI(!0), gv.bI(), j1.aJK(), q.cL && bL.aXM.jg(), bL.cC = !0, jE.mY(), b2.b3
			.setState(0)
	}
	this.pe = function() {
		abN() || (q.yd = 2, abO())
	}, this.pf = function() {
		abN() || (q.yd = 1, abO())
	}
}

function aPL() {
	this.abP = "https://territorial.io/changelog", this.aDB = "https://territorial.io/terms", this.aDC = "https://territorial.io/privacy", this.abQ = "https://territorial.io/tutorial", this.abR = "https://territorial.io/players", this.abS =
		"https://territorial.io/clans", this.abT = "https://territorial.io/clan-results", this.aDA = "https://patreon.com/c/territorial", this.aD8 = "https://play.google.com/store/apps/details?id=territorial.io", this.aD9 =
		"https://apps.apple.com/app/id1581110913", this.aEE = "https://discord.gg/pthqvpTXmh", this.aEF = "https://www.instagram.com/davidtschacher/", this.aQT =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aPR() {
	var a30, abU, abV, a2z, abW, abX, abY, abZ, aba, abb, abc, qZ, abd, abe = !1,
		abf = !1;

	function abg(qm) {
		qZ = bL.c8, abV = a2z = abU = 0, abW = (abd = 33) / qm, a30 = 1 / (qm / abd / 4), abX = (bD.dt / 2 + fG) / fH, abY = (bD.du / 2 + fI) / fH, abZ = fH
	}

	function abh(a1) {
		var cU; - 1 !== a1 && (a1 = f7.rO(il.b0.rP[a1]), cU = f7.nv(a1) - 15, a1 = f7.nx(a1) - 15, cM.vp(cU, a1, 29 + cU, 29 + a1))
	}

	function abm(n5) {
		Math.abs(Math.log(abc / abZ)) < .125 && (abc = n5 * abZ)
	}

	function abl(cU, cV, cW, cX) {
		aba = (cU + cW + 1) / 2, abb = (cV + cX + 1) / 2;
		cW = bD.dt / (cW - cU + 1), cU = bD.du / (cX - cV + 1);
		abc = .9 * (cW < cU ? cW : cU)
	}
	this.aWY = function() {
		return abe
	}, this.zB = function() {
		abg(1), this.vp(0, 0, dR.dS - 1, dR.dT - 1), q.cJ || q.cL || this.cN(q.bS, 3e3, !0, .3)
	}, this.vq = function(player, rF) {
		abh(il.nr.aB1(player, rF))
	}, this.cN = function(player, qm, abi, zoom) {
		q.cP || abe && !abi && abf || (0 === b7.br[player] ? abh(il.nr.aB2(player)) : (cl.aQA = !1, abf = abi, abg(qm), function(player) {
			aba = (b7.el[player] + b7.eo[player] + 1) / 2, abb = (b7.em[player] + b7.ep[player] + 1) / 2
		}(player), function(zoom, player) {
			var ex = b7.eo[player] - b7.el[player] + 1,
				player = b7.ep[player] - b7.em[player] + 1,
				bN = bD.dt / ex,
				fv = bD.du / player,
				bN = (abc = bN < fv ? bN : fv, 0 !== zoom ? zoom : ex < 20 && player < 20 ? .5 : .9);
			abc *= bN, abm(7 / 8)
		}(zoom, player), abe = !0, aH3.aH2()))
	}, this.aZh = function(qm) {
		q.cL || q.cP || (cl.aQA = !1, abf = !1, abg(qm), abl(0, 0, dR.dS - 1, dR.dT - 1), abm(7 / 8), abe = !0, aH3.aH2())
	}, this.vp = function(cU, cV, cW, cX) {
		abe = !1, abl(cU, cV, cW, cX), fH = abc, cl.aST(aba, bD.dt / 2), cl.aSU(abb, bD.du / 2), aEB.q5(), bL.cC = !0
	}, this.bz = function() {
		return !(abe && abf || (abe = !1))
	}, this.bs = function() {
		var abo, abp, gM, abt;
		abe && (abU < .5 ? a2z < abW && (a2z += abW * a30, abV = abU) : 1 - abV < abU && (a2z = (a2z -= abW * a30) < abW * a30 ? abW * a30 : a2z), qZ = qZ >= bL.c8 ? bL.c8 - 1 : qZ, gM = bL.c8 - qZ, abU = 1e3 < gM || 1 < (abU += a2z * gM / abd) ?
			1 : abU, qZ = bL.c8, gM = fH, abo = fG, abp = fI, gM = (fH = abZ * Math.pow(abc / abZ, abU)) / gM, abt = 1 - (abZ * Math.pow(abc / abZ, 1 - abU) - abZ) / (abc - abZ), cl.aST(abX + abt * (aba - abX), bD.dt / 2), cl.aSU(abY + abt *
				(abb - abY), bD.du / 2), ez.zoom(gM, (abo * gM - fG) / (1 - gM), (abp * gM - fI) / (1 - gM)), aEB.q5(), 1 <= abU && (abe = !1, jE.aWr = !0), bL.cC = !0)
	}
}

function abu() {
	var abv = new Uint8Array(78);
	this.az = function() {
		var a1;
		for (abv[50] = 37, a1 = 0; a1 < 10; a1++) abv[a1 + 3] = a1 + 1;
		for (a1 = 0; a1 < 26; a1++) abv[a1 + 20] = a1 + 11, abv[a1 + 52] = a1 + 38
	}, this.aHb = function(ga) {
		return ga.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.zO = function(ga, size) {
		if ((ga = this.aHb(ga)).length > size) return ga.substring(0, size);
		for (; ga.length < size;) ga = "-" + ga;
		return ga
	}, this.aHa = function(ga) {
		for (var aNM = abv, cs = ga.length, dC = new Uint8Array(cs), a1 = 0; a1 < cs; a1++) dC[a1] = aNM[ga.charCodeAt(a1) - 45];
		return dC
	}, this.aHZ = function(aCT) {
		hy.wx(6 * aCT.length), this.abw(aCT), hx.az(hy.mH)
	}, this.abw = function(aCT) {
		for (var cs = aCT.length, dt = hy, a1 = 0; a1 < cs; a1++) dt.wy(6, aCT[a1])
	}, this.x8 = function(ga) {
		this.abw(this.aHa(ga))
	}, this.x4 = function(ga, size) {
		this.abw(this.aHa(this.zO(ga, size)))
	}, this.a1q = function(ga, size) {
		for (var dC = this.aHa(this.zO(ga, size)), h2 = 0, gH = 1, a1 = dC.length - 1; 0 <= a1; a1--) h2 += gH * dC[a1], gH *= 64;
		return h2
	}
}

function ut() {
	this.buffer = {}, this.nY = new Array(8), this.v6 = null, this.v3 = null, this.a9Z = 0, this.b1 = [0, 0], this.uh = function() {
		n.aB(5, 5)
	}, this.jt = function(aBV) {
		aBV && (uW.aRU = aBV), n.ta(), uW.az()
	}, __fx.customLobby.setJoinFunction(() => this.jt(1)), this.sj = function() {
		n.aB(0 === jz.si() ? 5 : 0)
	}, this.a3v = function() {
		if (1 === b5.buffer.data[130].value) n.aB(8, n.gp().ot, new jx(24, {
			x6: b5.buffer.data[125].value,
			ii: b5.buffer.data[128].value,
			ik: b5.buffer.data[129].value
		}));
		else {
			for (var dC = (dC = b5.buffer.data[126].value.split(",")).slice(0, 10), a1 = 0; a1 < dC.length; a1++) dC[a1] = dC[a1].trim().slice(0, 7).toUpperCase();
			1 === dC.length && 0 === dC[0].length && (dC = []), n.aB(8, n.gp().ot, new jx(23, {
				x6: b5.buffer.data[125].value,
				x7: dC
			}))
		}
	}, this.jy = function(ot, target) {
		n.aB(4, ot, new uT("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + hW.b0.hX(
				"/privacy"), !1, [new g("⬅️ " + L(1), function() {
				n.aB(ot)
			}), new g("✅ Accept", function() {
				b5.hi.hj(140, 1), 0 === target ? n.aB(2, ot) : n.aB(8, ot, new jx(target))
			})]))
	}, this.aXI = function() {
		for (var a1 = 0; a1 < 8; a1++) this.nY[a1] = i3.iA.iB(hx.i2(5));
		this.nY[1] = "[" + this.nY[1] + "]", 5 === n.go && (n.gp().gq.hj(this.nY), n.gp().resize())
	}, this.hs = function(h2, kU, kf) {
		h2 = r.cz.aOq(h2, 1, 1e6);
		kU = L(538, [kU]);
		return (kU += "<br>") + L(539, [__fx.utils.escapeHtml("" + kf)]) + "<br>" + L(540, [h2 + "–" + (h2 + 2)]) + "<br>" + L(541, [h2])
	}
}

function aPc() {
	this.pR = function() {
		var abz;
		return !(ct.cu < 3 || b7.br[aR[0]] >= q.pZ >> 1) && (q.bf ? 9 !== q.eU && (abz = yl.aZ5(), !(2 * yl.aZ6(d5.pb()) >= abz)) : function() {
			if (8 === q.eU) return !1;
			var abz = yl.aZ5();
			if (2 * b7.di[aR[0]] >= abz) return !1;
			return !0
		}())
	}
}

function aPQ() {
	var ac1, ac2, ac3;

	function ac5(wK) {
		for (var a1 = ac1 - 1; 0 <= a1; a1--) 0 === ac3[ac2[a1]] && b7.br[ac2[a1]] >= wK && aNW(ac2[a1])
	}

	function ac4(player) {
		var bx;
		64 === ac3[player] ? ac3[player] = 6 : (bx = b7.br[player], ac3[player] = bx < 1e3 ? 3 : bx < 1e4 ? 2 : bx < 6e4 ? 1 : 0)
	}
	this.az = function() {
		ac1 = 0, ac2 = new Uint16Array(q.aA), ac3 = new Uint8Array(q.aA)
	}, this.bs = function() {
		for (var a1 = ac1 - 1; 0 <= a1; a1--) 64 === ac3[ac2[a1]] ? ac4(ac2[a1]) : 0 == ac3[ac2[a1]]-- && (ac4(ac2[a1]), aNW(ac2[a1]));
		16e4 <= b7.br[aR[0]] && (ac5(16e4), 3e5 <= b7.br[aR[0]]) && ac5(3e5), r.cz.a3E(q.bS) && (dg.dh[7] = Math.max(b7.br[q.bS], dg.dh[7]))
	}, this.a0W = function(player) {
		for (var bN, a1 = ac1 - 1; 0 <= a1; a1--)
			if (player === ac2[a1]) {
				for (ac1--, bN = a1; bN < ac1; bN++) ac2[bN] = ac2[bN + 1];
				return
			}
	}, this.a4h = function(player, ac7) {
		for (var a1 = ac1 - 1; 0 <= a1; a1--)
			if (player === ac2[a1]) return;
		ac2[ac1++] = player, ac3[player] = ac7 ? 2 : 64
	}
}

function aIO() {
	this.aLd = function(player) {
		r.cz.a0l(player) && g5.pa(80, L(542), 637, 0, bO.aUi, bO.lC, -1, !1)
	}, this.aLe = function(player) {
		r.cz.a0l(player) && g5.pa(80, L(543), 637, 0, bO.aUi, bO.lC, -1, !1)
	}
}

function aPS() {
	var a8t, jm, aaF, xX, ac8, ac9, acA, acB, acC, acD;

	function acF() {
		var dl = q.dl;
		for (acC = dl; acC < q.aA; acC++) acE();
		for (acC = q.cJ ? q.bq : 0; acC < dl; acC++) {
			if (!acI()) {
				for (var fv = q.yX = acC; fv < dl; fv++) acC = fv, acE();
				return
			}
			acJ(ac9 + a8t * ac8 + hA.iV(ac8, 2), acA + jm * ac8 + hA.iV(ac8, 2))
		}
	}

	function aca(player) {
		for (var el = b7.el, em = b7.em, eo = b7.eo, ep = b7.ep, bp = em[player]; bp <= ep[player]; bp++)
			for (var c4 = el[player]; c4 <= eo[player]; c4++) {
				var gF = eb.aAZ(c4, bp);
				eb.a4a(gF) && (eb.aAc(gF) ? eb.aAd(gF, player) : eb.aAe(gF, player))
			}
	}

	function acZ(dC, ii, ik) {
		var bx = dC[ii];
		dC[ii] = dC[ik], dC[ik] = bx
	}

	function acI() {
		return function() {
			var a1;
			for (a1 = 0; a1 < 8; a1++)
				if (a8t = hA.iV(aaF * r2.random(), r2.value(100)), jm = hA.iV(xX * r2.random(), r2.value(100)), acf()) return 1;
			return
		}() || function() {
			var ex, ey, bN, fc, fv, fb;
			for (ex = hA.iV(aaF * r2.random(), r2.value(100)), ey = hA.iV(xX * r2.random(), r2.value(100)), bN = 40; 1 <= bN; bN--)
				for (fc = xX - bN; 0 <= fc; fc -= 40)
					for (jm = (fc + ey) % xX, fv = 40; 1 <= fv; fv--)
						for (fb = aaF - fv; 0 <= fb; fb -= 40)
							if (a8t = (fb + ex) % aaF, acf()) return 1;
			return
		}()
	}

	function acf() {
		for (var cy, ach, gap = hA.iV(ac8 - acB, 2), o4 = acA + jm * ac8 + gap, o3 = ac9 + a8t * ac8 + gap, acg = o4 + acB - 1; o4 <= acg; acg--)
			for (ach = o3 + acB - 1; o3 <= ach; ach--)
				if (cy = eb.aAZ(ach, acg), !eb.w9(cy) || eb.aAc(cy)) return;
		return 1
	}

	function acJ(fb, fc) {
		acE(), aci(fb - 2, fc - 2)
	}

	function acE() {
		b7.c0[acC] = 0, b7.br[acC] = b7.a0P[acC] = 0, b7.a0S[acC] = [], b7.a0Z[acC] = [], b7.a0a[acC] = [], b7.a0b[acC] = [], b7.el[acC] = b7.em[acC] = b7.eo[acC] = b7.ep[acC] = 0
	}

	function aci(fb, fc) {
		var cy, a1, acj, ack;
		for (b7.c0[acC] = 1, b7.el[acC] = fb + 10, b7.em[acC] = fc + 10, b7.ep[acC] = b7.eo[acC] = 0, acj = fb; acj < fb + 4; acj++)
			for (ack = fc; ack < fc + 4; ack++)(fb < acj && acj < fb + 3 || fc < ack && ack < fc + 3) && (cy = eb.aAZ(acj, ack), eb.w9(cy)) && (b7.el[acC] = Math.min(acj, b7.el[acC]), b7.eo[acC] = Math.max(acj, b7.eo[acC]), b7.em[acC] = Math.min(ack,
				b7.em[acC]), b7.ep[acC] = Math.max(ack, b7.ep[acC]), acD[b7.br[acC]] = cy, b7.br[acC]++, eb.aAe(cy, acC));
		for (b7.a0P[acC] = b7.br[acC], a1 = b7.br[acC] - 1; 0 <= a1; a1--) eb.oK(acD[a1], acC) ? (eb.aAd(acD[a1], acC), b7.a0Z[acC].push(acD[a1])) : eb.aWb(acD[a1]) ? (eb.aAd(acD[a1], acC), b7.a0a[acC].push(acD[a1])) : eb.abE(acD[a1]) && (eb.aAd(acD[
			a1], acC), b7.a0b[acC].push(acD[a1]))
	}
	this.az = function() {
		if (acD = new Array(12), acB = 6, ac8 = 10, aaF = hA.iV(dR.dS, ac8), xX = hA.iV(dR.dT, ac8), ac9 = hA.iV(dR.dS - ac8 * aaF, 2), acA = hA.iV(dR.dT - ac8 * xX, 2), q.cJ)
			for (var a1 = 0; a1 < q.bq; a1++) acC = a1, acE(), b7.c0[acC] = 1;
		(0 === q.data.spawningType ? acF : 1 === q.data.spawningType ? (acF(), function() {
			var a3t = q.ya;
			q.yb || a3t++;
			if (!(a3t < 3)) {
				for (var data = q.data, gI = (q.cJ ? q.bq : 0) + data.teamPlayerCount[0], bz = q.yX, acK = new Uint32Array(a3t), acL = new Uint32Array(a3t), acM = new Uint16Array(a3t), acN = new Uint16Array(a3t), wD = aC.wD, el = b7.el,
						em = b7.em, eo = b7.eo, ep = b7.ep, dO = d7.dO, dP = d7.dP, a1 = gI; a1 < bz; a1++) dO[a1] = el[a1] + eo[a1] >> 1, dP[a1] = em[a1] + ep[a1] >> 1;
				for (a1 = gI; a1 < bz; a1++) {
					var id = wD[a1];
					acK[id] += dO[a1], acL[id] += dP[a1]
				}
				var d2 = aC.d2;
				for (a1 = 1; a1 < a3t; a1++) {
					var fe = Math.max(data.teamPlayerCount[d2[a1]], 1);
					acM[a1] = hA.iV(acK[a1], fe), acN[a1] = hA.iV(acL[a1], fe)
				}
				var a3S = aC.a3S,
					a3T = aC.a3T,
					a3U = aC.a3U,
					d9 = d7.d9;
				for (a1 = 0; a1 < 512; a1++) d9[a1] = a1;
				for (var n1 = 0; n1 < 2 + (4 <= a3t); n1++)
					for (a1 = gI; a1 < bz; a1++) {
						for (var wo = a1, a7G = d9[wo], acO = 1, rh = hA.a9D(dO[a7G] - acM[1], dP[a7G] - acN[1]), bN = 2; bN < a3t; bN++) {
							var xv = hA.a9D(dO[a7G] - acM[bN], dP[a7G] - acN[bN]);
							xv < rh && (rh = xv, acO = bN)
						}
						var acP = wD[wo];
						if (acO !== acP) {
							if (2 === n1 && 4 <= a3t) {
								var acQ = Math.max((acO + 1) % a3t, 1),
									acR = hA.a9D(dO[a7G] - acM[acQ], dP[a7G] - acN[acQ]);
								for (bN = 1; bN < a3t; bN++) xv = hA.a9D(dO[a7G] - acM[bN], dP[a7G] - acN[bN]), rh < xv && xv < acR && (acR = xv, acQ = bN);
								acQ !== acP && hA.a9D(acM[acP] - acM[acQ], acN[acP] - acN[acQ]) < hA.a9D(acM[acP] - acM[acO], acN[acP] - acN[acO]) && (acO = acQ)
							}
							var acS = d2[acO],
								acT = a3T[acS] + (q.cJ ? 0 : a3U[acS]),
								vg = a3S[acT],
								a7H = d9[vg],
								acU = a3T[acS + 1];
							rh = hA.a9D(dO[a7H] - acM[acP], dP[a7H] - acN[acP]);
							for (var aN = acT + 1; aN < acU; aN++) {
								var acV = a3S[aN],
									acW = d9[acV];
								(xv = hA.a9D(dO[acW] - acM[acP], dP[acW] - acN[acP])) < rh && (rh = xv, vg = acV)
							}
							vg < gI || bz <= vg || (a7H = d9[vg], acK[acP] += dO[a7H] - dO[a7G], acL[acP] += dP[a7H] - dP[a7G], acK[acO] += dO[a7G] - dO[a7H], acL[acO] += dP[a7G] - dP[a7H], fe = data.teamPlayerCount[d2[acP]], acM[acP] =
								hA.iV(acK[acP], fe), acN[acP] = hA.iV(acL[acP], fe), fe = data.teamPlayerCount[acS], acM[acO] = hA.iV(acK[acO], fe), acN[acO] = hA.iV(acL[acO], fe), d9[wo] = a7H, d9[vg] = a7G)
						}
					}! function() {
						for (var d9 = d7.d9, el = b7.el, em = b7.em, eo = b7.eo, ep = b7.ep, br = b7.br, a0P = b7.a0P, a0Z = b7.a0Z, a0a = b7.a0a, a0b = b7.a0b, a1 = 0; a1 < 512; a1++) {
							var acY = d9[a1];
							if (acY !== a1) {
								acZ(el, a1, acY), acZ(em, a1, acY), acZ(eo, a1, acY), acZ(ep, a1, acY), acZ(br, a1, acY), acZ(a0P, a1, acY), acZ(a0Z, a1, acY), acZ(a0a, a1, acY), acZ(a0b, a1, acY), aca(a1), aca(acY), d9[a1] = a1;
								for (var du = acY, ba = d9[du]; ba !== a1;) ba = d9[du = ba];
								d9[du] = acY
							}
						}
					}()
			}
		}) : function() {
			var dl = q.dl;
			for (acC = dl; acC < q.aA; acC++) acE();
			for (acC = q.cJ ? q.bq : 0; acC < dl; acC++)
				if (! function() {
						var spawningData = q.data.spawningData,
							fb = spawningData[2 * acC] + 1,
							spawningData = spawningData[2 * acC + 1] + 1;
						if (3 < fb && fb < dR.dS - 5 && 3 < spawningData && spawningData < dR.dT - 5 && eb.w9(eb.aAZ(fb, spawningData)) && function(fb, fc) {
								var cy, ach, acg;
								for (acg = fc; fc - 6 < acg; acg--)
									for (ach = fb; fb - 6 < ach; ach--)
										if (cy = eb.aAZ(ach, acg), eb.aAc(cy)) return;
								return 1
							}(fb + 3, spawningData + 3)) return acJ(fb + 1, spawningData + 1), 1;
						return
					}()) {
					if (!acI()) {
						for (var fv = q.yX = acC; fv < dl; fv++) acC = fv, acE();
						return
					}
					var fb = ac9 + a8t * ac8 + hA.iV(ac8, 2),
						fc = acA + jm * ac8 + hA.iV(ac8, 2);
					acJ(fb, fc)
				}
		})(), dg.dh[7] = b7.br[q.bS]
	}, this.a6v = function(xg, a7m, a7l) {
		var a1, fb, fc, cy, a8t, jm;
		for (acC = xg, a1 = 0; a1 < 20; a1++)
			for (fb = a7m + a1; a7m - a1 <= fb; fb--)
				for (fc = a7l + a1; a7l - a1 <= fc; fc--)
					if ((fb === a7m + a1 || fb === a7m - a1 || fc === a7l + a1 || fc === a7l - a1) && 3 < fb && fb < dR.dS - 5 && 3 < fc && fc < dR.dT - 5 && eb.w9(eb.aAZ(fb, fc)) && function(fb, fc) {
							var cy, ach, acg;
							for (acg = fc; fc - 6 < acg; acg--)
								for (ach = fb; fb - 6 < ach; ach--)
									if (cy = eb.aAZ(ach, acg), eb.aAc(cy) && !eb.a4b(acC, cy)) return;
							return 1
						}(fb + 3, fc + 3)) {
						if (0 < b7.br[acC]) {
							for (jm = a8t = cy = void 0, a8t = b7.eo[acC]; a8t >= b7.el[acC]; a8t--)
								for (jm = b7.ep[acC]; jm >= b7.em[acC]; jm--) cy = 4 * (jm * dR.dS + a8t), eb.gN(acC, cy) && (eb.a0w(cy), b7.br[acC]--);
							acE()
						}
						return aci(fb - 1, fc - 1), !0
					} return !1
	}, this.a6w = function(xg) {
		acC = xg, acI() ? acJ(ac9 + a8t * ac8 + hA.iV(ac8, 2), acA + jm * ac8 + hA.iV(ac8, 2)) : acE()
	}
}

function aPX() {
	var mO, dt, bp, acn, aco, acp, canvas, b9, oz, lG, acq, acr, acs, act;
	this.c4 = 0, this.du = 0, this.az = function() {
		acp = q.yU, acr = "rgba(0,100,0,0.8)", acs = "rgba(150,0,0,0.8)", oz = acq = !0, lG = b7.di[q.bS], this.resize()
	}, this.resize = function() {
		dt = Math.floor((b2.b3.b4() ? .305 : .24) * bD.bE), this.du = Math.floor(.5 + .13 * dt), dt = Math.floor(6 * this.du), mO = r.bF.bG(1, Math.floor(.8 * this.du)), aco = r.bF.bG(1, Math.floor(.45 * this.du)), act = Math.floor(.5 * this.du),
			dR.xb.font = mO, bp = bY.gap, acn = Math.floor(1 + .13 * this.du), (canvas = document.createElement("canvas")).width = dt, canvas.height = this.du, b9 = canvas.getContext("2d", {
				alpha: !0
			}), r.bF.textBaseline(b9, 1), r.bF.textAlign(b9, 1), this.acu()
	}, this.yQ = function() {
		return b2.b3.b4() && bD.dt < 1.2 * bD.du
	}, this.aQ3 = function() {
		this.yQ() ? this.c4 = bD.dt - dt - bY.gap : this.c4 = Math.floor(mX.bH() + (bD.dt - mX.bH() - jK.dt - dt) / 2 - .5 * bY.gap)
	}, this.bI = function() {
		oz && (oz = !1, this.acu())
	}, this.acu = function() {
		b9.font = mO, b9.clearRect(0, 0, dt, this.du), b9.fillStyle = acq ? acr : acs, b9.fillRect(0, 0, dt, this.du), b9.fillStyle = bO.xo;
		var aN = this.acv(),
			acx = (this.acw(), b9.fillStyle = b7.di[q.bS] >= yl.a6d(q.bS) ? bO.pl : bO.bX, r.aI.eh(lG)),
			acx = (b9.fillText(acx, Math.floor(dt / 2), act), b9.measureText(acx).width),
			acy = (b9.font = aco, b9.fillStyle = 9 === aN ? bO.aUq : bO.bX, yl.aZ1),
			acz = "+" + acy,
			kq = b9.measureText(acz).width,
			ad0 = Math.floor(this.du / 12),
			acx = .5 * (dt + acx) + ad0;
		(acx + kq + acn <= dt || 1e3 <= acy && (acz = "+" + Math.floor(acy / 1e3) + "K", acx + (kq = b9.measureText(acz).width) + acn <= dt)) && b9.fillText(acz, Math.floor(acx + .5 * kq), Math.floor(.3 * this.du)), __fx.settings
			.displayTickNumber && b9.fillText(9 - aN, Math.floor(2 * acn + ad0), Math.floor(.3 * this.du)), b9.fillStyle = bO.bX, b9.fillRect(0, 0, dt, 1), b9.fillRect(0, 0, 1, this.du), b9.fillRect(0, this.du - 1, dt, 1), b9.fillRect(dt - 1, 0,
				1, this.du)
	}, this.acv = function() {
		var aN = bL.bM() % 100,
			fc = (aN = 9 - hA.iV(aN -= aN % 10, 10), Math.floor(aN * (this.du - acn) / 9));
		return b9.fillRect(0, fc, acn, this.du - fc), b9.fillRect(dt - acn, fc, acn, this.du - fc), aN
	}, this.acw = function() {
		b9.fillRect(acn, this.du - acn, Math.floor((dt - 2 * acn) * b7.di[q.bS] / acp), acn)
	}, this.bs = function() {
		var cy = q.bS;
		r.cz.pt(cy) && (cy = b7.di[cy] - b7.fX[cy], lG !== cy ? (acp = ml(cy, acp), acq = lG < cy && 10 <= cy, lG = cy, oz = !0) : bL.bM() % 10 == 9 && (oz = !0))
	}, this.cR = function() {
		0 === b7.c0[q.bS] || q.cJ || 2 === b7.bo[q.bS] || cS.drawImage(canvas, this.c4, bp)
	}
}

function aFD() {
	this.aID = 28, this.aFF = 0, this.aIC = null;
	var ad1 = this.aIE = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function ad5(fk, ad6) {
		var c4, bp, oN, ex, fr = r.bF.sq(fk, fk),
			fF = r.bF.getContext(fr, !0),
			a5E = r.bF.getImageData(fF, fk, fk),
			fm = a5E.data,
			jP = (fk >> 1) - .5,
			ad7 = .5 + jP;
		for (ad7 *= ad7, bp = 0; bp < fk; bp++)
			for (c4 = 0; c4 < fk; c4++) ex = (ex = c4 - jP) * ex + (ex = bp - jP) * ex, fm[oN = 4 * (bp * fk + c4)] = ad6[0], fm[1 + oN] = ad6[1], fm[2 + oN] = ad6[2], fm[3 + oN] = (ad7 - ex) * ad6[3] / ad7;
		return fF.putImageData(a5E, 0, 0), fr
	}

	function aa1(a1, fF, fr, fk) {
		var highlight, c4, bp;
		0 !== b7.c0[a1] && 0 !== b7.br[a1] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a1]) && (fk *= 2), c4 = b7.el[a1] + b7.eo[a1] + 1 - fk - 2 >> 1, bp = b7.em[a1] + b7.ep[a1] + 1 - fk - 2 >> 1, highlight ? fF
			.drawImage(fr[q.bf ? 9 === q.eU && 5 === v.dn[a1] ? 3 : aC.wD[a1] : a1 < q.bq ? 1 : 0], c4, bp, fk, fk) : fF.drawImage(fr[q.bf ? 9 === q.eU && 5 === v.dn[a1] ? 3 : aC.wD[a1] : a1 < q.bq ? 1 : 0], c4, bp))
	}
	this.az = function() {
		var aJM;
		this.aFF = 700,
			function(aJM) {
				var fk = aJM.aID;
				if (aJM.aIE = [], ad1 = [], q.bf) {
					for (var a1 = 0; a1 <= q.ya; a1++) aJM.aIE.push(ad5(fk, aC.a3Q[aC.d2[a1]])), ad1.push(ad5(fk >> 1, aC.a3Q[aC.d2[a1]]));
					9 === q.eU && ad1.push(ad5(fk, aC.a3Q[1]))
				} else aJM.aIE.push(ad5(fk, aC.a3Q[7])), aJM.aIE.push(ad5(fk, aC.a3Q[4])), ad1.push(ad5(fk >> 1, aC.a3Q[7]))
			}(this),
			function(aJM, adB) {
				var a1, aIC = aJM.aIC,
					fF = r.bF.getContext(aIC, !0),
					cs = q.aA,
					fk = aJM.aID >> 1;
				fF.imageSmoothingEnabled = !1, fF.setTransform(1, 0, 0, 1, 0, 0), adB && fF.clearRect(0, 0, aIC.width, aIC.height);
				if (9 === q.eU) {
					fk <<= 1;
					aJM = yi.qt[5];
					for (a1 = cs - aJM; a1 < cs; a1++) aa1(a1, fF, ad1, fk);
					cs -= aJM, fk >>= 1
				}
				for (a1 = q.bq; a1 < cs; a1++) aa1(a1, fF, ad1, fk)
			}(this, null !== (aJM = this).aIC && aJM.aIC.width === dR.dS - 2 && aJM.aIC.height === dR.dT - 2 || (aJM.aIC = r.bF.sq(dR.dS - 2, dR.dT - 2), !1)), q.cJ || this.a6z()
	}, this.aIi = ad5, this.a6z = function() {
		for (var cs = q.bq, fk = this.aID, aIE = this.aIE, fF = r.bF.getContext(this.aIC, !0), a1 = 0; a1 < cs; a1++) aa1(a1, fF, aIE, fk)
	}
}

function v7() {
	var hS, kL, kM, kO;

	function kN(a1) {
		n.aB(8, n.go, new jx(21, {
			i1: a1,
			ii: 0,
			ik: 10
		}))
	}
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), kL.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, kM = [new g(L(544), function() {
		kN(1)
	}, 0, 0, 1), new g(L(545), function() {
		kN(2)
	}, 0, 0, 1), new g(L(546), function() {
		kN(3)
	}, 0, 0, 1), new g(L(547), function() {
		kN(0)
	}, 0, 0, 1), new g(L(322), function() {
		kN(9)
	}, 0, 0, 1), new g(L(68), function() {
		kN(10)
	}, 0, 0, 1), new g(L(69), function() {
		kN(11)
	}, 0, 0, 1), new g(L(70), function() {
		kN(13)
	}, 0, 0, 1)], kO = [new g("⬅️ " + L(1), function() {
		n.p()
	})], hS = new f(L(272), kO), kL = new kP(kM, hS.j)
}

function aBv(aBj, aBk) {
	var adI, self, adD = document.createElement("div"),
		adE = document.createElement("div"),
		aUu = document.createElement("div"),
		adF = null,
		adJ = (this.iL = new hZ({
			value: "",
			a9: -1
		}, 0, adG, function(cb) {
			cb.target.value = r.aI.h0(cb.target.value), adF.na.textContent = 127 - cb.target.value.length
		}), 0),
		aO8 = 1,
		adK = 0,
		adL = 1048575;

	function adG() {
		aBj(), adF.na.textContent = 127
	}

	function aOC(aOB, vu) {
		vu && (vu.a1S = 1, aOB.appendChild(uN.eu.transform(vu)))
	}

	function aOA(bJ) {
		aO8 ? adD.scrollTop = adD.scrollHeight : bJ && (adD.scrollTop = adK)
	}
	this.reset = function(adM) {
			adL = 1048575, adE.textContent = "", adM || this.lA()
		}, this.lA = function() {
			var zx = uN.b0.a8P[0],
				zx = uN.b0.zX[zx],
				zy = zx.zy,
				cs = zy.length,
				gI = 1048575 === adL ? 0 : cs - (zx.zz - adL + 1048575) % 1048575;
			if (adL = zx.zz, !(cs <= (gI = Math.max(gI, 0)))) {
				for (var aOB = document.createDocumentFragment(), a1 = gI; a1 < cs; a1++) aOC(aOB, uN.nr.a22(zy[a1], uN.nr.a23(zy[a1])));
				adE.appendChild(aOB), aOA()
			}
		}, this.a4C = function(vs) {
			var aOB = document.createDocumentFragment();
			aOC(aOB, vs), adE.appendChild(aOB), aOA()
		}, this.show = function(a8Y) {
			a8Y.appendChild(adD), a8Y.appendChild(aUu), this.resize(a8Y)
		}, this.aL = function(a8Y) {
			n.removeChild(a8Y, adD), n.removeChild(a8Y, aUu)
		}, this.resize = function(a8Y) {
			adJ = a8Y ? a8Y.offsetHeight : adJ;
			var a8Y = r.bF.oV(.04, .75),
				a0G = Math.max(a8Y, adJ - a8Y),
				adN = bD.dt / bD.cp,
				k8 = .7 * adN,
				adO = r.bF.nO(adJ - a8Y - a0G),
				a0G = (aUu.style.height = r.bF.nO(a8Y), adD.style.height = r.bF.nO(a0G), bD.du > bD.dt || b2.b3.b4() ? (aUu.style.top = adO, adD.style.top = r.bF.nO(adJ - a0G), r.bF.kB(adD, 8)) : (adD.style.top = adO, aUu.style.top = r.bF.nO(adJ -
						a8Y), r.bF.kB(adD, 2)), this.iL.cb.style.width = r.bF.nO(k8), this.iL.cb.style.fontSize = adI.button.style.fontSize = r.bF.nO(.5 * a8Y), r.bF.kB(this.iL.cb, 6), adI.button.style.left = r.bF.nO(k8), adI.button.style.width = r
					.bF.nO(adN - k8), .385 * a8Y);
			b2.b3.b4() && (a0G *= .8 - .12 * (bD.dt > bD.du)), adE.style.marginLeft = adE.style.marginRight = r.bF.nO(.5 * a0G), adE.style.fontSize = r.bF.nO(a0G), aOA(1)
		}, (self = this).iL.cb.sA = 127, adD.style.position = "absolute", adD.style.left = "0", adD.style.width = "100%", adD.style.overflowX = "hidden", adD.style.overflowY = "auto", adD.style.font = "inherit", adD.style.backgroundColor = bO.xp, adD
		.addEventListener("scroll", function() {
			adK = adD.scrollTop, aO8 = adK < adD.scrollHeight - adD.clientHeight - 2 ? 0 : 1
		}), adE.style.font = "inherit", aUu.style.position = "absolute", aUu.style.left = "0", aUu.style.width = "100%", self.iL.cb.setAttribute("placeholder", L(548)), self.iL.cb.style.position = "absolute", self.iL.cb.style.top = "0", self.iL.cb
		.style.left = "0", self.iL.cb.style.height = "100%", self.iL.cb.style.backgroundColor = bO.a1L, self.iL.cb.style.textAlign = "center", (adI = new g(L(16), adG)).button.top = "0", adI.button.style.position = "absolute", adI.button.style
		.height = "100%", adI.hg(bO.aMx), adF = new a5X("127", adI.button, 1, 1), adD.appendChild(adE), aUu.appendChild(self.iL.cb), aUu.appendChild(adI.button)
}

function aak() {
	this.p6 = function(adQ, a9, a2v) {
		var fk = adQ.height,
			fr = r.bF.sq(fk, fk),
			fF = r.bF.getContext(fr);
		return function(dt, fF, a2v) {
			fF.fillStyle = a2v, fF.beginPath(), fF.arc(dt / 2, dt / 2, .47 * dt, 0, 2 * Math.PI), fF.fill()
		}(fk, fF, a2v), fF.drawImage(adQ, -a9 * fk, 0), fr
	}, this.p8 = function(adS) {
		var fF, a5E, fk = adS.height;
		return adS.width === fk && (a5E = (fF = r.bF.getContext(adS, !0)).getImageData(0, 0, fk, fk), r.gf.a5F(a5E.data, fk, fk, .9), fF.putImageData(a5E, 0, 0)), adS
	}
}

function aPg() {
	this.zs = 0;
	var adT, adU, adV, adW, adX, adY = this.aJj = 0;

	function adZ() {
		adW = adX = null, adY = 0
	}
	this.az = function(zW, aWw, aWx) {
		n.ta(), uN.ln(), jz.setState(10), adW = zW, adX = aWw, adY = aWx, this.zs = zW.zs, this.aJj = aWx, adT = 0, adU = bL.c8 + 4500, hW.b0.uY = zW.uY, hW.b0.uP === zW.uY ? (console.log("direct pass"), adV = 0) : (console.log("delayed pass"),
			hW.b0.close(hW.b0.uP, 3247), adV = 2, hW.b0.aNn(zW.uY, 5, 2) && hW.kU.aCd()), cS.imageSmoothingEnabled = !0, jz.a1I();
		aWw = bl.gS("loading"), aWx = (b2.b3.b4() ? .396 : .25) * bD.bE / aWw.width;
		cS.setTransform(aWx, 0, 0, aWx, Math.floor((bD.dt - aWx * aWw.width) / 2), Math.floor((bD.du - aWx * aWw.height) / 2)), cS.imageSmoothingEnabled = !1, cS.drawImage(aWw, 0, 0), cS.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aJ8 = function() {
		0 < adV && bL.c8 > adU && (adV--, adU += 4500, 0 === bL.iy) && 0 === bL.bM() && hW.b0.aNn(hW.b0.uY, 5, 2)
	}, this.aXL = function() {
		return 10 === jz.si() && (uN.zt.aWz(adW, adX, adY), adZ(), !0)
	}, this.aGo = function() {
		10 === jz.si() && 2 <= ++adT && (uN.zt.aWz(adW, adX, adY), adZ())
	}
}

function aaD() {
	this.bs = function(mH) {
		var id, dV, bz;
		for (hx.az(mH), hx.a9 += 2, bz = 8 * hx.size; hx.a9 + 8 <= bz;) id = hx.i2(4), dV = hx.i2(9), 0 === id ? this.jf(id, dV, hx.i2(22)) : 1 === id ? this.jf(id, dV, hx.i2(10), hx.i2(10)) : 2 === id ? this.jf(id, dV, hx.i2(10), hx.i2(9)) :
			3 === id ? this.jf(id, dV, hx.i2(10), hx.i2(27)) : 4 === id ? this.jf(id, dV, hx.i2(10), hx.i2(16)) : 5 === id || 6 === id ? this.jf(id, dV, hx.i2(10)) : 7 === id ? this.jf(id, dV, hx.i2(1)) : 10 === id ? this.jf(id, dV, hx.i2(20), hx
				.i2(22)) : this.jf(id, dV)
	}, this.yp = [], this.adb = function() {
		for (var add = 0, ade = 0, adf = 0, adg = 0, adh = 0, adi = 0, a1 = 0; a1 < 512; a1++) add += b7.c0[a1], ade += b7.br[a1], adf += b7.di[a1], adg += il.b0.yG[a1];
		adh += il.b0.rm, adi += ct.cu, this.yp.push(adf % 1073741824 * 4 + (add + ade + adg + adh + adi) % 4)
	}, this.jf = function(id, dV, dX, dZ) {
		0 === id ? jd.aa8.aLY(dV, dX) : 1 === id ? jd.aa8.y7(dV, dX, dZ) : 2 === id ? jd.aa8.aXo(dV, dX, dZ) : 3 === id ? jd.aa8.aLd(dV, dX, dZ) : 4 === id ? jd.aa8.aLe(dV, dX, dZ) : 5 === id ? jd.aa8.y3(dV, dX) : 6 === id ? jd.aa8.aa9(dV, dX) :
			7 === id ? jd.aa8.pK(dV, dX) : 8 === id ? jd.aa8.aD6(dV) : 9 === id ? jd.aa8.aIs(dV) : 10 === id && jd.aa8.aLa(dV, dX >> 10, dZ, dX % 1024)
	}
}

function aPP() {
	this.oi = new abu, this.iA = new q8, this.i4 = new aEc, this.az = function() {
		this.oi.az()
	}
}

function aZz() {
	var adj = 0,
		adk = "",
		adl = 0,
		adm = 0,
		adn = 0;

	function aN1(a6k) {
		hW.kW.aLG(3, a6k)
	}

	function adx(fe) {
		adj = 1, uN.message.a08({
			id: 6,
			value: fe
		})
	}

	function adr(vs) {
		var ae0 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return vs.match(ae0)
	}
	this.zR = function(vs) {
		var ado, dC, adt;
		if (adj) return adj = 0, "yes" === (ado = vs.toLowerCase()) || "y" === ado ? void aN1(adk) : void uN.message.a08({
			id: 5,
			a06: 7
		});
		!(vs.indexOf("@") < 0) && (ado = adr(vs)) ? (adk = vs, dC = function(adq) {
			for (var cs = adq.length, adz = [0, 0, 0, 0], a1 = 0; a1 < cs; a1++)
				for (var dt = adq[a1], bN = 0; bN < 4; bN++) dt === "@room" + (bN + 1) && (adz[bN] = 1);
			if ((adm = r.s.x(adz)) % 4 == 0) return r.s.sE(uN.zf.a8G);
			for (bN = 0; bN < 4; bN++) adz[bN] = adz[bN] ? uN.zf.a8G[bN] : [];
			return r.s.sE(adz)
		}(ado), function(adq, adt, vs) {
			if (!adl) return;
			for (var cs = adt.length, a1 = 0; a1 < cs; a1++) 2 === adt[a1].id && (vs = vs.replace(adq[adt[a1].a9], "@" + adt[a1].h2));
			return adj = 1, aN1((adk = vs).slice(0, 126) + "|"), 1
		}(ado, adt = function(adq) {
			for (var adt = [], cs = (adn = adl = 0, adq.length), a1 = 0; a1 < cs; a1++) {
				var dt = adq[a1],
					jP = dt.length;
				r.aI.startsWith(dt, "@[") ? jP <= 9 && r.aI.hM(dt, "]") && adt.push({
					id: 0,
					h2: dt.substring(2, jP - 1).toUpperCase()
				}) : 6 === jP ? r.aI.startsWith(dt, "@room") || (adn++, adt.push({
					id: 1,
					h2: i3.oi.a1q(dt.substring(1), 5)
				})) : 1 < jP && jP < 5 && 0 <= (jP = nD.data.sl(dt.substring(1))) && (adt.push({
					id: 2,
					h2: jP,
					a9: a1
				}), adl = 1)
			}
			return adt
		}(ado), vs) || (0 === adt.length ? adm || function(adq) {
			for (var cs = adq.length, a1 = 0; a1 < cs; a1++) {
				var dt = adq[a1];
				if ("@all" === dt || "@everyone" === dt) return 1
			}
			return
		}(ado) ? adx(dC.length) : aN1(vs) : ado.length === adn ? aN1(vs) : (function(dC, adt) {
			var jP = adt.length;
			if (0 === jP) return;
			var cs = dC.length;
			loop: for (var a1 = cs - 1; 0 <= a1; a1--) {
				for (var bN = 0; bN < jP; bN++)
					if (0 === adt[bN].id) {
						if (adt[bN].h2 === r.aI.hD(dC[a1].username)) continue loop
					} else if (1 === adt[bN].id && adt[bN].h2 === dC[a1].hp) continue loop;
				dC[a1] = dC[--cs], dC.pop()
			}
		}(dC, adt), adx(dC.length)))) : aN1(vs)
	}, this.a05 = function(vs) {
		var adq = adr(vs);
		if (adq)
			for (var a8C = new RegExp("^[0-9]+$"), cs = adq.length, a1 = 0; a1 < cs; a1++) {
				var dt = adq[a1].substring(1),
					jP = dt.length;
				1 <= jP && jP <= 3 && a8C.test(dt) && (jP = parseInt(dt, 10), !isNaN(jP)) && 0 <= jP && jP < nD.data.dC.length && (vs = vs.replace("@" + dt, "@" + nD.data.dC[jP]))
			}
		return vs
	}
}

function aPd() {
	var h2, dt, du, max, ae1, a30, ae3, ae4, ae5, ae6, ae7, ae8, ae9, aeA, ae2 = 1e4;

	function aeH(aeG, a2z, cs) {
		var a1;
		for (ae3[0] = aeG, a1 = 1; a1 < cs; a1++) ae3[a1] = ae3[a1 - 1] + a2z, a2z = ae3[a1] >= ae2 ? (ae3[a1] = ae2 - 1, -a2z) : ae3[a1] < 0 ? (ae3[a1] = 0, -a2z) : (a2z += 16384 <= r2.random() ? a30 : -a30) < -ae1 ? -ae1 : ae1 < a2z ? ae1 : a2z
	}

	function aeJ(c4, bp, aeK, cs) {
		(aeK ? function(c4, bp, cs) {
			var a1;
			for (a1 = 0; a1 < cs; a1++) h2[bp * dt + c4 + a1] = ae3[a1]
		} : function(c4, bp, cs) {
			var a1;
			for (a1 = 0; a1 < cs; a1++) h2[bp * dt + c4 + a1 * dt] = ae3[a1]
		})(c4, bp, cs)
	}

	function aeN(value, cs) {
		var a1, gJ, gF, os = value - ae3[cs - 1];
		if (0 != os) {
			for (gJ = 1 + hA.iV(Math.abs(os), cs - 1), gJ = os < 0 ? -gJ : gJ, ae3[cs - 1] = value, gF = (gF = cs - 1 - hA.iV(Math.abs(os), Math.abs(gJ))) < 1 ? 1 : cs - 2 < gF ? cs - 2 : gF, a1 = cs - 2; gF <= a1; a1--) ae3[a1] += os - (cs - 1 -
				a1) * gJ;
			(os < 0 ? function(cs) {
				var a1;
				for (a1 = cs - 2; 1 <= a1; a1--) ae3[a1] < 0 && (ae3[a1] = -ae3[a1] - 1)
			} : function(cs) {
				var a1;
				for (a1 = cs - 2; 1 <= a1; a1--) ae3[a1] >= ae2 && (ae3[a1] = 2 * ae2 - ae3[a1] - 1)
			})(cs)
		}
	}

	function aeQ(s4, s5, cs) {
		for (var a1 = 0; a1 < cs; a1++) s4[a1] = s5[a1]
	}

	function aeR(dC) {
		for (var a1 = 0; a1 < dC.length - 1; a1++) dC[a1] = dC[a1 + 1] - dC[a1];
		dC[dC.length - 1] = dC[dC.length - 3]
	}

	function aeS(aHB, gap, oL) {
		ae4.push(aHB), ae5.push(gap), ae6.push(oL)
	}
	this.wx = function(gd) {
		! function(gd) {
			var a1;
			for (dt = gd[0], du = gd[1], ae1 = gd[2], a30 = gd[3], h2 = new Int16Array(dt * du), max = du < dt ? dt : du, ae3 = new Int16Array(max), ae4 = [], ae5 = [], ae6 = [], ae7 = new Array(dt), ae8 = new Array(du), a1 = dt - 1; 0 <=
				a1; a1--) ae7[a1] = !1;
			for (a1 = du - 1; 0 <= a1; a1--) ae8[a1] = !1;
			ae9 = new Int16Array(dt), aeA = new Int16Array(du)
		}(gd),
		function(cs) {
			var aeG = r2.random() % ae2,
				a2z = r2.random() % (2 * ae1 + 1) - ae1;
			aeH(aeG, a2z, cs)
		}(max), aeQ(aeA, ae3, du), aeJ(0, 0, !0, dt);
		var c4, bp, gd = h2[0],
			cs = max,
			a2z = r2.random() % (2 * ae1 + 1) - ae1;
		for (aeH(gd, a2z, cs), aeQ(ae9, ae3, dt), aeJ(0, 0, !1, du), aeR(ae9), aeR(aeA), aeH(h2[dt - 1], ae9[dt - 1], du), aeJ(dt - 1, 0, !1, du), aeH(h2[dt * (du - 1)], aeA[du - 1], dt), aeN(h2[dt * du - 1], dt), aeJ(0, du - 1, !0, dt), ae7[dt -
				1] = ae7[0] = !0, ae8[du - 1] = ae8[0] = !0, aeS(0, dt, !0), aeS(0, du, !1), ! function() {
				var aAn, aHB;
				for (;;) {
					if (aAn = function() {
							var a1, aAn = ae4.length - 1;
							for (a1 = aAn - 1; 0 <= a1; a1--) ae5[a1] > ae5[aAn] && (aAn = a1);
							return aAn
						}(), ae5[aAn] < 5) return;
					aHB = ae4[aAn] + hA.iV(ae5[aAn], 2), (ae6[aAn] ? function(c4) {
						var cs, aeW, a1, a6q = 0,
							aeX = 0;
						for (; aeX < du - 1;) {
							for (a1 = a6q + 1; a1 < du; a1++)
								if (ae8[a1]) {
									aeX = a1;
									break
								} cs = aeX - a6q + 1, aeH(h2[c4 + dt * a6q], 0 === a6q ? ae9[c4] : ae3[aeW - 1] - ae3[aeW - 2], cs), aeN(h2[aeX * dt + c4], cs), aeJ(c4, a6q, !1, cs), aeW = cs, a6q = aeX
						}
						ae7[c4] = !0
					} : function(bp) {
						var cs, aeW, a1, a6q = 0,
							aeX = 0;
						for (; aeX < dt - 1;) {
							for (a1 = a6q + 1; a1 < dt; a1++)
								if (ae7[a1]) {
									aeX = a1;
									break
								} cs = aeX - a6q + 1, aeH(h2[bp * dt + a6q], 0 === a6q ? aeA[bp] : ae3[aeW - 1] - ae3[aeW - 2], cs), aeN(h2[bp * dt + aeX], cs), aeJ(a6q, bp, !0, cs), aeW = cs, a6q = aeX
						}
						ae8[bp] = !0
					})(aHB), aeS(aHB, ae4[aAn] + ae5[aAn] - aHB, ae6[aAn]), ae5[aAn] = aHB - ae4[aAn] + 1
				}
			}(), c4 = 0; c4 < dt; c4++)
			if (!ae7[c4])
				for (bp = 0; bp < du; bp++) ae8[bp] || ! function(c4, bp) {
					var value = h2[bp * dt + c4 - 1] + h2[(bp - 1) * dt + c4],
						aPA = 2;
					ae7[c4 + 1] && (aPA++, value += h2[bp * dt + c4 + 1]);
					ae8[bp + 1] && (aPA++, value += h2[(bp + 1) * dt + c4]);
					h2[bp * dt + c4] = hA.iV(value, aPA)
				}(c4, bp)
	}, this.aGX = function() {
		return h2
	}, this.aEU = function() {
		h2 = null
	}
}

function is(aeZ, tm, aea) {
	function click() {
		var value = 1 - aeZ.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tm, void 0 !== aeZ.a9 ? b5.hi.hj(aeZ.a9, value) : aeZ.value = value, aea && aea(value)
	}
	var cb;
	tm = tm || L(549), this.cb = document.createElement("p"), (cb = this.cb).textContent = (aeZ.value ? "🟩 " : "⬜ ") + tm, cb.style.margin = "0", cb.style.marginBottom = "0.5em", cb.style.cursor = "pointer", cb.addEventListener("click", click)
}

function a4() {
	var tY;
	this.aeb = [], this.tY = document.createElement("div"), this.a5 = function(ga, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ga, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tY.appendChild(
			title), title
	}, this.hr = function(ga, marginBottom) {
		var hq = document.createElement("p");
		return hq.textContent = ga, hq.style.fontSize = "0.75em", hq.style.lineHeight = "1.2em", hq.style.marginBottom = marginBottom || "0", this.tY.appendChild(hq), hq
	}, this.aP0 = function(ga) {
		var aec = document.createElement("p");
		return aec.textContent = ga, aec.style.fontSize = "1em", aec.style.marginBottom = "0", aec.style.whiteSpace = "pre-wrap", aec.style.overflowWrap = "break-word", this.tY.appendChild(aec), aec
	}, this.aE = function(aDw, fontSize) {
		var tY = document.createElement("div");
		return tY.innerHTML = aDw, tY.style.fontSize = fontSize || "1em", tY.style.lineHeight = "1.2em", this.tY.appendChild(tY), tY
	}, this.a7 = function(aOh) {
		for (var aOl = aOh.aOl, cs = aOl.length, a1 = 0; a1 < cs; a1++) this.tY.appendChild(aOl[a1])
	}, this.aK = function(vu) {
		return this.aeb.push(vu), this.tY.appendChild(vu.cb), vu
	}, this.resize = function() {
		for (var cs = this.aeb.length, a1 = 0; a1 < cs; a1++) this.aeb[a1].resize && this.aeb[a1].resize()
	}, (tY = this.tY).style.position = "absolute", tY.style.height = "auto", tY.style.padding = "0.5em"
}

function sp(fk, size, i8, aed, font) {
	var a1, fu = .2,
		canvas = document.createElement("canvas"),
		fF = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = fk, canvas.height = fk, fF.font = size + font, fF.textAlign = "center", fF.textBaseline = "middle", fF.fillStyle = "red", a1 = 0; a1 < i8.length; a1++) fF.fillText(i8[a1], .5 * fk, .5 * fk);
	return -1 < (canvas = function(a5E) {
		var a1, n1, gM = a5E.data;
		for (a1 = gM.length - 4; 0 <= a1; a1 -= 4)
			if (n1 = gM[a1], aed <= n1) return Math.floor(a1 / (4 * fk));
		return -1
	}(fF.getImageData(0, 0, fk, fk))) && (fu = (canvas - .5 * fk + .1 * size) / size), Math.max(fu, 0)
}

function aaC() {
	this.aLY = function(player, oN) {
		r.cz.ps(0) && r.cz.pt(player) && f7.aa4(oN) && (jR.jS.aIx(0, player, oN), q.jM.qi(player, oN))
	}, this.y7 = function(player, aI3, xg) {
		r.cz.ps(1) && r.cz.pt(player) && r.cz.aXi(player, xg) && r.cz.aXk(player, aI3, 12, 0) && r.cz.aXv(player, xg) && ((xg = yB.a4f(player, d7.dL[0])) || yB.a4g(player)) && (b7.un[player]++, jR.jS.aIx(1, player, aI3, d7.dL[0]), yt.aEx.aK5(
			player, xg)) && (r.cz.aXu(player), dg.aIT(player, aI3), yt.aEx.aK9(player))
	}, this.aXo = function(player, aI3, a6V) {
		r.cz.ps(1) && r.cz.pt(player) && q.bf && r.cz.aXi(player, a6V) && r.cz.a6W(player, a6V) && r.cz.a6X(player, r.cz.a6Y(player, aI3), a6V) && ym.qi(a6V, d7.dF[0]) && (jR.jS.aIx(2, player, aI3, a6V), yl.aVj(player, a6V))
	}, this.aLd = function(player, aI3, aJo) {
		d7.dM[1] = 7 & aJo;
		var oN = aJo >> 3;
		r.cz.ps(1) && r.cz.pt(player) && f7.aa4(oN) && il.ni.nj(player) && il.ni.a6u(oN) && r.cz.aXk(player, aI3, 32, 0) && il.rZ.ra(player, oN, 1) && (dg.aIU(player), jR.jS.aIx(3, player, aI3, aJo), r.cz.aXu(player), aPJ.aIN.aLd(player), il.b0
			.iY(player))
	}, this.aLe = function(player, aI3, rF) {
		849 === aI3 ? this.y4(player, rF) : r.cz.ps(1) && r.cz.pt(player) && r.cz.aXk(player, aI3, 32, 0) && il.aDs.rH(player, rF) && (dg.aIU(player), jR.jS.aIx(4, player, aI3, rF), r.cz.aXu(player), aPJ.aIN.aLe(player), il.b0.iY(player))
	}, this.y4 = function(player, rF) {
		r.cz.ps(1) && r.cz.pt(player) && il.aDt.bs(player, rF) && jR.jS.aIx(4, player, 849, rF)
	}, this.y3 = function(player, xg) {
		513 === xg ? this.pw(player) : r.cz.ps(1) && r.cz.pt(player) && (xg = Math.min(xg, q.aA), yB.a4f(player, xg)) && (jR.jS.aIx(5, player, xg), yB.aMg(player, xg))
	}, this.aa9 = function(player, fj) {
		(r.cz.ps(1) || r.cz.ps(2)) && r.cz.pt(player) && (fj = hA.hB(fj, 0, 1023), jR.jS.aIx(6, player, fj), ez.eq(player, 0, fj))
	}, this.pK = function(player, aJt) {
		gv.pI(player) && (jR.jS.aIx(7, player, aJt), gv.ph(player, aJt))
	}, this.aD6 = function(player) {
		(r.cz.ps(0) || r.cz.ps(1)) && r.cz.pt(player) && j9.mh(player) && (jR.jS.aIx(8, player), aPG.aD6(player))
	}, this.aIs = function(player) {
		jR.jS.aIx(9, player), aPG.aIs(player)
	}, this.pw = function(player) {
		gv.pr(player) && (jR.jS.aIx(5, player, 513), gv.pw(player))
	}, this.aLa = function(player, aI3, oN, xg) {
		r.cz.ps(1) && r.cz.pt(player) && r.cz.aXi(player, xg) && r.cz.aXv(player, xg) && f7.aa4(oN) && aLZ.a9d.aGA(player, oN) && (yB.a4f(player, d7.dL[0]) || yB.a4g(player)) && (jR.jS.aIx(10, player, (aI3 << 10) + d7.dL[0], oN), xg = r.cz.aDS(
			player, aI3), b7.a0S[player].push(d7.dJ[0]), yB.qi(player, xg, d7.dL[0]), z1.a4h(player, !0), dg.aIV(player))
	}
}

function v1() {
	var hS, hT, y;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), hT.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, hS = new f(L(550), [new g("⬅️ " + L(1), function() {
		n.aB(7, n.vK(7).ot)
	}), new g(L(377), function() {
		b5.hi.hj(105, i3.oi.zO(hT.tX[0].aeb[0].cb.value, 5)), b5.hi.hj(106, i3.oi.zO(hT.tX[1].aeb[0].cb.value, 15)), n.aB(8, n.vK(7).ot, new jx(18))
	})]), hT = new i(hS.j, ((y = []).push(function() {
		var a3 = new a4;
		return a3.a5(L(19)), a3.aK(new hZ({
			value: "",
			a9: -1
		})), a3
	}()), y.push(function() {
		var a3 = new a4,
			aOe = (a3.a5(L(358)), new hZ({
				value: "",
				a9: -1
			}));
		return aOe.cb.type = "password", a3.aK(aOe), a3.aK(new hk([new g(L(359), function(cb) {
			return cb.textContent === L(359) ? (cb.textContent = L(360), aOe.cb.type = "text") : (cb.textContent = L(359), aOe.cb.type = "password"), !0
		}).button])), a3
	}()), y.push(function() {
		var a3 = new a4;
		return a3.a5(L(362)), a3.hr(L(551)), a3.hr(L(552)), a3.hr(L(553)), a3
	}()), y))
}

function aEG(title, aDw, oY) {
	var hS, aRB;
	this.show = function() {
		hS.show(), this.resize()
	}, this.aL = function() {
		hS.aL()
	}, this.resize = function() {
		hS.resize(), aRB.resize()
	}, this.aM = function(aN) {
		2 === aN && hS.aO[0].aP()
	}, oY = oY || [new g("⬅️ " + L(1), function() {
		n.p()
	}, bO.aOf)], hS = new f(title, oY), aRB = new aDv(hS.j, aDw), r.bF.textAlign(hS.j.style, 1)
}

function aPx() {
	var c4, bp, du, k4, aei, aej, aek, ael, aem, dt, sy, aTp;
	this.l2 = !1, this.az = function(ga, aen) {
		if (1 === b2.id && 13 <= b2.k2 && b2.k2 < 18) return aen ? void(sy = ga) : sy !== ga ? void 0 : void b2.k3.saveString(200, ga);
		aen && (sy = ga, (aTp = document.createElement("a")).appendChild(document.createTextNode(sy)), this.l2 = !0, aTp.title = sy, aTp.target = "_blank", aTp.href = sy, aTp.style.textAlign = "center", aTp.style.color = bO.bX, aTp.style
			.position = "absolute", aTp.style.padding = "0px", aTp.style.margin = "0px", this.resize(), document.body.appendChild(aTp), bL.cC = !0)
	}, this.aL = function() {
		return !(!this.l2 || (n.removeChild(document.body, aTp), this.l2 = !1))
	}, this.c3 = function(cj, ck) {
		return !!this.l2 && ((cj < c4 || ck < bp || c4 + dt < cj || bp + du < ck || c4 + dt - k4 < cj && ck < bp + k4) && (bL.cC = !0, this.l2 = !1, n.removeChild(document.body, aTp)), !0)
	}, this.resize = function() {
		var mO, gG;
		this.l2 && (ael = Math.floor(.8 * (b2.b3.b4() ? bD.dt > bD.du ? .6 : .55 : .4) * bD.bE), k4 = Math.floor(.15 * ael), aei = Math.floor(.35 * k4), aej = Math.floor(.5 * k4), aek = Math.floor(2.5 * aej), du = k4 + aei + 3 * aej, mO = r.bF
			.bG(1, aei / bD.cp), aem = Math.floor(bD.cp * l9.measureText(sy, mO)), gG = dt = (ael < aem ? aem : ael) + 2 * aek, dt = Math.min(dt, bD.dt - 2 * (b2.b3.b4() ? 2 : 1) * bY.gap), mO = r.bF.bG(1, dt / gG * aei / bD.cp), aem = Math
			.floor(bD.cp * l9.measureText(sy, mO)), c4 = Math.floor((bD.dt - dt) / 2), bp = Math.floor((bD.du - du) / 2), aTp.style.font = mO, aTp.style.top = Math.floor((bp + 1.4 * aej + k4) / bD.cp) + "px", aTp.style.left = Math.floor((c4 +
				(dt - aem) / 2) / bD.cp) + "px")
	}, this.cR = function() {
		this.l2 && (cS.fillStyle = bO.lC, cS.fillRect(c4, bp + k4, dt, du - k4), cS.fillStyle = bO.aUs, cS.fillRect(c4, bp, dt, k4), cS.fillStyle = bO.bX, cS.lineWidth = bY.bZ, cS.strokeStyle = bO.bX, cS.strokeRect(c4, bp, dt, du), cS.fillRect(
			c4, bp + k4, dt, bY.bZ), cS.font = r.bF.bG(1, .48 * k4), r.bF.textAlign(cS, 1), r.bF.textBaseline(cS, 1), cS.fillText(L(554), Math.floor(c4 + (dt - .5 * k4) / 2), Math.floor(bp + .55 * k4)), j9.lK(Math.floor(c4 + dt - .8 *
			k4), Math.floor(bp + .25 * k4), Math.floor(.5 * k4)), cS.setTransform(1, 0, 0, 1, 0, 0))
	}
}
a82(), self.aiCommand746 = function(h2) {
	0 === h2 ? aIn() : 1 !== h2 || !b2 || 1 !== b2.id || b2.k2 < 14 || c9.aIo()
}, setTimeout(aIn, 1e4), window.onload = function() {
	aIn()
};