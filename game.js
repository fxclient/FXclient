var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, t, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, a0, bk, bl, bm, o, bn, bo, bp, bq, br, bs, bt, bu, fy, fz, g0, g1, g2, g3, g4, g5, g6, g7, g8, g9, gA, iJ,
	il, im, a96, m4, kE, a2f, vg, zF, aDB, a5q, a5r, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "rgb(", "center", "0.8em", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span", "email", "Data", " / ",
		"territorial.io", "0.5em", "pre", "password", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==",
		"click", "undefined", "middle", "break-word", "50%", "0.6em", "underline", "text", "scroll", "pointer", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number",
		"nowrap", "mouseleave", "inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ",
		"  • ", "   Gold: ", "🔄 Reload", "⚠️ ", "wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder",
		"mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]",
		"Zombie", "Seed", "Remove Punishments", "Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "@room", "255,255,255", "1v1",
		"1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,",
		",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	var b, c;

	function q() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a3, b.onclose = function() {
			a4()
		}
	}

	function a3() {
		if (b && b.readyState === b.OPEN) {
			var i = new a6;
			i.a7(1608), i.a8(1, 0), i.a8(6, 7), i.a8(2, a0 ? a0.id : 3), i.a8(1, l.a9 ? 1 : 0), i.a8(1, l.aA ? 1 : 0), i.a8(1, l ? l.m : 0);
			for (var aB = 0; aB < c.length && aB < 228; aB++) i.a8(7, c.charCodeAt(aB) % 128);
			b.send(i.aC), a4()
		}
	}

	function a4() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		c = "";
		try {
			return window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
				if (!e.error) return "NoStack";
				var stack = e.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, a5 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a5.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(e), __fx.reportError(e, c), alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message)
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		q()
	})
}

function bv(bw) {
	l && !bw || (by(), bN = new bz, bM = new c0, bC = new c1, bD = new c2, aD = new c3, b9 = new c4, bH = new c5, bI = new c6, aE = new c7, aF = new c8, aG = new c9, aH = new cA, aI = new cB, aJ = new cC, aK = new cD, aL = new cE, aM = new cF, aN =
		new cG, aO = new cH, aP = new cI, aQ = new cJ, aR = new cK, aS = new cL, aT = new cM, aU = new cN, aV = new cO, aW = new cP, aX = new cQ, aY = new cR, aZ = new cS, aa = new cT, ab = new cU, ac = new cV, ak = new cW, al = new cX, an =
		new cY, am = new cZ, ad = new ca, ae = new cb, ah = new cc, af = new cd, ag = new ce, ai = new cf, az = new cg, aj = new ch, ap = new ci, aq = new cj, ar = new ck, b0 = new cl, ay = new cm, ao = new cn, at = new co, au = new cp, av =
		new cq, h = new cr, aw = new cs, ax = new ct, b1 = new cu, b2 = new cv, b3 = new cw, b4 = new cx, b5 = new cy, b6 = new cz, b7 = new d0, b8 = new d1, bA = new d2, bB = new d3, bE = new d4, bF = new a6, bG = new d5, bJ = new d6, bK =
		new d7, bL = new d8, bO = new d9, bP = new dA, bQ = new dB, bR = new dC, bS = new dD, bT = new dE, bU = new dF, bV = new dG, t = new dH, bW = new dI, a0 = new dJ, l = new dK, bk = new dL, bl = new dM, bi = new dN, bj = new dO, bc =
		new dP, bd = new dQ, bX = new dR, bY = new dS, bf = new dT, bg = new dU, bh = new dV, bm = new dW, be = new dX, o = new dY, bn = new dZ, bo = new da, bp = new db, br = new dc, bs = new dd, bt = new de, bu = new df, l.dh(), a0.dh(), h
	.di(), bl.dh(), b9.dh(), b9.dj(), (bZ = new dk).dh(), bC.dh(), bX.dh(), b0.dh(), bH.dh(), bI.dh(), bU.dh(), t.dh(), ba = new dl, h.dh(), bh.dh(), be.dh(), bY.dh(), bb = new dm, ay.dh(), ae.dn(), bW.dh(), ap.dh(), aa.dh(), aT.dh(), ai.dh(), bL
		.dh(), ab.dh(), bh.dp = !0, setTimeout(function() {
			bU.a7(2, 14071)
		}, 0), t.u(5, 5), bK.dq() || a0.a1.dr(), h.ds(), l.m = 1)
}

function dK() {
	this.dt = 1126;
	this.rVersion = 21, this.dx = 0, this.dh = function() {
		this.dy = 2;
		this.n = "2.15.31", this.e0 = "31 May 2026 [" + this.n + "]";
		var e1 = window.location.hostname.toLowerCase();
		this.a9 = !0, this.e2 = 0 <= e1.indexOf("game.territorial.io"), this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.e4 = (new Date).getTime() % 1048576
	}, this.m = 0
}

function e5() {
	var e6 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e7 = [100, 60, 30, 15, 6, 1],
		e8 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e9 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eB = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eC = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.eD = function(id, eE, eF) {
		eE = this.eG(eE);
		return +(e8[eE][id] > eF)
	}, this.eG = function(eE) {
		for (var aB = 0; aB < e7.length; aB++)
			if (e7[aB] <= eE) return aB;
		return e7.length
	}, this.eH = function(eE) {
		return e6[this.eG(eE)]
	}, this.eI = function(id, eJ) {
		return e9[id].replace(new RegExp("x", "g"), eJ)
	}, this.eK = function(id, eJ) {
		return eB[id].replace(new RegExp("x", "g"), eJ)
	}, this.eL = function(id, eM) {
		return this.eC[5][id]
	}
}

function dI() {
	this.eN = new eO, this.eP = new eQ, this.dh = function() {
		a0.a1.eR()
	}, this.eS = function() {
		return bl.eT.data[160].value
	}
}

function eO() {
	var eU = 12e3;
	this.show = function(eV) {
		return !eV && !bW.eS() && (0 === a0.id ? bW.eP.show() : !(bh.eW < eU) && (eV = 1 === a0.id ? 72e4 : 108e4, eU = bh.eW + eV, 2 === l.dy) && a0.a1.eY(Math.floor(eV)))
	}
}

function eQ() {
	var eZ = null,
		eU = 2e4,
		ea = 0;
	this.eb = function() {
		bh.eW < eU || (eU = bh.eW + 1e4, 0 !== a0.id) || eZ || bW.eS() || (b0.y.ec(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b0.ed.ee(5) : eU = bh.eW + 1e3)
	}, this.ef = function(eg) {
		eZ = eg
	}, this.show = function() {
		return !(!eZ || bh.eW < ea) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ea = bh.eW + 6e4, (new eh).show(eZ.ei, eZ.colors, eZ.id), !(eZ = null)))
	}
}

function cZ() {
	this.ej = new ek
}

function ek() {
	this.el = function(em) {
		var ep;
		return bU.en(bU.eo) && aD.data.passableMountains && (ep = ac.eq(em), this.er(aD.es, ep) || this.et(aD.es, ep)) && 0 !== (ep = function(fE) {
			for (var fF = bO.fG(fE), fH = bO.fI(fE), max = Math.max(bU.fJ, bU.fK) - 2, fL = max * max, fM = !1, fN = 0, fO = 0; fO < max; fO++) {
				var fP, eu = function(fF, fH, fO) {
					for (var aB = 0; aB <= fO; aB++)
						for (var fR = -1; fR < 2; fR += 2)
							for (var fS = -1; fS < 2; fS += 2)
								for (var eg = 0; eg < 2; eg++) {
									var em = function(fF, fH) {
										if (bO.fU(fF, fH)) {
											fF = bO.fV(fF, fH), fH = bO.ey(fF);
											if (ac.f3(fH) && ac.fW(fH)) return fF
										}
										return 0
									}(fF + eg * fR * aB + (1 - eg) * fS * fO, fH + eg * fS * fO + (1 - eg) * fR * aB);
									if (em) return em
								}
					return 0
				}(fF, fH, fO);
				eu && (fP = bO.fQ(fF, fH, eu)) < fL && (fN = eu, fL = fP, fM || (fM = !0, max = Math.floor(Math.sqrt(fP)) + 1))
			}
			return fN
		}(bO.ew(em))) && (em = bO.ey(ep), ac.ez(em) || (em = ac.f0(em)) !== aD.es && bu.f1(em, aD.es)) ? ep : 0
	}, this.f2 = function(player, eu) {
		eu = bO.ey(eu);
		if (ac.f3(eu)) {
			if (ac.ez(eu)) bQ.f4[0] = aD.f5;
			else if (ac.f0(eu) !== bQ.f4[0]) return !1;
			for (var f6 = function(em) {
					var fA = ac.fA,
						f6 = [];
					loop: for (var fB = 3; 0 <= fB; fB--) {
						var fC = em + fA[fB];
						if (ac.fD(fC)) {
							for (var id = ac.eq(fC), aB = 0; aB < f6.length; aB++)
								if (id === f6[aB]) continue loop;
							bQ.f9[f6.length] = fC, f6.push(id)
						}
					}
					return f6
				}(eu), f8 = f6.length, aB = 0; aB < f8; aB++)
				if (this.er(player, f6[aB]) || this.et(player, f6[aB])) return bQ.f9[0] = bQ.f9[aB], !0
		}
		return !1
	}, this.er = function(player, ep) {
		for (var fX = ag.fX[player], f8 = fX.length, fY = Math.max(bN.fZ(f8, 12), 1), fA = ac.fA, aB = 0; aB < f8; aB += fY)
			for (var ex = fX[aB], fB = 3; 0 <= fB; fB--) {
				var fC = ex + fA[fB];
				if (ac.fD(fC) && ep === ac.eq(fC)) return !0
			}
		return !1
	}, this.et = function(player, ep) {
		for (var fX = ag.fX[player], f8 = fX.length, fA = ac.fA, aB = 0; aB < f8; aB++)
			for (var ex = fX[aB], fB = 3; 0 <= fB; fB--) {
				var fC = ex + fA[fB];
				if (ac.fD(fC) && ep === ac.eq(fC)) return !0
			}
		return !1
	}
}

function dB() {
	this.g = new Array(4), this.fc = new Uint16Array(2), this.fd = new Uint16Array(2), this.fe = new Int32Array(2), this.ff = new Uint32Array(2), this.fg = new Uint32Array(2), this.fh = new Uint8Array(4), this.fi = new Uint8Array(4), this.f9 =
		new Uint32Array(4), this.fj = new Uint32Array(5), this.f4 = new Uint32Array(8), this.fk = new Uint32Array(8), this.fl = new Uint16Array(16), this.fm = new Uint16Array(512), this.fn = new Uint16Array(512), this.fo = new Uint16Array(512), this
		.fp = new Uint16Array(0), this.dh = function() {
			var f8 = bU.fJ * bU.fK;
			this.fp.length !== f8 && (this.fp = new Uint16Array(f8))
		}, this.fq = function(g, fr) {
			return g[0] = fr, g
		}, this.fs = function(g, fr, ft) {
			return g[0] = fr, g[1] = ft, g
		}, this.fu = function(g, fr, ft, fv) {
			return g[0] = fr, g[1] = ft, g[2] = fv, g
		}, this.fw = function(g, fr, ft, fv, fx) {
			return g[0] = fr, g[1] = ft, g[2] = fv, g[3] = fx, g
		}
}

function gB() {
	g4 = 0, g5 = 2048, g6 = new Uint32Array(4 * g5), g7 = 0, g8 = new Uint32Array(g5), g9 = new Uint8Array(bU.fJ * bU.fK)
}

function gC(player) {
	fz = player, gA = !1, gD(), gE();
	for (var aB = ad.gF(fz) - 1; 0 <= aB; aB--) fy = aB, gG();
	gA && gH()
}

function gH() {
	bu.gI(), bu.gJ()
}

function gG() {
	g3 = ad.gK(fz, fy), g0 = ad.gL(fz, fy), g1 = ad.gM(fz, fy), gN(), (0 !== g4 && (gP(), gQ()) ? gR : gO)()
}

function gQ() {
	if (!((g2 = bN.fZ(g0, g4)) > aD.gS)) {
		if (!g1) return !1;
		var gT = g4 * (1 + aD.gS);
		g0 += bC.gU.gV(fz, gT - g0), g2 = bN.fZ(g0, g4)
	}
	return !0
}

function gP() {
	for (var aB = g4 - 1; 0 <= aB; aB--) g9[bN.fZ(g6[aB], 4)] = 0
}

function gO() {
	1 === ad.gF(fz) && aF.gW(fz);
	var eX = bC.gU.gX(fz, g0);
	bf.gY(fz, g0 - eX, 12), ad.gZ(fz, fy)
}

function gD() {
	for (var player = fz, ga = ag.ga, f8 = Math.min(ga[player].length, g5), gb = 0, gc = g8, aB = f8 - 1; 0 <= aB; aB--) gc[gb++] = ga[player][aB];
	g7 = gb
}

function gE() {
	for (var aB = ag.ga[fz].length - 1; 0 <= aB; aB--) ac.f3(ag.ga[fz][aB]) && ac.gd(ag.ga[fz][aB], fz);
	ag.ga[fz] = []
}

function gN() {
	g4 = 0, (g3 === aD.f5 ? ge : gf)()
}

function gf() {
	for (var gg, gh, aB, fA = ac.fA, fB = 3; 0 <= fB; fB--)
		for (aB = g7 - 1; 0 <= aB; aB--) gg = g8[aB] + fA[fB], gh = bN.fZ(gg, 4), 0 === g9[gh] && ac.gi(gg) && ac.f0(gg) === g3 && (g9[gh] = 1, g6[g4++] = gg)
}

function ge() {
	for (var gg, gh, aB, fA = ac.fA, fB = 3; 0 <= fB; fB--)
		for (aB = g7 - 1; 0 <= aB; aB--) gg = g8[aB] + fA[fB], gh = bN.fZ(gg, 4), 0 === g9[gh] && ac.ez(gg) && (g9[gh] = 1, g6[g4++] = gg)
}

function gR() {
	gj() ? (gk(), g3 !== aD.f5 && gl()) : gO()
}

function gl() {
	bu.gm(), bu.gn(ag.go[g3]), bu.gn(ag.gp[g3]), bU.en(bU.eo) && bu.gn(ag.fX[g3]), bu.gq(ag.ga[g3]), bu.gr(ag.gp[g3]), bu.gr(ag.fX[g3]), bu.gs(), bu.gt()
}

function gk() {
	gA = !0, ad.gu(fz, fy, g0), ad.gv(fz, fy), ag.gw[fz] += g4, bu.gx(), gy()
}

function gj() {
	return (g3 === aD.f5 ? gz : h0)()
}

function h0() {
	var h1 = g4 * aD.gS,
		h2 = h3(),
		h4 = h5(),
		h2 = h1 + 2 * h2 + h4,
		h7 = g2 * g4;
	return h2 < h7 ? (g0 -= h2, bf.gY(fz, h2, 13), h8(h2 - h1, h4), !0) : g1 && 0 === h4 ? (g0 -= h7, h7 += bC.gU.gV(fz, h2 - h7 + 1), bf.gY(fz, h7, 13), h8(h7 - h1, 0), !0) : (g0 -= h7, bf.gY(fz, h7, 13), h8(h7 - h1, h4), !1)
}

function h8(h7, h4) {
	if (0 < h4) {
		if (h7 <= h4) return bf.gY(g3, h7, 13), void ad.h9(g3, fz, h4 - h7);
		ad.h9(g3, fz, 0), h7 -= h4
	}
	h7 = bN.fZ(h7, 2), h7 = Math.min(ag.hA[g3], h7), bf.gY(g3, h7, 13), ag.hA[g3] -= h7
}

function h5() {
	return ad.hB(g3, fz)
}

function h3() {
	return bN.fZ(g4 * ag.hA[g3], 1 + bN.fZ(10 * ag.gw[g3], 16))
}

function gz() {
	var hC = g4 * aD.gS;
	return g0 -= hC, bf.gY(fz, hC, 13), !0
}

function gy() {
	for (var aB = g4 - 1; 0 <= aB; aB--) ag.ga[fz].push(g6[aB]), ag.go[fz].push(g6[aB]), ac.gd(g6[aB], fz)
}

function dG() {
	var hD = 0,
		hE = 0;
	this.hF = function(fF, fH) {
		hD = fF, hE = fH
	}, this.hG = function(code) {
		var hN, hP, eu;
		aD.hH || aM.hI || (bC.gU.hJ(0) || bC.gU.hJ(1)) && bC.gU.hK(aD.es) && (aR.hL(hD, hE) ? aR.hM = !1 : aP.hL(hD, hE) || (hN = bO.hO(hD), hP = bO.hQ(hE), eu = bO.fV(hN, hP), bO.hR(hN, hP) && (0 === code ? function(eu) {
			var hV, em, ex;
			aD.hW ? -1 !== (hV = bt.hX(eu)) && bA.hY.hZ(eu) : (em = bO.ey(eu), ac.fD(em) ? (hV = am.ej.el(em)) && (ex = bO.ey(hV), ex = ac.ez(ex) ? aD.f5 : ac.f0(ex), bA.hY.hb(aR.hc(), hV, ex)) : (hV = bt.hd(eu)) < 0 || (em = bO
				.ey(hV), ac.ez(em) ? bu.he(aD.es) ? bA.hY.hf(aR.hc(), aD.f5) : ad.gF(aD.es) && b1.hg(aD.f5, aR.hc()) : (ex = ac.f0(em), bu.f1(ex, aD.es) && (bu.hh(aD.es, ex) ? bA.hY.hf(aR.hc(), ex) : ad.gF(aD.es) && b1.hg(
					ex, aR.hc())))))
		}(eu) : 1 === code ? function(eu) {
			bP.hi.hj(aD.es, eu) && bA.hY.hk(aR.hc(), bQ.fk[7])
		}(eu) : 2 === code && function(eu) {
			bP.hl.hm(aD.es, eu) && bA.hY.hn(aR.hc())
		}(eu))))
	}, this.ho = function() {
		if (!aD.hH && !aM.hI && bC.gU.hJ(1)) {
			var gg = aD.es;
			if (bC.gU.hK(gg)) {
				var f8 = ad.gF(gg);
				if (f8 < 1) ! function() {
					var gg = aD.es;
					if (bu.he(gg)) bA.hY.hf(aR.hc(), aD.f5);
					else
						for (var fA = ac.fA, go = ag.go, f8 = go[gg].length, hy = Math.floor(Math.random() * f8), aB = 0; aB < f8; aB++)
							for (var hz = 3; 0 <= hz; hz--) {
								var i0 = go[gg][(aB + hy) % f8] + fA[hz];
								if (ac.gi(i0)) {
									i0 = ac.f0(i0);
									if (i0 !== gg && (!aD.i2 || bu.f1(gg, i0))) return bA.hY.hf(aR.hc(), i0)
								}
							}
				}();
				else {
					for (var hq = 0, hr = ad.gL(gg, 0), aB = 1; aB < f8; aB++) {
						var hs = ad.gL(gg, aB);
						hs < hr && (hr = hs, hq = aB)
					}
					bA.hY.hf(aR.hc(), ad.gK(gg, hq))
				}
			}
		}
	}, this.ht = function() {
		if (!aD.hH && !aM.hI && bC.gU.hK(aD.es) && bC.gU.hJ(1)) return aw.hu ? aw.hv(aD.es) ? void bA.hY.hw(1) : void 0 : void(aw.hx(aD.es) && bA.hY.ht())
	}
}

function i3(i4, size, i5, i6, font) {
	var aB, i9 = .2,
		canvas = document.createElement("canvas"),
		iA = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = i4, canvas.height = i4, iA.font = size + font, iA.textAlign = "center", iA.textBaseline = "middle", iA.fillStyle = "red", aB = 0; aB < i5.length; aB++) iA.fillText(i5[aB], .5 * i4, .5 * i4);
	return -1 < (canvas = function(i7) {
		var aB, eE, fB = i7.data;
		for (aB = fB.length - 4; 0 <= aB; aB -= 4)
			if (eE = fB[aB], i6 <= eE) return Math.floor(aB / (4 * i4));
		return -1
	}(iA.getImageData(0, 0, i4, i4))) && (i9 = (canvas - .5 * i4 + .1 * size) / size), Math.max(i9, 0)
}

function d9() {
	this.iC = new Int16Array(4), this.iD = new Int16Array(4), this.iE = null, this.dh = function() {
		var aB;
		for (this.iC[0] = -bU.fJ, this.iC[1] = 1, this.iC[2] = bU.fJ, this.iC[3] = -1, this.iE = new Int16Array([-bU.fJ, 1 - bU.fJ, 1, bU.fJ + 1, bU.fJ, bU.fJ - 1, -1, -bU.fJ - 1]), aB = 0; aB < 4; aB++) this.iD[aB] = 4 * this.iC[aB]
	}, this.iF = function() {
		return bN.iG(Math.floor(.15 * (1 + .25 * a0.a1.iH()) * h.iI / iJ), 4, 128)
	}, this.iK = function(em, id) {
		for (var iL = this.iD, aB = 0; aB < 4; aB++) {
			var ex = em + iL[aB];
			if (ac.iM(ex) && ac.eq(ex) === id) return !0
		}
		return !1
	}, this.iN = function(player, em) {
		return !ac.ez(em) && player === ac.f0(em)
	}, this.fQ = function(hN, hP, eu) {
		return (hN -= this.fG(eu)) * hN + (hP -= this.fI(eu)) * hP
	}, this.iO = function(iP, iQ, iR) {
		iP = this.iT(iP) - this.iU(iR), iQ = this.iW(iQ) - this.iX(iR);
		return Math.sqrt(iP * iP + iQ * iQ)
	}, this.iY = function(iZ, ia) {
		var iS = this.fG(iZ) - this.fG(ia),
			iZ = this.fI(iZ) - this.fI(ia);
		return ~~Math.sqrt(iS * iS + iZ * iZ + .5)
	}, this.ib = function(iZ, ia) {
		var iS = this.fG(iZ) - this.fG(ia),
			iZ = this.fI(iZ) - this.fI(ia);
		return iS * iS + iZ * iZ
	}, this.ic = function(ie, ig, ih, ii) {
		return (ie -= ih) * ie + (ig -= ii) * ig
	}, this.ij = function(gg, ik) {
		return bN.fZ(ik * ag.hA[gg], 1e3)
	}, this.iT = function(iP) {
		return 16 * (iP + il) / iJ
	}, this.iW = function(iQ) {
		return 16 * (iQ + im) / iJ
	}, this.io = function(fB) {
		return 16 * fB / iJ
	}, this.hO = function(iP) {
		return Math.floor((iP + il) / iJ)
	}, this.hQ = function(iQ) {
		return Math.floor((iQ + im) / iJ)
	}, this.hR = function(hN, hP) {
		return 1 <= hN && 1 <= hP && hN < bU.fJ - 1 && hP < bU.fK - 1
	}, this.fG = function(eu) {
		return eu % bU.fJ
	}, this.fI = function(eu) {
		return bN.fZ(eu, bU.fJ)
	}, this.fV = function(hN, hP) {
		return hP * bU.fJ + hN
	}, this.ip = function(hN, hP) {
		return 4 * this.fV(hN, hP)
	}, this.iq = function(eu) {
		return this.fU(this.fG(eu), this.fI(eu))
	}, this.fU = function(hN, hP) {
		return 0 < hN && hN < bU.fJ - 1 && 0 < hP && hP < bU.fK - 1
	}, this.ey = function(eu) {
		return eu << 2
	}, this.ew = function(em) {
		return em >> 2
	}, this.ir = function(eu) {
		return bU.fJ * this.fI(eu) * 256 + (this.fG(eu) << 4)
	}, this.is = function(eu) {
		return this.ir(eu) + 8 + (bU.fJ << 7)
	}, this.it = function(iR) {
		return bU.fJ * (this.iX(iR) >> 4) + (this.iU(iR) >> 4)
	}, this.iu = function(iR) {
		iR = this.it(iR);
		return (this.fG(iR) >> 5) + bP.iv.iw * (this.fI(iR) >> 5)
	}, this.iU = function(iR) {
		return iR % (bU.fJ << 4)
	}, this.iX = function(iR) {
		return bN.fZ(iR, bU.fJ << 4)
	}, this.ix = function(eu, hz) {
		return eu + this.iC[hz]
	}, this.iy = function(em, hz) {
		return em + this.iD[hz]
	}, this.iz = function(iZ, ia) {
		var iS = this.fG(ia) - this.fG(iZ),
			ia = this.fI(ia) - this.fI(iZ);
		return Math.abs(iS) >= Math.abs(ia) ? 1 + 2 * (iS < 0) : 2 * (0 < ia)
	}, this.j0 = function(player) {
		return this.fV(ag.j1[player] + ag.j2[player] >> 1, ag.j3[player] + ag.j4[player] >> 1)
	}, this.j5 = function(player) {
		return this.fV(ay.j6(ag.j1[player], ag.j2[player]), ay.j6(ag.j3[player], ag.j4[player]))
	}
}

function cn() {
	this.j7 = new j8, this.j9 = new jA, this.jB = new jC, this.performance = new jD, this.jE = new jF, this.jG = new jH, this.jI = new jJ, this.jK = new jL, this.jM = new jN, this.dh = function() {
		this.j7.dh(), this.jB.dh(), this.performance.dh(), this.jE.dh(), this.jG.dh()
	}, this.eb = function() {
		this.performance.eb(), this.j7.eb(), this.jB.jO()
	}
}

function jF() {
	var jP, jR = new Uint16Array(8);

	function jZ(size, player) {
		for (var aB = ag.ga[player].length - 1; size <= aB; aB--) ac.jf(ag.ga[player][aB], player)
	}
	this.dh = function() {
		jP = 0
	}, this.jS = function(player, jT) {
		return bQ.f4[1] = ag.ga[player].length, bQ.f4[0] === aD.f5 ? ao.jE.jU(player) : this.jV(player, bQ.f4[0]), (0 !== bQ.f4[1] || 0 !== ag.ga[player].length) && !(!jT && bQ.f4[1] === ag.ga[player].length || (bQ.f4[0] === aD.f5 ? ag.jW[
			player]++ : ag.jX[player]++, 0))
	}, this.jY = function(player) {
		jZ(bQ.f4[1], player), ad.ef(player, bQ.ff[0], bQ.f4[0]), aF.ja(player, !1)
	}, this.jb = function(player, jc, f8, hr) {
		var jd = bN.fZ(12 * ag.hA[player], 1024);
		hr -= hr >= bN.fZ(ag.hA[player], 2) ? jd : 0, jZ(f8, player), ad.ef(player, hr, jc), ag.hA[player] -= hr + jd, aF.ja(player, !1)
	}, this.jV = function(player, jc) {
		for (var hz, fA = ac.fA, aB = ag.go[player].length - 1; 0 <= aB; aB--)
			if (ac.je(ag.go[player][aB]))
				for (hz = 3; 0 <= hz; hz--)
					if (ac.gi(ag.go[player][aB] + fA[hz]) && ac.f0(ag.go[player][aB] + fA[hz]) === jc) {
						ag.ga[player].push(ag.go[player][aB]);
						break
					}
	}, this.jU = function(player) {
		for (var fA = ac.fA, aB = ag.go[player].length - 1; 0 <= aB; aB--)
			if (ac.je(ag.go[player][aB]))
				for (var hz = 3; 0 <= hz; hz--)
					if (ac.ez(ag.go[player][aB] + fA[hz])) {
						ag.ga[player].push(ag.go[player][aB]);
						break
					}
	}, this.jg = function(player, jh) {
		var aB, fR, hz, i1, f8 = ag.go[player].length,
			ji = 256 <= f8 ? 12 : 32 <= f8 ? 6 : 1,
			jj = f8 - 1 - ay.jk(ji),
			fA = ac.fA;
		jP = 0;
		loop: for (aB = jj; 0 <= aB; aB -= ji)
			for (hz = 3; 0 <= hz; hz--)
				if ((i1 = ac.ez(ag.go[player][aB] + fA[hz]) ? aD.f5 : ac.f0(ag.go[player][aB] + fA[hz])) === aD.f5 || ac.gi(ag.go[player][aB] + fA[hz]) && i1 !== player && (jh || bu.f1(player, i1))) {
					for (fR = jP - 1; 0 <= fR; fR--)
						if (jR[fR] === i1) continue loop;
					if (jR[jP] = i1, 8 <= ++jP) return !0
				}
		return 0 < jP
	}, this.jl = function(player, jh) {
		var aB, hz, i1, fA = ac.fA;
		for (jP = 0, aB = ag.go[player].length - 1; 0 <= aB; aB--)
			for (hz = 3; 0 <= hz; hz--)
				if ((i1 = ac.ez(ag.go[player][aB] + fA[hz]) ? aD.f5 : ac.f0(ag.go[player][aB] + fA[hz])) === aD.f5 || ac.gi(ag.go[player][aB] + fA[hz]) && i1 !== player && (jh || bu.f1(player, i1))) return jR[jP++] = i1, !0;
		return !1
	}, this.jm = function() {
		for (var fS, aB = jP - 1; 0 <= aB; aB--)
			if (jR[aB] === aD.f5) {
				for (jP--, fS = aB; fS < jP; fS++) jR[fS] = jR[fS + 1];
				return !0
			} return !1
	}, this.jn = function(player) {
		for (var fS, aB = jP - 1; 0 <= aB; aB--)
			if (ad.jo(player, jR[aB]))
				for (jP--, fS = aB; fS < jP; fS++) jR[fS] = jR[fS + 1];
		return 0 === jP
	}, this.jp = function() {
		for (var aB = jP - 1; 0 <= aB; aB--)
			if (bC.gU.jq(jR[aB])) return !0;
		return !1
	}, this.jr = function() {
		for (var aB = jP - 1; 0 <= aB; aB--) bC.gU.jq(jR[aB]) || (jR[aB] = jR[--jP]);
		return 0 < jP
	}, this.js = function(player) {
		for (var fS, jt = jR[0], ju = ag.hA[jt] + ad.hB(jt, player), aB = jP - 1; 1 <= aB; aB--)(fS = ag.hA[jR[aB]] + ad.hB(jR[aB], player)) < ju && (jt = jR[aB], ju = fS);
		return jt
	}, this.jv = function(player) {
		var j, jw = jR[0];
		if (1 !== jP)
			for (var jx = bN.fZ(ag.j2[player] + ag.j1[player], 2), jy = bN.fZ(ag.j4[player] + ag.j3[player], 2), fO = jz(jx - bN.fZ(ag.j2[jw] + ag.j1[jw], 2)) + jz(jy - bN.fZ(ag.j4[jw] + ag.j3[jw], 2)), aB = jP - 1; 1 <= aB; aB--)(j = jz(jx - bN
				.fZ(ag.j2[jR[aB]] + ag.j1[jR[aB]], 2)) + jz(jy - bN.fZ(ag.j4[jR[aB]] + ag.j3[jR[aB]], 2))) < fO && (fO = j, jw = jR[aB]);
		return jw
	}, this.k0 = function() {
		for (var k1 = jR, k2 = k1[0], hA = ag.hA, k3 = hA[k2], aB = jP - 1; 1 <= aB; aB--) {
			var gg = k1[aB],
				fS = hA[gg];
			k3 < fS && (k2 = gg, k3 = fS)
		}
		return k2
	}, this.k4 = function() {
		return jR[ay.jk(jP)]
	}
}

function jH() {
	function kK(player, jc, kA) {
		3 <= kA && 2142 < bh.kQ() && (jc === aD.f5 || ag.hA[jc] < bN.fZ(ag.hA[player], 20)) && aE.kF(player, 20)
	}

	function kN(player, hr, jc, kA) {
		3 <= kA && kA < 6 && bN.fZ(ag.hA[player], 8) > ag.hA[jc] && (hr = Math.max(bN.fZ(11 * ag.hA[jc], 5), bN.fZ(ag.hA[player], 10)));
		kA = ag.ga[player].length;
		ao.jE.jV(player, jc), ao.jE.jb(player, jc, kA, hr)
	}

	function kJ(player, hr) {
		var jc = aD.f5,
			f8 = ag.ga[player].length;
		ao.jE.jU(player), ag.ga[player].length !== f8 && ao.jE.jb(player, jc, f8, hr)
	}
	this.k5 = new Uint8Array(aD.f5), this.dh = function() {
		this.k5.fill(0)
	}, this.k6 = function(player, hr) {
		var k8, kA, kB, kC;
		ad.k7(player) && (k8 = ae.k9(player), 3 <= (kA = aE.hr[player]) && kA < 6 && (hr = Math.max(ag.hA[player] - k8, hr)), kB = ag.gp[player].length, kC = ag.go[player].length, 30 * ag.gw[player] > aD.kD && kE[player] < 10 && 100 * kC <= kB &&
			aE.kF(player, 10), aD.i2 ? function(player, hr, kA, k8) {
				var jc;
				if (ao.jE.jg(player, !1) || ao.jE.jl(player, !1)) {
					if (!ao.jE.jn(player))
						if (ao.jE.jm()) kJ(player, hr), kK(player, aD.f5, kA);
						else {
							if (ay.kL(aE.kM[kA])) jc = ao.jE.js(player);
							else {
								if (ao.jE.jp() && ay.kL(aE.kO[kA]) && ao.jE.jr(), 6 === kA) return kN(player, hr, ao.jE.k4(), kA);
								jc = ao.jE.jv(player)
							}
							kN(player, hr, jc, kA), kK(player, jc, kA)
						}
				} else bP.kH.eb(player) || ao.jI.eb(player) || ! function(player, hr, kA, k8) {
					var k5 = ao.jG.k5;
					k5[player] = 0;
					var kR = bi.f6[player];
					if (0 !== kR) {
						var kS = ag.hA[player],
							gw = ag.gw;
						if (player < aD.kT && (hr = kS), !(kS < gw[player] || 5 === kA && kS < k8 || 4 === kA && kS < bN.fZ(k8, 2))) {
							bj.kU(kR);
							for (var f8 = bQ.fd[0], fm = bQ.fm, aB = ay.jk(f8), fS = 0; fS < f8; fS++) {
								var eg = fm[(fS + aB) % f8];
								if (k5[eg]) return bA.kV.kW(player, eg, hr)
							}
							var kX = bP.y.kX;
							for (fS = 0; fS < f8; fS++)
								if (eg = fm[(fS + aB) % f8], kX[eg] && eg !== player) return bA.kV.kW(player, eg, hr)
						}
					}
				}(player, hr, kA, k8)
			}(player, hr, kA, k8) : (!kC || kB && (kB < kC && !ay.jk(10) || 100 * kC <= kB && ay.jk(3) || !ay.jk(8))) && bP.kH.eb(player) || function(player, hr, kA) {
				ao.jE.jg(player, !0) || ao.jE.jl(player, !0) ? ao.jE.jn(player) || (ao.jE.jm() ? kJ(player, hr) : ay.kL(aE.kM[kA]) ? kN(player, hr, ao.jE.js(player), kA) : 5 === kA ? kN(player, hr, ao.jE.k0(), kA) : (ao.jE.jp() && ay.kL(aE
					.kO[kA]) && ao.jE.jr(), kN(player, hr, 6 === kA ? ao.jE.k4() : ao.jE.jv(player), kA))) : ao.jI.eb(player)
			}(player, hr, kA))
	}
}

function c7() {
	var kY = new Uint8Array(aD.f5),
		kZ = new Uint16Array(aD.f5),
		ka = new Uint16Array(aD.f5),
		kb = new Uint8Array(aD.f5),
		kc = (this.hr = new Uint8Array(aD.f5), new Uint16Array(aD.f5)),
		kd = new Uint16Array(aD.f5);

	function ks(aB) {
		kY[aB] = 1 + bN.fZ(kc[aB] * ay.random(), 10 * ay.value(100))
	}
	this.ke = null, this.kO = [97, 94, 70, 40, 20, 0, 100], this.kf = [500, 450, 400, 300, 80, 50, 100], this.kM = [0, 0, 5, 25, 50, 100, 0], this.kg = [60, 74, 112, 200, 256, 512, 512], this.kh = [1, 2, 3, 4, 6, 8, 1], this.ki = [500, 450, 400, 300,
		80, 50, 100
	], this.kj = [100, 150, 250, 400, 600, 1e3, 100], this.di = function() {
		this.ke = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dh = function() {
		kY.fill(0), kZ.fill(0), ka.fill(0), kb.fill(0), this.hr.fill(0), kc.fill(0), kd.fill(0);
		var kk = aD.kT;
		if (9 === aD.kl) this.km();
		else if (aD.kn)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kp - 1; 0 <= aB; aB--) {
					var i0 = aB + kk;
					this.hr[i0] = aD.data.botDifficultyData[i0]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kp - 1; 0 <= aB; aB--) this.hr[i0 = aB + kk] = aD.data.botDifficultyTeam[bi.kq[bi.f6[i0]]];
				else if (1 === aD.data.botDifficultyType) {
			var kr = this.ke.length;
			for (aB = aD.kp - 1; 0 <= aB; aB--) this.hr[aB + kk] = aB % kr
		} else
			for (kr = aD.data.botDifficultyValue, aB = aD.kp - 1; 0 <= aB; aB--) this.hr[aB + kk] = kr;
		else
			for (var ko = 8 === aD.kl ? 1 : 0, aB = aD.kp - 1; 0 <= aB; aB--) this.hr[aB + kk] = ko;
		for (aB = 0; aB < kk; aB++) this.hr[aB] = 6;
		var f8 = aD.f5;
		for (aB = 0; aB < f8; aB++) this.hr[aB] <= 2 ? (kb[aB] = 5, kc[aB] = kd[aB] = 1040, 0 === this.hr[aB] ? (kZ[aB] = 980, ka[aB] = 980) : 1 === this.hr[aB] ? (kZ[aB] = 980, ka[aB] = 920, kc[aB] = kd[aB] = 1100) : (kZ[aB] = 825, ka[aB] =
			750)) : this.hr[aB] <= 4 ? (kb[aB] = 1 + ay.jk(20), 3 === this.hr[aB] ? (kZ[aB] = ka[aB] = 500, kc[aB] = kd[aB] = 1e3) : (kd[aB] = 250 + ay.jk(1501), kc[aB] = 500 + ay.jk(501), kZ[aB] = 300 + ay.jk(201), ka[aB] = 100 + ay.jk(
			201))) : this.hr[aB] <= 5 ? (kc[aB] = 1e3, kd[aB] = 1e3, kb[aB] = 35 + ay.jk(16), kZ[aB] = 300 + ay.jk(201), ka[aB] = 50 + ay.jk(101)) : (kc[aB] = kd[aB] = 800, kb[aB] = 5, kZ[aB] = 10, ka[aB] = 250), ks(aB)
	}, this.km = function() {
		for (var em = az.kt, kk = aD.kT, aB = em - 1; 0 <= aB; aB--) this.hr[aB + kk] = 0;
		for (var fS = 0; fS < 6; fS++) {
			for (aB = em + az.ku[fS] - 1; em <= aB; aB--) this.hr[aB + kk] = fS;
			em += az.ku[fS]
		}
	}, this.kF = function(gg, value) {
		kY[gg] = Math.min(value, kY[gg])
	}, this.eb = function(gg) {
		0 == --kY[gg] && ! function(gg) {
			(function(gg) {
				kc[gg] !== kd[gg] && (kc[gg] += kc[gg] < kd[gg] ? 3 : -3);
				kZ[gg] !== ka[gg] && (kZ[gg] += kZ[gg] < ka[gg] ? kb[gg] : -kb[gg], kZ[gg] = (Math.abs(kZ[gg] - ka[gg]) <= kb[gg] ? ka : kZ)[gg]);
				kY[gg] = bN.fZ(kc[gg], 10)
			})(gg), ao.jG.k6(gg, bN.fZ(kZ[gg] * ag.hA[gg], 1e3))
		}(gg)
	}, this.kx = function(gg, gb) {
		kc[gg] = kd[gg] = gb
	}
}

function jC() {
	var ky = new Uint16Array(aD.f5);

	function lD(player, lB) {
		for (var f8 = bQ.fd[0], fl = bQ.fl, lP = -1, lQ = aD.f5, aB = 0; aB < f8; aB++) {
			var fO, gg = fl[aB];
			bu.f1(player, gg) && (fO = bO.ib(lB, bO.j0(gg)), -1 === lP || fO < lP) && (lP = fO, lQ = gg)
		}
		return lQ
	}

	function lF(lC, lB) {
		if (lC === aD.f5) return 0;
		var gp = ag.gp[lC],
			lO = gp.length;
		if (0 === lO) return 0;
		for (var f8 = Math.min(lO, 10), lQ = 0, lP = bO.ib(gp[lQ] >> 2, lB), aB = 0; aB < f8; aB++) {
			var i0 = ay.jk(lO),
				fO = bO.ib(gp[i0] >> 2, lB);
			fO < lP && (lP = fO, lQ = i0)
		}
		return gp[lQ] >> 2
	}

	function lK(player, lB, jc, lS) {
		var lT;
		(lS === aD.f5 || (lT = bO.j0(jc), lS = bO.j0(lS), bO.ib(lB, lT) < bO.ib(lB, lS))) && (ky[player] = jc)
	}
	this.dh = function() {
		ky.fill(aD.f5)
	}, this.jO = function() {
		if (bh.kQ() % 109 == 9 && !(al.kz < 20) && aD.i2 && !(bj.l0() < bN.fZ(8 * aD.kD, 10))) {
			var l1 = bj.l2();
			if (bi.kq[l1]) {
				bj.l3(l1);
				var f8 = bQ.fd[0];
				if (0 !== f8)
					for (var g = bQ.fm, l4 = al.l4, kz = al.kz, l5 = ky, i0 = ay.jk(f8), aB = 0; aB < kz; aB++) {
						var ha = l4[aB],
							l6 = g[i0];
						bC.gU.l7(ha, l6) && 512 === l5[ha] && (l5[ha] = l6, i0 = (i0 + 1) % f8)
					}
			}
		}
	}, this.eb = function(player) {
		var lB, lE, lC, l8 = function(player) {
			var jc = ky[player];
			if (jc !== aD.f5) {
				if (bC.gU.lR(jc) && ag.gp[jc]) return jc;
				ky[player] = aD.f5
			}
			return aD.f5
		}(player);
		return function(player) {
			for (var lN = al.l4, lO = al.kz, f8 = Math.min(lO, lO < 17 && 5 === ay.jk(20) ? 1 : 16), gh = ay.jk(lO), fl = bQ.fl, gp = ag.gp, gb = 0, aB = 0; aB < f8; aB++) {
				var gg = lN[(aB + gh) % lO];
				gg !== player && gp[gg].length && (fl[gb++] = gg)
			}
			bQ.fd[0] = gb
		}(player), 0 !== bQ.fd[0] && (0 < (lE = lF(lC = lD(player, lB = bO.j5(player)), lB)) && bP.lG.lH(player, bP.lI.lJ(lE, lB)) ? (lK(player, lB, lC, l8), !0) : 0 < (lC = function(player, lB) {
			for (var f8 = bQ.fd[0], fl = bQ.fl, l5 = ky, gh = 0, aB = 0; aB < f8; aB++) {
				var gg = fl[aB],
					gg = l5[gg];
				gg !== aD.f5 && bC.gU.lR(gg) && player !== gg && bu.f1(player, gg) && (fl[gh++] = gg)
			}
			return 0 !== (bQ.fd[0] = gh) ? lF(lD(player, lB), lB) : 0
		}(player, lB)) && bP.lG.lH(player, bP.lI.lJ(lC, lB)) ? (lK(player, lB, ac.f0(lC << 2), l8), !0) : !!(0 < (lE = lF(l8, lB)) && bP.lG.lH(player, bP.lI.lJ(lE, lB))))
	}
}

function jJ() {
	function lX(player) {
		for (var fX = ag.fX[player], f8 = fX.length, fY = Math.max(bN.fZ(f8, 12), 1), fA = ac.fA, eE = ay.jk(f8), aB = 0; aB < f8; aB += fY)
			for (var ex = fX[(aB + eE) % f8], fB = 3; 0 <= fB; fB--) {
				var fC = ex + fA[fB];
				if (ac.fD(fC)) return {
					em: fC,
					id: ac.eq(fC),
					gg: player
				}
			}
		return null
	}

	function lc(player, le) {
		var hr = bC.gU.lf(player, aE.ki[aE.hr[player]]);
		ag.ga[player].push(le.em), ad.ef(player, hr, le.gg), aF.ja(player, !0)
	}
	this.eb = function(player) {
		return !!bU.en(bU.eo) && !!aD.data.passableMountains && 0 !== ag.fX[player].length && function(player) {
			var lW = lX(player);
			if (null === lW) return !1;
			! function(player) {
				for (var l4 = al.l4, kz = al.kz, f8 = Math.min(kz, 12), gh = ay.jk(kz), fl = bQ.fl, fX = ag.fX, gb = 0, aB = 0; aB < f8; aB++) {
					var gg = l4[(aB + gh) % kz];
					gg !== player && fX[gg].length && bu.f1(player, gg) && (fl[gb++] = gg)
				}
				bQ.fd[0] = gb
			}(player);
			var lZ = function(ep) {
				for (var f8 = bQ.fd[0], fl = bQ.fl, aB = 0; aB < f8; aB++) {
					var le = lX(fl[aB]);
					if (null !== le && le.id === ep) return le
				}
				return null
			}(lW.id);
			return null !== lZ ? (lc(player, lZ), !0) : function(player, ep) {
				var f8 = ao.j7.ld;
				if (0 !== f8)
					for (var em = ao.j7.eT[ay.jk(f8)] << 2, fA = ac.fA, fB = ay.jk(4);;) {
						if (em += fA[fB], ac.fD(em)) {
							if (ac.eq(em) === ep) return lc(player, {
								em: em,
								gg: aD.f5
							}), !0;
							break
						}
						if (!ac.ez(em)) break
					}
				return !1
			}(player, lW.id)
		}(player)
	}
}

function jA() {
	this.eb = function(player) {
		return bP.lG.lH(player, function(player) {
			var f8 = ao.j7.ld;
			if (0 === f8) return -1;
			for (var lO = Math.min(f8, ao.performance.lh ? f8 : 10), eT = ao.j7.eT, jj = bN.fZ(ay.random() * f8, ay.value(100)), e = jj + lO, li = ay.j6(ag.j1[player], ag.j2[player]), lj = ay.j6(ag.j3[player], ag.j4[player]), lQ = -1,
					fO = bO.ic(0, 0, bU.fJ, bU.fK), aB = jj; aB < e; aB++) {
				var gh = aB % f8,
					lk = bO.fQ(li, lj, eT[gh]);
				lk < fO && (fO = lk, lQ = gh)
			}
			return -1 !== lQ ? function(eu, li, lj) {
				var hN = bO.fG(eu),
					hP = bO.fI(eu),
					iS = li - hN,
					iV = lj - hP;
				Math.abs(iS) >= Math.abs(iV) ? (iV = 0, iS = Math.sign(iS)) : (iS = 0, iV = Math.sign(iV));
				iS === iV && (iS = 1);
				for (;;) {
					if (hN += iS, hP += iV, !bO.fU(hN, hP)) break;
					if (eu = bO.fV(hN, hP), ac.iM(bO.ey(eu))) return eu
				}
				return -1
			}(eT[lQ], li, lj) : -1
		}(player))
	}
}

function jL() {
	this.eb = function(player) {
		var lm = function(player) {
			for (var lp = bP.lp.lr(), f8 = lp.length, lO = Math.min(f8, 32), i0 = ay.jk(f8), aB = 0; aB < lO; aB++) {
				var lm = (aB + i0) % f8,
					lo = lp[lm],
					iZ = lo[0],
					ia = lo[lo.length - 1];
				if (bP.lI.ls(player, iZ) && bP.lI.lt(player, ia)) return lm;
				if (bP.lI.ls(player, ia) && bP.lI.lt(player, iZ)) return 0 <= (lm = bP.lp.lu(ia, iZ)) ? lm : bP.lp.lv() ? -1 : bP.lp.lw(bP.lp.lx(lo))
			}
			return -1
		}(player);
		return -1 !== lm && (lm = bP.lp.get(lm), !bP.lI.lq(player, lm)) && (bQ.g[0] = lm, !0)
	}
}

function jD() {
	this.lh = 0, this.dh = function() {
		this.lh = 0
	}, this.eb = function() {
		if (!this.lh && bh.kQ() % 30 == 7 && bC.gU.m0(90) && (ao.performance.lh = 1)) {
			if (aD.i2) {
				var l1 = bj.l2();
				if (bi.kq[l1]) {
					bj.kU(l1);
					var g = bQ.fm,
						f8 = bQ.fd[0];
					if (0 !== f8)
						for (var m3 = Math.min(100 + 10 * (f8 - 1), 400), aB = 0; aB < f8; aB++) aE.kx(g[aB], m3)
				}
			}
			aE.kx(m4[0], 100)
		}
	}
}

function j8() {
	var m5 = 0,
		m6 = 0,
		m7 = 300,
		m8 = 300,
		m9 = 0;
	this.ld = 0, this.eT = new Uint32Array(512), this.dh = function() {
		m6 = m5 = 0, this.ld = 0, m9 = 0
	}, this.eb = function() {
		if (function() {
				var f8 = ao.j7.ld;
				if (0 === f8) return 1;
				var eT = ao.j7.eT;
				if (bh.kQ() % 35 == 6) {
					for (var aB = f8 - 1; 0 <= aB; aB--) ac.ez(eT[aB] << 2) || (f8--, eT[aB] = eT[f8]);
					ao.j7.ld = f8
				}
				return f8 < eT.length
			}())
			if (m7 <= m5) {
				var mD = ao.j7.ld;
				if (mD) {
					if (bh.kQ() % 350 != 1) return;
					if (m9 !== mD) return void(m9 = mD);
					if (!bC.gU.jq(m4[0])) return
				} else if (bh.kQ() % 12 != 8) return;
				bC.gU.mE() || ao.j7.dh()
			} else {
				var aB, i = bU.fJ,
					mF = i - 2,
					mD = mF * (bU.fK - 2),
					mG = m7,
					eT = ao.j7.eT,
					lO = ao.j7.ld,
					mH = eT.length,
					gh = Math.min(m6 + mG * ((1 + 19 * ao.performance.lh) * m8), mD);
				for (aB = m6; aB < gh; aB += mG) {
					var em = 4 * (aB % mF + (bN.fZ(aB, mF) + 1) * i + 1);
					if (ac.ez(em) && (eT[lO] = em >> 2, ++lO === mH)) {
						aB += mG;
						break
					}
				}(m6 = aB) >= mD && (m6 = ++m5), ao.j7.ld = lO
			}
	}
}

function jN() {
	this.eb = function() {
		if (bh.kQ() % 51 == 45)
			for (var f8 = bP.y.mJ, mK = bP.y.mK, mL = bP.y.mL, mM = bP.y.mM, mN = bP.y.mN, kj = aE.kj, hr = aE.hr, aB = 0; aB < f8; aB++) {
				var lo, player, mR, mO = mK[aB];
				mO % 64 == 6 || (lo = mL[aB], (player = bP.lI.mP(lo[lo.length - 1])) < 0) || !bC.gU.l7(player, mN[aB] >> 3) || ay.jk(1e3) >= kj[hr[player]] || ! function(mV, lo) {
					for (var f8 = lo.length - 1, mW = bP.y.mX[mV], fO = 0, aB = mW + 1; aB < f8; aB++) fO += bO.iY(lo[aB], lo[aB + 1]);
					return (fO += bO.iY(bO.it(bP.y.mY[mV]), lo[mW + 1])) <= 60
				}(aB, lo) || (mR = mM[aB], 64 <= mO && bP.mS.mT(player, mR)) || function(player, lo, mR, mV, mO) {
					bP.mZ.ma(player) && bC.gU.mb(player, aE.kf[aE.hr[player]], 32, 0) && (bP.y.mK[mV] = 64 + mO % 64, bP.mS.ef(mR, bP.y.mc), bQ.g[0] = bP.lp.lx(lo), bQ.fk[1] = 6, bC.gU.md(player), bP.y.me(player))
				}(player, lo, mR, aB, mO)
			}
	}
}

function mf() {
	aN.eb(), af.eb(), aW.mg(), b0.y.eb()
}

function mh() {
	b1.eb(), aG.eb(), an.eb(), ae.eb(), b4.eb(), aF.eb(), ao.eb(), bP.y.eb(), al.mi(), aV.eb(), az.eb(), bX.eb(), af.eb(), af.mj(), aW.eb(), bR.eb(), aU.eb(), aP.eb(), b8.mk(), aN.eb(), b5.eb(), aR.eb(), aw.eb(), bf.eb(), bj.eb(), b0.y.eb(), b0.ml
		.eb(), t.eb(), bW.eP.eb(), bB.eb(), bh.eb()
}

function mm() {
	aH.eb(), aX.eb(), aQ.eb(), av.eb(), bE.eb(), b7.eb(), b8.eb(), ax.mn()
}

function mo() {
	aV.mp(!1), aP.mp(), aW.mp(!1), aU.mp(), aR.mp(), aw.mp(), af.mp(!1), bj.mq()
}

function mr() {
	af.mp(!1) && (bh.dp = !0), b0.y.eb()
}

function c8() {
	var ms, mt, mu;

	function mw(my) {
		for (var aB = ms - 1; 0 <= aB; aB--) 0 === mu[mt[aB]] && ag.gw[mt[aB]] >= my && gC(mt[aB])
	}

	function mv(player) {
		var eX;
		64 === mu[player] ? mu[player] = 6 : (eX = ag.gw[player], mu[player] = eX < 1e3 ? 3 : eX < 1e4 ? 2 : eX < 6e4 ? 1 : 0)
	}
	this.dh = function() {
		ms = 0, mt = new Uint16Array(aD.f5), mu = new Uint8Array(aD.f5)
	}, this.eb = function() {
		for (var aB = ms - 1; 0 <= aB; aB--) 64 === mu[mt[aB]] ? mv(mt[aB]) : 0 == mu[mt[aB]]-- && (mv(mt[aB]), gC(mt[aB]));
		16e4 <= ag.gw[m4[0]] && (mw(16e4), 3e5 <= ag.gw[m4[0]]) && mw(3e5), bC.gU.lR(aD.es) && (bf.mz[7] = Math.max(ag.gw[aD.es], bf.mz[7]))
	}, this.gW = function(player) {
		for (var fR, aB = ms - 1; 0 <= aB; aB--)
			if (player === mt[aB]) {
				for (ms--, fR = aB; fR < ms; fR++) mt[fR] = mt[fR + 1];
				return
			}
	}, this.ja = function(player, n0) {
		for (var aB = ms - 1; 0 <= aB; aB--)
			if (player === mt[aB]) return;
		mt[ms++] = player, mu[player] = n0 ? 2 : 64
	}
}

function c9() {
	var size, kH;
	this.dh = function() {
		size = aD.kp, kH = new Uint16Array(aD.f5);
		for (var kT = aD.kT, aB = aD.kp - 1; 0 <= aB; aB--) kH[aB] = kT + aB
	}, this.eb = function() {
		ao.jM.eb();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.n3[kH[aB]]) {
				fR = void 0;
				var fR = aB;
				size--, kH[fR] = kH[size]
			} else aE.eb(kH[aB])
	}, this.n2 = function(gg) {
		kH[size++] = gg
	}
}

function cA() {
	var n5, n6, n7, n8, n9, nA, nB, nC, nD, nE, nF, nG, nH, nI = !1,
		nJ = !1;

	function nK(nL) {
		nG = bh.eW, n7 = n8 = n6 = 0, n9 = (nH = 33) / nL, n5 = 1 / (nL / nH / 4), nA = (h.i / 2 + il) / iJ, nB = (h.j / 2 + im) / iJ, nC = iJ
	}

	function nS(aB) {
		var nU; - 1 !== aB && (aB = bO.it(bP.y.mY[aB]), nU = bO.fG(aB) - 15, aB = bO.fI(aB) - 15, aH.nO(nU, aB, 29 + nU, 29 + aB))
	}

	function nf(eJ) {
		Math.abs(Math.log(nF / nC)) < .125 && (nF = eJ * nC)
	}

	function ne(nU, nV, nh, ni) {
		nD = (nU + nh + 1) / 2, nE = (nV + ni + 1) / 2;
		nh = h.i / (nh - nU + 1), nU = h.j / (ni - nV + 1);
		nF = .9 * (nh < nU ? nh : nU)
	}
	this.nM = function() {
		return nI
	}, this.nN = function() {
		nK(1), this.nO(0, 0, bU.fJ - 1, bU.fK - 1), aD.hW || aD.hH || this.nP(aD.es, 3e3, !0, .3)
	}, this.nQ = function(player, nR) {
		nS(bP.lI.nT(player, nR))
	}, this.nP = function(player, nL, nW, zoom) {
		aD.nX || nI && !nW && nJ || (0 === ag.gw[player] ? nS(bP.lI.nY(player)) : (aS.nZ = !1, nJ = nW, nK(nL), function(player) {
			nD = (ag.j1[player] + ag.j2[player] + 1) / 2, nE = (ag.j3[player] + ag.j4[player] + 1) / 2
		}(player), function(zoom, player) {
			var iS = ag.j2[player] - ag.j1[player] + 1,
				player = ag.j4[player] - ag.j3[player] + 1,
				fR = h.i / iS,
				fS = h.j / player,
				fR = (nF = fR < fS ? fR : fS, 0 !== zoom ? zoom : iS < 20 && player < 20 ? .5 : .9);
			nF *= fR, nf(7 / 8)
		}(zoom, player), nI = !0, ar.nc()))
	}, this.nd = function(nL) {
		aD.hH || aD.nX || (aS.nZ = !1, nJ = !1, nK(nL), ne(0, 0, bU.fJ - 1, bU.fK - 1), nf(7 / 8), nI = !0, ar.nc())
	}, this.nO = function(nU, nV, nh, ni) {
		nI = !1, ne(nU, nV, nh, ni), iJ = nF, aS.nj(nD, h.i / 2), aS.nk(nE, h.j / 2), bc.nl(), bh.dp = !0
	}, this.nm = function() {
		return !(nI && nJ || (nI = !1))
	}, this.eb = function() {
		var np, nq, fB, nt;
		nI && (n6 < .5 ? n8 < n9 && (n8 += n9 * n5, n7 = n6) : 1 - n7 < n6 && (n8 = (n8 -= n9 * n5) < n9 * n5 ? n9 * n5 : n8), nG = nG >= bh.eW ? bh.eW - 1 : nG, fB = bh.eW - nG, n6 = 1e3 < fB || 1 < (n6 += n8 * fB / nH) ? 1 : n6, nG = bh.eW,
			fB = iJ, np = il, nq = im, fB = (iJ = nC * Math.pow(nF / nC, n6)) / fB, nt = 1 - (nC * Math.pow(nF / nC, 1 - n6) - nC) / (nF - nC), aS.nj(nA + nt * (nD - nA), h.i / 2), aS.nk(nB + nt * (nE - nB), h.j / 2), af.zoom(fB, (np * fB -
				il) / (1 - fB), (nq * fB - im) / (1 - fB)), bc.nl(), 1 <= n6 && (nI = !1, bd.nu = !0), bh.dp = !0)
	}
}

function c2() {
	var eg = bC.color;
	this.nv = eg.nw(0, 0, 0), this.nx = eg.ny(0, 0, 0, .7), this.nz = eg.ny(0, 0, 0, .5), this.o0 = eg.ny(0, 0, 0, .85), this.o1 = eg.ny(0, 0, 0, .75), this.o2 = eg.ny(0, 0, 0, .6), this.o3 = eg.ny(0, 0, 0, .35), this.o4 = eg.nw(255, 255, 255), this
		.o5 = eg.ny(255, 255, 255, .3), this.o6 = eg.ny(255, 255, 255, .6), this.o7 = eg.ny(255, 255, 255, .4), this.o8 = eg.ny(255, 255, 255, .25), this.o9 = eg.ny(255, 255, 255, .85), this.oA = eg.ny(255, 255, 255, .75), this.oB = eg.ny(255, 255,
			255, .15), this.oC = eg.ny(255, 255, 255, .11), this.oD = eg.nw(128, 128, 128), this.oE = eg.ny(64, 64, 64, .75), this.oF = eg.ny(88, 88, 88, .83), this.oG = eg.ny(60, 60, 60, .85), this.oH = eg.ny(80, 60, 60, .85), this.oI = eg.nw(170,
			170, 170), this.oJ = eg.nw(200, 235, 245), this.oK = eg.nw(30, 255, 30), this.oL = eg.nw(0, 200, 0), this.oM = eg.nw(128, 255, 128), this.oN = eg.ny(10, 65, 10, .75), this.oO = eg.ny(0, 255, 0, .6), this.oP = eg.ny(0, 255, 0, .5), this
		.oQ = eg.ny(0, 200, 0, .5), this.oR = eg.ny(0, 100, 0, .75), this.oS = eg.ny(0, 60, 0, .8), this.oT = eg.ny(0, 255, 0, .3), this.oU = eg.ny(0, 180, 0, .6), this.oV = eg.ny(0, 120, 0, .85), this.oW = eg.nw(0, 120, 0), this.oX = eg.ny(0, 70, 0,
			.85), this.oY = eg.nw(190, 230, 190), this.oZ = eg.nw(0, 255, 0), this.oa = eg.nw(255, 120, 120), this.ob = eg.nw(255, 160, 160), this.oc = eg.nw(255, 70, 70), this.od = eg.nw(230, 0, 0), this.oe = eg.ny(220, 0, 0, .6), this.og = eg.ny(
			255, 100, 100, .8), this.oh = eg.ny(100, 0, 0, .85), this.oi = eg.ny(60, 0, 0, .85), this.oj = eg.ny(200, 0, 0, .6), this.ok = eg.ny(120, 0, 0, .85), this.ol = eg.nw(255, 70, 10), this.om = eg.nw(230, 190, 190), this.on = eg.nw(255, 0,
		0), this.oo = eg.nw(255, 0, 255), this.op = eg.ny(60, 0, 60, .85), this.oq = eg.ny(0, 60, 60, .85), this.or = eg.ny(10, 60, 60, .9), this.os = eg.ny(0, 96, 96, .75), this.ot = eg.nw(0, 255, 255), this.ou = eg.nw(160, 160, 255), this.ov = eg
		.ny(0, 40, 90, .75), this.ow = eg.ny(0, 0, 255, .6), this.ox = eg.nw(200, 200, 255), this.oy = eg.ny(50, 50, 255, .83), this.oz = eg.ny(20, 90, 150, .75), this.p0 = eg.ny(10, 10, 120, .75), this.p1 = eg.nw(255, 120, 100), this.p2 = eg.ny(255,
			255, 0, .5), this.p3 = eg.ny(255, 255, 150, .2), this.p4 = eg.nw(255, 255, 0), this.p5 = eg.nw(255, 255, 200), this.p6 = eg.ny(200, 200, 0, .6), this.p7 = eg.ny(140, 120, 0, .75), this.p8 = eg.ny(180, 160, 40, .75), this.p9 = eg.ny(70,
			50, 20, .85), this.pA = eg.ny(30, 30, 0, .85), this.pB = eg.ny(60, 60, 0, .85), this.pC = eg.nw(255, 255, 100), this.pD = eg.nw(255, 255, 140), this.pE = eg.ny(255, 140, 0, .75), this.pF = eg.ny(70, 40, 0, .85), this.pG = eg.nw(255, 150,
			0), this.pH = eg.ny(255, 200, 80, .85), this.pI = eg.ny(0, 0, 0, 0), this.pJ = eg.ny(255, 255, 255, 0), this.pK = eg.ny(254, 254, 254, 0)
}

function d2() {
	this.hY = new pL, this.gU = new pM, this.pN = new pO, this.pP = new pQ, this.kV = new pR
}

function pL() {
	this.pS = 1, this.hZ = function(eu) {
		aD.kn ? bA.pN.hZ(aD.es, eu) : b0.pT.pU(eu)
	}, this.hf = function(ik, jc) {
		this.pS && (this.pS = 0, bl.pV.pW(182, ik)), aD.kn ? bA.pN.hf(aD.es, ik, jc) : b0.pT.pX(ik, jc)
	}, this.pY = function(ik, pZ) {
		aD.kn ? bA.pN.pa(aD.es, ik, pZ) : b0.pT.pb(ik, pZ)
	}, this.hk = function(ik, eu) {
		eu = (eu << 3) + bQ.fk[6];
		aD.kn ? bA.pN.hk(aD.es, ik, eu) : bP.mZ.ma(aD.es) && b0.pT.pd(ik, eu)
	}, this.hn = function(ik) {
		849 === ik && (ik = 850);
		var nR = bQ.fk[3];
		aD.kn ? bA.pN.hn(aD.es, ik, nR) : bP.hl.pe(aD.es, nR) && b0.pT.pf(ik, nR)
	}, this.pg = function(nR) {
		aD.kn ? bA.pN.pg(aD.es, nR) : b0.pT.pf(849, nR)
	}, this.ph = function(jc) {
		aD.kn ? bA.pN.ph(aD.es, jc) : b0.pT.pi(jc)
	}, this.pj = function(pk) {
		aD.kn ? bA.pN.pl(aD.es, pk) : b0.pT.pm(pk)
	}, this.hw = function(pn) {
		aD.kn ? bA.pN.hw(aD.es, pn) : b0.pT.po(pn)
	}, this.pp = function() {
		aD.kn ? bA.pN.pp(aD.es) : b0.pT.pq()
	}, this.ht = function() {
		aD.kn ? bA.pN.ht(aD.es) : b0.pT.pi(513)
	}, this.hb = function(ik, eu, jc) {
		aD.kn ? bA.pN.hb(aD.es, ik, eu, jc) : b0.pT.pr(ik, eu, jc)
	}
}

function pR() {
	this.kW = function(player, pZ, hr) {
		bC.gU.ps(player, hr, pZ) && (ae.pY(player, pZ), !bC.gU.jq(pZ)) && ao.jG.k5[pZ] && ao.jG.k5[pZ]--
	}, this.pt = function(player, pZ, hr) {
		bC.gU.pu(hr, pZ) ? an.ef(pZ, bQ.ff[0]) && (bs.pv(player, pZ, bQ.ff[0], 1), bC.gU.gX(pZ, bQ.ff[0]), bf.pw(player, pZ), af.px(pZ, bQ.ff[0])) : bf.gY(player, hr, 12)
	}
}

function pM() {
	this.py = function(pk, player) {
		aN.pj(aD.es, player, pk), b0.pT.pz(pk, player)
	}, this.q0 = function(player) {
		aN.q1(player, 0), b0.pT.q2(player)
	}, this.q3 = function(q4, player) {
		aN.q5(q4, player), b0.pT.q6(q4, player)
	}, this.q7 = function() {
		aD.kn || aD.hH || b0.q8.q7()
	}
}

function pQ() {
	this.eb = function(aC) {
		var id, fr, nm;
		for (bJ.dh(aC), bJ.eF += 2, nm = 8 * bJ.size; bJ.eF + 8 <= nm;) id = bJ.q9(4), fr = bJ.q9(9), 0 === id ? this.qA(id, fr, bJ.q9(22)) : 1 === id ? this.qA(id, fr, bJ.q9(10), bJ.q9(10)) : 2 === id ? this.qA(id, fr, bJ.q9(10), bJ.q9(9)) :
			3 === id ? this.qA(id, fr, bJ.q9(10), bJ.q9(27)) : 4 === id ? this.qA(id, fr, bJ.q9(10), bJ.q9(16)) : 5 === id || 6 === id ? this.qA(id, fr, bJ.q9(10)) : 7 === id ? this.qA(id, fr, bJ.q9(1)) : 10 === id ? this.qA(id, fr, bJ.q9(20), bJ
				.q9(22)) : this.qA(id, fr)
	}, this.qB = [], this.qC = function() {
		for (var qE = 0, qF = 0, qG = 0, qH = 0, qI = 0, qJ = 0, aB = 0; aB < 512; aB++) qE += ag.n3[aB], qF += ag.gw[aB], qG += ag.hA[aB], qH += bP.y.kX[aB];
		qI += bP.y.mJ, qJ += al.kz, this.qB.push(qG % 1073741824 * 4 + (qE + qF + qH + qI + qJ) % 4)
	}, this.qA = function(id, fr, ft, fv) {
		0 === id ? bA.pN.hZ(fr, ft) : 1 === id ? bA.pN.hf(fr, ft, fv) : 2 === id ? bA.pN.pa(fr, ft, fv) : 3 === id ? bA.pN.hk(fr, ft, fv) : 4 === id ? bA.pN.hn(fr, ft, fv) : 5 === id ? bA.pN.ph(fr, ft) : 6 === id ? bA.pN.pl(fr, ft) : 7 === id ?
			bA.pN.hw(fr, ft) : 8 === id ? bA.pN.pp(fr) : 9 === id ? bA.pN.qK(fr) : 10 === id && bA.pN.hb(fr, ft >> 10, fv, ft % 1024)
	}
}

function pO() {
	this.hZ = function(player, eu) {
		bC.gU.hJ(0) && bC.gU.hK(player) && bO.iq(eu) && (bB.qL.qM(0, player, eu), aD.qN.ef(player, eu))
	}, this.hf = function(player, ik, jc) {
		bC.gU.hJ(1) && bC.gU.hK(player) && bC.gU.qO(player, jc) && bC.gU.mb(player, ik, 12, 0) && bC.gU.qP(player, jc) && ((jc = ad.jo(player, bQ.f4[0])) || ad.k7(player)) && (ag.qQ[player]++, bB.qL.qM(1, player, ik, bQ.f4[0]), ao.jE.jS(player,
			jc)) && (bC.gU.md(player), bf.qR(player, ik), ao.jE.jY(player))
	}, this.pa = function(player, ik, pZ) {
		bC.gU.hJ(1) && bC.gU.hK(player) && aD.i2 && bC.gU.qO(player, pZ) && bC.gU.qS(player, pZ) && bC.gU.ps(player, bC.gU.ij(player, ik), pZ) && an.ef(pZ, bQ.ff[0]) && (bB.qL.qM(2, player, ik, pZ), ae.pY(player, pZ))
	}, this.hk = function(player, ik, pc) {
		bQ.fk[1] = 7 & pc;
		var eu = pc >> 3;
		bC.gU.hJ(1) && bC.gU.hK(player) && bO.iq(eu) && bP.mZ.ma(player) && bP.mZ.qT(eu) && bC.gU.mb(player, ik, 32, 0) && bP.lG.qU(player, eu, 1) && (bf.qV(player), bB.qL.qM(3, player, ik, pc), bC.gU.md(player), bn.qW.hk(player), bP.y.me(
			player))
	}, this.hn = function(player, ik, nR) {
		849 === ik ? this.pg(player, nR) : bC.gU.hJ(1) && bC.gU.hK(player) && bC.gU.mb(player, ik, 32, 0) && bP.hl.qX(player, nR) && (bf.qV(player), bB.qL.qM(4, player, ik, nR), bC.gU.md(player), bn.qW.hn(player), bP.y.me(player))
	}, this.pg = function(player, nR) {
		bC.gU.hJ(1) && bC.gU.hK(player) && bP.qY.eb(player, nR) && bB.qL.qM(4, player, 849, nR)
	}, this.ph = function(player, jc) {
		513 === jc ? this.ht(player) : bC.gU.hJ(1) && bC.gU.hK(player) && (jc = Math.min(jc, aD.f5), ad.jo(player, jc)) && (bB.qL.qM(5, player, jc), ad.qZ(player, jc))
	}, this.pl = function(player, pk) {
		(bC.gU.hJ(1) || bC.gU.hJ(2)) && bC.gU.hK(player) && (pk = bN.iG(pk, 0, 1023), bB.qL.qM(6, player, pk), af.qa(player, 0, pk))
	}, this.hw = function(player, pn) {
		aw.hv(player) && (bB.qL.qM(7, player, pn), aw.qb(player, pn))
	}, this.pp = function(player) {
		(bC.gU.hJ(0) || bC.gU.hJ(1)) && bC.gU.hK(player) && aM.qc(player) && (bB.qL.qM(8, player), bS.pp(player))
	}, this.qK = function(player) {
		bB.qL.qM(9, player), bS.qK(player)
	}, this.ht = function(player) {
		aw.hx(player) && (bB.qL.qM(5, player, 513), aw.ht(player))
	}, this.hb = function(player, ik, eu, jc) {
		bC.gU.hJ(1) && bC.gU.hK(player) && bC.gU.qO(player, jc) && bC.gU.qP(player, jc) && bO.iq(eu) && am.ej.f2(player, eu) && (ad.jo(player, bQ.f4[0]) || ad.k7(player)) && (bB.qL.qM(10, player, (ik << 10) + bQ.f4[0], eu), jc = bC.gU.lf(player,
			ik), ag.ga[player].push(bQ.f9[0]), ad.ef(player, jc, bQ.f4[0]), aF.ja(player, !0), bf.qd(player))
	}
}

function qe() {
	var qg;
	this.qf = [], this.qg = document.createElement("div"), this.qh = function(qi, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qi, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qg.appendChild(
			title), title
	}, this.qj = function(qi, marginBottom) {
		var qk = document.createElement("p");
		return qk.textContent = qi, qk.style.fontSize = "0.75em", qk.style.lineHeight = "1.2em", qk.style.marginBottom = marginBottom || "0", this.qg.appendChild(qk), qk
	}, this.ql = function(qi) {
		var qm = document.createElement("p");
		return qm.textContent = qi, qm.style.fontSize = "1em", qm.style.marginBottom = "0", qm.style.whiteSpace = "pre-wrap", qm.style.overflowWrap = "break-word", this.qg.appendChild(qm), qm
	}, this.qn = function(qo, fontSize) {
		var qg = document.createElement("div");
		return qg.innerHTML = qo, qg.style.fontSize = fontSize || "1em", qg.style.lineHeight = "1.2em", this.qg.appendChild(qg), qg
	}, this.qp = function(qq) {
		for (var qr = qq.qr, f8 = qr.length, aB = 0; aB < f8; aB++) this.qg.appendChild(qr[aB])
	}, this.qs = function(qt) {
		return this.qf.push(qt), this.qg.appendChild(qt.e), qt
	}, this.resize = function() {
		for (var f8 = this.qf.length, aB = 0; aB < f8; aB++) this.qf[aB].resize && this.qf[aB].resize()
	}, (qg = this.qg).style.position = "absolute", qg.style.height = "auto", qg.style.padding = "0.5em"
}

function qu(qv, qw) {
	var qg = document.createElement("div");

	function r4() {
		var aB, r5, j, gh, fB, r0 = h.k * qg.offsetWidth,
			r6 = new Float64Array(function(r0) {
				var i = .25 * bC.r1.r2(.6) * h.iI;
				return Math.max(Math.floor(r0 / i), 1)
			}(r0)),
			r7 = be.r7,
			r8 = (r0 - (r6.length + 1) * be.gap) / (r6.length * h.k);
		for (r6.fill(r7), aB = 0; aB < qw.length; aB++) r5 = (fB = qw[aB].qg).style, j = bC.r9.min(r6), gh = r6.indexOf(j), r5.top = bC.r1.rA(j), r5.left = bC.r1.rA(r7 + gh * (r8 + r7)), r5.width = bC.r1.rA(r8), bC.r1.rB(fB, 5), r6[gh] += fB
			.offsetHeight + 3 * r7;
		qg.style.height = bC.r1.rA(bC.r9.max(r6) - 2 * r7)
	}
	this.qx = qg, this.qy = qw, this.resize = function() {
		var aB;
		for (aB = 0; aB < qw.length; aB++) qw[aB].resize();
		r4(), r4()
	}, qg.style.width = "100%", qg.style.maxWidth = "100%", qv.style.lineHeight = "1.5em", qv.style.overflowX = "hidden", qv.style.overflowY = "auto";
	for (var aB = 0; aB < qw.length; aB++) qg.appendChild(qw[aB].qg);
	qv.appendChild(qg)
}

function w(rC, rD, rE, rF, rG) {
	var self, rH = document.createElement("button");

	function rO() {
		var rU;
		bL.rT() || (rU = bC.color.rV(rE), !1 !== rF && 0 < rU[0] && rU[0] < 255 && rU[0] === rU[1] && rU[0] === rU[2]) || (128 < rU[0] && 128 < rU[1] && 128 < rU[2] ? rH.style.backgroundColor = bC.color.rW(rE, -50) : rH.style.backgroundColor = bC
			.color.rW(rE, rU[3] && rU[3] < 120 ? 150 : 50))
	}

	function rN() {
		if (rF) {
			var rU = bC.color.rV(rE);
			if (rU[0] === rU[1] && rU[0] === rU[2]) return
		}
		rD && ((rU = rD(this)) ? 2 === rU && rO() : rY(this))
	}

	function rQ() {
		this.style.backgroundColor = rE
	}

	function rP() {
		rY(this)
	}

	function rY(fB) {
		fB.style.backgroundColor = rE, fB.blur()
	}
	this.button = rH, this.rI = rD, this.rJ = rE, this.rM = function(rR) {
		rR = 1.1 - Math.min(.01 * rC.length, .6) + .2 * rR;
		rH.style.fontSize = rR.toFixed(1) + "em"
	}, this.rL = function(eg) {
		eg ? 1 === eg ? eg = bD.oG : 2 === eg && (rF = 1, eg = bD.oG) : (rF = 0, eg = bD.o0), this.rJ = rE = eg, rH.style.backgroundColor = eg
	}, self = this, rH.innerHTML = rC, rH.style.color = rG ? bD.p4 : bD.o4, rH.style.userSelect = "none", rH.style.outline = "none", rH.style.overflowWrap = "break-word", self.rL(rE), rH.style.border = "none", rH.style.font = "inherit", self.rM(
		0), rH.style.padding = "0em 0.3em", rH.onclick = rN, rH.addEventListener("mouseover", rO), rH.addEventListener("mouseout", rP), rH.addEventListener("focus", rO), rH.addEventListener("blur", rQ)
}

function rZ(ra, qv) {
	var qg;
	this.resize = function() {
		for (var aB = 0; aB < ra.length; aB++) bC.r1.rB(ra[aB].button);
		qg.style.gap = qg.style.padding = bC.r1.rA(be.r7)
	}, (qg = document.createElement("div")).style.display = "grid", qg.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qg.style.overflowY = "auto", qg.style.gridAutoRows = "5.3em", qg.style.maxHeight = "100%";
	for (var aB = 0; aB < ra.length; aB++) ra[aB].rM(1), qg.appendChild(ra[aB].button);
	qv.appendChild(qg)
}

function rc(rd, re, rf) {
	this.fF = 0, this.fH = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bC.r1.r2(rf || .5) * rd[1] * h.iI, h.j - 2 * be.gap), this.i = Math.min(this.j * (rd[0] / rd[1]), h.i - 2 * be.gap), this.j = rd[1] * this.i / rd[0], this.fF = be.gap + re[0] * (h.i - this.i - 2 * be.gap), this.fH = be
			.gap + re[1] * (h.j - this.j - 2 * be.gap)
	}, this.rg = function() {
		return this.fF + .5 * this.i
	}
}

function rh(ri, rj) {
	var rs, self, rk = document.createElement("div"),
		rl = document.createElement("div"),
		rm = document.createElement("div"),
		rn = null,
		rt = (this.ro = new rp({
			value: "",
			eF: -1
		}, 0, rq, function(e) {
			e.target.value = bC.s0.s1(e.target.value), rn.rz.textContent = 127 - e.target.value.length
		}), 0),
		ru = 1,
		rv = 0,
		rw = 1048575;

	function rq() {
		ri(), rn.rz.textContent = 127
	}

	function sB(sA, qt) {
		qt && (qt.sG = 1, sA.appendChild(bp.sH.transform(qt)))
	}

	function sE(bw) {
		ru ? rk.scrollTop = rk.scrollHeight : bw && (rk.scrollTop = rv)
	}
	this.s2 = function(s3) {
			rw = 1048575, rl.textContent = "", s3 || this.mq()
		}, this.mq = function() {
			var s4 = bp.y.s5[0],
				s4 = bp.y.s7[s4],
				s8 = s4.s8,
				f8 = s8.length,
				jj = 1048575 === rw ? 0 : f8 - (s4.s9 - rw + 1048575) % 1048575;
			if (rw = s4.s9, !(f8 <= (jj = Math.max(jj, 0)))) {
				for (var sA = document.createDocumentFragment(), aB = jj; aB < f8; aB++) sB(sA, bp.lI.sC(s8[aB], bp.lI.sD(s8[aB])));
				rl.appendChild(sA), sE()
			}
		}, this.sF = function(r) {
			var sA = document.createDocumentFragment();
			sB(sA, r), rl.appendChild(sA), sE()
		}, this.show = function(qv) {
			qv.appendChild(rk), qv.appendChild(rm), this.resize(qv)
		}, this.sI = function(qv) {
			t.removeChild(qv, rk), t.removeChild(qv, rm)
		}, this.resize = function(qv) {
			rt = qv ? qv.offsetHeight : rt;
			var qv = bC.r1.sK(.04, .75),
				sL = Math.max(qv, rt - qv),
				sM = h.i / h.k,
				sN = .7 * sM,
				sO = bC.r1.rA(rt - qv - sL),
				sL = (rm.style.height = bC.r1.rA(qv), rk.style.height = bC.r1.rA(sL), h.j > h.i || a0.a1.iH() ? (rm.style.top = sO, rk.style.top = bC.r1.rA(rt - sL), bC.r1.rB(rk, 8)) : (rk.style.top = sO, rm.style.top = bC.r1.rA(rt - qv), bC.r1.rB(
						rk, 2)), this.ro.e.style.width = bC.r1.rA(sN), this.ro.e.style.fontSize = rs.button.style.fontSize = bC.r1.rA(.5 * qv), bC.r1.rB(this.ro.e, 6), rs.button.style.left = bC.r1.rA(sN), rs.button.style.width = bC.r1.rA(sM - sN),
					.385 * qv);
			a0.a1.iH() && (sL *= .8 - .12 * (h.i > h.j)), rl.style.marginLeft = rl.style.marginRight = bC.r1.rA(.5 * sL), rl.style.fontSize = bC.r1.rA(sL), sE(1)
		}, (self = this).ro.e.rx = 127, rk.style.position = "absolute", rk.style.left = "0", rk.style.width = "100%", rk.style.overflowX = "hidden", rk.style.overflowY = "auto", rk.style.font = "inherit", rk.style.backgroundColor = bD.o2, rk
		.addEventListener("scroll", function() {
			rv = rk.scrollTop, ru = rv < rk.scrollHeight - rk.clientHeight - 2 ? 0 : 1
		}), rl.style.font = "inherit", rm.style.position = "absolute", rm.style.left = "0", rm.style.width = "100%", self.ro.e.setAttribute("placeholder", L(13)), self.ro.e.style.position = "absolute", self.ro.e.style.top = "0", self.ro.e.style
		.left = "0", self.ro.e.style.height = "100%", self.ro.e.style.backgroundColor = bD.nz, self.ro.e.style.textAlign = "center", (rs = new w(L(14), rq)).button.top = "0", rs.button.style.position = "absolute", rs.button.style.height = "100%", rs
		.rL(bD.pJ), rn = new ry("127", rs.button, 1, 1), rk.appendChild(rl), rm.appendChild(self.ro.e), rm.appendChild(rs.button)
}

function sQ(sR, rC, sS) {
	function click() {
		var value = 1 - sR.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + rC, void 0 !== sR.eF ? bl.pV.pW(sR.eF, value) : sR.value = value, sS && sS(value)
	}
	var e;
	rC = rC || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sR.value ? "🟩 " : "⬜ ") + rC, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sT(qv, qo) {
	var qg = document.createElement("div");
	this.qx = qg, this.resize = function() {
		qg.style.padding = bC.r1.rA(be.r7), qg.style.lineHeight = bC.r1.rA(bC.r1.sK(.035))
	}, qv.style.overflowX = "hidden", qv.style.overflowY = "auto", qg.innerHTML = qo, qv.appendChild(qg)
}

function sU(sV) {
	var qg = document.createElement("div");
	this.e = qg, this.sW = sV, this.resize = function() {
		for (var f8 = sV.length, aB = 1; aB < f8; aB++) bC.r1.rB(sV[aB], 4)
	};
	var aB, f8 = sV.length;
	for (qg.style.width = "100%", qg.style.height = "2.7em", qg.style.marginTop = "0.6em", qg.style.border = "inherit", aB = 0; aB < f8; aB++) sV[aB].style.verticalAlign = "top", sV[aB].style.width = (100 / f8).toFixed(2) + "%", sV[aB].style.height =
		"100%", sV[aB].style.fontSize = "0.75em", qg.appendChild(sV[aB])
}

function sX(sY, rE, sZ) {
	this.qg = document.createElement("div"), this.ra = sY;
	var sa = 0;
	this.resize = function(qv, sc) {
		var f8 = sY.length;
		if (!sZ)
			for (var aB = 1; aB < f8; aB++) bC.r1.rB(sY[aB].button, 4);
		for (var sd = 0, aB = 0; aB < f8; aB++) sd += sY[aB].button.offsetWidth;
		if (qv && (sa = qv.offsetWidth), sc && sd < sa)
			for (aB = 0; aB < f8; aB++) sY[aB].button.style.width = (100 * sY[aB].button.offsetWidth / sd).toFixed(2) + "%";
		else
			for (aB = 0; aB < f8; aB++) sY[aB].button.style.width = "auto";
		sc || this.resize(qv, 1)
	};
	var sb = this;
	sb.qg.style.height = sb.qg.style.maxHeight = "100%";
	for (var aB = 0; aB < sY.length; aB++) sY[aB].rL(rE), sY[aB].button.style.height = "100%", sY[aB].button.style.padding = "0.0em 0.9em", sY[aB].button.style.whiteSpace = "pre", sb.qg.appendChild(sY[aB].button)
}

function se() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bC.r1.rB(this.e, 8, bD.oD)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sf() {
	var sk, sl, sg = document.createElement("div"),
		sh = document.createElement("div"),
		si = 0,
		sj = 0;
	this.show = function(fF, fH, qi, sm, sn, eg) {
			if (si) {
				if (!sm) return;
				this.sI()
			}
			fF === fH && -1 === fF ? (fF = sk, fH = sl) : (sk = fF, sl = fH);
			var so = Math.floor(bC.r1.sK(.018)),
				sn = (fF = Math.max(so + 2, fF), sn || (sj = sm), si = 1, h.i / h.k),
				sm = (sg.style.whiteSpace = "pre", sg.textContent = qi, bC.r1.rB(sg, 5), sg.style.font = bC.r1.sq(0, bC.r1.sK(.015)), sg.style.padding = "0.3em 0.6em", sg.style.left = fF + "px", sg.style.top = "0px", document.body.appendChild(sg),
					fF + sg.offsetWidth - sn),
				qi = (0 < sm && (fF -= sm, fF = Math.max(so + 1, fF), sg.style.left = fF + "px", fF < so + 2) && (sg.style.whiteSpace = "pre-wrap"), sg.offsetHeight);
			sg.style.top = fH - qi + sj * be.ss + "px", fF -= so, sh.style.backgroundColor = bC.color.nw(eg >> 12 << 2, (eg >> 6 & 63) << 2, (63 & eg) << 2), sh.style.left = fF + "px", sh.style.top = sg.style.top, sh.style.width = so + "px", sh.style
				.height = qi + "px", bC.r1.rB(sh, 4), bC.r1.rB(sh, 8), bC.r1.rB(sh, 2), document.body.appendChild(sh)
		}, this.sI = function(st) {
			if (si) {
				if (st && sj) return 0;
				si = 0, t.removeChild(document.body, sg), t.removeChild(document.body, sh)
			}
			return 1
		}, sg.style.position = "absolute", sg.style.backgroundColor = bD.o0, sg.style.color = bD.o4, sg.style.pointerEvents = "none", sg.style.zIndex = "5", sg.style.maxWidth = "100%", sh.style.position = "absolute", sh.style.color = bD.o4, sh.style
		.pointerEvents = "none", sh.style.zIndex = "5"
}

function rp(su, type, sv, sw) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sx++, e.value = su.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bD.o4, e.style.backgroundColor = bD.nx, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sy++
		}), e.addEventListener("blur", function() {
			h.sy--, -1 !== su.eF && bl.pV.pW(su.eF, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== su.eF && bl.pV.pW(su.eF, e.value), sv ? sv() : e.blur())
		}), sw && e.addEventListener("input", function(qt) {
			sw(qt)
		})
}

function sz(qv, data, t0) {
	var f8 = data.t1.length,
		t2 = document.createElement("div"),
		t3 = document.createElement("div"),
		t4 = document.createElement("div"),
		t5 = new Array(f8),
		qw = new Array(f8),
		t6 = new Array(data.t7.length),
		t8 = bC.color.ny(70, 70, 0, .35);

	function rW() {
		this.style.backgroundColor = bC.color.rW(t8, 160)
	}

	function tF() {
		this.style.backgroundColor = t8
	}

	function r4() {
		var fR;
		for (qv.style.font = bC.r1.sq(0, bC.r1.tP(.026, .5, .03)), aB = 1; aB < t6.length; aB++) bC.r1.rB(t6[aB], 4);
		if (bC.r1.rB(t2, 2), f8) {
			for (var ha, tQ = t2.offsetWidth, tR = t4.offsetWidth, aB = 0; aB < t6.length; aB++) ha = .01 * data.tE[aB] * tR, t6[aB].style.width = (100 * ha / tQ).toFixed(2) + "%";
			var lO = data.t1[0].length;
			for (aB = 0; aB < f8; aB++)
				for (bC.r1.rB(t5[aB], 2), fR = 1; fR < lO; fR++) bC.r1.rB(qw[aB][fR], 4);
			t3.t9 && (t3.scrollTop = t3.t9)
		}
	}
	this.resize = function() {
			r4(), r4()
		}, qv.style.display = "flex", qv.style.flexDirection = "column", t3.style.overflowX = "hidden", t3.style.overflowY = "auto", t3.addEventListener("scroll", function() {
			this.t9 = this.scrollTop, t0 && t0.tA && (t.y.tB[t0.tA] = this.scrollTop)
		}),
		function() {
			var fB, aB, t1 = data.t1,
				lO = f8 ? t1[0].length : 0;
			for (aB = 0; aB < f8; aB++) {
				t5[aB] = document.createElement("div"), t5[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bC.color.ny(130, 130, 130, .35) : bD.o3
				}(aB), t5[aB].style.width = "100%", t5[aB].style.display = "flex", qw[aB] = new Array(lO);
				for (var fR = 0; fR < lO; fR++) qw[aB][fR] = fB = document.createElement("div"), fB.style.display = "flex", fB.style.justifyContent = "center", fB.style.wordBreak = "break-all", fB.style.padding = "0.4em 0em", fB.style.width = data
					.tE[fR] + "%", fB.innerHTML = t1[aB][fR].fa, 1 === t1[aB][fR].eX && (fB.name = "" + aB, fB.style.color = bD.p4, fB.style.backgroundColor = t8, fB.addEventListener("mouseover", rW), fB.addEventListener("mouseout", tF), function(fB,
						tH, tI) {
						2147483647 !== tI && fB.addEventListener("click", function() {
							bF.a7(30), bF.a8(30, tH), bJ.dh(bF.aC), this.style.backgroundColor = t8, t.u(8, t.tJ, new tK(25, {
								tL: 0,
								tH: bH.tM.tN(bH.tM.tO(5)),
								tI: tI
							}))
						})
					}(fB, t1[aB][fR].tH, t1[aB][fR].tI)), t5[aB].appendChild(fB)
			}
			for (t2.style.display = "flex", t2.style.backgroundColor = bC.color.ny(0, 120, 0, .35), aB = 0; aB < t6.length; aB++) t6[aB] = fB = document.createElement("div"), fB.style.display = "flex", fB.style.justifyContent = "center", fB.style
				.wordBreak = "break-all", fB.style.padding = "0.4em 0em", fB.style.width = data.tE[aB] + "%", fB.innerHTML = data.t7[aB], t2.appendChild(fB)
		}();
	for (var aB = 0; aB < f8; aB++) t4.appendChild(t5[aB]);
	t3.appendChild(t4), qv.appendChild(t2), qv.appendChild(t3), t0 && t0.tA && (t3.t9 = t.y.tB[t0.tA])
}

function tS() {
	var tW, tX, tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("div"),
		t4 = document.createElement("div"),
		ra = [],
		eA = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		tY = [1, 2, 3, 0, 9, 10, 11, 13];

	function ta(aB) {
		t.u(8, 0, new tK(21, {
			tc: tY[aB],
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
			this.pW(t.y.tf), document.body.appendChild(tT)
		}, this.sI = function() {
			t.removeChild(document.body, tT)
		}, this.pW = function(tf) {
			for (var tg = [3, 0, 1, 2, 4, 5, 6, 7], aB = 0; aB < ra.length; aB++) {
				var i = tf[aB];
				tW[tg[aB]][1].rz.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, th = be.gap,
				j = bC.r1.ti(.085),
				i = Math.min(4 * j, h.i - 2 * th),
				f8 = ra.length;
			for (bC.r1.tj(tT, th, h.j - th - j, i, j), bC.r1.rB(tT), bC.r1.rB(tU, 6), aB = 0; aB < f8 - 1; aB++) bC.r1.rB(ra[aB].button, 6);
			for (aB = 0; aB < f8; aB++) tW[aB][0].resize(), tW[aB][1].resize();
			for (ra[0].fF = 0, ra[0].button.style.left = bC.r1.rA(ra[0].fF), ra[0].button.style.width = bC.r1.tk(1.7 * j), aB = 1; aB < f8; aB++) ra[aB].fF = ra[aB - 1].fF + ra[aB - 1].button.offsetWidth, ra[aB].button.style.left = bC.r1.rA(ra[aB]
				.fF);
			if (!tX) {
				if (!ab.tl()) return;
				(tX = ab.get(14)).style.width = "24%", tX.style.position = "absolute", tU.appendChild(tX)
			}
			tX.style.left = bC.r1.rA(0), tX.style.top = "7%", tV.tm && (tV.scrollLeft = tV.tm)
		}, tT.style.position = "absolute", tU.style.width = "25%", tU.style.height = "100%", tU.style.backgroundColor = bD.o0, tV.style.position = "absolute", tV.style.width = "75%", tV.style.height = "100%", tV.style.backgroundColor = bD.o0, tV
		.style.top = tV.style.right = bC.r1.rA(0), bC.r1.tZ(tV), t4.style.height = t4.style.maxHeight = "100%", ra.push(new w("", function() {
			ta(0)
		}, bD.op)), ra.push(new w("", function() {
			ta(1)
		}, bD.oq)), ra.push(new w("", function() {
			ta(2)
		}, bD.oi)), ra.push(new w("", function() {
			ta(3)
		}, bD.oS)), ra.push(new w("", function() {
			ta(4)
		}, bD.pF)), ra.push(new w("", function() {
			ta(5)
		}, bD.pB)), ra.push(new w("", function() {
			ta(6)
		}, bD.pF)), ra.push(new w("", function() {
			ta(7)
		}, bD.nv)), tW = new Array(ra.length);
	for (var aB = 0; aB < ra.length; aB++) ra[aB].button.style.position = "absolute", tW[aB] = [new tb(eA[aB], ra[aB].button, .25, .45), new tb("", ra[aB].button, .53, .84, 1)], ra[aB].button.style.height = ra[aB].button.style.maxHeight = "100%", ra[
		aB].button.top = bC.r1.rA(0), t4.appendChild(ra[aB].button);
	tV.appendChild(t4), tT.appendChild(tU), tT.appendChild(tV)
}

function tn(tp, tq, tr, ts, ri, rj) {
	var tt = document.createElement("div"),
		tu = document.createElement("div"),
		tv = document.createElement("div"),
		tw = document.createElement("div"),
		tx = document.createElement("div"),
		ty = document.createElement("div"),
		tz = document.createElement("div"),
		u0 = document.createElement("div"),
		u1 = document.createElement("span"),
		u2 = document.createElement("div");
	this.u3 = new rh(ri, rj), this.u4 = new u5(rj), this.u6 = [tp, tq, tr, ts], this.uA = function(uB) {
		uB = (uB / 10).toFixed(1) + "%";
		u0.style.width = uB, u1.innerHTML = uB
	}, this.uC = function() {
		this.u4.sI(ty), this.u3.show(ty)
	}, this.uD = function() {
		this.u3.sI(ty), this.u4.show(ty)
	}, this.uE = function() {
		return tu
	}, this.show = function() {
		document.body.appendChild(tt)
	}, this.sI = function() {
		t.removeChild(document.body, tt)
	}, this.resize = function(uF) {
		var uG = 1 - .4 * a0.a1.iH() * (h.i > 1.6 * h.j),
			uH = bC.r1.sK(.05 * uG),
			uI = h.j > h.i,
			uJ = bC.r1.sK(.06 * uG + .03 * uI),
			uK = bC.r1.sK(.08 * uG + .03 * uI),
			uL = bC.r1.sK(.04 + .02 * uI),
			uI = bC.r1.sK(.02 * uG + .01 * uI),
			uN = bC.r1.sK(.025);
		tt.style.font = bC.r1.sq(0, uN), tx.style.font = bC.r1.sq(0, .9 * uN), u2.style.font = bC.r1.sq(0, .9 * uN), uG < 1 && (uN = bC.r1.sq(0, uG * uN), tv.style.font = uN, tx.style.font = uN, u2.style.font = uN, tz.style.font = uN, tw.style
				.font = uN), tu.style.height = bC.r1.rA(uH), tu.style.font = bC.r1.sq(0, .72 * uH), bC.r1.rB(tu, 2), tv.style.top = bC.r1.rA(uH), tv.style.height = bC.r1.rA(uK), bC.r1.rB(tv, 2), tw.style.font = bC.r1.sq(0, uG * bC.r1.sK(.02)), tw
			.style.top = bC.r1.rA(uH + uK), tw.style.height = bC.r1.rA(uL), bC.r1.rB(tw, 2), tx.style.top = bC.r1.rA(uH + uK + uL), tx.style.height = bC.r1.rA(uJ), bC.r1.rB(tx, 2), ty.style.top = bC.r1.rA(uH + uK + uL + uJ), ty.style.height = bC
			.r1.rA(h.j / h.k - uH - uK - 2 * uJ - uL - uI), tz.style.top = bC.r1.rA(h.j / h.k - uJ - uI), tz.style.height = bC.r1.rA(uI), bC.r1.rB(tz, 8), u1.style.font = bC.r1.sq(0, .8 * uI), u2.style.top = bC.r1.rA(h.j / h.k - uJ), u2.style
			.height = bC.r1.rA(uJ), bC.r1.rB(u2, 8), tp.resize(tv), tq.resize(tv), tr.resize(tv), ts.resize(tv), uF ? this.u3.resize(ty) : this.u4.resize()
	};
	ri = this;
	tt.style.position = "absolute", tt.style.top = "0", tt.style.left = "0", tt.style.width = "100%", tt.style.height = "100%", tt.style.backgroundColor = bD.o3, bL.rT() || (tt.style.backdropFilter = "blur(4px)", tt.style.webkitBackdropFilter =
		"blur(4px)"), tu.style.position = "absolute", tu.style.top = "0", tu.style.left = "0", tu.style.width = "100%", tu.style.display = "flex", tu.style.alignItems = "center";
	for (var g = [tv, tw, tx, u2], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bC.r1.tZ(g[aB]);
	ty.style.position = "absolute", ty.style.left = "0", ty.style.width = "100%", ty.style.font = "inherit", tz.style.position = "absolute", tz.style.left = "0", tz.style.width = "100%", u0.style.position = "absolute", u0.style.top = "0", u0.style
		.left = "0", u0.style.height = "100%", u0.style.width = "50%", u0.style.backgroundColor = bD.oQ, u1.innerHTML = "", u1.style.position = "absolute", u1.style.top = "50%", u1.style.left = "50%", u1.style.transform = "translate(-50%, -50%)", tu
		.appendChild(function() {
			var u9 = document.createElement("h1");
			return u9.textContent = L(24), u9.style.margin = "0 auto 0.15em auto", u9.style.fontFamily = "Arial Black, system-ui", u9.style.fontSize = "inherit", u9.style.fontWeight = "inherit", u9
		}()), tv.appendChild(tp.qg), tw.appendChild(tq.qg), tx.appendChild(tr.qg), tz.appendChild(u0), tz.appendChild(u1), u2.appendChild(ts.qg), tt.appendChild(tu), tt.appendChild(tv), tt.appendChild(tw), tt.appendChild(tx), tt.appendChild(ty), tt
		.appendChild(tz), tt.appendChild(u2), ri.u4.show(ty)
}

function u5(rj) {
	var tt = document.createElement("div"),
		ty = document.createElement("div");
	this.mq = function() {
			ty.textContent = "", bp.uP.uQ && bp.uP.sI(1);
			for (var sA = document.createDocumentFragment(), uR = bp.y.s5[0], uS = bp.uS.uT[uR], uU = bp.uS.uU[uR], aB = 0; aB < uS.length; aB++) ! function(sA, qt, uW, uR) {
				var rz = document.createElement("span");
				rz.textContent = (uW ? "🟢 " : "⚪ ") + bp.lI.uX(qt, uR), rz.style.color = bp.lI.uY(qt.uZ), 11 === qt.uZ && (rz.style.ua = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				rz.style.cursor = "pointer", rz.style.margin = "0.2em 0.2em 0.2em 0.2em", rz.style.width = rz.style.maxWidth = 2 === uR ? "10em" : "9em", rz.style.height = rz.style.maxHeight = "1.4em", rz.style.whiteSpace = "nowrap", rz.style
					.overflow = "hidden", rz.style.textOverflow = "ellipsis", rz.style.font = "inherit", rz.style.display = "inline-block", bp.lI.ub(qt) && (rz.style.textDecoration = "underline"), qt.uc && (rz.style.textDecorationLine =
						"underline", rz.style.textDecorationStyle = "dotted");
				rz.onclick = function(e) {
					rj(e, qt)
				}, bL.rT() || (rz.onmouseover = function(e) {
					bp.uP.ud(e.target, qt, 1)
				}), sA.appendChild(rz)
			}(sA, uS[aB], aB < uU, uR);
			ty.appendChild(sA)
		}, this.show = function(qv) {
			qv.appendChild(tt)
		}, this.sI = function(qv) {
			t.removeChild(qv, tt)
		}, this.resize = function() {
			ty.style.fontSize = bC.r1.rA(bC.r1.sK(.02, .3))
		}, tt.style.top = "0", tt.style.left = "0", tt.style.width = tt.style.height = "100%", tt.style.overflowX = "hidden", tt.style.overflowY = "auto", tt.style.font = "inherit", ty.style.font = "inherit", ty.style.margin = "0.4em", tt
		.appendChild(ty)
}

function ue(uf) {
	var tt = document.createElement("div"),
		rm = document.createElement("div"),
		ug = [];

	function rO() {
		bL.rT() || (this.style.backgroundColor = bC.color.rW(bD.o0, 50))
	}

	function rP() {
		this.style.backgroundColor = bD.o0
	}
	this.pW = function(ui, uj) {
			ug[2].textContent = ui + 1 + " / " + uj
		}, this.show = function(qt) {
			qt = bp.lI.sC(qt, bp.lI.sD(qt)), rm.appendChild(bp.sH.transform(qt)), document.body.appendChild(tt)
		}, this.resize = function() {
			var j = bC.r1.sK(.03, .5);
			tt.style.width = 10 * j + "px", tt.style.font = bC.r1.sq(1, .75 * j), bC.r1.rB(tt, 4), rm.style.top = j + "px", rm.style.font = bC.r1.sq(0, .55 * j), bC.r1.rB(rm, 2), tt.style.height = j + rm.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bC.r1.rB(ug[aB], 6), ug[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) ug[aB].style.height = j + "px", bC.r1.rB(ug[aB], 2);
			ug[2].style.width = 4 * j + "px", ug[1].style.left = 2 * j + "px", ug[2].style.left = 4 * j + "px", ug[3].style.left = 8 * j + "px"
		}, this.uk = function() {
			for (var aB = 0; aB < 4; aB++) ug[aB].onclick = null, ug[aB].onmouseover = null, ug[aB].onmouseout = null;
			t.removeChild(document.body, tt), tt = rm = ug = null
		}, tt.style.position = "absolute", tt.style.color = bD.o4, tt.style.zIndex = "3", tt.style.right = "0", tt.style.top = "0", rm.style.position = "absolute", rm.style.height = "auto", rm.style.color = bD.o4, rm.style.backgroundColor = bD.o0, rm
		.style.left = "0", rm.style.width = "100%", rm.style.overflowWrap = "break-word", tt.appendChild(rm);
	for (var aB = 0; aB < 4; aB++) ug[aB] = document.createElement("div"), ug[aB].style.position = "absolute", ug[aB].style.backgroundColor = bD.o0, ug[aB].style.color = bD.o4, ug[aB].style.top = "0", ug[aB].style.display = "flex", ug[aB].style
		.justifyContent = "center", ug[aB].style.alignItems = "center", ug[aB].style.userSelect = "none", ug[aB].style.outline = "none", ug[aB].style.font = "inherit", 2 !== (ug[aB].uh = aB) && (ug[aB].onclick = uf, ug[aB].onmouseover = rO, ug[aB]
			.onmouseout = rP), tt.appendChild(ug[aB]);
	ug[0].textContent = "◀", ug[1].textContent = "▶", ug[3].textContent = "✖"
}

function ul(uf) {
	var sg = document.createElement("div");

	function rO() {
		bL.rT() || (sg.style.backgroundColor = bC.color.rW(bD.o0, 50))
	}

	function rP() {
		sg.style.backgroundColor = bD.o0
	}
	this.pW = function(uj) {
			sg.textContent = uj
		}, this.show = function() {
			document.body.appendChild(sg)
		}, this.resize = function() {
			var j = bC.r1.sK(.03, .5);
			sg.style.width = 2 * j + "px", sg.style.height = j + "px", sg.style.font = bC.r1.sq(1, .75 * j), bC.r1.rB(sg, 4), bC.r1.rB(sg, 2)
		}, this.uk = function() {
			sg.onclick = null, sg.onmouseover = null, sg.onmouseout = null, t.removeChild(document.body, sg), sg = null
		}, sg.style.position = "absolute", rP(), sg.style.color = bD.o4, sg.style.zIndex = "3", sg.style.right = "0", sg.style.top = "0", sg.style.display = "flex", sg.style.justifyContent = "center", sg.style.alignItems = "center", sg.style
		.userSelect = "none", sg.style.outline = "none", sg.onclick = uf, sg.onmouseover = rO, sg.onmouseout = rP
}

function um(sY) {
	var tt = document.createElement("div"),
		un = document.createElement("div"),
		si = (this.fF = 0, this.fH = 0);

	function up() {
		bp.uq.sI()
	}
	this.ra = sY, this.show = function(fF, fH, us) {
		if (si) return [0, 0];
		si = 1, this.fF = fF, this.fH = fH,
			function(self, us) {
				var i = bC.r1.sK(.16, .7),
					j = sY.length * i / 3,
					uu = h.i / h.k,
					uv = h.j / h.k,
					ng = Math.min(1, Math.min(uu / i, uv / j));
				i *= ng, j *= ng, us && (self.fF += bC.r1.sK(.03, .5)), self.fF = bN.iG(self.fF, 0, uu - i), self.fH = bN.iG(self.fH, 0, uv - j), un.style.left = self.fF + "px", un.style.top = self.fH + "px", un.style.width = i + "px", un.style
					.height = j + "px", un.style.font = bC.r1.sq(0, .3 * j / sY.length), bC.r1.rB(un, 5);
				for (var aB = 1; aB < sY.length; aB++) bC.r1.rB(sY[aB].button, 8)
			}(this, us), document.body.appendChild(tt)
	}, this.sI = function() {
		si && (si = 0, tt.removeEventListener("click", up), t.removeChild(document.body, tt))
	};
	for (var aB = 0; aB < sY.length; aB++) new ry("" + (1 + aB), sY[aB].button, 0, 1);
	tt.style.position = "fixed", tt.style.top = "0", tt.style.left = "0", tt.style.width = "100%", tt.style.height = "100%", tt.style.zIndex = "5", un.style.position = "absolute",
		function() {
			for (var ur = (100 / sY.length).toFixed(2) + "%", aB = 0; aB < sY.length; aB++) sY[aB].button.style.width = "100%", sY[aB].button.style.height = sY[aB].button.style.maxHeight = ur, sY[aB].button.style.padding = "0.0em 0.9em", un
				.appendChild(sY[aB].button)
		}(), tt.appendChild(un), tt.addEventListener("click", up)
}

function eh() {
	var uw, ux, uy;

	function v5(aB) {
		return bC.color.nw(ux[aB][0], ux[aB][1], ux[aB][2])
	}

	function vB(fR, fS) {
		return bC.color.vL(ux[fR], ux[fS]), v5(fS)
	}

	function v3() {
		uw && (uw.remove(), uw = null)
	}
	this.show = function(ei, colors, id) {
		0 <= (uy = id) && b0.y.ec(0) && b0.ed.uz(0, id), ei = (ei = (ei = (ei = (ei = (ei = (ei = (ei = (ei = (ei = (ei = (ei = ei.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ux = colors, (uw = document.createElement("div")).style.position = "fixed", uw.style.top = "0", uw.style.left = "0", uw.style.width = "100%", uw.style.height = "100%", uw.style.backgroundColor = bC.color.ny(ux[0][0], ux[0][1], ux[0][
				2], .6), uw.style.zIndex = "6", uw.onclick = function(e) {
				e.target === uw && v3()
			},
			function(ei) {
				var i4, v4 = document.createElement("div");
				v4.style.position = "absolute", v4.style.display = "flex", v4.style.flexDirection = "column", v4.style.top = "50%", v4.style.left = "50%", v4.style.backgroundColor = v5(2), i4 = a0.a1.iH() ? bC.r1.v6(h.min) : bC.r1.sK(.4);
				i4 = Math.max(i4, 200), v4.style.width = bC.r1.rA(i4), v4.style.height = bC.r1.rA(i4), v4.style.transform = "translate(-50%, -50%)",
					function(v4, i4) {
						var vA = document.createElement("div");
						vA.style.flex = "0 0 10%", vA.style.overflow = "hidden", vA.style.backgroundColor = v5(1), vA.style.color = vB(1, 7), vA.style.font = bC.r1.sq(1, .05 * i4), vA.style.display = "flex", vA.style.alignItems = "center", vA
							.style.justifyContent = "center", vA.innerHTML = L(25), v4.appendChild(vA)
					}(v4, i4),
					function(v4, ei, i4) {
						var vC = document.createElement("div");
						vC.style.flex = "0 0 70%", vC.style.overflowY = "auto", vC.style.overflowX = "hidden", vC.style.whiteSpace = "pre-wrap", vC.style.wordWrap = "break-word", vC.style.padding = bC.r1.rA(.02 * i4), vC.style.backgroundColor =
							v5(2), vC.style.color = vB(2, 8), vC.style.font = bC.r1.sq(0, .07 * i4), vC.innerHTML = ei, vC.innerHTML = "<style>a { color: inherit; }</style>" + vC.innerHTML, v4.appendChild(vC)
					}(v4, ei, i4),
					function(v4, i4) {
						var vD = document.createElement("div"),
							vE = (vD.style.display = "flex", vD.style.flexDirection = "row", vD.style.justifyContent = "space-between", vD.style.alignItems = "stretch", vD.style.backgroundColor = v5(3), vD.style.flex = "1", vD.style.padding = bC
								.r1.rA(.01 * i4), vD.style.gap = bC.r1.rA(.01 * i4), document.createElement("div")),
							vF = (vE.style.flex = "0 0 60%", vE.style.height = "100%", new w(L(26, 0, 0, 1), function() {
								v3()
							}, v5(4), !1)),
							vF = (vF.button.style.width = "100%", vF.button.style.height = "100%", vF.button.style.color = vB(4, 9), vF.button.style.font = bC.r1.sq(1, .05 * i4), vE.appendChild(vF.button), document.createElement("div")),
							vH = (vF.style.flex = "0 0 15%", vF.style.height = "100%", vF.style.backgroundColor = v5(5), document.createElement("div")),
							vI = (vH.style.flex = "1", vH.style.height = "100%", new w(L(27), function(e) {
								return bC.r1.vJ(e), uy < 0 || b0.y.ec(0) && (b0.ed.uz(1, uy), uy = -1), !0
							}, v5(6), !1));
						vI.button.style.width = "100%", vI.button.style.height = "100%", vI.button.style.color = vB(6, 10), vI.button.style.font = bC.r1.sq(1, .035 * i4), vH.appendChild(vI.button), vD.appendChild(vE), vD.appendChild(vF), vD
							.appendChild(vH), v4.appendChild(vD)
					}(v4, i4), uw.appendChild(v4)
			}(ei), document.body.appendChild(uw)
	}
}

function vM(su, vN) {
	this.qr = [];
	var vO = this.qr;

	function click() {
		for (var aB = 0; aB < vO.length; aB++) vO[aB].textContent = vO[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eF = parseInt(this.name);
		void 0 !== su.eF && bl.pV.pW(su.eF, eF), vN && vN(eF)
	}
	for (var vP, f8 = su.t0.length, aB = 0; aB < f8; aB++)(vP = document.createElement("p")).textContent = "⚪ " + su.t0[aB], vP.style.margin = "0", vP.name = "" + aB, vP.style.cursor = "pointer", vP.style.fontSize = "1em", vP.addEventListener(
		"click", click), vO.push(vP);
	vO[su.value].textContent = vO[su.value].textContent.replace("⚪", "🟢")
}

function vQ(title, vR, vS) {
	var tT = document.createElement("div"),
		vT = document.createElement("div"),
		t4 = document.createElement("div"),
		vU = document.createElement("div"),
		vV = document.createElement("div");
	this.vW = t4, this.vX = vR, this.show = function() {
			!1 !== vS ? document.body.appendChild(tT) : (document.body.appendChild(vT), document.body.appendChild(vU))
		}, this.sI = function() {
			!1 !== vS ? t.removeChild(document.body, tT) : (t.removeChild(document.body, vT), t.removeChild(document.body, vU))
		}, this.vb = function() {
			var sL = bC.r1.sK(.1),
				sJ = bC.r1.sK(.08 + .04 * (h.vc < 1), .3);
			return {
				sL: sL,
				sJ: sJ,
				vd: h.j / h.k - sL - sJ
			}
		}, this.resize = function(sc) {
			var f8 = vR.length,
				ve = this.vb(),
				sL = ve.sL,
				sJ = ve.sJ;
			for (vT.style.height = bC.r1.rA(sL), bC.r1.rB(vT, 2), vU.style.top = bC.r1.rA(h.j / h.k - sJ), vU.style.height = bC.r1.rA(sJ), bC.r1.rB(vU, 8), t4.style.top = bC.r1.rA(sL), t4.style.height = t4.style.maxHeight = bC.r1.rA(ve.vd), vT.style
				.font = bC.r1.sq(0, bC.r1.sK(.02, .15)), vU.style.font = bC.r1.sq(0, bC.r1.sK(.02, .7)), t4.style.font = bC.r1.sq(0, bC.r1.sK(.02, .35)), aB = 1; aB < f8; aB++) bC.r1.rB(vR[aB].button, 4);
			for (var sd = 0, aB = 0; aB < f8; aB++) sd += vR[aB].button.offsetWidth;
			if (sc && sd < vU.offsetWidth)
				for (aB = 0; aB < f8; aB++) vR[aB].button.style.width = (100 * vR[aB].button.offsetWidth / sd).toFixed(2) + "%";
			else
				for (aB = 0; aB < f8; aB++) vR[aB].button.style.width = "auto";
			vU.tm && (vU.scrollLeft = vU.tm), sc || this.resize(!0)
		}, this.vf = function() {
			var ve = this.vb(),
				eg = h.k;
			vg.fillStyle = bD.o0, vg.fillRect(0, eg * ve.sL, h.i, eg * ve.vd)
		}, tT.style.position = "absolute", tT.style.top = "0", tT.style.left = "0", tT.style.width = "100%", tT.style.height = "100%", vT.style.position = "absolute", vT.style.top = "0", vT.style.left = "0", vT.style.width = "100%", vT.style
		.display = "flex", vT.style.backgroundColor = bD.o0, vU.style.position = "absolute", vU.style.left = "0", vU.style.width = "100%", bC.r1.tZ(vU), vV.style.height = vV.style.maxHeight = "100%", t4.style.position = "absolute", t4.style.width =
		"100%", t4.style.backgroundColor = bD.o0,
		function() {
			for (var aB = 0; aB < vR.length; aB++) vR[aB].button.style.height = "100%", vR[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vR.length; aB++) vV.appendChild(vR[aB].button);
	vT.appendChild(function() {
		var va = document.createElement("h1");
		return va.textContent = title, va.style.margin = "auto", va.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", va.style.fontFamily = "Arial Black, system-ui", va
	}()), vU.appendChild(vV), !1 !== vS && (tT.appendChild(t4), tT.appendChild(vT), tT.appendChild(vU))
}

function ry(vh, vi, vj, vk) {
	var self;
	this.rz = document.createElement("span"), (self = this).rz.textContent = vh, self.rz.style.color = bD.o4, self.rz.style.position = "absolute", self.rz.style.font = "inherit", vk ? self.rz.style.bottom = "0.06em" : self.rz.style.top = "0.12em",
		vj ? self.rz.style.left = "0.2em" : self.rz.style.right = "0.2em", self.rz.style.fontSize = "0.6em", self.rz.style.pointerEvents = "none", self.rz.style.whiteSpace = "pre", vi.style.position = "relative", vi.style.overflow = "hidden", vi
		.appendChild(self.rz)
}

function tb(vh, vi, vl, vm, vn) {
	var self;
	this.rz = document.createElement("span"), this.resize = function() {
			this.rz.style.fontSize = ((vm - vl) * vi.offsetHeight).toFixed(1) + "px"
		}, (self = this).rz.textContent = vh, self.rz.style.color = bD.o4, self.rz.style.font = "inherit", self.rz.style.margin = "0.1em 0.6em", self.rz.style.pointerEvents = "none", vn && (self.rz.style.fontWeight = "bold"), self.rz.style
		.whiteSpace = "nowrap", self.rz.style.display = "block", vi.appendChild(self.rz)
}

function vo(vp, vq, vr, vs) {
	var vt = document.createElement("textarea"),
		vu = (this.e = vt, !0);

	function vz() {
		vt.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vq && bC.r1.rB(vt, 5)
		}, this.vv = function(ei) {
			vt.value = ei
		}, this.vw = function() {
			return vt.value
		}, this.vx = function() {
			vt.select()
		}, this.clear = function() {
			vt.value = ""
		}, this.vy = function() {
			vu && navigator.clipboard ? (vt.select(), navigator.clipboard.writeText(vt.value).catch(function() {
				vu = !1, vz()
			})) : vz()
		}, vt.setAttribute("id", "textArea" + t.y.sx++), vt.setAttribute("autocomplete", "off"), vp && vt.setAttribute("placeholder", vp), vt.style.top = "0", vt.style.left = "0", vt.style.width = "100%", vt.style.height = "100%", vt.style
		.userSelect = "none", vt.style.outline = "none", vt.style.resize = "none", vt.style.border = "none", vt.style.color = bD.o4, vt.style.backgroundColor = bD.nx, vs ? (vt.style.fontSize = "1em", vt.rows = 6, vt.style.padding = "0.25em") : (vt
			.style.padding = "0.45em", vt.style.fontSize = "1.2em"), vr && vt.addEventListener("input", function(e) {
			vr(e)
		}), vt.addEventListener("focus", function() {
			h.sy++
		}), vt.addEventListener("blur", function() {
			h.sy--
		})
}

function dM() {
	this.rI = new w0, this.eT = new w1, this.pV = new w2, this.y = new w3, this.w4 = new w5, this.dh = function() {
		this.eT.dh(), (new w6).dh(), this.w4.dh(), this.y.w7()
	}
}

function w1() {
	function w8(aB, type, wE, e0) {
		bl.eT.data.push({
			eF: aB,
			type: type || 0,
			value: wE || 0,
			wE: wE || 0,
			e0: e0 || 0
		})
	}

	function w9(aB, type, wE, e0) {
		bl.eT.data.push({
			eF: aB,
			type: type,
			value: wE || "",
			wE: wE || "",
			e0: e0 || 0
		})
	}

	function wA(nm) {
		for (var aB = bl.eT.data.length; aB < nm; aB++) bl.eT.data.push(null)
	}
	this.data = [], this.dh = function() {
		w8(0, 1, 0, 5), w8(1, 1, 1), w8(2, 0), w9(3, 2), w8(4, 1), w9(5, 2, "system-ui", 2), w8(6, 0), w8(7, 0, 0), w8(8, 0), w8(9, 1, 1), w8(10, 1), w8(11, 1, 1), w9(12, 2, navigator.language), w8(13), w8(14), w8(15, 0, 1), w8(16, 0, 4), wA(
			100), w9(100, 2), w9(101, 2), w9(102, 2), w9(103, 2), w9(104, 2), w9(105, 2), w9(106, 2), w8(107), w8(108), w8(109), w9(110, 2), w8(111), w8(112), w8(113), w9(114, 2), w8(115), w9(116, 2), w8(117, 1), w9(118, 2, "", 2), w8(119, 1, 0,
				1), w9(120, 2), w8(121, 1, ~~(262144 * Math.random())), w9(122, 2, "Player " + Math.floor(1e3 * Math.random())), w8(123), w9(124), w8(125, 1), w9(126, 2), w8(127, 0, 1), w8(128), w8(129), w8(130), w8(131), w8(132), w9(133, 2), w8(
				134, 0, 5), w9(135, 2), w9(136, 2), w8(137), w8(138), w8(139), w8(140), w8(141), w8(142), w8(143), w8(144), w9(145, 2), w8(146), w8(147), w9(148, 2), w8(149), w8(150, 0, 1), w9(151, 2), w8(152, 0, 5), w8(153, 1), w8(154, 1), w9(
				155, 2), w9(156, 2), w8(157), w8(158), w8(159), w8(160), w9(161, 2), w8(162, 0, 1024), w9(163, 2, "0,0,0"), w9(164, 2, "100,100,100"), w9(165, 2, "30,30,30"), w9(166, 2, "70,70,70"), w9(167, 2, "100,100,100"), w9(168, 2,
				"85,85,85"), w9(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) w9(170 + aB, 2, "255,255,255");
		w9(174, 2), w9(175, 2), w8(176, 0, 200), wA(180), w8(180, 0), w8(181, 0), w8(182, 0, 1023), w9(183, 2)
	}, this.pW = function(eF, value) {
		this.data[eF].value = value
	}, this.wB = function(eF, value) {
		this.pW(eF, value);
		var value = String(value),
			f8 = value.length;
		5e4 < f8 ? console.log("storage value too large: index " + eF + " size " + f8) : (bl.rI.save(eF, value), bl.rI.save(eF, String(this.data[eF].e0), !0))
	}, this.wC = function(eF) {
		return Number(this.data[eF].value)
	}, this.wD = function(eF) {
		return String(this.data[eF].value)
	}
}

function w5() {
	var wF = [];

	function wJ(tH) {
		wF.unshift(tH), bl.pV.pW(161, wF.join(";"))
	}

	function wI(tH) {
		for (var wL = wF, f8 = wL.length, aB = 0; aB < f8; aB++)
			if (wL[aB] === tH) return wL.splice(aB, 1), bl.pV.pW(161, wL.join(";")), 1
	}
	this.dh = function() {
		var qi = bl.eT.data[161].value;
		qi.length && (wF = qi.split(";"))
	}, this.get = function() {
		return wF
	}, this.wG = function() {
		return {
			t0: wF,
			value: 0
		}
	}, this.uc = function(tH) {
		return bC.r9.has(wF, tH)
	}, this.wH = function(tH) {
		return wI(tH) ? 0 : (wJ(tH), 1)
	}, this.mq = function(tH) {
		wI(tH) && wJ(tH)
	}, this.wK = function(eF) {
		eF < wF.length && (wF.splice(eF, 1), bl.pV.pW(161, wF.join(";")))
	}
}

function w0() {
	this.wM = function(eF, e0) {
		return Number(this.wN(eF, e0))
	}, this.wN = function(eF, e0) {
		var fa = null;
		return 0 === a0.id ? a0.wO && (fa = a0.wO.getItem((e0 ? "v" : "d") + eF)) : 1 === a0.id ? fa = a0.wP.loadString((e0 ? 1e3 : 2e3) + eF) : 2 === a0.id && (fa = a0.wQ[(e0 ? "v" : "d") + eF]), fa && 0 !== fa.length ? fa : null
	}, this.wR = function(f8, wS) {
		var g = [],
			wT = wS ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wO)
				for (aB = 0; aB < f8; aB++) g.push(a0.wO.getItem(wT + aB))
		} else if (1 === a0.id)
			for (var wU = wS ? 5e3 : 3e3, aB = 0; aB < f8; aB++) g.push(a0.wP.loadString(wU + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f8; aB++) g.push(a0.wQ[wT + aB]);
		return g
	}, this.save = function(eF, value, e0) {
		var wV = (e0 ? "v" : "d") + eF;
		if (0 === a0.id) {
			if (a0.wO && bl.eT.data[140].value) try {
				a0.wO.setItem(wV, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wP.saveString((e0 ? 1e3 : 2e3) + eF, value) : 2 === a0.id && (a0.wQ[wV] = value, a0.wW.postMessage(wV + " " + value))
	}, this.wX = function(g, wS) {
		var f8 = g.length,
			wT = wS ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wO && bl.eT.data[140].value) try {
				for (aB = 0; aB < f8; aB++) a0.wO.setItem(wT + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wU = wS ? 5e3 : 3e3, aB = 0; aB < f8; aB++) a0.wP.saveString(wU + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f8; aB++) a0.wQ[wT + aB] = g[aB], a0.wW.postMessage(wT + aB + " " + g[aB])
	}
}

function w6() {
	this.dh = function() {
		! function() {
			var data = bl.eT.data;
			0 === data[2].e0 && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].wE = 1);
			0 === data[100].e0 && (data[100].value = data[100].wE = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bl.eT.data,
			f8 = data.length;
		for (aB = 0; aB < f8; aB++) {
			var wa = bl.rI.wM(aB, !0);
			data[aB] && data[aB].e0 === wa && (null === (wa = bl.rI.wN(aB)) ? data[aB].value = data[aB].wE : 2 === data[aB].type ? data[aB].value = wa : (wa = Number(wa), isNaN(wa) ? data[aB].value = data[aB].wE : data[aB].value = wa))
		}
	}
}

function w3() {
	function wf(g) {
		if (0 === g.length) bl.pV.pW(116, "");
		else {
			for (var wi = g[0], aB = 1; aB < g.length; aB++) wi += ";" + g[aB];
			bl.pV.pW(116, wi)
		}
	}
	this.wc = function() {
		bl.eT.data[110].value.length && (bl.eT.data[106].value = bl.eT.data[110], bl.pV.pW(110, ""), this.wd())
	}, this.wd = function() {
		var g = bl.eT.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bl.eT.data[106].value), g.unshift(bl.eT.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var we = [], aB = 0; aB < g.length; aB += 2) we.push(g[aB]);
		wf(g), bl.eT.data[117].value = 0, bl.eT.data[117].t0 = we
	}, this.wg = function(eF) {
		bl.eT.data[117].t0.splice(eF, 1), bl.eT.data[117].value = Math.min(eF, bl.eT.data[117].t0.length - 1);
		var g = bl.eT.data[116].value.split(";");
		g.splice(2 * eF, 2), wf(g)
	}, this.wh = function(eF) {
		var g = bl.eT.data[116].value.split(";");
		return {
			tH: g[2 * eF],
			password: g[2 * eF + 1]
		}
	}, this.wj = function() {
		var fa = bN.iG(bl.eT.data[121].value, -1, 262143);
		return fa = -1 === fa ? ~~(262144 * Math.random()) : fa
	}, this.w7 = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var wk, qi = g[aB].trim();
			0 !== qi.length && (wk = 0 <= (wk = qi.indexOf("=")) ? qi.substring(0, wk) : qi, document.cookie = wk + "=;expires=0;path=/", document.cookie = wk + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wk +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function w2() {
	this.pW = function(eF, value) {
		2 !== bl.eT.data[eF].type && (value = Math.floor(value)), bl.eT.data[eF].value !== value && (bl.eT.wB(eF, value), 0 === eF ? (t.x(), b9.dh(), t.u(2)) : 1 === eF ? h.ds(1) : 2 === eF ? h.ds(0) : 5 === eF && (bC.r1.wl(), h.ds(0)))
	}, this.wm = function() {
		for (var data = bl.eT.data, aB = 0; aB < 100; aB++) data[aB] && bl.eT.wB(aB, data[aB].wE);
		bC.r1.wl(), h.ds(1)
	}, this.wn = function() {
		for (var data = bl.eT.data, aB = 0; aB < data.length; aB++) data[aB] && bl.eT.pW(aB, data[aB].wE)
	}, this.wo = function() {
		for (var fS = bl.eT, aB = 128; aB < 135; aB++) fS.wB(aB, fS.data[aB].wE)
	}, this.wp = function(data) {
		bl.pV.pW(109, data.tI), bl.pV.pW(107, data.wq), bl.pV.pW(108, data.wr), bl.pV.pW(112, data.ws), bl.pV.pW(111, data.wt), bl.pV.pW(113, data.wu), bl.pV.pW(135, data.wv), bl.pV.pW(136, data.ww), bl.pV.pW(137, data.wx), bl.pV.pW(138, data
			.wy), bl.pV.pW(139, data.wz), bl.pV.pW(141, data.x0), bl.pV.pW(142, data.x1), bl.pV.pW(143, data.x2), bl.pV.pW(144, data.x3)
	}
}

function c6() {
	this.tM = new x4, this.x5 = new x6, this.x7 = new x8, this.dh = function() {
		this.tM.dh()
	}
}

function x6() {
	this.x9 = function(size) {
		for (var xA = bJ, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(xA.q9(16)));
		return g.join("")
	}, this.xB = function(qi) {
		return 20 < (qi = qi.trim()).length ? qi.substring(0, 20) : qi
	}
}

function x4() {
	var xC = new Uint8Array(78);
	this.dh = function() {
		var aB;
		for (xC[50] = 37, aB = 0; aB < 10; aB++) xC[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) xC[aB + 20] = aB + 11, xC[aB + 52] = aB + 38
	}, this.xD = function(qi) {
		return qi.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.xE = function(qi, size) {
		if ((qi = this.xD(qi)).length > size) return qi.substring(0, size);
		for (; qi.length < size;) qi = "-" + qi;
		return qi
	}, this.xF = function(qi) {
		for (var xG = xC, f8 = qi.length, g = new Uint8Array(f8), aB = 0; aB < f8; aB++) g[aB] = xG[qi.charCodeAt(aB) - 45];
		return g
	}, this.xH = function(xI) {
		bF.a7(6 * xI.length), this.xJ(xI), bJ.dh(bF.aC)
	}, this.xJ = function(xI) {
		for (var f8 = xI.length, i = bF, aB = 0; aB < f8; aB++) i.a8(6, xI[aB])
	}, this.xK = function(qi) {
		this.xJ(this.xF(qi))
	}, this.xL = function(qi, size) {
		this.xJ(this.xF(this.xE(qi, size)))
	}, this.xM = function(qi, size) {
		for (var g = this.xF(this.xE(qi, size)), fa = 0, ng = 1, aB = g.length - 1; 0 <= aB; aB--) fa += ng * g[aB], ng *= 64;
		return fa
	}
}

function xN() {
	var i, j, xO;

	function xo(ha, fB, xm, xT, xh) {
		fB = xn(ha, fB + 1 + 2 * xT & 3);
		! function(ha, l6) {
			return 1 < Math.abs(ha % i - l6 % i) || 1 < Math.abs(xr(ha) - xr(l6))
		}(ha, fB) && 0 === xh[fB << 2] && (xh[fB << 2] = xm)
	}

	function xr(gg) {
		return Math.floor((gg + .5) / i) % j
	}

	function xn(gg, fB) {
		return gg + xO[fB]
	}
	this.xP = function(qi) {
		var aB, xQ, f8, xR, xA = bJ;
		for (bI.tM.xH(bI.tM.xF(qi)), bU.xU.xV[bU.eo].i = bU.fJ = i = xA.q9(12), bU.xU.xV[bU.eo].j = bU.fK = j = xA.q9(12), xO = [-i, -1, i, 1], bU.xe = document.createElement("canvas"), bU.xe.width = bU.fJ, bU.xe.height = bU.fK, bU.xa = bU.xe
			.getContext("2d", {
				alpha: !1
			}), bU.xb = bU.xf = null, bU.xb = bU.xa.getImageData(0, 0, bU.fJ, bU.fK), bU.xf = bU.xb.data, bC.r9.xg(bU.xf), f8 = xA.q9(12), xQ = xA.q9(5), xR = xX(i * j - 1), aB = 0; aB < f8; aB++) ! function(lO, gg, xS, xT) {
			var aB, fB, xA = bJ,
				xh = bU.xf,
				xi = gg,
				xj = gg,
				xk = 0,
				xl = 1 + xS,
				xm = 2 - xS;
			for (xh[gg << 2] = xl, aB = 0; aB < lO; aB++) fB = xA.q9(2), gg = xn(gg, fB), xh[gg << 2] === xl ? xk % 2 == 1 && xo(xj, xk + 2 * xT + 3, xm, xT, xh) : xh[gg << 2] = xl, xo(gg, fB, xm, xT, xh), xo(xj, fB, xm, xT, xh), xj = gg,
				xk = fB;
			xn(gg, 0) === xi ? (xo(gg, 0, xm, xT, xh), xo(xi, 0, xm, xT, xh)) : xn(gg, 1) === xi && (xo(gg, 0, xm, xT, xh), xo(xi, 2, xm, xT, xh));
			0 === lO && (xo(xi, 0, xm, xT, xh), xo(xi, 2, xm, xT, xh))
		}(xA.q9(xQ), xA.q9(xR), 1 === xA.q9(1), 1 === xA.q9(1));
		var fF, fH, i0, xs, xt, xu, xh = bU.xf,
			xv = !0,
			xw = bU.xU.xV[bU.eo].xw,
			xx = bU.xU.xV[bU.eo].xx;
		for (fH = 0; fH < j; fH++)
			for (xs = !0, xt = xv, fF = xu = 0; fF < i; fF++) i0 = 4 * fH * i + 4 * fF, xu <= fF && 0 < xh[i0] && (xt = 2 === xh[i0], xs) && (xs = !1, xt !== xv) ? (xv = xt, xu = fF + 1, fF = -1) : (xt ? (xh[i0] = xx[0], xh[1 + i0] = xx[1], xh[
				2 + i0] = xx[2]) : (xh[i0] = xw[0], xh[1 + i0] = xw[1], xh[2 + i0] = xw[2]), xh[3 + i0] = 255);
		bU.xa.putImageData(bU.xb, 0, 0), bU.xc = !0, bU.xd.dh(), bh.dp = !0
	}
}

function x8() {
	this.xP = function(xy) {
		for (var xA = bJ, size = xA.q9(xy), xz = 7 + 9 * xA.q9(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(xA.q9(xz)));
		return g.join("")
	}
}

function cB() {
	var sk, sl, y0, y1, y2, y3, y4, y5, y6, y7;

	function y9() {
		var yC = aD.yC;
		for (y6 = yC; y6 < aD.f5; y6++) y8();
		for (y6 = aD.hW ? aD.kT : 0; y6 < yC; y6++) {
			if (!yD()) {
				for (var fS = aD.yH = y6; fS < yC; fS++) y6 = fS, y8();
				return
			}
			yG(y3 + sk * y2 + bN.fZ(y2, 2), y4 + sl * y2 + bN.fZ(y2, 2))
		}
	}

	function yj(player) {
		for (var j1 = ag.j1, j3 = ag.j3, j2 = ag.j2, j4 = ag.j4, fH = j3[player]; fH <= j4[player]; fH++)
			for (var fF = j1[player]; fF <= j2[player]; fF++) {
				var em = ac.yk(fF, fH);
				ac.gi(em) && (ac.je(em) ? ac.gd(em, player) : ac.yl(em, player))
			}
	}

	function yi(g, td, te) {
		var eX = g[td];
		g[td] = g[te], g[te] = eX
	}

	function yD() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sk = bN.fZ(y0 * ay.random(), ay.value(100)), sl = bN.fZ(y1 * ay.random(), ay.value(100)), yq()) return 1;
			return
		}() || function() {
			var iS, iV, fR, yF, fS, yE;
			for (iS = bN.fZ(y0 * ay.random(), ay.value(100)), iV = bN.fZ(y1 * ay.random(), ay.value(100)), fR = 40; 1 <= fR; fR--)
				for (yF = y1 - fR; 0 <= yF; yF -= 40)
					for (sl = (yF + iV) % y1, fS = 40; 1 <= fS; fS--)
						for (yE = y0 - fS; 0 <= yE; yE -= 40)
							if (sk = (yE + iS) % y0, yq()) return 1;
			return
		}()
	}

	function yq() {
		for (var gg, ys, gap = bN.fZ(y2 - y5, 2), yt = y4 + sl * y2 + gap, yu = y3 + sk * y2 + gap, yr = yt + y5 - 1; yt <= yr; yr--)
			for (ys = yu + y5 - 1; yu <= ys; ys--)
				if (gg = ac.yk(ys, yr), !ac.f3(gg) || ac.je(gg)) return;
		return 1
	}

	function yG(yE, yF) {
		y8(), yv(yE - 2, yF - 2)
	}

	function y8() {
		ag.n3[y6] = 0, ag.gw[y6] = ag.yg[y6] = 0, ag.ga[y6] = [], ag.go[y6] = [], ag.gp[y6] = [], ag.fX[y6] = [], ag.j1[y6] = ag.j3[y6] = ag.j2[y6] = ag.j4[y6] = 0
	}

	function yv(yE, yF) {
		var gg, aB, yw, yx;
		for (ag.n3[y6] = 1, ag.j1[y6] = yE + 10, ag.j3[y6] = yF + 10, ag.j4[y6] = ag.j2[y6] = 0, yw = yE; yw < yE + 4; yw++)
			for (yx = yF; yx < yF + 4; yx++)(yE < yw && yw < yE + 3 || yF < yx && yx < yF + 3) && (gg = ac.yk(yw, yx), ac.f3(gg)) && (ag.j1[y6] = Math.min(yw, ag.j1[y6]), ag.j2[y6] = Math.max(yw, ag.j2[y6]), ag.j3[y6] = Math.min(yx, ag.j3[y6]), ag
				.j4[y6] = Math.max(yx, ag.j4[y6]), y7[ag.gw[y6]] = gg, ag.gw[y6]++, ac.yl(gg, y6));
		for (ag.yg[y6] = ag.gw[y6], aB = ag.gw[y6] - 1; 0 <= aB; aB--) ac.yy(y7[aB], y6) ? (ac.gd(y7[aB], y6), ag.go[y6].push(y7[aB])) : ac.yz(y7[aB]) ? (ac.gd(y7[aB], y6), ag.gp[y6].push(y7[aB])) : ac.z0(y7[aB]) && (ac.gd(y7[aB], y6), ag.fX[y6]
			.push(y7[aB]))
	}
	this.dh = function() {
		if (y7 = new Array(12), y5 = 6, y2 = 10, y0 = bN.fZ(bU.fJ, y2), y1 = bN.fZ(bU.fK, y2), y3 = bN.fZ(bU.fJ - y2 * y0, 2), y4 = bN.fZ(bU.fK - y2 * y1, 2), aD.hW)
			for (var aB = 0; aB < aD.kT; aB++) y6 = aB, y8(), ag.n3[y6] = 1;
		(0 === aD.data.spawningType ? y9 : 1 === aD.data.spawningType ? (y9(), function() {
			var yI = aD.yJ;
			aD.yK || yI++;
			if (!(yI < 3)) {
				for (var data = aD.data, jj = (aD.hW ? aD.kT : 0) + data.teamPlayerCount[0], nm = aD.yH, yL = new Uint32Array(yI), yM = new Uint32Array(yI), yN = new Uint16Array(yI), yO = new Uint16Array(yI), f6 = bi.f6, j1 = ag.j1, j3 =
						ag.j3, j2 = ag.j2, j4 = ag.j4, fn = bQ.fn, fo = bQ.fo, aB = jj; aB < nm; aB++) fn[aB] = j1[aB] + j2[aB] >> 1, fo[aB] = j3[aB] + j4[aB] >> 1;
				for (aB = jj; aB < nm; aB++) {
					var id = f6[aB];
					yL[id] += fn[aB], yM[id] += fo[aB]
				}
				var kq = bi.kq;
				for (aB = 1; aB < yI; aB++) {
					var gb = Math.max(data.teamPlayerCount[kq[aB]], 1);
					yN[aB] = bN.fZ(yL[aB], gb), yO[aB] = bN.fZ(yM[aB], gb)
				}
				var yP = bi.yP,
					yQ = bi.yQ,
					yR = bi.yR,
					fm = bQ.fm;
				for (aB = 0; aB < 512; aB++) fm[aB] = aB;
				for (var eE = 0; eE < 2 + (4 <= yI); eE++)
					for (aB = jj; aB < nm; aB++) {
						for (var ha = aB, yS = fm[ha], yT = 1, fO = bN.yU(fn[yS] - yN[1], fo[yS] - yO[1]), fR = 2; fR < yI; fR++) {
							var yV = bN.yU(fn[yS] - yN[fR], fo[yS] - yO[fR]);
							yV < fO && (fO = yV, yT = fR)
						}
						var yW = f6[ha];
						if (yT !== yW) {
							if (2 === eE && 4 <= yI) {
								var yX = Math.max((yT + 1) % yI, 1),
									yY = bN.yU(fn[yS] - yN[yX], fo[yS] - yO[yX]);
								for (fR = 1; fR < yI; fR++) yV = bN.yU(fn[yS] - yN[fR], fo[yS] - yO[fR]), fO < yV && yV < yY && (yY = yV, yX = fR);
								yX !== yW && bN.yU(yN[yW] - yN[yX], yO[yW] - yO[yX]) < bN.yU(yN[yW] - yN[yT], yO[yW] - yO[yT]) && (yT = yX)
							}
							var yZ = kq[yT],
								ya = yQ[yZ] + (aD.hW ? 0 : yR[yZ]),
								l6 = yP[ya],
								yb = fm[l6],
								yc = yQ[yZ + 1];
							fO = bN.yU(fn[yb] - yN[yW], fo[yb] - yO[yW]);
							for (var eg = ya + 1; eg < yc; eg++) {
								var yd = yP[eg],
									ye = fm[yd];
								(yV = bN.yU(fn[ye] - yN[yW], fo[ye] - yO[yW])) < fO && (fO = yV, l6 = yd)
							}
							l6 < jj || nm <= l6 || (yb = fm[l6], yL[yW] += fn[yb] - fn[yS], yM[yW] += fo[yb] - fo[yS], yL[yT] += fn[yS] - fn[yb], yM[yT] += fo[yS] - fo[yb], gb = data.teamPlayerCount[kq[yW]], yN[yW] = bN.fZ(yL[yW], gb),
								yO[yW] = bN.fZ(yM[yW], gb), gb = data.teamPlayerCount[yZ], yN[yT] = bN.fZ(yL[yT], gb), yO[yT] = bN.fZ(yM[yT], gb), fm[ha] = yb, fm[l6] = yS)
						}
					}! function() {
						for (var fm = bQ.fm, j1 = ag.j1, j3 = ag.j3, j2 = ag.j2, j4 = ag.j4, gw = ag.gw, yg = ag.yg, go = ag.go, gp = ag.gp, fX = ag.fX, aB = 0; aB < 512; aB++) {
							var yh = fm[aB];
							if (yh !== aB) {
								yi(j1, aB, yh), yi(j3, aB, yh), yi(j2, aB, yh), yi(j4, aB, yh), yi(gw, aB, yh), yi(yg, aB, yh), yi(go, aB, yh), yi(gp, aB, yh), yi(fX, aB, yh), yj(aB), yj(yh), fm[aB] = aB;
								for (var j = yh, gh = fm[j]; gh !== aB;) gh = fm[j = gh];
								fm[j] = yh
							}
						}
					}()
			}
		}) : function() {
			var yC = aD.yC;
			for (y6 = yC; y6 < aD.f5; y6++) y8();
			for (y6 = aD.hW ? aD.kT : 0; y6 < yC; y6++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							yE = spawningData[2 * y6] + 1,
							spawningData = spawningData[2 * y6 + 1] + 1;
						if (3 < yE && yE < bU.fJ - 5 && 3 < spawningData && spawningData < bU.fK - 5 && ac.f3(ac.yk(yE, spawningData)) && function(yE, yF) {
								var gg, ys, yr;
								for (yr = yF; yF - 6 < yr; yr--)
									for (ys = yE; yE - 6 < ys; ys--)
										if (gg = ac.yk(ys, yr), ac.je(gg)) return;
								return 1
							}(yE + 3, spawningData + 3)) return yG(yE + 1, spawningData + 1), 1;
						return
					}()) {
					if (!yD()) {
						for (var fS = aD.yH = y6; fS < yC; fS++) y6 = fS, y8();
						return
					}
					var yE = y3 + sk * y2 + bN.fZ(y2, 2),
						yF = y4 + sl * y2 + bN.fZ(y2, 2);
					yG(yE, yF)
				}
		})(), bf.mz[7] = ag.gw[aD.es]
	}, this.z1 = function(jc, z2, z3) {
		var aB, yE, yF, gg, sk, sl;
		for (y6 = jc, aB = 0; aB < 20; aB++)
			for (yE = z2 + aB; z2 - aB <= yE; yE--)
				for (yF = z3 + aB; z3 - aB <= yF; yF--)
					if ((yE === z2 + aB || yE === z2 - aB || yF === z3 + aB || yF === z3 - aB) && 3 < yE && yE < bU.fJ - 5 && 3 < yF && yF < bU.fK - 5 && ac.f3(ac.yk(yE, yF)) && function(yE, yF) {
							var gg, ys, yr;
							for (yr = yF; yF - 6 < yr; yr--)
								for (ys = yE; yE - 6 < ys; ys--)
									if (gg = ac.yk(ys, yr), ac.je(gg) && !ac.z9(y6, gg)) return;
							return 1
						}(yE + 3, yF + 3)) {
						if (0 < ag.gw[y6]) {
							for (sl = sk = gg = void 0, sk = ag.j2[y6]; sk >= ag.j1[y6]; sk--)
								for (sl = ag.j4[y6]; sl >= ag.j3[y6]; sl--) gg = 4 * (sl * bU.fJ + sk), ac.z6(y6, gg) && (ac.z7(gg), ag.gw[y6]--);
							y8()
						}
						return yv(yE - 1, yF - 1), !0
					} return !1
	}, this.z8 = function(jc) {
		y6 = jc, yD() ? yG(y3 + sk * y2 + bN.fZ(y2, 2), y4 + sl * y2 + bN.fZ(y2, 2)) : y8()
	}
}

function zA() {
	at.zB(), vg.setTransform(iJ, 0, 0, iJ, 0, 0), vg.imageSmoothingEnabled = iJ < 3, vg.drawImage(bU.xe, aS.zC(), aS.zD()), bR.zE.vf(), vg.drawImage(zF, aS.zC(), aS.zD()), at.vf(), bP.vf(), af.vf(), (aD.nX ? (bj.vf(), bE) : (aN.vf(), aV.vf(), aR
	.vf(), bE.vf(), aw.vf(), aW.vf(), aS.vf(), aQ.vf(), bj.vf(), aU.vf(), aP.vf(), aM.vf(), aL.vf(), aX.vf(), bg.vf(), av)).vf(), t.vf()
}

function zG(zH, i, j) {
	zH.clearRect(0, 0, i, j), zH.fillStyle = bD.o1, zH.fillRect(0, 0, i, j)
}

function zI(zH, i, j, zJ) {
	zH.fillStyle = bD.o4, zH.fillRect(0, 0, i, zJ), zH.fillRect(0, 0, zJ, j), zH.fillRect(i - zJ, 0, zJ, j), zH.fillRect(0, j - zJ, i, zJ)
}

function zK(zH, fF, fH, i4, zJ, gg, zL) {
	zH.fillStyle = bD.o4;
	var gg = Math.floor(i4 * gg),
		tR = (gg += (gg - zJ) % 2, Math.floor((gg - zJ) / 2)),
		i4 = Math.floor((i4 - gg) / 2);
	zH.fillRect(fF + i4, fH + i4 + tR, gg, zJ), zL && zH.fillRect(fF + i4 + tR, fH + i4, zJ, gg)
}

function zN() {
	this.dh = function() {
		8 === aD.kl && aN.zO()
	}, this.zP = function(zQ) {
		var elo = aD.data.elo,
			ji = (elo[zQ] - elo[1 - zQ]) / 10,
			ji = 8 / (1 + Math.pow(2, ji / 32)),
			ji = Math.floor(10 * ji + .5),
			zS = elo[zQ] + ji,
			zT = this.zU(zS),
			elo = this.zU(elo[1 - zQ] - ji),
			ji = (0 === zQ ? aN.zW(zT, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zW(elo, zT, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zS * bN.sqrt(zS) >> 8),
			elo = ((1 + aD.zZ) * ji / 100).toFixed(2);
		zQ === aD.es ? aN.za(640, L(28, [elo]), 40, 0, bD.o4, bD.o1, -1, !1) : aN.za(640, L(29, [ag.zb[zQ], elo]), 40, 0, bD.o4, bD.o1, -1, !1)
	}, this.zU = function(elo) {
		return 16e3 === (elo = bN.iG(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ch() {
	this.sH = new zc, this.xh = new zd
}

function zd() {
	this.hu = !1;
	this.zh = [], this.zi = 100;
	var nU, nV, gap, i4, ze, zg, zj = 0,
		zk = new Array(9),
		zl = [],
		zm = [],
		zn = 0,
		zo = 0,
		zp = 0,
		zq = 0;

	function a02() {
		zk.sort(function(fR, fS) {
			return fS.kY - fR.kY
		});
		for (var qi = "" + zk[0].pk, aB = 1; aB < 9; aB++) qi += "," + zk[aB].pk;
		for (aB = 0; aB < 9; aB++) qi += "," + zk[aB].kY;
		bl.eT.wB(120, qi)
	}
	this.dh = function() {
		for (var zr = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zr.length; aB++) {
			var color = 6 === zr[aB] ? bD.oU : bD.o2;
			this.zh.push(bC.canvas.zs(ab.get(3), zr[aB], color))
		}
		for (aB = 0; aB < aj.sH.zt; aB++) zm.push(aj.sH.zu - aj.sH.zt + aB);
		for (aB = 0; aB < aj.sH.zv; aB++) zm.push(aj.sH.zw + aB);
		var zx = aj.sH.zy(bM.zx);
		for (aB = 0; aB < zx.length; aB++) zm.push(zx[aB]);
		! function() {
			var aB, g = bl.eT.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zk[aB] = {
					pk: 1015 + aB,
					kY: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fa = parseInt(g[aB]),
						eg = (fa = 0 <= fa && fa < aj.sH.zu ? fa : 0, parseInt(g[aB + 9]));
					eg = 0 <= eg && eg < 1e3 ? eg : 0, zk[aB] = {
						pk: fa,
						kY: eg
					}
				}
		}()
	}, this.show = function(li, lj, a03) {
		var aB;
		if (zn = li, zo = lj, zj = a03 || 0, this.hu = !0, zl = [], 0 === zj)
			for (aB = 0; aB < 9; aB++) zl.push(zk[aB].pk);
		else {
			var fS = 49 * zj,
				a03 = fS - 49;
			for (a03 >= zm.length && (zj = 1, a03 = 0, fS = 49), aB = a03 = (fS = Math.min(fS, zm.length)) - 49; aB < fS; aB++) zl.push(zm[aB])
		}
		zl.push(1024);
		a03 = zl.length, i4 = Math.floor((a0.a1.iH() ? .075 : .0468) * h.iI), gap = Math.floor(i4 / 3), (zp = 10 * (ze = i4 + gap)) > h.i && (zp = h.i, gap = (ze = zp / 10) - (i4 = 3 * ze / 4)), zg = bN.fZ(a03, 10) + !!(a03 % 10), (zq = zg *
			ze) > h.j && (zq = h.j, gap = (ze = zq / zg) - (i4 = 3 * ze / 4)), a03 = .5 * gap;
		nU = Math.min(Math.max(li - .5 * zp + a03, a03), h.i - zp + a03), nV = Math.min(Math.max(lj - .5 * zq + a03, a03), h.j - zq + a03)
	}, this.hL = function(li, lj, player) {
		if (!this.hu) return !1;
		if (this.a05(li, lj)) {
			li = bN.iG(bN.fZ(li - nU + .5 * gap, ze), 0, 9);
			if ((li += 10 * bN.iG(bN.fZ(lj - nV + .5 * gap, ze), 0, 9)) >= zl.length) return aL.sI(), !0;
			lj = zl[li];
			if (1024 === lj) return this.show(zn, zo, zj + 1), !0;
			! function(pk) {
				for (var aB = 0; aB < 9; aB++) zk[aB].kY = Math.floor(.99 * zk[aB].kY);
				for (aB = 0; aB < 9; aB++)
					if (pk === zk[aB].pk) return zk[aB].kY = Math.min(zk[aB].kY + 30, 999), a02();
				zk.splice(5, 0, {
					pk: pk,
					kY: Math.max(zk[4].kY, 30)
				}), zk.pop(), a02()
			}(lj), player === aD.es ? bA.hY.pj(lj) : bA.gU.py(lj, player)
		}
		return aL.sI(), !0
	}, this.a05 = function(li, lj) {
		return !(li < nU - .5 * gap || lj < nV - .5 * gap || nU + zp - .5 * gap <= li || nV + zq - .5 * gap <= lj)
	}, this.vf = function() {
		vg.fillStyle = bD.o1, vg.fillRect(nU - .5 * gap, nV - .5 * gap, zp, zq);
		for (var i0 = .5 * be.a06, f8 = (vg.lineWidth = be.a06, vg.strokeStyle = vg.fillStyle = bD.o4, vg.strokeRect(nU - .5 * gap + i0, nV - .5 * gap + i0, zp - 2 * i0, zq - 2 * i0), vg.imageSmoothingEnabled = !0, zl.length), aB = 0; aB <
			f8; aB++) this.a07(zl[aB], vg, nU + aB % 10 * ze, nV + bN.fZ(aB, 10) * ze, i4);
		vg.imageSmoothingEnabled = !1
	}, this.a07 = function(pk, iA, fF, fH, i4) {
		var em;
		pk >= 1024 - aj.sH.zt ? (em = i4 / this.zi, iA.setTransform(em, 0, 0, em, fF, fH), iA.drawImage(this.zh[pk - 1024 + aj.sH.zt], 0, 0), iA.setTransform(1, 0, 0, 1, 0, 0)) : (bC.r1.textAlign(iA, 1), bC.r1.textBaseline(iA, 1), iA.font = bC.r1
			.sq(0, .89 * i4), iA.fillText(aj.sH.a08(pk), fF + .5 * i4, fH + (.35 - bC.r1.a09 + .56) * i4))
	}
}

function zc() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zt = 13, this.zv = this.emojis.length, this.zw = 676, this.zu = 1024, this.a0A = this.emojis.indexOf("💀"), this.a0B = this.a0A + 1, this.a0C = this.emojis.indexOf("🥇"), this.a0D = this.emojis.indexOf("😊"), this.a08 = function(fa) {
		return fa < this.zw ? String.fromCharCode(55356, 56806 + bN.fZ(fa, 26), 55356, 56806 + fa % 26) : this.emojis[Math.min(fa - this.zw, this.zv - 1)]
	}, this.zy = function(qi) {
		for (var f8 = qi.length - 2, g = [], aB = 0; aB < f8; aB++) {
			var a0E = qi.charCodeAt(aB) - 56806,
				a0F = qi.charCodeAt(aB + 2) - 56806;
			0 <= a0E && a0E < 26 && 0 <= a0F && a0F < 26 && (g.push(26 * a0E + a0F), aB += 3)
		}
		return g
	}, this.a0G = function(fa) {
		return fa < this.zw
	}, this.a0H = function(fa) {
		return fa >= 1024 - this.zt
	}, this.a0I = function(fa) {
		return fa >= this.zw && fa < this.zw + this.a0B
	}
}

function c5() {
	this.tM = new a0J, this.x5 = new a0K, this.x7 = new a0L, this.dh = function() {
		this.tM.dh()
	}
}

function a0K() {
	this.xK = function(qi) {
		for (var f8 = qi.length, i = bF, aB = 0; aB < f8; aB++) i.a8(16, qi.charCodeAt(aB))
	}
}

function a0J() {
	var a0M = new Uint8Array(64);
	this.dh = function() {
		var aB;
		for (a0M[0] = 45, a0M[37] = 95, aB = 0; aB < 10; aB++) a0M[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a0M[aB + 11] = 65 + aB, a0M[aB + 38] = 97 + aB
	}, this.tO = function(a0N) {
		for (var xA = bJ, xI = new Uint8Array(a0N), aB = 0; aB < a0N; aB++) xI[aB] = xA.q9(6);
		return xI
	}, this.tN = function(xI) {
		for (var f8 = xI.length, a0O = a0M, g = [], aB = 0; aB < f8; aB++) g.push(String.fromCharCode(a0O[xI[aB]]));
		return g.join("")
	}, this.a0P = function(value, a0Q) {
		for (var a0O = a0M, g = [], aB = 0; aB < a0Q; aB++) g.push(String.fromCharCode(a0O[value >> 6 * (a0Q - 1 - aB) & 63]));
		return g.join("")
	}
}

function cD() {
	var a0R, a0S, a0T;
	a0R = [32, 65, 191, 913, 931], a0S = [64, 127, 688, 930, 1155], a0T = new Array(a0R.length + 1);
	for (var aB = 0; aB < a0T.length; aB++) {
		a0T[aB] = 0;
		for (var fR = aB - 1; 0 <= fR; fR--) a0T[aB] += a0S[fR] - a0R[fR]
	}

	function a0Z(eg) {
		for (var aB = a0R.length - 1; 0 <= aB; aB--)
			if (eg >= a0R[aB] && eg < a0S[aB]) return aB;
		return -1
	}
	this.xB = function(qi) {
		return 0 !== (qi = qi.trim()).indexOf("Bot ") && 0 !== qi.indexOf("[Bot] ") && function(qi, a0W, a0X) {
			var f8 = (qi = qi.trim()).length;
			if (f8 < a0W || a0X < f8) return !1;
			for (var eg, a0Y = 0, aB = 0; aB < f8; aB++)
				if (eg = qi.charCodeAt(aB), a0Y += 65 <= eg && eg <= 90 || 1040 <= eg && eg <= 1071 ? 1 : 0, -1 === a0Z(eg)) return !1;
			if (3 < a0Y && a0Y > Math.floor(f8 / 2)) return !1;
			return !0
		}(qi, 3, 20)
	}, this.a0a = function(qi) {
		for (var f8 = (qi = qi.trim()).length, g = [], aB = 0; aB < f8; aB++) {
			var eg, gg = a0Z(eg = qi.charCodeAt(aB));
			g.push(a0T[gg] + eg - a0R[gg])
		}
		return g
	}, this.xP = function(g) {
		for (var eg, fS, qi = "", f8 = g.length, aB = 0; aB < f8; aB++)
			for (fS = 1; fS < a0T.length; fS++)
				if (g[aB] < a0T[fS]) {
					eg = a0R[fS - 1] + g[aB] - a0T[fS - 1], qi += String.fromCharCode(eg);
					break
				} return qi
	}, this.a0b = function(qi) {
		for (var g = this.a0a(qi), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0c = function(qi) {
		for (var g = new Array(Math.floor(qi.length / 3)), aB = 0; aB < qi.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qi.substring(aB, aB + 3));
		return this.xP(g)
	}, this.a0d = function(qi) {
		for (var fa, g = [qi.length], aB = 0; aB < qi.length; aB++) g[aB] = qi.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qi.length; aB++) aB === qi.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fa = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fa + (fa < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0e = function(qi) {
		for (var eg, result = "", aB = 0; aB < qi.length; aB++) 48 <= (eg = qi.charCodeAt(aB)) && eg < 58 ? result += String.fromCharCode(eg) : 65 <= eg && eg < 75 ? result += "0" + (eg - 65).toString() : 75 <= eg && eg < 91 ? result += (eg - 65)
			.toString() : 97 <= eg && eg < 123 && (result += (eg - 71).toString());
		return result
	}, this.a0f = function(qi) {
		for (var f8 = qi.length, g = [], aB = 0; aB < f8; aB++)(eg = qi.charCodeAt(aB)) < 58 ? g.push(qi[aB]) : (eg -= eg < 91 ? 65 : 71, g.push(String(bN.fZ(eg, 10))), g.push(String(eg - 10 * bN.fZ(eg, 10))));
		var f8 = g.length - 2,
			eg = 0,
			xI = [];
		for (aB = 0; aB < f8; aB += 3) xI[eg++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return xI
	}, this.a0g = function() {
		for (var eE, a0h = "", aB = 0; aB < 6; aB++) eE = 48 + ay.random() % 36, eE += 58 <= eE ? 39 : 0, a0h += String.fromCharCode(eE);
		return a0h
	}
}

function a0L() {
	this.a0a = function(qi, xy, a0i) {
		for (var a0j = [], f8 = qi.length, max = 0, aB = 0; aB < f8; aB++) {
			var fa = qi.charCodeAt(aB);
			a0j.push(fa), max = Math.max(max, fa)
		}
		var xz = max < 128 ? 7 : 16;
		for (a0i.a8(xy, f8), a0i.a8(1, +(16 == xz)), aB = 0; aB < f8; aB++) a0i.a8(xz, a0j[aB])
	}
}

function dE() {
	this.a0k = new a0l, this.result = new a0m, this.a0n = new a0o, this.a0p = new a0q, this.a0r = new a0s, this.a0t = new a0u, this.dh = function() {
		this.result.dh()
	}
}

function a0o() {
	this.a0v = function() {
		for (var f8 = al.kz, a0w = al.l4, a0x = [], aB = 0; aB < f8; aB++) {
			var gg = a0w[aB];
			bC.gU.a0y(gg) && a0x.push(gg)
		}
		return a0x
	}, this.a0z = function() {
		if (0 === bi.kq[aD.a10]) return this.a11();
		bj.kU(aD.a10);
		for (var a0x = [], f8 = bQ.fd[0], fm = bQ.fm, aB = 0; aB < f8; aB++) {
			var gg = fm[aB];
			bC.gU.a0y(gg) && a0x.push(gg)
		}
		return a0x
	}, this.a11 = function() {
		var gg = m4[0];
		return bC.gU.a0y(gg) ? [gg] : []
	}, this.a12 = function(a0x) {
		for (var f8 = a0x.length, eX = 0, gw = ag.gw, aB = 0; aB < f8; aB++) eX += gw[a0x[aB]];
		return eX
	}
}

function a0l() {
	function a14() {
		if (2 === aD.a18) return 1;
		aw.a19(), aD.a18 = 2, aD.a1A = aD.a1B
	}

	function a16() {
		bT.a0r.a1C(), aX.show(1 === aD.a1D, !1, 2 === aD.a1D), bT.result.a1C(), bT.a0t.eb(), bT.a0p.eb(), bT.a0p.a1E(), aN.a1F(!0), aN.a1G(247), aN.a1G(956), aN.a1G(957), aV.mp(!0), aW.mp(!0), aw.mp(), bE.a1H(), aD.hH && bh.a1I.a1J(), bh.dp = !0, bd
			.a1K(), a0.a1.setState(0)
	}
	this.a13 = function() {
		a14() || (aD.a15 = 2, a16())
	}, this.a17 = function() {
		a14() || (aD.a15 = 1, a16())
	}
}

function a0q() {
	this.eb = function() {
		var a1S;
		2 === aD.a15 ? (aN.a1L(0, 59), aH.nd(2700)) : aD.kl < 7 ? (a1S = bi.kq[aD.a10], a1S = bi.a1U[a1S], aQ.a1V(L(30, [a1S]), 2, 1, 12), aN.za(0, L(31, [a1S]), 40, 0, bD.o4, bD.o1, -1, !1), aH.nd(2700)) : 8 === aD.kl ? (aD.a1D ? aN.a1L(aD.a1Q,
			2) : aN.a1L(1 - aD.es, 3), aD.a1R.zP(aD.a1Q), aH.nP(aD.a1Q, 2700, !1, 0)) : 9 === aD.kl ? (aN.a1W(), aH.nd(2700)) : (aN.a1X(aD.a1Q), aH.nP(aD.a1Q, 2700, !1, 0))
	}, this.a1E = function() {
		var qi;
		aD.hH || aD.kn || (qi = b0.y.a1Y(), aD.kl < 7 ? qi += "/log/team" : 8 === aD.kl ? qi += "/log/1v1" : 9 === aD.kl ? qi += "/log/zombies" : qi += "/log/br", aN.za(720, qi, 736, 0, bD.o4, bD.oS, -1, !1))
	}
}

function a0u() {
	function a1i() {
		var th;
		return 8 === aD.kl ? 0 : (th = Math.floor(ag.a1j[aD.es] / 50), (th = Math.min(th, 200)) / 100)
	}

	function a1a() {
		var th = a1i();
		0 !== th && aN.za(440, L(32, [th.toFixed(2)]), 40, 0, bD.oM, bD.o1, -1, !1)
	}
	this.eb = function() {
		var a1b;
		0 === bT.result.a1Z || 0 === bT.result.a0x.length || 8 === aD.kl ? bC.gU.hK(aD.es) && a1a() : (function(a1b) {
			7 !== aD.kl && 10 !== aD.kl && 9 !== aD.kl || 0 !== aD.a1D && a1b && aN.za(600, L(36, [a1b.toFixed(2)]), 40, 0, bD.o4, bD.o1, -1, !1)
		}(a1b = function() {
			aN.za(520, L(33), 40, 0, bD.o4, bD.o1, -1, !1);
			for (var a0x = bT.result.a0x, f8 = a0x.length, gw = ag.gw, g = [], aB = 0; aB < f8; aB++) {
				var gg = a0x[aB];
				g.push({
					gg: gg,
					eX: gw[gg]
				})
			}
			g.sort((fR, fS) => fS.eX - fR.eX);
			var a1U = ag.zb,
				eX = bT.result.a1k,
				th = bT.result.a1Z,
				qi = "",
				a1b = 0;
			for (aB = 0; aB < f8; aB++) {
				var hs = g[aB].eX * th / (100 * eX),
					a1m = a1U[g[aB].gg] + ": " + hs.toFixed(2) + "   ";
				g[aB].gg === aD.es && (a1b = hs), 2 < aB && 4 !== f8 ? 3 === aB && (qi += "(" + L(34, [f8 - 3]) + ")") : qi += a1m
			}
			aN.za(560, bC.s0.a1n(qi), 40, 0, bD.oM, bD.o1, -1, !1), a1b ? aN.za(580, L(35, [a1b.toFixed(2) + " + " + a1i().toFixed(2)]), 40, 0, bD.oM, bD.o1, -1, !1) : bC.gU.hK(aD.es) && a1a();
			return a1b
		}()), 2 === aD.a15 || 7 <= aD.kl || function(a1b) {
			var a0x = bT.result.a0x,
				f8 = a0x.length,
				a1o = ag.a1o,
				gw = ag.gw,
				a1p = [];
			loop: for (var aB = 0; aB < f8; aB++) {
				var gg = a0x[aB],
					a1q = bC.s0.a1r(a1o[gg]);
				if (null !== a1q) {
					for (var a1s = gw[gg], fS = a1p.length - 1; 0 <= fS; fS--)
						if (a1q === a1p[fS].name) {
							a1p[fS].eX += a1s, a1p[fS].g.push({
								gg: gg,
								eX: a1s
							});
							continue loop
						} a1p.push({
						name: a1q,
						eX: a1s,
						g: [{
							gg: gg,
							eX: a1s
						}]
					})
				}
			}
			if (0 !== a1p.length) {
				a1p.sort((fR, fS) => fS.eX - fR.eX);
				var g = a1p[0].g,
					a1t = (g.sort((fR, fS) => fS.eX - fR.eX), "[" + a1p[0].name + "]"),
					a1u = 512 * bT.result.a1Z / 26214400,
					lO = (aN.za(0, L(37, [a1t, a1u.toFixed(4)]), 40, 0, bD.o4, bD.o1, -1, !1), g.length),
					xG = a1p[0].eX,
					a1v = 1e4 * a1u;
				for (aB = 0; aB < lO; aB++)
					if (g[aB].gg === aD.es) {
						aN.za(600, L(38, [(a1v * g[aB].eX / (10 * xG)).toFixed(2)]), 40, 0, bD.o4, bD.o1, -1, !1), aN.za(640, L(39, [(.2 * a1b).toFixed(2), a1t]), 40, 0, bD.o4, bD.o1, -1, !1);
						break
					}
			}
		}(a1b))
	}, this.a1f = function() {
		var a1g, xi;
		aD.kn || (a1g = ag, xi = aD.es, 0 === a1g.a1h[xi]) || a1g.jX[xi] < 1 || 2 * a1g.qQ[xi] > 3 * (a1g.jW[xi] + a1g.jX[xi]) || a1a()
	}
}

function a0m() {
	this.dh = function() {
		this.a1w = 0, this.a0x = [], this.a1k = 0, this.a1Z = 0
	}, this.a1C = function() {
		var sb;
		aD.kn || (sb = this, 2 === aD.a15 ? sb.a0x = bT.a0n.a0v() : aD.i2 ? sb.a0x = bT.a0n.a0z() : sb.a0x = bT.a0n.a11(), sb.a1w = bk.a1y.a1z(), sb.a1k = Math.max(1, bT.a0n.a12(sb.a0x)), bA.gU.q7(), 8 === aD.kl ? bT.result.a1Z = 0 : sb.a1Z =
			100 * bT.result.a1w * (1 + aD.zZ))
	}
}

function a0s() {
	this.a1C = function() {
		if (2 === aD.a15) aD.a1D = 2;
		else {
			if (8 === aD.kl) bC.gU.jq(0) || 0 === ag.n3[0] ? aD.a1Q = 1 : bC.gU.jq(1) || 0 === ag.n3[1] ? aD.a1Q = 0 : aD.a1Q = +(ag.gw[1] > ag.gw[0]);
			else {
				if (aD.i2) {
					var l1 = bj.a22();
					if (aD.a10 = l1, bi.kq[l1]) return void(aD.a1D = +(bi.f6[aD.es] === l1))
				}
				aD.a1Q = m4[0]
			}
			aD.a1D = +(aD.a1Q === aD.es)
		}
	}
}

function dJ() {
	this.id = 0, this.e0 = 0, this.wO = null, this.wP = null, this.wQ = null, this.wW = null, this.a1 = new a23, this.dh = function() {
		var self, e0;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e0 = Android.getVersion()) < 12 || (self.e0 = e0, self.id = 1, self.wP = Android),
			function(self) {
				var e0;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wQ = mwIOSdataX, self.wW = window.webkit.messageHandlers.iosCommandA, e0 = self
					.wQ.version, self.e0 = e0 ? Number(e0) : 0)
			}(this),
			function(self) {
				var wO;
				try {
					if (!(wO = window.localStorage)) return;
					wO.setItem("tls7", "1"), wO.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wO = wO
			}(this)
	}
}

function a23() {
	this.a27 = function() {
		bl.pV.wm(), bl.pV.wn(), b0.y.close(0, 3255), 0 === a0.id ? a0.wO && a0.wO.clear() : 1 === a0.id ? a0.wP.saveString(199, "") : 2 === a0.id && a0.wW.postMessage("clear")
	}, this.a28 = function() {
		2 === a0.id ? a0.wW.postMessage("showConsentForm") : 1 === a0.id && a0.wP.setState(7)
	}, this.a29 = function() {
		this.setState(14)
	}, this.iH = function() {
		return 1 === bl.eT.wC(2)
	}, this.a2A = function() {
		bl.eT.wB(102, "")
	}, this.setState = function(a2B) {
		1 === a0.id && 5 <= a0.e0 && a0.wP.setState(a2B)
	}, this.a2 = function() {
		var a2C;
		1 === a0.id && 7 <= a0.e0 ? a0.wP.setState(5) : ((a2C = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2C.toString())
	}, this.eR = function() {
		0 !== a0.id && (1 === a0.id ? a0.wP.prepareAd("8646194357") : 2 === a0.id && (0 === a0.e0 ? a0.wW.postMessage("prepare ad 2904813909") : a0.wW.postMessage("loadAds 2904813909")))
	}, this.eY = function(eX) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.e0 && (a0.wP.presentAd(eX), !0) : 2 === a0.id && 0 !== a0.e0 && (a0.wW.postMessage("showAd"), !0))
	}, this.dr = function() {
		2 === a0.id && a0.e0 < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bM.a2D + "' target='_blank'>" + bM
			.a2D + "</a>", !0, [new w("⬅️ " + L(40), function() {
				t.u(0)
			}, bD.ok)]))
	}
}

function dY() {
	function a2G(e) {
		ln(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(40), function() {
				t.a2J()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bD.oR)]))
	}

	function a2U(e) {
		ln(e), t.u(4, 5, new v(L(41), a2Q(e), !0))
	}

	function a2Q(e) {
		var qi = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + qi : 4527 === e ? "Player already in lobby" + qi : 4577 === e ? "Your IP is banned." + qi : 4530 === e ? "Lobby Timeout" + qi : 4528 === e ?
			"Lobby Kick: Another login detected." + qi : 4540 === e ? "You have been kicked." + qi : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qi : 4555 === e ? "This Account is blocked." + qi :
			4580 === e ? "Insufficient Funds" + qi : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + qi : "Unknown error" + qi
	}

	function ln(e) {
		a2L(e), t.y.z()
	}

	function a2L(e) {
		4540 === e && b0.y.a2W(e);
		var a2B = aa.a2K();
		6 === a2B ? b0.y.a2W(e) : bp.a2H ? (t.x(), bp.uk(), b0.y.close(b0.y.a2I, 3256)) : 8 === a2B && aD.a2X(!0)
	}
	this.p = [], this.a2E = function(a2F, e) {
		if (this.p.push(e), 8 === t.tJ && 0 === a2F)
			if (4211 === e) a2G(e);
			else {
				if (bp.a2H && (4495 === e || 4480 === e) && b0.y.a2I !== a2F) return void t.a2J();
				if (8 !== aa.a2K() && a2L(), 4480 === e) return bl.pV.wo(), void t.u(4, 0, new v(L(43), L(44), !0));
				var a2N = 0;
				t.a2O() && 10 === t.a2O().a2P && (a2N = t.a2O().a2P), t.u(4, a2N, new v(L(41), a2Q(e), !0))
			}
		else {
			a2N = aa.a2K();
			if (6 === a2N) {
				if (4211 === e) return void a2G(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aZ.a2R(a2F)
			} else if (bp.a2H) {
				if (a2F !== b0.y.a2I) return
			} else {
				if (8 === a2N) return void(a2F !== b0.y.a2S || aD.kn || 1 !== aD.a18 || aD.hH || aN.a2T(L(42, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}
			a2U(e)
		}
	}, this.a2V = function(e) {
		this.p.push(e), 8 === aa.a2K() ? aD.kn || 1 !== aD.a18 || aN.a2T(L(42, [e])) : a2U(e)
	}, this.s = function() {
		this.p.push(3268), ln(3268)
	}
}

function d8() {
	var a2Y, a2Z, a2a = -15e3,
		a2b = !1;

	function hL(e) {
		a2v() || (a2b = !0, a2w(e, 1), b0.y.a2x(b0.y.a2S), a2y(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2k(e) {
		a2a = bh.eW, a2w(e, 1), b0.y.a2x(b0.y.a2S), 0 < e.touches.length && (a2Y = Math.floor(h.k * e.touches[0].clientX), a2Z = Math.floor(h.k * e.touches[0].clientY), au.a2k(e) || a2y(a2Y, a2Z))
	}

	function a2y(fF, fH) {
		t.hL(fF, fH), 0 === aD.a18 ? aa.hL(fF, fH) : bE.a2z(fF, fH) || bg.hL(fF, fH) || aX.hL(fF, fH) || aL.a30(fF, fH) || aP.hL(fF, fH) || 0 <= aM.hL(fF, fH) || aw.hL(fF, fH) || bL.a31(fF, fH) || aL.a32(fF, fH)
	}

	function a2g(e) {
		a2v() || (a2b = !0, a2w(e, 1), a33(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2l(e) {
		a2a = bh.eW, a2w(e, 1), 0 < e.touches.length && (a2Y = Math.floor(h.k * e.touches[0].clientX), a2Z = Math.floor(h.k * e.touches[0].clientY), au.a2l(e) || a33(a2Y, a2Z))
	}

	function a33(fF, fH) {
		bL.rT() || (bL.hD = fF, bL.hE = fH), t.a2g(fF, fH), 0 === aD.a18 ? aa.a2g(fF, fH) : (bV.hF(fF, fH), bg.a2g(fF, fH) || (aM.a2g(fF, fH), aL.hu() ? aL.a2g(fF, fH) : aR.hM ? aR.a2g(fF) && (bh.dp = !0) : (aV.a2g(fF, fH), aS.nZ && aS.a2g(fF, fH) &&
			(bh.dp = !0))))
	}

	function a2i(e) {
		a2v() || (a2w(e, 1), a34(), 0 === aD.a18 ? (aa.click(-1024, -1024), aT.s2()) : (aV.a35(-1024, -1024), aM.a2g(-1024, -1024), aR.a36(), aS.nZ = !1))
	}

	function a2h(e) {
		a2v() || (a2w(e, 1), a37(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bL.a2e && (bL.a2e = !1, e.preventDefault()))
	}

	function click(e) {
		a2v() || a2w(e, 1)
	}

	function a2m(e) {
		a2a = bh.eW, a2w(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a18 ? aS.nZ = !1 : au.a38() || (a37(a2Y, a2Z, !1), bL.a2e && (bL.a2e = !1, e.preventDefault()))
	}

	function a2n(e) {
		a2a = bh.eW, a2w(e, 1), a37(a2Y, a2Z, !1), bL.a2e && (bL.a2e = !1, e.preventDefault())
	}

	function a2o(e) {}

	function a2p(e) {}

	function a2q(e) {
		a2v() || a2w(e, 0)
	}

	function a37(fF, fH, a39) {
		a34(), 0 === aD.a18 ? aa.click(fF, fH) : (aV.a35(fF, fH), bg.a35(), aR.a36(), aS.nZ = !1, aL.click(fF, fH, a39) ? bh.dp = !0 : aM.a2h(fF, fH))
	}

	function a34() {
		t.a34()
	}

	function a2j(e) {
		var fF, fH, deltaY;
		a2v() || (a2w(e, 1), b0.y.a2x(b0.y.a2S), fF = Math.floor(h.k * e.clientX), fH = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2j(fF, fH, deltaY), 0 === aD.a18 ? aa.a2j(fF, fH, deltaY) : aV.a2j(fF, fH,
			deltaY) || (aR.a3A(fF, fH) ? aR.a2j(deltaY) && (bh.dp = !0) : aS.a2j(fF, fH, deltaY)))
	}

	function a2r(e) {
		a2w(e, 0)
	}

	function a2w(e, id) {
		0 === id && t.hu() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a2K() && e.preventDefault()
	}

	function a2s(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2v() || 0 < h.sy || (e = e.code) && e.length && (bZ.eg(e, 18) ? ar.a3C(3) : bZ.eg(e, 22) ? ar.a3C(0) : bZ.eg(e, 20) ? ar.a3C(1) : bZ.eg(e, 24) ? ar.a3C(2) : bZ.eg(e, 10) ? aR.a3D(31 / 32) : bZ.eg(e, 8) ? aR.a3D(32 / 31) : bZ.eg(e, 6) ? aR
			.a3D(7 / 8) : bZ.eg(e, 4) ? aR.a3D(8 / 7) : bZ.eg(e, 14) ? 0 !== aD.a18 && aS.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bZ.eg(e, 16) ? 0 !== aD.a18 && aS.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bZ.eg(e, 0) ?
			aD.a18 && bV.hG(0) : bZ.eg(e, 2) ? aD.a18 && bV.hG(1) : bZ.eg(e, 30) ? aD.a18 && bV.hG(2) : bZ.eg(e, 26) ? aD.a18 && bV.ho() : bZ.eg(e, 28) && aD.a18 && bV.ht())
	}

	function a2t(e) {
		if (!a2v() && !(0 < h.sy || bh.eW < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a3E(1) || "Space" === code && t.a3E(0))) return bp.a2H ? bp.uq.a3E(code) ? void 0 : void("Escape" === code && bL.fb()) : void(8 !== aa.a2K() && aa.a3E(e) ? bh.dp = !0 : "Escape" ===
				code ? bL.fb() : bZ.eg(code, 18) ? ar.a3F(3) : bZ.eg(code, 22) ? ar.a3F(0) : bZ.eg(code, 20) ? ar.a3F(1) : bZ.eg(code, 24) ? ar.a3F(2) : bZ.eg(code, 12) ? bE.a3G(!aD.nX) : "Space" === code && aD.a18 && (aM.hI && aM.a3H(), aD
					.hH) && bE.a3I(!1))
		}
	}

	function a2u() {
		"hidden" !== document.visibilityState && (bh.dp = !0)
	}

	function a2v() {
		return a2a + 15e3 > bh.eW
	}

	function resize() {
		h.a3K()
	}
	this.a2c = 0, this.a2d = "", this.a2e = !1, this.hD = 0, this.hE = 0, this.dh = function() {
		a2f.addEventListener("mousedown", hL, {
			passive: !1
		}), a2f.addEventListener("mousemove", a2g, {
			passive: !1
		}), a2f.addEventListener("mouseup", a2h, {
			passive: !1
		}), a2f.addEventListener("click", click, {
			passive: !1
		}), a2f.addEventListener("mouseleave", a2i, {
			passive: !1
		}), a2f.addEventListener("wheel", a2j, {
			passive: !1
		}), a2f.addEventListener("touchstart", a2k, {
			passive: !1
		}), a2f.addEventListener("touchmove", a2l, {
			passive: !1
		}), a2f.addEventListener("touchend", a2m, {
			passive: !1
		}), a2f.addEventListener("touchcancel", a2n, {
			passive: !1
		}), a2f.addEventListener("dragover", a2o), a2f.addEventListener("drop", a2p), a2f.addEventListener("dblclick", a2q), document.addEventListener("contextmenu", a2r), document.addEventListener("keydown", a2s), document.addEventListener(
			"keyup", a2t), document.addEventListener("visibilitychange", a2u), window.addEventListener("resize", resize)
	}, this.a31 = function(fF, fH) {
		return !!bE.hL(fF, fH) || !!(aV.hL(fF, fH) || aS.hL(fF, fH) || aR.hL(fF, fH) || aN.hL(fF, fH))
	}, this.a3J = a2v, this.rT = function() {
		return !a2b || 0 < a2a
	}, this.fb = function() {
		if (!t.hu()) return 8 === aa.a2K() ? aD.nX ? void bE.a3G(!1) : bg.hu ? void bg.a3H() : void aM.a3H() : void(7 !== aa.a2K() && 6 === aa.a2K() && aZ.a3L());
		t.a3E(2)
	}
}

function c1() {
	this.r1 = new a3M, this.r9 = new a3N, this.gU = new a3O, this.s0 = new a3P, this.zH = new a3Q, this.a3R = new a3S, this.canvas = new a3T, this.color = new a3U, this.a3V = new a3W, this.dh = function() {
		this.r1.wl()
	}
}

function a3N() {
	this.xg = function(g) {
		g.fill(0)
	}, this.a3X = function(g) {
		for (var f8 = g.length, aB = 0; aB < f8; aB++) g[aB] = []
	}, this.a3Y = function(a0E, a3Z) {
		for (var a0F = bQ.fi, aB = 0; aB < 3; aB++) a0F[aB] = a3Z * a0E[aB];
		return a0F
	}, this.a3a = function(a0E, a0F, a3b) {
		for (var ji = 0, aB = 0; aB < 3; aB++) ji += Math.abs(a0E[aB] - a0F[aB]);
		return a3b <= ji
	}, this.a3c = function(a0E, a3d) {
		for (var aB = 0; aB < 3; aB++) a0E[aB] = bN.iG(a0E[aB] + a3d, 0, 255);
		return a0E
	}, this.a3e = function(g, td, te) {
		te = te || g.length - 1;
		for (var a3f = 0, aB = td = td || 0; aB <= te; aB++) a3f += g[aB];
		return a3f
	}, this.a3g = function(g, a3h) {
		for (var aB, a3i, f8 = g.length, a3j = [], fR = f8 - 1; 0 <= fR; fR--) {
			for (aB = a3i = 0; aB < f8; aB++) a3h(g[aB]) < a3h(g[a3i]) && (a3i = aB);
			f8--, a3j.push(g[a3i]), g[a3i] = g[f8], g.pop()
		}
		return a3j
	}, this.min = function(g) {
		var aB, fa, f8 = g.length;
		if (0 === f8) return 0;
		for (fa = g[0], aB = 1; aB < f8; aB++) fa = Math.min(fa, g[aB]);
		return fa
	}, this.max = function(g) {
		var f8 = g.length;
		if (0 === f8) return 0;
		for (var fa = g[0], aB = 1; aB < f8; aB++) fa = Math.max(fa, g[aB]);
		return fa
	}, this.a3k = function(g, fa) {
		for (var f8 = g.length, gb = 0, aB = 0; aB < f8; aB++) gb += g[aB] > fa;
		return gb
	}, this.a3l = function(a3m, a3n, min) {
		for (var f8 = a3n[0], aB = f8 - 1; 0 <= aB; aB--) a3m[aB] < min && (a3m[aB] = a3m[--f8]);
		a3n[0] = f8
	}, this.a3o = function(g, f8, value) {
		for (var aB = 0; aB < f8; aB++) g[aB] -= value
	}, this.a3p = function(g) {
		for (var f8 = g.length, aB = 0; aB < f8; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3q = function(qi, g, a3r) {
		g.fill(0);
		for (var th = qi.split(","), f8 = Math.min(th.length, g.length), aB = 0; aB < f8; aB++) g[aB] = Math.min(parseInt(th[aB]), a3r)
	}, this.a3s = function(qi, g, rx) {
		g.fill("");
		for (var th = qi.split('"'), f8 = Math.min(th.length, 2 * g.length), i0 = 0, aB = 1; aB < f8; aB += 2) g[i0++] = th[aB].slice(0, rx)
	}, this.a3t = function(g, gb) {
		if (0 === gb) g.fill(0);
		else {
			var a3f = this.a3e(g),
				f8 = g.length;
			if (0 === a3f) g.fill(bN.fZ(gb, f8));
			else
				for (var aB = 0; aB < f8; aB++) g[aB] = bN.fZ(gb * g[aB], a3f);
			if (0 === (a3f = this.a3e(g))) g[1] = gb;
			else
				for (var i0 = 0; a3f++ < gb;) g[i0 = (i0 + 1) % f8] && g[i0]++
		}
	}, this.a3u = function(g) {
		if (!g) return 0;
		var f8 = g.length;
		if (0 === f8) return 0;
		for (var fa = g[f8 - 1], aB = f8 - 2; 0 <= aB; aB--)
			if (g[aB] !== fa) return aB + 2;
		return 1
	}, this.a3v = function(g) {
		for (var a3f = 0, aB = 0; aB < g.length; aB++) a3f += g[aB].length;
		return a3f
	}, this.a3w = function(a3x) {
		for (var g = [], aB = 0; aB < a3x.length; aB++) g = g.concat(a3x[aB]);
		return g
	}, this.has = function(g, fa) {
		for (var f8 = g.length, aB = 0; aB < f8; aB++)
			if (g[aB] === fa) return !0;
		return !1
	}
}

function a3T() {
	this.zs = function(a3y, eF, a3z) {
		var i4 = a3y.height,
			a40 = bC.r1.xW(i4, i4),
			iA = bC.r1.getContext(a40);
		return function(i, iA, a3z) {
			iA.fillStyle = a3z, iA.beginPath(), iA.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), iA.fill()
		}(i4, iA, a3z), iA.drawImage(a3y, -eF * i4, 0), a40
	}, this.a42 = function(a43) {
		var iA, i7, i4 = a43.height;
		return a43.width === i4 && (i7 = (iA = bC.r1.getContext(a43, !0)).getImageData(0, 0, i4, i4), bC.a3R.a44(i7.data, i4, i4, .9), iA.putImageData(i7, 0, 0)), a43
	}
}

function a3U() {
	this.a45 = function(fa) {
		return [fa >> 12 & 63, fa >> 6 & 63, 63 & fa]
	}, this.a46 = function(fa) {
		for (var g = this.a45(fa), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a47 = function(fa) {
		fa = this.a46(fa);
		return bC.color.nw(fa[0], fa[1], fa[2])
	}, this.a48 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nw = function(eE, th, fS) {
		return "rgb(" + eE + "," + th + "," + fS + ")"
	}, this.ny = function(eE, th, fS, fR) {
		return "rgba(" + eE + "," + th + "," + fS + "," + fR.toFixed(3) + ")"
	}, this.rV = function(eg) {
		for (var g = eg.split("(")[1].split(","), fh = bQ.fh, aB = 0; aB < 3; aB++) fh[aB] = parseInt(g[aB]);
		return 4 === g.length ? fh[3] = 255 * parseFloat(g[3].slice(0, -1)) : fh[3] = 255, fh
	}, this.rW = function(a49, fB) {
		for (var g = a49.slice(a49.indexOf("(") + 1, a49.indexOf(")")).split(","), fh = bQ.fh, aB = 0; aB < 3; aB++) fh[aB] = bN.iG(parseInt(g[aB].trim(), 10) + fB, 0, 255);
		return 3 === g.length ? this.nw(fh[0], fh[1], fh[2]) : (a49 = parseFloat(g[3].trim()), this.ny(fh[0], fh[1], fh[2], a49 = 0 === a49 ? .3 : a49))
	}, this.vL = function(a4A, a4B) {
		for (var ji = 0, aB = 0; aB < 3; aB++) ji += Math.abs(a4B[aB] - a4A[aB]);
		if (!(240 <= ji))
			for (aB = 0; aB < 3; aB++) a4B[aB] = a4A[aB] + (a4A[aB] < 128 ? 80 : -80)
	}, this.a4C = function(g) {
		for (var qi = "#", aB = 0; aB < 3; aB++) {
			var eE = g[aB].toString(16);
			qi += 1 === eE.length ? "0" + eE : eE
		}
		return qi
	}, this.a4D = function(qi) {
		var eE, th;
		return qi.length < 7 ? bD.nv : (eE = parseInt(qi.slice(1, 3), 16), th = parseInt(qi.slice(3, 5), 16), qi = parseInt(qi.slice(5, 7), 16), this.nw(eE, th, qi))
	}
}

function a3Q() {
	this.a4E = function(qi, font, maxWidth) {
		if (font && (vg.font = font), vg.measureText(qi).width <= maxWidth) return qi;
		for (var aB = qi.length - 1; 1 <= aB; aB--)
			if (qi = qi.substring(0, aB), vg.measureText(qi + "...").width <= maxWidth) return qi + "...";
		return "..."
	}
}

function a3W() {
	var a4G = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4H = function(eW) {
		var a4J, qi = new Date(eW.getTime() - 6e4 * eW.getTimezoneOffset()).toUTCString();
		return qi.length < 12 || (qi = qi.substring(5, qi.length), 0 === (eW = eW.getTimezoneOffset())) ? qi : (a4J = (eW < 0 ? "+" : "-") + bN.fZ(Math.abs(eW), 60), 0 == (eW = Math.abs(eW) % 60) ? qi + a4J : qi + a4J + ":" + (eW < 10 ? "0" :
			"") + eW)
	}, this.a4K = function(eW) {
		var qi = eW.toUTCString();
		return qi.length < 12 ? qi : function(eW) {
			return a4G[eW.getUTCDay()]
		}(eW) + ", " + qi.substring(5, qi.length - 4)
	}
}

function a3M() {
	var a4M = null;
	this.a09 = 0, this.wl = function() {
		var fa = bl.eT.data[5].value;
		a4M = "px " + fa, "system-ui" !== fa && (a4M += ", system-ui"), this.a09 = i3(32, 32, ["a", "b", "m"], 200, a4M)
	}, this.xW = function(i, j) {
		var eg = document.createElement("canvas");
		return eg.width = i, eg.height = j, eg
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zH, i, j) {
		return zH.getImageData(0, 0, i, j)
	}, this.sq = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4M : 1 === type ? "bold " + size + a4M : 2 === type ? "lighter " + size + a4M : 3 === type ? "italic " + size + a4M : 4 === type ? "oblique " + size + a4M : 5 === type ? "small-caps " +
			size + a4M : "small-caps bold " + size + a4M
	}, this.textAlign = function(iA, id) {
		iA.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iA, id) {
		iA.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.rB = function(e, code, color) {
		color = this.rA(be.ss) + " solid " + (color || bD.o4);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tj = function(e, fF, fH, i, j) {
		e = e.style;
		e.left = this.tk(fF), e.top = this.tk(fH), e.width = this.tk(i), e.height = this.tk(j)
	}, this.r2 = function(fa) {
		return 1 + fa * a0.a1.iH()
	}, this.sK = function(ng, gh) {
		return ng * this.r2(void 0 === gh ? .5 : gh) * h.iI / h.k
	}, this.ti = function(ng, gh) {
		return ng * this.r2(void 0 === gh ? .5 : gh) * h.iI
	}, this.tP = function(ng, gh, a4N) {
		return this.r2(gh) * Math.min(ng * h.iI, a4N * h.i) / h.k
	}, this.rA = function(fa) {
		return fa.toFixed(1) + "px"
	}, this.tk = function(fa) {
		return this.v6(fa).toFixed(1) + "px"
	}, this.v6 = function(fa) {
		return fa / h.k
	}, this.a4P = function(t7, a4Q) {
		for (var qi = "<ul>", f8 = t7.length, aB = 0; aB < f8; aB++) qi += "<li>" + t7[aB] + ": <a href='" + a4Q[aB] + "' target='_blank'>" + a4Q[aB] + "</a></li>";
		return qi += "</ul>"
	}, this.a4R = function(a4S) {
		return "<a href='" + a4S + "' target='_blank'>" + a4S + "</a>"
	}, this.a4T = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.vJ = function(e) {
		var eX = e.textContent;
		bC.s0.a4U(eX, "✔") || (1 === eX.length ? e.textContent = "✔" : e.textContent = eX + " ✔", setTimeout(function() {
			e.textContent = eX
		}, 500))
	}, this.measureText = function(qi) {
		return vg.measureText(qi).width
	}, this.tZ = function(a4V) {
		a4V.style.overflowX = "auto", a4V.style.overflowY = "hidden", a4V.style.whiteSpace = "nowrap", a4V.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tm = this.scrollLeft, e.preventDefault())
		}), a4V.addEventListener("scroll", function() {
			this.tm = this.scrollLeft
		})
	}
}

function a3O() {
	this.hJ = function(a2B) {
		return 0 === a2B ? 1 === aD.a18 && aD.hW : 1 === a2B ? 1 === aD.a18 && !aD.hW : 2 === aD.a18
	}, this.hK = function(player) {
		return 0 !== ag.n3[player] && 2 !== ag.a4W[player]
	}, this.a4X = function(player) {
		return player === aD.es && 2 !== ag.a4W[player]
	}, this.l7 = function(player, jc) {
		return player !== jc && (0 === bi.f6[player] || bi.f6[player] !== bi.f6[jc])
	}, this.mE = function() {
		return al.kz < 2 ? 0 : aD.i2 ? 1 < bj.a4Y() : ag.gw[m4[1]]
	}, this.a4Z = function() {
		var kz = al.kz;
		if (0 !== kz) {
			if (!aD.i2) return !this.jq(m4[0]);
			for (var f6 = bi.f6, l1 = bj.l2(), l4 = al.l4, aB = kz - 1; 0 <= aB; aB--) {
				var gg = l4[aB];
				if (f6[gg] === l1 && !this.jq(gg)) return 1
			}
		}
		return 0
	}, this.a4a = function(player) {
		return player === aD.es
	}, this.a4b = function(jc, ng) {
		return ag.hA[aD.es] < ng * ag.hA[jc]
	}, this.jq = function(player) {
		return player >= aD.kT || 2 === ag.a4W[player]
	}, this.lR = function(player) {
		return 0 !== ag.n3[player]
	}, this.a0y = function(player) {
		return player < aD.kT
	}, this.qO = function(a4c, a4d) {
		return a4c !== a4d
	}, this.gX = function(player, fa) {
		var min;
		return fa = this.a4e(player, fa), ag.hA[player] += fa, ag.a4f[player] && (min = Math.min(ag.a4f[player], ag.hA[player]), ag.a4f[player] -= min, ag.hA[player] -= min), fa
	}, this.a4e = function(player, fa) {
		var a4g = ag.hA[player];
		return fa = Math.min(fa, ag.gw[player] * aD.a4h - a4g), fa = Math.min(fa, aD.a4i - a4g), Math.max(fa, 0)
	}, this.mb = function(player, ik, a4j, a4k) {
		var a4g = ag.hA[player],
			ik = bN.fZ(a4g * (ik + 1), 1024),
			a4j = bN.fZ(a4j * a4g, 1024),
			ik = Math.min(ik, a4g - a4j);
		return 10 === aD.kl && (ik = b4.a4m(player, ik)), bQ.ff[0] = ik, bQ.ff[1] = a4j, a4k <= ik
	}, this.ps = function(player, pa, pZ) {
		var player = ag.hA[player],
			a4l = bN.fZ(64 * player, 1024);
		return pa = Math.min(pa, player - a4l), pa = this.a4e(pZ, pa), bQ.ff[0] = pa, bQ.ff[1] = a4l, 1 <= pa
	}, this.a4n = function(player, pa, pZ) {
		var player = ag.hA[player],
			a4l = bN.fZ(64 * player, 1024);
		return pa = Math.min(pa, player - a4l), this.a4e(pZ, pa)
	}, this.pu = function(pa, pZ) {
		return pa = this.a4e(pZ, pa), bQ.ff[0] = pa, bQ.ff[1] = 0, 1 <= pa
	}, this.ij = function(player, a4o) {
		return bN.fZ(ag.hA[player] * (a4o + 1), 1024)
	}, this.a4p = function(player, a4j) {
		a4j = bN.fZ(a4j * ag.hA[player], 1024);
		bQ.ff[1] = a4j, ag.hA[player] -= a4j
	}, this.gV = function(player, a4q) {
		var ft, fv, fS = ag.hA[player];
		return a4q <= fS ? ag.hA[player] -= a4q : (ag.hA[player] = 0, fv = ag.a4f[player] + (ft = 5 * ((fS = a4q - fS) >> 2)), bf.gY(player, ft - fS, 12), fv <= aD.a4r ? ag.a4f[player] = fv : (ag.a4f[player] = aD.a4r, bf.gY(player, fv - aD.a4r,
			18))), a4q
	}, this.lf = function(player, ik) {
		var hA = ag.hA,
			a4g = hA[player],
			ik = bN.fZ(a4g * (ik + 1), 1024),
			a4l = Math.max(bN.fZ(a4g, 10), 1e3);
		return (ik = Math.min(ik, a4g - a4l)) < 0 ? (hA[player] = 0, a4l = Math.min(1e3, a4g + aD.a4r - ag.a4f[player]), bQ.ff[1] = a4l, ag.a4f[player] += a4l - a4g, 0) : (bQ.ff[1] = a4l, 10 === aD.kl && (ik = b4.a4m(player, ik)), hA[player] -=
			a4l + ik, ik)
	}, this.md = function(player) {
		ag.hA[player] -= bQ.ff[0] + bQ.ff[1]
	}, this.qP = function(player, jc) {
		return (jc = Math.min(jc, aD.f5)) < aD.f5 && 0 === ag.n3[jc] && (jc = aD.f5), (bQ.f4[0] = jc) === aD.f5 || bu.f1(player, jc)
	}, this.qS = function(player, pZ) {
		return 0 !== ag.n3[pZ] && !bu.f1(player, pZ)
	}, this.a4s = function(player, a4t) {
		for (var gg, f8 = al.kz, a4u = 0, a4v = m4, aB = 0; aB < f8; aB++)
			if (gg = a4v[aB], !this.jq(gg)) {
				if (player === gg) return !0;
				if (++a4u > a4t) return !1
			} return !1
	}, this.m0 = function(gg) {
		var a4w = aD.i2 ? bj.l0() : ag.gw[m4[0]];
		return a4w >= bN.fZ(gg * aD.kD, 100)
	}, this.a4x = function(fa, min, max) {
		return Math.floor(bN.iG(isNaN(fa) ? 0 : Number(fa), min, max))
	}
}

function a3S() {
	this.a4y = function(canvas, a4z, a50) {
		var i = canvas.width,
			j = canvas.height,
			eg = bC.r1.xW(i, j),
			iA = bC.r1.getContext(eg, !0),
			canvas = (iA.drawImage(canvas, 0, 0), iA.getImageData(0, 0, i, j));
		return a4z(canvas.data, i, j, a50), iA.putImageData(canvas, 0, 0), eg
	}, this.a51 = function(xh, i, j) {
		for (var fF = i - 1; 0 <= fF; fF--)
			for (var fH = j - 1; 0 <= fH; fH--) {
				var aB = 4 * (fF + fH * i);
				xh[3 + aB] = xh[aB], xh[aB] = xh[1 + aB] = xh[2 + aB] = 255
			}
	}, this.a52 = function(xh, i, j) {
		for (var fF = i - 1; 0 <= fF; fF--)
			for (var fH = j - 1; 0 <= fH; fH--) {
				var aB = 4 * (fF + fH * i);
				xh[1 + aB] > xh[2 + aB] + 10 && (xh[3 + aB] = xh[aB], xh[1 + aB] = xh[2 + aB])
			}
	}, this.a53 = function(xh, i, j, a50) {
		for (var gap = Math.floor(Math.min(i, j) * a50), fF = 0; fF < i; fF++)
			for (var aB, fH = 0; fH < j; fH++)(fF < gap || fH < gap || i - gap <= fF || j - gap <= fH) && (xh[3 + (aB = 4 * (fF + fH * i))] = 255 - 255 * (xh[1 + aB] - xh[aB]) / (255 - xh[aB]))
	}, this.a54 = function(xh, i, j, a50) {
		for (var fF = i - 1; 0 <= fF; fF--)
			for (var fH = j - 1; 0 <= fH; fH--) {
				var aB = 4 * (fF + fH * i);
				xh[aB] = a50[0], xh[1 + aB] = a50[1], xh[2 + aB] = a50[2]
			}
	}, this.a55 = function(xh, i, j, a50) {
		for (var gap = Math.floor(i * a50), fF = 0; fF < i; fF++)
			for (var aB, fH = 0; fH < j; fH++)(fF < gap || fH < gap || i - gap <= fF || j - gap <= fH) && (xh[aB = 4 * (fF + fH * i)] = xh[1 + aB] = xh[2 + aB] = 0)
	}, this.a56 = function(xh, i, j) {
		for (var fH, aB, fF = i - 1; 0 <= fF; fF--)
			for (fH = j - 1; 0 <= fH; fH--) 200 < xh[1 + (aB = 4 * (fF + fH * i))] && xh[1 + aB] - 20 > xh[aB] && xh[1 + aB] - 20 > xh[2 + aB] ? xh[aB] + xh[2 + aB] < 40 ? xh[3 + aB] = 0 : (xh[3 + aB] = xh[aB], xh[aB] = 255, xh[1 + aB] = 255, xh[
				2 + aB] = 255) : xh[aB] < 50 && xh[1 + aB] < 50 && xh[2 + aB] < 50 && (xh[aB] + xh[1 + aB] + xh[2 + aB] < 50 ? xh[3 + aB] = 180 : xh[3 + aB] = 180 + Math.floor(75 * (xh[aB] + xh[1 + aB] + xh[2 + aB] - 50) / 100))
	}, this.a57 = function(xh, i, j) {
		for (var fH, aB, fF = i - 1; 0 <= fF; fF--)
			for (fH = j - 1; 0 <= fH; fH--) xh[1 + (aB = 4 * (fF + fH * i))] > xh[aB] + 20 && xh[1 + aB] > xh[2 + aB] + 20 && xh[aB] + xh[2] < 40 && (xh[3 + aB] = 255 - xh[1 + aB], xh[aB] = xh[1 + aB] = xh[2 + aB] = xh[aB])
	}, this.a44 = function(xh, i, j, a50) {
		for (var eE = i >> 1, fF = 0; fF < i; fF++)
			for (var fH = 0; fH < j; fH++) Math.sqrt((fF - eE) * (fF - eE) + (fH - eE) * (fH - eE)) > a50 * eE && (xh[4 * (fF + fH * i) + 3] = 0)
	}
}

function a3P() {
	var a58 = {
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
		a59 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.s1 = function(ei) {
		return ei.replace(a59, function(match) {
			return a58[match] || match
		})
	}, this.a0P = function(fa) {
		var aB, a5A, a5B, a5C, a5D;
		if (fa < 0) return "-" + this.a0P(Math.abs(fa));
		if (fa < 1e3) return fa.toString();
		for (a5A = Math.floor(Math.log(fa + .5) / Math.log(10)) + 1, a5B = Math.floor((a5A - 1) / 3), a5D = (a5C = fa.toString()).substring(a5A - 3, a5A), aB = 1; aB < a5B; aB++) a5D = a5C.substring(a5A - 3 * (aB + 1), a5A - 3 * aB) + " " + a5D;
		return a5C.substring(0, a5A - 3 * a5B) + " " + a5D
	}, this.a5E = function(gg, a5A) {
		return gg.toFixed(a5A) + "%"
	}, this.a5F = function(fa, a5G) {
		return fa.toFixed(bN.iG(Math.floor((void 0 === a5G ? 3 : a5G) - Math.log10(Math.max(fa, 1))), 0, 8))
	}, this.a5H = function(fa, ng, a5A) {
		return (fa * ng).toFixed(a5A)
	}, this.a1r = function(username) {
		var fC, ex = username.indexOf("[");
		return !(ex < 0) && 1 < (fC = username.indexOf("]")) - ex && fC - ex <= 8 ? username.substring(ex + 1, fC).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1r;
	this.a5I = function(qi) {
		for (var fR = Math.floor(.5 * qi.length + .5), nm = Math.floor(.5 * (fR - 1)), aB = 0; aB < nm; aB++)
			for (var fS = -1; fS < 2; fS += 2) {
				var eg = fR + fS * aB;
				if (" " === qi[eg]) return [this.a1n(qi.substring(0, eg)), this.a5J(qi.substring(eg))]
			}
		return [qi.substring(0, fR), qi.substring(fR)]
	}, this.a5J = function(qi) {
		for (var f8 = qi.length, aB = 0; aB < f8; aB++)
			if (" " !== qi[aB]) return qi.substring(aB);
		return qi
	}, this.a1n = function(qi) {
		for (var aB = qi.length - 1; 0 <= aB; aB--)
			if (" " !== qi[aB]) return qi.substring(0, aB + 1);
		return qi
	}, this.a5K = function(qi, a5L) {
		return qi.split("(")[0] + "(🧈 " + a5L.toFixed(2) + ")"
	}, this.startsWith = function(qi, a5M) {
		return qi.substring(0, a5M.length) === a5M
	}, this.a4U = function(qi, a5M) {
		var f8 = qi.length;
		return qi.substring(f8 - a5M.length, f8) === a5M
	}, this.a5N = function(g, a5O, a5P) {
		var qi = "",
			f8 = g.length - 1;
		a5P = a5P || "";
		for (var aB = 0; aB < f8; aB++) qi += a5P + g[aB] + a5P + ",", (aB + 1) % a5O == 0 && (qi += "\n");
		return qi += a5P + g[f8] + a5P
	}, this.a5Q = function(qi, a0E, a0F) {
		return qi.replace(new RegExp(a0E, "g"), a0F)
	}
}

function a5R() {
	this.ef = function(player, eu) {
		aI.z1(player, bO.fG(eu), bO.fI(eu)) && (bh.dp = !0), aD.kn && this.eb()
	}, this.eb = function() {
		aD.hW = !1;
		for (var aB = 0; aB < aD.kT; aB++) 0 !== ag.n3[aB] && 0 === ag.gw[aB] && aI.z8(aB);
		0 !== ag.n3[aD.es] ? (bf.mz[7] = ag.gw[aD.es], bf.mz[8] = ag.hA[aD.es], aR.a5S(), aW.a5T(), aD.hH || aH.nO(ag.j1[aD.es] - 5, ag.j3[aD.es] - 5, ag.j2[aD.es] + 5, ag.j4[aD.es] + 5), av.dh()) : aX.show(!1, !1, !1, !0), aN.a5U(18), af.a5V(),
			af.mp(!0), bR.y.a5W(), aL.sI(), aD.qN = null, bd.a5X = !0, bd.a5Y(), aD.kn && a0.a1.setState(1)
	}
}

function c3() {
	this.f5 = 512, this.a4i = 15e8, this.a5Z = 1e9, this.a4r = 5e4, this.a5a = 512, this.gS = 2, this.es = 0, this.kT = 0, this.a1B = 0, this.kp = 0, this.a1A = 0, this.yC = 512, this.yH = 512, this.a4h = 150, this.kn = !0, this.hH = 0, this.a18 = 0,
		this.kD = 0, this.nX = !1, this.hW = 0, this.a5b = 0, this.i2 = !1, this.yJ = 0, this.yK = 0, this.kl = 0, this.zZ = 0, this.qN = null, this.a1R = new zN, this.a5c = 30, this.a15 = 0, this.a1D = 0, this.a1Q = 0, this.a10 = 0, this.data =
		new a5d, this.a5e = new a5f, this.a5g = 0, this.a5h = "", this.a5i = function() {
			bQ.dh(), bT.dh(), bs.clear(), this.a1B = this.kT = this.data.humanCount, this.kn = 1 === this.a1B, this.nX = !1, this.hH = this.data.isReplay, this.kl = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zZ = this.data.isContest, this.i2 = this.kl < 7 || 9 === this.kl, this.kl = 10 === this.kl && this.kn ? 7 : this.kl, this.kl = 8 === this.kl && 2 !== this.kT ? 7 : this.kl, az.dh(),
				this.yJ = this.data.numberTeams, this.data.teamPlayerCount ? this.yK = +(0 < this.data.teamPlayerCount[0]) : (this.yK = 0, this.i2 && this.kn && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yJ + 1), aD.a5e.a5j())), this.a5c = this.kT <= 2 ? 30 : this.kT <= 50 ? 40 : 50, this.a5b = this.hW = this.data.selectableSpawn, this.qN = this.hW ? new a5R : null, 1 === l.dy ? this.yC = this.kT : this.yC = this.data
				.playerCount, this.yH = this.yC, this.kp = this.yC - this.kT, this.a1A = 0, this.es = this.data.selectedPlayer, this.a15 = 0, this.a1D = 0, this.a1Q = 0, this.a10 = 0, ay.a5k(this.data.spawningSeed), ae.dh(), ag.dh(), an.dh(), ai
				.a5l(), bA.pP.qB = [], bA.hY.pS = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bi.dh(), this.a18 = 1, bf.dh(), a5m(), ac.di(), ap.a5n(), bd.dh(), ac
				.dh(), at.dh(), bO.dh(), bP.dh(), ao.dh(), bX.a5o(), aE.dh(), ai.a7(), aI.dh(), aJ.dh(), al.a5p(), bB.dh(), bj.dh(), bR.dh(), bg.dh(), a5q.putImageData(a5r, 0, 0), aV.dh(), aS.dh(), aR.dh(), bE.dh(), aw.dh(), aU.dh(), aW.dh(), aM
			.dh(), aQ.dh(), aN.dh(), aP.dh(), aL.dh(), aX.dh(), aF.dh(), aG.dh(), gB(), ad.dh(), af.dh(), b4.dh(), b5.dh(), b1.dh(), b7.dh(), b8.dh(), this.a1R.dh(), bh.a5o(), aH.nN(), 0 === ag.n3[aD.es] && aX.show(!1, !0), af.mp(!0), av.dh(), bh
				.dp = !0, this.hH || this.kn && this.hW || a0.a1.setState(1), this.a5g = 0
		}, this.a2X = function(eV) {
			bB.qL.a5t.length ? this.a5h = bB.qL.a5t : this.a5h = bB.a5u.a0a(), b0.y.a5v(), bs.clear(), this.a18 = 0, bh.a5w(), a0.a1.setState(0), aa.setState(0), bW.eN.show(eV), 2 === this.a5g ? t.y.a5x(0) : 1 === this.a5g ? t.u(19) : t.u(5, 5)
		}, this.a5y = function() {
			return this.hH ? aM.hI || !bE.a5z : this.kn && (aM.hI || this.hW)
		}, this.a60 = function() {
			return 1 === this.a18 && !this.hW
		}
}

function a5d() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a61 = null
}

function a5f() {
	this.a5j = function() {
		var a62 = aD.data;
		bC.r9.a3t(a62.teamPlayerCount, a62.playerCount), a62.numberTeams = bC.r9.a3k(a62.teamPlayerCount, 0), a62.teamPlayerCount[0] && a62.teamPlayerCount[7] && (a62.teamPlayerCount[7] = 0, this.a5j())
	}, this.a63 = function() {
		var a62 = aD.data;
		a62.mapType < 2 ? bU.a7(bU.a64(a62), a62.mapSeed) : bU.a65(a62.canvas)
	}, this.a66 = function() {
		var a62 = aD.data;
		a62.colorsData || (a62.colorsData = new Uint32Array(1)), a62.selectableColor && (a62.colorsData[0] = bl.y.wj()), a62.selectableName && (a62.playerNamesData || (a62.playerNamesData = new Array(1)), a62.playerNamesData[0] = bl.eT.data[122]
			.value), a62.a61 = new Uint32Array(1), a62.a61[0] = bI.tM.xM(bl.eT.data[105].value, 5)
	}, this.a67 = function() {
		aD.data = new a5d
	}
}

function dd() {
	var a68 = [];
	this.pv = function(player, pZ, a69, a6A) {
		player === aD.es || pZ === aD.es || !a6A && bC.gU.jq(player) || bC.gU.jq(pZ) || this.za(ag.zb[player] + " supported " + ag.zb[pZ] + " with " + bC.s0.a0P(a69) + " ressource" + (1 === a69 ? "." : "s."))
	}, this.za = function(qi, pk) {
		qi = {
			eW: aW.a6C(),
			qi: qi,
			pk: pk
		};
		a68.push(qi), 30 === t.tJ && t.a2O().za(qi)
	}, this.clear = function() {
		a68 = [];
		var th = t.a6D(30);
		th && th.clear()
	}, this.a6E = function() {
		return a68
	}
}

function dX() {
	this.a06 = 0, this.gap = 0, this.ss = 0, this.r7 = 0, this.dh = function() {
		this.resize()
	}, this.resize = function() {
		this.a06 = .0022 * bC.r1.r2(.5) * h.iI, this.ss = this.a06 / h.k, this.gap = Math.max(Math.floor((a0.a1.iH() ? .0114 : .01296) * h.iI), 2), this.r7 = this.gap / h.k
	}
}

function dW() {
	this.a6F = function() {
		return a0.a1.iH() ? 2 : 1
	}
}

function cE() {
	var ra, fF, fH, a6G, a6H, a6I, eW, a6J, a6K, a6L, a6M, gap, zoom, q4, a6N;

	function a6b(li, lj, em) {
		ac.f3(em) || -1 === (li = bP.lI.a6k(li, lj)) ? aN.a6j(em) : aN.a6l(li)
	}

	function a6X(a6J) {
		for (var aB = q4.length - 1; 0 <= aB; aB--)
			if (q4[aB] === a6J) return 1
	}

	function a6V(a6S) {
		var aB, f8;
		if (-1 !== a6S)
			for (f8 = ra.length, aB = 0; aB < f8; aB++)
				if (ra[aB].hu && ra[aB].fF + 1 === a6S % 4 && ra[aB].fH + 1 === a6S >> 2) return aB;
		return -1
	}

	function a6T(li, lj) {
		var th = gap / 2;
		return li < fF - a6G - 3 * th || fF + 3 * a6G + 5 * th < li || lj < fH - a6G - 3 * th || fH + 2 * a6G + 3 * th < lj ? -1 : 4 * (lj < fH - th ? 0 : lj < fH + a6G + th ? 1 : 2) + (li < fF - th ? 0 : li < fF + a6G + th ? 1 : li < fF + 2 * a6G +
			3 * th ? 2 : 3)
	}
	this.a6O = function() {
		var aB, fS, a6R = [bD.oU, bD.oj, bD.o2, bD.p6, bD.ow];
		for (ra = new Array(10), aB = 0; aB < 10; aB++) ra[aB] = {
			id: aB,
			hu: !1,
			lQ: 0,
			canvas: [],
			fF: 0,
			fH: 0
		};
		for (ra[0].colors = [0, 1, 2, 3], ra[0].fF = 0, ra[0].fH = 0, ra[1].colors = [1, 4], ra[1].fF = 1, ra[1].fH = 0, ra[2].colors = [0, 1], ra[2].fF = -1, ra[2].fH = 0, ra[3].colors = [0], ra[3].fF = 0, ra[3].fH = 0, ra[4].colors = [0, 2],
			ra[4].fF = 1, ra[4].fH = 1, ra[5].colors = [3], ra[5].fF = 0, ra[5].fH = -1, ra[6].id = 20, ra[6].colors = [0], ra[6].fF = 1, ra[6].fH = -1, ra[7].id = 21, ra[7].colors = [0], ra[7].fF = 0, ra[7].fH = 1, ra[8].id = 16, ra[8]
			.colors = [0], ra[8].fF = 0, ra[8].fH = 0, ra[9].id = 10, ra[9].colors = [4], ra[9].fF = 2, ra[9].fH = 0, aB = 0; aB < 10; aB++)
			for (fS = 0; fS < ra[aB].colors.length; fS++) ra[aB].canvas.push(function(id, a3z) {
				if (id < 20) return bC.canvas.zs(ab.get(3), id, a3z);
				var a3z = ab.get(3).height,
					a40 = bC.r1.xW(a3z, a3z),
					iA = bC.r1.getContext(a40);
				20 === id ? iA.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xh.a07(aj.sH.zw + aj.sH.a0D, iA, 0, 0, a3z);
				return a40
			}(ra[aB].id, a6R[ra[aB].colors[fS]]))
	}, this.a6Q = function() {
		return ra
	}, this.dh = function() {
		q4 = [], fF = fH = eW = 0, a6H = a6I = -1e3, this.resize()
	}, this.resize = function() {
		a6G = Math.floor((a0.a1.iH() ? .075 : .0468) * h.iI), zoom = a6G / ab.get(3).height, gap = Math.floor(a6G / 3)
	}, this.a30 = function(li, lj) {
		return !!this.hu() && (bh.dp = !0, !!aj.xh.hL(li, lj, a6K) || (li = function(li, lj) {
			a6I = a6H = -1e3;
			var a6U = a6V(a6T(li, lj));
			if (-1 === a6U) return 0;
			if (1 !== ra[a6U].colors[ra[a6U].lQ])
				if (5 === a6U) {
					if (! function() {
							var eX = performance.now();
							a6N + 4e3 < eX && (q4 = []);
							a6N = eX
						}(), a6X(a6J)) return 1;
					q4.push(a6J), 16 < q4.length && q4.shift()
				} else if (6 === a6U) {
				for (var aB = q4.length - 1; 0 <= aB; aB--) 0 === ag.n3[q4[aB]] && q4.splice(aB, 1);
				0 < q4.length && (b5.a6Y(1, q4, !0) && bA.gU.q3(q4, a6J), q4 = [])
			} else if (2 === a6U) an.hm(a6J) && bA.hY.pY(aR.hc(), a6J);
			else if (3 === a6U) aD.hW && bA.hY.hZ(a6L);
			else if (0 === a6U)
				if (0 === ra[0].lQ) {
					if (aD.a5b && aW.a6C() < 350) return 1;
					bX.a6Z(4), bA.hY.hf(aR.hc(), a6J)
				} else b1.hg(a6J, aR.hc());
			else if (1 === a6U) bA.hY.hk(aR.hc(), a6L);
			else if (9 === a6U) bA.hY.hn(aR.hc());
			else {
				if (7 === a6U) return bX.a6Z(0), aj.xh.show(li, lj), 2;
				if (4 === a6U) b5.a6Y(0, [a6J], !0) && bA.gU.q0(a6J);
				else {
					if (8 !== a6U) return 0;
					bA.hY.hb(aR.hc(), a6M, a6J)
				}
			}
			return 1
		}(li, lj), this.sI(), 2 === li && (aj.xh.hu = !0), 0 < li))
	}, this.a32 = function(li, lj) {
		this.hu() || (a6H = li, a6I = lj, eW = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bO.hO(mouseX),
			coordY = bO.hQ(mouseY),
			point = bO.ey(bO.fV(coordX, coordY));
		bO.hR(coordX, coordY) && a6b(mouseX, mouseY, point)
	}, this.click = function(li, lj, a39) {
		var hN = bO.hO(li),
			hP = bO.hQ(lj),
			eu = bO.fV(hN, hP),
			em = bO.ey(eu),
			a6a = (a0.a1.iH() ? .025 : .0144) * h.iI,
			eX = performance.now();
		return !(Math.abs(li - a6H) > a6a || Math.abs(lj - a6I) > a6a || eW + 500 < eX || (eW = eX, bL.rT() && (bL.hD = li, bL.hE = lj, b7.eb(1), b8.eb(1)), !bO.hR(hN, hP))) && (a39 ? (a6b(li, lj, em), !1) : aM.hI || this.hu() || !bC.gU.hK(aD
			.es) || aD.hH ? (this.sI(), !1) : (aD.hW ? 0 <= (a6L = bt.hX(eu)) && (ra[3].hu = !0) : 2 === aD.a18 ? ac.gi(em) && (a6J = ac.f0(em), bC.gU.jq(a6J) || (ra[0].hu = !0, ra[0].lQ = 1, ra[7].hu = !0)) : (bP.hl.hm(aD.es, eu) && (ra[0]
					.hu = !0, ra[0].lQ = 1, ra[1].hu = !0, ra[1].lQ = 0, ra[9].hu = !0, ra[9].lQ = 0), bP.hi.hj(aD.es, eu) && (ra[0].hu = !0, ra[0].lQ = 1, ra[1].hu = !0, ra[1].lQ = 1, a6L = bQ.fk[7]), ac.fD(em) ? (a6M = am.ej.el(em)) &&
				(a6a = bO.ey(a6M), ra[8].hu = !0, a6J = ac.ez(a6a) ? aD.f5 : ac.f0(a6a)) : (ac.z6(aD.es, em) && (a6K = aD.es, ra[0].hu = !0, ra[0].lQ = 1, ra[7].hu = !0), -1 !== (eX = bt.hd(eu)) && (ac.ez(eX << 2) ? (a6J = aD.f5, bu.he(aD
					.es) ? (ra[0].hu = !0, ra[0].lQ = 0) : ad.gF(aD.es) && (ra[0].hu = !0, ra[0].lQ = 3)) : (a6J = ac.f0(eX << 2), ra[0].lQ = 1, ra[5].hu = function(a6J) {
					return !bC.gU.jq(a6J) && !a6X(a6J) && b5.a6Y(1, [a6J], !1)
				}(a6J), ra[7].hu || bC.gU.jq(a6J) || (a6K = a6J, ra[7].hu = !0), ra[4].hu = !bC.gU.jq(a6J) && !af.a6f(a6J) && b5.a6Y(0, [a6J], !1), ra[6].hu = function(a6J) {
					if (0 === q4.length) return !1;
					if (performance.now() > a6N + 4e3) return !(q4 = []);
					return !a6X(a6J) && ! function(a6J) {
						var aB;
						if (aD.i2)
							for (aB = q4.length - 1; 0 <= aB; aB--)
								if (!bu.f1(a6J, q4[aB])) return 1;
						return
					}(a6J)
				}(a6J), bu.f1(a6J, aD.es) ? (bu.hh(aD.es, a6J) ? (ra[0].lQ = 0, ra[0].hu = !0) : ad.gF(aD.es) && (ra[0].lQ = 3, ra[0].hu = !0), ra[0].hu = this.a6h()) : (ra[2].hu = !0, an.hm(a6J) ? ra[2].lQ = 0 : ra[2].lQ = 1,
					ra[0].hu = !0))))), this.a6c(li, lj)))
	}, this.a6c = function(li, lj) {
		return fF = li - Math.floor(a6G / 2), fH = lj - Math.floor(a6G / 2), !!this.hu()
	}, this.a2g = function(li, lj) {
		return !!this.hu() && (aj.xh.hu ? !aj.xh.a05(li, lj) && (aj.xh.hu = !1, bh.dp = !0) : function(sb, li, lj) {
			li = a6T(li, lj);
			if (0 <= a6V(li)) return !1;
			if ((1 === li || 6 === li) && 0 <= a6V(2)) return !1;
			if ((6 === li || 9 === li) && 0 <= a6V(10)) return !1;
			return sb.sI(), bh.dp = !0
		}(this, li, lj))
	}, this.sI = function() {
		for (var aB = ra.length - 1; 0 <= aB; aB--) ra[aB].hu = !1, ra[aB].lQ = 0;
		aj.xh.hu = !1
	}, this.hu = function() {
		return this.a6h() || aj.xh.hu
	}, this.a6h = function() {
		for (var f8 = ra.length, aB = 0; aB < f8; aB++)
			if (ra[aB].hu) return !0;
		return !1
	}, this.vf = function() {
		if (this.hu())
			if (aj.xh.hu) aj.xh.vf();
			else {
				var aB, iA = vg,
					fS = ra,
					f8 = fS.length,
					a6p = (a6G + gap) / zoom;
				for (iA.imageSmoothingEnabled = !0, iA.setTransform(zoom, 0, 0, zoom, fF, fH), aB = 0; aB < f8; aB++) fS[aB].hu && vg.drawImage(fS[aB].canvas[fS[aB].lQ], fS[aB].fF * a6p, fS[aB].fH * a6p);
				iA.imageSmoothingEnabled = !1, iA.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cF() {
	var j, canvas, a6q, a6r, a6s, a6t = -1;

	function a6u() {
		var a6v, zH = canvas.getContext("2d", {
			alpha: !0
		});
		zH.clearRect(0, 0, j, j), zH.fillStyle = bD.o0, zH.fillRect(0, 0, j, j), 9 === a6r && (zH.fillStyle = bD.o5, zH.fillRect(0, 0, j, j)), zH.fillStyle = bD.o4, zH.fillRect(0, 0, j, 1), zH.fillRect(0, 0, 1, j), zH.fillRect(0, j - 1, j, 1), zH
			.fillRect(j - 1, 0, 1, j), a6v = .9 * j / ab.get(0).width, zH.imageSmoothingEnabled = !0, zH.setTransform(a6v, 0, 0, a6v, Math.floor((j - a6v * ab.get(0).width) / 2), Math.floor((j - a6v * ab.get(0).height) / 2)), zH.drawImage(ab.get(0),
				0, 0), zH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6y(li, lj) {
		if (!aM.hI) return li <= j + be.gap && lj >= aR.fH ? 9 : -1;
		if (li <= 4 * j + be.gap) {
			if (lj >= aR.fH) return 0;
			if (lj >= aR.fH - j - a6s * be.gap) return 2
		} else if (li <= 7 * j + be.gap && lj >= aR.fH - j - a6s * be.gap) return 1;
		return -1
	}
	this.hI = !1, this.dh = function() {
		a6r = -1, this.hI = !1, a6s = a0.a1.iH() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6q = bC.r1.sq(1, (a0.a1.iH() ? .5 : .45) * j), a6u()
	}, this.a6w = function() {
		return !(1 !== aD.a18 || aD.hW || (aD.hH ? !bE.a5z : this.hI && aD.kn))
	}, this.a3H = function() {
		this.hI = !this.hI, this.hI ? (bE.a3G(!1), aD.hH && bE.a5z && bE.a3I(!0), this.a6x(), 9 === a6r && (a6r = 0)) : (a6r = -1, a6u(), !aD.kn || 1 !== aD.a18 || aD.hW || aD.hH || a0.a1.setState(1)), bh.dp = !0
	}, this.a6x = function() {
		(aD.kn || aD.hH) && 1 === aD.a18 && (aV.mp(!0), aD.hW || setTimeout(function() {
			bd.a1K()
		}, 0), a0.a1.setState(0))
	}, this.hL = function(li, lj) {
		return 0 <= (a6t = a6y(li, lj)) || !aM.hI || aD.kn || aD.hH || bg.hu || aM.a3H(), a6t
	}, this.a2g = function(li, lj) {
		li = a6y(li, lj);
		li !== a6r && (a6r = li, this.hI || a6u(), bh.dp = !0)
	}, this.a2h = function(li, lj) {
		li = a6y(li, lj);
		return -1 !== li && a6t === li && (this.hI ? aD.nX ? (0 <= li && bE.a3G(!1), !aD.hH) : (0 === li ? aD.a2X() : 1 === li ? this.a3H() : 2 === li && t.u(1, 0), !0) : 9 === li && (this.a3H(), !0))
	}, this.vf = function() {
		var i;
		this.hI ? (i = Math.floor(5.5 * j), vg.setTransform(1, 0, 0, 1, be.gap, aR.fH), vg.fillStyle = bD.o0, vg.fillRect(0, 0, i, j), 0 === a6r ? (vg.fillStyle = bD.o5, vg.fillRect(0, 0, 4 * j, j)) : 1 === a6r && (vg.fillStyle = bD.o5, vg
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vg.fillStyle = bD.o4, vg.fillRect(0, 0, i, 1), vg.fillRect(0, 0, 1, j), vg.fillRect(4 * j, 0, 1, j), vg.fillRect(0, j - 1, i, 1), vg.fillRect(i - 1, 0, 1, j), vg.font = a6q, bC.r1
			.textBaseline(vg, 1), bC.r1.textAlign(vg, 1), vg.fillText(L(45), 2 * j, .54 * j), i = .4 * j, aM.a72(be.gap + 4 * j + (1.5 * j - i) / 2, aR.fH + .3 * j, i), i = 1, vg.setTransform(1, 0, 0, 1, be.gap, aR.fH - i * a6s * be.gap - i *
				j), vg.fillStyle = bD.o0, vg.fillRect(0, 0, 4 * j, j), a6r === i + 1 && (vg.fillStyle = bD.o5, vg.fillRect(0, 0, 4 * j, j)), vg.fillStyle = bD.o4, vg.fillRect(0, 0, 4 * j, 1), vg.fillRect(0, 0, 1, j), vg.fillRect(4 * j, 0, 1,
				j), vg.fillRect(0, j - 1, 4 * j, 1), vg.fillText(L(0 === i ? 45 : 46), 2 * j, .54 * j), vg.setTransform(1, 0, 0, 1, 0, 0)) : vg.drawImage(canvas, be.gap, aR.fH)
	}, this.qc = function(player) {
		return 0 !== ag.n3[player] && 2 !== aD.a18 && !bC.gU.jq(player)
	}, this.a72 = function(fF, fH, f8) {
		vg.setTransform(1, 0, 0, 1, fF, fH), vg.lineWidth = be.a06, vg.strokeStyle = bD.o4, vg.beginPath(), vg.moveTo(0, 0), vg.lineTo(f8, f8), vg.moveTo(0, f8), vg.lineTo(f8, 0), vg.stroke()
	}
}

function cG() {
	var a74, j, a75, a76, a77, a78, a79, a7A, a7B;

	function zD() {
		return aR.a7T(aN.a7P()) ? aw.hu ? __fx.settings.keybindButtons ? aR.fH - 2 * aR.j - 3 * a75 : aR.fH - aR.j - 2 * a75 : __fx.settings.keybindButtons ? aR.fH - aR.j - 2 * a75 : aR.fH - a75 : bE.a7T(aN.a7S()) ? aw.hu ? bE.zD() - aR.j - 2 * a75 :
			bE.zD() - a75 : aw.hu ? h.j - aR.j - (bm.a6F() + 1) * a75 : h.j - bm.a6F() * be.gap
	}

	function a7G(eX, qi, id, gg, a7J, a7K, l6, a7L, a7M, a7N, a7X) {
		var aB, zH, a40, qt, a7Y = void 0 !== a7M,
			i = Math.floor(aQ.measureText(qi, aN.a6q) + 1.5 * a76 + (a7Y ? j : 1.5 * a76));
		if (bh.dp = !0, a7X || bs.za(qi, a7M), i + 2 * a75 + aR.j > h.i && !a7Y && 50 !== id && 20 < qi.length) a7G(eX, (a7X = bC.s0.a5I(qi))[0], id, gg, a7J, a7K, l6, a7L, a7M, a7N, !0), a7G(eX, a7X[1], id, gg, a7J, a7K, l6, a7L, a7M, a7N, !0);
		else if (a7X = i + (50 === id ? a77 : 0), (a40 = document.createElement("canvas")).width = i, a40.height = j, (zH = a40.getContext("2d", {
				alpha: !0
			})).font = aN.a6q, bC.r1.textBaseline(zH, 1), bC.r1.textAlign(zH, 0), zH.clearRect(0, 0, i, j), zH.fillStyle = a7K, zH.fillRect(0, 0, i, j), zH.fillStyle = a7J, zH.fillText(qi, Math.floor(1.5 * a76), Math.floor(j / 2)), a7Y && (zH
				.imageSmoothingEnabled = !0, aj.xh.a07(a7M, zH, i - j, 0, j)), 0 === (qt = {
				eW: eX,
				qi: qi,
				id: id,
				player: gg,
				canvas: a40,
				a7J: a7J,
				a7K: a7K,
				i: i,
				a7Q: a7X,
				l6: l6,
				a7L: a7L,
				a7M: a7M,
				a7N: a7N
			}).eW || 0 < a74.length && 0 < a74[0].eW) a74.unshift(qt);
		else {
			for (aB = 1; aB < a74.length; aB++)
				if (0 < a74[aB].eW) return void a74.splice(aB, 0, qt);
			a74.push(qt)
		}
	}

	function a7H(eE, th, fS) {
		return "rgb(" + eE + "," + th + "," + fS + ")"
	}

	function a7Z(id, gb) {
		for (var f8 = a74.length, aB = 0; aB < f8; aB++) a74[aB].id === id && gb-- <= 0 && (a74.splice(aB, 1), aB--, f8--)
	}

	function a7a(id, player) {
		for (var fM = !1, aB = a74.length - 1; 0 <= aB; aB--) a74[aB].id !== id || player !== aD.f5 && a74[aB].player !== player || (a74.splice(aB, 1), fM = !0);
		return fM
	}

	function a7w(qi) {
		a7G(340, qi, 6, 0, a7H(215, 245, 255), bD.o1, -1, !1)
	}
	this.a7C = "", this.dh = function() {
		var self;
		a7A = 0, a79 = a0.a1.iH() ? 7 : 12, a78 = {
				a0w: [0, 0, 0],
				a7D: [0, 0, 0],
				nL: [220, 180, 180],
				ve: [0, 0, 0],
				eg: [0, 0, 0]
			}, a74 = [], this.resize(), aD.hW && this.a1L(0, 18), bU.xU.xV[bU.eo].name.length && a7w(L(89, [bU.xU.xV[bU.eo].name])), bU.xU.xV[bU.eo].a7x && a7w(L(90, [bU.xU.xV[bU.eo].a7x])), a7w(L(91, [bU.fJ - 2 + "x" + (bU.fK - 2)])), a7w(L(92,
				[bC.s0.a0P(ap.a7y)])), ap.a7y !== ap.a7z && a7w(L(93, [bC.s0.a0P(ap.a7z) + " (" + bC.s0.a5E(100 * ap.a7z / ap.a7y, 1) + ")"])), 0 < ap.a80 && a7w(L(69, [bC.s0.a0P(ap.a80) + " (" + bC.s0.a5E(100 * ap.a80 / ap.a7y, 1) + ")"])), 0 <
			ap.a81 && a7w(L(94, [bC.s0.a0P(ap.a81) + " (" + bC.s0.a5E(100 * ap.a81 / ap.a7y, 1) + ")"])), 10 === aD.kl && a7G(120, L(95), 6, 0, a7H(235, 255, 120), bD.o1, -1, !1), 0 !== (self = this).a7C.length && (a7G(200, self.a7C, 0, 0, bD.o4,
				bD.o1, -1, !1), self.a7C = ""), aD.zZ && a7G(340, L(47), 6, 0, a7H(255, 200, 0), bD.o1, -1, !1)
	}, this.resize = function() {
		var a7I, aB;
		if (j = (j = Math.floor((a0.a1.iH() ? .031 : .0249) * h.iI)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6q = bC.r1.sq(1, this.fontSize), a75 = be.gap, a76 = Math.floor(j / 5), 0 < a74.length)
			for (a7I = a74, a74 = [], aB = a7I.length - 1; 0 <= aB; aB--) a7G(a7I[aB].eW, a7I[aB].qi, a7I[aB].id, a7I[aB].player, a7I[aB].a7J, a7I[aB].a7K, a7I[aB].l6, a7I[aB].a7L, a7I[aB].a7M, a7I[aB].a7N, !0);
		this.a7O()
	}, this.a7O = function() {
		a7B = document.createElement("canvas");
		var qi = L(48),
			zH = (a77 = aQ.measureText(qi, this.a6q) + 5 * a76, a7B.height = j, a7B.width = a77, a7B.getContext("2d", {
				alpha: !0
			}));
		zH.font = this.a6q, bC.r1.textBaseline(zH, 1), bC.r1.textAlign(zH, 1), zH.clearRect(0, 0, a77, j), zH.fillStyle = bD.oR, zH.fillRect(0, 0, a77, j), zH.fillStyle = bD.o4, zH.fillText(qi, Math.floor(a77 / 2), Math.floor(j / 2))
	}, this.a7P = function() {
		var f8;
		return aw.hu ? aw.i : 0 === (f8 = a74.length) ? 0 : 1 === f8 ? a74[0].a7Q : a7R(a74[0].a7Q, a74[1].a7Q)
	}, this.a7S = function() {
		var f8 = a74.length;
		return aw.hu ? f8 ? a7R(aw.i, a74[0].a7Q) : aw.i : 0 === f8 ? 0 : 1 === f8 ? a74[0].a7Q : 2 === f8 ? a7R(a74[0].a7Q, a74[1].a7Q) : a7R(a7R(a74[0].a7Q, a74[1].a7Q), a74[2].a7Q)
	}, this.hL = function(fF, fH) {
		for (var nU, a7U, a7V = zD(), aB = a74.length - 1; 0 <= aB; aB--)
			if ((a7U = a7V - (aB + 1) * j) <= fH && fH < a7U + j) return 50 === a74[aB].id ? fF >= h.i - a77 - a75 - a74[aB].i && (fF >= h.i - a77 - a75 ? bA.gU.q0(a74[aB].player) : aH.nP(a74[aB].player, 800, !1, 0), !0) : fF >= h.i - a74[aB].i -
				a75 && (736 === a74[aB].id ? window.open("https://" + a74[aB].qi, "_blank") : a74[aB].a7L && (a74[aB].a7N && a74[aB].a7N.fR ? (a7U = a74[aB].a7N.eu, nU = bO.fG(a7U) - 10, a7U = bO.fI(a7U) - 10, aH.nO(nU, a7U, 19 + nU, 19 +
					a7U)) : a74[aB].a7N && a74[aB].a7N.fS ? aH.nQ(a74[aB].player, a74[aB].a7N.nR) : (aH.nP(a74[aB].player, 800, !1, 0), 0 <= a74[aB].l6 && (nU = a74[aB].l6, a74[aB].l6 = a74[aB].player, a74[aB].player = nU))), !0);
		return !1
	}, this.za = function(eX, qi, id, gg, a7J, a7K, l6, a7L, a7M, a7N) {
		a7G(eX, qi, id, gg, a7J, a7K, l6, a7L, a7M, a7N)
	}, this.a7W = function(r) {
		a7G(300, r, 252, 0, bD.o4, bD.o1, -1, !1)
	}, this.a5U = function(id) {
		for (var aB = a74.length - 1; 0 <= aB; aB--) a74[aB].id === id && (a74[aB].eW = 1)
	}, this.a1L = function(player, id) {
		0 === id ? (aQ.ef(player, 0), a7Z(423, 2), a7G(160, L(49, [ag.zb[player]]), 423, player, "rgb(10,220,10)", bD.o1, -1, !1)) : 1 === id ? (a7a(50, aD.f5), aQ.ef(player, 1), a7G(360, L(50, [ag.zb[player]]), 0, player, bD.ol, bD.o1, -1, !0),
			aH.nP(player, 2700, !1, 0)) : 2 === id ? (aQ.ef(player, 2), a7G(0, L(51), 0, player, "rgb(10,255,255)", bD.o1, -1, !0), aH.nP(player, 2700, !1, 0)) : 3 === id ? (aQ.ef(player, 2), a7G(0, L(52, [ag.zb[player]]), 0, player, bD.o4,
			bD.o1, -1, !0), aH.nP(player, 2700, !1, 0)) : 4 === id ? this.a7b(1, player, player) : 5 === id ? bC.gU.jq(aD.es) || (function(id, my) {
			var aB, a7l = 0,
				f8 = a74.length;
			for (aB = 0; aB < f8; aB++)
				if (a74[aB].id === id && my <= ++a7l) return a74.splice(aB, 1)
		}(1, 5), af.a7d(player) && a7G(180, L(53, [ag.zb[player]]), 1, player, a7H(255, 200, 180), bD.o1, -1, !0), bC.gU.a4b(player, 10) && (a7Z(573, 0), a7G(180, L(54, [ag.zb[player]]), 573, player, bD.ol, bD.o1, -1, !0))) : 18 === id ? a7G(
			255, L(55), 18, 0, bD.o4, bD.o1, -1, !1) : 21 === id ? a7G(220, L(56), id, 0, bD.o4, bD.o1, -1, !1) : 22 === id ? this.a7b(2, player, player) : 59 === id && a7G(0, L(57), id, 0, bD.p5, bD.o1, 0, !1)
	}, this.a2T = function(r) {
		a7G(200, L(58, [r]), 94, 0, bD.o4, bD.oh, -1, !1)
	}, this.a1X = function(a7e) {
		if (aD.es === a7e && !aD.kn && !aD.hH)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a7G(0, "Your Win Count is now " + __fx.wins.count, 3, a7e, bD.o4, bD.o1, -1, !0);
		ag.gw[a7e] && (aQ.ef(a7e, 2), aD.kT < 100 ? a7G(0, L(52, [ag.zb[a7e]]), 3, a7e, bD.o4, bD.o1, -1, !0) : a7G(0, L(59, [ag.zb[a7e]]), 3, a7e, bD.o4, bD.o1, -1, !0))
	}, this.a6j = function(em) {
		var qi, a7g, a7f = "(" + bO.fG(em >> 2) + ", " + bO.fI(em >> 2) + ")",
			a7L = !1,
			player = 0;
		ac.f3(em) ? ac.ez(em) ? a7f = L(60, [a7f]) : (player = ac.f0(em), aD.hH && !1 === __fx.hoveringTooltip.active && (aD.es = player), qi = L(61, [bC.zH.a4E(ag.a1o[player], bC.r1.sq(0, 10), 150)]) + "   ", qi = (qi += L(62, [bC.s0.a0P(ag.hA[
				player])]) + "   ") + L(63, [bC.s0.a0P(ag.gw[player])]) + "   ", aD.i2 && (a7g = bi.a1U[bi.kq[bi.f6[player]]], qi += L(64) + ": " + a7g + "   "), bC.gU.jq(player) && (qi += L(65) + ": " + aE.ke[aE.hr[player]] + "   "), a7f =
			qi = (qi += L(66, [player]) + "   ") + L(67, [a7f]), a7L = !0) : a7f = ac.fD(em) ? L(68, [a7f]) + "   #" + ac.eq(em) : L(69, [a7f]), a7Z(55, 0), a7G(220, a7f, 55, player, bD.o4, bD.o1, -1, a7L, void 0, void 0, !0)
	}, this.a6l = function(a7h) {
		var lO = bP.y,
			player = lO.mN[a7h] >> 3,
			qi = (bh.dp = !0, a7Z(55, 0), L(70, [ag.zb[player]]) + "   ");
		a7G(220, qi += L(62, [bC.s0.a0P(lO.a7i[a7h])]), 55, player, bD.o4, bD.o1, -1, !0)
	}, this.pj = function(pT, a7j, pk) {
		pT === aD.es ? a7G(175, " " + L(71, [ag.zb[a7j]]) + ": ", 1001, a7j, a7H(200, 255, 210), bD.o1, -1, !0, pk) : this.a7k(pT, pk)
	}, this.a7k = function(pT, pk) {
		a7Z(1e3, 0), a7G(175, ag.zb[pT] + ": ", 1e3, pT, bD.o4, "rgba(5,60,25,0.9)", -1, !0, pk)
	}, this.a1W = function() {
		var r;
		aD.a1D ? (r = L(72), aQ.a1V(L(73), 2, 1, 12), a7G(0, r, 40, 0, "rgb(10,220,10)", bD.o1, -1, !1)) : (r = L(74), aQ.a1V(L(75), 2, 0, 16), a7G(0, r, 41, 0, bD.o4, bD.o1, -1, !1))
	}, this.zO = function() {
		var gb = ag.zb,
			fB = aD.data;
		a7G(300, gb[0] + " [" + aD.a1R.zU(fB.elo[0]) + "] vs " + gb[1] + " [" + aD.a1R.zU(fB.elo[1]) + "]", 65, 0, bD.nv, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7m = function(r) {
		a7G(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7n = function(a7o) {
		a7G(0, L(a7o ? 76 : 77), 247, 0, bD.p4, bD.o1, -1, !1)
	}, this.zW = function(zT, zV, a7p) {
		var fB = aD.data,
			gb = ag.zb;
		a7G(0, gb[0] + ": " + aD.a1R.zU(fB.elo[0]) + " -> " + zT, 66, 0, bD.o4, a7p[0], -1, !1), a7G(0, gb[1] + ": " + aD.a1R.zU(fB.elo[1]) + " -> " + zV, 66, 1, bD.o4, a7p[1], -1, !1)
	}, this.q1 = function(player, id) {
		0 === id ? a7a(50, player) ? (a7G(128, L(78, [ag.zb[player]]), 52, player, a7H(180, 255, 180), bD.o1, -1, !0), af.qa(player, 2, 255)) : a7G(384, L(79, [ag.zb[player]]), 51, player, a7H(210, 210, 255), bD.o1, -1, !0) : a7a(51, player) ? (
			a7G(128, L(80, [ag.zb[player]]), 52, player, bD.o4, "rgba(60,120,10,0.9)", -1, !0), af.qa(player, 2, 255)) : (a7G(384, L(81, [ag.zb[player]]), 50, player, bD.o4, "rgba(90,90,90,0.9)", -1, !0), af.qa(player, 2, 96))
	}, this.q5 = function(a0w, target) {
		var color = a7H(210, 255, 210);
		1 < a0w.length ? a7G(230, L(82, [a0w.length, ag.zb[target]]), 66, target, color, bD.o1, -1, !0) : a7G(230, L(83, [ag.zb[a0w[0]], ag.zb[target]]), 66, a0w[0], color, bD.o1, target, !0)
	}, this.a7q = function(player, target) {
		a7G(230, L(84, [ag.zb[player], ag.zb[target]]), 66, player, bD.o4, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7r = function(id, gb) {
		a7Z(id, gb)
	}, this.a1G = function(id, player) {
		a7a(id, void 0 === player ? aD.f5 : player)
	}, this.a7s = function(id) {
		for (var aB = a74.length - 1; 0 <= aB; aB--)
			if (a74[aB].id === id) return a74[aB];
		return null
	}, this.pw = function(a69, a7t, player) {
		2 !== ag.a4W[aD.es] && a7G(200, 1 === a69 ? L(85, [ag.zb[player]]) : L(86, [bC.s0.a0P(a69), ag.zb[player]]), 30, player, "rgb(190,255,190)", bD.o1, -1, !0)
	}, this.a7v = function(a69, player) {
		2 !== ag.a4W[aD.es] && (a7Z(31, 0), a69 = " (" + bC.s0.a0P(a69) + ") 💸", a7G(150, a69 = bC.gU.jq(player) ? L(87) + a69 : L(88, [ag.zb[player]]) + a69, 31, player, bD.nv, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1F = function(bw) {
		for (var eg = bh.kQ(), aB = 2; 0 <= aB; aB--) 0 < a78.ve[aB] && (bw || a78.eg[aB] < eg - 220) && this.a82(aB)
	}, this.a82 = function(id) {
		var qi, f8 = a78.ve[id],
			player = a78.a0w[id];
		a78.ve[id] = 0, 1 === f8 ? (0 === id ? qi = L(96, [ag.zb[player], ag.zb[a78.a7D[0]]]) : 1 === id ? qi = L(97, [ag.zb[player]]) : 2 === id ? qi = L(98, [ag.zb[player]]) : 3 === id && (qi = L(99, [ag.zb[player]])), a7Z(7, 0), a7G(a78.nL[
			id], qi, 7, a78.a7D[id], bD.o4, bD.o1, -1, !0)) : (qi = L(0 === id ? 100 : 1 === id ? 101 : 102, [f8]), a7Z(7, 0), a7G(a78.nL[id], qi, 7, player, bD.o4, bD.o1, -1, !1))
	}, this.a7b = function(id, ha, l6) {
		var eg = bh.kQ(),
			f8 = a78.ve[id] + 1;
		a78.ve[id]++, a78.a0w[id] = ha, a78.a7D[id] = l6, 1 === f8 && (a78.eg[id] = eg), (1 === f8 && (aD.a1B < 32 || 2 === aD.a18) || 1 < f8 && (a78.eg[id] < eg - 140 || 2 === aD.a18)) && this.a82(id)
	}, this.eb = function() {
		b2.eb();
		for (var ji = (ji = a74.length - a79) <= 1 ? 1 : ji * ji, aB = a74.length - 1; 0 <= aB; aB--) 0 < a74[aB].eW && (a74[aB].eW -= ji, a74[aB].eW <= 0) && (bh.dp = !0, a74.splice(aB, 1));
		! function() {
			var gb, aB;
			if (128 !== a7A && !(++a7A < 128))
				for (gb = 5, aB = al.kz - 1; 0 <= aB; aB--) 1 === ag.a4W[al.l4[aB]] && 0 < gb-- && a7G(240, L(99, [ag.zb[al.l4[aB]]]), 1, al.l4[aB], bD.nv, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1F(!1)
	}, this.vf = function() {
		for (var yF, fH = zD(), aB = a74.length - 1; 0 <= aB; aB--) yF = fH - (aB + 1) * j, 50 === a74[aB].id ? (vg.drawImage(a74[aB].canvas, h.i - a74[aB].i - a77 - a75, yF), vg.drawImage(a7B, h.i - a77 - a75, yF)) : vg.drawImage(a74[aB].canvas,
			h.i - a74[aB].i - a75, yF)
	}, this.a84 = function(id, hr) {
		var a7f, a85 = bD.oE;
		0 === id ? a7f = L(103) : 1 === id ? (a7f = L(104), a85 = bD.p0) : 2 === id ? a7f = L(105) : 3 === id ? a7f = L(106) : (a7f = bC.s0.a0P(hr), a85 = 5 === id ? bD.p0 : bD.o1), a7Z(74, 0), a7G(0, a7f, 74, 0, bD.o4, a85, -1, !1, void 0,
			void 0, !0)
	}
}

function cH() {
	var a87, a88, vh = "",
		y0 = 0,
		y1 = 0,
		a86 = -1,
		eA = ["Team", "Zombie", "BR", "1v1"];

	function a89() {
		for (var eX = new Date, a8A = eX.getUTCMinutes(), eX = eX.getUTCSeconds(), a8C = [], a8D = 0, aB = 0; aB < 6; aB++) a8C.push(a8D), a8C.push(a8D + 2), a8C.push(a8D + 5), a8C.push(a8D + 7), a8D += 10;
		for (var f8 = a8C.length, aB = 1; aB < f8 && !(a8A < a8C[aB]); aB++);
		aB %= f8;
		eX = (a8C[0] = 60) * (a8C[aB] - a8A) - eX;
		return eX !== a86 && (vh = eA[aB % 4] + " " + a88 + ": " + a8F(Math.floor(eX / 60)) + ":" + a8F(eX % 60), a86 = eX, y0 = aQ.measureText(vh, a87), y0 += Math.floor(.4 * y1), 1)
	}

	function a8F(a8G) {
		return a8G < 10 ? "0" + a8G : String(a8G)
	}
	this.dh = function() {
		a88 = L(107)
	}, this.resize = function() {
		y0 = Math.floor((a0.a1.iH() ? .53 : .36) * h.iI), y1 = Math.floor(.065 * y0), a87 = bC.r1.sq(1, Math.floor(.9 * y1)), a86 += 1e3, a89()
	}, this.eb = function() {
		a89() && (bh.dp = !0)
	}, this.vf = function(fH) {
		vg.lineWidth = 1 + Math.floor(y1 / 15), vg.translate(h.i - y1, fH + y0), vg.rotate(-Math.PI / 2), vg.fillStyle = bD.o4, vg.fillRect(0, 0, y0, y1), vg.strokeStyle = bD.nv, vg.strokeRect(0, 0, y0, y1 + 10), vg.fillStyle = bD.nv, vg.font =
			a87, bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 1), vg.fillText(vh, Math.floor(y0 / 2), Math.floor(.59 * y1)), vg.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cI() {
	var a68, a8H, a8I, y1, a8J, a8K = 0,
		a8L = 0;

	function a8N(aB) {
		var a8P = !0,
			a0E = bD.o4,
			i = (1 === a68[aB].id ? a68[aB].zH.fillStyle = bD.oy : a68[aB].jc === aD.f5 ? a68[aB].zH.fillStyle = bD.oF : (ac.a8Q(a68[aB].jc), a68[aB].zH.fillStyle = bC.color.ny(bQ.fh[0], bQ.fh[1], bQ.fh[2], .87), 400 < bC.r9.a3e(bQ.fh, 0, 2) && (
				a8P = !1, a0E = bD.nv)), a68[aB].canvas.width),
			tQ = (a68[aB].zH.clearRect(0, 0, i, y1), a68[aB].zH.fillRect(0, 0, i, y1), a68[aB].zH.fillStyle = a0E, ! function(zH, i, y1) {
				zH.fillRect(0, 0, i, 1), zH.fillRect(0, y1 - 1, i, 1), zH.fillRect(0, 0, 1, y1), zH.fillRect(i - 1, 0, 1, y1)
			}(a68[aB].zH, i, y1), a8H + 2 * y1 < i && (a68[aB].zH.fillRect(i - a8H - y1, 0, 1, y1), a68[aB].zH.fillText(ag.zb[a68[aB].jc], Math.floor((i - a8H) / 2), Math.floor(.57 * y1))), 0 !== a68[aB].id ? 0 : y1);
		a68[aB].zH.fillText(bC.s0.a0P(a68[aB].hr), Math.floor(i - a8H / 2 - tQ), Math.floor(.57 * y1)),
			function(aB, i, tQ, a8P) {
				a68[aB].zH.fillStyle = a8P ? bD.o6 : bD.o2;
				a8P = Math.floor(a8H * a68[aB].hr / a68[aB].a8W);
				a68[aB].zH.fillRect(Math.floor(i - a8H - tQ), y1 - a8J, a8P, a8J)
			}(aB, i, tQ, a8P), 0 === a68[aB].id ? (a8T(aB, i, a8P, a0E), function(aB, i, a8P) {
				a68[aB].zH.strokeStyle = a8P ? bD.oM : bD.oW, a68[aB].zH.fillRect(y1, 0, 1, y1);
				a8P = i - y1;
				a68[aB].zH.beginPath(), a68[aB].zH.moveTo(Math.floor(.3 * y1 + a8P), Math.floor(y1 / 2)), a68[aB].zH.lineTo(Math.floor(y1 - .3 * y1 + 0 + a8P), Math.floor(y1 / 2)), a68[aB].zH.stroke(), a68[aB].zH.beginPath(), a68[aB].zH.moveTo(
					Math.floor(y1 / 2 + a8P), Math.floor(.3 * y1)), a68[aB].zH.lineTo(Math.floor(y1 / 2 + a8P), Math.floor(y1 - .3 * y1 + 0)), a68[aB].zH.stroke()
			}(aB, i, a8P)) : a8T(aB, 2 * y1, a8P, a0E)
	}

	function a8T(aB, i, a8P, a0E) {
		a68[aB].zH.strokeStyle = a68[aB].a8X ? bD.oD : a8P ? bD.oc : bD.od, a68[aB].zH.fillStyle = a0E, a68[aB].zH.fillRect(i - y1, 0, 1, y1), a68[aB].zH.lineWidth = Math.max(Math.floor(y1 / 12), 3), a68[aB].zH.lineCap = "round";
		a8P = .35;
		i = y1 + 1, a68[aB].zH.beginPath(), a68[aB].zH.moveTo(Math.floor(i - a8P * y1 + 0), Math.floor(a8P * y1)), a68[aB].zH.lineTo(Math.floor(i - y1 + a8P * y1), Math.floor(y1 - a8P * y1 + 0)), a68[aB].zH.stroke(), a68[aB].zH.beginPath(), a68[aB]
			.zH.moveTo(Math.floor(i - y1 + a8P * y1), Math.floor(a8P * y1)), a68[aB].zH.lineTo(Math.floor(i - a8P * y1 + 0), Math.floor(y1 - a8P * y1 + 0)), a68[aB].zH.stroke()
	}

	function a8j(g, a8h) {
		for (var hr, aB = a8h - 1; 0 <= aB; aB--) hr = ad.gL(aD.es, aB), g[aB].hr !== hr && (g[aB].hr = hr, g[aB].a8W = Math.max(hr, g[aB].a8W), g[aB].a8O = !0)
	}

	function a8n(g, a8l) {
		for (var td = aD.es << 3, a7i = bP.y.a7i, mK = bP.y.mK, a8p = bP.y.a8p, aB = a8l - 1; 0 <= aB; aB--) {
			var a8q = a8p[td + aB],
				hr = a7i[a8q];
			g[aB].hr !== hr ? (g[aB].hr = hr, g[aB].a8W = Math.max(hr, g[aB].a8W), g[aB].a8O = !0) : g[aB].a8X || mK[a8q] % 64 != 5 || (g[aB].a8X = !0, g[aB].a8O = !0)
		}
	}

	function a8M(a6B) {
		a6B.canvas = document.createElement("canvas"), bU.xa.font = a8I;
		var i = a8H;
		a6B.jc < aD.f5 && 0 === a6B.id && (i += Math.floor(bU.xa.measureText(ag.zb[a6B.jc] + "000").width)), i += y1, 0 === a6B.id && (i += y1), a6B.canvas.width = i, a6B.canvas.height = y1, a6B.zH = a6B.canvas.getContext("2d", {
			alpha: !0
		}), a6B.zH.font = a8I, bC.r1.textBaseline(a6B.zH, 1), bC.r1.textAlign(a6B.zH, 1)
	}

	function a8d(aB) {
		return aU.a8r() ? h.i - a68[aB].canvas.width - be.gap : aU.fF
	}

	function a8e(aB) {
		return Math.floor(2 * be.gap + (aU.a8r() ? aW.j + be.gap : 0) + aU.j + aB * (1.3 * y1))
	}
	this.dh = function() {
		a8K = a8L = 0, a68 = [], this.resize()
	}, this.resize = function() {
		a8I = aN.a6q, y1 = aN.fontSize + 5, y1 = Math.floor(1.25 * y1), a0.a1.iH() && (y1 = Math.floor(1.25 * y1)), a8J = Math.floor(.15 * y1), bU.xa.font = a8I, a8H = Math.floor(bU.xa.measureText("02 000 000 0000").width);
		for (var aB = a68.length - 1; 0 <= aB; aB--) a8M(a68[aB]), a8N(aB)
	}, this.mp = function() {
		for (var aB = a68.length - 1; 0 <= aB; aB--) a68[aB].a8O && (a68[aB].a8O = !1, a8N(aB))
	}, this.hL = function(li, lj) {
		if (2 !== aD.a18 && 0 !== ag.n3[aD.es] && !aD.hH && !bC.gU.jq(aD.es))
			for (var a8Y, a8Z, a8a, a8b = a0.a1.iH() ? y1 : 0, a8c = a0.a1.iH() ? Math.floor(.15 * y1) : 0, aB = a68.length - 1; 0 <= aB; aB--)
				if (a8Y = a8d(aB), a8Z = a8e(aB), a8a = a68[aB].canvas.width, a8Z - a8c <= lj && lj <= a8Z + y1 + a8c) {
					if (a8Y - a8b <= li && li <= a8Y + y1 + a8b) return a68[aB].a8X || (a68[aB].a8O = !0, a68[aB].a8X = !0, 0 === a68[aB].id ? bA.hY.ph(a68[aB].jc) : bA.hY.pg(a68[aB].jc)), !0;
					if (0 === a68[aB].id && a8Y + a8a - y1 - a8b <= li && li <= a8Y + a8a + a8b) return bX.a6Z(3), bA.hY.hf(aR.hc(), a68[aB].jc), !0
				} return !1
	}, this.eb = function() {
		var a3m, a3n, g, a8h;
		0 === ag.n3[aD.es] || bC.gU.jq(aD.es) && !aD.hH || (a3m = a68.slice(0, a8K), a3n = a68.slice(a8K, a8K + a8L), g = a3m, a8h = ad.gF(aD.es), function(g, a8h) {
			if (a8K !== a8h) return 1;
			for (var aB = a8h - 1; 0 <= aB; aB--)
				if (g[aB].jc !== ad.gK(aD.es, aB)) return 1;
			return
		}(g, a8h) ? a8j(g = function(g, a8h) {
			var aB, jc, fS, hr, a7I = [];
			loop: for (aB = 0; aB < a8h; aB++) {
				for (jc = ad.gK(aD.es, aB), fS = 0; fS < g.length; fS++)
					if (g[fS].jc === jc) {
						a7I.push(g.splice(fS, 1)[0]);
						continue loop
					} hr = ad.gL(aD.es, aB), a8M(hr = {
					jc: jc,
					hr: hr,
					a8W: hr,
					id: 0,
					a8O: !0,
					a8X: !1,
					canvas: null,
					zH: null
				}), a7I.push(hr)
			}
			return a7I
		}(g, a8h), a8h) : a8j(g, a8h), a3m = g, a3n = function(g) {
			var a8l = bP.y.kX[aD.es];
			return function(g, a8l) {
				if (a8L !== a8l) return 1;
				for (var td = aD.es << 3, mM = bP.y.mM, a8p = bP.y.a8p, aB = a8l - 1; 0 <= aB; aB--) {
					var a8q = a8p[td + aB];
					if (g[aB].jc !== mM[a8q]) return 1
				}
				return
			}(g, a8l) ? a8n(g = function(g, a8l) {
				var aB, jc, fS, a7I = [],
					td = aD.es << 3,
					mM = bP.y.mM,
					a7i = bP.y.a7i,
					a8p = bP.y.a8p;
				loop: for (aB = 0; aB < a8l; aB++) {
					var a8q = a8p[td + aB];
					for (jc = mM[a8q], fS = 0; fS < g.length; fS++)
						if (g[fS].jc === jc) {
							a7I.push(g.splice(fS, 1)[0]);
							continue loop
						} a8q = a7i[a8q], a8M(a8q = {
						jc: jc,
						hr: a8q,
						a8W: a8q,
						id: 1,
						a8O: !0,
						a8X: !1,
						canvas: null,
						zH: null
					}), a7I.push(a8q)
				}
				return a7I
			}(g, a8l), a8l) : a8n(g, a8l), g
		}(a3n), a8K = a3m.length, a8L = a3n.length, a68 = a3m.concat(a3n))
	}, this.vf = function() {
		if (0 !== ag.n3[aD.es] && (!bC.gU.jq(aD.es) || aD.hH))
			for (var aB = a68.length - 1; 0 <= aB; aB--) vg.drawImage(a68[aB].canvas, a8d(aB), a8e(aB))
	}
}

function cJ() {
	var a74, kY, a8s, a8t, j, a6q, fontSize, a8u, a8v, a8w, a8x, canvas, zH, nG, a8y;

	function vw(aB) {
		return L(0 === aB ? 108 : 1 === aB ? 109 : 2 === aB ? 110 : 111)
	}

	function a95() {
		aD.i2 ? a96 + 4 * be.gap + j + bj.a97() > aR.fH ? vg.drawImage(canvas, 2 * be.gap + bj.a97(), a96 + 2 * be.gap) : vg.drawImage(canvas, be.gap, a96 + 3 * be.gap + bj.a97()) : vg.drawImage(canvas, be.gap, a96 + 2 * be.gap)
	}

	function a8z() {
		canvas.width = a74[0].width + a8w, canvas.height = j + a8w, (zH = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a74[0].width + a8w, j + a8w), zH.translate(Math.floor(a8w / 2), Math.floor(a8w / 2)), zH.lineWidth = a8w, zH.fillStyle = 1 === a74[0].a94 ? bD.o9 : bD.o1, a98(), zH.fill(), zH.strokeStyle = 1 === a74[0].a94 ? bD.nv :
			bD.o4, a98(), zH.stroke(), bC.r1.textAlign(zH, 1), bC.r1.textBaseline(zH, 1), zH.fillStyle = 1 === a74[0].a94 ? bD.nv : bD.o4, zH.font = a6q[0], zH.fillText(vw(a74[0].a93), Math.floor(a74[0].width / 2), Math.floor(.72 * a8u[0] * j)), zH
			.font = a6q[1], zH.fillText(a74[0].qi, Math.floor(a74[0].width / 2), Math.floor((a8u[0] + .48 * a8u[1]) * j))
	}

	function a98() {
		zH.beginPath(), zH.moveTo(a8x, 0), zH.lineTo(a74[0].width - a8x, 0), zH.lineTo(a74[0].width, a8x), zH.lineTo(a74[0].width, j - a8x), zH.lineTo(a74[0].width - a8x, j), zH.lineTo(a8x, j), zH.lineTo(0, j - a8x), zH.lineTo(0, a8x), zH.closePath()
	}
	this.dh = function() {
		kY = 4, a8s = a8t = nG = 0, a74 = [], a6q = new Array(2), fontSize = new Array(2), (a8u = new Array(2))[0] = .3, a8u[1] = .7, a8v = new Array(4), canvas = document.createElement("canvas"), a8y = bh.eW + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iH() ? .062 : .047) * h.iI), fontSize[0] = Math.floor(.85 * a8u[0] * j), fontSize[1] = Math.floor(.85 * a8u[1] * j), a6q[0] = bC.r1.sq(1, fontSize[0]), a6q[1] = bC.r1.sq(1, fontSize[1]), aB = a8v.length -
			1; 0 <= aB; aB--) a8v[aB] = this.measureText(vw(aB) + "000", a6q[0]);
		if (a8w = Math.floor(1 + .05 * j), a8x = Math.floor(.2 * j), 0 < a74.length) {
			for (aB = a74.length - 1; 0 <= aB; aB--) i = this.measureText(a74[aB].qi + "00", a6q[1]), a74[aB].width = i < a8v[aB] ? a8v[aB] : i;
			a8z()
		}
	}, this.eb = function() {
		0 !== kY && (4 === kY ? bh.eW > a8y && (kY = 0, 1 === aD.a18) && aQ.a1V(bU.xU.xV[bU.eo].name, 3, 1, 9) : (1 === kY ? (0 === a8s && (a8z(), a8s = 1e-4), 1 <= (a8s += .002 * (bh.eW - nG)) && (a8t = 0, kY = 2, a8s = 1), bh.dp = !0) : 2 ===
			kY ? ((a8t += (bh.eW - nG) / 1e3) > a74[0].nL || 1 < a8t && 1 < a74.length) && (kY = 3) : 3 === kY && ((a8s -= .002 * (bh.eW - nG)) <= 0 && (a8s = 0, a74.shift(), kY = 0 < a74.length ? 1 : 0), bh.dp = !0), nG = bh.eW))
	}, this.measureText = function(qi, a6q) {
		return vg.font = a6q, Math.floor(vg.measureText(qi).width)
	}, this.ef = function(a92, aB) {
		this.a1V(ag.zb[a92], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1V = function(qi, a93, a94, nL) {
		var i;
		qi.length && (i = (i = this.measureText(qi + "00", a6q[1])) < a8v[a93] ? a8v[a93] : i, a74.push({
			qi: qi,
			width: i,
			a93: a93,
			a94: a94,
			nL: nL
		}), 0 === kY) && (a8s = 0, kY = 1, nG = bh.eW)
	}, this.vf = function() {
		0 !== kY && 0 !== a8s && (a8s < 1 ? (vg.globalAlpha = a8s, a95(), vg.globalAlpha = 1) : a95())
	}
}

function cs() {
	var j, canvas, zH, a99, a9A, a9B, a9C, a8O, a9D, a9E, a9F, a9G, a7o = !1,
		a40 = (this.hu = !1, this.i = 0, new Array(2)),
		a9H = 0;

	function mq() {
		var i = aw.i,
			lO = (a8O = !1, zG(zH, i, j), Math.floor(i / 2));
		1 === a99 ? (zH.fillStyle = bD.oO, zH.fillRect(lO, 0, lO, j)) : -1 === a99 && (zH.fillStyle = bD.oe, zH.fillRect(0, 0, lO, j)), zI(zH, i, j, 2);
		var lO = (lO = Math.floor(.25 * j)) < 2 ? 2 : lO,
			a7y = (zH.fillStyle = bD.oA, Math.floor((j - 4) * a9A[1] / a9B[1]));
		0 < a7y && zH.fillRect(2, j - 2 - a7y, lO, a7y), 0 < (a7y = Math.floor((j - 4) * a9A[0] / a9B[0])) && zH.fillRect(i - 2 - lO, j - 2 - a7y, lO, a7y);
		lO = (lO = Math.floor(j / 8)) < 2 ? 2 : lO, zK(zH, Math.floor(.4 * j), 0, j, lO, .5, !1), zK(zH, Math.floor(i - 1.4 * j), 0, j, lO, .5, !0), a7y = 1.1 * j / a40[0].width;
		zH.imageSmoothingEnabled = !0, zH.setTransform(a7y, 0, 0, a7y, (i - a7y * a40[0].width) / 2, -.05 * j), zH.drawImage(a40[+a7o], 0, 0), zH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9M() {
		a9G = -1, a7o = ah.a9N(), aN.a5U(257), aN.a7n(a7o), aw.hu = !0, a8O = !0, a9D = 360;
		for (var fa, eX = 0, aB = al.kz - 1; 0 <= aB; aB--) bC.gU.jq(al.l4[aB]) || (eX += ag.gw[al.l4[aB]]);
		a7o ? a9B[0] = Math.max(bN.fZ(3 * eX, 4), 1) : aD.i2 ? (fa = 9 === aD.kl && 8 === bi.kq[bj.l2()] ? 80 : (fa = bN.fZ(100 * bj.l0(), aD.kD), bN.iG(200 - 2 * fa, 40, 100)), fa = bN.fZ(fa * eX, 100), a9B[0] = Math.max(fa, 1)) : 8 === aD.kl ? a9B[
			0] = Math.max(bN.fZ(3 * eX, 4), 1) : a9B[0] = Math.max(bN.fZ(3 * eX, 5), 1), a9B[1] = Math.max(eX - a9B[0], 1)
	}

	function a9I() {
		a9F = bh.kQ(), a8O = !0, a9D = a99 = 0, a9C = [], aw.hu = !1, aN.a1G(247), a9A[0] = a9A[1] = 0, aN.a5U(673)
	}

	function zD() {
		return aR.a7T(aN.a7P()) ? __fx.settings.keybindButtons ? aR.fH - 2 * (j + be.gap) : aR.fH - j - be.gap : bE.a7T(aN.a7S()) ? bE.zD() - j - be.gap : h.j - j - bm.a6F() * be.gap
	}
	this.di = function() {
		for (var aB = 0; aB < 2; aB++) a40[aB] = bC.canvas.zs(ab.get(3), 8 - aB, bD.pI), a40[aB] = bC.canvas.a42(a40[aB])
	}, this.dh = function() {
		a9F = -1e4, a9E = a9H = 0, a9G = -1, this.hu = !1, a8O = a7o = !1, a9A = [a99 = a9D = 0, 0], a9B = [1, 1], a9C = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, zH = canvas.getContext("2d", {
			alpha: !0
		}), mq()
	}, this.mp = function() {
		a8O && mq()
	}, this.hL = function(fF, fH) {
		return !!this.hu && !(fF < h.i - this.i - be.gap || fH < zD() || (aD.hH || this.hv(aD.es) && (aM.hI && aM.a3H(), bA.hY.hw(fF > h.i - be.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eb = function() {
		0 < a9E ? 0 === --a9E && a9I() : this.hu ? 180 == --a9D && 3 * a9A[0] < a9B[0] ? a9I() : a9A[0] >= a9B[0] ? a7o ? bT.a0k.a13() : bT.a0k.a17() : a9A[1] >= a9B[1] ? a9E = 4 : a9D <= 0 && a9I() : ! function() {
			var a9P = bh.kQ();
			if (a9P % 40 == 14) {
				if (a9H) return !(a9P < a9H) && !(a9P < a9F + 535) && (a9H = a9P + 1071, bC.gU.a4Z()) ? (a9M(), 1) : 0;
				(1 === al.kz || (aD.i2 ? bj.l0() : ag.gw[m4[0]]) >= bN.fZ(96 * aD.kD, 100)) && (a9H = a9P + 535)
			}
			return
		}() && 0 <= a9G && (aN.za(250, L(112, [ag.zb[a9G]]), 673, a9G, bD.o4, bD.o1, -1, !0), a9M())
	}, this.a19 = function() {
		this.hu && a9A[0] < a9B[0] && a9I()
	}, this.qb = function(player, a9Q) {
		var a9R = L(a9Q ? 113 : 114, [ag.zb[player]]),
			a9R = (aN.za(450, a9R, 257, player, a9Q ? bD.oM : bD.ob, bD.o1, -1, !0), a9C.push(player), a8O = !0, aD.kn ? Math.max(a9B[0], a9B[1]) : ag.gw[player]),
			a9R = Math.max(a9R, 1);
		a9Q ? a9A[0] += a9R : a9A[1] += a9R, player === aD.es && (a99 = a9Q ? 1 : -1)
	}, this.vf = function() {
		var fH;
		this.hu && (fH = zD(), vg.drawImage(canvas, h.i - this.i - be.gap, fH))
	}, this.hx = function(player) {
		if (0 !== a9D) return !1;
		if (!bC.gU.hJ(1)) return !1;
		if (!bC.gU.hK(player)) return !1;
		if (10 <= kE[player] && !bC.gU.a4s(player, 9)) return !1;
		if (!aD.kn) {
			player = bh.kQ();
			if (player < a9F + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hv = function(gg) {
		if (!bC.gU.hJ(1)) return !1;
		if (!bC.gU.hK(gg)) return !1;
		if (!this.hu) return !1;
		for (var aB = a9C.length - 1; 0 <= aB; aB--)
			if (a9C[aB] === gg) return !1;
		return !0
	}, this.ht = function(player) {
		a9G = player
	}
}

function cK() {
	var i, fF, a9T, canvas, zH, hu, ik, a5L, a6q, a8O, a9U = 11 / 12;

	function a9W() {
		var a8V = Math.floor(ik * (i - 2 * a9T)),
			a9Z = 1 + Math.floor(.0625 * aR.j),
			a9a = 1 + Math.floor(.3 * aR.j),
			a9b = Math.floor(.55 * aR.j);
		zH.clearRect(0, 0, i, aR.j), zH.fillStyle = bD.o0, zH.fillRect(0, 0, a9T, aR.j), zH.fillRect(a9T + a8V, 0, i - a9T - a8V, aR.j), zH.fillStyle = ik < 1 / 3 ? "rgba(" + Math.floor(3 * ik * 130) + ",130,0,0.85)" : ik < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ik - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ik - 2 / 3) * 130) + ",0.85)", zH.fillRect(a9T, 0, a8V, aR.j), zH.fillStyle = bD.o4, zH.fillRect(0, 0, i, 1), zH.fillRect(0, aR.j - 1, i, 1), zH
			.fillRect(0, 0, 1, aR.j), zH.fillRect(a9T, 0, 1, aR.j), zH.fillRect(a9T + a8V, 0, 1, aR.j), zH.fillRect(i - a9T, 0, 1, aR.j), zH.fillRect(i - 1, 0, 1, aR.j), zH.fillRect(Math.floor(.25 * aR.j) + a9a, Math.floor((aR.j - a9Z) / 2), aR.j -
				2 * a9a, a9Z), zH.fillRect(Math.floor(i - 1.25 * aR.j) + a9a, Math.floor((aR.j - a9Z) / 2), aR.j - 2 * a9a - a9a % 2, a9Z), zH.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9Z) / 2), a9a, a9Z, aR.j - 2 * a9a - a9a % 2),
			a5L = bC.gU.ij(aD.es, aR.hc()), zH.fillText(bC.s0.a0P(a5L) + " (" + bC.s0.a5E(100 * ik, +(ik < .1)) + ")", Math.floor(.5 * i), a9b)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ik = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a3D(arg1);

	function a9g(a3Z) {
		return !(1 < a3Z && 1 === ik || (1 < a3Z && a3Z * ik - ik < 1 / 1024 ? a3Z = (ik + 1 / 1024) / ik : a3Z < 1 && ik - a3Z * ik < 1 / 1024 && (a3Z = (ik - 1 / 1024) / ik), ik = bN.iG(ik * a3Z, 1 / 1024, 1), a9W(), 0))
	}

	function a9h(li) {
		return ik !== (ik = bN.iG((li - fF - a9T) / (i - 2 * a9T), 1 / 1024, 1)) && (a9W(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9W(), bh.dp = !0
	}, this.fH = 0, this.hM = !1, this.dh = function() {
		hu = !aD.hW && !aD.hH, a8O = !1, ik = (bl.eT.data[182].value + 1) / 1024, a5L = 0, this.hM = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iH() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iI), i = h.i - 4 * be.gap - this.j) : (i = Math.floor((a0.a1.iH() ? .65 : .389) * h.iI), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9T = Math.floor(3 * this.j / 2), a6q =
			bC.r1.sq(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vg), canvas.height = this.j, (zH = canvas.getContext("2d", {
				alpha: !0
			})).font = a6q, bC.r1.textBaseline(zH, 1), bC.r1.textAlign(zH, 1), this.a9V(), a9W()
	}, this.a9V = function() {
		fF = a0.a1.iH() && h.i < .8 * h.j ? this.j + 3 * be.gap : Math.floor((h.i - i) / 2), this.fH = h.j - this.j - bm.a6F() * be.gap
	}, this.mp = function() {
		a8O && (a8O = !1, a9W())
	}, this.hu = function() {
		return !(!hu || aM.hI && fF < Math.floor(be.gap + 5.5 * this.j))
	}, this.a7T = function(a9c) {
		return !!this.hu() && fF + i > h.i - a9c - be.gap
	}, this.a5S = function() {
		hu = !aD.hH
	}, this.a9I = function() {
		hu = !1
	}, this.hc = function() {
		return bN.iG(Math.floor(1024 * ik + .5) - 1, 0, 1023)
	}, this.a3A = function(li, lj) {
		return this.hu() && fF < li && li < fF + i && lj > this.fH
	}, this.hL = function(li, lj) {
		if (!this.hu()) return !1;
		if (!(__fx.settings.keybindButtons && lj > this.fH - Math.floor(be.gap / 4) - this.j && lj < this.fH - Math.floor(be.gap / 4) && __fx.mobileKeybinds.click(li - fF))) {
			if (!aR.a3A(li, lj)) return !1;
			aS.nZ = !1, ! function(sb, li, lj) {
				if (function(li, lj) {
						return fF < li && li < fF + a9T && lj > aR.fH
					}(li, lj)) return a9g(a9U);
				if (function(li, lj) {
						return fF + i - a9T < li && li < fF + i && lj > aR.fH
					}(li, lj)) return a9g(1 / a9U);
				return sb.hM = !0, a9h(li)
			}(this, li, lj) || (bh.dp = !0)
		}
		return !0
	}, this.a3D = function(ng) {
		0 !== aD.a18 && this.hu() && a9g(ng) && (bh.dp = !0)
	}, this.a2j = function(deltaY) {
		var ng;
		return !(0 === deltaY || !this.hu()) && a9g(ng = 0 < deltaY ? (ng = 400 / (400 + deltaY)) < a9U ? a9U : ng : 1 / a9U < (ng = (400 - deltaY) / 400) ? 1 / a9U : ng)
	}, this.a2g = function(li) {
		return !!this.hM && a9h(li)
	}, this.a36 = function() {
		this.hM = !1
	}, this.eb = function() {
		this.hu() && a5L !== bC.gU.ij(aD.es, this.hc()) && (a8O = !0)
	}, this.vf = function() {
		this.hu() && (vg.drawImage(canvas, fF, this.fH), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vg, fF, this.fH)
	}
}

function d4() {
	var canvas, zH, a9i, font, a9j = 0,
		a9k = !1,
		a9l = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9m = 5;

	function a9t() {
		if (a9k) {
			var aB, f8 = a9l.length,
				a9b = Math.floor(.5 * a9i.j),
				j = f8 * a9b,
				fF = Math.floor(Math.floor(a9i.fF) + .3 * a9i.i - .5),
				fH = Math.floor(Math.floor(a9i.fH) - j),
				i = Math.floor(.4 * a9i.i + 2.5);
			for (vg.fillStyle = bD.o0, vg.fillRect(fF, fH, i, j), vg.fillStyle = bD.oT, vg.fillRect(fF, fH + a9m * a9b, i, a9b), vg.fillStyle = bD.o4, vg.fillRect(fF, fH, 2, j), vg.fillRect(fF, fH, i, 2), vg.fillRect(fF + i - 2, fH, 2, j), aB =
				1; aB < f8; aB++) vg.fillRect(fF, fH + aB * a9b, i, 2);
			for (vg.fillStyle = bD.o4, bC.r1.textAlign(vg, 1), bC.r1.textBaseline(vg, 1), vg.font = bC.r1.sq(0, .6 * a9b), fF += .5 * i, aB = 0; aB < f8; aB++) vg.fillText(aA1(aB), fF, fH + (aB + .6) * a9b)
		}
		vg.drawImage(canvas, Math.floor(a9i.fF), Math.floor(a9i.fH))
	}

	function mq(sb) {
		var fF, nU, nV, a9b;
		zH.clearRect(0, 0, Math.floor(a9i.i), Math.floor(a9i.j)), zH.fillStyle = bD.o0, zH.fillRect(0, 0, Math.floor(a9i.i), Math.floor(a9i.j)), aD.nX && (zH.fillStyle = bD.oT, zH.fillRect(0, 0, Math.floor(.3 * a9i.i), Math.floor(a9i.j))), zH
			.fillStyle = bD.o4, zH.fillText("Hide UI", .15 * a9i.i, .5 * a9i.j), zH.fillRect(Math.floor(.3 * a9i.i - .5), 0, 2, Math.floor(a9i.j)), fF = .5 * a9i.i, zH.fillText("Replay Speed", fF, .31 * a9i.j), zH.fillText(aA1(a9m), fF, .69 * a9i.j),
			zH.fillRect(Math.floor(.7 * a9i.i - .5), 0, 2, Math.floor(a9i.j)), sb.a5z ? (fF = Math.floor(.02 * a9i.i), sb = Math.floor(.025 * a9i.i), nU = Math.floor(.85 * a9i.i - fF - .5 * sb), nV = Math.floor(.25 * a9i.j), a9b = Math.floor(a9i.j) -
				2 * nV, zH.fillRect(nU, nV, fF, a9b), zH.fillRect(nU + fF + sb, nV, fF, a9b)) : function() {
				var i = Math.floor(.46 * a9i.j),
					j = Math.floor(.23 * a9i.j),
					fF = Math.floor(.85 * a9i.i - .5 * i + i / 12),
					fH = Math.floor(.5 * a9i.j - j);
				zH.beginPath(), zH.moveTo(fF, fH), zH.lineTo(fF + i, fH + j), zH.lineTo(fF, fH + (j << 1)), zH.fill()
			}(), zH.fillRect(0, 0, Math.floor(a9i.i), 2), zH.fillRect(0, 0, 2, Math.floor(a9i.j)), zH.fillRect(0, Math.floor(a9i.j) - 2, Math.floor(a9i.i), 2), zH.fillRect(Math.floor(a9i.i - 2), 0, 2, Math.floor(a9i.j))
	}

	function aA1(aB) {
		return 5 === aB ? "Normal" : "" + a9l[aB]
	}
	this.a5z = !1, this.dh = function() {
		aD.hH && (a9m = 5, this.a5z = !1, a9k = !1, a9i = new rc([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9n = function() {
		return a9l[a9m]
	}, this.zD = function() {
		return a9i.fH
	}, this.a7T = function(a9c) {
		return !!aD.hH && a9i.fF + a9i.i > h.i - a9c - be.gap
	}, this.resize = function() {
		aD.hH && (a9i.resize(), a9i.fH -= (bm.a6F() - 1) * be.gap, font = bC.r1.sq(0, .3 * a9i.j), (canvas = document.createElement("canvas")).width = Math.floor(a9i.i), canvas.height = Math.floor(a9i.j), (zH = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bC.r1.textAlign(zH, 1), bC.r1.textBaseline(zH, 1), mq(this))
	}, this.a3G = function(a9o) {
		0 === aD.a18 || t.hu() || a9o !== aD.nX && (aD.nX = a9o, bj.resize(), bh.dp = !0, aD.hH) && (a9j = bh.eW + 2e3, mq(this))
	}, this.hL = function(fF, fH) {
		if (!aD.hH) return !1;
		if (fF < a9i.fF || fH < a9i.fH || fF > a9i.fF + a9i.i) return a9k && function(sb, fF, fH) {
			var f8 = a9l.length,
				a9b = Math.floor(.5 * a9i.j),
				j = f8 * a9b,
				nU = Math.floor(Math.floor(a9i.fF) + .3 * a9i.i - .5),
				j = Math.floor(Math.floor(a9i.fH) - j),
				i = Math.floor(.4 * a9i.i + 2.5);
			return a9k = !1, bh.dp = !0, fF < nU || nU + i < fF || fH < j || (a9m = a9s(0, Math.floor((fH - j) / a9b), f8 - 1), mq(sb)), !0
		}(this, fF, fH);
		if ((fF -= a9i.fF) < .3 * a9i.i) a9k = !1, this.a3G(!aD.nX);
		else {
			if (fF < .7 * a9i.i) return a9k = !a9k, bh.dp = !0;
			this.a3I(!1)
		}
		return !0
	}, this.a3I = function(a9q) {
		2 === aD.a18 ? (this.a3G(!1), t.u(3)) : (a9k = !1, this.a5z = !this.a5z, this.a5z ? (aM.hI && aM.a3H(), a0.a1.setState(1)) : a9q || aM.a6x(), bh.dp = !0, mq(this))
	}, this.a9r = function() {
		this.a5z = !1, aM.a6x(), bh.dp = !0, mq(this)
	}, this.a2z = function(fF, fH) {
		return !!aD.nX && (0 <= aM.hL(fF, fH) || (aD.hH ? ((bh.eW > a9j || !this.hL(fF, fH)) && aS.hL(fF, fH), bh.dp = !0, a9j = bh.eW + 2e3) : aS.hL(fF, fH)), !0)
	}, this.eb = function() {
		aD.hH && aD.nX && bh.eW > a9j - 1e3 && bh.eW < a9j && (bh.dp = !0)
	}, this.a1H = function() {
		aD.hH && (this.a5z = !1, bh.dp = !0, mq(this))
	}, this.vf = function() {
		if (aD.hH) {
			if (aD.nX) {
				if (bh.eW > a9j) return;
				if (bh.eW > a9j - 1e3) return vg.globalAlpha = a9s(0, (1e3 - (bh.eW - (a9j - 1e3))) / 1e3, 1), a9t(), void(vg.globalAlpha = 1)
			}
			a9t()
		}
	}
}

function cL() {
	var aA2, aA3, i, fF, fH, aA4, aA5;
	this.dh = function() {
		aA2 = new Array(2), aA3 = new Array(2), this.nZ = !1, aA5 = aA4 = im = il = 0, iJ = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iH() ? .072 : .0502) * h.iI)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) aA2[aB] = document.createElement("canvas"), aA2[aB].width = i, aA2[aB].height = i, aA3[aB] = aA2[aB].getContext("2d", {
			alpha: !0
		});
		this.a9V(),
			function() {
				for (var aAM = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) aA3[aB].clearRect(0, 0, i, i), aA3[aB].fillStyle = bD.nx, aA3[aB].beginPath(), aA3[aB].arc(i / 2, i / 2, i / 2 - aAM, 0, 2 * Math.PI), aA3[aB].fill(), aA3[aB]
					.lineWidth = aAM, aA3[aB].fillStyle = bD.o4, aA3[aB].strokeStyle = bD.o4, aA3[aB].beginPath(), aA3[aB].arc(i / 2, i / 2, i / 2 - aAM, 0, 2 * Math.PI), aA3[aB].stroke(), zK(aA3[aB], 0, 0, i, aAM, .3, 0 === aB)
			}()
	}, this.zC = function() {
		return -il / iJ
	}, this.zD = function() {
		return -im / iJ
	}, this.nj = function(aA9, iP) {
		il = iJ * aA9 - iP
	}, this.nk = function(aAA, iQ) {
		im = iJ * aAA - iQ
	}, this.hL = function(aA8, a7U) {
		return aD.nX || ! function(aA8, a7U) {
			return Math.pow(aA8 - (fF + i / 2), 2) + Math.pow(a7U - (fH + i / 2), 2) < i * i / 4 || Math.pow(aA8 - (fF + i / 2), 2) + Math.pow(a7U - (fH + 2 * i), 2) < i * i / 4
		}(aA8, a7U) || bl.eT.data[8].value ? (aH.nm() && (this.nZ = !0, aA4 = aA8, aA5 = a7U), !1) : a7U < fH + 1.25 * i ? this.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2g = function(aA8, a7U) {
		var aAB, aAC, iS, iV;
		return !aH.nm() || (aAB = il, aAC = im, il += iS = aA4 - aA8, im += iV = aA5 - a7U, af.a2g(iS, iV), this.aAD(), aA4 = aA8, aA5 = a7U, aAB !== il) || aAC !== im
	}, this.a2j = function(li, lj, deltaY) {
		var ng;
		if (aH.nm()) {
			if (0 < deltaY) ng = (ng = 500 / (500 + deltaY)) < .5 ? .5 : ng;
			else {
				if (!(deltaY < 0)) return !1;
				ng = 2 < (ng = (500 - deltaY) / 500) ? 2 : ng
			}
			this.aAE(li, lj, ng), bh.dp = !0
		}
		return !0
	}, this.aAE = function(fF, fH, em) {
		var a3Z;
		em = a3Z = (a3Z = 1024 < (a3Z = em) * iJ ? 1024 / iJ : a3Z) * iJ < .125 ? .125 / iJ : a3Z, af.zoom(em, fF, fH),
			function(a3Z, li, lj) {
				iJ *= a3Z, il = (il + li) * a3Z - li, im = (im + lj) * a3Z - lj, aS.aAD()
			}(em, fF, fH)
	}, this.aAD = function() {
		var aAH = h.i / 16,
			aAI = 0,
			aAJ = h.j / 16,
			aAK = 0;
		il < -h.i + aAH && (aAI = -h.i + aAH - il), il > iJ * bU.fJ - aAH && (aAI = iJ * bU.fJ - aAH - il), im < -h.j + aAJ && (aAK = -h.j + aAJ - im), im > iJ * bU.fK - aAJ && (aAK = iJ * bU.fK - aAJ - im), il += aAI, im += aAK, bc.nl(), af.aAL(
			aAI, aAK)
	}, this.a9V = function() {
		fF = h.i - i - be.gap, fH = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vf = function() {
		bl.eT.data[8].value || (vg.drawImage(aA2[0], fF, fH), vg.drawImage(aA2[1], fF, Math.floor(fH + 3 * i / 2)))
	}
}

function cM() {
	var g, aAN, aAO, aAP, gap, aAQ, aAR, aAS, aAT, aAU, a6q, aAV, hD, aAW, a8V, aAX, aAY;

	function aAc() {
		aAP = Math.floor(.2 * (a0.a1.iH() ? .07 : .035) * h.iI), aAP = a7R(a0.a1.iH() ? 3 : 1, aAP);
		var aAf = h.i / (g.length + gap);
		aAP = aAP < aAf ? aAf : aAP, a8V = Math.floor((1 - gap) * aAP), aAN = 0, aAg()
	}

	function aAg() {
		aAN = (aAN = aAN < -20 ? -20 : aAN) > (g.length - 15) * aAP ? (g.length - 15) * aAP : aAN, aAR = Math.floor(aAN / aAP), aAS = (aAS = aAR + Math.floor(h.i / aAP)) > g.length - 1 ? g.length - 1 : aAS, aAR = (aAR = aAS < aAR ? aAS : aAR) < 0 ?
			0 : aAR;
		var lO = aAS;
		aAQ = aAO / g[lO];
		for (var aB = aAS - 1; aAR <= aB; aB--) g[aB] > g[lO] && (lO = aB, aAQ = aAO / Math.pow(g[aB], aAW))
	}

	function aAj(fF) {
		fF = Math.floor((aAN + h.i - fF - gap * aAP) / aAP);
		return (fF = fF < -1 ? -1 : -1 === fF ? 0 : fF > g.length - 1 ? -1 : fF) !== aAT && (aAT = fF, -1 === aAX && 0 === aAT && aT.aAZ && (aAX = setInterval(aAk, 100)), 1)
	}

	function aAl(aB) {
		var aAn = Math.floor(aAQ * Math.pow(g[aB], aAW));
		vg.fillRect(aAN + h.i - (aB + 1) * aAP, h.j - aAn, a8V, aAn)
	}

	function aAk() {
		var gg;
		0 !== (aAT = 8 === aa.a2K() ? -1 : aAT) ? (aAY = (new Date).getTime(), clearInterval(aAX), aAX = -1) : (gg = g[1] / 864e3, -1 !== aAY && (gg += ((new Date).getTime() - aAY) * g[1] / 864e5, aAY = -1), 0 < gg && (g[0] += Math.floor(gg), bh
			.dp = !0))
	}
	this.aAZ = !1, this.dh = function() {
		aAY = aAX = -1, aAT = -(aAW = 1), this.aAa = !1, hD = 0, aAV = new Date, aAN = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAO = Math.floor(.15 * h.j), aAU = (aAU = Math.floor((a0.a1.iH() ? .018 : .0137) * h.iI)) < 2 ? 2 : aAU, a6q = bC.r1.sq(1, aAU), aAc()
	}, this.aAd = function(aAe) {
		var aB;
		for (this.aAZ = !0, aB = 0; aB < aAe.length; aB++) g.unshift(aAe[aB]);
		aAc(), bh.dp = !0
	}, this.aAh = function() {
		aAg()
	}, this.a2g = function(fF, fH) {
		fH > h.j - .6 * aAO ? this.aAa ? fF !== hD && (aAN += fF - hD, hD = fF, aAg(), aAj(fF), this.aAa = -1 !== aAT, bh.dp = !0) : aAj(fF) && (bh.dp = !0) : this.s2()
	}, this.s2 = function() {
		-1 !== aAT && (this.aAa = !1, aAT = -1, bh.dp = !0)
	}, this.a2j = function(fF, deltaY) {
		-1 !== aAT && (aAN += Math.floor(deltaY), aAg(), aAj(fF), bh.dp = !0)
	}, this.hL = function(fF, fH) {
		this.a2g(fF, fH), -1 !== aAT && (hD = fF, this.aAa = !0)
	}, this.a35 = function() {
		-1 !== aAT && (this.aAa = !1)
	}, this.vf = function() {
		vg.fillStyle = bD.o7;
		for (var aAo, month, eX, tR, aAr, aAs, nV, aAt, aAu, aB = aAS; aAR <= aB; aB--) aAl(aB);
		this.aAZ && 0 === aAR && (vg.fillStyle = bD.oe, aAl(0)), -1 !== aAT && (vg.fillStyle = bD.o6, aAl(aAT)), -1 !== aAT && (vg.font = a6q, bC.r1.textBaseline(vg, 2), (eX = new Date).setTime(aAV.getTime() - 1e3 * aAT * 60 * 60 * 24), month =
			"month", aAo = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eX), aAo = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eX)), aAo = aAo + ", " + eX.getUTCDate() + " " + month + " " + eX.getFullYear(), month = 1 === g[aAT] ? L(115) : L(116), month = bC.s0.a0P(g[aAT]) + " " + month, eX = Math.floor(vg.measureText(aAo).width), tR = Math
			.floor(vg.measureText(month).width), aAr = Math.floor(.5 * (eX + aAU)), aAs = (aAs = aAN + h.i - (aAT + 1) * aAP) < aAr ? aAr : aAs > h.i - aAr ? h.i - aAr : aAs, nV = h.j - Math.floor(aAQ * Math.pow(g[aAT], aAW)), aAt = Math
			.floor(1.1 * aAU), aAu = nV > h.j - aAt ? h.j - aAt : nV, vg.fillStyle = bD.o1, vg.fillRect(h.i - tR - aAU, aAu - aAt, tR + aAU, aAt), vg.fillRect(aAs - aAr, h.j - aAt, eX + aAU, aAt), vg.fillStyle = bD.o4, bC.r1.textAlign(vg, 2),
			vg.fillText(month, Math.floor(h.i - .5 * aAU), aAu), bC.r1.textAlign(vg, 1), vg.fillText(aAo, aAs, h.j), vg.strokeStyle = bD.o8, vg.lineWidth = 1, vg.beginPath(), vg.moveTo(0, nV), vg.lineTo(h.i, nV), vg.closePath(), vg.stroke())
	}
}

function cN() {
	var a6q, i, fH, aAv, aAw, aAx, canvas, zH, a8O, a4g, aAy, aAz, aB0, aB1;
	this.fF = 0, this.j = 0, this.dh = function() {
		aAx = aD.a5a, aAz = "rgba(0,100,0,0.8)", aB0 = "rgba(150,0,0,0.8)", a8O = aAy = !0, a4g = ag.hA[aD.es], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iH() ? .305 : .24) * h.iI), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6q = bC.r1.sq(1, Math.floor(.8 * this.j)), aAw = bC.r1.sq(1, Math.floor(.45 * this.j)), aB1 = Math.floor(.5 * this.j), bU.xa
			.font = a6q, fH = be.gap, aAv = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, zH = canvas.getContext("2d", {
				alpha: !0
			}), bC.r1.textBaseline(zH, 1), bC.r1.textAlign(zH, 1), this.aB2()
	}, this.a8r = function() {
		return a0.a1.iH() && h.i < 1.2 * h.j
	}, this.a9V = function() {
		this.a8r() ? this.fF = h.i - i - be.gap : this.fF = Math.floor(aV.aB3() + (h.i - aV.aB3() - aW.i - i) / 2 - .5 * be.gap)
	}, this.mp = function() {
		a8O && (a8O = !1, this.aB2())
	}, this.aB2 = function() {
		zH.font = a6q, zH.clearRect(0, 0, i, this.j), zH.fillStyle = aAy ? aAz : aB0, zH.fillRect(0, 0, i, this.j), zH.fillStyle = bD.o6;
		var eg = this.aB4(),
			aB6 = (this.aB5(), zH.fillStyle = ag.hA[aD.es] >= ae.k9(aD.es) ? bD.ob : bD.o4, bC.s0.a0P(a4g)),
			aB6 = (zH.fillText(aB6, Math.floor(i / 2), aB1), zH.measureText(aB6).width),
			aB7 = (zH.font = aAw, zH.fillStyle = 9 === eg ? bD.pC : bD.o4, ae.aB8),
			aB9 = "+" + aB7,
			tR = zH.measureText(aB9).width,
			aBA = Math.floor(this.j / 12),
			aB6 = .5 * (i + aB6) + aBA;
		(aB6 + tR + aAv <= i || 1e3 <= aB7 && (aB9 = "+" + Math.floor(aB7 / 1e3) + "K", aB6 + (tR = zH.measureText(aB9).width) + aAv <= i)) && zH.fillText(aB9, Math.floor(aB6 + .5 * tR), Math.floor(.3 * this.j)), __fx.settings
			.displayTickNumber && zH.fillText(9 - eg, Math.floor(2 * aAv + aBA), Math.floor(.3 * this.j)), zH.fillStyle = bD.o4, zH.fillRect(0, 0, i, 1), zH.fillRect(0, 0, 1, this.j), zH.fillRect(0, this.j - 1, i, 1), zH.fillRect(i - 1, 0, 1,
				this.j)
	}, this.aB4 = function() {
		var eg = bh.kQ() % 100,
			yF = (eg = 9 - bN.fZ(eg -= eg % 10, 10), Math.floor(eg * (this.j - aAv) / 9));
		return zH.fillRect(0, yF, aAv, this.j - yF), zH.fillRect(i - aAv, yF, aAv, this.j - yF), eg
	}, this.aB5 = function() {
		zH.fillRect(aAv, this.j - aAv, Math.floor((i - 2 * aAv) * ag.hA[aD.es] / aAx), aAv)
	}, this.eb = function() {
		var gg = aD.es;
		bC.gU.hK(gg) && (gg = ag.hA[gg] - ag.a4f[gg], a4g !== gg ? (aAx = a7R(gg, aAx), aAy = a4g < gg && 10 <= gg, a4g = gg, a8O = !0) : bh.kQ() % 10 == 9 && (a8O = !0))
	}, this.vf = function() {
		0 === ag.n3[aD.es] || aD.hW || 2 === ag.a4W[aD.es] || vg.drawImage(canvas, this.fF, fH)
	}
}

function cO() {
	var aBB, aBC, aBD, aBE, aBF, aBG, aBH, aBI, aBJ, aBK, aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBW, position, aBX, aBY, aBZ, aBa, aBb, aBc = 1,
		aBd = 1,
		aBe = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.es;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kE[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kE[aD.es]);
	}

	function aBg() {
		aBH.clearRect(0, 0, aBB, a96),
			aBH.fillStyle = aBb ? bD.oz : bD.ov,
			aBH.fillRect(0, 0, aBB, aBM),
			aBH.fillStyle = bD.o0,
			aBH.fillRect(0, aBM, aBB, a96 - aBM);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kE[aD.es]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBW = -1;
		if (__fx.leaderboardFilter.enabled && aBW >= __fx.leaderboardFilter.filteredLeaderboard.length) aBW = -1;
		playerPos >= position && aBi(playerPos - position, bD.oT),
			0 !== kE[aD.es] && 0 === position && aBi(0, bD.p3),
			-1 !== aBW && aBi(aBW, bD.o5),
			aBH.fillStyle = bD.o0,
			//console.log("drawing", aBW),
			aBH.clearRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, __fx.leaderboardFilter.tabBarOffset);
		aBH.fillRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, __fx.leaderboardFilter.tabBarOffset);
		aBH.fillStyle = bD.o4,
			aBH.fillRect(0, aBM, aBB, 1),
			aBH.fillRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, 1),
			__fx.leaderboardFilter.drawTabs(aBH, aBB, a96 - __fx.leaderboardFilter.tabBarOffset, bD.oT),
			aBH.fillRect(0, 0, aBB, be.a06),
			aBH.fillRect(0, 0, be.a06, a96),
			aBH.fillRect(aBB - be.a06, 0, be.a06, a96),
			aBH.fillRect(0, a96 - be.a06, aBB, be.a06), aBH.font = aBC, bC.r1.textBaseline(aBH, 1), bC.r1.textAlign(aBH, 1), aBH.fillText(aBe, Math.floor((aBB + aBM - 22) / 2), Math.floor(aBK + aBD / 2));
		__fx.playerList.drawButton(aBH, 12, 12, aBM - 22);
		var fR, gh = playerPos < position + aBF - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aBF)
				position = (result.length > aBF ? result.length : aBF) - aBF;
			//if (position >= result.length) position = result.length - 1;
			for (aBH.font = aBE, bC.r1.textAlign(aBH, 0), fR = aBF - gh; 0 <= fR; fR--) {
				const pos = result[fR + position];
				if (pos !== undefined)
					aBj(m4[pos]), aBk(fR, pos, m4[pos]);
			}
			for (bC.r1.textAlign(aBH, 2), fR = aBF - gh; 0 <= fR; fR--) {
				const pos = result[fR + position];
				if (pos !== undefined)
					aBj(m4[pos]), aBl(fR, m4[pos]);
			}
		} else {
			for (aBH.font = aBE, bC.r1.textAlign(aBH, 0), fR = aBF - gh; 0 <= fR; fR--)
				aBj(m4[fR + position]), aBk(fR, fR + position, m4[fR + position]);
			for (bC.r1.textAlign(aBH, 2), fR = aBF - gh; 0 <= fR; fR--)
				aBj(m4[fR + position]), aBl(fR, m4[fR + position]);
		}
		2 == gh && (aBj(aD.es), bC.r1.textAlign(aBH, 0), aBk(aBF - 1, kE[aD.es], aD.es), bC.r1.textAlign(aBH, 2), aBl(aBF - 1, aD.es)), 0 === position && (gh = .7 * aBN / ab.get(4).height, aBH.setTransform(gh, 0, 0, gh, Math.floor(aBO + .58 * aBN +
			.5 * gh * ab.get(4).width), Math.floor(aBK + aBD + .4 * aBN)), aBH.imageSmoothingEnabled = !0, aBH.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aBH.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBj(player) {
		aD.i2 && (aBH.fillStyle = bi.aBn[bi.aBo[player]])
	}

	function aBi(aB, aBp) {
		aBH.fillStyle = aBp, aB = aBF - 1 < aB ? aBF - 1 : aB;
		aBp = Math.floor((aB === aBF - 1 ? 2 : 0 === aB ? 1.15 : 1) * aBN), aBp = aB === aBF - 2 ? Math.floor(aBM + 9.15 * aBN) - Math.floor(aBM + 8.15 * aBN) : aBp;
		aBH.fillRect(0, Math.floor(aBM + (aB + (0 === aB ? 0 : .15)) * aBN), aBB, aBp)
	}

	function aBk(wk, a4u, aB) {
		aBH.fillText(aBS[a4u], aBO, Math.floor(aBK + aBD + (wk + .5) * aBN)), 1 === ag.a4W[aB] && (aBH.font = "italic " + aBE);
		a4u = Math.floor(aBK + aBD + (wk + .5) * aBN);
		aBH.fillText(ag.zb[aB], aBP, a4u), 0 !== ag.a4W[aB] && (aBH.font = aBE), aB < aD.kT && 2 !== ag.a4W[aB] || aBH.fillRect(aBP, a4u + .35 * aBc, aBR[aB], Math.max(1, .1 * aBc))
	}

	function aBl(wk, aB) {
		aBH.fillText(ag.gw[aB], aBQ, Math.floor(aBK + aBD + (wk + .5) * aBN))
	}
	this.dh = function() {
		var aB;
		for (t.y.tB[0] = 0, aBa = aBZ = aBX = 0, aBb = aBY = !1, aBW = -1, aBF = a0.a1.iH() ? 6 : 10, aBd = (position = 0) === (aBd = bl.eT.data[11].value) ? 10 : 1 === aBd ? 5 : 1, aBV = !1, aBT = new Uint16Array(aBF + 1), aBU = new Uint32Array(
				aBF + 1), aBJ = aD.f5, m4 = new Uint16Array(aBJ), kE = new Uint16Array(aBJ), aB = aBJ - 1; 0 <= aB; aB--) m4[aB] = aB, kE[aB] = aB;
		this.resize(!0), aBR = new Uint16Array(aD.f5);
		var aBf = Math.floor(aBB - aBP - aBO - aBI);
		for (aBS = new Array(aD.f5), aBH.font = aBE, aB = aD.f5 - 1; 0 <= aB; aB--) aBS[aB] = aB + 1 + ".", ag.zb[aB] = bC.zH.a4E(ag.a1o[aB], aBE, aBf), aBR[aB] = Math.floor(aBH.measureText(ag.zb[aB]).width);
		aBg()
	}, this.resize = function(dh) {
		if (a96 = a0.a1.iH() ? (aBB = Math.floor(.335 * h.iI), Math.floor(aBF * aBB / 8)) : (aBB = Math.floor(.27 * h.iI), Math.floor(aBF * aBB / 10)), aBB = Math.floor(.97 * aBB), (aBG = document.createElement("canvas")).width = aBB, aBG
			.height = a96, aBH = aBG.getContext("2d", {
				alpha: !0
			}), aBK = .025 * aBB, aBD = .16 * aBB, aBL = 0 * aBB, aBM = Math.floor(.45 * aBK + aBD), aBN = (a96 - aBD - 2 * aBK - aBL) / aBF,
			aBG.height = a96 += aBN, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBN * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a96 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aBB,
			aBC = bC.r1.sq(1, Math.floor(.55 * aBD)), aBc = Math.floor((a0.a1.iH() ? .67 : .72) * aBN), aBE = bC.r1.sq(0, aBc), aBH.font = aBE, aBO = Math.floor(.04 * aBB), aBP = Math.floor((a0.a1.iH() ? .195 : .18) * aBB), aBI = Math.floor(aBH
				.measureText("00920600").width), aBH.font = aBC, aBQ = aBB - aBO, !dh) {
			aBH.font = aBE;
			for (var aB = aD.f5 - 1; 0 <= aB; aB--) aBR[aB] = Math.floor(aBH.measureText(ag.zb[aB]).width);
			aBg()
		}
		aBe = bC.zH.a4E(L(117), aBC, .96 * aBB)
	}, this.aB3 = function() {
		return aBB
	}, this.mp = function(bw, aBh) {
		(aBh || aBV && (bw || bh.kQ() % aBd == 0)) && (aBV = !1, aBg())
	}, this.eb = function() {
		! function() {
			for (var fR = aBJ - 1; 0 <= fR; fR--) 0 === ag.n3[m4[fR]] && ! function(fR) {
				var aBx = m4[fR];
				aBJ--;
				for (var aB = fR; aB < aBJ; aB++) m4[aB] = m4[aB + 1], kE[m4[aB]] = aB;
				m4[aBJ] = aBx, kE[m4[aBJ]] = aBJ
			}(fR)
		}();
		for (var aBv, nm = aBJ - 1, fR = 0; fR < nm; fR++) ag.gw[m4[fR]] < ag.gw[m4[fR + 1]] && (aBv = m4[fR], m4[fR] = m4[fR + 1], m4[fR + 1] = aBv, kE[m4[fR]] = fR, kE[m4[fR + 1]] = fR + 1);
		! function() {
			for (var eX = aBV, gh = (aBV = !0, kE[aD.es] >= aBF - 1 ? aBF - 2 : aBF - 1), aB = gh; 0 <= aB; aB--)
				if (aBT[aB] !== m4[aB] || aBU[aB] !== ag.gw[m4[aB]]) return;
			(gh != aBF - 2 || aBT[aBF] === kE[aD.es] && aBU[aBF] === ag.gw[aD.es]) && (aBV = eX)
		}();
		for (var aB = aBF - 1; 0 <= aB; aB--) aBT[aB] = m4[aB], aBU[aB] = ag.gw[m4[aB]];
		aBT[aBF] = kE[aD.es], aBU[aBF] = ag.gw[aD.es];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hL = function(fF, fH) {
		if (a05(fF, fH)) {
			if (__fx.utils.isPointInRectangle(fF, fH, be.gap + 12, be.gap + 12, aBM - 22, aBM - 22)) __fx.playerList.display(ag.a1o);
			else {
				if (fH - be.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fF - be.gap);
				fF = aBz(fH);
				0 <= fF ? (aBX = bh.eW, aBY = !0, aBZ = aBa = fF, bL.a3J() && (fF = a9s(-1, aBa, aBF), aBW !== (fF = fF === aBF ? -1 : fF)) && (aBW = fF, aBg(), bh.dp = !0)) : (aBb && (aBb = !1, aBg(), bh.dp = !0), t.u(10, 0, new aC0({
					aC1: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBg(), bh.dp = !0
	};

	function aBz(fH) {
		return (fH -= be.gap + aBM) < 0 ? Math.floor(fH / aBN) - 1 : fH < (aBF - 1) * aBN ? Math.floor(fH / aBN) : fH < a96 - aBM ? aBF - 1 : (fH -= a96 - aBM, aBF + Math.floor(fH / aBN))
	}

	function a05(fF, fH) {
		return fF >= be.gap && fF < be.gap + aBB && fH >= be.gap && fH < be.gap + a96
	}
	this.a2g = function(fF, fH) {
		var eX, aBy;
		if (__fx.utils.isPointInRectangle(fF, fH, be.gap + 12, be.gap + 12, aBM - 22, aBM - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fF, fH, be.gap, be.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fF - be.gap)) return aBy = aBz(fH), fF = a05(fF, fH), fH = !(!(aBy < 0 && fF) || bL.a3J()), aBY ? (eX = position, (position = a9s(0, position += aBZ - aBy, aD.f5 - aBF)) !== eX ? (aBb = fH,
			aBy = a9s(-1, aBZ = aBy, aBF), aBW = aBy = aBy !== aBF && fF ? aBy : -1, aBg(), bh.dp = !0) : aBb !== fH && (aBb = fH, aBg(), bh.dp = !0), !0) : (aBy = (aBy = a9s(-1, aBy, aBF)) === aBF || !fF || bL.a3J() ? -1 : aBy, (aBW !==
			aBy || aBb !== fH) && (aBW = aBy, aBb = fH, aBg(), bh.dp = !0))
	}, this.a35 = function(fF, fH) {
		if (!aBY) return !1;
		aBY = !1;
		var aBy = aBz(fH);
		var isEmptySpace = false;
		return bL.a3J() && -1 !== aBW && (aBW = -1, aBg(), bh.dp = !0), bh.eW - aBX < 350 && aBa === aBy && -1 !== (aBy = (aBy = a9s(-1, aBy, aBF)) !== aBF && a05(fF, fH) ? aBy : -1) && (fF = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m4[__fx.leaderboardFilter.filteredLeaderboard[aBy + position] ?? (isEmptySpace = true, kE[aD.es])]) : m4[aBy + position]), aBy === aBF - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kE[aD.es]) >=
			position + aBF - 1 && (fF = aD.es), !isEmptySpace && aD.i2 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fF, ag.a1o, aD.kn), 0 !== ag.n3[fF] && !isEmptySpace) && aH.nP(fF, 800, !1, 0), !0
	}, this.a2j = function(fF, fH, deltaY) {
		var aC4;
		return !(aBY || aD.nX || (aC4 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a05(fF, fH)) || (fF = (fF = a9s(-1, aBz(fH), aBF)) === aBF || bL.a3J() ? -1 : fF, 0 < deltaY ? position < aD.f5 - aBF && (position += Math.min(aD.f5 - aBF -
			position, aC4), aBW = fF, aBg(), bh.dp = !0) : 0 < position && (position -= Math.min(position, aC4), aBW = fF, aBg(), bh.dp = !0), 0))
	}, this.vf = function() {
		vg.drawImage(aBG, be.gap, be.gap)
	}
}

function cP() {
	var canvas, zH, fF, fH, aAn, aC5, gap, aC6, fontSize, aC7, aC8, aC9, aCA, aCB, aCC, aCD, aCE, aCF;

	function aCJ() {
		zH.clearRect(0, 0, aW.i, aW.j), zH.fillStyle = bD.o1, zH.fillRect(0, 0, aW.i, aW.j), zH.fillStyle = bD.oO, em = 0 < aCD ? aCD : aCA[4] / 1e4, zH.fillRect(0, aW.j - aAn - 1, Math.floor(em * aW.i), aAn), zH.fillStyle = bD.o4, zH.fillRect(0, 0,
			aW.i, 1), zH.fillRect(0, 0, 1, aW.j), zH.fillRect(aW.i - 1, 0, 1, aW.j), zH.fillRect(0, aW.j - 1, aW.i, 1), zH.fillRect(0, aW.j - aAn - 1, aW.i, 1);
		for (var em, aCL, eX = 0, aB = 0; aB < aC9.length; aB++) aCB[aB] ? (bC.r1.textAlign(zH, 0), aCL = Math.floor((aC5 - aAn + 2 * aC6) * (aB - eX + 1) / (aC9.length + 1) - .7 * aC6), zH.fillText(aC9[aB], gap, aCL), bC.r1.textAlign(zH, 2), 5 ===
			aB && 0 !== ag.n3[aD.es] && ag.hA[aD.es] >= ae.k9(aD.es) ? (zH.fillStyle = bD.p1, zH.fillText(aCH(aB), aW.i - gap, aCL), zH.fillStyle = bD.o4) : zH.fillText(aCH(aB), aW.i - gap, aCL)) : eX++
	}

	function aCH(aB) {
		return aB < 3 ? aCA[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bC.s0.a5E(aCA[aB] / 100, 2) : aB < 7 ? bC.s0.a0P(aCA[aB]) : aB === 7 ? aW.aCM(aCA[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gw, aD.es) : __fx.utils.getDensity(aD.es)
	}

	function aCG() {
		ag.gw[aD.es] !== aCA[6] && (aCA[6] = ag.gw[aD.es], aC7++)
	}
	this.dh = function() {
		aCD = aCE = 0, (aC8 = new Array(8))[0] = L(118), aC8[1] = aD.kn ? L(119) : L(120), aC8[2] = L(121), aC8[3] = L(122), aC8[4] = L(123), aC8[5] = L(124, 0, "Interest"), aC8[6] = L(125), aC8[7] = L(126),
			aC8.push("Max Troops", "Density"), // add aC8
			(aC9 = new Array(aC8.length)).fill(""), (aCA = new Array(aC8.length))[0] = aD.kn ? 0 : aD.kT, aCA[1] = aD.kn ? al.kz : aD.kp, aCA[2] = aD.a1A, aCA[3] = 0, aCA[4] = bN.fZ(1e4 * ag.gw[0], Math.max(aD.kD, 1)), aCA[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bN.fZ(700 * aD.data.iIncomeValue, 64) : bN.fZ(700 * aD.data.iIncomeData[aD.es], 64), aCA[6] = 0, aCG(), aCA[7] = 0, aCC = aCH(6), (aCB = new Array(aC8.length)).fill(!0), aCF = 0, aCF =
			aD.kn ? (aCB[0] = !1, aCB[2] = !1, aCB[3] = !1, 3) : (aCB[3] = !1, 1), aC7 = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iH() ? .1646 : .126) * 1.25 * h.iI), this.j = Math.floor(1.18 * this.i), aAn = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aC6 = .04 * this.i, aC5 = this.j, this.j -= Math.floor(aCF * (this.j -
			2 * aAn) / aC8.length), fontSize = Math.floor(.7 * (aC5 - aAn) / aC8.length);
		var a6q = bC.r1.sq(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6q, i) {
				for (var aB = 0; aB < aC9.length; aB++) aC9[aB] = bC.zH.a4E(aC8[aB], a6q, i)
			}((zH = canvas.getContext("2d", {
				alpha: !0
			})).font = a6q, .575 * this.i), bC.r1.textBaseline(zH, 1), zH.lineWidth = 1, this.a5T(), this.a9V(), aU.a9V(), aCJ()
	}, this.a9V = function() {
		fF = h.i - this.i - be.gap
	}, this.aCK = function() {
		fH = be.gap
	}, this.a5T = function() {
		fH = be.gap + (aU.a8r() && 0 !== ag.n3[aD.es] && !aD.hW ? aU.j + be.gap : 0)
	}, this.mp = function(bw) {
		(bw || 100 <= aC7) && (aC7 = 0, aCJ())
	}, this.a6C = function() {
		return aCA[7]
	}, this.aCM = function(value) {
		var lO = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lO) / 1e3);
		return value < 10 ? lO + ":0" + value : lO + ":" + value
	}, this.eb = function() {
		var aCX, per;
		aCB[0] && aD.a1B - aD.a1A !== aCA[0] && (aCA[0] = aD.a1B - aD.a1A, aC7++), al.kz - aCA[0] !== aCA[1] && (aCA[1] = al.kz - aCA[0], aC7++), this.mg(), (aCX = ae.aCY(aD.es)) !== aCA[5] && (aCA[5] = aCX, aC7++), aCG(), aCA[7] += bh.aCZ, aCX =
			aCH(7), aCC !== aCX && (aCC = aCX, aC7 += 100), aCX = aD.i2 ? bj.l0() : ag.gw[m4[0]], per = bN.fZ(1e4 * aCX, Math.max(aD.kD, 1)), aCA[3] = aCX, aCA[4] !== per && (aC7++, aCA[4] = per), 8 === aD.kl && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bC.gU.hK(aB)) return bT.a0k.a17(), 1;
				return
			}() || aCA[3] < aD.kD || ! function() {
				for (var aB = al.kz - 1; 0 <= aB; aB--)
					if (0 < ag.ga[al.l4[aB]].length) return;
				return 1
			}() || bP.lI.aCW().length || aD.i2 && bj.l0(1) < aD.kD || bT.a0k.a17()
	}, this.mg = function() {
		aCB[2] && aD.a1A !== aCA[2] && (aCA[2] = aD.a1A, aC7 += 2 === aD.a18 ? 100 : 1)
	}, this.aCT = function() {
		return aCA[3] === aD.kD
	}, this.aCa = function(aB) {
		var th, aCb, eX;
		return 2 !== aD.a18 && (aB % 2 == 1 && (aV.mp(1, 1), bh.dp = !0), aB === aD.a5c ? (aCD = 0, aCJ(), !1) : (-1 !== aB || 0 !== aCE) && (aCb = aCD, aCD = aD.hH ? aB / aD.a5c : (eX = performance.now(), 0 <= aB && (th = eX - 392 * aB, aCE =
			0 === aB || th < aCE ? th : aCE), 1 < (aCD = (eX - aCE) / (392 * aD.a5c)) ? 1 : aCD), aCJ(), aCD !== aCb))
	}, this.vf = function() {
		vg.drawImage(canvas, fF, fH)
	}
}

function cQ() {
	var hu, aCc, i, j, a9b, aCd, aCe, a8s, canvas, nG, aCf;

	function zD() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * be.gap ? h.j - j - 4 * be.gap - aR.j : h.j - j - 2 * be.gap
	}
	this.dh = function() {
		aCf = hu = !1, a9b = .61, aCd = .07, aCe = .09, nG = a8s = j = 0
	}, this.resize = function() {
		var zH, nU, eg, aCk, aCl, a6v;
		hu && (i = aCg(i = a0.a1.iH() ? Math.floor(.69 * h.iI) : Math.floor(.5 * h.iI), a7R(h.i - 2 * be.gap, 10)), i = aCg(i, Math.floor(3.57 * a7R(h.j - 2 * be.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, zH = canvas.getContext("2d", {
				alpha: !0
			}), nU = Math.floor(1 + j / 40), zH.clearRect(0, 0, i, j), zH.fillStyle = bD.o1, zH.fillRect(nU, nU, i - 2 * nU, j - 2 * nU), zH.lineJoin = "bevel", zH.lineWidth = 2 * nU, zH.strokeStyle = bD.o4, zH.strokeRect(nU, nU, i - 2 * nU,
				j - 2 * nU), zH.imageSmoothingEnabled = !1, eg = ab.get(aCc), aCk = eg.width, a6v = (1 === aCc ? .85 : 21 === aCc ? .666 : .9) * a9b * j / (aCl = eg.height), zH.setTransform(a6v, 0, 0, a6v, Math.floor((i - a6v * aCk) / 2),
				Math.floor((j - a6v * aCl) / 2)), zH.drawImage(eg, 0, 0), zH.setTransform(1, 0, 0, 1, Math.floor(i - aCe * j - aCd * j - nU), Math.floor(nU + aCd * j)),
			function(zH, f8) {
				zH.lineWidth = Math.floor(1 + j / 80), zH.strokeStyle = bD.o4, zH.beginPath(), zH.moveTo(0, 0), zH.lineTo(f8, f8), zH.moveTo(0, f8), zH.lineTo(f8, 0), zH.stroke()
			}(zH, Math.floor(aCe * j)), zH.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fa, aCi, a9N, aCj) {
		hu || aCj && aCf || (aCc = a9N ? 21 : fa ? 1 : 2, hu = aCf = !0, this.resize(), aL.sI(), aR.a9I(), nG = bh.eW, a8s = aCi ? 1 : 0)
	}, this.eb = function() {
		!hu || 1 <= a8s || (a8s = 1 < (a8s += 5e-4 * (bh.eW - nG)) ? 1 : a8s, nG = bh.eW, bh.dp = !0)
	}, this.hL = function(fF, fH) {
		return !(!hu || a8s <= 0 || (fF -= Math.floor((h.i - i) / 2), fH -= zD(), fF < 0) || fH < 0 || i < fF || j < fH || (i - j / 3 < fF && fH < j / 3 && (hu = !1, bh.dp = !0), 0))
	}, this.vf = function() {
		!hu || a8s <= 0 || (vg.globalAlpha = a8s, vg.drawImage(canvas, Math.floor((h.i - i) / 2), zD()), vg.globalAlpha = 1)
	}
}

function dR() {
	var aCn, aCo = new Uint8Array(5),
		aCp = new Uint8Array(5);
	this.aCq = new aCr, this.dh = function() {
		for (var fa = bl.eT.data[119].value, aB = 0; aB < aCo.length; aB++) aCo[aB] = (fa >> 2 * aB) % 4
	}, this.a5o = function() {
		aCn = [L(127), "", L(128, [bZ.aCs[28]]), L(129, [bZ.aCs[26]]), L(130, [bZ.aCs[0]])], this.aCq.dh()
	}, this.eb = function() {
		this.aCq.eb()
	}, this.a6Z = function(id) {
		1 < id && bL.rT() || ! function(eF) {
			if (3 === aCo[eF] || 1 === aCp[eF]) return;
			if (aCp[eF] = 1, !(Math.random() < .6)) {
				aCo[eF]++;
				for (var fa = 0, aB = 0; aB < aCo.length; aB++) fa += aCo[aB] << 2 * aB;
				bl.pV.pW(119, fa)
			}
			return 1
		}(id) || aN.a7W(aCn[id])
	}
}

function aCr() {
	var aCu;
	this.dh = function() {
		aCu = !1
	}, this.eb = function() {
		var gg;
		if (function() {
				if (!aCu) {
					if (bh.kQ() % 30 != 9) return;
					if (!bC.gU.m0(90)) return;
					aCu = !0
				}
				return 1
			}() && (! function() {
				var qt = aN.a7s(956);
				if (qt) {
					if (bC.gU.lR(qt.player)) return 1;
					aN.a7r(956, 0)
				}
				return
			}() && (-1 === (gg = (aD.i2 ? function() {
				var id = bj.l2(),
					f8 = al.kz;
				if (bi.kq[id])
					for (var a0w = al.l4, f6 = bi.f6, aB = 0; aB < f8; aB++) {
						var gg = a0w[aB];
						if (f6[gg] !== id) return gg
					} else if (1 < f8) return m4[f8 - 1];
				return -1
			} : function() {
				for (var aD2 = al.kz, lN = al.l4, aD3 = kE, aB = 0; aB < aD2; aB++) {
					var gg = lN[aB];
					if (0 !== aD3[gg]) return gg
				}
				return -1
			})()) ? ! function() {
				var qt = aN.a7s(957);
				if (qt && qt.a7N) {
					if (ac.ez(qt.a7N.eu << 2)) return 1;
					aN.a7r(957, 0)
				}
				return
			}() : (aN.za(0, L(131, [ag.zb[gg]]), 956, gg, bD.o4, bD.o1, -1, !0), 0)))) {
			var f8 = ao.j7.ld;
			if (0 !== f8)
				for (var eT = ao.j7.eT, aB = 0; aB < f8; aB++) {
					var eu = eT[aB];
					if (ac.ez(eu << 2)) return void aN.za(0, L(132, [bO.fG(eu), bO.fI(eu)]), 957, 0, bD.o4, bD.o1, -1, !0, void 0, {
						fR: 1,
						eu: eu
					})
				}
		}
	}
}

function dS() {
	this.aD4 = new aD5, this.dh = function() {
		this.aD4.resize()
	}
}

function aD5() {
	this.resize = function() {
		var aB, aD6 = document.head.querySelector("style#ss");
		if (aD6)
			for (aB = aD6.sheet.cssRules.length - 1; 0 <= aB; aB--) aD6.sheet.deleteRule(0);
		else(aD6 = document.createElement("style")).id = "ss", document.head.appendChild(aD6);
		var a9j = "::-webkit-scrollbar",
			e1 = bC.r1.rA(be.ss),
			i4 = bC.r1.rA(Math.max(bC.r1.sK(.012), 8));
		try {
			aD6.sheet.insertRule(a9j + "{width:" + i4 + ";height:" + i4 + ";}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-thumb{background-color:white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j +
				"-track{background:" + bD.o0 + ";}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-track:horizontal{border-top:" + e1 + " solid white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j +
				"-track:vertical{border-left:" + e1 + " solid white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-button{display:none;}", aD6.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aD6.sheet.cssRules.length - 1; 0 <= aB; aB--) aD6.sheet.deleteRule(0)
		}
	}
}

function dQ() {
	this.aD7 = !1, this.nu = !1, this.a5X = !1, this.aD8 = [0, 0, 0, 0], this.aD9 = function() {
		var nU, nV, nh, ni;
		this.a5X = this.a5X || this.nu, (this.nu || this.aD7 && this.a5X) && (nU = bc.aDA[0], nV = bc.aDA[1], nh = bc.aDA[2], ni = bc.aDA[3], nU = nU < this.aD8[0] ? this.aD8[0] : nU, nV = nV < this.aD8[1] ? this.aD8[1] : nV, nh = nh > this.aD8[
				2] ? this.aD8[2] : nh, ni = ni > this.aD8[3] ? this.aD8[3] : ni, this.nu = !1, this.aD7 = !1, nU === this.aD8[0] && nV === this.aD8[1] && nh === this.aD8[2] && ni === this.aD8[3] ? this.a5Y() : nU <= nh && nV <= ni && a5q
			.putImageData(a5r, 0, 0, nU, nV, nh - nU + 1, ni - nV + 1))
	}, this.a5Y = function() {
		this.a5X && this.aD8[2] >= this.aD8[0] && this.aD8[3] >= this.aD8[1] && a5q.putImageData(a5r, 0, 0, this.aD8[0], this.aD8[1], this.aD8[2] - this.aD8[0] + 1, this.aD8[3] - this.aD8[1] + 1), this.a5X = !1
	}, this.a1K = function() {
		this.aD8[2] >= this.aD8[0] && this.aD8[3] >= this.aD8[1] && a5q.putImageData(a5r, 0, 0, this.aD8[0], this.aD8[1], this.aD8[2] - this.aD8[0] + 1, this.aD8[3] - this.aD8[1] + 1), this.a5X = !1
	}, this.dh = function() {
		var fF, fH;
		this.aD7 = !1, this.nu = !1, this.a5X = !1, this.aD8[0] = bU.fJ, this.aD8[1] = bU.fK, this.aD8[2] = this.aD8[3] = 0;
		loop: for (fF = 1; fF < bU.fJ - 1; fF++)
			for (fH = bU.fK - 2; 1 < fH; fH--)
				if (1 === aDB[ac.yk(fF, fH) + 2]) {
					this.aD8[0] = fF;
					break loop
				} loop: for (fH = 1; fH < bU.fK - 1; fH++)
			for (fF = bU.fJ - 2; 1 < fF; fF--)
				if (1 === aDB[ac.yk(fF, fH) + 2]) {
					this.aD8[1] = fH;
					break loop
				} loop: for (fF = bU.fJ - 2; 0 < fF; fF--)
			for (fH = bU.fK - 2; 1 < fH; fH--)
				if (1 === aDB[ac.yk(fF, fH) + 2]) {
					this.aD8[2] = fF;
					break loop
				} loop: for (fH = bU.fK - 2; 0 < fH; fH--)
			for (fF = bU.fJ - 2; 1 < fF; fF--)
				if (1 === aDB[ac.yk(fF, fH) + 2]) {
					this.aD8[3] = fH;
					break loop
				}
	}
}

function L(value, aDC, wE, aDD) {
	var qi = "number" == typeof value ? b9.aDE[value] : value;
	if (wE && b9.aDF() && (qi = wE), !aDC) return aDD ? qi.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qi;
	for (var f8 = aDC.length, aB = 0; aB < f8; aB++)
		for (var fR = 0; fR < 3; fR++) qi = qi.replace("{" + (10 * fR + aB) + "}", aDC[aB]);
	return qi
}

function c4() {
	this.data = new aDG;
	var aDH = (new aDI).L84,
		aDK = (this.aDE = aDH, !(this.aDJ = "en"));
	this.dh = function() {
		var qi, g;
		aDK = !1, ("en" === (qi = bl.eT.data[12].value).split("-")[0].toLowerCase() ? (b9.aDE = aDH, b9.aDJ = qi, 1) : bl.eT.data[12].value === bl.eT.data[145].value && 0 < bl.eT.data[146].value && (qi = bl.eT.data[146].value, (g = bl.rI.wR(qi, !
			1)).length === qi) && !!bC.r9.a3p(g) && function(g) {
			for (var f8 = g.length, j = 0; j < f8; j++) g[j] = g[j].replace("&#39;", "'");
			var aDQ = bl.rI.wR(f8, !0);
			if (f8 !== aDQ.length) return !1;
			if (!bC.r9.a3p(aDQ)) return !1;
			for (var lO = aDH.length, aAe = new Array(lO), aDR = lO === f8, gb = Math.min(f8, lO), aB = 0; aB < lO; aB++)
				if (aAe[aB] = aDH[aB], aB < f8 && aDQ[aB] === aAe[aB]) aAe[aB] = g[aB];
				else {
					aDR = !1;
					for (var fS = 0; fS < gb; fS++)
						if (aDQ[fS] === aAe[aB]) {
							aAe[aB] = g[fS];
							break
						}
				} return b9.aDE = aAe, b9.aDJ = bl.eT.data[12].value, aDR
		}(g)) || (aDK = !0)
	}, this.dj = function() {
		bi.di(), aE.di(), bg.di(), bf.di(), aO.dh(), bq = new e5
	}, this.aDF = function() {
		return this.aDE === aDH || !aDH.length
	}, this.aDS = function() {
		var aDT;
		return !!aDK && (aDK = !1, 0 !== aDH.length) && (aDT = bl.eT.data[12].value, b0.ed.aDU(0, aDT.slice(0, 20)), !0)
	}, this.aDV = function(g) {
		g.length !== aDH.length ? 8 === t.tJ && t.a2O().aDW(30, 0, 1) : (this.aDE = g, this.aDJ = bl.eT.data[12].value, bl.pV.pW(145, this.aDJ), bl.pV.pW(146, g.length), bl.rI.wX(g, !1), bl.rI.wX(aDH, !0), 8 === t.tJ ? t.a2O().aDW(30) : 0 === aa
			.a2K() && 5 === t.tJ && t.y.aDX())
	}, this.aDY = function() {
		var wa, g = navigator.languages;
		return g && g.length ? (wa = Math.max(b9.data.aDZ(g[0]), 0), 1 === g.length ? [wa, wa] : [wa, Math.max(b9.data.aDZ(g[1]), 0)]) : [0, 0]
	}
}

function aDG() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDa = function() {
		for (var aDb = [], g = this.g, f8 = g.length, aB = 0; aB < f8; aB++) aDb.push(g[aB]);
		var aDc = bl.eT.data[12].wE;
		for (aB = 0; aB < f8; aB++)
			if (aDb[aB] === aDc) {
				aDb.splice(aB, 1), f8--;
				break
			} aDb.sort(), f8++, aDb.unshift(aDc);
		try {
			if ("undefined" == typeof Intl) return aDb;
			for (aB = 0; aB < f8; aB++) {
				var qi = new Intl.DisplayNames([aDb[aB]], {
					type: "language"
				}).of(aDb[aB]);
				qi !== aDb[aB] && (aDb[aB] = aDb[aB] + ": " + qi)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDb
	}, this.aDe = function(aDf) {
		for (var qi = bl.eT.data[12].value, f8 = aDf.length, aB = 0; aB < f8; aB++)
			if (qi === aDf[aB].split(":")[0]) return aB;
		return 0
	}, this.aDZ = function(aDg) {
		if (aDg && !(aDg.length < 2)) {
			aDg = aDg.split("-")[0].toLowerCase();
			for (var g = this.g, f8 = g.length, aB = 0; aB < f8; aB++)
				if (aDg === g[aB]) return aB
		}
		return -1
	}
}

function aDI() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention",
		"Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant",
		"Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Search", "Password", "Show", "Hide",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ",
		"You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.",
		"Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.",
		"Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Offensive Name",
		"Hate Speech", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio",
		"Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy",
		"Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics",
		"Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked",
		"Join Territorial.io on Patreon:", "Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed",
		"Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression",
		"Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income",
		"Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale",
		"Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain",
		"Clan Leader Election", "Bio Reports", "Battle Royale Players", "Zonbie Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account",
		"Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Game",
		"Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}",
		"Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview",
		"Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2",
		"🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!"
	]
}

function dm() {
	var fF, fH, j, uH, aDh, aDi, aDj, aDk, aDl, i, a4S, aDm;
	this.hu = !1, this.dh = function(qi, aDn) {
		if (1 === a0.id && 13 <= a0.e0 && a0.e0 < 18) return aDn ? void(a4S = qi) : a4S !== qi ? void 0 : void a0.wP.saveString(200, qi);
		aDn && (a4S = qi, (aDm = document.createElement("a")).appendChild(document.createTextNode(a4S)), this.hu = !0, aDm.title = a4S, aDm.target = "_blank", aDm.href = a4S, aDm.style.textAlign = "center", aDm.style.color = bD.o4, aDm.style
			.position = "absolute", aDm.style.padding = "0px", aDm.style.margin = "0px", this.resize(), document.body.appendChild(aDm), bh.dp = !0)
	}, this.sI = function() {
		return !(!this.hu || (t.removeChild(document.body, aDm), this.hu = !1))
	}, this.hL = function(iP, iQ) {
		return !!this.hu && ((iP < fF || iQ < fH || fF + i < iP || fH + j < iQ || fF + i - uH < iP && iQ < fH + uH) && (bh.dp = !0, this.hu = !1, t.removeChild(document.body, aDm)), !0)
	}, this.resize = function() {
		var a6q, aDo;
		this.hu && (aDk = Math.floor(.8 * (a0.a1.iH() ? h.i > h.j ? .6 : .55 : .4) * h.iI), uH = Math.floor(.15 * aDk), aDh = Math.floor(.35 * uH), aDi = Math.floor(.5 * uH), aDj = Math.floor(2.5 * aDi), j = uH + aDh + 3 * aDi, a6q = bC.r1.sq(1,
			aDh / h.k), aDl = Math.floor(h.k * aQ.measureText(a4S, a6q)), aDo = i = (aDk < aDl ? aDl : aDk) + 2 * aDj, i = Math.min(i, h.i - 2 * (a0.a1.iH() ? 2 : 1) * be.gap), a6q = bC.r1.sq(1, i / aDo * aDh / h.k), aDl = Math.floor(h
			.k * aQ.measureText(a4S, a6q)), fF = Math.floor((h.i - i) / 2), fH = Math.floor((h.j - j) / 2), aDm.style.font = a6q, aDm.style.top = Math.floor((fH + 1.4 * aDi + uH) / h.k) + "px", aDm.style.left = Math.floor((fF + (i -
			aDl) / 2) / h.k) + "px")
	}, this.vf = function() {
		this.hu && (vg.fillStyle = bD.o1, vg.fillRect(fF, fH + uH, i, j - uH), vg.fillStyle = bD.pE, vg.fillRect(fF, fH, i, uH), vg.fillStyle = bD.o4, vg.lineWidth = be.a06, vg.strokeStyle = bD.o4, vg.strokeRect(fF, fH, i, j), vg.fillRect(fF,
			fH + uH, i, be.a06), vg.font = bC.r1.sq(1, .48 * uH), bC.r1.textAlign(vg, 1), bC.r1.textBaseline(vg, 1), vg.fillText(L(133), Math.floor(fF + (i - .5 * uH) / 2), Math.floor(fH + .55 * uH)), aM.a72(Math.floor(fF + i - .8 * uH),
			Math.floor(fH + .25 * uH), Math.floor(.5 * uH)), vg.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dl() {
	var gap, aC8, fF = [0, 0, 0, 0, 0],
		fH = [0, 0, 0, 0, 0],
		ng = [1, 1, 1, 1, 1],
		fa = [!0, !0, !0, !1, !1],
		eg = (this.fv = [!0, !0, !0, !1, !1], null);
	this.aDp = function(a40, aDq) {
		eg = a40, fa = aDq, aC8 = [bM.aDr, bM.a2D, bM.aDs, bM.aDs, bM.aDt], this.dh()
	}, this.dh = function() {
		if (ab.tl()) {
			var aB, tQ = Math.floor((a0.a1.iH() ? .261 : .195) * h.iI),
				tR = Math.floor(.9 * tQ),
				a9b = Math.floor(.17 * tR);
			if (gap = a0.a1.iH() ? 2 * be.gap : be.gap, ng[0] = tQ / eg[0].width, ng[1] = tR / eg[1].width, ng[2] = a9b / eg[2].height, ng[3] = a9b / eg[3].height, ng[4] = a9b / eg[4].height, ng[2] *= 1.7, ng[3] *= 1.07, fF[0] = gap, fF[1] = gap,
				fF[2] = gap, fF[3] = gap, fF[4] = Math.floor(2 * gap + ng[3] * eg[3].width), fH[0] = gap, fH[1] = fH[0] + gap + ng[0] * eg[0].height, fH[2] = fH[1] + gap + ng[1] * eg[1].height, fH[3] = fH[2] + gap + ng[2] * eg[2].height, fH[4] =
				fH[3], !fa[0])
				for (aB = 0; aB < 5; aB++) fH[aB] -= ng[0] * eg[0].height + gap;
			if (!fa[1])
				for (aB = 2; aB < 5; aB++) fH[aB] -= ng[1] * eg[1].height + gap
		}
	}, this.hu = function() {
		return !(7 === aa.a2K() && a0.a1.iH())
	}, this.hL = function(iP, iQ) {
		if (eg && this.hu())
			for (var aB = fa.length - 1; 0 <= aB; aB--)
				if (fa[aB] && this.fv[aB] && fF[aB] < iP && fH[aB] < iQ && iP < fF[aB] + ng[aB] * eg[aB].width && iQ < fH[aB] + ng[aB] * eg[aB].height) return t.u(9, t.tJ, new aDu(L(134), bC.r1.a4R(aC8[aB]))), !0;
		return !1
	}, this.vf = function() {
		if (eg && this.hu()) {
			var aB;
			for (vg.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fa[aB] && this.fv[aB] && (vg.setTransform(ng[aB], 0, 0, ng[aB], fF[aB], fH[aB]), vg.drawImage(eg[aB], 0, 0));
			vg.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function db() {
	this.aDv = 0, this.aDw = null, this.uS = null, this.lI = null, this.y = null, this.uq = null, this.uP = null, this.message = null, this.aDx = null, this.sH = null, this.aDy = null, this.aDz = new aE0, this.a2H = 0, this.aAV = 0, this.dh =
		function() {
			this.aAV = bh.eW, this.aDv = bI.tM.xM(bl.eT.data[105].value, 5), this.uS = new aE1, this.lI = new aE2, this.y = new aE3, this.uq = new aE4, this.uP = new aE5, this.message = new aE6, this.aDx = new aE7, this.sH = new aE8, this.aDy =
				new aE9, this.y.dh(), br.dh(), this.a2H = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uk = function() {
			this.sH && this.sH.uk(), this.aDw = null, this.uS = null, this.lI = null, this.y = null, this.uq = null, this.uP = null, this.message = null, this.aDx = null, this.sH = null, this.aDy = null, this.a2H = 0, br.uk(), a0.a1.setState(0)
		}
}

function aE1() {
	function aEW(g, td, te) {
		var aEX = g[td];
		g[td] = g[te], g[te] = aEX
	}
	this.uT = [
		[],
		[],
		[],
		[]
	], this.uU = [0, 0, 0, 0], this.aEA = [], this.aEB = function(aEC, tH, username, uZ, a4u, aED, elo, color, wu, aEE) {
		username = this.aEG(tH, username, uZ, a4u, aED, elo, color, wu, aEE);
		this.uT[aEC].push(username), bp.aDv === tH && (bp.aDw = username), bp.aDy.aEH(tH) && (username.uc = 1), bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === aEC && 1 === bp.y.s5[2]
	}, this.aEG = function(tH, username, uZ, a4u, aED, elo, color, wu, aEE) {
		return {
			tH: tH,
			username: username,
			uZ: uZ,
			a4u: a4u,
			aED: aED,
			elo: elo,
			color: color,
			wu: wu,
			aEE: aEE
		}
	}, this.aEJ = function(eF, aEC, uZ, a4u, aED, elo, wu, color) {
		eF = this.uT[aEC][eF];
		eF.uZ = uZ, eF.a4u = a4u, eF.aED = aED, eF.elo = elo, eF.wu = wu, eF.color = color, bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === aEC && 1 === bp.y.s5[2]
	}, this.aEK = function(eF, aEC, aEL) {
		var eF = this.uT[aEC][eF],
			aEM = eF.username,
			aEN = "Redacted " + bH.tM.a0P(eF.tH, 2);
		eF.username = aEL ? "[" + bC.s0.a1r(aEM) + "] " + aEN : aEN, aEM.indexOf("Redacted") < 0 && (eF.aEO = aEM), bp.sH.aEP(eF.tH), bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === aEC && 1 === bp.y.s5[2]
	}, this.aEQ = function(eF, aER, aES) {
		var player = this.uT[aER][eF];
		this.aET(eF, aER), this.uT[aES].push(player), bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === aES && 1 === bp.y.s5[2]
	}, this.aET = function(eF, aER) {
		var uS = this.uT[aER];
		this.aEA.push(uS[eF]), 1e3 < this.aEA.length && this.aEA.shift(), eF >= this.uU[aER] ? uS[eF] = uS[uS.length - 1] : (this.uU[aER]--, 2 === aER ? (uS.splice(this.uU[aER] + 1, 0, uS[uS.length - 1]), uS.splice(eF, 1)) : (uS[eF] = uS[this.uU[
			aER]], uS[this.uU[aER]] = uS[uS.length - 1])), uS.pop(), bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === aER && 1 === bp.y.s5[2]
	}, this.aEU = function(eF, s4) {
		bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === s4 && 1 === bp.y.s5[2];
		var uS = this.uT[s4],
			qt = uS[eF];
		if (2 === s4)
			if (eF >= this.uU[s4]) {
				bp.aDy.join(qt);
				for (var aEV = this.uU[s4], elo = qt.elo; aEV && elo > uS[aEV - 1].elo;) aEV--;
				uS[eF] = uS[this.uU[s4]], uS.splice(this.uU[s4]++, 1), uS.splice(aEV, 0, qt)
			} else uS.splice(this.uU[s4]--, 0, qt), uS.splice(eF, 1);
		else eF >= this.uU[s4] ? (bp.aDy.join(qt), aEW(uS, this.uU[s4]++, eF)) : aEW(uS, --this.uU[s4], eF)
	}, this.aEY = function(tH) {
		for (var uT = this.uT, f8 = uT.length, aB = 0; aB < f8; aB++)
			for (var uS = uT[aB], lO = uS.length, fR = 0; fR < lO; fR++)
				if (tH === uS[fR].tH) return uS[fR];
		return null
	}
}

function aE9() {
	var aEZ = [],
		aEa = [],
		aEb = 0;

	function aEc(g, a7u, aEg, aEh) {
		var f8 = g.length;
		if (0 === f8) return "";
		var qi = "@" + g[0];
		if (1 === f8) return qi + a7u + aEh;
		for (var aB = 1; aB < f8 - 1; aB++) qi += ", @" + g[aB];
		return qi + " and @" + g[f8 - 1] + aEg + aEh
	}
	this.dh = function() {
		var qi = aEc(aEa, " is", " are", " in the lobby.");
		qi.length && bp.message.aEd({
			id: 7,
			r: qi
		}), aEZ = [], aEa = [], aEb = 0
	}, this.aEH = function(aEe) {
		return bp.aDv !== aEe && (aEe = bH.tM.a0P(aEe, 5), !!bl.w4.uc(aEe)) && (aEa.push(aEe), !0)
	}, this.join = function(player) {
		bp.aDv !== player.tH && (player = bH.tM.a0P(player.tH, 5), bl.w4.uc(player)) && aEZ.push(player)
	}, this.aEf = function() {
		var a7u, aEg;
		++aEb < 3 || (aEb = 0, a7u = aEc(aEa, "", "", " entered the lobby!"), (a7u = (aEg = aEc(aEZ, "", "", " joined a game!")).length ? a7u.length ? a7u + " " + aEg : aEg : a7u).length && bp.message.aEd({
			id: 7,
			r: a7u
		}), aEZ = [], aEa = [])
	}
}

function aE0() {
	this.dq = function(eF) {
		if ((uU = bp.uS.uU[eF]) < 2) return !1;
		var s6 = bp.y.s7[eF],
			aEi = 9 === s6.aEj ? 333 : 512,
			uU = Math.min(uU, aEi);
		8 === s6.aEj && (uU -= uU % 2);
		aEi = bp.uS.uT[eF].splice(0, uU), bp.uS.uU[eF] -= uU, uU = function(aEk) {
			if (bp.aDw)
				for (var f8 = aEk.length, tH = bp.aDw.tH, aB = 0; aB < f8; aB++)
					if (aEk[aB].tH === tH) return aB;
			return -1
		}(aEi);
		return -1 === uU ? (bp.uS.aEA = bp.uS.aEA.concat(aEi), 1e3 < bp.uS.aEA.length && bp.uS.aEA.splice(0, bp.uS.aEA.length - 1e3), bp.y.aEI += 29 === t.tJ && bp.y.s5[0] === eF && 1 === bp.y.s5[2], !1) : (8 === s6.aEj && (s6.aEn = (s6.aEn + (
			uU >> 1)) % 1024, eF = uU - uU % 2, uU %= 2, aEi = aEi.slice(eF, 2 + eF)), ax.dh(s6, aEi, uU), !0)
	}, this.aEo = function(s6, aEk, aEl) {
		var fB = aD.data = new a5d,
			aEs = (fB.spawningSeed = s6.spawningSeed, s6.aEj < 7 ? (fB.gameMode = 1, fB.numberTeams = s6.aEj + 2) : 9 === s6.aEj ? (fB.gameMode = fB.isZombieMode = 1, fB.numberTeams = 2) : (fB.gameMode = 0, fB.battleRoyaleMode = 7 === s6.aEj ?
				0 : 10 === s6.aEj ? 1 : 2), fB.selectedPlayer = aEl, fB.isContest = s6.aEp, fB.mapType = bU.aEq(s6.eo) ? 0 : 1, bU.aEr(fB, s6.eo), fB.mapSeed = s6.mapSeed, fB.humanCount = aEk.length);
		fB.selectableSpawn = 1 === fB.gameMode || aEs < 100, fB.colorsData = new Uint32Array(aEs), fB.playerNamesData = new Array(aEs), fB.a61 = new Uint32Array(aEs);
		for (var aB = 0; aB < aEs; aB++) fB.colorsData[aB] = aEk[aB].color, fB.playerNamesData[aB] = aEk[aB].username, fB.a61[aB] = aEk[aB].tH;
		if (2 === fB.battleRoyaleMode)
			for (fB.elo = new Uint16Array(aEs), aB = 0; aB < aEs; aB++) fB.elo[aB] = aEk[aB].elo;
		aa.setState(8), bU.a7(s6.eo, fB.mapSeed), aD.a5i(), aD.a5g = 2
	}
}

function aE2() {
	var e6 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aEt = [bD.oI, bD.oI, bD.oJ, bD.on, bD.oo, bD.oZ, bD.ot, bD.oJ, bD.pG, bD.p4, bD.pD, bD.nv],
		aEu = [
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
		aEv = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aF9(s8, tH, aFB) {
		for (var fS = s8.length - 1; 0 <= fS; fS--) {
			var qt = s8[fS];
			0 === qt.id && qt.tH === tH && (qt.r = "[Redacted Message]", aFB) && (qt.aFC = 1)
		}
	}
	this.sD = function(aEw) {
		var aEx, a1s;
		return aEw.id < 5 && (aEx = "@" + bH.tM.a0P(aEw.tH, 5)), 0 === aEw.id ? aEx + ": " + aEw.r : 1 === aEw.id ? (a1s = "@" + bH.tM.a0P(aEw.target, 5), 0 === aEw.aEy ? 32768 <= aEw.value ? aEx + " voted with " + (aEw.value - 32768 + 1) +
				" gold against " + a1s + " to weaken the latter's admin position. 📉" : aEx + " voted with " + (aEw.value + 1) + " gold for " + a1s + " to strengthen the latter's admin position. 💪" : 1 === aEw.aEy ? aEx + " sent " + Math.floor(
					aEw.value / 100) + " 🧈 gold to " + a1s + "." : aEx + " voted with " + (aEw.value / 10).toFixed(1) + " points for " + a1s + " to acknowledge the latter as clan leader. ✅") : 2 === aEw.id ? 0 === aEw.aEy ? aEx +
			" was 🔇 muted for 1 Hour." : 1 === aEw.aEy ? "The username of " + aEx + " was ✂️ redacted. Duration: 1 Day" : aEx + " 👢 was kicked." : 3 === aEw.id ? aEx + bq.eI(aEw.aEy, bq.eC[aEw.aEy][aEw.value]) + "@" + bH.tM.a0P(aEw.target, 5) +
			bq.eK(aEw.aEy, bq.eC[aEw.aEy][aEw.value]) : 4 === aEw.id ? aEx + bq.eI(5, bq.eC[5][aEw.aEy]) + "@" + bH.tM.a0P(aEw.target, 5) + bq.eK(5, bq.eC[5][aEw.aEy]) : 5 === aEw.id ? aEv[aEw.aEy] : 6 === aEw.id ? "You are about to mention " +
			aEw.value + " player" + (1 === aEw.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEw.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEw.id ? aEw.r : void 0
	}, this.sC = function(aEw, aEz) {
		return {
			aEw: aEw,
			r: aEz,
			aF0: 0,
			fontSize: 1,
			sG: 0,
			aF1: aEw.id ? bD.om : bD.o4
		}
	}, this.uX = function(player, s4) {
		return (2 === s4 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uY = function(uZ) {
		return aEt[uZ]
	}, this.aF2 = function(uZ, a4u) {
		return uZ < 3 || 7 === uZ ? aEu[uZ][0] : 4 === uZ ? aEu[uZ][a4u < 1 ? 0 : a4u < 10 ? 1 : 2] : aEu[uZ][a4u < 10 ? 0 : 1]
	}, this.aF3 = function(a4u) {
		return 0 === a4u
	}, this.aEY = function(s4, tH) {
		for (var uT = bp.uS.uT, uS = uT[s4], f8 = uS.length, aB = 0; aB < f8; aB++)
			if (tH === uS[aB].tH) return uS[aB];
		for (var fS = 0; fS < uT.length; fS++)
			if (s4 !== fS)
				for (f8 = (uS = uT[fS]).length, aB = 0; aB < f8; aB++)
					if (tH === uS[aB].tH) return uS[aB];
		return null
	}, this.ub = function(qt) {
		return !!bp.aDw && qt.tH === bp.aDw.tH
	}, this.aF4 = function(uS, aF5, aF6) {
		var a1p = [];
		loop: for (var aB = aF5; aB < aF6; aB++) {
			var a1q = bC.s0.a1r(uS[aB].username);
			if (a1q) {
				for (var fS = a1p.length - 1; 0 <= fS; fS--)
					if (a1q === a1p[fS].name) {
						a1p[fS].gb++;
						continue loop
					} a1p.push({
					name: a1q,
					gb: 1
				})
			}
		}
		if (a1p.sort(function(fR, fS) {
				return fS.gb - fR.gb
			}), 0 === a1p.length) return "";
		for (var qi = a1p[0].name + ": " + a1p[0].gb, aB = 1; aB < a1p.length; aB++) qi += "   " + a1p[aB].name + ": " + a1p[aB].gb;
		return qi
	}, this.aF7 = function(uZ, a4u, aED) {
		return 0 === e6[uZ].length ? "Rank: " + (a4u + 1) : e6[uZ] + " Rank: " + (a4u + 1) + (3 !== uZ && aED < 100 ? "   " + e6[3] + " Rank: " + (aED + 1) : "")
	}, this.aF8 = function(tH) {
		for (var s7 = bp.y.s7, aB = 0; aB < s7.length; aB++) aF9(s7[aB].s8, tH);
		aF9(bp.message.aFA(), tH, 1), bp.sH.aF8(tH)
	}
}

function aE5() {
	var si = 0,
		aFD = 0,
		aFE = 0,
		aFF = null,
		aFG = null;

	function aFJ(qt, aFK, aFL) {
		var qi = qt.username;
		return (qi += "   " + bp.lI.aF7(qt.uZ, qt.a4u, qt.aED)) + function(qt) {
			qt = qt.wu;
			if (qt < 1e3) return "   Gold: " + qt;
			if ((qt %= 1024) < 1e3) return "   Gold: " + qt + "k";
			return "   Gold: " + (qt - 999) + "M"
		}(qt) + ("   IP: " + bH.tM.a0P(qt.aEE, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFL ? aFD : aFI(qt, aFK)])
	}

	function aFI(qt, aFK) {
		return aFD = aFK || bp.uS.aEY(qt.tH) ? 1 : 0
	}
	this.uQ = 0, this.aFH = function() {
		!si || aFD === aFI(aFG) && aFE === aFG.wu || (aFE = aFG.wu, aFF.show(-1, -1, aFJ(aFG, 0, 1), 1, 1, aFG.color))
	}, this.ud = function(e, qt, aFK) {
		var a9i = e.getBoundingClientRect();
		this.show(a9i.left, a9i.top, qt, 0, aFK), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bp.uP && bp.uP.sI(1)
		}), this.uQ = aFK
	}, this.show = function(fF, fH, qt, sm, aFK) {
		aFF = aFF || new sf, aFE = (aFG = qt).wu, aFF.show(fF, fH, aFJ(qt, aFK), sm, 0, aFG.color), si = 1
	}, this.sI = function(st) {
		this.uQ = 0, aFF && aFF.sI(st) && (si = 0, aFG = null)
	}
}

function aE3() {
	function aFQ() {
		bp.y.aEI && 1 === bp.y.s5[2] && t.a6D(29).aFT(), bp.y.aEI = 0, t.a6D(29).aFU(), t.a6D(29).aFV(), bp.uP.aFH()
	}
	this.s7 = new Array(4), this.s5 = [0, 0, 1, 0], this.aEI = 0, this.aFN = [0, 0], this.dh = function() {
		for (var aB = 0; aB < this.s7.length; aB++) this.s7[aB] = new aFO;
		this.s5[0] = bl.eT.data[158].value
	}, this.aFP = function() {
		aFQ(), bp.aDy.dh()
	}, this.aEf = function() {
		bp.aDy.aEf();
		for (var aB = 0; aB < bp.y.s7.length; aB++) {
			var s6 = bp.y.s7[aB];
			0 === s6.uB ? s6.aFW = 0 : (s6.aFX = Math.max(s6.aFX - s6.aFW % 2, 0), s6.aFW++)
		}
		aFQ()
	}, this.aFY = function(s4) {
		this.s5[0] !== s4 || this.s5[2] || t.a6D(29).aFZ()
	}
}

function aE7() {
	var aFa = 0,
		aFb = "",
		aFc = 0,
		aFd = 0,
		aFe = 0;

	function aFg(aEz) {
		b0.aFr.aFs(3, aEz)
	}

	function aFp(gb) {
		aFa = 1, bp.message.aEd({
			id: 6,
			value: gb
		})
	}

	function aFj(r) {
		var aFv = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFv)
	}
	this.a1C = function(r) {
		var aFf, g, aFl;
		if (aFa) return aFa = 0, "yes" === (aFf = r.toLowerCase()) || "y" === aFf ? void aFg(aFb) : void bp.message.aEd({
			id: 5,
			aEy: 7
		});
		!(r.indexOf("@") < 0) && (aFf = aFj(r)) ? (aFb = r, g = function(aFi) {
			for (var f8 = aFi.length, aFt = [0, 0, 0, 0], aB = 0; aB < f8; aB++)
				for (var i = aFi[aB], fR = 0; fR < 4; fR++) i === "@room" + (fR + 1) && (aFt[fR] = 1);
			if ((aFd = bC.r9.a3e(aFt)) % 4 == 0) return bC.r9.a3w(bp.uS.uT);
			for (fR = 0; fR < 4; fR++) aFt[fR] = aFt[fR] ? bp.uS.uT[fR] : [];
			return bC.r9.a3w(aFt)
		}(aFf), function(aFi, aFl, r) {
			if (!aFc) return;
			for (var f8 = aFl.length, aB = 0; aB < f8; aB++) 2 === aFl[aB].id && (r = r.replace(aFi[aFl[aB].eF], "@" + aFl[aB].fa));
			return aFa = 1, aFg((aFb = r).slice(0, 126) + "|"), 1
		}(aFf, aFl = function(aFi) {
			for (var aFl = [], f8 = (aFe = aFc = 0, aFi.length), aB = 0; aB < f8; aB++) {
				var i = aFi[aB],
					lO = i.length;
				bC.s0.startsWith(i, "@[") ? lO <= 9 && bC.s0.a4U(i, "]") && aFl.push({
					id: 0,
					fa: i.substring(2, lO - 1).toUpperCase()
				}) : 6 === lO ? bC.s0.startsWith(i, "@room") || (aFe++, aFl.push({
					id: 1,
					fa: bI.tM.xM(i.substring(1), 5)
				})) : 1 < lO && lO < 5 && 0 <= (lO = b9.data.aDZ(i.substring(1))) && (aFl.push({
					id: 2,
					fa: lO,
					eF: aB
				}), aFc = 1)
			}
			return aFl
		}(aFf), r) || (0 === aFl.length ? aFd || function(aFi) {
			for (var f8 = aFi.length, aB = 0; aB < f8; aB++) {
				var i = aFi[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFf) ? aFp(g.length) : aFg(r) : aFf.length === aFe ? aFg(r) : (function(g, aFl) {
			var lO = aFl.length;
			if (0 === lO) return;
			var f8 = g.length;
			loop: for (var aB = f8 - 1; 0 <= aB; aB--) {
				for (var fR = 0; fR < lO; fR++)
					if (0 === aFl[fR].id) {
						if (aFl[fR].fa === bC.s0.a1r(g[aB].username)) continue loop
					} else if (1 === aFl[fR].id && aFl[fR].fa === g[aB].tH) continue loop;
				g[aB] = g[--f8], g.pop()
			}
		}(g, aFl), aFp(g.length)))) : aFg(r)
	}, this.aFw = function(r) {
		var aFi = aFj(r);
		if (aFi)
			for (var a5 = new RegExp("^[0-9]+$"), f8 = aFi.length, aB = 0; aB < f8; aB++) {
				var i = aFi[aB].substring(1),
					lO = i.length;
				1 <= lO && lO <= 3 && a5.test(i) && (lO = parseInt(i, 10), !isNaN(lO)) && 0 <= lO && lO < b9.data.g.length && (r = r.replace("@" + i, "@" + b9.data.g[lO]))
			}
		return r
	}
}

function aE6() {
	var aFx, aFy = [],
		aFz = -1,
		aG0 = 0,
		aG1 = 0;

	function aG6() {
		aG0 = bh.eW, (3 === this.uh ? aG5 : (aFz = (aFy.length + aFz + 2 * this.uh - 1) % aFy.length, aG4))()
	}

	function aG4() {
		0 !== aFy.length && (aG1 = 0, aFx && aFx.uk(), (aFx = new ue(aG6)).pW(aFz, aFy.length), aFx.show(aFy[aFz]), bp.message.resize())
	}

	function aG5() {
		aG1 = 1, aFx && aFx.uk(), (aFx = new ul(aG4)).pW(aFy.length), aFx.show(), bp.message.resize()
	}
	this.aEd = function(aEw) {
		var qt;
		2 === aEw.id && 3 === aEw.aEy ? bp.lI.aF8(aEw.tH) : (qt = bp.lI.sC(aEw, bp.lI.sD(aEw)), (5 !== aEw.id && 6 !== aEw.id || (t.a6D(29).aG2().sF(qt), 5 === aEw.id)) && (qt = bh.eW < aG0 + 2e4, aFz !== aFy.length - 1 && qt || (aFz = aFy
			.length), aFy.push(aEw), bl.eT.data[14].value || 7 === aEw.id || br.play(), aFx) && (aG1 && (bl.eT.data[13].value || qt) ? aFx.pW(aFy.length) : aG4()))
	}, this.show = function() {
		aG5()
	}, this.sI = function() {
		aFz = aFy.length - 1, aFx && aFx.uk(), aFx = null
	}, this.resize = function() {
		aFx && aFx.resize()
	}, this.aFA = function() {
		return aFy
	}
}

function aE4() {
	var aG7 = null,
		aG8 = null,
		aG9 = 0,
		aGA = 0,
		aGB = null;

	function aGD() {
		0 !== aG8.uZ && (bp.uq.sI(), t.u(8, 29, new tK(25, {
			tL: 0,
			tH: bH.tM.a0P(aG8.tH, 5),
			tI: 0
		}, 29)))
	}

	function aGF() {
		return !bp.aDw || bp.lI.ub(aG8) ? 1 : 0
	}

	function aGE() {
		var fF = aG7.fF,
			fH = aG7.fH,
			aGO = (bp.uq.sI(), aGF());
		aG7 = new um([new w(bq.eC[5][0], function() {
			aGI(5, 0)
		}, aGO), new w(bq.eC[5][1], function() {
			aGI(5, 1)
		}, aGO), new w(bq.eC[5][2], function() {
			aGI(5, 2)
		}, aGO), new w(bq.eC[5][3], function() {
			aGI(5, 3)
		}, aGO)]), aGH(fF, fH), aGA = aG9 = 2
	}

	function aGG() {
		29 === t.tJ && t.a2O().aDx(bH.tM.a0P(aG8.tH, 5))
	}

	function aGI(id, value) {
		5 === id && b0.aGP.aGQ({
			tL: 3,
			tH: bH.tM.a0P(aG8.tH, 5),
			value: value
		})
	}

	function aGH(fF, fH, us) {
		aG7.show(fF, fH, us), bp.uP.show(aG7.fF, aG7.fH, aG8, 1)
	}
	this.aGC = function(e, qt) {
		aG9 = 1, aG8 = qt, aG7 = new um([new w(L(135), aGD, 0 === qt.uZ ? 1 : 0), new w(L(136), aGE, aGF()), new w(L(137), aGG, 0)]), aGH((aGB = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aGB.clientY, 1)
	}, this.a3E = function(code) {
		if (29 !== t.tJ) return !1;
		if (!aG8) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sI();
			else if (bC.s0.startsWith(code, "Numpad") || bC.s0.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aG9) this.aGC(aGB, aG8);
				else {
					if (!aG7) return !1;
					1 === aG9 ? code <= 1 ? aGD() : 2 === code ? aGE() : (aGG(), this.sI()) : (aGI(aGA, bN.iG(code - 1, 0, bq.eC[aGA].length - 1)), this.sI())
				}
		}
		return !0
	}, this.sI = function() {
		aG9 = 0, aG7 && aG7.sI(), aG7 = null, bp.uP.sI()
	}
}

function aFO() {
	this.uB = 0, this.eo = 0, this.mapSeed = 0, this.aEj = 0, this.aGT = 0, this.aGU = 0, this.aGV = 0, this.aEp = 0, this.aFX = 0, this.spawningSeed = 0, this.a2S = 0, this.aEn = 0, this.s8 = [], this.s9 = 1048575, this.aFW = 0, this.aGW = [{
		eo: 0,
		mapSeed: 0,
		aEj: 0,
		eW: 100,
		aEp: 0
	}, {
		eo: 1,
		mapSeed: 0,
		aEj: 1,
		eW: 200,
		aEp: 0
	}, {
		eo: 2,
		mapSeed: 0,
		aEj: 2,
		eW: 300,
		aEp: 0
	}, {
		eo: 3,
		mapSeed: 0,
		aEj: 3,
		eW: 400,
		aEp: 0
	}, {
		eo: 0,
		mapSeed: 0,
		aEj: 9,
		eW: 500,
		aEp: 0
	}, {
		eo: 1,
		mapSeed: 0,
		aEj: 10,
		eW: 600,
		aEp: 0
	}, {
		eo: 2,
		mapSeed: 0,
		aEj: 8,
		eW: 700,
		aEp: 0
	}, {
		eo: 3,
		mapSeed: 0,
		aEj: 3,
		eW: 800,
		aEp: 0
	}]
}

function aE8() {
	var aGX = [],
		tW = [],
		aGY = [];

	function aGa(qt) {
		for (var r = qt.r, aGZ = [];;) {
			var eg = function aGc(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qi = r.substring(position + 1, position + 6);
				if (5 !== qi.length) return aGc(r, position + 1);
				if (bC.s0.startsWith(qi, "room")) return aGc(r, position + 1);
				var aGj = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGj.test(qi)) return aGc(r, position + 1);
				aGj = r.substring(position + 6, position + 7);
				if (1 !== aGj.length) return position;
				qi = new RegExp("^[ :!.]+$");
				if (!qi.test(aGj)) return aGc(r, position + 1);
				return position
			}(r, 0);
			if (-1 === eg) {
				aGZ.push(aGd(r, qt));
				break
			}
			0 === eg ? aGZ.push(aGe(r.substring(1, 6), qt, eg)) : (aGZ.push(aGd(r.substring(0, eg), qt)), aGZ.push(aGe(r.substring(eg + 1, eg + 6), qt, eg))), r = r.substring(eg + 6)
		}
		return aGZ
	}

	function aGe(qi, qt, eg) {
		var aEF = function(qi) {
				var tH = bI.tM.xM(qi, 5),
					aEF = bp.uS.aEY(tH);
				if (aEF) {
					for (aGX.push(aEF); 75 < aGX.length;) aGX.shift();
					return aEF
				}
				for (var aEA = bp.uS.aEA, aB = aEA.length - 1; 0 <= aB; aB--)
					if (aEF = aEA[aB], tH === aEF.tH) return aGX.push(aEF), aEF;
				for (aB = aGX.length - 1; 0 <= aB; aB--)
					if (aEF = aGX[aB], tH === aEF.tH) return aGX.push(aEF), aEF;
				return bp.uS.aEG(tH, qi, 1, 999999, 999999, 0, 0, 0, 0)
			}(qi),
			qi = (0 === eg && 0 === qt.aEw.id && qt.sG && (qt.fontSize = bp.lI.aF2(aEF.uZ, aEF.a4u), qt.aF0 = bp.lI.aF3(aEF.a4u)), document.createElement("span"));
		return qi.textContent = function(aEF, qt, eg) {
				if (aEF.aGh) return aEF.aGh--, eg = 2 === qt.aEw.id || (3 === qt.aEw.id || 4 === qt.aEw.id) && 0 !== eg, aEF.username + (eg ? " (" + aEF.aEO + ")" : "");
				if (qt.aEw.aFC) return "Redacted " + bH.tM.a0P(aEF.tH, 2);
				return aEF.username
			}(aEF, qt, eg), qi.style.display = "inline-block", qi.style.color = bp.lI.uY(aEF.uZ), 11 === aEF.uZ && (qi.style.ua = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), qi.style.cursor = "pointer", qi
			.style.margin = "0", qi.style.font = "inherit", qi.style.minWidth = qi.style.minHeight = "1em", bp.lI.ub(aEF) && (qi.style.textDecoration = "underline"), aEF.uc && (qi.style.textDecorationLine = "underline", qi.style.textDecorationStyle =
				"dotted"), bp.lI.aF3(aEF.a4u) && (qi.style.fontWeight = "bold"), qi.onclick = function(e) {
				bp.uq.aGC(e, aEF)
			}, bL.rT() || (qi.onmouseover = function(e) {
				bp.uP.ud(e.target, aEF)
			}), tW.push(qi), qi
	}

	function aGd(r, qt) {
		var rz = document.createElement("span");
		return rz.textContent = r, rz.style.color = qt.aF1, rz.style.margin = "0", rz.style.font = "inherit", rz
	}

	function aGo(aEF, aEN, tH) {
		tH !== aEF.tH || aEF.aEO || (aEF.aEO = aEF.username, aEF.username = aEN)
	}
	this.uk = function() {
		for (var aB = 0; aB < tW.length; aB++) tW[aB].onclick = tW[aB].onmouseover = null;
		aGY = tW = null
	}, this.transform = function(qt) {
		for (var qg = document.createElement("div"), aGZ = aGa(qt), aB = 0; aB < aGZ.length; aB++) qg.appendChild(aGZ[aB]);
		0 === qt.aEw.id && (qg.vx143 = qt.aEw, aGY.push(qg)), qg.style.margin = "0.6em 0.6em", qt.sG && (qg.style.marginLeft = qg.style.marginRight = "inherit"), qg.style.font = "inherit";
		var aGb = 0 < qt.aEw.id;
		return qt.aF0 && (qg.style.fontWeight = "bold"), aGb && (qg.style.paddingLeft = "0.7em"), aGb && (qg.style.fontStyle = "italic"), qg.style.fontSize = qt.fontSize.toFixed(2) + "em", qg
	}, this.aGm = function(aGn) {
		if (aGn && (2 === aGn.id && 1 === aGn.aEy || 3 === aGn.id && 2 === aGn.aEy)) {
			var tH = 3 === aGn.id ? aGn.target : aGn.tH;
			if (!bp.uS.aEY(tH)) {
				for (var aEN = "Redacted " + bH.tM.a0P(tH, 2), aEA = bp.uS.aEA, aB = aEA.length - 1; 0 <= aB; aB--) aGo(aEA[aB], aEN, tH);
				for (aB = aGX.length - 1; 0 <= aB; aB--) aGo(aGX[aB], aEN, tH)
			}
		}
	}, this.aEP = function(tH) {
		for (var aGp = aGY, aGq = "@" + bH.tM.a0P(tH, 5), aB = aGp.length - 1; 0 <= aB; aB--) {
			var fB = aGp[aB];
			if (fB.vx143.tH === tH || 0 <= fB.vx143.r.indexOf(aGq)) {
				for (; fB.firstChild;) t.removeChild(fB, fB.firstChild);
				for (var aGZ = aGa(bp.lI.sC(fB.vx143, bp.lI.sD(fB.vx143))), fR = 0; fR < aGZ.length; fR++) fB.appendChild(aGZ[fR]);
				aGp.splice(aB, 1)
			}
		}
	}, this.aF8 = function(tH) {
		for (var aGp = aGY, aB = aGp.length - 1; 0 <= aB; aB--) {
			var fB = aGp[aB];
			if (fB.vx143.tH === tH) {
				for (; fB.firstChild;) t.removeChild(fB, fB.firstChild);
				fB.vx143.r = "[Redacted Message]";
				for (var aGZ = aGa(bp.lI.sC(fB.vx143, bp.lI.sD(fB.vx143))), fR = 0; fR < aGZ.length; fR++) fB.appendChild(aGZ[fR]);
				aGp.splice(aB, 1)
			}
		}
	}
}

function cR() {
	var aGr, aGs, aGt;

	function aGy(aB) {
		var button = aY.ra[aB],
			fF = button.fF,
			fH = button.fH,
			i = button.i,
			j = button.j;
		vg.fillStyle = button.aGw, vg.fillRect(fF, fH, i, j), aB === aGr && (vg.fillStyle = aGt, vg.fillRect(fF, fH, i, j)), vg.lineWidth = be.a06, vg.strokeStyle = aGs, vg.strokeRect(fF, fH, i, j),
			function(button) {
				var fF = button.fF,
					fH = button.fH,
					i = button.i,
					j = button.j;
				bC.r1.textAlign(vg, 1), bC.r1.textBaseline(vg, 1), vg.font = button.font, vg.fillStyle = aGs, vg.fillText(button.aEz, Math.floor(fF + i / 2), Math.floor(fH + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fH = 0, this.gap = 0, this.dh = function() {
		aGr = -1, aGs = bD.o4, aGt = "rgba(255,255,255,0.16)", this.ra = new Array(7), this.j = Math.floor((a0.a1.iH() ? .123 : .093) * h.iI), this.i = Math.floor((a0.a1.iH() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGu = Math.floor(.26 * this.j),
			aGv = bC.r1.sq(1, aGu);
		this.ra[0] = {
			fF: 0,
			fH: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEz: "Multiplayer",
			font: aGv,
			aGw: "rgba(22,88,22,0.8)",
			fontSize: aGu
		}, aGu = Math.floor(.18 * this.j), aGv = bC.r1.sq(1, aGu), this.ra[1] = {
			fF: 0,
			fH: 0,
			i: this.i - this.ra[0].i - this.gap,
			j: this.j,
			aEz: "Single Player",
			font: aGv,
			aGw: "rgba(22,88,88,0.8)",
			fontSize: aGu
		}, this.ra[2] = {
			fF: 0,
			fH: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEz: "",
			font: this.ra[1].font,
			aGw: "rgba(100,0,0,0.8)",
			fontSize: this.ra[1].fontSize
		}, this.ra[3] = {
			fF: 0,
			fH: 0,
			i: this.i,
			j: this.j,
			aEz: "Back",
			font: this.ra[0].font,
			aGw: "rgba(0,0,0,0.8)",
			fontSize: this.ra[0].fontSize
		}, this.ra[4] = {
			fF: 0,
			fH: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEz: "The game was updated!",
			font: this.ra[1].font,
			aGw: "rgba(100,0,0,0.8)",
			fontSize: this.ra[1].fontSize
		}, this.ra[5] = {
			fF: 0,
			fH: 0,
			i: this.ra[0].i,
			j: Math.floor(.8 * this.j),
			aEz: "Reload",
			font: this.ra[0].font,
			aGw: "rgba(0,100,0,0.8)",
			fontSize: this.ra[0].fontSize
		}, this.ra[6] = {
			fF: 0,
			fH: 0,
			i: this.ra[1].i,
			j: this.ra[5].j,
			aEz: "Back",
			font: this.ra[0].font,
			aGw: "rgba(0,0,0,0.8)",
			fontSize: this.ra[0].fontSize
		}, this.aAh()
	}, this.aAh = function() {
		this.fH = Math.floor(.54 * h.j), this.ra[0].fF = Math.floor(.5 * h.i - .5 * this.i), this.ra[1].fF = this.ra[0].fF + this.ra[0].i + this.gap, this.ra[2].fF = this.ra[3].fF = this.ra[0].fF, this.ra[4].fF = this.ra[5].fF = this.ra[0].fF,
			this.ra[6].fF = this.ra[1].fF, this.ra[0].fH = Math.floor(.54 * h.j), this.ra[1].fH = this.ra[0].fH, this.ra[2].fH = Math.floor((h.j - this.ra[2].j - this.ra[3].j - this.gap) / 2), this.ra[3].fH = this.ra[2].fH + this.ra[2].j + this
			.gap, this.ra[4].fH = Math.floor((h.j - this.ra[4].j - this.ra[5].j - this.gap) / 2), this.ra[5].fH = this.ra[6].fH = this.ra[4].fH + this.ra[4].j + this.gap
	}, this.aGx = function() {
		aGy(0), aGy(1)
	}, this.aGz = function() {
		aGy(2), aGy(3)
	}, this.aH0 = function() {
		aGy(4), aGy(5), aGy(6)
	}, this.a2g = function(fF, fH, mp) {
		var aB = -1;
		return 0 === aa.a2K() ? aB = this.a3A(fF, fH, 0, 2) : 3 === aa.a2K() ? aB = this.a3A(fF, fH, 3, 1) : 5 === aa.a2K() && (aB = this.a3A(fF, fH, 5, 2)), aGr !== aB && (aGr = aB, mp) && (bh.dp = !0), -1 !== aB && (aT.s2(), !0)
	}, this.a3A = function(fF, fH, aH1, size) {
		for (var aB = aH1; aB < aH1 + size; aB++)
			if (fF >= this.ra[aB].fF && fH >= this.ra[aB].fH && fF <= this.ra[aB].fF + this.ra[aB].i && fH <= this.ra[aB].fH + this.ra[aB].j) return aB;
		return -1
	}
}

function cS() {
	var aH3, aH4, a8J, aH5, aH6, aH7, aH8, aH9, aHA, a8I, aHB, aHC, aHD, aHE = 1,
		aHF = 0,
		aHG = 0;

	function aHK(aHL) {
		aHL ? aHD = (aHD + 1) % b0.y.aHM : (b0.y.close(aHD, 3280), aHE ? aHE = 0 : (aHG = 1 - aHG, 0 === (aHF = (aHF + 1) % 2) && (aHD = (aHD + 1) % b0.y.aHM, b0.y.close(aHD, 3280)))), aHC = bh.eW, aZ.aHJ = aHG, b0.y.aHN(aHD, 4, 1) && b0.aFr.aHO(aHD)
	}

	function aHP() {
		0 === aHD ? o.a2V(3249) : aHK()
	}

	function aHU(fH, aAP, uB) {
		var nU = Math.floor((h.i - aH5) / 2) + aH8,
			nh = nU + Math.floor(uB * (aH5 - 2 * aH8));
		vg.lineWidth = aAP, vg.beginPath(), vg.moveTo(nU, fH), vg.lineTo(nh, fH), vg.lineTo(Math.floor(nU - aH8 + uB * aH5), fH + a8J), vg.lineTo(nU - aH8, fH + a8J), vg.closePath()
	}
	this.aHH = 1, this.aHI = 0, this.aHJ = 0, this.dh = function() {
		aa.setState(6), aH3 = 0, aH4 = 1, aH9 = "rgba(0,220,120,0.4)", aHA = "rgba(0,0,0,0.8)", this.resize(), bh.dp = !0, aHE = 1, aHF = 0, aHD = this.aHH - 1, aHG = 0 === this.aHI ? l.e2 ? 1 : 0 : this.aHI - 1, aHK(1)
	}, this.resize = function() {
		aH5 = Math.floor((a0.a1.iH() ? .5 : .25) * h.iI), aH6 = aH5 + 12, a8J = Math.floor(.125 * aH5), aH8 = 3 * a8J, aH7 = Math.floor(.225 * aH5), aHB = Math.floor(.3 * a8J), a8I = bC.r1.sq(0, aHB)
	}, this.a2R = function(a2F) {
		a2F === aHD && aHP()
	}, this.hL = function(fF, fH) {
		var nU = Math.floor((h.i - aH6) / 2),
			nV = Math.floor(.5 * (h.j - be.gap - a8J - aH7)) + a8J + be.gap;
		return nU < fF && fF < nU + aH6 && nV < fH && fH < nV + aH7 && (this.a3L(), aY.a2g(fF, fH, !1), !0)
	}, this.a3L = function() {
		b0.y.a2W(3260), t.y.z()
	}, this.eb = function() {
		6 === aa.a2K() && (bh.eW > aHC + 12e3 && aHP(), 100 < (aH3 += .07 * aH4 * (aH3 < 16 ? 5 + aH3 : 84 < aH3 ? 105 - aH3 : 17)) ? (aH3 = 100, aH4 = -1) : aH3 < 0 && (aH3 = 0, aH4 = 1), aH9 = "rgba(0," + Math.floor(190 - 1.9 * aH3) + "," +
			Math.floor(120 - 1.2 * aH3) + "," + (.4 + .004 * aH3) + ")", aHA = "rgba(0," + Math.floor(1.9 * aH3) + "," + Math.floor(1.2 * aH3) + "," + (.8 - .004 * aH3) + ")", bh.dp = !0)
	}, this.vf = function() {
		var fF = Math.floor((h.i - aH6) / 2),
			fH = Math.floor(.5 * (h.j - be.gap - a8J - aH7));
		! function(title, fH, aAP, uB) {
			vg.fillStyle = aHA, aHU(fH, aAP, 1), vg.fill(), vg.fillStyle = aH9, aHU(fH, aAP, uB), vg.fill(), vg.strokeStyle = bD.o4, aHU(fH, aAP, 1), vg.stroke(),
				function(aHW, fH) {
					bC.r1.textAlign(vg, 1), bC.r1.textBaseline(vg, 1), vg.font = a8I, vg.fillStyle = bD.o4, vg.fillText(aHW, Math.floor(.5 * h.i), Math.floor(fH + .58 * a8J))
				}(title, fH)
		}(L(138), fH, 3, aH3 / 100),
		function(fF, fH, i, j, aEz) {
			vg.fillStyle = bD.nz, vg.fillRect(fF, fH, i, j), vg.lineWidth = 3, vg.strokeStyle = bD.o4, vg.strokeRect(fF, fH, i, j);
			var f8 = Math.floor(.3 * j);
			bC.r1.textAlign(vg, 1), bC.r1.textBaseline(vg, 1), vg.font = bC.r1.sq(0, f8), vg.fillStyle = bD.o4, vg.fillText(aEz, Math.floor(fF + i / 2), Math.floor(fH + j / 2 + .1 * f8))
		}(fF, fH + a8J + be.gap, aH6, aH7, L(40))
	}
}

function cT() {
	var a2B = 0;
	this.dh = function() {
		aY.dh(), a2B = 0
	}, this.setState = function(aHX) {
		a2B = aHX
	}, this.a2K = function() {
		return a2B
	}, this.aHY = function() {
		this.setState(8), t.x()
	}, this.a3E = function(e) {
		if (!bU.xc) return !1;
		if (!(bh.eW < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHZ()) return !0;
				if ("Enter" === e.key) {
					if (0 === a2B) return !0;
					if (7 === a2B) return !0
				}
			}
			return !1
		}
	}, this.aHa = function() {
		bb.resize()
	}, this.aHZ = function() {
		return !!bb.sI()
	}, this.hL = function(fF, fH) {
		!bU.xc || bb.hL(fF, fH) || 6 === a2B && aZ.hL(fF, fH) || ba.hL(fF, fH) || aT.hL(fF, fH)
	}, this.a2g = function(fF, fH) {
		!aT.aAa && aY.a2g(fF, fH, !0) || aT.a2g(fF, fH)
	}, this.click = function(fF, fH) {
		aT.a35()
	}, this.a2j = function(fF, fH, deltaY) {}, this.aHb = function() {
		aY.aAh(), bh.dp = !0
	}, this.vf = function() {
		8 !== a2B && 10 !== a2B && (vg.imageSmoothingEnabled = !0, this.zB(), 0 !== a2B && (aT.vf(), aO.vf(), this.aHc(), ba.vf()), 0 !== a2B && 6 === a2B && aZ.vf(), bb.vf(), t.vf())
	}, this.zB = function() {
		var aHe, aHd;
		if (__fx.makeMainMenuTransparent) vg.clearRect(0, 0, h.i, h.j);
		else bU.xc ? (aHd = h.i / bU.fJ, aHe = h.j / bU.fK, vg.setTransform(aHd = aHe < aHd ? aHd : aHe, 0, 0, aHd, Math.floor((h.i - aHd * bU.fJ) / 2), Math.floor((h.j - aHd * bU.fK) / 2)), vg.drawImage(bU.xe, 0, 0), vg.setTransform(1, 0, 0, 1,
			0, 0), vg.fillStyle = bD.nz) : vg.fillStyle = bD.nv, vg.fillRect(0, 0, h.i, h.j)
	}, this.aHc = function() {
		var fH = Math.floor(.3 * h.j),
			canvas = ab.aHf("territorial.io"),
			i9 = (i9 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i9,
			fF = (vg.globalAlpha = .15, vg.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i9 * canvas.width))),
			fF = Math.floor(fF / i9),
			fH = Math.floor(fH - .5 * canvas.height * i9),
			fH = Math.floor(fH / i9);
		vg.setTransform(i9, 0, 0, i9, fF, fH), vg.drawImage(canvas, fF, fH), vg.setTransform(1, 0, 0, 1, 0, 0), vg.globalAlpha = 1, vg.imageSmoothingEnabled = !0
	}
}

function ct() {
	this.aEn = 0;
	var aHh, aHi, aHj, aHk, aHl, aHm = this.aHg = 0;

	function aHp() {
		aHk = aHl = null, aHm = 0
	}
	this.dh = function(s6, aEk, aEl) {
		t.x(), bp.uk(), aa.setState(10), aHk = s6, aHl = aEk, aHm = aEl, this.aEn = s6.aEn, this.aHg = aEl, aHh = 0, aHi = bh.eW + 4500, b0.y.a2S = s6.a2S, b0.y.a2I === s6.a2S ? (console.log("direct pass"), aHj = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a2I, 3247), aHj = 2, b0.y.aHN(s6.a2S, 5, 2) && b0.pT.aHn()), vg.imageSmoothingEnabled = !0, aa.zB();
		aEk = ab.aHf("loading"), aEl = (a0.a1.iH() ? .396 : .25) * h.iI / aEk.width;
		vg.setTransform(aEl, 0, 0, aEl, Math.floor((h.i - aEl * aEk.width) / 2), Math.floor((h.j - aEl * aEk.height) / 2)), vg.imageSmoothingEnabled = !1, vg.drawImage(aEk, 0, 0), vg.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mn = function() {
		0 < aHj && bh.eW > aHi && (aHj--, aHi += 4500, 0 === bh.aHq) && 0 === bh.kQ() && b0.y.aHN(b0.y.a2S, 5, 2)
	}, this.aHr = function() {
		return 10 === aa.a2K() && (bp.aDz.aEo(aHk, aHl, aHm), aHp(), !0)
	}, this.aHs = function() {
		10 === aa.a2K() && 2 <= ++aHh && (bp.aDz.aEo(aHk, aHl, aHm), aHp())
	}
}

function cU() {
	var aHu, canvas, a1U, aHv;

	function aI1(eF, name, aI2, qi) {
		a1U[eF] = name, canvas[eF] = new Image, canvas[eF].onload = function() {
			! function(eF, aI2) {
				var a4z, a50 = null;
				7 === aI2 ? a4z = bC.a3R.a52 : 8 === aI2 ? (a4z = bC.a3R.a55, a50 = .1) : 3 === aI2 ? (a4z = bC.a3R.a53, a50 = .06) : 5 === aI2 ? a4z = bC.a3R.a56 : 6 === aI2 ? a4z = bC.a3R.a51 : 4 === aI2 && (a4z = bC.a3R.a57);
				canvas[eF] = bC.a3R.a4y(canvas[eF], a4z, a50)
			}(eF, aI2), aI4()
		}, canvas[eF].onerror = function(e) {
			console.error("Error loading image at index", eF, "Error:", e), aI4()
		}, canvas[eF].src = "data:image/png;base64," + qi
	}

	function aI4() {
		aHu--, aHy()
	}

	function aHy() {
		0 === aHu && (aHu = -1, aI0(), bh.dp = !0, canvas[7] = aHv, canvas[8] = aHv, canvas[9] = aHv, canvas[10] = aHv, 5 === t.tJ) && t.a2O().aI6.resize()
	}

	function aI0() {
		aL.a6O(), ba.aDp([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xh = new zd, aj.xh.dh(), aw.di()
	}
	this.dh = function() {
		if (void 0 === canvas) {
			aHu = 23, canvas = new Array(aHu), a1U = new Array(aHu), (aHv = document.createElement("canvas")).width = 1;
			for (var aB = aHu - (aHv.height = 1); 0 <= aB; aB--) canvas[aB] = aHv;
			aI0(), aI1(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aI1(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aI1(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(3, "orders", 6,
					"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"
					), aI1(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aI1(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aI1(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aI1(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(8,
					"googleplay", 3,
					"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"
					), aI1(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aI1(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI1(14, "bestPlayer", 5,
					"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"
					), aI1(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aI1(16, "apple", 3,
					"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"
					), aI1(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aI1(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aI1(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aI1(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aI1(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aI1(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eF) {
		return canvas[eF]
	}, this.aHf = function(name) {
		for (var aB = a1U.length - 1; 0 <= aB; aB--)
			if (a1U[aB] === name) return canvas[aB];
		return aHv
	}, this.tl = function() {
		return aHu <= 0
	}, this.aHx = function() {
		aHu = 0, aHy()
	}
}

function cV() {
	var aI7 = [
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
		aI8 = [
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
	this.aI9 = null, this.aIA = null, this.aIB = null, this.aIC = null, this.aID = null, this.aIE = null, this.aIF = null, this.aIG = null, this.aIH = null, this.aII = null;

	function aIP(jj, nm) {
		for (var aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = jj; aB < nm; aB++) aI9[aB] = bN.fZ(64 * ay.random(), ay.value(100)) << 2, aIA[aB] = bN.fZ(64 * ay.random(), ay.value(100)) << 2, aIB[aB] = bN.fZ(64 * ay.random(), ay.value(100)) << 2
	}

	function aIO(jj, nm) {
		for (var colorsData = aD.data.colorsData, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = jj; aB < nm; aB++) {
			var fa = colorsData[aB];
			aI9[aB] = 4 * (fa >> 12), aIA[aB] = 4 * (fa >> 6 & 63), aIB[aB] = 4 * (63 & fa)
		}
	}

	function aIg(em, aIi) {
		aDB[em] = 0, aDB[em + 1] = 0, aDB[em + 2] = aIi, aDB[em + 3] = 0, aIj(em)
	}

	function aIj(em) {
		var fF;
		bd.nu || (fF = ac.zC(em), em = ac.zD(em), bd.nu = fF >= bc.aDA[0] && fF <= bc.aDA[2] && em >= bc.aDA[1] && em <= bc.aDA[3])
	}
	this.fA = new Int32Array(4), this.aIM = new Int32Array(8), this.di = function() {
		var fA = this.fA,
			fA = (fA[0] = -4 * bU.fJ, fA[1] = 4, fA[2] = -fA[0], fA[3] = -fA[1], this.aIM);
		fA[0] = -4 * bU.fJ - 4, fA[1] = -4 * bU.fJ, fA[2] = -4 * bU.fJ + 4, fA[3] = -4, fA[4] = 4, fA[5] = 4 * bU.fJ - 4, fA[6] = 4 * bU.fJ, fA[7] = 4 * bU.fJ + 4
	}, this.dh = function() {
		if (this.aI9 ? (this.aI9.fill(0), this.aIA.fill(0), this.aIB.fill(0), this.aIC.fill(0), this.aID.fill(0), this.aIE.fill(0), this.aIF.fill(0), this.aIG.fill(0), this.aIH.fill(0), this.aII.fill(0), this.a9Y.fill(0)) : (this.aI9 =
				new Uint8Array(aD.f5), this.aIA = new Uint8Array(aD.f5), this.aIB = new Uint8Array(aD.f5), this.aIC = new Uint8Array(aD.f5), this.aID = new Uint8Array(aD.f5), this.aIE = new Uint8Array(aD.f5), this.aIF = new Uint8Array(aD.f5),
				this.aIG = new Uint8Array(aD.f5), this.aIH = new Uint8Array(aD.f5), this.aII = new Uint8Array(aD.f5), this.a9Y = new Uint8Array(aD.f5)), aD.i2)
			for (var aBo = bi.aBo, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = aD.f5 - 1; 0 <= aB; aB--) {
				var eg = aBo[aB],
					lO = bN.fZ((aI8[eg][3] + 1) * ay.random(), ay.value(100));
				aI9[aB] = aI7[eg][0] + lO * aI8[eg][0], aIA[aB] = aI7[eg][1] + lO * aI8[eg][1], aIB[aB] = aI7[eg][2] + lO * aI8[eg][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aIO(0, aD.kT), aIP(aD.kT, aD.f5)) : aIP(0, aD.f5) : aIO(0, aD.f5);
		! function() {
			var aB, fB, aI9 = ac.aI9,
				aIA = ac.aIA,
				aIB = ac.aIB;
			for (aB = aD.f5 - 1; 0 <= aB; aB--) fB = bN.fZ(aI9[aB] + aIA[aB] + aIB[aB], 3), aI9[aB] += aIV(fB - aI9[aB], 2), aIA[aB] += aIV(fB - aIA[aB], 2), aIB[aB] += aIV(fB - aIB[aB], 2), aI9[aB] -= aI9[aB] % 4, aIA[aB] -= aIA[aB] % 4, aIB[
				aB] -= aIB[aB] % 4
		}(),
		function() {
			for (var f8 = aD.f5, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aIC = ac.aIC, aB = 0; aB < f8; aB++) aI9[aB] += aB >> 7, aIA[aB] += aB >> 5 & 3, aIB[aB] += aB >> 3 & 3, aIC[aB] = 7 & aB
		}(), this.aIS(),
			function() {
				for (var f8 = aD.f5, aID = ac.aID, aIE = ac.aIE, aIF = ac.aIF, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = 0; aB < f8; aB++) {
					var eE = aI9[aB],
						th = aIA[aB],
						fS = aIB[aB];
					60 <= eE + th + fS ? (aID[aB] = Math.max(eE - 40, 3 & eE), aIE[aB] = Math.max(th - 40, 3 & th), aIF[aB] = Math.max(fS - 40, 3 & fS)) : (aID[aB] = eE + 40, aIE[aB] = th + 40, aIF[aB] = fS + 40)
				}
			}(),
			function() {
				for (var f8 = aD.f5, aIG = ac.aIG, aIH = ac.aIH, aII = ac.aII, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = 0; aB < f8; aB++) {
					var eE = aI9[aB],
						th = aIA[aB],
						fS = aIB[aB];
					688 <= eE + th + fS ? (aIG[aB] = eE - 88, aIH[aB] = th - 88, aII[aB] = fS - 88) : (aIG[aB] = Math.min(eE + 88, 252 + (3 & eE)), aIH[aB] = Math.min(th + 88, 252 + (3 & th)), aII[aB] = Math.min(fS + 88, 252 + (3 & fS)))
				}
			}()
	}, this.a8Q = function(player) {
		var g = bQ.fh;
		return g[0] = this.aI9[player], g[1] = this.aIA[player], g[2] = this.aIB[player], g
	}, this.aIS = function() {
		for (var aB = aD.f5 - 1; 0 <= aB; aB--) this.a9Y[aB] = this.aI9[aB] + this.aIA[aB] + this.aIB[aB] < 280 ? 0 : 1
	}, this.zC = function(em) {
		return bN.fZ(em, 4) % bU.fJ
	}, this.zD = function(em) {
		return bN.fZ(em, 4 * bU.fJ)
	}, this.yk = function(fF, fH) {
		return Math.floor(4 * (fH * bU.fJ + fF))
	}, this.z0 = function(em) {
		var fA = this.fA;
		return this.aIW(em + fA[0]) || this.aIW(em + fA[1]) || this.aIW(em + fA[2]) || this.aIW(em + fA[3])
	}, this.fW = function(em) {
		var fA = this.fA;
		return this.fD(em + fA[0]) || this.fD(em + fA[1]) || this.fD(em + fA[2]) || this.fD(em + fA[3])
	}, this.yy = function(em, player) {
		var fA = this.fA;
		return this.aIX(em + fA[0], player) || this.aIX(em + fA[1], player) || this.aIX(em + fA[2], player) || this.aIX(em + fA[3], player)
	}, this.aIY = function(aB, aIZ, aIa, aIb) {
		this.aI9[aB] = aIZ >> 16, this.aIA[aB] = aIZ >> 8 & 255, this.aIB[aB] = 255 & aIZ, this.aID[aB] = aIa >> 16, this.aIE[aB] = aIa >> 8 & 255, this.aIF[aB] = 255 & aIa, this.aIG[aB] = aIb >> 16, this.aIH[aB] = aIb >> 8 & 255, this.aII[aB] =
			255 & aIb
	}, this.aIc = function(aB) {
		return [(this.aI9[aB] << 16) + (this.aIA[aB] << 8) + this.aIB[aB], (this.aID[aB] << 16) + (this.aIE[aB] << 8) + this.aIF[aB], (this.aIG[aB] << 16) + (this.aIH[aB] << 8) + this.aII[aB]]
	}, this.gi = function(em) {
		return 208 <= aDB[em + 3]
	}, this.z6 = function(player, em) {
		return this.gi(em) && this.z9(player, em)
	}, this.z9 = function(player, em) {
		return player === this.f0(em)
	}, this.aId = function(em) {
		return 208 <= aDB[em + 3] && aDB[em + 3] < 224
	}, this.je = function(em) {
		return 224 <= aDB[em + 3] && aDB[em + 3] < 248
	}, this.aIe = function(em) {
		return 248 <= aDB[em + 3]
	}, this.yz = function(em) {
		for (var fA = this.fA, aB = 3; 0 <= aB; aB--)
			if (this.iM(em + fA[aB])) return !0;
		return !1
	}, this.f3 = function(em) {
		return this.gi(em) || this.ez(em)
	}, this.iM = function(em) {
		return 0 === aDB[em + 3] && 2 === aDB[em + 2]
	}, this.ez = function(em) {
		return 0 === aDB[em + 3] && 1 === aDB[em + 2]
	}, this.xp = function(em) {
		return 0 === aDB[em + 3] && 3 === aDB[em + 2]
	}, this.fD = function(em) {
		return 0 === aDB[em + 3] && 5 === aDB[em + 2]
	}, this.aIW = function(em) {
		return 0 === aDB[em + 3] && 3 <= aDB[em + 2]
	}, this.eq = function(em) {
		return (aDB[em] >> 1 << 8) + aDB[em + 1]
	}, this.aIf = function(em) {
		return 1 & aDB[em]
	}, this.aIX = function(em, player) {
		return this.ez(em) || this.gi(em) && player !== this.f0(em)
	}, this.f0 = function(em) {
		return ((3 & aDB[em]) << 7) + ((3 & aDB[em + 1]) << 5) + ((3 & aDB[em + 2]) << 3) + (7 & aDB[em + 3])
	}, this.z7 = function(em) {
		aIg(em, 1)
	}, this.aIh = function(em) {
		aIg(em, 2)
	}, this.yl = function(em, player) {
		aDB[em] = this.aI9[player], aDB[em + 1] = this.aIA[player], aDB[em + 2] = this.aIB[player], aDB[em + 3] = 208 + this.aIC[player], aIj(em)
	}, this.gd = function(em, player) {
		aDB[em] = this.aID[player], aDB[em + 1] = this.aIE[player], aDB[em + 2] = this.aIF[player], aDB[em + 3] = 224 + this.aIC[player], aIj(em)
	}, this.jf = function(em, player) {
		aDB[em] = this.aIG[player], aDB[em + 1] = this.aIH[player], aDB[em + 2] = this.aII[player], aDB[em + 3] = 248 + this.aIC[player], aIj(em)
	}
}

function cu() {
	var aIk = 0,
		aIm = new Uint16Array(64);

	function wI(a6S) {
		aIk -= 2;
		for (var aB = a6S; aB < aIk; aB += 2) aIm[aB] = aIm[aB + 2], aIm[aB + 1] = aIm[aB + 3]
	}
	this.dh = function() {
		aIk = 0
	}, this.eb = function() {
		var aB, jc, ik;
		if (0 !== aIk)
			if (0 === ag.n3[aD.es]) aIk = 0;
			else if (0 === ad.gF(aD.es)) aIk = 0;
		else
			for (aB = aIk - 2; 0 <= aB; aB -= 2)(jc = aIm[aB]) < aD.f5 && 0 === ag.n3[jc] ? wI(aB) : (ik = aIm[aB + 1], (jc >= aD.f5 && bu.aIo(aD.es) || jc < aD.f5 && bu.aIp(aD.es, jc)) && (bA.hY.hf(ik, jc), wI(aB)))
	}, this.hg = function(jc, ik) {
		! function(jc, ik) {
			for (var aB = 0; aB < aIk; aB += 2)
				if (aIm[aB] === jc) return aIm[aB + 1] = Math.min(aIm[aB + 1] + ik, 1023), 1;
			return
		}(jc, ik) && 64 !== aIk && (aIm[aIk] = jc, aIm[aIk + 1] = ik, aIk += 2)
	}
}

function cW() {
	function aIx(player) {
		var eX;
		bC.gU.a4a(player) && (eX = ag.hA[player] - ag.a4f[player] + ad.aIz(player), bf.gY(player, Math.abs(eX), eX < 0 ? 18 : 12)), ag.hA[player] = 0, ag.a4f[player] = 0
	}

	function aJ6() {
		aX.show(!1, !1, !1, !0), aW.aCK(), bT.a0t.a1f()
	}

	function aIt(player, aJ5) {
		for (var aB = aJ5.length - 1; 0 <= aB; aB--) ad.aJ8(aJ5[aB], player)
	}

	function aIw(player) {
		var j1 = ag.j1,
			j2 = ag.j2,
			j3 = ag.j3,
			j4 = ag.j4,
			fJ = bU.fJ;
		if (ag.gw[player]) {
			ag.gw[player] = 0;
			for (var nU = j1[player], nV = j3[player], fF = j2[player]; nU <= fF; fF--)
				for (var fH = j4[player]; nV <= fH; fH--) {
					var gg = 4 * (fH * fJ + fF);
					ac.z6(player, gg) && ac.z7(gg)
				}
		}
		j2[player] = j4[player] = 0, j1[player] = j3[player] = Math.max(fJ, bU.fK)
	}
	this.dq = function(gg) {
		var player, eX = ag.gw[gg] + ag.yg[gg];
		bP.y.kX[gg] ? eX && (aIt(player = gg, ad.aIu(player)), af.aIv(player), aIw(player), aF.gW(player), ad.clear(player), aIx(player), function(player) {
			ag.yg[player] = 0, ag.ga[player] = [], ag.go[player] = [], ag.gp[player] = [], ag.fX[player] = []
		}(player)) : !eX && ag.ga[gg].length || this.aIs(gg)
	}, this.aIs = function(player) {
		! function(player) {
			bC.gU.jq(player) || (ag.a1j[player] = bk.a1y.aJ4(), aD.a1A++);
			var aJ5 = ad.aIu(player);
			0 === aJ5.length ? bC.gU.a4X(player) && aJ6() : (aIt(player, aJ5), function(player, aJ5) {
				var aJA = aJ5[function(aJ5) {
					var aB, eF = 0;
					for (aB = aJ5.length - 1; 1 <= aB; aB--) ag.gw[aJ5[aB]] > ag.gw[aJ5[eF]] && (eF = aB);
					return eF
				}(aJ5)];
				9 === aD.kl && (1 === bi.f6[player] ? ay.kL(8) && az.aJB(aJA) : aE.hr[player] && (aN.a7r(765, 0), aN.za(280, L(139, [ag.zb[aJA], ag.zb[player]]), 765, aJA, bD.nv, bD.pH, -1, !0)));
				if (bC.gU.a4X(player)) aJ6(), aN.a1L(aJA, 1);
				else {
					for (var aB = aJ5.length - 1; 0 <= aB; aB--)
						if (bC.gU.a4a(aJ5[aB]) && (bf.mz[4 - bC.gU.jq(player)]++, bC.gU.a4X(aJ5[aB]))) return aN.a1L(player, 0);
					bC.gU.jq(player) || aN.a7b(0, player, aJA)
				}
			}(player, aJ5))
		}(player), af.aIv(player), aIw(player), aIx(player),
			function(player) {
				ag.n3[player] = 0, ag.ga[player] = null, ag.go[player] = null, ag.gp[player] = null, ag.fX[player] = null
			}(player), aF.gW(player), ad.clear(player), bP.aJ2.aJ3(player)
	}
}

function cz() {
	var input;

	function aJC(e) {
		(e = e.target.files) && 0 < e.length && b6.aJF(e[0])
	}

	function aJJ(e) {
		var eg = new Image;
		eg.onload = aJK, eg.src = e.target.result
	}

	function aJK(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJM = bl.eT.data[162].value,
			max = Math.min(bU.aJN, aJM),
			aJM = (max = a0.id || bL.rT() ? Math.min(1400, aJM) : max) / Math.max(i, j);
		if (aJM < 1 && (i = Math.floor(aJM * i + .125), j = Math.floor(aJM * j + .125)), max < i || max < j || i < 10 || j < 10) aJM = "Invalid Image Dimensions!", a0.wP ? a0.wP.showToast(aJM) : alert(aJM);
		else {
			for (var max = document.createElement("canvas"), aJM = (max.width = i, max.height = j, max.getContext("2d")), aJP = document.createElement("canvas"), aJQ = (aJP.width = e.width, aJP.height = e.height, aJP.getContext("2d")), e = (aJQ
					.drawImage(e, 0, 0), aJQ.getImageData(0, 0, aJP.width, aJP.height)), aJQ = aJM.createImageData(i, j), src = e.data, aJT = aJQ.data, aA9 = aJP.width / i, aAA = aJP.height / j, fH = 0; fH < j; fH++)
				for (var fF = 0; fF < i; fF++) {
					var aJU = Math.floor(fF * aA9),
						aJU = 4 * (Math.floor(fH * aAA) * aJP.width + aJU),
						aJX = 4 * (fH * i + fF);
					aJT[aJX] = src[aJU], aJT[1 + aJX] = src[1 + aJU], aJT[2 + aJX] = src[2 + aJU], aJT[3 + aJX] = 255
				}
			aJM.putImageData(aJQ, 0, 0), 20 === t.tJ && t.a2O().aJK(max)
		}
	}
	this.dh = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJC
	}, this.uk = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJD = function() {
		input.click()
	}, this.aJF = function(aJG) {
		var g = aJG.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJJ, g.readAsDataURL(aJG))
	}
}

function cx() {
	this.aJY = null, this.dh = function() {
		10 !== aD.kl ? this.aJY = null : this.aJY = new Uint32Array(aD.f5)
	}, this.eb = function() {
		10 === aD.kl && this.lI()
	}, this.lI = function() {
		for (var gg, target, aCX, aJY = this.aJY, a0w = al.l4, a4g = ag.hA, aB = al.kz - 1; 0 <= aB; aB--)(gg = a0w[aB]) >= aD.kT || (target = Math.max(bN.fZ(a4g[gg], 4), 2048), aCX = Math.max(ae.aCY(gg), 100), aJY[gg] += bN.fZ(aCX * target,
			1e4), aJY[gg] > target && (aJY[gg] = target))
	}, this.a4m = function(player, hr) {
		return hr > this.aJY[player] ? (hr = this.aJY[player], this.aJY[player] = 0) : this.aJY[player] -= hr, hr
	}
}

function d0() {
	var aJZ = -1,
		aJa = null,
		aJb = -1,
		vB = 4;

	function aJd() {
		aM.a6w() ? bd.aD9() : bd.a1K()
	}

	function aJl(eg, fB) {
		var eE = eg >> 16,
			th = eg >> 8 & 255,
			eg = 255 & eg,
			aJm = 255 - fB,
			aJm = (aJm < eE && aJm < th && aJm < eg && (fB = -fB), aJZ >> 7),
			aJo = aJZ >> 5 & 3,
			aJp = aJZ >> 3 & 3;
		return (Math.max(Math.min(eE + fB, 252 + aJm), aJm) << 16) + (Math.max(Math.min(th + fB, 252 + aJo), aJo) << 8) + Math.max(Math.min(eg + fB, 252 + aJp), aJp)
	}

	function aJc() {
		return -1 !== aJZ && (ac.aIY(aJZ, aJa[0], aJa[1], aJa[2]), aJi(aJZ), aJZ = -1)
	}

	function aJi(player) {
		bh.dp = !0;
		for (var j1 = ag.j1[player], j3 = ag.j3[player], j2 = ag.j2[player], j4 = ag.j4[player], fH = j3; fH <= j4; fH++)
			for (var fF = j1; fF <= j2; fF++) {
				var em = ac.yk(fF, fH);
				ac.z6(player, em) && (ac.aIe(em) ? ac.jf(em, player) : ac.je(em) ? ac.gd(em, player) : ac.yl(em, player))
			}
	}
	this.dh = function() {
		aJa = null, aJb = aJZ = -1, vB = bN.iG(Math.floor(bl.eT.data[16].value), 0, 16)
	}, this.eb = function(bw) {
		if (bl.eT.data[15].value && 0 !== vB && (bw || !bL.rT())) {
			var bw = bO.hO(bL.hD),
				hP = bO.hQ(bL.hE);
			if (bO.hR(bw, hP)) {
				bw = bO.fV(bw, hP), hP = bO.ey(bw);
				if (aJb === hP)
					if (ac.gi(hP)) {
						if (aJZ === ac.f0(hP)) return
					} else if (-1 === aJZ) return;
				! function(em) {
					ac.gi(em) ? (em = ac.f0(em)) !== aJZ && (aJc(), function(player) {
						aJZ = player, aJa = ac.aIc(player);
						var aJg = function() {
							var qt = aJa,
								aJj = vB << 2,
								aJk = aJj << 1;
							return [aJl(qt[0], aJj), aJl(qt[1], aJk), aJl(qt[2], aJk)]
						}();
						ac.aIY(player, aJg[0], aJg[1], aJg[2]), aJi(player)
					}(em), aJd()) : aJc() && aJd()
				}(aJb = hP)
			} else aJc() && aJd()
		}
	}
}

function d1() {
	var uy = 0,
		aJq = 0,
		aJr = 0,
		aJs = 0,
		aJb = -1;

	function aJv(em) {
		if (aJb === em) return !1;
		if (-1 === (aJb = em)) uy = 0, aN.a84(uy, 0);
		else {
			if (ac.gi(em)) return aJr = ac.f0(em), kS = ag.hA[aJr] - ag.a4f[aJr], (4 !== uy || kS !== aJq) && (uy = 4, aJq = kS, aN.a84(uy, kS), !0);
			if (ac.ez(em)) return 3 !== uy && (uy = 3, aN.a84(uy, 0), !0);
			if (ac.fD(em)) return 2 !== uy && (uy = 2, aN.a84(uy, 0), !0);
			var kS = bP.lI.a6k(bL.hD, bL.hE);
			if (-1 === kS) return 1 !== uy && (uy = 1, aN.a84(uy, 0), !0);
			em = bP.y.a7i[kS];
			if (aJr = bP.y.mM[kS], aJs = bP.y.mN[kS] >> 3, 5 === uy && em === aJq) return !1;
			uy = 5, aJq = em, aN.a84(uy, em)
		}
		return !0
	}
	this.dh = function() {
		aJs = aJr = aJq = uy = 0, aJb = -1
	}, this.eb = function(bw) {
		var hP;
		!bw && bL.rT() || (bw = bO.hO(bL.hD), hP = bO.hQ(bL.hE), bO.hR(bw, hP) ? (bw = bO.fV(bw, hP), aJv(bO.ey(bw))) : aJv(-1))
	}, this.mk = function() {
		var aJx, kS, a6i, aJw;
		if (0 !== uy && 2 !== uy)
			if (bL.rT()) {
				if (1 !== uy && 3 !== uy) {
					if (4 === uy) return void(kS = ag.hA[aJr] - ag.a4f[aJr], aJq === kS || (aJq = kS, aN.a84(uy, kS)));
					(a6i = bP.lI.nT(aJs, aJr)) < 0 ? (uy = 1, aN.a84(uy, 0)) : (aJw = bP.y.a7i[a6i]) !== aJq && (aJq = aJw, aN.a84(uy, aJw))
				}
			} else if (1 === uy) - 1 !== (a6i = bP.lI.a6k(bL.hD, bL.hE)) && (uy = 5, aJq = bP.y.a7i[a6i], aN.a84(uy, aJq));
		else if (3 === uy) ac.gi(aJb) && (uy = 4, aJx = ac.f0(aJb), aJq = ag.hA[aJx] - ag.a4f[aJx], aN.a84(uy, aJq));
		else if (4 === uy) {
			if (ac.gi(aJb)) return void(aJx = ac.f0(aJb), kS = ag.hA[aJx] - ag.a4f[aJx], aJq === kS || (aJq = kS, aN.a84(uy, kS)));
			uy = 3, aN.a84(uy, 0)
		} else - 1 === (a6i = bP.lI.a6k(bL.hD, bL.hE)) ? (uy = 1, aN.a84(uy, 0)) : (aJw = bP.y.a7i[a6i]) !== aJq && (aJq = aJw, aN.a84(uy, aJw))
	}
}

function da() {
	function aJz(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aK7, g.readAsText(e))
	}

	function aK7(e) {
		var aKA;
		aD.a18 || (e = JSON.parse(e.target.result), aKA = aD.data = new a5d, aKB(e, aKA, "mapType", 0, 2), aKB(e, aKA, "mapProceduralIndex", 0, 255), aKB(e, aKA, "mapRealisticIndex", 0, 255), aKB(e, aKA, "mapSeed", 0, 16383), function(aK9, aKA, gh,
				max) {
				aK9 = aK9[gh];
				aKA[gh] = aKH(aK9) ? aK9.slice(0, max) : aKA[gh]
			}(e, aKA, "mapName", 20), function(aK9, aKA, gh) {
				var aJL;
				2 === aKA.mapType && (!aKH(aK9 = aK9[gh]) || aK9.length <= 20 ? aKA.mapType = 0 : ((aJL = new Image).onload = function() {
					bB.aKI.aKJ(aJL, 1), aJL.onload = null, aJL = null
				}, aJL.src = aK9))
			}(e, aKA, "canvas"), aKB(e, aKA, "passableWater", 0, 1), aKB(e, aKA, "passableMountains", 0, 1), aKB(e, aKA, "playerCount", 1, 512), aKB(e, aKA, "humanCount", 1, 1), aKB(e, aKA, "selectedPlayer", 0, 0), aKB(e, aKA, "gameMode", 0, 1),
			aKB(e, aKA, "playerMode", 0, 0), aKB(e, aKA, "battleRoyaleMode", 0, 0), aKB(e, aKA, "numberTeams", 0, 8), aKB(e, aKA, "isZombieMode", 0, 0), aKB(e, aKA, "isContest", 0, 0), aKB(e, aKA, "isReplay", 0, 0), aKE(e, aKA, "elo", 16, 2,
				16383), aKB(e, aKA, "colorsType", 0, 1), aKB(e, aKA, "colorsPersonalized", 0, 1), aKE(e, aKA, "colorsData", 32, 512, 262143), aKB(e, aKA, "selectableColor", 0, 1), aKE(e, aKA, "teamPlayerCount", 16, 9, 512), aKB(e, aKA,
				"neutralBots", 0, 1), aKB(e, aKA, "botDifficultyType", 0, 3), aKB(e, aKA, "botDifficultyValue", 0, 15), aKE(e, aKA, "botDifficultyTeam", 8, 9, 15), aKE(e, aKA, "botDifficultyData", 8, 512, 15), aKB(e, aKA, "spawningType", 0, 2),
			aKB(e, aKA, "spawningSeed", 0, 16383), aKE(e, aKA, "spawningData", 16, 1024, 4095), aKB(e, aKA, "selectableSpawn", 0, 1), aKB(e, aKA, "playerNamesType", 0, 2),
			function(aK9, aKA, gh, size, max) {
				var a3m = aK9[gh];
				if (Array.isArray(a3m)) {
					for (var a3n = new Array(size), f8 = Math.min(a3m.length, size), aB = 0; aB < f8; aB++) a3n[aB] = aKH(a3m[aB]) ? a3m[aB].slice(0, max) : "";
					a3n.fill("", f8), aKA[gh] = a3n
				}
			}(e, aKA, "playerNamesData", 512, 20), aKB(e, aKA, "selectableName", 0, 1), aKB(e, aKA, "aIncomeType", 0, 2), aKB(e, aKA, "aIncomeValue", 0, 255), aKE(e, aKA, "aIncomeData", 8, 512, 255), aKB(e, aKA, "tIncomeType", 0, 2), aKB(e, aKA,
				"tIncomeValue", 0, 255), aKE(e, aKA, "tIncomeData", 8, 512, 255), aKB(e, aKA, "iIncomeType", 0, 2), aKB(e, aKA, "iIncomeValue", 0, 255), aKE(e, aKA, "iIncomeData", 8, 512, 255), aKB(e, aKA, "sResourcesType", 0, 2), aKB(e, aKA,
				"sResourcesValue", 0, 2047), aKE(e, aKA, "sResourcesData", 16, 512, 2047), t.x(), t.y.tB[0] = 0, t.u(19))
	}

	function aKB(aK9, aKA, gh, min, max) {
		aK9 = aK9[gh];
		aKA[gh] = "number" == typeof aK9 && min <= aK9 && aK9 <= max ? Math.floor(aK9) : aKA[gh]
	}

	function aKH(qi) {
		return "string" == typeof qi
	}

	function aKE(aK9, aKA, gh, aKK, size, max) {
		var a3m = aK9[gh];
		if (Array.isArray(a3m)) {
			for (var a3n = new(8 === aKK ? Uint8Array : 16 === aKK ? Uint16Array : Uint32Array)(size), f8 = Math.min(a3m.length, size), aB = 0; aB < f8; aB++) a3n[aB] = bN.iG(a3m[aB], 0, max);
			aKA[gh] = a3n
		}
	}
	this.aJy = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJz, input.click()
	}, this.aK0 = function() {
		for (var aK3, aDm, a6B = aD.data, keys = Object.keys(a6B), aK1 = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a6B[key] instanceof Uint8Array || a6B[key] instanceof Uint16Array || a6B[key] instanceof Uint32Array ? aK1[key] = Array.from(a6B[key]) : aK1[key] = a6B[key]
		}
		aK1.canvas = 2 === aK1.mapType && aK1.canvas ? aK1.canvas.toDataURL() : null, aK3 = aK1, aK3 = JSON.stringify(aK3, null, 2), aK3 = new Blob([aK3], {
			type: "application/json"
		}), (aDm = document.createElement("a")).href = URL.createObjectURL(aK3), aDm.download = "tt_scenario.json", aDm.click()
	}
}

function ca() {
	var aKL, aKM, size, jc, hr, aKN;

	function aKO(player) {
		return player < aD.kT ? aKL * player : aKL * aD.kT + aKM * (player - aD.kT)
	}
	this.dh = function() {
		aKL = aD.kT < 16 ? 12 : 8, aKM = 4;
		var f8 = aKO(aD.f5);
		size = new Uint8Array(aD.f5), jc = new Uint16Array(f8), hr = new Uint32Array(f8), aKN = new Uint8Array(f8)
	}, this.qZ = function(a92, aKP) {
		var aKQ = this.hB(a92, aKP),
			aKP = (this.h9(a92, aKP, 0), bC.gU.gX(a92, aKQ));
		bf.gY(a92, aKQ - aKP, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJ8 = function(player, aKP) {
		var aKT, aKP = function(player, aKP) {
			var aB, lO = aKO(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jc[lO + aB] === aKP) return aB;
			return size[player]
		}(player, aKP);
		aKP !== size[player] && (aKT = hr[aKO(player) + aKP], this.gZ(player, aKP), this.ef(player, aKT, aD.f5))
	}, this.jo = function(player, aKP) {
		for (var lO = aKO(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jc[lO + aB] === aKP) return !0;
		return !1
	}, this.k7 = function(player) {
		return player < aD.kT ? size[player] < aKL : size[player] < aKM
	}, this.gF = function(player) {
		return size[player]
	}, this.gK = function(player, aB) {
		return jc[aKO(player) + aB]
	}, this.gL = function(player, aB) {
		return hr[aKO(player) + aB]
	}, this.hB = function(player, aKP) {
		for (var lO = aKO(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jc[lO + aB] === aKP) return hr[lO + aB];
		return 0
	}, this.aIz = function(player) {
		for (var lO = aKO(player), fa = 0, aB = size[player] - 1; 0 <= aB; aB--) fa += hr[lO + aB];
		return fa
	}, this.h9 = function(player, aKP, aKT) {
		for (var lO = aKO(player), aB = size[player] - 1; 0 <= aB; aB--) jc[lO + aB] === aKP && (hr[lO + aB] = aKT)
	}, this.gu = function(player, aB, aKT) {
		hr[aKO(player) + aB] = Math.max(aKT, 0)
	}, this.gv = function(player, aB) {
		aKN[aKO(player) + aB] = 0
	}, this.gM = function(player, aB) {
		return aKN[aKO(player) + aB]
	}, this.ef = function(player, aKT, aKP) {
		ao.jG.k5[player] = ao.jG.k5[aKP] = 8, bC.gU.a4a(aKP) && bf.mz[6 - bC.gU.jq(player)]++;
		for (var lO = aKO(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jc[lO + aB] === aKP) return hr[lO + aB] += aKT, void(hr[lO + aB] = hr[lO + aB] > aD.a4i ? aD.a4i : hr[lO + aB]);
		jc[lO + size[player]] = aKP, hr[lO + size[player]] = aKT, aKN[lO + size[player]] = 1, size[player]++, aKP === aD.es ? aN.a1L(player, 5) : player < aD.kT && player === aD.es && af.a7d(aKP)
	}, this.gZ = function(player, eF) {
		var fR, lO;
		if (0 !== size[player])
			for (lO = aKO(player), size[player]--, fR = eF; fR < size[player]; fR++) jc[lO + fR] = jc[lO + fR + 1], hr[lO + fR] = hr[lO + fR + 1], aKN[lO + fR] = aKN[lO + fR + 1]
	}, this.aIu = function(player) {
		for (var fR, lO, aJ5 = [], aB = al.kz - 1; 0 <= aB; aB--)
			for (lO = aKO(al.l4[aB]), fR = size[al.l4[aB]] - 1; 0 <= fR; fR--)
				if (jc[lO + fR] === player) {
					aJ5.push(al.l4[aB]);
					break
				} return aJ5
	}
}

function cb() {
	var aKU;

	function aKW(player) {
		var eE, k8;
		return bC.gU.jq(player) && player < aD.kT ? 0 : (eE = aKU[bN.fZ((aD.f5 - 1) * ag.gw[player], aD.kD)], bh.kQ() < 1920 && (eE = Math.max(bN.fZ(100 * (13440 - 6 * bh.kQ()), 1920), eE)), k8 = ae.k9(player), ag.hA[player] > k8 && (eE -= bN.fZ(2 *
			eE * (ag.hA[player] - k8), k8)), Math.min(Math.max(eE, 0), 700))
	}

	function aKi(ng) {
		for (var gw = ag.gw, l4 = al.l4, aB = al.kz - 1; 0 <= aB; aB--) {
			var gg = l4[aB];
			bC.gU.gX(gg, bN.fZ(ng * gw[gg], 32))
		}
	}

	function aKf() {
		var xi = aD.es;
		bQ.fe[0] = ag.hA[xi] - ag.a4f[xi]
	}

	function aKh(eF) {
		var xi = aD.es,
			xi = ag.hA[xi] - ag.a4f[xi] - bQ.fe[0];
		ae.aB8 += xi, bf.mz[eF] += xi
	}
	this.aB8 = 0, this.dn = function() {
		for (var f8 = aD.f5, aB = (aKU = new Uint16Array(f8), 0); aB < f8; aB++) aKU[aB] = 100 + aKV(bN.fZ(25600 * aB, f8 - 4), 9)
	}, this.dh = function() {
		(this.aB8 = 0) === aD.data.iIncomeType ? this.aCY = aKW : 1 === aD.data.iIncomeType ? this.aCY = function(player) {
			return bN.fZ(aD.data.iIncomeValue * aKW(player), 64)
		} : this.aCY = function(player) {
			return bN.fZ(aD.data.iIncomeData[player] * aKW(player), 64)
		}
	}, this.eb = function() {
		if (bh.kQ() % 10 == 9 && (ae.aB8 = 0, function() {
				aKf();
				for (var l4 = al.l4, hA = ag.hA, aB = al.kz - 1; 0 <= aB; aB--) {
					var gg = l4[aB],
						aKg = bN.fZ(ae.aCY(gg) * hA[gg], 1e4);
					bC.gU.gX(gg, Math.max(aKg, 1))
				}
				aKh(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aKf(), 1 === aD.data.aIncomeType)
						for (var gw = ag.gw, l4 = al.l4, ng = aD.data.aIncomeValue, aB = al.kz - 1; 0 <= aB; aB--) {
							var gg = l4[aB];
							bC.gU.gX(gg, bN.fZ(ng * gw[gg], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gw = ag.gw, l4 = al.l4, ng = aD.data.aIncomeData, aB = al.kz - 1; 0 <= aB; aB--) {
								var gg = l4[aB];
								bC.gU.gX(gg, bN.fZ(ng[gg] * gw[gg], 128))
							}
						}();
					aKh(18)
				}
			}(), bh.kQ() % 100 == 99)) {
			if (aKf(), 0 === aD.data.tIncomeType) aKi(32);
			else if (1 === aD.data.tIncomeType) aKi(aD.data.tIncomeValue);
			else
				for (var gw = ag.gw, l4 = al.l4, ng = aD.data.tIncomeData, aB = al.kz - 1; 0 <= aB; aB--) {
					var gg = l4[aB];
					bC.gU.gX(gg, bN.fZ(ng[gg] * gw[gg], 32))
				}
			aKh(8)
		}
	}, this.k9 = function(player) {
		return Math.min(100 * ag.gw[player], aD.a5Z)
	}, this.pY = function(player, pZ) {
		bs.pv(player, pZ, bQ.ff[0], 0), bC.gU.gX(pZ, bQ.ff[0]), bf.pw(player, pZ), af.aKY(player, bQ.ff[0] + bQ.ff[1]), af.px(pZ, bQ.ff[0]), bC.gU.md(player)
	}, this.aKZ = function() {
		for (var f8 = al.kz, a0w = al.l4, lO = 0, a4g = ag.hA, aB = 0; aB < f8; aB++) lO += a4g[a0w[aB]];
		return lO
	}, this.aKa = function(aKb) {
		for (var gg, f8 = al.kz, a0w = al.l4, lO = 0, a4g = ag.hA, f6 = bi.f6, aB = 0; aB < f8; aB++) f6[gg = a0w[aB]] === aKb && (lO += a4g[gg]);
		return lO
	}
}

function cd() {
	var aKm, aKn, aKo, aKp, aKq, aKr, aKs, aKt, aKu, aKv, aKw, aKx, aKy, aKz, aL0, aL1, aL2, aL3, aL5, aL6, aDf, aL7, aL8, aLE, aLF, aL4 = null,
		aLA = 0,
		aLB = !1,
		aLC = new Float32Array(4),
		aLD = 0,
		aBd = 112,
		aLG = 0;

	function r4() {
		aKu = Math.floor(+h.iI), aKv = Math.floor(.5 * aKu), aL4.width = h.i, aL4.height = h.j, aL5 = aL4.getContext("2d", {
			alpha: !0
		}), bC.r1.textAlign(aL5, 1), bC.r1.textBaseline(aL5, 1), aL5.imageSmoothingEnabled = !0
	}

	function aLH() {
		var aB, aLM;
		for (vg.font = bC.r1.sq(1, 100 * aKw), aLM = 80 / Math.floor(vg.measureText(bC.s0.a0P(aD.a4i)).width), vg.font = bC.r1.sq(1, 100), aB = aD.f5 - 1; 0 <= aB; aB--) aKt[aB] = 100 / Math.floor(vg.measureText(ag.zb[aB]).width), aKs[aB] = Math.min(
			aLM, aKt[aB])
	}

	function aLN(aB) {
		return !aLG || (aB = ag.hA[aB]) < 1e6 ? 1 : aB < 1e7 ? aLC[0] : aLC[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aLL(iA) {
		aLB = !1, aLA = bh.eW, aL3 = !1, aL2 = 1, aL0 = aL1 = 0, iA.clearRect(0, 0, h.i, h.j);
		for (var aLT, aLU, aB, aLV, fontSize, aLW, nU = il / iJ, nV = im / iJ, nh = (h.i + il) / iJ, ni = (h.j + im) / iJ, aLX = 0 !== ag.n3[aD.es] && !bC.gU.jq(aD.es), fR = al.kz - 1; 0 <= fR; fR--) aB = al.l4[fR], (fontSize = Math.floor(aKz * iJ *
			aLN(aB) * aKs[aB] * aKq[aB])) < aKy || aKu <= fontSize || aKo[aB] + aKq[aB] > nU && aKo[aB] < nh && aKp[aB] + aKr[aB] > nV && aKp[aB] < ni && (aLT = Math.floor(h.i * (aKo[aB] + aKq[aB] / 2 - nU) / (nh - nU)), aLU = Math.floor(h.j * (
			aKp[aB] + aKr[aB] / 2 - nV) / (ni - nV) - .1 * fontSize), aLV = ac.a9Y[aB], iA.font = bC.r1.sq(1 === ag.a4W[aB] ? 4 : 1, fontSize), iA.fillStyle = aLY(fontSize, aLV % 2), aLG ? aLZ(iA, aB, fontSize, aLT, aLU, aLV) : aLa(aB,
			fontSize, aLT, aLU, iA), aL3 = !0, 0 < aDf[aB] ? function(aLT, aLU, fontSize, aB, iA) {
			0 === kE[aB] ? aj.sH.a0G(aL6[aB]) ? (function(aLT, aLU, fontSize, player, pk, iA) {
				for (var yF = aLU, i9 = (iA.globalAlpha = aLi(fontSize), aLN(player) * (aLG ? aLD : aKt[player])), yE = aLT - .5 * fontSize / i9 - .9 * fontSize, fS = 0; fS < 2; fS++) iA.fillText(aj.sH.a08(pk), yE, yF), yE = aLT +
					.5 * fontSize / i9 + .9 * fontSize;
				iA.globalAlpha = 1
			}(aLT, aLU, fontSize, aB, aL6[aB], iA), aLc(aLT, aLU, fontSize, 0, 0, iA)) : aj.sH.a0I(aL6[aB]) ? (aLl(aLT, aLU, fontSize, aL6[aB], 0, iA), aLc(aLT, aLU, fontSize, 0, 1, iA)) : (aLl(aLT, aLU, fontSize, aL6[aB], 1, iA), aLc(
				aLT, aLU, fontSize, 1, 0, iA)) : aLl(aLT, aLU, fontSize, aL6[aB], 0, iA)
		}(aLT, aLU, fontSize, aB, iA) : 0 === kE[aB] && aLc(aLT, aLU, fontSize, 0, 0, iA), aLX && (0 < aDf[aB + aD.f5] || 0 < aDf[aB + 2 * aD.f5] || 0 < aDf[aB + 3 * aD.f5] || 0 < aDf[aB + 4 * aD.f5]) && function(aLT, aLU, fontSize, aB, iA) {
			var eg, gb = -1;
			for (eg = 4; 1 <= eg; eg--) 0 < aDf[aB + eg * aD.f5] && gb++;
			for (eg = 1; eg < 5; eg++) 0 < aDf[aB + eg * aD.f5] && (! function(aLT, aLU, fontSize, eg, aB, aLg, eX, iA) {
				var a40;
				if (1 === eg) {
					aB = aL6[aB + aD.f5];
					if (!aj.sH.a0H(aB)) return function(aLT, aLU, fontSize, pk, aLg, iA) {
						iA.globalAlpha = aLi(fontSize);
						aLT -= .534 * aLg * fontSize, aLg = aLU + 1.59 * fontSize;
						iA.font = bC.r1.sq(0, .785 * fontSize), iA.fillText(aj.sH.a08(pk), aLT, aLg), iA.globalAlpha = 1
					}(aLT, aLU, fontSize, aB, aLg, iA);
					a40 = aj.xh.zh[aB - 1024 + aj.sH.zt]
				} else a40 = 2 === eg ? aL.a6Q()[4].canvas[+(eX < 255)] : (3 === eg ? aL.a6Q()[5] : aL.a6Q()[6]).canvas[0];
				aB = aj.xh.zi, eX = .8 * fontSize / aB, eg = aLT - .5 * eX * aB - .534 * aLg * fontSize, aLT = aLU + 1.4 * eX * aB;
				iA.setTransform(eX, 0, 0, eX, eg, aLT), iA.globalAlpha = aLi(fontSize), iA.drawImage(a40, 0, 0), iA.globalAlpha = 1, iA.setTransform(1, 0, 0, 1, 0, 0)
			}(aLT, aLU, fontSize, eg, aB, gb, aDf[aB + eg * aD.f5], iA), gb -= 2)
		}(aLT, aLU, fontSize, aB, iA), (aLW = aKw * fontSize) < aKy || (iA.font = bC.r1.sq(1, aLW), aLU += Math.floor(.78 * fontSize), aLG ? aLa(aB, aLW, aLT, aLU, iA) : aLZ(iA, aB, aLW, aLT, aLU, aLV)))
	}

	function aLa(aB, fontSize, fF, fH, iA) {
		var ___id = aB;
		var showName = aB < aD.kT || !__fx.settings.hideBotNames;
		if (showName) iA.fillText(ag.zb[aB], fF, fH), aB < aD.kT && 2 !== ag.a4W[aB] || (aB = fontSize / aKt[aB], iA.fillRect(fF - .5 * aB, fH + bC.r1.a09 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aLG && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iA.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iA.fillText(__fx.utils.getDensity(___id), fF, showName ? fH + fontSize : fH)
		);
	}

	function aLZ(iA, aB, fontSize, aLT, aLU, aLV) {
		var a4f = ag.a4f[aB],
			aLf = bC.s0.a0P(ag.hA[aB] - a4f);

		function drawDensity() {
			!aLG && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iA.fillStyle = __fx.utils.textStyleBasedOnDensity(aB)), iA.fillText(__fx.utils.getDensity(aB), aLT, aLU + fontSize))
		}
		a4f ? (a4f = iA.fillStyle, iA.fillStyle = aLY(fontSize, 2 + aLV % 2), iA.fillText(aLf, aLT, aLU), iA.fillStyle = a4f) : aLV >> 1 & 1 ? (iA.lineWidth = .05 * fontSize, iA.strokeStyle = aLY(fontSize, aLV % 2), iA.strokeText(aLf, aLT, aLU)) : (
			1 < aLV && (iA.lineWidth = .12 * fontSize, iA.strokeStyle = aLY(fontSize, aLV), iA.strokeText(aLf, aLT, aLU)), iA.fillText(aLf, aLT, aLU)), drawDensity()
	}

	function aLc(aLT, aLU, fontSize, aLg, aLh, iA) {
		var a6v = .95 * fontSize / aL8,
			aLT = aLT - .5 * a6v * aL7 + .8 * aLg * fontSize,
			aLg = aLU - 1.76 * a6v * aL8 - (.35 - bC.r1.a09 + .7) * aLh * fontSize;
		iA.setTransform(a6v, 0, 0, a6v, aLT, aLg), iA.globalAlpha = aLi(fontSize), iA.drawImage(ab.get(4), 0, 0), iA.globalAlpha = 1, iA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLl(aLT, aLU, fontSize, pk, aLg, iA) {
		var i4, yE, a6v;
		iA.globalAlpha = aLi(fontSize), aj.sH.a0H(pk) ? (i4 = aj.xh.zi, iA.setTransform(a6v = 1.1 * fontSize / i4, 0, 0, a6v, yE = aLT - .5 * a6v * i4 - .8 * aLg * fontSize, a6v = aLU - 1.55 * a6v * i4), iA.drawImage(aj.xh.zh[pk - 1024 + aj.sH.zt],
			0, 0), iA.setTransform(1, 0, 0, 1, 0, 0)) : (yE = aLT - .8 * aLg * fontSize, a6v = aLU - (.35 - bC.r1.a09 + 1) * fontSize, iA.fillText(aj.sH.a08(pk), yE, a6v)), iA.globalAlpha = 1
	}

	function aLY(fontSize, aLV) {
		return aKv <= fontSize && fontSize < aKu ? bi.aLn[aLV] + aLi(fontSize).toFixed(3) + ")" : bi.aLo[aLV]
	}

	function aLi(fontSize) {
		return aKv <= fontSize && fontSize < aKu ? 1 - (fontSize - aKv) / (aKu - aKv) : 1
	}

	function aLx(i9, i) {
		return 1 + Math.floor(aKx * i9 * i)
	}

	function aLu(aB) {
		for (var left = aKo[aB], fR = aKo[aB] - ag.j1[aB] - 1; 0 <= fR; fR--)
			if (!aLz(aB, --left, aKp[aB], aKr[aB])) {
				left++;
				break
			} var right = aKo[aB];
		for (fR = ag.j2[aB] - aKo[aB] - aKq[aB]; 0 <= fR; fR--)
			if (!aLz(aB, ++right + aKq[aB] - 1, aKp[aB], aKr[aB])) {
				right--;
				break
			} var fF = Math.floor((left + right) / 2),
			top = aKp[aB];
		for (fR = aKp[aB] - ag.j3[aB] - 1; 0 <= fR; fR--)
			if (!aM0(aB, fF, --top, aKq[aB])) {
				top++;
				break
			} var bottom = aKp[aB];
		for (fR = ag.j4[aB] - aKp[aB] - aKr[aB]; 0 <= fR; fR--)
			if (!aM0(aB, fF, ++bottom + aKr[aB] - 1, aKq[aB])) {
				bottom--;
				break
			} var fH = Math.floor((top + bottom) / 2);
		aLr(aB, fF, fH, aKq[aB], aKr[aB]) && (aKo[aB] = fF, aKp[aB] = fH)
	}

	function aLr(player, fF, fH, i, j) {
		fB = Math.floor(.2 * i);
		for (var fB, eg = fF + i - 1; fF <= eg; eg--)
			if (!aLz(player, eg, fH, j)) return;
		for (eg = fH + j - 1 - (fB = (fB = Math.floor(.25 * j)) < 1 ? 1 : fB); fH + fB <= eg; eg--)
			if (!aM0(player, fF, eg, i)) return;
		return 1
	}

	function aLz(player, fF, fH, j) {
		return ac.z6(player, 4 * (fH * bU.fJ + fF)) && ac.z6(player, 4 * ((fH + j - 1) * bU.fJ + fF))
	}

	function aM0(player, fF, fH, i) {
		return ac.z6(player, 4 * (fH * bU.fJ + fF)) && ac.z6(player, 4 * (fH * bU.fJ + fF + i - 1))
	}
	this.dh = function() {
		if (aLG = bl.eT.data[7].value || 8 === aD.kl, aL3 = !1, aKz = .88, aKw = .5, aKx = 1.8, aKy = 12 - 3 * bl.eT.data[9].value, aKn = aKm = 0, aKo = new Uint16Array(aD.f5), aKp = new Uint16Array(aD.f5), aKq = new Uint16Array(aD.f5), aKr =
			new Uint16Array(aD.f5), aKs = new Float32Array(aD.f5), aKt = new Float32Array(aD.f5), aL6 = new Uint16Array(2 * aD.f5), aDf = new Uint8Array(5 * aD.f5), aLE = new Uint8Array(aD.f5), aLF = new Uint8Array(aD.f5), aL4 = aL4 || document
			.createElement("canvas"), r4(), aL1 = aL0 = 0, aL2 = 1, aLG) {
			var aB, aLM;
			for (aLH(), vg.font = bC.r1.sq(1, 100), aLM = 100 / Math.floor(vg.measureText("900 000").width), aB = aD.f5 - 1; 0 <= aB; aB--) aKs[aB] = Math.min(aLM, 2 * aKt[aB]);
			aLD = aLM, aLC[0] = 100 / (aLM * Math.floor(vg.measureText("5 000 000").width)), aLC[1] = 100 / (aLM * Math.floor(vg.measureText("50 000 000").width)), aLC[2] = 100 / (aLM * Math.floor(vg.measureText("500 000 000").width)), aLC[3] =
				100 / (aLM * Math.floor(vg.measureText("1 000 000 000").width))
		} else aLH();
		! function() {
			var aB;
			for (aB = aD.f5 - 1; 0 <= aB; aB--) ag.gw[aB] < 12 ? (aKo[aB] = ag.j1[aB] + 1, aKp[aB] = ag.j3[aB] + 1, aKq[aB] = 1, aKr[aB] = 1) : (aKo[aB] = ag.j1[aB], aKp[aB] = ag.j3[aB] + 1, aKq[aB] = 4, aKr[aB] = 2);
			if (aD.hW)
				for (aB = 0; aB < aD.kT; aB++) aKq[aB] = 0;
			aL7 = ab.get(4).width, aL8 = ab.get(4).height
		}()
	}, this.aKY = function(gg, a69) {
		a69 > 18 * ag.gw[gg] ? (aLF[gg] = 6, ac.a9Y[gg] = 2 + ac.a9Y[gg] % 2) : (aLE[gg] = 4, (ac.a9Y[gg] < 2 || 3 < ac.a9Y[gg]) && (ac.a9Y[gg] = 6 + ac.a9Y[gg] % 2))
	}, this.px = function(gg, a69) {
		a69 > 6 * ag.gw[gg] ? (aLF[gg] = 6, ac.a9Y[gg] = 4 + ac.a9Y[gg] % 2) : (aLE[gg] = 4, (ac.a9Y[gg] < 4 || 5 < ac.a9Y[gg]) && (ac.a9Y[gg] = 8 + ac.a9Y[gg] % 2))
	}, this.resize = function() {
		r4(), aLL(aL5)
	}, this.a5V = function() {
		for (var aB = 0; aB < aD.kT; aB++) ag.j2[aB] - ag.j1[aB] != 3 || ag.j4[aB] - ag.j3[aB] != 3 ? (aKo[aB] = ag.j1[aB] + (ag.j2[aB] !== ag.j1[aB] ? 1 : 0), aKp[aB] = ag.j3[aB], aKq[aB] = 1, aKr[aB] = 1) : (aKo[aB] = ag.j1[aB], aKp[aB] = ag
			.j3[aB] + 1, aKq[aB] = 4, aKr[aB] = 2)
	}, this.qa = function(player, eF, aLO) {
		! function(player, eF, aLO) {
			player += eF * aD.f5;
			0 === eF ? aL6[player] === aLO && 0 < aDf[player] ? aDf[player] = 0 : (aL6[player] = aLO, aDf[player] = aj.sH.a0G(aLO) ? 255 : 64) : 1 === eF ? (aDf[player] = 64, aL6[player] = aLO) : aDf[player] = aLO
		}(player, eF, aLO), 2 === aD.a18 && this.mp(!0)
	}, this.vf = function() {
		aL3 && (1 !== aL2 ? (vg.imageSmoothingEnabled = !0, vg.setTransform(aL2, 0, 0, aL2, 0, 0), vg.drawImage(aL4, -aL0 / aL2, -aL1 / aL2), vg.setTransform(1, 0, 0, 1, 0, 0), vg.imageSmoothingEnabled = !1) : vg.drawImage(aL4, -aL0, -aL1))
	}, this.aAL = function(iS, iV) {
		aL0 += iS, aL1 += iV
	}, this.a2g = function(iS, iV) {
		af.aAL(iS, iV)
	}, this.zoom = function(a3Z, li, lj) {
		aL2 *= a3Z, aL0 = (aL0 + li) * a3Z - li, aL1 = (aL1 + lj) * a3Z - lj
	}, this.aIv = function(player) {
		var j1 = ag.j1[player],
			j2 = ag.j2[player],
			j3 = ag.j3[player],
			j4 = ag.j4[player],
			ie = bO.hO(0),
			ig = bO.hQ(0),
			ih = bO.hO(h.i),
			ii = bO.hQ(h.j);
		j1 < ih && ie < j2 && j3 < ii && ig < j4 && (aKq[player] = 0, aLB = !0)
	}, this.mp = function(bw) {
		return !(!aLB && !bw && bh.eW < aLA + (1 === aL2 && 0 === aL0 && 0 === aL1 && (aD.a5y() || aD.hW || 2 === aD.a18) ? 1e3 : aBd) || (aLL(aL5), 0))
	}, this.aLR = function(aB) {
		return aLN(aB) * aKs[aB]
	}, this.aLS = function(player) {
		return aKs[player]
	}, this.eb = function() {
		bh.kQ() % 10 == 9 && (aLB = aLB || aD.a60() && !aD.a5y()), !aD.a5y() && 4 <= ++aKn && function() {
			var aB, fR, fS;
			for (aKn = 0, fS = 4; 1 <= fS; fS--)
				for (fR = al.kz - 1; 0 <= fR; fR--) aB = al.l4[fR] + fS * aD.f5, 0 < aDf[aB] && aDf[aB] < 255 && aDf[aB]--;
			if (2 !== aD.a18)
				for (fR = al.kz - 1; 0 <= fR; fR--) aB = al.l4[fR], 0 < aDf[aB] && aDf[aB] < 255 && aDf[aB]--
		}();
		var aB, fR, f8 = Math.floor(.1 * al.kz);
		for (f8 = (f8 = f8 < 8 ? 8 : f8) > al.kz ? al.kz : f8, aB = aKm + f8 - 1; aKm <= aB; aB--) fR = aB % al.kz, ! function(aB) {
			var i9 = aLN(aB) * aKs[aB];
			0 < aKq[aB] && aLr(aB, aKo[aB], aKp[aB], aKq[aB], aKr[aB]) ? ! function(aB) {
				for (var fF, fH, i, j, em = !1, fS = 0; fS < 8; fS++) {
					if (i = aKq[aB] + 2, j = aKr[aB] + 2, i > ag.j2[aB] - ag.j1[aB] + 1 || j > ag.j4[aB] - ag.j3[aB] + 1) return em;
					if (fF = aKo[aB] - 1, fH = aKp[aB] - 1, !aLr(aB, fF, fH, i, j)) return em;
					aKo[aB] = fF, aKp[aB] = fH, aKq[aB] = i, aKr[aB] = j, em = !0
				}
				return em
			}(aB) && function(aB, i9) {
				for (var fF, fH, i, j, em = !1, aDo = aKq[aB], ng = 1 + Math.floor(.02 * aDo), fS = 1; fS < 5; fS++) {
					if ((i = aDo + fS * ng) > ag.j2[aB] - ag.j1[aB] + 1) return em;
					if ((j = aLx(i9, i)) > ag.j4[aB] - ag.j3[aB] + 1) return em;
					fF = ag.j1[aB] + Math.floor(Math.random() * (ag.j2[aB] - ag.j1[aB] + 2 - i)), fH = ag.j3[aB] + Math.floor(Math.random() * (ag.j4[aB] - ag.j3[aB] + 2 - j)), aLr(aB, fF, fH, i, j) && (aKo[aB] = fF, aKp[aB] = fH, aKq[
						aB] = i, aKr[aB] = j, em = !0)
				}
				return em
			}(aB, i9) && aLu(aB) : ! function(aB, i9) {
				var j, fF = aKo[aB] + 1,
					fH = aKp[aB] + 1,
					i = aKq[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKq[aB] = 0;
						break
					}
					if (j = aLx(i9, i), aLr(aB, fF, fH, i, j)) return aKo[aB] = fF, aKp[aB] = fH, aKq[aB] = i, aKr[aB] = j, 1;
					fF++, fH++, i -= 2
				}
				return
			}(aB, i9) ? function(aB, i9) {
				var fF, fH, i, j, fS, nm, jj = ag.j2[aB] - ag.j1[aB] + 1,
					aLy = Math.floor(.02 * jj);
				for (nm = -6 * (aLy = aLy < 1 ? 1 : aLy), fS = jj; nm <= fS; fS -= aLy)
					if (j = aLx(i9, i = 0 < fS ? fS : 1), fF = ag.j1[aB] + Math.floor(Math.random() * (ag.j2[aB] - ag.j1[aB] + 2 - i)), fH = ag.j3[aB] + Math.floor(Math.random() * (ag.j4[aB] - ag.j3[aB] + 2 - j)), aLr(aB, fF, fH, i, j))
						return aKo[aB] = fF, aKp[aB] = fH, aKq[aB] = i, aKr[aB] = j
			}(aB, i9) : aLu(aB)
		}(al.l4[fR]);
		aKm = (aKm += f8) % al.kz
	}, this.mj = function() {
		var aB, gg, a0E, a0F;
		if (bh.kQ() % 4 == 1)
			for (aB = al.kz - 1; 0 <= aB; aB--) gg = al.l4[aB], ac.a9Y[gg] < 2 || ((a0E = Math.max(aLE[gg] - 1, 0)) === (a0F = Math.max(aLF[gg] - 1, 0)) ? 0 === a0E && (ac.a9Y[gg] %= 2) : 0 === a0F && ac.a9Y[gg] < 6 && (ac.a9Y[gg] += 4), aLE[
				gg] = a0E, aLF[gg] = a0F)
	}, this.a7d = function(player) {
		var aB = player + 2 * aD.f5,
			eX = aDf[aB];
		return 0 < eX && (aN.a1G(50, player), aDf[aB] = 0, 255 === eX)
	}, this.a6f = function(player) {
		return 255 === aDf[player + 2 * aD.f5]
	}
}

function cf() {
	var aM1, aM2, aM3;
	this.dh = function() {
		aM1 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aM2 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aM3 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7u = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEg = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aM1.length - 1; 0 <= aB; aB--)
			for (var fR = a7u.length - 1; 0 <= fR; fR--) aM1[aB] = aM1[aB].replace(a7u[fR], aEg[fR]);
		if (__fx.settings.realisticNames) aM1 = realisticNames;
	}, this.a5l = function() {
		var f8 = aD.kT,
			zb = ag.zb,
			a1o = ag.a1o,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f8)
			for (var aB = 0; aB < f8; aB++) zb[aB] = a1o[aB] = "Player " + ay.jk(1e3);
		else
			for (aB = 0; aB < f8; aB++) zb[aB] = a1o[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kl) {
			for (var eE = ay.random(), aM9 = aM3, aMA = aM2, hr = aE.hr, f8 = aM9.length, lO = aD.data.teamPlayerCount[7], zb = ag.zb, a1o = ag.a1o, aB = lO - 1; aB >= aD.kT; aB--) zb[aB] = a1o[aB] = aM9[(aB + eE) % f8];
			for (f8 = aMA.length - 1, aB = lO; aB < aD.f5; aB++) zb[aB] = a1o[aB] = aMA[hr[aB] ? f8 : aB % f8]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f8 = aD.f5, zb = ag.zb, a1o = ag.a1o, playerNamesData = aD.data.playerNamesData, aB = aD.kT; aB < f8; aB++) zb[aB] = a1o[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var zb = ag.zb, a1o = ag.a1o, aB = aD.kT; aB < aD.f5; aB++) zb[aB] = a1o[aB] = "Bot " + ay.jk(1e3)
		} : function() {
			for (var aMB = aM1, f8 = aMB.length, eE = ay.random(), zb = ag.zb, a1o = ag.a1o, aB = aD.kT; aB < aD.f5; aB++) zb[aB] = a1o[aB] = aMB[(aB + eE) % f8]
		})()
	}
}

function cy() {
	this.aMC = [], this.aMD = [], this.dh = function() {
		this.aMC = [], this.aMD = []
	}, this.eb = function() {
		0 <= this.aMC.length && this.aME(this.aMC), 0 <= this.aMD.length && this.aME(this.aMD)
	}, this.aME = function(g) {
		for (var fS = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eW--, g[aB].eW <= 0) {
				fS = aB;
				break
			} for (aB = fS; 0 <= aB; aB--) g.shift()
	}, this.a6Y = function(id, a0w, aMF) {
		return this.fT(this.aMC, id, a0w, aMF)
	}, this.aMG = function(id, a0w, aMF) {
		return this.fT(this.aMD, id, a0w, aMF)
	}, this.fT = function(g, id, a0w, aMF) {
		return ! function(g, id, a0w) {
			var aB, i0;
			for (aB = a0w.length - 1; 0 <= aB; aB--)
				for (i0 = g.length - 1; 0 <= i0; i0--)
					if (g[i0].player === a0w[aB] && id === g[i0].id) return 1;
			return
		}(g, id, a0w) && (aMF && function(g, id, a0w) {
			var aB;
			for (aB = a0w.length - 1; 0 <= aB; aB--) g.push({
				player: a0w[aB],
				id: id,
				eW: 384
			})
		}(g, id, a0w), !0)
	}
}

function ce() {
	this.a1o = new Array(aD.f5), this.zb = new Array(aD.f5), this.a4W = new Uint8Array(aD.f5), this.n3 = new Uint8Array(aD.f5), this.j1 = new Uint16Array(aD.f5), this.j3 = new Uint16Array(aD.f5), this.j2 = new Uint16Array(aD.f5), this.j4 =
		new Uint16Array(aD.f5), this.gw = new Uint32Array(aD.f5), this.yg = new Uint32Array(aD.f5), this.hA = new Uint32Array(aD.f5), this.ga = null, this.go = null, this.gp = null, this.fX = null, this.qQ = new Uint16Array(aD.f5), this.jW =
		new Uint16Array(aD.f5), this.jX = new Uint16Array(aD.f5), this.a1j = new Uint16Array(aD.f5), this.a1h = new Uint8Array(aD.f5), this.a4f = new Uint16Array(aD.f5), this.dh = function() {
			this.a1o.fill(""), this.zb.fill(""), this.a4W.fill(0), this.n3.fill(0), this.j1.fill(0), this.j3.fill(0), this.j2.fill(0), this.j4.fill(0), this.gw.fill(0), this.yg.fill(0), this.hA.fill(0), this.ga = new Array(aD.f5), this.go =
				new Array(aD.f5), this.gp = new Array(aD.f5), this.fX = new Array(aD.f5), this.qQ.fill(0), this.jW.fill(0), this.jX.fill(0), this.a1j.fill(0), this.a1h.fill(0), this.a4f.fill(0)
		}
}

function cw() {
	this.aEB = function(player) {
		aG.n2(player), aD.a1A++, ag.a4W[player] = 2, ag.a1j[player] = bk.a1y.aJ4(), player === aD.es && (aX.show(!1, !1), aW.aCK(), bT.a0t.a1f()), af.a7d(player)
	}
}

function cX() {
	this.l4 = null, this.kz = 0, this.a5p = function() {
		for (this.kz = 0, aB = aD.f5 - 1; 0 <= aB; aB--) 0 !== ag.n3[aB] && this.kz++;
		this.l4 = new Uint16Array(this.kz);
		for (var f8 = 0, aB = 0; aB < aD.f5; aB++) 0 !== ag.n3[aB] && (this.l4[f8++] = aB)
	}, this.mi = function() {
		for (var gw = ag.gw, yg = ag.yg, a1h = ag.a1h, l4 = al.l4, aB = al.kz - 1; 0 <= aB; aB--) {
			var gg = l4[aB],
				eX = gw[gg],
				lO = yg[gg];
			eX <= bN.fZ(lO, 4) ? ak.dq(gg) : lO <= eX ? 250 <= (yg[gg] = eX) && (a1h[gg] = 1) : yg[gg] = lO - Math.max(1, bN.fZ(lO - eX, 1e3))
		}
		this.aMK()
	}, this.aMK = function() {
		for (var n3 = ag.n3, lN = this.l4, aD2 = this.kz, aB = aD2 - 1; 0 <= aB; aB--) 0 === n3[lN[aB]] && (lN[aB] = lN[--aD2]);
		this.kz = aD2
	}
}

function cY() {
	var aML = new Uint16Array(aD.f5),
		aMM = 0;

	function aMQ(a7j, aMO) {
		var eg = bh.kQ();
		return 3213 <= eg ? 4 + bN.fZ(100 * aMO, ae.k9(a7j)) : (a7j = 1 + bN.fZ(aD.kD, 300), eg < 357 ? 2 + bN.fZ(100 * aMO, a7j) : eg < 714 ? 2 + bN.fZ(100 * aMO, 4 * a7j) : eg < 1071 ? 2 + bN.fZ(100 * aMO, 10 * a7j) : eg < 2142 ? 2 + bN.fZ(100 *
			aMO, 30 * a7j) : 2 + bN.fZ(100 * aMO, 100 * a7j))
	}

	function aMP(a7j) {
		return aD.kn || 7 <= aD.kl || 4284 <= bh.kQ() || bC.gU.jq(a7j)
	}
	this.dh = function() {
		aML.fill(0), aMM = 15
	}, this.hm = function(pZ) {
		var player = aD.es;
		return !!bC.gU.qS(player, pZ) && !(!bC.gU.ps(player, bC.gU.ij(player, aR.hc()), pZ) || (player = pZ, pZ = bQ.ff[0], !aMP(player) && aML[player] + aMQ(player, pZ) > aMM))
	}, this.ef = function(a7j, aMO) {
		if (!aMP(a7j)) {
			aMO = aMQ(a7j, aMO);
			if (aML[a7j] + aMO > aMM) return !1;
			aML[a7j] += aMO
		}
		return !0
	}, this.eb = function() {
		bh.kQ() % 100 == 99 && (bh.kQ() < 1071 ? aMM += 4 : bh.kQ() < 2142 ? aMM += 6 : bh.kQ() < 3213 ? aMM += 8 : aMM += 10)
	}
}

function cg() {
	var aMR;
	this.ku = null, this.kt = 0, this.dh = function() {
		aMR = [], 9 === aD.kl && this.aMS()
	}, this.aMS = function() {
		this.ku = [0, 0, 0, 0, 0, 0];
		for (var aMT = [256, 227, 170, 148, 100, this.kt = 0, 0, 0], aMU = [0, 8, 24, 30, 46, 70, 256, 333], aMV = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kT, aB = 1; aB < aMT.length; aB++)
			if (j <= aMU[aB]) {
				this.kt = aMT[aB - 1] - bN.fZ((j - aMU[aB - 1]) * (aMT[aB - 1] - aMT[aB]), aMU[aB] - aMU[aB - 1]), this.ku[5] = aMV[aB - 1] - bN.fZ((j - aMU[aB - 1]) * (aMV[aB - 1] - aMV[aB]), aMU[aB] - aMU[aB - 1]), this.ku[0] = aD.f5 - j - this
					.kt - this.ku[5];
				break
			} aD.kp = aD.f5 - aD.kT, aD.data.numberTeams = (0 < aD.kT) + (0 < aD.kp), aD.data.playerCount = aD.yC = aD.kT + aD.kp, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kT + this.kt, aD.kp - this.kt]), aD.a5e.a5j()
	}, this.aJB = function(player) {
		aMR.push({
			player: player,
			gb: 14 + ay.jk(20)
		})
	}, this.eb = function() {
		if (9 === aD.kl)
			for (var aB = aMR.length - 1; 0 <= aB; aB--) --aMR[aB].gb <= 0 && (af.qa(aMR[aB].player, 0, aj.sH.zw + aj.sH.a0A), aMR.splice(aB))
	}
}

function dF() {
	function aMl() {
		return {
			fJ: bU.fJ,
			fK: bU.fK,
			xe: bU.xe,
			xa: bU.xa,
			xb: bU.xb,
			xf: bU.xf,
			eo: bU.eo,
			mapSeed: bU.mapSeed,
			xc: bU.xc
		}
	}

	function aMd(aB) {
		return 1 !== aB && bU.aEq(aB) && aB !== bU.aMn()
	}
	this.aMX = 25, this.aMY = 13, this.aJN = 4096, this.fJ = 0, this.fK = 0, this.xe = null, this.xa = null, this.xb = null, this.xf = null, this.eo = 0, this.mapSeed = 0, this.xc = !1, this.xd = new aMZ, this.xU = new aMa, this.a81 = new aMb, this
		.dh = function() {
			this.xU.dh()
		}, this.a7 = function(map, aMc) {
			((map %= this.aMX) !== this.eo || aMd(this.eo) && aMc !== this.mapSeed) && (this.xc = !1, this.xd.aMe(), ay.a5k(map), this.eo = map, this.mapSeed = aMc, aMd(map) && (bU.xU.xV[map].aMf = aMc), this.aEq(this.eo) ? (map = bU.xU.xV[this.eo],
				this.fJ = map.i, this.fK = map.j, ay.a5k(map.aMf), aq.a7([this.fJ, this.fK, map.n8, map.n5]), aMh(), ap.aMi(), aq.aMj()) : aMg())
		}, this.aMk = function(map, aMc) {
			var fr = aMl(),
				map = (this.a7(map, aMc), this.xd.aMe(), aMl());
			return aMc = fr, bU.fJ = aMc.fJ, bU.fK = aMc.fK, bU.xe = aMc.xe, bU.xa = aMc.xa, bU.xb = aMc.xb, bU.xf = aMc.xf, bU.eo = aMc.eo, bU.mapSeed = aMc.mapSeed, bU.xc = aMc.xc, map
		}, this.a65 = function(canvas) {
			canvas && this.xe !== canvas && (this.fJ = canvas.width, this.fK = canvas.height, this.xe = canvas, this.xa = this.xe.getContext("2d", {
				alpha: !1
			}), this.i7 = this.xa.getImageData(0, 0, this.fJ, this.fK), this.xf = this.i7.data, this.eo = this.aMn(), this.mapSeed = 0, bU.xU.xV[this.eo].name = aD.data.mapName)
		}, this.en = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aMn()
		}, this.aMo = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aMp = function(aB) {
			return 1 === aB
		}, this.aMn = function() {
			return this.aMX
		}, this.aEq = function(aB) {
			return void 0 === this.xU.xV[aB].aMq
		}, this.a64 = function(qt) {
			return 0 === qt.mapType ? qt.mapProceduralIndex < 10 ? qt.mapProceduralIndex : 10 + qt.mapProceduralIndex : 1 === qt.mapType ? 10 <= qt.mapRealisticIndex ? 22 + qt.mapRealisticIndex - 10 : qt.mapRealisticIndex + 10 : void 0
		}, this.aEr = function(qt, aMr) {
			0 === qt.mapType ? qt.mapProceduralIndex = aMr < 10 ? aMr : aMr - 10 : 1 === qt.mapType && (qt.mapRealisticIndex = aMr - (22 <= aMr ? 12 : 10))
		}
}

function aMZ() {
	function aN0() {
		bU.xd.eb()
	}

	function aN6(gg, aN5) {
		0 < aN5 && (bU.xf[gg] += aN5, bU.xf[gg + 1] += aN5, bU.xf[gg + 2] += aN5)
	}

	function iM(gg) {
		return bU.xf[gg + 2] > bU.xf[gg] && bU.xf[gg + 2] > bU.xf[gg + 1]
	}
	this.aAX = -1, this.a2B = 0, this.aMs = 0, this.aMt = 8, this.aMu = 32, this.aMv = 8, this.aMw = 32, this.aMx = [0, 0], this.a9Y = [0, 0, 0, 0], this.iv = null, this.aMy = !0, this.aMz = !1, this.aMe = function() {
		-1 !== this.aAX && clearTimeout(this.aAX), this.aAX = -1, this.iv = null, aq.aMj()
	}, this.dh = function() {
		7 === aa.a2K() || this.aMz || (this.aMy = !0, this.a2B = 0, this.aMs = 1, this.aMx = [bU.xU.xV[bU.eo].xw[0], bU.xU.xV[bU.eo].xx[0]], this.a9Y = [bU.xU.xV[bU.eo].aMq[3], bU.xU.xV[bU.eo].aMq[4], bU.xU.xV[bU.eo].aMq[5], bU.xU.xV[bU.eo].aMq[
			6]], this.aMt = bU.xU.xV[bU.eo].aMq[7], this.aMu = bU.xU.xV[bU.eo].aMq[8], this.aMv = bU.xU.xV[bU.eo].aMq[9], this.aMw = bU.xU.xV[bU.eo].aMq[10], this.aMy ? this.aAX = setTimeout(aN0, 16) : this.eb())
	}, this.eb = function() {
		if (8 === aa.a2K() && aH.nM()) this.aAX = setTimeout(aN0, 16);
		else {
			if (0 === this.a2B) {
				var aMf = ay.aN1();
				if (ay.a5k(bU.xU.xV[bU.eo].aMq[2]), aq.a7([bU.fJ, bU.fK, bU.xU.xV[bU.eo].aMq[0], bU.xU.xV[bU.eo].aMq[1]]), ay.a5k(aMf), this.iv = aq.aN2(), this.a2B++, this.aMy) return void(this.aAX = setTimeout(aN0, 16))
			}
			for (var gg, eu, aMf = this.aMy ? 10 : 1e6, aMf = bU.fK - this.aMs - 1 < aMf ? bU.fK - this.aMs - 1 : aMf, yt = this.aMs + aMf, fH = this.aMs; fH < yt; fH++)
				for (var fF = 1; fF < bU.fJ - 1; fF++) iM(gg = 4 * (eu = fF + fH * bU.fJ)) ? this.aN3(gg, eu, 1) : (this.aN3(gg, eu, 0), function(fF, fH, gg) {
					return 1 < fF && iM(gg - 4) || fF < bU.fJ - 2 && iM(gg + 4) || 1 < fH && iM(gg - 4 * bU.fJ) || fH < bU.fK - 2 && iM(gg + 4 * bU.fJ)
				}(fF, fH, gg) && this.aN4(fF, fH));
			this.aMs = yt, this.aMs >= bU.fK - 1 ? (bU.xa.putImageData(bU.xb, 0, 0, 1, 1, bU.fJ - 2, bU.fK - 2), bh.dp = !0, this.aMe()) : this.aMy && (this.aAX = setTimeout(aN0, 16))
		}
	}, this.aN3 = function(gg, eu, eF) {
		aN6(gg, Math.floor(this.aMx[eF] + this.a9Y[eF] * this.iv[eu] / 1e4) - bU.xf[gg])
	}, this.aN7 = function(gg, eE, aN8, eF, a9Y) {
		aN6(gg, Math.floor(this.aMx[eF] + (1 - eE / aN8) * a9Y) - bU.xf[gg])
	}, this.aN4 = function(li, lj) {
		for (var gg, eE, aN8, aAN = li - this.aMu, aN9 = lj - this.aMu, yu = li + this.aMu, yt = lj + this.aMu, aAN = aAN < 1 ? 1 : aAN, yu = yu > bU.fJ - 2 ? bU.fJ - 2 : yu, yt = yt > bU.fK - 2 ? bU.fK - 2 : yt, fH = aN9 < 1 ? 1 : aN9; fH <=
			yt; fH++)
			for (var fF = aAN; fF <= yu; fF++) iM(gg = 4 * (fF + fH * bU.fJ)) ? (aN8 = this.aMt + (this.aMu - this.aMt) * this.iv[fF + bU.fJ * fH] / 1e4, Math.abs(li - fF) > aN8 || Math.abs(lj - fH) > aN8 || aN8 <= (eE = Math.sqrt((li - fF) * (
				li - fF) + (lj - fH) * (lj - fH))) || this.aN7(gg, eE, aN8, 1, this.a9Y[3])) : (aN8 = this.aMv + (this.aMw - this.aMv) * this.iv[fF + bU.fJ * fH] / 1e4, Math.abs(li - fF) > aN8 || Math.abs(lj - fH) > aN8 || aN8 <= (eE = Math
				.sqrt((li - fF) * (li - fF) + (lj - fH) * (lj - fH))) || this.aN7(gg, eE, aN8, 0, this.a9Y[2]))
	}
}

function aMh() {
	var t0 = aNA(bU.eo);
	t0 && aNB(t0[0], t0[1], t0[2], t0[3], t0[4])
}

function aNA(eo) {
	return 2 === eo ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eo ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eo ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eo ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eo ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aNB(aNC, aND, aNE, aNF, aNG) {
	for (var fF, fH, aJj, aJk, a3Z, aNJ, iR = aNC.length - 1, aNH = bU.fJ + bU.fK, f8 = (aNH *= aNH, aNE.length), aNI = Array(f8), aB = f8 - 1; 0 <= aB; aB--) aNI[aB] = aNE[aB] * aNE[aB];
	var aNK = new Array(f8),
		aDc = new Array(f8),
		aNL = new Array(f8),
		fa = aq.aN2();
	if (void 0 === aNG)
		for (aNG = new Array(f8), aB = f8 - 1; 0 <= aB; aB--) aNG[aB] = 0;
	for (aB = 1; aB < f8; aB++) aNK[aB] = aNI[aB] - aNI[aB - 1], aDc[aB] = aNF[aB] - aNF[aB - 1], aNL[aB] = aNG[aB] - aNG[aB - 1];
	for (fF = bU.fJ - 1; 0 <= fF; fF--)
		for (fH = bU.fK - 1; 0 <= fH; fH--) {
			for (aJj = aNH, aB = iR; 0 <= aB; aB--) aJj = (aJk = (fF - aNC[aB]) * (fF - aNC[aB]) + (fH - aND[aB]) * (fH - aND[aB])) < aJj ? aJk : aJj;
			for (a3Z = aNF[f8 - 1], aNJ = aNG[f8 - 1], aB = 1; aB < f8; aB++)
				if (aJj < aNI[aB]) {
					a3Z = aNF[aB - 1] + aIV((aJj - aNI[aB - 1]) * aDc[aB], aNK[aB]), aNJ = aNG[aB - 1] + aIV((aJj - aNI[aB - 1]) * aNL[aB], aNK[aB]);
					break
				} aNM(bU.fJ * fH + fF, a3Z, aNJ, fa)
		}
}

function aNM(eF, a3Z, aNJ, fa) {
	a3Z < 500 ? fa[eF] = bN.fZ(fa[eF] * a3Z * 2, 1e3) : 500 < a3Z && (fa[eF] += bN.fZ(2 * (1e4 - fa[eF]) * (a3Z - 500), 1e3)), fa[eF] += bN.fZ(aNJ * (10 * a3Z - fa[eF]), 1e3)
}

function ci() {
	var aNN;

	function aNX(a40, i9, fF, fH, globalAlpha) {
		bU.xa.save(), bU.xa.globalAlpha = globalAlpha, bU.xa.imageSmoothingEnabled = !1, bU.xa.scale(i9, i9), bU.xa.drawImage(a40, Math.floor(fF * (bU.fJ / i9 - a40.width)), Math.floor(fH * (bU.fK / i9 - a40.height))), bU.xa.restore()
	}
	this.a7y = 0, this.a7z = 0, this.a80 = 0, this.a81 = 0, this.dh = function() {
		(aNN = new Array(bU.aMX))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eE: [220, 250, 255, 220],
			th: [190, 220, 0, 0],
			fS: [170, 200, 0, 0]
		}, aNN[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eE: [25, 0, 100, 0, 25],
			th: [25, 0, 0, 0, 25],
			fS: [25, 0, 0, 0, 25]
		}, aNN[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eE: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			th: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fS: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aNN[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eE: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			th: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fS: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aNN[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eE: [10, 10, 20, 10, 10, 170, 212],
			th: [20, 20, 60, 100, 100, 110, 170],
			fS: [70, 70, 160, 30, 30, 60, 120]
		}, aNN[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eE: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			th: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fS: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aNN[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eE: [10, 10, 60, 255, 255, 200, 200],
			th: [10, 10, 60, 255, 255, 200, 200],
			fS: [80, 80, 255, 255, 255, 200, 200]
		}, aNN[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eE: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			th: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fS: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aNN[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eE: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			th: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fS: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aNN[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eE: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			th: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fS: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aNN[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eE: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			th: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fS: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aNN[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eE: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			th: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fS: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMi = function() {
		var aNW, aB, fR, fr, i7 = function() {
				var i7;
				return bU.xe = document.createElement("canvas"), bU.xe.width = bU.fJ, bU.xe.height = bU.fK, bU.xa = bU.xe.getContext("2d", {
					alpha: !1
				}), i7 = bU.xa.getImageData(0, 0, bU.fJ, bU.fK), bU.xf = i7.data, i7
			}(),
			i = aNN[bU.eo].i,
			eE = aNN[bU.eo].eE,
			th = aNN[bU.eo].th,
			fS = aNN[bU.eo].fS,
			fa = aq.aN2(),
			f8 = i.length - 2,
			aNR = new Array(1 + f8),
			aNS = new Array(1 + f8),
			aNT = new Array(1 + f8),
			aNU = new Array(1 + f8);
		for (fR = f8; 0 <= fR; fR--) aNR[fR] = i[fR + 1] - i[fR], aNS[fR] = eE[fR + 1] - eE[fR], aNT[fR] = th[fR + 1] - th[fR], aNU[fR] = fS[fR + 1] - fS[fR];
		for (aB = bU.fJ * bU.fK - 1; 0 <= aB; aB--)
			for (fR = f8; 0 <= fR; fR--)
				if (fa[aB] >= i[fR]) {
					fr = fa[aB] - i[fR], bU.xf[4 * aB] = eE[fR] + aIV(aNS[fR] * fr, aNR[fR]), bU.xf[4 * aB + 1] = th[fR] + aIV(aNT[fR] * fr, aNR[fR]), bU.xf[4 * aB + 2] = fS[fR] + aIV(aNU[fR] * fr, aNR[fR]), bU.xf[4 * aB + 3] = 255;
					break
				} bU.xa.putImageData(i7, 0, 0), bU.aMp(bU.eo) && ab.tl() && bU.aMp(bU.eo) && (i7 = ab.aHf("arena"), aNW = ab.aHf("territorial.io"), aNX(i7, 5, .5, .5, .1), aNX(aNW, 2, .5, .45, .1)), bU.xc = !0, bh.dp = !0
	}, this.a5n = function() {
		for (var gg, fF, fH, aNY, hy, ft, a7z = 0, i = bU.fJ, j = bU.fK, fr = i * j * 4, aNZ = aDB, aNa = bU.xf, aB = i - 1; 0 <= aB; aB--) aNZ[(gg = aB << 2) + 2] = aNZ[fr - gg - 2] = 3;
		for (fr = 4 * i, aB = j - 1; 0 <= aB; aB--) aNZ[(gg = aB * fr) + 2] = aNZ[gg + fr - 2] = 3;
		for (aNY = i - 1, hy = j - 1, fH = 1; fH < hy; fH++)
			for (fr = fH * i, fF = 1; fF < aNY; fF++) ft = 1 - (aNa[(gg = fr + fF << 2) + 2] > aNa[gg + 1] && aNa[gg + 2] > aNa[gg]), aNZ[gg + 2] = 6 - 5 * ft, a7z += ft;
		this.a7y = (i - 2) * (j - 2), this.a81 = 0, bU.en(bU.eo) && (bU.a81.aNb(), bU.a81.aNc(4, 5)), this.a7z = aD.kD = a7z - this.a81, this.a80 = this.a7y - this.a7z - this.a81, this.a80 && (bU.a81.aNc(6, 2), bU.a81.aNd())
	}
}

function aMg() {
	var qi;
	10 === bU.eo ? qi =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bU.eo ? qi =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bU.eo ? qi =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bU.eo ? qi =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bU.eo ? qi =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bU.eo ? qi =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bU.eo ? qi =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bU.eo ? qi =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bU.eo ? qi =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bU.eo ? qi =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bU.eo ? qi =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bU.eo ? qi =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bU.eo && (qi =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xN).xP(qi)
}

function aMa() {
	this.xV = null, this.aNe = null, this.aNf = null, this.dh = function() {
		this.aNg = [L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), "Mare Nostrum"];
		var aNh = [120, 105, 92],
			cos = [12, 12, 60],
			aNi = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aNj = [140, 130, 120],
			aNk = [12, 12, 76],
			aNl = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aNm = [130, 117, 106],
			aNn = [12, 12, 68],
			aNo = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xV = new Array(bU.aMX + 1), this.xV[0] = {
			i: 230,
			j: 230,
			n8: 1e3,
			n5: 2e3,
			aMf: 173
		}, this.xV[1] = {
			i: 800,
			j: 800,
			n8: 100,
			n5: 50,
			aMf: 43
		}, this.xV[2] = {
			i: 512,
			j: 512,
			n8: 128,
			n5: 32,
			aMf: 0
		}, this.xV[3] = {
			i: 960,
			j: 960,
			n8: 60,
			n5: 8,
			aMf: 0
		}, this.xV[4] = {
			i: 900,
			j: 900,
			n8: 100,
			n5: 5,
			aMf: 0
		}, this.xV[5] = {
			i: 1e3,
			j: 1e3,
			n8: 100,
			n5: 40,
			aMf: 0
		}, this.xV[6] = {
			i: 1e3,
			j: 1e3,
			n8: 100,
			n5: 20,
			aMf: 0
		}, this.xV[7] = {
			i: 1024,
			j: 1024,
			n8: 128,
			n5: 32,
			aMf: 0
		}, this.xV[8] = {
			i: 820,
			j: 820,
			n8: 200,
			n5: 100,
			aMf: 0
		}, this.xV[9] = {
			i: 1024,
			j: 1024,
			n8: 128,
			n5: 32,
			aMf: 0
		}, this.xV[10] = {
			xw: aNj,
			xx: aNk,
			aMq: aNl
		}, this.xV[11] = {
			xw: aNm,
			xx: aNn,
			aMq: aNo
		}, this.xV[12] = {
			xw: aNm,
			xx: aNn,
			aMq: aNo
		}, this.xV[13] = {
			xw: aNh,
			xx: cos,
			aMq: aNi
		}, this.xV[14] = {
			xw: aNh,
			xx: cos,
			aMq: aNi
		}, this.xV[15] = {
			xw: aNj,
			xx: aNk,
			aMq: aNl
		}, this.xV[16] = {
			xw: aNj,
			xx: aNk,
			aMq: aNl
		}, this.xV[17] = {
			xw: aNh,
			xx: cos,
			aMq: aNi
		}, this.xV[18] = {
			xw: aNm,
			xx: aNn,
			aMq: aNo
		}, this.xV[19] = {
			xw: aNh,
			xx: cos,
			aMq: aNi
		}, this.xV[20] = {
			i: 1024,
			j: 1024,
			n8: 128,
			n5: 32,
			aMf: 0
		}, this.xV[21] = {
			i: 940,
			j: 940,
			n8: 80,
			n5: 8,
			aMf: 0
		}, this.xV[22] = {
			xw: aNm,
			xx: aNn,
			aMq: aNo
		}, this.xV[23] = {
			xw: aNj,
			xx: aNk,
			aMq: aNl
		}, this.xV[24] = {
			xw: [157, 136, 117],
			xx: [16, 13, 68],
			aMq: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a7x: "[OG] Neutronian"
		};
		for (var aB = 0; aB < bU.aMX; aB++) this.xV[aB].name = this.aNg[aB];
		this.xV[bU.aMX] = {
			name: ""
		}, this.aNe = new Uint8Array(12);
		for (aB = 0; aB < 10; aB++) this.aNe[aB] = aB;
		for (this.aNe[10] = 20, this.aNe[11] = 21, this.aNf = new Uint8Array(bU.aMY), aB = 0; aB < 10; aB++) this.aNf[aB] = 10 + aB;
		this.aNf[10] = 22, this.aNf[11] = 23, this.aNf[12] = 24
	}
}

function aMb() {
	this.aNb = function() {
		for (var gg, fF, fr, aNZ = aDB, aNa = bU.xf, i = bU.fJ, aNY = i - 1, hy = bU.fK - 1, gb = 0, fH = 1; fH < hy; fH++)
			for (fr = fH * i, fF = 1; fF < aNY; fF++) aNa[gg = fr + fF << 2] === aNa[1 + gg] && aNa[gg] === aNa[2 + gg] && (gb++, aNZ[2 + gg] = 4);
		ap.a81 = gb
	}, this.aNc = function(aNr, aNs) {
		for (var aNZ = aDB, i = bU.fJ, aNY = i - 1, hy = bU.fK - 1, id = 0, fH = 1; fH < hy; fH++)
			for (var fr = fH * i, fF = 1; fF < aNY; fF++) {
				var em = 2 + (fr + fF << 2);
				aNZ[em] === aNr && (! function(em, id, aNr, aNs) {
					var f8 = 1,
						aNZ = aDB,
						fA = ac.aIM,
						a3m = [em],
						aNu = id >> 8 << 1,
						aNv = 255 & id;
					aNZ[em - 2] = aNu, aNZ[em - 1] = aNv, aNZ[em] = 5;
					for (; f8;) {
						for (var a3n = [], aB = 0; aB < f8; aB++)
							for (var ex = a3m[aB], fB = 0; fB < 8; fB++) {
								var fC = ex + fA[fB];
								aNZ[fC] === aNr && (aNZ[fC - 2] = aNu, aNZ[fC - 1] = aNv, aNZ[fC] = aNs, a3n.push(fC))
							}
						f8 = (a3m = a3n).length
					}
				}(em, id, aNr, aNs), id = (id + 1) % 32768)
			}
	}, this.aNd = function() {
		for (var aNZ = aDB, i = bU.fJ, aNY = i - 3, hy = bU.fK - 3, aNx = 12 * i, fH = 3; fH < hy; fH++)
			for (var fr = fH * i, fF = 3; fF < aNY; fF++) {
				var em = 2 + (fr + fF << 2);
				2 !== aNZ[em] || 2 === aNZ[em - 12] && 2 === aNZ[12 + em] && 2 === aNZ[em - aNx] && 2 === aNZ[em + aNx] || (aNZ[em - 2] = 1 | aNZ[em - 2])
			}
	}
}

function a5m() {
	(zF = void 0 === zF ? document.createElement("canvas") : zF).width = bU.fJ, zF.height = bU.fK, a5q = zF.getContext("2d", {
		alpha: !0
	}), a5r = aDB = null, a5r = a5q.getImageData(0, 0, bU.fJ, bU.fK), aDB = a5r.data, bC.r9.xg(aDB)
}

function cj() {
	var fa, i, j, max, aNy, n5, aO0, aO1, aO2, aO3, aO4, aO5, aO6, aO7, aNz = 1e4;

	function aOE(aOD, n8, f8) {
		var aB;
		for (aO0[0] = aOD, aB = 1; aB < f8; aB++) aO0[aB] = aO0[aB - 1] + n8, n8 = aO0[aB] >= aNz ? (aO0[aB] = aNz - 1, -n8) : aO0[aB] < 0 ? (aO0[aB] = 0, -n8) : (n8 += 16384 <= ay.random() ? n5 : -n5) < -aNy ? -aNy : aNy < n8 ? aNy : n8
	}

	function aOG(fF, fH, aOH, f8) {
		(aOH ? function(fF, fH, f8) {
			var aB;
			for (aB = 0; aB < f8; aB++) fa[fH * i + fF + aB] = aO0[aB]
		} : function(fF, fH, f8) {
			var aB;
			for (aB = 0; aB < f8; aB++) fa[fH * i + fF + aB * i] = aO0[aB]
		})(fF, fH, f8)
	}

	function aOK(value, f8) {
		var aB, aLy, em, ji = value - aO0[f8 - 1];
		if (0 != ji) {
			for (aLy = 1 + bN.fZ(Math.abs(ji), f8 - 1), aLy = ji < 0 ? -aLy : aLy, aO0[f8 - 1] = value, em = (em = f8 - 1 - bN.fZ(Math.abs(ji), Math.abs(aLy))) < 1 ? 1 : f8 - 2 < em ? f8 - 2 : em, aB = f8 - 2; em <= aB; aB--) aO0[aB] += ji - (f8 -
				1 - aB) * aLy;
			(ji < 0 ? function(f8) {
				var aB;
				for (aB = f8 - 2; 1 <= aB; aB--) aO0[aB] < 0 && (aO0[aB] = -aO0[aB] - 1)
			} : function(f8) {
				var aB;
				for (aB = f8 - 2; 1 <= aB; aB--) aO0[aB] >= aNz && (aO0[aB] = 2 * aNz - aO0[aB] - 1)
			})(f8)
		}
	}

	function aON(a3m, a3n, f8) {
		for (var aB = 0; aB < f8; aB++) a3m[aB] = a3n[aB]
	}

	function aOO(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aOP(a6S, gap, hz) {
		aO1.push(a6S), aO2.push(gap), aO3.push(hz)
	}
	this.a7 = function(a50) {
		! function(a50) {
			var aB;
			for (i = a50[0], j = a50[1], aNy = a50[2], n5 = a50[3], fa = new Int16Array(i * j), max = j < i ? i : j, aO0 = new Int16Array(max), aO1 = [], aO2 = [], aO3 = [], aO4 = new Array(i), aO5 = new Array(j), aB = i - 1; 0 <= aB; aB--) aO4[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aO5[aB] = !1;
			aO6 = new Int16Array(i), aO7 = new Int16Array(j)
		}(a50),
		function(f8) {
			var aOD = ay.random() % aNz,
				n8 = ay.random() % (2 * aNy + 1) - aNy;
			aOE(aOD, n8, f8)
		}(max), aON(aO7, aO0, j), aOG(0, 0, !0, i);
		var fF, fH, a50 = fa[0],
			f8 = max,
			n8 = ay.random() % (2 * aNy + 1) - aNy;
		for (aOE(a50, n8, f8), aON(aO6, aO0, i), aOG(0, 0, !1, j), aOO(aO6), aOO(aO7), aOE(fa[i - 1], aO6[i - 1], j), aOG(i - 1, 0, !1, j), aOE(fa[i * (j - 1)], aO7[j - 1], i), aOK(fa[i * j - 1], i), aOG(0, j - 1, !0, i), aO4[i - 1] = aO4[0] = !
			0, aO5[j - 1] = aO5[0] = !0, aOP(0, i, !0), aOP(0, j, !1), ! function() {
				var aOR, a6S;
				for (;;) {
					if (aOR = function() {
							var aB, aOR = aO1.length - 1;
							for (aB = aOR - 1; 0 <= aB; aB--) aO2[aB] > aO2[aOR] && (aOR = aB);
							return aOR
						}(), aO2[aOR] < 5) return;
					a6S = aO1[aOR] + bN.fZ(aO2[aOR], 2), (aO3[aOR] ? function(fF) {
						var f8, aOU, aB, aH1 = 0,
							aOV = 0;
						for (; aOV < j - 1;) {
							for (aB = aH1 + 1; aB < j; aB++)
								if (aO5[aB]) {
									aOV = aB;
									break
								} f8 = aOV - aH1 + 1, aOE(fa[fF + i * aH1], 0 === aH1 ? aO6[fF] : aO0[aOU - 1] - aO0[aOU - 2], f8), aOK(fa[aOV * i + fF], f8), aOG(fF, aH1, !1, f8), aOU = f8, aH1 = aOV
						}
						aO4[fF] = !0
					} : function(fH) {
						var f8, aOU, aB, aH1 = 0,
							aOV = 0;
						for (; aOV < i - 1;) {
							for (aB = aH1 + 1; aB < i; aB++)
								if (aO4[aB]) {
									aOV = aB;
									break
								} f8 = aOV - aH1 + 1, aOE(fa[fH * i + aH1], 0 === aH1 ? aO7[fH] : aO0[aOU - 1] - aO0[aOU - 2], f8), aOK(fa[fH * i + aOV], f8), aOG(aH1, fH, !0, f8), aOU = f8, aH1 = aOV
						}
						aO5[fH] = !0
					})(a6S), aOP(a6S, aO1[aOR] + aO2[aOR] - a6S, aO3[aOR]), aO2[aOR] = a6S - aO1[aOR] + 1
				}
			}(), fF = 0; fF < i; fF++)
			if (!aO4[fF])
				for (fH = 0; fH < j; fH++) aO5[fH] || ! function(fF, fH) {
					var value = fa[fH * i + fF - 1] + fa[(fH - 1) * i + fF],
						a8G = 2;
					aO4[fF + 1] && (a8G++, value += fa[fH * i + fF + 1]);
					aO5[fH + 1] && (a8G++, value += fa[(fH + 1) * i + fF]);
					fa[fH * i + fF] = bN.fZ(value, a8G)
				}(fF, fH)
	}, this.aN2 = function() {
		return fa
	}, this.aMj = function() {
		fa = null
	}
}

function aIV(fR, fS) {
	return 0 <= fR ? bN.fZ(fR, fS) : -bN.fZ(-fR, fS)
}

function jz(fa) {
	return fa * fa
}

function a7R(fR, fS) {
	return fS < fR ? fR : fS
}

function aCg(fR, fS) {
	return fR < fS ? fR : fS
}

function a9s(fR, fa, fS) {
	return fa < fR ? fR : fS < fa ? fS : fa
}

function aOX(fa, f8) {
	for (var eg = bN.fZ(fa + 1, 2), aB = 0; aB < f8; aB++) eg = bN.fZ(eg + bN.fZ(fa, eg), 2);
	return eg
}

function aKV(fa, f8) {
	return fa < 1 ? 0 : aOX(fa, f8)
}

function aOY(nU, nV, tQ, a9b, nh, ni, tR, u9) {
	return !(nU + tQ <= nh || nV + a9b <= ni || nh + tR <= nU || ni + u9 <= nV)
}

function aOZ(nU, nV, tQ, a9b, nh, ni, tR, u9) {
	return nU <= nh && nV <= ni && nh + tR <= nU + tQ && ni + u9 <= nV + a9b
}

function xX(fa) {
	return Math.floor(!!fa * (1 + Math.log2(fa + .5)))
}

function bz() {
	this.fZ = function(fR, fS) {
		return Math.floor((fR + .5) / fS)
	}, this.aOa = function(fR, fS) {
		return Math.floor(fR * (fS + .5))
	}, this.sqrt = function(fa) {
		return ~~Math.sqrt(fa + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iG = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aOb = function(fr, ft, fv) {
		return Math.max(Math.min(fr, ft), fv)
	}, this.aOc = function(aOd, aOe, fF, fH) {
		fF -= aOd, aOd = fH - aOe, fH = 0;
		return 0 == fF ? fH = 0 <= aOd ? Math.PI : 0 : (fH = Math.atan(aOd / fF), fH += 0 < fF ? .5 * Math.PI : 1.5 * Math.PI), fH
	}, this.log2 = function(fa) {
		return Math.floor(!!fa * (1 + Math.log2(fa + .5)))
	}, this.log10 = function(fa) {
		return Math.floor(Math.log10(fa + .5))
	}, this.aOg = function(aOh, aOi, aOj, aOk, aOl) {
		return aOj - aOl < aOh && aOh < aOj + aOl && aOk - aOl < aOi && aOi < aOk + aOl
	}, this.yU = function(aAI, aAK) {
		return aAI * aAI + aAK * aAK
	}
}

function dH() {
	this.y = new aOm, this.tJ = 0;
	var aOn = new Array(32);

	function aOq() {
		for (var f8 = aOn.length, aB = 0; aB < f8; aB++) aOn[aB] = null
	}
	this.dh = function() {
		for (var aOo, aOp = document.body.firstChild; aOp;) aOo = aOp.nextSibling, !document.body.contains(aOp) || "DIV" !== aOp.tagName && "INPUT" !== aOp.tagName && "BUTTON" !== aOp.tagName || t.removeChild(document.body, aOp), aOp = aOo
	}, this.u = function(eF, a2P, a50) {
		void 0 === a2P && (a2P = this.tJ), bh.dp = !0, 0 === eF && (0 === aa.a2K() ? eF = 5 : a0.a1.setState(13)), this.sI(), this.tJ === eF && (a2P = aOn[eF].a2P, aOn[eF] = null), this.tJ = eF;
		var lO = aOn[eF];
		if (!lO || 4 === eF || 7 === eF || 8 === eF || 9 === eF || 10 === eF || 11 === eF || 13 === eF || 15 === eF || 18 === eF || 20 <= eF && eF <= 28 || 32 === eF || 33 === eF) {
			if (0 === eF) return void aOq();
			1 === eF ? lO = new aOr : 2 === eF ? lO = new aOs : 3 === eF ? lO = new aOt : 4 === eF || 9 === eF || 10 === eF || 11 === eF || 13 === eF || 33 === eF ? lO = a50 : 5 === eF ? lO = new aOu : 6 === eF ? lO = new aOv : 7 === eF ? lO =
				new aOw(t.y.aOx) : 8 === eF ? lO = a50 : 12 === eF ? lO = new aOy : 14 === eF ? lO = new aOz : 15 === eF ? lO = new aOw(t.y.aP0) : 16 === eF ? lO = new aP1 : 17 === eF ? lO = new aP2 : 18 === eF ? lO = new aP3 : 19 === eF ? lO =
				new aP4 : 20 === eF ? lO = new aP5 : 21 === eF ? lO = new aP6 : 22 === eF ? lO = new aP7 : 23 === eF ? lO = new aP8 : 24 === eF ? lO = new aP9 : 25 === eF ? lO = new aPA : 26 === eF ? lO = new aPB : 27 === eF ? lO = new aPC :
				28 === eF ? lO = new aPD : 29 === eF ? lO = new aPE : 30 === eF ? lO = new aPF : 31 === eF ? lO = new aPG : 32 === eF && (lO = new aPH), lO.a2P = a2P, aOn[eF] = lO
		}
		lO.show(a50)
	}, this.a2J = function() {
		this.hu() && this.aPI(this.a2O().a2P)
	}, this.aPI = function(eF) {
		this.hu() && (aOn[eF] ? (this.sI(), bh.dp = !0, this.tJ = eF, aOn[eF].show()) : this.u(eF))
	}, this.sI = function() {
		this.hu() && aOn[this.tJ].sI()
	}, this.x = function() {
		this.hu() && (aOn[this.tJ].sI(), aOq(), this.tJ = 0, a0.a1.setState(13))
	}, this.vf = function() {
		var lO;
		this.hu() && (lO = aOn[this.tJ]).vf && lO.vf()
	}, this.resize = function() {
		if (!this.hu()) return !1;
		aOn[this.tJ].resize()
	}, this.hL = function(fF, fH) {
		var lO;
		this.hu() && (lO = aOn[this.tJ]).hL && lO.hL(fF, fH)
	}, this.a2g = function(fF, fH) {
		var lO;
		this.hu() && (lO = aOn[this.tJ]).a2g && lO.a2g(fF, fH)
	}, this.a34 = function() {
		var lO;
		this.hu() && (lO = aOn[this.tJ]).a34 && lO.a34()
	}, this.a2j = function(li, lj, deltaY) {
		var lO;
		this.hu() && (lO = aOn[this.tJ]).a2j && lO.a2j(li, lj, deltaY)
	}, this.a3E = function(code) {
		var lO;
		return !!this.hu() && ((lO = aOn[this.tJ]).a3E && lO.a3E(code), !0)
	}, this.eb = function() {
		var lO;
		this.hu() && (lO = aOn[this.tJ]) && lO.eb && lO.eb()
	}, this.hu = function() {
		return 0 < this.tJ
	}, this.a2O = function() {
		return aOn[this.tJ]
	}, this.a6D = function(eF) {
		return aOn[eF]
	}, this.aPJ = function() {
		return aOn
	}, this.removeChild = function(vD, a4V) {
		try {
			vD.removeChild(a4V)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOw(data) {
	var aPK, aPL;

	function aPO(qw, aQ4) {
		if (!data.aPM) {
			if (data.aQ0) {
				if (aQ4) return
			} else {
				if (!aQ4) return;
				if (data.wu < 1e4) return
			}
			var aQ7, aPg = new qe,
				aQ5 = 1e5 <= data.wu,
				aQ6 = aPg.qh(aQ4 ? (aQ5 ? "⚠️ " : "") + L(255) : L(256)),
				aQ9 = (aQ5 && (aQ6.style.color = "yellow"), aQ4 ? aPg.qj(L(257, [bC.s0.a5H(data.wu, .01, 0)])) : ((aQ7 = new rp({
					value: data.aQ8,
					eF: -1
				})).e.readOnly = !0, aQ7.e.type = "password", aPg.qs(aQ7), aPg.qs(new sU([new w(L(191), function(e) {
					return e.textContent === L(191) ? (e.textContent = L(192), aQ7.e.type = "text") : (e.textContent = L(191), aQ7.e.type = "password"), !0
				}).button, new w(L(188), function(e) {
					return bC.r1.a4T(aQ7.e), bC.r1.vJ(e), !0
				}).button]))), aPg.qn(L(aQ4 ? 256 : 258)).style.marginTop = "0.75em", new rp({
					value: "",
					eF: -1
				}, 0, 0)),
				aQB = (aQ9.e.type = "email", aQ9.e.autocomplete = "email", aQ9.e.name = "email", aQ9.e.inputMode = "email", aQ9.e.spellcheck = !1, aPg.qs(aQ9), aPg.qs(new sU([new w(L(259), function(e) {
					return b0.aGP.aQA({
						tL: 3,
						qi: aQ9.e.value.trim().substring(0, 63)
					}), bC.r1.vJ(e), !0
				}).button])), aQ4 && aPg.qj(L(260)), aPg.qn(L(261)).style.marginTop = "0.75em", new rp({
					value: "",
					eF: -1
				}, 1));
			aPg.qs(aQB), aPg.qs(new sU([new w(L(262), function() {
				b0.aGP.aGQ({
					tL: 4,
					tH: "",
					value: Math.floor(+aQB.e.value)
				}), t.u(8, t.a2O().a2P, new tK(18))
			}).button])), qw.push(aPg)
		}
	}
	this.show = function() {
		data.aPM && bK.aQU("account", data.tH), aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(data.username, [new w("⬅️ " + L(40), function() {
		bK.clear(), t.a2J()
	}), new w(data.aPM ? "🔄 " + L(164) : L(165), function() {
		t.u(8, data.aPM ? t.a2O().a2P : void 0, new tK(25, {
			tL: 0,
			tH: data.tH,
			tI: data.tI
		}))
	}, 0, 0, 1)]), aPL = new qu(aPK.vW, function() {
		var qw = [];
		aPO(qw, 1), qw.push(function() {
				var aPg = new qe;
				aPg.qh(L(229)), data.aQ0 && (aPg.qn("✅ " + L(230)).style.marginBottom = "0.75em");
				var a1s = data.aQ1;
				a1s < 1 ? (aPg.qn(L(231)), 0 === data.aQ2 ? aPg.qj(L(232)) : 1 === data.aQ2 ? aPg.qj(L(233)) : 2 === data.aQ2 ? aPg.qj(L(234)) : 3 === data.aQ2 ? aPg.qj(L(235)) : 4 === data.aQ2 ? aPg.qj(L(236)) : 5 === data.aQ2 ? aPg.qj(
					L(237)) : 6 === data.aQ2 ? aPg.qj(L(238)) : aPg.qj(L(239))) : (aPg.qn(L(240)), a1s = a1s < 2 ? L(241) : a1s < 61 ? 2 === a1s ? L(242) : L(243, [a1s - 1]) : a1s < 84 ? 61 === a1s ? L(244) : L(245, [a1s - 60]) :
					a1s < 255 ? 84 === a1s ? L(246) : L(247, [a1s - 83]) : L(248), aPg.qj(a1s));
				{
					var qk, aPl;
					aPg.qs(new se), data.aPM && (qk = aPg.qj(), aPg.qs(new sU([new w(bl.w4.uc(data.tH) ? L(249) : L(250), function(e) {
						return bl.w4.wH(data.tH) ? (e.textContent = L(249), aPl(1)) : (e.textContent = L(250), aPl(0)), !0
					}).button])), aPl = function(fa) {
						qk.textContent = fa ? L(251) : ""
					}, bl.w4.uc(data.tH) && aPl(1), aPg.qs(new se))
				}
				var ro = new rp({
					value: data.username,
					eF: -1
				});
				ro.e.readOnly = !0, aPg.qs(ro), aPg.qs(new sU([new w(L(188), function(e) {
					return bC.r1.a4T(ro.e), bC.r1.vJ(e), !0
				}).button])), data.aPM ? (aPg.qs(new se), aPg.qn(b0.y.aPh("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aPg.qs(new sU([new w(L(253), function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 0
					}), bC.r1.vJ(e), !0
				}, bD.ok).button])), aPg.qs(new sU([new w(L(254), function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 1
					}), bC.r1.vJ(e), !0
				}, bD.ok).button])), aPg.qs(new sU([new w("Cheater", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 2
					}), bC.r1.vJ(e), !0
				}, bD.ok).button])), aPg.qs(new sU([new w("False Reporter", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 3
					}), bC.r1.vJ(e), !0
				}, bD.ok).button])), (a1s = "CRTOR" === (a1s = bl.eT.data[105].value) || "ADMIN" === a1s) && (aPg.qs(new sU([new w("Block Account", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 4
					}), bC.r1.vJ(e), !0
				}, bD.oi).button])), aPg.qs(new sU([new w("Ban IP", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 5
					}), bC.r1.vJ(e), !0
				}, bD.oi).button])), aPg.qs(new sU([new w("Gold Seizure", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 6
					}), bC.r1.vJ(e), !0
				}, bD.oi).button])), aPg.qs(new sU([new w("Remove Punishments", function(e) {
					return b0.aGP.aGQ({
						tL: 3,
						tH: data.tH,
						value: 7
					}), bC.r1.vJ(e), !0
				}, bD.oW).button])))) : aPg.qj(L(252));
				return aPg
			}()),
			function(qw) {
				var aPg, qk, aDR, aQD, aPm, aPo, aPn;
				data.aPM || ((aPg = new qe).qh(L(263)), (qk = aPg.qj(data.aQC.length + " / 160")).style.textAlign = "center", aDR = !0, (aQD = new vo(0, 1, function(e) {
					e = e.target.value.length;
					qk.textContent = e + " / 160", 160 < e ? aDR && (aDR = !1, aPo.rL(1)) : aDR || (aDR = !0, aPo.rL(0))
				})).e.rows = 6, aQD.e.style.fontSize = "1em", aQD.vv(data.aQC), aPg.qs(aQD), 0 !== data.aQE ? (aPo = new w(L(264), function() {
					if (!aDR) return !0;
					t.u(8, t.a2O().a2P, new tK(29, {
						tL: 1,
						qi: aQD.vw().substring(0, 160)
					}))
				}, 0, 0, 1), aPg.qs(new sU([aPo.button])), aPg.qs(new sU([new w(1 === data.aQE ? L(265) : L(266), function() {
					t.u(8, t.a2O().a2P, new tK(29, {
						tL: 0,
						qi: ""
					}))
				}, 0, 0, 1).button])), aPg.qj(1 === data.aQE ? L(267, [data.aQF - 1]) : L(268, [data.aQF - 1])), aPg.qj(L(269, [data.aQG]))) : (aPm = new w(L(270), function() {
					if (!aQD.e.readOnly) return !0;
					t.u(8, t.a2O().a2P, new tK(29, {
						tL: 1,
						qi: aQD.vw().substring(0, 160)
					}))
				}, 1), aPo = new w(L(185), function(e) {
					if (e.textContent === L(185)) {
						if (!aDR) return !0;
						e.textContent = L(186), aQD.e.readOnly = !0, aPm.rL(0), aPm.button.style.color = bD.p4
					} else aPn();
					return !0
				}), aPg.qs(new sU([aPo.button])), aPg.qj(L(269, [data.aQG])), aPn = function() {
					aPo.button.textContent = L(185), aQD.e.readOnly = !1, aPm.rL(1), aPm.button.style.color = bD.o4
				}, aPg.qs(new sU([aPm.button]))), qw.push(aPg))
			}(qw),
			function(qw) {
				var aPg;
				data.aPM && 0 !== data.aQE && ((aPg = new qe).qh(L(271)), aPg.ql(data.aQC), aPg.qs(new sU([new w(L(272, 0, "Report"), function(e) {
					return b0.y.ec(0) && (bC.r1.vJ(e), b0.aGP.aQH({
						tL: 5,
						tH: data.tH
					})), !0
				}, 0, 0, 1).button])), qw.push(aPg))
			}(qw), qw.push(function() {
				var aPg = new qe,
					aPi = (aPg.qh(L(166)), aPg.qn(b0.y.aPh("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180)]),
					eE = data.aPj;
				return aPg.qn(L(181) + bC.s0.a5H(data.wu, .01, 2) + "<br>" + L(182) + (eE + 1) + " / " + data.wt + "<br>" + L(183) + aPi[function(eE, wu) {
					if (eE < 10) return 0;
					if (eE < 30) return 1;
					if (eE < 60) return 2;
					if (3e4 <= (wu = bN.fZ(wu, 100))) return 3;
					if (12e3 <= wu) return 4;
					if (7e3 <= wu) return 5;
					if (3e3 <= wu) return 6;
					if (1e3 <= wu) return 7;
					if (500 <= wu) return 8;
					if (200 <= wu) return 9;
					if (70 <= wu) return 10;
					if (20 <= wu) return 11;
					if (3 <= wu) return 12;
					return 13
				}(eE, data.wu)]), aPg
			}()), data.aPM && qw.push(function() {
				var aPg = new qe,
					ro = (aPg.qh(L(184)), aPg.qn(b0.y.aPh("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rp({
						value: bl.eT.data[147].value,
						eF: -1
					}, 1, void 0, function(e) {
						bl.pV.pW(147, aPl(e.target.value))
					})),
					aPm = (aPg.qs(ro), new w(L(14), function(e) {
						return ro.e.readOnly && b0.y.ec(0) && (bC.r1.vJ(e), aPn(), b0.aGP.aGQ({
							tL: 0,
							tH: data.tH,
							value: parseInt(bl.eT.data[147].value, 10)
						})), !0
					}, 1)),
					aPo = new w(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), ro.e.readOnly = !0, aPm.rL(0), aPm.button.style.color = bD.p4, bl.pV.pW(147, ro.e.value), aPl(bl.eT.data[147].value)) : aPn(), !0
					}),
					qk = (aPg.qs(new sU([aPo.button])), aPg.qj()),
					aPl = function(fa) {
						qk.innerHTML = t.y.aPp(fa, bl.eT.data[105].value, data.tH)
					},
					aPn = function() {
						aPo.button.textContent = L(185), ro.e.readOnly = !1, aPm.rL(1), aPm.button.style.color = bD.o4
					};
				return aPl(bl.eT.data[147].value), aPg.qs(new sU([aPm.button])), aPg
			}());
		qw.push(function() {
			var aPg = new qe,
				ro = (aPg.qh(L(187)), new rp({
					value: data.tH,
					eF: -1
				})),
				aPq = (ro.e.readOnly = !0, aPg.qs(ro), aPg.qs(new sU([new w(L(188), function(e) {
					return bC.r1.a4T(ro.e), bC.r1.vJ(e), !0
				}).button])), aPg.qs(new se), new rp({
					value: data.tH,
					eF: -1
				}));
			return aPg.qs(aPq), aPg.qs(new sU([new w(L(189), function(e) {
				t.u(8, t.a2O().a2P, new tK(25, {
					tL: 0,
					tH: aPq.e.value,
					tI: 0
				}))
			}).button])), aPg
		}()), data.aPM || (qw.push(function() {
			var aPg = new qe,
				aPr = (aPg.qh(L(190)), new rp(bl.eT.data[106]));
			return aPr.e.readOnly = !0, aPr.e.type = "password", aPg.qs(aPr), aPg.qs(new sU([new w(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aPr.e.type = "text") : (e.textContent = L(191), aPr.e.type = "password"), !0
			}).button, new w(L(188), function(e) {
				return bC.r1.a4T(aPr.e), bC.r1.vJ(e), !0
			}).button])), aPg.qs(new sU([new w(L(193), function() {
				t.u(8, t.a2O().a2P, new tK(15))
			}).button])), aPg.qh(L(194), "0.8em"), aPg.qj(L(195)), aPg.qj(L(196)), aPg.qj(L(197)), aPg
		}()), qw.push(function() {
			var aPg = new qe;
			return aPg.qh(L(198)), aPg.qs(new sU([new w(L(199), function() {
				t.u(6, t.a2O().a2P)
			}).button])), aPg.qs(new sU([new w(L(200), function() {
				bl.pV.pW(105, ""), t.u(8, t.a2O().a2P, new tK(18))
			}).button])), aPg.qs(new sU([new w(L(201) + bl.eT.data[105].value, function() {
				t.u(4, 0, new v(L(202), L(203), !0, [new w("⬅️ " + L(40), function() {
					t.u(7, t.a6D(7).a2P)
				})]))
			}, bD.ok).button])), aPg
		}()), qw.push(function() {
			function aPt(eF) {
				aPs[0].rL(0 === eF ? bD.oG : bD.oR), aPs[1].rL(0 === eF ? bD.oG : bD.ok), aPs[2].rL(eF === qq.qr.length - 1 || eF < 5 ? bD.oG : bD.ok)
			}
			var qq, aPs, aPg = new qe;
			aPg.qh(L(208)), aPg.qj(L(209)), bl.y.wd();
			return aPs = [new w(L(210), function() {
				var eF = Math.min(bl.eT.data[117].value, qq.qr.length - 1);
				eF < 1 || (eF = bl.y.wh(eF), bl.pV.pW(105, eF.tH), bl.pV.pW(106, eF.password), t.u(8, t.a2O().a2P, new tK(18)))
			}, bD.oG, 1), new w(L(206), function() {
				var eF = Math.min(bl.eT.data[117].value, qq.qr.length - 1);
				if (!(eF < 1)) {
					qq.qr[eF].remove(), qq.qr.splice(eF, 1);
					for (var aB = eF; aB < qq.qr.length; aB++) qq.qr[aB].name = "" + aB;
					bl.y.wg(eF), eF = bl.eT.data[117].value, qq.qr[eF].textContent = qq.qr[eF].textContent.replace("⚪", "🟢"), aPt(eF)
				}
			}, bD.oG, 1), new w(L(207), function() {
				var eF = Math.min(bl.eT.data[117].value, qq.qr.length - 1);
				if (eF !== qq.qr.length - 1) {
					for (var aB = qq.qr.length - 1; eF < aB; aB--) qq.qr[aB].remove(), qq.qr.splice(aB, 1), bl.y.wg(aB);
					aPt(eF)
				}
			}, bD.oG, 1)], qq = new vM(bl.eT.data[117], aPt), aPt(0), qq.qr[0].style.marginTop = "0.5em", aPg.qp(qq), aPg.qs(new sU([aPs[0].button])), aPg.qs(new sU([aPs[1].button])), aPg.qs(new sU([aPs[2].button])), aPg
		}()));
		return qw.push(function() {
				var aPg = new qe,
					aPi = (aPg.qh(L(214)), [L(215), L(216), L(217), L(218)]),
					eE = data.aPu;
				return aPg.qn(L(219) + (data.a1b / 100).toFixed(2) + "<br>" + L(182) + (eE + 1) + " / " + data.wt + "<br>" + L(183) + aPi[eE < 10 ? 0 : eE < 50 ? 1 : eE < 200 ? 2 : 3]), aPg
			}()), qw.push(function() {
				var aPg = new qe;
				return aPg.qh(L(211)), aPg.qn(L(212) + bC.s0.a5H(data.wq, .1, 1) + "<br>" + L(182) + (data.wr + 1) + " / " + data.wt + "<br>" + L(213) + data.ws), aPg
			}()),
			function(qw) {
				var aPg = new qe,
					aQI = data.wx,
					aQJ = (aPg.qh(L(273)), aPg.qn(L(274, [data.wv.length ? "[" + data.wv + "]" : "-"])), aPg.qn(L(275, [bC.s0.a5H(aQI, .01, 2)])), aPg.qn(L(276, [data.wz + 1 + " / " + data.wt])), data.x0),
					aQK = (aPg.qn(L(277, [bC.s0.a5H(aQJ, .1, 1)])), data.x2);
				aPg.qn(L(278, [aQK])), aPg.qn(L(279, [bC.s0.a5H(aQJ / Math.max(aQK, 1), .1, 2)])), aQI = data.wy, aPg.qh(L(280), "0.8em"), aPg.qn(L(274, [data.ww.length ? "[" + data.ww + "]" : "-"])), aPg.qn(L(275, [bC.s0.a5H(aQI, .01, 2)])),
					aQJ = data.x1, aPg.qn(L(277, [bC.s0.a5H(aQJ, .1, 1)])), aQK = data.x3, aPg.qn(L(278, [aQK])), aPg.qn(L(279, [bC.s0.a5H(aQJ / Math.max(aQK, 1), .1, 2)])), aPg.qn(b0.y.aPh("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qw.push(aPg)
			}(qw),
			function(qw) {
				var aPg = new qe;
				aPg.qh(L(281)), aPg.qn(L(219) + (data.aQL / 10).toFixed(1) + "<br>" + L(183) + (data.aQM.length ? L(282, [data.aQM]) : L(283))), data.aPM && aPg.qs(new sU([new w(L(284), function(e) {
					return b0.y.ec(0) && (bC.r1.vJ(e), b0.aGP.aQH({
						tL: 4,
						tH: data.tH
					})), !0
				}, 0, 0, 1).button]));
				aPg.qn(b0.y.aPh("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qw.push(aPg)
			}(qw), qw.push(function() {
				var aPg = new qe;
				if (aPg.qh(L(226)), aPg.qn(L(227) + data.aPx + "<br>" + L(182) + (data.aPy + 1) + " / " + data.wt + "<br>" + L(183) + bq.eH(data.aPy)), data.aPM) {
					var ro = new rp({
							value: bl.eT.data[157].value,
							eF: -1
						}, 1, void 0, function(e) {
							bl.pV.pW(157, aPl(e.target.value))
						}),
						aPo = (ro.e.style.marginTop = "0.6em", aPg.qs(ro), new w(L(185), function(e) {
							return e.textContent === L(185) ? (e.textContent = L(186), ro.e.readOnly = !0, aPz[0].rL(0), aPz[1].rL(0), aPz[0].button.style.color = bD.p4, aPz[1].button.style.color = bD.p4, aPl(bl.eT.data[157]
								.value)) : aPn(), !0
						})),
						aPz = (aPg.qs(new sU([aPo.button])), [new w("−", function(e) {
							return ro.e.readOnly && b0.y.ec(0) && (bC.r1.vJ(e), aPn(), b0.aGP.aGQ({
								tL: 2,
								tH: data.tH,
								value: bN.iG(parseInt(bl.eT.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return ro.e.readOnly && b0.y.ec(0) && (bC.r1.vJ(e), aPn(), b0.aGP.aGQ({
								tL: 1,
								tH: data.tH,
								value: bN.iG(parseInt(bl.eT.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qk = aPg.qj(),
						aPl = function(fa) {
							return fa = bC.gU.a4x(fa, 3, 32767), qk.textContent = L(228, [fa - 1, fa, bl.eT.data[105].value]), fa
						};
					aPg.qs(new sU([aPz[0].button, aPz[1].button]));
					for (var aB = 0; aB < 2; aB++) aPz[aB].button.style.fontSize = "1.6em";
					var aPn = function() {
						aPo.button.textContent = L(185), ro.e.readOnly = !1, aPz[0].rL(1), aPz[1].rL(1), aPz[0].button.style.color = bD.o4, aPz[1].button.style.color = bD.o4
					};
					aPl(bl.eT.data[157].value)
				}
				return aPg
			}()),
			function(qw) {
				var aPg, a4S;
				data.aPM && !data.aQN || (0 === a0.id || data.aPM || data.aQN) && ((aPg = new qe).qh("Patreon"), !data.aPM && data.aQO ? aPg.qs(new sU([new w(L(191), function() {
					b0.aGP.aQH({
						tL: 7,
						tH: data.tH
					}), data.aQO = 0, t.u(7)
				}).button])) : data.aQN ? (aPg.qn(L(285, [(data.aQP / 100).toFixed(2)]) + "<br>" + L(286, [1 + data.aQQ + " / " + data.aQR]) + "<br>" + L(287, [data.aQS ? L(288) : L(289)])), data.aPM || aPg.qs(new sU([new w(L(290),
					function() {
						b0.aGP.aQH({
							tL: 8,
							tH: data.tH
						}), data.aQN = 0, bl.pV.pW(160, 0), t.u(7)
					}).button]))) : (aPg.qn(L(291), "0.75em").style.marginBottom = "0.3em", aPg.qn("  • " + L(292), "0.75em").style.whiteSpace = "pre", aPg.qn("  • " + L(293), "0.75em").style.whiteSpace = "pre", aPg.qn("  • " + L(
						294), "0.75em").style.whiteSpace = "pre", aPg.qn(L(295), "0.75em").style.marginTop = "1.0em", aPg.qn(L(296), "0.75em").style.marginTop = "1.0em", aPg.qn("<a href='" + bM.aQT +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4S = "https://www.patreon.com/oauth2/authorize?state=" + data.tH +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1Y() + "/", aPg.qn(L(297), "0.75em").style.marginTop = "1.0em", aPg.qn("<a href='" +
						a4S + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPM || (aPg.qs(new se), aPg.qs(new sU([new w(L(192), function() {
						b0.aGP.aQH({
							tL: 6,
							tH: data.tH
						}), data.aQO = 1, t.u(7)
					}).button])), aPg.qn(L(298), "0.75em").style.marginTop = "0.75em")), qw.push(aPg))
			}(qw), qw.push(function() {
				var aPg = new qe,
					aPi = (aPg.qh(L(220)), [L(221), L(222), L(223), L(224), "Scout", L(225)]),
					eE = data.aPv;
				return aPg.qn(L(219) + (data.aPw / 100).toFixed(2) + "<br>" + L(182) + (eE + 1) + " / " + data.wt + "<br>" + L(183) + aPi[eE < 3 ? 0 : eE < 20 ? 1 : eE < 100 ? 2 : eE < 500 ? 3 : eE < 2e3 ? 4 : 5]), aPg
			}()),
			function(qw) {
				var aPg, qq, aPs, eF, aPt;
				data.aPM || bl.w4.get().length && ((aPg = new qe).qh(L(204)), eF = 0, aPt = function() {
					var aD6 = bl.w4.get().length;
					aPs[0].rL(eF === aD6 ? bD.oG : bD.oR), aPs[1].rL(eF === aD6 ? bD.oG : bD.ok), aPs[2].rL(eF === aD6 || aD6 - 1 <= eF || eF < 5 ? bD.oG : bD.ok)
				}, aPs = [new w(L(205), function() {
					t.u(8, void 0, new tK(25, {
						tL: 0,
						tH: bl.w4.get()[eF],
						tI: 0
					}))
				}, bD.oG, 1), new w(L(206), function() {
					bl.w4.wK(eF), qq.qr[eF].remove(), qq.qr.splice(eF, 1);
					for (var aB = eF; aB < qq.qr.length; aB++) qq.qr[aB].name = "" + aB;
					bl.w4.get().length && (eF = Math.max(eF - 1, 0), qq.qr[eF].textContent = qq.qr[eF].textContent.replace("⚪", "🟢")), aPt()
				}, bD.oG, 1), new w(L(207), function() {
					for (var i0 = qq.qr.length - 1; eF < i0; i0--) bl.w4.wK(i0), qq.qr[i0].remove(), qq.qr.splice(i0, 1);
					aPt()
				}, bD.oG, 1)], aPt(), (qq = new vM(bl.w4.wG(), function(aB) {
					eF = aB, aPt()
				})).qr[0].style.marginTop = "0.5em", aPg.qp(qq), aPg.qs(new sU([aPs[0].button])), aPg.qs(new sU([aPs[1].button])), aPg.qs(new sU([aPs[2].button])), qw.push(aPg))
			}(qw), aPO(qw, 0), qw
	}())
}

function aP7() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.aIncomeType ? (bC.r9.a3q(aQX.vw(), aD.data.aIncomeData, 255), bC.r9.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(299), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(301), L(302), L(303)],
			value: aD.data.aIncomeType
		}, function(eF) {
			aQa(), 2 !== eF || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f5)), aD.data.aIncomeType = eF, t.u(22)
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg;
		1 === aD.data.aIncomeType && ((aPg = new qe).qh("Value"), aPg.qs(new rp({
			eF: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iG(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qw.push(aPg))
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.aIncomeType && ((aPg = new qe).qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.aIncomeData, 4)), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aPA() {
	var aQV, aQW, aQX;

	function aQY() {
		aQa(), 3 !== aD.data.botDifficultyType || bC.r9.a3e(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		3 === aD.data.botDifficultyType && bC.r9.a3q(aQX.vw(), aD.data.botDifficultyData, aE.ke.length - 1)
	}

	function aQf(qw, eF) {
		var aPg = new qe,
			value = (aPg.qh(eF < 0 ? L(65) : L(64) + " " + bi.a1U[eF % 9]), 0 <= eF && (aPg.qn(L(306) + ": " + aD.data.teamPlayerCount[eF]).style.marginBottom = "1em"), eF < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eF]);
		aPg.qp(new vM({
			t0: aE.ke,
			value: value
		}, function(i0) {
			eF < 0 ? aD.data.botDifficultyValue = i0 : aD.data.botDifficultyTeam[eF] = i0
		})), qw.push(aPg)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(65), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, function() {
		var qw = [];
		if (function(qw) {
				var aPg = new qe,
					t0 = (aPg.qh(L(300)), [L(302), L(304), L(305), L(303)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), t0.splice(2, 1));
				aPg.qp(new vM({
					t0: t0,
					value: value
				}, function(eF) {
					aQa(), aD.data.botDifficultyType = eF, 0 === aD.data.gameMode && 2 === eF && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f5)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qw.push(aPg)
			}(qw), 0 === aD.data.botDifficultyType) aQf(qw, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aQf(qw, aB);
		else 3 === aD.data.botDifficultyType && ! function(qw) {
			var aPg = new qe;
			aPg.qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.botDifficultyData, 8)), aPg.qs(aQX), qw.push(aPg)
		}(qw);
		return qw
	}())
}

function aQg(data) {
	var aPK, aQh, aQi, aQj, aQk, aQl, aQm, colors, aQn, aQo, aQp = 0,
		aQq = 0,
		aQr = !1,
		aQs = !1,
		aQt = [1, 5, 60, 240, 1440, 10080, 43200];

	function aRN(li, lj) {
		! function(li, lj) {
			return aQh < li && li < aQh + aQj && aQi < lj && lj < aQi + aQk
		}(aQp = li, aQq = lj) ? (aQr && (bh.dp = !0), aQr = !1) : (aQr = !0, bh.dp = !0)
	}
	this.show = function() {
		aQs = bl.eT.data[127].value, aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize();
		var eg = h.k,
			ve = aPK.vb(),
			aR2 = eg * ve.vd,
			eg = eg * ve.sL;
		aQl = bC.r1.ti(.06), aQm = bC.r1.ti(.04), aQh = bC.r1.ti(.06), aQi = eg + aQl, aQj = h.i - aQh - aQm, aQk = aR2 + eg - aQi - aQm
	}, this.vf = function() {
		aPK.vf(),
			function() {
				var aB, aQz, gb, fF, fR, g = data.data,
					aR6 = 1,
					aR7 = .125,
					aR8 = aQs ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQz = g[aB].aQz, gb = aQz.length, aR6 = Math.max(gb, aR6), fR = 0; fR < gb; fR++) aR7 = Math.max(aQz[fR], aR7), aR8 = Math.min(aQz[fR], aR8);
				var nV = aQi + aQk,
					z3 = aQk / (aR7 - aR8),
					z2 = 1 / (aR6 - 1);
				for (vg.lineWidth = be.a06, aB = 0; aB < g.length; aB++) {
					for (aQz = g[aB].aQz, gb = aQz.length, fF = aQh, vg.beginPath(), vg.moveTo(fF + aQj, nV - z3 * (aQz[gb - 1] - aR8)), fR = gb - 2; 0 <= fR; fR--) vg.lineTo(fF + z2 * fR * aQj, nV - z3 * (aQz[fR] - aR8));
					vg.strokeStyle = colors[aB], vg.stroke()
				}(function(aR8, aR7, nV, z3) {
					vg.font = bC.r1.sq(0, .25 * aQh), bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 2), vg.fillStyle = colors[0];
					for (var fF = .92 * aQh, aB = 0; aB < 3; aB++) {
						var fa = aR8 + aB * (aR7 - aR8) / 2;
						vg.fillText((fa / 1e3).toFixed(3), fF, nV - z3 * (fa - aR8))
					}
				})(aR8, aR7, nV, z3),
				function(aR6) {
					var fH = aQi + aQk + .15 * aQm;
					vg.font = bC.r1.sq(0, Math.min(.4 * aQm, .028 * h.i)), bC.r1.textBaseline(vg, 0), bC.r1.textAlign(vg, 2), vg.fillStyle = colors[0], vg.fillText(bC.a3V.a4K(aQn), aQh + aQj, fH), bC.r1.textAlign(vg, 0), vg.fillText(bC.a3V.a4K(
						new Date(aQo.getTime() - 6e4 * (aR6 - 1) * aQt[data.aQy])), aQh, fH)
				}(aR6),
				function(aR6, aR8, aR7) {
					if (aQr && !(aR6 < 2)) {
						for (var a9j, eF = (aQp - aQh) / aQj * (aR6 - 1), aRB = Math.floor(eF), aRC = Math.floor(1 + eF), aRD = eF - aRB, aRE = 1e5, aRF = -1, aRG = -1, aRH = aR7 - (aR7 - aR8) * (aQq - aQi) / aQk, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDc, aQz = g[aB].aQz;
							aQz.length <= aRC || (aQz = aQz[aRB] + aRD * (aQz[aRC] - aQz[aRB]), (aDc = Math.abs(aRH - aQz)) < aRE && (aRE = aDc, aRF = aB, aRG = aQz))
						} - 1 !== aRF && (aR7 = aQi + aQk - (aRG - aR8) / (aR7 - aR8) * aQk, vg.lineWidth = .5 * be.a06, vg.strokeStyle = colors[aRF], vg.beginPath(), vg.moveTo(aQh, aR7), vg.lineTo(aQp, aR7), vg.lineTo(aQp, aQi + aQk), vg
							.stroke(), vg.beginPath(), vg.arc(aQp, aR7, .1 * aQh, 0, 2 * Math.PI), vg.fillStyle = colors[aRF], vg.fill(), aR8 = aQi + aQk + .15 * aQm, bC.r1.textAlign(vg, 1), a9j = aR6 - 2 < eF ? (a9j = aQo.getTime() - 6e4 *
								aQt[data.aQy], new Date(a9j + (eF - (aR6 - 2)) * (aQn.getTime() - a9j))) : new Date(aQo.getTime() - 6e4 * (aR6 - eF - 1) * aQt[data.aQy]), aR6 = bC.a3V.a4K(a9j), eF = bC.r1.measureText(aR6), a9j = bN.iG(aQp,
								aQh + .5 * eF, aQh + aQj - .5 * eF), vg.fillStyle = bC.color.nw(70, 50, 20), vg.fillRect(a9j - .52 * eF, aQi + aQk, 1.04 * eF, .55 * aQm), vg.fillStyle = colors[0], vg.fillText(aR6, a9j, aR8), vg.font = bC.r1
							.sq(0, .25 * aQh), bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 2), a9j = .92 * aQh, aR6 = (aRG / 1e3).toFixed(3), eF = bC.r1.measureText(aR6), aR8 = a9j - 1.04 * eF, vg.fillStyle = bC.color.nw(70, 50, 20), vg
							.fillRect(aR8, aR7 - .1625 * aQh, aQh - aR8, .275 * aQh), vg.fillStyle = colors[aRF], vg.fillText(aR6, a9j, aR7))
					}
				}(aR6, aR8, aR7)
			}(), vg.lineWidth = be.a06, vg.strokeStyle = bD.o4, vg.beginPath(), vg.moveTo(aQh, aQi), vg.lineTo(aQh, aQi + aQk), vg.lineTo(aQh + aQj, aQi + aQk), vg.stroke();
		var aB, fontSize = .5 * aQl,
			g = (vg.font = bC.r1.sq(0, fontSize), bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 0), data.data),
			f8 = g.length,
			fH = aQi - .5 * aQl,
			qi = "";
		for (aB = 0; aB < f8; aB++) qi += g[aB].name + "  ";
		qi = qi.trim();
		var aRK = bC.r1.measureText(qi),
			fF = .5 * (h.i - aRK);
		for (aRK > h.i && (fF = 0, vg.font = bC.r1.sq(0, h.i / aRK * fontSize)), aB = 0; aB < f8; aB++) vg.fillStyle = colors[aB], vg.fillText(g[aB].name, fF, fH), fF += bC.r1.measureText(g[aB].name + "  ")
	}, this.hL = function(li, lj) {
		aRN(li, lj)
	}, this.a2g = function(li, lj) {
		aRN(li, lj)
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	};
	var aB, eX, a4I, i0, fB = data.data,
		f8 = fB.length,
		max = 1;
	for (aB = 0; aB < f8; aB++) max = Math.max(max, fB[aB].aQz.length);
	for (aB = 0; aB < f8; aB++)
		for (; fB[aB].aQz.length < max;) fB[aB].aQz.unshift(0);
	eX = new Date, a4I = 6e4 * eX.getTimezoneOffset(), i0 = eX.getTime() - a4I, aQn = new Date(i0), 6 === data.aQy ? function(eX, a4I) {
		var aR1 = eX.getUTCFullYear(),
			eX = eX.getUTCMonth() + 1;
		aQo = eX < 12 ? new Date(Date.UTC(aR1, eX) - a4I) : new Date(Date.UTC(aR1 + 1, 0) - a4I)
	}(eX, a4I) : (a4I = 6e4 * aQt[data.aQy], aQo = data.aQy <= 4 ? new Date(i0 + a4I - eX.getTime() % a4I) : new Date(i0 + a4I - (eX.getTime() + 2592e5) % a4I)), i0 = bC.color, colors = [bD.o4, i0.nw(255, 0, 0), i0.nw(0, 200, 0), i0.nw(80, 80,
		255), i0.nw(255, 255, 0), i0.nw(255, 0, 255), i0.nw(0, 255, 255), i0.nw(255, 140, 0), i0.nw(128, 128, 128), i0.nw(0, 255, 140)], aPK = new vQ(L(307) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQy] + ", " + bC.a3V.a4H(aQn), [
		new w("⬅️ " + L(40), function() {
			t.u(1)
		}), new w(L(308), function() {
			t.u(14)
		})
	], !1)
}

function aOz() {
	var aPK, aPL, qw, aRO = -1;
	this.show = function() {
		aPK.show(), this.resize(), aRO = bl.eT.data[125].value
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(309), [new w("⬅️ " + L(40), function() {
		aRO !== bl.eT.data[125].value ? t.y.aRP() : t.aPI(13)
	})]), aPL = new qu(aPK.vW, ((qw = []).push(function() {
		var aPg = new qe,
			aPo = (aPg.qh(L(310)), aPg.qj(L(311)), new w(L(312), function() {
				bl.pV.pW(130, 0), t.y.aRP()
			}, 0, 0, 1)),
			ro = new rp(bl.eT.data[126], 0, function() {
				aPo.button.click()
			});
		return aPg.qs(ro), ro.e.placeholder = "a,b,c", ro.e.style.marginTop = "0.5em", aPg.qs(new sU([aPo.button])), aPg
	}()), qw.push(function() {
		var aPg = new qe,
			aPo = new w(L(312), function() {
				bl.pV.pW(130, 1), t.y.aRP()
			}, 0, 0, 1),
			aRU = new rp(bl.eT.data[129], 1, function() {
				aRU.e.focus()
			}),
			aRV = new rp(bl.eT.data[128], 1, function() {
				aPo.button.click()
			});
		return aPg.qh(L(313)), aPg.qs(aRV), aRV.e.style.marginBottom = "0.5em", aPg.qh(L(314)), aPg.qs(aRU), aPg.qs(new sU([aPo.button])), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		return aPg.qh(L(315)), bl.eT.data[125].t0 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aPg.qp(new vM(bl.eT.data[125])), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		return aPg.qh(L(316)), aPg.qs(new sQ(bl.eT.data[127], L(317))), aPg
	}()), qw))
}

function aOy() {
	var aPK, aRW, aQj, aRX, aRY, aRZ, colors = [0, 0, 0],
		aRa = -1;

	function aRd(aB) {
		var aRe = aRW.fH + aB * (be.gap + aRZ);
		vg.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vg.fillRect(aRX, aRe, colors[aB] * aRY, aRZ), vg.strokeStyle = bD.o4, vg.strokeRect(aRX, aRe, aRY,
			aRZ), vg.fillStyle = bD.o4, vg.font = bC.r1.sq(0, .32 * aRZ), bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 0), vg.fillText(L(0 === aB ? 320 : 1 === aB ? 321 : 322) + aRb(aB), aRX + be.gap, aRe + .53 * aRZ)
	}

	function aRb(aB, aRf) {
		return aRf = aRf || 256, bN.iG(Math.floor(aRf * colors[aB]), 0, aRf - 1)
	}

	function a3A(li, lj) {
		return !(li < aRX || lj < aRW.fH || li > aRW.fF + aRW.i || lj > aRW.fH + aRW.j)
	}
	this.show = function() {
		var fa = bl.eT.data[121].value;
		colors[0] = (fa >> 12) / 63, colors[1] = (fa >> 6 & 63) / 63, colors[2] = (63 & fa) / 63, aPK.show(), this.resize()
	}, this.sI = function() {
		bl.pV.pW(121, (aRb(0, 64) << 12) + (aRb(1, 64) << 6) + aRb(2, 64)), aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aRW.resize();
		var eg = h.k,
			ve = aPK.vb(),
			aRc = (aRW.fH = Math.max(aRW.fH, eg * ve.sL + be.gap), eg * ve.vd - 2 * be.gap);
		aRW.j = Math.min(aRW.j, aRc), aRW.i = 2 * aRW.j, aRW.fH = eg * ve.sL + .5 * (eg * ve.vd - aRW.j), aRW.fF = .5 * (h.i - aRW.i), aQj = .25 * aRW.i, aRX = aRW.fF + aQj + be.gap, aRY = aRW.i - aQj - be.gap, aRZ = (aRW.j - 2 * be.gap) / 3
	}, this.vf = function() {
		var eE, th, fS;
		aPK.vf(), vg.lineWidth = be.a06, eE = aRb(0), th = aRb(1), fS = aRb(2), vg.fillStyle = "rgb(" + eE + "," + th + "," + fS + ")", vg.fillRect(aRW.fF, aRW.fH, aQj, aRW.j), vg.strokeStyle = bD.o4, vg.strokeRect(aRW.fF, aRW.fH, aQj, aRW.j), vg
			.fillStyle = eE + th + fS < 306 && th < 150 ? bD.o4 : bD.nv, bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 1), vg.font = bC.r1.sq(0, .1 * aRW.j), vg.rotate(-Math.PI / 2), vg.fillText(L(319), -aRW.fH - .5 * aRW.j, aRW.fF + .5 * aQj),
			vg.setTransform(1, 0, 0, 1, 0, 0), aRd(0), aRd(1), aRd(2)
	}, this.hL = function(li, lj) {
		a3A(li, lj) && (aRa = bN.iG(Math.floor((lj - aRW.fH) / (aRZ + .75 * be.gap)), 0, 2), colors[aRa] = bN.iG((li - aRX) / aRY, 0, 1), bh.dp = !0)
	}, this.a2g = function(li) {
		-1 !== aRa && (colors[aRa] = bN.iG((li - aRX) / aRY, 0, 1), bh.dp = !0)
	}, this.a2j = function(li, lj, deltaY) {
		a3A(li, lj) && (li = bN.iG(Math.floor((lj - aRW.fH) / (aRZ + .75 * be.gap)), 0, 2), colors[li] = bN.iG(colors[li] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bh.dp = !0)
	}, this.a34 = function() {
		0 <= aRa && (aRa = -1, bh.dp = !0)
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(318), [new w("⬅️ " + L(40), function() {
		t.y.aDX()
	})], !1), aRW = new rc([.5, .25], [.5, .5], 1)
}

function aP6() {
	var aQV, aQW, aQX, ra;

	function aQY() {
		aQa(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aRg() {
		aQa(), t.u(21)
	}

	function aQa() {
		1 === aD.data.gameMode ? aD.a5e.a5j() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bC.r9.a3q(aQX.vw(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, ra = [new w("⬅️ " + L(40), aQY)], 1 === aD.data.gameMode && ra.push(new w(L(323), aRg, 1, 1)), aQV = new vQ(L(324), ra), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), 0 === aD.data.gameMode && (aPg.qp(new vM({
			t0: [L(325), L(303)],
			value: aD.data.colorsType
		}, function(eF) {
			aQa(), aD.data.colorsType = eF, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f5 || (aD.data.colorsData = new Uint32Array(aD.f5)), t.u(21)
		})), aPg.qs(new se));
		aPg.qs(new sQ({
			value: aD.data.selectableColor
		}, L(326), function(value) {
			aD.data.selectableColor = value
		})), qw.push(aPg)
	}(ra = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qw) {
		var aPg = new qe;
		aPg.qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.colorsData, 1)), aPg.qs(aQX), qw.push(aPg)
	}(ra) : (aD.a5e.a5j(), ra.push(function() {
		var aPg = new qe;
		aPg.qh(L(306));
		for (var aB = 0; aB < bi.a1U.length; aB++) {
			var i0 = (aB + 1) % bi.a1U.length,
				e = aPg.qn((0 == i0 ? "" : "Team ") + bi.a1U[i0]);
			aB && (e.style.marginTop = "0.5em"), aPg.qs(new rp({
				eF: -1,
				value: aD.data.teamPlayerCount[i0]
			}, 1, 0, function(e) {
				aQV.vX[1].rL(0);
				var playerCount = bN.iG(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aRi] = playerCount
			})).e.aRi = i0
		}
		return aPg
	}())), ra))
}

function tK(id, a50, aRj) {
	var aPK, aRk;

	function aRp() {
		aRk.qx.innerHTML += "<br>" + L(329)
	}

	function aRy() {
		var fS = 1;
		t.u(4, 1, new v(L(330), L(331), !1, [new w("🔄 Reload", function() {
			fS && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fS = 0
		}, bD.oR)]))
	}

	function aRo() {
		bF.a7(90), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bJ.dh(bF.aC), bl.pV.pW(110, bH.tM.tN(bH.tM.tO(15))), b0.aGP.aS0()
	}
	this.aRl = !0, this.aRm = id, this.show = function() {
		aPK.show(), this.resize(), 15 === id ? (b0.y.aRn(id) ? aRo : aRp)() : 16 === id ? b0.y.aRn(id) ? b0.ed.ee(2) : aRp() : 17 === id ? b0.y.aRn(id) ? b0.ed.ee(3) : aRp() : 18 === id ? (b0.y.close(0, 3253), b0.y.aHN(0, id, 0), aRp()) : 21 ===
			id ? b0.y.aRn(id) ? b0.aRq.aRr(a50.tc, a50.td, a50.te) : aRp() : 22 === id ? b0.y.aRn(id) ? b0.aRq.aRs(a50.tc, a50.aRt, a50.aRu) : aRp() : 23 === id ? b0.y.aRn(id) ? b0.aRq.aRv(a50.aQy, a50.a1p) : aRp() : 24 === id ? b0.y.aRn(id) ? b0
			.aRq.aRw(a50.aQy, a50.td, a50.te) : aRp() : 25 === id ? b0.y.aRn(id) ? b0.aGP.aQH(a50) : aRp() : 28 === id ? b0.y.aRn(id) ? b0.aRq.aRx(a50.tc, a50.aRt, a50.aRu) : aRp() : 29 === id ? b0.y.aRn(id) ? b0.aGP.aQA(a50) : aRp() : 30 ===
			id && (b0.y.aRn(id) ? b9.aDS() || aRy() : aRp())
	}, this.aRz = function() {
		15 === id ? aRo() : 16 === id ? b0.ed.ee(2) : 17 === id ? b0.ed.ee(3) : 18 === id ? t.u(8, this.a2P, new tK(16)) : 21 === id ? b0.aRq.aRr(a50.tc, a50.td, a50.te) : 22 === id ? b0.aRq.aRs(a50.tc, a50.aRt, a50.aRu) : 23 === id ? b0.aRq.aRv(
			a50.aQy, a50.a1p) : 24 === id ? b0.aRq.aRw(a50.aQy, a50.td, a50.te) : 25 === id ? b0.aGP.aQH(a50) : 28 === id ? b0.aRq.aRx(a50.tc, a50.aRt, a50.aRu) : 29 === id ? b0.aGP.aQA(a50) : 30 === id ? b9.aDS() || aRy() : 1e3 === id && (
			this.aRm = id = 25, b0.aGP.aQH(a50))
	}, this.aDW = function(code, bw, data) {
		!bw && code !== id || (15 === code || 16 === code ? t.u(7, this.a2P) : 17 === code ? (b0.y.close(0, 3252), bl.y.wg(0), bl.eT.data[117].t0 && 0 < bl.eT.data[117].t0.length ? (bw = bl.y.wh(0), bl.pV.pW(105, bw.tH), bl.pV.pW(106, bw
			.password), t.u(8, this.a2P, new tK(16))) : (bl.pV.pW(105, ""), t.y.aDX())) : 21 === code ? t.u(10, this.a2P, new aC0(data)) : 23 === code ? t.u(13, this.a2P, new aQg({
			data: data,
			aQy: a50.aQy
		})) : 25 === code ? (t.y.aP0.tH = a50.tH, bl.w4.mq(a50.tH), t.u(15, this.a2P)) : 30 === code && (data ? t.u(1) : aRy()))
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aRk.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(327), [new w("⬅️ " + L(40), function() {
		aRj ? t.u(29) : t.y.aDX()
	})]), aRk = new sT(aPK.vW, L(328))
}

function aP4() {
	var aQV, aQW, qw;

	function aS3() {
		var gb;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5e.a5j()), gb = bC.r9.a3k(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gb) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aQY() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aS5(), aD.data.canvas = null, t.u(5, 5)
	}

	function aS5() {
		bB.qL.dh(), bl.pV.pW(156, bB.a5u.a0a())
	}

	function aS1() {
		aD.data.isReplay = 0, aS5(), aD.a5e.a66(), aa.aHY(), aD.a5e.a63(), aD.data.canvas = 2 === aD.data.mapType ? bU.xe : null, aD.a5i(), aD.a5g = 1
	}

	function aSH() {
		aS3();
		for (var g = [aS8(), aS9(), aSA()], aB = 3; aB < 6; aB++) t.removeChild(aQW.qx, aQW.qy[aB].qg), aQW.qy[aB] = g[aB - 3], aQW.qx.appendChild(aQW.qy[aB].qg);
		aQW.resize()
	}

	function aS8() {
		var aSI, aPg = new qe;
		return aPg.qh(L(324)), aSI = 0 === aD.data.gameMode ? [L(325), L(303)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aPg.qn(aSI), aPg.qs(new sU([new w(L(335), function() {
			t.u(21)
		}).button])), aPg
	}

	function aS9() {
		var aPg = new qe,
			g = (aPg.qh(L(65)), [L(302) + ": " + aE.ke[aD.data.botDifficultyValue], L(304), L(305), L(303)]);
		return aPg.qn(g[aD.data.botDifficultyType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(25)
		}).button])), aPg
	}

	function aSA() {
		var aPg = new qe,
			g = (aPg.qh("Spawning"), [L(325), L(337), L(303)]);
		return aPg.qn(g[aD.data.spawningType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(24)
		}).button])), aPg
	}
	this.show = function() {
		aQV.show(), this.resize(), aQV.vW.scrollTop = t.y.tB[0]
	}, this.sI = function() {
		t.y.tB[0] = aQV.vW.scrollTop, aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ("🔧 " + L(332), [new w("⬅️ " + L(40), aQY), new w(L(333), aS1)]), aS3(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bU.xe : 1 === aD.data.mapType ? aD.data.canvas = bU.aMk(bU.a64(aD.data), 0).xe : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bU.aMk(bU.a64(aD.data), aD.data.mapSeed).xe)), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe,
			a40 = (aPg.qh(L(334)), aD.data.canvas);
		a40.style.width = "100%", aPg.qs({
			e: a40
		}), aPg.qs(new sU([new w(L(335), function() {
			t.u(20)
		}).button])), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg = new qe;
		aPg.qh(L(306)), aPg.qs(new rp({
			eF: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bN.iG(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bC.r9.a3k(aD.data.teamPlayerCount, 0), aD.a5e.a5j(), bC.r9.a3k(aD.data.teamPlayerCount, 0) !== e) && aSH()
		})), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe;
		aPg.qh(L(336)), aPg.qp(new vM({
			t0: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eF) {
			aD.data.gameMode !== eF && (aD.data.gameMode = eF, aSH())
		})), qw.push(aPg)
	}(qw), qw.push(aS8()), qw.push(aS9()), qw.push(aSA()), function(qw) {
		var aPg = new qe,
			g = (aPg.qh(L(338)), [L(339), L(340), L(303)]);
		aPg.qn(g[aD.data.playerNamesType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(23)
		}).button])), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe,
			g = (aPg.qh(L(299)), [L(301), L(302) + ": " + aD.data.aIncomeValue, L(303)]);
		aPg.qn(g[aD.data.aIncomeType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(22)
		}).button])), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe,
			g = (aPg.qh(L(341)), [L(301), L(302) + ": " + aD.data.tIncomeValue, L(303)]);
		aPg.qn(g[aD.data.tIncomeType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(26)
		}).button])), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe,
			g = (aPg.qh(L(342)), [L(301), L(302) + ": " + aD.data.iIncomeValue, L(303)]);
		aPg.qn(g[aD.data.iIncomeType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(27)
		}).button])), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe,
			g = (aPg.qh(L(343)), [L(301), L(302) + ": " + aD.data.sResourcesValue, L(303)]);
		aPg.qn(g[aD.data.sResourcesType]), aPg.qs(new sU([new w(L(335), function() {
			t.u(28)
		}).button])), qw.push(aPg)
	}(qw), function(qw) {
		var aPg = new qe;
		aPg.qh(L(344)), aPg.qs(new sU([new w(L(345), function() {
			t.x(), aD.a5e.a67(), t.y.tB[0] = 0, t.u(19)
		}).button])), aPg.qs(new sU([new w(L(346), function() {
			bo.aJy()
		}).button])), aPg.qs(new sU([new w(L(347), function() {
			return bo.aK0(), !0
		}).button])), qw.push(aPg)
	}(qw), qw))
}

function aPF() {
	var aQV, ru = !0;

	function sB(sA, a6B) {
		var qg = document.createElement("div"),
			aSK = document.createElement("span"),
			aSL = document.createElement("span");
		aSK.textContent = aW.aCM(a6B.eW) + ":", aSK.style.color = bD.oJ, aSK.style.paddingRight = "0.4em", aSK.style.display = "table-cell", aSK.style.width = "6ch", aSK.style.textAlign = "end", qg.appendChild(aSK), aSL.textContent = a6B.qi, qg
			.appendChild(aSL), qg.style.display = "table", a6B.pk && function(qg, pk) {
				{
					var aJL;
					pk >= 1024 - aj.sH.zt ? ((aJL = document.createElement("img")).src = aj.xh.zh[pk - 1024 + aj.sH.zt].toDataURL(), aJL.style.width = "1.5em", aJL.style.height = "1.5em", aJL.style.verticalAlign = "middle", qg.appendChild(aJL)) : ((
							aJL = document.createElement("span")).textContent = aj.sH.a08(pk), aJL.style.display = "inline-block", aJL.style.fontSize = "1.5em", aJL.style.lineHeight = "1em", aJL.style.verticalAlign = "middle", qg.appendChild(
						aJL))
				}
			}(qg, a6B.pk), sA.appendChild(qg)
	}

	function sE() {
		ru && (aQV.vW.scrollTop = aQV.vW.scrollHeight)
	}
	this.clear = function() {
		aQV.vW.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a74 = bs.a6E(), f8 = a74.length, sA = document.createDocumentFragment(), aB = 0; aB < f8; aB++) sB(sA, a74[aB]);
		aQV.vW.appendChild(sA), sE(), aQV.show(), this.resize(), ru = !0, sE()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQV.vW.style.padding = "0.4em " + bC.r1.rA(be.r7)
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, this.za = function(a6B) {
		var sA = document.createDocumentFragment();
		sB(sA, a6B), aQV.vW.appendChild(sA), sE()
	}, (aQV = new vQ(L(348), [new w("⬅️ " + L(40), function() {
		t.aPI(1)
	})])).vW.style.overflowY = "auto", aQV.vW.addEventListener("scroll", function() {
		ru = aQV.vW.scrollTop >= aQV.vW.scrollHeight - aQV.vW.clientHeight - 2
	})
}

function aPC() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.iIncomeType && bC.r9.a3q(aQX.vw(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(342), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(301), L(302), L(303)],
			value: aD.data.iIncomeType
		}, function(eF) {
			aQa(), 2 !== eF || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f5), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eF, t.u(27)
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg;
		1 === aD.data.iIncomeType && ((aPg = new qe).qh("Value"), aPg.qs(new rp({
			eF: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iG(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qw.push(aPg))
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.iIncomeType && ((aPg = new qe).qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.iIncomeData, 4)), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aOu() {
	var aSN, aSO, aRW, ro, aSP, sl = 0;
	this.aI6 = new tS, aRW = new rc([.45, .27], [.5, .5], 2 / 3), aSO = [new w("⚔️<br>" + L(349), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aSQ(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bD.oX), new w("🗡️<br>" + L(332), function() {
			aSQ(1)
		}, bD.oq), new w("🔑<br>" + L(350), function() {
			aSQ(2)
		}, bD.p9), new w("☰<br>" + L(351), function() {
			aSQ(3)
		}, bD.oH), new w("", function() {
			t.u(12)
		}, bD.o0, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], ro = new rp(bl.eT.data[122]);
	for (var aB = 0; aB < aSO.length; aB++) aSO[aB].button.style.position = "absolute";

	function aSQ(eF) {
		a0.a1.setState(10), ab.tl() || ab.aHx(), 0 === eF ? t.y.a5x(1) : 1 === eF ? (bB.aKI.xP(bl.eT.data[156].value, 1) || aD.a5e.a67(), t.u(19)) : 2 === eF ? 0 !== a0.id || bl.eT.data[140].value ? t.u(8, t.tJ, new tK(16)) : t.y.aSR(t.tJ, 16) :
			3 === eF && t.u(1)
	}
	ro.e.style.position = "absolute", ro.e.style.textAlign = "center", ro.e.placeholder = L(352), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aI6.show(), aSO[4].rL(bC.color.a47(bl.eT.data[121].value)), this.resize(), document.body.appendChild(ro.e);
		for (var aB = 0; aB < aSO.length; aB++) document.body.appendChild(aSO[aB].button);
		1 !== a0.id || a0.e0 < 5 || (aSP && bh.eW > aSP + 144e5 ? a0.wP.setState(14) : aSP = bh.eW)
	}, this.sI = function() {
		this.aI6.sI(), t.removeChild(document.body, ro.e);
		for (var aB = 0; aB < aSO.length; aB++) t.removeChild(document.body, aSO[aB].button)
	}, this.resize = function() {
		this.aI6.resize(), this.aI6.resize(), aRW.resize();
		var gap = .5 * be.gap,
			uH = 10 / 99 * .84 * aRW.i,
			aSU = .16 * aRW.j,
			aAH = .19 * aRW.i,
			fF = aRW.fF + aAH,
			uH = aRW.fH + uH + 3 * gap,
			i = .5 * (aRW.i - gap) - aAH,
			aAH = aRW.i - 2 * aAH - aSU - gap,
			aAH = (bC.r1.tj(ro.e, fF, uH, aAH, aSU), bC.r1.tj(aSO[4].button, fF + aAH + gap, uH, aSU, aSU), sl = uH, .5 * (aRW.fH + aRW.j - (uH += aSU + gap) - gap));
		bC.r1.tj(aSO[0].button, fF, uH, i, aAH), bC.r1.tj(aSO[1].button, fF + i + gap, uH, i, aAH), bC.r1.tj(aSO[2].button, fF, uH + aAH + gap, i, aAH), bC.r1.tj(aSO[3].button, fF + i + gap, uH + aAH + gap, i, aAH);
		bC.r1.tj(aSO[5].button, fF, uH + aAH * 2 + gap * 2, i * 2 + gap, aAH / 3);
		bC.r1.tj(aSO[6].button, fF, uH + aAH * 2.33 + gap * 3, i * 2 + gap, aAH / 3);
		for (var aB = 0; aB < aSO.length; aB++) aSO[aB].button.style.font = bC.r1.sq(0, bC.r1.v6(.065 * aRW.j)), bC.r1.rB(aSO[aB].button, 5);
		ro.e.style.font = bC.r1.sq(0, bC.r1.v6(.08 * aRW.j)), bC.r1.rB(ro.e, 5)
	}, this.vf = function() {
		if (aa.aHc(), aT.vf(), f8 = Math.floor((a0.a1.iH() ? .018 : .0137) * h.iI), vg.font = bC.r1.sq(0, Math.max(5, f8)), bC.r1.textBaseline(vg, 0), bC.r1.textAlign(vg, 2), vg.fillStyle = bD.o4, vg.fillText(l.e0, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vg.measureText(text).width, f8 = Math.max(5, f8), vg.textAlign = "left", vg.textBaseline = "middle", vg.fillText(text, vg.canvas.width - textLength - f8 / 2, 2 * f8), aO.vf(sl), ba.vf(), ab.tl()) {
			vg.imageSmoothingEnabled = !1;
			var text = ab.aHf("territorial.io"),
				textLength = .84 * aRW.i / text.width;
			vg.setTransform(textLength, 0, 0, textLength, aRW.fF + .08 * aRW.i, aRW.fH), aSN = aSN || bC.a3R.a4y(text, bC.a3R.a54, [0, 0, 0]);
			for (var fF = -1; fF <= 1; fF += 2)
				for (var fH = -1; fH <= 1; fH += 2) vg.drawImage(aSN, fF, fH);
			vg.drawImage(text, 0, 0), vg.imageSmoothingEnabled = !0;
			var f8 = ab.aHf("logo"),
				aSX = .6666 * textLength * text.height / f8.height,
				nh = .5 * h.i,
				ni = aRW.fH + .5 * textLength * text.height - .5 * aSX * f8.height;
			vg.setTransform(aSX, 0, 0, aSX, nh - .6 * textLength * text.width, ni), vg.drawImage(f8, 0, 0), vg.setTransform(aSX, 0, 0, aSX, nh + .6 * textLength * text.width - aSX * f8.width, ni), vg.drawImage(f8, 0, 0), vg.setTransform(1, 0, 0,
				1, 0, 0), vg.imageSmoothingEnabled = !0
		}
	}
}

function aP1() {
	var aPK, aSY, aSZ, vR;

	function aSa(aB) {
		t.u(8, t.tJ, new tK(21, {
			tc: aB,
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aSY.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aSZ = [new w(L(353), function() {
		aSa(1)
	}, 0, 0, 1), new w(L(354), function() {
		aSa(2)
	}, 0, 0, 1), new w(L(355), function() {
		aSa(3)
	}, 0, 0, 1), new w(L(356), function() {
		aSa(0)
	}, 0, 0, 1), new w(L(357), function() {
		aSa(9)
	}, 0, 0, 1), new w(L(358), function() {
		aSa(10)
	}, 0, 0, 1), new w(L(359), function() {
		aSa(11)
	}, 0, 0, 1), new w(L(360), function() {
		aSa(13)
	}, 0, 0, 1)], vR = [new w("⬅️ " + L(40), function() {
		t.a2J()
	})], aPK = new vQ(L(361), vR), aSY = new rZ(aSZ, aPK.vW)
}

function aDu(title, qo, aSb) {
	var aPK, aRk;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aRk.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aSb = aSb || [new w("⬅️ " + L(40), function() {
		t.a2J()
	}, bD.ok)], aPK = new vQ(title, aSb), aRk = new sT(aPK.vW, qo), bC.r1.textAlign(aPK.vW.style, 1)
}

function aC0(data) {
	var aPK, aSc;

	function aSl(f8) {
		return f8 < 60 ? 1 === f8 ? f8 + " Second" : f8 + " Seconds" : f8 < 3600 ? 1 === (f8 = Math.floor(f8 / 60)) ? f8 + " Minute" : f8 + " Minutes" : f8 < 172800 ? 1 === (f8 = Math.floor(f8 / 3600)) ? f8 + " Hour" : f8 + " Hours" : (f8 = Math
			.floor(f8 / 172800)) + " Days"
	}

	function aSe(ji) {
		var f8 = data.data.length;
		if (f8) {
			for (var td, max = min = parseInt(data.data[0][0]), aB = 1; aB < f8; aB++) var aFu = parseInt(data.data[aB][0]),
				min = Math.min(aFu, min),
				max = Math.max(aFu, max);
			td = ji < 0 ? min + ji : max + 1, t.u(8, t.a2O().a2P, new tK(21, {
				tc: data.tc,
				td: td,
				te: td + Math.abs(ji)
			}))
		}
	}
	if (this.show = function() {
			aPK.show(), this.resize()
		}, this.sI = function() {
			aPK.sI()
		}, this.resize = function() {
			aPK.resize(), aSc.resize()
		}, this.a3E = function(eg) {
			2 === eg && aPK.vX[0].rI()
		}, data.aC1) {
		aPK = new vQ(L(119), [new w("⬅️ " + L(40), function() {
			t.a2J()
		})]);
		var fB = {
				t1: [],
				t7: [L(375), L(376), L(377) + " ↗"],
				tE: [12, 50, 38]
			},
			a61 = aD.data.a61;
		if (a61) {
			for (var f8 = a61.length, t1 = fB.t1, zb = ag.zb, aB = 0; aB < f8; aB++) t1.push([{
				fa: aB + 1 + ".",
				eX: 0
			}, {
				fa: zb[aB],
				eX: 0
			}, {
				fa: bH.tM.a0P(a61[aB], 5),
				eX: 1,
				tH: a61[aB],
				tI: 0
			}]);
			aSc = new sz(aPK.vW, fB, {
				tA: 1
			})
		} else aSc = new sz(aPK.vW, fB)
	} else {
		var fB = data.data.length ? 0 : 1,
			aSb = [new w("⬅️ " + L(40), function() {
				t.a2J()
			}), new w(L(362), function() {
				aSe(-10)
			}, fB, 0, 1), new w(L(363), function() {
				aSe(10)
			}, fB, 0, 1), new w(L(308), function() {
				t.u(11, 10, new aSf({
					tc: data.tc
				}))
			})],
			t7 = [L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373), L(358), L(359), "Audit Log", L(374)];
		aPK = new vQ(t7[data.tc], aSb), ! function() {
			var aB, fB = {
					t1: []
				},
				t1 = fB.t1,
				aSh = data.data,
				f8 = aSh.length;
			f8 && 0 === aSh[0][0] && 0 <= (eF = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.tc]) && (t.y.tf[eF] = aSh[0][1]);
			var ng = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.tc],
				a5A = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.tc],
				eF = [
					[L(378), L(379) + " ↗", L(380)],
					[L(378), L(381), L(382), L(383) + " ↗"],
					[L(378), L(379) + " ↗", L(382)],
					[L(378), L(379) + " ↗", L(382)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(123)],
					[L(375), L(384), L(387) + " ↗", L(388) + " ↗", L(389)],
					[L(375), L(384), L(390) + " ↗", L(391) + " ↗", L(392)],
					[L(375), L(384), L(387) + " ↗", L(388) + " ↗", L(393)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(123)],
					[L(378), L(379) + " ↗", L(382)],
					[L(378), L(379) + " ↗", L(394)],
					[L(378), L(379) + " ↗", L(382)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(395)],
					[L(378), L(379) + " ↗", L(382)]
				];
			if (fB.t7 = eF[data.tc], fB.tE = [
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
				][data.tc], 0 === data.tc || 2 === data.tc || 3 === data.tc || 9 === data.tc || 10 === data.tc || 11 === data.tc || 13 === data.tc)
				for (aB = 0; aB < f8; aB++) t1.push([{
					fa: aSh[aB][0] + 1 + ".",
					eX: 0
				}, {
					fa: aSh[aB][1],
					eX: 1,
					tH: aSh[aB][4],
					tI: aSh[aB][3]
				}, {
					fa: (ng * aSh[aB][2]).toFixed(a5A),
					eX: 0
				}]);
			else if (12 === data.tc)
				for (aB = 0; aB < f8; aB++) {
					var aSk = aSh[aB][3];
					t1.push([{
						fa: "" + aSh[aB][0],
						eX: 0
					}, {
						fa: aSl(aSh[aB][4]),
						eX: 0
					}, {
						fa: aSh[aB][5],
						eX: 1,
						tH: aSh[aB][1],
						tI: 0
					}, {
						fa: aSh[aB][6],
						eX: 1,
						tH: aSh[aB][2],
						tI: 0
					}, {
						fa: bq.eL(aSk, bH.tM.a0P(aSh[aB][1], 5)),
						eX: 0
					}])
				} else if (1 === data.tc)
					for (aB = 0; aB < f8; aB++) t1.push([{
						fa: aSh[aB][0] + 1 + ".",
						eX: 0
					}, {
						fa: aSh[aB][1],
						eX: 0
					}, {
						fa: (ng * aSh[aB][2]).toFixed(a5A),
						eX: 0
					}, {
						fa: aSh[aB][3],
						eX: 1,
						tH: aSh[aB][5],
						tI: aSh[aB][4]
					}]);
				else if (4 === data.tc || 5 === data.tc || 6 === data.tc || 7 === data.tc || 8 === data.tc)
				for (aB = 0; aB < f8; aB++) {
					var aSm = aSh[aB][5];
					4 === data.tc || 8 === data.tc ? "100%" === (aSm = (aSm % 64 * 100 / (aSm >> 6)).toFixed(0) + "%") && (4 === data.tc ? aSm += " (" + L(396) + ")" : aSm += " (" + L(397) + ")") : 5 === data.tc ? 32768 <= aSm && (aSm = -(aSm -
						32768)) : aSm = (ng * aSm).toFixed(a5A), t1.push([{
						fa: "" + aSh[aB][0],
						eX: 0
					}, {
						fa: aSl(aSh[aB][6]),
						eX: 0
					}, {
						fa: aSh[aB][7],
						eX: 1,
						tH: aSh[aB][1],
						tI: aSh[aB][2]
					}, {
						fa: aSh[aB][8],
						eX: 1,
						tH: aSh[aB][3],
						tI: aSh[aB][4]
					}, {
						fa: "" + aSm,
						eX: 0
					}])
				}
			aSc = new sz(aPK.vW, fB)
		}()
	}
}

function aSf(a50) {
	var aPK, aPL, qw;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(398), [new w("⬅️ " + L(40), function() {
		t.aPI(10)
	})]), aPL = new qu(aPK.vW, ((qw = []).push(function() {
		var aPo, aPg = new qe,
			aRU = new rp(bl.eT.data[132], 1, function() {
				aPo.button.click()
			}),
			aRV = new rp(bl.eT.data[131], 1, function() {
				aRU.e.focus()
			});
		aPg.qh(L(313)), aPg.qs(aRV), aRV.e.style.marginBottom = "0.8em", aPg.qh(L(314)), aPg.qs(aRU);
		return aPo = new w(L(312), function() {
			td = Math.floor(aRV.e.value), te = Math.floor(aRU.e.value);
			var te, td = {
				a3i: Math.min(td, te),
				aOR: Math.max(td, te)
			};
			t.u(8, t.a6D(10).a2P, new tK(21, {
				tc: a50.tc,
				td: td.a3i,
				te: td.aOR
			}))
		}, 0, 0, 1), aPg.qs(new sU([aPo.button])), aPg
	}()), qw.push(function() {
		var aPo, aPg = new qe,
			aRU = new rp(bl.eT.data[134], 1, function() {
				aPo.button.click()
			}),
			aRV = new rp(bl.eT.data[133], 0, function() {
				aRU.e.focus()
			});
		return aPg.qh(1 === a50.tc ? L(399) : L(400)), aPg.qs(aRV), aRV.e.style.marginBottom = "0.8em", aPg.qh(L(401)), aPg.qs(aRU), aPo = new w(L(312), function() {
			var aRt = aRV.e.value.slice(0, 20),
				aRu = Math.abs(Math.floor(aRU.e.value));
			t.u(8, t.a6D(10).a2P, new tK(22, {
				tc: a50.tc,
				aRt: aRt,
				aRu: aRu
			}))
		}, 0, 0, 1), aPg.qs(new sU([aPo.button])), aPg
	}()), qw.push(function() {
		var aPo, aPg = new qe,
			aRU = new rp(bl.eT.data[152], 1, function() {
				aPo.button.click()
			}),
			aRV = new rp(bl.eT.data[151], 0, function() {
				aRU.e.focus()
			});
		return aPg.qh(L(402)), aPg.qs(aRV), aRV.e.style.marginBottom = "0.8em", aPg.qh(L(401)), aPg.qs(aRU), aPo = new w(L(312), function() {
			var aRt = aRV.e.value.slice(0, 5),
				aRu = Math.abs(Math.floor(aRU.e.value));
			t.u(8, t.a6D(10).a2P, new tK(28, {
				tc: a50.tc,
				aRt: aRt,
				aRu: aRu
			}))
		}, 0, 0, 1), aPg.qs(new sU([aPo.button])), aPg
	}()), qw))
}

function aPE() {
	var aSq, tq, aSt, tp, ts, aSr = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aSs = new Array(4),
		aSu = new Array(2),
		aSv = [L(64), L(357), L(403), L(404)];

	function aFg() {
		var aEz;
		!bp.a2H || (aEz = aSq.u3.ro.e.value.trim().slice(0, 127)).length < 1 || (aSq.u3.ro.e.value = "", bp.aDx.a1C(aEz))
	}

	function aSy(aT0) {
		bp.y.s5[3] = 1 - bp.y.s5[3], aSz(3, 1, bp.y.s5[3]), aT0 && b0.aFr.aFs(4), bp.y.s5[3] && bl.pV.pW(158, bp.y.s5[0])
	}

	function aSw(fR, fS) {
		bp.y.s5[fR] !== fS && (0 === fR && bp.y.s5[3] && aSy(0), aSz(fR, bp.y.s5[fR], 0), aSz(fR, fS, 1), bp.y.s5[fR] = fS, 0 === fR ? (b0.aFr.aFs(2, fS), bp.y.s5[2] ? (aSq.u4.mq(), aSq.u3.s2(1)) : aSq.u3.s2(0), t.a2O().aFV(), t.a2O().aFU()) : 2 ===
			fR && (0 === fS ? (b0.aFr.aFs(0), aSq.u3.mq(), aSq.uC()) : (b0.aFr.aFs(1), aSq.u4.mq(), aSq.uD())))
	}

	function aSz(fR, fS, color) {
		aSq.u6[fR].ra[fS].rL(color ? bD.oT : bD.pJ)
	}

	function aT3(eo) {
		return bU.xU.aNg[eo]
	}

	function aT4(aEj) {
		return aEj < 7 ? "   " + (aEj + 2) + " Teams" : 10 === aEj ? "   No Full-Sending" : ""
	}

	function aT5(aFX, aTC) {
		return aTC ? aFX <= 90 && 60 < aFX ? "   Contest" : "" : aFX <= 60 ? "   Contest" : ""
	}
	this.aG2 = function() {
		return aSq.u3
	}, this.aDx = function(tH) {
		aSw(2, 0);
		var qi = aSq.u3.ro.e.value,
			tH = "@" + tH + " ";
		qi.length && !bC.s0.a4U(qi, " ") && (tH = " " + tH), aSq.u3.ro.e.value = qi += tH, aSq.u3.ro.e.focus()
	}, this.aFT = function() {
		aSq.u4.mq()
	}, this.aFV = function() {
		var aT2 = bp.y.s5[0],
			aT2 = bp.y.s7[aT2],
			fS = (bU.a7(aT2.eo, aT2.mapSeed), tq.ra),
			a7u = aT3(aT2.eo, aT2.mapSeed) + aT4(aT2.aEj) + aT5(aT2.aFX),
			aT2 = L(407) + "   " + aT3(aT2.aGT, aT2.aGU) + aT4(aT2.aGV) + aT5(aT2.aFX, 1);
		fS[0].button.textContent === a7u && fS[1].button.textContent === aT2 || (fS[0].button.textContent = a7u, fS[1].button.textContent = aT2, tq.resize())
	}, this.aFU = function() {
		var aT2 = bp.y.s5[0],
			s6 = bp.y.s7[aT2];
		aSq.uA(s6.uB);
		for (var fa, a8A, aB = 0; aB < bp.uS.uT.length; aB++) aSr[0][aB].rz.textContent = bp.uS.uT[aB].length, aSr[1][aB].rz.textContent = (fa = bp.y.s7[aB].aFX, a8A = void 0, ((a8A = bN.fZ(fa, 60)) < 10 ? "0" : "") + a8A + ":" + ((fa %= 60) <
			10 ? "0" : "") + fa);
		var s6 = bp.uS.uT[aT2],
			aT7 = s6.length,
			aT8 = bp.uS.uU[aT2];
		aSr[2][1].rz.textContent = "" + aT7, aSr[3][1].rz.textContent = "" + aT8;
		for (aB = 0; aB < 4; aB++) {
			var aT9 = bp.y.s7[aB];
			aSs[aB] ? 0 === aT9.uB && (aSs[aB].rz.textContent = bU.xU.aNg[aT9.eo]) : aSs[aB] = new ry(bU.xU.aNg[aT9.eo], tp.ra[aB].button, 1, 1), bC.s0.startsWith(aSv[aB], "🏆 ") ? aT9.aEp || (aSv[aB] = aSv[aB].substring(3), tp.ra[aB].button
				.textContent = aSv[aB], tp.ra[aB].button.appendChild(aSr[1][aB].rz), tp.ra[aB].button.appendChild(aSr[0][aB].rz), tp.ra[aB].button.appendChild(aSs[aB].rz)) : aT9.aEp && (aSv[aB] = "🏆 " + aSv[aB], tp.ra[aB].button
				.textContent = aSv[aB], tp.ra[aB].button.appendChild(aSr[1][aB].rz), tp.ra[aB].button.appendChild(aSr[0][aB].rz), tp.ra[aB].button.appendChild(aSs[aB].rz))
		}
		var aTA = "",
			aTB = "";
		0 === aT2 && (aTA = bp.lI.aF4(s6, 0, aT7), aTB = bp.lI.aF4(s6, 0, aT8)), aSt[0].rz.textContent = aTA, aSt[1].rz.textContent = aTB, aSu[1].rz.textContent = "MP: " + bp.y.aFN[0] + "   SP: " + bp.y.aFN[1] + "   Lobby: " + bC.r9.a3v(bp.uS.uT)
	}, this.aFZ = function() {
		aSq.u3.mq()
	}, this.show = function() {
		bp.y.aEI++, aSq.show(), this.resize(), bp.message.show()
	}, this.sI = function() {
		aSq.sI(), bp.uq.sI(), bp.uP.sI(), bp.message.sI()
	}, this.resize = function() {
		aSq.resize(1 - bp.y.s5[2]), bp.message.resize()
	}, this.a3E = function(eg) {
		2 === eg ? bp.y.s5[3] ? aSy(1) : aSq.u6[3].ra[0].rI() : eg < 2 && aSy(1)
	}, tp = new sX([new w(aSv[0], function() {
		return aSw(0, 0), 2
	}), new w(aSv[1], function() {
		return aSw(0, 1), 2
	}), new w(aSv[2], function() {
		return aSw(0, 2), 2
	}), new w(aSv[3], function() {
		return aSw(0, 3), 2
	})], bD.pJ), tq = new sX([new w("", 0, 2), new w("", 0, 2)], bD.pK, 1);
	var aSx = new sX([new w(L(405), function() {
		return aSw(2, 0), 2
	}), new w(L(119), function() {
		return aSw(2, 1), 2
	})], bD.pJ);
	ts = new sX([new w(L(26, 0, 0, 1), function() {
		t.x(), bp.uk(), b0.y.a2W(3240), t.u(5, 5)
	}), new w(L(406), function() {
		return aSy(1), 2
	})], bD.pJ), aSq = new tn(tp, tq, aSx, ts, aFg, bp.uq.aGC);
	for (var aB = 0; aB < 4; aB++) aSr[0][aB] = new ry("0", tp.ra[aB].button), aSr[1][aB] = new ry("0", tp.ra[aB].button, 1);
	aSr[2][1] = new ry("0", aSx.ra[1].button), aSr[3][1] = new ry("0", ts.ra[1].button), (aSt = [new ry("", aSx.ra[1].button, 1, 1), new ry("", ts.ra[1].button, 1, 1)])[0].rz.style.bottom = "0em", aSt[1].rz.style.bottom = "0em", aSz(0, bp.y.s5[0],
		1), aSz(2, bp.y.s5[2], 1), (aSu = [new ry(L(306), aSq.uE(), 1, 0), new ry("", aSq.uE(), 1, 1)])[0].rz.style.fontSize = "0.4em", aSu[1].rz.style.fontSize = "0.4em"
}

function aOv() {
	var aPK, aPL, qw;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(408), [new w("⬅️ " + L(40), function() {
		t.u(7, t.a6D(7).a2P)
	}), new w(L(210), function() {
		bl.pV.pW(105, bI.tM.xE(aPL.qy[0].qf[0].e.value, 5)), bl.pV.pW(106, bI.tM.xE(aPL.qy[1].qf[0].e.value, 15)), t.u(8, t.a6D(7).a2P, new tK(18))
	})]), aPL = new qu(aPK.vW, ((qw = []).push(function() {
		var aPg = new qe;
		return aPg.qh(L(187)), aPg.qs(new rp({
			value: "",
			eF: -1
		})), aPg
	}()), qw.push(function() {
		var aPg = new qe,
			aPr = (aPg.qh(L(190)), new rp({
				value: "",
				eF: -1
			}));
		return aPr.e.type = "password", aPg.qs(aPr), aPg.qs(new sU([new w(L(191), function(e) {
			return e.textContent === L(191) ? (e.textContent = L(192), aPr.e.type = "text") : (e.textContent = L(191), aPr.e.type = "password"), !0
		}).button])), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		return aPg.qh(L(194)), aPg.qj(L(409)), aPg.qj(L(410)), aPg.qj(L(411)), aPg
	}()), qw))
}

function aP2() {
	var aPK, aSY, aSZ, vR;

	function aSa(aB) {
		t.u(8, t.tJ, new tK(21, {
			tc: aB,
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aSY.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aSZ = [new w(L(369), function() {
		aSa(5)
	}, 0, 0, 1), new w(L(370), function() {
		aSa(6)
	}, 0, 0, 1), new w(L(371), function() {
		aSa(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aSa(12)
	}, 0, 0, 1)], vR = [new w("⬅️ " + L(40), function() {
		t.a2J()
	})], aPK = new vQ(L(412), vR), aSY = new rZ(aSZ, aPK.vW)
}

function aOm() {
	this.eT = {}, this.tf = new Array(8), this.aP0 = null, this.aOx = null, this.sx = 0, this.tB = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5x = function(aTF) {
		aTF && (aZ.aHH = aTF), t.x(), aZ.dh()
	}, this.aDX = function() {
		t.u(0 === aa.a2K() ? 5 : 0)
	}, this.aRP = function() {
		if (1 === bl.eT.data[130].value) t.u(8, t.a2O().a2P, new tK(24, {
			aQy: bl.eT.data[125].value,
			td: bl.eT.data[128].value,
			te: bl.eT.data[129].value
		}));
		else {
			for (var g = (g = bl.eT.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a2O().a2P, new tK(23, {
				aQy: bl.eT.data[125].value,
				a1p: g
			}))
		}
	}, this.aSR = function(a2P, target) {
		t.u(4, a2P, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aPh(
				"/privacy"), !1, [new w("⬅️ " + L(40), function() {
				t.u(a2P)
			}), new w("✅ Accept", function() {
				bl.pV.pW(140, 1), 0 === target ? t.u(2, a2P) : t.u(8, a2P, new tK(target))
			})]))
	}, this.aTG = function() {
		for (var aB = 0; aB < 8; aB++) this.tf[aB] = bI.x5.x9(bJ.q9(5));
		this.tf[1] = "[" + this.tf[1] + "]", 5 === t.tJ && (t.a2O().aI6.pW(this.tf), t.a2O().resize())
	}, this.aPp = function(fa, pT, a7j) {
		fa = bC.gU.a4x(fa, 1, 1e6);
		var aTH = Math.max(1, 1 + Math.floor(.01 * (fa - 100))),
			pT = L(413, [pT]);
		return (pT += "<br>") + L(414, [a7j]) + "<br>" + L(415, [aTH < 20 ? fa + aTH + "–" + (fa + 20) : fa + aTH]) + "<br>" + L(416, [fa])
	}
}

function aP5() {
	var aQV, aQW, aTI, qw;

	function aQY() {
		b6.uk(), t.aPJ()[19] = null, t.a2J()
	}

	function aTP() {
		aTS(), aTQ()
	}

	function aTS() {
		aTI.qg.lastChild && t.removeChild(aTI.qg, aTI.qg.lastChild)
	}

	function aTQ() {
		var aTT = bU.a64(aD.data);
		aD.data.canvas = bU.aMk(aTT, aD.data.mapSeed).xe, aTR()
	}

	function aTR() {
		var a40 = aD.data.canvas;
		a40.style.width = "100%", aTI.qg.appendChild(a40)
	}
	this.aJK = function(a40) {
		aD.data.canvas && aTS(), aD.data.canvas = a40, aTR()
	}, this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(334), [new w("⬅️ " + L(40), aQY)]), 2 === aD.data.mapType && b6.dh(), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(417), L(418), L(419)],
			value: aD.data.mapType
		}, function(eF) {
			2 === (aD.data.mapType = eF) ? (b6.dh(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uk()), t.u(20)
		})), 2 <= aD.data.mapType && (aPg.qs(new se), aPg.qs(new sQ({
			value: aD.data.passableWater
		}, L(420), function(value) {
			aD.data.passableWater = value
		})), aPg.qs(new sQ({
			value: aD.data.passableMountains
		}, L(421), function(value) {
			aD.data.passableMountains = value
		})));
		qw.push(aPg)
	}(qw = []), function(qw) {
		if (0 === aD.data.mapType) {
			for (var aPg = new qe, t0 = (aPg.qh(L(334)), []), aB = 0; aB < bU.xU.aNe.length; aB++) t0.push(bU.xU.xV[bU.xU.aNe[aB]].name);
			aPg.qp(new vM({
				t0: t0,
				value: aD.data.mapProceduralIndex
			}, function(eF) {
				aD.data.mapProceduralIndex = eF, aTP()
			})), qw.push(aPg)
		}
	}(qw), function(qw) {
		if (1 === aD.data.mapType) {
			for (var aPg = new qe, t0 = (aPg.qh(L(334)), []), aB = 0; aB < bU.xU.aNf.length; aB++) t0.push(bU.xU.xV[bU.xU.aNf[aB]].name);
			aPg.qp(new vM({
				t0: t0,
				value: aD.data.mapRealisticIndex
			}, function(eF) {
				aD.data.mapRealisticIndex = eF, aTP()
			})), qw.push(aPg)
		}
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.mapType && ((aPg = new qe).qh(L(422)), aPg.qs(new rp(bl.eT.data[162], 1)), aPg.qh(L(423), "0.8em"), aPg.qs(new sU([new w(L(424), function() {
			return b6.aJD(), !0
		}).button])), qw.push(aPg))
	}(qw), function(qw) {
		var aPg, ro;
		2 === aD.data.mapType && ((aPg = new qe).qh(L(425)), ro = new rp({
			eF: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aPg.qs(ro), qw.push(aPg))
	}(qw), function(qw) {
		var aPg, ro, aPo;
		0 === aD.data.mapType && ((aPg = new qe).qh("Seed"), ro = new rp({
			eF: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aTP())
		}), aPo = new w(L(325), function(e) {
			var aMf = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aMf) return ro.e.value = aD.data.mapSeed = aMf, aTP(), !0
		}), aPg.qs(ro), aPg.qs(new sU([aPo.button])), qw.push(aPg))
	}(qw), function(qw) {
		(aTI = new qe).qh(L(426)), 2 !== aD.data.mapType ? aTQ() : aD.data.canvas && aTR();
		qw.push(aTI)
	}(qw), qw))
}

function v(title, qo, aTU, aSb) {
	var aPK, aRk;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aRk.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aSb = aSb || [new w("⬅️ " + L(40), function() {
		t.a2J()
	})], aPK = new vQ(title, aSb), aRk = new sT(aPK.vW, qo), aTU && bC.r1.textAlign(aPK.vW.style, 1)
}

function aP8() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 === aD.data.playerNamesType && 1 === bC.r9.a3e(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.playerNamesType && bC.r9.a3s(aQX.vw(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(338), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(339), L(340), L(303)],
			value: aD.data.playerNamesType
		}, function(eF) {
			aQa(), aD.data.playerNamesType = eF, t.u(23)
		})), aPg.qs(new se), aPg.qs(new sQ({
			value: aD.data.selectableName
		}, L(427), function(value) {
			aD.data.selectableName = value
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg;
		2 === aD.data.playerNamesType && ((aPg = new qe).qh("Data"), aQX = new vo(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f5 || (aD.data.playerNamesData = new Array(aD.f5), aD.data.playerNamesData
			.fill("")), aQX.vv(bC.s0.a5N(aD.data.playerNamesData, 1, '"')), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aPG() {
	var aQV, aQW, qw;

	function aTa() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bl.eT.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fR = 0; fR < 3; fR++) fR < g.length && (colors[aB][fR] = Number(g[fR]))
		}
		return colors
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(428), [new w("⬅️ " + L(40), function() {
		t.a2J()
	})]), aQW = new qu(aQV.vW, ((qw = []).push(function() {
		var aPg = new qe;
		return aPg.qh(L(429)), aPg.qn(b0.y.aPh("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aPg.qn("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aPg
	}()), qw.push(function() {
		var aPg = new qe,
			ei = (aPg.qh(L(430)), bl.eT.data[174].value),
			qk = aPg.qj(ei.length + " / 180"),
			aQD = (qk.style.textAlign = "center", new vo(0, 1, function(e) {
				var e = e.target.value,
					gb = e.length;
				qk.textContent = gb + " / 180", gb <= 180 && bl.pV.pW(174, e)
			}));
		return aQD.e.rows = 6, aQD.e.style.fontSize = "1em", aQD.vv(ei), aPg.qs(aQD), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		aPg.qh(L(324));
		for (var aB = 0; aB < 11; aB++) {
			var iR = aPg.qs(new rp(bl.eT.data[163 + aB]));
			aB && (iR.e.style.marginTop = "0.6em")
		}
		return aPg.qs(new sU([new w(L(431), function() {
			for (var data = bl.eT.data, aB = 163; aB < 174; aB++) data[aB] && bl.eT.wB(aB, data[aB].wE);
			t.a2J(), t.aPJ()[31] = null, t.u(31)
		}).button])), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		return aPg.qh("Targeting"), aPg.qn(L(432)), aPg.qs(new rp(bl.eT.data[175], 0, 0)), aPg
	}()), qw.push(function() {
		var aPg = new qe;
		return aPg.qh(L(426)), aPg.qs(new sU([new w(L(191), function() {
			(new eh).show(bl.eT.data[174].value, aTa(), -1)
		}).button])), aPg
	}()), qw.push(function() {
		var aPg = new qe,
			aTb = (aPg.qh(L(433)), aPg.qn(L(434)), new rp(bl.eT.data[176], 1, 0)),
			aTc = (aPg.qs(aTb), new w(L(435), function(e) {
				return aTd.button.textContent === L(186) && b0.y.ec(0) && (bC.r1.vJ(e), aPn(), b0.aGP.aTe(bl.eT.data[176].value, aTa(), bl.eT.data[175].value, bl.eT.data[174].value)), !0
			}, 1)),
			aPn = function() {
				aTd.button.textContent = L(185), aTc.rL(1), aTc.button.style.color = bD.o4
			},
			aTd = new w(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aTc.rL(0), aTc.button.style.color = bD.p4) : aPn(), !0
			});
		return aPg.qs(new sU([aTd.button, aTc.button])), aPg
	}()), qw))
}

function aPH() {
	var aPK, aPL, qw;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ("🔒 " + L(436), [new w("⬅️ " + L(40), function() {
		t.a2J()
	})]), aPL = new qu(aPK.vW, ((qw = []).push(function() {
		var aPg = new qe,
			ro = (aPg.qh(L(187)), new rp({
				value: "",
				eF: -1
			})),
			aQ9 = (aPg.qs(ro), aPg.qh(L(256), "0.8em"), new rp({
				value: "",
				eF: -1
			}, 0, 0)),
			aPm = (aQ9.e.type = "email", aQ9.e.autocomplete = "email", aQ9.e.name = "email", aQ9.e.inputMode = "email", aQ9.e.spellcheck = !1, aPg.qs(aQ9), new w(L(437), function(e) {
				return bC.r1.vJ(e), b0.aGP.aQA({
					tL: 4,
					qi: ro.e.value.trim() + aQ9.e.value.trim().substring(0, 63)
				}), !0
			}));
		return aPg.qs(new sU([aPm.button])), aPg
	}()), qw))
}

function aOt() {
	var aQV, vt;

	function aTg() {
		t.x();
		var qi = bB.aTk(vt.vw());
		(aD.a18 && 0 < qi.length && qi === bB.qL.a5t || bB.aKI.xP(qi)) && bB.aTl()
	}
	this.show = function(aTh) {
		this.aTi(aTh), aQV.show(), this.resize()
	}, this.aTi = function(aTh) {
		0 === aD.a18 ? aTh ? vt.vv(aTh) : aD.a5h.length && vt.vv(aD.a5h) : (aD.hH || (bB.qL.a5t = bB.a5u.a0a()), vt.vv(bB.aTj(bB.qL.a5t)))
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), vt.resize()
	}, this.a3E = function(eg) {
		2 === eg ? aQV.vX[0].rI() : aTg()
	}, aQV = new vQ(L(438), [new w("⬅️ " + L(40), function() {
		t.aPI(1)
	}), new w(L(439), function() {
		vt.vx()
	}), new w(L(440), function() {
		vt.vy()
	}), new w(L(441), function() {
		vt.clear()
	}), new w(L(442), function() {
		aTg()
	})]), vt = new vo(L(443)), aQV.vW.appendChild(vt.e)
}

function aOs() {
	var aPK, aPL, qw, aPg;

	function aTm() {
		b9.aDJ !== bl.eT.data[12].value ? (b9.dh(), t.u(8, 1, new tK(30))) : t.u(1)
	}
	this.show = function() {
			aPK.show(), this.resize()
		}, this.sI = function() {
			aPK.sI()
		}, this.resize = function() {
			aPK.resize(), aPL.resize()
		}, this.a3E = function(eg) {
			2 === eg && aPK.vX[0].rI()
		}, aPK = new vQ(L(444), [new w("⬅️ " + L(40), aTm), new w(L(445), function() {
			t.x(), bl.pV.wm(), t.u(2)
		})]), qw = [], (aPg = new qe).qh(L(446)), aPg.qj(L(447)), qw.push(aPg),
		function(qw) {
			var aPg = new qe,
				g = (aPg.qh(L(432)), b9.data.aDa());
			aPg.qp(new vM({
				t0: g,
				value: b9.data.aDe(g)
			}, function(eF) {
				return bl.pV.pW(12, g[eF].split(":")[0]), !0
			})), qw.push(aPg)
		}(qw),
		function(qw) {
			var aPg = new qe,
				aTp = (aPg.qh(L(472)), []);
			aPg.qs(new sU([new w(L(431), function(e) {
				bZ.aTq();
				for (var aB = 0; aB < aTp.length; aB++) aTp[aB].e.value = bZ.aCs[aB];
				return bC.r1.vJ(e), !0
			}).button]));
			for (var aB = 0; aB < bZ.aTr.length; aB++) {
				aPg.qj(bZ.aTr[aB]);
				for (var fR = 0; fR < 2; fR++) {
					var eF = 2 * aB + fR,
						ro = new rp({
							value: bZ.aCs[eF],
							eF: -1
						});
					ro.e.aTs = eF, aTp.push(ro), ro.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bZ.aTt(e.target.aTs, code)
					}), fR && (ro.e.style.marginLeft = "4%"), ro.e.style.width = "48%", aPg.qs(ro)
				}
			}
			qw.push(aPg)
		}(qw), (aPg = new qe).qh(L(448)), bl.eT.data[1].t0 = [L(449), L(450), L(451), L(452)], aPg.qp(new vM(bl.eT.data[1])), qw.push(aPg), (aPg = new qe).qh(L(453)), bl.eT.data[9].t0 = [L(450), L(454), L(455)], aPg.qp(new vM(bl.eT.data[9])), qw
		.push(aPg), (aPg = new qe).qh(L(456)), bl.eT.data[11].t0 = [L(457), L(9), L(458)], aPg.qp(new vM(bl.eT.data[11])), qw.push(aPg), (aPg = new qe).qh(L(459)), aPg.qs(new sQ(bl.eT.data[2])), qw.push(aPg), (aPg = new qe).qh(L(460)), aPg.qs(new sQ(
			bl.eT.data[7])), qw.push(aPg), (aPg = new qe).qh(L(461)), aPg.qs(new sQ(bl.eT.data[8])), qw.push(aPg), (aPg = new qe).qh(L(462)), aPg.qs(new rp(bl.eT.data[5])), qw.push(aPg), (aPg = new qe).qh(L(463)), aPg.qs(new sQ(bl.eT.data[13], L(
			464))), aPg.qs(new sQ(bl.eT.data[14], L(465))), qw.push(aPg), (aPg = new qe).qh(L(466)), aPg.qp(new vM({
			t0: [L(467), L(468), L(469)],
			value: aZ.aHI
		}, function(aB) {
			aZ.aHI = aB
		})), qw.push(aPg), (aPg = new qe).qh(L(470)), aPg.qs(new sQ(bl.eT.data[15])), aPg.qj(L(471)), aPg.qs(new rp(bl.eT.data[16], 1, 0, function(e) {
			e.target.value = bN.iG(Math.floor(e.target.value), 0, 16)
		})), qw.push(aPg), aPL = new qu(aPK.vW, qw)
}

function aP9() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 !== aD.data.spawningType || bC.r9.a3e(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.spawningType && bC.r9.a3q(aQX.vw(), aD.data.spawningData, bU.aJN - 1)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(473), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe,
			t0 = (aPg.qh(L(300)), [L(325), L(337), L(303)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (t0.splice(1, 1), 0 < value) && (value = 1);
		aPg.qp(new vM({
			t0: t0,
			value: value
		}, function(eF) {
			aQa(), aD.data.spawningType = eF, 0 === aD.data.gameMode && 1 === eF && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f5)), t.u(24)
		})), aPg.qs(new se), aPg.qs(new sQ({
			value: aD.data.selectableSpawn
		}, L(474), function(value) {
			aD.data.selectableSpawn = value
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg = new qe;
		aPg.qh("Seed"), aPg.qs(new rp({
			eF: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qw.push(aPg)
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.spawningType && ((aPg = new qe).qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.spawningData, 2)), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aOr() {
	var aPK, aSY, aSZ, vR;

	function aTu(id) {
		0 !== a0.id || bl.eT.data[140].value ? 0 === id ? t.u(8, 1, new tK(16)) : t.u(2) : t.y.aSR(t.tJ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aPK.show(), this.resize(), this.eb()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aSY.resize()
	}, this.eb = function() {
		8 === aa.a2K() && (2 <= bf.aTz ? aSZ[2].rJ === bD.oG && aSZ[2].rL(0) : aSZ[2].rJ !== bD.oG && aSZ[2].rL(bD.oG), !aD.hH && aM.qc(aD.es) ? aSZ[1].rJ === bD.oG && aSZ[1].rL(0) : aSZ[1].rJ !== bD.oG && aSZ[1].rL(bD.oG), !aD.hH && aw.hx(aD
			.es) ? aSZ[0].rJ === bD.oG && aSZ[0].rL(0) : aSZ[0].rJ !== bD.oG && aSZ[0].rL(bD.oG))
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aSZ = [new w(L(475), function() {
		aTu(0)
	}), new w(L(361), function() {
		t.u(16)
	}), new w(L(412), function() {
		t.u(17)
	}), new w(L(476), function() {
		t.y.aRP()
	}, 0, 0, 1), new w(L(438), function() {
		t.u(3, 1)
	}), new w(L(477), function() {
		t.u(18)
	}), new w(L(428), function() {
		t.u(31)
	}), new w(L(478), function() {
		t.y.a5x(2)
	}), new w(L(444), function() {
		aTu(1)
	}), new w("🔒 " + L(436), function() {
		t.u(32)
	}), new w(L(479), function() {
		var t7 = ["Patreon", L(488), L(489), "YouTube Tutorial", "Discord", L(490), L(353), L(491), L(356), L(492), "Terms", "Privacy"],
			a4Q = [bM.aQT, bM.aDr, bM.a2D, "https://www.youtube.com/watch?v=6QBmA9N1668", bM.aDs, bM.aU0, bM.aU1, bM.aU2, bM.aU3, bM.aU4, bM.aU5, bM.aU6];
		if (b0.y.aU7(0))
			for (var aB = 0; aB < a4Q.length; aB++) a4Q[aB] = a4Q[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (t7.splice(2, 1), t7.splice(0, 1), a4Q.splice(2, 1), a4Q.splice(0, 1)) : 2 === a0.id && (t7.splice(1, 1), t7.splice(0, 1), a4Q.splice(1, 1), a4Q.splice(0, 1)), t.u(4, 1, new v(L(479), bC.r1.a4P(t7, a4Q), !1, [new w(
			"⬅️ " + L(40),
			function() {
				t.u(1)
			})]))
	}), new w(L(480), function() {
		t.u(4, 1, new v(L(480), l.e0 + "<br>" + b0.y.aPh("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(40),
				function() {
					t.u(1)
				})]))
	}), new w(L(481), function() {
		t.u(4, 1, new v(L(481), L(493) + "<br>" + L(494), !1, [new w("⬅️ " + L(40), function() {
			t.u(1)
		}), new w(L(495), function() {
			a0.a1.a27(), t.u(1)
		})]))
	}), new w("👁️ " + L(482), function() {
		a0.a1.a28(), t.u(4, 1, new v(L(496), L(497) + " " + b0.y.aPh("/privacy"), !1, [new w("⬅️ " + L(40), function() {
			t.u(1)
		})]))
	})], vR = [new w("⬅️ " + L(40), function() {
		t.y.aDX()
	})], 8 === aa.a2K() && (aSZ.unshift(new w(L(348), function() {
		t.u(30)
	})), aSZ.unshift(new w(L(485), function() {
		2 <= bf.aTz && (t.x(), bg.a3H(), bh.dp = !0)
	}, 0, 1)), aSZ.unshift(new w(L(486), function() {
		!aD.hH && aM.qc(aD.es) && (bA.hY.pp(), t.x(), aM.hI) && aM.a3H()
	}, 0, 1)), aSZ.unshift(new w(L(487), function() {
		!aD.hH && aw.hx(aD.es) && (bX.a6Z(2), bA.hY.ht(), t.x(), aM.hI) && aM.a3H()
	}, 0, 1))), 1 === a0.id && 5 <= a0.e0 && aSZ.push(new w(L(483), function() {
		a0.a1.a29()
	})), aPK = new vQ(L(484), vR), aSY = new rZ(aSZ, aPK.vW)
}

function aPD() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.sResourcesType && bC.r9.a3q(aQX.vw(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(343), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(301), L(302), L(303)],
			value: aD.data.sResourcesType
		}, function(eF) {
			aQa(), 2 !== eF || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f5)), aD.data.sResourcesType = eF, t.u(28)
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg;
		1 === aD.data.sResourcesType && ((aPg = new qe).qh("Value"), aPg.qs(new rp({
			eF: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bN.iG(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qw.push(aPg))
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.sResourcesType && ((aPg = new qe).qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.sResourcesData, 2)), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aPB() {
	var aQV, aQW, aQX, qw;

	function aQY() {
		aQa(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aPJ()[19] = null, t.a2J()
	}

	function aQa() {
		2 === aD.data.tIncomeType && bC.r9.a3q(aQX.vw(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aQV.show(), this.resize()
	}, this.sI = function() {
		aQV.sI()
	}, this.resize = function() {
		aQV.resize(), aQW.resize()
	}, this.a3E = function(eg) {
		2 === eg && aQV.vX[0].rI()
	}, aQV = new vQ(L(341), [new w("⬅️ " + L(40), aQY)]), aQW = new qu(aQV.vW, (function(qw) {
		var aPg = new qe;
		aPg.qh(L(300)), aPg.qp(new vM({
			t0: [L(301), L(302), L(303)],
			value: aD.data.tIncomeType
		}, function(eF) {
			aQa(), 2 !== eF || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f5), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eF, t.u(26)
		})), qw.push(aPg)
	}(qw = []), function(qw) {
		var aPg;
		1 === aD.data.tIncomeType && ((aPg = new qe).qh("Value"), aPg.qs(new rp({
			eF: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iG(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qw.push(aPg))
	}(qw), function(qw) {
		var aPg;
		2 === aD.data.tIncomeType && ((aPg = new qe).qh("Data"), (aQX = new vo(0, 1, 0, 1)).vv(bC.s0.a5N(aD.data.tIncomeData, 4)), aPg.qs(aQX), qw.push(aPg))
	}(qw), qw))
}

function aP3() {
	var aPK, aPL, qw;
	this.show = function() {
		aPK.show(), this.resize()
	}, this.sI = function() {
		aPK.sI()
	}, this.resize = function() {
		aPK.resize(), aPL.resize()
	}, this.a3E = function(eg) {
		2 === eg && aPK.vX[0].rI()
	}, aPK = new vQ(L(477), [new w("⬅️ " + L(40), function() {
		t.a2J()
	})]), aPL = new qu(aPK.vW, ((qw = []).push(function() {
		function aPn() {
			aTd.button.textContent = L(185), aUA.e.readOnly = !1, aUB.e.readOnly = !1, aPm.rL(1), aPm.button.style.color = bD.o4
		}
		var aPg = new qe,
			aU9 = (aPg.qn(b0.y.aPh("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aPg.qh(L(498)), new rp({
				value: bl.eT.data[105].value,
				eF: -1
			})),
			aUA = (aU9.e.readOnly = !0, aPg.qs(aU9), aPg.qh(L(388), "0.8em"), new rp(bl.eT.data[148], 0, void 0, function(e) {
				aPl(bl.eT.data[149].value, e.target.value)
			})),
			aUB = (aPg.qs(aUA), aPg.qh(L(392), "0.8em"), new rp(bl.eT.data[149], 1, void 0, function(e) {
				aPl(e.target.value, bl.eT.data[148].value)
			})),
			aTd = (aPg.qs(aUB), new w(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aUA.e.readOnly = !0, aUB.e.readOnly = !0, aPm.rL(0), aPm.button.style.color = bD.p4, bl.pV.pW(149, aUB.e.value), aPl(bl.eT.data[149].value, bl.eT.data[
					148].value)) : aPn(), !0
			})),
			aPm = (aPg.qs(new sU([aTd.button])), new w(L(14), function(e) {
				return aUA.e.readOnly && b0.y.ec(0) && (bC.r1.vJ(e), aPn(), b0.aGP.aGQ({
					tL: 0,
					tH: bl.eT.data[148].value,
					value: parseInt(bl.eT.data[149].value, 10)
				})), !0
			}, 1)),
			qk = aPg.qj(),
			aPl = (aPg.qj(L(499)).style.fontWeight = "bold", function(fa, qi) {
				qk.innerHTML = t.y.aPp(fa, bl.eT.data[105].value, qi)
			});
		return aPg.qs(new sU([aPm.button])), aPl(bl.eT.data[149].value, bl.eT.data[148].value), aPg
	}()), qw))
}

function by() {
	"function" != typeof Math.log2 && (Math.log2 = function(fF) {
		return Math.log(fF) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fF) {
		return Math.log(fF) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fF) {
		return 0 < fF ? 1 : fF < 0 ? -1 : 0
	})
}

function ck() {
	var aAX, aUD, aUE, aUF, aUC = !1;

	function aUG() {
		aUC = !0, aAX = -1, aUD = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aUD[aB] = !1;
		var yU = Math.floor(1 + .02 * h.min);
		aUE = new Array(4), (aUF = new Array(4))[1] = aUF[3] = aUE[0] = aUE[2] = 0, aUF[0] = aUE[3] = -yU, aUE[1] = aUF[2] = yU
	}

	function aUH() {
		if (-1 !== aAX)
			if (0 !== aD.a18 && aH.nm()) {
				for (var aUI = !1, aB = 3; 0 <= aB; aB--) aUD[aB] && (aUI = !0, il += aUE[aB], im += aUF[aB], af.a2g(aUE[aB], aUF[aB]), aS.aAD());
				aUI ? bh.dp = !0 : ar.nc()
			} else ar.nc()
	}
	this.a3C = function(eF) {
		0 !== aD.a18 && aH.nm() && (aUC || aUG(), aUD[eF] = !0, -1 === aAX) && (aAX = setInterval(aUH, 20), aUH())
	}, this.a3F = function(eF) {
		if (0 !== aD.a18 && (aUC || aUG(), aUD[eF] = !1, -1 !== aAX)) {
			for (var aUI = !1, aB = 3; 0 <= aB; aB--) aUI = aUI || aUD[aB];
			aUI || this.nc()
		}
	}, this.nc = function() {
		if (aUC && -1 !== aAX) {
			for (var aB = 3; 0 <= aB; aB--) aUD[aB] = !1;
			clearInterval(aAX), aAX = -1
		}
	}
}

function cl() {
	this.y = new aUJ, this.ml = new aUK, this.pT = new aUL, this.aFr = new aUM, this.ed = new aUN, this.aGP = new aUO, this.q8 = new aUP, this.aRq = new aUQ, this.a7j = new aUR, this.aUS = new aUT, this.aUU = new aUV, this.aUW = new aUX, this.aUY =
		new aUZ, this.dh = function() {
			this.y.dh()
		}
}

function aUJ() {
	var aUb, aUc;
	this.aHM = 5, this.aUa = null, this.a2S = 0, this.a2I = 0;

	function aUk() {
		return 0 === aZ.aHI ? l.e2 ? 1 : 0 : aZ.aHI - 1
	}

	function aUn(a2F, a2P, aUm) {
		aUc[a2F].aUC = !0, aUh(a2F), aUb[a2F] = new aUq, aUb[a2F].dh(a2F, a2P, aUm)
	}

	function aUo(aB) {
		return aUc[aB].aUC && aUb[aB].aUo()
	}

	function aUh(a2F) {
		aUc[a2F].eW = bh.eW, aUc[a2F].aUe = !1
	}
	this.dh = function() {
		this.aUa = new Array(this.aHM);
		this.aUa[0] = "territorial.io";
		var aMf = ay.aN1(0);
		ay.a5k(0);
		for (var aB = 1; aB < this.aHM; aB++) this.aUa[aB] = aK.a0g() + ".territorial.io";
		for (ay.a5k(aMf), aUb = new Array(this.aHM), aUc = new Array(this.aHM), aB = this.aHM - 1; 0 <= aB; aB--) aUc[aB] = {
			aUC: !1,
			eW: 0,
			aUe: !1
		};
		this.aHN(0, 0, 0)
	}, this.aUf = function(aB) {
		return aUb[aB]
	}, this.eb = function() {
		for (var aB = this.aHM - 1; 0 <= aB; aB--) this.ec(aB) && bh.eW > aUc[aB].eW + 15e3 && (b0.pT.aUg(aB, aUc[aB].aUe), aUh(aB));
		!this.ec(0) && bh.eW > aUc[0].eW + 8e3 && (aUc[0].eW = bh.eW, this.aHN(0, 0, 0))
	}, this.aRn = function(id) {
		return this.aHN(0, id, 0) && this.aUi(0)
	}, this.aU7 = function(aUj) {
		return aUj ? aZ.aHJ : aUk()
	}, this.a1Y = function() {
		return aUk() ? "game.territorial.io" : "territorial.io"
	}, this.aPh = function(aUl) {
		aUl = this.a1Y() + aUl;
		return "<a href='https://" + aUl + "' target='_blank'>" + aUl + "</a>"
	}, this.aHN = function(a2F, a2P, aUj) {
		aUj = this.aU7(aUj);
		if (aUc[a2F].aUC) {
			if (aUb[a2F].aUo()) return aUb[a2F].aUp(a2P), aUb[a2F].ec();
			aUb[a2F].sI()
		}
		return aUn(a2F, a2P, aUj), !1
	}, this.aUr = function(a2F, a2P) {
		b0.ed.aUs(a2F)
	}, this.aUi = function(aB) {
		return this.ec(aB) && aUb[aB].aUi()
	}, this.aUt = function(aB) {
		aUb[aB].aUt()
	}, this.ec = function(aB) {
		return aUc[aB].aUC && aUb[aB].ec()
	}, this.send = function(a2F, aC) {
		0 !== a2F && aUh(a2F), aUb[a2F].send(aC)
	}, this.a2x = function(a2F) {
		8 === aa.a2K() && (aUc[a2F].aUe = !0, b0.ml.aUu = !0)
	}, this.close = function(a2F, aUv) {
		aUo(a2F) && aUb[a2F].close(aUv)
	}, this.aUw = function(a2F, aUv) {
		o.a2V(aUv), aUo(a2F) && aUb[a2F].close(aUv)
	}, this.a2W = function(aUv) {
		for (var aB = this.aHM - 1; 0 <= aB; aB--) this.close(aB, aUv)
	}, this.aUx = function(a2F, aUv) {
		for (var aB = this.aHM - 1; 0 <= aB; aB--) aB !== a2F && this.close(aB, aUv)
	}, this.a5v = function() {
		0 === this.a2S && (aD.kn || aD.hH) || this.close(this.a2S, 3246)
	}, this.aUy = function(a2F, e) {
		aUb[a2F].sI(), o.a2E(a2F, e.code)
	}
}

function aUK() {
	this.aUu = !1, this.eb = function() {
		bh.kQ() % 250 != 249 || aD.hH || (b0.ed.aUz(+(this.aUu && ag.n3[aD.es]), al.kz + bP.y.mJ), this.aUu = !1)
	}
}

function aUR() {
	this.aV1 = function(a2F, aC) {
		bJ.dh(aC), 0 === bJ.size ? b0.y.aUw(a2F, 3205) : ((0 === bJ.q9(1) ? function(a2F) {
			var aV5 = bJ.q9(6);
			0 === aV5 ? function(a2F) {
					if (0 === a2F && 8 !== aa.a2K()) {
						t.y.aTG();
						for (var aVL = bJ.q9(12), aVM = bJ.q9(6), g = new Array(aVL), aB = 0; aB < aVL; aB++) g[aB] = bJ.q9(aVM);
						aT.aAd(g)
					}
				}(a2F) : 2 === aV5 ? b0.aUS.aV7(a2F) : 3 === aV5 || 4 === aV5 ? ax.dh() : 5 === aV5 ? b0.aUU.aV8() : 9 === aV5 ? b0.aUU.aV9(a2F) : 10 === aV5 ? b0.aUW.aVA() : 11 === aV5 ? b0.aUU.aVB(a2F) : 12 === aV5 ? b0.aUW.aVC() :
				13 === aV5 ? b0.aUY.aVD() : 14 === aV5 ? b0.aUY.aVE() : 15 === aV5 ? b0.aUU.aVF() : 16 === aV5 ? b0.aUS.aVG(a2F) : 17 === aV5 ? b0.aUS.aVH(a2F) : 19 === aV5 ? b0.aUS.aVI(a2F) : 20 === aV5 ? b0.aUU.aVJ(a2F) : 21 ===
				aV5 && b0.aUU.aVK(a2F)
		} : function(a2F) {
			if (8 !== aa.a2K() && !ax.aHr()) return;
			if (a2F !== b0.y.a2S) b0.y.aUw(a2F, 3244);
			else if (0 === bJ.q9(1)) bh.a1I.aVN(bJ.aC);
			else {
				var aB, a2F = bJ.q9(2);
				if (0 === a2F) {
					var pk, pT = bJ.q9(9);
					0 !== ag.n3[pT] && 0 !== ag.n3[aD.es] && (pk = bJ.q9(10), aN.pj(pT, aD.es, pk), af.qa(pT, 1, pk))
				} else if (1 === a2F) ! function() {
					var pT = bJ.q9(9);
					0 !== ag.n3[pT] && 0 !== ag.n3[aD.es] && b5.aMG(0, [pT], !0) && aN.q1(pT, 1)
				}();
				else if (2 === a2F) ! function() {
					var pT = bJ.q9(9),
						target = bJ.q9(9);
					0 !== ag.n3[pT] && 0 !== ag.n3[target] && 0 !== ag.n3[aD.es] && b5.aMG(1, [pT], !0) && (af.qa(pT, 3, 96), af.qa(target, 4, 96), aN.a7q(pT, target))
				}();
				else if (l.a9 && !l.aA) {
					var f8 = 540;
					for (bF.a7(17287), bF.a8(1, 0), bF.a8(6, 10), f8 = Math.min(bA.pP.qB.length, 540), aB = 0; aB < f8; aB++) bF.aVT(32, bA.pP.qB[aB]);
					b0.y.send(b0.y.a2S, bF.aC)
				}
			}
		})(a2F), bh.aV4())
	}
}

function aUX() {
	this.aVA = function() {
		bl.y.wc(), bl.pV.pW(105, bH.tM.tN(bH.tM.tO(5))), bl.pV.pW(106, bH.tM.tN(bH.tM.tO(15))), bl.pV.pW(109, 0), bl.pV.pW(108, bl.eT.data[109].value), bl.pV.pW(111, bl.eT.data[109].value + 1), bl.pV.pW(107, 0), bl.pV.pW(110, "")
	}, this.aVC = function() {
		var data;
		bJ.size < bF.aVU(29) ? b0.y.aUw(0, 3254) : ((data = {
			tI: bJ.q9(30),
			wq: bJ.q9(16),
			wr: bJ.q9(30),
			ws: bJ.q9(30),
			wt: bJ.q9(30),
			wu: bJ.aVV(32),
			username: bI.x7.xP(5),
			wv: bI.x7.xP(3),
			ww: bI.x7.xP(3),
			wx: bJ.aVV(32),
			wy: bJ.aVV(32),
			wz: bJ.q9(30),
			x0: bJ.aVV(32),
			x1: bJ.aVV(32),
			x2: bJ.aVV(32),
			x3: bJ.aVV(32),
			aPx: bJ.aVV(32),
			aPy: bJ.aVV(30),
			aQL: bJ.aVV(32),
			aQM: bI.x7.xP(3),
			aQE: bJ.aVV(2),
			aQG: bJ.aVV(10),
			aQC: bI.x7.xP(8),
			aQF: bJ.aVV(5),
			aPj: bJ.q9(30),
			aPu: bJ.q9(30),
			a1b: bJ.aVV(32),
			aQ2: bJ.q9(3),
			aQ1: bJ.q9(8),
			aPv: bJ.q9(30),
			aPw: bJ.aVV(32),
			aQ0: bJ.q9(1),
			aQ8: bI.x7.xP(6),
			aQN: bJ.q9(1),
			aQO: bJ.q9(1)
		}).aQN && (data.aQP = bJ.aVV(32), data.aQQ = bJ.q9(30), data.aQR = bJ.q9(30), data.aQS = bJ.q9(1)), 8 === t.tJ && (25 === t.a2O().aRm ? (data.aPM = !0, t.y.aP0 = data, t.a2O().aDW(25, !1)) : (data.aPM = !1, bl.pV.pW(160, +(data
			.aQN && data.aQS)), data.tH = bl.eT.data[105].value, t.y.aOx = data, bl.pV.wp(data), t.a2O().aDW(16, !0))))
	}
}

function aUZ() {
	this.aVD = function() {
		var aB;
		if (bJ.size < bF.aVU(23)) b0.y.aUw(0, 3259);
		else {
			var tc = bJ.q9(6),
				f8 = bJ.q9(10),
				data = [];
			if (9 === tc || 10 === tc || 11 === tc || 13 === tc) {
				for (aB = 0; aB < f8; aB++) data.push([bJ.q9(30), bI.x7.xP(5), bJ.aVV(32), 0, bJ.q9(30)]);
				8 === t.tJ && t.a2O().aDW(21, !0, {
					tc: tc,
					data: data
				})
			} else if (12 === tc) {
				for (aB = 0; aB < f8; aB++) data.push([bJ.q9(20), bJ.q9(30), bJ.q9(30), bJ.aVV(32), bJ.q9(30), bI.x7.xP(5), bI.x7.xP(5)]);
				8 === t.tJ && t.a2O().aDW(21, !0, {
					tc: tc,
					data: data
				})
			} else {
				var i5 = bJ.q9(16);
				if (bJ.aVW(39 + 16 * i5 + f8 * (0 === tc ? 111 : 1 === tc ? 101 : 2 === tc || 3 === tc ? 127 : 212))) {
					if (0 === tc)
						for (aB = 0; aB < f8; aB++) data.push([bJ.q9(30), bI.x5.x9(bJ.q9(5)), bJ.q9(16), bJ.q9(30), bJ.q9(30)]);
					else if (1 === tc)
						for (aB = 0; aB < f8; aB++) data.push([bJ.q9(16), bI.x5.x9(bJ.q9(3)), bJ.q9(16), bI.x5.x9(bJ.q9(5)), bJ.q9(31), bJ.q9(30)]);
					else if (2 === tc || 3 === tc)
						for (aB = 0; aB < f8; aB++) data.push([bJ.q9(30), bI.x5.x9(bJ.q9(5)), bJ.aVV(32), bJ.q9(30), bJ.q9(30)]);
					else
						for (aB = 0; aB < f8; aB++) data.push([bJ.q9(20), bJ.q9(30), bJ.q9(30), bJ.q9(30), bJ.q9(30), bJ.aVV(32), bJ.q9(30), bI.x5.x9(bJ.q9(5)), bI.x5.x9(bJ.q9(5))]);
					8 === t.tJ && t.a2O().aDW(21, !0, {
						tc: tc,
						data: data
					})
				} else b0.y.aUw(0, 3260)
			}
		}
	}, this.aVE = function() {
		if (bJ.size < bF.aVU(29)) b0.y.aUw(0, 3265);
		else {
			var aVX = bJ.q9(4),
				aVY = bJ.q9(7),
				aVZ = bJ.q9(11);
			if (bJ.aVW(29 + 16 * aVY + 16 * aVZ + 11 * aVX)) {
				for (var data = [], aB = 0; aB < aVX; aB++) {
					for (var a1q = bI.x5.x9(bJ.q9(3)), aVa = bJ.q9(8), aQz = [], fR = 0; fR < aVa; fR++) aQz.push(bJ.q9(16));
					data.push({
						name: "[" + a1q + "]",
						aQz: aQz
					})
				}
				8 === t.tJ && t.a2O().aDW(23, !0, data)
			} else b0.y.aUw(0, 3266)
		}
	}
}

function aUT() {
	function aVc() {
		var id = bJ.q9(3);
		return 0 === id ? {
			id: id,
			tH: bJ.q9(30),
			r: bp.aDx.aFw(bI.x7.xP(7))
		} : 1 === id ? {
			id: id,
			tH: bJ.q9(30),
			aEy: bJ.q9(3),
			value: bJ.q9(30),
			target: bJ.q9(30)
		} : 2 === id ? {
			id: id,
			tH: bJ.q9(30),
			aEy: bJ.q9(3)
		} : 3 === id ? {
			id: id,
			tH: bJ.q9(30),
			aEy: bJ.q9(3),
			value: bJ.q9(4),
			target: bJ.q9(30)
		} : 4 === id ? {
			id: id,
			tH: bJ.q9(30),
			aEy: bJ.q9(3),
			target: bJ.q9(30)
		} : 5 === id ? {
			id: id,
			aEy: bJ.q9(6)
		} : 6 === id ? {
			id: id,
			value: bJ.q9(17)
		} : null
	}
	this.aV7 = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3239);
		else if (6 !== aa.a2K()) b0.y.close(a2F, 3271);
		else {
			bp.dh();
			for (var aB = 0; aB < 4; aB++) {
				var s6 = bp.y.s7[aB],
					playerCount = (s6.uB = bJ.q9(10), s6.eo = bJ.q9(6), s6.mapSeed = bJ.q9(14), s6.aEj = bJ.q9(4), s6.aGT = bJ.q9(6), s6.aGU = bJ.q9(14), s6.aGV = bJ.q9(4), s6.aEp = bJ.q9(1), s6.aFX = bJ.q9(12), s6.spawningSeed = bJ.q9(14), bJ
						.q9(16));
				bp.uS.uU[aB] = bJ.q9(16);
				for (var fR = 0; fR < playerCount; fR++) bp.uS.aEB(aB, bJ.q9(30), bI.x7.xP(5), bJ.q9(4), bJ.q9(30), bJ.q9(7), bJ.q9(16), bJ.q9(18), bJ.q9(11), bJ.q9(12))
			}
			t.u(29), bp.y.aFP(!0)
		}
	}, this.aVG = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3239);
		else if (bp.a2H) {
			bp.y.aFN[0] = bJ.q9(20), bp.y.aFN[1] = bJ.q9(20);
			for (var aVb = bJ.q9(16), fR = 0; fR < aVb; fR++) {
				var id = bJ.q9(3);
				0 === id ? bp.uS.aEB(bJ.q9(2), bJ.q9(30), bI.x7.xP(5), 0, 1234566, 127, 0, bJ.q9(18), 0, bJ.q9(12)) : 1 === id ? bp.uS.aEU(bJ.q9(16), bJ.q9(2)) : 2 === id ? bp.uS.aEQ(bJ.q9(16), bJ.q9(2), bJ.q9(2)) : 3 === id ? bp.uS.aET(bJ.q9(
					16), bJ.q9(2)) : 4 === id ? bp.uS.aEJ(bJ.q9(16), bJ.q9(2), bJ.q9(4), bJ.q9(30), bJ.q9(7), bJ.q9(16), bJ.q9(11), bJ.q9(18)) : 5 === id && bp.uS.aEK(bJ.q9(16), bJ.q9(2), bJ.q9(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var s6 = bp.y.s7[aB];
				if (s6.uB = bJ.q9(10), s6.aGT = bJ.q9(6), s6.aGU = bJ.q9(14), s6.aGV = bJ.q9(4), 0 === s6.uB) {
					if (s6.a2S = bJ.q9(10), s6.aEn = bJ.q9(10), bp.aDz.dq(aB)) return;
					s6.eo = bJ.q9(6), s6.mapSeed = bJ.q9(14), s6.aEj = bJ.q9(4), s6.aEp = bJ.q9(1), s6.aFX = bJ.q9(12), s6.spawningSeed = bJ.q9(14), s6.aGW.push(s6.aGW[0]), s6.aGW.shift()
				}
			}
			bp.y.aEf()
		} else b0.y.close(a2F, 3251)
	}, this.aVH = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3272);
		else if (bp.a2H) {
			for (var s4 = bJ.q9(4), s6 = bp.y.s7[s4], s8 = s6.s8, uj = (s6.s9 = bJ.q9(20), bJ.q9(6)), aB = 0; aB < uj; aB++) {
				var aGn = aVc();
				bp.sH.aGm(aGn), s8.push(aGn)
			}
			bp.y.aFY(s4)
		} else b0.y.close(a2F, 3273)
	}, this.aVI = function(a2F) {
		a2F !== b0.y.a2I ? b0.y.close(a2F, 3276) : bp.a2H ? bp.message.aEd(aVc()) : b0.y.close(a2F, 3277)
	}
}

function aUV() {
	this.aV8 = function() {
		for (var id = bJ.q9(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bJ.q9(8), bJ.q9(8), bJ.q9(8)]);
		var ei = bI.x7.xP(8);
		bW.eP.ef({
			id: id,
			colors: colors,
			ei: ei
		})
	}, this.aVJ = function(a2F) {
		var aVd = bJ.q9(3),
			fB = bJ.q9(5),
			fB = bk.aVe.aVf(fB, bJ.q9(30), bJ.q9(30), bJ.q9(30));
		b0.ed.aVg(a2F, fB, aVd)
	}, this.aV9 = function(a2F) {
		this.aVJ(a2F), bl.pV.pW(183, bH.tM.tN(bH.tM.tO(15))), 0 === a2F && 0 === bl.eT.data[105].value.length ? b0.ed.ee(0) : b0.aGP.aVh(a2F), 4 === b0.y.aUf(a2F).aVi() ? 6 === aa.a2K() && b0.aFr.aHO(a2F) : 5 !== b0.y.aUf(a2F).aVi() || 8 !== aa
			.a2K() && 10 !== aa.a2K() || b0.pT.aHn()
	}, this.aVB = function(a2F) {
		var id = bJ.q9(6);
		1 === id ? (bl.pV.pW(160, bJ.q9(30)), b0.y.aUt(a2F), aT.aAZ || b0.ed.ee(1), b9.aDS(), 8 === t.tJ && t.a2O().aRz()) : 21 === id ? 8 === t.tJ && t.a2O().aDW(17) : 22 === id && (bl.pV.pW(106, bl.eT.data[110].value), bl.pV.pW(110, ""), 8 ===
			t.tJ) && t.a2O().aDW(15)
	}, this.aVF = function() {
		var f8 = bJ.q9(16),
			aVj = bJ.q9(16);
		if (bJ.aVW(55 + 10 * f8 + 16 * aVj)) {
			for (var g = [], aB = 0; aB < f8; aB++) g.push(bI.x5.x9(bJ.q9(10)));
			b9.aDV(g)
		} else b0.y.aUw(0, 3270)
	}, this.aVK = function(a2F) {
		var fB = bJ.q9(5),
			fB = bk.aVe.aVf(fB, bJ.q9(30), bJ.q9(30), bJ.q9(30)),
			qi = bI.x7.xP(16);
		bF.a7(53), bF.a8(1, 0), bF.a8(6, 31), bF.a8(30, fB), bF.a8(16, new Function(qi)()), b0.y.send(a2F, bF.aC)
	}
}

function aUL() {
	this.aUg = function(a2F, aUe) {
		bF.a7(11), bF.a8(1, 0), bF.a8(6, 4), bF.a8(1, aUe ? 1 : 0), bF.a8(3, 0 === aD.a18 ? bp.a2H ? 6 : 0 : aD.hH ? 1 : aD.kn ? 7 : aD.kl < 7 ? 2 : 8 === aD.kl ? 4 : 9 === aD.kl ? 5 : 3), b0.y.send(a2F, bF.aC)
	}, this.aHn = function() {
		bF.a7(58), bF.a8(1, 0), bF.a8(6, 5), bF.a8(8, b0.y.a2I), bF.a8(10, ax.aEn), bF.a8(9, ax.aHg), bF.a8(10, l.e4), bF.a8(14, l.dt), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pU = function(eu) {
		bF.a7(27), bF.a8(1, 1), bF.a8(4, 0), bF.a8(22, eu), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pX = function(ik, jc) {
		bF.a7(25), bF.a8(1, 1), bF.a8(4, 1), bF.a8(10, ik), bF.a8(10, jc), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pb = function(ik, pZ) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 2), bF.a8(10, ik), bF.a8(9, pZ), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pd = function(ik, pc) {
		bF.a7(42), bF.a8(1, 1), bF.a8(4, 3), bF.a8(10, ik), bF.a8(27, pc), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pf = function(ik, nR) {
		bF.a7(31), bF.a8(1, 1), bF.a8(4, 4), bF.a8(10, ik), bF.a8(16, nR), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pi = function(jc) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 5), bF.a8(10, jc), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pm = function(eF) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 6), bF.a8(10, eF), b0.y.send(b0.y.a2S, bF.aC)
	}, this.po = function(pn) {
		bF.a7(6), bF.a8(1, 1), bF.a8(4, 7), bF.a8(1, pn), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pq = function() {
		bF.a7(5), bF.a8(1, 1), bF.a8(4, 8), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pr = function(ik, eu, jc) {
		bF.a7(47), bF.a8(1, 1), bF.a8(4, 10), bF.a8(10, ik), bF.a8(10, jc), bF.a8(22, eu), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pz = function(aVk, aVl) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 15), bF.a8(9, aVl), bF.a8(10, aVk), b0.y.send(b0.y.a2S, bF.aC)
	}, this.q2 = function(a7j) {
		bF.a7(14), bF.a8(1, 1), bF.a8(4, 14), bF.a8(9, a7j), b0.y.send(b0.y.a2S, bF.aC)
	}, this.q6 = function(aVm, target) {
		var aB, f8 = aVm.length;
		for (bF.a7(14 + 9 * f8), bF.a8(1, 1), bF.a8(4, 13), bF.a8(9, target), aB = 0; aB < f8; aB++) bF.a8(9, aVm[aB]);
		b0.y.send(b0.y.a2S, bF.aC)
	}
}

function aUO() {
	this.aVn = function() {
		bF.a7(39), bF.a8(1, 0), bF.a8(6, 16), b0.ed.aVo(), b0.y.send(0, bF.aC)
	}, this.aVh = function(a2F) {
		bF.a7(127), bF.a8(1, 0), bF.a8(6, 17), bI.tM.xL(bl.eT.data[105].value, 5), bI.tM.xL(bl.eT.data[106].value, 15), b0.y.send(a2F, bF.aC)
	}, this.aS0 = function() {
		bF.a7(97), bF.a8(1, 0), bF.a8(6, 18), bI.tM.xL(bl.eT.data[110].value, 15), b0.y.send(0, bF.aC)
	}, this.aQA = function(a50) {
		var f8 = a50.qi.length;
		bF.a7(21 + 16 * f8), bF.a8(1, 0), bF.a8(6, 29), bF.a8(6, a50.tL), bF.a8(8, f8), bH.x5.xK(a50.qi), b0.y.send(0, bF.aC)
	}, this.aTe = function(wu, colors, aVq, ei) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 16), bG.a8(20, Math.min(wu, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fR = 0; fR < 3; fR++) bG.a8(8, colors[aB][fR]);
		wu = b9.data.aDZ(aVq.trim());
		bG.a8(8, -1 === wu ? 255 : wu), bH.x7.a0a(ei.trim().substring(0, 180), 8, bG), b0.y.send(0, bG.aVr())
	}, this.aQH = function(data) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 25), bF.a8(6, data.tL), bI.tM.xL(data.tH, 5), b0.y.send(0, bF.aC)
	}, this.aGQ = function(data) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 27), bF.a8(6, data.tL), bI.tM.xL(data.tH, 5), bF.aVT(32, data.value), b0.y.send(0, bF.aC)
	}
}

function aUP() {
	this.q7 = function() {
		for (var f8 = aD.kT, a0x = bT.result.a0x, lO = a0x.length, a1j = (bF.a7(17 + 16 * f8 + 33 * lO), bF.a8(1, 1), bF.a8(4, 12), bF.a8(10, lO), bF.a8(1, +(2 === aD.a15)), bF.a8(1, aD.a1Q % 2), ag.a1j), aB = 0; aB < f8; aB++) bF.a8(16, a1j[
		aB]);
		for (var gw = ag.gw, aB = 0; aB < lO; aB++) {
			var gg = a0x[aB];
			bF.a8(9, gg), bF.a8(24, gw[gg])
		}
		b0.y.send(b0.y.a2S, bF.aC)
	}
}

function aUQ() {
	this.aRr = function(tc, td, te) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 21), bF.a8(6, tc), bF.a8(1, +(td < 0)), bF.a8(1, +(te < 0)), bF.a8(30, Math.abs(td)), bF.a8(30, Math.abs(te)), b0.y.send(0, bF.aC)
	}, this.aRs = function(tc, aRt, aRu) {
		bF.a7(18 + 16 * aRt.length + 30), bF.a8(1, 0), bF.a8(6, 22), bF.a8(6, tc), b0.ed.aVs(aRt), bF.a8(30, aRu), b0.y.send(0, bF.aC)
	}, this.aRx = function(tc, aRt, aRu) {
		bF.a7(73), bF.a8(1, 0), bF.a8(6, 28), bF.a8(6, tc), bI.tM.xL(aRt, 5), bF.a8(30, aRu), b0.y.send(0, bF.aC)
	}, this.aRv = function(aQy, a1p) {
		for (var f8 = a1p.length, i5 = 0, aB = 0; aB < f8; aB++) i5 += a1p[aB].length;
		for (bF.a7(21 + 3 * f8 + 16 * i5), bF.a8(1, 0), bF.a8(6, 23), bF.a8(3, aQy), bF.a8(4, f8), bF.a8(7, i5), aB = 0; aB < f8; aB++) bF.a8(3, a1p[aB].length), bH.x5.xK(a1p[aB]);
		b0.y.send(0, bF.aC)
	}, this.aRw = function(aQy, td, te) {
		bF.a7(52), bF.a8(1, 0), bF.a8(6, 24), bF.a8(3, aQy), bF.a8(1, +(td < 0)), bF.a8(1, +(te < 0)), bF.a8(20, Math.abs(td)), bF.a8(20, Math.abs(te)), b0.y.send(0, bF.aC)
	}
}

function aUM() {
	this.aHO = function(a2F) {
		var username = bl.eT.data[122].value.slice(0, 20),
			username = (bF.a7(24 + 16 * username.length + 18), bF.a8(1, 0), bF.a8(6, 1), bF.a8(10, l.e4), bF.a8(2, bl.eT.data[158].value), b0.ed.aVs(username), bC.color.a45(bl.y.wj()));
		bF.a8(6, username[0]), bF.a8(6, username[1]), bF.a8(6, username[2]), b0.y.a2I = a2F, b0.y.send(a2F, bF.aC)
	}, this.aFs = function(aVu, a50) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 2), bG.a8(3, aVu), 2 === aVu ? bG.a8(2, a50) : 3 === aVu ? bH.x7.a0a(a50, 7, bG) : 5 === aVu && (bG.a8(3, a50.id), bG.a8(3, a50.value), bG.a8(30, a50.tH)), b0.y.send(b0.y.a2I, bG.aVr())
	}
}

function aUN() {
	this.aUs = function(a2F) {
		var aW0;
		bF.a7(55 + bk.aVv.q9()), bF.a8(1, 0), bF.a8(6, 13), bF.a8(14, l.dt), bF.a8(4, a0.id), bF.a8(7, a0.e0), bF.a8(1, +l.a9), bF.a8(1, +l.aA), bF.a8(5, (new Date).getHours() % 24), aW0 = b9.aDY(), bF.a8(8, aW0[0]), bF.a8(8, aW0[1]), bk.aVv
		.a0a(), b0.y.send(a2F, bF.aC)
	}, this.aVg = function(a2F, rX, aVd) {
		bF.a7(40), bF.a8(1, 0), bF.a8(6, 30), bF.a8(3, aVd), bF.a8(30, rX), b0.y.send(a2F, bF.aC)
	}, this.ee = function(id) {
		bF.a7(13), bF.a8(1, 0), bF.a8(6, 15), bF.a8(6, id), b0.y.send(0, bF.aC)
	}, this.uz = function(id, value) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 3), bF.a8(6, id), bF.a8(30, value), b0.y.send(0, bF.aC)
	}, this.aDU = function(id, qi) {
		var f8 = Math.min(qi.length, 63);
		bF.a7(19 + 16 * f8), bF.a8(1, 0), bF.a8(6, 26), bF.a8(6, id), bF.a8(6, f8), bH.x5.xK(qi), b0.y.send(0, bF.aC)
	}, this.aVx = function(aTF, qt) {
		bF.a7(7 + 26 * qt.length), bF.a8(1, 0), bF.a8(6, 9);
		for (var aB = 0; aB < qt.length; aB++) bF.a8(16, qt[aB][0]), bF.a8(10, qt[aB][1]);
		b0.y.send(aTF, bF.aC)
	}, this.aUz = function(aVy, aVz) {
		bF.a7(20), bF.a8(1, 0), bF.a8(6, 19), bF.a8(1, aVy), bF.a8(12, aVz), b0.y.send(b0.y.a2S, bF.aC)
	}, this.aVs = function(username) {
		bF.a8(5, username.length), bH.x5.xK(username)
	}
}

function aUq() {
	var aW1, aW2, b, aW3 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aW4 = 0;

	function aUr() {
		b0.y.aUr(aW1, aW2)
	}

	function aW7(e) {
		b0.a7j.aV1(aW1, new Uint8Array(e.data))
	}

	function aW8() {}

	function aUy(e) {
		b0.y.aUy(aW1, e)
	}
	this.dh = function(eF, a2P, aUm) {
		aW1 = eF, aW2 = a2P,
			function(aUm) {
				aUm = l.dx ? "ws://localhost:" + (7130 + aW1) + "/" : aUm ? aW3[0] + "game.territorial.io/x0" + aW1 + "/" : aW3[0] + b0.y.aUa[aW1] + aW3[1 + l.dy];
				(b = new WebSocket(aUm)).binaryType = "arraybuffer", b.onopen = aUr, b.onmessage = aW7, b.onclose = aUy, b.onerror = aW8
			}(aUm)
	}, this.aW6 = function() {
		return b.readyState === b.CONNECTING
	}, this.ec = function() {
		return b.readyState === b.OPEN
	}, this.aUi = function() {
		return aW4
	}, this.aUt = function() {
		aW4 = 1
	}, this.aUo = function() {
		return this.aW6() || this.ec()
	}, this.aUp = function(a2P) {
		aW2 = a2P
	}, this.aVi = function() {
		return aW2
	}, this.send = function(aC) {
		this.ec() && b.send(aC)
	}, this.close = function(aUv) {
		this.aUo() && (this.sI(), b.close(aUv))
	}, this.sI = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dO() {
	var gap, aW9 = !1,
		aWA = 0,
		i = 0,
		tQ = 0,
		canvas = null,
		zH = null,
		a3f = null;

	function aWE() {
		for (var aB = aD.yJ; 0 <= aB; aB--) a3f[aB] = 0;
		for (aB = al.kz - 1; 0 <= aB; aB--) a3f[bi.f6[al.l4[aB]]] += ag.gw[al.l4[aB]];
		aW9 = !0
	}

	function aWC() {
		for (var aWJ, aWH = 0, f8 = 0, eg = Math.floor(i / 2), eE = Math.floor(tQ / 2), aWI = 1.5 * Math.PI, aB = aD.yJ; 0 <= aB; aB--) f8 += a3f[aB], 0 === a3f[aB] && aWH++;
		if (aW9 = !1, zH.clearRect(0, 0, i, i), 0 < f8)
			if (aWH === aD.yJ) {
				for (aB = aD.yJ; 0 <= aB; aB--)
					if (0 < a3f[aB]) {
						! function(aB, eg, eE) {
							zH.fillStyle = bi.aWQ[bi.kq[aB]], zH.beginPath(), zH.arc(eg, eg, eE, 0, 2 * Math.PI), zH.fill()
						}(aB, eg, eE);
						break
					}!
				function(eg) {
					var fontSize = eg / 3;
					zH.font = bC.r1.sq(1, fontSize), zH.fillStyle = bD.o4, zH.fillText("100%", eg, eg + .1 * fontSize)
				}(eg)
			} else {
				for (aB = 0; aB <= aD.yJ; aB++) 0 < a3f[aB] && (! function(aB, eg, eE, aWI, aWJ) {
					zH.fillStyle = bi.aWQ[bi.kq[aB]], zH.beginPath(), zH.arc(eg, eg, eE, aWI, aWJ), zH.lineTo(eg, eg), zH.fill()
				}(aB, eg, eE, aWI, aWJ = aWI + 2 * Math.PI * a3f[aB] / f8), function(eg, eE, aWI, aWJ) {
					var fa = (aWJ - aWI) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eE * Math.min(fa, .37);
					fontSize < 8 || (aWI = (aWI + aWJ) / 2, aWJ = (__fx.settings.detailedTeamPercentage ? (100 * fa).toFixed(2) : Math.floor(100 * fa + .5)) + "%", eE *= .525 - Math.max(.6 * (fa - .7), 0), zH.font = bC.r1.sq(1, fontSize), zH
						.fillStyle = bD.o4, zH.fillText(aWJ, eg + Math.cos(aWI) * eE, eg + Math.cos(aWI + 1.5 * Math.PI) * eE))
				}(eg, eE, aWI, aWJ), 0 !== aB && aWO(eg, eE, aWI), aWI = aWJ);
				aWO(eg, eE, 1.5 * Math.PI)
			}!
		function(eg, eE) {
			zH.beginPath(), zH.arc(eg, eg, eE, 0, 2 * Math.PI), zH.stroke()
		}(eg, eE)
	}

	function aWO(eg, eE, aWR) {
		zH.beginPath(), zH.moveTo(eg, eg), zH.lineTo(eg + Math.cos(aWR) * eE, eg + Math.cos(aWR + 1.5 * Math.PI) * eE), zH.stroke()
	}
	this.dh = function() {
		if (aD.i2) {
			aWA = 0, a3f = new Uint32Array(aD.yJ + 1);
			for (var aB = aD.yJ; 0 <= aB; aB--) a3f[aB] = 0;
			for (aB = al.kz - 1; 0 <= aB; aB--) a3f[bi.f6[al.l4[aB]]] += 1;
			this.resize()
		} else a3f = zH = canvas = null
	}, this.a97 = function() {
		return i
	}, this.resize = function() {
		aD.i2 && (i = Math.floor(.95 * (a0.a1.iH() && !aD.nX ? .18 * h.min : .13 * h.iI)), i = (i *= 1 + (.5 + .2 * a0.a1.iH()) * aD.nX) + i % 2, gap = Math.max(1, .015 * i), tQ = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (zH = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zH.strokeStyle = bD.o4, bC.r1.textAlign(zH, 1), bC.r1.textBaseline(zH, 1), aWC())
	}, this.l0 = function(aWD) {
		aWD && aWE();
		var eX, aWD = this.l2();
		return bi.kq[aWD] || (aWD = function() {
			for (var l1 = -1, aB = aD.yJ; 1 <= aB; aB--)(-1 === l1 || a3f[aB] > a3f[l1]) && (l1 = aB);
			return l1
		}(), eX = ag.gw[m4[0]], -1 !== aWD && a3f[aWD] > eX) ? a3f[aWD] : eX
	}, this.a22 = function() {
		return aWA = 31, this.eb(), this.l2()
	}, this.l2 = function() {
		for (var l1 = 0, aB = aD.yJ; 0 < aB; aB--) a3f[aB] > a3f[l1] && (l1 = aB);
		return l1
	}, this.kU = function(aWG) {
		for (var gb = 0, l4 = al.l4, f6 = bi.f6, f8 = al.kz, fm = bQ.fm, aB = 0; aB < f8; aB++) {
			var gg = l4[aB];
			f6[gg] === aWG && (fm[gb++] = gg)
		}
		bQ.fd[0] = gb
	}, this.l3 = function(aWG) {
		for (var gb = 0, l4 = al.l4, f6 = bi.f6, f8 = al.kz, fm = bQ.fm, aB = 0; aB < f8; aB++) {
			var gg = l4[aB];
			f6[gg] !== aWG && (fm[gb++] = gg)
		}
		bQ.fd[0] = gb
	}, this.a4Y = function() {
		for (var gb = 0, aB = aD.yJ; 0 <= aB; aB--) gb += 0 < a3f[aB];
		return gb
	}, this.eb = function() {
		aD.i2 && 32 <= ++aWA && (aWA = 0, aWE())
	}, this.mq = function() {
		aD.i2 && aW9 && aWC()
	}, this.vf = function() {
		aD.i2 && (aD.nX ? vg.drawImage(canvas, be.gap, be.gap) : vg.drawImage(canvas, be.gap, a96 + 2 * be.gap))
	}
}

function de() {
	function aWX(fF, f8, fH, a0k, aAO, fY) {
		if (!(fH < 1 || aAO < fH))
			for (var aB = 0; aB <= f8; aB++) {
				var em = bO.ip(fF, fH);
				if (a0k(em)) return em >> 2;
				fF += fY
			}
		return -1
	}

	function aWb(fH, f8, fF, a0k, aWV, fY) {
		if (!(fF < 1 || aWV < fF)) {
			f8 = Math.max(f8, 0);
			for (var aB = 0; aB <= f8; aB++) {
				var em = bO.ip(fF, fH);
				if (a0k(em)) return em >> 2;
				fH += fY
			}
		}
		return -1
	}

	function aWf(iZ, ia, aWS) {
		return -1 !== ia && (-1 === iZ || bO.ib(ia, aWS) < bO.ib(iZ, aWS)) ? ia : iZ
	}
	this.hX = function(aWS) {
		return this.a1C(aWS, function(em) {
			return ac.f3(em)
		})
	}, this.hd = function(aWS) {
		return this.a1C(aWS, function(em) {
			return ac.aIX(em, aD.es)
		})
	}, this.a1C = function(aWS, a0k) {
		return function(aWS, aWT, a0k) {
			for (var hN = bO.fG(aWS), hP = bO.fI(aWS), aWV = bU.fJ - 2, aAO = bU.fK - 2, aWW = -1, fB = 0; fB < aWT; fB++) {
				var aAN = Math.max(hN - fB, 1),
					aN9 = Math.max(hP - fB, 1),
					yu = Math.min(hN + fB, aWV),
					yt = Math.min(hP + fB, aAO),
					iZ = aWX(hN, yu - hN, hP - fB, a0k, aAO, 1),
					ia = aWX(hN - 1, hN - aAN - 1, hP - fB, a0k, aAO, -1),
					yu = aWX(hN, yu - hN, hP + fB, a0k, aAO, 1),
					aAN = aWX(hN - 1, hN - aAN - 1, hP + fB, a0k, aAO, -1),
					aWa = aWb(hP, yt - hP - 1, hN - fB, a0k, aWV, 1),
					aWc = aWb(hP - 1, hP - aN9 - 2, hN - fB, a0k, aWV, -1),
					yt = aWb(hP, yt - hP - 1, hN + fB, a0k, aWV, 1),
					aN9 = aWb(hP - 1, hP - aN9 - 2, hN + fB, a0k, aWV, -1);
				if (aWW = aWf(aWW, iZ, aWS), aWW = aWf(aWW, ia, aWS), aWW = aWf(aWW, yu, aWS), aWW = aWf(aWW, aAN, aWS), aWW = aWf(aWW, aWa, aWS), aWW = aWf(aWW, aWc, aWS), aWW = aWf(aWW, yt, aWS), 0 <= (aWW = aWf(aWW, aN9, aWS)) && fB *
					fB >= bO.ib(aWW, aWS)) return aWW
			}
			return -1
		}(aWS, bO.iF(), a0k)
	}
}

function d7() {
	function aWh(key) {
		var aTh;
		return "undefined" == typeof URLSearchParams || (aTh = window.location.search, "string" != typeof(aTh = new URLSearchParams(aTh).get(key))) || aTh.length < 1 ? null : aTh
	}
	this.dq = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aWh("account");
				if (!value && !(value = aWh("a"))) return void bK.clear();
				return bK.clear(), t.u(8, t.tJ, new tK(1e3, {
					tL: 0,
					tH: value,
					tI: 0
				})), 1
			}()) {
			var value = aWh("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a2C = new URL(window.location.href);
		a2C.search = "";
		try {
			return history.replaceState(null, "", a2C.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aQU = function(key, value) {
		if (0 === a0.id) try {
			var a2C = new URL(window.location.href),
				gg = a2C.searchParams;
			gg.set(key, value), a2C.search = gg.toString(), history.replaceState(null, "", a2C.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cm() {
	var aWj, g;
	this.dh = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bN.fZ(32768 * aB, 100);
		this.a5k(0)
	}, this.value = function(gg) {
		return g[gg]
	}, this.aN1 = function() {
		return bN.fZ(aWj - 1, 2)
	}, this.a5k = function(aMf) {
		aWj = 2 * aMf % 32768 + 1
	}, this.random = function() {
		return aWj = 167 * aWj % 32768
	}, this.jk = function(my) {
		return bN.fZ(my * this.random(), 32768)
	}, this.kL = function(gg) {
		return 0 !== gg && this.random() < this.value(gg)
	}, this.j6 = function(fR, fS) {
		return fR + this.jk(fS - fR)
	}
}

function d3() {
	this.qL = new aWk, this.a5u = new aWl, this.aKI = new aWm, this.dh = function() {
		aD.hH || this.qL.dh()
	}, this.eb = function() {
		aD.hH || (this.qL.eb(), 3 !== t.tJ) || bh.kQ() % 15 != 5 && 2 !== aD.a18 || t.a2O().aTi()
	}, this.aTl = function() {
		var aWo = 0 !== aD.a18,
			aWp = aD.a5g;
		aWo || aa.aHY(), aD.a5e.a63(), aD.data.canvas = null, b0.y.close(b0.y.a2S, 3257), b0.y.a2S = 0, aD.data.isReplay = 1, aD.a5i(), aWo && (aD.a5g = aWp)
	}, this.aTk = function(qi) {
		var aB = qi.indexOf("=");
		return 0 <= aB ? qi.substring(aB + 1) : qi
	}, this.aTj = function(qi) {
		return qi
	}
}

function aWk() {
	this.aWq = null, this.aWr = null, this.aWs = null, this.aWt = null, this.aWu = null, this.aWv = null, this.a5t = "";
	var aWw = 0;
	this.dh = function() {
		this.aWq = [], this.aWr = [], this.aWs = [], this.aWt = [], this.aWu = [0], this.aWv = [0], aWw = 0, this.a5t = ""
	}, this.qM = function(id, fr, ft, fv) {
		aD.hH || 2 === aD.a18 || (0 === this.aWu[aWw] && (this.aWv[aWw] ? (this.aWu.push(1), this.aWv.push(0), aWw++) : this.aWu[aWw] = 1), this.aWq.push(id), this.aWr.push(fr), this.aWs.push(void 0 === ft ? 0 : ft), this.aWt.push(void 0 === fv ?
			0 : fv), this.aWv[aWw]++)
	}, this.eb = function() {
		0 === this.aWu[aWw] ? this.aWv[aWw]++ : (this.aWu.push(0), this.aWv.push(0), aWw++)
	}
}

function aWm() {
	var aWx = 0;

	function aX1(qi, id) {
		aWx || (id ? 1 === id ? aN.a7C = L(501) + ": " + qi : t.u(4, 3, new v(L(502), qi, 1)) : t.u(4, 3, new v("⚠️ " + L(500), qi, 1)))
	}
	this.xP = function(qi, aWy) {
		var iR, qt;
		return aWx = aWy, bI.tM.xH(bI.tM.xF(bI.tM.xD(qi))), aN.a7C = "", !! function() {
			if (bJ.size < 10) aX1("File Too Small");
			else {
				var aX3 = bJ.q9(12),
					r = (aX3 !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aX1(r = (r += "   Found: " + aX3) + ("   Compatible at " + b0.y.a1Y() + "/" + aX3), 1)), bJ.q9(12)),
					aX4 = bJ.q9(31);
				if (aX4 !== bJ.size) aX1("Size Error: " + aX4 + " " + bJ.size);
				else if (function(j, aX3) {
						for (var gg = bJ.aC, f8 = bJ.size, aVz = aX3, aB = 3; aB < f8; aB++) aVz = aVz + gg[aB] & 4095;
						return aVz === j || (aX1("Hash Error: " + aVz + " " + j + " " + f8), !1)
					}(r, aX3)) return 1
			}
			return
		}() && (iR = bJ, (qt = aD.data = new a5d).mapType = iR.q9(2), qt.mapProceduralIndex = iR.q9(8), qt.mapRealisticIndex = iR.q9(8), qt.mapSeed = iR.q9(14), qt.mapName = iR.aX6(5), 2 === qt.mapType && iR.aX7(), qt.passableWater = iR.q9(
			1), qt.passableMountains = iR.q9(1), qt.playerCount = iR.q9(10), qt.humanCount = iR.q9(10), qt.selectedPlayer = iR.q9(9), qt.gameMode = iR.q9(1), qt.playerMode = iR.q9(2), qt.battleRoyaleMode = iR.q9(2), qt.numberTeams = iR.q9(4),
			qt.isZombieMode = iR.q9(1), qt.isContest = iR.q9(1), qt.isReplay = iR.q9(1), qt.elo = iR.aX8(2, 14, 2), qt.colorsType = iR.q9(1), qt.colorsPersonalized = iR.q9(1), qt.colorsData = iR.aX8(10, 18, 512), qt.selectableColor = iR.q9(
			1), qt.teamPlayerCount = iR.aX8(4, 10, 9), qt.neutralBots = iR.q9(1), qt.botDifficultyType = iR.q9(2), qt.botDifficultyValue = iR.q9(4), qt.botDifficultyTeam = iR.aX8(4, 4, 9), qt.botDifficultyData = iR.aX8(10, 4, 512), qt
			.spawningType = iR.q9(2), qt.spawningSeed = iR.q9(14), qt.spawningData = iR.aX8(11, 12, 1024), qt.selectableSpawn = iR.q9(1), qt.playerNamesType = iR.q9(2), qt.playerNamesData = iR.aX9(10, 5, 512), qt.selectableName = iR.q9(1), qt
			.aIncomeType = iR.q9(2), qt.aIncomeValue = iR.q9(8), qt.aIncomeData = iR.aX8(10, 8, 512), qt.tIncomeType = iR.q9(2), qt.tIncomeValue = iR.q9(8), qt.tIncomeData = iR.aX8(10, 8, 512), qt.iIncomeType = iR.q9(2), qt.iIncomeValue = iR
			.q9(8), qt.iIncomeData = iR.aX8(10, 8, 512), qt.sResourcesType = iR.q9(2), qt.sResourcesValue = iR.q9(11), qt.sResourcesData = iR.aX8(10, 11, 512), qt.a61 = iR.aX8(10, 30, 0), !! function() {
				var iR = bJ,
					xQ = iR.q9(5),
					aXA = iR.q9(30),
					aXB = iR.q9(30);
				if (aXA + aXB > 8 * iR.size) return void aX1("Corrupted File");
				return function(f8) {
						var aXE = new Uint8Array(f8),
							aXF = new Uint16Array(f8),
							aXG = new Uint32Array(f8),
							aXH = new Uint32Array(f8);
						bB.qL.aWq = aXE, bB.qL.aWr = aXF, bB.qL.aWs = aXG, bB.qL.aWt = aXH;
						for (var aB = 0; aB < f8; aB++) {
							var id = bJ.q9(4);
							aXE[aB] = id, aXF[aB] = bJ.q9(9), 0 === id ? aXG[aB] = bJ.q9(22) : 1 === id ? (aXG[aB] = bJ.q9(10), aXH[aB] = bJ.q9(10)) : 2 === id ? (aXG[aB] = bJ.q9(10), aXH[aB] = bJ.q9(9)) : 3 === id ? (aXG[aB] = bJ.q9(10),
								aXH[aB] = bJ.q9(27)) : 4 === id ? (aXG[aB] = bJ.q9(10), aXH[aB] = bJ.q9(16)) : 5 === id || 6 === id ? aXG[aB] = bJ.q9(10) : 7 === id ? aXG[aB] = bJ.q9(1) : 10 === id && (aXG[aB] = bJ.q9(20), aXH[aB] = bJ
								.q9(22))
						}
					}(aXA),
					function(f8, xQ) {
						var aWu = new Uint8Array(f8),
							aWv = new Array(f8);
						aWv.fill(0), bB.qL.aWu = aWu, bB.qL.aWv = aWv;
						for (var aB = 0; aB < f8; aB++) aWu[aB] = bJ.q9(1), aWv[aB] = bJ.q9(xQ)
					}(aXB, xQ), 1
			}()) && (bJ.eF < 8 * bJ.size - 13 || bJ.eF > 8 * bJ.size ? (aX1("Out Of Bounds Error: " + bJ.eF + " " + 8 * bJ.size), !1) : (bB.qL.a5t = qi, 2 !== aD.data.mapType || (aX1("Load base64 image...", 2), aWy)))
	}, this.aKJ = function(aJL, aX2) {
		var a40 = document.createElement("canvas"),
			iA = a40.getContext("2d");
		if (a40.width = aJL.width, a40.height = aJL.height, iA.drawImage(aJL, 0, 0), aD.data.canvas = a40, aWx || aX2) return aD.a18 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		bB.aTl()
	}
}

function aWl() {
	this.a0a = function() {
		var xQ = function() {
				for (var aWv = bB.qL.aWv, f8 = aWv.length, max = 0, aB = 0; aB < f8; aB++) max = Math.max(max, aWv[aB]);
				return xX(Math.max(max, 1))
			}(),
			i = (qt = aD.data, (i = bG).dh(), i.a8(12, l.rVersion), i.eF += 43, i.a8(2, qt.mapType), i.a8(8, qt.mapProceduralIndex), i.a8(8, qt.mapRealisticIndex), i.a8(14, qt.mapSeed), i.aXO(qt.mapName, 5), 2 === qt.mapType && i.aXP(qt.canvas),
				i.a8(1, qt.passableWater), i.a8(1, qt.passableMountains), i.a8(10, qt.playerCount), i.a8(10, qt.humanCount), i.a8(9, qt.selectedPlayer), i.a8(1, qt.gameMode), i.a8(2, qt.playerMode), i.a8(2, qt.battleRoyaleMode), i.a8(4, qt
					.numberTeams), i.a8(1, qt.isZombieMode), i.a8(1, qt.isContest), i.a8(1, qt.isReplay), i.dn(qt.elo, 2, 14), i.a8(1, qt.colorsType), i.a8(1, qt.colorsPersonalized), i.dn(qt.colorsData, 10, 18), i.a8(1, qt.selectableColor), i.dn(
					qt.teamPlayerCount, 4, 10), i.a8(1, qt.neutralBots), i.a8(2, qt.botDifficultyType), i.a8(4, qt.botDifficultyValue), i.dn(qt.botDifficultyTeam, 4, 4), i.dn(qt.botDifficultyData, 10, 4), i.a8(2, qt.spawningType), i.a8(14, qt
					.spawningSeed), i.dn(qt.spawningData, 11, 12), i.a8(1, qt.selectableSpawn), i.a8(2, qt.playerNamesType), i.aXQ(qt.playerNamesData, 10, 5), i.a8(1, qt.selectableName), i.a8(2, qt.aIncomeType), i.a8(8, qt.aIncomeValue), i.dn(qt
					.aIncomeData, 10, 8), i.a8(2, qt.tIncomeType), i.a8(8, qt.tIncomeValue), i.dn(qt.tIncomeData, 10, 8), i.a8(2, qt.iIncomeType), i.a8(8, qt.iIncomeValue), i.dn(qt.iIncomeData, 10, 8), i.a8(2, qt.sResourcesType), i.a8(11, qt
					.sResourcesValue), i.dn(qt.sResourcesData, 10, 11), i.dn(qt.a61, 10, 30), ! function(xQ) {
					var i = bG,
						aWq = bB.qL.aWq,
						fr = bB.qL.aWr,
						ft = bB.qL.aWs,
						fv = bB.qL.aWt,
						f8 = aWq.length;
					i.a8(5, xQ), i.a8(30, f8), i.a8(30, bB.qL.aWv.length);
					for (var aB = 0; aB < f8; aB++) {
						var eg = aWq[aB];
						i.a8(4, eg), i.a8(9, fr[aB]), 0 === eg ? i.a8(22, ft[aB]) : 1 === eg ? (i.a8(10, ft[aB]), i.a8(10, fv[aB])) : 2 === eg ? (i.a8(10, ft[aB]), i.a8(9, fv[aB])) : 3 === eg ? (i.a8(10, ft[aB]), i.a8(27, fv[aB])) : 4 === eg ? (i
							.a8(10, ft[aB]), i.a8(16, fv[aB])) : 5 === eg || 6 === eg ? i.a8(10, ft[aB]) : 7 === eg ? i.a8(1, ft[aB]) : 10 === eg && (i.a8(20, ft[aB]), i.a8(22, fv[aB]))
					}
				}(xQ), ! function(xQ) {
					for (var i = bG, aWu = bB.qL.aWu, aWv = bB.qL.aWv, f8 = aWu.length, aB = 0; aB < f8; aB++) i.a8(1, aWu[aB]), i.a8(xQ, aWv[aB])
				}(xQ), bG.eF),
			qt = bN.fZ(i - 1, 6) + 1,
			xQ = (bF.aVU(6 * qt) !== bG.g.length && bG.g.push(0), ! function() {
				var i = bG;
				i.eF = 24, i.a8(31, i.g.length), i.eF = 12, i.a8(12, function() {
					for (var g = bG.g, f8 = g.length, aVz = l.rVersion, aB = 3; aB < f8; aB++) aVz = aVz + g[aB] & 4095;
					return aVz
				}())
			}(), bJ.dh(bG.g), bH.tM.tN(bH.tM.tO(qt)));
		return bJ.uk(), bG.dh(), xQ
	}
}

function cr() {
	var eg, bw = !1,
		aXS = !1,
		aXT = -1e4,
		aXU = -1,
		aXV = 0;

	function resize(aXZ) {
		eg = 0, ab.tl() && (aXX(aXZ) || bw) && (bw = !1, be.resize(), bY.aD4.resize(), aY.dh(), ba.dh(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a18 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bE.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), bg.resize(), af.resize(), aX.resize(), bj.resize(), aS.aAD()) : (aa.aHa(), aa.aHb()), bh.dp = !0)
	}

	function aXW(fa) {
		return fa && 128 < fa ? Math.floor(fa) : 128
	}

	function aXX(aXZ) {
		var i, j, aXb, tQ, a9b;
		if (!(0 < h.sy)) return tQ = aXW(document.documentElement.clientWidth), a9b = aXW(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tQ, j = a9b, aXb = 0 !== a0.id || i < j ?
			700 : 1200, aXb = Math.min(aXb / ((i + j) / 2), 1), aXb = 0 === bl.eT.data[1].value ? 2 * aXb / 3 : Math.min(aXb + (bl.eT.data[1].value - 1) * (1 - aXb) / 2, 1), h.k = (window.devicePixelRatio || 1) * aXb, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aXZ && !aXS ? (aXS = !0, t.removeChild(document.body, a2f)) : aXS && (aXS = !1, document.body.appendChild(a2f)), i = Math.floor(.5 + tQ * h.k), j = Math.floor(.5 + a9b * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCg(i, j), h.max = a7R(i, j), h.iI = bN.fZ(i + j, 2), h.vc = i / j, a2f.width = i, a2f.height = j, a2f.style.width = tQ + "px", a2f.style.height = a9b + "px", aXU = bh.eW + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iI = 0, this.vc = 1, this.k = 1, this.sy = 0, this.di = function() {
		this.i = aXW(document.documentElement.clientWidth) + 2, this.j = aXW(document.documentElement.clientHeight) + 2
	}, this.dh = function() {
		eg = 1, a2f = document.getElementById("canvasA"), 2 === a0.id && (a2f.style.webkitUserSelect = "none"), (vg = a2f.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aXX(0)
	}, this.eb = function() {
		50 <= ++eg && resize(0), -1 === aXU || bh.eW < aXU || (aXU = -1, 2e3 * ++aXV >= bh.eW + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.ds = function(ji) {
		bw = !0, resize(ji)
	}, this.a3K = function() {
		aXT + 1e3 > bh.eW || (aXT = bh.eW, resize(0))
	}
}

function dL() {
	this.aVe = new aXd, this.a1y = new aXe, this.aVv = new aXf
}

function aXf() {
	var aXg = aXh(),
		aXi = aXj(),
		aXk = aXl();
	this.q9 = function() {
		return 123
	}, this.a0a = function() {
		bI.tM.xL(bl.eT.data[183].value, 15), bF.a8(14, aXg), bF.a8(7, aXi), bF.a8(12, aXk)
	}
}

function aXh() {
	for (var eg = document.createElement("canvas"), eg = (eg.width = 24, eg.height = 24, eg.getContext("2d", {
			alpha: !1
		})), fB = (eg.fillStyle = "rgb(0,0,0)", eg.fillRect(0, 0, 24, 24), eg.font = "22px system-ui", eg.textBaseline = "middle", eg.textAlign = "center", eg.fillStyle = "rgb(255,255,255)", eg.fillText("Q", 12, 12), eg.getImageData(0, 0, 24, 24)
			.data), f8 = fB.length, lO = 0, aB = 0; aB < f8; aB += 4) lO += fB[aB];
	return 16383 & lO
}

function aXj() {
	var fB = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fB + .5) / 15))
}

function aXl() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aXe() {
	this.a1z = function() {
		for (var gg, f8 = al.kz, a0w = al.l4, a1j = ag.a1j, a9P = this.aJ4(), aB = 0; aB < f8; aB++) gg = a0w[aB], bC.gU.jq(gg) || (a1j[gg] = a9P);
		var qQ = ag.qQ,
			jW = ag.jW,
			jX = ag.jX,
			a1h = ag.a1h,
			f8 = aD.kT;
		for (aB = 0; aB < f8; aB++)(0 === a1h[aB] || jX[aB] < 1 || 2 * qQ[aB] > 3 * (jW[aB] + jX[aB])) && (a1j[aB] = 0);
		var a1w = 0;
		for (aB = 0; aB < f8; aB++) a1w += 0 < a1j[aB];
		return a1w
	}, this.aJ4 = function() {
		return Math.min(65535, bh.kQ())
	}
}

function aXd() {
	function aXp(g, fa, i0) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fa >> (aB + i0) % 30 & 1)) % 256
	}
	this.eb = function(aXm, aXn) {
		var g = new Uint8Array(256);
		return function(g, aXm, aXn) {
				var aB, aXr = 3 + (4 + aXm) % 32768,
					aXs = 12 + aXn % 32768,
					aXt = 17 + ((aXm & aXn) + (aXm | aXn) + aXm) % 32768;
				for (aB = 0; aB < 256; aB++) aXr = 1 + aXr * aXs % aXt, g[aB] = aXr % 256
			}(g, aXm, aXn), aXp(g, aXm, 2), aXp(g, aXn, 7),
			function(g) {
				var aB, fa, eF = 0;
				for (aB = 0; aB < 3e4; aB++) fa = g[eF], g[eF] = (fa + aB + g[(eF + aB) % 256]) % 256, eF = (fa + aB + eF + (fa & eF)) % 256
			}(g),
			function(g) {
				var aB, a9b = 1,
					u9 = 1;
				for (aB = 0; aB < 256; aB += 2) a9b = (1 + a9b) * (g[aB] + 1) % 1073741824, u9 = (1 + u9) * (g[aB + 1] + 1) % 1073741824;
				return [a9b, u9]
			}(g)
	}, this.aVf = function(aXu, aXv, aXw, result) {
		for (var gb = 1 << aXu, aB = 0; aB < gb; aB++)
			if (this.aXx(aB, aXv, aXw) === result) return aB;
		return 0
	}, this.aXx = function(aXy, aXv, aXw) {
		for (var yS = aXv + aXy, yb = aXw + aXy, fa = yS + yb & 2147483647, fR = 1; fR <= 16; fR++) fa = (fa = (fa ^ fa >> fR) >>> 1 + (3 & yS)) * (7 + (1023 & (yS | yb))) & 1073741823, yb >>= 1 + (1 & (yS >>= 1 + (1 & (fa += 65535 & yb))));
		return fa &= 1073741823
	}
}

function co() {
	var aXz, aY0, iM, aY1;
	this.dh = function() {
		var aB, fF, fH, aVt, aY2, i, j, zH, i7, xh, fa, gg, fO, fR, aY5;
		if (function() {
				if (iM = !0, aY1 = "rgb(" + bU.xf[0] + "," + bU.xf[1] + "," + bU.xf[2] + ")", bU.aMo(bU.eo)) return 1;
				return iM = !1, 0
			}()) aY0 = null;
		else {
			for (aXz = bN.fZ(96, 4), aY2 = 1 === bU.eo ? (aVt = 0, 160) : (aVt = 128, 32), aY1 = "rgb(" + aVt + "," + aVt + "," + aVt + ")", aY0 = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aY0[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bU.fJ : aXz, j = aB % 2 == 0 ? aXz : bU.fK + 2 * aXz, aY0[aB].width = i, aY0[aB].height = j, xh = (i7 = (zH = aY0[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fH = aXz - 1; 0 <= fH; fH--)
						for (fa = aY2 + Math.floor((fH + 1) * (aVt - aY2) / (aXz + 1)), fF = i - 1; 0 <= fF; fF--) xh[gg = 4 * ((0 === aB ? aXz - fH - 1 : fH) * i + fF)] = fa, xh[gg + 1] = fa, xh[gg + 2] = fa, xh[gg + 3] = 255;
				else {
					for (fF = aXz - 1; 0 <= fF; fF--)
						for (fa = aY2 + Math.floor((fF + 1) * (aVt - aY2) / (aXz + 1)), fH = j - 1 - aXz; aXz <= fH; fH--) xh[gg = 4 * (fH * i + (3 === aB ? aXz - fF - 1 : fF))] = fa, xh[gg + 1] = fa, xh[gg + 2] = fa, xh[gg + 3] = 255;
					for (fR = 1; 0 <= fR; fR--)
						for (fF = aXz - 1; 0 <= fF; fF--)
							for (fH = aXz - 1; 0 <= fH; fH--) fO = (Math.pow(fF * fF + fH * fH, .5) + 1) / (aXz + 1), fa = aY2 + Math.floor((1 < fO ? 1 : fO) * (aVt - aY2)), xh[gg = 4 * ((0 === fR ? aXz - fH - 1 : fH + fR * (j - aXz)) * i + (
								1 === aB ? fF : aXz - fF - 1))] = fa, xh[gg + 1] = fa, xh[gg + 2] = fa, xh[gg + 3] = 255
				}
				zH.putImageData(i7, 0, 0)
			}
			aY5 = aY2, bU.xa.fillStyle = "rgb(" + aY5 + "," + aY5 + "," + aY5 + ")", bU.xa.fillRect(0, 0, bU.fJ, 1), bU.xa.fillRect(0, bU.fK - 1, bU.fJ, 1), bU.xa.fillRect(0, 0, 1, bU.fK), bU.xa.fillRect(bU.fJ - 1, 0, 1, bU.fK)
		}
	}, this.zB = function() {
		var fR = iM ? 0 : -aXz;
		aOZ(fR, fR, bU.fJ - 2 * fR, bU.fK - 2 * fR, bc.aY6, bc.aY7, bc.aY8, bc.aY9) || (vg.fillStyle = aY1, vg.fillRect(0, 0, h.i, h.j))
	}, this.vf = function() {
		iM || (aOY(0, -aXz, bU.fJ, aXz, bc.aY6, bc.aY7, bc.aY8, bc.aY9) && vg.drawImage(aY0[0], bc.aYA, bc.aYB - aXz), aOY(bU.fJ, -aXz, aXz, bU.fK + 2 * aXz, bc.aY6, bc.aY7, bc.aY8, bc.aY9) && vg.drawImage(aY0[1], bc.aYA + bU.fJ, bc.aYB - aXz),
			aOY(0, bU.fK, bU.fJ, aXz, bc.aY6, bc.aY7, bc.aY8, bc.aY9) && vg.drawImage(aY0[2], bc.aYA, bc.aYB + bU.fK), aOY(-aXz, -aXz, aXz, bU.fK + 2 * aXz, bc.aY6, bc.aY7, bc.aY8, bc.aY9) && vg.drawImage(aY0[3], bc.aYA - aXz, bc.aYB - aXz))
	}
}

function dA() {
	this.aJ2 = new aYC, this.zE = new aYD, this.y = new aYE, this.iv = new aYF, this.aY5 = new aYG, this.mO = new aYH, this.kH = new aYI, this.lG = new aYJ, this.aYK = new aYL, this.aYM = new aYN, this.mZ = new aYO, this.hi = new aYP, this.lp =
		new aYQ, this.lI = new aYR, this.hl = new aYS, this.mS = new aYT, this.qY = new aYU, this.dh = function() {
			this.lp.dh(), this.zE.dh(), this.y.dh(), this.iv.dh(), this.aY5.dh(), this.aYM.dh(), this.mS.dh()
		}, this.vf = function() {
			this.aYM.vf(), this.zE.vf()
		}
}

function aYI() {
	this.eb = function(player) {
		return !!bP.mZ.ma(player) && !(bP.y.kX[player] >= Math.max(3 * ao.performance.lh, aE.kh[aE.hr[player]]) || !bC.gU.mb(player, aE.kf[aE.hr[player]], 32, 0)) && (aW.aCT() ? function(player) {
			var aYX = bP.lI.aCW(),
				f8 = aYX.length;
			if (0 === f8) return !1;
			aYX = aYX[ay.jk(f8)], f8 = bP.y.mM[aYX];
			if (bP.mS.mT(player, f8)) return !1;
			return !! function(player, mV) {
				var mV = bO.it(bP.y.mY[mV]),
					hN = bO.fG(mV),
					mV = bO.fI(mV),
					nU = ag.j1[player],
					nV = ag.j3[player],
					nh = ag.j2[player],
					player = ag.j4[player],
					nh = Math.max(hN - nh, nU - hN),
					nU = Math.max(mV - player, nV - mV);
				return nh < 100 && nU < 100
			}(player, aYX) && !!bP.hl.qX(player, f8, 1) && (bC.gU.md(player), bP.y.me(player), !0)
		}(player) : !!(ao.jK.eb(player) || ao.j9.eb(player) || ao.jB.eb(player)) && (function(player) {
			bQ.fk[1] = 4, bC.gU.md(player), bP.y.me(player)
		}(player), !0))
	}
}

function aYT() {
	var aYa = 0,
		aYb = null;
	this.dh = function() {
		null === aYb && (aYb = new Uint16Array(2 * bP.y.kh)), aYa = 0
	}, this.ef = function(aYc, mS) {
		var aYd = aYb;
		aYd[aYa++] = aYc, aYd[aYa++] = mS
	}, this.mT = function(player, mR) {
		for (var aYd = aYb, f8 = aYa, aB = 0; aB < f8; aB += 2)
			if (aYd[aB] === mR && bP.lI.aYe(aYd[aB + 1]) && player === bP.y.mN[bQ.fk[2]] >> 3) return !0;
		return !1
	}, this.aYf = function(aYg) {
		var mO = bP.y.mK[aYg];
		if (!(mO < 64)) {
			for (var mR = bP.y.mM[aYg], aYd = aYb, f8 = aYa, aB = f8 - 2; 0 <= aB; aB -= 2)
				if (aYd[aB] === mR) {
					{
						aYl = void 0;
						var aYl = aYd[aB + 1];
						bP.lI.aYe(aYl) && bP.mS.aYt(bQ.fk[2])
					}
					aYd[aB] = aYd[f8 - 2], aYd[aB + 1] = aYd[f8 - 1], f8 -= 2
				} aYa = f8
		}
	}, this.aYi = function(aYj, aYk) {
		for (var aYl = bP.y.mM[aYj], mR = -1, aYd = aYb, f8 = aYa, aB = 1; aB < f8; aB += 2)
			if (aYd[aB] === aYl) {
				mR = aYd[aB - 1];
				break
			} if (-1 === mR) return !1;
		if (!bP.lI.aYe(mR)) return !1;
		var aYg = bQ.fk[2],
			lo = bP.y.mL[aYg];
		if (aYk === lo[lo.length - 1]) bP.y.mL[aYj] = bP.lp.aYm(bP.y.mL[aYj], bP.lp.lx(lo));
		else {
			var aYn = bP.lI.aYo(lo, aYk);
			if (-1 === aYn) return !1;
			var aYp = bP.y.mX[aYg];
			aYn === aYp ? (aYg = bO.it(bP.y.mY[aYg]), bP.y.mL[aYj] = bP.lp.aYr(bP.y.mL[aYj], lo, aYn, aYk, bO.iY(lo[aYn], aYk) > bO.iY(lo[aYn], aYg))) : bP.y.mL[aYj] = bP.lp.aYr(bP.y.mL[aYj], lo, aYn, aYk, aYp < aYn)
		}
		return !0
	}, this.aYt = function(aYu) {
		var lo, lO = bP.y,
			mO = lO.mK[aYu];
		return mO % 64 != 5 && (lo = lO.mL[aYu], lO.aYv[aYu] = 65535 - lO.aYv[aYu], lO.mX[aYu] = lo.length - lO.mX[aYu] - 2, lO.mL[aYu] = bP.lp.lx(lo), lO.mK[aYu] = mO - mO % 64 + 5, !0)
	}
}

function aYO() {
	this.ma = function(player) {
		return !!aD.data.passableWater && bP.y.mJ !== bP.y.kh && bP.y.kX[player] !== bP.y.aYw && 0 !== ag.gp[player].length
	}, this.qT = function(aWS) {
		var mO = bQ.fk[1];
		return !(4 <= mO || !bP.lI.aYx(bO.ey(aWS))) && ac.f3(bO.ey(bO.ix(aWS, mO)))
	}
}

function aYC() {
	this.aJ3 = function(player) {
		for (var a8p = bP.y.a8p, td = player << 3, aB = td + bP.y.kX[player] - 1; td <= aB; aB--) this.aYy(a8p[aB])
	}, this.aYy = function(aYz) {
		var y = bP.y,
			aZ0 = y.mJ - 1,
			aZ1 = y.mN[aYz],
			aZ2 = y.aZ3[aYz],
			aZ4 = y.mY[aYz];
		y.mJ = aZ0, y.mN[aYz] = y.mN[aZ0], y.mY[aYz] = y.mY[aZ0], y.aYv[aYz] = y.aYv[aZ0], y.a7i[aYz] = y.a7i[aZ0], y.aZ3[aYz] = y.aZ3[aZ0], y.mM[aYz] = y.mM[aZ0], y.mK[aYz] = y.mK[aZ0], y.aZ5[aYz] = y.aZ5[aZ0], y.mL[aYz] = y.mL[aZ0], y.mX[aYz] =
			y.mX[aZ0], y.a8p[y.mN[aYz]] = aYz,
			function(aWR) {
				var player = aWR >> 3,
					y = bP.y,
					f8 = y.kX[player] - 1,
					aZ8 = (player << 3) + f8;
				y.kX[player] = f8, aZ8 !== aWR && (y.a8p[aWR] = y.a8p[aZ8], y.mN[y.a8p[aWR]] = aWR)
			}(aZ1), bP.iv.iv[bO.iu(y.mY[aYz])][y.aZ3[aYz]] = aYz, aZ0 = bO.iu(aZ4), aZ1 = aZ2, aZ0 = bP.iv.iv[aZ0], y = aZ0.pop(), aZ1 !== aZ0.length && (aZ0[aZ1] = y, bP.y.aZ3[y] = aZ1)
	}
}

function aYD() {
	var aZA, aZB = 8,
		aZC = null;

	function aZH(xh, eu, eF) {
		eu *= 4;
		xh[eu] = 255, xh[1 + eu] = 255, xh[2 + eu] = eF, xh[3 + eu] = 255
	}

	function aZJ(iA, aY1) {
		var fF, fH, iS, eu, aZL, aZM, i4 = aZB,
			i7 = bC.r1.getImageData(iA, i4, i4),
			xh = i7.data,
			lO = (i4 >> 1) - .5,
			aZO = bC.r9.a3Y(aY1, .5);
		for (bC.r9.a3a(aY1, aZO, 300) || bC.r9.a3c(aY1, 100), fH = 0; fH < i4; fH++)
			for (fF = 0; fF < i4; fF++) aZM = (i4 - 1.5) * (i4 - 1.5) / 4, xh[eu = 4 * (fH * i4 + fF)] = (aZL = (iS = (iS = fF - lO) * iS + (iS = fH - lO) * iS) <= (i4 - 4.5) * (i4 - 4.5) / 4 ? aZO : aY1)[0], xh[1 + eu] = aZL[1], xh[2 + eu] = aZL[2],
				xh[3 + eu] = aZM < iS ? 0 : 255;
		iA.putImageData(i7, 0, 0)
	}
	this.dh = function() {
		var eF, i4, a40, iA, i7, xh;
		(aZA = aZA || new Array(aD.f5)).fill(null), eF = 255, i4 = aZB + 4, a40 = bC.r1.xW(i4, i4), iA = bC.r1.getContext(a40, !0), i7 = bC.r1.getImageData(iA, i4, i4), aZH(xh = i7.data, i4 + 1, eF), aZH(xh, i4 + 2, eF), aZH(xh, 2 * i4 + 1, eF),
			aZH(xh, 2 * i4 - 3, eF), aZH(xh, 2 * i4 - 2, eF), aZH(xh, 3 * i4 - 2, eF), aZH(xh, i4 * (i4 - 3) + 1, eF), aZH(xh, i4 * (i4 - 2) + 1, eF), aZH(xh, i4 * (i4 - 2) + 2, eF), aZH(xh, i4 * (i4 - 2) - 2, eF), aZH(xh, i4 * (i4 - 1) - 3, eF),
			aZH(xh, i4 * (i4 - 1) - 2, eF), iA.putImageData(i7, 0, 0), aZC = a40,
			function() {
				if (aD.i2)
					for (var a40 = new Array(bi.kq.length), f8 = aD.f5, aZF = aZA, aBo = bi.aBo, aB = 0; aB < f8; aB++) {
						var a6S = aBo[aB];
						a40[a6S] || (a40[a6S] = function(a6S) {
							var a40 = bC.r1.xW(aZB, aZB),
								iA = bC.r1.getContext(a40, !0),
								g = bQ.fh;
							return g.set(bi.aZK[a6S]), aZJ(iA, g), a40
						}(a6S)), aZF[aB] = a40[a6S]
					}
			}()
	}, this.vf = function() {
		var aB, player, aZP, aOh, hr, iR, aZR, aZT, aZU, mY = bP.y.mY,
			mN = bP.y.mN,
			a7i = bP.y.a7i,
			aZ5 = bP.y.aZ5,
			aZV = aZA,
			aZW = aD.es,
			f8 = bP.y.mJ,
			aZX = h.i,
			aZY = h.j,
			aZZ = bU.fJ << 4,
			ex = iJ,
			em = ex / aZB,
			nU = il / ex,
			nV = im / ex,
			iS = (aZX + il) / ex - nU,
			iV = (aZY + im) / ex - nV,
			iA = vg;
		for (iA.imageSmoothingEnabled = ex < 9, bC.r1.textAlign(iA, 1), bC.r1.textBaseline(iA, 1), aB = 0; aB < f8; aB++) player = mN[aB] >> 3, hr = a7i[aB], aZP = .9 + .1 * Math.log10(hr), aOh = (iR = mY[aB]) % aZZ / 16 - aZP, iR = aZY * (Math
			.floor(iR / aZZ) / 16 - aZP - nV) / iV, aZR = -2 * (aZU = ex * aZP) * (1 + (aZT = +(player === aZW)) / 8), aZT = aZT * aZU / 4, (aZU = aZX * (aOh - nU) / iS) < aZR || iR < aZR || aZX + aZT < aZU || aZY + aZT < iR || (aOh = 2 *
			aZP * em, aZR = aZP * ex, null === (aZT = aZV[player]) && (aZV[player] = aZT = function(player) {
				var a40 = bC.r1.xW(aZB, aZB);
				return aZJ(bC.r1.getContext(a40, !0), ac.a8Q(player)), a40
			}(player)), player === aZW && (iA.setTransform(aOh, 0, 0, aOh, aZU - 2 * aOh, iR - 2 * aOh), iA.drawImage(aZC, 0, 0)), iA.setTransform(aOh, 0, 0, aOh, aZU, iR), iA.drawImage(aZT, 0, 0), (aZP = Math.floor(function(hr) {
				if (hr < 1e3) return .42;
				if (hr < 1e4) return .34;
				if (hr < 1e6) return .26;
				if (hr < 1e8) return .19;
				return .15
			}(hr) * aZR)) < 6) || (iA.setTransform(1, 0, 0, 1, 0, 0), iA.fillStyle = aZ5[aB] ? bD.oc : bD.o4, iA.font = bC.r1.sq(1, aZP), iA.fillText(bC.s0.a0P(hr), aZU + aZR, iR + aZR + .1 * aZP));
		iA.imageSmoothingEnabled = !1, iA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aYN() {
	var aZc;
	this.dh = function() {
		if (aD.i2) {
			var hy = 1 - aD.yK;
			aZc = new Array(bi.kq.length);
			for (var aB = aD.yJ - 1; 0 <= aB; aB--) {
				var a6S = bi.kq[aB + hy];
				aZc[a6S] = bR.y.aZe(20, bi.aZf[a6S])
			}
			9 === aD.kl && (aZc[1] = bR.y.aZe(20, bi.aZf[1]))
		} else aZc = [bR.y.aZe(20, bi.aZf[7])]
	}, this.vf = function() {
		var no = iJ;
		if (!(5 <= no)) {
			var aZX = h.i,
				aZY = h.j,
				nU = il / no,
				nV = im / no,
				nh = (aZX + il) / no,
				ni = (aZY + im) / no,
				gh = -20 * no,
				aZh = .5 * gh,
				aZZ = bU.fJ << 4,
				f8 = bP.y.mJ,
				mY = bP.y.mY,
				mN = bP.y.mN,
				aBo = bi.aBo,
				a40 = aZc,
				iA = vg;
			3 < no && (iA.globalAlpha = .5 * (5 - no));
			for (var aB = 0; aB < f8; aB++) {
				var iR = mY[aB],
					fF = aZX * (iR % aZZ / 16 - nU) / (nh - nU) + aZh,
					iR = aZY * (Math.floor(iR / aZZ) / 16 - nV) / (ni - nV) + aZh;
				aZX < fF || aZY < iR || fF < gh || iR < gh || (iA.setTransform(no, 0, 0, no, fF, iR), iA.drawImage(a40[aBo[mN[aB] >> 3]], 0, 0))
			}
			iA.globalAlpha = 1, iA.setTransform(no, 0, 0, no, 0, 0)
		}
	}
}

function aYR() {
	this.aZk = function(player, id) {
		for (var aZl = ag.gp[player], f8 = aZl.length, aB = 0; aB < f8; aB++)
			if (bO.iK(aZl[aB], id)) return !0;
		return !1
	}, this.aZm = function(player, eu) {
		for (var ia, aZn, em, aZl = ag.gp[player], f8 = aZl.length, i = bU.fJ, aZp = bO.fG(eu), aZq = bO.fI(eu), fE = -1, min = bU.fJ * bU.fJ + bU.fK * bU.fK, id = ac.eq(bO.ey(eu)), aB = 0; aB < f8; aB++)(aZn = (aZn = aZp - (ia = (em = aZl[
			aB]) >> 2) % i) * aZn + (aZn = aZq - ~~((.5 + ia) / i)) * aZn) < min && bO.iK(em, id) && (min = aZn, fE = ia);
		return fE
	}, this.lJ = function(iZ, ia) {
		for (var id = ac.eq(bO.ey(ia)), iL = bO.iD, em = bO.ey(iZ), aZr = -1, aB = 0; aB < 4; aB++) {
			var ex = em + iL[aB];
			ac.iM(ex) && ac.eq(ex) === id && (-1 === aZr || bO.ib(bO.ew(ex), ia) < bO.ib(aZr, ia)) && (aZr = bO.ew(ex))
		}
		return aZr
	}, this.ls = function(player, eu) {
		for (var iL = bO.iD, em = bO.ey(eu), aB = 0; aB < 4; aB++) {
			var ex = em + iL[aB];
			if (ac.gi(ex) && ac.z9(player, ex)) return !0
		}
		return !1
	}, this.lt = function(player, eu) {
		for (var iL = bO.iD, em = bO.ey(eu), aB = 0; aB < 4; aB++) {
			var ex = em + iL[aB];
			if (ac.ez(ex)) return !0;
			if (ac.gi(ex)) {
				ex = ac.f0(ex);
				if (player !== ex && bu.f1(player, ex)) return !0
			}
		}
		return !1
	}, this.mP = function(eu) {
		for (var iL = bO.iD, em = bO.ey(eu), aB = 0; aB < 4; aB++) {
			var ex = em + iL[aB];
			if (ac.gi(ex)) {
				ex = ac.f0(ex);
				if (bC.gU.jq(ex)) return ex
			}
		}
		return -1
	}, this.aYx = function(em) {
		if (ac.iM(em))
			for (var iL = bO.iD, aB = 0; aB < 4; aB++)
				if (ac.f3(em + iL[aB])) return !0;
		return !1
	}, this.nT = function(player, id) {
		for (var td = player << 3, te = td + bP.y.kX[player], mM = bP.y.mM, a8p = bP.y.a8p, aB = td; aB < te; aB++) {
			var a8q = a8p[aB];
			if (mM[a8q] === id) return a8q
		}
		return -1
	}, this.nY = function(player) {
		return 0 === bP.y.kX[player] ? -1 : bP.y.a8p[player << 3]
	}, this.a6k = function(li, lj) {
		var f8 = bP.y.mJ;
		if (f8 < 1) return -1;
		for (var mY = bP.y.mY, aZs = 80, aRF = -1, aB = 0; aB < f8; aB++) {
			var fO = bO.iO(li, lj, mY[aB]);
			fO < aZs && (aZs = fO, aRF = aB)
		}
		return function(aB, li, lj) {
			if (aB < 0) return;
			var aZz = bP.y.mY[aB],
				aa0 = bO.iU(aZz),
				aZz = bO.iX(aZz),
				aB = 20 * (.9 + .1 * Math.log10(bP.y.a7i[aB]));
			return aB = Math.max(aB, bO.io(bC.r1.ti(.02, 1.7))), bN.aOg(bO.iT(li), bO.iW(lj), aa0, aZz, aB)
		}(aRF, li, lj) ? aRF : -1
	}, this.aYe = function(nR) {
		for (var f8 = bP.y.mJ, mM = bP.y.mM, aB = 0; aB < f8; aB++)
			if (mM[aB] === nR) return bQ.fk[2] = aB, !0;
		return !1
	}, this.aIz = function(player) {
		for (var td = player << 3, te = td + bP.y.kX[player], a8p = bP.y.a8p, a7i = bP.y.a7i, hr = 0, aB = td; aB < te; aB++) hr += a7i[a8p[aB]];
		return hr
	}, this.aZu = function(player, aYu) {
		aYu = bP.y.mL[aYu];
		return this.ls(player, aYu[aYu.length - 1])
	}, this.aZv = function(iZ, ia, fO, aZw) {
		var ie = bO.fG(iZ),
			iZ = bO.fI(iZ),
			ih = bO.fG(ia),
			ia = bO.fI(ia),
			ih = (fO = Math.max(fO, 1), ih - ie),
			ia = ia - iZ,
			iS = bN.fZ(Math.abs(ih) * aZw, fO),
			aZw = bN.fZ(Math.abs(ia) * aZw, fO);
		return bO.fV(ie + Math.sign(ih) * iS, iZ + Math.sign(ia) * aZw)
	}, this.aYo = function(lo, eu) {
		for (var f8 = lo.length - 1, fF = bO.fG(eu), fH = bO.fI(eu), aB = 0; aB < f8; aB++) {
			var iZ = lo[aB],
				ia = lo[aB + 1],
				nU = bO.fG(iZ),
				iZ = bO.fI(iZ),
				nh = bO.fG(ia),
				ia = bO.fI(ia);
			if (!(fF !== nU && fF !== nh && Math.sign(fF - nU) === Math.sign(fF - nh) || fH !== iZ && fH !== ia && Math.sign(fH - iZ) === Math.sign(fH - ia))) {
				if (nU === nh || iZ === ia) return aB;
				if (Math.abs(fF - nU) === Math.abs(fH - iZ) && Math.abs(fF - nh) === Math.abs(fH - ia)) return aB
			}
		}
		return -1
	}, this.aCW = function() {
		for (var aa2 = m4[0], mN = bP.y.mN, mJ = bP.y.mJ, g = [], aB = 0; aB < mJ; aB++) bC.gU.l7(aa2, mN[aB] >> 3) && g.push(aB);
		return g
	}, this.lq = function(player, lo) {
		for (var td = player << 3, te = td + bP.y.kX[player], a8p = bP.y.a8p, mL = bP.y.mL, ha = lo[0], l6 = lo[lo.length - 1], aB = td; aB < te; aB++) {
			var gg = mL[a8p[aB]];
			if (gg[0] === ha && gg[gg.length - 1] === l6) return !0
		}
		return !1
	}
}

function aYS() {
	function aa5(player, aYu) {
		aYu = bO.it(bP.y.mY[aYu]), aYu = ac.eq(bO.ey(aYu));
		return !!bP.lI.aZk(player, aYu)
	}

	function aa3(player) {
		return bP.mZ.ma(player) && !bP.lp.lv()
	}
	this.hm = function(player, eu) {
		return !!aa3(player) && -1 !== (eu = function(player, eu) {
			for (var f8 = bP.y.mJ, mY = bP.y.mY, mN = bP.y.mN, aZs = bO.iF(), aRF = -1, aB = 0; aB < f8; aB++) {
				var fO = bO.iY(eu, bO.it(mY[aB]));
				fO < aZs && bC.gU.l7(player, mN[aB] >> 3) && (aZs = fO, aRF = aB)
			}
			return aRF
		}(player, eu)) && !!aa5(player, eu) && (bQ.fk[3] = bP.y.mM[eu], !0)
	}, this.pe = function(player, nR) {
		return !!aa3(player) && !!bP.lI.aYe(nR) && !!aa5(player, bQ.fk[2])
	}, this.qX = function(player, nR, aa6) {
		return !! function(player, nR, aa6) {
			if (aa3(player) && bP.lI.aYe(nR)) {
				nR = bQ.fk[2];
				if (bC.gU.l7(player, bP.y.mN[nR] >> 3)) {
					if (function(player, aYu) {
							return bP.lI.aZu(player, aYu) && (bQ.g[0] = bP.lp.lx(bP.y.mL[aYu]), bQ.fk[1] = 6, !0)
						}(player, nR)) return 1;
					var aYZ = bO.it(bP.y.mY[nR]),
						aaA = bP.lI.aZm(player, aYZ);
					if (-1 !== aaA) {
						aaA = bO.iY(aaA, aYZ);
						if (!(aa6 && 120 < aaA)) {
							aa6 = function(aYu, aaB, aYZ) {
								var lo = bP.y.mL[aYu],
									aYu = bP.y.mX[aYu],
									aaD = bO.iY(aYZ, lo[aYu + 1]);
								if (aaB <= aaD) return bP.lI.aZv(aYZ, lo[aYu + 1], aaD, aaB);
								for (var fO = aaB - aaD, f8 = lo.length - 1, aB = aYu + 1; aB < f8; aB++) {
									var aaE = bO.iY(lo[aB], lo[aB + 1]);
									if (fO <= aaE) return bP.lI.aZv(lo[aB], lo[aB + 1], aaE, fO);
									fO -= aaE
								}
								return lo[f8]
							}(nR, aaA, aYZ);
							if (bP.lG.qU(player, aa6, 1)) return bQ.fk[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nR, aa6) && (player = bQ.fk[2], bP.y.mK[player] = 64 + bP.y.mK[player] % 64, bP.mS.ef(nR, bP.y.mc), !0)
	}
}

function aYH() {
	function aaJ(player, hr, aaH, aYZ) {
		var jc;
		if (ac.ez(aaH)) jc = aD.f5;
		else {
			if ((jc = ac.f0(aaH)) === player) return void bf.gY(player, hr - bC.gU.gX(player, hr), 12);
			if (!bu.f1(player, jc)) return void bA.kV.pt(player, jc, hr)
		}
		ad.jo(player, jc) || ad.k7(player) ? (ag.ga[player].push(aYZ << 2), ad.ef(player, hr, jc), aF.ja(player, !0)) : bf.gY(player, hr, 12)
	}
	this.eb = function() {
		for (var mK = bP.y.mK, mY = bP.y.mY, aYv = bP.y.aYv, aB = bP.y.mJ - 1; 0 <= aB; aB--) 65535 === aYv[aB] && function(aB, aYZ, hz) {
			if (6 === hz) {
				if (bP.mS.aYi(aB, aYZ)) return bP.y.mX[aB]++, bP.y.aYv[aB] = 0, 0
			} else {
				var player = bP.y.mN[aB] >> 3,
					aB = bP.y.a7i[aB];
				bf.aaI(player), hz < 4 ? aaJ(player, aB, aYZ + bO.iC[hz] << 2, aYZ) : 4 === hz ? function(player, hr, aYZ) {
					var aB, fC, iL = bO.iD,
						ex = bO.ey(aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.ez(fC)) return aaJ(player, hr, fC, aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.gi(fC) && !ac.z9(player, fC)) return aaJ(player, hr, fC, aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.gi(fC)) return aaJ(player, hr, fC, aYZ)
				}(player, aB, aYZ) : 5 === hz && function(player, hr, aYZ) {
					var aB, fC, iL = bO.iD,
						ex = bO.ey(aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.gi(fC) && ac.z9(player, fC)) return aaJ(player, hr, fC, aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.gi(fC)) return aaJ(player, hr, fC, aYZ);
					for (aB = 0; aB < 4; aB++)
						if (fC = ex + iL[aB], ac.ez(fC)) return aaJ(player, hr, fC, aYZ)
				}(player, aB, aYZ)
			}
			return 1
		}(aB, bO.it(mY[aB]), mK[aB] % 64) && (bP.mS.aYf(aB), bP.aJ2.aYy(aB))
	}, this.aaG = function(player, eu, hz, nR, hr) {
		if (!(5 <= hz)) {
			var aZW = aD.es;
			if (bC.gU.hK(aZW) && bu.f1(player, aZW) && player !== aZW && 0 !== ag.gp[aZW].length && bC.gU.a4b(player, 5)) {
				for (var aaH, fM = !1, aB = 0; aB < 4; aB++)
					if (aaH = eu + bO.iC[aB] << 2, ac.f3(aaH) && !ac.ez(aaH) && ac.f0(aaH) === aZW) {
						fM = !0;
						break
					} fM && (aN.a7r(719, 0), hz = hr < 25e3 ? L(503) + " (" + bC.s0.a0P(hr) + ") ⛵" : L(504) + " (" + bC.s0.a0P(hr) + ") 🚢", aN.za(180, hz, 719, player, bD.ob, bD.o1, -1, !0, void 0, {
					fS: 1,
					nR: nR
				}))
			}
		}
	}
}

function aYE() {
	this.kh = 512, this.aYw = 8, this.mJ = 0, this.mc = 0, this.mN = new Uint16Array(this.kh), this.mY = new Uint32Array(this.kh), this.aYv = new Uint16Array(this.kh), this.a7i = new Uint32Array(this.kh), this.aZ3 = new Uint16Array(this.kh), this
		.mM = new Uint16Array(this.kh), this.mK = new Uint8Array(this.kh), this.aZ5 = new Uint8Array(this.kh), this.mL = new Array(this.kh), this.mX = new Uint16Array(this.kh), this.kX = new Uint8Array(aD.f5), this.a8p = new Uint16Array(this.aYw * aD
			.f5), this.dh = function() {
			this.mJ = 0, this.mc = 0, this.kX.fill(0), this.mL.fill(null)
		}, this.me = function(player) {
			var hr = bQ.ff[0],
				mO = bQ.fk[1],
				lo = bQ.g[0],
				aaM = this.mc,
				f8 = this.mJ,
				aaN = bO.is(lo[0]),
				aaO = this.kX[player],
				aaP = (player << 3) + aaO;
			this.mN[f8] = aaP, this.mY[f8] = aaN, this.aYv[f8] = 0, hr < 60 && (bC.gU.gV(player, 60 - hr), hr = 60), this.a7i[f8] = hr, this.aZ3[f8] = bP.iv.me(f8, bO.iu(aaN)), this.mM[f8] = aaM, this.mK[f8] = mO, this.aZ5[f8] = 0, this.mL[f8] = lo,
				this.mX[f8] = 0, this.mc = (aaM + 1) % 65536, this.kX[player] = aaO + 1, this.a8p[aaP] = f8, this.mJ++, bP.mO.aaG(player, lo[lo.length - 1], mO, aaM, hr)
		}, this.eb = function() {
			bP.mO.eb();
			for (var gg = aD.es, eX = bP.lI.aIz(gg), sb = (! function(sb) {
					for (var aaU, mY = sb.mY, a7i = sb.a7i, aZ5 = sb.aZ5, aYv = sb.aYv, aZ3 = sb.aZ3, mL = sb.mL, mX = sb.mX, sb = sb.mJ, aZZ = bU.fJ << 4, aB = sb - 1; 0 <= aB; aB--) {
						var aaV = mY[aB],
							lo = mL[aB],
							aaW = mX[aB],
							aaN = bO.is(lo[aaW]),
							aaX = bO.is(lo[aaW + 1]),
							aaY = aaN % aZZ,
							aaN = ~~((aaN + .5) / aZZ),
							aaa = aaX % aZZ,
							aab = ~~((aaX + .5) / aZZ),
							aac = aaa - aaY,
							aad = aab - aaN,
							fB = Math.max(~~Math.sqrt(aac * aac + aad * aad + .5), 1),
							aJw = a7i[aB],
							aJw = (aJw = aZ5[aB] ? 4e4 : 25e4 + Math.min(20 * aJw, 3e5) + Math.min(aJw >> 3, 5e4), aYv[aB] + Math.max(~~((aJw + .5) / fB), 1));
						65535 <= aJw ? aaW + 2 < lo.length ? (mX[aB] = aaW + 1, mY[aB] = aaU = function(aB, aae, aaY, aaZ, aaW, fB, lo, aZZ) {
							aae = Math.min(aae - 65535, 65535);
							var lo = bO.is(lo[aaW + 2]),
								aaW = lo % aZZ - aaY,
								lo = ~~((lo + .5) / aZZ) - aaZ,
								aah = Math.max(~~Math.sqrt(aaW * aaW + lo * lo + .5), 1);
							return aae = Math.min(Math.floor((fB * aae + .5) / aah), 65534), bP.y.aYv[aB] = aae, aaY + bN.fZ(aae * aaW, 65535) + aZZ * (aaZ + bN.fZ(aae * lo, 65535))
						}(aB, aJw, aaa, aab, aaW, fB, lo, aZZ)) : (mY[aB] = aaU = aaX, aYv[aB] = 65535) : (aYv[aB] = aJw, mY[aB] = aaU = aaY + bN.fZ(aJw * aac, 65535) + aZZ * (aaN + bN.fZ(aJw * aad, 65535))), aZ3[aB] = bP.iv.aag(aZ3[aB],
							aaV, aaU)
					}
				}(this), ! function(sb) {
					if (bh.kQ() % 2 == 1) {
						var aB, i0, lO, fS, eg, aai, a03, aaj, ha, nU, nV, aaN, aak, aAI, aam, l6, f8 = sb.mJ,
							mY = sb.mY,
							mN = sb.mN,
							a7i = sb.a7i,
							aZ5 = sb.aZ5,
							iv = bP.iv.iv,
							aao = iv.length,
							aap = bP.iv.aap,
							aZZ = bU.fJ << 4,
							aaq = aD.i2,
							aWG = bi.f6,
							gh = (f8 - 1) * (bN.fZ(bh.kQ(), 2) % 2);
						for (aB = 0; aB < f8; aB++)
							for (i0 = Math.abs(aB - gh), aaN = mY[i0], lO = bO.iu(aaN), ha = mN[i0] >> 3, nU = aaN % aZZ, nV = ~~((aaN + .5) / aZZ), aam = a7i[i0], fS = 0; fS < 9; fS++)
								if (!((aai = lO + aap[fS]) < 0 || aao <= aai))
									for (aaj = iv[aai], a03 = aaj.length, eg = 0; eg < a03; eg++) aak = aaj[eg], l6 = mN[aak] >> 3, ha == l6 || aaq && aWG[ha] === aWG[l6] && aWG[ha] || (l6 = mY[aak], (aAI = nU - l6 % aZZ) * aAI + (aAI = nV -
										~~((l6 + .5) / aZZ)) * aAI < 14400 && (l6 = a7i[aak], aAI = l6 <= aam ? Math.max(1, bN.fZ(l6 + bN.fZ(aam - l6, 10), 10)) : Math.max(1, bN.fZ(aam, 10)), a7i[aak] = Math.max(l6 - aAI, 0), aZ5[
										aak] = 4))
					}
				}(this), ! function(sb) {
					if (bh.kQ() % 5 == 3)
						for (var a7i = sb.a7i, f8 = sb.mJ, aB = 0; aB < f8; aB++) {
							var hr = a7i[aB];
							a7i[aB] = Math.max(hr - Math.max(1, hr >> 7), 0)
						}
				}(this), this), a7i = sb.a7i, aZ5 = sb.aZ5, aB = sb.mJ - 1; 0 <= aB; aB--) aZ5[aB] = aZ5[aB] >> 1, 0 === a7i[aB] && (bP.mS.aYf(aB), bP.aJ2.aYy(aB));
			bf.gY(gg, eX - bP.lI.aIz(gg), 15)
		}
}

function aYF() {
	this.aar = 32, this.fF = 0, this.fH = 0, this.iw = 0, this.aas = 0, this.aat = 4, this.iv = null, this.aap = new Int16Array(9), this.dh = function() {
		this.iw = 1 + bN.fZ(bU.fJ - 1, this.aar), this.aas = 1 + bN.fZ(bU.fK - 1, this.aar), this.iv = new Array(this.iw * this.aas), bC.r9.a3X(this.iv);
		var fF, fH, aap = this.aap,
			i = this.iw;
		for (fF = -1; fF <= 1; fF++)
			for (fH = -1; fH <= 1; fH++) aap[3 * (1 + fH) + 1 + fF] = fH * i + fF
	}, this.me = function(aav, aB) {
		return this.iv[aB].push(aav), this.iv[aB].length - 1
	}, this.aag = function(aaw, aaN, aaX) {
		var aax, aay, aaN = bO.iu(aaN),
			aaX = bO.iu(aaX);
		return aaN === aaX ? aaw : (aax = this.iv[aaN].pop(), this.iv[aaN].length === aaw ? this.me(aax, aaX) : (aay = this.iv[aaN][aaw], this.iv[aaN][aaw] = aax, bP.y.aZ3[aax] = aaw, this.me(aay, aaX)))
	}
}

function aYJ() {
	this.lH = function(player, aaz) {
		return -1 !== aaz && !!bP.lI.lt(player, aaz) && this.qU(player, aaz, 0)
	}, this.qU = function(player, aaz, ab0) {
		player = function(player, aaz, ab0) {
			var aaA = bP.lI.aZm(player, aaz);
			if (-1 === aaA) return -1;
			aaA = bP.lI.lJ(aaA, aaz);
			if (-1 === aaA) return -1;
			var lm = bP.lp.lu(aaA, aaz);
			if (0 <= lm) return lm;
			if (bP.lp.lv()) return -1;
			if (0 <= (lm = bP.lp.lu(aaz, aaA))) return bP.lp.lw(bP.lp.lx(bP.lp.get(lm)));
			if (aaA === aaz) return bP.lp.lw(new Uint32Array([aaA, aaz]));
			if (0 <= (lm = bP.aYK.qU(aaA, aaz))) return lm;
			return ab0 ? function(ab4, player) {
				var fp = bQ.fp,
					eT = (fp.fill(0), [ab4]),
					iE = (fp[ab4] = 1, bO.iE),
					ab5 = -1,
					f8 = eT.length;
				for (; - 1 === ab5 && f8;) {
					for (var g = [], aB = 0; aB < f8; aB++)
						for (var eu = eT[aB], a5L = fp[eu], fB = 0; fB < 8; fB++) {
							var xG, a1t, fE = eu + iE[fB],
								em = 4 * fE;
							ac.iM(em) ? (xG = fp[fE], a1t = a5L + 5 + ((1 & fB) << 1), 0 === xG ? (g.push(fE), fp[fE] = a1t) : fp[fE] = Math.min(a1t, xG)) : -1 === ab5 && fB % 2 == 0 && ac.z6(player, em) && (ab5 = eu)
						}
					f8 = (eT = g).length
				}
				return -1 !== ab5 ? function(iZ, ab7) {
					var iE = bO.iE,
						ab8 = -1,
						hz = 0,
						mz = [];
					for (; ab7 !== iZ;)(hz = function(eu, hz) {
						var fp = bQ.fp,
							iE = bO.iE,
							a5L = fp[eu];
						if (a5L - fp[eu + iE[hz]] != 5 + ((1 & hz) << 1))
							for (var fR = 0; fR < 8; fR++) {
								var fB = fR + hz + 6 & 7;
								if (a5L - fp[eu + iE[fB]] == 5 + ((1 & fB) << 1)) return fB
							}
						return hz
					}(ab7, hz)) !== ab8 && (mz.push(ab7), ab8 = hz), ab7 += iE[hz];
					mz.push(iZ);
					var lm = bP.lp.lu(mz[0], iZ);
					if (0 <= lm) return lm;
					return bP.lp.lw(new Uint32Array(mz))
				}(ab4, ab5) : -1
			}(aaz, player) : -1
		}(player, aaz, ab0);
		return -1 !== player && (bQ.g[0] = bP.lp.get(player), !0)
	}
}

function aYL() {
	function abA(hN, ig, ii) {
		for (var jj = Math.min(ig, ii), nm = Math.max(ig, ii), fH = jj + 1; fH < nm; fH++)
			if (!ac.iM(bO.ip(hN, fH))) return;
		return 1
	}

	function abB(hP, ie, ih) {
		for (var jj = Math.min(ie, ih), nm = Math.max(ie, ih), fF = jj + 1; fF < nm; fF++)
			if (!ac.iM(bO.ip(fF, hP))) return;
		return 1
	}

	function abC(ie, ig, ih, ii, ab2, aaz) {
		for (var f8 = Math.min(Math.abs(ih - ie), Math.abs(ii - ig)), iS = Math.sign(ih - ie), iV = Math.sign(ii - ig), aB = 0; aB < f8; aB++)
			if (!ac.iM(bO.ip(ie += iS, ig += iV))) return null;
		return ie === ih ? abA(ie, ig, ii) ? new Uint32Array([ab2, bO.fV(ie, ig), aaz]) : null : abB(ig, ie, ih) ? new Uint32Array([ab2, bO.fV(ie, ig), aaz]) : null
	}
	this.qU = function(ab2, aaz) {
		ab2 = function(ab2, aaz) {
			var ie = bO.fG(ab2),
				ig = bO.fI(ab2),
				ih = bO.fG(aaz),
				ii = bO.fI(aaz);
			if (ie === ih) {
				if (abA(ie, ig, ii)) return new Uint32Array([ab2, aaz])
			} else {
				if (ig !== ii) return abC(ie, ig, ih, ii, ab2, aaz) || abC(ih, ii, ie, ig, ab2, aaz);
				if (abB(ig, ie, ih)) return new Uint32Array([ab2, aaz])
			}
			return null
		}(ab2, aaz);
		return null === ab2 ? -1 : bP.lp.lw(ab2)
	}
}

function aYQ() {
	var abD = [];
	this.dh = function() {
		abD = []
	}, this.lv = function() {
		return 65536 === abD.length
	}, this.lu = function(ab2, aaz) {
		for (var lp = abD, f8 = lp.length, aB = 0; aB < f8; aB++) {
			var gg = lp[aB];
			if (gg[0] === ab2 && gg[gg.length - 1] === aaz) return aB
		}
		return -1
	}, this.lx = function(lo) {
		var abE = new Uint32Array(lo.length);
		return abE.set(lo), abE.reverse()
	}, this.aYm = function(ha, l6) {
		var gb = ha.length - 1,
			abF = new Uint32Array(gb + l6.length);
		return abF.set(ha, 0), abF.set(l6, gb), abF
	}, this.aYr = function(ha, l6, wk, eu, abG) {
		abG && (wk = (l6 = this.lx(l6)).length - wk - 2);
		abG = l6.subarray(wk + 1 + (eu === l6[wk + 1])), eu = new Uint32Array(ha.length + abG.length);
		return eu.set(ha, 0), eu.set(abG, ha.length), eu
	}, this.lw = function(lo) {
		return abD.push(lo), abD.length - 1
	}, this.get = function(aB) {
		return abD[aB]
	}, this.lr = function() {
		return abD
	}, this.abI = function(ab2, aaz) {
		return null
	}
}

function aYU() {
	this.eb = function(player, nR) {
		player = bP.lI.nT(player, nR);
		return !(player < 0 || !bP.mS.aYt(player) || (bP.mS.aYf(player), 0))
	}
}

function aYG() {
	var zi = 32,
		zh = new Array(2);

	function xW(eg) {
		var fF, fH, eu, iV, iS, i4 = zi,
			a40 = bC.r1.xW(i4, i4),
			iA = bC.r1.getContext(a40, !0),
			i7 = bC.r1.getImageData(iA, i4, i4),
			xh = i7.data,
			lO = (i4 >> 1) - .5,
			lP = Math.sqrt(lO * lO);
		for (xh.fill(255), fH = 0; fH < i4; fH++)
			for (fF = 0; fF < i4; fF++) iS = fF - lO, iV = fH - lO, eu = 4 * (fH * i4 + fF), iS = 714 * (lP - Math.sqrt(iS * iS + iV * iV)) / lP, xh[2 + eu] = eg, xh[3 + eu] = 255 < iS ? 0 : iS;
		return iA.putImageData(i7, 0, 0), a40
	}
	this.abJ = -1, this.dh = function() {
		this.abJ = -1, zh[0] || (zh[0] = xW(255), zh[1] = xW(0))
	}, this.abK = function(iA, em, fF, fH, eE, aB) {
		bC.gU.hK(aD.es) && (iA.setTransform(em *= 4 / 3 * .625, 0, 0, em, fF - (eE *= 4 / 3), fH - eE), iA.drawImage(zh[+(bP.y.mM[aB] === this.abJ)], 0, 0))
	}
}

function aYP() {
	function aWX(fF, f8, fH, abL, aAO, fY, player) {
		if (!(fH < 1 || aAO < fH))
			for (var aB = 0; aB <= f8; aB++) {
				var em = bO.ip(fF, fH);
				if (bP.lI.aYx(em) && !bC.r9.has(abL, ac.eq(em)) && ac.yy(em, player)) return em >> 2;
				fF += fY
			}
		return -1
	}

	function aWb(fH, f8, fF, abL, aWV, fY, player) {
		if (!(fF < 1 || aWV < fF)) {
			f8 = Math.max(f8, 0);
			for (var aB = 0; aB <= f8; aB++) {
				var em = bO.ip(fF, fH);
				if (bP.lI.aYx(em) && !bC.r9.has(abL, ac.eq(em)) && ac.yy(em, player)) return em >> 2;
				fH += fY
			}
		}
		return -1
	}

	function aWf(iZ, ia, aWS) {
		return -1 !== ia && (-1 === iZ || bO.ib(ia, aWS) < bO.ib(iZ, aWS)) ? ia : iZ
	}
	this.hj = function(player, aWS) {
		if (bP.mZ.ma(player))
			for (var aWT = bO.iF(), abL = [];;) {
				var ab5 = function(aWS, aWT, abL, player) {
					for (var hN = bO.fG(aWS), hP = bO.fI(aWS), aWV = bU.fJ - 2, aAO = bU.fK - 2, aWW = -1, fB = 0; fB < aWT; fB++) {
						var aAN = Math.max(hN - fB, 1),
							aN9 = Math.max(hP - fB, 1),
							yu = Math.min(hN + fB, aWV),
							yt = Math.min(hP + fB, aAO),
							iZ = aWX(hN, yu - hN, hP - fB, abL, aAO, 1, player),
							ia = aWX(hN - 1, hN - aAN - 1, hP - fB, abL, aAO, -1, player),
							yu = aWX(hN, yu - hN, hP + fB, abL, aAO, 1, player),
							aAN = aWX(hN - 1, hN - aAN - 1, hP + fB, abL, aAO, -1, player),
							aWa = aWb(hP, yt - hP - 1, hN - fB, abL, aWV, 1, player),
							aWc = aWb(hP - 1, hP - aN9 - 2, hN - fB, abL, aWV, -1, player),
							yt = aWb(hP, yt - hP - 1, hN + fB, abL, aWV, 1, player),
							aN9 = aWb(hP - 1, hP - aN9 - 2, hN + fB, abL, aWV, -1, player);
						if (aWW = aWf(aWW, iZ, aWS), aWW = aWf(aWW, ia, aWS), aWW = aWf(aWW, yu, aWS), aWW = aWf(aWW, aAN, aWS), aWW = aWf(aWW, aWa, aWS), aWW = aWf(aWW, aWc, aWS), aWW = aWf(aWW, yt, aWS), 0 <= (aWW = aWf(aWW, aN9, aWS)) &&
							fB * fB >= bO.ib(aWW, aWS)) return aWW
					}
					return -1
				}(aWS, aWT, abL, player);
				if (-1 === ab5) break;
				var id = ac.eq(bO.ey(ab5));
				if (bP.lI.aZk(player, id)) return !! function(player, ab5, aWS) {
					for (var hz = bO.iz(ab5, aWS), aB = 0; aB < 4; aB++) {
						var eu = bO.ix(ab5, hz);
						if (ac.aIX(bO.ey(eu), player)) return bQ.fk[6] = hz, 1;
						hz = (hz + 1) % 4
					}
					return
				}(player, ab5, aWS) && (bQ.fk[7] = ab5, !0);
				abL.push(id)
			}
		return !1
	}
}

function dk() {
	this.aTr = [L(505), L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519), L(520)];
	var abO = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCs = new Array(abO.length), this.dh = function() {
		var g = bl.eT.data[155].value.split(";"),
			lO = g.length;
		if (function() {
				for (var f8 = abO.length, aB = 0; aB < f8; aB++) bZ.aCs[aB] = abO[aB]
			}(), !(lO > abO.length))
			for (var aB = 0; aB < lO; aB++) g[aB].length && (this.aCs[aB] = g[aB])
	}, this.aTt = function(eF, code) {
		for (var aCs = this.aCs, abQ = abO, qi = (aCs[eF] = code, ""), f8 = aCs.length, abR = [], aB = 0; aB < f8; aB++) abR.push(aCs[aB] === abQ[aB] ? "" : aCs[aB]);
		f8--;
		for (aB = 0; aB < f8; aB++) qi += abR[aB] + ";";
		bl.pV.pW(155, qi += abR[f8])
	}, this.aTq = function() {
		bl.pV.pW(155, ""), this.dh()
	}, this.eg = function(code, eF) {
		return code === this.aCs[eF] || code === this.aCs[eF + 1]
	}
}

function dc() {
	var abS = new Array(1),
		abT = new Array(1),
		abU = 20,
		eU = 0,
		abV = !1;

	function abX() {
		abU++, br.play()
	}
	this.dh = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				abT[aB] = 0, abS[aB] = document.createElement("audio"), abS[aB].src = src, abS[aB].setAttribute("preload", "auto"), abS[aB].setAttribute("controls", "none"), abS[aB].style.display = "none", abS[aB].onpause = function() {
					abT[aB] = 1
				}, abS[aB].oncanplaythrough = function() {
					abT[aB] = 0 === abT[aB] ? 1 : abT[aB]
				}, document.body.appendChild(abS[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			abV = !0
		}
	}, this.uk = function() {
		if (abV) {
			abV = !1;
			for (var aB = 0; 0 <= aB; aB--) abS[aB].onpause = null, abS[aB].oncanplaythrough = null, t.removeChild(document.body, abS[aB]), abS[aB] = null
		}
	}, this.play = function() {
		if (abV) {
			var eX = performance.now();
			if (eU + 66 < eX)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === abT[aB]) return eU = eX, abT[aB] = 2, void abS[aB].play();
			0 < abU && (abU--, setTimeout(abX, 66))
		}
	}
}

function cc() {
	this.a9N = function() {
		var aba;
		return !(al.kz < 3 || ag.gw[m4[0]] >= aD.kD >> 1) && (aD.i2 ? 9 !== aD.kl && (aba = ae.aKZ(), !(2 * ae.aKa(bj.l2()) >= aba)) : function() {
			if (8 === aD.kl) return !1;
			var aba = ae.aKZ();
			if (2 * ag.hA[m4[0]] >= aba) return !1;
			return !0
		}())
	}
}

function cC() {
	this.dh = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aaO = aD.kT, hA = ag.hA, aB = 0; aB < aaO; aB++) hA[aB] = 512;
			var aaP = aD.yC,
				kg = aE.kg,
				hr = aE.hr;
			for (aB = aaO; aB < aaP; aB++) hA[aB] = kg[hr[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f8 = aD.yC, hA = ag.hA, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f8; aB++) hA[aB] = sResourcesValue
		} : function() {
			for (var f8 = aD.yC, hA = ag.hA, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f8; aB++) hA[aB] = sResourcesData[aB]
		})();
		bf.mz[8] = ag.hA[aD.es]
	}
}

function dT() {
	var aIl = 501,
		abg = (this.abf = new Uint32Array(aIl), this.a4g = new Uint32Array(aIl), this.aCX = new Uint16Array(aIl), this.aTz = 0, 1),
		ux = 0;

	function abj(self) {
		self.max.fill(0)
	}

	function abl(self, aB) {
		self.max[0] = Math.max(self.abf[aB], self.max[0]), self.max[1] = Math.max(self.a4g[aB], self.max[1]), self.max[2] = Math.max(self.aCX[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.abh = 0, this.mz = new Array(21), this.abi = null, this.di = function() {
		this.abi = [L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(341), L(342), L(529), L(530), L(531), L(532), "", L(533), L(534), L(535), L(299), L(536), L(537)]
	}, this.dh = function() {
		this.aTz = 0, abg = 1, this.abh = 0, ux = 0, abj(this), this.mz.fill(0)
	}, this.qR = function(player, ik) {
		bC.gU.a4a(player) && (this.mz[0] += ik + 1, this.mz[1]++, this.mz[12] += bQ.ff[1])
	}, this.pw = function(player, pZ) {
		__fx.donationsTracker.logDonation(player, pZ, bQ.ff[0], aW.a6C());
		player === aD.es && (aN.pw(bQ.ff[0], bQ.ff[1], pZ), this.mz[12] += bQ.ff[1], this.mz[16] += bQ.ff[0]), pZ === aD.es && (aN.a7v(bQ.ff[0], player), this.mz[10] += bQ.ff[0])
	}, this.qV = function(player) {
		bC.gU.a4a(player) && (this.mz[2]++, this.mz[12] += bQ.ff[1])
	}, this.qd = function(player) {
		bC.gU.a4a(player) && (this.mz[19]++, this.mz[12] += bQ.ff[1])
	}, this.aaI = function(player) {
		bC.gU.a4a(player) && this.mz[20]++
	}, this.gY = function(player, a5L, eF) {
		bC.gU.a4a(player) && (this.mz[eF] += a5L)
	}, this.eb = function() {
		var self;
		this.abh || 0 < ux-- || ((self = this).abf[self.aTz] = ag.gw[aD.es], self.a4g[self.aTz] = ag.hA[aD.es], self.aCX[self.aTz] = ae.aCY(aD.es), abl(self, self.aTz), self.aTz++, self.aTz === aIl && function(self) {
			abj(self), abl(self, 0), self.aTz = 1 + bN.fZ(aIl, 2);
			for (var aB = 1; aB < self.aTz; aB++) self.abf[aB] = self.abf[2 * aB], self.a4g[aB] = self.a4g[2 * aB], self.aCX[aB] = self.aCX[2 * aB], abl(self, aB);
			abg *= 2
		}(self), ux = abg - 1, bg.mq(), 0 === ag.n3[aD.es] && (self.abh = bh.kQ()))
	}
}

function dU() {
	this.i = 0, this.j = 0, this.tQ = 0, this.tR = 0, this.abn = 0, this.abo = 0, this.a9b = 0, this.u9 = 0;
	var abq = this.abp = 0;
	this.abr = 0, this.abt = 0, this.abu = 0, this.a8w = 0, this.eF = 0, this.aC8 = null, this.hu = !1, this.abv = -1, this.abw = !1, this.abx = [0, 0], this.di = function() {
		this.aC8 = [L(538), L(125, 0, "Balance"), L(124, 0, "Interest"), L(539)]
	}, this.dh = function() {
		this.hu = !1, this.abv = -1, this.abw = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var fB = a0.a1.iH() && h.i < h.j ? 1 : a0.a1.iH() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(fB * this.i), this.i -= a0.a1.iH() && h.i < h.j ? 2 * be.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8w = Math.floor(this.j / 150), this.a8w = Math.max(this.a8w, 1.5), this.tQ = Math.floor(1 + .02 * this
			.i), this.tR = Math.floor(1 + .04 * this.i), this.a9b = this.tR, abq = Math.floor(.75 * this.a9b), this.u9 = Math.floor(1 + .075 * this.i), this.abr = Math.floor(1 + .1125 * this.i), this.abt = Math.floor(this.i * (a0.a1.iH() ? .03 :
				.029)), this.abt = Math.max(this.abt, 4), this.abu = Math.floor(.035 * this.i), this.abu = Math.max(this.abu, 4), this.abp = this.j - 2 * this.a9b - this.u9 - this.abr, this.hu && this.aby()
	}, this.hL = function(li, lj) {
		var yF, yE;
		return !!this.hu && (yE = li, yF = lj, li -= bN.fZ(h.i - this.i, 2), lj -= bN.fZ(h.j - this.j, 2), li < 0 || lj < 0 || li >= this.i || lj >= this.j || li >= this.i - this.abr && lj < this.abr ? -1 !== aM.hL(yE, yF) || bE.hL(yE, yF) ||
			this.sI() : lj < this.abr || (lj < this.j - this.u9 ? (this.abw = !0, this.abv = (li - 2 * this.tQ - this.abn) / this.abo, 3 !== this.eF && (bh.dp = !0)) : (yE = (yE = Math.floor(li / (this.i / this.aC8.length))) < 0 ? 0 : yE >=
				this.aC8.length ? this.aC8.length - 1 : yE) !== this.eF && (this.eF = yE, this.aby(), bh.dp = !0)), !0)
	}, this.a2g = function(li, lj) {
		return this.abx[0] = li, this.abx[1] = lj, !(!this.hu || !this.abw || (li -= bN.fZ(h.i - this.i, 2), lj = this.abv, this.abv = (li - 2 * this.tQ - this.abn) / this.abo, (0 <= this.abv && this.abv <= 1 || 0 <= lj && lj <= 1) && (bh.dp = !
			0), 0))
	}, this.a35 = function() {
		this.abw && (this.abw = !1)
	}, this.a3H = function() {
		this.hu ? this.sI() : this.show()
	}, this.show = function() {
		bf.aTz < 2 || (this.hu = !0, this.aby())
	}, this.sI = function() {
		this.hu = !1, this.abv = -1, bh.dp = !0
	}, this.aby = function() {
		this.eF < 2 ? this.abn = aQ.measureText(bC.s0.a0P(bf.max[this.eF]), bC.r1.sq(0, this.abt)) : 2 === this.eF && (this.abn = aQ.measureText(bC.s0.a5E(6, 2), bC.r1.sq(0, this.abt))), this.abo = this.i - 2 * this.tQ - this.abn - this.tR
	}, this.mq = function() {
		this.hu && this.aby()
	}, this.vf = function() {
		this.hu && this.a9t()
	}, this.a9t = function() {
		var fF = bN.fZ(h.i - this.i, 2),
			fH = bN.fZ(h.j - this.j, 2);
		vg.setTransform(1, 0, 0, 1, fF, fH), vg.fillStyle = bD.o1, vg.fillRect(0, this.abr, this.i, this.j - this.abr), this.abz(), this.aSW(), vg.strokeRect(0, 0, this.i, this.j), bC.r1.textAlign(vg, 2), vg.font = bC.r1.sq(0, this.abt), 0 ===
			this.eF ? this.ac0(bf.abf, fF, fH) : 1 === this.eF ? this.ac0(bf.a4g, fF, fH) : 2 === this.eF ? this.ac1(fF, fH) : 3 === this.eF && (this.ac2(fF, fH), this.ac3(fF, fH)), aM.a72(Math.floor(fF + this.i - .725 * this.abr), Math.floor(
				fH + .275 * this.abr), Math.floor(.45 * this.abr)), vg.setTransform(1, 0, 0, 1, 0, 0)
	}, this.abz = function() {
		var aB, eX;
		for (vg.lineWidth = this.a8w, bC.r1.textBaseline(vg, 1), bC.r1.textAlign(vg, 1), vg.strokeStyle = bD.o4, vg.font = bC.r1.sq(1, this.abu), eX = this.i / this.aC8.length, vg.fillStyle = bD.oQ, vg.fillRect(this.eF * eX, this.j - this.u9, eX,
				this.u9), vg.fillStyle = bD.o4, vg.fillRect(0, this.j - this.u9 - .5 * this.a8w, this.i, this.a8w), aB = 1; aB <= 3; aB++) vg.fillRect(aB * eX, this.j - this.u9, this.a8w, this.u9);
		for (aB = this.aC8.length - 1; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(this.aC8[aB], 0, .9 * eX), (aB + .5) * eX, this.j - .46 * this.u9)
	}, this.aSW = function() {
		vg.fillStyle = bD.or, vg.fillRect(0, 0, this.i, this.abr), vg.fillStyle = bD.o4, vg.fillRect(0, this.abr - .5 * this.a8w, this.i, this.a8w), vg.font = bC.r1.sq(1, .39 * this.abr), vg.fillText(bC.zH.a4E(L(540), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.abr))
	}, this.ac0 = function(g, fF, fH) {
		var lO = bf.max[this.eF],
			a3Z = (vg.setTransform(1, 0, 0, 1, fF + 2 * this.tQ + this.abn, fH + this.a9b + this.abr), vg.lineWidth = 2, this.abp / Math.sqrt(lO));
		vg.beginPath(), vg.moveTo(this.abo, this.abp - a3Z * Math.sqrt(g[bf.aTz - 1]));
		for (var aB = bf.aTz - 2; 0 <= aB; aB--) vg.lineTo(aB * this.abo / (bf.aTz - 1), this.abp - a3Z * Math.sqrt(g[aB]));
		vg.stroke();
		fF = this.a72(g, a3Z, .5);
		fF < .95 && vg.fillText(bC.s0.a0P(lO), -this.tQ, 0), .05 < Math.abs(fF - .5) && vg.fillText(bC.s0.a0P(Math.floor(lO / 4)), -this.tQ, Math.floor(this.abp / 2)), .05 < fF && vg.fillText("0", -this.tQ, this.abp)
	}, this.ac1 = function(fF, fH) {
		vg.setTransform(1, 0, 0, 1, fF + 2 * this.tQ + this.abn, fH + this.a9b + this.abr), vg.lineWidth = 2;
		var a3Z = this.abp / Math.max(bf.max[this.eF], 1);
		vg.beginPath(), vg.moveTo(this.abo, this.abp - a3Z * bf.aCX[bf.aTz - 1]);
		for (var aB = bf.aTz - 2; 0 <= aB; aB--) vg.lineTo(aB * this.abo / (bf.aTz - 1), this.abp - a3Z * bf.aCX[aB]);
		vg.stroke();
		fF = this.a72(bf.aCX, a3Z, 1), fH = bf.max[this.eF] / 100;
		fF < .95 && vg.fillText(bC.s0.a5E(fH, 2), -this.tQ, 0), .05 < Math.abs(fF - .5) && vg.fillText(bC.s0.a5E(fH / 2, 2), -this.tQ, Math.floor(this.abp / 2)), .05 < fF && vg.fillText(bC.s0.a5E(0, 2), -this.tQ, this.abp)
	}, this.ac2 = function(fF, fH) {
		vg.setTransform(1, 0, 0, 1, fF + .34 * this.i, fH + 2 * abq + this.abr), bC.r1.textAlign(vg, 2);
		for (var aBq = this.j - 4 * abq - this.u9 - this.abr, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(bf.abi[g[aB]], 0, .31 * this.i), 0, aB * aBq / 9);
		var fa = bf.mz;
		for (vg.setTransform(1, 0, 0, 1, fF + .39 * this.i, fH + 2 * abq + this.abr), bC.r1.textAlign(vg, 0), vg.fillText(bC.s0.a5E(100 * fa[0] / (1024 * Math.max(fa[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vg.fillText(fa[g[aB]].toString(), 0,
			aB * aBq / 9);
		vg.fillText(bC.s0.a5E(100 * (1 - ag.gw[aD.es] / fa[7]), 0), 0, aBq)
	}, this.ac3 = function(fF, fH) {
		vg.setTransform(1, 0, 0, 1, fF + .79 * this.i, fH + 2 * abq + this.abr), bC.r1.textAlign(vg, 2);
		var aB, aBq = this.j - 4 * abq - this.u9 - this.abr;
		for (vg.fillStyle = bD.oL, aB = 2; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(bf.abi[aB + 8], 0, .31 * this.i), 0, aB * aBq / 9);
		vg.fillText(bC.zH.a4E(bf.abi[18], 0, .31 * this.i), 0, 3 * aBq / 9), vg.fillStyle = bD.oK, vg.fillText(bC.zH.a4E(bf.abi[11], 0, .31 * this.i), 0, 4 * aBq / 9), vg.fillStyle = bD.od, vg.fillText(bC.zH.a4E(bf.abi[13], 0, .31 * this.i), 0,
				5 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abi[15], 0, .31 * this.i), 0, 6 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abi[16], 0, .31 * this.i), 0, 7 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abi[12], 0, .31 * this.i), 0, 8 * aBq / 9), vg
			.fillStyle = bD.oc, vg.fillText(bC.zH.a4E(bf.abi[17], 0, .31 * this.i), 0, aBq), vg.fillStyle = bD.oL;
		var fa = bf.mz,
			aFu = fa[8] + fa[9] + fa[10] + fa[18],
			aFu = bC.s0.a0P(aFu),
			aRK = vg.measureText(aFu).width,
			fF = (vg.setTransform(1, 0, 0, 1, fF + .83 * this.i + aRK, fH + 2 * abq + this.abr), vg.fillText(bC.s0.a0P(fa[8]), 0, 0), vg.fillText(bC.s0.a0P(fa[9]), 0, aBq / 9), vg.fillText(bC.s0.a0P(fa[10]), 0, 2 * aBq / 9), vg.fillText(bC.s0
				.a0P(fa[18]), 0, 3 * aBq / 9), vg.fillStyle = bD.oK, vg.fillText(aFu, 0, 4 * aBq / 9), vg.fillStyle = bD.od, vg.fillText(bC.s0.a0P(fa[13]), 0, 5 * aBq / 9), vg.fillText(bC.s0.a0P(fa[15]), 0, 6 * aBq / 9), vg.fillText(bC.s0
				.a0P(fa[16]), 0, 7 * aBq / 9), vg.fillText(bC.s0.a0P(fa[12]), 0, 8 * aBq / 9), fa[12] + fa[13] + fa[15] + fa[16]);
		vg.fillStyle = bD.oc, vg.fillText(bC.s0.a0P(fF), 0, aBq), vg.fillStyle = bD.o4
	}, this.a72 = function(g, a3Z, aAW) {
		var aB, e, fr;
		return this.abv < 0 || 1 < this.abv ? .25 : (aB = this.abv * (bf.aTz - 1), fr = g[e = Math.floor(aB)], fr += (aB - e) * (g[e < bf.aTz - 1 ? e + 1 : e] - fr), vg.strokeStyle = bD.o7, .04 < this.abv && this.ac5(0, this.abp - a3Z * Math.pow(
				fr, aAW), aB * this.abo / (bf.aTz - 1), this.abp - a3Z * Math.pow(fr, aAW)), .04 < fr / bf.max[this.eF] && this.ac5(aB * this.abo / (bf.aTz - 1), this.abp, aB * this.abo / (bf.aTz - 1), this.abp - a3Z * Math.pow(fr, aAW)), vg
			.fillStyle = bD.og, vg.beginPath(), vg.arc(aB * this.abo / (bf.aTz - 1), this.abp - a3Z * Math.pow(fr, aAW), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vg.fill(), g = this.abv * bh.aCZ, g = 0 === ag.n3[aD.es] ? Math.floor(g * bf
				.abh) : Math.floor(g * bh.kQ()), vg.fillStyle = bD.o4, vg.fillText(1 === aAW ? bC.s0.a5E(fr / 100, 2) : bC.s0.a0P(Math.floor(fr)), -this.tQ, this.abp - a3Z * Math.pow(fr, aAW)), bC.r1.textAlign(vg, 1), vg.fillText(aW.aCM(g),
				aB * this.abo / (bf.aTz - 1), this.abp + this.abt - (a0.a1.iH() ? 2 : 0) - this.a8w), bC.r1.textAlign(vg, 2), a3Z * Math.pow(fr, aAW) / this.abp)
	}, this.ac5 = function(nU, nV, nh, ni) {
		vg.beginPath(), vg.moveTo(nU, nV), vg.lineTo(nh, ni), vg.stroke()
	}
}

function c0() {
	this.aU0 = "https://territorial.io/changelog", this.aU5 = "https://territorial.io/terms", this.aU6 = "https://territorial.io/privacy", this.aU4 = "https://territorial.io/tutorial", this.aU3 = "https://territorial.io/players", this.aU1 =
		"https://territorial.io/clans", this.aU2 = "https://territorial.io/clan-results", this.aQT = "https://patreon.com/c/territorial", this.aDr = "https://play.google.com/store/apps/details?id=territorial.io", this.a2D =
		"https://apps.apple.com/app/id1581110913", this.aDs = "https://discord.gg/pthqvpTXmh", this.aDt = "https://www.instagram.com/davidtschacher/", this.zx =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dC() {
	this.y = new ac6, this.zE = new ac7, this.dh = function() {
		this.y.dh()
	}, this.eb = function() {
		0 !== this.y.aWA && this.y.aWA--
	}
}

function ac7() {
	this.vf = function() {
		if (0 !== bR.y.aWA && (vg.globalAlpha = Math.min(bR.y.aWA / 580, 1), vg.drawImage(bR.y.acA, 1 + aS.zC(), 1 + aS.zD()), vg.globalAlpha = 1, aD.hW)) {
			for (var nU = il / iJ, nV = im / iJ, nh = (h.i + il) / iJ, ni = (h.j + im) / iJ, gh = bR.y.acB * iJ, acC = bR.y.acC, aB = aD.kT - 1; 0 <= aB; aB--) ! function(aB, gh, nU, nV, nh, ni, acC) {
				var highlight;
				0 === ag.n3[aB] || 0 === ag.gw[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gh *= 2), nh = h.i * ((ag.j1[aB] + ag.j2[aB] + 1) / 2 - nU) / (nh - nU) - .5 * gh, nU = h.j * ((ag.j3[
					aB] + ag.j4[aB] + 1) / 2 - nV) / (ni - nV) - .5 * gh, nh > h.i) || nU > h.j || nh < -gh || nU < -gh || (highlight ? vg.setTransform(2 * iJ, 0, 0, 2 * iJ, nh, nU) : vg.setTransform(iJ, 0, 0, iJ, nh, nU), vg.drawImage(
					acC[aD.i2 ? bi.f6[aB] : 1], 0, 0))
			}(aB, gh, nU, nV, nh, ni, acC);
			vg.setTransform(iJ, 0, 0, iJ, 0, 0)
		}
	}
}

function ac6() {
	this.acB = 28, this.aWA = 0, this.acA = null;
	var acE = this.acC = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function acI(i4, acJ) {
		var fF, fH, eu, iS, a40 = bC.r1.xW(i4, i4),
			iA = bC.r1.getContext(a40, !0),
			i7 = bC.r1.getImageData(iA, i4, i4),
			xh = i7.data,
			lO = (i4 >> 1) - .5,
			acK = .5 + lO;
		for (acK *= acK, fH = 0; fH < i4; fH++)
			for (fF = 0; fF < i4; fF++) iS = (iS = fF - lO) * iS + (iS = fH - lO) * iS, xh[eu = 4 * (fH * i4 + fF)] = acJ[0], xh[1 + eu] = acJ[1], xh[2 + eu] = acJ[2], xh[3 + eu] = (acK - iS) * acJ[3] / acK;
		return iA.putImageData(i7, 0, 0), a40
	}

	function abK(aB, iA, a40, i4) {
		var highlight, fF, fH;
		0 !== ag.n3[aB] && 0 !== ag.gw[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i4 *= 2), fF = ag.j1[aB] + ag.j2[aB] + 1 - i4 - 2 >> 1, fH = ag.j3[aB] + ag.j4[aB] + 1 - i4 - 2 >> 1, highlight ? iA
			.drawImage(a40[aD.i2 ? 9 === aD.kl && 5 === aE.hr[aB] ? 3 : bi.f6[aB] : aB < aD.kT ? 1 : 0], fF, fH, i4, i4) : iA.drawImage(a40[aD.i2 ? 9 === aD.kl && 5 === aE.hr[aB] ? 3 : bi.f6[aB] : aB < aD.kT ? 1 : 0], fF, fH))
	}
	this.dh = function() {
		var sb;
		this.aWA = 700,
			function(sb) {
				var i4 = sb.acB;
				if (sb.acC = [], acE = [], aD.i2) {
					for (var aB = 0; aB <= aD.yJ; aB++) sb.acC.push(acI(i4, bi.aZf[bi.kq[aB]])), acE.push(acI(i4 >> 1, bi.aZf[bi.kq[aB]]));
					9 === aD.kl && acE.push(acI(i4, bi.aZf[1]))
				} else sb.acC.push(acI(i4, bi.aZf[7])), sb.acC.push(acI(i4, bi.aZf[4])), acE.push(acI(i4 >> 1, bi.aZf[7]))
			}(this),
			function(sb, acO) {
				var aB, acA = sb.acA,
					iA = bC.r1.getContext(acA, !0),
					f8 = aD.f5,
					i4 = sb.acB >> 1;
				iA.imageSmoothingEnabled = !1, iA.setTransform(1, 0, 0, 1, 0, 0), acO && iA.clearRect(0, 0, acA.width, acA.height);
				if (9 === aD.kl) {
					i4 <<= 1;
					sb = az.ku[5];
					for (aB = f8 - sb; aB < f8; aB++) abK(aB, iA, acE, i4);
					f8 -= sb, i4 >>= 1
				}
				for (aB = aD.kT; aB < f8; aB++) abK(aB, iA, acE, i4)
			}(this, null !== (sb = this).acA && sb.acA.width === bU.fJ - 2 && sb.acA.height === bU.fK - 2 || (sb.acA = bC.r1.xW(bU.fJ - 2, bU.fK - 2), !1)), aD.hW || this.a5W()
	}, this.aZe = acI, this.a5W = function() {
		for (var f8 = aD.kT, i4 = this.acB, acC = this.acC, iA = bC.r1.getContext(this.acA, !0), aB = 0; aB < f8; aB++) abK(aB, iA, acC, i4)
	}
}

function dD() {
	function acR() {
		8 === aD.kl && 1 === aD.a18 && bT.a0k.a17()
	}

	function acQ(player) {
		aD.hW ? (ak.aIs(player), al.aMK(), aD.kn && aD.qN.eb()) : b3.aEB(player)
	}
	this.pp = function(player) {
		aN.a1L(player, player === aD.es ? 21 : 22), acQ(player), acR()
	}, this.qK = function(player) {
		1 === aD.a18 && 0 !== ag.n3[player] && 2 !== ag.a4W[player] && acQ(player), aD.a1B--, aD.a1A--, aN.a1L(player, 4), bC.gU.hJ(2) && aW.mp(!0), acR()
	}
}

function dN() {
	this.aWQ = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBn = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bD.o4, "rgb(170,170,170)"
	], this.acS = [bD.o4, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bD.o4, bD.nv], this.acT = [bD.nv, bD.o4, bD.o4, bD.o4, bD.nv, bD.nv, bD.nv, bD.nv, bD.o4];
	var aMU = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aLn = ["rgba(" + aMU[0] + ",", "rgba(" + aMU[1] + ",", "rgba(" + aMU[2] + ",", "rgba(" + aMU[3] + ",", "rgba(" + aMU[4] + ",", "rgba(" + aMU[5] + ",", "rgba(" + aMU[6] + ",", "rgba(" + aMU[7] + ",", "rgba(" + aMU[8] + ",", "rgba(" + aMU[9] +
			","
		], this.aLo = ["rgb(" + aMU[0] + ")", "rgb(" + aMU[1] + ")", "rgb(" + aMU[2] + ")", "rgb(" + aMU[3] + ")", "rgb(" + aMU[4] + ")", "rgb(" + aMU[5] + ")", "rgb(" + aMU[6] + ")", "rgb(" + aMU[7] + ")", "rgb(" + aMU[8] + ")", "rgb(" + aMU[9] +
			")"
		], this.a1U = null, this.aZf = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aZK = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kq = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f6 = new Uint8Array(aD.f5), this.aBo = new Uint8Array(aD.f5), this.yP = new Uint16Array(aD.f5), this.yQ = new Uint16Array(this.kq.length + 1), this.yR = new Uint16Array(this.kq.length), this.di =
		function() {
			this.a1U = [L(541), L(542), L(543), L(544), L(545), L(546), L(547), L(548), L(549)]
		}, this.dh = function() {
			if (this.f6.fill(0), this.aBo.fill(0), this.acU(), aD.i2) {
				if (9 === aD.kl) {
					for (var f6 = bi.f6, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f6[aB] = 1;
					var f8 = aD.f5;
					for (aB = aD.data.teamPlayerCount[7]; aB < f8; aB++) f6[aB] = 2;
					bi.kq[1] = 7, bi.kq[2] = 8
				} else aD.kn ? function() {
					var aZK = bi.aZK,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kT - 1; 0 <= aB; aB--) colorsData[aB] = ay.jk(262144);
					var acf = 0,
						fO = 768,
						aVt = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var fB = 0, fS = 0; fS < 3; fS++) fB += Math.abs(aZK[aB][fS] - aVt[fS]);
							fB < fO && (acf = aB, fO = fB)
						} var acg = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) acg[aB] = teamPlayerCount[aB];
					var kq = bi.kq,
						ach = new Uint8Array(9),
						gb = (kq[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) acg[aB] && (ach[aB] = gb, kq[gb++] = aB);
					var jj = aD.kT,
						f6 = bi.f6;
					acg[acf] ? (acg[acf]--, f6[0] = ach[acf]) : jj = 0;
					var eg = 0;
					for (aB = jj; aB < aD.yC; aB++) {
						var i0 = kq[eg];
						if (acg[i0]) acg[i0]--, f6[aB] = ach[i0];
						else if (aB--, 9 <= ++eg) return console.log("error 325")
					}
				}() : this.eb();
				! function() {
					for (var f8 = aD.f5, yP = bi.yP, yQ = bi.yQ, yR = bi.yR, f6 = bi.f6, kq = bi.kq, yI = kq.length, eT = new Array(yI), aB = 0; aB < yI; aB++) eT[aB] = [];
					for (aB = 0; aB < f8; aB++) eT[kq[f6[aB]]].push(aB);
					for (aB = 1; aB <= yI; aB++) yQ[aB] = yQ[aB - 1] + eT[aB - 1].length;
					for (aB = 0; aB < yI; aB++)
						for (var gb = eT[aB].length, lO = yQ[aB], i0 = 0; i0 < gb; i0++) yP[i0 + lO] = eT[aB][i0];
					var kT = aD.kT;
					for (aB = 0; aB < yI; aB++)
						for (gb = eT[aB].length, lO = yQ[aB], i0 = 0; i0 < gb; i0++)
							if (yP[i0 + lO] >= kT) {
								yR[aB] = i0;
								break
							}
				}(), ! function() {
					for (var f8 = aD.f5, f6 = bi.f6, aBo = bi.aBo, kq = bi.kq, aB = 0; aB < f8; aB++) aBo[aB] = kq[f6[aB]];
					9 === aD.kl && aBo.fill(1, f8 - az.ku[5])
				}()
			}
		}, this.acU = function() {
			for (var aB = this.kq.length - 1; 0 <= aB; aB--) this.kq[aB] = aB
		}, this.eb = function() {
			var a0E = new Uint8Array(aD.kT),
				a0F = new Uint8Array(aD.kT),
				acZ = new Uint16Array(8),
				aca = new Uint16Array(this.kq.length);
			this.acb(a0E, a0F, acZ, 1), this.aIN(acZ), this.acc(aca, a0E, a0F), this.acd(a0E, a0F, aca), this.ace()
		}, this.acb = function(a0E, a0F, acg, aci) {
			for (var fS, e, acj, f8 = this.kq.length - aci, g = new Uint16Array(f8), aZK = this.aZK, colorsData = aD.data.colorsData, aB = aD.kT - 1; 0 <= aB; aB--) {
				for (fS = f8; aci <= fS; fS--) g[fS - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aZK[fS][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aZK[fS][1]) + Math.abs(4 * (63 & colorsData[aB]) - aZK[fS][2]);
				for (acj = 768, fS = f8 - 1; 0 <= fS; fS--) g[e = (fS + aB) % f8] < acj && (acj = g[e], a0E[aB] = e);
				for (acg[a0E[aB]] += 4, acj = 768, fS = f8 - 1; 0 <= fS; fS--) g[e = (fS + aB) % f8] < acj && e !== a0E[aB] && (acj = g[e], a0F[aB] = e);
				acg[a0F[aB]]++
			}
		}, this.aIN = function(acg) {
			for (var fS, lQ, f8 = this.kq.length - 1, aB = f8; 0 <= aB; aB--) this.kq[aB] = aB;
			for (aB = f8 - 1; 0 <= aB; aB--) acg[aB]++;
			for (aB = 1; aB <= f8; aB++) {
				for (lQ = 0, fS = 1; fS < f8; fS++) acg[fS] > acg[lQ] && (lQ = fS);
				acg[lQ] = 0, this.kq[aB] = lQ + 1
			}
		}, this.acc = function(aca, a0E, a0F) {
			var fS, a1q, eg, fB, e, ng, th, ack = this.kq.length - 1,
				rU = new Uint16Array(ack),
				acl = [],
				acm = 0,
				a1p = [],
				acn = [];
			loop: for (var aB = 0; aB < aD.kT; aB++)
				if (null !== (a1q = bC.s0.a1r(ag.a1o[aB]))) {
					for (fS = a1p.length - 1; 0 <= fS; fS--)
						if (a1q === a1p[fS]) {
							acn[fS].push(aB), acm = Math.max(acm, acn[fS].length);
							continue loop
						} a1p.push(a1q), acl.push(!1), acn.push([aB]), acm = Math.max(acm, 1)
				}
			for (; 2 < aD.yJ && acm > bN.fZ(aD.kT, aD.yJ);) aD.yJ--, aD.kl--;
			for (fS = a1p.length - 1; 0 <= fS; fS--) {
				for (fB = -1, eg = a1p.length - 1; 0 <= eg; eg--) !acl[eg] && (-1 === fB || acn[eg].length > acn[fB].length) && (fB = eg);
				for (eg = ack - 1; 0 <= eg; eg--) rU[eg] = 1;
				for (eg = acn[fB].length - 1; 0 <= eg; eg--) rU[a0E[acn[fB][eg]]] += 3, rU[a0F[acn[fB][eg]]]++;
				for (aB = ack - 1; 0 <= aB; aB--) {
					for (e = fB % ack, eg = ack - 1; 0 <= eg; eg--) rU[eg] > rU[e] && (e = eg);
					for (ng = -1, eg = aD.yJ; 0 < eg; eg--)
						if (this.kq[eg] === e + 1) {
							ng = eg;
							break
						} if (rU[e] = 0, -1 !== ng) {
						for (th = 0, eg = aD.yJ; 0 < eg; eg--) aca[ng] > aca[eg] && th++;
						if (th !== aD.yJ - 1) {
							for (eg = acn[fB].length - 1; 0 <= eg; eg--) aca[ng]++, this.f6[acn[fB][eg]] = ng;
							break
						}
					}
				}
				acl[fB] = !0
			}
		}, this.acd = function(a0E, a0F, aca) {
			for (var aB, iR, f8 = this.kq.length - 1, border = bN.fZ(aD.kT, aD.yJ), aco = (0 < aD.kT % aD.yJ && border++, new Uint8Array(1 + f8)), fS = f8; 1 <= fS; fS--) aco[this.kq[fS]] = fS;
			for (aB = 0; aB < aD.kT; aB++) iR = aco[a0E[aB] + 1], 0 === this.f6[aB] && iR <= aD.yJ && aca[iR] < border && (aca[iR]++, this.f6[aB] = iR);
			for (aB = 0; aB < aD.kT; aB++) iR = aco[a0F[aB] + 1], 0 === this.f6[aB] && iR <= aD.yJ && aca[iR] < border && (aca[iR]++, this.f6[aB] = iR);
			for (fS = aD.yJ; 1 <= fS; fS--)
				for (aB = aD.kT - 1; 0 <= aB && !(aca[fS] >= border); aB--) 0 === this.f6[aB] && (aca[fS]++, this.f6[aB] = fS)
		}, this.ace = function() {
			if (aD.yJ < 8) aD.yJ++, aD.kl++, aD.yK = 1;
			else
				for (var aB = aD.kT; aB < aD.f5; aB++) this.f6[aB] = 1 + aB % aD.yJ
		}
}

function df() {
	this.gx = function() {
		for (var fF, fH, aB = g4 - 1; 0 <= aB; aB--) fF = bN.fZ(g6[aB], 4) % bU.fJ, fH = bN.fZ(g6[aB], 4 * bU.fJ), ag.j1[fz] = Math.min(fF, ag.j1[fz]), ag.j3[fz] = Math.min(fH, ag.j3[fz]), ag.j2[fz] = Math.max(fF, ag.j2[fz]), ag.j4[fz] = Math
			.max(fH, ag.j4[fz])
	}, this.gI = function() {
		var fB, gg, aB, f8 = ag.ga[fz].length,
			fA = ac.fA;
		loop: for (aB = f8 - 1; 0 <= aB; aB--) {
			for (fB = 3; 0 <= fB; fB--)
				if (gg = ag.ga[fz][aB] + fA[fB], ac.ez(gg) || ac.gi(gg) && ac.f0(gg) !== fz) {
					ac.jf(ag.ga[fz][aB], fz);
					continue loop
				} ag.ga[fz][aB] = ag.ga[fz][f8 - 1], ag.ga[fz].pop(), f8--
		}
	}, this.gJ = function() {
		var player = fz,
			go = ag.go,
			gp = ag.gp,
			fX = ag.fX,
			f8 = go[player].length,
			fA = ac.fA;
		loop: for (var aB = f8 - 1; 0 <= aB; aB--) {
			for (var acp = !1, acq = !1, fB = 3; 0 <= fB; fB--) {
				var gg = go[player][aB] + fA[fB];
				if (ac.aIX(gg, player)) continue loop;
				acp = acp || ac.iM(gg), acq = acq || ac.aIW(gg)
			}
			acp ? gp[player].push(go[player][aB]) : acq ? fX[player].push(go[player][aB]) : ac.yl(go[player][aB], player), go[player][aB] = go[player][f8 - 1], go[player].pop(), f8--
		}
	}, this.gm = function() {
		ag.gw[g3] -= g4
	}, this.gn = function(border) {
		for (var f8 = border.length, aB = f8 - 1; 0 <= aB; aB--) ac.z6(g3, border[aB]) || (border[aB] = border[f8 - 1], border.pop(), f8--)
	}, this.gq = function(border) {
		for (var f8 = border.length, aB = f8 - 1; 0 <= aB; aB--) !ac.z6(g3, border[aB]) && ac.f3(border[aB]) && (border[aB] = border[f8 - 1], border.pop(), f8--)
	}, this.gr = function(border) {
		for (var fB, gg, f8 = border.length, fA = ac.fA, aB = f8 - 1; 0 <= aB; aB--)
			for (fB = 3; 0 <= fB; fB--)
				if (gg = border[aB] + fA[fB], ac.aIX(gg, g3)) {
					ag.go[g3].push(border[aB]), border[aB] = border[f8 - 1], border.pop(), f8--;
					break
				}
	}, this.gs = function() {
		for (var fB, gg, fA = ac.fA, aB = g4 - 1; 0 <= aB; aB--)
			for (fB = 3; 0 <= fB; fB--) gg = g6[aB] + fA[fB], ac.z9(g3, gg) && ac.aId(gg) && (ag.go[g3].push(gg), ac.gd(gg, g3))
	}, this.gt = function() {
		var fF, fH;
		loop: for (; ag.j3[g3] < ag.j4[g3];) {
			for (fF = ag.j2[g3]; fF >= ag.j1[g3]; fF--)
				if (ac.z6(g3, 4 * (ag.j3[g3] * bU.fJ + fF))) break loop;
			ag.j3[g3]++
		}
		loop: for (; ag.j3[g3] < ag.j4[g3];) {
			for (fF = ag.j2[g3]; fF >= ag.j1[g3]; fF--)
				if (ac.z6(g3, 4 * (ag.j4[g3] * bU.fJ + fF))) break loop;
			ag.j4[g3]--
		}
		loop: for (; ag.j1[g3] < ag.j2[g3];) {
			for (fH = ag.j4[g3]; fH >= ag.j3[g3]; fH--)
				if (ac.z6(g3, 4 * (fH * bU.fJ + ag.j1[g3]))) break loop;
			ag.j1[g3]++
		}
		loop: for (; ag.j1[g3] < ag.j2[g3];) {
			for (fH = ag.j4[g3]; fH >= ag.j3[g3]; fH--)
				if (ac.z6(g3, 4 * (fH * bU.fJ + ag.j2[g3]))) break loop;
			ag.j2[g3]--
		}
	}, this.f1 = function(player, jc) {
		return 0 === bi.f6[player] || bi.f6[player] !== bi.f6[jc]
	}, this.he = function(player) {
		for (var aB, gh, f8 = ag.go[player].length, fA = ac.fA, fB = 3; 0 <= fB; fB--)
			for (gh = fA[fB], aB = 0; aB < f8; aB++)
				if (ac.ez(ag.go[player][aB] + gh)) return !0;
		return !1
	}, this.aIo = function(player) {
		for (var aB, gh, f8 = ag.go[player].length, fA = ac.fA, fB = 3; 0 <= fB; fB--)
			for (gh = fA[fB], aB = 0; aB < f8; aB++)
				if (ac.je(ag.go[player][aB]) && ac.ez(ag.go[player][aB] + gh)) return !0;
		return !1
	}, this.hh = function(a4c, a4d) {
		for (var aB, eX, gh, gg, aaO = ag.go[a4c].length, aaP = ag.go[a4d].length, fA = (aaP < aaO && (eX = a4c, a4c = a4d, a4d = eX, eX = aaO, aaO = aaP, 0), ac.fA), fB = 3; 0 <= fB; fB--)
			for (gh = fA[fB], aB = 0; aB < aaO; aB++)
				if (gg = ag.go[a4c][aB] + gh, ac.gi(gg) && ac.f0(gg) === a4d) return !0;
		return !1
	}, this.aIp = function(a4c, a4d) {
		for (var aB, gh, gg, aaO = ag.go[a4c].length, fA = ac.fA, fB = 3; 0 <= fB; fB--)
			for (gh = fA[fB], aB = 0; aB < aaO; aB++)
				if (ac.je(ag.go[a4c][aB]) && (gg = ag.go[a4c][aB] + gh, ac.gi(gg)) && ac.f0(gg) === a4d) return !0;
		return !1
	}
}

function dZ() {
	this.qW = new acr
}

function acr() {
	this.hk = function(player) {
		bC.gU.a4X(player) && aN.za(80, L(550), 637, 0, bD.ou, bD.o1, -1, !1)
	}, this.hn = function(player) {
		bC.gU.a4X(player) && aN.za(80, L(551), 637, 0, bD.ou, bD.o1, -1, !1)
	}
}

function acs() {
	this.act = 0, this.eb = function() {
		aO.eb(), aZ.eb(), h.eb(), b0.y.eb(), ax.aHs(), bW.eP.eb(), bh.dp && (bh.dp = !1, aa.vf())
	}
}

function acu() {
	this.eW = bh.eW, this.eF = 0, this.act = 0, this.aHq = 0, this.acv = null, this.acw = 7, this.acx = 0, this.dh = function() {
		this.aHq = 0, this.acv = [], this.eF = 0, this.act = 0
	}, this.aVN = function(aC) {
		if (aD.hW) this.aCa(aC);
		else if (this.acv.push(aC), 2 === aD.a18) {
			for (var aB = 0; aB < this.acv.length; aB++) bA.pP.eb(this.acv[aB]);
			this.acv = []
		}
	}, this.aCa = function(aC) {
		2 !== aD.a18 && (bA.pP.eb(aC), bB.eb(), aW.aCa(this.aHq), this.aHq === aD.a5c ? (aD.qN.eb(), this.aHq = 0, this.eF = 0, this.act = 0, this.eW = bh.eW) : (this.aHq++, af.a5V(), af.mp(!0), bd.aD9()))
	}, this.eb = function() {
		h.eb(), aD.hW ? (bh.dp = aW.aCa(-1) || bh.dp, mr()) : (0 !== this.eF || bh.eW >= this.eW && (this.eW += bh.aCZ * Math.floor(1 + (bh.eW - this.eW) / bh.aCZ), 2 === aD.a18 ? mf() : this.acy(), this.eF++, 27 < bh.eW - this.acx)) && this
		.acz(), mm(), bh.dp && (bh.dp = !1, zA()), this.acx = bh.eW
	}, this.acz = function() {
		bh.dp = !0, mo(), this.eF = 0
	}, this.acy = function() {
		var wV, aB;
		if (this.act !== 7 * this.aHq) mh(), bd.aD9();
		else {
			wV = !1;
			loop: for (; this.ad0() && (wV = !0, mh(), 2 !== aD.a18) && 0 < this.acv.length;)
				for (aB = this.acw - 2; 0 <= aB; aB--)
					if (mh(), 2 === aD.a18) break loop;
			wV ? bd.aD9() : (mf(), bd.a5Y())
		}
	}, this.ad0 = function() {
		return 0 < this.acv.length && (this.aHq++, bA.pP.eb(this.acv[0]), this.acv.shift(), !0)
	}
}

function ad1() {
	var ad2, ad3, ad4, aHq, ad5, eF = 0,
		eW = bh.eW;

	function ad8() {
		! function() {
			if (!aD.hW) return;
			if (aD.kn) return;
			if (2 !== aD.a18)
				if (ad5 % 7 != 0) ad5++;
				else if (aHq === aD.a5c) {
				if (!adB()) return;
				aW.aCa(aHq), aD.qN.eb()
			} else {
				if (!adB()) return;
				ad5++, aHq++, af.a5V(), af.mp(!0)
			}
			return 1
		}() && adB() && mh()
	}

	function ad9() {
		eF = 0, (aD.hW ? (bh.dp = aW.aCa(aHq - (ad5 % 7 == 0 ? 0 : 1) + ad5 % 7 / 7) || bh.dp, mr) : aM.hI || !bE.a5z ? mr : (bh.dp = !0, mo))()
	}

	function adB() {
		var aB, f8, adC = bB.qL.aWq,
			fr = bB.qL.aWr,
			ft = bB.qL.aWs,
			fv = bB.qL.aWt,
			adD = bB.qL.aWu,
			adE = bB.qL.aWv;
		if (!(ad2 >= adE.length)) {
			if (adE = adE[ad2], adD[ad2]) {
				for (f8 = ad3 + adE, aB = ad3; aB < f8; aB++) bA.pP.qA(adC[aB], fr[aB], ft[aB], fv[aB]);
				ad3 += adE, ad2++
			} else ++ad4 >= adE && (ad2++, ad4 = 0);
			return 1
		}
		aN.a2T("Replay file smaller than expected."), bE.a3I(!1), aD.a18 = 2
	}
	this.act = 0, this.dh = function() {
		ad5 = aHq = ad4 = ad3 = ad2 = 0
	}, this.eb = function() {
		var aao;
		h.eb(), bE.a9n() < 1.7 ? 0 === eF ? bh.eW >= eW && (aao = bh.aCZ / bE.a9n(), eW += aao * Math.floor(1 + (bh.eW - eW) / aao), 2 === aD.a18 || aM.hI || !bE.a5z ? mf() : (ad8(), bd.aD9()), eF++) : ad9() : function() {
			var aao;
			if (bh.eW >= eW)
				if (2 === aD.a18 || aM.hI || !bE.a5z) mf(), eW = bh.eW;
				else {
					for (aao = bh.aCZ / bE.a9n(), 16 < (bh.eW - eW) / aao && (eW = bh.eW - 16 * aao); bh.eW >= eW && 2 !== aD.a18;) eW += aao, ad8();
					bd.aD9()
				} ad9()
		}(), mm(), bh.dp && (bh.dp = !1, zA())
	}, this.a1J = function() {
		bB.qL.aWv.length - ad2 <= 2 || aN.a2T("Replay file larger than expected.")
	}
}

function adF() {
	var eF = 0,
		eW = bh.eW;
	this.act = 0, this.eb = function() {
		h.eb(), aD.hW ? mr() : 0 === eF ? bh.eW >= eW && (eW += bh.aCZ * Math.floor(1 + (bh.eW - eW) / bh.aCZ), 2 === aD.a18 || aM.hI ? mf() : (mh(), bd.aD9()), eF++) : ((aM.hI ? mr : (bh.dp = !0, mo))(), eF = 0), mm(), bh.dp && (bh.dp = !1,
		zA())
	}
}

function dV() {
	this.a1I = null, this.dp = !1, this.eW = 0, this.aCZ = 56;
	var adG = 0;

	function adH() {
		bh.eW = adG = performance.now(), bh.a1I.eb(), window.requestAnimationFrame(adH)
	}
	this.dh = function() {
		this.a5w(), window.requestAnimationFrame(adH), this.eW = performance.now()
	}, this.a5o = function() {
		aD.hH ? (this.a1I = new ad1, this.a1I.dh()) : aD.kn ? this.a1I = new adF : (this.a1I = new acu, this.a1I.dh())
	}, this.a5w = function() {
		this.a1I = new acs, this.dp = !0
	}, this.eb = function() {
		this.a1I.act++
	}, this.kQ = function() {
		return this.a1I.act
	}, this.aV4 = function() {
		var eX = performance.now();
		eX < adG + 1e3 || (this.eW = eX, this.a1I.eb())
	}
}

function cv() {
	var aHC = 0,
		adI = !0;

	function adJ(id) {
		id = [L(552), L(553), L(554), L(555)][id];
		aN.a7m(id)
	}
	this.eb = function() {
		var eX, a8B;
		bh.eW < aHC || (aHC = bh.eW + 3e3, aD.hH) || aD.kn || bC.gU.hK(aD.es) || (eX = new Date, a8B = eX.getUTCSeconds(), adI ? a8B < 43 && (adI = !1) : a8B < 43 || (aHC += 52e3, adI = !0, (a8B = (eX.getUTCMinutes() + 2) % 60) % 10 == 0 ? aD
			.kl < 7 && adJ(0) : a8B % 10 == 5 ? 7 !== aD.kl && 10 !== aD.kl || adJ(1) : a8B % 10 == 7 ? 8 === aD.kl && adJ(2) : a8B % 10 == 2 && 9 === aD.kl && adJ(3)))
	}
}

function cp() {
	var nU, nV, nh, ni, adK = 0,
		adL = 0;

	function adN() {
		return Math.pow(Math.pow(nh - nU, 2) + Math.pow(ni - nV, 2), .5)
	}

	function adM(e) {
		nU = h.k * e.touches[0].clientX, nV = h.k * e.touches[0].clientY, nh = h.k * e.touches[1].clientX, ni = h.k * e.touches[1].clientY
	}
	this.a2k = function(e) {
		return 1 < e.touches.length ? (adL = bh.eW, adK = 3, adM(e), aL.sI(), !0) : (adK = 0, !1)
	}, this.a2l = function(e) {
		var aJj, iP, iQ;
		return 0 !== aD.a18 && 1 < e.touches.length && (adK = Math.max(adK - 1, 0), aH.nm() && (aJj = adN(), adM(e), e = adN(), iP = Math.floor((nU + nh) / 2), iQ = Math.floor((nV + ni) / 2), aS.aAE(iP, iQ, Math.max(.125, e) / Math.max(.125,
			aJj)), bh.dp = !0), !0)
	}, this.a38 = function() {
		var fF, fH;
		return !!(adK && (adK = 0, bh.eW < adL + 500)) && (fF = (nU + nh) / 2, fH = (nV + ni) / 2, aL.a32(fF, fH), aL.click(fF, fH, !0) && (bh.dp = !0), !0)
	}
}

function d6() {
	this.size = 0, this.eF = 0, this.aC = null, this.dh = function(aC) {
		this.eF = 0, this.aC = aC, this.size = aC.length
	}, this.uk = function() {
		this.aC = null
	}, this.q9 = function(size) {
		for (var fa = 0, aC = this.aC, nm = this.eF + size - 1, aB = this.eF; aB <= nm; aB++) fa |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nm - aB;
		return this.eF += size, this.eF > 8 * this.size && console.error("Unwrapper Overflow"), fa
	}, this.aVV = function(size) {
		var fS = size >> 1;
		return (1 << fS) * this.q9(size - fS) + this.q9(fS)
	}, this.aVW = function(adO) {
		return this.size === bF.aVU(adO)
	}, this.aX8 = function(xy, adP, adQ) {
		var gb = this.q9(xy);
		if (!gb) return null;
		for (var xy = Math.max(gb, adQ), g = new(adP <= 8 ? Uint8Array : adP <= 16 ? Uint16Array : Uint32Array)(xy), aB = 0; aB < gb; aB++) g[aB] = this.q9(adP);
		adQ = g[gb - 1];
		return adQ && g.fill(adQ, gb), g
	}, this.aX9 = function(xy, adR, adQ) {
		var gb = this.q9(xy);
		if (!gb) return null;
		for (var xy = Math.max(gb, adQ), g = new Array(xy), aB = 0; aB < gb; aB++) g[aB] = this.aX6(adR);
		return g.fill(g[gb - 1], gb), g
	}, this.aX6 = function(xy) {
		return bI.x5.x9(this.q9(xy))
	}, this.aX7 = function() {
		var qi = bH.tM.tN(bH.tM.tO(this.q9(30))),
			qi = bC.s0.a5Q(qi, "_", "/");
		qi = bC.s0.a5Q(qi, "-", "+");
		for (var adS = "";
			(qi.length + adS.length) % 4;) adS += "=";
		qi = "data:image/png;base64," + qi + adS;
		var aJL = new Image;
		aJL.onload = function() {
			bB.aKI.aKJ(aJL), aJL.onload = null, aJL = null
		}, aJL.src = qi
	}
}

function dP() {
	this.aYA = 0, this.aYB = 0, this.aY6 = 0, this.aY7 = 0, this.aY8 = 0, this.aY9 = 0, this.aDA = [0, 0, 0, 0], this.nl = function() {
		this.aYA = aS.zC(), this.aYB = aS.zD(), this.aY6 = -this.aYA, this.aY7 = -this.aYB, this.aY8 = h.i / iJ, this.aY9 = h.j / iJ, this.aDA[0] = Math.floor(this.aY6), this.aDA[1] = Math.floor(this.aY7), this.aDA[2] = Math.floor(this.aDA[0] +
			this.aY8 + 1), this.aDA[3] = Math.floor(this.aDA[1] + this.aY9 + 1), bd.aD7 = !0
	}
}

function cq() {
	var a8s, nG;
	this.dh = function() {
		a8s = 1, nG = 0
	}, this.eb = function() {
		0 < a8s && (nG = 0 === nG ? bh.eW + 16 : nG, a8s = (a8s -= .001 * (bh.eW - nG)) < 0 ? 0 : a8s, nG = bh.eW, bh.dp = !0)
	}, this.vf = function() {
		0 < a8s && (vg.fillStyle = "rgba(0,0,0," + a8s + ")", vg.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eF = 0, this.aC = null, this.dh = function(aC) {
		this.eF = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(adO) {
		return this.dh(new Uint8Array(this.aVU(adO))), this.aC
	}, this.uk = function() {
		this.aC = null
	}, this.a8 = function(size, a8G) {
		for (var aC = this.aC, nm = this.eF + size - 1, aB = this.eF; aB <= nm; aB++) aC[aB >> 3] |= (a8G >> nm - aB & 1) << 7 - (7 & aB);
		this.eF += size, this.eF > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aVT = function(size, a8G) {
		var fS = size >> 1,
			fB = 1 << fS;
		this.a8(size - fS, bN.fZ(a8G, fB)), this.a8(fS, a8G % fB)
	}, this.adV = function(size) {
		for (var aC = this.aC, nm = this.eF + size, aB = this.eF; aB < nm; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aVU = function(adO) {
		return adO + 7 >> 3
	}, this.adW = function(g, jj, nm, adX) {
		for (var aB = jj; aB < nm; aB++) this.a8(adX, g[aB])
	}
}

function d5() {
	this.dh = function() {
		this.g = [], this.eF = 0
	}, this.aVr = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(adY, value) {
		for (var g = this.g, nm = this.eF + adY - 1, adZ = 1 + (nm >> 3); g.length < adZ;) g.push(0);
		for (var aB = this.eF; aB <= nm; aB++) g[aB >> 3] |= (value >> nm - aB & 1) << 7 - (7 & aB);
		this.eF += adY
	}, this.dn = function(g, xy, adP) {
		var ada = bC.r9.a3u(g);
		this.a8(xy, ada);
		for (var aB = 0; aB < ada; aB++) this.a8(adP, g[aB])
	}, this.aXQ = function(g, xy, adR) {
		var ada = bC.r9.a3u(g);
		this.a8(xy, ada);
		for (var aB = 0; aB < ada; aB++) this.aXO(g[aB], adR)
	}, this.aXO = function(qi, xy) {
		var f8 = qi.length;
		this.a8(xy, f8);
		for (var aB = 0; aB < f8; aB++) this.a8(16, qi.charCodeAt(aB))
	}, this.aXP = function(a40) {
		var adb = (a40 = a40.toDataURL()).split(",");
		if (adb.length < 2) console.log("error 266");
		else {
			a40 = bC.s0.a5Q(a40 = adb[adb.length - 1], "/", "_"), a40 = bC.s0.a5Q(a40, "\\+", "-");
			var a40 = bC.s0.a5Q(a40, "=", ""),
				xI = bI.tM.xF(a40),
				f8 = xI.length;
			this.a8(30, f8);
			for (var aB = 0; aB < f8; aB++) this.a8(6, xI[aB])
		}
	}
}
a(), self.aiCommand746 = function(fa) {
	0 === fa ? bv() : 1 !== fa || !a0 || 1 !== a0.id || a0.e0 < 14 || bL.fb()
}, setTimeout(bv, 1e4), window.onload = function() {
	bv()
};