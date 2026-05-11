var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, t, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, a0, bk, bl, bm, o, bn, bo, bp, bq, br, bs, bt, bu, fz, g0, g1, g2, g3, g4, g5, g6, g7, g8, g9, gA, gB, iK,
	im, io, a95, m5, kF, a2e, vf, zE, aDA, a5p, a5q, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "   ", "flex", "hidden", "1em", "span", "Data", "territorial.io",
		"0.5em", " / ", "pre", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined",
		"break-word", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap",
		"mouseleave", "inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ",
		"   Gold: ", "🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover",
		"mouseout", "long", "logo", "loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed",
		"Reload", "Patreon", "Offensive Name", "Interest", "Hate Speech", "False Reporter", "Cheater", "CRTOR", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "ADMIN", "@room", "255,255,255", "1v1",
		"1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
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
	this.dt = 1121;
	this.rVersion = 20, this.dx = 0, this.dh = function() {
		this.dy = 2;
		this.n = "2.15.22", this.e0 = "10 May 2026 [" + this.n + "]";
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
		eB = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"],
		eD = (this.eC = [
			["", "", ""],
			["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
			["1 Minute", "1 Hour", "1 Day"],
			["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
			["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
			["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
		], ["Offensive Name", "Hate Speech", "Block Account", "Ban IP", "Gold Seizure"]);
	this.eE = function(id, eF, eG) {
		eF = this.eH(eF);
		return +(e8[eF][id] > eG)
	}, this.eH = function(eF) {
		for (var aB = 0; aB < e7.length; aB++)
			if (e7[aB] <= eF) return aB;
		return e7.length
	}, this.eI = function(eF) {
		return e6[this.eH(eF)]
	}, this.eJ = function(id, eK) {
		return e9[id].replace(new RegExp("x", "g"), eK)
	}, this.eL = function(id, eK) {
		return eB[id].replace(new RegExp("x", "g"), eK)
	}, this.eM = function(id, eN) {
		return ("CRTOR" === eN || "ADMIN" === eN ? eD : this.eC[5])[id]
	}
}

function dI() {
	this.eO = new eP, this.eQ = new eR, this.dh = function() {
		a0.a1.eS()
	}, this.eT = function() {
		return bl.eU.data[160].value
	}
}

function eP() {
	var eV = 12e3;
	this.show = function(eW) {
		return !eW && !bW.eT() && (0 === a0.id ? bW.eQ.show() : !(bh.eX < eV) && (eW = 1 === a0.id ? 72e4 : 108e4, eV = bh.eX + eW, 2 === l.dy) && a0.a1.eZ(Math.floor(eW)))
	}
}

function eR() {
	var ea = null,
		eV = 2e4,
		eb = 0;
	this.ec = function() {
		bh.eX < eV || (eV = bh.eX + 1e4, 0 !== a0.id) || ea || bW.eT() || (b0.y.ed(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b0.ee.ef(5) : eV = bh.eX + 1e3)
	}, this.eg = function(eh) {
		ea = eh
	}, this.show = function() {
		return !(!ea || bh.eX < eb) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eb = bh.eX + 6e4, (new ei).show(ea.ej, ea.colors, ea.id), !(ea = null)))
	}
}

function cZ() {
	this.ek = new el
}

function el() {
	this.em = function(en) {
		var eq;
		return bU.eo(bU.ep) && aD.data.passableMountains && (eq = ac.er(en), this.es(aD.et, eq) || this.eu(aD.et, eq)) && 0 !== (eq = function(fF) {
			for (var fG = bO.fH(fF), fI = bO.fJ(fF), max = Math.max(bU.fK, bU.fL) - 2, fM = max * max, fN = !1, fO = 0, fP = 0; fP < max; fP++) {
				var fQ, ev = function(fG, fI, fP) {
					for (var aB = 0; aB <= fP; aB++)
						for (var fS = -1; fS < 2; fS += 2)
							for (var fT = -1; fT < 2; fT += 2)
								for (var eh = 0; eh < 2; eh++) {
									var en = function(fG, fI) {
										if (bO.fV(fG, fI)) {
											fG = bO.fW(fG, fI), fI = bO.ez(fG);
											if (ac.f4(fI) && ac.fX(fI)) return fG
										}
										return 0
									}(fG + eh * fS * aB + (1 - eh) * fT * fP, fI + eh * fT * fP + (1 - eh) * fS * aB);
									if (en) return en
								}
					return 0
				}(fG, fI, fP);
				ev && (fQ = bO.fR(fG, fI, ev)) < fM && (fO = ev, fM = fQ, fN || (fN = !0, max = Math.floor(Math.sqrt(fQ)) + 1))
			}
			return fO
		}(bO.ex(en))) && (en = bO.ez(eq), ac.f0(en) || (en = ac.f1(en)) !== aD.et && bu.f2(en, aD.et)) ? eq : 0
	}, this.f3 = function(player, ev) {
		ev = bO.ez(ev);
		if (ac.f4(ev)) {
			if (ac.f0(ev)) bQ.f5[0] = aD.f6;
			else if (ac.f1(ev) !== bQ.f5[0]) return !1;
			for (var f7 = function(en) {
					var fB = ac.fB,
						f7 = [];
					loop: for (var fC = 3; 0 <= fC; fC--) {
						var fD = en + fB[fC];
						if (ac.fE(fD)) {
							for (var id = ac.er(fD), aB = 0; aB < f7.length; aB++)
								if (id === f7[aB]) continue loop;
							bQ.fA[f7.length] = fD, f7.push(id)
						}
					}
					return f7
				}(ev), f9 = f7.length, aB = 0; aB < f9; aB++)
				if (this.es(player, f7[aB]) || this.eu(player, f7[aB])) return bQ.fA[0] = bQ.fA[aB], !0
		}
		return !1
	}, this.es = function(player, eq) {
		for (var fY = ag.fY[player], f9 = fY.length, fZ = Math.max(bN.fa(f9, 12), 1), fB = ac.fB, aB = 0; aB < f9; aB += fZ)
			for (var ey = fY[aB], fC = 3; 0 <= fC; fC--) {
				var fD = ey + fB[fC];
				if (ac.fE(fD) && eq === ac.er(fD)) return !0
			}
		return !1
	}, this.eu = function(player, eq) {
		for (var fY = ag.fY[player], f9 = fY.length, fB = ac.fB, aB = 0; aB < f9; aB++)
			for (var ey = fY[aB], fC = 3; 0 <= fC; fC--) {
				var fD = ey + fB[fC];
				if (ac.fE(fD) && eq === ac.er(fD)) return !0
			}
		return !1
	}
}

function dB() {
	this.g = new Array(4), this.fd = new Uint16Array(2), this.fe = new Uint16Array(2), this.ff = new Int32Array(2), this.fg = new Uint32Array(2), this.fh = new Uint32Array(2), this.fi = new Uint8Array(4), this.fj = new Uint8Array(4), this.fA =
		new Uint32Array(4), this.fk = new Uint32Array(5), this.f5 = new Uint32Array(8), this.fl = new Uint32Array(8), this.fm = new Uint16Array(16), this.fn = new Uint16Array(512), this.fo = new Uint16Array(512), this.fp = new Uint16Array(512), this
		.fq = new Uint16Array(0), this.dh = function() {
			var f9 = bU.fK * bU.fL;
			this.fq.length !== f9 && (this.fq = new Uint16Array(f9))
		}, this.fr = function(g, fs) {
			return g[0] = fs, g
		}, this.ft = function(g, fs, fu) {
			return g[0] = fs, g[1] = fu, g
		}, this.fv = function(g, fs, fu, fw) {
			return g[0] = fs, g[1] = fu, g[2] = fw, g
		}, this.fx = function(g, fs, fu, fw, fy) {
			return g[0] = fs, g[1] = fu, g[2] = fw, g[3] = fy, g
		}
}

function gC() {
	g5 = 0, g6 = 2048, g7 = new Uint32Array(4 * g6), g8 = 0, g9 = new Uint32Array(g6), gA = new Uint8Array(bU.fK * bU.fL)
}

function gD(player) {
	g0 = player, gB = !1, gE(), gF();
	for (var aB = ad.gG(g0) - 1; 0 <= aB; aB--) fz = aB, gH();
	gB && gI()
}

function gI() {
	bu.gJ(), bu.gK()
}

function gH() {
	g4 = ad.gL(g0, fz), g1 = ad.gM(g0, fz), g2 = ad.gN(g0, fz), gO(), (0 !== g5 && (gQ(), gR()) ? gS : gP)()
}

function gR() {
	if (!((g3 = bN.fa(g1, g5)) > aD.gT)) {
		if (!g2) return !1;
		var gU = g5 * (1 + aD.gT);
		g1 += bC.gV.gW(g0, gU - g1), g3 = bN.fa(g1, g5)
	}
	return !0
}

function gQ() {
	for (var aB = g5 - 1; 0 <= aB; aB--) gA[bN.fa(g7[aB], 4)] = 0
}

function gP() {
	1 === ad.gG(g0) && aF.gX(g0);
	var eY = bC.gV.gY(g0, g1);
	bf.gZ(g0, g1 - eY, 12), ad.ga(g0, fz)
}

function gE() {
	for (var player = g0, gb = ag.gb, f9 = Math.min(gb[player].length, g6), gc = 0, gd = g9, aB = f9 - 1; 0 <= aB; aB--) gd[gc++] = gb[player][aB];
	g8 = gc
}

function gF() {
	for (var aB = ag.gb[g0].length - 1; 0 <= aB; aB--) ac.f4(ag.gb[g0][aB]) && ac.ge(ag.gb[g0][aB], g0);
	ag.gb[g0] = []
}

function gO() {
	g5 = 0, (g4 === aD.f6 ? gf : gg)()
}

function gg() {
	for (var gh, gi, aB, fB = ac.fB, fC = 3; 0 <= fC; fC--)
		for (aB = g8 - 1; 0 <= aB; aB--) gh = g9[aB] + fB[fC], gi = bN.fa(gh, 4), 0 === gA[gi] && ac.gj(gh) && ac.f1(gh) === g4 && (gA[gi] = 1, g7[g5++] = gh)
}

function gf() {
	for (var gh, gi, aB, fB = ac.fB, fC = 3; 0 <= fC; fC--)
		for (aB = g8 - 1; 0 <= aB; aB--) gh = g9[aB] + fB[fC], gi = bN.fa(gh, 4), 0 === gA[gi] && ac.f0(gh) && (gA[gi] = 1, g7[g5++] = gh)
}

function gS() {
	gk() ? (gl(), g4 !== aD.f6 && gm()) : gP()
}

function gm() {
	bu.gn(), bu.go(ag.gp[g4]), bu.go(ag.gq[g4]), bU.eo(bU.ep) && bu.go(ag.fY[g4]), bu.gr(ag.gb[g4]), bu.gs(ag.gq[g4]), bu.gs(ag.fY[g4]), bu.gt(), bu.gu()
}

function gl() {
	gB = !0, ad.gv(g0, fz, g1), ad.gw(g0, fz), ag.gx[g0] += g5, bu.gy(), gz()
}

function gk() {
	return (g4 === aD.f6 ? h0 : h1)()
}

function h1() {
	var h2 = g5 * aD.gT,
		h3 = h4(),
		h5 = h6(),
		h3 = h2 + 2 * h3 + h5,
		h8 = g3 * g5;
	return h3 < h8 ? (g1 -= h3, bf.gZ(g0, h3, 13), h9(h3 - h2, h5), !0) : g2 && 0 === h5 ? (g1 -= h8, h8 += bC.gV.gW(g0, h3 - h8 + 1), bf.gZ(g0, h8, 13), h9(h8 - h2, 0), !0) : (g1 -= h8, bf.gZ(g0, h8, 13), h9(h8 - h2, h5), !1)
}

function h9(h8, h5) {
	if (0 < h5) {
		if (h8 <= h5) return bf.gZ(g4, h8, 13), void ad.hA(g4, g0, h5 - h8);
		ad.hA(g4, g0, 0), h8 -= h5
	}
	h8 = bN.fa(h8, 2), h8 = Math.min(ag.hB[g4], h8), bf.gZ(g4, h8, 13), ag.hB[g4] -= h8
}

function h6() {
	return ad.hC(g4, g0)
}

function h4() {
	return bN.fa(g5 * ag.hB[g4], 1 + bN.fa(10 * ag.gx[g4], 16))
}

function h0() {
	var hD = g5 * aD.gT;
	return g1 -= hD, bf.gZ(g0, hD, 13), !0
}

function gz() {
	for (var aB = g5 - 1; 0 <= aB; aB--) ag.gb[g0].push(g7[aB]), ag.gp[g0].push(g7[aB]), ac.ge(g7[aB], g0)
}

function dG() {
	var hE = 0,
		hF = 0;
	this.hG = function(fG, fI) {
		hE = fG, hF = fI
	}, this.hH = function(code) {
		var hO, hQ, ev;
		aD.hI || aM.hJ || (bC.gV.hK(0) || bC.gV.hK(1)) && bC.gV.hL(aD.et) && (aR.hM(hE, hF) ? aR.hN = !1 : aP.hM(hE, hF) || (hO = bO.hP(hE), hQ = bO.hR(hF), ev = bO.fW(hO, hQ), bO.hS(hO, hQ) && (0 === code ? function(ev) {
			var hW, en, ey;
			aD.hX ? -1 !== (hW = bt.hY(ev)) && bA.hZ.ha(ev) : (en = bO.ez(ev), ac.fE(en) ? (hW = am.ek.em(en)) && (ey = bO.ez(hW), ey = ac.f0(ey) ? aD.f6 : ac.f1(ey), bA.hZ.hc(aR.hd(), hW, ey)) : (hW = bt.he(ev)) < 0 || (en = bO
				.ez(hW), ac.f0(en) ? bu.hf(aD.et) ? bA.hZ.hg(aR.hd(), aD.f6) : ad.gG(aD.et) && b1.hh(aD.f6, aR.hd()) : (ey = ac.f1(en), bu.f2(ey, aD.et) && (bu.hi(aD.et, ey) ? bA.hZ.hg(aR.hd(), ey) : ad.gG(aD.et) && b1.hh(
					ey, aR.hd())))))
		}(ev) : 1 === code ? function(ev) {
			bP.hj.hk(aD.et, ev) && bA.hZ.hl(aR.hd(), bQ.fl[7])
		}(ev) : 2 === code && function(ev) {
			bP.hm.hn(aD.et, ev) && bA.hZ.ho(aR.hd())
		}(ev))))
	}, this.hp = function() {
		if (!aD.hI && !aM.hJ && bC.gV.hK(1)) {
			var gh = aD.et;
			if (bC.gV.hL(gh)) {
				var f9 = ad.gG(gh);
				if (f9 < 1) ! function() {
					var gh = aD.et;
					if (bu.hf(gh)) bA.hZ.hg(aR.hd(), aD.f6);
					else
						for (var fB = ac.fB, gp = ag.gp, f9 = gp[gh].length, hz = Math.floor(Math.random() * f9), aB = 0; aB < f9; aB++)
							for (var i0 = 3; 0 <= i0; i0--) {
								var i1 = gp[gh][(aB + hz) % f9] + fB[i0];
								if (ac.gj(i1)) {
									i1 = ac.f1(i1);
									if (i1 !== gh && (!aD.i3 || bu.f2(gh, i1))) return bA.hZ.hg(aR.hd(), i1)
								}
							}
				}();
				else {
					for (var hr = 0, hs = ad.gM(gh, 0), aB = 1; aB < f9; aB++) {
						var ht = ad.gM(gh, aB);
						ht < hs && (hs = ht, hr = aB)
					}
					bA.hZ.hg(aR.hd(), ad.gL(gh, hr))
				}
			}
		}
	}, this.hu = function() {
		if (!aD.hI && !aM.hJ && bC.gV.hL(aD.et) && bC.gV.hK(1)) return aw.hv ? aw.hw(aD.et) ? void bA.hZ.hx(1) : void 0 : void(aw.hy(aD.et) && bA.hZ.hu())
	}
}

function i4(i5, size, i6, i7, font) {
	var aB, iA = .2,
		canvas = document.createElement("canvas"),
		iB = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = i5, canvas.height = i5, iB.font = size + font, iB.textAlign = "center", iB.textBaseline = "middle", iB.fillStyle = "red", aB = 0; aB < i6.length; aB++) iB.fillText(i6[aB], .5 * i5, .5 * i5);
	return -1 < (canvas = function(i8) {
		var aB, eF, fC = i8.data;
		for (aB = fC.length - 4; 0 <= aB; aB -= 4)
			if (eF = fC[aB], i7 <= eF) return Math.floor(aB / (4 * i5));
		return -1
	}(iB.getImageData(0, 0, i5, i5))) && (iA = (canvas - .5 * i5 + .1 * size) / size), Math.max(iA, 0)
}

function d9() {
	this.iD = new Int16Array(4), this.iE = new Int16Array(4), this.iF = null, this.dh = function() {
		var aB;
		for (this.iD[0] = -bU.fK, this.iD[1] = 1, this.iD[2] = bU.fK, this.iD[3] = -1, this.iF = new Int16Array([-bU.fK, 1 - bU.fK, 1, bU.fK + 1, bU.fK, bU.fK - 1, -1, -bU.fK - 1]), aB = 0; aB < 4; aB++) this.iE[aB] = 4 * this.iD[aB]
	}, this.iG = function() {
		return bN.iH(Math.floor(.15 * (1 + .25 * a0.a1.iI()) * h.iJ / iK), 4, 128)
	}, this.iL = function(en, id) {
		for (var iM = this.iE, aB = 0; aB < 4; aB++) {
			var ey = en + iM[aB];
			if (ac.iN(ey) && ac.er(ey) === id) return !0
		}
		return !1
	}, this.iO = function(player, en) {
		return !ac.f0(en) && player === ac.f1(en)
	}, this.fR = function(hO, hQ, ev) {
		return (hO -= this.fH(ev)) * hO + (hQ -= this.fJ(ev)) * hQ
	}, this.iP = function(iQ, iR, iS) {
		iQ = this.iU(iQ) - this.iV(iS), iR = this.iX(iR) - this.iY(iS);
		return Math.sqrt(iQ * iQ + iR * iR)
	}, this.iZ = function(ia, ib) {
		var iT = this.fH(ia) - this.fH(ib),
			ia = this.fJ(ia) - this.fJ(ib);
		return ~~Math.sqrt(iT * iT + ia * ia + .5)
	}, this.ic = function(ia, ib) {
		var iT = this.fH(ia) - this.fH(ib),
			ia = this.fJ(ia) - this.fJ(ib);
		return iT * iT + ia * ia
	}, this.ie = function(ig, ih, ii, ij) {
		return (ig -= ii) * ig + (ih -= ij) * ih
	}, this.ik = function(gh, il) {
		return bN.fa(il * ag.hB[gh], 1e3)
	}, this.iU = function(iQ) {
		return 16 * (iQ + im) / iK
	}, this.iX = function(iR) {
		return 16 * (iR + io) / iK
	}, this.ip = function(fC) {
		return 16 * fC / iK
	}, this.hP = function(iQ) {
		return Math.floor((iQ + im) / iK)
	}, this.hR = function(iR) {
		return Math.floor((iR + io) / iK)
	}, this.hS = function(hO, hQ) {
		return 1 <= hO && 1 <= hQ && hO < bU.fK - 1 && hQ < bU.fL - 1
	}, this.fH = function(ev) {
		return ev % bU.fK
	}, this.fJ = function(ev) {
		return bN.fa(ev, bU.fK)
	}, this.fW = function(hO, hQ) {
		return hQ * bU.fK + hO
	}, this.iq = function(hO, hQ) {
		return 4 * this.fW(hO, hQ)
	}, this.ir = function(ev) {
		return this.fV(this.fH(ev), this.fJ(ev))
	}, this.fV = function(hO, hQ) {
		return 0 < hO && hO < bU.fK - 1 && 0 < hQ && hQ < bU.fL - 1
	}, this.ez = function(ev) {
		return ev << 2
	}, this.ex = function(en) {
		return en >> 2
	}, this.is = function(ev) {
		return bU.fK * this.fJ(ev) * 256 + (this.fH(ev) << 4)
	}, this.it = function(ev) {
		return this.is(ev) + 8 + (bU.fK << 7)
	}, this.iu = function(iS) {
		return bU.fK * (this.iY(iS) >> 4) + (this.iV(iS) >> 4)
	}, this.iv = function(iS) {
		iS = this.iu(iS);
		return (this.fH(iS) >> 5) + bP.iw.ix * (this.fJ(iS) >> 5)
	}, this.iV = function(iS) {
		return iS % (bU.fK << 4)
	}, this.iY = function(iS) {
		return bN.fa(iS, bU.fK << 4)
	}, this.iy = function(ev, i0) {
		return ev + this.iD[i0]
	}, this.iz = function(en, i0) {
		return en + this.iE[i0]
	}, this.j0 = function(ia, ib) {
		var iT = this.fH(ib) - this.fH(ia),
			ib = this.fJ(ib) - this.fJ(ia);
		return Math.abs(iT) >= Math.abs(ib) ? 1 + 2 * (iT < 0) : 2 * (0 < ib)
	}, this.j1 = function(player) {
		return this.fW(ag.j2[player] + ag.j3[player] >> 1, ag.j4[player] + ag.j5[player] >> 1)
	}, this.j6 = function(player) {
		return this.fW(ay.j7(ag.j2[player], ag.j3[player]), ay.j7(ag.j4[player], ag.j5[player]))
	}
}

function cn() {
	this.j8 = new j9, this.jA = new jB, this.jC = new jD, this.performance = new jE, this.jF = new jG, this.jH = new jI, this.jJ = new jK, this.jL = new jM, this.jN = new jO, this.dh = function() {
		this.j8.dh(), this.jC.dh(), this.performance.dh(), this.jF.dh(), this.jH.dh()
	}, this.ec = function() {
		this.performance.ec(), this.j8.ec(), this.jC.jP()
	}
}

function jG() {
	var jQ, jS = new Uint16Array(8);

	function ja(size, player) {
		for (var aB = ag.gb[player].length - 1; size <= aB; aB--) ac.jg(ag.gb[player][aB], player)
	}
	this.dh = function() {
		jQ = 0
	}, this.jT = function(player, jU) {
		return bQ.f5[1] = ag.gb[player].length, bQ.f5[0] === aD.f6 ? ao.jF.jV(player) : this.jW(player, bQ.f5[0]), (0 !== bQ.f5[1] || 0 !== ag.gb[player].length) && !(!jU && bQ.f5[1] === ag.gb[player].length || (bQ.f5[0] === aD.f6 ? ag.jX[
			player]++ : ag.jY[player]++, 0))
	}, this.jZ = function(player) {
		ja(bQ.f5[1], player), ad.eg(player, bQ.fg[0], bQ.f5[0]), aF.jb(player, !1)
	}, this.jc = function(player, jd, f9, hs) {
		var je = bN.fa(12 * ag.hB[player], 1024);
		hs -= hs >= bN.fa(ag.hB[player], 2) ? je : 0, ja(f9, player), ad.eg(player, hs, jd), ag.hB[player] -= hs + je, aF.jb(player, !1)
	}, this.jW = function(player, jd) {
		for (var i0, fB = ac.fB, aB = ag.gp[player].length - 1; 0 <= aB; aB--)
			if (ac.jf(ag.gp[player][aB]))
				for (i0 = 3; 0 <= i0; i0--)
					if (ac.gj(ag.gp[player][aB] + fB[i0]) && ac.f1(ag.gp[player][aB] + fB[i0]) === jd) {
						ag.gb[player].push(ag.gp[player][aB]);
						break
					}
	}, this.jV = function(player) {
		for (var fB = ac.fB, aB = ag.gp[player].length - 1; 0 <= aB; aB--)
			if (ac.jf(ag.gp[player][aB]))
				for (var i0 = 3; 0 <= i0; i0--)
					if (ac.f0(ag.gp[player][aB] + fB[i0])) {
						ag.gb[player].push(ag.gp[player][aB]);
						break
					}
	}, this.jh = function(player, ji) {
		var aB, fS, i0, i2, f9 = ag.gp[player].length,
			jj = 256 <= f9 ? 12 : 32 <= f9 ? 6 : 1,
			jk = f9 - 1 - ay.jl(jj),
			fB = ac.fB;
		jQ = 0;
		loop: for (aB = jk; 0 <= aB; aB -= jj)
			for (i0 = 3; 0 <= i0; i0--)
				if ((i2 = ac.f0(ag.gp[player][aB] + fB[i0]) ? aD.f6 : ac.f1(ag.gp[player][aB] + fB[i0])) === aD.f6 || ac.gj(ag.gp[player][aB] + fB[i0]) && i2 !== player && (ji || bu.f2(player, i2))) {
					for (fS = jQ - 1; 0 <= fS; fS--)
						if (jS[fS] === i2) continue loop;
					if (jS[jQ] = i2, 8 <= ++jQ) return !0
				}
		return 0 < jQ
	}, this.jm = function(player, ji) {
		var aB, i0, i2, fB = ac.fB;
		for (jQ = 0, aB = ag.gp[player].length - 1; 0 <= aB; aB--)
			for (i0 = 3; 0 <= i0; i0--)
				if ((i2 = ac.f0(ag.gp[player][aB] + fB[i0]) ? aD.f6 : ac.f1(ag.gp[player][aB] + fB[i0])) === aD.f6 || ac.gj(ag.gp[player][aB] + fB[i0]) && i2 !== player && (ji || bu.f2(player, i2))) return jS[jQ++] = i2, !0;
		return !1
	}, this.jn = function() {
		for (var fT, aB = jQ - 1; 0 <= aB; aB--)
			if (jS[aB] === aD.f6) {
				for (jQ--, fT = aB; fT < jQ; fT++) jS[fT] = jS[fT + 1];
				return !0
			} return !1
	}, this.jo = function(player) {
		for (var fT, aB = jQ - 1; 0 <= aB; aB--)
			if (ad.jp(player, jS[aB]))
				for (jQ--, fT = aB; fT < jQ; fT++) jS[fT] = jS[fT + 1];
		return 0 === jQ
	}, this.jq = function() {
		for (var aB = jQ - 1; 0 <= aB; aB--)
			if (bC.gV.jr(jS[aB])) return !0;
		return !1
	}, this.js = function() {
		for (var aB = jQ - 1; 0 <= aB; aB--) bC.gV.jr(jS[aB]) || (jS[aB] = jS[--jQ]);
		return 0 < jQ
	}, this.jt = function(player) {
		for (var fT, ju = jS[0], jv = ag.hB[ju] + ad.hC(ju, player), aB = jQ - 1; 1 <= aB; aB--)(fT = ag.hB[jS[aB]] + ad.hC(jS[aB], player)) < jv && (ju = jS[aB], jv = fT);
		return ju
	}, this.jw = function(player) {
		var j, jx = jS[0];
		if (1 !== jQ)
			for (var jy = bN.fa(ag.j3[player] + ag.j2[player], 2), jz = bN.fa(ag.j5[player] + ag.j4[player], 2), fP = k0(jy - bN.fa(ag.j3[jx] + ag.j2[jx], 2)) + k0(jz - bN.fa(ag.j5[jx] + ag.j4[jx], 2)), aB = jQ - 1; 1 <= aB; aB--)(j = k0(jy - bN
				.fa(ag.j3[jS[aB]] + ag.j2[jS[aB]], 2)) + k0(jz - bN.fa(ag.j5[jS[aB]] + ag.j4[jS[aB]], 2))) < fP && (fP = j, jx = jS[aB]);
		return jx
	}, this.k1 = function() {
		for (var k2 = jS, k3 = k2[0], hB = ag.hB, k4 = hB[k3], aB = jQ - 1; 1 <= aB; aB--) {
			var gh = k2[aB],
				fT = hB[gh];
			k4 < fT && (k3 = gh, k4 = fT)
		}
		return k3
	}, this.k5 = function() {
		return jS[ay.jl(jQ)]
	}
}

function jI() {
	function kL(player, jd, kB) {
		3 <= kB && 2142 < bh.kR() && (jd === aD.f6 || ag.hB[jd] < bN.fa(ag.hB[player], 20)) && aE.kG(player, 20)
	}

	function kO(player, hs, jd, kB) {
		3 <= kB && kB < 6 && bN.fa(ag.hB[player], 8) > ag.hB[jd] && (hs = Math.max(bN.fa(11 * ag.hB[jd], 5), bN.fa(ag.hB[player], 10)));
		kB = ag.gb[player].length;
		ao.jF.jW(player, jd), ao.jF.jc(player, jd, kB, hs)
	}

	function kK(player, hs) {
		var jd = aD.f6,
			f9 = ag.gb[player].length;
		ao.jF.jV(player), ag.gb[player].length !== f9 && ao.jF.jc(player, jd, f9, hs)
	}
	this.k6 = new Uint8Array(aD.f6), this.dh = function() {
		this.k6.fill(0)
	}, this.k7 = function(player, hs) {
		var k9, kB, kC, kD;
		ad.k8(player) && (k9 = ae.kA(player), 3 <= (kB = aE.hs[player]) && kB < 6 && (hs = Math.max(ag.hB[player] - k9, hs)), kC = ag.gq[player].length, kD = ag.gp[player].length, 30 * ag.gx[player] > aD.kE && kF[player] < 10 && 100 * kD <= kC &&
			aE.kG(player, 10), aD.i3 ? function(player, hs, kB, k9) {
				var jd;
				if (ao.jF.jh(player, !1) || ao.jF.jm(player, !1)) {
					if (!ao.jF.jo(player))
						if (ao.jF.jn()) kK(player, hs), kL(player, aD.f6, kB);
						else {
							if (ay.kM(aE.kN[kB])) jd = ao.jF.jt(player);
							else {
								if (ao.jF.jq() && ay.kM(aE.kP[kB]) && ao.jF.js(), 6 === kB) return kO(player, hs, ao.jF.k5(), kB);
								jd = ao.jF.jw(player)
							}
							kO(player, hs, jd, kB), kL(player, jd, kB)
						}
				} else bP.kI.ec(player) || ao.jJ.ec(player) || ! function(player, hs, kB, k9) {
					var k6 = ao.jH.k6;
					k6[player] = 0;
					var kS = bi.f7[player];
					if (0 !== kS) {
						var kT = ag.hB[player],
							gx = ag.gx;
						if (player < aD.kU && (hs = kT), !(kT < gx[player] || 5 === kB && kT < k9 || 4 === kB && kT < bN.fa(k9, 2))) {
							bj.kV(kS);
							for (var f9 = bQ.fe[0], fn = bQ.fn, aB = ay.jl(f9), fT = 0; fT < f9; fT++) {
								var eh = fn[(fT + aB) % f9];
								if (k6[eh]) return bA.kW.kX(player, eh, hs)
							}
							var kY = bP.y.kY;
							for (fT = 0; fT < f9; fT++)
								if (eh = fn[(fT + aB) % f9], kY[eh] && eh !== player) return bA.kW.kX(player, eh, hs)
						}
					}
				}(player, hs, kB, k9)
			}(player, hs, kB, k9) : (!kD || kC && (kC < kD && !ay.jl(10) || 100 * kD <= kC && ay.jl(3) || !ay.jl(8))) && bP.kI.ec(player) || function(player, hs, kB) {
				ao.jF.jh(player, !0) || ao.jF.jm(player, !0) ? ao.jF.jo(player) || (ao.jF.jn() ? kK(player, hs) : ay.kM(aE.kN[kB]) ? kO(player, hs, ao.jF.jt(player), kB) : 5 === kB ? kO(player, hs, ao.jF.k1(), kB) : (ao.jF.jq() && ay.kM(aE
					.kP[kB]) && ao.jF.js(), kO(player, hs, 6 === kB ? ao.jF.k5() : ao.jF.jw(player), kB))) : ao.jJ.ec(player)
			}(player, hs, kB))
	}
}

function c7() {
	var kZ = new Uint8Array(aD.f6),
		ka = new Uint16Array(aD.f6),
		kb = new Uint16Array(aD.f6),
		kc = new Uint8Array(aD.f6),
		kd = (this.hs = new Uint8Array(aD.f6), new Uint16Array(aD.f6)),
		ke = new Uint16Array(aD.f6);

	function kt(aB) {
		kZ[aB] = 1 + bN.fa(kd[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kf = null, this.kP = [97, 94, 70, 40, 20, 0, 100], this.kg = [500, 450, 400, 300, 80, 50, 100], this.kN = [0, 0, 5, 25, 50, 100, 0], this.kh = [60, 74, 112, 200, 256, 512, 512], this.ki = [1, 2, 3, 4, 6, 8, 1], this.kj = [500, 450, 400, 300,
		80, 50, 100
	], this.kk = [100, 150, 250, 400, 600, 1e3, 100], this.di = function() {
		this.kf = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dh = function() {
		kZ.fill(0), ka.fill(0), kb.fill(0), kc.fill(0), this.hs.fill(0), kd.fill(0), ke.fill(0);
		var kl = aD.kU;
		if (9 === aD.km) this.kn();
		else if (aD.ko)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kq - 1; 0 <= aB; aB--) {
					var i1 = aB + kl;
					this.hs[i1] = aD.data.botDifficultyData[i1]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kq - 1; 0 <= aB; aB--) this.hs[i1 = aB + kl] = aD.data.botDifficultyTeam[bi.kr[bi.f7[i1]]];
				else if (1 === aD.data.botDifficultyType) {
			var ks = this.kf.length;
			for (aB = aD.kq - 1; 0 <= aB; aB--) this.hs[aB + kl] = aB % ks
		} else
			for (ks = aD.data.botDifficultyValue, aB = aD.kq - 1; 0 <= aB; aB--) this.hs[aB + kl] = ks;
		else
			for (var kp = 8 === aD.km ? 1 : 0, aB = aD.kq - 1; 0 <= aB; aB--) this.hs[aB + kl] = kp;
		for (aB = 0; aB < kl; aB++) this.hs[aB] = 6;
		var f9 = aD.f6;
		for (aB = 0; aB < f9; aB++) this.hs[aB] <= 2 ? (kc[aB] = 5, kd[aB] = ke[aB] = 1040, 0 === this.hs[aB] ? (ka[aB] = 980, kb[aB] = 980) : 1 === this.hs[aB] ? (ka[aB] = 980, kb[aB] = 920, kd[aB] = ke[aB] = 1100) : (ka[aB] = 825, kb[aB] =
			750)) : this.hs[aB] <= 4 ? (kc[aB] = 1 + ay.jl(20), 3 === this.hs[aB] ? (ka[aB] = kb[aB] = 500, kd[aB] = ke[aB] = 1e3) : (ke[aB] = 250 + ay.jl(1501), kd[aB] = 500 + ay.jl(501), ka[aB] = 300 + ay.jl(201), kb[aB] = 100 + ay.jl(
			201))) : this.hs[aB] <= 5 ? (kd[aB] = 1e3, ke[aB] = 1e3, kc[aB] = 35 + ay.jl(16), ka[aB] = 300 + ay.jl(201), kb[aB] = 50 + ay.jl(101)) : (kd[aB] = ke[aB] = 800, kc[aB] = 5, ka[aB] = 10, kb[aB] = 250), kt(aB)
	}, this.kn = function() {
		for (var en = az.ku, kl = aD.kU, aB = en - 1; 0 <= aB; aB--) this.hs[aB + kl] = 0;
		for (var fT = 0; fT < 6; fT++) {
			for (aB = en + az.kv[fT] - 1; en <= aB; aB--) this.hs[aB + kl] = fT;
			en += az.kv[fT]
		}
	}, this.kG = function(gh, value) {
		kZ[gh] = Math.min(value, kZ[gh])
	}, this.ec = function(gh) {
		0 == --kZ[gh] && ! function(gh) {
			(function(gh) {
				kd[gh] !== ke[gh] && (kd[gh] += kd[gh] < ke[gh] ? 3 : -3);
				ka[gh] !== kb[gh] && (ka[gh] += ka[gh] < kb[gh] ? kc[gh] : -kc[gh], ka[gh] = (Math.abs(ka[gh] - kb[gh]) <= kc[gh] ? kb : ka)[gh]);
				kZ[gh] = bN.fa(kd[gh], 10)
			})(gh), ao.jH.k7(gh, bN.fa(ka[gh] * ag.hB[gh], 1e3))
		}(gh)
	}, this.ky = function(gh, gc) {
		kd[gh] = ke[gh] = gc
	}
}

function jD() {
	var kz = new Uint16Array(aD.f6);

	function lE(player, lC) {
		for (var f9 = bQ.fe[0], fm = bQ.fm, lQ = -1, lR = aD.f6, aB = 0; aB < f9; aB++) {
			var fP, gh = fm[aB];
			bu.f2(player, gh) && (fP = bO.ic(lC, bO.j1(gh)), -1 === lQ || fP < lQ) && (lQ = fP, lR = gh)
		}
		return lR
	}

	function lG(lD, lC) {
		if (lD === aD.f6) return 0;
		var gq = ag.gq[lD],
			lP = gq.length;
		if (0 === lP) return 0;
		for (var f9 = Math.min(lP, 10), lR = 0, lQ = bO.ic(gq[lR] >> 2, lC), aB = 0; aB < f9; aB++) {
			var i1 = ay.jl(lP),
				fP = bO.ic(gq[i1] >> 2, lC);
			fP < lQ && (lQ = fP, lR = i1)
		}
		return gq[lR] >> 2
	}

	function lL(player, lC, jd, lT) {
		var lU;
		(lT === aD.f6 || (lU = bO.j1(jd), lT = bO.j1(lT), bO.ic(lC, lU) < bO.ic(lC, lT))) && (kz[player] = jd)
	}
	this.dh = function() {
		kz.fill(aD.f6)
	}, this.jP = function() {
		if (bh.kR() % 109 == 9 && !(al.l0 < 20) && aD.i3 && !(bj.l1() < bN.fa(8 * aD.kE, 10))) {
			var l2 = bj.l3();
			if (bi.kr[l2]) {
				bj.l4(l2);
				var f9 = bQ.fe[0];
				if (0 !== f9)
					for (var g = bQ.fn, l5 = al.l5, l0 = al.l0, l6 = kz, i1 = ay.jl(f9), aB = 0; aB < l0; aB++) {
						var hb = l5[aB],
							l7 = g[i1];
						bC.gV.l8(hb, l7) && 512 === l6[hb] && (l6[hb] = l7, i1 = (i1 + 1) % f9)
					}
			}
		}
	}, this.ec = function(player) {
		var lC, lF, lD, l9 = function(player) {
			var jd = kz[player];
			if (jd !== aD.f6) {
				if (bC.gV.lS(jd) && ag.gq[jd]) return jd;
				kz[player] = aD.f6
			}
			return aD.f6
		}(player);
		return function(player) {
			for (var lO = al.l5, lP = al.l0, f9 = Math.min(lP, lP < 17 && 5 === ay.jl(20) ? 1 : 16), gi = ay.jl(lP), fm = bQ.fm, gq = ag.gq, gc = 0, aB = 0; aB < f9; aB++) {
				var gh = lO[(aB + gi) % lP];
				gh !== player && gq[gh].length && (fm[gc++] = gh)
			}
			bQ.fe[0] = gc
		}(player), 0 !== bQ.fe[0] && (0 < (lF = lG(lD = lE(player, lC = bO.j6(player)), lC)) && bP.lH.lI(player, bP.lJ.lK(lF, lC)) ? (lL(player, lC, lD, l9), !0) : 0 < (lD = function(player, lC) {
			for (var f9 = bQ.fe[0], fm = bQ.fm, l6 = kz, gi = 0, aB = 0; aB < f9; aB++) {
				var gh = fm[aB],
					gh = l6[gh];
				gh !== aD.f6 && bC.gV.lS(gh) && player !== gh && bu.f2(player, gh) && (fm[gi++] = gh)
			}
			return 0 !== (bQ.fe[0] = gi) ? lG(lE(player, lC), lC) : 0
		}(player, lC)) && bP.lH.lI(player, bP.lJ.lK(lD, lC)) ? (lL(player, lC, ac.f1(lD << 2), l9), !0) : !!(0 < (lF = lG(l9, lC)) && bP.lH.lI(player, bP.lJ.lK(lF, lC))))
	}
}

function jK() {
	function lY(player) {
		for (var fY = ag.fY[player], f9 = fY.length, fZ = Math.max(bN.fa(f9, 12), 1), fB = ac.fB, eF = ay.jl(f9), aB = 0; aB < f9; aB += fZ)
			for (var ey = fY[(aB + eF) % f9], fC = 3; 0 <= fC; fC--) {
				var fD = ey + fB[fC];
				if (ac.fE(fD)) return {
					en: fD,
					id: ac.er(fD),
					gh: player
				}
			}
		return null
	}

	function ld(player, lf) {
		var hs = bC.gV.lg(player, aE.kj[aE.hs[player]]);
		ag.gb[player].push(lf.en), ad.eg(player, hs, lf.gh), aF.jb(player, !0)
	}
	this.ec = function(player) {
		return !!bU.eo(bU.ep) && !!aD.data.passableMountains && 0 !== ag.fY[player].length && function(player) {
			var lX = lY(player);
			if (null === lX) return !1;
			! function(player) {
				for (var l5 = al.l5, l0 = al.l0, f9 = Math.min(l0, 12), gi = ay.jl(l0), fm = bQ.fm, fY = ag.fY, gc = 0, aB = 0; aB < f9; aB++) {
					var gh = l5[(aB + gi) % l0];
					gh !== player && fY[gh].length && bu.f2(player, gh) && (fm[gc++] = gh)
				}
				bQ.fe[0] = gc
			}(player);
			var la = function(eq) {
				for (var f9 = bQ.fe[0], fm = bQ.fm, aB = 0; aB < f9; aB++) {
					var lf = lY(fm[aB]);
					if (null !== lf && lf.id === eq) return lf
				}
				return null
			}(lX.id);
			return null !== la ? (ld(player, la), !0) : function(player, eq) {
				var f9 = ao.j8.le;
				if (0 !== f9)
					for (var en = ao.j8.eU[ay.jl(f9)] << 2, fB = ac.fB, fC = ay.jl(4);;) {
						if (en += fB[fC], ac.fE(en)) {
							if (ac.er(en) === eq) return ld(player, {
								en: en,
								gh: aD.f6
							}), !0;
							break
						}
						if (!ac.f0(en)) break
					}
				return !1
			}(player, lX.id)
		}(player)
	}
}

function jB() {
	this.ec = function(player) {
		return bP.lH.lI(player, function(player) {
			var f9 = ao.j8.le;
			if (0 === f9) return -1;
			for (var lP = Math.min(f9, ao.performance.li ? f9 : 10), eU = ao.j8.eU, jk = bN.fa(ay.random() * f9, ay.value(100)), e = jk + lP, lj = ay.j7(ag.j2[player], ag.j3[player]), lk = ay.j7(ag.j4[player], ag.j5[player]), lR = -1,
					fP = bO.ie(0, 0, bU.fK, bU.fL), aB = jk; aB < e; aB++) {
				var gi = aB % f9,
					ll = bO.fR(lj, lk, eU[gi]);
				ll < fP && (fP = ll, lR = gi)
			}
			return -1 !== lR ? function(ev, lj, lk) {
				var hO = bO.fH(ev),
					hQ = bO.fJ(ev),
					iT = lj - hO,
					iW = lk - hQ;
				Math.abs(iT) >= Math.abs(iW) ? (iW = 0, iT = Math.sign(iT)) : (iT = 0, iW = Math.sign(iW));
				iT === iW && (iT = 1);
				for (;;) {
					if (hO += iT, hQ += iW, !bO.fV(hO, hQ)) break;
					if (ev = bO.fW(hO, hQ), ac.iN(bO.ez(ev))) return ev
				}
				return -1
			}(eU[lR], lj, lk) : -1
		}(player))
	}
}

function jM() {
	this.ec = function(player) {
		var ln = function(player) {
			for (var lq = bP.lq.ls(), f9 = lq.length, lP = Math.min(f9, 32), i1 = ay.jl(f9), aB = 0; aB < lP; aB++) {
				var ln = (aB + i1) % f9,
					lp = lq[ln],
					ia = lp[0],
					ib = lp[lp.length - 1];
				if (bP.lJ.lt(player, ia) && bP.lJ.lu(player, ib)) return ln;
				if (bP.lJ.lt(player, ib) && bP.lJ.lu(player, ia)) return 0 <= (ln = bP.lq.lv(ib, ia)) ? ln : bP.lq.lw() ? -1 : bP.lq.lx(bP.lq.ly(lp))
			}
			return -1
		}(player);
		return -1 !== ln && (ln = bP.lq.get(ln), !bP.lJ.lr(player, ln)) && (bQ.g[0] = ln, !0)
	}
}

function jE() {
	this.li = 0, this.dh = function() {
		this.li = 0
	}, this.ec = function() {
		if (!this.li && bh.kR() % 30 == 7 && bC.gV.m1(90) && (ao.performance.li = 1)) {
			if (aD.i3) {
				var l2 = bj.l3();
				if (bi.kr[l2]) {
					bj.kV(l2);
					var g = bQ.fn,
						f9 = bQ.fe[0];
					if (0 !== f9)
						for (var m4 = Math.min(100 + 10 * (f9 - 1), 400), aB = 0; aB < f9; aB++) aE.ky(g[aB], m4)
				}
			}
			aE.ky(m5[0], 100)
		}
	}
}

function j9() {
	var m6 = 0,
		m7 = 0,
		m8 = 300,
		m9 = 300,
		mA = 0;
	this.le = 0, this.eU = new Uint32Array(512), this.dh = function() {
		m7 = m6 = 0, this.le = 0, mA = 0
	}, this.ec = function() {
		if (function() {
				var f9 = ao.j8.le;
				if (0 === f9) return 1;
				var eU = ao.j8.eU;
				if (bh.kR() % 35 == 6) {
					for (var aB = f9 - 1; 0 <= aB; aB--) ac.f0(eU[aB] << 2) || (f9--, eU[aB] = eU[f9]);
					ao.j8.le = f9
				}
				return f9 < eU.length
			}())
			if (m8 <= m6) {
				var mE = ao.j8.le;
				if (mE) {
					if (bh.kR() % 350 != 1) return;
					if (mA !== mE) return void(mA = mE);
					if (!bC.gV.jr(m5[0])) return
				} else if (bh.kR() % 12 != 8) return;
				bC.gV.mF() || ao.j8.dh()
			} else {
				var aB, i = bU.fK,
					mG = i - 2,
					mE = mG * (bU.fL - 2),
					mH = m8,
					eU = ao.j8.eU,
					lP = ao.j8.le,
					mI = eU.length,
					gi = Math.min(m7 + mH * ((1 + 19 * ao.performance.li) * m9), mE);
				for (aB = m7; aB < gi; aB += mH) {
					var en = 4 * (aB % mG + (bN.fa(aB, mG) + 1) * i + 1);
					if (ac.f0(en) && (eU[lP] = en >> 2, ++lP === mI)) {
						aB += mH;
						break
					}
				}(m7 = aB) >= mE && (m7 = ++m6), ao.j8.le = lP
			}
	}
}

function jO() {
	this.ec = function() {
		if (bh.kR() % 51 == 45)
			for (var f9 = bP.y.mK, mL = bP.y.mL, mM = bP.y.mM, mN = bP.y.mN, mO = bP.y.mO, kk = aE.kk, hs = aE.hs, aB = 0; aB < f9; aB++) {
				var lp, player, mS, mP = mL[aB];
				mP % 64 == 6 || (lp = mM[aB], (player = bP.lJ.mQ(lp[lp.length - 1])) < 0) || !bC.gV.l8(player, mO[aB] >> 3) || ay.jl(1e3) >= kk[hs[player]] || ! function(mW, lp) {
					for (var f9 = lp.length - 1, mX = bP.y.mY[mW], fP = 0, aB = mX + 1; aB < f9; aB++) fP += bO.iZ(lp[aB], lp[aB + 1]);
					return (fP += bO.iZ(bO.iu(bP.y.mZ[mW]), lp[mX + 1])) <= 60
				}(aB, lp) || (mS = mN[aB], 64 <= mP && bP.mT.mU(player, mS)) || function(player, lp, mS, mW, mP) {
					bP.ma.mb(player) && bC.gV.mc(player, aE.kg[aE.hs[player]], 32, 0) && (bP.y.mL[mW] = 64 + mP % 64, bP.mT.eg(mS, bP.y.md), bQ.g[0] = bP.lq.ly(lp), bQ.fl[1] = 6, bC.gV.me(player), bP.y.mf(player))
				}(player, lp, mS, aB, mP)
			}
	}
}

function mg() {
	aN.ec(), af.ec(), aW.mh(), b0.y.ec()
}

function mi() {
	b1.ec(), aG.ec(), an.ec(), ae.ec(), b4.ec(), aF.ec(), ao.ec(), bP.y.ec(), al.mj(), aV.ec(), az.ec(), bX.ec(), af.ec(), af.mk(), aW.ec(), bR.ec(), aU.ec(), aP.ec(), b8.ml(), aN.ec(), b5.ec(), aR.ec(), aw.ec(), bf.ec(), bj.ec(), b0.y.ec(), b0.mm
		.ec(), t.ec(), bW.eQ.ec(), bB.ec(), bh.ec()
}

function mn() {
	aH.ec(), aX.ec(), aQ.ec(), av.ec(), bE.ec(), b7.ec(), b8.ec(), ax.mo()
}

function mp() {
	aV.mq(!1), aP.mq(), aW.mq(!1), aU.mq(), aR.mq(), aw.mq(), af.mq(!1), bj.mr()
}

function ms() {
	af.mq(!1) && (bh.dp = !0), b0.y.ec()
}

function c8() {
	var mt, mu, mv;

	function mw(player) {
		var eY;
		64 === mv[player] ? mv[player] = 6 : (eY = ag.gx[player], mv[player] = eY < 1e3 ? 3 : eY < 1e4 ? 2 : eY < 6e4 ? 1 : 0)
	}
	this.dh = function() {
		mt = 0, mu = new Uint16Array(aD.f6), mv = new Uint8Array(aD.f6)
	}, this.ec = function() {
		for (var aB = mt - 1; 0 <= aB; aB--) 64 === mv[mu[aB]] ? mw(mu[aB]) : 0 == mv[mu[aB]]-- && (mw(mu[aB]), gD(mu[aB]));
		bC.gV.lS(aD.et) && (bf.n0[7] = Math.max(ag.gx[aD.et], bf.n0[7]))
	}, this.gX = function(player) {
		for (var fS, aB = mt - 1; 0 <= aB; aB--)
			if (player === mu[aB]) {
				for (mt--, fS = aB; fS < mt; fS++) mu[fS] = mu[fS + 1];
				return
			}
	}, this.jb = function(player, n1) {
		for (var aB = mt - 1; 0 <= aB; aB--)
			if (player === mu[aB]) return;
		mu[mt++] = player, mv[player] = n1 ? 2 : 64
	}
}

function c9() {
	var size, kI;
	this.dh = function() {
		size = aD.kq, kI = new Uint16Array(aD.f6);
		for (var kU = aD.kU, aB = aD.kq - 1; 0 <= aB; aB--) kI[aB] = kU + aB
	}, this.ec = function() {
		ao.jN.ec();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.n4[kI[aB]]) {
				fS = void 0;
				var fS = aB;
				size--, kI[fS] = kI[size]
			} else aE.ec(kI[aB])
	}, this.n3 = function(gh) {
		kI[size++] = gh
	}
}

function cA() {
	var n6, n7, n8, n9, nA, nB, nC, nD, nE, nF, nG, nH, nI, nJ = !1,
		nK = !1;

	function nL(nM) {
		nH = bh.eX, n8 = n9 = n7 = 0, nA = (nI = 33) / nM, n6 = 1 / (nM / nI / 4), nB = (h.i / 2 + im) / iK, nC = (h.j / 2 + io) / iK, nD = iK
	}

	function nT(aB) {
		var nV; - 1 !== aB && (aB = bO.iu(bP.y.mZ[aB]), nV = bO.fH(aB) - 15, aB = bO.fJ(aB) - 15, aH.nP(nV, aB, 29 + nV, 29 + aB))
	}

	function ng(eK) {
		Math.abs(Math.log(nG / nD)) < .125 && (nG = eK * nD)
	}

	function nf(nV, nW, ni, nj) {
		nE = (nV + ni + 1) / 2, nF = (nW + nj + 1) / 2;
		ni = h.i / (ni - nV + 1), nV = h.j / (nj - nW + 1);
		nG = .9 * (ni < nV ? ni : nV)
	}
	this.nN = function() {
		return nJ
	}, this.nO = function() {
		nL(1), this.nP(0, 0, bU.fK - 1, bU.fL - 1), aD.hX || aD.hI || this.nQ(aD.et, 3e3, !0, .3)
	}, this.nR = function(player, nS) {
		nT(bP.lJ.nU(player, nS))
	}, this.nQ = function(player, nM, nX, zoom) {
		aD.nY || nJ && !nX && nK || (0 === ag.gx[player] ? nT(bP.lJ.nZ(player)) : (aS.na = !1, nK = nX, nL(nM), function(player) {
			nE = (ag.j2[player] + ag.j3[player] + 1) / 2, nF = (ag.j4[player] + ag.j5[player] + 1) / 2
		}(player), function(zoom, player) {
			var iT = ag.j3[player] - ag.j2[player] + 1,
				player = ag.j5[player] - ag.j4[player] + 1,
				fS = h.i / iT,
				fT = h.j / player,
				fS = (nG = fS < fT ? fS : fT, 0 !== zoom ? zoom : iT < 20 && player < 20 ? .5 : .9);
			nG *= fS, ng(7 / 8)
		}(zoom, player), nJ = !0, ar.nd()))
	}, this.ne = function(nM) {
		aD.hI || aD.nY || (aS.na = !1, nK = !1, nL(nM), nf(0, 0, bU.fK - 1, bU.fL - 1), ng(7 / 8), nJ = !0, ar.nd())
	}, this.nP = function(nV, nW, ni, nj) {
		nJ = !1, nf(nV, nW, ni, nj), iK = nG, aS.nk(nE, h.i / 2), aS.nl(nF, h.j / 2), bc.nm(), bh.dp = !0
	}, this.nn = function() {
		return !(nJ && nK || (nJ = !1))
	}, this.ec = function() {
		var nq, nr, fC, nu;
		nJ && (n7 < .5 ? n9 < nA && (n9 += nA * n6, n8 = n7) : 1 - n8 < n7 && (n9 = (n9 -= nA * n6) < nA * n6 ? nA * n6 : n9), nH = nH >= bh.eX ? bh.eX - 1 : nH, fC = bh.eX - nH, n7 = 1e3 < fC || 1 < (n7 += n9 * fC / nI) ? 1 : n7, nH = bh.eX,
			fC = iK, nq = im, nr = io, fC = (iK = nD * Math.pow(nG / nD, n7)) / fC, nu = 1 - (nD * Math.pow(nG / nD, 1 - n7) - nD) / (nG - nD), aS.nk(nB + nu * (nE - nB), h.i / 2), aS.nl(nC + nu * (nF - nC), h.j / 2), af.zoom(fC, (nq * fC -
				im) / (1 - fC), (nr * fC - io) / (1 - fC)), bc.nm(), 1 <= n7 && (nJ = !1, bd.nv = !0), bh.dp = !0)
	}
}

function c2() {
	var eh = bC.color;
	this.nw = eh.nx(0, 0, 0), this.ny = eh.nz(0, 0, 0, .7), this.o0 = eh.nz(0, 0, 0, .5), this.o1 = eh.nz(0, 0, 0, .85), this.o2 = eh.nz(0, 0, 0, .75), this.o3 = eh.nz(0, 0, 0, .6), this.o4 = eh.nz(0, 0, 0, .35), this.o5 = eh.nx(255, 255, 255), this
		.o6 = eh.nz(255, 255, 255, .3), this.o7 = eh.nz(255, 255, 255, .6), this.o8 = eh.nz(255, 255, 255, .4), this.o9 = eh.nz(255, 255, 255, .25), this.oA = eh.nz(255, 255, 255, .85), this.oB = eh.nz(255, 255, 255, .75), this.oC = eh.nz(255, 255,
			255, .15), this.oD = eh.nz(255, 255, 255, .11), this.oE = eh.nx(128, 128, 128), this.oF = eh.nz(64, 64, 64, .75), this.oG = eh.nz(88, 88, 88, .83), this.oH = eh.nz(60, 60, 60, .85), this.oI = eh.nz(80, 60, 60, .85), this.oJ = eh.nx(170,
			170, 170), this.oK = eh.nx(200, 235, 245), this.oL = eh.nx(30, 255, 30), this.oM = eh.nx(0, 200, 0), this.oN = eh.nx(128, 255, 128), this.oO = eh.nz(10, 65, 10, .75), this.oP = eh.nz(0, 255, 0, .6), this.oQ = eh.nz(0, 255, 0, .5), this
		.oR = eh.nz(0, 200, 0, .5), this.oS = eh.nz(0, 100, 0, .75), this.oT = eh.nz(0, 60, 0, .8), this.oU = eh.nz(0, 255, 0, .3), this.oV = eh.nz(0, 180, 0, .6), this.oW = eh.nz(0, 120, 0, .85), this.oX = eh.nx(0, 120, 0), this.oY = eh.nz(0, 70, 0,
			.85), this.oZ = eh.nx(190, 230, 190), this.oa = eh.nx(0, 255, 0), this.ob = eh.nx(255, 120, 120), this.oc = eh.nx(255, 160, 160), this.od = eh.nx(255, 70, 70), this.oe = eh.nx(230, 0, 0), this.og = eh.nz(220, 0, 0, .6), this.oh = eh.nz(
			255, 100, 100, .8), this.oi = eh.nz(100, 0, 0, .85), this.oj = eh.nz(60, 0, 0, .85), this.ok = eh.nz(200, 0, 0, .6), this.ol = eh.nz(120, 0, 0, .85), this.om = eh.nx(255, 70, 10), this.on = eh.nx(230, 190, 190), this.oo = eh.nx(255, 0,
		0), this.op = eh.nx(255, 0, 255), this.oq = eh.nz(60, 0, 60, .85), this.or = eh.nz(0, 60, 60, .85), this.os = eh.nz(10, 60, 60, .9), this.ot = eh.nz(0, 96, 96, .75), this.ou = eh.nx(0, 255, 255), this.ov = eh.nx(160, 160, 255), this.ow = eh
		.nz(0, 40, 90, .75), this.ox = eh.nz(0, 0, 255, .6), this.oy = eh.nx(200, 200, 255), this.oz = eh.nz(50, 50, 255, .83), this.p0 = eh.nz(20, 90, 150, .75), this.p1 = eh.nz(10, 10, 120, .75), this.p2 = eh.nx(255, 120, 100), this.p3 = eh.nz(255,
			255, 0, .5), this.p4 = eh.nz(255, 255, 150, .2), this.p5 = eh.nx(255, 255, 0), this.p6 = eh.nx(255, 255, 200), this.p7 = eh.nz(200, 200, 0, .6), this.p8 = eh.nz(140, 120, 0, .75), this.p9 = eh.nz(180, 160, 40, .75), this.pA = eh.nz(70,
			50, 20, .85), this.pB = eh.nz(30, 30, 0, .85), this.pC = eh.nz(60, 60, 0, .85), this.pD = eh.nx(255, 255, 100), this.pE = eh.nx(255, 255, 140), this.pF = eh.nz(255, 140, 0, .75), this.pG = eh.nz(70, 40, 0, .85), this.pH = eh.nx(255, 150,
			0), this.pI = eh.nz(255, 200, 80, .85), this.pJ = eh.nz(0, 0, 0, 0), this.pK = eh.nz(255, 255, 255, 0), this.pL = eh.nz(254, 254, 254, 0)
}

function d2() {
	this.hZ = new pM, this.gV = new pN, this.pO = new pP, this.pQ = new pR, this.kW = new pS
}

function pM() {
	this.ha = function(ev) {
		aD.ko ? bA.pO.ha(aD.et, ev) : b0.pT.pU(ev)
	}, this.hg = function(il, jd) {
		aD.ko ? bA.pO.hg(aD.et, il, jd) : b0.pT.pV(il, jd)
	}, this.pW = function(il, pX) {
		aD.ko ? bA.pO.pY(aD.et, il, pX) : b0.pT.pZ(il, pX)
	}, this.hl = function(il, ev) {
		ev = (ev << 3) + bQ.fl[6];
		aD.ko ? bA.pO.hl(aD.et, il, ev) : bP.ma.mb(aD.et) && b0.pT.pb(il, ev)
	}, this.ho = function(il) {
		849 === il && (il = 850);
		var nS = bQ.fl[3];
		aD.ko ? bA.pO.ho(aD.et, il, nS) : bP.hm.pc(aD.et, nS) && b0.pT.pd(il, nS)
	}, this.pe = function(nS) {
		aD.ko ? bA.pO.pe(aD.et, nS) : b0.pT.pd(849, nS)
	}, this.pf = function(jd) {
		aD.ko ? bA.pO.pf(aD.et, jd) : b0.pT.pg(jd)
	}, this.ph = function(pi) {
		aD.ko ? bA.pO.pj(aD.et, pi) : b0.pT.pk(pi)
	}, this.hx = function(pl) {
		aD.ko ? bA.pO.hx(aD.et, pl) : b0.pT.pm(pl)
	}, this.pn = function() {
		aD.ko ? bA.pO.pn(aD.et) : b0.pT.po()
	}, this.hu = function() {
		aD.ko ? bA.pO.hu(aD.et) : b0.pT.pg(513)
	}, this.hc = function(il, ev, jd) {
		aD.ko ? bA.pO.hc(aD.et, il, ev, jd) : b0.pT.pp(il, ev, jd)
	}
}

function pS() {
	this.kX = function(player, pX, hs) {
		bC.gV.pq(player, hs, pX) && (ae.pW(player, pX), !bC.gV.jr(pX)) && ao.jH.k6[pX] && ao.jH.k6[pX]--
	}, this.pr = function(player, pX, hs) {
		bC.gV.ps(hs, pX) ? an.eg(pX, bQ.fg[0]) && (bs.pt(player, pX, bQ.fg[0], 1), bC.gV.gY(pX, bQ.fg[0]), bf.pu(player, pX), af.pv(pX, bQ.fg[0])) : bf.gZ(player, hs, 12)
	}
}

function pN() {
	this.pw = function(pi, player) {
		aN.ph(aD.et, player, pi), b0.pT.px(pi, player)
	}, this.py = function(player) {
		aN.pz(player, 0), b0.pT.q0(player)
	}, this.q1 = function(q2, player) {
		aN.q3(q2, player), b0.pT.q4(q2, player)
	}, this.q5 = function() {
		aD.ko || aD.hI || b0.q6.q5()
	}
}

function pR() {
	this.ec = function(aC) {
		var id, fs, nn;
		for (bJ.dh(aC), bJ.eG += 2, nn = 8 * bJ.size; bJ.eG + 8 <= nn;) id = bJ.q7(4), fs = bJ.q7(9), 0 === id ? this.q8(id, fs, bJ.q7(22)) : 1 === id ? this.q8(id, fs, bJ.q7(10), bJ.q7(10)) : 2 === id ? this.q8(id, fs, bJ.q7(10), bJ.q7(9)) :
			3 === id ? this.q8(id, fs, bJ.q7(10), bJ.q7(27)) : 4 === id ? this.q8(id, fs, bJ.q7(10), bJ.q7(16)) : 5 === id || 6 === id ? this.q8(id, fs, bJ.q7(10)) : 7 === id ? this.q8(id, fs, bJ.q7(1)) : 10 === id ? this.q8(id, fs, bJ.q7(20), bJ
				.q7(22)) : this.q8(id, fs)
	}, this.q9 = [], this.qA = function() {
		for (var qC = 0, qD = 0, qE = 0, qF = 0, qG = 0, qH = 0, aB = 0; aB < 512; aB++) qC += ag.n4[aB], qD += ag.gx[aB], qE += ag.hB[aB], qF += bP.y.kY[aB];
		qG += bP.y.mK, qH += al.l0, this.q9.push(qE % 1073741824 * 4 + (qC + qD + qF + qG + qH) % 4)
	}, this.q8 = function(id, fs, fu, fw) {
		0 === id ? bA.pO.ha(fs, fu) : 1 === id ? bA.pO.hg(fs, fu, fw) : 2 === id ? bA.pO.pY(fs, fu, fw) : 3 === id ? bA.pO.hl(fs, fu, fw) : 4 === id ? bA.pO.ho(fs, fu, fw) : 5 === id ? bA.pO.pf(fs, fu) : 6 === id ? bA.pO.pj(fs, fu) : 7 === id ?
			bA.pO.hx(fs, fu) : 8 === id ? bA.pO.pn(fs) : 9 === id ? bA.pO.qI(fs) : 10 === id && bA.pO.hc(fs, fu >> 10, fw, fu % 1024)
	}
}

function pP() {
	this.ha = function(player, ev) {
		bC.gV.hK(0) && bC.gV.hL(player) && bO.ir(ev) && (bB.qJ.qK(0, player, ev), aD.qL.eg(player, ev))
	}, this.hg = function(player, il, jd) {
		bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.qM(player, jd) && bC.gV.mc(player, il, 12, 0) && bC.gV.qN(player, jd) && ((jd = ad.jp(player, bQ.f5[0])) || ad.k8(player)) && (ag.qO[player]++, bB.qJ.qK(1, player, il, bQ.f5[0]), ao.jF.jT(player,
			jd)) && (bC.gV.me(player), bf.qP(player, il), ao.jF.jZ(player))
	}, this.pY = function(player, il, pX) {
		bC.gV.hK(1) && bC.gV.hL(player) && aD.i3 && bC.gV.qM(player, pX) && bC.gV.qQ(player, pX) && bC.gV.pq(player, bC.gV.ik(player, il), pX) && an.eg(pX, bQ.fg[0]) && (bB.qJ.qK(2, player, il, pX), ae.pW(player, pX))
	}, this.hl = function(player, il, pa) {
		bQ.fl[1] = 7 & pa;
		var ev = pa >> 3;
		bC.gV.hK(1) && bC.gV.hL(player) && bO.ir(ev) && bP.ma.mb(player) && bP.ma.qR(ev) && bC.gV.mc(player, il, 32, 0) && bP.lH.qS(player, ev, 1) && (bf.qT(player), bB.qJ.qK(3, player, il, pa), bC.gV.me(player), bn.qU.hl(player), bP.y.mf(
			player))
	}, this.ho = function(player, il, nS) {
		849 === il ? this.pe(player, nS) : bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.mc(player, il, 32, 0) && bP.hm.qV(player, nS) && (bf.qT(player), bB.qJ.qK(4, player, il, nS), bC.gV.me(player), bn.qU.ho(player), bP.y.mf(player))
	}, this.pe = function(player, nS) {
		bC.gV.hK(1) && bC.gV.hL(player) && bP.qW.ec(player, nS) && bB.qJ.qK(4, player, 849, nS)
	}, this.pf = function(player, jd) {
		513 === jd ? this.hu(player) : bC.gV.hK(1) && bC.gV.hL(player) && (jd = Math.min(jd, aD.f6), ad.jp(player, jd)) && (bB.qJ.qK(5, player, jd), ad.qX(player, jd))
	}, this.pj = function(player, pi) {
		(bC.gV.hK(1) || bC.gV.hK(2)) && bC.gV.hL(player) && (pi = bN.iH(pi, 0, 1023), bB.qJ.qK(6, player, pi), af.qY(player, 0, pi))
	}, this.hx = function(player, pl) {
		aw.hw(player) && (bB.qJ.qK(7, player, pl), aw.qZ(player, pl))
	}, this.pn = function(player) {
		(bC.gV.hK(0) || bC.gV.hK(1)) && bC.gV.hL(player) && aM.qa(player) && (bB.qJ.qK(8, player), bS.pn(player))
	}, this.qI = function(player) {
		bB.qJ.qK(9, player), bS.qI(player)
	}, this.hu = function(player) {
		aw.hy(player) && (bB.qJ.qK(5, player, 513), aw.hu(player))
	}, this.hc = function(player, il, ev, jd) {
		bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.qM(player, jd) && bC.gV.qN(player, jd) && bO.ir(ev) && am.ek.f3(player, ev) && (ad.jp(player, bQ.f5[0]) || ad.k8(player)) && (bB.qJ.qK(10, player, (il << 10) + bQ.f5[0], ev), jd = bC.gV.lg(player,
			il), ag.gb[player].push(bQ.fA[0]), ad.eg(player, jd, bQ.f5[0]), aF.jb(player, !0), bf.qb(player))
	}
}

function qc() {
	var qe;
	this.qd = [], this.qe = document.createElement("div"), this.qf = function(qg, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qg, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qe.appendChild(
			title), title
	}, this.qh = function(qg, marginBottom) {
		var qi = document.createElement("p");
		return qi.textContent = qg, qi.style.fontSize = "0.75em", qi.style.lineHeight = "1.2em", qi.style.marginBottom = marginBottom || "0", this.qe.appendChild(qi), qi
	}, this.qj = function(qg) {
		var qk = document.createElement("p");
		return qk.textContent = qg, qk.style.fontSize = "1em", qk.style.marginBottom = "0", qk.style.whiteSpace = "pre-wrap", qk.style.overflowWrap = "break-word", this.qe.appendChild(qk), qk
	}, this.ql = function(qm, fontSize) {
		var qe = document.createElement("div");
		return qe.innerHTML = qm, qe.style.fontSize = fontSize || "1em", qe.style.lineHeight = "1.2em", this.qe.appendChild(qe), qe
	}, this.qn = function(qo) {
		for (var qp = qo.qp, f9 = qp.length, aB = 0; aB < f9; aB++) this.qe.appendChild(qp[aB])
	}, this.qq = function(qr) {
		return this.qd.push(qr), this.qe.appendChild(qr.e), qr
	}, this.resize = function() {
		for (var f9 = this.qd.length, aB = 0; aB < f9; aB++) this.qd[aB].resize && this.qd[aB].resize()
	}, (qe = this.qe).style.position = "absolute", qe.style.height = "auto", qe.style.padding = "0.5em"
}

function qs(qt, qu) {
	var qe = document.createElement("div");

	function r2() {
		var aB, r3, j, gi, fC, qy = h.k * qe.offsetWidth,
			r4 = new Float64Array(function(qy) {
				var i = .25 * bC.qz.r0(.6) * h.iJ;
				return Math.max(Math.floor(qy / i), 1)
			}(qy)),
			r5 = be.r5,
			r6 = (qy - (r4.length + 1) * be.gap) / (r4.length * h.k);
		for (r4.fill(r5), aB = 0; aB < qu.length; aB++) r3 = (fC = qu[aB].qe).style, j = bC.r7.min(r4), gi = r4.indexOf(j), r3.top = bC.qz.r8(j), r3.left = bC.qz.r8(r5 + gi * (r6 + r5)), r3.width = bC.qz.r8(r6), bC.qz.r9(fC, 5), r4[gi] += fC
			.offsetHeight + 3 * r5;
		qe.style.height = bC.qz.r8(bC.r7.max(r4) - 2 * r5)
	}
	this.qv = qe, this.qw = qu, this.resize = function() {
		var aB;
		for (aB = 0; aB < qu.length; aB++) qu[aB].resize();
		r2(), r2()
	}, qe.style.width = "100%", qe.style.maxWidth = "100%", qt.style.lineHeight = "1.5em", qt.style.overflowX = "hidden", qt.style.overflowY = "auto";
	for (var aB = 0; aB < qu.length; aB++) qe.appendChild(qu[aB].qe);
	qt.appendChild(qe)
}

function w(rA, rB, rC, rD, rE) {
	var self, rF = document.createElement("button");

	function rM() {
		var rS;
		bL.rR() || (rS = bC.color.rT(rC), !1 !== rD && 0 < rS[0] && rS[0] < 255 && rS[0] === rS[1] && rS[0] === rS[2]) || (128 < rS[0] && 128 < rS[1] && 128 < rS[2] ? rF.style.backgroundColor = bC.color.rU(rC, -50) : rF.style.backgroundColor = bC
			.color.rU(rC, rS[3] && rS[3] < 120 ? 150 : 50))
	}

	function rL() {
		if (rD) {
			var rS = bC.color.rT(rC);
			if (rS[0] === rS[1] && rS[0] === rS[2]) return
		}
		rB && ((rS = rB(this)) ? 2 === rS && rM() : rW(this))
	}

	function rO() {
		this.style.backgroundColor = rC
	}

	function rN() {
		rW(this)
	}

	function rW(fC) {
		fC.style.backgroundColor = rC, fC.blur()
	}
	this.button = rF, this.rG = rB, this.rH = rC, this.rK = function(rP) {
		rP = 1.1 - Math.min(.01 * rA.length, .6) + .2 * rP;
		rF.style.fontSize = rP.toFixed(1) + "em"
	}, this.rJ = function(eh) {
		eh ? 1 === eh ? eh = bD.oH : 2 === eh && (rD = 1, eh = bD.oH) : (rD = 0, eh = bD.o1), this.rH = rC = eh, rF.style.backgroundColor = eh
	}, self = this, rF.innerHTML = rA, rF.style.color = rE ? bD.p5 : bD.o5, rF.style.userSelect = "none", rF.style.outline = "none", rF.style.overflowWrap = "break-word", self.rJ(rC), rF.style.border = "none", rF.style.font = "inherit", self.rK(
		0), rF.style.padding = "0em 0.3em", rF.onclick = rL, rF.addEventListener("mouseover", rM), rF.addEventListener("mouseout", rN), rF.addEventListener("focus", rM), rF.addEventListener("blur", rO)
}

function rX(rY, qt) {
	var qe;
	this.resize = function() {
		for (var aB = 0; aB < rY.length; aB++) bC.qz.r9(rY[aB].button);
		qe.style.gap = qe.style.padding = bC.qz.r8(be.r5)
	}, (qe = document.createElement("div")).style.display = "grid", qe.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qe.style.overflowY = "auto", qe.style.gridAutoRows = "5.3em", qe.style.maxHeight = "100%";
	for (var aB = 0; aB < rY.length; aB++) rY[aB].rK(1), qe.appendChild(rY[aB].button);
	qt.appendChild(qe)
}

function ra(rb, rc, rd) {
	this.fG = 0, this.fI = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bC.qz.r0(rd || .5) * rb[1] * h.iJ, h.j - 2 * be.gap), this.i = Math.min(this.j * (rb[0] / rb[1]), h.i - 2 * be.gap), this.j = rb[1] * this.i / rb[0], this.fG = be.gap + rc[0] * (h.i - this.i - 2 * be.gap), this.fI = be
			.gap + rc[1] * (h.j - this.j - 2 * be.gap)
	}, this.re = function() {
		return this.fG + .5 * this.i
	}
}

function rf(rg, rh) {
	var rq, self, ri = document.createElement("div"),
		rj = document.createElement("div"),
		rk = document.createElement("div"),
		rl = null,
		rr = (this.rm = new rn({
			value: "",
			eG: -1
		}, 0, ro, function(e) {
			e.target.value = bC.ry.rz(e.target.value), rl.rx.textContent = 127 - e.target.value.length
		}), 0),
		rs = 1,
		rt = 0,
		ru = 1048575;

	function ro() {
		rg(), rl.rx.textContent = 127
	}

	function s9(s8, qr) {
		qr && (qr.sE = 1, s8.appendChild(bp.sF.transform(qr)))
	}

	function sC(bw) {
		rs ? ri.scrollTop = ri.scrollHeight : bw && (ri.scrollTop = rt)
	}
	this.s0 = function(s1) {
			ru = 1048575, rj.textContent = "", s1 || this.mr()
		}, this.mr = function() {
			var s2 = bp.y.s3[0],
				s2 = bp.y.s5[s2],
				s6 = s2.s6,
				f9 = s6.length,
				jk = 1048575 === ru ? 0 : f9 - (s2.s7 - ru + 1048575) % 1048575;
			if (ru = s2.s7, !(f9 <= (jk = Math.max(jk, 0)))) {
				for (var s8 = document.createDocumentFragment(), aB = jk; aB < f9; aB++) s9(s8, bp.lJ.sA(s6[aB], bp.lJ.sB(s6[aB])));
				rj.appendChild(s8), sC()
			}
		}, this.sD = function(r) {
			var s8 = document.createDocumentFragment();
			s9(s8, r), rj.appendChild(s8), sC()
		}, this.show = function(qt) {
			qt.appendChild(ri), qt.appendChild(rk), this.resize(qt)
		}, this.sG = function(qt) {
			t.removeChild(qt, ri), t.removeChild(qt, rk)
		}, this.resize = function(qt) {
			rr = qt ? qt.offsetHeight : rr;
			var qt = bC.qz.sI(.04, .75),
				sJ = Math.max(qt, rr - qt),
				sK = h.i / h.k,
				sL = .7 * sK,
				sM = bC.qz.r8(rr - qt - sJ),
				sJ = (rk.style.height = bC.qz.r8(qt), ri.style.height = bC.qz.r8(sJ), h.j > h.i || a0.a1.iI() ? (rk.style.top = sM, ri.style.top = bC.qz.r8(rr - sJ), bC.qz.r9(ri, 8)) : (ri.style.top = sM, rk.style.top = bC.qz.r8(rr - qt), bC.qz.r9(
						ri, 2)), this.rm.e.style.width = bC.qz.r8(sL), this.rm.e.style.fontSize = rq.button.style.fontSize = bC.qz.r8(.5 * qt), bC.qz.r9(this.rm.e, 6), rq.button.style.left = bC.qz.r8(sL), rq.button.style.width = bC.qz.r8(sK - sL),
					.385 * qt);
			a0.a1.iI() && (sJ *= .8 - .12 * (h.i > h.j)), rj.style.marginLeft = rj.style.marginRight = bC.qz.r8(.5 * sJ), rj.style.fontSize = bC.qz.r8(sJ), sC(1)
		}, (self = this).rm.e.rv = 127, ri.style.position = "absolute", ri.style.left = "0", ri.style.width = "100%", ri.style.overflowX = "hidden", ri.style.overflowY = "auto", ri.style.font = "inherit", ri.style.backgroundColor = bD.o3, ri
		.addEventListener("scroll", function() {
			rt = ri.scrollTop, rs = rt < ri.scrollHeight - ri.clientHeight - 2 ? 0 : 1
		}), rj.style.font = "inherit", rk.style.position = "absolute", rk.style.left = "0", rk.style.width = "100%", self.rm.e.setAttribute("placeholder", L(13)), self.rm.e.style.position = "absolute", self.rm.e.style.top = "0", self.rm.e.style
		.left = "0", self.rm.e.style.height = "100%", self.rm.e.style.backgroundColor = bD.o0, self.rm.e.style.textAlign = "center", (rq = new w(L(14), ro)).button.top = "0", rq.button.style.position = "absolute", rq.button.style.height = "100%", rq
		.rJ(bD.pK), rl = new rw("127", rq.button, 1, 1), ri.appendChild(rj), rk.appendChild(self.rm.e), rk.appendChild(rq.button)
}

function sO(sP, rA, sQ) {
	function click() {
		var value = 1 - sP.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + rA, void 0 !== sP.eG ? bl.sR.sS(sP.eG, value) : sP.value = value, sQ && sQ(value)
	}
	var e;
	rA = rA || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sP.value ? "🟩 " : "⬜ ") + rA, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sT(qt, qm) {
	var qe = document.createElement("div");
	this.qv = qe, this.resize = function() {
		qe.style.padding = bC.qz.r8(be.r5), qe.style.lineHeight = bC.qz.r8(bC.qz.sI(.035))
	}, qt.style.overflowX = "hidden", qt.style.overflowY = "auto", qe.innerHTML = qm, qt.appendChild(qe)
}

function sU(sV) {
	var qe = document.createElement("div");
	this.e = qe, this.sW = sV, this.resize = function() {
		for (var f9 = sV.length, aB = 1; aB < f9; aB++) bC.qz.r9(sV[aB], 4)
	};
	var aB, f9 = sV.length;
	for (qe.style.width = "100%", qe.style.height = "2.7em", qe.style.marginTop = "0.6em", qe.style.border = "inherit", aB = 0; aB < f9; aB++) sV[aB].style.verticalAlign = "top", sV[aB].style.width = (100 / f9).toFixed(2) + "%", sV[aB].style.height =
		"100%", sV[aB].style.fontSize = "0.75em", qe.appendChild(sV[aB])
}

function sX(sY, rC, sZ) {
	this.qe = document.createElement("div"), this.rY = sY;
	var sa = 0;
	this.resize = function(qt, sc) {
		var f9 = sY.length;
		if (!sZ)
			for (var aB = 1; aB < f9; aB++) bC.qz.r9(sY[aB].button, 4);
		for (var sd = 0, aB = 0; aB < f9; aB++) sd += sY[aB].button.offsetWidth;
		if (qt && (sa = qt.offsetWidth), sc && sd < sa)
			for (aB = 0; aB < f9; aB++) sY[aB].button.style.width = (100 * sY[aB].button.offsetWidth / sd).toFixed(2) + "%";
		else
			for (aB = 0; aB < f9; aB++) sY[aB].button.style.width = "auto";
		sc || this.resize(qt, 1)
	};
	var sb = this;
	sb.qe.style.height = sb.qe.style.maxHeight = "100%";
	for (var aB = 0; aB < sY.length; aB++) sY[aB].rJ(rC), sY[aB].button.style.height = "100%", sY[aB].button.style.padding = "0.0em 0.9em", sY[aB].button.style.whiteSpace = "pre", sb.qe.appendChild(sY[aB].button)
}

function se() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bC.qz.r9(this.e, 8, bD.oE)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sf() {
	var sk, sl, sg = document.createElement("div"),
		sh = document.createElement("div"),
		si = 0,
		sj = 0;
	this.show = function(fG, fI, qg, sm, sn, eh) {
			if (si) {
				if (!sm) return;
				this.sG()
			}
			fG === fI && -1 === fG ? (fG = sk, fI = sl) : (sk = fG, sl = fI);
			var so = Math.floor(bC.qz.sI(.018)),
				sn = (fG = Math.max(so + 2, fG), sn || (sj = sm), si = 1, h.i / h.k),
				sm = (sg.style.whiteSpace = "pre", sg.textContent = qg, bC.qz.r9(sg, 5), sg.style.font = bC.qz.sq(0, bC.qz.sI(.015)), sg.style.padding = "0.3em 0.6em", sg.style.left = fG + "px", sg.style.top = "0px", document.body.appendChild(sg),
					fG + sg.offsetWidth - sn),
				qg = (0 < sm && (fG -= sm, fG = Math.max(so + 1, fG), sg.style.left = fG + "px", fG < so + 2) && (sg.style.whiteSpace = "pre-wrap"), sg.offsetHeight);
			sg.style.top = fI - qg + sj * be.ss + "px", fG -= so, sh.style.backgroundColor = bC.color.nx(eh >> 12 << 2, (eh >> 6 & 63) << 2, (63 & eh) << 2), sh.style.left = fG + "px", sh.style.top = sg.style.top, sh.style.width = so + "px", sh.style
				.height = qg + "px", bC.qz.r9(sh, 4), bC.qz.r9(sh, 8), bC.qz.r9(sh, 2), document.body.appendChild(sh)
		}, this.sG = function(st) {
			if (si) {
				if (st && sj) return 0;
				si = 0, t.removeChild(document.body, sg), t.removeChild(document.body, sh)
			}
			return 1
		}, sg.style.position = "absolute", sg.style.backgroundColor = bD.o1, sg.style.color = bD.o5, sg.style.pointerEvents = "none", sg.style.zIndex = "5", sg.style.maxWidth = "100%", sh.style.position = "absolute", sh.style.color = bD.o5, sh.style
		.pointerEvents = "none", sh.style.zIndex = "5"
}

function rn(su, type, sv, sw) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sx++, e.value = su.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bD.o5, e.style.backgroundColor = bD.ny, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sy++
		}), e.addEventListener("blur", function() {
			h.sy--, -1 !== su.eG && bl.sR.sS(su.eG, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== su.eG && bl.sR.sS(su.eG, e.value), sv ? sv() : e.blur())
		}), sw && e.addEventListener("input", function(qr) {
			sw(qr)
		})
}

function sz(qt, data, t0) {
	var f9 = data.t1.length,
		t2 = document.createElement("div"),
		t3 = document.createElement("div"),
		t4 = document.createElement("div"),
		t5 = new Array(f9),
		qu = new Array(f9),
		t6 = new Array(data.t7.length),
		t8 = bC.color.nz(70, 70, 0, .35);

	function rU() {
		this.style.backgroundColor = bC.color.rU(t8, 160)
	}

	function tF() {
		this.style.backgroundColor = t8
	}

	function r2() {
		var fS;
		for (qt.style.font = bC.qz.sq(0, bC.qz.tP(.026, .5, .03)), aB = 1; aB < t6.length; aB++) bC.qz.r9(t6[aB], 4);
		if (bC.qz.r9(t2, 2), f9) {
			for (var hb, tQ = t2.offsetWidth, tR = t4.offsetWidth, aB = 0; aB < t6.length; aB++) hb = .01 * data.tE[aB] * tR, t6[aB].style.width = (100 * hb / tQ).toFixed(2) + "%";
			var lP = data.t1[0].length;
			for (aB = 0; aB < f9; aB++)
				for (bC.qz.r9(t5[aB], 2), fS = 1; fS < lP; fS++) bC.qz.r9(qu[aB][fS], 4);
			t3.t9 && (t3.scrollTop = t3.t9)
		}
	}
	this.resize = function() {
			r2(), r2()
		}, qt.style.display = "flex", qt.style.flexDirection = "column", t3.style.overflowX = "hidden", t3.style.overflowY = "auto", t3.addEventListener("scroll", function() {
			this.t9 = this.scrollTop, t0 && t0.tA && (t.y.tB[t0.tA] = this.scrollTop)
		}),
		function() {
			var fC, aB, t1 = data.t1,
				lP = f9 ? t1[0].length : 0;
			for (aB = 0; aB < f9; aB++) {
				t5[aB] = document.createElement("div"), t5[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bC.color.nz(130, 130, 130, .35) : bD.o4
				}(aB), t5[aB].style.width = "100%", t5[aB].style.display = "flex", qu[aB] = new Array(lP);
				for (var fS = 0; fS < lP; fS++) qu[aB][fS] = fC = document.createElement("div"), fC.style.display = "flex", fC.style.justifyContent = "center", fC.style.wordBreak = "break-all", fC.style.padding = "0.4em 0em", fC.style.width = data
					.tE[fS] + "%", fC.innerHTML = t1[aB][fS].fb, 1 === t1[aB][fS].eY && (fC.name = "" + aB, fC.style.color = bD.p5, fC.style.backgroundColor = t8, fC.addEventListener("mouseover", rU), fC.addEventListener("mouseout", tF), function(fC,
						tH, tI) {
						2147483647 !== tI && fC.addEventListener("click", function() {
							bF.a7(30), bF.a8(30, tH), bJ.dh(bF.aC), this.style.backgroundColor = t8, t.u(8, t.tJ, new tK(25, {
								tL: 0,
								tH: bH.tM.tN(bH.tM.tO(5)),
								tI: tI
							}))
						})
					}(fC, t1[aB][fS].tH, t1[aB][fS].tI)), t5[aB].appendChild(fC)
			}
			for (t2.style.display = "flex", t2.style.backgroundColor = bC.color.nz(0, 120, 0, .35), aB = 0; aB < t6.length; aB++) t6[aB] = fC = document.createElement("div"), fC.style.display = "flex", fC.style.justifyContent = "center", fC.style
				.wordBreak = "break-all", fC.style.padding = "0.4em 0em", fC.style.width = data.tE[aB] + "%", fC.innerHTML = data.t7[aB], t2.appendChild(fC)
		}();
	for (var aB = 0; aB < f9; aB++) t4.appendChild(t5[aB]);
	t3.appendChild(t4), qt.appendChild(t2), qt.appendChild(t3), t0 && t0.tA && (t3.t9 = t.y.tB[t0.tA])
}

function tS() {
	var tW, tX, tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("div"),
		t4 = document.createElement("div"),
		rY = [],
		eA = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tY = [1, 2, 3, 0, 9, 10, 11];

	function ta(aB) {
		t.u(8, 0, new tK(21, {
			tc: tY[aB],
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
			this.sS(t.y.tf), document.body.appendChild(tT)
		}, this.sG = function() {
			t.removeChild(document.body, tT)
		}, this.sS = function(tf) {
			for (var tg = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rY.length; aB++) {
				var i = tf[aB];
				tW[tg[aB]][1].rx.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, th = be.gap,
				j = bC.qz.ti(.085),
				i = Math.min(4 * j, h.i - 2 * th),
				f9 = rY.length;
			for (bC.qz.tj(tT, th, h.j - th - j, i, j), bC.qz.r9(tT), bC.qz.r9(tU, 6), aB = 0; aB < f9 - 1; aB++) bC.qz.r9(rY[aB].button, 6);
			for (aB = 0; aB < f9; aB++) tW[aB][0].resize(), tW[aB][1].resize();
			for (rY[0].fG = 0, rY[0].button.style.left = bC.qz.r8(rY[0].fG), rY[0].button.style.width = bC.qz.tk(1.7 * j), aB = 1; aB < f9; aB++) rY[aB].fG = rY[aB - 1].fG + rY[aB - 1].button.offsetWidth, rY[aB].button.style.left = bC.qz.r8(rY[aB]
				.fG);
			if (!tX) {
				if (!ab.tl()) return;
				(tX = ab.get(14)).style.width = "24%", tX.style.position = "absolute", tU.appendChild(tX)
			}
			tX.style.left = bC.qz.r8(0), tX.style.top = "7%", tV.tm && (tV.scrollLeft = tV.tm)
		}, tT.style.position = "absolute", tU.style.width = "25%", tU.style.height = "100%", tU.style.backgroundColor = bD.o1, tV.style.position = "absolute", tV.style.width = "75%", tV.style.height = "100%", tV.style.backgroundColor = bD.o1, tV
		.style.top = tV.style.right = bC.qz.r8(0), bC.qz.tZ(tV), t4.style.height = t4.style.maxHeight = "100%", rY.push(new w("", function() {
			ta(0)
		}, bD.oq)), rY.push(new w("", function() {
			ta(1)
		}, bD.or)), rY.push(new w("", function() {
			ta(2)
		}, bD.oj)), rY.push(new w("", function() {
			ta(3)
		}, bD.oT)), rY.push(new w("", function() {
			ta(4)
		}, bD.pG)), rY.push(new w("", function() {
			ta(5)
		}, bD.pC)), rY.push(new w("", function() {
			ta(6)
		}, bD.pG)), tW = new Array(rY.length);
	for (var aB = 0; aB < rY.length; aB++) rY[aB].button.style.position = "absolute", tW[aB] = [new tb(eA[aB], rY[aB].button, .25, .45), new tb("", rY[aB].button, .53, .84, 1)], rY[aB].button.style.height = rY[aB].button.style.maxHeight = "100%", rY[
		aB].button.top = bC.qz.r8(0), t4.appendChild(rY[aB].button);
	tV.appendChild(t4), tT.appendChild(tU), tT.appendChild(tV)
}

function tn(tp, tq, tr, ts, rg, rh) {
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
	this.u3 = new rf(rg, rh), this.u4 = new u5(rh), this.u6 = [tp, tq, tr, ts], this.uA = function(uB) {
		uB = (uB / 10).toFixed(1) + "%";
		u0.style.width = uB, u1.innerHTML = uB
	}, this.uC = function() {
		this.u4.sG(ty), this.u3.show(ty)
	}, this.uD = function() {
		this.u3.sG(ty), this.u4.show(ty)
	}, this.uE = function() {
		return tu
	}, this.show = function() {
		document.body.appendChild(tt)
	}, this.sG = function() {
		t.removeChild(document.body, tt)
	}, this.resize = function(uF) {
		var uG = 1 - .4 * a0.a1.iI() * (h.i > 1.6 * h.j),
			uH = bC.qz.sI(.05 * uG),
			uI = h.j > h.i,
			uJ = bC.qz.sI(.06 * uG + .03 * uI),
			uK = bC.qz.sI(.08 * uG + .03 * uI),
			uL = bC.qz.sI(.04 + .02 * uI),
			uI = bC.qz.sI(.02 * uG + .01 * uI),
			uN = bC.qz.sI(.025);
		tt.style.font = bC.qz.sq(0, uN), tx.style.font = bC.qz.sq(0, .9 * uN), u2.style.font = bC.qz.sq(0, .9 * uN), uG < 1 && (uN = bC.qz.sq(0, uG * uN), tv.style.font = uN, tx.style.font = uN, u2.style.font = uN, tz.style.font = uN, tw.style
				.font = uN), tu.style.height = bC.qz.r8(uH), tu.style.font = bC.qz.sq(0, .72 * uH), bC.qz.r9(tu, 2), tv.style.top = bC.qz.r8(uH), tv.style.height = bC.qz.r8(uK), bC.qz.r9(tv, 2), tw.style.font = bC.qz.sq(0, uG * bC.qz.sI(.02)), tw
			.style.top = bC.qz.r8(uH + uK), tw.style.height = bC.qz.r8(uL), bC.qz.r9(tw, 2), tx.style.top = bC.qz.r8(uH + uK + uL), tx.style.height = bC.qz.r8(uJ), bC.qz.r9(tx, 2), ty.style.top = bC.qz.r8(uH + uK + uL + uJ), ty.style.height = bC
			.qz.r8(h.j / h.k - uH - uK - 2 * uJ - uL - uI), tz.style.top = bC.qz.r8(h.j / h.k - uJ - uI), tz.style.height = bC.qz.r8(uI), bC.qz.r9(tz, 8), u1.style.font = bC.qz.sq(0, .8 * uI), u2.style.top = bC.qz.r8(h.j / h.k - uJ), u2.style
			.height = bC.qz.r8(uJ), bC.qz.r9(u2, 8), tp.resize(tv), tq.resize(tv), tr.resize(tv), ts.resize(tv), uF ? this.u3.resize(ty) : this.u4.resize()
	};
	rg = this;
	tt.style.position = "absolute", tt.style.top = "0", tt.style.left = "0", tt.style.width = "100%", tt.style.height = "100%", tt.style.backgroundColor = bD.o4, bL.rR() || (tt.style.backdropFilter = "blur(4px)", tt.style.webkitBackdropFilter =
		"blur(4px)"), tu.style.position = "absolute", tu.style.top = "0", tu.style.left = "0", tu.style.width = "100%", tu.style.display = "flex", tu.style.alignItems = "center";
	for (var g = [tv, tw, tx, u2], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bC.qz.tZ(g[aB]);
	ty.style.position = "absolute", ty.style.left = "0", ty.style.width = "100%", ty.style.font = "inherit", tz.style.position = "absolute", tz.style.left = "0", tz.style.width = "100%", u0.style.position = "absolute", u0.style.top = "0", u0.style
		.left = "0", u0.style.height = "100%", u0.style.width = "50%", u0.style.backgroundColor = bD.oR, u1.innerHTML = "", u1.style.position = "absolute", u1.style.top = "50%", u1.style.left = "50%", u1.style.transform = "translate(-50%, -50%)", tu
		.appendChild(function() {
			var u9 = document.createElement("h1");
			return u9.textContent = L(23), u9.style.margin = "0 auto 0.15em auto", u9.style.fontFamily = "Arial Black, system-ui", u9.style.fontSize = "inherit", u9.style.fontWeight = "inherit", u9
		}()), tv.appendChild(tp.qe), tw.appendChild(tq.qe), tx.appendChild(tr.qe), tz.appendChild(u0), tz.appendChild(u1), u2.appendChild(ts.qe), tt.appendChild(tu), tt.appendChild(tv), tt.appendChild(tw), tt.appendChild(tx), tt.appendChild(ty), tt
		.appendChild(tz), tt.appendChild(u2), rg.u4.show(ty)
}

function u5(rh) {
	var tt = document.createElement("div"),
		ty = document.createElement("div");
	this.mr = function() {
			ty.textContent = "", bp.uP.uQ && bp.uP.sG(1);
			for (var s8 = document.createDocumentFragment(), uR = bp.y.s3[0], uS = bp.uS.uT[uR], uU = bp.uS.uU[uR], aB = 0; aB < uS.length; aB++) ! function(s8, qr, uW, uR) {
				var rx = document.createElement("span");
				rx.textContent = (uW ? "🟢 " : "⚪ ") + bp.lJ.uX(qr, uR), rx.style.color = bp.lJ.uY(qr.uZ), rx.style.cursor = "pointer", rx.style.margin = "0.2em 0.2em 0.2em 0.2em", rx.style.width = rx.style.maxWidth = 2 === uR ? "10em" : "9em",
					rx.style.height = rx.style.maxHeight = "1.4em", rx.style.whiteSpace = "nowrap", rx.style.overflow = "hidden", rx.style.textOverflow = "ellipsis", rx.style.font = "inherit", rx.style.display = "inline-block", bp.lJ.ua(qr) && (
						rx.style.textDecoration = "underline"), qr.ub && (rx.style.textDecorationLine = "underline", rx.style.textDecorationStyle = "dotted");
				rx.onclick = function(e) {
					rh(e, qr)
				}, bL.rR() || (rx.onmouseover = function(e) {
					bp.uP.uc(e.target, qr, 1)
				}), s8.appendChild(rx)
			}(s8, uS[aB], aB < uU, uR);
			ty.appendChild(s8)
		}, this.show = function(qt) {
			qt.appendChild(tt)
		}, this.sG = function(qt) {
			t.removeChild(qt, tt)
		}, this.resize = function() {
			ty.style.fontSize = bC.qz.r8(bC.qz.sI(.02, .3))
		}, tt.style.top = "0", tt.style.left = "0", tt.style.width = tt.style.height = "100%", tt.style.overflowX = "hidden", tt.style.overflowY = "auto", tt.style.font = "inherit", ty.style.font = "inherit", ty.style.margin = "0.4em", tt
		.appendChild(ty)
}

function ud(ue) {
	var tt = document.createElement("div"),
		rk = document.createElement("div"),
		uf = [];

	function rM() {
		bL.rR() || (this.style.backgroundColor = bC.color.rU(bD.o1, 50))
	}

	function rN() {
		this.style.backgroundColor = bD.o1
	}
	this.sS = function(uh, ui) {
			uf[2].textContent = uh + 1 + " / " + ui
		}, this.show = function(qr) {
			qr = bp.lJ.sA(qr, bp.lJ.sB(qr)), rk.appendChild(bp.sF.transform(qr)), document.body.appendChild(tt)
		}, this.resize = function() {
			var j = bC.qz.sI(.03, .5);
			tt.style.width = 10 * j + "px", tt.style.font = bC.qz.sq(1, .75 * j), bC.qz.r9(tt, 4), rk.style.top = j + "px", rk.style.font = bC.qz.sq(0, .55 * j), bC.qz.r9(rk, 2), tt.style.height = j + rk.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bC.qz.r9(uf[aB], 6), uf[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uf[aB].style.height = j + "px", bC.qz.r9(uf[aB], 2);
			uf[2].style.width = 4 * j + "px", uf[1].style.left = 2 * j + "px", uf[2].style.left = 4 * j + "px", uf[3].style.left = 8 * j + "px"
		}, this.uj = function() {
			for (var aB = 0; aB < 4; aB++) uf[aB].onclick = null, uf[aB].onmouseover = null, uf[aB].onmouseout = null;
			t.removeChild(document.body, tt), tt = rk = uf = null
		}, tt.style.position = "absolute", tt.style.color = bD.o5, tt.style.zIndex = "3", tt.style.right = "0", tt.style.top = "0", rk.style.position = "absolute", rk.style.height = "auto", rk.style.color = bD.o5, rk.style.backgroundColor = bD.o1, rk
		.style.left = "0", rk.style.width = "100%", rk.style.overflowWrap = "break-word", tt.appendChild(rk);
	for (var aB = 0; aB < 4; aB++) uf[aB] = document.createElement("div"), uf[aB].style.position = "absolute", uf[aB].style.backgroundColor = bD.o1, uf[aB].style.color = bD.o5, uf[aB].style.top = "0", uf[aB].style.display = "flex", uf[aB].style
		.justifyContent = "center", uf[aB].style.alignItems = "center", uf[aB].style.userSelect = "none", uf[aB].style.outline = "none", uf[aB].style.font = "inherit", 2 !== (uf[aB].ug = aB) && (uf[aB].onclick = ue, uf[aB].onmouseover = rM, uf[aB]
			.onmouseout = rN), tt.appendChild(uf[aB]);
	uf[0].textContent = "◀", uf[1].textContent = "▶", uf[3].textContent = "✖"
}

function uk(ue) {
	var sg = document.createElement("div");

	function rM() {
		bL.rR() || (sg.style.backgroundColor = bC.color.rU(bD.o1, 50))
	}

	function rN() {
		sg.style.backgroundColor = bD.o1
	}
	this.sS = function(ui) {
			sg.textContent = ui
		}, this.show = function() {
			document.body.appendChild(sg)
		}, this.resize = function() {
			var j = bC.qz.sI(.03, .5);
			sg.style.width = 2 * j + "px", sg.style.height = j + "px", sg.style.font = bC.qz.sq(1, .75 * j), bC.qz.r9(sg, 4), bC.qz.r9(sg, 2)
		}, this.uj = function() {
			sg.onclick = null, sg.onmouseover = null, sg.onmouseout = null, t.removeChild(document.body, sg), sg = null
		}, sg.style.position = "absolute", rN(), sg.style.color = bD.o5, sg.style.zIndex = "3", sg.style.right = "0", sg.style.top = "0", sg.style.display = "flex", sg.style.justifyContent = "center", sg.style.alignItems = "center", sg.style
		.userSelect = "none", sg.style.outline = "none", sg.onclick = ue, sg.onmouseover = rM, sg.onmouseout = rN
}

function ul(sY) {
	var tt = document.createElement("div"),
		um = document.createElement("div"),
		si = (this.fG = 0, this.fI = 0);

	function uo() {
		bp.up.sG()
	}
	this.rY = sY, this.show = function(fG, fI, ur) {
		if (si) return [0, 0];
		si = 1, this.fG = fG, this.fI = fI,
			function(self, ur) {
				var i = bC.qz.sI(.16, .7),
					j = sY.length * i / 3,
					ut = h.i / h.k,
					uu = h.j / h.k,
					nh = Math.min(1, Math.min(ut / i, uu / j));
				i *= nh, j *= nh, ur && (self.fG += bC.qz.sI(.03, .5)), self.fG = bN.iH(self.fG, 0, ut - i), self.fI = bN.iH(self.fI, 0, uu - j), um.style.left = self.fG + "px", um.style.top = self.fI + "px", um.style.width = i + "px", um.style
					.height = j + "px", um.style.font = bC.qz.sq(0, .3 * j / sY.length), bC.qz.r9(um, 5);
				for (var aB = 1; aB < sY.length; aB++) bC.qz.r9(sY[aB].button, 8)
			}(this, ur), document.body.appendChild(tt)
	}, this.sG = function() {
		si && (si = 0, tt.removeEventListener("click", uo), t.removeChild(document.body, tt))
	};
	for (var aB = 0; aB < sY.length; aB++) new rw("" + (1 + aB), sY[aB].button, 0, 1);
	tt.style.position = "fixed", tt.style.top = "0", tt.style.left = "0", tt.style.width = "100%", tt.style.height = "100%", tt.style.zIndex = "5", um.style.position = "absolute",
		function() {
			for (var uq = (100 / sY.length).toFixed(2) + "%", aB = 0; aB < sY.length; aB++) sY[aB].button.style.width = "100%", sY[aB].button.style.height = sY[aB].button.style.maxHeight = uq, sY[aB].button.style.padding = "0.0em 0.9em", um
				.appendChild(sY[aB].button)
		}(), tt.appendChild(um), tt.addEventListener("click", uo)
}

function ei() {
	var uv, uw, ux;

	function v4(aB) {
		return bC.color.nx(uw[aB][0], uw[aB][1], uw[aB][2])
	}

	function vA(fS, fT) {
		return bC.color.vK(uw[fS], uw[fT]), v4(fT)
	}

	function v2() {
		uv && (uv.remove(), uv = null)
	}
	this.show = function(ej, colors, id) {
		0 <= (ux = id) && b0.y.ed(0) && b0.ee.uy(0, id), ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = ej.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			uw = colors, (uv = document.createElement("div")).style.position = "fixed", uv.style.top = "0", uv.style.left = "0", uv.style.width = "100%", uv.style.height = "100%", uv.style.backgroundColor = bC.color.nz(uw[0][0], uw[0][1], uw[0][
				2], .6), uv.style.zIndex = "6", uv.onclick = function(e) {
				e.target === uv && v2()
			},
			function(ej) {
				var i5, v3 = document.createElement("div");
				v3.style.position = "absolute", v3.style.display = "flex", v3.style.flexDirection = "column", v3.style.top = "50%", v3.style.left = "50%", v3.style.backgroundColor = v4(2), i5 = a0.a1.iI() ? bC.qz.v5(h.min) : bC.qz.sI(.4);
				i5 = Math.max(i5, 200), v3.style.width = bC.qz.r8(i5), v3.style.height = bC.qz.r8(i5), v3.style.transform = "translate(-50%, -50%)",
					function(v3, i5) {
						var v9 = document.createElement("div");
						v9.style.flex = "0 0 10%", v9.style.overflow = "hidden", v9.style.backgroundColor = v4(1), v9.style.color = vA(1, 7), v9.style.font = bC.qz.sq(1, .05 * i5), v9.style.display = "flex", v9.style.alignItems = "center", v9
							.style.justifyContent = "center", v9.innerHTML = L(24), v3.appendChild(v9)
					}(v3, i5),
					function(v3, ej, i5) {
						var vB = document.createElement("div");
						vB.style.flex = "0 0 70%", vB.style.overflowY = "auto", vB.style.overflowX = "hidden", vB.style.whiteSpace = "pre-wrap", vB.style.wordWrap = "break-word", vB.style.padding = bC.qz.r8(.02 * i5), vB.style.backgroundColor =
							v4(2), vB.style.color = vA(2, 8), vB.style.font = bC.qz.sq(0, .07 * i5), vB.innerHTML = ej, vB.innerHTML = "<style>a { color: inherit; }</style>" + vB.innerHTML, v3.appendChild(vB)
					}(v3, ej, i5),
					function(v3, i5) {
						var vC = document.createElement("div"),
							vD = (vC.style.display = "flex", vC.style.flexDirection = "row", vC.style.justifyContent = "space-between", vC.style.alignItems = "stretch", vC.style.backgroundColor = v4(3), vC.style.flex = "1", vC.style.padding = bC
								.qz.r8(.01 * i5), vC.style.gap = bC.qz.r8(.01 * i5), document.createElement("div")),
							vE = (vD.style.flex = "0 0 60%", vD.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								v2()
							}, v4(4), !1)),
							vE = (vE.button.style.width = "100%", vE.button.style.height = "100%", vE.button.style.color = vA(4, 9), vE.button.style.font = bC.qz.sq(1, .05 * i5), vD.appendChild(vE.button), document.createElement("div")),
							vG = (vE.style.flex = "0 0 15%", vE.style.height = "100%", vE.style.backgroundColor = v4(5), document.createElement("div")),
							vH = (vG.style.flex = "1", vG.style.height = "100%", new w(L(26), function(e) {
								return bC.qz.vI(e), ux < 0 || b0.y.ed(0) && (b0.ee.uy(1, ux), ux = -1), !0
							}, v4(6), !1));
						vH.button.style.width = "100%", vH.button.style.height = "100%", vH.button.style.color = vA(6, 10), vH.button.style.font = bC.qz.sq(1, .035 * i5), vG.appendChild(vH.button), vC.appendChild(vD), vC.appendChild(vE), vC
							.appendChild(vG), v3.appendChild(vC)
					}(v3, i5), uv.appendChild(v3)
			}(ej), document.body.appendChild(uv)
	}
}

function vL(su, vM) {
	this.qp = [];
	var vN = this.qp;

	function click() {
		for (var aB = 0; aB < vN.length; aB++) vN[aB].textContent = vN[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eG = parseInt(this.name);
		void 0 !== su.eG && bl.sR.sS(su.eG, eG), vM && vM(eG)
	}
	for (var vO, f9 = su.t0.length, aB = 0; aB < f9; aB++)(vO = document.createElement("p")).textContent = "⚪ " + su.t0[aB], vO.style.margin = "0", vO.name = "" + aB, vO.style.cursor = "pointer", vO.style.fontSize = "1em", vO.addEventListener(
		"click", click), vN.push(vO);
	vN[su.value].textContent = vN[su.value].textContent.replace("⚪", "🟢")
}

function vP(title, vQ, vR) {
	var tT = document.createElement("div"),
		vS = document.createElement("div"),
		t4 = document.createElement("div"),
		vT = document.createElement("div"),
		vU = document.createElement("div");
	this.vV = t4, this.vW = vQ, this.show = function() {
			!1 !== vR ? document.body.appendChild(tT) : (document.body.appendChild(vS), document.body.appendChild(vT))
		}, this.sG = function() {
			!1 !== vR ? t.removeChild(document.body, tT) : (t.removeChild(document.body, vS), t.removeChild(document.body, vT))
		}, this.va = function() {
			var sJ = bC.qz.sI(.1),
				sH = bC.qz.sI(.08 + .04 * (h.vb < 1), .3);
			return {
				sJ: sJ,
				sH: sH,
				vc: h.j / h.k - sJ - sH
			}
		}, this.resize = function(sc) {
			var f9 = vQ.length,
				vd = this.va(),
				sJ = vd.sJ,
				sH = vd.sH;
			for (vS.style.height = bC.qz.r8(sJ), bC.qz.r9(vS, 2), vT.style.top = bC.qz.r8(h.j / h.k - sH), vT.style.height = bC.qz.r8(sH), bC.qz.r9(vT, 8), t4.style.top = bC.qz.r8(sJ), t4.style.height = t4.style.maxHeight = bC.qz.r8(vd.vc), vS.style
				.font = bC.qz.sq(0, bC.qz.sI(.02, .15)), vT.style.font = bC.qz.sq(0, bC.qz.sI(.02, .7)), t4.style.font = bC.qz.sq(0, bC.qz.sI(.02, .35)), aB = 1; aB < f9; aB++) bC.qz.r9(vQ[aB].button, 4);
			for (var sd = 0, aB = 0; aB < f9; aB++) sd += vQ[aB].button.offsetWidth;
			if (sc && sd < vT.offsetWidth)
				for (aB = 0; aB < f9; aB++) vQ[aB].button.style.width = (100 * vQ[aB].button.offsetWidth / sd).toFixed(2) + "%";
			else
				for (aB = 0; aB < f9; aB++) vQ[aB].button.style.width = "auto";
			vT.tm && (vT.scrollLeft = vT.tm), sc || this.resize(!0)
		}, this.ve = function() {
			var vd = this.va(),
				eh = h.k;
			vf.fillStyle = bD.o1, vf.fillRect(0, eh * vd.sJ, h.i, eh * vd.vc)
		}, tT.style.position = "absolute", tT.style.top = "0", tT.style.left = "0", tT.style.width = "100%", tT.style.height = "100%", vS.style.position = "absolute", vS.style.top = "0", vS.style.left = "0", vS.style.width = "100%", vS.style
		.display = "flex", vS.style.backgroundColor = bD.o1, vT.style.position = "absolute", vT.style.left = "0", vT.style.width = "100%", bC.qz.tZ(vT), vU.style.height = vU.style.maxHeight = "100%", t4.style.position = "absolute", t4.style.width =
		"100%", t4.style.backgroundColor = bD.o1,
		function() {
			for (var aB = 0; aB < vQ.length; aB++) vQ[aB].button.style.height = "100%", vQ[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vQ.length; aB++) vU.appendChild(vQ[aB].button);
	vS.appendChild(function() {
		var vZ = document.createElement("h1");
		return vZ.textContent = title, vZ.style.margin = "auto", vZ.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vZ.style.fontFamily = "Arial Black, system-ui", vZ
	}()), vT.appendChild(vU), !1 !== vR && (tT.appendChild(t4), tT.appendChild(vS), tT.appendChild(vT))
}

function rw(vg, vh, vi, vj) {
	var self;
	this.rx = document.createElement("span"), (self = this).rx.textContent = vg, self.rx.style.color = bD.o5, self.rx.style.position = "absolute", self.rx.style.font = "inherit", vj ? self.rx.style.bottom = "0.06em" : self.rx.style.top = "0.12em",
		vi ? self.rx.style.left = "0.2em" : self.rx.style.right = "0.2em", self.rx.style.fontSize = "0.6em", self.rx.style.pointerEvents = "none", self.rx.style.whiteSpace = "pre", vh.style.position = "relative", vh.style.overflow = "hidden", vh
		.appendChild(self.rx)
}

function tb(vg, vh, vk, vl, vm) {
	var self;
	this.rx = document.createElement("span"), this.resize = function() {
			this.rx.style.fontSize = ((vl - vk) * vh.offsetHeight).toFixed(1) + "px"
		}, (self = this).rx.textContent = vg, self.rx.style.color = bD.o5, self.rx.style.font = "inherit", self.rx.style.margin = "0.1em 0.6em", self.rx.style.pointerEvents = "none", vm && (self.rx.style.fontWeight = "bold"), self.rx.style
		.whiteSpace = "nowrap", self.rx.style.display = "block", vh.appendChild(self.rx)
}

function vn(vo, vp, vq, vr) {
	var vs = document.createElement("textarea"),
		vt = (this.e = vs, !0);

	function vy() {
		vs.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vp && bC.qz.r9(vs, 5)
		}, this.vu = function(ej) {
			vs.value = ej
		}, this.vv = function() {
			return vs.value
		}, this.vw = function() {
			vs.select()
		}, this.clear = function() {
			vs.value = ""
		}, this.vx = function() {
			vt && navigator.clipboard ? (vs.select(), navigator.clipboard.writeText(vs.value).catch(function() {
				vt = !1, vy()
			})) : vy()
		}, vs.setAttribute("id", "textArea" + t.y.sx++), vs.setAttribute("autocomplete", "off"), vo && vs.setAttribute("placeholder", vo), vs.style.top = "0", vs.style.left = "0", vs.style.width = "100%", vs.style.height = "100%", vs.style
		.userSelect = "none", vs.style.outline = "none", vs.style.resize = "none", vs.style.border = "none", vs.style.color = bD.o5, vs.style.backgroundColor = bD.ny, vr ? (vs.style.fontSize = "1em", vs.rows = 6, vs.style.padding = "0.25em") : (vs
			.style.padding = "0.45em", vs.style.fontSize = "1.2em"), vq && vs.addEventListener("input", function(e) {
			vq(e)
		}), vs.addEventListener("focus", function() {
			h.sy++
		}), vs.addEventListener("blur", function() {
			h.sy--
		})
}

function dM() {
	this.rG = new vz, this.eU = new w0, this.sR = new w1, this.y = new w2, this.w3 = new w4, this.dh = function() {
		this.eU.dh(), (new w5).dh(), this.w3.dh(), this.y.w6()
	}
}

function w0() {
	function w7(aB, type, wD, e0) {
		bl.eU.data.push({
			eG: aB,
			type: type || 0,
			value: wD || 0,
			wD: wD || 0,
			e0: e0 || 0
		})
	}

	function w8(aB, type, wD, e0) {
		bl.eU.data.push({
			eG: aB,
			type: type,
			value: wD || "",
			wD: wD || "",
			e0: e0 || 0
		})
	}

	function w9(nn) {
		for (var aB = bl.eU.data.length; aB < nn; aB++) bl.eU.data.push(null)
	}
	this.data = [], this.dh = function() {
		w7(0, 1, 0, 5), w7(1, 1, 1), w7(2, 0), w8(3, 2), w7(4, 1), w8(5, 2, "system-ui", 2), w7(6, 0), w7(7, 0, 0), w7(8, 0), w7(9, 1, 1), w7(10, 1), w7(11, 1, 1), w8(12, 2, navigator.language), w7(13), w7(14), w7(15, 0, 1), w9(100), w8(100, 2),
			w8(101, 2), w8(102, 2), w8(103, 2), w8(104, 2), w8(105, 2), w8(106, 2), w7(107), w7(108), w7(109), w8(110, 2), w7(111), w7(112), w7(113), w8(114, 2), w7(115), w8(116, 2), w7(117, 1), w8(118, 2, "", 2), w7(119, 1, 0, 1), w8(120, 2),
			w7(121, 1, ~~(262144 * Math.random())), w8(122, 2, "Player " + Math.floor(1e3 * Math.random())), w7(123), w8(124), w7(125, 1), w8(126, 2), w7(127, 0, 1), w7(128), w7(129), w7(130), w7(131), w7(132), w8(133, 2), w7(134, 0, 5), w8(135,
				2), w8(136, 2), w7(137), w7(138), w7(139), w7(140), w7(141), w7(142), w7(143), w7(144), w8(145, 2), w7(146), w7(147), w8(148, 2), w7(149), w7(150, 0, 1), w8(151, 2), w7(152, 0, 5), w7(153, 1), w7(154, 1), w8(155, 2), w8(156, 2),
			w7(157), w7(158), w7(159), w7(160), w8(161, 2), w7(162, 0, 1024), w8(163, 2, "0,0,0"), w8(164, 2, "100,100,100"), w8(165, 2, "30,30,30"), w8(166, 2, "70,70,70"), w8(167, 2, "100,100,100"), w8(168, 2, "85,85,85"), w8(169, 2,
				"100,100,100");
		for (var aB = 0; aB < 4; aB++) w8(170 + aB, 2, "255,255,255");
		w8(174, 2), w8(175, 2), w7(176, 0, 200), w9(180), w7(180, 0), w7(181, 0)
	}, this.sS = function(eG, value) {
		this.data[eG].value = value
	}, this.wA = function(eG, value) {
		this.sS(eG, value);
		var value = String(value),
			f9 = value.length;
		5e4 < f9 ? console.log("storage value too large: index " + eG + " size " + f9) : (bl.rG.save(eG, value), bl.rG.save(eG, String(this.data[eG].e0), !0))
	}, this.wB = function(eG) {
		return Number(this.data[eG].value)
	}, this.wC = function(eG) {
		return String(this.data[eG].value)
	}
}

function w4() {
	var wE = [];

	function wI(tH) {
		wE.unshift(tH), bl.sR.sS(161, wE.join(";"))
	}

	function wH(tH) {
		for (var wK = wE, f9 = wK.length, aB = 0; aB < f9; aB++)
			if (wK[aB] === tH) return wK.splice(aB, 1), bl.sR.sS(161, wK.join(";")), 1
	}
	this.dh = function() {
		var qg = bl.eU.data[161].value;
		qg.length && (wE = qg.split(";"))
	}, this.get = function() {
		return wE
	}, this.wF = function() {
		return {
			t0: wE,
			value: 0
		}
	}, this.ub = function(tH) {
		return bC.r7.has(wE, tH)
	}, this.wG = function(tH) {
		return wH(tH) ? 0 : (wI(tH), 1)
	}, this.mr = function(tH) {
		wH(tH) && wI(tH)
	}, this.wJ = function(eG) {
		eG < wE.length && (wE.splice(eG, 1), bl.sR.sS(161, wE.join(";")))
	}
}

function vz() {
	this.wL = function(eG, e0) {
		return Number(this.wM(eG, e0))
	}, this.wM = function(eG, e0) {
		var fb = null;
		return 0 === a0.id ? a0.wN && (fb = a0.wN.getItem((e0 ? "v" : "d") + eG)) : 1 === a0.id ? fb = a0.wO.loadString((e0 ? 1e3 : 2e3) + eG) : 2 === a0.id && (fb = a0.wP[(e0 ? "v" : "d") + eG]), fb && 0 !== fb.length ? fb : null
	}, this.wQ = function(f9, wR) {
		var g = [],
			wS = wR ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wN)
				for (aB = 0; aB < f9; aB++) g.push(a0.wN.getItem(wS + aB))
		} else if (1 === a0.id)
			for (var wT = wR ? 5e3 : 3e3, aB = 0; aB < f9; aB++) g.push(a0.wO.loadString(wT + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f9; aB++) g.push(a0.wP[wS + aB]);
		return g
	}, this.save = function(eG, value, e0) {
		var wU = (e0 ? "v" : "d") + eG;
		if (0 === a0.id) {
			if (a0.wN && bl.eU.data[140].value) try {
				a0.wN.setItem(wU, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wO.saveString((e0 ? 1e3 : 2e3) + eG, value) : 2 === a0.id && (a0.wP[wU] = value, a0.wV.postMessage(wU + " " + value))
	}, this.wW = function(g, wR) {
		var f9 = g.length,
			wS = wR ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wN && bl.eU.data[140].value) try {
				for (aB = 0; aB < f9; aB++) a0.wN.setItem(wS + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wT = wR ? 5e3 : 3e3, aB = 0; aB < f9; aB++) a0.wO.saveString(wT + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f9; aB++) a0.wP[wS + aB] = g[aB], a0.wV.postMessage(wS + aB + " " + g[aB])
	}
}

function w5() {
	this.dh = function() {
		! function() {
			var data = bl.eU.data;
			0 === data[2].e0 && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].wD = 1);
			0 === data[100].e0 && (data[100].value = data[100].wD = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bl.eU.data,
			f9 = data.length;
		for (aB = 0; aB < f9; aB++) {
			var wZ = bl.rG.wL(aB, !0);
			data[aB] && data[aB].e0 === wZ && (null === (wZ = bl.rG.wM(aB)) ? data[aB].value = data[aB].wD : 2 === data[aB].type ? data[aB].value = wZ : (wZ = Number(wZ), isNaN(wZ) ? data[aB].value = data[aB].wD : data[aB].value = wZ))
		}
	}
}

function w2() {
	function we(g) {
		if (0 === g.length) bl.sR.sS(116, "");
		else {
			for (var wh = g[0], aB = 1; aB < g.length; aB++) wh += ";" + g[aB];
			bl.sR.sS(116, wh)
		}
	}
	this.wb = function() {
		bl.eU.data[110].value.length && (bl.eU.data[106].value = bl.eU.data[110], bl.sR.sS(110, ""), this.wc())
	}, this.wc = function() {
		var g = bl.eU.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bl.eU.data[106].value), g.unshift(bl.eU.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wd = [], aB = 0; aB < g.length; aB += 2) wd.push(g[aB]);
		we(g), bl.eU.data[117].value = 0, bl.eU.data[117].t0 = wd
	}, this.wf = function(eG) {
		bl.eU.data[117].t0.splice(eG, 1), bl.eU.data[117].value = Math.min(eG, bl.eU.data[117].t0.length - 1);
		var g = bl.eU.data[116].value.split(";");
		g.splice(2 * eG, 2), we(g)
	}, this.wg = function(eG) {
		var g = bl.eU.data[116].value.split(";");
		return {
			tH: g[2 * eG],
			password: g[2 * eG + 1]
		}
	}, this.wi = function() {
		var fb = bN.iH(bl.eU.data[121].value, -1, 262143);
		return fb = -1 === fb ? ~~(262144 * Math.random()) : fb
	}, this.w6 = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qg = g[aB].trim(),
				wj = qg.indexOf("="),
				wj = 0 <= wj ? qg.substring(0, wj) : qg;
			document.cookie = wj + "=;expires=0;path=/", document.cookie = wj + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wj + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function w1() {
	this.sS = function(eG, value) {
		2 !== bl.eU.data[eG].type && (value = Math.floor(value)), bl.eU.data[eG].value !== value && (bl.eU.wA(eG, value), 0 === eG ? (t.x(), b9.dh(), t.u(2)) : 1 === eG ? h.ds(1) : 2 === eG ? h.ds(0) : 5 === eG && (bC.qz.wk(), h.ds(0)))
	}, this.wl = function() {
		for (var data = bl.eU.data, aB = 0; aB < 100; aB++) data[aB] && bl.eU.wA(aB, data[aB].wD);
		bC.qz.wk(), h.ds(1)
	}, this.wm = function() {
		for (var data = bl.eU.data, aB = 0; aB < data.length; aB++) data[aB] && bl.eU.sS(aB, data[aB].wD)
	}, this.wn = function() {
		for (var fT = bl.eU, aB = 128; aB < 135; aB++) fT.wA(aB, fT.data[aB].wD)
	}, this.wo = function(data) {
		bl.sR.sS(109, data.tI), bl.sR.sS(107, data.wp), bl.sR.sS(108, data.wq), bl.sR.sS(112, data.wr), bl.sR.sS(111, data.ws), bl.sR.sS(113, data.wt), bl.sR.sS(135, data.wu), bl.sR.sS(136, data.wv), bl.sR.sS(137, data.ww), bl.sR.sS(138, data
			.wx), bl.sR.sS(139, data.wy), bl.sR.sS(141, data.wz), bl.sR.sS(142, data.x0), bl.sR.sS(143, data.x1), bl.sR.sS(144, data.x2)
	}
}

function c6() {
	this.tM = new x3, this.x4 = new x5, this.x6 = new x7, this.dh = function() {
		this.tM.dh()
	}
}

function x5() {
	this.x8 = function(size) {
		for (var x9 = bJ, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x9.q7(16)));
		return g.join("")
	}, this.xA = function(qg) {
		return 20 < (qg = qg.trim()).length ? qg.substring(0, 20) : qg
	}
}

function x3() {
	var xB = new Uint8Array(78);
	this.dh = function() {
		var aB;
		for (xB[50] = 37, aB = 0; aB < 10; aB++) xB[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) xB[aB + 20] = aB + 11, xB[aB + 52] = aB + 38
	}, this.xC = function(qg) {
		return qg.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.xD = function(qg, size) {
		if ((qg = this.xC(qg)).length > size) return qg.substring(0, size);
		for (; qg.length < size;) qg = "-" + qg;
		return qg
	}, this.xE = function(qg) {
		for (var xF = xB, f9 = qg.length, g = new Uint8Array(f9), aB = 0; aB < f9; aB++) g[aB] = xF[qg.charCodeAt(aB) - 45];
		return g
	}, this.xG = function(xH) {
		bF.a7(6 * xH.length), this.xI(xH), bJ.dh(bF.aC)
	}, this.xI = function(xH) {
		for (var f9 = xH.length, i = bF, aB = 0; aB < f9; aB++) i.a8(6, xH[aB])
	}, this.xJ = function(qg) {
		this.xI(this.xE(qg))
	}, this.xK = function(qg, size) {
		this.xI(this.xE(this.xD(qg, size)))
	}, this.xL = function(qg, size) {
		for (var g = this.xE(this.xD(qg, size)), fb = 0, nh = 1, aB = g.length - 1; 0 <= aB; aB--) fb += nh * g[aB], nh *= 64;
		return fb
	}
}

function xM() {
	var i, j, xN;

	function xn(hb, fC, xl, xS, xg) {
		fC = xm(hb, fC + 1 + 2 * xS & 3);
		! function(hb, l7) {
			return 1 < Math.abs(hb % i - l7 % i) || 1 < Math.abs(xq(hb) - xq(l7))
		}(hb, fC) && 0 === xg[fC << 2] && (xg[fC << 2] = xl)
	}

	function xq(gh) {
		return Math.floor((gh + .5) / i) % j
	}

	function xm(gh, fC) {
		return gh + xN[fC]
	}
	this.xO = function(qg) {
		var aB, xP, f9, xQ, x9 = bJ;
		for (bI.tM.xG(bI.tM.xE(qg)), bU.xT.xU[bU.ep].i = bU.fK = i = x9.q7(12), bU.xT.xU[bU.ep].j = bU.fL = j = x9.q7(12), xN = [-i, -1, i, 1], bU.xd = document.createElement("canvas"), bU.xd.width = bU.fK, bU.xd.height = bU.fL, bU.xZ = bU.xd
			.getContext("2d", {
				alpha: !1
			}), bU.xa = bU.xe = null, bU.xa = bU.xZ.getImageData(0, 0, bU.fK, bU.fL), bU.xe = bU.xa.data, bC.r7.xf(bU.xe), f9 = x9.q7(12), xP = x9.q7(5), xQ = xW(i * j - 1), aB = 0; aB < f9; aB++) ! function(lP, gh, xR, xS) {
			var aB, fC, x9 = bJ,
				xg = bU.xe,
				xh = gh,
				xi = gh,
				xj = 0,
				xk = 1 + xR,
				xl = 2 - xR;
			for (xg[gh << 2] = xk, aB = 0; aB < lP; aB++) fC = x9.q7(2), gh = xm(gh, fC), xg[gh << 2] === xk ? xj % 2 == 1 && xn(xi, xj + 2 * xS + 3, xl, xS, xg) : xg[gh << 2] = xk, xn(gh, fC, xl, xS, xg), xn(xi, fC, xl, xS, xg), xi = gh,
				xj = fC;
			xm(gh, 0) === xh ? (xn(gh, 0, xl, xS, xg), xn(xh, 0, xl, xS, xg)) : xm(gh, 1) === xh && (xn(gh, 0, xl, xS, xg), xn(xh, 2, xl, xS, xg));
			0 === lP && (xn(xh, 0, xl, xS, xg), xn(xh, 2, xl, xS, xg))
		}(x9.q7(xP), x9.q7(xQ), 1 === x9.q7(1), 1 === x9.q7(1));
		var fG, fI, i1, xr, xs, xt, xg = bU.xe,
			xu = !0,
			xv = bU.xT.xU[bU.ep].xv,
			xw = bU.xT.xU[bU.ep].xw;
		for (fI = 0; fI < j; fI++)
			for (xr = !0, xs = xu, fG = xt = 0; fG < i; fG++) i1 = 4 * fI * i + 4 * fG, xt <= fG && 0 < xg[i1] && (xs = 2 === xg[i1], xr) && (xr = !1, xs !== xu) ? (xu = xs, xt = fG + 1, fG = -1) : (xs ? (xg[i1] = xw[0], xg[1 + i1] = xw[1], xg[
				2 + i1] = xw[2]) : (xg[i1] = xv[0], xg[1 + i1] = xv[1], xg[2 + i1] = xv[2]), xg[3 + i1] = 255);
		bU.xZ.putImageData(bU.xa, 0, 0), bU.xb = !0, bU.xc.dh(), bh.dp = !0
	}
}

function x7() {
	this.xO = function(xx) {
		for (var x9 = bJ, size = x9.q7(xx), xy = 7 + 9 * x9.q7(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x9.q7(xy)));
		return g.join("")
	}
}

function cB() {
	var sk, sl, xz, y0, y1, y2, y3, y4, y5, y6;

	function y8() {
		var yB = aD.yB;
		for (y5 = yB; y5 < aD.f6; y5++) y7();
		for (y5 = aD.hX ? aD.kU : 0; y5 < yB; y5++) {
			if (!yC()) {
				for (var fT = aD.yG = y5; fT < yB; fT++) y5 = fT, y7();
				return
			}
			yF(y2 + sk * y1 + bN.fa(y1, 2), y3 + sl * y1 + bN.fa(y1, 2))
		}
	}

	function yi(player) {
		for (var j2 = ag.j2, j4 = ag.j4, j3 = ag.j3, j5 = ag.j5, fI = j4[player]; fI <= j5[player]; fI++)
			for (var fG = j2[player]; fG <= j3[player]; fG++) {
				var en = ac.yj(fG, fI);
				ac.gj(en) && (ac.jf(en) ? ac.ge(en, player) : ac.yk(en, player))
			}
	}

	function yh(g, td, te) {
		var eY = g[td];
		g[td] = g[te], g[te] = eY
	}

	function yC() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sk = bN.fa(xz * ay.random(), ay.value(100)), sl = bN.fa(y0 * ay.random(), ay.value(100)), yp()) return 1;
			return
		}() || function() {
			var iT, iW, fS, yE, fT, yD;
			for (iT = bN.fa(xz * ay.random(), ay.value(100)), iW = bN.fa(y0 * ay.random(), ay.value(100)), fS = 40; 1 <= fS; fS--)
				for (yE = y0 - fS; 0 <= yE; yE -= 40)
					for (sl = (yE + iW) % y0, fT = 40; 1 <= fT; fT--)
						for (yD = xz - fT; 0 <= yD; yD -= 40)
							if (sk = (yD + iT) % xz, yp()) return 1;
			return
		}()
	}

	function yp() {
		for (var gh, yr, gap = bN.fa(y1 - y4, 2), ys = y3 + sl * y1 + gap, yt = y2 + sk * y1 + gap, yq = ys + y4 - 1; ys <= yq; yq--)
			for (yr = yt + y4 - 1; yt <= yr; yr--)
				if (gh = ac.yj(yr, yq), !ac.f4(gh) || ac.jf(gh)) return;
		return 1
	}

	function yF(yD, yE) {
		y7(), yu(yD - 2, yE - 2)
	}

	function y7() {
		ag.n4[y5] = 0, ag.gx[y5] = ag.yf[y5] = 0, ag.gb[y5] = [], ag.gp[y5] = [], ag.gq[y5] = [], ag.fY[y5] = [], ag.j2[y5] = ag.j4[y5] = ag.j3[y5] = ag.j5[y5] = 0
	}

	function yu(yD, yE) {
		var gh, aB, yv, yw;
		for (ag.n4[y5] = 1, ag.j2[y5] = yD + 10, ag.j4[y5] = yE + 10, ag.j5[y5] = ag.j3[y5] = 0, yv = yD; yv < yD + 4; yv++)
			for (yw = yE; yw < yE + 4; yw++)(yD < yv && yv < yD + 3 || yE < yw && yw < yE + 3) && (gh = ac.yj(yv, yw), ac.f4(gh)) && (ag.j2[y5] = Math.min(yv, ag.j2[y5]), ag.j3[y5] = Math.max(yv, ag.j3[y5]), ag.j4[y5] = Math.min(yw, ag.j4[y5]), ag
				.j5[y5] = Math.max(yw, ag.j5[y5]), y6[ag.gx[y5]] = gh, ag.gx[y5]++, ac.yk(gh, y5));
		for (ag.yf[y5] = ag.gx[y5], aB = ag.gx[y5] - 1; 0 <= aB; aB--) ac.yx(y6[aB], y5) ? (ac.ge(y6[aB], y5), ag.gp[y5].push(y6[aB])) : ac.yy(y6[aB]) ? (ac.ge(y6[aB], y5), ag.gq[y5].push(y6[aB])) : ac.yz(y6[aB]) && (ac.ge(y6[aB], y5), ag.fY[y5]
			.push(y6[aB]))
	}
	this.dh = function() {
		if (y6 = new Array(12), y4 = 6, y1 = 10, xz = bN.fa(bU.fK, y1), y0 = bN.fa(bU.fL, y1), y2 = bN.fa(bU.fK - y1 * xz, 2), y3 = bN.fa(bU.fL - y1 * y0, 2), aD.hX)
			for (var aB = 0; aB < aD.kU; aB++) y5 = aB, y7(), ag.n4[y5] = 1;
		(0 === aD.data.spawningType ? y8 : 1 === aD.data.spawningType ? (y8(), function() {
			var yH = aD.yI;
			aD.yJ || yH++;
			if (!(yH < 3)) {
				for (var data = aD.data, jk = (aD.hX ? aD.kU : 0) + data.teamPlayerCount[0], nn = aD.yG, yK = new Uint32Array(yH), yL = new Uint32Array(yH), yM = new Uint16Array(yH), yN = new Uint16Array(yH), f7 = bi.f7, j2 = ag.j2, j4 =
						ag.j4, j3 = ag.j3, j5 = ag.j5, fo = bQ.fo, fp = bQ.fp, aB = jk; aB < nn; aB++) fo[aB] = j2[aB] + j3[aB] >> 1, fp[aB] = j4[aB] + j5[aB] >> 1;
				for (aB = jk; aB < nn; aB++) {
					var id = f7[aB];
					yK[id] += fo[aB], yL[id] += fp[aB]
				}
				var kr = bi.kr;
				for (aB = 1; aB < yH; aB++) {
					var gc = Math.max(data.teamPlayerCount[kr[aB]], 1);
					yM[aB] = bN.fa(yK[aB], gc), yN[aB] = bN.fa(yL[aB], gc)
				}
				var yO = bi.yO,
					yP = bi.yP,
					yQ = bi.yQ,
					fn = bQ.fn;
				for (aB = 0; aB < 512; aB++) fn[aB] = aB;
				for (var eF = 0; eF < 2 + (4 <= yH); eF++)
					for (aB = jk; aB < nn; aB++) {
						for (var hb = aB, yR = fn[hb], yS = 1, fP = bN.yT(fo[yR] - yM[1], fp[yR] - yN[1]), fS = 2; fS < yH; fS++) {
							var yU = bN.yT(fo[yR] - yM[fS], fp[yR] - yN[fS]);
							yU < fP && (fP = yU, yS = fS)
						}
						var yV = f7[hb];
						if (yS !== yV) {
							if (2 === eF && 4 <= yH) {
								var yW = Math.max((yS + 1) % yH, 1),
									yX = bN.yT(fo[yR] - yM[yW], fp[yR] - yN[yW]);
								for (fS = 1; fS < yH; fS++) yU = bN.yT(fo[yR] - yM[fS], fp[yR] - yN[fS]), fP < yU && yU < yX && (yX = yU, yW = fS);
								yW !== yV && bN.yT(yM[yV] - yM[yW], yN[yV] - yN[yW]) < bN.yT(yM[yV] - yM[yS], yN[yV] - yN[yS]) && (yS = yW)
							}
							var yY = kr[yS],
								yZ = yP[yY] + (aD.hX ? 0 : yQ[yY]),
								l7 = yO[yZ],
								ya = fn[l7],
								yb = yP[yY + 1];
							fP = bN.yT(fo[ya] - yM[yV], fp[ya] - yN[yV]);
							for (var eh = yZ + 1; eh < yb; eh++) {
								var yc = yO[eh],
									yd = fn[yc];
								(yU = bN.yT(fo[yd] - yM[yV], fp[yd] - yN[yV])) < fP && (fP = yU, l7 = yc)
							}
							l7 < jk || nn <= l7 || (ya = fn[l7], yK[yV] += fo[ya] - fo[yR], yL[yV] += fp[ya] - fp[yR], yK[yS] += fo[yR] - fo[ya], yL[yS] += fp[yR] - fp[ya], gc = data.teamPlayerCount[kr[yV]], yM[yV] = bN.fa(yK[yV], gc),
								yN[yV] = bN.fa(yL[yV], gc), gc = data.teamPlayerCount[yY], yM[yS] = bN.fa(yK[yS], gc), yN[yS] = bN.fa(yL[yS], gc), fn[hb] = ya, fn[l7] = yR)
						}
					}! function() {
						for (var fn = bQ.fn, j2 = ag.j2, j4 = ag.j4, j3 = ag.j3, j5 = ag.j5, gx = ag.gx, yf = ag.yf, gp = ag.gp, gq = ag.gq, fY = ag.fY, aB = 0; aB < 512; aB++) {
							var yg = fn[aB];
							if (yg !== aB) {
								yh(j2, aB, yg), yh(j4, aB, yg), yh(j3, aB, yg), yh(j5, aB, yg), yh(gx, aB, yg), yh(yf, aB, yg), yh(gp, aB, yg), yh(gq, aB, yg), yh(fY, aB, yg), yi(aB), yi(yg), fn[aB] = aB;
								for (var j = yg, gi = fn[j]; gi !== aB;) gi = fn[j = gi];
								fn[j] = yg
							}
						}
					}()
			}
		}) : function() {
			var yB = aD.yB;
			for (y5 = yB; y5 < aD.f6; y5++) y7();
			for (y5 = aD.hX ? aD.kU : 0; y5 < yB; y5++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							yD = spawningData[2 * y5] + 1,
							spawningData = spawningData[2 * y5 + 1] + 1;
						if (3 < yD && yD < bU.fK - 5 && 3 < spawningData && spawningData < bU.fL - 5 && ac.f4(ac.yj(yD, spawningData)) && function(yD, yE) {
								var gh, yr, yq;
								for (yq = yE; yE - 6 < yq; yq--)
									for (yr = yD; yD - 6 < yr; yr--)
										if (gh = ac.yj(yr, yq), ac.jf(gh)) return;
								return 1
							}(yD + 3, spawningData + 3)) return yF(yD + 1, spawningData + 1), 1;
						return
					}()) {
					if (!yC()) {
						for (var fT = aD.yG = y5; fT < yB; fT++) y5 = fT, y7();
						return
					}
					var yD = y2 + sk * y1 + bN.fa(y1, 2),
						yE = y3 + sl * y1 + bN.fa(y1, 2);
					yF(yD, yE)
				}
		})(), bf.n0[7] = ag.gx[aD.et]
	}, this.z0 = function(jd, z1, z2) {
		var aB, yD, yE, gh, sk, sl;
		for (y5 = jd, aB = 0; aB < 20; aB++)
			for (yD = z1 + aB; z1 - aB <= yD; yD--)
				for (yE = z2 + aB; z2 - aB <= yE; yE--)
					if ((yD === z1 + aB || yD === z1 - aB || yE === z2 + aB || yE === z2 - aB) && 3 < yD && yD < bU.fK - 5 && 3 < yE && yE < bU.fL - 5 && ac.f4(ac.yj(yD, yE)) && function(yD, yE) {
							var gh, yr, yq;
							for (yq = yE; yE - 6 < yq; yq--)
								for (yr = yD; yD - 6 < yr; yr--)
									if (gh = ac.yj(yr, yq), ac.jf(gh) && !ac.z8(y5, gh)) return;
							return 1
						}(yD + 3, yE + 3)) {
						if (0 < ag.gx[y5]) {
							for (sl = sk = gh = void 0, sk = ag.j3[y5]; sk >= ag.j2[y5]; sk--)
								for (sl = ag.j5[y5]; sl >= ag.j4[y5]; sl--) gh = 4 * (sl * bU.fK + sk), ac.z5(y5, gh) && (ac.z6(gh), ag.gx[y5]--);
							y7()
						}
						return yu(yD - 1, yE - 1), !0
					} return !1
	}, this.z7 = function(jd) {
		y5 = jd, yC() ? yF(y2 + sk * y1 + bN.fa(y1, 2), y3 + sl * y1 + bN.fa(y1, 2)) : y7()
	}
}

function z9() {
	at.zA(), vf.setTransform(iK, 0, 0, iK, 0, 0), vf.imageSmoothingEnabled = iK < 3, vf.drawImage(bU.xd, aS.zB(), aS.zC()), bR.zD.ve(), vf.drawImage(zE, aS.zB(), aS.zC()), at.ve(), bP.ve(), af.ve(), (aD.nY ? (bj.ve(), bE) : (aN.ve(), aV.ve(), aR
	.ve(), bE.ve(), aw.ve(), aW.ve(), aS.ve(), aQ.ve(), bj.ve(), aU.ve(), aP.ve(), aM.ve(), aL.ve(), aX.ve(), bg.ve(), av)).ve(), t.ve()
}

function zF(zG, i, j) {
	zG.clearRect(0, 0, i, j), zG.fillStyle = bD.o2, zG.fillRect(0, 0, i, j)
}

function zH(zG, i, j, zI) {
	zG.fillStyle = bD.o5, zG.fillRect(0, 0, i, zI), zG.fillRect(0, 0, zI, j), zG.fillRect(i - zI, 0, zI, j), zG.fillRect(0, j - zI, i, zI)
}

function zJ(zG, fG, fI, i5, zI, gh, zK) {
	zG.fillStyle = bD.o5;
	var gh = Math.floor(i5 * gh),
		tR = (gh += (gh - zI) % 2, Math.floor((gh - zI) / 2)),
		i5 = Math.floor((i5 - gh) / 2);
	zG.fillRect(fG + i5, fI + i5 + tR, gh, zI), zK && zG.fillRect(fG + i5 + tR, fI + i5, zI, gh)
}

function zM() {
	this.dh = function() {
		8 === aD.km && aN.zN()
	}, this.zO = function(zP) {
		var elo = aD.data.elo,
			jj = (elo[zP] - elo[1 - zP]) / 10,
			jj = 8 / (1 + Math.pow(2, jj / 32)),
			jj = Math.floor(10 * jj + .5),
			zR = elo[zP] + jj,
			zS = this.zT(zR),
			elo = this.zT(elo[1 - zP] - jj),
			jj = (0 === zP ? aN.zV(zS, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zV(elo, zS, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zR * bN.sqrt(zR) >> 8),
			elo = ((1 + aD.zY) * jj / 100).toFixed(2);
		zP === aD.et ? aN.zZ(640, L(27, [elo]), 40, 0, bD.o5, bD.o2, -1, !1) : aN.zZ(640, L(28, [ag.za[zP], elo]), 40, 0, bD.o5, bD.o2, -1, !1)
	}, this.zT = function(elo) {
		return 16e3 === (elo = bN.iH(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ch() {
	this.sF = new zb, this.xg = new zc
}

function zc() {
	this.hv = !1;
	this.zg = [], this.zh = 100;
	var nV, nW, gap, i5, zd, zf, zi = 0,
		zj = new Array(9),
		zk = [],
		zl = [],
		zm = 0,
		zn = 0,
		zo = 0,
		zp = 0;

	function a01() {
		zj.sort(function(fS, fT) {
			return fT.kZ - fS.kZ
		});
		for (var qg = "" + zj[0].pi, aB = 1; aB < 9; aB++) qg += "," + zj[aB].pi;
		for (aB = 0; aB < 9; aB++) qg += "," + zj[aB].kZ;
		bl.eU.wA(120, qg)
	}
	this.dh = function() {
		for (var zq = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zq.length; aB++) {
			var color = 6 === zq[aB] ? bD.oV : bD.o3;
			this.zg.push(bC.canvas.zr(ab.get(3), zq[aB], color))
		}
		for (aB = 0; aB < aj.sF.zs; aB++) zl.push(aj.sF.zt - aj.sF.zs + aB);
		for (aB = 0; aB < aj.sF.zu; aB++) zl.push(aj.sF.zv + aB);
		var zw = aj.sF.zx(bM.zw);
		for (aB = 0; aB < zw.length; aB++) zl.push(zw[aB]);
		! function() {
			var aB, g = bl.eU.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zj[aB] = {
					pi: 1015 + aB,
					kZ: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fb = parseInt(g[aB]),
						eh = (fb = 0 <= fb && fb < aj.sF.zt ? fb : 0, parseInt(g[aB + 9]));
					eh = 0 <= eh && eh < 1e3 ? eh : 0, zj[aB] = {
						pi: fb,
						kZ: eh
					}
				}
		}()
	}, this.show = function(lj, lk, a02) {
		var aB;
		if (zm = lj, zn = lk, zi = a02 || 0, this.hv = !0, zk = [], 0 === zi)
			for (aB = 0; aB < 9; aB++) zk.push(zj[aB].pi);
		else {
			var fT = 49 * zi,
				a02 = fT - 49;
			for (a02 >= zl.length && (zi = 1, a02 = 0, fT = 49), aB = a02 = (fT = Math.min(fT, zl.length)) - 49; aB < fT; aB++) zk.push(zl[aB])
		}
		zk.push(1024);
		a02 = zk.length, i5 = Math.floor((a0.a1.iI() ? .075 : .0468) * h.iJ), gap = Math.floor(i5 / 3), (zo = 10 * (zd = i5 + gap)) > h.i && (zo = h.i, gap = (zd = zo / 10) - (i5 = 3 * zd / 4)), zf = bN.fa(a02, 10) + !!(a02 % 10), (zp = zf *
			zd) > h.j && (zp = h.j, gap = (zd = zp / zf) - (i5 = 3 * zd / 4)), a02 = .5 * gap;
		nV = Math.min(Math.max(lj - .5 * zo + a02, a02), h.i - zo + a02), nW = Math.min(Math.max(lk - .5 * zp + a02, a02), h.j - zp + a02)
	}, this.hM = function(lj, lk, player) {
		if (!this.hv) return !1;
		if (this.a04(lj, lk)) {
			lj = bN.iH(bN.fa(lj - nV + .5 * gap, zd), 0, 9);
			if ((lj += 10 * bN.iH(bN.fa(lk - nW + .5 * gap, zd), 0, 9)) >= zk.length) return aL.sG(), !0;
			lk = zk[lj];
			if (1024 === lk) return this.show(zm, zn, zi + 1), !0;
			! function(pi) {
				for (var aB = 0; aB < 9; aB++) zj[aB].kZ = Math.floor(.99 * zj[aB].kZ);
				for (aB = 0; aB < 9; aB++)
					if (pi === zj[aB].pi) return zj[aB].kZ = Math.min(zj[aB].kZ + 30, 999), a01();
				zj.splice(5, 0, {
					pi: pi,
					kZ: Math.max(zj[4].kZ, 30)
				}), zj.pop(), a01()
			}(lk), player === aD.et ? bA.hZ.ph(lk) : bA.gV.pw(lk, player)
		}
		return aL.sG(), !0
	}, this.a04 = function(lj, lk) {
		return !(lj < nV - .5 * gap || lk < nW - .5 * gap || nV + zo - .5 * gap <= lj || nW + zp - .5 * gap <= lk)
	}, this.ve = function() {
		vf.fillStyle = bD.o2, vf.fillRect(nV - .5 * gap, nW - .5 * gap, zo, zp);
		for (var i1 = .5 * be.a05, f9 = (vf.lineWidth = be.a05, vf.strokeStyle = vf.fillStyle = bD.o5, vf.strokeRect(nV - .5 * gap + i1, nW - .5 * gap + i1, zo - 2 * i1, zp - 2 * i1), vf.imageSmoothingEnabled = !0, zk.length), aB = 0; aB <
			f9; aB++) this.a06(zk[aB], vf, nV + aB % 10 * zd, nW + bN.fa(aB, 10) * zd, i5);
		vf.imageSmoothingEnabled = !1
	}, this.a06 = function(pi, iB, fG, fI, i5) {
		var en;
		pi >= 1024 - aj.sF.zs ? (en = i5 / this.zh, iB.setTransform(en, 0, 0, en, fG, fI), iB.drawImage(this.zg[pi - 1024 + aj.sF.zs], 0, 0), iB.setTransform(1, 0, 0, 1, 0, 0)) : (bC.qz.textAlign(iB, 1), bC.qz.textBaseline(iB, 1), iB.font = bC.qz
			.sq(0, .89 * i5), iB.fillText(aj.sF.a07(pi), fG + .5 * i5, fI + (.35 - bC.qz.a08 + .56) * i5))
	}
}

function zb() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zs = 13, this.zu = this.emojis.length, this.zv = 676, this.zt = 1024, this.a09 = this.emojis.indexOf("💀"), this.a0A = this.a09 + 1, this.a0B = this.emojis.indexOf("🥇"), this.a0C = this.emojis.indexOf("😊"), this.a07 = function(fb) {
		return fb < this.zv ? String.fromCharCode(55356, 56806 + bN.fa(fb, 26), 55356, 56806 + fb % 26) : this.emojis[Math.min(fb - this.zv, this.zu - 1)]
	}, this.zx = function(qg) {
		for (var f9 = qg.length - 2, g = [], aB = 0; aB < f9; aB++) {
			var a0D = qg.charCodeAt(aB) - 56806,
				a0E = qg.charCodeAt(aB + 2) - 56806;
			0 <= a0D && a0D < 26 && 0 <= a0E && a0E < 26 && (g.push(26 * a0D + a0E), aB += 3)
		}
		return g
	}, this.a0F = function(fb) {
		return fb < this.zv
	}, this.a0G = function(fb) {
		return fb >= 1024 - this.zs
	}, this.a0H = function(fb) {
		return fb >= this.zv && fb < this.zv + this.a0A
	}
}

function c5() {
	this.tM = new a0I, this.x4 = new a0J, this.x6 = new a0K, this.dh = function() {
		this.tM.dh()
	}
}

function a0J() {
	this.xJ = function(qg) {
		for (var f9 = qg.length, i = bF, aB = 0; aB < f9; aB++) i.a8(16, qg.charCodeAt(aB))
	}
}

function a0I() {
	var a0L = new Uint8Array(64);
	this.dh = function() {
		var aB;
		for (a0L[0] = 45, a0L[37] = 95, aB = 0; aB < 10; aB++) a0L[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a0L[aB + 11] = 65 + aB, a0L[aB + 38] = 97 + aB
	}, this.tO = function(a0M) {
		for (var x9 = bJ, xH = new Uint8Array(a0M), aB = 0; aB < a0M; aB++) xH[aB] = x9.q7(6);
		return xH
	}, this.tN = function(xH) {
		for (var f9 = xH.length, a0N = a0L, g = [], aB = 0; aB < f9; aB++) g.push(String.fromCharCode(a0N[xH[aB]]));
		return g.join("")
	}, this.a0O = function(value, a0P) {
		for (var a0N = a0L, g = [], aB = 0; aB < a0P; aB++) g.push(String.fromCharCode(a0N[value >> 6 * (a0P - 1 - aB) & 63]));
		return g.join("")
	}
}

function cD() {
	var a0Q, a0R, a0S;
	a0Q = [32, 65, 191, 913, 931], a0R = [64, 127, 688, 930, 1155], a0S = new Array(a0Q.length + 1);
	for (var aB = 0; aB < a0S.length; aB++) {
		a0S[aB] = 0;
		for (var fS = aB - 1; 0 <= fS; fS--) a0S[aB] += a0R[fS] - a0Q[fS]
	}

	function a0Y(eh) {
		for (var aB = a0Q.length - 1; 0 <= aB; aB--)
			if (eh >= a0Q[aB] && eh < a0R[aB]) return aB;
		return -1
	}
	this.xA = function(qg) {
		return 0 !== (qg = qg.trim()).indexOf("Bot ") && 0 !== qg.indexOf("[Bot] ") && function(qg, a0V, a0W) {
			var f9 = (qg = qg.trim()).length;
			if (f9 < a0V || a0W < f9) return !1;
			for (var eh, a0X = 0, aB = 0; aB < f9; aB++)
				if (eh = qg.charCodeAt(aB), a0X += 65 <= eh && eh <= 90 || 1040 <= eh && eh <= 1071 ? 1 : 0, -1 === a0Y(eh)) return !1;
			if (3 < a0X && a0X > Math.floor(f9 / 2)) return !1;
			return !0
		}(qg, 3, 20)
	}, this.a0Z = function(qg) {
		for (var f9 = (qg = qg.trim()).length, g = [], aB = 0; aB < f9; aB++) {
			var eh, gh = a0Y(eh = qg.charCodeAt(aB));
			g.push(a0S[gh] + eh - a0Q[gh])
		}
		return g
	}, this.xO = function(g) {
		for (var eh, fT, qg = "", f9 = g.length, aB = 0; aB < f9; aB++)
			for (fT = 1; fT < a0S.length; fT++)
				if (g[aB] < a0S[fT]) {
					eh = a0Q[fT - 1] + g[aB] - a0S[fT - 1], qg += String.fromCharCode(eh);
					break
				} return qg
	}, this.a0a = function(qg) {
		for (var g = this.a0Z(qg), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0b = function(qg) {
		for (var g = new Array(Math.floor(qg.length / 3)), aB = 0; aB < qg.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qg.substring(aB, aB + 3));
		return this.xO(g)
	}, this.a0c = function(qg) {
		for (var fb, g = [qg.length], aB = 0; aB < qg.length; aB++) g[aB] = qg.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qg.length; aB++) aB === qg.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fb = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fb + (fb < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0d = function(qg) {
		for (var eh, result = "", aB = 0; aB < qg.length; aB++) 48 <= (eh = qg.charCodeAt(aB)) && eh < 58 ? result += String.fromCharCode(eh) : 65 <= eh && eh < 75 ? result += "0" + (eh - 65).toString() : 75 <= eh && eh < 91 ? result += (eh - 65)
			.toString() : 97 <= eh && eh < 123 && (result += (eh - 71).toString());
		return result
	}, this.a0e = function(qg) {
		for (var f9 = qg.length, g = [], aB = 0; aB < f9; aB++)(eh = qg.charCodeAt(aB)) < 58 ? g.push(qg[aB]) : (eh -= eh < 91 ? 65 : 71, g.push(String(bN.fa(eh, 10))), g.push(String(eh - 10 * bN.fa(eh, 10))));
		var f9 = g.length - 2,
			eh = 0,
			xH = [];
		for (aB = 0; aB < f9; aB += 3) xH[eh++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return xH
	}, this.a0f = function() {
		for (var eF, a0g = "", aB = 0; aB < 6; aB++) eF = 48 + ay.random() % 36, eF += 58 <= eF ? 39 : 0, a0g += String.fromCharCode(eF);
		return a0g
	}
}

function a0K() {
	this.a0Z = function(qg, xx, a0h) {
		for (var a0i = [], f9 = qg.length, max = 0, aB = 0; aB < f9; aB++) {
			var fb = qg.charCodeAt(aB);
			a0i.push(fb), max = Math.max(max, fb)
		}
		var xy = max < 128 ? 7 : 16;
		for (a0h.a8(xx, f9), a0h.a8(1, +(16 == xy)), aB = 0; aB < f9; aB++) a0h.a8(xy, a0i[aB])
	}
}

function dE() {
	this.a0j = new a0k, this.result = new a0l, this.a0m = new a0n, this.a0o = new a0p, this.a0q = new a0r, this.a0s = new a0t, this.dh = function() {
		this.result.dh()
	}
}

function a0n() {
	this.a0u = function() {
		for (var f9 = al.l0, a0v = al.l5, a0w = [], aB = 0; aB < f9; aB++) {
			var gh = a0v[aB];
			bC.gV.a0x(gh) && a0w.push(gh)
		}
		return a0w
	}, this.a0y = function() {
		if (0 === bi.kr[aD.a0z]) return this.a10();
		bj.kV(aD.a0z);
		for (var a0w = [], f9 = bQ.fe[0], fn = bQ.fn, aB = 0; aB < f9; aB++) {
			var gh = fn[aB];
			bC.gV.a0x(gh) && a0w.push(gh)
		}
		return a0w
	}, this.a10 = function() {
		var gh = m5[0];
		return bC.gV.a0x(gh) ? [gh] : []
	}, this.a11 = function(a0w) {
		for (var f9 = a0w.length, eY = 0, gx = ag.gx, aB = 0; aB < f9; aB++) eY += gx[a0w[aB]];
		return eY
	}
}

function a0k() {
	function a13() {
		if (2 === aD.a17) return 1;
		aw.a18(), aD.a17 = 2, aD.a19 = aD.a1A
	}

	function a15() {
		bT.a0q.a1B(), aX.show(1 === aD.a1C, !1, 2 === aD.a1C), bT.result.a1B(), bT.a0s.ec(), bT.a0o.ec(), bT.a0o.a1D(), aN.a1E(!0), aN.a1F(247), aN.a1F(956), aN.a1F(957), aV.mq(!0), aW.mq(!0), aw.mq(), bE.a1G(), aD.hI && bh.a1H.a1I(), bh.dp = !0, bd
			.a1J(), a0.a1.setState(0)
	}
	this.a12 = function() {
		a13() || (aD.a14 = 2, a15())
	}, this.a16 = function() {
		a13() || (aD.a14 = 1, a15())
	}
}

function a0p() {
	this.ec = function() {
		var a1R;
		2 === aD.a14 ? (aN.a1K(0, 59), aH.ne(2700)) : aD.km < 7 ? (a1R = bi.kr[aD.a0z], a1R = bi.a1T[a1R], aQ.a1U(L(29, [a1R]), 2, 1, 12), aN.zZ(0, L(30, [a1R]), 40, 0, bD.o5, bD.o2, -1, !1), aH.ne(2700)) : 8 === aD.km ? (aD.a1C ? aN.a1K(aD.a1P,
			2) : aN.a1K(1 - aD.et, 3), aD.a1Q.zO(aD.a1P), aH.nQ(aD.a1P, 2700, !1, 0)) : 9 === aD.km ? (aN.a1V(), aH.ne(2700)) : (aN.a1W(aD.a1P), aH.nQ(aD.a1P, 2700, !1, 0))
	}, this.a1D = function() {
		var qg;
		aD.hI || aD.ko || (qg = b0.y.a1X(), aD.km < 7 ? qg += "/log/team" : 8 === aD.km ? qg += "/log/1v1" : 9 === aD.km ? qg += "/log/zombies" : qg += "/log/br", aN.zZ(720, qg, 736, 0, bD.o5, bD.oT, -1, !1))
	}
}

function a0t() {
	function a1h() {
		var th;
		return 8 === aD.km ? 0 : (th = Math.floor(ag.a1i[aD.et] / 50), (th = Math.min(th, 200)) / 100)
	}

	function a1Z() {
		var th = a1h();
		0 !== th && aN.zZ(440, L(31, [th.toFixed(2)]), 40, 0, bD.oN, bD.o2, -1, !1)
	}
	this.ec = function() {
		var a1a;
		0 === bT.result.a1Y || 0 === bT.result.a0w.length || 8 === aD.km ? bC.gV.hL(aD.et) && a1Z() : (function(a1a) {
			7 !== aD.km && 10 !== aD.km || 0 !== aD.a1C && a1a && aN.zZ(600, L(35, [a1a.toFixed(2)]), 40, 0, bD.o5, bD.o2, -1, !1)
		}(a1a = function() {
			aN.zZ(520, L(32), 40, 0, bD.o5, bD.o2, -1, !1);
			for (var a0w = bT.result.a0w, f9 = a0w.length, gx = ag.gx, g = [], aB = 0; aB < f9; aB++) {
				var gh = a0w[aB];
				g.push({
					gh: gh,
					eY: gx[gh]
				})
			}
			g.sort((fS, fT) => fT.eY - fS.eY);
			var a1T = ag.za,
				eY = bT.result.a1j,
				th = bT.result.a1Y,
				qg = "",
				a1a = 0;
			for (aB = 0; aB < f9; aB++) {
				var ht = g[aB].eY * th / (100 * eY),
					a1l = a1T[g[aB].gh] + ": " + ht.toFixed(2) + "   ";
				g[aB].gh === aD.et && (a1a = ht), 2 < aB && 4 !== f9 ? 3 === aB && (qg += "(" + L(33, [f9 - 3]) + ")") : qg += a1l
			}
			aN.zZ(560, bC.ry.a1m(qg), 40, 0, bD.oN, bD.o2, -1, !1), a1a ? aN.zZ(580, L(34, [a1a.toFixed(2) + " + " + a1h().toFixed(2)]), 40, 0, bD.oN, bD.o2, -1, !1) : bC.gV.hL(aD.et) && a1Z();
			return a1a
		}()), 2 === aD.a14 || 7 <= aD.km || function(a1a) {
			var a0w = bT.result.a0w,
				f9 = a0w.length,
				a1n = ag.a1n,
				gx = ag.gx,
				a1o = [];
			loop: for (var aB = 0; aB < f9; aB++) {
				var gh = a0w[aB],
					a1p = bC.ry.a1q(a1n[gh]);
				if (null !== a1p) {
					for (var a1r = gx[gh], fT = a1o.length - 1; 0 <= fT; fT--)
						if (a1p === a1o[fT].name) {
							a1o[fT].eY += a1r, a1o[fT].g.push({
								gh: gh,
								eY: a1r
							});
							continue loop
						} a1o.push({
						name: a1p,
						eY: a1r,
						g: [{
							gh: gh,
							eY: a1r
						}]
					})
				}
			}
			if (0 !== a1o.length) {
				a1o.sort((fS, fT) => fT.eY - fS.eY);
				var g = a1o[0].g,
					a1s = (g.sort((fS, fT) => fT.eY - fS.eY), "[" + a1o[0].name + "]"),
					a1t = 512 * bT.result.a1Y / 26214400,
					lP = (aN.zZ(0, L(36, [a1s, a1t.toFixed(4)]), 40, 0, bD.o5, bD.o2, -1, !1), g.length),
					xF = a1o[0].eY,
					a1u = 1e4 * a1t;
				for (aB = 0; aB < lP; aB++)
					if (g[aB].gh === aD.et) {
						aN.zZ(600, L(37, [(a1u * g[aB].eY / (10 * xF)).toFixed(2)]), 40, 0, bD.o5, bD.o2, -1, !1), aN.zZ(640, L(38, [(.2 * a1a).toFixed(2), a1s]), 40, 0, bD.o5, bD.o2, -1, !1);
						break
					}
			}
		}(a1a))
	}, this.a1e = function() {
		var a1f, xh;
		aD.ko || (a1f = ag, xh = aD.et, 0 === a1f.a1g[xh]) || a1f.jY[xh] < 1 || 2 * a1f.qO[xh] > 3 * (a1f.jX[xh] + a1f.jY[xh]) || a1Z()
	}
}

function a0l() {
	this.dh = function() {
		this.a1v = 0, this.a0w = [], this.a1j = 0, this.a1Y = 0
	}, this.a1B = function() {
		var sb;
		aD.ko || (sb = this, 2 === aD.a14 ? sb.a0w = bT.a0m.a0u() : aD.i3 ? sb.a0w = bT.a0m.a0y() : sb.a0w = bT.a0m.a10(), sb.a1v = bk.a1x.a1y(), sb.a1j = Math.max(1, bT.a0m.a11(sb.a0w)), bA.gV.q5(), 8 === aD.km ? bT.result.a1Y = 0 : sb.a1Y =
			100 * bT.result.a1v * (1 + aD.zY))
	}
}

function a0r() {
	this.a1B = function() {
		if (2 === aD.a14) aD.a1C = 2;
		else {
			if (8 === aD.km) bC.gV.jr(0) || 0 === ag.n4[0] ? aD.a1P = 1 : bC.gV.jr(1) || 0 === ag.n4[1] ? aD.a1P = 0 : aD.a1P = +(ag.gx[1] > ag.gx[0]);
			else {
				if (aD.i3) {
					var l2 = bj.a21();
					if (aD.a0z = l2, bi.kr[l2]) return void(aD.a1C = +(bi.f7[aD.et] === l2))
				}
				aD.a1P = m5[0]
			}
			aD.a1C = +(aD.a1P === aD.et)
		}
	}
}

function dJ() {
	this.id = 0, this.e0 = 0, this.wN = null, this.wO = null, this.wP = null, this.wV = null, this.a1 = new a22, this.dh = function() {
		var self, e0;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e0 = Android.getVersion()) < 12 || (self.e0 = e0, self.id = 1, self.wO = Android),
			function(self) {
				var e0;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wP = mwIOSdataX, self.wV = window.webkit.messageHandlers.iosCommandA, e0 = self
					.wP.version, self.e0 = e0 ? Number(e0) : 0)
			}(this),
			function(self) {
				var wN;
				try {
					if (!(wN = window.localStorage)) return;
					wN.setItem("tls7", "1"), wN.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wN = wN
			}(this)
	}
}

function a22() {
	this.a26 = function() {
		bl.sR.wl(), bl.sR.wm(), b0.y.close(0, 3255), 0 === a0.id ? a0.wN && a0.wN.clear() : 1 === a0.id ? a0.wO.saveString(199, "") : 2 === a0.id && a0.wV.postMessage("clear")
	}, this.a27 = function() {
		2 === a0.id ? a0.wV.postMessage("showConsentForm") : 1 === a0.id && a0.wO.setState(7)
	}, this.a28 = function() {
		this.setState(14)
	}, this.iI = function() {
		return 1 === bl.eU.wB(2)
	}, this.a29 = function() {
		bl.eU.wA(102, "")
	}, this.setState = function(a2A) {
		1 === a0.id && 5 <= a0.e0 && a0.wO.setState(a2A)
	}, this.a2 = function() {
		var a2B;
		1 === a0.id && 7 <= a0.e0 ? a0.wO.setState(5) : ((a2B = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2B.toString())
	}, this.eS = function() {
		0 !== a0.id && (1 === a0.id ? a0.wO.prepareAd("8646194357") : 2 === a0.id && (0 === a0.e0 ? a0.wV.postMessage("prepare ad 2904813909") : a0.wV.postMessage("loadAds 2904813909")))
	}, this.eZ = function(eY) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.e0 && (a0.wO.presentAd(eY), !0) : 2 === a0.id && 0 !== a0.e0 && (a0.wV.postMessage("showAd"), !0))
	}, this.dr = function() {
		2 === a0.id && a0.e0 < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bM.a2C + "' target='_blank'>" + bM
			.a2C + "</a>", !0, [new w("⬅️ " + L(39), function() {
				t.u(0)
			}, bD.ol)]))
	}
}

function dY() {
	function a2F(e) {
		lo(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(39), function() {
				t.a2I()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bD.oS)]))
	}

	function a2T(e) {
		lo(e), t.u(4, 5, new v(L(40), a2P(e), !0))
	}

	function a2P(e) {
		var qg = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + qg : 4527 === e ? "Player already in lobby" + qg : 4577 === e ? "Your IP is banned." + qg : 4530 === e ? "Lobby Timeout" + qg : 4528 === e ?
			"Lobby Kick: Another login detected." + qg : 4540 === e ? "You have been kicked." + qg : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qg : 4555 === e ?
			"Invalid Account Error. Please Try Again." + qg : 4557 <= e && e <= 4560 ? "Please try again later!" + qg : "Unknown error" + qg
	}

	function lo(e) {
		a2K(e), t.y.z()
	}

	function a2K(e) {
		var a2A = aa.a2J();
		6 === a2A ? b0.y.a2V(e) : bp.a2G ? (t.x(), bp.uj(), b0.y.close(b0.y.a2H, 3256)) : 8 === a2A && aD.a2W(!0)
	}
	this.p = [], this.a2D = function(a2E, e) {
		if (this.p.push(e), 8 === t.tJ && 0 === a2E)
			if (4211 === e) a2F(e);
			else {
				if (bp.a2G && (4495 === e || 4480 === e) && b0.y.a2H !== a2E) return void t.a2I();
				if (8 !== aa.a2J() && a2K(), 4480 === e) return bl.sR.wn(), void t.u(4, 0, new v(L(42), L(43), !0));
				var a2M = 0;
				t.a2N() && 10 === t.a2N().a2O && (a2M = t.a2N().a2O), t.u(4, a2M, new v(L(40), a2P(e), !0))
			}
		else {
			a2M = aa.a2J();
			if (6 === a2M) {
				if (4211 === e) return void a2F(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aZ.a2Q(a2E)
			} else {
				if (!bp.a2G) return 8 === a2M ? void(a2E !== b0.y.a2R || aD.ko || 1 !== aD.a17 || aD.hI || aN.a2S(L(41, [e]))) : void 0;
				if (a2E !== b0.y.a2H) return
			}
			a2T(e)
		}
	}, this.a2U = function(e) {
		this.p.push(e), 8 === aa.a2J() ? aD.ko || 1 !== aD.a17 || aN.a2S(L(41, [e])) : a2T(e)
	}, this.s = function() {
		this.p.push(3268), lo(3268)
	}
}

function d8() {
	var a2X, a2Y, a2Z = -15e3,
		a2a = !1;

	function hM(e) {
		a2u() || (a2a = !0, a2v(e, 1), b0.y.a2w(b0.y.a2R), a2x(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2j(e) {
		a2Z = bh.eX, a2v(e, 1), b0.y.a2w(b0.y.a2R), 0 < e.touches.length && (a2X = Math.floor(h.k * e.touches[0].clientX), a2Y = Math.floor(h.k * e.touches[0].clientY), au.a2j(e) || a2x(a2X, a2Y))
	}

	function a2x(fG, fI) {
		t.hM(fG, fI), 0 === aD.a17 ? aa.hM(fG, fI) : bE.a2y(fG, fI) || bg.hM(fG, fI) || aX.hM(fG, fI) || aL.a2z(fG, fI) || aP.hM(fG, fI) || 0 <= aM.hM(fG, fI) || aw.hM(fG, fI) || bL.a30(fG, fI) || aL.a31(fG, fI)
	}

	function a2f(e) {
		a2u() || (a2a = !0, a2v(e, 1), a32(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2k(e) {
		a2Z = bh.eX, a2v(e, 1), 0 < e.touches.length && (a2X = Math.floor(h.k * e.touches[0].clientX), a2Y = Math.floor(h.k * e.touches[0].clientY), au.a2k(e) || a32(a2X, a2Y))
	}

	function a32(fG, fI) {
		bL.rR() || (bL.hE = fG, bL.hF = fI), t.a2f(fG, fI), 0 === aD.a17 ? aa.a2f(fG, fI) : (bV.hG(fG, fI), bg.a2f(fG, fI) || (aM.a2f(fG, fI), aL.hv() ? aL.a2f(fG, fI) : aR.hN ? aR.a2f(fG) && (bh.dp = !0) : (aV.a2f(fG, fI), aS.na && aS.a2f(fG, fI) &&
			(bh.dp = !0))))
	}

	function a2h(e) {
		a2u() || (a2v(e, 1), a33(), 0 === aD.a17 ? (aa.click(-1024, -1024), aT.s0()) : (aV.a34(-1024, -1024), aM.a2f(-1024, -1024), aR.a35(), aS.na = !1))
	}

	function a2g(e) {
		a2u() || (a2v(e, 1), a36(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bL.a2d && (bL.a2d = !1, e.preventDefault()))
	}

	function click(e) {
		a2u() || a2v(e, 1)
	}

	function a2l(e) {
		a2Z = bh.eX, a2v(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a17 ? aS.na = !1 : au.a37() || (a36(a2X, a2Y, !1), bL.a2d && (bL.a2d = !1, e.preventDefault()))
	}

	function a2m(e) {
		a2Z = bh.eX, a2v(e, 1), a36(a2X, a2Y, !1), bL.a2d && (bL.a2d = !1, e.preventDefault())
	}

	function a2n(e) {}

	function a2o(e) {}

	function a2p(e) {
		a2u() || a2v(e, 0)
	}

	function a36(fG, fI, a38) {
		a33(), 0 === aD.a17 ? aa.click(fG, fI) : (aV.a34(fG, fI), bg.a34(), aR.a35(), aS.na = !1, aL.click(fG, fI, a38) ? bh.dp = !0 : aM.a2g(fG, fI))
	}

	function a33() {
		t.a33()
	}

	function a2i(e) {
		var fG, fI, deltaY;
		a2u() || (a2v(e, 1), b0.y.a2w(b0.y.a2R), fG = Math.floor(h.k * e.clientX), fI = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2i(fG, fI, deltaY), 0 === aD.a17 ? aa.a2i(fG, fI, deltaY) : aV.a2i(fG, fI,
			deltaY) || (aR.a39(fG, fI) ? aR.a2i(deltaY) && (bh.dp = !0) : aS.a2i(fG, fI, deltaY)))
	}

	function a2q(e) {
		a2v(e, 0)
	}

	function a2v(e, id) {
		0 === id && t.hv() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a2J() && e.preventDefault()
	}

	function a2r(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2u() || 0 < h.sy || (e = e.code) && e.length && (bZ.eh(e, 18) ? ar.a3B(3) : bZ.eh(e, 22) ? ar.a3B(0) : bZ.eh(e, 20) ? ar.a3B(1) : bZ.eh(e, 24) ? ar.a3B(2) : bZ.eh(e, 10) ? aR.a3C(31 / 32) : bZ.eh(e, 8) ? aR.a3C(32 / 31) : bZ.eh(e, 6) ? aR
			.a3C(7 / 8) : bZ.eh(e, 4) ? aR.a3C(8 / 7) : bZ.eh(e, 14) ? 0 !== aD.a17 && aS.a2i(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bZ.eh(e, 16) ? 0 !== aD.a17 && aS.a2i(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bZ.eh(e, 0) ?
			aD.a17 && bV.hH(0) : bZ.eh(e, 2) ? aD.a17 && bV.hH(1) : bZ.eh(e, 30) ? aD.a17 && bV.hH(2) : bZ.eh(e, 26) ? aD.a17 && bV.hp() : bZ.eh(e, 28) && aD.a17 && bV.hu())
	}

	function a2s(e) {
		if (!a2u() && !(0 < h.sy || bh.eX < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a3D(1) || "Space" === code && t.a3D(0))) return bp.a2G ? bp.up.a3D(code) ? void 0 : void("Escape" === code && bL.fc()) : void(8 !== aa.a2J() && aa.a3D(e) ? bh.dp = !0 : "Escape" ===
				code ? bL.fc() : bZ.eh(code, 18) ? ar.a3E(3) : bZ.eh(code, 22) ? ar.a3E(0) : bZ.eh(code, 20) ? ar.a3E(1) : bZ.eh(code, 24) ? ar.a3E(2) : bZ.eh(code, 12) ? bE.a3F(!aD.nY) : "Space" === code && aD.a17 && (aM.hJ && aM.a3G(), aD
					.hI) && bE.a3H(!1))
		}
	}

	function a2t() {
		"hidden" !== document.visibilityState && (bh.dp = !0)
	}

	function a2u() {
		return a2Z + 15e3 > bh.eX
	}

	function resize() {
		h.a3J()
	}
	this.a2b = 0, this.a2c = "", this.a2d = !1, this.hE = 0, this.hF = 0, this.dh = function() {
		a2e.addEventListener("mousedown", hM, {
			passive: !1
		}), a2e.addEventListener("mousemove", a2f, {
			passive: !1
		}), a2e.addEventListener("mouseup", a2g, {
			passive: !1
		}), a2e.addEventListener("click", click, {
			passive: !1
		}), a2e.addEventListener("mouseleave", a2h, {
			passive: !1
		}), a2e.addEventListener("wheel", a2i, {
			passive: !1
		}), a2e.addEventListener("touchstart", a2j, {
			passive: !1
		}), a2e.addEventListener("touchmove", a2k, {
			passive: !1
		}), a2e.addEventListener("touchend", a2l, {
			passive: !1
		}), a2e.addEventListener("touchcancel", a2m, {
			passive: !1
		}), a2e.addEventListener("dragover", a2n), a2e.addEventListener("drop", a2o), a2e.addEventListener("dblclick", a2p), document.addEventListener("contextmenu", a2q), document.addEventListener("keydown", a2r), document.addEventListener(
			"keyup", a2s), document.addEventListener("visibilitychange", a2t), window.addEventListener("resize", resize)
	}, this.a30 = function(fG, fI) {
		return !!bE.hM(fG, fI) || !!(aV.hM(fG, fI) || aS.hM(fG, fI) || aR.hM(fG, fI) || aN.hM(fG, fI))
	}, this.a3I = a2u, this.rR = function() {
		return !a2a || 0 < a2Z
	}, this.fc = function() {
		if (!t.hv()) return 8 === aa.a2J() ? aD.nY ? void bE.a3F(!1) : bg.hv ? void bg.a3G() : void aM.a3G() : void(7 !== aa.a2J() && 6 === aa.a2J() && aZ.a3K());
		t.a3D(2)
	}
}

function c1() {
	this.qz = new a3L, this.r7 = new a3M, this.gV = new a3N, this.ry = new a3O, this.zG = new a3P, this.a3Q = new a3R, this.canvas = new a3S, this.color = new a3T, this.a3U = new a3V, this.dh = function() {
		this.qz.wk()
	}
}

function a3M() {
	this.xf = function(g) {
		g.fill(0)
	}, this.a3W = function(g) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++) g[aB] = []
	}, this.a3X = function(a0D, a3Y) {
		for (var a0E = bQ.fj, aB = 0; aB < 3; aB++) a0E[aB] = a3Y * a0D[aB];
		return a0E
	}, this.a3Z = function(a0D, a0E, a3a) {
		for (var jj = 0, aB = 0; aB < 3; aB++) jj += Math.abs(a0D[aB] - a0E[aB]);
		return a3a <= jj
	}, this.a3b = function(a0D, a3c) {
		for (var aB = 0; aB < 3; aB++) a0D[aB] = bN.iH(a0D[aB] + a3c, 0, 255);
		return a0D
	}, this.a3d = function(g, td, te) {
		te = te || g.length - 1;
		for (var a3e = 0, aB = td = td || 0; aB <= te; aB++) a3e += g[aB];
		return a3e
	}, this.a3f = function(g, a3g) {
		for (var aB, a3h, f9 = g.length, a3i = [], fS = f9 - 1; 0 <= fS; fS--) {
			for (aB = a3h = 0; aB < f9; aB++) a3g(g[aB]) < a3g(g[a3h]) && (a3h = aB);
			f9--, a3i.push(g[a3h]), g[a3h] = g[f9], g.pop()
		}
		return a3i
	}, this.min = function(g) {
		var aB, fb, f9 = g.length;
		if (0 === f9) return 0;
		for (fb = g[0], aB = 1; aB < f9; aB++) fb = Math.min(fb, g[aB]);
		return fb
	}, this.max = function(g) {
		var f9 = g.length;
		if (0 === f9) return 0;
		for (var fb = g[0], aB = 1; aB < f9; aB++) fb = Math.max(fb, g[aB]);
		return fb
	}, this.a3j = function(g, fb) {
		for (var f9 = g.length, gc = 0, aB = 0; aB < f9; aB++) gc += g[aB] > fb;
		return gc
	}, this.a3k = function(a3l, a3m, min) {
		for (var f9 = a3m[0], aB = f9 - 1; 0 <= aB; aB--) a3l[aB] < min && (a3l[aB] = a3l[--f9]);
		a3m[0] = f9
	}, this.a3n = function(g, f9, value) {
		for (var aB = 0; aB < f9; aB++) g[aB] -= value
	}, this.a3o = function(g) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3p = function(qg, g, a3q) {
		g.fill(0);
		for (var th = qg.split(","), f9 = Math.min(th.length, g.length), aB = 0; aB < f9; aB++) g[aB] = Math.min(parseInt(th[aB]), a3q)
	}, this.a3r = function(qg, g, rv) {
		g.fill("");
		for (var th = qg.split('"'), f9 = Math.min(th.length, 2 * g.length), i1 = 0, aB = 1; aB < f9; aB += 2) g[i1++] = th[aB].slice(0, rv)
	}, this.a3s = function(g, gc) {
		if (0 === gc) g.fill(0);
		else {
			var a3e = this.a3d(g),
				f9 = g.length;
			if (0 === a3e) g.fill(bN.fa(gc, f9));
			else
				for (var aB = 0; aB < f9; aB++) g[aB] = bN.fa(gc * g[aB], a3e);
			if (0 === (a3e = this.a3d(g))) g[1] = gc;
			else
				for (var i1 = 0; a3e++ < gc;) g[i1 = (i1 + 1) % f9] && g[i1]++
		}
	}, this.a3t = function(g) {
		if (!g) return 0;
		var f9 = g.length;
		if (0 === f9) return 0;
		for (var fb = g[f9 - 1], aB = f9 - 2; 0 <= aB; aB--)
			if (g[aB] !== fb) return aB + 2;
		return 1
	}, this.a3u = function(g) {
		for (var a3e = 0, aB = 0; aB < g.length; aB++) a3e += g[aB].length;
		return a3e
	}, this.a3v = function(a3w) {
		for (var g = [], aB = 0; aB < a3w.length; aB++) g = g.concat(a3w[aB]);
		return g
	}, this.has = function(g, fb) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++)
			if (g[aB] === fb) return !0;
		return !1
	}
}

function a3S() {
	this.zr = function(a3x, eG, a3y) {
		var i5 = a3x.height,
			a3z = bC.qz.xV(i5, i5),
			iB = bC.qz.getContext(a3z);
		return function(i, iB, a3y) {
			iB.fillStyle = a3y, iB.beginPath(), iB.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), iB.fill()
		}(i5, iB, a3y), iB.drawImage(a3x, -eG * i5, 0), a3z
	}, this.a41 = function(a42) {
		var iB, i8, i5 = a42.height;
		return a42.width === i5 && (i8 = (iB = bC.qz.getContext(a42, !0)).getImageData(0, 0, i5, i5), bC.a3Q.a43(i8.data, i5, i5, .9), iB.putImageData(i8, 0, 0)), a42
	}
}

function a3T() {
	this.a44 = function(fb) {
		return [fb >> 12 & 63, fb >> 6 & 63, 63 & fb]
	}, this.a45 = function(fb) {
		for (var g = this.a44(fb), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a46 = function(fb) {
		fb = this.a45(fb);
		return bC.color.nx(fb[0], fb[1], fb[2])
	}, this.a47 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nx = function(eF, th, fT) {
		return "rgb(" + eF + "," + th + "," + fT + ")"
	}, this.nz = function(eF, th, fT, fS) {
		return "rgba(" + eF + "," + th + "," + fT + "," + fS.toFixed(3) + ")"
	}, this.rT = function(eh) {
		for (var g = eh.split("(")[1].split(","), fi = bQ.fi, aB = 0; aB < 3; aB++) fi[aB] = parseInt(g[aB]);
		return 4 === g.length ? fi[3] = 255 * parseFloat(g[3].slice(0, -1)) : fi[3] = 255, fi
	}, this.rU = function(a48, fC) {
		for (var g = a48.slice(a48.indexOf("(") + 1, a48.indexOf(")")).split(","), fi = bQ.fi, aB = 0; aB < 3; aB++) fi[aB] = bN.iH(parseInt(g[aB].trim(), 10) + fC, 0, 255);
		return 3 === g.length ? this.nx(fi[0], fi[1], fi[2]) : (a48 = parseFloat(g[3].trim()), this.nz(fi[0], fi[1], fi[2], a48 = 0 === a48 ? .3 : a48))
	}, this.vK = function(a49, a4A) {
		for (var jj = 0, aB = 0; aB < 3; aB++) jj += Math.abs(a4A[aB] - a49[aB]);
		if (!(240 <= jj))
			for (aB = 0; aB < 3; aB++) a4A[aB] = a49[aB] + (a49[aB] < 128 ? 80 : -80)
	}, this.a4B = function(g) {
		for (var qg = "#", aB = 0; aB < 3; aB++) {
			var eF = g[aB].toString(16);
			qg += 1 === eF.length ? "0" + eF : eF
		}
		return qg
	}, this.a4C = function(qg) {
		var eF, th;
		return qg.length < 7 ? bD.nw : (eF = parseInt(qg.slice(1, 3), 16), th = parseInt(qg.slice(3, 5), 16), qg = parseInt(qg.slice(5, 7), 16), this.nx(eF, th, qg))
	}
}

function a3P() {
	this.a4D = function(qg, font, maxWidth) {
		if (font && (vf.font = font), vf.measureText(qg).width <= maxWidth) return qg;
		for (var aB = qg.length - 1; 1 <= aB; aB--)
			if (qg = qg.substring(0, aB), vf.measureText(qg + "...").width <= maxWidth) return qg + "...";
		return "..."
	}
}

function a3V() {
	var a4F = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4G = function(eX) {
		var a4I, qg = new Date(eX.getTime() - 6e4 * eX.getTimezoneOffset()).toUTCString();
		return qg.length < 12 || (qg = qg.substring(5, qg.length), 0 === (eX = eX.getTimezoneOffset())) ? qg : (a4I = (eX < 0 ? "+" : "-") + bN.fa(Math.abs(eX), 60), 0 == (eX = Math.abs(eX) % 60) ? qg + a4I : qg + a4I + ":" + (eX < 10 ? "0" :
			"") + eX)
	}, this.a4J = function(eX) {
		var qg = eX.toUTCString();
		return qg.length < 12 ? qg : function(eX) {
			return a4F[eX.getUTCDay()]
		}(eX) + ", " + qg.substring(5, qg.length - 4)
	}
}

function a3L() {
	var a4L = null;
	this.a08 = 0, this.wk = function() {
		var fb = bl.eU.data[5].value;
		a4L = "px " + fb, "system-ui" !== fb && (a4L += ", system-ui"), this.a08 = i4(32, 32, ["a", "b", "m"], 200, a4L)
	}, this.xV = function(i, j) {
		var eh = document.createElement("canvas");
		return eh.width = i, eh.height = j, eh
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zG, i, j) {
		return zG.getImageData(0, 0, i, j)
	}, this.sq = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4L : 1 === type ? "bold " + size + a4L : 2 === type ? "lighter " + size + a4L : 3 === type ? "italic " + size + a4L : 4 === type ? "oblique " + size + a4L : 5 === type ? "small-caps " +
			size + a4L : "small-caps bold " + size + a4L
	}, this.textAlign = function(iB, id) {
		iB.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iB, id) {
		iB.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.r9 = function(e, code, color) {
		color = this.r8(be.ss) + " solid " + (color || bD.o5);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tj = function(e, fG, fI, i, j) {
		e = e.style;
		e.left = this.tk(fG), e.top = this.tk(fI), e.width = this.tk(i), e.height = this.tk(j)
	}, this.r0 = function(fb) {
		return 1 + fb * a0.a1.iI()
	}, this.sI = function(nh, gi) {
		return nh * this.r0(void 0 === gi ? .5 : gi) * h.iJ / h.k
	}, this.ti = function(nh, gi) {
		return nh * this.r0(void 0 === gi ? .5 : gi) * h.iJ
	}, this.tP = function(nh, gi, a4M) {
		return this.r0(gi) * Math.min(nh * h.iJ, a4M * h.i) / h.k
	}, this.r8 = function(fb) {
		return fb.toFixed(1) + "px"
	}, this.tk = function(fb) {
		return this.v5(fb).toFixed(1) + "px"
	}, this.v5 = function(fb) {
		return fb / h.k
	}, this.a4O = function(t7, a4P) {
		for (var qg = "<ul>", f9 = t7.length, aB = 0; aB < f9; aB++) qg += "<li>" + t7[aB] + ": <a href='" + a4P[aB] + "' target='_blank'>" + a4P[aB] + "</a></li>";
		return qg += "</ul>"
	}, this.a4Q = function(a4R) {
		return "<a href='" + a4R + "' target='_blank'>" + a4R + "</a>"
	}, this.a4S = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.vI = function(e) {
		var eY = e.textContent;
		bC.ry.a4T(eY, "✔") || (1 === eY.length ? e.textContent = "✔" : e.textContent = eY + " ✔", setTimeout(function() {
			e.textContent = eY
		}, 500))
	}, this.measureText = function(qg) {
		return vf.measureText(qg).width
	}, this.tZ = function(a4U) {
		a4U.style.overflowX = "auto", a4U.style.overflowY = "hidden", a4U.style.whiteSpace = "nowrap", a4U.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tm = this.scrollLeft, e.preventDefault())
		}), a4U.addEventListener("scroll", function() {
			this.tm = this.scrollLeft
		})
	}
}

function a3N() {
	this.hK = function(a2A) {
		return 0 === a2A ? 1 === aD.a17 && aD.hX : 1 === a2A ? 1 === aD.a17 && !aD.hX : 2 === aD.a17
	}, this.hL = function(player) {
		return 0 !== ag.n4[player] && 2 !== ag.a4V[player]
	}, this.a4W = function(player) {
		return player === aD.et && 2 !== ag.a4V[player]
	}, this.l8 = function(player, jd) {
		return player !== jd && (0 === bi.f7[player] || bi.f7[player] !== bi.f7[jd])
	}, this.mF = function() {
		return al.l0 < 2 ? 0 : aD.i3 ? 1 < bj.a4X() : ag.gx[m5[1]]
	}, this.a4Y = function() {
		var l0 = al.l0;
		if (0 !== l0) {
			if (!aD.i3) return !this.jr(m5[0]);
			for (var f7 = bi.f7, l2 = bj.l3(), l5 = al.l5, aB = l0 - 1; 0 <= aB; aB--) {
				var gh = l5[aB];
				if (f7[gh] === l2 && !this.jr(gh)) return 1
			}
		}
		return 0
	}, this.a4Z = function(player) {
		return player === aD.et
	}, this.a4a = function(jd, nh) {
		return ag.hB[aD.et] < nh * ag.hB[jd]
	}, this.jr = function(player) {
		return player >= aD.kU || 2 === ag.a4V[player]
	}, this.lS = function(player) {
		return 0 !== ag.n4[player]
	}, this.a0x = function(player) {
		return player < aD.kU
	}, this.qM = function(a4b, a4c) {
		return a4b !== a4c
	}, this.gY = function(player, fb) {
		var min;
		return fb = this.a4d(player, fb), ag.hB[player] += fb, ag.a4e[player] && (min = Math.min(ag.a4e[player], ag.hB[player]), ag.a4e[player] -= min, ag.hB[player] -= min), fb
	}, this.a4d = function(player, fb) {
		var a4f = ag.hB[player];
		return fb = Math.min(fb, ag.gx[player] * aD.a4g - a4f), fb = Math.min(fb, aD.a4h - a4f), Math.max(fb, 0)
	}, this.mc = function(player, il, a4i, a4j) {
		var a4f = ag.hB[player],
			il = bN.fa(a4f * (il + 1), 1024),
			a4i = bN.fa(a4i * a4f, 1024),
			il = Math.min(il, a4f - a4i);
		return 10 === aD.km && (il = b4.a4l(player, il)), bQ.fg[0] = il, bQ.fg[1] = a4i, a4j <= il
	}, this.pq = function(player, pY, pX) {
		var player = ag.hB[player],
			a4k = bN.fa(64 * player, 1024);
		return pY = Math.min(pY, player - a4k), pY = this.a4d(pX, pY), bQ.fg[0] = pY, bQ.fg[1] = a4k, 1 <= pY
	}, this.a4m = function(player, pY, pX) {
		var player = ag.hB[player],
			a4k = bN.fa(64 * player, 1024);
		return pY = Math.min(pY, player - a4k), this.a4d(pX, pY)
	}, this.ps = function(pY, pX) {
		return pY = this.a4d(pX, pY), bQ.fg[0] = pY, bQ.fg[1] = 0, 1 <= pY
	}, this.ik = function(player, a4n) {
		return bN.fa(ag.hB[player] * (a4n + 1), 1024)
	}, this.a4o = function(player, a4i) {
		a4i = bN.fa(a4i * ag.hB[player], 1024);
		bQ.fg[1] = a4i, ag.hB[player] -= a4i
	}, this.gW = function(player, a4p) {
		var fu, fw, fT = ag.hB[player];
		return a4p <= fT ? ag.hB[player] -= a4p : (ag.hB[player] = 0, fw = ag.a4e[player] + (fu = 5 * ((fT = a4p - fT) >> 2)), bf.gZ(player, fu - fT, 12), fw <= aD.a4q ? ag.a4e[player] = fw : (ag.a4e[player] = aD.a4q, bf.gZ(player, fw - aD.a4q,
			18))), a4p
	}, this.lg = function(player, il) {
		var hB = ag.hB,
			a4f = hB[player],
			il = bN.fa(a4f * (il + 1), 1024),
			a4k = Math.max(bN.fa(a4f, 10), 1e3);
		return (il = Math.min(il, a4f - a4k)) < 0 ? (hB[player] = 0, a4k = Math.min(1e3, a4f + aD.a4q - ag.a4e[player]), bQ.fg[1] = a4k, ag.a4e[player] += a4k - a4f, 0) : (bQ.fg[1] = a4k, 10 === aD.km && (il = b4.a4l(player, il)), hB[player] -=
			a4k + il, il)
	}, this.me = function(player) {
		ag.hB[player] -= bQ.fg[0] + bQ.fg[1]
	}, this.qN = function(player, jd) {
		return (jd = Math.min(jd, aD.f6)) < aD.f6 && 0 === ag.n4[jd] && (jd = aD.f6), (bQ.f5[0] = jd) === aD.f6 || bu.f2(player, jd)
	}, this.qQ = function(player, pX) {
		return 0 !== ag.n4[pX] && !bu.f2(player, pX)
	}, this.a4r = function(player, a4s) {
		for (var gh, f9 = al.l0, a4t = 0, a4u = m5, aB = 0; aB < f9; aB++)
			if (gh = a4u[aB], !this.jr(gh)) {
				if (player === gh) return !0;
				if (++a4t > a4s) return !1
			} return !1
	}, this.m1 = function(gh) {
		var a4v = aD.i3 ? bj.l1() : ag.gx[m5[0]];
		return a4v >= bN.fa(gh * aD.kE, 100)
	}, this.a4w = function(fb, min, max) {
		return Math.floor(bN.iH(isNaN(fb) ? 0 : Number(fb), min, max))
	}
}

function a3R() {
	this.a4x = function(canvas, a4y, a4z) {
		var i = canvas.width,
			j = canvas.height,
			eh = bC.qz.xV(i, j),
			iB = bC.qz.getContext(eh, !0),
			canvas = (iB.drawImage(canvas, 0, 0), iB.getImageData(0, 0, i, j));
		return a4y(canvas.data, i, j, a4z), iB.putImageData(canvas, 0, 0), eh
	}, this.a50 = function(xg, i, j) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xg[3 + aB] = xg[aB], xg[aB] = xg[1 + aB] = xg[2 + aB] = 255
			}
	}, this.a51 = function(xg, i, j) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xg[1 + aB] > xg[2 + aB] + 10 && (xg[3 + aB] = xg[aB], xg[1 + aB] = xg[2 + aB])
			}
	}, this.a52 = function(xg, i, j, a4z) {
		for (var gap = Math.floor(Math.min(i, j) * a4z), fG = 0; fG < i; fG++)
			for (var aB, fI = 0; fI < j; fI++)(fG < gap || fI < gap || i - gap <= fG || j - gap <= fI) && (xg[3 + (aB = 4 * (fG + fI * i))] = 255 - 255 * (xg[1 + aB] - xg[aB]) / (255 - xg[aB]))
	}, this.a53 = function(xg, i, j, a4z) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xg[aB] = a4z[0], xg[1 + aB] = a4z[1], xg[2 + aB] = a4z[2]
			}
	}, this.a54 = function(xg, i, j, a4z) {
		for (var gap = Math.floor(i * a4z), fG = 0; fG < i; fG++)
			for (var aB, fI = 0; fI < j; fI++)(fG < gap || fI < gap || i - gap <= fG || j - gap <= fI) && (xg[aB = 4 * (fG + fI * i)] = xg[1 + aB] = xg[2 + aB] = 0)
	}, this.a55 = function(xg, i, j) {
		for (var fI, aB, fG = i - 1; 0 <= fG; fG--)
			for (fI = j - 1; 0 <= fI; fI--) 200 < xg[1 + (aB = 4 * (fG + fI * i))] && xg[1 + aB] - 20 > xg[aB] && xg[1 + aB] - 20 > xg[2 + aB] ? xg[aB] + xg[2 + aB] < 40 ? xg[3 + aB] = 0 : (xg[3 + aB] = xg[aB], xg[aB] = 255, xg[1 + aB] = 255, xg[
				2 + aB] = 255) : xg[aB] < 50 && xg[1 + aB] < 50 && xg[2 + aB] < 50 && (xg[aB] + xg[1 + aB] + xg[2 + aB] < 50 ? xg[3 + aB] = 180 : xg[3 + aB] = 180 + Math.floor(75 * (xg[aB] + xg[1 + aB] + xg[2 + aB] - 50) / 100))
	}, this.a56 = function(xg, i, j) {
		for (var fI, aB, fG = i - 1; 0 <= fG; fG--)
			for (fI = j - 1; 0 <= fI; fI--) xg[1 + (aB = 4 * (fG + fI * i))] > xg[aB] + 20 && xg[1 + aB] > xg[2 + aB] + 20 && xg[aB] + xg[2] < 40 && (xg[3 + aB] = 255 - xg[1 + aB], xg[aB] = xg[1 + aB] = xg[2 + aB] = xg[aB])
	}, this.a43 = function(xg, i, j, a4z) {
		for (var eF = i >> 1, fG = 0; fG < i; fG++)
			for (var fI = 0; fI < j; fI++) Math.sqrt((fG - eF) * (fG - eF) + (fI - eF) * (fI - eF)) > a4z * eF && (xg[4 * (fG + fI * i) + 3] = 0)
	}
}

function a3O() {
	var a57 = {
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
		a58 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rz = function(ej) {
		return ej.replace(a58, function(match) {
			return a57[match] || match
		})
	}, this.a0O = function(fb) {
		var aB, a59, a5A, a5B, a5C;
		if (fb < 0) return "-" + this.a0O(Math.abs(fb));
		if (fb < 1e3) return fb.toString();
		for (a59 = Math.floor(Math.log(fb + .5) / Math.log(10)) + 1, a5A = Math.floor((a59 - 1) / 3), a5C = (a5B = fb.toString()).substring(a59 - 3, a59), aB = 1; aB < a5A; aB++) a5C = a5B.substring(a59 - 3 * (aB + 1), a59 - 3 * aB) + " " + a5C;
		return a5B.substring(0, a59 - 3 * a5A) + " " + a5C
	}, this.a5D = function(gh, a59) {
		return gh.toFixed(a59) + "%"
	}, this.a5E = function(fb, a5F) {
		return fb.toFixed(bN.iH(Math.floor((void 0 === a5F ? 3 : a5F) - Math.log10(Math.max(fb, 1))), 0, 8))
	}, this.a5G = function(fb, nh, a59) {
		return (fb * nh).toFixed(a59)
	}, this.a1q = function(username) {
		var fD, ey = username.indexOf("[");
		return !(ey < 0) && 1 < (fD = username.indexOf("]")) - ey && fD - ey <= 8 ? username.substring(ey + 1, fD).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1q;
	this.a5H = function(qg) {
		for (var fS = Math.floor(.5 * qg.length + .5), nn = Math.floor(.5 * (fS - 1)), aB = 0; aB < nn; aB++)
			for (var fT = -1; fT < 2; fT += 2) {
				var eh = fS + fT * aB;
				if (" " === qg[eh]) return [this.a1m(qg.substring(0, eh)), this.a5I(qg.substring(eh))]
			}
		return [qg.substring(0, fS), qg.substring(fS)]
	}, this.a5I = function(qg) {
		for (var f9 = qg.length, aB = 0; aB < f9; aB++)
			if (" " !== qg[aB]) return qg.substring(aB);
		return qg
	}, this.a1m = function(qg) {
		for (var aB = qg.length - 1; 0 <= aB; aB--)
			if (" " !== qg[aB]) return qg.substring(0, aB + 1);
		return qg
	}, this.a5J = function(qg, a5K) {
		return qg.split("(")[0] + "(🧈 " + a5K.toFixed(2) + ")"
	}, this.startsWith = function(qg, a5L) {
		return qg.substring(0, a5L.length) === a5L
	}, this.a4T = function(qg, a5L) {
		var f9 = qg.length;
		return qg.substring(f9 - a5L.length, f9) === a5L
	}, this.a5M = function(g, a5N, a5O) {
		var qg = "",
			f9 = g.length - 1;
		a5O = a5O || "";
		for (var aB = 0; aB < f9; aB++) qg += a5O + g[aB] + a5O + ",", (aB + 1) % a5N == 0 && (qg += "\n");
		return qg += a5O + g[f9] + a5O
	}, this.a5P = function(qg, a0D, a0E) {
		return qg.replace(new RegExp(a0D, "g"), a0E)
	}
}

function a5Q() {
	this.eg = function(player, ev) {
		aI.z0(player, bO.fH(ev), bO.fJ(ev)) && (bh.dp = !0), aD.ko && this.ec()
	}, this.ec = function() {
		aD.hX = !1;
		for (var aB = 0; aB < aD.kU; aB++) 0 !== ag.n4[aB] && 0 === ag.gx[aB] && aI.z7(aB);
		0 !== ag.n4[aD.et] ? (bf.n0[7] = ag.gx[aD.et], bf.n0[8] = ag.hB[aD.et], aR.a5R(), aW.a5S(), aD.hI || aH.nP(ag.j2[aD.et] - 5, ag.j4[aD.et] - 5, ag.j3[aD.et] + 5, ag.j5[aD.et] + 5), av.dh()) : aX.show(!1, !1, !1, !0), aN.a5T(18), af.a5U(),
			af.mq(!0), bR.y.a5V(), aL.sG(), aD.qL = null, bd.a5W = !0, bd.a5X(), aD.ko && a0.a1.setState(1)
	}
}

function c3() {
	this.f6 = 512, this.a4h = 15e8, this.a5Y = 1e9, this.a4q = 5e4, this.a5Z = 512, this.gT = 2, this.et = 0, this.kU = 0, this.a1A = 0, this.kq = 0, this.a19 = 0, this.yB = 512, this.yG = 512, this.a4g = 150, this.ko = !0, this.hI = 0, this.a17 = 0,
		this.kE = 0, this.nY = !1, this.hX = 0, this.a5a = 0, this.i3 = !1, this.yI = 0, this.yJ = 0, this.km = 0, this.zY = 0, this.qL = null, this.a1Q = new zM, this.a5b = 30, this.a14 = 0, this.a1C = 0, this.a1P = 0, this.a0z = 0, this.data =
		new a5c, this.a5d = new a5e, this.a5f = 0, this.a5g = "", this.a5h = function() {
			bQ.dh(), bT.dh(), bs.clear(), this.a1A = this.kU = this.data.humanCount, this.ko = 1 === this.a1A, this.nY = !1, this.hI = this.data.isReplay, this.km = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zY = this.data.isContest, this.i3 = this.km < 7 || 9 === this.km, this.km = 10 === this.km && this.ko ? 7 : this.km, this.km = 8 === this.km && 2 !== this.kU ? 7 : this.km, az.dh(),
				this.yI = this.data.numberTeams, this.data.teamPlayerCount ? this.yJ = +(0 < this.data.teamPlayerCount[0]) : (this.yJ = 0, this.i3 && this.ko && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yI + 1), aD.a5d.a5i())), this.a5b = this.kU <= 2 ? 30 : this.kU <= 50 ? 40 : 50, this.a5a = this.hX = this.data.selectableSpawn, this.qL = this.hX ? new a5Q : null, 1 === l.dy ? this.yB = this.kU : this.yB = this.data
				.playerCount, this.yG = this.yB, this.kq = this.yB - this.kU, this.a19 = 0, this.et = this.data.selectedPlayer, this.a14 = 0, this.a1C = 0, this.a1P = 0, this.a0z = 0, ay.a5j(this.data.spawningSeed), ae.dh(), ag.dh(), an.dh(), ai
				.a5k(), bA.pQ.q9 = [], bi.dh(), this.a17 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bf.dh(), a5l(), ac.di(), ap.a5m(), bd.dh(), ac.dh(), at.dh(), bO.dh(), bP.dh(), ao.dh(), bX.a5n(), aE.dh(),
				ai.a7(), aI.dh(), aJ.dh(), al.a5o(), bB.dh(), bj.dh(), bR.dh(), bg.dh(), a5p.putImageData(a5q, 0, 0), aV.dh(), aS.dh(), aR.dh(), bE.dh(), aw.dh(), aU.dh(), aW.dh(), aM.dh(), aQ.dh(), aN.dh(), aP.dh(), aL.dh(), aX.dh(), aF.dh(), aG
				.dh(), gC(), ad.dh(), af.dh(), b4.dh(), b5.dh(), b1.dh(), b7.dh(), b8.dh(), this.a1Q.dh(), bh.a5n(), aH.nO(), 0 === ag.n4[aD.et] && aX.show(!1, !0), af.mq(!0), av.dh(), bh.dp = !0, this.hI || this.ko && this.hX || a0.a1.setState(1),
				this.a5f = 0
		}, this.a2W = function(eW) {
			bB.qJ.a5s.length ? this.a5g = bB.qJ.a5s : this.a5g = bB.a5t.a0Z(), b0.y.a5u(), bs.clear(), this.a17 = 0, bh.a5v(), a0.a1.setState(0), aa.setState(0), bW.eO.show(eW), 2 === this.a5f ? t.y.a5w(0) : 1 === this.a5f ? t.u(19) : t.u(5, 5)
		}, this.a5x = function() {
			return this.hI ? aM.hJ || !bE.a5y : this.ko && (aM.hJ || this.hX)
		}, this.a5z = function() {
			return 1 === this.a17 && !this.hX
		}
}

function a5c() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a60 = null
}

function a5e() {
	this.a5i = function() {
		var a61 = aD.data;
		bC.r7.a3s(a61.teamPlayerCount, a61.playerCount), a61.numberTeams = bC.r7.a3j(a61.teamPlayerCount, 0), a61.teamPlayerCount[0] && a61.teamPlayerCount[7] && (a61.teamPlayerCount[7] = 0, this.a5i())
	}, this.a62 = function() {
		var a61 = aD.data;
		a61.mapType < 2 ? bU.a7(bU.a63(a61), a61.mapSeed) : bU.a64(a61.canvas)
	}, this.a65 = function() {
		var a61 = aD.data;
		a61.colorsData || (a61.colorsData = new Uint32Array(1)), a61.selectableColor && (a61.colorsData[0] = bl.y.wi()), a61.selectableName && (a61.playerNamesData || (a61.playerNamesData = new Array(1)), a61.playerNamesData[0] = bl.eU.data[122]
			.value), a61.a60 = new Uint32Array(1), a61.a60[0] = bI.tM.xL(bl.eU.data[105].value, 5)
	}, this.a66 = function() {
		aD.data = new a5c
	}
}

function dd() {
	var a67 = [];
	this.pt = function(player, pX, a68, a69) {
		player === aD.et || pX === aD.et || !a69 && bC.gV.jr(player) || bC.gV.jr(pX) || this.zZ(ag.za[player] + " supported " + ag.za[pX] + " with " + bC.ry.a0O(a68) + " ressource" + (1 === a68 ? "." : "s."))
	}, this.zZ = function(qg, pi) {
		qg = {
			eX: aW.a6B(),
			qg: qg,
			pi: pi
		};
		a67.push(qg), 30 === t.tJ && t.a2N().zZ(qg)
	}, this.clear = function() {
		a67 = [];
		var th = t.a6C(30);
		th && th.clear()
	}, this.a6D = function() {
		return a67
	}
}

function dX() {
	this.a05 = 0, this.gap = 0, this.ss = 0, this.r5 = 0, this.dh = function() {
		this.resize()
	}, this.resize = function() {
		this.a05 = .0022 * bC.qz.r0(.5) * h.iJ, this.ss = this.a05 / h.k, this.gap = Math.max(Math.floor((a0.a1.iI() ? .0114 : .01296) * h.iJ), 2), this.r5 = this.gap / h.k
	}
}

function dW() {
	this.a6E = function() {
		return a0.a1.iI() ? 2 : 1
	}
}

function cE() {
	var rY, fG, fI, a6F, a6G, a6H, eX, a6I, a6J, a6K, a6L, gap, zoom, q2, a6M;

	function a6W(a6I) {
		for (var aB = q2.length - 1; 0 <= aB; aB--)
			if (q2[aB] === a6I) return 1
	}

	function a6U(a6R) {
		var aB, f9;
		if (-1 !== a6R)
			for (f9 = rY.length, aB = 0; aB < f9; aB++)
				if (rY[aB].hv && rY[aB].fG + 1 === a6R % 4 && rY[aB].fI + 1 === a6R >> 2) return aB;
		return -1
	}

	function a6S(lj, lk) {
		var th = gap / 2;
		return lj < fG - a6F - 3 * th || fG + 3 * a6F + 5 * th < lj || lk < fI - a6F - 3 * th || fI + 2 * a6F + 3 * th < lk ? -1 : 4 * (lk < fI - th ? 0 : lk < fI + a6F + th ? 1 : 2) + (lj < fG - th ? 0 : lj < fG + a6F + th ? 1 : lj < fG + 2 * a6F +
			3 * th ? 2 : 3)
	}
	this.a6N = function() {
		var aB, fT, a6Q = [bD.oV, bD.ok, bD.o3, bD.p7, bD.ox];
		for (rY = new Array(10), aB = 0; aB < 10; aB++) rY[aB] = {
			id: aB,
			hv: !1,
			lR: 0,
			canvas: [],
			fG: 0,
			fI: 0
		};
		for (rY[0].colors = [0, 1, 2, 3], rY[0].fG = 0, rY[0].fI = 0, rY[1].colors = [1, 4], rY[1].fG = 1, rY[1].fI = 0, rY[2].colors = [0, 1], rY[2].fG = -1, rY[2].fI = 0, rY[3].colors = [0], rY[3].fG = 0, rY[3].fI = 0, rY[4].colors = [0, 2],
			rY[4].fG = 1, rY[4].fI = 1, rY[5].colors = [3], rY[5].fG = 0, rY[5].fI = -1, rY[6].id = 20, rY[6].colors = [0], rY[6].fG = 1, rY[6].fI = -1, rY[7].id = 21, rY[7].colors = [0], rY[7].fG = 0, rY[7].fI = 1, rY[8].id = 16, rY[8]
			.colors = [0], rY[8].fG = 0, rY[8].fI = 0, rY[9].id = 10, rY[9].colors = [4], rY[9].fG = 2, rY[9].fI = 0, aB = 0; aB < 10; aB++)
			for (fT = 0; fT < rY[aB].colors.length; fT++) rY[aB].canvas.push(function(id, a3y) {
				if (id < 20) return bC.canvas.zr(ab.get(3), id, a3y);
				var a3y = ab.get(3).height,
					a3z = bC.qz.xV(a3y, a3y),
					iB = bC.qz.getContext(a3z);
				20 === id ? iB.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xg.a06(aj.sF.zv + aj.sF.a0C, iB, 0, 0, a3y);
				return a3z
			}(rY[aB].id, a6Q[rY[aB].colors[fT]]))
	}, this.a6P = function() {
		return rY
	}, this.dh = function() {
		q2 = [], fG = fI = eX = 0, a6G = a6H = -1e3, this.resize()
	}, this.resize = function() {
		a6F = Math.floor((a0.a1.iI() ? .075 : .0468) * h.iJ), zoom = a6F / ab.get(3).height, gap = Math.floor(a6F / 3)
	}, this.a2z = function(lj, lk) {
		return !!this.hv() && (bh.dp = !0, !!aj.xg.hM(lj, lk, a6J) || (lj = function(lj, lk) {
			a6H = a6G = -1e3;
			var a6T = a6U(a6S(lj, lk));
			if (-1 === a6T) return 0;
			if (1 !== rY[a6T].colors[rY[a6T].lR])
				if (5 === a6T) {
					if (! function() {
							var eY = performance.now();
							a6M + 4e3 < eY && (q2 = []);
							a6M = eY
						}(), a6W(a6I)) return 1;
					q2.push(a6I), 16 < q2.length && q2.shift()
				} else if (6 === a6T) {
				for (var aB = q2.length - 1; 0 <= aB; aB--) 0 === ag.n4[q2[aB]] && q2.splice(aB, 1);
				0 < q2.length && (b5.a6X(1, q2, !0) && bA.gV.q1(q2, a6I), q2 = [])
			} else if (2 === a6T) an.hn(a6I) && bA.hZ.pW(aR.hd(), a6I);
			else if (3 === a6T) aD.hX && bA.hZ.ha(a6K);
			else if (0 === a6T)
				if (0 === rY[0].lR) {
					if (aD.a5a && aW.a6B() < 350) return 1;
					bX.a6Y(4), bA.hZ.hg(aR.hd(), a6I)
				} else b1.hh(a6I, aR.hd());
			else if (1 === a6T) bA.hZ.hl(aR.hd(), a6K);
			else if (9 === a6T) bA.hZ.ho(aR.hd());
			else {
				if (7 === a6T) return bX.a6Y(0), aj.xg.show(lj, lk), 2;
				if (4 === a6T) b5.a6X(0, [a6I], !0) && bA.gV.py(a6I);
				else {
					if (8 !== a6T) return 0;
					bA.hZ.hc(aR.hd(), a6L, a6I)
				}
			}
			return 1
		}(lj, lk), this.sG(), 2 === lj && (aj.xg.hv = !0), 0 < lj))
	}, this.a31 = function(lj, lk) {
		this.hv() || (a6G = lj, a6H = lk, eX = performance.now())
	}, this.click = function(lj, lk, a38) {
		var hO = bO.hP(lj),
			hQ = bO.hR(lk),
			ev = bO.fW(hO, hQ),
			en = bO.ez(ev),
			a6Z = (a0.a1.iI() ? .025 : .0144) * h.iJ,
			eY = performance.now();
		return !(Math.abs(lj - a6G) > a6Z || Math.abs(lk - a6H) > a6Z || eX + 500 < eY || (eX = eY, bL.rR() && (bL.hE = lj, bL.hF = lk, b7.ec(1), b8.ec(1)), !bO.hS(hO, hQ))) && (a38 ? (function(lj, lk, en) {
			ac.f4(en) || -1 === (lj = bP.lJ.a6j(lj, lk)) ? aN.a6i(en) : aN.a6k(lj)
		}(lj, lk, en), !1) : aM.hJ || this.hv() || !bC.gV.hL(aD.et) || aD.hI ? (this.sG(), !1) : (aD.hX ? 0 <= (a6K = bt.hY(ev)) && (rY[3].hv = !0) : 2 === aD.a17 ? ac.gj(en) && (a6I = ac.f1(en), bC.gV.jr(a6I) || (rY[0].hv = !0, rY[0]
			.lR = 1, rY[7].hv = !0)) : (bP.hm.hn(aD.et, ev) && (rY[0].hv = !0, rY[0].lR = 1, rY[1].hv = !0, rY[1].lR = 0, rY[9].hv = !0, rY[9].lR = 0), bP.hj.hk(aD.et, ev) && (rY[0].hv = !0, rY[0].lR = 1, rY[1].hv = !0, rY[1].lR = 1,
			a6K = bQ.fl[7]), ac.fE(en) ? (a6L = am.ek.em(en)) && (a6Z = bO.ez(a6L), rY[8].hv = !0, a6I = ac.f0(a6Z) ? aD.f6 : ac.f1(a6Z)) : (ac.z5(aD.et, en) && (a6J = aD.et, rY[0].hv = !0, rY[0].lR = 1, rY[7].hv = !0), -1 !== (
			eY = bt.he(ev)) && (ac.f0(eY << 2) ? (a6I = aD.f6, bu.hf(aD.et) ? (rY[0].hv = !0, rY[0].lR = 0) : ad.gG(aD.et) && (rY[0].hv = !0, rY[0].lR = 3)) : (a6I = ac.f1(eY << 2), rY[0].lR = 1, rY[5].hv = function(a6I) {
			return !bC.gV.jr(a6I) && !a6W(a6I) && b5.a6X(1, [a6I], !1)
		}(a6I), rY[7].hv || bC.gV.jr(a6I) || (a6J = a6I, rY[7].hv = !0), rY[4].hv = !bC.gV.jr(a6I) && !af.a6e(a6I) && b5.a6X(0, [a6I], !1), rY[6].hv = function(a6I) {
			if (0 === q2.length) return !1;
			if (performance.now() > a6M + 4e3) return !(q2 = []);
			return !a6W(a6I) && ! function(a6I) {
				var aB;
				if (aD.i3)
					for (aB = q2.length - 1; 0 <= aB; aB--)
						if (!bu.f2(a6I, q2[aB])) return 1;
				return
			}(a6I)
		}(a6I), bu.f2(a6I, aD.et) ? (bu.hi(aD.et, a6I) ? (rY[0].lR = 0, rY[0].hv = !0) : ad.gG(aD.et) && (rY[0].lR = 3, rY[0].hv = !0), rY[0].hv = this.a6g()) : (rY[2].hv = !0, an.hn(a6I) ? rY[2].lR = 0 : rY[2].lR = 1,
			rY[0].hv = !0))))), this.a6b(lj, lk)))
	}, this.a6b = function(lj, lk) {
		return fG = lj - Math.floor(a6F / 2), fI = lk - Math.floor(a6F / 2), !!this.hv()
	}, this.a2f = function(lj, lk) {
		return !!this.hv() && (aj.xg.hv ? !aj.xg.a04(lj, lk) && (aj.xg.hv = !1, bh.dp = !0) : function(sb, lj, lk) {
			lj = a6S(lj, lk);
			if (0 <= a6U(lj)) return !1;
			if ((1 === lj || 6 === lj) && 0 <= a6U(2)) return !1;
			if ((6 === lj || 9 === lj) && 0 <= a6U(10)) return !1;
			return sb.sG(), bh.dp = !0
		}(this, lj, lk))
	}, this.sG = function() {
		for (var aB = rY.length - 1; 0 <= aB; aB--) rY[aB].hv = !1, rY[aB].lR = 0;
		aj.xg.hv = !1
	}, this.hv = function() {
		return this.a6g() || aj.xg.hv
	}, this.a6g = function() {
		for (var f9 = rY.length, aB = 0; aB < f9; aB++)
			if (rY[aB].hv) return !0;
		return !1
	}, this.ve = function() {
		if (this.hv())
			if (aj.xg.hv) aj.xg.ve();
			else {
				var aB, iB = vf,
					fT = rY,
					f9 = fT.length,
					a6o = (a6F + gap) / zoom;
				for (iB.imageSmoothingEnabled = !0, iB.setTransform(zoom, 0, 0, zoom, fG, fI), aB = 0; aB < f9; aB++) fT[aB].hv && vf.drawImage(fT[aB].canvas[fT[aB].lR], fT[aB].fG * a6o, fT[aB].fI * a6o);
				iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cF() {
	var j, canvas, a6p, a6q, a6r, a6s = -1;

	function a6t() {
		var a6u, zG = canvas.getContext("2d", {
			alpha: !0
		});
		zG.clearRect(0, 0, j, j), zG.fillStyle = bD.o1, zG.fillRect(0, 0, j, j), 9 === a6q && (zG.fillStyle = bD.o6, zG.fillRect(0, 0, j, j)), zG.fillStyle = bD.o5, zG.fillRect(0, 0, j, 1), zG.fillRect(0, 0, 1, j), zG.fillRect(0, j - 1, j, 1), zG
			.fillRect(j - 1, 0, 1, j), a6u = .9 * j / ab.get(0).width, zG.imageSmoothingEnabled = !0, zG.setTransform(a6u, 0, 0, a6u, Math.floor((j - a6u * ab.get(0).width) / 2), Math.floor((j - a6u * ab.get(0).height) / 2)), zG.drawImage(ab.get(0),
				0, 0), zG.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6x(lj, lk) {
		if (!aM.hJ) return lj <= j + be.gap && lk >= aR.fI ? 9 : -1;
		if (lj <= 4 * j + be.gap) {
			if (lk >= aR.fI) return 0;
			if (lk >= aR.fI - j - a6r * be.gap) return 2
		} else if (lj <= 7 * j + be.gap && lk >= aR.fI - j - a6r * be.gap) return 1;
		return -1
	}
	this.hJ = !1, this.dh = function() {
		a6q = -1, this.hJ = !1, a6r = a0.a1.iI() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6p = bC.qz.sq(1, (a0.a1.iI() ? .5 : .45) * j), a6t()
	}, this.a6v = function() {
		return !(1 !== aD.a17 || aD.hX || (aD.hI ? !bE.a5y : this.hJ && aD.ko))
	}, this.a3G = function() {
		this.hJ = !this.hJ, this.hJ ? (bE.a3F(!1), aD.hI && bE.a5y && bE.a3H(!0), this.a6w(), 9 === a6q && (a6q = 0)) : (a6q = -1, a6t(), !aD.ko || 1 !== aD.a17 || aD.hX || aD.hI || a0.a1.setState(1)), bh.dp = !0
	}, this.a6w = function() {
		(aD.ko || aD.hI) && 1 === aD.a17 && (aV.mq(!0), aD.hX || setTimeout(function() {
			bd.a1J()
		}, 0), a0.a1.setState(0))
	}, this.hM = function(lj, lk) {
		return 0 <= (a6s = a6x(lj, lk)) || !aM.hJ || aD.ko || aD.hI || bg.hv || aM.a3G(), a6s
	}, this.a2f = function(lj, lk) {
		lj = a6x(lj, lk);
		lj !== a6q && (a6q = lj, this.hJ || a6t(), bh.dp = !0)
	}, this.a2g = function(lj, lk) {
		lj = a6x(lj, lk);
		return -1 !== lj && a6s === lj && (this.hJ ? aD.nY ? (0 <= lj && bE.a3F(!1), !aD.hI) : (0 === lj ? aD.a2W() : 1 === lj ? this.a3G() : 2 === lj && t.u(1, 0), !0) : 9 === lj && (this.a3G(), !0))
	}, this.ve = function() {
		var i;
		this.hJ ? (i = Math.floor(5.5 * j), vf.setTransform(1, 0, 0, 1, be.gap, aR.fI), vf.fillStyle = bD.o1, vf.fillRect(0, 0, i, j), 0 === a6q ? (vf.fillStyle = bD.o6, vf.fillRect(0, 0, 4 * j, j)) : 1 === a6q && (vf.fillStyle = bD.o6, vf
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vf.fillStyle = bD.o5, vf.fillRect(0, 0, i, 1), vf.fillRect(0, 0, 1, j), vf.fillRect(4 * j, 0, 1, j), vf.fillRect(0, j - 1, i, 1), vf.fillRect(i - 1, 0, 1, j), vf.font = a6p, bC.qz
			.textBaseline(vf, 1), bC.qz.textAlign(vf, 1), vf.fillText(L(44), 2 * j, .54 * j), i = .4 * j, aM.a71(be.gap + 4 * j + (1.5 * j - i) / 2, aR.fI + .3 * j, i), i = 1, vf.setTransform(1, 0, 0, 1, be.gap, aR.fI - i * a6r * be.gap - i *
				j), vf.fillStyle = bD.o1, vf.fillRect(0, 0, 4 * j, j), a6q === i + 1 && (vf.fillStyle = bD.o6, vf.fillRect(0, 0, 4 * j, j)), vf.fillStyle = bD.o5, vf.fillRect(0, 0, 4 * j, 1), vf.fillRect(0, 0, 1, j), vf.fillRect(4 * j, 0, 1,
				j), vf.fillRect(0, j - 1, 4 * j, 1), vf.fillText(L(0 === i ? 44 : 45), 2 * j, .54 * j), vf.setTransform(1, 0, 0, 1, 0, 0)) : vf.drawImage(canvas, be.gap, aR.fI)
	}, this.qa = function(player) {
		return 0 !== ag.n4[player] && 2 !== aD.a17 && !bC.gV.jr(player)
	}, this.a71 = function(fG, fI, f9) {
		vf.setTransform(1, 0, 0, 1, fG, fI), vf.lineWidth = be.a05, vf.strokeStyle = bD.o5, vf.beginPath(), vf.moveTo(0, 0), vf.lineTo(f9, f9), vf.moveTo(0, f9), vf.lineTo(f9, 0), vf.stroke()
	}
}

function cG() {
	var a73, j, a74, a75, a76, a77, a78, a79, a7A;

	function zC() {
		return aR.a7S(aN.a7O()) ? aw.hv ? __fx.settings.keybindButtons ? aR.fI - 2 * aR.j - 3 * a74 : aR.fI - aR.j - 2 * a74 : __fx.settings.keybindButtons ? aR.fI - aR.j - 2 * a74 : aR.fI - a74 : bE.a7S(aN.a7R()) ? aw.hv ? bE.zC() - aR.j - 2 * a74 :
			bE.zC() - a74 : aw.hv ? h.j - aR.j - (bm.a6E() + 1) * a74 : h.j - bm.a6E() * be.gap
	}

	function a7F(eY, qg, id, gh, a7I, a7J, l7, a7K, a7L, a7M, a7W) {
		var aB, zG, a3z, qr, a7X = void 0 !== a7L,
			i = Math.floor(aQ.measureText(qg, aN.a6p) + 1.5 * a75 + (a7X ? j : 1.5 * a75));
		if (bh.dp = !0, a7W || bs.zZ(qg, a7L), i + 2 * a74 + aR.j > h.i && !a7X && 50 !== id && 20 < qg.length) a7F(eY, (a7W = bC.ry.a5H(qg))[0], id, gh, a7I, a7J, l7, a7K, a7L, a7M, !0), a7F(eY, a7W[1], id, gh, a7I, a7J, l7, a7K, a7L, a7M, !0);
		else if (a7W = i + (50 === id ? a76 : 0), (a3z = document.createElement("canvas")).width = i, a3z.height = j, (zG = a3z.getContext("2d", {
				alpha: !0
			})).font = aN.a6p, bC.qz.textBaseline(zG, 1), bC.qz.textAlign(zG, 0), zG.clearRect(0, 0, i, j), zG.fillStyle = a7J, zG.fillRect(0, 0, i, j), zG.fillStyle = a7I, zG.fillText(qg, Math.floor(1.5 * a75), Math.floor(j / 2)), a7X && (zG
				.imageSmoothingEnabled = !0, aj.xg.a06(a7L, zG, i - j, 0, j)), 0 === (qr = {
				eX: eY,
				qg: qg,
				id: id,
				player: gh,
				canvas: a3z,
				a7I: a7I,
				a7J: a7J,
				i: i,
				a7P: a7W,
				l7: l7,
				a7K: a7K,
				a7L: a7L,
				a7M: a7M
			}).eX || 0 < a73.length && 0 < a73[0].eX) a73.unshift(qr);
		else {
			for (aB = 1; aB < a73.length; aB++)
				if (0 < a73[aB].eX) return void a73.splice(aB, 0, qr);
			a73.push(qr)
		}
	}

	function a7G(eF, th, fT) {
		return "rgb(" + eF + "," + th + "," + fT + ")"
	}

	function a7Y(id, gc) {
		for (var f9 = a73.length, aB = 0; aB < f9; aB++) a73[aB].id === id && gc-- <= 0 && (a73.splice(aB, 1), aB--, f9--)
	}

	function a7Z(id, player) {
		for (var fN = !1, aB = a73.length - 1; 0 <= aB; aB--) a73[aB].id !== id || player !== aD.f6 && a73[aB].player !== player || (a73.splice(aB, 1), fN = !0);
		return fN
	}

	function a7v(qg) {
		a7F(340, qg, 6, 0, a7G(215, 245, 255), bD.o2, -1, !1)
	}
	this.a7B = "", this.dh = function() {
		var self;
		a79 = 0, a78 = a0.a1.iI() ? 7 : 12, a77 = {
				a0v: [0, 0, 0],
				a7C: [0, 0, 0],
				nM: [220, 180, 180],
				vd: [0, 0, 0],
				eh: [0, 0, 0]
			}, a73 = [], this.resize(), aD.hX && this.a1K(0, 18), bU.xT.xU[bU.ep].name.length && a7v(L(88, [bU.xT.xU[bU.ep].name])), bU.xT.xU[bU.ep].a7w && a7v(L(89, [bU.xT.xU[bU.ep].a7w])), a7v(L(90, [bU.fK - 2 + "x" + (bU.fL - 2)])), a7v(L(91,
				[bC.ry.a0O(ap.a7x)])), ap.a7x !== ap.a7y && a7v(L(92, [bC.ry.a0O(ap.a7y) + " (" + bC.ry.a5D(100 * ap.a7y / ap.a7x, 1) + ")"])), 0 < ap.a7z && a7v(L(68, [bC.ry.a0O(ap.a7z) + " (" + bC.ry.a5D(100 * ap.a7z / ap.a7x, 1) + ")"])), 0 <
			ap.a80 && a7v(L(93, [bC.ry.a0O(ap.a80) + " (" + bC.ry.a5D(100 * ap.a80 / ap.a7x, 1) + ")"])), 10 === aD.km && a7F(120, L(94), 6, 0, a7G(235, 255, 120), bD.o2, -1, !1), 0 !== (self = this).a7B.length && (a7F(200, self.a7B, 0, 0, bD.o5,
				bD.o2, -1, !1), self.a7B = ""), aD.zY && a7F(340, L(46), 6, 0, a7G(255, 200, 0), bD.o2, -1, !1)
	}, this.resize = function() {
		var a7H, aB;
		if (j = (j = Math.floor((a0.a1.iI() ? .031 : .0249) * h.iJ)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6p = bC.qz.sq(1, this.fontSize), a74 = be.gap, a75 = Math.floor(j / 5), 0 < a73.length)
			for (a7H = a73, a73 = [], aB = a7H.length - 1; 0 <= aB; aB--) a7F(a7H[aB].eX, a7H[aB].qg, a7H[aB].id, a7H[aB].player, a7H[aB].a7I, a7H[aB].a7J, a7H[aB].l7, a7H[aB].a7K, a7H[aB].a7L, a7H[aB].a7M, !0);
		this.a7N()
	}, this.a7N = function() {
		a7A = document.createElement("canvas");
		var qg = L(47),
			zG = (a76 = aQ.measureText(qg, this.a6p) + 5 * a75, a7A.height = j, a7A.width = a76, a7A.getContext("2d", {
				alpha: !0
			}));
		zG.font = this.a6p, bC.qz.textBaseline(zG, 1), bC.qz.textAlign(zG, 1), zG.clearRect(0, 0, a76, j), zG.fillStyle = bD.oS, zG.fillRect(0, 0, a76, j), zG.fillStyle = bD.o5, zG.fillText(qg, Math.floor(a76 / 2), Math.floor(j / 2))
	}, this.a7O = function() {
		var f9;
		return aw.hv ? aw.i : 0 === (f9 = a73.length) ? 0 : 1 === f9 ? a73[0].a7P : a7Q(a73[0].a7P, a73[1].a7P)
	}, this.a7R = function() {
		var f9 = a73.length;
		return aw.hv ? f9 ? a7Q(aw.i, a73[0].a7P) : aw.i : 0 === f9 ? 0 : 1 === f9 ? a73[0].a7P : 2 === f9 ? a7Q(a73[0].a7P, a73[1].a7P) : a7Q(a7Q(a73[0].a7P, a73[1].a7P), a73[2].a7P)
	}, this.hM = function(fG, fI) {
		for (var nV, a7T, a7U = zC(), aB = a73.length - 1; 0 <= aB; aB--)
			if ((a7T = a7U - (aB + 1) * j) <= fI && fI < a7T + j) return 50 === a73[aB].id ? fG >= h.i - a76 - a74 - a73[aB].i && (fG >= h.i - a76 - a74 ? bA.gV.py(a73[aB].player) : aH.nQ(a73[aB].player, 800, !1, 0), !0) : fG >= h.i - a73[aB].i -
				a74 && (736 === a73[aB].id ? window.open("https://" + a73[aB].qg, "_blank") : a73[aB].a7K && (a73[aB].a7M && a73[aB].a7M.fS ? (a7T = a73[aB].a7M.ev, nV = bO.fH(a7T) - 10, a7T = bO.fJ(a7T) - 10, aH.nP(nV, a7T, 19 + nV, 19 +
					a7T)) : a73[aB].a7M && a73[aB].a7M.fT ? aH.nR(a73[aB].player, a73[aB].a7M.nS) : (aH.nQ(a73[aB].player, 800, !1, 0), 0 <= a73[aB].l7 && (nV = a73[aB].l7, a73[aB].l7 = a73[aB].player, a73[aB].player = nV))), !0);
		return !1
	}, this.zZ = function(eY, qg, id, gh, a7I, a7J, l7, a7K, a7L, a7M) {
		a7F(eY, qg, id, gh, a7I, a7J, l7, a7K, a7L, a7M)
	}, this.a7V = function(r) {
		a7F(300, r, 252, 0, bD.o5, bD.o2, -1, !1)
	}, this.a5T = function(id) {
		for (var aB = a73.length - 1; 0 <= aB; aB--) a73[aB].id === id && (a73[aB].eX = 1)
	}, this.a1K = function(player, id) {
		0 === id ? (aQ.eg(player, 0), a7Y(423, 2), a7F(160, L(48, [ag.za[player]]), 423, player, "rgb(10,220,10)", bD.o2, -1, !1)) : 1 === id ? (a7Z(50, aD.f6), aQ.eg(player, 1), a7F(360, L(49, [ag.za[player]]), 0, player, bD.om, bD.o2, -1, !0),
			aH.nQ(player, 2700, !1, 0)) : 2 === id ? (aQ.eg(player, 2), a7F(0, L(50), 0, player, "rgb(10,255,255)", bD.o2, -1, !0), aH.nQ(player, 2700, !1, 0)) : 3 === id ? (aQ.eg(player, 2), a7F(0, L(51, [ag.za[player]]), 0, player, bD.o5,
			bD.o2, -1, !0), aH.nQ(player, 2700, !1, 0)) : 4 === id ? this.a7a(1, player, player) : 5 === id ? bC.gV.jr(aD.et) || (function(id, mz) {
			var aB, a7k = 0,
				f9 = a73.length;
			for (aB = 0; aB < f9; aB++)
				if (a73[aB].id === id && mz <= ++a7k) return a73.splice(aB, 1)
		}(1, 5), af.a7c(player) && a7F(180, L(52, [ag.za[player]]), 1, player, a7G(255, 200, 180), bD.o2, -1, !0), bC.gV.a4a(player, 10) && (a7Y(573, 0), a7F(180, L(53, [ag.za[player]]), 573, player, bD.om, bD.o2, -1, !0))) : 18 === id ? a7F(
			255, L(54), 18, 0, bD.o5, bD.o2, -1, !1) : 21 === id ? a7F(220, L(55), id, 0, bD.o5, bD.o2, -1, !1) : 22 === id ? this.a7a(2, player, player) : 59 === id && a7F(0, L(56), id, 0, bD.p6, bD.o2, 0, !1)
	}, this.a2S = function(r) {
		a7F(200, L(57, [r]), 94, 0, bD.o5, bD.oi, -1, !1)
	}, this.a1W = function(a7d) {
		if (aD.et === a7d && !aD.ko && !aD.hI)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a7F(0, "Your Win Count is now " + __fx.wins.count, 3, a7d, bD.o5, bD.o2, -1, !0);
		ag.gx[a7d] && (aQ.eg(a7d, 2), aD.kU < 100 ? a7F(0, L(51, [ag.za[a7d]]), 3, a7d, bD.o5, bD.o2, -1, !0) : a7F(0, L(58, [ag.za[a7d]]), 3, a7d, bD.o5, bD.o2, -1, !0))
	}, this.a6i = function(en) {
		var qg, a7f, a7e = "(" + bO.fH(en >> 2) + ", " + bO.fJ(en >> 2) + ")",
			a7K = !1,
			player = 0;
		ac.f4(en) ? ac.f0(en) ? a7e = L(59, [a7e]) : (player = ac.f1(en), aD.hI && (aD.et = player), qg = L(60, [bC.zG.a4D(ag.a1n[player], bC.qz.sq(0, 10), 150)]) + "   ", qg = (qg += L(61, [bC.ry.a0O(ag.hB[player])]) + "   ") + L(62, [bC.ry.a0O(
				ag.gx[player])]) + "   ", aD.i3 && (a7f = bi.a1T[bi.kr[bi.f7[player]]], qg += L(63) + ": " + a7f + "   "), bC.gV.jr(player) && (qg += L(64) + ": " + aE.kf[aE.hs[player]] + "   "), a7e = qg = (qg += L(65, [player]) + "   ") +
			L(66, [a7e]), a7K = !0) : a7e = ac.fE(en) ? L(67, [a7e]) + "   #" + ac.er(en) : L(68, [a7e]), a7Y(55, 0), a7F(220, a7e, 55, player, bD.o5, bD.o2, -1, a7K, void 0, void 0, !0)
	}, this.a6k = function(a7g) {
		var lP = bP.y,
			player = lP.mO[a7g] >> 3,
			qg = (bh.dp = !0, a7Y(55, 0), L(69, [ag.za[player]]) + "   ");
		a7F(220, qg += L(61, [bC.ry.a0O(lP.a7h[a7g])]), 55, player, bD.o5, bD.o2, -1, !0)
	}, this.ph = function(pT, a7i, pi) {
		pT === aD.et ? a7F(175, " " + L(70, [ag.za[a7i]]) + ": ", 1001, a7i, a7G(200, 255, 210), bD.o2, -1, !0, pi) : this.a7j(pT, pi)
	}, this.a7j = function(pT, pi) {
		a7Y(1e3, 0), a7F(175, ag.za[pT] + ": ", 1e3, pT, bD.o5, "rgba(5,60,25,0.9)", -1, !0, pi)
	}, this.a1V = function() {
		var r;
		aD.a1C ? (r = L(71), aQ.a1U(L(72), 2, 1, 12), a7F(0, r, 40, 0, "rgb(10,220,10)", bD.o2, -1, !1)) : (r = L(73), aQ.a1U(L(74), 2, 0, 16), a7F(0, r, 41, 0, bD.o5, bD.o2, -1, !1))
	}, this.zN = function() {
		var gc = ag.za,
			fC = aD.data;
		a7F(300, gc[0] + " [" + aD.a1Q.zT(fC.elo[0]) + "] vs " + gc[1] + " [" + aD.a1Q.zT(fC.elo[1]) + "]", 65, 0, bD.nw, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7l = function(r) {
		a7F(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7m = function(a7n) {
		a7F(0, L(a7n ? 75 : 76), 247, 0, bD.p5, bD.o2, -1, !1)
	}, this.zV = function(zS, zU, a7o) {
		var fC = aD.data,
			gc = ag.za;
		a7F(0, gc[0] + ": " + aD.a1Q.zT(fC.elo[0]) + " -> " + zS, 66, 0, bD.o5, a7o[0], -1, !1), a7F(0, gc[1] + ": " + aD.a1Q.zT(fC.elo[1]) + " -> " + zU, 66, 1, bD.o5, a7o[1], -1, !1)
	}, this.pz = function(player, id) {
		0 === id ? a7Z(50, player) ? (a7F(128, L(77, [ag.za[player]]), 52, player, a7G(180, 255, 180), bD.o2, -1, !0), af.qY(player, 2, 255)) : a7F(384, L(78, [ag.za[player]]), 51, player, a7G(210, 210, 255), bD.o2, -1, !0) : a7Z(51, player) ? (
			a7F(128, L(79, [ag.za[player]]), 52, player, bD.o5, "rgba(60,120,10,0.9)", -1, !0), af.qY(player, 2, 255)) : (a7F(384, L(80, [ag.za[player]]), 50, player, bD.o5, "rgba(90,90,90,0.9)", -1, !0), af.qY(player, 2, 96))
	}, this.q3 = function(a0v, target) {
		var color = a7G(210, 255, 210);
		1 < a0v.length ? a7F(230, L(81, [a0v.length, ag.za[target]]), 66, target, color, bD.o2, -1, !0) : a7F(230, L(82, [ag.za[a0v[0]], ag.za[target]]), 66, a0v[0], color, bD.o2, target, !0)
	}, this.a7p = function(player, target) {
		a7F(230, L(83, [ag.za[player], ag.za[target]]), 66, player, bD.o5, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7q = function(id, gc) {
		a7Y(id, gc)
	}, this.a1F = function(id, player) {
		a7Z(id, void 0 === player ? aD.f6 : player)
	}, this.a7r = function(id) {
		for (var aB = a73.length - 1; 0 <= aB; aB--)
			if (a73[aB].id === id) return a73[aB];
		return null
	}, this.pu = function(a68, a7s, player) {
		2 !== ag.a4V[aD.et] && a7F(200, 1 === a68 ? L(84, [ag.za[player]]) : L(85, [bC.ry.a0O(a68), ag.za[player]]), 30, player, "rgb(190,255,190)", bD.o2, -1, !0)
	}, this.a7u = function(a68, player) {
		2 !== ag.a4V[aD.et] && (a7Y(31, 0), a68 = " (" + bC.ry.a0O(a68) + ") 💸", a7F(150, a68 = bC.gV.jr(player) ? L(86) + a68 : L(87, [ag.za[player]]) + a68, 31, player, bD.nw, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1E = function(bw) {
		for (var eh = bh.kR(), aB = 2; 0 <= aB; aB--) 0 < a77.vd[aB] && (bw || a77.eh[aB] < eh - 220) && this.a81(aB)
	}, this.a81 = function(id) {
		var qg, f9 = a77.vd[id],
			player = a77.a0v[id];
		a77.vd[id] = 0, 1 === f9 ? (0 === id ? qg = L(95, [ag.za[player], ag.za[a77.a7C[0]]]) : 1 === id ? qg = L(96, [ag.za[player]]) : 2 === id ? qg = L(97, [ag.za[player]]) : 3 === id && (qg = L(98, [ag.za[player]])), a7Y(7, 0), a7F(a77.nM[
			id], qg, 7, a77.a7C[id], bD.o5, bD.o2, -1, !0)) : (qg = L(0 === id ? 99 : 1 === id ? 100 : 101, [f9]), a7Y(7, 0), a7F(a77.nM[id], qg, 7, player, bD.o5, bD.o2, -1, !1))
	}, this.a7a = function(id, hb, l7) {
		var eh = bh.kR(),
			f9 = a77.vd[id] + 1;
		a77.vd[id]++, a77.a0v[id] = hb, a77.a7C[id] = l7, 1 === f9 && (a77.eh[id] = eh), (1 === f9 && (aD.a1A < 32 || 2 === aD.a17) || 1 < f9 && (a77.eh[id] < eh - 140 || 2 === aD.a17)) && this.a81(id)
	}, this.ec = function() {
		b2.ec();
		for (var jj = (jj = a73.length - a78) <= 1 ? 1 : jj * jj, aB = a73.length - 1; 0 <= aB; aB--) 0 < a73[aB].eX && (a73[aB].eX -= jj, a73[aB].eX <= 0) && (bh.dp = !0, a73.splice(aB, 1));
		! function() {
			var gc, aB;
			if (128 !== a79 && !(++a79 < 128))
				for (gc = 5, aB = al.l0 - 1; 0 <= aB; aB--) 1 === ag.a4V[al.l5[aB]] && 0 < gc-- && a7F(240, L(98, [ag.za[al.l5[aB]]]), 1, al.l5[aB], bD.nw, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1E(!1)
	}, this.ve = function() {
		for (var yE, fI = zC(), aB = a73.length - 1; 0 <= aB; aB--) yE = fI - (aB + 1) * j, 50 === a73[aB].id ? (vf.drawImage(a73[aB].canvas, h.i - a73[aB].i - a76 - a74, yE), vf.drawImage(a7A, h.i - a76 - a74, yE)) : vf.drawImage(a73[aB].canvas,
			h.i - a73[aB].i - a74, yE)
	}, this.a83 = function(id, hs) {
		var a7e, a84 = bD.oF;
		0 === id ? a7e = L(102) : 1 === id ? (a7e = L(103), a84 = bD.p1) : 2 === id ? a7e = L(104) : 3 === id ? a7e = L(105) : (a7e = bC.ry.a0O(hs), a84 = 5 === id ? bD.p1 : bD.o2), a7Y(74, 0), a7F(0, a7e, 74, 0, bD.o5, a84, -1, !1, void 0,
			void 0, !0)
	}
}

function cH() {
	var a86, a87, vg = "",
		xz = 0,
		y0 = 0,
		a85 = -1,
		eA = ["Team", "Zombie", "BR", "1v1"];

	function a88() {
		for (var eY = new Date, a89 = eY.getUTCMinutes(), eY = eY.getUTCSeconds(), a8B = [], a8C = 0, aB = 0; aB < 6; aB++) a8B.push(a8C), a8B.push(a8C + 2), a8B.push(a8C + 5), a8B.push(a8C + 7), a8C += 10;
		for (var f9 = a8B.length, aB = 1; aB < f9 && !(a89 < a8B[aB]); aB++);
		aB %= f9;
		eY = (a8B[0] = 60) * (a8B[aB] - a89) - eY;
		return eY !== a85 && (vg = eA[aB % 4] + " " + a87 + ": " + a8E(Math.floor(eY / 60)) + ":" + a8E(eY % 60), a85 = eY, xz = aQ.measureText(vg, a86), xz += Math.floor(.4 * y0), 1)
	}

	function a8E(a8F) {
		return a8F < 10 ? "0" + a8F : String(a8F)
	}
	this.dh = function() {
		a87 = L(106)
	}, this.resize = function() {
		xz = Math.floor((a0.a1.iI() ? .53 : .36) * h.iJ), y0 = Math.floor(.065 * xz), a86 = bC.qz.sq(1, Math.floor(.9 * y0)), a85 += 1e3, a88()
	}, this.ec = function() {
		a88() && (bh.dp = !0)
	}, this.ve = function(fI) {
		vf.lineWidth = 1 + Math.floor(y0 / 15), vf.translate(h.i - y0, fI + xz), vf.rotate(-Math.PI / 2), vf.fillStyle = bD.o5, vf.fillRect(0, 0, xz, y0), vf.strokeStyle = bD.nw, vf.strokeRect(0, 0, xz, y0 + 10), vf.fillStyle = bD.nw, vf.font =
			a86, bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 1), vf.fillText(vg, Math.floor(xz / 2), Math.floor(.59 * y0)), vf.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cI() {
	var a67, a8G, a8H, y0, a8I, a8J = 0,
		a8K = 0;

	function a8M(aB) {
		var a8O = !0,
			a0D = bD.o5,
			i = (1 === a67[aB].id ? a67[aB].zG.fillStyle = bD.oz : a67[aB].jd === aD.f6 ? a67[aB].zG.fillStyle = bD.oG : (ac.a8P(a67[aB].jd), a67[aB].zG.fillStyle = bC.color.nz(bQ.fi[0], bQ.fi[1], bQ.fi[2], .87), 400 < bC.r7.a3d(bQ.fi, 0, 2) && (
				a8O = !1, a0D = bD.nw)), a67[aB].canvas.width),
			tQ = (a67[aB].zG.clearRect(0, 0, i, y0), a67[aB].zG.fillRect(0, 0, i, y0), a67[aB].zG.fillStyle = a0D, ! function(zG, i, y0) {
				zG.fillRect(0, 0, i, 1), zG.fillRect(0, y0 - 1, i, 1), zG.fillRect(0, 0, 1, y0), zG.fillRect(i - 1, 0, 1, y0)
			}(a67[aB].zG, i, y0), a8G + 2 * y0 < i && (a67[aB].zG.fillRect(i - a8G - y0, 0, 1, y0), a67[aB].zG.fillText(ag.za[a67[aB].jd], Math.floor((i - a8G) / 2), Math.floor(.57 * y0))), 0 !== a67[aB].id ? 0 : y0);
		a67[aB].zG.fillText(bC.ry.a0O(a67[aB].hs), Math.floor(i - a8G / 2 - tQ), Math.floor(.57 * y0)),
			function(aB, i, tQ, a8O) {
				a67[aB].zG.fillStyle = a8O ? bD.o7 : bD.o3;
				a8O = Math.floor(a8G * a67[aB].hs / a67[aB].a8V);
				a67[aB].zG.fillRect(Math.floor(i - a8G - tQ), y0 - a8I, a8O, a8I)
			}(aB, i, tQ, a8O), 0 === a67[aB].id ? (a8S(aB, i, a8O, a0D), function(aB, i, a8O) {
				a67[aB].zG.strokeStyle = a8O ? bD.oN : bD.oX, a67[aB].zG.fillRect(y0, 0, 1, y0);
				a8O = i - y0;
				a67[aB].zG.beginPath(), a67[aB].zG.moveTo(Math.floor(.3 * y0 + a8O), Math.floor(y0 / 2)), a67[aB].zG.lineTo(Math.floor(y0 - .3 * y0 + 0 + a8O), Math.floor(y0 / 2)), a67[aB].zG.stroke(), a67[aB].zG.beginPath(), a67[aB].zG.moveTo(
					Math.floor(y0 / 2 + a8O), Math.floor(.3 * y0)), a67[aB].zG.lineTo(Math.floor(y0 / 2 + a8O), Math.floor(y0 - .3 * y0 + 0)), a67[aB].zG.stroke()
			}(aB, i, a8O)) : a8S(aB, 2 * y0, a8O, a0D)
	}

	function a8S(aB, i, a8O, a0D) {
		a67[aB].zG.strokeStyle = a67[aB].a8W ? bD.oE : a8O ? bD.od : bD.oe, a67[aB].zG.fillStyle = a0D, a67[aB].zG.fillRect(i - y0, 0, 1, y0), a67[aB].zG.lineWidth = Math.max(Math.floor(y0 / 12), 3), a67[aB].zG.lineCap = "round";
		a8O = .35;
		i = y0 + 1, a67[aB].zG.beginPath(), a67[aB].zG.moveTo(Math.floor(i - a8O * y0 + 0), Math.floor(a8O * y0)), a67[aB].zG.lineTo(Math.floor(i - y0 + a8O * y0), Math.floor(y0 - a8O * y0 + 0)), a67[aB].zG.stroke(), a67[aB].zG.beginPath(), a67[aB]
			.zG.moveTo(Math.floor(i - y0 + a8O * y0), Math.floor(a8O * y0)), a67[aB].zG.lineTo(Math.floor(i - a8O * y0 + 0), Math.floor(y0 - a8O * y0 + 0)), a67[aB].zG.stroke()
	}

	function a8i(g, a8g) {
		for (var hs, aB = a8g - 1; 0 <= aB; aB--) hs = ad.gM(aD.et, aB), g[aB].hs !== hs && (g[aB].hs = hs, g[aB].a8V = Math.max(hs, g[aB].a8V), g[aB].a8N = !0)
	}

	function a8m(g, a8k) {
		for (var td = aD.et << 3, a7h = bP.y.a7h, mL = bP.y.mL, a8o = bP.y.a8o, aB = a8k - 1; 0 <= aB; aB--) {
			var a8p = a8o[td + aB],
				hs = a7h[a8p];
			g[aB].hs !== hs ? (g[aB].hs = hs, g[aB].a8V = Math.max(hs, g[aB].a8V), g[aB].a8N = !0) : g[aB].a8W || mL[a8p] % 64 != 5 || (g[aB].a8W = !0, g[aB].a8N = !0)
		}
	}

	function a8L(a6A) {
		a6A.canvas = document.createElement("canvas"), bU.xZ.font = a8H;
		var i = a8G;
		a6A.jd < aD.f6 && 0 === a6A.id && (i += Math.floor(bU.xZ.measureText(ag.za[a6A.jd] + "000").width)), i += y0, 0 === a6A.id && (i += y0), a6A.canvas.width = i, a6A.canvas.height = y0, a6A.zG = a6A.canvas.getContext("2d", {
			alpha: !0
		}), a6A.zG.font = a8H, bC.qz.textBaseline(a6A.zG, 1), bC.qz.textAlign(a6A.zG, 1)
	}

	function a8c(aB) {
		return aU.a8q() ? h.i - a67[aB].canvas.width - be.gap : aU.fG
	}

	function a8d(aB) {
		return Math.floor(2 * be.gap + (aU.a8q() ? aW.j + be.gap : 0) + aU.j + aB * (1.3 * y0))
	}
	this.dh = function() {
		a8J = a8K = 0, a67 = [], this.resize()
	}, this.resize = function() {
		a8H = aN.a6p, y0 = aN.fontSize + 5, y0 = Math.floor(1.25 * y0), a0.a1.iI() && (y0 = Math.floor(1.25 * y0)), a8I = Math.floor(.15 * y0), bU.xZ.font = a8H, a8G = Math.floor(bU.xZ.measureText("02 000 000 0000").width);
		for (var aB = a67.length - 1; 0 <= aB; aB--) a8L(a67[aB]), a8M(aB)
	}, this.mq = function() {
		for (var aB = a67.length - 1; 0 <= aB; aB--) a67[aB].a8N && (a67[aB].a8N = !1, a8M(aB))
	}, this.hM = function(lj, lk) {
		if (2 !== aD.a17 && 0 !== ag.n4[aD.et] && !aD.hI && !bC.gV.jr(aD.et))
			for (var a8X, a8Y, a8Z, a8a = a0.a1.iI() ? y0 : 0, a8b = a0.a1.iI() ? Math.floor(.15 * y0) : 0, aB = a67.length - 1; 0 <= aB; aB--)
				if (a8X = a8c(aB), a8Y = a8d(aB), a8Z = a67[aB].canvas.width, a8Y - a8b <= lk && lk <= a8Y + y0 + a8b) {
					if (a8X - a8a <= lj && lj <= a8X + y0 + a8a) return a67[aB].a8W || (a67[aB].a8N = !0, a67[aB].a8W = !0, 0 === a67[aB].id ? bA.hZ.pf(a67[aB].jd) : bA.hZ.pe(a67[aB].jd)), !0;
					if (0 === a67[aB].id && a8X + a8Z - y0 - a8a <= lj && lj <= a8X + a8Z + a8a) return bX.a6Y(3), bA.hZ.hg(aR.hd(), a67[aB].jd), !0
				} return !1
	}, this.ec = function() {
		var a3l, a3m, g, a8g;
		0 === ag.n4[aD.et] || bC.gV.jr(aD.et) && !aD.hI || (a3l = a67.slice(0, a8J), a3m = a67.slice(a8J, a8J + a8K), g = a3l, a8g = ad.gG(aD.et), function(g, a8g) {
			if (a8J !== a8g) return 1;
			for (var aB = a8g - 1; 0 <= aB; aB--)
				if (g[aB].jd !== ad.gL(aD.et, aB)) return 1;
			return
		}(g, a8g) ? a8i(g = function(g, a8g) {
			var aB, jd, fT, hs, a7H = [];
			loop: for (aB = 0; aB < a8g; aB++) {
				for (jd = ad.gL(aD.et, aB), fT = 0; fT < g.length; fT++)
					if (g[fT].jd === jd) {
						a7H.push(g.splice(fT, 1)[0]);
						continue loop
					} hs = ad.gM(aD.et, aB), a8L(hs = {
					jd: jd,
					hs: hs,
					a8V: hs,
					id: 0,
					a8N: !0,
					a8W: !1,
					canvas: null,
					zG: null
				}), a7H.push(hs)
			}
			return a7H
		}(g, a8g), a8g) : a8i(g, a8g), a3l = g, a3m = function(g) {
			var a8k = bP.y.kY[aD.et];
			return function(g, a8k) {
				if (a8K !== a8k) return 1;
				for (var td = aD.et << 3, mN = bP.y.mN, a8o = bP.y.a8o, aB = a8k - 1; 0 <= aB; aB--) {
					var a8p = a8o[td + aB];
					if (g[aB].jd !== mN[a8p]) return 1
				}
				return
			}(g, a8k) ? a8m(g = function(g, a8k) {
				var aB, jd, fT, a7H = [],
					td = aD.et << 3,
					mN = bP.y.mN,
					a7h = bP.y.a7h,
					a8o = bP.y.a8o;
				loop: for (aB = 0; aB < a8k; aB++) {
					var a8p = a8o[td + aB];
					for (jd = mN[a8p], fT = 0; fT < g.length; fT++)
						if (g[fT].jd === jd) {
							a7H.push(g.splice(fT, 1)[0]);
							continue loop
						} a8p = a7h[a8p], a8L(a8p = {
						jd: jd,
						hs: a8p,
						a8V: a8p,
						id: 1,
						a8N: !0,
						a8W: !1,
						canvas: null,
						zG: null
					}), a7H.push(a8p)
				}
				return a7H
			}(g, a8k), a8k) : a8m(g, a8k), g
		}(a3m), a8J = a3l.length, a8K = a3m.length, a67 = a3l.concat(a3m))
	}, this.ve = function() {
		if (0 !== ag.n4[aD.et] && (!bC.gV.jr(aD.et) || aD.hI))
			for (var aB = a67.length - 1; 0 <= aB; aB--) vf.drawImage(a67[aB].canvas, a8c(aB), a8d(aB))
	}
}

function cJ() {
	var a73, kZ, a8r, a8s, j, a6p, fontSize, a8t, a8u, a8v, a8w, canvas, zG, nH, a8x;

	function vv(aB) {
		return L(0 === aB ? 107 : 1 === aB ? 108 : 2 === aB ? 109 : 110)
	}

	function a94() {
		aD.i3 ? a95 + 4 * be.gap + j + bj.a96() > aR.fI ? vf.drawImage(canvas, 2 * be.gap + bj.a96(), a95 + 2 * be.gap) : vf.drawImage(canvas, be.gap, a95 + 3 * be.gap + bj.a96()) : vf.drawImage(canvas, be.gap, a95 + 2 * be.gap)
	}

	function a8y() {
		canvas.width = a73[0].width + a8v, canvas.height = j + a8v, (zG = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a73[0].width + a8v, j + a8v), zG.translate(Math.floor(a8v / 2), Math.floor(a8v / 2)), zG.lineWidth = a8v, zG.fillStyle = 1 === a73[0].a93 ? bD.oA : bD.o2, a97(), zG.fill(), zG.strokeStyle = 1 === a73[0].a93 ? bD.nw :
			bD.o5, a97(), zG.stroke(), bC.qz.textAlign(zG, 1), bC.qz.textBaseline(zG, 1), zG.fillStyle = 1 === a73[0].a93 ? bD.nw : bD.o5, zG.font = a6p[0], zG.fillText(vv(a73[0].a92), Math.floor(a73[0].width / 2), Math.floor(.72 * a8t[0] * j)), zG
			.font = a6p[1], zG.fillText(a73[0].qg, Math.floor(a73[0].width / 2), Math.floor((a8t[0] + .48 * a8t[1]) * j))
	}

	function a97() {
		zG.beginPath(), zG.moveTo(a8w, 0), zG.lineTo(a73[0].width - a8w, 0), zG.lineTo(a73[0].width, a8w), zG.lineTo(a73[0].width, j - a8w), zG.lineTo(a73[0].width - a8w, j), zG.lineTo(a8w, j), zG.lineTo(0, j - a8w), zG.lineTo(0, a8w), zG.closePath()
	}
	this.dh = function() {
		kZ = 4, a8r = a8s = nH = 0, a73 = [], a6p = new Array(2), fontSize = new Array(2), (a8t = new Array(2))[0] = .3, a8t[1] = .7, a8u = new Array(4), canvas = document.createElement("canvas"), a8x = bh.eX + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iI() ? .062 : .047) * h.iJ), fontSize[0] = Math.floor(.85 * a8t[0] * j), fontSize[1] = Math.floor(.85 * a8t[1] * j), a6p[0] = bC.qz.sq(1, fontSize[0]), a6p[1] = bC.qz.sq(1, fontSize[1]), aB = a8u.length -
			1; 0 <= aB; aB--) a8u[aB] = this.measureText(vv(aB) + "000", a6p[0]);
		if (a8v = Math.floor(1 + .05 * j), a8w = Math.floor(.2 * j), 0 < a73.length) {
			for (aB = a73.length - 1; 0 <= aB; aB--) i = this.measureText(a73[aB].qg + "00", a6p[1]), a73[aB].width = i < a8u[aB] ? a8u[aB] : i;
			a8y()
		}
	}, this.ec = function() {
		0 !== kZ && (4 === kZ ? bh.eX > a8x && (kZ = 0, 1 === aD.a17) && aQ.a1U(bU.xT.xU[bU.ep].name, 3, 1, 9) : (1 === kZ ? (0 === a8r && (a8y(), a8r = 1e-4), 1 <= (a8r += .002 * (bh.eX - nH)) && (a8s = 0, kZ = 2, a8r = 1), bh.dp = !0) : 2 ===
			kZ ? ((a8s += (bh.eX - nH) / 1e3) > a73[0].nM || 1 < a8s && 1 < a73.length) && (kZ = 3) : 3 === kZ && ((a8r -= .002 * (bh.eX - nH)) <= 0 && (a8r = 0, a73.shift(), kZ = 0 < a73.length ? 1 : 0), bh.dp = !0), nH = bh.eX))
	}, this.measureText = function(qg, a6p) {
		return vf.font = a6p, Math.floor(vf.measureText(qg).width)
	}, this.eg = function(a91, aB) {
		this.a1U(ag.za[a91], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1U = function(qg, a92, a93, nM) {
		var i;
		qg.length && (i = (i = this.measureText(qg + "00", a6p[1])) < a8u[a92] ? a8u[a92] : i, a73.push({
			qg: qg,
			width: i,
			a92: a92,
			a93: a93,
			nM: nM
		}), 0 === kZ) && (a8r = 0, kZ = 1, nH = bh.eX)
	}, this.ve = function() {
		0 !== kZ && 0 !== a8r && (a8r < 1 ? (vf.globalAlpha = a8r, a94(), vf.globalAlpha = 1) : a94())
	}
}

function cs() {
	var j, canvas, zG, a98, a99, a9A, a9B, a8N, a9C, a9D, a9E, a9F, a7n = !1,
		a3z = (this.hv = !1, this.i = 0, new Array(2)),
		a9G = 0;

	function mr() {
		var i = aw.i,
			lP = (a8N = !1, zF(zG, i, j), Math.floor(i / 2));
		1 === a98 ? (zG.fillStyle = bD.oP, zG.fillRect(lP, 0, lP, j)) : -1 === a98 && (zG.fillStyle = bD.og, zG.fillRect(0, 0, lP, j)), zH(zG, i, j, 2);
		var lP = (lP = Math.floor(.25 * j)) < 2 ? 2 : lP,
			a7x = (zG.fillStyle = bD.oB, Math.floor((j - 4) * a99[1] / a9A[1]));
		0 < a7x && zG.fillRect(2, j - 2 - a7x, lP, a7x), 0 < (a7x = Math.floor((j - 4) * a99[0] / a9A[0])) && zG.fillRect(i - 2 - lP, j - 2 - a7x, lP, a7x);
		lP = (lP = Math.floor(j / 8)) < 2 ? 2 : lP, zJ(zG, Math.floor(.4 * j), 0, j, lP, .5, !1), zJ(zG, Math.floor(i - 1.4 * j), 0, j, lP, .5, !0), a7x = 1.1 * j / a3z[0].width;
		zG.imageSmoothingEnabled = !0, zG.setTransform(a7x, 0, 0, a7x, (i - a7x * a3z[0].width) / 2, -.05 * j), zG.drawImage(a3z[+a7n], 0, 0), zG.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9L() {
		a9F = -1, a7n = ah.a9M(), aN.a5T(257), aN.a7m(a7n), aw.hv = !0, a8N = !0, a9C = 360;
		for (var fb, eY = 0, aB = al.l0 - 1; 0 <= aB; aB--) bC.gV.jr(al.l5[aB]) || (eY += ag.gx[al.l5[aB]]);
		a7n ? a9A[0] = Math.max(bN.fa(3 * eY, 4), 1) : aD.i3 ? (fb = 9 === aD.km && 8 === bi.kr[bj.l3()] ? 80 : (fb = bN.fa(100 * bj.l1(), aD.kE), bN.iH(200 - 2 * fb, 40, 100)), fb = bN.fa(fb * eY, 100), a9A[0] = Math.max(fb, 1)) : 8 === aD.km ? a9A[
			0] = Math.max(bN.fa(3 * eY, 4), 1) : a9A[0] = Math.max(bN.fa(3 * eY, 5), 1), a9A[1] = Math.max(eY - a9A[0], 1)
	}

	function a9H() {
		a9E = bh.kR(), a8N = !0, a9C = a98 = 0, a9B = [], aw.hv = !1, aN.a1F(247), a99[0] = a99[1] = 0, aN.a5T(673)
	}

	function zC() {
		return aR.a7S(aN.a7O()) ? __fx.settings.keybindButtons ? aR.fI - 2 * (j + be.gap) : aR.fI - j - be.gap : bE.a7S(aN.a7R()) ? bE.zC() - j - be.gap : h.j - j - bm.a6E() * be.gap
	}
	this.di = function() {
		for (var aB = 0; aB < 2; aB++) a3z[aB] = bC.canvas.zr(ab.get(3), 8 - aB, bD.pJ), a3z[aB] = bC.canvas.a41(a3z[aB])
	}, this.dh = function() {
		a9E = -1e4, a9D = a9G = 0, a9F = -1, this.hv = !1, a8N = a7n = !1, a99 = [a98 = a9C = 0, 0], a9A = [1, 1], a9B = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, zG = canvas.getContext("2d", {
			alpha: !0
		}), mr()
	}, this.mq = function() {
		a8N && mr()
	}, this.hM = function(fG, fI) {
		return !!this.hv && !(fG < h.i - this.i - be.gap || fI < zC() || (aD.hI || this.hw(aD.et) && (aM.hJ && aM.a3G(), bA.hZ.hx(fG > h.i - be.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ec = function() {
		0 < a9D ? 0 === --a9D && a9H() : this.hv ? 180 == --a9C && 3 * a99[0] < a9A[0] ? a9H() : a99[0] >= a9A[0] ? a7n ? bT.a0j.a12() : bT.a0j.a16() : a99[1] >= a9A[1] ? a9D = 4 : a9C <= 0 && a9H() : ! function() {
			var a9O = bh.kR();
			if (a9O % 40 == 14) {
				if (a9G) return !(a9O < a9G) && !(a9O < a9E + 535) && (a9G = a9O + 1071, bC.gV.a4Y()) ? (a9L(), 1) : 0;
				(1 === al.l0 || (aD.i3 ? bj.l1() : ag.gx[m5[0]]) >= bN.fa(96 * aD.kE, 100)) && (a9G = a9O + 535)
			}
			return
		}() && 0 <= a9F && (aN.zZ(250, L(111, [ag.za[a9F]]), 673, a9F, bD.o5, bD.o2, -1, !0), a9L())
	}, this.a18 = function() {
		this.hv && a99[0] < a9A[0] && a9H()
	}, this.qZ = function(player, a9P) {
		var a9Q = L(a9P ? 112 : 113, [ag.za[player]]),
			a9Q = (aN.zZ(450, a9Q, 257, player, a9P ? bD.oN : bD.oc, bD.o2, -1, !0), a9B.push(player), a8N = !0, aD.ko ? Math.max(a9A[0], a9A[1]) : ag.gx[player]),
			a9Q = Math.max(a9Q, 1);
		a9P ? a99[0] += a9Q : a99[1] += a9Q, player === aD.et && (a98 = a9P ? 1 : -1)
	}, this.ve = function() {
		var fI;
		this.hv && (fI = zC(), vf.drawImage(canvas, h.i - this.i - be.gap, fI))
	}, this.hy = function(player) {
		if (0 !== a9C) return !1;
		if (!bC.gV.hK(1)) return !1;
		if (!bC.gV.hL(player)) return !1;
		if (10 <= kF[player] && !bC.gV.a4r(player, 9)) return !1;
		if (!aD.ko) {
			player = bh.kR();
			if (player < a9E + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hw = function(gh) {
		if (!bC.gV.hK(1)) return !1;
		if (!bC.gV.hL(gh)) return !1;
		if (!this.hv) return !1;
		for (var aB = a9B.length - 1; 0 <= aB; aB--)
			if (a9B[aB] === gh) return !1;
		return !0
	}, this.hu = function(player) {
		a9F = player
	}
}

function cK() {
	var i, fG, a9S, canvas, zG, hv, il, a5K, a6p, a8N, a9T = 11 / 12;

	function a9V() {
		var a8U = Math.floor(il * (i - 2 * a9S)),
			a9Y = 1 + Math.floor(.0625 * aR.j),
			a9Z = 1 + Math.floor(.3 * aR.j),
			a9a = Math.floor(.55 * aR.j);
		zG.clearRect(0, 0, i, aR.j), zG.fillStyle = bD.o1, zG.fillRect(0, 0, a9S, aR.j), zG.fillRect(a9S + a8U, 0, i - a9S - a8U, aR.j), zG.fillStyle = il < 1 / 3 ? "rgba(" + Math.floor(3 * il * 130) + ",130,0,0.85)" : il < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (il - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (il - 2 / 3) * 130) + ",0.85)", zG.fillRect(a9S, 0, a8U, aR.j), zG.fillStyle = bD.o5, zG.fillRect(0, 0, i, 1), zG.fillRect(0, aR.j - 1, i, 1), zG
			.fillRect(0, 0, 1, aR.j), zG.fillRect(a9S, 0, 1, aR.j), zG.fillRect(a9S + a8U, 0, 1, aR.j), zG.fillRect(i - a9S, 0, 1, aR.j), zG.fillRect(i - 1, 0, 1, aR.j), zG.fillRect(Math.floor(.25 * aR.j) + a9Z, Math.floor((aR.j - a9Y) / 2), aR.j -
				2 * a9Z, a9Y), zG.fillRect(Math.floor(i - 1.25 * aR.j) + a9Z, Math.floor((aR.j - a9Y) / 2), aR.j - 2 * a9Z - a9Z % 2, a9Y), zG.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9Y) / 2), a9Z, a9Y, aR.j - 2 * a9Z - a9Z % 2),
			a5K = bC.gV.ik(aD.et, aR.hd()), zG.fillText(bC.ry.a0O(a5K) + " (" + bC.ry.a5D(100 * il, +(il < .1)) + ")", Math.floor(.5 * i), a9a)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		il = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a3C(arg1);

	function a9f(a3Y) {
		return !(1 < a3Y && 1 === il || (1 < a3Y && a3Y * il - il < 1 / 1024 ? a3Y = (il + 1 / 1024) / il : a3Y < 1 && il - a3Y * il < 1 / 1024 && (a3Y = (il - 1 / 1024) / il), il = bN.iH(il * a3Y, 1 / 1024, 1), a9V(), 0))
	}

	function a9g(lj) {
		return il !== (il = bN.iH((lj - fG - a9S) / (i - 2 * a9S), 1 / 1024, 1)) && (a9V(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9V(), bh.dp = !0
	}, this.fI = 0, this.hN = !1, this.dh = function() {
		hv = !aD.hX && !aD.hI, a8N = !1, il = .5, a5K = 0, this.hN = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iI() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iJ), i = h.i - 4 * be.gap - this.j) : (i = Math.floor((a0.a1.iI() ? .65 : .389) * h.iJ), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9S = Math.floor(3 * this.j / 2), a6p =
			bC.qz.sq(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vf), canvas.height = this.j, (zG = canvas.getContext("2d", {
				alpha: !0
			})).font = a6p, bC.qz.textBaseline(zG, 1), bC.qz.textAlign(zG, 1), this.a9U(), a9V()
	}, this.a9U = function() {
		fG = a0.a1.iI() && h.i < .8 * h.j ? this.j + 3 * be.gap : Math.floor((h.i - i) / 2), this.fI = h.j - this.j - bm.a6E() * be.gap
	}, this.mq = function() {
		a8N && (a8N = !1, a9V())
	}, this.hv = function() {
		return !(!hv || aM.hJ && fG < Math.floor(be.gap + 5.5 * this.j))
	}, this.a7S = function(a9b) {
		return !!this.hv() && fG + i > h.i - a9b - be.gap
	}, this.a5R = function() {
		hv = !aD.hI
	}, this.a9H = function() {
		hv = !1
	}, this.hd = function() {
		return bN.iH(Math.floor(1024 * il + .5) - 1, 0, 1023)
	}, this.a39 = function(lj, lk) {
		return this.hv() && fG < lj && lj < fG + i && lk > this.fI
	}, this.hM = function(lj, lk) {
		if (!this.hv()) return !1;
		if (!(__fx.settings.keybindButtons && lk > this.fI - Math.floor(be.gap / 4) - this.j && lk < this.fI - Math.floor(be.gap / 4) && __fx.mobileKeybinds.click(lj - fG))) {
			if (!aR.a39(lj, lk)) return !1;
			aS.na = !1, ! function(sb, lj, lk) {
				if (function(lj, lk) {
						return fG < lj && lj < fG + a9S && lk > aR.fI
					}(lj, lk)) return a9f(a9T);
				if (function(lj, lk) {
						return fG + i - a9S < lj && lj < fG + i && lk > aR.fI
					}(lj, lk)) return a9f(1 / a9T);
				return sb.hN = !0, a9g(lj)
			}(this, lj, lk) || (bh.dp = !0)
		}
		return !0
	}, this.a3C = function(nh) {
		0 !== aD.a17 && this.hv() && a9f(nh) && (bh.dp = !0)
	}, this.a2i = function(deltaY) {
		var nh;
		return !(0 === deltaY || !this.hv()) && a9f(nh = 0 < deltaY ? (nh = 400 / (400 + deltaY)) < a9T ? a9T : nh : 1 / a9T < (nh = (400 - deltaY) / 400) ? 1 / a9T : nh)
	}, this.a2f = function(lj) {
		return !!this.hN && a9g(lj)
	}, this.a35 = function() {
		this.hN = !1
	}, this.ec = function() {
		this.hv() && a5K !== bC.gV.ik(aD.et, this.hd()) && (a8N = !0)
	}, this.ve = function() {
		this.hv() && (vf.drawImage(canvas, fG, this.fI), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vf, fG, this.fI)
	}
}

function d4() {
	var canvas, zG, a9h, font, a9i = 0,
		a9j = !1,
		a9k = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9l = 5;

	function a9s() {
		if (a9j) {
			var aB, f9 = a9k.length,
				a9a = Math.floor(.5 * a9h.j),
				j = f9 * a9a,
				fG = Math.floor(Math.floor(a9h.fG) + .3 * a9h.i - .5),
				fI = Math.floor(Math.floor(a9h.fI) - j),
				i = Math.floor(.4 * a9h.i + 2.5);
			for (vf.fillStyle = bD.o1, vf.fillRect(fG, fI, i, j), vf.fillStyle = bD.oU, vf.fillRect(fG, fI + a9l * a9a, i, a9a), vf.fillStyle = bD.o5, vf.fillRect(fG, fI, 2, j), vf.fillRect(fG, fI, i, 2), vf.fillRect(fG + i - 2, fI, 2, j), aB =
				1; aB < f9; aB++) vf.fillRect(fG, fI + aB * a9a, i, 2);
			for (vf.fillStyle = bD.o5, bC.qz.textAlign(vf, 1), bC.qz.textBaseline(vf, 1), vf.font = bC.qz.sq(0, .6 * a9a), fG += .5 * i, aB = 0; aB < f9; aB++) vf.fillText(aA0(aB), fG, fI + (aB + .6) * a9a)
		}
		vf.drawImage(canvas, Math.floor(a9h.fG), Math.floor(a9h.fI))
	}

	function mr(sb) {
		var fG, nV, nW, a9a;
		zG.clearRect(0, 0, Math.floor(a9h.i), Math.floor(a9h.j)), zG.fillStyle = bD.o1, zG.fillRect(0, 0, Math.floor(a9h.i), Math.floor(a9h.j)), aD.nY && (zG.fillStyle = bD.oU, zG.fillRect(0, 0, Math.floor(.3 * a9h.i), Math.floor(a9h.j))), zG
			.fillStyle = bD.o5, zG.fillText("Hide UI", .15 * a9h.i, .5 * a9h.j), zG.fillRect(Math.floor(.3 * a9h.i - .5), 0, 2, Math.floor(a9h.j)), fG = .5 * a9h.i, zG.fillText("Replay Speed", fG, .31 * a9h.j), zG.fillText(aA0(a9l), fG, .69 * a9h.j),
			zG.fillRect(Math.floor(.7 * a9h.i - .5), 0, 2, Math.floor(a9h.j)), sb.a5y ? (fG = Math.floor(.02 * a9h.i), sb = Math.floor(.025 * a9h.i), nV = Math.floor(.85 * a9h.i - fG - .5 * sb), nW = Math.floor(.25 * a9h.j), a9a = Math.floor(a9h.j) -
				2 * nW, zG.fillRect(nV, nW, fG, a9a), zG.fillRect(nV + fG + sb, nW, fG, a9a)) : function() {
				var i = Math.floor(.46 * a9h.j),
					j = Math.floor(.23 * a9h.j),
					fG = Math.floor(.85 * a9h.i - .5 * i + i / 12),
					fI = Math.floor(.5 * a9h.j - j);
				zG.beginPath(), zG.moveTo(fG, fI), zG.lineTo(fG + i, fI + j), zG.lineTo(fG, fI + (j << 1)), zG.fill()
			}(), zG.fillRect(0, 0, Math.floor(a9h.i), 2), zG.fillRect(0, 0, 2, Math.floor(a9h.j)), zG.fillRect(0, Math.floor(a9h.j) - 2, Math.floor(a9h.i), 2), zG.fillRect(Math.floor(a9h.i - 2), 0, 2, Math.floor(a9h.j))
	}

	function aA0(aB) {
		return 5 === aB ? "Normal" : "" + a9k[aB]
	}
	this.a5y = !1, this.dh = function() {
		aD.hI && (a9l = 5, this.a5y = !1, a9j = !1, a9h = new ra([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9m = function() {
		return a9k[a9l]
	}, this.zC = function() {
		return a9h.fI
	}, this.a7S = function(a9b) {
		return !!aD.hI && a9h.fG + a9h.i > h.i - a9b - be.gap
	}, this.resize = function() {
		aD.hI && (a9h.resize(), a9h.fI -= (bm.a6E() - 1) * be.gap, font = bC.qz.sq(0, .3 * a9h.j), (canvas = document.createElement("canvas")).width = Math.floor(a9h.i), canvas.height = Math.floor(a9h.j), (zG = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bC.qz.textAlign(zG, 1), bC.qz.textBaseline(zG, 1), mr(this))
	}, this.a3F = function(a9n) {
		0 === aD.a17 || t.hv() || a9n !== aD.nY && (aD.nY = a9n, bj.resize(), bh.dp = !0, aD.hI) && (a9i = bh.eX + 2e3, mr(this))
	}, this.hM = function(fG, fI) {
		if (!aD.hI) return !1;
		if (fG < a9h.fG || fI < a9h.fI || fG > a9h.fG + a9h.i) return a9j && function(sb, fG, fI) {
			var f9 = a9k.length,
				a9a = Math.floor(.5 * a9h.j),
				j = f9 * a9a,
				nV = Math.floor(Math.floor(a9h.fG) + .3 * a9h.i - .5),
				j = Math.floor(Math.floor(a9h.fI) - j),
				i = Math.floor(.4 * a9h.i + 2.5);
			return a9j = !1, bh.dp = !0, fG < nV || nV + i < fG || fI < j || (a9l = a9r(0, Math.floor((fI - j) / a9a), f9 - 1), mr(sb)), !0
		}(this, fG, fI);
		if ((fG -= a9h.fG) < .3 * a9h.i) a9j = !1, this.a3F(!aD.nY);
		else {
			if (fG < .7 * a9h.i) return a9j = !a9j, bh.dp = !0;
			this.a3H(!1)
		}
		return !0
	}, this.a3H = function(a9p) {
		2 === aD.a17 ? (this.a3F(!1), t.u(3)) : (a9j = !1, this.a5y = !this.a5y, this.a5y ? (aM.hJ && aM.a3G(), a0.a1.setState(1)) : a9p || aM.a6w(), bh.dp = !0, mr(this))
	}, this.a9q = function() {
		this.a5y = !1, aM.a6w(), bh.dp = !0, mr(this)
	}, this.a2y = function(fG, fI) {
		return !!aD.nY && (0 <= aM.hM(fG, fI) || (aD.hI ? ((bh.eX > a9i || !this.hM(fG, fI)) && aS.hM(fG, fI), bh.dp = !0, a9i = bh.eX + 2e3) : aS.hM(fG, fI)), !0)
	}, this.ec = function() {
		aD.hI && aD.nY && bh.eX > a9i - 1e3 && bh.eX < a9i && (bh.dp = !0)
	}, this.a1G = function() {
		aD.hI && (this.a5y = !1, bh.dp = !0, mr(this))
	}, this.ve = function() {
		if (aD.hI) {
			if (aD.nY) {
				if (bh.eX > a9i) return;
				if (bh.eX > a9i - 1e3) return vf.globalAlpha = a9r(0, (1e3 - (bh.eX - (a9i - 1e3))) / 1e3, 1), a9s(), void(vf.globalAlpha = 1)
			}
			a9s()
		}
	}
}

function cL() {
	var aA1, aA2, i, fG, fI, aA3, aA4;
	this.dh = function() {
		aA1 = new Array(2), aA2 = new Array(2), this.na = !1, aA4 = aA3 = io = im = 0, iK = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iI() ? .072 : .0502) * h.iJ)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) aA1[aB] = document.createElement("canvas"), aA1[aB].width = i, aA1[aB].height = i, aA2[aB] = aA1[aB].getContext("2d", {
			alpha: !0
		});
		this.a9U(),
			function() {
				for (var aAL = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) aA2[aB].clearRect(0, 0, i, i), aA2[aB].fillStyle = bD.ny, aA2[aB].beginPath(), aA2[aB].arc(i / 2, i / 2, i / 2 - aAL, 0, 2 * Math.PI), aA2[aB].fill(), aA2[aB]
					.lineWidth = aAL, aA2[aB].fillStyle = bD.o5, aA2[aB].strokeStyle = bD.o5, aA2[aB].beginPath(), aA2[aB].arc(i / 2, i / 2, i / 2 - aAL, 0, 2 * Math.PI), aA2[aB].stroke(), zJ(aA2[aB], 0, 0, i, aAL, .3, 0 === aB)
			}()
	}, this.zB = function() {
		return -im / iK
	}, this.zC = function() {
		return -io / iK
	}, this.nk = function(aA8, iQ) {
		im = iK * aA8 - iQ
	}, this.nl = function(aA9, iR) {
		io = iK * aA9 - iR
	}, this.hM = function(aA7, a7T) {
		return aD.nY || ! function(aA7, a7T) {
			return Math.pow(aA7 - (fG + i / 2), 2) + Math.pow(a7T - (fI + i / 2), 2) < i * i / 4 || Math.pow(aA7 - (fG + i / 2), 2) + Math.pow(a7T - (fI + 2 * i), 2) < i * i / 4
		}(aA7, a7T) || bl.eU.data[8].value ? (aH.nn() && (this.na = !0, aA3 = aA7, aA4 = a7T), !1) : a7T < fI + 1.25 * i ? this.a2i(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2i(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2f = function(aA7, a7T) {
		var aAA, aAB, iT, iW;
		return !aH.nn() || (aAA = im, aAB = io, im += iT = aA3 - aA7, io += iW = aA4 - a7T, af.a2f(iT, iW), this.aAC(), aA3 = aA7, aA4 = a7T, aAA !== im) || aAB !== io
	}, this.a2i = function(lj, lk, deltaY) {
		var nh;
		if (aH.nn()) {
			if (0 < deltaY) nh = (nh = 500 / (500 + deltaY)) < .5 ? .5 : nh;
			else {
				if (!(deltaY < 0)) return !1;
				nh = 2 < (nh = (500 - deltaY) / 500) ? 2 : nh
			}
			this.aAD(lj, lk, nh), bh.dp = !0
		}
		return !0
	}, this.aAD = function(fG, fI, en) {
		var a3Y;
		en = a3Y = (a3Y = 1024 < (a3Y = en) * iK ? 1024 / iK : a3Y) * iK < .125 ? .125 / iK : a3Y, af.zoom(en, fG, fI),
			function(a3Y, lj, lk) {
				iK *= a3Y, im = (im + lj) * a3Y - lj, io = (io + lk) * a3Y - lk, aS.aAC()
			}(en, fG, fI)
	}, this.aAC = function() {
		var aAG = h.i / 16,
			aAH = 0,
			aAI = h.j / 16,
			aAJ = 0;
		im < -h.i + aAG && (aAH = -h.i + aAG - im), im > iK * bU.fK - aAG && (aAH = iK * bU.fK - aAG - im), io < -h.j + aAI && (aAJ = -h.j + aAI - io), io > iK * bU.fL - aAI && (aAJ = iK * bU.fL - aAI - io), im += aAH, io += aAJ, bc.nm(), af.aAK(
			aAH, aAJ)
	}, this.a9U = function() {
		fG = h.i - i - be.gap, fI = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ve = function() {
		bl.eU.data[8].value || (vf.drawImage(aA1[0], fG, fI), vf.drawImage(aA1[1], fG, Math.floor(fI + 3 * i / 2)))
	}
}

function cM() {
	var g, aAM, aAN, aAO, gap, aAP, aAQ, aAR, aAS, aAT, a6p, aAU, hE, aAV, a8U, aAW, aAX;

	function aAb() {
		aAO = Math.floor(.2 * (a0.a1.iI() ? .07 : .035) * h.iJ), aAO = a7Q(a0.a1.iI() ? 3 : 1, aAO);
		var aAe = h.i / (g.length + gap);
		aAO = aAO < aAe ? aAe : aAO, a8U = Math.floor((1 - gap) * aAO), aAM = 0, aAf()
	}

	function aAf() {
		aAM = (aAM = aAM < -20 ? -20 : aAM) > (g.length - 15) * aAO ? (g.length - 15) * aAO : aAM, aAQ = Math.floor(aAM / aAO), aAR = (aAR = aAQ + Math.floor(h.i / aAO)) > g.length - 1 ? g.length - 1 : aAR, aAQ = (aAQ = aAR < aAQ ? aAR : aAQ) < 0 ?
			0 : aAQ;
		var lP = aAR;
		aAP = aAN / g[lP];
		for (var aB = aAR - 1; aAQ <= aB; aB--) g[aB] > g[lP] && (lP = aB, aAP = aAN / Math.pow(g[aB], aAV))
	}

	function aAi(fG) {
		fG = Math.floor((aAM + h.i - fG - gap * aAO) / aAO);
		return (fG = fG < -1 ? -1 : -1 === fG ? 0 : fG > g.length - 1 ? -1 : fG) !== aAS && (aAS = fG, -1 === aAW && 0 === aAS && aT.aAY && (aAW = setInterval(aAj, 100)), 1)
	}

	function aAk(aB) {
		var aAm = Math.floor(aAP * Math.pow(g[aB], aAV));
		vf.fillRect(aAM + h.i - (aB + 1) * aAO, h.j - aAm, a8U, aAm)
	}

	function aAj() {
		var gh;
		0 !== (aAS = 8 === aa.a2J() ? -1 : aAS) ? (aAX = (new Date).getTime(), clearInterval(aAW), aAW = -1) : (gh = g[1] / 864e3, -1 !== aAX && (gh += ((new Date).getTime() - aAX) * g[1] / 864e5, aAX = -1), 0 < gh && (g[0] += Math.floor(gh), bh
			.dp = !0))
	}
	this.aAY = !1, this.dh = function() {
		aAX = aAW = -1, aAS = -(aAV = 1), this.aAZ = !1, hE = 0, aAU = new Date, aAM = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAN = Math.floor(.15 * h.j), aAT = (aAT = Math.floor((a0.a1.iI() ? .018 : .0137) * h.iJ)) < 2 ? 2 : aAT, a6p = bC.qz.sq(1, aAT), aAb()
	}, this.aAc = function(aAd) {
		var aB;
		for (this.aAY = !0, aB = 0; aB < aAd.length; aB++) g.unshift(aAd[aB]);
		aAb(), bh.dp = !0
	}, this.aAg = function() {
		aAf()
	}, this.a2f = function(fG, fI) {
		fI > h.j - .6 * aAN ? this.aAZ ? fG !== hE && (aAM += fG - hE, hE = fG, aAf(), aAi(fG), this.aAZ = -1 !== aAS, bh.dp = !0) : aAi(fG) && (bh.dp = !0) : this.s0()
	}, this.s0 = function() {
		-1 !== aAS && (this.aAZ = !1, aAS = -1, bh.dp = !0)
	}, this.a2i = function(fG, deltaY) {
		-1 !== aAS && (aAM += Math.floor(deltaY), aAf(), aAi(fG), bh.dp = !0)
	}, this.hM = function(fG, fI) {
		this.a2f(fG, fI), -1 !== aAS && (hE = fG, this.aAZ = !0)
	}, this.a34 = function() {
		-1 !== aAS && (this.aAZ = !1)
	}, this.ve = function() {
		vf.fillStyle = bD.o8;
		for (var aAn, month, eY, tR, aAq, aAr, nW, aAs, aAt, aB = aAR; aAQ <= aB; aB--) aAk(aB);
		this.aAY && 0 === aAQ && (vf.fillStyle = bD.og, aAk(0)), -1 !== aAS && (vf.fillStyle = bD.o7, aAk(aAS)), -1 !== aAS && (vf.font = a6p, bC.qz.textBaseline(vf, 2), (eY = new Date).setTime(aAU.getTime() - 1e3 * aAS * 60 * 60 * 24), month =
			"month", aAn = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eY), aAn = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eY)), aAn = aAn + ", " + eY.getUTCDate() + " " + month + " " + eY.getFullYear(), month = 1 === g[aAS] ? L(114) : L(115), month = bC.ry.a0O(g[aAS]) + " " + month, eY = Math.floor(vf.measureText(aAn).width), tR = Math
			.floor(vf.measureText(month).width), aAq = Math.floor(.5 * (eY + aAT)), aAr = (aAr = aAM + h.i - (aAS + 1) * aAO) < aAq ? aAq : aAr > h.i - aAq ? h.i - aAq : aAr, nW = h.j - Math.floor(aAP * Math.pow(g[aAS], aAV)), aAs = Math
			.floor(1.1 * aAT), aAt = nW > h.j - aAs ? h.j - aAs : nW, vf.fillStyle = bD.o2, vf.fillRect(h.i - tR - aAT, aAt - aAs, tR + aAT, aAs), vf.fillRect(aAr - aAq, h.j - aAs, eY + aAT, aAs), vf.fillStyle = bD.o5, bC.qz.textAlign(vf, 2),
			vf.fillText(month, Math.floor(h.i - .5 * aAT), aAt), bC.qz.textAlign(vf, 1), vf.fillText(aAn, aAr, h.j), vf.strokeStyle = bD.o9, vf.lineWidth = 1, vf.beginPath(), vf.moveTo(0, nW), vf.lineTo(h.i, nW), vf.closePath(), vf.stroke())
	}
}

function cN() {
	var a6p, i, fI, aAu, aAv, aAw, canvas, zG, a8N, a4f, aAx, aAy, aAz, aB0;
	this.fG = 0, this.j = 0, this.dh = function() {
		aAw = aD.a5Z, aAy = "rgba(0,100,0,0.8)", aAz = "rgba(150,0,0,0.8)", a8N = aAx = !0, a4f = ag.hB[aD.et], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iI() ? .305 : .24) * h.iJ), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6p = bC.qz.sq(1, Math.floor(.8 * this.j)), aAv = bC.qz.sq(1, Math.floor(.45 * this.j)), aB0 = Math.floor(.5 * this.j), bU.xZ
			.font = a6p, fI = be.gap, aAu = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, zG = canvas.getContext("2d", {
				alpha: !0
			}), bC.qz.textBaseline(zG, 1), bC.qz.textAlign(zG, 1), this.aB1()
	}, this.a8q = function() {
		return a0.a1.iI() && h.i < 1.2 * h.j
	}, this.a9U = function() {
		this.a8q() ? this.fG = h.i - i - be.gap : this.fG = Math.floor(aV.aB2() + (h.i - aV.aB2() - aW.i - i) / 2 - .5 * be.gap)
	}, this.mq = function() {
		a8N && (a8N = !1, this.aB1())
	}, this.aB1 = function() {
		zG.font = a6p, zG.clearRect(0, 0, i, this.j), zG.fillStyle = aAx ? aAy : aAz, zG.fillRect(0, 0, i, this.j), zG.fillStyle = bD.o7;
		var eh = this.aB3(),
			aB5 = (this.aB4(), zG.fillStyle = ag.hB[aD.et] >= ae.kA(aD.et) ? bD.oc : bD.o5, bC.ry.a0O(a4f)),
			aB5 = (zG.fillText(aB5, Math.floor(i / 2), aB0), zG.measureText(aB5).width),
			eh = (zG.font = aAv, zG.fillStyle = 9 === eh ? bD.pD : bD.o5, ae.aB7),
			aB8 = "+" + eh,
			tR = zG.measureText(aB8).width,
			aB9 = Math.floor(this.j / 12),
			aB5 = .5 * (i + aB5) + aB9;
		(aB5 + tR + aAu <= i || 1e3 <= eh && (aB8 = "+" + Math.floor(eh / 1e3) + "K", aB5 + (tR = zG.measureText(aB8).width) + aAu <= i)) && zG.fillText(aB8, Math.floor(aB5 + .5 * tR), Math.floor(.3 * this.j)), zG.fillStyle = bD.o5, zG.fillRect(
			0, 0, i, 1), zG.fillRect(0, 0, 1, this.j), zG.fillRect(0, this.j - 1, i, 1), zG.fillRect(i - 1, 0, 1, this.j)
	}, this.aB3 = function() {
		var eh = bh.kR() % 100,
			yE = (eh = 9 - bN.fa(eh -= eh % 10, 10), Math.floor(eh * (this.j - aAu) / 9));
		return zG.fillRect(0, yE, aAu, this.j - yE), zG.fillRect(i - aAu, yE, aAu, this.j - yE), eh
	}, this.aB4 = function() {
		zG.fillRect(aAu, this.j - aAu, Math.floor((i - 2 * aAu) * ag.hB[aD.et] / aAw), aAu)
	}, this.ec = function() {
		var gh = aD.et;
		bC.gV.hL(gh) && (gh = ag.hB[gh] - ag.a4e[gh], a4f !== gh ? (aAw = a7Q(gh, aAw), aAx = a4f < gh && 10 <= gh, a4f = gh, a8N = !0) : bh.kR() % 10 == 9 && (a8N = !0))
	}, this.ve = function() {
		0 === ag.n4[aD.et] || aD.hX || 2 === ag.a4V[aD.et] || vf.drawImage(canvas, this.fG, fI)
	}
}

function cO() {
	var aBA, aBB, aBC, aBD, aBE, aBF, aBG, aBH, aBI, aBJ, aBK, aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, position, aBW, aBX, aBY, aBZ, aBa, aBb = 1,
		aBc = 1,
		aBd = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.et;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kF[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kF[aD.et]);
	}

	function aBf() {
		aBG.clearRect(0, 0, aBA, a95),
			aBG.fillStyle = aBa ? bD.p0 : bD.ow,
			aBG.fillRect(0, 0, aBA, aBL),
			aBG.fillStyle = bD.o1,
			aBG.fillRect(0, aBL, aBA, a95 - aBL);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kF[aD.et]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBV = -1;
		if (__fx.leaderboardFilter.enabled && aBV >= __fx.leaderboardFilter.filteredLeaderboard.length) aBV = -1;
		playerPos >= position && aBh(playerPos - position, bD.oU),
			0 !== kF[aD.et] && 0 === position && aBh(0, bD.p4),
			-1 !== aBV && aBh(aBV, bD.o6),
			aBG.fillStyle = bD.o1,
			//console.log("drawing", aBV),
			aBG.clearRect(0, a95 - __fx.leaderboardFilter.tabBarOffset, aBA, __fx.leaderboardFilter.tabBarOffset);
		aBG.fillRect(0, a95 - __fx.leaderboardFilter.tabBarOffset, aBA, __fx.leaderboardFilter.tabBarOffset);
		aBG.fillStyle = bD.o5,
			aBG.fillRect(0, aBL, aBA, 1),
			aBG.fillRect(0, a95 - __fx.leaderboardFilter.tabBarOffset, aBA, 1),
			__fx.leaderboardFilter.drawTabs(aBG, aBA, a95 - __fx.leaderboardFilter.tabBarOffset, bD.oU),
			aBG.fillRect(0, 0, aBA, be.a05),
			aBG.fillRect(0, 0, be.a05, a95),
			aBG.fillRect(aBA - be.a05, 0, be.a05, a95),
			aBG.fillRect(0, a95 - be.a05, aBA, be.a05), aBG.font = aBB, bC.qz.textBaseline(aBG, 1), bC.qz.textAlign(aBG, 1), aBG.fillText(aBd, Math.floor((aBA + aBL - 22) / 2), Math.floor(aBJ + aBC / 2));
		__fx.playerList.drawButton(aBG, 12, 12, aBL - 22);
		var fS, gi = playerPos < position + aBE - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aBE)
				position = (result.length > aBE ? result.length : aBE) - aBE;
			//if (position >= result.length) position = result.length - 1;
			for (aBG.font = aBD, bC.qz.textAlign(aBG, 0), fS = aBE - gi; 0 <= fS; fS--) {
				const pos = result[fS + position];
				if (pos !== undefined)
					aBi(m5[pos]), aBj(fS, pos, m5[pos]);
			}
			for (bC.qz.textAlign(aBG, 2), fS = aBE - gi; 0 <= fS; fS--) {
				const pos = result[fS + position];
				if (pos !== undefined)
					aBi(m5[pos]), aBk(fS, m5[pos]);
			}
		} else {
			for (aBG.font = aBD, bC.qz.textAlign(aBG, 0), fS = aBE - gi; 0 <= fS; fS--)
				aBi(m5[fS + position]), aBj(fS, fS + position, m5[fS + position]);
			for (bC.qz.textAlign(aBG, 2), fS = aBE - gi; 0 <= fS; fS--)
				aBi(m5[fS + position]), aBk(fS, m5[fS + position]);
		}
		2 == gi && (aBi(aD.et), bC.qz.textAlign(aBG, 0), aBj(aBE - 1, kF[aD.et], aD.et), bC.qz.textAlign(aBG, 2), aBk(aBE - 1, aD.et)), 0 === position && (gi = .7 * aBM / ab.get(4).height, aBG.setTransform(gi, 0, 0, gi, Math.floor(aBN + .58 * aBM +
			.5 * gi * ab.get(4).width), Math.floor(aBJ + aBC + .4 * aBM)), aBG.imageSmoothingEnabled = !0, aBG.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aBG.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBi(player) {
		aD.i3 && (aBG.fillStyle = bi.aBm[bi.aBn[player]])
	}

	function aBh(aB, aBo) {
		aBG.fillStyle = aBo, aB = aBE - 1 < aB ? aBE - 1 : aB;
		aBo = Math.floor((aB === aBE - 1 ? 2 : 0 === aB ? 1.15 : 1) * aBM), aBo = aB === aBE - 2 ? Math.floor(aBL + 9.15 * aBM) - Math.floor(aBL + 8.15 * aBM) : aBo;
		aBG.fillRect(0, Math.floor(aBL + (aB + (0 === aB ? 0 : .15)) * aBM), aBA, aBo)
	}

	function aBj(wj, a4t, aB) {
		aBG.fillText(aBR[a4t], aBN, Math.floor(aBJ + aBC + (wj + .5) * aBM)), 1 === ag.a4V[aB] && (aBG.font = "italic " + aBD);
		a4t = Math.floor(aBJ + aBC + (wj + .5) * aBM);
		aBG.fillText(ag.za[aB], aBO, a4t), 0 !== ag.a4V[aB] && (aBG.font = aBD), aB < aD.kU && 2 !== ag.a4V[aB] || aBG.fillRect(aBO, a4t + .35 * aBb, aBQ[aB], Math.max(1, .1 * aBb))
	}

	function aBk(wj, aB) {
		aBG.fillText(ag.gx[aB], aBP, Math.floor(aBJ + aBC + (wj + .5) * aBM))
	}
	this.dh = function() {
		var aB;
		for (t.y.tB[0] = 0, aBZ = aBY = aBW = 0, aBa = aBX = !1, aBV = -1, aBE = a0.a1.iI() ? 6 : 10, aBc = (position = 0) === (aBc = bl.eU.data[11].value) ? 10 : 1 === aBc ? 5 : 1, aBU = !1, aBS = new Uint16Array(aBE + 1), aBT = new Uint32Array(
				aBE + 1), aBI = aD.f6, m5 = new Uint16Array(aBI), kF = new Uint16Array(aBI), aB = aBI - 1; 0 <= aB; aB--) m5[aB] = aB, kF[aB] = aB;
		this.resize(!0), aBQ = new Uint16Array(aD.f6);
		var aBe = Math.floor(aBA - aBO - aBN - aBH);
		for (aBR = new Array(aD.f6), aBG.font = aBD, aB = aD.f6 - 1; 0 <= aB; aB--) aBR[aB] = aB + 1 + ".", ag.za[aB] = bC.zG.a4D(ag.a1n[aB], aBD, aBe), aBQ[aB] = Math.floor(aBG.measureText(ag.za[aB]).width);
		aBf()
	}, this.resize = function(dh) {
		if (a95 = a0.a1.iI() ? (aBA = Math.floor(.335 * h.iJ), Math.floor(aBE * aBA / 8)) : (aBA = Math.floor(.27 * h.iJ), Math.floor(aBE * aBA / 10)), aBA = Math.floor(.97 * aBA), (aBF = document.createElement("canvas")).width = aBA, aBF
			.height = a95, aBG = aBF.getContext("2d", {
				alpha: !0
			}), aBJ = .025 * aBA, aBC = .16 * aBA, aBK = 0 * aBA, aBL = Math.floor(.45 * aBJ + aBC), aBM = (a95 - aBC - 2 * aBJ - aBK) / aBE,
			aBF.height = a95 += aBM, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBM * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a95 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aBA,
			aBB = bC.qz.sq(1, Math.floor(.55 * aBC)), aBb = Math.floor((a0.a1.iI() ? .67 : .72) * aBM), aBD = bC.qz.sq(0, aBb), aBG.font = aBD, aBN = Math.floor(.04 * aBA), aBO = Math.floor((a0.a1.iI() ? .195 : .18) * aBA), aBH = Math.floor(aBG
				.measureText("00920600").width), aBG.font = aBB, aBP = aBA - aBN, !dh) {
			aBG.font = aBD;
			for (var aB = aD.f6 - 1; 0 <= aB; aB--) aBQ[aB] = Math.floor(aBG.measureText(ag.za[aB]).width);
			aBf()
		}
		aBd = bC.zG.a4D(L(116), aBB, .96 * aBA)
	}, this.aB2 = function() {
		return aBA
	}, this.mq = function(bw, aBg) {
		(aBg || aBU && (bw || bh.kR() % aBc == 0)) && (aBU = !1, aBf())
	}, this.ec = function() {
		! function() {
			for (var fS = aBI - 1; 0 <= fS; fS--) 0 === ag.n4[m5[fS]] && ! function(fS) {
				var aBw = m5[fS];
				aBI--;
				for (var aB = fS; aB < aBI; aB++) m5[aB] = m5[aB + 1], kF[m5[aB]] = aB;
				m5[aBI] = aBw, kF[m5[aBI]] = aBI
			}(fS)
		}();
		for (var aBu, nn = aBI - 1, fS = 0; fS < nn; fS++) ag.gx[m5[fS]] < ag.gx[m5[fS + 1]] && (aBu = m5[fS], m5[fS] = m5[fS + 1], m5[fS + 1] = aBu, kF[m5[fS]] = fS, kF[m5[fS + 1]] = fS + 1);
		! function() {
			for (var eY = aBU, gi = (aBU = !0, kF[aD.et] >= aBE - 1 ? aBE - 2 : aBE - 1), aB = gi; 0 <= aB; aB--)
				if (aBS[aB] !== m5[aB] || aBT[aB] !== ag.gx[m5[aB]]) return;
			(gi != aBE - 2 || aBS[aBE] === kF[aD.et] && aBT[aBE] === ag.gx[aD.et]) && (aBU = eY)
		}();
		for (var aB = aBE - 1; 0 <= aB; aB--) aBS[aB] = m5[aB], aBT[aB] = ag.gx[m5[aB]];
		aBS[aBE] = kF[aD.et], aBT[aBE] = ag.gx[aD.et];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hM = function(fG, fI) {
		if (a04(fG, fI)) {
			if (__fx.utils.isPointInRectangle(fG, fI, be.gap + 12, be.gap + 12, aBL - 22, aBL - 22)) __fx.playerList.display(ag.a1n);
			else {
				if (fI - be.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fG - be.gap);
				fG = aBy(fI);
				0 <= fG ? (aBW = bh.eX, aBX = !0, aBY = aBZ = fG, bL.a3I() && (fG = a9r(-1, aBZ, aBE), aBV !== (fG = fG === aBE ? -1 : fG)) && (aBV = fG, aBf(), bh.dp = !0)) : (aBa && (aBa = !1, aBf(), bh.dp = !0), t.u(10, 0, new aBz({
					aC0: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBf(), bh.dp = !0
	};

	function aBy(fI) {
		return (fI -= be.gap + aBL) < 0 ? Math.floor(fI / aBM) - 1 : fI < (aBE - 1) * aBM ? Math.floor(fI / aBM) : fI < a95 - aBL ? aBE - 1 : (fI -= a95 - aBL, aBE + Math.floor(fI / aBM))
	}

	function a04(fG, fI) {
		return fG >= be.gap && fG < be.gap + aBA && fI >= be.gap && fI < be.gap + a95
	}
	this.a2f = function(fG, fI) {
		var eY, aBx;
		if (__fx.utils.isPointInRectangle(fG, fI, be.gap + 12, be.gap + 12, aBL - 22, aBL - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fG, fI, be.gap, be.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fG - be.gap)) return aBx = aBy(fI), fG = a04(fG, fI), fI = !(!(aBx < 0 && fG) || bL.a3I()), aBX ? (eY = position, (position = a9r(0, position += aBY - aBx, aD.f6 - aBE)) !== eY ? (aBa = fI,
			aBx = a9r(-1, aBY = aBx, aBE), aBV = aBx = aBx !== aBE && fG ? aBx : -1, aBf(), bh.dp = !0) : aBa !== fI && (aBa = fI, aBf(), bh.dp = !0), !0) : (aBx = (aBx = a9r(-1, aBx, aBE)) === aBE || !fG || bL.a3I() ? -1 : aBx, (aBV !==
			aBx || aBa !== fI) && (aBV = aBx, aBa = fI, aBf(), bh.dp = !0))
	}, this.a34 = function(fG, fI) {
		if (!aBX) return !1;
		aBX = !1;
		var aBx = aBy(fI);
		var isEmptySpace = false;
		return bL.a3I() && -1 !== aBV && (aBV = -1, aBf(), bh.dp = !0), bh.eX - aBW < 350 && aBZ === aBx && -1 !== (aBx = (aBx = a9r(-1, aBx, aBE)) !== aBE && a04(fG, fI) ? aBx : -1) && (fG = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m5[__fx.leaderboardFilter.filteredLeaderboard[aBx + position] ?? (isEmptySpace = true, kF[aD.et])]) : m5[aBx + position]), aBx === aBE - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kF[aD.et]) >=
			position + aBE - 1 && (fG = aD.et), !isEmptySpace && aD.i3 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fG, ag.a1n, aD.ko), 0 !== ag.n4[fG] && !isEmptySpace) && aH.nQ(fG, 800, !1, 0), !0
	}, this.a2i = function(fG, fI, deltaY) {
		var aC3;
		return !(aBX || aD.nY || (aC3 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a04(fG, fI)) || (fG = (fG = a9r(-1, aBy(fI), aBE)) === aBE || bL.a3I() ? -1 : fG, 0 < deltaY ? position < aD.f6 - aBE && (position += Math.min(aD.f6 - aBE -
			position, aC3), aBV = fG, aBf(), bh.dp = !0) : 0 < position && (position -= Math.min(position, aC3), aBV = fG, aBf(), bh.dp = !0), 0))
	}, this.ve = function() {
		vf.drawImage(aBF, be.gap, be.gap)
	}
}

function cP() {
	var canvas, zG, fG, fI, aAm, aC4, gap, aC5, fontSize, aC6, aC7, aC8, aC9, aCA, aCB, aCC, aCD, aCE;

	function aCI() {
		zG.clearRect(0, 0, aW.i, aW.j), zG.fillStyle = bD.o2, zG.fillRect(0, 0, aW.i, aW.j), zG.fillStyle = bD.oP, en = 0 < aCC ? aCC : aC9[4] / 1e4, zG.fillRect(0, aW.j - aAm - 1, Math.floor(en * aW.i), aAm), zG.fillStyle = bD.o5, zG.fillRect(0, 0,
			aW.i, 1), zG.fillRect(0, 0, 1, aW.j), zG.fillRect(aW.i - 1, 0, 1, aW.j), zG.fillRect(0, aW.j - 1, aW.i, 1), zG.fillRect(0, aW.j - aAm - 1, aW.i, 1);
		for (var en, aCK, eY = 0, aB = 0; aB < aC8.length; aB++) aCA[aB] ? (bC.qz.textAlign(zG, 0), aCK = Math.floor((aC4 - aAm + 2 * aC5) * (aB - eY + 1) / (aC8.length + 1) - .7 * aC5), zG.fillText(aC8[aB], gap, aCK), bC.qz.textAlign(zG, 2), 5 ===
			aB && 0 !== ag.n4[aD.et] && ag.hB[aD.et] >= ae.kA(aD.et) ? (zG.fillStyle = bD.p2, zG.fillText(aCG(aB), aW.i - gap, aCK), zG.fillStyle = bD.o5) : zG.fillText(aCG(aB), aW.i - gap, aCK)) : eY++
	}

	function aCG(aB) {
		return aB < 3 ? aC9[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bC.ry.a5D(aC9[aB] / 100, 2) : aB < 7 ? bC.ry.a0O(aC9[aB]) : aB === 7 ? aW.aCL(aC9[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gx, aD.et) : __fx.utils.getDensity(aD.et)
	}

	function aCF() {
		ag.gx[aD.et] !== aC9[6] && (aC9[6] = ag.gx[aD.et], aC6++)
	}
	this.dh = function() {
		aCC = aCD = 0, (aC7 = new Array(8))[0] = L(117), aC7[1] = aD.ko ? L(118) : L(119), aC7[2] = L(120), aC7[3] = L(121), aC7[4] = L(122), aC7[5] = L(123, 0, "Interest"), aC7[6] = L(124), aC7[7] = L(125),
			aC7.push("Max Troops", "Density"), // add aC7
			(aC8 = new Array(aC7.length)).fill(""), (aC9 = new Array(aC7.length))[0] = aD.ko ? 0 : aD.kU, aC9[1] = aD.ko ? al.l0 : aD.kq, aC9[2] = aD.a19, aC9[3] = 0, aC9[4] = bN.fa(1e4 * ag.gx[0], Math.max(aD.kE, 1)), aC9[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bN.fa(700 * aD.data.iIncomeValue, 64) : bN.fa(700 * aD.data.iIncomeData[aD.et], 64), aC9[6] = 0, aCF(), aC9[7] = 0, aCB = aCG(6), (aCA = new Array(aC7.length)).fill(!0), aCE = 0, aCE =
			aD.ko ? (aCA[0] = !1, aCA[2] = !1, aCA[3] = !1, 3) : (aCA[3] = !1, 1), aC6 = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iI() ? .1646 : .126) * 1.25 * h.iJ), this.j = Math.floor(1.18 * this.i), aAm = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aC5 = .04 * this.i, aC4 = this.j, this.j -= Math.floor(aCE * (this.j -
			2 * aAm) / aC7.length), fontSize = Math.floor(.7 * (aC4 - aAm) / aC7.length);
		var a6p = bC.qz.sq(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6p, i) {
				for (var aB = 0; aB < aC8.length; aB++) aC8[aB] = bC.zG.a4D(aC7[aB], a6p, i)
			}((zG = canvas.getContext("2d", {
				alpha: !0
			})).font = a6p, .575 * this.i), bC.qz.textBaseline(zG, 1), zG.lineWidth = 1, this.a5S(), this.a9U(), aU.a9U(), aCI()
	}, this.a9U = function() {
		fG = h.i - this.i - be.gap
	}, this.aCJ = function() {
		fI = be.gap
	}, this.a5S = function() {
		fI = be.gap + (aU.a8q() && 0 !== ag.n4[aD.et] && !aD.hX ? aU.j + be.gap : 0)
	}, this.mq = function(bw) {
		(bw || 100 <= aC6) && (aC6 = 0, aCI())
	}, this.a6B = function() {
		return aC9[7]
	}, this.aCL = function(value) {
		var lP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lP) / 1e3);
		return value < 10 ? lP + ":0" + value : lP + ":" + value
	}, this.ec = function() {
		var aCW, per;
		aCA[0] && aD.a1A - aD.a19 !== aC9[0] && (aC9[0] = aD.a1A - aD.a19, aC6++), al.l0 - aC9[0] !== aC9[1] && (aC9[1] = al.l0 - aC9[0], aC6++), this.mh(), (aCW = ae.aCX(aD.et)) !== aC9[5] && (aC9[5] = aCW, aC6++), aCF(), aC9[7] += bh.aCY, aCW =
			aCG(7), aCB !== aCW && (aCB = aCW, aC6 += 100), aCW = aD.i3 ? bj.l1() : ag.gx[m5[0]], per = bN.fa(1e4 * aCW, Math.max(aD.kE, 1)), aC9[3] = aCW, aC9[4] !== per && (aC6++, aC9[4] = per), 8 === aD.km && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bC.gV.hL(aB)) return bT.a0j.a16(), 1;
				return
			}() || aC9[3] < aD.kE || ! function() {
				for (var aB = al.l0 - 1; 0 <= aB; aB--)
					if (0 < ag.gb[al.l5[aB]].length) return;
				return 1
			}() || bP.lJ.aCV().length || aD.i3 && bj.l1(1) < aD.kE || bT.a0j.a16()
	}, this.mh = function() {
		aCA[2] && aD.a19 !== aC9[2] && (aC9[2] = aD.a19, aC6 += 2 === aD.a17 ? 100 : 1)
	}, this.aCS = function() {
		return aC9[3] === aD.kE
	}, this.aCZ = function(aB) {
		var th, aCa, eY;
		return 2 !== aD.a17 && (aB % 2 == 1 && (aV.mq(1, 1), bh.dp = !0), aB === aD.a5b ? (aCC = 0, aCI(), !1) : (-1 !== aB || 0 !== aCD) && (aCa = aCC, aCC = aD.hI ? aB / aD.a5b : (eY = performance.now(), 0 <= aB && (th = eY - 392 * aB, aCD =
			0 === aB || th < aCD ? th : aCD), 1 < (aCC = (eY - aCD) / (392 * aD.a5b)) ? 1 : aCC), aCI(), aCC !== aCa))
	}, this.ve = function() {
		vf.drawImage(canvas, fG, fI)
	}
}

function cQ() {
	var hv, aCb, i, j, a9a, aCc, aCd, a8r, canvas, nH, aCe;

	function zC() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * be.gap ? h.j - j - 4 * be.gap - aR.j : h.j - j - 2 * be.gap
	}
	this.dh = function() {
		aCe = hv = !1, a9a = .61, aCc = .07, aCd = .09, nH = a8r = j = 0
	}, this.resize = function() {
		var zG, nV, eh, aCj, aCk, a6u;
		hv && (i = aCf(i = a0.a1.iI() ? Math.floor(.69 * h.iJ) : Math.floor(.5 * h.iJ), a7Q(h.i - 2 * be.gap, 10)), i = aCf(i, Math.floor(3.57 * a7Q(h.j - 2 * be.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, zG = canvas.getContext("2d", {
				alpha: !0
			}), nV = Math.floor(1 + j / 40), zG.clearRect(0, 0, i, j), zG.fillStyle = bD.o2, zG.fillRect(nV, nV, i - 2 * nV, j - 2 * nV), zG.lineJoin = "bevel", zG.lineWidth = 2 * nV, zG.strokeStyle = bD.o5, zG.strokeRect(nV, nV, i - 2 * nV,
				j - 2 * nV), zG.imageSmoothingEnabled = !1, eh = ab.get(aCb), aCj = eh.width, a6u = (1 === aCb ? .85 : 21 === aCb ? .666 : .9) * a9a * j / (aCk = eh.height), zG.setTransform(a6u, 0, 0, a6u, Math.floor((i - a6u * aCj) / 2),
				Math.floor((j - a6u * aCk) / 2)), zG.drawImage(eh, 0, 0), zG.setTransform(1, 0, 0, 1, Math.floor(i - aCd * j - aCc * j - nV), Math.floor(nV + aCc * j)),
			function(zG, f9) {
				zG.lineWidth = Math.floor(1 + j / 80), zG.strokeStyle = bD.o5, zG.beginPath(), zG.moveTo(0, 0), zG.lineTo(f9, f9), zG.moveTo(0, f9), zG.lineTo(f9, 0), zG.stroke()
			}(zG, Math.floor(aCd * j)), zG.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fb, aCh, a9M, aCi) {
		hv || aCi && aCe || (aCb = a9M ? 21 : fb ? 1 : 2, hv = aCe = !0, this.resize(), aL.sG(), aR.a9H(), nH = bh.eX, a8r = aCh ? 1 : 0)
	}, this.ec = function() {
		!hv || 1 <= a8r || (a8r = 1 < (a8r += 5e-4 * (bh.eX - nH)) ? 1 : a8r, nH = bh.eX, bh.dp = !0)
	}, this.hM = function(fG, fI) {
		return !(!hv || a8r <= 0 || (fG -= Math.floor((h.i - i) / 2), fI -= zC(), fG < 0) || fI < 0 || i < fG || j < fI || (i - j / 3 < fG && fI < j / 3 && (hv = !1, bh.dp = !0), 0))
	}, this.ve = function() {
		!hv || a8r <= 0 || (vf.globalAlpha = a8r, vf.drawImage(canvas, Math.floor((h.i - i) / 2), zC()), vf.globalAlpha = 1)
	}
}

function dR() {
	var aCm, aCn = new Uint8Array(5),
		aCo = new Uint8Array(5);
	this.aCp = new aCq, this.dh = function() {
		for (var fb = bl.eU.data[119].value, aB = 0; aB < aCn.length; aB++) aCn[aB] = (fb >> 2 * aB) % 4
	}, this.a5n = function() {
		aCm = [L(126), "", L(127, [bZ.aCr[28]]), L(128, [bZ.aCr[26]]), L(129, [bZ.aCr[0]])], this.aCp.dh()
	}, this.ec = function() {
		this.aCp.ec()
	}, this.a6Y = function(id) {
		1 < id && bL.rR() || ! function(eG) {
			if (3 === aCn[eG] || 1 === aCo[eG]) return;
			if (aCo[eG] = 1, !(Math.random() < .6)) {
				aCn[eG]++;
				for (var fb = 0, aB = 0; aB < aCn.length; aB++) fb += aCn[aB] << 2 * aB;
				bl.sR.sS(119, fb)
			}
			return 1
		}(id) || aN.a7V(aCm[id])
	}
}

function aCq() {
	var aCt;
	this.dh = function() {
		aCt = !1
	}, this.ec = function() {
		var gh;
		if (function() {
				if (!aCt) {
					if (bh.kR() % 30 != 9) return;
					if (!bC.gV.m1(90)) return;
					aCt = !0
				}
				return 1
			}() && (! function() {
				var qr = aN.a7r(956);
				if (qr) {
					if (bC.gV.lS(qr.player)) return 1;
					aN.a7q(956, 0)
				}
				return
			}() && (-1 === (gh = (aD.i3 ? function() {
				var id = bj.l3(),
					f9 = al.l0;
				if (bi.kr[id])
					for (var a0v = al.l5, f7 = bi.f7, aB = 0; aB < f9; aB++) {
						var gh = a0v[aB];
						if (f7[gh] !== id) return gh
					} else if (1 < f9) return m5[f9 - 1];
				return -1
			} : function() {
				for (var aD1 = al.l0, lO = al.l5, aD2 = kF, aB = 0; aB < aD1; aB++) {
					var gh = lO[aB];
					if (0 !== aD2[gh]) return gh
				}
				return -1
			})()) ? ! function() {
				var qr = aN.a7r(957);
				if (qr && qr.a7M) {
					if (ac.f0(qr.a7M.ev << 2)) return 1;
					aN.a7q(957, 0)
				}
				return
			}() : (aN.zZ(0, L(130, [ag.za[gh]]), 956, gh, bD.o5, bD.o2, -1, !0), 0)))) {
			var f9 = ao.j8.le;
			if (0 !== f9)
				for (var eU = ao.j8.eU, aB = 0; aB < f9; aB++) {
					var ev = eU[aB];
					if (ac.f0(ev << 2)) return void aN.zZ(0, L(131, [bO.fH(ev), bO.fJ(ev)]), 957, 0, bD.o5, bD.o2, -1, !0, void 0, {
						fS: 1,
						ev: ev
					})
				}
		}
	}
}

function dS() {
	this.aD3 = new aD4, this.dh = function() {
		this.aD3.resize()
	}
}

function aD4() {
	this.resize = function() {
		var aB, aD5 = document.head.querySelector("style#ss");
		if (aD5)
			for (aB = aD5.sheet.cssRules.length - 1; 0 <= aB; aB--) aD5.sheet.deleteRule(0);
		else(aD5 = document.createElement("style")).id = "ss", document.head.appendChild(aD5);
		var a9i = "::-webkit-scrollbar",
			e1 = bC.qz.r8(be.ss),
			i5 = bC.qz.r8(Math.max(bC.qz.sI(.012), 8));
		try {
			aD5.sheet.insertRule(a9i + "{width:" + i5 + ";height:" + i5 + ";}", aD5.sheet.cssRules.length), aD5.sheet.insertRule(a9i + "-thumb{background-color:white;}", aD5.sheet.cssRules.length), aD5.sheet.insertRule(a9i +
				"-track{background:" + bD.o1 + ";}", aD5.sheet.cssRules.length), aD5.sheet.insertRule(a9i + "-track:horizontal{border-top:" + e1 + " solid white;}", aD5.sheet.cssRules.length), aD5.sheet.insertRule(a9i +
				"-track:vertical{border-left:" + e1 + " solid white;}", aD5.sheet.cssRules.length), aD5.sheet.insertRule(a9i + "-button{display:none;}", aD5.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aD5.sheet.cssRules.length - 1; 0 <= aB; aB--) aD5.sheet.deleteRule(0)
		}
	}
}

function dQ() {
	this.aD6 = !1, this.nv = !1, this.a5W = !1, this.aD7 = [0, 0, 0, 0], this.aD8 = function() {
		var nV, nW, ni, nj;
		this.a5W = this.a5W || this.nv, (this.nv || this.aD6 && this.a5W) && (nV = bc.aD9[0], nW = bc.aD9[1], ni = bc.aD9[2], nj = bc.aD9[3], nV = nV < this.aD7[0] ? this.aD7[0] : nV, nW = nW < this.aD7[1] ? this.aD7[1] : nW, ni = ni > this.aD7[
				2] ? this.aD7[2] : ni, nj = nj > this.aD7[3] ? this.aD7[3] : nj, this.nv = !1, this.aD6 = !1, nV === this.aD7[0] && nW === this.aD7[1] && ni === this.aD7[2] && nj === this.aD7[3] ? this.a5X() : nV <= ni && nW <= nj && a5p
			.putImageData(a5q, 0, 0, nV, nW, ni - nV + 1, nj - nW + 1))
	}, this.a5X = function() {
		this.a5W && this.aD7[2] >= this.aD7[0] && this.aD7[3] >= this.aD7[1] && a5p.putImageData(a5q, 0, 0, this.aD7[0], this.aD7[1], this.aD7[2] - this.aD7[0] + 1, this.aD7[3] - this.aD7[1] + 1), this.a5W = !1
	}, this.a1J = function() {
		this.aD7[2] >= this.aD7[0] && this.aD7[3] >= this.aD7[1] && a5p.putImageData(a5q, 0, 0, this.aD7[0], this.aD7[1], this.aD7[2] - this.aD7[0] + 1, this.aD7[3] - this.aD7[1] + 1), this.a5W = !1
	}, this.dh = function() {
		var fG, fI;
		this.aD6 = !1, this.nv = !1, this.a5W = !1, this.aD7[0] = bU.fK, this.aD7[1] = bU.fL, this.aD7[2] = this.aD7[3] = 0;
		loop: for (fG = 1; fG < bU.fK - 1; fG++)
			for (fI = bU.fL - 2; 1 < fI; fI--)
				if (1 === aDA[ac.yj(fG, fI) + 2]) {
					this.aD7[0] = fG;
					break loop
				} loop: for (fI = 1; fI < bU.fL - 1; fI++)
			for (fG = bU.fK - 2; 1 < fG; fG--)
				if (1 === aDA[ac.yj(fG, fI) + 2]) {
					this.aD7[1] = fI;
					break loop
				} loop: for (fG = bU.fK - 2; 0 < fG; fG--)
			for (fI = bU.fL - 2; 1 < fI; fI--)
				if (1 === aDA[ac.yj(fG, fI) + 2]) {
					this.aD7[2] = fG;
					break loop
				} loop: for (fI = bU.fL - 2; 0 < fI; fI--)
			for (fG = bU.fK - 2; 1 < fG; fG--)
				if (1 === aDA[ac.yj(fG, fI) + 2]) {
					this.aD7[3] = fI;
					break loop
				}
	}
}

function L(value, aDB, wD, aDC) {
	var qg = "number" == typeof value ? b9.aDD[value] : value;
	if (wD && b9.aDE() && (qg = wD), !aDB) return aDC ? qg.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qg;
	for (var f9 = aDB.length, aB = 0; aB < f9; aB++)
		for (var fS = 0; fS < 3; fS++) qg = qg.replace("{" + (10 * fS + aB) + "}", aDB[aB]);
	return qg
}

function c4() {
	this.data = new aDF;
	var aDG = (new aDH).L84,
		aDJ = (this.aDD = aDG, !(this.aDI = "en"));
	this.dh = function() {
		var qg, g;
		aDJ = !1, ("en" === (qg = bl.eU.data[12].value).split("-")[0].toLowerCase() ? (b9.aDD = aDG, b9.aDI = qg, 1) : bl.eU.data[12].value === bl.eU.data[145].value && 0 < bl.eU.data[146].value && (qg = bl.eU.data[146].value, (g = bl.rG.wQ(qg, !
			1)).length === qg) && !!bC.r7.a3o(g) && function(g) {
			for (var f9 = g.length, j = 0; j < f9; j++) g[j] = g[j].replace("&#39;", "'");
			var aDP = bl.rG.wQ(f9, !0);
			if (f9 !== aDP.length) return !1;
			if (!bC.r7.a3o(aDP)) return !1;
			for (var lP = aDG.length, aAd = new Array(lP), aDQ = lP === f9, gc = Math.min(f9, lP), aB = 0; aB < lP; aB++)
				if (aAd[aB] = aDG[aB], aB < f9 && aDP[aB] === aAd[aB]) aAd[aB] = g[aB];
				else {
					aDQ = !1;
					for (var fT = 0; fT < gc; fT++)
						if (aDP[fT] === aAd[aB]) {
							aAd[aB] = g[fT];
							break
						}
				} return b9.aDD = aAd, b9.aDI = bl.eU.data[12].value, aDQ
		}(g)) || (aDJ = !0)
	}, this.dj = function() {
		bi.di(), aE.di(), bg.di(), bf.di(), aO.dh(), bq = new e5
	}, this.aDE = function() {
		return this.aDD === aDG || !aDG.length
	}, this.aDR = function() {
		var aDS;
		return !!aDJ && (aDJ = !1, 0 !== aDG.length) && (aDS = bl.eU.data[12].value, b0.ee.aDT(0, aDS.slice(0, 20)), !0)
	}, this.aDU = function(g) {
		g.length !== aDG.length ? 8 === t.tJ && t.a2N().aDV(30, 0, 1) : (this.aDD = g, this.aDI = bl.eU.data[12].value, bl.sR.sS(145, this.aDI), bl.sR.sS(146, g.length), bl.rG.wW(g, !1), bl.rG.wW(aDG, !0), 8 === t.tJ ? t.a2N().aDV(30) : 0 === aa
			.a2J() && 5 === t.tJ && t.y.aDW())
	}, this.aDX = function() {
		var wZ, g = navigator.languages;
		return g && g.length ? (wZ = Math.max(b9.data.aDY(g[0]), 0), 1 === g.length ? [wZ, wZ] : [wZ, Math.max(b9.data.aDY(g[1]), 0)]) : [0, 0]
	}
}

function aDF() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDZ = function() {
		for (var aDa = [], g = this.g, f9 = g.length, aB = 0; aB < f9; aB++) aDa.push(g[aB]);
		var aDb = bl.eU.data[12].wD;
		for (aB = 0; aB < f9; aB++)
			if (aDa[aB] === aDb) {
				aDa.splice(aB, 1), f9--;
				break
			} aDa.sort(), f9++, aDa.unshift(aDb);
		try {
			if ("undefined" == typeof Intl) return aDa;
			for (aB = 0; aB < f9; aB++) {
				var qg = new Intl.DisplayNames([aDa[aB]], {
					type: "language"
				}).of(aDa[aB]);
				qg !== aDa[aB] && (aDa[aB] = aDa[aB] + ": " + qg)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDa
	}, this.aDd = function(aDe) {
		for (var qg = bl.eU.data[12].value, f9 = aDe.length, aB = 0; aB < f9; aB++)
			if (qg === aDe[aB].split(":")[0]) return aB;
		return 0
	}, this.aDY = function(aDf) {
		if (aDf && !(aDf.length < 2)) {
			aDf = aDf.split("-")[0].toLowerCase();
			for (var g = this.g, f9 = g.length, aB = 0; aB < f9; aB++)
				if (aDf === g[aB]) return aB
		}
		return -1
	}
}

function aDH() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}",
		"Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!",
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
		"Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password",
		"Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account",
		"Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader",
		"Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Game", "Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!",
		"If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map",
		"Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment",
		"Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game",
		"☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
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
	var fG, fI, j, uH, aDg, aDh, aDi, aDj, aDk, i, a4R, aDl;
	this.hv = !1, this.dh = function(qg, aDm) {
		if (1 === a0.id && 13 <= a0.e0 && a0.e0 < 18) return aDm ? void(a4R = qg) : a4R !== qg ? void 0 : void a0.wO.saveString(200, qg);
		aDm && (a4R = qg, (aDl = document.createElement("a")).appendChild(document.createTextNode(a4R)), this.hv = !0, aDl.title = a4R, aDl.target = "_blank", aDl.href = a4R, aDl.style.textAlign = "center", aDl.style.color = bD.o5, aDl.style
			.position = "absolute", aDl.style.padding = "0px", aDl.style.margin = "0px", this.resize(), document.body.appendChild(aDl), bh.dp = !0)
	}, this.sG = function() {
		return !(!this.hv || (t.removeChild(document.body, aDl), this.hv = !1))
	}, this.hM = function(iQ, iR) {
		return !!this.hv && ((iQ < fG || iR < fI || fG + i < iQ || fI + j < iR || fG + i - uH < iQ && iR < fI + uH) && (bh.dp = !0, this.hv = !1, t.removeChild(document.body, aDl)), !0)
	}, this.resize = function() {
		var a6p, aDn;
		this.hv && (aDj = Math.floor(.8 * (a0.a1.iI() ? h.i > h.j ? .6 : .55 : .4) * h.iJ), uH = Math.floor(.15 * aDj), aDg = Math.floor(.35 * uH), aDh = Math.floor(.5 * uH), aDi = Math.floor(2.5 * aDh), j = uH + aDg + 3 * aDh, a6p = bC.qz.sq(1,
			aDg / h.k), aDk = Math.floor(h.k * aQ.measureText(a4R, a6p)), aDn = i = (aDj < aDk ? aDk : aDj) + 2 * aDi, i = Math.min(i, h.i - 2 * (a0.a1.iI() ? 2 : 1) * be.gap), a6p = bC.qz.sq(1, i / aDn * aDg / h.k), aDk = Math.floor(h
			.k * aQ.measureText(a4R, a6p)), fG = Math.floor((h.i - i) / 2), fI = Math.floor((h.j - j) / 2), aDl.style.font = a6p, aDl.style.top = Math.floor((fI + 1.4 * aDh + uH) / h.k) + "px", aDl.style.left = Math.floor((fG + (i -
			aDk) / 2) / h.k) + "px")
	}, this.ve = function() {
		this.hv && (vf.fillStyle = bD.o2, vf.fillRect(fG, fI + uH, i, j - uH), vf.fillStyle = bD.pF, vf.fillRect(fG, fI, i, uH), vf.fillStyle = bD.o5, vf.lineWidth = be.a05, vf.strokeStyle = bD.o5, vf.strokeRect(fG, fI, i, j), vf.fillRect(fG,
			fI + uH, i, be.a05), vf.font = bC.qz.sq(1, .48 * uH), bC.qz.textAlign(vf, 1), bC.qz.textBaseline(vf, 1), vf.fillText(L(132), Math.floor(fG + (i - .5 * uH) / 2), Math.floor(fI + .55 * uH)), aM.a71(Math.floor(fG + i - .8 * uH),
			Math.floor(fI + .25 * uH), Math.floor(.5 * uH)), vf.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dl() {
	var gap, aC7, fG = [0, 0, 0, 0, 0],
		fI = [0, 0, 0, 0, 0],
		nh = [1, 1, 1, 1, 1],
		fb = [!0, !0, !0, !1, !1],
		eh = (this.fw = [!0, !0, !0, !1, !1], null);
	this.aDo = function(a3z, aDp) {
		eh = a3z, fb = aDp, aC7 = [bM.aDq, bM.a2C, bM.aDr, bM.aDr, bM.aDs], this.dh()
	}, this.dh = function() {
		if (ab.tl()) {
			var aB, tQ = Math.floor((a0.a1.iI() ? .261 : .195) * h.iJ),
				tR = Math.floor(.9 * tQ),
				a9a = Math.floor(.17 * tR);
			if (gap = a0.a1.iI() ? 2 * be.gap : be.gap, nh[0] = tQ / eh[0].width, nh[1] = tR / eh[1].width, nh[2] = a9a / eh[2].height, nh[3] = a9a / eh[3].height, nh[4] = a9a / eh[4].height, nh[2] *= 1.7, nh[3] *= 1.07, fG[0] = gap, fG[1] = gap,
				fG[2] = gap, fG[3] = gap, fG[4] = Math.floor(2 * gap + nh[3] * eh[3].width), fI[0] = gap, fI[1] = fI[0] + gap + nh[0] * eh[0].height, fI[2] = fI[1] + gap + nh[1] * eh[1].height, fI[3] = fI[2] + gap + nh[2] * eh[2].height, fI[4] =
				fI[3], !fb[0])
				for (aB = 0; aB < 5; aB++) fI[aB] -= nh[0] * eh[0].height + gap;
			if (!fb[1])
				for (aB = 2; aB < 5; aB++) fI[aB] -= nh[1] * eh[1].height + gap
		}
	}, this.hv = function() {
		return !(7 === aa.a2J() && a0.a1.iI())
	}, this.hM = function(iQ, iR) {
		if (eh && this.hv())
			for (var aB = fb.length - 1; 0 <= aB; aB--)
				if (fb[aB] && this.fw[aB] && fG[aB] < iQ && fI[aB] < iR && iQ < fG[aB] + nh[aB] * eh[aB].width && iR < fI[aB] + nh[aB] * eh[aB].height) return t.u(9, t.tJ, new aDt(L(133), bC.qz.a4Q(aC7[aB]))), !0;
		return !1
	}, this.ve = function() {
		if (eh && this.hv()) {
			var aB;
			for (vf.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fb[aB] && this.fw[aB] && (vf.setTransform(nh[aB], 0, 0, nh[aB], fG[aB], fI[aB]), vf.drawImage(eh[aB], 0, 0));
			vf.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function db() {
	this.aDu = 0, this.aDv = null, this.uS = null, this.lJ = null, this.y = null, this.up = null, this.uP = null, this.message = null, this.aDw = null, this.sF = null, this.aDx = null, this.aDy = new aDz, this.a2G = 0, this.aAU = 0, this.dh =
		function() {
			this.aAU = bh.eX, this.aDu = bI.tM.xL(bl.eU.data[105].value, 5), this.uS = new aE0, this.lJ = new aE1, this.y = new aE2, this.up = new aE3, this.uP = new aE4, this.message = new aE5, this.aDw = new aE6, this.sF = new aE7, this.aDx =
				new aE8, this.y.dh(), br.dh(), this.a2G = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uj = function() {
			this.sF && this.sF.uj(), this.aDv = null, this.uS = null, this.lJ = null, this.y = null, this.up = null, this.uP = null, this.message = null, this.aDw = null, this.sF = null, this.aDx = null, this.a2G = 0, br.uj(), a0.a1.setState(0)
		}
}

function aE0() {
	function aEV(g, td, te) {
		var aEW = g[td];
		g[td] = g[te], g[te] = aEW
	}
	this.uT = [
		[],
		[],
		[],
		[]
	], this.uU = [0, 0, 0, 0], this.aE9 = [], this.aEA = function(aEB, tH, username, uZ, a4t, aEC, elo, color, wt, aED) {
		username = this.aEF(tH, username, uZ, a4t, aEC, elo, color, wt, aED);
		this.uT[aEB].push(username), bp.aDu === tH && (bp.aDv = username), bp.aDx.aEG(tH) && (username.ub = 1), bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === aEB && 1 === bp.y.s3[2]
	}, this.aEF = function(tH, username, uZ, a4t, aEC, elo, color, wt, aED) {
		return {
			tH: tH,
			username: username,
			uZ: uZ,
			a4t: a4t,
			aEC: aEC,
			elo: elo,
			color: color,
			wt: wt,
			aED: aED
		}
	}, this.aEI = function(eG, aEB, uZ, a4t, aEC, elo, wt, color) {
		eG = this.uT[aEB][eG];
		eG.uZ = uZ, eG.a4t = a4t, eG.aEC = aEC, eG.elo = elo, eG.wt = wt, eG.color = color, bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === aEB && 1 === bp.y.s3[2]
	}, this.aEJ = function(eG, aEB, aEK) {
		var eG = this.uT[aEB][eG],
			aEL = eG.username,
			aEM = "Redacted " + bH.tM.a0O(eG.tH, 2);
		eG.username = aEK ? "[" + bC.ry.a1q(aEL) + "] " + aEM : aEM, aEL.indexOf("Redacted") < 0 && (eG.aEN = aEL), bp.sF.aEO(eG.tH), bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === aEB && 1 === bp.y.s3[2]
	}, this.aEP = function(eG, aEQ, aER) {
		var player = this.uT[aEQ][eG];
		this.aES(eG, aEQ), this.uT[aER].push(player), bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === aER && 1 === bp.y.s3[2]
	}, this.aES = function(eG, aEQ) {
		var uS = this.uT[aEQ];
		this.aE9.push(uS[eG]), 1e3 < this.aE9.length && this.aE9.shift(), eG >= this.uU[aEQ] ? uS[eG] = uS[uS.length - 1] : (this.uU[aEQ]--, 2 === aEQ ? (uS.splice(this.uU[aEQ] + 1, 0, uS[uS.length - 1]), uS.splice(eG, 1)) : (uS[eG] = uS[this.uU[
			aEQ]], uS[this.uU[aEQ]] = uS[uS.length - 1])), uS.pop(), bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === aEQ && 1 === bp.y.s3[2]
	}, this.aET = function(eG, s2) {
		bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === s2 && 1 === bp.y.s3[2];
		var uS = this.uT[s2],
			qr = uS[eG];
		if (2 === s2)
			if (eG >= this.uU[s2]) {
				bp.aDx.join(qr);
				for (var aEU = this.uU[s2], elo = qr.elo; aEU && elo > uS[aEU - 1].elo;) aEU--;
				uS[eG] = uS[this.uU[s2]], uS.splice(this.uU[s2]++, 1), uS.splice(aEU, 0, qr)
			} else uS.splice(this.uU[s2]--, 0, qr), uS.splice(eG, 1);
		else eG >= this.uU[s2] ? (bp.aDx.join(qr), aEV(uS, this.uU[s2]++, eG)) : aEV(uS, --this.uU[s2], eG)
	}, this.aEX = function(tH) {
		for (var uT = this.uT, f9 = uT.length, aB = 0; aB < f9; aB++)
			for (var uS = uT[aB], lP = uS.length, fS = 0; fS < lP; fS++)
				if (tH === uS[fS].tH) return uS[fS];
		return null
	}
}

function aE8() {
	var aEY = [],
		aEZ = [],
		aEa = 0;

	function aEb(g, a7t, aEf, aEg) {
		var f9 = g.length;
		if (0 === f9) return "";
		var qg = "@" + g[0];
		if (1 === f9) return qg + a7t + aEg;
		for (var aB = 1; aB < f9 - 1; aB++) qg += ", @" + g[aB];
		return qg + " and @" + g[f9 - 1] + aEf + aEg
	}
	this.dh = function() {
		var qg = aEb(aEZ, " is", " are", " in the lobby!");
		qg.length && bp.message.aEc({
			id: 7,
			r: qg
		}), aEY = [], aEZ = [], aEa = 0
	}, this.aEG = function(aEd) {
		return bp.aDu !== aEd && (aEd = bH.tM.a0O(aEd, 5), !!bl.w3.ub(aEd)) && (aEZ.push(aEd), !0)
	}, this.join = function(player) {
		bp.aDu !== player.tH && (player = bH.tM.a0O(player.tH, 5), bl.w3.ub(player)) && aEY.push(player)
	}, this.aEe = function() {
		var a7t, aEf;
		++aEa < 3 || (aEa = 0, a7t = aEb(aEZ, "", "", " entered the lobby!"), (a7t = (aEf = aEb(aEY, "", "", " joined a game!")).length ? a7t.length ? a7t + " " + aEf : aEf : a7t).length && bp.message.aEc({
			id: 7,
			r: a7t
		}), aEY = [], aEZ = [])
	}
}

function aDz() {
	this.dq = function(eG) {
		if ((uU = bp.uS.uU[eG]) < 2) return !1;
		var s4 = bp.y.s5[eG],
			aEh = 9 === s4.aEi ? 333 : 512,
			uU = Math.min(uU, aEh);
		8 === s4.aEi && (uU -= uU % 2);
		aEh = bp.uS.uT[eG].splice(0, uU), bp.uS.uU[eG] -= uU, uU = function(aEj) {
			if (bp.aDv)
				for (var f9 = aEj.length, tH = bp.aDv.tH, aB = 0; aB < f9; aB++)
					if (aEj[aB].tH === tH) return aB;
			return -1
		}(aEh);
		return -1 === uU ? (bp.uS.aE9 = bp.uS.aE9.concat(aEh), 1e3 < bp.uS.aE9.length && bp.uS.aE9.splice(0, bp.uS.aE9.length - 1e3), bp.y.aEH += 29 === t.tJ && bp.y.s3[0] === eG && 1 === bp.y.s3[2], !1) : (8 === s4.aEi && (s4.aEm = (s4.aEm + (
			uU >> 1)) % 1024, eG = uU - uU % 2, uU %= 2, aEh = aEh.slice(eG, 2 + eG)), ax.dh(s4, aEh, uU), !0)
	}, this.aEn = function(s4, aEj, aEk) {
		var fC = aD.data = new a5c,
			aEr = (fC.spawningSeed = s4.spawningSeed, s4.aEi < 7 ? (fC.gameMode = 1, fC.numberTeams = s4.aEi + 2) : 9 === s4.aEi ? (fC.gameMode = fC.isZombieMode = 1, fC.numberTeams = 2) : (fC.gameMode = 0, fC.battleRoyaleMode = 7 === s4.aEi ?
				0 : 10 === s4.aEi ? 1 : 2), fC.selectedPlayer = aEk, fC.isContest = s4.aEo, fC.mapType = bU.aEp(s4.ep) ? 0 : 1, bU.aEq(fC, s4.ep), fC.mapSeed = s4.mapSeed, fC.humanCount = aEj.length);
		fC.selectableSpawn = 1 === fC.gameMode || aEr < 100, fC.colorsData = new Uint32Array(aEr), fC.playerNamesData = new Array(aEr), fC.a60 = new Uint32Array(aEr);
		for (var aB = 0; aB < aEr; aB++) fC.colorsData[aB] = aEj[aB].color, fC.playerNamesData[aB] = aEj[aB].username, fC.a60[aB] = aEj[aB].tH;
		if (2 === fC.battleRoyaleMode)
			for (fC.elo = new Uint16Array(aEr), aB = 0; aB < aEr; aB++) fC.elo[aB] = aEj[aB].elo;
		aa.setState(8), bU.a7(s4.ep, fC.mapSeed), aD.a5h(), aD.a5f = 2
	}
}

function aE1() {
	var e6 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEs = [bD.oJ, bD.oJ, bD.oK, bD.oo, bD.op, bD.oa, bD.ou, bD.oK, bD.pH, bD.p5, bD.pE],
		aEt = [
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
			[1.4, 1.2]
		],
		aEu = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aF8(s6, tH, aFA) {
		for (var fT = s6.length - 1; 0 <= fT; fT--) {
			var qr = s6[fT];
			0 === qr.id && qr.tH === tH && (qr.r = "[Redacted Message]", aFA) && (qr.aFB = 1)
		}
	}
	this.sB = function(aEv) {
		var aEw, a1r;
		return aEv.id < 5 && (aEw = "@" + bH.tM.a0O(aEv.tH, 5)), 0 === aEv.id ? aEw + ": " + aEv.r : 1 === aEv.id ? (a1r = "@" + bH.tM.a0O(aEv.target, 5), 0 === aEv.aEx ? 32768 <= aEv.value ? aEw + " voted with " + (aEv.value - 32768 + 1) +
				" gold against " + a1r + " to weaken the latter's admin position. 📉" : aEw + " voted with " + (aEv.value + 1) + " gold for " + a1r + " to strengthen the latter's admin position. 💪" : 1 === aEv.aEx ? aEw + " sent " + Math.floor(
					aEv.value / 100) + " 🧈 gold to " + a1r + "." : aEw + " voted with " + (aEv.value / 10).toFixed(1) + " points for " + a1r + " to acknowledge the latter as clan leader. ✅") : 2 === aEv.id ? 0 === aEv.aEx ? aEw +
			" was 🔇 muted for 1 Hour." : 1 === aEv.aEx ? "The username of " + aEw + " was ✂️ redacted. Duration: 1 Day" : aEw + " 👢 was kicked." : 3 === aEv.id ? aEw + bq.eJ(aEv.aEx, bq.eC[aEv.aEx][aEv.value]) + "@" + bH.tM.a0O(aEv.target, 5) +
			bq.eL(aEv.aEx, bq.eC[aEv.aEx][aEv.value]) : 4 === aEv.id ? aEw + bq.eJ(5, bq.eC[5][aEv.aEx]) + "@" + bH.tM.a0O(aEv.target, 5) + bq.eL(5, bq.eC[5][aEv.aEx]) : 5 === aEv.id ? aEu[aEv.aEx] : 6 === aEv.id ? "You are about to mention " +
			aEv.value + " player" + (1 === aEv.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEv.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEv.id ? aEv.r : void 0
	}, this.sA = function(aEv, aEy) {
		return {
			aEv: aEv,
			r: aEy,
			aEz: 0,
			fontSize: 1,
			sE: 0,
			aF0: aEv.id ? bD.on : bD.o5
		}
	}, this.uX = function(player, s2) {
		return (2 === s2 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uY = function(uZ) {
		return aEs[uZ]
	}, this.aF1 = function(uZ, a4t) {
		return uZ < 3 || 7 === uZ ? aEt[uZ][0] : 4 === uZ ? aEt[uZ][a4t < 1 ? 0 : a4t < 10 ? 1 : 2] : aEt[uZ][a4t < 10 ? 0 : 1]
	}, this.aF2 = function(a4t) {
		return 0 === a4t
	}, this.aEX = function(s2, tH) {
		for (var uT = bp.uS.uT, uS = uT[s2], f9 = uS.length, aB = 0; aB < f9; aB++)
			if (tH === uS[aB].tH) return uS[aB];
		for (var fT = 0; fT < uT.length; fT++)
			if (s2 !== fT)
				for (f9 = (uS = uT[fT]).length, aB = 0; aB < f9; aB++)
					if (tH === uS[aB].tH) return uS[aB];
		return null
	}, this.ua = function(qr) {
		return !!bp.aDv && qr.tH === bp.aDv.tH
	}, this.aF3 = function(uS, aF4, aF5) {
		var a1o = [];
		loop: for (var aB = aF4; aB < aF5; aB++) {
			var a1p = bC.ry.a1q(uS[aB].username);
			if (a1p) {
				for (var fT = a1o.length - 1; 0 <= fT; fT--)
					if (a1p === a1o[fT].name) {
						a1o[fT].gc++;
						continue loop
					} a1o.push({
					name: a1p,
					gc: 1
				})
			}
		}
		if (a1o.sort(function(fS, fT) {
				return fT.gc - fS.gc
			}), 0 === a1o.length) return "";
		for (var qg = a1o[0].name + ": " + a1o[0].gc, aB = 1; aB < a1o.length; aB++) qg += "   " + a1o[aB].name + ": " + a1o[aB].gc;
		return qg
	}, this.aF6 = function(uZ, a4t, aEC) {
		return 0 === e6[uZ].length ? "Rank: " + (a4t + 1) : e6[uZ] + " Rank: " + (a4t + 1) + (3 !== uZ && aEC < 100 ? "   " + e6[3] + " Rank: " + (aEC + 1) : "")
	}, this.aF7 = function(tH) {
		for (var s5 = bp.y.s5, aB = 0; aB < s5.length; aB++) aF8(s5[aB].s6, tH);
		aF8(bp.message.aF9(), tH, 1), bp.sF.aF7(tH)
	}
}

function aE4() {
	var si = 0,
		aFC = 0,
		aFD = 0,
		aFE = null,
		aFF = null;

	function aFI(qr, aFJ, aFK) {
		var qg = qr.username;
		return (qg += "   " + bp.lJ.aF6(qr.uZ, qr.a4t, qr.aEC)) + function(qr) {
			qr = qr.wt;
			if (qr < 1e3) return "   Gold: " + qr;
			if ((qr %= 1024) < 1e3) return "   Gold: " + qr + "k";
			return "   Gold: " + (qr - 999) + "M"
		}(qr) + ("   IP: " + bH.tM.a0O(qr.aED, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFK ? aFC : aFH(qr, aFJ)])
	}

	function aFH(qr, aFJ) {
		return aFC = aFJ || bp.uS.aEX(qr.tH) ? 1 : 0
	}
	this.uQ = 0, this.aFG = function() {
		!si || aFC === aFH(aFF) && aFD === aFF.wt || (aFD = aFF.wt, aFE.show(-1, -1, aFI(aFF, 0, 1), 1, 1, aFF.color))
	}, this.uc = function(e, qr, aFJ) {
		var a9h = e.getBoundingClientRect();
		this.show(a9h.left, a9h.top, qr, 0, aFJ), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bp.uP && bp.uP.sG(1)
		}), this.uQ = aFJ
	}, this.show = function(fG, fI, qr, sm, aFJ) {
		aFE = aFE || new sf, aFD = (aFF = qr).wt, aFE.show(fG, fI, aFI(qr, aFJ), sm, 0, aFF.color), si = 1
	}, this.sG = function(st) {
		this.uQ = 0, aFE && aFE.sG(st) && (si = 0, aFF = null)
	}
}

function aE2() {
	function aFP() {
		bp.y.aEH && 1 === bp.y.s3[2] && t.a6C(29).aFS(), bp.y.aEH = 0, t.a6C(29).aFT(), t.a6C(29).aFU(), bp.uP.aFG()
	}
	this.s5 = new Array(4), this.s3 = [0, 0, 1, 0], this.aEH = 0, this.aFM = [0, 0], this.dh = function() {
		for (var aB = 0; aB < this.s5.length; aB++) this.s5[aB] = new aFN;
		this.s3[0] = bl.eU.data[158].value
	}, this.aFO = function() {
		aFP(), bp.aDx.dh()
	}, this.aEe = function() {
		bp.aDx.aEe();
		for (var aB = 0; aB < bp.y.s5.length; aB++) {
			var s4 = bp.y.s5[aB];
			0 === s4.uB ? s4.aFV = 0 : (s4.aFW = Math.max(s4.aFW - s4.aFV % 2, 0), s4.aFV++)
		}
		aFP()
	}, this.aFX = function(s2) {
		this.s3[0] !== s2 || this.s3[2] || t.a6C(29).aFY()
	}
}

function aE6() {
	var aFZ = 0,
		aFa = "",
		aFb = 0,
		aFc = 0,
		aFd = 0;

	function aFf(aEy) {
		b0.aFq.aFr(3, aEy)
	}

	function aFo(gc) {
		aFZ = 1, bp.message.aEc({
			id: 6,
			value: gc
		})
	}

	function aFi(r) {
		var aFu = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFu)
	}
	this.a1B = function(r) {
		var aFe, g, aFk;
		if (aFZ) return aFZ = 0, "yes" === (aFe = r.toLowerCase()) || "y" === aFe ? void aFf(aFa) : void bp.message.aEc({
			id: 5,
			aEx: 7
		});
		!(r.indexOf("@") < 0) && (aFe = aFi(r)) ? (aFa = r, g = function(aFh) {
			for (var f9 = aFh.length, aFs = [0, 0, 0, 0], aB = 0; aB < f9; aB++)
				for (var i = aFh[aB], fS = 0; fS < 4; fS++) i === "@room" + (fS + 1) && (aFs[fS] = 1);
			if ((aFc = bC.r7.a3d(aFs)) % 4 == 0) return bC.r7.a3v(bp.uS.uT);
			for (fS = 0; fS < 4; fS++) aFs[fS] = aFs[fS] ? bp.uS.uT[fS] : [];
			return bC.r7.a3v(aFs)
		}(aFe), function(aFh, aFk, r) {
			if (!aFb) return;
			for (var f9 = aFk.length, aB = 0; aB < f9; aB++) 2 === aFk[aB].id && (r = r.replace(aFh[aFk[aB].eG], "@" + aFk[aB].fb));
			return aFZ = 1, aFf((aFa = r).slice(0, 126) + "|"), 1
		}(aFe, aFk = function(aFh) {
			for (var aFk = [], f9 = (aFd = aFb = 0, aFh.length), aB = 0; aB < f9; aB++) {
				var i = aFh[aB],
					lP = i.length;
				bC.ry.startsWith(i, "@[") ? lP <= 9 && bC.ry.a4T(i, "]") && aFk.push({
					id: 0,
					fb: i.substring(2, lP - 1).toUpperCase()
				}) : 6 === lP ? bC.ry.startsWith(i, "@room") || (aFd++, aFk.push({
					id: 1,
					fb: bI.tM.xL(i.substring(1), 5)
				})) : 1 < lP && lP < 5 && 0 <= (lP = b9.data.aDY(i.substring(1))) && (aFk.push({
					id: 2,
					fb: lP,
					eG: aB
				}), aFb = 1)
			}
			return aFk
		}(aFe), r) || (0 === aFk.length ? aFc || function(aFh) {
			for (var f9 = aFh.length, aB = 0; aB < f9; aB++) {
				var i = aFh[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFe) ? aFo(g.length) : aFf(r) : aFe.length === aFd ? aFf(r) : (function(g, aFk) {
			var lP = aFk.length;
			if (0 === lP) return;
			var f9 = g.length;
			loop: for (var aB = f9 - 1; 0 <= aB; aB--) {
				for (var fS = 0; fS < lP; fS++)
					if (0 === aFk[fS].id) {
						if (aFk[fS].fb === bC.ry.a1q(g[aB].username)) continue loop
					} else if (1 === aFk[fS].id && aFk[fS].fb === g[aB].tH) continue loop;
				g[aB] = g[--f9], g.pop()
			}
		}(g, aFk), aFo(g.length)))) : aFf(r)
	}, this.aFv = function(r) {
		var aFh = aFi(r);
		if (aFh)
			for (var a5 = new RegExp("^[0-9]+$"), f9 = aFh.length, aB = 0; aB < f9; aB++) {
				var i = aFh[aB].substring(1),
					lP = i.length;
				1 <= lP && lP <= 3 && a5.test(i) && (lP = parseInt(i, 10), !isNaN(lP)) && 0 <= lP && lP < b9.data.g.length && (r = r.replace("@" + i, "@" + b9.data.g[lP]))
			}
		return r
	}
}

function aE5() {
	var aFw, aFx = [],
		aFy = -1,
		aFz = 0,
		aG0 = 0;

	function aG5() {
		aFz = bh.eX, (3 === this.ug ? aG4 : (aFy = (aFx.length + aFy + 2 * this.ug - 1) % aFx.length, aG3))()
	}

	function aG3() {
		0 !== aFx.length && (aG0 = 0, aFw && aFw.uj(), (aFw = new ud(aG5)).sS(aFy, aFx.length), aFw.show(aFx[aFy]), bp.message.resize())
	}

	function aG4() {
		aG0 = 1, aFw && aFw.uj(), (aFw = new uk(aG3)).sS(aFx.length), aFw.show(), bp.message.resize()
	}
	this.aEc = function(aEv) {
		var qr;
		2 === aEv.id && 3 === aEv.aEx ? bp.lJ.aF7(aEv.tH) : (qr = bp.lJ.sA(aEv, bp.lJ.sB(aEv)), (5 !== aEv.id && 6 !== aEv.id || (t.a6C(29).aG1().sD(qr), 5 === aEv.id)) && (qr = bh.eX < aFz + 2e4, aFy !== aFx.length - 1 && qr || (aFy = aFx
			.length), aFx.push(aEv), bl.eU.data[14].value || 7 === aEv.id || br.play(), aFw) && (aG0 && (bl.eU.data[13].value || qr) ? aFw.sS(aFx.length) : aG3()))
	}, this.show = function() {
		aG4()
	}, this.sG = function() {
		aFy = aFx.length - 1, aFw && aFw.uj(), aFw = null
	}, this.resize = function() {
		aFw && aFw.resize()
	}, this.aF9 = function() {
		return aFx
	}
}

function aE3() {
	var aG6 = null,
		aG7 = null,
		aG8 = 0,
		aG9 = 0,
		aGA = null;

	function aGC() {
		0 !== aG7.uZ && (bp.up.sG(), t.u(8, 29, new tK(25, {
			tL: 0,
			tH: bH.tM.a0O(aG7.tH, 5),
			tI: 0
		}, 29)))
	}

	function aGE() {
		return !bp.aDv || bp.lJ.ua(aG7) ? 1 : 0
	}

	function aGD() {
		var fG = aG6.fG,
			fI = aG6.fI,
			aGN = (bp.up.sG(), aGE());
		aG6 = new ul([new w(bq.eC[5][0], function() {
			aGH(5, 0)
		}, aGN), new w(bq.eC[5][1], function() {
			aGH(5, 1)
		}, aGN), new w(bq.eC[5][2], function() {
			aGH(5, 2)
		}, aGN), new w(bq.eC[5][3], function() {
			aGH(5, 3)
		}, aGN)]), aGG(fG, fI), aG9 = aG8 = 2
	}

	function aGF() {
		29 === t.tJ && t.a2N().aDw(bH.tM.a0O(aG7.tH, 5))
	}

	function aGH(id, value) {
		5 === id && b0.aGO.aGP({
			tL: 3,
			tH: bH.tM.a0O(aG7.tH, 5),
			value: value
		})
	}

	function aGG(fG, fI, ur) {
		aG6.show(fG, fI, ur), bp.uP.show(aG6.fG, aG6.fI, aG7, 1)
	}
	this.aGB = function(e, qr) {
		aG8 = 1, aG7 = qr, aG6 = new ul([new w(L(134), aGC, 0 === qr.uZ ? 1 : 0), new w(L(135), aGD, aGE()), new w(L(136), aGF, 0)]), aGG((aGA = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aGA.clientY, 1)
	}, this.a3D = function(code) {
		if (29 !== t.tJ) return !1;
		if (!aG7) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sG();
			else if (bC.ry.startsWith(code, "Numpad") || bC.ry.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aG8) this.aGB(aGA, aG7);
				else {
					if (!aG6) return !1;
					1 === aG8 ? code <= 1 ? aGC() : 2 === code ? aGD() : (aGF(), this.sG()) : (aGH(aG9, bN.iH(code - 1, 0, bq.eC[aG9].length - 1)), this.sG())
				}
		}
		return !0
	}, this.sG = function() {
		aG8 = 0, aG6 && aG6.sG(), aG6 = null, bp.uP.sG()
	}
}

function aFN() {
	this.uB = 0, this.ep = 0, this.mapSeed = 0, this.aEi = 0, this.aGS = 0, this.aGT = 0, this.aGU = 0, this.aEo = 0, this.aFW = 0, this.spawningSeed = 0, this.a2R = 0, this.aEm = 0, this.s6 = [], this.s7 = 1048575, this.aFV = 0, this.aGV = [{
		ep: 0,
		mapSeed: 0,
		aEi: 0,
		eX: 100,
		aEo: 0
	}, {
		ep: 1,
		mapSeed: 0,
		aEi: 1,
		eX: 200,
		aEo: 0
	}, {
		ep: 2,
		mapSeed: 0,
		aEi: 2,
		eX: 300,
		aEo: 0
	}, {
		ep: 3,
		mapSeed: 0,
		aEi: 3,
		eX: 400,
		aEo: 0
	}, {
		ep: 0,
		mapSeed: 0,
		aEi: 9,
		eX: 500,
		aEo: 0
	}, {
		ep: 1,
		mapSeed: 0,
		aEi: 10,
		eX: 600,
		aEo: 0
	}, {
		ep: 2,
		mapSeed: 0,
		aEi: 8,
		eX: 700,
		aEo: 0
	}, {
		ep: 3,
		mapSeed: 0,
		aEi: 3,
		eX: 800,
		aEo: 0
	}]
}

function aE7() {
	var aGW = [],
		tW = [],
		aGX = [];

	function aGZ(qr) {
		for (var r = qr.r, aGY = [];;) {
			var eh = function aGb(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qg = r.substring(position + 1, position + 6);
				if (5 !== qg.length) return aGb(r, position + 1);
				if (bC.ry.startsWith(qg, "room")) return aGb(r, position + 1);
				var aGi = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGi.test(qg)) return aGb(r, position + 1);
				aGi = r.substring(position + 6, position + 7);
				if (1 !== aGi.length) return position;
				qg = new RegExp("^[ :!.]+$");
				if (!qg.test(aGi)) return aGb(r, position + 1);
				return position
			}(r, 0);
			if (-1 === eh) {
				aGY.push(aGc(r, qr));
				break
			}
			0 === eh ? aGY.push(aGd(r.substring(1, 6), qr, eh)) : (aGY.push(aGc(r.substring(0, eh), qr)), aGY.push(aGd(r.substring(eh + 1, eh + 6), qr, eh))), r = r.substring(eh + 6)
		}
		return aGY
	}

	function aGd(qg, qr, eh) {
		var aEE = function(qg) {
				var tH = bI.tM.xL(qg, 5),
					aEE = bp.uS.aEX(tH);
				if (aEE) {
					for (aGW.push(aEE); 75 < aGW.length;) aGW.shift();
					return aEE
				}
				for (var aE9 = bp.uS.aE9, aB = aE9.length - 1; 0 <= aB; aB--)
					if (aEE = aE9[aB], tH === aEE.tH) return aGW.push(aEE), aEE;
				for (aB = aGW.length - 1; 0 <= aB; aB--)
					if (aEE = aGW[aB], tH === aEE.tH) return aGW.push(aEE), aEE;
				return bp.uS.aEF(tH, qg, 1, 999999, 999999, 0, 0, 0, 0)
			}(qg),
			qg = (0 === eh && 0 === qr.aEv.id && qr.sE && (qr.fontSize = bp.lJ.aF1(aEE.uZ, aEE.a4t), qr.aEz = bp.lJ.aF2(aEE.a4t)), document.createElement("span"));
		return qg.textContent = function(aEE, qr, eh) {
			if (aEE.aGg) return aEE.aGg--, eh = 2 === qr.aEv.id || (3 === qr.aEv.id || 4 === qr.aEv.id) && 0 !== eh, aEE.username + (eh ? " (" + aEE.aEN + ")" : "");
			if (qr.aEv.aFB) return "Redacted " + bH.tM.a0O(aEE.tH, 2);
			return aEE.username
		}(aEE, qr, eh), qg.style.display = "inline-block", qg.style.color = bp.lJ.uY(aEE.uZ), qg.style.cursor = "pointer", qg.style.margin = "0", qg.style.font = "inherit", qg.style.minWidth = qg.style.minHeight = "1em", bp.lJ.ua(aEE) && (qg
			.style.textDecoration = "underline"), aEE.ub && (qg.style.textDecorationLine = "underline", qg.style.textDecorationStyle = "dotted"), bp.lJ.aF2(aEE.a4t) && (qg.style.fontWeight = "bold"), qg.onclick = function(e) {
			bp.up.aGB(e, aEE)
		}, bL.rR() || (qg.onmouseover = function(e) {
			bp.uP.uc(e.target, aEE)
		}), tW.push(qg), qg
	}

	function aGc(r, qr) {
		var rx = document.createElement("span");
		return rx.textContent = r, rx.style.color = qr.aF0, rx.style.margin = "0", rx.style.font = "inherit", rx
	}

	function aGn(aEE, aEM, tH) {
		tH !== aEE.tH || aEE.aEN || (aEE.aEN = aEE.username, aEE.username = aEM)
	}
	this.uj = function() {
		for (var aB = 0; aB < tW.length; aB++) tW[aB].onclick = tW[aB].onmouseover = null;
		aGX = tW = null
	}, this.transform = function(qr) {
		for (var qe = document.createElement("div"), aGY = aGZ(qr), aB = 0; aB < aGY.length; aB++) qe.appendChild(aGY[aB]);
		0 === qr.aEv.id && (qe.vx143 = qr.aEv, aGX.push(qe)), qe.style.margin = "0.6em 0.6em", qr.sE && (qe.style.marginLeft = qe.style.marginRight = "inherit"), qe.style.font = "inherit";
		var aGa = 0 < qr.aEv.id;
		return qr.aEz && (qe.style.fontWeight = "bold"), aGa && (qe.style.paddingLeft = "0.7em"), aGa && (qe.style.fontStyle = "italic"), qe.style.fontSize = qr.fontSize.toFixed(2) + "em", qe
	}, this.aGl = function(aGm) {
		if (aGm && (2 === aGm.id && 1 === aGm.aEx || 3 === aGm.id && 2 === aGm.aEx)) {
			var tH = 3 === aGm.id ? aGm.target : aGm.tH;
			if (!bp.uS.aEX(tH)) {
				for (var aEM = "Redacted " + bH.tM.a0O(tH, 2), aE9 = bp.uS.aE9, aB = aE9.length - 1; 0 <= aB; aB--) aGn(aE9[aB], aEM, tH);
				for (aB = aGW.length - 1; 0 <= aB; aB--) aGn(aGW[aB], aEM, tH)
			}
		}
	}, this.aEO = function(tH) {
		for (var aGo = aGX, aB = aGo.length - 1; 0 <= aB; aB--) {
			var fC = aGo[aB];
			if (fC.vx143.tH === tH) {
				for (; fC.firstChild;) t.removeChild(fC, fC.firstChild);
				for (var aGY = aGZ(bp.lJ.sA(fC.vx143, bp.lJ.sB(fC.vx143))), fS = 0; fS < aGY.length; fS++) fC.appendChild(aGY[fS]);
				aGo.splice(aB, 1)
			}
		}
	}, this.aF7 = function(tH) {
		for (var aGo = aGX, aB = aGo.length - 1; 0 <= aB; aB--) {
			var fC = aGo[aB];
			if (fC.vx143.tH === tH) {
				for (; fC.firstChild;) t.removeChild(fC, fC.firstChild);
				fC.vx143.r = "[Redacted Message]";
				for (var aGY = aGZ(bp.lJ.sA(fC.vx143, bp.lJ.sB(fC.vx143))), fS = 0; fS < aGY.length; fS++) fC.appendChild(aGY[fS]);
				aGo.splice(aB, 1)
			}
		}
	}
}

function cR() {
	var aGp, aGq, aGr;

	function aGw(aB) {
		var button = aY.rY[aB],
			fG = button.fG,
			fI = button.fI,
			i = button.i,
			j = button.j;
		vf.fillStyle = button.aGu, vf.fillRect(fG, fI, i, j), aB === aGp && (vf.fillStyle = aGr, vf.fillRect(fG, fI, i, j)), vf.lineWidth = be.a05, vf.strokeStyle = aGq, vf.strokeRect(fG, fI, i, j),
			function(button) {
				var fG = button.fG,
					fI = button.fI,
					i = button.i,
					j = button.j;
				bC.qz.textAlign(vf, 1), bC.qz.textBaseline(vf, 1), vf.font = button.font, vf.fillStyle = aGq, vf.fillText(button.aEy, Math.floor(fG + i / 2), Math.floor(fI + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fI = 0, this.gap = 0, this.dh = function() {
		aGp = -1, aGq = bD.o5, aGr = "rgba(255,255,255,0.16)", this.rY = new Array(7), this.j = Math.floor((a0.a1.iI() ? .123 : .093) * h.iJ), this.i = Math.floor((a0.a1.iI() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGs = Math.floor(.26 * this.j),
			aGt = bC.qz.sq(1, aGs);
		this.rY[0] = {
			fG: 0,
			fI: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEy: "Multiplayer",
			font: aGt,
			aGu: "rgba(22,88,22,0.8)",
			fontSize: aGs
		}, aGs = Math.floor(.18 * this.j), aGt = bC.qz.sq(1, aGs), this.rY[1] = {
			fG: 0,
			fI: 0,
			i: this.i - this.rY[0].i - this.gap,
			j: this.j,
			aEy: "Single Player",
			font: aGt,
			aGu: "rgba(22,88,88,0.8)",
			fontSize: aGs
		}, this.rY[2] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEy: "",
			font: this.rY[1].font,
			aGu: "rgba(100,0,0,0.8)",
			fontSize: this.rY[1].fontSize
		}, this.rY[3] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: this.j,
			aEy: "Back",
			font: this.rY[0].font,
			aGu: "rgba(0,0,0,0.8)",
			fontSize: this.rY[0].fontSize
		}, this.rY[4] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEy: "The game was updated!",
			font: this.rY[1].font,
			aGu: "rgba(100,0,0,0.8)",
			fontSize: this.rY[1].fontSize
		}, this.rY[5] = {
			fG: 0,
			fI: 0,
			i: this.rY[0].i,
			j: Math.floor(.8 * this.j),
			aEy: "Reload",
			font: this.rY[0].font,
			aGu: "rgba(0,100,0,0.8)",
			fontSize: this.rY[0].fontSize
		}, this.rY[6] = {
			fG: 0,
			fI: 0,
			i: this.rY[1].i,
			j: this.rY[5].j,
			aEy: "Back",
			font: this.rY[0].font,
			aGu: "rgba(0,0,0,0.8)",
			fontSize: this.rY[0].fontSize
		}, this.aAg()
	}, this.aAg = function() {
		this.fI = Math.floor(.54 * h.j), this.rY[0].fG = Math.floor(.5 * h.i - .5 * this.i), this.rY[1].fG = this.rY[0].fG + this.rY[0].i + this.gap, this.rY[2].fG = this.rY[3].fG = this.rY[0].fG, this.rY[4].fG = this.rY[5].fG = this.rY[0].fG,
			this.rY[6].fG = this.rY[1].fG, this.rY[0].fI = Math.floor(.54 * h.j), this.rY[1].fI = this.rY[0].fI, this.rY[2].fI = Math.floor((h.j - this.rY[2].j - this.rY[3].j - this.gap) / 2), this.rY[3].fI = this.rY[2].fI + this.rY[2].j + this
			.gap, this.rY[4].fI = Math.floor((h.j - this.rY[4].j - this.rY[5].j - this.gap) / 2), this.rY[5].fI = this.rY[6].fI = this.rY[4].fI + this.rY[4].j + this.gap
	}, this.aGv = function() {
		aGw(0), aGw(1)
	}, this.aGx = function() {
		aGw(2), aGw(3)
	}, this.aGy = function() {
		aGw(4), aGw(5), aGw(6)
	}, this.a2f = function(fG, fI, mq) {
		var aB = -1;
		return 0 === aa.a2J() ? aB = this.a39(fG, fI, 0, 2) : 3 === aa.a2J() ? aB = this.a39(fG, fI, 3, 1) : 5 === aa.a2J() && (aB = this.a39(fG, fI, 5, 2)), aGp !== aB && (aGp = aB, mq) && (bh.dp = !0), -1 !== aB && (aT.s0(), !0)
	}, this.a39 = function(fG, fI, aGz, size) {
		for (var aB = aGz; aB < aGz + size; aB++)
			if (fG >= this.rY[aB].fG && fI >= this.rY[aB].fI && fG <= this.rY[aB].fG + this.rY[aB].i && fI <= this.rY[aB].fI + this.rY[aB].j) return aB;
		return -1
	}
}

function cS() {
	var aH1, aH2, a8I, aH3, aH4, aH5, aH6, aH7, aH8, a8H, aH9, aHA, aHB, aHC = 1,
		aHD = 0,
		aHE = 0;

	function aHI(aHJ) {
		aHJ ? aHB = (aHB + 1) % b0.y.aHK : (b0.y.close(aHB, 3280), aHC ? aHC = 0 : (aHE = 1 - aHE, 0 === (aHD = (aHD + 1) % 2) && (aHB = (aHB + 1) % b0.y.aHK, b0.y.close(aHB, 3280)))), aHA = bh.eX, aZ.aHH = aHE, b0.y.aHL(aHB, 4, 1) && b0.aFq.aHM(aHB)
	}

	function aHN() {
		0 === aHB ? o.a2U(3249) : aHI()
	}

	function aHS(fI, aAO, uB) {
		var nV = Math.floor((h.i - aH3) / 2) + aH6,
			ni = nV + Math.floor(uB * (aH3 - 2 * aH6));
		vf.lineWidth = aAO, vf.beginPath(), vf.moveTo(nV, fI), vf.lineTo(ni, fI), vf.lineTo(Math.floor(nV - aH6 + uB * aH3), fI + a8I), vf.lineTo(nV - aH6, fI + a8I), vf.closePath()
	}
	this.aHF = 1, this.aHG = 0, this.aHH = 0, this.dh = function() {
		aa.setState(6), aH1 = 0, aH2 = 1, aH7 = "rgba(0,220,120,0.4)", aH8 = "rgba(0,0,0,0.8)", this.resize(), bh.dp = !0, aHC = 1, aHD = 0, aHB = this.aHF - 1, aHE = 0 === this.aHG ? l.e2 ? 1 : 0 : this.aHG - 1, aHI(1)
	}, this.resize = function() {
		aH3 = Math.floor((a0.a1.iI() ? .5 : .25) * h.iJ), aH4 = aH3 + 12, a8I = Math.floor(.125 * aH3), aH6 = 3 * a8I, aH5 = Math.floor(.225 * aH3), aH9 = Math.floor(.3 * a8I), a8H = bC.qz.sq(0, aH9)
	}, this.a2Q = function(a2E) {
		a2E === aHB && aHN()
	}, this.hM = function(fG, fI) {
		var nV = Math.floor((h.i - aH4) / 2),
			nW = Math.floor(.5 * (h.j - be.gap - a8I - aH5)) + a8I + be.gap;
		return nV < fG && fG < nV + aH4 && nW < fI && fI < nW + aH5 && (this.a3K(), aY.a2f(fG, fI, !1), !0)
	}, this.a3K = function() {
		b0.y.a2V(3260), t.y.z()
	}, this.ec = function() {
		6 === aa.a2J() && (bh.eX > aHA + 12e3 && aHN(), 100 < (aH1 += .07 * aH2 * (aH1 < 16 ? 5 + aH1 : 84 < aH1 ? 105 - aH1 : 17)) ? (aH1 = 100, aH2 = -1) : aH1 < 0 && (aH1 = 0, aH2 = 1), aH7 = "rgba(0," + Math.floor(190 - 1.9 * aH1) + "," +
			Math.floor(120 - 1.2 * aH1) + "," + (.4 + .004 * aH1) + ")", aH8 = "rgba(0," + Math.floor(1.9 * aH1) + "," + Math.floor(1.2 * aH1) + "," + (.8 - .004 * aH1) + ")", bh.dp = !0)
	}, this.ve = function() {
		var fG = Math.floor((h.i - aH4) / 2),
			fI = Math.floor(.5 * (h.j - be.gap - a8I - aH5));
		! function(title, fI, aAO, uB) {
			vf.fillStyle = aH8, aHS(fI, aAO, 1), vf.fill(), vf.fillStyle = aH7, aHS(fI, aAO, uB), vf.fill(), vf.strokeStyle = bD.o5, aHS(fI, aAO, 1), vf.stroke(),
				function(aHU, fI) {
					bC.qz.textAlign(vf, 1), bC.qz.textBaseline(vf, 1), vf.font = a8H, vf.fillStyle = bD.o5, vf.fillText(aHU, Math.floor(.5 * h.i), Math.floor(fI + .58 * a8I))
				}(title, fI)
		}(L(137), fI, 3, aH1 / 100),
		function(fG, fI, i, j, aEy) {
			vf.fillStyle = bD.o0, vf.fillRect(fG, fI, i, j), vf.lineWidth = 3, vf.strokeStyle = bD.o5, vf.strokeRect(fG, fI, i, j);
			var f9 = Math.floor(.3 * j);
			bC.qz.textAlign(vf, 1), bC.qz.textBaseline(vf, 1), vf.font = bC.qz.sq(0, f9), vf.fillStyle = bD.o5, vf.fillText(aEy, Math.floor(fG + i / 2), Math.floor(fI + j / 2 + .1 * f9))
		}(fG, fI + a8I + be.gap, aH4, aH5, L(39))
	}
}

function cT() {
	var a2A = 0;
	this.dh = function() {
		aY.dh(), a2A = 0
	}, this.setState = function(aHV) {
		a2A = aHV
	}, this.a2J = function() {
		return a2A
	}, this.aHW = function() {
		this.setState(8), t.x()
	}, this.a3D = function(e) {
		if (!bU.xb) return !1;
		if (!(bh.eX < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHX()) return !0;
				if ("Enter" === e.key) {
					if (0 === a2A) return !0;
					if (7 === a2A) return !0
				}
			}
			return !1
		}
	}, this.aHY = function() {
		bb.resize()
	}, this.aHX = function() {
		return !!bb.sG()
	}, this.hM = function(fG, fI) {
		!bU.xb || bb.hM(fG, fI) || 6 === a2A && aZ.hM(fG, fI) || ba.hM(fG, fI) || aT.hM(fG, fI)
	}, this.a2f = function(fG, fI) {
		!aT.aAZ && aY.a2f(fG, fI, !0) || aT.a2f(fG, fI)
	}, this.click = function(fG, fI) {
		aT.a34()
	}, this.a2i = function(fG, fI, deltaY) {}, this.aHZ = function() {
		aY.aAg(), bh.dp = !0
	}, this.ve = function() {
		8 !== a2A && 10 !== a2A && (vf.imageSmoothingEnabled = !0, this.zA(), 0 !== a2A && (aT.ve(), aO.ve(), this.aHa(), ba.ve()), 0 !== a2A && 6 === a2A && aZ.ve(), bb.ve(), t.ve())
	}, this.zA = function() {
		var aHc, aHb;
		if (__fx.makeMainMenuTransparent) vf.clearRect(0, 0, h.i, h.j);
		else bU.xb ? (aHb = h.i / bU.fK, aHc = h.j / bU.fL, vf.setTransform(aHb = aHc < aHb ? aHb : aHc, 0, 0, aHb, Math.floor((h.i - aHb * bU.fK) / 2), Math.floor((h.j - aHb * bU.fL) / 2)), vf.drawImage(bU.xd, 0, 0), vf.setTransform(1, 0, 0, 1,
			0, 0), vf.fillStyle = bD.o0) : vf.fillStyle = bD.nw, vf.fillRect(0, 0, h.i, h.j)
	}, this.aHa = function() {
		var fI = Math.floor(.3 * h.j),
			canvas = ab.aHd("territorial.io"),
			iA = (iA = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : iA,
			fG = (vf.globalAlpha = .15, vf.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - iA * canvas.width))),
			fG = Math.floor(fG / iA),
			fI = Math.floor(fI - .5 * canvas.height * iA),
			fI = Math.floor(fI / iA);
		vf.setTransform(iA, 0, 0, iA, fG, fI), vf.drawImage(canvas, fG, fI), vf.setTransform(1, 0, 0, 1, 0, 0), vf.globalAlpha = 1, vf.imageSmoothingEnabled = !0
	}
}

function ct() {
	this.aEm = 0;
	var aHf, aHg, aHh, aHi, aHj, aHk = this.aHe = 0;

	function aHn() {
		aHi = aHj = null, aHk = 0
	}
	this.dh = function(s4, aEj, aEk) {
		t.x(), bp.uj(), aa.setState(10), aHi = s4, aHj = aEj, aHk = aEk, this.aEm = s4.aEm, this.aHe = aEk, aHf = 0, aHg = bh.eX + 4500, b0.y.a2R = s4.a2R, b0.y.a2H === s4.a2R ? (console.log("direct pass"), aHh = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a2H, 3247), aHh = 2, b0.y.aHL(s4.a2R, 5, 2) && b0.pT.aHl()), vf.imageSmoothingEnabled = !0, aa.zA();
		aEj = ab.aHd("loading"), aEk = (a0.a1.iI() ? .396 : .25) * h.iJ / aEj.width;
		vf.setTransform(aEk, 0, 0, aEk, Math.floor((h.i - aEk * aEj.width) / 2), Math.floor((h.j - aEk * aEj.height) / 2)), vf.imageSmoothingEnabled = !1, vf.drawImage(aEj, 0, 0), vf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mo = function() {
		0 < aHh && bh.eX > aHg && (aHh--, aHg += 4500, 0 === bh.aHo) && 0 === bh.kR() && b0.y.aHL(b0.y.a2R, 5, 2)
	}, this.aHp = function() {
		return 10 === aa.a2J() && (bp.aDy.aEn(aHi, aHj, aHk), aHn(), !0)
	}, this.aHq = function() {
		10 === aa.a2J() && 2 <= ++aHf && (bp.aDy.aEn(aHi, aHj, aHk), aHn())
	}
}

function cU() {
	var aHs, canvas, a1T, aHt;

	function aHz(eG, name, aI0, qg) {
		a1T[eG] = name, canvas[eG] = new Image, canvas[eG].onload = function() {
			! function(eG, aI0) {
				var a4y, a4z = null;
				7 === aI0 ? a4y = bC.a3Q.a51 : 8 === aI0 ? (a4y = bC.a3Q.a54, a4z = .1) : 3 === aI0 ? (a4y = bC.a3Q.a52, a4z = .06) : 5 === aI0 ? a4y = bC.a3Q.a55 : 6 === aI0 ? a4y = bC.a3Q.a50 : 4 === aI0 && (a4y = bC.a3Q.a56);
				canvas[eG] = bC.a3Q.a4x(canvas[eG], a4y, a4z)
			}(eG, aI0), aI2()
		}, canvas[eG].onerror = function(e) {
			console.error("Error loading image at index", eG, "Error:", e), aI2()
		}, canvas[eG].src = "data:image/png;base64," + qg
	}

	function aI2() {
		aHs--, aHw()
	}

	function aHw() {
		0 === aHs && (aHs = -1, aHy(), bh.dp = !0, canvas[7] = aHt, canvas[8] = aHt, canvas[9] = aHt, canvas[10] = aHt, 5 === t.tJ) && t.a2N().aI4.resize()
	}

	function aHy() {
		aL.a6N(), ba.aDo([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xg = new zc, aj.xg.dh(), aw.di()
	}
	this.dh = function() {
		if (void 0 === canvas) {
			aHs = 23, canvas = new Array(aHs), a1T = new Array(aHs), (aHt = document.createElement("canvas")).width = 1;
			for (var aB = aHs - (aHt.height = 1); 0 <= aB; aB--) canvas[aB] = aHt;
			aHy(), aHz(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHz(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHz(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aHz(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHz(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHz(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHz(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(8,
					"googleplay", 3,
					"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"
					), aHz(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHz(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHz(14, "bestPlayer", 5,
					"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"
					), aHz(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHz(16, "apple", 3,
					"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"
					), aHz(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHz(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHz(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHz(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHz(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHz(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eG) {
		return canvas[eG]
	}, this.aHd = function(name) {
		for (var aB = a1T.length - 1; 0 <= aB; aB--)
			if (a1T[aB] === name) return canvas[aB];
		return aHt
	}, this.tl = function() {
		return aHs <= 0
	}, this.aHv = function() {
		aHs = 0, aHw()
	}
}

function cV() {
	var aI5 = [
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
		aI6 = [
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
	this.aI7 = null, this.aI8 = null, this.aI9 = null, this.aIA = null, this.aIB = null, this.aIC = null, this.aID = null, this.aIE = null, this.aIF = null, this.aIG = null;

	function aIN(jk, nn) {
		for (var aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aB = jk; aB < nn; aB++) aI7[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2, aI8[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2, aI9[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2
	}

	function aIM(jk, nn) {
		for (var colorsData = aD.data.colorsData, aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aB = jk; aB < nn; aB++) {
			var fb = colorsData[aB];
			aI7[aB] = 4 * (fb >> 12), aI8[aB] = 4 * (fb >> 6 & 63), aI9[aB] = 4 * (63 & fb)
		}
	}

	function aIe(en, aIg) {
		aDA[en] = 0, aDA[en + 1] = 0, aDA[en + 2] = aIg, aDA[en + 3] = 0, aIh(en)
	}

	function aIh(en) {
		var fG;
		bd.nv || (fG = ac.zB(en), en = ac.zC(en), bd.nv = fG >= bc.aD9[0] && fG <= bc.aD9[2] && en >= bc.aD9[1] && en <= bc.aD9[3])
	}
	this.fB = new Int32Array(4), this.aIK = new Int32Array(8), this.di = function() {
		var fB = this.fB,
			fB = (fB[0] = -4 * bU.fK, fB[1] = 4, fB[2] = -fB[0], fB[3] = -fB[1], this.aIK);
		fB[0] = -4 * bU.fK - 4, fB[1] = -4 * bU.fK, fB[2] = -4 * bU.fK + 4, fB[3] = -4, fB[4] = 4, fB[5] = 4 * bU.fK - 4, fB[6] = 4 * bU.fK, fB[7] = 4 * bU.fK + 4
	}, this.dh = function() {
		if (this.aI7 ? (this.aI7.fill(0), this.aI8.fill(0), this.aI9.fill(0), this.aIA.fill(0), this.aIB.fill(0), this.aIC.fill(0), this.aID.fill(0), this.aIE.fill(0), this.aIF.fill(0), this.aIG.fill(0), this.a9X.fill(0)) : (this.aI7 =
				new Uint8Array(aD.f6), this.aI8 = new Uint8Array(aD.f6), this.aI9 = new Uint8Array(aD.f6), this.aIA = new Uint8Array(aD.f6), this.aIB = new Uint8Array(aD.f6), this.aIC = new Uint8Array(aD.f6), this.aID = new Uint8Array(aD.f6),
				this.aIE = new Uint8Array(aD.f6), this.aIF = new Uint8Array(aD.f6), this.aIG = new Uint8Array(aD.f6), this.a9X = new Uint8Array(aD.f6)), aD.i3)
			for (var aBn = bi.aBn, aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aB = aD.f6 - 1; 0 <= aB; aB--) {
				var eh = aBn[aB],
					lP = bN.fa((aI6[eh][3] + 1) * ay.random(), ay.value(100));
				aI7[aB] = aI5[eh][0] + lP * aI6[eh][0], aI8[aB] = aI5[eh][1] + lP * aI6[eh][1], aI9[aB] = aI5[eh][2] + lP * aI6[eh][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aIM(0, aD.kU), aIN(aD.kU, aD.f6)) : aIN(0, aD.f6) : aIM(0, aD.f6);
		! function() {
			var aB, fC, aI7 = ac.aI7,
				aI8 = ac.aI8,
				aI9 = ac.aI9;
			for (aB = aD.f6 - 1; 0 <= aB; aB--) fC = bN.fa(aI7[aB] + aI8[aB] + aI9[aB], 3), aI7[aB] += aIT(fC - aI7[aB], 2), aI8[aB] += aIT(fC - aI8[aB], 2), aI9[aB] += aIT(fC - aI9[aB], 2), aI7[aB] -= aI7[aB] % 4, aI8[aB] -= aI8[aB] % 4, aI9[
				aB] -= aI9[aB] % 4
		}(),
		function() {
			for (var f9 = aD.f6, aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = 0; aB < f9; aB++) aI7[aB] += aB >> 7, aI8[aB] += aB >> 5 & 3, aI9[aB] += aB >> 3 & 3, aIA[aB] = 7 & aB
		}(), this.aIQ(),
			function() {
				for (var f9 = aD.f6, aIB = ac.aIB, aIC = ac.aIC, aID = ac.aID, aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aB = 0; aB < f9; aB++) {
					var eF = aI7[aB],
						th = aI8[aB],
						fT = aI9[aB];
					60 <= eF + th + fT ? (aIB[aB] = Math.max(eF - 40, 3 & eF), aIC[aB] = Math.max(th - 40, 3 & th), aID[aB] = Math.max(fT - 40, 3 & fT)) : (aIB[aB] = eF + 40, aIC[aB] = th + 40, aID[aB] = fT + 40)
				}
			}(),
			function() {
				for (var f9 = aD.f6, aIE = ac.aIE, aIF = ac.aIF, aIG = ac.aIG, aI7 = ac.aI7, aI8 = ac.aI8, aI9 = ac.aI9, aB = 0; aB < f9; aB++) {
					var eF = aI7[aB],
						th = aI8[aB],
						fT = aI9[aB];
					688 <= eF + th + fT ? (aIE[aB] = eF - 88, aIF[aB] = th - 88, aIG[aB] = fT - 88) : (aIE[aB] = Math.min(eF + 88, 252 + (3 & eF)), aIF[aB] = Math.min(th + 88, 252 + (3 & th)), aIG[aB] = Math.min(fT + 88, 252 + (3 & fT)))
				}
			}()
	}, this.a8P = function(player) {
		var g = bQ.fi;
		return g[0] = this.aI7[player], g[1] = this.aI8[player], g[2] = this.aI9[player], g
	}, this.aIQ = function() {
		for (var aB = aD.f6 - 1; 0 <= aB; aB--) this.a9X[aB] = this.aI7[aB] + this.aI8[aB] + this.aI9[aB] < 280 ? 0 : 1
	}, this.zB = function(en) {
		return bN.fa(en, 4) % bU.fK
	}, this.zC = function(en) {
		return bN.fa(en, 4 * bU.fK)
	}, this.yj = function(fG, fI) {
		return Math.floor(4 * (fI * bU.fK + fG))
	}, this.yz = function(en) {
		var fB = this.fB;
		return this.aIU(en + fB[0]) || this.aIU(en + fB[1]) || this.aIU(en + fB[2]) || this.aIU(en + fB[3])
	}, this.fX = function(en) {
		var fB = this.fB;
		return this.fE(en + fB[0]) || this.fE(en + fB[1]) || this.fE(en + fB[2]) || this.fE(en + fB[3])
	}, this.yx = function(en, player) {
		var fB = this.fB;
		return this.aIV(en + fB[0], player) || this.aIV(en + fB[1], player) || this.aIV(en + fB[2], player) || this.aIV(en + fB[3], player)
	}, this.aIW = function(aB, aIX, aIY, aIZ) {
		this.aI7[aB] = aIX >> 16, this.aI8[aB] = aIX >> 8 & 255, this.aI9[aB] = 255 & aIX, this.aIB[aB] = aIY >> 16, this.aIC[aB] = aIY >> 8 & 255, this.aID[aB] = 255 & aIY, this.aIE[aB] = aIZ >> 16, this.aIF[aB] = aIZ >> 8 & 255, this.aIG[aB] =
			255 & aIZ
	}, this.aIa = function(aB) {
		return [(this.aI7[aB] << 16) + (this.aI8[aB] << 8) + this.aI9[aB], (this.aIB[aB] << 16) + (this.aIC[aB] << 8) + this.aID[aB], (this.aIE[aB] << 16) + (this.aIF[aB] << 8) + this.aIG[aB]]
	}, this.gj = function(en) {
		return 208 <= aDA[en + 3]
	}, this.z5 = function(player, en) {
		return this.gj(en) && this.z8(player, en)
	}, this.z8 = function(player, en) {
		return player === this.f1(en)
	}, this.aIb = function(en) {
		return 208 <= aDA[en + 3] && aDA[en + 3] < 224
	}, this.jf = function(en) {
		return 224 <= aDA[en + 3] && aDA[en + 3] < 248
	}, this.aIc = function(en) {
		return 248 <= aDA[en + 3]
	}, this.yy = function(en) {
		for (var fB = this.fB, aB = 3; 0 <= aB; aB--)
			if (this.iN(en + fB[aB])) return !0;
		return !1
	}, this.f4 = function(en) {
		return this.gj(en) || this.f0(en)
	}, this.iN = function(en) {
		return 0 === aDA[en + 3] && 2 === aDA[en + 2]
	}, this.f0 = function(en) {
		return 0 === aDA[en + 3] && 1 === aDA[en + 2]
	}, this.xo = function(en) {
		return 0 === aDA[en + 3] && 3 === aDA[en + 2]
	}, this.fE = function(en) {
		return 0 === aDA[en + 3] && 5 === aDA[en + 2]
	}, this.aIU = function(en) {
		return 0 === aDA[en + 3] && 3 <= aDA[en + 2]
	}, this.er = function(en) {
		return (aDA[en] >> 1 << 8) + aDA[en + 1]
	}, this.aId = function(en) {
		return 1 & aDA[en]
	}, this.aIV = function(en, player) {
		return this.f0(en) || this.gj(en) && player !== this.f1(en)
	}, this.f1 = function(en) {
		return ((3 & aDA[en]) << 7) + ((3 & aDA[en + 1]) << 5) + ((3 & aDA[en + 2]) << 3) + (7 & aDA[en + 3])
	}, this.z6 = function(en) {
		aIe(en, 1)
	}, this.aIf = function(en) {
		aIe(en, 2)
	}, this.yk = function(en, player) {
		aDA[en] = this.aI7[player], aDA[en + 1] = this.aI8[player], aDA[en + 2] = this.aI9[player], aDA[en + 3] = 208 + this.aIA[player], aIh(en)
	}, this.ge = function(en, player) {
		aDA[en] = this.aIB[player], aDA[en + 1] = this.aIC[player], aDA[en + 2] = this.aID[player], aDA[en + 3] = 224 + this.aIA[player], aIh(en)
	}, this.jg = function(en, player) {
		aDA[en] = this.aIE[player], aDA[en + 1] = this.aIF[player], aDA[en + 2] = this.aIG[player], aDA[en + 3] = 248 + this.aIA[player], aIh(en)
	}
}

function cu() {
	var aIi = 0,
		aIk = new Uint16Array(64);

	function wH(a6R) {
		aIi -= 2;
		for (var aB = a6R; aB < aIi; aB += 2) aIk[aB] = aIk[aB + 2], aIk[aB + 1] = aIk[aB + 3]
	}
	this.dh = function() {
		aIi = 0
	}, this.ec = function() {
		var aB, jd, il;
		if (0 !== aIi)
			if (0 === ag.n4[aD.et]) aIi = 0;
			else if (0 === ad.gG(aD.et)) aIi = 0;
		else
			for (aB = aIi - 2; 0 <= aB; aB -= 2)(jd = aIk[aB]) < aD.f6 && 0 === ag.n4[jd] ? wH(aB) : (il = aIk[aB + 1], (jd >= aD.f6 && bu.aIm(aD.et) || jd < aD.f6 && bu.aIn(aD.et, jd)) && (bA.hZ.hg(il, jd), wH(aB)))
	}, this.hh = function(jd, il) {
		! function(jd, il) {
			for (var aB = 0; aB < aIi; aB += 2)
				if (aIk[aB] === jd) return aIk[aB + 1] = Math.min(aIk[aB + 1] + il, 1023), 1;
			return
		}(jd, il) && 64 !== aIi && (aIk[aIi] = jd, aIk[aIi + 1] = il, aIi += 2)
	}
}

function cW() {
	function aIv(player) {
		var eY;
		bC.gV.a4Z(player) && (eY = ag.hB[player] - ag.a4e[player] + ad.aIx(player), bf.gZ(player, Math.abs(eY), eY < 0 ? 18 : 12)), ag.hB[player] = 0, ag.a4e[player] = 0
	}

	function aJ4() {
		aX.show(!1, !1, !1, !0), aW.aCJ(), bT.a0s.a1e()
	}

	function aIr(player, aJ3) {
		for (var aB = aJ3.length - 1; 0 <= aB; aB--) ad.aJ6(aJ3[aB], player)
	}

	function aIu(player) {
		var j2 = ag.j2,
			j3 = ag.j3,
			j4 = ag.j4,
			j5 = ag.j5,
			fK = bU.fK;
		if (ag.gx[player]) {
			ag.gx[player] = 0;
			for (var nV = j2[player], nW = j4[player], fG = j3[player]; nV <= fG; fG--)
				for (var fI = j5[player]; nW <= fI; fI--) {
					var gh = 4 * (fI * fK + fG);
					ac.z5(player, gh) && ac.z6(gh)
				}
		}
		j3[player] = j5[player] = 0, j2[player] = j4[player] = Math.max(fK, bU.fL)
	}
	this.dq = function(gh) {
		var player, eY = ag.gx[gh] + ag.yf[gh];
		bP.y.kY[gh] ? eY && (aIr(player = gh, ad.aIs(player)), af.aIt(player), aIu(player), aF.gX(player), ad.clear(player), aIv(player), function(player) {
			ag.yf[player] = 0, ag.gb[player] = [], ag.gp[player] = [], ag.gq[player] = [], ag.fY[player] = []
		}(player)) : !eY && ag.gb[gh].length || this.aIq(gh)
	}, this.aIq = function(player) {
		! function(player) {
			bC.gV.jr(player) || (ag.a1i[player] = bk.a1x.aJ2(), aD.a19++);
			var aJ3 = ad.aIs(player);
			0 === aJ3.length ? bC.gV.a4W(player) && aJ4() : (aIr(player, aJ3), function(player, aJ3) {
				var aJ8 = aJ3[function(aJ3) {
					var aB, eG = 0;
					for (aB = aJ3.length - 1; 1 <= aB; aB--) ag.gx[aJ3[aB]] > ag.gx[aJ3[eG]] && (eG = aB);
					return eG
				}(aJ3)];
				9 === aD.km && (1 === bi.f7[player] ? ay.kM(8) && az.aJ9(aJ8) : aE.hs[player] && (aN.a7q(765, 0), aN.zZ(280, L(138, [ag.za[aJ8], ag.za[player]]), 765, aJ8, bD.nw, bD.pI, -1, !0)));
				if (bC.gV.a4W(player)) aJ4(), aN.a1K(aJ8, 1);
				else {
					for (var aB = aJ3.length - 1; 0 <= aB; aB--)
						if (bC.gV.a4Z(aJ3[aB]) && (bf.n0[4 - bC.gV.jr(player)]++, bC.gV.a4W(aJ3[aB]))) return aN.a1K(player, 0);
					bC.gV.jr(player) || aN.a7a(0, player, aJ8)
				}
			}(player, aJ3))
		}(player), af.aIt(player), aIu(player), aIv(player),
			function(player) {
				ag.n4[player] = 0, ag.gb[player] = null, ag.gp[player] = null, ag.gq[player] = null, ag.fY[player] = null
			}(player), aF.gX(player), ad.clear(player), bP.aJ0.aJ1(player)
	}
}

function cz() {
	var input;

	function aJA(e) {
		(e = e.target.files) && 0 < e.length && b6.aJD(e[0])
	}

	function aJH(e) {
		var eh = new Image;
		eh.onload = aJI, eh.src = e.target.result
	}

	function aJI(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJK = bl.eU.data[162].value,
			max = Math.min(bU.aJL, aJK),
			aJK = (max = a0.id || bL.rR() ? Math.min(1400, aJK) : max) / Math.max(i, j);
		if (aJK < 1 && (i = Math.floor(aJK * i + .125), j = Math.floor(aJK * j + .125)), max < i || max < j || i < 10 || j < 10) aJK = "Invalid Image Dimensions!", a0.wO ? a0.wO.showToast(aJK) : alert(aJK);
		else {
			for (var max = document.createElement("canvas"), aJK = (max.width = i, max.height = j, max.getContext("2d")), aJN = document.createElement("canvas"), aJO = (aJN.width = e.width, aJN.height = e.height, aJN.getContext("2d")), e = (aJO
					.drawImage(e, 0, 0), aJO.getImageData(0, 0, aJN.width, aJN.height)), aJO = aJK.createImageData(i, j), src = e.data, aJR = aJO.data, aA8 = aJN.width / i, aA9 = aJN.height / j, fI = 0; fI < j; fI++)
				for (var fG = 0; fG < i; fG++) {
					var aJS = Math.floor(fG * aA8),
						aJS = 4 * (Math.floor(fI * aA9) * aJN.width + aJS),
						aJV = 4 * (fI * i + fG);
					aJR[aJV] = src[aJS], aJR[1 + aJV] = src[1 + aJS], aJR[2 + aJV] = src[2 + aJS], aJR[3 + aJV] = 255
				}
			aJK.putImageData(aJO, 0, 0), 20 === t.tJ && t.a2N().aJI(max)
		}
	}
	this.dh = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJA
	}, this.uj = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJB = function() {
		input.click()
	}, this.aJD = function(aJE) {
		var g = aJE.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJH, g.readAsDataURL(aJE))
	}
}

function cx() {
	this.aJW = null, this.dh = function() {
		10 !== aD.km ? this.aJW = null : this.aJW = new Uint32Array(aD.f6)
	}, this.ec = function() {
		10 === aD.km && this.lJ()
	}, this.lJ = function() {
		for (var gh, target, aCW, aJW = this.aJW, a0v = al.l5, a4f = ag.hB, aB = al.l0 - 1; 0 <= aB; aB--)(gh = a0v[aB]) >= aD.kU || (target = Math.max(bN.fa(a4f[gh], 4), 2048), aCW = Math.max(ae.aCX(gh), 100), aJW[gh] += bN.fa(aCW * target,
			1e4), aJW[gh] > target && (aJW[gh] = target))
	}, this.a4l = function(player, hs) {
		return hs > this.aJW[player] ? (hs = this.aJW[player], this.aJW[player] = 0) : this.aJW[player] -= hs, hs
	}
}

function d0() {
	var aJX = -1,
		aJY = null,
		aJZ = -1;

	function aJb() {
		aM.a6v() ? bd.aD8() : bd.a1J()
	}

	function aJa() {
		return -1 !== aJX && (ac.aIW(aJX, aJY[0], aJY[1], aJY[2]), aJg(aJX), aJX = -1)
	}

	function aJg(player) {
		bh.dp = !0;
		for (var j2 = ag.j2[player], j4 = ag.j4[player], j3 = ag.j3[player], j5 = ag.j5[player], fI = j4; fI <= j5; fI++)
			for (var fG = j2; fG <= j3; fG++) {
				var en = ac.yj(fG, fI);
				ac.z5(player, en) && (ac.aIc(en) ? ac.jg(en, player) : ac.jf(en) ? ac.ge(en, player) : ac.yk(en, player))
			}
	}
	this.dh = function() {
		aJY = null, aJZ = aJX = -1
	}, this.ec = function(bw) {
		if (bl.eU.data[15].value && (bw || !bL.rR())) {
			var bw = bO.hP(bL.hE),
				hQ = bO.hR(bL.hF);
			if (bO.hS(bw, hQ)) {
				bw = bO.fW(bw, hQ), hQ = bO.ez(bw);
				if (aJZ === hQ)
					if (ac.gj(hQ)) {
						if (aJX === ac.f1(hQ)) return
					} else if (-1 === aJX) return;
				! function(en) {
					ac.gj(en) ? (en = ac.f1(en)) !== aJX && (aJa(), function(player) {
						aJX = player, aJY = ac.aIa(player);
						var aJe = [function(eh, fC) {
							var eF = eh >> 16,
								th = eh >> 8 & 255,
								eh = 255 & eh,
								aJj = 255 - fC;
							aJj < eF && aJj < th && aJj < eh && (fC = -fC);
							var aJj = aJX >> 7,
								aJl = aJX >> 5 & 3,
								aJm = aJX >> 3 & 3;
							return eF = Math.max(Math.min(eF + fC, 252 + aJj), aJj), th = Math.max(Math.min(th + fC, 252 + aJl), aJl), eh = Math.max(Math.min(eh + fC, 252 + aJm), aJm), (eF << 16) + (th << 8) + eh
						}(aJY[0], 20), (252 + (aJX >> 7) << 16) + (252 + (aJX >> 5 & 3) << 8) + (252 + (aJX >> 3 & 3)), (200 + (aJX >> 7) << 16) + (200 + (aJX >> 5 & 3) << 8) + (200 + (aJX >> 3 & 3))];
						ac.aIW(player, aJe[0], aJe[1], aJe[2]), aJg(player)
					}(en), aJb()) : aJa() && aJb()
				}(aJZ = hQ)
			} else aJa() && aJb()
		}
	}
}

function d1() {
	var ux = 0,
		aJn = 0,
		aJo = 0,
		aJp = 0,
		aJZ = -1;

	function aJs(en) {
		if (aJZ === en) return !1;
		if (-1 === (aJZ = en)) ux = 0, aN.a83(ux, 0);
		else {
			if (ac.gj(en)) return aJo = ac.f1(en), kT = ag.hB[aJo] - ag.a4e[aJo], (4 !== ux || kT !== aJn) && (ux = 4, aJn = kT, aN.a83(ux, kT), !0);
			if (ac.f0(en)) return 3 !== ux && (ux = 3, aN.a83(ux, 0), !0);
			if (ac.fE(en)) return 2 !== ux && (ux = 2, aN.a83(ux, 0), !0);
			var kT = bP.lJ.a6j(bL.hE, bL.hF);
			if (-1 === kT) return 1 !== ux && (ux = 1, aN.a83(ux, 0), !0);
			en = bP.y.a7h[kT];
			if (aJo = bP.y.mN[kT], aJp = bP.y.mO[kT] >> 3, 5 === ux && en === aJn) return !1;
			ux = 5, aJn = en, aN.a83(ux, en)
		}
		return !0
	}
	this.dh = function() {
		aJp = aJo = aJn = ux = 0, aJZ = -1
	}, this.ec = function(bw) {
		var hQ;
		!bw && bL.rR() || (bw = bO.hP(bL.hE), hQ = bO.hR(bL.hF), bO.hS(bw, hQ) ? (bw = bO.fW(bw, hQ), aJs(bO.ez(bw))) : aJs(-1))
	}, this.ml = function() {
		var aJu, kT, a6h, aJt;
		if (0 !== ux && 2 !== ux)
			if (bL.rR()) {
				if (1 !== ux && 3 !== ux) {
					if (4 === ux) return void(kT = ag.hB[aJo] - ag.a4e[aJo], aJn === kT || (aJn = kT, aN.a83(ux, kT)));
					(a6h = bP.lJ.nU(aJp, aJo)) < 0 ? (ux = 1, aN.a83(ux, 0)) : (aJt = bP.y.a7h[a6h]) !== aJn && (aJn = aJt, aN.a83(ux, aJt))
				}
			} else if (1 === ux) - 1 !== (a6h = bP.lJ.a6j(bL.hE, bL.hF)) && (ux = 5, aJn = bP.y.a7h[a6h], aN.a83(ux, aJn));
		else if (3 === ux) ac.gj(aJZ) && (ux = 4, aJu = ac.f1(aJZ), aJn = ag.hB[aJu] - ag.a4e[aJu], aN.a83(ux, aJn));
		else if (4 === ux) {
			if (ac.gj(aJZ)) return void(aJu = ac.f1(aJZ), kT = ag.hB[aJu] - ag.a4e[aJu], aJn === kT || (aJn = kT, aN.a83(ux, kT)));
			ux = 3, aN.a83(ux, 0)
		} else - 1 === (a6h = bP.lJ.a6j(bL.hE, bL.hF)) ? (ux = 1, aN.a83(ux, 0)) : (aJt = bP.y.a7h[a6h]) !== aJn && (aJn = aJt, aN.a83(ux, aJt))
	}
}

function da() {
	function aJw(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aK4, g.readAsText(e))
	}

	function aK4(e) {
		var aK7;
		aD.a17 || (e = JSON.parse(e.target.result), aK7 = aD.data = new a5c, aK8(e, aK7, "mapType", 0, 2), aK8(e, aK7, "mapProceduralIndex", 0, 255), aK8(e, aK7, "mapRealisticIndex", 0, 255), aK8(e, aK7, "mapSeed", 0, 16383), function(aK6, aK7, gi,
				max) {
				aK6 = aK6[gi];
				aK7[gi] = aKE(aK6) ? aK6.slice(0, max) : aK7[gi]
			}(e, aK7, "mapName", 20), function(aK6, aK7, gi) {
				var aJJ;
				2 === aK7.mapType && (!aKE(aK6 = aK6[gi]) || aK6.length <= 20 ? aK7.mapType = 0 : ((aJJ = new Image).onload = function() {
					bB.aKF.aKG(aJJ, 1), aJJ.onload = null, aJJ = null
				}, aJJ.src = aK6))
			}(e, aK7, "canvas"), aK8(e, aK7, "passableWater", 0, 1), aK8(e, aK7, "passableMountains", 0, 1), aK8(e, aK7, "playerCount", 1, 512), aK8(e, aK7, "humanCount", 1, 1), aK8(e, aK7, "selectedPlayer", 0, 0), aK8(e, aK7, "gameMode", 0, 1),
			aK8(e, aK7, "playerMode", 0, 0), aK8(e, aK7, "battleRoyaleMode", 0, 0), aK8(e, aK7, "numberTeams", 0, 8), aK8(e, aK7, "isZombieMode", 0, 0), aK8(e, aK7, "isContest", 0, 0), aK8(e, aK7, "isReplay", 0, 0), aKB(e, aK7, "elo", 16, 2,
				16383), aK8(e, aK7, "colorsType", 0, 1), aK8(e, aK7, "colorsPersonalized", 0, 1), aKB(e, aK7, "colorsData", 32, 512, 262143), aK8(e, aK7, "selectableColor", 0, 1), aKB(e, aK7, "teamPlayerCount", 16, 9, 512), aK8(e, aK7,
				"neutralBots", 0, 1), aK8(e, aK7, "botDifficultyType", 0, 3), aK8(e, aK7, "botDifficultyValue", 0, 15), aKB(e, aK7, "botDifficultyTeam", 8, 9, 15), aKB(e, aK7, "botDifficultyData", 8, 512, 15), aK8(e, aK7, "spawningType", 0, 2),
			aK8(e, aK7, "spawningSeed", 0, 16383), aKB(e, aK7, "spawningData", 16, 1024, 4095), aK8(e, aK7, "selectableSpawn", 0, 1), aK8(e, aK7, "playerNamesType", 0, 2),
			function(aK6, aK7, gi, size, max) {
				var a3l = aK6[gi];
				if (Array.isArray(a3l)) {
					for (var a3m = new Array(size), f9 = Math.min(a3l.length, size), aB = 0; aB < f9; aB++) a3m[aB] = aKE(a3l[aB]) ? a3l[aB].slice(0, max) : "";
					a3m.fill("", f9), aK7[gi] = a3m
				}
			}(e, aK7, "playerNamesData", 512, 20), aK8(e, aK7, "selectableName", 0, 1), aK8(e, aK7, "aIncomeType", 0, 2), aK8(e, aK7, "aIncomeValue", 0, 255), aKB(e, aK7, "aIncomeData", 8, 512, 255), aK8(e, aK7, "tIncomeType", 0, 2), aK8(e, aK7,
				"tIncomeValue", 0, 255), aKB(e, aK7, "tIncomeData", 8, 512, 255), aK8(e, aK7, "iIncomeType", 0, 2), aK8(e, aK7, "iIncomeValue", 0, 255), aKB(e, aK7, "iIncomeData", 8, 512, 255), aK8(e, aK7, "sResourcesType", 0, 2), aK8(e, aK7,
				"sResourcesValue", 0, 2047), aKB(e, aK7, "sResourcesData", 16, 512, 2047), t.x(), t.y.tB[0] = 0, t.u(19))
	}

	function aK8(aK6, aK7, gi, min, max) {
		aK6 = aK6[gi];
		aK7[gi] = "number" == typeof aK6 && min <= aK6 && aK6 <= max ? Math.floor(aK6) : aK7[gi]
	}

	function aKE(qg) {
		return "string" == typeof qg
	}

	function aKB(aK6, aK7, gi, aKH, size, max) {
		var a3l = aK6[gi];
		if (Array.isArray(a3l)) {
			for (var a3m = new(8 === aKH ? Uint8Array : 16 === aKH ? Uint16Array : Uint32Array)(size), f9 = Math.min(a3l.length, size), aB = 0; aB < f9; aB++) a3m[aB] = bN.iH(a3l[aB], 0, max);
			aK7[gi] = a3m
		}
	}
	this.aJv = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJw, input.click()
	}, this.aJx = function() {
		for (var aK0, aDl, a6A = aD.data, keys = Object.keys(a6A), aJy = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a6A[key] instanceof Uint8Array || a6A[key] instanceof Uint16Array || a6A[key] instanceof Uint32Array ? aJy[key] = Array.from(a6A[key]) : aJy[key] = a6A[key]
		}
		aJy.canvas = 2 === aJy.mapType && aJy.canvas ? aJy.canvas.toDataURL() : null, aK0 = aJy, aK0 = JSON.stringify(aK0, null, 2), aK0 = new Blob([aK0], {
			type: "application/json"
		}), (aDl = document.createElement("a")).href = URL.createObjectURL(aK0), aDl.download = "tt_scenario.json", aDl.click()
	}
}

function ca() {
	var aKI, aKJ, size, jd, hs, aKK;

	function aKL(player) {
		return player < aD.kU ? aKI * player : aKI * aD.kU + aKJ * (player - aD.kU)
	}
	this.dh = function() {
		aKI = aD.kU < 16 ? 12 : 8, aKJ = 4;
		var f9 = aKL(aD.f6);
		size = new Uint8Array(aD.f6), jd = new Uint16Array(f9), hs = new Uint32Array(f9), aKK = new Uint8Array(f9)
	}, this.qX = function(a91, aKM) {
		var aKN = this.hC(a91, aKM),
			aKM = (this.hA(a91, aKM, 0), bC.gV.gY(a91, aKN));
		bf.gZ(a91, aKN - aKM, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJ6 = function(player, aKM) {
		var aKQ, aKM = function(player, aKM) {
			var aB, lP = aKL(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jd[lP + aB] === aKM) return aB;
			return size[player]
		}(player, aKM);
		aKM !== size[player] && (aKQ = hs[aKL(player) + aKM], this.ga(player, aKM), this.eg(player, aKQ, aD.f6))
	}, this.jp = function(player, aKM) {
		for (var lP = aKL(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKM) return !0;
		return !1
	}, this.k8 = function(player) {
		return player < aD.kU ? size[player] < aKI : size[player] < aKJ
	}, this.gG = function(player) {
		return size[player]
	}, this.gL = function(player, aB) {
		return jd[aKL(player) + aB]
	}, this.gM = function(player, aB) {
		return hs[aKL(player) + aB]
	}, this.hC = function(player, aKM) {
		for (var lP = aKL(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKM) return hs[lP + aB];
		return 0
	}, this.aIx = function(player) {
		for (var lP = aKL(player), fb = 0, aB = size[player] - 1; 0 <= aB; aB--) fb += hs[lP + aB];
		return fb
	}, this.hA = function(player, aKM, aKQ) {
		for (var lP = aKL(player), aB = size[player] - 1; 0 <= aB; aB--) jd[lP + aB] === aKM && (hs[lP + aB] = aKQ)
	}, this.gv = function(player, aB, aKQ) {
		hs[aKL(player) + aB] = Math.max(aKQ, 0)
	}, this.gw = function(player, aB) {
		aKK[aKL(player) + aB] = 0
	}, this.gN = function(player, aB) {
		return aKK[aKL(player) + aB]
	}, this.eg = function(player, aKQ, aKM) {
		ao.jH.k6[player] = ao.jH.k6[aKM] = 8, bC.gV.a4Z(aKM) && bf.n0[6 - bC.gV.jr(player)]++;
		for (var lP = aKL(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKM) return hs[lP + aB] += aKQ, void(hs[lP + aB] = hs[lP + aB] > aD.a4h ? aD.a4h : hs[lP + aB]);
		jd[lP + size[player]] = aKM, hs[lP + size[player]] = aKQ, aKK[lP + size[player]] = 1, size[player]++, aKM === aD.et ? aN.a1K(player, 5) : player < aD.kU && player === aD.et && af.a7c(aKM)
	}, this.ga = function(player, eG) {
		var fS, lP;
		if (0 !== size[player])
			for (lP = aKL(player), size[player]--, fS = eG; fS < size[player]; fS++) jd[lP + fS] = jd[lP + fS + 1], hs[lP + fS] = hs[lP + fS + 1], aKK[lP + fS] = aKK[lP + fS + 1]
	}, this.aIs = function(player) {
		for (var fS, lP, aJ3 = [], aB = al.l0 - 1; 0 <= aB; aB--)
			for (lP = aKL(al.l5[aB]), fS = size[al.l5[aB]] - 1; 0 <= fS; fS--)
				if (jd[lP + fS] === player) {
					aJ3.push(al.l5[aB]);
					break
				} return aJ3
	}
}

function cb() {
	var aKR;

	function aKT(player) {
		var eF, k9;
		return bC.gV.jr(player) && player < aD.kU ? 0 : (eF = aKR[bN.fa((aD.f6 - 1) * ag.gx[player], aD.kE)], bh.kR() < 1920 && (eF = Math.max(bN.fa(100 * (13440 - 6 * bh.kR()), 1920), eF)), k9 = ae.kA(player), ag.hB[player] > k9 && (eF -= bN.fa(2 *
			eF * (ag.hB[player] - k9), k9)), Math.min(Math.max(eF, 0), 700))
	}

	function aKf(nh) {
		for (var gx = ag.gx, l5 = al.l5, aB = al.l0 - 1; 0 <= aB; aB--) {
			var gh = l5[aB];
			bC.gV.gY(gh, bN.fa(nh * gx[gh], 32))
		}
	}

	function aKc() {
		var xh = aD.et;
		bQ.ff[0] = ag.hB[xh] - ag.a4e[xh]
	}

	function aKe(eG) {
		var xh = aD.et,
			xh = ag.hB[xh] - ag.a4e[xh] - bQ.ff[0];
		ae.aB7 += xh, bf.n0[eG] += xh
	}
	this.aB7 = 0, this.dn = function() {
		for (var f9 = aD.f6, aB = (aKR = new Uint16Array(f9), 0); aB < f9; aB++) aKR[aB] = 100 + aKS(bN.fa(25600 * aB, f9 - 4), 9)
	}, this.dh = function() {
		(this.aB7 = 0) === aD.data.iIncomeType ? this.aCX = aKT : 1 === aD.data.iIncomeType ? this.aCX = function(player) {
			return bN.fa(aD.data.iIncomeValue * aKT(player), 64)
		} : this.aCX = function(player) {
			return bN.fa(aD.data.iIncomeData[player] * aKT(player), 64)
		}
	}, this.ec = function() {
		if (bh.kR() % 10 == 9 && (ae.aB7 = 0, function() {
				aKc();
				for (var l5 = al.l5, hB = ag.hB, aB = al.l0 - 1; 0 <= aB; aB--) {
					var gh = l5[aB],
						aKd = bN.fa(ae.aCX(gh) * hB[gh], 1e4);
					bC.gV.gY(gh, Math.max(aKd, 1))
				}
				aKe(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aKc(), 1 === aD.data.aIncomeType)
						for (var gx = ag.gx, l5 = al.l5, nh = aD.data.aIncomeValue, aB = al.l0 - 1; 0 <= aB; aB--) {
							var gh = l5[aB];
							bC.gV.gY(gh, bN.fa(nh * gx[gh], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gx = ag.gx, l5 = al.l5, nh = aD.data.aIncomeData, aB = al.l0 - 1; 0 <= aB; aB--) {
								var gh = l5[aB];
								bC.gV.gY(gh, bN.fa(nh[gh] * gx[gh], 128))
							}
						}();
					aKe(18)
				}
			}(), bh.kR() % 100 == 99)) {
			if (aKc(), 0 === aD.data.tIncomeType) aKf(32);
			else if (1 === aD.data.tIncomeType) aKf(aD.data.tIncomeValue);
			else
				for (var gx = ag.gx, l5 = al.l5, nh = aD.data.tIncomeData, aB = al.l0 - 1; 0 <= aB; aB--) {
					var gh = l5[aB];
					bC.gV.gY(gh, bN.fa(nh[gh] * gx[gh], 32))
				}
			aKe(8)
		}
	}, this.kA = function(player) {
		return Math.min(100 * ag.gx[player], aD.a5Y)
	}, this.pW = function(player, pX) {
		bs.pt(player, pX, bQ.fg[0], 0), bC.gV.gY(pX, bQ.fg[0]), bf.pu(player, pX), af.aKV(player, bQ.fg[0] + bQ.fg[1]), af.pv(pX, bQ.fg[0]), bC.gV.me(player)
	}, this.aKW = function() {
		for (var f9 = al.l0, a0v = al.l5, lP = 0, a4f = ag.hB, aB = 0; aB < f9; aB++) lP += a4f[a0v[aB]];
		return lP
	}, this.aKX = function(aKY) {
		for (var gh, f9 = al.l0, a0v = al.l5, lP = 0, a4f = ag.hB, f7 = bi.f7, aB = 0; aB < f9; aB++) f7[gh = a0v[aB]] === aKY && (lP += a4f[gh]);
		return lP
	}
}

function cd() {
	var aKj, aKk, aKl, aKm, aKn, aKo, aKp, aKq, aKr, aKs, aKt, aKu, aKv, aKw, aKx, aKy, aKz, aL0, aL2, aL3, aDe, aL4, aL5, aLB, aLC, aL1 = null,
		aL7 = 0,
		aL8 = !1,
		aL9 = new Float32Array(4),
		aLA = 0,
		aBc = 112,
		aLD = 0;

	function r2() {
		aKr = Math.floor(+h.iJ), aKs = Math.floor(.5 * aKr), aL1.width = h.i, aL1.height = h.j, aL2 = aL1.getContext("2d", {
			alpha: !0
		}), bC.qz.textAlign(aL2, 1), bC.qz.textBaseline(aL2, 1), aL2.imageSmoothingEnabled = !0
	}

	function aLE() {
		var aB, aLJ;
		for (vf.font = bC.qz.sq(1, 100 * aKt), aLJ = 80 / Math.floor(vf.measureText(bC.ry.a0O(aD.a4h)).width), vf.font = bC.qz.sq(1, 100), aB = aD.f6 - 1; 0 <= aB; aB--) aKq[aB] = 100 / Math.floor(vf.measureText(ag.za[aB]).width), aKp[aB] = Math.min(
			aLJ, aKq[aB])
	}

	function aLK(aB) {
		return !aLD || (aB = ag.hB[aB]) < 1e6 ? 1 : aB < 1e7 ? aL9[0] : aL9[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aLI(iB) {
		aL8 = !1, aL7 = bh.eX, aL0 = !1, aKz = 1, aKx = aKy = 0, iB.clearRect(0, 0, h.i, h.j);
		for (var aLQ, aLR, aB, aLS, fontSize, aLT, nV = im / iK, nW = io / iK, ni = (h.i + im) / iK, nj = (h.j + io) / iK, aLU = 0 !== ag.n4[aD.et] && !bC.gV.jr(aD.et), fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS], (fontSize = Math.floor(aKw * iK *
			aLK(aB) * aKp[aB] * aKn[aB])) < aKv || aKr <= fontSize || aKl[aB] + aKn[aB] > nV && aKl[aB] < ni && aKm[aB] + aKo[aB] > nW && aKm[aB] < nj && (aLQ = Math.floor(h.i * (aKl[aB] + aKn[aB] / 2 - nV) / (ni - nV)), aLR = Math.floor(h.j * (
			aKm[aB] + aKo[aB] / 2 - nW) / (nj - nW) - .1 * fontSize), aLS = ac.a9X[aB], iB.font = bC.qz.sq(1 === ag.a4V[aB] ? 4 : 1, fontSize), iB.fillStyle = aLV(fontSize, aLS % 2), aLD ? aLW(iB, aB, fontSize, aLQ, aLR, aLS) : aLX(aB,
			fontSize, aLQ, aLR, iB), aL0 = !0, 0 < aDe[aB] ? function(aLQ, aLR, fontSize, aB, iB) {
			0 === kF[aB] ? aj.sF.a0F(aL3[aB]) ? (function(aLQ, aLR, fontSize, player, pi, iB) {
				for (var yE = aLR, iA = (iB.globalAlpha = aLf(fontSize), aLK(player) * (aLD ? aLA : aKq[player])), yD = aLQ - .5 * fontSize / iA - .9 * fontSize, fT = 0; fT < 2; fT++) iB.fillText(aj.sF.a07(pi), yD, yE), yD = aLQ +
					.5 * fontSize / iA + .9 * fontSize;
				iB.globalAlpha = 1
			}(aLQ, aLR, fontSize, aB, aL3[aB], iB), aLZ(aLQ, aLR, fontSize, 0, 0, iB)) : aj.sF.a0H(aL3[aB]) ? (aLi(aLQ, aLR, fontSize, aL3[aB], 0, iB), aLZ(aLQ, aLR, fontSize, 0, 1, iB)) : (aLi(aLQ, aLR, fontSize, aL3[aB], 1, iB), aLZ(
				aLQ, aLR, fontSize, 1, 0, iB)) : aLi(aLQ, aLR, fontSize, aL3[aB], 0, iB)
		}(aLQ, aLR, fontSize, aB, iB) : 0 === kF[aB] && aLZ(aLQ, aLR, fontSize, 0, 0, iB), aLU && (0 < aDe[aB + aD.f6] || 0 < aDe[aB + 2 * aD.f6] || 0 < aDe[aB + 3 * aD.f6] || 0 < aDe[aB + 4 * aD.f6]) && function(aLQ, aLR, fontSize, aB, iB) {
			var eh, gc = -1;
			for (eh = 4; 1 <= eh; eh--) 0 < aDe[aB + eh * aD.f6] && gc++;
			for (eh = 1; eh < 5; eh++) 0 < aDe[aB + eh * aD.f6] && (! function(aLQ, aLR, fontSize, eh, aB, aLd, eY, iB) {
				var a3z;
				if (1 === eh) {
					aB = aL3[aB + aD.f6];
					if (!aj.sF.a0G(aB)) return function(aLQ, aLR, fontSize, pi, aLd, iB) {
						iB.globalAlpha = aLf(fontSize);
						aLQ -= .534 * aLd * fontSize, aLd = aLR + 1.59 * fontSize;
						iB.font = bC.qz.sq(0, .785 * fontSize), iB.fillText(aj.sF.a07(pi), aLQ, aLd), iB.globalAlpha = 1
					}(aLQ, aLR, fontSize, aB, aLd, iB);
					a3z = aj.xg.zg[aB - 1024 + aj.sF.zs]
				} else a3z = 2 === eh ? aL.a6P()[4].canvas[+(eY < 255)] : (3 === eh ? aL.a6P()[5] : aL.a6P()[6]).canvas[0];
				aB = aj.xg.zh, eY = .8 * fontSize / aB, eh = aLQ - .5 * eY * aB - .534 * aLd * fontSize, aLQ = aLR + 1.4 * eY * aB;
				iB.setTransform(eY, 0, 0, eY, eh, aLQ), iB.globalAlpha = aLf(fontSize), iB.drawImage(a3z, 0, 0), iB.globalAlpha = 1, iB.setTransform(1, 0, 0, 1, 0, 0)
			}(aLQ, aLR, fontSize, eh, aB, gc, aDe[aB + eh * aD.f6], iB), gc -= 2)
		}(aLQ, aLR, fontSize, aB, iB), (aLT = aKt * fontSize) < aKv || (iB.font = bC.qz.sq(1, aLT), aLR += Math.floor(.78 * fontSize), aLD ? aLX(aB, aLT, aLQ, aLR, iB) : aLW(iB, aB, aLT, aLQ, aLR, aLS)))
	}

	function aLX(aB, fontSize, fG, fI, iB) {
		var ___id = aB;
		var showName = aB < aD.kU || !__fx.settings.hideBotNames;
		if (showName) iB.fillText(ag.za[aB], fG, fI), aB < aD.kU && 2 !== ag.a4V[aB] || (aB = fontSize / aKq[aB], iB.fillRect(fG - .5 * aB, fI + bC.qz.a08 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aLD && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iB.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iB.fillText(__fx.utils.getDensity(___id), fG, showName ? fI + fontSize : fI)
		);
	}

	function aLW(iB, aB, fontSize, aLQ, aLR, aLS) {
		var a4e = ag.a4e[aB],
			aB = bC.ry.a0O(ag.hB[aB] - a4e);
		a4e ? (a4e = iB.fillStyle, iB.fillStyle = aLV(fontSize, 2 + aLS % 2), iB.fillText(aB, aLQ, aLR), iB.fillStyle = a4e) : aLS >> 1 & 1 ? (iB.lineWidth = .05 * fontSize, iB.strokeStyle = aLV(fontSize, aLS % 2), iB.strokeText(aB, aLQ, aLR)) : (1 <
			aLS && (iB.lineWidth = .12 * fontSize, iB.strokeStyle = aLV(fontSize, aLS), iB.strokeText(aB, aLQ, aLR)), iB.fillText(aB, aLQ, aLR))
	}

	function aLZ(aLQ, aLR, fontSize, aLd, aLe, iB) {
		var a6u = .95 * fontSize / aL5,
			aLQ = aLQ - .5 * a6u * aL4 + .8 * aLd * fontSize,
			aLd = aLR - 1.76 * a6u * aL5 - (.35 - bC.qz.a08 + .7) * aLe * fontSize;
		iB.setTransform(a6u, 0, 0, a6u, aLQ, aLd), iB.globalAlpha = aLf(fontSize), iB.drawImage(ab.get(4), 0, 0), iB.globalAlpha = 1, iB.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLi(aLQ, aLR, fontSize, pi, aLd, iB) {
		var i5, yD, a6u;
		iB.globalAlpha = aLf(fontSize), aj.sF.a0G(pi) ? (i5 = aj.xg.zh, iB.setTransform(a6u = 1.1 * fontSize / i5, 0, 0, a6u, yD = aLQ - .5 * a6u * i5 - .8 * aLd * fontSize, a6u = aLR - 1.55 * a6u * i5), iB.drawImage(aj.xg.zg[pi - 1024 + aj.sF.zs],
			0, 0), iB.setTransform(1, 0, 0, 1, 0, 0)) : (yD = aLQ - .8 * aLd * fontSize, a6u = aLR - (.35 - bC.qz.a08 + 1) * fontSize, iB.fillText(aj.sF.a07(pi), yD, a6u)), iB.globalAlpha = 1
	}

	function aLV(fontSize, aLS) {
		return aKs <= fontSize && fontSize < aKr ? bi.aLk[aLS] + aLf(fontSize).toFixed(3) + ")" : bi.aLl[aLS]
	}

	function aLf(fontSize) {
		return aKs <= fontSize && fontSize < aKr ? 1 - (fontSize - aKs) / (aKr - aKs) : 1
	}

	function aLu(iA, i) {
		return 1 + Math.floor(aKu * iA * i)
	}

	function aLr(aB) {
		for (var left = aKl[aB], fS = aKl[aB] - ag.j2[aB] - 1; 0 <= fS; fS--)
			if (!aLw(aB, --left, aKm[aB], aKo[aB])) {
				left++;
				break
			} var right = aKl[aB];
		for (fS = ag.j3[aB] - aKl[aB] - aKn[aB]; 0 <= fS; fS--)
			if (!aLw(aB, ++right + aKn[aB] - 1, aKm[aB], aKo[aB])) {
				right--;
				break
			} var fG = Math.floor((left + right) / 2),
			top = aKm[aB];
		for (fS = aKm[aB] - ag.j4[aB] - 1; 0 <= fS; fS--)
			if (!aLx(aB, fG, --top, aKn[aB])) {
				top++;
				break
			} var bottom = aKm[aB];
		for (fS = ag.j5[aB] - aKm[aB] - aKo[aB]; 0 <= fS; fS--)
			if (!aLx(aB, fG, ++bottom + aKo[aB] - 1, aKn[aB])) {
				bottom--;
				break
			} var fI = Math.floor((top + bottom) / 2);
		aLo(aB, fG, fI, aKn[aB], aKo[aB]) && (aKl[aB] = fG, aKm[aB] = fI)
	}

	function aLo(player, fG, fI, i, j) {
		fC = Math.floor(.2 * i);
		for (var fC, eh = fG + i - 1; fG <= eh; eh--)
			if (!aLw(player, eh, fI, j)) return;
		for (eh = fI + j - 1 - (fC = (fC = Math.floor(.25 * j)) < 1 ? 1 : fC); fI + fC <= eh; eh--)
			if (!aLx(player, fG, eh, i)) return;
		return 1
	}

	function aLw(player, fG, fI, j) {
		return ac.z5(player, 4 * (fI * bU.fK + fG)) && ac.z5(player, 4 * ((fI + j - 1) * bU.fK + fG))
	}

	function aLx(player, fG, fI, i) {
		return ac.z5(player, 4 * (fI * bU.fK + fG)) && ac.z5(player, 4 * (fI * bU.fK + fG + i - 1))
	}
	this.dh = function() {
		if (aLD = bl.eU.data[7].value || 8 === aD.km, aL0 = !1, aKw = .88, aKt = .5, aKu = 1.8, aKv = 12 - 3 * bl.eU.data[9].value, aKk = aKj = 0, aKl = new Uint16Array(aD.f6), aKm = new Uint16Array(aD.f6), aKn = new Uint16Array(aD.f6), aKo =
			new Uint16Array(aD.f6), aKp = new Float32Array(aD.f6), aKq = new Float32Array(aD.f6), aL3 = new Uint16Array(2 * aD.f6), aDe = new Uint8Array(5 * aD.f6), aLB = new Uint8Array(aD.f6), aLC = new Uint8Array(aD.f6), aL1 = aL1 || document
			.createElement("canvas"), r2(), aKy = aKx = 0, aKz = 1, aLD) {
			var aB, aLJ;
			for (aLE(), vf.font = bC.qz.sq(1, 100), aLJ = 100 / Math.floor(vf.measureText("900 000").width), aB = aD.f6 - 1; 0 <= aB; aB--) aKp[aB] = Math.min(aLJ, 2 * aKq[aB]);
			aLA = aLJ, aL9[0] = 100 / (aLJ * Math.floor(vf.measureText("5 000 000").width)), aL9[1] = 100 / (aLJ * Math.floor(vf.measureText("50 000 000").width)), aL9[2] = 100 / (aLJ * Math.floor(vf.measureText("500 000 000").width)), aL9[3] =
				100 / (aLJ * Math.floor(vf.measureText("1 000 000 000").width))
		} else aLE();
		! function() {
			var aB;
			for (aB = aD.f6 - 1; 0 <= aB; aB--) ag.gx[aB] < 12 ? (aKl[aB] = ag.j2[aB] + 1, aKm[aB] = ag.j4[aB] + 1, aKn[aB] = 1, aKo[aB] = 1) : (aKl[aB] = ag.j2[aB], aKm[aB] = ag.j4[aB] + 1, aKn[aB] = 4, aKo[aB] = 2);
			if (aD.hX)
				for (aB = 0; aB < aD.kU; aB++) aKn[aB] = 0;
			aL4 = ab.get(4).width, aL5 = ab.get(4).height
		}()
	}, this.aKV = function(gh, a68) {
		a68 > 18 * ag.gx[gh] ? (aLC[gh] = 6, ac.a9X[gh] = 2 + ac.a9X[gh] % 2) : (aLB[gh] = 4, (ac.a9X[gh] < 2 || 3 < ac.a9X[gh]) && (ac.a9X[gh] = 6 + ac.a9X[gh] % 2))
	}, this.pv = function(gh, a68) {
		a68 > 6 * ag.gx[gh] ? (aLC[gh] = 6, ac.a9X[gh] = 4 + ac.a9X[gh] % 2) : (aLB[gh] = 4, (ac.a9X[gh] < 4 || 5 < ac.a9X[gh]) && (ac.a9X[gh] = 8 + ac.a9X[gh] % 2))
	}, this.resize = function() {
		r2(), aLI(aL2)
	}, this.a5U = function() {
		for (var aB = 0; aB < aD.kU; aB++) ag.j3[aB] - ag.j2[aB] != 3 || ag.j5[aB] - ag.j4[aB] != 3 ? (aKl[aB] = ag.j2[aB] + (ag.j3[aB] !== ag.j2[aB] ? 1 : 0), aKm[aB] = ag.j4[aB], aKn[aB] = 1, aKo[aB] = 1) : (aKl[aB] = ag.j2[aB], aKm[aB] = ag
			.j4[aB] + 1, aKn[aB] = 4, aKo[aB] = 2)
	}, this.qY = function(player, eG, aLL) {
		! function(player, eG, aLL) {
			player += eG * aD.f6;
			0 === eG ? aL3[player] === aLL && 0 < aDe[player] ? aDe[player] = 0 : (aL3[player] = aLL, aDe[player] = aj.sF.a0F(aLL) ? 255 : 64) : 1 === eG ? (aDe[player] = 64, aL3[player] = aLL) : aDe[player] = aLL
		}(player, eG, aLL), 2 === aD.a17 && this.mq(!0)
	}, this.ve = function() {
		aL0 && (1 !== aKz ? (vf.imageSmoothingEnabled = !0, vf.setTransform(aKz, 0, 0, aKz, 0, 0), vf.drawImage(aL1, -aKx / aKz, -aKy / aKz), vf.setTransform(1, 0, 0, 1, 0, 0), vf.imageSmoothingEnabled = !1) : vf.drawImage(aL1, -aKx, -aKy))
	}, this.aAK = function(iT, iW) {
		aKx += iT, aKy += iW
	}, this.a2f = function(iT, iW) {
		af.aAK(iT, iW)
	}, this.zoom = function(a3Y, lj, lk) {
		aKz *= a3Y, aKx = (aKx + lj) * a3Y - lj, aKy = (aKy + lk) * a3Y - lk
	}, this.aIt = function(player) {
		var j2 = ag.j2[player],
			j3 = ag.j3[player],
			j4 = ag.j4[player],
			j5 = ag.j5[player],
			ig = bO.hP(0),
			ih = bO.hR(0),
			ii = bO.hP(h.i),
			ij = bO.hR(h.j);
		j2 < ii && ig < j3 && j4 < ij && ih < j5 && (aKn[player] = 0, aL8 = !0)
	}, this.mq = function(bw) {
		return !(!aL8 && !bw && bh.eX < aL7 + (1 === aKz && 0 === aKx && 0 === aKy && (aD.a5x() || aD.hX || 2 === aD.a17) ? 1e3 : aBc) || (aLI(aL2), 0))
	}, this.aLO = function(aB) {
		return aLK(aB) * aKp[aB]
	}, this.aLP = function(player) {
		return aKp[player]
	}, this.ec = function() {
		bh.kR() % 10 == 9 && (aL8 = aL8 || aD.a5z() && !aD.a5x()), !aD.a5x() && 4 <= ++aKk && function() {
			var aB, fS, fT;
			for (aKk = 0, fT = 4; 1 <= fT; fT--)
				for (fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS] + fT * aD.f6, 0 < aDe[aB] && aDe[aB] < 255 && aDe[aB]--;
			if (2 !== aD.a17)
				for (fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS], 0 < aDe[aB] && aDe[aB] < 255 && aDe[aB]--
		}();
		var aB, fS, f9 = Math.floor(.1 * al.l0);
		for (f9 = (f9 = f9 < 8 ? 8 : f9) > al.l0 ? al.l0 : f9, aB = aKj + f9 - 1; aKj <= aB; aB--) fS = aB % al.l0, ! function(aB) {
			var iA = aLK(aB) * aKp[aB];
			0 < aKn[aB] && aLo(aB, aKl[aB], aKm[aB], aKn[aB], aKo[aB]) ? ! function(aB) {
				for (var fG, fI, i, j, en = !1, fT = 0; fT < 8; fT++) {
					if (i = aKn[aB] + 2, j = aKo[aB] + 2, i > ag.j3[aB] - ag.j2[aB] + 1 || j > ag.j5[aB] - ag.j4[aB] + 1) return en;
					if (fG = aKl[aB] - 1, fI = aKm[aB] - 1, !aLo(aB, fG, fI, i, j)) return en;
					aKl[aB] = fG, aKm[aB] = fI, aKn[aB] = i, aKo[aB] = j, en = !0
				}
				return en
			}(aB) && function(aB, iA) {
				for (var fG, fI, i, j, en = !1, aDn = aKn[aB], nh = 1 + Math.floor(.02 * aDn), fT = 1; fT < 5; fT++) {
					if ((i = aDn + fT * nh) > ag.j3[aB] - ag.j2[aB] + 1) return en;
					if ((j = aLu(iA, i)) > ag.j5[aB] - ag.j4[aB] + 1) return en;
					fG = ag.j2[aB] + Math.floor(Math.random() * (ag.j3[aB] - ag.j2[aB] + 2 - i)), fI = ag.j4[aB] + Math.floor(Math.random() * (ag.j5[aB] - ag.j4[aB] + 2 - j)), aLo(aB, fG, fI, i, j) && (aKl[aB] = fG, aKm[aB] = fI, aKn[
						aB] = i, aKo[aB] = j, en = !0)
				}
				return en
			}(aB, iA) && aLr(aB) : ! function(aB, iA) {
				var j, fG = aKl[aB] + 1,
					fI = aKm[aB] + 1,
					i = aKn[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKn[aB] = 0;
						break
					}
					if (j = aLu(iA, i), aLo(aB, fG, fI, i, j)) return aKl[aB] = fG, aKm[aB] = fI, aKn[aB] = i, aKo[aB] = j, 1;
					fG++, fI++, i -= 2
				}
				return
			}(aB, iA) ? function(aB, iA) {
				var fG, fI, i, j, fT, nn, jk = ag.j3[aB] - ag.j2[aB] + 1,
					aLv = Math.floor(.02 * jk);
				for (nn = -6 * (aLv = aLv < 1 ? 1 : aLv), fT = jk; nn <= fT; fT -= aLv)
					if (j = aLu(iA, i = 0 < fT ? fT : 1), fG = ag.j2[aB] + Math.floor(Math.random() * (ag.j3[aB] - ag.j2[aB] + 2 - i)), fI = ag.j4[aB] + Math.floor(Math.random() * (ag.j5[aB] - ag.j4[aB] + 2 - j)), aLo(aB, fG, fI, i, j))
						return aKl[aB] = fG, aKm[aB] = fI, aKn[aB] = i, aKo[aB] = j
			}(aB, iA) : aLr(aB)
		}(al.l5[fS]);
		aKj = (aKj += f9) % al.l0
	}, this.mk = function() {
		var aB, gh, a0D, a0E;
		if (bh.kR() % 4 == 1)
			for (aB = al.l0 - 1; 0 <= aB; aB--) gh = al.l5[aB], ac.a9X[gh] < 2 || ((a0D = Math.max(aLB[gh] - 1, 0)) === (a0E = Math.max(aLC[gh] - 1, 0)) ? 0 === a0D && (ac.a9X[gh] %= 2) : 0 === a0E && ac.a9X[gh] < 6 && (ac.a9X[gh] += 4), aLB[
				gh] = a0D, aLC[gh] = a0E)
	}, this.a7c = function(player) {
		var aB = player + 2 * aD.f6,
			eY = aDe[aB];
		return 0 < eY && (aN.a1F(50, player), aDe[aB] = 0, 255 === eY)
	}, this.a6e = function(player) {
		return 255 === aDe[player + 2 * aD.f6]
	}
}

function cf() {
	var aLy, aLz, aM0;
	this.dh = function() {
		aLy =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLz =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aM0 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7t = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEf = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLy.length - 1; 0 <= aB; aB--)
			for (var fS = a7t.length - 1; 0 <= fS; fS--) aLy[aB] = aLy[aB].replace(a7t[fS], aEf[fS]);
		if (__fx.settings.realisticNames) aLy = realisticNames;
	}, this.a5k = function() {
		var f9 = aD.kU,
			za = ag.za,
			a1n = ag.a1n,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f9)
			for (var aB = 0; aB < f9; aB++) za[aB] = a1n[aB] = "Player " + ay.jl(1e3);
		else
			for (aB = 0; aB < f9; aB++) za[aB] = a1n[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.km) {
			for (var eF = ay.random(), aM6 = aM0, aM7 = aLz, hs = aE.hs, f9 = aM6.length, lP = aD.data.teamPlayerCount[7], za = ag.za, a1n = ag.a1n, aB = lP - 1; aB >= aD.kU; aB--) za[aB] = a1n[aB] = aM6[(aB + eF) % f9];
			for (f9 = aM7.length - 1, aB = lP; aB < aD.f6; aB++) za[aB] = a1n[aB] = aM7[hs[aB] ? f9 : aB % f9]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f9 = aD.f6, za = ag.za, a1n = ag.a1n, playerNamesData = aD.data.playerNamesData, aB = aD.kU; aB < f9; aB++) za[aB] = a1n[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var za = ag.za, a1n = ag.a1n, aB = aD.kU; aB < aD.f6; aB++) za[aB] = a1n[aB] = "Bot " + ay.jl(1e3)
		} : function() {
			for (var aM8 = aLy, f9 = aM8.length, eF = ay.random(), za = ag.za, a1n = ag.a1n, aB = aD.kU; aB < aD.f6; aB++) za[aB] = a1n[aB] = aM8[(aB + eF) % f9]
		})()
	}
}

function cy() {
	this.aM9 = [], this.aMA = [], this.dh = function() {
		this.aM9 = [], this.aMA = []
	}, this.ec = function() {
		0 <= this.aM9.length && this.aMB(this.aM9), 0 <= this.aMA.length && this.aMB(this.aMA)
	}, this.aMB = function(g) {
		for (var fT = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eX--, g[aB].eX <= 0) {
				fT = aB;
				break
			} for (aB = fT; 0 <= aB; aB--) g.shift()
	}, this.a6X = function(id, a0v, aMC) {
		return this.fU(this.aM9, id, a0v, aMC)
	}, this.aMD = function(id, a0v, aMC) {
		return this.fU(this.aMA, id, a0v, aMC)
	}, this.fU = function(g, id, a0v, aMC) {
		return ! function(g, id, a0v) {
			var aB, i1;
			for (aB = a0v.length - 1; 0 <= aB; aB--)
				for (i1 = g.length - 1; 0 <= i1; i1--)
					if (g[i1].player === a0v[aB] && id === g[i1].id) return 1;
			return
		}(g, id, a0v) && (aMC && function(g, id, a0v) {
			var aB;
			for (aB = a0v.length - 1; 0 <= aB; aB--) g.push({
				player: a0v[aB],
				id: id,
				eX: 384
			})
		}(g, id, a0v), !0)
	}
}

function ce() {
	this.a1n = new Array(aD.f6), this.za = new Array(aD.f6), this.a4V = new Uint8Array(aD.f6), this.n4 = new Uint8Array(aD.f6), this.j2 = new Uint16Array(aD.f6), this.j4 = new Uint16Array(aD.f6), this.j3 = new Uint16Array(aD.f6), this.j5 =
		new Uint16Array(aD.f6), this.gx = new Uint32Array(aD.f6), this.yf = new Uint32Array(aD.f6), this.hB = new Uint32Array(aD.f6), this.gb = null, this.gp = null, this.gq = null, this.fY = null, this.qO = new Uint16Array(aD.f6), this.jX =
		new Uint16Array(aD.f6), this.jY = new Uint16Array(aD.f6), this.a1i = new Uint16Array(aD.f6), this.a1g = new Uint8Array(aD.f6), this.a4e = new Uint16Array(aD.f6), this.dh = function() {
			this.a1n.fill(""), this.za.fill(""), this.a4V.fill(0), this.n4.fill(0), this.j2.fill(0), this.j4.fill(0), this.j3.fill(0), this.j5.fill(0), this.gx.fill(0), this.yf.fill(0), this.hB.fill(0), this.gb = new Array(aD.f6), this.gp =
				new Array(aD.f6), this.gq = new Array(aD.f6), this.fY = new Array(aD.f6), this.qO.fill(0), this.jX.fill(0), this.jY.fill(0), this.a1i.fill(0), this.a1g.fill(0), this.a4e.fill(0)
		}
}

function cw() {
	this.aEA = function(player) {
		aG.n3(player), aD.a19++, ag.a4V[player] = 2, ag.a1i[player] = bk.a1x.aJ2(), player === aD.et && (aX.show(!1, !1), aW.aCJ(), bT.a0s.a1e()), af.a7c(player)
	}
}

function cX() {
	this.l5 = null, this.l0 = 0, this.a5o = function() {
		for (this.l0 = 0, aB = aD.f6 - 1; 0 <= aB; aB--) 0 !== ag.n4[aB] && this.l0++;
		this.l5 = new Uint16Array(this.l0);
		for (var f9 = 0, aB = 0; aB < aD.f6; aB++) 0 !== ag.n4[aB] && (this.l5[f9++] = aB)
	}, this.mj = function() {
		for (var gx = ag.gx, yf = ag.yf, a1g = ag.a1g, l5 = al.l5, aB = al.l0 - 1; 0 <= aB; aB--) {
			var gh = l5[aB],
				eY = gx[gh],
				lP = yf[gh];
			eY <= bN.fa(lP, 4) ? ak.dq(gh) : lP <= eY ? 250 <= (yf[gh] = eY) && (a1g[gh] = 1) : yf[gh] = lP - Math.max(1, bN.fa(lP - eY, 1e3))
		}
		this.aMH()
	}, this.aMH = function() {
		for (var n4 = ag.n4, lO = this.l5, aD1 = this.l0, aB = aD1 - 1; 0 <= aB; aB--) 0 === n4[lO[aB]] && (lO[aB] = lO[--aD1]);
		this.l0 = aD1
	}
}

function cY() {
	var aMI = new Uint16Array(aD.f6),
		aMJ = 0;

	function aMN(a7i, aML) {
		var eh = bh.kR();
		return 3213 <= eh ? 4 + bN.fa(100 * aML, ae.kA(a7i)) : (a7i = 1 + bN.fa(aD.kE, 300), eh < 357 ? 2 + bN.fa(100 * aML, a7i) : eh < 714 ? 2 + bN.fa(100 * aML, 4 * a7i) : eh < 1071 ? 2 + bN.fa(100 * aML, 10 * a7i) : eh < 2142 ? 2 + bN.fa(100 *
			aML, 30 * a7i) : 2 + bN.fa(100 * aML, 100 * a7i))
	}

	function aMM(a7i) {
		return aD.ko || 7 <= aD.km || 4284 <= bh.kR() || bC.gV.jr(a7i)
	}
	this.dh = function() {
		aMI.fill(0), aMJ = 15
	}, this.hn = function(pX) {
		var player = aD.et;
		return !!bC.gV.qQ(player, pX) && !(!bC.gV.pq(player, bC.gV.ik(player, aR.hd()), pX) || (player = pX, pX = bQ.fg[0], !aMM(player) && aMI[player] + aMN(player, pX) > aMJ))
	}, this.eg = function(a7i, aML) {
		if (!aMM(a7i)) {
			aML = aMN(a7i, aML);
			if (aMI[a7i] + aML > aMJ) return !1;
			aMI[a7i] += aML
		}
		return !0
	}, this.ec = function() {
		bh.kR() % 100 == 99 && (bh.kR() < 1071 ? aMJ += 4 : bh.kR() < 2142 ? aMJ += 6 : bh.kR() < 3213 ? aMJ += 8 : aMJ += 10)
	}
}

function cg() {
	var aMO;
	this.kv = null, this.ku = 0, this.dh = function() {
		aMO = [], 9 === aD.km && this.aMP()
	}, this.aMP = function() {
		this.kv = [0, 0, 0, 0, 0, 0];
		for (var aMQ = [256, 227, 170, 148, 100, this.ku = 0, 0, 0], aMR = [0, 8, 24, 30, 46, 70, 256, 333], aMS = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kU, aB = 1; aB < aMQ.length; aB++)
			if (j <= aMR[aB]) {
				this.ku = aMQ[aB - 1] - bN.fa((j - aMR[aB - 1]) * (aMQ[aB - 1] - aMQ[aB]), aMR[aB] - aMR[aB - 1]), this.kv[5] = aMS[aB - 1] - bN.fa((j - aMR[aB - 1]) * (aMS[aB - 1] - aMS[aB]), aMR[aB] - aMR[aB - 1]), this.kv[0] = aD.f6 - j - this
					.ku - this.kv[5];
				break
			} aD.kq = aD.f6 - aD.kU, aD.data.numberTeams = (0 < aD.kU) + (0 < aD.kq), aD.data.playerCount = aD.yB = aD.kU + aD.kq, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kU + this.ku, aD.kq - this.ku]), aD.a5d.a5i()
	}, this.aJ9 = function(player) {
		aMO.push({
			player: player,
			gc: 14 + ay.jl(20)
		})
	}, this.ec = function() {
		if (9 === aD.km)
			for (var aB = aMO.length - 1; 0 <= aB; aB--) --aMO[aB].gc <= 0 && (af.qY(aMO[aB].player, 0, aj.sF.zv + aj.sF.a09), aMO.splice(aB))
	}
}

function dF() {
	function aMi() {
		return {
			fK: bU.fK,
			fL: bU.fL,
			xd: bU.xd,
			xZ: bU.xZ,
			xa: bU.xa,
			xe: bU.xe,
			ep: bU.ep,
			mapSeed: bU.mapSeed,
			xb: bU.xb
		}
	}

	function aMa(aB) {
		return 1 !== aB && bU.aEp(aB) && aB !== bU.aMk()
	}
	this.aMU = 25, this.aMV = 13, this.aJL = 4096, this.fK = 0, this.fL = 0, this.xd = null, this.xZ = null, this.xa = null, this.xe = null, this.ep = 0, this.mapSeed = 0, this.xb = !1, this.xc = new aMW, this.xT = new aMX, this.a80 = new aMY, this
		.dh = function() {
			this.xT.dh()
		}, this.a7 = function(map, aMZ) {
			((map %= this.aMU) !== this.ep || aMa(this.ep) && aMZ !== this.mapSeed) && (this.xb = !1, this.xc.aMb(), ay.a5j(map), this.ep = map, this.mapSeed = aMZ, aMa(map) && (bU.xT.xU[map].aMc = aMZ), this.aEp(this.ep) ? (map = bU.xT.xU[this.ep],
				this.fK = map.i, this.fL = map.j, ay.a5j(map.aMc), aq.a7([this.fK, this.fL, map.n9, map.n6]), aMe(), ap.aMf(), aq.aMg()) : aMd())
		}, this.aMh = function(map, aMZ) {
			var fs = aMi(),
				map = (this.a7(map, aMZ), this.xc.aMb(), aMi());
			return aMZ = fs, bU.fK = aMZ.fK, bU.fL = aMZ.fL, bU.xd = aMZ.xd, bU.xZ = aMZ.xZ, bU.xa = aMZ.xa, bU.xe = aMZ.xe, bU.ep = aMZ.ep, bU.mapSeed = aMZ.mapSeed, bU.xb = aMZ.xb, map
		}, this.a64 = function(canvas) {
			canvas && this.xd !== canvas && (this.fK = canvas.width, this.fL = canvas.height, this.xd = canvas, this.xZ = this.xd.getContext("2d", {
				alpha: !1
			}), this.i8 = this.xZ.getImageData(0, 0, this.fK, this.fL), this.xe = this.i8.data, this.ep = this.aMk(), this.mapSeed = 0, bU.xT.xU[this.ep].name = aD.data.mapName)
		}, this.eo = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aMk()
		}, this.aMl = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aMm = function(aB) {
			return 1 === aB
		}, this.aMk = function() {
			return this.aMU
		}, this.aEp = function(aB) {
			return void 0 === this.xT.xU[aB].aMn
		}, this.a63 = function(qr) {
			return 0 === qr.mapType ? qr.mapProceduralIndex < 10 ? qr.mapProceduralIndex : 10 + qr.mapProceduralIndex : 1 === qr.mapType ? 10 <= qr.mapRealisticIndex ? 22 + qr.mapRealisticIndex - 10 : qr.mapRealisticIndex + 10 : void 0
		}, this.aEq = function(qr, aMo) {
			0 === qr.mapType ? qr.mapProceduralIndex = aMo < 10 ? aMo : aMo - 10 : 1 === qr.mapType && (qr.mapRealisticIndex = aMo - (22 <= aMo ? 12 : 10))
		}
}

function aMW() {
	function aMx() {
		bU.xc.ec()
	}

	function aN3(gh, aN2) {
		0 < aN2 && (bU.xe[gh] += aN2, bU.xe[gh + 1] += aN2, bU.xe[gh + 2] += aN2)
	}

	function iN(gh) {
		return bU.xe[gh + 2] > bU.xe[gh] && bU.xe[gh + 2] > bU.xe[gh + 1]
	}
	this.aAW = -1, this.a2A = 0, this.aMp = 0, this.aMq = 8, this.aMr = 32, this.aMs = 8, this.aMt = 32, this.aMu = [0, 0], this.a9X = [0, 0, 0, 0], this.iw = null, this.aMv = !0, this.aMw = !1, this.aMb = function() {
		-1 !== this.aAW && clearTimeout(this.aAW), this.aAW = -1, this.iw = null, aq.aMg()
	}, this.dh = function() {
		7 === aa.a2J() || this.aMw || (this.aMv = !0, this.a2A = 0, this.aMp = 1, this.aMu = [bU.xT.xU[bU.ep].xv[0], bU.xT.xU[bU.ep].xw[0]], this.a9X = [bU.xT.xU[bU.ep].aMn[3], bU.xT.xU[bU.ep].aMn[4], bU.xT.xU[bU.ep].aMn[5], bU.xT.xU[bU.ep].aMn[
			6]], this.aMq = bU.xT.xU[bU.ep].aMn[7], this.aMr = bU.xT.xU[bU.ep].aMn[8], this.aMs = bU.xT.xU[bU.ep].aMn[9], this.aMt = bU.xT.xU[bU.ep].aMn[10], this.aMv ? this.aAW = setTimeout(aMx, 16) : this.ec())
	}, this.ec = function() {
		if (8 === aa.a2J() && aH.nN()) this.aAW = setTimeout(aMx, 16);
		else {
			if (0 === this.a2A) {
				var aMc = ay.aMy();
				if (ay.a5j(bU.xT.xU[bU.ep].aMn[2]), aq.a7([bU.fK, bU.fL, bU.xT.xU[bU.ep].aMn[0], bU.xT.xU[bU.ep].aMn[1]]), ay.a5j(aMc), this.iw = aq.aMz(), this.a2A++, this.aMv) return void(this.aAW = setTimeout(aMx, 16))
			}
			for (var gh, ev, aMc = this.aMv ? 10 : 1e6, aMc = bU.fL - this.aMp - 1 < aMc ? bU.fL - this.aMp - 1 : aMc, ys = this.aMp + aMc, fI = this.aMp; fI < ys; fI++)
				for (var fG = 1; fG < bU.fK - 1; fG++) iN(gh = 4 * (ev = fG + fI * bU.fK)) ? this.aN0(gh, ev, 1) : (this.aN0(gh, ev, 0), function(fG, fI, gh) {
					return 1 < fG && iN(gh - 4) || fG < bU.fK - 2 && iN(gh + 4) || 1 < fI && iN(gh - 4 * bU.fK) || fI < bU.fL - 2 && iN(gh + 4 * bU.fK)
				}(fG, fI, gh) && this.aN1(fG, fI));
			this.aMp = ys, this.aMp >= bU.fL - 1 ? (bU.xZ.putImageData(bU.xa, 0, 0, 1, 1, bU.fK - 2, bU.fL - 2), bh.dp = !0, this.aMb()) : this.aMv && (this.aAW = setTimeout(aMx, 16))
		}
	}, this.aN0 = function(gh, ev, eG) {
		aN3(gh, Math.floor(this.aMu[eG] + this.a9X[eG] * this.iw[ev] / 1e4) - bU.xe[gh])
	}, this.aN4 = function(gh, eF, aN5, eG, a9X) {
		aN3(gh, Math.floor(this.aMu[eG] + (1 - eF / aN5) * a9X) - bU.xe[gh])
	}, this.aN1 = function(lj, lk) {
		for (var gh, eF, aN5, aAM = lj - this.aMr, aN6 = lk - this.aMr, yt = lj + this.aMr, ys = lk + this.aMr, aAM = aAM < 1 ? 1 : aAM, yt = yt > bU.fK - 2 ? bU.fK - 2 : yt, ys = ys > bU.fL - 2 ? bU.fL - 2 : ys, fI = aN6 < 1 ? 1 : aN6; fI <=
			ys; fI++)
			for (var fG = aAM; fG <= yt; fG++) iN(gh = 4 * (fG + fI * bU.fK)) ? (aN5 = this.aMq + (this.aMr - this.aMq) * this.iw[fG + bU.fK * fI] / 1e4, Math.abs(lj - fG) > aN5 || Math.abs(lk - fI) > aN5 || aN5 <= (eF = Math.sqrt((lj - fG) * (
				lj - fG) + (lk - fI) * (lk - fI))) || this.aN4(gh, eF, aN5, 1, this.a9X[3])) : (aN5 = this.aMs + (this.aMt - this.aMs) * this.iw[fG + bU.fK * fI] / 1e4, Math.abs(lj - fG) > aN5 || Math.abs(lk - fI) > aN5 || aN5 <= (eF = Math
				.sqrt((lj - fG) * (lj - fG) + (lk - fI) * (lk - fI))) || this.aN4(gh, eF, aN5, 0, this.a9X[2]))
	}
}

function aMe() {
	var t0 = aN7(bU.ep);
	t0 && aN8(t0[0], t0[1], t0[2], t0[3], t0[4])
}

function aN7(ep) {
	return 2 === ep ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ep ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ep ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ep ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ep ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aN8(aN9, aNA, aNB, aNC, aND) {
	for (var fG, fI, aNF, aNG, a3Y, aNI, iS = aN9.length - 1, aNE = bU.fK + bU.fL, f9 = (aNE *= aNE, aNB.length), aNH = Array(f9), aB = f9 - 1; 0 <= aB; aB--) aNH[aB] = aNB[aB] * aNB[aB];
	var aNJ = new Array(f9),
		aDb = new Array(f9),
		aNK = new Array(f9),
		fb = aq.aMz();
	if (void 0 === aND)
		for (aND = new Array(f9), aB = f9 - 1; 0 <= aB; aB--) aND[aB] = 0;
	for (aB = 1; aB < f9; aB++) aNJ[aB] = aNH[aB] - aNH[aB - 1], aDb[aB] = aNC[aB] - aNC[aB - 1], aNK[aB] = aND[aB] - aND[aB - 1];
	for (fG = bU.fK - 1; 0 <= fG; fG--)
		for (fI = bU.fL - 1; 0 <= fI; fI--) {
			for (aNF = aNE, aB = iS; 0 <= aB; aB--) aNF = (aNG = (fG - aN9[aB]) * (fG - aN9[aB]) + (fI - aNA[aB]) * (fI - aNA[aB])) < aNF ? aNG : aNF;
			for (a3Y = aNC[f9 - 1], aNI = aND[f9 - 1], aB = 1; aB < f9; aB++)
				if (aNF < aNH[aB]) {
					a3Y = aNC[aB - 1] + aIT((aNF - aNH[aB - 1]) * aDb[aB], aNJ[aB]), aNI = aND[aB - 1] + aIT((aNF - aNH[aB - 1]) * aNK[aB], aNJ[aB]);
					break
				} aNL(bU.fK * fI + fG, a3Y, aNI, fb)
		}
}

function aNL(eG, a3Y, aNI, fb) {
	a3Y < 500 ? fb[eG] = bN.fa(fb[eG] * a3Y * 2, 1e3) : 500 < a3Y && (fb[eG] += bN.fa(2 * (1e4 - fb[eG]) * (a3Y - 500), 1e3)), fb[eG] += bN.fa(aNI * (10 * a3Y - fb[eG]), 1e3)
}

function ci() {
	var aNM;

	function aNW(a3z, iA, fG, fI, globalAlpha) {
		bU.xZ.save(), bU.xZ.globalAlpha = globalAlpha, bU.xZ.imageSmoothingEnabled = !1, bU.xZ.scale(iA, iA), bU.xZ.drawImage(a3z, Math.floor(fG * (bU.fK / iA - a3z.width)), Math.floor(fI * (bU.fL / iA - a3z.height))), bU.xZ.restore()
	}
	this.a7x = 0, this.a7y = 0, this.a7z = 0, this.a80 = 0, this.dh = function() {
		(aNM = new Array(bU.aMU))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eF: [220, 250, 255, 220],
			th: [190, 220, 0, 0],
			fT: [170, 200, 0, 0]
		}, aNM[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eF: [25, 0, 100, 0, 25],
			th: [25, 0, 0, 0, 25],
			fT: [25, 0, 0, 0, 25]
		}, aNM[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eF: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			th: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fT: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aNM[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eF: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			th: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fT: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aNM[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eF: [10, 10, 20, 10, 10, 170, 212],
			th: [20, 20, 60, 100, 100, 110, 170],
			fT: [70, 70, 160, 30, 30, 60, 120]
		}, aNM[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eF: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			th: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fT: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aNM[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eF: [10, 10, 60, 255, 255, 200, 200],
			th: [10, 10, 60, 255, 255, 200, 200],
			fT: [80, 80, 255, 255, 255, 200, 200]
		}, aNM[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			th: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fT: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aNM[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eF: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			th: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fT: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aNM[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			th: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fT: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aNM[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eF: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			th: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fT: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aNM[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eF: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			th: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fT: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMf = function() {
		var aNV, aB, fS, fs, i8 = function() {
				var i8;
				return bU.xd = document.createElement("canvas"), bU.xd.width = bU.fK, bU.xd.height = bU.fL, bU.xZ = bU.xd.getContext("2d", {
					alpha: !1
				}), i8 = bU.xZ.getImageData(0, 0, bU.fK, bU.fL), bU.xe = i8.data, i8
			}(),
			i = aNM[bU.ep].i,
			eF = aNM[bU.ep].eF,
			th = aNM[bU.ep].th,
			fT = aNM[bU.ep].fT,
			fb = aq.aMz(),
			f9 = i.length - 2,
			aNQ = new Array(1 + f9),
			aNR = new Array(1 + f9),
			aNS = new Array(1 + f9),
			aNT = new Array(1 + f9);
		for (fS = f9; 0 <= fS; fS--) aNQ[fS] = i[fS + 1] - i[fS], aNR[fS] = eF[fS + 1] - eF[fS], aNS[fS] = th[fS + 1] - th[fS], aNT[fS] = fT[fS + 1] - fT[fS];
		for (aB = bU.fK * bU.fL - 1; 0 <= aB; aB--)
			for (fS = f9; 0 <= fS; fS--)
				if (fb[aB] >= i[fS]) {
					fs = fb[aB] - i[fS], bU.xe[4 * aB] = eF[fS] + aIT(aNR[fS] * fs, aNQ[fS]), bU.xe[4 * aB + 1] = th[fS] + aIT(aNS[fS] * fs, aNQ[fS]), bU.xe[4 * aB + 2] = fT[fS] + aIT(aNT[fS] * fs, aNQ[fS]), bU.xe[4 * aB + 3] = 255;
					break
				} bU.xZ.putImageData(i8, 0, 0), bU.aMm(bU.ep) && ab.tl() && bU.aMm(bU.ep) && (i8 = ab.aHd("arena"), aNV = ab.aHd("territorial.io"), aNW(i8, 5, .5, .5, .1), aNW(aNV, 2, .5, .45, .1)), bU.xb = !0, bh.dp = !0
	}, this.a5m = function() {
		for (var gh, fG, fI, aNX, hz, fu, a7y = 0, i = bU.fK, j = bU.fL, fs = i * j * 4, aNY = aDA, aNZ = bU.xe, aB = i - 1; 0 <= aB; aB--) aNY[(gh = aB << 2) + 2] = aNY[fs - gh - 2] = 3;
		for (fs = 4 * i, aB = j - 1; 0 <= aB; aB--) aNY[(gh = aB * fs) + 2] = aNY[gh + fs - 2] = 3;
		for (aNX = i - 1, hz = j - 1, fI = 1; fI < hz; fI++)
			for (fs = fI * i, fG = 1; fG < aNX; fG++) fu = 1 - (aNZ[(gh = fs + fG << 2) + 2] > aNZ[gh + 1] && aNZ[gh + 2] > aNZ[gh]), aNY[gh + 2] = 6 - 5 * fu, a7y += fu;
		this.a7x = (i - 2) * (j - 2), this.a80 = 0, bU.eo(bU.ep) && (bU.a80.aNa(), bU.a80.aNb(4, 5)), this.a7y = aD.kE = a7y - this.a80, this.a7z = this.a7x - this.a7y - this.a80, this.a7z && (bU.a80.aNb(6, 2), bU.a80.aNc())
	}
}

function aMd() {
	var qg;
	10 === bU.ep ? qg =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bU.ep ? qg =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bU.ep ? qg =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bU.ep ? qg =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bU.ep ? qg =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bU.ep ? qg =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bU.ep ? qg =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bU.ep ? qg =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bU.ep ? qg =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bU.ep ? qg =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bU.ep ? qg =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bU.ep ? qg =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bU.ep && (qg =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xM).xO(qg)
}

function aMX() {
	this.xU = null, this.aNd = null, this.aNe = null, this.dh = function() {
		this.aNf = [L(139), L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), "Mare Nostrum"];
		var aNg = [120, 105, 92],
			cos = [12, 12, 60],
			aNh = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aNi = [140, 130, 120],
			aNj = [12, 12, 76],
			aNk = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aNl = [130, 117, 106],
			aNm = [12, 12, 68],
			aNn = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xU = new Array(bU.aMU + 1), this.xU[0] = {
			i: 230,
			j: 230,
			n9: 1e3,
			n6: 2e3,
			aMc: 173
		}, this.xU[1] = {
			i: 800,
			j: 800,
			n9: 100,
			n6: 50,
			aMc: 43
		}, this.xU[2] = {
			i: 512,
			j: 512,
			n9: 128,
			n6: 32,
			aMc: 0
		}, this.xU[3] = {
			i: 960,
			j: 960,
			n9: 60,
			n6: 8,
			aMc: 0
		}, this.xU[4] = {
			i: 900,
			j: 900,
			n9: 100,
			n6: 5,
			aMc: 0
		}, this.xU[5] = {
			i: 1e3,
			j: 1e3,
			n9: 100,
			n6: 40,
			aMc: 0
		}, this.xU[6] = {
			i: 1e3,
			j: 1e3,
			n9: 100,
			n6: 20,
			aMc: 0
		}, this.xU[7] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMc: 0
		}, this.xU[8] = {
			i: 820,
			j: 820,
			n9: 200,
			n6: 100,
			aMc: 0
		}, this.xU[9] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMc: 0
		}, this.xU[10] = {
			xv: aNi,
			xw: aNj,
			aMn: aNk
		}, this.xU[11] = {
			xv: aNl,
			xw: aNm,
			aMn: aNn
		}, this.xU[12] = {
			xv: aNl,
			xw: aNm,
			aMn: aNn
		}, this.xU[13] = {
			xv: aNg,
			xw: cos,
			aMn: aNh
		}, this.xU[14] = {
			xv: aNg,
			xw: cos,
			aMn: aNh
		}, this.xU[15] = {
			xv: aNi,
			xw: aNj,
			aMn: aNk
		}, this.xU[16] = {
			xv: aNi,
			xw: aNj,
			aMn: aNk
		}, this.xU[17] = {
			xv: aNg,
			xw: cos,
			aMn: aNh
		}, this.xU[18] = {
			xv: aNl,
			xw: aNm,
			aMn: aNn
		}, this.xU[19] = {
			xv: aNg,
			xw: cos,
			aMn: aNh
		}, this.xU[20] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMc: 0
		}, this.xU[21] = {
			i: 940,
			j: 940,
			n9: 80,
			n6: 8,
			aMc: 0
		}, this.xU[22] = {
			xv: aNl,
			xw: aNm,
			aMn: aNn
		}, this.xU[23] = {
			xv: aNi,
			xw: aNj,
			aMn: aNk
		}, this.xU[24] = {
			xv: [157, 136, 117],
			xw: [16, 13, 68],
			aMn: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a7w: "[OG] Neutronian"
		};
		for (var aB = 0; aB < bU.aMU; aB++) this.xU[aB].name = this.aNf[aB];
		this.xU[bU.aMU] = {
			name: ""
		}, this.aNd = new Uint8Array(12);
		for (aB = 0; aB < 10; aB++) this.aNd[aB] = aB;
		for (this.aNd[10] = 20, this.aNd[11] = 21, this.aNe = new Uint8Array(bU.aMV), aB = 0; aB < 10; aB++) this.aNe[aB] = 10 + aB;
		this.aNe[10] = 22, this.aNe[11] = 23, this.aNe[12] = 24
	}
}

function aMY() {
	this.aNa = function() {
		for (var gh, fG, fs, aNY = aDA, aNZ = bU.xe, i = bU.fK, aNX = i - 1, hz = bU.fL - 1, gc = 0, fI = 1; fI < hz; fI++)
			for (fs = fI * i, fG = 1; fG < aNX; fG++) aNZ[gh = fs + fG << 2] === aNZ[1 + gh] && aNZ[gh] === aNZ[2 + gh] && (gc++, aNY[2 + gh] = 4);
		ap.a80 = gc
	}, this.aNb = function(aNq, aNr) {
		for (var aNY = aDA, i = bU.fK, aNX = i - 1, hz = bU.fL - 1, id = 0, fI = 1; fI < hz; fI++)
			for (var fs = fI * i, fG = 1; fG < aNX; fG++) {
				var en = 2 + (fs + fG << 2);
				aNY[en] === aNq && (! function(en, id, aNq, aNr) {
					var f9 = 1,
						aNY = aDA,
						fB = ac.aIK,
						a3l = [en],
						aNt = id >> 8 << 1,
						aNu = 255 & id;
					aNY[en - 2] = aNt, aNY[en - 1] = aNu, aNY[en] = 5;
					for (; f9;) {
						for (var a3m = [], aB = 0; aB < f9; aB++)
							for (var ey = a3l[aB], fC = 0; fC < 8; fC++) {
								var fD = ey + fB[fC];
								aNY[fD] === aNq && (aNY[fD - 2] = aNt, aNY[fD - 1] = aNu, aNY[fD] = aNr, a3m.push(fD))
							}
						f9 = (a3l = a3m).length
					}
				}(en, id, aNq, aNr), id = (id + 1) % 32768)
			}
	}, this.aNc = function() {
		for (var aNY = aDA, i = bU.fK, aNX = i - 3, hz = bU.fL - 3, aNw = 12 * i, fI = 3; fI < hz; fI++)
			for (var fs = fI * i, fG = 3; fG < aNX; fG++) {
				var en = 2 + (fs + fG << 2);
				2 !== aNY[en] || 2 === aNY[en - 12] && 2 === aNY[12 + en] && 2 === aNY[en - aNw] && 2 === aNY[en + aNw] || (aNY[en - 2] = 1 | aNY[en - 2])
			}
	}
}

function a5l() {
	(zE = void 0 === zE ? document.createElement("canvas") : zE).width = bU.fK, zE.height = bU.fL, a5p = zE.getContext("2d", {
		alpha: !0
	}), a5q = aDA = null, a5q = a5p.getImageData(0, 0, bU.fK, bU.fL), aDA = a5q.data, bC.r7.xf(aDA)
}

function cj() {
	var fb, i, j, max, aNx, n6, aNz, aO0, aO1, aO2, aO3, aO4, aO5, aO6, aNy = 1e4;

	function aOD(aOC, n9, f9) {
		var aB;
		for (aNz[0] = aOC, aB = 1; aB < f9; aB++) aNz[aB] = aNz[aB - 1] + n9, n9 = aNz[aB] >= aNy ? (aNz[aB] = aNy - 1, -n9) : aNz[aB] < 0 ? (aNz[aB] = 0, -n9) : (n9 += 16384 <= ay.random() ? n6 : -n6) < -aNx ? -aNx : aNx < n9 ? aNx : n9
	}

	function aOF(fG, fI, aOG, f9) {
		(aOG ? function(fG, fI, f9) {
			var aB;
			for (aB = 0; aB < f9; aB++) fb[fI * i + fG + aB] = aNz[aB]
		} : function(fG, fI, f9) {
			var aB;
			for (aB = 0; aB < f9; aB++) fb[fI * i + fG + aB * i] = aNz[aB]
		})(fG, fI, f9)
	}

	function aOJ(value, f9) {
		var aB, aLv, en, jj = value - aNz[f9 - 1];
		if (0 != jj) {
			for (aLv = 1 + bN.fa(Math.abs(jj), f9 - 1), aLv = jj < 0 ? -aLv : aLv, aNz[f9 - 1] = value, en = (en = f9 - 1 - bN.fa(Math.abs(jj), Math.abs(aLv))) < 1 ? 1 : f9 - 2 < en ? f9 - 2 : en, aB = f9 - 2; en <= aB; aB--) aNz[aB] += jj - (f9 -
				1 - aB) * aLv;
			(jj < 0 ? function(f9) {
				var aB;
				for (aB = f9 - 2; 1 <= aB; aB--) aNz[aB] < 0 && (aNz[aB] = -aNz[aB] - 1)
			} : function(f9) {
				var aB;
				for (aB = f9 - 2; 1 <= aB; aB--) aNz[aB] >= aNy && (aNz[aB] = 2 * aNy - aNz[aB] - 1)
			})(f9)
		}
	}

	function aOM(a3l, a3m, f9) {
		for (var aB = 0; aB < f9; aB++) a3l[aB] = a3m[aB]
	}

	function aON(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aOO(a6R, gap, i0) {
		aO0.push(a6R), aO1.push(gap), aO2.push(i0)
	}
	this.a7 = function(a4z) {
		! function(a4z) {
			var aB;
			for (i = a4z[0], j = a4z[1], aNx = a4z[2], n6 = a4z[3], fb = new Int16Array(i * j), max = j < i ? i : j, aNz = new Int16Array(max), aO0 = [], aO1 = [], aO2 = [], aO3 = new Array(i), aO4 = new Array(j), aB = i - 1; 0 <= aB; aB--) aO3[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aO4[aB] = !1;
			aO5 = new Int16Array(i), aO6 = new Int16Array(j)
		}(a4z),
		function(f9) {
			var aOC = ay.random() % aNy,
				n9 = ay.random() % (2 * aNx + 1) - aNx;
			aOD(aOC, n9, f9)
		}(max), aOM(aO6, aNz, j), aOF(0, 0, !0, i);
		var fG, fI, a4z = fb[0],
			f9 = max,
			n9 = ay.random() % (2 * aNx + 1) - aNx;
		for (aOD(a4z, n9, f9), aOM(aO5, aNz, i), aOF(0, 0, !1, j), aON(aO5), aON(aO6), aOD(fb[i - 1], aO5[i - 1], j), aOF(i - 1, 0, !1, j), aOD(fb[i * (j - 1)], aO6[j - 1], i), aOJ(fb[i * j - 1], i), aOF(0, j - 1, !0, i), aO3[i - 1] = aO3[0] = !
			0, aO4[j - 1] = aO4[0] = !0, aOO(0, i, !0), aOO(0, j, !1), ! function() {
				var aOQ, a6R;
				for (;;) {
					if (aOQ = function() {
							var aB, aOQ = aO0.length - 1;
							for (aB = aOQ - 1; 0 <= aB; aB--) aO1[aB] > aO1[aOQ] && (aOQ = aB);
							return aOQ
						}(), aO1[aOQ] < 5) return;
					a6R = aO0[aOQ] + bN.fa(aO1[aOQ], 2), (aO2[aOQ] ? function(fG) {
						var f9, aOT, aB, aGz = 0,
							aOU = 0;
						for (; aOU < j - 1;) {
							for (aB = aGz + 1; aB < j; aB++)
								if (aO4[aB]) {
									aOU = aB;
									break
								} f9 = aOU - aGz + 1, aOD(fb[fG + i * aGz], 0 === aGz ? aO5[fG] : aNz[aOT - 1] - aNz[aOT - 2], f9), aOJ(fb[aOU * i + fG], f9), aOF(fG, aGz, !1, f9), aOT = f9, aGz = aOU
						}
						aO3[fG] = !0
					} : function(fI) {
						var f9, aOT, aB, aGz = 0,
							aOU = 0;
						for (; aOU < i - 1;) {
							for (aB = aGz + 1; aB < i; aB++)
								if (aO3[aB]) {
									aOU = aB;
									break
								} f9 = aOU - aGz + 1, aOD(fb[fI * i + aGz], 0 === aGz ? aO6[fI] : aNz[aOT - 1] - aNz[aOT - 2], f9), aOJ(fb[fI * i + aOU], f9), aOF(aGz, fI, !0, f9), aOT = f9, aGz = aOU
						}
						aO4[fI] = !0
					})(a6R), aOO(a6R, aO0[aOQ] + aO1[aOQ] - a6R, aO2[aOQ]), aO1[aOQ] = a6R - aO0[aOQ] + 1
				}
			}(), fG = 0; fG < i; fG++)
			if (!aO3[fG])
				for (fI = 0; fI < j; fI++) aO4[fI] || ! function(fG, fI) {
					var value = fb[fI * i + fG - 1] + fb[(fI - 1) * i + fG],
						a8F = 2;
					aO3[fG + 1] && (a8F++, value += fb[fI * i + fG + 1]);
					aO4[fI + 1] && (a8F++, value += fb[(fI + 1) * i + fG]);
					fb[fI * i + fG] = bN.fa(value, a8F)
				}(fG, fI)
	}, this.aMz = function() {
		return fb
	}, this.aMg = function() {
		fb = null
	}
}

function aIT(fS, fT) {
	return 0 <= fS ? bN.fa(fS, fT) : -bN.fa(-fS, fT)
}

function k0(fb) {
	return fb * fb
}

function a7Q(fS, fT) {
	return fT < fS ? fS : fT
}

function aCf(fS, fT) {
	return fS < fT ? fS : fT
}

function a9r(fS, fb, fT) {
	return fb < fS ? fS : fT < fb ? fT : fb
}

function aOW(fb, f9) {
	for (var eh = bN.fa(fb + 1, 2), aB = 0; aB < f9; aB++) eh = bN.fa(eh + bN.fa(fb, eh), 2);
	return eh
}

function aKS(fb, f9) {
	return fb < 1 ? 0 : aOW(fb, f9)
}

function aOX(nV, nW, tQ, a9a, ni, nj, tR, u9) {
	return !(nV + tQ <= ni || nW + a9a <= nj || ni + tR <= nV || nj + u9 <= nW)
}

function aOY(nV, nW, tQ, a9a, ni, nj, tR, u9) {
	return nV <= ni && nW <= nj && ni + tR <= nV + tQ && nj + u9 <= nW + a9a
}

function xW(fb) {
	return Math.floor(!!fb * (1 + Math.log2(fb + .5)))
}

function bz() {
	this.fa = function(fS, fT) {
		return Math.floor((fS + .5) / fT)
	}, this.aOZ = function(fS, fT) {
		return Math.floor(fS * (fT + .5))
	}, this.sqrt = function(fb) {
		return ~~Math.sqrt(fb + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iH = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aOa = function(fs, fu, fw) {
		return Math.max(Math.min(fs, fu), fw)
	}, this.aOb = function(aOc, aOd, fG, fI) {
		fG -= aOc, aOc = fI - aOd, fI = 0;
		return 0 == fG ? fI = 0 <= aOc ? Math.PI : 0 : (fI = Math.atan(aOc / fG), fI += 0 < fG ? .5 * Math.PI : 1.5 * Math.PI), fI
	}, this.log2 = function(fb) {
		return Math.floor(!!fb * (1 + Math.log2(fb + .5)))
	}, this.log10 = function(fb) {
		return Math.floor(Math.log10(fb + .5))
	}, this.aOf = function(aOg, aOh, aOi, aOj, aOk) {
		return aOi - aOk < aOg && aOg < aOi + aOk && aOj - aOk < aOh && aOh < aOj + aOk
	}, this.yT = function(aAH, aAJ) {
		return aAH * aAH + aAJ * aAJ
	}
}

function dH() {
	this.y = new aOl, this.tJ = 0;
	var aOm = new Array(32);

	function aOp() {
		for (var f9 = aOm.length, aB = 0; aB < f9; aB++) aOm[aB] = null
	}
	this.dh = function() {
		for (var aOn, aOo = document.body.firstChild; aOo;) aOn = aOo.nextSibling, !document.body.contains(aOo) || "DIV" !== aOo.tagName && "INPUT" !== aOo.tagName && "BUTTON" !== aOo.tagName || t.removeChild(document.body, aOo), aOo = aOn
	}, this.u = function(eG, a2O, a4z) {
		void 0 === a2O && (a2O = this.tJ), bh.dp = !0, 0 === eG && (0 === aa.a2J() ? eG = 5 : a0.a1.setState(13)), this.sG(), this.tJ === eG && (a2O = aOm[eG].a2O, aOm[eG] = null), this.tJ = eG;
		var lP = aOm[eG];
		if (!lP || 4 === eG || 7 === eG || 8 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 15 === eG || 18 === eG || 20 <= eG && eG <= 28 || 32 === eG || 33 === eG) {
			if (0 === eG) return void aOp();
			1 === eG ? lP = new aOq : 2 === eG ? lP = new aOr : 3 === eG ? lP = new aOs : 4 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 33 === eG ? lP = a4z : 5 === eG ? lP = new aOt : 6 === eG ? lP = new aOu : 7 === eG ? lP =
				new aOv(t.y.aOw) : 8 === eG ? lP = a4z : 12 === eG ? lP = new aOx : 14 === eG ? lP = new aOy : 15 === eG ? lP = new aOv(t.y.aOz) : 16 === eG ? lP = new aP0 : 17 === eG ? lP = new aP1 : 18 === eG ? lP = new aP2 : 19 === eG ? lP =
				new aP3 : 20 === eG ? lP = new aP4 : 21 === eG ? lP = new aP5 : 22 === eG ? lP = new aP6 : 23 === eG ? lP = new aP7 : 24 === eG ? lP = new aP8 : 25 === eG ? lP = new aP9 : 26 === eG ? lP = new aPA : 27 === eG ? lP = new aPB :
				28 === eG ? lP = new aPC : 29 === eG ? lP = new aPD : 30 === eG ? lP = new aPE : 31 === eG && (lP = new aPF), lP.a2O = a2O, aOm[eG] = lP
		}
		lP.show(a4z)
	}, this.a2I = function() {
		this.hv() && this.aPG(this.a2N().a2O)
	}, this.aPG = function(eG) {
		this.hv() && (aOm[eG] ? (this.sG(), bh.dp = !0, this.tJ = eG, aOm[eG].show()) : this.u(eG))
	}, this.sG = function() {
		this.hv() && aOm[this.tJ].sG()
	}, this.x = function() {
		this.hv() && (aOm[this.tJ].sG(), aOp(), this.tJ = 0, a0.a1.setState(13))
	}, this.ve = function() {
		var lP;
		this.hv() && (lP = aOm[this.tJ]).ve && lP.ve()
	}, this.resize = function() {
		if (!this.hv()) return !1;
		aOm[this.tJ].resize()
	}, this.hM = function(fG, fI) {
		var lP;
		this.hv() && (lP = aOm[this.tJ]).hM && lP.hM(fG, fI)
	}, this.a2f = function(fG, fI) {
		var lP;
		this.hv() && (lP = aOm[this.tJ]).a2f && lP.a2f(fG, fI)
	}, this.a33 = function() {
		var lP;
		this.hv() && (lP = aOm[this.tJ]).a33 && lP.a33()
	}, this.a2i = function(lj, lk, deltaY) {
		var lP;
		this.hv() && (lP = aOm[this.tJ]).a2i && lP.a2i(lj, lk, deltaY)
	}, this.a3D = function(code) {
		var lP;
		return !!this.hv() && ((lP = aOm[this.tJ]).a3D && lP.a3D(code), !0)
	}, this.ec = function() {
		var lP;
		this.hv() && (lP = aOm[this.tJ]) && lP.ec && lP.ec()
	}, this.hv = function() {
		return 0 < this.tJ
	}, this.a2N = function() {
		return aOm[this.tJ]
	}, this.a6C = function(eG) {
		return aOm[eG]
	}, this.aPH = function() {
		return aOm
	}, this.removeChild = function(vC, a4U) {
		try {
			vC.removeChild(a4U)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOv(data) {
	var aPI, aPJ;
	this.show = function() {
		data.aPK && bK.aQE("account", data.tH), aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(data.username, [new w("⬅️ " + L(39), function() {
		bK.clear(), t.a2I()
	}), new w(data.aPK ? "🔄 " + L(163) : L(164), function() {
		t.u(8, data.aPK ? t.a2N().a2O : void 0, new tK(25, {
			tL: 0,
			tH: data.tH,
			tI: data.tI
		}))
	}, 0, 0, 1)]), aPJ = new qs(aPI.vV, function() {
		var qu = [];
		qu.push(function() {
				var aPc = new qc,
					a1r = (aPc.qf(L(221)), data.aPt);
				a1r < 1 ? (aPc.ql(L(222)), 0 === data.aPu ? aPc.qh(L(223)) : 1 === data.aPu ? aPc.qh(L(224)) : 2 === data.aPu ? aPc.qh(L(225)) : 3 === data.aPu ? aPc.qh(L(226)) : 4 === data.aPu ? aPc.qh(L(227)) : 5 === data.aPu ? aPc.qh(
					L(228)) : 6 === data.aPu ? aPc.qh(L(229)) : aPc.qh(L(230))) : (aPc.ql(L(231)), a1r = a1r < 2 ? L(232) : a1r < 61 ? 2 === a1r ? L(233) : L(234, [a1r - 1]) : a1r < 84 ? 61 === a1r ? L(235) : L(236, [a1r - 60]) :
					a1r < 255 ? 84 === a1r ? L(237) : L(238, [a1r - 83]) : L(239), aPc.qh(a1r));
				{
					var qi, aPh;
					aPc.qq(new se), data.aPK && (qi = aPc.qh(), aPc.qq(new sU([new w(bl.w3.ub(data.tH) ? L(240) : L(241), function(e) {
						return bl.w3.wG(data.tH) ? (e.textContent = L(240), aPh(1)) : (e.textContent = L(241), aPh(0)), !0
					}).button])), aPh = function(fb) {
						qi.textContent = fb ? L(242) : ""
					}, bl.w3.ub(data.tH) && aPh(1), aPc.qq(new se))
				}
				var rm = new rn({
					value: data.username,
					eG: -1
				});
				rm.e.readOnly = !0, aPc.qq(rm), aPc.qq(new sU([new w(L(187), function(e) {
					return bC.qz.a4S(rm.e), bC.qz.vI(e), !0
				}).button])), data.aPK ? (aPc.qq(new se), aPc.ql(b0.y.aPd("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aPc.qq(new sU([new w(L(244), function(e) {
					return b0.aGO.aGP({
						tL: 3,
						tH: data.tH,
						value: 0
					}), bC.qz.vI(e), !0
				}, bD.ol).button])), aPc.qq(new sU([new w(L(245), function(e) {
					return b0.aGO.aGP({
						tL: 3,
						tH: data.tH,
						value: 1
					}), bC.qz.vI(e), !0
				}, bD.ol).button])), a1r = "CRTOR" === (a1r = bl.eU.data[105].value) || "ADMIN" === a1r, aPc.qq(new sU([new w(a1r ? "Block Account" : "Cheater", function(e) {
					return b0.aGO.aGP({
						tL: 3,
						tH: data.tH,
						value: 2
					}), bC.qz.vI(e), !0
				}, a1r ? bD.oj : bD.ol).button])), aPc.qq(new sU([new w(a1r ? "Ban IP" : "False Reporter", function(e) {
					return b0.aGO.aGP({
						tL: 3,
						tH: data.tH,
						value: 3
					}), bC.qz.vI(e), !0
				}, a1r ? bD.oj : bD.ol).button])), a1r && aPc.qq(new sU([new w("Gold Seizure", function(e) {
					return b0.aGO.aGP({
						tL: 3,
						tH: data.tH,
						value: 4
					}), bC.qz.vI(e), !0
				}, bD.oj).button]))) : aPc.qh(L(243));
				return aPc
			}()),
			function(qu) {
				var aPc, qi, aDQ, aPx, aPi, aPk, aPj;
				data.aPK || ((aPc = new qc).qf(L(246)), (qi = aPc.qh(data.aPw.length + " / 160")).style.textAlign = "center", aDQ = !0, (aPx = new vn(0, 1, function(e) {
					e = e.target.value.length;
					qi.textContent = e + " / 160", 160 < e ? aDQ && (aDQ = !1, aPk.rJ(1)) : aDQ || (aDQ = !0, aPk.rJ(0))
				})).e.rows = 6, aPx.e.style.fontSize = "1em", aPx.vu(data.aPw), aPc.qq(aPx), 0 !== data.aPy ? (aPk = new w(L(247), function() {
					if (!aDQ) return !0;
					t.u(8, t.a2N().a2O, new tK(29, {
						tL: 1,
						qg: aPx.vv().substring(0, 160)
					}))
				}, 0, 0, 1), aPc.qq(new sU([aPk.button])), aPc.qq(new sU([new w(1 === data.aPy ? L(248) : L(249), function() {
					t.u(8, t.a2N().a2O, new tK(29, {
						tL: 0,
						qg: ""
					}))
				}, 0, 0, 1).button])), aPc.qh(1 === data.aPy ? L(250, [data.aPz - 1]) : L(251, [data.aPz - 1])), aPc.qh(L(252, [data.aQ0]))) : (aPi = new w(L(253), function() {
					if (!aPx.e.readOnly) return !0;
					t.u(8, t.a2N().a2O, new tK(29, {
						tL: 1,
						qg: aPx.vv().substring(0, 160)
					}))
				}, 1), aPk = new w(L(184), function(e) {
					if (e.textContent === L(184)) {
						if (!aDQ) return !0;
						e.textContent = L(185), aPx.e.readOnly = !0, aPi.rJ(0), aPi.button.style.color = bD.p5
					} else aPj();
					return !0
				}), aPc.qq(new sU([aPk.button])), aPc.qh(L(252, [data.aQ0])), aPj = function() {
					aPk.button.textContent = L(184), aPx.e.readOnly = !1, aPi.rJ(1), aPi.button.style.color = bD.o5
				}, aPc.qq(new sU([aPi.button]))), qu.push(aPc))
			}(qu),
			function(qu) {
				var aPc;
				data.aPK && 0 !== data.aPy && ((aPc = new qc).qf(L(254)), aPc.qj(data.aPw), aPc.qq(new sU([new w(L(255, 0, "Report"), function(e) {
					return b0.y.ed(0) && (bC.qz.vI(e), b0.aGO.aQ1({
						tL: 5,
						tH: data.tH
					})), !0
				}, 0, 0, 1).button])), qu.push(aPc))
			}(qu), qu.push(function() {
				var aPc = new qc,
					aPe = (aPc.qf(L(165)), aPc.ql(b0.y.aPd("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179)]),
					eF = data.aPf;
				return aPc.ql(L(180) + bC.ry.a5G(data.wt, .01, 2) + "<br>" + L(181) + (eF + 1) + " / " + data.ws + "<br>" + L(182) + aPe[function(eF, wt) {
					if (eF < 10) return 0;
					if (eF < 30) return 1;
					if (eF < 60) return 2;
					if (3e4 <= (wt = bN.fa(wt, 100))) return 3;
					if (12e3 <= wt) return 4;
					if (7e3 <= wt) return 5;
					if (3e3 <= wt) return 6;
					if (1e3 <= wt) return 7;
					if (500 <= wt) return 8;
					if (200 <= wt) return 9;
					if (70 <= wt) return 10;
					if (20 <= wt) return 11;
					if (3 <= wt) return 12;
					return 13
				}(eF, data.wt)]), aPc
			}()), data.aPK && qu.push(function() {
				var aPc = new qc,
					rm = (aPc.qf(L(183)), aPc.ql(b0.y.aPd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rn({
						value: bl.eU.data[147].value,
						eG: -1
					}, 1, void 0, function(e) {
						bl.sR.sS(147, aPh(e.target.value))
					})),
					aPi = (aPc.qq(rm), new w(L(14), function(e) {
						return rm.e.readOnly && b0.y.ed(0) && (bC.qz.vI(e), aPj(), b0.aGO.aGP({
							tL: 0,
							tH: data.tH,
							value: parseInt(bl.eU.data[147].value, 10)
						})), !0
					}, 1)),
					aPk = new w(L(184), function(e) {
						return e.textContent === L(184) ? (e.textContent = L(185), rm.e.readOnly = !0, aPi.rJ(0), aPi.button.style.color = bD.p5, bl.sR.sS(147, rm.e.value), aPh(bl.eU.data[147].value)) : aPj(), !0
					}),
					qi = (aPc.qq(new sU([aPk.button])), aPc.qh()),
					aPh = function(fb) {
						qi.innerHTML = t.y.aPl(fb, bl.eU.data[105].value, data.tH)
					},
					aPj = function() {
						aPk.button.textContent = L(184), rm.e.readOnly = !1, aPi.rJ(1), aPi.button.style.color = bD.o5
					};
				return aPh(bl.eU.data[147].value), aPc.qq(new sU([aPi.button])), aPc
			}());
		qu.push(function() {
			var aPc = new qc,
				rm = (aPc.qf(L(186)), new rn({
					value: data.tH,
					eG: -1
				}));
			return rm.e.readOnly = !0, aPc.qq(rm), aPc.qq(new sU([new w(L(187), function(e) {
				return bC.qz.a4S(rm.e), bC.qz.vI(e), !0
			}).button])), aPc
		}()), data.aPK || (qu.push(function() {
			var aPc = new qc,
				aPm = (aPc.qf(L(188)), new rn(bl.eU.data[106]));
			return aPm.e.readOnly = !0, aPm.e.type = "password", aPc.qq(aPm), aPc.qq(new sU([new w(L(189), function(e) {
				return e.textContent === L(189) ? (e.textContent = L(190), aPm.e.type = "text") : (e.textContent = L(189), aPm.e.type = "password"), !0
			}).button, new w(L(187), function(e) {
				return bC.qz.a4S(aPm.e), bC.qz.vI(e), !0
			}).button])), aPc.qq(new sU([new w(L(191), function() {
				t.u(8, t.a2N().a2O, new tK(15))
			}).button])), aPc.qf(L(192), "0.8em"), aPc.qh(L(193)), aPc.qh(L(194)), aPc.qh(L(195)), aPc
		}()), qu.push(function() {
			var aPc = new qc;
			return aPc.qf(L(196)), aPc.qq(new sU([new w(L(197), function() {
				t.u(6, t.a2N().a2O)
			}).button])), aPc.qq(new sU([new w(L(198), function() {
				bl.sR.sS(105, ""), t.u(8, t.a2N().a2O, new tK(18))
			}).button])), aPc.qq(new sU([new w(L(199) + bl.eU.data[105].value, function() {
				t.u(4, 0, new v(L(200), L(201), !0, [new w("⬅️ " + L(39), function() {
					t.u(7, t.a6C(7).a2O)
				})]))
			}, bD.ol).button])), aPc
		}()), qu.push(function() {
			function aPo(eG) {
				aPn[0].rJ(0 === eG ? bD.oH : bD.oS), aPn[1].rJ(0 === eG ? bD.oH : bD.ol), aPn[2].rJ(eG === qo.qp.length - 1 || eG < 5 ? bD.oH : bD.ol)
			}
			var qo, aPn, aPc = new qc;
			aPc.qf(L(206)), aPc.qh(L(207)), bl.y.wc();
			return aPn = [new w(L(208), function() {
				var eG = Math.min(bl.eU.data[117].value, qo.qp.length - 1);
				eG < 1 || (eG = bl.y.wg(eG), bl.sR.sS(105, eG.tH), bl.sR.sS(106, eG.password), t.u(8, t.a2N().a2O, new tK(18)))
			}, bD.oH, 1), new w(L(204), function() {
				var eG = Math.min(bl.eU.data[117].value, qo.qp.length - 1);
				if (!(eG < 1)) {
					qo.qp[eG].remove(), qo.qp.splice(eG, 1);
					for (var aB = eG; aB < qo.qp.length; aB++) qo.qp[aB].name = "" + aB;
					bl.y.wf(eG), eG = bl.eU.data[117].value, qo.qp[eG].textContent = qo.qp[eG].textContent.replace("⚪", "🟢"), aPo(eG)
				}
			}, bD.oH, 1), new w(L(205), function() {
				var eG = Math.min(bl.eU.data[117].value, qo.qp.length - 1);
				if (eG !== qo.qp.length - 1) {
					for (var aB = qo.qp.length - 1; eG < aB; aB--) qo.qp[aB].remove(), qo.qp.splice(aB, 1), bl.y.wf(aB);
					aPo(eG)
				}
			}, bD.oH, 1)], qo = new vL(bl.eU.data[117], aPo), aPo(0), qo.qp[0].style.marginTop = "0.5em", aPc.qn(qo), aPc.qq(new sU([aPn[0].button])), aPc.qq(new sU([aPn[1].button])), aPc.qq(new sU([aPn[2].button])), aPc
		}()));
		return qu.push(function() {
				var aPc = new qc,
					aPe = (aPc.qf(L(212)), [L(213), L(214), L(215), L(216)]),
					eF = data.aPp;
				return aPc.ql(L(217) + (data.a1a / 100).toFixed(2) + "<br>" + L(181) + (eF + 1) + " / " + data.ws + "<br>" + L(182) + aPe[eF < 10 ? 0 : eF < 50 ? 1 : eF < 200 ? 2 : 3]), aPc
			}()), qu.push(function() {
				var aPc = new qc;
				return aPc.qf(L(209)), aPc.ql(L(210) + bC.ry.a5G(data.wp, .1, 1) + "<br>" + L(181) + (data.wq + 1) + " / " + data.ws + "<br>" + L(211) + data.wr), aPc
			}()),
			function(qu) {
				var aPc = new qc,
					aQ2 = data.ww,
					aQ3 = (aPc.qf(L(256)), aPc.ql(L(257, [data.wu.length ? "[" + data.wu + "]" : "-"])), aPc.ql(L(258, [bC.ry.a5G(aQ2, .01, 2)])), aPc.ql(L(259, [data.wy + 1 + " / " + data.ws])), data.wz),
					aQ4 = (aPc.ql(L(260, [bC.ry.a5G(aQ3, .1, 1)])), data.x1);
				aPc.ql(L(261, [aQ4])), aPc.ql(L(262, [bC.ry.a5G(aQ3 / Math.max(aQ4, 1), .1, 2)])), aQ2 = data.wx, aPc.qf(L(263), "0.8em"), aPc.ql(L(257, [data.wv.length ? "[" + data.wv + "]" : "-"])), aPc.ql(L(258, [bC.ry.a5G(aQ2, .01, 2)])),
					aQ3 = data.x0, aPc.ql(L(260, [bC.ry.a5G(aQ3, .1, 1)])), aQ4 = data.x2, aPc.ql(L(261, [aQ4])), aPc.ql(L(262, [bC.ry.a5G(aQ3 / Math.max(aQ4, 1), .1, 2)])), aPc.ql(b0.y.aPd("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qu.push(aPc)
			}(qu),
			function(qu) {
				var aPc = new qc;
				aPc.qf(L(264)), aPc.ql(L(217) + (data.aQ5 / 10).toFixed(1) + "<br>" + L(182) + (data.aQ6.length ? L(265, [data.aQ6]) : L(266))), data.aPK && aPc.qq(new sU([new w(L(267), function(e) {
					return b0.y.ed(0) && (bC.qz.vI(e), b0.aGO.aQ1({
						tL: 4,
						tH: data.tH
					})), !0
				}, 0, 0, 1).button]));
				aPc.ql(b0.y.aPd("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qu.push(aPc)
			}(qu), qu.push(function() {
				var aPc = new qc;
				if (aPc.qf(L(218)), aPc.ql(L(219) + data.aPq + "<br>" + L(181) + (data.aPr + 1) + " / " + data.ws + "<br>" + L(182) + bq.eI(data.aPr)), data.aPK) {
					var rm = new rn({
							value: bl.eU.data[157].value,
							eG: -1
						}, 1, void 0, function(e) {
							bl.sR.sS(157, aPh(e.target.value))
						}),
						aPk = (rm.e.style.marginTop = "0.6em", aPc.qq(rm), new w(L(184), function(e) {
							return e.textContent === L(184) ? (e.textContent = L(185), rm.e.readOnly = !0, aPs[0].rJ(0), aPs[1].rJ(0), aPs[0].button.style.color = bD.p5, aPs[1].button.style.color = bD.p5, aPh(bl.eU.data[157]
								.value)) : aPj(), !0
						})),
						aPs = (aPc.qq(new sU([aPk.button])), [new w("−", function(e) {
							return rm.e.readOnly && b0.y.ed(0) && (bC.qz.vI(e), aPj(), b0.aGO.aGP({
								tL: 2,
								tH: data.tH,
								value: bN.iH(parseInt(bl.eU.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rm.e.readOnly && b0.y.ed(0) && (bC.qz.vI(e), aPj(), b0.aGO.aGP({
								tL: 1,
								tH: data.tH,
								value: bN.iH(parseInt(bl.eU.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qi = aPc.qh(),
						aPh = function(fb) {
							return fb = bC.gV.a4w(fb, 3, 32767), qi.textContent = L(220, [fb - 1, fb, bl.eU.data[105].value]), fb
						};
					aPc.qq(new sU([aPs[0].button, aPs[1].button]));
					for (var aB = 0; aB < 2; aB++) aPs[aB].button.style.fontSize = "1.6em";
					var aPj = function() {
						aPk.button.textContent = L(184), rm.e.readOnly = !1, aPs[0].rJ(1), aPs[1].rJ(1), aPs[0].button.style.color = bD.o5, aPs[1].button.style.color = bD.o5
					};
					aPh(bl.eU.data[157].value)
				}
				return aPc
			}()),
			function(qu) {
				var aPc, a4R;
				data.aPK && !data.aQ7 || (0 === a0.id || data.aPK || data.aQ7) && ((aPc = new qc).qf("Patreon"), !data.aPK && data.aQ8 ? aPc.qq(new sU([new w(L(189), function() {
					b0.aGO.aQ1({
						tL: 7,
						tH: data.tH
					}), data.aQ8 = 0, t.u(7)
				}).button])) : data.aQ7 ? (aPc.ql(L(268, [(data.aQ9 / 100).toFixed(2)]) + "<br>" + L(269, [1 + data.aQA + " / " + data.aQB]) + "<br>" + L(270, [data.aQC ? L(271) : L(272)])), data.aPK || aPc.qq(new sU([new w(L(273),
					function() {
						b0.aGO.aQ1({
							tL: 8,
							tH: data.tH
						}), data.aQ7 = 0, bl.sR.sS(160, 0), t.u(7)
					}).button]))) : (aPc.ql(L(274), "0.75em").style.marginBottom = "0.3em", aPc.ql("  • " + L(275), "0.75em").style.whiteSpace = "pre", aPc.ql("  • " + L(276), "0.75em").style.whiteSpace = "pre", aPc.ql("  • " + L(
						277), "0.75em").style.whiteSpace = "pre", aPc.ql(L(278), "0.75em").style.marginTop = "1.0em", aPc.ql(L(279), "0.75em").style.marginTop = "1.0em", aPc.ql("<a href='" + bM.aQD +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4R = "https://www.patreon.com/oauth2/authorize?state=" + data.tH +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1X() + "/", aPc.ql(L(280), "0.75em").style.marginTop = "1.0em", aPc.ql("<a href='" +
						a4R + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPK || (aPc.qq(new se), aPc.qq(new sU([new w(L(190), function() {
						b0.aGO.aQ1({
							tL: 6,
							tH: data.tH
						}), data.aQ8 = 1, t.u(7)
					}).button])), aPc.ql(L(281), "0.75em").style.marginTop = "0.75em")), qu.push(aPc))
			}(qu),
			function(qu) {
				var aPc, qo, aPn, eG, aPo;
				data.aPK || bl.w3.get().length && ((aPc = new qc).qf(L(202)), eG = 0, aPo = function() {
					var aD5 = bl.w3.get().length;
					aPn[0].rJ(eG === aD5 ? bD.oH : bD.oS), aPn[1].rJ(eG === aD5 ? bD.oH : bD.ol), aPn[2].rJ(eG === aD5 || aD5 - 1 <= eG || eG < 5 ? bD.oH : bD.ol)
				}, aPn = [new w(L(203), function() {
					t.u(8, void 0, new tK(25, {
						tL: 0,
						tH: bl.w3.get()[eG],
						tI: 0
					}))
				}, bD.oH, 1), new w(L(204), function() {
					bl.w3.wJ(eG), qo.qp[eG].remove(), qo.qp.splice(eG, 1);
					for (var aB = eG; aB < qo.qp.length; aB++) qo.qp[aB].name = "" + aB;
					bl.w3.get().length && (eG = Math.max(eG - 1, 0), qo.qp[eG].textContent = qo.qp[eG].textContent.replace("⚪", "🟢")), aPo()
				}, bD.oH, 1), new w(L(205), function() {
					for (var i1 = qo.qp.length - 1; eG < i1; i1--) bl.w3.wJ(i1), qo.qp[i1].remove(), qo.qp.splice(i1, 1);
					aPo()
				}, bD.oH, 1)], aPo(), (qo = new vL(bl.w3.wF(), function(aB) {
					eG = aB, aPo()
				})).qp[0].style.marginTop = "0.5em", aPc.qn(qo), aPc.qq(new sU([aPn[0].button])), aPc.qq(new sU([aPn[1].button])), aPc.qq(new sU([aPn[2].button])), qu.push(aPc))
			}(qu), qu
	}())
}

function aP6() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.aIncomeType ? (bC.r7.a3p(aQH.vv(), aD.data.aIncomeData, 255), bC.r7.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(282), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(284), L(285), L(286)],
			value: aD.data.aIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f6)), aD.data.aIncomeType = eG, t.u(22)
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc;
		1 === aD.data.aIncomeType && ((aPc = new qc).qf("Value"), aPc.qq(new rn({
			eG: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qu.push(aPc))
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.aIncomeType && ((aPc = new qc).qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.aIncomeData, 4)), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aP9() {
	var aQF, aQG, aQH;

	function aQI() {
		aQK(), 3 !== aD.data.botDifficultyType || bC.r7.a3d(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		3 === aD.data.botDifficultyType && bC.r7.a3p(aQH.vv(), aD.data.botDifficultyData, aE.kf.length - 1)
	}

	function aQP(qu, eG) {
		var aPc = new qc,
			value = (aPc.qf(eG < 0 ? L(64) : L(63) + " " + bi.a1T[eG % 9]), 0 <= eG && (aPc.ql(L(289) + ": " + aD.data.teamPlayerCount[eG]).style.marginBottom = "1em"), eG < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eG]);
		aPc.qn(new vL({
			t0: aE.kf,
			value: value
		}, function(i1) {
			eG < 0 ? aD.data.botDifficultyValue = i1 : aD.data.botDifficultyTeam[eG] = i1
		})), qu.push(aPc)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(64), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, function() {
		var qu = [];
		if (function(qu) {
				var aPc = new qc,
					t0 = (aPc.qf(L(283)), [L(285), L(287), L(288), L(286)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), t0.splice(2, 1));
				aPc.qn(new vL({
					t0: t0,
					value: value
				}, function(eG) {
					aQK(), aD.data.botDifficultyType = eG, 0 === aD.data.gameMode && 2 === eG && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f6)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qu.push(aPc)
			}(qu), 0 === aD.data.botDifficultyType) aQP(qu, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aQP(qu, aB);
		else 3 === aD.data.botDifficultyType && ! function(qu) {
			var aPc = new qc;
			aPc.qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.botDifficultyData, 8)), aPc.qq(aQH), qu.push(aPc)
		}(qu);
		return qu
	}())
}

function aQQ(data) {
	var aPI, aQR, aQS, aQT, aQU, aQV, aQW, colors, aQX, aQY, aQZ = 0,
		aQa = 0,
		aQb = !1,
		aQc = !1,
		aQd = [1, 5, 60, 240, 1440, 10080, 43200];

	function aR7(lj, lk) {
		! function(lj, lk) {
			return aQR < lj && lj < aQR + aQT && aQS < lk && lk < aQS + aQU
		}(aQZ = lj, aQa = lk) ? (aQb && (bh.dp = !0), aQb = !1) : (aQb = !0, bh.dp = !0)
	}
	this.show = function() {
		aQc = bl.eU.data[127].value, aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize();
		var eh = h.k,
			vd = aPI.va(),
			aQm = eh * vd.vc,
			eh = eh * vd.sJ;
		aQV = bC.qz.ti(.06), aQW = bC.qz.ti(.04), aQR = bC.qz.ti(.06), aQS = eh + aQV, aQT = h.i - aQR - aQW, aQU = aQm + eh - aQS - aQW
	}, this.ve = function() {
		aPI.ve(),
			function() {
				var aB, aQj, gc, fG, fS, g = data.data,
					aQq = 1,
					aQr = .125,
					aQs = aQc ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQj = g[aB].aQj, gc = aQj.length, aQq = Math.max(gc, aQq), fS = 0; fS < gc; fS++) aQr = Math.max(aQj[fS], aQr), aQs = Math.min(aQj[fS], aQs);
				var nW = aQS + aQU,
					z2 = aQU / (aQr - aQs),
					z1 = 1 / (aQq - 1);
				for (vf.lineWidth = be.a05, aB = 0; aB < g.length; aB++) {
					for (aQj = g[aB].aQj, gc = aQj.length, fG = aQR, vf.beginPath(), vf.moveTo(fG + aQT, nW - z2 * (aQj[gc - 1] - aQs)), fS = gc - 2; 0 <= fS; fS--) vf.lineTo(fG + z1 * fS * aQT, nW - z2 * (aQj[fS] - aQs));
					vf.strokeStyle = colors[aB], vf.stroke()
				}(function(aQs, aQr, nW, z2) {
					vf.font = bC.qz.sq(0, .25 * aQR), bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 2), vf.fillStyle = colors[0];
					for (var fG = .92 * aQR, aB = 0; aB < 3; aB++) {
						var fb = aQs + aB * (aQr - aQs) / 2;
						vf.fillText((fb / 1e3).toFixed(3), fG, nW - z2 * (fb - aQs))
					}
				})(aQs, aQr, nW, z2),
				function(aQq) {
					var fI = aQS + aQU + .15 * aQW;
					vf.font = bC.qz.sq(0, Math.min(.4 * aQW, .028 * h.i)), bC.qz.textBaseline(vf, 0), bC.qz.textAlign(vf, 2), vf.fillStyle = colors[0], vf.fillText(bC.a3U.a4J(aQX), aQR + aQT, fI), bC.qz.textAlign(vf, 0), vf.fillText(bC.a3U.a4J(
						new Date(aQY.getTime() - 6e4 * (aQq - 1) * aQd[data.aQi])), aQR, fI)
				}(aQq),
				function(aQq, aQs, aQr) {
					if (aQb && !(aQq < 2)) {
						for (var a9i, eG = (aQZ - aQR) / aQT * (aQq - 1), aQv = Math.floor(eG), aQw = Math.floor(1 + eG), aQx = eG - aQv, aQy = 1e5, aQz = -1, aR0 = -1, aR1 = aQr - (aQr - aQs) * (aQa - aQS) / aQU, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDb, aQj = g[aB].aQj;
							aQj.length <= aQw || (aQj = aQj[aQv] + aQx * (aQj[aQw] - aQj[aQv]), (aDb = Math.abs(aR1 - aQj)) < aQy && (aQy = aDb, aQz = aB, aR0 = aQj))
						} - 1 !== aQz && (aQr = aQS + aQU - (aR0 - aQs) / (aQr - aQs) * aQU, vf.lineWidth = .5 * be.a05, vf.strokeStyle = colors[aQz], vf.beginPath(), vf.moveTo(aQR, aQr), vf.lineTo(aQZ, aQr), vf.lineTo(aQZ, aQS + aQU), vf
							.stroke(), vf.beginPath(), vf.arc(aQZ, aQr, .1 * aQR, 0, 2 * Math.PI), vf.fillStyle = colors[aQz], vf.fill(), aQs = aQS + aQU + .15 * aQW, bC.qz.textAlign(vf, 1), a9i = aQq - 2 < eG ? (a9i = aQY.getTime() - 6e4 *
								aQd[data.aQi], new Date(a9i + (eG - (aQq - 2)) * (aQX.getTime() - a9i))) : new Date(aQY.getTime() - 6e4 * (aQq - eG - 1) * aQd[data.aQi]), aQq = bC.a3U.a4J(a9i), eG = bC.qz.measureText(aQq), a9i = bN.iH(aQZ,
								aQR + .5 * eG, aQR + aQT - .5 * eG), vf.fillStyle = bC.color.nx(70, 50, 20), vf.fillRect(a9i - .52 * eG, aQS + aQU, 1.04 * eG, .55 * aQW), vf.fillStyle = colors[0], vf.fillText(aQq, a9i, aQs), vf.font = bC.qz
							.sq(0, .25 * aQR), bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 2), a9i = .92 * aQR, aQq = (aR0 / 1e3).toFixed(3), eG = bC.qz.measureText(aQq), aQs = a9i - 1.04 * eG, vf.fillStyle = bC.color.nx(70, 50, 20), vf
							.fillRect(aQs, aQr - .1625 * aQR, aQR - aQs, .275 * aQR), vf.fillStyle = colors[aQz], vf.fillText(aQq, a9i, aQr))
					}
				}(aQq, aQs, aQr)
			}(), vf.lineWidth = be.a05, vf.strokeStyle = bD.o5, vf.beginPath(), vf.moveTo(aQR, aQS), vf.lineTo(aQR, aQS + aQU), vf.lineTo(aQR + aQT, aQS + aQU), vf.stroke();
		var aB, fontSize = .5 * aQV,
			g = (vf.font = bC.qz.sq(0, fontSize), bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 0), data.data),
			f9 = g.length,
			fI = aQS - .5 * aQV,
			qg = "";
		for (aB = 0; aB < f9; aB++) qg += g[aB].name + "  ";
		qg = qg.trim();
		var aR4 = bC.qz.measureText(qg),
			fG = .5 * (h.i - aR4);
		for (aR4 > h.i && (fG = 0, vf.font = bC.qz.sq(0, h.i / aR4 * fontSize)), aB = 0; aB < f9; aB++) vf.fillStyle = colors[aB], vf.fillText(g[aB].name, fG, fI), fG += bC.qz.measureText(g[aB].name + "  ")
	}, this.hM = function(lj, lk) {
		aR7(lj, lk)
	}, this.a2f = function(lj, lk) {
		aR7(lj, lk)
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	};
	var aB, eY, a4H, i1, fC = data.data,
		f9 = fC.length,
		max = 1;
	for (aB = 0; aB < f9; aB++) max = Math.max(max, fC[aB].aQj.length);
	for (aB = 0; aB < f9; aB++)
		for (; fC[aB].aQj.length < max;) fC[aB].aQj.unshift(0);
	eY = new Date, a4H = 6e4 * eY.getTimezoneOffset(), i1 = eY.getTime() - a4H, aQX = new Date(i1), 6 === data.aQi ? function(eY, a4H) {
		var aQl = eY.getUTCFullYear(),
			eY = eY.getUTCMonth() + 1;
		aQY = eY < 12 ? new Date(Date.UTC(aQl, eY) - a4H) : new Date(Date.UTC(aQl + 1, 0) - a4H)
	}(eY, a4H) : (a4H = 6e4 * aQd[data.aQi], aQY = data.aQi <= 4 ? new Date(i1 + a4H - eY.getTime() % a4H) : new Date(i1 + a4H - (eY.getTime() + 2592e5) % a4H)), i1 = bC.color, colors = [bD.o5, i1.nx(255, 0, 0), i1.nx(0, 200, 0), i1.nx(80, 80,
		255), i1.nx(255, 255, 0), i1.nx(255, 0, 255), i1.nx(0, 255, 255), i1.nx(255, 140, 0), i1.nx(128, 128, 128), i1.nx(0, 255, 140)], aPI = new vP(L(290) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQi] + ", " + bC.a3U.a4G(aQX), [
		new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(291), function() {
			t.u(14)
		})
	], !1)
}

function aOy() {
	var aPI, aPJ, qu;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(292), [new w("⬅️ " + L(39), function() {
		t.aPG(13)
	})]), aPJ = new qs(aPI.vV, ((qu = []).push(function() {
		var aPc = new qc,
			aPk = (aPc.qf(L(293)), aPc.qh(L(294)), new w(L(295), function() {
				bl.sR.sS(130, 0), t.y.aRC()
			}, 0, 0, 1)),
			rm = new rn(bl.eU.data[126], 0, function() {
				aPk.button.click()
			});
		return aPc.qq(rm), rm.e.placeholder = "a,b,c", rm.e.style.marginTop = "0.5em", aPc.qq(new sU([aPk.button])), aPc
	}()), qu.push(function() {
		var aPc = new qc,
			aPk = new w(L(295), function() {
				bl.sR.sS(130, 1), t.y.aRC()
			}, 0, 0, 1),
			aRD = new rn(bl.eU.data[129], 1, function() {
				aRD.e.focus()
			}),
			aRE = new rn(bl.eU.data[128], 1, function() {
				aPk.button.click()
			});
		return aPc.qf(L(296)), aPc.qq(aRE), aRE.e.style.marginBottom = "0.5em", aPc.qf(L(297)), aPc.qq(aRD), aPc.qq(new sU([aPk.button])), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		return aPc.qf(L(298)), bl.eU.data[125].t0 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aPc.qn(new vL(bl.eU.data[125])), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		return aPc.qf(L(299)), aPc.qq(new sO(bl.eU.data[127], L(300))), aPc
	}()), qu))
}

function aOx() {
	var aPI, aRF, aQT, aRG, aRH, aRI, colors = [0, 0, 0],
		aRJ = -1;

	function aRM(aB) {
		var aRN = aRF.fI + aB * (be.gap + aRI);
		vf.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vf.fillRect(aRG, aRN, colors[aB] * aRH, aRI), vf.strokeStyle = bD.o5, vf.strokeRect(aRG, aRN, aRH,
			aRI), vf.fillStyle = bD.o5, vf.font = bC.qz.sq(0, .32 * aRI), bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 0), vf.fillText(L(0 === aB ? 303 : 1 === aB ? 304 : 305) + aRK(aB), aRG + be.gap, aRN + .53 * aRI)
	}

	function aRK(aB, aRO) {
		return aRO = aRO || 256, bN.iH(Math.floor(aRO * colors[aB]), 0, aRO - 1)
	}

	function a39(lj, lk) {
		return !(lj < aRG || lk < aRF.fI || lj > aRF.fG + aRF.i || lk > aRF.fI + aRF.j)
	}
	this.show = function() {
		var fb = bl.eU.data[121].value;
		colors[0] = (fb >> 12) / 63, colors[1] = (fb >> 6 & 63) / 63, colors[2] = (63 & fb) / 63, aPI.show(), this.resize()
	}, this.sG = function() {
		bl.sR.sS(121, (aRK(0, 64) << 12) + (aRK(1, 64) << 6) + aRK(2, 64)), aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aRF.resize();
		var eh = h.k,
			vd = aPI.va(),
			aRL = (aRF.fI = Math.max(aRF.fI, eh * vd.sJ + be.gap), eh * vd.vc - 2 * be.gap);
		aRF.j = Math.min(aRF.j, aRL), aRF.i = 2 * aRF.j, aRF.fI = eh * vd.sJ + .5 * (eh * vd.vc - aRF.j), aRF.fG = .5 * (h.i - aRF.i), aQT = .25 * aRF.i, aRG = aRF.fG + aQT + be.gap, aRH = aRF.i - aQT - be.gap, aRI = (aRF.j - 2 * be.gap) / 3
	}, this.ve = function() {
		var eF, th, fT;
		aPI.ve(), vf.lineWidth = be.a05, eF = aRK(0), th = aRK(1), fT = aRK(2), vf.fillStyle = "rgb(" + eF + "," + th + "," + fT + ")", vf.fillRect(aRF.fG, aRF.fI, aQT, aRF.j), vf.strokeStyle = bD.o5, vf.strokeRect(aRF.fG, aRF.fI, aQT, aRF.j), vf
			.fillStyle = eF + th + fT < 306 && th < 150 ? bD.o5 : bD.nw, bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 1), vf.font = bC.qz.sq(0, .1 * aRF.j), vf.rotate(-Math.PI / 2), vf.fillText(L(302), -aRF.fI - .5 * aRF.j, aRF.fG + .5 * aQT),
			vf.setTransform(1, 0, 0, 1, 0, 0), aRM(0), aRM(1), aRM(2)
	}, this.hM = function(lj, lk) {
		a39(lj, lk) && (aRJ = bN.iH(Math.floor((lk - aRF.fI) / (aRI + .75 * be.gap)), 0, 2), colors[aRJ] = bN.iH((lj - aRG) / aRH, 0, 1), bh.dp = !0)
	}, this.a2f = function(lj) {
		-1 !== aRJ && (colors[aRJ] = bN.iH((lj - aRG) / aRH, 0, 1), bh.dp = !0)
	}, this.a2i = function(lj, lk, deltaY) {
		a39(lj, lk) && (lj = bN.iH(Math.floor((lk - aRF.fI) / (aRI + .75 * be.gap)), 0, 2), colors[lj] = bN.iH(colors[lj] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bh.dp = !0)
	}, this.a33 = function() {
		0 <= aRJ && (aRJ = -1, bh.dp = !0)
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(301), [new w("⬅️ " + L(39), function() {
		t.y.aDW()
	})], !1), aRF = new ra([.5, .25], [.5, .5], 1)
}

function aP5() {
	var aQF, aQG, aQH, rY;

	function aQI() {
		aQK(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aPH()[19] = null, t.a2I()
	}

	function aRP() {
		aQK(), t.u(21)
	}

	function aQK() {
		1 === aD.data.gameMode ? aD.a5d.a5i() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bC.r7.a3p(aQH.vv(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, rY = [new w("⬅️ " + L(39), aQI)], 1 === aD.data.gameMode && rY.push(new w(L(306), aRP, 1, 1)), aQF = new vP(L(307), rY), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), 0 === aD.data.gameMode && (aPc.qn(new vL({
			t0: [L(308), L(286)],
			value: aD.data.colorsType
		}, function(eG) {
			aQK(), aD.data.colorsType = eG, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f6 || (aD.data.colorsData = new Uint32Array(aD.f6)), t.u(21)
		})), aPc.qq(new se));
		aPc.qq(new sO({
			value: aD.data.selectableColor
		}, L(309), function(value) {
			aD.data.selectableColor = value
		})), qu.push(aPc)
	}(rY = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qu) {
		var aPc = new qc;
		aPc.qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.colorsData, 1)), aPc.qq(aQH), qu.push(aPc)
	}(rY) : (aD.a5d.a5i(), rY.push(function() {
		var aPc = new qc;
		aPc.qf(L(289));
		for (var aB = 0; aB < bi.a1T.length; aB++) {
			var i1 = (aB + 1) % bi.a1T.length,
				e = aPc.ql((0 == i1 ? "" : "Team ") + bi.a1T[i1]);
			aB && (e.style.marginTop = "0.5em"), aPc.qq(new rn({
				eG: -1,
				value: aD.data.teamPlayerCount[i1]
			}, 1, 0, function(e) {
				aQF.vW[1].rJ(0);
				var playerCount = bN.iH(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aRR] = playerCount
			})).e.aRR = i1
		}
		return aPc
	}())), rY))
}

function tK(id, a4z, aRS) {
	var aPI, aRT;

	function aRY() {
		aRT.qv.innerHTML += "<br>" + L(312)
	}

	function aRi() {
		var fT = 1;
		t.u(4, 1, new v(L(313), L(314), !1, [new w("🔄 Reload", function() {
			fT && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fT = 0
		}, bD.oS)]))
	}

	function aRX() {
		bF.a7(90), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bJ.dh(bF.aC), bl.sR.sS(110, bH.tM.tN(bH.tM.tO(15))), b0.aGO.aRk()
	}
	this.aRU = !0, this.aRV = id, this.show = function() {
		aPI.show(), this.resize(), 15 === id ? (b0.y.aRW(id) ? aRX : aRY)() : 16 === id ? b0.y.aRW(id) ? b0.ee.ef(2) : aRY() : 17 === id ? b0.y.aRW(id) ? b0.ee.ef(3) : aRY() : 18 === id ? (b0.y.close(0, 3253), b0.y.aHL(0, id, 0), aRY()) : 21 ===
			id ? b0.y.aRW(id) ? b0.aRZ.aRa(a4z.tc, a4z.td, a4z.te) : aRY() : 22 === id ? b0.y.aRW(id) ? b0.aRZ.aRb(a4z.tc, a4z.aRc, a4z.aRd) : aRY() : 23 === id ? b0.y.aRW(id) ? b0.aRZ.aRe(a4z.aQi, a4z.a1o) : aRY() : 24 === id ? b0.y.aRW(id) ? b0
			.aRZ.aRf(a4z.aQi, a4z.td, a4z.te) : aRY() : 25 === id ? b0.y.aRW(id) ? b0.aGO.aQ1(a4z) : aRY() : 28 === id ? b0.y.aRW(id) ? b0.aRZ.aRg(a4z.tc, a4z.aRc, a4z.aRd) : aRY() : 29 === id ? b0.y.aRW(id) ? b0.aGO.aRh(a4z) : aRY() : 30 ===
			id && (b0.y.aRW(id) ? b9.aDR() || aRi() : aRY())
	}, this.aRj = function() {
		15 === id ? aRX() : 16 === id ? b0.ee.ef(2) : 17 === id ? b0.ee.ef(3) : 18 === id ? t.u(8, this.a2O, new tK(16)) : 21 === id ? b0.aRZ.aRa(a4z.tc, a4z.td, a4z.te) : 22 === id ? b0.aRZ.aRb(a4z.tc, a4z.aRc, a4z.aRd) : 23 === id ? b0.aRZ.aRe(
			a4z.aQi, a4z.a1o) : 24 === id ? b0.aRZ.aRf(a4z.aQi, a4z.td, a4z.te) : 25 === id ? b0.aGO.aQ1(a4z) : 28 === id ? b0.aRZ.aRg(a4z.tc, a4z.aRc, a4z.aRd) : 29 === id ? b0.aGO.aRh(a4z) : 30 === id ? b9.aDR() || aRi() : 1e3 === id && (
			this.aRV = id = 25, b0.aGO.aQ1(a4z))
	}, this.aDV = function(code, bw, data) {
		!bw && code !== id || (15 === code || 16 === code ? t.u(7, this.a2O) : 17 === code ? (b0.y.close(0, 3252), bl.y.wf(0), bl.eU.data[117].t0 && 0 < bl.eU.data[117].t0.length ? (bw = bl.y.wg(0), bl.sR.sS(105, bw.tH), bl.sR.sS(106, bw
			.password), t.u(8, this.a2O, new tK(16))) : (bl.sR.sS(105, ""), t.y.aDW())) : 21 === code ? t.u(10, this.a2O, new aBz(data)) : 23 === code ? t.u(13, this.a2O, new aQQ({
			data: data,
			aQi: a4z.aQi
		})) : 25 === code ? (t.y.aOz.tH = a4z.tH, bl.w3.mr(a4z.tH), t.u(15, this.a2O)) : 30 === code && (data ? t.u(1) : aRi()))
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(310), [new w("⬅️ " + L(39), function() {
		aRS ? t.u(29) : t.y.aDW()
	})]), aRT = new sT(aPI.vV, L(311))
}

function aP3() {
	var aQF, aQG, qu;

	function aRn() {
		var gc;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5d.a5i()), gc = bC.r7.a3j(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gc) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aQI() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aRp(), aD.data.canvas = null, t.u(5, 5)
	}

	function aRp() {
		bB.qJ.dh(), bl.sR.sS(156, bB.a5t.a0Z())
	}

	function aRl() {
		aD.data.isReplay = 0, aRp(), aD.a5d.a65(), aa.aHW(), aD.a5d.a62(), aD.data.canvas = 2 === aD.data.mapType ? bU.xd : null, aD.a5h(), aD.a5f = 1
	}

	function aS1() {
		aRn();
		for (var g = [aRs(), aRt(), aRu()], aB = 3; aB < 6; aB++) t.removeChild(aQG.qv, aQG.qw[aB].qe), aQG.qw[aB] = g[aB - 3], aQG.qv.appendChild(aQG.qw[aB].qe);
		aQG.resize()
	}

	function aRs() {
		var aS2, aPc = new qc;
		return aPc.qf(L(307)), aS2 = 0 === aD.data.gameMode ? [L(308), L(286)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aPc.ql(aS2), aPc.qq(new sU([new w(L(318), function() {
			t.u(21)
		}).button])), aPc
	}

	function aRt() {
		var aPc = new qc,
			g = (aPc.qf(L(64)), [L(285) + ": " + aE.kf[aD.data.botDifficultyValue], L(287), L(288), L(286)]);
		return aPc.ql(g[aD.data.botDifficultyType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(25)
		}).button])), aPc
	}

	function aRu() {
		var aPc = new qc,
			g = (aPc.qf("Spawning"), [L(308), L(320), L(286)]);
		return aPc.ql(g[aD.data.spawningType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(24)
		}).button])), aPc
	}
	this.show = function() {
		aQF.show(), this.resize(), aQF.vV.scrollTop = t.y.tB[0]
	}, this.sG = function() {
		t.y.tB[0] = aQF.vV.scrollTop, aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP("🔧 " + L(315), [new w("⬅️ " + L(39), aQI), new w(L(316), aRl)]), aRn(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bU.xd : 1 === aD.data.mapType ? aD.data.canvas = bU.aMh(bU.a63(aD.data), 0).xd : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bU.aMh(bU.a63(aD.data), aD.data.mapSeed).xd)), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc,
			a3z = (aPc.qf(L(317)), aD.data.canvas);
		a3z.style.width = "100%", aPc.qq({
			e: a3z
		}), aPc.qq(new sU([new w(L(318), function() {
			t.u(20)
		}).button])), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc = new qc;
		aPc.qf(L(289)), aPc.qq(new rn({
			eG: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bN.iH(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bC.r7.a3j(aD.data.teamPlayerCount, 0), aD.a5d.a5i(), bC.r7.a3j(aD.data.teamPlayerCount, 0) !== e) && aS1()
		})), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc;
		aPc.qf(L(319)), aPc.qn(new vL({
			t0: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eG) {
			aD.data.gameMode !== eG && (aD.data.gameMode = eG, aS1())
		})), qu.push(aPc)
	}(qu), qu.push(aRs()), qu.push(aRt()), qu.push(aRu()), function(qu) {
		var aPc = new qc,
			g = (aPc.qf(L(321)), [L(322), L(323), L(286)]);
		aPc.ql(g[aD.data.playerNamesType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(23)
		}).button])), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc,
			g = (aPc.qf(L(282)), [L(284), L(285) + ": " + aD.data.aIncomeValue, L(286)]);
		aPc.ql(g[aD.data.aIncomeType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(22)
		}).button])), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc,
			g = (aPc.qf(L(324)), [L(284), L(285) + ": " + aD.data.tIncomeValue, L(286)]);
		aPc.ql(g[aD.data.tIncomeType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(26)
		}).button])), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc,
			g = (aPc.qf(L(325)), [L(284), L(285) + ": " + aD.data.iIncomeValue, L(286)]);
		aPc.ql(g[aD.data.iIncomeType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(27)
		}).button])), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc,
			g = (aPc.qf(L(326)), [L(284), L(285) + ": " + aD.data.sResourcesValue, L(286)]);
		aPc.ql(g[aD.data.sResourcesType]), aPc.qq(new sU([new w(L(318), function() {
			t.u(28)
		}).button])), qu.push(aPc)
	}(qu), function(qu) {
		var aPc = new qc;
		aPc.qf(L(327)), aPc.qq(new sU([new w(L(328), function() {
			t.x(), aD.a5d.a66(), t.y.tB[0] = 0, t.u(19)
		}).button])), aPc.qq(new sU([new w(L(329), function() {
			bo.aJv()
		}).button])), aPc.qq(new sU([new w(L(330), function() {
			return bo.aJx(), !0
		}).button])), qu.push(aPc)
	}(qu), qu))
}

function aPE() {
	var aQF, rs = !0;

	function s9(s8, a6A) {
		var qe = document.createElement("div"),
			aS4 = document.createElement("span"),
			aS5 = document.createElement("span");
		aS4.textContent = aW.aCL(a6A.eX) + ":", aS4.style.color = bD.oK, aS4.style.paddingRight = "0.4em", aS4.style.display = "table-cell", aS4.style.width = "6ch", aS4.style.textAlign = "end", qe.appendChild(aS4), aS5.textContent = a6A.qg, qe
			.appendChild(aS5), qe.style.display = "table", a6A.pi && function(qe, pi) {
				{
					var aJJ;
					pi >= 1024 - aj.sF.zs ? ((aJJ = document.createElement("img")).src = aj.xg.zg[pi - 1024 + aj.sF.zs].toDataURL(), aJJ.style.width = "1.5em", aJJ.style.height = "1.5em", aJJ.style.verticalAlign = "middle", qe.appendChild(aJJ)) : ((
							aJJ = document.createElement("span")).textContent = aj.sF.a07(pi), aJJ.style.display = "inline-block", aJJ.style.fontSize = "1.5em", aJJ.style.lineHeight = "1em", aJJ.style.verticalAlign = "middle", qe.appendChild(
						aJJ))
				}
			}(qe, a6A.pi), s8.appendChild(qe)
	}

	function sC() {
		rs && (aQF.vV.scrollTop = aQF.vV.scrollHeight)
	}
	this.clear = function() {
		aQF.vV.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a73 = bs.a6D(), f9 = a73.length, s8 = document.createDocumentFragment(), aB = 0; aB < f9; aB++) s9(s8, a73[aB]);
		aQF.vV.appendChild(s8), sC(), aQF.show(), this.resize(), rs = !0, sC()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQF.vV.style.padding = "0.4em " + bC.qz.r8(be.r5)
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, this.zZ = function(a6A) {
		var s8 = document.createDocumentFragment();
		s9(s8, a6A), aQF.vV.appendChild(s8), sC()
	}, (aQF = new vP(L(331), [new w("⬅️ " + L(39), function() {
		t.aPG(1)
	})])).vV.style.overflowY = "auto", aQF.vV.addEventListener("scroll", function() {
		rs = aQF.vV.scrollTop >= aQF.vV.scrollHeight - aQF.vV.clientHeight - 2
	})
}

function aPB() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.iIncomeType && bC.r7.a3p(aQH.vv(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(325), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(284), L(285), L(286)],
			value: aD.data.iIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f6), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eG, t.u(27)
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc;
		1 === aD.data.iIncomeType && ((aPc = new qc).qf("Value"), aPc.qq(new rn({
			eG: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qu.push(aPc))
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.iIncomeType && ((aPc = new qc).qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.iIncomeData, 4)), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aOt() {
	var aS7, aS8, aRF, rm, aS9, sl = 0;
	this.aI4 = new tS, aRF = new ra([.45, .27], [.5, .5], 2 / 3), aS8 = [new w("⚔️<br>" + L(332), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aSA(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bD.oY), new w("🗡️<br>" + L(315), function() {
			aSA(1)
		}, bD.or), new w("🔑<br>" + L(333), function() {
			aSA(2)
		}, bD.pA), new w("☰<br>" + L(334), function() {
			aSA(3)
		}, bD.oI), new w("", function() {
			t.u(12)
		}, bD.o1, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rm = new rn(bl.eU.data[122]);
	for (var aB = 0; aB < aS8.length; aB++) aS8[aB].button.style.position = "absolute";

	function aSA(eG) {
		a0.a1.setState(10), ab.tl() || ab.aHv(), 0 === eG ? t.y.a5w(1) : 1 === eG ? (bB.aKF.xO(bl.eU.data[156].value, 1) || aD.a5d.a66(), t.u(19)) : 2 === eG ? 0 !== a0.id || bl.eU.data[140].value ? t.u(8, t.tJ, new tK(16)) : t.y.aSB(t.tJ, 16) :
			3 === eG && t.u(1)
	}
	rm.e.style.position = "absolute", rm.e.style.textAlign = "center", rm.e.placeholder = L(335), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aI4.show(), aS8[4].rJ(bC.color.a46(bl.eU.data[121].value)), this.resize(), document.body.appendChild(rm.e);
		for (var aB = 0; aB < aS8.length; aB++) document.body.appendChild(aS8[aB].button);
		1 !== a0.id || a0.e0 < 5 || (aS9 && bh.eX > aS9 + 144e5 ? a0.wO.setState(14) : aS9 = bh.eX)
	}, this.sG = function() {
		this.aI4.sG(), t.removeChild(document.body, rm.e);
		for (var aB = 0; aB < aS8.length; aB++) t.removeChild(document.body, aS8[aB].button)
	}, this.resize = function() {
		this.aI4.resize(), this.aI4.resize(), aRF.resize();
		var gap = .5 * be.gap,
			uH = 10 / 99 * .84 * aRF.i,
			aSE = .16 * aRF.j,
			aAG = .19 * aRF.i,
			fG = aRF.fG + aAG,
			uH = aRF.fI + uH + 3 * gap,
			i = .5 * (aRF.i - gap) - aAG,
			aAG = aRF.i - 2 * aAG - aSE - gap,
			aAG = (bC.qz.tj(rm.e, fG, uH, aAG, aSE), bC.qz.tj(aS8[4].button, fG + aAG + gap, uH, aSE, aSE), sl = uH, .5 * (aRF.fI + aRF.j - (uH += aSE + gap) - gap));
		bC.qz.tj(aS8[0].button, fG, uH, i, aAG), bC.qz.tj(aS8[1].button, fG + i + gap, uH, i, aAG), bC.qz.tj(aS8[2].button, fG, uH + aAG + gap, i, aAG), bC.qz.tj(aS8[3].button, fG + i + gap, uH + aAG + gap, i, aAG);
		bC.qz.tj(aS8[5].button, fG, uH + aAG * 2 + gap * 2, i * 2 + gap, aAG / 3);
		bC.qz.tj(aS8[6].button, fG, uH + aAG * 2.33 + gap * 3, i * 2 + gap, aAG / 3);
		for (var aB = 0; aB < aS8.length; aB++) aS8[aB].button.style.font = bC.qz.sq(0, bC.qz.v5(.065 * aRF.j)), bC.qz.r9(aS8[aB].button, 5);
		rm.e.style.font = bC.qz.sq(0, bC.qz.v5(.08 * aRF.j)), bC.qz.r9(rm.e, 5)
	}, this.ve = function() {
		if (aa.aHa(), aT.ve(), f9 = Math.floor((a0.a1.iI() ? .018 : .0137) * h.iJ), vf.font = bC.qz.sq(0, Math.max(5, f9)), bC.qz.textBaseline(vf, 0), bC.qz.textAlign(vf, 2), vf.fillStyle = bD.o5, vf.fillText(l.e0, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vf.measureText(text).width, f9 = Math.max(5, f9), vf.textAlign = "left", vf.textBaseline = "middle", vf.fillText(text, vf.canvas.width - textLength - f9 / 2, 2 * f9), aO.ve(sl), ba.ve(), ab.tl()) {
			vf.imageSmoothingEnabled = !1;
			var text = ab.aHd("territorial.io"),
				textLength = .84 * aRF.i / text.width;
			vf.setTransform(textLength, 0, 0, textLength, aRF.fG + .08 * aRF.i, aRF.fI), aS7 = aS7 || bC.a3Q.a4x(text, bC.a3Q.a53, [0, 0, 0]);
			for (var fG = -1; fG <= 1; fG += 2)
				for (var fI = -1; fI <= 1; fI += 2) vf.drawImage(aS7, fG, fI);
			vf.drawImage(text, 0, 0), vf.imageSmoothingEnabled = !0;
			var f9 = ab.aHd("logo"),
				aSH = .6666 * textLength * text.height / f9.height,
				ni = .5 * h.i,
				nj = aRF.fI + .5 * textLength * text.height - .5 * aSH * f9.height;
			vf.setTransform(aSH, 0, 0, aSH, ni - .6 * textLength * text.width, nj), vf.drawImage(f9, 0, 0), vf.setTransform(aSH, 0, 0, aSH, ni + .6 * textLength * text.width - aSH * f9.width, nj), vf.drawImage(f9, 0, 0), vf.setTransform(1, 0, 0,
				1, 0, 0), vf.imageSmoothingEnabled = !0
		}
	}
}

function aP0() {
	var aPI, aSI, aSJ, vQ;

	function aSK(aB) {
		t.u(8, t.tJ, new tK(21, {
			tc: aB,
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aSJ = [new w(L(336), function() {
		aSK(1)
	}, 0, 0, 1), new w(L(337), function() {
		aSK(2)
	}, 0, 0, 1), new w(L(338), function() {
		aSK(3)
	}, 0, 0, 1), new w(L(339), function() {
		aSK(0)
	}, 0, 0, 1), new w(L(340), function() {
		aSK(9)
	}, 0, 0, 1), new w(L(341), function() {
		aSK(10)
	}, 0, 0, 1), new w(L(342), function() {
		aSK(11)
	}, 0, 0, 1)], vQ = [new w("⬅️ " + L(39), function() {
		t.a2I()
	})], aPI = new vP(L(343), vQ), aSI = new rX(aSJ, aPI.vV)
}

function aDt(title, qm, aSL) {
	var aPI, aRT;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aSL = aSL || [new w("⬅️ " + L(39), function() {
		t.a2I()
	}, bD.ol)], aPI = new vP(title, aSL), aRT = new sT(aPI.vV, qm), bC.qz.textAlign(aPI.vV.style, 1)
}

function aBz(data) {
	var aPI, aSM;

	function aSV(f9) {
		return f9 < 60 ? 1 === f9 ? f9 + " Second" : f9 + " Seconds" : f9 < 3600 ? 1 === (f9 = Math.floor(f9 / 60)) ? f9 + " Minute" : f9 + " Minutes" : f9 < 172800 ? 1 === (f9 = Math.floor(f9 / 3600)) ? f9 + " Hour" : f9 + " Hours" : (f9 = Math
			.floor(f9 / 172800)) + " Days"
	}

	function aSO(jj) {
		var f9 = data.data.length;
		if (f9) {
			for (var td, max = min = parseInt(data.data[0][0]), aB = 1; aB < f9; aB++) var aFt = parseInt(data.data[aB][0]),
				min = Math.min(aFt, min),
				max = Math.max(aFt, max);
			td = jj < 0 ? min + jj : max + 1, t.u(8, t.a2N().a2O, new tK(21, {
				tc: data.tc,
				td: td,
				te: td + Math.abs(jj)
			}))
		}
	}
	if (this.show = function() {
			aPI.show(), this.resize()
		}, this.sG = function() {
			aPI.sG()
		}, this.resize = function() {
			aPI.resize(), aSM.resize()
		}, this.a3D = function(eh) {
			2 === eh && aPI.vW[0].rG()
		}, data.aC0) {
		aPI = new vP(L(118), [new w("⬅️ " + L(39), function() {
			t.a2I()
		})]);
		var fC = {
				t1: [],
				t7: [L(356), L(357), L(358) + " ↗"],
				tE: [12, 50, 38]
			},
			a60 = aD.data.a60;
		if (a60) {
			for (var f9 = a60.length, t1 = fC.t1, za = ag.za, aB = 0; aB < f9; aB++) t1.push([{
				fb: aB + 1 + ".",
				eY: 0
			}, {
				fb: za[aB],
				eY: 0
			}, {
				fb: bH.tM.a0O(a60[aB], 5),
				eY: 1,
				tH: a60[aB],
				tI: 0
			}]);
			aSM = new sz(aPI.vV, fC, {
				tA: 1
			})
		} else aSM = new sz(aPI.vV, fC)
	} else {
		var fC = data.data.length ? 0 : 1,
			aSL = [new w("⬅️ " + L(39), function() {
				t.a2I()
			}), new w(L(344), function() {
				aSO(-10)
			}, fC, 0, 1), new w(L(345), function() {
				aSO(10)
			}, fC, 0, 1), new w(L(291), function() {
				t.u(11, 10, new aSP({
					tc: data.tc
				}))
			})],
			t7 = [L(346), L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(354), L(355), L(341), L(342), "Audit Log"];
		aPI = new vP(t7[data.tc], aSL), ! function() {
			var aB, fC = {
					t1: []
				},
				t1 = fC.t1,
				aSR = data.data,
				f9 = aSR.length;
			f9 && 0 === aSR[0][0] && 0 <= (eG = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tc]) && (t.y.tf[eG] = aSR[0][1]);
			var nh = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tc],
				a59 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tc],
				eG = [
					[L(359), L(360) + " ↗", L(361)],
					[L(359), L(362), L(363), L(364) + " ↗"],
					[L(359), L(360) + " ↗", L(363)],
					[L(359), L(360) + " ↗", L(363)],
					[L(356), L(365), L(366) + " ↗", L(367) + " ↗", L(122)],
					[L(356), L(365), L(368) + " ↗", L(369) + " ↗", L(370)],
					[L(356), L(365), L(371) + " ↗", L(372) + " ↗", L(373)],
					[L(356), L(365), L(368) + " ↗", L(369) + " ↗", L(374)],
					[L(356), L(365), L(366) + " ↗", L(367) + " ↗", L(122)],
					[L(359), L(360) + " ↗", L(363)],
					[L(359), L(360) + " ↗", L(375)],
					[L(359), L(360) + " ↗", L(363)],
					[L(356), L(365), L(366) + " ↗", L(367) + " ↗", L(376)]
				];
			if (fC.t7 = eG[data.tc], fC.tE = [
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
					[10, 15, 25, 25, 25]
				][data.tc], 0 === data.tc || 2 === data.tc || 3 === data.tc || 9 === data.tc || 10 === data.tc || 11 === data.tc)
				for (aB = 0; aB < f9; aB++) t1.push([{
					fb: aSR[aB][0] + 1 + ".",
					eY: 0
				}, {
					fb: aSR[aB][1],
					eY: 1,
					tH: aSR[aB][4],
					tI: aSR[aB][3]
				}, {
					fb: (nh * aSR[aB][2]).toFixed(a59),
					eY: 0
				}]);
			else if (12 === data.tc)
				for (aB = 0; aB < f9; aB++) {
					var aSU = aSR[aB][3];
					t1.push([{
						fb: "" + aSR[aB][0],
						eY: 0
					}, {
						fb: aSV(aSR[aB][4]),
						eY: 0
					}, {
						fb: aSR[aB][5],
						eY: 1,
						tH: aSR[aB][1],
						tI: 0
					}, {
						fb: aSR[aB][6],
						eY: 1,
						tH: aSR[aB][2],
						tI: 0
					}, {
						fb: bq.eM(aSU, bH.tM.a0O(aSR[aB][1], 5)),
						eY: 0
					}])
				} else if (1 === data.tc)
					for (aB = 0; aB < f9; aB++) t1.push([{
						fb: aSR[aB][0] + 1 + ".",
						eY: 0
					}, {
						fb: aSR[aB][1],
						eY: 0
					}, {
						fb: (nh * aSR[aB][2]).toFixed(a59),
						eY: 0
					}, {
						fb: aSR[aB][3],
						eY: 1,
						tH: aSR[aB][5],
						tI: aSR[aB][4]
					}]);
				else if (4 === data.tc || 5 === data.tc || 6 === data.tc || 7 === data.tc || 8 === data.tc)
				for (aB = 0; aB < f9; aB++) {
					var aSW = aSR[aB][5];
					4 === data.tc || 8 === data.tc ? "100%" === (aSW = (aSW % 64 * 100 / (aSW >> 6)).toFixed(0) + "%") && (4 === data.tc ? aSW += " (" + L(377) + ")" : aSW += " (" + L(378) + ")") : 5 === data.tc ? 32768 <= aSW && (aSW = -(aSW -
						32768)) : aSW = (nh * aSW).toFixed(a59), t1.push([{
						fb: "" + aSR[aB][0],
						eY: 0
					}, {
						fb: aSV(aSR[aB][6]),
						eY: 0
					}, {
						fb: aSR[aB][7],
						eY: 1,
						tH: aSR[aB][1],
						tI: aSR[aB][2]
					}, {
						fb: aSR[aB][8],
						eY: 1,
						tH: aSR[aB][3],
						tI: aSR[aB][4]
					}, {
						fb: "" + aSW,
						eY: 0
					}])
				}
			aSM = new sz(aPI.vV, fC)
		}()
	}
}

function aSP(a4z) {
	var aPI, aPJ, qu;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(379), [new w("⬅️ " + L(39), function() {
		t.aPG(10)
	})]), aPJ = new qs(aPI.vV, ((qu = []).push(function() {
		var aPk, aPc = new qc,
			aRD = new rn(bl.eU.data[132], 1, function() {
				aPk.button.click()
			}),
			aRE = new rn(bl.eU.data[131], 1, function() {
				aRD.e.focus()
			});
		aPc.qf(L(296)), aPc.qq(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qf(L(297)), aPc.qq(aRD);
		return aPk = new w(L(295), function() {
			td = Math.floor(aRE.e.value), te = Math.floor(aRD.e.value);
			var te, td = {
				a3h: Math.min(td, te),
				aOQ: Math.max(td, te)
			};
			t.u(8, t.a6C(10).a2O, new tK(21, {
				tc: a4z.tc,
				td: td.a3h,
				te: td.aOQ
			}))
		}, 0, 0, 1), aPc.qq(new sU([aPk.button])), aPc
	}()), qu.push(function() {
		var aPk, aPc = new qc,
			aRD = new rn(bl.eU.data[134], 1, function() {
				aPk.button.click()
			}),
			aRE = new rn(bl.eU.data[133], 0, function() {
				aRD.e.focus()
			});
		return aPc.qf(1 === a4z.tc ? L(380) : L(381)), aPc.qq(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qf(L(382)), aPc.qq(aRD), aPk = new w(L(295), function() {
			var aRc = aRE.e.value.slice(0, 20),
				aRd = Math.abs(Math.floor(aRD.e.value));
			t.u(8, t.a6C(10).a2O, new tK(22, {
				tc: a4z.tc,
				aRc: aRc,
				aRd: aRd
			}))
		}, 0, 0, 1), aPc.qq(new sU([aPk.button])), aPc
	}()), qu.push(function() {
		var aPk, aPc = new qc,
			aRD = new rn(bl.eU.data[152], 1, function() {
				aPk.button.click()
			}),
			aRE = new rn(bl.eU.data[151], 0, function() {
				aRD.e.focus()
			});
		return aPc.qf(L(383)), aPc.qq(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qf(L(382)), aPc.qq(aRD), aPk = new w(L(295), function() {
			var aRc = aRE.e.value.slice(0, 5),
				aRd = Math.abs(Math.floor(aRD.e.value));
			t.u(8, t.a6C(10).a2O, new tK(28, {
				tc: a4z.tc,
				aRc: aRc,
				aRd: aRd
			}))
		}, 0, 0, 1), aPc.qq(new sU([aPk.button])), aPc
	}()), qu))
}

function aPD() {
	var aSa, tq, aSd, tp, ts, aSb = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aSc = new Array(4),
		aSe = new Array(2),
		aSf = [L(63), L(340), L(384), L(385)];

	function aFf() {
		var aEy;
		!bp.a2G || (aEy = aSa.u3.rm.e.value.trim().slice(0, 127)).length < 1 || (aSa.u3.rm.e.value = "", bp.aDw.a1B(aEy))
	}

	function aSi(aSk) {
		bp.y.s3[3] = 1 - bp.y.s3[3], aSj(3, 1, bp.y.s3[3]), aSk && b0.aFq.aFr(4), bp.y.s3[3] && bl.sR.sS(158, bp.y.s3[0])
	}

	function aSg(fS, fT) {
		bp.y.s3[fS] !== fT && (0 === fS && bp.y.s3[3] && aSi(0), aSj(fS, bp.y.s3[fS], 0), aSj(fS, fT, 1), bp.y.s3[fS] = fT, 0 === fS ? (b0.aFq.aFr(2, fT), bp.y.s3[2] ? (aSa.u4.mr(), aSa.u3.s0(1)) : aSa.u3.s0(0), t.a2N().aFU(), t.a2N().aFT()) : 2 ===
			fS && (0 === fT ? (b0.aFq.aFr(0), aSa.u3.mr(), aSa.uC()) : (b0.aFq.aFr(1), aSa.u4.mr(), aSa.uD())))
	}

	function aSj(fS, fT, color) {
		aSa.u6[fS].rY[fT].rJ(color ? bD.oU : bD.pK)
	}

	function aSn(ep) {
		return bU.xT.aNf[ep]
	}

	function aSo(aEi) {
		return aEi < 7 ? "   " + (aEi + 2) + " Teams" : 10 === aEi ? "   No Full-Sending" : ""
	}

	function aSp(aFW, aSw) {
		return aSw ? aFW <= 90 && 60 < aFW ? "   Contest" : "" : aFW <= 60 ? "   Contest" : ""
	}
	this.aG1 = function() {
		return aSa.u3
	}, this.aDw = function(tH) {
		aSg(2, 0);
		var qg = aSa.u3.rm.e.value,
			tH = "@" + tH + " ";
		qg.length && !bC.ry.a4T(qg, " ") && (tH = " " + tH), aSa.u3.rm.e.value = qg += tH, aSa.u3.rm.e.focus()
	}, this.aFS = function() {
		aSa.u4.mr()
	}, this.aFU = function() {
		var aSm = bp.y.s3[0],
			aSm = bp.y.s5[aSm],
			fT = (bU.a7(aSm.ep, aSm.mapSeed), tq.rY),
			a7t = aSn(aSm.ep, aSm.mapSeed) + aSo(aSm.aEi) + aSp(aSm.aFW),
			aSm = L(388) + "   " + aSn(aSm.aGS, aSm.aGT) + aSo(aSm.aGU) + aSp(aSm.aFW, 1);
		fT[0].button.textContent === a7t && fT[1].button.textContent === aSm || (fT[0].button.textContent = a7t, fT[1].button.textContent = aSm, tq.resize())
	}, this.aFT = function() {
		var aSm = bp.y.s3[0],
			s4 = bp.y.s5[aSm];
		aSa.uA(s4.uB);
		for (var fb, a89, aB = 0; aB < bp.uS.uT.length; aB++) aSb[0][aB].rx.textContent = bp.uS.uT[aB].length, aSb[1][aB].rx.textContent = (fb = bp.y.s5[aB].aFW, a89 = void 0, ((a89 = bN.fa(fb, 60)) < 10 ? "0" : "") + a89 + ":" + ((fb %= 60) <
			10 ? "0" : "") + fb);
		var s4 = bp.uS.uT[aSm],
			aSr = s4.length,
			aSs = bp.uS.uU[aSm];
		aSb[2][1].rx.textContent = "" + aSr, aSb[3][1].rx.textContent = "" + aSs;
		for (aB = 0; aB < 4; aB++) {
			var aSt = bp.y.s5[aB];
			aSc[aB] ? 0 === aSt.uB && (aSc[aB].rx.textContent = bU.xT.aNf[aSt.ep]) : aSc[aB] = new rw(bU.xT.aNf[aSt.ep], tp.rY[aB].button, 1, 1), bC.ry.startsWith(aSf[aB], "🏆 ") ? aSt.aEo || (aSf[aB] = aSf[aB].substring(3), tp.rY[aB].button
				.textContent = aSf[aB], tp.rY[aB].button.appendChild(aSb[1][aB].rx), tp.rY[aB].button.appendChild(aSb[0][aB].rx), tp.rY[aB].button.appendChild(aSc[aB].rx)) : aSt.aEo && (aSf[aB] = "🏆 " + aSf[aB], tp.rY[aB].button
				.textContent = aSf[aB], tp.rY[aB].button.appendChild(aSb[1][aB].rx), tp.rY[aB].button.appendChild(aSb[0][aB].rx), tp.rY[aB].button.appendChild(aSc[aB].rx))
		}
		var aSu = "",
			aSv = "";
		0 === aSm && (aSu = bp.lJ.aF3(s4, 0, aSr), aSv = bp.lJ.aF3(s4, 0, aSs)), aSd[0].rx.textContent = aSu, aSd[1].rx.textContent = aSv, aSe[1].rx.textContent = "MP: " + bp.y.aFM[0] + "   SP: " + bp.y.aFM[1] + "   Lobby: " + bC.r7.a3u(bp.uS.uT)
	}, this.aFY = function() {
		aSa.u3.mr()
	}, this.show = function() {
		aSa.show(), this.resize(), bp.message.show()
	}, this.sG = function() {
		aSa.sG(), bp.up.sG(), bp.uP.sG(), bp.message.sG()
	}, this.resize = function() {
		aSa.resize(1 - bp.y.s3[2]), bp.message.resize()
	}, this.a3D = function(eh) {
		2 === eh ? bp.y.s3[3] ? aSi(1) : aSa.u6[3].rY[0].rG() : eh < 2 && aSi(1)
	}, tp = new sX([new w(aSf[0], function() {
		return aSg(0, 0), 2
	}), new w(aSf[1], function() {
		return aSg(0, 1), 2
	}), new w(aSf[2], function() {
		return aSg(0, 2), 2
	}), new w(aSf[3], function() {
		return aSg(0, 3), 2
	})], bD.pK), tq = new sX([new w("", 0, 2), new w("", 0, 2)], bD.pL, 1);
	var aSh = new sX([new w(L(386), function() {
		return aSg(2, 0), 2
	}), new w(L(118), function() {
		return aSg(2, 1), 2
	})], bD.pK);
	ts = new sX([new w(L(25, 0, 0, 1), function() {
		t.x(), bp.uj(), b0.y.a2V(3240), t.u(5, 5)
	}), new w(L(387), function() {
		return aSi(1), 2
	})], bD.pK), aSa = new tn(tp, tq, aSh, ts, aFf, bp.up.aGB);
	for (var aB = 0; aB < 4; aB++) aSb[0][aB] = new rw("0", tp.rY[aB].button), aSb[1][aB] = new rw("0", tp.rY[aB].button, 1);
	aSb[2][1] = new rw("0", aSh.rY[1].button), aSb[3][1] = new rw("0", ts.rY[1].button), (aSd = [new rw("", aSh.rY[1].button, 1, 1), new rw("", ts.rY[1].button, 1, 1)])[0].rx.style.bottom = "0em", aSd[1].rx.style.bottom = "0em", aSj(0, bp.y.s3[0],
		1), aSj(2, bp.y.s3[2], 1), (aSe = [new rw(L(289), aSa.uE(), 1, 0), new rw("", aSa.uE(), 1, 1)])[0].rx.style.fontSize = "0.4em", aSe[1].rx.style.fontSize = "0.4em"
}

function aOu() {
	var aPI, aPJ, qu;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(389), [new w("⬅️ " + L(39), function() {
		t.u(7, t.a6C(7).a2O)
	}), new w(L(208), function() {
		bl.sR.sS(105, bI.tM.xD(aPJ.qw[0].qd[0].e.value, 5)), bl.sR.sS(106, bI.tM.xD(aPJ.qw[1].qd[0].e.value, 15)), t.u(8, t.a6C(7).a2O, new tK(18))
	})]), aPJ = new qs(aPI.vV, ((qu = []).push(function() {
		var aPc = new qc;
		return aPc.qf(L(186)), aPc.qq(new rn({
			value: "",
			eG: -1
		})), aPc
	}()), qu.push(function() {
		var aPc = new qc,
			aPm = (aPc.qf(L(188)), new rn({
				value: "",
				eG: -1
			}));
		return aPm.e.type = "password", aPc.qq(aPm), aPc.qq(new sU([new w(L(189), function(e) {
			return e.textContent === L(189) ? (e.textContent = L(190), aPm.e.type = "text") : (e.textContent = L(189), aPm.e.type = "password"), !0
		}).button])), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		return aPc.qf(L(192)), aPc.qh(L(390)), aPc.qh(L(391)), aPc.qh(L(392)), aPc
	}()), qu))
}

function aP1() {
	var aPI, aSI, aSJ, vQ;

	function aSK(aB) {
		t.u(8, t.tJ, new tK(21, {
			tc: aB,
			td: 0,
			te: 10
		}))
	}
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aSJ = [new w(L(351), function() {
		aSK(5)
	}, 0, 0, 1), new w(L(352), function() {
		aSK(6)
	}, 0, 0, 1), new w(L(353), function() {
		aSK(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aSK(12)
	}, 0, 0, 1)], vQ = [new w("⬅️ " + L(39), function() {
		t.a2I()
	})], aPI = new vP(L(393), vQ), aSI = new rX(aSJ, aPI.vV)
}

function aOl() {
	this.eU = {}, this.tf = new Array(7), this.aOz = null, this.aOw = null, this.sx = 0, this.tB = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5w = function(aSz) {
		aSz && (aZ.aHF = aSz), t.x(), aZ.dh()
	}, this.aDW = function() {
		t.u(0 === aa.a2J() ? 5 : 0)
	}, this.aRC = function() {
		if (1 === bl.eU.data[130].value) t.u(8, t.a2N().a2O, new tK(24, {
			aQi: bl.eU.data[125].value,
			td: bl.eU.data[128].value,
			te: bl.eU.data[129].value
		}));
		else {
			for (var g = (g = bl.eU.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a2N().a2O, new tK(23, {
				aQi: bl.eU.data[125].value,
				a1o: g
			}))
		}
	}, this.aSB = function(a2O, target) {
		t.u(4, a2O, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aPd(
				"/privacy"), !1, [new w("⬅️ " + L(39), function() {
				t.u(a2O)
			}), new w("✅ Accept", function() {
				bl.sR.sS(140, 1), 0 === target ? t.u(2, a2O) : t.u(8, a2O, new tK(target))
			})]))
	}, this.aT0 = function() {
		for (var aB = 0; aB < 7; aB++) this.tf[aB] = bI.x4.x8(bJ.q7(5));
		this.tf[1] = "[" + this.tf[1] + "]", 5 === t.tJ && (t.a2N().aI4.sS(this.tf), t.a2N().resize())
	}, this.aPl = function(fb, pT, a7i) {
		fb = bC.gV.a4w(fb, 1, 1e6);
		var aT1 = Math.max(1, 1 + Math.floor(.01 * (fb - 100))),
			pT = L(394, [pT]);
		return (pT += "<br>") + L(395, [a7i]) + "<br>" + L(396, [aT1 < 20 ? fb + aT1 + "–" + (fb + 20) : fb + aT1]) + "<br>" + L(397, [fb])
	}
}

function aP4() {
	var aQF, aQG, aT2, qu;

	function aQI() {
		b6.uj(), t.aPH()[19] = null, t.a2I()
	}

	function aT9() {
		aTC(), aTA()
	}

	function aTC() {
		aT2.qe.lastChild && t.removeChild(aT2.qe, aT2.qe.lastChild)
	}

	function aTA() {
		var aTD = bU.a63(aD.data);
		aD.data.canvas = bU.aMh(aTD, aD.data.mapSeed).xd, aTB()
	}

	function aTB() {
		var a3z = aD.data.canvas;
		a3z.style.width = "100%", aT2.qe.appendChild(a3z)
	}
	this.aJI = function(a3z) {
		aD.data.canvas && aTC(), aD.data.canvas = a3z, aTB()
	}, this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(317), [new w("⬅️ " + L(39), aQI)]), 2 === aD.data.mapType && b6.dh(), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(398), L(399), L(400)],
			value: aD.data.mapType
		}, function(eG) {
			2 === (aD.data.mapType = eG) ? (b6.dh(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uj()), t.u(20)
		})), 2 <= aD.data.mapType && (aPc.qq(new se), aPc.qq(new sO({
			value: aD.data.passableWater
		}, L(401), function(value) {
			aD.data.passableWater = value
		})), aPc.qq(new sO({
			value: aD.data.passableMountains
		}, L(402), function(value) {
			aD.data.passableMountains = value
		})));
		qu.push(aPc)
	}(qu = []), function(qu) {
		if (0 === aD.data.mapType) {
			for (var aPc = new qc, t0 = (aPc.qf(L(317)), []), aB = 0; aB < bU.xT.aNd.length; aB++) t0.push(bU.xT.xU[bU.xT.aNd[aB]].name);
			aPc.qn(new vL({
				t0: t0,
				value: aD.data.mapProceduralIndex
			}, function(eG) {
				aD.data.mapProceduralIndex = eG, aT9()
			})), qu.push(aPc)
		}
	}(qu), function(qu) {
		if (1 === aD.data.mapType) {
			for (var aPc = new qc, t0 = (aPc.qf(L(317)), []), aB = 0; aB < bU.xT.aNe.length; aB++) t0.push(bU.xT.xU[bU.xT.aNe[aB]].name);
			aPc.qn(new vL({
				t0: t0,
				value: aD.data.mapRealisticIndex
			}, function(eG) {
				aD.data.mapRealisticIndex = eG, aT9()
			})), qu.push(aPc)
		}
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.mapType && ((aPc = new qc).qf(L(403)), aPc.qq(new rn(bl.eU.data[162], 1)), aPc.qf(L(404), "0.8em"), aPc.qq(new sU([new w(L(405), function() {
			return b6.aJB(), !0
		}).button])), qu.push(aPc))
	}(qu), function(qu) {
		var aPc, rm;
		2 === aD.data.mapType && ((aPc = new qc).qf(L(406)), rm = new rn({
			eG: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aPc.qq(rm), qu.push(aPc))
	}(qu), function(qu) {
		var aPc, rm, aPk;
		0 === aD.data.mapType && ((aPc = new qc).qf("Seed"), rm = new rn({
			eG: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aT9())
		}), aPk = new w(L(308), function(e) {
			var aMc = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aMc) return rm.e.value = aD.data.mapSeed = aMc, aT9(), !0
		}), aPc.qq(rm), aPc.qq(new sU([aPk.button])), qu.push(aPc))
	}(qu), function(qu) {
		(aT2 = new qc).qf(L(407)), 2 !== aD.data.mapType ? aTA() : aD.data.canvas && aTB();
		qu.push(aT2)
	}(qu), qu))
}

function v(title, qm, aTE, aSL) {
	var aPI, aRT;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aSL = aSL || [new w("⬅️ " + L(39), function() {
		t.a2I()
	})], aPI = new vP(title, aSL), aRT = new sT(aPI.vV, qm), aTE && bC.qz.textAlign(aPI.vV.style, 1)
}

function aP7() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 === aD.data.playerNamesType && 1 === bC.r7.a3d(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.playerNamesType && bC.r7.a3r(aQH.vv(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(321), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(322), L(323), L(286)],
			value: aD.data.playerNamesType
		}, function(eG) {
			aQK(), aD.data.playerNamesType = eG, t.u(23)
		})), aPc.qq(new se), aPc.qq(new sO({
			value: aD.data.selectableName
		}, L(408), function(value) {
			aD.data.selectableName = value
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc;
		2 === aD.data.playerNamesType && ((aPc = new qc).qf("Data"), aQH = new vn(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f6 || (aD.data.playerNamesData = new Array(aD.f6), aD.data.playerNamesData
			.fill("")), aQH.vu(bC.ry.a5M(aD.data.playerNamesData, 1, '"')), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aPF() {
	var aQF, aQG, qu;

	function aTK() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bl.eU.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fS = 0; fS < 3; fS++) fS < g.length && (colors[aB][fS] = Number(g[fS]))
		}
		return colors
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(409), [new w("⬅️ " + L(39), function() {
		t.a2I()
	})]), aQG = new qs(aQF.vV, ((qu = []).push(function() {
		var aPc = new qc;
		return aPc.qf(L(410)), aPc.ql(b0.y.aPd("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aPc.ql("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aPc
	}()), qu.push(function() {
		var aPc = new qc,
			ej = (aPc.qf(L(411)), bl.eU.data[174].value),
			qi = aPc.qh(ej.length + " / 180"),
			aPx = (qi.style.textAlign = "center", new vn(0, 1, function(e) {
				var e = e.target.value,
					gc = e.length;
				qi.textContent = gc + " / 180", gc <= 180 && bl.sR.sS(174, e)
			}));
		return aPx.e.rows = 6, aPx.e.style.fontSize = "1em", aPx.vu(ej), aPc.qq(aPx), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		aPc.qf(L(307));
		for (var aB = 0; aB < 11; aB++) {
			var iS = aPc.qq(new rn(bl.eU.data[163 + aB]));
			aB && (iS.e.style.marginTop = "0.6em")
		}
		return aPc.qq(new sU([new w(L(412), function() {
			for (var data = bl.eU.data, aB = 163; aB < 174; aB++) data[aB] && bl.eU.wA(aB, data[aB].wD);
			t.a2I(), t.aPH()[31] = null, t.u(31)
		}).button])), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		return aPc.qf("Targeting"), aPc.ql(L(413)), aPc.qq(new rn(bl.eU.data[175], 0, 0)), aPc
	}()), qu.push(function() {
		var aPc = new qc;
		return aPc.qf(L(407)), aPc.qq(new sU([new w(L(189), function() {
			(new ei).show(bl.eU.data[174].value, aTK(), -1)
		}).button])), aPc
	}()), qu.push(function() {
		var aPc = new qc,
			aTL = (aPc.qf(L(414)), aPc.ql(L(415)), new rn(bl.eU.data[176], 1, 0)),
			aTM = (aPc.qq(aTL), new w(L(416), function(e) {
				return aTN.button.textContent === L(185) && b0.y.ed(0) && (bC.qz.vI(e), aPj(), b0.aGO.aTO(bl.eU.data[176].value, aTK(), bl.eU.data[175].value, bl.eU.data[174].value)), !0
			}, 1)),
			aPj = function() {
				aTN.button.textContent = L(184), aTM.rJ(1), aTM.button.style.color = bD.o5
			},
			aTN = new w(L(184), function(e) {
				return e.textContent === L(184) ? (e.textContent = L(185), aTM.rJ(0), aTM.button.style.color = bD.p5) : aPj(), !0
			});
		return aPc.qq(new sU([aTN.button, aTM.button])), aPc
	}()), qu))
}

function aOs() {
	var aQF, vs;

	function aTP() {
		t.x();
		var qg = bB.aTT(vs.vv());
		(aD.a17 && 0 < qg.length && qg === bB.qJ.a5s || bB.aKF.xO(qg)) && bB.aTU()
	}
	this.show = function(aTQ) {
		this.aTR(aTQ), aQF.show(), this.resize()
	}, this.aTR = function(aTQ) {
		0 === aD.a17 ? aTQ ? vs.vu(aTQ) : aD.a5g.length && vs.vu(aD.a5g) : (aD.hI || (bB.qJ.a5s = bB.a5t.a0Z()), vs.vu(bB.aTS(bB.qJ.a5s)))
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), vs.resize()
	}, this.a3D = function(eh) {
		2 === eh ? aQF.vW[0].rG() : aTP()
	}, aQF = new vP(L(417), [new w("⬅️ " + L(39), function() {
		t.aPG(1)
	}), new w(L(418), function() {
		vs.vw()
	}), new w(L(419), function() {
		vs.vx()
	}), new w(L(420), function() {
		vs.clear()
	}), new w(L(421), function() {
		aTP()
	})]), vs = new vn(L(422)), aQF.vV.appendChild(vs.e)
}

function aOr() {
	var aPI, aPJ, qu, aPc;

	function aTV() {
		b9.aDI !== bl.eU.data[12].value ? (b9.dh(), t.u(8, 1, new tK(30))) : t.u(1)
	}
	this.show = function() {
			aPI.show(), this.resize()
		}, this.sG = function() {
			aPI.sG()
		}, this.resize = function() {
			aPI.resize(), aPJ.resize()
		}, this.a3D = function(eh) {
			2 === eh && aPI.vW[0].rG()
		}, aPI = new vP(L(423), [new w("⬅️ " + L(39), aTV), new w(L(424), function() {
			t.x(), bl.sR.wl(), t.u(2)
		})]), qu = [], (aPc = new qc).qf(L(425)), aPc.qh(L(426)), qu.push(aPc),
		function(qu) {
			var aPc = new qc,
				g = (aPc.qf(L(413)), b9.data.aDZ());
			aPc.qn(new vL({
				t0: g,
				value: b9.data.aDd(g)
			}, function(eG) {
				return bl.sR.sS(12, g[eG].split(":")[0]), !0
			})), qu.push(aPc)
		}(qu),
		function(qu) {
			var aPc = new qc,
				aTY = (aPc.qf(L(450)), []);
			aPc.qq(new sU([new w(L(412), function(e) {
				bZ.aTZ();
				for (var aB = 0; aB < aTY.length; aB++) aTY[aB].e.value = bZ.aCr[aB];
				return bC.qz.vI(e), !0
			}).button]));
			for (var aB = 0; aB < bZ.aTa.length; aB++) {
				aPc.qh(bZ.aTa[aB]);
				for (var fS = 0; fS < 2; fS++) {
					var eG = 2 * aB + fS,
						rm = new rn({
							value: bZ.aCr[eG],
							eG: -1
						});
					rm.e.aTb = eG, aTY.push(rm), rm.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bZ.aTc(e.target.aTb, code)
					}), fS && (rm.e.style.marginLeft = "4%"), rm.e.style.width = "48%", aPc.qq(rm)
				}
			}
			qu.push(aPc)
		}(qu), (aPc = new qc).qf(L(427)), bl.eU.data[1].t0 = [L(428), L(429), L(430), L(431)], aPc.qn(new vL(bl.eU.data[1])), qu.push(aPc), (aPc = new qc).qf(L(432)), bl.eU.data[9].t0 = [L(429), L(433), L(434)], aPc.qn(new vL(bl.eU.data[9])), qu
		.push(aPc), (aPc = new qc).qf(L(435)), bl.eU.data[11].t0 = [L(436), L(9), L(437)], aPc.qn(new vL(bl.eU.data[11])), qu.push(aPc), (aPc = new qc).qf(L(438)), aPc.qq(new sO(bl.eU.data[2])), qu.push(aPc), (aPc = new qc).qf(L(439)), aPc.qq(new sO(
			bl.eU.data[7])), qu.push(aPc), (aPc = new qc).qf(L(440)), aPc.qq(new sO(bl.eU.data[8])), qu.push(aPc), (aPc = new qc).qf(L(441)), aPc.qq(new rn(bl.eU.data[5])), qu.push(aPc), (aPc = new qc).qf(L(442)), aPc.qq(new sO(bl.eU.data[13], L(
			443))), aPc.qq(new sO(bl.eU.data[14], L(444))), qu.push(aPc), (aPc = new qc).qf(L(445)), aPc.qn(new vL({
			t0: [L(446), L(447), L(448)],
			value: aZ.aHG
		}, function(aB) {
			aZ.aHG = aB
		})), qu.push(aPc), (aPc = new qc).qf(L(449)), aPc.qq(new sO(bl.eU.data[15])), qu.push(aPc), aPJ = new qs(aPI.vV, qu)
}

function aP8() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 !== aD.data.spawningType || bC.r7.a3d(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.spawningType && bC.r7.a3p(aQH.vv(), aD.data.spawningData, bU.aJL - 1)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(451), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc,
			t0 = (aPc.qf(L(283)), [L(308), L(320), L(286)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (t0.splice(1, 1), 0 < value) && (value = 1);
		aPc.qn(new vL({
			t0: t0,
			value: value
		}, function(eG) {
			aQK(), aD.data.spawningType = eG, 0 === aD.data.gameMode && 1 === eG && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f6)), t.u(24)
		})), aPc.qq(new se), aPc.qq(new sO({
			value: aD.data.selectableSpawn
		}, L(452), function(value) {
			aD.data.selectableSpawn = value
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc = new qc;
		aPc.qf("Seed"), aPc.qq(new rn({
			eG: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qu.push(aPc)
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.spawningType && ((aPc = new qc).qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.spawningData, 2)), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aOq() {
	var aPI, aSI, aSJ, vQ;

	function aTd(id) {
		0 !== a0.id || bl.eU.data[140].value ? 0 === id ? t.u(8, 1, new tK(16)) : t.u(2) : t.y.aSB(t.tJ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aPI.show(), this.resize(), this.ec()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.ec = function() {
		8 === aa.a2J() && (2 <= bf.aTi ? aSJ[2].rH === bD.oH && aSJ[2].rJ(0) : aSJ[2].rH !== bD.oH && aSJ[2].rJ(bD.oH), !aD.hI && aM.qa(aD.et) ? aSJ[1].rH === bD.oH && aSJ[1].rJ(0) : aSJ[1].rH !== bD.oH && aSJ[1].rJ(bD.oH), !aD.hI && aw.hy(aD
			.et) ? aSJ[0].rH === bD.oH && aSJ[0].rJ(0) : aSJ[0].rH !== bD.oH && aSJ[0].rJ(bD.oH))
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aSJ = [new w(L(453), function() {
		aTd(0)
	}), new w(L(343), function() {
		t.u(16)
	}), new w(L(393), function() {
		t.u(17)
	}), new w(L(454), function() {
		t.y.aRC()
	}, 0, 0, 1), new w(L(417), function() {
		t.u(3, 1)
	}), new w(L(455), function() {
		t.u(18)
	}), new w(L(409), function() {
		t.u(31)
	}), new w(L(456), function() {
		t.y.a5w(2)
	}), new w(L(423), function() {
		aTd(1)
	}), new w(L(457), function() {
		var t7 = ["Patreon", L(466), L(467), "YouTube Tutorial", "Discord", L(468), L(336), L(469), L(339), L(470), "Terms", "Privacy"],
			a4P = [bM.aQD, bM.aDq, bM.a2C, "https://www.youtube.com/watch?v=6QBmA9N1668", bM.aDr, bM.aTj, bM.aTk, bM.aTl, bM.aTm, bM.aTn, bM.aTo, bM.aTp];
		if (b0.y.aTq(0))
			for (var aB = 0; aB < a4P.length; aB++) a4P[aB] = a4P[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (t7.splice(2, 1), t7.splice(0, 1), a4P.splice(2, 1), a4P.splice(0, 1)) : 2 === a0.id && (t7.splice(1, 1), t7.splice(0, 1), a4P.splice(1, 1), a4P.splice(0, 1)), t.u(4, 1, new v(L(457), bC.qz.a4O(t7, a4P), !1, [new w(
			"⬅️ " + L(39),
			function() {
				t.u(1)
			})]))
	}), new w(L(458), function() {
		t.u(4, 1, new v(L(458), l.e0 + "<br>" + b0.y.aPd("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(39),
				function() {
					t.u(1)
				})]))
	}), new w(L(459), function() {
		t.u(4, 1, new v(L(459), L(471) + "<br>" + L(472), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(473), function() {
			a0.a1.a26(), t.u(1)
		})]))
	}), new w(L(460), function() {
		a0.a1.a27(), t.u(4, 1, new v(L(474), L(475) + " " + b0.y.aPd("/privacy"), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		})]))
	})], vQ = [new w("⬅️ " + L(39), function() {
		t.y.aDW()
	})], 8 === aa.a2J() && (aSJ.unshift(new w(L(331), function() {
		t.u(30)
	})), aSJ.unshift(new w(L(463), function() {
		2 <= bf.aTi && (t.x(), bg.a3G(), bh.dp = !0)
	}, 0, 1)), aSJ.unshift(new w(L(464), function() {
		!aD.hI && aM.qa(aD.et) && (bA.hZ.pn(), t.x(), aM.hJ) && aM.a3G()
	}, 0, 1)), aSJ.unshift(new w(L(465), function() {
		!aD.hI && aw.hy(aD.et) && (bX.a6Y(2), bA.hZ.hu(), t.x(), aM.hJ) && aM.a3G()
	}, 0, 1))), 1 === a0.id && 5 <= a0.e0 && aSJ.push(new w(L(461), function() {
		a0.a1.a28()
	})), aPI = new vP(L(462), vQ), aSI = new rX(aSJ, aPI.vV)
}

function aPC() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.sResourcesType && bC.r7.a3p(aQH.vv(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(326), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(284), L(285), L(286)],
			value: aD.data.sResourcesType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f6)), aD.data.sResourcesType = eG, t.u(28)
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc;
		1 === aD.data.sResourcesType && ((aPc = new qc).qf("Value"), aPc.qq(new rn({
			eG: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qu.push(aPc))
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.sResourcesType && ((aPc = new qc).qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.sResourcesData, 2)), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aPA() {
	var aQF, aQG, aQH, qu;

	function aQI() {
		aQK(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aPH()[19] = null, t.a2I()
	}

	function aQK() {
		2 === aD.data.tIncomeType && bC.r7.a3p(aQH.vv(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sG = function() {
		aQF.sG()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3D = function(eh) {
		2 === eh && aQF.vW[0].rG()
	}, aQF = new vP(L(324), [new w("⬅️ " + L(39), aQI)]), aQG = new qs(aQF.vV, (function(qu) {
		var aPc = new qc;
		aPc.qf(L(283)), aPc.qn(new vL({
			t0: [L(284), L(285), L(286)],
			value: aD.data.tIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f6), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eG, t.u(26)
		})), qu.push(aPc)
	}(qu = []), function(qu) {
		var aPc;
		1 === aD.data.tIncomeType && ((aPc = new qc).qf("Value"), aPc.qq(new rn({
			eG: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qu.push(aPc))
	}(qu), function(qu) {
		var aPc;
		2 === aD.data.tIncomeType && ((aPc = new qc).qf("Data"), (aQH = new vn(0, 1, 0, 1)).vu(bC.ry.a5M(aD.data.tIncomeData, 4)), aPc.qq(aQH), qu.push(aPc))
	}(qu), qu))
}

function aP2() {
	var aPI, aPJ, qu;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sG = function() {
		aPI.sG()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3D = function(eh) {
		2 === eh && aPI.vW[0].rG()
	}, aPI = new vP(L(455), [new w("⬅️ " + L(39), function() {
		t.a2I()
	})]), aPJ = new qs(aPI.vV, ((qu = []).push(function() {
		function aPj() {
			aTN.button.textContent = L(184), aTt.e.readOnly = !1, aTu.e.readOnly = !1, aPi.rJ(1), aPi.button.style.color = bD.o5
		}
		var aPc = new qc,
			aTs = (aPc.ql(b0.y.aPd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aPc.qf(L(476)), new rn({
				value: bl.eU.data[105].value,
				eG: -1
			})),
			aTt = (aTs.e.readOnly = !0, aPc.qq(aTs), aPc.qf(L(369), "0.8em"), new rn(bl.eU.data[148], 0, void 0, function(e) {
				aPh(bl.eU.data[149].value, e.target.value)
			})),
			aTu = (aPc.qq(aTt), aPc.qf(L(373), "0.8em"), new rn(bl.eU.data[149], 1, void 0, function(e) {
				aPh(e.target.value, bl.eU.data[148].value)
			})),
			aTN = (aPc.qq(aTu), new w(L(184), function(e) {
				return e.textContent === L(184) ? (e.textContent = L(185), aTt.e.readOnly = !0, aTu.e.readOnly = !0, aPi.rJ(0), aPi.button.style.color = bD.p5, bl.sR.sS(149, aTu.e.value), aPh(bl.eU.data[149].value, bl.eU.data[
					148].value)) : aPj(), !0
			})),
			aPi = (aPc.qq(new sU([aTN.button])), new w(L(14), function(e) {
				return aTt.e.readOnly && b0.y.ed(0) && (bC.qz.vI(e), aPj(), b0.aGO.aGP({
					tL: 0,
					tH: bl.eU.data[148].value,
					value: parseInt(bl.eU.data[149].value, 10)
				})), !0
			}, 1)),
			qi = aPc.qh(),
			aPh = (aPc.qh(L(477)).style.fontWeight = "bold", function(fb, qg) {
				qi.innerHTML = t.y.aPl(fb, bl.eU.data[105].value, qg)
			});
		return aPc.qq(new sU([aPi.button])), aPh(bl.eU.data[149].value, bl.eU.data[148].value), aPc
	}()), qu))
}

function by() {
	"function" != typeof Math.log2 && (Math.log2 = function(fG) {
		return Math.log(fG) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fG) {
		return Math.log(fG) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fG) {
		return 0 < fG ? 1 : fG < 0 ? -1 : 0
	})
}

function ck() {
	var aAW, aTw, aTx, aTy, aTv = !1;

	function aTz() {
		aTv = !0, aAW = -1, aTw = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aTw[aB] = !1;
		var yT = Math.floor(1 + .02 * h.min);
		aTx = new Array(4), (aTy = new Array(4))[1] = aTy[3] = aTx[0] = aTx[2] = 0, aTy[0] = aTx[3] = -yT, aTx[1] = aTy[2] = yT
	}

	function aU0() {
		if (-1 !== aAW)
			if (0 !== aD.a17 && aH.nn()) {
				for (var aU1 = !1, aB = 3; 0 <= aB; aB--) aTw[aB] && (aU1 = !0, im += aTx[aB], io += aTy[aB], af.a2f(aTx[aB], aTy[aB]), aS.aAC());
				aU1 ? bh.dp = !0 : ar.nd()
			} else ar.nd()
	}
	this.a3B = function(eG) {
		0 !== aD.a17 && aH.nn() && (aTv || aTz(), aTw[eG] = !0, -1 === aAW) && (aAW = setInterval(aU0, 20), aU0())
	}, this.a3E = function(eG) {
		if (0 !== aD.a17 && (aTv || aTz(), aTw[eG] = !1, -1 !== aAW)) {
			for (var aU1 = !1, aB = 3; 0 <= aB; aB--) aU1 = aU1 || aTw[aB];
			aU1 || this.nd()
		}
	}, this.nd = function() {
		if (aTv && -1 !== aAW) {
			for (var aB = 3; 0 <= aB; aB--) aTw[aB] = !1;
			clearInterval(aAW), aAW = -1
		}
	}
}

function cl() {
	this.y = new aU2, this.mm = new aU3, this.pT = new aU4, this.aFq = new aU5, this.ee = new aU6, this.aGO = new aU7, this.q6 = new aU8, this.aRZ = new aU9, this.a7i = new aUA, this.aUB = new aUC, this.aUD = new aUE, this.aUF = new aUG, this.aUH =
		new aUI, this.dh = function() {
			this.y.dh()
		}
}

function aU2() {
	var aUK, aUL;
	this.aHK = 5, this.aUJ = null, this.a2R = 0, this.a2H = 0;

	function aUT() {
		return 0 === aZ.aHG ? l.e2 ? 1 : 0 : aZ.aHG - 1
	}

	function aUW(a2E, a2O, aUV) {
		aUL[a2E].aTv = !0, aUQ(a2E), aUK[a2E] = new aUZ, aUK[a2E].dh(a2E, a2O, aUV)
	}

	function aUX(aB) {
		return aUL[aB].aTv && aUK[aB].aUX()
	}

	function aUQ(a2E) {
		aUL[a2E].eX = bh.eX, aUL[a2E].aUN = !1
	}
	this.dh = function() {
		this.aUJ = new Array(this.aHK);
		this.aUJ[0] = "territorial.io";
		var aMc = ay.aMy(0);
		ay.a5j(0);
		for (var aB = 1; aB < this.aHK; aB++) this.aUJ[aB] = aK.a0f() + ".territorial.io";
		for (ay.a5j(aMc), aUK = new Array(this.aHK), aUL = new Array(this.aHK), aB = this.aHK - 1; 0 <= aB; aB--) aUL[aB] = {
			aTv: !1,
			eX: 0,
			aUN: !1
		};
		this.aHL(0, 0, 0)
	}, this.aUO = function(aB) {
		return aUK[aB]
	}, this.ec = function() {
		for (var aB = this.aHK - 1; 0 <= aB; aB--) this.ed(aB) && bh.eX > aUL[aB].eX + 15e3 && (b0.pT.aUP(aB, aUL[aB].aUN), aUQ(aB));
		!this.ed(0) && bh.eX > aUL[0].eX + 8e3 && (aUL[0].eX = bh.eX, this.aHL(0, 0, 0))
	}, this.aRW = function(id) {
		return this.aHL(0, id, 0) && this.aUR(0)
	}, this.aTq = function(aUS) {
		return aUS ? aZ.aHH : aUT()
	}, this.a1X = function() {
		return aUT() ? "game.territorial.io" : "territorial.io"
	}, this.aPd = function(aUU) {
		aUU = this.a1X() + aUU;
		return "<a href='https://" + aUU + "' target='_blank'>" + aUU + "</a>"
	}, this.aHL = function(a2E, a2O, aUS) {
		aUS = this.aTq(aUS);
		if (aUL[a2E].aTv) {
			if (aUK[a2E].aUX()) return aUK[a2E].aUY(a2O), aUK[a2E].ed();
			aUK[a2E].sG()
		}
		return aUW(a2E, a2O, aUS), !1
	}, this.aUa = function(a2E, a2O) {
		b0.ee.aUb(a2E)
	}, this.aUR = function(aB) {
		return this.ed(aB) && aUK[aB].aUR()
	}, this.aUc = function(aB) {
		aUK[aB].aUc()
	}, this.ed = function(aB) {
		return aUL[aB].aTv && aUK[aB].ed()
	}, this.send = function(a2E, aC) {
		0 !== a2E && aUQ(a2E), aUK[a2E].send(aC)
	}, this.a2w = function(a2E) {
		8 === aa.a2J() && (aUL[a2E].aUN = !0, b0.mm.aUd = !0)
	}, this.close = function(a2E, aUe) {
		aUX(a2E) && aUK[a2E].close(aUe)
	}, this.aUf = function(a2E, aUe) {
		o.a2U(aUe), aUX(a2E) && aUK[a2E].close(aUe)
	}, this.a2V = function(aUe) {
		for (var aB = this.aHK - 1; 0 <= aB; aB--) this.close(aB, aUe)
	}, this.aUg = function(a2E, aUe) {
		for (var aB = this.aHK - 1; 0 <= aB; aB--) aB !== a2E && this.close(aB, aUe)
	}, this.a5u = function() {
		0 === this.a2R && (aD.ko || aD.hI) || this.close(this.a2R, 3246)
	}, this.aUh = function(a2E, e) {
		aUK[a2E].sG(), o.a2D(a2E, e.code)
	}
}

function aU3() {
	this.aUd = !1, this.ec = function() {
		bh.kR() % 250 != 249 || aD.hI || (b0.ee.aUi(+(this.aUd && ag.n4[aD.et]), al.l0 + bP.y.mK), this.aUd = !1)
	}
}

function aUA() {
	this.aUk = function(a2E, aC) {
		bJ.dh(aC), 0 === bJ.size ? b0.y.aUf(a2E, 3205) : ((0 === bJ.q7(1) ? function(a2E) {
			var aUo = bJ.q7(6);
			0 === aUo ? function(a2E) {
					if (0 === a2E && 8 !== aa.a2J()) {
						t.y.aT0();
						for (var aV3 = bJ.q7(12), aV4 = bJ.q7(6), g = new Array(aV3), aB = 0; aB < aV3; aB++) g[aB] = bJ.q7(aV4);
						aT.aAc(g)
					}
				}(a2E) : 2 === aUo ? b0.aUB.aUq(a2E) : 3 === aUo || 4 === aUo ? ax.dh() : 5 === aUo ? b0.aUD.aUr() : 9 === aUo ? b0.aUD.aUs(a2E) : 10 === aUo ? b0.aUF.aUt() : 11 === aUo ? b0.aUD.aUu(a2E) : 12 === aUo ? b0.aUF.aUv() :
				13 === aUo ? b0.aUH.aUw() : 14 === aUo ? b0.aUH.aUx() : 15 === aUo ? b0.aUD.aUy() : 16 === aUo ? b0.aUB.aUz(a2E) : 17 === aUo ? b0.aUB.aV0(a2E) : 19 === aUo ? b0.aUB.aV1(a2E) : 20 === aUo && b0.aUD.aV2(a2E)
		} : function(a2E) {
			if (8 !== aa.a2J() && !ax.aHp()) return;
			if (a2E !== b0.y.a2R) b0.y.aUf(a2E, 3244);
			else if (0 === bJ.q7(1)) bh.a1H.aV5(bJ.aC);
			else {
				var aB, a2E = bJ.q7(2);
				if (0 === a2E) {
					var pi, pT = bJ.q7(9);
					0 !== ag.n4[pT] && 0 !== ag.n4[aD.et] && (pi = bJ.q7(10), aN.ph(pT, aD.et, pi), af.qY(pT, 1, pi))
				} else if (1 === a2E) ! function() {
					var pT = bJ.q7(9);
					0 !== ag.n4[pT] && 0 !== ag.n4[aD.et] && b5.aMD(0, [pT], !0) && aN.pz(pT, 1)
				}();
				else if (2 === a2E) ! function() {
					var pT = bJ.q7(9),
						target = bJ.q7(9);
					0 !== ag.n4[pT] && 0 !== ag.n4[target] && 0 !== ag.n4[aD.et] && b5.aMD(1, [pT], !0) && (af.qY(pT, 3, 96), af.qY(target, 4, 96), aN.a7p(pT, target))
				}();
				else if (l.a9 && !l.aA) {
					var f9 = 540;
					for (bF.a7(17287), bF.a8(1, 0), bF.a8(6, 10), f9 = Math.min(bA.pQ.q9.length, 540), aB = 0; aB < f9; aB++) bF.aVB(32, bA.pQ.q9[aB]);
					b0.y.send(b0.y.a2R, bF.aC)
				}
			}
		})(a2E), bh.aUn())
	}
}

function aUG() {
	this.aUt = function() {
		bl.y.wb(), bl.sR.sS(105, bH.tM.tN(bH.tM.tO(5))), bl.sR.sS(106, bH.tM.tN(bH.tM.tO(15))), bl.sR.sS(109, 0), bl.sR.sS(108, bl.eU.data[109].value), bl.sR.sS(111, bl.eU.data[109].value + 1), bl.sR.sS(107, 0), bl.sR.sS(110, "")
	}, this.aUv = function() {
		var data;
		bJ.size < bF.aVC(29) ? b0.y.aUf(0, 3254) : ((data = {
			tI: bJ.q7(30),
			wp: bJ.q7(16),
			wq: bJ.q7(30),
			wr: bJ.q7(30),
			ws: bJ.q7(30),
			wt: bJ.aVD(32),
			username: bI.x6.xO(5),
			wu: bI.x6.xO(3),
			wv: bI.x6.xO(3),
			ww: bJ.aVD(32),
			wx: bJ.aVD(32),
			wy: bJ.q7(30),
			wz: bJ.aVD(32),
			x0: bJ.aVD(32),
			x1: bJ.aVD(32),
			x2: bJ.aVD(32),
			aPq: bJ.aVD(32),
			aPr: bJ.aVD(30),
			aQ5: bJ.aVD(32),
			aQ6: bI.x6.xO(3),
			aPy: bJ.aVD(2),
			aQ0: bJ.aVD(10),
			aPw: bI.x6.xO(8),
			aPz: bJ.aVD(5),
			aPf: bJ.q7(30),
			aPp: bJ.q7(30),
			a1a: bJ.aVD(32),
			aPu: bJ.q7(3),
			aPt: bJ.q7(8),
			aQ7: bJ.q7(1),
			aQ8: bJ.q7(1)
		}).aQ7 && (data.aQ9 = bJ.aVD(32), data.aQA = bJ.q7(30), data.aQB = bJ.q7(30), data.aQC = bJ.q7(1)), 8 === t.tJ && (25 === t.a2N().aRV ? (data.aPK = !0, t.y.aOz = data, t.a2N().aDV(25, !1)) : (data.aPK = !1, bl.sR.sS(160, +(data
			.aQ7 && data.aQC)), data.tH = bl.eU.data[105].value, t.y.aOw = data, bl.sR.wo(data), t.a2N().aDV(16, !0))))
	}
}

function aUI() {
	this.aUw = function() {
		var aB;
		if (bJ.size < bF.aVC(23)) b0.y.aUf(0, 3259);
		else {
			var tc = bJ.q7(6),
				f9 = bJ.q7(10),
				data = [];
			if (9 === tc || 10 === tc || 11 === tc) {
				for (aB = 0; aB < f9; aB++) data.push([bJ.q7(30), bI.x6.xO(5), bJ.aVD(32), 0, bJ.q7(30)]);
				8 === t.tJ && t.a2N().aDV(21, !0, {
					tc: tc,
					data: data
				})
			} else if (12 === tc) {
				for (aB = 0; aB < f9; aB++) data.push([bJ.q7(20), bJ.q7(30), bJ.q7(30), bJ.aVD(32), bJ.q7(30), bI.x6.xO(5), bI.x6.xO(5)]);
				8 === t.tJ && t.a2N().aDV(21, !0, {
					tc: tc,
					data: data
				})
			} else {
				var i6 = bJ.q7(16);
				if (bJ.aVE(39 + 16 * i6 + f9 * (0 === tc ? 111 : 1 === tc ? 101 : 2 === tc || 3 === tc ? 127 : 212))) {
					if (0 === tc)
						for (aB = 0; aB < f9; aB++) data.push([bJ.q7(30), bI.x4.x8(bJ.q7(5)), bJ.q7(16), bJ.q7(30), bJ.q7(30)]);
					else if (1 === tc)
						for (aB = 0; aB < f9; aB++) data.push([bJ.q7(16), bI.x4.x8(bJ.q7(3)), bJ.q7(16), bI.x4.x8(bJ.q7(5)), bJ.q7(31), bJ.q7(30)]);
					else if (2 === tc || 3 === tc)
						for (aB = 0; aB < f9; aB++) data.push([bJ.q7(30), bI.x4.x8(bJ.q7(5)), bJ.aVD(32), bJ.q7(30), bJ.q7(30)]);
					else
						for (aB = 0; aB < f9; aB++) data.push([bJ.q7(20), bJ.q7(30), bJ.q7(30), bJ.q7(30), bJ.q7(30), bJ.aVD(32), bJ.q7(30), bI.x4.x8(bJ.q7(5)), bI.x4.x8(bJ.q7(5))]);
					8 === t.tJ && t.a2N().aDV(21, !0, {
						tc: tc,
						data: data
					})
				} else b0.y.aUf(0, 3260)
			}
		}
	}, this.aUx = function() {
		if (bJ.size < bF.aVC(29)) b0.y.aUf(0, 3265);
		else {
			var aVF = bJ.q7(4),
				aVG = bJ.q7(7),
				aVH = bJ.q7(11);
			if (bJ.aVE(29 + 16 * aVG + 16 * aVH + 11 * aVF)) {
				for (var data = [], aB = 0; aB < aVF; aB++) {
					for (var a1p = bI.x4.x8(bJ.q7(3)), aVI = bJ.q7(8), aQj = [], fS = 0; fS < aVI; fS++) aQj.push(bJ.q7(16));
					data.push({
						name: "[" + a1p + "]",
						aQj: aQj
					})
				}
				8 === t.tJ && t.a2N().aDV(23, !0, data)
			} else b0.y.aUf(0, 3266)
		}
	}
}

function aUC() {
	function aVK() {
		var id = bJ.q7(3);
		return 0 === id ? {
			id: id,
			tH: bJ.q7(30),
			r: bp.aDw.aFv(bI.x6.xO(7))
		} : 1 === id ? {
			id: id,
			tH: bJ.q7(30),
			aEx: bJ.q7(3),
			value: bJ.q7(30),
			target: bJ.q7(30)
		} : 2 === id ? {
			id: id,
			tH: bJ.q7(30),
			aEx: bJ.q7(3)
		} : 3 === id ? {
			id: id,
			tH: bJ.q7(30),
			aEx: bJ.q7(3),
			value: bJ.q7(4),
			target: bJ.q7(30)
		} : 4 === id ? {
			id: id,
			tH: bJ.q7(30),
			aEx: bJ.q7(3),
			target: bJ.q7(30)
		} : 5 === id ? {
			id: id,
			aEx: bJ.q7(6)
		} : 6 === id ? {
			id: id,
			value: bJ.q7(17)
		} : null
	}
	this.aUq = function(a2E) {
		if (a2E !== b0.y.a2H) b0.y.close(a2E, 3239);
		else if (6 !== aa.a2J()) b0.y.close(a2E, 3271);
		else {
			bp.dh();
			for (var aB = 0; aB < 4; aB++) {
				var s4 = bp.y.s5[aB],
					playerCount = (s4.uB = bJ.q7(10), s4.ep = bJ.q7(6), s4.mapSeed = bJ.q7(14), s4.aEi = bJ.q7(4), s4.aGS = bJ.q7(6), s4.aGT = bJ.q7(14), s4.aGU = bJ.q7(4), s4.aEo = bJ.q7(1), s4.aFW = bJ.q7(12), s4.spawningSeed = bJ.q7(14), bJ
						.q7(16));
				bp.uS.uU[aB] = bJ.q7(16);
				for (var fS = 0; fS < playerCount; fS++) bp.uS.aEA(aB, bJ.q7(30), bI.x6.xO(5), bJ.q7(4), bJ.q7(30), bJ.q7(7), bJ.q7(16), bJ.q7(18), bJ.q7(11), bJ.q7(12))
			}
			t.u(29), bp.y.aFO(!0)
		}
	}, this.aUz = function(a2E) {
		if (a2E !== b0.y.a2H) b0.y.close(a2E, 3239);
		else if (bp.a2G) {
			bp.y.aFM[0] = bJ.q7(20), bp.y.aFM[1] = bJ.q7(20);
			for (var aVJ = bJ.q7(16), fS = 0; fS < aVJ; fS++) {
				var id = bJ.q7(3);
				0 === id ? bp.uS.aEA(bJ.q7(2), bJ.q7(30), bI.x6.xO(5), 0, 1234566, 127, 0, bJ.q7(18), 0, bJ.q7(12)) : 1 === id ? bp.uS.aET(bJ.q7(16), bJ.q7(2)) : 2 === id ? bp.uS.aEP(bJ.q7(16), bJ.q7(2), bJ.q7(2)) : 3 === id ? bp.uS.aES(bJ.q7(
					16), bJ.q7(2)) : 4 === id ? bp.uS.aEI(bJ.q7(16), bJ.q7(2), bJ.q7(4), bJ.q7(30), bJ.q7(7), bJ.q7(16), bJ.q7(11), bJ.q7(18)) : 5 === id && bp.uS.aEJ(bJ.q7(16), bJ.q7(2), bJ.q7(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var s4 = bp.y.s5[aB];
				if (s4.uB = bJ.q7(10), s4.aGS = bJ.q7(6), s4.aGT = bJ.q7(14), s4.aGU = bJ.q7(4), 0 === s4.uB) {
					if (s4.a2R = bJ.q7(10), s4.aEm = bJ.q7(10), bp.aDy.dq(aB)) return;
					s4.ep = bJ.q7(6), s4.mapSeed = bJ.q7(14), s4.aEi = bJ.q7(4), s4.aEo = bJ.q7(1), s4.aFW = bJ.q7(12), s4.spawningSeed = bJ.q7(14), s4.aGV.push(s4.aGV[0]), s4.aGV.shift()
				}
			}
			bp.y.aEe()
		} else b0.y.close(a2E, 3251)
	}, this.aV0 = function(a2E) {
		if (a2E !== b0.y.a2H) b0.y.close(a2E, 3272);
		else if (bp.a2G) {
			for (var s2 = bJ.q7(4), s4 = bp.y.s5[s2], s6 = s4.s6, ui = (s4.s7 = bJ.q7(20), bJ.q7(6)), aB = 0; aB < ui; aB++) {
				var aGm = aVK();
				bp.sF.aGl(aGm), s6.push(aGm)
			}
			bp.y.aFX(s2)
		} else b0.y.close(a2E, 3273)
	}, this.aV1 = function(a2E) {
		a2E !== b0.y.a2H ? b0.y.close(a2E, 3276) : bp.a2G ? bp.message.aEc(aVK()) : b0.y.close(a2E, 3277)
	}
}

function aUE() {
	this.aUr = function() {
		for (var id = bJ.q7(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bJ.q7(8), bJ.q7(8), bJ.q7(8)]);
		var ej = bI.x6.xO(8);
		bW.eQ.eg({
			id: id,
			colors: colors,
			ej: ej
		})
	}, this.aV2 = function(a2E) {
		var fC = bJ.q7(5),
			fC = bk.aVL.aVM(fC, bJ.q7(30), bJ.q7(30), bJ.q7(30));
		b0.ee.aVN(a2E, fC)
	}, this.aUs = function(a2E) {
		var aV7, rV, aVO;
		bJ.aVE(165) ? (aV7 = bJ.q7(3), rV = bk.aVL.ec(bJ.q7(30), bJ.q7(30)), aVO = bk.aVL.aVM(bJ.q7(5), bJ.q7(30), bJ.q7(30), bJ.q7(30)), b0.ee.aVP(a2E, rV, aVO, aV7), 0 < aV7 || (0 === a2E && 0 === bl.eU.data[105].value.length ? b0.ee.ef(0) : b0
			.aGO.aVQ(a2E), 4 === b0.y.aUO(a2E).aVR() ? 6 === aa.a2J() && b0.aFq.aHM(a2E) : 5 !== b0.y.aUO(a2E).aVR() || 8 !== aa.a2J() && 10 !== aa.a2J() || b0.pT.aHl())) : b0.y.aUf(a2E, 3269)
	}, this.aUu = function(a2E) {
		var id = bJ.q7(6);
		1 === id ? (bl.sR.sS(160, bJ.q7(30)), b0.y.aUc(a2E), aT.aAY || b0.ee.ef(1), b9.aDR(), 8 === t.tJ && t.a2N().aRj()) : 21 === id ? 8 === t.tJ && t.a2N().aDV(17) : 22 === id && (bl.sR.sS(106, bl.eU.data[110].value), bl.sR.sS(110, ""), 8 ===
			t.tJ) && t.a2N().aDV(15)
	}, this.aUy = function() {
		var f9 = bJ.q7(16),
			aVS = bJ.q7(16);
		if (bJ.aVE(55 + 10 * f9 + 16 * aVS)) {
			for (var g = [], aB = 0; aB < f9; aB++) g.push(bI.x4.x8(bJ.q7(10)));
			b9.aDU(g)
		} else b0.y.aUf(0, 3270)
	}
}

function aU4() {
	this.aUP = function(a2E, aUN) {
		bF.a7(11), bF.a8(1, 0), bF.a8(6, 4), bF.a8(1, aUN ? 1 : 0), bF.a8(3, 0 === aD.a17 ? bp.a2G ? 6 : 0 : aD.hI ? 1 : aD.ko ? 7 : aD.km < 7 ? 2 : 8 === aD.km ? 4 : 9 === aD.km ? 5 : 3), b0.y.send(a2E, bF.aC)
	}, this.aHl = function() {
		bF.a7(58), bF.a8(1, 0), bF.a8(6, 5), bF.a8(8, b0.y.a2H), bF.a8(10, ax.aEm), bF.a8(9, ax.aHe), bF.a8(10, l.e4), bF.a8(14, l.dt), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pU = function(ev) {
		bF.a7(27), bF.a8(1, 1), bF.a8(4, 0), bF.a8(22, ev), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pV = function(il, jd) {
		bF.a7(25), bF.a8(1, 1), bF.a8(4, 1), bF.a8(10, il), bF.a8(10, jd), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pZ = function(il, pX) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 2), bF.a8(10, il), bF.a8(9, pX), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pb = function(il, pa) {
		bF.a7(42), bF.a8(1, 1), bF.a8(4, 3), bF.a8(10, il), bF.a8(27, pa), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pd = function(il, nS) {
		bF.a7(31), bF.a8(1, 1), bF.a8(4, 4), bF.a8(10, il), bF.a8(16, nS), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pg = function(jd) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 5), bF.a8(10, jd), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pk = function(eG) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 6), bF.a8(10, eG), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pm = function(pl) {
		bF.a7(6), bF.a8(1, 1), bF.a8(4, 7), bF.a8(1, pl), b0.y.send(b0.y.a2R, bF.aC)
	}, this.po = function() {
		bF.a7(5), bF.a8(1, 1), bF.a8(4, 8), b0.y.send(b0.y.a2R, bF.aC)
	}, this.pp = function(il, ev, jd) {
		bF.a7(47), bF.a8(1, 1), bF.a8(4, 10), bF.a8(10, il), bF.a8(10, jd), bF.a8(22, ev), b0.y.send(b0.y.a2R, bF.aC)
	}, this.px = function(aVT, aVU) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 15), bF.a8(9, aVU), bF.a8(10, aVT), b0.y.send(b0.y.a2R, bF.aC)
	}, this.q0 = function(a7i) {
		bF.a7(14), bF.a8(1, 1), bF.a8(4, 14), bF.a8(9, a7i), b0.y.send(b0.y.a2R, bF.aC)
	}, this.q4 = function(aVV, target) {
		var aB, f9 = aVV.length;
		for (bF.a7(14 + 9 * f9), bF.a8(1, 1), bF.a8(4, 13), bF.a8(9, target), aB = 0; aB < f9; aB++) bF.a8(9, aVV[aB]);
		b0.y.send(b0.y.a2R, bF.aC)
	}
}

function aU7() {
	this.aVW = function() {
		bF.a7(39), bF.a8(1, 0), bF.a8(6, 16), b0.ee.aVX(), b0.y.send(0, bF.aC)
	}, this.aVQ = function(a2E) {
		bF.a7(127), bF.a8(1, 0), bF.a8(6, 17), bI.tM.xK(bl.eU.data[105].value, 5), bI.tM.xK(bl.eU.data[106].value, 15), b0.y.send(a2E, bF.aC)
	}, this.aRk = function() {
		bF.a7(97), bF.a8(1, 0), bF.a8(6, 18), bI.tM.xK(bl.eU.data[110].value, 15), b0.y.send(0, bF.aC)
	}, this.aRh = function(a4z) {
		var f9 = a4z.qg.length;
		bF.a7(21 + 16 * f9), bF.a8(1, 0), bF.a8(6, 29), bF.a8(6, a4z.tL), bF.a8(8, f9), bH.x4.xJ(a4z.qg), b0.y.send(0, bF.aC)
	}, this.aTO = function(wt, colors, aVZ, ej) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 16), bG.a8(20, Math.min(wt, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fS = 0; fS < 3; fS++) bG.a8(8, colors[aB][fS]);
		wt = b9.data.aDY(aVZ.trim());
		bG.a8(8, -1 === wt ? 255 : wt), bH.x6.a0Z(ej.trim().substring(0, 180), 8, bG), b0.y.send(0, bG.aVa())
	}, this.aQ1 = function(data) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 25), bF.a8(6, data.tL), bI.tM.xK(data.tH, 5), b0.y.send(0, bF.aC)
	}, this.aGP = function(data) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 27), bF.a8(6, data.tL), bI.tM.xK(data.tH, 5), bF.aVB(32, data.value), b0.y.send(0, bF.aC)
	}
}

function aU8() {
	this.q5 = function() {
		for (var f9 = aD.kU, a0w = bT.result.a0w, lP = a0w.length, a1i = (bF.a7(17 + 16 * f9 + 33 * lP), bF.a8(1, 1), bF.a8(4, 12), bF.a8(10, lP), bF.a8(1, +(2 === aD.a14)), bF.a8(1, aD.a1P % 2), ag.a1i), aB = 0; aB < f9; aB++) bF.a8(16, a1i[
		aB]);
		for (var gx = ag.gx, aB = 0; aB < lP; aB++) {
			var gh = a0w[aB];
			bF.a8(9, gh), bF.a8(24, gx[gh])
		}
		b0.y.send(b0.y.a2R, bF.aC)
	}
}

function aU9() {
	this.aRa = function(tc, td, te) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 21), bF.a8(6, tc), bF.a8(1, +(td < 0)), bF.a8(1, +(te < 0)), bF.a8(30, Math.abs(td)), bF.a8(30, Math.abs(te)), b0.y.send(0, bF.aC)
	}, this.aRb = function(tc, aRc, aRd) {
		bF.a7(18 + 16 * aRc.length + 30), bF.a8(1, 0), bF.a8(6, 22), bF.a8(6, tc), b0.ee.aVb(aRc), bF.a8(30, aRd), b0.y.send(0, bF.aC)
	}, this.aRg = function(tc, aRc, aRd) {
		bF.a7(73), bF.a8(1, 0), bF.a8(6, 28), bF.a8(6, tc), bI.tM.xK(aRc, 5), bF.a8(30, aRd), b0.y.send(0, bF.aC)
	}, this.aRe = function(aQi, a1o) {
		for (var f9 = a1o.length, i6 = 0, aB = 0; aB < f9; aB++) i6 += a1o[aB].length;
		for (bF.a7(21 + 3 * f9 + 16 * i6), bF.a8(1, 0), bF.a8(6, 23), bF.a8(3, aQi), bF.a8(4, f9), bF.a8(7, i6), aB = 0; aB < f9; aB++) bF.a8(3, a1o[aB].length), bH.x4.xJ(a1o[aB]);
		b0.y.send(0, bF.aC)
	}, this.aRf = function(aQi, td, te) {
		bF.a7(52), bF.a8(1, 0), bF.a8(6, 24), bF.a8(3, aQi), bF.a8(1, +(td < 0)), bF.a8(1, +(te < 0)), bF.a8(20, Math.abs(td)), bF.a8(20, Math.abs(te)), b0.y.send(0, bF.aC)
	}
}

function aU5() {
	this.aHM = function(a2E) {
		var username = bl.eU.data[122].value.slice(0, 20),
			username = (bF.a7(24 + 16 * username.length + 18 + bk.aVc.q7()), bF.a8(1, 0), bF.a8(6, 1), bF.a8(10, l.e4), bF.a8(2, bl.eU.data[158].value), b0.ee.aVb(username), bC.color.a44(bl.y.wi()));
		bF.a8(6, username[0]), bF.a8(6, username[1]), bF.a8(6, username[2]), bk.aVc.a0Z(), b0.y.a2H = a2E, b0.y.send(a2E, bF.aC)
	}, this.aFr = function(aVe, a4z) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 2), bG.a8(3, aVe), 2 === aVe ? bG.a8(2, a4z) : 3 === aVe ? bH.x6.a0Z(a4z, 7, bG) : 5 === aVe && (bG.a8(3, a4z.id), bG.a8(3, a4z.value), bG.a8(30, a4z.tH)), b0.y.send(b0.y.a2H, bG.aVa())
	}
}

function aU6() {
	this.aUb = function(a2E) {
		var aVj;
		bF.a7(55), bF.a8(1, 0), bF.a8(6, 13), bF.a8(14, l.dt), bF.a8(4, a0.id), bF.a8(7, a0.e0), bF.a8(1, +l.a9), bF.a8(1, +l.aA), bF.a8(5, (new Date).getHours() % 24), aVj = b9.aDX(), bF.a8(8, aVj[0]), bF.a8(8, aVj[1]), b0.y.send(a2E, bF.aC)
	}, this.aVP = function(a2E, rV, aVO, aV7) {
		bF.a7(100), bF.a8(1, 0), bF.a8(6, 14), bF.a8(3, aV7), bF.a8(30, rV[0]), bF.a8(30, rV[1]), bF.a8(30, aVO), b0.y.send(a2E, bF.aC)
	}, this.aVN = function(a2E, rV) {
		bF.a7(37), bF.a8(1, 0), bF.a8(6, 30), bF.a8(30, rV), b0.y.send(a2E, bF.aC)
	}, this.ef = function(id) {
		bF.a7(13), bF.a8(1, 0), bF.a8(6, 15), bF.a8(6, id), b0.y.send(0, bF.aC)
	}, this.uy = function(id, value) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 3), bF.a8(6, id), bF.a8(30, value), b0.y.send(0, bF.aC)
	}, this.aDT = function(id, qg) {
		var f9 = Math.min(qg.length, 63);
		bF.a7(19 + 16 * f9), bF.a8(1, 0), bF.a8(6, 26), bF.a8(6, id), bF.a8(6, f9), bH.x4.xJ(qg), b0.y.send(0, bF.aC)
	}, this.aVg = function(aSz, qr) {
		bF.a7(7 + 26 * qr.length), bF.a8(1, 0), bF.a8(6, 9);
		for (var aB = 0; aB < qr.length; aB++) bF.a8(16, qr[aB][0]), bF.a8(10, qr[aB][1]);
		b0.y.send(aSz, bF.aC)
	}, this.aUi = function(aVh, aVi) {
		bF.a7(20), bF.a8(1, 0), bF.a8(6, 19), bF.a8(1, aVh), bF.a8(12, aVi), b0.y.send(b0.y.a2R, bF.aC)
	}, this.aVb = function(username) {
		bF.a8(5, username.length), bH.x4.xJ(username)
	}
}

function aUZ() {
	var aVk, aVl, b, aVm = ["wss://", "/s50/", "/s51/", "/s52/"],
		aVn = 0;

	function aUa() {
		b0.y.aUa(aVk, aVl)
	}

	function aVq(e) {
		b0.a7i.aUk(aVk, new Uint8Array(e.data))
	}

	function aVr() {}

	function aUh(e) {
		b0.y.aUh(aVk, e)
	}
	this.dh = function(eG, a2O, aUV) {
		aVk = eG, aVl = a2O,
			function(aUV) {
				aUV = l.dx ? "ws://localhost:" + (7130 + aVk) + "/" : aUV ? aVm[0] + "game.territorial.io/x0" + aVk + "/" : aVm[0] + b0.y.aUJ[aVk] + aVm[1 + l.dy];
				(b = new WebSocket(aUV)).binaryType = "arraybuffer", b.onopen = aUa, b.onmessage = aVq, b.onclose = aUh, b.onerror = aVr
			}(aUV)
	}, this.aVp = function() {
		return b.readyState === b.CONNECTING
	}, this.ed = function() {
		return b.readyState === b.OPEN
	}, this.aUR = function() {
		return aVn
	}, this.aUc = function() {
		aVn = 1
	}, this.aUX = function() {
		return this.aVp() || this.ed()
	}, this.aUY = function(a2O) {
		aVl = a2O
	}, this.aVR = function() {
		return aVl
	}, this.send = function(aC) {
		this.ed() && b.send(aC)
	}, this.close = function(aUe) {
		this.aUX() && (this.sG(), b.close(aUe))
	}, this.sG = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dO() {
	var gap, aVs = !1,
		aVt = 0,
		i = 0,
		tQ = 0,
		canvas = null,
		zG = null,
		a3e = null;

	function aVx() {
		for (var aB = aD.yI; 0 <= aB; aB--) a3e[aB] = 0;
		for (aB = al.l0 - 1; 0 <= aB; aB--) a3e[bi.f7[al.l5[aB]]] += ag.gx[al.l5[aB]];
		aVs = !0
	}

	function aVv() {
		for (var aW2, aW0 = 0, f9 = 0, eh = Math.floor(i / 2), eF = Math.floor(tQ / 2), aW1 = 1.5 * Math.PI, aB = aD.yI; 0 <= aB; aB--) f9 += a3e[aB], 0 === a3e[aB] && aW0++;
		if (aVs = !1, zG.clearRect(0, 0, i, i), 0 < f9)
			if (aW0 === aD.yI) {
				for (aB = aD.yI; 0 <= aB; aB--)
					if (0 < a3e[aB]) {
						! function(aB, eh, eF) {
							zG.fillStyle = bi.aW9[bi.kr[aB]], zG.beginPath(), zG.arc(eh, eh, eF, 0, 2 * Math.PI), zG.fill()
						}(aB, eh, eF);
						break
					}!
				function(eh) {
					var fontSize = eh / 3;
					zG.font = bC.qz.sq(1, fontSize), zG.fillStyle = bD.o5, zG.fillText("100%", eh, eh + .1 * fontSize)
				}(eh)
			} else {
				for (aB = 0; aB <= aD.yI; aB++) 0 < a3e[aB] && (! function(aB, eh, eF, aW1, aW2) {
					zG.fillStyle = bi.aW9[bi.kr[aB]], zG.beginPath(), zG.arc(eh, eh, eF, aW1, aW2), zG.lineTo(eh, eh), zG.fill()
				}(aB, eh, eF, aW1, aW2 = aW1 + 2 * Math.PI * a3e[aB] / f9), function(eh, eF, aW1, aW2) {
					var fb = (aW2 - aW1) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eF * Math.min(fb, .37);
					fontSize < 8 || (aW1 = (aW1 + aW2) / 2, aW2 = (__fx.settings.detailedTeamPercentage ? (100 * fb).toFixed(2) : Math.floor(100 * fb + .5)) + "%", eF *= .525 - Math.max(.6 * (fb - .7), 0), zG.font = bC.qz.sq(1, fontSize), zG
						.fillStyle = bD.o5, zG.fillText(aW2, eh + Math.cos(aW1) * eF, eh + Math.cos(aW1 + 1.5 * Math.PI) * eF))
				}(eh, eF, aW1, aW2), 0 !== aB && aW7(eh, eF, aW1), aW1 = aW2);
				aW7(eh, eF, 1.5 * Math.PI)
			}!
		function(eh, eF) {
			zG.beginPath(), zG.arc(eh, eh, eF, 0, 2 * Math.PI), zG.stroke()
		}(eh, eF)
	}

	function aW7(eh, eF, aWA) {
		zG.beginPath(), zG.moveTo(eh, eh), zG.lineTo(eh + Math.cos(aWA) * eF, eh + Math.cos(aWA + 1.5 * Math.PI) * eF), zG.stroke()
	}
	this.dh = function() {
		if (aD.i3) {
			aVt = 0, a3e = new Uint32Array(aD.yI + 1);
			for (var aB = aD.yI; 0 <= aB; aB--) a3e[aB] = 0;
			for (aB = al.l0 - 1; 0 <= aB; aB--) a3e[bi.f7[al.l5[aB]]] += 1;
			this.resize()
		} else a3e = zG = canvas = null
	}, this.a96 = function() {
		return i
	}, this.resize = function() {
		aD.i3 && (i = Math.floor(.95 * (a0.a1.iI() && !aD.nY ? .18 * h.min : .13 * h.iJ)), i = (i *= 1 + (.5 + .2 * a0.a1.iI()) * aD.nY) + i % 2, gap = Math.max(1, .015 * i), tQ = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (zG = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zG.strokeStyle = bD.o5, bC.qz.textAlign(zG, 1), bC.qz.textBaseline(zG, 1), aVv())
	}, this.l1 = function(aVw) {
		aVw && aVx();
		var eY, aVw = this.l3();
		return bi.kr[aVw] || (aVw = function() {
			for (var l2 = -1, aB = aD.yI; 1 <= aB; aB--)(-1 === l2 || a3e[aB] > a3e[l2]) && (l2 = aB);
			return l2
		}(), eY = ag.gx[m5[0]], -1 !== aVw && a3e[aVw] > eY) ? a3e[aVw] : eY
	}, this.a21 = function() {
		return aVt = 31, this.ec(), this.l3()
	}, this.l3 = function() {
		for (var l2 = 0, aB = aD.yI; 0 < aB; aB--) a3e[aB] > a3e[l2] && (l2 = aB);
		return l2
	}, this.kV = function(aVz) {
		for (var gc = 0, l5 = al.l5, f7 = bi.f7, f9 = al.l0, fn = bQ.fn, aB = 0; aB < f9; aB++) {
			var gh = l5[aB];
			f7[gh] === aVz && (fn[gc++] = gh)
		}
		bQ.fe[0] = gc
	}, this.l4 = function(aVz) {
		for (var gc = 0, l5 = al.l5, f7 = bi.f7, f9 = al.l0, fn = bQ.fn, aB = 0; aB < f9; aB++) {
			var gh = l5[aB];
			f7[gh] !== aVz && (fn[gc++] = gh)
		}
		bQ.fe[0] = gc
	}, this.a4X = function() {
		for (var gc = 0, aB = aD.yI; 0 <= aB; aB--) gc += 0 < a3e[aB];
		return gc
	}, this.ec = function() {
		aD.i3 && 32 <= ++aVt && (aVt = 0, aVx())
	}, this.mr = function() {
		aD.i3 && aVs && aVv()
	}, this.ve = function() {
		aD.i3 && (aD.nY ? vf.drawImage(canvas, be.gap, be.gap) : vf.drawImage(canvas, be.gap, a95 + 2 * be.gap))
	}
}

function de() {
	function aWG(fG, f9, fI, a0j, aAN, fZ) {
		if (!(fI < 1 || aAN < fI))
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (a0j(en)) return en >> 2;
				fG += fZ
			}
		return -1
	}

	function aWK(fI, f9, fG, a0j, aWE, fZ) {
		if (!(fG < 1 || aWE < fG)) {
			f9 = Math.max(f9, 0);
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (a0j(en)) return en >> 2;
				fI += fZ
			}
		}
		return -1
	}

	function aWO(ia, ib, aWB) {
		return -1 !== ib && (-1 === ia || bO.ic(ib, aWB) < bO.ic(ia, aWB)) ? ib : ia
	}
	this.hY = function(aWB) {
		return this.a1B(aWB, function(en) {
			return ac.f4(en)
		})
	}, this.he = function(aWB) {
		return this.a1B(aWB, function(en) {
			return ac.aIV(en, aD.et)
		})
	}, this.a1B = function(aWB, a0j) {
		return function(aWB, aWC, a0j) {
			for (var hO = bO.fH(aWB), hQ = bO.fJ(aWB), aWE = bU.fK - 2, aAN = bU.fL - 2, aWF = -1, fC = 0; fC < aWC; fC++) {
				var aAM = Math.max(hO - fC, 1),
					aN6 = Math.max(hQ - fC, 1),
					yt = Math.min(hO + fC, aWE),
					ys = Math.min(hQ + fC, aAN),
					ia = aWG(hO, yt - hO, hQ - fC, a0j, aAN, 1),
					ib = aWG(hO - 1, hO - aAM - 1, hQ - fC, a0j, aAN, -1),
					yt = aWG(hO, yt - hO, hQ + fC, a0j, aAN, 1),
					aAM = aWG(hO - 1, hO - aAM - 1, hQ + fC, a0j, aAN, -1),
					aWJ = aWK(hQ, ys - hQ - 1, hO - fC, a0j, aWE, 1),
					aWL = aWK(hQ - 1, hQ - aN6 - 2, hO - fC, a0j, aWE, -1),
					ys = aWK(hQ, ys - hQ - 1, hO + fC, a0j, aWE, 1),
					aN6 = aWK(hQ - 1, hQ - aN6 - 2, hO + fC, a0j, aWE, -1);
				if (aWF = aWO(aWF, ia, aWB), aWF = aWO(aWF, ib, aWB), aWF = aWO(aWF, yt, aWB), aWF = aWO(aWF, aAM, aWB), aWF = aWO(aWF, aWJ, aWB), aWF = aWO(aWF, aWL, aWB), aWF = aWO(aWF, ys, aWB), 0 <= (aWF = aWO(aWF, aN6, aWB)) && fC *
					fC >= bO.ic(aWF, aWB)) return aWF
			}
			return -1
		}(aWB, bO.iG(), a0j)
	}
}

function d7() {
	function aWQ(key) {
		var aTQ;
		return "undefined" == typeof URLSearchParams || (aTQ = window.location.search, "string" != typeof(aTQ = new URLSearchParams(aTQ).get(key))) || aTQ.length < 1 ? null : aTQ
	}
	this.dq = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aWQ("account");
				if (!value && !(value = aWQ("a"))) return void bK.clear();
				return bK.clear(), t.u(8, t.tJ, new tK(1e3, {
					tL: 0,
					tH: value,
					tI: 0
				})), 1
			}()) {
			var value = aWQ("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a2B = new URL(window.location.href);
		a2B.search = "";
		try {
			return history.replaceState(null, "", a2B.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aQE = function(key, value) {
		if (0 === a0.id) try {
			var a2B = new URL(window.location.href),
				gh = a2B.searchParams;
			gh.set(key, value), a2B.search = gh.toString(), history.replaceState(null, "", a2B.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cm() {
	var aWS, g;
	this.dh = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bN.fa(32768 * aB, 100);
		this.a5j(0)
	}, this.value = function(gh) {
		return g[gh]
	}, this.aMy = function() {
		return bN.fa(aWS - 1, 2)
	}, this.a5j = function(aMc) {
		aWS = 2 * aMc % 32768 + 1
	}, this.random = function() {
		return aWS = 167 * aWS % 32768
	}, this.jl = function(mz) {
		return bN.fa(mz * this.random(), 32768)
	}, this.kM = function(gh) {
		return 0 !== gh && this.random() < this.value(gh)
	}, this.j7 = function(fS, fT) {
		return fS + this.jl(fT - fS)
	}
}

function d3() {
	this.qJ = new aWT, this.a5t = new aWU, this.aKF = new aWV, this.dh = function() {
		aD.hI || this.qJ.dh()
	}, this.ec = function() {
		aD.hI || (this.qJ.ec(), 3 !== t.tJ) || bh.kR() % 15 != 5 && 2 !== aD.a17 || t.a2N().aTR()
	}, this.aTU = function() {
		var aWX = 0 !== aD.a17,
			aWY = aD.a5f;
		aWX || aa.aHW(), aD.a5d.a62(), aD.data.canvas = null, b0.y.close(b0.y.a2R, 3257), b0.y.a2R = 0, aD.data.isReplay = 1, aD.a5h(), aWX && (aD.a5f = aWY)
	}, this.aTT = function(qg) {
		var aB = qg.indexOf("=");
		return 0 <= aB ? qg.substring(aB + 1) : qg
	}, this.aTS = function(qg) {
		return qg
	}
}

function aWT() {
	this.aWZ = null, this.aWa = null, this.aWb = null, this.aWc = null, this.aWd = null, this.aWe = null, this.a5s = "";
	var aWf = 0;
	this.dh = function() {
		this.aWZ = [], this.aWa = [], this.aWb = [], this.aWc = [], this.aWd = [0], this.aWe = [0], aWf = 0, this.a5s = ""
	}, this.qK = function(id, fs, fu, fw) {
		aD.hI || 2 === aD.a17 || (0 === this.aWd[aWf] && (this.aWe[aWf] ? (this.aWd.push(1), this.aWe.push(0), aWf++) : this.aWd[aWf] = 1), this.aWZ.push(id), this.aWa.push(fs), this.aWb.push(void 0 === fu ? 0 : fu), this.aWc.push(void 0 === fw ?
			0 : fw), this.aWe[aWf]++)
	}, this.ec = function() {
		0 === this.aWd[aWf] ? this.aWe[aWf]++ : (this.aWd.push(0), this.aWe.push(0), aWf++)
	}
}

function aWV() {
	var aWg = 0;

	function aWk(qg, id) {
		aWg || (id ? 1 === id ? aN.a7B = L(479) + ": " + qg : t.u(4, 3, new v(L(480), qg, 1)) : t.u(4, 3, new v("⚠️ " + L(478), qg, 1)))
	}
	this.xO = function(qg, aWh) {
		var iS, qr;
		return aWg = aWh, bI.tM.xG(bI.tM.xE(bI.tM.xC(qg))), aN.a7B = "", !! function() {
			if (bJ.size < 10) aWk("File Too Small");
			else {
				var aWm = bJ.q7(12),
					r = (aWm !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aWk(r = (r += "   Found: " + aWm) + ("   Compatible at " + b0.y.a1X() + "/" + aWm), 1)), bJ.q7(12)),
					aWn = bJ.q7(31);
				if (aWn !== bJ.size) aWk("Size Error: " + aWn + " " + bJ.size);
				else if (function(j, aWm) {
						for (var gh = bJ.aC, f9 = bJ.size, aVi = aWm, aB = 3; aB < f9; aB++) aVi = aVi + gh[aB] & 4095;
						return aVi === j || (aWk("Hash Error: " + aVi + " " + j + " " + f9), !1)
					}(r, aWm)) return 1
			}
			return
		}() && (iS = bJ, (qr = aD.data = new a5c).mapType = iS.q7(2), qr.mapProceduralIndex = iS.q7(8), qr.mapRealisticIndex = iS.q7(8), qr.mapSeed = iS.q7(14), qr.mapName = iS.aWp(5), 2 === qr.mapType && iS.aWq(), qr.passableWater = iS.q7(
			1), qr.passableMountains = iS.q7(1), qr.playerCount = iS.q7(10), qr.humanCount = iS.q7(10), qr.selectedPlayer = iS.q7(9), qr.gameMode = iS.q7(1), qr.playerMode = iS.q7(2), qr.battleRoyaleMode = iS.q7(2), qr.numberTeams = iS.q7(4),
			qr.isZombieMode = iS.q7(1), qr.isContest = iS.q7(1), qr.isReplay = iS.q7(1), qr.elo = iS.aWr(2, 14, 2), qr.colorsType = iS.q7(1), qr.colorsPersonalized = iS.q7(1), qr.colorsData = iS.aWr(10, 18, 512), qr.selectableColor = iS.q7(
			1), qr.teamPlayerCount = iS.aWr(4, 10, 9), qr.neutralBots = iS.q7(1), qr.botDifficultyType = iS.q7(2), qr.botDifficultyValue = iS.q7(4), qr.botDifficultyTeam = iS.aWr(4, 4, 9), qr.botDifficultyData = iS.aWr(10, 4, 512), qr
			.spawningType = iS.q7(2), qr.spawningSeed = iS.q7(14), qr.spawningData = iS.aWr(11, 12, 1024), qr.selectableSpawn = iS.q7(1), qr.playerNamesType = iS.q7(2), qr.playerNamesData = iS.aWs(10, 5, 512), qr.selectableName = iS.q7(1), qr
			.aIncomeType = iS.q7(2), qr.aIncomeValue = iS.q7(8), qr.aIncomeData = iS.aWr(10, 8, 512), qr.tIncomeType = iS.q7(2), qr.tIncomeValue = iS.q7(8), qr.tIncomeData = iS.aWr(10, 8, 512), qr.iIncomeType = iS.q7(2), qr.iIncomeValue = iS
			.q7(8), qr.iIncomeData = iS.aWr(10, 8, 512), qr.sResourcesType = iS.q7(2), qr.sResourcesValue = iS.q7(11), qr.sResourcesData = iS.aWr(10, 11, 512), qr.a60 = iS.aWr(10, 30, 0), !! function() {
				var iS = bJ,
					xP = iS.q7(5),
					aWt = iS.q7(30),
					aWu = iS.q7(30);
				if (aWt + aWu > 8 * iS.size) return void aWk("Corrupted File");
				return function(f9) {
						var aWx = new Uint8Array(f9),
							aWy = new Uint16Array(f9),
							aWz = new Uint32Array(f9),
							aX0 = new Uint32Array(f9);
						bB.qJ.aWZ = aWx, bB.qJ.aWa = aWy, bB.qJ.aWb = aWz, bB.qJ.aWc = aX0;
						for (var aB = 0; aB < f9; aB++) {
							var id = bJ.q7(4);
							aWx[aB] = id, aWy[aB] = bJ.q7(9), 0 === id ? aWz[aB] = bJ.q7(22) : 1 === id ? (aWz[aB] = bJ.q7(10), aX0[aB] = bJ.q7(10)) : 2 === id ? (aWz[aB] = bJ.q7(10), aX0[aB] = bJ.q7(9)) : 3 === id ? (aWz[aB] = bJ.q7(10),
								aX0[aB] = bJ.q7(27)) : 4 === id ? (aWz[aB] = bJ.q7(10), aX0[aB] = bJ.q7(16)) : 5 === id || 6 === id ? aWz[aB] = bJ.q7(10) : 7 === id ? aWz[aB] = bJ.q7(1) : 10 === id && (aWz[aB] = bJ.q7(20), aX0[aB] = bJ
								.q7(22))
						}
					}(aWt),
					function(f9, xP) {
						var aWd = new Uint8Array(f9),
							aWe = new Array(f9);
						aWe.fill(0), bB.qJ.aWd = aWd, bB.qJ.aWe = aWe;
						for (var aB = 0; aB < f9; aB++) aWd[aB] = bJ.q7(1), aWe[aB] = bJ.q7(xP)
					}(aWu, xP), 1
			}()) && (bJ.eG < 8 * bJ.size - 13 || bJ.eG > 8 * bJ.size ? (aWk("Out Of Bounds Error: " + bJ.eG + " " + 8 * bJ.size), !1) : (bB.qJ.a5s = qg, 2 !== aD.data.mapType || (aWk("Load base64 image...", 2), aWh)))
	}, this.aKG = function(aJJ, aWl) {
		var a3z = document.createElement("canvas"),
			iB = a3z.getContext("2d");
		if (a3z.width = aJJ.width, a3z.height = aJJ.height, iB.drawImage(aJJ, 0, 0), aD.data.canvas = a3z, aWg || aWl) return aD.a17 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		bB.aTU()
	}
}

function aWU() {
	this.a0Z = function() {
		var xP = function() {
				for (var aWe = bB.qJ.aWe, f9 = aWe.length, max = 0, aB = 0; aB < f9; aB++) max = Math.max(max, aWe[aB]);
				return xW(Math.max(max, 1))
			}(),
			i = (qr = aD.data, (i = bG).dh(), i.a8(12, l.rVersion), i.eG += 43, i.a8(2, qr.mapType), i.a8(8, qr.mapProceduralIndex), i.a8(8, qr.mapRealisticIndex), i.a8(14, qr.mapSeed), i.aX7(qr.mapName, 5), 2 === qr.mapType && i.aX8(qr.canvas),
				i.a8(1, qr.passableWater), i.a8(1, qr.passableMountains), i.a8(10, qr.playerCount), i.a8(10, qr.humanCount), i.a8(9, qr.selectedPlayer), i.a8(1, qr.gameMode), i.a8(2, qr.playerMode), i.a8(2, qr.battleRoyaleMode), i.a8(4, qr
					.numberTeams), i.a8(1, qr.isZombieMode), i.a8(1, qr.isContest), i.a8(1, qr.isReplay), i.dn(qr.elo, 2, 14), i.a8(1, qr.colorsType), i.a8(1, qr.colorsPersonalized), i.dn(qr.colorsData, 10, 18), i.a8(1, qr.selectableColor), i.dn(
					qr.teamPlayerCount, 4, 10), i.a8(1, qr.neutralBots), i.a8(2, qr.botDifficultyType), i.a8(4, qr.botDifficultyValue), i.dn(qr.botDifficultyTeam, 4, 4), i.dn(qr.botDifficultyData, 10, 4), i.a8(2, qr.spawningType), i.a8(14, qr
					.spawningSeed), i.dn(qr.spawningData, 11, 12), i.a8(1, qr.selectableSpawn), i.a8(2, qr.playerNamesType), i.aX9(qr.playerNamesData, 10, 5), i.a8(1, qr.selectableName), i.a8(2, qr.aIncomeType), i.a8(8, qr.aIncomeValue), i.dn(qr
					.aIncomeData, 10, 8), i.a8(2, qr.tIncomeType), i.a8(8, qr.tIncomeValue), i.dn(qr.tIncomeData, 10, 8), i.a8(2, qr.iIncomeType), i.a8(8, qr.iIncomeValue), i.dn(qr.iIncomeData, 10, 8), i.a8(2, qr.sResourcesType), i.a8(11, qr
					.sResourcesValue), i.dn(qr.sResourcesData, 10, 11), i.dn(qr.a60, 10, 30), ! function(xP) {
					var i = bG,
						aWZ = bB.qJ.aWZ,
						fs = bB.qJ.aWa,
						fu = bB.qJ.aWb,
						fw = bB.qJ.aWc,
						f9 = aWZ.length;
					i.a8(5, xP), i.a8(30, f9), i.a8(30, bB.qJ.aWe.length);
					for (var aB = 0; aB < f9; aB++) {
						var eh = aWZ[aB];
						i.a8(4, eh), i.a8(9, fs[aB]), 0 === eh ? i.a8(22, fu[aB]) : 1 === eh ? (i.a8(10, fu[aB]), i.a8(10, fw[aB])) : 2 === eh ? (i.a8(10, fu[aB]), i.a8(9, fw[aB])) : 3 === eh ? (i.a8(10, fu[aB]), i.a8(27, fw[aB])) : 4 === eh ? (i
							.a8(10, fu[aB]), i.a8(16, fw[aB])) : 5 === eh || 6 === eh ? i.a8(10, fu[aB]) : 7 === eh ? i.a8(1, fu[aB]) : 10 === eh && (i.a8(20, fu[aB]), i.a8(22, fw[aB]))
					}
				}(xP), ! function(xP) {
					for (var i = bG, aWd = bB.qJ.aWd, aWe = bB.qJ.aWe, f9 = aWd.length, aB = 0; aB < f9; aB++) i.a8(1, aWd[aB]), i.a8(xP, aWe[aB])
				}(xP), bG.eG),
			qr = bN.fa(i - 1, 6) + 1,
			xP = (bF.aVC(6 * qr) !== bG.g.length && bG.g.push(0), ! function() {
				var i = bG;
				i.eG = 24, i.a8(31, i.g.length), i.eG = 12, i.a8(12, function() {
					for (var g = bG.g, f9 = g.length, aVi = l.rVersion, aB = 3; aB < f9; aB++) aVi = aVi + g[aB] & 4095;
					return aVi
				}())
			}(), bJ.dh(bG.g), bH.tM.tN(bH.tM.tO(qr)));
		return bJ.uj(), bG.dh(), xP
	}
}

function cr() {
	var eh, bw = !1,
		aXB = !1,
		aXC = -1e4,
		aXD = -1,
		aXE = 0;

	function resize(aXI) {
		eh = 0, ab.tl() && (aXG(aXI) || bw) && (bw = !1, be.resize(), bY.aD3.resize(), aY.dh(), ba.dh(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a17 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bE.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), bg.resize(), af.resize(), aX.resize(), bj.resize(), aS.aAC()) : (aa.aHY(), aa.aHZ()), bh.dp = !0)
	}

	function aXF(fb) {
		return fb && 128 < fb ? Math.floor(fb) : 128
	}

	function aXG(aXI) {
		var i, j, aXK, tQ, a9a;
		if (!(0 < h.sy)) return tQ = aXF(document.documentElement.clientWidth), a9a = aXF(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tQ, j = a9a, aXK = 0 !== a0.id || i < j ?
			700 : 1200, aXK = Math.min(aXK / ((i + j) / 2), 1), aXK = 0 === bl.eU.data[1].value ? 2 * aXK / 3 : Math.min(aXK + (bl.eU.data[1].value - 1) * (1 - aXK) / 2, 1), h.k = (window.devicePixelRatio || 1) * aXK, aXI && !aXB ? (aXB = !0, t
				.removeChild(document.body, a2e)) : aXB && (aXB = !1, document.body.appendChild(a2e)), i = Math.floor(.5 + tQ * h.k), j = Math.floor(.5 + a9a * h.k), i !== h.i || j !== h.j ? (h.i = i, h.j = j, h.min = aCf(i, j), h.max = a7Q(i,
				j), h.iJ = bN.fa(i + j, 2), h.vb = i / j, a2e.width = i, a2e.height = j, a2e.style.width = tQ + "px", a2e.style.height = a9a + "px", aXD = bh.eX + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iJ = 0, this.vb = 1, this.k = 1, this.sy = 0, this.di = function() {
		this.i = aXF(document.documentElement.clientWidth) + 2, this.j = aXF(document.documentElement.clientHeight) + 2
	}, this.dh = function() {
		eh = 1, a2e = document.getElementById("canvasA"), 2 === a0.id && (a2e.style.webkitUserSelect = "none"), (vf = a2e.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aXG(0)
	}, this.ec = function() {
		50 <= ++eh && resize(0), -1 === aXD || bh.eX < aXD || (aXD = -1, 2e3 * ++aXE >= bh.eX + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.ds = function(jj) {
		bw = !0, resize(jj)
	}, this.a3J = function() {
		aXC + 1e3 > bh.eX || (aXC = bh.eX, resize(0))
	}
}

function dL() {
	this.aVL = new aXM, this.a1x = new aXN, this.aVc = new aXO
}

function aXO() {
	this.q7 = function() {
		return 69
	}, this.a0Z = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bF.a8(26, (i * j + j) % 67108864), bF.a8(22, 0), bF.a8(21, 0)
	}
}

function aXN() {
	this.a1y = function() {
		for (var gh, f9 = al.l0, a0v = al.l5, a1i = ag.a1i, a9O = this.aJ2(), aB = 0; aB < f9; aB++) gh = a0v[aB], bC.gV.jr(gh) || (a1i[gh] = a9O);
		var qO = ag.qO,
			jX = ag.jX,
			jY = ag.jY,
			a1g = ag.a1g,
			f9 = aD.kU;
		for (aB = 0; aB < f9; aB++)(0 === a1g[aB] || jY[aB] < 1 || 2 * qO[aB] > 3 * (jX[aB] + jY[aB])) && (a1i[aB] = 0);
		var a1v = 0;
		for (aB = 0; aB < f9; aB++) a1v += 0 < a1i[aB];
		return a1v
	}, this.aJ2 = function() {
		return Math.min(65535, bh.kR())
	}
}

function aXM() {
	function aXS(g, fb, i1) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fb >> (aB + i1) % 30 & 1)) % 256
	}
	this.ec = function(aXP, aXQ) {
		var g = new Uint8Array(256);
		return function(g, aXP, aXQ) {
				var aB, aXU = 3 + (4 + aXP) % 32768,
					aXV = 12 + aXQ % 32768,
					aXW = 17 + ((aXP & aXQ) + (aXP | aXQ) + aXP) % 32768;
				for (aB = 0; aB < 256; aB++) aXU = 1 + aXU * aXV % aXW, g[aB] = aXU % 256
			}(g, aXP, aXQ), aXS(g, aXP, 2), aXS(g, aXQ, 7),
			function(g) {
				var aB, fb, eG = 0;
				for (aB = 0; aB < 3e4; aB++) fb = g[eG], g[eG] = (fb + aB + g[(eG + aB) % 256]) % 256, eG = (fb + aB + eG + (fb & eG)) % 256
			}(g),
			function(g) {
				var aB, a9a = 1,
					u9 = 1;
				for (aB = 0; aB < 256; aB += 2) a9a = (1 + a9a) * (g[aB] + 1) % 1073741824, u9 = (1 + u9) * (g[aB + 1] + 1) % 1073741824;
				return [a9a, u9]
			}(g)
	}, this.aVM = function(aXX, aXY, aXZ, result) {
		for (var gc = 1 << aXX, aB = 0; aB < gc; aB++)
			if (this.aXa(aB, aXY, aXZ) === result) return aB;
		return 0
	}, this.aXa = function(aXb, aXY, aXZ) {
		for (var yR = aXY + aXb, ya = aXZ + aXb, fb = yR + ya & 2147483647, fS = 1; fS <= 16; fS++) fb = (fb = (fb ^ fb >> fS) >>> 1 + (3 & yR)) * (7 + (1023 & (yR | ya))) & 1073741823, ya >>= 1 + (1 & (yR >>= 1 + (1 & (fb += 65535 & ya))));
		return fb &= 1073741823
	}
}

function co() {
	var aXc, aXd, iN, aXe;
	this.dh = function() {
		var aB, fG, fI, aVd, aXf, i, j, zG, i8, xg, fb, gh, fP, fS, aXi;
		if (function() {
				if (iN = !0, aXe = "rgb(" + bU.xe[0] + "," + bU.xe[1] + "," + bU.xe[2] + ")", bU.aMl(bU.ep)) return 1;
				return iN = !1, 0
			}()) aXd = null;
		else {
			for (aXc = bN.fa(96, 4), aXf = 1 === bU.ep ? (aVd = 0, 160) : (aVd = 128, 32), aXe = "rgb(" + aVd + "," + aVd + "," + aVd + ")", aXd = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aXd[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bU.fK : aXc, j = aB % 2 == 0 ? aXc : bU.fL + 2 * aXc, aXd[aB].width = i, aXd[aB].height = j, xg = (i8 = (zG = aXd[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fI = aXc - 1; 0 <= fI; fI--)
						for (fb = aXf + Math.floor((fI + 1) * (aVd - aXf) / (aXc + 1)), fG = i - 1; 0 <= fG; fG--) xg[gh = 4 * ((0 === aB ? aXc - fI - 1 : fI) * i + fG)] = fb, xg[gh + 1] = fb, xg[gh + 2] = fb, xg[gh + 3] = 255;
				else {
					for (fG = aXc - 1; 0 <= fG; fG--)
						for (fb = aXf + Math.floor((fG + 1) * (aVd - aXf) / (aXc + 1)), fI = j - 1 - aXc; aXc <= fI; fI--) xg[gh = 4 * (fI * i + (3 === aB ? aXc - fG - 1 : fG))] = fb, xg[gh + 1] = fb, xg[gh + 2] = fb, xg[gh + 3] = 255;
					for (fS = 1; 0 <= fS; fS--)
						for (fG = aXc - 1; 0 <= fG; fG--)
							for (fI = aXc - 1; 0 <= fI; fI--) fP = (Math.pow(fG * fG + fI * fI, .5) + 1) / (aXc + 1), fb = aXf + Math.floor((1 < fP ? 1 : fP) * (aVd - aXf)), xg[gh = 4 * ((0 === fS ? aXc - fI - 1 : fI + fS * (j - aXc)) * i + (
								1 === aB ? fG : aXc - fG - 1))] = fb, xg[gh + 1] = fb, xg[gh + 2] = fb, xg[gh + 3] = 255
				}
				zG.putImageData(i8, 0, 0)
			}
			aXi = aXf, bU.xZ.fillStyle = "rgb(" + aXi + "," + aXi + "," + aXi + ")", bU.xZ.fillRect(0, 0, bU.fK, 1), bU.xZ.fillRect(0, bU.fL - 1, bU.fK, 1), bU.xZ.fillRect(0, 0, 1, bU.fL), bU.xZ.fillRect(bU.fK - 1, 0, 1, bU.fL)
		}
	}, this.zA = function() {
		var fS = iN ? 0 : -aXc;
		aOY(fS, fS, bU.fK - 2 * fS, bU.fL - 2 * fS, bc.aXj, bc.aXk, bc.aXl, bc.aXm) || (vf.fillStyle = aXe, vf.fillRect(0, 0, h.i, h.j))
	}, this.ve = function() {
		iN || (aOX(0, -aXc, bU.fK, aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vf.drawImage(aXd[0], bc.aXn, bc.aXo - aXc), aOX(bU.fK, -aXc, aXc, bU.fL + 2 * aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vf.drawImage(aXd[1], bc.aXn + bU.fK, bc.aXo - aXc),
			aOX(0, bU.fL, bU.fK, aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vf.drawImage(aXd[2], bc.aXn, bc.aXo + bU.fL), aOX(-aXc, -aXc, aXc, bU.fL + 2 * aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vf.drawImage(aXd[3], bc.aXn - aXc, bc.aXo - aXc))
	}
}

function dA() {
	this.aJ0 = new aXp, this.zD = new aXq, this.y = new aXr, this.iw = new aXs, this.aXi = new aXt, this.mP = new aXu, this.kI = new aXv, this.lH = new aXw, this.aXx = new aXy, this.aXz = new aY0, this.ma = new aY1, this.hj = new aY2, this.lq =
		new aY3, this.lJ = new aY4, this.hm = new aY5, this.mT = new aY6, this.qW = new aY7, this.dh = function() {
			this.lq.dh(), this.zD.dh(), this.y.dh(), this.iw.dh(), this.aXi.dh(), this.aXz.dh(), this.mT.dh()
		}, this.ve = function() {
			this.aXz.ve(), this.zD.ve()
		}
}

function aXv() {
	this.ec = function(player) {
		return !!bP.ma.mb(player) && !(bP.y.kY[player] >= Math.max(3 * ao.performance.li, aE.ki[aE.hs[player]]) || !bC.gV.mc(player, aE.kg[aE.hs[player]], 32, 0)) && (aW.aCS() ? function(player) {
			var aYA = bP.lJ.aCV(),
				f9 = aYA.length;
			if (0 === f9) return !1;
			aYA = aYA[ay.jl(f9)], f9 = bP.y.mN[aYA];
			if (bP.mT.mU(player, f9)) return !1;
			return !! function(player, mW) {
				var mW = bO.iu(bP.y.mZ[mW]),
					hO = bO.fH(mW),
					mW = bO.fJ(mW),
					nV = ag.j2[player],
					nW = ag.j4[player],
					ni = ag.j3[player],
					player = ag.j5[player],
					ni = Math.max(hO - ni, nV - hO),
					nV = Math.max(mW - player, nW - mW);
				return ni < 100 && nV < 100
			}(player, aYA) && !!bP.hm.qV(player, f9, 1) && (bC.gV.me(player), bP.y.mf(player), !0)
		}(player) : !!(ao.jL.ec(player) || ao.jA.ec(player) || ao.jC.ec(player)) && (function(player) {
			bQ.fl[1] = 4, bC.gV.me(player), bP.y.mf(player)
		}(player), !0))
	}
}

function aY6() {
	var aYD = 0,
		aYE = null;
	this.dh = function() {
		null === aYE && (aYE = new Uint16Array(2 * bP.y.ki)), aYD = 0
	}, this.eg = function(aYF, mT) {
		var aYG = aYE;
		aYG[aYD++] = aYF, aYG[aYD++] = mT
	}, this.mU = function(player, mS) {
		for (var aYG = aYE, f9 = aYD, aB = 0; aB < f9; aB += 2)
			if (aYG[aB] === mS && bP.lJ.aYH(aYG[aB + 1]) && player === bP.y.mO[bQ.fl[2]] >> 3) return !0;
		return !1
	}, this.aYI = function(aYJ) {
		var mP = bP.y.mL[aYJ];
		if (!(mP < 64)) {
			for (var mS = bP.y.mN[aYJ], aYG = aYE, f9 = aYD, aB = f9 - 2; 0 <= aB; aB -= 2)
				if (aYG[aB] === mS) {
					{
						aYO = void 0;
						var aYO = aYG[aB + 1];
						bP.lJ.aYH(aYO) && bP.mT.aYW(bQ.fl[2])
					}
					aYG[aB] = aYG[f9 - 2], aYG[aB + 1] = aYG[f9 - 1], f9 -= 2
				} aYD = f9
		}
	}, this.aYL = function(aYM, aYN) {
		for (var aYO = bP.y.mN[aYM], mS = -1, aYG = aYE, f9 = aYD, aB = 1; aB < f9; aB += 2)
			if (aYG[aB] === aYO) {
				mS = aYG[aB - 1];
				break
			} if (-1 === mS) return !1;
		if (!bP.lJ.aYH(mS)) return !1;
		var aYJ = bQ.fl[2],
			lp = bP.y.mM[aYJ];
		if (aYN === lp[lp.length - 1]) bP.y.mM[aYM] = bP.lq.aYP(bP.y.mM[aYM], bP.lq.ly(lp));
		else {
			var aYQ = bP.lJ.aYR(lp, aYN);
			if (-1 === aYQ) return !1;
			var aYS = bP.y.mY[aYJ];
			aYQ === aYS ? (aYJ = bO.iu(bP.y.mZ[aYJ]), bP.y.mM[aYM] = bP.lq.aYU(bP.y.mM[aYM], lp, aYQ, aYN, bO.iZ(lp[aYQ], aYN) > bO.iZ(lp[aYQ], aYJ))) : bP.y.mM[aYM] = bP.lq.aYU(bP.y.mM[aYM], lp, aYQ, aYN, aYS < aYQ)
		}
		return !0
	}, this.aYW = function(aYX) {
		var lp, lP = bP.y,
			mP = lP.mL[aYX];
		return mP % 64 != 5 && (lp = lP.mM[aYX], lP.aYY[aYX] = 65535 - lP.aYY[aYX], lP.mY[aYX] = lp.length - lP.mY[aYX] - 2, lP.mM[aYX] = bP.lq.ly(lp), lP.mL[aYX] = mP - mP % 64 + 5, !0)
	}
}

function aY1() {
	this.mb = function(player) {
		return !!aD.data.passableWater && bP.y.mK !== bP.y.ki && bP.y.kY[player] !== bP.y.aYZ && 0 !== ag.gq[player].length
	}, this.qR = function(aWB) {
		var mP = bQ.fl[1];
		return !(4 <= mP || !bP.lJ.aYa(bO.ez(aWB))) && ac.f4(bO.ez(bO.iy(aWB, mP)))
	}
}

function aXp() {
	this.aJ1 = function(player) {
		for (var a8o = bP.y.a8o, td = player << 3, aB = td + bP.y.kY[player] - 1; td <= aB; aB--) this.aYb(a8o[aB])
	}, this.aYb = function(aYc) {
		var y = bP.y,
			aYd = y.mK - 1,
			aYe = y.mO[aYc],
			aYf = y.aYg[aYc],
			aYh = y.mZ[aYc];
		y.mK = aYd, y.mO[aYc] = y.mO[aYd], y.mZ[aYc] = y.mZ[aYd], y.aYY[aYc] = y.aYY[aYd], y.a7h[aYc] = y.a7h[aYd], y.aYg[aYc] = y.aYg[aYd], y.mN[aYc] = y.mN[aYd], y.mL[aYc] = y.mL[aYd], y.aYi[aYc] = y.aYi[aYd], y.mM[aYc] = y.mM[aYd], y.mY[aYc] =
			y.mY[aYd], y.a8o[y.mO[aYc]] = aYc,
			function(aWA) {
				var player = aWA >> 3,
					y = bP.y,
					f9 = y.kY[player] - 1,
					aYl = (player << 3) + f9;
				y.kY[player] = f9, aYl !== aWA && (y.a8o[aWA] = y.a8o[aYl], y.mO[y.a8o[aWA]] = aWA)
			}(aYe), bP.iw.iw[bO.iv(y.mZ[aYc])][y.aYg[aYc]] = aYc, aYd = bO.iv(aYh), aYe = aYf, aYd = bP.iw.iw[aYd], y = aYd.pop(), aYe !== aYd.length && (aYd[aYe] = y, bP.y.aYg[y] = aYe)
	}
}

function aXq() {
	var aYn, aYo = 8,
		aYp = null;

	function aYu(xg, ev, eG) {
		ev *= 4;
		xg[ev] = 255, xg[1 + ev] = 255, xg[2 + ev] = eG, xg[3 + ev] = 255
	}

	function aYw(iB, aXe) {
		var fG, fI, iT, ev, aYy, aYz, i5 = aYo,
			i8 = bC.qz.getImageData(iB, i5, i5),
			xg = i8.data,
			lP = (i5 >> 1) - .5,
			aZ1 = bC.r7.a3X(aXe, .5);
		for (bC.r7.a3Z(aXe, aZ1, 300) || bC.r7.a3b(aXe, 100), fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) aYz = (i5 - 1.5) * (i5 - 1.5) / 4, xg[ev = 4 * (fI * i5 + fG)] = (aYy = (iT = (iT = fG - lP) * iT + (iT = fI - lP) * iT) <= (i5 - 4.5) * (i5 - 4.5) / 4 ? aZ1 : aXe)[0], xg[1 + ev] = aYy[1], xg[2 + ev] = aYy[2],
				xg[3 + ev] = aYz < iT ? 0 : 255;
		iB.putImageData(i8, 0, 0)
	}
	this.dh = function() {
		var eG, i5, a3z, iB, i8, xg;
		(aYn = aYn || new Array(aD.f6)).fill(null), eG = 255, i5 = aYo + 4, a3z = bC.qz.xV(i5, i5), iB = bC.qz.getContext(a3z, !0), i8 = bC.qz.getImageData(iB, i5, i5), aYu(xg = i8.data, i5 + 1, eG), aYu(xg, i5 + 2, eG), aYu(xg, 2 * i5 + 1, eG),
			aYu(xg, 2 * i5 - 3, eG), aYu(xg, 2 * i5 - 2, eG), aYu(xg, 3 * i5 - 2, eG), aYu(xg, i5 * (i5 - 3) + 1, eG), aYu(xg, i5 * (i5 - 2) + 1, eG), aYu(xg, i5 * (i5 - 2) + 2, eG), aYu(xg, i5 * (i5 - 2) - 2, eG), aYu(xg, i5 * (i5 - 1) - 3, eG),
			aYu(xg, i5 * (i5 - 1) - 2, eG), iB.putImageData(i8, 0, 0), aYp = a3z,
			function() {
				if (aD.i3)
					for (var a3z = new Array(bi.kr.length), f9 = aD.f6, aYs = aYn, aBn = bi.aBn, aB = 0; aB < f9; aB++) {
						var a6R = aBn[aB];
						a3z[a6R] || (a3z[a6R] = function(a6R) {
							var a3z = bC.qz.xV(aYo, aYo),
								iB = bC.qz.getContext(a3z, !0),
								g = bQ.fi;
							return g.set(bi.aYx[a6R]), aYw(iB, g), a3z
						}(a6R)), aYs[aB] = a3z[a6R]
					}
			}()
	}, this.ve = function() {
		var aB, player, aZ2, aOg, hs, iS, aZ4, aZ6, aZ7, mZ = bP.y.mZ,
			mO = bP.y.mO,
			a7h = bP.y.a7h,
			aYi = bP.y.aYi,
			aZ8 = aYn,
			aZ9 = aD.et,
			f9 = bP.y.mK,
			aZA = h.i,
			aZB = h.j,
			aZC = bU.fK << 4,
			ey = iK,
			en = ey / aYo,
			nV = im / ey,
			nW = io / ey,
			iT = (aZA + im) / ey - nV,
			iW = (aZB + io) / ey - nW,
			iB = vf;
		for (iB.imageSmoothingEnabled = ey < 9, bC.qz.textAlign(iB, 1), bC.qz.textBaseline(iB, 1), aB = 0; aB < f9; aB++) player = mO[aB] >> 3, hs = a7h[aB], aZ2 = .9 + .1 * Math.log10(hs), aOg = (iS = mZ[aB]) % aZC / 16 - aZ2, iS = aZB * (Math
			.floor(iS / aZC) / 16 - aZ2 - nW) / iW, aZ4 = -2 * (aZ7 = ey * aZ2) * (1 + (aZ6 = +(player === aZ9)) / 8), aZ6 = aZ6 * aZ7 / 4, (aZ7 = aZA * (aOg - nV) / iT) < aZ4 || iS < aZ4 || aZA + aZ6 < aZ7 || aZB + aZ6 < iS || (aOg = 2 *
			aZ2 * en, aZ4 = aZ2 * ey, null === (aZ6 = aZ8[player]) && (aZ8[player] = aZ6 = function(player) {
				var a3z = bC.qz.xV(aYo, aYo);
				return aYw(bC.qz.getContext(a3z, !0), ac.a8P(player)), a3z
			}(player)), player === aZ9 && (iB.setTransform(aOg, 0, 0, aOg, aZ7 - 2 * aOg, iS - 2 * aOg), iB.drawImage(aYp, 0, 0)), iB.setTransform(aOg, 0, 0, aOg, aZ7, iS), iB.drawImage(aZ6, 0, 0), (aZ2 = Math.floor(function(hs) {
				if (hs < 1e3) return .42;
				if (hs < 1e4) return .34;
				if (hs < 1e6) return .26;
				if (hs < 1e8) return .19;
				return .15
			}(hs) * aZ4)) < 6) || (iB.setTransform(1, 0, 0, 1, 0, 0), iB.fillStyle = aYi[aB] ? bD.od : bD.o5, iB.font = bC.qz.sq(1, aZ2), iB.fillText(bC.ry.a0O(hs), aZ7 + aZ4, iS + aZ4 + .1 * aZ2));
		iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aY0() {
	var aZF;
	this.dh = function() {
		if (aD.i3) {
			var hz = 1 - aD.yJ;
			aZF = new Array(bi.kr.length);
			for (var aB = aD.yI - 1; 0 <= aB; aB--) {
				var a6R = bi.kr[aB + hz];
				aZF[a6R] = bR.y.aZH(20, bi.aZI[a6R])
			}
			9 === aD.km && (aZF[1] = bR.y.aZH(20, bi.aZI[1]))
		} else aZF = [bR.y.aZH(20, bi.aZI[7])]
	}, this.ve = function() {
		var np = iK;
		if (!(5 <= np)) {
			var aZA = h.i,
				aZB = h.j,
				nV = im / np,
				nW = io / np,
				ni = (aZA + im) / np,
				nj = (aZB + io) / np,
				gi = -20 * np,
				aZK = .5 * gi,
				aZC = bU.fK << 4,
				f9 = bP.y.mK,
				mZ = bP.y.mZ,
				mO = bP.y.mO,
				aBn = bi.aBn,
				a3z = aZF,
				iB = vf;
			3 < np && (iB.globalAlpha = .5 * (5 - np));
			for (var aB = 0; aB < f9; aB++) {
				var iS = mZ[aB],
					fG = aZA * (iS % aZC / 16 - nV) / (ni - nV) + aZK,
					iS = aZB * (Math.floor(iS / aZC) / 16 - nW) / (nj - nW) + aZK;
				aZA < fG || aZB < iS || fG < gi || iS < gi || (iB.setTransform(np, 0, 0, np, fG, iS), iB.drawImage(a3z[aBn[mO[aB] >> 3]], 0, 0))
			}
			iB.globalAlpha = 1, iB.setTransform(np, 0, 0, np, 0, 0)
		}
	}
}

function aY4() {
	this.aZN = function(player, id) {
		for (var aZO = ag.gq[player], f9 = aZO.length, aB = 0; aB < f9; aB++)
			if (bO.iL(aZO[aB], id)) return !0;
		return !1
	}, this.aZP = function(player, ev) {
		for (var ib, aZQ, en, aZO = ag.gq[player], f9 = aZO.length, i = bU.fK, aZS = bO.fH(ev), aZT = bO.fJ(ev), fF = -1, min = bU.fK * bU.fK + bU.fL * bU.fL, id = ac.er(bO.ez(ev)), aB = 0; aB < f9; aB++)(aZQ = (aZQ = aZS - (ib = (en = aZO[
			aB]) >> 2) % i) * aZQ + (aZQ = aZT - ~~((.5 + ib) / i)) * aZQ) < min && bO.iL(en, id) && (min = aZQ, fF = ib);
		return fF
	}, this.lK = function(ia, ib) {
		for (var id = ac.er(bO.ez(ib)), iM = bO.iE, en = bO.ez(ia), aZU = -1, aB = 0; aB < 4; aB++) {
			var ey = en + iM[aB];
			ac.iN(ey) && ac.er(ey) === id && (-1 === aZU || bO.ic(bO.ex(ey), ib) < bO.ic(aZU, ib)) && (aZU = bO.ex(ey))
		}
		return aZU
	}, this.lt = function(player, ev) {
		for (var iM = bO.iE, en = bO.ez(ev), aB = 0; aB < 4; aB++) {
			var ey = en + iM[aB];
			if (ac.gj(ey) && ac.z8(player, ey)) return !0
		}
		return !1
	}, this.lu = function(player, ev) {
		for (var iM = bO.iE, en = bO.ez(ev), aB = 0; aB < 4; aB++) {
			var ey = en + iM[aB];
			if (ac.f0(ey)) return !0;
			if (ac.gj(ey)) {
				ey = ac.f1(ey);
				if (player !== ey && bu.f2(player, ey)) return !0
			}
		}
		return !1
	}, this.mQ = function(ev) {
		for (var iM = bO.iE, en = bO.ez(ev), aB = 0; aB < 4; aB++) {
			var ey = en + iM[aB];
			if (ac.gj(ey)) {
				ey = ac.f1(ey);
				if (bC.gV.jr(ey)) return ey
			}
		}
		return -1
	}, this.aYa = function(en) {
		if (ac.iN(en))
			for (var iM = bO.iE, aB = 0; aB < 4; aB++)
				if (ac.f4(en + iM[aB])) return !0;
		return !1
	}, this.nU = function(player, id) {
		for (var td = player << 3, te = td + bP.y.kY[player], mN = bP.y.mN, a8o = bP.y.a8o, aB = td; aB < te; aB++) {
			var a8p = a8o[aB];
			if (mN[a8p] === id) return a8p
		}
		return -1
	}, this.nZ = function(player) {
		return 0 === bP.y.kY[player] ? -1 : bP.y.a8o[player << 3]
	}, this.a6j = function(lj, lk) {
		var f9 = bP.y.mK;
		if (f9 < 1) return -1;
		for (var mZ = bP.y.mZ, aZV = 80, aQz = -1, aB = 0; aB < f9; aB++) {
			var fP = bO.iP(lj, lk, mZ[aB]);
			fP < aZV && (aZV = fP, aQz = aB)
		}
		return function(aB, lj, lk) {
			if (aB < 0) return;
			var aZc = bP.y.mZ[aB],
				aZd = bO.iV(aZc),
				aZc = bO.iY(aZc),
				aB = 20 * (.9 + .1 * Math.log10(bP.y.a7h[aB]));
			return aB = Math.max(aB, bO.ip(bC.qz.ti(.02, 1.7))), bN.aOf(bO.iU(lj), bO.iX(lk), aZd, aZc, aB)
		}(aQz, lj, lk) ? aQz : -1
	}, this.aYH = function(nS) {
		for (var f9 = bP.y.mK, mN = bP.y.mN, aB = 0; aB < f9; aB++)
			if (mN[aB] === nS) return bQ.fl[2] = aB, !0;
		return !1
	}, this.aIx = function(player) {
		for (var td = player << 3, te = td + bP.y.kY[player], a8o = bP.y.a8o, a7h = bP.y.a7h, hs = 0, aB = td; aB < te; aB++) hs += a7h[a8o[aB]];
		return hs
	}, this.aZX = function(player, aYX) {
		aYX = bP.y.mM[aYX];
		return this.lt(player, aYX[aYX.length - 1])
	}, this.aZY = function(ia, ib, fP, aZZ) {
		var ig = bO.fH(ia),
			ia = bO.fJ(ia),
			ii = bO.fH(ib),
			ib = bO.fJ(ib),
			ii = (fP = Math.max(fP, 1), ii - ig),
			ib = ib - ia,
			iT = bN.fa(Math.abs(ii) * aZZ, fP),
			aZZ = bN.fa(Math.abs(ib) * aZZ, fP);
		return bO.fW(ig + Math.sign(ii) * iT, ia + Math.sign(ib) * aZZ)
	}, this.aYR = function(lp, ev) {
		for (var f9 = lp.length - 1, fG = bO.fH(ev), fI = bO.fJ(ev), aB = 0; aB < f9; aB++) {
			var ia = lp[aB],
				ib = lp[aB + 1],
				nV = bO.fH(ia),
				ia = bO.fJ(ia),
				ni = bO.fH(ib),
				ib = bO.fJ(ib);
			if (!(fG !== nV && fG !== ni && Math.sign(fG - nV) === Math.sign(fG - ni) || fI !== ia && fI !== ib && Math.sign(fI - ia) === Math.sign(fI - ib))) {
				if (nV === ni || ia === ib) return aB;
				if (Math.abs(fG - nV) === Math.abs(fI - ia) && Math.abs(fG - ni) === Math.abs(fI - ib)) return aB
			}
		}
		return -1
	}, this.aCV = function() {
		for (var aZf = m5[0], mO = bP.y.mO, mK = bP.y.mK, g = [], aB = 0; aB < mK; aB++) bC.gV.l8(aZf, mO[aB] >> 3) && g.push(aB);
		return g
	}, this.lr = function(player, lp) {
		for (var td = player << 3, te = td + bP.y.kY[player], a8o = bP.y.a8o, mM = bP.y.mM, hb = lp[0], l7 = lp[lp.length - 1], aB = td; aB < te; aB++) {
			var gh = mM[a8o[aB]];
			if (gh[0] === hb && gh[gh.length - 1] === l7) return !0
		}
		return !1
	}
}

function aY5() {
	function aZi(player, aYX) {
		aYX = bO.iu(bP.y.mZ[aYX]), aYX = ac.er(bO.ez(aYX));
		return !!bP.lJ.aZN(player, aYX)
	}

	function aZg(player) {
		return bP.ma.mb(player) && !bP.lq.lw()
	}
	this.hn = function(player, ev) {
		return !!aZg(player) && -1 !== (ev = function(player, ev) {
			for (var f9 = bP.y.mK, mZ = bP.y.mZ, mO = bP.y.mO, aZV = bO.iG(), aQz = -1, aB = 0; aB < f9; aB++) {
				var fP = bO.iZ(ev, bO.iu(mZ[aB]));
				fP < aZV && bC.gV.l8(player, mO[aB] >> 3) && (aZV = fP, aQz = aB)
			}
			return aQz
		}(player, ev)) && !!aZi(player, ev) && (bQ.fl[3] = bP.y.mN[ev], !0)
	}, this.pc = function(player, nS) {
		return !!aZg(player) && !!bP.lJ.aYH(nS) && !!aZi(player, bQ.fl[2])
	}, this.qV = function(player, nS, aZj) {
		return !! function(player, nS, aZj) {
			if (aZg(player) && bP.lJ.aYH(nS)) {
				nS = bQ.fl[2];
				if (bC.gV.l8(player, bP.y.mO[nS] >> 3)) {
					if (function(player, aYX) {
							return bP.lJ.aZX(player, aYX) && (bQ.g[0] = bP.lq.ly(bP.y.mM[aYX]), bQ.fl[1] = 6, !0)
						}(player, nS)) return 1;
					var aYC = bO.iu(bP.y.mZ[nS]),
						aZn = bP.lJ.aZP(player, aYC);
					if (-1 !== aZn) {
						aZn = bO.iZ(aZn, aYC);
						if (!(aZj && 120 < aZn)) {
							aZj = function(aYX, aZo, aYC) {
								var lp = bP.y.mM[aYX],
									aYX = bP.y.mY[aYX],
									aZq = bO.iZ(aYC, lp[aYX + 1]);
								if (aZo <= aZq) return bP.lJ.aZY(aYC, lp[aYX + 1], aZq, aZo);
								for (var fP = aZo - aZq, f9 = lp.length - 1, aB = aYX + 1; aB < f9; aB++) {
									var aZr = bO.iZ(lp[aB], lp[aB + 1]);
									if (fP <= aZr) return bP.lJ.aZY(lp[aB], lp[aB + 1], aZr, fP);
									fP -= aZr
								}
								return lp[f9]
							}(nS, aZn, aYC);
							if (bP.lH.qS(player, aZj, 1)) return bQ.fl[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nS, aZj) && (player = bQ.fl[2], bP.y.mL[player] = 64 + bP.y.mL[player] % 64, bP.mT.eg(nS, bP.y.md), !0)
	}
}

function aXu() {
	function aZw(player, hs, aZu, aYC) {
		var jd;
		if (ac.f0(aZu)) jd = aD.f6;
		else {
			if ((jd = ac.f1(aZu)) === player) return void bf.gZ(player, hs - bC.gV.gY(player, hs), 12);
			if (!bu.f2(player, jd)) return void bA.kW.pr(player, jd, hs)
		}
		ad.jp(player, jd) || ad.k8(player) ? (ag.gb[player].push(aYC << 2), ad.eg(player, hs, jd), aF.jb(player, !0)) : bf.gZ(player, hs, 12)
	}
	this.ec = function() {
		for (var mL = bP.y.mL, mZ = bP.y.mZ, aYY = bP.y.aYY, aB = bP.y.mK - 1; 0 <= aB; aB--) 65535 === aYY[aB] && function(aB, aYC, i0) {
			if (6 === i0) {
				if (bP.mT.aYL(aB, aYC)) return bP.y.mY[aB]++, bP.y.aYY[aB] = 0, 0
			} else {
				var player = bP.y.mO[aB] >> 3,
					aB = bP.y.a7h[aB];
				bf.aZv(player), i0 < 4 ? aZw(player, aB, aYC + bO.iD[i0] << 2, aYC) : 4 === i0 ? function(player, hs, aYC) {
					var aB, fD, iM = bO.iE,
						ey = bO.ez(aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.f0(fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD) && !ac.z8(player, fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD)) return aZw(player, hs, fD, aYC)
				}(player, aB, aYC) : 5 === i0 && function(player, hs, aYC) {
					var aB, fD, iM = bO.iE,
						ey = bO.ez(aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD) && ac.z8(player, fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.f0(fD)) return aZw(player, hs, fD, aYC)
				}(player, aB, aYC)
			}
			return 1
		}(aB, bO.iu(mZ[aB]), mL[aB] % 64) && (bP.mT.aYI(aB), bP.aJ0.aYb(aB))
	}, this.aZt = function(player, ev, i0, nS, hs) {
		if (!(5 <= i0)) {
			var aZ9 = aD.et;
			if (bC.gV.hL(aZ9) && bu.f2(player, aZ9) && player !== aZ9 && 0 !== ag.gq[aZ9].length && bC.gV.a4a(player, 5)) {
				for (var aZu, fN = !1, aB = 0; aB < 4; aB++)
					if (aZu = ev + bO.iD[aB] << 2, ac.f4(aZu) && !ac.f0(aZu) && ac.f1(aZu) === aZ9) {
						fN = !0;
						break
					} fN && (aN.a7q(719, 0), i0 = hs < 25e3 ? L(481) + " (" + bC.ry.a0O(hs) + ") ⛵" : L(482) + " (" + bC.ry.a0O(hs) + ") 🚢", aN.zZ(180, i0, 719, player, bD.oc, bD.o2, -1, !0, void 0, {
					fT: 1,
					nS: nS
				}))
			}
		}
	}
}

function aXr() {
	this.ki = 512, this.aYZ = 8, this.mK = 0, this.md = 0, this.mO = new Uint16Array(this.ki), this.mZ = new Uint32Array(this.ki), this.aYY = new Uint16Array(this.ki), this.a7h = new Uint32Array(this.ki), this.aYg = new Uint16Array(this.ki), this
		.mN = new Uint16Array(this.ki), this.mL = new Uint8Array(this.ki), this.aYi = new Uint8Array(this.ki), this.mM = new Array(this.ki), this.mY = new Uint16Array(this.ki), this.kY = new Uint8Array(aD.f6), this.a8o = new Uint16Array(this.aYZ * aD
			.f6), this.dh = function() {
			this.mK = 0, this.md = 0, this.kY.fill(0), this.mM.fill(null)
		}, this.mf = function(player) {
			var hs = bQ.fg[0],
				mP = bQ.fl[1],
				lp = bQ.g[0],
				aZz = this.md,
				f9 = this.mK,
				aa0 = bO.it(lp[0]),
				aa1 = this.kY[player],
				aa2 = (player << 3) + aa1;
			this.mO[f9] = aa2, this.mZ[f9] = aa0, this.aYY[f9] = 0, hs < 60 && (bC.gV.gW(player, 60 - hs), hs = 60), this.a7h[f9] = hs, this.aYg[f9] = bP.iw.mf(f9, bO.iv(aa0)), this.mN[f9] = aZz, this.mL[f9] = mP, this.aYi[f9] = 0, this.mM[f9] = lp,
				this.mY[f9] = 0, this.md = (aZz + 1) % 65536, this.kY[player] = aa1 + 1, this.a8o[aa2] = f9, this.mK++, bP.mP.aZt(player, lp[lp.length - 1], mP, aZz, hs)
		}, this.ec = function() {
			bP.mP.ec();
			for (var gh = aD.et, eY = bP.lJ.aIx(gh), sb = (! function(sb) {
					for (var aa7, mZ = sb.mZ, a7h = sb.a7h, aYi = sb.aYi, aYY = sb.aYY, aYg = sb.aYg, mM = sb.mM, mY = sb.mY, sb = sb.mK, aZC = bU.fK << 4, aB = sb - 1; 0 <= aB; aB--) {
						var aa8 = mZ[aB],
							lp = mM[aB],
							aa9 = mY[aB],
							aa0 = bO.it(lp[aa9]),
							aaA = bO.it(lp[aa9 + 1]),
							aaB = aa0 % aZC,
							aa0 = ~~((aa0 + .5) / aZC),
							aaD = aaA % aZC,
							aaE = ~~((aaA + .5) / aZC),
							aaF = aaD - aaB,
							aaG = aaE - aa0,
							fC = Math.max(~~Math.sqrt(aaF * aaF + aaG * aaG + .5), 1),
							aJt = a7h[aB],
							aJt = (aJt = aYi[aB] ? 4e4 : 25e4 + Math.min(20 * aJt, 3e5) + Math.min(aJt >> 3, 5e4), aYY[aB] + Math.max(~~((aJt + .5) / fC), 1));
						65535 <= aJt ? aa9 + 2 < lp.length ? (mY[aB] = aa9 + 1, mZ[aB] = aa7 = function(aB, aaH, aaB, aaC, aa9, fC, lp, aZC) {
							aaH = Math.min(aaH - 65535, 65535);
							var lp = bO.it(lp[aa9 + 2]),
								aa9 = lp % aZC - aaB,
								lp = ~~((lp + .5) / aZC) - aaC,
								aaK = Math.max(~~Math.sqrt(aa9 * aa9 + lp * lp + .5), 1);
							return aaH = Math.min(Math.floor((fC * aaH + .5) / aaK), 65534), bP.y.aYY[aB] = aaH, aaB + bN.fa(aaH * aa9, 65535) + aZC * (aaC + bN.fa(aaH * lp, 65535))
						}(aB, aJt, aaD, aaE, aa9, fC, lp, aZC)) : (mZ[aB] = aa7 = aaA, aYY[aB] = 65535) : (aYY[aB] = aJt, mZ[aB] = aa7 = aaB + bN.fa(aJt * aaF, 65535) + aZC * (aa0 + bN.fa(aJt * aaG, 65535))), aYg[aB] = bP.iw.aaJ(aYg[aB],
							aa8, aa7)
					}
				}(this), ! function(sb) {
					if (bh.kR() % 2 == 1) {
						var aB, i1, lP, fT, eh, aaL, a02, aaM, hb, nV, nW, aa0, aaN, aAH, aaP, l7, f9 = sb.mK,
							mZ = sb.mZ,
							mO = sb.mO,
							a7h = sb.a7h,
							aYi = sb.aYi,
							iw = bP.iw.iw,
							aaR = iw.length,
							aaS = bP.iw.aaS,
							aZC = bU.fK << 4,
							aaT = aD.i3,
							aVz = bi.f7,
							gi = (f9 - 1) * (bN.fa(bh.kR(), 2) % 2);
						for (aB = 0; aB < f9; aB++)
							for (i1 = Math.abs(aB - gi), aa0 = mZ[i1], lP = bO.iv(aa0), hb = mO[i1] >> 3, nV = aa0 % aZC, nW = ~~((aa0 + .5) / aZC), aaP = a7h[i1], fT = 0; fT < 9; fT++)
								if (!((aaL = lP + aaS[fT]) < 0 || aaR <= aaL))
									for (aaM = iw[aaL], a02 = aaM.length, eh = 0; eh < a02; eh++) aaN = aaM[eh], l7 = mO[aaN] >> 3, hb == l7 || aaT && aVz[hb] === aVz[l7] && aVz[hb] || (l7 = mZ[aaN], (aAH = nV - l7 % aZC) * aAH + (aAH = nW -
										~~((l7 + .5) / aZC)) * aAH < 14400 && (l7 = a7h[aaN], aAH = l7 <= aaP ? Math.max(1, bN.fa(l7 + bN.fa(aaP - l7, 10), 10)) : Math.max(1, bN.fa(aaP, 10)), a7h[aaN] = Math.max(l7 - aAH, 0), aYi[
										aaN] = 4))
					}
				}(this), ! function(sb) {
					if (bh.kR() % 5 == 3)
						for (var a7h = sb.a7h, f9 = sb.mK, aB = 0; aB < f9; aB++) {
							var hs = a7h[aB];
							a7h[aB] = Math.max(hs - Math.max(1, hs >> 7), 0)
						}
				}(this), this), a7h = sb.a7h, aYi = sb.aYi, aB = sb.mK - 1; 0 <= aB; aB--) aYi[aB] = aYi[aB] >> 1, 0 === a7h[aB] && (bP.mT.aYI(aB), bP.aJ0.aYb(aB));
			bf.gZ(gh, eY - bP.lJ.aIx(gh), 15)
		}
}

function aXs() {
	this.aaU = 32, this.fG = 0, this.fI = 0, this.ix = 0, this.aaV = 0, this.aaW = 4, this.iw = null, this.aaS = new Int16Array(9), this.dh = function() {
		this.ix = 1 + bN.fa(bU.fK - 1, this.aaU), this.aaV = 1 + bN.fa(bU.fL - 1, this.aaU), this.iw = new Array(this.ix * this.aaV), bC.r7.a3W(this.iw);
		var fG, fI, aaS = this.aaS,
			i = this.ix;
		for (fG = -1; fG <= 1; fG++)
			for (fI = -1; fI <= 1; fI++) aaS[3 * (1 + fI) + 1 + fG] = fI * i + fG
	}, this.mf = function(aaY, aB) {
		return this.iw[aB].push(aaY), this.iw[aB].length - 1
	}, this.aaJ = function(aaZ, aa0, aaA) {
		var aaa, aab, aa0 = bO.iv(aa0),
			aaA = bO.iv(aaA);
		return aa0 === aaA ? aaZ : (aaa = this.iw[aa0].pop(), this.iw[aa0].length === aaZ ? this.mf(aaa, aaA) : (aab = this.iw[aa0][aaZ], this.iw[aa0][aaZ] = aaa, bP.y.aYg[aaa] = aaZ, this.mf(aab, aaA)))
	}
}

function aXw() {
	this.lI = function(player, aac) {
		return -1 !== aac && !!bP.lJ.lu(player, aac) && this.qS(player, aac, 0)
	}, this.qS = function(player, aac, aad) {
		player = function(player, aac, aad) {
			var aZn = bP.lJ.aZP(player, aac);
			if (-1 === aZn) return -1;
			aZn = bP.lJ.lK(aZn, aac);
			if (-1 === aZn) return -1;
			var ln = bP.lq.lv(aZn, aac);
			if (0 <= ln) return ln;
			if (bP.lq.lw()) return -1;
			if (0 <= (ln = bP.lq.lv(aac, aZn))) return bP.lq.lx(bP.lq.ly(bP.lq.get(ln)));
			if (aZn === aac) return bP.lq.lx(new Uint32Array([aZn, aac]));
			if (0 <= (ln = bP.aXx.qS(aZn, aac))) return ln;
			return aad ? function(aah, player) {
				var fq = bQ.fq,
					eU = (fq.fill(0), [aah]),
					iF = (fq[aah] = 1, bO.iF),
					aai = -1,
					f9 = eU.length;
				for (; - 1 === aai && f9;) {
					for (var g = [], aB = 0; aB < f9; aB++)
						for (var ev = eU[aB], a5K = fq[ev], fC = 0; fC < 8; fC++) {
							var xF, a1s, fF = ev + iF[fC],
								en = 4 * fF;
							ac.iN(en) ? (xF = fq[fF], a1s = a5K + 5 + ((1 & fC) << 1), 0 === xF ? (g.push(fF), fq[fF] = a1s) : fq[fF] = Math.min(a1s, xF)) : -1 === aai && fC % 2 == 0 && ac.z5(player, en) && (aai = ev)
						}
					f9 = (eU = g).length
				}
				return -1 !== aai ? function(ia, aak) {
					var iF = bO.iF,
						aal = -1,
						i0 = 0,
						n0 = [];
					for (; aak !== ia;)(i0 = function(ev, i0) {
						var fq = bQ.fq,
							iF = bO.iF,
							a5K = fq[ev];
						if (a5K - fq[ev + iF[i0]] != 5 + ((1 & i0) << 1))
							for (var fS = 0; fS < 8; fS++) {
								var fC = fS + i0 + 6 & 7;
								if (a5K - fq[ev + iF[fC]] == 5 + ((1 & fC) << 1)) return fC
							}
						return i0
					}(aak, i0)) !== aal && (n0.push(aak), aal = i0), aak += iF[i0];
					n0.push(ia);
					var ln = bP.lq.lv(n0[0], ia);
					if (0 <= ln) return ln;
					return bP.lq.lx(new Uint32Array(n0))
				}(aah, aai) : -1
			}(aac, player) : -1
		}(player, aac, aad);
		return -1 !== player && (bQ.g[0] = bP.lq.get(player), !0)
	}
}

function aXy() {
	function aan(hO, ih, ij) {
		for (var jk = Math.min(ih, ij), nn = Math.max(ih, ij), fI = jk + 1; fI < nn; fI++)
			if (!ac.iN(bO.iq(hO, fI))) return;
		return 1
	}

	function aao(hQ, ig, ii) {
		for (var jk = Math.min(ig, ii), nn = Math.max(ig, ii), fG = jk + 1; fG < nn; fG++)
			if (!ac.iN(bO.iq(fG, hQ))) return;
		return 1
	}

	function aap(ig, ih, ii, ij, aaf, aac) {
		for (var f9 = Math.min(Math.abs(ii - ig), Math.abs(ij - ih)), iT = Math.sign(ii - ig), iW = Math.sign(ij - ih), aB = 0; aB < f9; aB++)
			if (!ac.iN(bO.iq(ig += iT, ih += iW))) return null;
		return ig === ii ? aan(ig, ih, ij) ? new Uint32Array([aaf, bO.fW(ig, ih), aac]) : null : aao(ih, ig, ii) ? new Uint32Array([aaf, bO.fW(ig, ih), aac]) : null
	}
	this.qS = function(aaf, aac) {
		aaf = function(aaf, aac) {
			var ig = bO.fH(aaf),
				ih = bO.fJ(aaf),
				ii = bO.fH(aac),
				ij = bO.fJ(aac);
			if (ig === ii) {
				if (aan(ig, ih, ij)) return new Uint32Array([aaf, aac])
			} else {
				if (ih !== ij) return aap(ig, ih, ii, ij, aaf, aac) || aap(ii, ij, ig, ih, aaf, aac);
				if (aao(ih, ig, ii)) return new Uint32Array([aaf, aac])
			}
			return null
		}(aaf, aac);
		return null === aaf ? -1 : bP.lq.lx(aaf)
	}
}

function aY3() {
	var aaq = [];
	this.dh = function() {
		aaq = []
	}, this.lw = function() {
		return 65536 === aaq.length
	}, this.lv = function(aaf, aac) {
		for (var lq = aaq, f9 = lq.length, aB = 0; aB < f9; aB++) {
			var gh = lq[aB];
			if (gh[0] === aaf && gh[gh.length - 1] === aac) return aB
		}
		return -1
	}, this.ly = function(lp) {
		var aar = new Uint32Array(lp.length);
		return aar.set(lp), aar.reverse()
	}, this.aYP = function(hb, l7) {
		var gc = hb.length - 1,
			aas = new Uint32Array(gc + l7.length);
		return aas.set(hb, 0), aas.set(l7, gc), aas
	}, this.aYU = function(hb, l7, wj, ev, aat) {
		aat && (wj = (l7 = this.ly(l7)).length - wj - 2);
		aat = l7.subarray(wj + 1 + (ev === l7[wj + 1])), ev = new Uint32Array(hb.length + aat.length);
		return ev.set(hb, 0), ev.set(aat, hb.length), ev
	}, this.lx = function(lp) {
		return aaq.push(lp), aaq.length - 1
	}, this.get = function(aB) {
		return aaq[aB]
	}, this.ls = function() {
		return aaq
	}, this.aav = function(aaf, aac) {
		return null
	}
}

function aY7() {
	this.ec = function(player, nS) {
		player = bP.lJ.nU(player, nS);
		return !(player < 0 || !bP.mT.aYW(player) || (bP.mT.aYI(player), 0))
	}
}

function aXt() {
	var zh = 32,
		zg = new Array(2);

	function xV(eh) {
		var fG, fI, ev, iW, iT, i5 = zh,
			a3z = bC.qz.xV(i5, i5),
			iB = bC.qz.getContext(a3z, !0),
			i8 = bC.qz.getImageData(iB, i5, i5),
			xg = i8.data,
			lP = (i5 >> 1) - .5,
			lQ = Math.sqrt(lP * lP);
		for (xg.fill(255), fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) iT = fG - lP, iW = fI - lP, ev = 4 * (fI * i5 + fG), iT = 714 * (lQ - Math.sqrt(iT * iT + iW * iW)) / lQ, xg[2 + ev] = eh, xg[3 + ev] = 255 < iT ? 0 : iT;
		return iB.putImageData(i8, 0, 0), a3z
	}
	this.aaw = -1, this.dh = function() {
		this.aaw = -1, zg[0] || (zg[0] = xV(255), zg[1] = xV(0))
	}, this.aax = function(iB, en, fG, fI, eF, aB) {
		bC.gV.hL(aD.et) && (iB.setTransform(en *= 4 / 3 * .625, 0, 0, en, fG - (eF *= 4 / 3), fI - eF), iB.drawImage(zg[+(bP.y.mN[aB] === this.aaw)], 0, 0))
	}
}

function aY2() {
	function aWG(fG, f9, fI, aay, aAN, fZ, player) {
		if (!(fI < 1 || aAN < fI))
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (bP.lJ.aYa(en) && !bC.r7.has(aay, ac.er(en)) && ac.yx(en, player)) return en >> 2;
				fG += fZ
			}
		return -1
	}

	function aWK(fI, f9, fG, aay, aWE, fZ, player) {
		if (!(fG < 1 || aWE < fG)) {
			f9 = Math.max(f9, 0);
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (bP.lJ.aYa(en) && !bC.r7.has(aay, ac.er(en)) && ac.yx(en, player)) return en >> 2;
				fI += fZ
			}
		}
		return -1
	}

	function aWO(ia, ib, aWB) {
		return -1 !== ib && (-1 === ia || bO.ic(ib, aWB) < bO.ic(ia, aWB)) ? ib : ia
	}
	this.hk = function(player, aWB) {
		if (bP.ma.mb(player))
			for (var aWC = bO.iG(), aay = [];;) {
				var aai = function(aWB, aWC, aay, player) {
					for (var hO = bO.fH(aWB), hQ = bO.fJ(aWB), aWE = bU.fK - 2, aAN = bU.fL - 2, aWF = -1, fC = 0; fC < aWC; fC++) {
						var aAM = Math.max(hO - fC, 1),
							aN6 = Math.max(hQ - fC, 1),
							yt = Math.min(hO + fC, aWE),
							ys = Math.min(hQ + fC, aAN),
							ia = aWG(hO, yt - hO, hQ - fC, aay, aAN, 1, player),
							ib = aWG(hO - 1, hO - aAM - 1, hQ - fC, aay, aAN, -1, player),
							yt = aWG(hO, yt - hO, hQ + fC, aay, aAN, 1, player),
							aAM = aWG(hO - 1, hO - aAM - 1, hQ + fC, aay, aAN, -1, player),
							aWJ = aWK(hQ, ys - hQ - 1, hO - fC, aay, aWE, 1, player),
							aWL = aWK(hQ - 1, hQ - aN6 - 2, hO - fC, aay, aWE, -1, player),
							ys = aWK(hQ, ys - hQ - 1, hO + fC, aay, aWE, 1, player),
							aN6 = aWK(hQ - 1, hQ - aN6 - 2, hO + fC, aay, aWE, -1, player);
						if (aWF = aWO(aWF, ia, aWB), aWF = aWO(aWF, ib, aWB), aWF = aWO(aWF, yt, aWB), aWF = aWO(aWF, aAM, aWB), aWF = aWO(aWF, aWJ, aWB), aWF = aWO(aWF, aWL, aWB), aWF = aWO(aWF, ys, aWB), 0 <= (aWF = aWO(aWF, aN6, aWB)) &&
							fC * fC >= bO.ic(aWF, aWB)) return aWF
					}
					return -1
				}(aWB, aWC, aay, player);
				if (-1 === aai) break;
				var id = ac.er(bO.ez(aai));
				if (bP.lJ.aZN(player, id)) return !! function(player, aai, aWB) {
					for (var i0 = bO.j0(aai, aWB), aB = 0; aB < 4; aB++) {
						var ev = bO.iy(aai, i0);
						if (ac.aIV(bO.ez(ev), player)) return bQ.fl[6] = i0, 1;
						i0 = (i0 + 1) % 4
					}
					return
				}(player, aai, aWB) && (bQ.fl[7] = aai, !0);
				aay.push(id)
			}
		return !1
	}
}

function dk() {
	this.aTa = [L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493), L(494), L(495), L(496), L(497), L(498)];
	var ab1 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCr = new Array(ab1.length), this.dh = function() {
		var g = bl.eU.data[155].value.split(";"),
			lP = g.length;
		if (function() {
				for (var f9 = ab1.length, aB = 0; aB < f9; aB++) bZ.aCr[aB] = ab1[aB]
			}(), !(lP > ab1.length))
			for (var aB = 0; aB < lP; aB++) g[aB].length && (this.aCr[aB] = g[aB])
	}, this.aTc = function(eG, code) {
		for (var aCr = this.aCr, ab3 = ab1, qg = (aCr[eG] = code, ""), f9 = aCr.length, ab4 = [], aB = 0; aB < f9; aB++) ab4.push(aCr[aB] === ab3[aB] ? "" : aCr[aB]);
		f9--;
		for (aB = 0; aB < f9; aB++) qg += ab4[aB] + ";";
		bl.sR.sS(155, qg += ab4[f9])
	}, this.aTZ = function() {
		bl.sR.sS(155, ""), this.dh()
	}, this.eh = function(code, eG) {
		return code === this.aCr[eG] || code === this.aCr[eG + 1]
	}
}

function dc() {
	var ab5 = new Array(1),
		ab6 = new Array(1),
		ab7 = 20,
		eV = 0,
		ab8 = !1;

	function abA() {
		ab7++, br.play()
	}
	this.dh = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				ab6[aB] = 0, ab5[aB] = document.createElement("audio"), ab5[aB].src = src, ab5[aB].setAttribute("preload", "auto"), ab5[aB].setAttribute("controls", "none"), ab5[aB].style.display = "none", ab5[aB].onpause = function() {
					ab6[aB] = 1
				}, ab5[aB].oncanplaythrough = function() {
					ab6[aB] = 0 === ab6[aB] ? 1 : ab6[aB]
				}, document.body.appendChild(ab5[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			ab8 = !0
		}
	}, this.uj = function() {
		if (ab8) {
			ab8 = !1;
			for (var aB = 0; 0 <= aB; aB--) ab5[aB].onpause = null, ab5[aB].oncanplaythrough = null, t.removeChild(document.body, ab5[aB]), ab5[aB] = null
		}
	}, this.play = function() {
		if (ab8) {
			var eY = performance.now();
			if (eV + 66 < eY)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === ab6[aB]) return eV = eY, ab6[aB] = 2, void ab5[aB].play();
			0 < ab7 && (ab7--, setTimeout(abA, 66))
		}
	}
}

function cc() {
	this.a9M = function() {
		var abD;
		return !(al.l0 < 3 || ag.gx[m5[0]] >= aD.kE >> 1) && (aD.i3 ? 9 !== aD.km && (abD = ae.aKW(), !(2 * ae.aKX(bj.l3()) >= abD)) : function() {
			if (8 === aD.km) return !1;
			var abD = ae.aKW();
			if (2 * ag.hB[m5[0]] >= abD) return !1;
			return !0
		}())
	}
}

function cC() {
	this.dh = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aa1 = aD.kU, hB = ag.hB, aB = 0; aB < aa1; aB++) hB[aB] = 512;
			var aa2 = aD.yB,
				kh = aE.kh,
				hs = aE.hs;
			for (aB = aa1; aB < aa2; aB++) hB[aB] = kh[hs[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f9 = aD.yB, hB = ag.hB, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f9; aB++) hB[aB] = sResourcesValue
		} : function() {
			for (var f9 = aD.yB, hB = ag.hB, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f9; aB++) hB[aB] = sResourcesData[aB]
		})();
		bf.n0[8] = ag.hB[aD.et]
	}
}

function dT() {
	var aIj = 501,
		abJ = (this.abI = new Uint32Array(aIj), this.a4f = new Uint32Array(aIj), this.aCW = new Uint16Array(aIj), this.aTi = 0, 1),
		uw = 0;

	function abM(self) {
		self.max.fill(0)
	}

	function abO(self, aB) {
		self.max[0] = Math.max(self.abI[aB], self.max[0]), self.max[1] = Math.max(self.a4f[aB], self.max[1]), self.max[2] = Math.max(self.aCW[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.abK = 0, this.n0 = new Array(21), this.abL = null, this.di = function() {
		this.abL = [L(499), L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(324), L(325), L(507), L(508), L(509), L(510), "", L(511), L(512), L(513), L(282), L(514), L(515)]
	}, this.dh = function() {
		this.aTi = 0, abJ = 1, this.abK = 0, uw = 0, abM(this), this.n0.fill(0)
	}, this.qP = function(player, il) {
		bC.gV.a4Z(player) && (this.n0[0] += il + 1, this.n0[1]++, this.n0[12] += bQ.fg[1])
	}, this.pu = function(player, pX) {
		__fx.donationsTracker.logDonation(player, pX, bQ.fg[0]);
		player === aD.et && (aN.pu(bQ.fg[0], bQ.fg[1], pX), this.n0[12] += bQ.fg[1], this.n0[16] += bQ.fg[0]), pX === aD.et && (aN.a7u(bQ.fg[0], player), this.n0[10] += bQ.fg[0])
	}, this.qT = function(player) {
		bC.gV.a4Z(player) && (this.n0[2]++, this.n0[12] += bQ.fg[1])
	}, this.qb = function(player) {
		bC.gV.a4Z(player) && (this.n0[19]++, this.n0[12] += bQ.fg[1])
	}, this.aZv = function(player) {
		bC.gV.a4Z(player) && this.n0[20]++
	}, this.gZ = function(player, a5K, eG) {
		bC.gV.a4Z(player) && (this.n0[eG] += a5K)
	}, this.ec = function() {
		var self;
		this.abK || 0 < uw-- || ((self = this).abI[self.aTi] = ag.gx[aD.et], self.a4f[self.aTi] = ag.hB[aD.et], self.aCW[self.aTi] = ae.aCX(aD.et), abO(self, self.aTi), self.aTi++, self.aTi === aIj && function(self) {
			abM(self), abO(self, 0), self.aTi = 1 + bN.fa(aIj, 2);
			for (var aB = 1; aB < self.aTi; aB++) self.abI[aB] = self.abI[2 * aB], self.a4f[aB] = self.a4f[2 * aB], self.aCW[aB] = self.aCW[2 * aB], abO(self, aB);
			abJ *= 2
		}(self), uw = abJ - 1, bg.mr(), 0 === ag.n4[aD.et] && (self.abK = bh.kR()))
	}
}

function dU() {
	this.i = 0, this.j = 0, this.tQ = 0, this.tR = 0, this.abQ = 0, this.abR = 0, this.a9a = 0, this.u9 = 0;
	var abT = this.abS = 0;
	this.abU = 0, this.abV = 0, this.abW = 0, this.a8v = 0, this.eG = 0, this.aC7 = null, this.hv = !1, this.abX = -1, this.abY = !1, this.abZ = [0, 0], this.di = function() {
		this.aC7 = [L(516), L(124, 0, "Balance"), L(123, 0, "Interest"), L(517)]
	}, this.dh = function() {
		this.hv = !1, this.abX = -1, this.abY = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var fC = a0.a1.iI() && h.i < h.j ? 1 : a0.a1.iI() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(fC * this.i), this.i -= a0.a1.iI() && h.i < h.j ? 2 * be.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8v = Math.floor(this.j / 150), this.a8v = Math.max(this.a8v, 1.5), this.tQ = Math.floor(1 + .02 * this
			.i), this.tR = Math.floor(1 + .04 * this.i), this.a9a = this.tR, abT = Math.floor(.75 * this.a9a), this.u9 = Math.floor(1 + .075 * this.i), this.abU = Math.floor(1 + .1125 * this.i), this.abV = Math.floor(this.i * (a0.a1.iI() ? .03 :
				.029)), this.abV = Math.max(this.abV, 4), this.abW = Math.floor(.035 * this.i), this.abW = Math.max(this.abW, 4), this.abS = this.j - 2 * this.a9a - this.u9 - this.abU, this.hv && this.aba()
	}, this.hM = function(lj, lk) {
		var yE, yD;
		return !!this.hv && (yD = lj, yE = lk, lj -= bN.fa(h.i - this.i, 2), lk -= bN.fa(h.j - this.j, 2), lj < 0 || lk < 0 || lj >= this.i || lk >= this.j || lj >= this.i - this.abU && lk < this.abU ? -1 !== aM.hM(yD, yE) || bE.hM(yD, yE) ||
			this.sG() : lk < this.abU || (lk < this.j - this.u9 ? (this.abY = !0, this.abX = (lj - 2 * this.tQ - this.abQ) / this.abR, 3 !== this.eG && (bh.dp = !0)) : (yD = (yD = Math.floor(lj / (this.i / this.aC7.length))) < 0 ? 0 : yD >=
				this.aC7.length ? this.aC7.length - 1 : yD) !== this.eG && (this.eG = yD, this.aba(), bh.dp = !0)), !0)
	}, this.a2f = function(lj, lk) {
		return this.abZ[0] = lj, this.abZ[1] = lk, !(!this.hv || !this.abY || (lj -= bN.fa(h.i - this.i, 2), lk = this.abX, this.abX = (lj - 2 * this.tQ - this.abQ) / this.abR, (0 <= this.abX && this.abX <= 1 || 0 <= lk && lk <= 1) && (bh.dp = !
			0), 0))
	}, this.a34 = function() {
		this.abY && (this.abY = !1)
	}, this.a3G = function() {
		this.hv ? this.sG() : this.show()
	}, this.show = function() {
		bf.aTi < 2 || (this.hv = !0, this.aba())
	}, this.sG = function() {
		this.hv = !1, this.abX = -1, bh.dp = !0
	}, this.aba = function() {
		this.eG < 2 ? this.abQ = aQ.measureText(bC.ry.a0O(bf.max[this.eG]), bC.qz.sq(0, this.abV)) : 2 === this.eG && (this.abQ = aQ.measureText(bC.ry.a5D(6, 2), bC.qz.sq(0, this.abV))), this.abR = this.i - 2 * this.tQ - this.abQ - this.tR
	}, this.mr = function() {
		this.hv && this.aba()
	}, this.ve = function() {
		this.hv && this.a9s()
	}, this.a9s = function() {
		var fG = bN.fa(h.i - this.i, 2),
			fI = bN.fa(h.j - this.j, 2);
		vf.setTransform(1, 0, 0, 1, fG, fI), vf.fillStyle = bD.o2, vf.fillRect(0, this.abU, this.i, this.j - this.abU), this.abb(), this.aSG(), vf.strokeRect(0, 0, this.i, this.j), bC.qz.textAlign(vf, 2), vf.font = bC.qz.sq(0, this.abV), 0 ===
			this.eG ? this.abc(bf.abI, fG, fI) : 1 === this.eG ? this.abc(bf.a4f, fG, fI) : 2 === this.eG ? this.abd(fG, fI) : 3 === this.eG && (this.abe(fG, fI), this.abf(fG, fI)), aM.a71(Math.floor(fG + this.i - .725 * this.abU), Math.floor(
				fI + .275 * this.abU), Math.floor(.45 * this.abU)), vf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.abb = function() {
		var aB, eY;
		for (vf.lineWidth = this.a8v, bC.qz.textBaseline(vf, 1), bC.qz.textAlign(vf, 1), vf.strokeStyle = bD.o5, vf.font = bC.qz.sq(1, this.abW), eY = this.i / this.aC7.length, vf.fillStyle = bD.oR, vf.fillRect(this.eG * eY, this.j - this.u9, eY,
				this.u9), vf.fillStyle = bD.o5, vf.fillRect(0, this.j - this.u9 - .5 * this.a8v, this.i, this.a8v), aB = 1; aB <= 3; aB++) vf.fillRect(aB * eY, this.j - this.u9, this.a8v, this.u9);
		for (aB = this.aC7.length - 1; 0 <= aB; aB--) vf.fillText(bC.zG.a4D(this.aC7[aB], 0, .9 * eY), (aB + .5) * eY, this.j - .46 * this.u9)
	}, this.aSG = function() {
		vf.fillStyle = bD.os, vf.fillRect(0, 0, this.i, this.abU), vf.fillStyle = bD.o5, vf.fillRect(0, this.abU - .5 * this.a8v, this.i, this.a8v), vf.font = bC.qz.sq(1, .39 * this.abU), vf.fillText(bC.zG.a4D(L(518), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.abU))
	}, this.abc = function(g, fG, fI) {
		var lP = bf.max[this.eG],
			a3Y = (vf.setTransform(1, 0, 0, 1, fG + 2 * this.tQ + this.abQ, fI + this.a9a + this.abU), vf.lineWidth = 2, this.abS / Math.sqrt(lP));
		vf.beginPath(), vf.moveTo(this.abR, this.abS - a3Y * Math.sqrt(g[bf.aTi - 1]));
		for (var aB = bf.aTi - 2; 0 <= aB; aB--) vf.lineTo(aB * this.abR / (bf.aTi - 1), this.abS - a3Y * Math.sqrt(g[aB]));
		vf.stroke();
		fG = this.a71(g, a3Y, .5);
		fG < .95 && vf.fillText(bC.ry.a0O(lP), -this.tQ, 0), .05 < Math.abs(fG - .5) && vf.fillText(bC.ry.a0O(Math.floor(lP / 4)), -this.tQ, Math.floor(this.abS / 2)), .05 < fG && vf.fillText("0", -this.tQ, this.abS)
	}, this.abd = function(fG, fI) {
		vf.setTransform(1, 0, 0, 1, fG + 2 * this.tQ + this.abQ, fI + this.a9a + this.abU), vf.lineWidth = 2;
		var a3Y = this.abS / Math.max(bf.max[this.eG], 1);
		vf.beginPath(), vf.moveTo(this.abR, this.abS - a3Y * bf.aCW[bf.aTi - 1]);
		for (var aB = bf.aTi - 2; 0 <= aB; aB--) vf.lineTo(aB * this.abR / (bf.aTi - 1), this.abS - a3Y * bf.aCW[aB]);
		vf.stroke();
		fG = this.a71(bf.aCW, a3Y, 1), fI = bf.max[this.eG] / 100;
		fG < .95 && vf.fillText(bC.ry.a5D(fI, 2), -this.tQ, 0), .05 < Math.abs(fG - .5) && vf.fillText(bC.ry.a5D(fI / 2, 2), -this.tQ, Math.floor(this.abS / 2)), .05 < fG && vf.fillText(bC.ry.a5D(0, 2), -this.tQ, this.abS)
	}, this.abe = function(fG, fI) {
		vf.setTransform(1, 0, 0, 1, fG + .34 * this.i, fI + 2 * abT + this.abU), bC.qz.textAlign(vf, 2);
		for (var aBp = this.j - 4 * abT - this.u9 - this.abU, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vf.fillText(bC.zG.a4D(bf.abL[g[aB]], 0, .31 * this.i), 0, aB * aBp / 9);
		var fb = bf.n0;
		for (vf.setTransform(1, 0, 0, 1, fG + .39 * this.i, fI + 2 * abT + this.abU), bC.qz.textAlign(vf, 0), vf.fillText(bC.ry.a5D(100 * fb[0] / (1024 * Math.max(fb[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vf.fillText(fb[g[aB]].toString(), 0,
			aB * aBp / 9);
		vf.fillText(bC.ry.a5D(100 * (1 - ag.gx[aD.et] / fb[7]), 0), 0, aBp)
	}, this.abf = function(fG, fI) {
		vf.setTransform(1, 0, 0, 1, fG + .79 * this.i, fI + 2 * abT + this.abU), bC.qz.textAlign(vf, 2);
		var aB, aBp = this.j - 4 * abT - this.u9 - this.abU;
		for (vf.fillStyle = bD.oM, aB = 2; 0 <= aB; aB--) vf.fillText(bC.zG.a4D(bf.abL[aB + 8], 0, .31 * this.i), 0, aB * aBp / 9);
		vf.fillText(bC.zG.a4D(bf.abL[18], 0, .31 * this.i), 0, 3 * aBp / 9), vf.fillStyle = bD.oL, vf.fillText(bC.zG.a4D(bf.abL[11], 0, .31 * this.i), 0, 4 * aBp / 9), vf.fillStyle = bD.oe, vf.fillText(bC.zG.a4D(bf.abL[13], 0, .31 * this.i), 0,
				5 * aBp / 9), vf.fillText(bC.zG.a4D(bf.abL[15], 0, .31 * this.i), 0, 6 * aBp / 9), vf.fillText(bC.zG.a4D(bf.abL[16], 0, .31 * this.i), 0, 7 * aBp / 9), vf.fillText(bC.zG.a4D(bf.abL[12], 0, .31 * this.i), 0, 8 * aBp / 9), vf
			.fillStyle = bD.od, vf.fillText(bC.zG.a4D(bf.abL[17], 0, .31 * this.i), 0, aBp), vf.fillStyle = bD.oM;
		var fb = bf.n0,
			aFt = fb[8] + fb[9] + fb[10] + fb[18],
			aFt = bC.ry.a0O(aFt),
			aR4 = vf.measureText(aFt).width,
			fG = (vf.setTransform(1, 0, 0, 1, fG + .83 * this.i + aR4, fI + 2 * abT + this.abU), vf.fillText(bC.ry.a0O(fb[8]), 0, 0), vf.fillText(bC.ry.a0O(fb[9]), 0, aBp / 9), vf.fillText(bC.ry.a0O(fb[10]), 0, 2 * aBp / 9), vf.fillText(bC.ry
				.a0O(fb[18]), 0, 3 * aBp / 9), vf.fillStyle = bD.oL, vf.fillText(aFt, 0, 4 * aBp / 9), vf.fillStyle = bD.oe, vf.fillText(bC.ry.a0O(fb[13]), 0, 5 * aBp / 9), vf.fillText(bC.ry.a0O(fb[15]), 0, 6 * aBp / 9), vf.fillText(bC.ry
				.a0O(fb[16]), 0, 7 * aBp / 9), vf.fillText(bC.ry.a0O(fb[12]), 0, 8 * aBp / 9), fb[12] + fb[13] + fb[15] + fb[16]);
		vf.fillStyle = bD.od, vf.fillText(bC.ry.a0O(fG), 0, aBp), vf.fillStyle = bD.o5
	}, this.a71 = function(g, a3Y, aAV) {
		var aB, e, fs;
		return this.abX < 0 || 1 < this.abX ? .25 : (aB = this.abX * (bf.aTi - 1), fs = g[e = Math.floor(aB)], fs += (aB - e) * (g[e < bf.aTi - 1 ? e + 1 : e] - fs), vf.strokeStyle = bD.o8, .04 < this.abX && this.abh(0, this.abS - a3Y * Math.pow(
				fs, aAV), aB * this.abR / (bf.aTi - 1), this.abS - a3Y * Math.pow(fs, aAV)), .04 < fs / bf.max[this.eG] && this.abh(aB * this.abR / (bf.aTi - 1), this.abS, aB * this.abR / (bf.aTi - 1), this.abS - a3Y * Math.pow(fs, aAV)), vf
			.fillStyle = bD.oh, vf.beginPath(), vf.arc(aB * this.abR / (bf.aTi - 1), this.abS - a3Y * Math.pow(fs, aAV), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vf.fill(), g = this.abX * bh.aCY, g = 0 === ag.n4[aD.et] ? Math.floor(g * bf
				.abK) : Math.floor(g * bh.kR()), vf.fillStyle = bD.o5, vf.fillText(1 === aAV ? bC.ry.a5D(fs / 100, 2) : bC.ry.a0O(Math.floor(fs)), -this.tQ, this.abS - a3Y * Math.pow(fs, aAV)), bC.qz.textAlign(vf, 1), vf.fillText(aW.aCL(g),
				aB * this.abR / (bf.aTi - 1), this.abS + this.abV - (a0.a1.iI() ? 2 : 0) - this.a8v), bC.qz.textAlign(vf, 2), a3Y * Math.pow(fs, aAV) / this.abS)
	}, this.abh = function(nV, nW, ni, nj) {
		vf.beginPath(), vf.moveTo(nV, nW), vf.lineTo(ni, nj), vf.stroke()
	}
}

function c0() {
	this.aTj = "https://territorial.io/changelog", this.aTo = "https://territorial.io/terms", this.aTp = "https://territorial.io/privacy", this.aTn = "https://territorial.io/tutorial", this.aTm = "https://territorial.io/players", this.aTk =
		"https://territorial.io/clans", this.aTl = "https://territorial.io/clan-results", this.aQD = "https://patreon.com/c/territorial", this.aDq = "https://play.google.com/store/apps/details?id=territorial.io", this.a2C =
		"https://apps.apple.com/app/id1581110913", this.aDr = "https://discord.gg/pthqvpTXmh", this.aDs = "https://www.instagram.com/davidtschacher/", this.zw =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dC() {
	this.y = new abi, this.zD = new abj, this.dh = function() {
		this.y.dh()
	}, this.ec = function() {
		0 !== this.y.aVt && this.y.aVt--
	}
}

function abj() {
	this.ve = function() {
		if (0 !== bR.y.aVt && (vf.globalAlpha = Math.min(bR.y.aVt / 580, 1), vf.drawImage(bR.y.abm, 1 + aS.zB(), 1 + aS.zC()), vf.globalAlpha = 1, aD.hX)) {
			for (var nV = im / iK, nW = io / iK, ni = (h.i + im) / iK, nj = (h.j + io) / iK, gi = bR.y.abn * iK, abo = bR.y.abo, aB = aD.kU - 1; 0 <= aB; aB--) ! function(aB, gi, nV, nW, ni, nj, abo) {
				var highlight;
				0 === ag.n4[aB] || 0 === ag.gx[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gi *= 2), ni = h.i * ((ag.j2[aB] + ag.j3[aB] + 1) / 2 - nV) / (ni - nV) - .5 * gi, nV = h.j * ((ag.j4[
					aB] + ag.j5[aB] + 1) / 2 - nW) / (nj - nW) - .5 * gi, ni > h.i) || nV > h.j || ni < -gi || nV < -gi || (highlight ? vf.setTransform(2 * iK, 0, 0, 2 * iK, ni, nV) : vf.setTransform(iK, 0, 0, iK, ni, nV), vf.drawImage(
					abo[aD.i3 ? bi.f7[aB] : 1], 0, 0))
			}(aB, gi, nV, nW, ni, nj, abo);
			vf.setTransform(iK, 0, 0, iK, 0, 0)
		}
	}
}

function abi() {
	this.abn = 28, this.aVt = 0, this.abm = null;
	var abq = this.abo = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function abv(i5, abw) {
		var fG, fI, ev, iT, a3z = bC.qz.xV(i5, i5),
			iB = bC.qz.getContext(a3z, !0),
			i8 = bC.qz.getImageData(iB, i5, i5),
			xg = i8.data,
			lP = (i5 >> 1) - .5,
			abx = .5 + lP;
		for (abx *= abx, fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) iT = (iT = fG - lP) * iT + (iT = fI - lP) * iT, xg[ev = 4 * (fI * i5 + fG)] = abw[0], xg[1 + ev] = abw[1], xg[2 + ev] = abw[2], xg[3 + ev] = (abx - iT) * abw[3] / abx;
		return iB.putImageData(i8, 0, 0), a3z
	}

	function aax(aB, iB, a3z, i5) {
		var highlight, fG, fI;
		0 !== ag.n4[aB] && 0 !== ag.gx[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i5 *= 2), fG = ag.j2[aB] + ag.j3[aB] + 1 - i5 - 2 >> 1, fI = ag.j4[aB] + ag.j5[aB] + 1 - i5 - 2 >> 1, highlight ? iB
			.drawImage(a3z[aD.i3 ? 9 === aD.km && 5 === aE.hs[aB] ? 3 : bi.f7[aB] : aB < aD.kU ? 1 : 0], fG, fI, i5, i5) : iB.drawImage(a3z[aD.i3 ? 9 === aD.km && 5 === aE.hs[aB] ? 3 : bi.f7[aB] : aB < aD.kU ? 1 : 0], fG, fI))
	}
	this.dh = function() {
		var sb;
		this.aVt = 700,
			function(sb) {
				var i5 = sb.abn;
				if (sb.abo = [], abq = [], aD.i3) {
					for (var aB = 0; aB <= aD.yI; aB++) sb.abo.push(abv(i5, bi.aZI[bi.kr[aB]])), abq.push(abv(i5 >> 1, bi.aZI[bi.kr[aB]]));
					9 === aD.km && abq.push(abv(i5, bi.aZI[1]))
				} else sb.abo.push(abv(i5, bi.aZI[7])), sb.abo.push(abv(i5, bi.aZI[4])), abq.push(abv(i5 >> 1, bi.aZI[7]))
			}(this),
			function(sb, ac1) {
				var aB, abm = sb.abm,
					iB = bC.qz.getContext(abm, !0),
					f9 = aD.f6,
					i5 = sb.abn >> 1;
				iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0), ac1 && iB.clearRect(0, 0, abm.width, abm.height);
				if (9 === aD.km) {
					i5 <<= 1;
					sb = az.kv[5];
					for (aB = f9 - sb; aB < f9; aB++) aax(aB, iB, abq, i5);
					f9 -= sb, i5 >>= 1
				}
				for (aB = aD.kU; aB < f9; aB++) aax(aB, iB, abq, i5)
			}(this, null !== (sb = this).abm && sb.abm.width === bU.fK - 2 && sb.abm.height === bU.fL - 2 || (sb.abm = bC.qz.xV(bU.fK - 2, bU.fL - 2), !1)), aD.hX || this.a5V()
	}, this.aZH = abv, this.a5V = function() {
		for (var f9 = aD.kU, i5 = this.abn, abo = this.abo, iB = bC.qz.getContext(this.abm, !0), aB = 0; aB < f9; aB++) aax(aB, iB, abo, i5)
	}
}

function dD() {
	function ac4() {
		8 === aD.km && 1 === aD.a17 && bT.a0j.a16()
	}

	function ac3(player) {
		aD.hX ? (ak.aIq(player), al.aMH(), aD.ko && aD.qL.ec()) : b3.aEA(player)
	}
	this.pn = function(player) {
		aN.a1K(player, player === aD.et ? 21 : 22), ac3(player), ac4()
	}, this.qI = function(player) {
		1 === aD.a17 && 0 !== ag.n4[player] && 2 !== ag.a4V[player] && ac3(player), aD.a1A--, aD.a19--, aN.a1K(player, 4), bC.gV.hK(2) && aW.mq(!0), ac4()
	}
}

function dN() {
	this.aW9 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBm = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bD.o5, "rgb(170,170,170)"
	], this.ac5 = [bD.o5, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bD.o5, bD.nw], this.ac6 = [bD.nw, bD.o5, bD.o5, bD.o5, bD.nw, bD.nw, bD.nw, bD.nw, bD.o5];
	var aMR = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aLk = ["rgba(" + aMR[0] + ",", "rgba(" + aMR[1] + ",", "rgba(" + aMR[2] + ",", "rgba(" + aMR[3] + ",", "rgba(" + aMR[4] + ",", "rgba(" + aMR[5] + ",", "rgba(" + aMR[6] + ",", "rgba(" + aMR[7] + ",", "rgba(" + aMR[8] + ",", "rgba(" + aMR[9] +
			","
		], this.aLl = ["rgb(" + aMR[0] + ")", "rgb(" + aMR[1] + ")", "rgb(" + aMR[2] + ")", "rgb(" + aMR[3] + ")", "rgb(" + aMR[4] + ")", "rgb(" + aMR[5] + ")", "rgb(" + aMR[6] + ")", "rgb(" + aMR[7] + ")", "rgb(" + aMR[8] + ")", "rgb(" + aMR[9] +
			")"
		], this.a1T = null, this.aZI = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aYx = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kr = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f7 = new Uint8Array(aD.f6), this.aBn = new Uint8Array(aD.f6), this.yO = new Uint16Array(aD.f6), this.yP = new Uint16Array(this.kr.length + 1), this.yQ = new Uint16Array(this.kr.length), this.di =
		function() {
			this.a1T = [L(519), L(520), L(521), L(522), L(523), L(524), L(525), L(526), L(527)]
		}, this.dh = function() {
			if (this.f7.fill(0), this.aBn.fill(0), this.ac7(), aD.i3) {
				if (9 === aD.km) {
					for (var f7 = bi.f7, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f7[aB] = 1;
					var f9 = aD.f6;
					for (aB = aD.data.teamPlayerCount[7]; aB < f9; aB++) f7[aB] = 2;
					bi.kr[1] = 7, bi.kr[2] = 8
				} else aD.ko ? function() {
					var aYx = bi.aYx,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kU - 1; 0 <= aB; aB--) colorsData[aB] = ay.jl(262144);
					var acI = 0,
						fP = 768,
						aVd = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var fC = 0, fT = 0; fT < 3; fT++) fC += Math.abs(aYx[aB][fT] - aVd[fT]);
							fC < fP && (acI = aB, fP = fC)
						} var acJ = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) acJ[aB] = teamPlayerCount[aB];
					var kr = bi.kr,
						acK = new Uint8Array(9),
						gc = (kr[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) acJ[aB] && (acK[aB] = gc, kr[gc++] = aB);
					var jk = aD.kU,
						f7 = bi.f7;
					acJ[acI] ? (acJ[acI]--, f7[0] = acK[acI]) : jk = 0;
					var eh = 0;
					for (aB = jk; aB < aD.yB; aB++) {
						var i1 = kr[eh];
						if (acJ[i1]) acJ[i1]--, f7[aB] = acK[i1];
						else if (aB--, 9 <= ++eh) return console.log("error 325")
					}
				}() : this.ec();
				! function() {
					for (var f9 = aD.f6, yO = bi.yO, yP = bi.yP, yQ = bi.yQ, f7 = bi.f7, kr = bi.kr, yH = kr.length, eU = new Array(yH), aB = 0; aB < yH; aB++) eU[aB] = [];
					for (aB = 0; aB < f9; aB++) eU[kr[f7[aB]]].push(aB);
					for (aB = 1; aB <= yH; aB++) yP[aB] = yP[aB - 1] + eU[aB - 1].length;
					for (aB = 0; aB < yH; aB++)
						for (var gc = eU[aB].length, lP = yP[aB], i1 = 0; i1 < gc; i1++) yO[i1 + lP] = eU[aB][i1];
					var kU = aD.kU;
					for (aB = 0; aB < yH; aB++)
						for (gc = eU[aB].length, lP = yP[aB], i1 = 0; i1 < gc; i1++)
							if (yO[i1 + lP] >= kU) {
								yQ[aB] = i1;
								break
							}
				}(), ! function() {
					for (var f9 = aD.f6, f7 = bi.f7, aBn = bi.aBn, kr = bi.kr, aB = 0; aB < f9; aB++) aBn[aB] = kr[f7[aB]];
					9 === aD.km && aBn.fill(1, f9 - az.kv[5])
				}()
			}
		}, this.ac7 = function() {
			for (var aB = this.kr.length - 1; 0 <= aB; aB--) this.kr[aB] = aB
		}, this.ec = function() {
			var a0D = new Uint8Array(aD.kU),
				a0E = new Uint8Array(aD.kU),
				acC = new Uint16Array(8),
				acD = new Uint16Array(this.kr.length);
			this.acE(a0D, a0E, acC, 1), this.aIL(acC), this.acF(acD, a0D, a0E), this.acG(a0D, a0E, acD), this.acH()
		}, this.acE = function(a0D, a0E, acJ, acL) {
			for (var fT, e, acM, f9 = this.kr.length - acL, g = new Uint16Array(f9), aYx = this.aYx, colorsData = aD.data.colorsData, aB = aD.kU - 1; 0 <= aB; aB--) {
				for (fT = f9; acL <= fT; fT--) g[fT - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aYx[fT][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aYx[fT][1]) + Math.abs(4 * (63 & colorsData[aB]) - aYx[fT][2]);
				for (acM = 768, fT = f9 - 1; 0 <= fT; fT--) g[e = (fT + aB) % f9] < acM && (acM = g[e], a0D[aB] = e);
				for (acJ[a0D[aB]] += 4, acM = 768, fT = f9 - 1; 0 <= fT; fT--) g[e = (fT + aB) % f9] < acM && e !== a0D[aB] && (acM = g[e], a0E[aB] = e);
				acJ[a0E[aB]]++
			}
		}, this.aIL = function(acJ) {
			for (var fT, lR, f9 = this.kr.length - 1, aB = f9; 0 <= aB; aB--) this.kr[aB] = aB;
			for (aB = f9 - 1; 0 <= aB; aB--) acJ[aB]++;
			for (aB = 1; aB <= f9; aB++) {
				for (lR = 0, fT = 1; fT < f9; fT++) acJ[fT] > acJ[lR] && (lR = fT);
				acJ[lR] = 0, this.kr[aB] = lR + 1
			}
		}, this.acF = function(acD, a0D, a0E) {
			var fT, a1p, eh, fC, e, nh, th, acN = this.kr.length - 1,
				rS = new Uint16Array(acN),
				acO = [],
				acP = 0,
				a1o = [],
				acQ = [];
			loop: for (var aB = 0; aB < aD.kU; aB++)
				if (null !== (a1p = bC.ry.a1q(ag.a1n[aB]))) {
					for (fT = a1o.length - 1; 0 <= fT; fT--)
						if (a1p === a1o[fT]) {
							acQ[fT].push(aB), acP = Math.max(acP, acQ[fT].length);
							continue loop
						} a1o.push(a1p), acO.push(!1), acQ.push([aB]), acP = Math.max(acP, 1)
				}
			for (; 2 < aD.yI && acP > bN.fa(aD.kU, aD.yI);) aD.yI--, aD.km--;
			for (fT = a1o.length - 1; 0 <= fT; fT--) {
				for (fC = -1, eh = a1o.length - 1; 0 <= eh; eh--) !acO[eh] && (-1 === fC || acQ[eh].length > acQ[fC].length) && (fC = eh);
				for (eh = acN - 1; 0 <= eh; eh--) rS[eh] = 1;
				for (eh = acQ[fC].length - 1; 0 <= eh; eh--) rS[a0D[acQ[fC][eh]]] += 3, rS[a0E[acQ[fC][eh]]]++;
				for (aB = acN - 1; 0 <= aB; aB--) {
					for (e = fC % acN, eh = acN - 1; 0 <= eh; eh--) rS[eh] > rS[e] && (e = eh);
					for (nh = -1, eh = aD.yI; 0 < eh; eh--)
						if (this.kr[eh] === e + 1) {
							nh = eh;
							break
						} if (rS[e] = 0, -1 !== nh) {
						for (th = 0, eh = aD.yI; 0 < eh; eh--) acD[nh] > acD[eh] && th++;
						if (th !== aD.yI - 1) {
							for (eh = acQ[fC].length - 1; 0 <= eh; eh--) acD[nh]++, this.f7[acQ[fC][eh]] = nh;
							break
						}
					}
				}
				acO[fC] = !0
			}
		}, this.acG = function(a0D, a0E, acD) {
			for (var aB, iS, f9 = this.kr.length - 1, border = bN.fa(aD.kU, aD.yI), acR = (0 < aD.kU % aD.yI && border++, new Uint8Array(1 + f9)), fT = f9; 1 <= fT; fT--) acR[this.kr[fT]] = fT;
			for (aB = 0; aB < aD.kU; aB++) iS = acR[a0D[aB] + 1], 0 === this.f7[aB] && iS <= aD.yI && acD[iS] < border && (acD[iS]++, this.f7[aB] = iS);
			for (aB = 0; aB < aD.kU; aB++) iS = acR[a0E[aB] + 1], 0 === this.f7[aB] && iS <= aD.yI && acD[iS] < border && (acD[iS]++, this.f7[aB] = iS);
			for (fT = aD.yI; 1 <= fT; fT--)
				for (aB = aD.kU - 1; 0 <= aB && !(acD[fT] >= border); aB--) 0 === this.f7[aB] && (acD[fT]++, this.f7[aB] = fT)
		}, this.acH = function() {
			if (aD.yI < 8) aD.yI++, aD.km++, aD.yJ = 1;
			else
				for (var aB = aD.kU; aB < aD.f6; aB++) this.f7[aB] = 1 + aB % aD.yI
		}
}

function df() {
	this.gy = function() {
		for (var fG, fI, aB = g5 - 1; 0 <= aB; aB--) fG = bN.fa(g7[aB], 4) % bU.fK, fI = bN.fa(g7[aB], 4 * bU.fK), ag.j2[g0] = Math.min(fG, ag.j2[g0]), ag.j4[g0] = Math.min(fI, ag.j4[g0]), ag.j3[g0] = Math.max(fG, ag.j3[g0]), ag.j5[g0] = Math
			.max(fI, ag.j5[g0])
	}, this.gJ = function() {
		var fC, gh, aB, f9 = ag.gb[g0].length,
			fB = ac.fB;
		loop: for (aB = f9 - 1; 0 <= aB; aB--) {
			for (fC = 3; 0 <= fC; fC--)
				if (gh = ag.gb[g0][aB] + fB[fC], ac.f0(gh) || ac.gj(gh) && ac.f1(gh) !== g0) {
					ac.jg(ag.gb[g0][aB], g0);
					continue loop
				} ag.gb[g0][aB] = ag.gb[g0][f9 - 1], ag.gb[g0].pop(), f9--
		}
	}, this.gK = function() {
		var player = g0,
			gp = ag.gp,
			gq = ag.gq,
			fY = ag.fY,
			f9 = gp[player].length,
			fB = ac.fB;
		loop: for (var aB = f9 - 1; 0 <= aB; aB--) {
			for (var acS = !1, acT = !1, fC = 3; 0 <= fC; fC--) {
				var gh = gp[player][aB] + fB[fC];
				if (ac.aIV(gh, player)) continue loop;
				acS = acS || ac.iN(gh), acT = acT || ac.aIU(gh)
			}
			acS ? gq[player].push(gp[player][aB]) : acT ? fY[player].push(gp[player][aB]) : ac.yk(gp[player][aB], player), gp[player][aB] = gp[player][f9 - 1], gp[player].pop(), f9--
		}
	}, this.gn = function() {
		ag.gx[g4] -= g5
	}, this.go = function(border) {
		for (var f9 = border.length, aB = f9 - 1; 0 <= aB; aB--) ac.z5(g4, border[aB]) || (border[aB] = border[f9 - 1], border.pop(), f9--)
	}, this.gr = function(border) {
		for (var f9 = border.length, aB = f9 - 1; 0 <= aB; aB--) !ac.z5(g4, border[aB]) && ac.f4(border[aB]) && (border[aB] = border[f9 - 1], border.pop(), f9--)
	}, this.gs = function(border) {
		for (var fC, gh, f9 = border.length, fB = ac.fB, aB = f9 - 1; 0 <= aB; aB--)
			for (fC = 3; 0 <= fC; fC--)
				if (gh = border[aB] + fB[fC], ac.aIV(gh, g4)) {
					ag.gp[g4].push(border[aB]), border[aB] = border[f9 - 1], border.pop(), f9--;
					break
				}
	}, this.gt = function() {
		for (var fC, gh, fB = ac.fB, aB = g5 - 1; 0 <= aB; aB--)
			for (fC = 3; 0 <= fC; fC--) gh = g7[aB] + fB[fC], ac.z8(g4, gh) && ac.aIb(gh) && (ag.gp[g4].push(gh), ac.ge(gh, g4))
	}, this.gu = function() {
		var fG, fI;
		loop: for (; ag.j4[g4] < ag.j5[g4];) {
			for (fG = ag.j3[g4]; fG >= ag.j2[g4]; fG--)
				if (ac.z5(g4, 4 * (ag.j4[g4] * bU.fK + fG))) break loop;
			ag.j4[g4]++
		}
		loop: for (; ag.j4[g4] < ag.j5[g4];) {
			for (fG = ag.j3[g4]; fG >= ag.j2[g4]; fG--)
				if (ac.z5(g4, 4 * (ag.j5[g4] * bU.fK + fG))) break loop;
			ag.j5[g4]--
		}
		loop: for (; ag.j2[g4] < ag.j3[g4];) {
			for (fI = ag.j5[g4]; fI >= ag.j4[g4]; fI--)
				if (ac.z5(g4, 4 * (fI * bU.fK + ag.j2[g4]))) break loop;
			ag.j2[g4]++
		}
		loop: for (; ag.j2[g4] < ag.j3[g4];) {
			for (fI = ag.j5[g4]; fI >= ag.j4[g4]; fI--)
				if (ac.z5(g4, 4 * (fI * bU.fK + ag.j3[g4]))) break loop;
			ag.j3[g4]--
		}
	}, this.f2 = function(player, jd) {
		return 0 === bi.f7[player] || bi.f7[player] !== bi.f7[jd]
	}, this.hf = function(player) {
		for (var aB, gi, f9 = ag.gp[player].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < f9; aB++)
				if (ac.f0(ag.gp[player][aB] + gi)) return !0;
		return !1
	}, this.aIm = function(player) {
		for (var aB, gi, f9 = ag.gp[player].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < f9; aB++)
				if (ac.jf(ag.gp[player][aB]) && ac.f0(ag.gp[player][aB] + gi)) return !0;
		return !1
	}, this.hi = function(a4b, a4c) {
		for (var aB, eY, gi, gh, aa1 = ag.gp[a4b].length, aa2 = ag.gp[a4c].length, fB = (aa2 < aa1 && (eY = a4b, a4b = a4c, a4c = eY, eY = aa1, aa1 = aa2, 0), ac.fB), fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < aa1; aB++)
				if (gh = ag.gp[a4b][aB] + gi, ac.gj(gh) && ac.f1(gh) === a4c) return !0;
		return !1
	}, this.aIn = function(a4b, a4c) {
		for (var aB, gi, gh, aa1 = ag.gp[a4b].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < aa1; aB++)
				if (ac.jf(ag.gp[a4b][aB]) && (gh = ag.gp[a4b][aB] + gi, ac.gj(gh)) && ac.f1(gh) === a4c) return !0;
		return !1
	}
}

function dZ() {
	this.qU = new acU
}

function acU() {
	this.hl = function(player) {
		bC.gV.a4W(player) && aN.zZ(80, L(528), 637, 0, bD.ov, bD.o2, -1, !1)
	}, this.ho = function(player) {
		bC.gV.a4W(player) && aN.zZ(80, L(529), 637, 0, bD.ov, bD.o2, -1, !1)
	}
}

function acV() {
	this.acW = 0, this.ec = function() {
		aO.ec(), aZ.ec(), h.ec(), b0.y.ec(), ax.aHq(), bW.eQ.ec(), bh.dp && (bh.dp = !1, aa.ve())
	}
}

function acX() {
	this.eX = bh.eX, this.eG = 0, this.acW = 0, this.aHo = 0, this.acY = null, this.acZ = 7, this.aca = 0, this.dh = function() {
		this.aHo = 0, this.acY = [], this.eG = 0, this.acW = 0
	}, this.aV5 = function(aC) {
		if (aD.hX) this.aCZ(aC);
		else if (this.acY.push(aC), 2 === aD.a17) {
			for (var aB = 0; aB < this.acY.length; aB++) bA.pQ.ec(this.acY[aB]);
			this.acY = []
		}
	}, this.aCZ = function(aC) {
		2 !== aD.a17 && (bA.pQ.ec(aC), bB.ec(), aW.aCZ(this.aHo), this.aHo === aD.a5b ? (aD.qL.ec(), this.aHo = 0, this.eG = 0, this.acW = 0, this.eX = bh.eX) : (this.aHo++, af.a5U(), af.mq(!0), bd.aD8()))
	}, this.ec = function() {
		h.ec(), aD.hX ? (bh.dp = aW.aCZ(-1) || bh.dp, ms()) : (0 !== this.eG || bh.eX >= this.eX && (this.eX += bh.aCY * Math.floor(1 + (bh.eX - this.eX) / bh.aCY), 2 === aD.a17 ? mg() : this.acb(), this.eG++, 27 < bh.eX - this.aca)) && this
		.acc(), mn(), bh.dp && (bh.dp = !1, z9()), this.aca = bh.eX
	}, this.acc = function() {
		bh.dp = !0, mp(), this.eG = 0
	}, this.acb = function() {
		var wU, aB;
		if (this.acW !== 7 * this.aHo) mi(), bd.aD8();
		else {
			wU = !1;
			loop: for (; this.acd() && (wU = !0, mi(), 2 !== aD.a17) && 0 < this.acY.length;)
				for (aB = this.acZ - 2; 0 <= aB; aB--)
					if (mi(), 2 === aD.a17) break loop;
			wU ? bd.aD8() : (mg(), bd.a5X())
		}
	}, this.acd = function() {
		return 0 < this.acY.length && (this.aHo++, bA.pQ.ec(this.acY[0]), this.acY.shift(), !0)
	}
}

function ace() {
	var acf, acg, ach, aHo, aci, eG = 0,
		eX = bh.eX;

	function acl() {
		! function() {
			if (!aD.hX) return;
			if (aD.ko) return;
			if (2 !== aD.a17)
				if (aci % 7 != 0) aci++;
				else if (aHo === aD.a5b) {
				if (!aco()) return;
				aW.aCZ(aHo), aD.qL.ec()
			} else {
				if (!aco()) return;
				aci++, aHo++, af.a5U(), af.mq(!0)
			}
			return 1
		}() && aco() && mi()
	}

	function acm() {
		eG = 0, (aD.hX ? (bh.dp = aW.aCZ(aHo - (aci % 7 == 0 ? 0 : 1) + aci % 7 / 7) || bh.dp, ms) : aM.hJ || !bE.a5y ? ms : (bh.dp = !0, mp))()
	}

	function aco() {
		var aB, f9, acp = bB.qJ.aWZ,
			fs = bB.qJ.aWa,
			fu = bB.qJ.aWb,
			fw = bB.qJ.aWc,
			acq = bB.qJ.aWd,
			acr = bB.qJ.aWe;
		if (!(acf >= acr.length)) {
			if (acr = acr[acf], acq[acf]) {
				for (f9 = acg + acr, aB = acg; aB < f9; aB++) bA.pQ.q8(acp[aB], fs[aB], fu[aB], fw[aB]);
				acg += acr, acf++
			} else ++ach >= acr && (acf++, ach = 0);
			return 1
		}
		aN.a2S("Replay file smaller than expected."), bE.a3H(!1), aD.a17 = 2
	}
	this.acW = 0, this.dh = function() {
		aci = aHo = ach = acg = acf = 0
	}, this.ec = function() {
		var aaR;
		h.ec(), bE.a9m() < 1.7 ? 0 === eG ? bh.eX >= eX && (aaR = bh.aCY / bE.a9m(), eX += aaR * Math.floor(1 + (bh.eX - eX) / aaR), 2 === aD.a17 || aM.hJ || !bE.a5y ? mg() : (acl(), bd.aD8()), eG++) : acm() : function() {
			var aaR;
			if (bh.eX >= eX)
				if (2 === aD.a17 || aM.hJ || !bE.a5y) mg(), eX = bh.eX;
				else {
					for (aaR = bh.aCY / bE.a9m(), 16 < (bh.eX - eX) / aaR && (eX = bh.eX - 16 * aaR); bh.eX >= eX && 2 !== aD.a17;) eX += aaR, acl();
					bd.aD8()
				} acm()
		}(), mn(), bh.dp && (bh.dp = !1, z9())
	}, this.a1I = function() {
		bB.qJ.aWe.length - acf <= 2 || aN.a2S("Replay file larger than expected.")
	}
}

function acs() {
	var eG = 0,
		eX = bh.eX;
	this.acW = 0, this.ec = function() {
		h.ec(), aD.hX ? ms() : 0 === eG ? bh.eX >= eX && (eX += bh.aCY * Math.floor(1 + (bh.eX - eX) / bh.aCY), 2 === aD.a17 || aM.hJ ? mg() : (mi(), bd.aD8()), eG++) : ((aM.hJ ? ms : (bh.dp = !0, mp))(), eG = 0), mn(), bh.dp && (bh.dp = !1,
		z9())
	}
}

function dV() {
	this.a1H = null, this.dp = !1, this.eX = 0, this.aCY = 56;
	var act = 0;

	function acu() {
		bh.eX = act = performance.now(), bh.a1H.ec(), window.requestAnimationFrame(acu)
	}
	this.dh = function() {
		this.a5v(), window.requestAnimationFrame(acu), this.eX = performance.now()
	}, this.a5n = function() {
		aD.hI ? (this.a1H = new ace, this.a1H.dh()) : aD.ko ? this.a1H = new acs : (this.a1H = new acX, this.a1H.dh())
	}, this.a5v = function() {
		this.a1H = new acV, this.dp = !0
	}, this.ec = function() {
		this.a1H.acW++
	}, this.kR = function() {
		return this.a1H.acW
	}, this.aUn = function() {
		var eY = performance.now();
		eY < act + 1e3 || (this.eX = eY, this.a1H.ec())
	}
}

function cv() {
	var aHA = 0,
		acv = !0;

	function acw(id) {
		id = [L(530), L(531), L(532), L(533)][id];
		aN.a7l(id)
	}
	this.ec = function() {
		var eY, a8A;
		bh.eX < aHA || (aHA = bh.eX + 3e3, aD.hI) || aD.ko || bC.gV.hL(aD.et) || (eY = new Date, a8A = eY.getUTCSeconds(), acv ? a8A < 43 && (acv = !1) : a8A < 43 || (aHA += 52e3, acv = !0, (a8A = (eY.getUTCMinutes() + 2) % 60) % 10 == 0 ? aD
			.km < 7 && acw(0) : a8A % 10 == 5 ? 7 !== aD.km && 10 !== aD.km || acw(1) : a8A % 10 == 7 ? 8 === aD.km && acw(2) : a8A % 10 == 2 && 9 === aD.km && acw(3)))
	}
}

function cp() {
	var nV, nW, ni, nj, acx = 0,
		acy = 0;

	function ad0() {
		return Math.pow(Math.pow(ni - nV, 2) + Math.pow(nj - nW, 2), .5)
	}

	function acz(e) {
		nV = h.k * e.touches[0].clientX, nW = h.k * e.touches[0].clientY, ni = h.k * e.touches[1].clientX, nj = h.k * e.touches[1].clientY
	}
	this.a2j = function(e) {
		return 1 < e.touches.length ? (acy = bh.eX, acx = 3, acz(e), aL.sG(), !0) : (acx = 0, !1)
	}, this.a2k = function(e) {
		var aNF, iQ, iR;
		return 0 !== aD.a17 && 1 < e.touches.length && (acx = Math.max(acx - 1, 0), aH.nn() && (aNF = ad0(), acz(e), e = ad0(), iQ = Math.floor((nV + ni) / 2), iR = Math.floor((nW + nj) / 2), aS.aAD(iQ, iR, Math.max(.125, e) / Math.max(.125,
			aNF)), bh.dp = !0), !0)
	}, this.a37 = function() {
		var fG, fI;
		return !!(acx && (acx = 0, bh.eX < acy + 500)) && (fG = (nV + ni) / 2, fI = (nW + nj) / 2, aL.a31(fG, fI), aL.click(fG, fI, !0) && (bh.dp = !0), !0)
	}
}

function d6() {
	this.size = 0, this.eG = 0, this.aC = null, this.dh = function(aC) {
		this.eG = 0, this.aC = aC, this.size = aC.length
	}, this.uj = function() {
		this.aC = null
	}, this.q7 = function(size) {
		for (var fb = 0, aC = this.aC, nn = this.eG + size - 1, aB = this.eG; aB <= nn; aB++) fb |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nn - aB;
		return this.eG += size, this.eG > 8 * this.size && console.error("Unwrapper Overflow"), fb
	}, this.aVD = function(size) {
		var fT = size >> 1;
		return (1 << fT) * this.q7(size - fT) + this.q7(fT)
	}, this.aVE = function(ad1) {
		return this.size === bF.aVC(ad1)
	}, this.aWr = function(xx, ad2, ad3) {
		var gc = this.q7(xx);
		if (!gc) return null;
		for (var xx = Math.max(gc, ad3), g = new(ad2 <= 8 ? Uint8Array : ad2 <= 16 ? Uint16Array : Uint32Array)(xx), aB = 0; aB < gc; aB++) g[aB] = this.q7(ad2);
		ad3 = g[gc - 1];
		return ad3 && g.fill(ad3, gc), g
	}, this.aWs = function(xx, ad4, ad3) {
		var gc = this.q7(xx);
		if (!gc) return null;
		for (var xx = Math.max(gc, ad3), g = new Array(xx), aB = 0; aB < gc; aB++) g[aB] = this.aWp(ad4);
		return g.fill(g[gc - 1], gc), g
	}, this.aWp = function(xx) {
		return bI.x4.x8(this.q7(xx))
	}, this.aWq = function() {
		var qg = bH.tM.tN(bH.tM.tO(this.q7(30))),
			qg = bC.ry.a5P(qg, "_", "/");
		qg = bC.ry.a5P(qg, "-", "+");
		for (var ad5 = "";
			(qg.length + ad5.length) % 4;) ad5 += "=";
		qg = "data:image/png;base64," + qg + ad5;
		var aJJ = new Image;
		aJJ.onload = function() {
			bB.aKF.aKG(aJJ), aJJ.onload = null, aJJ = null
		}, aJJ.src = qg
	}
}

function dP() {
	this.aXn = 0, this.aXo = 0, this.aXj = 0, this.aXk = 0, this.aXl = 0, this.aXm = 0, this.aD9 = [0, 0, 0, 0], this.nm = function() {
		this.aXn = aS.zB(), this.aXo = aS.zC(), this.aXj = -this.aXn, this.aXk = -this.aXo, this.aXl = h.i / iK, this.aXm = h.j / iK, this.aD9[0] = Math.floor(this.aXj), this.aD9[1] = Math.floor(this.aXk), this.aD9[2] = Math.floor(this.aD9[0] +
			this.aXl + 1), this.aD9[3] = Math.floor(this.aD9[1] + this.aXm + 1), bd.aD6 = !0
	}
}

function cq() {
	var a8r, nH;
	this.dh = function() {
		a8r = 1, nH = 0
	}, this.ec = function() {
		0 < a8r && (nH = 0 === nH ? bh.eX + 16 : nH, a8r = (a8r -= .001 * (bh.eX - nH)) < 0 ? 0 : a8r, nH = bh.eX, bh.dp = !0)
	}, this.ve = function() {
		0 < a8r && (vf.fillStyle = "rgba(0,0,0," + a8r + ")", vf.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eG = 0, this.aC = null, this.dh = function(aC) {
		this.eG = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(ad1) {
		return this.dh(new Uint8Array(this.aVC(ad1))), this.aC
	}, this.uj = function() {
		this.aC = null
	}, this.a8 = function(size, a8F) {
		for (var aC = this.aC, nn = this.eG + size - 1, aB = this.eG; aB <= nn; aB++) aC[aB >> 3] |= (a8F >> nn - aB & 1) << 7 - (7 & aB);
		this.eG += size, this.eG > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aVB = function(size, a8F) {
		var fT = size >> 1,
			fC = 1 << fT;
		this.a8(size - fT, bN.fa(a8F, fC)), this.a8(fT, a8F % fC)
	}, this.ad8 = function(size) {
		for (var aC = this.aC, nn = this.eG + size, aB = this.eG; aB < nn; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aVC = function(ad1) {
		return ad1 + 7 >> 3
	}, this.ad9 = function(g, jk, nn, adA) {
		for (var aB = jk; aB < nn; aB++) this.a8(adA, g[aB])
	}
}

function d5() {
	this.dh = function() {
		this.g = [], this.eG = 0
	}, this.aVa = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(adB, value) {
		for (var g = this.g, nn = this.eG + adB - 1, adC = 1 + (nn >> 3); g.length < adC;) g.push(0);
		for (var aB = this.eG; aB <= nn; aB++) g[aB >> 3] |= (value >> nn - aB & 1) << 7 - (7 & aB);
		this.eG += adB
	}, this.dn = function(g, xx, ad2) {
		var adD = bC.r7.a3t(g);
		this.a8(xx, adD);
		for (var aB = 0; aB < adD; aB++) this.a8(ad2, g[aB])
	}, this.aX9 = function(g, xx, ad4) {
		var adD = bC.r7.a3t(g);
		this.a8(xx, adD);
		for (var aB = 0; aB < adD; aB++) this.aX7(g[aB], ad4)
	}, this.aX7 = function(qg, xx) {
		var f9 = qg.length;
		this.a8(xx, f9);
		for (var aB = 0; aB < f9; aB++) this.a8(16, qg.charCodeAt(aB))
	}, this.aX8 = function(a3z) {
		var adE = (a3z = a3z.toDataURL()).split(",");
		if (adE.length < 2) console.log("error 266");
		else {
			a3z = bC.ry.a5P(a3z = adE[adE.length - 1], "/", "_"), a3z = bC.ry.a5P(a3z, "\\+", "-");
			var a3z = bC.ry.a5P(a3z, "=", ""),
				xH = bI.tM.xE(a3z),
				f9 = xH.length;
			this.a8(30, f9);
			for (var aB = 0; aB < f9; aB++) this.a8(6, xH[aB])
		}
	}
}
a(), self.aiCommand746 = function(fb) {
	0 === fb ? bv() : 1 !== fb || !a0 || 1 !== a0.id || a0.e0 < 14 || bL.fc()
}, setTimeout(bv, 1e4), window.onload = function() {
	bv()
};