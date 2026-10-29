var a6I, h9, wC, aBH, aS, a57, a58, a3D, pW, pX, aGv, eF, eh, j, d0, nP, rK, c0, it, aLk, aLl, i0, qZ, bp, o0, a4a, bd, bn, oI, zv, tu, a4Y, gZ, j1, ey, en, eg, gN, f, nN, a0V, cb, cT, vu, aLm, cN, uJ, eA, a0h, a0U, gU, aZ, kI, pV, aLn, aLo, j0, bh,
	o1, bN, gh, a4Z, el, a4W, e7, aLp, a4X, a4d, aLq, a4f, a4b, uQ, bx, ib, bQ, bJ, bq, iG, a9R, iU, iP, pD, aCA, l3, hi, hu, n, d8, h1, j4, a0g, rR, v, aLr, f1, ee, tc, aH7, uY, mU, aLs, a55, j7, bT, hD, a8k, cH, cw, li, b4, rO, hk, br, ev, a0c,
	aLt, jl, jT, ly, cJ, a8I, nc, a1s, aVE, a9b, aVF, aVT, aVR, a9k, a9Z, ad4, a9a, ad5, ad6, ad7, aVD, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex",
		"hidden", "span", "1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
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
	function a6(aH, aI, aJ, l, x, aK) {
		if (!(aJ < 1 || x < aJ))
			for (var aL = 0; aL <= aI; aL++) {
				var e = n.aM(aH, aJ);
				if (l(e)) return e >> 2;
				aH += aK
			}
		return -1
	}

	function aB(aJ, aI, aH, l, u, aK) {
		if (!(aH < 1 || u < aH)) {
			aI = Math.max(aI, 0);
			for (var aL = 0; aL <= aI; aL++) {
				var e = n.aM(aH, aJ);
				if (l(e)) return e >> 2;
				aJ += aK
			}
		}
		return -1
	}

	function aF(a5, a7, c) {
		return -1 !== a7 && (-1 === a5 || n.aG(a7, c) < n.aG(a5, c)) ? a7 : a5
	}
	this.b = function(c) {
		return this.d(c, function(e) {
			return f.g(e)
		})
	}, this.h = function(c) {
		return this.d(c, function(e) {
			return f.i(e, j.k)
		})
	}, this.d = function(c, l) {
		return function(c, m, l) {
			for (var q = n.r(c), s = n.t(c), u = v.w - 2, x = v.y - 2, z = -1, a0 = 0; a0 < m; a0++) {
				var a1 = Math.max(q - a0, 1),
					a2 = Math.max(s - a0, 1),
					a3 = Math.min(q + a0, u),
					a4 = Math.min(s + a0, x),
					a5 = a6(q, a3 - q, s - a0, l, x, 1),
					a7 = a6(q - 1, q - a1 - 1, s - a0, l, x, -1),
					a3 = a6(q, a3 - q, s + a0, l, x, 1),
					a1 = a6(q - 1, q - a1 - 1, s + a0, l, x, -1),
					aA = aB(s, a4 - s - 1, q - a0, l, u, 1),
					aC = aB(s - 1, s - a2 - 2, q - a0, l, u, -1),
					a4 = aB(s, a4 - s - 1, q + a0, l, u, 1),
					a2 = aB(s - 1, s - a2 - 2, q + a0, l, u, -1);
				if (z = aF(z, a5, c), z = aF(z, a7, c), z = aF(z, a3, c), z = aF(z, a1, c), z = aF(z, aA, c), z = aF(z, aC, c), z = aF(z, a4, c), 0 <= (z = aF(z, a2, c)) && a0 * a0 >= n.aG(z, c)) return z
			}
			return -1
		}(c, n.o(), l)
	}
}

function aN() {
	this.aO = function() {
		for (var aP, aH, aQ, aR = aS, aT = v.aU, aV = v.w, aW = aV - 1, aX = v.y - 1, aY = 0, aJ = 1; aJ < aX; aJ++)
			for (aQ = aJ * aV, aH = 1; aH < aW; aH++) aT[aP = aQ + aH << 2] === aT[1 + aP] && aT[aP] === aT[2 + aP] && (aY++, aR[2 + aP] = 4);
		aZ.aa = aY
	}, this.ab = function(ac, ad) {
		for (var aR = aS, aV = v.w, aW = aV - 1, aX = v.y - 1, id = 0, aJ = 1; aJ < aX; aJ++)
			for (var aQ = aJ * aV, aH = 1; aH < aW; aH++) {
				var e = 2 + (aQ + aH << 2);
				aR[e] === ac && (! function(e, id, ac, ad) {
					var aI = 1,
						aR = aS,
						af = f.ag,
						ah = [e],
						ai = id >> 8 << 1,
						aj = 255 & id;
					aR[e - 2] = ai, aR[e - 1] = aj, aR[e] = 5;
					for (; aI;) {
						for (var ak = [], aL = 0; aL < aI; aL++)
							for (var al = ah[aL], a0 = 0; a0 < 8; a0++) {
								var am = al + af[a0];
								aR[am] === ac && (aR[am - 2] = ai, aR[am - 1] = aj, aR[am] = ad, ak.push(am))
							}
						aI = (ah = ak).length
					}
				}(e, id, ac, ad), id = (id + 1) % 32768)
			}
	}, this.an = function() {
		for (var aR = aS, aV = v.w, aW = aV - 3, aX = v.y - 3, aq = 12 * aV, aJ = 3; aJ < aX; aJ++)
			for (var aQ = aJ * aV, aH = 3; aH < aW; aH++) {
				var e = 2 + (aQ + aH << 2);
				2 !== aR[e] || 2 === aR[e - 12] && 2 === aR[12 + e] && 2 === aR[e - aq] && 2 === aR[e + aq] || (aR[e - 2] = 1 | aR[e - 2])
			}
	}
}

function ar() {
	var at, au, av, aw, ax, ay, az, b0, b1;

	function bm() {
		return bn.bo(bp.bg()) ? bh.bi ? __fx.settings.keybindButtons ? bn.aJ - 2 * bn.au - 3 * av : bn.aJ - bn.au - 2 * av : __fx.settings.keybindButtons ? bn.aJ - bn.au - 2 * av : bn.aJ - av : bq.bo(bp.bl()) ? bh.bi ? bq.bm() - bn.au - 2 * av : bq
			.bm() - av : bh.bi ? bN.au - bn.au - (br.bs() + 1) * av : bN.au - br.bs() * bT.gap
	}

	function bH(bv, bV, id, aP, bW, bX, bY, bZ, ba, bb, cD) {
		var aL, be, cE, cF, cG = void 0 !== ba,
			aV = Math.floor(bd.measureText(bV, bp.bP) + 1.5 * aw + (cG ? au : 1.5 * aw));
		if (cH.cI = !0, cD || cJ.cA(bV, ba), aV + 2 * av + bn.au > bN.aV && !cG && 50 !== id && 20 < bV.length) bH(bv, (cD = bQ.cL.cM(bV))[0], id, aP, bW, bX, bY, bZ, ba, bb, !0), bH(bv, cD[1], id, aP, bW, bX, bY, bZ, ba, bb, !0);
		else if (cD = aV + (50 === id ? ax : 0), (cE = document.createElement("canvas")).width = aV, cE.height = au, (be = cE.getContext("2d", {
				alpha: !0
			})).font = bp.bP, bQ.bR.textBaseline(be, 1), bQ.bR.textAlign(be, 0), be.clearRect(0, 0, aV, au), be.fillStyle = bX, be.fillRect(0, 0, aV, au), be.fillStyle = bW, be.fillText(bV, Math.floor(1.5 * aw), Math.floor(au / 2)), cG && (be
				.imageSmoothingEnabled = !0, cN.cO.cP(ba, be, aV - au, 0, au)), 0 === (cF = {
				bU: bv,
				bV: bV,
				id: id,
				player: aP,
				canvas: cE,
				bW: bW,
				bX: bX,
				aV: aV,
				bj: cD,
				bY: bY,
				bZ: bZ,
				ba: ba,
				bb: bb
			}).bU || 0 < at.length && 0 < at[0].bU) at.unshift(cF);
		else {
			for (aL = 1; aL < at.length; aL++)
				if (0 < at[aL].bU) return void at.splice(aL, 0, cF);
			at.push(cF)
		}
	}

	function bI(db, dc, c7) {
		return "rgb(" + db + "," + dc + "," + c7 + ")"
	}

	function cS(id, aY) {
		for (var aI = at.length, aL = 0; aL < aI; aL++) at[aL].id === id && aY-- <= 0 && (at.splice(aL, 1), aL--, aI--)
	}

	function cV(id, player) {
		for (var dg = !1, aL = at.length - 1; 0 <= aL; aL--) at[aL].id !== id || player !== j.cW && at[aL].player !== player || (at.splice(aL, 1), dg = !0);
		return dg
	}

	function ds(bV) {
		bH(340, bV, 6, 0, bI(215, 245, 255), bJ.bK, -1, !1)
	}
	this.b2 = "", this.b3 = function() {
		var self;
		b0 = 0, az = b4.b5.b6() ? 7 : 12, ay = {
				b7: [0, 0, 0],
				b8: [0, 0, 0],
				b9: [220, 180, 180],
				bA: [0, 0, 0],
				bB: [0, 0, 0]
			}, at = [], this.resize(), j.bC && this.bD(0, 18), v.dp.dq[v.dr].name.length && ds(L(42, [v.dp.dq[v.dr].name])), v.dp.dq[v.dr].dt && ds(L(43, [v.dp.dq[v.dr].dt])), ds(L(44, [v.w - 2 + "x" + (v.y - 2)])), ds(L(45, [bQ.cL.cs(aZ.du)])),
			aZ.du !== aZ.dv && ds(L(46, [bQ.cL.cs(aZ.dv) + " (" + bQ.cL.dw(100 * aZ.dv / aZ.du, 1) + ")"])), 0 < aZ.dx && ds(L(22, [bQ.cL.cs(aZ.dx) + " (" + bQ.cL.dw(100 * aZ.dx / aZ.du, 1) + ")"])), 0 < aZ.aa && ds(L(47, [bQ.cL.cs(aZ.aa) +
				" (" + bQ.cL.dw(100 * aZ.aa / aZ.du, 1) + ")"
			])), 10 === j.dy && bH(120, L(48), 6, 0, bI(235, 255, 120), bJ.bK, -1, !1), 0 !== (self = this).b2.length && (bH(200, self.b2, 0, 0, bJ.bL, bJ.bK, -1, !1), self.b2 = ""), j.bG && bH(340, L(0), 6, 0, bI(255, 200, 0), bJ.bK, -1, !1)
	}, this.resize = function() {
		var bM, aL;
		if (au = (au = Math.floor((b4.b5.b6() ? .031 : .0249) * bN.bO)) < 10 ? 10 : au, this.fontSize = Math.floor(2 * au / 3), this.bP = bQ.bR.bS(1, this.fontSize), av = bT.gap, aw = Math.floor(au / 5), 0 < at.length)
			for (bM = at, at = [], aL = bM.length - 1; 0 <= aL; aL--) bH(bM[aL].bU, bM[aL].bV, bM[aL].id, bM[aL].player, bM[aL].bW, bM[aL].bX, bM[aL].bY, bM[aL].bZ, bM[aL].ba, bM[aL].bb, !0);
		this.bc()
	}, this.bc = function() {
		b1 = document.createElement("canvas");
		var bV = L(1),
			be = (ax = bd.measureText(bV, this.bP) + 5 * aw, b1.height = au, b1.width = ax, b1.getContext("2d", {
				alpha: !0
			}));
		be.font = this.bP, bQ.bR.textBaseline(be, 1), bQ.bR.textAlign(be, 1), be.clearRect(0, 0, ax, au), be.fillStyle = bJ.bf, be.fillRect(0, 0, ax, au), be.fillStyle = bJ.bL, be.fillText(bV, Math.floor(ax / 2), Math.floor(au / 2))
	}, this.bg = function() {
		var aI;
		return bh.bi ? bh.aV : 0 === (aI = at.length) ? 0 : 1 === aI ? at[0].bj : bk(at[0].bj, at[1].bj)
	}, this.bl = function() {
		var aI = at.length;
		return bh.bi ? aI ? bk(bh.aV, at[0].bj) : bh.aV : 0 === aI ? 0 : 1 === aI ? at[0].bj : 2 === aI ? bk(at[0].bj, at[1].bj) : bk(bk(at[0].bj, at[1].bj), at[2].bj)
	}, this.bt = function(aH, aJ) {
		for (var c4, bu, bw = bm(), aL = at.length - 1; 0 <= aL; aL--)
			if ((bu = bw - (aL + 1) * au) <= aJ && aJ < bu + au) return 50 === at[aL].id ? aH >= bN.aV - ax - av - at[aL].aV && (aH >= bN.aV - ax - av ? bx.by.bz(at[aL].player) : c0.c1(at[aL].player, 800, !1, 0), !0) : aH >= bN.aV - at[aL].aV -
				av && (736 === at[aL].id ? window.open("https://" + at[aL].bV, "_blank") : at[aL].bZ && (at[aL].bb && at[aL].bb.c2 ? (bu = at[aL].bb.c3, c4 = n.r(bu) - 10, bu = n.t(bu) - 10, c0.c6(c4, bu, 19 + c4, 19 + bu)) : at[aL].bb && at[
					aL].bb.c7 ? c0.c8(at[aL].player, at[aL].bb.c9) : (c0.c1(at[aL].player, 800, !1, 0), 0 <= at[aL].bY && (c4 = at[aL].bY, at[aL].bY = at[aL].player, at[aL].player = c4))), !0);
		return !1
	}, this.cA = function(bv, bV, id, aP, bW, bX, bY, bZ, ba, bb) {
		bH(bv, bV, id, aP, bW, bX, bY, bZ, ba, bb)
	}, this.cB = function(cC) {
		bH(300, cC, 252, 0, bJ.bL, bJ.bK, -1, !1)
	}, this.cQ = function(id) {
		for (var aL = at.length - 1; 0 <= aL; aL--) at[aL].id === id && (at[aL].bU = 1)
	}, this.bD = function(player, id) {
		0 === id ? (bd.cR(player, 0), cS(423, 2), bH(160, L(2, [cT.cU[player]]), 423, player, "rgb(10,220,10)", bJ.bK, -1, !1)) : 1 === id ? (cV(50, j.cW), bd.cR(player, 1), bH(360, L(3, [cT.cU[player]]), 0, player, bJ.cX, bJ.bK, -1, !0), c0.c1(
			player, 2700, !1, 0)) : 2 === id ? (bd.cR(player, 2), bH(0, L(4), 0, player, "rgb(10,255,255)", bJ.bK, -1, !0), c0.c1(player, 2700, !1, 0)) : 3 === id ? (bd.cR(player, 2), bH(0, L(5, [cT.cU[player]]), 0, player, bJ.bL, bJ.bK, -1,
			!0), c0.c1(player, 2700, !1, 0)) : 4 === id ? this.cY(1, player, player) : 5 === id ? bQ.by.cZ(j.k) || (function(id, dH) {
			var aL, dI = 0,
				aI = at.length;
			for (aL = 0; aL < aI; aL++)
				if (at[aL].id === id && dH <= ++dI) return at.splice(aL, 1)
		}(1, 5), cb.cc(player) && bH(180, L(6, [cT.cU[player]]), 1, player, bI(255, 200, 180), bJ.bK, -1, !0), bQ.by.cd(player, 10) && (cS(573, 0), bH(180, L(7, [cT.cU[player]]), 573, player, bJ.cX, bJ.bK, -1, !0))) : 18 === id ? bH(255, L(
			8), 18, 0, bJ.bL, bJ.bK, -1, !1) : 21 === id ? bH(220, L(9), id, 0, bJ.bL, bJ.bK, -1, !1) : 22 === id ? this.cY(2, player, player) : 59 === id && bH(0, L(10), id, 0, bJ.ce, bJ.bK, 0, !1)
	}, this.cf = function(cC) {
		bH(200, L(11, [cC]), 94, 0, bJ.bL, bJ.cg, -1, !1)
	}, this.ch = function(ci) {
		if (j.k === ci && !j.iv && !j.cp)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			bH(0, "Your Win Count is now " + __fx.wins.count, 3, ci, bJ.bL, bJ.bK, -1, !0);
		cT.cj[ci] && (bd.cR(ci, 2), j.ck < 100 ? bH(0, L(5, [cT.cU[ci]]), 3, ci, bJ.bL, bJ.bK, -1, !0) : bH(0, L(12, [cT.cU[ci]]), 3, ci, bJ.bL, bJ.bK, -1, !0))
	}, this.cl = function(e) {
		var bV, cv, cm = "(" + n.r(e >> 2) + ", " + n.t(e >> 2) + ")",
			bZ = !1,
			player = 0;
		f.g(e) ? f.cn(e) ? cm = L(13, [cm]) : (player = f.co(e), j.cp && !1 === __fx.hoveringTooltip.active && (j.k = player), bV = L(14, [bQ.be.cq(cT.cr[player], bQ.bR.bS(0, 10), 150)]) + "   ", bV = (bV += L(15, [bQ.cL.cs(cT.ct[player])]) +
			"   ") + L(16, [bQ.cL.cs(cT.cj[player])]) + "   ", j.cu && (cv = cw.cx[cw.cy[cw.cz[player]]], bV += L(17) + ": " + cv + "   "), bQ.by.cZ(player) && (bV += L(18) + ": " + d0.d1[d0.d2[player]] + "   "), cm = bV = (bV += L(19, [
			player
		]) + "   ") + L(20, [cm]), bZ = !0) : cm = f.d3(e) ? L(21, [cm]) + "   #" + f.d4(e) : L(22, [cm]), cS(55, 0), bH(220, cm, 55, player, bJ.bL, bJ.bK, -1, bZ, void 0, void 0, !0)
	}, this.d5 = function(d6) {
		var d7 = d8.d9,
			player = d7.dA[d6] >> 3,
			bV = (cH.cI = !0, cS(55, 0), L(23, [cT.cU[player]]) + "   ");
		bH(220, bV += L(15, [bQ.cL.cs(d7.dB[d6])]), 55, player, bJ.bL, bJ.bK, -1, !0)
	}, this.dC = function(dD, dE, dF) {
		dD === j.k ? bH(175, " " + L(24, [cT.cU[dE]]) + ": ", 1001, dE, bI(200, 255, 210), bJ.bK, -1, !0, dF) : this.dG(dD, dF)
	}, this.dG = function(dD, dF) {
		cS(1e3, 0), bH(175, cT.cU[dD] + ": ", 1e3, dD, bJ.bL, "rgba(5,60,25,0.9)", -1, !0, dF)
	}, this.dJ = function() {
		var cC;
		j.dK ? (cC = L(25), bd.dL(L(26), 2, 1, 12), bH(0, cC, 40, 0, "rgb(10,220,10)", bJ.bK, -1, !1)) : (cC = L(27), bd.dL(L(28), 2, 0, 16), bH(0, cC, 41, 0, bJ.bL, bJ.bK, -1, !1))
	}, this.dM = function() {
		var aY = cT.cU,
			a0 = j.data;
		bH(300, aY[0] + " [" + j.dN.dO(a0.elo[0]) + "] vs " + aY[1] + " [" + j.dN.dO(a0.elo[1]) + "]", 65, 0, bJ.dP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.dQ = function(cC) {
		bH(350, cC, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.dR = function(dS) {
		bH(0, L(dS ? 29 : 30), 247, 0, bJ.dT, bJ.bK, -1, !1)
	}, this.dU = function(dV, dW, dX) {
		var a0 = j.data,
			aY = cT.cU;
		bH(0, aY[0] + ": " + j.dN.dO(a0.elo[0]) + " -> " + dV, 66, 0, bJ.bL, dX[0], -1, !1), bH(0, aY[1] + ": " + j.dN.dO(a0.elo[1]) + " -> " + dW, 66, 1, bJ.bL, dX[1], -1, !1)
	}, this.dY = function(player, id) {
		0 === id ? cV(50, player) ? (bH(128, L(31, [cT.cU[player]]), 52, player, bI(180, 255, 180), bJ.bK, -1, !0), cb.dZ(player, 2, 255)) : bH(384, L(32, [cT.cU[player]]), 51, player, bI(210, 210, 255), bJ.bK, -1, !0) : cV(51, player) ? (bH(128,
			L(33, [cT.cU[player]]), 52, player, bJ.bL, "rgba(60,120,10,0.9)", -1, !0), cb.dZ(player, 2, 255)) : (bH(384, L(34, [cT.cU[player]]), 50, player, bJ.bL, "rgba(90,90,90,0.9)", -1, !0), cb.dZ(player, 2, 96))
	}, this.da = function(b7, target) {
		var color = bI(210, 255, 210);
		1 < b7.length ? bH(230, L(35, [b7.length, cT.cU[target]]), 66, target, color, bJ.bK, -1, !0) : bH(230, L(36, [cT.cU[b7[0]], cT.cU[target]]), 66, b7[0], color, bJ.bK, target, !0)
	}, this.dd = function(player, target) {
		bH(230, L(37, [cT.cU[player], cT.cU[target]]), 66, player, bJ.bL, "rgba(75,65,5,0.9)", target, !0)
	}, this.de = function(id, aY) {
		cS(id, aY)
	}, this.df = function(id, player) {
		cV(id, void 0 === player ? j.cW : player)
	}, this.dh = function(id) {
		for (var aL = at.length - 1; 0 <= aL; aL--)
			if (at[aL].id === id) return at[aL];
		return null
	}, this.di = function(dj, dk, player) {
		2 !== cT.dl[j.k] && bH(200, 1 === dj ? L(38, [cT.cU[player]]) : L(39, [bQ.cL.cs(dj), cT.cU[player]]), 30, player, "rgb(190,255,190)", bJ.bK, -1, !0)
	}, this.dn = function(dj, player) {
		2 !== cT.dl[j.k] && (cS(31, 0), dj = " (" + bQ.cL.cs(dj) + ") 💸", bH(150, dj = bQ.by.cZ(player) ? L(40) + dj : L(41, [cT.cU[player]]) + dj, 31, player, bJ.dP, "rgba(205,205,205,0.9)", -1, !0))
	}, this.dz = function(e0) {
		for (var bB = cH.e1(), aL = 2; 0 <= aL; aL--) 0 < ay.bA[aL] && (e0 || ay.bB[aL] < bB - 220) && this.e2(aL)
	}, this.e2 = function(id) {
		var bV, aI = ay.bA[id],
			player = ay.b7[id];
		ay.bA[id] = 0, 1 === aI ? (0 === id ? bV = L(49, [cT.cU[player], cT.cU[ay.b8[0]]]) : 1 === id ? bV = L(50, [cT.cU[player]]) : 2 === id ? bV = L(51, [cT.cU[player]]) : 3 === id && (bV = L(52, [cT.cU[player]])), cS(7, 0), bH(ay.b9[id], bV,
			7, ay.b8[id], bJ.bL, bJ.bK, -1, !0)) : (bV = L(0 === id ? 53 : 1 === id ? 54 : 55, [aI]), cS(7, 0), bH(ay.b9[id], bV, 7, player, bJ.bL, bJ.bK, -1, !1))
	}, this.cY = function(id, e3, bY) {
		var bB = cH.e1(),
			aI = ay.bA[id] + 1;
		ay.bA[id]++, ay.b7[id] = e3, ay.b8[id] = bY, 1 === aI && (ay.bB[id] = bB), (1 === aI && (j.e4 < 32 || 2 === j.e5) || 1 < aI && (ay.bB[id] < bB - 140 || 2 === j.e5)) && this.e2(id)
	}, this.e6 = function() {
		e7.e6();
		for (var e8 = (e8 = at.length - az) <= 1 ? 1 : e8 * e8, aL = at.length - 1; 0 <= aL; aL--) 0 < at[aL].bU && (at[aL].bU -= e8, at[aL].bU <= 0) && (cH.cI = !0, at.splice(aL, 1));
		! function() {
			var aY, aL;
			if (128 !== b0 && !(++b0 < 128))
				for (aY = 5, aL = eA.eB - 1; 0 <= aL; aL--) 1 === cT.dl[eA.eC[aL]] && 0 < aY-- && bH(240, L(52, [cT.cU[eA.eC[aL]]]), 1, eA.eC[aL], bJ.dP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.dz(!1)
	}, this.eD = function() {
		for (var eE, aJ = bm(), aL = at.length - 1; 0 <= aL; aL--) eE = aJ - (aL + 1) * au, 50 === at[aL].id ? (eF.drawImage(at[aL].canvas, bN.aV - at[aL].aV - ax - av, eE), eF.drawImage(b1, bN.aV - ax - av, eE)) : eF.drawImage(at[aL].canvas, bN
			.aV - at[aL].aV - av, eE)
	}, this.eG = function(id, d2) {
		var cm, eH = bJ.eI;
		0 === id ? cm = L(56) : 1 === id ? (cm = L(57), eH = bJ.eJ) : 2 === id ? cm = L(58) : 3 === id ? cm = L(59) : (cm = bQ.cL.cs(d2), eH = 5 === id ? bJ.eJ : bJ.bK), cS(74, 0), bH(0, cm, 74, 0, bJ.bL, eH, -1, !1, void 0, void 0, !0)
	}
}

function eK() {
	var eL, eM, eN, eO, eP, eQ, eR, eS, eT, eU, eV, eW, eX, eY = 1,
		eZ = 0,
		ea = 0;

	function ej(ek) {
		ek ? eX = (eX + 1) % el.d9.em : (el.d9.close(eX, 3280), eY ? eY = 0 : (ea = 1 - ea, 0 === (eZ = (eZ + 1) % 2) && (eX = (eX + 1) % el.d9.em, el.d9.close(eX, 3280)))), eW = cH.bU, en.ed = ea, el.d9.eo(eX, 4, 1) && el.ep.eq(eX)
	}

	function et() {
		if (0 !== eX) return 1 === eX && __fx.customLobby.isActive() ? (ev.ew(3249), __fx.customLobby.setActive(!1)) : void ej();
		ev.ew(3249)
	}

	function fB(aJ, f9, fA) {
		var c4 = Math.floor((bN.aV - eO) / 2) + eR,
			fE = c4 + Math.floor(fA * (eO - 2 * eR));
		eF.lineWidth = f9, eF.beginPath(), eF.moveTo(c4, aJ), eF.lineTo(fE, aJ), eF.lineTo(Math.floor(c4 - eR + fA * eO), aJ + eN), eF.lineTo(c4 - eR, aJ + eN), eF.closePath()
	}
	this.eb = 1, this.ec = 0, this.ed = 0, this.b3 = function() {
		ee.turnstile.ef(), eg.setState(6), eL = 0, eM = 1, eS = "rgba(0,220,120,0.4)", eT = "rgba(0,0,0,0.8)", this.resize(), cH.cI = !0, eY = 1, eZ = 0, eX = this.eb - 1, ea = 0 === this.ec ? eh.ei ? 1 : 0 : this.ec - 1, ej(1)
	}, this.resize = function() {
		eO = Math.floor((b4.b5.b6() ? .5 : .25) * bN.bO), eP = eO + 12, eN = Math.floor(.125 * eO), eR = 3 * eN, eQ = Math.floor(.225 * eO), eV = Math.floor(.3 * eN), eU = bQ.bR.bS(0, eV)
	}, this.er = function(es) {
		es === eX && et()
	}, this.bt = function(aH, aJ) {
		var c4 = Math.floor((bN.aV - eP) / 2),
			c5 = Math.floor(.5 * (bN.au - bT.gap - eN - eQ)) + eN + bT.gap;
		return c4 < aH && aH < c4 + eP && c5 < aJ && aJ < c5 + eQ && (this.ex(), ey.ez(aH, aJ, !1), !0)
	}, this.ex = function() {
		el.d9.f0(3260), __fx.customLobby.setActive(false), f1.d9.f2()
	}, this.e6 = function() {
		6 === eg.f3() && (cH.bU > eW + 12e3 && et(), 100 < (eL += .07 * eM * (eL < 16 ? 5 + eL : 84 < eL ? 105 - eL : 17)) ? (eL = 100, eM = -1) : eL < 0 && (eL = 0, eM = 1), eS = "rgba(0," + Math.floor(190 - 1.9 * eL) + "," + Math.floor(120 -
			1.2 * eL) + "," + (.4 + .004 * eL) + ")", eT = "rgba(0," + Math.floor(1.9 * eL) + "," + Math.floor(1.2 * eL) + "," + (.8 - .004 * eL) + ")", cH.cI = !0)
	}, this.eD = function() {
		var aH = Math.floor((bN.aV - eP) / 2),
			aJ = Math.floor(.5 * (bN.au - bT.gap - eN - eQ));
		! function(title, aJ, f9, fA) {
			eF.fillStyle = eT, fB(aJ, f9, 1), eF.fill(), eF.fillStyle = eS, fB(aJ, f9, fA), eF.fill(), eF.strokeStyle = bJ.bL, fB(aJ, f9, 1), eF.stroke(),
				function(fD, aJ) {
					bQ.bR.textAlign(eF, 1), bQ.bR.textBaseline(eF, 1), eF.font = eU, eF.fillStyle = bJ.bL, eF.fillText(fD, Math.floor(.5 * bN.aV), Math.floor(aJ + .58 * eN))
				}(title, aJ)
		}(L(60), aJ, 3, eL / 100),
		function(aH, aJ, aV, au, f7) {
			eF.fillStyle = bJ.f8, eF.fillRect(aH, aJ, aV, au), eF.lineWidth = 3, eF.strokeStyle = bJ.bL, eF.strokeRect(aH, aJ, aV, au);
			var aI = Math.floor(.3 * au);
			bQ.bR.textAlign(eF, 1), bQ.bR.textBaseline(eF, 1), eF.font = bQ.bR.bS(0, aI), eF.fillStyle = bJ.bL, eF.fillText(f7, Math.floor(aH + aV / 2), Math.floor(aJ + au / 2 + .1 * aI))
		}(aH, aJ + eN + bT.gap, eP, eQ, L(61))
	}
}

function fF() {
	var fK, fL, fG = "",
		fH = 0,
		fI = 0,
		fJ = -1,
		fM = ["Team", "Zombie", "BR", "1v1"];

	function fN() {
		for (var bv = new Date, fO = bv.getUTCMinutes(), bv = bv.getUTCSeconds(), fQ = [], fR = 0, aL = 0; aL < 6; aL++) fQ.push(fR), fQ.push(fR + 2), fQ.push(fR + 5), fQ.push(fR + 7), fR += 10;
		for (var aI = fQ.length, aL = 1; aL < aI && !(fO < fQ[aL]); aL++);
		aL %= aI;
		bv = (fQ[0] = 60) * (fQ[aL] - fO) - bv;
		return bv !== fJ && (fG = fM[aL % 4] + " " + fL + ": " + fT(Math.floor(bv / 60)) + ":" + fT(bv % 60), fJ = bv, fH = bd.measureText(fG, fK), fH += Math.floor(.4 * fI), 1)
	}

	function fT(fU) {
		return fU < 10 ? "0" + fU : String(fU)
	}
	this.b3 = function() {
		fL = L(62)
	}, this.resize = function() {
		fH = Math.floor((b4.b5.b6() ? .53 : .36) * bN.bO), fI = Math.floor(.065 * fH), fK = bQ.bR.bS(1, Math.floor(.9 * fI)), fJ += 1e3, fN()
	}, this.e6 = function() {
		fN() && (cH.cI = !0)
	}, this.eD = function(aJ) {
		eF.lineWidth = 1 + Math.floor(fI / 15), eF.translate(bN.aV - fI, aJ + fH), eF.rotate(-Math.PI / 2), eF.fillStyle = bJ.bL, eF.fillRect(0, 0, fH, fI), eF.strokeStyle = bJ.dP, eF.strokeRect(0, 0, fH, fI + 10), eF.fillStyle = bJ.dP, eF.font =
			fK, bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 1), eF.fillText(fG, Math.floor(fH / 2), Math.floor(.59 * fI)), eF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function fV() {
	this.fW = new fX, this.fY = new fZ, this.fa = new fb, this.performance = new fc, this.fd = new fe, this.ff = new fg, this.fh = new fi, this.fj = new fk, this.fl = new fm, this.b3 = function() {
		this.fW.b3(), this.fa.b3(), this.performance.b3(), this.fd.b3(), this.ff.b3()
	}, this.e6 = function() {
		this.performance.e6(), this.fW.e6(), this.fa.fn()
	}
}

function fo() {
	var fu, fv, fp = document.createElement("div"),
		fq = document.createElement("div"),
		fr = document.createElement("div"),
		fs = document.createElement("div"),
		ft = [],
		fM = [L(63), L(64), L(65), L(66), L(67), L(68), L(69), L(70)],
		fw = [1, 2, 3, 0, 9, 10, 11, 13];

	function g1(aL) {
		f1.g9(8, 0, new gA(21, {
			gB: fw[aL],
			gC: 0,
			gD: 10
		}))
	}
	this.show = function() {
			this.gE(f1.d9.gF), document.body.appendChild(fp)
		}, this.gG = function() {
			f1.removeChild(document.body, fp)
		}, this.gE = function(gF) {
			for (var gH = [3, 0, 1, 2, 4, 5, 6, 7], aL = 0; aL < ft.length; aL++) {
				var aV = gF[aL];
				fu[gH[aL]][1].gI.textContent = aV || ""
			}
		}, this.resize = function() {
			var aL, dc = bT.gap,
				au = bQ.bR.gJ(.085),
				aV = Math.min(4 * au, bN.aV - 2 * dc),
				aI = ft.length;
			for (bQ.bR.gK(fp, dc, bN.au - dc - au, aV, au), bQ.bR.gL(fp), bQ.bR.gL(fq, 6), aL = 0; aL < aI - 1; aL++) bQ.bR.gL(ft[aL].button, 6);
			for (aL = 0; aL < aI; aL++) fu[aL][0].resize(), fu[aL][1].resize();
			for (ft[0].aH = 0, ft[0].button.style.left = bQ.bR.fy(ft[0].aH), ft[0].button.style.width = bQ.bR.gM(1.7 * au), aL = 1; aL < aI; aL++) ft[aL].aH = ft[aL - 1].aH + ft[aL - 1].button.offsetWidth, ft[aL].button.style.left = bQ.bR.fy(ft[aL]
				.aH);
			if (!fv) {
				if (!gN.gO()) return;
				(fv = gN.get(14)).style.width = "24%", fv.style.position = "absolute", fq.appendChild(fv)
			}
			fv.style.left = bQ.bR.fy(0), fv.style.top = "7%", fr.gP && (fr.scrollLeft = fr.gP)
		}, fp.style.position = "absolute", fq.style.width = "25%", fq.style.height = "100%", fq.style.backgroundColor = bJ.fx, fr.style.position = "absolute", fr.style.width = "75%", fr.style.height = "100%", fr.style.backgroundColor = bJ.fx, fr
		.style.top = fr.style.right = bQ.bR.fy(0), bQ.bR.fz(fr), fs.style.height = fs.style.maxHeight = "100%", ft.push(new g0("", function() {
			g1(0)
		}, bJ.g2)), ft.push(new g0("", function() {
			g1(1)
		}, bJ.g3)), ft.push(new g0("", function() {
			g1(2)
		}, bJ.g4)), ft.push(new g0("", function() {
			g1(3)
		}, bJ.g5)), ft.push(new g0("", function() {
			g1(4)
		}, bJ.g6)), ft.push(new g0("", function() {
			g1(5)
		}, bJ.g7)), ft.push(new g0("", function() {
			g1(6)
		}, bJ.g6)), ft.push(new g0("", function() {
			g1(7)
		}, bJ.dP)), fu = new Array(ft.length);
	for (var aL = 0; aL < ft.length; aL++) ft[aL].button.style.position = "absolute", fu[aL] = [new g8(fM[aL], ft[aL].button, .25, .45), new g8("", ft[aL].button, .53, .84, 1)], ft[aL].button.style.height = ft[aL].button.style.maxHeight = "100%", ft[
		aL].button.top = bQ.bR.fy(0), fs.appendChild(ft[aL].button);
	fr.appendChild(fs), fp.appendChild(fq), fp.appendChild(fr)
}

function gQ() {
	this.e6 = function(player) {
		return !!d8.gR.gS(player) && !(d8.d9.gT[player] >= Math.max(3 * gU.performance.gV, d0.gW[d0.d2[player]]) || !bQ.by.gX(player, d0.gY[d0.d2[player]], 32, 0)) && (gZ.ga() ? function(player) {
			var gd = d8.ge.gf(),
				aI = gd.length;
			if (0 === aI) return !1;
			gd = gd[gh.gi(aI)], aI = d8.d9.gj[gd];
			if (d8.gk.gl(player, aI)) return !1;
			return !! function(player, gg) {
				var gg = n.gs(d8.d9.gt[gg]),
					q = n.r(gg),
					gg = n.t(gg),
					c4 = cT.gu[player],
					c5 = cT.gv[player],
					fE = cT.gw[player],
					player = cT.gy[player],
					fE = Math.max(q - fE, c4 - q),
					c4 = Math.max(gg - player, c5 - gg);
				return fE < 100 && c4 < 100
			}(player, gd) && !!d8.gn.go(player, aI, 1) && (bQ.by.gp(player), d8.d9.gq(player), !0)
		}(player) : !!(gU.fj.e6(player) || gU.fY.e6(player) || gU.fa.e6(player)) && (function(player) {
			h1.h2[1] = 4, bQ.by.gp(player), d8.d9.gq(player)
		}(player), !0))
	}
}

function h3() {
	var h4, h5, h6;

	function hA(dH) {
		for (var aL = h4 - 1; 0 <= aL; aL--) 0 === h6[h5[aL]] && cT.cj[h5[aL]] >= dH && h8(h5[aL])
	}

	function h7(player) {
		var bv;
		64 === h6[player] ? h6[player] = 6 : (bv = cT.cj[player], h6[player] = bv < 1e3 ? 3 : bv < 1e4 ? 2 : bv < 6e4 ? 1 : 0)
	}
	this.b3 = function() {
		h4 = 0, h5 = new Uint16Array(j.cW), h6 = new Uint8Array(j.cW)
	}, this.e6 = function() {
		for (var aL = h4 - 1; 0 <= aL; aL--) 64 === h6[h5[aL]] ? h7(h5[aL]) : 0 == h6[h5[aL]]-- && (h7(h5[aL]), h8(h5[aL]));
		16e4 <= cT.cj[h9[0]] && (hA(16e4), 3e5 <= cT.cj[h9[0]]) && hA(3e5), bQ.by.hC(j.k) && (hD.hE[7] = Math.max(cT.cj[j.k], hD.hE[7]))
	}, this.hF = function(player) {
		for (var c2, aL = h4 - 1; 0 <= aL; aL--)
			if (player === h5[aL]) {
				for (h4--, c2 = aL; c2 < h4; c2++) h5[c2] = h5[c2 + 1];
				return
			}
	}, this.hG = function(player, hH) {
		for (var aL = h4 - 1; 0 <= aL; aL--)
			if (player === h5[aL]) return;
		h5[h4++] = player, h6[player] = hH ? 2 : 64
	}
}

function hI() {
	this.bi = !1;
	this.hN = [], this.hO = 100;
	var c4, c5, gap, hJ, hK, hM, hP = 0,
		hQ = new Array(9),
		hR = [],
		hS = [],
		hT = 0,
		hU = 0,
		hV = 0,
		hW = 0;

	function hp() {
		hQ.sort(function(c2, c7) {
			return c7.hl - c2.hl
		});
		for (var bV = "" + hQ[0].dF, aL = 1; aL < 9; aL++) bV += "," + hQ[aL].dF;
		for (aL = 0; aL < 9; aL++) bV += "," + hQ[aL].hl;
		hk.buffer.hq(120, bV)
	}
	this.b3 = function() {
		for (var hX = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aL = 0; aL < hX.length; aL++) {
			var color = 6 === hX[aL] ? bJ.hY : bJ.hZ;
			this.hN.push(bQ.canvas.ha(gN.get(3), hX[aL], color))
		}
		for (aL = 0; aL < cN.hb.hc; aL++) hS.push(cN.hb.hd - cN.hb.hc + aL);
		for (aL = 0; aL < cN.hb.he; aL++) hS.push(cN.hb.hf + aL);
		var hg = cN.hb.hh(hi.hg);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = hg.slice(), aL = 0; aL < hg.length; aL++) hS.push(hg[aL]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					hQ[q] = {
						dF: isNaN(qcode) ? 1015 + q : qcode,
						hl: 0
					}
				} else {
					var aL, cK = hk.buffer.data[120].value.split(",");
					if (18 !== cK.length)
						for (aL = 0; aL < 9; aL++) hQ[aL] = {
							dF: 1015 + aL,
							hl: 0
						};
					else
						for (aL = 0; aL < 9; aL++) {
							var hm = parseInt(cK[aL]),
								bB = (hm = 0 <= hm && hm < cN.hb.hd ? hm : 0, parseInt(cK[aL + 9]));
							bB = 0 <= bB && bB < 1e3 ? bB : 0, hQ[aL] = {
								dF: hm,
								hl: bB
							}
						}
				}
		}()
	}, this.show = function(hr, hs, ht) {
		var aL;
		if (hT = hr, hU = hs, hP = ht || 0, this.bi = !0, hR = [], 0 === hP)
			for (aL = 0; aL < 9; aL++) hR.push(hQ[aL].dF);
		else {
			var c7 = 49 * hP,
				ht = c7 - 49;
			for (ht >= hS.length && (hP = 1, ht = 0, c7 = 49), aL = ht = (c7 = Math.min(c7, hS.length)) - 49; aL < c7; aL++) hR.push(hS[aL])
		}
		hR.push(1024);
		ht = hR.length, hJ = Math.floor((b4.b5.b6() ? .075 : .0468) * bN.bO), gap = Math.floor(hJ / 3), (hV = 10 * (hK = hJ + gap)) > bN.aV && (hV = bN.aV, gap = (hK = hV / 10) - (hJ = 3 * hK / 4)), hM = hu.hv(ht, 10) + !!(ht % 10), (hW = hM *
			hK) > bN.au && (hW = bN.au, gap = (hK = hW / hM) - (hJ = 3 * hK / 4)), ht = .5 * gap;
		c4 = Math.min(Math.max(hr - .5 * hV + ht, ht), bN.aV - hV + ht), c5 = Math.min(Math.max(hs - .5 * hW + ht, ht), bN.au - hW + ht)
	}, this.bt = function(hr, hs, player) {
		if (!this.bi) return !1;
		if (this.hx(hr, hs)) {
			hr = hu.hz(hu.hv(hr - c4 + .5 * gap, hK), 0, 9);
			if ((hr += 10 * hu.hz(hu.hv(hs - c5 + .5 * gap, hK), 0, 9)) >= hR.length) return i0.gG(), !0;
			hs = hR[hr];
			if (1024 === hs) return this.show(hT, hU, hP + 1), !0;
			! function(dF) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aL = 0; aL < 9; aL++) hQ[aL].hl = Math.floor(.99 * hQ[aL].hl);
					for (aL = 0; aL < 9; aL++)
						if (dF === hQ[aL].dF) return hQ[aL].hl = Math.min(hQ[aL].hl + 30, 999), hp();
					hQ.splice(5, 0, {
						dF: dF,
						hl: Math.max(hQ[4].hl, 30)
					}), hQ.pop(), hp()
				}
			}(hs), player === j.k ? bx.i1.dC(hs) : bx.by.i2(hs, player)
		}
		return i0.gG(), !0
	}, this.hx = function(hr, hs) {
		return !(hr < c4 - .5 * gap || hs < c5 - .5 * gap || c4 + hV - .5 * gap <= hr || c5 + hW - .5 * gap <= hs)
	}, this.eD = function() {
		eF.fillStyle = bJ.bK, eF.fillRect(c4 - .5 * gap, c5 - .5 * gap, hV, hW);
		for (var i3 = .5 * bT.i4, aI = (eF.lineWidth = bT.i4, eF.strokeStyle = eF.fillStyle = bJ.bL, eF.strokeRect(c4 - .5 * gap + i3, c5 - .5 * gap + i3, hV - 2 * i3, hW - 2 * i3), eF.imageSmoothingEnabled = !0, hR.length), aL = 0; aL <
			aI; aL++) this.cP(hR[aL], eF, c4 + aL % 10 * hK, c5 + hu.hv(aL, 10) * hK, hJ);
		eF.imageSmoothingEnabled = !1
	}, this.cP = function(dF, i5, aH, aJ, hJ) {
		var e;
		dF >= 1024 - cN.hb.hc ? (e = hJ / this.hO, i5.setTransform(e, 0, 0, e, aH, aJ), i5.drawImage(this.hN[dF - 1024 + cN.hb.hc], 0, 0), i5.setTransform(1, 0, 0, 1, 0, 0)) : (bQ.bR.textAlign(i5, 1), bQ.bR.textBaseline(i5, 1), i5.font = bQ.bR
			.bS(0, .89 * hJ), i5.fillText(cN.hb.i6(dF), aH + .5 * hJ, aJ + (.35 - bQ.bR.i7 + .56) * hJ))
	}
}

function i8() {
	this.size = 0, this.hy = 0, this.i9 = null, this.b3 = function(i9) {
		this.hy = 0, this.i9 = i9, this.size = i9.length
	}, this.iA = function() {
		this.i9 = null
	}, this.iB = function(size) {
		for (var hm = 0, i9 = this.i9, iC = this.hy + size - 1, aL = this.hy; aL <= iC; aL++) hm |= (i9[aL >> 3] >> 7 - (7 & aL) & 1) << iC - aL;
		return this.hy += size, this.hy > 8 * this.size && console.error("Unwrapper Overflow"), hm
	}, this.iD = function(size) {
		var c7 = size >> 1;
		return (1 << c7) * this.iB(size - c7) + this.iB(c7)
	}, this.iE = function(iF) {
		return this.size === iG.iH(iF)
	}, this.iI = function(iJ, iK, iL) {
		var aY = this.iB(iJ);
		if (!aY) return null;
		for (var iJ = Math.max(aY, iL), cK = new(iK <= 8 ? Uint8Array : iK <= 16 ? Uint16Array : Uint32Array)(iJ), aL = 0; aL < aY; aL++) cK[aL] = this.iB(iK);
		iL = cK[aY - 1];
		return iL && cK.fill(iL, aY), cK
	}, this.iM = function(iJ, iN, iL) {
		var aY = this.iB(iJ);
		if (!aY) return null;
		for (var iJ = Math.max(aY, iL), cK = new Array(iJ), aL = 0; aL < aY; aL++) cK[aL] = this.iO(iN);
		return cK.fill(cK[aY - 1], aY), cK
	}, this.iO = function(iJ) {
		return iP.iQ.iR(this.iB(iJ))
	}, this.iS = function() {
		var iT = this.iB(30);
		if (!(6 * iT > 8 * this.size - this.hy)) {
			var bV = iU.iV.iW(iU.iV.iX(iT)),
				bV = bQ.cL.iY(bV, "_", "/");
			bV = bQ.cL.iY(bV, "-", "+");
			for (var iZ = "";
				(bV.length + iZ.length) % 4;) iZ += "=";
			bV = "data:image/png;base64," + bV + iZ;
			var ia = new Image;
			ia.onload = function() {
				ib.ic.ie(ia), ia.onload = null, ia = null
			}, ia.src = bV
		}
	}
}

function ig() {
	this.l = new ih, this.result = new ii, this.ij = new ik, this.il = new im, this.io = new ip, this.iq = new ir, this.b3 = function() {
		this.result.b3()
	}
}

function is() {
	this.cR = function(player, c3) {
		it.iu(player, n.r(c3), n.t(c3)) && (cH.cI = !0), j.iv && this.e6()
	}, this.e6 = function() {
		j.bC = !1;
		for (var aL = 0; aL < j.ck; aL++) 0 !== cT.iw[aL] && 0 === cT.cj[aL] && it.ix(aL);
		0 !== cT.iw[j.k] ? (hD.hE[7] = cT.cj[j.k], hD.hE[8] = cT.ct[j.k], bn.iy(), gZ.iz(), j.cp || c0.c6(cT.gu[j.k] - 5, cT.gv[j.k] - 5, cT.gw[j.k] + 5, cT.gy[j.k] + 5), j0.b3()) : j1.show(!1, !1, !1, !0), bp.cQ(18), cb.j2(), cb.j3(!0), j4.d9
			.j5(), i0.gG(), j.j6 = null, j7.j8 = !0, j7.j9(), j.iv && b4.b5.setState(1)
	}
}

function jA() {
	var jB = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		jC = [bJ.jD, bJ.jD, bJ.jE, bJ.jF, bJ.jG, bJ.jH, bJ.jI, bJ.jE, bJ.jJ, bJ.dT, bJ.jK, bJ.dP],
		jL = [
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
		jM = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function jz(k0, jQ, k2) {
		for (var c7 = k0.length - 1; 0 <= c7; c7--) {
			var cF = k0[c7];
			0 === cF.id && cF.jQ === jQ && (cF.cC = "[Redacted Message]", k2) && (cF.k3 = 1)
		}
	}
	this.jN = function(jO) {
		var jP, jR;
		return jO.id < 5 && (jP = "@" + iU.iV.cs(jO.jQ, 5)), 0 === jO.id ? jP + ": " + jO.cC : 1 === jO.id ? (jR = "@" + iU.iV.cs(jO.target, 5), 0 === jO.jS ? 32768 <= jO.value ? jP + " voted with " + (jO.value - 32768 + 1) + " gold against " +
				jR + " to weaken the latter's admin position. 📉" : jP + " voted with " + (jO.value + 1) + " gold for " + jR + " to strengthen the latter's admin position. 💪" : 1 === jO.jS ? jP + " sent " + Math.floor(jO.value / 100) +
				" 🧈 gold to " + jR + "." : jP + " voted with " + (jO.value / 10).toFixed(1) + " points for " + jR + " to acknowledge the latter as clan leader. ✅") : 2 === jO.id ? 0 === jO.jS ? jP + " was 🔇 muted for 1 Hour." : 1 === jO.jS ?
			"The username of " + jP + " was ✂️ redacted. Duration: 1 Day" : jP + " 👢 was kicked." : 3 === jO.id ? jP + jT.jU(jO.jS, jT.jV[jO.jS][jO.value]) + "@" + iU.iV.cs(jO.target, 5) + jT.jW(jO.jS, jT.jV[jO.jS][jO.value]) : 4 === jO.id ?
			jP + jT.jU(5, jT.jV[5][jO.jS]) + "@" + iU.iV.cs(jO.target, 5) + jT.jW(5, jT.jV[5][jO.jS]) : 5 === jO.id ? jM[jO.jS] : 6 === jO.id ? "You are about to mention " + jO.value + " player" + (1 === jO.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * jO.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === jO.id ? jO.cC : void 0
	}, this.jX = function(jO, f7) {
		return {
			jO: jO,
			cC: f7,
			jY: 0,
			fontSize: 1,
			jZ: 0,
			ja: jO.id ? bJ.jb : bJ.bL
		}
	}, this.jc = function(player, jd) {
		return (2 === jd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.je = function(jf) {
		return jC[jf]
	}, this.jg = function(jf, jh) {
		return jf < 3 || 7 === jf ? jL[jf][0] : 4 === jf ? jL[jf][jh < 1 ? 0 : jh < 10 ? 1 : 2] : jL[jf][jh < 10 ? 0 : 1]
	}, this.ji = function(jh) {
		return 0 === jh
	}, this.jj = function(jd, jQ) {
		for (var jk = jl.jm.jk, jm = jk[jd], aI = jm.length, aL = 0; aL < aI; aL++)
			if (jQ === jm[aL].jQ) return jm[aL];
		for (var c7 = 0; c7 < jk.length; c7++)
			if (jd !== c7)
				for (aI = (jm = jk[c7]).length, aL = 0; aL < aI; aL++)
					if (jQ === jm[aL].jQ) return jm[aL];
		return null
	}, this.jn = function(cF) {
		return !!jl.jo && cF.jQ === jl.jo.jQ
	}, this.jp = function(jm, jq, jr) {
		var js = [];
		loop: for (var aL = jq; aL < jr; aL++) {
			var jt = bQ.cL.ju(jm[aL].username);
			if (jt) {
				for (var c7 = js.length - 1; 0 <= c7; c7--)
					if (jt === js[c7].name) {
						js[c7].aY++;
						continue loop
					} js.push({
					name: jt,
					aY: 1
				})
			}
		}
		if (js.sort(function(c2, c7) {
				return c7.aY - c2.aY
			}), 0 === js.length) return "";
		for (var bV = js[0].name + ": " + js[0].aY, aL = 1; aL < js.length; aL++) bV += "   " + js[aL].name + ": " + js[aL].aY;
		return bV
	}, this.jv = function(jf, jh, jw) {
		return 0 === jB[jf].length ? "Rank: " + (jh + 1) : jB[jf] + " Rank: " + (jh + 1) + (3 !== jf && jw < 100 ? "   " + jB[3] + " Rank: " + (jw + 1) : "")
	}, this.jx = function(jQ) {
		for (var jy = jl.d9.jy, aL = 0; aL < jy.length; aL++) jz(jy[aL].k0, jQ);
		jz(jl.message.k1(), jQ, 1), jl.hb.jx(jQ)
	}
}

function k4() {
	function kN() {
		v.kO.e6()
	}

	function kc(aP, kb) {
		0 < kb && (v.aU[aP] += kb, v.aU[aP + 1] += kb, v.aU[aP + 2] += kb)
	}

	function kV(aP) {
		return v.aU[aP + 2] > v.aU[aP] && v.aU[aP + 2] > v.aU[aP + 1]
	}
	this.k5 = -1, this.k6 = 0, this.k7 = 0, this.k8 = 8, this.k9 = 32, this.kA = 8, this.kB = 32, this.kC = [0, 0], this.kD = [0, 0, 0, 0], this.kE = null, this.kF = !0, this.kG = !1, this.kH = function() {
		-1 !== this.k5 && clearTimeout(this.k5), this.k5 = -1, this.kE = null, kI.kJ()
	}, this.b3 = function() {
		7 === eg.f3() || this.kG || (this.kF = !0, this.k6 = 0, this.k7 = 1, this.kC = [v.dp.dq[v.dr].kK[0], v.dp.dq[v.dr].kL[0]], this.kD = [v.dp.dq[v.dr].kM[3], v.dp.dq[v.dr].kM[4], v.dp.dq[v.dr].kM[5], v.dp.dq[v.dr].kM[6]], this.k8 = v.dp.dq[v
			.dr].kM[7], this.k9 = v.dp.dq[v.dr].kM[8], this.kA = v.dp.dq[v.dr].kM[9], this.kB = v.dp.dq[v.dr].kM[10], this.kF ? this.k5 = setTimeout(kN, 16) : this.e6())
	}, this.e6 = function() {
		if (8 === eg.f3() && c0.kP()) this.k5 = setTimeout(kN, 16);
		else {
			if (0 === this.k6) {
				var kQ = gh.kR();
				if (gh.kS(v.dp.dq[v.dr].kM[2]), kI.kT([v.w, v.y, v.dp.dq[v.dr].kM[0], v.dp.dq[v.dr].kM[1]]), gh.kS(kQ), this.kE = kI.kU(), this.k6++, this.kF) return void(this.k5 = setTimeout(kN, 16))
			}
			for (var aP, c3, kQ = this.kF ? 10 : 1e6, kQ = v.y - this.k7 - 1 < kQ ? v.y - this.k7 - 1 : kQ, a4 = this.k7 + kQ, aJ = this.k7; aJ < a4; aJ++)
				for (var aH = 1; aH < v.w - 1; aH++) kV(aP = 4 * (c3 = aH + aJ * v.w)) ? this.kW(aP, c3, 1) : (this.kW(aP, c3, 0), function(aH, aJ, aP) {
					return 1 < aH && kV(aP - 4) || aH < v.w - 2 && kV(aP + 4) || 1 < aJ && kV(aP - 4 * v.w) || aJ < v.y - 2 && kV(aP + 4 * v.w)
				}(aH, aJ, aP) && this.kY(aH, aJ));
			this.k7 = a4, this.k7 >= v.y - 1 ? (v.kZ.putImageData(v.ka, 0, 0, 1, 1, v.w - 2, v.y - 2), cH.cI = !0, this.kH()) : this.kF && (this.k5 = setTimeout(kN, 16))
		}
	}, this.kW = function(aP, c3, hy) {
		kc(aP, Math.floor(this.kC[hy] + this.kD[hy] * this.kE[c3] / 1e4) - v.aU[aP])
	}, this.kd = function(aP, db, ke, hy, kD) {
		kc(aP, Math.floor(this.kC[hy] + (1 - db / ke) * kD) - v.aU[aP])
	}, this.kY = function(hr, hs) {
		for (var aP, db, ke, a1 = hr - this.k9, a2 = hs - this.k9, a3 = hr + this.k9, a4 = hs + this.k9, a1 = a1 < 1 ? 1 : a1, a3 = a3 > v.w - 2 ? v.w - 2 : a3, a4 = v.y - 2 < a4 ? v.y - 2 : a4, aJ = a2 < 1 ? 1 : a2; aJ <= a4; aJ++)
			for (var aH = a1; aH <= a3; aH++) kV(aP = 4 * (aH + aJ * v.w)) ? (ke = this.k8 + (this.k9 - this.k8) * this.kE[aH + v.w * aJ] / 1e4, Math.abs(hr - aH) > ke || Math.abs(hs - aJ) > ke || ke <= (db = Math.sqrt((hr - aH) * (hr - aH) + (
				hs - aJ) * (hs - aJ))) || this.kd(aP, db, ke, 1, this.kD[3])) : (ke = this.kA + (this.kB - this.kA) * this.kE[aH + v.w * aJ] / 1e4, Math.abs(hr - aH) > ke || Math.abs(hs - aJ) > ke || ke <= (db = Math.sqrt((hr - aH) * (hr -
				aH) + (hs - aJ) * (hs - aJ))) || this.kd(aP, db, ke, 0, this.kD[2]))
	}
}

function kf() {
	var kg = 12e3;
	this.show = function(kh) {
		return !kh && !ee.ki() && (0 === b4.id ? ee.kj.show() : !(cH.bU < kg) && (kh = 1 === b4.id ? 72e4 : 108e4, kg = cH.bU + kh, 2 === eh.kk) && b4.b5.kl(Math.floor(kh)))
	}
}

function km() {
	var kn = [],
		fu = [],
		ko = [];

	function kr(cF) {
		for (var cC = cF.cC, kq = [];;) {
			var bB = function kt(cC, position) {
				position = cC.indexOf("@", position);
				if (position < 0) return -1;
				var bV = cC.substring(position + 1, position + 6);
				if (5 !== bV.length) return kt(cC, position + 1);
				if (bQ.cL.startsWith(bV, "room")) return kt(cC, position + 1);
				var lD = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!lD.test(bV)) return kt(cC, position + 1);
				lD = cC.substring(position + 6, position + 7);
				if (1 !== lD.length) return position;
				bV = new RegExp("^[ :!.]+$");
				if (!bV.test(lD)) return kt(cC, position + 1);
				return position
			}(cC, 0);
			if (-1 === bB) {
				kq.push(ku(cC, cF));
				break
			}
			0 === bB ? kq.push(kv(cC.substring(1, 6), cF, bB)) : (kq.push(ku(cC.substring(0, bB), cF)), kq.push(kv(cC.substring(bB + 1, bB + 6), cF, bB))), cC = cC.substring(bB + 6)
		}
		return kq
	}

	function kv(bV, cF, bB) {
		var kw = function(bV) {
				var jQ = iP.iV.lA(bV, 5),
					kw = jl.jm.jj(jQ);
				if (kw) {
					for (kn.push(kw); 75 < kn.length;) kn.shift();
					return kw
				}
				for (var lB = jl.jm.lB, aL = lB.length - 1; 0 <= aL; aL--)
					if (kw = lB[aL], jQ === kw.jQ) return kn.push(kw), kw;
				for (aL = kn.length - 1; 0 <= aL; aL--)
					if (kw = kn[aL], jQ === kw.jQ) return kn.push(kw), kw;
				return jl.jm.lC(jQ, bV, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(bV),
			bV = (0 === bB && 0 === cF.jO.id && cF.jZ && (cF.fontSize = jl.ge.jg(kw.jf, kw.jh), cF.jY = jl.ge.ji(kw.jh)), document.createElement("span"));
		return bV.textContent = function(kw, cF, bB) {
				if (kw.l7) return kw.l7--, bB = 2 === cF.jO.id || (3 === cF.jO.id || 4 === cF.jO.id) && 0 !== bB, kw.username + (bB ? " (" + kw.l9 + ")" : "");
				if (cF.jO.k3) return "Redacted " + iU.iV.cs(kw.jQ, 2);
				return kw.username
			}(kw, cF, bB), bV.style.display = "inline-block", bV.style.color = jl.ge.je(kw.jf), 11 === kw.jf && (bV.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), bV.style.cursor =
			"pointer", bV.style.margin = "0", bV.style.font = "inherit", bV.style.minWidth = bV.style.minHeight = "1em", jl.ge.jn(kw) && (bV.style.textDecoration = "underline"), kw.kz && (bV.style.textDecorationLine = "underline", bV.style
				.textDecorationStyle = "dotted"), jl.ge.ji(kw.jh) && (bV.style.fontWeight = "bold"), bV.onclick = function(l0) {
				jl.l1.l2(l0, kw)
			}, l3.l4() || (bV.onmouseover = function(l0) {
				jl.l5.l6(l0.target, kw)
			}), fu.push(bV), bV
	}

	function ku(cC, cF) {
		var gI = document.createElement("span");
		return gI.textContent = cC, gI.style.color = cF.ja, gI.style.margin = "0", gI.style.font = "inherit", gI
	}

	function lJ(kw, lI, jQ) {
		jQ !== kw.jQ || kw.l9 || (kw.l9 = kw.username, kw.username = lI)
	}
	this.iA = function() {
		for (var aL = 0; aL < fu.length; aL++) fu[aL].onclick = fu[aL].onmouseover = null;
		ko = fu = null
	}, this.transform = function(cF) {
		for (var kp = document.createElement("div"), kq = kr(cF), aL = 0; aL < kq.length; aL++) kp.appendChild(kq[aL]);
		0 === cF.jO.id && (kp.vx143 = cF.jO, ko.push(kp)), kp.style.margin = "0.6em 0.6em", cF.jZ && (kp.style.marginLeft = kp.style.marginRight = "inherit"), kp.style.font = "inherit";
		var ks = 0 < cF.jO.id;
		return cF.jY && (kp.style.fontWeight = "bold"), ks && (kp.style.paddingLeft = "0.7em"), ks && (kp.style.fontStyle = "italic"), kp.style.fontSize = cF.fontSize.toFixed(2) + "em", kp
	}, this.lG = function(lH) {
		if (lH && (2 === lH.id && 1 === lH.jS || 3 === lH.id && 2 === lH.jS)) {
			var jQ = 3 === lH.id ? lH.target : lH.jQ;
			if (!jl.jm.jj(jQ)) {
				for (var lI = "Redacted " + iU.iV.cs(jQ, 2), lB = jl.jm.lB, aL = lB.length - 1; 0 <= aL; aL--) lJ(lB[aL], lI, jQ);
				for (aL = kn.length - 1; 0 <= aL; aL--) lJ(kn[aL], lI, jQ)
			}
		}
	}, this.lK = function(jQ) {
		for (var lL = ko, lM = "@" + iU.iV.cs(jQ, 5), aL = lL.length - 1; 0 <= aL; aL--) {
			var a0 = lL[aL];
			if (a0.vx143.jQ === jQ || 0 <= a0.vx143.cC.indexOf(lM)) {
				for (; a0.firstChild;) f1.removeChild(a0, a0.firstChild);
				for (var kq = kr(jl.ge.jX(a0.vx143, jl.ge.jN(a0.vx143))), c2 = 0; c2 < kq.length; c2++) a0.appendChild(kq[c2]);
				lL.splice(aL, 1)
			}
		}
	}, this.jx = function(jQ) {
		for (var lL = ko, aL = lL.length - 1; 0 <= aL; aL--) {
			var a0 = lL[aL];
			if (a0.vx143.jQ === jQ) {
				for (; a0.firstChild;) f1.removeChild(a0, a0.firstChild);
				a0.vx143.cC = "[Redacted Message]";
				for (var kq = kr(jl.ge.jX(a0.vx143, jl.ge.jN(a0.vx143))), c2 = 0; c2 < kq.length; c2++) a0.appendChild(kq[c2]);
				lL.splice(aL, 1)
			}
		}
	}
}

function lN(lO) {
	var lP = document.createElement("div");

	function lS() {
		l3.l4() || (lP.style.backgroundColor = bQ.color.lT(bJ.fx, 50))
	}

	function lR() {
		lP.style.backgroundColor = bJ.fx
	}
	this.gE = function(lU) {
			lP.textContent = lU
		}, this.show = function() {
			document.body.appendChild(lP)
		}, this.resize = function() {
			var au = bQ.bR.lV(.03, .5);
			lP.style.width = 2 * au + "px", lP.style.height = au + "px", lP.style.font = bQ.bR.bS(1, .75 * au), bQ.bR.gL(lP, 4), bQ.bR.gL(lP, 2)
		}, this.iA = function() {
			lP.onclick = null, lP.onmouseover = null, lP.onmouseout = null, f1.removeChild(document.body, lP), lP = null
		}, lP.style.position = "absolute", lR(), lP.style.color = bJ.bL, lP.style.zIndex = "3", lP.style.right = "0", lP.style.top = "0", lP.style.display = "flex", lP.style.justifyContent = "center", lP.style.alignItems = "center", lP.style
		.userSelect = "none", lP.style.outline = "none", lP.onclick = lO, lP.onmouseover = lS, lP.onmouseout = lR
}

function lW(lO) {
	var lX = document.createElement("div"),
		lY = document.createElement("div"),
		lZ = [];

	function lS() {
		l3.l4() || (this.style.backgroundColor = bQ.color.lT(bJ.fx, 50))
	}

	function lR() {
		this.style.backgroundColor = bJ.fx
	}
	this.gE = function(lb, lU) {
			lZ[2].textContent = lb + 1 + " / " + lU
		}, this.show = function(cF) {
			cF = jl.ge.jX(cF, jl.ge.jN(cF)), lY.appendChild(jl.hb.transform(cF)), document.body.appendChild(lX)
		}, this.resize = function() {
			var au = bQ.bR.lV(.03, .5);
			lX.style.width = 10 * au + "px", lX.style.font = bQ.bR.bS(1, .75 * au), bQ.bR.gL(lX, 4), lY.style.top = au + "px", lY.style.font = bQ.bR.bS(0, .55 * au), bQ.bR.gL(lY, 2), lX.style.height = au + lY.offsetHeight + "px";
			for (var aL = 0; aL < 3; aL++) bQ.bR.gL(lZ[aL], 6), lZ[[0, 1, 3][aL]].style.width = 2 * au + "px";
			for (aL = 0; aL < 4; aL++) lZ[aL].style.height = au + "px", bQ.bR.gL(lZ[aL], 2);
			lZ[2].style.width = 4 * au + "px", lZ[1].style.left = 2 * au + "px", lZ[2].style.left = 4 * au + "px", lZ[3].style.left = 8 * au + "px"
		}, this.iA = function() {
			for (var aL = 0; aL < 4; aL++) lZ[aL].onclick = null, lZ[aL].onmouseover = null, lZ[aL].onmouseout = null;
			f1.removeChild(document.body, lX), lX = lY = lZ = null
		}, lX.style.position = "absolute", lX.style.color = bJ.bL, lX.style.zIndex = "3", lX.style.right = "0", lX.style.top = "0", lY.style.position = "absolute", lY.style.height = "auto", lY.style.color = bJ.bL, lY.style.backgroundColor = bJ.fx, lY
		.style.left = "0", lY.style.width = "100%", lY.style.overflowWrap = "break-word", lX.appendChild(lY);
	for (var aL = 0; aL < 4; aL++) lZ[aL] = document.createElement("div"), lZ[aL].style.position = "absolute", lZ[aL].style.backgroundColor = bJ.fx, lZ[aL].style.color = bJ.bL, lZ[aL].style.top = "0", lZ[aL].style.display = "flex", lZ[aL].style
		.justifyContent = "center", lZ[aL].style.alignItems = "center", lZ[aL].style.userSelect = "none", lZ[aL].style.outline = "none", lZ[aL].style.font = "inherit", 2 !== (lZ[aL].la = aL) && (lZ[aL].onclick = lO, lZ[aL].onmouseover = lS, lZ[aL]
			.onmouseout = lR), lX.appendChild(lZ[aL]);
	lZ[0].textContent = "◀", lZ[1].textContent = "▶", lZ[3].textContent = "✖"
}

function ik() {
	this.lc = function() {
		for (var aI = eA.eB, b7 = eA.eC, ld = [], aL = 0; aL < aI; aL++) {
			var aP = b7[aL];
			bQ.by.le(aP) && ld.push(aP)
		}
		return ld
	}, this.lf = function() {
		if (0 === cw.cy[j.lg]) return this.lh();
		li.lj(j.lg);
		for (var ld = [], aI = h1.lk[0], ll = h1.ll, aL = 0; aL < aI; aL++) {
			var aP = ll[aL];
			bQ.by.le(aP) && ld.push(aP)
		}
		return ld
	}, this.lh = function() {
		var aP = h9[0];
		return bQ.by.le(aP) ? [aP] : []
	}, this.lm = function(ld) {
		for (var aI = ld.length, bv = 0, cj = cT.cj, aL = 0; aL < aI; aL++) bv += cj[ld[aL]];
		return bv
	}
}

function ln() {
	var lo, lp = [],
		lq = -1,
		lr = 0,
		ls = 0;

	function m1() {
		lr = cH.bU, (3 === this.la ? m0 : (lq = (lp.length + lq + 2 * this.la - 1) % lp.length, lz))()
	}

	function lz() {
		0 !== lp.length && (ls = 0, lo && lo.iA(), (lo = new lW(m1)).gE(lq, lp.length), lo.show(lp[lq]), jl.message.resize())
	}

	function m0() {
		ls = 1, lo && lo.iA(), (lo = new lN(lz)).gE(lp.length), lo.show(), jl.message.resize()
	}
	this.lt = function(jO) {
		var cF;
		2 === jO.id && 3 === jO.jS ? jl.ge.jx(jO.jQ) : (cF = jl.ge.jX(jO, jl.ge.jN(jO)), (5 !== jO.id && 6 !== jO.id || (f1.lu(29).lv().lw(cF), 5 === jO.id)) && (cF = cH.bU < lr + 2e4, lq !== lp.length - 1 && cF || (lq = lp.length), __fx
			.pingFilter.isMuted(jO, "cC") || (lp.push(jO), hk.buffer.data[14].value || 7 === jO.id || ly.play(), lo && (ls && (hk.buffer.data[13].value || cF) ? lo.gE(lp.length) : lz()))))
	}, this.show = function() {
		m0()
	}, this.gG = function() {
		lq = lp.length - 1, lo && lo.iA(), lo = null
	}, this.resize = function() {
		lo && lo.resize()
	}, this.k1 = function() {
		return lp
	}
}

function m2() {
	var m3, canvas, cx, m4;

	function mB(hy, name, mC, bV) {
		cx[hy] = name, canvas[hy] = new Image, canvas[hy].onload = function() {
			! function(hy, mC) {
				var mG, mF = null;
				7 === mC ? mG = bQ.mH.mI : 8 === mC ? (mG = bQ.mH.mJ, mF = .1) : 3 === mC ? (mG = bQ.mH.mK, mF = .06) : 5 === mC ? mG = bQ.mH.mL : 6 === mC ? mG = bQ.mH.mM : 4 === mC && (mG = bQ.mH.mN);
				canvas[hy] = bQ.mH.mO(canvas[hy], mG, mF)
			}(hy, mC), mE()
		}, canvas[hy].onerror = function(l0) {
			console.error("Error loading image at index", hy, "Error:", l0), mE()
		}, canvas[hy].src = "data:image/png;base64," + bV
	}

	function mE() {
		m3--, m8()
	}

	function m8() {
		0 === m3 && (m3 = -1, mA(), cH.cI = !0, canvas[7] = m4, canvas[8] = m4, canvas[9] = m4, canvas[10] = m4, 5 === f1.mQ) && f1.mR().mS.resize()
	}

	function mA() {
		i0.mT(), mU.mV([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== b4.id, 1 !== b4.id, !0, !0, !0]), cN.cO = new hI, cN.cO.b3(), bh.mW()
	}
	this.b3 = function() {
		if (void 0 === canvas) {
			m3 = 23, canvas = new Array(m3), cx = new Array(m3), (m4 = document.createElement("canvas")).width = 1;
			for (var aL = m3 - (m4.height = 1); 0 <= aL; aL--) canvas[aL] = m4;
			mA(), mB(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), mB(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), mB(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(3, "orders", 6,
					"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"
					), mB(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), mB(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), mB(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), mB(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(8,
					"googleplay", 3,
					"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"
					), mB(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), mB(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), mB(14, "bestPlayer", 5,
					"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"
					), mB(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), mB(16, "apple", 3,
					"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"
					), mB(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), mB(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), mB(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), mB(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), mB(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), mB(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(hy) {
		return canvas[hy]
	}, this.m6 = function(name) {
		for (var aL = cx.length - 1; 0 <= aL; aL--)
			if (cx[aL] === name) return canvas[aL];
		return m4
	}, this.gO = function() {
		return m3 <= 0
	}, this.m7 = function() {
		m3 = 0, m8()
	}
}

function mX() {
	this.mY = new mZ
}

function ma() {
	var mb = null;
	this.i7 = 0, this.mc = function() {
		var hm = hk.buffer.data[5].value;
		mb = "px " + hm, "system-ui" !== hm && (mb += ", system-ui"), this.i7 = md(32, 32, ["a", "b", "m"], 200, mb)
	}, this.me = function(aV, au) {
		var bB = document.createElement("canvas");
		return bB.width = aV, bB.height = au, bB
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(be, aV, au) {
		return be.getImageData(0, 0, aV, au)
	}, this.bS = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + mb : 1 === type ? "bold " + size + mb : 2 === type ? "lighter " + size + mb : 3 === type ? "italic " + size + mb : 4 === type ? "oblique " + size + mb : 5 === type ? "small-caps " +
			size + mb : "small-caps bold " + size + mb
	}, this.textAlign = function(i5, id) {
		i5.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i5, id) {
		i5.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.gL = function(l0, code, color) {
		color = this.fy(bT.mf) + " solid " + (color || bJ.bL);
		5 === (code = code || 5) ? l0.style.border = color : 4 === code ? l0.style.borderLeft = color : 2 === code ? l0.style.borderBottom = color : 6 === code ? l0.style.borderRight = color : l0.style.borderTop = color
	}, this.gK = function(l0, aH, aJ, aV, au) {
		l0 = l0.style;
		l0.left = this.gM(aH), l0.top = this.gM(aJ), l0.width = this.gM(aV), l0.height = this.gM(au)
	}, this.mh = function(hm) {
		return 1 + hm * b4.b5.b6()
	}, this.lV = function(mi, mj) {
		return mi * this.mh(void 0 === mj ? .5 : mj) * bN.bO / bN.mk
	}, this.gJ = function(mi, mj) {
		return mi * this.mh(void 0 === mj ? .5 : mj) * bN.bO
	}, this.ml = function(mi, mj, mm) {
		return this.mh(mj) * Math.min(mi * bN.bO, mm * bN.aV) / bN.mk
	}, this.fy = function(hm) {
		return hm.toFixed(1) + "px"
	}, this.gM = function(hm) {
		return this.mo(hm).toFixed(1) + "px"
	}, this.mo = function(hm) {
		return hm / bN.mk
	}, this.mp = function(mq) {
		for (var bV = "<ul>", aI = mq.length, aL = 0; aL < aI; aL++) bV += "<li>" + mq[aL][0] + ": <a href='" + mq[aL][1] + "' target='_blank'>" + mq[aL][0] + "</a></li>";
		return bV += "</ul>"
	}, this.mr = function(ms) {
		return "<a href='" + ms + "' target='_blank'>" + ms + "</a>"
	}, this.mt = function(l0) {
		navigator.clipboard && navigator.clipboard.writeText(l0.value)
	}, this.mu = function(l0) {
		var bv = l0.textContent;
		bQ.cL.mv(bv, "✔") || (1 === bv.length ? l0.textContent = "✔" : l0.textContent = bv + " ✔", setTimeout(function() {
			l0.textContent = bv
		}, 500))
	}, this.measureText = function(bV) {
		return eF.measureText(bV).width
	}, this.fz = function(mw) {
		mw.style.overflowX = "auto", mw.style.overflowY = "hidden", mw.style.whiteSpace = "nowrap", mw.addEventListener("wheel", function(l0) {
			Math.abs(l0.deltaY) < Math.abs(l0.deltaX) || (this.scrollLeft += l0.deltaY, this.gP = this.scrollLeft, l0.preventDefault())
		}), mw.addEventListener("scroll", function() {
			this.gP = this.scrollLeft
		})
	}
}

function mx() {
	function n2(cK) {
		if (0 === cK.length) hk.mz.gE(116, "");
		else {
			for (var n6 = cK[0], aL = 1; aL < cK.length; aL++) n6 += ";" + cK[aL];
			hk.mz.gE(116, n6)
		}
	}
	this.my = function() {
		hk.buffer.data[110].value.length && (hk.buffer.data[106].value = hk.buffer.data[110], hk.mz.gE(110, ""), this.n0())
	}, this.n0 = function() {
		var cK = hk.buffer.data[116].value.split(";");
		for (cK.length % 2 == 1 && cK.pop(), cK.unshift(hk.buffer.data[106].value), cK.unshift(hk.buffer.data[105].value), aL = 2; aL < cK.length; aL += 2)
			if (cK[aL] === cK[0]) {
				cK.splice(aL, 2);
				break
			} for (var n1 = [], aL = 0; aL < cK.length; aL += 2) n1.push(cK[aL]);
		n2(cK), hk.buffer.data[117].value = 0, hk.buffer.data[117].n3 = n1
	}, this.n4 = function(hy) {
		hk.buffer.data[117].n3.splice(hy, 1), hk.buffer.data[117].value = Math.min(hy, hk.buffer.data[117].n3.length - 1);
		var cK = hk.buffer.data[116].value.split(";");
		cK.splice(2 * hy, 2), n2(cK)
	}, this.n5 = function(hy) {
		var cK = hk.buffer.data[116].value.split(";");
		return {
			jQ: cK[2 * hy],
			password: cK[2 * hy + 1]
		}
	}, this.n7 = function() {
		var hm = hu.hz(hk.buffer.data[121].value, -1, 262143);
		return hm = -1 === hm ? ~~(262144 * Math.random()) : hm
	}, this.n8 = function() {
		for (var cK = document.cookie.split(";"), aL = 0; aL < cK.length; aL++) {
			var n9, bV = cK[aL].trim();
			0 !== bV.length && (n9 = 0 <= (n9 = bV.indexOf("=")) ? bV.substring(0, n9) : bV, document.cookie = n9 + "=;expires=0;path=/", document.cookie = n9 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = n9 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function fe() {
	var nA, nC = new Uint16Array(8);

	function nM(size, player) {
		for (var aL = cT.nG[player].length - 1; size <= aL; aL--) f.nX(cT.nG[player][aL], player)
	}
	this.b3 = function() {
		nA = 0
	}, this.nD = function(player, nE) {
		return h1.nF[1] = cT.nG[player].length, h1.nF[0] === j.cW ? gU.fd.nH(player) : this.nI(player, h1.nF[0]), (0 !== h1.nF[1] || 0 !== cT.nG[player].length) && !(!nE && h1.nF[1] === cT.nG[player].length || (h1.nF[0] === j.cW ? cT.nJ[player]++
			: cT.nK[player]++, 0))
	}, this.nL = function(player) {
		nM(h1.nF[1], player), nN.cR(player, h1.nO[0], h1.nF[0]), nP.hG(player, !1)
	}, this.nQ = function(player, nR, aI, d2) {
		var nS = hu.hv(12 * cT.ct[player], 1024);
		d2 -= d2 >= hu.hv(cT.ct[player], 2) ? nS : 0, nM(aI, player), nN.cR(player, d2, nR), cT.ct[player] -= d2 + nS, nP.hG(player, !1)
	}, this.nI = function(player, nR) {
		for (var nT, af = f.af, aL = cT.nU[player].length - 1; 0 <= aL; aL--)
			if (f.nV(cT.nU[player][aL]))
				for (nT = 3; 0 <= nT; nT--)
					if (f.nW(cT.nU[player][aL] + af[nT]) && f.co(cT.nU[player][aL] + af[nT]) === nR) {
						cT.nG[player].push(cT.nU[player][aL]);
						break
					}
	}, this.nH = function(player) {
		for (var af = f.af, aL = cT.nU[player].length - 1; 0 <= aL; aL--)
			if (f.nV(cT.nU[player][aL]))
				for (var nT = 3; 0 <= nT; nT--)
					if (f.cn(cT.nU[player][aL] + af[nT])) {
						cT.nG[player].push(cT.nU[player][aL]);
						break
					}
	}, this.nY = function(player, nZ) {
		var aL, c2, nT, na, aI = cT.nU[player].length,
			e8 = 256 <= aI ? 12 : 32 <= aI ? 6 : 1,
			nb = aI - 1 - gh.gi(e8),
			af = f.af;
		nA = 0;
		loop: for (aL = nb; 0 <= aL; aL -= e8)
			for (nT = 3; 0 <= nT; nT--)
				if ((na = f.cn(cT.nU[player][aL] + af[nT]) ? j.cW : f.co(cT.nU[player][aL] + af[nT])) === j.cW || f.nW(cT.nU[player][aL] + af[nT]) && na !== player && (nZ || nc.nd(player, na))) {
					for (c2 = nA - 1; 0 <= c2; c2--)
						if (nC[c2] === na) continue loop;
					if (nC[nA] = na, 8 <= ++nA) return !0
				}
		return 0 < nA
	}, this.ne = function(player, nZ) {
		var aL, nT, na, af = f.af;
		for (nA = 0, aL = cT.nU[player].length - 1; 0 <= aL; aL--)
			for (nT = 3; 0 <= nT; nT--)
				if ((na = f.cn(cT.nU[player][aL] + af[nT]) ? j.cW : f.co(cT.nU[player][aL] + af[nT])) === j.cW || f.nW(cT.nU[player][aL] + af[nT]) && na !== player && (nZ || nc.nd(player, na))) return nC[nA++] = na, !0;
		return !1
	}, this.nf = function() {
		for (var c7, aL = nA - 1; 0 <= aL; aL--)
			if (nC[aL] === j.cW) {
				for (nA--, c7 = aL; c7 < nA; c7++) nC[c7] = nC[c7 + 1];
				return !0
			} return !1
	}, this.ng = function(player) {
		for (var c7, aL = nA - 1; 0 <= aL; aL--)
			if (nN.nh(player, nC[aL]))
				for (nA--, c7 = aL; c7 < nA; c7++) nC[c7] = nC[c7 + 1];
		return 0 === nA
	}, this.ni = function() {
		for (var aL = nA - 1; 0 <= aL; aL--)
			if (bQ.by.cZ(nC[aL])) return !0;
		return !1
	}, this.nj = function() {
		for (var aL = nA - 1; 0 <= aL; aL--) bQ.by.cZ(nC[aL]) || (nC[aL] = nC[--nA]);
		return 0 < nA
	}, this.nk = function(player) {
		for (var c7, nl = nC[0], nm = cT.ct[nl] + nN.nn(nl, player), aL = nA - 1; 1 <= aL; aL--)(c7 = cT.ct[nC[aL]] + nN.nn(nC[aL], player)) < nm && (nl = nC[aL], nm = c7);
		return nl
	}, this.no = function(player) {
		var au, np = nC[0];
		if (1 !== nA)
			for (var nq = hu.hv(cT.gw[player] + cT.gu[player], 2), nr = hu.hv(cT.gy[player] + cT.gv[player], 2), ao = ns(nq - hu.hv(cT.gw[np] + cT.gu[np], 2)) + ns(nr - hu.hv(cT.gy[np] + cT.gv[np], 2)), aL = nA - 1; 1 <= aL; aL--)(au = ns(nq - hu
				.hv(cT.gw[nC[aL]] + cT.gu[nC[aL]], 2)) + ns(nr - hu.hv(cT.gy[nC[aL]] + cT.gv[nC[aL]], 2))) < ao && (ao = au, np = nC[aL]);
		return np
	}, this.nt = function() {
		for (var nu = nC, nv = nu[0], ct = cT.ct, nw = ct[nv], aL = nA - 1; 1 <= aL; aL--) {
			var aP = nu[aL],
				c7 = ct[aP];
			nw < c7 && (nv = aP, nw = c7)
		}
		return nv
	}, this.nx = function() {
		return nC[gh.gi(nA)]
	}
}

function ny() {
	this.nz = 0, this.e6 = function() {
		o0.e6(), en.e6(), bN.e6(), el.d9.e6(), o1.o2(), ee.kj.e6(), cH.cI && (cH.cI = !1, eg.eD())
	}
}

function o3(fG, o4, o5, o6) {
	var self;
	this.gI = document.createElement("span"), (self = this).gI.textContent = fG, self.gI.style.color = bJ.bL, self.gI.style.position = "absolute", self.gI.style.font = "inherit", o6 ? self.gI.style.bottom = "0.06em" : self.gI.style.top = "0.12em",
		o5 ? self.gI.style.left = "0.2em" : self.gI.style.right = "0.2em", self.gI.style.fontSize = "0.6em", self.gI.style.pointerEvents = "none", self.gI.style.whiteSpace = "pre", o4.style.position = "relative", o4.style.overflow = "hidden", o4
		.appendChild(self.gI)
}

function o7() {
	var c4, c5, fE, gx, o8 = 0,
		o9 = 0;

	function oE() {
		return Math.pow(Math.pow(fE - c4, 2) + Math.pow(gx - c5, 2), .5)
	}

	function oB(l0) {
		c4 = bN.mk * l0.touches[0].clientX, c5 = bN.mk * l0.touches[0].clientY, fE = bN.mk * l0.touches[1].clientX, gx = bN.mk * l0.touches[1].clientY
	}
	this.oA = function(l0) {
		return 1 < l0.touches.length ? (o9 = cH.bU, o8 = 3, oB(l0), i0.gG(), !0) : (o8 = 0, !1)
	}, this.oC = function(l0) {
		var oD, oG, oH;
		return 0 !== j.e5 && 1 < l0.touches.length && (o8 = Math.max(o8 - 1, 0), c0.iC() && (oD = oE(), oB(l0), l0 = oE(), oG = Math.floor((c4 + fE) / 2), oH = Math.floor((c5 + gx) / 2), oI.oJ(oG, oH, Math.max(.125, l0) / Math.max(.125, oD)), cH
			.cI = !0), !0)
	}, this.oK = function() {
		var aH, aJ;
		return !!(o8 && (o8 = 0, cH.bU < o9 + 500)) && (aH = (c4 + fE) / 2, aJ = (c5 + gx) / 2, i0.oL(aH, aJ), i0.click(aH, aJ, !0) && (cH.cI = !0), !0)
	}
}

function oM() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 !== j.data.tIncomeType && (j.data.tIncomeData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.tIncomeType && bQ.oY.oZ(oP.oa(), j.data.tIncomeData, 255)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(71), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(73), L(74), L(75)],
			value: j.data.tIncomeType
		}, function(hy) {
			oV(), 2 !== hy || j.data.tIncomeData || (j.data.tIncomeData = new Uint8Array(j.cW), j.data.tIncomeData.fill(32)), j.data.tIncomeType = hy, f1.g9(26)
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og;
		1 === j.data.tIncomeType && ((og = new oh).oi("Value"), og.ol(new om({
			hy: -1,
			value: j.data.tIncomeValue
		}, 1, 0, function(l0) {
			var value = hu.hz(Math.floor(l0.target.value), 0, 255);
			l0.target.value = j.data.tIncomeValue = value
		})), ob.push(og))
	}(ob), function(ob) {
		var og;
		2 === j.data.tIncomeType && ((og = new oh).oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.tIncomeData, 4)), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function ot() {
	this.ha = function(ou, hy, ov) {
		var hJ = ou.height,
			cE = bQ.bR.me(hJ, hJ),
			i5 = bQ.bR.getContext(cE);
		return function(aV, i5, ov) {
			i5.fillStyle = ov, i5.beginPath(), i5.arc(aV / 2, aV / 2, .47 * aV, 0, 2 * Math.PI), i5.fill()
		}(hJ, i5, ov), i5.drawImage(ou, -hy * hJ, 0), cE
	}, this.ox = function(oy) {
		var i5, oz, hJ = oy.height;
		return oy.width === hJ && (oz = (i5 = bQ.bR.getContext(oy, !0)).getImageData(0, 0, hJ, hJ), bQ.mH.p0(oz.data, hJ, hJ, .9), i5.putImageData(oz, 0, 0)), oy
	}
}

function fc() {
	this.gV = 0, this.b3 = function() {
		this.gV = 0
	}, this.e6 = function() {
		if (!this.gV && cH.e1() % 30 == 7 && bQ.by.p3(90) && (gU.performance.gV = 1)) {
			if (j.cu) {
				var p6 = li.p7();
				if (cw.cy[p6]) {
					li.lj(p6);
					var cK = h1.ll,
						aI = h1.lk[0];
					if (0 !== aI)
						for (var p8 = Math.min(100 + 10 * (aI - 1), 400), aL = 0; aL < aI; aL++) d0.p9(cK[aL], p8)
				}
			}
			d0.p9(h9[0], 100)
		}
	}
}

function pA() {
	this.pB = function(iJ) {
		for (var pC = pD, size = pC.iB(iJ), pE = 7 + 9 * pC.iB(1), cK = [], aL = 0; aL < size; aL++) cK.push(String.fromCharCode(pC.iB(pE)));
		return cK.join("")
	}
}

function mZ() {
	this.pF = function(player) {
		bQ.by.pG(player) && bp.cA(80, L(76), 637, 0, bJ.pH, bJ.bK, -1, !1)
	}, this.pI = function(player) {
		bQ.by.pG(player) && bp.cA(80, L(77), 637, 0, bJ.pH, bJ.bK, -1, !1)
	}
}

function pJ() {
	var k5, pL, pM, pN, pK = !1;

	function pO() {
		pK = !0, k5 = -1, pL = new Array(4);
		for (var aL = 3; 0 <= aL; aL--) pL[aL] = !1;
		var pP = Math.floor(1 + .02 * bN.min);
		pM = new Array(4), (pN = new Array(4))[1] = pN[3] = pM[0] = pM[2] = 0, pN[0] = pM[3] = -pP, pM[1] = pN[2] = pP
	}

	function pR() {
		if (-1 !== k5)
			if (0 !== j.e5 && c0.iC()) {
				for (var pT = !1, aL = 3; 0 <= aL; aL--) pL[aL] && (pT = !0, pW += pM[aL], pX += pN[aL], cb.ez(pM[aL], pN[aL]), oI.pY());
				pT ? cH.cI = !0 : pV.pU()
			} else pV.pU()
	}
	this.pQ = function(hy) {
		0 !== j.e5 && c0.iC() && (pK || pO(), pL[hy] = !0, -1 === k5) && (k5 = setInterval(pR, 20), pR())
	}, this.pS = function(hy) {
		if (0 !== j.e5 && (pK || pO(), pL[hy] = !1, -1 !== k5)) {
			for (var pT = !1, aL = 3; 0 <= aL; aL--) pT = pT || pL[aL];
			pT || this.pU()
		}
	}, this.pU = function() {
		if (pK && -1 !== k5) {
			for (var aL = 3; 0 <= aL; aL--) pL[aL] = !1;
			clearInterval(k5), k5 = -1
		}
	}
}

function pZ() {
	this.d9 = new pa, this.mQ = 0;
	var pb = new Array(32);

	function pf() {
		for (var aI = pb.length, aL = 0; aL < aI; aL++) pb[aL] = null
	}
	this.b3 = function() {
		for (var pc, pd = document.body.firstChild; pd;) pc = pd.nextSibling, !document.body.contains(pd) || "DIV" !== pd.tagName && "INPUT" !== pd.tagName && "BUTTON" !== pd.tagName || f1.removeChild(document.body, pd), pd = pc
	}, this.g9 = function(hy, pe, mF) {
		void 0 === pe && (pe = this.mQ), cH.cI = !0, 0 === hy && (0 === eg.f3() ? hy = 5 : b4.b5.setState(13)), this.gG(), this.mQ === hy && (pe = pb[hy].pe, pb[hy] = null), this.mQ = hy;
		var d7 = pb[hy];
		if (!d7 || 4 === hy || 7 === hy || 8 === hy || 9 === hy || 10 === hy || 11 === hy || 13 === hy || 15 === hy || 18 === hy || 20 <= hy && hy <= 28 || 32 === hy || 33 === hy) {
			if (0 === hy) return void pf();
			1 === hy ? d7 = new pg : 2 === hy ? d7 = new ph : 3 === hy ? d7 = new pi : 4 === hy || 9 === hy || 10 === hy || 11 === hy || 13 === hy || 33 === hy ? d7 = mF : 5 === hy ? d7 = new pj : 6 === hy ? d7 = new pk : 7 === hy ? d7 = new pl(
					f1.d9.pm) : 8 === hy ? d7 = mF : 12 === hy ? d7 = new pn : 14 === hy ? d7 = new po : 15 === hy ? d7 = new pl(f1.d9.pp) : 16 === hy ? d7 = new pq : 17 === hy ? d7 = new pr : 18 === hy ? d7 = new ps : 19 === hy ? d7 = new pt :
				20 === hy ? d7 = new pu : 21 === hy ? d7 = new pv : 22 === hy ? d7 = new pw : 23 === hy ? d7 = new px : 24 === hy ? d7 = new py : 25 === hy ? d7 = new pz : 26 === hy ? d7 = new oM : 27 === hy ? d7 = new q0 : 28 === hy ? d7 =
				new q1 : 29 === hy ? d7 = new q2 : 30 === hy ? d7 = new q3 : 31 === hy ? d7 = new q4 : 32 === hy && (d7 = new q5), d7.pe = pe, pb[hy] = d7
		}
		d7.show(mF)
	}, this.oX = function() {
		this.bi() && this.q6(this.mR().pe)
	}, this.q6 = function(hy) {
		this.bi() && (pb[hy] ? (this.gG(), cH.cI = !0, this.mQ = hy, pb[hy].show()) : this.g9(hy))
	}, this.gG = function() {
		this.bi() && pb[this.mQ].gG()
	}, this.q7 = function() {
		this.bi() && (pb[this.mQ].gG(), pf(), this.mQ = 0, b4.b5.setState(13))
	}, this.eD = function() {
		var d7;
		this.bi() && (d7 = pb[this.mQ]).eD && d7.eD()
	}, this.resize = function() {
		if (!this.bi()) return !1;
		pb[this.mQ].resize()
	}, this.bt = function(aH, aJ) {
		var d7;
		this.bi() && (d7 = pb[this.mQ]).bt && d7.bt(aH, aJ)
	}, this.ez = function(aH, aJ) {
		var d7;
		this.bi() && (d7 = pb[this.mQ]).ez && d7.ez(aH, aJ)
	}, this.q8 = function() {
		var d7;
		this.bi() && (d7 = pb[this.mQ]).q8 && d7.q8()
	}, this.q9 = function(hr, hs, deltaY) {
		var d7;
		this.bi() && (d7 = pb[this.mQ]).q9 && d7.q9(hr, hs, deltaY)
	}, this.oq = function(code) {
		var d7;
		return !!this.bi() && ((d7 = pb[this.mQ]).oq && d7.oq(code), !0)
	}, this.e6 = function() {
		var d7;
		this.bi() && (d7 = pb[this.mQ]) && d7.e6 && d7.e6()
	}, this.bi = function() {
		return 0 < this.mQ
	}, this.mR = function() {
		return pb[this.mQ]
	}, this.lu = function(hy) {
		return pb[hy]
	}, this.oW = function() {
		return pb
	}, this.removeChild = function(qA, mw) {
		try {
			qA.removeChild(mw)
		} catch (l0) {
			console.log("removeChild error " + l0)
		}
	}
}

function qB() {
	this.qC = new qD, this.qE = new qF, this.qG = new qH
}

function qI() {
	var canvas, be, qJ, font, qK = 0,
		qL = !1,
		qM = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		qN = 5;

	function qh() {
		if (qL) {
			var aL, aI = qM.length,
				qu = Math.floor(.5 * qJ.au),
				au = aI * qu,
				aH = Math.floor(Math.floor(qJ.aH) + .3 * qJ.aV - .5),
				aJ = Math.floor(Math.floor(qJ.aJ) - au),
				aV = Math.floor(.4 * qJ.aV + 2.5);
			for (eF.fillStyle = bJ.fx, eF.fillRect(aH, aJ, aV, au), eF.fillStyle = bJ.qq, eF.fillRect(aH, aJ + qN * qu, aV, qu), eF.fillStyle = bJ.bL, eF.fillRect(aH, aJ, 2, au), eF.fillRect(aH, aJ, aV, 2), eF.fillRect(aH + aV - 2, aJ, 2, au), aL =
				1; aL < aI; aL++) eF.fillRect(aH, aJ + aL * qu, aV, 2);
			for (eF.fillStyle = bJ.bL, bQ.bR.textAlign(eF, 1), bQ.bR.textBaseline(eF, 1), eF.font = bQ.bR.bS(0, .6 * qu), aH += .5 * aV, aL = 0; aL < aI; aL++) eF.fillText(qr(aL), aH, aJ + (aL + .6) * qu)
		}
		eF.drawImage(canvas, Math.floor(qJ.aH), Math.floor(qJ.aJ))
	}

	function qS(qj) {
		var aH, c4, c5, qu;
		be.clearRect(0, 0, Math.floor(qJ.aV), Math.floor(qJ.au)), be.fillStyle = bJ.fx, be.fillRect(0, 0, Math.floor(qJ.aV), Math.floor(qJ.au)), j.qV && (be.fillStyle = bJ.qq, be.fillRect(0, 0, Math.floor(.3 * qJ.aV), Math.floor(qJ.au))), be
			.fillStyle = bJ.bL, be.fillText("Hide UI", .15 * qJ.aV, .5 * qJ.au), be.fillRect(Math.floor(.3 * qJ.aV - .5), 0, 2, Math.floor(qJ.au)), aH = .5 * qJ.aV, be.fillText("Replay Speed", aH, .31 * qJ.au), be.fillText(qr(qN), aH, .69 * qJ.au),
			be.fillRect(Math.floor(.7 * qJ.aV - .5), 0, 2, Math.floor(qJ.au)), qj.qO ? (aH = Math.floor(.02 * qJ.aV), qj = Math.floor(.025 * qJ.aV), c4 = Math.floor(.85 * qJ.aV - aH - .5 * qj), c5 = Math.floor(.25 * qJ.au), qu = Math.floor(qJ.au) -
				2 * c5, be.fillRect(c4, c5, aH, qu), be.fillRect(c4 + aH + qj, c5, aH, qu)) : function() {
				var aV = Math.floor(.46 * qJ.au),
					au = Math.floor(.23 * qJ.au),
					aH = Math.floor(.85 * qJ.aV - .5 * aV + aV / 12),
					aJ = Math.floor(.5 * qJ.au - au);
				be.beginPath(), be.moveTo(aH, aJ), be.lineTo(aH + aV, aJ + au), be.lineTo(aH, aJ + (au << 1)), be.fill()
			}(), be.fillRect(0, 0, Math.floor(qJ.aV), 2), be.fillRect(0, 0, 2, Math.floor(qJ.au)), be.fillRect(0, Math.floor(qJ.au) - 2, Math.floor(qJ.aV), 2), be.fillRect(Math.floor(qJ.aV - 2), 0, 2, Math.floor(qJ.au))
	}

	function qr(aL) {
		return 5 === aL ? "Normal" : "" + qM[aL]
	}
	this.qO = !1, this.b3 = function() {
		j.cp && (qN = 5, this.qO = !1, qL = !1, qJ = new qP([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.qQ = function() {
		return qM[qN]
	}, this.bm = function() {
		return qJ.aJ
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.qO,
		fxGetSpeedIndex: () => qN,
		fxSetSpeedIndex: index => {
			qN = index, this.resize()
		},
		fxGetPanelTop: () => qJ && qJ.aJ
	}, this.bo = function(qR) {
		return !!j.cp && qJ.aH + qJ.aV > bN.aV - qR - bT.gap
	}, this.resize = function() {
		j.cp && (qJ.resize(), qJ.aJ -= (br.bs() - 1) * bT.gap, font = bQ.bR.bS(0, .3 * qJ.au), (canvas = document.createElement("canvas")).width = Math.floor(qJ.aV), canvas.height = Math.floor(qJ.au), (be = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bQ.bR.textAlign(be, 1), bQ.bR.textBaseline(be, 1), qS(this))
	}, this.qT = function(qU) {
		0 === j.e5 || f1.bi() || qU !== j.qV && (j.qV = qU, li.resize(), cH.cI = !0, j.cp) && (qK = cH.bU + 2e3, qS(this))
	}, this.bt = function(aH, aJ) {
		if (!j.cp) return !1;
		if (aH < qJ.aH || aJ < qJ.aJ || aH > qJ.aH + qJ.aV) return qL && function(qj, aH, aJ) {
			var aI = qM.length,
				qu = Math.floor(.5 * qJ.au),
				au = aI * qu,
				c4 = Math.floor(Math.floor(qJ.aH) + .3 * qJ.aV - .5),
				au = Math.floor(Math.floor(qJ.aJ) - au),
				aV = Math.floor(.4 * qJ.aV + 2.5);
			return qL = !1, cH.cI = !0, aH < c4 || c4 + aV < aH || aJ < au || (qN = qg(0, Math.floor((aJ - au) / qu), aI - 1), qS(qj)), !0
		}(this, aH, aJ);
		if ((aH -= qJ.aH) < .3 * qJ.aV) qL = !1, this.qT(!j.qV);
		else {
			if (aH < .7 * qJ.aV) return qL = !qL, cH.cI = !0;
			this.qX(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.qX(!0), this.qX = function(qY) {
		2 === j.e5 ? (this.qT(!1), f1.g9(3)) : (qL = !1, this.qO = !this.qO, this.qO ? (qZ.qa && qZ.qb(), b4.b5.setState(1)) : qY || qZ.qc(), cH.cI = !0, qS(this))
	}, this.qd = function() {
		this.qO = !1, qZ.qc(), cH.cI = !0, qS(this)
	}, this.qe = function(aH, aJ) {
		return !!j.qV && (0 <= qZ.bt(aH, aJ) || (j.cp ? ((cH.bU > qK || !this.bt(aH, aJ)) && oI.bt(aH, aJ), cH.cI = !0, qK = cH.bU + 2e3) : oI.bt(aH, aJ)), !0)
	}, this.e6 = function() {
		j.cp && j.qV && cH.bU > qK - 1e3 && cH.bU < qK && (cH.cI = !0)
	}, this.qf = function() {
		j.cp && (this.qO = !1, cH.cI = !0, qS(this))
	}, this.eD = function() {
		if (j.cp) {
			if (j.qV) {
				if (cH.bU > qK) return;
				if (qK - 1e3 < cH.bU) return eF.globalAlpha = qg(0, (1e3 - (cH.bU - (qK - 1e3))) / 1e3, 1), qh(), void(eF.globalAlpha = 1)
			}
			qh()
		}
	}
}

function g0(qv, qw, qx, qy, qz) {
	var self, r0 = document.createElement("button");

	function lS() {
		var r9;
		l3.l4() || (r9 = bQ.color.rA(qx), !1 !== qy && 0 < r9[0] && r9[0] < 255 && r9[0] === r9[1] && r9[0] === r9[2]) || (128 < r9[0] && 128 < r9[1] && 128 < r9[2] ? r0.style.backgroundColor = bQ.color.lT(qx, -50) : r0.style.backgroundColor = bQ
			.color.lT(qx, r9[3] && r9[3] < 120 ? 150 : 50))
	}

	function r4() {
		if (qy) {
			var r9 = bQ.color.rA(qx);
			if (r9[0] === r9[1] && r9[0] === r9[2]) return
		}
		qw && ((r9 = qw(this)) ? 2 === r9 && lS() : rC(this))
	}

	function r5() {
		this.style.backgroundColor = qx
	}

	function lR() {
		rC(this)
	}

	function rC(a0) {
		a0.style.backgroundColor = qx, a0.blur()
	}
	this.button = r0, this.os = qw, this.r1 = qx, this.r3 = function(r6) {
		r6 = 1.1 - Math.min(.01 * qv.length, .6) + .2 * r6;
		r0.style.fontSize = r6.toFixed(1) + "em"
	}, this.r2 = function(bB) {
		bB ? 1 === bB ? bB = bJ.r8 : 2 === bB && (qy = 1, bB = bJ.r8) : (qy = 0, bB = bJ.fx), this.r1 = qx = bB, r0.style.backgroundColor = bB
	}, self = this, r0.innerHTML = qv, r0.style.color = qz ? bJ.dT : bJ.bL, r0.style.userSelect = "none", r0.style.outline = "none", r0.style.overflowWrap = "break-word", self.r2(qx), r0.style.border = "none", r0.style.font = "inherit", self.r3(
		0), r0.style.padding = "0em 0.3em", r0.onclick = r4, r0.addEventListener("mouseover", lS), r0.addEventListener("mouseout", lR), r0.addEventListener("focus", lS), r0.addEventListener("blur", r5)
}

function rD(rE, rF) {
	var kp = document.createElement("div");
	this.rG = kp, this.resize = function() {
		kp.style.padding = bQ.bR.fy(bT.rH), kp.style.lineHeight = bQ.bR.fy(bQ.bR.lV(.035))
	}, rE.style.overflowX = "hidden", rE.style.overflowY = "auto", kp.innerHTML = rF, rE.appendChild(kp)
}

function rI() {
	this.rJ = function(player) {
		rK.rL(player), j.rM++, cT.dl[player] = 2, cT.rN[player] = rO.qE.rP(), player === j.k && (j1.show(!1, !1), gZ.rQ(), rR.iq.rS()), cb.cc(player)
	}
}

function rT() {
	var jB = [L(78), L(79), L(80), L(81), L(82), L(83), L(84)],
		rU = [100, 60, 30, 15, 6, 1],
		rV = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		rW = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		rX = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.jV = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.rY = function(id, db, hy) {
		db = this.rZ(db);
		return +(rV[db][id] > hy)
	}, this.rZ = function(db) {
		for (var aL = 0; aL < rU.length; aL++)
			if (rU[aL] <= db) return aL;
		return rU.length
	}, this.ra = function(db) {
		return jB[this.rZ(db)]
	}, this.jU = function(id, rb) {
		return rW[id].replace(new RegExp("x", "g"), rb)
	}, this.jW = function(id, rb) {
		return rX[id].replace(new RegExp("x", "g"), rb)
	}, this.rc = function(id, rd) {
		return this.jV[5][id]
	}
}

function re() {
	function rg(l0) {
		var cK, l0 = l0.target.files;
		l0 && 0 < l0.length && (l0 = l0[0], "json" === (cK = l0.name.split("."))[cK.length - 1].toLowerCase()) && ((cK = new FileReader).onload = rt, cK.readAsText(l0))
	}

	function rt(l0) {
		var rx;
		j.e5 || (l0 = JSON.parse(l0.target.result), rx = j.data = new ry, rz(l0, rx, "mapType", 0, 2), rz(l0, rx, "mapProceduralIndex", 0, 255), rz(l0, rx, "mapRealisticIndex", 0, 255), rz(l0, rx, "mapSeed", 0, 16383), function(rw, rx, mj, max) {
			rw = rw[mj];
			rx[mj] = s5(rw) ? rw.slice(0, max) : rx[mj]
		}(l0, rx, "mapName", 20), function(rw, rx, mj) {
			var ia;
			2 === rx.mapType && (!s5(rw = rw[mj]) || rw.length <= 20 ? rx.mapType = 0 : ((ia = new Image).onload = function() {
				ib.ic.ie(ia, 1), ia.onload = null, ia = null
			}, ia.src = rw))
		}(l0, rx, "canvas"), rz(l0, rx, "passableWater", 0, 1), rz(l0, rx, "passableMountains", 0, 1), rz(l0, rx, "playerCount", 1, 512), rz(l0, rx, "humanCount", 1, 1), rz(l0, rx, "selectedPlayer", 0, 0), rz(l0, rx, "gameMode", 0, 1), rz(l0,
			rx, "playerMode", 0, 0), rz(l0, rx, "battleRoyaleMode", 0, 0), rz(l0, rx, "numberTeams", 0, 8), rz(l0, rx, "isZombieMode", 0, 0), rz(l0, rx, "isContest", 0, 0), rz(l0, rx, "isReplay", 0, 0), s2(l0, rx, "elo", 16, 2, 16383), rz(l0,
			rx, "colorsType", 0, 1), rz(l0, rx, "colorsPersonalized", 0, 1), s2(l0, rx, "colorsData", 32, 512, 262143), rz(l0, rx, "selectableColor", 0, 1), s2(l0, rx, "teamPlayerCount", 16, 9, 512), rz(l0, rx, "neutralBots", 0, 1), rz(l0,
			rx, "botDifficultyType", 0, 3), rz(l0, rx, "botDifficultyValue", 0, 15), s2(l0, rx, "botDifficultyTeam", 8, 9, 15), s2(l0, rx, "botDifficultyData", 8, 512, 15), rz(l0, rx, "spawningType", 0, 2), rz(l0, rx, "spawningSeed", 0,
			16383), s2(l0, rx, "spawningData", 16, 1024, 4095), rz(l0, rx, "selectableSpawn", 0, 1), rz(l0, rx, "playerNamesType", 0, 2), function(rw, rx, mj, size, max) {
			var ah = rw[mj];
			if (Array.isArray(ah)) {
				for (var ak = new Array(size), aI = Math.min(ah.length, size), aL = 0; aL < aI; aL++) ak[aL] = s5(ah[aL]) ? ah[aL].slice(0, max) : "";
				ak.fill("", aI), rx[mj] = ak
			}
		}(l0, rx, "playerNamesData", 512, 20), rz(l0, rx, "selectableName", 0, 1), rz(l0, rx, "aIncomeType", 0, 2), rz(l0, rx, "aIncomeValue", 0, 255), s2(l0, rx, "aIncomeData", 8, 512, 255), rz(l0, rx, "tIncomeType", 0, 2), rz(l0, rx,
			"tIncomeValue", 0, 255), s2(l0, rx, "tIncomeData", 8, 512, 255), rz(l0, rx, "iIncomeType", 0, 2), rz(l0, rx, "iIncomeValue", 0, 255), s2(l0, rx, "iIncomeData", 8, 512, 255), rz(l0, rx, "sResourcesType", 0, 2), rz(l0, rx,
			"sResourcesValue", 0, 2047), s2(l0, rx, "sResourcesData", 16, 512, 2047), f1.q7(), f1.d9.rv[0] = 0, f1.g9(19))
	}

	function rz(rw, rx, mj, min, max) {
		rw = rw[mj];
		rx[mj] = "number" == typeof rw && min <= rw && rw <= max ? Math.floor(rw) : rx[mj]
	}

	function s5(bV) {
		return "string" == typeof bV
	}

	function s2(rw, rx, mj, s6, size, max) {
		var ah = rw[mj];
		if (Array.isArray(ah)) {
			for (var ak = new(8 === s6 ? Uint8Array : 16 === s6 ? Uint16Array : Uint32Array)(size), aI = Math.min(ah.length, size), aL = 0; aL < aI; aL++) ak[aL] = hu.hz(ah[aL], 0, max);
			rx[mj] = ak
		}
	}
	this.rf = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = rg, input.click()
	}, this.rh = function() {
		for (var rl, ro, ri = j.data, keys = Object.keys(ri), rj = {}, aL = 0; aL < keys.length; aL++) {
			var key = keys[aL];
			ri[key] instanceof Uint8Array || ri[key] instanceof Uint16Array || ri[key] instanceof Uint32Array ? rj[key] = Array.from(ri[key]) : rj[key] = ri[key]
		}
		rj.canvas = 2 === rj.mapType && rj.canvas ? rj.canvas.toDataURL() : null, rl = rj, rl = JSON.stringify(rl, null, 2), rl = new Blob([rl], {
			type: "application/json"
		}), (ro = document.createElement("a")).href = URL.createObjectURL(rl), ro.download = "tt_scenario.json", ro.click()
	}
}

function s7() {
	var s8, s9, size, nR, d2, sA;

	function sB(player) {
		return player < j.ck ? s8 * player : s8 * j.ck + s9 * (player - j.ck)
	}
	this.b3 = function() {
		s8 = j.ck < 16 ? 12 : 8, s9 = 4;
		var aI = sB(j.cW);
		size = new Uint8Array(j.cW), nR = new Uint16Array(aI), d2 = new Uint32Array(aI), sA = new Uint8Array(aI)
	}, this.sC = function(sD, sE) {
		var sF = this.nn(sD, sE),
			sE = (this.sG(sD, sE, 0), bQ.by.sI(sD, sF));
		hD.sJ(sD, sF - sE, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.sK = function(player, sE) {
		var sM, sE = function(player, sE) {
			var aL, d7 = sB(player);
			for (aL = size[player] - 1; 0 <= aL; aL--)
				if (nR[d7 + aL] === sE) return aL;
			return size[player]
		}(player, sE);
		sE !== size[player] && (sM = d2[sB(player) + sE], this.sN(player, sE), this.cR(player, sM, j.cW))
	}, this.nh = function(player, sE) {
		for (var d7 = sB(player), aL = size[player] - 1; 0 <= aL; aL--)
			if (nR[d7 + aL] === sE) return !0;
		return !1
	}, this.sO = function(player) {
		return player < j.ck ? size[player] < s8 : size[player] < s9
	}, this.sP = function(player) {
		return size[player]
	}, this.sQ = function(player, aL) {
		return nR[sB(player) + aL]
	}, this.sR = function(player, aL) {
		return d2[sB(player) + aL]
	}, this.nn = function(player, sE) {
		for (var d7 = sB(player), aL = size[player] - 1; 0 <= aL; aL--)
			if (nR[d7 + aL] === sE) return d2[d7 + aL];
		return 0
	}, this.sS = function(player) {
		for (var d7 = sB(player), hm = 0, aL = size[player] - 1; 0 <= aL; aL--) hm += d2[d7 + aL];
		return hm
	}, this.sG = function(player, sE, sM) {
		for (var d7 = sB(player), aL = size[player] - 1; 0 <= aL; aL--) nR[d7 + aL] === sE && (d2[d7 + aL] = sM)
	}, this.sT = function(player, aL, sM) {
		d2[sB(player) + aL] = Math.max(sM, 0)
	}, this.sU = function(player, aL) {
		sA[sB(player) + aL] = 0
	}, this.sV = function(player, aL) {
		return sA[sB(player) + aL]
	}, this.cR = function(player, sM, sE) {
		gU.ff.sW[player] = gU.ff.sW[sE] = 8, bQ.by.sX(sE) && hD.hE[6 - bQ.by.cZ(player)]++;
		for (var d7 = sB(player), aL = size[player] - 1; 0 <= aL; aL--)
			if (nR[d7 + aL] === sE) return d2[d7 + aL] += sM, void(d2[d7 + aL] = d2[d7 + aL] > j.sY ? j.sY : d2[d7 + aL]);
		nR[d7 + size[player]] = sE, d2[d7 + size[player]] = sM, sA[d7 + size[player]] = 1, size[player]++, sE === j.k ? bp.bD(player, 5) : player < j.ck && player === j.k && cb.cc(sE)
	}, this.sN = function(player, hy) {
		var c2, d7;
		if (0 !== size[player])
			for (d7 = sB(player), size[player]--, c2 = hy; c2 < size[player]; c2++) nR[d7 + c2] = nR[d7 + c2 + 1], d2[d7 + c2] = d2[d7 + c2 + 1], sA[d7 + c2] = sA[d7 + c2 + 1]
	}, this.sZ = function(player) {
		for (var c2, d7, sa = [], aL = eA.eB - 1; 0 <= aL; aL--)
			for (d7 = sB(eA.eC[aL]), c2 = size[eA.eC[aL]] - 1; 0 <= c2; c2--)
				if (nR[d7 + c2] === player) {
					sa.push(eA.eC[aL]);
					break
				} return sa
	}
}

function sb() {
	var sc = {
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
		sd = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.se = function(sf) {
		return sf.replace(sd, function(match) {
			return sc[match] || match
		})
	}, this.cs = function(hm) {
		var aL, sg, sh, si, sj;
		if (hm < 0) return "-" + this.cs(Math.abs(hm));
		if (hm < 1e3) return hm.toString();
		for (sg = Math.floor(Math.log(hm + .5) / Math.log(10)) + 1, sh = Math.floor((sg - 1) / 3), sj = (si = hm.toString()).substring(sg - 3, sg), aL = 1; aL < sh; aL++) sj = si.substring(sg - 3 * (aL + 1), sg - 3 * aL) + " " + sj;
		return si.substring(0, sg - 3 * sh) + " " + sj
	}, this.dw = function(aP, sg) {
		return aP.toFixed(sg) + "%"
	}, this.sk = function(hm, sl) {
		return hm.toFixed(hu.hz(Math.floor((void 0 === sl ? 3 : sl) - Math.log10(Math.max(hm, 1))), 0, 8))
	}, this.sm = function(hm, mi, sg) {
		return (hm * mi).toFixed(sg)
	}, this.ju = function(username) {
		var am, al = username.indexOf("[");
		return !(al < 0) && 1 < (am = username.indexOf("]")) - al && am - al <= 8 ? username.substring(al + 1, am).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.ju;
	this.cM = function(bV) {
		for (var c2 = Math.floor(.5 * bV.length + .5), iC = Math.floor(.5 * (c2 - 1)), aL = 0; aL < iC; aL++)
			for (var c7 = -1; c7 < 2; c7 += 2) {
				var bB = c2 + c7 * aL;
				if (" " === bV[bB]) return [this.sn(bV.substring(0, bB)), this.so(bV.substring(bB))]
			}
		return [bV.substring(0, c2), bV.substring(c2)]
	}, this.so = function(bV) {
		for (var aI = bV.length, aL = 0; aL < aI; aL++)
			if (" " !== bV[aL]) return bV.substring(aL);
		return bV
	}, this.sn = function(bV) {
		for (var aL = bV.length - 1; 0 <= aL; aL--)
			if (" " !== bV[aL]) return bV.substring(0, aL + 1);
		return bV
	}, this.sp = function(bV, sq) {
		return bV.split("(")[0] + "(🧈 " + sq.toFixed(2) + ")"
	}, this.startsWith = function(bV, sr) {
		return bV.substring(0, sr.length) === sr
	}, this.mv = function(bV, sr) {
		var aI = bV.length;
		return bV.substring(aI - sr.length, aI) === sr
	}, this.op = function(cK, ss, st) {
		var bV = "",
			aI = cK.length - 1;
		st = st || "";
		for (var aL = 0; aL < aI; aL++) bV += st + cK[aL] + st + ",", (aL + 1) % ss == 0 && (bV += "\n");
		return bV += st + cK[aI] + st
	}, this.iY = function(bV, su, sv) {
		return bV.replace(new RegExp(su, "g"), sv)
	}
}

function sw() {
	this.e6 = function(player, c9) {
		player = d8.ge.sx(player, c9);
		return !(player < 0 || !d8.gk.sy(player) || (d8.gk.sz(player), 0))
	}
}

function t0() {
	var t1, t2, eU, fI, eN, t3 = 0,
		t4 = 0;

	function t6(aL) {
		var t8 = !0,
			su = bJ.bL,
			aV = (1 === t1[aL].id ? t1[aL].be.fillStyle = bJ.t9 : t1[aL].nR === j.cW ? t1[aL].be.fillStyle = bJ.tA : (f.tB(t1[aL].nR), t1[aL].be.fillStyle = bQ.color.tC(h1.tD[0], h1.tD[1], h1.tD[2], .87), 400 < bQ.oY.tE(h1.tD, 0, 2) && (t8 = !1, su =
				bJ.dP)), t1[aL].canvas.width),
			qs = (t1[aL].be.clearRect(0, 0, aV, fI), t1[aL].be.fillRect(0, 0, aV, fI), t1[aL].be.fillStyle = su, ! function(be, aV, fI) {
				be.fillRect(0, 0, aV, 1), be.fillRect(0, fI - 1, aV, 1), be.fillRect(0, 0, 1, fI), be.fillRect(aV - 1, 0, 1, fI)
			}(t1[aL].be, aV, fI), t2 + 2 * fI < aV && (t1[aL].be.fillRect(aV - t2 - fI, 0, 1, fI), t1[aL].be.fillText(cT.cU[t1[aL].nR], Math.floor((aV - t2) / 2), Math.floor(.57 * fI))), 0 !== t1[aL].id ? 0 : fI);
		t1[aL].be.fillText(bQ.cL.cs(t1[aL].d2), Math.floor(aV - t2 / 2 - qs), Math.floor(.57 * fI)),
			function(aL, aV, qs, t8) {
				t1[aL].be.fillStyle = t8 ? bJ.tJ : bJ.hZ;
				t8 = Math.floor(t2 * t1[aL].d2 / t1[aL].tL);
				t1[aL].be.fillRect(Math.floor(aV - t2 - qs), fI - eN, t8, eN)
			}(aL, aV, qs, t8), 0 === t1[aL].id ? (tH(aL, aV, t8, su), function(aL, aV, t8) {
				t1[aL].be.strokeStyle = t8 ? bJ.tQ : bJ.tR, t1[aL].be.fillRect(fI, 0, 1, fI);
				t8 = aV - fI;
				t1[aL].be.beginPath(), t1[aL].be.moveTo(Math.floor(.3 * fI + t8), Math.floor(fI / 2)), t1[aL].be.lineTo(Math.floor(fI - .3 * fI + 0 + t8), Math.floor(fI / 2)), t1[aL].be.stroke(), t1[aL].be.beginPath(), t1[aL].be.moveTo(Math
					.floor(fI / 2 + t8), Math.floor(.3 * fI)), t1[aL].be.lineTo(Math.floor(fI / 2 + t8), Math.floor(fI - .3 * fI + 0)), t1[aL].be.stroke()
			}(aL, aV, t8)) : tH(aL, 2 * fI, t8, su)
	}

	function tH(aL, aV, t8, su) {
		t1[aL].be.strokeStyle = t1[aL].tM ? bJ.tN : t8 ? bJ.tO : bJ.tP, t1[aL].be.fillStyle = su, t1[aL].be.fillRect(aV - fI, 0, 1, fI), t1[aL].be.lineWidth = Math.max(Math.floor(fI / 12), 3), t1[aL].be.lineCap = "round";
		t8 = .35;
		aV = fI + 1, t1[aL].be.beginPath(), t1[aL].be.moveTo(Math.floor(aV - t8 * fI + 0), Math.floor(t8 * fI)), t1[aL].be.lineTo(Math.floor(aV - fI + t8 * fI), Math.floor(fI - t8 * fI + 0)), t1[aL].be.stroke(), t1[aL].be.beginPath(), t1[aL].be
			.moveTo(Math.floor(aV - fI + t8 * fI), Math.floor(t8 * fI)), t1[aL].be.lineTo(Math.floor(aV - t8 * fI + 0), Math.floor(fI - t8 * fI + 0)), t1[aL].be.stroke()
	}

	function tk(cK, ti) {
		for (var d2, aL = ti - 1; 0 <= aL; aL--) d2 = nN.sR(j.k, aL), cK[aL].d2 !== d2 && (cK[aL].d2 = d2, cK[aL].tL = Math.max(d2, cK[aL].tL), cK[aL].t7 = !0)
	}

	function tp(cK, tm) {
		for (var gC = j.k << 3, dB = d8.d9.dB, tt = d8.d9.tt, tr = d8.d9.tr, aL = tm - 1; 0 <= aL; aL--) {
			var ts = tr[gC + aL],
				d2 = dB[ts];
			cK[aL].d2 !== d2 ? (cK[aL].d2 = d2, cK[aL].tL = Math.max(d2, cK[aL].tL), cK[aL].t7 = !0) : cK[aL].tM || tt[ts] % 64 != 5 || (cK[aL].tM = !0, cK[aL].t7 = !0)
		}
	}

	function t5(ri) {
		ri.canvas = document.createElement("canvas"), v.kZ.font = eU;
		var aV = t2;
		ri.nR < j.cW && 0 === ri.id && (aV += Math.floor(v.kZ.measureText(cT.cU[ri.nR] + "000").width)), aV += fI, 0 === ri.id && (aV += fI), ri.canvas.width = aV, ri.canvas.height = fI, ri.be = ri.canvas.getContext("2d", {
			alpha: !0
		}), ri.be.font = eU, bQ.bR.textBaseline(ri.be, 1), bQ.bR.textAlign(ri.be, 1)
	}

	function tY(aL) {
		return tu.tv() ? bN.aV - t1[aL].canvas.width - bT.gap : tu.aH
	}

	function tZ(aL) {
		return Math.floor(2 * bT.gap + (tu.tv() ? gZ.au + bT.gap : 0) + tu.au + aL * (1.3 * fI))
	}
	this.b3 = function() {
		t3 = t4 = 0, t1 = [], this.resize()
	}, this.resize = function() {
		eU = bp.bP, fI = bp.fontSize + 5, fI = Math.floor(1.25 * fI), b4.b5.b6() && (fI = Math.floor(1.25 * fI)), eN = Math.floor(.15 * fI), v.kZ.font = eU, t2 = Math.floor(v.kZ.measureText("02 000 000 0000").width);
		for (var aL = t1.length - 1; 0 <= aL; aL--) t5(t1[aL]), t6(aL)
	}, this.j3 = function() {
		for (var aL = t1.length - 1; 0 <= aL; aL--) t1[aL].t7 && (t1[aL].t7 = !1, t6(aL))
	}, this.bt = function(hr, hs) {
		if (2 !== j.e5 && 0 !== cT.iw[j.k] && !j.cp && !bQ.by.cZ(j.k))
			for (var tT, tU, tV, tW = b4.b5.b6() ? fI : 0, tX = b4.b5.b6() ? Math.floor(.15 * fI) : 0, aL = t1.length - 1; 0 <= aL; aL--)
				if (tT = tY(aL), tU = tZ(aL), tV = t1[aL].canvas.width, tU - tX <= hs && hs <= tU + fI + tX) {
					if (tT - tW <= hr && hr <= tT + fI + tW) return t1[aL].tM || (t1[aL].t7 = !0, t1[aL].tM = !0, 0 === t1[aL].id ? bx.i1.ta(t1[aL].nR) : bx.i1.tb(t1[aL].nR)), !0;
					if (0 === t1[aL].id && tT + tV - fI - tW <= hr && hr <= tT + tV + tW) return tc.td(3), bx.i1.te(bn.tf(), t1[aL].nR), !0
				} return !1
	}, this.e6 = function() {
		var ah, ak, cK, ti;
		0 === cT.iw[j.k] || bQ.by.cZ(j.k) && !j.cp || (ah = t1.slice(0, t3), ak = t1.slice(t3, t3 + t4), cK = ah, ti = nN.sP(j.k), function(cK, ti) {
			if (t3 !== ti) return 1;
			for (var aL = ti - 1; 0 <= aL; aL--)
				if (cK[aL].nR !== nN.sQ(j.k, aL)) return 1;
			return
		}(cK, ti) ? tk(cK = function(cK, ti) {
			var aL, nR, c7, d2, bM = [];
			loop: for (aL = 0; aL < ti; aL++) {
				for (nR = nN.sQ(j.k, aL), c7 = 0; c7 < cK.length; c7++)
					if (cK[c7].nR === nR) {
						bM.push(cK.splice(c7, 1)[0]);
						continue loop
					} d2 = nN.sR(j.k, aL), t5(d2 = {
					nR: nR,
					d2: d2,
					tL: d2,
					id: 0,
					t7: !0,
					tM: !1,
					canvas: null,
					be: null
				}), bM.push(d2)
			}
			return bM
		}(cK, ti), ti) : tk(cK, ti), ah = cK, ak = function(cK) {
			var tm = d8.d9.gT[j.k];
			return function(cK, tm) {
				if (t4 !== tm) return 1;
				for (var gC = j.k << 3, gj = d8.d9.gj, tr = d8.d9.tr, aL = tm - 1; 0 <= aL; aL--) {
					var ts = tr[gC + aL];
					if (cK[aL].nR !== gj[ts]) return 1
				}
				return
			}(cK, tm) ? tp(cK = function(cK, tm) {
				var aL, nR, c7, bM = [],
					gC = j.k << 3,
					gj = d8.d9.gj,
					dB = d8.d9.dB,
					tr = d8.d9.tr;
				loop: for (aL = 0; aL < tm; aL++) {
					var ts = tr[gC + aL];
					for (nR = gj[ts], c7 = 0; c7 < cK.length; c7++)
						if (cK[c7].nR === nR) {
							bM.push(cK.splice(c7, 1)[0]);
							continue loop
						} ts = dB[ts], t5(ts = {
						nR: nR,
						d2: ts,
						tL: ts,
						id: 1,
						t7: !0,
						tM: !1,
						canvas: null,
						be: null
					}), bM.push(ts)
				}
				return bM
			}(cK, tm), tm) : tp(cK, tm), cK
		}(ak), t3 = ah.length, t4 = ak.length, t1 = ah.concat(ak))
	}, this.eD = function() {
		if (0 !== cT.iw[j.k] && (!bQ.by.cZ(j.k) || j.cp))
			for (var aL = t1.length - 1; 0 <= aL; aL--) eF.drawImage(t1[aL].canvas, tY(aL), tZ(aL))
	}
}

function tw() {
	this.b3 = function() {
		this.cK = [], this.hy = 0
	}, this.tx = function() {
		return new Uint8Array(this.cK)
	}, this.ty = function(tz, value) {
		for (var cK = this.cK, iC = this.hy + tz - 1, u0 = 1 + (iC >> 3); cK.length < u0;) cK.push(0);
		for (var aL = this.hy; aL <= iC; aL++) cK[aL >> 3] |= (value >> iC - aL & 1) << 7 - (7 & aL);
		this.hy += tz
	}, this.u1 = function(cK, iJ, iK) {
		var u2 = bQ.oY.u3(cK);
		this.ty(iJ, u2);
		for (var aL = 0; aL < u2; aL++) this.ty(iK, cK[aL])
	}, this.u4 = function(cK, iJ, iN) {
		var u2 = bQ.oY.u3(cK);
		this.ty(iJ, u2);
		for (var aL = 0; aL < u2; aL++) this.u5(cK[aL], iN)
	}, this.u5 = function(bV, iJ) {
		var aI = bV.length;
		this.ty(iJ, aI);
		for (var aL = 0; aL < aI; aL++) this.ty(16, bV.charCodeAt(aL))
	}, this.u6 = function(cE) {
		var u7 = (cE = cE.toDataURL()).split(",");
		if (u7.length < 2) console.log("error 266");
		else {
			cE = bQ.cL.iY(cE = u7[u7.length - 1], "/", "_"), cE = bQ.cL.iY(cE, "\\+", "-");
			var cE = bQ.cL.iY(cE, "=", ""),
				u8 = iP.iV.u9(cE),
				aI = u8.length;
			this.ty(30, aI);
			for (var aL = 0; aL < aI; aL++) this.ty(6, u8[aL])
		}
	}
}

function uA() {
	this.eC = null, this.eB = 0, this.uB = function() {
		for (this.eB = 0, aL = j.cW - 1; 0 <= aL; aL--) 0 !== cT.iw[aL] && this.eB++;
		this.eC = new Uint16Array(this.eB);
		for (var aI = 0, aL = 0; aL < j.cW; aL++) 0 !== cT.iw[aL] && (this.eC[aI++] = aL)
	}, this.uC = function() {
		for (var cj = cT.cj, uH = cT.uH, uI = cT.uI, eC = eA.eC, aL = eA.eB - 1; 0 <= aL; aL--) {
			var aP = eC[aL],
				bv = cj[aP],
				d7 = uH[aP];
			bv <= hu.hv(d7, 4) ? uJ.uK(aP) : d7 <= bv ? 250 <= (uH[aP] = bv) && (uI[aP] = 1) : uH[aP] = d7 - Math.max(1, hu.hv(d7 - bv, 1e3))
		}
		this.uE()
	}, this.uE = function() {
		for (var iw = cT.iw, uF = this.eC, uG = this.eB, aL = uG - 1; 0 <= aL; aL--) 0 === iw[uF[aL]] && (uF[aL] = uF[--uG]);
		this.eB = uG
	}
}

function ph() {
	var uL, uM, ob, og;

	function uN() {
		uQ.uR !== hk.buffer.data[12].value ? (uQ.b3(), f1.g9(8, 1, new gA(30))) : f1.g9(1)
	}
	this.show = function() {
			uL.show(), this.resize()
		}, this.gG = function() {
			uL.gG()
		}, this.resize = function() {
			uL.resize(), uM.resize()
		}, this.oq = function(bB) {
			2 === bB && uL.or[0].os()
		}, uL = new oQ(L(85), [new g0("⬅️ " + L(61), uN), new g0(L(86), function() {
			f1.q7(), hk.mz.uO(), f1.g9(2)
		})]), ob = [], (og = new oh).oi(L(87)), og.uS(L(88)), ob.push(og),
		function(ob) {
			var og = new oh,
				cK = (og.oi(L(116)), uQ.data.uf());
			og.oj(new ok({
				n3: cK,
				value: uQ.data.ug(cK)
			}, function(hy) {
				return hk.mz.gE(12, cK[hy].split(":")[0]), !0
			})), ob.push(og)
		}(ob),
		function(ob) {
			var og = new oh,
				uW = (og.oi(L(114)), []);
			og.ol(new uX([new g0(L(115), function(l0) {
				uY.uZ();
				for (var aL = 0; aL < uW.length; aL++) uW[aL].l0.value = uY.ua[aL];
				return bQ.bR.mu(l0), !0
			}).button]));
			for (var aL = 0; aL < uY.ub.length; aL++) {
				og.uS(uY.ub[aL]);
				for (var c2 = 0; c2 < 2; c2++) {
					var hy = 2 * aL + c2,
						uc = new om({
							value: uY.ua[hy],
							hy: -1
						});
					uc.l0.ud = hy, uW.push(uc), uc.l0.addEventListener("keydown", function(l0) {
						l0.preventDefault();
						var code = l0.code;
						l0.target.value = code, uY.ue(l0.target.ud, code)
					}), c2 && (uc.l0.style.marginLeft = "4%"), uc.l0.style.width = "48%", og.ol(uc)
				}
			}
			ob.push(og)
		}(ob), (og = new oh).oi(L(89)), hk.buffer.data[1].n3 = [L(90), L(91), L(92), L(93)], og.oj(new ok(hk.buffer.data[1])), ob.push(og), (og = new oh).oi(L(94)), hk.buffer.data[9].n3 = [L(91), L(95), L(96)], og.oj(new ok(hk.buffer.data[9])), ob
		.push(og), (og = new oh).oi(L(97)), hk.buffer.data[11].n3 = [L(98), L(99), L(100)], og.oj(new ok(hk.buffer.data[11])), ob.push(og), (og = new oh).oi(L(101)), og.ol(new uV(hk.buffer.data[2])), ob.push(og), (og = new oh).oi(L(102)), og.ol(
			new uV(hk.buffer.data[7])), ob.push(og), (og = new oh).oi(L(103)), og.ol(new uV(hk.buffer.data[8])), ob.push(og), (og = new oh).oi(L(104)), og.ol(new om(hk.buffer.data[5])), ob.push(og), (og = new oh).oi(L(105)), og.ol(new uV(hk.buffer
			.data[13], L(106))), og.ol(new uV(hk.buffer.data[14], L(107))), ob.push(og), (og = new oh).oi(L(108)), og.oj(new ok({
			n3: [L(109), L(110), L(111)],
			value: en.ec
		}, function(aL) {
			en.ec = aL
		})), ob.push(og), (og = new oh).oi(L(112)), og.ol(new uV(hk.buffer.data[15])), og.uS(L(113)), og.ol(new om(hk.buffer.data[16], 1, 0, function(l0) {
			l0.target.value = hu.hz(Math.floor(l0.target.value), 0, 16)
		})), ob.push(og), uM = new oS(uL.oT, ob)
}

function uh() {
	var ul, um;
	this.em = 3, this.ui = null, this.uj = 0, this.uk = 0;

	function ux() {
		return 0 === en.ec ? eh.ei ? 1 : 0 : en.ec - 1
	}

	function v2(es, pe, v1) {
		um[es].pK = !0, us(es), ul[es] = new v5, ul[es].b3(es, pe, v1)
	}

	function v3(aL) {
		return um[aL].pK && ul[aL].v3()
	}

	function us(es) {
		um[es].bU = cH.bU, um[es].uo = !1
	}
	this.b3 = function() {
		this.ui = new Array(this.em), this.ui[0] = "territorial.io", this.ui[1] = "1.territorial.io", this.ui[2] = "4.territorial.io", ul = new Array(this.em), um = new Array(this.em);
		for (var aL = this.em - 1; 0 <= aL; aL--) um[aL] = {
			pK: !1,
			bU: 0,
			uo: !1
		};
		this.eo(0, 0, 0)
	}, this.up = function(aL) {
		return ul[aL]
	}, this.e6 = function() {
		for (var aL = this.em - 1; 0 <= aL; aL--) this.uq(aL) && cH.bU > um[aL].bU + 15e3 && (el.dD.ur(aL, um[aL].uo), us(aL));
		!this.uq(0) && cH.bU > um[0].bU + 8e3 && (um[0].bU = cH.bU, this.eo(0, 0, 0))
	}, this.ut = function(id) {
		return this.eo(0, id, 0) && this.uu(0)
	}, this.uv = function(uw) {
		return uw ? en.ed : ux()
	}, this.uy = function() {
		return ux() ? "game.territorial.io" : "territorial.io"
	}, this.uz = function(v0) {
		v0 = this.uy() + v0;
		return "<a href='https://" + v0 + "' target='_blank'>" + v0 + "</a>"
	}, this.eo = function(es, pe, uw) {
		uw = this.uv(uw);
		if (um[es].pK) {
			if (ul[es].v3()) return ul[es].v4(pe), ul[es].uq();
			ul[es].gG()
		}
		return v2(es, pe, uw), !1
	}, this.v6 = function(es, pe) {
		console.log("Connection to Server " + es), el.v7.v8(es)
	}, this.uu = function(aL) {
		return this.uq(aL) && ul[aL].uu()
	}, this.v9 = function(aL) {
		ul[aL].v9()
	}, this.uq = function(aL) {
		return um[aL].pK && ul[aL].uq()
	}, this.send = function(es, i9) {
		0 !== es && us(es), ul[es].send(i9)
	}, __fx.customLobby.setSendFunction(this.send), this.vA = function(es) {
		8 === eg.f3() && (um[es].uo = !0, el.vB.vC = !0)
	}, this.close = function(es, vD) {
		v3(es) && ul[es].close(vD)
	}, this.vE = function(es, vD) {
		ev.ew(vD), v3(es) && ul[es].close(vD)
	}, this.f0 = function(vD) {
		for (var aL = this.em - 1; 0 <= aL; aL--) this.close(aL, vD)
	}, this.vF = function(es, vD) {
		for (var aL = this.em - 1; 0 <= aL; aL--) aL !== es && this.close(aL, vD)
	}, this.vG = function() {
		0 === this.uj && (j.iv || j.cp) || this.close(this.uj, 3246)
	}, this.vH = function(es, l0) {
		ul[es].gG(), ev.vI(es, l0.code)
	}
}

function vJ(ft, rE) {
	var kp;
	this.resize = function() {
		for (var aL = 0; aL < ft.length; aL++) bQ.bR.gL(ft[aL].button);
		kp.style.gap = kp.style.padding = bQ.bR.fy(bT.rH)
	}, (kp = document.createElement("div")).style.display = "grid", kp.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", kp.style.overflowY = "auto", kp.style.gridAutoRows = "5.3em", kp.style.maxHeight = "100%";
	for (var aL = 0; aL < ft.length; aL++) ft[aL].r3(1), kp.appendChild(ft[aL].button);
	rE.appendChild(kp)
}

function pv() {
	var oN, oO, oP, ft;

	function oR() {
		oV(), f1.oW()[19] = null, f1.oX()
	}

	function vL() {
		oV(), f1.g9(21)
	}

	function oV() {
		1 === j.data.gameMode ? j.vM.vN() : 0 === j.data.gameMode && 1 === j.data.colorsType && bQ.oY.oZ(oP.oa(), j.data.colorsData, 262143)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, ft = [new g0("⬅️ " + L(61), oR)], 1 === j.data.gameMode && ft.push(new g0(L(117), vL, 1, 1)), oN = new oQ(L(118), ft), oO = new oS(oN.oT, (ft = [], 0 === j.data.gameMode ? (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(119), L(75)],
			value: j.data.colorsType
		}, function(hy) {
			oV(), j.data.colorsType = hy, 1 !== j.data.colorsType || j.data.colorsData && j.data.colorsData.length === j.cW || (j.data.colorsData = new Uint32Array(j.cW)), f1.g9(21)
		})), ob.push(og)
	}(ft), 1 === j.data.colorsType && function(ob) {
		var og = new oh;
		og.oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.colorsData, 1)), og.ol(oP), ob.push(og)
	}(ft)) : (j.vM.vN(), ft.push(function() {
		var og = new oh;
		og.oi(L(120));
		for (var aL = 0; aL < cw.cx.length; aL++) {
			var i3 = (aL + 1) % cw.cx.length,
				l0 = og.vQ((0 == i3 ? "" : "Team ") + cw.cx[i3]);
			aL && (l0.style.marginTop = "0.5em"), og.ol(new om({
				hy: -1,
				value: j.data.teamPlayerCount[i3]
			}, 1, 0, function(l0) {
				oN.or[1].r2(0);
				var playerCount = hu.hz(Math.floor(l0.target.value), 0, 512);
				l0.target.value = playerCount, j.data.teamPlayerCount[l0.target.vR] = playerCount
			})).l0.vR = i3
		}
		return og
	}()), function(ob) {
		for (var og = new oh, n3 = (og.oi(L(121)), []), aL = 0; aL < cw.cx.length; aL++) {
			var i3 = (aL + 1) % cw.cx.length;
			n3.push(cw.cx[i3])
		}
		j.data.colorsData || (j.data.colorsData = new Uint32Array(1));
		og.oj(new ok({
			n3: n3,
			value: (j.data.colorsData[0] % 16 + cw.cx.length - 1) % cw.cx.length
		}, function(hy) {
			var hy = (hy + 1) % cw.cx.length,
				vT = cw.vU[hy],
				vT = (vT[0] >> 2 << 12) + (vT[1] >> 2 << 6) + (vT[2] >> 2);
			j.data.colorsData[0] = vT - (15 & vT) + hy
		})), ob.push(og)
	}(ft)), ft))
}

function vV() {
	var au, canvas, be, vW, vX, vY, vZ, t7, va, vb, vc, vd, dS = !1,
		cE = (this.bi = !1, this.aV = 0, new Array(2)),
		ve = 0;

	function qS() {
		var aV = bh.aV,
			d7 = (t7 = !1, vg(be, aV, au), Math.floor(aV / 2));
		1 === vW ? (be.fillStyle = bJ.vh, be.fillRect(d7, 0, d7, au)) : -1 === vW && (be.fillStyle = bJ.vi, be.fillRect(0, 0, d7, au)), vj(be, aV, au, 2);
		var d7 = (d7 = Math.floor(.25 * au)) < 2 ? 2 : d7,
			du = (be.fillStyle = bJ.vk, Math.floor((au - 4) * vX[1] / vY[1]));
		0 < du && be.fillRect(2, au - 2 - du, d7, du), 0 < (du = Math.floor((au - 4) * vX[0] / vY[0])) && be.fillRect(aV - 2 - d7, au - 2 - du, d7, du);
		d7 = (d7 = Math.floor(au / 8)) < 2 ? 2 : d7, vm(be, Math.floor(.4 * au), 0, au, d7, .5, !1), vm(be, Math.floor(aV - 1.4 * au), 0, au, d7, .5, !0), du = 1.1 * au / cE[0].width;
		be.imageSmoothingEnabled = !0, be.setTransform(du, 0, 0, du, (aV - du * cE[0].width) / 2, -.05 * au), be.drawImage(cE[+dS], 0, 0), be.setTransform(1, 0, 0, 1, 0, 0)
	}

	function vt() {
		vd = -1, dS = vu.vv(), bp.cQ(257), bp.dR(dS), bh.bi = !0, t7 = !0, va = 360;
		for (var hm, bv = 0, aL = eA.eB - 1; 0 <= aL; aL--) bQ.by.cZ(eA.eC[aL]) || (bv += cT.cj[eA.eC[aL]]);
		dS ? vY[0] = Math.max(hu.hv(3 * bv, 4), 1) : j.cu ? (hm = 9 === j.dy ? 8 === cw.cy[li.p7()] ? 80 : (hm = hu.hv(100 * li.w0(), j.w1), hu.hv(hu.hz(1550 - 11 * hm, 400, 1e3), 10)) : (hm = hu.hv(100 * li.w0(), j.w1), hu.hv(hu.hz(1600 - 12 * hm,
			400, 1e3), 10)), hm = hu.hv(hm * bv, 100), vY[0] = Math.max(hm, 1)) : 8 === j.dy ? vY[0] = Math.max(hu.hv(3 * bv, 4), 1) : vY[0] = Math.max(hu.hv(3 * bv, 5), 1), vY[1] = Math.max(bv - vY[0], 1)
	}

	function vp() {
		vc = cH.e1(), t7 = !0, va = vW = 0, vZ = [], bh.bi = !1, bp.df(247), vX[0] = vX[1] = 0, bp.cQ(673)
	}

	function bm() {
		return bn.bo(bp.bg()) ? __fx.settings.keybindButtons ? bn.aJ - 2 * (au + bT.gap) : bn.aJ - au - bT.gap : bq.bo(bp.bl()) ? bq.bm() - au - bT.gap : bN.au - au - br.bs() * bT.gap
	}
	this.mW = function() {
		for (var aL = 0; aL < 2; aL++) cE[aL] = bQ.canvas.ha(gN.get(3), 8 - aL, bJ.vf), cE[aL] = bQ.canvas.ox(cE[aL])
	}, this.b3 = function() {
		vc = -1e4, vb = ve = 0, vd = -1, this.bi = !1, t7 = dS = !1, vX = [vW = va = 0, 0], vY = [1, 1], vZ = [], this.resize()
	}, this.resize = function() {
		au = bn.au, this.aV = 4 * au, (canvas = document.createElement("canvas")).width = this.aV, canvas.height = au, be = canvas.getContext("2d", {
			alpha: !0
		}), qS()
	}, this.j3 = function() {
		t7 && qS()
	}, this.bt = function(aH, aJ) {
		return !!this.bi && !(aH < bN.aV - this.aV - bT.gap || aJ < bm() || (j.cp || this.vn(j.k) && (qZ.qa && qZ.qb(), bx.i1.vo(aH > bN.aV - bT.gap - this.aV / 2 ? 1 : 0)), 0))
	}, this.e6 = function() {
		0 < vb ? 0 === --vb && vp() : this.bi ? 180 == --va && 3 * vX[0] < vY[0] ? vp() : vX[0] >= vY[0] ? dS ? rR.l.w2() : rR.l.w3() : vX[1] >= vY[1] ? vb = 4 : va <= 0 && vp() : ! function() {
			var vx = cH.e1();
			if (vx % 40 == 14) {
				if (ve) return !(vx < ve) && !(vx < vc + 535) && (ve = vx + 1071, bQ.by.vy()) ? (vt(), 1) : 0;
				(1 === eA.eB || (j.cu ? li.w0() : cT.cj[h9[0]]) >= hu.hv(96 * j.w1, 100)) && (ve = vx + 535)
			}
			return
		}() && 0 <= vd && (bp.cA(250, L(122, [cT.cU[vd]]), 673, vd, bJ.bL, bJ.bK, -1, !0), vt())
	}, this.w4 = function() {
		this.bi && vX[0] < vY[0] && vp()
	}, this.w5 = function(player, w6) {
		var w7 = L(w6 ? 123 : 124, [cT.cU[player]]),
			w7 = (bp.cA(450, w7, 257, player, w6 ? bJ.tQ : bJ.w8, bJ.bK, -1, !0), vZ.push(player), t7 = !0, j.iv ? Math.max(vY[0], vY[1]) : cT.cj[player]),
			w7 = Math.max(w7, 1);
		w6 ? vX[0] += w7 : vX[1] += w7, player === j.k && (vW = w6 ? 1 : -1)
	}, this.eD = function() {
		var aJ;
		this.bi && (aJ = bm(), eF.drawImage(canvas, bN.aV - this.aV - bT.gap, aJ))
	}, this.w9 = function(player) {
		if (0 !== va) return !1;
		if (!bQ.by.wA(1)) return !1;
		if (!bQ.by.wB(player)) return !1;
		if (10 <= wC[player] && !bQ.by.wD(player, 9)) return !1;
		if (!j.iv) {
			player = cH.e1();
			if (player < vc + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.vn = function(aP) {
		if (!bQ.by.wA(1)) return !1;
		if (!bQ.by.wB(aP)) return !1;
		if (!this.bi) return !1;
		for (var aL = vZ.length - 1; 0 <= aL; aL--)
			if (vZ[aL] === aP) return !1;
		return !0
	}, this.wF = function(player) {
		vd = player
	}
}

function wG() {
	var wH = 0,
		wI = "",
		wJ = 0,
		wK = 0,
		wL = 0;

	function wN(f7) {
		el.ep.wY(3, f7)
	}

	function wW(aY) {
		wH = 1, jl.message.lt({
			id: 6,
			value: aY
		})
	}

	function wQ(cC) {
		var wd = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return cC.match(wd)
	}
	this.d = function(cC) {
		var wM, cK, wS;
		if (wH) return wH = 0, "yes" === (wM = cC.toLowerCase()) || "y" === wM ? void wN(wI) : void jl.message.lt({
			id: 5,
			jS: 7
		});
		!(cC.indexOf("@") < 0) && (wM = wQ(cC)) ? (wI = cC, cK = function(wP) {
			for (var aI = wP.length, wZ = [0, 0, 0, 0], aL = 0; aL < aI; aL++)
				for (var aV = wP[aL], c2 = 0; c2 < 4; c2++) aV === "@room" + (c2 + 1) && (wZ[c2] = 1);
			if ((wK = bQ.oY.tE(wZ)) % 4 == 0) return bQ.oY.wa(jl.jm.jk);
			for (c2 = 0; c2 < 4; c2++) wZ[c2] = wZ[c2] ? jl.jm.jk[c2] : [];
			return bQ.oY.wa(wZ)
		}(wM), function(wP, wS, cC) {
			if (!wJ) return;
			for (var aI = wS.length, aL = 0; aL < aI; aL++) 2 === wS[aL].id && (cC = cC.replace(wP[wS[aL].hy], "@" + wS[aL].hm));
			return wH = 1, wN((wI = cC).slice(0, 126) + "|"), 1
		}(wM, wS = function(wP) {
			for (var wS = [], aI = (wL = wJ = 0, wP.length), aL = 0; aL < aI; aL++) {
				var aV = wP[aL],
					d7 = aV.length;
				bQ.cL.startsWith(aV, "@[") ? d7 <= 9 && bQ.cL.mv(aV, "]") && wS.push({
					id: 0,
					hm: aV.substring(2, d7 - 1).toUpperCase()
				}) : 6 === d7 ? bQ.cL.startsWith(aV, "@room") || (wL++, wS.push({
					id: 1,
					hm: iP.iV.lA(aV.substring(1), 5)
				})) : 1 < d7 && d7 < 5 && 0 <= (d7 = uQ.data.wc(aV.substring(1))) && (wS.push({
					id: 2,
					hm: d7,
					hy: aL
				}), wJ = 1)
			}
			return wS
		}(wM), cC) || (0 === wS.length ? wK || function(wP) {
			for (var aI = wP.length, aL = 0; aL < aI; aL++) {
				var aV = wP[aL];
				if ("@all" === aV || "@everyone" === aV) return 1
			}
			return
		}(wM) ? wW(cK.length) : wN(cC) : wM.length === wL ? wN(cC) : (function(cK, wS) {
			var d7 = wS.length;
			if (0 === d7) return;
			var aI = cK.length;
			loop: for (var aL = aI - 1; 0 <= aL; aL--) {
				for (var c2 = 0; c2 < d7; c2++)
					if (0 === wS[c2].id) {
						if (wS[c2].hm === bQ.cL.ju(cK[aL].username)) continue loop
					} else if (1 === wS[c2].id && wS[c2].hm === cK[aL].jQ) continue loop;
				cK[aL] = cK[--aI], cK.pop()
			}
		}(cK, wS), wW(cK.length)))) : wN(cC)
	}, this.we = function(cC) {
		var wP = wQ(cC);
		if (wP)
			for (var wf = new RegExp("^[0-9]+$"), aI = wP.length, aL = 0; aL < aI; aL++) {
				var aV = wP[aL].substring(1),
					d7 = aV.length;
				1 <= d7 && d7 <= 3 && wf.test(aV) && (d7 = parseInt(aV, 10), !isNaN(d7)) && 0 <= d7 && d7 < uQ.data.cK.length && (cC = cC.replace("@" + aV, "@" + uQ.data.cK[d7]))
			}
		return cC
	}
}

function wg() {
	this.e6 = function(i9) {
		var id, aQ, iC;
		for (pD.b3(i9), pD.hy += 2, iC = 8 * pD.size; pD.hy + 8 <= iC;) id = pD.iB(4), aQ = pD.iB(9), 0 === id ? this.wh(id, aQ, pD.iB(22)) : 1 === id ? this.wh(id, aQ, pD.iB(10), pD.iB(10)) : 2 === id ? this.wh(id, aQ, pD.iB(10), pD.iB(9)) :
			3 === id ? this.wh(id, aQ, pD.iB(10), pD.iB(27)) : 4 === id ? this.wh(id, aQ, pD.iB(10), pD.iB(16)) : 5 === id || 6 === id ? this.wh(id, aQ, pD.iB(10)) : 7 === id ? this.wh(id, aQ, pD.iB(1)) : 10 === id ? this.wh(id, aQ, pD.iB(20), pD
				.iB(22)) : this.wh(id, aQ)
	}, this.wi = [], this.wj = function() {
		for (var wl = 0, wm = 0, wn = 0, wo = 0, wp = 0, wq = 0, aL = 0; aL < 512; aL++) wl += cT.iw[aL], wm += cT.cj[aL], wn += cT.ct[aL], wo += d8.d9.gT[aL];
		wp += d8.d9.wr, wq += eA.eB, this.wi.push(wn % 1073741824 * 4 + (wl + wm + wo + wp + wq) % 4)
	}, this.wh = function(id, aQ, ws, wt) {
		0 === id ? bx.wu.wv(aQ, ws) : 1 === id ? bx.wu.te(aQ, ws, wt) : 2 === id ? bx.wu.ww(aQ, ws, wt) : 3 === id ? bx.wu.pF(aQ, ws, wt) : 4 === id ? bx.wu.pI(aQ, ws, wt) : 5 === id ? bx.wu.ta(aQ, ws) : 6 === id ? bx.wu.wx(aQ, ws) : 7 === id ?
			bx.wu.vo(aQ, ws) : 8 === id ? bx.wu.wy(aQ) : 9 === id ? bx.wu.wz(aQ) : 10 === id && bx.wu.x0(aQ, ws >> 10, wt, ws % 1024)
	}
}

function x1() {
	function xH() {
		return {
			w: v.w,
			y: v.y,
			x5: v.x5,
			kZ: v.kZ,
			ka: v.ka,
			aU: v.aU,
			dr: v.dr,
			mapSeed: v.mapSeed,
			x6: v.x6
		}
	}

	function x9(aL) {
		return 1 !== aL && v.xA(aL) && aL !== v.xK()
	}
	this.x2 = 25, this.x3 = 13, this.x4 = 4096, this.w = 0, this.y = 0, this.x5 = null, this.kZ = null, this.ka = null, this.aU = null, this.dr = 0, this.mapSeed = 0, this.x6 = !1, this.kO = new k4, this.dp = new x7, this.aa = new aN, this.b3 =
		function() {
			this.dp.b3()
		}, this.kT = function(map, x8) {
			((map %= this.x2) !== this.dr || x9(this.dr) && x8 !== this.mapSeed) && (this.x6 = !1, this.kO.kH(), gh.kS(map), this.dr = map, this.mapSeed = x8, x9(map) && (v.dp.dq[map].kQ = x8), this.xA(this.dr) ? (map = v.dp.dq[this.dr], this.w = map
				.aV, this.y = map.au, gh.kS(map.kQ), kI.kT([this.w, this.y, map.xC, map.xD]), xE(), aZ.xF(), kI.kJ()) : xB())
		}, this.xG = function(map, x8) {
			var aQ = xH(),
				map = (this.kT(map, x8), this.kO.kH(), xH());
			return x8 = aQ, v.w = x8.w, v.y = x8.y, v.x5 = x8.x5, v.kZ = x8.kZ, v.ka = x8.ka, v.aU = x8.aU, v.dr = x8.dr, v.mapSeed = x8.mapSeed, v.x6 = x8.x6, map
		}, this.xJ = function(canvas) {
			canvas && this.x5 !== canvas && (this.w = canvas.width, this.y = canvas.height, this.x5 = canvas, this.kZ = this.x5.getContext("2d", {
				alpha: !1
			}), this.oz = this.kZ.getImageData(0, 0, this.w, this.y), this.aU = this.oz.data, this.dr = this.xK(), this.mapSeed = 0, v.dp.dq[this.dr].name = j.data.mapName)
		}, this.xL = function(aL) {
			return 3 === aL || 7 === aL || 9 === aL || 21 === aL || aL === this.xK()
		}, this.xM = function(aL) {
			return 2 === aL || 7 === aL || 9 === aL || 20 === aL
		}, this.xN = function(aL) {
			return 1 === aL
		}, this.xK = function() {
			return this.x2
		}, this.xA = function(aL) {
			return void 0 === this.dp.dq[aL].kM
		}, this.xO = function(cF) {
			return 0 === cF.mapType ? cF.mapProceduralIndex < 10 ? cF.mapProceduralIndex : 10 + cF.mapProceduralIndex : 1 === cF.mapType ? 10 <= cF.mapRealisticIndex ? 22 + cF.mapRealisticIndex - 10 : cF.mapRealisticIndex + 10 : void 0
		}, this.xP = function(cF, xQ) {
			0 === cF.mapType ? cF.mapProceduralIndex = xQ < 10 ? xQ : xQ - 10 : 1 === cF.mapType && (cF.mapRealisticIndex = xQ - (22 <= xQ ? 12 : 10))
		}
}

function xR() {
	this.b3 = function() {
		! function() {
			var data = hk.buffer.data;
			0 === data[2].xU && (bN.au > bN.aV || 0 !== b4.id) && (data[2].value = data[2].xV = 1);
			0 === data[100].xU && (data[100].value = data[100].xV = (0 === b4.id ? "Player " : 1 === b4.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aL, data = hk.buffer.data,
			aI = data.length;
		for (aL = 0; aL < aI; aL++) {
			var xW = hk.os.xX(aL, !0);
			data[aL] && data[aL].xU === xW && (null === (xW = hk.os.xY(aL)) ? data[aL].value = data[aL].xV : 2 === data[aL].type ? data[aL].value = xW : (xW = Number(xW), isNaN(xW) ? data[aL].value = data[aL].xV : data[aL].value = xW))
		}
	}
}

function pz() {
	var oN, oO, oP;

	function oR() {
		oV(), 3 !== j.data.botDifficultyType || bQ.oY.tE(j.data.botDifficultyData) || (j.data.botDifficultyType = 0), 3 !== j.data.botDifficultyType && (j.data.botDifficultyData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		3 === j.data.botDifficultyType && bQ.oY.oZ(oP.oa(), j.data.botDifficultyData, d0.d1.length - 1)
	}

	function xb(ob, hy) {
		var og = new oh,
			value = (og.oi(hy < 0 ? L(18) : L(17) + " " + cw.cx[hy % 9]), 0 <= hy && (og.vQ(L(120) + ": " + j.data.teamPlayerCount[hy]).style.marginBottom = "1em"), hy < 0 ? j.data.botDifficultyValue : j.data.botDifficultyTeam[hy]);
		og.oj(new ok({
			n3: d0.d1,
			value: value
		}, function(i3) {
			hy < 0 ? j.data.botDifficultyValue = i3 : j.data.botDifficultyTeam[hy] = i3
		})), ob.push(og)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(18), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, function() {
		var ob = [];
		if (function(ob) {
				var og = new oh,
					n3 = (og.oi(L(72)), [L(74), L(125), L(126), L(75)]),
					value = j.data.botDifficultyType;
				0 === j.data.gameMode && (value = Math.min(value, 2), n3.splice(2, 1));
				og.oj(new ok({
					n3: n3,
					value: value
				}, function(hy) {
					oV(), j.data.botDifficultyType = hy, 0 === j.data.gameMode && 2 === hy && (j.data.botDifficultyType = 3), 3 !== j.data.botDifficultyType || j.data.botDifficultyData || (j.data.botDifficultyData =
						new Uint8Array(j.cW)), 2 !== j.data.botDifficultyType || j.data.botDifficultyTeam || (j.data.botDifficultyTeam = new Uint8Array(9)), f1.g9(25)
				})), ob.push(og)
			}(ob), 0 === j.data.botDifficultyType) xb(ob, -1);
		else if (2 === j.data.botDifficultyType)
			for (var aL = 0; aL < j.data.teamPlayerCount.length; aL++) j.data.teamPlayerCount[aL] && xb(ob, aL);
		else 3 === j.data.botDifficultyType && ! function(ob) {
			var og = new oh;
			og.oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.botDifficultyData, 8)), og.ol(oP), ob.push(og)
		}(ob);
		return ob
	}())
}

function x7() {
	this.dq = null, this.xc = null, this.xd = null, this.b3 = function() {
		this.xe = [L(127), L(128), L(129), L(130), L(131), L(132), L(133), L(134), L(135), L(136), L(137), L(138), L(139), L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), "Mare Nostrum"];
		var xf = [120, 105, 92],
			cos = [12, 12, 60],
			xg = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			xh = [140, 130, 120],
			xi = [12, 12, 76],
			xj = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			xk = [130, 117, 106],
			xl = [12, 12, 68],
			xm = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.dq = new Array(v.x2 + 1), __fx.customLobby.setMapInfo(this.dq), this.dq[0] = {
			aV: 230,
			au: 230,
			xC: 1e3,
			xD: 2e3,
			kQ: 173
		}, this.dq[1] = {
			aV: 800,
			au: 800,
			xC: 100,
			xD: 50,
			kQ: 43
		}, this.dq[2] = {
			aV: 512,
			au: 512,
			xC: 128,
			xD: 32,
			kQ: 0
		}, this.dq[3] = {
			aV: 960,
			au: 960,
			xC: 60,
			xD: 8,
			kQ: 0
		}, this.dq[4] = {
			aV: 900,
			au: 900,
			xC: 100,
			xD: 5,
			kQ: 0
		}, this.dq[5] = {
			aV: 1e3,
			au: 1e3,
			xC: 100,
			xD: 40,
			kQ: 0
		}, this.dq[6] = {
			aV: 1e3,
			au: 1e3,
			xC: 100,
			xD: 20,
			kQ: 0
		}, this.dq[7] = {
			aV: 1024,
			au: 1024,
			xC: 128,
			xD: 32,
			kQ: 0
		}, this.dq[8] = {
			aV: 820,
			au: 820,
			xC: 200,
			xD: 100,
			kQ: 0
		}, this.dq[9] = {
			aV: 1024,
			au: 1024,
			xC: 128,
			xD: 32,
			kQ: 0
		}, this.dq[10] = {
			kK: xh,
			kL: xi,
			kM: xj
		}, this.dq[11] = {
			kK: xk,
			kL: xl,
			kM: xm
		}, this.dq[12] = {
			kK: xk,
			kL: xl,
			kM: xm
		}, this.dq[13] = {
			kK: xf,
			kL: cos,
			kM: xg
		}, this.dq[14] = {
			kK: xf,
			kL: cos,
			kM: xg
		}, this.dq[15] = {
			kK: xh,
			kL: xi,
			kM: xj
		}, this.dq[16] = {
			kK: xh,
			kL: xi,
			kM: xj
		}, this.dq[17] = {
			kK: xf,
			kL: cos,
			kM: xg
		}, this.dq[18] = {
			kK: xk,
			kL: xl,
			kM: xm
		}, this.dq[19] = {
			kK: xf,
			kL: cos,
			kM: xg
		}, this.dq[20] = {
			aV: 1024,
			au: 1024,
			xC: 128,
			xD: 32,
			kQ: 0
		}, this.dq[21] = {
			aV: 940,
			au: 940,
			xC: 80,
			xD: 8,
			kQ: 0
		}, this.dq[22] = {
			kK: xk,
			kL: xl,
			kM: xm
		}, this.dq[23] = {
			kK: xh,
			kL: xi,
			kM: xj
		}, this.dq[24] = {
			kK: [157, 136, 117],
			kL: [16, 13, 68],
			kM: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			dt: "[OG] Neutronian"
		};
		for (var aL = 0; aL < v.x2; aL++) this.dq[aL].name = this.xe[aL];
		this.dq[v.x2] = {
			name: ""
		}, this.xc = new Uint8Array(12);
		for (aL = 0; aL < 10; aL++) this.xc[aL] = aL;
		for (this.xc[10] = 20, this.xc[11] = 21, this.xd = new Uint8Array(v.x3), aL = 0; aL < 10; aL++) this.xd[aL] = 10 + aL;
		this.xd[10] = 22, this.xd[11] = 23, this.xd[12] = 24
	}
}

function xp() {
	this.os = new xq, this.buffer = new xr, this.mz = new xs, this.d9 = new mx, this.xt = new xu, this.b3 = function() {
		this.buffer.b3(), (new xR).b3(), this.xt.b3(), this.d9.n8()
	}
}

function xv() {
	var bi, xw, aV, au, qu, xx, xy, xz, canvas, y0, y1;

	function bm() {
		return Math.floor((bN.aV - aV) / 2) < bn.au + 2 * bT.gap ? bN.au - au - 4 * bT.gap - bn.au : bN.au - au - 2 * bT.gap
	}
	this.b3 = function() {
		y1 = bi = !1, qu = .61, xx = .07, xy = .09, y0 = xz = au = 0
	}, this.resize = function() {
		var be, c4, bB, y6, y7, y8;
		bi && (aV = y2(aV = b4.b5.b6() ? Math.floor(.69 * bN.bO) : Math.floor(.5 * bN.bO), bk(bN.aV - 2 * bT.gap, 10)), aV = y2(aV, Math.floor(3.57 * bk(bN.au - 2 * bT.gap, 3))), au = Math.floor(.28 * aV), (canvas = document.createElement(
			"canvas")).width = aV, canvas.height = au, be = canvas.getContext("2d", {
			alpha: !0
		}), c4 = Math.floor(1 + au / 40), be.clearRect(0, 0, aV, au), be.fillStyle = bJ.bK, be.fillRect(c4, c4, aV - 2 * c4, au - 2 * c4), be.lineJoin = "bevel", be.lineWidth = 2 * c4, be.strokeStyle = bJ.bL, be.strokeRect(c4, c4, aV -
			2 * c4, au - 2 * c4), be.imageSmoothingEnabled = !1, bB = gN.get(xw), y6 = bB.width, y8 = (1 === xw ? .85 : 21 === xw ? .666 : .9) * qu * au / (y7 = bB.height), be.setTransform(y8, 0, 0, y8, Math.floor((aV - y8 * y6) / 2),
			Math.floor((au - y8 * y7) / 2)), be.drawImage(bB, 0, 0), be.setTransform(1, 0, 0, 1, Math.floor(aV - xy * au - xx * au - c4), Math.floor(c4 + xx * au)), function(be, aI) {
			be.lineWidth = Math.floor(1 + au / 80), be.strokeStyle = bJ.bL, be.beginPath(), be.moveTo(0, 0), be.lineTo(aI, aI), be.moveTo(0, aI), be.lineTo(aI, 0), be.stroke()
		}(be, Math.floor(xy * au)), be.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(hm, y4, vv, y5) {
		bi || y5 && y1 || (xw = vv ? 21 : hm ? 1 : 2, bi = y1 = !0, this.resize(), i0.gG(), bn.vp(), y0 = cH.bU, xz = y4 ? 1 : 0)
	}, this.e6 = function() {
		!bi || 1 <= xz || (xz = 1 < (xz += 5e-4 * (cH.bU - y0)) ? 1 : xz, y0 = cH.bU, cH.cI = !0)
	}, this.bt = function(aH, aJ) {
		return !(!bi || xz <= 0 || (aH -= Math.floor((bN.aV - aV) / 2), aJ -= bm(), aH < 0) || aJ < 0 || aV < aH || au < aJ || (aV - au / 3 < aH && aJ < au / 3 && (bi = !1, cH.cI = !0), 0))
	}, this.eD = function() {
		!bi || xz <= 0 || (eF.globalAlpha = xz, eF.drawImage(canvas, Math.floor((bN.aV - aV) / 2), bm()), eF.globalAlpha = 1)
	}
}

function yA() {
	this.iV = new yB, this.iQ = new yC, this.yD = new yE, this.b3 = function() {
		this.iV.b3()
	}
}

function yF() {
	this.hb = new yG, this.cO = new hI
}

function pk() {
	var uL, uM, ob;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(151), [new g0("⬅️ " + L(61), function() {
		f1.g9(7, f1.lu(7).pe)
	}), new g0(L(152), function() {
		hk.mz.gE(105, iP.iV.yI(uM.yJ[0].yK[0].l0.value, 5)), hk.mz.gE(106, iP.iV.yI(uM.yJ[1].yK[0].l0.value, 15)), f1.g9(8, f1.lu(7).pe, new gA(18))
	})]), uM = new oS(uL.oT, ((ob = []).push(function() {
		var og = new oh;
		return og.oi(L(153)), og.ol(new om({
			value: "",
			hy: -1
		})), og
	}()), ob.push(function() {
		var og = new oh,
			yO = (og.oi(L(154)), new om({
				value: "",
				hy: -1
			}));
		return yO.l0.type = "password", og.ol(yO), og.ol(new uX([new g0(L(155), function(l0) {
			return l0.textContent === L(155) ? (l0.textContent = L(156), yO.l0.type = "text") : (l0.textContent = L(155), yO.l0.type = "password"), !0
		}).button])), og
	}()), ob.push(function() {
		var og = new oh;
		return og.oi(L(157)), og.uS(L(158)), og.uS(L(159)), og.uS(L(160)), og
	}()), ob))
}

function yP() {
	var yQ = -1,
		yR = null,
		yS = -1,
		yT = 4;

	function ya() {
		qZ.ye() ? j7.render() : j7.yf()
	}

	function ym(bB, a0) {
		var db = bB >> 16,
			dc = bB >> 8 & 255,
			bB = 255 & bB,
			yn = 255 - a0,
			yn = (yn < db && yn < dc && yn < bB && (a0 = -a0), yQ >> 7),
			yp = yQ >> 5 & 3,
			yq = yQ >> 3 & 3;
		return (Math.max(Math.min(db + a0, 252 + yn), yn) << 16) + (Math.max(Math.min(dc + a0, 252 + yp), yp) << 8) + Math.max(Math.min(bB + a0, 252 + yq), yq)
	}

	function yZ() {
		return -1 !== yQ && (f.yk(yQ, yR[0], yR[1], yR[2]), yl(yQ), yQ = -1)
	}

	function yl(player) {
		cH.cI = !0;
		for (var gu = cT.gu[player], gv = cT.gv[player], gw = cT.gw[player], gy = cT.gy[player], aJ = gv; aJ <= gy; aJ++)
			for (var aH = gu; aH <= gw; aH++) {
				var e = f.yr(aH, aJ);
				f.ys(player, e) && (f.yt(e) ? f.nX(e, player) : f.nV(e) ? f.yu(e, player) : f.yv(e, player))
			}
	}
	this.b3 = function() {
		yR = null, yS = yQ = -1, yT = hu.hz(Math.floor(hk.buffer.data[16].value), 0, 16)
	}, this.e6 = function(e0) {
		if (hk.buffer.data[15].value && 0 !== yT && (e0 || !l3.l4())) {
			var e0 = n.yU(l3.yV),
				s = n.yW(l3.yX);
			if (n.yY(e0, s)) {
				e0 = n.yb(e0, s), s = n.yc(e0);
				if (yS === s)
					if (f.nW(s)) {
						if (yQ === f.co(s)) return
					} else if (-1 === yQ) return;
				! function(e) {
					f.nW(e) ? (e = f.co(e)) !== yQ && (yZ(), function(player) {
						yQ = player, yR = f.yh(player);
						var yi = function() {
							var cF = yR,
								oD = yT << 2,
								oF = oD << 1;
							return [ym(cF[0], oD), ym(cF[1], oF), ym(cF[2], oF)]
						}();
						f.yk(player, yi[0], yi[1], yi[2]), yl(player)
					}(e), ya()) : yZ() && ya()
				}(yS = s)
			} else yZ() && ya()
		}
	}
}

function on(yw, yx, yy, yz) {
	var z0 = document.createElement("textarea"),
		z1 = (this.l0 = z0, !0);

	function z7() {
		z0.select(), document.execCommand("copy")
	}
	this.resize = function() {
			yx && bQ.bR.gL(z0, 5)
		}, this.oo = function(sf) {
			z0.value = sf
		}, this.oa = function() {
			return z0.value
		}, this.z5 = function() {
			z0.select()
		}, this.clear = function() {
			z0.value = ""
		}, this.z6 = function() {
			z1 && navigator.clipboard ? (z0.select(), navigator.clipboard.writeText(z0.value).catch(function() {
				z1 = !1, z7()
			})) : z7()
		}, z0.setAttribute("id", "textArea" + f1.d9.z2++), z0.setAttribute("autocomplete", "off"), yw && z0.setAttribute("placeholder", yw), z0.style.top = "0", z0.style.left = "0", z0.style.width = "100%", z0.style.height = "100%", z0.style
		.userSelect = "none", z0.style.outline = "none", z0.style.resize = "none", z0.style.border = "none", z0.style.color = bJ.bL, z0.style.backgroundColor = bJ.z3, yz ? (z0.style.fontSize = "1em", z0.rows = 6, z0.style.padding = "0.25em") : (z0
			.style.padding = "0.45em", z0.style.fontSize = "1.2em"), yy && z0.addEventListener("input", function(l0) {
			yy(l0)
		}), z0.addEventListener("focus", function() {
			bN.z4++
		}), z0.addEventListener("blur", function() {
			bN.z4--
		})
}

function z8() {
	this.z9 = null, this.zA = null, this.zB = null, this.zC = null, this.zD = null, this.zE = null, this.zF = "";
	var zG = 0;
	this.b3 = function() {
		this.z9 = [], this.zA = [], this.zB = [], this.zC = [], this.zD = [0], this.zE = [0], zG = 0, this.zF = ""
	}, this.zH = function(id, aQ, ws, wt) {
		j.cp || 2 === j.e5 || (0 === this.zD[zG] && (this.zE[zG] ? (this.zD.push(1), this.zE.push(0), zG++) : this.zD[zG] = 1), this.z9.push(id), this.zA.push(aQ), this.zB.push(void 0 === ws ? 0 : ws), this.zC.push(void 0 === wt ? 0 : wt), this
			.zE[zG]++)
	}, this.e6 = function() {
		0 === this.zD[zG] ? this.zE[zG]++ : (this.zD.push(0), this.zE.push(0), zG++)
	}
}

function zI() {
	this.mO = function(canvas, mG, mF) {
		var aV = canvas.width,
			au = canvas.height,
			bB = bQ.bR.me(aV, au),
			i5 = bQ.bR.getContext(bB, !0),
			canvas = (i5.drawImage(canvas, 0, 0), i5.getImageData(0, 0, aV, au));
		return mG(canvas.data, aV, au, mF), i5.putImageData(canvas, 0, 0), bB
	}, this.mM = function(cO, aV, au) {
		for (var aH = aV - 1; 0 <= aH; aH--)
			for (var aJ = au - 1; 0 <= aJ; aJ--) {
				var aL = 4 * (aH + aJ * aV);
				cO[3 + aL] = cO[aL], cO[aL] = cO[1 + aL] = cO[2 + aL] = 255
			}
	}, this.mI = function(cO, aV, au) {
		for (var aH = aV - 1; 0 <= aH; aH--)
			for (var aJ = au - 1; 0 <= aJ; aJ--) {
				var aL = 4 * (aH + aJ * aV);
				cO[1 + aL] > cO[2 + aL] + 10 && (cO[3 + aL] = cO[aL], cO[1 + aL] = cO[2 + aL])
			}
	}, this.mK = function(cO, aV, au, mF) {
		for (var gap = Math.floor(Math.min(aV, au) * mF), aH = 0; aH < aV; aH++)
			for (var aL, aJ = 0; aJ < au; aJ++)(aH < gap || aJ < gap || aV - gap <= aH || au - gap <= aJ) && (cO[3 + (aL = 4 * (aH + aJ * aV))] = 255 - 255 * (cO[1 + aL] - cO[aL]) / (255 - cO[aL]))
	}, this.zJ = function(cO, aV, au, mF) {
		for (var aH = aV - 1; 0 <= aH; aH--)
			for (var aJ = au - 1; 0 <= aJ; aJ--) {
				var aL = 4 * (aH + aJ * aV);
				cO[aL] = mF[0], cO[1 + aL] = mF[1], cO[2 + aL] = mF[2]
			}
	}, this.mJ = function(cO, aV, au, mF) {
		for (var gap = Math.floor(aV * mF), aH = 0; aH < aV; aH++)
			for (var aL, aJ = 0; aJ < au; aJ++)(aH < gap || aJ < gap || aV - gap <= aH || au - gap <= aJ) && (cO[aL = 4 * (aH + aJ * aV)] = cO[1 + aL] = cO[2 + aL] = 0)
	}, this.mL = function(cO, aV, au) {
		for (var aJ, aL, aH = aV - 1; 0 <= aH; aH--)
			for (aJ = au - 1; 0 <= aJ; aJ--) 200 < cO[1 + (aL = 4 * (aH + aJ * aV))] && cO[1 + aL] - 20 > cO[aL] && cO[1 + aL] - 20 > cO[2 + aL] ? cO[aL] + cO[2 + aL] < 40 ? cO[3 + aL] = 0 : (cO[3 + aL] = cO[aL], cO[aL] = 255, cO[1 + aL] = 255,
				cO[2 + aL] = 255) : cO[aL] < 50 && cO[1 + aL] < 50 && cO[2 + aL] < 50 && (cO[aL] + cO[1 + aL] + cO[2 + aL] < 50 ? cO[3 + aL] = 180 : cO[3 + aL] = 180 + Math.floor(75 * (cO[aL] + cO[1 + aL] + cO[2 + aL] - 50) / 100))
	}, this.mN = function(cO, aV, au) {
		for (var aJ, aL, aH = aV - 1; 0 <= aH; aH--)
			for (aJ = au - 1; 0 <= aJ; aJ--) cO[1 + (aL = 4 * (aH + aJ * aV))] > cO[aL] + 20 && cO[1 + aL] > cO[2 + aL] + 20 && cO[aL] + cO[2] < 40 && (cO[3 + aL] = 255 - cO[1 + aL], cO[aL] = cO[1 + aL] = cO[2 + aL] = cO[aL])
	}, this.p0 = function(cO, aV, au, mF) {
		for (var db = aV >> 1, aH = 0; aH < aV; aH++)
			for (var aJ = 0; aJ < au; aJ++) Math.sqrt((aH - db) * (aH - db) + (aJ - db) * (aJ - db)) > mF * db && (cO[4 * (aH + aJ * aV) + 3] = 0)
	}
}

function yE() {
	this.zK = function(bV, iJ, zL) {
		for (var zM = [], aI = bV.length, max = 0, aL = 0; aL < aI; aL++) {
			var hm = bV.charCodeAt(aL);
			zM.push(hm), max = Math.max(max, hm)
		}
		var pE = max < 128 ? 7 : 16;
		for (zL.ty(iJ, aI), zL.ty(1, +(16 == pE)), aL = 0; aL < aI; aL++) zL.ty(pE, zM[aL])
	}
}

function fX() {
	var zN = 0,
		zO = 0,
		zP = 300,
		zQ = 300,
		zR = 0;
	this.zS = 0, this.buffer = new Uint32Array(512), this.b3 = function() {
		zO = zN = 0, this.zS = 0, zR = 0
	}, this.e6 = function() {
		if (function() {
				var aI = gU.fW.zS;
				if (0 === aI) return 1;
				var buffer = gU.fW.buffer;
				if (cH.e1() % 35 == 6) {
					for (var aL = aI - 1; 0 <= aL; aL--) f.cn(buffer[aL] << 2) || (aI--, buffer[aL] = buffer[aI]);
					gU.fW.zS = aI
				}
				return aI < buffer.length
			}())
			if (zP <= zN) {
				var zW = gU.fW.zS;
				if (zW) {
					if (cH.e1() % 350 != 1) return;
					if (zR !== zW) return void(zR = zW);
					if (!bQ.by.cZ(h9[0])) return
				} else if (cH.e1() % 12 != 8) return;
				bQ.by.zX() || gU.fW.b3()
			} else {
				var aL, aV = v.w,
					zY = aV - 2,
					zW = zY * (v.y - 2),
					zZ = zP,
					buffer = gU.fW.buffer,
					d7 = gU.fW.zS,
					za = buffer.length,
					mj = Math.min(zO + zZ * ((1 + 19 * gU.performance.gV) * zQ), zW);
				for (aL = zO; aL < mj; aL += zZ) {
					var e = 4 * (aL % zY + (hu.hv(aL, zY) + 1) * aV + 1);
					if (f.cn(e) && (buffer[d7] = e >> 2, ++d7 === za)) {
						aL += zZ;
						break
					}
				}(zO = aL) >= zW && (zO = ++zN), gU.fW.zS = d7
			}
	}
}

function zb() {
	var cK, a1, x, f9, gap, zc, zd, ze, zf, zg, bP, zh, yV, zi, tK, k5, zj;

	function zn() {
		f9 = Math.floor(.2 * (b4.b5.b6() ? .07 : .035) * bN.bO), f9 = bk(b4.b5.b6() ? 3 : 1, f9);
		var zq = bN.aV / (cK.length + gap);
		f9 = f9 < zq ? zq : f9, tK = Math.floor((1 - gap) * f9), a1 = 0, zr()
	}

	function zr() {
		a1 = (a1 = a1 < -20 ? -20 : a1) > (cK.length - 15) * f9 ? (cK.length - 15) * f9 : a1, zd = Math.floor(a1 / f9), ze = (ze = zd + Math.floor(bN.aV / f9)) > cK.length - 1 ? cK.length - 1 : ze, zd = (zd = ze < zd ? ze : zd) < 0 ? 0 : zd;
		var d7 = ze;
		zc = x / cK[d7];
		for (var aL = ze - 1; zd <= aL; aL--) cK[aL] > cK[d7] && (d7 = aL, zc = x / Math.pow(cK[aL], zi))
	}

	function zu(aH) {
		aH = Math.floor((a1 + bN.aV - aH - gap * f9) / f9);
		return (aH = aH < -1 ? -1 : -1 === aH ? 0 : aH > cK.length - 1 ? -1 : aH) !== zf && (zf = aH, -1 === k5 && 0 === zf && zv.zk && (k5 = setInterval(zw, 100)), 1)
	}

	function zz(aL) {
		var a01 = Math.floor(zc * Math.pow(cK[aL], zi));
		eF.fillRect(a1 + bN.aV - (aL + 1) * f9, bN.au - a01, tK, a01)
	}

	function zw() {
		var aP;
		0 !== (zf = 8 === eg.f3() ? -1 : zf) ? (zj = (new Date).getTime(), clearInterval(k5), k5 = -1) : (aP = cK[1] / 864e3, -1 !== zj && (aP += ((new Date).getTime() - zj) * cK[1] / 864e5, zj = -1), 0 < aP && (cK[0] += Math.floor(aP), cH.cI = !0))
	}
	this.zk = !1, this.b3 = function() {
		zj = k5 = -1, zf = -(zi = 1), this.zl = !1, yV = 0, zh = new Date, a1 = 0, gap = .3, cK = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		x = Math.floor(.15 * bN.au), zg = (zg = Math.floor((b4.b5.b6() ? .018 : .0137) * bN.bO)) < 2 ? 2 : zg, bP = bQ.bR.bS(1, zg), zn()
	}, this.zo = function(zp) {
		var aL;
		for (this.zk = !0, aL = 0; aL < zp.length; aL++) cK.unshift(zp[aL]);
		zn(), cH.cI = !0
	}, this.zs = function() {
		zr()
	}, this.ez = function(aH, aJ) {
		aJ > bN.au - .6 * x ? this.zl ? aH !== yV && (a1 += aH - yV, yV = aH, zr(), zu(aH), this.zl = -1 !== zf, cH.cI = !0) : zu(aH) && (cH.cI = !0) : this.reset()
	}, this.reset = function() {
		-1 !== zf && (this.zl = !1, zf = -1, cH.cI = !0)
	}, this.q9 = function(aH, deltaY) {
		-1 !== zf && (a1 += Math.floor(deltaY), zr(), zu(aH), cH.cI = !0)
	}, this.bt = function(aH, aJ) {
		this.ez(aH, aJ), -1 !== zf && (yV = aH, this.zl = !0)
	}, this.zx = function() {
		-1 !== zf && (this.zl = !1)
	}, this.eD = function() {
		eF.fillStyle = bJ.zy;
		for (var a02, month, bv, qt, a05, a06, c5, a07, a08, aL = ze; zd <= aL; aL--) zz(aL);
		this.zk && 0 === zd && (eF.fillStyle = bJ.vi, zz(0)), -1 !== zf && (eF.fillStyle = bJ.tJ, zz(zf)), -1 !== zf && (eF.font = bP, bQ.bR.textBaseline(eF, 2), (bv = new Date).setTime(zh.getTime() - 1e3 * zf * 60 * 60 * 24), month = "month",
			a02 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(bv), a02 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(bv)), a02 = a02 + ", " + bv.getUTCDate() + " " + month + " " + bv.getFullYear(), month = 1 === cK[zf] ? L(161) : L(162), month = bQ.cL.cs(cK[zf]) + " " + month, bv = Math.floor(eF.measureText(a02).width), qt = Math
			.floor(eF.measureText(month).width), a05 = Math.floor(.5 * (bv + zg)), a06 = (a06 = a1 + bN.aV - (zf + 1) * f9) < a05 ? a05 : a06 > bN.aV - a05 ? bN.aV - a05 : a06, c5 = bN.au - Math.floor(zc * Math.pow(cK[zf], zi)), a07 = Math
			.floor(1.1 * zg), a08 = c5 > bN.au - a07 ? bN.au - a07 : c5, eF.fillStyle = bJ.bK, eF.fillRect(bN.aV - qt - zg, a08 - a07, qt + zg, a07), eF.fillRect(a06 - a05, bN.au - a07, bv + zg, a07), eF.fillStyle = bJ.bL, bQ.bR.textAlign(eF,
				2), eF.fillText(month, Math.floor(bN.aV - .5 * zg), a08), bQ.bR.textAlign(eF, 1), eF.fillText(a02, a06, bN.au), eF.strokeStyle = bJ.a09, eF.lineWidth = 1, eF.beginPath(), eF.moveTo(0, c5), eF.lineTo(bN.aV, c5), eF.closePath(),
			eF.stroke())
	}
}

function a0A() {
	this.vN = function() {
		var a0B = j.data;
		bQ.oY.a0C(a0B.teamPlayerCount, a0B.playerCount), a0B.numberTeams = bQ.oY.a0D(a0B.teamPlayerCount, 0), a0B.teamPlayerCount[0] && a0B.teamPlayerCount[7] && (a0B.teamPlayerCount[7] = 0, this.vN())
	}, this.a0E = function() {
		var a0B = j.data;
		a0B.mapType < 2 ? v.kT(v.xO(a0B), a0B.mapSeed) : v.xJ(a0B.canvas)
	}, this.a0F = function() {
		var a0B = j.data;
		a0B.colorsData || (a0B.colorsData = new Uint32Array(1)), 0 === a0B.gameMode && (a0B.colorsData[0] = hk.d9.n7()), a0B.selectableName && (a0B.playerNamesData || (a0B.playerNamesData = new Array(1)), a0B.playerNamesData[0] = hk.buffer.data[
			122].value), a0B.a0G = new Uint32Array(1), a0B.a0G[0] = iP.iV.lA(hk.buffer.data[105].value, 5)
	}, this.a0H = function() {
		j.data = new ry
	}
}

function a0I() {
	this.wv = function(player, c3) {
		bQ.by.wA(0) && bQ.by.wB(player) && n.a0J(c3) && (ib.a0K.zH(0, player, c3), j.j6.cR(player, c3))
	}, this.te = function(player, a0L, nR) {
		bQ.by.wA(1) && bQ.by.wB(player) && bQ.by.a0M(player, nR) && bQ.by.gX(player, a0L, 12, 0) && bQ.by.a0N(player, nR) && ((nR = nN.nh(player, h1.nF[0])) || nN.sO(player)) && (cT.a0O[player]++, ib.a0K.zH(1, player, a0L, h1.nF[0]), gU.fd.nD(
			player, nR)) && (bQ.by.gp(player), hD.a0P(player, a0L), gU.fd.nL(player))
	}, this.ww = function(player, a0L, a0Q) {
		bQ.by.wA(1) && bQ.by.wB(player) && j.cu && bQ.by.a0M(player, a0Q) && bQ.by.a0R(player, a0Q) && bQ.by.a0S(player, bQ.by.a0T(player, a0L), a0Q) && a0U.cR(a0Q, h1.nO[0]) && (ib.a0K.zH(2, player, a0L, a0Q), a0V.a0W(player, a0Q))
	}, this.pF = function(player, a0L, a0X) {
		h1.h2[1] = 7 & a0X;
		var c3 = a0X >> 3;
		bQ.by.wA(1) && bQ.by.wB(player) && n.a0J(c3) && d8.gR.gS(player) && d8.gR.a0Y(c3) && bQ.by.gX(player, a0L, 32, 0) && d8.a0Z.a0a(player, c3, 1) && (hD.a0b(player), ib.a0K.zH(3, player, a0L, a0X), bQ.by.gp(player), a0c.mY.pF(player), d8.d9
			.gq(player))
	}, this.pI = function(player, a0L, c9) {
		849 === a0L ? this.tb(player, c9) : bQ.by.wA(1) && bQ.by.wB(player) && bQ.by.gX(player, a0L, 32, 0) && d8.gn.go(player, c9) && (hD.a0b(player), ib.a0K.zH(4, player, a0L, c9), bQ.by.gp(player), a0c.mY.pI(player), d8.d9.gq(player))
	}, this.tb = function(player, c9) {
		bQ.by.wA(1) && bQ.by.wB(player) && d8.a0d.e6(player, c9) && ib.a0K.zH(4, player, 849, c9)
	}, this.ta = function(player, nR) {
		513 === nR ? this.wF(player) : bQ.by.wA(1) && bQ.by.wB(player) && (nR = Math.min(nR, j.cW), nN.nh(player, nR)) && (ib.a0K.zH(5, player, nR), nN.sC(player, nR))
	}, this.wx = function(player, dF) {
		(bQ.by.wA(1) || bQ.by.wA(2)) && bQ.by.wB(player) && (dF = hu.hz(dF, 0, 1023), ib.a0K.zH(6, player, dF), cb.dZ(player, 0, dF))
	}, this.vo = function(player, a0e) {
		bh.vn(player) && (ib.a0K.zH(7, player, a0e), bh.w5(player, a0e))
	}, this.wy = function(player) {
		(bQ.by.wA(0) || bQ.by.wA(1)) && bQ.by.wB(player) && qZ.a0f(player) && (ib.a0K.zH(8, player), a0g.wy(player))
	}, this.wz = function(player) {
		ib.a0K.zH(9, player), a0g.wz(player)
	}, this.wF = function(player) {
		bh.w9(player) && (ib.a0K.zH(5, player, 513), bh.wF(player))
	}, this.x0 = function(player, a0L, c3, nR) {
		bQ.by.wA(1) && bQ.by.wB(player) && bQ.by.a0M(player, nR) && bQ.by.a0N(player, nR) && n.a0J(c3) && a0h.a0i.a0j(player, c3) && (nN.nh(player, h1.nF[0]) || nN.sO(player)) && (ib.a0K.zH(10, player, (a0L << 10) + h1.nF[0], c3), nR = bQ.by.a0k(
			player, a0L), cT.nG[player].push(h1.a0l[0]), nN.cR(player, nR, h1.nF[0]), nP.hG(player, !0), hD.a0m(player))
	}
}

function fk() {
	this.e6 = function(player) {
		var a0n = function(player) {
			for (var a0q = d8.a0q.a0s(), aI = a0q.length, d7 = Math.min(aI, 32), i3 = gh.gi(aI), aL = 0; aL < d7; aL++) {
				var a0n = (aL + i3) % aI,
					a0p = a0q[a0n],
					a5 = a0p[0],
					a7 = a0p[a0p.length - 1];
				if (d8.ge.a0t(player, a5) && d8.ge.a0u(player, a7)) return a0n;
				if (d8.ge.a0t(player, a7) && d8.ge.a0u(player, a5)) return 0 <= (a0n = d8.a0q.a0v(a7, a5)) ? a0n : d8.a0q.a0w() ? -1 : d8.a0q.a0x(d8.a0q.a0y(a0p))
			}
			return -1
		}(player);
		return -1 !== a0n && (a0n = d8.a0q.get(a0n), !d8.ge.a0r(player, a0n)) && (h1.cK[0] = a0n, !0)
	}
}

function uV(a0z, qv, a10) {
	function click() {
		var value = 1 - a0z.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qv, void 0 !== a0z.hy ? hk.mz.gE(a0z.hy, value) : a0z.value = value, a10 && a10(value)
	}
	var l0;
	qv = qv || L(163), this.l0 = document.createElement("p"), (l0 = this.l0).textContent = (a0z.value ? "🟩 " : "⬜ ") + qv, l0.style.margin = "0", l0.style.marginBottom = "0.5em", l0.style.cursor = "pointer", l0.addEventListener("click", click)
}

function a11() {
	var t1 = [];
	this.a12 = function(player, a0Q, dj, a13) {
		player === j.k || a0Q === j.k || !a13 && bQ.by.cZ(player) || bQ.by.cZ(a0Q) || this.cA(cT.cU[player] + " supported " + cT.cU[a0Q] + " with " + bQ.cL.cs(dj) + " ressource" + (1 === dj ? "." : "s."))
	}, this.cA = function(bV, dF) {
		bV = {
			bU: gZ.a14(),
			bV: bV,
			dF: dF
		};
		t1.push(bV), 30 === f1.mQ && f1.mR().cA(bV)
	}, this.clear = function() {
		t1 = [];
		var dc = f1.lu(30);
		dc && dc.clear()
	}, this.a15 = function() {
		return t1
	}
}

function a16() {
	var a18 = new Array(1),
		a19 = new Array(1),
		a1A = 20,
		kg = 0,
		a1B = !1;

	function a1D() {
		a1A++, ly.play()
	}
	this.b3 = function() {
		if (!window.document.documentMode) {
			for (var aL = 0; 0 <= aL; aL--) ! function(aL, src) {
				a19[aL] = 0, a18[aL] = document.createElement("audio"), a18[aL].src = src, a18[aL].setAttribute("preload", "auto"), a18[aL].setAttribute("controls", "none"), a18[aL].style.display = "none", a18[aL].onpause = function() {
					a19[aL] = 1
				}, a18[aL].oncanplaythrough = function() {
					a19[aL] = 0 === a19[aL] ? 1 : a19[aL]
				}, document.body.appendChild(a18[aL])
			}(aL,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			a1B = !0
		}
	}, this.iA = function() {
		if (a1B) {
			a1B = !1;
			for (var aL = 0; 0 <= aL; aL--) a18[aL].onpause = null, a18[aL].oncanplaythrough = null, f1.removeChild(document.body, a18[aL]), a18[aL] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		ly.play()
	}), this.play = function() {
		if (a1B) {
			var bv = performance.now();
			if (kg + 66 < bv)
				for (var aL = 0; 0 <= aL; aL--)
					if (1 === a19[aL]) return kg = bv, a19[aL] = 2, void a18[aL].play();
			0 < a1A && (a1A--, setTimeout(a1D, 66))
		}
	}
}

function a1E(n3) {
	this.es = -1, this.pow = -1;
	var yz = n3 || {},
		a1F = this,
		a1G = null,
		a1H = null,
		a1I = null,
		a1J = null,
		a1K = null,
		a1L = [],
		a1M = 0,
		a1N = null,
		a1O = null,
		a1P = null,
		a1Q = !1,
		a1R = null,
		a1U = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function a1V(a1W, qA, className) {
		a1W = document.createElement(a1W);
		return className && (a1W.className = className), qA && qA.appendChild(a1W), a1W
	}

	function a1X(sf, qA, action) {
		qA = a1V("button", qA);
		return qA.type = "button", qA.textContent = sf, qA.addEventListener("click", action), qA
	}

	function a1Y(qA) {
		qA = a1V("canvas", qA);
		return qA.width = qA.height = 128, qA
	}

	function a1d(canvas, a1e) {
		for (var canvas = canvas.getContext("2d"), data = (a1O || (a1O = canvas.createImageData(128, 128), a1P = new Uint32Array(a1O.data.buffer)), a1e), a1a = a1P, a1b = 0, position = 0, color = 0; position < 16384; a1b += 6, color ^= 1) {
			for (var hy = a1b >> 3, iC = position + ((data[hy] << 8 | data[1 + hy]) >> 10 - (7 & a1b) & 63), mH = color ? a1U : 4294967295, aL = position; aL < iC; aL++) a1a[aL] = mH;
			position = iC
		}
		canvas.putImageData(a1O, 0, 0)
	}

	function a1f() {
		if (a1G) {
			a1G.setAttribute("aria-busy", String(a1Q)), a1K.disabled = a1Q, a1J.disabled = a1Q || !a1M;
			for (var aL = 0; aL < a1L.length; aL++) a1L[aL].disabled = a1Q, a1L[aL].setAttribute("aria-pressed", String(Boolean(a1M & 1 << aL)))
		}
	}

	function a1h(event) {
		var a1i, ft;
		"Escape" === event.key && (event.preventDefault(), a1F.close()), "Tab" === event.key && a1G && (a1i = (ft = a1G.querySelectorAll("button:not(:disabled)"))[0], ft = ft[ft.length - 1], event.shiftKey && document.activeElement === a1i ? (event
			.preventDefault(), ft.focus()) : event.shiftKey || document.activeElement !== ft || (event.preventDefault(), a1i.focus()))
	}

	function a1k() {
		a1R = document.activeElement, (a1G = a1V("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), a1G.setAttribute("aria-modal", "true"), a1G.setAttribute("aria-label", "Select all images matching the reference");
		a1V("style", a1G).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var a1l = a1V("div", a1G, "captcha-reference-row");
		a1V("span", a1l, "captcha-reference-label").textContent = "Find All:", (a1I = a1Y(a1l)).className = "captcha-reference", a1I.setAttribute("aria-label", "Reference image"), a1H = a1V("div", a1G, "captcha-grid");
		for (var aL = 0; aL < 16; aL++) a1L.push(function(hy) {
			var button = a1X("", a1H, function() {
				a1Q || (a1M ^= 1 << hy, a1f())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (hy + 1)), button.setAttribute("aria-pressed", "false"), a1Y(button).setAttribute("aria-hidden", "true"), button
		}(aL));
		var a1l = a1V("div", a1G, "captcha-actions"),
			a1o = a1X("Close", a1l, function() {
				a1F.close()
			});
		a1K = a1X("Reload", a1l, a1p), a1J = a1X("Verify", a1l, a1q), a1G.addEventListener("keydown", a1h), a1F.resize(), a1f(), a1o.focus()
	}

	function a1p() {
		a1Q || (a1F.close(), el.v7.a1r(0, 0, a1s.es, a1s.pow))
	}

	function a1q() {
		var a1t, a1u;
		!a1Q && a1M && (a1t = a1M, a1u = a1N, a1F.close(), el.v7.a1r(a1t, a1u, a1s.es, a1s.pow))
	}
	this.show = function(a1v, a1u, es, pow) {
		this.es = es, this.pow = pow, a1N = a1u, a1G || a1k(), a1d(a1I, a1v[0]);
		for (var i3 = 0; i3 < 16; i3++) a1d(a1L[i3].firstChild, a1v[i3 + 1]);
		a1M = 0, a1Q = !1, a1f(), "function" == typeof yz.a1w && yz.a1w()
	}, this.resize = function() {
		var size;
		a1G && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), a1G.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (a1G) {
			for (var a1x = a1G.querySelectorAll("canvas"), aL = 0; aL < a1x.length; aL++) a1x[aL].width = a1x[aL].height = 0;
			a1G.remove(), a1G = a1H = a1I = a1J = a1K = null, a1O = a1P = a1N = null, a1M = 0, a1Q = !(a1L = []), a1R && document.body.contains(a1R) && a1R.focus(), a1R = null, "function" == typeof yz.a1y && yz.a1y()
		}
	}
}

function uX(a1z) {
	var kp = document.createElement("div");
	this.l0 = kp, this.a20 = a1z, this.resize = function() {
		for (var aI = a1z.length, aL = 1; aL < aI; aL++) bQ.bR.gL(a1z[aL], 4)
	};
	var aL, aI = a1z.length;
	for (kp.style.width = "100%", kp.style.height = "2.7em", kp.style.marginTop = "0.6em", kp.style.border = "inherit", aL = 0; aL < aI; aL++) a1z[aL].style.verticalAlign = "top", a1z[aL].style.width = (100 / aI).toFixed(2) + "%", a1z[aL].style
		.height = "100%", a1z[aL].style.fontSize = "0.75em", kp.appendChild(a1z[aL])
}

function ps() {
	var uL, uM, ob;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(164), [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})]), uM = new oS(uL.oT, ((ob = []).push(function() {
		function a26() {
			a27.button.textContent = L(168), a23.l0.readOnly = !1, a25.l0.readOnly = !1, a28.r2(1), a28.button.style.color = bJ.bL
		}
		var og = new oh,
			a22 = (og.vQ(el.d9.uz("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", og.oi(L(165)), new om({
				value: hk.buffer.data[105].value,
				hy: -1
			})),
			a23 = (a22.l0.readOnly = !0, og.ol(a22), og.oi(L(166), "0.8em"), new om(hk.buffer.data[148], 0, void 0, function(l0) {
				a24(hk.buffer.data[149].value, l0.target.value)
			})),
			a25 = (og.ol(a23), og.oi(L(167), "0.8em"), new om(hk.buffer.data[149], 1, void 0, function(l0) {
				a24(l0.target.value, hk.buffer.data[148].value)
			})),
			a27 = (og.ol(a25), new g0(L(168), function(l0) {
				return l0.textContent === L(168) ? (l0.textContent = L(169), a23.l0.readOnly = !0, a25.l0.readOnly = !0, a28.r2(0), a28.button.style.color = bJ.dT, hk.mz.gE(149, a25.l0.value), a24(hk.buffer.data[149].value, hk
					.buffer.data[148].value)) : a26(), !0
			})),
			a28 = (og.ol(new uX([a27.button])), new g0(L(170), function(l0) {
				return a23.l0.readOnly && el.d9.uq(0) && (bQ.bR.mu(l0), a26(), el.a29.a2A({
					action: 0,
					jQ: hk.buffer.data[148].value,
					value: parseInt(hk.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			a2B = og.uS(),
			a24 = (og.uS(L(171)).style.fontWeight = "bold", function(hm, bV) {
				a2B.innerHTML = f1.d9.a2C(hm, hk.buffer.data[105].value, bV)
			});
		return og.ol(new uX([a28.button])), a24(hk.buffer.data[149].value, hk.buffer.data[148].value), og
	}()), ob))
}

function a2D() {
	this.iV = new a2E, this.iQ = new a2F, this.yD = new pA, this.b3 = function() {
		this.iV.b3()
	}
}

function a2G() {
	var a2H, a2I, a2J, a2K, a2L, a2M, a2N, a2O, a2P, a2Q, a2R, a2S, a2T, a2U, a2V, a2W, a2X, a2Y, a2a, a2b, a2c, a2d, a2e, a2k, a2l, a2Z = null,
		a2g = 0,
		a2h = !1,
		a2i = new Float32Array(4),
		a2j = 0,
		a2m = 112,
		a2n = 0;

	function a2o() {
		a2P = Math.floor(+bN.bO), a2Q = Math.floor(.5 * a2P), a2Z.width = bN.aV, a2Z.height = bN.au, a2a = a2Z.getContext("2d", {
			alpha: !0
		}), bQ.bR.textAlign(a2a, 1), bQ.bR.textBaseline(a2a, 1), a2a.imageSmoothingEnabled = !0
	}

	function a2p() {
		var aL, a2w;
		for (eF.font = bQ.bR.bS(1, 100 * a2R), a2w = 80 / Math.floor(eF.measureText(bQ.cL.cs(j.sY)).width), eF.font = bQ.bR.bS(1, 100), aL = j.cW - 1; 0 <= aL; aL--) a2O[aL] = 100 / Math.floor(eF.measureText(cT.cU[aL]).width), a2N[aL] = Math.min(a2w,
			a2O[aL])
	}

	function a2x(aL) {
		return !a2n || (aL = cT.ct[aL]) < 1e6 ? 1 : aL < 1e7 ? a2i[0] : a2i[Math.min(Math.floor(Math.log10(aL)) - 6, 3)]
	}

	function a2v(i5) {
		a2h = !1, a2g = cH.bU, a2Y = !1, a2X = 1, a2V = a2W = 0, i5.clearRect(0, 0, bN.aV, bN.au);
		for (var a3E, a3F, aL, a3G, fontSize, a3H, c4 = pW / a3D, c5 = pX / a3D, fE = (bN.aV + pW) / a3D, gx = (bN.au + pX) / a3D, a3I = 0 !== cT.iw[j.k] && !bQ.by.cZ(j.k), c2 = eA.eB - 1; 0 <= c2; c2--) aL = eA.eC[c2], (fontSize = Math.floor(a2U *
			a3D * a2x(aL) * a2N[aL] * a2L[aL])) < a2T || a2P <= fontSize || a2J[aL] + a2L[aL] > c4 && a2J[aL] < fE && a2K[aL] + a2M[aL] > c5 && a2K[aL] < gx && (a3E = Math.floor(bN.aV * (a2J[aL] + a2L[aL] / 2 - c4) / (fE - c4)), a3F = Math.floor(
			bN.au * (a2K[aL] + a2M[aL] / 2 - c5) / (gx - c5) - .1 * fontSize), a3G = f.kD[aL], i5.font = bQ.bR.bS(1 === cT.dl[aL] ? 4 : 1, fontSize), i5.fillStyle = a3J(fontSize, a3G % 2), a2n ? a3K(i5, aL, fontSize, a3E, a3F, a3G) : a3L(aL,
			fontSize, a3E, a3F, i5), a2Y = !0, 0 < a2c[aL] ? function(a3E, a3F, fontSize, aL, i5) {
			0 === wC[aL] ? cN.hb.a31(a2b[aL]) ? (function(a3E, a3F, fontSize, player, dF, i5) {
				for (var eE = a3F, a3d = (i5.globalAlpha = a3V(fontSize), a2x(player) * (a2n ? a2j : a2O[player])), a3U = a3E - .5 * fontSize / a3d - .9 * fontSize, c7 = 0; c7 < 2; c7++) i5.fillText(cN.hb.i6(dF), a3U, eE), a3U = a3E +
					.5 * fontSize / a3d + .9 * fontSize;
				i5.globalAlpha = 1
			}(a3E, a3F, fontSize, aL, a2b[aL], i5), a3N(a3E, a3F, fontSize, 0, 0, i5)) : cN.hb.a3Y(a2b[aL]) ? (a3Z(a3E, a3F, fontSize, a2b[aL], 0, i5), a3N(a3E, a3F, fontSize, 0, 1, i5)) : (a3Z(a3E, a3F, fontSize, a2b[aL], 1, i5), a3N(
				a3E, a3F, fontSize, 1, 0, i5)) : a3Z(a3E, a3F, fontSize, a2b[aL], 0, i5)
		}(a3E, a3F, fontSize, aL, i5) : 0 === wC[aL] && a3N(a3E, a3F, fontSize, 0, 0, i5), a3I && (0 < a2c[aL + j.cW] || 0 < a2c[aL + 2 * j.cW] || 0 < a2c[aL + 3 * j.cW] || 0 < a2c[aL + 4 * j.cW]) && function(a3E, a3F, fontSize, aL, i5) {
			var bB, aY = -1;
			for (bB = 4; 1 <= bB; bB--) 0 < a2c[aL + bB * j.cW] && aY++;
			for (bB = 1; bB < 5; bB++) 0 < a2c[aL + bB * j.cW] && (! function(a3E, a3F, fontSize, bB, aL, a3S, bv, i5) {
				var cE;
				if (1 === bB) {
					aL = a2b[aL + j.cW];
					if (!cN.hb.a3a(aL)) return function(a3E, a3F, fontSize, dF, a3S, i5) {
						i5.globalAlpha = a3V(fontSize);
						a3E -= .534 * a3S * fontSize, a3S = a3F + 1.59 * fontSize;
						i5.font = bQ.bR.bS(0, .785 * fontSize), i5.fillText(cN.hb.i6(dF), a3E, a3S), i5.globalAlpha = 1
					}(a3E, a3F, fontSize, aL, a3S, i5);
					cE = cN.cO.hN[aL - 1024 + cN.hb.hc]
				} else cE = 2 === bB ? i0.a3c()[4].canvas[+(bv < 255)] : (3 === bB ? i0.a3c()[5] : i0.a3c()[6]).canvas[0];
				aL = cN.cO.hO, bv = .8 * fontSize / aL, bB = a3E - .5 * bv * aL - .534 * a3S * fontSize, a3E = a3F + 1.4 * bv * aL;
				i5.setTransform(bv, 0, 0, bv, bB, a3E), i5.globalAlpha = a3V(fontSize), i5.drawImage(cE, 0, 0), i5.globalAlpha = 1, i5.setTransform(1, 0, 0, 1, 0, 0)
			}(a3E, a3F, fontSize, bB, aL, aY, a2c[aL + bB * j.cW], i5), aY -= 2)
		}(a3E, a3F, fontSize, aL, i5), (a3H = a2R * fontSize) < a2T || (i5.font = bQ.bR.bS(1, a3H), a3F += Math.floor(.78 * fontSize), a2n ? a3L(aL, a3H, a3E, a3F, i5) : a3K(i5, aL, a3H, a3E, a3F, a3G)))
	}

	function a3L(aL, fontSize, aH, aJ, i5) {
		var ___id = aL;
		var showName = aL < j.ck || !__fx.settings.hideBotNames;
		if (showName) i5.fillText(cT.cU[aL], aH, aJ), aL < j.ck && 2 !== cT.dl[aL] || (aL = fontSize / a2O[aL], i5.fillRect(aH - .5 * aL, aJ + bQ.bR.i7 * fontSize, aL, Math.max(1, .1 * fontSize)));
		a2n && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i5.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i5.fillText(__fx.utils.getDensity(___id), aH, showName ? aJ + fontSize : aJ)
		);
	}

	function a3K(i5, aL, fontSize, a3E, a3F, a3G) {
		var a3Q = cT.a3Q[aL],
			a3R = bQ.cL.cs(cT.ct[aL] - a3Q);

		function drawDensity() {
			!a2n && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i5.fillStyle = __fx.utils.textStyleBasedOnDensity(aL)), i5.fillText(__fx.utils.getDensity(aL), a3E, a3F + fontSize))
		}
		a3Q ? (a3Q = i5.fillStyle, i5.fillStyle = a3J(fontSize, 2 + a3G % 2), i5.fillText(a3R, a3E, a3F), i5.fillStyle = a3Q) : a3G >> 1 & 1 ? (i5.lineWidth = .05 * fontSize, i5.strokeStyle = a3J(fontSize, a3G % 2), i5.strokeText(a3R, a3E, a3F)) : (
			1 < a3G && (i5.lineWidth = .12 * fontSize, i5.strokeStyle = a3J(fontSize, a3G), i5.strokeText(a3R, a3E, a3F)), i5.fillText(a3R, a3E, a3F)), drawDensity()
	}

	function a3N(a3E, a3F, fontSize, a3S, a3T, i5) {
		var y8 = .95 * fontSize / a2e,
			a3E = a3E - .5 * y8 * a2d + .8 * a3S * fontSize,
			a3S = a3F - 1.76 * y8 * a2e - (.35 - bQ.bR.i7 + .7) * a3T * fontSize;
		i5.setTransform(y8, 0, 0, y8, a3E, a3S), i5.globalAlpha = a3V(fontSize), i5.drawImage(gN.get(4), 0, 0), i5.globalAlpha = 1, i5.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3Z(a3E, a3F, fontSize, dF, a3S, i5) {
		var hJ, a3U, y8;
		i5.globalAlpha = a3V(fontSize), cN.hb.a3a(dF) ? (hJ = cN.cO.hO, i5.setTransform(y8 = 1.1 * fontSize / hJ, 0, 0, y8, a3U = a3E - .5 * y8 * hJ - .8 * a3S * fontSize, y8 = a3F - 1.55 * y8 * hJ), i5.drawImage(cN.cO.hN[dF - 1024 + cN.hb.hc], 0,
			0), i5.setTransform(1, 0, 0, 1, 0, 0)) : (a3U = a3E - .8 * a3S * fontSize, y8 = a3F - (.35 - bQ.bR.i7 + 1) * fontSize, i5.fillText(cN.hb.i6(dF), a3U, y8)), i5.globalAlpha = 1
	}

	function a3J(fontSize, a3G) {
		return a2Q <= fontSize && fontSize < a2P ? cw.a3e[a3G] + a3V(fontSize).toFixed(3) + ")" : cw.a3f[a3G]
	}

	function a3V(fontSize) {
		return a2Q <= fontSize && fontSize < a2P ? 1 - (fontSize - a2Q) / (a2P - a2Q) : 1
	}

	function a3r(a3d, aV) {
		return 1 + Math.floor(a2S * a3d * aV)
	}

	function a3o(aL) {
		for (var left = a2J[aL], c2 = a2J[aL] - cT.gu[aL] - 1; 0 <= c2; c2--)
			if (!a3u(aL, --left, a2K[aL], a2M[aL])) {
				left++;
				break
			} var right = a2J[aL];
		for (c2 = cT.gw[aL] - a2J[aL] - a2L[aL]; 0 <= c2; c2--)
			if (!a3u(aL, ++right + a2L[aL] - 1, a2K[aL], a2M[aL])) {
				right--;
				break
			} var aH = Math.floor((left + right) / 2),
			top = a2K[aL];
		for (c2 = a2K[aL] - cT.gv[aL] - 1; 0 <= c2; c2--)
			if (!a3v(aL, aH, --top, a2L[aL])) {
				top++;
				break
			} var bottom = a2K[aL];
		for (c2 = cT.gy[aL] - a2K[aL] - a2M[aL]; 0 <= c2; c2--)
			if (!a3v(aL, aH, ++bottom + a2M[aL] - 1, a2L[aL])) {
				bottom--;
				break
			} var aJ = Math.floor((top + bottom) / 2);
		a3l(aL, aH, aJ, a2L[aL], a2M[aL]) && (a2J[aL] = aH, a2K[aL] = aJ)
	}

	function a3l(player, aH, aJ, aV, au) {
		a0 = Math.floor(.2 * aV);
		for (var a0, bB = aH + aV - 1; aH <= bB; bB--)
			if (!a3u(player, bB, aJ, au)) return;
		for (bB = aJ + au - 1 - (a0 = (a0 = Math.floor(.25 * au)) < 1 ? 1 : a0); aJ + a0 <= bB; bB--)
			if (!a3v(player, aH, bB, aV)) return;
		return 1
	}

	function a3u(player, aH, aJ, au) {
		return f.ys(player, 4 * (aJ * v.w + aH)) && f.ys(player, 4 * ((aJ + au - 1) * v.w + aH))
	}

	function a3v(player, aH, aJ, aV) {
		return f.ys(player, 4 * (aJ * v.w + aH)) && f.ys(player, 4 * (aJ * v.w + aH + aV - 1))
	}
	this.b3 = function() {
		if (a2n = hk.buffer.data[7].value || 8 === j.dy, a2Y = !1, a2U = .88, a2R = .5, a2S = 1.8, a2T = 12 - 3 * hk.buffer.data[9].value, a2I = a2H = 0, a2J = new Uint16Array(j.cW), a2K = new Uint16Array(j.cW), a2L = new Uint16Array(j.cW), a2M =
			new Uint16Array(j.cW), a2N = new Float32Array(j.cW), a2O = new Float32Array(j.cW), a2b = new Uint16Array(2 * j.cW), a2c = new Uint8Array(5 * j.cW), a2k = new Uint8Array(j.cW), a2l = new Uint8Array(j.cW), a2Z = a2Z || document
			.createElement("canvas"), a2o(), a2W = a2V = 0, a2X = 1, a2n) {
			var aL, a2w;
			for (a2p(), eF.font = bQ.bR.bS(1, 100), a2w = 100 / Math.floor(eF.measureText("900 000").width), aL = j.cW - 1; 0 <= aL; aL--) a2N[aL] = Math.min(a2w, 2 * a2O[aL]);
			a2j = a2w, a2i[0] = 100 / (a2w * Math.floor(eF.measureText("5 000 000").width)), a2i[1] = 100 / (a2w * Math.floor(eF.measureText("50 000 000").width)), a2i[2] = 100 / (a2w * Math.floor(eF.measureText("500 000 000").width)), a2i[3] =
				100 / (a2w * Math.floor(eF.measureText("1 000 000 000").width))
		} else a2p();
		! function() {
			var aL;
			for (aL = j.cW - 1; 0 <= aL; aL--) cT.cj[aL] < 12 ? (a2J[aL] = cT.gu[aL] + 1, a2K[aL] = cT.gv[aL] + 1, a2L[aL] = 1, a2M[aL] = 1) : (a2J[aL] = cT.gu[aL], a2K[aL] = cT.gv[aL] + 1, a2L[aL] = 4, a2M[aL] = 2);
			if (j.bC)
				for (aL = 0; aL < j.ck; aL++) a2L[aL] = 0;
			a2d = gN.get(4).width, a2e = gN.get(4).height
		}()
	}, this.a2s = function(aP, dj) {
		dj > 18 * cT.cj[aP] ? (a2l[aP] = 6, f.kD[aP] = 2 + f.kD[aP] % 2) : (a2k[aP] = 4, (f.kD[aP] < 2 || 3 < f.kD[aP]) && (f.kD[aP] = 6 + f.kD[aP] % 2))
	}, this.a2t = function(aP, dj) {
		dj > 6 * cT.cj[aP] ? (a2l[aP] = 6, f.kD[aP] = 4 + f.kD[aP] % 2) : (a2k[aP] = 4, (f.kD[aP] < 4 || 5 < f.kD[aP]) && (f.kD[aP] = 8 + f.kD[aP] % 2))
	}, this.resize = function() {
		a2o(), a2v(a2a)
	}, this.j2 = function() {
		for (var aL = 0; aL < j.ck; aL++) cT.gw[aL] - cT.gu[aL] != 3 || cT.gy[aL] - cT.gv[aL] != 3 ? (a2J[aL] = cT.gu[aL] + (cT.gw[aL] !== cT.gu[aL] ? 1 : 0), a2K[aL] = cT.gv[aL], a2L[aL] = 1, a2M[aL] = 1) : (a2J[aL] = cT.gu[aL], a2K[aL] = cT.gv[
			aL] + 1, a2L[aL] = 4, a2M[aL] = 2)
	}, this.dZ = function(player, hy, a2z) {
		! function(player, hy, a2z) {
			player += hy * j.cW;
			0 === hy ? a2b[player] === a2z && 0 < a2c[player] ? a2c[player] = 0 : (a2b[player] = a2z, a2c[player] = cN.hb.a31(a2z) ? 255 : 64) : 1 === hy ? (a2c[player] = 64, a2b[player] = a2z) : a2c[player] = a2z
		}(player, hy, a2z), 2 === j.e5 && this.j3(!0)
	}, this.eD = function() {
		a2Y && (1 !== a2X ? (eF.imageSmoothingEnabled = !0, eF.setTransform(a2X, 0, 0, a2X, 0, 0), eF.drawImage(a2Z, -a2V / a2X, -a2W / a2X), eF.setTransform(1, 0, 0, 1, 0, 0), eF.imageSmoothingEnabled = !1) : eF.drawImage(a2Z, -a2V, -a2W))
	}, this.a32 = function(gz, h0) {
		a2V += gz, a2W += h0
	}, this.ez = function(gz, h0) {
		cb.a32(gz, h0)
	}, this.zoom = function(a33, hr, hs) {
		a2X *= a33, a2V = (a2V + hr) * a33 - hr, a2W = (a2W + hs) * a33 - hs
	}, this.a36 = function(player) {
		var gu = cT.gu[player],
			gw = cT.gw[player],
			gv = cT.gv[player],
			gy = cT.gy[player],
			a37 = n.yU(0),
			a38 = n.yW(0),
			a39 = n.yU(bN.aV),
			a3A = n.yW(bN.au);
		gu < a39 && a37 < gw && gv < a3A && a38 < gy && (a2L[player] = 0, a2h = !0)
	}, this.j3 = function(e0) {
		return !(!a2h && !e0 && cH.bU < a2g + (1 === a2X && 0 === a2V && 0 === a2W && (j.a35() || j.bC || 2 === j.e5) ? 1e3 : a2m) || (a2v(a2a), 0))
	}, this.a3B = function(aL) {
		return a2x(aL) * a2N[aL]
	}, this.a3C = function(player) {
		return a2N[player]
	}, this.e6 = function() {
		cH.e1() % 10 == 9 && (a2h = a2h || j.a3g() && !j.a35()), !j.a35() && 4 <= ++a2I && function() {
			var aL, c2, c7;
			for (a2I = 0, c7 = 4; 1 <= c7; c7--)
				for (c2 = eA.eB - 1; 0 <= c2; c2--) aL = eA.eC[c2] + c7 * j.cW, 0 < a2c[aL] && a2c[aL] < 255 && a2c[aL]--;
			if (2 !== j.e5)
				for (c2 = eA.eB - 1; 0 <= c2; c2--) aL = eA.eC[c2], 0 < a2c[aL] && a2c[aL] < 255 && a2c[aL]--
		}();
		var aL, c2, aI = Math.floor(.1 * eA.eB);
		for (aI = (aI = aI < 8 ? 8 : aI) > eA.eB ? eA.eB : aI, aL = a2H + aI - 1; a2H <= aL; aL--) c2 = aL % eA.eB, ! function(aL) {
			var a3d = a2x(aL) * a2N[aL];
			0 < a2L[aL] && a3l(aL, a2J[aL], a2K[aL], a2L[aL], a2M[aL]) ? ! function(aL) {
				for (var aH, aJ, aV, au, e = !1, c7 = 0; c7 < 8; c7++) {
					if (aV = a2L[aL] + 2, au = a2M[aL] + 2, aV > cT.gw[aL] - cT.gu[aL] + 1 || au > cT.gy[aL] - cT.gv[aL] + 1) return e;
					if (aH = a2J[aL] - 1, aJ = a2K[aL] - 1, !a3l(aL, aH, aJ, aV, au)) return e;
					a2J[aL] = aH, a2K[aL] = aJ, a2L[aL] = aV, a2M[aL] = au, e = !0
				}
				return e
			}(aL) && function(aL, a3d) {
				for (var aH, aJ, aV, au, e = !1, a3s = a2L[aL], mi = 1 + Math.floor(.02 * a3s), c7 = 1; c7 < 5; c7++) {
					if ((aV = a3s + c7 * mi) > cT.gw[aL] - cT.gu[aL] + 1) return e;
					if ((au = a3r(a3d, aV)) > cT.gy[aL] - cT.gv[aL] + 1) return e;
					aH = cT.gu[aL] + Math.floor(Math.random() * (cT.gw[aL] - cT.gu[aL] + 2 - aV)), aJ = cT.gv[aL] + Math.floor(Math.random() * (cT.gy[aL] - cT.gv[aL] + 2 - au)), a3l(aL, aH, aJ, aV, au) && (a2J[aL] = aH, a2K[aL] = aJ, a2L[
						aL] = aV, a2M[aL] = au, e = !0)
				}
				return e
			}(aL, a3d) && a3o(aL) : ! function(aL, a3d) {
				var au, aH = a2J[aL] + 1,
					aJ = a2K[aL] + 1,
					aV = a2L[aL] - 2;
				for (;;) {
					if (aV < 1) {
						a2L[aL] = 0;
						break
					}
					if (au = a3r(a3d, aV), a3l(aL, aH, aJ, aV, au)) return a2J[aL] = aH, a2K[aL] = aJ, a2L[aL] = aV, a2M[aL] = au, 1;
					aH++, aJ++, aV -= 2
				}
				return
			}(aL, a3d) ? function(aL, a3d) {
				var aH, aJ, aV, au, c7, iC, nb = cT.gw[aL] - cT.gu[aL] + 1,
					a3t = Math.floor(.02 * nb);
				for (iC = -6 * (a3t = a3t < 1 ? 1 : a3t), c7 = nb; iC <= c7; c7 -= a3t)
					if (au = a3r(a3d, aV = 0 < c7 ? c7 : 1), aH = cT.gu[aL] + Math.floor(Math.random() * (cT.gw[aL] - cT.gu[aL] + 2 - aV)), aJ = cT.gv[aL] + Math.floor(Math.random() * (cT.gy[aL] - cT.gv[aL] + 2 - au)), a3l(aL, aH, aJ, aV,
							au)) return a2J[aL] = aH, a2K[aL] = aJ, a2L[aL] = aV, a2M[aL] = au
			}(aL, a3d) : a3o(aL)
		}(eA.eC[c2]);
		a2H = (a2H += aI) % eA.eB
	}, this.a3j = function() {
		var aL, aP, su, sv;
		if (cH.e1() % 4 == 1)
			for (aL = eA.eB - 1; 0 <= aL; aL--) aP = eA.eC[aL], f.kD[aP] < 2 || ((su = Math.max(a2k[aP] - 1, 0)) === (sv = Math.max(a2l[aP] - 1, 0)) ? 0 === su && (f.kD[aP] %= 2) : 0 === sv && f.kD[aP] < 6 && (f.kD[aP] += 4), a2k[aP] = su, a2l[
				aP] = sv)
	}, this.cc = function(player) {
		var aL = player + 2 * j.cW,
			bv = a2c[aL];
		return 0 < bv && (bp.df(50, player), a2c[aL] = 0, 255 === bv)
	}, this.a3k = function(player) {
		return 255 === a2c[player + 2 * j.cW]
	}
}

function a3w() {
	this.i4 = 0, this.gap = 0, this.mf = 0, this.rH = 0, this.b3 = function() {
		this.resize()
	}, this.resize = function() {
		this.i4 = .0022 * bQ.bR.mh(.5) * bN.bO, this.mf = this.i4 / bN.mk, this.gap = Math.max(Math.floor((b4.b5.b6() ? .0114 : .01296) * bN.bO), 2), this.rH = this.gap / bN.mk
	}
}

function a3x() {
	var a17 = 0,
		a3y = null;
	this.b3 = function() {
		null === a3y && (a3y = new Uint16Array(2 * d8.d9.gW)), a17 = 0
	}, this.cR = function(a3z, gk) {
		var a40 = a3y;
		a40[a17++] = a3z, a40[a17++] = gk
	}, this.gl = function(player, a41) {
		for (var a40 = a3y, aI = a17, aL = 0; aL < aI; aL += 2)
			if (a40[aL] === a41 && d8.ge.a42(a40[aL + 1]) && player === d8.d9.dA[h1.h2[2]] >> 3) return !0;
		return !1
	}, this.sz = function(a43) {
		var a44 = d8.d9.tt[a43];
		if (!(a44 < 64)) {
			for (var a41 = d8.d9.gj[a43], a40 = a3y, aI = a17, aL = aI - 2; 0 <= aL; aL -= 2)
				if (a40[aL] === a41) {
					{
						a49 = void 0;
						var a49 = a40[aL + 1];
						d8.ge.a42(a49) && d8.gk.sy(h1.h2[2])
					}
					a40[aL] = a40[aI - 2], a40[aL + 1] = a40[aI - 1], aI -= 2
				} a17 = aI
		}
	}, this.a46 = function(a47, a48) {
		for (var a49 = d8.d9.gj[a47], a41 = -1, a40 = a3y, aI = a17, aL = 1; aL < aI; aL += 2)
			if (a40[aL] === a49) {
				a41 = a40[aL - 1];
				break
			} if (-1 === a41) return !1;
		if (!d8.ge.a42(a41)) return !1;
		var a43 = h1.h2[2],
			a0p = d8.d9.a4A[a43];
		if (a48 === a0p[a0p.length - 1]) d8.d9.a4A[a47] = d8.a0q.a4B(d8.d9.a4A[a47], d8.a0q.a0y(a0p));
		else {
			var a4C = d8.ge.a4D(a0p, a48);
			if (-1 === a4C) return !1;
			var a4E = d8.d9.a4F[a43];
			a4C === a4E ? (a43 = n.gs(d8.d9.gt[a43]), d8.d9.a4A[a47] = d8.a0q.a4H(d8.d9.a4A[a47], a0p, a4C, a48, n.a4I(a0p[a4C], a48) > n.a4I(a0p[a4C], a43))) : d8.d9.a4A[a47] = d8.a0q.a4H(d8.d9.a4A[a47], a0p, a4C, a48, a4E < a4C)
		}
		return !0
	}, this.sy = function(a4K) {
		var a0p, d7 = d8.d9,
			a44 = d7.tt[a4K];
		return a44 % 64 != 5 && (a0p = d7.a4A[a4K], d7.a4L[a4K] = 65535 - d7.a4L[a4K], d7.a4F[a4K] = a0p.length - d7.a4F[a4K] - 2, d7.a4A[a4K] = d8.a0q.a0y(a0p), d7.tt[a4K] = a44 - a44 % 64 + 5, !0)
	}
}

function q5() {
	var uL, uM, ob;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ("🔒 " + L(172), [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})]), uM = new oS(uL.oT, ((ob = []).push(function() {
		var og = new oh,
			uc = (og.vQ(el.d9.uz("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", og.oi(L(153)), new om({
				value: "",
				hy: -1
			})),
			a4N = (og.ol(uc), og.oi(L(173), "0.8em"), new om({
				value: "",
				hy: -1
			}, 0, 0)),
			a28 = (a4N.l0.type = "email", a4N.l0.autocomplete = "email", a4N.l0.name = "email", a4N.l0.inputMode = "email", a4N.l0.spellcheck = !1, og.ol(a4N), new g0(L(174), function(l0) {
				return bQ.bR.mu(l0), el.a29.a4O({
					action: 4,
					bV: uc.l0.value.trim() + a4N.l0.value.trim().substring(0, 63)
				}), !0
			}));
		return og.ol(new uX([a28.button])), og
	}()), ob))
}

function L(value, a4P, xV, a4Q) {
	var bV = "number" == typeof value ? uQ.a4R[value] : value;
	if (xV && uQ.a4S() && (bV = xV), !a4P) return a4Q ? bV.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bV;
	for (var aI = a4P.length, aL = 0; aL < aI; aL++)
		for (var c2 = 0; c2 < 3; c2++) bV = bV.replace("{" + (10 * c2 + aL) + "}", a4P[aL]);
	return bV
}

function a4T() {
	bp.e6(), cb.e6(), gZ.a4U(), el.d9.e6()
}

function a4V() {
	a4W.e6(), rK.e6(), a0U.e6(), a0V.e6(), a4X.e6(), nP.e6(), gU.e6(), d8.d9.e6(), eA.uC(), a4Y.e6(), a4Z.e6(), tc.e6(), cb.e6(), cb.a3j(), gZ.e6(), j4.e6(), tu.e6(), a4a.e6(), a4b.a4c(), bp.e6(), a4d.e6(), bn.e6(), bh.e6(), hD.e6(), li.e6(), el.d9
		.e6(), el.vB.e6(), f1.e6(), ee.kj.e6(), ib.e6(), cH.e6()
}

function a4e() {
	c0.e6(), j1.e6(), bd.e6(), j0.e6(), bq.e6(), a4f.e6(), a4b.e6(), o1.a4g()
}

function a4h() {
	a4Y.j3(!1), a4a.j3(), gZ.j3(!1), tu.j3(), bn.j3(), bh.j3(), cb.j3(!1), li.qS()
}

function a4i() {
	cb.j3(!1) && (cH.cI = !0), el.d9.e6()
}

function a4j() {
	this.a4k = function() {
		hk.mz.uO(), hk.mz.a4l(), el.d9.close(0, 3255), 0 === b4.id ? b4.a4m && b4.a4m.clear() : 1 === b4.id ? b4.a4n.saveString(199, "") : 2 === b4.id && b4.a4o.postMessage("clear")
	}, this.a4p = function() {
		2 === b4.id ? b4.a4o.postMessage("showConsentForm") : 1 === b4.id && b4.a4n.setState(7)
	}, this.a4q = function() {
		this.setState(14)
	}, this.b6 = function() {
		return 1 === hk.buffer.a4r(2)
	}, this.a4s = function() {
		hk.buffer.hq(102, "")
	}, this.setState = function(k6) {
		1 === b4.id && 5 <= b4.xU && b4.a4n.setState(k6)
	}, this.a4t = function() {
		var a4u;
		1 === b4.id && 7 <= b4.xU ? b4.a4n.setState(5) : 2 === b4.id ? b4.a4o.postMessage("reload 0") : ((a4u = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4u.toString())
	}, this.a4v = function() {
		0 !== b4.id && (1 === b4.id ? b4.a4n.prepareAd("8646194357") : 2 === b4.id && (0 === b4.xU ? b4.a4o.postMessage("prepare ad 2904813909") : b4.a4o.postMessage("loadAds 2904813909")))
	}, this.kl = function(bv) {
		return 0 !== b4.id && (1 === b4.id ? 12 <= b4.xU && (b4.a4n.presentAd(bv), !0) : 2 === b4.id && 0 !== b4.xU && (b4.a4o.postMessage("showAd"), !0))
	}, this.a4w = function() {
		2 === b4.id && b4.xU < 23 && f1.g9(4, 1, new a4x("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + hi.a4y + "' target='_blank'>" + hi
			.a4y + "</a>", !0, [new g0("⬅️ " + L(61), function() {
				f1.g9(0)
			}, bJ.a4z)]))
	}
}

function a50() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function a51() {
	this.a52 = !1, this.a53 = !1, this.j8 = !1, this.a54 = [0, 0, 0, 0], this.render = function() {
		var c4, c5, fE, gx;
		this.j8 = this.j8 || this.a53, (this.a53 || this.a52 && this.j8) && (c4 = a55.a56[0], c5 = a55.a56[1], fE = a55.a56[2], gx = a55.a56[3], c4 = c4 < this.a54[0] ? this.a54[0] : c4, c5 = c5 < this.a54[1] ? this.a54[1] : c5, fE = fE > this
			.a54[2] ? this.a54[2] : fE, gx = gx > this.a54[3] ? this.a54[3] : gx, this.a53 = !1, this.a52 = !1, c4 === this.a54[0] && c5 === this.a54[1] && fE === this.a54[2] && gx === this.a54[3] ? this.j9() : c4 <= fE && c5 <= gx && a57
			.putImageData(a58, 0, 0, c4, c5, fE - c4 + 1, gx - c5 + 1))
	}, this.j9 = function() {
		this.j8 && this.a54[2] >= this.a54[0] && this.a54[3] >= this.a54[1] && a57.putImageData(a58, 0, 0, this.a54[0], this.a54[1], this.a54[2] - this.a54[0] + 1, this.a54[3] - this.a54[1] + 1), this.j8 = !1
	}, this.yf = function() {
		this.a54[2] >= this.a54[0] && this.a54[3] >= this.a54[1] && a57.putImageData(a58, 0, 0, this.a54[0], this.a54[1], this.a54[2] - this.a54[0] + 1, this.a54[3] - this.a54[1] + 1), this.j8 = !1
	}, this.b3 = function() {
		var aH, aJ;
		this.a52 = !1, this.a53 = !1, this.j8 = !1, this.a54[0] = v.w, this.a54[1] = v.y, this.a54[2] = this.a54[3] = 0;
		loop: for (aH = 1; aH < v.w - 1; aH++)
			for (aJ = v.y - 2; 1 < aJ; aJ--)
				if (1 === aS[f.yr(aH, aJ) + 2]) {
					this.a54[0] = aH;
					break loop
				} loop: for (aJ = 1; aJ < v.y - 1; aJ++)
			for (aH = v.w - 2; 1 < aH; aH--)
				if (1 === aS[f.yr(aH, aJ) + 2]) {
					this.a54[1] = aJ;
					break loop
				} loop: for (aH = v.w - 2; 0 < aH; aH--)
			for (aJ = v.y - 2; 1 < aJ; aJ--)
				if (1 === aS[f.yr(aH, aJ) + 2]) {
					this.a54[2] = aH;
					break loop
				} loop: for (aJ = v.y - 2; 0 < aJ; aJ--)
			for (aH = v.w - 2; 1 < aH; aH--)
				if (1 === aS[f.yr(aH, aJ) + 2]) {
					this.a54[3] = aJ;
					break loop
				}
	}
}

function md(hJ, size, a59, a5A, font) {
	var aL, a3d = .2,
		canvas = document.createElement("canvas"),
		i5 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hJ, canvas.height = hJ, i5.font = size + font, i5.textAlign = "center", i5.textBaseline = "middle", i5.fillStyle = "red", aL = 0; aL < a59.length; aL++) i5.fillText(a59[aL], .5 * hJ, .5 * hJ);
	return -1 < (canvas = function(oz) {
		var aL, db, a0 = oz.data;
		for (aL = a0.length - 4; 0 <= aL; aL -= 4)
			if (db = a0[aL], a5A <= db) return Math.floor(aL / (4 * hJ));
		return -1
	}(i5.getImageData(0, 0, hJ, hJ))) && (a3d = (canvas - .5 * hJ + .1 * size) / size), Math.max(a3d, 0)
}

function qD() {
	function a5G(cK, hm, i3) {
		for (var aL = 0; aL < 256; aL++) cK[aL] = (cK[aL] + (hm >> (aL + i3) % 30 & 1)) % 256
	}
	this.e6 = function(a5D, a5E) {
		var cK = new Uint8Array(256);
		return function(cK, a5D, a5E) {
				var aL, a5J = 3 + (4 + a5D) % 32768,
					a5K = 12 + a5E % 32768,
					a5L = 17 + ((a5D & a5E) + (a5D | a5E) + a5D) % 32768;
				for (aL = 0; aL < 256; aL++) a5J = 1 + a5J * a5K % a5L, cK[aL] = a5J % 256
			}(cK, a5D, a5E), a5G(cK, a5D, 2), a5G(cK, a5E, 7),
			function(cK) {
				var aL, hm, hy = 0;
				for (aL = 0; aL < 3e4; aL++) hm = cK[hy], cK[hy] = (hm + aL + cK[(hy + aL) % 256]) % 256, hy = (hm + aL + hy + (hm & hy)) % 256
			}(cK),
			function(cK) {
				var aL, qu = 1,
					a5M = 1;
				for (aL = 0; aL < 256; aL += 2) qu = (1 + qu) * (cK[aL] + 1) % 1073741824, a5M = (1 + a5M) * (cK[aL + 1] + 1) % 1073741824;
				return [qu, a5M]
			}(cK)
	}, this.a5N = function(a5O, a5P, a5Q, result) {
		for (var aY = 1 << a5O, aL = 0; aL < aY; aL++)
			if (this.a5R(aL, a5P, a5Q) === result) return aL;
		return 0
	}, this.a5R = function(a5S, a5P, a5Q) {
		for (var a5T = a5P + a5S, a5U = a5Q + a5S, hm = a5T + a5U & 2147483647, c2 = 1; c2 <= 16; c2++) hm = (hm = (hm ^ hm >> c2) >>> 1 + (3 & a5T)) * (7 + (1023 & (a5T | a5U))) & 1073741823, a5U >>= 1 + (1 & (a5T >>= 1 + (1 & (hm += 65535 &
			a5U))));
		return hm &= 1073741823
	}
}

function a5V() {
	var a5W = null,
		a5X = null,
		a5Y = 0,
		a5Z = 0,
		a5a = null;

	function a5c() {
		0 !== a5X.jf && (jl.l1.gG(), f1.g9(8, 29, new gA(25, {
			action: 0,
			jQ: iU.iV.cs(a5X.jQ, 5),
			a5i: 0
		}, 29)))
	}

	function a5e() {
		return !jl.jo || jl.ge.jn(a5X) ? 1 : 0
	}

	function a5d() {
		var aH = a5W.aH,
			aJ = a5W.aJ,
			a5l = (jl.l1.gG(), a5e());
		a5W = new a5b([new g0(jT.jV[5][0], function() {
			a5h(5, 0)
		}, a5l), new g0(jT.jV[5][1], function() {
			a5h(5, 1)
		}, a5l), new g0(jT.jV[5][2], function() {
			a5h(5, 2)
		}, a5l), new g0(jT.jV[5][3], function() {
			a5h(5, 3)
		}, a5l)]), a5g(aH, aJ), a5Z = a5Y = 2
	}

	function a5f() {
		29 === f1.mQ && f1.mR().a5m(iU.iV.cs(a5X.jQ, 5))
	}

	function a5h(id, value) {
		5 === id && el.a29.a2A({
			action: 3,
			jQ: iU.iV.cs(a5X.jQ, 5),
			value: value
		})
	}

	function a5g(aH, aJ, a5r) {
		a5W.show(aH, aJ, a5r), jl.l5.show(a5W.aH, a5W.aJ, a5X, 1)
	}
	this.l2 = function(l0, cF) {
		a5Y = 1, a5X = cF, a5W = new a5b([new g0(L(175), a5c, 0 === cF.jf ? 1 : 0), new g0(L(176), a5d, a5e()), new g0(L(177), a5f, 0)]), a5g((a5a = {
			clientX: l0.clientX,
			clientY: l0.clientY
		}).clientX, a5a.clientY, 1)
	}, this.oq = function(code) {
		if (29 !== f1.mQ) return !1;
		if (!a5X) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.gG();
			else if (bQ.cL.startsWith(code, "Numpad") || bQ.cL.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === a5Y) this.l2(a5a, a5X);
				else {
					if (!a5W) return !1;
					1 === a5Y ? code <= 1 ? a5c() : 2 === code ? a5d() : (a5f(), this.gG()) : (a5h(a5Z, hu.hz(code - 1, 0, jT.jV[a5Z].length - 1)), this.gG())
				}
		}
		return !0
	}, this.gG = function() {
		a5Y = 0, a5W && a5W.gG(), a5W = null, jl.l5.gG()
	}
}

function pq() {
	var uL, a5s, a5t, a5v;

	function a5u(aL) {
		f1.g9(8, f1.mQ, new gA(21, {
			gB: aL,
			gC: 0,
			gD: 10
		}))
	}
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), a5s.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, a5t = [new g0(L(178), function() {
		a5u(1)
	}, 0, 0, 1), new g0(L(179), function() {
		a5u(2)
	}, 0, 0, 1), new g0(L(180), function() {
		a5u(3)
	}, 0, 0, 1), new g0(L(181), function() {
		a5u(0)
	}, 0, 0, 1), new g0(L(182), function() {
		a5u(9)
	}, 0, 0, 1), new g0(L(183), function() {
		a5u(10)
	}, 0, 0, 1), new g0(L(184), function() {
		a5u(11)
	}, 0, 0, 1), new g0(L(185), function() {
		a5u(13)
	}, 0, 0, 1)], a5v = [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})], uL = new oQ(L(186), a5v), a5s = new vJ(a5t, uL.oT)
}

function a5w() {
	this.a5x = function(gB, gC, gD) {
		iG.kT(75), iG.ty(1, 0), iG.ty(6, 21), iG.ty(6, gB), iG.ty(1, +(gC < 0)), iG.ty(1, +(gD < 0)), iG.ty(30, Math.abs(gC)), iG.ty(30, Math.abs(gD)), el.d9.send(0, iG.i9)
	}, this.a5y = function(gB, a5z, a60) {
		iG.kT(18 + 16 * a5z.length + 30), iG.ty(1, 0), iG.ty(6, 22), iG.ty(6, gB), el.v7.a61(a5z), iG.ty(30, a60), el.d9.send(0, iG.i9)
	}, this.a62 = function(gB, a5z, a60) {
		iG.kT(73), iG.ty(1, 0), iG.ty(6, 28), iG.ty(6, gB), iP.iV.a63(a5z, 5), iG.ty(30, a60), el.d9.send(0, iG.i9)
	}, this.a64 = function(a65, js) {
		for (var aI = js.length, a59 = 0, aL = 0; aL < aI; aL++) a59 += js[aL].length;
		for (iG.kT(21 + 3 * aI + 16 * a59), iG.ty(1, 0), iG.ty(6, 23), iG.ty(3, a65), iG.ty(4, aI), iG.ty(7, a59), aL = 0; aL < aI; aL++) iG.ty(3, js[aL].length), iU.iQ.a66(js[aL]);
		el.d9.send(0, iG.i9)
	}, this.a67 = function(a65, gC, gD) {
		iG.kT(52), iG.ty(1, 0), iG.ty(6, 24), iG.ty(3, a65), iG.ty(1, +(gC < 0)), iG.ty(1, +(gD < 0)), iG.ty(20, Math.abs(gC)), iG.ty(20, Math.abs(gD)), el.d9.send(0, iG.i9)
	}
}

function a2E() {
	var a68 = new Uint8Array(78);
	this.b3 = function() {
		var aL;
		for (a68[50] = 37, aL = 0; aL < 10; aL++) a68[aL + 3] = aL + 1;
		for (aL = 0; aL < 26; aL++) a68[aL + 20] = aL + 11, a68[aL + 52] = aL + 38
	}, this.a69 = function(bV) {
		return bV.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.yI = function(bV, size) {
		if ((bV = this.a69(bV)).length > size) return bV.substring(0, size);
		for (; bV.length < size;) bV = "-" + bV;
		return bV
	}, this.u9 = function(bV) {
		for (var a6A = a68, aI = bV.length, cK = new Uint8Array(aI), aL = 0; aL < aI; aL++) cK[aL] = a6A[bV.charCodeAt(aL) - 45];
		return cK
	}, this.a6B = function(u8) {
		iG.kT(6 * u8.length), this.a6C(u8), pD.b3(iG.i9)
	}, this.a6C = function(u8) {
		for (var aI = u8.length, aV = iG, aL = 0; aL < aI; aL++) aV.ty(6, u8[aL])
	}, this.a66 = function(bV) {
		this.a6C(this.u9(bV))
	}, this.a63 = function(bV, size) {
		this.a6C(this.u9(this.yI(bV, size)))
	}, this.lA = function(bV, size) {
		for (var cK = this.u9(this.yI(bV, size)), hm = 0, mi = 1, aL = cK.length - 1; 0 <= aL; aL--) hm += mi * cK[aL], mi *= 64;
		return hm
	}
}

function a2F() {
	this.iR = function(size) {
		for (var pC = pD, cK = [], aL = 0; aL < size; aL++) cK.push(String.fromCharCode(pC.iB(16)));
		return cK.join("")
	}, this.a6D = function(bV) {
		return 20 < (bV = bV.trim()).length ? bV.substring(0, 20) : bV
	}
}

function ok(a6E, vS) {
	this.a6F = [];
	var a6G = this.a6F;

	function click() {
		for (var aL = 0; aL < a6G.length; aL++) a6G[aL].textContent = a6G[aL].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var hy = parseInt(this.name);
		void 0 !== a6E.hy && hk.mz.gE(a6E.hy, hy), vS && vS(hy)
	}
	for (var a6H, aI = a6E.n3.length, aL = 0; aL < aI; aL++)(a6H = document.createElement("p")).textContent = "⚪ " + a6E.n3[aL], a6H.style.margin = "0", a6H.name = "" + aL, a6H.style.cursor = "pointer", a6H.style.fontSize = "1em", a6H
		.addEventListener("click", click), a6G.push(a6H);
	a6G[a6E.value].textContent = a6G[a6E.value].textContent.replace("⚪", "🟢")
}

function a6J() {
	var a6K, a6L, a6M, a6N, a6O, a6P, a6Q, a6R, a6S, a6T, a6U, a6V, a6W, a6X, a6Y, a6Z, a6a, a6b, a6c, a6d, a6e, a6f, position, a6g, a6h, a6i, a6j, a6k, a6l = 1,
		a2m = 1,
		a6m = "";
	var leaderboardHasChanged = true;
	this.playerPos = j.k;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => wC[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(wC[j.k]);
	}

	function a6o() {
		a6Q.clearRect(0, 0, a6K, a6I),
			a6Q.fillStyle = a6k ? bJ.a6r : bJ.a6s,
			a6Q.fillRect(0, 0, a6K, a6V),
			a6Q.fillStyle = bJ.fx,
			a6Q.fillRect(0, a6V, a6K, a6I - a6V);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			wC[j.k]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a6f = -1;
		if (__fx.leaderboardFilter.enabled && a6f >= __fx.leaderboardFilter.filteredLeaderboard.length) a6f = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) a6t(ownClanIndex - position, bJ.qq);
			})() :
			(playerPos >= position && a6t(playerPos - position, bJ.qq),
				0 !== wC[j.k] && 0 === position && a6t(0, bJ.a6u))
		),
		-1 !== a6f && a6t(a6f, bJ.a6v),
			a6Q.fillStyle = bJ.fx,
			//console.log("drawing", a6f),
			a6Q.clearRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a6K, __fx.leaderboardFilter.tabBarOffset);
		a6Q.fillRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a6K, __fx.leaderboardFilter.tabBarOffset);
		a6Q.fillStyle = bJ.bL,
			a6Q.fillRect(0, a6V, a6K, 1),
			a6Q.fillRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a6K, 1),
			__fx.leaderboardFilter.drawTabs(a6Q, a6K, a6I - __fx.leaderboardFilter.tabBarOffset, bJ.qq),
			a6Q.fillRect(0, 0, a6K, bT.i4),
			a6Q.fillRect(0, 0, bT.i4, a6I),
			a6Q.fillRect(a6K - bT.i4, 0, bT.i4, a6I),
			a6Q.fillRect(0, a6I - bT.i4, a6K, bT.i4), a6Q.font = a6L, bQ.bR.textBaseline(a6Q, 1), bQ.bR.textAlign(a6Q, 1), a6Q.fillText(a6m, Math.floor((a6K + a6V - 22) / 2), Math.floor(a6T + a6M / 2));
		__fx.playerList.drawButton(a6Q, 12, 12, a6V - 22);
		var c2, mj = playerPos < position + a6O - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) mj = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - a6O)
				position = (rivalsCount > a6O ? rivalsCount : a6O) - a6O;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < a6O; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, cT.cj[repId], cT.cU[repId], cT.dl[repId]]);
					cT.cj[repId] = rivalsEntry.territory;
					cT.cU[repId] = "[" + rivalsEntry.clan + "]";
					cT.dl[repId] = 0;
				}
				for (a6Q.font = a6N, bQ.bR.textAlign(a6Q, 0), c2 = a6O - mj; 0 <= c2; c2--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[c2 + position];
					if (rivalsEntryLeft !== undefined)
						a6w(rivalsEntryLeft.representativeId), a6x(c2, c2 + position, rivalsEntryLeft.representativeId);
				}
				for (bQ.bR.textAlign(a6Q, 2), c2 = a6O - mj; 0 <= c2; c2--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[c2 + position];
					if (rivalsEntryRight !== undefined)
						a6w(rivalsEntryRight.representativeId), a6y(c2, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					cT.cj[entry[0]] = entry[1];
					cT.cU[entry[0]] = entry[2];
					cT.dl[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a6O)
				position = (result.length > a6O ? result.length : a6O) - a6O;
			//if (position >= result.length) position = result.length - 1;
			for (a6Q.font = a6N, bQ.bR.textAlign(a6Q, 0), c2 = a6O - mj; 0 <= c2; c2--) {
				const pos = result[c2 + position];
				if (pos !== undefined)
					a6w(h9[pos]), a6x(c2, pos, h9[pos]);
			}
			for (bQ.bR.textAlign(a6Q, 2), c2 = a6O - mj; 0 <= c2; c2--) {
				const pos = result[c2 + position];
				if (pos !== undefined)
					a6w(h9[pos]), a6y(c2, h9[pos]);
			}
		} else {
			for (a6Q.font = a6N, bQ.bR.textAlign(a6Q, 0), c2 = a6O - mj; 0 <= c2; c2--)
				a6w(h9[c2 + position]), a6x(c2, c2 + position, h9[c2 + position]);
			for (bQ.bR.textAlign(a6Q, 2), c2 = a6O - mj; 0 <= c2; c2--)
				a6w(h9[c2 + position]), a6y(c2, h9[c2 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == mj && (a6w(j.k), bQ.bR.textAlign(a6Q, 0), a6x(a6O - 1, wC[j.k], j.k), bQ.bR.textAlign(a6Q, 2), a6y(a6O - 1, j.k)), 0 === position && (mj = .7 * a6W / gN.get(4).height, a6Q.setTransform(mj, 0, 0,
				mj, Math.floor(a6X + .58 * a6W + .5 * mj * gN.get(4).width), Math.floor(a6T + a6M + .4 * a6W)), a6Q.imageSmoothingEnabled = !0, a6Q.drawImage(gN.get(4), -Math.floor(gN.get(4).width / 2), -Math.floor(gN.get(4).height / 2)), a6Q
			.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a6w(player) {
		j.cu && (a6Q.fillStyle = cw.a70[cw.a71[player]])
	}

	function a6t(aL, a72) {
		a6Q.fillStyle = a72, aL = a6O - 1 < aL ? a6O - 1 : aL;
		a72 = Math.floor((aL === a6O - 1 ? 2 : 0 === aL ? 1.15 : 1) * a6W), a72 = aL === a6O - 2 ? Math.floor(a6V + 9.15 * a6W) - Math.floor(a6V + 8.15 * a6W) : a72;
		a6Q.fillRect(0, Math.floor(a6V + (aL + (0 === aL ? 0 : .15)) * a6W), a6K, a72)
	}

	function a6x(n9, jh, aL) {
		a6Q.fillText(a6b[jh], a6X, Math.floor(a6T + a6M + (n9 + .5) * a6W)), 1 === cT.dl[aL] && (a6Q.font = "italic " + a6N);
		jh = Math.floor(a6T + a6M + (n9 + .5) * a6W);
		a6Q.fillText(cT.cU[aL], a6Y, jh), 0 !== cT.dl[aL] && (a6Q.font = a6N), aL < j.ck && 2 !== cT.dl[aL] || a6Q.fillRect(a6Y, jh + .35 * a6l, a6a[aL], Math.max(1, .1 * a6l))
	}

	function a6y(n9, aL) {
		a6Q.fillText(cT.cj[aL], a6Z, Math.floor(a6T + a6M + (n9 + .5) * a6W))
	}
	this.b3 = function() {
		var aL;
		for (f1.d9.rv[0] = 0, a6j = a6i = a6g = 0, a6k = a6h = !1, a6f = -1, a6O = b4.b5.b6() ? 6 : 10, a2m = (position = 0) === (a2m = hk.buffer.data[11].value) ? 10 : 1 === a2m ? 5 : 1, a6e = !1, a6c = new Uint16Array(a6O + 1), a6d =
			new Uint32Array(a6O + 1), a6S = j.cW, h9 = new Uint16Array(a6S), wC = new Uint16Array(a6S), aL = a6S - 1; 0 <= aL; aL--) h9[aL] = aL, wC[aL] = aL;
		this.resize(!0), a6a = new Uint16Array(j.cW);
		var a6n = Math.floor(a6K - a6Y - a6X - a6R);
		for (a6b = new Array(j.cW), a6Q.font = a6N, aL = j.cW - 1; 0 <= aL; aL--) a6b[aL] = aL + 1 + ".", cT.cU[aL] = bQ.be.cq(cT.cr[aL], a6N, a6n), a6a[aL] = Math.floor(a6Q.measureText(cT.cU[aL]).width);
		a6o()
	}, this.resize = function(b3) {
		if (a6I = b4.b5.b6() ? (a6K = Math.floor(.335 * bN.bO), Math.floor(a6O * a6K / 8)) : (a6K = Math.floor(.27 * bN.bO), Math.floor(a6O * a6K / 10)), a6K = Math.floor(.97 * a6K), (a6P = document.createElement("canvas")).width = a6K, a6P
			.height = a6I, a6Q = a6P.getContext("2d", {
				alpha: !0
			}), a6T = .025 * a6K, a6M = .16 * a6K, a6U = 0 * a6K, a6V = Math.floor(.45 * a6T + a6M), a6W = (a6I - a6M - 2 * a6T - a6U) / a6O,
			a6P.height = a6I += a6W, __fx.leaderboardFilter.tabBarOffset = Math.floor(a6W * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6I - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a6K,
			a6L = bQ.bR.bS(1, Math.floor(.55 * a6M)), a6l = Math.floor((b4.b5.b6() ? .67 : .72) * a6W), a6N = bQ.bR.bS(0, a6l), a6Q.font = a6N, a6X = Math.floor(.04 * a6K), a6Y = Math.floor((b4.b5.b6() ? .195 : .18) * a6K), a6R = Math.floor(a6Q
				.measureText("00920600").width), a6Q.font = a6L, a6Z = a6K - a6X, !b3) {
			a6Q.font = a6N;
			for (var aL = j.cW - 1; 0 <= aL; aL--) a6a[aL] = Math.floor(a6Q.measureText(cT.cU[aL]).width);
			a6o()
		}
		a6m = bQ.be.cq(L(187), a6L, .96 * a6K)
	}, this.a6p = function() {
		return a6K
	}, this.j3 = function(e0, a6q) {
		(a6q || a6e && (e0 || cH.e1() % a2m == 0)) && (a6e = !1, a6o())
	}, this.e6 = function() {
		! function() {
			for (var c2 = a6S - 1; 0 <= c2; c2--) 0 === cT.iw[h9[c2]] && ! function(c2) {
				var a7A = h9[c2];
				a6S--;
				for (var aL = c2; aL < a6S; aL++) h9[aL] = h9[aL + 1], wC[h9[aL]] = aL;
				h9[a6S] = a7A, wC[h9[a6S]] = a6S
			}(c2)
		}();
		for (var a78, iC = a6S - 1, c2 = 0; c2 < iC; c2++) cT.cj[h9[c2]] < cT.cj[h9[c2 + 1]] && (a78 = h9[c2], h9[c2] = h9[c2 + 1], h9[c2 + 1] = a78, wC[h9[c2]] = c2, wC[h9[c2 + 1]] = c2 + 1);
		! function() {
			for (var bv = a6e, mj = (a6e = !0, wC[j.k] >= a6O - 1 ? a6O - 2 : a6O - 1), aL = mj; 0 <= aL; aL--)
				if (a6c[aL] !== h9[aL] || a6d[aL] !== cT.cj[h9[aL]]) return;
			(mj != a6O - 2 || a6c[a6O] === wC[j.k] && a6d[a6O] === cT.cj[j.k]) && (a6e = bv)
		}();
		for (var aL = a6O - 1; 0 <= aL; aL--) a6c[aL] = h9[aL], a6d[aL] = cT.cj[h9[aL]];
		a6c[a6O] = wC[j.k], a6d[a6O] = cT.cj[j.k];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.bt = function(aH, aJ) {
		if (hx(aH, aJ)) {
			if (__fx.utils.isPointInRectangle(aH, aJ, bT.gap + 12, bT.gap + 12, a6V - 22, a6V - 22)) __fx.playerList.display(cT.cr);
			else {
				if (aJ - bT.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aH - bT.gap);
				aH = a7C(aJ);
				0 <= aH ? (a6g = cH.bU, a6h = !0, a6i = a6j = aH, l3.a7D() && (aH = qg(-1, a6j, a6O), a6f !== (aH = aH === a6O ? -1 : aH)) && (a6f = aH, a6o(), cH.cI = !0)) : (a6k && (a6k = !1, a6o(), cH.cI = !0), f1.g9(10, 0, new a7E({
					a7F: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		a6o(), cH.cI = !0
	};

	function a7C(aJ) {
		return (aJ -= bT.gap + a6V) < 0 ? Math.floor(aJ / a6W) - 1 : aJ < (a6O - 1) * a6W ? Math.floor(aJ / a6W) : aJ < a6I - a6V ? a6O - 1 : (aJ -= a6I - a6V, a6O + Math.floor(aJ / a6W))
	}

	function hx(aH, aJ) {
		return aH >= bT.gap && aH < bT.gap + a6K && aJ >= bT.gap && aJ < bT.gap + a6I
	}
	this.ez = function(aH, aJ) {
		var bv, a7B;
		if (__fx.utils.isPointInRectangle(aH, aJ, bT.gap + 12, bT.gap + 12, a6V - 22, a6V - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aH, aJ, bT.gap, bT.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aH - bT.gap)) return a7B = a7C(aJ), aH = hx(aH, aJ), aJ = !(!(a7B < 0 && aH) || l3.a7D()), a6h ? (bv = position, (position = qg(0, position += a6i - a7B, j.cW - a6O)) !== bv ? (a6k = aJ, a7B =
			qg(-1, a6i = a7B, a6O), a6f = a7B = a7B !== a6O && aH ? a7B : -1, a6o(), cH.cI = !0) : a6k !== aJ && (a6k = aJ, a6o(), cH.cI = !0), !0) : (a7B = (a7B = qg(-1, a7B, a6O)) === a6O || !aH || l3.a7D() ? -1 : a7B, (a6f !== a7B ||
			a6k !== aJ) && (a6f = a7B, a6k = aJ, a6o(), cH.cI = !0))
	}, this.zx = function(aH, aJ) {
		if (!a6h) return !1;
		a6h = !1;
		var a7B = a7C(aJ);
		var isEmptySpace = false;
		return l3.a7D() && -1 !== a6f && (a6f = -1, a6o(), cH.cI = !0), cH.bU - a6g < 350 && a6j === a7B && -1 !== (a7B = (a7B = qg(-1, a7B, a6O)) !== a6O && hx(aH, aJ) ? a7B : -1) && (aH = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[a7B + position] === undefined, __fx.leaderboardFilter.rivalsData[a7B + position]?.representativeId ?? j.k) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), h9[__fx.leaderboardFilter.filteredLeaderboard[a7B + position] ?? (isEmptySpace = true, wC[j.k])]) : h9[a7B + position]),
			a7B === a6O - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : wC[j.k]) >=
			position + a6O - 1 && (aH = j.k), !isEmptySpace && j.cu && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aH, cT.cr, j.iv), 0 === cT.iw[aH] || isEmptySpace || j.bC && !j.iv && !j.cp && aH !== j
			.k || c0.c1(aH, 800, !1, 0)), !0
	}, this.q9 = function(aH, aJ, deltaY) {
		var a7I;
		return !(a6h || j.qV || (a7I = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !hx(aH, aJ)) || (aH = (aH = qg(-1, a7C(aJ), a6O)) === a6O || l3.a7D() ? -1 : aH, 0 < deltaY ? position < j.cW - a6O && (position += Math.min(j.cW - a6O -
			position, a7I), a6f = aH, a6o(), cH.cI = !0) : 0 < position && (position -= Math.min(position, a7I), a6f = aH, a6o(), cH.cI = !0), 0))
	}, this.eD = function() {
		eF.drawImage(a6P, bT.gap, bT.gap)
	}
}

function pi() {
	var oN, z0;

	function a7J() {
		f1.q7();
		var bV = ib.a7P(z0.oa());
		(j.e5 && 0 < bV.length && bV === ib.a0K.zF || ib.ic.pB(bV)) && ib.a7Q()
	}
	this.show = function(a7K) {
		this.a7L(a7K), oN.show(), this.resize()
	}, this.a7L = function(a7K) {
		0 === j.e5 ? a7K ? z0.oo(a7K) : j.a7M.length && z0.oo(j.a7M) : (j.cp || (ib.a0K.zF = ib.a7N.zK()), z0.oo(ib.a7O(ib.a0K.zF)))
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), z0.resize()
	}, this.oq = function(bB) {
		2 === bB ? oN.or[0].os() : a7J()
	}, oN = new oQ(L(188), [new g0("⬅️ " + L(61), function() {
		f1.q6(1)
	}), new g0(L(189), function() {
		z0.z5()
	}), new g0(L(190), function() {
		z0.z6()
	}), new g0(L(191), function() {
		z0.clear()
	}), new g0(L(192), function() {
		a7J()
	})]), z0 = new on(L(193)), oN.oT.appendChild(z0.l0)
}

function a7R() {
	this.vv = function() {
		var a7U;
		return !(eA.eB < 3 || cT.cj[h9[0]] >= j.w1 >> 1) && (j.cu ? 9 !== j.dy && (a7U = a0V.a7V(), !(2 * a0V.a7X(li.p7()) >= a7U)) : function() {
			if (8 === j.dy) return !1;
			var a7U = a0V.a7V();
			if (2 * cT.ct[h9[0]] >= a7U) return !1;
			return !0
		}())
	}
}

function a7Y() {
	var hm, aV, au, max, a7Z, xD, a7b, a7c, a7d, a7e, a7f, a7g, a7h, a7i, a7a = 1e4;

	function a7p(a7o, xC, aI) {
		var aL;
		for (a7b[0] = a7o, aL = 1; aL < aI; aL++) a7b[aL] = a7b[aL - 1] + xC, xC = a7b[aL] >= a7a ? (a7b[aL] = a7a - 1, -xC) : a7b[aL] < 0 ? (a7b[aL] = 0, -xC) : (xC += 16384 <= gh.random() ? xD : -xD) < -a7Z ? -a7Z : a7Z < xC ? a7Z : xC
	}

	function a7r(aH, aJ, a7s, aI) {
		(a7s ? function(aH, aJ, aI) {
			var aL;
			for (aL = 0; aL < aI; aL++) hm[aJ * aV + aH + aL] = a7b[aL]
		} : function(aH, aJ, aI) {
			var aL;
			for (aL = 0; aL < aI; aL++) hm[aJ * aV + aH + aL * aV] = a7b[aL]
		})(aH, aJ, aI)
	}

	function a7v(value, aI) {
		var aL, a3t, e, e8 = value - a7b[aI - 1];
		if (0 != e8) {
			for (a3t = 1 + hu.hv(Math.abs(e8), aI - 1), a3t = e8 < 0 ? -a3t : a3t, a7b[aI - 1] = value, e = (e = aI - 1 - hu.hv(Math.abs(e8), Math.abs(a3t))) < 1 ? 1 : aI - 2 < e ? aI - 2 : e, aL = aI - 2; e <= aL; aL--) a7b[aL] += e8 - (aI - 1 -
				aL) * a3t;
			(e8 < 0 ? function(aI) {
				var aL;
				for (aL = aI - 2; 1 <= aL; aL--) a7b[aL] < 0 && (a7b[aL] = -a7b[aL] - 1)
			} : function(aI) {
				var aL;
				for (aL = aI - 2; 1 <= aL; aL--) a7b[aL] >= a7a && (a7b[aL] = 2 * a7a - a7b[aL] - 1)
			})(aI)
		}
	}

	function a7y(ah, ak, aI) {
		for (var aL = 0; aL < aI; aL++) ah[aL] = ak[aL]
	}

	function a7z(cK) {
		for (var aL = 0; aL < cK.length - 1; aL++) cK[aL] = cK[aL + 1] - cK[aL];
		cK[cK.length - 1] = cK[cK.length - 3]
	}

	function a80(a81, gap, nT) {
		a7c.push(a81), a7d.push(gap), a7e.push(nT)
	}
	this.kT = function(mF) {
		! function(mF) {
			var aL;
			for (aV = mF[0], au = mF[1], a7Z = mF[2], xD = mF[3], hm = new Int16Array(aV * au), max = au < aV ? aV : au, a7b = new Int16Array(max), a7c = [], a7d = [], a7e = [], a7f = new Array(aV), a7g = new Array(au), aL = aV - 1; 0 <=
				aL; aL--) a7f[aL] = !1;
			for (aL = au - 1; 0 <= aL; aL--) a7g[aL] = !1;
			a7h = new Int16Array(aV), a7i = new Int16Array(au)
		}(mF),
		function(aI) {
			var a7o = gh.random() % a7a,
				xC = gh.random() % (2 * a7Z + 1) - a7Z;
			a7p(a7o, xC, aI)
		}(max), a7y(a7i, a7b, au), a7r(0, 0, !0, aV);
		var aH, aJ, mF = hm[0],
			aI = max,
			xC = gh.random() % (2 * a7Z + 1) - a7Z;
		for (a7p(mF, xC, aI), a7y(a7h, a7b, aV), a7r(0, 0, !1, au), a7z(a7h), a7z(a7i), a7p(hm[aV - 1], a7h[aV - 1], au), a7r(aV - 1, 0, !1, au), a7p(hm[aV * (au - 1)], a7i[au - 1], aV), a7v(hm[aV * au - 1], aV), a7r(0, au - 1, !0, aV), a7f[aV -
				1] = a7f[0] = !0, a7g[au - 1] = a7g[0] = !0, a80(0, aV, !0), a80(0, au, !1), ! function() {
				var a83, a81;
				for (;;) {
					if (a83 = function() {
							var aL, a83 = a7c.length - 1;
							for (aL = a83 - 1; 0 <= aL; aL--) a7d[aL] > a7d[a83] && (a83 = aL);
							return a83
						}(), a7d[a83] < 5) return;
					a81 = a7c[a83] + hu.hv(a7d[a83], 2), (a7e[a83] ? function(aH) {
						var aI, a86, aL, a87 = 0,
							a88 = 0;
						for (; a88 < au - 1;) {
							for (aL = a87 + 1; aL < au; aL++)
								if (a7g[aL]) {
									a88 = aL;
									break
								} aI = a88 - a87 + 1, a7p(hm[aH + aV * a87], 0 === a87 ? a7h[aH] : a7b[a86 - 1] - a7b[a86 - 2], aI), a7v(hm[a88 * aV + aH], aI), a7r(aH, a87, !1, aI), a86 = aI, a87 = a88
						}
						a7f[aH] = !0
					} : function(aJ) {
						var aI, a86, aL, a87 = 0,
							a88 = 0;
						for (; a88 < aV - 1;) {
							for (aL = a87 + 1; aL < aV; aL++)
								if (a7f[aL]) {
									a88 = aL;
									break
								} aI = a88 - a87 + 1, a7p(hm[aJ * aV + a87], 0 === a87 ? a7i[aJ] : a7b[a86 - 1] - a7b[a86 - 2], aI), a7v(hm[aJ * aV + a88], aI), a7r(a87, aJ, !0, aI), a86 = aI, a87 = a88
						}
						a7g[aJ] = !0
					})(a81), a80(a81, a7c[a83] + a7d[a83] - a81, a7e[a83]), a7d[a83] = a81 - a7c[a83] + 1
				}
			}(), aH = 0; aH < aV; aH++)
			if (!a7f[aH])
				for (aJ = 0; aJ < au; aJ++) a7g[aJ] || ! function(aH, aJ) {
					var value = hm[aJ * aV + aH - 1] + hm[(aJ - 1) * aV + aH],
						fU = 2;
					a7f[aH + 1] && (fU++, value += hm[aJ * aV + aH + 1]);
					a7g[aJ + 1] && (fU++, value += hm[(aJ + 1) * aV + aH]);
					hm[aJ * aV + aH] = hu.hv(value, fU)
				}(aH, aJ)
	}, this.kU = function() {
		return hm
	}, this.kJ = function() {
		hm = null
	}
}

function a8A() {
	var yV = 0,
		yX = 0;
	this.a8B = function(aH, aJ) {
		yV = aH, yX = aJ
	}, this.a8C = function(code) {
		var q, s, c3;
		j.cp || qZ.qa || (bQ.by.wA(0) || bQ.by.wA(1)) && bQ.by.wB(j.k) && (bn.bt(yV, yX) ? bn.a8D = !1 : a4a.bt(yV, yX) || (q = n.yU(yV), s = n.yW(yX), c3 = n.yb(q, s), n.yY(q, s) && (0 === code ? function(c3) {
			var a8H, e, al;
			j.bC ? -1 !== (a8H = a8I.b(c3)) && bx.i1.wv(c3) : (e = n.yc(c3), f.d3(e) ? (a8H = a0h.a0i.a8J(e)) && (al = n.yc(a8H), al = f.cn(al) ? j.cW : f.co(al), bx.i1.x0(bn.tf(), a8H, al)) : (a8H = a8I.h(c3)) < 0 || (e = n.yc(
				a8H), f.cn(e) ? nc.a8K(j.k) ? bx.i1.te(bn.tf(), j.cW) : nN.sP(j.k) && a4W.a8L(j.cW, bn.tf()) : (al = f.co(e), nc.nd(al, j.k) && (nc.a8M(j.k, al) ? bx.i1.te(bn.tf(), al) : nN.sP(j.k) && a4W.a8L(al, bn
				.tf())))))
		}(c3) : 1 === code ? function(c3) {
			d8.a8N.a8O(j.k, c3) && bx.i1.pF(bn.tf(), h1.h2[7])
		}(c3) : 2 === code && function(c3) {
			d8.gn.a8P(j.k, c3) && bx.i1.pI(bn.tf())
		}(c3))))
	}, this.a8Q = function() {
		if (!j.cp && !qZ.qa && bQ.by.wA(1)) {
			var aP = j.k;
			if (bQ.by.wB(aP)) {
				var aI = nN.sP(aP);
				if (aI < 1) ! function() {
					var aP = j.k;
					if (nc.a8K(aP)) bx.i1.te(bn.tf(), j.cW);
					else
						for (var af = f.af, nU = cT.nU, aI = nU[aP].length, aX = Math.floor(Math.random() * aI), aL = 0; aL < aI; aL++)
							for (var nT = 3; 0 <= nT; nT--) {
								var i3 = nU[aP][(aL + aX) % aI] + af[nT];
								if (f.nW(i3)) {
									i3 = f.co(i3);
									if (i3 !== aP && (!j.cu || nc.nd(aP, i3))) return bx.i1.te(bn.tf(), i3)
								}
							}
				}();
				else {
					for (var a8S = 0, d2 = nN.sR(aP, 0), aL = 1; aL < aI; aL++) {
						var a8T = nN.sR(aP, aL);
						a8T < d2 && (d2 = a8T, a8S = aL)
					}
					bx.i1.te(bn.tf(), nN.sQ(aP, a8S))
				}
			}
		}
	}, this.wF = function() {
		if (!j.cp && !qZ.qa && bQ.by.wB(j.k) && bQ.by.wA(1)) return bh.bi ? bh.vn(j.k) ? void bx.i1.vo(1) : void 0 : void(bh.w9(j.k) && bx.i1.wF())
	}
}

function a8U() {
	var a8V = 501,
		a8a = (this.a8W = new Uint32Array(a8V), this.a8X = new Uint32Array(a8V), this.a8Y = new Uint16Array(a8V), this.a8Z = 0, 1),
		a8b = 0;

	function a8e(self) {
		self.max.fill(0)
	}

	function a8i(self, aL) {
		self.max[0] = Math.max(self.a8W[aL], self.max[0]), self.max[1] = Math.max(self.a8X[aL], self.max[1]), self.max[2] = Math.max(self.a8Y[aL], self.max[2])
	}
	this.max = [0, 0, 0], this.a8c = 0, this.hE = new Array(21), this.a8d = null, this.mW = function() {
		this.a8d = [L(194), L(195), L(196), L(197), L(198), L(199), L(200), L(201), L(71), L(202), L(203), L(204), L(205), L(206), "", L(207), L(208), L(209), L(210), L(211), L(212)]
	}, this.b3 = function() {
		this.a8Z = 0, a8a = 1, this.a8c = 0, a8b = 0, a8e(this), this.hE.fill(0)
	}, this.a0P = function(player, a0L) {
		bQ.by.sX(player) && (this.hE[0] += a0L + 1, this.hE[1]++, this.hE[12] += h1.nO[1])
	}, this.di = function(player, a0Q) {
		__fx.donationsTracker.logDonation(player, a0Q, h1.nO[0], gZ.a14());
		player === j.k && (bp.di(h1.nO[0], h1.nO[1], a0Q), this.hE[12] += h1.nO[1], this.hE[16] += h1.nO[0]), a0Q === j.k && (bp.dn(h1.nO[0], player), this.hE[10] += h1.nO[0])
	}, this.a0b = function(player) {
		bQ.by.sX(player) && (this.hE[2]++, this.hE[12] += h1.nO[1])
	}, this.a0m = function(player) {
		bQ.by.sX(player) && (this.hE[19]++, this.hE[12] += h1.nO[1])
	}, this.a8f = function(player) {
		bQ.by.sX(player) && this.hE[20]++
	}, this.sJ = function(player, sq, hy) {
		bQ.by.sX(player) && (this.hE[hy] += sq)
	}, this.e6 = function() {
		var self;
		this.a8c || 0 < a8b-- || ((self = this).a8W[self.a8Z] = cT.cj[j.k], self.a8X[self.a8Z] = cT.ct[j.k], self.a8Y[self.a8Z] = a0V.a8h(j.k), a8i(self, self.a8Z), self.a8Z++, self.a8Z === a8V && function(self) {
			a8e(self), a8i(self, 0), self.a8Z = 1 + hu.hv(a8V, 2);
			for (var aL = 1; aL < self.a8Z; aL++) self.a8W[aL] = self.a8W[2 * aL], self.a8X[aL] = self.a8X[2 * aL], self.a8Y[aL] = self.a8Y[2 * aL], a8i(self, aL);
			a8a *= 2
		}(self), a8b = a8a - 1, a8k.qS(), 0 === cT.iw[j.k] && (self.a8c = cH.e1()))
	}
}

function a5b(a8l) {
	var lX = document.createElement("div"),
		a8m = document.createElement("div"),
		a8n = (this.aH = 0, this.aJ = 0);

	function a8p() {
		jl.l1.gG()
	}
	this.ft = a8l, this.show = function(aH, aJ, a5r) {
		if (a8n) return [0, 0];
		a8n = 1, this.aH = aH, this.aJ = aJ,
			function(self, a5r) {
				var aV = bQ.bR.lV(.16, .7),
					au = a8l.length * aV / 3,
					a8s = bN.aV / bN.mk,
					a8t = bN.au / bN.mk,
					mi = Math.min(1, Math.min(a8s / aV, a8t / au));
				aV *= mi, au *= mi, a5r && (self.aH += bQ.bR.lV(.03, .5)), self.aH = hu.hz(self.aH, 0, a8s - aV), self.aJ = hu.hz(self.aJ, 0, a8t - au), a8m.style.left = self.aH + "px", a8m.style.top = self.aJ + "px", a8m.style.width = aV + "px",
					a8m.style.height = au + "px", a8m.style.font = bQ.bR.bS(0, .3 * au / a8l.length), bQ.bR.gL(a8m, 5);
				for (var aL = 1; aL < a8l.length; aL++) bQ.bR.gL(a8l[aL].button, 8)
			}(this, a5r), document.body.appendChild(lX)
	}, this.gG = function() {
		a8n && (a8n = 0, lX.removeEventListener("click", a8p), f1.removeChild(document.body, lX))
	};
	for (var aL = 0; aL < a8l.length; aL++) new o3("" + (1 + aL), a8l[aL].button, 0, 1);
	lX.style.position = "fixed", lX.style.top = "0", lX.style.left = "0", lX.style.width = "100%", lX.style.height = "100%", lX.style.zIndex = "5", a8m.style.position = "absolute",
		function() {
			for (var a8q = (100 / a8l.length).toFixed(2) + "%", aL = 0; aL < a8l.length; aL++) a8l[aL].button.style.width = "100%", a8l[aL].button.style.height = a8l[aL].button.style.maxHeight = a8q, a8l[aL].button.style.padding = "0.0em 0.9em", a8m
				.appendChild(a8l[aL].button)
		}(), lX.appendChild(a8m), lX.addEventListener("click", a8p)
}

function a8u() {
	var aH, aJ, au, a8v, a8w, a8x, a8y, a8z, a90, aV, ms, ro;
	this.bi = !1, this.b3 = function(bV, a91) {
		if (1 === b4.id && 13 <= b4.xU && b4.xU < 18) return a91 ? void(ms = bV) : ms !== bV ? void 0 : void b4.a4n.saveString(200, bV);
		a91 && (ms = bV, (ro = document.createElement("a")).appendChild(document.createTextNode(ms)), this.bi = !0, ro.title = ms, ro.target = "_blank", ro.href = ms, ro.style.textAlign = "center", ro.style.color = bJ.bL, ro.style.position =
			"absolute", ro.style.padding = "0px", ro.style.margin = "0px", this.resize(), document.body.appendChild(ro), cH.cI = !0)
	}, this.gG = function() {
		return !(!this.bi || (f1.removeChild(document.body, ro), this.bi = !1))
	}, this.bt = function(oG, oH) {
		return !!this.bi && ((oG < aH || oH < aJ || aH + aV < oG || aJ + au < oH || aH + aV - a8v < oG && oH < aJ + a8v) && (cH.cI = !0, this.bi = !1, f1.removeChild(document.body, ro)), !0)
	}, this.resize = function() {
		var bP, a3s;
		this.bi && (a8z = Math.floor(.8 * (b4.b5.b6() ? bN.aV > bN.au ? .6 : .55 : .4) * bN.bO), a8v = Math.floor(.15 * a8z), a8w = Math.floor(.35 * a8v), a8x = Math.floor(.5 * a8v), a8y = Math.floor(2.5 * a8x), au = a8v + a8w + 3 * a8x, bP = bQ
			.bR.bS(1, a8w / bN.mk), a90 = Math.floor(bN.mk * bd.measureText(ms, bP)), a3s = aV = (a8z < a90 ? a90 : a8z) + 2 * a8y, aV = Math.min(aV, bN.aV - 2 * (b4.b5.b6() ? 2 : 1) * bT.gap), bP = bQ.bR.bS(1, aV / a3s * a8w / bN.mk), a90 =
			Math.floor(bN.mk * bd.measureText(ms, bP)), aH = Math.floor((bN.aV - aV) / 2), aJ = Math.floor((bN.au - au) / 2), ro.style.font = bP, ro.style.top = Math.floor((aJ + 1.4 * a8x + a8v) / bN.mk) + "px", ro.style.left = Math.floor((
				aH + (aV - a90) / 2) / bN.mk) + "px")
	}, this.eD = function() {
		this.bi && (eF.fillStyle = bJ.bK, eF.fillRect(aH, aJ + a8v, aV, au - a8v), eF.fillStyle = bJ.a92, eF.fillRect(aH, aJ, aV, a8v), eF.fillStyle = bJ.bL, eF.lineWidth = bT.i4, eF.strokeStyle = bJ.bL, eF.strokeRect(aH, aJ, aV, au), eF
			.fillRect(aH, aJ + a8v, aV, bT.i4), eF.font = bQ.bR.bS(1, .48 * a8v), bQ.bR.textAlign(eF, 1), bQ.bR.textBaseline(eF, 1), eF.fillText(L(213), Math.floor(aH + (aV - .5 * a8v) / 2), Math.floor(aJ + .55 * a8v)), qZ.a93(Math.floor(aH +
				aV - .8 * a8v), Math.floor(aJ + .25 * a8v), Math.floor(.5 * a8v)), eF.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function xs() {
	this.gE = function(hy, value) {
		2 !== hk.buffer.data[hy].type && (value = Math.floor(value)), hk.buffer.data[hy].value !== value && (hk.buffer.hq(hy, value), 0 === hy ? (f1.q7(), uQ.b3(), f1.g9(2)) : 1 === hy ? bN.a94(1) : 2 === hy ? bN.a94(0) : 5 === hy && (bQ.bR.mc(),
			bN.a94(0)))
	}, this.uO = function() {
		for (var data = hk.buffer.data, aL = 0; aL < 100; aL++) data[aL] && hk.buffer.hq(aL, data[aL].xV);
		bQ.bR.mc(), bN.a94(1)
	}, this.a4l = function() {
		for (var data = hk.buffer.data, aL = 0; aL < data.length; aL++) data[aL] && hk.buffer.gE(aL, data[aL].xV)
	}, this.a95 = function() {
		for (var c7 = hk.buffer, aL = 128; aL < 135; aL++) c7.hq(aL, c7.data[aL].xV)
	}, this.a96 = function(data) {
		hk.mz.gE(109, data.a5i), hk.mz.gE(107, data.a97), hk.mz.gE(108, data.a98), hk.mz.gE(112, data.a99), hk.mz.gE(111, data.a9A), hk.mz.gE(113, data.a9B), hk.mz.gE(135, data.a9C), hk.mz.gE(136, data.a9D), hk.mz.gE(137, data.a9E), hk.mz.gE(138,
			data.a9F), hk.mz.gE(139, data.a9G), hk.mz.gE(141, data.a9H), hk.mz.gE(142, data.a9I), hk.mz.gE(143, data.a9J), hk.mz.gE(144, data.a9K)
	}
}

function a9L() {
	this.zK = function() {
		var a2y = function() {
				for (var zE = ib.a0K.zE, aI = zE.length, max = 0, aL = 0; aL < aI; aL++) max = Math.max(max, zE[aL]);
				return a9V(Math.max(max, 1))
			}(),
			aV = (cF = j.data, (aV = a9R).b3(), aV.ty(12, eh.rVersion), aV.hy += 43, aV.ty(2, cF.mapType), aV.ty(8, cF.mapProceduralIndex), aV.ty(8, cF.mapRealisticIndex), aV.ty(14, cF.mapSeed), aV.u5(cF.mapName, 5), 2 === cF.mapType && aV.u6(cF
				.canvas), aV.ty(1, cF.passableWater), aV.ty(1, cF.passableMountains), aV.ty(10, cF.playerCount), aV.ty(10, cF.humanCount), aV.ty(9, cF.selectedPlayer), aV.ty(1, cF.gameMode), aV.ty(2, cF.playerMode), aV.ty(2, cF
				.battleRoyaleMode), aV.ty(4, cF.numberTeams), aV.ty(1, cF.isZombieMode), aV.ty(1, cF.isContest), aV.ty(1, cF.isReplay), aV.u1(cF.elo, 2, 14), aV.ty(1, cF.colorsType), aV.ty(1, cF.colorsPersonalized), aV.u1(cF.colorsData, 10,
				18), aV.ty(1, cF.selectableColor), aV.u1(cF.teamPlayerCount, 4, 10), aV.ty(1, cF.neutralBots), aV.ty(2, cF.botDifficultyType), aV.ty(4, cF.botDifficultyValue), aV.u1(cF.botDifficultyTeam, 4, 4), aV.u1(cF.botDifficultyData, 10,
				4), aV.ty(2, cF.spawningType), aV.ty(14, cF.spawningSeed), aV.u1(cF.spawningData, 11, 12), aV.ty(1, cF.selectableSpawn), aV.ty(2, cF.playerNamesType), aV.u4(cF.playerNamesData, 10, 5), aV.ty(1, cF.selectableName), aV.ty(2, cF
				.aIncomeType), aV.ty(8, cF.aIncomeValue), aV.u1(cF.aIncomeData, 10, 8), aV.ty(2, cF.tIncomeType), aV.ty(8, cF.tIncomeValue), aV.u1(cF.tIncomeData, 10, 8), aV.ty(2, cF.iIncomeType), aV.ty(8, cF.iIncomeValue), aV.u1(cF
				.iIncomeData, 10, 8), aV.ty(2, cF.sResourcesType), aV.ty(11, cF.sResourcesValue), aV.u1(cF.sResourcesData, 10, 11), aV.u1(cF.a0G, 10, 30), ! function(a2y) {
				var aV = a9R,
					z9 = ib.a0K.z9,
					aQ = ib.a0K.zA,
					ws = ib.a0K.zB,
					wt = ib.a0K.zC,
					aI = z9.length;
				aV.ty(5, a2y), aV.ty(30, aI), aV.ty(30, ib.a0K.zE.length);
				for (var aL = 0; aL < aI; aL++) {
					var bB = z9[aL];
					aV.ty(4, bB), aV.ty(9, aQ[aL]), 0 === bB ? aV.ty(22, ws[aL]) : 1 === bB ? (aV.ty(10, ws[aL]), aV.ty(10, wt[aL])) : 2 === bB ? (aV.ty(10, ws[aL]), aV.ty(9, wt[aL])) : 3 === bB ? (aV.ty(10, ws[aL]), aV.ty(27, wt[aL])) :
						4 === bB ? (aV.ty(10, ws[aL]), aV.ty(16, wt[aL])) : 5 === bB || 6 === bB ? aV.ty(10, ws[aL]) : 7 === bB ? aV.ty(1, ws[aL]) : 10 === bB && (aV.ty(20, ws[aL]), aV.ty(22, wt[aL]))
				}
			}(a2y), ! function(a2y) {
				for (var aV = a9R, zD = ib.a0K.zD, zE = ib.a0K.zE, aI = zD.length, aL = 0; aL < aI; aL++) aV.ty(1, zD[aL]), aV.ty(a2y, zE[aL])
			}(a2y), a9R.hy),
			cF = hu.hv(aV - 1, 6) + 1,
			a2y = (iG.iH(6 * cF) !== a9R.cK.length && a9R.cK.push(0), ! function() {
				var aV = a9R;
				aV.hy = 24, aV.ty(31, aV.cK.length), aV.hy = 12, aV.ty(12, function() {
					for (var cK = a9R.cK, aI = cK.length, a9U = eh.rVersion, aL = 3; aL < aI; aL++) a9U = a9U + cK[aL] & 4095;
					return a9U
				}())
			}(), pD.b3(a9R.cK), iU.iV.iW(iU.iV.iX(cF)));
		return pD.iA(), a9R.b3(), a2y
	}
}

function a9W() {
	"function" != typeof Math.log2 && (Math.log2 = function(aH) {
		return Math.log(aH) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aH) {
		return Math.log(aH) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aH) {
		return 0 < aH ? 1 : aH < 0 ? -1 : 0
	})
}

function a9X() {
	this.a9Y = function() {
		for (var aH, aJ, aL = a9Z - 1; 0 <= aL; aL--) aH = hu.hv(a9a[aL], 4) % v.w, aJ = hu.hv(a9a[aL], 4 * v.w), cT.gu[a9b] = Math.min(aH, cT.gu[a9b]), cT.gv[a9b] = Math.min(aJ, cT.gv[a9b]), cT.gw[a9b] = Math.max(aH, cT.gw[a9b]), cT.gy[a9b] =
			Math.max(aJ, cT.gy[a9b])
	}, this.a9c = function() {
		var a0, aP, aL, aI = cT.nG[a9b].length,
			af = f.af;
		loop: for (aL = aI - 1; 0 <= aL; aL--) {
			for (a0 = 3; 0 <= a0; a0--)
				if (aP = cT.nG[a9b][aL] + af[a0], f.cn(aP) || f.nW(aP) && f.co(aP) !== a9b) {
					f.nX(cT.nG[a9b][aL], a9b);
					continue loop
				} cT.nG[a9b][aL] = cT.nG[a9b][aI - 1], cT.nG[a9b].pop(), aI--
		}
	}, this.a9d = function() {
		var player = a9b,
			nU = cT.nU,
			a9e = cT.a9e,
			a9f = cT.a9f,
			aI = nU[player].length,
			af = f.af;
		loop: for (var aL = aI - 1; 0 <= aL; aL--) {
			for (var a9g = !1, a9h = !1, a0 = 3; 0 <= a0; a0--) {
				var aP = nU[player][aL] + af[a0];
				if (f.i(aP, player)) continue loop;
				a9g = a9g || f.kV(aP), a9h = a9h || f.a9i(aP)
			}
			a9g ? a9e[player].push(nU[player][aL]) : a9h ? a9f[player].push(nU[player][aL]) : f.yv(nU[player][aL], player), nU[player][aL] = nU[player][aI - 1], nU[player].pop(), aI--
		}
	}, this.a9j = function() {
		cT.cj[a9k] -= a9Z
	}, this.a9l = function(border) {
		for (var aI = border.length, aL = aI - 1; 0 <= aL; aL--) f.ys(a9k, border[aL]) || (border[aL] = border[aI - 1], border.pop(), aI--)
	}, this.a9m = function(border) {
		for (var aI = border.length, aL = aI - 1; 0 <= aL; aL--) !f.ys(a9k, border[aL]) && f.g(border[aL]) && (border[aL] = border[aI - 1], border.pop(), aI--)
	}, this.a9n = function(border) {
		for (var a0, aP, aI = border.length, af = f.af, aL = aI - 1; 0 <= aL; aL--)
			for (a0 = 3; 0 <= a0; a0--)
				if (aP = border[aL] + af[a0], f.i(aP, a9k)) {
					cT.nU[a9k].push(border[aL]), border[aL] = border[aI - 1], border.pop(), aI--;
					break
				}
	}, this.a9o = function() {
		for (var a0, aP, af = f.af, aL = a9Z - 1; 0 <= aL; aL--)
			for (a0 = 3; 0 <= a0; a0--) aP = a9a[aL] + af[a0], f.a9p(a9k, aP) && f.a9q(aP) && (cT.nU[a9k].push(aP), f.yu(aP, a9k))
	}, this.a9r = function() {
		var aH, aJ;
		loop: for (; cT.gv[a9k] < cT.gy[a9k];) {
			for (aH = cT.gw[a9k]; aH >= cT.gu[a9k]; aH--)
				if (f.ys(a9k, 4 * (cT.gv[a9k] * v.w + aH))) break loop;
			cT.gv[a9k]++
		}
		loop: for (; cT.gv[a9k] < cT.gy[a9k];) {
			for (aH = cT.gw[a9k]; aH >= cT.gu[a9k]; aH--)
				if (f.ys(a9k, 4 * (cT.gy[a9k] * v.w + aH))) break loop;
			cT.gy[a9k]--
		}
		loop: for (; cT.gu[a9k] < cT.gw[a9k];) {
			for (aJ = cT.gy[a9k]; aJ >= cT.gv[a9k]; aJ--)
				if (f.ys(a9k, 4 * (aJ * v.w + cT.gu[a9k]))) break loop;
			cT.gu[a9k]++
		}
		loop: for (; cT.gu[a9k] < cT.gw[a9k];) {
			for (aJ = cT.gy[a9k]; aJ >= cT.gv[a9k]; aJ--)
				if (f.ys(a9k, 4 * (aJ * v.w + cT.gw[a9k]))) break loop;
			cT.gw[a9k]--
		}
	}, this.nd = function(player, nR) {
		return 0 === cw.cz[player] || cw.cz[player] !== cw.cz[nR]
	}, this.a8K = function(player) {
		for (var aL, mj, aI = cT.nU[player].length, af = f.af, a0 = 3; 0 <= a0; a0--)
			for (mj = af[a0], aL = 0; aL < aI; aL++)
				if (f.cn(cT.nU[player][aL] + mj)) return !0;
		return !1
	}, this.a9s = function(player) {
		for (var aL, mj, aI = cT.nU[player].length, af = f.af, a0 = 3; 0 <= a0; a0--)
			for (mj = af[a0], aL = 0; aL < aI; aL++)
				if (f.nV(cT.nU[player][aL]) && f.cn(cT.nU[player][aL] + mj)) return !0;
		return !1
	}, this.a8M = function(a9t, a9u) {
		for (var aL, bv, mj, aP, a9v = cT.nU[a9t].length, a9w = cT.nU[a9u].length, af = (a9w < a9v && (bv = a9t, a9t = a9u, a9u = bv, bv = a9v, a9v = a9w, 0), f.af), a0 = 3; 0 <= a0; a0--)
			for (mj = af[a0], aL = 0; aL < a9v; aL++)
				if (aP = cT.nU[a9t][aL] + mj, f.nW(aP) && f.co(aP) === a9u) return !0;
		return !1
	}, this.a9x = function(a9t, a9u) {
		for (var aL, mj, aP, a9v = cT.nU[a9t].length, af = f.af, a0 = 3; 0 <= a0; a0--)
			for (mj = af[a0], aL = 0; aL < a9v; aL++)
				if (f.nV(cT.nU[a9t][aL]) && (aP = cT.nU[a9t][aL] + mj, f.nW(aP)) && f.co(aP) === a9u) return !0;
		return !1
	}
}

function a9y() {
	var a9z, aA0, aA1;
	a9z = [32, 65, 191, 913, 931], aA0 = [64, 127, 688, 930, 1155], aA1 = new Array(a9z.length + 1);
	for (var aL = 0; aL < aA1.length; aL++) {
		aA1[aL] = 0;
		for (var c2 = aL - 1; 0 <= c2; c2--) aA1[aL] += aA0[c2] - a9z[c2]
	}

	function aA7(bB) {
		for (var aL = a9z.length - 1; 0 <= aL; aL--)
			if (bB >= a9z[aL] && bB < aA0[aL]) return aL;
		return -1
	}
	this.a6D = function(bV) {
		return 0 !== (bV = bV.trim()).indexOf("Bot ") && 0 !== bV.indexOf("[Bot] ") && function(bV, aA4, aA5) {
			var aI = (bV = bV.trim()).length;
			if (aI < aA4 || aA5 < aI) return !1;
			for (var bB, aA6 = 0, aL = 0; aL < aI; aL++)
				if (bB = bV.charCodeAt(aL), aA6 += 65 <= bB && bB <= 90 || 1040 <= bB && bB <= 1071 ? 1 : 0, -1 === aA7(bB)) return !1;
			if (3 < aA6 && aA6 > Math.floor(aI / 2)) return !1;
			return !0
		}(bV, 3, 20)
	}, this.zK = function(bV) {
		for (var aI = (bV = bV.trim()).length, cK = [], aL = 0; aL < aI; aL++) {
			var bB, aP = aA7(bB = bV.charCodeAt(aL));
			cK.push(aA1[aP] + bB - a9z[aP])
		}
		return cK
	}, this.pB = function(cK) {
		for (var bB, c7, bV = "", aI = cK.length, aL = 0; aL < aI; aL++)
			for (c7 = 1; c7 < aA1.length; c7++)
				if (cK[aL] < aA1[c7]) {
					bB = a9z[c7 - 1] + cK[aL] - aA1[c7 - 1], bV += String.fromCharCode(bB);
					break
				} return bV
	}, this.aA8 = function(bV) {
		for (var cK = this.zK(bV), result = "", aL = 0; aL < cK.length; aL++) result = (result += cK[aL] < 10 ? "00" : cK[aL] < 100 ? "0" : "") + cK[aL].toString(10);
		return result
	}, this.aA9 = function(bV) {
		for (var cK = new Array(Math.floor(bV.length / 3)), aL = 0; aL < bV.length; aL += 3) cK[Math.floor(aL / 3)] = parseInt(bV.substring(aL, aL + 3));
		return this.pB(cK)
	}, this.aAA = function(bV) {
		for (var hm, cK = [bV.length], aL = 0; aL < bV.length; aL++) cK[aL] = bV.charCodeAt(aL) - 48;
		var result = "";
		for (aL = 0; aL < bV.length; aL++) aL === bV.length - 1 || 51 < 10 * cK[aL] + cK[aL + 1] ? result += cK[aL].toString() : (hm = 10 * cK[aL] + cK[aL + 1], result += String.fromCharCode(hm + (hm < 26 ? 65 : 71)), aL++);
		return result
	}, this.aAB = function(bV) {
		for (var bB, result = "", aL = 0; aL < bV.length; aL++) 48 <= (bB = bV.charCodeAt(aL)) && bB < 58 ? result += String.fromCharCode(bB) : 65 <= bB && bB < 75 ? result += "0" + (bB - 65).toString() : 75 <= bB && bB < 91 ? result += (bB - 65)
			.toString() : 97 <= bB && bB < 123 && (result += (bB - 71).toString());
		return result
	}, this.aAC = function(bV) {
		for (var aI = bV.length, cK = [], aL = 0; aL < aI; aL++)(bB = bV.charCodeAt(aL)) < 58 ? cK.push(bV[aL]) : (bB -= bB < 91 ? 65 : 71, cK.push(String(hu.hv(bB, 10))), cK.push(String(bB - 10 * hu.hv(bB, 10))));
		var aI = cK.length - 2,
			bB = 0,
			u8 = [];
		for (aL = 0; aL < aI; aL += 3) u8[bB++] = parseInt(cK[aL] + cK[aL + 1] + cK[aL + 2]);
		return u8
	}, this.aAD = function() {
		for (var db, aAE = "", aL = 0; aL < 6; aL++) db = 48 + gh.random() % 36, db += 58 <= db ? 39 : 0, aAE += String.fromCharCode(db);
		return aAE
	}
}

function aAF() {
	var aAG, cK;
	this.b3 = function() {
		for (var aL = (cK = new Uint16Array(101)).length - 1; 0 <= aL; aL--) cK[aL] = hu.hv(32768 * aL, 100);
		this.kS(0)
	}, this.value = function(aP) {
		return cK[aP]
	}, this.kR = function() {
		return hu.hv(aAG - 1, 2)
	}, this.kS = function(kQ) {
		aAG = 2 * kQ % 32768 + 1
	}, this.random = function() {
		return aAG = 167 * aAG % 32768
	}, this.gi = function(dH) {
		return hu.hv(dH * this.random(), 32768)
	}, this.aAH = function(aP) {
		return 0 !== aP && this.random() < this.value(aP)
	}, this.aAI = function(c2, c7) {
		return c2 + this.gi(c7 - c2)
	}
}

function aAJ() {
	this.aAK = new Int16Array(4), this.aAL = new Int16Array(4), this.aAM = null, this.b3 = function() {
		var aL;
		for (this.aAK[0] = -v.w, this.aAK[1] = 1, this.aAK[2] = v.w, this.aAK[3] = -1, this.aAM = new Int16Array([-v.w, 1 - v.w, 1, v.w + 1, v.w, v.w - 1, -1, -v.w - 1]), aL = 0; aL < 4; aL++) this.aAL[aL] = 4 * this.aAK[aL]
	}, this.o = function() {
		return hu.hz(Math.floor(.15 * (1 + .25 * b4.b5.b6()) * bN.bO / a3D), 4, 128)
	}, this.aAN = function(e, id) {
		for (var aAO = this.aAL, aL = 0; aL < 4; aL++) {
			var al = e + aAO[aL];
			if (f.kV(al) && f.d4(al) === id) return !0
		}
		return !1
	}, this.aAP = function(player, e) {
		return !f.cn(e) && player === f.co(e)
	}, this.aAQ = function(q, s, c3) {
		return (q -= this.r(c3)) * q + (s -= this.t(c3)) * s
	}, this.aAR = function(oG, oH, aAS) {
		oG = this.aAT(oG) - this.aAU(aAS), oH = this.aAV(oH) - this.aAW(aAS);
		return Math.sqrt(oG * oG + oH * oH)
	}, this.a4I = function(a5, a7) {
		var gz = this.r(a5) - this.r(a7),
			a5 = this.t(a5) - this.t(a7);
		return ~~Math.sqrt(gz * gz + a5 * a5 + .5)
	}, this.aG = function(a5, a7) {
		var gz = this.r(a5) - this.r(a7),
			a5 = this.t(a5) - this.t(a7);
		return gz * gz + a5 * a5
	}, this.aAX = function(a37, a38, a39, a3A) {
		return (a37 -= a39) * a37 + (a38 -= a3A) * a38
	}, this.a0T = function(aP, a0L) {
		return hu.hv(a0L * cT.ct[aP], 1e3)
	}, this.aAT = function(oG) {
		return 16 * (oG + pW) / a3D
	}, this.aAV = function(oH) {
		return 16 * (oH + pX) / a3D
	}, this.aAY = function(a0) {
		return 16 * a0 / a3D
	}, this.yU = function(oG) {
		return Math.floor((oG + pW) / a3D)
	}, this.yW = function(oH) {
		return Math.floor((oH + pX) / a3D)
	}, this.yY = function(q, s) {
		return 1 <= q && 1 <= s && q < v.w - 1 && s < v.y - 1
	}, this.r = function(c3) {
		return c3 % v.w
	}, this.t = function(c3) {
		return hu.hv(c3, v.w)
	}, this.yb = function(q, s) {
		return s * v.w + q
	}, this.aM = function(q, s) {
		return 4 * this.yb(q, s)
	}, this.a0J = function(c3) {
		return this.aAZ(this.r(c3), this.t(c3))
	}, this.aAZ = function(q, s) {
		return 0 < q && q < v.w - 1 && 0 < s && s < v.y - 1
	}, this.yc = function(c3) {
		return c3 << 2
	}, this.aAa = function(e) {
		return e >> 2
	}, this.aAb = function(c3) {
		return v.w * this.t(c3) * 256 + (this.r(c3) << 4)
	}, this.aAc = function(c3) {
		return this.aAb(c3) + 8 + (v.w << 7)
	}, this.gs = function(aAS) {
		return v.w * (this.aAW(aAS) >> 4) + (this.aAU(aAS) >> 4)
	}, this.aAd = function(aAS) {
		aAS = this.gs(aAS);
		return (this.r(aAS) >> 5) + d8.kE.aAe * (this.t(aAS) >> 5)
	}, this.aAU = function(aAS) {
		return aAS % (v.w << 4)
	}, this.aAW = function(aAS) {
		return hu.hv(aAS, v.w << 4)
	}, this.aAf = function(c3, nT) {
		return c3 + this.aAK[nT]
	}, this.aAg = function(e, nT) {
		return e + this.aAL[nT]
	}, this.aAh = function(a5, a7) {
		var gz = this.r(a7) - this.r(a5),
			a7 = this.t(a7) - this.t(a5);
		return Math.abs(gz) >= Math.abs(a7) ? 1 + 2 * (gz < 0) : 2 * (0 < a7)
	}, this.aAi = function(player) {
		return this.yb(cT.gu[player] + cT.gw[player] >> 1, cT.gv[player] + cT.gy[player] >> 1)
	}, this.aAj = function(player) {
		return this.yb(gh.aAI(cT.gu[player], cT.gw[player]), gh.aAI(cT.gv[player], cT.gy[player]))
	}
}

function fg() {
	function aAv(player, nR, aAn) {
		3 <= aAn && 2142 < cH.e1() && (nR === j.cW || cT.ct[nR] < hu.hv(cT.ct[player], 20)) && d0.aAq(player, 20)
	}

	function aAx(player, d2, nR, aAn) {
		3 <= aAn && aAn < 6 && hu.hv(cT.ct[player], 8) > cT.ct[nR] && (d2 = Math.max(hu.hv(11 * cT.ct[nR], 5), hu.hv(cT.ct[player], 10)));
		aAn = cT.nG[player].length;
		gU.fd.nI(player, nR), gU.fd.nQ(player, nR, aAn, d2)
	}

	function aAu(player, d2) {
		var nR = j.cW,
			aI = cT.nG[player].length;
		gU.fd.nH(player), cT.nG[player].length !== aI && gU.fd.nQ(player, nR, aI, d2)
	}
	this.sW = new Uint8Array(j.cW), this.b3 = function() {
		this.sW.fill(0)
	}, this.aAk = function(player, d2) {
		var aAl, aAn, aAo, aAp;
		nN.sO(player) && (aAl = a0V.aAm(player), 3 <= (aAn = d0.d2[player]) && aAn < 6 && (d2 = Math.max(cT.ct[player] - aAl, d2)), aAo = cT.a9e[player].length, aAp = cT.nU[player].length, 30 * cT.cj[player] > j.w1 && wC[player] < 10 && 100 *
			aAp <= aAo && d0.aAq(player, 10), j.cu ? function(player, d2, aAn, aAl) {
				var nR;
				if (gU.fd.nY(player, !1) || gU.fd.ne(player, !1)) {
					if (!gU.fd.ng(player))
						if (gU.fd.nf()) aAu(player, d2), aAv(player, j.cW, aAn);
						else {
							if (gh.aAH(d0.aAw[aAn])) nR = gU.fd.nk(player);
							else {
								if (gU.fd.ni() && gh.aAH(d0.aAy[aAn]) && gU.fd.nj(), 6 === aAn) return aAx(player, d2, gU.fd.nx(), aAn);
								nR = gU.fd.no(player)
							}
							aAx(player, d2, nR, aAn), aAv(player, nR, aAn)
						}
				} else d8.aAs.e6(player) || gU.fh.e6(player) || ! function(player, d2, aAn, aAl) {
					var sW = gU.ff.sW;
					sW[player] = 0;
					var aB0 = cw.cz[player];
					if (0 !== aB0) {
						var aB1 = cT.ct[player],
							cj = cT.cj;
						if (player < j.ck && (d2 = aB1), !(aB1 < cj[player] || 5 === aAn && aB1 < aAl || 4 === aAn && aB1 < hu.hv(aAl, 2))) {
							li.lj(aB0);
							for (var aI = h1.lk[0], ll = h1.ll, aL = gh.gi(aI), c7 = 0; c7 < aI; c7++) {
								var bB = ll[(c7 + aL) % aI];
								if (sW[bB]) return bx.aB2.aB3(player, bB, d2)
							}
							var gT = d8.d9.gT;
							for (c7 = 0; c7 < aI; c7++)
								if (bB = ll[(c7 + aL) % aI], gT[bB] && bB !== player) return bx.aB2.aB3(player, bB, d2)
						}
					}
				}(player, d2, aAn, aAl)
			}(player, d2, aAn, aAl) : (!aAp || aAo && (aAo < aAp && !gh.gi(10) || 100 * aAp <= aAo && gh.gi(3) || !gh.gi(8))) && d8.aAs.e6(player) || function(player, d2, aAn) {
				gU.fd.nY(player, !0) || gU.fd.ne(player, !0) ? gU.fd.ng(player) || (gU.fd.nf() ? aAu(player, d2) : gh.aAH(d0.aAw[aAn]) ? aAx(player, d2, gU.fd.nk(player), aAn) : 5 === aAn ? aAx(player, d2, gU.fd.nt(), aAn) : (gU.fd.ni() && gh
					.aAH(d0.aAy[aAn]) && gU.fd.nj(), aAx(player, d2, 6 === aAn ? gU.fd.nx() : gU.fd.no(player), aAn))) : gU.fh.e6(player)
			}(player, d2, aAn))
	}
}

function g8(fG, o4, aB4, aB5, aB6) {
	var self;
	this.gI = document.createElement("span"), this.resize = function() {
			this.gI.style.fontSize = ((aB5 - aB4) * o4.offsetHeight).toFixed(1) + "px"
		}, (self = this).gI.textContent = fG, self.gI.style.color = bJ.bL, self.gI.style.font = "inherit", self.gI.style.margin = "0.1em 0.6em", self.gI.style.pointerEvents = "none", aB6 && (self.gI.style.fontWeight = "bold"), self.gI.style
		.whiteSpace = "nowrap", self.gI.style.display = "block", o4.appendChild(self.gI)
}

function aB7() {
	this.aB8 = [], this.aB9 = [], this.b3 = function() {
		this.aB8 = [], this.aB9 = []
	}, this.e6 = function() {
		0 <= this.aB8.length && this.aBA(this.aB8), 0 <= this.aB9.length && this.aBA(this.aB9)
	}, this.aBA = function(cK) {
		for (var c7 = -1, aL = cK.length - 1; 0 <= aL; aL--)
			if (cK[aL].bU--, cK[aL].bU <= 0) {
				c7 = aL;
				break
			} for (aL = c7; 0 <= aL; aL--) cK.shift()
	}, this.aBB = function(id, b7, aBC) {
		return this.aBD(this.aB8, id, b7, aBC)
	}, this.aBE = function(id, b7, aBC) {
		return this.aBD(this.aB9, id, b7, aBC)
	}, this.aBD = function(cK, id, b7, aBC) {
		return ! function(cK, id, b7) {
			var aL, i3;
			for (aL = b7.length - 1; 0 <= aL; aL--)
				for (i3 = cK.length - 1; 0 <= i3; i3--)
					if (cK[i3].player === b7[aL] && id === cK[i3].id) return 1;
			return
		}(cK, id, b7) && (aBC && function(cK, id, b7) {
			var aL;
			for (aL = b7.length - 1; 0 <= aL; aL--) cK.push({
				player: b7[aL],
				id: id,
				bU: 384
			})
		}(cK, id, b7), !0)
	}
}

function aBI() {
	(aBH = void 0 === aBH ? document.createElement("canvas") : aBH).width = v.w, aBH.height = v.y, a57 = aBH.getContext("2d", {
		alpha: !0
	}), a58 = aS = null, a58 = a57.getImageData(0, 0, v.w, v.y), aS = a58.data, bQ.oY.aBJ(aS)
}

function aBK() {
	this.cr = new Array(j.cW), this.cU = new Array(j.cW), this.dl = new Uint8Array(j.cW), this.iw = new Uint8Array(j.cW), this.gu = new Uint16Array(j.cW), this.gv = new Uint16Array(j.cW), this.gw = new Uint16Array(j.cW), this.gy = new Uint16Array(j
			.cW), this.cj = new Uint32Array(j.cW), this.uH = new Uint32Array(j.cW), this.ct = new Uint32Array(j.cW), this.nG = null, this.nU = null, this.a9e = null, this.a9f = null, this.a0O = new Uint16Array(j.cW), this.nJ = new Uint16Array(j.cW),
		this.nK = new Uint16Array(j.cW), this.rN = new Uint16Array(j.cW), this.uI = new Uint8Array(j.cW), this.a3Q = new Uint16Array(j.cW), this.b3 = function() {
			this.cr.fill(""), this.cU.fill(""), this.dl.fill(0), this.iw.fill(0), this.gu.fill(0), this.gv.fill(0), this.gw.fill(0), this.gy.fill(0), this.cj.fill(0), this.uH.fill(0), this.ct.fill(0), this.nG = new Array(j.cW), this.nU = new Array(j
				.cW), this.a9e = new Array(j.cW), this.a9f = new Array(j.cW), this.a0O.fill(0), this.nJ.fill(0), this.nK.fill(0), this.rN.fill(0), this.uI.fill(0), this.a3Q.fill(0)
		}
}

function aBL() {
	this.cq = function(bV, font, maxWidth) {
		if (font && (eF.font = font), eF.measureText(bV).width <= maxWidth) return bV;
		for (var aL = bV.length - 1; 1 <= aL; aL--)
			if (bV = bV.substring(0, aL), eF.measureText(bV + "...").width <= maxWidth) return bV + "...";
		return "..."
	}
}

function aBN() {
	this.aBO = function() {
		iG.kT(39), iG.ty(1, 0), iG.ty(6, 16), el.v7.aBP(), el.d9.send(0, iG.i9)
	}, this.aBQ = function(es) {
		iG.kT(127), iG.ty(1, 0), iG.ty(6, 17), iP.iV.a63(hk.buffer.data[105].value, 5), iP.iV.a63(hk.buffer.data[106].value, 15), el.d9.send(es, iG.i9)
	}, this.aBS = function() {
		iG.kT(97), iG.ty(1, 0), iG.ty(6, 18), iP.iV.a63(hk.buffer.data[110].value, 15), el.d9.send(0, iG.i9)
	}, this.a4O = function(mF) {
		var aI = mF.bV.length;
		iG.kT(21 + 16 * aI), iG.ty(1, 0), iG.ty(6, 29), iG.ty(6, mF.action), iG.ty(8, aI), iU.iQ.a66(mF.bV), el.d9.send(0, iG.i9)
	}, this.aBT = function(a9B, colors, aBU, sf) {
		a9R.b3(), a9R.ty(1, 0), a9R.ty(6, 16), a9R.ty(20, Math.min(a9B, 1e6));
		for (var aL = 0; aL < 11; aL++)
			for (var c2 = 0; c2 < 3; c2++) a9R.ty(8, colors[aL][c2]);
		a9B = uQ.data.wc(aBU.trim());
		a9R.ty(8, -1 === a9B ? 255 : a9B), iU.yD.zK(sf.trim().substring(0, 180), 8, a9R), el.d9.send(0, a9R.tx())
	}, this.aBV = function(data) {
		iG.kT(43), iG.ty(1, 0), iG.ty(6, 25), iG.ty(6, data.action), iP.iV.a63(data.jQ, 5), el.d9.send(0, iG.i9)
	}, this.a2A = function(data) {
		iG.kT(75), iG.ty(1, 0), iG.ty(6, 27), iG.ty(6, data.action), iP.iV.a63(data.jQ, 5), iG.aBW(32, data.value), el.d9.send(0, iG.i9)
	}
}

function aBX() {
	this.aBY = 0, this.jo = null, this.jm = null, this.ge = null, this.d9 = null, this.l1 = null, this.l5 = null, this.message = null, this.a5m = null, this.hb = null, this.aBZ = null, this.aBa = new aBb, this.aBc = 0, this.zh = 0, this.b3 =
		function() {
			this.zh = cH.bU, this.aBY = iP.iV.lA(hk.buffer.data[105].value, 5), this.jm = new aBd, this.ge = new jA, this.d9 = new aBe, this.l1 = new a5V, this.l5 = new aBf, this.message = new ln, this.a5m = new wG, this.hb = new km, this.aBZ =
				new aBg, this.d9.b3(), ly.b3(), this.aBc = 1, b4.b5.setState(1), eg.setState(0), ee.turnstile.aBh()
		}, this.iA = function() {
			this.hb && this.hb.iA(), this.jo = null, this.jm = null, this.ge = null, this.d9 = null, this.l1 = null, this.l5 = null, this.message = null, this.a5m = null, this.hb = null, this.aBZ = null, this.aBc = 0, ly.iA(), b4.b5.setState(0)
		}
}

function ih() {
	function aBi() {
		if (2 === j.e5) return 1;
		bh.w4(), j.e5 = 2, j.rM = j.e4
	}

	function aBk() {
		rR.io.d(), j1.show(1 === j.dK, !1, 2 === j.dK), rR.result.d(), rR.iq.e6(), rR.il.e6(), rR.il.aBl(), bp.dz(!0), bp.df(247), bp.df(956), bp.df(957), a4Y.j3(!0), gZ.j3(!0), bh.j3(), bq.qf(), j.cp && cH.aBm.aBn(), cH.cI = !0, j7.yf(), b4.b5
			.setState(0)
	}
	this.w2 = function() {
		aBi() || (j.aBj = 2, aBk())
	}, this.w3 = function() {
		aBi() || (j.aBj = 1, aBk())
	}
}

function aBo() {
	this.bU = cH.bU, this.hy = 0, this.nz = 0, this.aBp = 0, this.aBq = null, this.aBr = 7, this.aBs = 0, this.b3 = function() {
		this.aBp = 0, this.aBq = [], this.hy = 0, this.nz = 0
	}, this.aBt = function(i9) {
		if (j.bC) this.aBu(i9);
		else if (this.aBq.push(i9), 2 === j.e5) {
			for (var aL = 0; aL < this.aBq.length; aL++) bx.aBv.e6(this.aBq[aL]);
			this.aBq = []
		}
	}, this.aBu = function(i9) {
		2 !== j.e5 && (bx.aBv.e6(i9), ib.e6(), gZ.aBu(this.aBp), this.aBp === j.aBw ? (j.j6.e6(), this.aBp = 0, this.hy = 0, this.nz = 0, this.bU = cH.bU) : (this.aBp++, cb.j2(), cb.j3(!0), j7.render()))
	}, this.e6 = function() {
		bN.e6(), j.bC ? (cH.cI = gZ.aBu(-1) || cH.cI, a4i()) : (0 !== this.hy || cH.bU >= this.bU && (this.bU += cH.aBx * Math.floor(1 + (cH.bU - this.bU) / cH.aBx), 2 === j.e5 ? a4T() : this.aBy(), this.hy++, 27 < cH.bU - this.aBs)) && this
		.aBz(), a4e(), cH.cI && (cH.cI = !1, aC0()), this.aBs = cH.bU
	}, this.aBz = function() {
		cH.cI = !0, a4h(), this.hy = 0
	}, this.aBy = function() {
		var aC1, aL;
		if (this.nz !== 7 * this.aBp) a4V(), j7.render();
		else {
			aC1 = !1;
			loop: for (; this.aC2() && (aC1 = !0, a4V(), 2 !== j.e5) && 0 < this.aBq.length;)
				for (aL = this.aBr - 2; 0 <= aL; aL--)
					if (a4V(), 2 === j.e5) break loop;
			aC1 ? j7.render() : (a4T(), j7.j9())
		}
	}, this.aC2 = function() {
		return 0 < this.aBq.length && (this.aBp++, bx.aBv.e6(this.aBq[0]), this.aBq.shift(), !0)
	}
}

function ry() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a0G = null
}

function aC3() {
	this.eq = function(es) {
		var username = hk.buffer.data[122].value.slice(0, 20),
			username = (iG.kT(24 + 16 * username.length + 18), iG.ty(1, 0), iG.ty(6, 1), iG.ty(10, eh.aC4), iG.ty(2, hk.buffer.data[158].value), el.v7.a61(username), bQ.color.aC5(hk.d9.n7()));
		iG.ty(6, username[0]), iG.ty(6, username[1]), iG.ty(6, username[2]), el.d9.uk = es, el.d9.send(es, iG.i9)
	}, this.wY = function(aC6, mF) {
		a9R.b3(), a9R.ty(1, 0), a9R.ty(6, 2), a9R.ty(3, aC6), 2 === aC6 ? a9R.ty(2, mF) : 3 === aC6 ? iU.yD.zK(mF, 7, a9R) : 5 === aC6 && (a9R.ty(3, mF.id), a9R.ty(3, mF.value), a9R.ty(30, mF.jQ)), el.d9.send(el.d9.uk, a9R.tx())
	}
}

function aC7() {
	var xz, y0;
	this.b3 = function() {
		xz = 1, y0 = 0
	}, this.e6 = function() {
		0 < xz && (y0 = 0 === y0 ? cH.bU + 16 : y0, xz = (xz -= .001 * (cH.bU - y0)) < 0 ? 0 : xz, y0 = cH.bU, cH.cI = !0)
	}, this.eD = function() {
		0 < xz && (eF.fillStyle = "rgba(0,0,0," + xz + ")", eF.fillRect(0, 0, bN.aV, bN.au))
	}
}

function pl(data) {
	var uL, uM;

	function aCC(ob, aCu) {
		if (!data.aCB) {
			if (data.aCm) {
				if (aCu) return
			} else {
				if (!aCu) return;
				if (data.a9B < 1e4) return
			}
			var aCx, og = new oh,
				aCv = 1e5 <= data.a9B,
				aCw = og.oi(aCu ? (aCv ? "⚠️ " : "") + L(298) : L(173)),
				a4N = (aCv && (aCw.style.color = "yellow"), aCu ? og.uS(L(299, [bQ.cL.sm(data.a9B, .01, 0)])) : ((aCx = new om({
					value: data.aCy,
					hy: -1
				})).l0.readOnly = !0, aCx.l0.type = "password", og.ol(aCx), og.ol(new uX([new g0(L(155), function(l0) {
					return l0.textContent === L(155) ? (l0.textContent = L(156), aCx.l0.type = "text") : (l0.textContent = L(155), aCx.l0.type = "password"), !0
				}).button, new g0(L(235), function(l0) {
					return bQ.bR.mt(aCx.l0), bQ.bR.mu(l0), !0
				}).button]))), og.vQ(L(aCu ? 173 : 300)).style.marginTop = "0.75em", new om({
					value: "",
					hy: -1
				}, 0, 0)),
				aCz = (a4N.l0.type = "email", a4N.l0.autocomplete = "email", a4N.l0.name = "email", a4N.l0.inputMode = "email", a4N.l0.spellcheck = !1, og.ol(a4N), og.ol(new uX([new g0(L(301), function(l0) {
					return el.a29.a4O({
						action: 3,
						bV: a4N.l0.value.trim().substring(0, 63)
					}), bQ.bR.mu(l0), !0
				}).button])), aCu && og.uS(L(302)), og.vQ(L(303)).style.marginTop = "0.75em", new om({
					value: "",
					hy: -1
				}, 1));
			og.ol(aCz), og.ol(new uX([new g0(L(304), function() {
				el.a29.a2A({
					action: 4,
					jQ: "",
					value: Math.floor(+aCz.l0.value)
				}), f1.g9(8, f1.mR().pe, new gA(18))
			}).button])), ob.push(og)
		}
	}
	this.show = function() {
		data.aCB && aCA.aDJ("account", data.jQ), uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(data.username, [new g0("⬅️ " + L(61), function() {
		aCA.clear(), f1.oX()
	}), new g0(data.aCB ? "🔄 " + L(214) : L(215), function() {
		f1.g9(8, data.aCB ? f1.mR().pe : void 0, new gA(25, {
			action: 0,
			jQ: data.jQ,
			a5i: data.a5i
		}))
	}, 0, 0, 1)]), uM = new oS(uL.oT, function() {
		var ob = [];
		aCC(ob, 1), ob.push(function() {
				var og = new oh;
				og.oi(L(271)), data.aCm && (og.vQ("✅ " + L(272)).style.marginBottom = "0.75em");
				var jR = data.aCn;
				jR < 1 ? (og.vQ(L(273)), 0 === data.aCo ? og.uS(L(274)) : 1 === data.aCo ? og.uS(L(275)) : 2 === data.aCo ? og.uS(L(276)) : 3 === data.aCo ? og.uS(L(277)) : 4 === data.aCo ? og.uS(L(278)) : 5 === data.aCo ? og.uS(L(279)) :
					6 === data.aCo ? og.uS(L(280)) : og.uS(L(281))) : (og.vQ(L(282)), jR = jR < 2 ? L(283) : jR < 61 ? 2 === jR ? L(284) : L(285, [jR - 1]) : jR < 84 ? 61 === jR ? L(286) : L(287, [jR - 60]) : jR < 255 ? 84 === jR ? L(
					288) : L(289, [jR - 83]) : L(290), og.uS(jR));
				{
					var a2B, a24;
					og.ol(new aCW), data.aCB && (a2B = og.uS(), og.ol(new uX([new g0(hk.xt.kz(data.jQ) ? L(291) : L(292), function(l0) {
						return hk.xt.aCp(data.jQ) ? (l0.textContent = L(291), a24(1)) : (l0.textContent = L(292), a24(0)), !0
					}).button])), a24 = function(hm) {
						a2B.textContent = hm ? L(293) : ""
					}, hk.xt.kz(data.jQ) && a24(1), og.ol(new aCW))
				}
				var mg, uc = new om({
					value: data.username,
					hy: -1
				});
				uc.l0.readOnly = !0, og.ol(uc), og.ol(new uX([new g0(L(235), function(l0) {
					return bQ.bR.mt(uc.l0), bQ.bR.mu(l0), !0
				}).button])), data.aCB || og.uS(L(294));
				(data.aCq || data.aCr || data.aCs) && (og.ol(new aCW), og.uS(L(295)), data.aCq && (og.uS("• Account Timeout").style.color = "orange"), data.aCr && ((mg = og.uS("• Muted")).style.color = "orange", mg.style.marginTop =
					"0.5em"), data.aCs) && ((mg = og.uS("• Redacted")).style.color = "orange", mg.style.marginTop = "0.5em");
				data.aCB && (og.ol(new aCW), og.vQ(el.d9.uz("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", og.ol(new uX([new g0(L(296), function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 0
					}), bQ.bR.mu(l0), !0
				}, bJ.a4z).button])), og.ol(new uX([new g0(L(297), function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 1
					}), bQ.bR.mu(l0), !0
				}, bJ.a4z).button])), og.ol(new uX([new g0("Cheater", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 2
					}), bQ.bR.mu(l0), !0
				}, bJ.a4z).button])), og.ol(new uX([new g0("False Reporter", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 3
					}), bQ.bR.mu(l0), !0
				}, bJ.a4z).button])), jR = "CRTOR" === (jR = hk.buffer.data[105].value) || "ADMIN" === jR) && (og.ol(new uX([new g0("Block Account", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 4
					}), bQ.bR.mu(l0), !0
				}, bJ.g4).button])), og.ol(new uX([new g0("Ban IP", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 5
					}), bQ.bR.mu(l0), !0
				}, bJ.g4).button])), og.ol(new uX([new g0("Gold Seizure", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 6
					}), bQ.bR.mu(l0), !0
				}, bJ.g4).button])), og.ol(new uX([new g0("Remove Punishments", function(l0) {
					return el.a29.a2A({
						action: 3,
						jQ: data.jQ,
						value: 7
					}), bQ.bR.mu(l0), !0
				}, bJ.tR).button])));
				return og
			}()),
			function(ob) {
				var og, a2B, aD1, aD2, a28, aCV, a26;
				data.aCB || ((og = new oh).oi(L(305)), (a2B = og.uS(data.aD0.length + " / 160")).style.textAlign = "center", aD1 = !0, (aD2 = new on(0, 1, function(l0) {
					l0 = l0.target.value.length;
					a2B.textContent = l0 + " / 160", 160 < l0 ? aD1 && (aD1 = !1, aCV.r2(1)) : aD1 || (aD1 = !0, aCV.r2(0))
				})).l0.rows = 6, aD2.l0.style.fontSize = "1em", aD2.oo(data.aD0), og.ol(aD2), 0 !== data.aD3 ? (aCV = new g0(L(306), function() {
					if (!aD1) return !0;
					f1.g9(8, f1.mR().pe, new gA(29, {
						action: 1,
						bV: aD2.oa().substring(0, 160)
					}))
				}, 0, 0, 1), og.ol(new uX([aCV.button])), og.ol(new uX([new g0(1 === data.aD3 ? L(307) : L(308), function() {
					f1.g9(8, f1.mR().pe, new gA(29, {
						action: 0,
						bV: ""
					}))
				}, 0, 0, 1).button])), og.uS(1 === data.aD3 ? L(309, [data.aD4 - 1]) : L(310, [data.aD4 - 1])), og.uS(L(311, [data.aD5]))) : (a28 = new g0(L(312), function() {
					if (!aD2.l0.readOnly) return !0;
					f1.g9(8, f1.mR().pe, new gA(29, {
						action: 1,
						bV: aD2.oa().substring(0, 160)
					}))
				}, 1), aCV = new g0(L(168), function(l0) {
					if (l0.textContent === L(168)) {
						if (!aD1) return !0;
						l0.textContent = L(169), aD2.l0.readOnly = !0, a28.r2(0), a28.button.style.color = bJ.dT
					} else a26();
					return !0
				}), og.ol(new uX([aCV.button])), og.uS(L(311, [data.aD5])), a26 = function() {
					aCV.button.textContent = L(168), aD2.l0.readOnly = !1, a28.r2(1), a28.button.style.color = bJ.bL
				}, og.ol(new uX([a28.button]))), ob.push(og))
			}(ob),
			function(ob) {
				var og;
				data.aCB && 0 !== data.aD3 && ((og = new oh).oi(L(313)), og.aD6(data.aD0), og.ol(new uX([new g0(L(314, 0, "Report"), function(l0) {
					return el.d9.uq(0) && (bQ.bR.mu(l0), el.a29.aBV({
						action: 5,
						jQ: data.jQ
					})), !0
				}, 0, 0, 1).button])), ob.push(og))
			}(ob), ob.push(function() {
				var og = new oh,
					aCS = (og.oi(L(216)), og.vQ(el.d9.uz("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227), L(228), L(229), L(230)]),
					db = data.aCT;
				return og.vQ(L(231) + bQ.cL.sm(data.a9B, .01, 2) + "<br>" + L(232) + (db + 1) + " / " + data.a9A + "<br>" + L(233) + aCS[function(db, a9B) {
					if (db < 10) return 0;
					if (db < 30) return 1;
					if (db < 60) return 2;
					if (3e4 <= (a9B = hu.hv(a9B, 100))) return 3;
					if (12e3 <= a9B) return 4;
					if (7e3 <= a9B) return 5;
					if (3e3 <= a9B) return 6;
					if (1e3 <= a9B) return 7;
					if (500 <= a9B) return 8;
					if (200 <= a9B) return 9;
					if (70 <= a9B) return 10;
					if (20 <= a9B) return 11;
					if (3 <= a9B) return 12;
					return 13
				}(db, data.a9B)]), og
			}()), data.aCB && ob.push(function() {
				var og = new oh,
					uc = (og.oi(L(234)), og.vQ(el.d9.uz("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new om({
						value: hk.buffer.data[147].value,
						hy: -1
					}, 1, void 0, function(l0) {
						hk.mz.gE(147, a24(l0.target.value))
					})),
					a28 = (og.ol(uc), new g0(L(170), function(l0) {
						return uc.l0.readOnly && el.d9.uq(0) && (bQ.bR.mu(l0), a26(), el.a29.a2A({
							action: 0,
							jQ: data.jQ,
							value: parseInt(hk.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aCV = new g0(L(168), function(l0) {
						return l0.textContent === L(168) ? (l0.textContent = L(169), uc.l0.readOnly = !0, a28.r2(0), a28.button.style.color = bJ.dT, hk.mz.gE(147, uc.l0.value), a24(hk.buffer.data[147].value)) : a26(), !0
					}),
					a2B = (og.ol(new uX([aCV.button])), og.uS()),
					a24 = function(hm) {
						a2B.innerHTML = f1.d9.a2C(hm, hk.buffer.data[105].value, data.jQ)
					},
					a26 = function() {
						aCV.button.textContent = L(168), uc.l0.readOnly = !1, a28.r2(1), a28.button.style.color = bJ.bL
					};
				return a24(hk.buffer.data[147].value), og.ol(new uX([a28.button])), og
			}());
		ob.push(function() {
			var og = new oh,
				uc = (og.oi(L(153)), new om({
					value: data.jQ,
					hy: -1
				})),
				aCX = (uc.l0.readOnly = !0, og.ol(uc), og.ol(new uX([new g0(L(235), function(l0) {
					return bQ.bR.mt(uc.l0), bQ.bR.mu(l0), !0
				}).button])), og.ol(new aCW), new om({
					value: data.jQ,
					hy: -1
				}));
			return og.ol(aCX), og.ol(new uX([new g0(L(236), function(l0) {
				f1.g9(8, f1.mR().pe, new gA(25, {
					action: 0,
					jQ: aCX.l0.value,
					a5i: 0
				}))
			}).button])), og
		}()), data.aCB || (ob.push(function() {
			var og = new oh,
				yO = (og.oi(L(154)), new om(hk.buffer.data[106])),
				customPasswordInput = (yO.l0.readOnly = !0, yO.l0.type = "password", og.ol(yO), og.ol(new uX([new g0(L(155), function(l0) {
					return l0.textContent === L(155) ? (l0.textContent = L(156), yO.l0.type = "text") : (l0.textContent = L(155), yO.l0.type = "password"), !0
				}).button, new g0(L(235), function(l0) {
					return bQ.bR.mt(yO.l0), bQ.bR.mu(l0), !0
				}).button])), new om({
					value: "",
					hy: -1
				}));
			return customPasswordInput.l0.placeholder = "Custom new password (optional)", og.ol(customPasswordInput), og.ol(new uX([new g0(L(237), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.l0.value) && f1.g9(8, f1.mR().pe, new gA(15))
			}).button])), og.oi(L(157), "0.8em"), og.uS(L(238)), og.uS(L(239)), og.uS(L(240)), og
		}()), ob.push(function() {
			var og = new oh;
			return og.oi(L(241)), og.ol(new uX([new g0(L(242), function() {
				f1.g9(6, f1.mR().pe)
			}).button])), og.ol(new uX([new g0(L(243), function() {
				hk.mz.gE(105, ""), f1.g9(8, f1.mR().pe, new gA(18))
			}).button])), og.ol(new uX([new g0(L(244) + hk.buffer.data[105].value, function() {
				f1.g9(4, 0, new a4x(L(245), L(246), !0, [new g0("⬅️ " + L(61), function() {
					f1.g9(7, f1.lu(7).pe)
				})]))
			}, bJ.a4z).button])), og
		}()), ob.push(function() {
			function aCa(hy) {
				aCZ[0].r2(0 === hy ? bJ.r8 : bJ.bf), aCZ[1].r2(0 === hy ? bJ.r8 : bJ.a4z)
			}
			var aCY, aCZ, og = new oh;
			og.oi(L(250)), og.uS(L(251)), hk.d9.n0();
			return aCZ = [new g0(L(152), function() {
				var hy = Math.min(hk.buffer.data[117].value, aCY.a6F.length - 1);
				hy < 1 || (hy = hk.d9.n5(hy), hk.mz.gE(105, hy.jQ), hk.mz.gE(106, hy.password), f1.g9(8, f1.mR().pe, new gA(18)))
			}, bJ.r8, 1), new g0(L(249), function() {
				var hy = Math.min(hk.buffer.data[117].value, aCY.a6F.length - 1);
				if (!(hy < 1)) {
					aCY.a6F[hy].remove(), aCY.a6F.splice(hy, 1);
					for (var aL = hy; aL < aCY.a6F.length; aL++) aCY.a6F[aL].name = "" + aL;
					hk.d9.n4(hy), hy = hk.buffer.data[117].value, aCY.a6F[hy].textContent = aCY.a6F[hy].textContent.replace("⚪", "🟢"), aCa(hy)
				}
			}, bJ.r8, 1)], aCY = new ok(hk.buffer.data[117], aCa), __fx.savedAccounts.decorate(aCY.a6F, hk.buffer.data[117].n3), aCa(0), aCY.a6F[0].style.marginTop = "0.5em", og.oj(aCY), og.ol(new uX([aCZ[0].button])), og.ol(
				new uX([new g0("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(hk.buffer.data[117].value)
				}).button])), og.ol(new uX([aCZ[1].button])), og
		}()));
		return ob.push(function() {
				var og = new oh,
					aCS = (og.oi(L(255)), [L(256), L(257), L(258), L(259)]),
					db = data.aCe;
				return og.vQ(L(260) + (data.aCf / 100).toFixed(2) + "<br>" + L(232) + (db + 1) + " / " + data.a9A + "<br>" + L(233) + aCS[db < 10 ? 0 : db < 50 ? 1 : db < 200 ? 2 : 3]), og
			}()), ob.push(function() {
				var og = new oh;
				return og.oi(L(252)), og.vQ(L(253) + bQ.cL.sm(data.a97, .1, 1) + "<br>" + L(232) + (data.a98 + 1) + " / " + data.a9A + "<br>" + L(254) + data.a99), og
			}()),
			function(ob) {
				var og = new oh,
					aD7 = data.a9E,
					aD8 = (og.oi(L(315)), og.vQ(L(316, [data.a9C.length ? "[" + data.a9C + "]" : "-"])), og.vQ(L(317, [bQ.cL.sm(aD7, .01, 2)])), og.vQ(L(318, [data.a9G + 1 + " / " + data.a9A])), data.a9H),
					aD9 = (og.vQ(L(319, [bQ.cL.sm(aD8, .1, 1)])), data.a9J);
				og.vQ(L(320, [aD9])), og.vQ(L(321, [bQ.cL.sm(aD8 / Math.max(aD9, 1), .1, 2)])), aD7 = data.a9F, og.oi(L(322), "0.8em"), og.vQ(L(316, [data.a9D.length ? "[" + data.a9D + "]" : "-"])), og.vQ(L(317, [bQ.cL.sm(aD7, .01, 2)])),
					aD8 = data.a9I, og.vQ(L(319, [bQ.cL.sm(aD8, .1, 1)])), aD9 = data.a9K, og.vQ(L(320, [aD9])), og.vQ(L(321, [bQ.cL.sm(aD8 / Math.max(aD9, 1), .1, 2)])), og.vQ(el.d9.uz("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ob
					.push(og)
			}(ob),
			function(ob) {
				var og = new oh;
				og.oi(L(323)), og.vQ(L(260) + (data.aDA / 10).toFixed(1) + "<br>" + L(233) + (data.aDB.length ? L(324, [data.aDB]) : L(325))), data.aCB && og.ol(new uX([new g0(L(269), function(l0) {
					return el.d9.uq(0) && (bQ.bR.mu(l0), el.a29.aBV({
						action: 4,
						jQ: data.jQ
					})), !0
				}, 0, 0, 1).button]));
				og.vQ(el.d9.uz("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ob.push(og)
			}(ob), ob.push(function() {
				var og = new oh;
				{
					var uc, aCV, aCk, a2B, a24, a26;
					og.oi(L(267)), og.vQ(L(268) + data.aCi + "<br>" + L(232) + (data.aCj + 1) + " / " + data.a9A + "<br>" + L(233) + jT.ra(data.aCj)), data.aCB && ((uc = new om({
						value: hk.buffer.data[157].value,
						hy: -1
					}, 1, void 0, function(l0) {
						hk.mz.gE(157, a24(l0.target.value))
					})).l0.style.marginTop = "0.6em", og.ol(uc), aCV = new g0(L(168), function(l0) {
						return l0.textContent === L(168) ? (l0.textContent = L(169), uc.l0.readOnly = !0, aCk[0].r2(0), aCk[0].button.style.color = bJ.dT, a24(hk.buffer.data[157].value)) : a26(), !0
					}), og.ol(new uX([aCV.button])), aCk = [new g0(L(269), function(l0) {
						return uc.l0.readOnly && el.d9.uq(0) && (bQ.bR.mu(l0), a26(), el.a29.a2A({
							action: 1,
							jQ: data.jQ,
							value: hu.hz(parseInt(hk.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], a2B = og.uS(), a24 = function(hm) {
						return hm = bQ.by.aCl(hm, 2, 3e4), a2B.textContent = L(270, [hm - 1, hm, hk.buffer.data[105].value]), hm
					}, og.ol(new uX([aCk[0].button])), a26 = function() {
						aCV.button.textContent = L(168), uc.l0.readOnly = !1, aCk[0].r2(1), aCk[0].button.style.color = bJ.bL
					}, a24(hk.buffer.data[157].value))
				}
				return og
			}()),
			function(ob) {
				var og, ms;
				data.aCB && !data.aDC || (0 === b4.id || data.aCB || data.aDC) && ((og = new oh).oi("Patreon"), !data.aCB && data.aDD ? og.ol(new uX([new g0(L(155), function() {
					el.a29.aBV({
						action: 7,
						jQ: data.jQ
					}), data.aDD = 0, f1.g9(7)
				}).button])) : data.aDC ? (og.vQ(L(326, [(data.aDE / 100).toFixed(2)]) + "<br>" + L(327, [1 + data.aDF + " / " + data.aDG]) + "<br>" + L(328, [data.aDH ? L(329) : L(330)])), data.aCB || og.ol(new uX([new g0(L(331),
					function() {
						el.a29.aBV({
							action: 8,
							jQ: data.jQ
						}), data.aDC = 0, hk.mz.gE(160, 0), f1.g9(7)
					}).button]))) : (og.vQ(L(332), "0.75em").style.marginBottom = "0.3em", og.vQ("  • " + L(333), "0.75em").style.whiteSpace = "pre", og.vQ("  • " + L(334), "0.75em").style.whiteSpace = "pre", og.vQ("  • " + L(335),
						"0.75em").style.whiteSpace = "pre", og.vQ(L(336), "0.75em").style.marginTop = "1.0em", og.vQ(L(337), "0.75em").style.marginTop = "1.0em", og.vQ("<a href='" + hi.aDI +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", ms = "https://www.patreon.com/oauth2/authorize?state=" + data.jQ +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + el.d9.uy() + "/", og.vQ(L(338), "0.75em").style.marginTop = "1.0em", og.vQ("<a href='" + ms +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aCB || (og.ol(new aCW), og.ol(new uX([new g0(L(156), function() {
						el.a29.aBV({
							action: 6,
							jQ: data.jQ
						}), data.aDD = 1, f1.g9(7)
					}).button])), og.vQ(L(339), "0.75em").style.marginTop = "0.75em")), ob.push(og))
			}(ob), ob.push(function() {
				var og = new oh,
					aCS = (og.oi(L(261)), [L(262), L(263), L(264), L(265), "Scout", L(266)]),
					db = data.aCg;
				return og.vQ(L(260) + (data.aCh / 100).toFixed(2) + "<br>" + L(232) + (db + 1) + " / " + data.a9A + "<br>" + L(233) + aCS[db < 3 ? 0 : db < 20 ? 1 : db < 100 ? 2 : db < 500 ? 3 : db < 2e3 ? 4 : 5]), og.vQ(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", og
			}()),
			function(ob) {
				var og, aCY, aCZ, hy, aCa;
				data.aCB || hk.xt.get().length && ((og = new oh).oi(L(247)), hy = 0, aCa = function() {
					var aCb = hk.xt.get().length;
					aCZ[0].r2(hy === aCb ? bJ.r8 : bJ.bf), aCZ[1].r2(hy === aCb ? bJ.r8 : bJ.a4z)
				}, aCZ = [new g0(L(248), function() {
					f1.g9(8, void 0, new gA(25, {
						action: 0,
						jQ: hk.xt.get()[hy],
						a5i: 0
					}))
				}, bJ.r8, 1), new g0(L(249), function() {
					hk.xt.aCc(hy), aCY.a6F[hy].remove(), aCY.a6F.splice(hy, 1);
					for (var aL = hy; aL < aCY.a6F.length; aL++) aCY.a6F[aL].name = "" + aL;
					hk.xt.get().length && (hy = Math.max(hy - 1, 0), aCY.a6F[hy].textContent = aCY.a6F[hy].textContent.replace("⚪", "🟢")), aCa()
				}, bJ.r8, 1)], aCa(), aCY = new ok(hk.xt.aCd(), function(aL) {
					hy = aL, aCa()
				}), __fx.followedAccounts.decorate(aCY.a6F, hk.xt.get()), aCY.a6F[0].style.marginTop = "0.5em", og.oj(aCY), og.ol(new uX([aCZ[0].button])), og.ol(new uX([new g0("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(hy)
				}).button])), og.ol(new uX([aCZ[1].button])), ob.push(og))
			}(ob), aCC(ob, 0), ob
	}())
}

function aDK() {
	this.fA = 0, this.dr = 0, this.mapSeed = 0, this.aDL = 0, this.aDM = 0, this.aDN = 0, this.aDO = 0, this.aDP = 0, this.aDQ = 0, this.spawningSeed = 0, this.uj = 0, this.aDR = 0, this.k0 = [], this.aDS = 1048575, this.aDT = 0, this.aDU = [{
		dr: 0,
		mapSeed: 0,
		aDL: 0,
		bU: 100,
		aDP: 0
	}, {
		dr: 1,
		mapSeed: 0,
		aDL: 1,
		bU: 200,
		aDP: 0
	}, {
		dr: 2,
		mapSeed: 0,
		aDL: 2,
		bU: 300,
		aDP: 0
	}, {
		dr: 3,
		mapSeed: 0,
		aDL: 3,
		bU: 400,
		aDP: 0
	}, {
		dr: 0,
		mapSeed: 0,
		aDL: 9,
		bU: 500,
		aDP: 0
	}, {
		dr: 1,
		mapSeed: 0,
		aDL: 10,
		bU: 600,
		aDP: 0
	}, {
		dr: 2,
		mapSeed: 0,
		aDL: 8,
		bU: 700,
		aDP: 0
	}, {
		dr: 3,
		mapSeed: 0,
		aDL: 3,
		bU: 800,
		aDP: 0
	}]
}

function aDV() {
	var a0 = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + a0 + .5) / 15))
}

function aDW() {
	this.gW = 512, this.aDX = 8, this.wr = 0, this.aDY = 0, this.dA = new Uint16Array(this.gW), this.gt = new Uint32Array(this.gW), this.a4L = new Uint16Array(this.gW), this.dB = new Uint32Array(this.gW), this.aDZ = new Uint16Array(this.gW), this
		.gj = new Uint16Array(this.gW), this.tt = new Uint8Array(this.gW), this.aDa = new Uint8Array(this.gW), this.a4A = new Array(this.gW), this.a4F = new Uint16Array(this.gW), this.gT = new Uint8Array(j.cW), this.tr = new Uint16Array(this.aDX * j
			.cW), this.b3 = function() {
			this.wr = 0, this.aDY = 0, this.gT.fill(0), this.a4A.fill(null)
		}, this.gq = function(player) {
			var d2 = h1.nO[0],
				a44 = h1.h2[1],
				a0p = h1.cK[0],
				aDb = this.aDY,
				aI = this.wr,
				aDc = n.aAc(a0p[0]),
				a9v = this.gT[player],
				a9w = (player << 3) + a9v;
			this.dA[aI] = a9w, this.gt[aI] = aDc, this.a4L[aI] = 0, d2 < 60 && (bQ.by.aDd(player, 60 - d2), d2 = 60), this.dB[aI] = d2, this.aDZ[aI] = d8.kE.gq(aI, n.aAd(aDc)), this.gj[aI] = aDb, this.tt[aI] = a44, this.aDa[aI] = 0, this.a4A[aI] =
				a0p, this.a4F[aI] = 0, this.aDY = (aDb + 1) % 65536, this.gT[player] = a9v + 1, this.tr[a9w] = aI, this.wr++, d8.a44.aDe(player, a0p[a0p.length - 1], a44, aDb, d2)
		}, this.e6 = function() {
			d8.a44.e6();
			for (var aP = j.k, bv = d8.ge.sS(aP), qj = (! function(qj) {
					for (var aDj, gt = qj.gt, dB = qj.dB, aDa = qj.aDa, a4L = qj.a4L, aDZ = qj.aDZ, a4A = qj.a4A, a4F = qj.a4F, qj = qj.wr, aDk = v.w << 4, aL = qj - 1; 0 <= aL; aL--) {
						var aDl = gt[aL],
							a0p = a4A[aL],
							aDm = a4F[aL],
							aDc = n.aAc(a0p[aDm]),
							aDn = n.aAc(a0p[aDm + 1]),
							aDo = aDc % aDk,
							aDc = ~~((aDc + .5) / aDk),
							aDq = aDn % aDk,
							aDr = ~~((aDn + .5) / aDk),
							aDs = aDq - aDo,
							aDt = aDr - aDc,
							a0 = Math.max(~~Math.sqrt(aDs * aDs + aDt * aDt + .5), 1),
							aDu = dB[aL],
							aDu = (aDu = aDa[aL] ? 4e4 : 25e4 + Math.min(20 * aDu, 3e5) + Math.min(aDu >> 3, 5e4), a4L[aL] + Math.max(~~((aDu + .5) / a0), 1));
						65535 <= aDu ? aDm + 2 < a0p.length ? (a4F[aL] = aDm + 1, gt[aL] = aDj = function(aL, aDv, aDo, aDp, aDm, a0, a0p, aDk) {
							aDv = Math.min(aDv - 65535, 65535);
							var a0p = n.aAc(a0p[aDm + 2]),
								aDm = a0p % aDk - aDo,
								a0p = ~~((a0p + .5) / aDk) - aDp,
								aDy = Math.max(~~Math.sqrt(aDm * aDm + a0p * a0p + .5), 1);
							return aDv = Math.min(Math.floor((a0 * aDv + .5) / aDy), 65534), d8.d9.a4L[aL] = aDv, aDo + hu.hv(aDv * aDm, 65535) + aDk * (aDp + hu.hv(aDv * a0p, 65535))
						}(aL, aDu, aDq, aDr, aDm, a0, a0p, aDk)) : (gt[aL] = aDj = aDn, a4L[aL] = 65535) : (a4L[aL] = aDu, gt[aL] = aDj = aDo + hu.hv(aDu * aDs, 65535) + aDk * (aDc + hu.hv(aDu * aDt, 65535))), aDZ[aL] = d8.kE.aDx(aDZ[aL],
							aDl, aDj)
					}
				}(this), ! function(qj) {
					if (cH.e1() % 2 == 1) {
						var aL, i3, d7, c7, bB, aDz, ht, aE0, e3, c4, c5, aDc, aE3, aE1, aE5, bY, aI = qj.wr,
							gt = qj.gt,
							dA = qj.dA,
							dB = qj.dB,
							aDa = qj.aDa,
							kE = d8.kE.kE,
							aE7 = kE.length,
							aE8 = d8.kE.aE8,
							aDk = v.w << 4,
							aE9 = j.cu,
							aEA = cw.cz,
							mj = (aI - 1) * (hu.hv(cH.e1(), 2) % 2);
						for (aL = 0; aL < aI; aL++)
							for (i3 = Math.abs(aL - mj), aDc = gt[i3], d7 = n.aAd(aDc), e3 = dA[i3] >> 3, c4 = aDc % aDk, c5 = ~~((aDc + .5) / aDk), aE5 = dB[i3], c7 = 0; c7 < 9; c7++)
								if (!((aDz = d7 + aE8[c7]) < 0 || aE7 <= aDz))
									for (aE0 = kE[aDz], ht = aE0.length, bB = 0; bB < ht; bB++) aE3 = aE0[bB], bY = dA[aE3] >> 3, e3 == bY || aE9 && aEA[e3] === aEA[bY] && aEA[e3] || (bY = gt[aE3], (aE1 = c4 - bY % aDk) * aE1 + (aE1 = c5 - ~~
										((bY + .5) / aDk)) * aE1 < 14400 && (bY = dB[aE3], aE1 = bY <= aE5 ? Math.max(1, hu.hv(bY + hu.hv(aE5 - bY, 10), 10)) : Math.max(1, hu.hv(aE5, 10)), dB[aE3] = Math.max(bY - aE1, 0), aDa[aE3] =
										4))
					}
				}(this), ! function(qj) {
					if (cH.e1() % 5 == 3)
						for (var dB = qj.dB, aI = qj.wr, aL = 0; aL < aI; aL++) {
							var d2 = dB[aL];
							dB[aL] = Math.max(d2 - Math.max(1, d2 >> 7), 0)
						}
				}(this), this), dB = qj.dB, aDa = qj.aDa, aL = qj.wr - 1; 0 <= aL; aL--) aDa[aL] = aDa[aL] >> 1, 0 === dB[aL] && (d8.gk.sz(aL), d8.aEC.aED(aL));
			hD.sJ(aP, bv - d8.ge.sS(aP), 15)
		}
}

function qH() {
	var aEE = aEF(),
		aEG = aDV(),
		aEH = a50();
	this.iB = function() {
		return 123
	}, this.zK = function() {
		iP.iV.a63(hk.buffer.data[183].value, 15), iG.ty(14, aEE), iG.ty(7, aEG), iG.ty(12, aEH)
	}
}

function aEI() {
	var aEJ;
	this.b3 = function() {
		if (!aEJ) {
			aEJ = new Array(cw.aEL.length);
			for (var aL = 0; aL < aEJ.length; aL++) aEJ[aL] = j4.d9.aEM(20, cw.aEL[aL])
		}
	}, this.eD = function() {
		var aEN = a3D;
		if (!(5 <= aEN)) {
			var aEO = bN.aV,
				aEP = bN.au,
				c4 = pW / aEN,
				c5 = pX / aEN,
				fE = (aEO + pW) / aEN,
				gx = (aEP + pX) / aEN,
				mj = -20 * aEN,
				aEQ = .5 * mj,
				aDk = v.w << 4,
				aI = d8.d9.wr,
				gt = d8.d9.gt,
				dA = d8.d9.dA,
				a71 = cw.a71,
				cE = aEJ,
				i5 = eF;
			3 < aEN && (i5.globalAlpha = .5 * (5 - aEN));
			for (var aL = 0; aL < aI; aL++) {
				var aAS = gt[aL],
					aH = aEO * (aAS % aDk / 16 - c4) / (fE - c4) + aEQ,
					aAS = aEP * (Math.floor(aAS / aDk) / 16 - c5) / (gx - c5) + aEQ;
				aEO < aH || aEP < aAS || aH < mj || aAS < mj || (i5.setTransform(aEN, 0, 0, aEN, aH, aAS), aH = cE[a71[dA[aL] >> 3]], i5.drawImage(aH, 0, 0))
			}
			i5.globalAlpha = 1, i5.setTransform(aEN, 0, 0, aEN, 0, 0)
		}
	}
}

function aET() {
	this.bR = new ma, this.oY = new aEU, this.by = new aEV, this.cL = new sb, this.be = new aBL, this.mH = new zI, this.canvas = new ot, this.color = new aEW, this.aEX = new aEY, this.b3 = function() {
		this.bR.mc()
	}
}

function aEZ() {
	this.v8 = function(es) {
		var aEq;
		iG.kT(55 + rO.qG.iB()), iG.ty(1, 0), iG.ty(6, 13), iG.ty(14, eh.aEn), iG.ty(4, b4.id), iG.ty(7, b4.xU), iG.ty(1, +eh.aEo), iG.ty(1, +eh.aEp), iG.ty(5, (new Date).getHours() % 24), aEq = uQ.aEr(), iG.ty(8, aEq[0]), iG.ty(8, aEq[1]), rO.qG
			.zK(), el.d9.send(es, iG.i9)
	}, this.aEb = function(es, rB, aEc, aEd) {
		iG.kT(70), iG.ty(1, 0), iG.ty(6, 30), iG.ty(3, aEc), iG.ty(30, rB), iG.ty(30, aEd), el.d9.send(es, iG.i9)
	}, this.aEe = function(aEf) {
		a9R.b3(), a9R.ty(1, 0), a9R.ty(6, 6), iU.yD.zK(aEf, 16, a9R), el.d9.send(el.d9.uk, a9R.tx())
	}, this.aEg = function(id) {
		iG.kT(13), iG.ty(1, 0), iG.ty(6, 15), iG.ty(6, id), el.d9.send(0, iG.i9)
	}, this.aEh = function(id, value) {
		iG.kT(43), iG.ty(1, 0), iG.ty(6, 3), iG.ty(6, id), iG.ty(30, value), el.d9.send(0, iG.i9)
	}, this.aEi = function(id, bV) {
		var aI = Math.min(bV.length, 63);
		iG.kT(19 + 16 * aI), iG.ty(1, 0), iG.ty(6, 26), iG.ty(6, id), iG.ty(6, aI), iU.iQ.a66(bV), el.d9.send(0, iG.i9)
	}, this.aEj = function(aEk, cF) {
		iG.kT(7 + 26 * cF.length), iG.ty(1, 0), iG.ty(6, 9);
		for (var aL = 0; aL < cF.length; aL++) iG.ty(16, cF[aL][0]), iG.ty(10, cF[aL][1]);
		el.d9.send(aEk, iG.i9)
	}, this.aEl = function(aEm, a9U) {
		iG.kT(20), iG.ty(1, 0), iG.ty(6, 19), iG.ty(1, aEm), iG.ty(12, a9U), el.d9.send(el.d9.uj, iG.i9)
	}, this.a61 = function(username) {
		iG.ty(5, username.length), iU.iQ.a66(username)
	}, this.a1r = function(a1t, a1u, es, pow) {
		iG.kT(88), iG.ty(1, 0), iG.ty(6, 8), iG.ty(3, pow.aEc), iG.ty(30, pow.rB), iG.aBW(32, a1u), iG.ty(16, a1t), el.d9.send(es, iG.i9)
	}
}

function aEs(mF) {
	var uL, uM, ob;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(340), [new g0("⬅️ " + L(61), function() {
		f1.q6(10)
	})]), uM = new oS(uL.oT, ((ob = []).push(function() {
		var aCV, og = new oh,
			aEw = new om(hk.buffer.data[132], 1, function() {
				aCV.button.click()
			}),
			aEx = new om(hk.buffer.data[131], 1, function() {
				aEw.l0.focus()
			});
		og.oi(L(341)), og.ol(aEx), aEx.l0.style.marginBottom = "0.8em", og.oi(L(342)), og.ol(aEw);
		return aCV = new g0(L(343), function() {
			gC = Math.floor(aEx.l0.value), gD = Math.floor(aEw.l0.value);
			var gD, gC = {
				aEz: Math.min(gC, gD),
				a83: Math.max(gC, gD)
			};
			f1.g9(8, f1.lu(10).pe, new gA(21, {
				gB: mF.gB,
				gC: gC.aEz,
				gD: gC.a83
			}))
		}, 0, 0, 1), og.ol(new uX([aCV.button])), og
	}()), ob.push(function() {
		var aCV, og = new oh,
			aEw = new om(hk.buffer.data[134], 1, function() {
				aCV.button.click()
			}),
			aEx = new om(hk.buffer.data[133], 0, function() {
				aEw.l0.focus()
			});
		return og.oi(1 === mF.gB ? L(344) : L(345)), og.ol(aEx), aEx.l0.style.marginBottom = "0.8em", og.oi(L(346)), og.ol(aEw), aCV = new g0(L(343), function() {
			var a5z = aEx.l0.value.slice(0, 20),
				a60 = Math.abs(Math.floor(aEw.l0.value));
			f1.g9(8, f1.lu(10).pe, new gA(22, {
				gB: mF.gB,
				a5z: a5z,
				a60: a60
			}))
		}, 0, 0, 1), og.ol(new uX([aCV.button])), og
	}()), ob.push(function() {
		var aCV, og = new oh,
			aEw = new om(hk.buffer.data[152], 1, function() {
				aCV.button.click()
			}),
			aEx = new om(hk.buffer.data[151], 0, function() {
				aEw.l0.focus()
			});
		return og.oi(L(347)), og.ol(aEx), aEx.l0.style.marginBottom = "0.8em", og.oi(L(346)), og.ol(aEw), aCV = new g0(L(343), function() {
			var a5z = aEx.l0.value.slice(0, 5),
				a60 = Math.abs(Math.floor(aEw.l0.value));
			f1.g9(8, f1.lu(10).pe, new gA(28, {
				gB: mF.gB,
				a5z: a5z,
				a60: a60
			}))
		}, 0, 0, 1), og.ol(new uX([aCV.button])), og
	}()), ob))
}

function aF0() {
	var size, aAs;
	this.b3 = function() {
		size = j.aF1, aAs = new Uint16Array(j.cW);
		for (var ck = j.ck, aL = j.aF1 - 1; 0 <= aL; aL--) aAs[aL] = ck + aL
	}, this.e6 = function() {
		gU.fl.e6();
		for (var aL = size - 1; 0 <= aL; aL--)
			if (0 === cT.iw[aAs[aL]]) {
				c2 = void 0;
				var c2 = aL;
				size--, aAs[c2] = aAs[size]
			} else d0.e6(aAs[aL])
	}, this.rL = function(aP) {
		aAs[size++] = aP
	}
}

function qP(aF4, aF5, aF6) {
	this.aH = 0, this.aJ = 0, this.aV = 0, this.au = 0, this.resize = function() {
		this.au = Math.min(bQ.bR.mh(aF6 || .5) * aF4[1] * bN.bO, bN.au - 2 * bT.gap), this.aV = Math.min(this.au * (aF4[0] / aF4[1]), bN.aV - 2 * bT.gap), this.au = aF4[1] * this.aV / aF4[0], this.aH = bT.gap + aF5[0] * (bN.aV - this.aV - 2 * bT
			.gap), this.aJ = bT.gap + aF5[1] * (bN.au - this.au - 2 * bT.gap)
	}, this.aF7 = function() {
		return this.aH + .5 * this.aV
	}
}

function aF8() {
	var hl = new Uint8Array(j.cW),
		aF9 = new Uint16Array(j.cW),
		aFA = new Uint16Array(j.cW),
		aFB = new Uint8Array(j.cW),
		aFC = (this.d2 = new Uint8Array(j.cW), new Uint16Array(j.cW)),
		aFD = new Uint16Array(j.cW);

	function aFL(aL) {
		hl[aL] = 1 + hu.hv(aFC[aL] * gh.random(), 10 * gh.value(100))
	}
	this.d1 = null, this.aAy = [97, 94, 70, 40, 20, 0, 100], this.gY = [500, 450, 400, 300, 80, 50, 100], this.aAw = [0, 0, 5, 25, 50, 100, 0], this.aFE = [60, 74, 112, 200, 256, 512, 512], this.gW = [1, 2, 3, 4, 6, 8, 1], this.aFF = [500, 450, 400,
		300, 80, 50, 100
	], this.aFG = [100, 150, 250, 400, 600, 1e3, 100], this.mW = function() {
		this.d1 = [L(348), L(349), L(99), L(350), L(351), L(352), "H Bot"]
	}, this.b3 = function() {
		hl.fill(0), aF9.fill(0), aFA.fill(0), aFB.fill(0), this.d2.fill(0), aFC.fill(0), aFD.fill(0);
		var aFH = j.ck;
		if (9 === j.dy) this.aFI();
		else if (__fx.customLobby.isActive())
			for (aL = j.aF1 - 1; 0 <= aL; aL--) this.d2[aL + aFH] = __fx.customLobby.gameInfo.difficulty;
		else if (j.iv)
			if (3 === j.data.botDifficultyType)
				for (aL = j.aF1 - 1; 0 <= aL; aL--) {
					var i3 = aL + aFH;
					this.d2[i3] = j.data.botDifficultyData[i3]
				} else if (2 === j.data.botDifficultyType)
					for (aL = j.aF1 - 1; 0 <= aL; aL--) this.d2[i3 = aL + aFH] = j.data.botDifficultyTeam[cw.cy[cw.cz[i3]]];
				else if (1 === j.data.botDifficultyType) {
			var aFK = this.d1.length;
			for (aL = j.aF1 - 1; 0 <= aL; aL--) this.d2[aL + aFH] = aL % aFK
		} else
			for (aFK = j.data.botDifficultyValue, aL = j.aF1 - 1; 0 <= aL; aL--) this.d2[aL + aFH] = aFK;
		else
			for (var aFJ = 8 === j.dy ? 1 : 0, aL = j.aF1 - 1; 0 <= aL; aL--) this.d2[aL + aFH] = aFJ;
		for (aL = 0; aL < aFH; aL++) this.d2[aL] = 6;
		var aI = j.cW;
		for (aL = 0; aL < aI; aL++) this.d2[aL] <= 2 ? (aFB[aL] = 5, aFC[aL] = aFD[aL] = 1040, 0 === this.d2[aL] ? (aF9[aL] = 980, aFA[aL] = 980) : 1 === this.d2[aL] ? (aF9[aL] = 980, aFA[aL] = 920, aFC[aL] = aFD[aL] = 1100) : (aF9[aL] = 825,
				aFA[aL] = 750)) : this.d2[aL] <= 4 ? (aFB[aL] = 1 + gh.gi(20), 3 === this.d2[aL] ? (aF9[aL] = aFA[aL] = 500, aFC[aL] = aFD[aL] = 1e3) : (aFD[aL] = 250 + gh.gi(1501), aFC[aL] = 500 + gh.gi(501), aF9[aL] = 300 + gh.gi(201), aFA[
				aL] = 100 + gh.gi(201))) : this.d2[aL] <= 5 ? (aFC[aL] = 1e3, aFD[aL] = 1e3, aFB[aL] = 35 + gh.gi(16), aF9[aL] = 300 + gh.gi(201), aFA[aL] = 50 + gh.gi(101)) : (aFC[aL] = aFD[aL] = 800, aFB[aL] = 5, aF9[aL] = 10, aFA[aL] = 250),
			aFL(aL)
	}, this.aFI = function() {
		for (var e = a4Z.aFM, aFH = j.ck, aL = e - 1; 0 <= aL; aL--) this.d2[aL + aFH] = 0;
		for (var c7 = 0; c7 < 6; c7++) {
			for (aL = e + a4Z.aFN[c7] - 1; e <= aL; aL--) this.d2[aL + aFH] = c7;
			e += a4Z.aFN[c7]
		}
	}, this.aAq = function(aP, value) {
		hl[aP] = Math.min(value, hl[aP])
	}, this.e6 = function(aP) {
		0 == --hl[aP] && ! function(aP) {
			(function(aP) {
				aFC[aP] !== aFD[aP] && (aFC[aP] += aFC[aP] < aFD[aP] ? 3 : -3);
				aF9[aP] !== aFA[aP] && (aF9[aP] += aF9[aP] < aFA[aP] ? aFB[aP] : -aFB[aP], aF9[aP] = (Math.abs(aF9[aP] - aFA[aP]) <= aFB[aP] ? aFA : aF9)[aP]);
				hl[aP] = hu.hv(aFC[aP], 10)
			})(aP), gU.ff.aAk(aP, hu.hv(aF9[aP] * cT.ct[aP], 1e3))
		}(aP)
	}, this.p9 = function(aP, aY) {
		aFC[aP] = aFD[aP] = aY
	}
}

function aFQ() {
	var aFR, aFS;

	function aFZ() {
		(aFR = new WebSocket("wss://territorial.io/s52/")).onopen = aFb, aFR.onclose = function() {
			aFc()
		}
	}

	function aFb() {
		if (aFR && aFR.readyState === aFR.OPEN) {
			var aV = new aFd;
			aV.kT(1608), aV.ty(1, 0), aV.ty(6, 7), aV.ty(2, b4 ? b4.id : 3), aV.ty(1, eh.aEo ? 1 : 0), aV.ty(1, eh.aEp ? 1 : 0), aV.ty(1, eh ? eh.aFW : 0);
			for (var aL = 0; aL < aFS.length && aL < 228; aL++) aV.ty(7, aFS.charCodeAt(aL) % 128);
			aFR.send(aV.i9), aFc()
		}
	}

	function aFc() {
		aFR && (aFR.onclose = null, aFR.onopen = null, aFR = null)
	}
	window.addEventListener("error", function aFT(l0) {
		aFS = "";
		try {
			var aFU = function(l0) {
				if (!l0.error) return 0;
				var stack = l0.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, wf = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = wf.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(l0);
			return 0 === aFU || l0.lineno <= 3 ? void console.log("Error: External Code | " + aFU) : (window.removeEventListener("error", aFT), aFS = l0.lineno + " " + l0.colno + "|" + aFU, __fx.reportError(l0, aFS), alert("Error:\n" + l0
				.filename + " " + l0.lineno + " " + l0.colno + " " + l0.message))
		} catch (l0) {
			aFS = "SE|" + aFS + "|" + l0, console.log(aFS), alert(aFS)
		}
		aFZ()
	})
}

function aFe(a8l, qx, aFf) {
	this.kp = document.createElement("div"), this.ft = a8l;
	var aFg = 0;
	this.resize = function(rE, aFh) {
		var aI = a8l.length;
		if (!aFf)
			for (var aL = 1; aL < aI; aL++) bQ.bR.gL(a8l[aL].button, 4);
		for (var aFi = 0, aL = 0; aL < aI; aL++) aFi += a8l[aL].button.offsetWidth;
		if (rE && (aFg = rE.offsetWidth), aFh && aFi < aFg)
			for (aL = 0; aL < aI; aL++) a8l[aL].button.style.width = (100 * a8l[aL].button.offsetWidth / aFi).toFixed(2) + "%";
		else
			for (aL = 0; aL < aI; aL++) a8l[aL].button.style.width = "auto";
		aFh || this.resize(rE, 1)
	};
	var qj = this;
	qj.kp.style.height = qj.kp.style.maxHeight = "100%";
	for (var aL = 0; aL < a8l.length; aL++) a8l[aL].r2(qx), a8l[aL].button.style.height = "100%", a8l[aL].button.style.padding = "0.0em 0.9em", a8l[aL].button.style.whiteSpace = "pre", qj.kp.appendChild(a8l[aL].button)
}

function aFj() {
	var aFk, aFl, aV, aH, aJ, aFm, aFn;
	this.b3 = function() {
		aFk = new Array(2), aFl = new Array(2), this.aFo = !1, aFn = aFm = pX = pW = 0, a3D = 1, this.resize()
	}, this.resize = function() {
		aV = (aV = Math.floor((b4.b5.b6() ? .072 : .0502) * bN.bO)) < 8 ? 8 : aV;
		for (var aL = 1; 0 <= aL; aL--) aFk[aL] = document.createElement("canvas"), aFk[aL].width = aV, aFk[aL].height = aV, aFl[aL] = aFk[aL].getContext("2d", {
			alpha: !0
		});
		this.aFp(),
			function() {
				for (var aG5 = Math.floor(1 + aV / 20), aL = 1; 0 <= aL; aL--) aFl[aL].clearRect(0, 0, aV, aV), aFl[aL].fillStyle = bJ.z3, aFl[aL].beginPath(), aFl[aL].arc(aV / 2, aV / 2, aV / 2 - aG5, 0, 2 * Math.PI), aFl[aL].fill(), aFl[aL]
					.lineWidth = aG5, aFl[aL].fillStyle = bJ.bL, aFl[aL].strokeStyle = bJ.bL, aFl[aL].beginPath(), aFl[aL].arc(aV / 2, aV / 2, aV / 2 - aG5, 0, 2 * Math.PI), aFl[aL].stroke(), vm(aFl[aL], 0, 0, aV, aG5, .3, 0 === aL)
			}()
	}, this.aFt = function() {
		return -pW / a3D
	}, this.bm = function() {
		return -pX / a3D
	}, this.aFu = function(aFv, oG) {
		pW = a3D * aFv - oG
	}, this.aFw = function(aFx, oH) {
		pX = a3D * aFx - oH
	}, this.bt = function(aFs, bu) {
		return j.qV || ! function(aFs, bu) {
			return Math.pow(aFs - (aH + aV / 2), 2) + Math.pow(bu - (aJ + aV / 2), 2) < aV * aV / 4 || Math.pow(aFs - (aH + aV / 2), 2) + Math.pow(bu - (aJ + 2 * aV), 2) < aV * aV / 4
		}(aFs, bu) || hk.buffer.data[8].value ? (c0.iC() && (this.aFo = !0, aFm = aFs, aFn = bu), !1) : bu < aJ + 1.25 * aV ? this.q9(Math.floor(bN.aV / 2), Math.floor(bN.au / 2), -200) : this.q9(Math.floor(bN.aV / 2), Math.floor(bN.au / 2),
			200)
	}, this.ez = function(aFs, bu) {
		var aFy, aFz, gz, h0;
		return !c0.iC() || (aFy = pW, aFz = pX, pW += gz = aFm - aFs, pX += h0 = aFn - bu, cb.ez(gz, h0), this.pY(), aFm = aFs, aFn = bu, aFy !== pW) || aFz !== pX
	}, this.q9 = function(hr, hs, deltaY) {
		var mi;
		if (c0.iC()) {
			if (0 < deltaY) mi = (mi = 500 / (500 + deltaY)) < .5 ? .5 : mi;
			else {
				if (!(deltaY < 0)) return !1;
				mi = 2 < (mi = (500 - deltaY) / 500) ? 2 : mi
			}
			this.oJ(hr, hs, mi), cH.cI = !0
		}
		return !0
	}, this.oJ = function(aH, aJ, e) {
		var a33;
		e = a33 = (a33 = 1024 < (a33 = e) * a3D ? 1024 / a3D : a33) * a3D < .125 ? .125 / a3D : a33, cb.zoom(e, aH, aJ),
			function(a33, hr, hs) {
				a3D *= a33, pW = (pW + hr) * a33 - hr, pX = (pX + hs) * a33 - hs, oI.pY()
			}(e, aH, aJ)
	}, this.pY = function() {
		var aG2 = bN.aV / 16,
			aE1 = 0,
			aG3 = bN.au / 16,
			aE2 = 0;
		pW < aG2 - bN.aV && (aE1 = -bN.aV + aG2 - pW), pW > a3D * v.w - aG2 && (aE1 = a3D * v.w - aG2 - pW), pX < aG3 - bN.au && (aE2 = -bN.au + aG3 - pX), a3D * v.y - aG3 < pX && (aE2 = a3D * v.y - aG3 - pX), pW += aE1, pX += aE2, a55.aG4(), cb
			.a32(aE1, aE2)
	}, this.aFp = function() {
		aH = bN.aV - aV - bT.gap, aJ = Math.floor(bN.au / 2 - 1.25 * aV)
	}, this.eD = function() {
		hk.buffer.data[8].value || (eF.drawImage(aFk[0], aH, aJ), eF.drawImage(aFk[1], aH, Math.floor(aJ + 3 * aV / 2)))
	}
}

function ir() {
	function aGD() {
		var dc;
		return 8 === j.dy ? 0 : (dc = Math.floor(cT.rN[j.k] / 50), (dc = Math.min(dc, 200)) / 100)
	}

	function aG7() {
		var dc = aGD();
		0 !== dc && bp.cA(440, L(353, [dc.toFixed(2)]), 40, 0, bJ.tQ, bJ.bK, -1, !1)
	}
	this.e6 = function() {
		var aCf;
		0 === rR.result.aG6 || 0 === rR.result.ld.length || 8 === j.dy ? bQ.by.wB(j.k) && aG7() : (function(aCf) {
			7 !== j.dy && 10 !== j.dy && 9 !== j.dy || 0 !== j.dK && aCf && bp.cA(600, L(357, [aCf.toFixed(2)]), 40, 0, bJ.bL, bJ.bK, -1, !1)
		}(aCf = function() {
			bp.cA(520, L(354), 40, 0, bJ.bL, bJ.bK, -1, !1);
			for (var ld = rR.result.ld, aI = ld.length, cj = cT.cj, cK = [], aL = 0; aL < aI; aL++) {
				var aP = ld[aL];
				cK.push({
					aP: aP,
					bv: cj[aP]
				})
			}
			cK.sort((c2, c7) => c7.bv - c2.bv);
			var cx = cT.cU,
				bv = rR.result.aGE,
				dc = rR.result.aG6,
				bV = "",
				aCf = 0;
			for (aL = 0; aL < aI; aL++) {
				var a8T = cK[aL].bv * dc / (100 * bv),
					aGG = cx[cK[aL].aP] + ": " + a8T.toFixed(2) + "   ";
				cK[aL].aP === j.k && (aCf = a8T), 2 < aL && 4 !== aI ? 3 === aL && (bV += "(" + L(355, [aI - 3]) + ")") : bV += aGG
			}
			bp.cA(560, bQ.cL.sn(bV), 40, 0, bJ.tQ, bJ.bK, -1, !1), aCf ? bp.cA(580, L(356, [aCf.toFixed(2) + " + " + aGD().toFixed(2)]), 40, 0, bJ.tQ, bJ.bK, -1, !1) : bQ.by.wB(j.k) && aG7();
			return aCf
		}()), 2 === j.aBj || 7 <= j.dy || function(aCf) {
			var ld = rR.result.ld,
				aI = ld.length,
				cr = cT.cr,
				cj = cT.cj,
				js = [];
			loop: for (var aL = 0; aL < aI; aL++) {
				var aP = ld[aL],
					jt = bQ.cL.ju(cr[aP]);
				if (null !== jt) {
					for (var jR = cj[aP], c7 = js.length - 1; 0 <= c7; c7--)
						if (jt === js[c7].name) {
							js[c7].bv += jR, js[c7].cK.push({
								aP: aP,
								bv: jR
							});
							continue loop
						} js.push({
						name: jt,
						bv: jR,
						cK: [{
							aP: aP,
							bv: jR
						}]
					})
				}
			}
			if (0 !== js.length) {
				js.sort((c2, c7) => c7.bv - c2.bv);
				var cK = js[0].cK,
					aGH = (cK.sort((c2, c7) => c7.bv - c2.bv), "[" + js[0].name + "]"),
					aGI = 512 * rR.result.aG6 / 26214400,
					d7 = (bp.cA(0, L(358, [aGH, aGI.toFixed(4)]), 40, 0, bJ.bL, bJ.bK, -1, !1), cK.length),
					a6A = js[0].bv,
					aGJ = 1e4 * aGI;
				for (aL = 0; aL < d7; aL++)
					if (cK[aL].aP === j.k) {
						bp.cA(600, L(359, [(aGJ * cK[aL].bv / (10 * a6A)).toFixed(2)]), 40, 0, bJ.bL, bJ.bK, -1, !1), bp.cA(640, L(360, [(.2 * aCf).toFixed(2), aGH]), 40, 0, bJ.bL, bJ.bK, -1, !1);
						break
					}
			}
		}(aCf))
	}, this.rS = function() {
		var aGB, aGC;
		j.iv || (aGB = cT, aGC = j.k, 0 === aGB.uI[aGC]) || aGB.nK[aGC] < 1 || 2 * aGB.a0O[aGC] > 3 * (aGB.nJ[aGC] + aGB.nK[aGC]) || aG7()
	}
}

function aGK() {
	this.kk = 2, this.aEn = 1763, this.aGL = 0;
	this.rVersion = 25, this.b3 = function() {
		this.aFX = "2.16.63", this.xU = "29 Oct 2026 [" + this.aFX + "]", this.hostname = window.location.hostname.toLowerCase(), this.aEo = 0 <= this.hostname.indexOf("territorial.io"), this.aGQ = 0 <= this.hostname.indexOf("github.io"), this
			.ei = 0 <= this.hostname.indexOf("game.territorial.io"), this.aEp = function() {
				try {
					return window.self !== window.top
				} catch (l0) {
					return !0
				}
			}(), this.aC4 = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aEo + " validMod: " + +this.aGQ)
	}, this.aFW = 0
}

function aGS() {
	this.aDR = 0;
	var aGU, aGV, aGW, aGX, aGY, aGZ = this.aGT = 0;

	function aGe() {
		aGX = aGY = null, aGZ = 0
	}
	this.b3 = function(aGa, aGb, aGc) {
		f1.q7(), jl.iA(), eg.setState(10), aGX = aGa, aGY = aGb, aGZ = aGc, this.aDR = aGa.aDR, this.aGT = aGc, aGU = 0, aGV = cH.bU + 4500, el.d9.uj = aGa.uj, el.d9.uk === aGa.uj ? (console.log("direct pass"), aGW = 0) : (console.log(
			"delayed pass"), el.d9.close(el.d9.uk, 3247), aGW = 2, el.d9.eo(aGa.uj, 5, 2) && el.dD.aGd()), eF.imageSmoothingEnabled = !0, eg.aGi();
		aGb = gN.m6("loading"), aGc = (b4.b5.b6() ? .396 : .25) * bN.bO / aGb.width;
		eF.setTransform(aGc, 0, 0, aGc, Math.floor((bN.aV - aGc * aGb.width) / 2), Math.floor((bN.au - aGc * aGb.height) / 2)), eF.imageSmoothingEnabled = !1, eF.drawImage(aGb, 0, 0), eF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a4g = function() {
		0 < aGW && cH.bU > aGV && (aGW--, aGV += 4500, 0 === cH.aBp) && 0 === cH.e1() && el.d9.eo(el.d9.uj, 5, 2)
	}, this.aGg = function() {
		return 10 === eg.f3() && (jl.aBa.aGh(aGX, aGY, aGZ), aGe(), !0)
	}, this.o2 = function() {
		10 === eg.f3() && 2 <= ++aGU && (jl.aBa.aGh(aGX, aGY, aGZ), aGe())
	}
}

function oh() {
	var kp;
	this.yK = [], this.kp = document.createElement("div"), this.oi = function(bV, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bV, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.kp.appendChild(
			title), title
	}, this.uS = function(bV, marginBottom) {
		var a2B = document.createElement("p");
		return a2B.textContent = bV, a2B.style.fontSize = "0.75em", a2B.style.lineHeight = "1.2em", a2B.style.marginBottom = marginBottom || "0", this.kp.appendChild(a2B), a2B
	}, this.aD6 = function(bV) {
		var aGk = document.createElement("p");
		return aGk.textContent = bV, aGk.style.fontSize = "1em", aGk.style.marginBottom = "0", aGk.style.whiteSpace = "pre-wrap", aGk.style.overflowWrap = "break-word", this.kp.appendChild(aGk), aGk
	}, this.vQ = function(rF, fontSize) {
		var kp = document.createElement("div");
		return kp.innerHTML = rF, kp.style.fontSize = fontSize || "1em", kp.style.lineHeight = "1.2em", this.kp.appendChild(kp), kp
	}, this.oj = function(aCY) {
		for (var a6F = aCY.a6F, aI = a6F.length, aL = 0; aL < aI; aL++) this.kp.appendChild(a6F[aL])
	}, this.ol = function(cF) {
		return this.yK.push(cF), this.kp.appendChild(cF.l0), cF
	}, this.resize = function() {
		for (var aI = this.yK.length, aL = 0; aL < aI; aL++) this.yK[aL].resize && this.yK[aL].resize()
	}, (kp = this.kp).style.position = "absolute", kp.style.height = "auto", kp.style.padding = "0.5em"
}

function aGl() {
	this.d9 = new aGm, this.aGn = new aGo, this.b3 = function() {
		this.d9.b3()
	}, this.e6 = function() {
		0 !== this.d9.aGp && this.d9.aGp--
	}
}

function fZ() {
	this.e6 = function(player) {
		return d8.a0Z.aGq(player, function(player) {
			var aI = gU.fW.zS;
			if (0 === aI) return -1;
			for (var d7 = Math.min(aI, gU.performance.gV ? aI : 10), buffer = gU.fW.buffer, nb = hu.hv(gh.random() * aI, gh.value(100)), l0 = nb + d7, hr = gh.aAI(cT.gu[player], cT.gw[player]), hs = gh.aAI(cT.gv[player], cT.gy[player]),
					aGs = -1, ao = n.aAX(0, 0, v.w, v.y), aL = nb; aL < l0; aL++) {
				var mj = aL % aI,
					aGt = n.aAQ(hr, hs, buffer[mj]);
				aGt < ao && (ao = aGt, aGs = mj)
			}
			return -1 !== aGs ? function(c3, hr, hs) {
				var q = n.r(c3),
					s = n.t(c3),
					gz = hr - q,
					h0 = hs - s;
				Math.abs(gz) >= Math.abs(h0) ? (h0 = 0, gz = Math.sign(gz)) : (gz = 0, h0 = Math.sign(h0));
				gz === h0 && (gz = 1);
				for (;;) {
					if (q += gz, s += h0, !n.aAZ(q, s)) break;
					if (c3 = n.yb(q, s), f.kV(n.yc(c3))) return c3
				}
				return -1
			}(buffer[aGs], hr, hs) : -1
		}(player))
	}
}

function aGw() {
	var bB, e0 = !1,
		aGx = !1,
		aGy = -1e4,
		aGz = -1,
		aH0 = 0;

	function resize(aH6) {
		bB = 0, gN.gO() && (aH3(aH6) || e0) && (e0 = !1, bT.resize(), aH7.aH8.resize(), ey.b3(), mU.b3(), en.resize(), zv.resize(), o0.resize(), a1s.resize(), f1.resize(), 1 <= j.e5 ? (a4Y.resize(!1), tu.resize(), gZ.resize(), oI.resize(), bn
		.resize(), bp.resize(), qZ.resize(), bq.resize(), bh.resize(), a4a.resize(), bd.resize(), i0.resize(), a8k.resize(), cb.resize(), j1.resize(), li.resize(), oI.pY()) : (eg.aH9(), eg.aHA()), cH.cI = !0)
	}

	function aH2(hm) {
		return hm && 128 < hm ? Math.floor(hm) : 128
	}

	function aH3(aH6) {
		var aV, au, aHC, qs, qu;
		if (!(0 < bN.z4)) return qs = aH2(document.documentElement.clientWidth), qu = aH2(window.visualViewport && 2 !== b4.id ? window.visualViewport.height : document.documentElement.clientHeight), aV = qs, au = qu, aHC = 0 !== b4.id || aV < au ?
			700 : 1200, aHC = Math.min(aHC / ((aV + au) / 2), 1), aHC = 0 === hk.buffer.data[1].value ? 2 * aHC / 3 : Math.min(aHC + (hk.buffer.data[1].value - 1) * (1 - aHC) / 2, 1), bN.mk = (window.devicePixelRatio || 1) * aHC, __fx
			.hoveringTooltip.canvasPixelScale = bN.mk, aH6 && !aGx ? (aGx = !0, f1.removeChild(document.body, aGv)) : aGx && (aGx = !1, document.body.appendChild(aGv)), aV = Math.floor(.5 + qs * bN.mk), au = Math.floor(.5 + qu * bN.mk), aV !== bN
			.aV || au !== bN.au ? (bN.aV = aV, bN.au = au, bN.min = y2(aV, au), bN.max = bk(aV, au), bN.bO = hu.hv(aV + au, 2), bN.aH1 = aV / au, aGv.width = aV, aGv.height = au, aGv.style.width = qs + "px", aGv.style.height = qu + "px", aGz = cH
				.bU + 1e3, 1) : void 0
	}
	this.aV = 0, this.au = 0, this.min = 0, this.max = 0, this.bO = 0, this.aH1 = 1, this.mk = 1, this.z4 = 0, this.mW = function() {
		this.aV = aH2(document.documentElement.clientWidth) + 2, this.au = aH2(document.documentElement.clientHeight) + 2
	}, this.b3 = function() {
		bB = 1, aGv = document.getElementById("canvasA"), 2 === b4.id && (aGv.style.webkitUserSelect = "none"), (eF = aGv.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aH3(0)
	}, this.e6 = function() {
		50 <= ++bB && resize(0), -1 === aGz || cH.bU < aGz || (aH0++, aGz = -1, cH.bU + 8e3 <= 2e3 * aH0 ? console.log("error 3748") : b4.b5.setState(15))
	}, this.a94 = function(e8) {
		e0 = !0, resize(e8)
	}, this.aH5 = function() {
		aGy + 1e3 > cH.bU || (aGy = cH.bU, resize(0))
	}
}

function aHE() {
	var aHF, aHG, aHH;

	function aHM(aL) {
		var button = ey.ft[aL],
			aH = button.aH,
			aJ = button.aJ,
			aV = button.aV,
			au = button.au;
		eF.fillStyle = button.aHK, eF.fillRect(aH, aJ, aV, au), aL === aHF && (eF.fillStyle = aHH, eF.fillRect(aH, aJ, aV, au)), eF.lineWidth = bT.i4, eF.strokeStyle = aHG, eF.strokeRect(aH, aJ, aV, au),
			function(button) {
				var aH = button.aH,
					aJ = button.aJ,
					aV = button.aV,
					au = button.au;
				bQ.bR.textAlign(eF, 1), bQ.bR.textBaseline(eF, 1), eF.font = button.font, eF.fillStyle = aHG, eF.fillText(button.f7, Math.floor(aH + aV / 2), Math.floor(aJ + au / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aV = 0, this.au = 0, this.aJ = 0, this.gap = 0, this.b3 = function() {
		aHF = -1, aHG = bJ.bL, aHH = "rgba(255,255,255,0.16)", this.ft = new Array(7), this.au = Math.floor((b4.b5.b6() ? .123 : .093) * bN.bO), this.aV = Math.floor((b4.b5.b6() ? 3.96 : 4.2) * this.au), this.gap = Math.floor(.025 * this.aV);
		var aHI = Math.floor(.26 * this.au),
			aHJ = bQ.bR.bS(1, aHI);
		this.ft[0] = {
			aH: 0,
			aJ: 0,
			aV: Math.floor(.6 * this.aV - this.gap / 2),
			au: this.au,
			f7: "Multiplayer",
			font: aHJ,
			aHK: "rgba(22,88,22,0.8)",
			fontSize: aHI
		}, aHI = Math.floor(.18 * this.au), aHJ = bQ.bR.bS(1, aHI), this.ft[1] = {
			aH: 0,
			aJ: 0,
			aV: this.aV - this.ft[0].aV - this.gap,
			au: this.au,
			f7: "Single Player",
			font: aHJ,
			aHK: "rgba(22,88,88,0.8)",
			fontSize: aHI
		}, this.ft[2] = {
			aH: 0,
			aJ: 0,
			aV: this.aV,
			au: Math.floor(.3 * this.au),
			f7: "",
			font: this.ft[1].font,
			aHK: "rgba(100,0,0,0.8)",
			fontSize: this.ft[1].fontSize
		}, this.ft[3] = {
			aH: 0,
			aJ: 0,
			aV: this.aV,
			au: this.au,
			f7: "Back",
			font: this.ft[0].font,
			aHK: "rgba(0,0,0,0.8)",
			fontSize: this.ft[0].fontSize
		}, this.ft[4] = {
			aH: 0,
			aJ: 0,
			aV: this.aV,
			au: Math.floor(.3 * this.au),
			f7: "The game was updated!",
			font: this.ft[1].font,
			aHK: "rgba(100,0,0,0.8)",
			fontSize: this.ft[1].fontSize
		}, this.ft[5] = {
			aH: 0,
			aJ: 0,
			aV: this.ft[0].aV,
			au: Math.floor(.8 * this.au),
			f7: "Reload",
			font: this.ft[0].font,
			aHK: "rgba(0,100,0,0.8)",
			fontSize: this.ft[0].fontSize
		}, this.ft[6] = {
			aH: 0,
			aJ: 0,
			aV: this.ft[1].aV,
			au: this.ft[5].au,
			f7: "Back",
			font: this.ft[0].font,
			aHK: "rgba(0,0,0,0.8)",
			fontSize: this.ft[0].fontSize
		}, this.zs()
	}, this.zs = function() {
		this.aJ = Math.floor(.54 * bN.au), this.ft[0].aH = Math.floor(.5 * bN.aV - .5 * this.aV), this.ft[1].aH = this.ft[0].aH + this.ft[0].aV + this.gap, this.ft[2].aH = this.ft[3].aH = this.ft[0].aH, this.ft[4].aH = this.ft[5].aH = this.ft[0]
			.aH, this.ft[6].aH = this.ft[1].aH, this.ft[0].aJ = Math.floor(.54 * bN.au), this.ft[1].aJ = this.ft[0].aJ, this.ft[2].aJ = Math.floor((bN.au - this.ft[2].au - this.ft[3].au - this.gap) / 2), this.ft[3].aJ = this.ft[2].aJ + this.ft[2]
			.au + this.gap, this.ft[4].aJ = Math.floor((bN.au - this.ft[4].au - this.ft[5].au - this.gap) / 2), this.ft[5].aJ = this.ft[6].aJ = this.ft[4].aJ + this.ft[4].au + this.gap
	}, this.aHL = function() {
		aHM(0), aHM(1)
	}, this.aHN = function() {
		aHM(2), aHM(3)
	}, this.aHO = function() {
		aHM(4), aHM(5), aHM(6)
	}, this.ez = function(aH, aJ, j3) {
		var aL = -1;
		return 0 === eg.f3() ? aL = this.aHP(aH, aJ, 0, 2) : 3 === eg.f3() ? aL = this.aHP(aH, aJ, 3, 1) : 5 === eg.f3() && (aL = this.aHP(aH, aJ, 5, 2)), aHF !== aL && (aHF = aL, j3) && (cH.cI = !0), -1 !== aL && (zv.reset(), !0)
	}, this.aHP = function(aH, aJ, a87, size) {
		for (var aL = a87; aL < a87 + size; aL++)
			if (aH >= this.ft[aL].aH && aJ >= this.ft[aL].aJ && aH <= this.ft[aL].aH + this.ft[aL].aV && aJ <= this.ft[aL].aJ + this.ft[aL].au) return aL;
		return -1
	}
}

function aHR(c2, c7) {
	return 0 <= c2 ? hu.hv(c2, c7) : -hu.hv(-c2, c7)
}

function ns(hm) {
	return hm * hm
}

function bk(c2, c7) {
	return c7 < c2 ? c2 : c7
}

function y2(c2, c7) {
	return c2 < c7 ? c2 : c7
}

function qg(c2, hm, c7) {
	return hm < c2 ? c2 : c7 < hm ? c7 : hm
}

function aHS(hm, aI) {
	for (var bB = hu.hv(hm + 1, 2), aL = 0; aL < aI; aL++) bB = hu.hv(bB + hu.hv(hm, bB), 2);
	return bB
}

function aHT(hm, aI) {
	return hm < 1 ? 0 : aHS(hm, aI)
}

function aHU(c4, c5, qs, qu, fE, gx, qt, a5M) {
	return !(c4 + qs <= fE || c5 + qu <= gx || fE + qt <= c4 || gx + a5M <= c5)
}

function aHV(c4, c5, qs, qu, fE, gx, qt, a5M) {
	return c4 <= fE && c5 <= gx && fE + qt <= c4 + qs && gx + a5M <= c5 + qu
}

function a9V(hm) {
	return Math.floor(!!hm * (1 + Math.log2(hm + .5)))
}

function aHW() {
	var aHX, aHY = 8,
		aHZ = null;

	function aHe(cO, c3, hy) {
		c3 *= 4;
		cO[c3] = 255, cO[1 + c3] = 255, cO[2 + c3] = hy, cO[3 + c3] = 255
	}

	function aHg(i5, aHh) {
		var aH, aJ, gz, c3, aHi, aHj, hJ = aHY,
			oz = bQ.bR.getImageData(i5, hJ, hJ),
			cO = oz.data,
			d7 = (hJ >> 1) - .5,
			aHl = bQ.oY.aHm(aHh, .5);
		for (bQ.oY.aHn(aHh, aHl, 300) || bQ.oY.aHo(aHh, 100), aJ = 0; aJ < hJ; aJ++)
			for (aH = 0; aH < hJ; aH++) aHj = (hJ - 1.5) * (hJ - 1.5) / 4, cO[c3 = 4 * (aJ * hJ + aH)] = (aHi = (gz = (gz = aH - d7) * gz + (gz = aJ - d7) * gz) <= (hJ - 4.5) * (hJ - 4.5) / 4 ? aHl : aHh)[0], cO[1 + c3] = aHi[1], cO[2 + c3] = aHi[2],
				cO[3 + c3] = aHj < gz ? 0 : 255;
		i5.putImageData(oz, 0, 0)
	}
	this.b3 = function() {
		var hy, hJ, cE, i5, oz, cO;
		(aHX = aHX || new Array(j.cW)).fill(null), hy = 255, hJ = aHY + 4, cE = bQ.bR.me(hJ, hJ), i5 = bQ.bR.getContext(cE, !0), oz = bQ.bR.getImageData(i5, hJ, hJ), aHe(cO = oz.data, hJ + 1, hy), aHe(cO, hJ + 2, hy), aHe(cO, 2 * hJ + 1, hy),
			aHe(cO, 2 * hJ - 3, hy), aHe(cO, 2 * hJ - 2, hy), aHe(cO, 3 * hJ - 2, hy), aHe(cO, hJ * (hJ - 3) + 1, hy), aHe(cO, hJ * (hJ - 2) + 1, hy), aHe(cO, hJ * (hJ - 2) + 2, hy), aHe(cO, hJ * (hJ - 2) - 2, hy), aHe(cO, hJ * (hJ - 1) - 3, hy),
			aHe(cO, hJ * (hJ - 1) - 2, hy), i5.putImageData(oz, 0, 0), aHZ = cE,
			function() {
				if (j.cu)
					for (var cE = new Array(cw.cy.length), aI = j.cW, aHc = aHX, a71 = cw.a71, aL = 0; aL < aI; aL++) {
						var a81 = a71[aL];
						cE[a81] || (cE[a81] = function(a81) {
							var cE = bQ.bR.me(aHY, aHY),
								i5 = bQ.bR.getContext(cE, !0),
								cK = h1.tD;
							return cK.set(cw.vU[a81]), aHg(i5, cK), cE
						}(a81)), aHc[aL] = cE[a81]
					}
			}()
	}, this.eD = function() {
		var aL, player, aHp, aHq, d2, aAS, aHt, aHv, aHw, gt = d8.d9.gt,
			dA = d8.d9.dA,
			dB = d8.d9.dB,
			aDa = d8.d9.aDa,
			aHx = aHX,
			aHy = j.k,
			aI = d8.d9.wr,
			aEO = bN.aV,
			aEP = bN.au,
			aDk = v.w << 4,
			al = a3D,
			e = al / aHY,
			c4 = pW / al,
			c5 = pX / al,
			gz = (aEO + pW) / al - c4,
			h0 = (aEP + pX) / al - c5,
			i5 = eF;
		for (i5.imageSmoothingEnabled = al < 9, bQ.bR.textAlign(i5, 1), bQ.bR.textBaseline(i5, 1), aL = 0; aL < aI; aL++) player = dA[aL] >> 3, d2 = dB[aL], aHp = .9 + .1 * Math.log10(d2), aHq = (aAS = gt[aL]) % aDk / 16 - aHp, aAS = aEP * (Math
			.floor(aAS / aDk) / 16 - aHp - c5) / h0, aHt = -2 * (aHw = al * aHp) * (1 + (aHv = +(player === aHy)) / 8), aHv = aHv * aHw / 4, (aHw = aEO * (aHq - c4) / gz) < aHt || aAS < aHt || aEO + aHv < aHw || aEP + aHv < aAS || (aHq = 2 *
			aHp * e, aHt = aHp * al, null === (aHv = aHx[player]) && (aHx[player] = aHv = function(player) {
				var cE = bQ.bR.me(aHY, aHY);
				return aHg(bQ.bR.getContext(cE, !0), f.tB(player)), cE
			}(player)), player === aHy && (i5.setTransform(aHq, 0, 0, aHq, aHw - 2 * aHq, aAS - 2 * aHq), i5.drawImage(aHZ, 0, 0)), i5.setTransform(aHq, 0, 0, aHq, aHw, aAS), i5.drawImage(aHv, 0, 0), (aHp = Math.floor(function(d2) {
				if (d2 < 1e3) return .42;
				if (d2 < 1e4) return .34;
				if (d2 < 1e6) return .26;
				if (d2 < 1e8) return .19;
				return .15
			}(d2) * aHt)) < 6) || (i5.setTransform(1, 0, 0, 1, 0, 0), i5.fillStyle = aDa[aL] ? bJ.tO : bJ.bL, i5.font = bQ.bR.bS(1, aHp), i5.fillText(bQ.cL.cs(d2), aHw + aHt, aAS + aHt + .1 * aHp));
		i5.imageSmoothingEnabled = !1, i5.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aI1() {
	var eW = 0,
		aI2 = !0;

	function aI3(id) {
		id = [L(361), L(362), L(363), L(364)][id];
		bp.dQ(id)
	}
	this.e6 = function() {
		var bv, fP;
		cH.bU < eW || (eW = cH.bU + 3e3, j.cp) || j.iv || bQ.by.wB(j.k) || (bv = new Date, fP = bv.getUTCSeconds(), aI2 ? fP < 43 && (aI2 = !1) : fP < 43 || (eW += 52e3, aI2 = !0, (fP = (bv.getUTCMinutes() + 2) % 60) % 10 == 0 ? j.dy < 7 && aI3(
			0) : fP % 10 == 5 ? 7 !== j.dy && 10 !== j.dy || aI3(1) : fP % 10 == 7 ? 8 === j.dy && aI3(2) : fP % 10 == 2 && 9 === j.dy && aI3(3)))
	}
}

function q4() {
	var oN, oO, ob;

	function aIB() {
		for (var colors = new Array(11), aL = 0; aL < 11; aL++) {
			var cK = hk.buffer.data[163 + aL].value.split(",");
			colors[aL] = new Uint8Array(3);
			for (var c2 = 0; c2 < 3; c2++) c2 < cK.length && (colors[aL][c2] = Number(cK[c2]))
		}
		return colors
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(365), [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})]), oO = new oS(oN.oT, ((ob = []).push(function() {
		var og = new oh;
		return og.oi(L(366)), og.vQ(el.d9.uz("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", og.vQ("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), og
	}()), ob.push(function() {
		var og = new oh,
			sf = (og.oi(L(367)), hk.buffer.data[174].value),
			a2B = og.uS(sf.length + " / 180"),
			aD2 = (a2B.style.textAlign = "center", new on(0, 1, function(l0) {
				var l0 = l0.target.value,
					aY = l0.length;
				a2B.textContent = aY + " / 180", aY <= 180 && hk.mz.gE(174, l0)
			}));
		return aD2.l0.rows = 6, aD2.l0.style.fontSize = "1em", aD2.oo(sf), og.ol(aD2), og
	}()), ob.push(function() {
		var og = new oh;
		og.oi(L(118));
		for (var aL = 0; aL < 11; aL++) {
			var aAS = og.ol(new om(hk.buffer.data[163 + aL]));
			aL && (aAS.l0.style.marginTop = "0.6em")
		}
		return og.ol(new uX([new g0(L(115), function() {
			for (var data = hk.buffer.data, aL = 163; aL < 174; aL++) data[aL] && hk.buffer.hq(aL, data[aL].xV);
			f1.oX(), f1.oW()[31] = null, f1.g9(31)
		}).button])), og
	}()), ob.push(function() {
		var og = new oh;
		return og.oi("Targeting"), og.vQ(L(116)), og.ol(new om(hk.buffer.data[175], 0, 0)), og
	}()), ob.push(function() {
		var og = new oh;
		return og.oi(L(368)), og.ol(new uX([new g0(L(155), function() {
			(new aIA).show(hk.buffer.data[174].value, aIB(), -1)
		}).button])), og
	}()), ob.push(function() {
		var og = new oh,
			aIC = (og.oi(L(369)), og.vQ(L(370)), new om(hk.buffer.data[176], 1, 0)),
			aID = (og.ol(aIC), new g0(L(371), function(l0) {
				return a27.button.textContent === L(169) && el.d9.uq(0) && (bQ.bR.mu(l0), a26(), el.a29.aBT(hk.buffer.data[176].value, aIB(), hk.buffer.data[175].value, hk.buffer.data[174].value)), !0
			}, 1)),
			a26 = function() {
				a27.button.textContent = L(168), aID.r2(1), aID.button.style.color = bJ.bL
			},
			a27 = new g0(L(168), function(l0) {
				return l0.textContent === L(168) ? (l0.textContent = L(169), aID.r2(0), aID.button.style.color = bJ.dT) : a26(), !0
			});
		return og.ol(new uX([a27.button, aID.button])), og
	}()), ob))
}

function px() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 === j.data.playerNamesType && 1 === bQ.oY.tE(j.data.playerNamesData).length && (j.data.playerNamesType = 0), 2 !== j.data.playerNamesType && (j.data.playerNamesData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.playerNamesType && bQ.oY.aIE(oP.oa(), j.data.playerNamesData, 20)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(372), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(373), L(374), L(75)],
			value: j.data.playerNamesType
		}, function(hy) {
			oV(), j.data.playerNamesType = hy, f1.g9(23)
		})), og.ol(new aCW), og.ol(new uV({
			value: j.data.selectableName
		}, L(375), function(value) {
			j.data.selectableName = value
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og;
		2 === j.data.playerNamesType && ((og = new oh).oi("Data"), oP = new on(0, 1, 0, 1), j.data.playerNamesData && j.data.playerNamesData.length === j.cW || (j.data.playerNamesData = new Array(j.cW), j.data.playerNamesData.fill("")),
			oP.oo(bQ.cL.op(j.data.playerNamesData, 1, '"')), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function aIF() {
	function aIH(key) {
		var a7K;
		return "undefined" == typeof URLSearchParams || (a7K = window.location.search, "string" != typeof(a7K = new URLSearchParams(a7K).get(key))) || a7K.length < 1 ? null : iP.iV.yI(a7K, 5)
	}
	this.uK = function() {
		if (0 !== b4.id) return !1;
		if (! function() {
				var value = aIH("account");
				if (!value && !(value = aIH("a"))) return void aCA.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (aCA.clear(), f1.g9(8, f1.mQ, new gA(1e3, {
					action: 0,
					jQ: value,
					a5i: 0
				})), !0) : (aCA.clear(), !1)
			}()) {
			var value = aIH("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			f1.g9(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a4u = new URL(window.location.href);
		a4u.search = "";
		try {
			return history.replaceState(null, "", a4u.toString()), !0
		} catch (l0) {
			console.log("error 352: " + l0)
		}
		return !1
	}, this.aDJ = function(key, value) {
		if (0 === b4.id) try {
			var a4u = new URL(window.location.href),
				aP = a4u.searchParams;
			aP.set(key, value), a4u.search = aP.toString(), history.replaceState(null, "", a4u.toString())
		} catch (l0) {
			console.log("error 358: " + l0)
		}
	}
}

function aIJ() {
	var at, hl, xz, aIK, au, bP, fontSize, aIL, aIM, aIN, aIO, canvas, be, y0, aIP;

	function oa(aL) {
		return L(0 === aL ? 376 : 1 === aL ? 377 : 2 === aL ? 378 : 379)
	}

	function aIV() {
		j.cu ? a6I + 4 * bT.gap + au + li.aIW() > bn.aJ ? eF.drawImage(canvas, 2 * bT.gap + li.aIW(), a6I + 2 * bT.gap) : eF.drawImage(canvas, bT.gap, a6I + 3 * bT.gap + li.aIW()) : eF.drawImage(canvas, bT.gap, a6I + 2 * bT.gap)
	}

	function aIQ() {
		canvas.width = at[0].width + aIN, canvas.height = au + aIN, (be = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, at[0].width + aIN, au + aIN), be.translate(Math.floor(aIN / 2), Math.floor(aIN / 2)), be.lineWidth = aIN, be.fillStyle = 1 === at[0].aIU ? bJ.aIX : bJ.bK, aIY(), be.fill(), be.strokeStyle = 1 === at[0].aIU ? bJ.dP : bJ
			.bL, aIY(), be.stroke(), bQ.bR.textAlign(be, 1), bQ.bR.textBaseline(be, 1), be.fillStyle = 1 === at[0].aIU ? bJ.dP : bJ.bL, be.font = bP[0], be.fillText(oa(at[0].aIT), Math.floor(at[0].width / 2), Math.floor(.72 * aIL[0] * au)), be.font =
			bP[1], be.fillText(at[0].bV, Math.floor(at[0].width / 2), Math.floor((aIL[0] + .48 * aIL[1]) * au))
	}

	function aIY() {
		be.beginPath(), be.moveTo(aIO, 0), be.lineTo(at[0].width - aIO, 0), be.lineTo(at[0].width, aIO), be.lineTo(at[0].width, au - aIO), be.lineTo(at[0].width - aIO, au), be.lineTo(aIO, au), be.lineTo(0, au - aIO), be.lineTo(0, aIO), be.closePath()
	}
	this.b3 = function() {
		hl = 4, xz = aIK = y0 = 0, at = [], bP = new Array(2), fontSize = new Array(2), (aIL = new Array(2))[0] = .3, aIL[1] = .7, aIM = new Array(4), canvas = document.createElement("canvas"), aIP = cH.bU + 2e3, this.resize()
	}, this.resize = function() {
		var aL, aV;
		for (au = Math.floor((b4.b5.b6() ? .062 : .047) * bN.bO), fontSize[0] = Math.floor(.85 * aIL[0] * au), fontSize[1] = Math.floor(.85 * aIL[1] * au), bP[0] = bQ.bR.bS(1, fontSize[0]), bP[1] = bQ.bR.bS(1, fontSize[1]), aL = aIM.length -
			1; 0 <= aL; aL--) aIM[aL] = this.measureText(oa(aL) + "000", bP[0]);
		if (aIN = Math.floor(1 + .05 * au), aIO = Math.floor(.2 * au), 0 < at.length) {
			for (aL = at.length - 1; 0 <= aL; aL--) aV = this.measureText(at[aL].bV + "00", bP[1]), at[aL].width = aV < aIM[aL] ? aIM[aL] : aV;
			aIQ()
		}
	}, this.e6 = function() {
		0 !== hl && (4 === hl ? cH.bU > aIP && (hl = 0, 1 === j.e5) && bd.dL(v.dp.dq[v.dr].name, 3, 1, 9) : (1 === hl ? (0 === xz && (aIQ(), xz = 1e-4), 1 <= (xz += .002 * (cH.bU - y0)) && (aIK = 0, hl = 2, xz = 1), cH.cI = !0) : 2 === hl ? ((
			aIK += (cH.bU - y0) / 1e3) > at[0].b9 || 1 < aIK && 1 < at.length) && (hl = 3) : 3 === hl && ((xz -= .002 * (cH.bU - y0)) <= 0 && (xz = 0, at.shift(), hl = 0 < at.length ? 1 : 0), cH.cI = !0), y0 = cH.bU))
	}, this.measureText = function(bV, bP) {
		return eF.font = bP, Math.floor(eF.measureText(bV).width)
	}, this.cR = function(sD, aL) {
		this.dL(cT.cU[sD], aL, 1, 0 === aL ? 3 : 7)
	}, this.dL = function(bV, aIT, aIU, b9) {
		var aV;
		bV.length && (aV = (aV = this.measureText(bV + "00", bP[1])) < aIM[aIT] ? aIM[aIT] : aV, at.push({
			bV: bV,
			width: aV,
			aIT: aIT,
			aIU: aIU,
			b9: b9
		}), 0 === hl) && (xz = 0, hl = 1, y0 = cH.bU)
	}, this.eD = function() {
		0 !== hl && 0 !== xz && (xz < 1 ? (eF.globalAlpha = xz, aIV(), eF.globalAlpha = 1) : aIV())
	}
}

function q2() {
	var aIZ, aIa, aId, aIg, aIh, aIb = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aIc = new Array(4),
		aIe = new Array(2),
		aIf = [L(17), L(182), L(380), L(381)];

	function wN() {
		var f7;
		!jl.aBc || (f7 = aIZ.aIr.uc.l0.value.trim().slice(0, 127)).length < 1 || (aIZ.aIr.uc.l0.value = "", jl.a5m.d(f7))
	}

	function aIm(aIs) {
		jl.d9.aIp[3] = 1 - jl.d9.aIp[3], aIo(3, 1, jl.d9.aIp[3]), aIs && el.ep.wY(4), jl.d9.aIp[3] && hk.mz.gE(158, jl.d9.aIp[0])
	}

	function aIi(c2, c7) {
		jl.d9.aIp[c2] !== c7 && (0 === c2 && jl.d9.aIp[3] && aIm(0), aIo(c2, jl.d9.aIp[c2], 0), aIo(c2, c7, 1), jl.d9.aIp[c2] = c7, 0 === c2 ? (el.ep.wY(2, c7), jl.d9.aIp[2] ? (aIZ.aIu.qS(), aIZ.aIr.reset(1)) : aIZ.aIr.reset(0), f1.mR().aIv(), f1
		.mR().aIw()) : 2 === c2 && (0 === c7 ? (el.ep.wY(0), aIZ.aIr.qS(), aIZ.aIx()) : (el.ep.wY(1), aIZ.aIu.qS(), aIZ.aIy())))
	}

	function aIo(c2, c7, color) {
		aIZ.aIz[c2].ft[c7].r2(color ? bJ.qq : bJ.aIj)
	}

	function aJ2(dr) {
		return v.dp.xe[dr]
	}

	function aJ3(aDL) {
		return aDL < 7 ? "   " + (aDL + 2) + " Teams" : 10 === aDL ? "   No Full-Sending" : ""
	}

	function aJ4(aDQ, aJG) {
		return aJG ? aDQ <= 90 && 60 < aDQ ? "   Contest" : "" : aDQ <= 60 ? "   Contest" : ""
	}
	this.lv = function() {
		return aIZ.aIr
	}, this.a5m = function(jQ) {
		aIi(2, 0);
		var bV = aIZ.aIr.uc.l0.value,
			jQ = "@" + jQ + " ";
		bV.length && !bQ.cL.mv(bV, " ") && (jQ = " " + jQ), aIZ.aIr.uc.l0.value = bV += jQ, aIZ.aIr.uc.l0.focus()
	}, this.aJ0 = function() {
		aIZ.aIu.qS()
	}, this.aIv = function() {
		var aJ1 = jl.d9.aIp[0],
			aJ1 = jl.d9.jy[aJ1],
			c7 = (v.kT(aJ1.dr, aJ1.mapSeed), aIa.ft),
			dm = aJ2(aJ1.dr, aJ1.mapSeed) + aJ3(aJ1.aDL) + aJ4(aJ1.aDQ),
			aJ1 = L(386) + "   " + aJ2(aJ1.aDM, aJ1.aDN) + aJ3(aJ1.aDO) + aJ4(aJ1.aDQ, 1);
		c7[0].button.textContent === dm && c7[1].button.textContent === aJ1 || (c7[0].button.textContent = dm, c7[1].button.textContent = aJ1, aIa.resize())
	}, this.aIw = function() {
		var aJ1 = jl.d9.aIp[0],
			aGa = jl.d9.jy[aJ1];
		aIZ.aJ6(aGa.fA);
		for (var hm, fO, aL = 0; aL < jl.jm.jk.length; aL++) aIb[0][aL].gI.textContent = jl.jm.jk[aL].length, aIb[1][aL].gI.textContent = (hm = jl.d9.jy[aL].aDQ, fO = void 0, ((fO = hu.hv(hm, 60)) < 10 ? "0" : "") + fO + ":" + ((hm %= 60) < 10 ?
			"0" : "") + hm);
		var aGa = jl.jm.jk[aJ1],
			aJ8 = aGa.length,
			aJ9 = jl.jm.aJA[aJ1];
		aIb[2][1].gI.textContent = "" + aJ8, aIb[3][1].gI.textContent = "" + aJ9;
		for (aL = 0; aL < 4; aL++) {
			var aJB = jl.d9.jy[aL];
			aIc[aL] ? 0 === aJB.fA && (aIc[aL].gI.textContent = v.dp.xe[aJB.dr]) : aIc[aL] = new o3(v.dp.xe[aJB.dr], aIg.ft[aL].button, 1, 1), bQ.cL.startsWith(aIf[aL], "🏆 ") ? aJB.aDP || (aIf[aL] = aIf[aL].substring(3), aIg.ft[aL].button
				.textContent = aIf[aL], aIg.ft[aL].button.appendChild(aIb[1][aL].gI), aIg.ft[aL].button.appendChild(aIb[0][aL].gI), aIg.ft[aL].button.appendChild(aIc[aL].gI)) : aJB.aDP && (aIf[aL] = "🏆 " + aIf[aL], aIg.ft[aL].button
				.textContent = aIf[aL], aIg.ft[aL].button.appendChild(aIb[1][aL].gI), aIg.ft[aL].button.appendChild(aIb[0][aL].gI), aIg.ft[aL].button.appendChild(aIc[aL].gI))
		}
		var aJC = "",
			aJD = "";
		0 === aJ1 && (aJC = jl.ge.jp(aGa, 0, aJ8), aJD = jl.ge.jp(aGa, 0, aJ9)), aId[0].gI.textContent = aJC, aId[1].gI.textContent = aJD, aIe[1].gI.textContent = "MP: " + jl.d9.aJE[0] + "   SP: " + jl.d9.aJE[1] + "   Lobby: " + bQ.oY.aJF(jl.jm
			.jk)
	}, this.aJH = function() {
		aIZ.aIr.qS()
	}, this.show = function() {
		jl.d9.aJI++, aIZ.show(), this.resize(), jl.message.show()
	}, this.gG = function() {
		aIZ.gG(), jl.l1.gG(), jl.l5.gG(), jl.message.gG()
	}, this.resize = function() {
		aIZ.resize(1 - jl.d9.aIp[2]), jl.message.resize()
	}, this.oq = function(bB) {
		2 === bB ? jl.d9.aIp[3] ? aIm(1) : aIZ.aIz[3].ft[0].os() : bB < 2 && aIm(1)
	}, aIg = new aFe([new g0(aIf[0], function() {
		return aIi(0, 0), 2
	}), new g0(aIf[1], function() {
		return aIi(0, 1), 2
	}), new g0(aIf[2], function() {
		return aIi(0, 2), 2
	}), new g0(aIf[3], function() {
		return aIi(0, 3), 2
	})], bJ.aIj), (aIa = new aFe([new g0("", 0, 2), new g0("", 0, 2)], bJ.aIk, 1)).kp.translate = !1;
	var aIl = new aFe([new g0(L(382), function() {
		return aIi(2, 0), 2
	}), new g0(L(383), function() {
		return aIi(2, 1), 2
	})], bJ.aIj);
	aIh = new aFe([new g0(L(384, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			f1.q7(), jl.iA(), el.d9.f0(3240), __fx.customLobby.setActive(false), f1.g9(5, 5)
		}),
		function() {
			f1.q7(), jl.iA(), el.d9.f0(3240), __fx.customLobby.setActive(false), f1.g9(5, 5)
		})), new g0(L(385), function() {
		return aIm(1), 2
	})], bJ.aIj), aIZ = new aIn(aIg, aIa, aIl, aIh, wN, jl.l1.l2);
	for (var aL = 0; aL < 4; aL++) aIb[0][aL] = new o3("0", aIg.ft[aL].button), aIb[1][aL] = new o3("0", aIg.ft[aL].button, 1);
	aIb[2][1] = new o3("0", aIl.ft[1].button), aIb[3][1] = new o3("0", aIh.ft[1].button), (aId = [new o3("", aIl.ft[1].button, 1, 1), new o3("", aIh.ft[1].button, 1, 1)])[0].gI.style.bottom = "0em", aId[1].gI.style.bottom = "0em", aId[0].gI
		.translate = !1, aId[1].gI.translate = !1, aIo(0, jl.d9.aIp[0], 1), aIo(2, jl.d9.aIp[2], 1), (aIe = [new o3(L(120), aIZ.aIq(), 1, 0), new o3("", aIZ.aIq(), 1, 1)])[0].gI.style.fontSize = "0.4em", aIe[1].gI.style.fontSize = "0.4em"
}

function q3() {
	var oN, aJJ = !0;

	function aJN(aJM, ri) {
		var kp = document.createElement("div"),
			aJO = document.createElement("span"),
			aJP = document.createElement("span");
		aJO.textContent = gZ.aJQ(ri.bU) + ":", aJO.style.color = bJ.jE, aJO.style.paddingRight = "0.4em", aJO.style.display = "table-cell", aJO.style.width = "6ch", aJO.style.textAlign = "end", kp.appendChild(aJO), aJP.textContent = ri.bV, kp
			.appendChild(aJP), kp.style.display = "table", ri.dF && function(kp, dF) {
				{
					var ia;
					dF >= 1024 - cN.hb.hc ? ((ia = document.createElement("img")).src = cN.cO.hN[dF - 1024 + cN.hb.hc].toDataURL(), ia.style.width = "1.5em", ia.style.height = "1.5em", ia.style.verticalAlign = "middle", kp.appendChild(ia)) : ((ia =
						document.createElement("span")).textContent = cN.hb.i6(dF), ia.style.display = "inline-block", ia.style.fontSize = "1.5em", ia.style.lineHeight = "1em", ia.style.verticalAlign = "middle", kp.appendChild(ia))
				}
			}(kp, ri.dF), aJM.appendChild(kp)
	}

	function aJL() {
		aJJ && (oN.oT.scrollTop = oN.oT.scrollHeight)
	}
	this.clear = function() {
		oN.oT.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var at = cJ.a15(), aI = at.length, aJM = document.createDocumentFragment(), aL = 0; aL < aI; aL++) aJN(aJM, at[aL]);
		oN.oT.appendChild(aJM), aJL(), oN.show(), this.resize(), aJJ = !0, aJL()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oN.oT.style.padding = "0.4em " + bQ.bR.fy(bT.rH)
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, this.cA = function(ri) {
		var aJM = document.createDocumentFragment();
		aJN(aJM, ri), oN.oT.appendChild(aJM), aJL()
	}, (oN = new oQ(L(387), [new g0("⬅️ " + L(61), function() {
		f1.q6(1)
	})])).oT.style.overflowY = "auto", oN.oT.addEventListener("scroll", function() {
		aJJ = oN.oT.scrollTop >= oN.oT.scrollHeight - oN.oT.clientHeight - 2
	})
}

function om(a6E, type, aJS, aJT) {
	var l0;
	this.l0 = document.createElement("input"), (l0 = this.l0).type = type ? "number" : "text", l0.id = "input" + f1.d9.z2++, l0.value = a6E.value, l0.style.width = "100%", l0.style.userSelect = "none", l0.style.outline = "none", l0.style.resize =
		"none", l0.style.border = "inherit", l0.style.font = "inherit", l0.style.color = bJ.bL, l0.style.backgroundColor = bJ.z3, l0.style.fontSize = "1em", l0.style.padding = "0.1em 0.2em", l0.addEventListener("focus", function() {
			bN.z4++
		}), l0.addEventListener("blur", function() {
			bN.z4--, -1 !== a6E.hy && hk.mz.gE(a6E.hy, l0.value)
		}), l0.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a6E.hy && hk.mz.gE(a6E.hy, l0.value), aJS ? aJS() : l0.blur())
		}), aJT && l0.addEventListener("input", function(cF) {
			aJT(cF)
		})
}

function aIA() {
	var aJU, a8b, aJV;

	function aJb(aL) {
		return bQ.color.aJn(a8b[aL][0], a8b[aL][1], a8b[aL][2])
	}

	function yT(c2, c7) {
		return bQ.color.aJo(a8b[c2], a8b[c7]), aJb(c7)
	}

	function aJZ() {
		aJU && (aJU.remove(), aJU = null)
	}
	this.show = function(sf, colors, id) {
		0 <= (aJV = id) && el.d9.uq(0) && el.v7.aEh(0, id), sf = (sf = (sf = (sf = (sf = (sf = (sf = (sf = (sf = (sf = (sf = (sf = sf.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			a8b = colors, (aJU = document.createElement("div")).style.position = "fixed", aJU.style.top = "0", aJU.style.left = "0", aJU.style.width = "100%", aJU.style.height = "100%", aJU.style.backgroundColor = bQ.color.tC(a8b[0][0], a8b[0][
				1], a8b[0][2], .6), aJU.style.zIndex = "6", aJU.onclick = function(l0) {
				l0.target === aJU && aJZ()
			},
			function(sf) {
				var hJ, aJa = document.createElement("div");
				aJa.style.position = "absolute", aJa.style.display = "flex", aJa.style.flexDirection = "column", aJa.style.top = "50%", aJa.style.left = "50%", aJa.style.backgroundColor = aJb(2), hJ = b4.b5.b6() ? bQ.bR.mo(bN.min) : bQ.bR.lV(.4);
				hJ = Math.max(hJ, 200), aJa.style.width = bQ.bR.fy(hJ), aJa.style.height = bQ.bR.fy(hJ), aJa.style.transform = "translate(-50%, -50%)",
					function(aJa, hJ) {
						var aJf = document.createElement("div");
						aJf.style.flex = "0 0 10%", aJf.style.overflow = "hidden", aJf.style.backgroundColor = aJb(1), aJf.style.color = yT(1, 7), aJf.style.font = bQ.bR.bS(1, .05 * hJ), aJf.style.display = "flex", aJf.style.alignItems =
							"center", aJf.style.justifyContent = "center", aJf.innerHTML = L(388), aJa.appendChild(aJf)
					}(aJa, hJ),
					function(aJa, sf, hJ) {
						var aJg = document.createElement("div");
						aJg.style.flex = "0 0 70%", aJg.style.overflowY = "auto", aJg.style.overflowX = "hidden", aJg.style.whiteSpace = "pre-wrap", aJg.style.wordWrap = "break-word", aJg.style.padding = bQ.bR.fy(.02 * hJ), aJg.style
							.backgroundColor = aJb(2), aJg.style.color = yT(2, 8), aJg.style.font = bQ.bR.bS(0, .07 * hJ), aJg.innerHTML = sf, aJg.innerHTML = "<style>a { color: inherit; }</style>" + aJg.innerHTML, aJa.appendChild(aJg)
					}(aJa, sf, hJ),
					function(aJa, hJ) {
						var qA = document.createElement("div"),
							aJh = (qA.style.display = "flex", qA.style.flexDirection = "row", qA.style.justifyContent = "space-between", qA.style.alignItems = "stretch", qA.style.backgroundColor = aJb(3), qA.style.flex = "1", qA.style.padding =
								bQ.bR.fy(.01 * hJ), qA.style.gap = bQ.bR.fy(.01 * hJ), document.createElement("div")),
							aJi = (aJh.style.flex = "0 0 60%", aJh.style.height = "100%", new g0(L(384, 0, 0, 1), function() {
								aJZ()
							}, aJb(4), !1)),
							aJi = (aJi.button.style.width = "100%", aJi.button.style.height = "100%", aJi.button.style.color = yT(4, 9), aJi.button.style.font = bQ.bR.bS(1, .05 * hJ), aJh.appendChild(aJi.button), document.createElement("div")),
							aJk = (aJi.style.flex = "0 0 15%", aJi.style.height = "100%", aJi.style.backgroundColor = aJb(5), document.createElement("div")),
							aJl = (aJk.style.flex = "1", aJk.style.height = "100%", new g0(L(389), function(l0) {
								return bQ.bR.mu(l0), aJV < 0 || el.d9.uq(0) && (el.v7.aEh(1, aJV), aJV = -1), !0
							}, aJb(6), !1));
						aJl.button.style.width = "100%", aJl.button.style.height = "100%", aJl.button.style.color = yT(6, 10), aJl.button.style.font = bQ.bR.bS(1, .035 * hJ), aJk.appendChild(aJl.button), qA.appendChild(aJh), qA.appendChild(aJi),
							qA.appendChild(aJk), aJa.appendChild(qA)
					}(aJa, hJ), aJU.appendChild(aJa)
			}(sf), document.body.appendChild(aJU)
	}
}

function aJp() {
	this.vC = !1, this.e6 = function() {
		cH.e1() % 250 != 249 || j.cp || (el.v7.aEl(+(this.vC && cT.iw[j.k]), eA.eB + d8.d9.wr), this.vC = !1)
	}
}

function aJq() {
	this.i1 = new aJr, this.by = new aJs, this.wu = new a0I, this.aBv = new wg, this.aB2 = new aJt
}

function aJu() {
	var aV, au, aJv;

	function aK6(e3, a0, aK4, aJy, cO) {
		a0 = aK5(e3, a0 + 1 + 2 * aJy & 3);
		! function(e3, bY) {
			return 1 < Math.abs(e3 % aV - bY % aV) || 1 < Math.abs(aK9(e3) - aK9(bY))
		}(e3, a0) && 0 === cO[a0 << 2] && (cO[a0 << 2] = aK4)
	}

	function aK9(aP) {
		return Math.floor((aP + .5) / aV) % au
	}

	function aK5(aP, a0) {
		return aP + aJv[a0]
	}
	this.pB = function(bV) {
		var aL, a2y, aI, aJw, pC = pD;
		for (iP.iV.a6B(iP.iV.u9(bV)), v.dp.dq[v.dr].aV = v.w = aV = pC.iB(12), v.dp.dq[v.dr].au = v.y = au = pC.iB(12), aJv = [-aV, -1, aV, 1], v.x5 = document.createElement("canvas"), v.x5.width = v.w, v.x5.height = v.y, v.kZ = v.x5.getContext(
				"2d", {
					alpha: !1
				}), v.ka = v.aU = null, v.ka = v.kZ.getImageData(0, 0, v.w, v.y), v.aU = v.ka.data, bQ.oY.aBJ(v.aU), aI = pC.iB(12), a2y = pC.iB(5), aJw = a9V(aV * au - 1), aL = 0; aL < aI; aL++) ! function(d7, aP, aJx, aJy) {
			var aL, a0, pC = pD,
				cO = v.aU,
				aGC = aP,
				aK1 = aP,
				aK2 = 0,
				aK3 = 1 + aJx,
				aK4 = 2 - aJx;
			for (cO[aP << 2] = aK3, aL = 0; aL < d7; aL++) a0 = pC.iB(2), aP = aK5(aP, a0), cO[aP << 2] === aK3 ? aK2 % 2 == 1 && aK6(aK1, aK2 + 2 * aJy + 3, aK4, aJy, cO) : cO[aP << 2] = aK3, aK6(aP, a0, aK4, aJy, cO), aK6(aK1, a0, aK4, aJy,
				cO), aK1 = aP, aK2 = a0;
			aK5(aP, 0) === aGC ? (aK6(aP, 0, aK4, aJy, cO), aK6(aGC, 0, aK4, aJy, cO)) : aK5(aP, 1) === aGC && (aK6(aP, 0, aK4, aJy, cO), aK6(aGC, 2, aK4, aJy, cO));
			0 === d7 && (aK6(aGC, 0, aK4, aJy, cO), aK6(aGC, 2, aK4, aJy, cO))
		}(pC.iB(a2y), pC.iB(aJw), 1 === pC.iB(1), 1 === pC.iB(1));
		var aH, aJ, i3, aKA, aKB, aKC, cO = v.aU,
			aKD = !0,
			kK = v.dp.dq[v.dr].kK,
			kL = v.dp.dq[v.dr].kL;
		for (aJ = 0; aJ < au; aJ++)
			for (aKA = !0, aKB = aKD, aH = aKC = 0; aH < aV; aH++) i3 = 4 * aJ * aV + 4 * aH, aKC <= aH && 0 < cO[i3] && (aKB = 2 === cO[i3], aKA) && (aKA = !1, aKB !== aKD) ? (aKD = aKB, aKC = aH + 1, aH = -1) : (aKB ? (cO[i3] = kL[0], cO[1 +
				i3] = kL[1], cO[2 + i3] = kL[2]) : (cO[i3] = kK[0], cO[1 + i3] = kK[1], cO[2 + i3] = kK[2]), cO[3 + i3] = 255);
		v.kZ.putImageData(v.ka, 0, 0), v.x6 = !0, v.kO.b3(), cH.cI = !0
	}
}

function aCW() {
	var l0;
	this.l0 = document.createElement("hr"), this.resize = function() {
		bQ.bR.gL(this.l0, 8, bJ.tN)
	}, (l0 = this.l0).style.marginBottom = l0.style.marginTop = "0.65em", l0.style.marginLeft = l0.style.marginRight = "-4%", l0.style.border = "none"
}

function aBg() {
	var aKE = [],
		aKF = [],
		aKG = 0;

	function aKH(cK, dm, aJ5, aKL) {
		var aI = cK.length;
		if (0 === aI) return "";
		var bV = "@" + cK[0];
		if (1 === aI) return bV + dm + aKL;
		for (var aL = 1; aL < aI - 1; aL++) bV += ", @" + cK[aL];
		return bV + " and @" + cK[aI - 1] + aJ5 + aKL
	}
	this.b3 = function() {
		var bV = aKH(aKF, " is", " are", " in the lobby.");
		bV.length && jl.message.lt({
			id: 7,
			cC: bV
		}), aKE = [], aKF = [], aKG = 0
	}, this.aKI = function(aKJ) {
		return jl.aBY !== aKJ && (aKJ = iU.iV.cs(aKJ, 5), !!hk.xt.kz(aKJ)) && (aKF.push(aKJ), !0)
	}, this.join = function(player) {
		jl.aBY !== player.jQ && (player = iU.iV.cs(player.jQ, 5), hk.xt.kz(player)) && aKE.push(player)
	}, this.aKK = function() {
		var dm, aJ5;
		++aKG < 3 || (aKG = 0, dm = aKH(aKF, "", "", " entered the lobby!"), (dm = (aJ5 = aKH(aKE, "", "", " joined a game!")).length ? dm.length ? dm + " " + aJ5 : aJ5 : dm).length && jl.message.lt({
			id: 7,
			cC: dm
		}), aKE = [], aKF = [])
	}
}

function aKO(title, rF, aKP) {
	var uL, aKQ;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), aKQ.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, aKP = aKP || [new g0("⬅️ " + L(61), function() {
		f1.oX()
	}, bJ.a4z)], uL = new oQ(title, aKP), aKQ = new rD(uL.oT, rF), bQ.bR.textAlign(uL.oT.style, 1)
}

function aKR() {
	this.aKS = function() {
		for (var id = pD.iB(20), colors = new Array(11), aL = 0; aL < 11; aL++) colors[aL] = new Uint8Array([pD.iB(8), pD.iB(8), pD.iB(8)]);
		var sf = iP.yD.pB(8);
		ee.kj.cR({
			id: id,
			colors: colors,
			sf: sf
		})
	}, this.aKT = function(es) {
		var aEc = pD.iB(3),
			a0 = pD.iB(5),
			a0 = rO.qC.a5N(a0, pD.iB(30), pD.iB(30), pD.iB(30));
		el.v7.aEb(es, a0, aEc, 0)
	}, this.aKU = function(es) {
		this.aKT(es), hk.mz.gE(183, iU.iV.iW(iU.iV.iX(15))), 0 === es && 0 === hk.buffer.data[105].value.length ? el.v7.aEg(0) : el.a29.aBQ(es), 4 === el.d9.up(es).aKV() ? 6 === eg.f3() && el.ep.eq(es) : 5 !== el.d9.up(es).aKV() || 8 !== eg
		.f3() && 10 !== eg.f3() || el.dD.aGd()
	}, this.aKW = function(es) {
		var id = pD.iB(6);
		1 === id ? (hk.mz.gE(160, pD.iB(30)), el.d9.v9(es), zv.zk || el.v7.aEg(1), uQ.aKX(), 8 === f1.mQ && f1.mR().aKY()) : 21 === id ? 8 === f1.mQ && f1.mR().aKZ(17) : 22 === id && (hk.mz.gE(106, hk.buffer.data[110].value), hk.mz.gE(110, ""),
			8 === f1.mQ) && f1.mR().aKZ(15)
	}, this.aKa = function() {
		var aI = pD.iB(16),
			aKb = pD.iB(16);
		if (pD.iE(55 + 10 * aI + 16 * aKb)) {
			for (var cK = [], aL = 0; aL < aI; aL++) cK.push(iP.iQ.iR(pD.iB(10)));
			uQ.aKc(cK)
		} else el.d9.vE(0, 3270)
	}, this.aKd = function(es) {
		for (var aEc = pD.iB(3), a0 = pD.iB(5), aEc = {
				aEc: aEc,
				rB: rO.qC.a5N(a0, pD.iB(30), pD.iB(30), pD.iB(30))
			}, a0 = pD.iD(32), aKe = [], aL = 0; aL < 17; aL++) aKe.push(new Uint8Array(pD.iB(16)));
		for (aL = 0; aL < 17; aL++)
			for (var cK = aKe[aL], aI = cK.length, i3 = 0; i3 < aI; i3++) cK[i3] = pD.iD(8);
		a1s.show(aKe, a0, es, aEc)
	}
}

function aKf() {
	this.cK = new Array(4), this.aKg = new Uint16Array(2), this.lk = new Uint16Array(2), this.aKh = new Int32Array(2), this.nO = new Uint32Array(2), this.aKi = new Uint32Array(2), this.tD = new Uint8Array(4), this.aKj = new Uint8Array(4), this.a0l =
		new Uint32Array(4), this.aKk = new Uint32Array(5), this.nF = new Uint32Array(8), this.h2 = new Uint32Array(8), this.aKl = new Uint16Array(16), this.ll = new Uint16Array(512), this.aKm = new Uint16Array(512), this.aKn = new Uint16Array(512),
		this.aKo = new Uint16Array(0), this.b3 = function() {
			var aI = v.w * v.y;
			this.aKo.length !== aI && (this.aKo = new Uint16Array(aI))
		}, this.aKp = function(cK, aQ) {
			return cK[0] = aQ, cK
		}, this.aKq = function(cK, aQ, ws) {
			return cK[0] = aQ, cK[1] = ws, cK
		}, this.aKr = function(cK, aQ, ws, wt) {
			return cK[0] = aQ, cK[1] = ws, cK[2] = wt, cK
		}, this.aKs = function(cK, aQ, ws, wt, aKt) {
			return cK[0] = aQ, cK[1] = ws, cK[2] = wt, cK[3] = aKt, cK
		}
}

function aKu() {
	this.b3 = function() {
		8 === j.dy && bp.dM()
	}, this.aKv = function(aKw) {
		var elo = j.data.elo,
			e8 = (elo[aKw] - elo[1 - aKw]) / 10,
			e8 = 8 / (1 + Math.pow(2, e8 / 32)),
			e8 = Math.floor(10 * e8 + .5),
			aKy = elo[aKw] + e8,
			dV = this.dO(aKy),
			elo = this.dO(elo[1 - aKw] - e8),
			e8 = (0 === aKw ? bp.dU(dV, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : bp.dU(elo, dV, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aKy * hu.sqrt(aKy) >> 8),
			elo = ((1 + j.bG) * e8 / 100).toFixed(2);
		aKw === j.k ? bp.cA(640, L(390, [elo]), 40, 0, bJ.bL, bJ.bK, -1, !1) : bp.cA(640, L(391, [cT.cU[aKw], elo]), 40, 0, bJ.bL, bJ.bK, -1, !1)
	}, this.dO = function(elo) {
		return 16e3 === (elo = hu.hz(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function po() {
	var uL, uM, ob, aL1 = -1;
	this.show = function() {
		uL.show(), this.resize(), aL1 = hk.buffer.data[125].value
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), uM.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(392), [new g0("⬅️ " + L(61), function() {
		aL1 !== hk.buffer.data[125].value ? f1.d9.aL2() : f1.q6(13)
	})]), uM = new oS(uL.oT, ((ob = []).push(function() {
		var og = new oh,
			aCV = (og.oi(L(393)), og.uS(L(394)), new g0(L(343), function() {
				hk.mz.gE(130, 0), f1.d9.aL2()
			}, 0, 0, 1)),
			uc = new om(hk.buffer.data[126], 0, function() {
				aCV.button.click()
			});
		return og.ol(uc), uc.l0.placeholder = "a,b,c", uc.l0.style.marginTop = "0.5em", og.ol(new uX([aCV.button])), og
	}()), ob.push(function() {
		var og = new oh,
			aCV = new g0(L(343), function() {
				hk.mz.gE(130, 1), f1.d9.aL2()
			}, 0, 0, 1),
			aEw = new om(hk.buffer.data[129], 1, function() {
				aEw.l0.focus()
			}),
			aEx = new om(hk.buffer.data[128], 1, function() {
				aCV.button.click()
			});
		return og.oi(L(341)), og.ol(aEx), aEx.l0.style.marginBottom = "0.5em", og.oi(L(342)), og.ol(aEw), og.ol(new uX([aCV.button])), og
	}()), ob.push(function() {
		var og = new oh;
		return og.oi(L(395)), hk.buffer.data[125].n3 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], og.oj(new ok(hk.buffer.data[125])), og
	}()), ob.push(function() {
		var og = new oh;
		return og.oi(L(396)), og.ol(new uV(hk.buffer.data[127], L(397))), og
	}()), ob))
}

function aL6() {
	var aL7 = new Uint16Array(j.cW),
		aL8 = 0;

	function aLC(dE, aLA) {
		var bB = cH.e1();
		return 3213 <= bB ? 4 + hu.hv(100 * aLA, a0V.aAm(dE)) : (dE = 1 + hu.hv(j.w1, 300), bB < 357 ? 2 + hu.hv(100 * aLA, dE) : bB < 714 ? 2 + hu.hv(100 * aLA, 4 * dE) : bB < 1071 ? 2 + hu.hv(100 * aLA, 10 * dE) : bB < 2142 ? 2 + hu.hv(100 * aLA,
			30 * dE) : 2 + hu.hv(100 * aLA, 100 * dE))
	}

	function aLB(dE) {
		return j.iv || 4284 <= cH.e1() || bQ.by.cZ(dE)
	}
	this.b3 = function() {
		aL7.fill(0), aL8 = 15
	}, this.a8P = function(a0Q) {
		var player = j.k;
		return !!bQ.by.a0R(player, a0Q) && !(!bQ.by.a0S(player, bQ.by.a0T(player, bn.tf()), a0Q) || (player = a0Q, a0Q = h1.nO[0], !aLB(player) && aL7[player] + aLC(player, a0Q) > aL8))
	}, this.cR = function(dE, aLA) {
		if (!aLB(dE)) {
			aLA = aLC(dE, aLA);
			if (aL7[dE] + aLA > aL8) return !1;
			aL7[dE] += aLA
		}
		return !0
	}, this.e6 = function() {
		cH.e1() % 100 == 99 && (cH.e1() < 1071 ? aL8 += 4 : cH.e1() < 2142 ? aL8 += 6 : cH.e1() < 3213 ? aL8 += 8 : aL8 += 10)
	}
}

function aLD() {
	this.aLE = 0;
	var aLH, aLF = null,
		aLG = 0,
		aLI = "",
		aLJ = 0,
		aLK = null,
		aLL = -1,
		aLM = -1,
		aLN = 0;

	function aLR() {
		if (null !== aLK && null !== aLF) {
			aLG = 0;
			try {
				window.turnstile.remove(aLF), aLK.remove()
			} catch (l0) {
				console.log("turnstile remove failed " + l0)
			}
			aLF = aLK = null
		}
	}

	function aLQ(aLS) {
		return "" !== aLI && aLJ + 1e3 * (300 - aLS) > performance.now()
	}
	this.b3 = function() {
		var aLP;
		eh.aGL || !eh.aEo && !eh.aGQ ? (console.log("turnstile cannot be loaded"), this.aLE = -1) : ((aLP = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aLP.async = !0, aLP
			.onload = function() {
				ee.turnstile.aLE = 1, console.log("turnstile onload"), ee.turnstile.ef()
			}, aLP.onerror = function() {
				ee.turnstile.aLE = -1, console.log("turnstile onerror")
			}, document.head.appendChild(aLP))
	}, this.ef = function() {
		var bv;
		return !(1 !== this.aLE || (window.turnstile ? aLG ? (console.log("turnstile error 246"), 1) : aLQ(30) || (bv = performance.now()) < aLN && aLL === iP.iV.lA(hk.buffer.data[105].value, 5) && aLM === en.eb || (aLI = "", aLG = 1, aLH = bv, (
				aLK = document.createElement("div")).style.position = "fixed", aLK.style.left = "0", aLK.style.top = "0", aLK.style.zIndex = "100", document.body.appendChild(aLK), console.log("turnstile render"), aLF = window
			.turnstile.render(aLK, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(aEf) {
					console.log("turnstile success " + Math.floor(performance.now() - aLH)), aLI = aEf, aLJ = performance.now(), ee.turnstile.aBh(), aLR()
				},
				"expired-callback": function() {
					aLR(), console.log("turnstile expired " + Math.floor(performance.now() - aLH))
				},
				"error-callback": function() {
					aLR(), console.log("turnstile callback error " + Math.floor(performance.now() - aLH)), ee.turnstile.aLE = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		aLR()
	}, this.aBh = function() {
		aLQ(8) && jl.aBc && el.d9.uq(el.d9.uk) && (aLN = performance.now() + 36e5 - 1e4, aLL = iP.iV.lA(hk.buffer.data[105].value, 5), aLM = en.eb, el.v7.aEe(aLI), aLI = "", console.log("sendTokenToLobby success"))
	}
}

function pw() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 !== j.data.aIncomeType && (j.data.aIncomeData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.aIncomeType ? (bQ.oY.oZ(oP.oa(), j.data.aIncomeData, 255), bQ.oY.max(j.data.aIncomeData) || (j.data.aIncomeType = 0)) : 1 !== j.data.aIncomeType || j.data.aIncomeValue || (j.data.aIncomeType = 0)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(210), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(73), L(74), L(75)],
			value: j.data.aIncomeType
		}, function(hy) {
			oV(), 2 !== hy || j.data.aIncomeData || (j.data.aIncomeData = new Uint8Array(j.cW)), j.data.aIncomeType = hy, f1.g9(22)
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og;
		1 === j.data.aIncomeType && ((og = new oh).oi("Value"), og.ol(new om({
			hy: -1,
			value: j.data.aIncomeValue
		}, 1, 0, function(l0) {
			var value = hu.hz(Math.floor(l0.target.value), 0, 255);
			l0.target.value = j.data.aIncomeValue = value
		})), ob.push(og))
	}(ob), function(ob) {
		var og;
		2 === j.data.aIncomeType && ((og = new oh).oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.aIncomeData, 4)), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function aJr() {
	this.aLT = 1, this.wv = function(c3) {
		j.iv ? bx.wu.wv(j.k, c3) : el.dD.aLU(c3)
	}, this.te = function(a0L, nR) {
		this.aLT && (this.aLT = 0, hk.mz.gE(182, a0L)), j.iv ? bx.wu.te(j.k, a0L, nR) : el.dD.aLV(a0L, nR)
	}, this.a0W = function(a0L, a0Q) {
		j.iv ? bx.wu.ww(j.k, a0L, a0Q) : el.dD.aLW(a0L, a0Q)
	}, this.pF = function(a0L, c3) {
		c3 = (c3 << 3) + h1.h2[6];
		j.iv ? bx.wu.pF(j.k, a0L, c3) : d8.gR.gS(j.k) && el.dD.aLX(a0L, c3)
	}, this.pI = function(a0L) {
		849 === a0L && (a0L = 850);
		var c9 = h1.h2[3];
		j.iv ? bx.wu.pI(j.k, a0L, c9) : d8.gn.aLY(j.k, c9) && el.dD.aLZ(a0L, c9)
	}, this.tb = function(c9) {
		j.iv ? bx.wu.tb(j.k, c9) : el.dD.aLZ(849, c9)
	}, this.ta = function(nR) {
		j.iv ? bx.wu.ta(j.k, nR) : el.dD.aLa(nR)
	}, this.dC = function(dF) {
		j.iv ? bx.wu.wx(j.k, dF) : el.dD.aLb(dF)
	}, this.vo = function(a0e) {
		j.iv ? bx.wu.vo(j.k, a0e) : el.dD.aLc(a0e)
	}, this.wy = function() {
		j.iv ? bx.wu.wy(j.k) : el.dD.aLd()
	}, this.wF = function() {
		j.iv ? bx.wu.wF(j.k) : el.dD.aLa(513)
	}, this.x0 = function(a0L, c3, nR) {
		j.iv ? bx.wu.x0(j.k, a0L, c3, nR) : el.dD.aLe(a0L, c3, nR)
	}
}

function aLf() {
	var aLg = 0,
		aLh = new Uint16Array(64);

	function aLR(a81) {
		aLg -= 2;
		for (var aL = a81; aL < aLg; aL += 2) aLh[aL] = aLh[aL + 2], aLh[aL + 1] = aLh[aL + 3]
	}
	this.b3 = function() {
		aLg = 0
	}, this.e6 = function() {
		var aL, nR, a0L;
		if (0 !== aLg)
			if (0 === cT.iw[j.k]) aLg = 0;
			else if (0 === nN.sP(j.k)) aLg = 0;
		else
			for (aL = aLg - 2; 0 <= aL; aL -= 2)(nR = aLh[aL]) < j.cW && 0 === cT.iw[nR] ? aLR(aL) : (a0L = aLh[aL + 1], (j.cW <= nR && nc.a9s(j.k) || nR < j.cW && nc.a9x(j.k, nR)) && (bx.i1.te(a0L, nR), aLR(aL)))
	}, this.a8L = function(nR, a0L) {
		! function(nR, a0L) {
			for (var aL = 0; aL < aLg; aL += 2)
				if (aLh[aL] === nR) return aLh[aL + 1] = Math.min(aLh[aL + 1] + a0L, 1023), 1;
			return
		}(nR, a0L) && 64 !== aLg && (aLh[aLg] = nR, aLh[aLg + 1] = a0L, aLg += 2)
	}
}

function aKM(e0) {
	eh && !e0 || (a9W(), hu = new aLv, hi = new aLw, bQ = new aET, bJ = new aLx, j = new aLy, uQ = new aLz, iU = new yA, iP = new a2D, d0 = new aF8, nP = new h3, rK = new aF0, c0 = new aM0, it = new aM1, aLk = new aM2, aLl = new a9y, i0 = new aM3,
		qZ = new aM4, bp = new ar, o0 = new fF, a4a = new t0, bd = new aIJ, bn = new aM5, oI = new aFj, zv = new zb, tu = new aM6, a4Y = new a6J, gZ = new aM7, j1 = new xv, ey = new aHE, en = new eK, eg = new aM8, gN = new m2, f = new aM9, uJ =
		new aMA, eA = new uA, a0U = new aL6, a0h = new aMB, nN = new s7, a0V = new aMC, vu = new a7R, cb = new a2G, cT = new aBK, aLm = new aMD, a4Z = new aME, cN = new yF, aZ = new aMF, kI = new a7Y, pV = new pJ, el = new aMG, gh = new aAF, gU =
		new fV, aLn = new aMH, aLo = new o7, j0 = new aC7, bN = new aGw, bh = new vV, o1 = new aGS, a4W = new aLf, e7 = new aI1, aLp = new rI, a4X = new aMI, a4d = new aB7, aLq = new aMJ, a4f = new yP, a4b = new aMK, bx = new aJq, ib = new aML,
		bq = new qI, iG = new aFd, a9R = new tw, pD = new i8, aCA = new aIF, l3 = new aMM, n = new aAJ, d8 = new aMN, h1 = new aKf, j4 = new aGl, a0g = new aMO, rR = new ig, v = new x1, aLr = new a8A, f1 = new pZ, ee = new aMP, b4 = new aMQ, eh =
		new aGK, rO = new qB, hk = new xp, cw = new aMR, li = new aMS, a55 = new aMT, j7 = new a51, tc = new aMU, aH7 = new aMV, hD = new a8U, a8k = new aMW, cH = new aMX, br = new aMY, bT = new a3w, ev = new aMZ, a0c = new mX, aLt = new re, jl =
		new aBX, ly = new a16, cJ = new a11, a8I = new a, nc = new a9X, a1s = new a1E, eh.b3(), b4.b3(), bN.mW(), hk.b3(), uQ.b3(), uQ.aMb(), (uY = new aMc).b3(), bQ.b3(), tc.b3(), el.b3(), iU.b3(), iP.b3(), v.b3(), f1.b3(), mU = new aMd, bN
	.b3(), cH.b3(), bT.b3(), aH7.b3(), aLs = new a8u, gh.b3(), a0V.u1(), ee.b3(), aZ.b3(), eg.b3(), zv.b3(), aLm.b3(), l3.b3(), gN.b3(), cH.cI = !0, setTimeout(function() {
			v.kT(2, 14071)
		}, 0), f1.g9(5, 5), aCA.uK() || b4.b5.a4w(), bN.a94(), eh.aFW = 1)
}

function xq() {
	this.xX = function(hy, xU) {
		return Number(this.xY(hy, xU))
	}, this.xY = function(hy, xU) {
		var hm = null;
		return 0 === b4.id ? b4.a4m && (hm = b4.a4m.getItem((xU ? "v" : "d") + hy)) : 1 === b4.id ? hm = b4.a4n.loadString((xU ? 1e3 : 2e3) + hy) : 2 === b4.id && (hm = b4.aMe[(xU ? "v" : "d") + hy]), hm && 0 !== hm.length ? hm : null
	}, this.aMf = function(aI, aMg) {
		var cK = [],
			aMh = aMg ? "e" : "l";
		if (0 === b4.id) {
			if (b4.a4m)
				for (aL = 0; aL < aI; aL++) cK.push(b4.a4m.getItem(aMh + aL))
		} else if (1 === b4.id)
			for (var aMi = aMg ? 5e3 : 3e3, aL = 0; aL < aI; aL++) cK.push(b4.a4n.loadString(aMi + aL));
		else if (2 === b4.id)
			for (aL = 0; aL < aI; aL++) cK.push(b4.aMe[aMh + aL]);
		return cK
	}, this.save = function(hy, value, xU) {
		var aC1 = (xU ? "v" : "d") + hy;
		if (0 === b4.id) {
			if (b4.a4m && hk.buffer.data[140].value) try {
				b4.a4m.setItem(aC1, value)
			} catch (l0) {
				console.log(l0)
			}
		} else 1 === b4.id ? b4.a4n.saveString((xU ? 1e3 : 2e3) + hy, value) : 2 === b4.id && (b4.aMe[aC1] = value, b4.a4o.postMessage(aC1 + " " + value))
	}, this.aMj = function(cK, aMg) {
		var aI = cK.length,
			aMh = aMg ? "e" : "l";
		if (0 === b4.id) {
			if (b4.a4m && hk.buffer.data[140].value) try {
				for (aL = 0; aL < aI; aL++) b4.a4m.setItem(aMh + aL, cK[aL])
			} catch (l0) {
				console.log(l0)
			}
		} else if (1 === b4.id)
			for (var aMi = aMg ? 5e3 : 3e3, aL = 0; aL < aI; aL++) b4.a4n.saveString(aMi + aL, cK[aL]);
		else if (2 === b4.id)
			for (aL = 0; aL < aI; aL++) b4.aMe[aMh + aL] = cK[aL], b4.a4o.postMessage(aMh + aL + " " + cK[aL])
	}
}

function aEV() {
	this.wA = function(k6) {
		return 0 === k6 ? 1 === j.e5 && j.bC : 1 === k6 ? 1 === j.e5 && !j.bC : 2 === j.e5
	}, this.wB = function(player) {
		return 0 !== cT.iw[player] && 2 !== cT.dl[player]
	}, this.pG = function(player) {
		return player === j.k && 2 !== cT.dl[player]
	}, this.aMk = function(player, nR) {
		return player !== nR && (0 === cw.cz[player] || cw.cz[player] !== cw.cz[nR])
	}, this.zX = function() {
		return eA.eB < 2 ? 0 : j.cu ? 1 < li.aMl() : cT.cj[h9[1]]
	}, this.vy = function() {
		var eB = eA.eB;
		if (0 !== eB) {
			if (!j.cu) return !this.cZ(h9[0]);
			for (var cz = cw.cz, p6 = li.p7(), eC = eA.eC, aL = eB - 1; 0 <= aL; aL--) {
				var aP = eC[aL];
				if (cz[aP] === p6 && !this.cZ(aP)) return 1
			}
		}
		return 0
	}, this.sX = function(player) {
		return player === j.k
	}, this.cd = function(nR, mi) {
		return cT.ct[j.k] < mi * cT.ct[nR]
	}, this.cZ = function(player) {
		return player >= j.ck || 2 === cT.dl[player]
	}, this.hC = function(player) {
		return 0 !== cT.iw[player]
	}, this.le = function(player) {
		return player < j.ck
	}, this.a0M = function(a9t, a9u) {
		return a9t !== a9u
	}, this.sI = function(player, hm) {
		var min;
		return hm = this.aMm(player, hm), cT.ct[player] += hm, cT.a3Q[player] && (min = Math.min(cT.a3Q[player], cT.ct[player]), cT.a3Q[player] -= min, cT.ct[player] -= min), hm
	}, this.aMm = function(player, hm) {
		var a8X = cT.ct[player];
		return hm = Math.min(hm, cT.cj[player] * j.aMn - a8X), hm = Math.min(hm, j.sY - a8X), Math.max(hm, 0)
	}, this.gX = function(player, a0L, aMo, aMp) {
		var a8X = cT.ct[player],
			a0L = hu.hv(a8X * (a0L + 1), 1024),
			aMo = hu.hv(aMo * a8X, 1024),
			a0L = Math.min(a0L, a8X - aMo);
		return a0L = a4X.aMr(player, a0L), h1.nO[0] = a0L, h1.nO[1] = aMo, aMp <= a0L
	}, this.a0S = function(player, ww, a0Q) {
		var player = cT.ct[player],
			aMq = hu.hv(64 * player, 1024);
		return ww = Math.min(ww, player - aMq), ww = this.aMm(a0Q, ww), h1.nO[0] = ww, h1.nO[1] = aMq, 1 <= ww
	}, this.aMs = function(player, ww, a0Q) {
		var player = cT.ct[player],
			aMq = hu.hv(64 * player, 1024);
		return ww = Math.min(ww, player - aMq), this.aMm(a0Q, ww)
	}, this.aMt = function(ww, a0Q) {
		return ww = this.aMm(a0Q, ww), h1.nO[0] = ww, h1.nO[1] = 0, 1 <= ww
	}, this.a0T = function(player, aMu) {
		return hu.hv(cT.ct[player] * (aMu + 1), 1024)
	}, this.aMv = function(player, aMo) {
		aMo = hu.hv(aMo * cT.ct[player], 1024);
		h1.nO[1] = aMo, cT.ct[player] -= aMo
	}, this.aDd = function(player, aMw) {
		var ws, wt, c7 = cT.ct[player];
		return aMw <= c7 ? cT.ct[player] -= aMw : (cT.ct[player] = 0, wt = cT.a3Q[player] + (ws = 5 * ((c7 = aMw - c7) >> 2)), hD.sJ(player, ws - c7, 12), wt <= j.aMx ? cT.a3Q[player] = wt : (cT.a3Q[player] = j.aMx, hD.sJ(player, wt - j.aMx,
			18))), aMw
	}, this.a0k = function(player, a0L) {
		var ct = cT.ct,
			a8X = ct[player],
			a0L = hu.hv(a8X * (a0L + 1), 1024),
			aMq = Math.max(hu.hv(a8X, 10), 1e3);
		return (a0L = Math.min(a0L, a8X - aMq)) < 0 ? (ct[player] = 0, aMq = Math.min(1e3, a8X + j.aMx - cT.a3Q[player]), h1.nO[1] = aMq, cT.a3Q[player] += aMq - a8X, 0) : (h1.nO[1] = aMq, a0L = a4X.aMr(player, a0L), ct[player] -= aMq + a0L, a4X
			.aMy(player, a0L), a0L)
	}, this.gp = function(player) {
		var d2 = h1.nO[0];
		cT.ct[player] -= d2 + h1.nO[1], a4X.aMy(player, d2)
	}, this.a0N = function(player, nR) {
		return (nR = Math.min(nR, j.cW)) < j.cW && 0 === cT.iw[nR] && (nR = j.cW), (h1.nF[0] = nR) === j.cW || nc.nd(player, nR)
	}, this.a0R = function(player, a0Q) {
		return 0 !== cT.iw[a0Q] && !nc.nd(player, a0Q)
	}, this.wD = function(player, aMz) {
		for (var aP, aI = eA.eB, jh = 0, aN0 = h9, aL = 0; aL < aI; aL++)
			if (aP = aN0[aL], !this.cZ(aP)) {
				if (player === aP) return !0;
				if (++jh > aMz) return !1
			} return !1
	}, this.p3 = function(aP) {
		var vz = j.cu ? li.w0() : cT.cj[h9[0]];
		return vz >= hu.hv(aP * j.w1, 100)
	}, this.aCl = function(hm, min, max) {
		return Math.floor(hu.hz(isNaN(hm) ? 0 : Number(hm), min, max))
	}
}

function aBb() {
	this.uK = function(hy) {
		if ((aJA = jl.jm.aJA[hy]) < 2 && !__fx.customLobby.isActive()) return !1;
		var aGa = jl.d9.jy[hy],
			aN1 = 9 === aGa.aDL ? 333 : 512,
			aJA = Math.min(aJA, aN1);
		8 === aGa.aDL && (aJA -= aJA % 2);
		aN1 = jl.jm.jk[hy].splice(0, aJA), jl.jm.aJA[hy] -= aJA, aJA = function(aGb) {
			if (jl.jo) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var aI = aGb.length, jQ = jl.jo.jQ, aL = 0; aL < aI; aL++)
					if (aGb[aL].jQ === jQ) return aL
			}
			return -1
		}(aN1);
		return -1 === aJA ? (jl.jm.lB = jl.jm.lB.concat(aN1), 1e3 < jl.jm.lB.length && jl.jm.lB.splice(0, jl.jm.lB.length - 1e3), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === hy && 1 === jl.d9.aIp[2], !1) : (8 === aGa.aDL && (aGa.aDR = (aGa
			.aDR + (aJA >> 1)) % 1024, hy = aJA - aJA % 2, aJA %= 2, aN1 = aN1.slice(hy, 2 + hy)), o1.b3(aGa, aN1, aJA), !0)
	}, this.aGh = function(aGa, aGb, aGc) {
		var a0 = j.data = new ry,
			aN3 = (a0.spawningSeed = aGa.spawningSeed, aGa.aDL < 7 ? (a0.gameMode = 1, a0.numberTeams = aGa.aDL + 2) : 9 === aGa.aDL ? (a0.gameMode = a0.isZombieMode = 1, a0.numberTeams = 2) : (a0.gameMode = 0, a0.battleRoyaleMode = 7 === aGa
				.aDL ? 0 : 10 === aGa.aDL ? 1 : 2), a0.selectedPlayer = aGc, a0.isContest = aGa.aDP, a0.mapType = v.xA(aGa.dr) ? 0 : 1, v.xP(a0, aGa.dr), a0.mapSeed = aGa.mapSeed, a0.humanCount = aGb.length);
		a0.selectableSpawn = 1 === a0.gameMode || aN3 < 100, a0.colorsData = new Uint32Array(aN3), a0.playerNamesData = new Array(aN3), a0.a0G = new Uint32Array(aN3);
		for (var aL = 0; aL < aN3; aL++) a0.colorsData[aL] = aGb[aL].color, a0.playerNamesData[aL] = aGb[aL].username, a0.a0G[aL] = aGb[aL].jQ;
		if (2 === a0.battleRoyaleMode)
			for (a0.elo = new Uint16Array(aN3), aL = 0; aL < aN3; aL++) a0.elo[aL] = aGb[aL].elo;
		a1s.close(), eg.setState(8), v.kT(aGa.dr, a0.mapSeed), j.aN4(), j.aN5 = 2
	}
}

function yG() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.hc = 13, this.he = this.emojis.length, this.hf = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.hf, this.hd = 1024, this.aN6 = this.emojis.indexOf("💀"),
		this.aN7 = this.aN6 + 1, this.aN8 = this.emojis.indexOf("🥇"), this.aN9 = this.emojis.indexOf("😊"), this.i6 = function(hm) {
			return hm < this.hf ? String.fromCharCode(55356, 56806 + hu.hv(hm, 26), 55356, 56806 + hm % 26) : this.emojis[Math.min(hm - this.hf, this.he - 1)]
		}, this.hh = function(bV) {
			for (var aI = bV.length - 2, cK = [], aL = 0; aL < aI; aL++) {
				var su = bV.charCodeAt(aL) - 56806,
					sv = bV.charCodeAt(aL + 2) - 56806;
				0 <= su && su < 26 && 0 <= sv && sv < 26 && (cK.push(26 * su + sv), aL += 3)
			}
			return cK
		}, this.a31 = function(hm) {
			return hm < this.hf
		}, this.a3a = function(hm) {
			return hm >= 1024 - this.hc
		}, this.a3Y = function(hm) {
			return hm >= this.hf && hm < this.hf + this.aN7
		}
}

function aEW() {
	this.aC5 = function(hm) {
		return [hm >> 12 & 63, hm >> 6 & 63, 63 & hm]
	}, this.aNA = function(hm) {
		for (var cK = this.aC5(hm), aL = 0; aL < 3; aL++) cK[aL] = ~~(4.05 * cK[aL]);
		return cK
	}, this.aNB = function(hm) {
		hm = this.aNA(hm);
		return bQ.color.aJn(hm[0], hm[1], hm[2])
	}, this.aNC = function(cK) {
		for (var aL = 0; aL < 3; aL++) cK[aL] = ~~(cK[aL] / 4.04);
		return (cK[0] << 12) + (cK[1] << 6) + cK[2]
	}, this.aJn = function(db, dc, c7) {
		return "rgb(" + db + "," + dc + "," + c7 + ")"
	}, this.tC = function(db, dc, c7, c2) {
		return "rgba(" + db + "," + dc + "," + c7 + "," + c2.toFixed(3) + ")"
	}, this.rA = function(bB) {
		for (var cK = bB.split("(")[1].split(","), tD = h1.tD, aL = 0; aL < 3; aL++) tD[aL] = parseInt(cK[aL]);
		return 4 === cK.length ? tD[3] = 255 * parseFloat(cK[3].slice(0, -1)) : tD[3] = 255, tD
	}, this.lT = function(aND, a0) {
		for (var cK = aND.slice(aND.indexOf("(") + 1, aND.indexOf(")")).split(","), tD = h1.tD, aL = 0; aL < 3; aL++) tD[aL] = hu.hz(parseInt(cK[aL].trim(), 10) + a0, 0, 255);
		return 3 === cK.length ? this.aJn(tD[0], tD[1], tD[2]) : (aND = parseFloat(cK[3].trim()), this.tC(tD[0], tD[1], tD[2], aND = 0 === aND ? .3 : aND))
	}, this.aJo = function(aNE, aNF) {
		for (var e8 = 0, aL = 0; aL < 3; aL++) e8 += Math.abs(aNF[aL] - aNE[aL]);
		if (!(240 <= e8))
			for (aL = 0; aL < 3; aL++) aNF[aL] = aNE[aL] + (aNE[aL] < 128 ? 80 : -80)
	}, this.aNG = function(cK) {
		for (var bV = "#", aL = 0; aL < 3; aL++) {
			var db = cK[aL].toString(16);
			bV += 1 === db.length ? "0" + db : db
		}
		return bV
	}, this.aNH = function(bV) {
		var db, dc;
		return bV.length < 7 ? bJ.dP : (db = parseInt(bV.slice(1, 3), 16), dc = parseInt(bV.slice(3, 5), 16), bV = parseInt(bV.slice(5, 7), 16), this.aJn(db, dc, bV))
	}
}

function q1() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 !== j.data.sResourcesType && (j.data.sResourcesData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.sResourcesType && bQ.oY.oZ(oP.oa(), j.data.sResourcesData, 2047)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(398), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(73), L(74), L(75)],
			value: j.data.sResourcesType
		}, function(hy) {
			oV(), 2 !== hy || j.data.sResourcesData || (j.data.sResourcesData = new Uint16Array(j.cW)), j.data.sResourcesType = hy, f1.g9(28)
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og;
		1 === j.data.sResourcesType && ((og = new oh).oi("Value"), og.ol(new om({
			hy: -1,
			value: j.data.sResourcesValue
		}, 1, 0, function(l0) {
			var value = hu.hz(Math.floor(l0.target.value), 0, 2047);
			l0.target.value = j.data.sResourcesValue = value
		})), ob.push(og))
	}(ob), function(ob) {
		var og;
		2 === j.data.sResourcesType && ((og = new oh).oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.sResourcesData, 2)), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function v5() {
	var aNI, aNJ, aFR, aNK = ["wss://", "/s50/", "/s51/", "/s52/"],
		aNL = 0;

	function v6() {
		el.d9.v6(aNI, aNJ)
	}

	function aNO(l0) {
		el.dE.aNQ(aNI, new Uint8Array(l0.data))
	}

	function aNP() {}

	function vH(l0) {
		el.d9.vH(aNI, l0)
	}
	this.b3 = function(hy, pe, v1) {
		aNI = hy, aNJ = pe,
			function(v1) {
				v1 = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : eh.aGL ? "ws://localhost:" + (7130 + aNI) + "/" : v1 ? aNK[0] + "game.territorial.io/x0" + aNI + "/" : aNK[0] + el.d9.ui[aNI] + aNK[1 + eh.kk];
				(aFR = new WebSocket(v1)).binaryType = "arraybuffer", aFR.onopen = v6, aFR.onmessage = aNO, aFR.onclose = vH, aFR.onerror = aNP
			}(v1)
	}, this.aNN = function() {
		return aFR.readyState === aFR.CONNECTING
	}, this.uq = function() {
		return aFR.readyState === aFR.OPEN
	}, this.uu = function() {
		return aNL
	}, this.v9 = function() {
		aNL = 1
	}, this.v3 = function() {
		return this.aNN() || this.uq()
	}, this.v4 = function(pe) {
		aNJ = pe
	}, this.aKV = function() {
		return aNJ
	}, this.send = function(i9) {
		this.uq() && aFR.send(i9)
	}, this.close = function(vD) {
		this.v3() && (this.gG(), aFR.close(vD))
	}, this.gG = function() {
		aFR.onopen = null, aFR.onmessage = null, aFR.onclose = null, aFR.onerror = null
	}
}

function py() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 !== j.data.spawningType || bQ.oY.tE(j.data.spawningData) || (j.data.spawningType = 0), 2 !== j.data.spawningType && (j.data.spawningData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.spawningType && bQ.oY.oZ(oP.oa(), j.data.spawningData, v.x4 - 1)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(399), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh,
			n3 = (og.oi(L(72)), [L(119), L(400), L(75)]),
			value = j.data.spawningType;
		0 === j.data.gameMode && (n3.splice(1, 1), 0 < value) && (value = 1);
		og.oj(new ok({
			n3: n3,
			value: value
		}, function(hy) {
			oV(), j.data.spawningType = hy, 0 === j.data.gameMode && 1 === hy && (j.data.spawningType = 2), 2 !== j.data.spawningType || j.data.spawningData || (j.data.spawningData = new Uint16Array(2 * j.cW)), f1.g9(24)
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og = new oh;
		og.oi("My Spawn"), og.ol(new uV({
			value: j.data.selectableSpawn
		}, L(401), function(value) {
			j.data.selectableSpawn = value
		})), ob.push(og)
	}(ob), function(ob) {
		var og = new oh,
			aNS = (og.oi("Seed"), new om({
				hy: -1,
				value: j.data.spawningSeed
			}, 1, 0, function(l0) {
				var value = Math.abs(Math.floor(l0.target.value)) % 16384;
				l0.target.value = j.data.spawningSeed = value
			}));
		og.ol(aNS), og.ol(new uX([new g0(L(119), function() {
			aNS.l0.value = j.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og;
		2 === j.data.spawningType && ((og = new oh).oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.spawningData, 2)), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function aMC() {
	var aNU;

	function aNV(player) {
		var db, aAl;
		return bQ.by.cZ(player) && player < j.ck ? 0 : (db = aNU[hu.hv((j.cW - 1) * cT.cj[player], j.w1)], cH.e1() < 1920 && (db = Math.max(hu.hv(100 * (13440 - 6 * cH.e1()), 1920), db)), aAl = a0V.aAm(player), cT.ct[player] > aAl && (db -= hu.hv(2 *
			db * (cT.ct[player] - aAl), aAl)), Math.min(Math.max(db, 0), 700))
	}

	function aNf(mi) {
		for (var cj = cT.cj, eC = eA.eC, aL = eA.eB - 1; 0 <= aL; aL--) {
			var aP = eC[aL];
			bQ.by.sI(aP, hu.hv(mi * cj[aP], 32))
		}
	}

	function aNc() {
		var aGC = j.k;
		h1.aKh[0] = cT.ct[aGC] - cT.a3Q[aGC]
	}

	function aNe(hy) {
		var aGC = j.k,
			aGC = cT.ct[aGC] - cT.a3Q[aGC] - h1.aKh[0];
		a0V.aNT += aGC, hD.hE[hy] += aGC
	}
	this.aNT = 0, this.u1 = function() {
		for (var aI = j.cW, aL = (aNU = new Uint16Array(aI), 0); aL < aI; aL++) aNU[aL] = 100 + aHT(hu.hv(25600 * aL, aI - 4), 9)
	}, this.b3 = function() {
		(this.aNT = 0) === j.data.iIncomeType ? this.a8h = aNV : 1 === j.data.iIncomeType ? this.a8h = function(player) {
			return hu.hv(j.data.iIncomeValue * aNV(player), 64)
		} : this.a8h = function(player) {
			return hu.hv(j.data.iIncomeData[player] * aNV(player), 64)
		}
	}, this.e6 = function() {
		if (cH.e1() % 10 == 9 && (a0V.aNT = 0, function() {
				aNc();
				for (var eC = eA.eC, ct = cT.ct, aL = eA.eB - 1; 0 <= aL; aL--) {
					var aP = eC[aL],
						aNd = hu.hv(a0V.a8h(aP) * ct[aP], 1e4);
					bQ.by.sI(aP, Math.max(aNd, 1))
				}
				aNe(9)
			}(), function() {
				if (0 !== j.data.aIncomeType) {
					if (aNc(), 1 === j.data.aIncomeType)
						for (var cj = cT.cj, eC = eA.eC, mi = j.data.aIncomeValue, aL = eA.eB - 1; 0 <= aL; aL--) {
							var aP = eC[aL];
							bQ.by.sI(aP, hu.hv(mi * cj[aP], 128))
						} else 2 === j.data.aIncomeType && function() {
							for (var cj = cT.cj, eC = eA.eC, mi = j.data.aIncomeData, aL = eA.eB - 1; 0 <= aL; aL--) {
								var aP = eC[aL];
								bQ.by.sI(aP, hu.hv(mi[aP] * cj[aP], 128))
							}
						}();
					aNe(18)
				}
			}(), cH.e1() % 100 == 99)) {
			if (aNc(), 0 === j.data.tIncomeType) aNf(32);
			else if (1 === j.data.tIncomeType) aNf(j.data.tIncomeValue);
			else
				for (var cj = cT.cj, eC = eA.eC, mi = j.data.tIncomeData, aL = eA.eB - 1; 0 <= aL; aL--) {
					var aP = eC[aL];
					bQ.by.sI(aP, hu.hv(mi[aP] * cj[aP], 32))
				}
			aNe(8)
		}
	}, this.aAm = function(player) {
		return Math.min(100 * cT.cj[player], j.aNX)
	}, this.a0W = function(player, a0Q) {
		cJ.a12(player, a0Q, h1.nO[0], 0), bQ.by.sI(a0Q, h1.nO[0]), hD.di(player, a0Q), cb.a2s(player, h1.nO[0] + h1.nO[1]), cb.a2t(a0Q, h1.nO[0]), bQ.by.gp(player)
	}, this.a7V = function() {
		for (var aI = eA.eB, b7 = eA.eC, d7 = 0, a8X = cT.ct, aL = 0; aL < aI; aL++) d7 += a8X[b7[aL]];
		return d7
	}, this.a7X = function(aNY) {
		for (var aP, aI = eA.eB, b7 = eA.eC, d7 = 0, a8X = cT.ct, cz = cw.cz, aL = 0; aL < aI; aL++) cz[aP = b7[aL]] === aNY && (d7 += a8X[aP]);
		return d7
	}
}

function aLz() {
	this.data = new aNj;
	var aNk = (new aNl).L84,
		aNm = (this.a4R = aNk, !(this.uR = "en"));
	this.b3 = function() {
		var bV, cK;
		aNm = !1, ("en" === (bV = hk.buffer.data[12].value).split("-")[0].toLowerCase() ? (uQ.a4R = aNk, uQ.uR = bV, 1) : hk.buffer.data[12].value === hk.buffer.data[145].value && 0 < hk.buffer.data[146].value && (bV = hk.buffer.data[146].value,
			(cK = hk.os.aMf(bV, !1)).length === bV) && !!bQ.oY.aNr(cK) && function(cK) {
			for (var aI = cK.length, au = 0; au < aI; au++) cK[au] = cK[au].replace("&#39;", "'");
			var aNt = hk.os.aMf(aI, !0);
			if (aI !== aNt.length) return !1;
			if (!bQ.oY.aNr(aNt)) return !1;
			for (var d7 = aNk.length, zp = new Array(d7), aD1 = d7 === aI, aY = Math.min(aI, d7), aL = 0; aL < d7; aL++)
				if (zp[aL] = aNk[aL], aL < aI && aNt[aL] === zp[aL]) zp[aL] = cK[aL];
				else {
					aD1 = !1;
					for (var c7 = 0; c7 < aY; c7++)
						if (aNt[c7] === zp[aL]) {
							zp[aL] = cK[c7];
							break
						}
				} return uQ.a4R = zp, uQ.uR = hk.buffer.data[12].value, aD1
		}(cK)) || (aNm = !0)
	}, this.aMb = function() {
		cw.mW(), d0.mW(), a8k.mW(), hD.mW(), o0.b3(), jT = new rT
	}, this.a4S = function() {
		return this.a4R === aNk || !aNk.length
	}, this.aKX = function() {
		var aNu;
		return !!aNm && (aNm = !1, 0 !== aNk.length) && (aNu = hk.buffer.data[12].value, el.v7.aEi(0, aNu.slice(0, 20)), !0)
	}, this.aKc = function(cK) {
		cK.length !== aNk.length ? 8 === f1.mQ && f1.mR().aKZ(30, 0, 1) : (this.a4R = cK, this.uR = hk.buffer.data[12].value, hk.mz.gE(145, this.uR), hk.mz.gE(146, cK.length), hk.os.aMj(cK, !1), hk.os.aMj(aNk, !0), 8 === f1.mQ ? f1.mR().aKZ(30) :
			0 === eg.f3() && 5 === f1.mQ && f1.d9.aNv())
	}, this.aEr = function() {
		var xW, cK = navigator.languages;
		return cK && cK.length ? (xW = Math.max(uQ.data.wc(cK[0]), 0), 1 === cK.length ? [xW, xW] : [xW, Math.max(uQ.data.wc(cK[1]), 0)]) : [0, 0]
	}
}

function ip() {
	this.d = function() {
		if (2 === j.aBj) j.dK = 2;
		else {
			if (8 === j.dy) bQ.by.cZ(0) || 0 === cT.iw[0] ? j.aNx = 1 : bQ.by.cZ(1) || 0 === cT.iw[1] ? j.aNx = 0 : j.aNx = +(cT.cj[1] > cT.cj[0]);
			else {
				if (j.cu) {
					var p6 = li.aNy();
					if (j.lg = p6, cw.cy[p6]) return void(j.dK = +(cw.cz[j.k] === p6))
				}
				j.aNx = h9[0]
			}
			j.dK = +(j.aNx === j.k)
		}
	}
}

function aNz() {
	this.aO0 = 32, this.aH = 0, this.aJ = 0, this.aAe = 0, this.aO1 = 0, this.aO2 = 4, this.kE = null, this.aE8 = new Int16Array(9), this.b3 = function() {
		this.aAe = 1 + hu.hv(v.w - 1, this.aO0), this.aO1 = 1 + hu.hv(v.y - 1, this.aO0), this.kE = new Array(this.aAe * this.aO1), bQ.oY.aO3(this.kE);
		var aH, aJ, aE8 = this.aE8,
			aV = this.aAe;
		for (aH = -1; aH <= 1; aH++)
			for (aJ = -1; aJ <= 1; aJ++) aE8[3 * (1 + aJ) + 1 + aH] = aJ * aV + aH
	}, this.gq = function(aO5, aL) {
		return this.kE[aL].push(aO5), this.kE[aL].length - 1
	}, this.aDx = function(aO6, aDc, aDn) {
		var aO7, aO8, aDc = n.aAd(aDc),
			aDn = n.aAd(aDn);
		return aDc === aDn ? aO6 : (aO7 = this.kE[aDc].pop(), this.kE[aDc].length === aO6 ? this.gq(aO7, aDn) : (aO8 = this.kE[aDc][aO6], this.kE[aDc][aO6] = aO7, d8.d9.aDZ[aO7] = aO6, this.gq(aO8, aDn)))
	}
}

function aO9(data) {
	var uL, aOA, aOB, aOC, aOD, aOE, aOF, colors, aOG, aOH, aOI = 0,
		aOJ = 0,
		aOK = !1,
		aOL = !1,
		aOM = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOy(hr, hs) {
		! function(hr, hs) {
			return aOA < hr && hr < aOA + aOC && aOB < hs && hs < aOB + aOD
		}(aOI = hr, aOJ = hs) ? (aOK && (cH.cI = !0), aOK = !1) : (aOK = !0, cH.cI = !0)
	}
	this.show = function() {
		aOL = hk.buffer.data[127].value, uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize();
		var bB = bN.mk,
			bA = uL.aOW(),
			aOX = bB * bA.aOY,
			bB = bB * bA.aOZ;
		aOE = bQ.bR.gJ(.06), aOF = bQ.bR.gJ(.04), aOA = bQ.bR.gJ(.06), aOB = bB + aOE, aOC = bN.aV - aOA - aOF, aOD = aOX + bB - aOB - aOF
	}, this.eD = function() {
		uL.eD(),
			function() {
				var aL, aOS, aY, aH, c2, cK = data.data,
					aOd = 1,
					aOe = .125,
					aOf = aOL ? 65536 : 0;
				for (aL = 0; aL < cK.length; aL++)
					for (aOS = cK[aL].aOS, aY = aOS.length, aOd = Math.max(aY, aOd), c2 = 0; c2 < aY; c2++) aOe = Math.max(aOS[c2], aOe), aOf = Math.min(aOS[c2], aOf);
				var c5 = aOB + aOD,
					aOg = aOD / (aOe - aOf),
					aOh = 1 / (aOd - 1);
				for (eF.lineWidth = bT.i4, aL = 0; aL < cK.length; aL++) {
					for (aOS = cK[aL].aOS, aY = aOS.length, aH = aOA, eF.beginPath(), eF.moveTo(aH + aOC, c5 - aOg * (aOS[aY - 1] - aOf)), c2 = aY - 2; 0 <= c2; c2--) eF.lineTo(aH + aOh * c2 * aOC, c5 - aOg * (aOS[c2] - aOf));
					eF.strokeStyle = colors[aL], eF.stroke()
				}(function(aOf, aOe, c5, aOg) {
					eF.font = bQ.bR.bS(0, .25 * aOA), bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 2), eF.fillStyle = colors[0];
					for (var aH = .92 * aOA, aL = 0; aL < 3; aL++) {
						var hm = aOf + aL * (aOe - aOf) / 2;
						eF.fillText((hm / 1e3).toFixed(3), aH, c5 - aOg * (hm - aOf))
					}
				})(aOf, aOe, c5, aOg),
				function(aOd) {
					var aJ = aOB + aOD + .15 * aOF;
					eF.font = bQ.bR.bS(0, Math.min(.4 * aOF, .028 * bN.aV)), bQ.bR.textBaseline(eF, 0), bQ.bR.textAlign(eF, 2), eF.fillStyle = colors[0], eF.fillText(bQ.aEX.aOk(aOG), aOA + aOC, aJ), bQ.bR.textAlign(eF, 0), eF.fillText(bQ.aEX.aOk(
						new Date(aOH.getTime() - 6e4 * (aOd - 1) * aOM[data.a65])), aOA, aJ)
				}(aOd),
				function(aOd, aOf, aOe) {
					if (aOK && !(aOd < 2)) {
						for (var qK, hy = (aOI - aOA) / aOC * (aOd - 1), aOl = Math.floor(hy), aOm = Math.floor(1 + hy), aOn = hy - aOl, aOo = 1e5, aOp = -1, aOq = -1, aOr = aOe - (aOe - aOf) * (aOJ - aOB) / aOD, cK = data.data, aL = 0; aL < cK
							.length; aL++) {
							var aOs, aOS = cK[aL].aOS;
							aOS.length <= aOm || (aOS = aOS[aOl] + aOn * (aOS[aOm] - aOS[aOl]), (aOs = Math.abs(aOr - aOS)) < aOo && (aOo = aOs, aOp = aL, aOq = aOS))
						} - 1 !== aOp && (aOe = aOB + aOD - (aOq - aOf) / (aOe - aOf) * aOD, eF.lineWidth = .5 * bT.i4, eF.strokeStyle = colors[aOp], eF.beginPath(), eF.moveTo(aOA, aOe), eF.lineTo(aOI, aOe), eF.lineTo(aOI, aOB + aOD), eF
						.stroke(), eF.beginPath(), eF.arc(aOI, aOe, .1 * aOA, 0, 2 * Math.PI), eF.fillStyle = colors[aOp], eF.fill(), aOf = aOB + aOD + .15 * aOF, bQ.bR.textAlign(eF, 1), qK = aOd - 2 < hy ? (qK = aOH.getTime() - 6e4 * aOM[
								data.a65], new Date(qK + (hy - (aOd - 2)) * (aOG.getTime() - qK))) : new Date(aOH.getTime() - 6e4 * (aOd - hy - 1) * aOM[data.a65]), aOd = bQ.aEX.aOk(qK), hy = bQ.bR.measureText(aOd), qK = hu.hz(aOI, aOA + .5 *
								hy, aOA + aOC - .5 * hy), eF.fillStyle = bQ.color.aJn(70, 50, 20), eF.fillRect(qK - .52 * hy, aOB + aOD, 1.04 * hy, .55 * aOF), eF.fillStyle = colors[0], eF.fillText(aOd, qK, aOf), eF.font = bQ.bR.bS(0, .25 *
								aOA), bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 2), qK = .92 * aOA, aOd = (aOq / 1e3).toFixed(3), hy = bQ.bR.measureText(aOd), aOf = qK - 1.04 * hy, eF.fillStyle = bQ.color.aJn(70, 50, 20), eF.fillRect(
								aOf, aOe - .1625 * aOA, aOA - aOf, .275 * aOA), eF.fillStyle = colors[aOp], eF.fillText(aOd, qK, aOe))
					}
				}(aOd, aOf, aOe)
			}(), eF.lineWidth = bT.i4, eF.strokeStyle = bJ.bL, eF.beginPath(), eF.moveTo(aOA, aOB), eF.lineTo(aOA, aOB + aOD), eF.lineTo(aOA + aOC, aOB + aOD), eF.stroke();
		var aL, fontSize = .5 * aOE,
			cK = (eF.font = bQ.bR.bS(0, fontSize), bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 0), data.data),
			aI = cK.length,
			aJ = aOB - .5 * aOE,
			bV = "";
		for (aL = 0; aL < aI; aL++) bV += cK[aL].name + "  ";
		bV = bV.trim();
		var aOv = bQ.bR.measureText(bV),
			aH = .5 * (bN.aV - aOv);
		for (aOv > bN.aV && (aH = 0, eF.font = bQ.bR.bS(0, bN.aV / aOv * fontSize)), aL = 0; aL < aI; aL++) eF.fillStyle = colors[aL], eF.fillText(cK[aL].name, aH, aJ), aH += bQ.bR.measureText(cK[aL].name + "  ")
	}, this.bt = function(hr, hs) {
		aOy(hr, hs)
	}, this.ez = function(hr, hs) {
		aOy(hr, hs)
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	};
	var aL, bv, aOT, i3, a0 = data.data,
		aI = a0.length,
		max = 1;
	for (aL = 0; aL < aI; aL++) max = Math.max(max, a0[aL].aOS.length);
	for (aL = 0; aL < aI; aL++)
		for (; a0[aL].aOS.length < max;) a0[aL].aOS.unshift(0);
	bv = new Date, aOT = 6e4 * bv.getTimezoneOffset(), i3 = bv.getTime() - aOT, aOG = new Date(i3), 6 === data.a65 ? function(bv, aOT) {
		var aOV = bv.getUTCFullYear(),
			bv = bv.getUTCMonth() + 1;
		aOH = bv < 12 ? new Date(Date.UTC(aOV, bv) - aOT) : new Date(Date.UTC(aOV + 1, 0) - aOT)
	}(bv, aOT) : (aOT = 6e4 * aOM[data.a65], aOH = data.a65 <= 4 ? new Date(i3 + aOT - bv.getTime() % aOT) : new Date(i3 + aOT - (bv.getTime() + 2592e5) % aOT)), i3 = bQ.color, colors = [bJ.bL, i3.aJn(255, 0, 0), i3.aJn(0, 200, 0), i3.aJn(80, 80,
		255), i3.aJn(255, 255, 0), i3.aJn(255, 0, 255), i3.aJn(0, 255, 255), i3.aJn(255, 140, 0), i3.aJn(128, 128, 128), i3.aJn(0, 255, 140)], uL = new oQ(L(402) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a65] + ", " + bQ.aEX.aOR(
		aOG), [new g0("⬅️ " + L(61), function() {
		f1.g9(1)
	}), new g0(L(403), function() {
		f1.g9(14)
	})], !1)
}

function aOz() {
	function aP2(player, d2, aP1, gr) {
		var nR;
		if (f.cn(aP1)) nR = j.cW;
		else {
			if ((nR = f.co(aP1)) === player) return void hD.sJ(player, d2 - bQ.by.sI(player, d2), 12);
			if (!nc.nd(player, nR)) return void bx.aB2.aP5(player, nR, d2)
		}
		nN.nh(player, nR) || nN.sO(player) ? (cT.nG[player].push(gr << 2), nN.cR(player, d2, nR), nP.hG(player, !0)) : hD.sJ(player, d2, 12)
	}
	this.e6 = function() {
		for (var tt = d8.d9.tt, gt = d8.d9.gt, a4L = d8.d9.a4L, aL = d8.d9.wr - 1; 0 <= aL; aL--) 65535 === a4L[aL] && function(aL, gr, nT) {
			if (6 === nT) {
				if (d8.gk.a46(aL, gr)) return d8.d9.a4F[aL]++, d8.d9.a4L[aL] = 0, 0
			} else {
				var player = d8.d9.dA[aL] >> 3,
					aL = d8.d9.dB[aL];
				hD.a8f(player), nT < 4 ? aP2(player, aL, gr + n.aAK[nT] << 2, gr) : 4 === nT ? function(player, d2, gr) {
					var aL, am, aAO = n.aAL,
						al = n.yc(gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.cn(am)) return aP2(player, d2, am, gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.nW(am) && !f.a9p(player, am)) return aP2(player, d2, am, gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.nW(am)) return aP2(player, d2, am, gr)
				}(player, aL, gr) : 5 === nT && function(player, d2, gr) {
					var aL, am, aAO = n.aAL,
						al = n.yc(gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.nW(am) && f.a9p(player, am)) return aP2(player, d2, am, gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.nW(am)) return aP2(player, d2, am, gr);
					for (aL = 0; aL < 4; aL++)
						if (am = al + aAO[aL], f.cn(am)) return aP2(player, d2, am, gr)
				}(player, aL, gr)
			}
			return 1
		}(aL, n.gs(gt[aL]), tt[aL] % 64) && (d8.gk.sz(aL), d8.aEC.aED(aL))
	}, this.aDe = function(player, c3, nT, c9, d2) {
		if (!(5 <= nT)) {
			var aHy = j.k;
			if (bQ.by.wB(aHy) && nc.nd(player, aHy) && player !== aHy && 0 !== cT.a9e[aHy].length && bQ.by.cd(player, 5)) {
				for (var aP1, dg = !1, aL = 0; aL < 4; aL++)
					if (aP1 = c3 + n.aAK[aL] << 2, f.g(aP1) && !f.cn(aP1) && f.co(aP1) === aHy) {
						dg = !0;
						break
					} dg && (bp.de(719, 0), nT = d2 < 25e3 ? L(404) + " (" + bQ.cL.cs(d2) + ") ⛵" : L(405) + " (" + bQ.cL.cs(d2) + ") 🚢", bp.cA(180, nT, 719, player, bJ.w8, bJ.bK, -1, !0, void 0, {
					c7: 1,
					c9: c9
				}))
			}
		}
	}
}

function aGo() {
	this.eD = function() {
		if (0 !== j4.d9.aGp && (eF.globalAlpha = Math.min(j4.d9.aGp / 580, 1), eF.drawImage(j4.d9.aP8, 1 + oI.aFt(), 1 + oI.bm()), eF.globalAlpha = 1, j.bC)) {
			for (var c4 = pW / a3D, c5 = pX / a3D, fE = (bN.aV + pW) / a3D, gx = (bN.au + pX) / a3D, mj = j4.d9.aP9 * a3D, aPA = j4.d9.aPA, aL = j.ck - 1; 0 <= aL; aL--) ! function(aL, mj, c4, c5, fE, gx, aPA) {
				var highlight;
				0 === cT.iw[aL] || 0 === cT.cj[aL] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aL]) && (mj *= 2), fE = bN.aV * ((cT.gu[aL] + cT.gw[aL] + 1) / 2 - c4) / (fE - c4) - .5 * mj, c4 = bN.au * ((cT
					.gv[aL] + cT.gy[aL] + 1) / 2 - c5) / (gx - c5) - .5 * mj, fE > bN.aV) || c4 > bN.au || fE < -mj || c4 < -mj || (highlight ? eF.setTransform(2 * a3D, 0, 0, 2 * a3D, fE, c4) : eF.setTransform(a3D, 0, 0, a3D, fE, c4), eF
					.drawImage(aPA[j.cu ? cw.cz[aL] : 1], 0, 0))
			}(aL, mj, c4, c5, fE, gx, aPA);
			eF.setTransform(a3D, 0, 0, a3D, 0, 0)
		}
	}
}

function aM5() {
	var aV, aH, aPC, canvas, be, bi, a0L, sq, bP, t7, aPD = 11 / 12;

	function aPE() {
		var tK = Math.floor(a0L * (aV - 2 * aPC)),
			aPG = 1 + Math.floor(.0625 * bn.au),
			aPH = 1 + Math.floor(.3 * bn.au),
			qu = Math.floor(.55 * bn.au);
		be.clearRect(0, 0, aV, bn.au), be.fillStyle = bJ.fx, be.fillRect(0, 0, aPC, bn.au), be.fillRect(aPC + tK, 0, aV - aPC - tK, bn.au), be.fillStyle = a0L < 1 / 3 ? "rgba(" + Math.floor(3 * a0L * 130) + ",130,0,0.85)" : a0L < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (a0L - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (a0L - 2 / 3) * 130) + ",0.85)", be.fillRect(aPC, 0, tK, bn.au), be.fillStyle = bJ.bL, be.fillRect(0, 0, aV, 1), be.fillRect(0, bn
				.au - 1, aV, 1), be.fillRect(0, 0, 1, bn.au), be.fillRect(aPC, 0, 1, bn.au), be.fillRect(aPC + tK, 0, 1, bn.au), be.fillRect(aV - aPC, 0, 1, bn.au), be.fillRect(aV - 1, 0, 1, bn.au), be.fillRect(Math.floor(.25 * bn.au) + aPH, Math
				.floor((bn.au - aPG) / 2), bn.au - 2 * aPH, aPG), be.fillRect(Math.floor(aV - 1.25 * bn.au) + aPH, Math.floor((bn.au - aPG) / 2), bn.au - 2 * aPH - aPH % 2, aPG), be.fillRect(Math.floor(aV - 1.25 * bn.au) + Math.floor((bn.au - aPG) /
				2), aPH, aPG, bn.au - 2 * aPH - aPH % 2), sq = bQ.by.a0T(j.k, bn.tf()), be.fillText(bQ.cL.cs(sq) + " (" + bQ.cL.dw(100 * a0L, +(a0L < .1)) + ")", Math.floor(.5 * aV), qu)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		a0L = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => bn.aPN(arg1);

	function aPL(a33) {
		return !(1 < a33 && 1 === a0L || (1 < a33 && a33 * a0L - a0L < 1 / 1024 ? a33 = (a0L + 1 / 1024) / a0L : a33 < 1 && a0L - a33 * a0L < 1 / 1024 && (a33 = (a0L - 1 / 1024) / a0L), a0L = hu.hz(a0L * a33, 1 / 1024, 1), aPE(), 0))
	}

	function aPM(hr) {
		return a0L !== (a0L = hu.hz((hr - aH - aPC) / (aV - 2 * aPC), 1 / 1024, 1)) && (aPE(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aPE(), cH.cI = !0
	}, this.aJ = 0, this.a8D = !1, this.b3 = function() {
		bi = !j.bC && !j.cp, t7 = !1, a0L = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (hk.buffer.data[182].value + 1) / 1024, sq = 0, this.a8D = !1, this.resize()
	}, this.resize = function() {
		b4.b5.b6() && bN.aV < .8 * bN.au ? (this.au = Math.floor(.066 * bN.bO), aV = bN.aV - 4 * bT.gap - this.au) : (aV = Math.floor((b4.b5.b6() ? .65 : .389) * bN.bO), aV += 12 - aV % 12, this.au = Math.floor(aV / 12)), aPC = Math.floor(3 *
			this.au / 2), bP = bQ.bR.bS(1, Math.floor(.5 * this.au)), (canvas = document.createElement("canvas")).width = aV, __fx.mobileKeybinds.setSize(aV, this.au, eF), canvas.height = this.au, (be = canvas.getContext("2d", {
			alpha: !0
		})).font = bP, bQ.bR.textBaseline(be, 1), bQ.bR.textAlign(be, 1), this.aFp(), aPE()
	}, this.aFp = function() {
		aH = b4.b5.b6() && bN.aV < .8 * bN.au ? this.au + 3 * bT.gap : Math.floor((bN.aV - aV) / 2), this.aJ = bN.au - this.au - br.bs() * bT.gap
	}, this.j3 = function() {
		t7 && (t7 = !1, aPE())
	}, this.bi = function() {
		return !(!bi || qZ.qa && aH < Math.floor(bT.gap + 5.5 * this.au))
	}, this.bo = function(qR) {
		return !!this.bi() && aH + aV > bN.aV - qR - bT.gap
	}, this.iy = function() {
		bi = !j.cp
	}, this.vp = function() {
		bi = !1
	}, this.tf = function() {
		return hu.hz(Math.floor(1024 * a0L + .5) - 1, 0, 1023)
	}, this.aHP = function(hr, hs) {
		return this.bi() && aH < hr && hr < aH + aV && hs > this.aJ
	}, this.bt = function(hr, hs) {
		if (!this.bi()) return !1;
		if (!(__fx.settings.keybindButtons && hs > this.aJ - Math.floor(bT.gap / 4) - this.au && hs < this.aJ - Math.floor(bT.gap / 4) && __fx.mobileKeybinds.click(hr - aH))) {
			if (!bn.aHP(hr, hs)) return !1;
			oI.aFo = !1, ! function(qj, hr, hs) {
				if (function(hr, hs) {
						return aH < hr && hr < aH + aPC && hs > bn.aJ
					}(hr, hs)) return aPL(aPD);
				if (function(hr, hs) {
						return aH + aV - aPC < hr && hr < aH + aV && hs > bn.aJ
					}(hr, hs)) return aPL(1 / aPD);
				return qj.a8D = !0, aPM(hr)
			}(this, hr, hs) || (cH.cI = !0)
		}
		return !0
	}, this.aPN = function(mi) {
		0 !== j.e5 && this.bi() && aPL(mi) && (cH.cI = !0)
	}, this.q9 = function(deltaY) {
		var mi;
		return !(0 === deltaY || !this.bi()) && aPL(mi = 0 < deltaY ? (mi = 400 / (400 + deltaY)) < aPD ? aPD : mi : 1 / aPD < (mi = (400 - deltaY) / 400) ? 1 / aPD : mi)
	}, this.ez = function(hr) {
		return !!this.a8D && aPM(hr)
	}, this.aPO = function() {
		this.a8D = !1
	}, this.e6 = function() {
		this.bi() && sq !== bQ.by.a0T(j.k, this.tf()) && (t7 = !0)
	}, this.eD = function() {
		this.bi() && (eF.drawImage(canvas, aH, this.aJ), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(eF, aH, this.aJ)
	}
}

function pj() {
	var aPP, aPQ, aPR, uc, aPS, aPT = 0;
	this.mS = new fo, aPR = new qP([.45, .27], [.5, .5], 2 / 3), aPQ = [new g0("⚔️<br>" + L(406), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aPU(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bJ.aPV), new g0("🗡️<br>" + L(407), function() {
			aPU(1)
		}, bJ.g3), new g0("🔑<br>" + L(408), function() {
			aPU(2)
		}, bJ.aPW), new g0("☰<br>" + L(409), function() {
			aPU(3)
		}, bJ.aPX), new g0("", function() {
			f1.g9(12)
		}, bJ.fx, !1),
		new g0("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new g0("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uc = new om(hk.buffer.data[122]);
	for (var aL = 0; aL < aPQ.length; aL++) aPQ[aL].button.style.position = "absolute";

	function aPU(hy) {
		b4.b5.setState(10), gN.gO() || gN.m7(), 0 === hy ? f1.d9.aPY(1) : 1 === hy ? (ib.ic.pB(hk.buffer.data[156].value, 1) || j.vM.a0H(), f1.g9(19)) : 2 === hy ? 0 !== b4.id || hk.buffer.data[140].value ? f1.g9(8, f1.mQ, new gA(16)) : f1.d9.aPZ(f1
			.mQ, 16) : 3 === hy && f1.g9(1)
	}
	uc.l0.style.position = "absolute", uc.l0.style.textAlign = "center", uc.l0.placeholder = L(410), this.show = function() {
		eg.setState(0), b4.b5.setState(12), this.mS.show(), aPQ[4].r2(bQ.color.aNB(hk.buffer.data[121].value)), this.resize(), document.body.appendChild(uc.l0);
		for (var aL = 0; aL < aPQ.length; aL++) document.body.appendChild(aPQ[aL].button);
		1 !== b4.id || b4.xU < 5 || (aPS && cH.bU > aPS + 144e5 ? b4.a4n.setState(14) : aPS = cH.bU)
	}, this.gG = function() {
		this.mS.gG(), f1.removeChild(document.body, uc.l0);
		for (var aL = 0; aL < aPQ.length; aL++) f1.removeChild(document.body, aPQ[aL].button)
	}, this.resize = function() {
		this.mS.resize(), this.mS.resize(), aPR.resize();
		var gap = .5 * bT.gap,
			a8v = 10 / 99 * .84 * aPR.aV,
			aPc = .16 * aPR.au,
			aG2 = .19 * aPR.aV,
			aH = aPR.aH + aG2,
			a8v = aPR.aJ + a8v + 3 * gap,
			aV = .5 * (aPR.aV - gap) - aG2,
			aG2 = aPR.aV - 2 * aG2 - aPc - gap,
			aG2 = (bQ.bR.gK(uc.l0, aH, a8v, aG2, aPc), bQ.bR.gK(aPQ[4].button, aH + aG2 + gap, a8v, aPc, aPc), aPT = a8v, .5 * (aPR.aJ + aPR.au - (a8v += aPc + gap) - gap));
		bQ.bR.gK(aPQ[0].button, aH, a8v, aV, aG2), bQ.bR.gK(aPQ[1].button, aH + aV + gap, a8v, aV, aG2), bQ.bR.gK(aPQ[2].button, aH, a8v + aG2 + gap, aV, aG2), bQ.bR.gK(aPQ[3].button, aH + aV + gap, a8v + aG2 + gap, aV, aG2);
		bQ.bR.gK(aPQ[5].button, aH, a8v + aG2 * 2 + gap * 2, aV * 2 + gap, aG2 / 3);
		bQ.bR.gK(aPQ[6].button, aH, a8v + aG2 * 2.33 + gap * 3, aV * 2 + gap, aG2 / 3);
		for (var aL = 0; aL < aPQ.length; aL++) aPQ[aL].button.style.font = bQ.bR.bS(0, bQ.bR.mo(.065 * aPR.au)), bQ.bR.gL(aPQ[aL].button, 5);
		uc.l0.style.font = bQ.bR.bS(0, bQ.bR.mo(.08 * aPR.au)), bQ.bR.gL(uc.l0, 5)
	}, this.eD = function() {
		if (eg.aPe(), zv.eD(), aI = Math.floor((b4.b5.b6() ? .018 : .0137) * bN.bO), eF.font = bQ.bR.bS(0, Math.max(5, aI)), bQ.bR.textBaseline(eF, 0), bQ.bR.textAlign(eF, 2), eF.fillStyle = bJ.bL, eF.fillText(eh.xU, bN.aV, 0), text =
			"Win count: " + __fx.wins.count, textLength = eF.measureText(text).width, aI = Math.max(5, aI), eF.textAlign = "left", eF.textBaseline = "middle", eF.fillText(text, eF.canvas.width - textLength - aI / 2, 2 * aI), o0.eD(aPT), mU.eD(),
			gN.gO()) {
			eF.imageSmoothingEnabled = !1;
			var text = gN.m6("territorial.io"),
				textLength = .84 * aPR.aV / text.width;
			eF.setTransform(textLength, 0, 0, textLength, aPR.aH + .08 * aPR.aV, aPR.aJ), aPP = aPP || bQ.mH.mO(text, bQ.mH.zJ, [0, 0, 0]);
			for (var aH = -1; aH <= 1; aH += 2)
				for (var aJ = -1; aJ <= 1; aJ += 2) eF.drawImage(aPP, aH, aJ);
			eF.drawImage(text, 0, 0), eF.imageSmoothingEnabled = !0;
			var aI = gN.m6("logo"),
				aPh = .6666 * textLength * text.height / aI.height,
				fE = .5 * bN.aV,
				gx = aPR.aJ + .5 * textLength * text.height - .5 * aPh * aI.height;
			eF.setTransform(aPh, 0, 0, aPh, fE - .6 * textLength * text.width, gx), eF.drawImage(aI, 0, 0), eF.setTransform(aPh, 0, 0, aPh, fE + .6 * textLength * text.width - aPh * aI.width, gx), eF.drawImage(aI, 0, 0), eF.setTransform(1, 0, 0,
				1, 0, 0), eF.imageSmoothingEnabled = !0
		}
	}
}

function aPi() {
	this.aNQ = function(es, i9) {
		pD.b3(i9), 0 === pD.size ? el.d9.vE(es, 3205) : __fx.customLobby.isCustomMessage(i9) || ((0 === pD.iB(1) ? function(es) {
			var aPm = pD.iB(6);
			0 === aPm ? function(es) {
					if (0 === es && 8 !== eg.f3()) {
						f1.d9.aQ0();
						for (var aQ1 = pD.iB(12), aQ2 = pD.iB(6), cK = new Array(aQ1), aL = 0; aL < aQ1; aL++) cK[aL] = pD.iB(aQ2);
						zv.zo(cK)
					}
				}(es) : 2 === aPm ? el.aPo.aPp(es) : 3 === aPm || 4 === aPm ? o1.b3() : 5 === aPm ? el.aPq.aKS() : 9 === aPm ? el.aPq.aKU(es) : 10 === aPm ? el.aPr.aPs() : 11 === aPm ? el.aPq.aKW(es) : 12 === aPm ? el.aPr.aPt() :
				13 === aPm ? el.aPu.aPv() : 14 === aPm ? el.aPu.aPw() : 15 === aPm ? el.aPq.aKa() : 16 === aPm ? el.aPo.aPx(es) : 17 === aPm ? el.aPo.aPy(es) : 19 === aPm ? el.aPo.aPz(es) : 20 === aPm ? el.aPq.aKT(es) : 21 !== aPm &&
				22 !== aPm && 23 === aPm && el.aPq.aKd(es)
		} : function(es) {
			if (8 !== eg.f3() && !o1.aGg()) return;
			if (es !== el.d9.uj) el.d9.vE(es, 3244);
			else if (0 === pD.iB(1)) cH.aBm.aBt(pD.i9);
			else {
				var aL, es = pD.iB(2);
				if (0 === es) {
					var dF, dD = pD.iB(9);
					0 !== cT.iw[dD] && 0 !== cT.iw[j.k] && (dF = pD.iB(10), bp.dC(dD, j.k, dF), cb.dZ(dD, 1, dF))
				} else if (1 === es) ! function() {
					var dD = pD.iB(9);
					0 !== cT.iw[dD] && 0 !== cT.iw[j.k] && a4d.aBE(0, [dD], !0) && bp.dY(dD, 1)
				}();
				else if (2 === es) ! function() {
					var dD = pD.iB(9),
						target = pD.iB(9);
					0 !== cT.iw[dD] && 0 !== cT.iw[target] && 0 !== cT.iw[j.k] && a4d.aBE(1, [dD], !0) && (cb.dZ(dD, 3, 96), cb.dZ(target, 4, 96), bp.dd(dD, target))
				}();
				else if (eh.aEo && !eh.aEp) {
					var aI = 540;
					for (iG.kT(17287), iG.ty(1, 0), iG.ty(6, 10), aI = Math.min(bx.aBv.wi.length, 540), aL = 0; aL < aI; aL++) iG.aBW(32, bx.aBv.wi[aL]);
					el.d9.send(el.d9.uj, iG.i9)
				}
			}
		})(es), cH.aPl())
	}
}

function aBd() {
	function aQM(cK, gC, gD) {
		var aQN = cK[gC];
		cK[gC] = cK[gD], cK[gD] = aQN
	}
	this.jk = [
		[],
		[],
		[],
		[]
	], this.aJA = [0, 0, 0, 0], this.lB = [], this.rJ = function(aQ8, jQ, username, jf, jh, jw, elo, color, a9B, aQ9, code) {
		username = this.lC(jQ, username, jf, jh, jw, elo, color, a9B, aQ9, code);
		this.jk[aQ8].push(username), jl.aBY === jQ && (jl.jo = username), jl.aBZ.aKI(jQ) && (username.kz = 1), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQ8 && 1 === jl.d9.aIp[2]
	}, this.lC = function(jQ, username, jf, jh, jw, elo, color, a9B, aQ9, code) {
		return {
			jQ: jQ,
			username: code ? __fx.nameFilter.filter(username) : "Player " + iU.iV.cs(jQ, 2),
			aQA: __fx.nameFilter.filter(username),
			jf: jf,
			jh: jh,
			jw: jw,
			elo: elo,
			color: color,
			a9B: a9B,
			aQ9: aQ9
		}
	}, this.aQB = function(hy, aQ8, jf, jh, jw, elo, a9B, color) {
		hy = this.jk[aQ8][hy];
		hy.jf = jf, hy.jh = jh, hy.jw = jw, hy.elo = elo, hy.a9B = a9B, hy.color = color, jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQ8 && 1 === jl.d9.aIp[2]
	}, this.aQC = function(hy, aQ8, code) {
		hy = this.jk[aQ8][hy];
		1 === code && (hy.username = hy.aQA), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQ8 && 1 === jl.d9.aIp[2]
	}, this.aQD = function(hy, aQ8, aQE) {
		var hy = this.jk[aQ8][hy],
			aQF = hy.username,
			lI = "Redacted " + iU.iV.cs(hy.jQ, 2);
		hy.username = aQE ? "[" + bQ.cL.ju(aQF) + "] " + lI : lI, aQF.indexOf("Redacted") < 0 && (hy.l9 = aQF), jl.hb.lK(hy.jQ), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQ8 && 1 === jl.d9.aIp[2]
	}, this.aQG = function(hy, aQH, aQI) {
		var player = this.jk[aQH][hy];
		this.aQJ(hy, aQH), this.jk[aQI].push(player), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQI && 1 === jl.d9.aIp[2]
	}, this.aQJ = function(hy, aQH) {
		var jm = this.jk[aQH];
		this.lB.push(jm[hy]), 1e3 < this.lB.length && this.lB.shift(), hy >= this.aJA[aQH] ? jm[hy] = jm[jm.length - 1] : (this.aJA[aQH]--, 2 === aQH ? (jm.splice(this.aJA[aQH] + 1, 0, jm[jm.length - 1]), jm.splice(hy, 1)) : (jm[hy] = jm[this
			.aJA[aQH]], jm[this.aJA[aQH]] = jm[jm.length - 1])), jm.pop(), jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === aQH && 1 === jl.d9.aIp[2]
	}, this.aQK = function(hy, jd) {
		jl.d9.aJI += 29 === f1.mQ && jl.d9.aIp[0] === jd && 1 === jl.d9.aIp[2];
		var jm = this.jk[jd],
			cF = jm[hy];
		if (2 === jd)
			if (hy >= this.aJA[jd]) {
				jl.aBZ.join(cF);
				for (var aQL = this.aJA[jd], elo = cF.elo; aQL && elo > jm[aQL - 1].elo;) aQL--;
				jm[hy] = jm[this.aJA[jd]], jm.splice(this.aJA[jd]++, 1), jm.splice(aQL, 0, cF)
			} else jm.splice(this.aJA[jd]--, 0, cF), jm.splice(hy, 1);
		else hy >= this.aJA[jd] ? (jl.aBZ.join(cF), aQM(jm, this.aJA[jd]++, hy)) : aQM(jm, --this.aJA[jd], hy)
	}, this.jj = function(jQ) {
		for (var jk = this.jk, aI = jk.length, aL = 0; aL < aI; aL++)
			for (var jm = jk[aL], d7 = jm.length, c2 = 0; c2 < d7; c2++)
				if (jQ === jm[c2].jQ) return jm[c2];
		return null
	}
}

function aC0() {
	aLn.aGi(), eF.setTransform(a3D, 0, 0, a3D, 0, 0), eF.imageSmoothingEnabled = a3D < 3, eF.drawImage(v.x5, oI.aFt(), oI.bm()), j4.aGn.eD(), eF.drawImage(aBH, oI.aFt(), oI.bm()), aLn.eD(), d8.eD(), cb.eD(), (j.qV ? (li.eD(), bq) : (bp.eD(), a4Y
	.eD(), bn.eD(), bq.eD(), bh.eD(), gZ.eD(), oI.eD(), bd.eD(), li.eD(), tu.eD(), a4a.eD(), qZ.eD(), i0.eD(), j1.eD(), a8k.eD(), j0)).eD(), f1.eD()
}

function vg(be, aV, au) {
	be.clearRect(0, 0, aV, au), be.fillStyle = bJ.bK, be.fillRect(0, 0, aV, au)
}

function vj(be, aV, au, vl) {
	be.fillStyle = bJ.bL, be.fillRect(0, 0, aV, vl), be.fillRect(0, 0, vl, au), be.fillRect(aV - vl, 0, vl, au), be.fillRect(0, au - vl, aV, vl)
}

function vm(be, aH, aJ, hJ, vl, aP, aQO) {
	be.fillStyle = bJ.bL;
	var aP = Math.floor(hJ * aP),
		qt = (aP += (aP - vl) % 2, Math.floor((aP - vl) / 2)),
		hJ = Math.floor((hJ - aP) / 2);
	be.fillRect(aH + hJ, aJ + hJ + qt, aP, vl), aQO && be.fillRect(aH + hJ + qt, aJ + hJ, vl, aP)
}

function aMF() {
	var aQQ;

	function aQa(cE, a3d, aH, aJ, globalAlpha) {
		v.kZ.save(), v.kZ.globalAlpha = globalAlpha, v.kZ.imageSmoothingEnabled = !1, v.kZ.scale(a3d, a3d), v.kZ.drawImage(cE, Math.floor(aH * (v.w / a3d - cE.width)), Math.floor(aJ * (v.y / a3d - cE.height))), v.kZ.restore()
	}
	this.du = 0, this.dv = 0, this.dx = 0, this.aa = 0, this.b3 = function() {
		(aQQ = new Array(v.x2))[0] = {
			aV: [0, 5e3, 8e3, 1e4],
			db: [220, 250, 255, 220],
			dc: [190, 220, 0, 0],
			c7: [170, 200, 0, 0]
		}, aQQ[1] = {
			aV: [0, 4e3, 5e3, 6e3, 1e4],
			db: [25, 0, 100, 0, 25],
			dc: [25, 0, 0, 0, 25],
			c7: [25, 0, 0, 0, 25]
		}, aQQ[2] = {
			aV: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			db: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			dc: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			c7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aQQ[3] = {
			aV: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			db: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			dc: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			c7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aQQ[4] = {
			aV: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			db: [10, 10, 20, 10, 10, 170, 212],
			dc: [20, 20, 60, 100, 100, 110, 170],
			c7: [70, 70, 160, 30, 30, 60, 120]
		}, aQQ[5] = {
			aV: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			db: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			dc: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			c7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aQQ[6] = {
			aV: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			db: [10, 10, 60, 255, 255, 200, 200],
			dc: [10, 10, 60, 255, 255, 200, 200],
			c7: [80, 80, 255, 255, 255, 200, 200]
		}, aQQ[7] = {
			aV: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			db: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			dc: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			c7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aQQ[8] = {
			aV: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			db: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			dc: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			c7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aQQ[9] = {
			aV: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			db: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			dc: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			c7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aQQ[20] = {
			aV: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			db: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			dc: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			c7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aQQ[21] = {
			aV: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			db: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			dc: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			c7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.xF = function() {
		var aQZ, aL, c2, aQ, oz = function() {
				var oz;
				return v.x5 = document.createElement("canvas"), v.x5.width = v.w, v.x5.height = v.y, v.kZ = v.x5.getContext("2d", {
					alpha: !1
				}), oz = v.kZ.getImageData(0, 0, v.w, v.y), v.aU = oz.data, oz
			}(),
			aV = aQQ[v.dr].aV,
			db = aQQ[v.dr].db,
			dc = aQQ[v.dr].dc,
			c7 = aQQ[v.dr].c7,
			hm = kI.kU(),
			aI = aV.length - 2,
			aQU = new Array(1 + aI),
			aQV = new Array(1 + aI),
			aQW = new Array(1 + aI),
			aQX = new Array(1 + aI);
		for (c2 = aI; 0 <= c2; c2--) aQU[c2] = aV[c2 + 1] - aV[c2], aQV[c2] = db[c2 + 1] - db[c2], aQW[c2] = dc[c2 + 1] - dc[c2], aQX[c2] = c7[c2 + 1] - c7[c2];
		for (aL = v.w * v.y - 1; 0 <= aL; aL--)
			for (c2 = aI; 0 <= c2; c2--)
				if (hm[aL] >= aV[c2]) {
					aQ = hm[aL] - aV[c2], v.aU[4 * aL] = db[c2] + aHR(aQV[c2] * aQ, aQU[c2]), v.aU[4 * aL + 1] = dc[c2] + aHR(aQW[c2] * aQ, aQU[c2]), v.aU[4 * aL + 2] = c7[c2] + aHR(aQX[c2] * aQ, aQU[c2]), v.aU[4 * aL + 3] = 255;
					break
				} v.kZ.putImageData(oz, 0, 0), v.xN(v.dr) && gN.gO() && v.xN(v.dr) && (oz = gN.m6("arena"), aQZ = gN.m6("territorial.io"), aQa(oz, 5, .5, .5, .1), aQa(aQZ, 2, .5, .45, .1)), v.x6 = !0, cH.cI = !0
	}, this.aQb = function() {
		for (var aP, aH, aJ, aW, aX, ws, dv = 0, aV = v.w, au = v.y, aQ = aV * au * 4, aR = aS, aT = v.aU, aL = aV - 1; 0 <= aL; aL--) aR[(aP = aL << 2) + 2] = aR[aQ - aP - 2] = 3;
		for (aQ = 4 * aV, aL = au - 1; 0 <= aL; aL--) aR[(aP = aL * aQ) + 2] = aR[aP + aQ - 2] = 3;
		for (aW = aV - 1, aX = au - 1, aJ = 1; aJ < aX; aJ++)
			for (aQ = aJ * aV, aH = 1; aH < aW; aH++) ws = 1 - (aT[(aP = aQ + aH << 2) + 2] > aT[aP + 1] && aT[aP + 2] > aT[aP]), aR[aP + 2] = 6 - 5 * ws, dv += ws;
		this.du = (aV - 2) * (au - 2), this.aa = 0, v.xL(v.dr) && (v.aa.aO(), v.aa.ab(4, 5)), this.dv = j.w1 = dv - this.aa, this.dx = this.du - this.dv - this.aa, this.dx && (v.aa.ab(6, 2), v.aa.an())
	}
}

function aGm() {
	this.aP9 = 28, this.aGp = 0, this.aP8 = null;
	var aQc = this.aPA = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aQh(hJ, aQi) {
		var aH, aJ, c3, gz, cE = bQ.bR.me(hJ, hJ),
			i5 = bQ.bR.getContext(cE, !0),
			oz = bQ.bR.getImageData(i5, hJ, hJ),
			cO = oz.data,
			d7 = (hJ >> 1) - .5,
			aQj = .5 + d7;
		for (aQj *= aQj, aJ = 0; aJ < hJ; aJ++)
			for (aH = 0; aH < hJ; aH++) gz = (gz = aH - d7) * gz + (gz = aJ - d7) * gz, cO[c3 = 4 * (aJ * hJ + aH)] = aQi[0], cO[1 + c3] = aQi[1], cO[2 + c3] = aQi[2], cO[3 + c3] = (aQj - gz) * aQi[3] / aQj;
		return i5.putImageData(oz, 0, 0), cE
	}

	function aQp(aL, i5, cE, hJ) {
		var highlight, aH, aJ;
		0 !== cT.iw[aL] && 0 !== cT.cj[aL] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aL]) && (hJ *= 2), aH = cT.gu[aL] + cT.gw[aL] + 1 - hJ - 2 >> 1, aJ = cT.gv[aL] + cT.gy[aL] + 1 - hJ - 2 >> 1, highlight ? i5
			.drawImage(cE[j.cu ? 9 === j.dy && 5 === d0.d2[aL] ? 3 : cw.cz[aL] : aL < j.ck ? 1 : 0], aH, aJ, hJ, hJ) : i5.drawImage(cE[j.cu ? 9 === j.dy && 5 === d0.d2[aL] ? 3 : cw.cz[aL] : aL < j.ck ? 1 : 0], aH, aJ))
	}
	this.b3 = function() {
		var qj;
		this.aGp = 700,
			function(qj) {
				var hJ = qj.aP9;
				if (qj.aPA = [], aQc = [], j.cu) {
					for (var aL = 0; aL <= j.aQg; aL++) qj.aPA.push(aQh(hJ, cw.aEL[cw.cy[aL]])), aQc.push(aQh(hJ >> 1, cw.aEL[cw.cy[aL]]));
					9 === j.dy && aQc.push(aQh(hJ, cw.aEL[1]))
				} else qj.aPA.push(aQh(hJ, cw.aEL[7])), qj.aPA.push(aQh(hJ, cw.aEL[4])), aQc.push(aQh(hJ >> 1, cw.aEL[7]))
			}(this),
			function(qj, aQn) {
				var aL, aP8 = qj.aP8,
					i5 = bQ.bR.getContext(aP8, !0),
					aI = j.cW,
					hJ = qj.aP9 >> 1;
				i5.imageSmoothingEnabled = !1, i5.setTransform(1, 0, 0, 1, 0, 0), aQn && i5.clearRect(0, 0, aP8.width, aP8.height);
				if (9 === j.dy) {
					hJ <<= 1;
					qj = a4Z.aFN[5];
					for (aL = aI - qj; aL < aI; aL++) aQp(aL, i5, aQc, hJ);
					aI -= qj, hJ >>= 1
				}
				for (aL = j.ck; aL < aI; aL++) aQp(aL, i5, aQc, hJ)
			}(this, null !== (qj = this).aP8 && qj.aP8.width === v.w - 2 && qj.aP8.height === v.y - 2 || (qj.aP8 = bQ.bR.me(v.w - 2, v.y - 2), !1)), j.bC || this.j5()
	}, this.aEM = aQh, this.j5 = function() {
		for (var aI = j.ck, hJ = this.aP9, aPA = this.aPA, i5 = bQ.bR.getContext(this.aP8, !0), aL = 0; aL < aI; aL++) aQp(aL, i5, aPA, hJ)
	}
}

function aMR() {
	this.aQq = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a70 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bJ.bL, "rgb(170,170,170)"
	], this.aQr = [bJ.bL, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bJ.bL, bJ.dP], this.aQs = [bJ.dP, bJ.bL, bJ.bL, bJ.bL, bJ.dP, bJ.dP, bJ.dP, bJ.dP, bJ.bL];
	var aQt = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.a3e = ["rgba(" + aQt[0] + ",", "rgba(" + aQt[1] + ",", "rgba(" + aQt[2] + ",", "rgba(" + aQt[3] + ",", "rgba(" + aQt[4] + ",", "rgba(" + aQt[5] + ",", "rgba(" + aQt[6] + ",", "rgba(" + aQt[7] + ",", "rgba(" + aQt[8] + ",", "rgba(" + aQt[9] +
			","
		], this.a3f = ["rgb(" + aQt[0] + ")", "rgb(" + aQt[1] + ")", "rgb(" + aQt[2] + ")", "rgb(" + aQt[3] + ")", "rgb(" + aQt[4] + ")", "rgb(" + aQt[5] + ")", "rgb(" + aQt[6] + ")", "rgb(" + aQt[7] + ")", "rgb(" + aQt[8] + ")", "rgb(" + aQt[9] +
			")"
		], this.cx = null, this.aEL = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.vU = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.cy = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.cz = new Uint8Array(j.cW), this.a71 = new Uint8Array(j.cW), this.aQu = new Uint16Array(j.cW), this.aQv = new Uint16Array(this.cy.length + 1), this.aQw = new Uint16Array(this.cy.length), this.mW =
		function() {
			this.cx = [L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419)]
		}, this.b3 = function() {
			if (this.cz.fill(0), this.a71.fill(0), this.aQx(), j.cu) {
				if (9 === j.dy) {
					for (var cz = cw.cz, aL = j.data.teamPlayerCount[7] - 1; 0 <= aL; aL--) cz[aL] = 1;
					var aI = j.cW;
					for (aL = j.data.teamPlayerCount[7]; aL < aI; aL++) cz[aL] = 2;
					cw.cy[1] = 7, cw.cy[2] = 8
				} else j.iv ? function() {
					var vU = cw.vU,
						colorsData = j.data.colorsData;
					if (!j.data.selectableColor)
						for (var aL = j.ck - 1; 0 <= aL; aL--) colorsData[aL] = gh.gi(262144);
					var aR9 = 0,
						ao = 768,
						vT = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = j.data.teamPlayerCount;
					for (aL = 0; aL < 9; aL++)
						if (teamPlayerCount[aL]) {
							for (var a0 = 0, c7 = 0; c7 < 3; c7++) a0 += Math.abs(vU[aL][c7] - vT[c7]);
							a0 < ao && (aR9 = aL, ao = a0)
						} var aRA = new Uint16Array(9);
					for (aL = 0; aL < 9; aL++) aRA[aL] = teamPlayerCount[aL];
					var cy = cw.cy,
						aRB = new Uint8Array(9),
						aY = (cy[0] = 0, 1);
					for (aL = 1; aL < 9; aL++) aRA[aL] && (aRB[aL] = aY, cy[aY++] = aL);
					var nb = j.ck,
						cz = cw.cz;
					aRA[aR9] ? (aRA[aR9]--, cz[0] = aRB[aR9]) : nb = 0;
					var bB = 0;
					for (aL = nb; aL < j.aRC; aL++) {
						var i3 = cy[bB];
						if (aRA[i3]) aRA[i3]--, cz[aL] = aRB[i3];
						else if (aL--, 9 <= ++bB) return console.log("error 325")
					}
				}() : this.e6();
				! function() {
					for (var aI = j.cW, aQu = cw.aQu, aQv = cw.aQv, aQw = cw.aQw, cz = cw.cz, cy = cw.cy, aRL = cy.length, buffer = new Array(aRL), aL = 0; aL < aRL; aL++) buffer[aL] = [];
					for (aL = 0; aL < aI; aL++) buffer[cy[cz[aL]]].push(aL);
					for (aL = 1; aL <= aRL; aL++) aQv[aL] = aQv[aL - 1] + buffer[aL - 1].length;
					for (aL = 0; aL < aRL; aL++)
						for (var aY = buffer[aL].length, d7 = aQv[aL], i3 = 0; i3 < aY; i3++) aQu[i3 + d7] = buffer[aL][i3];
					var ck = j.ck;
					for (aL = 0; aL < aRL; aL++)
						for (aY = buffer[aL].length, d7 = aQv[aL], i3 = 0; i3 < aY; i3++)
							if (aQu[i3 + d7] >= ck) {
								aQw[aL] = i3;
								break
							}
				}(), ! function() {
					for (var aI = j.cW, cz = cw.cz, a71 = cw.a71, cy = cw.cy, aL = 0; aL < aI; aL++) a71[aL] = cy[cz[aL]];
					9 === j.dy && a71.fill(1, aI - a4Z.aFN[5])
				}()
			}
		}, this.aQx = function() {
			for (var aL = this.cy.length - 1; 0 <= aL; aL--) this.cy[aL] = aL
		}, this.e6 = function() {
			var su = new Uint8Array(j.ck),
				sv = new Uint8Array(j.ck),
				aR2 = new Uint16Array(8),
				aR3 = new Uint16Array(this.cy.length);
			this.aR4(su, sv, aR2, 1), this.aR5(aR2), this.aR6(aR3, su, sv), this.aR7(su, sv, aR3), this.aR8()
		}, this.aR4 = function(su, sv, aRA, aRD) {
			for (var c7, l0, aRE, aI = this.cy.length - aRD, cK = new Uint16Array(aI), vU = this.vU, colorsData = j.data.colorsData, aL = j.ck - 1; 0 <= aL; aL--) {
				for (c7 = aI; aRD <= c7; c7--) cK[c7 - 1] = Math.abs(4 * (colorsData[aL] >> 12) - vU[c7][0]) + Math.abs(4 * (colorsData[aL] >> 6 & 63) - vU[c7][1]) + Math.abs(4 * (63 & colorsData[aL]) - vU[c7][2]);
				for (aRE = 768, c7 = aI - 1; 0 <= c7; c7--) cK[l0 = (c7 + aL) % aI] < aRE && (aRE = cK[l0], su[aL] = l0);
				for (aRA[su[aL]] += 4, aRE = 768, c7 = aI - 1; 0 <= c7; c7--) cK[l0 = (c7 + aL) % aI] < aRE && l0 !== su[aL] && (aRE = cK[l0], sv[aL] = l0);
				aRA[sv[aL]]++
			}
		}, this.aR5 = function(aRA) {
			for (var c7, aGs, aI = this.cy.length - 1, aL = aI; 0 <= aL; aL--) this.cy[aL] = aL;
			for (aL = aI - 1; 0 <= aL; aL--) aRA[aL]++;
			for (aL = 1; aL <= aI; aL++) {
				for (aGs = 0, c7 = 1; c7 < aI; c7++) aRA[c7] > aRA[aGs] && (aGs = c7);
				aRA[aGs] = 0, this.cy[aL] = aGs + 1
			}
		}, this.aR6 = function(aR3, su, sv) {
			var c7, jt, bB, a0, l0, mi, dc, aRF = this.cy.length - 1,
				r9 = new Uint16Array(aRF),
				aRG = [],
				aRH = 0,
				js = [],
				aRI = [];
			loop: for (var aL = 0; aL < j.ck; aL++)
				if (null !== (jt = bQ.cL.ju(cT.cr[aL]))) {
					for (c7 = js.length - 1; 0 <= c7; c7--)
						if (jt === js[c7]) {
							aRI[c7].push(aL), aRH = Math.max(aRH, aRI[c7].length);
							continue loop
						} js.push(jt), aRG.push(!1), aRI.push([aL]), aRH = Math.max(aRH, 1)
				}
			for (; 2 < j.aQg && aRH > hu.hv(j.ck, j.aQg);) j.aQg--, j.dy--;
			for (c7 = js.length - 1; 0 <= c7; c7--) {
				for (a0 = -1, bB = js.length - 1; 0 <= bB; bB--) !aRG[bB] && (-1 === a0 || aRI[bB].length > aRI[a0].length) && (a0 = bB);
				for (bB = aRF - 1; 0 <= bB; bB--) r9[bB] = 1;
				for (bB = aRI[a0].length - 1; 0 <= bB; bB--) r9[su[aRI[a0][bB]]] += 3, r9[sv[aRI[a0][bB]]]++;
				for (aL = aRF - 1; 0 <= aL; aL--) {
					for (l0 = a0 % aRF, bB = aRF - 1; 0 <= bB; bB--) r9[bB] > r9[l0] && (l0 = bB);
					for (mi = -1, bB = j.aQg; 0 < bB; bB--)
						if (this.cy[bB] === l0 + 1) {
							mi = bB;
							break
						} if (r9[l0] = 0, -1 !== mi) {
						for (dc = 0, bB = j.aQg; 0 < bB; bB--) aR3[mi] > aR3[bB] && dc++;
						if (dc !== j.aQg - 1) {
							for (bB = aRI[a0].length - 1; 0 <= bB; bB--) aR3[mi]++, this.cz[aRI[a0][bB]] = mi;
							break
						}
					}
				}
				aRG[a0] = !0
			}
		}, this.aR7 = function(su, sv, aR3) {
			for (var aL, aAS, aI = this.cy.length - 1, border = hu.hv(j.ck, j.aQg), aRJ = (0 < j.ck % j.aQg && border++, new Uint8Array(1 + aI)), c7 = aI; 1 <= c7; c7--) aRJ[this.cy[c7]] = c7;
			for (aL = 0; aL < j.ck; aL++) aAS = aRJ[su[aL] + 1], 0 === this.cz[aL] && aAS <= j.aQg && aR3[aAS] < border && (aR3[aAS]++, this.cz[aL] = aAS);
			for (aL = 0; aL < j.ck; aL++) aAS = aRJ[sv[aL] + 1], 0 === this.cz[aL] && aAS <= j.aQg && aR3[aAS] < border && (aR3[aAS]++, this.cz[aL] = aAS);
			for (c7 = j.aQg; 1 <= c7; c7--)
				for (aL = j.ck - 1; 0 <= aL && !(aR3[c7] >= border); aL--) 0 === this.cz[aL] && (aR3[c7]++, this.cz[aL] = c7)
		}, this.aR8 = function() {
			if (j.aQg < 8) j.aQg++, j.dy++, j.aRK = 1;
			else
				for (var aL = j.ck; aL < j.cW; aL++) this.cz[aL] = 1 + aL % j.aQg
		}
}

function aRM() {
	this.aGq = function(player, aRN) {
		return -1 !== aRN && !!d8.ge.a0u(player, aRN) && this.a0a(player, aRN, 0)
	}, this.a0a = function(player, aRN, aRO) {
		player = function(player, aRN, aRO) {
			var aRQ = d8.ge.aRR(player, aRN);
			if (-1 === aRQ) return -1;
			aRQ = d8.ge.aRT(aRQ, aRN);
			if (-1 === aRQ) return -1;
			var a0n = d8.a0q.a0v(aRQ, aRN);
			if (0 <= a0n) return a0n;
			if (d8.a0q.a0w()) return -1;
			if (0 <= (a0n = d8.a0q.a0v(aRN, aRQ))) return d8.a0q.a0x(d8.a0q.a0y(d8.a0q.get(a0n)));
			if (aRQ === aRN) return d8.a0q.a0x(new Uint32Array([aRQ, aRN]));
			if (0 <= (a0n = d8.aRU.a0a(aRQ, aRN))) return a0n;
			return aRO ? function(aRW, player) {
				var aKo = h1.aKo,
					buffer = (aKo.fill(0), [aRW]),
					aAM = (aKo[aRW] = 1, n.aAM),
					aRX = -1,
					aI = buffer.length;
				for (; - 1 === aRX && aI;) {
					for (var cK = [], aL = 0; aL < aI; aL++)
						for (var c3 = buffer[aL], sq = aKo[c3], a0 = 0; a0 < 8; a0++) {
							var a6A, aGH, aRY = c3 + aAM[a0],
								e = 4 * aRY;
							f.kV(e) ? (a6A = aKo[aRY], aGH = sq + 5 + ((1 & a0) << 1), 0 === a6A ? (cK.push(aRY), aKo[aRY] = aGH) : aKo[aRY] = Math.min(aGH, a6A)) : -1 === aRX && a0 % 2 == 0 && f.ys(player, e) && (aRX = c3)
						}
					aI = (buffer = cK).length
				}
				return -1 !== aRX ? function(a5, aRa) {
					var aAM = n.aAM,
						aRb = -1,
						nT = 0,
						hE = [];
					for (; aRa !== a5;)(nT = function(c3, nT) {
						var aKo = h1.aKo,
							aAM = n.aAM,
							sq = aKo[c3];
						if (sq - aKo[c3 + aAM[nT]] != 5 + ((1 & nT) << 1))
							for (var c2 = 0; c2 < 8; c2++) {
								var a0 = c2 + nT + 6 & 7;
								if (sq - aKo[c3 + aAM[a0]] == 5 + ((1 & a0) << 1)) return a0
							}
						return nT
					}(aRa, nT)) !== aRb && (hE.push(aRa), aRb = nT), aRa += aAM[nT];
					hE.push(a5);
					var a0n = d8.a0q.a0v(hE[0], a5);
					if (0 <= a0n) return a0n;
					return d8.a0q.a0x(new Uint32Array(hE))
				}(aRW, aRX) : -1
			}(aRN, player) : -1
		}(player, aRN, aRO);
		return -1 !== player && (h1.cK[0] = d8.a0q.get(player), !0)
	}
}

function aRd(aRe, aRf) {
	var aRl, self, aRg = document.createElement("div"),
		aRh = document.createElement("div"),
		lY = document.createElement("div"),
		aRi = null,
		aRm = (this.uc = new om({
			value: "",
			hy: -1
		}, 0, aRj, function(l0) {
			l0.target.value = bQ.cL.se(l0.target.value), aRi.gI.textContent = 127 - l0.target.value.length
		}), 0),
		aJJ = 1,
		aRn = 0,
		aRo = 1048575;

	function aRj() {
		aRe(), aRi.gI.textContent = 127
	}

	function aJN(aJM, cF) {
		cF && (cF.jZ = 1, aJM.appendChild(jl.hb.transform(cF)))
	}

	function aJL(e0) {
		aJJ ? aRg.scrollTop = aRg.scrollHeight : e0 && (aRg.scrollTop = aRn)
	}
	this.reset = function(aRq) {
			aRo = 1048575, aRh.textContent = "", aRq || this.qS()
		}, this.qS = function() {
			var jd = jl.d9.aIp[0],
				jd = jl.d9.jy[jd],
				k0 = jd.k0,
				aI = k0.length,
				nb = 1048575 === aRo ? 0 : aI - (jd.aDS - aRo + 1048575) % 1048575;
			if (aRo = jd.aDS, !(aI <= (nb = Math.max(nb, 0)))) {
				for (var aJM = document.createDocumentFragment(), aL = nb; aL < aI; aL++) aJN(aJM, jl.ge.jX(k0[aL], jl.ge.jN(k0[aL])));
				aRh.appendChild(aJM), aJL()
			}
		}, this.lw = function(cC) {
			var aJM = document.createDocumentFragment();
			aJN(aJM, cC), aRh.appendChild(aJM), aJL()
		}, this.show = function(rE) {
			rE.appendChild(aRg), rE.appendChild(lY), this.resize(rE)
		}, this.gG = function(rE) {
			f1.removeChild(rE, aRg), f1.removeChild(rE, lY)
		}, this.resize = function(rE) {
			aRm = rE ? rE.offsetHeight : aRm;
			var rE = bQ.bR.lV(.04, .75),
				aOZ = Math.max(rE, aRm - rE),
				aRs = bN.aV / bN.mk,
				aPd = .7 * aRs,
				aRt = bQ.bR.fy(aRm - rE - aOZ),
				aOZ = (lY.style.height = bQ.bR.fy(rE), aRg.style.height = bQ.bR.fy(aOZ), bN.au > bN.aV || b4.b5.b6() ? (lY.style.top = aRt, aRg.style.top = bQ.bR.fy(aRm - aOZ), bQ.bR.gL(aRg, 8)) : (aRg.style.top = aRt, lY.style.top = bQ.bR.fy(aRm -
						rE), bQ.bR.gL(aRg, 2)), this.uc.l0.style.width = bQ.bR.fy(aPd), this.uc.l0.style.fontSize = aRl.button.style.fontSize = bQ.bR.fy(.5 * rE), bQ.bR.gL(this.uc.l0, 6), aRl.button.style.left = bQ.bR.fy(aPd), aRl.button.style
					.width = bQ.bR.fy(aRs - aPd), .385 * rE);
			b4.b5.b6() && (aOZ *= .8 - .12 * (bN.aV > bN.au)), aRh.style.marginLeft = aRh.style.marginRight = bQ.bR.fy(.5 * aOZ), aRh.style.fontSize = bQ.bR.fy(aOZ), aJL(1)
		}, (self = this).uc.l0.aRp = 127, aRg.style.position = "absolute", aRg.style.left = "0", aRg.style.width = "100%", aRg.style.overflowX = "hidden", aRg.style.overflowY = "auto", aRg.style.font = "inherit", aRg.style.backgroundColor = bJ.hZ,
		aRg.addEventListener("scroll", function() {
			aRn = aRg.scrollTop, aJJ = aRn < aRg.scrollHeight - aRg.clientHeight - 2 ? 0 : 1
		}), aRh.style.font = "inherit", lY.style.position = "absolute", lY.style.left = "0", lY.style.width = "100%", self.uc.l0.setAttribute("placeholder", L(420)), self.uc.l0.style.position = "absolute", self.uc.l0.style.top = "0", self.uc.l0.style
		.left = "0", self.uc.l0.style.height = "100%", self.uc.l0.style.backgroundColor = bJ.f8, self.uc.l0.style.textAlign = "center", (aRl = new g0(L(170), aRj)).button.top = "0", aRl.button.style.position = "absolute", aRl.button.style.height =
		"100%", aRl.r2(bJ.aIj), aRi = new o3("127", aRl.button, 1, 1), aRg.appendChild(aRh), lY.appendChild(self.uc.l0), lY.appendChild(aRl.button)
}

function aIn(aIg, aIa, aRv, aIh, aRe, aRf) {
	var lX = document.createElement("div"),
		aRw = document.createElement("div"),
		aRx = document.createElement("div"),
		aRy = document.createElement("div"),
		aRz = document.createElement("div"),
		aS0 = document.createElement("div"),
		aS1 = document.createElement("div"),
		aS2 = document.createElement("div"),
		aS3 = document.createElement("span"),
		aS4 = document.createElement("div");
	this.aIr = new aRd(aRe, aRf), this.aIu = new aS5(aRf), this.aIz = [aIg, aIa, aRv, aIh], this.aJ6 = function(fA) {
		fA = (fA / 10).toFixed(1) + "%";
		aS2.style.width = fA, aS3.innerHTML = fA
	}, this.aIx = function() {
		this.aIu.gG(aS0), this.aIr.show(aS0)
	}, this.aIy = function() {
		this.aIr.gG(aS0), this.aIu.show(aS0)
	}, this.aIq = function() {
		return aRw
	}, this.show = function() {
		document.body.appendChild(lX)
	}, this.gG = function() {
		f1.removeChild(document.body, lX)
	}, this.resize = function(aSA) {
		var aSB = 1 - .4 * b4.b5.b6() * (bN.aV > 1.6 * bN.au),
			a8v = bQ.bR.lV(.05 * aSB),
			aSC = bN.au > bN.aV,
			aSD = bQ.bR.lV(.06 * aSB + .03 * aSC),
			aSE = bQ.bR.lV(.08 * aSB + .03 * aSC),
			aSF = bQ.bR.lV(.04 + .02 * aSC),
			aSC = bQ.bR.lV(.02 * aSB + .01 * aSC),
			aSH = bQ.bR.lV(.025);
		lX.style.font = bQ.bR.bS(0, aSH), aRz.style.font = bQ.bR.bS(0, .9 * aSH), aS4.style.font = bQ.bR.bS(0, .9 * aSH), aSB < 1 && (aSH = bQ.bR.bS(0, aSB * aSH), aRx.style.font = aSH, aRz.style.font = aSH, aS4.style.font = aSH, aS1.style.font =
				aSH, aRy.style.font = aSH), aRw.style.height = bQ.bR.fy(a8v), aRw.style.font = bQ.bR.bS(0, .72 * a8v), bQ.bR.gL(aRw, 2), aRx.style.top = bQ.bR.fy(a8v), aRx.style.height = bQ.bR.fy(aSE), bQ.bR.gL(aRx, 2), aRy.style.font = bQ.bR.bS(
				0, aSB * bQ.bR.lV(.02)), aRy.style.top = bQ.bR.fy(a8v + aSE), aRy.style.height = bQ.bR.fy(aSF), bQ.bR.gL(aRy, 2), aRz.style.top = bQ.bR.fy(a8v + aSE + aSF), aRz.style.height = bQ.bR.fy(aSD), bQ.bR.gL(aRz, 2), aS0.style.top = bQ.bR
			.fy(a8v + aSE + aSF + aSD), aS0.style.height = bQ.bR.fy(bN.au / bN.mk - a8v - aSE - 2 * aSD - aSF - aSC), aS1.style.top = bQ.bR.fy(bN.au / bN.mk - aSD - aSC), aS1.style.height = bQ.bR.fy(aSC), bQ.bR.gL(aS1, 8), aS3.style.font = bQ.bR
			.bS(0, .8 * aSC), aS4.style.top = bQ.bR.fy(bN.au / bN.mk - aSD), aS4.style.height = bQ.bR.fy(aSD), bQ.bR.gL(aS4, 8), aIg.resize(aRx), aIa.resize(aRx), aRv.resize(aRx), aIh.resize(aRx), aSA ? this.aIr.resize(aS0) : this.aIu.resize()
	};
	aRe = this;
	lX.style.position = "absolute", lX.style.top = "0", lX.style.left = "0", lX.style.width = "100%", lX.style.height = "100%", lX.style.backgroundColor = bJ.aS6, l3.l4() || (lX.style.backdropFilter = "blur(4px)", lX.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (lX.style.display = "none"), aRw.style.position = "absolute", aRw.style.top = "0", aRw.style.left = "0", aRw.style.width = "100%", aRw.style.display = "flex", aRw.style.alignItems = "center", aRw.translate = !1;
	for (var cK = [aRx, aRy, aRz, aS4], aL = 0; aL < cK.length; aL++) cK[aL].style.position = "absolute", cK[aL].style.left = "0", cK[aL].style.width = "100%", bQ.bR.fz(cK[aL]);
	aS0.style.position = "absolute", aS0.style.left = "0", aS0.style.width = "100%", aS0.style.font = "inherit", aS1.style.position = "absolute", aS1.style.left = "0", aS1.style.width = "100%", aS2.style.position = "absolute", aS2.style.top = "0",
		aS2.style.left = "0", aS2.style.height = "100%", aS2.style.width = "50%", aS2.style.backgroundColor = bJ.aS7, aS3.innerHTML = "", aS3.style.position = "absolute", aS3.style.top = "50%", aS3.style.left = "50%", aS3.style.transform =
		"translate(-50%, -50%)", aS3.translate = !1, aRw.appendChild(function() {
			var a5M = document.createElement("h1");
			return a5M.textContent = L(421), a5M.style.margin = "0 auto 0.15em auto", a5M.style.fontFamily = "Arial Black, system-ui", a5M.style.fontSize = "inherit", a5M.style.fontWeight = "inherit", a5M
		}()), aRx.appendChild(aIg.kp), aRy.appendChild(aIa.kp), aRz.appendChild(aRv.kp), aS1.appendChild(aS2), aS1.appendChild(aS3), aS4.appendChild(aIh.kp), lX.appendChild(aRw), lX.appendChild(aRx), lX.appendChild(aRy), lX.appendChild(aRz), lX
		.appendChild(aS0), lX.appendChild(aS1), lX.appendChild(aS4), aRe.aIu.show(aS0)
}

function yC() {
	this.a66 = function(bV) {
		for (var aI = bV.length, aV = iG, aL = 0; aL < aI; aL++) aV.ty(16, bV.charCodeAt(aL))
	}
}

function aMJ() {
	var input;

	function aSJ(l0) {
		(l0 = l0.target.files) && 0 < l0.length && aLq.aSM(l0[0])
	}

	function aSN(l0) {
		var bB = new Image;
		bB.onload = aSO, bB.src = l0.target.result
	}

	function aSO(l0) {
		var l0 = l0.target,
			aV = l0.width,
			au = l0.height,
			aSP = hk.buffer.data[162].value,
			max = Math.min(v.x4, aSP),
			aSP = (max = b4.id || l3.l4() ? Math.min(1400, aSP) : max) / Math.max(aV, au);
		if (aSP < 1 && (aV = Math.floor(aSP * aV + .125), au = Math.floor(aSP * au + .125)), max < aV || max < au || aV < 10 || au < 10) aSP = "Invalid Image Dimensions!", b4.a4n ? b4.a4n.showToast(aSP) : alert(aSP);
		else {
			for (var max = document.createElement("canvas"), aSP = (max.width = aV, max.height = au, max.getContext("2d")), aSR = document.createElement("canvas"), aSS = (aSR.width = l0.width, aSR.height = l0.height, aSR.getContext("2d")), l0 = (aSS
					.drawImage(l0, 0, 0), aSS.getImageData(0, 0, aSR.width, aSR.height)), aSS = aSP.createImageData(aV, au), src = l0.data, aSV = aSS.data, aFv = aSR.width / aV, aFx = aSR.height / au, aJ = 0; aJ < au; aJ++)
				for (var aH = 0; aH < aV; aH++) {
					var aSW = Math.floor(aH * aFv),
						aSW = 4 * (Math.floor(aJ * aFx) * aSR.width + aSW),
						aSZ = 4 * (aJ * aV + aH);
					aSV[aSZ] = src[aSW], aSV[1 + aSZ] = src[1 + aSW], aSV[2 + aSZ] = src[2 + aSW], aSV[3 + aSZ] = 255
				}
			aSP.putImageData(aSS, 0, 0), 20 === f1.mQ && f1.mR().aSO(max)
		}
	}
	this.b3 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aSJ
	}, this.iA = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aSK = function() {
		input.click()
	}, this.aSM = function(rq) {
		var cK = rq.name.split("."),
			cK = cK[cK.length - 1].toLowerCase();
		"gif" !== cK && "jpg" !== cK && "jpeg" !== cK && "png" !== cK || ((cK = new FileReader).onload = aSN, cK.readAsDataURL(rq))
	}
}

function aJs() {
	this.i2 = function(dF, player) {
		bp.dC(j.k, player, dF), el.dD.aSa(dF, player)
	}, this.bz = function(player) {
		bp.dY(player, 0), el.dD.aSb(player)
	}, this.aSc = function(aSd, player) {
		bp.da(aSd, player), el.dD.aSe(aSd, player)
	}, this.aSf = function() {
		j.iv || j.cp || el.aSg.aSf()
	}
}

function aM8() {
	var k6 = 0;
	this.b3 = function() {
		ey.b3(), k6 = 0
	}, this.setState = function(aSh) {
		k6 = aSh
	}, this.f3 = function() {
		return k6
	}, this.aSi = function() {
		this.setState(8), f1.q7()
	}, this.oq = function(l0) {
		if (!v.x6) return !1;
		if (!(cH.bU < 400)) {
			if ("Enter" === l0.key || "Escape" === l0.key) {
				if (this.aSj()) return !0;
				if ("Enter" === l0.key) {
					if (0 === k6) return !0;
					if (7 === k6) return !0
				}
			}
			return !1
		}
	}, this.aH9 = function() {
		aLs.resize()
	}, this.aSj = function() {
		return !!aLs.gG()
	}, this.bt = function(aH, aJ) {
		!v.x6 || aLs.bt(aH, aJ) || 6 === k6 && en.bt(aH, aJ) || mU.bt(aH, aJ) || zv.bt(aH, aJ)
	}, this.ez = function(aH, aJ) {
		!zv.zl && ey.ez(aH, aJ, !0) || zv.ez(aH, aJ)
	}, this.click = function(aH, aJ) {
		zv.zx()
	}, this.q9 = function(aH, aJ, deltaY) {}, this.aHA = function() {
		ey.zs(), cH.cI = !0
	}, this.eD = function() {
		8 !== k6 && 10 !== k6 && (eF.imageSmoothingEnabled = !0, this.aGi(), 0 !== k6 && (zv.eD(), o0.eD(), this.aPe(), mU.eD()), 0 !== k6 && 6 === k6 && en.eD(), aLs.eD(), f1.eD())
	}, this.aGi = function() {
		var aSl, aSk;
		if (__fx.makeMainMenuTransparent) eF.clearRect(0, 0, bN.aV, bN.au);
		else v.x6 ? (aSk = bN.aV / v.w, aSl = bN.au / v.y, eF.setTransform(aSk = aSl < aSk ? aSk : aSl, 0, 0, aSk, Math.floor((bN.aV - aSk * v.w) / 2), Math.floor((bN.au - aSk * v.y) / 2)), eF.drawImage(v.x5, 0, 0), eF.setTransform(1, 0, 0, 1, 0,
			0), eF.fillStyle = bJ.f8) : eF.fillStyle = bJ.dP, eF.fillRect(0, 0, bN.aV, bN.au)
	}, this.aPe = function() {
		var aJ = Math.floor(.3 * bN.au),
			canvas = gN.m6("territorial.io"),
			a3d = (a3d = 1.75 * bN.au / canvas.width) * canvas.width < .98 * bN.aV ? .98 * bN.aV / canvas.width : a3d,
			aH = (eF.globalAlpha = .15, eF.imageSmoothingEnabled = !1, Math.floor(.5 * (bN.aV - a3d * canvas.width))),
			aH = Math.floor(aH / a3d),
			aJ = Math.floor(aJ - .5 * canvas.height * a3d),
			aJ = Math.floor(aJ / a3d);
		eF.setTransform(a3d, 0, 0, a3d, aH, aJ), eF.drawImage(canvas, aH, aJ), eF.setTransform(1, 0, 0, 1, 0, 0), eF.globalAlpha = 1, eF.imageSmoothingEnabled = !0
	}
}

function ii() {
	this.b3 = function() {
		this.aSm = 0, this.ld = [], this.aGE = 0, this.aG6 = 0
	}, this.d = function() {
		var qj;
		j.iv || (qj = this, 2 === j.aBj ? qj.ld = rR.ij.lc() : j.cu ? qj.ld = rR.ij.lf() : qj.ld = rR.ij.lh(), qj.aSm = rO.qE.aSo(), qj.aGE = Math.max(1, rR.ij.lm(qj.ld)), bx.by.aSf(), 8 === j.dy ? rR.result.aG6 = 0 : qj.aG6 = 100 * rR.result
			.aSm * (1 + j.bG))
	}
}

function aSq() {
	var aSr;
	this.b3 = function() {
		aSr = !1
	}, this.e6 = function() {
		var aP;
		if (function() {
				if (!aSr) {
					if (cH.e1() % 30 != 9) return;
					if (!bQ.by.p3(90)) return;
					aSr = !0
				}
				return 1
			}() && (! function() {
				var cF = bp.dh(956);
				if (cF) {
					if (bQ.by.hC(cF.player)) return 1;
					bp.de(956, 0)
				}
				return
			}() && (-1 === (aP = (j.cu ? function() {
				var id = li.p7(),
					aI = eA.eB;
				if (cw.cy[id])
					for (var b7 = eA.eC, cz = cw.cz, aL = 0; aL < aI; aL++) {
						var aP = b7[aL];
						if (cz[aP] !== id) return aP
					} else if (1 < aI) return h9[aI - 1];
				return -1
			} : function() {
				for (var uG = eA.eB, uF = eA.eC, aSz = wC, aL = 0; aL < uG; aL++) {
					var aP = uF[aL];
					if (0 !== aSz[aP]) return aP
				}
				return -1
			})()) ? ! function() {
				var cF = bp.dh(957);
				if (cF && cF.bb) {
					if (f.cn(cF.bb.c3 << 2)) return 1;
					bp.de(957, 0)
				}
				return
			}() : (bp.cA(0, L(422, [cT.cU[aP]]), 956, aP, bJ.bL, bJ.bK, -1, !0), 0)))) {
			var aI = gU.fW.zS;
			if (0 !== aI)
				for (var buffer = gU.fW.buffer, aL = 0; aL < aI; aL++) {
					var c3 = buffer[aL];
					if (f.cn(c3 << 2)) return void bp.cA(0, L(423, [n.r(c3), n.t(c3)]), 957, 0, bJ.bL, bJ.bK, -1, !0, void 0, {
						c2: 1,
						c3: c3
					})
				}
		}
	}
}

function im() {
	this.e6 = function() {
		var aT5;
		2 === j.aBj ? (bp.bD(0, 59), c0.aT0(2700)) : j.dy < 7 ? (aT5 = cw.cy[j.lg], aT5 = cw.cx[aT5], bd.dL(L(424, [aT5]), 2, 1, 12), bp.cA(0, L(425, [aT5]), 40, 0, bJ.bL, bJ.bK, -1, !1), c0.aT0(2700)) : 8 === j.dy ? (j.dK ? bp.bD(j.aNx, 2) : bp
			.bD(1 - j.k, 3), j.dN.aKv(j.aNx), c0.c1(j.aNx, 2700, !1, 0)) : 9 === j.dy ? (bp.dJ(), c0.aT0(2700)) : (bp.ch(j.aNx), c0.c1(j.aNx, 2700, !1, 0))
	}, this.aBl = function() {
		var bV;
		j.cp || j.iv || (bV = el.d9.uy(), j.dy < 7 ? bV += "/log/team" : 8 === j.dy ? bV += "/log/1v1" : 9 === j.dy ? bV += "/log/zombies" : bV += "/log/br", bp.cA(720, bV, 736, 0, bJ.bL, bJ.g5, -1, !1))
	}
}

function aLw() {
	this.aT7 = "https://territorial.io/changelog", this.aT8 = "https://territorial.io/terms", this.aT9 = "https://territorial.io/privacy", this.aTA = "https://territorial.io/tutorial", this.aTB = "https://territorial.io/players", this.aTC =
		"https://territorial.io/clans", this.aTD = "https://territorial.io/clan-results", this.aDI = "https://patreon.com/c/territorial", this.aTE = "https://play.google.com/store/apps/details?id=territorial.io", this.a4y =
		"https://apps.apple.com/app/id1581110913", this.aTF = "https://discord.gg/pthqvpTXmh", this.aTG = "https://www.instagram.com/davidtschacher/", this.hg =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aTH() {
	var hO = 32,
		hN = new Array(2);

	function me(bB) {
		var aH, aJ, c3, h0, gz, hJ = hO,
			cE = bQ.bR.me(hJ, hJ),
			i5 = bQ.bR.getContext(cE, !0),
			oz = bQ.bR.getImageData(i5, hJ, hJ),
			cO = oz.data,
			d7 = (hJ >> 1) - .5,
			aTJ = Math.sqrt(d7 * d7);
		for (cO.fill(255), aJ = 0; aJ < hJ; aJ++)
			for (aH = 0; aH < hJ; aH++) gz = aH - d7, h0 = aJ - d7, c3 = 4 * (aJ * hJ + aH), gz = 714 * (aTJ - Math.sqrt(gz * gz + h0 * h0)) / aTJ, cO[2 + c3] = bB, cO[3 + c3] = 255 < gz ? 0 : gz;
		return i5.putImageData(oz, 0, 0), cE
	}
	this.aTI = -1, this.b3 = function() {
		this.aTI = -1, hN[0] || (hN[0] = me(255), hN[1] = me(0))
	}, this.aQp = function(i5, e, aH, aJ, db, aL) {
		bQ.by.wB(j.k) && (i5.setTransform(e *= 4 / 3 * .625, 0, 0, e, aH - (db *= 4 / 3), aJ - db), i5.drawImage(hN[+(d8.d9.gj[aL] === this.aTI)], 0, 0))
	}
}

function fm() {
	this.e6 = function() {
		if (cH.e1() % 51 == 45)
			for (var aI = d8.d9.wr, tt = d8.d9.tt, a4A = d8.d9.a4A, gj = d8.d9.gj, dA = d8.d9.dA, aFG = d0.aFG, d2 = d0.d2, aL = 0; aL < aI; aL++) {
				var a0p, player, a41, a44 = tt[aL];
				a44 % 64 == 6 || (a0p = a4A[aL], (player = d8.ge.aTK(a0p[a0p.length - 1])) < 0) || !bQ.by.aMk(player, dA[aL] >> 3) || gh.gi(1e3) >= aFG[d2[player]] || ! function(gg, a0p) {
					for (var aI = a0p.length - 1, aTN = d8.d9.a4F[gg], ao = 0, aL = aTN + 1; aL < aI; aL++) ao += n.a4I(a0p[aL], a0p[aL + 1]);
					return (ao += n.a4I(n.gs(d8.d9.gt[gg]), a0p[aTN + 1])) <= 60
				}(aL, a0p) || (a41 = gj[aL], 64 <= a44 && d8.gk.gl(player, a41)) || function(player, a0p, a41, gg, a44) {
					d8.gR.gS(player) && bQ.by.gX(player, d0.gY[d0.d2[player]], 32, 0) && (d8.d9.tt[gg] = 64 + a44 % 64, d8.gk.cR(a41, d8.d9.aDY), h1.cK[0] = d8.a0q.a0y(a0p), h1.h2[1] = 6, bQ.by.gp(player), d8.d9.gq(player))
				}(player, a0p, a41, aL, a44)
			}
	}
}

function aTO(rE, data, n3) {
	var aI = data.aTP.length,
		aTQ = document.createElement("div"),
		aTR = document.createElement("div"),
		fs = document.createElement("div"),
		aTS = new Array(aI),
		ob = new Array(aI),
		aTT = new Array(data.aTU.length),
		aTV = bQ.color.tC(70, 70, 0, .35);

	function lT() {
		this.style.backgroundColor = bQ.color.lT(aTV, 160)
	}

	function aTb() {
		this.style.backgroundColor = aTV
	}

	function a2o() {
		var c2;
		for (rE.style.font = bQ.bR.bS(0, bQ.bR.ml(.026, .5, .03)), aL = 1; aL < aTT.length; aL++) bQ.bR.gL(aTT[aL], 4);
		if (bQ.bR.gL(aTQ, 2), aI) {
			for (var e3, qs = aTQ.offsetWidth, qt = fs.offsetWidth, aL = 0; aL < aTT.length; aL++) e3 = .01 * data.aTa[aL] * qt, aTT[aL].style.width = (100 * e3 / qs).toFixed(2) + "%";
			var d7 = data.aTP[0].length;
			for (aL = 0; aL < aI; aL++)
				for (bQ.bR.gL(aTS[aL], 2), c2 = 1; c2 < d7; c2++) bQ.bR.gL(ob[aL][c2], 4);
			aTR.aTW && (aTR.scrollTop = aTR.aTW)
		}
	}
	this.resize = function() {
			a2o(), a2o()
		}, rE.style.display = "flex", rE.style.flexDirection = "column", aTR.style.overflowX = "hidden", aTR.style.overflowY = "auto", aTR.addEventListener("scroll", function() {
			this.aTW = this.scrollTop, n3 && n3.aTX && (f1.d9.rv[n3.aTX] = this.scrollTop)
		}),
		function() {
			var a0, aL, aTP = data.aTP,
				d7 = aI ? aTP[0].length : 0;
			for (aL = 0; aL < aI; aL++) {
				aTS[aL] = document.createElement("div"), aTS[aL].style.backgroundColor = function(aL) {
					return aL % 2 == 1 ? bQ.color.tC(130, 130, 130, .35) : bJ.aS6
				}(aL), aTS[aL].style.width = "100%", aTS[aL].style.display = "flex", ob[aL] = new Array(d7);
				for (var c2 = 0; c2 < d7; c2++) ob[aL][c2] = a0 = document.createElement("div"), a0.style.display = "flex", a0.style.justifyContent = "center", a0.style.wordBreak = "break-all", a0.style.padding = "0.4em 0em", a0.style.width = data
					.aTa[c2] + "%", a0.textContent = aTP[aL][c2].hm, 1 === aTP[aL][c2].bv && (a0.name = "" + aL, a0.style.color = bJ.dT, a0.style.backgroundColor = aTV, a0.addEventListener("mouseover", lT), a0.addEventListener("mouseout", aTb),
						function(a0, jQ, a5i) {
							2147483647 !== a5i && a0.addEventListener("click", function() {
								iG.kT(30), iG.ty(30, jQ), pD.b3(iG.i9), this.style.backgroundColor = aTV, f1.g9(8, f1.mQ, new gA(25, {
									action: 0,
									jQ: iU.iV.iW(iU.iV.iX(5)),
									a5i: a5i
								}))
							})
						}(a0, aTP[aL][c2].jQ, aTP[aL][c2].a5i)), aTS[aL].appendChild(a0)
			}
			for (aTQ.style.display = "flex", aTQ.style.backgroundColor = bQ.color.tC(0, 120, 0, .35), aL = 0; aL < aTT.length; aL++) aTT[aL] = a0 = document.createElement("div"), a0.style.display = "flex", a0.style.justifyContent = "center", a0.style
				.wordBreak = "break-all", a0.style.padding = "0.4em 0em", a0.style.width = data.aTa[aL] + "%", a0.innerHTML = data.aTU[aL], aTQ.appendChild(a0)
		}();
	for (var aL = 0; aL < aI; aL++) fs.appendChild(aTS[aL]);
	aTR.appendChild(fs), rE.appendChild(aTQ), rE.appendChild(aTR), n3 && n3.aTX && (aTR.aTW = f1.d9.rv[n3.aTX])
}

function aJt() {
	this.aB3 = function(player, a0Q, d2) {
		bQ.by.a0S(player, d2, a0Q) && (a0V.a0W(player, a0Q), !bQ.by.cZ(a0Q)) && gU.ff.sW[a0Q] && gU.ff.sW[a0Q]--
	}, this.aP5 = function(player, a0Q, d2) {
		bQ.by.aMt(d2, a0Q) ? a0U.cR(a0Q, h1.nO[0]) && (cJ.a12(player, a0Q, h1.nO[0], 1), bQ.by.sI(a0Q, h1.nO[0]), hD.di(player, a0Q), cb.a2t(a0Q, h1.nO[0])) : hD.sJ(player, d2, 12)
	}
}

function aM4() {
	var au, canvas, bP, aTd, aTe, aTf = -1;

	function aTg() {
		var y8, be = canvas.getContext("2d", {
			alpha: !0
		});
		be.clearRect(0, 0, au, au), be.fillStyle = bJ.fx, be.fillRect(0, 0, au, au), 9 === aTd && (be.fillStyle = bJ.a6v, be.fillRect(0, 0, au, au)), be.fillStyle = bJ.bL, be.fillRect(0, 0, au, 1), be.fillRect(0, 0, 1, au), be.fillRect(0, au - 1, au,
			1), be.fillRect(au - 1, 0, 1, au), y8 = .9 * au / gN.get(0).width, be.imageSmoothingEnabled = !0, be.setTransform(y8, 0, 0, y8, Math.floor((au - y8 * gN.get(0).width) / 2), Math.floor((au - y8 * gN.get(0).height) / 2)), be.drawImage(
			gN.get(0), 0, 0), be.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aTh(hr, hs) {
		if (!qZ.qa) return hr <= au + bT.gap && hs >= bn.aJ ? 9 : -1;
		if (hr <= 4 * au + bT.gap) {
			if (hs >= bn.aJ) return 0;
			if (hs >= bn.aJ - au - aTe * bT.gap) return 2
		} else if (hr <= 7 * au + bT.gap && hs >= bn.aJ - au - aTe * bT.gap) return 1;
		return -1
	}
	this.qa = !1, this.b3 = function() {
		aTd = -1, this.qa = !1, aTe = b4.b5.b6() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		au = bn.au, (canvas = document.createElement("canvas")).width = au, canvas.height = au, bP = bQ.bR.bS(1, (b4.b5.b6() ? .5 : .45) * au), aTg()
	}, this.ye = function() {
		return !(1 !== j.e5 || j.bC || (j.cp ? !bq.qO : this.qa && j.iv))
	}, this.qb = function() {
		this.qa = !this.qa, this.qa ? (bq.qT(!1), j.cp && bq.qO && bq.qX(!0), this.qc(), 9 === aTd && (aTd = 0)) : (aTd = -1, aTg(), !j.iv || 1 !== j.e5 || j.bC || j.cp || b4.b5.setState(1)), cH.cI = !0
	}, this.qc = function() {
		(j.iv || j.cp) && 1 === j.e5 && (a4Y.j3(!0), j.bC || setTimeout(function() {
			j7.yf()
		}, 0), b4.b5.setState(0))
	}, this.bt = function(hr, hs) {
		return 0 <= (aTf = aTh(hr, hs)) || !qZ.qa || j.iv || j.cp || a8k.bi || qZ.qb(), aTf
	}, this.ez = function(hr, hs) {
		hr = aTh(hr, hs);
		hr !== aTd && (aTd = hr, this.qa || aTg(), cH.cI = !0)
	}, this.aTj = function(hr, hs) {
		hr = aTh(hr, hs);
		return -1 !== hr && aTf === hr && (this.qa ? j.qV ? (0 <= hr && bq.qT(!1), !j.cp) : (0 === hr ? j.aTk() : 1 === hr ? this.qb() : 2 === hr && f1.g9(1, 0), !0) : 9 === hr && (this.qb(), !0))
	}, this.eD = function() {
		var aV;
		this.qa ? (aV = Math.floor(5.5 * au), eF.setTransform(1, 0, 0, 1, bT.gap, bn.aJ), eF.fillStyle = bJ.fx, eF.fillRect(0, 0, aV, au), 0 === aTd ? (eF.fillStyle = bJ.a6v, eF.fillRect(0, 0, 4 * au, au)) : 1 === aTd && (eF.fillStyle = bJ.a6v,
				eF.fillRect(4 * au, 0, Math.floor(1.5 * au), au)), eF.fillStyle = bJ.bL, eF.fillRect(0, 0, aV, 1), eF.fillRect(0, 0, 1, au), eF.fillRect(4 * au, 0, 1, au), eF.fillRect(0, au - 1, aV, 1), eF.fillRect(aV - 1, 0, 1, au), eF
			.font = bP, bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 1), eF.fillText(L(426), 2 * au, .54 * au), aV = .4 * au, qZ.a93(bT.gap + 4 * au + (1.5 * au - aV) / 2, bn.aJ + .3 * au, aV), aV = 1, eF.setTransform(1, 0, 0, 1, bT.gap, bn
				.aJ - aV * aTe * bT.gap - aV * au), eF.fillStyle = bJ.fx, eF.fillRect(0, 0, 4 * au, au), aTd === aV + 1 && (eF.fillStyle = bJ.a6v, eF.fillRect(0, 0, 4 * au, au)), eF.fillStyle = bJ.bL, eF.fillRect(0, 0, 4 * au, 1), eF
			.fillRect(0, 0, 1, au), eF.fillRect(4 * au, 0, 1, au), eF.fillRect(0, au - 1, 4 * au, 1), eF.fillText(L(0 === aV ? 426 : 427), 2 * au, .54 * au), eF.setTransform(1, 0, 0, 1, 0, 0)) : eF.drawImage(canvas, bT.gap, bn.aJ)
	}, this.a0f = function(player) {
		return 0 !== cT.iw[player] && 2 !== j.e5 && !bQ.by.cZ(player)
	}, this.a93 = function(aH, aJ, aI) {
		eF.setTransform(1, 0, 0, 1, aH, aJ), eF.lineWidth = bT.i4, eF.strokeStyle = bJ.bL, eF.beginPath(), eF.moveTo(0, 0), eF.lineTo(aI, aI), eF.moveTo(0, aI), eF.lineTo(aI, 0), eF.stroke()
	}
}

function q0() {
	var oN, oO, oP, ob;

	function oR() {
		oV(), 2 !== j.data.iIncomeType && (j.data.iIncomeData = null), f1.oW()[19] = null, f1.oX()
	}

	function oV() {
		2 === j.data.iIncomeType && bQ.oY.oZ(oP.oa(), j.data.iIncomeData, 255)
	}
	this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(202), [new g0("⬅️ " + L(61), oR)]), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(73), L(74), L(75)],
			value: j.data.iIncomeType
		}, function(hy) {
			oV(), 2 !== hy || j.data.iIncomeData || (j.data.iIncomeData = new Uint8Array(j.cW), j.data.iIncomeData.fill(32)), j.data.iIncomeType = hy, f1.g9(27)
		})), ob.push(og)
	}(ob = []), function(ob) {
		var og;
		1 === j.data.iIncomeType && ((og = new oh).oi("Value"), og.ol(new om({
			hy: -1,
			value: j.data.iIncomeValue
		}, 1, 0, function(l0) {
			var value = hu.hz(Math.floor(l0.target.value), 0, 255);
			l0.target.value = j.data.iIncomeValue = value
		})), ob.push(og))
	}(ob), function(ob) {
		var og;
		2 === j.data.iIncomeType && ((og = new oh).oi("Data"), (oP = new on(0, 1, 0, 1)).oo(bQ.cL.op(j.data.iIncomeData, 4)), og.ol(oP), ob.push(og))
	}(ob), ob))
}

function aM3() {
	var ft, aH, aJ, aTo, aTp, aTq, bU, aTr, aTs, aTt, aTu, gap, zoom, aSd, aTv;

	function aUA(hr, hs, e) {
		f.g(e) || -1 === (hr = d8.ge.aUH(hr, hs)) ? bp.cl(e) : bp.d5(hr)
	}

	function aU6(aTr) {
		for (var aL = aSd.length - 1; 0 <= aL; aL--)
			if (aSd[aL] === aTr) return 1
	}

	function aU4(a81) {
		var aL, aI;
		if (-1 !== a81)
			for (aI = ft.length, aL = 0; aL < aI; aL++)
				if (ft[aL].bi && ft[aL].aH + 1 === a81 % 4 && ft[aL].aJ + 1 === a81 >> 2) return aL;
		return -1
	}

	function aU2(hr, hs) {
		var dc = gap / 2;
		return hr < aH - aTo - 3 * dc || aH + 3 * aTo + 5 * dc < hr || hs < aJ - aTo - 3 * dc || aJ + 2 * aTo + 3 * dc < hs ? -1 : 4 * (hs < aJ - dc ? 0 : hs < aJ + aTo + dc ? 1 : 2) + (hr < aH - dc ? 0 : hr < aH + aTo + dc ? 1 : hr < aH + 2 * aTo +
			3 * dc ? 2 : 3)
	}
	this.mT = function() {
		var aL, c7, aTx = [bJ.hY, bJ.aTy, bJ.hZ, bJ.aTz, bJ.aU0];
		for (ft = new Array(10), aL = 0; aL < 10; aL++) ft[aL] = {
			id: aL,
			bi: !1,
			aGs: 0,
			canvas: [],
			aH: 0,
			aJ: 0
		};
		for (ft[0].colors = [0, 1, 2, 3], ft[0].aH = 0, ft[0].aJ = 0, ft[1].colors = [1, 4], ft[1].aH = 1, ft[1].aJ = 0, ft[2].colors = [0, 1], ft[2].aH = -1, ft[2].aJ = 0, ft[3].colors = [0], ft[3].aH = 0, ft[3].aJ = 0, ft[4].colors = [0, 2],
			ft[4].aH = 1, ft[4].aJ = 1, ft[5].colors = [3], ft[5].aH = 0, ft[5].aJ = -1, ft[6].id = 20, ft[6].colors = [0], ft[6].aH = 1, ft[6].aJ = -1, ft[7].id = 21, ft[7].colors = [0], ft[7].aH = 0, ft[7].aJ = 1, ft[8].id = 16, ft[8]
			.colors = [0], ft[8].aH = 0, ft[8].aJ = 0, ft[9].id = 10, ft[9].colors = [4], ft[9].aH = 2, ft[9].aJ = 0, aL = 0; aL < 10; aL++)
			for (c7 = 0; c7 < ft[aL].colors.length; c7++) ft[aL].canvas.push(function(id, ov) {
				if (id < 20) return bQ.canvas.ha(gN.get(3), id, ov);
				var ov = gN.get(3).height,
					cE = bQ.bR.me(ov, ov),
					i5 = bQ.bR.getContext(cE);
				20 === id ? i5.drawImage(gN.get(18), 0, 0) : 21 === id && cN.cO.cP(cN.hb.hf + cN.hb.aN9, i5, 0, 0, ov);
				return cE
			}(ft[aL].id, aTx[ft[aL].colors[c7]]))
	}, this.a3c = function() {
		return ft
	}, this.b3 = function() {
		aSd = [], aH = aJ = bU = 0, aTp = aTq = -1e3, this.resize()
	}, this.resize = function() {
		aTo = Math.floor((b4.b5.b6() ? .075 : .0468) * bN.bO), zoom = aTo / gN.get(3).height, gap = Math.floor(aTo / 3)
	}, this.aU1 = function(hr, hs) {
		return !!this.bi() && (cH.cI = !0, !!cN.cO.bt(hr, hs, aTs) || (hr = function(hr, hs) {
			aTq = aTp = -1e3;
			var aU3 = aU4(aU2(hr, hs));
			if (-1 === aU3) return 0;
			if (1 !== ft[aU3].colors[ft[aU3].aGs])
				if (5 === aU3) {
					if (! function() {
							var bv = performance.now();
							aTv + 4e3 < bv && (aSd = []);
							aTv = bv
						}(), aU6(aTr)) return 1;
					aSd.push(aTr), 16 < aSd.length && aSd.shift()
				} else if (6 === aU3) {
				for (var aL = aSd.length - 1; 0 <= aL; aL--) 0 === cT.iw[aSd[aL]] && aSd.splice(aL, 1);
				0 < aSd.length && (a4d.aBB(1, aSd, !0) && bx.by.aSc(aSd, aTr), aSd = [])
			} else if (2 === aU3) a0U.a8P(aTr) && bx.i1.a0W(bn.tf(), aTr);
			else if (3 === aU3) j.bC && bx.i1.wv(aTt);
			else if (0 === aU3)
				if (0 === ft[0].aGs) {
					if (j.aU7 && gZ.a14() < 350) return 1;
					tc.td(4), bx.i1.te(bn.tf(), aTr)
				} else a4W.a8L(aTr, bn.tf());
			else if (1 === aU3) bx.i1.pF(bn.tf(), aTt);
			else if (9 === aU3) bx.i1.pI(bn.tf());
			else {
				if (7 === aU3) return tc.td(0), cN.cO.show(hr, hs), 2;
				if (4 === aU3) a4d.aBB(0, [aTr], !0) && bx.by.bz(aTr);
				else {
					if (8 !== aU3) return 0;
					bx.i1.x0(bn.tf(), aTu, aTr)
				}
			}
			return 1
		}(hr, hs), this.gG(), 2 === hr && (cN.cO.bi = !0), 0 < hr))
	}, this.oL = function(hr, hs) {
		this.bi() || (aTp = hr, aTq = hs, bU = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = n.yU(mouseX),
			coordY = n.yW(mouseY),
			point = n.yc(n.yb(coordX, coordY));
		n.yY(coordX, coordY) && aUA(mouseX, mouseY, point)
	}, this.click = function(hr, hs, aU8) {
		var q = n.yU(hr),
			s = n.yW(hs),
			c3 = n.yb(q, s),
			e = n.yc(c3),
			aU9 = (b4.b5.b6() ? .025 : .0144) * bN.bO,
			bv = performance.now();
		return !(Math.abs(hr - aTp) > aU9 || Math.abs(hs - aTq) > aU9 || bU + 500 < bv || (bU = bv, l3.l4() && (l3.yV = hr, l3.yX = hs, a4f.e6(1), a4b.e6(1)), !n.yY(q, s))) && (aU8 ? (aUA(hr, hs, e), !1) : qZ.qa || this.bi() || !bQ.by.wB(j.k) ||
			j.cp ? (this.gG(), !1) : (j.bC ? 0 <= (aTt = a8I.b(c3)) && (ft[3].bi = !0) : 2 === j.e5 ? f.nW(e) && (aTr = f.co(e), bQ.by.cZ(aTr) || (ft[0].bi = !0, ft[0].aGs = 1, ft[7].bi = !0)) : (d8.gn.a8P(j.k, c3) && (ft[0].bi = !0, ft[0]
				.aGs = 1, ft[1].bi = !0, ft[1].aGs = 0, ft[9].bi = !0, ft[9].aGs = 0), d8.a8N.a8O(j.k, c3) && (ft[0].bi = !0, ft[0].aGs = 1, ft[1].bi = !0, ft[1].aGs = 1, aTt = h1.h2[7]), f.d3(e) ? (aTu = a0h.a0i.a8J(e)) && (aU9 = n
				.yc(aTu), ft[8].bi = !0, aTr = f.cn(aU9) ? j.cW : f.co(aU9)) : (f.ys(j.k, e) && (aTs = j.k, ft[0].bi = !0, ft[0].aGs = 1, ft[7].bi = !0), -1 !== (bv = a8I.h(c3)) && (f.cn(bv << 2) ? (aTr = j.cW, nc.a8K(j.k) ? (ft[0]
				.bi = !0, ft[0].aGs = 0) : nN.sP(j.k) && (ft[0].bi = !0, ft[0].aGs = 3)) : (aTr = f.co(bv << 2), ft[0].aGs = 1, ft[5].bi = function(aTr) {
				return !bQ.by.cZ(aTr) && !aU6(aTr) && a4d.aBB(1, [aTr], !1)
			}(aTr), ft[7].bi || bQ.by.cZ(aTr) || (aTs = aTr, ft[7].bi = !0), ft[4].bi = !bQ.by.cZ(aTr) && !cb.a3k(aTr) && a4d.aBB(0, [aTr], !1), ft[6].bi = function(aTr) {
				if (0 === aSd.length) return !1;
				if (performance.now() > aTv + 4e3) return !(aSd = []);
				return !aU6(aTr) && ! function(aTr) {
					var aL;
					if (j.cu)
						for (aL = aSd.length - 1; 0 <= aL; aL--)
							if (!nc.nd(aTr, aSd[aL])) return 1;
					return
				}(aTr)
			}(aTr), nc.nd(aTr, j.k) ? (nc.a8M(j.k, aTr) ? (ft[0].aGs = 0, ft[0].bi = !0) : nN.sP(j.k) && (ft[0].aGs = 3, ft[0].bi = !0), ft[0].bi = this.aUF()) : (ft[2].bi = !0, a0U.a8P(aTr) ? ft[2].aGs = 0 : ft[2].aGs =
				1, ft[0].bi = !0))))), this.aUB(hr, hs)))
	}, this.aUB = function(hr, hs) {
		return aH = hr - Math.floor(aTo / 2), aJ = hs - Math.floor(aTo / 2), !!this.bi()
	}, this.ez = function(hr, hs) {
		return !!this.bi() && (cN.cO.bi ? !cN.cO.hx(hr, hs) && (cN.cO.bi = !1, cH.cI = !0) : function(qj, hr, hs) {
			hr = aU2(hr, hs);
			if (0 <= aU4(hr)) return !1;
			if ((1 === hr || 6 === hr) && 0 <= aU4(2)) return !1;
			if ((6 === hr || 9 === hr) && 0 <= aU4(10)) return !1;
			return qj.gG(), cH.cI = !0
		}(this, hr, hs))
	}, this.gG = function() {
		for (var aL = ft.length - 1; 0 <= aL; aL--) ft[aL].bi = !1, ft[aL].aGs = 0;
		cN.cO.bi = !1
	}, this.bi = function() {
		return this.aUF() || cN.cO.bi
	}, this.aUF = function() {
		for (var aI = ft.length, aL = 0; aL < aI; aL++)
			if (ft[aL].bi) return !0;
		return !1
	}, this.eD = function() {
		if (this.bi())
			if (cN.cO.bi) cN.cO.eD();
			else {
				var aL, i5 = eF,
					c7 = ft,
					aI = c7.length,
					aUL = (aTo + gap) / zoom;
				for (i5.imageSmoothingEnabled = !0, i5.setTransform(zoom, 0, 0, zoom, aH, aJ), aL = 0; aL < aI; aL++) c7[aL].bi && eF.drawImage(c7[aL].canvas[c7[aL].aGs], c7[aL].aH * aUL, c7[aL].aJ * aUL);
				i5.imageSmoothingEnabled = !1, i5.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function fi() {
	function aUO(player) {
		for (var a9f = cT.a9f[player], aI = a9f.length, aK = Math.max(hu.hv(aI, 12), 1), af = f.af, db = gh.gi(aI), aL = 0; aL < aI; aL += aK)
			for (var al = a9f[(aL + db) % aI], a0 = 3; 0 <= a0; a0--) {
				var am = al + af[a0];
				if (f.d3(am)) return {
					e: am,
					id: f.d4(am),
					aP: player
				}
			}
		return null
	}

	function aUT(player, aUV) {
		var d2 = bQ.by.a0k(player, d0.aFF[d0.d2[player]]);
		cT.nG[player].push(aUV.e), nN.cR(player, d2, aUV.aP), nP.hG(player, !0)
	}
	this.e6 = function(player) {
		return !!v.xL(v.dr) && !!j.data.passableMountains && 0 !== cT.a9f[player].length && function(player) {
			var aUN = aUO(player);
			if (null === aUN) return !1;
			! function(player) {
				for (var eC = eA.eC, eB = eA.eB, aI = Math.min(eB, 12), mj = gh.gi(eB), aKl = h1.aKl, a9f = cT.a9f, aY = 0, aL = 0; aL < aI; aL++) {
					var aP = eC[(aL + mj) % eB];
					aP !== player && a9f[aP].length && nc.nd(player, aP) && (aKl[aY++] = aP)
				}
				h1.lk[0] = aY
			}(player);
			var aUQ = function(aUU) {
				for (var aI = h1.lk[0], aKl = h1.aKl, aL = 0; aL < aI; aL++) {
					var aUV = aUO(aKl[aL]);
					if (null !== aUV && aUV.id === aUU) return aUV
				}
				return null
			}(aUN.id);
			return null !== aUQ ? (aUT(player, aUQ), !0) : function(player, aUU) {
				var aI = gU.fW.zS;
				if (0 !== aI)
					for (var e = gU.fW.buffer[gh.gi(aI)] << 2, af = f.af, a0 = gh.gi(4);;) {
						if (e += af[a0], f.d3(e)) {
							if (f.d4(e) === aUU) return aUT(player, {
								e: e,
								aP: j.cW
							}), !0;
							break
						}
						if (!f.cn(e)) break
					}
				return !1
			}(player, aUN.id)
		}(player)
	}
}

function aUW() {
	function aUX(q, a38, a3A) {
		for (var nb = Math.min(a38, a3A), iC = Math.max(a38, a3A), aJ = nb + 1; aJ < iC; aJ++)
			if (!f.kV(n.aM(q, aJ))) return;
		return 1
	}

	function aUY(s, a37, a39) {
		for (var nb = Math.min(a37, a39), iC = Math.max(a37, a39), aH = nb + 1; aH < iC; aH++)
			if (!f.kV(n.aM(aH, s))) return;
		return 1
	}

	function aUZ(a37, a38, a39, a3A, aRS, aRN) {
		for (var aI = Math.min(Math.abs(a39 - a37), Math.abs(a3A - a38)), gz = Math.sign(a39 - a37), h0 = Math.sign(a3A - a38), aL = 0; aL < aI; aL++)
			if (!f.kV(n.aM(a37 += gz, a38 += h0))) return null;
		return a37 === a39 ? aUX(a37, a38, a3A) ? new Uint32Array([aRS, n.yb(a37, a38), aRN]) : null : aUY(a38, a37, a39) ? new Uint32Array([aRS, n.yb(a37, a38), aRN]) : null
	}
	this.a0a = function(aRS, aRN) {
		aRS = function(aRS, aRN) {
			var a37 = n.r(aRS),
				a38 = n.t(aRS),
				a39 = n.r(aRN),
				a3A = n.t(aRN);
			if (a37 === a39) {
				if (aUX(a37, a38, a3A)) return new Uint32Array([aRS, aRN])
			} else {
				if (a38 !== a3A) return aUZ(a37, a38, a39, a3A, aRS, aRN) || aUZ(a39, a3A, a37, a38, aRS, aRN);
				if (aUY(a38, a37, a39)) return new Uint32Array([aRS, aRN])
			}
			return null
		}(aRS, aRN);
		return null === aRS ? -1 : d8.a0q.a0x(aRS)
	}
}

function aUa() {
	this.aUb = function(player) {
		for (var tr = d8.d9.tr, gC = player << 3, aL = gC + d8.d9.gT[player] - 1; gC <= aL; aL--) this.aED(tr[aL])
	}, this.aED = function(aUc) {
		var d9 = d8.d9,
			aUd = d9.wr - 1,
			aUe = d9.dA[aUc],
			aUf = d9.aDZ[aUc],
			aUg = d9.gt[aUc];
		d9.wr = aUd, d9.dA[aUc] = d9.dA[aUd], d9.gt[aUc] = d9.gt[aUd], d9.a4L[aUc] = d9.a4L[aUd], d9.dB[aUc] = d9.dB[aUd], d9.aDZ[aUc] = d9.aDZ[aUd], d9.gj[aUc] = d9.gj[aUd], d9.tt[aUc] = d9.tt[aUd], d9.aDa[aUc] = d9.aDa[aUd], d9.a4A[aUc] = d9
			.a4A[aUd], d9.a4F[aUc] = d9.a4F[aUd], d9.tr[d9.dA[aUc]] = aUc,
			function(aUj) {
				var player = aUj >> 3,
					d9 = d8.d9,
					aI = d9.gT[player] - 1,
					aUk = (player << 3) + aI;
				d9.gT[player] = aI, aUk !== aUj && (d9.tr[aUj] = d9.tr[aUk], d9.dA[d9.tr[aUj]] = aUj)
			}(aUe), d8.kE.kE[n.aAd(d9.gt[aUc])][d9.aDZ[aUc]] = aUc, aUd = n.aAd(aUg), aUe = aUf, aUd = d8.kE.kE[aUd], d9 = aUd.pop(), aUe !== aUd.length && (aUd[aUe] = d9, d8.d9.aDZ[d9] = aUe)
	}
}

function aUm() {
	var aUn = null,
		kg = 2e4,
		aUo = 0;
	this.e6 = function() {
		cH.bU < kg || (kg = cH.bU + 1e4, 0 !== b4.id) || aUn || ee.ki() || (el.d9.uq(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || el.v7.aEg(5) : kg = cH.bU + 1e3)
	}, this.cR = function(bB) {
		aUn = bB
	}, this.show = function() {
		return !(!aUn || cH.bU < aUo) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aUo = cH.bU + 6e4, (new aIA).show(aUn.sf, aUn.colors, aUn.id), !(aUn = null)))
	}
}

function aUp() {
	this.a8J = function(e) {
		var aUU;
		return v.xL(v.dr) && j.data.passableMountains && (aUU = f.d4(e), this.aUq(j.k, aUU) || this.aUr(j.k, aUU)) && 0 !== (aUU = function(aRY) {
			for (var aH = n.r(aRY), aJ = n.t(aRY), max = Math.max(v.w, v.y) - 2, aUu = max * max, dg = !1, aUv = 0, ao = 0; ao < max; ao++) {
				var aUw, c3 = function(aH, aJ, ao) {
					for (var aL = 0; aL <= ao; aL++)
						for (var c2 = -1; c2 < 2; c2 += 2)
							for (var c7 = -1; c7 < 2; c7 += 2)
								for (var bB = 0; bB < 2; bB++) {
									var e = function(aH, aJ) {
										if (n.aAZ(aH, aJ)) {
											aH = n.yb(aH, aJ), aJ = n.yc(aH);
											if (f.g(aJ) && f.aUx(aJ)) return aH
										}
										return 0
									}(aH + bB * c2 * aL + (1 - bB) * c7 * ao, aJ + bB * c7 * ao + (1 - bB) * c2 * aL);
									if (e) return e
								}
					return 0
				}(aH, aJ, ao);
				c3 && (aUw = n.aAQ(aH, aJ, c3)) < aUu && (aUv = c3, aUu = aUw, dg || (dg = !0, max = Math.floor(Math.sqrt(aUw)) + 1))
			}
			return aUv
		}(n.aAa(e))) && (e = n.yc(aUU), f.cn(e) || (e = f.co(e)) !== j.k && nc.nd(e, j.k)) ? aUU : 0
	}, this.a0j = function(player, c3) {
		c3 = n.yc(c3);
		if (f.g(c3)) {
			if (f.cn(c3)) h1.nF[0] = j.cW;
			else if (f.co(c3) !== h1.nF[0]) return !1;
			for (var cz = function(e) {
					var af = f.af,
						cz = [];
					loop: for (var a0 = 3; 0 <= a0; a0--) {
						var am = e + af[a0];
						if (f.d3(am)) {
							for (var id = f.d4(am), aL = 0; aL < cz.length; aL++)
								if (id === cz[aL]) continue loop;
							h1.a0l[cz.length] = am, cz.push(id)
						}
					}
					return cz
				}(c3), aI = cz.length, aL = 0; aL < aI; aL++)
				if (this.aUq(player, cz[aL]) || this.aUr(player, cz[aL])) return h1.a0l[0] = h1.a0l[aL], !0
		}
		return !1
	}, this.aUq = function(player, aUU) {
		for (var a9f = cT.a9f[player], aI = a9f.length, aK = Math.max(hu.hv(aI, 12), 1), af = f.af, aL = 0; aL < aI; aL += aK)
			for (var al = a9f[aL], a0 = 3; 0 <= a0; a0--) {
				var am = al + af[a0];
				if (f.d3(am) && aUU === f.d4(am)) return !0
			}
		return !1
	}, this.aUr = function(player, aUU) {
		for (var a9f = cT.a9f[player], aI = a9f.length, af = f.af, aL = 0; aL < aI; aL++)
			for (var al = a9f[aL], a0 = 3; 0 <= a0; a0--) {
				var am = al + af[a0];
				if (f.d3(am) && aUU === f.d4(am)) return !0
			}
		return !1
	}
}

function aUy() {
	function a6(aH, aI, aJ, aUz, x, aK, player) {
		if (!(aJ < 1 || x < aJ))
			for (var aL = 0; aL <= aI; aL++) {
				var e = n.aM(aH, aJ);
				if (d8.ge.aV3(e) && !bQ.oY.has(aUz, f.d4(e)) && f.aV4(e, player)) return e >> 2;
				aH += aK
			}
		return -1
	}

	function aB(aJ, aI, aH, aUz, u, aK, player) {
		if (!(aH < 1 || u < aH)) {
			aI = Math.max(aI, 0);
			for (var aL = 0; aL <= aI; aL++) {
				var e = n.aM(aH, aJ);
				if (d8.ge.aV3(e) && !bQ.oY.has(aUz, f.d4(e)) && f.aV4(e, player)) return e >> 2;
				aJ += aK
			}
		}
		return -1
	}

	function aF(a5, a7, c) {
		return -1 !== a7 && (-1 === a5 || n.aG(a7, c) < n.aG(a5, c)) ? a7 : a5
	}
	this.a8O = function(player, c) {
		if (d8.gR.gS(player))
			for (var m = n.o(), aUz = [];;) {
				var aRX = function(c, m, aUz, player) {
					for (var q = n.r(c), s = n.t(c), u = v.w - 2, x = v.y - 2, z = -1, a0 = 0; a0 < m; a0++) {
						var a1 = Math.max(q - a0, 1),
							a2 = Math.max(s - a0, 1),
							a3 = Math.min(q + a0, u),
							a4 = Math.min(s + a0, x),
							a5 = a6(q, a3 - q, s - a0, aUz, x, 1, player),
							a7 = a6(q - 1, q - a1 - 1, s - a0, aUz, x, -1, player),
							a3 = a6(q, a3 - q, s + a0, aUz, x, 1, player),
							a1 = a6(q - 1, q - a1 - 1, s + a0, aUz, x, -1, player),
							aA = aB(s, a4 - s - 1, q - a0, aUz, u, 1, player),
							aC = aB(s - 1, s - a2 - 2, q - a0, aUz, u, -1, player),
							a4 = aB(s, a4 - s - 1, q + a0, aUz, u, 1, player),
							a2 = aB(s - 1, s - a2 - 2, q + a0, aUz, u, -1, player);
						if (z = aF(z, a5, c), z = aF(z, a7, c), z = aF(z, a3, c), z = aF(z, a1, c), z = aF(z, aA, c), z = aF(z, aC, c), z = aF(z, a4, c), 0 <= (z = aF(z, a2, c)) && a0 * a0 >= n.aG(z, c)) return z
					}
					return -1
				}(c, m, aUz, player);
				if (-1 === aRX) break;
				var id = f.d4(n.yc(aRX));
				if (d8.ge.aV1(player, id)) return !! function(player, aRX, c) {
					for (var nT = n.aAh(aRX, c), aL = 0; aL < 4; aL++) {
						var c3 = n.aAf(aRX, nT);
						if (f.i(n.yc(c3), player)) return h1.h2[6] = nT, 1;
						nT = (nT + 1) % 4
					}
					return
				}(player, aRX, c) && (h1.h2[7] = aRX, !0);
				aUz.push(id)
			}
		return !1
	}
}

function aMO() {
	function aV6() {
		8 === j.dy && 1 === j.e5 && rR.l.w3()
	}

	function aV5(player) {
		j.bC ? (uJ.aV7(player), eA.uE(), j.iv && j.j6.e6()) : aLp.rJ(player)
	}
	this.wy = function(player) {
		bp.bD(player, player === j.k ? 21 : 22), aV5(player), aV6()
	}, this.wz = function(player) {
		1 === j.e5 && 0 !== cT.iw[player] && 2 !== cT.dl[player] && aV5(player), j.e4--, j.rM--, bp.bD(player, 4), bQ.by.wA(2) && gZ.j3(!0), aV6()
	}
}

function aV8() {
	aV9() ? (aVA(), a9k !== j.cW && aVB()) : aVC()
}

function aVB() {
	nc.a9j(), nc.a9l(cT.nU[a9k]), nc.a9l(cT.a9e[a9k]), v.xL(v.dr) && nc.a9l(cT.a9f[a9k]), nc.a9m(cT.nG[a9k]), nc.a9n(cT.a9e[a9k]), nc.a9n(cT.a9f[a9k]), nc.a9o(), nc.a9r()
}

function aVA() {
	aVD = !0, nN.sT(a9b, aVE, aVF), nN.sU(a9b, aVE), cT.cj[a9b] += a9Z, nc.a9Y(), aVG()
}

function aV9() {
	return (a9k === j.cW ? aVH : aVI)()
}

function aVI() {
	var aVJ = a9Z * j.aVK,
		aVL = aVM(),
		aVN = aVO(),
		aVL = aVJ + 2 * aVL + aVN,
		aVQ = aVR * a9Z;
	return aVL < aVQ ? (aVF -= aVL, hD.sJ(a9b, aVL, 13), aVS(aVL - aVJ, aVN), !0) : aVT && 0 === aVN ? (aVF -= aVQ, aVQ += bQ.by.aDd(a9b, aVL - aVQ + 1), hD.sJ(a9b, aVQ, 13), aVS(aVQ - aVJ, 0), !0) : (aVF -= aVQ, hD.sJ(a9b, aVQ, 13), aVS(aVQ - aVJ,
		aVN), !1)
}

function aVS(aVQ, aVN) {
	if (0 < aVN) {
		if (aVQ <= aVN) return hD.sJ(a9k, aVQ, 13), void nN.sG(a9k, a9b, aVN - aVQ);
		nN.sG(a9k, a9b, 0), aVQ -= aVN
	}
	aVQ = hu.hv(aVQ, 2), aVQ = Math.min(cT.ct[a9k], aVQ), hD.sJ(a9k, aVQ, 13), cT.ct[a9k] -= aVQ
}

function aVO() {
	return nN.nn(a9k, a9b)
}

function aVM() {
	return hu.hv(a9Z * cT.ct[a9k], 1 + hu.hv(10 * cT.cj[a9k], 16))
}

function aVH() {
	var aVU = a9Z * j.aVK;
	return aVF -= aVU, hD.sJ(a9b, aVU, 13), !0
}

function aVG() {
	for (var aL = a9Z - 1; 0 <= aL; aL--) cT.nG[a9b].push(a9a[aL]), cT.nU[a9b].push(a9a[aL]), f.yu(a9a[aL], a9b)
}

function pg() {
	var uL, a5s, a5t, a5v;

	function aVV(id) {
		0 !== b4.id || hk.buffer.data[140].value ? 0 === id ? f1.g9(8, 1, new gA(16)) : f1.g9(2) : f1.d9.aPZ(f1.mQ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		b4.b5.setState(12), uL.show(), this.resize(), this.e6()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), a5s.resize()
	}, this.e6 = function() {
		8 === eg.f3() && (2 <= hD.a8Z ? a5t[2].r1 === bJ.r8 && a5t[2].r2(0) : a5t[2].r1 !== bJ.r8 && a5t[2].r2(bJ.r8), !j.cp && qZ.a0f(j.k) ? a5t[1].r1 === bJ.r8 && a5t[1].r2(0) : a5t[1].r1 !== bJ.r8 && a5t[1].r2(bJ.r8), !j.cp && bh.w9(j.k) ?
			a5t[0].r1 === bJ.r8 && a5t[0].r2(0) : a5t[0].r1 !== bJ.r8 && a5t[0].r2(bJ.r8))
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, a5t = [new g0(L(428), function() {
		aVV(0)
	}), new g0(L(186), function() {
		f1.g9(16)
	}), new g0(L(429), function() {
		f1.g9(17)
	}), new g0(L(430), function() {
		f1.d9.aL2()
	}, 0, 0, 1), new g0(L(188), function() {
		f1.g9(3, 1)
	}), new g0(L(164), function() {
		f1.g9(18)
	}), new g0(L(365), function() {
		f1.g9(31)
	}), new g0(L(431), function() {
		f1.d9.aPY(2)
	}), new g0(L(85), function() {
		aVV(1)
	}), new g0("🔒 " + L(172), function() {
		f1.g9(32)
	}), new g0(L(432), function() {
		var mq, mg;
		(mq = []).push(["Wiki", (mg = "https://territorial.io/") + "wiki/gold"]), mq.push(["Team Games", mg + "log/team"]), mq.push(["Battle Royale Games", mg + "log/br"]), mq.push(["1v1 Games", mg + "log/1v1"]), mq.push(["Zombie Games",
			mg + "log/zombies"
		]), mq.push(["Transactions", mg + "log/transactions"]), mq.push(["Changelog", mg + "changelog"]), 2 !== b4.id && mq.push(["Android App", hi.aTE]), 1 !== b4.id && mq.push(["iOS App", hi.a4y]), 0 === b4.id && mq.push(["Patreon",
			hi.aDI
		]), mq.push(["Terms", hi.aT8]), mq.push(["Privacy", hi.aT9]), f1.g9(4, 1, new a4x(L(432), bQ.bR.mp(mq), !1, [new g0("⬅️ " + L(61), function() {
			f1.g9(1)
		})]))
	}), new g0(L(433), function() {
		f1.g9(4, 1, new a4x(L(433), eh.xU + "<br>" + el.d9.uz("/changelog") + "<br><br><eh>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></eh>", !0, [new g0("⬅️ " + L(61),
				function() {
					f1.g9(1)
				})]))
	}), new g0(L(434), function() {
		f1.g9(4, 1, new a4x(L(434), L(441) + "<br>" + L(442), !1, [new g0("⬅️ " + L(61), function() {
			f1.g9(1)
		}), new g0(L(443), function() {
			b4.b5.a4k(), f1.g9(1)
		})]))
	}), new g0("👁️ " + L(435), function() {
		b4.b5.a4p(), f1.g9(4, 1, new a4x(L(444), L(445) + " " + el.d9.uz("/privacy"), !1, [new g0("⬅️ " + L(61), function() {
			f1.g9(1)
		})]))
	})], a5v = [new g0("⬅️ " + L(61), function() {
		f1.d9.aNv()
	})], 8 === eg.f3() && (a5t.unshift(new g0(L(387), function() {
		f1.g9(30)
	})), a5t.unshift(new g0(L(438), function() {
		2 <= hD.a8Z && (f1.q7(), a8k.qb(), cH.cI = !0)
	}, 0, 1)), a5t.unshift(new g0(L(439), function() {
		!j.cp && qZ.a0f(j.k) && (bx.i1.wy(), f1.q7(), qZ.qa) && qZ.qb()
	}, 0, 1)), a5t.unshift(new g0(L(440), function() {
		!j.cp && bh.w9(j.k) && (tc.td(2), bx.i1.wF(), f1.q7(), qZ.qa) && qZ.qb()
	}, 0, 1))), 1 === b4.id && 5 <= b4.xU && a5t.push(new g0(L(436), function() {
		b4.b5.a4q()
	})), uL = new oQ(L(437), a5v), a5s = new vJ(a5t, uL.oT)
}

function aM7() {
	var canvas, be, aH, aJ, a01, aVa, gap, aVb, fontSize, aVc, aVd, aVe, aVf, aVg, aVh, aVi, aVj, aVk;

	function aVo() {
		be.clearRect(0, 0, gZ.aV, gZ.au), be.fillStyle = bJ.bK, be.fillRect(0, 0, gZ.aV, gZ.au), be.fillStyle = bJ.vh, e = 0 < aVi ? aVi : aVf[4] / 1e4, be.fillRect(0, gZ.au - a01 - 1, Math.floor(e * gZ.aV), a01), be.fillStyle = bJ.bL, be.fillRect(0,
			0, gZ.aV, 1), be.fillRect(0, 0, 1, gZ.au), be.fillRect(gZ.aV - 1, 0, 1, gZ.au), be.fillRect(0, gZ.au - 1, gZ.aV, 1), be.fillRect(0, gZ.au - a01 - 1, gZ.aV, 1);
		for (var e, aVp, bv = 0, aL = 0; aL < aVe.length; aL++) aVg[aL] ? (bQ.bR.textAlign(be, 0), aVp = Math.floor((aVa - a01 + 2 * aVb) * (aL - bv + 1) / (aVe.length + 1) - .7 * aVb), be.fillText(aVe[aL], gap, aVp), bQ.bR.textAlign(be, 2), 5 ===
			aL && 0 !== cT.iw[j.k] && cT.ct[j.k] >= a0V.aAm(j.k) ? (be.fillStyle = bJ.aVq, be.fillText(aVm(aL), gZ.aV - gap, aVp), be.fillStyle = bJ.bL) : be.fillText(aVm(aL), gZ.aV - gap, aVp)) : bv++
	}

	function aVm(aL) {
		return aL < 3 ? aVf[aL].toString() : 3 === aL || 4 === aL || 5 === aL ? bQ.cL.dw(aVf[aL] / 100, 2) : aL < 7 ? bQ.cL.cs(aVf[aL]) : aL === 7 ? gZ.aJQ(aVf[7]) : aL === 8 ? __fx.utils.getMaxTroops(cT.cj, j.k) : __fx.utils.getDensity(j.k)
	}

	function aVl() {
		cT.cj[j.k] !== aVf[6] && (aVf[6] = cT.cj[j.k], aVc++)
	}
	this.b3 = function() {
		aVi = aVj = 0, (aVd = new Array(8))[0] = L(446), aVd[1] = j.iv ? L(383) : L(447), aVd[2] = L(448), aVd[3] = L(449), aVd[4] = L(450), aVd[5] = L(451, 0, "Interest"), aVd[6] = L(452), aVd[7] = L(453),
			aVd.push("Max Troops", "Density"), // add aVd
			(aVe = new Array(aVd.length)).fill(""), (aVf = new Array(aVd.length))[0] = j.iv ? 0 : j.ck, aVf[1] = j.iv ? eA.eB : j.aF1, aVf[2] = j.rM, aVf[3] = 0, aVf[4] = hu.hv(1e4 * cT.cj[0], Math.max(j.w1, 1)), aVf[5] = 0 === j.data
			.iIncomeType ? 700 : 1 === j.data.iIncomeType ? hu.hv(700 * j.data.iIncomeValue, 64) : hu.hv(700 * j.data.iIncomeData[j.k], 64), aVf[6] = 0, aVl(), aVf[7] = 0, aVh = aVm(6), (aVg = new Array(aVd.length)).fill(!0), aVk = 0, aVk = j
			.iv ? (aVg[0] = !1, aVg[2] = !1, aVg[3] = !1, 3) : (aVg[3] = !1, 1), aVc = 0, this.resize()
	}, this.resize = function() {
		this.aV = Math.floor((b4.b5.b6() ? .1646 : .126) * 1.25 * bN.bO), this.au = Math.floor(1.18 * this.aV), a01 = Math.floor(.04 * this.aV), gap = Math.floor(.035 * this.aV), aVb = .04 * this.aV, aVa = this.au, this.au -= Math.floor(aVk * (
			this.au - 2 * a01) / aVd.length), fontSize = Math.floor(.7 * (aVa - a01) / aVd.length);
		var bP = bQ.bR.bS(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.aV, canvas.height = this.au,
			function(bP, aV) {
				for (var aL = 0; aL < aVe.length; aL++) aVe[aL] = bQ.be.cq(aVd[aL], bP, aV)
			}((be = canvas.getContext("2d", {
				alpha: !0
			})).font = bP, .575 * this.aV), bQ.bR.textBaseline(be, 1), be.lineWidth = 1, this.iz(), this.aFp(), tu.aFp(), aVo()
	}, this.aFp = function() {
		aH = bN.aV - this.aV - bT.gap
	}, this.rQ = function() {
		aJ = bT.gap
	}, this.iz = function() {
		aJ = bT.gap + (tu.tv() && 0 !== cT.iw[j.k] && !j.bC ? tu.au + bT.gap : 0)
	}, this.j3 = function(e0) {
		(e0 || 100 <= aVc) && (aVc = 0, aVo())
	}, this.a14 = function() {
		return aVf[7]
	}, this.aJQ = function(value) {
		var d7 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * d7) / 1e3);
		return value < 10 ? d7 + ":0" + value : d7 + ":" + value
	}, this.e6 = function() {
		var a8Y, per;
		aVg[0] && j.e4 - j.rM !== aVf[0] && (aVf[0] = j.e4 - j.rM, aVc++), eA.eB - aVf[0] !== aVf[1] && (aVf[1] = eA.eB - aVf[0], aVc++), this.a4U(), (a8Y = a0V.a8h(j.k)) !== aVf[5] && (aVf[5] = a8Y, aVc++), aVl(), aVf[7] += cH.aBx, a8Y = aVm(7),
			aVh !== a8Y && (aVh = a8Y, aVc += 100), a8Y = j.cu ? li.w0() : cT.cj[h9[0]], per = hu.hv(1e4 * a8Y, Math.max(j.w1, 1)), aVf[3] = a8Y, aVf[4] !== per && (aVc++, aVf[4] = per), 8 === j.dy && function() {
				for (var aL = 0; aL < 2; aL++)
					if (!bQ.by.wB(aL)) return rR.l.w3(), 1;
				return
			}() || aVf[3] < j.w1 || ! function() {
				for (var aL = eA.eB - 1; 0 <= aL; aL--)
					if (0 < cT.nG[eA.eC[aL]].length) return;
				return 1
			}() || d8.ge.gf().length || j.cu && li.w0(1) < j.w1 || rR.l.w3()
	}, this.a4U = function() {
		aVg[2] && j.rM !== aVf[2] && (aVf[2] = j.rM, aVc += 2 === j.e5 ? 100 : 1)
	}, this.ga = function() {
		return aVf[3] === j.w1
	}, this.aBu = function(aL) {
		var dc, aVz, bv;
		return 2 !== j.e5 && (aL % 2 == 1 && (a4Y.j3(1, 1), cH.cI = !0), aL === j.aBw ? (aVi = 0, aVo(), !1) : (-1 !== aL || 0 !== aVj) && (aVz = aVi, aVi = j.cp ? aL / j.aBw : (bv = performance.now(), 0 <= aL && (dc = bv - 392 * aL, aVj = 0 ===
			aL || dc < aVj ? dc : aVj), 1 < (aVi = (bv - aVj) / (392 * j.aBw)) ? 1 : aVi), aVo(), aVi !== aVz))
	}, this.eD = function() {
		eF.drawImage(canvas, aH, aJ)
	}
}

function aM6() {
	var bP, aV, aJ, aW0, aW1, aW2, canvas, be, t7, a8X, aW3, aW4, aW5, aW6;
	this.aH = 0, this.au = 0, this.b3 = function() {
		aW2 = j.aW7, aW4 = "rgba(0,100,0,0.8)", aW5 = "rgba(150,0,0,0.8)", t7 = aW3 = !0, a8X = cT.ct[j.k], this.resize()
	}, this.resize = function() {
		aV = Math.floor((b4.b5.b6() ? .305 : .24) * bN.bO), this.au = Math.floor(.5 + .13 * aV), aV = Math.floor(6 * this.au), bP = bQ.bR.bS(1, Math.floor(.8 * this.au)), aW1 = bQ.bR.bS(1, Math.floor(.45 * this.au)), aW6 = Math.floor(.5 * this
			.au), v.kZ.font = bP, aJ = bT.gap, aW0 = Math.floor(1 + .13 * this.au), (canvas = document.createElement("canvas")).width = aV, canvas.height = this.au, be = canvas.getContext("2d", {
			alpha: !0
		}), bQ.bR.textBaseline(be, 1), bQ.bR.textAlign(be, 1), this.aW8()
	}, this.tv = function() {
		return b4.b5.b6() && bN.aV < 1.2 * bN.au
	}, this.aFp = function() {
		this.tv() ? this.aH = bN.aV - aV - bT.gap : this.aH = Math.floor(a4Y.a6p() + (bN.aV - a4Y.a6p() - gZ.aV - aV) / 2 - .5 * bT.gap)
	}, this.j3 = function() {
		t7 && (t7 = !1, this.aW8())
	}, this.aW8 = function() {
		be.font = bP, be.clearRect(0, 0, aV, this.au), be.fillStyle = aW3 ? aW4 : aW5, be.fillRect(0, 0, aV, this.au), be.fillStyle = bJ.tJ;
		var bB = this.aW9(),
			aWB = (this.aWA(), be.fillStyle = cT.ct[j.k] >= a0V.aAm(j.k) ? bJ.w8 : bJ.bL, bQ.cL.cs(a8X)),
			aWB = (be.fillText(aWB, Math.floor(aV / 2), aW6), be.measureText(aWB).width),
			aWD = (be.font = aW1, be.fillStyle = 9 === bB ? bJ.aWC : bJ.bL, a0V.aNT),
			aWE = "+" + aWD,
			qt = be.measureText(aWE).width,
			aWF = Math.floor(this.au / 12),
			aWB = .5 * (aV + aWB) + aWF;
		(aWB + qt + aW0 <= aV || 1e3 <= aWD && (aWE = "+" + Math.floor(aWD / 1e3) + "K", aWB + (qt = be.measureText(aWE).width) + aW0 <= aV)) && be.fillText(aWE, Math.floor(aWB + .5 * qt), Math.floor(.3 * this.au)), __fx.settings
			.displayTickNumber && be.fillText(9 - bB, Math.floor(2 * aW0 + aWF), Math.floor(.3 * this.au)), be.fillStyle = bJ.bL, be.fillRect(0, 0, aV, 1), be.fillRect(0, 0, 1, this.au), be.fillRect(0, this.au - 1, aV, 1), be.fillRect(aV - 1, 0,
				1, this.au)
	}, this.aW9 = function() {
		var bB = cH.e1() % 100,
			eE = (bB = 9 - hu.hv(bB -= bB % 10, 10), Math.floor(bB * (this.au - aW0) / 9));
		return be.fillRect(0, eE, aW0, this.au - eE), be.fillRect(aV - aW0, eE, aW0, this.au - eE), bB
	}, this.aWA = function() {
		be.fillRect(aW0, this.au - aW0, Math.floor((aV - 2 * aW0) * cT.ct[j.k] / aW2), aW0)
	}, this.e6 = function() {
		var aP = j.k;
		bQ.by.wB(aP) && (aP = cT.ct[aP] - cT.a3Q[aP], a8X !== aP ? (aW2 = bk(aP, aW2), aW3 = a8X < aP && 10 <= aP, a8X = aP, t7 = !0) : cH.e1() % 10 == 9 && (t7 = !0))
	}, this.eD = function() {
		0 === cT.iw[j.k] || j.bC || 2 === cT.dl[j.k] || eF.drawImage(canvas, this.aH, aJ)
	}
}

function aWG() {
	this.resize = function() {
		var aL, aCb = document.head.querySelector("style#ss");
		if (aCb)
			for (aL = aCb.sheet.cssRules.length - 1; 0 <= aL; aL--) aCb.sheet.deleteRule(0);
		else(aCb = document.createElement("style")).id = "ss", document.head.appendChild(aCb);
		var qK = "::-webkit-scrollbar",
			aWH = bQ.bR.fy(bT.mf),
			hJ = bQ.bR.fy(Math.max(bQ.bR.lV(.012), 8));
		try {
			aCb.sheet.insertRule(qK + "{width:" + hJ + ";height:" + hJ + ";}", aCb.sheet.cssRules.length), aCb.sheet.insertRule(qK + "-thumb{background-color:white;}", aCb.sheet.cssRules.length), aCb.sheet.insertRule(qK + "-track{background:" +
				bJ.fx + ";}", aCb.sheet.cssRules.length), aCb.sheet.insertRule(qK + "-track:horizontal{border-top:" + aWH + " solid white;}", aCb.sheet.cssRules.length), aCb.sheet.insertRule(qK + "-track:vertical{border-left:" + aWH +
				" solid white;}", aCb.sheet.cssRules.length), aCb.sheet.insertRule(qK + "-button{display:none;}", aCb.sheet.cssRules.length)
		} catch (l0) {
			for (console.log("error 3425: " + l0), aL = aCb.sheet.cssRules.length - 1; 0 <= aL; aL--) aCb.sheet.deleteRule(0)
		}
	}
}

function pt() {
	var oN, oO, ob;

	function aWK() {
		var aY;
		1 === j.data.gameMode ? (j.data.teamPlayerCount || (j.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), j.vM.vN()), aY = bQ.oY.a0D(j.data.teamPlayerCount, 0), j.data.numberTeams = aY) : (2 === j.data.botDifficultyType && (j
			.data.botDifficultyType = 0), 1 === j.data.spawningType && (j.data.spawningType = 0))
	}

	function oR() {
		1 !== j.data.gameMode && (j.data.teamPlayerCount = null), aWM(), j.data.canvas = null, f1.g9(5, 5)
	}

	function aWM() {
		ib.a0K.b3(), hk.mz.gE(156, ib.a7N.zK())
	}

	function aWI() {
		j.data.isReplay = 0, aWM(), j.vM.a0F(), eg.aSi(), j.vM.a0E(), j.data.canvas = 2 === j.data.mapType ? v.x5 : null, j.aN4(), j.aN5 = 1
	}

	function aWX() {
		aWK();
		for (var cK = [aI6(), aWP(), aWQ()], aL = 3; aL < 6; aL++) f1.removeChild(oO.rG, oO.yJ[aL].kp), oO.yJ[aL] = cK[aL - 3], oO.rG.appendChild(oO.yJ[aL].kp);
		oO.resize()
	}

	function aI6() {
		var aWY, og = new oh;
		return og.oi(L(118)), aWY = 0 === j.data.gameMode ? [L(119), L(75)][j.data.colorsType] : j.data.numberTeams + " Team" + (1 === j.data.numberTeams ? "" : "s"), og.vQ(aWY), og.ol(new uX([new g0(L(456), function() {
			f1.g9(21)
		}).button])), og
	}

	function aWP() {
		var og = new oh,
			cK = (og.oi(L(18)), [L(74) + ": " + d0.d1[j.data.botDifficultyValue], L(125), L(126), L(75)]);
		return og.vQ(cK[j.data.botDifficultyType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(25)
		}).button])), og
	}

	function aWQ() {
		var og = new oh,
			cK = (og.oi("Spawning"), [L(119), L(400), L(75)]);
		return og.vQ(cK[j.data.spawningType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(24)
		}).button])), og
	}
	this.show = function() {
		oN.show(), this.resize(), oN.oT.scrollTop = f1.d9.rv[0]
	}, this.gG = function() {
		f1.d9.rv[0] = oN.oT.scrollTop, oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ("🔧 " + L(407), [new g0("⬅️ " + L(61), oR), new g0(L(454), aWI)]), aWK(), j.data.canvas || (2 === j.data.mapType ? j.data.canvas = v.x5 : 1 === j.data.mapType ? j.data.canvas = v.xG(v.xO(j.data), 0).x5 : (j.data.mapType = 0, j
		.data.passableWater = j.data.passableMountains = 1, j.data.canvas = v.xG(v.xO(j.data), j.data.mapSeed).x5)), oO = new oS(oN.oT, (function(ob) {
		var og = new oh,
			cE = (og.oi(L(455)), j.data.canvas);
		cE.style.width = "100%", og.ol({
			l0: cE
		}), og.ol(new uX([new g0(L(456), function() {
			f1.g9(20)
		}).button])), ob.push(og)
	}(ob = []), function(ob) {
		var og = new oh;
		og.oi(L(120)), og.ol(new om({
			hy: -1,
			value: j.data.playerCount
		}, 1, 0, function(l0) {
			var playerCount = hu.hz(Math.floor(l0.target.value), 1, 512);
			l0.target.value = j.data.playerCount = playerCount, 1 === j.data.gameMode && (l0 = bQ.oY.a0D(j.data.teamPlayerCount, 0), j.vM.vN(), bQ.oY.a0D(j.data.teamPlayerCount, 0) !== l0) && aWX()
		})), ob.push(og)
	}(ob), function(ob) {
		var og = new oh;
		og.oi(L(457)), og.oj(new ok({
			n3: ["Battle Royale", "Teams"],
			value: j.data.gameMode
		}, function(hy) {
			j.data.gameMode !== hy && (1 === (j.data.gameMode = hy) && (j.data.colorsData || (j.data.colorsData = new Uint32Array(1)), j.data.colorsData[0] = 258049), aWX())
		})), ob.push(og)
	}(ob), ob.push(aI6()), ob.push(aWP()), ob.push(aWQ()), function(ob) {
		var og = new oh,
			cK = (og.oi(L(372)), [L(373), L(374), L(75)]);
		og.vQ(cK[j.data.playerNamesType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(23)
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og = new oh,
			cK = (og.oi(L(210)), [L(73), L(74) + ": " + j.data.aIncomeValue, L(75)]);
		og.vQ(cK[j.data.aIncomeType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(22)
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og = new oh,
			cK = (og.oi(L(71)), [L(73), L(74) + ": " + j.data.tIncomeValue, L(75)]);
		og.vQ(cK[j.data.tIncomeType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(26)
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og = new oh,
			cK = (og.oi(L(202)), [L(73), L(74) + ": " + j.data.iIncomeValue, L(75)]);
		og.vQ(cK[j.data.iIncomeType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(27)
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og = new oh,
			cK = (og.oi(L(398)), [L(73), L(74) + ": " + j.data.sResourcesValue, L(75)]);
		og.vQ(cK[j.data.sResourcesType]), og.ol(new uX([new g0(L(456), function() {
			f1.g9(28)
		}).button])), ob.push(og)
	}(ob), function(ob) {
		var og = new oh;
		og.oi(L(458)), og.ol(new uX([new g0(L(459), function() {
			f1.q7(), j.vM.a0H(), f1.d9.rv[0] = 0, f1.g9(19)
		}).button])), og.ol(new uX([new g0(L(460), function() {
			aLt.rf()
		}).button])), og.ol(new uX([new g0(L(461), function() {
			return aLt.rh(), !0
		}).button])), ob.push(og)
	}(ob), ob))
}

function a4x(title, rF, aWZ, aKP) {
	var uL, aKQ;
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), aKQ.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, aKP = aKP || [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})], uL = new oQ(title, aKP), aKQ = new rD(uL.oT, rF), aWZ && bQ.bR.textAlign(uL.oT.style, 1)
}

function aMA() {
	function aWd(player) {
		var bv;
		bQ.by.sX(player) && (bv = cT.ct[player] - cT.a3Q[player] + nN.sS(player), hD.sJ(player, Math.abs(bv), bv < 0 ? 18 : 12)), cT.ct[player] = 0, cT.a3Q[player] = 0
	}

	function aWh() {
		j1.show(!1, !1, !1, !0), gZ.rQ(), rR.iq.rS()
	}

	function aWb(player, sa) {
		for (var aL = sa.length - 1; 0 <= aL; aL--) nN.sK(sa[aL], player)
	}

	function aWc(player) {
		var gu = cT.gu,
			gw = cT.gw,
			gv = cT.gv,
			gy = cT.gy,
			w = v.w;
		if (cT.cj[player]) {
			cT.cj[player] = 0;
			for (var c4 = gu[player], c5 = gv[player], aH = gw[player]; c4 <= aH; aH--)
				for (var aJ = gy[player]; c5 <= aJ; aJ--) {
					var aP = 4 * (aJ * w + aH);
					f.ys(player, aP) && f.aWn(aP)
				}
		}
		gw[player] = gy[player] = 0, gu[player] = gv[player] = Math.max(w, v.y)
	}
	this.uK = function(aP) {
		var player, bv = cT.cj[aP] + cT.uH[aP];
		d8.d9.gT[aP] ? bv && (aWb(player = aP, nN.sZ(player)), cb.a36(player), aWc(player), nP.hF(player), nN.clear(player), aWd(player), function(player) {
			cT.uH[player] = 0, cT.nG[player] = [], cT.nU[player] = [], cT.a9e[player] = [], cT.a9f[player] = []
		}(player)) : !bv && cT.nG[aP].length || this.aV7(aP)
	}, this.aV7 = function(player) {
		! function(player) {
			bQ.by.cZ(player) || (cT.rN[player] = rO.qE.rP(), j.rM++);
			var sa = nN.sZ(player);
			0 === sa.length ? bQ.by.pG(player) && aWh() : (aWb(player, sa), function(player, sa) {
				var aWk = sa[function(sa) {
					var aL, hy = 0;
					for (aL = sa.length - 1; 1 <= aL; aL--) cT.cj[sa[aL]] > cT.cj[sa[hy]] && (hy = aL);
					return hy
				}(sa)];
				9 === j.dy && (1 === cw.cz[player] ? gh.aAH(8) && a4Z.aWl(aWk) : d0.d2[player] && (bp.de(765, 0), bp.cA(280, L(462, [cT.cU[aWk], cT.cU[player]]), 765, aWk, bJ.dP, bJ.aWm, -1, !0)));
				if (bQ.by.pG(player)) aWh(), bp.bD(aWk, 1);
				else {
					for (var aL = sa.length - 1; 0 <= aL; aL--)
						if (bQ.by.sX(sa[aL]) && (hD.hE[4 - bQ.by.cZ(player)]++, bQ.by.pG(sa[aL]))) return bp.bD(player, 0);
					bQ.by.cZ(player) || bp.cY(0, player, aWk)
				}
			}(player, sa))
		}(player), cb.a36(player), aWc(player), aWd(player),
			function(player) {
				cT.iw[player] = 0, cT.nG[player] = null, cT.nU[player] = null, cT.a9e[player] = null, cT.a9f[player] = null
			}(player), nP.hF(player), nN.clear(player), d8.aEC.aUb(player)
	}
}

function oQ(title, a5v, aWo) {
	var fp = document.createElement("div"),
		aWp = document.createElement("div"),
		fs = document.createElement("div"),
		aWq = document.createElement("div"),
		aWr = document.createElement("div");
	this.oT = fs, this.or = a5v, this.show = function() {
			!1 !== aWo ? document.body.appendChild(fp) : (document.body.appendChild(aWp), document.body.appendChild(aWq))
		}, this.gG = function() {
			!1 !== aWo ? f1.removeChild(document.body, fp) : (f1.removeChild(document.body, aWp), f1.removeChild(document.body, aWq))
		}, this.aOW = function() {
			var aOZ = bQ.bR.lV(.1),
				aRr = bQ.bR.lV(.08 + .04 * (bN.aH1 < 1), .3);
			return {
				aOZ: aOZ,
				aRr: aRr,
				aOY: bN.au / bN.mk - aOZ - aRr
			}
		}, this.resize = function(aFh) {
			var aI = a5v.length,
				bA = this.aOW(),
				aOZ = bA.aOZ,
				aRr = bA.aRr;
			for (aWp.style.height = bQ.bR.fy(aOZ), bQ.bR.gL(aWp, 2), aWq.style.top = bQ.bR.fy(bN.au / bN.mk - aRr), aWq.style.height = bQ.bR.fy(aRr), bQ.bR.gL(aWq, 8), fs.style.top = bQ.bR.fy(aOZ), fs.style.height = fs.style.maxHeight = bQ.bR.fy(bA
					.aOY), aWp.style.font = bQ.bR.bS(0, bQ.bR.lV(.02, .15)), aWq.style.font = bQ.bR.bS(0, bQ.bR.lV(.02, .7)), fs.style.font = bQ.bR.bS(0, bQ.bR.lV(.02, .35)), aL = 1; aL < aI; aL++) bQ.bR.gL(a5v[aL].button, 4);
			for (var aFi = 0, aL = 0; aL < aI; aL++) aFi += a5v[aL].button.offsetWidth;
			if (aFh && aFi < aWq.offsetWidth)
				for (aL = 0; aL < aI; aL++) a5v[aL].button.style.width = (100 * a5v[aL].button.offsetWidth / aFi).toFixed(2) + "%";
			else
				for (aL = 0; aL < aI; aL++) a5v[aL].button.style.width = "auto";
			aWq.gP && (aWq.scrollLeft = aWq.gP), aFh || this.resize(!0)
		}, this.eD = function() {
			var bA = this.aOW(),
				bB = bN.mk;
			eF.fillStyle = bJ.fx, eF.fillRect(0, bB * bA.aOZ, bN.aV, bB * bA.aOY)
		}, fp.style.position = "absolute", fp.style.top = "0", fp.style.left = "0", fp.style.width = "100%", fp.style.height = "100%", aWp.style.position = "absolute", aWp.style.top = "0", aWp.style.left = "0", aWp.style.width = "100%", aWp.style
		.display = "flex", aWp.style.backgroundColor = bJ.fx, aWq.style.position = "absolute", aWq.style.left = "0", aWq.style.width = "100%", bQ.bR.fz(aWq), aWr.style.height = aWr.style.maxHeight = "100%", fs.style.position = "absolute", fs.style
		.width = "100%", fs.style.backgroundColor = bJ.fx,
		function() {
			for (var aL = 0; aL < a5v.length; aL++) a5v[aL].button.style.height = "100%", a5v[aL].button.style.padding = "0.0em 0.9em"
		}();
	for (var aL = 0; aL < a5v.length; aL++) aWr.appendChild(a5v[aL].button);
	aWp.appendChild(function() {
		var aWu = document.createElement("h1");
		return aWu.textContent = title, aWu.style.margin = "auto", aWu.style.fontSize = 18 <= title.length && bN.au > bN.aV ? "1.8em" : "2.3em", aWu.style.fontFamily = "Arial Black, system-ui", aWu
	}()), aWq.appendChild(aWr), !1 !== aWo && (fp.appendChild(fs), fp.appendChild(aWp), fp.appendChild(aWq))
}

function aMT() {
	this.aWv = 0, this.aWw = 0, this.aWx = 0, this.aWy = 0, this.aWz = 0, this.aX0 = 0, this.a56 = [0, 0, 0, 0], this.aG4 = function() {
		this.aWv = oI.aFt(), this.aWw = oI.bm(), this.aWx = -this.aWv, this.aWy = -this.aWw, this.aWz = bN.aV / a3D, this.aX0 = bN.au / a3D, this.a56[0] = Math.floor(this.aWx), this.a56[1] = Math.floor(this.aWy), this.a56[2] = Math.floor(this
			.a56[0] + this.aWz + 1), this.a56[3] = Math.floor(this.a56[1] + this.aX0 + 1), j7.a52 = !0
	}
}

function aEU() {
	this.aBJ = function(cK) {
		cK.fill(0)
	}, this.aO3 = function(cK) {
		for (var aI = cK.length, aL = 0; aL < aI; aL++) cK[aL] = []
	}, this.aHm = function(su, a33) {
		for (var sv = h1.aKj, aL = 0; aL < 3; aL++) sv[aL] = a33 * su[aL];
		return sv
	}, this.aHn = function(su, sv, aX1) {
		for (var e8 = 0, aL = 0; aL < 3; aL++) e8 += Math.abs(su[aL] - sv[aL]);
		return aX1 <= e8
	}, this.aHo = function(su, aX2) {
		for (var aL = 0; aL < 3; aL++) su[aL] = hu.hz(su[aL] + aX2, 0, 255);
		return su
	}, this.tE = function(cK, gC, gD) {
		gD = gD || cK.length - 1;
		for (var aX3 = 0, aL = gC = gC || 0; aL <= gD; aL++) aX3 += cK[aL];
		return aX3
	}, this.aX4 = function(cK, aX5) {
		for (var aL, aEz, aI = cK.length, aX6 = [], c2 = aI - 1; 0 <= c2; c2--) {
			for (aL = aEz = 0; aL < aI; aL++) aX5(cK[aL]) < aX5(cK[aEz]) && (aEz = aL);
			aI--, aX6.push(cK[aEz]), cK[aEz] = cK[aI], cK.pop()
		}
		return aX6
	}, this.min = function(cK) {
		var aL, hm, aI = cK.length;
		if (0 === aI) return 0;
		for (hm = cK[0], aL = 1; aL < aI; aL++) hm = Math.min(hm, cK[aL]);
		return hm
	}, this.max = function(cK) {
		var aI = cK.length;
		if (0 === aI) return 0;
		for (var hm = cK[0], aL = 1; aL < aI; aL++) hm = Math.max(hm, cK[aL]);
		return hm
	}, this.a0D = function(cK, hm) {
		for (var aI = cK.length, aY = 0, aL = 0; aL < aI; aL++) aY += cK[aL] > hm;
		return aY
	}, this.aX7 = function(ah, ak, min) {
		for (var aI = ak[0], aL = aI - 1; 0 <= aL; aL--) ah[aL] < min && (ah[aL] = ah[--aI]);
		ak[0] = aI
	}, this.aX8 = function(cK, aI, value) {
		for (var aL = 0; aL < aI; aL++) cK[aL] -= value
	}, this.aNr = function(cK) {
		for (var aI = cK.length, aL = 0; aL < aI; aL++)
			if ("string" != typeof cK[aL]) return !1;
		return !0
	}, this.oZ = function(bV, cK, aX9) {
		cK.fill(0);
		for (var dc = bV.split(","), aI = Math.min(dc.length, cK.length), aL = 0; aL < aI; aL++) cK[aL] = Math.min(parseInt(dc[aL]), aX9)
	}, this.aIE = function(bV, cK, aRp) {
		cK.fill("");
		for (var dc = bV.split('"'), aI = Math.min(dc.length, 2 * cK.length), i3 = 0, aL = 1; aL < aI; aL += 2) cK[i3++] = dc[aL].slice(0, aRp)
	}, this.a0C = function(cK, aY) {
		if (0 === aY) cK.fill(0);
		else {
			var aX3 = this.tE(cK),
				aI = cK.length;
			if (0 === aX3) cK.fill(hu.hv(aY, aI));
			else
				for (var aL = 0; aL < aI; aL++) cK[aL] = hu.hv(aY * cK[aL], aX3);
			if (0 === (aX3 = this.tE(cK))) cK[1] = aY;
			else
				for (var i3 = 0; aX3++ < aY;) cK[i3 = (i3 + 1) % aI] && cK[i3]++
		}
	}, this.u3 = function(cK) {
		if (!cK) return 0;
		var aI = cK.length;
		if (0 === aI) return 0;
		for (var hm = cK[aI - 1], aL = aI - 2; 0 <= aL; aL--)
			if (cK[aL] !== hm) return aL + 2;
		return 1
	}, this.aJF = function(cK) {
		for (var aX3 = 0, aL = 0; aL < cK.length; aL++) aX3 += cK[aL].length;
		return aX3
	}, this.wa = function(aXA) {
		for (var cK = [], aL = 0; aL < aXA.length; aL++) cK = cK.concat(aXA[aL]);
		return cK
	}, this.has = function(cK, hm) {
		for (var aI = cK.length, aL = 0; aL < aI; aL++)
			if (cK[aL] === hm) return !0;
		return !1
	}
}

function aM0() {
	var xD, aXB, aXC, xC, aXD, aXE, aXF, aXG, aXH, aXI, aXJ, y0, aXK, aXL = !1,
		aXM = !1;

	function aXN(b9) {
		y0 = cH.bU, aXC = xC = aXB = 0, aXD = (aXK = 33) / b9, xD = 1 / (b9 / aXK / 4), aXE = (bN.aV / 2 + pW) / a3D, aXF = (bN.au / 2 + pX) / a3D, aXG = a3D
	}

	function aXP(aL) {
		var c4; - 1 !== aL && (aL = n.gs(d8.d9.gt[aL]), c4 = n.r(aL) - 15, aL = n.t(aL) - 15, c0.c6(c4, aL, 29 + c4, 29 + aL))
	}

	function aXV(rb) {
		Math.abs(Math.log(aXJ / aXG)) < .125 && (aXJ = rb * aXG)
	}

	function aXU(c4, c5, fE, gx) {
		aXH = (c4 + fE + 1) / 2, aXI = (c5 + gx + 1) / 2;
		fE = bN.aV / (fE - c4 + 1), c4 = bN.au / (gx - c5 + 1);
		aXJ = .9 * (fE < c4 ? fE : c4)
	}
	this.kP = function() {
		return aXL
	}, this.aXO = function() {
		aXN(1), this.c6(0, 0, v.w - 1, v.y - 1), j.bC || j.cp || this.c1(j.k, 3e3, !0, .3)
	}, this.c8 = function(player, c9) {
		aXP(d8.ge.sx(player, c9))
	}, this.c1 = function(player, b9, aXQ, zoom) {
		j.qV || aXL && !aXQ && aXM || (0 === cT.cj[player] ? aXP(d8.ge.aXR(player)) : (oI.aFo = !1, aXM = aXQ, aXN(b9), function(player) {
			aXH = (cT.gu[player] + cT.gw[player] + 1) / 2, aXI = (cT.gv[player] + cT.gy[player] + 1) / 2
		}(player), function(zoom, player) {
			var gz = cT.gw[player] - cT.gu[player] + 1,
				player = cT.gy[player] - cT.gv[player] + 1,
				c2 = bN.aV / gz,
				c7 = bN.au / player,
				c2 = (aXJ = c2 < c7 ? c2 : c7, 0 !== zoom ? zoom : gz < 20 && player < 20 ? .5 : .9);
			aXJ *= c2, aXV(7 / 8)
		}(zoom, player), aXL = !0, pV.pU()))
	}, this.aT0 = function(b9) {
		j.cp || j.qV || (oI.aFo = !1, aXM = !1, aXN(b9), aXU(0, 0, v.w - 1, v.y - 1), aXV(7 / 8), aXL = !0, pV.pU())
	}, this.c6 = function(c4, c5, fE, gx) {
		aXL = !1, aXU(c4, c5, fE, gx), a3D = aXJ, oI.aFu(aXH, bN.aV / 2), oI.aFw(aXI, bN.au / 2), a55.aG4(), cH.cI = !0
	}, this.iC = function() {
		return !(aXL && aXM || (aXL = !1))
	}, this.e6 = function() {
		var aXX, aXY, a0, aXb;
		aXL && (aXB < .5 ? xC < aXD && (xC += aXD * xD, aXC = aXB) : 1 - aXC < aXB && (xC = (xC -= aXD * xD) < aXD * xD ? aXD * xD : xC), y0 = y0 >= cH.bU ? cH.bU - 1 : y0, a0 = cH.bU - y0, aXB = 1e3 < a0 || 1 < (aXB += xC * a0 / aXK) ? 1 : aXB,
			y0 = cH.bU, a0 = a3D, aXX = pW, aXY = pX, a0 = (a3D = aXG * Math.pow(aXJ / aXG, aXB)) / a0, aXb = 1 - (aXG * Math.pow(aXJ / aXG, 1 - aXB) - aXG) / (aXJ - aXG), oI.aFu(aXE + aXb * (aXH - aXE), bN.aV / 2), oI.aFw(aXF + aXb * (aXI -
				aXF), bN.au / 2), cb.zoom(a0, (aXX * a0 - pW) / (1 - a0), (aXY * a0 - pX) / (1 - a0)), a55.aG4(), 1 <= aXB && (aXL = !1, j7.a53 = !0), cH.cI = !0)
	}
}

function aMY() {
	this.bs = function() {
		return b4.b5.b6() ? 2 : 1
	}
}

function aEF() {
	for (var bB = document.createElement("canvas"), bB = (bB.width = 24, bB.height = 24, bB.getContext("2d", {
			alpha: !1
		})), a0 = (bB.fillStyle = "rgb(0,0,0)", bB.fillRect(0, 0, 24, 24), bB.font = "22px system-ui", bB.textBaseline = "middle", bB.textAlign = "center", bB.fillStyle = "rgb(255,255,255)", bB.fillText("Q", 12, 12), bB.getImageData(0, 0, 24, 24)
			.data), aI = a0.length, d7 = 0, aL = 0; aL < aI; aL += 4) d7 += a0[aL];
	return 16383 & d7
}

function a7E(data) {
	var uL, aXc;

	function aXk(aI) {
		return aI < 60 ? 1 === aI ? aI + " Second" : aI + " Seconds" : aI < 3600 ? 1 === (aI = Math.floor(aI / 60)) ? aI + " Minute" : aI + " Minutes" : aI < 172800 ? 1 === (aI = Math.floor(aI / 3600)) ? aI + " Hour" : aI + " Hours" : (aI = Math
			.floor(aI / 172800)) + " Days"
	}

	function aXe(e8) {
		var aI = data.data.length;
		if (aI) {
			for (var gC, max = min = parseInt(data.data[0][0]), aL = 1; aL < aI; aL++) var wb = parseInt(data.data[aL][0]),
				min = Math.min(wb, min),
				max = Math.max(wb, max);
			gC = e8 < 0 ? min + e8 : max + 1, f1.g9(8, f1.mR().pe, new gA(21, {
				gB: data.gB,
				gC: gC,
				gD: gC + Math.abs(e8)
			}))
		}
	}
	if (this.show = function() {
			uL.show(), this.resize()
		}, this.gG = function() {
			uL.gG()
		}, this.resize = function() {
			uL.resize(), aXc.resize()
		}, this.oq = function(bB) {
			2 === bB && uL.or[0].os()
		}, data.a7F) {
		uL = new oQ(L(383), [new g0("⬅️ " + L(61), function() {
			f1.oX()
		})]);
		var a0 = {
				aTP: [],
				aTU: [L(475), L(476), L(477) + " ↗"],
				aTa: [12, 50, 38]
			},
			a0G = j.data.a0G;
		if (a0G) {
			for (var aI = a0G.length, aTP = a0.aTP, cU = cT.cU, aL = 0; aL < aI; aL++) aTP.push([{
				hm: aL + 1 + ".",
				bv: 0
			}, {
				hm: cU[aL],
				bv: 0
			}, {
				hm: iU.iV.cs(a0G[aL], 5),
				bv: 1,
				jQ: a0G[aL],
				a5i: 0
			}]);
			aXc = new aTO(uL.oT, a0, {
				aTX: 1
			})
		} else aXc = new aTO(uL.oT, a0)
	} else {
		var a0 = data.data.length ? 0 : 1,
			aKP = [new g0("⬅️ " + L(61), function() {
				f1.oX()
			}), new g0(L(463), function() {
				aXe(-10)
			}, a0, 0, 1), new g0(L(464), function() {
				aXe(10)
			}, a0, 0, 1), new g0(L(403), function() {
				f1.g9(11, 10, new aEs({
					gB: data.gB
				}))
			})],
			aTU = [L(465), L(466), L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(183), L(184), "Audit Log", L(185)];
		uL = new oQ(aTU[data.gB], aKP), ! function() {
			var aL, a0 = {
					aTP: []
				},
				aTP = a0.aTP,
				aXg = data.data,
				aI = aXg.length;
			aI && 0 === aXg[0][0] && 0 <= (hy = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.gB]) && (f1.d9.gF[hy] = aXg[0][1]);
			var mi = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.gB],
				sg = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.gB],
				hy = [
					[L(478), L(479) + " ↗", L(480)],
					[L(478), L(481), L(482), L(483) + " ↗"],
					[L(478), L(479) + " ↗", L(482)],
					[L(478), L(479) + " ↗", L(482)],
					[L(475), L(484), L(485) + " ↗", L(486) + " ↗", L(450)],
					[L(475), L(484), L(487) + " ↗", L(166) + " ↗", L(488)],
					[L(475), L(484), L(489) + " ↗", L(490) + " ↗", L(167)],
					[L(475), L(484), L(487) + " ↗", L(166) + " ↗", L(491)],
					[L(475), L(484), L(485) + " ↗", L(486) + " ↗", L(450)],
					[L(478), L(479) + " ↗", L(482)],
					[L(478), L(479) + " ↗", L(492)],
					[L(478), L(479) + " ↗", L(482)],
					[L(475), L(484), L(485) + " ↗", L(486) + " ↗", L(493)],
					[L(478), L(479) + " ↗", L(482)]
				];
			if (a0.aTU = hy[data.gB], a0.aTa = [
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
				][data.gB], 0 === data.gB || 2 === data.gB || 3 === data.gB || 9 === data.gB || 10 === data.gB || 11 === data.gB || 13 === data.gB)
				for (aL = 0; aL < aI; aL++) aTP.push([{
					hm: aXg[aL][0] + 1 + ".",
					bv: 0
				}, {
					hm: aXg[aL][1],
					bv: 1,
					jQ: aXg[aL][4],
					a5i: aXg[aL][3]
				}, {
					hm: (mi * aXg[aL][2]).toFixed(sg),
					bv: 0
				}]);
			else if (12 === data.gB)
				for (aL = 0; aL < aI; aL++) {
					var aXj = aXg[aL][3];
					aTP.push([{
						hm: "" + aXg[aL][0],
						bv: 0
					}, {
						hm: aXk(aXg[aL][4]),
						bv: 0
					}, {
						hm: aXg[aL][5],
						bv: 1,
						jQ: aXg[aL][1],
						a5i: 0
					}, {
						hm: aXg[aL][6],
						bv: 1,
						jQ: aXg[aL][2],
						a5i: 0
					}, {
						hm: jT.rc(aXj, iU.iV.cs(aXg[aL][1], 5)),
						bv: 0
					}])
				} else if (1 === data.gB)
					for (aL = 0; aL < aI; aL++) aTP.push([{
						hm: aXg[aL][0] + 1 + ".",
						bv: 0
					}, {
						hm: aXg[aL][1],
						bv: 0
					}, {
						hm: (mi * aXg[aL][2]).toFixed(sg),
						bv: 0
					}, {
						hm: aXg[aL][3],
						bv: 1,
						jQ: aXg[aL][5],
						a5i: aXg[aL][4]
					}]);
				else if (4 === data.gB || 5 === data.gB || 6 === data.gB || 7 === data.gB || 8 === data.gB)
				for (aL = 0; aL < aI; aL++) {
					var aXl = aXg[aL][5];
					4 === data.gB || 8 === data.gB ? "100%" === (aXl = (aXl % 64 * 100 / (aXl >> 6)).toFixed(0) + "%") && (4 === data.gB ? aXl += " (" + L(494) + ")" : aXl += " (" + L(495) + ")") : 5 === data.gB ? 32768 <= aXl && (aXl = -(aXl -
						32768)) : aXl = (mi * aXl).toFixed(sg), aTP.push([{
						hm: "" + aXg[aL][0],
						bv: 0
					}, {
						hm: aXk(aXg[aL][6]),
						bv: 0
					}, {
						hm: aXg[aL][7],
						bv: 1,
						jQ: aXg[aL][1],
						a5i: aXg[aL][2]
					}, {
						hm: aXg[aL][8],
						bv: 1,
						jQ: aXg[aL][3],
						a5i: aXg[aL][4]
					}, {
						hm: "" + aXl,
						bv: 0
					}])
				}
			aXc = new aTO(uL.oT, a0)
		}()
	}
}

function aBf() {
	var a8n = 0,
		aXm = 0,
		aXn = 0,
		aXo = null,
		aXp = null;

	function aXt(cF, aXu, aXv) {
		var bV = cF.username;
		return (bV += "   " + jl.ge.jv(cF.jf, cF.jh, cF.jw)) + function(cF) {
			cF = cF.a9B;
			if (cF < 1e3) return "   Gold: " + cF;
			if ((cF %= 1024) < 1e3) return "   Gold: " + cF + "k";
			return "   Gold: " + (cF - 999) + "M"
		}(cF) + ("   IP: " + iU.iV.cs(cF.aQ9, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aXv ? aXm : aXs(cF, aXu)])
	}

	function aXs(cF, aXu) {
		return aXm = aXu || jl.jm.jj(cF.jQ) ? 1 : 0
	}
	this.aXq = 0, this.aXr = function() {
		!a8n || aXm === aXs(aXp) && aXn === aXp.a9B || (aXn = aXp.a9B, aXo.show(-1, -1, aXt(aXp, 0, 1), 1, 1, aXp.color))
	}, this.l6 = function(l0, cF, aXu) {
		var qJ = l0.getBoundingClientRect();
		this.show(qJ.left, qJ.top, cF, 0, aXu), l0.addEventListener("mouseleave", function remove() {
			l0.removeEventListener("mouseleave", remove), jl.l5 && jl.l5.gG(1)
		}), this.aXq = aXu
	}, this.show = function(aH, aJ, cF, aXx, aXu) {
		aXo = aXo || new aXy, aXn = (aXp = cF).a9B, aXo.show(aH, aJ, aXt(cF, aXu), aXx, 0, aXp.color), a8n = 1
	}, this.gG = function(aXz) {
		this.aXq = 0, aXo && aXo.gG(aXz) && (a8n = 0, aXp = null)
	}
}

function aY0() {
	var aY1 = 0;

	function aY5(bV, id) {
		console.log(bV), aY1 || (id ? 1 === id ? bp.b2 = L(497) + ": " + bV : f1.g9(4, 3, new a4x(L(498), bV, 1)) : f1.g9(4, 3, new a4x("⚠️ " + L(496), bV, 1)))
	}
	this.pB = function(bV, aY2) {
		var aAS, cF;
		return aY1 = aY2, iP.iV.a6B(iP.iV.u9(iP.iV.a69(bV))), bp.b2 = "", !! function() {
			if (pD.size < 10) aY5("File Too Small");
			else {
				var aY7 = pD.iB(12),
					cC = (aY7 !== eh.rVersion && (cC = "Incompatible Version   Required: " + eh.rVersion, aY5(cC = (cC += "   Found: " + aY7) + ("   Compatible at " + el.d9.uy() + "/" + aY7), 1)), pD.iB(12)),
					aY8 = pD.iB(31);
				if (aY8 !== pD.size) aY5("Size Error: Stated Size " + aY8 + " Actual Size " + pD.size);
				else if (function(au, aY7) {
						for (var aP = pD.i9, aI = pD.size, a9U = aY7, aL = 3; aL < aI; aL++) a9U = a9U + aP[aL] & 4095;
						return a9U === au || (aY5("Hash Error: " + a9U + " " + au + " " + aI), !1)
					}(cC, aY7)) return 1
			}
			return
		}() && (aAS = pD, (cF = j.data = new ry).mapType = aAS.iB(2), cF.mapProceduralIndex = aAS.iB(8), cF.mapRealisticIndex = aAS.iB(8), cF.mapSeed = aAS.iB(14), cF.mapName = aAS.iO(5), 2 === cF.mapType && aAS.iS(), cF.passableWater = aAS
			.iB(1), cF.passableMountains = aAS.iB(1), cF.playerCount = aAS.iB(10), cF.humanCount = aAS.iB(10), cF.selectedPlayer = aAS.iB(9), cF.gameMode = aAS.iB(1), cF.playerMode = aAS.iB(2), cF.battleRoyaleMode = aAS.iB(2), cF
			.numberTeams = aAS.iB(4), cF.isZombieMode = aAS.iB(1), cF.isContest = aAS.iB(1), cF.isReplay = aAS.iB(1), cF.elo = aAS.iI(2, 14, 2), cF.colorsType = aAS.iB(1), cF.colorsPersonalized = aAS.iB(1), cF.colorsData = aAS.iI(10, 18,
			512), cF.selectableColor = aAS.iB(1), cF.teamPlayerCount = aAS.iI(4, 10, 9), cF.neutralBots = aAS.iB(1), cF.botDifficultyType = aAS.iB(2), cF.botDifficultyValue = aAS.iB(4), cF.botDifficultyTeam = aAS.iI(4, 4, 9), cF
			.botDifficultyData = aAS.iI(10, 4, 512), cF.spawningType = aAS.iB(2), cF.spawningSeed = aAS.iB(14), cF.spawningData = aAS.iI(11, 12, 1024), cF.selectableSpawn = aAS.iB(1), cF.playerNamesType = aAS.iB(2), cF.playerNamesData = aAS
			.iM(10, 5, 512), cF.selectableName = aAS.iB(1), cF.aIncomeType = aAS.iB(2), cF.aIncomeValue = aAS.iB(8), cF.aIncomeData = aAS.iI(10, 8, 512), cF.tIncomeType = aAS.iB(2), cF.tIncomeValue = aAS.iB(8), cF.tIncomeData = aAS.iI(10, 8,
				512), cF.iIncomeType = aAS.iB(2), cF.iIncomeValue = aAS.iB(8), cF.iIncomeData = aAS.iI(10, 8, 512), cF.sResourcesType = aAS.iB(2), cF.sResourcesValue = aAS.iB(11), cF.sResourcesData = aAS.iI(10, 11, 512), cF.a0G = aAS.iI(10,
				30, 0), !! function() {
				var aAS = pD,
					a2y = aAS.iB(5),
					aYA = aAS.iB(30),
					aYB = aAS.iB(30);
				if (aYA + aYB > 8 * aAS.size) return void aY5("Corrupted File");
				return function(aI) {
						var aYE = new Uint8Array(aI),
							aYF = new Uint16Array(aI),
							aYG = new Uint32Array(aI),
							aYH = new Uint32Array(aI);
						ib.a0K.z9 = aYE, ib.a0K.zA = aYF, ib.a0K.zB = aYG, ib.a0K.zC = aYH;
						for (var aL = 0; aL < aI; aL++) {
							var id = pD.iB(4);
							aYE[aL] = id, aYF[aL] = pD.iB(9), 0 === id ? aYG[aL] = pD.iB(22) : 1 === id ? (aYG[aL] = pD.iB(10), aYH[aL] = pD.iB(10)) : 2 === id ? (aYG[aL] = pD.iB(10), aYH[aL] = pD.iB(9)) : 3 === id ? (aYG[aL] = pD.iB(10),
								aYH[aL] = pD.iB(27)) : 4 === id ? (aYG[aL] = pD.iB(10), aYH[aL] = pD.iB(16)) : 5 === id || 6 === id ? aYG[aL] = pD.iB(10) : 7 === id ? aYG[aL] = pD.iB(1) : 10 === id && (aYG[aL] = pD.iB(20), aYH[aL] = pD
								.iB(22))
						}
					}(aYA),
					function(aI, a2y) {
						var zD = new Uint8Array(aI),
							zE = new Array(aI);
						zE.fill(0), ib.a0K.zD = zD, ib.a0K.zE = zE;
						for (var aL = 0; aL < aI; aL++) zD[aL] = pD.iB(1), zE[aL] = pD.iB(a2y)
					}(aYB, a2y), 1
			}()) && (pD.hy < 8 * pD.size - 13 || pD.hy > 8 * pD.size ? (aY5("Out Of Bounds Error: " + pD.hy + " " + 8 * pD.size), !1) : (ib.a0K.zF = bV, 2 !== j.data.mapType || (aY5("Load base64 image...", 2), aY2)))
	}, this.ie = function(ia, aY6) {
		var cE = document.createElement("canvas"),
			i5 = cE.getContext("2d");
		if (cE.width = ia.width, cE.height = ia.height, i5.drawImage(ia, 0, 0), j.data.canvas = cE, aY1 || aY6) return j.e5 ? void 0 : (j.data.mapType = 2, f1.q7(), void f1.g9(19));
		ib.a7Q()
	}
}

function aYI() {
	this.ur = function(es, uo) {
		iG.kT(11), iG.ty(1, 0), iG.ty(6, 4), iG.ty(1, uo ? 1 : 0), iG.ty(3, 0 === j.e5 ? jl.aBc ? 6 : 0 : j.cp ? 1 : j.iv ? 7 : j.dy < 7 ? 2 : 8 === j.dy ? 4 : 9 === j.dy ? 5 : 3), el.d9.send(es, iG.i9)
	}, this.aGd = function() {
		iG.kT(58), iG.ty(1, 0), iG.ty(6, 5), iG.ty(8, el.d9.uk), iG.ty(10, o1.aDR), iG.ty(9, o1.aGT), iG.ty(10, eh.aC4), iG.ty(14, eh.aEn), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLU = function(c3) {
		iG.kT(27), iG.ty(1, 1), iG.ty(4, 0), iG.ty(22, c3), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLV = function(a0L, nR) {
		iG.kT(25), iG.ty(1, 1), iG.ty(4, 1), iG.ty(10, a0L), iG.ty(10, nR), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLW = function(a0L, a0Q) {
		iG.kT(24), iG.ty(1, 1), iG.ty(4, 2), iG.ty(10, a0L), iG.ty(9, a0Q), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLX = function(a0L, a0X) {
		iG.kT(42), iG.ty(1, 1), iG.ty(4, 3), iG.ty(10, a0L), iG.ty(27, a0X), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLZ = function(a0L, c9) {
		iG.kT(31), iG.ty(1, 1), iG.ty(4, 4), iG.ty(10, a0L), iG.ty(16, c9), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLa = function(nR) {
		iG.kT(15), iG.ty(1, 1), iG.ty(4, 5), iG.ty(10, nR), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLb = function(hy) {
		iG.kT(15), iG.ty(1, 1), iG.ty(4, 6), iG.ty(10, hy), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLc = function(a0e) {
		iG.kT(6), iG.ty(1, 1), iG.ty(4, 7), iG.ty(1, a0e), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLd = function() {
		iG.kT(5), iG.ty(1, 1), iG.ty(4, 8), el.d9.send(el.d9.uj, iG.i9)
	}, this.aLe = function(a0L, c3, nR) {
		iG.kT(47), iG.ty(1, 1), iG.ty(4, 10), iG.ty(10, a0L), iG.ty(10, nR), iG.ty(22, c3), el.d9.send(el.d9.uj, iG.i9)
	}, this.aSa = function(aYJ, aYK) {
		iG.kT(24), iG.ty(1, 1), iG.ty(4, 15), iG.ty(9, aYK), iG.ty(10, aYJ), el.d9.send(el.d9.uj, iG.i9)
	}, this.aSb = function(dE) {
		iG.kT(14), iG.ty(1, 1), iG.ty(4, 14), iG.ty(9, dE), el.d9.send(el.d9.uj, iG.i9)
	}, this.aSe = function(aYL, target) {
		var aL, aI = aYL.length;
		for (iG.kT(14 + 9 * aI), iG.ty(1, 1), iG.ty(4, 13), iG.ty(9, target), aL = 0; aL < aI; aL++) iG.ty(9, aYL[aL]);
		el.d9.send(el.d9.uj, iG.i9)
	}
}

function aMW() {
	this.aV = 0, this.au = 0, this.qs = 0, this.qt = 0, this.aYM = 0, this.aYN = 0, this.qu = 0, this.a5M = 0;
	var aYP = this.aYO = 0;
	this.aYQ = 0, this.aYR = 0, this.aYS = 0, this.aIN = 0, this.hy = 0, this.aVd = null, this.bi = !1, this.aYT = -1, this.aYU = !1, this.aYV = [0, 0], this.mW = function() {
		this.aVd = [L(499), L(452, 0, "Balance"), L(451, 0, "Interest"), L(500)]
	}, this.b3 = function() {
		this.bi = !1, this.aYT = -1, this.aYU = !1, this.resize()
	}, this.resize = function() {
		this.aV = bN.aV < 1.369 * bN.au ? bN.aV : 1.369 * bN.au;
		var a0 = b4.b5.b6() && bN.aV < bN.au ? 1 : b4.b5.b6() ? .8 : bN.aV < bN.au ? .65 : .59;
		this.aV = Math.floor(a0 * this.aV), this.aV -= b4.b5.b6() && bN.aV < bN.au ? 2 * bT.gap + 2 : 0, this.au = Math.floor(this.aV / 1.369), this.aIN = Math.floor(this.au / 150), this.aIN = Math.max(this.aIN, 1.5), this.qs = Math.floor(1 +
			.02 * this.aV), this.qt = Math.floor(1 + .04 * this.aV), this.qu = this.qt, aYP = Math.floor(.75 * this.qu), this.a5M = Math.floor(1 + .075 * this.aV), this.aYQ = Math.floor(1 + .1125 * this.aV), this.aYR = Math.floor(this.aV * (
			b4.b5.b6() ? .03 : .029)), this.aYR = Math.max(this.aYR, 4), this.aYS = Math.floor(.035 * this.aV), this.aYS = Math.max(this.aYS, 4), this.aYO = this.au - 2 * this.qu - this.a5M - this.aYQ, this.bi && this.aYW()
	}, this.bt = function(hr, hs) {
		var eE, a3U;
		return !!this.bi && (a3U = hr, eE = hs, hr -= hu.hv(bN.aV - this.aV, 2), hs -= hu.hv(bN.au - this.au, 2), hr < 0 || hs < 0 || hr >= this.aV || hs >= this.au || hr >= this.aV - this.aYQ && hs < this.aYQ ? -1 !== qZ.bt(a3U, eE) || bq.bt(
			a3U, eE) || this.gG() : hs < this.aYQ || (hs < this.au - this.a5M ? (this.aYU = !0, this.aYT = (hr - 2 * this.qs - this.aYM) / this.aYN, 3 !== this.hy && (cH.cI = !0)) : (a3U = (a3U = Math.floor(hr / (this.aV / this.aVd
			.length))) < 0 ? 0 : a3U >= this.aVd.length ? this.aVd.length - 1 : a3U) !== this.hy && (this.hy = a3U, this.aYW(), cH.cI = !0)), !0)
	}, this.ez = function(hr, hs) {
		return this.aYV[0] = hr, this.aYV[1] = hs, !(!this.bi || !this.aYU || (hr -= hu.hv(bN.aV - this.aV, 2), hs = this.aYT, this.aYT = (hr - 2 * this.qs - this.aYM) / this.aYN, (0 <= this.aYT && this.aYT <= 1 || 0 <= hs && hs <= 1) && (cH
			.cI = !0), 0))
	}, this.zx = function() {
		this.aYU && (this.aYU = !1)
	}, this.qb = function() {
		this.bi ? this.gG() : this.show()
	}, this.show = function() {
		hD.a8Z < 2 || (this.bi = !0, this.aYW())
	}, this.gG = function() {
		this.bi = !1, this.aYT = -1, cH.cI = !0
	}, this.aYW = function() {
		this.hy < 2 ? this.aYM = bd.measureText(bQ.cL.cs(hD.max[this.hy]), bQ.bR.bS(0, this.aYR)) : 2 === this.hy && (this.aYM = bd.measureText(bQ.cL.dw(6, 2), bQ.bR.bS(0, this.aYR))), this.aYN = this.aV - 2 * this.qs - this.aYM - this.qt
	}, this.qS = function() {
		this.bi && this.aYW()
	}, this.eD = function() {
		this.bi && this.qh()
	}, this.qh = function() {
		var aH = hu.hv(bN.aV - this.aV, 2),
			aJ = hu.hv(bN.au - this.au, 2);
		eF.setTransform(1, 0, 0, 1, aH, aJ), eF.fillStyle = bJ.bK, eF.fillRect(0, this.aYQ, this.aV, this.au - this.aYQ), this.aYX(), this.aPg(), eF.strokeRect(0, 0, this.aV, this.au), bQ.bR.textAlign(eF, 2), eF.font = bQ.bR.bS(0, this.aYR),
			0 === this.hy ? this.aYY(hD.a8W, aH, aJ) : 1 === this.hy ? this.aYY(hD.a8X, aH, aJ) : 2 === this.hy ? this.aYZ(aH, aJ) : 3 === this.hy && (this.aYa(aH, aJ), this.aYb(aH, aJ)), qZ.a93(Math.floor(aH + this.aV - .725 * this.aYQ), Math
				.floor(aJ + .275 * this.aYQ), Math.floor(.45 * this.aYQ)), eF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYX = function() {
		var aL, bv;
		for (eF.lineWidth = this.aIN, bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 1), eF.strokeStyle = bJ.bL, eF.font = bQ.bR.bS(1, this.aYS), bv = this.aV / this.aVd.length, eF.fillStyle = bJ.aS7, eF.fillRect(this.hy * bv, this.au - this.a5M,
				bv, this.a5M), eF.fillStyle = bJ.bL, eF.fillRect(0, this.au - this.a5M - .5 * this.aIN, this.aV, this.aIN), aL = 1; aL <= 3; aL++) eF.fillRect(aL * bv, this.au - this.a5M, this.aIN, this.a5M);
		for (aL = this.aVd.length - 1; 0 <= aL; aL--) eF.fillText(bQ.be.cq(this.aVd[aL], 0, .9 * bv), (aL + .5) * bv, this.au - .46 * this.a5M)
	}, this.aPg = function() {
		eF.fillStyle = bJ.aYc, eF.fillRect(0, 0, this.aV, this.aYQ), eF.fillStyle = bJ.bL, eF.fillRect(0, this.aYQ - .5 * this.aIN, this.aV, this.aIN), eF.font = bQ.bR.bS(1, .39 * this.aYQ), eF.fillText(bQ.be.cq(L(501), 0, .8 * this.aV), Math
			.floor(this.aV / 2), Math.floor(.55 * this.aYQ))
	}, this.aYY = function(cK, aH, aJ) {
		var d7 = hD.max[this.hy],
			a33 = (eF.setTransform(1, 0, 0, 1, aH + 2 * this.qs + this.aYM, aJ + this.qu + this.aYQ), eF.lineWidth = 2, this.aYO / Math.sqrt(d7));
		eF.beginPath(), eF.moveTo(this.aYN, this.aYO - a33 * Math.sqrt(cK[hD.a8Z - 1]));
		for (var aL = hD.a8Z - 2; 0 <= aL; aL--) eF.lineTo(aL * this.aYN / (hD.a8Z - 1), this.aYO - a33 * Math.sqrt(cK[aL]));
		eF.stroke();
		aH = this.a93(cK, a33, .5);
		aH < .95 && eF.fillText(bQ.cL.cs(d7), -this.qs, 0), .05 < Math.abs(aH - .5) && eF.fillText(bQ.cL.cs(Math.floor(d7 / 4)), -this.qs, Math.floor(this.aYO / 2)), .05 < aH && eF.fillText("0", -this.qs, this.aYO)
	}, this.aYZ = function(aH, aJ) {
		eF.setTransform(1, 0, 0, 1, aH + 2 * this.qs + this.aYM, aJ + this.qu + this.aYQ), eF.lineWidth = 2;
		var a33 = this.aYO / Math.max(hD.max[this.hy], 1);
		eF.beginPath(), eF.moveTo(this.aYN, this.aYO - a33 * hD.a8Y[hD.a8Z - 1]);
		for (var aL = hD.a8Z - 2; 0 <= aL; aL--) eF.lineTo(aL * this.aYN / (hD.a8Z - 1), this.aYO - a33 * hD.a8Y[aL]);
		eF.stroke();
		aH = this.a93(hD.a8Y, a33, 1), aJ = hD.max[this.hy] / 100;
		aH < .95 && eF.fillText(bQ.cL.dw(aJ, 2), -this.qs, 0), .05 < Math.abs(aH - .5) && eF.fillText(bQ.cL.dw(aJ / 2, 2), -this.qs, Math.floor(this.aYO / 2)), .05 < aH && eF.fillText(bQ.cL.dw(0, 2), -this.qs, this.aYO)
	}, this.aYa = function(aH, aJ) {
		eF.setTransform(1, 0, 0, 1, aH + .34 * this.aV, aJ + 2 * aYP + this.aYQ), bQ.bR.textAlign(eF, 2);
		for (var a73 = this.au - 4 * aYP - this.a5M - this.aYQ, cK = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aL = 9; 0 <= aL; aL--) eF.fillText(bQ.be.cq(hD.a8d[cK[aL]], 0, .31 * this.aV), 0, aL * a73 / 9);
		var hm = hD.hE;
		for (eF.setTransform(1, 0, 0, 1, aH + .39 * this.aV, aJ + 2 * aYP + this.aYQ), bQ.bR.textAlign(eF, 0), eF.fillText(bQ.cL.dw(100 * hm[0] / (1024 * Math.max(hm[1], 1)), 1), 0, 0), aL = 8; 1 <= aL; aL--) eF.fillText(hm[cK[aL]].toString(), 0,
			aL * a73 / 9);
		eF.fillText(bQ.cL.dw(100 * (1 - cT.cj[j.k] / hm[7]), 0), 0, a73)
	}, this.aYb = function(aH, aJ) {
		eF.setTransform(1, 0, 0, 1, aH + .79 * this.aV, aJ + 2 * aYP + this.aYQ), bQ.bR.textAlign(eF, 2);
		var aL, a73 = this.au - 4 * aYP - this.a5M - this.aYQ;
		for (eF.fillStyle = bJ.aYd, aL = 2; 0 <= aL; aL--) eF.fillText(bQ.be.cq(hD.a8d[aL + 8], 0, .31 * this.aV), 0, aL * a73 / 9);
		eF.fillText(bQ.be.cq(hD.a8d[18], 0, .31 * this.aV), 0, 3 * a73 / 9), eF.fillStyle = bJ.aYe, eF.fillText(bQ.be.cq(hD.a8d[11], 0, .31 * this.aV), 0, 4 * a73 / 9), eF.fillStyle = bJ.tP, eF.fillText(bQ.be.cq(hD.a8d[13], 0, .31 * this.aV), 0,
				5 * a73 / 9), eF.fillText(bQ.be.cq(hD.a8d[15], 0, .31 * this.aV), 0, 6 * a73 / 9), eF.fillText(bQ.be.cq(hD.a8d[16], 0, .31 * this.aV), 0, 7 * a73 / 9), eF.fillText(bQ.be.cq(hD.a8d[12], 0, .31 * this.aV), 0, 8 * a73 / 9), eF
			.fillStyle = bJ.tO, eF.fillText(bQ.be.cq(hD.a8d[17], 0, .31 * this.aV), 0, a73), eF.fillStyle = bJ.aYd;
		var hm = hD.hE,
			wb = hm[8] + hm[9] + hm[10] + hm[18],
			wb = bQ.cL.cs(wb),
			aOv = eF.measureText(wb).width,
			aH = (eF.setTransform(1, 0, 0, 1, aH + .83 * this.aV + aOv, aJ + 2 * aYP + this.aYQ), eF.fillText(bQ.cL.cs(hm[8]), 0, 0), eF.fillText(bQ.cL.cs(hm[9]), 0, a73 / 9), eF.fillText(bQ.cL.cs(hm[10]), 0, 2 * a73 / 9), eF.fillText(bQ.cL.cs(
				hm[18]), 0, 3 * a73 / 9), eF.fillStyle = bJ.aYe, eF.fillText(wb, 0, 4 * a73 / 9), eF.fillStyle = bJ.tP, eF.fillText(bQ.cL.cs(hm[13]), 0, 5 * a73 / 9), eF.fillText(bQ.cL.cs(hm[15]), 0, 6 * a73 / 9), eF.fillText(bQ.cL.cs(hm[
				16]), 0, 7 * a73 / 9), eF.fillText(bQ.cL.cs(hm[12]), 0, 8 * a73 / 9), hm[12] + hm[13] + hm[15] + hm[16]);
		eF.fillStyle = bJ.tO, eF.fillText(bQ.cL.cs(aH), 0, a73), eF.fillStyle = bJ.bL
	}, this.a93 = function(cK, a33, zi) {
		var aL, l0, aQ;
		return this.aYT < 0 || 1 < this.aYT ? .25 : (aL = this.aYT * (hD.a8Z - 1), aQ = cK[l0 = Math.floor(aL)], aQ += (aL - l0) * (cK[l0 < hD.a8Z - 1 ? l0 + 1 : l0] - aQ), eF.strokeStyle = bJ.zy, .04 < this.aYT && this.aYg(0, this.aYO - a33 *
				Math.pow(aQ, zi), aL * this.aYN / (hD.a8Z - 1), this.aYO - a33 * Math.pow(aQ, zi)), .04 < aQ / hD.max[this.hy] && this.aYg(aL * this.aYN / (hD.a8Z - 1), this.aYO, aL * this.aYN / (hD.a8Z - 1), this.aYO - a33 * Math.pow(aQ,
				zi)), eF.fillStyle = bJ.aYh, eF.beginPath(), eF.arc(aL * this.aYN / (hD.a8Z - 1), this.aYO - a33 * Math.pow(aQ, zi), Math.max(2, .014 * this.au), 0, 2 * Math.PI), eF.fill(), cK = this.aYT * cH.aBx, cK = 0 === cT.iw[j.k] ? Math
			.floor(cK * hD.a8c) : Math.floor(cK * cH.e1()), eF.fillStyle = bJ.bL, eF.fillText(1 === zi ? bQ.cL.dw(aQ / 100, 2) : bQ.cL.cs(Math.floor(aQ)), -this.qs, this.aYO - a33 * Math.pow(aQ, zi)), bQ.bR.textAlign(eF, 1), eF.fillText(gZ
				.aJQ(cK), aL * this.aYN / (hD.a8Z - 1), this.aYO + this.aYR - (b4.b5.b6() ? 2 : 0) - this.aIN), bQ.bR.textAlign(eF, 2), a33 * Math.pow(aQ, zi) / this.aYO)
	}, this.aYg = function(c4, c5, fE, gx) {
		eF.beginPath(), eF.moveTo(c4, c5), eF.lineTo(fE, gx), eF.stroke()
	}
}

function aMB() {
	this.a0i = new aUp
}

function xB() {
	var bV;
	10 === v.dr ? bV =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === v.dr ? bV =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === v.dr ? bV =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === v.dr ? bV =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === v.dr ? bV =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === v.dr ? bV =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === v.dr ? bV =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === v.dr ? bV =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === v.dr ? bV =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === v.dr ? bV =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === v.dr ? bV =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === v.dr ? bV =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === v.dr && (bV =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new aJu).pB(bV)
}

function aYi() {
	var hy = 0,
		bU = cH.bU;
	this.nz = 0, this.e6 = function() {
		bN.e6(), j.bC ? a4i() : 0 === hy ? cH.bU >= bU && (bU += cH.aBx * Math.floor(1 + (cH.bU - bU) / cH.aBx), 2 === j.e5 || qZ.qa ? a4T() : (a4V(), j7.render()), hy++) : ((qZ.qa ? a4i : (cH.cI = !0, a4h))(), hy = 0), a4e(), cH.cI && (cH.cI = !
			1, aC0())
	}
}

function aYj() {
	this.aV1 = function(player, id) {
		for (var aYk = cT.a9e[player], aI = aYk.length, aL = 0; aL < aI; aL++)
			if (n.aAN(aYk[aL], id)) return !0;
		return !1
	}, this.aRR = function(player, c3) {
		for (var a7, aYl, e, aYk = cT.a9e[player], aI = aYk.length, aV = v.w, aYn = n.r(c3), aYo = n.t(c3), aRY = -1, min = v.w * v.w + v.y * v.y, id = f.d4(n.yc(c3)), aL = 0; aL < aI; aL++)(aYl = (aYl = aYn - (a7 = (e = aYk[aL]) >> 2) % aV) *
			aYl + (aYl = aYo - ~~((.5 + a7) / aV)) * aYl) < min && n.aAN(e, id) && (min = aYl, aRY = a7);
		return aRY
	}, this.aRT = function(a5, a7) {
		for (var id = f.d4(n.yc(a7)), aAO = n.aAL, e = n.yc(a5), aYp = -1, aL = 0; aL < 4; aL++) {
			var al = e + aAO[aL];
			f.kV(al) && f.d4(al) === id && (-1 === aYp || n.aG(n.aAa(al), a7) < n.aG(aYp, a7)) && (aYp = n.aAa(al))
		}
		return aYp
	}, this.a0t = function(player, c3) {
		for (var aAO = n.aAL, e = n.yc(c3), aL = 0; aL < 4; aL++) {
			var al = e + aAO[aL];
			if (f.nW(al) && f.a9p(player, al)) return !0
		}
		return !1
	}, this.a0u = function(player, c3) {
		for (var aAO = n.aAL, e = n.yc(c3), aL = 0; aL < 4; aL++) {
			var al = e + aAO[aL];
			if (f.cn(al)) return !0;
			if (f.nW(al)) {
				al = f.co(al);
				if (player !== al && nc.nd(player, al)) return !0
			}
		}
		return !1
	}, this.aTK = function(c3) {
		for (var aAO = n.aAL, e = n.yc(c3), aL = 0; aL < 4; aL++) {
			var al = e + aAO[aL];
			if (f.nW(al)) {
				al = f.co(al);
				if (bQ.by.cZ(al)) return al
			}
		}
		return -1
	}, this.aV3 = function(e) {
		if (f.kV(e))
			for (var aAO = n.aAL, aL = 0; aL < 4; aL++)
				if (f.g(e + aAO[aL])) return !0;
		return !1
	}, this.sx = function(player, id) {
		for (var gC = player << 3, gD = gC + d8.d9.gT[player], gj = d8.d9.gj, tr = d8.d9.tr, aL = gC; aL < gD; aL++) {
			var ts = tr[aL];
			if (gj[ts] === id) return ts
		}
		return -1
	}, this.aXR = function(player) {
		return 0 === d8.d9.gT[player] ? -1 : d8.d9.tr[player << 3]
	}, this.aUH = function(hr, hs) {
		var aI = d8.d9.wr;
		if (aI < 1) return -1;
		for (var gt = d8.d9.gt, aEB = 80, aOp = -1, aL = 0; aL < aI; aL++) {
			var ao = n.aAR(hr, hs, gt[aL]);
			ao < aEB && (aEB = ao, aOp = aL)
		}
		return function(aL, hr, hs) {
			if (aL < 0) return;
			var aYw = d8.d9.gt[aL],
				aYx = n.aAU(aYw),
				aYw = n.aAW(aYw),
				aL = 20 * (.9 + .1 * Math.log10(d8.d9.dB[aL]));
			return aL = Math.max(aL, n.aAY(bQ.bR.gJ(.02, 1.7))), hu.aYz(n.aAT(hr), n.aAV(hs), aYx, aYw, aL)
		}(aOp, hr, hs) ? aOp : -1
	}, this.a42 = function(c9) {
		for (var aI = d8.d9.wr, gj = d8.d9.gj, aL = 0; aL < aI; aL++)
			if (gj[aL] === c9) return h1.h2[2] = aL, !0;
		return !1
	}, this.sS = function(player) {
		for (var gC = player << 3, gD = gC + d8.d9.gT[player], tr = d8.d9.tr, dB = d8.d9.dB, d2 = 0, aL = gC; aL < gD; aL++) d2 += dB[tr[aL]];
		return d2
	}, this.aYr = function(player, a4K) {
		a4K = d8.d9.a4A[a4K];
		return this.a0t(player, a4K[a4K.length - 1])
	}, this.aYs = function(a5, a7, ao, aYt) {
		var a37 = n.r(a5),
			a5 = n.t(a5),
			a39 = n.r(a7),
			a7 = n.t(a7),
			a39 = (ao = Math.max(ao, 1), a39 - a37),
			a7 = a7 - a5,
			gz = hu.hv(Math.abs(a39) * aYt, ao),
			aYt = hu.hv(Math.abs(a7) * aYt, ao);
		return n.yb(a37 + Math.sign(a39) * gz, a5 + Math.sign(a7) * aYt)
	}, this.a4D = function(a0p, c3) {
		for (var aI = a0p.length - 1, aH = n.r(c3), aJ = n.t(c3), aL = 0; aL < aI; aL++) {
			var a5 = a0p[aL],
				a7 = a0p[aL + 1],
				c4 = n.r(a5),
				a5 = n.t(a5),
				fE = n.r(a7),
				a7 = n.t(a7);
			if (!(aH !== c4 && aH !== fE && Math.sign(aH - c4) === Math.sign(aH - fE) || aJ !== a5 && aJ !== a7 && Math.sign(aJ - a5) === Math.sign(aJ - a7))) {
				if (c4 === fE || a5 === a7) return aL;
				if (Math.abs(aH - c4) === Math.abs(aJ - a5) && Math.abs(aH - fE) === Math.abs(aJ - a7)) return aL
			}
		}
		return -1
	}, this.gf = function() {
		for (var aZ0 = h9[0], dA = d8.d9.dA, wr = d8.d9.wr, cK = [], aL = 0; aL < wr; aL++) bQ.by.aMk(aZ0, dA[aL] >> 3) && cK.push(aL);
		return cK
	}, this.a0r = function(player, a0p) {
		for (var gC = player << 3, gD = gC + d8.d9.gT[player], tr = d8.d9.tr, a4A = d8.d9.a4A, e3 = a0p[0], bY = a0p[a0p.length - 1], aL = gC; aL < gD; aL++) {
			var aP = a4A[tr[aL]];
			if (aP[0] === e3 && aP[aP.length - 1] === bY) return !0
		}
		return !1
	}
}

function aFd() {
	this.size = 0, this.hy = 0, this.i9 = null, this.b3 = function(i9) {
		this.hy = 0, this.i9 = i9, this.size = i9.length
	}, this.kT = function(iF) {
		return this.b3(new Uint8Array(this.iH(iF))), this.i9
	}, this.iA = function() {
		this.i9 = null
	}, this.ty = function(size, fU) {
		for (var i9 = this.i9, iC = this.hy + size - 1, aL = this.hy; aL <= iC; aL++) i9[aL >> 3] |= (fU >> iC - aL & 1) << 7 - (7 & aL);
		this.hy += size, this.hy > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aBW = function(size, fU) {
		var c7 = size >> 1,
			a0 = 1 << c7;
		this.ty(size - c7, hu.hv(fU, a0)), this.ty(c7, fU % a0)
	}, this.aZ1 = function(size) {
		for (var i9 = this.i9, iC = this.hy + size, aL = this.hy; aL < iC; aL++) i9[aL >> 3] &= 255 ^ 128 >>> (7 & aL)
	}, this.iH = function(iF) {
		return iF + 7 >> 3
	}, this.aZ2 = function(cK, nb, iC, aZ3) {
		for (var aL = nb; aL < iC; aL++) this.ty(aZ3, cK[aL])
	}
}

function aMK() {
	var aJV = 0,
		aZ4 = 0,
		aZ5 = 0,
		aZ6 = 0,
		yS = -1;

	function aZ9(e) {
		if (yS === e) return !1;
		if (-1 === (yS = e)) aJV = 0, bp.eG(aJV, 0);
		else {
			if (f.nW(e)) return aZ5 = f.co(e), aB1 = cT.ct[aZ5] - cT.a3Q[aZ5], (4 !== aJV || aB1 !== aZ4) && (aJV = 4, aZ4 = aB1, bp.eG(aJV, aB1), !0);
			if (f.cn(e)) return 3 !== aJV && (aJV = 3, bp.eG(aJV, 0), !0);
			if (f.d3(e)) return 2 !== aJV && (aJV = 2, bp.eG(aJV, 0), !0);
			var aB1 = d8.ge.aUH(l3.yV, l3.yX);
			if (-1 === aB1) return 1 !== aJV && (aJV = 1, bp.eG(aJV, 0), !0);
			e = d8.d9.dB[aB1];
			if (aZ5 = d8.d9.gj[aB1], aZ6 = d8.d9.dA[aB1] >> 3, 5 === aJV && e === aZ4) return !1;
			aJV = 5, aZ4 = e, bp.eG(aJV, e)
		}
		return !0
	}
	this.b3 = function() {
		aZ6 = aZ5 = aZ4 = aJV = 0, yS = -1
	}, this.e6 = function(e0) {
		var s;
		!e0 && l3.l4() || (e0 = n.yU(l3.yV), s = n.yW(l3.yX), n.yY(e0, s) ? (e0 = n.yb(e0, s), aZ9(n.yc(e0))) : aZ9(-1))
	}, this.a4c = function() {
		var aZA, aB1, aUG, aDu;
		if (0 !== aJV && 2 !== aJV)
			if (l3.l4()) {
				if (1 !== aJV && 3 !== aJV) {
					if (4 === aJV) return void(aB1 = cT.ct[aZ5] - cT.a3Q[aZ5], aZ4 === aB1 || (aZ4 = aB1, bp.eG(aJV, aB1)));
					(aUG = d8.ge.sx(aZ6, aZ5)) < 0 ? (aJV = 1, bp.eG(aJV, 0)) : (aDu = d8.d9.dB[aUG]) !== aZ4 && (aZ4 = aDu, bp.eG(aJV, aDu))
				}
			} else if (1 === aJV) - 1 !== (aUG = d8.ge.aUH(l3.yV, l3.yX)) && (aJV = 5, aZ4 = d8.d9.dB[aUG], bp.eG(aJV, aZ4));
		else if (3 === aJV) f.nW(yS) && (aJV = 4, aZA = f.co(yS), aZ4 = cT.ct[aZA] - cT.a3Q[aZA], bp.eG(aJV, aZ4));
		else if (4 === aJV) {
			if (f.nW(yS)) return void(aZA = f.co(yS), aB1 = cT.ct[aZA] - cT.a3Q[aZA], aZ4 === aB1 || (aZ4 = aB1, bp.eG(aJV, aB1)));
			aJV = 3, bp.eG(aJV, 0)
		} else - 1 === (aUG = d8.ge.aUH(l3.yV, l3.yX)) ? (aJV = 1, bp.eG(aJV, 0)) : (aDu = d8.d9.dB[aUG]) !== aZ4 && (aZ4 = aDu, bp.eG(aJV, aDu))
	}
}

function aNl() {
	this.L84 = ["This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Loading", "Back", "Contest", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player",
		"Richest Player", "Top Patreon", "Best Zombie Player", "Territorial Income", "Options", "Default", "Uniform", "Customized", "Ship launched!", "Ship intercepted!", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator",
		"Lead Moderator", "Head Admin", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "Adjust", "Colors", "Random", "Player Count", "My Color", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "Mixed", "Team dependent", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa",
		"Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "Security Tip",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "second played", "seconds played", "Activated",
		"🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "Account Recovery", "Email", "Request Email", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention",
		"Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "LEADERBOARD", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Interest Income", "Received Support",
		"Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed", "You are leaving Territorial.io!", "Refresh", "Public Profile",
		"🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ",
		"Gold Transfer", "Copy", "Search", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier",
		"Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified",
		"🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "🛠️ List Options", "Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Very Easy", "Easy", "Hard",
		"Very Hard", "Impossible", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "📰 Propaganda", "Links",
		"Propaganda Text", "Preview", "Launch Campaign", "Gold Investment", "Launch", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "1v1", "Zombie",
		"Chat", "Players", "Close {button}", "Ready", "Next Game", "📜 Game Log", "Propaganda", "Report Abuse", "You earned {10} gold!", "{0} earned {11} gold!", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.",
		"Timeframe", "More Options", "Y-Axis Compression", "Starting Resources", "Spawning", "Clustered", "Manual Spawn", "Clan Chart", "🛠️ Options", "Incoming Boat!", "Incoming Ship!", "Multiplayer", "Custom Scenario", "My Account",
		"Game Menu", "Your Kingdom's Name", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Type your message here...", "Lobby", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Team {0}", "Team {0} won the game!", "Quit Game", "More", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version",
		"🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "⚔️ Play", "Map", "Settings", "Game Mode", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"{0} defeated {1}!", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players",
		"Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Replay Error",
		"Warning", "Loading...", "Territory", "Numbers", "Statistics", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Procedural Map", "Realistic Map",
		"Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar",
		"Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack",
		"Call Peace Vote", "Intercept Ship At Mouse Pointer", "You are leaving Territorial.io.", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Choose Your Nation's Color!", "National Color", "Red: ",
		"Green: ", "Blue: ", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action."
	]
}

function aLy() {
	this.cW = 512, this.sY = 15e8, this.aNX = 1e9, this.aMx = 5e4, this.aW7 = 512, this.aVK = 2, this.k = 0, this.ck = 0, this.e4 = 0, this.aF1 = 0, this.rM = 0, this.aRC = 512, this.aZB = 512, this.aMn = 150, this.iv = !0, this.cp = 0, this.e5 = 0,
		this.w1 = 0, this.qV = !1, this.bC = 0, this.aU7 = 0, this.cu = !1, this.aQg = 0, this.aRK = 0, this.dy = 0, this.bG = 0, this.j6 = null, this.dN = new aKu, this.aBw = 30, this.aBj = 0, this.dK = 0, this.aNx = 0, this.lg = 0, this.data =
		new ry, this.vM = new a0A, this.aN5 = 0, this.a7M = "", this.aN4 = function() {
			ee.turnstile.close(), h1.b3(), rR.b3(), cJ.clear(), this.e4 = this.ck = this.data.humanCount, this.iv = 1 === this.e4 && !__fx.customLobby.isActive(), this.qV = !1, this.cp = this.data.isReplay, this.dy = 0 === this.data.gameMode ? [7,
					10, 8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.bG = this.data.isContest, this.cu = this.dy < 7 || 9 === this.dy, this.dy = 10 === this.dy && this.iv ? 7 : this.dy, this.dy = 8 === this
				.dy && 2 !== this.ck ? 7 : this.dy, a4Z.b3(), this.aQg = this.data.numberTeams, this.data.teamPlayerCount ? this.aRK = +(0 < this.data.teamPlayerCount[0]) : (this.aRK = 0, this.cu && this.iv && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.aQg + 1), j.vM.vN())), this.aBw = this.ck <= 2 ? 30 : this.ck <= 50 ? 40 : 50, this.aU7 = this.bC = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.j6 = this.bC ? new is : null, this.aRC = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.ck) : 1 === eh.kk ? this.aRC =
				this.ck : this.aRC = this.data.playerCount,
				this.aZB = this.aRC, this.aF1 = this.aRC - this.ck, this.rM = 0, this.k = this.data.selectedPlayer, this.aBj = 0, this.dK = 0, this.aNx = 0, this.lg = 0, gh.kS(this.data.spawningSeed), a0V.b3(), cT.b3(), a0U.b3(), aLm.aZC(), bx.aBv
				.wi = [], bx.i1.aLT = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), cw.b3(), this.e5 = 1, hD.b3(), aBI(), f.mW(), aZ.aQb(), j7.b3(), f.b3(), aLn.b3(), n
				.b3(), d8.b3(), gU.b3(), tc.aZD(), d0.b3(), aLm.kT(), it.b3(), aLk.b3(), eA.uB(), ib.b3(), li.b3(), j4.b3(), a8k.b3(), a57.putImageData(a58, 0, 0), a4Y.b3(), oI.b3(), bn.b3(), bq.b3(), bh.b3(), tu.b3(), gZ.b3(), qZ.b3(), bd.b3(), bp
				.b3(), a4a.b3(), i0.b3(), j1.b3(), nP.b3(), rK.b3(), aZE(), nN.b3(), cb.b3(), a4X.b3(), a4d.b3(), a4W.b3(), a4f.b3(), a4b.b3(), this.dN.b3(), cH.aZD(), c0.aXO(), 0 === cT.iw[j.k] && j1.show(!1, !0), cb.j3(!0), j0.b3(), cH.cI = !0,
				this.cp || this.iv && this.bC || b4.b5.setState(1), this.aN5 = 0
		}, this.aTk = function(kh) {
			ib.a0K.zF.length ? this.a7M = ib.a0K.zF : this.a7M = ib.a7N.zK(), __fx.replayHistory.save(this.a7M), !1 === __fx.customLobby.isActive() && el.d9.vG(), cJ.clear(), this.e5 = 0, cH.aZG(), b4.b5.setState(0), eg.setState(0), __fx.customLobby
				.isActive() || ee.aZH.show(kh), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.aN5 ? f1.d9.aPY(0) : 1 === this.aN5 ? f1.g9(19) : f1.g9(5, 5)
		}, this.a35 = function() {
			return this.cp ? qZ.qa || !bq.qO : this.iv && (qZ.qa || this.bC)
		}, this.a3g = function() {
			return 1 === this.e5 && !this.bC
		}
}

function gA(id, mF, aZI) {
	var uL, aKQ;

	function aZM() {
		aKQ.rG.innerHTML += "<br>" + L(504)
	}

	function aZO() {
		var c7 = 1;
		f1.g9(4, 1, new a4x(L(505), L(506), !1, [new g0("🔄 Reload", function() {
			c7 && (setTimeout(function() {
				f1.g9(1)
			}, 5e3), b4.b5.a4t()), c7 = 0
		}, bJ.bf)]))
	}

	function aZL() {
		iG.kT(90), iG.ty(30, Math.floor(hu.pow(30) * Math.random())), iG.ty(30, Math.floor(hu.pow(30) * Math.random())), iG.ty(30, Math.floor(hu.pow(30) * Math.random())), pD.b3(iG.i9), hk.mz.gE(110, __fx.passwordReset.getCustomPassword() || iU.iV
			.iW(iU.iV.iX(15))), el.a29.aBS()
	}
	this.aZJ = !0, this.aZK = id, this.show = function() {
		uL.show(), this.resize(), 15 === id ? (el.d9.ut(id) ? aZL : aZM)() : 16 === id ? el.d9.ut(id) ? el.v7.aEg(2) : aZM() : 17 === id ? el.d9.ut(id) ? el.v7.aEg(3) : aZM() : 18 === id ? (el.d9.close(0, 3253), el.d9.eo(0, id, 0), aZM()) :
			21 === id ? el.d9.ut(id) ? el.aZN.a5x(mF.gB, mF.gC, mF.gD) : aZM() : 22 === id ? el.d9.ut(id) ? el.aZN.a5y(mF.gB, mF.a5z, mF.a60) : aZM() : 23 === id ? el.d9.ut(id) ? el.aZN.a64(mF.a65, mF.js) : aZM() : 24 === id ? el.d9.ut(id) ? el
			.aZN.a67(mF.a65, mF.gC, mF.gD) : aZM() : 25 === id ? el.d9.ut(id) ? el.a29.aBV(mF) : aZM() : 28 === id ? el.d9.ut(id) ? el.aZN.a62(mF.gB, mF.a5z, mF.a60) : aZM() : 29 === id ? el.d9.ut(id) ? el.a29.a4O(mF) : aZM() : 30 === id && (el
				.d9.ut(id) ? uQ.aKX() || aZO() : aZM())
	}, this.aKY = function() {
		15 === id ? aZL() : 16 === id ? el.v7.aEg(2) : 17 === id ? el.v7.aEg(3) : 18 === id ? f1.g9(8, this.pe, new gA(16)) : 21 === id ? el.aZN.a5x(mF.gB, mF.gC, mF.gD) : 22 === id ? el.aZN.a5y(mF.gB, mF.a5z, mF.a60) : 23 === id ? el.aZN.a64(mF
			.a65, mF.js) : 24 === id ? el.aZN.a67(mF.a65, mF.gC, mF.gD) : 25 === id ? el.a29.aBV(mF) : 28 === id ? el.aZN.a62(mF.gB, mF.a5z, mF.a60) : 29 === id ? el.a29.a4O(mF) : 30 === id ? uQ.aKX() || aZO() : 1e3 === id && (this.aZK = id =
			25, el.a29.aBV(mF))
	}, this.aKZ = function(code, e0, data) {
		!e0 && code !== id || (15 === code || 16 === code ? f1.g9(7, this.pe) : 17 === code ? (el.d9.close(0, 3252), hk.d9.n4(0), hk.buffer.data[117].n3 && 0 < hk.buffer.data[117].n3.length ? (e0 = hk.d9.n5(0), hk.mz.gE(105, e0.jQ), hk.mz.gE(106,
			e0.password), f1.g9(8, this.pe, new gA(16))) : (hk.mz.gE(105, ""), f1.d9.aNv())) : 21 === code ? f1.g9(10, this.pe, new a7E(data)) : 23 === code ? f1.g9(13, this.pe, new aO9({
			data: data,
			a65: mF.a65
		})) : 25 === code ? (f1.d9.pp.jQ = mF.jQ, hk.xt.qS(mF.jQ), f1.g9(15, this.pe)) : 30 === code && (data ? f1.g9(1) : aZO()))
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), aKQ.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(502), [new g0("⬅️ " + L(61), function() {
		aZI ? f1.g9(29) : f1.d9.aNv()
	})]), aKQ = new rD(uL.oT, L(503))
}

function aM1() {
	var aZP, aPT, fH, fI, aZQ, aZR, aZS, aZT, aZU, aZV;

	function aZX() {
		var aRC = j.aRC;
		for (aZU = aRC; aZU < j.cW; aZU++) aZW();
		for (aZU = j.bC ? j.ck : 0; aZU < aRC; aZU++) {
			if (!aZa()) {
				for (var c7 = j.aZB = aZU; c7 < aRC; c7++) aZU = c7, aZW();
				return
			}
			aZb(aZR + aZP * aZQ + hu.hv(aZQ, 2), aZS + aPT * aZQ + hu.hv(aZQ, 2))
		}
	}

	function aZs(player) {
		for (var gu = cT.gu, gv = cT.gv, gw = cT.gw, gy = cT.gy, aJ = gv[player]; aJ <= gy[player]; aJ++)
			for (var aH = gu[player]; aH <= gw[player]; aH++) {
				var e = f.yr(aH, aJ);
				f.nW(e) && (f.nV(e) ? f.yu(e, player) : f.yv(e, player))
			}
	}

	function aZr(cK, gC, gD) {
		var bv = cK[gC];
		cK[gC] = cK[gD], cK[gD] = bv
	}

	function aZa() {
		return function() {
			var aL;
			for (aL = 0; aL < 8; aL++)
				if (aZP = hu.hv(fH * gh.random(), gh.value(100)), aPT = hu.hv(fI * gh.random(), gh.value(100)), aZx()) return 1;
			return
		}() || function() {
			var gz, h0, c2, eE, c7, a3U;
			for (gz = hu.hv(fH * gh.random(), gh.value(100)), h0 = hu.hv(fI * gh.random(), gh.value(100)), c2 = 40; 1 <= c2; c2--)
				for (eE = fI - c2; 0 <= eE; eE -= 40)
					for (aPT = (eE + h0) % fI, c7 = 40; 1 <= c7; c7--)
						for (a3U = fH - c7; 0 <= a3U; a3U -= 40)
							if (aZP = (a3U + gz) % fH, aZx()) return 1;
			return
		}()
	}

	function aZx() {
		for (var aP, aZz, gap = hu.hv(aZQ - aZT, 2), a4 = aZS + aPT * aZQ + gap, a3 = aZR + aZP * aZQ + gap, aZy = a4 + aZT - 1; a4 <= aZy; aZy--)
			for (aZz = a3 + aZT - 1; a3 <= aZz; aZz--)
				if (aP = f.yr(aZz, aZy), !f.g(aP) || f.nV(aP)) return;
		return 1
	}

	function aZb(a3U, eE) {
		aZW(), aa0(a3U - 2, eE - 2)
	}

	function aZW() {
		cT.iw[aZU] = 0, cT.cj[aZU] = cT.uH[aZU] = 0, cT.nG[aZU] = [], cT.nU[aZU] = [], cT.a9e[aZU] = [], cT.a9f[aZU] = [], cT.gu[aZU] = cT.gv[aZU] = cT.gw[aZU] = cT.gy[aZU] = 0
	}

	function aa0(a3U, eE) {
		var aP, aL, aa1, aa2;
		for (cT.iw[aZU] = 1, cT.gu[aZU] = a3U + 10, cT.gv[aZU] = eE + 10, cT.gy[aZU] = cT.gw[aZU] = 0, aa1 = a3U; aa1 < a3U + 4; aa1++)
			for (aa2 = eE; aa2 < eE + 4; aa2++)(a3U < aa1 && aa1 < a3U + 3 || eE < aa2 && aa2 < eE + 3) && (aP = f.yr(aa1, aa2), f.g(aP)) && (cT.gu[aZU] = Math.min(aa1, cT.gu[aZU]), cT.gw[aZU] = Math.max(aa1, cT.gw[aZU]), cT.gv[aZU] = Math.min(aa2,
				cT.gv[aZU]), cT.gy[aZU] = Math.max(aa2, cT.gy[aZU]), aZV[cT.cj[aZU]] = aP, cT.cj[aZU]++, f.yv(aP, aZU));
		for (cT.uH[aZU] = cT.cj[aZU], aL = cT.cj[aZU] - 1; 0 <= aL; aL--) f.aV4(aZV[aL], aZU) ? (f.yu(aZV[aL], aZU), cT.nU[aZU].push(aZV[aL])) : f.kX(aZV[aL]) ? (f.yu(aZV[aL], aZU), cT.a9e[aZU].push(aZV[aL])) : f.aa3(aZV[aL]) && (f.yu(aZV[aL], aZU),
			cT.a9f[aZU].push(aZV[aL]))
	}
	this.b3 = function() {
		if (aZV = new Array(12), aZT = 6, aZQ = 10, fH = hu.hv(v.w, aZQ), fI = hu.hv(v.y, aZQ), aZR = hu.hv(v.w - aZQ * fH, 2), aZS = hu.hv(v.y - aZQ * fI, 2), j.bC)
			for (var aL = 0; aL < j.ck; aL++) aZU = aL, aZW(), cT.iw[aZU] = 1;
		(0 === j.data.spawningType ? aZX : 1 === j.data.spawningType ? (aZX(), function() {
			var aRL = j.aQg;
			j.aRK || aRL++;
			if (!(aRL < 3)) {
				for (var data = j.data, nb = (j.bC ? j.ck : 0) + data.teamPlayerCount[0], iC = j.aZB, aZc = new Uint32Array(aRL), aZd = new Uint32Array(aRL), aZe = new Uint16Array(aRL), aZf = new Uint16Array(aRL), cz = cw.cz, gu = cT.gu,
						gv = cT.gv, gw = cT.gw, gy = cT.gy, aKm = h1.aKm, aKn = h1.aKn, aL = nb; aL < iC; aL++) aKm[aL] = gu[aL] + gw[aL] >> 1, aKn[aL] = gv[aL] + gy[aL] >> 1;
				for (aL = nb; aL < iC; aL++) {
					var id = cz[aL];
					aZc[id] += aKm[aL], aZd[id] += aKn[aL]
				}
				var cy = cw.cy;
				for (aL = 1; aL < aRL; aL++) {
					var aY = Math.max(data.teamPlayerCount[cy[aL]], 1);
					aZe[aL] = hu.hv(aZc[aL], aY), aZf[aL] = hu.hv(aZd[aL], aY)
				}
				var aQu = cw.aQu,
					aQv = cw.aQv,
					aQw = cw.aQw,
					ll = h1.ll;
				for (aL = 0; aL < 512; aL++) ll[aL] = aL;
				for (var db = 0; db < 2 + (4 <= aRL); db++)
					for (aL = nb; aL < iC; aL++) {
						for (var e3 = aL, a5T = ll[e3], aZg = 1, ao = hu.pP(aKm[a5T] - aZe[1], aKn[a5T] - aZf[1]), c2 = 2; c2 < aRL; c2++) {
							var tS = hu.pP(aKm[a5T] - aZe[c2], aKn[a5T] - aZf[c2]);
							tS < ao && (ao = tS, aZg = c2)
						}
						var aZh = cz[e3];
						if (aZg !== aZh) {
							if (2 === db && 4 <= aRL) {
								var aZi = Math.max((aZg + 1) % aRL, 1),
									aZj = hu.pP(aKm[a5T] - aZe[aZi], aKn[a5T] - aZf[aZi]);
								for (c2 = 1; c2 < aRL; c2++) tS = hu.pP(aKm[a5T] - aZe[c2], aKn[a5T] - aZf[c2]), ao < tS && tS < aZj && (aZj = tS, aZi = c2);
								aZi !== aZh && hu.pP(aZe[aZh] - aZe[aZi], aZf[aZh] - aZf[aZi]) < hu.pP(aZe[aZh] - aZe[aZg], aZf[aZh] - aZf[aZg]) && (aZg = aZi)
							}
							var aZk = cy[aZg],
								aZl = aQv[aZk] + (j.bC ? 0 : aQw[aZk]),
								bY = aQu[aZl],
								a5U = ll[bY],
								aZm = aQv[aZk + 1];
							ao = hu.pP(aKm[a5U] - aZe[aZh], aKn[a5U] - aZf[aZh]);
							for (var bB = aZl + 1; bB < aZm; bB++) {
								var aZn = aQu[bB],
									aZo = ll[aZn];
								(tS = hu.pP(aKm[aZo] - aZe[aZh], aKn[aZo] - aZf[aZh])) < ao && (ao = tS, bY = aZn)
							}
							bY < nb || iC <= bY || (a5U = ll[bY], aZc[aZh] += aKm[a5U] - aKm[a5T], aZd[aZh] += aKn[a5U] - aKn[a5T], aZc[aZg] += aKm[a5T] - aKm[a5U], aZd[aZg] += aKn[a5T] - aKn[a5U], aY = data.teamPlayerCount[cy[aZh]], aZe[
								aZh] = hu.hv(aZc[aZh], aY), aZf[aZh] = hu.hv(aZd[aZh], aY), aY = data.teamPlayerCount[aZk], aZe[aZg] = hu.hv(aZc[aZg], aY), aZf[aZg] = hu.hv(aZd[aZg], aY), ll[e3] = a5U, ll[bY] = a5T)
						}
					}! function() {
						for (var ll = h1.ll, gu = cT.gu, gv = cT.gv, gw = cT.gw, gy = cT.gy, cj = cT.cj, uH = cT.uH, nU = cT.nU, a9e = cT.a9e, a9f = cT.a9f, aL = 0; aL < 512; aL++) {
							var aZq = ll[aL];
							if (aZq !== aL) {
								aZr(gu, aL, aZq), aZr(gv, aL, aZq), aZr(gw, aL, aZq), aZr(gy, aL, aZq), aZr(cj, aL, aZq), aZr(uH, aL, aZq), aZr(nU, aL, aZq), aZr(a9e, aL, aZq), aZr(a9f, aL, aZq), aZs(aL), aZs(aZq), ll[aL] = aL;
								for (var au = aZq, mj = ll[au]; mj !== aL;) mj = ll[au = mj];
								ll[au] = aZq
							}
						}
					}()
			}
		}) : function() {
			var aRC = j.aRC;
			for (aZU = aRC; aZU < j.cW; aZU++) aZW();
			for (aZU = j.bC ? j.ck : 0; aZU < aRC; aZU++)
				if (! function() {
						var spawningData = j.data.spawningData,
							a3U = spawningData[2 * aZU] + 1,
							spawningData = spawningData[2 * aZU + 1] + 1;
						if (3 < a3U && a3U < v.w - 5 && 3 < spawningData && spawningData < v.y - 5 && f.g(f.yr(a3U, spawningData)) && function(a3U, eE) {
								var aP, aZz, aZy;
								for (aZy = eE; eE - 6 < aZy; aZy--)
									for (aZz = a3U; a3U - 6 < aZz; aZz--)
										if (aP = f.yr(aZz, aZy), f.nV(aP)) return;
								return 1
							}(a3U + 3, spawningData + 3)) return aZb(a3U + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aZa()) {
						for (var c7 = j.aZB = aZU; c7 < aRC; c7++) aZU = c7, aZW();
						return
					}
					var a3U = aZR + aZP * aZQ + hu.hv(aZQ, 2),
						eE = aZS + aPT * aZQ + hu.hv(aZQ, 2);
					aZb(a3U, eE)
				}
		})(), hD.hE[7] = cT.cj[j.k]
	}, this.iu = function(nR, aOh, aOg) {
		var aL, a3U, eE, aP, aZP, aPT;
		for (aZU = nR, aL = 0; aL < 20; aL++)
			for (a3U = aOh + aL; aOh - aL <= a3U; a3U--)
				for (eE = aOg + aL; aOg - aL <= eE; eE--)
					if ((a3U === aOh + aL || a3U === aOh - aL || eE === aOg + aL || eE === aOg - aL) && 3 < a3U && a3U < v.w - 5 && 3 < eE && eE < v.y - 5 && f.g(f.yr(a3U, eE)) && function(a3U, eE) {
							var aP, aZz, aZy;
							for (aZy = eE; eE - 6 < aZy; aZy--)
								for (aZz = a3U; a3U - 6 < aZz; aZz--)
									if (aP = f.yr(aZz, aZy), f.nV(aP) && !f.a9p(aZU, aP)) return;
							return 1
						}(a3U + 3, eE + 3)) {
						if (0 < cT.cj[aZU]) {
							for (aPT = aZP = aP = void 0, aZP = cT.gw[aZU]; aZP >= cT.gu[aZU]; aZP--)
								for (aPT = cT.gy[aZU]; aPT >= cT.gv[aZU]; aPT--) aP = 4 * (aPT * v.w + aZP), f.ys(aZU, aP) && (f.aWn(aP), cT.cj[aZU]--);
							aZW()
						}
						return aa0(a3U - 1, eE - 1), !0
					} return !1
	}, this.ix = function(nR) {
		aZU = nR, aZa() ? aZb(aZR + aZP * aZQ + hu.hv(aZQ, 2), aZS + aPT * aZQ + hu.hv(aZQ, 2)) : aZW()
	}
}

function aMM() {
	var aa6, aa7, aa8 = -15e3,
		aa9 = !1;

	function bt(l0) {
		aaN() || (aa9 = !0, aaO(l0, 1), el.d9.vA(el.d9.uj), aaP(Math.floor(bN.mk * l0.clientX), Math.floor(bN.mk * l0.clientY)))
	}

	function oA(l0) {
		aa8 = cH.bU, aaO(l0, 1), el.d9.vA(el.d9.uj), 0 < l0.touches.length && (aa6 = Math.floor(bN.mk * l0.touches[0].clientX), aa7 = Math.floor(bN.mk * l0.touches[0].clientY), aLo.oA(l0) || aaP(aa6, aa7))
	}

	function aaP(aH, aJ) {
		f1.bt(aH, aJ), 0 === j.e5 ? eg.bt(aH, aJ) : bq.qe(aH, aJ) || a8k.bt(aH, aJ) || j1.bt(aH, aJ) || i0.aU1(aH, aJ) || a4a.bt(aH, aJ) || 0 <= qZ.bt(aH, aJ) || bh.bt(aH, aJ) || l3.aaQ(aH, aJ) || i0.oL(aH, aJ)
	}

	function ez(l0) {
		aaN() || (aa9 = !0, aaO(l0, 1), aaR(Math.floor(bN.mk * l0.clientX), Math.floor(bN.mk * l0.clientY)))
	}

	function oC(l0) {
		aa8 = cH.bU, aaO(l0, 1), 0 < l0.touches.length && (aa6 = Math.floor(bN.mk * l0.touches[0].clientX), aa7 = Math.floor(bN.mk * l0.touches[0].clientY), aLo.oC(l0) || aaR(aa6, aa7))
	}

	function aaR(aH, aJ) {
		l3.l4() || (l3.yV = aH, l3.yX = aJ), f1.ez(aH, aJ), 0 === j.e5 ? eg.ez(aH, aJ) : (aLr.a8B(aH, aJ), a8k.ez(aH, aJ) || (qZ.ez(aH, aJ), i0.bi() ? i0.ez(aH, aJ) : bn.a8D ? bn.ez(aH) && (cH.cI = !0) : (a4Y.ez(aH, aJ), oI.aFo && oI.ez(aH, aJ) && (
			cH.cI = !0))))
	}

	function aaD(l0) {
		aaN() || (aaO(l0, 1), q8(), 0 === j.e5 ? (eg.click(-1024, -1024), zv.reset()) : (a4Y.zx(-1024, -1024), qZ.ez(-1024, -1024), bn.aPO(), oI.aFo = !1))
	}

	function aTj(l0) {
		aaN() || (aaO(l0, 1), aaS(Math.floor(bN.mk * l0.clientX), Math.floor(bN.mk * l0.clientY), 2 === l0.button), l3.aaC && (l3.aaC = !1, l0.preventDefault()))
	}

	function click(l0) {
		aaN() || aaO(l0, 1)
	}

	function aaE(l0) {
		aa8 = cH.bU, aaO(l0, 1), l0 && l0.touches && 0 < l0.touches.length && 0 !== j.e5 ? oI.aFo = !1 : aLo.oK() || (aaS(aa6, aa7, !1), l3.aaC && (l3.aaC = !1, l0.preventDefault()))
	}

	function aaF(l0) {
		aa8 = cH.bU, aaO(l0, 1), aaS(aa6, aa7, !1), l3.aaC && (l3.aaC = !1, l0.preventDefault())
	}

	function aaG(l0) {}

	function aaH(l0) {}

	function aaI(l0) {
		aaN() || aaO(l0, 0)
	}

	function aaS(aH, aJ, aU8) {
		q8(), 0 === j.e5 ? eg.click(aH, aJ) : (a4Y.zx(aH, aJ), a8k.zx(), bn.aPO(), oI.aFo = !1, i0.click(aH, aJ, aU8) ? cH.cI = !0 : qZ.aTj(aH, aJ))
	}

	function q8() {
		f1.q8()
	}

	function q9(l0) {
		var aH, aJ, deltaY;
		aaN() || (aaO(l0, 1), el.d9.vA(el.d9.uj), aH = Math.floor(bN.mk * l0.clientX), aJ = Math.floor(bN.mk * l0.clientY), deltaY = l0.deltaY, 1 === l0.deltaMode && (deltaY *= 16), f1.q9(aH, aJ, deltaY), 0 === j.e5 ? eg.q9(aH, aJ, deltaY) : a4Y.q9(
			aH, aJ, deltaY) || (bn.aHP(aH, aJ) ? bn.q9(deltaY) && (cH.cI = !0) : oI.q9(aH, aJ, deltaY)))
	}

	function aaJ(l0) {
		aaO(l0, 0)
	}

	function aaO(l0, id) {
		0 === id && f1.bi() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== eg.f3() && l0.preventDefault()
	}

	function aaK(l0) {
		if (__fx.keybindHandler(l0.key)) return;
		aaN() || 0 < bN.z4 || (l0 = l0.code) && l0.length && (uY.bB(l0, 18) ? pV.pQ(3) : uY.bB(l0, 22) ? pV.pQ(0) : uY.bB(l0, 20) ? pV.pQ(1) : uY.bB(l0, 24) ? pV.pQ(2) : uY.bB(l0, 10) ? bn.aPN(31 / 32) : uY.bB(l0, 8) ? bn.aPN(32 / 31) : uY.bB(l0,
			6) ? bn.aPN(7 / 8) : uY.bB(l0, 4) ? bn.aPN(8 / 7) : uY.bB(l0, 14) ? 0 !== j.e5 && oI.q9(Math.floor(bN.aV / 2), Math.floor(bN.au / 2), -200) : uY.bB(l0, 16) ? 0 !== j.e5 && oI.q9(Math.floor(bN.aV / 2), Math.floor(bN.au / 2), 200) : uY
			.bB(l0, 0) ? j.e5 && aLr.a8C(0) : uY.bB(l0, 2) ? j.e5 && aLr.a8C(1) : uY.bB(l0, 30) ? j.e5 && aLr.a8C(2) : uY.bB(l0, 26) ? j.e5 && aLr.a8Q() : uY.bB(l0, 28) && j.e5 && aLr.wF())
	}

	function aaL(l0) {
		if (!aaN() && !(0 < bN.z4 || cH.bU < 400)) {
			var code = l0.code;
			if (code && code.length && !("Enter" === code && f1.oq(1) || "Space" === code && f1.oq(0))) return jl.aBc ? jl.l1.oq(code) ? void 0 : void("Escape" === code && l3.aKN()) : void(8 !== eg.f3() && eg.oq(l0) ? cH.cI = !0 : "Escape" === code ?
				l3.aKN() : uY.bB(code, 18) ? pV.pS(3) : uY.bB(code, 22) ? pV.pS(0) : uY.bB(code, 20) ? pV.pS(1) : uY.bB(code, 24) ? pV.pS(2) : uY.bB(code, 12) ? bq.qT(!j.qV) : "Space" === code && j.e5 && (qZ.qa && qZ.qb(), j.cp) && bq.qX(!1))
		}
	}

	function aaM() {
		"hidden" !== document.visibilityState && (cH.cI = !0)
	}

	function aaN() {
		return aa8 + 15e3 > cH.bU
	}

	function resize() {
		bN.aH5()
	}
	this.aaA = 0, this.aaB = "", this.aaC = !1, this.yV = 0, this.yX = 0, this.b3 = function() {
		aGv.addEventListener("mousedown", bt, {
			passive: !1
		}), aGv.addEventListener("mousemove", ez, {
			passive: !1
		}), aGv.addEventListener("mouseup", aTj, {
			passive: !1
		}), aGv.addEventListener("click", click, {
			passive: !1
		}), aGv.addEventListener("mouseleave", aaD, {
			passive: !1
		}), aGv.addEventListener("wheel", q9, {
			passive: !1
		}), aGv.addEventListener("touchstart", oA, {
			passive: !1
		}), aGv.addEventListener("touchmove", oC, {
			passive: !1
		}), aGv.addEventListener("touchend", aaE, {
			passive: !1
		}), aGv.addEventListener("touchcancel", aaF, {
			passive: !1
		}), aGv.addEventListener("dragover", aaG), aGv.addEventListener("drop", aaH), aGv.addEventListener("dblclick", aaI), document.addEventListener("contextmenu", aaJ), document.addEventListener("keydown", aaK), document.addEventListener(
			"keyup", aaL), document.addEventListener("visibilitychange", aaM), window.addEventListener("resize", resize)
	}, this.aaQ = function(aH, aJ) {
		return !!bq.bt(aH, aJ) || !!(a4Y.bt(aH, aJ) || oI.bt(aH, aJ) || bn.bt(aH, aJ) || bp.bt(aH, aJ))
	}, this.a7D = aaN, this.l4 = function() {
		return !aa9 || 0 < aa8
	}, this.aKN = function() {
		if (!f1.bi()) return 8 === eg.f3() ? j.qV ? void bq.qT(!1) : a8k.bi ? void a8k.qb() : void qZ.qb() : void(7 !== eg.f3() && 6 === eg.f3() && en.ex());
		f1.oq(2)
	}
}

function aaU() {
	var aaV = [];
	this.b3 = function() {
		aaV = []
	}, this.a0w = function() {
		return 65536 === aaV.length
	}, this.a0v = function(aRS, aRN) {
		for (var a0q = aaV, aI = a0q.length, aL = 0; aL < aI; aL++) {
			var aP = a0q[aL];
			if (aP[0] === aRS && aP[aP.length - 1] === aRN) return aL
		}
		return -1
	}, this.a0y = function(a0p) {
		var aaW = new Uint32Array(a0p.length);
		return aaW.set(a0p), aaW.reverse()
	}, this.a4B = function(e3, bY) {
		var aY = e3.length - 1,
			aaX = new Uint32Array(aY + bY.length);
		return aaX.set(e3, 0), aaX.set(bY, aY), aaX
	}, this.a4H = function(e3, bY, n9, c3, aaY) {
		aaY && (n9 = (bY = this.a0y(bY)).length - n9 - 2);
		aaY = bY.subarray(n9 + 1 + (c3 === bY[n9 + 1])), c3 = new Uint32Array(e3.length + aaY.length);
		return c3.set(e3, 0), c3.set(aaY, e3.length), c3
	}, this.a0x = function(a0p) {
		return aaV.push(a0p), aaV.length - 1
	}, this.get = function(aL) {
		return aaV[aL]
	}, this.a0s = function() {
		return aaV
	}, this.aaa = function(aRS, aRN) {
		return null
	}
}

function aMP() {
	this.aZH = new kf, this.kj = new aUm, this.turnstile = new aLD, this.b3 = function() {
		b4.b5.a4v(), this.turnstile.b3()
	}, this.ki = function() {
		return hk.buffer.data[160].value
	}
}

function aEY() {
	var aab = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aOR = function(bU) {
		var aac, bV = new Date(bU.getTime() - 6e4 * bU.getTimezoneOffset()).toUTCString();
		return bV.length < 12 || (bV = bV.substring(5, bV.length), 0 === (bU = bU.getTimezoneOffset())) ? bV : (aac = (bU < 0 ? "+" : "-") + hu.hv(Math.abs(bU), 60), 0 == (bU = Math.abs(bU) % 60) ? bV + aac : bV + aac + ":" + (bU < 10 ? "0" :
			"") + bU)
	}, this.aOk = function(bU) {
		var bV = bU.toUTCString();
		return bV.length < 12 ? bV : function(bU) {
			return aab[bU.getUTCDay()]
		}(bU) + ", " + bV.substring(5, bV.length - 4)
	}
}

function aMH() {
	var aae, aaf, kV, aHh;
	this.b3 = function() {
		var aL, aH, aJ, vT, aag, aV, au, be, oz, cO, hm, aP, ao, c2, aaj;
		if (function() {
				if (kV = !0, aHh = "rgb(" + v.aU[0] + "," + v.aU[1] + "," + v.aU[2] + ")", v.xM(v.dr)) return 1;
				return kV = !1, 0
			}()) aaf = null;
		else {
			for (aae = hu.hv(96, 4), aag = 1 === v.dr ? (vT = 0, 160) : (vT = 128, 32), aHh = "rgb(" + vT + "," + vT + "," + vT + ")", aaf = new Array(4), aL = 3; 0 <= aL; aL--) {
				if (aaf[aL] = document.createElement("canvas"), aV = aL % 2 == 0 ? v.w : aae, au = aL % 2 == 0 ? aae : v.y + 2 * aae, aaf[aL].width = aV, aaf[aL].height = au, cO = (oz = (be = aaf[aL].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aV, au)).data, aL % 2 == 0)
					for (aJ = aae - 1; 0 <= aJ; aJ--)
						for (hm = aag + Math.floor((aJ + 1) * (vT - aag) / (aae + 1)), aH = aV - 1; 0 <= aH; aH--) cO[aP = 4 * ((0 === aL ? aae - aJ - 1 : aJ) * aV + aH)] = hm, cO[aP + 1] = hm, cO[aP + 2] = hm, cO[aP + 3] = 255;
				else {
					for (aH = aae - 1; 0 <= aH; aH--)
						for (hm = aag + Math.floor((aH + 1) * (vT - aag) / (aae + 1)), aJ = au - 1 - aae; aae <= aJ; aJ--) cO[aP = 4 * (aJ * aV + (3 === aL ? aae - aH - 1 : aH))] = hm, cO[aP + 1] = hm, cO[aP + 2] = hm, cO[aP + 3] = 255;
					for (c2 = 1; 0 <= c2; c2--)
						for (aH = aae - 1; 0 <= aH; aH--)
							for (aJ = aae - 1; 0 <= aJ; aJ--) ao = (Math.pow(aH * aH + aJ * aJ, .5) + 1) / (aae + 1), hm = aag + Math.floor((1 < ao ? 1 : ao) * (vT - aag)), cO[aP = 4 * ((0 === c2 ? aae - aJ - 1 : aJ + c2 * (au - aae)) * aV + (
								1 === aL ? aH : aae - aH - 1))] = hm, cO[aP + 1] = hm, cO[aP + 2] = hm, cO[aP + 3] = 255
				}
				be.putImageData(oz, 0, 0)
			}
			aaj = aag, v.kZ.fillStyle = "rgb(" + aaj + "," + aaj + "," + aaj + ")", v.kZ.fillRect(0, 0, v.w, 1), v.kZ.fillRect(0, v.y - 1, v.w, 1), v.kZ.fillRect(0, 0, 1, v.y), v.kZ.fillRect(v.w - 1, 0, 1, v.y)
		}
	}, this.aGi = function() {
		var c2 = kV ? 0 : -aae;
		aHV(c2, c2, v.w - 2 * c2, v.y - 2 * c2, a55.aWx, a55.aWy, a55.aWz, a55.aX0) || (eF.fillStyle = aHh, eF.fillRect(0, 0, bN.aV, bN.au))
	}, this.eD = function() {
		kV || (aHU(0, -aae, v.w, aae, a55.aWx, a55.aWy, a55.aWz, a55.aX0) && eF.drawImage(aaf[0], a55.aWv, a55.aWw - aae), aHU(v.w, -aae, aae, v.y + 2 * aae, a55.aWx, a55.aWy, a55.aWz, a55.aX0) && eF.drawImage(aaf[1], a55.aWv + v.w, a55.aWw -
			aae), aHU(0, v.y, v.w, aae, a55.aWx, a55.aWy, a55.aWz, a55.aX0) && eF.drawImage(aaf[2], a55.aWv, a55.aWw + v.y), aHU(-aae, -aae, aae, v.y + 2 * aae, a55.aWx, a55.aWy, a55.aWz, a55.aX0) && eF.drawImage(aaf[3], a55.aWv - aae,
			a55.aWw - aae))
	}
}

function aS5(aRf) {
	var lX = document.createElement("div"),
		aS0 = document.createElement("div");
	this.qS = function() {
			aS0.textContent = "", jl.l5.aXq && jl.l5.gG(1);
			for (var aJM = document.createDocumentFragment(), aak = jl.d9.aIp[0], jm = jl.jm.jk[aak], aJA = jl.jm.aJA[aak], aL = 0; aL < jm.length; aL++) ! function(aJM, cF, aam, aak) {
				var gI = document.createElement("span");
				gI.textContent = (aam ? "🟢 " : "⚪ ") + jl.ge.jc(cF, aak), gI.style.color = jl.ge.je(cF.jf), 11 === cF.jf && (gI.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				gI.style.cursor = "pointer", gI.style.margin = "0.2em 0.2em 0.2em 0.2em", gI.style.width = gI.style.maxWidth = 2 === aak ? "10em" : "9em", gI.style.height = gI.style.maxHeight = "1.4em", gI.style.whiteSpace = "nowrap", gI.style
					.overflow = "hidden", gI.style.textOverflow = "ellipsis", gI.style.font = "inherit", gI.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aam = __fx.utils.getDuplicateIpHighlightColor(cF, jl.jm.jk[aak],
						"aQ9")) && (gI.style.backgroundColor = aam, gI.style.borderRadius = "0.3em");
				__fx.settings.highlightSameClan && (aak = __fx.utils.getSameClanHighlightColor(cF, jl.jo, "username")) && (gI.style.backgroundColor ? gI.style.boxShadow = "inset 0 0 0 2px " + aak : gI.style.backgroundColor = aak, gI.style
					.borderRadius = "0.3em");
				jl.ge.jn(cF) && (gI.style.textDecoration = "underline"), cF.kz && (gI.style.textDecorationLine = "underline", gI.style.textDecorationStyle = "dotted");
				gI.onclick = function(l0) {
					aRf(l0, cF)
				}, l3.l4() || (gI.onmouseover = function(l0) {
					jl.l5.l6(l0.target, cF, 1)
				}), aJM.appendChild(gI)
			}(aJM, jm[aL], aL < aJA, aak);
			aS0.appendChild(aJM)
		}, this.show = function(rE) {
			rE.appendChild(lX)
		}, this.gG = function(rE) {
			f1.removeChild(rE, lX)
		}, this.resize = function() {
			aS0.style.fontSize = bQ.bR.fy(bQ.bR.lV(.02, .3))
		}, lX.style.top = "0", lX.style.left = "0", lX.style.width = lX.style.height = "100%", lX.style.overflowX = "hidden", lX.style.overflowY = "auto", lX.style.font = "inherit", aS0.style.font = "inherit", aS0.style.margin = "0.4em", lX
		.appendChild(aS0)
}

function aMG() {
	this.d9 = new uh, this.vB = new aJp, this.dD = new aYI, this.ep = new aC3, this.v7 = new aEZ, this.a29 = new aBN, this.aSg = new aan, this.aZN = new a5w, this.dE = new aPi, this.aPo = new aao, this.aPq = new aKR, this.aPr = new aap, this.aPu =
		new aaq, this.b3 = function() {
			this.d9.b3()
		}
}

function aMQ() {
	this.id = 0, this.xU = 0, this.a4m = null, this.a4n = null, this.aMe = null, this.a4o = null, this.b5 = new a4j, this.b3 = function() {
		var self, xU;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (xU = Android.getVersion()) < 12 || (self.xU = xU, self.id = 1, self.a4n = Android),
			function(self) {
				var xU;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aMe = mwIOSdataX, self.a4o = window.webkit.messageHandlers.iosCommandA, xU =
					self.aMe.version, self.xU = xU ? Number(xU) : 0)
			}(this),
			function(self) {
				var a4m;
				try {
					if (!(a4m = window.localStorage)) return;
					a4m.setItem("tls7", "1"), a4m.removeItem("tls7")
				} catch (error) {
					return
				}
				self.a4m = a4m
			}(this)
	}
}

function aLv() {
	this.hv = function(c2, c7) {
		return Math.floor((c2 + .5) / c7)
	}, this.aau = function(c2, c7) {
		return Math.floor(c2 * (c7 + .5))
	}, this.sqrt = function(hm) {
		return ~~Math.sqrt(hm + .5)
	}, this.pow = function(l0) {
		return Math.floor(Math.pow(2, l0) + .5)
	}, this.hz = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aav = function(aQ, ws, wt) {
		return Math.max(Math.min(aQ, ws), wt)
	}, this.aaw = function(aax, aay, aH, aJ) {
		aH -= aax, aax = aJ - aay, aJ = 0;
		return 0 == aH ? aJ = 0 <= aax ? Math.PI : 0 : (aJ = Math.atan(aax / aH), aJ += 0 < aH ? .5 * Math.PI : 1.5 * Math.PI), aJ
	}, this.log2 = function(hm) {
		return Math.floor(!!hm * (1 + Math.log2(hm + .5)))
	}, this.log10 = function(hm) {
		return Math.floor(Math.log10(hm + .5))
	}, this.aYz = function(aHq, aHr, ab0, ab1, ab2) {
		return ab0 - ab2 < aHq && aHq < ab0 + ab2 && ab1 - ab2 < aHr && aHr < ab1 + ab2
	}, this.pP = function(aE1, aE2) {
		return aE1 * aE1 + aE2 * aE2
	}
}

function aMD() {
	var ab3, ab4, ab5;
	this.b3 = function() {
		ab3 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), ab4 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), ab5 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var dm = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJ5 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aL = ab3.length - 1; 0 <= aL; aL--)
			for (var c2 = dm.length - 1; 0 <= c2; c2--) ab3[aL] = ab3[aL].replace(dm[c2], aJ5[c2]);
		if (__fx.settings.realisticNames) ab3 = realisticNames;
	}, this.aZC = function() {
		var aI = j.ck,
			cU = cT.cU,
			cr = cT.cr,
			playerNamesData = j.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < aI)
			for (var aL = 0; aL < aI; aL++) cU[aL] = cr[aL] = "Player " + gh.gi(1e3);
		else
			for (aL = 0; aL < aI; aL++) cU[aL] = cr[aL] = __fx.nameFilter.filter(playerNamesData[aL])
	}, this.kT = function() {
		if (9 === j.dy) {
			for (var db = gh.random(), abB = ab5, abC = ab4, d2 = d0.d2, aI = abB.length, d7 = j.data.teamPlayerCount[7], cU = cT.cU, cr = cT.cr, aL = d7 - 1; aL >= j.ck; aL--) cU[aL] = cr[aL] = abB[(aL + db) % aI];
			for (aI = abC.length - 1, aL = d7; aL < j.cW; aL++) cU[aL] = cr[aL] = abC[d2[aL] ? aI : aL % aI]
		} else(2 === j.data.playerNamesType ? function() {
			for (var aI = j.cW, cU = cT.cU, cr = cT.cr, playerNamesData = j.data.playerNamesData, aL = j.ck; aL < aI; aL++) cU[aL] = cr[aL] = __fx.nameFilter.filter(playerNamesData[aL])
		} : 1 === j.data.playerNamesType ? function() {
			for (var cU = cT.cU, cr = cT.cr, aL = j.ck; aL < j.cW; aL++) cU[aL] = cr[aL] = "Bot " + gh.gi(1e3)
		} : function() {
			for (var abD = ab3, aI = abD.length, db = gh.random(), cU = cT.cU, cr = cT.cr, aL = j.ck; aL < j.cW; aL++) cU[aL] = cr[aL] = abD[(aL + db) % aI]
		})()
	}
}

function aao() {
	function abG() {
		var id = pD.iB(3);
		return 0 === id ? {
			id: id,
			jQ: pD.iB(30),
			cC: jl.a5m.we(iP.yD.pB(7))
		} : 1 === id ? {
			id: id,
			jQ: pD.iB(30),
			jS: pD.iB(3),
			value: pD.iB(30),
			target: pD.iB(30)
		} : 2 === id ? {
			id: id,
			jQ: pD.iB(30),
			jS: pD.iB(3)
		} : 3 === id ? {
			id: id,
			jQ: pD.iB(30),
			jS: pD.iB(3),
			value: pD.iB(4),
			target: pD.iB(30)
		} : 4 === id ? {
			id: id,
			jQ: pD.iB(30),
			jS: pD.iB(3),
			target: pD.iB(30)
		} : 5 === id ? {
			id: id,
			jS: pD.iB(6)
		} : 6 === id ? {
			id: id,
			value: pD.iB(17)
		} : null
	}
	this.aPp = function(es) {
		if (es !== el.d9.uk) el.d9.close(es, 3239);
		else if (6 !== eg.f3()) el.d9.close(es, 3271);
		else {
			jl.b3();
			for (var aL = 0; aL < 4; aL++) {
				var aGa = jl.d9.jy[aL],
					playerCount = (aGa.fA = pD.iB(10), aGa.dr = pD.iB(6), aGa.mapSeed = pD.iB(14), aGa.aDL = pD.iB(4), aGa.aDM = pD.iB(6), aGa.aDN = pD.iB(14), aGa.aDO = pD.iB(4), aGa.aDP = pD.iB(1), aGa.aDQ = pD.iB(12), aGa.spawningSeed = pD.iB(
						14), pD.iB(16));
				jl.jm.aJA[aL] = pD.iB(16);
				for (var c2 = 0; c2 < playerCount; c2++) jl.jm.rJ(aL, pD.iB(30), iP.yD.pB(5), pD.iB(4), pD.iB(30), pD.iB(7), pD.iB(16), pD.iB(18), pD.iB(11), pD.iB(12), pD.iB(6))
			}
			f1.g9(29), jl.d9.abE(!0)
		}
	}, this.aPx = function(es) {
		if (es !== el.d9.uk) el.d9.close(es, 3239);
		else if (jl.aBc) {
			jl.d9.aJE[0] = pD.iB(20), jl.d9.aJE[1] = pD.iB(20);
			for (var abF = pD.iB(16), c2 = 0; c2 < abF; c2++) {
				var id = pD.iB(3);
				0 === id ? jl.jm.rJ(pD.iB(2), pD.iB(30), iP.yD.pB(5), 0, 1234566, 127, 0, pD.iB(18), 0, pD.iB(12), 0) : 1 === id ? jl.jm.aQK(pD.iB(16), pD.iB(2)) : 2 === id ? jl.jm.aQG(pD.iB(16), pD.iB(2), pD.iB(2)) : 3 === id ? jl.jm.aQJ(pD.iB(
					16), pD.iB(2)) : 4 === id ? jl.jm.aQB(pD.iB(16), pD.iB(2), pD.iB(4), pD.iB(30), pD.iB(7), pD.iB(16), pD.iB(11), pD.iB(18)) : 5 === id ? jl.jm.aQD(pD.iB(16), pD.iB(2), pD.iB(1)) : 6 === id && jl.jm.aQC(pD.iB(16), pD.iB(2),
					pD.iB(6))
			}
			for (var aL = 0; aL < 4; aL++) {
				var aGa = jl.d9.jy[aL];
				if (aGa.fA = pD.iB(10), aGa.aDM = pD.iB(6), aGa.aDN = pD.iB(14), aGa.aDO = pD.iB(4), 0 === aGa.fA) {
					if (aGa.uj = pD.iB(10), aGa.aDR = pD.iB(10), jl.aBa.uK(aL)) return;
					aGa.dr = pD.iB(6), aGa.mapSeed = pD.iB(14), aGa.aDL = pD.iB(4), aGa.aDP = pD.iB(1), aGa.aDQ = pD.iB(12), aGa.spawningSeed = pD.iB(14), aGa.aDU.push(aGa.aDU[0]), aGa.aDU.shift()
				}
			}
			jl.d9.aKK()
		} else el.d9.close(es, 3251)
	}, this.aPy = function(es) {
		if (es !== el.d9.uk) el.d9.close(es, 3272);
		else if (jl.aBc) {
			for (var jd = pD.iB(4), aGa = jl.d9.jy[jd], k0 = aGa.k0, lU = (aGa.aDS = pD.iB(20), pD.iB(6)), aL = 0; aL < lU; aL++) {
				var lH = abG();
				jl.hb.lG(lH), k0.push(lH)
			}
			jl.d9.abH(jd)
		} else el.d9.close(es, 3273)
	}, this.aPz = function(es) {
		es !== el.d9.uk ? el.d9.close(es, 3276) : jl.aBc ? jl.message.lt(abG()) : el.d9.close(es, 3277)
	}
}

function fb() {
	var abI = new Uint16Array(j.cW);

	function abQ(player, abO) {
		for (var aI = h1.lk[0], aKl = h1.aKl, aTJ = -1, aGs = j.cW, aL = 0; aL < aI; aL++) {
			var ao, aP = aKl[aL];
			nc.nd(player, aP) && (ao = n.aG(abO, n.aAi(aP)), -1 === aTJ || ao < aTJ) && (aTJ = ao, aGs = aP)
		}
		return aGs
	}

	function abS(abP, abO) {
		if (abP === j.cW) return 0;
		var a9e = cT.a9e[abP],
			d7 = a9e.length;
		if (0 === d7) return 0;
		for (var aI = Math.min(d7, 10), aGs = 0, aTJ = n.aG(a9e[aGs] >> 2, abO), aL = 0; aL < aI; aL++) {
			var i3 = gh.gi(d7),
				ao = n.aG(a9e[i3] >> 2, abO);
			ao < aTJ && (aTJ = ao, aGs = i3)
		}
		return a9e[aGs] >> 2
	}

	function abT(player, abO, nR, abW) {
		var abX;
		(abW === j.cW || (abX = n.aAi(nR), abW = n.aAi(abW), n.aG(abO, abX) < n.aG(abO, abW))) && (abI[player] = nR)
	}
	this.b3 = function() {
		abI.fill(j.cW)
	}, this.fn = function() {
		if (cH.e1() % 109 == 9 && !(eA.eB < 20) && j.cu && !(li.w0() < hu.hv(8 * j.w1, 10))) {
			var p6 = li.p7();
			if (cw.cy[p6]) {
				li.abJ(p6);
				var aI = h1.lk[0];
				if (0 !== aI)
					for (var cK = h1.ll, eC = eA.eC, eB = eA.eB, abK = abI, i3 = gh.gi(aI), aL = 0; aL < eB; aL++) {
						var e3 = eC[aL],
							bY = cK[i3];
						bQ.by.aMk(e3, bY) && 512 === abK[e3] && (abK[e3] = bY, i3 = (i3 + 1) % aI)
					}
			}
		}
	}, this.e6 = function(player) {
		var abO, abR, abP, abL = function(player) {
			var nR = abI[player];
			if (nR !== j.cW) {
				if (bQ.by.hC(nR) && cT.a9e[nR]) return nR;
				abI[player] = j.cW
			}
			return j.cW
		}(player);
		return function(player) {
			for (var uF = eA.eC, d7 = eA.eB, aI = Math.min(d7, d7 < 17 && 5 === gh.gi(20) ? 1 : 16), mj = gh.gi(d7), aKl = h1.aKl, a9e = cT.a9e, aY = 0, aL = 0; aL < aI; aL++) {
				var aP = uF[(aL + mj) % d7];
				aP !== player && a9e[aP].length && (aKl[aY++] = aP)
			}
			h1.lk[0] = aY
		}(player), 0 !== h1.lk[0] && (0 < (abR = abS(abP = abQ(player, abO = n.aAj(player)), abO)) && d8.a0Z.aGq(player, d8.ge.aRT(abR, abO)) ? (abT(player, abO, abP, abL), !0) : 0 < (abP = function(player, abO) {
			for (var aI = h1.lk[0], aKl = h1.aKl, abK = abI, mj = 0, aL = 0; aL < aI; aL++) {
				var aP = aKl[aL],
					aP = abK[aP];
				aP !== j.cW && bQ.by.hC(aP) && player !== aP && nc.nd(player, aP) && (aKl[mj++] = aP)
			}
			return 0 !== (h1.lk[0] = mj) ? abS(abQ(player, abO), abO) : 0
		}(player, abO)) && d8.a0Z.aGq(player, d8.ge.aRT(abP, abO)) ? (abT(player, abO, f.co(abP << 2), abL), !0) : !!(0 < (abR = abS(abL, abO)) && d8.a0Z.aGq(player, d8.ge.aRT(abR, abO))))
	}
}

function aMN() {
	this.aEC = new aUa, this.aGn = new aHW, this.d9 = new aDW, this.kE = new aNz, this.aaj = new aTH, this.a44 = new aOz, this.aAs = new gQ, this.a0Z = new aRM, this.aRU = new aUW, this.abZ = new aEI, this.gR = new aba, this.a8N = new aUy, this.a0q =
		new aaU, this.ge = new aYj, this.gn = new abb, this.gk = new a3x, this.a0d = new sw, this.b3 = function() {
			this.a0q.b3(), this.aGn.b3(), this.d9.b3(), this.kE.b3(), this.aaj.b3(), this.abZ.b3(), this.gk.b3()
		}, this.eD = function() {
			this.abZ.eD(), this.aGn.eD()
		}
}

function pu() {
	var oN, oO, abc, ob;

	function oR() {
		aLq.iA(), f1.oW()[19] = null, f1.oX()
	}

	function abj() {
		abm(), abk()
	}

	function abm() {
		abc.kp.lastChild && f1.removeChild(abc.kp, abc.kp.lastChild)
	}

	function abk() {
		var abn = v.xO(j.data);
		j.data.canvas = v.xG(abn, j.data.mapSeed).x5, abl()
	}

	function abl() {
		var cE = j.data.canvas;
		cE.style.width = "100%", abc.kp.appendChild(cE)
	}
	this.aSO = function(cE) {
		j.data.canvas && abm(), j.data.canvas = cE, abl()
	}, this.show = function() {
		oN.show(), this.resize()
	}, this.gG = function() {
		oN.gG()
	}, this.resize = function() {
		oN.resize(), oO.resize()
	}, this.oq = function(bB) {
		2 === bB && oN.or[0].os()
	}, oN = new oQ(L(455), [new g0("⬅️ " + L(61), oR)]), 2 === j.data.mapType && aLq.b3(), oO = new oS(oN.oT, (function(ob) {
		var og = new oh;
		og.oi(L(72)), og.oj(new ok({
			n3: [L(507), L(508), L(509)],
			value: j.data.mapType
		}, function(hy) {
			2 === (j.data.mapType = hy) ? (aLq.b3(), j.data.canvas = null) : (j.data.passableWater = j.data.passableMountains = 1, aLq.iA()), f1.g9(20)
		})), 2 <= j.data.mapType && (og.ol(new aCW), og.ol(new uV({
			value: j.data.passableWater
		}, L(510), function(value) {
			j.data.passableWater = value
		})), og.ol(new uV({
			value: j.data.passableMountains
		}, L(511), function(value) {
			j.data.passableMountains = value
		})));
		ob.push(og)
	}(ob = []), function(ob) {
		if (0 === j.data.mapType) {
			for (var og = new oh, n3 = (og.oi(L(455)), []), aL = 0; aL < v.dp.xc.length; aL++) n3.push(v.dp.dq[v.dp.xc[aL]].name);
			og.oj(new ok({
				n3: n3,
				value: j.data.mapProceduralIndex
			}, function(hy) {
				j.data.mapProceduralIndex = hy, abj()
			})), ob.push(og)
		}
	}(ob), function(ob) {
		if (1 === j.data.mapType) {
			for (var og = new oh, n3 = (og.oi(L(455)), []), aL = 0; aL < v.dp.xd.length; aL++) n3.push(v.dp.dq[v.dp.xd[aL]].name);
			og.oj(new ok({
				n3: n3,
				value: j.data.mapRealisticIndex
			}, function(hy) {
				j.data.mapRealisticIndex = hy, abj()
			})), ob.push(og)
		}
	}(ob), function(ob) {
		var og;
		2 === j.data.mapType && ((og = new oh).oi(L(512)), og.ol(new om(hk.buffer.data[162], 1)), og.oi(L(513), "0.8em"), og.ol(new uX([new g0(L(514), function() {
			return aLq.aSK(), !0
		}).button])), ob.push(og))
	}(ob), function(ob) {
		var og, uc;
		2 === j.data.mapType && ((og = new oh).oi(L(515)), uc = new om({
			hy: -1,
			value: j.data.mapName
		}, 0, 0, function(l0) {
			j.data.mapName = l0.target.value = l0.target.value.slice(0, 20)
		}), og.ol(uc), ob.push(og))
	}(ob), function(ob) {
		var og, uc, aCV;
		0 === j.data.mapType && ((og = new oh).oi("Seed"), uc = new om({
			hy: -1,
			value: j.data.mapSeed
		}, 1, 0, function(l0) {
			l0 = Math.abs(Math.floor(l0.target.value)) % 16384;
			j.data.mapSeed !== l0 && (j.data.mapSeed = l0, abj())
		}), aCV = new g0(L(119), function(l0) {
			var kQ = Math.floor(16384 * Math.random());
			if (j.data.mapSeed !== kQ) return uc.l0.value = j.data.mapSeed = kQ, abj(), !0
		}), og.ol(uc), og.ol(new uX([aCV.button])), ob.push(og))
	}(ob), function(ob) {
		(abc = new oh).oi(L(368)), 2 !== j.data.mapType ? abk() : j.data.canvas && abl();
		ob.push(abc)
	}(ob), ob))
}

function aMX() {
	this.aBm = null, this.cI = !1, this.bU = 0, this.aBx = 56;
	var abo = 0;

	function abp() {
		cH.bU = abo = performance.now(), cH.aBm.e6(), window.requestAnimationFrame(abp)
	}
	this.b3 = function() {
		this.aZG(), window.requestAnimationFrame(abp), this.bU = performance.now()
	}, this.aZD = function() {
		j.cp ? (this.aBm = new abq, this.aBm.b3()) : j.iv ? this.aBm = new aYi : (this.aBm = new aBo, this.aBm.b3())
	}, this.aZG = function() {
		this.aBm = new ny, this.cI = !0
	}, this.e6 = function() {
		this.aBm.nz++
	}, this.e1 = function() {
		return this.aBm.nz
	}, this.aPl = function() {
		var bv = performance.now();
		bv < abo + 1e3 || (this.bU = bv, this.aBm.e6())
	}
}

function aaq() {
	this.aPv = function() {
		var aL;
		if (pD.size < iG.iH(23)) el.d9.vE(0, 3259);
		else {
			var gB = pD.iB(6),
				aI = pD.iB(10),
				data = [];
			if (9 === gB || 10 === gB || 11 === gB || 13 === gB) {
				for (aL = 0; aL < aI; aL++) data.push([pD.iB(30), iP.yD.pB(5), pD.iD(32), 0, pD.iB(30)]);
				8 === f1.mQ && f1.mR().aKZ(21, !0, {
					gB: gB,
					data: data
				})
			} else if (12 === gB) {
				for (aL = 0; aL < aI; aL++) data.push([pD.iB(20), pD.iB(30), pD.iB(30), pD.iD(32), pD.iB(30), iP.yD.pB(5), iP.yD.pB(5)]);
				8 === f1.mQ && f1.mR().aKZ(21, !0, {
					gB: gB,
					data: data
				})
			} else {
				var a59 = pD.iB(16);
				if (pD.iE(39 + 16 * a59 + aI * (0 === gB ? 111 : 1 === gB ? 101 : 2 === gB || 3 === gB ? 127 : 212))) {
					if (0 === gB)
						for (aL = 0; aL < aI; aL++) data.push([pD.iB(30), iP.iQ.iR(pD.iB(5)), pD.iB(16), pD.iB(30), pD.iB(30)]);
					else if (1 === gB)
						for (aL = 0; aL < aI; aL++) data.push([pD.iB(16), iP.iQ.iR(pD.iB(3)), pD.iB(16), iP.iQ.iR(pD.iB(5)), pD.iB(31), pD.iB(30)]);
					else if (2 === gB || 3 === gB)
						for (aL = 0; aL < aI; aL++) data.push([pD.iB(30), iP.iQ.iR(pD.iB(5)), pD.iD(32), pD.iB(30), pD.iB(30)]);
					else
						for (aL = 0; aL < aI; aL++) data.push([pD.iB(20), pD.iB(30), pD.iB(30), pD.iB(30), pD.iB(30), pD.iD(32), pD.iB(30), iP.iQ.iR(pD.iB(5)), iP.iQ.iR(pD.iB(5))]);
					8 === f1.mQ && f1.mR().aKZ(21, !0, {
						gB: gB,
						data: data
					})
				} else el.d9.vE(0, 3260)
			}
		}
	}, this.aPw = function() {
		if (pD.size < iG.iH(29)) el.d9.vE(0, 3265);
		else {
			var abr = pD.iB(4),
				abt = pD.iB(7),
				abu = pD.iB(11);
			if (pD.iE(29 + 16 * abt + 16 * abu + 11 * abr)) {
				for (var data = [], aL = 0; aL < abr; aL++) {
					for (var jt = iP.iQ.iR(pD.iB(3)), abv = pD.iB(8), aOS = [], c2 = 0; c2 < abv; c2++) aOS.push(pD.iB(16));
					data.push({
						name: "[" + jt + "]",
						aOS: aOS
					})
				}
				8 === f1.mQ && f1.mR().aKZ(23, !0, data)
			} else el.d9.vE(0, 3266)
		}
	}
}

function aML() {
	this.a0K = new z8, this.a7N = new a9L, this.ic = new aY0, this.b3 = function() {
		j.cp || this.a0K.b3()
	}, this.e6 = function() {
		j.cp || (this.a0K.e6(), 3 !== f1.mQ) || cH.e1() % 15 != 5 && 2 !== j.e5 || f1.mR().a7L()
	}, __fx.replay.restartReplay = () => this.a7Q(), this.a7Q = function() {
		var abx = 0 !== j.e5,
			aby = j.aN5;
		abx || eg.aSi(), j.vM.a0E(), j.data.canvas = null, el.d9.close(el.d9.uj, 3257), el.d9.uj = 0, j.data.isReplay = 1, j.aN4(), abx && (j.aN5 = aby)
	}, this.a7P = function(bV) {
		var aL = bV.indexOf("=");
		return 0 <= aL ? bV.substring(aL + 1) : bV
	}, this.a7O = function(bV) {
		return bV
	}, __fx.replayHistory.load = saved => {
		saved = ib.a7P(saved), ib.ic.pB(saved) && ib.a7Q()
	}
}

function aan() {
	this.aSf = function() {
		for (var aI = j.ck, ld = rR.result.ld, d7 = ld.length, rN = (iG.kT(17 + 16 * aI + 33 * d7), iG.ty(1, 1), iG.ty(4, 12), iG.ty(10, d7), iG.ty(1, +(2 === j.aBj)), iG.ty(1, j.aNx % 2), cT.rN), aL = 0; aL < aI; aL++) iG.ty(16, rN[aL]);
		for (var cj = cT.cj, aL = 0; aL < d7; aL++) {
			var aP = ld[aL];
			iG.ty(9, aP), iG.ty(24, cj[aP])
		}
		el.d9.send(el.d9.uj, iG.i9)
	}
}

function xu() {
	var abz = [];

	function ac0(jQ) {
		abz.unshift(jQ), hk.mz.gE(161, abz.join(";"))
	}

	function aLR(jQ) {
		for (var ac1 = abz, aI = ac1.length, aL = 0; aL < aI; aL++)
			if (ac1[aL] === jQ) return ac1.splice(aL, 1), hk.mz.gE(161, ac1.join(";")), 1
	}
	this.b3 = function() {
		var bV = hk.buffer.data[161].value;
		bV.length && (abz = bV.split(";"))
	}, this.get = function() {
		return abz
	}, this.aCd = function() {
		return {
			n3: abz,
			value: 0
		}
	}, this.kz = function(jQ) {
		return bQ.oY.has(abz, jQ)
	}, this.aCp = function(jQ) {
		return aLR(jQ) ? 0 : (ac0(jQ), 1)
	}, this.qS = function(jQ) {
		aLR(jQ) && ac0(jQ)
	}, this.aCc = function(hy) {
		hy < abz.length && (abz.splice(hy, 1), hk.mz.gE(161, abz.join(";")))
	}
}

function aap() {
	this.aPs = function() {
		hk.d9.my(), hk.mz.gE(105, iU.iV.iW(iU.iV.iX(5))), hk.mz.gE(106, iU.iV.iW(iU.iV.iX(15))), hk.mz.gE(109, 0), hk.mz.gE(108, hk.buffer.data[109].value), hk.mz.gE(111, hk.buffer.data[109].value + 1), hk.mz.gE(107, 0), hk.mz.gE(110, "")
	}, this.aPt = function() {
		var data;
		pD.size < iG.iH(29) ? el.d9.vE(0, 3254) : ((data = {
			a5i: pD.iB(30),
			a97: pD.iB(16),
			a98: pD.iB(30),
			a99: pD.iB(30),
			a9A: pD.iB(30),
			a9B: pD.iD(32),
			username: iP.yD.pB(5),
			a9C: iP.yD.pB(3),
			a9D: iP.yD.pB(3),
			a9E: pD.iD(32),
			a9F: pD.iD(32),
			a9G: pD.iB(30),
			a9H: pD.iD(32),
			a9I: pD.iD(32),
			a9J: pD.iD(32),
			a9K: pD.iD(32),
			aCi: pD.iD(32),
			aCj: pD.iD(30),
			aDA: pD.iD(32),
			aDB: iP.yD.pB(3),
			aD3: pD.iD(2),
			aD5: pD.iD(10),
			aD0: iP.yD.pB(8),
			aD4: pD.iD(5),
			aCT: pD.iB(30),
			aCe: pD.iB(30),
			aCf: pD.iD(32),
			aCo: pD.iB(3),
			aCn: pD.iB(8),
			aCg: pD.iB(30),
			aCh: pD.iD(32),
			aCm: pD.iB(1),
			aCy: iP.yD.pB(6),
			aCq: pD.iB(1),
			aCr: pD.iB(1),
			aCs: pD.iB(1),
			ac2: pD.iB(17),
			ac3: pD.iB(5),
			aDC: pD.iB(1),
			aDD: pD.iB(1)
		}).aDC && (data.aDE = pD.iD(32), data.aDF = pD.iB(30), data.aDG = pD.iB(30), data.aDH = pD.iB(1)), 8 === f1.mQ && (25 === f1.mR().aZK ? (data.aCB = !0, f1.d9.pp = data, f1.mR().aKZ(25, !1)) : (data.aCB = !1, hk.mz.gE(160, +(data
			.aDC && data.aDH)), data.jQ = hk.buffer.data[105].value, f1.d9.pm = data, hk.mz.a96(data), f1.mR().aKZ(16, !0))))
	}
}

function aba() {
	this.gS = function(player) {
		return !!j.data.passableWater && d8.d9.wr !== d8.d9.gW && d8.d9.gT[player] !== d8.d9.aDX && 0 !== cT.a9e[player].length
	}, this.a0Y = function(c) {
		var a44 = h1.h2[1];
		return !(4 <= a44 || !d8.ge.aV3(n.yc(c))) && f.g(n.yc(n.aAf(c, a44)))
	}
}

function aBe() {
	function ac4() {
		f1.lu(29) && (jl.d9.aJI && 1 === jl.d9.aIp[2] && f1.lu(29).aJ0(), jl.d9.aJI = 0, f1.lu(29).aIw(), f1.lu(29).aIv(), jl.l5.aXr())
	}
	this.jy = new Array(4), this.aIp = [0, 0, 1, 0], this.aJI = 0, this.aJE = [0, 0], this.b3 = function() {
		for (var aL = 0; aL < this.jy.length; aL++) this.jy[aL] = new aDK;
		this.aIp[0] = hk.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.jy), __fx.lobbyReminders.setPopupHandler(function(text) {
			jl.message.lt({
				id: 7,
				cC: text
			})
		})
	}, this.abE = function() {
		ac4(), jl.aBZ.b3(), __fx.lobbyReminders.check()
	}, this.aKK = function() {
		jl.aBZ.aKK();
		for (var aL = 0; aL < jl.d9.jy.length; aL++) {
			var aGa = jl.d9.jy[aL];
			0 === aGa.fA ? aGa.aDT = 0 : (aGa.aDQ = Math.max(aGa.aDQ - aGa.aDT % 2, 0), aGa.aDT++)
		}
		ac4(), __fx.lobbyReminders.check()
	}, this.abH = function(jd) {
		this.aIp[0] !== jd || this.aIp[2] || f1.lu(29).aJH()
	}
}

function aMc() {
	this.ub = [L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(529), L(530), L(531)];
	var ac7 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.ua = new Array(ac7.length), this.b3 = function() {
		var cK = hk.buffer.data[155].value.split(";"),
			d7 = cK.length;
		if (function() {
				for (var aI = ac7.length, aL = 0; aL < aI; aL++) uY.ua[aL] = ac7[aL]
			}(), !(d7 > ac7.length))
			for (var aL = 0; aL < d7; aL++) cK[aL].length && (this.ua[aL] = cK[aL])
	}, this.ue = function(hy, code) {
		for (var ua = this.ua, ac9 = ac7, bV = (ua[hy] = code, ""), aI = ua.length, acA = [], aL = 0; aL < aI; aL++) acA.push(ua[aL] === ac9[aL] ? "" : ua[aL]);
		aI--;
		for (aL = 0; aL < aI; aL++) bV += acA[aL] + ";";
		hk.mz.gE(155, bV += acA[aI])
	}, this.uZ = function() {
		hk.mz.gE(155, ""), this.b3()
	}, this.bB = function(code, hy) {
		return code === this.ua[hy] || code === this.ua[hy + 1]
	}
}

function abq() {
	var acB, acC, acD, aBp, acE, hy = 0,
		bU = cH.bU;

	function acH() {
		! function() {
			if (!j.bC) return;
			if (j.iv) return;
			if (2 !== j.e5)
				if (acE % 7 != 0) acE++;
				else if (aBp === j.aBw) {
				if (!acK()) return;
				gZ.aBu(aBp), j.j6.e6()
			} else {
				if (!acK()) return;
				acE++, aBp++, cb.j2(), cb.j3(!0)
			}
			return 1
		}() && acK() && a4V()
	}

	function acI() {
		hy = 0, (j.bC ? (cH.cI = gZ.aBu(aBp - (acE % 7 == 0 ? 0 : 1) + acE % 7 / 7) || cH.cI, a4i) : qZ.qa || !bq.qO ? a4i : (cH.cI = !0, a4h))()
	}

	function acK() {
		var aL, aI, acL = ib.a0K.z9,
			aQ = ib.a0K.zA,
			ws = ib.a0K.zB,
			wt = ib.a0K.zC,
			acM = ib.a0K.zD,
			acN = ib.a0K.zE;
		if (!(acB >= acN.length)) {
			if (acN = acN[acB], acM[acB]) {
				for (aI = acC + acN, aL = acC; aL < aI; aL++) bx.aBv.wh(acL[aL], aQ[aL], ws[aL], wt[aL]);
				acC += acN, acB++
			} else ++acD >= acN && (acB++, acD = 0);
			return __fx.replay.tick++, 1
		}
		bp.cf("Replay file smaller than expected."), bq.qX(!1), j.e5 = 2
	}
	this.nz = 0, this.b3 = function() {
		acE = aBp = acD = acC = acB = 0, __fx.replay.registerHooks({
			advance: () => acH(),
			finishTick: () => j7.render(),
			requestRedraw: () => {
				cH.cI = !0
			},
			isEnded: () => 2 === j.e5,
			getTickInterval: () => cH.aBx
		})
	}, this.e6 = function() {
		var aE7;
		bN.e6(), __fx.replay.frame() ? a4T() : bq.qQ() < 1.7 ? 0 === hy ? cH.bU >= bU && (aE7 = cH.aBx / bq.qQ(), bU += aE7 * Math.floor(1 + (cH.bU - bU) / aE7), 2 === j.e5 || qZ.qa || !bq.qO ? a4T() : (acH(), j7.render()), hy++) : acI() :
			function() {
				var aE7;
				if (cH.bU >= bU)
					if (2 === j.e5 || qZ.qa || !bq.qO) a4T(), bU = cH.bU;
					else {
						for (aE7 = cH.aBx / bq.qQ(), 16 < (cH.bU - bU) / aE7 && (bU = cH.bU - 16 * aE7); cH.bU >= bU && 2 !== j.e5;) bU += aE7, acH();
						j7.render()
					} acI()
			}(), a4e(), cH.cI && (cH.cI = !1, aC0())
	}, this.aBn = function() {
		ib.a0K.zE.length - acB <= 2 || bp.cf("Replay file larger than expected.")
	}
}

function aXy() {
	var aZP, aPT, lP = document.createElement("div"),
		acO = document.createElement("div"),
		a8n = 0,
		acP = 0;
	this.show = function(aH, aJ, bV, aXx, acQ, bB) {
			if (a8n) {
				if (!aXx) return;
				this.gG()
			}
			aH === aJ && -1 === aH ? (aH = aZP, aJ = aPT) : (aZP = aH, aPT = aJ);
			var acR = Math.floor(bQ.bR.lV(.018)),
				acQ = (aH = Math.max(acR + 2, aH), acQ || (acP = aXx), a8n = 1, bN.aV / bN.mk),
				aXx = (lP.style.whiteSpace = "pre", lP.textContent = bV, bQ.bR.gL(lP, 5), lP.style.font = bQ.bR.bS(0, bQ.bR.lV(.015)), lP.style.padding = "0.3em 0.6em", lP.style.left = aH + "px", lP.style.top = "0px", document.body.appendChild(lP),
					aH + lP.offsetWidth - acQ),
				bV = (0 < aXx && (aH -= aXx, aH = Math.max(acR + 1, aH), lP.style.left = aH + "px", aH < acR + 2) && (lP.style.whiteSpace = "pre-wrap"), lP.offsetHeight);
			lP.style.top = aJ - bV + acP * bT.mf + "px", aH -= acR, acO.style.backgroundColor = bQ.color.aJn(bB >> 12 << 2, (bB >> 6 & 63) << 2, (63 & bB) << 2), acO.style.left = aH + "px", acO.style.top = lP.style.top, acO.style.width = acR + "px",
				acO.style.height = bV + "px", bQ.bR.gL(acO, 4), bQ.bR.gL(acO, 8), bQ.bR.gL(acO, 2), document.body.appendChild(acO)
		}, this.gG = function(aXz) {
			if (a8n) {
				if (aXz && acP) return 0;
				a8n = 0, f1.removeChild(document.body, lP), f1.removeChild(document.body, acO)
			}
			return 1
		}, lP.style.position = "absolute", lP.style.backgroundColor = bJ.fx, lP.style.color = bJ.bL, lP.style.pointerEvents = "none", lP.style.zIndex = "5", lP.style.maxWidth = "100%", acO.style.position = "absolute", acO.style.color = bJ.bL, acO
		.style.pointerEvents = "none", acO.style.zIndex = "5"
}

function aME() {
	var acU;
	this.aFN = null, this.aFM = 0, this.b3 = function() {
		acU = [], 9 === j.dy && this.acV()
	}, this.acV = function() {
		this.aFN = [0, 0, 0, 0, 0, 0];
		for (var acW = [250, 226, 166, 148, 100, this.aFM = 0, 0, 0], aQt = [0, 8, 24, 30, 46, 70, 256, 333], acX = [0, 0, 3, 9, 17, 25, 256, 179], au = j.ck, aL = 1; aL < acW.length; aL++)
			if (au <= aQt[aL]) {
				this.aFM = acW[aL - 1] - hu.hv((au - aQt[aL - 1]) * (acW[aL - 1] - acW[aL]), aQt[aL] - aQt[aL - 1]), this.aFN[5] = acX[aL - 1] - hu.hv((au - aQt[aL - 1]) * (acX[aL - 1] - acX[aL]), aQt[aL] - aQt[aL - 1]), this.aFN[0] = j.cW - au -
					this.aFM - this.aFN[5];
				break
			} j.aF1 = j.cW - j.ck, j.data.numberTeams = (0 < j.ck) + (0 < j.aF1), j.data.playerCount = j.aRC = j.ck + j.aF1, j.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, j.ck + this.aFM, j.aF1 - this.aFM]), j.vM.vN()
	}, this.aWl = function(player) {
		acU.push({
			player: player,
			aY: 14 + gh.gi(20)
		})
	}, this.e6 = function() {
		if (9 === j.dy)
			for (var aL = acU.length - 1; 0 <= aL; aL--) --acU[aL].aY <= 0 && (cb.dZ(acU[aL].player, 0, cN.hb.hf + cN.hb.aN6), acU.splice(aL, 1))
	}
}

function aMd() {
	var gap, aVd, aH = [0, 0, 0, 0, 0],
		aJ = [0, 0, 0, 0, 0],
		mi = [1, 1, 1, 1, 1],
		hm = [!0, !0, !0, !1, !1],
		bB = (this.wt = [!0, !0, !0, !1, !1], null);
	this.mV = function(cE, acZ) {
		bB = cE, hm = acZ, aVd = [hi.aTE, hi.a4y, hi.aTF, hi.aTF, hi.aTG], this.b3()
	}, this.b3 = function() {
		if (gN.gO()) {
			var aL, qs = Math.floor((b4.b5.b6() ? .261 : .195) * bN.bO),
				qt = Math.floor(.9 * qs),
				qu = Math.floor(.17 * qt);
			if (gap = b4.b5.b6() ? 2 * bT.gap : bT.gap, mi[0] = qs / bB[0].width, mi[1] = qt / bB[1].width, mi[2] = qu / bB[2].height, mi[3] = qu / bB[3].height, mi[4] = qu / bB[4].height, mi[2] *= 1.7, mi[3] *= 1.07, aH[0] = gap, aH[1] = gap,
				aH[2] = gap, aH[3] = gap, aH[4] = Math.floor(2 * gap + mi[3] * bB[3].width), aJ[0] = gap, aJ[1] = aJ[0] + gap + mi[0] * bB[0].height, aJ[2] = aJ[1] + gap + mi[1] * bB[1].height, aJ[3] = aJ[2] + gap + mi[2] * bB[2].height, aJ[4] =
				aJ[3], !hm[0])
				for (aL = 0; aL < 5; aL++) aJ[aL] -= mi[0] * bB[0].height + gap;
			if (!hm[1])
				for (aL = 2; aL < 5; aL++) aJ[aL] -= mi[1] * bB[1].height + gap
		}
	}, this.bi = function() {
		return !(7 === eg.f3() && b4.b5.b6())
	}, this.bt = function(oG, oH) {
		if (bB && this.bi())
			for (var aL = hm.length - 1; 0 <= aL; aL--)
				if (hm[aL] && this.wt[aL] && aH[aL] < oG && aJ[aL] < oH && oG < aH[aL] + mi[aL] * bB[aL].width && oH < aJ[aL] + mi[aL] * bB[aL].height) return f1.g9(9, f1.mQ, new aKO(L(532), bQ.bR.mr(aVd[aL]))), !0;
		return !1
	}, this.eD = function() {
		if (bB && this.bi()) {
			var aL;
			for (eF.imageSmoothingEnabled = !0, aL = 0; aL < 5; aL++) hm[aL] && this.wt[aL] && (eF.setTransform(mi[aL], 0, 0, mi[aL], aH[aL], aJ[aL]), eF.drawImage(bB[aL], 0, 0));
			eF.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function yB() {
	var aca = new Uint8Array(64);
	this.b3 = function() {
		var aL;
		for (aca[0] = 45, aca[37] = 95, aL = 0; aL < 10; aL++) aca[aL + 1] = 48 + aL;
		for (aL = 0; aL < 26; aL++) aca[aL + 11] = 65 + aL, aca[aL + 38] = 97 + aL
	}, this.iX = function(iT) {
		for (var pC = pD, u8 = new Uint8Array(iT), aL = 0; aL < iT; aL++) u8[aL] = pC.iB(6);
		return u8
	}, this.iW = function(u8) {
		for (var aI = u8.length, acb = aca, cK = [], aL = 0; aL < aI; aL++) cK.push(String.fromCharCode(acb[u8[aL]]));
		return cK.join("")
	}, this.cs = function(value, acc) {
		for (var acb = aca, cK = [], aL = 0; aL < acc; aL++) cK.push(String.fromCharCode(acb[value >> 6 * (acc - 1 - aL) & 63]));
		return cK.join("")
	}
}

function aNj() {
	this.cK = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.uf = function() {
		for (var acd = [], cK = this.cK, aI = cK.length, aL = 0; aL < aI; aL++) acd.push(cK[aL]);
		var aOs = hk.buffer.data[12].xV;
		for (aL = 0; aL < aI; aL++)
			if (acd[aL] === aOs) {
				acd.splice(aL, 1), aI--;
				break
			} acd.sort(), aI++, acd.unshift(aOs);
		try {
			if ("undefined" == typeof Intl) return acd;
			for (aL = 0; aL < aI; aL++) {
				var bV = new Intl.DisplayNames([acd[aL]], {
					type: "language"
				}).of(acd[aL]);
				bV !== acd[aL] && (acd[aL] = acd[aL] + ": " + bV)
			}
		} catch (l0) {
			console.log("error 3646: " + l0)
		}
		return acd
	}, this.ug = function(a2c) {
		for (var bV = hk.buffer.data[12].value, aI = a2c.length, aL = 0; aL < aI; aL++)
			if (bV === a2c[aL].split(":")[0]) return aL;
		return 0
	}, this.wc = function(acf) {
		if (acf && !(acf.length < 2)) {
			acf = acf.split("-")[0].toLowerCase();
			for (var cK = this.cK, aI = cK.length, aL = 0; aL < aI; aL++)
				if (acf === cK[aL]) return aL
		}
		return -1
	}
}

function pa() {
	this.buffer = {}, this.gF = new Array(8), this.pp = null, this.pm = null, this.z2 = 0, this.rv = [0, 0], this.f2 = function() {
		f1.g9(5, 5)
	}, this.aPY = function(aEk) {
		aEk && (en.eb = aEk), f1.q7(), en.b3()
	}, __fx.customLobby.setJoinFunction(() => this.aPY(1)), this.aNv = function() {
		f1.g9(0 === eg.f3() ? 5 : 0)
	}, this.aL2 = function() {
		if (1 === hk.buffer.data[130].value) f1.g9(8, f1.mR().pe, new gA(24, {
			a65: hk.buffer.data[125].value,
			gC: hk.buffer.data[128].value,
			gD: hk.buffer.data[129].value
		}));
		else {
			for (var cK = (cK = hk.buffer.data[126].value.split(",")).slice(0, 10), aL = 0; aL < cK.length; aL++) cK[aL] = cK[aL].trim().slice(0, 7).toUpperCase();
			1 === cK.length && 0 === cK[0].length && (cK = []), f1.g9(8, f1.mR().pe, new gA(23, {
				a65: hk.buffer.data[125].value,
				js: cK
			}))
		}
	}, this.aPZ = function(pe, target) {
		f1.g9(4, pe, new a4x("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + el.d9.uz(
				"/privacy"), !1, [new g0("⬅️ " + L(61), function() {
				f1.g9(pe)
			}), new g0("✅ Accept", function() {
				hk.mz.gE(140, 1), 0 === target ? f1.g9(2, pe) : f1.g9(8, pe, new gA(target))
			})]))
	}, this.aQ0 = function() {
		for (var aL = 0; aL < 8; aL++) this.gF[aL] = iP.iQ.iR(pD.iB(5));
		this.gF[1] = "[" + this.gF[1] + "]", 5 === f1.mQ && (f1.mR().mS.gE(this.gF), f1.mR().resize())
	}, this.a2C = function(hm, dD, dE) {
		hm = bQ.by.aCl(hm, 1, 1e6);
		dD = L(533, [dD]);
		return (dD += "<br>") + L(534, [__fx.utils.escapeHtml("" + dE)]) + "<br>" + L(535, [hm + "–" + (hm + 2)]) + "<br>" + L(536, [hm])
	}
}

function oS(rE, ob) {
	var kp = document.createElement("div");

	function a2o() {
		var aL, mg, au, mj, a0, ach = bN.mk * kp.offsetWidth,
			acj = new Float64Array(function(ach) {
				var aV = .25 * bQ.bR.mh(.6) * bN.bO;
				return Math.max(Math.floor(ach / aV), 1)
			}(ach)),
			rH = bT.rH,
			ack = (ach - (acj.length + 1) * bT.gap) / (acj.length * bN.mk);
		for (acj.fill(rH), aL = 0; aL < ob.length; aL++) mg = (a0 = ob[aL].kp).style, au = bQ.oY.min(acj), mj = acj.indexOf(au), mg.top = bQ.bR.fy(au), mg.left = bQ.bR.fy(rH + mj * (ack + rH)), mg.width = bQ.bR.fy(ack), bQ.bR.gL(a0, 5), acj[mj] += a0
			.offsetHeight + 3 * rH;
		kp.style.height = bQ.bR.fy(bQ.oY.max(acj) - 2 * rH)
	}
	this.rG = kp, this.yJ = ob, this.resize = function() {
		var aL;
		for (aL = 0; aL < ob.length; aL++) ob[aL].resize();
		a2o(), a2o()
	}, kp.style.width = "100%", kp.style.maxWidth = "100%", rE.style.lineHeight = "1.5em", rE.style.overflowX = "hidden", rE.style.overflowY = "auto";
	for (var aL = 0; aL < ob.length; aL++) kp.appendChild(ob[aL].kp);
	rE.appendChild(kp)
}

function pr() {
	var uL, a5s, a5t, a5v;

	function a5u(aL) {
		f1.g9(8, f1.mQ, new gA(21, {
			gB: aL,
			gC: 0,
			gD: 10
		}))
	}
	this.show = function() {
		uL.show(), this.resize()
	}, this.gG = function() {
		uL.gG()
	}, this.resize = function() {
		uL.resize(), a5s.resize()
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, a5t = [new g0(L(470), function() {
		a5u(5)
	}, 0, 0, 1), new g0(L(471), function() {
		a5u(6)
	}, 0, 0, 1), new g0(L(472), function() {
		a5u(7)
	}, 0, 0, 1), new g0("Audit Log", function() {
		a5u(12)
	}, 0, 0, 1)], a5v = [new g0("⬅️ " + L(61), function() {
		f1.oX()
	})], uL = new oQ(L(429), a5v), a5s = new vJ(a5t, uL.oT)
}

function qF() {
	this.aSo = function() {
		for (var aP, aI = eA.eB, b7 = eA.eC, rN = cT.rN, vx = this.rP(), aL = 0; aL < aI; aL++) aP = b7[aL], bQ.by.cZ(aP) || (rN[aP] = vx);
		var a0O = cT.a0O,
			nJ = cT.nJ,
			nK = cT.nK,
			uI = cT.uI,
			aI = j.ck;
		for (aL = 0; aL < aI; aL++)(0 === uI[aL] || nK[aL] < 1 || 2 * a0O[aL] > 3 * (nJ[aL] + nK[aL])) && (rN[aL] = 0);
		var aSm = 0;
		for (aL = 0; aL < aI; aL++) aSm += 0 < rN[aL];
		return aSm
	}, this.rP = function() {
		return Math.min(65535, cH.e1())
	}
}

function aMI() {
	this.acl = new Uint32Array(j.cW), this.b3 = function() {
		10 === j.dy && this.acl.fill(0)
	}, this.e6 = function() {
		10 === j.dy && this.ge()
	}, this.ge = function() {
		for (var aP, target, a8Y, acl = this.acl, b7 = eA.eC, a8X = cT.ct, aL = eA.eB - 1; 0 <= aL; aL--)(aP = b7[aL]) >= j.ck || (target = Math.max(hu.hv(a8X[aP], 4), 2048), a8Y = Math.max(a0V.a8h(aP), 100), acl[aP] += hu.hv(a8Y * target, 1e4),
			acl[aP] > target && (acl[aP] = target))
	}, this.aMr = function(player, d2) {
		return 10 !== j.dy || bQ.by.cZ(player) ? d2 : Math.min(this.acl[player], d2)
	}, this.aMy = function(player, d2) {
		10 !== j.dy || bQ.by.cZ(player) || (this.acl[player] -= d2)
	}
}

function aLx() {
	var bB = bQ.color;
	this.dP = bB.aJn(0, 0, 0), this.z3 = bB.tC(0, 0, 0, .7), this.f8 = bB.tC(0, 0, 0, .5), this.fx = bB.tC(0, 0, 0, .85), this.bK = bB.tC(0, 0, 0, .75), this.hZ = bB.tC(0, 0, 0, .6), this.aS6 = bB.tC(0, 0, 0, .35), this.bL = bB.aJn(255, 255, 255),
		this.a6v = bB.tC(255, 255, 255, .3), this.tJ = bB.tC(255, 255, 255, .6), this.zy = bB.tC(255, 255, 255, .4), this.a09 = bB.tC(255, 255, 255, .25), this.aIX = bB.tC(255, 255, 255, .85), this.vk = bB.tC(255, 255, 255, .75), this.acm = bB.tC(
			255, 255, 255, .15), this.acn = bB.tC(255, 255, 255, .11), this.tN = bB.aJn(128, 128, 128), this.eI = bB.tC(64, 64, 64, .75), this.tA = bB.tC(88, 88, 88, .83), this.r8 = bB.tC(60, 60, 60, .85), this.aPX = bB.tC(80, 60, 60, .85), this.jD =
		bB.aJn(170, 170, 170), this.jE = bB.aJn(200, 235, 245), this.aYe = bB.aJn(30, 255, 30), this.aYd = bB.aJn(0, 200, 0), this.tQ = bB.aJn(128, 255, 128), this.aco = bB.tC(10, 65, 10, .75), this.vh = bB.tC(0, 255, 0, .6), this.acp = bB.tC(0, 255,
			0, .5), this.aS7 = bB.tC(0, 200, 0, .5), this.bf = bB.tC(0, 100, 0, .75), this.g5 = bB.tC(0, 60, 0, .8), this.qq = bB.tC(0, 255, 0, .3), this.hY = bB.tC(0, 180, 0, .6), this.acq = bB.tC(0, 120, 0, .85), this.tR = bB.aJn(0, 120, 0), this
		.aPV = bB.tC(0, 70, 0, .85), this.acr = bB.aJn(190, 230, 190), this.jH = bB.aJn(0, 255, 0), this.acs = bB.aJn(255, 120, 120), this.w8 = bB.aJn(255, 160, 160), this.tO = bB.aJn(255, 70, 70), this.tP = bB.aJn(230, 0, 0), this.vi = bB.tC(220, 0,
			0, .6), this.aYh = bB.tC(255, 100, 100, .8), this.cg = bB.tC(100, 0, 0, .85), this.g4 = bB.tC(60, 0, 0, .85), this.aTy = bB.tC(200, 0, 0, .6), this.a4z = bB.tC(120, 0, 0, .85), this.cX = bB.aJn(255, 70, 10), this.jb = bB.aJn(230, 190,
			190), this.jF = bB.aJn(255, 0, 0), this.jG = bB.aJn(255, 0, 255), this.g2 = bB.tC(60, 0, 60, .85), this.g3 = bB.tC(0, 60, 60, .85), this.aYc = bB.tC(10, 60, 60, .9), this.act = bB.tC(0, 96, 96, .75), this.jI = bB.aJn(0, 255, 255), this
		.pH = bB.aJn(160, 160, 255), this.a6s = bB.tC(0, 40, 90, .75), this.aU0 = bB.tC(0, 0, 255, .6), this.acu = bB.aJn(200, 200, 255), this.t9 = bB.tC(50, 50, 255, .83), this.a6r = bB.tC(20, 90, 150, .75), this.eJ = bB.tC(10, 10, 120, .75), this
		.aVq = bB.aJn(255, 120, 100), this.acv = bB.tC(255, 255, 0, .5), this.a6u = bB.tC(255, 255, 150, .2), this.dT = bB.aJn(255, 255, 0), this.ce = bB.aJn(255, 255, 200), this.aTz = bB.tC(200, 200, 0, .6), this.acw = bB.tC(140, 120, 0, .75), this
		.acx = bB.tC(180, 160, 40, .75), this.aPW = bB.tC(70, 50, 20, .85), this.acy = bB.tC(30, 30, 0, .85), this.g7 = bB.tC(60, 60, 0, .85), this.aWC = bB.aJn(255, 255, 100), this.jK = bB.aJn(255, 255, 140), this.a92 = bB.tC(255, 140, 0, .75), this
		.g6 = bB.tC(70, 40, 0, .85), this.jJ = bB.aJn(255, 150, 0), this.aWm = bB.tC(255, 200, 80, .85), this.vf = bB.tC(0, 0, 0, 0), this.aIj = bB.tC(255, 255, 255, 0), this.aIk = bB.tC(254, 254, 254, 0)
}

function aMU() {
	var acz, ad0 = new Uint8Array(5),
		ad1 = new Uint8Array(5);
	this.ad2 = new aSq, this.b3 = function() {
		for (var hm = hk.buffer.data[119].value, aL = 0; aL < ad0.length; aL++) ad0[aL] = (hm >> 2 * aL) % 4
	}, this.aZD = function() {
		acz = [L(537), "", L(538, [uY.ua[28]]), L(539, [uY.ua[26]]), L(540, [uY.ua[0]])], this.ad2.b3()
	}, this.e6 = function() {
		this.ad2.e6()
	}, this.td = function(id) {
		1 < id && l3.l4() || ! function(hy) {
			if (3 === ad0[hy] || 1 === ad1[hy]) return;
			if (ad1[hy] = 1, !(Math.random() < .6)) {
				ad0[hy]++;
				for (var hm = 0, aL = 0; aL < ad0.length; aL++) hm += ad0[aL] << 2 * aL;
				hk.mz.gE(119, hm)
			}
			return 1
		}(id) || bp.cB(acz[id])
	}
}

function aZE() {
	a9Z = 0, ad4 = 2048, a9a = new Uint32Array(4 * ad4), ad5 = 0, ad6 = new Uint32Array(ad4), ad7 = new Uint8Array(v.w * v.y)
}

function h8(player) {
	a9b = player, aVD = !1, ad8(), ad9();
	for (var aL = nN.sP(a9b) - 1; 0 <= aL; aL--) aVE = aL, adA();
	aVD && adB()
}

function adB() {
	nc.a9c(), nc.a9d()
}

function adA() {
	a9k = nN.sQ(a9b, aVE), aVF = nN.sR(a9b, aVE), aVT = nN.sV(a9b, aVE), adC(), (0 !== a9Z && (adD(), adE()) ? aV8 : aVC)()
}

function adE() {
	if (!((aVR = hu.hv(aVF, a9Z)) > j.aVK)) {
		if (!aVT) return !1;
		var adF = a9Z * (1 + j.aVK);
		aVF += bQ.by.aDd(a9b, adF - aVF), aVR = hu.hv(aVF, a9Z)
	}
	return !0
}

function adD() {
	for (var aL = a9Z - 1; 0 <= aL; aL--) ad7[hu.hv(a9a[aL], 4)] = 0
}

function aVC() {
	1 === nN.sP(a9b) && nP.hF(a9b);
	var bv = bQ.by.sI(a9b, aVF);
	hD.sJ(a9b, aVF - bv, 12), nN.sN(a9b, aVE)
}

function ad8() {
	for (var player = a9b, nG = cT.nG, aI = Math.min(nG[player].length, ad4), aY = 0, adG = ad6, aL = aI - 1; 0 <= aL; aL--) adG[aY++] = nG[player][aL];
	ad5 = aY
}

function ad9() {
	for (var aL = cT.nG[a9b].length - 1; 0 <= aL; aL--) f.g(cT.nG[a9b][aL]) && f.yu(cT.nG[a9b][aL], a9b);
	cT.nG[a9b] = []
}

function adC() {
	a9Z = 0, (a9k === j.cW ? adH : adI)()
}

function adI() {
	for (var aP, mj, aL, af = f.af, a0 = 3; 0 <= a0; a0--)
		for (aL = ad5 - 1; 0 <= aL; aL--) aP = ad6[aL] + af[a0], mj = hu.hv(aP, 4), 0 === ad7[mj] && f.nW(aP) && f.co(aP) === a9k && (ad7[mj] = 1, a9a[a9Z++] = aP)
}

function adH() {
	for (var aP, mj, aL, af = f.af, a0 = 3; 0 <= a0; a0--)
		for (aL = ad5 - 1; 0 <= aL; aL--) aP = ad6[aL] + af[a0], mj = hu.hv(aP, 4), 0 === ad7[mj] && f.cn(aP) && (ad7[mj] = 1, a9a[a9Z++] = aP)
}

function xE() {
	var n3 = adJ(v.dr);
	n3 && adK(n3[0], n3[1], n3[2], n3[3], n3[4])
}

function adJ(dr) {
	return 2 === dr ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === dr ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === dr ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === dr ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === dr ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function adK(adL, adM, adN, adO, adP) {
	for (var aH, aJ, oD, oF, a33, adS, aAS = adL.length - 1, adQ = v.w + v.y, aI = (adQ *= adQ, adN.length), adR = Array(aI), aL = aI - 1; 0 <= aL; aL--) adR[aL] = adN[aL] * adN[aL];
	var adT = new Array(aI),
		aOs = new Array(aI),
		adU = new Array(aI),
		hm = kI.kU();
	if (void 0 === adP)
		for (adP = new Array(aI), aL = aI - 1; 0 <= aL; aL--) adP[aL] = 0;
	for (aL = 1; aL < aI; aL++) adT[aL] = adR[aL] - adR[aL - 1], aOs[aL] = adO[aL] - adO[aL - 1], adU[aL] = adP[aL] - adP[aL - 1];
	for (aH = v.w - 1; 0 <= aH; aH--)
		for (aJ = v.y - 1; 0 <= aJ; aJ--) {
			for (oD = adQ, aL = aAS; 0 <= aL; aL--) oD = (oF = (aH - adL[aL]) * (aH - adL[aL]) + (aJ - adM[aL]) * (aJ - adM[aL])) < oD ? oF : oD;
			for (a33 = adO[aI - 1], adS = adP[aI - 1], aL = 1; aL < aI; aL++)
				if (oD < adR[aL]) {
					a33 = adO[aL - 1] + aHR((oD - adR[aL - 1]) * aOs[aL], adT[aL]), adS = adP[aL - 1] + aHR((oD - adR[aL - 1]) * adU[aL], adT[aL]);
					break
				} adV(v.w * aJ + aH, a33, adS, hm)
		}
}

function adV(hy, a33, adS, hm) {
	a33 < 500 ? hm[hy] = hu.hv(hm[hy] * a33 * 2, 1e3) : 500 < a33 && (hm[hy] += hu.hv(2 * (1e4 - hm[hy]) * (a33 - 500), 1e3)), hm[hy] += hu.hv(adS * (10 * a33 - hm[hy]), 1e3)
}

function pn() {
	var uL, aPR, aOC, adW, adX, adY, colors = [0, 0, 0],
		adZ = -1;

	function adc(aL) {
		var add = aPR.aJ + aL * (bT.gap + adY);
		eF.fillStyle = "rgb(" + (0 === aL ? 150 : 2 === aL ? 30 : 0) + "," + (1 === aL ? 130 : 2 === aL ? 30 : 0) + "," + (2 === aL ? 220 : 0) + ")", eF.fillRect(adW, add, colors[aL] * adX, adY), eF.strokeStyle = bJ.bL, eF.strokeRect(adW, add, adX,
			adY), eF.fillStyle = bJ.bL, eF.font = bQ.bR.bS(0, .32 * adY), bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 0), eF.fillText(L(0 === aL ? 543 : 1 === aL ? 544 : 545) + ada(aL), adW + bT.gap, add + .53 * adY)
	}

	function ada(aL, ade) {
		return ade = ade || 256, hu.hz(Math.floor(ade * colors[aL]), 0, ade - 1)
	}

	function aHP(hr, hs) {
		return !(hr < adW || hs < aPR.aJ || hr > aPR.aH + aPR.aV || hs > aPR.aJ + aPR.au)
	}
	this.show = function() {
		var hm = hk.buffer.data[121].value;
		colors[0] = (hm >> 12) / 63, colors[1] = (hm >> 6 & 63) / 63, colors[2] = (63 & hm) / 63, uL.show(), this.resize()
	}, this.gG = function() {
		hk.mz.gE(121, (ada(0, 64) << 12) + (ada(1, 64) << 6) + ada(2, 64)), uL.gG()
	}, this.resize = function() {
		uL.resize(), aPR.resize();
		var bB = bN.mk,
			bA = uL.aOW(),
			adb = (aPR.aJ = Math.max(aPR.aJ, bB * bA.aOZ + bT.gap), bB * bA.aOY - 2 * bT.gap);
		aPR.au = Math.min(aPR.au, adb), aPR.aV = 2 * aPR.au, aPR.aJ = bB * bA.aOZ + .5 * (bB * bA.aOY - aPR.au), aPR.aH = .5 * (bN.aV - aPR.aV), aOC = .25 * aPR.aV, adW = aPR.aH + aOC + bT.gap, adX = aPR.aV - aOC - bT.gap, adY = (aPR.au - 2 * bT
			.gap) / 3
	}, this.eD = function() {
		var db, dc, c7;
		uL.eD(), eF.lineWidth = bT.i4, db = ada(0), dc = ada(1), c7 = ada(2), eF.fillStyle = "rgb(" + db + "," + dc + "," + c7 + ")", eF.fillRect(aPR.aH, aPR.aJ, aOC, aPR.au), eF.strokeStyle = bJ.bL, eF.strokeRect(aPR.aH, aPR.aJ, aOC, aPR.au), eF
			.fillStyle = db + dc + c7 < 306 && dc < 150 ? bJ.bL : bJ.dP, bQ.bR.textBaseline(eF, 1), bQ.bR.textAlign(eF, 1), eF.font = bQ.bR.bS(0, .1 * aPR.au), eF.rotate(-Math.PI / 2), eF.fillText(L(542), -aPR.aJ - .5 * aPR.au, aPR.aH + .5 *
			aOC), eF.setTransform(1, 0, 0, 1, 0, 0), adc(0), adc(1), adc(2)
	}, this.bt = function(hr, hs) {
		aHP(hr, hs) && (adZ = hu.hz(Math.floor((hs - aPR.aJ) / (adY + .75 * bT.gap)), 0, 2), colors[adZ] = hu.hz((hr - adW) / adX, 0, 1), cH.cI = !0)
	}, this.ez = function(hr) {
		-1 !== adZ && (colors[adZ] = hu.hz((hr - adW) / adX, 0, 1), cH.cI = !0)
	}, this.q9 = function(hr, hs, deltaY) {
		aHP(hr, hs) && (hr = hu.hz(Math.floor((hs - aPR.aJ) / (adY + .75 * bT.gap)), 0, 2), colors[hr] = hu.hz(colors[hr] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), cH.cI = !0)
	}, this.q8 = function() {
		0 <= adZ && (adZ = -1, cH.cI = !0)
	}, this.oq = function(bB) {
		2 === bB && uL.or[0].os()
	}, uL = new oQ(L(541), [new g0("⬅️ " + L(61), function() {
		f1.d9.aNv()
	})], !1), aPR = new qP([.5, .25], [.5, .5], 1)
}

function aM2() {
	this.b3 = function() {
		if (0 === j.data.sResourcesType) {
			for (var a9v = j.ck, ct = cT.ct, aL = 0; aL < a9v; aL++) ct[aL] = 512;
			var a9w = j.aRC,
				aFE = d0.aFE,
				d2 = d0.d2;
			for (aL = a9v; aL < a9w; aL++) ct[aL] = aFE[d2[aL]]
		} else(1 === j.data.sResourcesType ? function() {
			for (var aI = j.aRC, ct = cT.ct, sResourcesValue = j.data.sResourcesValue, aL = 0; aL < aI; aL++) ct[aL] = sResourcesValue
		} : function() {
			for (var aI = j.aRC, ct = cT.ct, sResourcesData = j.data.sResourcesData, aL = 0; aL < aI; aL++) ct[aL] = sResourcesData[aL]
		})();
		hD.hE[8] = cT.ct[j.k]
	}
}

function aMS() {
	var gap, adi = !1,
		aGp = 0,
		aV = 0,
		qs = 0,
		canvas = null,
		be = null,
		aX3 = null;

	function adm() {
		for (var aL = j.aQg; 0 <= aL; aL--) aX3[aL] = 0;
		for (aL = eA.eB - 1; 0 <= aL; aL--) aX3[cw.cz[eA.eC[aL]]] += cT.cj[eA.eC[aL]];
		adi = !0
	}

	function adk() {
		for (var adq, ado = 0, aI = 0, bB = Math.floor(aV / 2), db = Math.floor(qs / 2), adp = 1.5 * Math.PI, aL = j.aQg; 0 <= aL; aL--) aI += aX3[aL], 0 === aX3[aL] && ado++;
		if (adi = !1, be.clearRect(0, 0, aV, aV), 0 < aI)
			if (ado === j.aQg) {
				for (aL = j.aQg; 0 <= aL; aL--)
					if (0 < aX3[aL]) {
						! function(aL, bB, db) {
							be.fillStyle = cw.aQq[cw.cy[aL]], be.beginPath(), be.arc(bB, bB, db, 0, 2 * Math.PI), be.fill()
						}(aL, bB, db);
						break
					}!
				function(bB) {
					var fontSize = bB / 3;
					be.font = bQ.bR.bS(1, fontSize), be.fillStyle = bJ.bL, be.fillText("100%", bB, bB + .1 * fontSize)
				}(bB)
			} else {
				for (aL = 0; aL <= j.aQg; aL++) 0 < aX3[aL] && (! function(aL, bB, db, adp, adq) {
					be.fillStyle = cw.aQq[cw.cy[aL]], be.beginPath(), be.arc(bB, bB, db, adp, adq), be.lineTo(bB, bB), be.fill()
				}(aL, bB, db, adp, adq = adp + 2 * Math.PI * aX3[aL] / aI), function(bB, db, adp, adq) {
					var hm = (adq - adp) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * db * Math.min(hm, .37);
					fontSize < 8 || (adp = (adp + adq) / 2, adq = (__fx.settings.detailedTeamPercentage ? (100 * hm).toFixed(2) : Math.floor(100 * hm + .5)) + "%", db *= .525 - Math.max(.6 * (hm - .7), 0), be.font = bQ.bR.bS(1, fontSize), be
						.fillStyle = bJ.bL, be.fillText(adq, bB + Math.cos(adp) * db, bB + Math.cos(adp + 1.5 * Math.PI) * db))
				}(bB, db, adp, adq), 0 !== aL && adv(bB, db, adp), adp = adq);
				adv(bB, db, 1.5 * Math.PI)
			}!
		function(bB, db) {
			be.beginPath(), be.arc(bB, bB, db, 0, 2 * Math.PI), be.stroke()
		}(bB, db)
	}

	function adv(bB, db, aUj) {
		be.beginPath(), be.moveTo(bB, bB), be.lineTo(bB + Math.cos(aUj) * db, bB + Math.cos(aUj + 1.5 * Math.PI) * db), be.stroke()
	}
	this.b3 = function() {
		if (j.cu) {
			aGp = 0, aX3 = new Uint32Array(j.aQg + 1);
			for (var aL = j.aQg; 0 <= aL; aL--) aX3[aL] = 0;
			for (aL = eA.eB - 1; 0 <= aL; aL--) aX3[cw.cz[eA.eC[aL]]] += 1;
			this.resize()
		} else aX3 = be = canvas = null
	}, this.aIW = function() {
		return aV
	}, this.resize = function() {
		j.cu && (aV = Math.floor(.95 * (b4.b5.b6() && !j.qV ? .18 * bN.min : .13 * bN.bO)), aV = (aV *= 1 + (.5 + .2 * b4.b5.b6()) * j.qV) + aV % 2, gap = Math.max(1, .015 * aV), qs = Math.floor(aV - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = aV, canvas.height = aV, (be = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, be.strokeStyle = bJ.bL, bQ.bR.textAlign(be, 1), bQ.bR.textBaseline(be, 1), adk())
	}, this.w0 = function(adl) {
		adl && adm();
		var bv, adl = this.p7();
		return cw.cy[adl] || (adl = function() {
			for (var p6 = -1, aL = j.aQg; 1 <= aL; aL--)(-1 === p6 || aX3[aL] > aX3[p6]) && (p6 = aL);
			return p6
		}(), bv = cT.cj[h9[0]], -1 !== adl && aX3[adl] > bv) ? aX3[adl] : bv
	}, this.aNy = function() {
		return aGp = 31, this.e6(), this.p7()
	}, this.p7 = function() {
		for (var p6 = 0, aL = j.aQg; 0 < aL; aL--) aX3[aL] > aX3[p6] && (p6 = aL);
		return p6
	}, this.lj = function(aEA) {
		for (var aY = 0, eC = eA.eC, cz = cw.cz, aI = eA.eB, ll = h1.ll, aL = 0; aL < aI; aL++) {
			var aP = eC[aL];
			cz[aP] === aEA && (ll[aY++] = aP)
		}
		h1.lk[0] = aY
	}, this.abJ = function(aEA) {
		for (var aY = 0, eC = eA.eC, cz = cw.cz, aI = eA.eB, ll = h1.ll, aL = 0; aL < aI; aL++) {
			var aP = eC[aL];
			cz[aP] !== aEA && (ll[aY++] = aP)
		}
		h1.lk[0] = aY
	}, this.aMl = function() {
		for (var aY = 0, aL = j.aQg; 0 <= aL; aL--) aY += 0 < aX3[aL];
		return aY
	}, this.e6 = function() {
		j.cu && 32 <= ++aGp && (aGp = 0, adm())
	}, this.qS = function() {
		j.cu && adi && adk()
	}, this.eD = function() {
		j.cu && (j.qV ? eF.drawImage(canvas, bT.gap, bT.gap) : eF.drawImage(canvas, bT.gap, a6I + 2 * bT.gap))
	}
}

function aMV() {
	this.aH8 = new aWG, this.b3 = function() {
		this.aH8.resize()
	}
}

function aM9() {
	var adx = [
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
		ady = [
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
	this.adz = null, this.ae0 = null, this.ae1 = null, this.ae2 = null, this.ae3 = null, this.ae4 = null, this.ae5 = null, this.ae6 = null, this.ae7 = null, this.ae8 = null;

	function aeD(nb, iC) {
		for (var adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, aL = nb; aL < iC; aL++) adz[aL] = hu.hv(64 * gh.random(), gh.value(100)) << 2, ae0[aL] = hu.hv(64 * gh.random(), gh.value(100)) << 2, ae1[aL] = hu.hv(64 * gh.random(), gh.value(100)) << 2
	}

	function aeC(nb, iC) {
		for (var colorsData = j.data.colorsData, adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, aL = nb; aL < iC; aL++) {
			var hm = colorsData[aL];
			adz[aL] = 4 * (hm >> 12), ae0[aL] = 4 * (hm >> 6 & 63), ae1[aL] = 4 * (63 & hm)
		}
	}

	function aeN(e, aeP) {
		aS[e] = 0, aS[e + 1] = 0, aS[e + 2] = aeP, aS[e + 3] = 0, aeQ(e)
	}

	function aeQ(e) {
		var aH;
		j7.a53 || (aH = f.aFt(e), e = f.bm(e), j7.a53 = aH >= a55.a56[0] && aH <= a55.a56[2] && e >= a55.a56[1] && e <= a55.a56[3])
	}
	this.af = new Int32Array(4), this.ag = new Int32Array(8), this.mW = function() {
		var af = this.af,
			af = (af[0] = -4 * v.w, af[1] = 4, af[2] = -af[0], af[3] = -af[1], this.ag);
		af[0] = -4 * v.w - 4, af[1] = -4 * v.w, af[2] = -4 * v.w + 4, af[3] = -4, af[4] = 4, af[5] = 4 * v.w - 4, af[6] = 4 * v.w, af[7] = 4 * v.w + 4
	}, this.b3 = function() {
		if (this.adz ? (this.adz.fill(0), this.ae0.fill(0), this.ae1.fill(0), this.ae2.fill(0), this.ae3.fill(0), this.ae4.fill(0), this.ae5.fill(0), this.ae6.fill(0), this.ae7.fill(0), this.ae8.fill(0), this.kD.fill(0)) : (this.adz =
				new Uint8Array(j.cW), this.ae0 = new Uint8Array(j.cW), this.ae1 = new Uint8Array(j.cW), this.ae2 = new Uint8Array(j.cW), this.ae3 = new Uint8Array(j.cW), this.ae4 = new Uint8Array(j.cW), this.ae5 = new Uint8Array(j.cW), this.ae6 =
				new Uint8Array(j.cW), this.ae7 = new Uint8Array(j.cW), this.ae8 = new Uint8Array(j.cW), this.kD = new Uint8Array(j.cW)), j.cu)
			for (var a71 = cw.a71, adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, aL = j.cW - 1; 0 <= aL; aL--) {
				var bB = a71[aL],
					d7 = hu.hv((ady[bB][3] + 1) * gh.random(), gh.value(100));
				adz[aL] = adx[bB][0] + d7 * ady[bB][0], ae0[aL] = adx[bB][1] + d7 * ady[bB][1], ae1[aL] = adx[bB][2] + d7 * ady[bB][2]
			} else 0 === j.data.colorsType ? j.data.selectableColor ? (aeC(0, j.ck), aeD(j.ck, j.cW)) : aeD(0, j.cW) : aeC(0, j.cW);
		! function() {
			var aL, a0, adz = f.adz,
				ae0 = f.ae0,
				ae1 = f.ae1;
			for (aL = j.cW - 1; 0 <= aL; aL--) a0 = hu.hv(adz[aL] + ae0[aL] + ae1[aL], 3), adz[aL] += aHR(a0 - adz[aL], 2), ae0[aL] += aHR(a0 - ae0[aL], 2), ae1[aL] += aHR(a0 - ae1[aL], 2), adz[aL] -= adz[aL] % 4, ae0[aL] -= ae0[aL] % 4, ae1[
				aL] -= ae1[aL] % 4
		}(),
		function() {
			for (var aI = j.cW, adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, ae2 = f.ae2, aL = 0; aL < aI; aL++) adz[aL] += aL >> 7, ae0[aL] += aL >> 5 & 3, ae1[aL] += aL >> 3 & 3, ae2[aL] = 7 & aL
		}(), this.aeG(),
			function() {
				for (var aI = j.cW, ae3 = f.ae3, ae4 = f.ae4, ae5 = f.ae5, adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, aL = 0; aL < aI; aL++) {
					var db = adz[aL],
						dc = ae0[aL],
						c7 = ae1[aL];
					60 <= db + dc + c7 ? (ae3[aL] = Math.max(db - 40, 3 & db), ae4[aL] = Math.max(dc - 40, 3 & dc), ae5[aL] = Math.max(c7 - 40, 3 & c7)) : (ae3[aL] = db + 40, ae4[aL] = dc + 40, ae5[aL] = c7 + 40)
				}
			}(),
			function() {
				for (var aI = j.cW, ae6 = f.ae6, ae7 = f.ae7, ae8 = f.ae8, adz = f.adz, ae0 = f.ae0, ae1 = f.ae1, aL = 0; aL < aI; aL++) {
					var db = adz[aL],
						dc = ae0[aL],
						c7 = ae1[aL];
					688 <= db + dc + c7 ? (ae6[aL] = db - 88, ae7[aL] = dc - 88, ae8[aL] = c7 - 88) : (ae6[aL] = Math.min(db + 88, 252 + (3 & db)), ae7[aL] = Math.min(dc + 88, 252 + (3 & dc)), ae8[aL] = Math.min(c7 + 88, 252 + (3 & c7)))
				}
			}()
	}, this.tB = function(player) {
		var cK = h1.tD;
		return cK[0] = this.adz[player], cK[1] = this.ae0[player], cK[2] = this.ae1[player], cK
	}, this.aeG = function() {
		for (var aL = j.cW - 1; 0 <= aL; aL--) this.kD[aL] = this.adz[aL] + this.ae0[aL] + this.ae1[aL] < 280 ? 0 : 1
	}, this.aFt = function(e) {
		return hu.hv(e, 4) % v.w
	}, this.bm = function(e) {
		return hu.hv(e, 4 * v.w)
	}, this.yr = function(aH, aJ) {
		return Math.floor(4 * (aJ * v.w + aH))
	}, this.aa3 = function(e) {
		var af = this.af;
		return this.a9i(e + af[0]) || this.a9i(e + af[1]) || this.a9i(e + af[2]) || this.a9i(e + af[3])
	}, this.aUx = function(e) {
		var af = this.af;
		return this.d3(e + af[0]) || this.d3(e + af[1]) || this.d3(e + af[2]) || this.d3(e + af[3])
	}, this.aV4 = function(e, player) {
		var af = this.af;
		return this.i(e + af[0], player) || this.i(e + af[1], player) || this.i(e + af[2], player) || this.i(e + af[3], player)
	}, this.yk = function(aL, aeJ, aeK, aeL) {
		this.adz[aL] = aeJ >> 16, this.ae0[aL] = aeJ >> 8 & 255, this.ae1[aL] = 255 & aeJ, this.ae3[aL] = aeK >> 16, this.ae4[aL] = aeK >> 8 & 255, this.ae5[aL] = 255 & aeK, this.ae6[aL] = aeL >> 16, this.ae7[aL] = aeL >> 8 & 255, this.ae8[aL] =
			255 & aeL
	}, this.yh = function(aL) {
		return [(this.adz[aL] << 16) + (this.ae0[aL] << 8) + this.ae1[aL], (this.ae3[aL] << 16) + (this.ae4[aL] << 8) + this.ae5[aL], (this.ae6[aL] << 16) + (this.ae7[aL] << 8) + this.ae8[aL]]
	}, this.nW = function(e) {
		return 208 <= aS[e + 3]
	}, this.ys = function(player, e) {
		return this.nW(e) && this.a9p(player, e)
	}, this.a9p = function(player, e) {
		return player === this.co(e)
	}, this.a9q = function(e) {
		return 208 <= aS[e + 3] && aS[e + 3] < 224
	}, this.nV = function(e) {
		return 224 <= aS[e + 3] && aS[e + 3] < 248
	}, this.yt = function(e) {
		return 248 <= aS[e + 3]
	}, this.kX = function(e) {
		for (var af = this.af, aL = 3; 0 <= aL; aL--)
			if (this.kV(e + af[aL])) return !0;
		return !1
	}, this.g = function(e) {
		return this.nW(e) || this.cn(e)
	}, this.kV = function(e) {
		return 0 === aS[e + 3] && 2 === aS[e + 2]
	}, this.cn = function(e) {
		return 0 === aS[e + 3] && 1 === aS[e + 2]
	}, this.aK7 = function(e) {
		return 0 === aS[e + 3] && 3 === aS[e + 2]
	}, this.d3 = function(e) {
		return 0 === aS[e + 3] && 5 === aS[e + 2]
	}, this.a9i = function(e) {
		return 0 === aS[e + 3] && 3 <= aS[e + 2]
	}, this.d4 = function(e) {
		return (aS[e] >> 1 << 8) + aS[e + 1]
	}, this.aeM = function(e) {
		return 1 & aS[e]
	}, this.i = function(e, player) {
		return this.cn(e) || this.nW(e) && player !== this.co(e)
	}, this.co = function(e) {
		return ((3 & aS[e]) << 7) + ((3 & aS[e + 1]) << 5) + ((3 & aS[e + 2]) << 3) + (7 & aS[e + 3])
	}, this.aWn = function(e) {
		aeN(e, 1)
	}, this.aeO = function(e) {
		aeN(e, 2)
	}, this.yv = function(e, player) {
		aS[e] = this.adz[player], aS[e + 1] = this.ae0[player], aS[e + 2] = this.ae1[player], aS[e + 3] = 208 + this.ae2[player], aeQ(e)
	}, this.yu = function(e, player) {
		aS[e] = this.ae3[player], aS[e + 1] = this.ae4[player], aS[e + 2] = this.ae5[player], aS[e + 3] = 224 + this.ae2[player], aeQ(e)
	}, this.nX = function(e, player) {
		aS[e] = this.ae6[player], aS[e + 1] = this.ae7[player], aS[e + 2] = this.ae8[player], aS[e + 3] = 248 + this.ae2[player], aeQ(e)
	}
}

function xr() {
	function aeR(aL, type, xV, xU) {
		hk.buffer.data.push({
			hy: aL,
			type: type || 0,
			value: xV || 0,
			xV: xV || 0,
			xU: xU || 0
		})
	}

	function aeS(aL, type, xV, xU) {
		hk.buffer.data.push({
			hy: aL,
			type: type,
			value: xV || "",
			xV: xV || "",
			xU: xU || 0
		})
	}

	function aeT(iC) {
		for (var aL = hk.buffer.data.length; aL < iC; aL++) hk.buffer.data.push(null)
	}
	this.data = [], this.b3 = function() {
		aeR(0, 1, 0, 5), aeR(1, 1, 1), aeR(2, 0), aeS(3, 2), aeR(4, 1), aeS(5, 2, "system-ui", 2), aeR(6, 0), aeR(7, 0, 0), aeR(8, 0), aeR(9, 1, 1), aeR(10, 1), aeR(11, 1, 1), aeS(12, 2, navigator.language), aeR(13), aeR(14), aeR(15, 0, 1), aeR(
				16, 0, 3), aeT(100), aeS(100, 2), aeS(101, 2), aeS(102, 2), aeS(103, 2), aeS(104, 2), aeS(105, 2), aeS(106, 2), aeR(107), aeR(108), aeR(109), aeS(110, 2), aeR(111), aeR(112), aeR(113), aeS(114, 2), aeR(115), aeS(116, 2), aeR(117,
				1), aeS(118, 2, "", 2), aeR(119, 1, 0, 1), aeS(120, 2), aeR(121, 1, ~~(262144 * Math.random())), aeS(122, 2, "Player " + Math.floor(1e3 * Math.random())), aeR(123), aeS(124), aeR(125, 1), aeS(126, 2), aeR(127, 0, 1), aeR(128),
			aeR(129), aeR(130), aeR(131), aeR(132), aeS(133, 2), aeR(134, 0, 5), aeS(135, 2), aeS(136, 2), aeR(137), aeR(138), aeR(139), aeR(140), aeR(141), aeR(142), aeR(143), aeR(144), aeS(145, 2), aeR(146), aeR(147), aeS(148, 2), aeR(149),
			aeR(150, 0, 1), aeS(151, 2), aeR(152, 0, 5), aeR(153, 1), aeR(154, 1), aeS(155, 2), aeS(156, 2), aeR(157), aeR(158), aeR(159), aeR(160), aeS(161, 2), aeR(162, 0, 1024), aeS(163, 2, "0,0,0"), aeS(164, 2, "100,100,100"), aeS(165, 2,
				"30,30,30"), aeS(166, 2, "70,70,70"), aeS(167, 2, "100,100,100"), aeS(168, 2, "85,85,85"), aeS(169, 2, "100,100,100");
		for (var aL = 0; aL < 4; aL++) aeS(170 + aL, 2, "255,255,255");
		aeS(174, 2), aeS(175, 2), aeR(176, 0, 200), aeT(180), aeR(180, 0), aeR(181, 0), aeR(182, 0, 1023), aeS(183, 2)
	}, this.gE = function(hy, value) {
		this.data[hy].value = value
	}, this.hq = function(hy, value) {
		this.gE(hy, value);
		var value = String(value),
			aI = value.length;
		5e4 < aI ? console.log("storage value too large: index " + hy + " size " + aI) : (hk.os.save(hy, value), hk.os.save(hy, String(this.data[hy].xU), !0))
	}, this.a4r = function(hy) {
		return Number(this.data[hy].value)
	}, this.aeU = function(hy) {
		return String(this.data[hy].value)
	}
}

function aMZ() {
	function aeV(l0) {
		a0o(l0), f1.g9(4, 5, new a4x("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new g0("⬅️ " + L(61), function() {
				f1.oX()
			}), new g0("🔄 Reload", function() {
				b4.b5.a4t()
			}, bJ.bf)]))
	}

	function aeb(l0) {
		a0o(l0), f1.g9(4, 5, new a4x(L(546), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [l0] ?? aeZ(l0), !0))
	}

	function aeZ(l0) {
		var bV = " [" + l0 + "]";
		return 3249 === l0 || 1006 === l0 ? "No Internet / No Server Response / Server Restart" + bV : 4527 === l0 ? "Player already in lobby" + bV : 4577 === l0 ? "Your IP is banned." + bV : 4530 === l0 ? "Lobby Timeout" + bV : 4528 === l0 ?
			"Lobby Kick: Another login detected." + bV : 4540 === l0 ? "You have been kicked." + bV : 4495 === l0 ? "Account doesn't exist." : 4229 === l0 ? "Bad Internet / Unresponsive Client" + bV : 4555 === l0 ? "This Account is blocked." + bV :
			4580 === l0 ? "More Gold needed" + bV : 4557 <= l0 && l0 <= 4560 || 4589 == l0 ? "Please try again later!" + bV : 4591 === l0 ? "The algo determined you are a bot." + bV : "Unknown error" + bV
	}

	function a0o(l0) {
		aeW(l0), f1.d9.f2()
	}

	function aeW(l0) {
		4540 === l0 && el.d9.f0(l0);
		var k6 = eg.f3();
		a1s.close(), 6 === k6 ? el.d9.f0(l0) : jl.aBc ? (f1.q7(), jl.iA(), el.d9.close(el.d9.uk, 3256)) : 8 === k6 && j.aTk(!0)
	}
	this.aFY = [], this.vI = function(es, l0) {
		if (1 === es && __fx.customLobby.isActive() && 6 !== eg.f3() && __fx.customLobby.setActive(!1), this.aFY.push(l0), 4321 === l0 && (data = hk.d9.n5(0), console.log("Reset to: " + data.jQ), hk.mz.gE(105, data.jQ), hk.mz.gE(106, data
				.password)), 8 === f1.mQ && 0 === es)
			if (4211 === l0) aeV(l0);
			else {
				if (jl.aBc && (4495 === l0 || 4480 === l0) && el.d9.uk !== es) return void f1.oX();
				if (8 !== eg.f3() && aeW(), 4480 === l0) return hk.mz.a95(), void f1.g9(4, 0, new a4x(L(548), L(549), !0));
				var data = 0;
				f1.mR() && 10 === f1.mR().pe && (data = f1.mR().pe), f1.g9(4, data, new a4x(L(546), aeZ(l0), !0))
			}
		else {
			data = eg.f3();
			if (6 === data) {
				if (4211 === l0) return void aeV(l0);
				if (4215 !== l0 && 4516 !== l0 && 4527 !== l0 && 4533 !== l0 && 4528 !== l0 && !(4557 <= l0 && l0 <= 4560) && 4577 !== l0 && 4576 !== l0) return void en.er(es)
			} else if (jl.aBc) {
				if (es !== el.d9.uk) return
			} else {
				if (8 === data) return void(es !== el.d9.uj || j.iv || 1 !== j.e5 || j.cp || bp.cf(L(547, [l0])));
				if (!(4579 <= l0 && l0 <= 4589)) return
			}(4591 === l0 ? function(l0) {
				a0o(l0), f1.g9(4, 5, new a4x("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new g0("⬅️ " + L(61), function() {
					f1.oX()
				}), new g0("🔄 Reload", function() {
					b4.b5.a4t()
				}, bJ.bf)]))
			} : aeb)(l0)
		}
	}, this.ew = function(l0) {
		this.aFY.push(l0), 8 === eg.f3() ? j.iv || 1 !== j.e5 || bp.cf(L(547, [l0])) : aeb(l0)
	}, this.aFa = function() {
		this.aFY.push(3268), a0o(3268)
	}
}

function abb() {
	function aee(player, a4K) {
		a4K = n.gs(d8.d9.gt[a4K]), a4K = f.d4(n.yc(a4K));
		return !!d8.ge.aV1(player, a4K)
	}

	function aec(player) {
		return d8.gR.gS(player) && !d8.a0q.a0w()
	}
	this.a8P = function(player, c3) {
		return !!aec(player) && -1 !== (c3 = function(player, c3) {
			for (var aI = d8.d9.wr, gt = d8.d9.gt, dA = d8.d9.dA, aEB = n.o(), aOp = -1, aL = 0; aL < aI; aL++) {
				var ao = n.a4I(c3, n.gs(gt[aL]));
				ao < aEB && bQ.by.aMk(player, dA[aL] >> 3) && (aEB = ao, aOp = aL)
			}
			return aOp
		}(player, c3)) && !!aee(player, c3) && (h1.h2[3] = d8.d9.gj[c3], !0)
	}, this.aLY = function(player, c9) {
		return !!aec(player) && !!d8.ge.a42(c9) && !!aee(player, h1.h2[2])
	}, this.go = function(player, c9, aef) {
		return !! function(player, c9, aef) {
			if (aec(player) && d8.ge.a42(c9)) {
				c9 = h1.h2[2];
				if (bQ.by.aMk(player, d8.d9.dA[c9] >> 3)) {
					if (function(player, a4K) {
							return d8.ge.aYr(player, a4K) && (h1.cK[0] = d8.a0q.a0y(d8.d9.a4A[a4K]), h1.h2[1] = 6, !0)
						}(player, c9)) return 1;
					var gr = n.gs(d8.d9.gt[c9]),
						aRQ = d8.ge.aRR(player, gr);
					if (-1 !== aRQ) {
						aRQ = n.a4I(aRQ, gr);
						if (!(aef && 120 < aRQ)) {
							aef = function(a4K, aej, gr) {
								var a0p = d8.d9.a4A[a4K],
									a4K = d8.d9.a4F[a4K],
									ael = n.a4I(gr, a0p[a4K + 1]);
								if (aej <= ael) return d8.ge.aYs(gr, a0p[a4K + 1], ael, aej);
								for (var ao = aej - ael, aI = a0p.length - 1, aL = a4K + 1; aL < aI; aL++) {
									var aem = n.a4I(a0p[aL], a0p[aL + 1]);
									if (ao <= aem) return d8.ge.aYs(a0p[aL], a0p[aL + 1], aem, ao);
									ao -= aem
								}
								return a0p[aI]
							}(c9, aRQ, gr);
							if (d8.a0Z.a0a(player, aef, 1)) return h1.h2[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, c9, aef) && (player = h1.h2[2], d8.d9.tt[player] = 64 + d8.d9.tt[player] % 64, d8.gk.cR(c9, d8.d9.aDY), !0)
	}
}
aFQ(), self.aiCommand746 = function(hm) {
	0 === hm ? aKM() : 1 !== hm || !b4 || 1 !== b4.id || b4.xU < 14 || l3.aKN()
}, setTimeout(aKM, 1e4), window.onload = function() {
	aKM()
};