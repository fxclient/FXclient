var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, t, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, a0, bk, bl, bm, o, bn, bo, bp, bq, br, bs, bt, bu, fz, g0, g1, g2, g3, g4, g5, g6, g7, g8, g9, gA, gB, iK,
	im, io, a96, m5, kF, a2f, vg, zF, aDB, a5q, a5r, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "   ", "flex", "hidden", "1em", "span", "Data", "territorial.io",
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
	this.dt = 1122;
	this.rVersion = 21, this.dx = 0, this.dh = function() {
		this.dy = 2;
		this.n = "2.15.25", this.e0 = "15 May 2026 [" + this.n + "]";
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

	function mx(mz) {
		for (var aB = mt - 1; 0 <= aB; aB--) 0 === mv[mu[aB]] && ag.gx[mu[aB]] >= mz && gD(mu[aB])
	}

	function mw(player) {
		var eY;
		64 === mv[player] ? mv[player] = 6 : (eY = ag.gx[player], mv[player] = eY < 1e3 ? 3 : eY < 1e4 ? 2 : eY < 6e4 ? 1 : 0)
	}
	this.dh = function() {
		mt = 0, mu = new Uint16Array(aD.f6), mv = new Uint8Array(aD.f6)
	}, this.ec = function() {
		for (var aB = mt - 1; 0 <= aB; aB--) 64 === mv[mu[aB]] ? mw(mu[aB]) : 0 == mv[mu[aB]]-- && (mw(mu[aB]), gD(mu[aB]));
		16e4 <= ag.gx[m5[0]] && (mx(16e4), 3e5 <= ag.gx[m5[0]]) && mx(3e5), bC.gV.lS(aD.et) && (bf.n0[7] = Math.max(ag.gx[aD.et], bf.n0[7]))
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
	this.pT = 1, this.ha = function(ev) {
		aD.ko ? bA.pO.ha(aD.et, ev) : b0.pU.pV(ev)
	}, this.hg = function(il, jd) {
		this.pT && (this.pT = 0, bl.pW.pX(182, il)), aD.ko ? bA.pO.hg(aD.et, il, jd) : b0.pU.pY(il, jd)
	}, this.pZ = function(il, pa) {
		aD.ko ? bA.pO.pb(aD.et, il, pa) : b0.pU.pc(il, pa)
	}, this.hl = function(il, ev) {
		ev = (ev << 3) + bQ.fl[6];
		aD.ko ? bA.pO.hl(aD.et, il, ev) : bP.ma.mb(aD.et) && b0.pU.pe(il, ev)
	}, this.ho = function(il) {
		849 === il && (il = 850);
		var nS = bQ.fl[3];
		aD.ko ? bA.pO.ho(aD.et, il, nS) : bP.hm.pf(aD.et, nS) && b0.pU.pg(il, nS)
	}, this.ph = function(nS) {
		aD.ko ? bA.pO.ph(aD.et, nS) : b0.pU.pg(849, nS)
	}, this.pi = function(jd) {
		aD.ko ? bA.pO.pi(aD.et, jd) : b0.pU.pj(jd)
	}, this.pk = function(pl) {
		aD.ko ? bA.pO.pm(aD.et, pl) : b0.pU.pn(pl)
	}, this.hx = function(po) {
		aD.ko ? bA.pO.hx(aD.et, po) : b0.pU.pp(po)
	}, this.pq = function() {
		aD.ko ? bA.pO.pq(aD.et) : b0.pU.pr()
	}, this.hu = function() {
		aD.ko ? bA.pO.hu(aD.et) : b0.pU.pj(513)
	}, this.hc = function(il, ev, jd) {
		aD.ko ? bA.pO.hc(aD.et, il, ev, jd) : b0.pU.ps(il, ev, jd)
	}
}

function pS() {
	this.kX = function(player, pa, hs) {
		bC.gV.pt(player, hs, pa) && (ae.pZ(player, pa), !bC.gV.jr(pa)) && ao.jH.k6[pa] && ao.jH.k6[pa]--
	}, this.pu = function(player, pa, hs) {
		bC.gV.pv(hs, pa) ? an.eg(pa, bQ.fg[0]) && (bs.pw(player, pa, bQ.fg[0], 1), bC.gV.gY(pa, bQ.fg[0]), bf.px(player, pa), af.py(pa, bQ.fg[0])) : bf.gZ(player, hs, 12)
	}
}

function pN() {
	this.pz = function(pl, player) {
		aN.pk(aD.et, player, pl), b0.pU.q0(pl, player)
	}, this.q1 = function(player) {
		aN.q2(player, 0), b0.pU.q3(player)
	}, this.q4 = function(q5, player) {
		aN.q6(q5, player), b0.pU.q7(q5, player)
	}, this.q8 = function() {
		aD.ko || aD.hI || b0.q9.q8()
	}
}

function pR() {
	this.ec = function(aC) {
		var id, fs, nn;
		for (bJ.dh(aC), bJ.eG += 2, nn = 8 * bJ.size; bJ.eG + 8 <= nn;) id = bJ.qA(4), fs = bJ.qA(9), 0 === id ? this.qB(id, fs, bJ.qA(22)) : 1 === id ? this.qB(id, fs, bJ.qA(10), bJ.qA(10)) : 2 === id ? this.qB(id, fs, bJ.qA(10), bJ.qA(9)) :
			3 === id ? this.qB(id, fs, bJ.qA(10), bJ.qA(27)) : 4 === id ? this.qB(id, fs, bJ.qA(10), bJ.qA(16)) : 5 === id || 6 === id ? this.qB(id, fs, bJ.qA(10)) : 7 === id ? this.qB(id, fs, bJ.qA(1)) : 10 === id ? this.qB(id, fs, bJ.qA(20), bJ
				.qA(22)) : this.qB(id, fs)
	}, this.qC = [], this.qD = function() {
		for (var qF = 0, qG = 0, qH = 0, qI = 0, qJ = 0, qK = 0, aB = 0; aB < 512; aB++) qF += ag.n4[aB], qG += ag.gx[aB], qH += ag.hB[aB], qI += bP.y.kY[aB];
		qJ += bP.y.mK, qK += al.l0, this.qC.push(qH % 1073741824 * 4 + (qF + qG + qI + qJ + qK) % 4)
	}, this.qB = function(id, fs, fu, fw) {
		0 === id ? bA.pO.ha(fs, fu) : 1 === id ? bA.pO.hg(fs, fu, fw) : 2 === id ? bA.pO.pb(fs, fu, fw) : 3 === id ? bA.pO.hl(fs, fu, fw) : 4 === id ? bA.pO.ho(fs, fu, fw) : 5 === id ? bA.pO.pi(fs, fu) : 6 === id ? bA.pO.pm(fs, fu) : 7 === id ?
			bA.pO.hx(fs, fu) : 8 === id ? bA.pO.pq(fs) : 9 === id ? bA.pO.qL(fs) : 10 === id && bA.pO.hc(fs, fu >> 10, fw, fu % 1024)
	}
}

function pP() {
	this.ha = function(player, ev) {
		bC.gV.hK(0) && bC.gV.hL(player) && bO.ir(ev) && (bB.qM.qN(0, player, ev), aD.qO.eg(player, ev))
	}, this.hg = function(player, il, jd) {
		bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.qP(player, jd) && bC.gV.mc(player, il, 12, 0) && bC.gV.qQ(player, jd) && ((jd = ad.jp(player, bQ.f5[0])) || ad.k8(player)) && (ag.qR[player]++, bB.qM.qN(1, player, il, bQ.f5[0]), ao.jF.jT(player,
			jd)) && (bC.gV.me(player), bf.qS(player, il), ao.jF.jZ(player))
	}, this.pb = function(player, il, pa) {
		bC.gV.hK(1) && bC.gV.hL(player) && aD.i3 && bC.gV.qP(player, pa) && bC.gV.qT(player, pa) && bC.gV.pt(player, bC.gV.ik(player, il), pa) && an.eg(pa, bQ.fg[0]) && (bB.qM.qN(2, player, il, pa), ae.pZ(player, pa))
	}, this.hl = function(player, il, pd) {
		bQ.fl[1] = 7 & pd;
		var ev = pd >> 3;
		bC.gV.hK(1) && bC.gV.hL(player) && bO.ir(ev) && bP.ma.mb(player) && bP.ma.qU(ev) && bC.gV.mc(player, il, 32, 0) && bP.lH.qV(player, ev, 1) && (bf.qW(player), bB.qM.qN(3, player, il, pd), bC.gV.me(player), bn.qX.hl(player), bP.y.mf(
			player))
	}, this.ho = function(player, il, nS) {
		849 === il ? this.ph(player, nS) : bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.mc(player, il, 32, 0) && bP.hm.qY(player, nS) && (bf.qW(player), bB.qM.qN(4, player, il, nS), bC.gV.me(player), bn.qX.ho(player), bP.y.mf(player))
	}, this.ph = function(player, nS) {
		bC.gV.hK(1) && bC.gV.hL(player) && bP.qZ.ec(player, nS) && bB.qM.qN(4, player, 849, nS)
	}, this.pi = function(player, jd) {
		513 === jd ? this.hu(player) : bC.gV.hK(1) && bC.gV.hL(player) && (jd = Math.min(jd, aD.f6), ad.jp(player, jd)) && (bB.qM.qN(5, player, jd), ad.qa(player, jd))
	}, this.pm = function(player, pl) {
		(bC.gV.hK(1) || bC.gV.hK(2)) && bC.gV.hL(player) && (pl = bN.iH(pl, 0, 1023), bB.qM.qN(6, player, pl), af.qb(player, 0, pl))
	}, this.hx = function(player, po) {
		aw.hw(player) && (bB.qM.qN(7, player, po), aw.qc(player, po))
	}, this.pq = function(player) {
		(bC.gV.hK(0) || bC.gV.hK(1)) && bC.gV.hL(player) && aM.qd(player) && (bB.qM.qN(8, player), bS.pq(player))
	}, this.qL = function(player) {
		bB.qM.qN(9, player), bS.qL(player)
	}, this.hu = function(player) {
		aw.hy(player) && (bB.qM.qN(5, player, 513), aw.hu(player))
	}, this.hc = function(player, il, ev, jd) {
		bC.gV.hK(1) && bC.gV.hL(player) && bC.gV.qP(player, jd) && bC.gV.qQ(player, jd) && bO.ir(ev) && am.ek.f3(player, ev) && (ad.jp(player, bQ.f5[0]) || ad.k8(player)) && (bB.qM.qN(10, player, (il << 10) + bQ.f5[0], ev), jd = bC.gV.lg(player,
			il), ag.gb[player].push(bQ.fA[0]), ad.eg(player, jd, bQ.f5[0]), aF.jb(player, !0), bf.qe(player))
	}
}

function qf() {
	var qh;
	this.qg = [], this.qh = document.createElement("div"), this.qi = function(qj, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qj, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qh.appendChild(
			title), title
	}, this.qk = function(qj, marginBottom) {
		var ql = document.createElement("p");
		return ql.textContent = qj, ql.style.fontSize = "0.75em", ql.style.lineHeight = "1.2em", ql.style.marginBottom = marginBottom || "0", this.qh.appendChild(ql), ql
	}, this.qm = function(qj) {
		var qn = document.createElement("p");
		return qn.textContent = qj, qn.style.fontSize = "1em", qn.style.marginBottom = "0", qn.style.whiteSpace = "pre-wrap", qn.style.overflowWrap = "break-word", this.qh.appendChild(qn), qn
	}, this.qo = function(qp, fontSize) {
		var qh = document.createElement("div");
		return qh.innerHTML = qp, qh.style.fontSize = fontSize || "1em", qh.style.lineHeight = "1.2em", this.qh.appendChild(qh), qh
	}, this.qq = function(qr) {
		for (var qs = qr.qs, f9 = qs.length, aB = 0; aB < f9; aB++) this.qh.appendChild(qs[aB])
	}, this.qt = function(qu) {
		return this.qg.push(qu), this.qh.appendChild(qu.e), qu
	}, this.resize = function() {
		for (var f9 = this.qg.length, aB = 0; aB < f9; aB++) this.qg[aB].resize && this.qg[aB].resize()
	}, (qh = this.qh).style.position = "absolute", qh.style.height = "auto", qh.style.padding = "0.5em"
}

function qv(qw, qx) {
	var qh = document.createElement("div");

	function r5() {
		var aB, r6, j, gi, fC, r1 = h.k * qh.offsetWidth,
			r7 = new Float64Array(function(r1) {
				var i = .25 * bC.r2.r3(.6) * h.iJ;
				return Math.max(Math.floor(r1 / i), 1)
			}(r1)),
			r8 = be.r8,
			r9 = (r1 - (r7.length + 1) * be.gap) / (r7.length * h.k);
		for (r7.fill(r8), aB = 0; aB < qx.length; aB++) r6 = (fC = qx[aB].qh).style, j = bC.rA.min(r7), gi = r7.indexOf(j), r6.top = bC.r2.rB(j), r6.left = bC.r2.rB(r8 + gi * (r9 + r8)), r6.width = bC.r2.rB(r9), bC.r2.rC(fC, 5), r7[gi] += fC
			.offsetHeight + 3 * r8;
		qh.style.height = bC.r2.rB(bC.rA.max(r7) - 2 * r8)
	}
	this.qy = qh, this.qz = qx, this.resize = function() {
		var aB;
		for (aB = 0; aB < qx.length; aB++) qx[aB].resize();
		r5(), r5()
	}, qh.style.width = "100%", qh.style.maxWidth = "100%", qw.style.lineHeight = "1.5em", qw.style.overflowX = "hidden", qw.style.overflowY = "auto";
	for (var aB = 0; aB < qx.length; aB++) qh.appendChild(qx[aB].qh);
	qw.appendChild(qh)
}

function w(rD, rE, rF, rG, rH) {
	var self, rI = document.createElement("button");

	function rP() {
		var rV;
		bL.rU() || (rV = bC.color.rW(rF), !1 !== rG && 0 < rV[0] && rV[0] < 255 && rV[0] === rV[1] && rV[0] === rV[2]) || (128 < rV[0] && 128 < rV[1] && 128 < rV[2] ? rI.style.backgroundColor = bC.color.rX(rF, -50) : rI.style.backgroundColor = bC
			.color.rX(rF, rV[3] && rV[3] < 120 ? 150 : 50))
	}

	function rO() {
		if (rG) {
			var rV = bC.color.rW(rF);
			if (rV[0] === rV[1] && rV[0] === rV[2]) return
		}
		rE && ((rV = rE(this)) ? 2 === rV && rP() : rZ(this))
	}

	function rR() {
		this.style.backgroundColor = rF
	}

	function rQ() {
		rZ(this)
	}

	function rZ(fC) {
		fC.style.backgroundColor = rF, fC.blur()
	}
	this.button = rI, this.rJ = rE, this.rK = rF, this.rN = function(rS) {
		rS = 1.1 - Math.min(.01 * rD.length, .6) + .2 * rS;
		rI.style.fontSize = rS.toFixed(1) + "em"
	}, this.rM = function(eh) {
		eh ? 1 === eh ? eh = bD.oH : 2 === eh && (rG = 1, eh = bD.oH) : (rG = 0, eh = bD.o1), this.rK = rF = eh, rI.style.backgroundColor = eh
	}, self = this, rI.innerHTML = rD, rI.style.color = rH ? bD.p5 : bD.o5, rI.style.userSelect = "none", rI.style.outline = "none", rI.style.overflowWrap = "break-word", self.rM(rF), rI.style.border = "none", rI.style.font = "inherit", self.rN(
		0), rI.style.padding = "0em 0.3em", rI.onclick = rO, rI.addEventListener("mouseover", rP), rI.addEventListener("mouseout", rQ), rI.addEventListener("focus", rP), rI.addEventListener("blur", rR)
}

function ra(rb, qw) {
	var qh;
	this.resize = function() {
		for (var aB = 0; aB < rb.length; aB++) bC.r2.rC(rb[aB].button);
		qh.style.gap = qh.style.padding = bC.r2.rB(be.r8)
	}, (qh = document.createElement("div")).style.display = "grid", qh.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qh.style.overflowY = "auto", qh.style.gridAutoRows = "5.3em", qh.style.maxHeight = "100%";
	for (var aB = 0; aB < rb.length; aB++) rb[aB].rN(1), qh.appendChild(rb[aB].button);
	qw.appendChild(qh)
}

function rd(re, rf, rg) {
	this.fG = 0, this.fI = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bC.r2.r3(rg || .5) * re[1] * h.iJ, h.j - 2 * be.gap), this.i = Math.min(this.j * (re[0] / re[1]), h.i - 2 * be.gap), this.j = re[1] * this.i / re[0], this.fG = be.gap + rf[0] * (h.i - this.i - 2 * be.gap), this.fI = be
			.gap + rf[1] * (h.j - this.j - 2 * be.gap)
	}, this.rh = function() {
		return this.fG + .5 * this.i
	}
}

function ri(rj, rk) {
	var rt, self, rl = document.createElement("div"),
		rm = document.createElement("div"),
		rn = document.createElement("div"),
		ro = null,
		ru = (this.rp = new rq({
			value: "",
			eG: -1
		}, 0, rr, function(e) {
			e.target.value = bC.s1.s2(e.target.value), ro.s0.textContent = 127 - e.target.value.length
		}), 0),
		rv = 1,
		rw = 0,
		rx = 1048575;

	function rr() {
		rj(), ro.s0.textContent = 127
	}

	function sC(sB, qu) {
		qu && (qu.sH = 1, sB.appendChild(bp.sI.transform(qu)))
	}

	function sF(bw) {
		rv ? rl.scrollTop = rl.scrollHeight : bw && (rl.scrollTop = rw)
	}
	this.s3 = function(s4) {
			rx = 1048575, rm.textContent = "", s4 || this.mr()
		}, this.mr = function() {
			var s5 = bp.y.s6[0],
				s5 = bp.y.s8[s5],
				s9 = s5.s9,
				f9 = s9.length,
				jk = 1048575 === rx ? 0 : f9 - (s5.sA - rx + 1048575) % 1048575;
			if (rx = s5.sA, !(f9 <= (jk = Math.max(jk, 0)))) {
				for (var sB = document.createDocumentFragment(), aB = jk; aB < f9; aB++) sC(sB, bp.lJ.sD(s9[aB], bp.lJ.sE(s9[aB])));
				rm.appendChild(sB), sF()
			}
		}, this.sG = function(r) {
			var sB = document.createDocumentFragment();
			sC(sB, r), rm.appendChild(sB), sF()
		}, this.show = function(qw) {
			qw.appendChild(rl), qw.appendChild(rn), this.resize(qw)
		}, this.sJ = function(qw) {
			t.removeChild(qw, rl), t.removeChild(qw, rn)
		}, this.resize = function(qw) {
			ru = qw ? qw.offsetHeight : ru;
			var qw = bC.r2.sL(.04, .75),
				sM = Math.max(qw, ru - qw),
				sN = h.i / h.k,
				sO = .7 * sN,
				sP = bC.r2.rB(ru - qw - sM),
				sM = (rn.style.height = bC.r2.rB(qw), rl.style.height = bC.r2.rB(sM), h.j > h.i || a0.a1.iI() ? (rn.style.top = sP, rl.style.top = bC.r2.rB(ru - sM), bC.r2.rC(rl, 8)) : (rl.style.top = sP, rn.style.top = bC.r2.rB(ru - qw), bC.r2.rC(
						rl, 2)), this.rp.e.style.width = bC.r2.rB(sO), this.rp.e.style.fontSize = rt.button.style.fontSize = bC.r2.rB(.5 * qw), bC.r2.rC(this.rp.e, 6), rt.button.style.left = bC.r2.rB(sO), rt.button.style.width = bC.r2.rB(sN - sO),
					.385 * qw);
			a0.a1.iI() && (sM *= .8 - .12 * (h.i > h.j)), rm.style.marginLeft = rm.style.marginRight = bC.r2.rB(.5 * sM), rm.style.fontSize = bC.r2.rB(sM), sF(1)
		}, (self = this).rp.e.ry = 127, rl.style.position = "absolute", rl.style.left = "0", rl.style.width = "100%", rl.style.overflowX = "hidden", rl.style.overflowY = "auto", rl.style.font = "inherit", rl.style.backgroundColor = bD.o3, rl
		.addEventListener("scroll", function() {
			rw = rl.scrollTop, rv = rw < rl.scrollHeight - rl.clientHeight - 2 ? 0 : 1
		}), rm.style.font = "inherit", rn.style.position = "absolute", rn.style.left = "0", rn.style.width = "100%", self.rp.e.setAttribute("placeholder", L(13)), self.rp.e.style.position = "absolute", self.rp.e.style.top = "0", self.rp.e.style
		.left = "0", self.rp.e.style.height = "100%", self.rp.e.style.backgroundColor = bD.o0, self.rp.e.style.textAlign = "center", (rt = new w(L(14), rr)).button.top = "0", rt.button.style.position = "absolute", rt.button.style.height = "100%", rt
		.rM(bD.pK), ro = new rz("127", rt.button, 1, 1), rl.appendChild(rm), rn.appendChild(self.rp.e), rn.appendChild(rt.button)
}

function sR(sS, rD, sT) {
	function click() {
		var value = 1 - sS.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + rD, void 0 !== sS.eG ? bl.pW.pX(sS.eG, value) : sS.value = value, sT && sT(value)
	}
	var e;
	rD = rD || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sS.value ? "🟩 " : "⬜ ") + rD, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sU(qw, qp) {
	var qh = document.createElement("div");
	this.qy = qh, this.resize = function() {
		qh.style.padding = bC.r2.rB(be.r8), qh.style.lineHeight = bC.r2.rB(bC.r2.sL(.035))
	}, qw.style.overflowX = "hidden", qw.style.overflowY = "auto", qh.innerHTML = qp, qw.appendChild(qh)
}

function sV(sW) {
	var qh = document.createElement("div");
	this.e = qh, this.sX = sW, this.resize = function() {
		for (var f9 = sW.length, aB = 1; aB < f9; aB++) bC.r2.rC(sW[aB], 4)
	};
	var aB, f9 = sW.length;
	for (qh.style.width = "100%", qh.style.height = "2.7em", qh.style.marginTop = "0.6em", qh.style.border = "inherit", aB = 0; aB < f9; aB++) sW[aB].style.verticalAlign = "top", sW[aB].style.width = (100 / f9).toFixed(2) + "%", sW[aB].style.height =
		"100%", sW[aB].style.fontSize = "0.75em", qh.appendChild(sW[aB])
}

function sY(sZ, rF, sa) {
	this.qh = document.createElement("div"), this.rb = sZ;
	var sb = 0;
	this.resize = function(qw, sd) {
		var f9 = sZ.length;
		if (!sa)
			for (var aB = 1; aB < f9; aB++) bC.r2.rC(sZ[aB].button, 4);
		for (var se = 0, aB = 0; aB < f9; aB++) se += sZ[aB].button.offsetWidth;
		if (qw && (sb = qw.offsetWidth), sd && se < sb)
			for (aB = 0; aB < f9; aB++) sZ[aB].button.style.width = (100 * sZ[aB].button.offsetWidth / se).toFixed(2) + "%";
		else
			for (aB = 0; aB < f9; aB++) sZ[aB].button.style.width = "auto";
		sd || this.resize(qw, 1)
	};
	var sc = this;
	sc.qh.style.height = sc.qh.style.maxHeight = "100%";
	for (var aB = 0; aB < sZ.length; aB++) sZ[aB].rM(rF), sZ[aB].button.style.height = "100%", sZ[aB].button.style.padding = "0.0em 0.9em", sZ[aB].button.style.whiteSpace = "pre", sc.qh.appendChild(sZ[aB].button)
}

function sf() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bC.r2.rC(this.e, 8, bD.oE)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sg() {
	var sl, sm, sh = document.createElement("div"),
		si = document.createElement("div"),
		sj = 0,
		sk = 0;
	this.show = function(fG, fI, qj, sn, so, eh) {
			if (sj) {
				if (!sn) return;
				this.sJ()
			}
			fG === fI && -1 === fG ? (fG = sl, fI = sm) : (sl = fG, sm = fI);
			var sp = Math.floor(bC.r2.sL(.018)),
				so = (fG = Math.max(sp + 2, fG), so || (sk = sn), sj = 1, h.i / h.k),
				sn = (sh.style.whiteSpace = "pre", sh.textContent = qj, bC.r2.rC(sh, 5), sh.style.font = bC.r2.sr(0, bC.r2.sL(.015)), sh.style.padding = "0.3em 0.6em", sh.style.left = fG + "px", sh.style.top = "0px", document.body.appendChild(sh),
					fG + sh.offsetWidth - so),
				qj = (0 < sn && (fG -= sn, fG = Math.max(sp + 1, fG), sh.style.left = fG + "px", fG < sp + 2) && (sh.style.whiteSpace = "pre-wrap"), sh.offsetHeight);
			sh.style.top = fI - qj + sk * be.st + "px", fG -= sp, si.style.backgroundColor = bC.color.nx(eh >> 12 << 2, (eh >> 6 & 63) << 2, (63 & eh) << 2), si.style.left = fG + "px", si.style.top = sh.style.top, si.style.width = sp + "px", si.style
				.height = qj + "px", bC.r2.rC(si, 4), bC.r2.rC(si, 8), bC.r2.rC(si, 2), document.body.appendChild(si)
		}, this.sJ = function(su) {
			if (sj) {
				if (su && sk) return 0;
				sj = 0, t.removeChild(document.body, sh), t.removeChild(document.body, si)
			}
			return 1
		}, sh.style.position = "absolute", sh.style.backgroundColor = bD.o1, sh.style.color = bD.o5, sh.style.pointerEvents = "none", sh.style.zIndex = "5", sh.style.maxWidth = "100%", si.style.position = "absolute", si.style.color = bD.o5, si.style
		.pointerEvents = "none", si.style.zIndex = "5"
}

function rq(sv, type, sw, sx) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sy++, e.value = sv.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bD.o5, e.style.backgroundColor = bD.ny, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sz++
		}), e.addEventListener("blur", function() {
			h.sz--, -1 !== sv.eG && bl.pW.pX(sv.eG, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sv.eG && bl.pW.pX(sv.eG, e.value), sw ? sw() : e.blur())
		}), sx && e.addEventListener("input", function(qu) {
			sx(qu)
		})
}

function t0(qw, data, t1) {
	var f9 = data.t2.length,
		t3 = document.createElement("div"),
		t4 = document.createElement("div"),
		t5 = document.createElement("div"),
		t6 = new Array(f9),
		qx = new Array(f9),
		t7 = new Array(data.t8.length),
		t9 = bC.color.nz(70, 70, 0, .35);

	function rX() {
		this.style.backgroundColor = bC.color.rX(t9, 160)
	}

	function tG() {
		this.style.backgroundColor = t9
	}

	function r5() {
		var fS;
		for (qw.style.font = bC.r2.sr(0, bC.r2.tQ(.026, .5, .03)), aB = 1; aB < t7.length; aB++) bC.r2.rC(t7[aB], 4);
		if (bC.r2.rC(t3, 2), f9) {
			for (var hb, tR = t3.offsetWidth, tS = t5.offsetWidth, aB = 0; aB < t7.length; aB++) hb = .01 * data.tF[aB] * tS, t7[aB].style.width = (100 * hb / tR).toFixed(2) + "%";
			var lP = data.t2[0].length;
			for (aB = 0; aB < f9; aB++)
				for (bC.r2.rC(t6[aB], 2), fS = 1; fS < lP; fS++) bC.r2.rC(qx[aB][fS], 4);
			t4.tA && (t4.scrollTop = t4.tA)
		}
	}
	this.resize = function() {
			r5(), r5()
		}, qw.style.display = "flex", qw.style.flexDirection = "column", t4.style.overflowX = "hidden", t4.style.overflowY = "auto", t4.addEventListener("scroll", function() {
			this.tA = this.scrollTop, t1 && t1.tB && (t.y.tC[t1.tB] = this.scrollTop)
		}),
		function() {
			var fC, aB, t2 = data.t2,
				lP = f9 ? t2[0].length : 0;
			for (aB = 0; aB < f9; aB++) {
				t6[aB] = document.createElement("div"), t6[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bC.color.nz(130, 130, 130, .35) : bD.o4
				}(aB), t6[aB].style.width = "100%", t6[aB].style.display = "flex", qx[aB] = new Array(lP);
				for (var fS = 0; fS < lP; fS++) qx[aB][fS] = fC = document.createElement("div"), fC.style.display = "flex", fC.style.justifyContent = "center", fC.style.wordBreak = "break-all", fC.style.padding = "0.4em 0em", fC.style.width = data
					.tF[fS] + "%", fC.innerHTML = t2[aB][fS].fb, 1 === t2[aB][fS].eY && (fC.name = "" + aB, fC.style.color = bD.p5, fC.style.backgroundColor = t9, fC.addEventListener("mouseover", rX), fC.addEventListener("mouseout", tG), function(fC,
						tI, tJ) {
						2147483647 !== tJ && fC.addEventListener("click", function() {
							bF.a7(30), bF.a8(30, tI), bJ.dh(bF.aC), this.style.backgroundColor = t9, t.u(8, t.tK, new tL(25, {
								tM: 0,
								tI: bH.tN.tO(bH.tN.tP(5)),
								tJ: tJ
							}))
						})
					}(fC, t2[aB][fS].tI, t2[aB][fS].tJ)), t6[aB].appendChild(fC)
			}
			for (t3.style.display = "flex", t3.style.backgroundColor = bC.color.nz(0, 120, 0, .35), aB = 0; aB < t7.length; aB++) t7[aB] = fC = document.createElement("div"), fC.style.display = "flex", fC.style.justifyContent = "center", fC.style
				.wordBreak = "break-all", fC.style.padding = "0.4em 0em", fC.style.width = data.tF[aB] + "%", fC.innerHTML = data.t8[aB], t3.appendChild(fC)
		}();
	for (var aB = 0; aB < f9; aB++) t5.appendChild(t6[aB]);
	t4.appendChild(t5), qw.appendChild(t3), qw.appendChild(t4), t1 && t1.tB && (t4.tA = t.y.tC[t1.tB])
}

function tT() {
	var tX, tY, tU = document.createElement("div"),
		tV = document.createElement("div"),
		tW = document.createElement("div"),
		t5 = document.createElement("div"),
		rb = [],
		eA = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tZ = [1, 2, 3, 0, 9, 10, 11];

	function tb(aB) {
		t.u(8, 0, new tL(21, {
			td: tZ[aB],
			te: 0,
			tf: 10
		}))
	}
	this.show = function() {
			this.pX(t.y.tg), document.body.appendChild(tU)
		}, this.sJ = function() {
			t.removeChild(document.body, tU)
		}, this.pX = function(tg) {
			for (var th = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rb.length; aB++) {
				var i = tg[aB];
				tX[th[aB]][1].s0.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, ti = be.gap,
				j = bC.r2.tj(.085),
				i = Math.min(4 * j, h.i - 2 * ti),
				f9 = rb.length;
			for (bC.r2.tk(tU, ti, h.j - ti - j, i, j), bC.r2.rC(tU), bC.r2.rC(tV, 6), aB = 0; aB < f9 - 1; aB++) bC.r2.rC(rb[aB].button, 6);
			for (aB = 0; aB < f9; aB++) tX[aB][0].resize(), tX[aB][1].resize();
			for (rb[0].fG = 0, rb[0].button.style.left = bC.r2.rB(rb[0].fG), rb[0].button.style.width = bC.r2.tl(1.7 * j), aB = 1; aB < f9; aB++) rb[aB].fG = rb[aB - 1].fG + rb[aB - 1].button.offsetWidth, rb[aB].button.style.left = bC.r2.rB(rb[aB]
				.fG);
			if (!tY) {
				if (!ab.tm()) return;
				(tY = ab.get(14)).style.width = "24%", tY.style.position = "absolute", tV.appendChild(tY)
			}
			tY.style.left = bC.r2.rB(0), tY.style.top = "7%", tW.tn && (tW.scrollLeft = tW.tn)
		}, tU.style.position = "absolute", tV.style.width = "25%", tV.style.height = "100%", tV.style.backgroundColor = bD.o1, tW.style.position = "absolute", tW.style.width = "75%", tW.style.height = "100%", tW.style.backgroundColor = bD.o1, tW
		.style.top = tW.style.right = bC.r2.rB(0), bC.r2.ta(tW), t5.style.height = t5.style.maxHeight = "100%", rb.push(new w("", function() {
			tb(0)
		}, bD.oq)), rb.push(new w("", function() {
			tb(1)
		}, bD.or)), rb.push(new w("", function() {
			tb(2)
		}, bD.oj)), rb.push(new w("", function() {
			tb(3)
		}, bD.oT)), rb.push(new w("", function() {
			tb(4)
		}, bD.pG)), rb.push(new w("", function() {
			tb(5)
		}, bD.pC)), rb.push(new w("", function() {
			tb(6)
		}, bD.pG)), tX = new Array(rb.length);
	for (var aB = 0; aB < rb.length; aB++) rb[aB].button.style.position = "absolute", tX[aB] = [new tc(eA[aB], rb[aB].button, .25, .45), new tc("", rb[aB].button, .53, .84, 1)], rb[aB].button.style.height = rb[aB].button.style.maxHeight = "100%", rb[
		aB].button.top = bC.r2.rB(0), t5.appendChild(rb[aB].button);
	tW.appendChild(t5), tU.appendChild(tV), tU.appendChild(tW)
}

function tp(tq, tr, ts, tt, rj, rk) {
	var tu = document.createElement("div"),
		tv = document.createElement("div"),
		tw = document.createElement("div"),
		tx = document.createElement("div"),
		ty = document.createElement("div"),
		tz = document.createElement("div"),
		u0 = document.createElement("div"),
		u1 = document.createElement("div"),
		u2 = document.createElement("span"),
		u3 = document.createElement("div");
	this.u4 = new ri(rj, rk), this.u5 = new u6(rk), this.u7 = [tq, tr, ts, tt], this.uB = function(uC) {
		uC = (uC / 10).toFixed(1) + "%";
		u1.style.width = uC, u2.innerHTML = uC
	}, this.uD = function() {
		this.u5.sJ(tz), this.u4.show(tz)
	}, this.uE = function() {
		this.u4.sJ(tz), this.u5.show(tz)
	}, this.uF = function() {
		return tv
	}, this.show = function() {
		document.body.appendChild(tu)
	}, this.sJ = function() {
		t.removeChild(document.body, tu)
	}, this.resize = function(uG) {
		var uH = 1 - .4 * a0.a1.iI() * (h.i > 1.6 * h.j),
			uI = bC.r2.sL(.05 * uH),
			uJ = h.j > h.i,
			uK = bC.r2.sL(.06 * uH + .03 * uJ),
			uL = bC.r2.sL(.08 * uH + .03 * uJ),
			uM = bC.r2.sL(.04 + .02 * uJ),
			uJ = bC.r2.sL(.02 * uH + .01 * uJ),
			uO = bC.r2.sL(.025);
		tu.style.font = bC.r2.sr(0, uO), ty.style.font = bC.r2.sr(0, .9 * uO), u3.style.font = bC.r2.sr(0, .9 * uO), uH < 1 && (uO = bC.r2.sr(0, uH * uO), tw.style.font = uO, ty.style.font = uO, u3.style.font = uO, u0.style.font = uO, tx.style
				.font = uO), tv.style.height = bC.r2.rB(uI), tv.style.font = bC.r2.sr(0, .72 * uI), bC.r2.rC(tv, 2), tw.style.top = bC.r2.rB(uI), tw.style.height = bC.r2.rB(uL), bC.r2.rC(tw, 2), tx.style.font = bC.r2.sr(0, uH * bC.r2.sL(.02)), tx
			.style.top = bC.r2.rB(uI + uL), tx.style.height = bC.r2.rB(uM), bC.r2.rC(tx, 2), ty.style.top = bC.r2.rB(uI + uL + uM), ty.style.height = bC.r2.rB(uK), bC.r2.rC(ty, 2), tz.style.top = bC.r2.rB(uI + uL + uM + uK), tz.style.height = bC
			.r2.rB(h.j / h.k - uI - uL - 2 * uK - uM - uJ), u0.style.top = bC.r2.rB(h.j / h.k - uK - uJ), u0.style.height = bC.r2.rB(uJ), bC.r2.rC(u0, 8), u2.style.font = bC.r2.sr(0, .8 * uJ), u3.style.top = bC.r2.rB(h.j / h.k - uK), u3.style
			.height = bC.r2.rB(uK), bC.r2.rC(u3, 8), tq.resize(tw), tr.resize(tw), ts.resize(tw), tt.resize(tw), uG ? this.u4.resize(tz) : this.u5.resize()
	};
	rj = this;
	tu.style.position = "absolute", tu.style.top = "0", tu.style.left = "0", tu.style.width = "100%", tu.style.height = "100%", tu.style.backgroundColor = bD.o4, bL.rU() || (tu.style.backdropFilter = "blur(4px)", tu.style.webkitBackdropFilter =
		"blur(4px)"), tv.style.position = "absolute", tv.style.top = "0", tv.style.left = "0", tv.style.width = "100%", tv.style.display = "flex", tv.style.alignItems = "center";
	for (var g = [tw, tx, ty, u3], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bC.r2.ta(g[aB]);
	tz.style.position = "absolute", tz.style.left = "0", tz.style.width = "100%", tz.style.font = "inherit", u0.style.position = "absolute", u0.style.left = "0", u0.style.width = "100%", u1.style.position = "absolute", u1.style.top = "0", u1.style
		.left = "0", u1.style.height = "100%", u1.style.width = "50%", u1.style.backgroundColor = bD.oR, u2.innerHTML = "", u2.style.position = "absolute", u2.style.top = "50%", u2.style.left = "50%", u2.style.transform = "translate(-50%, -50%)", tv
		.appendChild(function() {
			var uA = document.createElement("h1");
			return uA.textContent = L(23), uA.style.margin = "0 auto 0.15em auto", uA.style.fontFamily = "Arial Black, system-ui", uA.style.fontSize = "inherit", uA.style.fontWeight = "inherit", uA
		}()), tw.appendChild(tq.qh), tx.appendChild(tr.qh), ty.appendChild(ts.qh), u0.appendChild(u1), u0.appendChild(u2), u3.appendChild(tt.qh), tu.appendChild(tv), tu.appendChild(tw), tu.appendChild(tx), tu.appendChild(ty), tu.appendChild(tz), tu
		.appendChild(u0), tu.appendChild(u3), rj.u5.show(tz)
}

function u6(rk) {
	var tu = document.createElement("div"),
		tz = document.createElement("div");
	this.mr = function() {
			tz.textContent = "", bp.uQ.uR && bp.uQ.sJ(1);
			for (var sB = document.createDocumentFragment(), uS = bp.y.s6[0], uT = bp.uT.uU[uS], uV = bp.uT.uV[uS], aB = 0; aB < uT.length; aB++) ! function(sB, qu, uX, uS) {
				var s0 = document.createElement("span");
				s0.textContent = (uX ? "🟢 " : "⚪ ") + bp.lJ.uY(qu, uS), s0.style.color = bp.lJ.uZ(qu.ua), s0.style.cursor = "pointer", s0.style.margin = "0.2em 0.2em 0.2em 0.2em", s0.style.width = s0.style.maxWidth = 2 === uS ? "10em" : "9em",
					s0.style.height = s0.style.maxHeight = "1.4em", s0.style.whiteSpace = "nowrap", s0.style.overflow = "hidden", s0.style.textOverflow = "ellipsis", s0.style.font = "inherit", s0.style.display = "inline-block", bp.lJ.ub(qu) && (
						s0.style.textDecoration = "underline"), qu.uc && (s0.style.textDecorationLine = "underline", s0.style.textDecorationStyle = "dotted");
				s0.onclick = function(e) {
					rk(e, qu)
				}, bL.rU() || (s0.onmouseover = function(e) {
					bp.uQ.ud(e.target, qu, 1)
				}), sB.appendChild(s0)
			}(sB, uT[aB], aB < uV, uS);
			tz.appendChild(sB)
		}, this.show = function(qw) {
			qw.appendChild(tu)
		}, this.sJ = function(qw) {
			t.removeChild(qw, tu)
		}, this.resize = function() {
			tz.style.fontSize = bC.r2.rB(bC.r2.sL(.02, .3))
		}, tu.style.top = "0", tu.style.left = "0", tu.style.width = tu.style.height = "100%", tu.style.overflowX = "hidden", tu.style.overflowY = "auto", tu.style.font = "inherit", tz.style.font = "inherit", tz.style.margin = "0.4em", tu
		.appendChild(tz)
}

function ue(uf) {
	var tu = document.createElement("div"),
		rn = document.createElement("div"),
		ug = [];

	function rP() {
		bL.rU() || (this.style.backgroundColor = bC.color.rX(bD.o1, 50))
	}

	function rQ() {
		this.style.backgroundColor = bD.o1
	}
	this.pX = function(ui, uj) {
			ug[2].textContent = ui + 1 + " / " + uj
		}, this.show = function(qu) {
			qu = bp.lJ.sD(qu, bp.lJ.sE(qu)), rn.appendChild(bp.sI.transform(qu)), document.body.appendChild(tu)
		}, this.resize = function() {
			var j = bC.r2.sL(.03, .5);
			tu.style.width = 10 * j + "px", tu.style.font = bC.r2.sr(1, .75 * j), bC.r2.rC(tu, 4), rn.style.top = j + "px", rn.style.font = bC.r2.sr(0, .55 * j), bC.r2.rC(rn, 2), tu.style.height = j + rn.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bC.r2.rC(ug[aB], 6), ug[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) ug[aB].style.height = j + "px", bC.r2.rC(ug[aB], 2);
			ug[2].style.width = 4 * j + "px", ug[1].style.left = 2 * j + "px", ug[2].style.left = 4 * j + "px", ug[3].style.left = 8 * j + "px"
		}, this.uk = function() {
			for (var aB = 0; aB < 4; aB++) ug[aB].onclick = null, ug[aB].onmouseover = null, ug[aB].onmouseout = null;
			t.removeChild(document.body, tu), tu = rn = ug = null
		}, tu.style.position = "absolute", tu.style.color = bD.o5, tu.style.zIndex = "3", tu.style.right = "0", tu.style.top = "0", rn.style.position = "absolute", rn.style.height = "auto", rn.style.color = bD.o5, rn.style.backgroundColor = bD.o1, rn
		.style.left = "0", rn.style.width = "100%", rn.style.overflowWrap = "break-word", tu.appendChild(rn);
	for (var aB = 0; aB < 4; aB++) ug[aB] = document.createElement("div"), ug[aB].style.position = "absolute", ug[aB].style.backgroundColor = bD.o1, ug[aB].style.color = bD.o5, ug[aB].style.top = "0", ug[aB].style.display = "flex", ug[aB].style
		.justifyContent = "center", ug[aB].style.alignItems = "center", ug[aB].style.userSelect = "none", ug[aB].style.outline = "none", ug[aB].style.font = "inherit", 2 !== (ug[aB].uh = aB) && (ug[aB].onclick = uf, ug[aB].onmouseover = rP, ug[aB]
			.onmouseout = rQ), tu.appendChild(ug[aB]);
	ug[0].textContent = "◀", ug[1].textContent = "▶", ug[3].textContent = "✖"
}

function ul(uf) {
	var sh = document.createElement("div");

	function rP() {
		bL.rU() || (sh.style.backgroundColor = bC.color.rX(bD.o1, 50))
	}

	function rQ() {
		sh.style.backgroundColor = bD.o1
	}
	this.pX = function(uj) {
			sh.textContent = uj
		}, this.show = function() {
			document.body.appendChild(sh)
		}, this.resize = function() {
			var j = bC.r2.sL(.03, .5);
			sh.style.width = 2 * j + "px", sh.style.height = j + "px", sh.style.font = bC.r2.sr(1, .75 * j), bC.r2.rC(sh, 4), bC.r2.rC(sh, 2)
		}, this.uk = function() {
			sh.onclick = null, sh.onmouseover = null, sh.onmouseout = null, t.removeChild(document.body, sh), sh = null
		}, sh.style.position = "absolute", rQ(), sh.style.color = bD.o5, sh.style.zIndex = "3", sh.style.right = "0", sh.style.top = "0", sh.style.display = "flex", sh.style.justifyContent = "center", sh.style.alignItems = "center", sh.style
		.userSelect = "none", sh.style.outline = "none", sh.onclick = uf, sh.onmouseover = rP, sh.onmouseout = rQ
}

function um(sZ) {
	var tu = document.createElement("div"),
		un = document.createElement("div"),
		sj = (this.fG = 0, this.fI = 0);

	function up() {
		bp.uq.sJ()
	}
	this.rb = sZ, this.show = function(fG, fI, us) {
		if (sj) return [0, 0];
		sj = 1, this.fG = fG, this.fI = fI,
			function(self, us) {
				var i = bC.r2.sL(.16, .7),
					j = sZ.length * i / 3,
					uu = h.i / h.k,
					uv = h.j / h.k,
					nh = Math.min(1, Math.min(uu / i, uv / j));
				i *= nh, j *= nh, us && (self.fG += bC.r2.sL(.03, .5)), self.fG = bN.iH(self.fG, 0, uu - i), self.fI = bN.iH(self.fI, 0, uv - j), un.style.left = self.fG + "px", un.style.top = self.fI + "px", un.style.width = i + "px", un.style
					.height = j + "px", un.style.font = bC.r2.sr(0, .3 * j / sZ.length), bC.r2.rC(un, 5);
				for (var aB = 1; aB < sZ.length; aB++) bC.r2.rC(sZ[aB].button, 8)
			}(this, us), document.body.appendChild(tu)
	}, this.sJ = function() {
		sj && (sj = 0, tu.removeEventListener("click", up), t.removeChild(document.body, tu))
	};
	for (var aB = 0; aB < sZ.length; aB++) new rz("" + (1 + aB), sZ[aB].button, 0, 1);
	tu.style.position = "fixed", tu.style.top = "0", tu.style.left = "0", tu.style.width = "100%", tu.style.height = "100%", tu.style.zIndex = "5", un.style.position = "absolute",
		function() {
			for (var ur = (100 / sZ.length).toFixed(2) + "%", aB = 0; aB < sZ.length; aB++) sZ[aB].button.style.width = "100%", sZ[aB].button.style.height = sZ[aB].button.style.maxHeight = ur, sZ[aB].button.style.padding = "0.0em 0.9em", un
				.appendChild(sZ[aB].button)
		}(), tu.appendChild(un), tu.addEventListener("click", up)
}

function ei() {
	var uw, ux, uy;

	function v5(aB) {
		return bC.color.nx(ux[aB][0], ux[aB][1], ux[aB][2])
	}

	function vB(fS, fT) {
		return bC.color.vL(ux[fS], ux[fT]), v5(fT)
	}

	function v3() {
		uw && (uw.remove(), uw = null)
	}
	this.show = function(ej, colors, id) {
		0 <= (uy = id) && b0.y.ed(0) && b0.ee.uz(0, id), ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = (ej = ej.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ux = colors, (uw = document.createElement("div")).style.position = "fixed", uw.style.top = "0", uw.style.left = "0", uw.style.width = "100%", uw.style.height = "100%", uw.style.backgroundColor = bC.color.nz(ux[0][0], ux[0][1], ux[0][
				2], .6), uw.style.zIndex = "6", uw.onclick = function(e) {
				e.target === uw && v3()
			},
			function(ej) {
				var i5, v4 = document.createElement("div");
				v4.style.position = "absolute", v4.style.display = "flex", v4.style.flexDirection = "column", v4.style.top = "50%", v4.style.left = "50%", v4.style.backgroundColor = v5(2), i5 = a0.a1.iI() ? bC.r2.v6(h.min) : bC.r2.sL(.4);
				i5 = Math.max(i5, 200), v4.style.width = bC.r2.rB(i5), v4.style.height = bC.r2.rB(i5), v4.style.transform = "translate(-50%, -50%)",
					function(v4, i5) {
						var vA = document.createElement("div");
						vA.style.flex = "0 0 10%", vA.style.overflow = "hidden", vA.style.backgroundColor = v5(1), vA.style.color = vB(1, 7), vA.style.font = bC.r2.sr(1, .05 * i5), vA.style.display = "flex", vA.style.alignItems = "center", vA
							.style.justifyContent = "center", vA.innerHTML = L(24), v4.appendChild(vA)
					}(v4, i5),
					function(v4, ej, i5) {
						var vC = document.createElement("div");
						vC.style.flex = "0 0 70%", vC.style.overflowY = "auto", vC.style.overflowX = "hidden", vC.style.whiteSpace = "pre-wrap", vC.style.wordWrap = "break-word", vC.style.padding = bC.r2.rB(.02 * i5), vC.style.backgroundColor =
							v5(2), vC.style.color = vB(2, 8), vC.style.font = bC.r2.sr(0, .07 * i5), vC.innerHTML = ej, vC.innerHTML = "<style>a { color: inherit; }</style>" + vC.innerHTML, v4.appendChild(vC)
					}(v4, ej, i5),
					function(v4, i5) {
						var vD = document.createElement("div"),
							vE = (vD.style.display = "flex", vD.style.flexDirection = "row", vD.style.justifyContent = "space-between", vD.style.alignItems = "stretch", vD.style.backgroundColor = v5(3), vD.style.flex = "1", vD.style.padding = bC
								.r2.rB(.01 * i5), vD.style.gap = bC.r2.rB(.01 * i5), document.createElement("div")),
							vF = (vE.style.flex = "0 0 60%", vE.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								v3()
							}, v5(4), !1)),
							vF = (vF.button.style.width = "100%", vF.button.style.height = "100%", vF.button.style.color = vB(4, 9), vF.button.style.font = bC.r2.sr(1, .05 * i5), vE.appendChild(vF.button), document.createElement("div")),
							vH = (vF.style.flex = "0 0 15%", vF.style.height = "100%", vF.style.backgroundColor = v5(5), document.createElement("div")),
							vI = (vH.style.flex = "1", vH.style.height = "100%", new w(L(26), function(e) {
								return bC.r2.vJ(e), uy < 0 || b0.y.ed(0) && (b0.ee.uz(1, uy), uy = -1), !0
							}, v5(6), !1));
						vI.button.style.width = "100%", vI.button.style.height = "100%", vI.button.style.color = vB(6, 10), vI.button.style.font = bC.r2.sr(1, .035 * i5), vH.appendChild(vI.button), vD.appendChild(vE), vD.appendChild(vF), vD
							.appendChild(vH), v4.appendChild(vD)
					}(v4, i5), uw.appendChild(v4)
			}(ej), document.body.appendChild(uw)
	}
}

function vM(sv, vN) {
	this.qs = [];
	var vO = this.qs;

	function click() {
		for (var aB = 0; aB < vO.length; aB++) vO[aB].textContent = vO[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eG = parseInt(this.name);
		void 0 !== sv.eG && bl.pW.pX(sv.eG, eG), vN && vN(eG)
	}
	for (var vP, f9 = sv.t1.length, aB = 0; aB < f9; aB++)(vP = document.createElement("p")).textContent = "⚪ " + sv.t1[aB], vP.style.margin = "0", vP.name = "" + aB, vP.style.cursor = "pointer", vP.style.fontSize = "1em", vP.addEventListener(
		"click", click), vO.push(vP);
	vO[sv.value].textContent = vO[sv.value].textContent.replace("⚪", "🟢")
}

function vQ(title, vR, vS) {
	var tU = document.createElement("div"),
		vT = document.createElement("div"),
		t5 = document.createElement("div"),
		vU = document.createElement("div"),
		vV = document.createElement("div");
	this.vW = t5, this.vX = vR, this.show = function() {
			!1 !== vS ? document.body.appendChild(tU) : (document.body.appendChild(vT), document.body.appendChild(vU))
		}, this.sJ = function() {
			!1 !== vS ? t.removeChild(document.body, tU) : (t.removeChild(document.body, vT), t.removeChild(document.body, vU))
		}, this.vb = function() {
			var sM = bC.r2.sL(.1),
				sK = bC.r2.sL(.08 + .04 * (h.vc < 1), .3);
			return {
				sM: sM,
				sK: sK,
				vd: h.j / h.k - sM - sK
			}
		}, this.resize = function(sd) {
			var f9 = vR.length,
				ve = this.vb(),
				sM = ve.sM,
				sK = ve.sK;
			for (vT.style.height = bC.r2.rB(sM), bC.r2.rC(vT, 2), vU.style.top = bC.r2.rB(h.j / h.k - sK), vU.style.height = bC.r2.rB(sK), bC.r2.rC(vU, 8), t5.style.top = bC.r2.rB(sM), t5.style.height = t5.style.maxHeight = bC.r2.rB(ve.vd), vT.style
				.font = bC.r2.sr(0, bC.r2.sL(.02, .15)), vU.style.font = bC.r2.sr(0, bC.r2.sL(.02, .7)), t5.style.font = bC.r2.sr(0, bC.r2.sL(.02, .35)), aB = 1; aB < f9; aB++) bC.r2.rC(vR[aB].button, 4);
			for (var se = 0, aB = 0; aB < f9; aB++) se += vR[aB].button.offsetWidth;
			if (sd && se < vU.offsetWidth)
				for (aB = 0; aB < f9; aB++) vR[aB].button.style.width = (100 * vR[aB].button.offsetWidth / se).toFixed(2) + "%";
			else
				for (aB = 0; aB < f9; aB++) vR[aB].button.style.width = "auto";
			vU.tn && (vU.scrollLeft = vU.tn), sd || this.resize(!0)
		}, this.vf = function() {
			var ve = this.vb(),
				eh = h.k;
			vg.fillStyle = bD.o1, vg.fillRect(0, eh * ve.sM, h.i, eh * ve.vd)
		}, tU.style.position = "absolute", tU.style.top = "0", tU.style.left = "0", tU.style.width = "100%", tU.style.height = "100%", vT.style.position = "absolute", vT.style.top = "0", vT.style.left = "0", vT.style.width = "100%", vT.style
		.display = "flex", vT.style.backgroundColor = bD.o1, vU.style.position = "absolute", vU.style.left = "0", vU.style.width = "100%", bC.r2.ta(vU), vV.style.height = vV.style.maxHeight = "100%", t5.style.position = "absolute", t5.style.width =
		"100%", t5.style.backgroundColor = bD.o1,
		function() {
			for (var aB = 0; aB < vR.length; aB++) vR[aB].button.style.height = "100%", vR[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vR.length; aB++) vV.appendChild(vR[aB].button);
	vT.appendChild(function() {
		var va = document.createElement("h1");
		return va.textContent = title, va.style.margin = "auto", va.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", va.style.fontFamily = "Arial Black, system-ui", va
	}()), vU.appendChild(vV), !1 !== vS && (tU.appendChild(t5), tU.appendChild(vT), tU.appendChild(vU))
}

function rz(vh, vi, vj, vk) {
	var self;
	this.s0 = document.createElement("span"), (self = this).s0.textContent = vh, self.s0.style.color = bD.o5, self.s0.style.position = "absolute", self.s0.style.font = "inherit", vk ? self.s0.style.bottom = "0.06em" : self.s0.style.top = "0.12em",
		vj ? self.s0.style.left = "0.2em" : self.s0.style.right = "0.2em", self.s0.style.fontSize = "0.6em", self.s0.style.pointerEvents = "none", self.s0.style.whiteSpace = "pre", vi.style.position = "relative", vi.style.overflow = "hidden", vi
		.appendChild(self.s0)
}

function tc(vh, vi, vl, vm, vn) {
	var self;
	this.s0 = document.createElement("span"), this.resize = function() {
			this.s0.style.fontSize = ((vm - vl) * vi.offsetHeight).toFixed(1) + "px"
		}, (self = this).s0.textContent = vh, self.s0.style.color = bD.o5, self.s0.style.font = "inherit", self.s0.style.margin = "0.1em 0.6em", self.s0.style.pointerEvents = "none", vn && (self.s0.style.fontWeight = "bold"), self.s0.style
		.whiteSpace = "nowrap", self.s0.style.display = "block", vi.appendChild(self.s0)
}

function vo(vp, vq, vr, vs) {
	var vt = document.createElement("textarea"),
		vu = (this.e = vt, !0);

	function vz() {
		vt.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vq && bC.r2.rC(vt, 5)
		}, this.vv = function(ej) {
			vt.value = ej
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
		}, vt.setAttribute("id", "textArea" + t.y.sy++), vt.setAttribute("autocomplete", "off"), vp && vt.setAttribute("placeholder", vp), vt.style.top = "0", vt.style.left = "0", vt.style.width = "100%", vt.style.height = "100%", vt.style
		.userSelect = "none", vt.style.outline = "none", vt.style.resize = "none", vt.style.border = "none", vt.style.color = bD.o5, vt.style.backgroundColor = bD.ny, vs ? (vt.style.fontSize = "1em", vt.rows = 6, vt.style.padding = "0.25em") : (vt
			.style.padding = "0.45em", vt.style.fontSize = "1.2em"), vr && vt.addEventListener("input", function(e) {
			vr(e)
		}), vt.addEventListener("focus", function() {
			h.sz++
		}), vt.addEventListener("blur", function() {
			h.sz--
		})
}

function dM() {
	this.rJ = new w0, this.eU = new w1, this.pW = new w2, this.y = new w3, this.w4 = new w5, this.dh = function() {
		this.eU.dh(), (new w6).dh(), this.w4.dh(), this.y.w7()
	}
}

function w1() {
	function w8(aB, type, wE, e0) {
		bl.eU.data.push({
			eG: aB,
			type: type || 0,
			value: wE || 0,
			wE: wE || 0,
			e0: e0 || 0
		})
	}

	function w9(aB, type, wE, e0) {
		bl.eU.data.push({
			eG: aB,
			type: type,
			value: wE || "",
			wE: wE || "",
			e0: e0 || 0
		})
	}

	function wA(nn) {
		for (var aB = bl.eU.data.length; aB < nn; aB++) bl.eU.data.push(null)
	}
	this.data = [], this.dh = function() {
		w8(0, 1, 0, 5), w8(1, 1, 1), w8(2, 0), w9(3, 2), w8(4, 1), w9(5, 2, "system-ui", 2), w8(6, 0), w8(7, 0, 0), w8(8, 0), w8(9, 1, 1), w8(10, 1), w8(11, 1, 1), w9(12, 2, navigator.language), w8(13), w8(14), w8(15, 0, 1), w8(16, 0, 4), wA(
			100), w9(100, 2), w9(101, 2), w9(102, 2), w9(103, 2), w9(104, 2), w9(105, 2), w9(106, 2), w8(107), w8(108), w8(109), w9(110, 2), w8(111), w8(112), w8(113), w9(114, 2), w8(115), w9(116, 2), w8(117, 1), w9(118, 2, "", 2), w8(119, 1, 0,
				1), w9(120, 2), w8(121, 1, ~~(262144 * Math.random())), w9(122, 2, "Player " + Math.floor(1e3 * Math.random())), w8(123), w9(124), w8(125, 1), w9(126, 2), w8(127, 0, 1), w8(128), w8(129), w8(130), w8(131), w8(132), w9(133, 2), w8(
				134, 0, 5), w9(135, 2), w9(136, 2), w8(137), w8(138), w8(139), w8(140), w8(141), w8(142), w8(143), w8(144), w9(145, 2), w8(146), w8(147), w9(148, 2), w8(149), w8(150, 0, 1), w9(151, 2), w8(152, 0, 5), w8(153, 1), w8(154, 1), w9(
				155, 2), w9(156, 2), w8(157), w8(158), w8(159), w8(160), w9(161, 2), w8(162, 0, 1024), w9(163, 2, "0,0,0"), w9(164, 2, "100,100,100"), w9(165, 2, "30,30,30"), w9(166, 2, "70,70,70"), w9(167, 2, "100,100,100"), w9(168, 2,
				"85,85,85"), w9(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) w9(170 + aB, 2, "255,255,255");
		w9(174, 2), w9(175, 2), w8(176, 0, 200), wA(180), w8(180, 0), w8(181, 0), w8(182, 0, 1023)
	}, this.pX = function(eG, value) {
		this.data[eG].value = value
	}, this.wB = function(eG, value) {
		this.pX(eG, value);
		var value = String(value),
			f9 = value.length;
		5e4 < f9 ? console.log("storage value too large: index " + eG + " size " + f9) : (bl.rJ.save(eG, value), bl.rJ.save(eG, String(this.data[eG].e0), !0))
	}, this.wC = function(eG) {
		return Number(this.data[eG].value)
	}, this.wD = function(eG) {
		return String(this.data[eG].value)
	}
}

function w5() {
	var wF = [];

	function wJ(tI) {
		wF.unshift(tI), bl.pW.pX(161, wF.join(";"))
	}

	function wI(tI) {
		for (var wL = wF, f9 = wL.length, aB = 0; aB < f9; aB++)
			if (wL[aB] === tI) return wL.splice(aB, 1), bl.pW.pX(161, wL.join(";")), 1
	}
	this.dh = function() {
		var qj = bl.eU.data[161].value;
		qj.length && (wF = qj.split(";"))
	}, this.get = function() {
		return wF
	}, this.wG = function() {
		return {
			t1: wF,
			value: 0
		}
	}, this.uc = function(tI) {
		return bC.rA.has(wF, tI)
	}, this.wH = function(tI) {
		return wI(tI) ? 0 : (wJ(tI), 1)
	}, this.mr = function(tI) {
		wI(tI) && wJ(tI)
	}, this.wK = function(eG) {
		eG < wF.length && (wF.splice(eG, 1), bl.pW.pX(161, wF.join(";")))
	}
}

function w0() {
	this.wM = function(eG, e0) {
		return Number(this.wN(eG, e0))
	}, this.wN = function(eG, e0) {
		var fb = null;
		return 0 === a0.id ? a0.wO && (fb = a0.wO.getItem((e0 ? "v" : "d") + eG)) : 1 === a0.id ? fb = a0.wP.loadString((e0 ? 1e3 : 2e3) + eG) : 2 === a0.id && (fb = a0.wQ[(e0 ? "v" : "d") + eG]), fb && 0 !== fb.length ? fb : null
	}, this.wR = function(f9, wS) {
		var g = [],
			wT = wS ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wO)
				for (aB = 0; aB < f9; aB++) g.push(a0.wO.getItem(wT + aB))
		} else if (1 === a0.id)
			for (var wU = wS ? 5e3 : 3e3, aB = 0; aB < f9; aB++) g.push(a0.wP.loadString(wU + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f9; aB++) g.push(a0.wQ[wT + aB]);
		return g
	}, this.save = function(eG, value, e0) {
		var wV = (e0 ? "v" : "d") + eG;
		if (0 === a0.id) {
			if (a0.wO && bl.eU.data[140].value) try {
				a0.wO.setItem(wV, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wP.saveString((e0 ? 1e3 : 2e3) + eG, value) : 2 === a0.id && (a0.wQ[wV] = value, a0.wW.postMessage(wV + " " + value))
	}, this.wX = function(g, wS) {
		var f9 = g.length,
			wT = wS ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wO && bl.eU.data[140].value) try {
				for (aB = 0; aB < f9; aB++) a0.wO.setItem(wT + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wU = wS ? 5e3 : 3e3, aB = 0; aB < f9; aB++) a0.wP.saveString(wU + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f9; aB++) a0.wQ[wT + aB] = g[aB], a0.wW.postMessage(wT + aB + " " + g[aB])
	}
}

function w6() {
	this.dh = function() {
		! function() {
			var data = bl.eU.data;
			0 === data[2].e0 && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].wE = 1);
			0 === data[100].e0 && (data[100].value = data[100].wE = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bl.eU.data,
			f9 = data.length;
		for (aB = 0; aB < f9; aB++) {
			var wa = bl.rJ.wM(aB, !0);
			data[aB] && data[aB].e0 === wa && (null === (wa = bl.rJ.wN(aB)) ? data[aB].value = data[aB].wE : 2 === data[aB].type ? data[aB].value = wa : (wa = Number(wa), isNaN(wa) ? data[aB].value = data[aB].wE : data[aB].value = wa))
		}
	}
}

function w3() {
	function wf(g) {
		if (0 === g.length) bl.pW.pX(116, "");
		else {
			for (var wi = g[0], aB = 1; aB < g.length; aB++) wi += ";" + g[aB];
			bl.pW.pX(116, wi)
		}
	}
	this.wc = function() {
		bl.eU.data[110].value.length && (bl.eU.data[106].value = bl.eU.data[110], bl.pW.pX(110, ""), this.wd())
	}, this.wd = function() {
		var g = bl.eU.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bl.eU.data[106].value), g.unshift(bl.eU.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var we = [], aB = 0; aB < g.length; aB += 2) we.push(g[aB]);
		wf(g), bl.eU.data[117].value = 0, bl.eU.data[117].t1 = we
	}, this.wg = function(eG) {
		bl.eU.data[117].t1.splice(eG, 1), bl.eU.data[117].value = Math.min(eG, bl.eU.data[117].t1.length - 1);
		var g = bl.eU.data[116].value.split(";");
		g.splice(2 * eG, 2), wf(g)
	}, this.wh = function(eG) {
		var g = bl.eU.data[116].value.split(";");
		return {
			tI: g[2 * eG],
			password: g[2 * eG + 1]
		}
	}, this.wj = function() {
		var fb = bN.iH(bl.eU.data[121].value, -1, 262143);
		return fb = -1 === fb ? ~~(262144 * Math.random()) : fb
	}, this.w7 = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qj = g[aB].trim(),
				wk = qj.indexOf("="),
				wk = 0 <= wk ? qj.substring(0, wk) : qj;
			document.cookie = wk + "=;expires=0;path=/", document.cookie = wk + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wk + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function w2() {
	this.pX = function(eG, value) {
		2 !== bl.eU.data[eG].type && (value = Math.floor(value)), bl.eU.data[eG].value !== value && (bl.eU.wB(eG, value), 0 === eG ? (t.x(), b9.dh(), t.u(2)) : 1 === eG ? h.ds(1) : 2 === eG ? h.ds(0) : 5 === eG && (bC.r2.wl(), h.ds(0)))
	}, this.wm = function() {
		for (var data = bl.eU.data, aB = 0; aB < 100; aB++) data[aB] && bl.eU.wB(aB, data[aB].wE);
		bC.r2.wl(), h.ds(1)
	}, this.wn = function() {
		for (var data = bl.eU.data, aB = 0; aB < data.length; aB++) data[aB] && bl.eU.pX(aB, data[aB].wE)
	}, this.wo = function() {
		for (var fT = bl.eU, aB = 128; aB < 135; aB++) fT.wB(aB, fT.data[aB].wE)
	}, this.wp = function(data) {
		bl.pW.pX(109, data.tJ), bl.pW.pX(107, data.wq), bl.pW.pX(108, data.wr), bl.pW.pX(112, data.ws), bl.pW.pX(111, data.wt), bl.pW.pX(113, data.wu), bl.pW.pX(135, data.wv), bl.pW.pX(136, data.ww), bl.pW.pX(137, data.wx), bl.pW.pX(138, data
			.wy), bl.pW.pX(139, data.wz), bl.pW.pX(141, data.x0), bl.pW.pX(142, data.x1), bl.pW.pX(143, data.x2), bl.pW.pX(144, data.x3)
	}
}

function c6() {
	this.tN = new x4, this.x5 = new x6, this.x7 = new x8, this.dh = function() {
		this.tN.dh()
	}
}

function x6() {
	this.x9 = function(size) {
		for (var xA = bJ, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(xA.qA(16)));
		return g.join("")
	}, this.xB = function(qj) {
		return 20 < (qj = qj.trim()).length ? qj.substring(0, 20) : qj
	}
}

function x4() {
	var xC = new Uint8Array(78);
	this.dh = function() {
		var aB;
		for (xC[50] = 37, aB = 0; aB < 10; aB++) xC[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) xC[aB + 20] = aB + 11, xC[aB + 52] = aB + 38
	}, this.xD = function(qj) {
		return qj.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.xE = function(qj, size) {
		if ((qj = this.xD(qj)).length > size) return qj.substring(0, size);
		for (; qj.length < size;) qj = "-" + qj;
		return qj
	}, this.xF = function(qj) {
		for (var xG = xC, f9 = qj.length, g = new Uint8Array(f9), aB = 0; aB < f9; aB++) g[aB] = xG[qj.charCodeAt(aB) - 45];
		return g
	}, this.xH = function(xI) {
		bF.a7(6 * xI.length), this.xJ(xI), bJ.dh(bF.aC)
	}, this.xJ = function(xI) {
		for (var f9 = xI.length, i = bF, aB = 0; aB < f9; aB++) i.a8(6, xI[aB])
	}, this.xK = function(qj) {
		this.xJ(this.xF(qj))
	}, this.xL = function(qj, size) {
		this.xJ(this.xF(this.xE(qj, size)))
	}, this.xM = function(qj, size) {
		for (var g = this.xF(this.xE(qj, size)), fb = 0, nh = 1, aB = g.length - 1; 0 <= aB; aB--) fb += nh * g[aB], nh *= 64;
		return fb
	}
}

function xN() {
	var i, j, xO;

	function xo(hb, fC, xm, xT, xh) {
		fC = xn(hb, fC + 1 + 2 * xT & 3);
		! function(hb, l7) {
			return 1 < Math.abs(hb % i - l7 % i) || 1 < Math.abs(xr(hb) - xr(l7))
		}(hb, fC) && 0 === xh[fC << 2] && (xh[fC << 2] = xm)
	}

	function xr(gh) {
		return Math.floor((gh + .5) / i) % j
	}

	function xn(gh, fC) {
		return gh + xO[fC]
	}
	this.xP = function(qj) {
		var aB, xQ, f9, xR, xA = bJ;
		for (bI.tN.xH(bI.tN.xF(qj)), bU.xU.xV[bU.ep].i = bU.fK = i = xA.qA(12), bU.xU.xV[bU.ep].j = bU.fL = j = xA.qA(12), xO = [-i, -1, i, 1], bU.xe = document.createElement("canvas"), bU.xe.width = bU.fK, bU.xe.height = bU.fL, bU.xa = bU.xe
			.getContext("2d", {
				alpha: !1
			}), bU.xb = bU.xf = null, bU.xb = bU.xa.getImageData(0, 0, bU.fK, bU.fL), bU.xf = bU.xb.data, bC.rA.xg(bU.xf), f9 = xA.qA(12), xQ = xA.qA(5), xR = xX(i * j - 1), aB = 0; aB < f9; aB++) ! function(lP, gh, xS, xT) {
			var aB, fC, xA = bJ,
				xh = bU.xf,
				xi = gh,
				xj = gh,
				xk = 0,
				xl = 1 + xS,
				xm = 2 - xS;
			for (xh[gh << 2] = xl, aB = 0; aB < lP; aB++) fC = xA.qA(2), gh = xn(gh, fC), xh[gh << 2] === xl ? xk % 2 == 1 && xo(xj, xk + 2 * xT + 3, xm, xT, xh) : xh[gh << 2] = xl, xo(gh, fC, xm, xT, xh), xo(xj, fC, xm, xT, xh), xj = gh,
				xk = fC;
			xn(gh, 0) === xi ? (xo(gh, 0, xm, xT, xh), xo(xi, 0, xm, xT, xh)) : xn(gh, 1) === xi && (xo(gh, 0, xm, xT, xh), xo(xi, 2, xm, xT, xh));
			0 === lP && (xo(xi, 0, xm, xT, xh), xo(xi, 2, xm, xT, xh))
		}(xA.qA(xQ), xA.qA(xR), 1 === xA.qA(1), 1 === xA.qA(1));
		var fG, fI, i1, xs, xt, xu, xh = bU.xf,
			xv = !0,
			xw = bU.xU.xV[bU.ep].xw,
			xx = bU.xU.xV[bU.ep].xx;
		for (fI = 0; fI < j; fI++)
			for (xs = !0, xt = xv, fG = xu = 0; fG < i; fG++) i1 = 4 * fI * i + 4 * fG, xu <= fG && 0 < xh[i1] && (xt = 2 === xh[i1], xs) && (xs = !1, xt !== xv) ? (xv = xt, xu = fG + 1, fG = -1) : (xt ? (xh[i1] = xx[0], xh[1 + i1] = xx[1], xh[
				2 + i1] = xx[2]) : (xh[i1] = xw[0], xh[1 + i1] = xw[1], xh[2 + i1] = xw[2]), xh[3 + i1] = 255);
		bU.xa.putImageData(bU.xb, 0, 0), bU.xc = !0, bU.xd.dh(), bh.dp = !0
	}
}

function x8() {
	this.xP = function(xy) {
		for (var xA = bJ, size = xA.qA(xy), xz = 7 + 9 * xA.qA(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(xA.qA(xz)));
		return g.join("")
	}
}

function cB() {
	var sl, sm, y0, y1, y2, y3, y4, y5, y6, y7;

	function y9() {
		var yC = aD.yC;
		for (y6 = yC; y6 < aD.f6; y6++) y8();
		for (y6 = aD.hX ? aD.kU : 0; y6 < yC; y6++) {
			if (!yD()) {
				for (var fT = aD.yH = y6; fT < yC; fT++) y6 = fT, y8();
				return
			}
			yG(y3 + sl * y2 + bN.fa(y2, 2), y4 + sm * y2 + bN.fa(y2, 2))
		}
	}

	function yj(player) {
		for (var j2 = ag.j2, j4 = ag.j4, j3 = ag.j3, j5 = ag.j5, fI = j4[player]; fI <= j5[player]; fI++)
			for (var fG = j2[player]; fG <= j3[player]; fG++) {
				var en = ac.yk(fG, fI);
				ac.gj(en) && (ac.jf(en) ? ac.ge(en, player) : ac.yl(en, player))
			}
	}

	function yi(g, te, tf) {
		var eY = g[te];
		g[te] = g[tf], g[tf] = eY
	}

	function yD() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sl = bN.fa(y0 * ay.random(), ay.value(100)), sm = bN.fa(y1 * ay.random(), ay.value(100)), yq()) return 1;
			return
		}() || function() {
			var iT, iW, fS, yF, fT, yE;
			for (iT = bN.fa(y0 * ay.random(), ay.value(100)), iW = bN.fa(y1 * ay.random(), ay.value(100)), fS = 40; 1 <= fS; fS--)
				for (yF = y1 - fS; 0 <= yF; yF -= 40)
					for (sm = (yF + iW) % y1, fT = 40; 1 <= fT; fT--)
						for (yE = y0 - fT; 0 <= yE; yE -= 40)
							if (sl = (yE + iT) % y0, yq()) return 1;
			return
		}()
	}

	function yq() {
		for (var gh, ys, gap = bN.fa(y2 - y5, 2), yt = y4 + sm * y2 + gap, yu = y3 + sl * y2 + gap, yr = yt + y5 - 1; yt <= yr; yr--)
			for (ys = yu + y5 - 1; yu <= ys; ys--)
				if (gh = ac.yk(ys, yr), !ac.f4(gh) || ac.jf(gh)) return;
		return 1
	}

	function yG(yE, yF) {
		y8(), yv(yE - 2, yF - 2)
	}

	function y8() {
		ag.n4[y6] = 0, ag.gx[y6] = ag.yg[y6] = 0, ag.gb[y6] = [], ag.gp[y6] = [], ag.gq[y6] = [], ag.fY[y6] = [], ag.j2[y6] = ag.j4[y6] = ag.j3[y6] = ag.j5[y6] = 0
	}

	function yv(yE, yF) {
		var gh, aB, yw, yx;
		for (ag.n4[y6] = 1, ag.j2[y6] = yE + 10, ag.j4[y6] = yF + 10, ag.j5[y6] = ag.j3[y6] = 0, yw = yE; yw < yE + 4; yw++)
			for (yx = yF; yx < yF + 4; yx++)(yE < yw && yw < yE + 3 || yF < yx && yx < yF + 3) && (gh = ac.yk(yw, yx), ac.f4(gh)) && (ag.j2[y6] = Math.min(yw, ag.j2[y6]), ag.j3[y6] = Math.max(yw, ag.j3[y6]), ag.j4[y6] = Math.min(yx, ag.j4[y6]), ag
				.j5[y6] = Math.max(yx, ag.j5[y6]), y7[ag.gx[y6]] = gh, ag.gx[y6]++, ac.yl(gh, y6));
		for (ag.yg[y6] = ag.gx[y6], aB = ag.gx[y6] - 1; 0 <= aB; aB--) ac.yy(y7[aB], y6) ? (ac.ge(y7[aB], y6), ag.gp[y6].push(y7[aB])) : ac.yz(y7[aB]) ? (ac.ge(y7[aB], y6), ag.gq[y6].push(y7[aB])) : ac.z0(y7[aB]) && (ac.ge(y7[aB], y6), ag.fY[y6]
			.push(y7[aB]))
	}
	this.dh = function() {
		if (y7 = new Array(12), y5 = 6, y2 = 10, y0 = bN.fa(bU.fK, y2), y1 = bN.fa(bU.fL, y2), y3 = bN.fa(bU.fK - y2 * y0, 2), y4 = bN.fa(bU.fL - y2 * y1, 2), aD.hX)
			for (var aB = 0; aB < aD.kU; aB++) y6 = aB, y8(), ag.n4[y6] = 1;
		(0 === aD.data.spawningType ? y9 : 1 === aD.data.spawningType ? (y9(), function() {
			var yI = aD.yJ;
			aD.yK || yI++;
			if (!(yI < 3)) {
				for (var data = aD.data, jk = (aD.hX ? aD.kU : 0) + data.teamPlayerCount[0], nn = aD.yH, yL = new Uint32Array(yI), yM = new Uint32Array(yI), yN = new Uint16Array(yI), yO = new Uint16Array(yI), f7 = bi.f7, j2 = ag.j2, j4 =
						ag.j4, j3 = ag.j3, j5 = ag.j5, fo = bQ.fo, fp = bQ.fp, aB = jk; aB < nn; aB++) fo[aB] = j2[aB] + j3[aB] >> 1, fp[aB] = j4[aB] + j5[aB] >> 1;
				for (aB = jk; aB < nn; aB++) {
					var id = f7[aB];
					yL[id] += fo[aB], yM[id] += fp[aB]
				}
				var kr = bi.kr;
				for (aB = 1; aB < yI; aB++) {
					var gc = Math.max(data.teamPlayerCount[kr[aB]], 1);
					yN[aB] = bN.fa(yL[aB], gc), yO[aB] = bN.fa(yM[aB], gc)
				}
				var yP = bi.yP,
					yQ = bi.yQ,
					yR = bi.yR,
					fn = bQ.fn;
				for (aB = 0; aB < 512; aB++) fn[aB] = aB;
				for (var eF = 0; eF < 2 + (4 <= yI); eF++)
					for (aB = jk; aB < nn; aB++) {
						for (var hb = aB, yS = fn[hb], yT = 1, fP = bN.yU(fo[yS] - yN[1], fp[yS] - yO[1]), fS = 2; fS < yI; fS++) {
							var yV = bN.yU(fo[yS] - yN[fS], fp[yS] - yO[fS]);
							yV < fP && (fP = yV, yT = fS)
						}
						var yW = f7[hb];
						if (yT !== yW) {
							if (2 === eF && 4 <= yI) {
								var yX = Math.max((yT + 1) % yI, 1),
									yY = bN.yU(fo[yS] - yN[yX], fp[yS] - yO[yX]);
								for (fS = 1; fS < yI; fS++) yV = bN.yU(fo[yS] - yN[fS], fp[yS] - yO[fS]), fP < yV && yV < yY && (yY = yV, yX = fS);
								yX !== yW && bN.yU(yN[yW] - yN[yX], yO[yW] - yO[yX]) < bN.yU(yN[yW] - yN[yT], yO[yW] - yO[yT]) && (yT = yX)
							}
							var yZ = kr[yT],
								ya = yQ[yZ] + (aD.hX ? 0 : yR[yZ]),
								l7 = yP[ya],
								yb = fn[l7],
								yc = yQ[yZ + 1];
							fP = bN.yU(fo[yb] - yN[yW], fp[yb] - yO[yW]);
							for (var eh = ya + 1; eh < yc; eh++) {
								var yd = yP[eh],
									ye = fn[yd];
								(yV = bN.yU(fo[ye] - yN[yW], fp[ye] - yO[yW])) < fP && (fP = yV, l7 = yd)
							}
							l7 < jk || nn <= l7 || (yb = fn[l7], yL[yW] += fo[yb] - fo[yS], yM[yW] += fp[yb] - fp[yS], yL[yT] += fo[yS] - fo[yb], yM[yT] += fp[yS] - fp[yb], gc = data.teamPlayerCount[kr[yW]], yN[yW] = bN.fa(yL[yW], gc),
								yO[yW] = bN.fa(yM[yW], gc), gc = data.teamPlayerCount[yZ], yN[yT] = bN.fa(yL[yT], gc), yO[yT] = bN.fa(yM[yT], gc), fn[hb] = yb, fn[l7] = yS)
						}
					}! function() {
						for (var fn = bQ.fn, j2 = ag.j2, j4 = ag.j4, j3 = ag.j3, j5 = ag.j5, gx = ag.gx, yg = ag.yg, gp = ag.gp, gq = ag.gq, fY = ag.fY, aB = 0; aB < 512; aB++) {
							var yh = fn[aB];
							if (yh !== aB) {
								yi(j2, aB, yh), yi(j4, aB, yh), yi(j3, aB, yh), yi(j5, aB, yh), yi(gx, aB, yh), yi(yg, aB, yh), yi(gp, aB, yh), yi(gq, aB, yh), yi(fY, aB, yh), yj(aB), yj(yh), fn[aB] = aB;
								for (var j = yh, gi = fn[j]; gi !== aB;) gi = fn[j = gi];
								fn[j] = yh
							}
						}
					}()
			}
		}) : function() {
			var yC = aD.yC;
			for (y6 = yC; y6 < aD.f6; y6++) y8();
			for (y6 = aD.hX ? aD.kU : 0; y6 < yC; y6++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							yE = spawningData[2 * y6] + 1,
							spawningData = spawningData[2 * y6 + 1] + 1;
						if (3 < yE && yE < bU.fK - 5 && 3 < spawningData && spawningData < bU.fL - 5 && ac.f4(ac.yk(yE, spawningData)) && function(yE, yF) {
								var gh, ys, yr;
								for (yr = yF; yF - 6 < yr; yr--)
									for (ys = yE; yE - 6 < ys; ys--)
										if (gh = ac.yk(ys, yr), ac.jf(gh)) return;
								return 1
							}(yE + 3, spawningData + 3)) return yG(yE + 1, spawningData + 1), 1;
						return
					}()) {
					if (!yD()) {
						for (var fT = aD.yH = y6; fT < yC; fT++) y6 = fT, y8();
						return
					}
					var yE = y3 + sl * y2 + bN.fa(y2, 2),
						yF = y4 + sm * y2 + bN.fa(y2, 2);
					yG(yE, yF)
				}
		})(), bf.n0[7] = ag.gx[aD.et]
	}, this.z1 = function(jd, z2, z3) {
		var aB, yE, yF, gh, sl, sm;
		for (y6 = jd, aB = 0; aB < 20; aB++)
			for (yE = z2 + aB; z2 - aB <= yE; yE--)
				for (yF = z3 + aB; z3 - aB <= yF; yF--)
					if ((yE === z2 + aB || yE === z2 - aB || yF === z3 + aB || yF === z3 - aB) && 3 < yE && yE < bU.fK - 5 && 3 < yF && yF < bU.fL - 5 && ac.f4(ac.yk(yE, yF)) && function(yE, yF) {
							var gh, ys, yr;
							for (yr = yF; yF - 6 < yr; yr--)
								for (ys = yE; yE - 6 < ys; ys--)
									if (gh = ac.yk(ys, yr), ac.jf(gh) && !ac.z9(y6, gh)) return;
							return 1
						}(yE + 3, yF + 3)) {
						if (0 < ag.gx[y6]) {
							for (sm = sl = gh = void 0, sl = ag.j3[y6]; sl >= ag.j2[y6]; sl--)
								for (sm = ag.j5[y6]; sm >= ag.j4[y6]; sm--) gh = 4 * (sm * bU.fK + sl), ac.z6(y6, gh) && (ac.z7(gh), ag.gx[y6]--);
							y8()
						}
						return yv(yE - 1, yF - 1), !0
					} return !1
	}, this.z8 = function(jd) {
		y6 = jd, yD() ? yG(y3 + sl * y2 + bN.fa(y2, 2), y4 + sm * y2 + bN.fa(y2, 2)) : y8()
	}
}

function zA() {
	at.zB(), vg.setTransform(iK, 0, 0, iK, 0, 0), vg.imageSmoothingEnabled = iK < 3, vg.drawImage(bU.xe, aS.zC(), aS.zD()), bR.zE.vf(), vg.drawImage(zF, aS.zC(), aS.zD()), at.vf(), bP.vf(), af.vf(), (aD.nY ? (bj.vf(), bE) : (aN.vf(), aV.vf(), aR
	.vf(), bE.vf(), aw.vf(), aW.vf(), aS.vf(), aQ.vf(), bj.vf(), aU.vf(), aP.vf(), aM.vf(), aL.vf(), aX.vf(), bg.vf(), av)).vf(), t.vf()
}

function zG(zH, i, j) {
	zH.clearRect(0, 0, i, j), zH.fillStyle = bD.o2, zH.fillRect(0, 0, i, j)
}

function zI(zH, i, j, zJ) {
	zH.fillStyle = bD.o5, zH.fillRect(0, 0, i, zJ), zH.fillRect(0, 0, zJ, j), zH.fillRect(i - zJ, 0, zJ, j), zH.fillRect(0, j - zJ, i, zJ)
}

function zK(zH, fG, fI, i5, zJ, gh, zL) {
	zH.fillStyle = bD.o5;
	var gh = Math.floor(i5 * gh),
		tS = (gh += (gh - zJ) % 2, Math.floor((gh - zJ) / 2)),
		i5 = Math.floor((i5 - gh) / 2);
	zH.fillRect(fG + i5, fI + i5 + tS, gh, zJ), zL && zH.fillRect(fG + i5 + tS, fI + i5, zJ, gh)
}

function zN() {
	this.dh = function() {
		8 === aD.km && aN.zO()
	}, this.zP = function(zQ) {
		var elo = aD.data.elo,
			jj = (elo[zQ] - elo[1 - zQ]) / 10,
			jj = 8 / (1 + Math.pow(2, jj / 32)),
			jj = Math.floor(10 * jj + .5),
			zS = elo[zQ] + jj,
			zT = this.zU(zS),
			elo = this.zU(elo[1 - zQ] - jj),
			jj = (0 === zQ ? aN.zW(zT, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zW(elo, zT, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zS * bN.sqrt(zS) >> 8),
			elo = ((1 + aD.zZ) * jj / 100).toFixed(2);
		zQ === aD.et ? aN.za(640, L(27, [elo]), 40, 0, bD.o5, bD.o2, -1, !1) : aN.za(640, L(28, [ag.zb[zQ], elo]), 40, 0, bD.o5, bD.o2, -1, !1)
	}, this.zU = function(elo) {
		return 16e3 === (elo = bN.iH(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ch() {
	this.sI = new zc, this.xh = new zd
}

function zd() {
	this.hv = !1;
	this.zh = [], this.zi = 100;
	var nV, nW, gap, i5, ze, zg, zj = 0,
		zk = new Array(9),
		zl = [],
		zm = [],
		zn = 0,
		zo = 0,
		zp = 0,
		zq = 0;

	function a02() {
		zk.sort(function(fS, fT) {
			return fT.kZ - fS.kZ
		});
		for (var qj = "" + zk[0].pl, aB = 1; aB < 9; aB++) qj += "," + zk[aB].pl;
		for (aB = 0; aB < 9; aB++) qj += "," + zk[aB].kZ;
		bl.eU.wB(120, qj)
	}
	this.dh = function() {
		for (var zr = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zr.length; aB++) {
			var color = 6 === zr[aB] ? bD.oV : bD.o3;
			this.zh.push(bC.canvas.zs(ab.get(3), zr[aB], color))
		}
		for (aB = 0; aB < aj.sI.zt; aB++) zm.push(aj.sI.zu - aj.sI.zt + aB);
		for (aB = 0; aB < aj.sI.zv; aB++) zm.push(aj.sI.zw + aB);
		var zx = aj.sI.zy(bM.zx);
		for (aB = 0; aB < zx.length; aB++) zm.push(zx[aB]);
		! function() {
			var aB, g = bl.eU.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zk[aB] = {
					pl: 1015 + aB,
					kZ: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fb = parseInt(g[aB]),
						eh = (fb = 0 <= fb && fb < aj.sI.zu ? fb : 0, parseInt(g[aB + 9]));
					eh = 0 <= eh && eh < 1e3 ? eh : 0, zk[aB] = {
						pl: fb,
						kZ: eh
					}
				}
		}()
	}, this.show = function(lj, lk, a03) {
		var aB;
		if (zn = lj, zo = lk, zj = a03 || 0, this.hv = !0, zl = [], 0 === zj)
			for (aB = 0; aB < 9; aB++) zl.push(zk[aB].pl);
		else {
			var fT = 49 * zj,
				a03 = fT - 49;
			for (a03 >= zm.length && (zj = 1, a03 = 0, fT = 49), aB = a03 = (fT = Math.min(fT, zm.length)) - 49; aB < fT; aB++) zl.push(zm[aB])
		}
		zl.push(1024);
		a03 = zl.length, i5 = Math.floor((a0.a1.iI() ? .075 : .0468) * h.iJ), gap = Math.floor(i5 / 3), (zp = 10 * (ze = i5 + gap)) > h.i && (zp = h.i, gap = (ze = zp / 10) - (i5 = 3 * ze / 4)), zg = bN.fa(a03, 10) + !!(a03 % 10), (zq = zg *
			ze) > h.j && (zq = h.j, gap = (ze = zq / zg) - (i5 = 3 * ze / 4)), a03 = .5 * gap;
		nV = Math.min(Math.max(lj - .5 * zp + a03, a03), h.i - zp + a03), nW = Math.min(Math.max(lk - .5 * zq + a03, a03), h.j - zq + a03)
	}, this.hM = function(lj, lk, player) {
		if (!this.hv) return !1;
		if (this.a05(lj, lk)) {
			lj = bN.iH(bN.fa(lj - nV + .5 * gap, ze), 0, 9);
			if ((lj += 10 * bN.iH(bN.fa(lk - nW + .5 * gap, ze), 0, 9)) >= zl.length) return aL.sJ(), !0;
			lk = zl[lj];
			if (1024 === lk) return this.show(zn, zo, zj + 1), !0;
			! function(pl) {
				for (var aB = 0; aB < 9; aB++) zk[aB].kZ = Math.floor(.99 * zk[aB].kZ);
				for (aB = 0; aB < 9; aB++)
					if (pl === zk[aB].pl) return zk[aB].kZ = Math.min(zk[aB].kZ + 30, 999), a02();
				zk.splice(5, 0, {
					pl: pl,
					kZ: Math.max(zk[4].kZ, 30)
				}), zk.pop(), a02()
			}(lk), player === aD.et ? bA.hZ.pk(lk) : bA.gV.pz(lk, player)
		}
		return aL.sJ(), !0
	}, this.a05 = function(lj, lk) {
		return !(lj < nV - .5 * gap || lk < nW - .5 * gap || nV + zp - .5 * gap <= lj || nW + zq - .5 * gap <= lk)
	}, this.vf = function() {
		vg.fillStyle = bD.o2, vg.fillRect(nV - .5 * gap, nW - .5 * gap, zp, zq);
		for (var i1 = .5 * be.a06, f9 = (vg.lineWidth = be.a06, vg.strokeStyle = vg.fillStyle = bD.o5, vg.strokeRect(nV - .5 * gap + i1, nW - .5 * gap + i1, zp - 2 * i1, zq - 2 * i1), vg.imageSmoothingEnabled = !0, zl.length), aB = 0; aB <
			f9; aB++) this.a07(zl[aB], vg, nV + aB % 10 * ze, nW + bN.fa(aB, 10) * ze, i5);
		vg.imageSmoothingEnabled = !1
	}, this.a07 = function(pl, iB, fG, fI, i5) {
		var en;
		pl >= 1024 - aj.sI.zt ? (en = i5 / this.zi, iB.setTransform(en, 0, 0, en, fG, fI), iB.drawImage(this.zh[pl - 1024 + aj.sI.zt], 0, 0), iB.setTransform(1, 0, 0, 1, 0, 0)) : (bC.r2.textAlign(iB, 1), bC.r2.textBaseline(iB, 1), iB.font = bC.r2
			.sr(0, .89 * i5), iB.fillText(aj.sI.a08(pl), fG + .5 * i5, fI + (.35 - bC.r2.a09 + .56) * i5))
	}
}

function zc() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zt = 13, this.zv = this.emojis.length, this.zw = 676, this.zu = 1024, this.a0A = this.emojis.indexOf("💀"), this.a0B = this.a0A + 1, this.a0C = this.emojis.indexOf("🥇"), this.a0D = this.emojis.indexOf("😊"), this.a08 = function(fb) {
		return fb < this.zw ? String.fromCharCode(55356, 56806 + bN.fa(fb, 26), 55356, 56806 + fb % 26) : this.emojis[Math.min(fb - this.zw, this.zv - 1)]
	}, this.zy = function(qj) {
		for (var f9 = qj.length - 2, g = [], aB = 0; aB < f9; aB++) {
			var a0E = qj.charCodeAt(aB) - 56806,
				a0F = qj.charCodeAt(aB + 2) - 56806;
			0 <= a0E && a0E < 26 && 0 <= a0F && a0F < 26 && (g.push(26 * a0E + a0F), aB += 3)
		}
		return g
	}, this.a0G = function(fb) {
		return fb < this.zw
	}, this.a0H = function(fb) {
		return fb >= 1024 - this.zt
	}, this.a0I = function(fb) {
		return fb >= this.zw && fb < this.zw + this.a0B
	}
}

function c5() {
	this.tN = new a0J, this.x5 = new a0K, this.x7 = new a0L, this.dh = function() {
		this.tN.dh()
	}
}

function a0K() {
	this.xK = function(qj) {
		for (var f9 = qj.length, i = bF, aB = 0; aB < f9; aB++) i.a8(16, qj.charCodeAt(aB))
	}
}

function a0J() {
	var a0M = new Uint8Array(64);
	this.dh = function() {
		var aB;
		for (a0M[0] = 45, a0M[37] = 95, aB = 0; aB < 10; aB++) a0M[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a0M[aB + 11] = 65 + aB, a0M[aB + 38] = 97 + aB
	}, this.tP = function(a0N) {
		for (var xA = bJ, xI = new Uint8Array(a0N), aB = 0; aB < a0N; aB++) xI[aB] = xA.qA(6);
		return xI
	}, this.tO = function(xI) {
		for (var f9 = xI.length, a0O = a0M, g = [], aB = 0; aB < f9; aB++) g.push(String.fromCharCode(a0O[xI[aB]]));
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
		for (var fS = aB - 1; 0 <= fS; fS--) a0T[aB] += a0S[fS] - a0R[fS]
	}

	function a0Z(eh) {
		for (var aB = a0R.length - 1; 0 <= aB; aB--)
			if (eh >= a0R[aB] && eh < a0S[aB]) return aB;
		return -1
	}
	this.xB = function(qj) {
		return 0 !== (qj = qj.trim()).indexOf("Bot ") && 0 !== qj.indexOf("[Bot] ") && function(qj, a0W, a0X) {
			var f9 = (qj = qj.trim()).length;
			if (f9 < a0W || a0X < f9) return !1;
			for (var eh, a0Y = 0, aB = 0; aB < f9; aB++)
				if (eh = qj.charCodeAt(aB), a0Y += 65 <= eh && eh <= 90 || 1040 <= eh && eh <= 1071 ? 1 : 0, -1 === a0Z(eh)) return !1;
			if (3 < a0Y && a0Y > Math.floor(f9 / 2)) return !1;
			return !0
		}(qj, 3, 20)
	}, this.a0a = function(qj) {
		for (var f9 = (qj = qj.trim()).length, g = [], aB = 0; aB < f9; aB++) {
			var eh, gh = a0Z(eh = qj.charCodeAt(aB));
			g.push(a0T[gh] + eh - a0R[gh])
		}
		return g
	}, this.xP = function(g) {
		for (var eh, fT, qj = "", f9 = g.length, aB = 0; aB < f9; aB++)
			for (fT = 1; fT < a0T.length; fT++)
				if (g[aB] < a0T[fT]) {
					eh = a0R[fT - 1] + g[aB] - a0T[fT - 1], qj += String.fromCharCode(eh);
					break
				} return qj
	}, this.a0b = function(qj) {
		for (var g = this.a0a(qj), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0c = function(qj) {
		for (var g = new Array(Math.floor(qj.length / 3)), aB = 0; aB < qj.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qj.substring(aB, aB + 3));
		return this.xP(g)
	}, this.a0d = function(qj) {
		for (var fb, g = [qj.length], aB = 0; aB < qj.length; aB++) g[aB] = qj.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qj.length; aB++) aB === qj.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fb = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fb + (fb < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0e = function(qj) {
		for (var eh, result = "", aB = 0; aB < qj.length; aB++) 48 <= (eh = qj.charCodeAt(aB)) && eh < 58 ? result += String.fromCharCode(eh) : 65 <= eh && eh < 75 ? result += "0" + (eh - 65).toString() : 75 <= eh && eh < 91 ? result += (eh - 65)
			.toString() : 97 <= eh && eh < 123 && (result += (eh - 71).toString());
		return result
	}, this.a0f = function(qj) {
		for (var f9 = qj.length, g = [], aB = 0; aB < f9; aB++)(eh = qj.charCodeAt(aB)) < 58 ? g.push(qj[aB]) : (eh -= eh < 91 ? 65 : 71, g.push(String(bN.fa(eh, 10))), g.push(String(eh - 10 * bN.fa(eh, 10))));
		var f9 = g.length - 2,
			eh = 0,
			xI = [];
		for (aB = 0; aB < f9; aB += 3) xI[eh++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return xI
	}, this.a0g = function() {
		for (var eF, a0h = "", aB = 0; aB < 6; aB++) eF = 48 + ay.random() % 36, eF += 58 <= eF ? 39 : 0, a0h += String.fromCharCode(eF);
		return a0h
	}
}

function a0L() {
	this.a0a = function(qj, xy, a0i) {
		for (var a0j = [], f9 = qj.length, max = 0, aB = 0; aB < f9; aB++) {
			var fb = qj.charCodeAt(aB);
			a0j.push(fb), max = Math.max(max, fb)
		}
		var xz = max < 128 ? 7 : 16;
		for (a0i.a8(xy, f9), a0i.a8(1, +(16 == xz)), aB = 0; aB < f9; aB++) a0i.a8(xz, a0j[aB])
	}
}

function dE() {
	this.a0k = new a0l, this.result = new a0m, this.a0n = new a0o, this.a0p = new a0q, this.a0r = new a0s, this.a0t = new a0u, this.dh = function() {
		this.result.dh()
	}
}

function a0o() {
	this.a0v = function() {
		for (var f9 = al.l0, a0w = al.l5, a0x = [], aB = 0; aB < f9; aB++) {
			var gh = a0w[aB];
			bC.gV.a0y(gh) && a0x.push(gh)
		}
		return a0x
	}, this.a0z = function() {
		if (0 === bi.kr[aD.a10]) return this.a11();
		bj.kV(aD.a10);
		for (var a0x = [], f9 = bQ.fe[0], fn = bQ.fn, aB = 0; aB < f9; aB++) {
			var gh = fn[aB];
			bC.gV.a0y(gh) && a0x.push(gh)
		}
		return a0x
	}, this.a11 = function() {
		var gh = m5[0];
		return bC.gV.a0y(gh) ? [gh] : []
	}, this.a12 = function(a0x) {
		for (var f9 = a0x.length, eY = 0, gx = ag.gx, aB = 0; aB < f9; aB++) eY += gx[a0x[aB]];
		return eY
	}
}

function a0l() {
	function a14() {
		if (2 === aD.a18) return 1;
		aw.a19(), aD.a18 = 2, aD.a1A = aD.a1B
	}

	function a16() {
		bT.a0r.a1C(), aX.show(1 === aD.a1D, !1, 2 === aD.a1D), bT.result.a1C(), bT.a0t.ec(), bT.a0p.ec(), bT.a0p.a1E(), aN.a1F(!0), aN.a1G(247), aN.a1G(956), aN.a1G(957), aV.mq(!0), aW.mq(!0), aw.mq(), bE.a1H(), aD.hI && bh.a1I.a1J(), bh.dp = !0, bd
			.a1K(), a0.a1.setState(0)
	}
	this.a13 = function() {
		a14() || (aD.a15 = 2, a16())
	}, this.a17 = function() {
		a14() || (aD.a15 = 1, a16())
	}
}

function a0q() {
	this.ec = function() {
		var a1S;
		2 === aD.a15 ? (aN.a1L(0, 59), aH.ne(2700)) : aD.km < 7 ? (a1S = bi.kr[aD.a10], a1S = bi.a1U[a1S], aQ.a1V(L(29, [a1S]), 2, 1, 12), aN.za(0, L(30, [a1S]), 40, 0, bD.o5, bD.o2, -1, !1), aH.ne(2700)) : 8 === aD.km ? (aD.a1D ? aN.a1L(aD.a1Q,
			2) : aN.a1L(1 - aD.et, 3), aD.a1R.zP(aD.a1Q), aH.nQ(aD.a1Q, 2700, !1, 0)) : 9 === aD.km ? (aN.a1W(), aH.ne(2700)) : (aN.a1X(aD.a1Q), aH.nQ(aD.a1Q, 2700, !1, 0))
	}, this.a1E = function() {
		var qj;
		aD.hI || aD.ko || (qj = b0.y.a1Y(), aD.km < 7 ? qj += "/log/team" : 8 === aD.km ? qj += "/log/1v1" : 9 === aD.km ? qj += "/log/zombies" : qj += "/log/br", aN.za(720, qj, 736, 0, bD.o5, bD.oT, -1, !1))
	}
}

function a0u() {
	function a1i() {
		var ti;
		return 8 === aD.km ? 0 : (ti = Math.floor(ag.a1j[aD.et] / 50), (ti = Math.min(ti, 200)) / 100)
	}

	function a1a() {
		var ti = a1i();
		0 !== ti && aN.za(440, L(31, [ti.toFixed(2)]), 40, 0, bD.oN, bD.o2, -1, !1)
	}
	this.ec = function() {
		var a1b;
		0 === bT.result.a1Z || 0 === bT.result.a0x.length || 8 === aD.km ? bC.gV.hL(aD.et) && a1a() : (function(a1b) {
			7 !== aD.km && 10 !== aD.km || 0 !== aD.a1D && a1b && aN.za(600, L(35, [a1b.toFixed(2)]), 40, 0, bD.o5, bD.o2, -1, !1)
		}(a1b = function() {
			aN.za(520, L(32), 40, 0, bD.o5, bD.o2, -1, !1);
			for (var a0x = bT.result.a0x, f9 = a0x.length, gx = ag.gx, g = [], aB = 0; aB < f9; aB++) {
				var gh = a0x[aB];
				g.push({
					gh: gh,
					eY: gx[gh]
				})
			}
			g.sort((fS, fT) => fT.eY - fS.eY);
			var a1U = ag.zb,
				eY = bT.result.a1k,
				ti = bT.result.a1Z,
				qj = "",
				a1b = 0;
			for (aB = 0; aB < f9; aB++) {
				var ht = g[aB].eY * ti / (100 * eY),
					a1m = a1U[g[aB].gh] + ": " + ht.toFixed(2) + "   ";
				g[aB].gh === aD.et && (a1b = ht), 2 < aB && 4 !== f9 ? 3 === aB && (qj += "(" + L(33, [f9 - 3]) + ")") : qj += a1m
			}
			aN.za(560, bC.s1.a1n(qj), 40, 0, bD.oN, bD.o2, -1, !1), a1b ? aN.za(580, L(34, [a1b.toFixed(2) + " + " + a1i().toFixed(2)]), 40, 0, bD.oN, bD.o2, -1, !1) : bC.gV.hL(aD.et) && a1a();
			return a1b
		}()), 2 === aD.a15 || 7 <= aD.km || function(a1b) {
			var a0x = bT.result.a0x,
				f9 = a0x.length,
				a1o = ag.a1o,
				gx = ag.gx,
				a1p = [];
			loop: for (var aB = 0; aB < f9; aB++) {
				var gh = a0x[aB],
					a1q = bC.s1.a1r(a1o[gh]);
				if (null !== a1q) {
					for (var a1s = gx[gh], fT = a1p.length - 1; 0 <= fT; fT--)
						if (a1q === a1p[fT].name) {
							a1p[fT].eY += a1s, a1p[fT].g.push({
								gh: gh,
								eY: a1s
							});
							continue loop
						} a1p.push({
						name: a1q,
						eY: a1s,
						g: [{
							gh: gh,
							eY: a1s
						}]
					})
				}
			}
			if (0 !== a1p.length) {
				a1p.sort((fS, fT) => fT.eY - fS.eY);
				var g = a1p[0].g,
					a1t = (g.sort((fS, fT) => fT.eY - fS.eY), "[" + a1p[0].name + "]"),
					a1u = 512 * bT.result.a1Z / 26214400,
					lP = (aN.za(0, L(36, [a1t, a1u.toFixed(4)]), 40, 0, bD.o5, bD.o2, -1, !1), g.length),
					xG = a1p[0].eY,
					a1v = 1e4 * a1u;
				for (aB = 0; aB < lP; aB++)
					if (g[aB].gh === aD.et) {
						aN.za(600, L(37, [(a1v * g[aB].eY / (10 * xG)).toFixed(2)]), 40, 0, bD.o5, bD.o2, -1, !1), aN.za(640, L(38, [(.2 * a1b).toFixed(2), a1t]), 40, 0, bD.o5, bD.o2, -1, !1);
						break
					}
			}
		}(a1b))
	}, this.a1f = function() {
		var a1g, xi;
		aD.ko || (a1g = ag, xi = aD.et, 0 === a1g.a1h[xi]) || a1g.jY[xi] < 1 || 2 * a1g.qR[xi] > 3 * (a1g.jX[xi] + a1g.jY[xi]) || a1a()
	}
}

function a0m() {
	this.dh = function() {
		this.a1w = 0, this.a0x = [], this.a1k = 0, this.a1Z = 0
	}, this.a1C = function() {
		var sc;
		aD.ko || (sc = this, 2 === aD.a15 ? sc.a0x = bT.a0n.a0v() : aD.i3 ? sc.a0x = bT.a0n.a0z() : sc.a0x = bT.a0n.a11(), sc.a1w = bk.a1y.a1z(), sc.a1k = Math.max(1, bT.a0n.a12(sc.a0x)), bA.gV.q8(), 8 === aD.km ? bT.result.a1Z = 0 : sc.a1Z =
			100 * bT.result.a1w * (1 + aD.zZ))
	}
}

function a0s() {
	this.a1C = function() {
		if (2 === aD.a15) aD.a1D = 2;
		else {
			if (8 === aD.km) bC.gV.jr(0) || 0 === ag.n4[0] ? aD.a1Q = 1 : bC.gV.jr(1) || 0 === ag.n4[1] ? aD.a1Q = 0 : aD.a1Q = +(ag.gx[1] > ag.gx[0]);
			else {
				if (aD.i3) {
					var l2 = bj.a22();
					if (aD.a10 = l2, bi.kr[l2]) return void(aD.a1D = +(bi.f7[aD.et] === l2))
				}
				aD.a1Q = m5[0]
			}
			aD.a1D = +(aD.a1Q === aD.et)
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
		bl.pW.wm(), bl.pW.wn(), b0.y.close(0, 3255), 0 === a0.id ? a0.wO && a0.wO.clear() : 1 === a0.id ? a0.wP.saveString(199, "") : 2 === a0.id && a0.wW.postMessage("clear")
	}, this.a28 = function() {
		2 === a0.id ? a0.wW.postMessage("showConsentForm") : 1 === a0.id && a0.wP.setState(7)
	}, this.a29 = function() {
		this.setState(14)
	}, this.iI = function() {
		return 1 === bl.eU.wC(2)
	}, this.a2A = function() {
		bl.eU.wB(102, "")
	}, this.setState = function(a2B) {
		1 === a0.id && 5 <= a0.e0 && a0.wP.setState(a2B)
	}, this.a2 = function() {
		var a2C;
		1 === a0.id && 7 <= a0.e0 ? a0.wP.setState(5) : ((a2C = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2C.toString())
	}, this.eS = function() {
		0 !== a0.id && (1 === a0.id ? a0.wP.prepareAd("8646194357") : 2 === a0.id && (0 === a0.e0 ? a0.wW.postMessage("prepare ad 2904813909") : a0.wW.postMessage("loadAds 2904813909")))
	}, this.eZ = function(eY) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.e0 && (a0.wP.presentAd(eY), !0) : 2 === a0.id && 0 !== a0.e0 && (a0.wW.postMessage("showAd"), !0))
	}, this.dr = function() {
		2 === a0.id && a0.e0 < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bM.a2D + "' target='_blank'>" + bM
			.a2D + "</a>", !0, [new w("⬅️ " + L(39), function() {
				t.u(0)
			}, bD.ol)]))
	}
}

function dY() {
	function a2G(e) {
		lo(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(39), function() {
				t.a2J()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bD.oS)]))
	}

	function a2U(e) {
		lo(e), t.u(4, 5, new v(L(40), a2Q(e), !0))
	}

	function a2Q(e) {
		var qj = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + qj : 4527 === e ? "Player already in lobby" + qj : 4577 === e ? "Your IP is banned." + qj : 4530 === e ? "Lobby Timeout" + qj : 4528 === e ?
			"Lobby Kick: Another login detected." + qj : 4540 === e ? "You have been kicked." + qj : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qj : 4555 === e ?
			"Invalid Account Error. Please Try Again." + qj : 4557 <= e && e <= 4560 ? "Please try again later!" + qj : "Unknown error" + qj
	}

	function lo(e) {
		a2L(e), t.y.z()
	}

	function a2L(e) {
		var a2B = aa.a2K();
		6 === a2B ? b0.y.a2W(e) : bp.a2H ? (t.x(), bp.uk(), b0.y.close(b0.y.a2I, 3256)) : 8 === a2B && aD.a2X(!0)
	}
	this.p = [], this.a2E = function(a2F, e) {
		if (this.p.push(e), 8 === t.tK && 0 === a2F)
			if (4211 === e) a2G(e);
			else {
				if (bp.a2H && (4495 === e || 4480 === e) && b0.y.a2I !== a2F) return void t.a2J();
				if (8 !== aa.a2K() && a2L(), 4480 === e) return bl.pW.wo(), void t.u(4, 0, new v(L(42), L(43), !0));
				var a2N = 0;
				t.a2O() && 10 === t.a2O().a2P && (a2N = t.a2O().a2P), t.u(4, a2N, new v(L(40), a2Q(e), !0))
			}
		else {
			a2N = aa.a2K();
			if (6 === a2N) {
				if (4211 === e) return void a2G(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aZ.a2R(a2F)
			} else {
				if (!bp.a2H) return 8 === a2N ? void(a2F !== b0.y.a2S || aD.ko || 1 !== aD.a18 || aD.hI || aN.a2T(L(41, [e]))) : void 0;
				if (a2F !== b0.y.a2I) return
			}
			a2U(e)
		}
	}, this.a2V = function(e) {
		this.p.push(e), 8 === aa.a2K() ? aD.ko || 1 !== aD.a18 || aN.a2T(L(41, [e])) : a2U(e)
	}, this.s = function() {
		this.p.push(3268), lo(3268)
	}
}

function d8() {
	var a2Y, a2Z, a2a = -15e3,
		a2b = !1;

	function hM(e) {
		a2v() || (a2b = !0, a2w(e, 1), b0.y.a2x(b0.y.a2S), a2y(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2k(e) {
		a2a = bh.eX, a2w(e, 1), b0.y.a2x(b0.y.a2S), 0 < e.touches.length && (a2Y = Math.floor(h.k * e.touches[0].clientX), a2Z = Math.floor(h.k * e.touches[0].clientY), au.a2k(e) || a2y(a2Y, a2Z))
	}

	function a2y(fG, fI) {
		t.hM(fG, fI), 0 === aD.a18 ? aa.hM(fG, fI) : bE.a2z(fG, fI) || bg.hM(fG, fI) || aX.hM(fG, fI) || aL.a30(fG, fI) || aP.hM(fG, fI) || 0 <= aM.hM(fG, fI) || aw.hM(fG, fI) || bL.a31(fG, fI) || aL.a32(fG, fI)
	}

	function a2g(e) {
		a2v() || (a2b = !0, a2w(e, 1), a33(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2l(e) {
		a2a = bh.eX, a2w(e, 1), 0 < e.touches.length && (a2Y = Math.floor(h.k * e.touches[0].clientX), a2Z = Math.floor(h.k * e.touches[0].clientY), au.a2l(e) || a33(a2Y, a2Z))
	}

	function a33(fG, fI) {
		bL.rU() || (bL.hE = fG, bL.hF = fI), t.a2g(fG, fI), 0 === aD.a18 ? aa.a2g(fG, fI) : (bV.hG(fG, fI), bg.a2g(fG, fI) || (aM.a2g(fG, fI), aL.hv() ? aL.a2g(fG, fI) : aR.hN ? aR.a2g(fG) && (bh.dp = !0) : (aV.a2g(fG, fI), aS.na && aS.a2g(fG, fI) &&
			(bh.dp = !0))))
	}

	function a2i(e) {
		a2v() || (a2w(e, 1), a34(), 0 === aD.a18 ? (aa.click(-1024, -1024), aT.s3()) : (aV.a35(-1024, -1024), aM.a2g(-1024, -1024), aR.a36(), aS.na = !1))
	}

	function a2h(e) {
		a2v() || (a2w(e, 1), a37(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bL.a2e && (bL.a2e = !1, e.preventDefault()))
	}

	function click(e) {
		a2v() || a2w(e, 1)
	}

	function a2m(e) {
		a2a = bh.eX, a2w(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a18 ? aS.na = !1 : au.a38() || (a37(a2Y, a2Z, !1), bL.a2e && (bL.a2e = !1, e.preventDefault()))
	}

	function a2n(e) {
		a2a = bh.eX, a2w(e, 1), a37(a2Y, a2Z, !1), bL.a2e && (bL.a2e = !1, e.preventDefault())
	}

	function a2o(e) {}

	function a2p(e) {}

	function a2q(e) {
		a2v() || a2w(e, 0)
	}

	function a37(fG, fI, a39) {
		a34(), 0 === aD.a18 ? aa.click(fG, fI) : (aV.a35(fG, fI), bg.a35(), aR.a36(), aS.na = !1, aL.click(fG, fI, a39) ? bh.dp = !0 : aM.a2h(fG, fI))
	}

	function a34() {
		t.a34()
	}

	function a2j(e) {
		var fG, fI, deltaY;
		a2v() || (a2w(e, 1), b0.y.a2x(b0.y.a2S), fG = Math.floor(h.k * e.clientX), fI = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2j(fG, fI, deltaY), 0 === aD.a18 ? aa.a2j(fG, fI, deltaY) : aV.a2j(fG, fI,
			deltaY) || (aR.a3A(fG, fI) ? aR.a2j(deltaY) && (bh.dp = !0) : aS.a2j(fG, fI, deltaY)))
	}

	function a2r(e) {
		a2w(e, 0)
	}

	function a2w(e, id) {
		0 === id && t.hv() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a2K() && e.preventDefault()
	}

	function a2s(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2v() || 0 < h.sz || (e = e.code) && e.length && (bZ.eh(e, 18) ? ar.a3C(3) : bZ.eh(e, 22) ? ar.a3C(0) : bZ.eh(e, 20) ? ar.a3C(1) : bZ.eh(e, 24) ? ar.a3C(2) : bZ.eh(e, 10) ? aR.a3D(31 / 32) : bZ.eh(e, 8) ? aR.a3D(32 / 31) : bZ.eh(e, 6) ? aR
			.a3D(7 / 8) : bZ.eh(e, 4) ? aR.a3D(8 / 7) : bZ.eh(e, 14) ? 0 !== aD.a18 && aS.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bZ.eh(e, 16) ? 0 !== aD.a18 && aS.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bZ.eh(e, 0) ?
			aD.a18 && bV.hH(0) : bZ.eh(e, 2) ? aD.a18 && bV.hH(1) : bZ.eh(e, 30) ? aD.a18 && bV.hH(2) : bZ.eh(e, 26) ? aD.a18 && bV.hp() : bZ.eh(e, 28) && aD.a18 && bV.hu())
	}

	function a2t(e) {
		if (!a2v() && !(0 < h.sz || bh.eX < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a3E(1) || "Space" === code && t.a3E(0))) return bp.a2H ? bp.uq.a3E(code) ? void 0 : void("Escape" === code && bL.fc()) : void(8 !== aa.a2K() && aa.a3E(e) ? bh.dp = !0 : "Escape" ===
				code ? bL.fc() : bZ.eh(code, 18) ? ar.a3F(3) : bZ.eh(code, 22) ? ar.a3F(0) : bZ.eh(code, 20) ? ar.a3F(1) : bZ.eh(code, 24) ? ar.a3F(2) : bZ.eh(code, 12) ? bE.a3G(!aD.nY) : "Space" === code && aD.a18 && (aM.hJ && aM.a3H(), aD
					.hI) && bE.a3I(!1))
		}
	}

	function a2u() {
		"hidden" !== document.visibilityState && (bh.dp = !0)
	}

	function a2v() {
		return a2a + 15e3 > bh.eX
	}

	function resize() {
		h.a3K()
	}
	this.a2c = 0, this.a2d = "", this.a2e = !1, this.hE = 0, this.hF = 0, this.dh = function() {
		a2f.addEventListener("mousedown", hM, {
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
	}, this.a31 = function(fG, fI) {
		return !!bE.hM(fG, fI) || !!(aV.hM(fG, fI) || aS.hM(fG, fI) || aR.hM(fG, fI) || aN.hM(fG, fI))
	}, this.a3J = a2v, this.rU = function() {
		return !a2b || 0 < a2a
	}, this.fc = function() {
		if (!t.hv()) return 8 === aa.a2K() ? aD.nY ? void bE.a3G(!1) : bg.hv ? void bg.a3H() : void aM.a3H() : void(7 !== aa.a2K() && 6 === aa.a2K() && aZ.a3L());
		t.a3E(2)
	}
}

function c1() {
	this.r2 = new a3M, this.rA = new a3N, this.gV = new a3O, this.s1 = new a3P, this.zH = new a3Q, this.a3R = new a3S, this.canvas = new a3T, this.color = new a3U, this.a3V = new a3W, this.dh = function() {
		this.r2.wl()
	}
}

function a3N() {
	this.xg = function(g) {
		g.fill(0)
	}, this.a3X = function(g) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++) g[aB] = []
	}, this.a3Y = function(a0E, a3Z) {
		for (var a0F = bQ.fj, aB = 0; aB < 3; aB++) a0F[aB] = a3Z * a0E[aB];
		return a0F
	}, this.a3a = function(a0E, a0F, a3b) {
		for (var jj = 0, aB = 0; aB < 3; aB++) jj += Math.abs(a0E[aB] - a0F[aB]);
		return a3b <= jj
	}, this.a3c = function(a0E, a3d) {
		for (var aB = 0; aB < 3; aB++) a0E[aB] = bN.iH(a0E[aB] + a3d, 0, 255);
		return a0E
	}, this.a3e = function(g, te, tf) {
		tf = tf || g.length - 1;
		for (var a3f = 0, aB = te = te || 0; aB <= tf; aB++) a3f += g[aB];
		return a3f
	}, this.a3g = function(g, a3h) {
		for (var aB, a3i, f9 = g.length, a3j = [], fS = f9 - 1; 0 <= fS; fS--) {
			for (aB = a3i = 0; aB < f9; aB++) a3h(g[aB]) < a3h(g[a3i]) && (a3i = aB);
			f9--, a3j.push(g[a3i]), g[a3i] = g[f9], g.pop()
		}
		return a3j
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
	}, this.a3k = function(g, fb) {
		for (var f9 = g.length, gc = 0, aB = 0; aB < f9; aB++) gc += g[aB] > fb;
		return gc
	}, this.a3l = function(a3m, a3n, min) {
		for (var f9 = a3n[0], aB = f9 - 1; 0 <= aB; aB--) a3m[aB] < min && (a3m[aB] = a3m[--f9]);
		a3n[0] = f9
	}, this.a3o = function(g, f9, value) {
		for (var aB = 0; aB < f9; aB++) g[aB] -= value
	}, this.a3p = function(g) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3q = function(qj, g, a3r) {
		g.fill(0);
		for (var ti = qj.split(","), f9 = Math.min(ti.length, g.length), aB = 0; aB < f9; aB++) g[aB] = Math.min(parseInt(ti[aB]), a3r)
	}, this.a3s = function(qj, g, ry) {
		g.fill("");
		for (var ti = qj.split('"'), f9 = Math.min(ti.length, 2 * g.length), i1 = 0, aB = 1; aB < f9; aB += 2) g[i1++] = ti[aB].slice(0, ry)
	}, this.a3t = function(g, gc) {
		if (0 === gc) g.fill(0);
		else {
			var a3f = this.a3e(g),
				f9 = g.length;
			if (0 === a3f) g.fill(bN.fa(gc, f9));
			else
				for (var aB = 0; aB < f9; aB++) g[aB] = bN.fa(gc * g[aB], a3f);
			if (0 === (a3f = this.a3e(g))) g[1] = gc;
			else
				for (var i1 = 0; a3f++ < gc;) g[i1 = (i1 + 1) % f9] && g[i1]++
		}
	}, this.a3u = function(g) {
		if (!g) return 0;
		var f9 = g.length;
		if (0 === f9) return 0;
		for (var fb = g[f9 - 1], aB = f9 - 2; 0 <= aB; aB--)
			if (g[aB] !== fb) return aB + 2;
		return 1
	}, this.a3v = function(g) {
		for (var a3f = 0, aB = 0; aB < g.length; aB++) a3f += g[aB].length;
		return a3f
	}, this.a3w = function(a3x) {
		for (var g = [], aB = 0; aB < a3x.length; aB++) g = g.concat(a3x[aB]);
		return g
	}, this.has = function(g, fb) {
		for (var f9 = g.length, aB = 0; aB < f9; aB++)
			if (g[aB] === fb) return !0;
		return !1
	}
}

function a3T() {
	this.zs = function(a3y, eG, a3z) {
		var i5 = a3y.height,
			a40 = bC.r2.xW(i5, i5),
			iB = bC.r2.getContext(a40);
		return function(i, iB, a3z) {
			iB.fillStyle = a3z, iB.beginPath(), iB.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), iB.fill()
		}(i5, iB, a3z), iB.drawImage(a3y, -eG * i5, 0), a40
	}, this.a42 = function(a43) {
		var iB, i8, i5 = a43.height;
		return a43.width === i5 && (i8 = (iB = bC.r2.getContext(a43, !0)).getImageData(0, 0, i5, i5), bC.a3R.a44(i8.data, i5, i5, .9), iB.putImageData(i8, 0, 0)), a43
	}
}

function a3U() {
	this.a45 = function(fb) {
		return [fb >> 12 & 63, fb >> 6 & 63, 63 & fb]
	}, this.a46 = function(fb) {
		for (var g = this.a45(fb), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a47 = function(fb) {
		fb = this.a46(fb);
		return bC.color.nx(fb[0], fb[1], fb[2])
	}, this.a48 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nx = function(eF, ti, fT) {
		return "rgb(" + eF + "," + ti + "," + fT + ")"
	}, this.nz = function(eF, ti, fT, fS) {
		return "rgba(" + eF + "," + ti + "," + fT + "," + fS.toFixed(3) + ")"
	}, this.rW = function(eh) {
		for (var g = eh.split("(")[1].split(","), fi = bQ.fi, aB = 0; aB < 3; aB++) fi[aB] = parseInt(g[aB]);
		return 4 === g.length ? fi[3] = 255 * parseFloat(g[3].slice(0, -1)) : fi[3] = 255, fi
	}, this.rX = function(a49, fC) {
		for (var g = a49.slice(a49.indexOf("(") + 1, a49.indexOf(")")).split(","), fi = bQ.fi, aB = 0; aB < 3; aB++) fi[aB] = bN.iH(parseInt(g[aB].trim(), 10) + fC, 0, 255);
		return 3 === g.length ? this.nx(fi[0], fi[1], fi[2]) : (a49 = parseFloat(g[3].trim()), this.nz(fi[0], fi[1], fi[2], a49 = 0 === a49 ? .3 : a49))
	}, this.vL = function(a4A, a4B) {
		for (var jj = 0, aB = 0; aB < 3; aB++) jj += Math.abs(a4B[aB] - a4A[aB]);
		if (!(240 <= jj))
			for (aB = 0; aB < 3; aB++) a4B[aB] = a4A[aB] + (a4A[aB] < 128 ? 80 : -80)
	}, this.a4C = function(g) {
		for (var qj = "#", aB = 0; aB < 3; aB++) {
			var eF = g[aB].toString(16);
			qj += 1 === eF.length ? "0" + eF : eF
		}
		return qj
	}, this.a4D = function(qj) {
		var eF, ti;
		return qj.length < 7 ? bD.nw : (eF = parseInt(qj.slice(1, 3), 16), ti = parseInt(qj.slice(3, 5), 16), qj = parseInt(qj.slice(5, 7), 16), this.nx(eF, ti, qj))
	}
}

function a3Q() {
	this.a4E = function(qj, font, maxWidth) {
		if (font && (vg.font = font), vg.measureText(qj).width <= maxWidth) return qj;
		for (var aB = qj.length - 1; 1 <= aB; aB--)
			if (qj = qj.substring(0, aB), vg.measureText(qj + "...").width <= maxWidth) return qj + "...";
		return "..."
	}
}

function a3W() {
	var a4G = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4H = function(eX) {
		var a4J, qj = new Date(eX.getTime() - 6e4 * eX.getTimezoneOffset()).toUTCString();
		return qj.length < 12 || (qj = qj.substring(5, qj.length), 0 === (eX = eX.getTimezoneOffset())) ? qj : (a4J = (eX < 0 ? "+" : "-") + bN.fa(Math.abs(eX), 60), 0 == (eX = Math.abs(eX) % 60) ? qj + a4J : qj + a4J + ":" + (eX < 10 ? "0" :
			"") + eX)
	}, this.a4K = function(eX) {
		var qj = eX.toUTCString();
		return qj.length < 12 ? qj : function(eX) {
			return a4G[eX.getUTCDay()]
		}(eX) + ", " + qj.substring(5, qj.length - 4)
	}
}

function a3M() {
	var a4M = null;
	this.a09 = 0, this.wl = function() {
		var fb = bl.eU.data[5].value;
		a4M = "px " + fb, "system-ui" !== fb && (a4M += ", system-ui"), this.a09 = i4(32, 32, ["a", "b", "m"], 200, a4M)
	}, this.xW = function(i, j) {
		var eh = document.createElement("canvas");
		return eh.width = i, eh.height = j, eh
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zH, i, j) {
		return zH.getImageData(0, 0, i, j)
	}, this.sr = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4M : 1 === type ? "bold " + size + a4M : 2 === type ? "lighter " + size + a4M : 3 === type ? "italic " + size + a4M : 4 === type ? "oblique " + size + a4M : 5 === type ? "small-caps " +
			size + a4M : "small-caps bold " + size + a4M
	}, this.textAlign = function(iB, id) {
		iB.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iB, id) {
		iB.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.rC = function(e, code, color) {
		color = this.rB(be.st) + " solid " + (color || bD.o5);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tk = function(e, fG, fI, i, j) {
		e = e.style;
		e.left = this.tl(fG), e.top = this.tl(fI), e.width = this.tl(i), e.height = this.tl(j)
	}, this.r3 = function(fb) {
		return 1 + fb * a0.a1.iI()
	}, this.sL = function(nh, gi) {
		return nh * this.r3(void 0 === gi ? .5 : gi) * h.iJ / h.k
	}, this.tj = function(nh, gi) {
		return nh * this.r3(void 0 === gi ? .5 : gi) * h.iJ
	}, this.tQ = function(nh, gi, a4N) {
		return this.r3(gi) * Math.min(nh * h.iJ, a4N * h.i) / h.k
	}, this.rB = function(fb) {
		return fb.toFixed(1) + "px"
	}, this.tl = function(fb) {
		return this.v6(fb).toFixed(1) + "px"
	}, this.v6 = function(fb) {
		return fb / h.k
	}, this.a4P = function(t8, a4Q) {
		for (var qj = "<ul>", f9 = t8.length, aB = 0; aB < f9; aB++) qj += "<li>" + t8[aB] + ": <a href='" + a4Q[aB] + "' target='_blank'>" + a4Q[aB] + "</a></li>";
		return qj += "</ul>"
	}, this.a4R = function(a4S) {
		return "<a href='" + a4S + "' target='_blank'>" + a4S + "</a>"
	}, this.a4T = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.vJ = function(e) {
		var eY = e.textContent;
		bC.s1.a4U(eY, "✔") || (1 === eY.length ? e.textContent = "✔" : e.textContent = eY + " ✔", setTimeout(function() {
			e.textContent = eY
		}, 500))
	}, this.measureText = function(qj) {
		return vg.measureText(qj).width
	}, this.ta = function(a4V) {
		a4V.style.overflowX = "auto", a4V.style.overflowY = "hidden", a4V.style.whiteSpace = "nowrap", a4V.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tn = this.scrollLeft, e.preventDefault())
		}), a4V.addEventListener("scroll", function() {
			this.tn = this.scrollLeft
		})
	}
}

function a3O() {
	this.hK = function(a2B) {
		return 0 === a2B ? 1 === aD.a18 && aD.hX : 1 === a2B ? 1 === aD.a18 && !aD.hX : 2 === aD.a18
	}, this.hL = function(player) {
		return 0 !== ag.n4[player] && 2 !== ag.a4W[player]
	}, this.a4X = function(player) {
		return player === aD.et && 2 !== ag.a4W[player]
	}, this.l8 = function(player, jd) {
		return player !== jd && (0 === bi.f7[player] || bi.f7[player] !== bi.f7[jd])
	}, this.mF = function() {
		return al.l0 < 2 ? 0 : aD.i3 ? 1 < bj.a4Y() : ag.gx[m5[1]]
	}, this.a4Z = function() {
		var l0 = al.l0;
		if (0 !== l0) {
			if (!aD.i3) return !this.jr(m5[0]);
			for (var f7 = bi.f7, l2 = bj.l3(), l5 = al.l5, aB = l0 - 1; 0 <= aB; aB--) {
				var gh = l5[aB];
				if (f7[gh] === l2 && !this.jr(gh)) return 1
			}
		}
		return 0
	}, this.a4a = function(player) {
		return player === aD.et
	}, this.a4b = function(jd, nh) {
		return ag.hB[aD.et] < nh * ag.hB[jd]
	}, this.jr = function(player) {
		return player >= aD.kU || 2 === ag.a4W[player]
	}, this.lS = function(player) {
		return 0 !== ag.n4[player]
	}, this.a0y = function(player) {
		return player < aD.kU
	}, this.qP = function(a4c, a4d) {
		return a4c !== a4d
	}, this.gY = function(player, fb) {
		var min;
		return fb = this.a4e(player, fb), ag.hB[player] += fb, ag.a4f[player] && (min = Math.min(ag.a4f[player], ag.hB[player]), ag.a4f[player] -= min, ag.hB[player] -= min), fb
	}, this.a4e = function(player, fb) {
		var a4g = ag.hB[player];
		return fb = Math.min(fb, ag.gx[player] * aD.a4h - a4g), fb = Math.min(fb, aD.a4i - a4g), Math.max(fb, 0)
	}, this.mc = function(player, il, a4j, a4k) {
		var a4g = ag.hB[player],
			il = bN.fa(a4g * (il + 1), 1024),
			a4j = bN.fa(a4j * a4g, 1024),
			il = Math.min(il, a4g - a4j);
		return 10 === aD.km && (il = b4.a4m(player, il)), bQ.fg[0] = il, bQ.fg[1] = a4j, a4k <= il
	}, this.pt = function(player, pb, pa) {
		var player = ag.hB[player],
			a4l = bN.fa(64 * player, 1024);
		return pb = Math.min(pb, player - a4l), pb = this.a4e(pa, pb), bQ.fg[0] = pb, bQ.fg[1] = a4l, 1 <= pb
	}, this.a4n = function(player, pb, pa) {
		var player = ag.hB[player],
			a4l = bN.fa(64 * player, 1024);
		return pb = Math.min(pb, player - a4l), this.a4e(pa, pb)
	}, this.pv = function(pb, pa) {
		return pb = this.a4e(pa, pb), bQ.fg[0] = pb, bQ.fg[1] = 0, 1 <= pb
	}, this.ik = function(player, a4o) {
		return bN.fa(ag.hB[player] * (a4o + 1), 1024)
	}, this.a4p = function(player, a4j) {
		a4j = bN.fa(a4j * ag.hB[player], 1024);
		bQ.fg[1] = a4j, ag.hB[player] -= a4j
	}, this.gW = function(player, a4q) {
		var fu, fw, fT = ag.hB[player];
		return a4q <= fT ? ag.hB[player] -= a4q : (ag.hB[player] = 0, fw = ag.a4f[player] + (fu = 5 * ((fT = a4q - fT) >> 2)), bf.gZ(player, fu - fT, 12), fw <= aD.a4r ? ag.a4f[player] = fw : (ag.a4f[player] = aD.a4r, bf.gZ(player, fw - aD.a4r,
			18))), a4q
	}, this.lg = function(player, il) {
		var hB = ag.hB,
			a4g = hB[player],
			il = bN.fa(a4g * (il + 1), 1024),
			a4l = Math.max(bN.fa(a4g, 10), 1e3);
		return (il = Math.min(il, a4g - a4l)) < 0 ? (hB[player] = 0, a4l = Math.min(1e3, a4g + aD.a4r - ag.a4f[player]), bQ.fg[1] = a4l, ag.a4f[player] += a4l - a4g, 0) : (bQ.fg[1] = a4l, 10 === aD.km && (il = b4.a4m(player, il)), hB[player] -=
			a4l + il, il)
	}, this.me = function(player) {
		ag.hB[player] -= bQ.fg[0] + bQ.fg[1]
	}, this.qQ = function(player, jd) {
		return (jd = Math.min(jd, aD.f6)) < aD.f6 && 0 === ag.n4[jd] && (jd = aD.f6), (bQ.f5[0] = jd) === aD.f6 || bu.f2(player, jd)
	}, this.qT = function(player, pa) {
		return 0 !== ag.n4[pa] && !bu.f2(player, pa)
	}, this.a4s = function(player, a4t) {
		for (var gh, f9 = al.l0, a4u = 0, a4v = m5, aB = 0; aB < f9; aB++)
			if (gh = a4v[aB], !this.jr(gh)) {
				if (player === gh) return !0;
				if (++a4u > a4t) return !1
			} return !1
	}, this.m1 = function(gh) {
		var a4w = aD.i3 ? bj.l1() : ag.gx[m5[0]];
		return a4w >= bN.fa(gh * aD.kE, 100)
	}, this.a4x = function(fb, min, max) {
		return Math.floor(bN.iH(isNaN(fb) ? 0 : Number(fb), min, max))
	}
}

function a3S() {
	this.a4y = function(canvas, a4z, a50) {
		var i = canvas.width,
			j = canvas.height,
			eh = bC.r2.xW(i, j),
			iB = bC.r2.getContext(eh, !0),
			canvas = (iB.drawImage(canvas, 0, 0), iB.getImageData(0, 0, i, j));
		return a4z(canvas.data, i, j, a50), iB.putImageData(canvas, 0, 0), eh
	}, this.a51 = function(xh, i, j) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xh[3 + aB] = xh[aB], xh[aB] = xh[1 + aB] = xh[2 + aB] = 255
			}
	}, this.a52 = function(xh, i, j) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xh[1 + aB] > xh[2 + aB] + 10 && (xh[3 + aB] = xh[aB], xh[1 + aB] = xh[2 + aB])
			}
	}, this.a53 = function(xh, i, j, a50) {
		for (var gap = Math.floor(Math.min(i, j) * a50), fG = 0; fG < i; fG++)
			for (var aB, fI = 0; fI < j; fI++)(fG < gap || fI < gap || i - gap <= fG || j - gap <= fI) && (xh[3 + (aB = 4 * (fG + fI * i))] = 255 - 255 * (xh[1 + aB] - xh[aB]) / (255 - xh[aB]))
	}, this.a54 = function(xh, i, j, a50) {
		for (var fG = i - 1; 0 <= fG; fG--)
			for (var fI = j - 1; 0 <= fI; fI--) {
				var aB = 4 * (fG + fI * i);
				xh[aB] = a50[0], xh[1 + aB] = a50[1], xh[2 + aB] = a50[2]
			}
	}, this.a55 = function(xh, i, j, a50) {
		for (var gap = Math.floor(i * a50), fG = 0; fG < i; fG++)
			for (var aB, fI = 0; fI < j; fI++)(fG < gap || fI < gap || i - gap <= fG || j - gap <= fI) && (xh[aB = 4 * (fG + fI * i)] = xh[1 + aB] = xh[2 + aB] = 0)
	}, this.a56 = function(xh, i, j) {
		for (var fI, aB, fG = i - 1; 0 <= fG; fG--)
			for (fI = j - 1; 0 <= fI; fI--) 200 < xh[1 + (aB = 4 * (fG + fI * i))] && xh[1 + aB] - 20 > xh[aB] && xh[1 + aB] - 20 > xh[2 + aB] ? xh[aB] + xh[2 + aB] < 40 ? xh[3 + aB] = 0 : (xh[3 + aB] = xh[aB], xh[aB] = 255, xh[1 + aB] = 255, xh[
				2 + aB] = 255) : xh[aB] < 50 && xh[1 + aB] < 50 && xh[2 + aB] < 50 && (xh[aB] + xh[1 + aB] + xh[2 + aB] < 50 ? xh[3 + aB] = 180 : xh[3 + aB] = 180 + Math.floor(75 * (xh[aB] + xh[1 + aB] + xh[2 + aB] - 50) / 100))
	}, this.a57 = function(xh, i, j) {
		for (var fI, aB, fG = i - 1; 0 <= fG; fG--)
			for (fI = j - 1; 0 <= fI; fI--) xh[1 + (aB = 4 * (fG + fI * i))] > xh[aB] + 20 && xh[1 + aB] > xh[2 + aB] + 20 && xh[aB] + xh[2] < 40 && (xh[3 + aB] = 255 - xh[1 + aB], xh[aB] = xh[1 + aB] = xh[2 + aB] = xh[aB])
	}, this.a44 = function(xh, i, j, a50) {
		for (var eF = i >> 1, fG = 0; fG < i; fG++)
			for (var fI = 0; fI < j; fI++) Math.sqrt((fG - eF) * (fG - eF) + (fI - eF) * (fI - eF)) > a50 * eF && (xh[4 * (fG + fI * i) + 3] = 0)
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
	this.s2 = function(ej) {
		return ej.replace(a59, function(match) {
			return a58[match] || match
		})
	}, this.a0P = function(fb) {
		var aB, a5A, a5B, a5C, a5D;
		if (fb < 0) return "-" + this.a0P(Math.abs(fb));
		if (fb < 1e3) return fb.toString();
		for (a5A = Math.floor(Math.log(fb + .5) / Math.log(10)) + 1, a5B = Math.floor((a5A - 1) / 3), a5D = (a5C = fb.toString()).substring(a5A - 3, a5A), aB = 1; aB < a5B; aB++) a5D = a5C.substring(a5A - 3 * (aB + 1), a5A - 3 * aB) + " " + a5D;
		return a5C.substring(0, a5A - 3 * a5B) + " " + a5D
	}, this.a5E = function(gh, a5A) {
		return gh.toFixed(a5A) + "%"
	}, this.a5F = function(fb, a5G) {
		return fb.toFixed(bN.iH(Math.floor((void 0 === a5G ? 3 : a5G) - Math.log10(Math.max(fb, 1))), 0, 8))
	}, this.a5H = function(fb, nh, a5A) {
		return (fb * nh).toFixed(a5A)
	}, this.a1r = function(username) {
		var fD, ey = username.indexOf("[");
		return !(ey < 0) && 1 < (fD = username.indexOf("]")) - ey && fD - ey <= 8 ? username.substring(ey + 1, fD).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1r;
	this.a5I = function(qj) {
		for (var fS = Math.floor(.5 * qj.length + .5), nn = Math.floor(.5 * (fS - 1)), aB = 0; aB < nn; aB++)
			for (var fT = -1; fT < 2; fT += 2) {
				var eh = fS + fT * aB;
				if (" " === qj[eh]) return [this.a1n(qj.substring(0, eh)), this.a5J(qj.substring(eh))]
			}
		return [qj.substring(0, fS), qj.substring(fS)]
	}, this.a5J = function(qj) {
		for (var f9 = qj.length, aB = 0; aB < f9; aB++)
			if (" " !== qj[aB]) return qj.substring(aB);
		return qj
	}, this.a1n = function(qj) {
		for (var aB = qj.length - 1; 0 <= aB; aB--)
			if (" " !== qj[aB]) return qj.substring(0, aB + 1);
		return qj
	}, this.a5K = function(qj, a5L) {
		return qj.split("(")[0] + "(🧈 " + a5L.toFixed(2) + ")"
	}, this.startsWith = function(qj, a5M) {
		return qj.substring(0, a5M.length) === a5M
	}, this.a4U = function(qj, a5M) {
		var f9 = qj.length;
		return qj.substring(f9 - a5M.length, f9) === a5M
	}, this.a5N = function(g, a5O, a5P) {
		var qj = "",
			f9 = g.length - 1;
		a5P = a5P || "";
		for (var aB = 0; aB < f9; aB++) qj += a5P + g[aB] + a5P + ",", (aB + 1) % a5O == 0 && (qj += "\n");
		return qj += a5P + g[f9] + a5P
	}, this.a5Q = function(qj, a0E, a0F) {
		return qj.replace(new RegExp(a0E, "g"), a0F)
	}
}

function a5R() {
	this.eg = function(player, ev) {
		aI.z1(player, bO.fH(ev), bO.fJ(ev)) && (bh.dp = !0), aD.ko && this.ec()
	}, this.ec = function() {
		aD.hX = !1;
		for (var aB = 0; aB < aD.kU; aB++) 0 !== ag.n4[aB] && 0 === ag.gx[aB] && aI.z8(aB);
		0 !== ag.n4[aD.et] ? (bf.n0[7] = ag.gx[aD.et], bf.n0[8] = ag.hB[aD.et], aR.a5S(), aW.a5T(), aD.hI || aH.nP(ag.j2[aD.et] - 5, ag.j4[aD.et] - 5, ag.j3[aD.et] + 5, ag.j5[aD.et] + 5), av.dh()) : aX.show(!1, !1, !1, !0), aN.a5U(18), af.a5V(),
			af.mq(!0), bR.y.a5W(), aL.sJ(), aD.qO = null, bd.a5X = !0, bd.a5Y(), aD.ko && a0.a1.setState(1)
	}
}

function c3() {
	this.f6 = 512, this.a4i = 15e8, this.a5Z = 1e9, this.a4r = 5e4, this.a5a = 512, this.gT = 2, this.et = 0, this.kU = 0, this.a1B = 0, this.kq = 0, this.a1A = 0, this.yC = 512, this.yH = 512, this.a4h = 150, this.ko = !0, this.hI = 0, this.a18 = 0,
		this.kE = 0, this.nY = !1, this.hX = 0, this.a5b = 0, this.i3 = !1, this.yJ = 0, this.yK = 0, this.km = 0, this.zZ = 0, this.qO = null, this.a1R = new zN, this.a5c = 30, this.a15 = 0, this.a1D = 0, this.a1Q = 0, this.a10 = 0, this.data =
		new a5d, this.a5e = new a5f, this.a5g = 0, this.a5h = "", this.a5i = function() {
			bQ.dh(), bT.dh(), bs.clear(), this.a1B = this.kU = this.data.humanCount, this.ko = 1 === this.a1B, this.nY = !1, this.hI = this.data.isReplay, this.km = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zZ = this.data.isContest, this.i3 = this.km < 7 || 9 === this.km, this.km = 10 === this.km && this.ko ? 7 : this.km, this.km = 8 === this.km && 2 !== this.kU ? 7 : this.km, az.dh(),
				this.yJ = this.data.numberTeams, this.data.teamPlayerCount ? this.yK = +(0 < this.data.teamPlayerCount[0]) : (this.yK = 0, this.i3 && this.ko && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yJ + 1), aD.a5e.a5j())), this.a5c = this.kU <= 2 ? 30 : this.kU <= 50 ? 40 : 50, this.a5b = this.hX = this.data.selectableSpawn, this.qO = this.hX ? new a5R : null, 1 === l.dy ? this.yC = this.kU : this.yC = this.data
				.playerCount, this.yH = this.yC, this.kq = this.yC - this.kU, this.a1A = 0, this.et = this.data.selectedPlayer, this.a15 = 0, this.a1D = 0, this.a1Q = 0, this.a10 = 0, ay.a5k(this.data.spawningSeed), ae.dh(), ag.dh(), an.dh(), ai
				.a5l(), bA.pQ.qC = [], bA.hZ.pT = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bi.dh(), this.a18 = 1, bf.dh(), a5m(), ac.di(), ap.a5n(), bd.dh(), ac
				.dh(), at.dh(), bO.dh(), bP.dh(), ao.dh(), bX.a5o(), aE.dh(), ai.a7(), aI.dh(), aJ.dh(), al.a5p(), bB.dh(), bj.dh(), bR.dh(), bg.dh(), a5q.putImageData(a5r, 0, 0), aV.dh(), aS.dh(), aR.dh(), bE.dh(), aw.dh(), aU.dh(), aW.dh(), aM
			.dh(), aQ.dh(), aN.dh(), aP.dh(), aL.dh(), aX.dh(), aF.dh(), aG.dh(), gC(), ad.dh(), af.dh(), b4.dh(), b5.dh(), b1.dh(), b7.dh(), b8.dh(), this.a1R.dh(), bh.a5o(), aH.nO(), 0 === ag.n4[aD.et] && aX.show(!1, !0), af.mq(!0), av.dh(), bh
				.dp = !0, this.hI || this.ko && this.hX || a0.a1.setState(1), this.a5g = 0
		}, this.a2X = function(eW) {
			bB.qM.a5t.length ? this.a5h = bB.qM.a5t : this.a5h = bB.a5u.a0a(), b0.y.a5v(), bs.clear(), this.a18 = 0, bh.a5w(), a0.a1.setState(0), aa.setState(0), bW.eO.show(eW), 2 === this.a5g ? t.y.a5x(0) : 1 === this.a5g ? t.u(19) : t.u(5, 5)
		}, this.a5y = function() {
			return this.hI ? aM.hJ || !bE.a5z : this.ko && (aM.hJ || this.hX)
		}, this.a60 = function() {
			return 1 === this.a18 && !this.hX
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
		bC.rA.a3t(a62.teamPlayerCount, a62.playerCount), a62.numberTeams = bC.rA.a3k(a62.teamPlayerCount, 0), a62.teamPlayerCount[0] && a62.teamPlayerCount[7] && (a62.teamPlayerCount[7] = 0, this.a5j())
	}, this.a63 = function() {
		var a62 = aD.data;
		a62.mapType < 2 ? bU.a7(bU.a64(a62), a62.mapSeed) : bU.a65(a62.canvas)
	}, this.a66 = function() {
		var a62 = aD.data;
		a62.colorsData || (a62.colorsData = new Uint32Array(1)), a62.selectableColor && (a62.colorsData[0] = bl.y.wj()), a62.selectableName && (a62.playerNamesData || (a62.playerNamesData = new Array(1)), a62.playerNamesData[0] = bl.eU.data[122]
			.value), a62.a61 = new Uint32Array(1), a62.a61[0] = bI.tN.xM(bl.eU.data[105].value, 5)
	}, this.a67 = function() {
		aD.data = new a5d
	}
}

function dd() {
	var a68 = [];
	this.pw = function(player, pa, a69, a6A) {
		player === aD.et || pa === aD.et || !a6A && bC.gV.jr(player) || bC.gV.jr(pa) || this.za(ag.zb[player] + " supported " + ag.zb[pa] + " with " + bC.s1.a0P(a69) + " ressource" + (1 === a69 ? "." : "s."))
	}, this.za = function(qj, pl) {
		qj = {
			eX: aW.a6C(),
			qj: qj,
			pl: pl
		};
		a68.push(qj), 30 === t.tK && t.a2O().za(qj)
	}, this.clear = function() {
		a68 = [];
		var ti = t.a6D(30);
		ti && ti.clear()
	}, this.a6E = function() {
		return a68
	}
}

function dX() {
	this.a06 = 0, this.gap = 0, this.st = 0, this.r8 = 0, this.dh = function() {
		this.resize()
	}, this.resize = function() {
		this.a06 = .0022 * bC.r2.r3(.5) * h.iJ, this.st = this.a06 / h.k, this.gap = Math.max(Math.floor((a0.a1.iI() ? .0114 : .01296) * h.iJ), 2), this.r8 = this.gap / h.k
	}
}

function dW() {
	this.a6F = function() {
		return a0.a1.iI() ? 2 : 1
	}
}

function cE() {
	var rb, fG, fI, a6G, a6H, a6I, eX, a6J, a6K, a6L, a6M, gap, zoom, q5, a6N;

	function a6b(lj, lk, en) {
		ac.f4(en) || -1 === (lj = bP.lJ.a6k(lj, lk)) ? aN.a6j(en) : aN.a6l(lj)
	}

	function a6X(a6J) {
		for (var aB = q5.length - 1; 0 <= aB; aB--)
			if (q5[aB] === a6J) return 1
	}

	function a6V(a6S) {
		var aB, f9;
		if (-1 !== a6S)
			for (f9 = rb.length, aB = 0; aB < f9; aB++)
				if (rb[aB].hv && rb[aB].fG + 1 === a6S % 4 && rb[aB].fI + 1 === a6S >> 2) return aB;
		return -1
	}

	function a6T(lj, lk) {
		var ti = gap / 2;
		return lj < fG - a6G - 3 * ti || fG + 3 * a6G + 5 * ti < lj || lk < fI - a6G - 3 * ti || fI + 2 * a6G + 3 * ti < lk ? -1 : 4 * (lk < fI - ti ? 0 : lk < fI + a6G + ti ? 1 : 2) + (lj < fG - ti ? 0 : lj < fG + a6G + ti ? 1 : lj < fG + 2 * a6G +
			3 * ti ? 2 : 3)
	}
	this.a6O = function() {
		var aB, fT, a6R = [bD.oV, bD.ok, bD.o3, bD.p7, bD.ox];
		for (rb = new Array(10), aB = 0; aB < 10; aB++) rb[aB] = {
			id: aB,
			hv: !1,
			lR: 0,
			canvas: [],
			fG: 0,
			fI: 0
		};
		for (rb[0].colors = [0, 1, 2, 3], rb[0].fG = 0, rb[0].fI = 0, rb[1].colors = [1, 4], rb[1].fG = 1, rb[1].fI = 0, rb[2].colors = [0, 1], rb[2].fG = -1, rb[2].fI = 0, rb[3].colors = [0], rb[3].fG = 0, rb[3].fI = 0, rb[4].colors = [0, 2],
			rb[4].fG = 1, rb[4].fI = 1, rb[5].colors = [3], rb[5].fG = 0, rb[5].fI = -1, rb[6].id = 20, rb[6].colors = [0], rb[6].fG = 1, rb[6].fI = -1, rb[7].id = 21, rb[7].colors = [0], rb[7].fG = 0, rb[7].fI = 1, rb[8].id = 16, rb[8]
			.colors = [0], rb[8].fG = 0, rb[8].fI = 0, rb[9].id = 10, rb[9].colors = [4], rb[9].fG = 2, rb[9].fI = 0, aB = 0; aB < 10; aB++)
			for (fT = 0; fT < rb[aB].colors.length; fT++) rb[aB].canvas.push(function(id, a3z) {
				if (id < 20) return bC.canvas.zs(ab.get(3), id, a3z);
				var a3z = ab.get(3).height,
					a40 = bC.r2.xW(a3z, a3z),
					iB = bC.r2.getContext(a40);
				20 === id ? iB.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xh.a07(aj.sI.zw + aj.sI.a0D, iB, 0, 0, a3z);
				return a40
			}(rb[aB].id, a6R[rb[aB].colors[fT]]))
	}, this.a6Q = function() {
		return rb
	}, this.dh = function() {
		q5 = [], fG = fI = eX = 0, a6H = a6I = -1e3, this.resize()
	}, this.resize = function() {
		a6G = Math.floor((a0.a1.iI() ? .075 : .0468) * h.iJ), zoom = a6G / ab.get(3).height, gap = Math.floor(a6G / 3)
	}, this.a30 = function(lj, lk) {
		return !!this.hv() && (bh.dp = !0, !!aj.xh.hM(lj, lk, a6K) || (lj = function(lj, lk) {
			a6I = a6H = -1e3;
			var a6U = a6V(a6T(lj, lk));
			if (-1 === a6U) return 0;
			if (1 !== rb[a6U].colors[rb[a6U].lR])
				if (5 === a6U) {
					if (! function() {
							var eY = performance.now();
							a6N + 4e3 < eY && (q5 = []);
							a6N = eY
						}(), a6X(a6J)) return 1;
					q5.push(a6J), 16 < q5.length && q5.shift()
				} else if (6 === a6U) {
				for (var aB = q5.length - 1; 0 <= aB; aB--) 0 === ag.n4[q5[aB]] && q5.splice(aB, 1);
				0 < q5.length && (b5.a6Y(1, q5, !0) && bA.gV.q4(q5, a6J), q5 = [])
			} else if (2 === a6U) an.hn(a6J) && bA.hZ.pZ(aR.hd(), a6J);
			else if (3 === a6U) aD.hX && bA.hZ.ha(a6L);
			else if (0 === a6U)
				if (0 === rb[0].lR) {
					if (aD.a5b && aW.a6C() < 350) return 1;
					bX.a6Z(4), bA.hZ.hg(aR.hd(), a6J)
				} else b1.hh(a6J, aR.hd());
			else if (1 === a6U) bA.hZ.hl(aR.hd(), a6L);
			else if (9 === a6U) bA.hZ.ho(aR.hd());
			else {
				if (7 === a6U) return bX.a6Z(0), aj.xh.show(lj, lk), 2;
				if (4 === a6U) b5.a6Y(0, [a6J], !0) && bA.gV.q1(a6J);
				else {
					if (8 !== a6U) return 0;
					bA.hZ.hc(aR.hd(), a6M, a6J)
				}
			}
			return 1
		}(lj, lk), this.sJ(), 2 === lj && (aj.xh.hv = !0), 0 < lj))
	}, this.a32 = function(lj, lk) {
		this.hv() || (a6H = lj, a6I = lk, eX = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bO.hP(mouseX),
			coordY = bO.hR(mouseY),
			point = bO.ez(bO.fW(coordX, coordY));
		bO.hS(coordX, coordY) && a6b(mouseX, mouseY, point)
	}, this.click = function(lj, lk, a39) {
		var hO = bO.hP(lj),
			hQ = bO.hR(lk),
			ev = bO.fW(hO, hQ),
			en = bO.ez(ev),
			a6a = (a0.a1.iI() ? .025 : .0144) * h.iJ,
			eY = performance.now();
		return !(Math.abs(lj - a6H) > a6a || Math.abs(lk - a6I) > a6a || eX + 500 < eY || (eX = eY, bL.rU() && (bL.hE = lj, bL.hF = lk, b7.ec(1), b8.ec(1)), !bO.hS(hO, hQ))) && (a39 ? (a6b(lj, lk, en), !1) : aM.hJ || this.hv() || !bC.gV.hL(aD
			.et) || aD.hI ? (this.sJ(), !1) : (aD.hX ? 0 <= (a6L = bt.hY(ev)) && (rb[3].hv = !0) : 2 === aD.a18 ? ac.gj(en) && (a6J = ac.f1(en), bC.gV.jr(a6J) || (rb[0].hv = !0, rb[0].lR = 1, rb[7].hv = !0)) : (bP.hm.hn(aD.et, ev) && (rb[0]
					.hv = !0, rb[0].lR = 1, rb[1].hv = !0, rb[1].lR = 0, rb[9].hv = !0, rb[9].lR = 0), bP.hj.hk(aD.et, ev) && (rb[0].hv = !0, rb[0].lR = 1, rb[1].hv = !0, rb[1].lR = 1, a6L = bQ.fl[7]), ac.fE(en) ? (a6M = am.ek.em(en)) &&
				(a6a = bO.ez(a6M), rb[8].hv = !0, a6J = ac.f0(a6a) ? aD.f6 : ac.f1(a6a)) : (ac.z6(aD.et, en) && (a6K = aD.et, rb[0].hv = !0, rb[0].lR = 1, rb[7].hv = !0), -1 !== (eY = bt.he(ev)) && (ac.f0(eY << 2) ? (a6J = aD.f6, bu.hf(aD
					.et) ? (rb[0].hv = !0, rb[0].lR = 0) : ad.gG(aD.et) && (rb[0].hv = !0, rb[0].lR = 3)) : (a6J = ac.f1(eY << 2), rb[0].lR = 1, rb[5].hv = function(a6J) {
					return !bC.gV.jr(a6J) && !a6X(a6J) && b5.a6Y(1, [a6J], !1)
				}(a6J), rb[7].hv || bC.gV.jr(a6J) || (a6K = a6J, rb[7].hv = !0), rb[4].hv = !bC.gV.jr(a6J) && !af.a6f(a6J) && b5.a6Y(0, [a6J], !1), rb[6].hv = function(a6J) {
					if (0 === q5.length) return !1;
					if (performance.now() > a6N + 4e3) return !(q5 = []);
					return !a6X(a6J) && ! function(a6J) {
						var aB;
						if (aD.i3)
							for (aB = q5.length - 1; 0 <= aB; aB--)
								if (!bu.f2(a6J, q5[aB])) return 1;
						return
					}(a6J)
				}(a6J), bu.f2(a6J, aD.et) ? (bu.hi(aD.et, a6J) ? (rb[0].lR = 0, rb[0].hv = !0) : ad.gG(aD.et) && (rb[0].lR = 3, rb[0].hv = !0), rb[0].hv = this.a6h()) : (rb[2].hv = !0, an.hn(a6J) ? rb[2].lR = 0 : rb[2].lR = 1,
					rb[0].hv = !0))))), this.a6c(lj, lk)))
	}, this.a6c = function(lj, lk) {
		return fG = lj - Math.floor(a6G / 2), fI = lk - Math.floor(a6G / 2), !!this.hv()
	}, this.a2g = function(lj, lk) {
		return !!this.hv() && (aj.xh.hv ? !aj.xh.a05(lj, lk) && (aj.xh.hv = !1, bh.dp = !0) : function(sc, lj, lk) {
			lj = a6T(lj, lk);
			if (0 <= a6V(lj)) return !1;
			if ((1 === lj || 6 === lj) && 0 <= a6V(2)) return !1;
			if ((6 === lj || 9 === lj) && 0 <= a6V(10)) return !1;
			return sc.sJ(), bh.dp = !0
		}(this, lj, lk))
	}, this.sJ = function() {
		for (var aB = rb.length - 1; 0 <= aB; aB--) rb[aB].hv = !1, rb[aB].lR = 0;
		aj.xh.hv = !1
	}, this.hv = function() {
		return this.a6h() || aj.xh.hv
	}, this.a6h = function() {
		for (var f9 = rb.length, aB = 0; aB < f9; aB++)
			if (rb[aB].hv) return !0;
		return !1
	}, this.vf = function() {
		if (this.hv())
			if (aj.xh.hv) aj.xh.vf();
			else {
				var aB, iB = vg,
					fT = rb,
					f9 = fT.length,
					a6p = (a6G + gap) / zoom;
				for (iB.imageSmoothingEnabled = !0, iB.setTransform(zoom, 0, 0, zoom, fG, fI), aB = 0; aB < f9; aB++) fT[aB].hv && vg.drawImage(fT[aB].canvas[fT[aB].lR], fT[aB].fG * a6p, fT[aB].fI * a6p);
				iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cF() {
	var j, canvas, a6q, a6r, a6s, a6t = -1;

	function a6u() {
		var a6v, zH = canvas.getContext("2d", {
			alpha: !0
		});
		zH.clearRect(0, 0, j, j), zH.fillStyle = bD.o1, zH.fillRect(0, 0, j, j), 9 === a6r && (zH.fillStyle = bD.o6, zH.fillRect(0, 0, j, j)), zH.fillStyle = bD.o5, zH.fillRect(0, 0, j, 1), zH.fillRect(0, 0, 1, j), zH.fillRect(0, j - 1, j, 1), zH
			.fillRect(j - 1, 0, 1, j), a6v = .9 * j / ab.get(0).width, zH.imageSmoothingEnabled = !0, zH.setTransform(a6v, 0, 0, a6v, Math.floor((j - a6v * ab.get(0).width) / 2), Math.floor((j - a6v * ab.get(0).height) / 2)), zH.drawImage(ab.get(0),
				0, 0), zH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6y(lj, lk) {
		if (!aM.hJ) return lj <= j + be.gap && lk >= aR.fI ? 9 : -1;
		if (lj <= 4 * j + be.gap) {
			if (lk >= aR.fI) return 0;
			if (lk >= aR.fI - j - a6s * be.gap) return 2
		} else if (lj <= 7 * j + be.gap && lk >= aR.fI - j - a6s * be.gap) return 1;
		return -1
	}
	this.hJ = !1, this.dh = function() {
		a6r = -1, this.hJ = !1, a6s = a0.a1.iI() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6q = bC.r2.sr(1, (a0.a1.iI() ? .5 : .45) * j), a6u()
	}, this.a6w = function() {
		return !(1 !== aD.a18 || aD.hX || (aD.hI ? !bE.a5z : this.hJ && aD.ko))
	}, this.a3H = function() {
		this.hJ = !this.hJ, this.hJ ? (bE.a3G(!1), aD.hI && bE.a5z && bE.a3I(!0), this.a6x(), 9 === a6r && (a6r = 0)) : (a6r = -1, a6u(), !aD.ko || 1 !== aD.a18 || aD.hX || aD.hI || a0.a1.setState(1)), bh.dp = !0
	}, this.a6x = function() {
		(aD.ko || aD.hI) && 1 === aD.a18 && (aV.mq(!0), aD.hX || setTimeout(function() {
			bd.a1K()
		}, 0), a0.a1.setState(0))
	}, this.hM = function(lj, lk) {
		return 0 <= (a6t = a6y(lj, lk)) || !aM.hJ || aD.ko || aD.hI || bg.hv || aM.a3H(), a6t
	}, this.a2g = function(lj, lk) {
		lj = a6y(lj, lk);
		lj !== a6r && (a6r = lj, this.hJ || a6u(), bh.dp = !0)
	}, this.a2h = function(lj, lk) {
		lj = a6y(lj, lk);
		return -1 !== lj && a6t === lj && (this.hJ ? aD.nY ? (0 <= lj && bE.a3G(!1), !aD.hI) : (0 === lj ? aD.a2X() : 1 === lj ? this.a3H() : 2 === lj && t.u(1, 0), !0) : 9 === lj && (this.a3H(), !0))
	}, this.vf = function() {
		var i;
		this.hJ ? (i = Math.floor(5.5 * j), vg.setTransform(1, 0, 0, 1, be.gap, aR.fI), vg.fillStyle = bD.o1, vg.fillRect(0, 0, i, j), 0 === a6r ? (vg.fillStyle = bD.o6, vg.fillRect(0, 0, 4 * j, j)) : 1 === a6r && (vg.fillStyle = bD.o6, vg
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vg.fillStyle = bD.o5, vg.fillRect(0, 0, i, 1), vg.fillRect(0, 0, 1, j), vg.fillRect(4 * j, 0, 1, j), vg.fillRect(0, j - 1, i, 1), vg.fillRect(i - 1, 0, 1, j), vg.font = a6q, bC.r2
			.textBaseline(vg, 1), bC.r2.textAlign(vg, 1), vg.fillText(L(44), 2 * j, .54 * j), i = .4 * j, aM.a72(be.gap + 4 * j + (1.5 * j - i) / 2, aR.fI + .3 * j, i), i = 1, vg.setTransform(1, 0, 0, 1, be.gap, aR.fI - i * a6s * be.gap - i *
				j), vg.fillStyle = bD.o1, vg.fillRect(0, 0, 4 * j, j), a6r === i + 1 && (vg.fillStyle = bD.o6, vg.fillRect(0, 0, 4 * j, j)), vg.fillStyle = bD.o5, vg.fillRect(0, 0, 4 * j, 1), vg.fillRect(0, 0, 1, j), vg.fillRect(4 * j, 0, 1,
				j), vg.fillRect(0, j - 1, 4 * j, 1), vg.fillText(L(0 === i ? 44 : 45), 2 * j, .54 * j), vg.setTransform(1, 0, 0, 1, 0, 0)) : vg.drawImage(canvas, be.gap, aR.fI)
	}, this.qd = function(player) {
		return 0 !== ag.n4[player] && 2 !== aD.a18 && !bC.gV.jr(player)
	}, this.a72 = function(fG, fI, f9) {
		vg.setTransform(1, 0, 0, 1, fG, fI), vg.lineWidth = be.a06, vg.strokeStyle = bD.o5, vg.beginPath(), vg.moveTo(0, 0), vg.lineTo(f9, f9), vg.moveTo(0, f9), vg.lineTo(f9, 0), vg.stroke()
	}
}

function cG() {
	var a74, j, a75, a76, a77, a78, a79, a7A, a7B;

	function zD() {
		return aR.a7T(aN.a7P()) ? aw.hv ? __fx.settings.keybindButtons ? aR.fI - 2 * aR.j - 3 * a75 : aR.fI - aR.j - 2 * a75 : __fx.settings.keybindButtons ? aR.fI - aR.j - 2 * a75 : aR.fI - a75 : bE.a7T(aN.a7S()) ? aw.hv ? bE.zD() - aR.j - 2 * a75 :
			bE.zD() - a75 : aw.hv ? h.j - aR.j - (bm.a6F() + 1) * a75 : h.j - bm.a6F() * be.gap
	}

	function a7G(eY, qj, id, gh, a7J, a7K, l7, a7L, a7M, a7N, a7X) {
		var aB, zH, a40, qu, a7Y = void 0 !== a7M,
			i = Math.floor(aQ.measureText(qj, aN.a6q) + 1.5 * a76 + (a7Y ? j : 1.5 * a76));
		if (bh.dp = !0, a7X || bs.za(qj, a7M), i + 2 * a75 + aR.j > h.i && !a7Y && 50 !== id && 20 < qj.length) a7G(eY, (a7X = bC.s1.a5I(qj))[0], id, gh, a7J, a7K, l7, a7L, a7M, a7N, !0), a7G(eY, a7X[1], id, gh, a7J, a7K, l7, a7L, a7M, a7N, !0);
		else if (a7X = i + (50 === id ? a77 : 0), (a40 = document.createElement("canvas")).width = i, a40.height = j, (zH = a40.getContext("2d", {
				alpha: !0
			})).font = aN.a6q, bC.r2.textBaseline(zH, 1), bC.r2.textAlign(zH, 0), zH.clearRect(0, 0, i, j), zH.fillStyle = a7K, zH.fillRect(0, 0, i, j), zH.fillStyle = a7J, zH.fillText(qj, Math.floor(1.5 * a76), Math.floor(j / 2)), a7Y && (zH
				.imageSmoothingEnabled = !0, aj.xh.a07(a7M, zH, i - j, 0, j)), 0 === (qu = {
				eX: eY,
				qj: qj,
				id: id,
				player: gh,
				canvas: a40,
				a7J: a7J,
				a7K: a7K,
				i: i,
				a7Q: a7X,
				l7: l7,
				a7L: a7L,
				a7M: a7M,
				a7N: a7N
			}).eX || 0 < a74.length && 0 < a74[0].eX) a74.unshift(qu);
		else {
			for (aB = 1; aB < a74.length; aB++)
				if (0 < a74[aB].eX) return void a74.splice(aB, 0, qu);
			a74.push(qu)
		}
	}

	function a7H(eF, ti, fT) {
		return "rgb(" + eF + "," + ti + "," + fT + ")"
	}

	function a7Z(id, gc) {
		for (var f9 = a74.length, aB = 0; aB < f9; aB++) a74[aB].id === id && gc-- <= 0 && (a74.splice(aB, 1), aB--, f9--)
	}

	function a7a(id, player) {
		for (var fN = !1, aB = a74.length - 1; 0 <= aB; aB--) a74[aB].id !== id || player !== aD.f6 && a74[aB].player !== player || (a74.splice(aB, 1), fN = !0);
		return fN
	}

	function a7w(qj) {
		a7G(340, qj, 6, 0, a7H(215, 245, 255), bD.o2, -1, !1)
	}
	this.a7C = "", this.dh = function() {
		var self;
		a7A = 0, a79 = a0.a1.iI() ? 7 : 12, a78 = {
				a0w: [0, 0, 0],
				a7D: [0, 0, 0],
				nM: [220, 180, 180],
				ve: [0, 0, 0],
				eh: [0, 0, 0]
			}, a74 = [], this.resize(), aD.hX && this.a1L(0, 18), bU.xU.xV[bU.ep].name.length && a7w(L(88, [bU.xU.xV[bU.ep].name])), bU.xU.xV[bU.ep].a7x && a7w(L(89, [bU.xU.xV[bU.ep].a7x])), a7w(L(90, [bU.fK - 2 + "x" + (bU.fL - 2)])), a7w(L(91,
				[bC.s1.a0P(ap.a7y)])), ap.a7y !== ap.a7z && a7w(L(92, [bC.s1.a0P(ap.a7z) + " (" + bC.s1.a5E(100 * ap.a7z / ap.a7y, 1) + ")"])), 0 < ap.a80 && a7w(L(68, [bC.s1.a0P(ap.a80) + " (" + bC.s1.a5E(100 * ap.a80 / ap.a7y, 1) + ")"])), 0 <
			ap.a81 && a7w(L(93, [bC.s1.a0P(ap.a81) + " (" + bC.s1.a5E(100 * ap.a81 / ap.a7y, 1) + ")"])), 10 === aD.km && a7G(120, L(94), 6, 0, a7H(235, 255, 120), bD.o2, -1, !1), 0 !== (self = this).a7C.length && (a7G(200, self.a7C, 0, 0, bD.o5,
				bD.o2, -1, !1), self.a7C = ""), aD.zZ && a7G(340, L(46), 6, 0, a7H(255, 200, 0), bD.o2, -1, !1)
	}, this.resize = function() {
		var a7I, aB;
		if (j = (j = Math.floor((a0.a1.iI() ? .031 : .0249) * h.iJ)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6q = bC.r2.sr(1, this.fontSize), a75 = be.gap, a76 = Math.floor(j / 5), 0 < a74.length)
			for (a7I = a74, a74 = [], aB = a7I.length - 1; 0 <= aB; aB--) a7G(a7I[aB].eX, a7I[aB].qj, a7I[aB].id, a7I[aB].player, a7I[aB].a7J, a7I[aB].a7K, a7I[aB].l7, a7I[aB].a7L, a7I[aB].a7M, a7I[aB].a7N, !0);
		this.a7O()
	}, this.a7O = function() {
		a7B = document.createElement("canvas");
		var qj = L(47),
			zH = (a77 = aQ.measureText(qj, this.a6q) + 5 * a76, a7B.height = j, a7B.width = a77, a7B.getContext("2d", {
				alpha: !0
			}));
		zH.font = this.a6q, bC.r2.textBaseline(zH, 1), bC.r2.textAlign(zH, 1), zH.clearRect(0, 0, a77, j), zH.fillStyle = bD.oS, zH.fillRect(0, 0, a77, j), zH.fillStyle = bD.o5, zH.fillText(qj, Math.floor(a77 / 2), Math.floor(j / 2))
	}, this.a7P = function() {
		var f9;
		return aw.hv ? aw.i : 0 === (f9 = a74.length) ? 0 : 1 === f9 ? a74[0].a7Q : a7R(a74[0].a7Q, a74[1].a7Q)
	}, this.a7S = function() {
		var f9 = a74.length;
		return aw.hv ? f9 ? a7R(aw.i, a74[0].a7Q) : aw.i : 0 === f9 ? 0 : 1 === f9 ? a74[0].a7Q : 2 === f9 ? a7R(a74[0].a7Q, a74[1].a7Q) : a7R(a7R(a74[0].a7Q, a74[1].a7Q), a74[2].a7Q)
	}, this.hM = function(fG, fI) {
		for (var nV, a7U, a7V = zD(), aB = a74.length - 1; 0 <= aB; aB--)
			if ((a7U = a7V - (aB + 1) * j) <= fI && fI < a7U + j) return 50 === a74[aB].id ? fG >= h.i - a77 - a75 - a74[aB].i && (fG >= h.i - a77 - a75 ? bA.gV.q1(a74[aB].player) : aH.nQ(a74[aB].player, 800, !1, 0), !0) : fG >= h.i - a74[aB].i -
				a75 && (736 === a74[aB].id ? window.open("https://" + a74[aB].qj, "_blank") : a74[aB].a7L && (a74[aB].a7N && a74[aB].a7N.fS ? (a7U = a74[aB].a7N.ev, nV = bO.fH(a7U) - 10, a7U = bO.fJ(a7U) - 10, aH.nP(nV, a7U, 19 + nV, 19 +
					a7U)) : a74[aB].a7N && a74[aB].a7N.fT ? aH.nR(a74[aB].player, a74[aB].a7N.nS) : (aH.nQ(a74[aB].player, 800, !1, 0), 0 <= a74[aB].l7 && (nV = a74[aB].l7, a74[aB].l7 = a74[aB].player, a74[aB].player = nV))), !0);
		return !1
	}, this.za = function(eY, qj, id, gh, a7J, a7K, l7, a7L, a7M, a7N) {
		a7G(eY, qj, id, gh, a7J, a7K, l7, a7L, a7M, a7N)
	}, this.a7W = function(r) {
		a7G(300, r, 252, 0, bD.o5, bD.o2, -1, !1)
	}, this.a5U = function(id) {
		for (var aB = a74.length - 1; 0 <= aB; aB--) a74[aB].id === id && (a74[aB].eX = 1)
	}, this.a1L = function(player, id) {
		0 === id ? (aQ.eg(player, 0), a7Z(423, 2), a7G(160, L(48, [ag.zb[player]]), 423, player, "rgb(10,220,10)", bD.o2, -1, !1)) : 1 === id ? (a7a(50, aD.f6), aQ.eg(player, 1), a7G(360, L(49, [ag.zb[player]]), 0, player, bD.om, bD.o2, -1, !0),
			aH.nQ(player, 2700, !1, 0)) : 2 === id ? (aQ.eg(player, 2), a7G(0, L(50), 0, player, "rgb(10,255,255)", bD.o2, -1, !0), aH.nQ(player, 2700, !1, 0)) : 3 === id ? (aQ.eg(player, 2), a7G(0, L(51, [ag.zb[player]]), 0, player, bD.o5,
			bD.o2, -1, !0), aH.nQ(player, 2700, !1, 0)) : 4 === id ? this.a7b(1, player, player) : 5 === id ? bC.gV.jr(aD.et) || (function(id, mz) {
			var aB, a7l = 0,
				f9 = a74.length;
			for (aB = 0; aB < f9; aB++)
				if (a74[aB].id === id && mz <= ++a7l) return a74.splice(aB, 1)
		}(1, 5), af.a7d(player) && a7G(180, L(52, [ag.zb[player]]), 1, player, a7H(255, 200, 180), bD.o2, -1, !0), bC.gV.a4b(player, 10) && (a7Z(573, 0), a7G(180, L(53, [ag.zb[player]]), 573, player, bD.om, bD.o2, -1, !0))) : 18 === id ? a7G(
			255, L(54), 18, 0, bD.o5, bD.o2, -1, !1) : 21 === id ? a7G(220, L(55), id, 0, bD.o5, bD.o2, -1, !1) : 22 === id ? this.a7b(2, player, player) : 59 === id && a7G(0, L(56), id, 0, bD.p6, bD.o2, 0, !1)
	}, this.a2T = function(r) {
		a7G(200, L(57, [r]), 94, 0, bD.o5, bD.oi, -1, !1)
	}, this.a1X = function(a7e) {
		if (aD.et === a7e && !aD.ko && !aD.hI)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a7G(0, "Your Win Count is now " + __fx.wins.count, 3, a7e, bD.o5, bD.o2, -1, !0);
		ag.gx[a7e] && (aQ.eg(a7e, 2), aD.kU < 100 ? a7G(0, L(51, [ag.zb[a7e]]), 3, a7e, bD.o5, bD.o2, -1, !0) : a7G(0, L(58, [ag.zb[a7e]]), 3, a7e, bD.o5, bD.o2, -1, !0))
	}, this.a6j = function(en) {
		var qj, a7g, a7f = "(" + bO.fH(en >> 2) + ", " + bO.fJ(en >> 2) + ")",
			a7L = !1,
			player = 0;
		ac.f4(en) ? ac.f0(en) ? a7f = L(59, [a7f]) : (player = ac.f1(en), aD.hI && !1 === __fx.hoveringTooltip.active && (aD.et = player), qj = L(60, [bC.zH.a4E(ag.a1o[player], bC.r2.sr(0, 10), 150)]) + "   ", qj = (qj += L(61, [bC.s1.a0P(ag.hB[
				player])]) + "   ") + L(62, [bC.s1.a0P(ag.gx[player])]) + "   ", aD.i3 && (a7g = bi.a1U[bi.kr[bi.f7[player]]], qj += L(63) + ": " + a7g + "   "), bC.gV.jr(player) && (qj += L(64) + ": " + aE.kf[aE.hs[player]] + "   "), a7f =
			qj = (qj += L(65, [player]) + "   ") + L(66, [a7f]), a7L = !0) : a7f = ac.fE(en) ? L(67, [a7f]) + "   #" + ac.er(en) : L(68, [a7f]), a7Z(55, 0), a7G(220, a7f, 55, player, bD.o5, bD.o2, -1, a7L, void 0, void 0, !0)
	}, this.a6l = function(a7h) {
		var lP = bP.y,
			player = lP.mO[a7h] >> 3,
			qj = (bh.dp = !0, a7Z(55, 0), L(69, [ag.zb[player]]) + "   ");
		a7G(220, qj += L(61, [bC.s1.a0P(lP.a7i[a7h])]), 55, player, bD.o5, bD.o2, -1, !0)
	}, this.pk = function(pU, a7j, pl) {
		pU === aD.et ? a7G(175, " " + L(70, [ag.zb[a7j]]) + ": ", 1001, a7j, a7H(200, 255, 210), bD.o2, -1, !0, pl) : this.a7k(pU, pl)
	}, this.a7k = function(pU, pl) {
		a7Z(1e3, 0), a7G(175, ag.zb[pU] + ": ", 1e3, pU, bD.o5, "rgba(5,60,25,0.9)", -1, !0, pl)
	}, this.a1W = function() {
		var r;
		aD.a1D ? (r = L(71), aQ.a1V(L(72), 2, 1, 12), a7G(0, r, 40, 0, "rgb(10,220,10)", bD.o2, -1, !1)) : (r = L(73), aQ.a1V(L(74), 2, 0, 16), a7G(0, r, 41, 0, bD.o5, bD.o2, -1, !1))
	}, this.zO = function() {
		var gc = ag.zb,
			fC = aD.data;
		a7G(300, gc[0] + " [" + aD.a1R.zU(fC.elo[0]) + "] vs " + gc[1] + " [" + aD.a1R.zU(fC.elo[1]) + "]", 65, 0, bD.nw, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7m = function(r) {
		a7G(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7n = function(a7o) {
		a7G(0, L(a7o ? 75 : 76), 247, 0, bD.p5, bD.o2, -1, !1)
	}, this.zW = function(zT, zV, a7p) {
		var fC = aD.data,
			gc = ag.zb;
		a7G(0, gc[0] + ": " + aD.a1R.zU(fC.elo[0]) + " -> " + zT, 66, 0, bD.o5, a7p[0], -1, !1), a7G(0, gc[1] + ": " + aD.a1R.zU(fC.elo[1]) + " -> " + zV, 66, 1, bD.o5, a7p[1], -1, !1)
	}, this.q2 = function(player, id) {
		0 === id ? a7a(50, player) ? (a7G(128, L(77, [ag.zb[player]]), 52, player, a7H(180, 255, 180), bD.o2, -1, !0), af.qb(player, 2, 255)) : a7G(384, L(78, [ag.zb[player]]), 51, player, a7H(210, 210, 255), bD.o2, -1, !0) : a7a(51, player) ? (
			a7G(128, L(79, [ag.zb[player]]), 52, player, bD.o5, "rgba(60,120,10,0.9)", -1, !0), af.qb(player, 2, 255)) : (a7G(384, L(80, [ag.zb[player]]), 50, player, bD.o5, "rgba(90,90,90,0.9)", -1, !0), af.qb(player, 2, 96))
	}, this.q6 = function(a0w, target) {
		var color = a7H(210, 255, 210);
		1 < a0w.length ? a7G(230, L(81, [a0w.length, ag.zb[target]]), 66, target, color, bD.o2, -1, !0) : a7G(230, L(82, [ag.zb[a0w[0]], ag.zb[target]]), 66, a0w[0], color, bD.o2, target, !0)
	}, this.a7q = function(player, target) {
		a7G(230, L(83, [ag.zb[player], ag.zb[target]]), 66, player, bD.o5, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7r = function(id, gc) {
		a7Z(id, gc)
	}, this.a1G = function(id, player) {
		a7a(id, void 0 === player ? aD.f6 : player)
	}, this.a7s = function(id) {
		for (var aB = a74.length - 1; 0 <= aB; aB--)
			if (a74[aB].id === id) return a74[aB];
		return null
	}, this.px = function(a69, a7t, player) {
		2 !== ag.a4W[aD.et] && a7G(200, 1 === a69 ? L(84, [ag.zb[player]]) : L(85, [bC.s1.a0P(a69), ag.zb[player]]), 30, player, "rgb(190,255,190)", bD.o2, -1, !0)
	}, this.a7v = function(a69, player) {
		2 !== ag.a4W[aD.et] && (a7Z(31, 0), a69 = " (" + bC.s1.a0P(a69) + ") 💸", a7G(150, a69 = bC.gV.jr(player) ? L(86) + a69 : L(87, [ag.zb[player]]) + a69, 31, player, bD.nw, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1F = function(bw) {
		for (var eh = bh.kR(), aB = 2; 0 <= aB; aB--) 0 < a78.ve[aB] && (bw || a78.eh[aB] < eh - 220) && this.a82(aB)
	}, this.a82 = function(id) {
		var qj, f9 = a78.ve[id],
			player = a78.a0w[id];
		a78.ve[id] = 0, 1 === f9 ? (0 === id ? qj = L(95, [ag.zb[player], ag.zb[a78.a7D[0]]]) : 1 === id ? qj = L(96, [ag.zb[player]]) : 2 === id ? qj = L(97, [ag.zb[player]]) : 3 === id && (qj = L(98, [ag.zb[player]])), a7Z(7, 0), a7G(a78.nM[
			id], qj, 7, a78.a7D[id], bD.o5, bD.o2, -1, !0)) : (qj = L(0 === id ? 99 : 1 === id ? 100 : 101, [f9]), a7Z(7, 0), a7G(a78.nM[id], qj, 7, player, bD.o5, bD.o2, -1, !1))
	}, this.a7b = function(id, hb, l7) {
		var eh = bh.kR(),
			f9 = a78.ve[id] + 1;
		a78.ve[id]++, a78.a0w[id] = hb, a78.a7D[id] = l7, 1 === f9 && (a78.eh[id] = eh), (1 === f9 && (aD.a1B < 32 || 2 === aD.a18) || 1 < f9 && (a78.eh[id] < eh - 140 || 2 === aD.a18)) && this.a82(id)
	}, this.ec = function() {
		b2.ec();
		for (var jj = (jj = a74.length - a79) <= 1 ? 1 : jj * jj, aB = a74.length - 1; 0 <= aB; aB--) 0 < a74[aB].eX && (a74[aB].eX -= jj, a74[aB].eX <= 0) && (bh.dp = !0, a74.splice(aB, 1));
		! function() {
			var gc, aB;
			if (128 !== a7A && !(++a7A < 128))
				for (gc = 5, aB = al.l0 - 1; 0 <= aB; aB--) 1 === ag.a4W[al.l5[aB]] && 0 < gc-- && a7G(240, L(98, [ag.zb[al.l5[aB]]]), 1, al.l5[aB], bD.nw, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1F(!1)
	}, this.vf = function() {
		for (var yF, fI = zD(), aB = a74.length - 1; 0 <= aB; aB--) yF = fI - (aB + 1) * j, 50 === a74[aB].id ? (vg.drawImage(a74[aB].canvas, h.i - a74[aB].i - a77 - a75, yF), vg.drawImage(a7B, h.i - a77 - a75, yF)) : vg.drawImage(a74[aB].canvas,
			h.i - a74[aB].i - a75, yF)
	}, this.a84 = function(id, hs) {
		var a7f, a85 = bD.oF;
		0 === id ? a7f = L(102) : 1 === id ? (a7f = L(103), a85 = bD.p1) : 2 === id ? a7f = L(104) : 3 === id ? a7f = L(105) : (a7f = bC.s1.a0P(hs), a85 = 5 === id ? bD.p1 : bD.o2), a7Z(74, 0), a7G(0, a7f, 74, 0, bD.o5, a85, -1, !1, void 0,
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
		for (var eY = new Date, a8A = eY.getUTCMinutes(), eY = eY.getUTCSeconds(), a8C = [], a8D = 0, aB = 0; aB < 6; aB++) a8C.push(a8D), a8C.push(a8D + 2), a8C.push(a8D + 5), a8C.push(a8D + 7), a8D += 10;
		for (var f9 = a8C.length, aB = 1; aB < f9 && !(a8A < a8C[aB]); aB++);
		aB %= f9;
		eY = (a8C[0] = 60) * (a8C[aB] - a8A) - eY;
		return eY !== a86 && (vh = eA[aB % 4] + " " + a88 + ": " + a8F(Math.floor(eY / 60)) + ":" + a8F(eY % 60), a86 = eY, y0 = aQ.measureText(vh, a87), y0 += Math.floor(.4 * y1), 1)
	}

	function a8F(a8G) {
		return a8G < 10 ? "0" + a8G : String(a8G)
	}
	this.dh = function() {
		a88 = L(106)
	}, this.resize = function() {
		y0 = Math.floor((a0.a1.iI() ? .53 : .36) * h.iJ), y1 = Math.floor(.065 * y0), a87 = bC.r2.sr(1, Math.floor(.9 * y1)), a86 += 1e3, a89()
	}, this.ec = function() {
		a89() && (bh.dp = !0)
	}, this.vf = function(fI) {
		vg.lineWidth = 1 + Math.floor(y1 / 15), vg.translate(h.i - y1, fI + y0), vg.rotate(-Math.PI / 2), vg.fillStyle = bD.o5, vg.fillRect(0, 0, y0, y1), vg.strokeStyle = bD.nw, vg.strokeRect(0, 0, y0, y1 + 10), vg.fillStyle = bD.nw, vg.font =
			a87, bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 1), vg.fillText(vh, Math.floor(y0 / 2), Math.floor(.59 * y1)), vg.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cI() {
	var a68, a8H, a8I, y1, a8J, a8K = 0,
		a8L = 0;

	function a8N(aB) {
		var a8P = !0,
			a0E = bD.o5,
			i = (1 === a68[aB].id ? a68[aB].zH.fillStyle = bD.oz : a68[aB].jd === aD.f6 ? a68[aB].zH.fillStyle = bD.oG : (ac.a8Q(a68[aB].jd), a68[aB].zH.fillStyle = bC.color.nz(bQ.fi[0], bQ.fi[1], bQ.fi[2], .87), 400 < bC.rA.a3e(bQ.fi, 0, 2) && (
				a8P = !1, a0E = bD.nw)), a68[aB].canvas.width),
			tR = (a68[aB].zH.clearRect(0, 0, i, y1), a68[aB].zH.fillRect(0, 0, i, y1), a68[aB].zH.fillStyle = a0E, ! function(zH, i, y1) {
				zH.fillRect(0, 0, i, 1), zH.fillRect(0, y1 - 1, i, 1), zH.fillRect(0, 0, 1, y1), zH.fillRect(i - 1, 0, 1, y1)
			}(a68[aB].zH, i, y1), a8H + 2 * y1 < i && (a68[aB].zH.fillRect(i - a8H - y1, 0, 1, y1), a68[aB].zH.fillText(ag.zb[a68[aB].jd], Math.floor((i - a8H) / 2), Math.floor(.57 * y1))), 0 !== a68[aB].id ? 0 : y1);
		a68[aB].zH.fillText(bC.s1.a0P(a68[aB].hs), Math.floor(i - a8H / 2 - tR), Math.floor(.57 * y1)),
			function(aB, i, tR, a8P) {
				a68[aB].zH.fillStyle = a8P ? bD.o7 : bD.o3;
				a8P = Math.floor(a8H * a68[aB].hs / a68[aB].a8W);
				a68[aB].zH.fillRect(Math.floor(i - a8H - tR), y1 - a8J, a8P, a8J)
			}(aB, i, tR, a8P), 0 === a68[aB].id ? (a8T(aB, i, a8P, a0E), function(aB, i, a8P) {
				a68[aB].zH.strokeStyle = a8P ? bD.oN : bD.oX, a68[aB].zH.fillRect(y1, 0, 1, y1);
				a8P = i - y1;
				a68[aB].zH.beginPath(), a68[aB].zH.moveTo(Math.floor(.3 * y1 + a8P), Math.floor(y1 / 2)), a68[aB].zH.lineTo(Math.floor(y1 - .3 * y1 + 0 + a8P), Math.floor(y1 / 2)), a68[aB].zH.stroke(), a68[aB].zH.beginPath(), a68[aB].zH.moveTo(
					Math.floor(y1 / 2 + a8P), Math.floor(.3 * y1)), a68[aB].zH.lineTo(Math.floor(y1 / 2 + a8P), Math.floor(y1 - .3 * y1 + 0)), a68[aB].zH.stroke()
			}(aB, i, a8P)) : a8T(aB, 2 * y1, a8P, a0E)
	}

	function a8T(aB, i, a8P, a0E) {
		a68[aB].zH.strokeStyle = a68[aB].a8X ? bD.oE : a8P ? bD.od : bD.oe, a68[aB].zH.fillStyle = a0E, a68[aB].zH.fillRect(i - y1, 0, 1, y1), a68[aB].zH.lineWidth = Math.max(Math.floor(y1 / 12), 3), a68[aB].zH.lineCap = "round";
		a8P = .35;
		i = y1 + 1, a68[aB].zH.beginPath(), a68[aB].zH.moveTo(Math.floor(i - a8P * y1 + 0), Math.floor(a8P * y1)), a68[aB].zH.lineTo(Math.floor(i - y1 + a8P * y1), Math.floor(y1 - a8P * y1 + 0)), a68[aB].zH.stroke(), a68[aB].zH.beginPath(), a68[aB]
			.zH.moveTo(Math.floor(i - y1 + a8P * y1), Math.floor(a8P * y1)), a68[aB].zH.lineTo(Math.floor(i - a8P * y1 + 0), Math.floor(y1 - a8P * y1 + 0)), a68[aB].zH.stroke()
	}

	function a8j(g, a8h) {
		for (var hs, aB = a8h - 1; 0 <= aB; aB--) hs = ad.gM(aD.et, aB), g[aB].hs !== hs && (g[aB].hs = hs, g[aB].a8W = Math.max(hs, g[aB].a8W), g[aB].a8O = !0)
	}

	function a8n(g, a8l) {
		for (var te = aD.et << 3, a7i = bP.y.a7i, mL = bP.y.mL, a8p = bP.y.a8p, aB = a8l - 1; 0 <= aB; aB--) {
			var a8q = a8p[te + aB],
				hs = a7i[a8q];
			g[aB].hs !== hs ? (g[aB].hs = hs, g[aB].a8W = Math.max(hs, g[aB].a8W), g[aB].a8O = !0) : g[aB].a8X || mL[a8q] % 64 != 5 || (g[aB].a8X = !0, g[aB].a8O = !0)
		}
	}

	function a8M(a6B) {
		a6B.canvas = document.createElement("canvas"), bU.xa.font = a8I;
		var i = a8H;
		a6B.jd < aD.f6 && 0 === a6B.id && (i += Math.floor(bU.xa.measureText(ag.zb[a6B.jd] + "000").width)), i += y1, 0 === a6B.id && (i += y1), a6B.canvas.width = i, a6B.canvas.height = y1, a6B.zH = a6B.canvas.getContext("2d", {
			alpha: !0
		}), a6B.zH.font = a8I, bC.r2.textBaseline(a6B.zH, 1), bC.r2.textAlign(a6B.zH, 1)
	}

	function a8d(aB) {
		return aU.a8r() ? h.i - a68[aB].canvas.width - be.gap : aU.fG
	}

	function a8e(aB) {
		return Math.floor(2 * be.gap + (aU.a8r() ? aW.j + be.gap : 0) + aU.j + aB * (1.3 * y1))
	}
	this.dh = function() {
		a8K = a8L = 0, a68 = [], this.resize()
	}, this.resize = function() {
		a8I = aN.a6q, y1 = aN.fontSize + 5, y1 = Math.floor(1.25 * y1), a0.a1.iI() && (y1 = Math.floor(1.25 * y1)), a8J = Math.floor(.15 * y1), bU.xa.font = a8I, a8H = Math.floor(bU.xa.measureText("02 000 000 0000").width);
		for (var aB = a68.length - 1; 0 <= aB; aB--) a8M(a68[aB]), a8N(aB)
	}, this.mq = function() {
		for (var aB = a68.length - 1; 0 <= aB; aB--) a68[aB].a8O && (a68[aB].a8O = !1, a8N(aB))
	}, this.hM = function(lj, lk) {
		if (2 !== aD.a18 && 0 !== ag.n4[aD.et] && !aD.hI && !bC.gV.jr(aD.et))
			for (var a8Y, a8Z, a8a, a8b = a0.a1.iI() ? y1 : 0, a8c = a0.a1.iI() ? Math.floor(.15 * y1) : 0, aB = a68.length - 1; 0 <= aB; aB--)
				if (a8Y = a8d(aB), a8Z = a8e(aB), a8a = a68[aB].canvas.width, a8Z - a8c <= lk && lk <= a8Z + y1 + a8c) {
					if (a8Y - a8b <= lj && lj <= a8Y + y1 + a8b) return a68[aB].a8X || (a68[aB].a8O = !0, a68[aB].a8X = !0, 0 === a68[aB].id ? bA.hZ.pi(a68[aB].jd) : bA.hZ.ph(a68[aB].jd)), !0;
					if (0 === a68[aB].id && a8Y + a8a - y1 - a8b <= lj && lj <= a8Y + a8a + a8b) return bX.a6Z(3), bA.hZ.hg(aR.hd(), a68[aB].jd), !0
				} return !1
	}, this.ec = function() {
		var a3m, a3n, g, a8h;
		0 === ag.n4[aD.et] || bC.gV.jr(aD.et) && !aD.hI || (a3m = a68.slice(0, a8K), a3n = a68.slice(a8K, a8K + a8L), g = a3m, a8h = ad.gG(aD.et), function(g, a8h) {
			if (a8K !== a8h) return 1;
			for (var aB = a8h - 1; 0 <= aB; aB--)
				if (g[aB].jd !== ad.gL(aD.et, aB)) return 1;
			return
		}(g, a8h) ? a8j(g = function(g, a8h) {
			var aB, jd, fT, hs, a7I = [];
			loop: for (aB = 0; aB < a8h; aB++) {
				for (jd = ad.gL(aD.et, aB), fT = 0; fT < g.length; fT++)
					if (g[fT].jd === jd) {
						a7I.push(g.splice(fT, 1)[0]);
						continue loop
					} hs = ad.gM(aD.et, aB), a8M(hs = {
					jd: jd,
					hs: hs,
					a8W: hs,
					id: 0,
					a8O: !0,
					a8X: !1,
					canvas: null,
					zH: null
				}), a7I.push(hs)
			}
			return a7I
		}(g, a8h), a8h) : a8j(g, a8h), a3m = g, a3n = function(g) {
			var a8l = bP.y.kY[aD.et];
			return function(g, a8l) {
				if (a8L !== a8l) return 1;
				for (var te = aD.et << 3, mN = bP.y.mN, a8p = bP.y.a8p, aB = a8l - 1; 0 <= aB; aB--) {
					var a8q = a8p[te + aB];
					if (g[aB].jd !== mN[a8q]) return 1
				}
				return
			}(g, a8l) ? a8n(g = function(g, a8l) {
				var aB, jd, fT, a7I = [],
					te = aD.et << 3,
					mN = bP.y.mN,
					a7i = bP.y.a7i,
					a8p = bP.y.a8p;
				loop: for (aB = 0; aB < a8l; aB++) {
					var a8q = a8p[te + aB];
					for (jd = mN[a8q], fT = 0; fT < g.length; fT++)
						if (g[fT].jd === jd) {
							a7I.push(g.splice(fT, 1)[0]);
							continue loop
						} a8q = a7i[a8q], a8M(a8q = {
						jd: jd,
						hs: a8q,
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
		if (0 !== ag.n4[aD.et] && (!bC.gV.jr(aD.et) || aD.hI))
			for (var aB = a68.length - 1; 0 <= aB; aB--) vg.drawImage(a68[aB].canvas, a8d(aB), a8e(aB))
	}
}

function cJ() {
	var a74, kZ, a8s, a8t, j, a6q, fontSize, a8u, a8v, a8w, a8x, canvas, zH, nH, a8y;

	function vw(aB) {
		return L(0 === aB ? 107 : 1 === aB ? 108 : 2 === aB ? 109 : 110)
	}

	function a95() {
		aD.i3 ? a96 + 4 * be.gap + j + bj.a97() > aR.fI ? vg.drawImage(canvas, 2 * be.gap + bj.a97(), a96 + 2 * be.gap) : vg.drawImage(canvas, be.gap, a96 + 3 * be.gap + bj.a97()) : vg.drawImage(canvas, be.gap, a96 + 2 * be.gap)
	}

	function a8z() {
		canvas.width = a74[0].width + a8w, canvas.height = j + a8w, (zH = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a74[0].width + a8w, j + a8w), zH.translate(Math.floor(a8w / 2), Math.floor(a8w / 2)), zH.lineWidth = a8w, zH.fillStyle = 1 === a74[0].a94 ? bD.oA : bD.o2, a98(), zH.fill(), zH.strokeStyle = 1 === a74[0].a94 ? bD.nw :
			bD.o5, a98(), zH.stroke(), bC.r2.textAlign(zH, 1), bC.r2.textBaseline(zH, 1), zH.fillStyle = 1 === a74[0].a94 ? bD.nw : bD.o5, zH.font = a6q[0], zH.fillText(vw(a74[0].a93), Math.floor(a74[0].width / 2), Math.floor(.72 * a8u[0] * j)), zH
			.font = a6q[1], zH.fillText(a74[0].qj, Math.floor(a74[0].width / 2), Math.floor((a8u[0] + .48 * a8u[1]) * j))
	}

	function a98() {
		zH.beginPath(), zH.moveTo(a8x, 0), zH.lineTo(a74[0].width - a8x, 0), zH.lineTo(a74[0].width, a8x), zH.lineTo(a74[0].width, j - a8x), zH.lineTo(a74[0].width - a8x, j), zH.lineTo(a8x, j), zH.lineTo(0, j - a8x), zH.lineTo(0, a8x), zH.closePath()
	}
	this.dh = function() {
		kZ = 4, a8s = a8t = nH = 0, a74 = [], a6q = new Array(2), fontSize = new Array(2), (a8u = new Array(2))[0] = .3, a8u[1] = .7, a8v = new Array(4), canvas = document.createElement("canvas"), a8y = bh.eX + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iI() ? .062 : .047) * h.iJ), fontSize[0] = Math.floor(.85 * a8u[0] * j), fontSize[1] = Math.floor(.85 * a8u[1] * j), a6q[0] = bC.r2.sr(1, fontSize[0]), a6q[1] = bC.r2.sr(1, fontSize[1]), aB = a8v.length -
			1; 0 <= aB; aB--) a8v[aB] = this.measureText(vw(aB) + "000", a6q[0]);
		if (a8w = Math.floor(1 + .05 * j), a8x = Math.floor(.2 * j), 0 < a74.length) {
			for (aB = a74.length - 1; 0 <= aB; aB--) i = this.measureText(a74[aB].qj + "00", a6q[1]), a74[aB].width = i < a8v[aB] ? a8v[aB] : i;
			a8z()
		}
	}, this.ec = function() {
		0 !== kZ && (4 === kZ ? bh.eX > a8y && (kZ = 0, 1 === aD.a18) && aQ.a1V(bU.xU.xV[bU.ep].name, 3, 1, 9) : (1 === kZ ? (0 === a8s && (a8z(), a8s = 1e-4), 1 <= (a8s += .002 * (bh.eX - nH)) && (a8t = 0, kZ = 2, a8s = 1), bh.dp = !0) : 2 ===
			kZ ? ((a8t += (bh.eX - nH) / 1e3) > a74[0].nM || 1 < a8t && 1 < a74.length) && (kZ = 3) : 3 === kZ && ((a8s -= .002 * (bh.eX - nH)) <= 0 && (a8s = 0, a74.shift(), kZ = 0 < a74.length ? 1 : 0), bh.dp = !0), nH = bh.eX))
	}, this.measureText = function(qj, a6q) {
		return vg.font = a6q, Math.floor(vg.measureText(qj).width)
	}, this.eg = function(a92, aB) {
		this.a1V(ag.zb[a92], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1V = function(qj, a93, a94, nM) {
		var i;
		qj.length && (i = (i = this.measureText(qj + "00", a6q[1])) < a8v[a93] ? a8v[a93] : i, a74.push({
			qj: qj,
			width: i,
			a93: a93,
			a94: a94,
			nM: nM
		}), 0 === kZ) && (a8s = 0, kZ = 1, nH = bh.eX)
	}, this.vf = function() {
		0 !== kZ && 0 !== a8s && (a8s < 1 ? (vg.globalAlpha = a8s, a95(), vg.globalAlpha = 1) : a95())
	}
}

function cs() {
	var j, canvas, zH, a99, a9A, a9B, a9C, a8O, a9D, a9E, a9F, a9G, a7o = !1,
		a40 = (this.hv = !1, this.i = 0, new Array(2)),
		a9H = 0;

	function mr() {
		var i = aw.i,
			lP = (a8O = !1, zG(zH, i, j), Math.floor(i / 2));
		1 === a99 ? (zH.fillStyle = bD.oP, zH.fillRect(lP, 0, lP, j)) : -1 === a99 && (zH.fillStyle = bD.og, zH.fillRect(0, 0, lP, j)), zI(zH, i, j, 2);
		var lP = (lP = Math.floor(.25 * j)) < 2 ? 2 : lP,
			a7y = (zH.fillStyle = bD.oB, Math.floor((j - 4) * a9A[1] / a9B[1]));
		0 < a7y && zH.fillRect(2, j - 2 - a7y, lP, a7y), 0 < (a7y = Math.floor((j - 4) * a9A[0] / a9B[0])) && zH.fillRect(i - 2 - lP, j - 2 - a7y, lP, a7y);
		lP = (lP = Math.floor(j / 8)) < 2 ? 2 : lP, zK(zH, Math.floor(.4 * j), 0, j, lP, .5, !1), zK(zH, Math.floor(i - 1.4 * j), 0, j, lP, .5, !0), a7y = 1.1 * j / a40[0].width;
		zH.imageSmoothingEnabled = !0, zH.setTransform(a7y, 0, 0, a7y, (i - a7y * a40[0].width) / 2, -.05 * j), zH.drawImage(a40[+a7o], 0, 0), zH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9M() {
		a9G = -1, a7o = ah.a9N(), aN.a5U(257), aN.a7n(a7o), aw.hv = !0, a8O = !0, a9D = 360;
		for (var fb, eY = 0, aB = al.l0 - 1; 0 <= aB; aB--) bC.gV.jr(al.l5[aB]) || (eY += ag.gx[al.l5[aB]]);
		a7o ? a9B[0] = Math.max(bN.fa(3 * eY, 4), 1) : aD.i3 ? (fb = 9 === aD.km && 8 === bi.kr[bj.l3()] ? 80 : (fb = bN.fa(100 * bj.l1(), aD.kE), bN.iH(200 - 2 * fb, 40, 100)), fb = bN.fa(fb * eY, 100), a9B[0] = Math.max(fb, 1)) : 8 === aD.km ? a9B[
			0] = Math.max(bN.fa(3 * eY, 4), 1) : a9B[0] = Math.max(bN.fa(3 * eY, 5), 1), a9B[1] = Math.max(eY - a9B[0], 1)
	}

	function a9I() {
		a9F = bh.kR(), a8O = !0, a9D = a99 = 0, a9C = [], aw.hv = !1, aN.a1G(247), a9A[0] = a9A[1] = 0, aN.a5U(673)
	}

	function zD() {
		return aR.a7T(aN.a7P()) ? __fx.settings.keybindButtons ? aR.fI - 2 * (j + be.gap) : aR.fI - j - be.gap : bE.a7T(aN.a7S()) ? bE.zD() - j - be.gap : h.j - j - bm.a6F() * be.gap
	}
	this.di = function() {
		for (var aB = 0; aB < 2; aB++) a40[aB] = bC.canvas.zs(ab.get(3), 8 - aB, bD.pJ), a40[aB] = bC.canvas.a42(a40[aB])
	}, this.dh = function() {
		a9F = -1e4, a9E = a9H = 0, a9G = -1, this.hv = !1, a8O = a7o = !1, a9A = [a99 = a9D = 0, 0], a9B = [1, 1], a9C = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, zH = canvas.getContext("2d", {
			alpha: !0
		}), mr()
	}, this.mq = function() {
		a8O && mr()
	}, this.hM = function(fG, fI) {
		return !!this.hv && !(fG < h.i - this.i - be.gap || fI < zD() || (aD.hI || this.hw(aD.et) && (aM.hJ && aM.a3H(), bA.hZ.hx(fG > h.i - be.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ec = function() {
		0 < a9E ? 0 === --a9E && a9I() : this.hv ? 180 == --a9D && 3 * a9A[0] < a9B[0] ? a9I() : a9A[0] >= a9B[0] ? a7o ? bT.a0k.a13() : bT.a0k.a17() : a9A[1] >= a9B[1] ? a9E = 4 : a9D <= 0 && a9I() : ! function() {
			var a9P = bh.kR();
			if (a9P % 40 == 14) {
				if (a9H) return !(a9P < a9H) && !(a9P < a9F + 535) && (a9H = a9P + 1071, bC.gV.a4Z()) ? (a9M(), 1) : 0;
				(1 === al.l0 || (aD.i3 ? bj.l1() : ag.gx[m5[0]]) >= bN.fa(96 * aD.kE, 100)) && (a9H = a9P + 535)
			}
			return
		}() && 0 <= a9G && (aN.za(250, L(111, [ag.zb[a9G]]), 673, a9G, bD.o5, bD.o2, -1, !0), a9M())
	}, this.a19 = function() {
		this.hv && a9A[0] < a9B[0] && a9I()
	}, this.qc = function(player, a9Q) {
		var a9R = L(a9Q ? 112 : 113, [ag.zb[player]]),
			a9R = (aN.za(450, a9R, 257, player, a9Q ? bD.oN : bD.oc, bD.o2, -1, !0), a9C.push(player), a8O = !0, aD.ko ? Math.max(a9B[0], a9B[1]) : ag.gx[player]),
			a9R = Math.max(a9R, 1);
		a9Q ? a9A[0] += a9R : a9A[1] += a9R, player === aD.et && (a99 = a9Q ? 1 : -1)
	}, this.vf = function() {
		var fI;
		this.hv && (fI = zD(), vg.drawImage(canvas, h.i - this.i - be.gap, fI))
	}, this.hy = function(player) {
		if (0 !== a9D) return !1;
		if (!bC.gV.hK(1)) return !1;
		if (!bC.gV.hL(player)) return !1;
		if (10 <= kF[player] && !bC.gV.a4s(player, 9)) return !1;
		if (!aD.ko) {
			player = bh.kR();
			if (player < a9F + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hw = function(gh) {
		if (!bC.gV.hK(1)) return !1;
		if (!bC.gV.hL(gh)) return !1;
		if (!this.hv) return !1;
		for (var aB = a9C.length - 1; 0 <= aB; aB--)
			if (a9C[aB] === gh) return !1;
		return !0
	}, this.hu = function(player) {
		a9G = player
	}
}

function cK() {
	var i, fG, a9T, canvas, zH, hv, il, a5L, a6q, a8O, a9U = 11 / 12;

	function a9W() {
		var a8V = Math.floor(il * (i - 2 * a9T)),
			a9Z = 1 + Math.floor(.0625 * aR.j),
			a9a = 1 + Math.floor(.3 * aR.j),
			a9b = Math.floor(.55 * aR.j);
		zH.clearRect(0, 0, i, aR.j), zH.fillStyle = bD.o1, zH.fillRect(0, 0, a9T, aR.j), zH.fillRect(a9T + a8V, 0, i - a9T - a8V, aR.j), zH.fillStyle = il < 1 / 3 ? "rgba(" + Math.floor(3 * il * 130) + ",130,0,0.85)" : il < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (il - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (il - 2 / 3) * 130) + ",0.85)", zH.fillRect(a9T, 0, a8V, aR.j), zH.fillStyle = bD.o5, zH.fillRect(0, 0, i, 1), zH.fillRect(0, aR.j - 1, i, 1), zH
			.fillRect(0, 0, 1, aR.j), zH.fillRect(a9T, 0, 1, aR.j), zH.fillRect(a9T + a8V, 0, 1, aR.j), zH.fillRect(i - a9T, 0, 1, aR.j), zH.fillRect(i - 1, 0, 1, aR.j), zH.fillRect(Math.floor(.25 * aR.j) + a9a, Math.floor((aR.j - a9Z) / 2), aR.j -
				2 * a9a, a9Z), zH.fillRect(Math.floor(i - 1.25 * aR.j) + a9a, Math.floor((aR.j - a9Z) / 2), aR.j - 2 * a9a - a9a % 2, a9Z), zH.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9Z) / 2), a9a, a9Z, aR.j - 2 * a9a - a9a % 2),
			a5L = bC.gV.ik(aD.et, aR.hd()), zH.fillText(bC.s1.a0P(a5L) + " (" + bC.s1.a5E(100 * il, +(il < .1)) + ")", Math.floor(.5 * i), a9b)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		il = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a3D(arg1);

	function a9g(a3Z) {
		return !(1 < a3Z && 1 === il || (1 < a3Z && a3Z * il - il < 1 / 1024 ? a3Z = (il + 1 / 1024) / il : a3Z < 1 && il - a3Z * il < 1 / 1024 && (a3Z = (il - 1 / 1024) / il), il = bN.iH(il * a3Z, 1 / 1024, 1), a9W(), 0))
	}

	function a9h(lj) {
		return il !== (il = bN.iH((lj - fG - a9T) / (i - 2 * a9T), 1 / 1024, 1)) && (a9W(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9W(), bh.dp = !0
	}, this.fI = 0, this.hN = !1, this.dh = function() {
		hv = !aD.hX && !aD.hI, a8O = !1, il = (bl.eU.data[182].value + 1) / 1024, a5L = 0, this.hN = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iI() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iJ), i = h.i - 4 * be.gap - this.j) : (i = Math.floor((a0.a1.iI() ? .65 : .389) * h.iJ), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9T = Math.floor(3 * this.j / 2), a6q =
			bC.r2.sr(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vg), canvas.height = this.j, (zH = canvas.getContext("2d", {
				alpha: !0
			})).font = a6q, bC.r2.textBaseline(zH, 1), bC.r2.textAlign(zH, 1), this.a9V(), a9W()
	}, this.a9V = function() {
		fG = a0.a1.iI() && h.i < .8 * h.j ? this.j + 3 * be.gap : Math.floor((h.i - i) / 2), this.fI = h.j - this.j - bm.a6F() * be.gap
	}, this.mq = function() {
		a8O && (a8O = !1, a9W())
	}, this.hv = function() {
		return !(!hv || aM.hJ && fG < Math.floor(be.gap + 5.5 * this.j))
	}, this.a7T = function(a9c) {
		return !!this.hv() && fG + i > h.i - a9c - be.gap
	}, this.a5S = function() {
		hv = !aD.hI
	}, this.a9I = function() {
		hv = !1
	}, this.hd = function() {
		return bN.iH(Math.floor(1024 * il + .5) - 1, 0, 1023)
	}, this.a3A = function(lj, lk) {
		return this.hv() && fG < lj && lj < fG + i && lk > this.fI
	}, this.hM = function(lj, lk) {
		if (!this.hv()) return !1;
		if (!(__fx.settings.keybindButtons && lk > this.fI - Math.floor(be.gap / 4) - this.j && lk < this.fI - Math.floor(be.gap / 4) && __fx.mobileKeybinds.click(lj - fG))) {
			if (!aR.a3A(lj, lk)) return !1;
			aS.na = !1, ! function(sc, lj, lk) {
				if (function(lj, lk) {
						return fG < lj && lj < fG + a9T && lk > aR.fI
					}(lj, lk)) return a9g(a9U);
				if (function(lj, lk) {
						return fG + i - a9T < lj && lj < fG + i && lk > aR.fI
					}(lj, lk)) return a9g(1 / a9U);
				return sc.hN = !0, a9h(lj)
			}(this, lj, lk) || (bh.dp = !0)
		}
		return !0
	}, this.a3D = function(nh) {
		0 !== aD.a18 && this.hv() && a9g(nh) && (bh.dp = !0)
	}, this.a2j = function(deltaY) {
		var nh;
		return !(0 === deltaY || !this.hv()) && a9g(nh = 0 < deltaY ? (nh = 400 / (400 + deltaY)) < a9U ? a9U : nh : 1 / a9U < (nh = (400 - deltaY) / 400) ? 1 / a9U : nh)
	}, this.a2g = function(lj) {
		return !!this.hN && a9h(lj)
	}, this.a36 = function() {
		this.hN = !1
	}, this.ec = function() {
		this.hv() && a5L !== bC.gV.ik(aD.et, this.hd()) && (a8O = !0)
	}, this.vf = function() {
		this.hv() && (vg.drawImage(canvas, fG, this.fI), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vg, fG, this.fI)
	}
}

function d4() {
	var canvas, zH, a9i, font, a9j = 0,
		a9k = !1,
		a9l = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9m = 5;

	function a9t() {
		if (a9k) {
			var aB, f9 = a9l.length,
				a9b = Math.floor(.5 * a9i.j),
				j = f9 * a9b,
				fG = Math.floor(Math.floor(a9i.fG) + .3 * a9i.i - .5),
				fI = Math.floor(Math.floor(a9i.fI) - j),
				i = Math.floor(.4 * a9i.i + 2.5);
			for (vg.fillStyle = bD.o1, vg.fillRect(fG, fI, i, j), vg.fillStyle = bD.oU, vg.fillRect(fG, fI + a9m * a9b, i, a9b), vg.fillStyle = bD.o5, vg.fillRect(fG, fI, 2, j), vg.fillRect(fG, fI, i, 2), vg.fillRect(fG + i - 2, fI, 2, j), aB =
				1; aB < f9; aB++) vg.fillRect(fG, fI + aB * a9b, i, 2);
			for (vg.fillStyle = bD.o5, bC.r2.textAlign(vg, 1), bC.r2.textBaseline(vg, 1), vg.font = bC.r2.sr(0, .6 * a9b), fG += .5 * i, aB = 0; aB < f9; aB++) vg.fillText(aA1(aB), fG, fI + (aB + .6) * a9b)
		}
		vg.drawImage(canvas, Math.floor(a9i.fG), Math.floor(a9i.fI))
	}

	function mr(sc) {
		var fG, nV, nW, a9b;
		zH.clearRect(0, 0, Math.floor(a9i.i), Math.floor(a9i.j)), zH.fillStyle = bD.o1, zH.fillRect(0, 0, Math.floor(a9i.i), Math.floor(a9i.j)), aD.nY && (zH.fillStyle = bD.oU, zH.fillRect(0, 0, Math.floor(.3 * a9i.i), Math.floor(a9i.j))), zH
			.fillStyle = bD.o5, zH.fillText("Hide UI", .15 * a9i.i, .5 * a9i.j), zH.fillRect(Math.floor(.3 * a9i.i - .5), 0, 2, Math.floor(a9i.j)), fG = .5 * a9i.i, zH.fillText("Replay Speed", fG, .31 * a9i.j), zH.fillText(aA1(a9m), fG, .69 * a9i.j),
			zH.fillRect(Math.floor(.7 * a9i.i - .5), 0, 2, Math.floor(a9i.j)), sc.a5z ? (fG = Math.floor(.02 * a9i.i), sc = Math.floor(.025 * a9i.i), nV = Math.floor(.85 * a9i.i - fG - .5 * sc), nW = Math.floor(.25 * a9i.j), a9b = Math.floor(a9i.j) -
				2 * nW, zH.fillRect(nV, nW, fG, a9b), zH.fillRect(nV + fG + sc, nW, fG, a9b)) : function() {
				var i = Math.floor(.46 * a9i.j),
					j = Math.floor(.23 * a9i.j),
					fG = Math.floor(.85 * a9i.i - .5 * i + i / 12),
					fI = Math.floor(.5 * a9i.j - j);
				zH.beginPath(), zH.moveTo(fG, fI), zH.lineTo(fG + i, fI + j), zH.lineTo(fG, fI + (j << 1)), zH.fill()
			}(), zH.fillRect(0, 0, Math.floor(a9i.i), 2), zH.fillRect(0, 0, 2, Math.floor(a9i.j)), zH.fillRect(0, Math.floor(a9i.j) - 2, Math.floor(a9i.i), 2), zH.fillRect(Math.floor(a9i.i - 2), 0, 2, Math.floor(a9i.j))
	}

	function aA1(aB) {
		return 5 === aB ? "Normal" : "" + a9l[aB]
	}
	this.a5z = !1, this.dh = function() {
		aD.hI && (a9m = 5, this.a5z = !1, a9k = !1, a9i = new rd([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9n = function() {
		return a9l[a9m]
	}, this.zD = function() {
		return a9i.fI
	}, this.a7T = function(a9c) {
		return !!aD.hI && a9i.fG + a9i.i > h.i - a9c - be.gap
	}, this.resize = function() {
		aD.hI && (a9i.resize(), a9i.fI -= (bm.a6F() - 1) * be.gap, font = bC.r2.sr(0, .3 * a9i.j), (canvas = document.createElement("canvas")).width = Math.floor(a9i.i), canvas.height = Math.floor(a9i.j), (zH = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bC.r2.textAlign(zH, 1), bC.r2.textBaseline(zH, 1), mr(this))
	}, this.a3G = function(a9o) {
		0 === aD.a18 || t.hv() || a9o !== aD.nY && (aD.nY = a9o, bj.resize(), bh.dp = !0, aD.hI) && (a9j = bh.eX + 2e3, mr(this))
	}, this.hM = function(fG, fI) {
		if (!aD.hI) return !1;
		if (fG < a9i.fG || fI < a9i.fI || fG > a9i.fG + a9i.i) return a9k && function(sc, fG, fI) {
			var f9 = a9l.length,
				a9b = Math.floor(.5 * a9i.j),
				j = f9 * a9b,
				nV = Math.floor(Math.floor(a9i.fG) + .3 * a9i.i - .5),
				j = Math.floor(Math.floor(a9i.fI) - j),
				i = Math.floor(.4 * a9i.i + 2.5);
			return a9k = !1, bh.dp = !0, fG < nV || nV + i < fG || fI < j || (a9m = a9s(0, Math.floor((fI - j) / a9b), f9 - 1), mr(sc)), !0
		}(this, fG, fI);
		if ((fG -= a9i.fG) < .3 * a9i.i) a9k = !1, this.a3G(!aD.nY);
		else {
			if (fG < .7 * a9i.i) return a9k = !a9k, bh.dp = !0;
			this.a3I(!1)
		}
		return !0
	}, this.a3I = function(a9q) {
		2 === aD.a18 ? (this.a3G(!1), t.u(3)) : (a9k = !1, this.a5z = !this.a5z, this.a5z ? (aM.hJ && aM.a3H(), a0.a1.setState(1)) : a9q || aM.a6x(), bh.dp = !0, mr(this))
	}, this.a9r = function() {
		this.a5z = !1, aM.a6x(), bh.dp = !0, mr(this)
	}, this.a2z = function(fG, fI) {
		return !!aD.nY && (0 <= aM.hM(fG, fI) || (aD.hI ? ((bh.eX > a9j || !this.hM(fG, fI)) && aS.hM(fG, fI), bh.dp = !0, a9j = bh.eX + 2e3) : aS.hM(fG, fI)), !0)
	}, this.ec = function() {
		aD.hI && aD.nY && bh.eX > a9j - 1e3 && bh.eX < a9j && (bh.dp = !0)
	}, this.a1H = function() {
		aD.hI && (this.a5z = !1, bh.dp = !0, mr(this))
	}, this.vf = function() {
		if (aD.hI) {
			if (aD.nY) {
				if (bh.eX > a9j) return;
				if (bh.eX > a9j - 1e3) return vg.globalAlpha = a9s(0, (1e3 - (bh.eX - (a9j - 1e3))) / 1e3, 1), a9t(), void(vg.globalAlpha = 1)
			}
			a9t()
		}
	}
}

function cL() {
	var aA2, aA3, i, fG, fI, aA4, aA5;
	this.dh = function() {
		aA2 = new Array(2), aA3 = new Array(2), this.na = !1, aA5 = aA4 = io = im = 0, iK = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iI() ? .072 : .0502) * h.iJ)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) aA2[aB] = document.createElement("canvas"), aA2[aB].width = i, aA2[aB].height = i, aA3[aB] = aA2[aB].getContext("2d", {
			alpha: !0
		});
		this.a9V(),
			function() {
				for (var aAM = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) aA3[aB].clearRect(0, 0, i, i), aA3[aB].fillStyle = bD.ny, aA3[aB].beginPath(), aA3[aB].arc(i / 2, i / 2, i / 2 - aAM, 0, 2 * Math.PI), aA3[aB].fill(), aA3[aB]
					.lineWidth = aAM, aA3[aB].fillStyle = bD.o5, aA3[aB].strokeStyle = bD.o5, aA3[aB].beginPath(), aA3[aB].arc(i / 2, i / 2, i / 2 - aAM, 0, 2 * Math.PI), aA3[aB].stroke(), zK(aA3[aB], 0, 0, i, aAM, .3, 0 === aB)
			}()
	}, this.zC = function() {
		return -im / iK
	}, this.zD = function() {
		return -io / iK
	}, this.nk = function(aA9, iQ) {
		im = iK * aA9 - iQ
	}, this.nl = function(aAA, iR) {
		io = iK * aAA - iR
	}, this.hM = function(aA8, a7U) {
		return aD.nY || ! function(aA8, a7U) {
			return Math.pow(aA8 - (fG + i / 2), 2) + Math.pow(a7U - (fI + i / 2), 2) < i * i / 4 || Math.pow(aA8 - (fG + i / 2), 2) + Math.pow(a7U - (fI + 2 * i), 2) < i * i / 4
		}(aA8, a7U) || bl.eU.data[8].value ? (aH.nn() && (this.na = !0, aA4 = aA8, aA5 = a7U), !1) : a7U < fI + 1.25 * i ? this.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2j(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2g = function(aA8, a7U) {
		var aAB, aAC, iT, iW;
		return !aH.nn() || (aAB = im, aAC = io, im += iT = aA4 - aA8, io += iW = aA5 - a7U, af.a2g(iT, iW), this.aAD(), aA4 = aA8, aA5 = a7U, aAB !== im) || aAC !== io
	}, this.a2j = function(lj, lk, deltaY) {
		var nh;
		if (aH.nn()) {
			if (0 < deltaY) nh = (nh = 500 / (500 + deltaY)) < .5 ? .5 : nh;
			else {
				if (!(deltaY < 0)) return !1;
				nh = 2 < (nh = (500 - deltaY) / 500) ? 2 : nh
			}
			this.aAE(lj, lk, nh), bh.dp = !0
		}
		return !0
	}, this.aAE = function(fG, fI, en) {
		var a3Z;
		en = a3Z = (a3Z = 1024 < (a3Z = en) * iK ? 1024 / iK : a3Z) * iK < .125 ? .125 / iK : a3Z, af.zoom(en, fG, fI),
			function(a3Z, lj, lk) {
				iK *= a3Z, im = (im + lj) * a3Z - lj, io = (io + lk) * a3Z - lk, aS.aAD()
			}(en, fG, fI)
	}, this.aAD = function() {
		var aAH = h.i / 16,
			aAI = 0,
			aAJ = h.j / 16,
			aAK = 0;
		im < -h.i + aAH && (aAI = -h.i + aAH - im), im > iK * bU.fK - aAH && (aAI = iK * bU.fK - aAH - im), io < -h.j + aAJ && (aAK = -h.j + aAJ - io), io > iK * bU.fL - aAJ && (aAK = iK * bU.fL - aAJ - io), im += aAI, io += aAK, bc.nm(), af.aAL(
			aAI, aAK)
	}, this.a9V = function() {
		fG = h.i - i - be.gap, fI = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vf = function() {
		bl.eU.data[8].value || (vg.drawImage(aA2[0], fG, fI), vg.drawImage(aA2[1], fG, Math.floor(fI + 3 * i / 2)))
	}
}

function cM() {
	var g, aAN, aAO, aAP, gap, aAQ, aAR, aAS, aAT, aAU, a6q, aAV, hE, aAW, a8V, aAX, aAY;

	function aAc() {
		aAP = Math.floor(.2 * (a0.a1.iI() ? .07 : .035) * h.iJ), aAP = a7R(a0.a1.iI() ? 3 : 1, aAP);
		var aAf = h.i / (g.length + gap);
		aAP = aAP < aAf ? aAf : aAP, a8V = Math.floor((1 - gap) * aAP), aAN = 0, aAg()
	}

	function aAg() {
		aAN = (aAN = aAN < -20 ? -20 : aAN) > (g.length - 15) * aAP ? (g.length - 15) * aAP : aAN, aAR = Math.floor(aAN / aAP), aAS = (aAS = aAR + Math.floor(h.i / aAP)) > g.length - 1 ? g.length - 1 : aAS, aAR = (aAR = aAS < aAR ? aAS : aAR) < 0 ?
			0 : aAR;
		var lP = aAS;
		aAQ = aAO / g[lP];
		for (var aB = aAS - 1; aAR <= aB; aB--) g[aB] > g[lP] && (lP = aB, aAQ = aAO / Math.pow(g[aB], aAW))
	}

	function aAj(fG) {
		fG = Math.floor((aAN + h.i - fG - gap * aAP) / aAP);
		return (fG = fG < -1 ? -1 : -1 === fG ? 0 : fG > g.length - 1 ? -1 : fG) !== aAT && (aAT = fG, -1 === aAX && 0 === aAT && aT.aAZ && (aAX = setInterval(aAk, 100)), 1)
	}

	function aAl(aB) {
		var aAn = Math.floor(aAQ * Math.pow(g[aB], aAW));
		vg.fillRect(aAN + h.i - (aB + 1) * aAP, h.j - aAn, a8V, aAn)
	}

	function aAk() {
		var gh;
		0 !== (aAT = 8 === aa.a2K() ? -1 : aAT) ? (aAY = (new Date).getTime(), clearInterval(aAX), aAX = -1) : (gh = g[1] / 864e3, -1 !== aAY && (gh += ((new Date).getTime() - aAY) * g[1] / 864e5, aAY = -1), 0 < gh && (g[0] += Math.floor(gh), bh
			.dp = !0))
	}
	this.aAZ = !1, this.dh = function() {
		aAY = aAX = -1, aAT = -(aAW = 1), this.aAa = !1, hE = 0, aAV = new Date, aAN = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAO = Math.floor(.15 * h.j), aAU = (aAU = Math.floor((a0.a1.iI() ? .018 : .0137) * h.iJ)) < 2 ? 2 : aAU, a6q = bC.r2.sr(1, aAU), aAc()
	}, this.aAd = function(aAe) {
		var aB;
		for (this.aAZ = !0, aB = 0; aB < aAe.length; aB++) g.unshift(aAe[aB]);
		aAc(), bh.dp = !0
	}, this.aAh = function() {
		aAg()
	}, this.a2g = function(fG, fI) {
		fI > h.j - .6 * aAO ? this.aAa ? fG !== hE && (aAN += fG - hE, hE = fG, aAg(), aAj(fG), this.aAa = -1 !== aAT, bh.dp = !0) : aAj(fG) && (bh.dp = !0) : this.s3()
	}, this.s3 = function() {
		-1 !== aAT && (this.aAa = !1, aAT = -1, bh.dp = !0)
	}, this.a2j = function(fG, deltaY) {
		-1 !== aAT && (aAN += Math.floor(deltaY), aAg(), aAj(fG), bh.dp = !0)
	}, this.hM = function(fG, fI) {
		this.a2g(fG, fI), -1 !== aAT && (hE = fG, this.aAa = !0)
	}, this.a35 = function() {
		-1 !== aAT && (this.aAa = !1)
	}, this.vf = function() {
		vg.fillStyle = bD.o8;
		for (var aAo, month, eY, tS, aAr, aAs, nW, aAt, aAu, aB = aAS; aAR <= aB; aB--) aAl(aB);
		this.aAZ && 0 === aAR && (vg.fillStyle = bD.og, aAl(0)), -1 !== aAT && (vg.fillStyle = bD.o7, aAl(aAT)), -1 !== aAT && (vg.font = a6q, bC.r2.textBaseline(vg, 2), (eY = new Date).setTime(aAV.getTime() - 1e3 * aAT * 60 * 60 * 24), month =
			"month", aAo = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eY), aAo = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eY)), aAo = aAo + ", " + eY.getUTCDate() + " " + month + " " + eY.getFullYear(), month = 1 === g[aAT] ? L(114) : L(115), month = bC.s1.a0P(g[aAT]) + " " + month, eY = Math.floor(vg.measureText(aAo).width), tS = Math
			.floor(vg.measureText(month).width), aAr = Math.floor(.5 * (eY + aAU)), aAs = (aAs = aAN + h.i - (aAT + 1) * aAP) < aAr ? aAr : aAs > h.i - aAr ? h.i - aAr : aAs, nW = h.j - Math.floor(aAQ * Math.pow(g[aAT], aAW)), aAt = Math
			.floor(1.1 * aAU), aAu = nW > h.j - aAt ? h.j - aAt : nW, vg.fillStyle = bD.o2, vg.fillRect(h.i - tS - aAU, aAu - aAt, tS + aAU, aAt), vg.fillRect(aAs - aAr, h.j - aAt, eY + aAU, aAt), vg.fillStyle = bD.o5, bC.r2.textAlign(vg, 2),
			vg.fillText(month, Math.floor(h.i - .5 * aAU), aAu), bC.r2.textAlign(vg, 1), vg.fillText(aAo, aAs, h.j), vg.strokeStyle = bD.o9, vg.lineWidth = 1, vg.beginPath(), vg.moveTo(0, nW), vg.lineTo(h.i, nW), vg.closePath(), vg.stroke())
	}
}

function cN() {
	var a6q, i, fI, aAv, aAw, aAx, canvas, zH, a8O, a4g, aAy, aAz, aB0, aB1;
	this.fG = 0, this.j = 0, this.dh = function() {
		aAx = aD.a5a, aAz = "rgba(0,100,0,0.8)", aB0 = "rgba(150,0,0,0.8)", a8O = aAy = !0, a4g = ag.hB[aD.et], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iI() ? .305 : .24) * h.iJ), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6q = bC.r2.sr(1, Math.floor(.8 * this.j)), aAw = bC.r2.sr(1, Math.floor(.45 * this.j)), aB1 = Math.floor(.5 * this.j), bU.xa
			.font = a6q, fI = be.gap, aAv = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, zH = canvas.getContext("2d", {
				alpha: !0
			}), bC.r2.textBaseline(zH, 1), bC.r2.textAlign(zH, 1), this.aB2()
	}, this.a8r = function() {
		return a0.a1.iI() && h.i < 1.2 * h.j
	}, this.a9V = function() {
		this.a8r() ? this.fG = h.i - i - be.gap : this.fG = Math.floor(aV.aB3() + (h.i - aV.aB3() - aW.i - i) / 2 - .5 * be.gap)
	}, this.mq = function() {
		a8O && (a8O = !1, this.aB2())
	}, this.aB2 = function() {
		zH.font = a6q, zH.clearRect(0, 0, i, this.j), zH.fillStyle = aAy ? aAz : aB0, zH.fillRect(0, 0, i, this.j), zH.fillStyle = bD.o7;
		var eh = this.aB4(),
			aB6 = (this.aB5(), zH.fillStyle = ag.hB[aD.et] >= ae.kA(aD.et) ? bD.oc : bD.o5, bC.s1.a0P(a4g)),
			aB6 = (zH.fillText(aB6, Math.floor(i / 2), aB1), zH.measureText(aB6).width),
			eh = (zH.font = aAw, zH.fillStyle = 9 === eh ? bD.pD : bD.o5, ae.aB8),
			aB9 = "+" + eh,
			tS = zH.measureText(aB9).width,
			aBA = Math.floor(this.j / 12),
			aB6 = .5 * (i + aB6) + aBA;
		(aB6 + tS + aAv <= i || 1e3 <= eh && (aB9 = "+" + Math.floor(eh / 1e3) + "K", aB6 + (tS = zH.measureText(aB9).width) + aAv <= i)) && zH.fillText(aB9, Math.floor(aB6 + .5 * tS), Math.floor(.3 * this.j)), zH.fillStyle = bD.o5, zH.fillRect(
			0, 0, i, 1), zH.fillRect(0, 0, 1, this.j), zH.fillRect(0, this.j - 1, i, 1), zH.fillRect(i - 1, 0, 1, this.j)
	}, this.aB4 = function() {
		var eh = bh.kR() % 100,
			yF = (eh = 9 - bN.fa(eh -= eh % 10, 10), Math.floor(eh * (this.j - aAv) / 9));
		return zH.fillRect(0, yF, aAv, this.j - yF), zH.fillRect(i - aAv, yF, aAv, this.j - yF), eh
	}, this.aB5 = function() {
		zH.fillRect(aAv, this.j - aAv, Math.floor((i - 2 * aAv) * ag.hB[aD.et] / aAx), aAv)
	}, this.ec = function() {
		var gh = aD.et;
		bC.gV.hL(gh) && (gh = ag.hB[gh] - ag.a4f[gh], a4g !== gh ? (aAx = a7R(gh, aAx), aAy = a4g < gh && 10 <= gh, a4g = gh, a8O = !0) : bh.kR() % 10 == 9 && (a8O = !0))
	}, this.vf = function() {
		0 === ag.n4[aD.et] || aD.hX || 2 === ag.a4W[aD.et] || vg.drawImage(canvas, this.fG, fI)
	}
}

function cO() {
	var aBB, aBC, aBD, aBE, aBF, aBG, aBH, aBI, aBJ, aBK, aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBW, position, aBX, aBY, aBZ, aBa, aBb, aBc = 1,
		aBd = 1,
		aBe = "";
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

	function aBg() {
		aBH.clearRect(0, 0, aBB, a96),
			aBH.fillStyle = aBb ? bD.p0 : bD.ow,
			aBH.fillRect(0, 0, aBB, aBM),
			aBH.fillStyle = bD.o1,
			aBH.fillRect(0, aBM, aBB, a96 - aBM);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kF[aD.et]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBW = -1;
		if (__fx.leaderboardFilter.enabled && aBW >= __fx.leaderboardFilter.filteredLeaderboard.length) aBW = -1;
		playerPos >= position && aBi(playerPos - position, bD.oU),
			0 !== kF[aD.et] && 0 === position && aBi(0, bD.p4),
			-1 !== aBW && aBi(aBW, bD.o6),
			aBH.fillStyle = bD.o1,
			//console.log("drawing", aBW),
			aBH.clearRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, __fx.leaderboardFilter.tabBarOffset);
		aBH.fillRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, __fx.leaderboardFilter.tabBarOffset);
		aBH.fillStyle = bD.o5,
			aBH.fillRect(0, aBM, aBB, 1),
			aBH.fillRect(0, a96 - __fx.leaderboardFilter.tabBarOffset, aBB, 1),
			__fx.leaderboardFilter.drawTabs(aBH, aBB, a96 - __fx.leaderboardFilter.tabBarOffset, bD.oU),
			aBH.fillRect(0, 0, aBB, be.a06),
			aBH.fillRect(0, 0, be.a06, a96),
			aBH.fillRect(aBB - be.a06, 0, be.a06, a96),
			aBH.fillRect(0, a96 - be.a06, aBB, be.a06), aBH.font = aBC, bC.r2.textBaseline(aBH, 1), bC.r2.textAlign(aBH, 1), aBH.fillText(aBe, Math.floor((aBB + aBM - 22) / 2), Math.floor(aBK + aBD / 2));
		__fx.playerList.drawButton(aBH, 12, 12, aBM - 22);
		var fS, gi = playerPos < position + aBF - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aBF)
				position = (result.length > aBF ? result.length : aBF) - aBF;
			//if (position >= result.length) position = result.length - 1;
			for (aBH.font = aBE, bC.r2.textAlign(aBH, 0), fS = aBF - gi; 0 <= fS; fS--) {
				const pos = result[fS + position];
				if (pos !== undefined)
					aBj(m5[pos]), aBk(fS, pos, m5[pos]);
			}
			for (bC.r2.textAlign(aBH, 2), fS = aBF - gi; 0 <= fS; fS--) {
				const pos = result[fS + position];
				if (pos !== undefined)
					aBj(m5[pos]), aBl(fS, m5[pos]);
			}
		} else {
			for (aBH.font = aBE, bC.r2.textAlign(aBH, 0), fS = aBF - gi; 0 <= fS; fS--)
				aBj(m5[fS + position]), aBk(fS, fS + position, m5[fS + position]);
			for (bC.r2.textAlign(aBH, 2), fS = aBF - gi; 0 <= fS; fS--)
				aBj(m5[fS + position]), aBl(fS, m5[fS + position]);
		}
		2 == gi && (aBj(aD.et), bC.r2.textAlign(aBH, 0), aBk(aBF - 1, kF[aD.et], aD.et), bC.r2.textAlign(aBH, 2), aBl(aBF - 1, aD.et)), 0 === position && (gi = .7 * aBN / ab.get(4).height, aBH.setTransform(gi, 0, 0, gi, Math.floor(aBO + .58 * aBN +
			.5 * gi * ab.get(4).width), Math.floor(aBK + aBD + .4 * aBN)), aBH.imageSmoothingEnabled = !0, aBH.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aBH.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBj(player) {
		aD.i3 && (aBH.fillStyle = bi.aBn[bi.aBo[player]])
	}

	function aBi(aB, aBp) {
		aBH.fillStyle = aBp, aB = aBF - 1 < aB ? aBF - 1 : aB;
		aBp = Math.floor((aB === aBF - 1 ? 2 : 0 === aB ? 1.15 : 1) * aBN), aBp = aB === aBF - 2 ? Math.floor(aBM + 9.15 * aBN) - Math.floor(aBM + 8.15 * aBN) : aBp;
		aBH.fillRect(0, Math.floor(aBM + (aB + (0 === aB ? 0 : .15)) * aBN), aBB, aBp)
	}

	function aBk(wk, a4u, aB) {
		aBH.fillText(aBS[a4u], aBO, Math.floor(aBK + aBD + (wk + .5) * aBN)), 1 === ag.a4W[aB] && (aBH.font = "italic " + aBE);
		a4u = Math.floor(aBK + aBD + (wk + .5) * aBN);
		aBH.fillText(ag.zb[aB], aBP, a4u), 0 !== ag.a4W[aB] && (aBH.font = aBE), aB < aD.kU && 2 !== ag.a4W[aB] || aBH.fillRect(aBP, a4u + .35 * aBc, aBR[aB], Math.max(1, .1 * aBc))
	}

	function aBl(wk, aB) {
		aBH.fillText(ag.gx[aB], aBQ, Math.floor(aBK + aBD + (wk + .5) * aBN))
	}
	this.dh = function() {
		var aB;
		for (t.y.tC[0] = 0, aBa = aBZ = aBX = 0, aBb = aBY = !1, aBW = -1, aBF = a0.a1.iI() ? 6 : 10, aBd = (position = 0) === (aBd = bl.eU.data[11].value) ? 10 : 1 === aBd ? 5 : 1, aBV = !1, aBT = new Uint16Array(aBF + 1), aBU = new Uint32Array(
				aBF + 1), aBJ = aD.f6, m5 = new Uint16Array(aBJ), kF = new Uint16Array(aBJ), aB = aBJ - 1; 0 <= aB; aB--) m5[aB] = aB, kF[aB] = aB;
		this.resize(!0), aBR = new Uint16Array(aD.f6);
		var aBf = Math.floor(aBB - aBP - aBO - aBI);
		for (aBS = new Array(aD.f6), aBH.font = aBE, aB = aD.f6 - 1; 0 <= aB; aB--) aBS[aB] = aB + 1 + ".", ag.zb[aB] = bC.zH.a4E(ag.a1o[aB], aBE, aBf), aBR[aB] = Math.floor(aBH.measureText(ag.zb[aB]).width);
		aBg()
	}, this.resize = function(dh) {
		if (a96 = a0.a1.iI() ? (aBB = Math.floor(.335 * h.iJ), Math.floor(aBF * aBB / 8)) : (aBB = Math.floor(.27 * h.iJ), Math.floor(aBF * aBB / 10)), aBB = Math.floor(.97 * aBB), (aBG = document.createElement("canvas")).width = aBB, aBG
			.height = a96, aBH = aBG.getContext("2d", {
				alpha: !0
			}), aBK = .025 * aBB, aBD = .16 * aBB, aBL = 0 * aBB, aBM = Math.floor(.45 * aBK + aBD), aBN = (a96 - aBD - 2 * aBK - aBL) / aBF,
			aBG.height = a96 += aBN, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBN * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a96 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aBB,
			aBC = bC.r2.sr(1, Math.floor(.55 * aBD)), aBc = Math.floor((a0.a1.iI() ? .67 : .72) * aBN), aBE = bC.r2.sr(0, aBc), aBH.font = aBE, aBO = Math.floor(.04 * aBB), aBP = Math.floor((a0.a1.iI() ? .195 : .18) * aBB), aBI = Math.floor(aBH
				.measureText("00920600").width), aBH.font = aBC, aBQ = aBB - aBO, !dh) {
			aBH.font = aBE;
			for (var aB = aD.f6 - 1; 0 <= aB; aB--) aBR[aB] = Math.floor(aBH.measureText(ag.zb[aB]).width);
			aBg()
		}
		aBe = bC.zH.a4E(L(116), aBC, .96 * aBB)
	}, this.aB3 = function() {
		return aBB
	}, this.mq = function(bw, aBh) {
		(aBh || aBV && (bw || bh.kR() % aBd == 0)) && (aBV = !1, aBg())
	}, this.ec = function() {
		! function() {
			for (var fS = aBJ - 1; 0 <= fS; fS--) 0 === ag.n4[m5[fS]] && ! function(fS) {
				var aBx = m5[fS];
				aBJ--;
				for (var aB = fS; aB < aBJ; aB++) m5[aB] = m5[aB + 1], kF[m5[aB]] = aB;
				m5[aBJ] = aBx, kF[m5[aBJ]] = aBJ
			}(fS)
		}();
		for (var aBv, nn = aBJ - 1, fS = 0; fS < nn; fS++) ag.gx[m5[fS]] < ag.gx[m5[fS + 1]] && (aBv = m5[fS], m5[fS] = m5[fS + 1], m5[fS + 1] = aBv, kF[m5[fS]] = fS, kF[m5[fS + 1]] = fS + 1);
		! function() {
			for (var eY = aBV, gi = (aBV = !0, kF[aD.et] >= aBF - 1 ? aBF - 2 : aBF - 1), aB = gi; 0 <= aB; aB--)
				if (aBT[aB] !== m5[aB] || aBU[aB] !== ag.gx[m5[aB]]) return;
			(gi != aBF - 2 || aBT[aBF] === kF[aD.et] && aBU[aBF] === ag.gx[aD.et]) && (aBV = eY)
		}();
		for (var aB = aBF - 1; 0 <= aB; aB--) aBT[aB] = m5[aB], aBU[aB] = ag.gx[m5[aB]];
		aBT[aBF] = kF[aD.et], aBU[aBF] = ag.gx[aD.et];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hM = function(fG, fI) {
		if (a05(fG, fI)) {
			if (__fx.utils.isPointInRectangle(fG, fI, be.gap + 12, be.gap + 12, aBM - 22, aBM - 22)) __fx.playerList.display(ag.a1o);
			else {
				if (fI - be.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fG - be.gap);
				fG = aBz(fI);
				0 <= fG ? (aBX = bh.eX, aBY = !0, aBZ = aBa = fG, bL.a3J() && (fG = a9s(-1, aBa, aBF), aBW !== (fG = fG === aBF ? -1 : fG)) && (aBW = fG, aBg(), bh.dp = !0)) : (aBb && (aBb = !1, aBg(), bh.dp = !0), t.u(10, 0, new aC0({
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

	function aBz(fI) {
		return (fI -= be.gap + aBM) < 0 ? Math.floor(fI / aBN) - 1 : fI < (aBF - 1) * aBN ? Math.floor(fI / aBN) : fI < a96 - aBM ? aBF - 1 : (fI -= a96 - aBM, aBF + Math.floor(fI / aBN))
	}

	function a05(fG, fI) {
		return fG >= be.gap && fG < be.gap + aBB && fI >= be.gap && fI < be.gap + a96
	}
	this.a2g = function(fG, fI) {
		var eY, aBy;
		if (__fx.utils.isPointInRectangle(fG, fI, be.gap + 12, be.gap + 12, aBM - 22, aBM - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fG, fI, be.gap, be.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fG - be.gap)) return aBy = aBz(fI), fG = a05(fG, fI), fI = !(!(aBy < 0 && fG) || bL.a3J()), aBY ? (eY = position, (position = a9s(0, position += aBZ - aBy, aD.f6 - aBF)) !== eY ? (aBb = fI,
			aBy = a9s(-1, aBZ = aBy, aBF), aBW = aBy = aBy !== aBF && fG ? aBy : -1, aBg(), bh.dp = !0) : aBb !== fI && (aBb = fI, aBg(), bh.dp = !0), !0) : (aBy = (aBy = a9s(-1, aBy, aBF)) === aBF || !fG || bL.a3J() ? -1 : aBy, (aBW !==
			aBy || aBb !== fI) && (aBW = aBy, aBb = fI, aBg(), bh.dp = !0))
	}, this.a35 = function(fG, fI) {
		if (!aBY) return !1;
		aBY = !1;
		var aBy = aBz(fI);
		var isEmptySpace = false;
		return bL.a3J() && -1 !== aBW && (aBW = -1, aBg(), bh.dp = !0), bh.eX - aBX < 350 && aBa === aBy && -1 !== (aBy = (aBy = a9s(-1, aBy, aBF)) !== aBF && a05(fG, fI) ? aBy : -1) && (fG = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m5[__fx.leaderboardFilter.filteredLeaderboard[aBy + position] ?? (isEmptySpace = true, kF[aD.et])]) : m5[aBy + position]), aBy === aBF - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kF[aD.et]) >=
			position + aBF - 1 && (fG = aD.et), !isEmptySpace && aD.i3 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fG, ag.a1o, aD.ko), 0 !== ag.n4[fG] && !isEmptySpace) && aH.nQ(fG, 800, !1, 0), !0
	}, this.a2j = function(fG, fI, deltaY) {
		var aC4;
		return !(aBY || aD.nY || (aC4 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a05(fG, fI)) || (fG = (fG = a9s(-1, aBz(fI), aBF)) === aBF || bL.a3J() ? -1 : fG, 0 < deltaY ? position < aD.f6 - aBF && (position += Math.min(aD.f6 - aBF -
			position, aC4), aBW = fG, aBg(), bh.dp = !0) : 0 < position && (position -= Math.min(position, aC4), aBW = fG, aBg(), bh.dp = !0), 0))
	}, this.vf = function() {
		vg.drawImage(aBG, be.gap, be.gap)
	}
}

function cP() {
	var canvas, zH, fG, fI, aAn, aC5, gap, aC6, fontSize, aC7, aC8, aC9, aCA, aCB, aCC, aCD, aCE, aCF;

	function aCJ() {
		zH.clearRect(0, 0, aW.i, aW.j), zH.fillStyle = bD.o2, zH.fillRect(0, 0, aW.i, aW.j), zH.fillStyle = bD.oP, en = 0 < aCD ? aCD : aCA[4] / 1e4, zH.fillRect(0, aW.j - aAn - 1, Math.floor(en * aW.i), aAn), zH.fillStyle = bD.o5, zH.fillRect(0, 0,
			aW.i, 1), zH.fillRect(0, 0, 1, aW.j), zH.fillRect(aW.i - 1, 0, 1, aW.j), zH.fillRect(0, aW.j - 1, aW.i, 1), zH.fillRect(0, aW.j - aAn - 1, aW.i, 1);
		for (var en, aCL, eY = 0, aB = 0; aB < aC9.length; aB++) aCB[aB] ? (bC.r2.textAlign(zH, 0), aCL = Math.floor((aC5 - aAn + 2 * aC6) * (aB - eY + 1) / (aC9.length + 1) - .7 * aC6), zH.fillText(aC9[aB], gap, aCL), bC.r2.textAlign(zH, 2), 5 ===
			aB && 0 !== ag.n4[aD.et] && ag.hB[aD.et] >= ae.kA(aD.et) ? (zH.fillStyle = bD.p2, zH.fillText(aCH(aB), aW.i - gap, aCL), zH.fillStyle = bD.o5) : zH.fillText(aCH(aB), aW.i - gap, aCL)) : eY++
	}

	function aCH(aB) {
		return aB < 3 ? aCA[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bC.s1.a5E(aCA[aB] / 100, 2) : aB < 7 ? bC.s1.a0P(aCA[aB]) : aB === 7 ? aW.aCM(aCA[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gx, aD.et) : __fx.utils.getDensity(aD.et)
	}

	function aCG() {
		ag.gx[aD.et] !== aCA[6] && (aCA[6] = ag.gx[aD.et], aC7++)
	}
	this.dh = function() {
		aCD = aCE = 0, (aC8 = new Array(8))[0] = L(117), aC8[1] = aD.ko ? L(118) : L(119), aC8[2] = L(120), aC8[3] = L(121), aC8[4] = L(122), aC8[5] = L(123, 0, "Interest"), aC8[6] = L(124), aC8[7] = L(125),
			aC8.push("Max Troops", "Density"), // add aC8
			(aC9 = new Array(aC8.length)).fill(""), (aCA = new Array(aC8.length))[0] = aD.ko ? 0 : aD.kU, aCA[1] = aD.ko ? al.l0 : aD.kq, aCA[2] = aD.a1A, aCA[3] = 0, aCA[4] = bN.fa(1e4 * ag.gx[0], Math.max(aD.kE, 1)), aCA[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bN.fa(700 * aD.data.iIncomeValue, 64) : bN.fa(700 * aD.data.iIncomeData[aD.et], 64), aCA[6] = 0, aCG(), aCA[7] = 0, aCC = aCH(6), (aCB = new Array(aC8.length)).fill(!0), aCF = 0, aCF =
			aD.ko ? (aCB[0] = !1, aCB[2] = !1, aCB[3] = !1, 3) : (aCB[3] = !1, 1), aC7 = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iI() ? .1646 : .126) * 1.25 * h.iJ), this.j = Math.floor(1.18 * this.i), aAn = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aC6 = .04 * this.i, aC5 = this.j, this.j -= Math.floor(aCF * (this.j -
			2 * aAn) / aC8.length), fontSize = Math.floor(.7 * (aC5 - aAn) / aC8.length);
		var a6q = bC.r2.sr(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6q, i) {
				for (var aB = 0; aB < aC9.length; aB++) aC9[aB] = bC.zH.a4E(aC8[aB], a6q, i)
			}((zH = canvas.getContext("2d", {
				alpha: !0
			})).font = a6q, .575 * this.i), bC.r2.textBaseline(zH, 1), zH.lineWidth = 1, this.a5T(), this.a9V(), aU.a9V(), aCJ()
	}, this.a9V = function() {
		fG = h.i - this.i - be.gap
	}, this.aCK = function() {
		fI = be.gap
	}, this.a5T = function() {
		fI = be.gap + (aU.a8r() && 0 !== ag.n4[aD.et] && !aD.hX ? aU.j + be.gap : 0)
	}, this.mq = function(bw) {
		(bw || 100 <= aC7) && (aC7 = 0, aCJ())
	}, this.a6C = function() {
		return aCA[7]
	}, this.aCM = function(value) {
		var lP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lP) / 1e3);
		return value < 10 ? lP + ":0" + value : lP + ":" + value
	}, this.ec = function() {
		var aCX, per;
		aCB[0] && aD.a1B - aD.a1A !== aCA[0] && (aCA[0] = aD.a1B - aD.a1A, aC7++), al.l0 - aCA[0] !== aCA[1] && (aCA[1] = al.l0 - aCA[0], aC7++), this.mh(), (aCX = ae.aCY(aD.et)) !== aCA[5] && (aCA[5] = aCX, aC7++), aCG(), aCA[7] += bh.aCZ, aCX =
			aCH(7), aCC !== aCX && (aCC = aCX, aC7 += 100), aCX = aD.i3 ? bj.l1() : ag.gx[m5[0]], per = bN.fa(1e4 * aCX, Math.max(aD.kE, 1)), aCA[3] = aCX, aCA[4] !== per && (aC7++, aCA[4] = per), 8 === aD.km && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bC.gV.hL(aB)) return bT.a0k.a17(), 1;
				return
			}() || aCA[3] < aD.kE || ! function() {
				for (var aB = al.l0 - 1; 0 <= aB; aB--)
					if (0 < ag.gb[al.l5[aB]].length) return;
				return 1
			}() || bP.lJ.aCW().length || aD.i3 && bj.l1(1) < aD.kE || bT.a0k.a17()
	}, this.mh = function() {
		aCB[2] && aD.a1A !== aCA[2] && (aCA[2] = aD.a1A, aC7 += 2 === aD.a18 ? 100 : 1)
	}, this.aCT = function() {
		return aCA[3] === aD.kE
	}, this.aCa = function(aB) {
		var ti, aCb, eY;
		return 2 !== aD.a18 && (aB % 2 == 1 && (aV.mq(1, 1), bh.dp = !0), aB === aD.a5c ? (aCD = 0, aCJ(), !1) : (-1 !== aB || 0 !== aCE) && (aCb = aCD, aCD = aD.hI ? aB / aD.a5c : (eY = performance.now(), 0 <= aB && (ti = eY - 392 * aB, aCE =
			0 === aB || ti < aCE ? ti : aCE), 1 < (aCD = (eY - aCE) / (392 * aD.a5c)) ? 1 : aCD), aCJ(), aCD !== aCb))
	}, this.vf = function() {
		vg.drawImage(canvas, fG, fI)
	}
}

function cQ() {
	var hv, aCc, i, j, a9b, aCd, aCe, a8s, canvas, nH, aCf;

	function zD() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * be.gap ? h.j - j - 4 * be.gap - aR.j : h.j - j - 2 * be.gap
	}
	this.dh = function() {
		aCf = hv = !1, a9b = .61, aCd = .07, aCe = .09, nH = a8s = j = 0
	}, this.resize = function() {
		var zH, nV, eh, aCk, aCl, a6v;
		hv && (i = aCg(i = a0.a1.iI() ? Math.floor(.69 * h.iJ) : Math.floor(.5 * h.iJ), a7R(h.i - 2 * be.gap, 10)), i = aCg(i, Math.floor(3.57 * a7R(h.j - 2 * be.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, zH = canvas.getContext("2d", {
				alpha: !0
			}), nV = Math.floor(1 + j / 40), zH.clearRect(0, 0, i, j), zH.fillStyle = bD.o2, zH.fillRect(nV, nV, i - 2 * nV, j - 2 * nV), zH.lineJoin = "bevel", zH.lineWidth = 2 * nV, zH.strokeStyle = bD.o5, zH.strokeRect(nV, nV, i - 2 * nV,
				j - 2 * nV), zH.imageSmoothingEnabled = !1, eh = ab.get(aCc), aCk = eh.width, a6v = (1 === aCc ? .85 : 21 === aCc ? .666 : .9) * a9b * j / (aCl = eh.height), zH.setTransform(a6v, 0, 0, a6v, Math.floor((i - a6v * aCk) / 2),
				Math.floor((j - a6v * aCl) / 2)), zH.drawImage(eh, 0, 0), zH.setTransform(1, 0, 0, 1, Math.floor(i - aCe * j - aCd * j - nV), Math.floor(nV + aCd * j)),
			function(zH, f9) {
				zH.lineWidth = Math.floor(1 + j / 80), zH.strokeStyle = bD.o5, zH.beginPath(), zH.moveTo(0, 0), zH.lineTo(f9, f9), zH.moveTo(0, f9), zH.lineTo(f9, 0), zH.stroke()
			}(zH, Math.floor(aCe * j)), zH.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fb, aCi, a9N, aCj) {
		hv || aCj && aCf || (aCc = a9N ? 21 : fb ? 1 : 2, hv = aCf = !0, this.resize(), aL.sJ(), aR.a9I(), nH = bh.eX, a8s = aCi ? 1 : 0)
	}, this.ec = function() {
		!hv || 1 <= a8s || (a8s = 1 < (a8s += 5e-4 * (bh.eX - nH)) ? 1 : a8s, nH = bh.eX, bh.dp = !0)
	}, this.hM = function(fG, fI) {
		return !(!hv || a8s <= 0 || (fG -= Math.floor((h.i - i) / 2), fI -= zD(), fG < 0) || fI < 0 || i < fG || j < fI || (i - j / 3 < fG && fI < j / 3 && (hv = !1, bh.dp = !0), 0))
	}, this.vf = function() {
		!hv || a8s <= 0 || (vg.globalAlpha = a8s, vg.drawImage(canvas, Math.floor((h.i - i) / 2), zD()), vg.globalAlpha = 1)
	}
}

function dR() {
	var aCn, aCo = new Uint8Array(5),
		aCp = new Uint8Array(5);
	this.aCq = new aCr, this.dh = function() {
		for (var fb = bl.eU.data[119].value, aB = 0; aB < aCo.length; aB++) aCo[aB] = (fb >> 2 * aB) % 4
	}, this.a5o = function() {
		aCn = [L(126), "", L(127, [bZ.aCs[28]]), L(128, [bZ.aCs[26]]), L(129, [bZ.aCs[0]])], this.aCq.dh()
	}, this.ec = function() {
		this.aCq.ec()
	}, this.a6Z = function(id) {
		1 < id && bL.rU() || ! function(eG) {
			if (3 === aCo[eG] || 1 === aCp[eG]) return;
			if (aCp[eG] = 1, !(Math.random() < .6)) {
				aCo[eG]++;
				for (var fb = 0, aB = 0; aB < aCo.length; aB++) fb += aCo[aB] << 2 * aB;
				bl.pW.pX(119, fb)
			}
			return 1
		}(id) || aN.a7W(aCn[id])
	}
}

function aCr() {
	var aCu;
	this.dh = function() {
		aCu = !1
	}, this.ec = function() {
		var gh;
		if (function() {
				if (!aCu) {
					if (bh.kR() % 30 != 9) return;
					if (!bC.gV.m1(90)) return;
					aCu = !0
				}
				return 1
			}() && (! function() {
				var qu = aN.a7s(956);
				if (qu) {
					if (bC.gV.lS(qu.player)) return 1;
					aN.a7r(956, 0)
				}
				return
			}() && (-1 === (gh = (aD.i3 ? function() {
				var id = bj.l3(),
					f9 = al.l0;
				if (bi.kr[id])
					for (var a0w = al.l5, f7 = bi.f7, aB = 0; aB < f9; aB++) {
						var gh = a0w[aB];
						if (f7[gh] !== id) return gh
					} else if (1 < f9) return m5[f9 - 1];
				return -1
			} : function() {
				for (var aD2 = al.l0, lO = al.l5, aD3 = kF, aB = 0; aB < aD2; aB++) {
					var gh = lO[aB];
					if (0 !== aD3[gh]) return gh
				}
				return -1
			})()) ? ! function() {
				var qu = aN.a7s(957);
				if (qu && qu.a7N) {
					if (ac.f0(qu.a7N.ev << 2)) return 1;
					aN.a7r(957, 0)
				}
				return
			}() : (aN.za(0, L(130, [ag.zb[gh]]), 956, gh, bD.o5, bD.o2, -1, !0), 0)))) {
			var f9 = ao.j8.le;
			if (0 !== f9)
				for (var eU = ao.j8.eU, aB = 0; aB < f9; aB++) {
					var ev = eU[aB];
					if (ac.f0(ev << 2)) return void aN.za(0, L(131, [bO.fH(ev), bO.fJ(ev)]), 957, 0, bD.o5, bD.o2, -1, !0, void 0, {
						fS: 1,
						ev: ev
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
			e1 = bC.r2.rB(be.st),
			i5 = bC.r2.rB(Math.max(bC.r2.sL(.012), 8));
		try {
			aD6.sheet.insertRule(a9j + "{width:" + i5 + ";height:" + i5 + ";}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-thumb{background-color:white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j +
				"-track{background:" + bD.o1 + ";}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-track:horizontal{border-top:" + e1 + " solid white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j +
				"-track:vertical{border-left:" + e1 + " solid white;}", aD6.sheet.cssRules.length), aD6.sheet.insertRule(a9j + "-button{display:none;}", aD6.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aD6.sheet.cssRules.length - 1; 0 <= aB; aB--) aD6.sheet.deleteRule(0)
		}
	}
}

function dQ() {
	this.aD7 = !1, this.nv = !1, this.a5X = !1, this.aD8 = [0, 0, 0, 0], this.aD9 = function() {
		var nV, nW, ni, nj;
		this.a5X = this.a5X || this.nv, (this.nv || this.aD7 && this.a5X) && (nV = bc.aDA[0], nW = bc.aDA[1], ni = bc.aDA[2], nj = bc.aDA[3], nV = nV < this.aD8[0] ? this.aD8[0] : nV, nW = nW < this.aD8[1] ? this.aD8[1] : nW, ni = ni > this.aD8[
				2] ? this.aD8[2] : ni, nj = nj > this.aD8[3] ? this.aD8[3] : nj, this.nv = !1, this.aD7 = !1, nV === this.aD8[0] && nW === this.aD8[1] && ni === this.aD8[2] && nj === this.aD8[3] ? this.a5Y() : nV <= ni && nW <= nj && a5q
			.putImageData(a5r, 0, 0, nV, nW, ni - nV + 1, nj - nW + 1))
	}, this.a5Y = function() {
		this.a5X && this.aD8[2] >= this.aD8[0] && this.aD8[3] >= this.aD8[1] && a5q.putImageData(a5r, 0, 0, this.aD8[0], this.aD8[1], this.aD8[2] - this.aD8[0] + 1, this.aD8[3] - this.aD8[1] + 1), this.a5X = !1
	}, this.a1K = function() {
		this.aD8[2] >= this.aD8[0] && this.aD8[3] >= this.aD8[1] && a5q.putImageData(a5r, 0, 0, this.aD8[0], this.aD8[1], this.aD8[2] - this.aD8[0] + 1, this.aD8[3] - this.aD8[1] + 1), this.a5X = !1
	}, this.dh = function() {
		var fG, fI;
		this.aD7 = !1, this.nv = !1, this.a5X = !1, this.aD8[0] = bU.fK, this.aD8[1] = bU.fL, this.aD8[2] = this.aD8[3] = 0;
		loop: for (fG = 1; fG < bU.fK - 1; fG++)
			for (fI = bU.fL - 2; 1 < fI; fI--)
				if (1 === aDB[ac.yk(fG, fI) + 2]) {
					this.aD8[0] = fG;
					break loop
				} loop: for (fI = 1; fI < bU.fL - 1; fI++)
			for (fG = bU.fK - 2; 1 < fG; fG--)
				if (1 === aDB[ac.yk(fG, fI) + 2]) {
					this.aD8[1] = fI;
					break loop
				} loop: for (fG = bU.fK - 2; 0 < fG; fG--)
			for (fI = bU.fL - 2; 1 < fI; fI--)
				if (1 === aDB[ac.yk(fG, fI) + 2]) {
					this.aD8[2] = fG;
					break loop
				} loop: for (fI = bU.fL - 2; 0 < fI; fI--)
			for (fG = bU.fK - 2; 1 < fG; fG--)
				if (1 === aDB[ac.yk(fG, fI) + 2]) {
					this.aD8[3] = fI;
					break loop
				}
	}
}

function L(value, aDC, wE, aDD) {
	var qj = "number" == typeof value ? b9.aDE[value] : value;
	if (wE && b9.aDF() && (qj = wE), !aDC) return aDD ? qj.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qj;
	for (var f9 = aDC.length, aB = 0; aB < f9; aB++)
		for (var fS = 0; fS < 3; fS++) qj = qj.replace("{" + (10 * fS + aB) + "}", aDC[aB]);
	return qj
}

function c4() {
	this.data = new aDG;
	var aDH = (new aDI).L84,
		aDK = (this.aDE = aDH, !(this.aDJ = "en"));
	this.dh = function() {
		var qj, g;
		aDK = !1, ("en" === (qj = bl.eU.data[12].value).split("-")[0].toLowerCase() ? (b9.aDE = aDH, b9.aDJ = qj, 1) : bl.eU.data[12].value === bl.eU.data[145].value && 0 < bl.eU.data[146].value && (qj = bl.eU.data[146].value, (g = bl.rJ.wR(qj, !
			1)).length === qj) && !!bC.rA.a3p(g) && function(g) {
			for (var f9 = g.length, j = 0; j < f9; j++) g[j] = g[j].replace("&#39;", "'");
			var aDQ = bl.rJ.wR(f9, !0);
			if (f9 !== aDQ.length) return !1;
			if (!bC.rA.a3p(aDQ)) return !1;
			for (var lP = aDH.length, aAe = new Array(lP), aDR = lP === f9, gc = Math.min(f9, lP), aB = 0; aB < lP; aB++)
				if (aAe[aB] = aDH[aB], aB < f9 && aDQ[aB] === aAe[aB]) aAe[aB] = g[aB];
				else {
					aDR = !1;
					for (var fT = 0; fT < gc; fT++)
						if (aDQ[fT] === aAe[aB]) {
							aAe[aB] = g[fT];
							break
						}
				} return b9.aDE = aAe, b9.aDJ = bl.eU.data[12].value, aDR
		}(g)) || (aDK = !0)
	}, this.dj = function() {
		bi.di(), aE.di(), bg.di(), bf.di(), aO.dh(), bq = new e5
	}, this.aDF = function() {
		return this.aDE === aDH || !aDH.length
	}, this.aDS = function() {
		var aDT;
		return !!aDK && (aDK = !1, 0 !== aDH.length) && (aDT = bl.eU.data[12].value, b0.ee.aDU(0, aDT.slice(0, 20)), !0)
	}, this.aDV = function(g) {
		g.length !== aDH.length ? 8 === t.tK && t.a2O().aDW(30, 0, 1) : (this.aDE = g, this.aDJ = bl.eU.data[12].value, bl.pW.pX(145, this.aDJ), bl.pW.pX(146, g.length), bl.rJ.wX(g, !1), bl.rJ.wX(aDH, !0), 8 === t.tK ? t.a2O().aDW(30) : 0 === aa
			.a2K() && 5 === t.tK && t.y.aDX())
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
		for (var aDb = [], g = this.g, f9 = g.length, aB = 0; aB < f9; aB++) aDb.push(g[aB]);
		var aDc = bl.eU.data[12].wE;
		for (aB = 0; aB < f9; aB++)
			if (aDb[aB] === aDc) {
				aDb.splice(aB, 1), f9--;
				break
			} aDb.sort(), f9++, aDb.unshift(aDc);
		try {
			if ("undefined" == typeof Intl) return aDb;
			for (aB = 0; aB < f9; aB++) {
				var qj = new Intl.DisplayNames([aDb[aB]], {
					type: "language"
				}).of(aDb[aB]);
				qj !== aDb[aB] && (aDb[aB] = aDb[aB] + ": " + qj)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDb
	}, this.aDe = function(aDf) {
		for (var qj = bl.eU.data[12].value, f9 = aDf.length, aB = 0; aB < f9; aB++)
			if (qj === aDf[aB].split(":")[0]) return aB;
		return 0
	}, this.aDZ = function(aDg) {
		if (aDg && !(aDg.length < 2)) {
			aDg = aDg.split("-")[0].toLowerCase();
			for (var g = this.g, f9 = g.length, aB = 0; aB < f9; aB++)
				if (aDg === g[aB]) return aB
		}
		return -1
	}
}

function aDI() {
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
		"Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings",
		"Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
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
	var fG, fI, j, uI, aDh, aDi, aDj, aDk, aDl, i, a4S, aDm;
	this.hv = !1, this.dh = function(qj, aDn) {
		if (1 === a0.id && 13 <= a0.e0 && a0.e0 < 18) return aDn ? void(a4S = qj) : a4S !== qj ? void 0 : void a0.wP.saveString(200, qj);
		aDn && (a4S = qj, (aDm = document.createElement("a")).appendChild(document.createTextNode(a4S)), this.hv = !0, aDm.title = a4S, aDm.target = "_blank", aDm.href = a4S, aDm.style.textAlign = "center", aDm.style.color = bD.o5, aDm.style
			.position = "absolute", aDm.style.padding = "0px", aDm.style.margin = "0px", this.resize(), document.body.appendChild(aDm), bh.dp = !0)
	}, this.sJ = function() {
		return !(!this.hv || (t.removeChild(document.body, aDm), this.hv = !1))
	}, this.hM = function(iQ, iR) {
		return !!this.hv && ((iQ < fG || iR < fI || fG + i < iQ || fI + j < iR || fG + i - uI < iQ && iR < fI + uI) && (bh.dp = !0, this.hv = !1, t.removeChild(document.body, aDm)), !0)
	}, this.resize = function() {
		var a6q, aDo;
		this.hv && (aDk = Math.floor(.8 * (a0.a1.iI() ? h.i > h.j ? .6 : .55 : .4) * h.iJ), uI = Math.floor(.15 * aDk), aDh = Math.floor(.35 * uI), aDi = Math.floor(.5 * uI), aDj = Math.floor(2.5 * aDi), j = uI + aDh + 3 * aDi, a6q = bC.r2.sr(1,
			aDh / h.k), aDl = Math.floor(h.k * aQ.measureText(a4S, a6q)), aDo = i = (aDk < aDl ? aDl : aDk) + 2 * aDj, i = Math.min(i, h.i - 2 * (a0.a1.iI() ? 2 : 1) * be.gap), a6q = bC.r2.sr(1, i / aDo * aDh / h.k), aDl = Math.floor(h
			.k * aQ.measureText(a4S, a6q)), fG = Math.floor((h.i - i) / 2), fI = Math.floor((h.j - j) / 2), aDm.style.font = a6q, aDm.style.top = Math.floor((fI + 1.4 * aDi + uI) / h.k) + "px", aDm.style.left = Math.floor((fG + (i -
			aDl) / 2) / h.k) + "px")
	}, this.vf = function() {
		this.hv && (vg.fillStyle = bD.o2, vg.fillRect(fG, fI + uI, i, j - uI), vg.fillStyle = bD.pF, vg.fillRect(fG, fI, i, uI), vg.fillStyle = bD.o5, vg.lineWidth = be.a06, vg.strokeStyle = bD.o5, vg.strokeRect(fG, fI, i, j), vg.fillRect(fG,
			fI + uI, i, be.a06), vg.font = bC.r2.sr(1, .48 * uI), bC.r2.textAlign(vg, 1), bC.r2.textBaseline(vg, 1), vg.fillText(L(132), Math.floor(fG + (i - .5 * uI) / 2), Math.floor(fI + .55 * uI)), aM.a72(Math.floor(fG + i - .8 * uI),
			Math.floor(fI + .25 * uI), Math.floor(.5 * uI)), vg.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dl() {
	var gap, aC8, fG = [0, 0, 0, 0, 0],
		fI = [0, 0, 0, 0, 0],
		nh = [1, 1, 1, 1, 1],
		fb = [!0, !0, !0, !1, !1],
		eh = (this.fw = [!0, !0, !0, !1, !1], null);
	this.aDp = function(a40, aDq) {
		eh = a40, fb = aDq, aC8 = [bM.aDr, bM.a2D, bM.aDs, bM.aDs, bM.aDt], this.dh()
	}, this.dh = function() {
		if (ab.tm()) {
			var aB, tR = Math.floor((a0.a1.iI() ? .261 : .195) * h.iJ),
				tS = Math.floor(.9 * tR),
				a9b = Math.floor(.17 * tS);
			if (gap = a0.a1.iI() ? 2 * be.gap : be.gap, nh[0] = tR / eh[0].width, nh[1] = tS / eh[1].width, nh[2] = a9b / eh[2].height, nh[3] = a9b / eh[3].height, nh[4] = a9b / eh[4].height, nh[2] *= 1.7, nh[3] *= 1.07, fG[0] = gap, fG[1] = gap,
				fG[2] = gap, fG[3] = gap, fG[4] = Math.floor(2 * gap + nh[3] * eh[3].width), fI[0] = gap, fI[1] = fI[0] + gap + nh[0] * eh[0].height, fI[2] = fI[1] + gap + nh[1] * eh[1].height, fI[3] = fI[2] + gap + nh[2] * eh[2].height, fI[4] =
				fI[3], !fb[0])
				for (aB = 0; aB < 5; aB++) fI[aB] -= nh[0] * eh[0].height + gap;
			if (!fb[1])
				for (aB = 2; aB < 5; aB++) fI[aB] -= nh[1] * eh[1].height + gap
		}
	}, this.hv = function() {
		return !(7 === aa.a2K() && a0.a1.iI())
	}, this.hM = function(iQ, iR) {
		if (eh && this.hv())
			for (var aB = fb.length - 1; 0 <= aB; aB--)
				if (fb[aB] && this.fw[aB] && fG[aB] < iQ && fI[aB] < iR && iQ < fG[aB] + nh[aB] * eh[aB].width && iR < fI[aB] + nh[aB] * eh[aB].height) return t.u(9, t.tK, new aDu(L(133), bC.r2.a4R(aC8[aB]))), !0;
		return !1
	}, this.vf = function() {
		if (eh && this.hv()) {
			var aB;
			for (vg.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fb[aB] && this.fw[aB] && (vg.setTransform(nh[aB], 0, 0, nh[aB], fG[aB], fI[aB]), vg.drawImage(eh[aB], 0, 0));
			vg.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function db() {
	this.aDv = 0, this.aDw = null, this.uT = null, this.lJ = null, this.y = null, this.uq = null, this.uQ = null, this.message = null, this.aDx = null, this.sI = null, this.aDy = null, this.aDz = new aE0, this.a2H = 0, this.aAV = 0, this.dh =
		function() {
			this.aAV = bh.eX, this.aDv = bI.tN.xM(bl.eU.data[105].value, 5), this.uT = new aE1, this.lJ = new aE2, this.y = new aE3, this.uq = new aE4, this.uQ = new aE5, this.message = new aE6, this.aDx = new aE7, this.sI = new aE8, this.aDy =
				new aE9, this.y.dh(), br.dh(), this.a2H = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uk = function() {
			this.sI && this.sI.uk(), this.aDw = null, this.uT = null, this.lJ = null, this.y = null, this.uq = null, this.uQ = null, this.message = null, this.aDx = null, this.sI = null, this.aDy = null, this.a2H = 0, br.uk(), a0.a1.setState(0)
		}
}

function aE1() {
	function aEW(g, te, tf) {
		var aEX = g[te];
		g[te] = g[tf], g[tf] = aEX
	}
	this.uU = [
		[],
		[],
		[],
		[]
	], this.uV = [0, 0, 0, 0], this.aEA = [], this.aEB = function(aEC, tI, username, ua, a4u, aED, elo, color, wu, aEE) {
		username = this.aEG(tI, username, ua, a4u, aED, elo, color, wu, aEE);
		this.uU[aEC].push(username), bp.aDv === tI && (bp.aDw = username), bp.aDy.aEH(tI) && (username.uc = 1), bp.y.aEI += 29 === t.tK && bp.y.s6[0] === aEC && 1 === bp.y.s6[2]
	}, this.aEG = function(tI, username, ua, a4u, aED, elo, color, wu, aEE) {
		return {
			tI: tI,
			username: username,
			ua: ua,
			a4u: a4u,
			aED: aED,
			elo: elo,
			color: color,
			wu: wu,
			aEE: aEE
		}
	}, this.aEJ = function(eG, aEC, ua, a4u, aED, elo, wu, color) {
		eG = this.uU[aEC][eG];
		eG.ua = ua, eG.a4u = a4u, eG.aED = aED, eG.elo = elo, eG.wu = wu, eG.color = color, bp.y.aEI += 29 === t.tK && bp.y.s6[0] === aEC && 1 === bp.y.s6[2]
	}, this.aEK = function(eG, aEC, aEL) {
		var eG = this.uU[aEC][eG],
			aEM = eG.username,
			aEN = "Redacted " + bH.tN.a0P(eG.tI, 2);
		eG.username = aEL ? "[" + bC.s1.a1r(aEM) + "] " + aEN : aEN, aEM.indexOf("Redacted") < 0 && (eG.aEO = aEM), bp.sI.aEP(eG.tI), bp.y.aEI += 29 === t.tK && bp.y.s6[0] === aEC && 1 === bp.y.s6[2]
	}, this.aEQ = function(eG, aER, aES) {
		var player = this.uU[aER][eG];
		this.aET(eG, aER), this.uU[aES].push(player), bp.y.aEI += 29 === t.tK && bp.y.s6[0] === aES && 1 === bp.y.s6[2]
	}, this.aET = function(eG, aER) {
		var uT = this.uU[aER];
		this.aEA.push(uT[eG]), 1e3 < this.aEA.length && this.aEA.shift(), eG >= this.uV[aER] ? uT[eG] = uT[uT.length - 1] : (this.uV[aER]--, 2 === aER ? (uT.splice(this.uV[aER] + 1, 0, uT[uT.length - 1]), uT.splice(eG, 1)) : (uT[eG] = uT[this.uV[
			aER]], uT[this.uV[aER]] = uT[uT.length - 1])), uT.pop(), bp.y.aEI += 29 === t.tK && bp.y.s6[0] === aER && 1 === bp.y.s6[2]
	}, this.aEU = function(eG, s5) {
		bp.y.aEI += 29 === t.tK && bp.y.s6[0] === s5 && 1 === bp.y.s6[2];
		var uT = this.uU[s5],
			qu = uT[eG];
		if (2 === s5)
			if (eG >= this.uV[s5]) {
				bp.aDy.join(qu);
				for (var aEV = this.uV[s5], elo = qu.elo; aEV && elo > uT[aEV - 1].elo;) aEV--;
				uT[eG] = uT[this.uV[s5]], uT.splice(this.uV[s5]++, 1), uT.splice(aEV, 0, qu)
			} else uT.splice(this.uV[s5]--, 0, qu), uT.splice(eG, 1);
		else eG >= this.uV[s5] ? (bp.aDy.join(qu), aEW(uT, this.uV[s5]++, eG)) : aEW(uT, --this.uV[s5], eG)
	}, this.aEY = function(tI) {
		for (var uU = this.uU, f9 = uU.length, aB = 0; aB < f9; aB++)
			for (var uT = uU[aB], lP = uT.length, fS = 0; fS < lP; fS++)
				if (tI === uT[fS].tI) return uT[fS];
		return null
	}
}

function aE9() {
	var aEZ = [],
		aEa = [],
		aEb = 0;

	function aEc(g, a7u, aEg, aEh) {
		var f9 = g.length;
		if (0 === f9) return "";
		var qj = "@" + g[0];
		if (1 === f9) return qj + a7u + aEh;
		for (var aB = 1; aB < f9 - 1; aB++) qj += ", @" + g[aB];
		return qj + " and @" + g[f9 - 1] + aEg + aEh
	}
	this.dh = function() {
		var qj = aEc(aEa, " is", " are", " in the lobby!");
		qj.length && bp.message.aEd({
			id: 7,
			r: qj
		}), aEZ = [], aEa = [], aEb = 0
	}, this.aEH = function(aEe) {
		return bp.aDv !== aEe && (aEe = bH.tN.a0P(aEe, 5), !!bl.w4.uc(aEe)) && (aEa.push(aEe), !0)
	}, this.join = function(player) {
		bp.aDv !== player.tI && (player = bH.tN.a0P(player.tI, 5), bl.w4.uc(player)) && aEZ.push(player)
	}, this.aEf = function() {
		var a7u, aEg;
		++aEb < 3 || (aEb = 0, a7u = aEc(aEa, "", "", " entered the lobby!"), (a7u = (aEg = aEc(aEZ, "", "", " joined a game!")).length ? a7u.length ? a7u + " " + aEg : aEg : a7u).length && bp.message.aEd({
			id: 7,
			r: a7u
		}), aEZ = [], aEa = [])
	}
}

function aE0() {
	this.dq = function(eG) {
		if ((uV = bp.uT.uV[eG]) < 2) return !1;
		var s7 = bp.y.s8[eG],
			aEi = 9 === s7.aEj ? 333 : 512,
			uV = Math.min(uV, aEi);
		8 === s7.aEj && (uV -= uV % 2);
		aEi = bp.uT.uU[eG].splice(0, uV), bp.uT.uV[eG] -= uV, uV = function(aEk) {
			if (bp.aDw)
				for (var f9 = aEk.length, tI = bp.aDw.tI, aB = 0; aB < f9; aB++)
					if (aEk[aB].tI === tI) return aB;
			return -1
		}(aEi);
		return -1 === uV ? (bp.uT.aEA = bp.uT.aEA.concat(aEi), 1e3 < bp.uT.aEA.length && bp.uT.aEA.splice(0, bp.uT.aEA.length - 1e3), bp.y.aEI += 29 === t.tK && bp.y.s6[0] === eG && 1 === bp.y.s6[2], !1) : (8 === s7.aEj && (s7.aEn = (s7.aEn + (
			uV >> 1)) % 1024, eG = uV - uV % 2, uV %= 2, aEi = aEi.slice(eG, 2 + eG)), ax.dh(s7, aEi, uV), !0)
	}, this.aEo = function(s7, aEk, aEl) {
		var fC = aD.data = new a5d,
			aEs = (fC.spawningSeed = s7.spawningSeed, s7.aEj < 7 ? (fC.gameMode = 1, fC.numberTeams = s7.aEj + 2) : 9 === s7.aEj ? (fC.gameMode = fC.isZombieMode = 1, fC.numberTeams = 2) : (fC.gameMode = 0, fC.battleRoyaleMode = 7 === s7.aEj ?
				0 : 10 === s7.aEj ? 1 : 2), fC.selectedPlayer = aEl, fC.isContest = s7.aEp, fC.mapType = bU.aEq(s7.ep) ? 0 : 1, bU.aEr(fC, s7.ep), fC.mapSeed = s7.mapSeed, fC.humanCount = aEk.length);
		fC.selectableSpawn = 1 === fC.gameMode || aEs < 100, fC.colorsData = new Uint32Array(aEs), fC.playerNamesData = new Array(aEs), fC.a61 = new Uint32Array(aEs);
		for (var aB = 0; aB < aEs; aB++) fC.colorsData[aB] = aEk[aB].color, fC.playerNamesData[aB] = aEk[aB].username, fC.a61[aB] = aEk[aB].tI;
		if (2 === fC.battleRoyaleMode)
			for (fC.elo = new Uint16Array(aEs), aB = 0; aB < aEs; aB++) fC.elo[aB] = aEk[aB].elo;
		aa.setState(8), bU.a7(s7.ep, fC.mapSeed), aD.a5i(), aD.a5g = 2
	}
}

function aE2() {
	var e6 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEt = [bD.oJ, bD.oJ, bD.oK, bD.oo, bD.op, bD.oa, bD.ou, bD.oK, bD.pH, bD.p5, bD.pE],
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
			[1.4, 1.2]
		],
		aEv = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aF9(s9, tI, aFB) {
		for (var fT = s9.length - 1; 0 <= fT; fT--) {
			var qu = s9[fT];
			0 === qu.id && qu.tI === tI && (qu.r = "[Redacted Message]", aFB) && (qu.aFC = 1)
		}
	}
	this.sE = function(aEw) {
		var aEx, a1s;
		return aEw.id < 5 && (aEx = "@" + bH.tN.a0P(aEw.tI, 5)), 0 === aEw.id ? aEx + ": " + aEw.r : 1 === aEw.id ? (a1s = "@" + bH.tN.a0P(aEw.target, 5), 0 === aEw.aEy ? 32768 <= aEw.value ? aEx + " voted with " + (aEw.value - 32768 + 1) +
				" gold against " + a1s + " to weaken the latter's admin position. 📉" : aEx + " voted with " + (aEw.value + 1) + " gold for " + a1s + " to strengthen the latter's admin position. 💪" : 1 === aEw.aEy ? aEx + " sent " + Math.floor(
					aEw.value / 100) + " 🧈 gold to " + a1s + "." : aEx + " voted with " + (aEw.value / 10).toFixed(1) + " points for " + a1s + " to acknowledge the latter as clan leader. ✅") : 2 === aEw.id ? 0 === aEw.aEy ? aEx +
			" was 🔇 muted for 1 Hour." : 1 === aEw.aEy ? "The username of " + aEx + " was ✂️ redacted. Duration: 1 Day" : aEx + " 👢 was kicked." : 3 === aEw.id ? aEx + bq.eJ(aEw.aEy, bq.eC[aEw.aEy][aEw.value]) + "@" + bH.tN.a0P(aEw.target, 5) +
			bq.eL(aEw.aEy, bq.eC[aEw.aEy][aEw.value]) : 4 === aEw.id ? aEx + bq.eJ(5, bq.eC[5][aEw.aEy]) + "@" + bH.tN.a0P(aEw.target, 5) + bq.eL(5, bq.eC[5][aEw.aEy]) : 5 === aEw.id ? aEv[aEw.aEy] : 6 === aEw.id ? "You are about to mention " +
			aEw.value + " player" + (1 === aEw.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEw.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEw.id ? aEw.r : void 0
	}, this.sD = function(aEw, aEz) {
		return {
			aEw: aEw,
			r: aEz,
			aF0: 0,
			fontSize: 1,
			sH: 0,
			aF1: aEw.id ? bD.on : bD.o5
		}
	}, this.uY = function(player, s5) {
		return (2 === s5 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uZ = function(ua) {
		return aEt[ua]
	}, this.aF2 = function(ua, a4u) {
		return ua < 3 || 7 === ua ? aEu[ua][0] : 4 === ua ? aEu[ua][a4u < 1 ? 0 : a4u < 10 ? 1 : 2] : aEu[ua][a4u < 10 ? 0 : 1]
	}, this.aF3 = function(a4u) {
		return 0 === a4u
	}, this.aEY = function(s5, tI) {
		for (var uU = bp.uT.uU, uT = uU[s5], f9 = uT.length, aB = 0; aB < f9; aB++)
			if (tI === uT[aB].tI) return uT[aB];
		for (var fT = 0; fT < uU.length; fT++)
			if (s5 !== fT)
				for (f9 = (uT = uU[fT]).length, aB = 0; aB < f9; aB++)
					if (tI === uT[aB].tI) return uT[aB];
		return null
	}, this.ub = function(qu) {
		return !!bp.aDw && qu.tI === bp.aDw.tI
	}, this.aF4 = function(uT, aF5, aF6) {
		var a1p = [];
		loop: for (var aB = aF5; aB < aF6; aB++) {
			var a1q = bC.s1.a1r(uT[aB].username);
			if (a1q) {
				for (var fT = a1p.length - 1; 0 <= fT; fT--)
					if (a1q === a1p[fT].name) {
						a1p[fT].gc++;
						continue loop
					} a1p.push({
					name: a1q,
					gc: 1
				})
			}
		}
		if (a1p.sort(function(fS, fT) {
				return fT.gc - fS.gc
			}), 0 === a1p.length) return "";
		for (var qj = a1p[0].name + ": " + a1p[0].gc, aB = 1; aB < a1p.length; aB++) qj += "   " + a1p[aB].name + ": " + a1p[aB].gc;
		return qj
	}, this.aF7 = function(ua, a4u, aED) {
		return 0 === e6[ua].length ? "Rank: " + (a4u + 1) : e6[ua] + " Rank: " + (a4u + 1) + (3 !== ua && aED < 100 ? "   " + e6[3] + " Rank: " + (aED + 1) : "")
	}, this.aF8 = function(tI) {
		for (var s8 = bp.y.s8, aB = 0; aB < s8.length; aB++) aF9(s8[aB].s9, tI);
		aF9(bp.message.aFA(), tI, 1), bp.sI.aF8(tI)
	}
}

function aE5() {
	var sj = 0,
		aFD = 0,
		aFE = 0,
		aFF = null,
		aFG = null;

	function aFJ(qu, aFK, aFL) {
		var qj = qu.username;
		return (qj += "   " + bp.lJ.aF7(qu.ua, qu.a4u, qu.aED)) + function(qu) {
			qu = qu.wu;
			if (qu < 1e3) return "   Gold: " + qu;
			if ((qu %= 1024) < 1e3) return "   Gold: " + qu + "k";
			return "   Gold: " + (qu - 999) + "M"
		}(qu) + ("   IP: " + bH.tN.a0P(qu.aEE, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFL ? aFD : aFI(qu, aFK)])
	}

	function aFI(qu, aFK) {
		return aFD = aFK || bp.uT.aEY(qu.tI) ? 1 : 0
	}
	this.uR = 0, this.aFH = function() {
		!sj || aFD === aFI(aFG) && aFE === aFG.wu || (aFE = aFG.wu, aFF.show(-1, -1, aFJ(aFG, 0, 1), 1, 1, aFG.color))
	}, this.ud = function(e, qu, aFK) {
		var a9i = e.getBoundingClientRect();
		this.show(a9i.left, a9i.top, qu, 0, aFK), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bp.uQ && bp.uQ.sJ(1)
		}), this.uR = aFK
	}, this.show = function(fG, fI, qu, sn, aFK) {
		aFF = aFF || new sg, aFE = (aFG = qu).wu, aFF.show(fG, fI, aFJ(qu, aFK), sn, 0, aFG.color), sj = 1
	}, this.sJ = function(su) {
		this.uR = 0, aFF && aFF.sJ(su) && (sj = 0, aFG = null)
	}
}

function aE3() {
	function aFQ() {
		bp.y.aEI && 1 === bp.y.s6[2] && t.a6D(29).aFT(), bp.y.aEI = 0, t.a6D(29).aFU(), t.a6D(29).aFV(), bp.uQ.aFH()
	}
	this.s8 = new Array(4), this.s6 = [0, 0, 1, 0], this.aEI = 0, this.aFN = [0, 0], this.dh = function() {
		for (var aB = 0; aB < this.s8.length; aB++) this.s8[aB] = new aFO;
		this.s6[0] = bl.eU.data[158].value
	}, this.aFP = function() {
		aFQ(), bp.aDy.dh()
	}, this.aEf = function() {
		bp.aDy.aEf();
		for (var aB = 0; aB < bp.y.s8.length; aB++) {
			var s7 = bp.y.s8[aB];
			0 === s7.uC ? s7.aFW = 0 : (s7.aFX = Math.max(s7.aFX - s7.aFW % 2, 0), s7.aFW++)
		}
		aFQ()
	}, this.aFY = function(s5) {
		this.s6[0] !== s5 || this.s6[2] || t.a6D(29).aFZ()
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

	function aFp(gc) {
		aFa = 1, bp.message.aEd({
			id: 6,
			value: gc
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
			for (var f9 = aFi.length, aFt = [0, 0, 0, 0], aB = 0; aB < f9; aB++)
				for (var i = aFi[aB], fS = 0; fS < 4; fS++) i === "@room" + (fS + 1) && (aFt[fS] = 1);
			if ((aFd = bC.rA.a3e(aFt)) % 4 == 0) return bC.rA.a3w(bp.uT.uU);
			for (fS = 0; fS < 4; fS++) aFt[fS] = aFt[fS] ? bp.uT.uU[fS] : [];
			return bC.rA.a3w(aFt)
		}(aFf), function(aFi, aFl, r) {
			if (!aFc) return;
			for (var f9 = aFl.length, aB = 0; aB < f9; aB++) 2 === aFl[aB].id && (r = r.replace(aFi[aFl[aB].eG], "@" + aFl[aB].fb));
			return aFa = 1, aFg((aFb = r).slice(0, 126) + "|"), 1
		}(aFf, aFl = function(aFi) {
			for (var aFl = [], f9 = (aFe = aFc = 0, aFi.length), aB = 0; aB < f9; aB++) {
				var i = aFi[aB],
					lP = i.length;
				bC.s1.startsWith(i, "@[") ? lP <= 9 && bC.s1.a4U(i, "]") && aFl.push({
					id: 0,
					fb: i.substring(2, lP - 1).toUpperCase()
				}) : 6 === lP ? bC.s1.startsWith(i, "@room") || (aFe++, aFl.push({
					id: 1,
					fb: bI.tN.xM(i.substring(1), 5)
				})) : 1 < lP && lP < 5 && 0 <= (lP = b9.data.aDZ(i.substring(1))) && (aFl.push({
					id: 2,
					fb: lP,
					eG: aB
				}), aFc = 1)
			}
			return aFl
		}(aFf), r) || (0 === aFl.length ? aFd || function(aFi) {
			for (var f9 = aFi.length, aB = 0; aB < f9; aB++) {
				var i = aFi[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFf) ? aFp(g.length) : aFg(r) : aFf.length === aFe ? aFg(r) : (function(g, aFl) {
			var lP = aFl.length;
			if (0 === lP) return;
			var f9 = g.length;
			loop: for (var aB = f9 - 1; 0 <= aB; aB--) {
				for (var fS = 0; fS < lP; fS++)
					if (0 === aFl[fS].id) {
						if (aFl[fS].fb === bC.s1.a1r(g[aB].username)) continue loop
					} else if (1 === aFl[fS].id && aFl[fS].fb === g[aB].tI) continue loop;
				g[aB] = g[--f9], g.pop()
			}
		}(g, aFl), aFp(g.length)))) : aFg(r)
	}, this.aFw = function(r) {
		var aFi = aFj(r);
		if (aFi)
			for (var a5 = new RegExp("^[0-9]+$"), f9 = aFi.length, aB = 0; aB < f9; aB++) {
				var i = aFi[aB].substring(1),
					lP = i.length;
				1 <= lP && lP <= 3 && a5.test(i) && (lP = parseInt(i, 10), !isNaN(lP)) && 0 <= lP && lP < b9.data.g.length && (r = r.replace("@" + i, "@" + b9.data.g[lP]))
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
		aG0 = bh.eX, (3 === this.uh ? aG5 : (aFz = (aFy.length + aFz + 2 * this.uh - 1) % aFy.length, aG4))()
	}

	function aG4() {
		0 !== aFy.length && (aG1 = 0, aFx && aFx.uk(), (aFx = new ue(aG6)).pX(aFz, aFy.length), aFx.show(aFy[aFz]), bp.message.resize())
	}

	function aG5() {
		aG1 = 1, aFx && aFx.uk(), (aFx = new ul(aG4)).pX(aFy.length), aFx.show(), bp.message.resize()
	}
	this.aEd = function(aEw) {
		var qu;
		2 === aEw.id && 3 === aEw.aEy ? bp.lJ.aF8(aEw.tI) : (qu = bp.lJ.sD(aEw, bp.lJ.sE(aEw)), (5 !== aEw.id && 6 !== aEw.id || (t.a6D(29).aG2().sG(qu), 5 === aEw.id)) && (qu = bh.eX < aG0 + 2e4, aFz !== aFy.length - 1 && qu || (aFz = aFy
			.length), aFy.push(aEw), bl.eU.data[14].value || 7 === aEw.id || br.play(), aFx) && (aG1 && (bl.eU.data[13].value || qu) ? aFx.pX(aFy.length) : aG4()))
	}, this.show = function() {
		aG5()
	}, this.sJ = function() {
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
		0 !== aG8.ua && (bp.uq.sJ(), t.u(8, 29, new tL(25, {
			tM: 0,
			tI: bH.tN.a0P(aG8.tI, 5),
			tJ: 0
		}, 29)))
	}

	function aGF() {
		return !bp.aDw || bp.lJ.ub(aG8) ? 1 : 0
	}

	function aGE() {
		var fG = aG7.fG,
			fI = aG7.fI,
			aGO = (bp.uq.sJ(), aGF());
		aG7 = new um([new w(bq.eC[5][0], function() {
			aGI(5, 0)
		}, aGO), new w(bq.eC[5][1], function() {
			aGI(5, 1)
		}, aGO), new w(bq.eC[5][2], function() {
			aGI(5, 2)
		}, aGO), new w(bq.eC[5][3], function() {
			aGI(5, 3)
		}, aGO)]), aGH(fG, fI), aGA = aG9 = 2
	}

	function aGG() {
		29 === t.tK && t.a2O().aDx(bH.tN.a0P(aG8.tI, 5))
	}

	function aGI(id, value) {
		5 === id && b0.aGP.aGQ({
			tM: 3,
			tI: bH.tN.a0P(aG8.tI, 5),
			value: value
		})
	}

	function aGH(fG, fI, us) {
		aG7.show(fG, fI, us), bp.uQ.show(aG7.fG, aG7.fI, aG8, 1)
	}
	this.aGC = function(e, qu) {
		aG9 = 1, aG8 = qu, aG7 = new um([new w(L(134), aGD, 0 === qu.ua ? 1 : 0), new w(L(135), aGE, aGF()), new w(L(136), aGG, 0)]), aGH((aGB = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aGB.clientY, 1)
	}, this.a3E = function(code) {
		if (29 !== t.tK) return !1;
		if (!aG8) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sJ();
			else if (bC.s1.startsWith(code, "Numpad") || bC.s1.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aG9) this.aGC(aGB, aG8);
				else {
					if (!aG7) return !1;
					1 === aG9 ? code <= 1 ? aGD() : 2 === code ? aGE() : (aGG(), this.sJ()) : (aGI(aGA, bN.iH(code - 1, 0, bq.eC[aGA].length - 1)), this.sJ())
				}
		}
		return !0
	}, this.sJ = function() {
		aG9 = 0, aG7 && aG7.sJ(), aG7 = null, bp.uQ.sJ()
	}
}

function aFO() {
	this.uC = 0, this.ep = 0, this.mapSeed = 0, this.aEj = 0, this.aGT = 0, this.aGU = 0, this.aGV = 0, this.aEp = 0, this.aFX = 0, this.spawningSeed = 0, this.a2S = 0, this.aEn = 0, this.s9 = [], this.sA = 1048575, this.aFW = 0, this.aGW = [{
		ep: 0,
		mapSeed: 0,
		aEj: 0,
		eX: 100,
		aEp: 0
	}, {
		ep: 1,
		mapSeed: 0,
		aEj: 1,
		eX: 200,
		aEp: 0
	}, {
		ep: 2,
		mapSeed: 0,
		aEj: 2,
		eX: 300,
		aEp: 0
	}, {
		ep: 3,
		mapSeed: 0,
		aEj: 3,
		eX: 400,
		aEp: 0
	}, {
		ep: 0,
		mapSeed: 0,
		aEj: 9,
		eX: 500,
		aEp: 0
	}, {
		ep: 1,
		mapSeed: 0,
		aEj: 10,
		eX: 600,
		aEp: 0
	}, {
		ep: 2,
		mapSeed: 0,
		aEj: 8,
		eX: 700,
		aEp: 0
	}, {
		ep: 3,
		mapSeed: 0,
		aEj: 3,
		eX: 800,
		aEp: 0
	}]
}

function aE8() {
	var aGX = [],
		tX = [],
		aGY = [];

	function aGa(qu) {
		for (var r = qu.r, aGZ = [];;) {
			var eh = function aGc(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qj = r.substring(position + 1, position + 6);
				if (5 !== qj.length) return aGc(r, position + 1);
				if (bC.s1.startsWith(qj, "room")) return aGc(r, position + 1);
				var aGj = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGj.test(qj)) return aGc(r, position + 1);
				aGj = r.substring(position + 6, position + 7);
				if (1 !== aGj.length) return position;
				qj = new RegExp("^[ :!.]+$");
				if (!qj.test(aGj)) return aGc(r, position + 1);
				return position
			}(r, 0);
			if (-1 === eh) {
				aGZ.push(aGd(r, qu));
				break
			}
			0 === eh ? aGZ.push(aGe(r.substring(1, 6), qu, eh)) : (aGZ.push(aGd(r.substring(0, eh), qu)), aGZ.push(aGe(r.substring(eh + 1, eh + 6), qu, eh))), r = r.substring(eh + 6)
		}
		return aGZ
	}

	function aGe(qj, qu, eh) {
		var aEF = function(qj) {
				var tI = bI.tN.xM(qj, 5),
					aEF = bp.uT.aEY(tI);
				if (aEF) {
					for (aGX.push(aEF); 75 < aGX.length;) aGX.shift();
					return aEF
				}
				for (var aEA = bp.uT.aEA, aB = aEA.length - 1; 0 <= aB; aB--)
					if (aEF = aEA[aB], tI === aEF.tI) return aGX.push(aEF), aEF;
				for (aB = aGX.length - 1; 0 <= aB; aB--)
					if (aEF = aGX[aB], tI === aEF.tI) return aGX.push(aEF), aEF;
				return bp.uT.aEG(tI, qj, 1, 999999, 999999, 0, 0, 0, 0)
			}(qj),
			qj = (0 === eh && 0 === qu.aEw.id && qu.sH && (qu.fontSize = bp.lJ.aF2(aEF.ua, aEF.a4u), qu.aF0 = bp.lJ.aF3(aEF.a4u)), document.createElement("span"));
		return qj.textContent = function(aEF, qu, eh) {
			if (aEF.aGh) return aEF.aGh--, eh = 2 === qu.aEw.id || (3 === qu.aEw.id || 4 === qu.aEw.id) && 0 !== eh, aEF.username + (eh ? " (" + aEF.aEO + ")" : "");
			if (qu.aEw.aFC) return "Redacted " + bH.tN.a0P(aEF.tI, 2);
			return aEF.username
		}(aEF, qu, eh), qj.style.display = "inline-block", qj.style.color = bp.lJ.uZ(aEF.ua), qj.style.cursor = "pointer", qj.style.margin = "0", qj.style.font = "inherit", qj.style.minWidth = qj.style.minHeight = "1em", bp.lJ.ub(aEF) && (qj
			.style.textDecoration = "underline"), aEF.uc && (qj.style.textDecorationLine = "underline", qj.style.textDecorationStyle = "dotted"), bp.lJ.aF3(aEF.a4u) && (qj.style.fontWeight = "bold"), qj.onclick = function(e) {
			bp.uq.aGC(e, aEF)
		}, bL.rU() || (qj.onmouseover = function(e) {
			bp.uQ.ud(e.target, aEF)
		}), tX.push(qj), qj
	}

	function aGd(r, qu) {
		var s0 = document.createElement("span");
		return s0.textContent = r, s0.style.color = qu.aF1, s0.style.margin = "0", s0.style.font = "inherit", s0
	}

	function aGo(aEF, aEN, tI) {
		tI !== aEF.tI || aEF.aEO || (aEF.aEO = aEF.username, aEF.username = aEN)
	}
	this.uk = function() {
		for (var aB = 0; aB < tX.length; aB++) tX[aB].onclick = tX[aB].onmouseover = null;
		aGY = tX = null
	}, this.transform = function(qu) {
		for (var qh = document.createElement("div"), aGZ = aGa(qu), aB = 0; aB < aGZ.length; aB++) qh.appendChild(aGZ[aB]);
		0 === qu.aEw.id && (qh.vx143 = qu.aEw, aGY.push(qh)), qh.style.margin = "0.6em 0.6em", qu.sH && (qh.style.marginLeft = qh.style.marginRight = "inherit"), qh.style.font = "inherit";
		var aGb = 0 < qu.aEw.id;
		return qu.aF0 && (qh.style.fontWeight = "bold"), aGb && (qh.style.paddingLeft = "0.7em"), aGb && (qh.style.fontStyle = "italic"), qh.style.fontSize = qu.fontSize.toFixed(2) + "em", qh
	}, this.aGm = function(aGn) {
		if (aGn && (2 === aGn.id && 1 === aGn.aEy || 3 === aGn.id && 2 === aGn.aEy)) {
			var tI = 3 === aGn.id ? aGn.target : aGn.tI;
			if (!bp.uT.aEY(tI)) {
				for (var aEN = "Redacted " + bH.tN.a0P(tI, 2), aEA = bp.uT.aEA, aB = aEA.length - 1; 0 <= aB; aB--) aGo(aEA[aB], aEN, tI);
				for (aB = aGX.length - 1; 0 <= aB; aB--) aGo(aGX[aB], aEN, tI)
			}
		}
	}, this.aEP = function(tI) {
		for (var aGp = aGY, aB = aGp.length - 1; 0 <= aB; aB--) {
			var fC = aGp[aB];
			if (fC.vx143.tI === tI) {
				for (; fC.firstChild;) t.removeChild(fC, fC.firstChild);
				for (var aGZ = aGa(bp.lJ.sD(fC.vx143, bp.lJ.sE(fC.vx143))), fS = 0; fS < aGZ.length; fS++) fC.appendChild(aGZ[fS]);
				aGp.splice(aB, 1)
			}
		}
	}, this.aF8 = function(tI) {
		for (var aGp = aGY, aB = aGp.length - 1; 0 <= aB; aB--) {
			var fC = aGp[aB];
			if (fC.vx143.tI === tI) {
				for (; fC.firstChild;) t.removeChild(fC, fC.firstChild);
				fC.vx143.r = "[Redacted Message]";
				for (var aGZ = aGa(bp.lJ.sD(fC.vx143, bp.lJ.sE(fC.vx143))), fS = 0; fS < aGZ.length; fS++) fC.appendChild(aGZ[fS]);
				aGp.splice(aB, 1)
			}
		}
	}
}

function cR() {
	var aGq, aGr, aGs;

	function aGx(aB) {
		var button = aY.rb[aB],
			fG = button.fG,
			fI = button.fI,
			i = button.i,
			j = button.j;
		vg.fillStyle = button.aGv, vg.fillRect(fG, fI, i, j), aB === aGq && (vg.fillStyle = aGs, vg.fillRect(fG, fI, i, j)), vg.lineWidth = be.a06, vg.strokeStyle = aGr, vg.strokeRect(fG, fI, i, j),
			function(button) {
				var fG = button.fG,
					fI = button.fI,
					i = button.i,
					j = button.j;
				bC.r2.textAlign(vg, 1), bC.r2.textBaseline(vg, 1), vg.font = button.font, vg.fillStyle = aGr, vg.fillText(button.aEz, Math.floor(fG + i / 2), Math.floor(fI + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fI = 0, this.gap = 0, this.dh = function() {
		aGq = -1, aGr = bD.o5, aGs = "rgba(255,255,255,0.16)", this.rb = new Array(7), this.j = Math.floor((a0.a1.iI() ? .123 : .093) * h.iJ), this.i = Math.floor((a0.a1.iI() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGt = Math.floor(.26 * this.j),
			aGu = bC.r2.sr(1, aGt);
		this.rb[0] = {
			fG: 0,
			fI: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEz: "Multiplayer",
			font: aGu,
			aGv: "rgba(22,88,22,0.8)",
			fontSize: aGt
		}, aGt = Math.floor(.18 * this.j), aGu = bC.r2.sr(1, aGt), this.rb[1] = {
			fG: 0,
			fI: 0,
			i: this.i - this.rb[0].i - this.gap,
			j: this.j,
			aEz: "Single Player",
			font: aGu,
			aGv: "rgba(22,88,88,0.8)",
			fontSize: aGt
		}, this.rb[2] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEz: "",
			font: this.rb[1].font,
			aGv: "rgba(100,0,0,0.8)",
			fontSize: this.rb[1].fontSize
		}, this.rb[3] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: this.j,
			aEz: "Back",
			font: this.rb[0].font,
			aGv: "rgba(0,0,0,0.8)",
			fontSize: this.rb[0].fontSize
		}, this.rb[4] = {
			fG: 0,
			fI: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEz: "The game was updated!",
			font: this.rb[1].font,
			aGv: "rgba(100,0,0,0.8)",
			fontSize: this.rb[1].fontSize
		}, this.rb[5] = {
			fG: 0,
			fI: 0,
			i: this.rb[0].i,
			j: Math.floor(.8 * this.j),
			aEz: "Reload",
			font: this.rb[0].font,
			aGv: "rgba(0,100,0,0.8)",
			fontSize: this.rb[0].fontSize
		}, this.rb[6] = {
			fG: 0,
			fI: 0,
			i: this.rb[1].i,
			j: this.rb[5].j,
			aEz: "Back",
			font: this.rb[0].font,
			aGv: "rgba(0,0,0,0.8)",
			fontSize: this.rb[0].fontSize
		}, this.aAh()
	}, this.aAh = function() {
		this.fI = Math.floor(.54 * h.j), this.rb[0].fG = Math.floor(.5 * h.i - .5 * this.i), this.rb[1].fG = this.rb[0].fG + this.rb[0].i + this.gap, this.rb[2].fG = this.rb[3].fG = this.rb[0].fG, this.rb[4].fG = this.rb[5].fG = this.rb[0].fG,
			this.rb[6].fG = this.rb[1].fG, this.rb[0].fI = Math.floor(.54 * h.j), this.rb[1].fI = this.rb[0].fI, this.rb[2].fI = Math.floor((h.j - this.rb[2].j - this.rb[3].j - this.gap) / 2), this.rb[3].fI = this.rb[2].fI + this.rb[2].j + this
			.gap, this.rb[4].fI = Math.floor((h.j - this.rb[4].j - this.rb[5].j - this.gap) / 2), this.rb[5].fI = this.rb[6].fI = this.rb[4].fI + this.rb[4].j + this.gap
	}, this.aGw = function() {
		aGx(0), aGx(1)
	}, this.aGy = function() {
		aGx(2), aGx(3)
	}, this.aGz = function() {
		aGx(4), aGx(5), aGx(6)
	}, this.a2g = function(fG, fI, mq) {
		var aB = -1;
		return 0 === aa.a2K() ? aB = this.a3A(fG, fI, 0, 2) : 3 === aa.a2K() ? aB = this.a3A(fG, fI, 3, 1) : 5 === aa.a2K() && (aB = this.a3A(fG, fI, 5, 2)), aGq !== aB && (aGq = aB, mq) && (bh.dp = !0), -1 !== aB && (aT.s3(), !0)
	}, this.a3A = function(fG, fI, aH0, size) {
		for (var aB = aH0; aB < aH0 + size; aB++)
			if (fG >= this.rb[aB].fG && fI >= this.rb[aB].fI && fG <= this.rb[aB].fG + this.rb[aB].i && fI <= this.rb[aB].fI + this.rb[aB].j) return aB;
		return -1
	}
}

function cS() {
	var aH2, aH3, a8J, aH4, aH5, aH6, aH7, aH8, aH9, a8I, aHA, aHB, aHC, aHD = 1,
		aHE = 0,
		aHF = 0;

	function aHJ(aHK) {
		aHK ? aHC = (aHC + 1) % b0.y.aHL : (b0.y.close(aHC, 3280), aHD ? aHD = 0 : (aHF = 1 - aHF, 0 === (aHE = (aHE + 1) % 2) && (aHC = (aHC + 1) % b0.y.aHL, b0.y.close(aHC, 3280)))), aHB = bh.eX, aZ.aHI = aHF, b0.y.aHM(aHC, 4, 1) && b0.aFr.aHN(aHC)
	}

	function aHO() {
		0 === aHC ? o.a2V(3249) : aHJ()
	}

	function aHT(fI, aAP, uC) {
		var nV = Math.floor((h.i - aH4) / 2) + aH7,
			ni = nV + Math.floor(uC * (aH4 - 2 * aH7));
		vg.lineWidth = aAP, vg.beginPath(), vg.moveTo(nV, fI), vg.lineTo(ni, fI), vg.lineTo(Math.floor(nV - aH7 + uC * aH4), fI + a8J), vg.lineTo(nV - aH7, fI + a8J), vg.closePath()
	}
	this.aHG = 1, this.aHH = 0, this.aHI = 0, this.dh = function() {
		aa.setState(6), aH2 = 0, aH3 = 1, aH8 = "rgba(0,220,120,0.4)", aH9 = "rgba(0,0,0,0.8)", this.resize(), bh.dp = !0, aHD = 1, aHE = 0, aHC = this.aHG - 1, aHF = 0 === this.aHH ? l.e2 ? 1 : 0 : this.aHH - 1, aHJ(1)
	}, this.resize = function() {
		aH4 = Math.floor((a0.a1.iI() ? .5 : .25) * h.iJ), aH5 = aH4 + 12, a8J = Math.floor(.125 * aH4), aH7 = 3 * a8J, aH6 = Math.floor(.225 * aH4), aHA = Math.floor(.3 * a8J), a8I = bC.r2.sr(0, aHA)
	}, this.a2R = function(a2F) {
		a2F === aHC && aHO()
	}, this.hM = function(fG, fI) {
		var nV = Math.floor((h.i - aH5) / 2),
			nW = Math.floor(.5 * (h.j - be.gap - a8J - aH6)) + a8J + be.gap;
		return nV < fG && fG < nV + aH5 && nW < fI && fI < nW + aH6 && (this.a3L(), aY.a2g(fG, fI, !1), !0)
	}, this.a3L = function() {
		b0.y.a2W(3260), t.y.z()
	}, this.ec = function() {
		6 === aa.a2K() && (bh.eX > aHB + 12e3 && aHO(), 100 < (aH2 += .07 * aH3 * (aH2 < 16 ? 5 + aH2 : 84 < aH2 ? 105 - aH2 : 17)) ? (aH2 = 100, aH3 = -1) : aH2 < 0 && (aH2 = 0, aH3 = 1), aH8 = "rgba(0," + Math.floor(190 - 1.9 * aH2) + "," +
			Math.floor(120 - 1.2 * aH2) + "," + (.4 + .004 * aH2) + ")", aH9 = "rgba(0," + Math.floor(1.9 * aH2) + "," + Math.floor(1.2 * aH2) + "," + (.8 - .004 * aH2) + ")", bh.dp = !0)
	}, this.vf = function() {
		var fG = Math.floor((h.i - aH5) / 2),
			fI = Math.floor(.5 * (h.j - be.gap - a8J - aH6));
		! function(title, fI, aAP, uC) {
			vg.fillStyle = aH9, aHT(fI, aAP, 1), vg.fill(), vg.fillStyle = aH8, aHT(fI, aAP, uC), vg.fill(), vg.strokeStyle = bD.o5, aHT(fI, aAP, 1), vg.stroke(),
				function(aHV, fI) {
					bC.r2.textAlign(vg, 1), bC.r2.textBaseline(vg, 1), vg.font = a8I, vg.fillStyle = bD.o5, vg.fillText(aHV, Math.floor(.5 * h.i), Math.floor(fI + .58 * a8J))
				}(title, fI)
		}(L(137), fI, 3, aH2 / 100),
		function(fG, fI, i, j, aEz) {
			vg.fillStyle = bD.o0, vg.fillRect(fG, fI, i, j), vg.lineWidth = 3, vg.strokeStyle = bD.o5, vg.strokeRect(fG, fI, i, j);
			var f9 = Math.floor(.3 * j);
			bC.r2.textAlign(vg, 1), bC.r2.textBaseline(vg, 1), vg.font = bC.r2.sr(0, f9), vg.fillStyle = bD.o5, vg.fillText(aEz, Math.floor(fG + i / 2), Math.floor(fI + j / 2 + .1 * f9))
		}(fG, fI + a8J + be.gap, aH5, aH6, L(39))
	}
}

function cT() {
	var a2B = 0;
	this.dh = function() {
		aY.dh(), a2B = 0
	}, this.setState = function(aHW) {
		a2B = aHW
	}, this.a2K = function() {
		return a2B
	}, this.aHX = function() {
		this.setState(8), t.x()
	}, this.a3E = function(e) {
		if (!bU.xc) return !1;
		if (!(bh.eX < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHY()) return !0;
				if ("Enter" === e.key) {
					if (0 === a2B) return !0;
					if (7 === a2B) return !0
				}
			}
			return !1
		}
	}, this.aHZ = function() {
		bb.resize()
	}, this.aHY = function() {
		return !!bb.sJ()
	}, this.hM = function(fG, fI) {
		!bU.xc || bb.hM(fG, fI) || 6 === a2B && aZ.hM(fG, fI) || ba.hM(fG, fI) || aT.hM(fG, fI)
	}, this.a2g = function(fG, fI) {
		!aT.aAa && aY.a2g(fG, fI, !0) || aT.a2g(fG, fI)
	}, this.click = function(fG, fI) {
		aT.a35()
	}, this.a2j = function(fG, fI, deltaY) {}, this.aHa = function() {
		aY.aAh(), bh.dp = !0
	}, this.vf = function() {
		8 !== a2B && 10 !== a2B && (vg.imageSmoothingEnabled = !0, this.zB(), 0 !== a2B && (aT.vf(), aO.vf(), this.aHb(), ba.vf()), 0 !== a2B && 6 === a2B && aZ.vf(), bb.vf(), t.vf())
	}, this.zB = function() {
		var aHd, aHc;
		if (__fx.makeMainMenuTransparent) vg.clearRect(0, 0, h.i, h.j);
		else bU.xc ? (aHc = h.i / bU.fK, aHd = h.j / bU.fL, vg.setTransform(aHc = aHd < aHc ? aHc : aHd, 0, 0, aHc, Math.floor((h.i - aHc * bU.fK) / 2), Math.floor((h.j - aHc * bU.fL) / 2)), vg.drawImage(bU.xe, 0, 0), vg.setTransform(1, 0, 0, 1,
			0, 0), vg.fillStyle = bD.o0) : vg.fillStyle = bD.nw, vg.fillRect(0, 0, h.i, h.j)
	}, this.aHb = function() {
		var fI = Math.floor(.3 * h.j),
			canvas = ab.aHe("territorial.io"),
			iA = (iA = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : iA,
			fG = (vg.globalAlpha = .15, vg.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - iA * canvas.width))),
			fG = Math.floor(fG / iA),
			fI = Math.floor(fI - .5 * canvas.height * iA),
			fI = Math.floor(fI / iA);
		vg.setTransform(iA, 0, 0, iA, fG, fI), vg.drawImage(canvas, fG, fI), vg.setTransform(1, 0, 0, 1, 0, 0), vg.globalAlpha = 1, vg.imageSmoothingEnabled = !0
	}
}

function ct() {
	this.aEn = 0;
	var aHg, aHh, aHi, aHj, aHk, aHl = this.aHf = 0;

	function aHo() {
		aHj = aHk = null, aHl = 0
	}
	this.dh = function(s7, aEk, aEl) {
		t.x(), bp.uk(), aa.setState(10), aHj = s7, aHk = aEk, aHl = aEl, this.aEn = s7.aEn, this.aHf = aEl, aHg = 0, aHh = bh.eX + 4500, b0.y.a2S = s7.a2S, b0.y.a2I === s7.a2S ? (console.log("direct pass"), aHi = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a2I, 3247), aHi = 2, b0.y.aHM(s7.a2S, 5, 2) && b0.pU.aHm()), vg.imageSmoothingEnabled = !0, aa.zB();
		aEk = ab.aHe("loading"), aEl = (a0.a1.iI() ? .396 : .25) * h.iJ / aEk.width;
		vg.setTransform(aEl, 0, 0, aEl, Math.floor((h.i - aEl * aEk.width) / 2), Math.floor((h.j - aEl * aEk.height) / 2)), vg.imageSmoothingEnabled = !1, vg.drawImage(aEk, 0, 0), vg.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mo = function() {
		0 < aHi && bh.eX > aHh && (aHi--, aHh += 4500, 0 === bh.aHp) && 0 === bh.kR() && b0.y.aHM(b0.y.a2S, 5, 2)
	}, this.aHq = function() {
		return 10 === aa.a2K() && (bp.aDz.aEo(aHj, aHk, aHl), aHo(), !0)
	}, this.aHr = function() {
		10 === aa.a2K() && 2 <= ++aHg && (bp.aDz.aEo(aHj, aHk, aHl), aHo())
	}
}

function cU() {
	var aHt, canvas, a1U, aHu;

	function aI0(eG, name, aI1, qj) {
		a1U[eG] = name, canvas[eG] = new Image, canvas[eG].onload = function() {
			! function(eG, aI1) {
				var a4z, a50 = null;
				7 === aI1 ? a4z = bC.a3R.a52 : 8 === aI1 ? (a4z = bC.a3R.a55, a50 = .1) : 3 === aI1 ? (a4z = bC.a3R.a53, a50 = .06) : 5 === aI1 ? a4z = bC.a3R.a56 : 6 === aI1 ? a4z = bC.a3R.a51 : 4 === aI1 && (a4z = bC.a3R.a57);
				canvas[eG] = bC.a3R.a4y(canvas[eG], a4z, a50)
			}(eG, aI1), aI3()
		}, canvas[eG].onerror = function(e) {
			console.error("Error loading image at index", eG, "Error:", e), aI3()
		}, canvas[eG].src = "data:image/png;base64," + qj
	}

	function aI3() {
		aHt--, aHx()
	}

	function aHx() {
		0 === aHt && (aHt = -1, aHz(), bh.dp = !0, canvas[7] = aHu, canvas[8] = aHu, canvas[9] = aHu, canvas[10] = aHu, 5 === t.tK) && t.a2O().aI5.resize()
	}

	function aHz() {
		aL.a6O(), ba.aDp([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xh = new zd, aj.xh.dh(), aw.di()
	}
	this.dh = function() {
		if (void 0 === canvas) {
			aHt = 23, canvas = new Array(aHt), a1U = new Array(aHt), (aHu = document.createElement("canvas")).width = 1;
			for (var aB = aHt - (aHu.height = 1); 0 <= aB; aB--) canvas[aB] = aHu;
			aHz(), aI0(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aI0(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aI0(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(3, "orders", 6,
					"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"
					), aI0(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aI0(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aI0(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aI0(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(8,
					"googleplay", 3,
					"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"
					), aI0(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aI0(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aI0(14, "bestPlayer", 5,
					"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"
					), aI0(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aI0(16, "apple", 3,
					"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"
					), aI0(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aI0(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aI0(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aI0(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aI0(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aI0(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eG) {
		return canvas[eG]
	}, this.aHe = function(name) {
		for (var aB = a1U.length - 1; 0 <= aB; aB--)
			if (a1U[aB] === name) return canvas[aB];
		return aHu
	}, this.tm = function() {
		return aHt <= 0
	}, this.aHw = function() {
		aHt = 0, aHx()
	}
}

function cV() {
	var aI6 = [
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
		aI7 = [
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
	this.aI8 = null, this.aI9 = null, this.aIA = null, this.aIB = null, this.aIC = null, this.aID = null, this.aIE = null, this.aIF = null, this.aIG = null, this.aIH = null;

	function aIO(jk, nn) {
		for (var aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = jk; aB < nn; aB++) aI8[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2, aI9[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2, aIA[aB] = bN.fa(64 * ay.random(), ay.value(100)) << 2
	}

	function aIN(jk, nn) {
		for (var colorsData = aD.data.colorsData, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = jk; aB < nn; aB++) {
			var fb = colorsData[aB];
			aI8[aB] = 4 * (fb >> 12), aI9[aB] = 4 * (fb >> 6 & 63), aIA[aB] = 4 * (63 & fb)
		}
	}

	function aIf(en, aIh) {
		aDB[en] = 0, aDB[en + 1] = 0, aDB[en + 2] = aIh, aDB[en + 3] = 0, aIi(en)
	}

	function aIi(en) {
		var fG;
		bd.nv || (fG = ac.zC(en), en = ac.zD(en), bd.nv = fG >= bc.aDA[0] && fG <= bc.aDA[2] && en >= bc.aDA[1] && en <= bc.aDA[3])
	}
	this.fB = new Int32Array(4), this.aIL = new Int32Array(8), this.di = function() {
		var fB = this.fB,
			fB = (fB[0] = -4 * bU.fK, fB[1] = 4, fB[2] = -fB[0], fB[3] = -fB[1], this.aIL);
		fB[0] = -4 * bU.fK - 4, fB[1] = -4 * bU.fK, fB[2] = -4 * bU.fK + 4, fB[3] = -4, fB[4] = 4, fB[5] = 4 * bU.fK - 4, fB[6] = 4 * bU.fK, fB[7] = 4 * bU.fK + 4
	}, this.dh = function() {
		if (this.aI8 ? (this.aI8.fill(0), this.aI9.fill(0), this.aIA.fill(0), this.aIB.fill(0), this.aIC.fill(0), this.aID.fill(0), this.aIE.fill(0), this.aIF.fill(0), this.aIG.fill(0), this.aIH.fill(0), this.a9Y.fill(0)) : (this.aI8 =
				new Uint8Array(aD.f6), this.aI9 = new Uint8Array(aD.f6), this.aIA = new Uint8Array(aD.f6), this.aIB = new Uint8Array(aD.f6), this.aIC = new Uint8Array(aD.f6), this.aID = new Uint8Array(aD.f6), this.aIE = new Uint8Array(aD.f6),
				this.aIF = new Uint8Array(aD.f6), this.aIG = new Uint8Array(aD.f6), this.aIH = new Uint8Array(aD.f6), this.a9Y = new Uint8Array(aD.f6)), aD.i3)
			for (var aBo = bi.aBo, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = aD.f6 - 1; 0 <= aB; aB--) {
				var eh = aBo[aB],
					lP = bN.fa((aI7[eh][3] + 1) * ay.random(), ay.value(100));
				aI8[aB] = aI6[eh][0] + lP * aI7[eh][0], aI9[aB] = aI6[eh][1] + lP * aI7[eh][1], aIA[aB] = aI6[eh][2] + lP * aI7[eh][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aIN(0, aD.kU), aIO(aD.kU, aD.f6)) : aIO(0, aD.f6) : aIN(0, aD.f6);
		! function() {
			var aB, fC, aI8 = ac.aI8,
				aI9 = ac.aI9,
				aIA = ac.aIA;
			for (aB = aD.f6 - 1; 0 <= aB; aB--) fC = bN.fa(aI8[aB] + aI9[aB] + aIA[aB], 3), aI8[aB] += aIU(fC - aI8[aB], 2), aI9[aB] += aIU(fC - aI9[aB], 2), aIA[aB] += aIU(fC - aIA[aB], 2), aI8[aB] -= aI8[aB] % 4, aI9[aB] -= aI9[aB] % 4, aIA[
				aB] -= aIA[aB] % 4
		}(),
		function() {
			for (var f9 = aD.f6, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aIB = ac.aIB, aB = 0; aB < f9; aB++) aI8[aB] += aB >> 7, aI9[aB] += aB >> 5 & 3, aIA[aB] += aB >> 3 & 3, aIB[aB] = 7 & aB
		}(), this.aIR(),
			function() {
				for (var f9 = aD.f6, aIC = ac.aIC, aID = ac.aID, aIE = ac.aIE, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = 0; aB < f9; aB++) {
					var eF = aI8[aB],
						ti = aI9[aB],
						fT = aIA[aB];
					60 <= eF + ti + fT ? (aIC[aB] = Math.max(eF - 40, 3 & eF), aID[aB] = Math.max(ti - 40, 3 & ti), aIE[aB] = Math.max(fT - 40, 3 & fT)) : (aIC[aB] = eF + 40, aID[aB] = ti + 40, aIE[aB] = fT + 40)
				}
			}(),
			function() {
				for (var f9 = aD.f6, aIF = ac.aIF, aIG = ac.aIG, aIH = ac.aIH, aI8 = ac.aI8, aI9 = ac.aI9, aIA = ac.aIA, aB = 0; aB < f9; aB++) {
					var eF = aI8[aB],
						ti = aI9[aB],
						fT = aIA[aB];
					688 <= eF + ti + fT ? (aIF[aB] = eF - 88, aIG[aB] = ti - 88, aIH[aB] = fT - 88) : (aIF[aB] = Math.min(eF + 88, 252 + (3 & eF)), aIG[aB] = Math.min(ti + 88, 252 + (3 & ti)), aIH[aB] = Math.min(fT + 88, 252 + (3 & fT)))
				}
			}()
	}, this.a8Q = function(player) {
		var g = bQ.fi;
		return g[0] = this.aI8[player], g[1] = this.aI9[player], g[2] = this.aIA[player], g
	}, this.aIR = function() {
		for (var aB = aD.f6 - 1; 0 <= aB; aB--) this.a9Y[aB] = this.aI8[aB] + this.aI9[aB] + this.aIA[aB] < 280 ? 0 : 1
	}, this.zC = function(en) {
		return bN.fa(en, 4) % bU.fK
	}, this.zD = function(en) {
		return bN.fa(en, 4 * bU.fK)
	}, this.yk = function(fG, fI) {
		return Math.floor(4 * (fI * bU.fK + fG))
	}, this.z0 = function(en) {
		var fB = this.fB;
		return this.aIV(en + fB[0]) || this.aIV(en + fB[1]) || this.aIV(en + fB[2]) || this.aIV(en + fB[3])
	}, this.fX = function(en) {
		var fB = this.fB;
		return this.fE(en + fB[0]) || this.fE(en + fB[1]) || this.fE(en + fB[2]) || this.fE(en + fB[3])
	}, this.yy = function(en, player) {
		var fB = this.fB;
		return this.aIW(en + fB[0], player) || this.aIW(en + fB[1], player) || this.aIW(en + fB[2], player) || this.aIW(en + fB[3], player)
	}, this.aIX = function(aB, aIY, aIZ, aIa) {
		this.aI8[aB] = aIY >> 16, this.aI9[aB] = aIY >> 8 & 255, this.aIA[aB] = 255 & aIY, this.aIC[aB] = aIZ >> 16, this.aID[aB] = aIZ >> 8 & 255, this.aIE[aB] = 255 & aIZ, this.aIF[aB] = aIa >> 16, this.aIG[aB] = aIa >> 8 & 255, this.aIH[aB] =
			255 & aIa
	}, this.aIb = function(aB) {
		return [(this.aI8[aB] << 16) + (this.aI9[aB] << 8) + this.aIA[aB], (this.aIC[aB] << 16) + (this.aID[aB] << 8) + this.aIE[aB], (this.aIF[aB] << 16) + (this.aIG[aB] << 8) + this.aIH[aB]]
	}, this.gj = function(en) {
		return 208 <= aDB[en + 3]
	}, this.z6 = function(player, en) {
		return this.gj(en) && this.z9(player, en)
	}, this.z9 = function(player, en) {
		return player === this.f1(en)
	}, this.aIc = function(en) {
		return 208 <= aDB[en + 3] && aDB[en + 3] < 224
	}, this.jf = function(en) {
		return 224 <= aDB[en + 3] && aDB[en + 3] < 248
	}, this.aId = function(en) {
		return 248 <= aDB[en + 3]
	}, this.yz = function(en) {
		for (var fB = this.fB, aB = 3; 0 <= aB; aB--)
			if (this.iN(en + fB[aB])) return !0;
		return !1
	}, this.f4 = function(en) {
		return this.gj(en) || this.f0(en)
	}, this.iN = function(en) {
		return 0 === aDB[en + 3] && 2 === aDB[en + 2]
	}, this.f0 = function(en) {
		return 0 === aDB[en + 3] && 1 === aDB[en + 2]
	}, this.xp = function(en) {
		return 0 === aDB[en + 3] && 3 === aDB[en + 2]
	}, this.fE = function(en) {
		return 0 === aDB[en + 3] && 5 === aDB[en + 2]
	}, this.aIV = function(en) {
		return 0 === aDB[en + 3] && 3 <= aDB[en + 2]
	}, this.er = function(en) {
		return (aDB[en] >> 1 << 8) + aDB[en + 1]
	}, this.aIe = function(en) {
		return 1 & aDB[en]
	}, this.aIW = function(en, player) {
		return this.f0(en) || this.gj(en) && player !== this.f1(en)
	}, this.f1 = function(en) {
		return ((3 & aDB[en]) << 7) + ((3 & aDB[en + 1]) << 5) + ((3 & aDB[en + 2]) << 3) + (7 & aDB[en + 3])
	}, this.z7 = function(en) {
		aIf(en, 1)
	}, this.aIg = function(en) {
		aIf(en, 2)
	}, this.yl = function(en, player) {
		aDB[en] = this.aI8[player], aDB[en + 1] = this.aI9[player], aDB[en + 2] = this.aIA[player], aDB[en + 3] = 208 + this.aIB[player], aIi(en)
	}, this.ge = function(en, player) {
		aDB[en] = this.aIC[player], aDB[en + 1] = this.aID[player], aDB[en + 2] = this.aIE[player], aDB[en + 3] = 224 + this.aIB[player], aIi(en)
	}, this.jg = function(en, player) {
		aDB[en] = this.aIF[player], aDB[en + 1] = this.aIG[player], aDB[en + 2] = this.aIH[player], aDB[en + 3] = 248 + this.aIB[player], aIi(en)
	}
}

function cu() {
	var aIj = 0,
		aIl = new Uint16Array(64);

	function wI(a6S) {
		aIj -= 2;
		for (var aB = a6S; aB < aIj; aB += 2) aIl[aB] = aIl[aB + 2], aIl[aB + 1] = aIl[aB + 3]
	}
	this.dh = function() {
		aIj = 0
	}, this.ec = function() {
		var aB, jd, il;
		if (0 !== aIj)
			if (0 === ag.n4[aD.et]) aIj = 0;
			else if (0 === ad.gG(aD.et)) aIj = 0;
		else
			for (aB = aIj - 2; 0 <= aB; aB -= 2)(jd = aIl[aB]) < aD.f6 && 0 === ag.n4[jd] ? wI(aB) : (il = aIl[aB + 1], (jd >= aD.f6 && bu.aIn(aD.et) || jd < aD.f6 && bu.aIo(aD.et, jd)) && (bA.hZ.hg(il, jd), wI(aB)))
	}, this.hh = function(jd, il) {
		! function(jd, il) {
			for (var aB = 0; aB < aIj; aB += 2)
				if (aIl[aB] === jd) return aIl[aB + 1] = Math.min(aIl[aB + 1] + il, 1023), 1;
			return
		}(jd, il) && 64 !== aIj && (aIl[aIj] = jd, aIl[aIj + 1] = il, aIj += 2)
	}
}

function cW() {
	function aIw(player) {
		var eY;
		bC.gV.a4a(player) && (eY = ag.hB[player] - ag.a4f[player] + ad.aIy(player), bf.gZ(player, Math.abs(eY), eY < 0 ? 18 : 12)), ag.hB[player] = 0, ag.a4f[player] = 0
	}

	function aJ5() {
		aX.show(!1, !1, !1, !0), aW.aCK(), bT.a0t.a1f()
	}

	function aIs(player, aJ4) {
		for (var aB = aJ4.length - 1; 0 <= aB; aB--) ad.aJ7(aJ4[aB], player)
	}

	function aIv(player) {
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
					ac.z6(player, gh) && ac.z7(gh)
				}
		}
		j3[player] = j5[player] = 0, j2[player] = j4[player] = Math.max(fK, bU.fL)
	}
	this.dq = function(gh) {
		var player, eY = ag.gx[gh] + ag.yg[gh];
		bP.y.kY[gh] ? eY && (aIs(player = gh, ad.aIt(player)), af.aIu(player), aIv(player), aF.gX(player), ad.clear(player), aIw(player), function(player) {
			ag.yg[player] = 0, ag.gb[player] = [], ag.gp[player] = [], ag.gq[player] = [], ag.fY[player] = []
		}(player)) : !eY && ag.gb[gh].length || this.aIr(gh)
	}, this.aIr = function(player) {
		! function(player) {
			bC.gV.jr(player) || (ag.a1j[player] = bk.a1y.aJ3(), aD.a1A++);
			var aJ4 = ad.aIt(player);
			0 === aJ4.length ? bC.gV.a4X(player) && aJ5() : (aIs(player, aJ4), function(player, aJ4) {
				var aJ9 = aJ4[function(aJ4) {
					var aB, eG = 0;
					for (aB = aJ4.length - 1; 1 <= aB; aB--) ag.gx[aJ4[aB]] > ag.gx[aJ4[eG]] && (eG = aB);
					return eG
				}(aJ4)];
				9 === aD.km && (1 === bi.f7[player] ? ay.kM(8) && az.aJA(aJ9) : aE.hs[player] && (aN.a7r(765, 0), aN.za(280, L(138, [ag.zb[aJ9], ag.zb[player]]), 765, aJ9, bD.nw, bD.pI, -1, !0)));
				if (bC.gV.a4X(player)) aJ5(), aN.a1L(aJ9, 1);
				else {
					for (var aB = aJ4.length - 1; 0 <= aB; aB--)
						if (bC.gV.a4a(aJ4[aB]) && (bf.n0[4 - bC.gV.jr(player)]++, bC.gV.a4X(aJ4[aB]))) return aN.a1L(player, 0);
					bC.gV.jr(player) || aN.a7b(0, player, aJ9)
				}
			}(player, aJ4))
		}(player), af.aIu(player), aIv(player), aIw(player),
			function(player) {
				ag.n4[player] = 0, ag.gb[player] = null, ag.gp[player] = null, ag.gq[player] = null, ag.fY[player] = null
			}(player), aF.gX(player), ad.clear(player), bP.aJ1.aJ2(player)
	}
}

function cz() {
	var input;

	function aJB(e) {
		(e = e.target.files) && 0 < e.length && b6.aJE(e[0])
	}

	function aJI(e) {
		var eh = new Image;
		eh.onload = aJJ, eh.src = e.target.result
	}

	function aJJ(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJL = bl.eU.data[162].value,
			max = Math.min(bU.aJM, aJL),
			aJL = (max = a0.id || bL.rU() ? Math.min(1400, aJL) : max) / Math.max(i, j);
		if (aJL < 1 && (i = Math.floor(aJL * i + .125), j = Math.floor(aJL * j + .125)), max < i || max < j || i < 10 || j < 10) aJL = "Invalid Image Dimensions!", a0.wP ? a0.wP.showToast(aJL) : alert(aJL);
		else {
			for (var max = document.createElement("canvas"), aJL = (max.width = i, max.height = j, max.getContext("2d")), aJO = document.createElement("canvas"), aJP = (aJO.width = e.width, aJO.height = e.height, aJO.getContext("2d")), e = (aJP
					.drawImage(e, 0, 0), aJP.getImageData(0, 0, aJO.width, aJO.height)), aJP = aJL.createImageData(i, j), src = e.data, aJS = aJP.data, aA9 = aJO.width / i, aAA = aJO.height / j, fI = 0; fI < j; fI++)
				for (var fG = 0; fG < i; fG++) {
					var aJT = Math.floor(fG * aA9),
						aJT = 4 * (Math.floor(fI * aAA) * aJO.width + aJT),
						aJW = 4 * (fI * i + fG);
					aJS[aJW] = src[aJT], aJS[1 + aJW] = src[1 + aJT], aJS[2 + aJW] = src[2 + aJT], aJS[3 + aJW] = 255
				}
			aJL.putImageData(aJP, 0, 0), 20 === t.tK && t.a2O().aJJ(max)
		}
	}
	this.dh = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJB
	}, this.uk = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJC = function() {
		input.click()
	}, this.aJE = function(aJF) {
		var g = aJF.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJI, g.readAsDataURL(aJF))
	}
}

function cx() {
	this.aJX = null, this.dh = function() {
		10 !== aD.km ? this.aJX = null : this.aJX = new Uint32Array(aD.f6)
	}, this.ec = function() {
		10 === aD.km && this.lJ()
	}, this.lJ = function() {
		for (var gh, target, aCX, aJX = this.aJX, a0w = al.l5, a4g = ag.hB, aB = al.l0 - 1; 0 <= aB; aB--)(gh = a0w[aB]) >= aD.kU || (target = Math.max(bN.fa(a4g[gh], 4), 2048), aCX = Math.max(ae.aCY(gh), 100), aJX[gh] += bN.fa(aCX * target,
			1e4), aJX[gh] > target && (aJX[gh] = target))
	}, this.a4m = function(player, hs) {
		return hs > this.aJX[player] ? (hs = this.aJX[player], this.aJX[player] = 0) : this.aJX[player] -= hs, hs
	}
}

function d0() {
	var aJY = -1,
		aJZ = null,
		aJa = -1,
		vB = 4;

	function aJc() {
		aM.a6w() ? bd.aD9() : bd.a1K()
	}

	function aJk(eh, fC) {
		var eF = eh >> 16,
			ti = eh >> 8 & 255,
			eh = 255 & eh,
			aJl = 255 - fC,
			aJl = (aJl < eF && aJl < ti && aJl < eh && (fC = -fC), aJY >> 7),
			aJn = aJY >> 5 & 3,
			aJo = aJY >> 3 & 3;
		return (Math.max(Math.min(eF + fC, 252 + aJl), aJl) << 16) + (Math.max(Math.min(ti + fC, 252 + aJn), aJn) << 8) + Math.max(Math.min(eh + fC, 252 + aJo), aJo)
	}

	function aJb() {
		return -1 !== aJY && (ac.aIX(aJY, aJZ[0], aJZ[1], aJZ[2]), aJh(aJY), aJY = -1)
	}

	function aJh(player) {
		bh.dp = !0;
		for (var j2 = ag.j2[player], j4 = ag.j4[player], j3 = ag.j3[player], j5 = ag.j5[player], fI = j4; fI <= j5; fI++)
			for (var fG = j2; fG <= j3; fG++) {
				var en = ac.yk(fG, fI);
				ac.z6(player, en) && (ac.aId(en) ? ac.jg(en, player) : ac.jf(en) ? ac.ge(en, player) : ac.yl(en, player))
			}
	}
	this.dh = function() {
		aJZ = null, aJa = aJY = -1, vB = bN.iH(Math.floor(bl.eU.data[16].value), 0, 16)
	}, this.ec = function(bw) {
		if (bl.eU.data[15].value && 0 !== vB && (bw || !bL.rU())) {
			var bw = bO.hP(bL.hE),
				hQ = bO.hR(bL.hF);
			if (bO.hS(bw, hQ)) {
				bw = bO.fW(bw, hQ), hQ = bO.ez(bw);
				if (aJa === hQ)
					if (ac.gj(hQ)) {
						if (aJY === ac.f1(hQ)) return
					} else if (-1 === aJY) return;
				! function(en) {
					ac.gj(en) ? (en = ac.f1(en)) !== aJY && (aJb(), function(player) {
						aJY = player, aJZ = ac.aIb(player);
						var aJf = function() {
							var qu = aJZ,
								aJi = vB << 2,
								aJj = aJi << 1;
							return [aJk(qu[0], aJi), aJk(qu[1], aJj), aJk(qu[2], aJj)]
						}();
						ac.aIX(player, aJf[0], aJf[1], aJf[2]), aJh(player)
					}(en), aJc()) : aJb() && aJc()
				}(aJa = hQ)
			} else aJb() && aJc()
		}
	}
}

function d1() {
	var uy = 0,
		aJp = 0,
		aJq = 0,
		aJr = 0,
		aJa = -1;

	function aJu(en) {
		if (aJa === en) return !1;
		if (-1 === (aJa = en)) uy = 0, aN.a84(uy, 0);
		else {
			if (ac.gj(en)) return aJq = ac.f1(en), kT = ag.hB[aJq] - ag.a4f[aJq], (4 !== uy || kT !== aJp) && (uy = 4, aJp = kT, aN.a84(uy, kT), !0);
			if (ac.f0(en)) return 3 !== uy && (uy = 3, aN.a84(uy, 0), !0);
			if (ac.fE(en)) return 2 !== uy && (uy = 2, aN.a84(uy, 0), !0);
			var kT = bP.lJ.a6k(bL.hE, bL.hF);
			if (-1 === kT) return 1 !== uy && (uy = 1, aN.a84(uy, 0), !0);
			en = bP.y.a7i[kT];
			if (aJq = bP.y.mN[kT], aJr = bP.y.mO[kT] >> 3, 5 === uy && en === aJp) return !1;
			uy = 5, aJp = en, aN.a84(uy, en)
		}
		return !0
	}
	this.dh = function() {
		aJr = aJq = aJp = uy = 0, aJa = -1
	}, this.ec = function(bw) {
		var hQ;
		!bw && bL.rU() || (bw = bO.hP(bL.hE), hQ = bO.hR(bL.hF), bO.hS(bw, hQ) ? (bw = bO.fW(bw, hQ), aJu(bO.ez(bw))) : aJu(-1))
	}, this.ml = function() {
		var aJw, kT, a6i, aJv;
		if (0 !== uy && 2 !== uy)
			if (bL.rU()) {
				if (1 !== uy && 3 !== uy) {
					if (4 === uy) return void(kT = ag.hB[aJq] - ag.a4f[aJq], aJp === kT || (aJp = kT, aN.a84(uy, kT)));
					(a6i = bP.lJ.nU(aJr, aJq)) < 0 ? (uy = 1, aN.a84(uy, 0)) : (aJv = bP.y.a7i[a6i]) !== aJp && (aJp = aJv, aN.a84(uy, aJv))
				}
			} else if (1 === uy) - 1 !== (a6i = bP.lJ.a6k(bL.hE, bL.hF)) && (uy = 5, aJp = bP.y.a7i[a6i], aN.a84(uy, aJp));
		else if (3 === uy) ac.gj(aJa) && (uy = 4, aJw = ac.f1(aJa), aJp = ag.hB[aJw] - ag.a4f[aJw], aN.a84(uy, aJp));
		else if (4 === uy) {
			if (ac.gj(aJa)) return void(aJw = ac.f1(aJa), kT = ag.hB[aJw] - ag.a4f[aJw], aJp === kT || (aJp = kT, aN.a84(uy, kT)));
			uy = 3, aN.a84(uy, 0)
		} else - 1 === (a6i = bP.lJ.a6k(bL.hE, bL.hF)) ? (uy = 1, aN.a84(uy, 0)) : (aJv = bP.y.a7i[a6i]) !== aJp && (aJp = aJv, aN.a84(uy, aJv))
	}
}

function da() {
	function aJy(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aK6, g.readAsText(e))
	}

	function aK6(e) {
		var aK9;
		aD.a18 || (e = JSON.parse(e.target.result), aK9 = aD.data = new a5d, aKA(e, aK9, "mapType", 0, 2), aKA(e, aK9, "mapProceduralIndex", 0, 255), aKA(e, aK9, "mapRealisticIndex", 0, 255), aKA(e, aK9, "mapSeed", 0, 16383), function(aK8, aK9, gi,
				max) {
				aK8 = aK8[gi];
				aK9[gi] = aKG(aK8) ? aK8.slice(0, max) : aK9[gi]
			}(e, aK9, "mapName", 20), function(aK8, aK9, gi) {
				var aJK;
				2 === aK9.mapType && (!aKG(aK8 = aK8[gi]) || aK8.length <= 20 ? aK9.mapType = 0 : ((aJK = new Image).onload = function() {
					bB.aKH.aKI(aJK, 1), aJK.onload = null, aJK = null
				}, aJK.src = aK8))
			}(e, aK9, "canvas"), aKA(e, aK9, "passableWater", 0, 1), aKA(e, aK9, "passableMountains", 0, 1), aKA(e, aK9, "playerCount", 1, 512), aKA(e, aK9, "humanCount", 1, 1), aKA(e, aK9, "selectedPlayer", 0, 0), aKA(e, aK9, "gameMode", 0, 1),
			aKA(e, aK9, "playerMode", 0, 0), aKA(e, aK9, "battleRoyaleMode", 0, 0), aKA(e, aK9, "numberTeams", 0, 8), aKA(e, aK9, "isZombieMode", 0, 0), aKA(e, aK9, "isContest", 0, 0), aKA(e, aK9, "isReplay", 0, 0), aKD(e, aK9, "elo", 16, 2,
				16383), aKA(e, aK9, "colorsType", 0, 1), aKA(e, aK9, "colorsPersonalized", 0, 1), aKD(e, aK9, "colorsData", 32, 512, 262143), aKA(e, aK9, "selectableColor", 0, 1), aKD(e, aK9, "teamPlayerCount", 16, 9, 512), aKA(e, aK9,
				"neutralBots", 0, 1), aKA(e, aK9, "botDifficultyType", 0, 3), aKA(e, aK9, "botDifficultyValue", 0, 15), aKD(e, aK9, "botDifficultyTeam", 8, 9, 15), aKD(e, aK9, "botDifficultyData", 8, 512, 15), aKA(e, aK9, "spawningType", 0, 2),
			aKA(e, aK9, "spawningSeed", 0, 16383), aKD(e, aK9, "spawningData", 16, 1024, 4095), aKA(e, aK9, "selectableSpawn", 0, 1), aKA(e, aK9, "playerNamesType", 0, 2),
			function(aK8, aK9, gi, size, max) {
				var a3m = aK8[gi];
				if (Array.isArray(a3m)) {
					for (var a3n = new Array(size), f9 = Math.min(a3m.length, size), aB = 0; aB < f9; aB++) a3n[aB] = aKG(a3m[aB]) ? a3m[aB].slice(0, max) : "";
					a3n.fill("", f9), aK9[gi] = a3n
				}
			}(e, aK9, "playerNamesData", 512, 20), aKA(e, aK9, "selectableName", 0, 1), aKA(e, aK9, "aIncomeType", 0, 2), aKA(e, aK9, "aIncomeValue", 0, 255), aKD(e, aK9, "aIncomeData", 8, 512, 255), aKA(e, aK9, "tIncomeType", 0, 2), aKA(e, aK9,
				"tIncomeValue", 0, 255), aKD(e, aK9, "tIncomeData", 8, 512, 255), aKA(e, aK9, "iIncomeType", 0, 2), aKA(e, aK9, "iIncomeValue", 0, 255), aKD(e, aK9, "iIncomeData", 8, 512, 255), aKA(e, aK9, "sResourcesType", 0, 2), aKA(e, aK9,
				"sResourcesValue", 0, 2047), aKD(e, aK9, "sResourcesData", 16, 512, 2047), t.x(), t.y.tC[0] = 0, t.u(19))
	}

	function aKA(aK8, aK9, gi, min, max) {
		aK8 = aK8[gi];
		aK9[gi] = "number" == typeof aK8 && min <= aK8 && aK8 <= max ? Math.floor(aK8) : aK9[gi]
	}

	function aKG(qj) {
		return "string" == typeof qj
	}

	function aKD(aK8, aK9, gi, aKJ, size, max) {
		var a3m = aK8[gi];
		if (Array.isArray(a3m)) {
			for (var a3n = new(8 === aKJ ? Uint8Array : 16 === aKJ ? Uint16Array : Uint32Array)(size), f9 = Math.min(a3m.length, size), aB = 0; aB < f9; aB++) a3n[aB] = bN.iH(a3m[aB], 0, max);
			aK9[gi] = a3n
		}
	}
	this.aJx = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJy, input.click()
	}, this.aJz = function() {
		for (var aK2, aDm, a6B = aD.data, keys = Object.keys(a6B), aK0 = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a6B[key] instanceof Uint8Array || a6B[key] instanceof Uint16Array || a6B[key] instanceof Uint32Array ? aK0[key] = Array.from(a6B[key]) : aK0[key] = a6B[key]
		}
		aK0.canvas = 2 === aK0.mapType && aK0.canvas ? aK0.canvas.toDataURL() : null, aK2 = aK0, aK2 = JSON.stringify(aK2, null, 2), aK2 = new Blob([aK2], {
			type: "application/json"
		}), (aDm = document.createElement("a")).href = URL.createObjectURL(aK2), aDm.download = "tt_scenario.json", aDm.click()
	}
}

function ca() {
	var aKK, aKL, size, jd, hs, aKM;

	function aKN(player) {
		return player < aD.kU ? aKK * player : aKK * aD.kU + aKL * (player - aD.kU)
	}
	this.dh = function() {
		aKK = aD.kU < 16 ? 12 : 8, aKL = 4;
		var f9 = aKN(aD.f6);
		size = new Uint8Array(aD.f6), jd = new Uint16Array(f9), hs = new Uint32Array(f9), aKM = new Uint8Array(f9)
	}, this.qa = function(a92, aKO) {
		var aKP = this.hC(a92, aKO),
			aKO = (this.hA(a92, aKO, 0), bC.gV.gY(a92, aKP));
		bf.gZ(a92, aKP - aKO, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJ7 = function(player, aKO) {
		var aKS, aKO = function(player, aKO) {
			var aB, lP = aKN(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jd[lP + aB] === aKO) return aB;
			return size[player]
		}(player, aKO);
		aKO !== size[player] && (aKS = hs[aKN(player) + aKO], this.ga(player, aKO), this.eg(player, aKS, aD.f6))
	}, this.jp = function(player, aKO) {
		for (var lP = aKN(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKO) return !0;
		return !1
	}, this.k8 = function(player) {
		return player < aD.kU ? size[player] < aKK : size[player] < aKL
	}, this.gG = function(player) {
		return size[player]
	}, this.gL = function(player, aB) {
		return jd[aKN(player) + aB]
	}, this.gM = function(player, aB) {
		return hs[aKN(player) + aB]
	}, this.hC = function(player, aKO) {
		for (var lP = aKN(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKO) return hs[lP + aB];
		return 0
	}, this.aIy = function(player) {
		for (var lP = aKN(player), fb = 0, aB = size[player] - 1; 0 <= aB; aB--) fb += hs[lP + aB];
		return fb
	}, this.hA = function(player, aKO, aKS) {
		for (var lP = aKN(player), aB = size[player] - 1; 0 <= aB; aB--) jd[lP + aB] === aKO && (hs[lP + aB] = aKS)
	}, this.gv = function(player, aB, aKS) {
		hs[aKN(player) + aB] = Math.max(aKS, 0)
	}, this.gw = function(player, aB) {
		aKM[aKN(player) + aB] = 0
	}, this.gN = function(player, aB) {
		return aKM[aKN(player) + aB]
	}, this.eg = function(player, aKS, aKO) {
		ao.jH.k6[player] = ao.jH.k6[aKO] = 8, bC.gV.a4a(aKO) && bf.n0[6 - bC.gV.jr(player)]++;
		for (var lP = aKN(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jd[lP + aB] === aKO) return hs[lP + aB] += aKS, void(hs[lP + aB] = hs[lP + aB] > aD.a4i ? aD.a4i : hs[lP + aB]);
		jd[lP + size[player]] = aKO, hs[lP + size[player]] = aKS, aKM[lP + size[player]] = 1, size[player]++, aKO === aD.et ? aN.a1L(player, 5) : player < aD.kU && player === aD.et && af.a7d(aKO)
	}, this.ga = function(player, eG) {
		var fS, lP;
		if (0 !== size[player])
			for (lP = aKN(player), size[player]--, fS = eG; fS < size[player]; fS++) jd[lP + fS] = jd[lP + fS + 1], hs[lP + fS] = hs[lP + fS + 1], aKM[lP + fS] = aKM[lP + fS + 1]
	}, this.aIt = function(player) {
		for (var fS, lP, aJ4 = [], aB = al.l0 - 1; 0 <= aB; aB--)
			for (lP = aKN(al.l5[aB]), fS = size[al.l5[aB]] - 1; 0 <= fS; fS--)
				if (jd[lP + fS] === player) {
					aJ4.push(al.l5[aB]);
					break
				} return aJ4
	}
}

function cb() {
	var aKT;

	function aKV(player) {
		var eF, k9;
		return bC.gV.jr(player) && player < aD.kU ? 0 : (eF = aKT[bN.fa((aD.f6 - 1) * ag.gx[player], aD.kE)], bh.kR() < 1920 && (eF = Math.max(bN.fa(100 * (13440 - 6 * bh.kR()), 1920), eF)), k9 = ae.kA(player), ag.hB[player] > k9 && (eF -= bN.fa(2 *
			eF * (ag.hB[player] - k9), k9)), Math.min(Math.max(eF, 0), 700))
	}

	function aKh(nh) {
		for (var gx = ag.gx, l5 = al.l5, aB = al.l0 - 1; 0 <= aB; aB--) {
			var gh = l5[aB];
			bC.gV.gY(gh, bN.fa(nh * gx[gh], 32))
		}
	}

	function aKe() {
		var xi = aD.et;
		bQ.ff[0] = ag.hB[xi] - ag.a4f[xi]
	}

	function aKg(eG) {
		var xi = aD.et,
			xi = ag.hB[xi] - ag.a4f[xi] - bQ.ff[0];
		ae.aB8 += xi, bf.n0[eG] += xi
	}
	this.aB8 = 0, this.dn = function() {
		for (var f9 = aD.f6, aB = (aKT = new Uint16Array(f9), 0); aB < f9; aB++) aKT[aB] = 100 + aKU(bN.fa(25600 * aB, f9 - 4), 9)
	}, this.dh = function() {
		(this.aB8 = 0) === aD.data.iIncomeType ? this.aCY = aKV : 1 === aD.data.iIncomeType ? this.aCY = function(player) {
			return bN.fa(aD.data.iIncomeValue * aKV(player), 64)
		} : this.aCY = function(player) {
			return bN.fa(aD.data.iIncomeData[player] * aKV(player), 64)
		}
	}, this.ec = function() {
		if (bh.kR() % 10 == 9 && (ae.aB8 = 0, function() {
				aKe();
				for (var l5 = al.l5, hB = ag.hB, aB = al.l0 - 1; 0 <= aB; aB--) {
					var gh = l5[aB],
						aKf = bN.fa(ae.aCY(gh) * hB[gh], 1e4);
					bC.gV.gY(gh, Math.max(aKf, 1))
				}
				aKg(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aKe(), 1 === aD.data.aIncomeType)
						for (var gx = ag.gx, l5 = al.l5, nh = aD.data.aIncomeValue, aB = al.l0 - 1; 0 <= aB; aB--) {
							var gh = l5[aB];
							bC.gV.gY(gh, bN.fa(nh * gx[gh], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gx = ag.gx, l5 = al.l5, nh = aD.data.aIncomeData, aB = al.l0 - 1; 0 <= aB; aB--) {
								var gh = l5[aB];
								bC.gV.gY(gh, bN.fa(nh[gh] * gx[gh], 128))
							}
						}();
					aKg(18)
				}
			}(), bh.kR() % 100 == 99)) {
			if (aKe(), 0 === aD.data.tIncomeType) aKh(32);
			else if (1 === aD.data.tIncomeType) aKh(aD.data.tIncomeValue);
			else
				for (var gx = ag.gx, l5 = al.l5, nh = aD.data.tIncomeData, aB = al.l0 - 1; 0 <= aB; aB--) {
					var gh = l5[aB];
					bC.gV.gY(gh, bN.fa(nh[gh] * gx[gh], 32))
				}
			aKg(8)
		}
	}, this.kA = function(player) {
		return Math.min(100 * ag.gx[player], aD.a5Z)
	}, this.pZ = function(player, pa) {
		bs.pw(player, pa, bQ.fg[0], 0), bC.gV.gY(pa, bQ.fg[0]), bf.px(player, pa), af.aKX(player, bQ.fg[0] + bQ.fg[1]), af.py(pa, bQ.fg[0]), bC.gV.me(player)
	}, this.aKY = function() {
		for (var f9 = al.l0, a0w = al.l5, lP = 0, a4g = ag.hB, aB = 0; aB < f9; aB++) lP += a4g[a0w[aB]];
		return lP
	}, this.aKZ = function(aKa) {
		for (var gh, f9 = al.l0, a0w = al.l5, lP = 0, a4g = ag.hB, f7 = bi.f7, aB = 0; aB < f9; aB++) f7[gh = a0w[aB]] === aKa && (lP += a4g[gh]);
		return lP
	}
}

function cd() {
	var aKl, aKm, aKn, aKo, aKp, aKq, aKr, aKs, aKt, aKu, aKv, aKw, aKx, aKy, aKz, aL0, aL1, aL2, aL4, aL5, aDf, aL6, aL7, aLD, aLE, aL3 = null,
		aL9 = 0,
		aLA = !1,
		aLB = new Float32Array(4),
		aLC = 0,
		aBd = 112,
		aLF = 0;

	function r5() {
		aKt = Math.floor(+h.iJ), aKu = Math.floor(.5 * aKt), aL3.width = h.i, aL3.height = h.j, aL4 = aL3.getContext("2d", {
			alpha: !0
		}), bC.r2.textAlign(aL4, 1), bC.r2.textBaseline(aL4, 1), aL4.imageSmoothingEnabled = !0
	}

	function aLG() {
		var aB, aLL;
		for (vg.font = bC.r2.sr(1, 100 * aKv), aLL = 80 / Math.floor(vg.measureText(bC.s1.a0P(aD.a4i)).width), vg.font = bC.r2.sr(1, 100), aB = aD.f6 - 1; 0 <= aB; aB--) aKs[aB] = 100 / Math.floor(vg.measureText(ag.zb[aB]).width), aKr[aB] = Math.min(
			aLL, aKs[aB])
	}

	function aLM(aB) {
		return !aLF || (aB = ag.hB[aB]) < 1e6 ? 1 : aB < 1e7 ? aLB[0] : aLB[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aLK(iB) {
		aLA = !1, aL9 = bh.eX, aL2 = !1, aL1 = 1, aKz = aL0 = 0, iB.clearRect(0, 0, h.i, h.j);
		for (var aLS, aLT, aB, aLU, fontSize, aLV, nV = im / iK, nW = io / iK, ni = (h.i + im) / iK, nj = (h.j + io) / iK, aLW = 0 !== ag.n4[aD.et] && !bC.gV.jr(aD.et), fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS], (fontSize = Math.floor(aKy * iK *
			aLM(aB) * aKr[aB] * aKp[aB])) < aKx || aKt <= fontSize || aKn[aB] + aKp[aB] > nV && aKn[aB] < ni && aKo[aB] + aKq[aB] > nW && aKo[aB] < nj && (aLS = Math.floor(h.i * (aKn[aB] + aKp[aB] / 2 - nV) / (ni - nV)), aLT = Math.floor(h.j * (
			aKo[aB] + aKq[aB] / 2 - nW) / (nj - nW) - .1 * fontSize), aLU = ac.a9Y[aB], iB.font = bC.r2.sr(1 === ag.a4W[aB] ? 4 : 1, fontSize), iB.fillStyle = aLX(fontSize, aLU % 2), aLF ? aLY(iB, aB, fontSize, aLS, aLT, aLU) : aLZ(aB,
			fontSize, aLS, aLT, iB), aL2 = !0, 0 < aDf[aB] ? function(aLS, aLT, fontSize, aB, iB) {
			0 === kF[aB] ? aj.sI.a0G(aL5[aB]) ? (function(aLS, aLT, fontSize, player, pl, iB) {
				for (var yF = aLT, iA = (iB.globalAlpha = aLh(fontSize), aLM(player) * (aLF ? aLC : aKs[player])), yE = aLS - .5 * fontSize / iA - .9 * fontSize, fT = 0; fT < 2; fT++) iB.fillText(aj.sI.a08(pl), yE, yF), yE = aLS +
					.5 * fontSize / iA + .9 * fontSize;
				iB.globalAlpha = 1
			}(aLS, aLT, fontSize, aB, aL5[aB], iB), aLb(aLS, aLT, fontSize, 0, 0, iB)) : aj.sI.a0I(aL5[aB]) ? (aLk(aLS, aLT, fontSize, aL5[aB], 0, iB), aLb(aLS, aLT, fontSize, 0, 1, iB)) : (aLk(aLS, aLT, fontSize, aL5[aB], 1, iB), aLb(
				aLS, aLT, fontSize, 1, 0, iB)) : aLk(aLS, aLT, fontSize, aL5[aB], 0, iB)
		}(aLS, aLT, fontSize, aB, iB) : 0 === kF[aB] && aLb(aLS, aLT, fontSize, 0, 0, iB), aLW && (0 < aDf[aB + aD.f6] || 0 < aDf[aB + 2 * aD.f6] || 0 < aDf[aB + 3 * aD.f6] || 0 < aDf[aB + 4 * aD.f6]) && function(aLS, aLT, fontSize, aB, iB) {
			var eh, gc = -1;
			for (eh = 4; 1 <= eh; eh--) 0 < aDf[aB + eh * aD.f6] && gc++;
			for (eh = 1; eh < 5; eh++) 0 < aDf[aB + eh * aD.f6] && (! function(aLS, aLT, fontSize, eh, aB, aLf, eY, iB) {
				var a40;
				if (1 === eh) {
					aB = aL5[aB + aD.f6];
					if (!aj.sI.a0H(aB)) return function(aLS, aLT, fontSize, pl, aLf, iB) {
						iB.globalAlpha = aLh(fontSize);
						aLS -= .534 * aLf * fontSize, aLf = aLT + 1.59 * fontSize;
						iB.font = bC.r2.sr(0, .785 * fontSize), iB.fillText(aj.sI.a08(pl), aLS, aLf), iB.globalAlpha = 1
					}(aLS, aLT, fontSize, aB, aLf, iB);
					a40 = aj.xh.zh[aB - 1024 + aj.sI.zt]
				} else a40 = 2 === eh ? aL.a6Q()[4].canvas[+(eY < 255)] : (3 === eh ? aL.a6Q()[5] : aL.a6Q()[6]).canvas[0];
				aB = aj.xh.zi, eY = .8 * fontSize / aB, eh = aLS - .5 * eY * aB - .534 * aLf * fontSize, aLS = aLT + 1.4 * eY * aB;
				iB.setTransform(eY, 0, 0, eY, eh, aLS), iB.globalAlpha = aLh(fontSize), iB.drawImage(a40, 0, 0), iB.globalAlpha = 1, iB.setTransform(1, 0, 0, 1, 0, 0)
			}(aLS, aLT, fontSize, eh, aB, gc, aDf[aB + eh * aD.f6], iB), gc -= 2)
		}(aLS, aLT, fontSize, aB, iB), (aLV = aKv * fontSize) < aKx || (iB.font = bC.r2.sr(1, aLV), aLT += Math.floor(.78 * fontSize), aLF ? aLZ(aB, aLV, aLS, aLT, iB) : aLY(iB, aB, aLV, aLS, aLT, aLU)))
	}

	function aLZ(aB, fontSize, fG, fI, iB) {
		var ___id = aB;
		var showName = aB < aD.kU || !__fx.settings.hideBotNames;
		if (showName) iB.fillText(ag.zb[aB], fG, fI), aB < aD.kU && 2 !== ag.a4W[aB] || (aB = fontSize / aKs[aB], iB.fillRect(fG - .5 * aB, fI + bC.r2.a09 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aLF && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iB.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iB.fillText(__fx.utils.getDensity(___id), fG, showName ? fI + fontSize : fI)
		);
	}

	function aLY(iB, aB, fontSize, aLS, aLT, aLU) {
		var a4f = ag.a4f[aB],
			aLe = bC.s1.a0P(ag.hB[aB] - a4f);

		function drawDensity() {
			!aLF && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iB.fillStyle = __fx.utils.textStyleBasedOnDensity(aB)), iB.fillText(__fx.utils.getDensity(aB), aLS, aLT + fontSize))
		}
		a4f ? (a4f = iB.fillStyle, iB.fillStyle = aLX(fontSize, 2 + aLU % 2), iB.fillText(aLe, aLS, aLT), iB.fillStyle = a4f) : aLU >> 1 & 1 ? (iB.lineWidth = .05 * fontSize, iB.strokeStyle = aLX(fontSize, aLU % 2), iB.strokeText(aLe, aLS, aLT)) : (
			1 < aLU && (iB.lineWidth = .12 * fontSize, iB.strokeStyle = aLX(fontSize, aLU), iB.strokeText(aLe, aLS, aLT)), iB.fillText(aLe, aLS, aLT)), drawDensity()
	}

	function aLb(aLS, aLT, fontSize, aLf, aLg, iB) {
		var a6v = .95 * fontSize / aL7,
			aLS = aLS - .5 * a6v * aL6 + .8 * aLf * fontSize,
			aLf = aLT - 1.76 * a6v * aL7 - (.35 - bC.r2.a09 + .7) * aLg * fontSize;
		iB.setTransform(a6v, 0, 0, a6v, aLS, aLf), iB.globalAlpha = aLh(fontSize), iB.drawImage(ab.get(4), 0, 0), iB.globalAlpha = 1, iB.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLk(aLS, aLT, fontSize, pl, aLf, iB) {
		var i5, yE, a6v;
		iB.globalAlpha = aLh(fontSize), aj.sI.a0H(pl) ? (i5 = aj.xh.zi, iB.setTransform(a6v = 1.1 * fontSize / i5, 0, 0, a6v, yE = aLS - .5 * a6v * i5 - .8 * aLf * fontSize, a6v = aLT - 1.55 * a6v * i5), iB.drawImage(aj.xh.zh[pl - 1024 + aj.sI.zt],
			0, 0), iB.setTransform(1, 0, 0, 1, 0, 0)) : (yE = aLS - .8 * aLf * fontSize, a6v = aLT - (.35 - bC.r2.a09 + 1) * fontSize, iB.fillText(aj.sI.a08(pl), yE, a6v)), iB.globalAlpha = 1
	}

	function aLX(fontSize, aLU) {
		return aKu <= fontSize && fontSize < aKt ? bi.aLm[aLU] + aLh(fontSize).toFixed(3) + ")" : bi.aLn[aLU]
	}

	function aLh(fontSize) {
		return aKu <= fontSize && fontSize < aKt ? 1 - (fontSize - aKu) / (aKt - aKu) : 1
	}

	function aLw(iA, i) {
		return 1 + Math.floor(aKw * iA * i)
	}

	function aLt(aB) {
		for (var left = aKn[aB], fS = aKn[aB] - ag.j2[aB] - 1; 0 <= fS; fS--)
			if (!aLy(aB, --left, aKo[aB], aKq[aB])) {
				left++;
				break
			} var right = aKn[aB];
		for (fS = ag.j3[aB] - aKn[aB] - aKp[aB]; 0 <= fS; fS--)
			if (!aLy(aB, ++right + aKp[aB] - 1, aKo[aB], aKq[aB])) {
				right--;
				break
			} var fG = Math.floor((left + right) / 2),
			top = aKo[aB];
		for (fS = aKo[aB] - ag.j4[aB] - 1; 0 <= fS; fS--)
			if (!aLz(aB, fG, --top, aKp[aB])) {
				top++;
				break
			} var bottom = aKo[aB];
		for (fS = ag.j5[aB] - aKo[aB] - aKq[aB]; 0 <= fS; fS--)
			if (!aLz(aB, fG, ++bottom + aKq[aB] - 1, aKp[aB])) {
				bottom--;
				break
			} var fI = Math.floor((top + bottom) / 2);
		aLq(aB, fG, fI, aKp[aB], aKq[aB]) && (aKn[aB] = fG, aKo[aB] = fI)
	}

	function aLq(player, fG, fI, i, j) {
		fC = Math.floor(.2 * i);
		for (var fC, eh = fG + i - 1; fG <= eh; eh--)
			if (!aLy(player, eh, fI, j)) return;
		for (eh = fI + j - 1 - (fC = (fC = Math.floor(.25 * j)) < 1 ? 1 : fC); fI + fC <= eh; eh--)
			if (!aLz(player, fG, eh, i)) return;
		return 1
	}

	function aLy(player, fG, fI, j) {
		return ac.z6(player, 4 * (fI * bU.fK + fG)) && ac.z6(player, 4 * ((fI + j - 1) * bU.fK + fG))
	}

	function aLz(player, fG, fI, i) {
		return ac.z6(player, 4 * (fI * bU.fK + fG)) && ac.z6(player, 4 * (fI * bU.fK + fG + i - 1))
	}
	this.dh = function() {
		if (aLF = bl.eU.data[7].value || 8 === aD.km, aL2 = !1, aKy = .88, aKv = .5, aKw = 1.8, aKx = 12 - 3 * bl.eU.data[9].value, aKm = aKl = 0, aKn = new Uint16Array(aD.f6), aKo = new Uint16Array(aD.f6), aKp = new Uint16Array(aD.f6), aKq =
			new Uint16Array(aD.f6), aKr = new Float32Array(aD.f6), aKs = new Float32Array(aD.f6), aL5 = new Uint16Array(2 * aD.f6), aDf = new Uint8Array(5 * aD.f6), aLD = new Uint8Array(aD.f6), aLE = new Uint8Array(aD.f6), aL3 = aL3 || document
			.createElement("canvas"), r5(), aL0 = aKz = 0, aL1 = 1, aLF) {
			var aB, aLL;
			for (aLG(), vg.font = bC.r2.sr(1, 100), aLL = 100 / Math.floor(vg.measureText("900 000").width), aB = aD.f6 - 1; 0 <= aB; aB--) aKr[aB] = Math.min(aLL, 2 * aKs[aB]);
			aLC = aLL, aLB[0] = 100 / (aLL * Math.floor(vg.measureText("5 000 000").width)), aLB[1] = 100 / (aLL * Math.floor(vg.measureText("50 000 000").width)), aLB[2] = 100 / (aLL * Math.floor(vg.measureText("500 000 000").width)), aLB[3] =
				100 / (aLL * Math.floor(vg.measureText("1 000 000 000").width))
		} else aLG();
		! function() {
			var aB;
			for (aB = aD.f6 - 1; 0 <= aB; aB--) ag.gx[aB] < 12 ? (aKn[aB] = ag.j2[aB] + 1, aKo[aB] = ag.j4[aB] + 1, aKp[aB] = 1, aKq[aB] = 1) : (aKn[aB] = ag.j2[aB], aKo[aB] = ag.j4[aB] + 1, aKp[aB] = 4, aKq[aB] = 2);
			if (aD.hX)
				for (aB = 0; aB < aD.kU; aB++) aKp[aB] = 0;
			aL6 = ab.get(4).width, aL7 = ab.get(4).height
		}()
	}, this.aKX = function(gh, a69) {
		a69 > 18 * ag.gx[gh] ? (aLE[gh] = 6, ac.a9Y[gh] = 2 + ac.a9Y[gh] % 2) : (aLD[gh] = 4, (ac.a9Y[gh] < 2 || 3 < ac.a9Y[gh]) && (ac.a9Y[gh] = 6 + ac.a9Y[gh] % 2))
	}, this.py = function(gh, a69) {
		a69 > 6 * ag.gx[gh] ? (aLE[gh] = 6, ac.a9Y[gh] = 4 + ac.a9Y[gh] % 2) : (aLD[gh] = 4, (ac.a9Y[gh] < 4 || 5 < ac.a9Y[gh]) && (ac.a9Y[gh] = 8 + ac.a9Y[gh] % 2))
	}, this.resize = function() {
		r5(), aLK(aL4)
	}, this.a5V = function() {
		for (var aB = 0; aB < aD.kU; aB++) ag.j3[aB] - ag.j2[aB] != 3 || ag.j5[aB] - ag.j4[aB] != 3 ? (aKn[aB] = ag.j2[aB] + (ag.j3[aB] !== ag.j2[aB] ? 1 : 0), aKo[aB] = ag.j4[aB], aKp[aB] = 1, aKq[aB] = 1) : (aKn[aB] = ag.j2[aB], aKo[aB] = ag
			.j4[aB] + 1, aKp[aB] = 4, aKq[aB] = 2)
	}, this.qb = function(player, eG, aLN) {
		! function(player, eG, aLN) {
			player += eG * aD.f6;
			0 === eG ? aL5[player] === aLN && 0 < aDf[player] ? aDf[player] = 0 : (aL5[player] = aLN, aDf[player] = aj.sI.a0G(aLN) ? 255 : 64) : 1 === eG ? (aDf[player] = 64, aL5[player] = aLN) : aDf[player] = aLN
		}(player, eG, aLN), 2 === aD.a18 && this.mq(!0)
	}, this.vf = function() {
		aL2 && (1 !== aL1 ? (vg.imageSmoothingEnabled = !0, vg.setTransform(aL1, 0, 0, aL1, 0, 0), vg.drawImage(aL3, -aKz / aL1, -aL0 / aL1), vg.setTransform(1, 0, 0, 1, 0, 0), vg.imageSmoothingEnabled = !1) : vg.drawImage(aL3, -aKz, -aL0))
	}, this.aAL = function(iT, iW) {
		aKz += iT, aL0 += iW
	}, this.a2g = function(iT, iW) {
		af.aAL(iT, iW)
	}, this.zoom = function(a3Z, lj, lk) {
		aL1 *= a3Z, aKz = (aKz + lj) * a3Z - lj, aL0 = (aL0 + lk) * a3Z - lk
	}, this.aIu = function(player) {
		var j2 = ag.j2[player],
			j3 = ag.j3[player],
			j4 = ag.j4[player],
			j5 = ag.j5[player],
			ig = bO.hP(0),
			ih = bO.hR(0),
			ii = bO.hP(h.i),
			ij = bO.hR(h.j);
		j2 < ii && ig < j3 && j4 < ij && ih < j5 && (aKp[player] = 0, aLA = !0)
	}, this.mq = function(bw) {
		return !(!aLA && !bw && bh.eX < aL9 + (1 === aL1 && 0 === aKz && 0 === aL0 && (aD.a5y() || aD.hX || 2 === aD.a18) ? 1e3 : aBd) || (aLK(aL4), 0))
	}, this.aLQ = function(aB) {
		return aLM(aB) * aKr[aB]
	}, this.aLR = function(player) {
		return aKr[player]
	}, this.ec = function() {
		bh.kR() % 10 == 9 && (aLA = aLA || aD.a60() && !aD.a5y()), !aD.a5y() && 4 <= ++aKm && function() {
			var aB, fS, fT;
			for (aKm = 0, fT = 4; 1 <= fT; fT--)
				for (fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS] + fT * aD.f6, 0 < aDf[aB] && aDf[aB] < 255 && aDf[aB]--;
			if (2 !== aD.a18)
				for (fS = al.l0 - 1; 0 <= fS; fS--) aB = al.l5[fS], 0 < aDf[aB] && aDf[aB] < 255 && aDf[aB]--
		}();
		var aB, fS, f9 = Math.floor(.1 * al.l0);
		for (f9 = (f9 = f9 < 8 ? 8 : f9) > al.l0 ? al.l0 : f9, aB = aKl + f9 - 1; aKl <= aB; aB--) fS = aB % al.l0, ! function(aB) {
			var iA = aLM(aB) * aKr[aB];
			0 < aKp[aB] && aLq(aB, aKn[aB], aKo[aB], aKp[aB], aKq[aB]) ? ! function(aB) {
				for (var fG, fI, i, j, en = !1, fT = 0; fT < 8; fT++) {
					if (i = aKp[aB] + 2, j = aKq[aB] + 2, i > ag.j3[aB] - ag.j2[aB] + 1 || j > ag.j5[aB] - ag.j4[aB] + 1) return en;
					if (fG = aKn[aB] - 1, fI = aKo[aB] - 1, !aLq(aB, fG, fI, i, j)) return en;
					aKn[aB] = fG, aKo[aB] = fI, aKp[aB] = i, aKq[aB] = j, en = !0
				}
				return en
			}(aB) && function(aB, iA) {
				for (var fG, fI, i, j, en = !1, aDo = aKp[aB], nh = 1 + Math.floor(.02 * aDo), fT = 1; fT < 5; fT++) {
					if ((i = aDo + fT * nh) > ag.j3[aB] - ag.j2[aB] + 1) return en;
					if ((j = aLw(iA, i)) > ag.j5[aB] - ag.j4[aB] + 1) return en;
					fG = ag.j2[aB] + Math.floor(Math.random() * (ag.j3[aB] - ag.j2[aB] + 2 - i)), fI = ag.j4[aB] + Math.floor(Math.random() * (ag.j5[aB] - ag.j4[aB] + 2 - j)), aLq(aB, fG, fI, i, j) && (aKn[aB] = fG, aKo[aB] = fI, aKp[
						aB] = i, aKq[aB] = j, en = !0)
				}
				return en
			}(aB, iA) && aLt(aB) : ! function(aB, iA) {
				var j, fG = aKn[aB] + 1,
					fI = aKo[aB] + 1,
					i = aKp[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKp[aB] = 0;
						break
					}
					if (j = aLw(iA, i), aLq(aB, fG, fI, i, j)) return aKn[aB] = fG, aKo[aB] = fI, aKp[aB] = i, aKq[aB] = j, 1;
					fG++, fI++, i -= 2
				}
				return
			}(aB, iA) ? function(aB, iA) {
				var fG, fI, i, j, fT, nn, jk = ag.j3[aB] - ag.j2[aB] + 1,
					aLx = Math.floor(.02 * jk);
				for (nn = -6 * (aLx = aLx < 1 ? 1 : aLx), fT = jk; nn <= fT; fT -= aLx)
					if (j = aLw(iA, i = 0 < fT ? fT : 1), fG = ag.j2[aB] + Math.floor(Math.random() * (ag.j3[aB] - ag.j2[aB] + 2 - i)), fI = ag.j4[aB] + Math.floor(Math.random() * (ag.j5[aB] - ag.j4[aB] + 2 - j)), aLq(aB, fG, fI, i, j))
						return aKn[aB] = fG, aKo[aB] = fI, aKp[aB] = i, aKq[aB] = j
			}(aB, iA) : aLt(aB)
		}(al.l5[fS]);
		aKl = (aKl += f9) % al.l0
	}, this.mk = function() {
		var aB, gh, a0E, a0F;
		if (bh.kR() % 4 == 1)
			for (aB = al.l0 - 1; 0 <= aB; aB--) gh = al.l5[aB], ac.a9Y[gh] < 2 || ((a0E = Math.max(aLD[gh] - 1, 0)) === (a0F = Math.max(aLE[gh] - 1, 0)) ? 0 === a0E && (ac.a9Y[gh] %= 2) : 0 === a0F && ac.a9Y[gh] < 6 && (ac.a9Y[gh] += 4), aLD[
				gh] = a0E, aLE[gh] = a0F)
	}, this.a7d = function(player) {
		var aB = player + 2 * aD.f6,
			eY = aDf[aB];
		return 0 < eY && (aN.a1G(50, player), aDf[aB] = 0, 255 === eY)
	}, this.a6f = function(player) {
		return 255 === aDf[player + 2 * aD.f6]
	}
}

function cf() {
	var aM0, aM1, aM2;
	this.dh = function() {
		aM0 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aM1 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aM2 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7u = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEg = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aM0.length - 1; 0 <= aB; aB--)
			for (var fS = a7u.length - 1; 0 <= fS; fS--) aM0[aB] = aM0[aB].replace(a7u[fS], aEg[fS]);
		if (__fx.settings.realisticNames) aM0 = realisticNames;
	}, this.a5l = function() {
		var f9 = aD.kU,
			zb = ag.zb,
			a1o = ag.a1o,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f9)
			for (var aB = 0; aB < f9; aB++) zb[aB] = a1o[aB] = "Player " + ay.jl(1e3);
		else
			for (aB = 0; aB < f9; aB++) zb[aB] = a1o[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.km) {
			for (var eF = ay.random(), aM8 = aM2, aM9 = aM1, hs = aE.hs, f9 = aM8.length, lP = aD.data.teamPlayerCount[7], zb = ag.zb, a1o = ag.a1o, aB = lP - 1; aB >= aD.kU; aB--) zb[aB] = a1o[aB] = aM8[(aB + eF) % f9];
			for (f9 = aM9.length - 1, aB = lP; aB < aD.f6; aB++) zb[aB] = a1o[aB] = aM9[hs[aB] ? f9 : aB % f9]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f9 = aD.f6, zb = ag.zb, a1o = ag.a1o, playerNamesData = aD.data.playerNamesData, aB = aD.kU; aB < f9; aB++) zb[aB] = a1o[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var zb = ag.zb, a1o = ag.a1o, aB = aD.kU; aB < aD.f6; aB++) zb[aB] = a1o[aB] = "Bot " + ay.jl(1e3)
		} : function() {
			for (var aMA = aM0, f9 = aMA.length, eF = ay.random(), zb = ag.zb, a1o = ag.a1o, aB = aD.kU; aB < aD.f6; aB++) zb[aB] = a1o[aB] = aMA[(aB + eF) % f9]
		})()
	}
}

function cy() {
	this.aMB = [], this.aMC = [], this.dh = function() {
		this.aMB = [], this.aMC = []
	}, this.ec = function() {
		0 <= this.aMB.length && this.aMD(this.aMB), 0 <= this.aMC.length && this.aMD(this.aMC)
	}, this.aMD = function(g) {
		for (var fT = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eX--, g[aB].eX <= 0) {
				fT = aB;
				break
			} for (aB = fT; 0 <= aB; aB--) g.shift()
	}, this.a6Y = function(id, a0w, aME) {
		return this.fU(this.aMB, id, a0w, aME)
	}, this.aMF = function(id, a0w, aME) {
		return this.fU(this.aMC, id, a0w, aME)
	}, this.fU = function(g, id, a0w, aME) {
		return ! function(g, id, a0w) {
			var aB, i1;
			for (aB = a0w.length - 1; 0 <= aB; aB--)
				for (i1 = g.length - 1; 0 <= i1; i1--)
					if (g[i1].player === a0w[aB] && id === g[i1].id) return 1;
			return
		}(g, id, a0w) && (aME && function(g, id, a0w) {
			var aB;
			for (aB = a0w.length - 1; 0 <= aB; aB--) g.push({
				player: a0w[aB],
				id: id,
				eX: 384
			})
		}(g, id, a0w), !0)
	}
}

function ce() {
	this.a1o = new Array(aD.f6), this.zb = new Array(aD.f6), this.a4W = new Uint8Array(aD.f6), this.n4 = new Uint8Array(aD.f6), this.j2 = new Uint16Array(aD.f6), this.j4 = new Uint16Array(aD.f6), this.j3 = new Uint16Array(aD.f6), this.j5 =
		new Uint16Array(aD.f6), this.gx = new Uint32Array(aD.f6), this.yg = new Uint32Array(aD.f6), this.hB = new Uint32Array(aD.f6), this.gb = null, this.gp = null, this.gq = null, this.fY = null, this.qR = new Uint16Array(aD.f6), this.jX =
		new Uint16Array(aD.f6), this.jY = new Uint16Array(aD.f6), this.a1j = new Uint16Array(aD.f6), this.a1h = new Uint8Array(aD.f6), this.a4f = new Uint16Array(aD.f6), this.dh = function() {
			this.a1o.fill(""), this.zb.fill(""), this.a4W.fill(0), this.n4.fill(0), this.j2.fill(0), this.j4.fill(0), this.j3.fill(0), this.j5.fill(0), this.gx.fill(0), this.yg.fill(0), this.hB.fill(0), this.gb = new Array(aD.f6), this.gp =
				new Array(aD.f6), this.gq = new Array(aD.f6), this.fY = new Array(aD.f6), this.qR.fill(0), this.jX.fill(0), this.jY.fill(0), this.a1j.fill(0), this.a1h.fill(0), this.a4f.fill(0)
		}
}

function cw() {
	this.aEB = function(player) {
		aG.n3(player), aD.a1A++, ag.a4W[player] = 2, ag.a1j[player] = bk.a1y.aJ3(), player === aD.et && (aX.show(!1, !1), aW.aCK(), bT.a0t.a1f()), af.a7d(player)
	}
}

function cX() {
	this.l5 = null, this.l0 = 0, this.a5p = function() {
		for (this.l0 = 0, aB = aD.f6 - 1; 0 <= aB; aB--) 0 !== ag.n4[aB] && this.l0++;
		this.l5 = new Uint16Array(this.l0);
		for (var f9 = 0, aB = 0; aB < aD.f6; aB++) 0 !== ag.n4[aB] && (this.l5[f9++] = aB)
	}, this.mj = function() {
		for (var gx = ag.gx, yg = ag.yg, a1h = ag.a1h, l5 = al.l5, aB = al.l0 - 1; 0 <= aB; aB--) {
			var gh = l5[aB],
				eY = gx[gh],
				lP = yg[gh];
			eY <= bN.fa(lP, 4) ? ak.dq(gh) : lP <= eY ? 250 <= (yg[gh] = eY) && (a1h[gh] = 1) : yg[gh] = lP - Math.max(1, bN.fa(lP - eY, 1e3))
		}
		this.aMJ()
	}, this.aMJ = function() {
		for (var n4 = ag.n4, lO = this.l5, aD2 = this.l0, aB = aD2 - 1; 0 <= aB; aB--) 0 === n4[lO[aB]] && (lO[aB] = lO[--aD2]);
		this.l0 = aD2
	}
}

function cY() {
	var aMK = new Uint16Array(aD.f6),
		aML = 0;

	function aMP(a7j, aMN) {
		var eh = bh.kR();
		return 3213 <= eh ? 4 + bN.fa(100 * aMN, ae.kA(a7j)) : (a7j = 1 + bN.fa(aD.kE, 300), eh < 357 ? 2 + bN.fa(100 * aMN, a7j) : eh < 714 ? 2 + bN.fa(100 * aMN, 4 * a7j) : eh < 1071 ? 2 + bN.fa(100 * aMN, 10 * a7j) : eh < 2142 ? 2 + bN.fa(100 *
			aMN, 30 * a7j) : 2 + bN.fa(100 * aMN, 100 * a7j))
	}

	function aMO(a7j) {
		return aD.ko || 7 <= aD.km || 4284 <= bh.kR() || bC.gV.jr(a7j)
	}
	this.dh = function() {
		aMK.fill(0), aML = 15
	}, this.hn = function(pa) {
		var player = aD.et;
		return !!bC.gV.qT(player, pa) && !(!bC.gV.pt(player, bC.gV.ik(player, aR.hd()), pa) || (player = pa, pa = bQ.fg[0], !aMO(player) && aMK[player] + aMP(player, pa) > aML))
	}, this.eg = function(a7j, aMN) {
		if (!aMO(a7j)) {
			aMN = aMP(a7j, aMN);
			if (aMK[a7j] + aMN > aML) return !1;
			aMK[a7j] += aMN
		}
		return !0
	}, this.ec = function() {
		bh.kR() % 100 == 99 && (bh.kR() < 1071 ? aML += 4 : bh.kR() < 2142 ? aML += 6 : bh.kR() < 3213 ? aML += 8 : aML += 10)
	}
}

function cg() {
	var aMQ;
	this.kv = null, this.ku = 0, this.dh = function() {
		aMQ = [], 9 === aD.km && this.aMR()
	}, this.aMR = function() {
		this.kv = [0, 0, 0, 0, 0, 0];
		for (var aMS = [256, 227, 170, 148, 100, this.ku = 0, 0, 0], aMT = [0, 8, 24, 30, 46, 70, 256, 333], aMU = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kU, aB = 1; aB < aMS.length; aB++)
			if (j <= aMT[aB]) {
				this.ku = aMS[aB - 1] - bN.fa((j - aMT[aB - 1]) * (aMS[aB - 1] - aMS[aB]), aMT[aB] - aMT[aB - 1]), this.kv[5] = aMU[aB - 1] - bN.fa((j - aMT[aB - 1]) * (aMU[aB - 1] - aMU[aB]), aMT[aB] - aMT[aB - 1]), this.kv[0] = aD.f6 - j - this
					.ku - this.kv[5];
				break
			} aD.kq = aD.f6 - aD.kU, aD.data.numberTeams = (0 < aD.kU) + (0 < aD.kq), aD.data.playerCount = aD.yC = aD.kU + aD.kq, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kU + this.ku, aD.kq - this.ku]), aD.a5e.a5j()
	}, this.aJA = function(player) {
		aMQ.push({
			player: player,
			gc: 14 + ay.jl(20)
		})
	}, this.ec = function() {
		if (9 === aD.km)
			for (var aB = aMQ.length - 1; 0 <= aB; aB--) --aMQ[aB].gc <= 0 && (af.qb(aMQ[aB].player, 0, aj.sI.zw + aj.sI.a0A), aMQ.splice(aB))
	}
}

function dF() {
	function aMk() {
		return {
			fK: bU.fK,
			fL: bU.fL,
			xe: bU.xe,
			xa: bU.xa,
			xb: bU.xb,
			xf: bU.xf,
			ep: bU.ep,
			mapSeed: bU.mapSeed,
			xc: bU.xc
		}
	}

	function aMc(aB) {
		return 1 !== aB && bU.aEq(aB) && aB !== bU.aMm()
	}
	this.aMW = 25, this.aMX = 13, this.aJM = 4096, this.fK = 0, this.fL = 0, this.xe = null, this.xa = null, this.xb = null, this.xf = null, this.ep = 0, this.mapSeed = 0, this.xc = !1, this.xd = new aMY, this.xU = new aMZ, this.a81 = new aMa, this
		.dh = function() {
			this.xU.dh()
		}, this.a7 = function(map, aMb) {
			((map %= this.aMW) !== this.ep || aMc(this.ep) && aMb !== this.mapSeed) && (this.xc = !1, this.xd.aMd(), ay.a5k(map), this.ep = map, this.mapSeed = aMb, aMc(map) && (bU.xU.xV[map].aMe = aMb), this.aEq(this.ep) ? (map = bU.xU.xV[this.ep],
				this.fK = map.i, this.fL = map.j, ay.a5k(map.aMe), aq.a7([this.fK, this.fL, map.n9, map.n6]), aMg(), ap.aMh(), aq.aMi()) : aMf())
		}, this.aMj = function(map, aMb) {
			var fs = aMk(),
				map = (this.a7(map, aMb), this.xd.aMd(), aMk());
			return aMb = fs, bU.fK = aMb.fK, bU.fL = aMb.fL, bU.xe = aMb.xe, bU.xa = aMb.xa, bU.xb = aMb.xb, bU.xf = aMb.xf, bU.ep = aMb.ep, bU.mapSeed = aMb.mapSeed, bU.xc = aMb.xc, map
		}, this.a65 = function(canvas) {
			canvas && this.xe !== canvas && (this.fK = canvas.width, this.fL = canvas.height, this.xe = canvas, this.xa = this.xe.getContext("2d", {
				alpha: !1
			}), this.i8 = this.xa.getImageData(0, 0, this.fK, this.fL), this.xf = this.i8.data, this.ep = this.aMm(), this.mapSeed = 0, bU.xU.xV[this.ep].name = aD.data.mapName)
		}, this.eo = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aMm()
		}, this.aMn = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aMo = function(aB) {
			return 1 === aB
		}, this.aMm = function() {
			return this.aMW
		}, this.aEq = function(aB) {
			return void 0 === this.xU.xV[aB].aMp
		}, this.a64 = function(qu) {
			return 0 === qu.mapType ? qu.mapProceduralIndex < 10 ? qu.mapProceduralIndex : 10 + qu.mapProceduralIndex : 1 === qu.mapType ? 10 <= qu.mapRealisticIndex ? 22 + qu.mapRealisticIndex - 10 : qu.mapRealisticIndex + 10 : void 0
		}, this.aEr = function(qu, aMq) {
			0 === qu.mapType ? qu.mapProceduralIndex = aMq < 10 ? aMq : aMq - 10 : 1 === qu.mapType && (qu.mapRealisticIndex = aMq - (22 <= aMq ? 12 : 10))
		}
}

function aMY() {
	function aMz() {
		bU.xd.ec()
	}

	function aN5(gh, aN4) {
		0 < aN4 && (bU.xf[gh] += aN4, bU.xf[gh + 1] += aN4, bU.xf[gh + 2] += aN4)
	}

	function iN(gh) {
		return bU.xf[gh + 2] > bU.xf[gh] && bU.xf[gh + 2] > bU.xf[gh + 1]
	}
	this.aAX = -1, this.a2B = 0, this.aMr = 0, this.aMs = 8, this.aMt = 32, this.aMu = 8, this.aMv = 32, this.aMw = [0, 0], this.a9Y = [0, 0, 0, 0], this.iw = null, this.aMx = !0, this.aMy = !1, this.aMd = function() {
		-1 !== this.aAX && clearTimeout(this.aAX), this.aAX = -1, this.iw = null, aq.aMi()
	}, this.dh = function() {
		7 === aa.a2K() || this.aMy || (this.aMx = !0, this.a2B = 0, this.aMr = 1, this.aMw = [bU.xU.xV[bU.ep].xw[0], bU.xU.xV[bU.ep].xx[0]], this.a9Y = [bU.xU.xV[bU.ep].aMp[3], bU.xU.xV[bU.ep].aMp[4], bU.xU.xV[bU.ep].aMp[5], bU.xU.xV[bU.ep].aMp[
			6]], this.aMs = bU.xU.xV[bU.ep].aMp[7], this.aMt = bU.xU.xV[bU.ep].aMp[8], this.aMu = bU.xU.xV[bU.ep].aMp[9], this.aMv = bU.xU.xV[bU.ep].aMp[10], this.aMx ? this.aAX = setTimeout(aMz, 16) : this.ec())
	}, this.ec = function() {
		if (8 === aa.a2K() && aH.nN()) this.aAX = setTimeout(aMz, 16);
		else {
			if (0 === this.a2B) {
				var aMe = ay.aN0();
				if (ay.a5k(bU.xU.xV[bU.ep].aMp[2]), aq.a7([bU.fK, bU.fL, bU.xU.xV[bU.ep].aMp[0], bU.xU.xV[bU.ep].aMp[1]]), ay.a5k(aMe), this.iw = aq.aN1(), this.a2B++, this.aMx) return void(this.aAX = setTimeout(aMz, 16))
			}
			for (var gh, ev, aMe = this.aMx ? 10 : 1e6, aMe = bU.fL - this.aMr - 1 < aMe ? bU.fL - this.aMr - 1 : aMe, yt = this.aMr + aMe, fI = this.aMr; fI < yt; fI++)
				for (var fG = 1; fG < bU.fK - 1; fG++) iN(gh = 4 * (ev = fG + fI * bU.fK)) ? this.aN2(gh, ev, 1) : (this.aN2(gh, ev, 0), function(fG, fI, gh) {
					return 1 < fG && iN(gh - 4) || fG < bU.fK - 2 && iN(gh + 4) || 1 < fI && iN(gh - 4 * bU.fK) || fI < bU.fL - 2 && iN(gh + 4 * bU.fK)
				}(fG, fI, gh) && this.aN3(fG, fI));
			this.aMr = yt, this.aMr >= bU.fL - 1 ? (bU.xa.putImageData(bU.xb, 0, 0, 1, 1, bU.fK - 2, bU.fL - 2), bh.dp = !0, this.aMd()) : this.aMx && (this.aAX = setTimeout(aMz, 16))
		}
	}, this.aN2 = function(gh, ev, eG) {
		aN5(gh, Math.floor(this.aMw[eG] + this.a9Y[eG] * this.iw[ev] / 1e4) - bU.xf[gh])
	}, this.aN6 = function(gh, eF, aN7, eG, a9Y) {
		aN5(gh, Math.floor(this.aMw[eG] + (1 - eF / aN7) * a9Y) - bU.xf[gh])
	}, this.aN3 = function(lj, lk) {
		for (var gh, eF, aN7, aAN = lj - this.aMt, aN8 = lk - this.aMt, yu = lj + this.aMt, yt = lk + this.aMt, aAN = aAN < 1 ? 1 : aAN, yu = yu > bU.fK - 2 ? bU.fK - 2 : yu, yt = yt > bU.fL - 2 ? bU.fL - 2 : yt, fI = aN8 < 1 ? 1 : aN8; fI <=
			yt; fI++)
			for (var fG = aAN; fG <= yu; fG++) iN(gh = 4 * (fG + fI * bU.fK)) ? (aN7 = this.aMs + (this.aMt - this.aMs) * this.iw[fG + bU.fK * fI] / 1e4, Math.abs(lj - fG) > aN7 || Math.abs(lk - fI) > aN7 || aN7 <= (eF = Math.sqrt((lj - fG) * (
				lj - fG) + (lk - fI) * (lk - fI))) || this.aN6(gh, eF, aN7, 1, this.a9Y[3])) : (aN7 = this.aMu + (this.aMv - this.aMu) * this.iw[fG + bU.fK * fI] / 1e4, Math.abs(lj - fG) > aN7 || Math.abs(lk - fI) > aN7 || aN7 <= (eF = Math
				.sqrt((lj - fG) * (lj - fG) + (lk - fI) * (lk - fI))) || this.aN6(gh, eF, aN7, 0, this.a9Y[2]))
	}
}

function aMg() {
	var t1 = aN9(bU.ep);
	t1 && aNA(t1[0], t1[1], t1[2], t1[3], t1[4])
}

function aN9(ep) {
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

function aNA(aNB, aNC, aND, aNE, aNF) {
	for (var fG, fI, aJi, aJj, a3Z, aNI, iS = aNB.length - 1, aNG = bU.fK + bU.fL, f9 = (aNG *= aNG, aND.length), aNH = Array(f9), aB = f9 - 1; 0 <= aB; aB--) aNH[aB] = aND[aB] * aND[aB];
	var aNJ = new Array(f9),
		aDc = new Array(f9),
		aNK = new Array(f9),
		fb = aq.aN1();
	if (void 0 === aNF)
		for (aNF = new Array(f9), aB = f9 - 1; 0 <= aB; aB--) aNF[aB] = 0;
	for (aB = 1; aB < f9; aB++) aNJ[aB] = aNH[aB] - aNH[aB - 1], aDc[aB] = aNE[aB] - aNE[aB - 1], aNK[aB] = aNF[aB] - aNF[aB - 1];
	for (fG = bU.fK - 1; 0 <= fG; fG--)
		for (fI = bU.fL - 1; 0 <= fI; fI--) {
			for (aJi = aNG, aB = iS; 0 <= aB; aB--) aJi = (aJj = (fG - aNB[aB]) * (fG - aNB[aB]) + (fI - aNC[aB]) * (fI - aNC[aB])) < aJi ? aJj : aJi;
			for (a3Z = aNE[f9 - 1], aNI = aNF[f9 - 1], aB = 1; aB < f9; aB++)
				if (aJi < aNH[aB]) {
					a3Z = aNE[aB - 1] + aIU((aJi - aNH[aB - 1]) * aDc[aB], aNJ[aB]), aNI = aNF[aB - 1] + aIU((aJi - aNH[aB - 1]) * aNK[aB], aNJ[aB]);
					break
				} aNL(bU.fK * fI + fG, a3Z, aNI, fb)
		}
}

function aNL(eG, a3Z, aNI, fb) {
	a3Z < 500 ? fb[eG] = bN.fa(fb[eG] * a3Z * 2, 1e3) : 500 < a3Z && (fb[eG] += bN.fa(2 * (1e4 - fb[eG]) * (a3Z - 500), 1e3)), fb[eG] += bN.fa(aNI * (10 * a3Z - fb[eG]), 1e3)
}

function ci() {
	var aNM;

	function aNW(a40, iA, fG, fI, globalAlpha) {
		bU.xa.save(), bU.xa.globalAlpha = globalAlpha, bU.xa.imageSmoothingEnabled = !1, bU.xa.scale(iA, iA), bU.xa.drawImage(a40, Math.floor(fG * (bU.fK / iA - a40.width)), Math.floor(fI * (bU.fL / iA - a40.height))), bU.xa.restore()
	}
	this.a7y = 0, this.a7z = 0, this.a80 = 0, this.a81 = 0, this.dh = function() {
		(aNM = new Array(bU.aMW))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eF: [220, 250, 255, 220],
			ti: [190, 220, 0, 0],
			fT: [170, 200, 0, 0]
		}, aNM[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eF: [25, 0, 100, 0, 25],
			ti: [25, 0, 0, 0, 25],
			fT: [25, 0, 0, 0, 25]
		}, aNM[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eF: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			ti: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fT: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aNM[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eF: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			ti: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fT: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aNM[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eF: [10, 10, 20, 10, 10, 170, 212],
			ti: [20, 20, 60, 100, 100, 110, 170],
			fT: [70, 70, 160, 30, 30, 60, 120]
		}, aNM[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eF: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			ti: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fT: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aNM[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eF: [10, 10, 60, 255, 255, 200, 200],
			ti: [10, 10, 60, 255, 255, 200, 200],
			fT: [80, 80, 255, 255, 255, 200, 200]
		}, aNM[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			ti: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fT: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aNM[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eF: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			ti: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fT: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aNM[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			ti: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fT: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aNM[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eF: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			ti: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fT: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aNM[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eF: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			ti: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fT: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMh = function() {
		var aNV, aB, fS, fs, i8 = function() {
				var i8;
				return bU.xe = document.createElement("canvas"), bU.xe.width = bU.fK, bU.xe.height = bU.fL, bU.xa = bU.xe.getContext("2d", {
					alpha: !1
				}), i8 = bU.xa.getImageData(0, 0, bU.fK, bU.fL), bU.xf = i8.data, i8
			}(),
			i = aNM[bU.ep].i,
			eF = aNM[bU.ep].eF,
			ti = aNM[bU.ep].ti,
			fT = aNM[bU.ep].fT,
			fb = aq.aN1(),
			f9 = i.length - 2,
			aNQ = new Array(1 + f9),
			aNR = new Array(1 + f9),
			aNS = new Array(1 + f9),
			aNT = new Array(1 + f9);
		for (fS = f9; 0 <= fS; fS--) aNQ[fS] = i[fS + 1] - i[fS], aNR[fS] = eF[fS + 1] - eF[fS], aNS[fS] = ti[fS + 1] - ti[fS], aNT[fS] = fT[fS + 1] - fT[fS];
		for (aB = bU.fK * bU.fL - 1; 0 <= aB; aB--)
			for (fS = f9; 0 <= fS; fS--)
				if (fb[aB] >= i[fS]) {
					fs = fb[aB] - i[fS], bU.xf[4 * aB] = eF[fS] + aIU(aNR[fS] * fs, aNQ[fS]), bU.xf[4 * aB + 1] = ti[fS] + aIU(aNS[fS] * fs, aNQ[fS]), bU.xf[4 * aB + 2] = fT[fS] + aIU(aNT[fS] * fs, aNQ[fS]), bU.xf[4 * aB + 3] = 255;
					break
				} bU.xa.putImageData(i8, 0, 0), bU.aMo(bU.ep) && ab.tm() && bU.aMo(bU.ep) && (i8 = ab.aHe("arena"), aNV = ab.aHe("territorial.io"), aNW(i8, 5, .5, .5, .1), aNW(aNV, 2, .5, .45, .1)), bU.xc = !0, bh.dp = !0
	}, this.a5n = function() {
		for (var gh, fG, fI, aNX, hz, fu, a7z = 0, i = bU.fK, j = bU.fL, fs = i * j * 4, aNY = aDB, aNZ = bU.xf, aB = i - 1; 0 <= aB; aB--) aNY[(gh = aB << 2) + 2] = aNY[fs - gh - 2] = 3;
		for (fs = 4 * i, aB = j - 1; 0 <= aB; aB--) aNY[(gh = aB * fs) + 2] = aNY[gh + fs - 2] = 3;
		for (aNX = i - 1, hz = j - 1, fI = 1; fI < hz; fI++)
			for (fs = fI * i, fG = 1; fG < aNX; fG++) fu = 1 - (aNZ[(gh = fs + fG << 2) + 2] > aNZ[gh + 1] && aNZ[gh + 2] > aNZ[gh]), aNY[gh + 2] = 6 - 5 * fu, a7z += fu;
		this.a7y = (i - 2) * (j - 2), this.a81 = 0, bU.eo(bU.ep) && (bU.a81.aNa(), bU.a81.aNb(4, 5)), this.a7z = aD.kE = a7z - this.a81, this.a80 = this.a7y - this.a7z - this.a81, this.a80 && (bU.a81.aNb(6, 2), bU.a81.aNc())
	}
}

function aMf() {
	var qj;
	10 === bU.ep ? qj =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bU.ep ? qj =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bU.ep ? qj =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bU.ep ? qj =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bU.ep ? qj =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bU.ep ? qj =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bU.ep ? qj =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bU.ep ? qj =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bU.ep ? qj =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bU.ep ? qj =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bU.ep ? qj =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bU.ep ? qj =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bU.ep && (qj =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xN).xP(qj)
}

function aMZ() {
	this.xV = null, this.aNd = null, this.aNe = null, this.dh = function() {
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
		this.xV = new Array(bU.aMW + 1), this.xV[0] = {
			i: 230,
			j: 230,
			n9: 1e3,
			n6: 2e3,
			aMe: 173
		}, this.xV[1] = {
			i: 800,
			j: 800,
			n9: 100,
			n6: 50,
			aMe: 43
		}, this.xV[2] = {
			i: 512,
			j: 512,
			n9: 128,
			n6: 32,
			aMe: 0
		}, this.xV[3] = {
			i: 960,
			j: 960,
			n9: 60,
			n6: 8,
			aMe: 0
		}, this.xV[4] = {
			i: 900,
			j: 900,
			n9: 100,
			n6: 5,
			aMe: 0
		}, this.xV[5] = {
			i: 1e3,
			j: 1e3,
			n9: 100,
			n6: 40,
			aMe: 0
		}, this.xV[6] = {
			i: 1e3,
			j: 1e3,
			n9: 100,
			n6: 20,
			aMe: 0
		}, this.xV[7] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMe: 0
		}, this.xV[8] = {
			i: 820,
			j: 820,
			n9: 200,
			n6: 100,
			aMe: 0
		}, this.xV[9] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMe: 0
		}, this.xV[10] = {
			xw: aNi,
			xx: aNj,
			aMp: aNk
		}, this.xV[11] = {
			xw: aNl,
			xx: aNm,
			aMp: aNn
		}, this.xV[12] = {
			xw: aNl,
			xx: aNm,
			aMp: aNn
		}, this.xV[13] = {
			xw: aNg,
			xx: cos,
			aMp: aNh
		}, this.xV[14] = {
			xw: aNg,
			xx: cos,
			aMp: aNh
		}, this.xV[15] = {
			xw: aNi,
			xx: aNj,
			aMp: aNk
		}, this.xV[16] = {
			xw: aNi,
			xx: aNj,
			aMp: aNk
		}, this.xV[17] = {
			xw: aNg,
			xx: cos,
			aMp: aNh
		}, this.xV[18] = {
			xw: aNl,
			xx: aNm,
			aMp: aNn
		}, this.xV[19] = {
			xw: aNg,
			xx: cos,
			aMp: aNh
		}, this.xV[20] = {
			i: 1024,
			j: 1024,
			n9: 128,
			n6: 32,
			aMe: 0
		}, this.xV[21] = {
			i: 940,
			j: 940,
			n9: 80,
			n6: 8,
			aMe: 0
		}, this.xV[22] = {
			xw: aNl,
			xx: aNm,
			aMp: aNn
		}, this.xV[23] = {
			xw: aNi,
			xx: aNj,
			aMp: aNk
		}, this.xV[24] = {
			xw: [157, 136, 117],
			xx: [16, 13, 68],
			aMp: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a7x: "[OG] Neutronian"
		};
		for (var aB = 0; aB < bU.aMW; aB++) this.xV[aB].name = this.aNf[aB];
		this.xV[bU.aMW] = {
			name: ""
		}, this.aNd = new Uint8Array(12);
		for (aB = 0; aB < 10; aB++) this.aNd[aB] = aB;
		for (this.aNd[10] = 20, this.aNd[11] = 21, this.aNe = new Uint8Array(bU.aMX), aB = 0; aB < 10; aB++) this.aNe[aB] = 10 + aB;
		this.aNe[10] = 22, this.aNe[11] = 23, this.aNe[12] = 24
	}
}

function aMa() {
	this.aNa = function() {
		for (var gh, fG, fs, aNY = aDB, aNZ = bU.xf, i = bU.fK, aNX = i - 1, hz = bU.fL - 1, gc = 0, fI = 1; fI < hz; fI++)
			for (fs = fI * i, fG = 1; fG < aNX; fG++) aNZ[gh = fs + fG << 2] === aNZ[1 + gh] && aNZ[gh] === aNZ[2 + gh] && (gc++, aNY[2 + gh] = 4);
		ap.a81 = gc
	}, this.aNb = function(aNq, aNr) {
		for (var aNY = aDB, i = bU.fK, aNX = i - 1, hz = bU.fL - 1, id = 0, fI = 1; fI < hz; fI++)
			for (var fs = fI * i, fG = 1; fG < aNX; fG++) {
				var en = 2 + (fs + fG << 2);
				aNY[en] === aNq && (! function(en, id, aNq, aNr) {
					var f9 = 1,
						aNY = aDB,
						fB = ac.aIL,
						a3m = [en],
						aNt = id >> 8 << 1,
						aNu = 255 & id;
					aNY[en - 2] = aNt, aNY[en - 1] = aNu, aNY[en] = 5;
					for (; f9;) {
						for (var a3n = [], aB = 0; aB < f9; aB++)
							for (var ey = a3m[aB], fC = 0; fC < 8; fC++) {
								var fD = ey + fB[fC];
								aNY[fD] === aNq && (aNY[fD - 2] = aNt, aNY[fD - 1] = aNu, aNY[fD] = aNr, a3n.push(fD))
							}
						f9 = (a3m = a3n).length
					}
				}(en, id, aNq, aNr), id = (id + 1) % 32768)
			}
	}, this.aNc = function() {
		for (var aNY = aDB, i = bU.fK, aNX = i - 3, hz = bU.fL - 3, aNw = 12 * i, fI = 3; fI < hz; fI++)
			for (var fs = fI * i, fG = 3; fG < aNX; fG++) {
				var en = 2 + (fs + fG << 2);
				2 !== aNY[en] || 2 === aNY[en - 12] && 2 === aNY[12 + en] && 2 === aNY[en - aNw] && 2 === aNY[en + aNw] || (aNY[en - 2] = 1 | aNY[en - 2])
			}
	}
}

function a5m() {
	(zF = void 0 === zF ? document.createElement("canvas") : zF).width = bU.fK, zF.height = bU.fL, a5q = zF.getContext("2d", {
		alpha: !0
	}), a5r = aDB = null, a5r = a5q.getImageData(0, 0, bU.fK, bU.fL), aDB = a5r.data, bC.rA.xg(aDB)
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
		var aB, aLx, en, jj = value - aNz[f9 - 1];
		if (0 != jj) {
			for (aLx = 1 + bN.fa(Math.abs(jj), f9 - 1), aLx = jj < 0 ? -aLx : aLx, aNz[f9 - 1] = value, en = (en = f9 - 1 - bN.fa(Math.abs(jj), Math.abs(aLx))) < 1 ? 1 : f9 - 2 < en ? f9 - 2 : en, aB = f9 - 2; en <= aB; aB--) aNz[aB] += jj - (f9 -
				1 - aB) * aLx;
			(jj < 0 ? function(f9) {
				var aB;
				for (aB = f9 - 2; 1 <= aB; aB--) aNz[aB] < 0 && (aNz[aB] = -aNz[aB] - 1)
			} : function(f9) {
				var aB;
				for (aB = f9 - 2; 1 <= aB; aB--) aNz[aB] >= aNy && (aNz[aB] = 2 * aNy - aNz[aB] - 1)
			})(f9)
		}
	}

	function aOM(a3m, a3n, f9) {
		for (var aB = 0; aB < f9; aB++) a3m[aB] = a3n[aB]
	}

	function aON(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aOO(a6S, gap, i0) {
		aO0.push(a6S), aO1.push(gap), aO2.push(i0)
	}
	this.a7 = function(a50) {
		! function(a50) {
			var aB;
			for (i = a50[0], j = a50[1], aNx = a50[2], n6 = a50[3], fb = new Int16Array(i * j), max = j < i ? i : j, aNz = new Int16Array(max), aO0 = [], aO1 = [], aO2 = [], aO3 = new Array(i), aO4 = new Array(j), aB = i - 1; 0 <= aB; aB--) aO3[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aO4[aB] = !1;
			aO5 = new Int16Array(i), aO6 = new Int16Array(j)
		}(a50),
		function(f9) {
			var aOC = ay.random() % aNy,
				n9 = ay.random() % (2 * aNx + 1) - aNx;
			aOD(aOC, n9, f9)
		}(max), aOM(aO6, aNz, j), aOF(0, 0, !0, i);
		var fG, fI, a50 = fb[0],
			f9 = max,
			n9 = ay.random() % (2 * aNx + 1) - aNx;
		for (aOD(a50, n9, f9), aOM(aO5, aNz, i), aOF(0, 0, !1, j), aON(aO5), aON(aO6), aOD(fb[i - 1], aO5[i - 1], j), aOF(i - 1, 0, !1, j), aOD(fb[i * (j - 1)], aO6[j - 1], i), aOJ(fb[i * j - 1], i), aOF(0, j - 1, !0, i), aO3[i - 1] = aO3[0] = !
			0, aO4[j - 1] = aO4[0] = !0, aOO(0, i, !0), aOO(0, j, !1), ! function() {
				var aOQ, a6S;
				for (;;) {
					if (aOQ = function() {
							var aB, aOQ = aO0.length - 1;
							for (aB = aOQ - 1; 0 <= aB; aB--) aO1[aB] > aO1[aOQ] && (aOQ = aB);
							return aOQ
						}(), aO1[aOQ] < 5) return;
					a6S = aO0[aOQ] + bN.fa(aO1[aOQ], 2), (aO2[aOQ] ? function(fG) {
						var f9, aOT, aB, aH0 = 0,
							aOU = 0;
						for (; aOU < j - 1;) {
							for (aB = aH0 + 1; aB < j; aB++)
								if (aO4[aB]) {
									aOU = aB;
									break
								} f9 = aOU - aH0 + 1, aOD(fb[fG + i * aH0], 0 === aH0 ? aO5[fG] : aNz[aOT - 1] - aNz[aOT - 2], f9), aOJ(fb[aOU * i + fG], f9), aOF(fG, aH0, !1, f9), aOT = f9, aH0 = aOU
						}
						aO3[fG] = !0
					} : function(fI) {
						var f9, aOT, aB, aH0 = 0,
							aOU = 0;
						for (; aOU < i - 1;) {
							for (aB = aH0 + 1; aB < i; aB++)
								if (aO3[aB]) {
									aOU = aB;
									break
								} f9 = aOU - aH0 + 1, aOD(fb[fI * i + aH0], 0 === aH0 ? aO6[fI] : aNz[aOT - 1] - aNz[aOT - 2], f9), aOJ(fb[fI * i + aOU], f9), aOF(aH0, fI, !0, f9), aOT = f9, aH0 = aOU
						}
						aO4[fI] = !0
					})(a6S), aOO(a6S, aO0[aOQ] + aO1[aOQ] - a6S, aO2[aOQ]), aO1[aOQ] = a6S - aO0[aOQ] + 1
				}
			}(), fG = 0; fG < i; fG++)
			if (!aO3[fG])
				for (fI = 0; fI < j; fI++) aO4[fI] || ! function(fG, fI) {
					var value = fb[fI * i + fG - 1] + fb[(fI - 1) * i + fG],
						a8G = 2;
					aO3[fG + 1] && (a8G++, value += fb[fI * i + fG + 1]);
					aO4[fI + 1] && (a8G++, value += fb[(fI + 1) * i + fG]);
					fb[fI * i + fG] = bN.fa(value, a8G)
				}(fG, fI)
	}, this.aN1 = function() {
		return fb
	}, this.aMi = function() {
		fb = null
	}
}

function aIU(fS, fT) {
	return 0 <= fS ? bN.fa(fS, fT) : -bN.fa(-fS, fT)
}

function k0(fb) {
	return fb * fb
}

function a7R(fS, fT) {
	return fT < fS ? fS : fT
}

function aCg(fS, fT) {
	return fS < fT ? fS : fT
}

function a9s(fS, fb, fT) {
	return fb < fS ? fS : fT < fb ? fT : fb
}

function aOW(fb, f9) {
	for (var eh = bN.fa(fb + 1, 2), aB = 0; aB < f9; aB++) eh = bN.fa(eh + bN.fa(fb, eh), 2);
	return eh
}

function aKU(fb, f9) {
	return fb < 1 ? 0 : aOW(fb, f9)
}

function aOX(nV, nW, tR, a9b, ni, nj, tS, uA) {
	return !(nV + tR <= ni || nW + a9b <= nj || ni + tS <= nV || nj + uA <= nW)
}

function aOY(nV, nW, tR, a9b, ni, nj, tS, uA) {
	return nV <= ni && nW <= nj && ni + tS <= nV + tR && nj + uA <= nW + a9b
}

function xX(fb) {
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
	}, this.yU = function(aAI, aAK) {
		return aAI * aAI + aAK * aAK
	}
}

function dH() {
	this.y = new aOl, this.tK = 0;
	var aOm = new Array(32);

	function aOp() {
		for (var f9 = aOm.length, aB = 0; aB < f9; aB++) aOm[aB] = null
	}
	this.dh = function() {
		for (var aOn, aOo = document.body.firstChild; aOo;) aOn = aOo.nextSibling, !document.body.contains(aOo) || "DIV" !== aOo.tagName && "INPUT" !== aOo.tagName && "BUTTON" !== aOo.tagName || t.removeChild(document.body, aOo), aOo = aOn
	}, this.u = function(eG, a2P, a50) {
		void 0 === a2P && (a2P = this.tK), bh.dp = !0, 0 === eG && (0 === aa.a2K() ? eG = 5 : a0.a1.setState(13)), this.sJ(), this.tK === eG && (a2P = aOm[eG].a2P, aOm[eG] = null), this.tK = eG;
		var lP = aOm[eG];
		if (!lP || 4 === eG || 7 === eG || 8 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 15 === eG || 18 === eG || 20 <= eG && eG <= 28 || 32 === eG || 33 === eG) {
			if (0 === eG) return void aOp();
			1 === eG ? lP = new aOq : 2 === eG ? lP = new aOr : 3 === eG ? lP = new aOs : 4 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 33 === eG ? lP = a50 : 5 === eG ? lP = new aOt : 6 === eG ? lP = new aOu : 7 === eG ? lP =
				new aOv(t.y.aOw) : 8 === eG ? lP = a50 : 12 === eG ? lP = new aOx : 14 === eG ? lP = new aOy : 15 === eG ? lP = new aOv(t.y.aOz) : 16 === eG ? lP = new aP0 : 17 === eG ? lP = new aP1 : 18 === eG ? lP = new aP2 : 19 === eG ? lP =
				new aP3 : 20 === eG ? lP = new aP4 : 21 === eG ? lP = new aP5 : 22 === eG ? lP = new aP6 : 23 === eG ? lP = new aP7 : 24 === eG ? lP = new aP8 : 25 === eG ? lP = new aP9 : 26 === eG ? lP = new aPA : 27 === eG ? lP = new aPB :
				28 === eG ? lP = new aPC : 29 === eG ? lP = new aPD : 30 === eG ? lP = new aPE : 31 === eG && (lP = new aPF), lP.a2P = a2P, aOm[eG] = lP
		}
		lP.show(a50)
	}, this.a2J = function() {
		this.hv() && this.aPG(this.a2O().a2P)
	}, this.aPG = function(eG) {
		this.hv() && (aOm[eG] ? (this.sJ(), bh.dp = !0, this.tK = eG, aOm[eG].show()) : this.u(eG))
	}, this.sJ = function() {
		this.hv() && aOm[this.tK].sJ()
	}, this.x = function() {
		this.hv() && (aOm[this.tK].sJ(), aOp(), this.tK = 0, a0.a1.setState(13))
	}, this.vf = function() {
		var lP;
		this.hv() && (lP = aOm[this.tK]).vf && lP.vf()
	}, this.resize = function() {
		if (!this.hv()) return !1;
		aOm[this.tK].resize()
	}, this.hM = function(fG, fI) {
		var lP;
		this.hv() && (lP = aOm[this.tK]).hM && lP.hM(fG, fI)
	}, this.a2g = function(fG, fI) {
		var lP;
		this.hv() && (lP = aOm[this.tK]).a2g && lP.a2g(fG, fI)
	}, this.a34 = function() {
		var lP;
		this.hv() && (lP = aOm[this.tK]).a34 && lP.a34()
	}, this.a2j = function(lj, lk, deltaY) {
		var lP;
		this.hv() && (lP = aOm[this.tK]).a2j && lP.a2j(lj, lk, deltaY)
	}, this.a3E = function(code) {
		var lP;
		return !!this.hv() && ((lP = aOm[this.tK]).a3E && lP.a3E(code), !0)
	}, this.ec = function() {
		var lP;
		this.hv() && (lP = aOm[this.tK]) && lP.ec && lP.ec()
	}, this.hv = function() {
		return 0 < this.tK
	}, this.a2O = function() {
		return aOm[this.tK]
	}, this.a6D = function(eG) {
		return aOm[eG]
	}, this.aPH = function() {
		return aOm
	}, this.removeChild = function(vD, a4V) {
		try {
			vD.removeChild(a4V)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOv(data) {
	var aPI, aPJ;
	this.show = function() {
		data.aPK && bK.aQE("account", data.tI), aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(data.username, [new w("⬅️ " + L(39), function() {
		bK.clear(), t.a2J()
	}), new w(data.aPK ? "🔄 " + L(163) : L(164), function() {
		t.u(8, data.aPK ? t.a2O().a2P : void 0, new tL(25, {
			tM: 0,
			tI: data.tI,
			tJ: data.tJ
		}))
	}, 0, 0, 1)]), aPJ = new qv(aPI.vW, function() {
		var qx = [];
		qx.push(function() {
				var aPc = new qf,
					a1s = (aPc.qi(L(221)), data.aPt);
				a1s < 1 ? (aPc.qo(L(222)), 0 === data.aPu ? aPc.qk(L(223)) : 1 === data.aPu ? aPc.qk(L(224)) : 2 === data.aPu ? aPc.qk(L(225)) : 3 === data.aPu ? aPc.qk(L(226)) : 4 === data.aPu ? aPc.qk(L(227)) : 5 === data.aPu ? aPc.qk(
					L(228)) : 6 === data.aPu ? aPc.qk(L(229)) : aPc.qk(L(230))) : (aPc.qo(L(231)), a1s = a1s < 2 ? L(232) : a1s < 61 ? 2 === a1s ? L(233) : L(234, [a1s - 1]) : a1s < 84 ? 61 === a1s ? L(235) : L(236, [a1s - 60]) :
					a1s < 255 ? 84 === a1s ? L(237) : L(238, [a1s - 83]) : L(239), aPc.qk(a1s));
				{
					var ql, aPh;
					aPc.qt(new sf), data.aPK && (ql = aPc.qk(), aPc.qt(new sV([new w(bl.w4.uc(data.tI) ? L(240) : L(241), function(e) {
						return bl.w4.wH(data.tI) ? (e.textContent = L(240), aPh(1)) : (e.textContent = L(241), aPh(0)), !0
					}).button])), aPh = function(fb) {
						ql.textContent = fb ? L(242) : ""
					}, bl.w4.uc(data.tI) && aPh(1), aPc.qt(new sf))
				}
				var rp = new rq({
					value: data.username,
					eG: -1
				});
				rp.e.readOnly = !0, aPc.qt(rp), aPc.qt(new sV([new w(L(187), function(e) {
					return bC.r2.a4T(rp.e), bC.r2.vJ(e), !0
				}).button])), data.aPK ? (aPc.qt(new sf), aPc.qo(b0.y.aPd("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aPc.qt(new sV([new w(L(244), function(e) {
					return b0.aGP.aGQ({
						tM: 3,
						tI: data.tI,
						value: 0
					}), bC.r2.vJ(e), !0
				}, bD.ol).button])), aPc.qt(new sV([new w(L(245), function(e) {
					return b0.aGP.aGQ({
						tM: 3,
						tI: data.tI,
						value: 1
					}), bC.r2.vJ(e), !0
				}, bD.ol).button])), a1s = "CRTOR" === (a1s = bl.eU.data[105].value) || "ADMIN" === a1s, aPc.qt(new sV([new w(a1s ? "Block Account" : "Cheater", function(e) {
					return b0.aGP.aGQ({
						tM: 3,
						tI: data.tI,
						value: 2
					}), bC.r2.vJ(e), !0
				}, a1s ? bD.oj : bD.ol).button])), aPc.qt(new sV([new w(a1s ? "Ban IP" : "False Reporter", function(e) {
					return b0.aGP.aGQ({
						tM: 3,
						tI: data.tI,
						value: 3
					}), bC.r2.vJ(e), !0
				}, a1s ? bD.oj : bD.ol).button])), a1s && aPc.qt(new sV([new w("Gold Seizure", function(e) {
					return b0.aGP.aGQ({
						tM: 3,
						tI: data.tI,
						value: 4
					}), bC.r2.vJ(e), !0
				}, bD.oj).button]))) : aPc.qk(L(243));
				return aPc
			}()),
			function(qx) {
				var aPc, ql, aDR, aPx, aPi, aPk, aPj;
				data.aPK || ((aPc = new qf).qi(L(246)), (ql = aPc.qk(data.aPw.length + " / 160")).style.textAlign = "center", aDR = !0, (aPx = new vo(0, 1, function(e) {
					e = e.target.value.length;
					ql.textContent = e + " / 160", 160 < e ? aDR && (aDR = !1, aPk.rM(1)) : aDR || (aDR = !0, aPk.rM(0))
				})).e.rows = 6, aPx.e.style.fontSize = "1em", aPx.vv(data.aPw), aPc.qt(aPx), 0 !== data.aPy ? (aPk = new w(L(247), function() {
					if (!aDR) return !0;
					t.u(8, t.a2O().a2P, new tL(29, {
						tM: 1,
						qj: aPx.vw().substring(0, 160)
					}))
				}, 0, 0, 1), aPc.qt(new sV([aPk.button])), aPc.qt(new sV([new w(1 === data.aPy ? L(248) : L(249), function() {
					t.u(8, t.a2O().a2P, new tL(29, {
						tM: 0,
						qj: ""
					}))
				}, 0, 0, 1).button])), aPc.qk(1 === data.aPy ? L(250, [data.aPz - 1]) : L(251, [data.aPz - 1])), aPc.qk(L(252, [data.aQ0]))) : (aPi = new w(L(253), function() {
					if (!aPx.e.readOnly) return !0;
					t.u(8, t.a2O().a2P, new tL(29, {
						tM: 1,
						qj: aPx.vw().substring(0, 160)
					}))
				}, 1), aPk = new w(L(184), function(e) {
					if (e.textContent === L(184)) {
						if (!aDR) return !0;
						e.textContent = L(185), aPx.e.readOnly = !0, aPi.rM(0), aPi.button.style.color = bD.p5
					} else aPj();
					return !0
				}), aPc.qt(new sV([aPk.button])), aPc.qk(L(252, [data.aQ0])), aPj = function() {
					aPk.button.textContent = L(184), aPx.e.readOnly = !1, aPi.rM(1), aPi.button.style.color = bD.o5
				}, aPc.qt(new sV([aPi.button]))), qx.push(aPc))
			}(qx),
			function(qx) {
				var aPc;
				data.aPK && 0 !== data.aPy && ((aPc = new qf).qi(L(254)), aPc.qm(data.aPw), aPc.qt(new sV([new w(L(255, 0, "Report"), function(e) {
					return b0.y.ed(0) && (bC.r2.vJ(e), b0.aGP.aQ1({
						tM: 5,
						tI: data.tI
					})), !0
				}, 0, 0, 1).button])), qx.push(aPc))
			}(qx), qx.push(function() {
				var aPc = new qf,
					aPe = (aPc.qi(L(165)), aPc.qo(b0.y.aPd("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179)]),
					eF = data.aPf;
				return aPc.qo(L(180) + bC.s1.a5H(data.wu, .01, 2) + "<br>" + L(181) + (eF + 1) + " / " + data.wt + "<br>" + L(182) + aPe[function(eF, wu) {
					if (eF < 10) return 0;
					if (eF < 30) return 1;
					if (eF < 60) return 2;
					if (3e4 <= (wu = bN.fa(wu, 100))) return 3;
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
				}(eF, data.wu)]), aPc
			}()), data.aPK && qx.push(function() {
				var aPc = new qf,
					rp = (aPc.qi(L(183)), aPc.qo(b0.y.aPd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rq({
						value: bl.eU.data[147].value,
						eG: -1
					}, 1, void 0, function(e) {
						bl.pW.pX(147, aPh(e.target.value))
					})),
					aPi = (aPc.qt(rp), new w(L(14), function(e) {
						return rp.e.readOnly && b0.y.ed(0) && (bC.r2.vJ(e), aPj(), b0.aGP.aGQ({
							tM: 0,
							tI: data.tI,
							value: parseInt(bl.eU.data[147].value, 10)
						})), !0
					}, 1)),
					aPk = new w(L(184), function(e) {
						return e.textContent === L(184) ? (e.textContent = L(185), rp.e.readOnly = !0, aPi.rM(0), aPi.button.style.color = bD.p5, bl.pW.pX(147, rp.e.value), aPh(bl.eU.data[147].value)) : aPj(), !0
					}),
					ql = (aPc.qt(new sV([aPk.button])), aPc.qk()),
					aPh = function(fb) {
						ql.innerHTML = t.y.aPl(fb, bl.eU.data[105].value, data.tI)
					},
					aPj = function() {
						aPk.button.textContent = L(184), rp.e.readOnly = !1, aPi.rM(1), aPi.button.style.color = bD.o5
					};
				return aPh(bl.eU.data[147].value), aPc.qt(new sV([aPi.button])), aPc
			}());
		qx.push(function() {
			var aPc = new qf,
				rp = (aPc.qi(L(186)), new rq({
					value: data.tI,
					eG: -1
				}));
			return rp.e.readOnly = !0, aPc.qt(rp), aPc.qt(new sV([new w(L(187), function(e) {
				return bC.r2.a4T(rp.e), bC.r2.vJ(e), !0
			}).button])), aPc
		}()), data.aPK || (qx.push(function() {
			var aPc = new qf,
				aPm = (aPc.qi(L(188)), new rq(bl.eU.data[106]));
			return aPm.e.readOnly = !0, aPm.e.type = "password", aPc.qt(aPm), aPc.qt(new sV([new w(L(189), function(e) {
				return e.textContent === L(189) ? (e.textContent = L(190), aPm.e.type = "text") : (e.textContent = L(189), aPm.e.type = "password"), !0
			}).button, new w(L(187), function(e) {
				return bC.r2.a4T(aPm.e), bC.r2.vJ(e), !0
			}).button])), aPc.qt(new sV([new w(L(191), function() {
				t.u(8, t.a2O().a2P, new tL(15))
			}).button])), aPc.qi(L(192), "0.8em"), aPc.qk(L(193)), aPc.qk(L(194)), aPc.qk(L(195)), aPc
		}()), qx.push(function() {
			var aPc = new qf;
			return aPc.qi(L(196)), aPc.qt(new sV([new w(L(197), function() {
				t.u(6, t.a2O().a2P)
			}).button])), aPc.qt(new sV([new w(L(198), function() {
				bl.pW.pX(105, ""), t.u(8, t.a2O().a2P, new tL(18))
			}).button])), aPc.qt(new sV([new w(L(199) + bl.eU.data[105].value, function() {
				t.u(4, 0, new v(L(200), L(201), !0, [new w("⬅️ " + L(39), function() {
					t.u(7, t.a6D(7).a2P)
				})]))
			}, bD.ol).button])), aPc
		}()), qx.push(function() {
			function aPo(eG) {
				aPn[0].rM(0 === eG ? bD.oH : bD.oS), aPn[1].rM(0 === eG ? bD.oH : bD.ol), aPn[2].rM(eG === qr.qs.length - 1 || eG < 5 ? bD.oH : bD.ol)
			}
			var qr, aPn, aPc = new qf;
			aPc.qi(L(206)), aPc.qk(L(207)), bl.y.wd();
			return aPn = [new w(L(208), function() {
				var eG = Math.min(bl.eU.data[117].value, qr.qs.length - 1);
				eG < 1 || (eG = bl.y.wh(eG), bl.pW.pX(105, eG.tI), bl.pW.pX(106, eG.password), t.u(8, t.a2O().a2P, new tL(18)))
			}, bD.oH, 1), new w(L(204), function() {
				var eG = Math.min(bl.eU.data[117].value, qr.qs.length - 1);
				if (!(eG < 1)) {
					qr.qs[eG].remove(), qr.qs.splice(eG, 1);
					for (var aB = eG; aB < qr.qs.length; aB++) qr.qs[aB].name = "" + aB;
					bl.y.wg(eG), eG = bl.eU.data[117].value, qr.qs[eG].textContent = qr.qs[eG].textContent.replace("⚪", "🟢"), aPo(eG)
				}
			}, bD.oH, 1), new w(L(205), function() {
				var eG = Math.min(bl.eU.data[117].value, qr.qs.length - 1);
				if (eG !== qr.qs.length - 1) {
					for (var aB = qr.qs.length - 1; eG < aB; aB--) qr.qs[aB].remove(), qr.qs.splice(aB, 1), bl.y.wg(aB);
					aPo(eG)
				}
			}, bD.oH, 1)], qr = new vM(bl.eU.data[117], aPo), aPo(0), qr.qs[0].style.marginTop = "0.5em", aPc.qq(qr), aPc.qt(new sV([aPn[0].button])), aPc.qt(new sV([aPn[1].button])), aPc.qt(new sV([aPn[2].button])), aPc
		}()));
		return qx.push(function() {
				var aPc = new qf,
					aPe = (aPc.qi(L(212)), [L(213), L(214), L(215), L(216)]),
					eF = data.aPp;
				return aPc.qo(L(217) + (data.a1b / 100).toFixed(2) + "<br>" + L(181) + (eF + 1) + " / " + data.wt + "<br>" + L(182) + aPe[eF < 10 ? 0 : eF < 50 ? 1 : eF < 200 ? 2 : 3]), aPc
			}()), qx.push(function() {
				var aPc = new qf;
				return aPc.qi(L(209)), aPc.qo(L(210) + bC.s1.a5H(data.wq, .1, 1) + "<br>" + L(181) + (data.wr + 1) + " / " + data.wt + "<br>" + L(211) + data.ws), aPc
			}()),
			function(qx) {
				var aPc = new qf,
					aQ2 = data.wx,
					aQ3 = (aPc.qi(L(256)), aPc.qo(L(257, [data.wv.length ? "[" + data.wv + "]" : "-"])), aPc.qo(L(258, [bC.s1.a5H(aQ2, .01, 2)])), aPc.qo(L(259, [data.wz + 1 + " / " + data.wt])), data.x0),
					aQ4 = (aPc.qo(L(260, [bC.s1.a5H(aQ3, .1, 1)])), data.x2);
				aPc.qo(L(261, [aQ4])), aPc.qo(L(262, [bC.s1.a5H(aQ3 / Math.max(aQ4, 1), .1, 2)])), aQ2 = data.wy, aPc.qi(L(263), "0.8em"), aPc.qo(L(257, [data.ww.length ? "[" + data.ww + "]" : "-"])), aPc.qo(L(258, [bC.s1.a5H(aQ2, .01, 2)])),
					aQ3 = data.x1, aPc.qo(L(260, [bC.s1.a5H(aQ3, .1, 1)])), aQ4 = data.x3, aPc.qo(L(261, [aQ4])), aPc.qo(L(262, [bC.s1.a5H(aQ3 / Math.max(aQ4, 1), .1, 2)])), aPc.qo(b0.y.aPd("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qx.push(aPc)
			}(qx),
			function(qx) {
				var aPc = new qf;
				aPc.qi(L(264)), aPc.qo(L(217) + (data.aQ5 / 10).toFixed(1) + "<br>" + L(182) + (data.aQ6.length ? L(265, [data.aQ6]) : L(266))), data.aPK && aPc.qt(new sV([new w(L(267), function(e) {
					return b0.y.ed(0) && (bC.r2.vJ(e), b0.aGP.aQ1({
						tM: 4,
						tI: data.tI
					})), !0
				}, 0, 0, 1).button]));
				aPc.qo(b0.y.aPd("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qx.push(aPc)
			}(qx), qx.push(function() {
				var aPc = new qf;
				if (aPc.qi(L(218)), aPc.qo(L(219) + data.aPq + "<br>" + L(181) + (data.aPr + 1) + " / " + data.wt + "<br>" + L(182) + bq.eI(data.aPr)), data.aPK) {
					var rp = new rq({
							value: bl.eU.data[157].value,
							eG: -1
						}, 1, void 0, function(e) {
							bl.pW.pX(157, aPh(e.target.value))
						}),
						aPk = (rp.e.style.marginTop = "0.6em", aPc.qt(rp), new w(L(184), function(e) {
							return e.textContent === L(184) ? (e.textContent = L(185), rp.e.readOnly = !0, aPs[0].rM(0), aPs[1].rM(0), aPs[0].button.style.color = bD.p5, aPs[1].button.style.color = bD.p5, aPh(bl.eU.data[157]
								.value)) : aPj(), !0
						})),
						aPs = (aPc.qt(new sV([aPk.button])), [new w("−", function(e) {
							return rp.e.readOnly && b0.y.ed(0) && (bC.r2.vJ(e), aPj(), b0.aGP.aGQ({
								tM: 2,
								tI: data.tI,
								value: bN.iH(parseInt(bl.eU.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rp.e.readOnly && b0.y.ed(0) && (bC.r2.vJ(e), aPj(), b0.aGP.aGQ({
								tM: 1,
								tI: data.tI,
								value: bN.iH(parseInt(bl.eU.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						ql = aPc.qk(),
						aPh = function(fb) {
							return fb = bC.gV.a4x(fb, 3, 32767), ql.textContent = L(220, [fb - 1, fb, bl.eU.data[105].value]), fb
						};
					aPc.qt(new sV([aPs[0].button, aPs[1].button]));
					for (var aB = 0; aB < 2; aB++) aPs[aB].button.style.fontSize = "1.6em";
					var aPj = function() {
						aPk.button.textContent = L(184), rp.e.readOnly = !1, aPs[0].rM(1), aPs[1].rM(1), aPs[0].button.style.color = bD.o5, aPs[1].button.style.color = bD.o5
					};
					aPh(bl.eU.data[157].value)
				}
				return aPc
			}()),
			function(qx) {
				var aPc, a4S;
				data.aPK && !data.aQ7 || (0 === a0.id || data.aPK || data.aQ7) && ((aPc = new qf).qi("Patreon"), !data.aPK && data.aQ8 ? aPc.qt(new sV([new w(L(189), function() {
					b0.aGP.aQ1({
						tM: 7,
						tI: data.tI
					}), data.aQ8 = 0, t.u(7)
				}).button])) : data.aQ7 ? (aPc.qo(L(268, [(data.aQ9 / 100).toFixed(2)]) + "<br>" + L(269, [1 + data.aQA + " / " + data.aQB]) + "<br>" + L(270, [data.aQC ? L(271) : L(272)])), data.aPK || aPc.qt(new sV([new w(L(273),
					function() {
						b0.aGP.aQ1({
							tM: 8,
							tI: data.tI
						}), data.aQ7 = 0, bl.pW.pX(160, 0), t.u(7)
					}).button]))) : (aPc.qo(L(274), "0.75em").style.marginBottom = "0.3em", aPc.qo("  • " + L(275), "0.75em").style.whiteSpace = "pre", aPc.qo("  • " + L(276), "0.75em").style.whiteSpace = "pre", aPc.qo("  • " + L(
						277), "0.75em").style.whiteSpace = "pre", aPc.qo(L(278), "0.75em").style.marginTop = "1.0em", aPc.qo(L(279), "0.75em").style.marginTop = "1.0em", aPc.qo("<a href='" + bM.aQD +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4S = "https://www.patreon.com/oauth2/authorize?state=" + data.tI +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1Y() + "/", aPc.qo(L(280), "0.75em").style.marginTop = "1.0em", aPc.qo("<a href='" +
						a4S + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPK || (aPc.qt(new sf), aPc.qt(new sV([new w(L(190), function() {
						b0.aGP.aQ1({
							tM: 6,
							tI: data.tI
						}), data.aQ8 = 1, t.u(7)
					}).button])), aPc.qo(L(281), "0.75em").style.marginTop = "0.75em")), qx.push(aPc))
			}(qx),
			function(qx) {
				var aPc, qr, aPn, eG, aPo;
				data.aPK || bl.w4.get().length && ((aPc = new qf).qi(L(202)), eG = 0, aPo = function() {
					var aD6 = bl.w4.get().length;
					aPn[0].rM(eG === aD6 ? bD.oH : bD.oS), aPn[1].rM(eG === aD6 ? bD.oH : bD.ol), aPn[2].rM(eG === aD6 || aD6 - 1 <= eG || eG < 5 ? bD.oH : bD.ol)
				}, aPn = [new w(L(203), function() {
					t.u(8, void 0, new tL(25, {
						tM: 0,
						tI: bl.w4.get()[eG],
						tJ: 0
					}))
				}, bD.oH, 1), new w(L(204), function() {
					bl.w4.wK(eG), qr.qs[eG].remove(), qr.qs.splice(eG, 1);
					for (var aB = eG; aB < qr.qs.length; aB++) qr.qs[aB].name = "" + aB;
					bl.w4.get().length && (eG = Math.max(eG - 1, 0), qr.qs[eG].textContent = qr.qs[eG].textContent.replace("⚪", "🟢")), aPo()
				}, bD.oH, 1), new w(L(205), function() {
					for (var i1 = qr.qs.length - 1; eG < i1; i1--) bl.w4.wK(i1), qr.qs[i1].remove(), qr.qs.splice(i1, 1);
					aPo()
				}, bD.oH, 1)], aPo(), (qr = new vM(bl.w4.wG(), function(aB) {
					eG = aB, aPo()
				})).qs[0].style.marginTop = "0.5em", aPc.qq(qr), aPc.qt(new sV([aPn[0].button])), aPc.qt(new sV([aPn[1].button])), aPc.qt(new sV([aPn[2].button])), qx.push(aPc))
			}(qx), qx
	}())
}

function aP6() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.aIncomeType ? (bC.rA.a3q(aQH.vw(), aD.data.aIncomeData, 255), bC.rA.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(282), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(284), L(285), L(286)],
			value: aD.data.aIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f6)), aD.data.aIncomeType = eG, t.u(22)
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc;
		1 === aD.data.aIncomeType && ((aPc = new qf).qi("Value"), aPc.qt(new rq({
			eG: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qx.push(aPc))
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.aIncomeType && ((aPc = new qf).qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.aIncomeData, 4)), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aP9() {
	var aQF, aQG, aQH;

	function aQI() {
		aQK(), 3 !== aD.data.botDifficultyType || bC.rA.a3e(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		3 === aD.data.botDifficultyType && bC.rA.a3q(aQH.vw(), aD.data.botDifficultyData, aE.kf.length - 1)
	}

	function aQP(qx, eG) {
		var aPc = new qf,
			value = (aPc.qi(eG < 0 ? L(64) : L(63) + " " + bi.a1U[eG % 9]), 0 <= eG && (aPc.qo(L(289) + ": " + aD.data.teamPlayerCount[eG]).style.marginBottom = "1em"), eG < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eG]);
		aPc.qq(new vM({
			t1: aE.kf,
			value: value
		}, function(i1) {
			eG < 0 ? aD.data.botDifficultyValue = i1 : aD.data.botDifficultyTeam[eG] = i1
		})), qx.push(aPc)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(64), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, function() {
		var qx = [];
		if (function(qx) {
				var aPc = new qf,
					t1 = (aPc.qi(L(283)), [L(285), L(287), L(288), L(286)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), t1.splice(2, 1));
				aPc.qq(new vM({
					t1: t1,
					value: value
				}, function(eG) {
					aQK(), aD.data.botDifficultyType = eG, 0 === aD.data.gameMode && 2 === eG && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f6)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qx.push(aPc)
			}(qx), 0 === aD.data.botDifficultyType) aQP(qx, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aQP(qx, aB);
		else 3 === aD.data.botDifficultyType && ! function(qx) {
			var aPc = new qf;
			aPc.qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.botDifficultyData, 8)), aPc.qt(aQH), qx.push(aPc)
		}(qx);
		return qx
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
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize();
		var eh = h.k,
			ve = aPI.vb(),
			aQm = eh * ve.vd,
			eh = eh * ve.sM;
		aQV = bC.r2.tj(.06), aQW = bC.r2.tj(.04), aQR = bC.r2.tj(.06), aQS = eh + aQV, aQT = h.i - aQR - aQW, aQU = aQm + eh - aQS - aQW
	}, this.vf = function() {
		aPI.vf(),
			function() {
				var aB, aQj, gc, fG, fS, g = data.data,
					aQq = 1,
					aQr = .125,
					aQs = aQc ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQj = g[aB].aQj, gc = aQj.length, aQq = Math.max(gc, aQq), fS = 0; fS < gc; fS++) aQr = Math.max(aQj[fS], aQr), aQs = Math.min(aQj[fS], aQs);
				var nW = aQS + aQU,
					z3 = aQU / (aQr - aQs),
					z2 = 1 / (aQq - 1);
				for (vg.lineWidth = be.a06, aB = 0; aB < g.length; aB++) {
					for (aQj = g[aB].aQj, gc = aQj.length, fG = aQR, vg.beginPath(), vg.moveTo(fG + aQT, nW - z3 * (aQj[gc - 1] - aQs)), fS = gc - 2; 0 <= fS; fS--) vg.lineTo(fG + z2 * fS * aQT, nW - z3 * (aQj[fS] - aQs));
					vg.strokeStyle = colors[aB], vg.stroke()
				}(function(aQs, aQr, nW, z3) {
					vg.font = bC.r2.sr(0, .25 * aQR), bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 2), vg.fillStyle = colors[0];
					for (var fG = .92 * aQR, aB = 0; aB < 3; aB++) {
						var fb = aQs + aB * (aQr - aQs) / 2;
						vg.fillText((fb / 1e3).toFixed(3), fG, nW - z3 * (fb - aQs))
					}
				})(aQs, aQr, nW, z3),
				function(aQq) {
					var fI = aQS + aQU + .15 * aQW;
					vg.font = bC.r2.sr(0, Math.min(.4 * aQW, .028 * h.i)), bC.r2.textBaseline(vg, 0), bC.r2.textAlign(vg, 2), vg.fillStyle = colors[0], vg.fillText(bC.a3V.a4K(aQX), aQR + aQT, fI), bC.r2.textAlign(vg, 0), vg.fillText(bC.a3V.a4K(
						new Date(aQY.getTime() - 6e4 * (aQq - 1) * aQd[data.aQi])), aQR, fI)
				}(aQq),
				function(aQq, aQs, aQr) {
					if (aQb && !(aQq < 2)) {
						for (var a9j, eG = (aQZ - aQR) / aQT * (aQq - 1), aQv = Math.floor(eG), aQw = Math.floor(1 + eG), aQx = eG - aQv, aQy = 1e5, aQz = -1, aR0 = -1, aR1 = aQr - (aQr - aQs) * (aQa - aQS) / aQU, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDc, aQj = g[aB].aQj;
							aQj.length <= aQw || (aQj = aQj[aQv] + aQx * (aQj[aQw] - aQj[aQv]), (aDc = Math.abs(aR1 - aQj)) < aQy && (aQy = aDc, aQz = aB, aR0 = aQj))
						} - 1 !== aQz && (aQr = aQS + aQU - (aR0 - aQs) / (aQr - aQs) * aQU, vg.lineWidth = .5 * be.a06, vg.strokeStyle = colors[aQz], vg.beginPath(), vg.moveTo(aQR, aQr), vg.lineTo(aQZ, aQr), vg.lineTo(aQZ, aQS + aQU), vg
							.stroke(), vg.beginPath(), vg.arc(aQZ, aQr, .1 * aQR, 0, 2 * Math.PI), vg.fillStyle = colors[aQz], vg.fill(), aQs = aQS + aQU + .15 * aQW, bC.r2.textAlign(vg, 1), a9j = aQq - 2 < eG ? (a9j = aQY.getTime() - 6e4 *
								aQd[data.aQi], new Date(a9j + (eG - (aQq - 2)) * (aQX.getTime() - a9j))) : new Date(aQY.getTime() - 6e4 * (aQq - eG - 1) * aQd[data.aQi]), aQq = bC.a3V.a4K(a9j), eG = bC.r2.measureText(aQq), a9j = bN.iH(aQZ,
								aQR + .5 * eG, aQR + aQT - .5 * eG), vg.fillStyle = bC.color.nx(70, 50, 20), vg.fillRect(a9j - .52 * eG, aQS + aQU, 1.04 * eG, .55 * aQW), vg.fillStyle = colors[0], vg.fillText(aQq, a9j, aQs), vg.font = bC.r2
							.sr(0, .25 * aQR), bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 2), a9j = .92 * aQR, aQq = (aR0 / 1e3).toFixed(3), eG = bC.r2.measureText(aQq), aQs = a9j - 1.04 * eG, vg.fillStyle = bC.color.nx(70, 50, 20), vg
							.fillRect(aQs, aQr - .1625 * aQR, aQR - aQs, .275 * aQR), vg.fillStyle = colors[aQz], vg.fillText(aQq, a9j, aQr))
					}
				}(aQq, aQs, aQr)
			}(), vg.lineWidth = be.a06, vg.strokeStyle = bD.o5, vg.beginPath(), vg.moveTo(aQR, aQS), vg.lineTo(aQR, aQS + aQU), vg.lineTo(aQR + aQT, aQS + aQU), vg.stroke();
		var aB, fontSize = .5 * aQV,
			g = (vg.font = bC.r2.sr(0, fontSize), bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 0), data.data),
			f9 = g.length,
			fI = aQS - .5 * aQV,
			qj = "";
		for (aB = 0; aB < f9; aB++) qj += g[aB].name + "  ";
		qj = qj.trim();
		var aR4 = bC.r2.measureText(qj),
			fG = .5 * (h.i - aR4);
		for (aR4 > h.i && (fG = 0, vg.font = bC.r2.sr(0, h.i / aR4 * fontSize)), aB = 0; aB < f9; aB++) vg.fillStyle = colors[aB], vg.fillText(g[aB].name, fG, fI), fG += bC.r2.measureText(g[aB].name + "  ")
	}, this.hM = function(lj, lk) {
		aR7(lj, lk)
	}, this.a2g = function(lj, lk) {
		aR7(lj, lk)
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	};
	var aB, eY, a4I, i1, fC = data.data,
		f9 = fC.length,
		max = 1;
	for (aB = 0; aB < f9; aB++) max = Math.max(max, fC[aB].aQj.length);
	for (aB = 0; aB < f9; aB++)
		for (; fC[aB].aQj.length < max;) fC[aB].aQj.unshift(0);
	eY = new Date, a4I = 6e4 * eY.getTimezoneOffset(), i1 = eY.getTime() - a4I, aQX = new Date(i1), 6 === data.aQi ? function(eY, a4I) {
		var aQl = eY.getUTCFullYear(),
			eY = eY.getUTCMonth() + 1;
		aQY = eY < 12 ? new Date(Date.UTC(aQl, eY) - a4I) : new Date(Date.UTC(aQl + 1, 0) - a4I)
	}(eY, a4I) : (a4I = 6e4 * aQd[data.aQi], aQY = data.aQi <= 4 ? new Date(i1 + a4I - eY.getTime() % a4I) : new Date(i1 + a4I - (eY.getTime() + 2592e5) % a4I)), i1 = bC.color, colors = [bD.o5, i1.nx(255, 0, 0), i1.nx(0, 200, 0), i1.nx(80, 80,
		255), i1.nx(255, 255, 0), i1.nx(255, 0, 255), i1.nx(0, 255, 255), i1.nx(255, 140, 0), i1.nx(128, 128, 128), i1.nx(0, 255, 140)], aPI = new vQ(L(290) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQi] + ", " + bC.a3V.a4H(aQX), [
		new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(291), function() {
			t.u(14)
		})
	], !1)
}

function aOy() {
	var aPI, aPJ, qx;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(292), [new w("⬅️ " + L(39), function() {
		t.aPG(13)
	})]), aPJ = new qv(aPI.vW, ((qx = []).push(function() {
		var aPc = new qf,
			aPk = (aPc.qi(L(293)), aPc.qk(L(294)), new w(L(295), function() {
				bl.pW.pX(130, 0), t.y.aRC()
			}, 0, 0, 1)),
			rp = new rq(bl.eU.data[126], 0, function() {
				aPk.button.click()
			});
		return aPc.qt(rp), rp.e.placeholder = "a,b,c", rp.e.style.marginTop = "0.5em", aPc.qt(new sV([aPk.button])), aPc
	}()), qx.push(function() {
		var aPc = new qf,
			aPk = new w(L(295), function() {
				bl.pW.pX(130, 1), t.y.aRC()
			}, 0, 0, 1),
			aRD = new rq(bl.eU.data[129], 1, function() {
				aRD.e.focus()
			}),
			aRE = new rq(bl.eU.data[128], 1, function() {
				aPk.button.click()
			});
		return aPc.qi(L(296)), aPc.qt(aRE), aRE.e.style.marginBottom = "0.5em", aPc.qi(L(297)), aPc.qt(aRD), aPc.qt(new sV([aPk.button])), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		return aPc.qi(L(298)), bl.eU.data[125].t1 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aPc.qq(new vM(bl.eU.data[125])), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		return aPc.qi(L(299)), aPc.qt(new sR(bl.eU.data[127], L(300))), aPc
	}()), qx))
}

function aOx() {
	var aPI, aRF, aQT, aRG, aRH, aRI, colors = [0, 0, 0],
		aRJ = -1;

	function aRM(aB) {
		var aRN = aRF.fI + aB * (be.gap + aRI);
		vg.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vg.fillRect(aRG, aRN, colors[aB] * aRH, aRI), vg.strokeStyle = bD.o5, vg.strokeRect(aRG, aRN, aRH,
			aRI), vg.fillStyle = bD.o5, vg.font = bC.r2.sr(0, .32 * aRI), bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 0), vg.fillText(L(0 === aB ? 303 : 1 === aB ? 304 : 305) + aRK(aB), aRG + be.gap, aRN + .53 * aRI)
	}

	function aRK(aB, aRO) {
		return aRO = aRO || 256, bN.iH(Math.floor(aRO * colors[aB]), 0, aRO - 1)
	}

	function a3A(lj, lk) {
		return !(lj < aRG || lk < aRF.fI || lj > aRF.fG + aRF.i || lk > aRF.fI + aRF.j)
	}
	this.show = function() {
		var fb = bl.eU.data[121].value;
		colors[0] = (fb >> 12) / 63, colors[1] = (fb >> 6 & 63) / 63, colors[2] = (63 & fb) / 63, aPI.show(), this.resize()
	}, this.sJ = function() {
		bl.pW.pX(121, (aRK(0, 64) << 12) + (aRK(1, 64) << 6) + aRK(2, 64)), aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aRF.resize();
		var eh = h.k,
			ve = aPI.vb(),
			aRL = (aRF.fI = Math.max(aRF.fI, eh * ve.sM + be.gap), eh * ve.vd - 2 * be.gap);
		aRF.j = Math.min(aRF.j, aRL), aRF.i = 2 * aRF.j, aRF.fI = eh * ve.sM + .5 * (eh * ve.vd - aRF.j), aRF.fG = .5 * (h.i - aRF.i), aQT = .25 * aRF.i, aRG = aRF.fG + aQT + be.gap, aRH = aRF.i - aQT - be.gap, aRI = (aRF.j - 2 * be.gap) / 3
	}, this.vf = function() {
		var eF, ti, fT;
		aPI.vf(), vg.lineWidth = be.a06, eF = aRK(0), ti = aRK(1), fT = aRK(2), vg.fillStyle = "rgb(" + eF + "," + ti + "," + fT + ")", vg.fillRect(aRF.fG, aRF.fI, aQT, aRF.j), vg.strokeStyle = bD.o5, vg.strokeRect(aRF.fG, aRF.fI, aQT, aRF.j), vg
			.fillStyle = eF + ti + fT < 306 && ti < 150 ? bD.o5 : bD.nw, bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 1), vg.font = bC.r2.sr(0, .1 * aRF.j), vg.rotate(-Math.PI / 2), vg.fillText(L(302), -aRF.fI - .5 * aRF.j, aRF.fG + .5 * aQT),
			vg.setTransform(1, 0, 0, 1, 0, 0), aRM(0), aRM(1), aRM(2)
	}, this.hM = function(lj, lk) {
		a3A(lj, lk) && (aRJ = bN.iH(Math.floor((lk - aRF.fI) / (aRI + .75 * be.gap)), 0, 2), colors[aRJ] = bN.iH((lj - aRG) / aRH, 0, 1), bh.dp = !0)
	}, this.a2g = function(lj) {
		-1 !== aRJ && (colors[aRJ] = bN.iH((lj - aRG) / aRH, 0, 1), bh.dp = !0)
	}, this.a2j = function(lj, lk, deltaY) {
		a3A(lj, lk) && (lj = bN.iH(Math.floor((lk - aRF.fI) / (aRI + .75 * be.gap)), 0, 2), colors[lj] = bN.iH(colors[lj] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bh.dp = !0)
	}, this.a34 = function() {
		0 <= aRJ && (aRJ = -1, bh.dp = !0)
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(301), [new w("⬅️ " + L(39), function() {
		t.y.aDX()
	})], !1), aRF = new rd([.5, .25], [.5, .5], 1)
}

function aP5() {
	var aQF, aQG, aQH, rb;

	function aQI() {
		aQK(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aPH()[19] = null, t.a2J()
	}

	function aRP() {
		aQK(), t.u(21)
	}

	function aQK() {
		1 === aD.data.gameMode ? aD.a5e.a5j() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bC.rA.a3q(aQH.vw(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, rb = [new w("⬅️ " + L(39), aQI)], 1 === aD.data.gameMode && rb.push(new w(L(306), aRP, 1, 1)), aQF = new vQ(L(307), rb), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), 0 === aD.data.gameMode && (aPc.qq(new vM({
			t1: [L(308), L(286)],
			value: aD.data.colorsType
		}, function(eG) {
			aQK(), aD.data.colorsType = eG, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f6 || (aD.data.colorsData = new Uint32Array(aD.f6)), t.u(21)
		})), aPc.qt(new sf));
		aPc.qt(new sR({
			value: aD.data.selectableColor
		}, L(309), function(value) {
			aD.data.selectableColor = value
		})), qx.push(aPc)
	}(rb = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qx) {
		var aPc = new qf;
		aPc.qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.colorsData, 1)), aPc.qt(aQH), qx.push(aPc)
	}(rb) : (aD.a5e.a5j(), rb.push(function() {
		var aPc = new qf;
		aPc.qi(L(289));
		for (var aB = 0; aB < bi.a1U.length; aB++) {
			var i1 = (aB + 1) % bi.a1U.length,
				e = aPc.qo((0 == i1 ? "" : "Team ") + bi.a1U[i1]);
			aB && (e.style.marginTop = "0.5em"), aPc.qt(new rq({
				eG: -1,
				value: aD.data.teamPlayerCount[i1]
			}, 1, 0, function(e) {
				aQF.vX[1].rM(0);
				var playerCount = bN.iH(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aRR] = playerCount
			})).e.aRR = i1
		}
		return aPc
	}())), rb))
}

function tL(id, a50, aRS) {
	var aPI, aRT;

	function aRY() {
		aRT.qy.innerHTML += "<br>" + L(312)
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
		bF.a7(90), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bF.a8(30, Math.floor(bN.pow(30) * Math.random())), bJ.dh(bF.aC), bl.pW.pX(110, bH.tN.tO(bH.tN.tP(15))), b0.aGP.aRk()
	}
	this.aRU = !0, this.aRV = id, this.show = function() {
		aPI.show(), this.resize(), 15 === id ? (b0.y.aRW(id) ? aRX : aRY)() : 16 === id ? b0.y.aRW(id) ? b0.ee.ef(2) : aRY() : 17 === id ? b0.y.aRW(id) ? b0.ee.ef(3) : aRY() : 18 === id ? (b0.y.close(0, 3253), b0.y.aHM(0, id, 0), aRY()) : 21 ===
			id ? b0.y.aRW(id) ? b0.aRZ.aRa(a50.td, a50.te, a50.tf) : aRY() : 22 === id ? b0.y.aRW(id) ? b0.aRZ.aRb(a50.td, a50.aRc, a50.aRd) : aRY() : 23 === id ? b0.y.aRW(id) ? b0.aRZ.aRe(a50.aQi, a50.a1p) : aRY() : 24 === id ? b0.y.aRW(id) ? b0
			.aRZ.aRf(a50.aQi, a50.te, a50.tf) : aRY() : 25 === id ? b0.y.aRW(id) ? b0.aGP.aQ1(a50) : aRY() : 28 === id ? b0.y.aRW(id) ? b0.aRZ.aRg(a50.td, a50.aRc, a50.aRd) : aRY() : 29 === id ? b0.y.aRW(id) ? b0.aGP.aRh(a50) : aRY() : 30 ===
			id && (b0.y.aRW(id) ? b9.aDS() || aRi() : aRY())
	}, this.aRj = function() {
		15 === id ? aRX() : 16 === id ? b0.ee.ef(2) : 17 === id ? b0.ee.ef(3) : 18 === id ? t.u(8, this.a2P, new tL(16)) : 21 === id ? b0.aRZ.aRa(a50.td, a50.te, a50.tf) : 22 === id ? b0.aRZ.aRb(a50.td, a50.aRc, a50.aRd) : 23 === id ? b0.aRZ.aRe(
			a50.aQi, a50.a1p) : 24 === id ? b0.aRZ.aRf(a50.aQi, a50.te, a50.tf) : 25 === id ? b0.aGP.aQ1(a50) : 28 === id ? b0.aRZ.aRg(a50.td, a50.aRc, a50.aRd) : 29 === id ? b0.aGP.aRh(a50) : 30 === id ? b9.aDS() || aRi() : 1e3 === id && (
			this.aRV = id = 25, b0.aGP.aQ1(a50))
	}, this.aDW = function(code, bw, data) {
		!bw && code !== id || (15 === code || 16 === code ? t.u(7, this.a2P) : 17 === code ? (b0.y.close(0, 3252), bl.y.wg(0), bl.eU.data[117].t1 && 0 < bl.eU.data[117].t1.length ? (bw = bl.y.wh(0), bl.pW.pX(105, bw.tI), bl.pW.pX(106, bw
			.password), t.u(8, this.a2P, new tL(16))) : (bl.pW.pX(105, ""), t.y.aDX())) : 21 === code ? t.u(10, this.a2P, new aC0(data)) : 23 === code ? t.u(13, this.a2P, new aQQ({
			data: data,
			aQi: a50.aQi
		})) : 25 === code ? (t.y.aOz.tI = a50.tI, bl.w4.mr(a50.tI), t.u(15, this.a2P)) : 30 === code && (data ? t.u(1) : aRi()))
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(310), [new w("⬅️ " + L(39), function() {
		aRS ? t.u(29) : t.y.aDX()
	})]), aRT = new sU(aPI.vW, L(311))
}

function aP3() {
	var aQF, aQG, qx;

	function aRn() {
		var gc;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5e.a5j()), gc = bC.rA.a3k(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gc) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aQI() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aRp(), aD.data.canvas = null, t.u(5, 5)
	}

	function aRp() {
		bB.qM.dh(), bl.pW.pX(156, bB.a5u.a0a())
	}

	function aRl() {
		aD.data.isReplay = 0, aRp(), aD.a5e.a66(), aa.aHX(), aD.a5e.a63(), aD.data.canvas = 2 === aD.data.mapType ? bU.xe : null, aD.a5i(), aD.a5g = 1
	}

	function aS1() {
		aRn();
		for (var g = [aRs(), aRt(), aRu()], aB = 3; aB < 6; aB++) t.removeChild(aQG.qy, aQG.qz[aB].qh), aQG.qz[aB] = g[aB - 3], aQG.qy.appendChild(aQG.qz[aB].qh);
		aQG.resize()
	}

	function aRs() {
		var aS2, aPc = new qf;
		return aPc.qi(L(307)), aS2 = 0 === aD.data.gameMode ? [L(308), L(286)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aPc.qo(aS2), aPc.qt(new sV([new w(L(318), function() {
			t.u(21)
		}).button])), aPc
	}

	function aRt() {
		var aPc = new qf,
			g = (aPc.qi(L(64)), [L(285) + ": " + aE.kf[aD.data.botDifficultyValue], L(287), L(288), L(286)]);
		return aPc.qo(g[aD.data.botDifficultyType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(25)
		}).button])), aPc
	}

	function aRu() {
		var aPc = new qf,
			g = (aPc.qi("Spawning"), [L(308), L(320), L(286)]);
		return aPc.qo(g[aD.data.spawningType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(24)
		}).button])), aPc
	}
	this.show = function() {
		aQF.show(), this.resize(), aQF.vW.scrollTop = t.y.tC[0]
	}, this.sJ = function() {
		t.y.tC[0] = aQF.vW.scrollTop, aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ("🔧 " + L(315), [new w("⬅️ " + L(39), aQI), new w(L(316), aRl)]), aRn(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bU.xe : 1 === aD.data.mapType ? aD.data.canvas = bU.aMj(bU.a64(aD.data), 0).xe : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bU.aMj(bU.a64(aD.data), aD.data.mapSeed).xe)), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf,
			a40 = (aPc.qi(L(317)), aD.data.canvas);
		a40.style.width = "100%", aPc.qt({
			e: a40
		}), aPc.qt(new sV([new w(L(318), function() {
			t.u(20)
		}).button])), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc = new qf;
		aPc.qi(L(289)), aPc.qt(new rq({
			eG: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bN.iH(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bC.rA.a3k(aD.data.teamPlayerCount, 0), aD.a5e.a5j(), bC.rA.a3k(aD.data.teamPlayerCount, 0) !== e) && aS1()
		})), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf;
		aPc.qi(L(319)), aPc.qq(new vM({
			t1: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eG) {
			aD.data.gameMode !== eG && (aD.data.gameMode = eG, aS1())
		})), qx.push(aPc)
	}(qx), qx.push(aRs()), qx.push(aRt()), qx.push(aRu()), function(qx) {
		var aPc = new qf,
			g = (aPc.qi(L(321)), [L(322), L(323), L(286)]);
		aPc.qo(g[aD.data.playerNamesType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(23)
		}).button])), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf,
			g = (aPc.qi(L(282)), [L(284), L(285) + ": " + aD.data.aIncomeValue, L(286)]);
		aPc.qo(g[aD.data.aIncomeType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(22)
		}).button])), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf,
			g = (aPc.qi(L(324)), [L(284), L(285) + ": " + aD.data.tIncomeValue, L(286)]);
		aPc.qo(g[aD.data.tIncomeType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(26)
		}).button])), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf,
			g = (aPc.qi(L(325)), [L(284), L(285) + ": " + aD.data.iIncomeValue, L(286)]);
		aPc.qo(g[aD.data.iIncomeType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(27)
		}).button])), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf,
			g = (aPc.qi(L(326)), [L(284), L(285) + ": " + aD.data.sResourcesValue, L(286)]);
		aPc.qo(g[aD.data.sResourcesType]), aPc.qt(new sV([new w(L(318), function() {
			t.u(28)
		}).button])), qx.push(aPc)
	}(qx), function(qx) {
		var aPc = new qf;
		aPc.qi(L(327)), aPc.qt(new sV([new w(L(328), function() {
			t.x(), aD.a5e.a67(), t.y.tC[0] = 0, t.u(19)
		}).button])), aPc.qt(new sV([new w(L(329), function() {
			bo.aJx()
		}).button])), aPc.qt(new sV([new w(L(330), function() {
			return bo.aJz(), !0
		}).button])), qx.push(aPc)
	}(qx), qx))
}

function aPE() {
	var aQF, rv = !0;

	function sC(sB, a6B) {
		var qh = document.createElement("div"),
			aS4 = document.createElement("span"),
			aS5 = document.createElement("span");
		aS4.textContent = aW.aCM(a6B.eX) + ":", aS4.style.color = bD.oK, aS4.style.paddingRight = "0.4em", aS4.style.display = "table-cell", aS4.style.width = "6ch", aS4.style.textAlign = "end", qh.appendChild(aS4), aS5.textContent = a6B.qj, qh
			.appendChild(aS5), qh.style.display = "table", a6B.pl && function(qh, pl) {
				{
					var aJK;
					pl >= 1024 - aj.sI.zt ? ((aJK = document.createElement("img")).src = aj.xh.zh[pl - 1024 + aj.sI.zt].toDataURL(), aJK.style.width = "1.5em", aJK.style.height = "1.5em", aJK.style.verticalAlign = "middle", qh.appendChild(aJK)) : ((
							aJK = document.createElement("span")).textContent = aj.sI.a08(pl), aJK.style.display = "inline-block", aJK.style.fontSize = "1.5em", aJK.style.lineHeight = "1em", aJK.style.verticalAlign = "middle", qh.appendChild(
						aJK))
				}
			}(qh, a6B.pl), sB.appendChild(qh)
	}

	function sF() {
		rv && (aQF.vW.scrollTop = aQF.vW.scrollHeight)
	}
	this.clear = function() {
		aQF.vW.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a74 = bs.a6E(), f9 = a74.length, sB = document.createDocumentFragment(), aB = 0; aB < f9; aB++) sC(sB, a74[aB]);
		aQF.vW.appendChild(sB), sF(), aQF.show(), this.resize(), rv = !0, sF()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQF.vW.style.padding = "0.4em " + bC.r2.rB(be.r8)
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, this.za = function(a6B) {
		var sB = document.createDocumentFragment();
		sC(sB, a6B), aQF.vW.appendChild(sB), sF()
	}, (aQF = new vQ(L(331), [new w("⬅️ " + L(39), function() {
		t.aPG(1)
	})])).vW.style.overflowY = "auto", aQF.vW.addEventListener("scroll", function() {
		rv = aQF.vW.scrollTop >= aQF.vW.scrollHeight - aQF.vW.clientHeight - 2
	})
}

function aPB() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.iIncomeType && bC.rA.a3q(aQH.vw(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(325), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(284), L(285), L(286)],
			value: aD.data.iIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f6), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eG, t.u(27)
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc;
		1 === aD.data.iIncomeType && ((aPc = new qf).qi("Value"), aPc.qt(new rq({
			eG: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qx.push(aPc))
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.iIncomeType && ((aPc = new qf).qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.iIncomeData, 4)), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aOt() {
	var aS7, aS8, aRF, rp, aS9, sm = 0;
	this.aI5 = new tT, aRF = new rd([.45, .27], [.5, .5], 2 / 3), aS8 = [new w("⚔️<br>" + L(332), function() {
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
	], rp = new rq(bl.eU.data[122]);
	for (var aB = 0; aB < aS8.length; aB++) aS8[aB].button.style.position = "absolute";

	function aSA(eG) {
		a0.a1.setState(10), ab.tm() || ab.aHw(), 0 === eG ? t.y.a5x(1) : 1 === eG ? (bB.aKH.xP(bl.eU.data[156].value, 1) || aD.a5e.a67(), t.u(19)) : 2 === eG ? 0 !== a0.id || bl.eU.data[140].value ? t.u(8, t.tK, new tL(16)) : t.y.aSB(t.tK, 16) :
			3 === eG && t.u(1)
	}
	rp.e.style.position = "absolute", rp.e.style.textAlign = "center", rp.e.placeholder = L(335), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aI5.show(), aS8[4].rM(bC.color.a47(bl.eU.data[121].value)), this.resize(), document.body.appendChild(rp.e);
		for (var aB = 0; aB < aS8.length; aB++) document.body.appendChild(aS8[aB].button);
		1 !== a0.id || a0.e0 < 5 || (aS9 && bh.eX > aS9 + 144e5 ? a0.wP.setState(14) : aS9 = bh.eX)
	}, this.sJ = function() {
		this.aI5.sJ(), t.removeChild(document.body, rp.e);
		for (var aB = 0; aB < aS8.length; aB++) t.removeChild(document.body, aS8[aB].button)
	}, this.resize = function() {
		this.aI5.resize(), this.aI5.resize(), aRF.resize();
		var gap = .5 * be.gap,
			uI = 10 / 99 * .84 * aRF.i,
			aSE = .16 * aRF.j,
			aAH = .19 * aRF.i,
			fG = aRF.fG + aAH,
			uI = aRF.fI + uI + 3 * gap,
			i = .5 * (aRF.i - gap) - aAH,
			aAH = aRF.i - 2 * aAH - aSE - gap,
			aAH = (bC.r2.tk(rp.e, fG, uI, aAH, aSE), bC.r2.tk(aS8[4].button, fG + aAH + gap, uI, aSE, aSE), sm = uI, .5 * (aRF.fI + aRF.j - (uI += aSE + gap) - gap));
		bC.r2.tk(aS8[0].button, fG, uI, i, aAH), bC.r2.tk(aS8[1].button, fG + i + gap, uI, i, aAH), bC.r2.tk(aS8[2].button, fG, uI + aAH + gap, i, aAH), bC.r2.tk(aS8[3].button, fG + i + gap, uI + aAH + gap, i, aAH);
		bC.r2.tk(aS8[5].button, fG, uI + aAH * 2 + gap * 2, i * 2 + gap, aAH / 3);
		bC.r2.tk(aS8[6].button, fG, uI + aAH * 2.33 + gap * 3, i * 2 + gap, aAH / 3);
		for (var aB = 0; aB < aS8.length; aB++) aS8[aB].button.style.font = bC.r2.sr(0, bC.r2.v6(.065 * aRF.j)), bC.r2.rC(aS8[aB].button, 5);
		rp.e.style.font = bC.r2.sr(0, bC.r2.v6(.08 * aRF.j)), bC.r2.rC(rp.e, 5)
	}, this.vf = function() {
		if (aa.aHb(), aT.vf(), f9 = Math.floor((a0.a1.iI() ? .018 : .0137) * h.iJ), vg.font = bC.r2.sr(0, Math.max(5, f9)), bC.r2.textBaseline(vg, 0), bC.r2.textAlign(vg, 2), vg.fillStyle = bD.o5, vg.fillText(l.e0, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vg.measureText(text).width, f9 = Math.max(5, f9), vg.textAlign = "left", vg.textBaseline = "middle", vg.fillText(text, vg.canvas.width - textLength - f9 / 2, 2 * f9), aO.vf(sm), ba.vf(), ab.tm()) {
			vg.imageSmoothingEnabled = !1;
			var text = ab.aHe("territorial.io"),
				textLength = .84 * aRF.i / text.width;
			vg.setTransform(textLength, 0, 0, textLength, aRF.fG + .08 * aRF.i, aRF.fI), aS7 = aS7 || bC.a3R.a4y(text, bC.a3R.a54, [0, 0, 0]);
			for (var fG = -1; fG <= 1; fG += 2)
				for (var fI = -1; fI <= 1; fI += 2) vg.drawImage(aS7, fG, fI);
			vg.drawImage(text, 0, 0), vg.imageSmoothingEnabled = !0;
			var f9 = ab.aHe("logo"),
				aSH = .6666 * textLength * text.height / f9.height,
				ni = .5 * h.i,
				nj = aRF.fI + .5 * textLength * text.height - .5 * aSH * f9.height;
			vg.setTransform(aSH, 0, 0, aSH, ni - .6 * textLength * text.width, nj), vg.drawImage(f9, 0, 0), vg.setTransform(aSH, 0, 0, aSH, ni + .6 * textLength * text.width - aSH * f9.width, nj), vg.drawImage(f9, 0, 0), vg.setTransform(1, 0, 0,
				1, 0, 0), vg.imageSmoothingEnabled = !0
		}
	}
}

function aP0() {
	var aPI, aSI, aSJ, vR;

	function aSK(aB) {
		t.u(8, t.tK, new tL(21, {
			td: aB,
			te: 0,
			tf: 10
		}))
	}
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
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
	}, 0, 0, 1)], vR = [new w("⬅️ " + L(39), function() {
		t.a2J()
	})], aPI = new vQ(L(343), vR), aSI = new ra(aSJ, aPI.vW)
}

function aDu(title, qp, aSL) {
	var aPI, aRT;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aSL = aSL || [new w("⬅️ " + L(39), function() {
		t.a2J()
	}, bD.ol)], aPI = new vQ(title, aSL), aRT = new sU(aPI.vW, qp), bC.r2.textAlign(aPI.vW.style, 1)
}

function aC0(data) {
	var aPI, aSM;

	function aSV(f9) {
		return f9 < 60 ? 1 === f9 ? f9 + " Second" : f9 + " Seconds" : f9 < 3600 ? 1 === (f9 = Math.floor(f9 / 60)) ? f9 + " Minute" : f9 + " Minutes" : f9 < 172800 ? 1 === (f9 = Math.floor(f9 / 3600)) ? f9 + " Hour" : f9 + " Hours" : (f9 = Math
			.floor(f9 / 172800)) + " Days"
	}

	function aSO(jj) {
		var f9 = data.data.length;
		if (f9) {
			for (var te, max = min = parseInt(data.data[0][0]), aB = 1; aB < f9; aB++) var aFu = parseInt(data.data[aB][0]),
				min = Math.min(aFu, min),
				max = Math.max(aFu, max);
			te = jj < 0 ? min + jj : max + 1, t.u(8, t.a2O().a2P, new tL(21, {
				td: data.td,
				te: te,
				tf: te + Math.abs(jj)
			}))
		}
	}
	if (this.show = function() {
			aPI.show(), this.resize()
		}, this.sJ = function() {
			aPI.sJ()
		}, this.resize = function() {
			aPI.resize(), aSM.resize()
		}, this.a3E = function(eh) {
			2 === eh && aPI.vX[0].rJ()
		}, data.aC1) {
		aPI = new vQ(L(118), [new w("⬅️ " + L(39), function() {
			t.a2J()
		})]);
		var fC = {
				t2: [],
				t8: [L(356), L(357), L(358) + " ↗"],
				tF: [12, 50, 38]
			},
			a61 = aD.data.a61;
		if (a61) {
			for (var f9 = a61.length, t2 = fC.t2, zb = ag.zb, aB = 0; aB < f9; aB++) t2.push([{
				fb: aB + 1 + ".",
				eY: 0
			}, {
				fb: zb[aB],
				eY: 0
			}, {
				fb: bH.tN.a0P(a61[aB], 5),
				eY: 1,
				tI: a61[aB],
				tJ: 0
			}]);
			aSM = new t0(aPI.vW, fC, {
				tB: 1
			})
		} else aSM = new t0(aPI.vW, fC)
	} else {
		var fC = data.data.length ? 0 : 1,
			aSL = [new w("⬅️ " + L(39), function() {
				t.a2J()
			}), new w(L(344), function() {
				aSO(-10)
			}, fC, 0, 1), new w(L(345), function() {
				aSO(10)
			}, fC, 0, 1), new w(L(291), function() {
				t.u(11, 10, new aSP({
					td: data.td
				}))
			})],
			t8 = [L(346), L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(354), L(355), L(341), L(342), "Audit Log"];
		aPI = new vQ(t8[data.td], aSL), ! function() {
			var aB, fC = {
					t2: []
				},
				t2 = fC.t2,
				aSR = data.data,
				f9 = aSR.length;
			f9 && 0 === aSR[0][0] && 0 <= (eG = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.td]) && (t.y.tg[eG] = aSR[0][1]);
			var nh = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.td],
				a5A = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.td],
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
			if (fC.t8 = eG[data.td], fC.tF = [
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
				][data.td], 0 === data.td || 2 === data.td || 3 === data.td || 9 === data.td || 10 === data.td || 11 === data.td)
				for (aB = 0; aB < f9; aB++) t2.push([{
					fb: aSR[aB][0] + 1 + ".",
					eY: 0
				}, {
					fb: aSR[aB][1],
					eY: 1,
					tI: aSR[aB][4],
					tJ: aSR[aB][3]
				}, {
					fb: (nh * aSR[aB][2]).toFixed(a5A),
					eY: 0
				}]);
			else if (12 === data.td)
				for (aB = 0; aB < f9; aB++) {
					var aSU = aSR[aB][3];
					t2.push([{
						fb: "" + aSR[aB][0],
						eY: 0
					}, {
						fb: aSV(aSR[aB][4]),
						eY: 0
					}, {
						fb: aSR[aB][5],
						eY: 1,
						tI: aSR[aB][1],
						tJ: 0
					}, {
						fb: aSR[aB][6],
						eY: 1,
						tI: aSR[aB][2],
						tJ: 0
					}, {
						fb: bq.eM(aSU, bH.tN.a0P(aSR[aB][1], 5)),
						eY: 0
					}])
				} else if (1 === data.td)
					for (aB = 0; aB < f9; aB++) t2.push([{
						fb: aSR[aB][0] + 1 + ".",
						eY: 0
					}, {
						fb: aSR[aB][1],
						eY: 0
					}, {
						fb: (nh * aSR[aB][2]).toFixed(a5A),
						eY: 0
					}, {
						fb: aSR[aB][3],
						eY: 1,
						tI: aSR[aB][5],
						tJ: aSR[aB][4]
					}]);
				else if (4 === data.td || 5 === data.td || 6 === data.td || 7 === data.td || 8 === data.td)
				for (aB = 0; aB < f9; aB++) {
					var aSW = aSR[aB][5];
					4 === data.td || 8 === data.td ? "100%" === (aSW = (aSW % 64 * 100 / (aSW >> 6)).toFixed(0) + "%") && (4 === data.td ? aSW += " (" + L(377) + ")" : aSW += " (" + L(378) + ")") : 5 === data.td ? 32768 <= aSW && (aSW = -(aSW -
						32768)) : aSW = (nh * aSW).toFixed(a5A), t2.push([{
						fb: "" + aSR[aB][0],
						eY: 0
					}, {
						fb: aSV(aSR[aB][6]),
						eY: 0
					}, {
						fb: aSR[aB][7],
						eY: 1,
						tI: aSR[aB][1],
						tJ: aSR[aB][2]
					}, {
						fb: aSR[aB][8],
						eY: 1,
						tI: aSR[aB][3],
						tJ: aSR[aB][4]
					}, {
						fb: "" + aSW,
						eY: 0
					}])
				}
			aSM = new t0(aPI.vW, fC)
		}()
	}
}

function aSP(a50) {
	var aPI, aPJ, qx;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(379), [new w("⬅️ " + L(39), function() {
		t.aPG(10)
	})]), aPJ = new qv(aPI.vW, ((qx = []).push(function() {
		var aPk, aPc = new qf,
			aRD = new rq(bl.eU.data[132], 1, function() {
				aPk.button.click()
			}),
			aRE = new rq(bl.eU.data[131], 1, function() {
				aRD.e.focus()
			});
		aPc.qi(L(296)), aPc.qt(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qi(L(297)), aPc.qt(aRD);
		return aPk = new w(L(295), function() {
			te = Math.floor(aRE.e.value), tf = Math.floor(aRD.e.value);
			var tf, te = {
				a3i: Math.min(te, tf),
				aOQ: Math.max(te, tf)
			};
			t.u(8, t.a6D(10).a2P, new tL(21, {
				td: a50.td,
				te: te.a3i,
				tf: te.aOQ
			}))
		}, 0, 0, 1), aPc.qt(new sV([aPk.button])), aPc
	}()), qx.push(function() {
		var aPk, aPc = new qf,
			aRD = new rq(bl.eU.data[134], 1, function() {
				aPk.button.click()
			}),
			aRE = new rq(bl.eU.data[133], 0, function() {
				aRD.e.focus()
			});
		return aPc.qi(1 === a50.td ? L(380) : L(381)), aPc.qt(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qi(L(382)), aPc.qt(aRD), aPk = new w(L(295), function() {
			var aRc = aRE.e.value.slice(0, 20),
				aRd = Math.abs(Math.floor(aRD.e.value));
			t.u(8, t.a6D(10).a2P, new tL(22, {
				td: a50.td,
				aRc: aRc,
				aRd: aRd
			}))
		}, 0, 0, 1), aPc.qt(new sV([aPk.button])), aPc
	}()), qx.push(function() {
		var aPk, aPc = new qf,
			aRD = new rq(bl.eU.data[152], 1, function() {
				aPk.button.click()
			}),
			aRE = new rq(bl.eU.data[151], 0, function() {
				aRD.e.focus()
			});
		return aPc.qi(L(383)), aPc.qt(aRE), aRE.e.style.marginBottom = "0.8em", aPc.qi(L(382)), aPc.qt(aRD), aPk = new w(L(295), function() {
			var aRc = aRE.e.value.slice(0, 5),
				aRd = Math.abs(Math.floor(aRD.e.value));
			t.u(8, t.a6D(10).a2P, new tL(28, {
				td: a50.td,
				aRc: aRc,
				aRd: aRd
			}))
		}, 0, 0, 1), aPc.qt(new sV([aPk.button])), aPc
	}()), qx))
}

function aPD() {
	var aSa, tr, aSd, tq, tt, aSb = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aSc = new Array(4),
		aSe = new Array(2),
		aSf = [L(63), L(340), L(384), L(385)];

	function aFg() {
		var aEz;
		!bp.a2H || (aEz = aSa.u4.rp.e.value.trim().slice(0, 127)).length < 1 || (aSa.u4.rp.e.value = "", bp.aDx.a1C(aEz))
	}

	function aSi(aSk) {
		bp.y.s6[3] = 1 - bp.y.s6[3], aSj(3, 1, bp.y.s6[3]), aSk && b0.aFr.aFs(4), bp.y.s6[3] && bl.pW.pX(158, bp.y.s6[0])
	}

	function aSg(fS, fT) {
		bp.y.s6[fS] !== fT && (0 === fS && bp.y.s6[3] && aSi(0), aSj(fS, bp.y.s6[fS], 0), aSj(fS, fT, 1), bp.y.s6[fS] = fT, 0 === fS ? (b0.aFr.aFs(2, fT), bp.y.s6[2] ? (aSa.u5.mr(), aSa.u4.s3(1)) : aSa.u4.s3(0), t.a2O().aFV(), t.a2O().aFU()) : 2 ===
			fS && (0 === fT ? (b0.aFr.aFs(0), aSa.u4.mr(), aSa.uD()) : (b0.aFr.aFs(1), aSa.u5.mr(), aSa.uE())))
	}

	function aSj(fS, fT, color) {
		aSa.u7[fS].rb[fT].rM(color ? bD.oU : bD.pK)
	}

	function aSn(ep) {
		return bU.xU.aNf[ep]
	}

	function aSo(aEj) {
		return aEj < 7 ? "   " + (aEj + 2) + " Teams" : 10 === aEj ? "   No Full-Sending" : ""
	}

	function aSp(aFX, aSw) {
		return aSw ? aFX <= 90 && 60 < aFX ? "   Contest" : "" : aFX <= 60 ? "   Contest" : ""
	}
	this.aG2 = function() {
		return aSa.u4
	}, this.aDx = function(tI) {
		aSg(2, 0);
		var qj = aSa.u4.rp.e.value,
			tI = "@" + tI + " ";
		qj.length && !bC.s1.a4U(qj, " ") && (tI = " " + tI), aSa.u4.rp.e.value = qj += tI, aSa.u4.rp.e.focus()
	}, this.aFT = function() {
		aSa.u5.mr()
	}, this.aFV = function() {
		var aSm = bp.y.s6[0],
			aSm = bp.y.s8[aSm],
			fT = (bU.a7(aSm.ep, aSm.mapSeed), tr.rb),
			a7u = aSn(aSm.ep, aSm.mapSeed) + aSo(aSm.aEj) + aSp(aSm.aFX),
			aSm = L(388) + "   " + aSn(aSm.aGT, aSm.aGU) + aSo(aSm.aGV) + aSp(aSm.aFX, 1);
		fT[0].button.textContent === a7u && fT[1].button.textContent === aSm || (fT[0].button.textContent = a7u, fT[1].button.textContent = aSm, tr.resize())
	}, this.aFU = function() {
		var aSm = bp.y.s6[0],
			s7 = bp.y.s8[aSm];
		aSa.uB(s7.uC);
		for (var fb, a8A, aB = 0; aB < bp.uT.uU.length; aB++) aSb[0][aB].s0.textContent = bp.uT.uU[aB].length, aSb[1][aB].s0.textContent = (fb = bp.y.s8[aB].aFX, a8A = void 0, ((a8A = bN.fa(fb, 60)) < 10 ? "0" : "") + a8A + ":" + ((fb %= 60) <
			10 ? "0" : "") + fb);
		var s7 = bp.uT.uU[aSm],
			aSr = s7.length,
			aSs = bp.uT.uV[aSm];
		aSb[2][1].s0.textContent = "" + aSr, aSb[3][1].s0.textContent = "" + aSs;
		for (aB = 0; aB < 4; aB++) {
			var aSt = bp.y.s8[aB];
			aSc[aB] ? 0 === aSt.uC && (aSc[aB].s0.textContent = bU.xU.aNf[aSt.ep]) : aSc[aB] = new rz(bU.xU.aNf[aSt.ep], tq.rb[aB].button, 1, 1), bC.s1.startsWith(aSf[aB], "🏆 ") ? aSt.aEp || (aSf[aB] = aSf[aB].substring(3), tq.rb[aB].button
				.textContent = aSf[aB], tq.rb[aB].button.appendChild(aSb[1][aB].s0), tq.rb[aB].button.appendChild(aSb[0][aB].s0), tq.rb[aB].button.appendChild(aSc[aB].s0)) : aSt.aEp && (aSf[aB] = "🏆 " + aSf[aB], tq.rb[aB].button
				.textContent = aSf[aB], tq.rb[aB].button.appendChild(aSb[1][aB].s0), tq.rb[aB].button.appendChild(aSb[0][aB].s0), tq.rb[aB].button.appendChild(aSc[aB].s0))
		}
		var aSu = "",
			aSv = "";
		0 === aSm && (aSu = bp.lJ.aF4(s7, 0, aSr), aSv = bp.lJ.aF4(s7, 0, aSs)), aSd[0].s0.textContent = aSu, aSd[1].s0.textContent = aSv, aSe[1].s0.textContent = "MP: " + bp.y.aFN[0] + "   SP: " + bp.y.aFN[1] + "   Lobby: " + bC.rA.a3v(bp.uT.uU)
	}, this.aFZ = function() {
		aSa.u4.mr()
	}, this.show = function() {
		aSa.show(), this.resize(), bp.message.show()
	}, this.sJ = function() {
		aSa.sJ(), bp.uq.sJ(), bp.uQ.sJ(), bp.message.sJ()
	}, this.resize = function() {
		aSa.resize(1 - bp.y.s6[2]), bp.message.resize()
	}, this.a3E = function(eh) {
		2 === eh ? bp.y.s6[3] ? aSi(1) : aSa.u7[3].rb[0].rJ() : eh < 2 && aSi(1)
	}, tq = new sY([new w(aSf[0], function() {
		return aSg(0, 0), 2
	}), new w(aSf[1], function() {
		return aSg(0, 1), 2
	}), new w(aSf[2], function() {
		return aSg(0, 2), 2
	}), new w(aSf[3], function() {
		return aSg(0, 3), 2
	})], bD.pK), tr = new sY([new w("", 0, 2), new w("", 0, 2)], bD.pL, 1);
	var aSh = new sY([new w(L(386), function() {
		return aSg(2, 0), 2
	}), new w(L(118), function() {
		return aSg(2, 1), 2
	})], bD.pK);
	tt = new sY([new w(L(25, 0, 0, 1), function() {
		t.x(), bp.uk(), b0.y.a2W(3240), t.u(5, 5)
	}), new w(L(387), function() {
		return aSi(1), 2
	})], bD.pK), aSa = new tp(tq, tr, aSh, tt, aFg, bp.uq.aGC);
	for (var aB = 0; aB < 4; aB++) aSb[0][aB] = new rz("0", tq.rb[aB].button), aSb[1][aB] = new rz("0", tq.rb[aB].button, 1);
	aSb[2][1] = new rz("0", aSh.rb[1].button), aSb[3][1] = new rz("0", tt.rb[1].button), (aSd = [new rz("", aSh.rb[1].button, 1, 1), new rz("", tt.rb[1].button, 1, 1)])[0].s0.style.bottom = "0em", aSd[1].s0.style.bottom = "0em", aSj(0, bp.y.s6[0],
		1), aSj(2, bp.y.s6[2], 1), (aSe = [new rz(L(289), aSa.uF(), 1, 0), new rz("", aSa.uF(), 1, 1)])[0].s0.style.fontSize = "0.4em", aSe[1].s0.style.fontSize = "0.4em"
}

function aOu() {
	var aPI, aPJ, qx;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(389), [new w("⬅️ " + L(39), function() {
		t.u(7, t.a6D(7).a2P)
	}), new w(L(208), function() {
		bl.pW.pX(105, bI.tN.xE(aPJ.qz[0].qg[0].e.value, 5)), bl.pW.pX(106, bI.tN.xE(aPJ.qz[1].qg[0].e.value, 15)), t.u(8, t.a6D(7).a2P, new tL(18))
	})]), aPJ = new qv(aPI.vW, ((qx = []).push(function() {
		var aPc = new qf;
		return aPc.qi(L(186)), aPc.qt(new rq({
			value: "",
			eG: -1
		})), aPc
	}()), qx.push(function() {
		var aPc = new qf,
			aPm = (aPc.qi(L(188)), new rq({
				value: "",
				eG: -1
			}));
		return aPm.e.type = "password", aPc.qt(aPm), aPc.qt(new sV([new w(L(189), function(e) {
			return e.textContent === L(189) ? (e.textContent = L(190), aPm.e.type = "text") : (e.textContent = L(189), aPm.e.type = "password"), !0
		}).button])), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		return aPc.qi(L(192)), aPc.qk(L(390)), aPc.qk(L(391)), aPc.qk(L(392)), aPc
	}()), qx))
}

function aP1() {
	var aPI, aSI, aSJ, vR;

	function aSK(aB) {
		t.u(8, t.tK, new tL(21, {
			td: aB,
			te: 0,
			tf: 10
		}))
	}
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aSJ = [new w(L(351), function() {
		aSK(5)
	}, 0, 0, 1), new w(L(352), function() {
		aSK(6)
	}, 0, 0, 1), new w(L(353), function() {
		aSK(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aSK(12)
	}, 0, 0, 1)], vR = [new w("⬅️ " + L(39), function() {
		t.a2J()
	})], aPI = new vQ(L(393), vR), aSI = new ra(aSJ, aPI.vW)
}

function aOl() {
	this.eU = {}, this.tg = new Array(7), this.aOz = null, this.aOw = null, this.sy = 0, this.tC = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5x = function(aSz) {
		aSz && (aZ.aHG = aSz), t.x(), aZ.dh()
	}, this.aDX = function() {
		t.u(0 === aa.a2K() ? 5 : 0)
	}, this.aRC = function() {
		if (1 === bl.eU.data[130].value) t.u(8, t.a2O().a2P, new tL(24, {
			aQi: bl.eU.data[125].value,
			te: bl.eU.data[128].value,
			tf: bl.eU.data[129].value
		}));
		else {
			for (var g = (g = bl.eU.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a2O().a2P, new tL(23, {
				aQi: bl.eU.data[125].value,
				a1p: g
			}))
		}
	}, this.aSB = function(a2P, target) {
		t.u(4, a2P, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aPd(
				"/privacy"), !1, [new w("⬅️ " + L(39), function() {
				t.u(a2P)
			}), new w("✅ Accept", function() {
				bl.pW.pX(140, 1), 0 === target ? t.u(2, a2P) : t.u(8, a2P, new tL(target))
			})]))
	}, this.aT0 = function() {
		for (var aB = 0; aB < 7; aB++) this.tg[aB] = bI.x5.x9(bJ.qA(5));
		this.tg[1] = "[" + this.tg[1] + "]", 5 === t.tK && (t.a2O().aI5.pX(this.tg), t.a2O().resize())
	}, this.aPl = function(fb, pU, a7j) {
		fb = bC.gV.a4x(fb, 1, 1e6);
		var aT1 = Math.max(1, 1 + Math.floor(.01 * (fb - 100))),
			pU = L(394, [pU]);
		return (pU += "<br>") + L(395, [a7j]) + "<br>" + L(396, [aT1 < 20 ? fb + aT1 + "–" + (fb + 20) : fb + aT1]) + "<br>" + L(397, [fb])
	}
}

function aP4() {
	var aQF, aQG, aT2, qx;

	function aQI() {
		b6.uk(), t.aPH()[19] = null, t.a2J()
	}

	function aT9() {
		aTC(), aTA()
	}

	function aTC() {
		aT2.qh.lastChild && t.removeChild(aT2.qh, aT2.qh.lastChild)
	}

	function aTA() {
		var aTD = bU.a64(aD.data);
		aD.data.canvas = bU.aMj(aTD, aD.data.mapSeed).xe, aTB()
	}

	function aTB() {
		var a40 = aD.data.canvas;
		a40.style.width = "100%", aT2.qh.appendChild(a40)
	}
	this.aJJ = function(a40) {
		aD.data.canvas && aTC(), aD.data.canvas = a40, aTB()
	}, this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(317), [new w("⬅️ " + L(39), aQI)]), 2 === aD.data.mapType && b6.dh(), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(398), L(399), L(400)],
			value: aD.data.mapType
		}, function(eG) {
			2 === (aD.data.mapType = eG) ? (b6.dh(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uk()), t.u(20)
		})), 2 <= aD.data.mapType && (aPc.qt(new sf), aPc.qt(new sR({
			value: aD.data.passableWater
		}, L(401), function(value) {
			aD.data.passableWater = value
		})), aPc.qt(new sR({
			value: aD.data.passableMountains
		}, L(402), function(value) {
			aD.data.passableMountains = value
		})));
		qx.push(aPc)
	}(qx = []), function(qx) {
		if (0 === aD.data.mapType) {
			for (var aPc = new qf, t1 = (aPc.qi(L(317)), []), aB = 0; aB < bU.xU.aNd.length; aB++) t1.push(bU.xU.xV[bU.xU.aNd[aB]].name);
			aPc.qq(new vM({
				t1: t1,
				value: aD.data.mapProceduralIndex
			}, function(eG) {
				aD.data.mapProceduralIndex = eG, aT9()
			})), qx.push(aPc)
		}
	}(qx), function(qx) {
		if (1 === aD.data.mapType) {
			for (var aPc = new qf, t1 = (aPc.qi(L(317)), []), aB = 0; aB < bU.xU.aNe.length; aB++) t1.push(bU.xU.xV[bU.xU.aNe[aB]].name);
			aPc.qq(new vM({
				t1: t1,
				value: aD.data.mapRealisticIndex
			}, function(eG) {
				aD.data.mapRealisticIndex = eG, aT9()
			})), qx.push(aPc)
		}
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.mapType && ((aPc = new qf).qi(L(403)), aPc.qt(new rq(bl.eU.data[162], 1)), aPc.qi(L(404), "0.8em"), aPc.qt(new sV([new w(L(405), function() {
			return b6.aJC(), !0
		}).button])), qx.push(aPc))
	}(qx), function(qx) {
		var aPc, rp;
		2 === aD.data.mapType && ((aPc = new qf).qi(L(406)), rp = new rq({
			eG: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aPc.qt(rp), qx.push(aPc))
	}(qx), function(qx) {
		var aPc, rp, aPk;
		0 === aD.data.mapType && ((aPc = new qf).qi("Seed"), rp = new rq({
			eG: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aT9())
		}), aPk = new w(L(308), function(e) {
			var aMe = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aMe) return rp.e.value = aD.data.mapSeed = aMe, aT9(), !0
		}), aPc.qt(rp), aPc.qt(new sV([aPk.button])), qx.push(aPc))
	}(qx), function(qx) {
		(aT2 = new qf).qi(L(407)), 2 !== aD.data.mapType ? aTA() : aD.data.canvas && aTB();
		qx.push(aT2)
	}(qx), qx))
}

function v(title, qp, aTE, aSL) {
	var aPI, aRT;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aRT.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aSL = aSL || [new w("⬅️ " + L(39), function() {
		t.a2J()
	})], aPI = new vQ(title, aSL), aRT = new sU(aPI.vW, qp), aTE && bC.r2.textAlign(aPI.vW.style, 1)
}

function aP7() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 === aD.data.playerNamesType && 1 === bC.rA.a3e(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.playerNamesType && bC.rA.a3s(aQH.vw(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(321), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(322), L(323), L(286)],
			value: aD.data.playerNamesType
		}, function(eG) {
			aQK(), aD.data.playerNamesType = eG, t.u(23)
		})), aPc.qt(new sf), aPc.qt(new sR({
			value: aD.data.selectableName
		}, L(408), function(value) {
			aD.data.selectableName = value
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc;
		2 === aD.data.playerNamesType && ((aPc = new qf).qi("Data"), aQH = new vo(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f6 || (aD.data.playerNamesData = new Array(aD.f6), aD.data.playerNamesData
			.fill("")), aQH.vv(bC.s1.a5N(aD.data.playerNamesData, 1, '"')), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aPF() {
	var aQF, aQG, qx;

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
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(409), [new w("⬅️ " + L(39), function() {
		t.a2J()
	})]), aQG = new qv(aQF.vW, ((qx = []).push(function() {
		var aPc = new qf;
		return aPc.qi(L(410)), aPc.qo(b0.y.aPd("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aPc.qo("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aPc
	}()), qx.push(function() {
		var aPc = new qf,
			ej = (aPc.qi(L(411)), bl.eU.data[174].value),
			ql = aPc.qk(ej.length + " / 180"),
			aPx = (ql.style.textAlign = "center", new vo(0, 1, function(e) {
				var e = e.target.value,
					gc = e.length;
				ql.textContent = gc + " / 180", gc <= 180 && bl.pW.pX(174, e)
			}));
		return aPx.e.rows = 6, aPx.e.style.fontSize = "1em", aPx.vv(ej), aPc.qt(aPx), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		aPc.qi(L(307));
		for (var aB = 0; aB < 11; aB++) {
			var iS = aPc.qt(new rq(bl.eU.data[163 + aB]));
			aB && (iS.e.style.marginTop = "0.6em")
		}
		return aPc.qt(new sV([new w(L(412), function() {
			for (var data = bl.eU.data, aB = 163; aB < 174; aB++) data[aB] && bl.eU.wB(aB, data[aB].wE);
			t.a2J(), t.aPH()[31] = null, t.u(31)
		}).button])), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		return aPc.qi("Targeting"), aPc.qo(L(413)), aPc.qt(new rq(bl.eU.data[175], 0, 0)), aPc
	}()), qx.push(function() {
		var aPc = new qf;
		return aPc.qi(L(407)), aPc.qt(new sV([new w(L(189), function() {
			(new ei).show(bl.eU.data[174].value, aTK(), -1)
		}).button])), aPc
	}()), qx.push(function() {
		var aPc = new qf,
			aTL = (aPc.qi(L(414)), aPc.qo(L(415)), new rq(bl.eU.data[176], 1, 0)),
			aTM = (aPc.qt(aTL), new w(L(416), function(e) {
				return aTN.button.textContent === L(185) && b0.y.ed(0) && (bC.r2.vJ(e), aPj(), b0.aGP.aTO(bl.eU.data[176].value, aTK(), bl.eU.data[175].value, bl.eU.data[174].value)), !0
			}, 1)),
			aPj = function() {
				aTN.button.textContent = L(184), aTM.rM(1), aTM.button.style.color = bD.o5
			},
			aTN = new w(L(184), function(e) {
				return e.textContent === L(184) ? (e.textContent = L(185), aTM.rM(0), aTM.button.style.color = bD.p5) : aPj(), !0
			});
		return aPc.qt(new sV([aTN.button, aTM.button])), aPc
	}()), qx))
}

function aOs() {
	var aQF, vt;

	function aTP() {
		t.x();
		var qj = bB.aTT(vt.vw());
		(aD.a18 && 0 < qj.length && qj === bB.qM.a5t || bB.aKH.xP(qj)) && bB.aTU()
	}
	this.show = function(aTQ) {
		this.aTR(aTQ), aQF.show(), this.resize()
	}, this.aTR = function(aTQ) {
		0 === aD.a18 ? aTQ ? vt.vv(aTQ) : aD.a5h.length && vt.vv(aD.a5h) : (aD.hI || (bB.qM.a5t = bB.a5u.a0a()), vt.vv(bB.aTS(bB.qM.a5t)))
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), vt.resize()
	}, this.a3E = function(eh) {
		2 === eh ? aQF.vX[0].rJ() : aTP()
	}, aQF = new vQ(L(417), [new w("⬅️ " + L(39), function() {
		t.aPG(1)
	}), new w(L(418), function() {
		vt.vx()
	}), new w(L(419), function() {
		vt.vy()
	}), new w(L(420), function() {
		vt.clear()
	}), new w(L(421), function() {
		aTP()
	})]), vt = new vo(L(422)), aQF.vW.appendChild(vt.e)
}

function aOr() {
	var aPI, aPJ, qx, aPc;

	function aTV() {
		b9.aDJ !== bl.eU.data[12].value ? (b9.dh(), t.u(8, 1, new tL(30))) : t.u(1)
	}
	this.show = function() {
			aPI.show(), this.resize()
		}, this.sJ = function() {
			aPI.sJ()
		}, this.resize = function() {
			aPI.resize(), aPJ.resize()
		}, this.a3E = function(eh) {
			2 === eh && aPI.vX[0].rJ()
		}, aPI = new vQ(L(423), [new w("⬅️ " + L(39), aTV), new w(L(424), function() {
			t.x(), bl.pW.wm(), t.u(2)
		})]), qx = [], (aPc = new qf).qi(L(425)), aPc.qk(L(426)), qx.push(aPc),
		function(qx) {
			var aPc = new qf,
				g = (aPc.qi(L(413)), b9.data.aDa());
			aPc.qq(new vM({
				t1: g,
				value: b9.data.aDe(g)
			}, function(eG) {
				return bl.pW.pX(12, g[eG].split(":")[0]), !0
			})), qx.push(aPc)
		}(qx),
		function(qx) {
			var aPc = new qf,
				aTY = (aPc.qi(L(451)), []);
			aPc.qt(new sV([new w(L(412), function(e) {
				bZ.aTZ();
				for (var aB = 0; aB < aTY.length; aB++) aTY[aB].e.value = bZ.aCs[aB];
				return bC.r2.vJ(e), !0
			}).button]));
			for (var aB = 0; aB < bZ.aTa.length; aB++) {
				aPc.qk(bZ.aTa[aB]);
				for (var fS = 0; fS < 2; fS++) {
					var eG = 2 * aB + fS,
						rp = new rq({
							value: bZ.aCs[eG],
							eG: -1
						});
					rp.e.aTb = eG, aTY.push(rp), rp.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bZ.aTc(e.target.aTb, code)
					}), fS && (rp.e.style.marginLeft = "4%"), rp.e.style.width = "48%", aPc.qt(rp)
				}
			}
			qx.push(aPc)
		}(qx), (aPc = new qf).qi(L(427)), bl.eU.data[1].t1 = [L(428), L(429), L(430), L(431)], aPc.qq(new vM(bl.eU.data[1])), qx.push(aPc), (aPc = new qf).qi(L(432)), bl.eU.data[9].t1 = [L(429), L(433), L(434)], aPc.qq(new vM(bl.eU.data[9])), qx
		.push(aPc), (aPc = new qf).qi(L(435)), bl.eU.data[11].t1 = [L(436), L(9), L(437)], aPc.qq(new vM(bl.eU.data[11])), qx.push(aPc), (aPc = new qf).qi(L(438)), aPc.qt(new sR(bl.eU.data[2])), qx.push(aPc), (aPc = new qf).qi(L(439)), aPc.qt(new sR(
			bl.eU.data[7])), qx.push(aPc), (aPc = new qf).qi(L(440)), aPc.qt(new sR(bl.eU.data[8])), qx.push(aPc), (aPc = new qf).qi(L(441)), aPc.qt(new rq(bl.eU.data[5])), qx.push(aPc), (aPc = new qf).qi(L(442)), aPc.qt(new sR(bl.eU.data[13], L(
			443))), aPc.qt(new sR(bl.eU.data[14], L(444))), qx.push(aPc), (aPc = new qf).qi(L(445)), aPc.qq(new vM({
			t1: [L(446), L(447), L(448)],
			value: aZ.aHH
		}, function(aB) {
			aZ.aHH = aB
		})), qx.push(aPc), (aPc = new qf).qi(L(449)), aPc.qt(new sR(bl.eU.data[15])), aPc.qk(L(450)), aPc.qt(new rq(bl.eU.data[16], 1, 0, function(e) {
			e.target.value = bN.iH(Math.floor(e.target.value), 0, 16)
		})), qx.push(aPc), aPJ = new qv(aPI.vW, qx)
}

function aP8() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 !== aD.data.spawningType || bC.rA.a3e(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.spawningType && bC.rA.a3q(aQH.vw(), aD.data.spawningData, bU.aJM - 1)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(452), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf,
			t1 = (aPc.qi(L(283)), [L(308), L(320), L(286)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (t1.splice(1, 1), 0 < value) && (value = 1);
		aPc.qq(new vM({
			t1: t1,
			value: value
		}, function(eG) {
			aQK(), aD.data.spawningType = eG, 0 === aD.data.gameMode && 1 === eG && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f6)), t.u(24)
		})), aPc.qt(new sf), aPc.qt(new sR({
			value: aD.data.selectableSpawn
		}, L(453), function(value) {
			aD.data.selectableSpawn = value
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc = new qf;
		aPc.qi("Seed"), aPc.qt(new rq({
			eG: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qx.push(aPc)
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.spawningType && ((aPc = new qf).qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.spawningData, 2)), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aOq() {
	var aPI, aSI, aSJ, vR;

	function aTd(id) {
		0 !== a0.id || bl.eU.data[140].value ? 0 === id ? t.u(8, 1, new tL(16)) : t.u(2) : t.y.aSB(t.tK, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aPI.show(), this.resize(), this.ec()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aSI.resize()
	}, this.ec = function() {
		8 === aa.a2K() && (2 <= bf.aTi ? aSJ[2].rK === bD.oH && aSJ[2].rM(0) : aSJ[2].rK !== bD.oH && aSJ[2].rM(bD.oH), !aD.hI && aM.qd(aD.et) ? aSJ[1].rK === bD.oH && aSJ[1].rM(0) : aSJ[1].rK !== bD.oH && aSJ[1].rM(bD.oH), !aD.hI && aw.hy(aD
			.et) ? aSJ[0].rK === bD.oH && aSJ[0].rM(0) : aSJ[0].rK !== bD.oH && aSJ[0].rM(bD.oH))
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aSJ = [new w(L(454), function() {
		aTd(0)
	}), new w(L(343), function() {
		t.u(16)
	}), new w(L(393), function() {
		t.u(17)
	}), new w(L(455), function() {
		t.y.aRC()
	}, 0, 0, 1), new w(L(417), function() {
		t.u(3, 1)
	}), new w(L(456), function() {
		t.u(18)
	}), new w(L(409), function() {
		t.u(31)
	}), new w(L(457), function() {
		t.y.a5x(2)
	}), new w(L(423), function() {
		aTd(1)
	}), new w(L(458), function() {
		var t8 = ["Patreon", L(467), L(468), "YouTube Tutorial", "Discord", L(469), L(336), L(470), L(339), L(471), "Terms", "Privacy"],
			a4Q = [bM.aQD, bM.aDr, bM.a2D, "https://www.youtube.com/watch?v=6QBmA9N1668", bM.aDs, bM.aTj, bM.aTk, bM.aTl, bM.aTm, bM.aTn, bM.aTo, bM.aTp];
		if (b0.y.aTq(0))
			for (var aB = 0; aB < a4Q.length; aB++) a4Q[aB] = a4Q[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (t8.splice(2, 1), t8.splice(0, 1), a4Q.splice(2, 1), a4Q.splice(0, 1)) : 2 === a0.id && (t8.splice(1, 1), t8.splice(0, 1), a4Q.splice(1, 1), a4Q.splice(0, 1)), t.u(4, 1, new v(L(458), bC.r2.a4P(t8, a4Q), !1, [new w(
			"⬅️ " + L(39),
			function() {
				t.u(1)
			})]))
	}), new w(L(459), function() {
		t.u(4, 1, new v(L(459), l.e0 + "<br>" + b0.y.aPd("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(39),
				function() {
					t.u(1)
				})]))
	}), new w(L(460), function() {
		t.u(4, 1, new v(L(460), L(472) + "<br>" + L(473), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(474), function() {
			a0.a1.a27(), t.u(1)
		})]))
	}), new w(L(461), function() {
		a0.a1.a28(), t.u(4, 1, new v(L(475), L(476) + " " + b0.y.aPd("/privacy"), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		})]))
	})], vR = [new w("⬅️ " + L(39), function() {
		t.y.aDX()
	})], 8 === aa.a2K() && (aSJ.unshift(new w(L(331), function() {
		t.u(30)
	})), aSJ.unshift(new w(L(464), function() {
		2 <= bf.aTi && (t.x(), bg.a3H(), bh.dp = !0)
	}, 0, 1)), aSJ.unshift(new w(L(465), function() {
		!aD.hI && aM.qd(aD.et) && (bA.hZ.pq(), t.x(), aM.hJ) && aM.a3H()
	}, 0, 1)), aSJ.unshift(new w(L(466), function() {
		!aD.hI && aw.hy(aD.et) && (bX.a6Z(2), bA.hZ.hu(), t.x(), aM.hJ) && aM.a3H()
	}, 0, 1))), 1 === a0.id && 5 <= a0.e0 && aSJ.push(new w(L(462), function() {
		a0.a1.a29()
	})), aPI = new vQ(L(463), vR), aSI = new ra(aSJ, aPI.vW)
}

function aPC() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.sResourcesType && bC.rA.a3q(aQH.vw(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(326), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(284), L(285), L(286)],
			value: aD.data.sResourcesType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f6)), aD.data.sResourcesType = eG, t.u(28)
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc;
		1 === aD.data.sResourcesType && ((aPc = new qf).qi("Value"), aPc.qt(new rq({
			eG: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qx.push(aPc))
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.sResourcesType && ((aPc = new qf).qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.sResourcesData, 2)), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aPA() {
	var aQF, aQG, aQH, qx;

	function aQI() {
		aQK(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aPH()[19] = null, t.a2J()
	}

	function aQK() {
		2 === aD.data.tIncomeType && bC.rA.a3q(aQH.vw(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aQF.show(), this.resize()
	}, this.sJ = function() {
		aQF.sJ()
	}, this.resize = function() {
		aQF.resize(), aQG.resize()
	}, this.a3E = function(eh) {
		2 === eh && aQF.vX[0].rJ()
	}, aQF = new vQ(L(324), [new w("⬅️ " + L(39), aQI)]), aQG = new qv(aQF.vW, (function(qx) {
		var aPc = new qf;
		aPc.qi(L(283)), aPc.qq(new vM({
			t1: [L(284), L(285), L(286)],
			value: aD.data.tIncomeType
		}, function(eG) {
			aQK(), 2 !== eG || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f6), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eG, t.u(26)
		})), qx.push(aPc)
	}(qx = []), function(qx) {
		var aPc;
		1 === aD.data.tIncomeType && ((aPc = new qf).qi("Value"), aPc.qt(new rq({
			eG: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bN.iH(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qx.push(aPc))
	}(qx), function(qx) {
		var aPc;
		2 === aD.data.tIncomeType && ((aPc = new qf).qi("Data"), (aQH = new vo(0, 1, 0, 1)).vv(bC.s1.a5N(aD.data.tIncomeData, 4)), aPc.qt(aQH), qx.push(aPc))
	}(qx), qx))
}

function aP2() {
	var aPI, aPJ, qx;
	this.show = function() {
		aPI.show(), this.resize()
	}, this.sJ = function() {
		aPI.sJ()
	}, this.resize = function() {
		aPI.resize(), aPJ.resize()
	}, this.a3E = function(eh) {
		2 === eh && aPI.vX[0].rJ()
	}, aPI = new vQ(L(456), [new w("⬅️ " + L(39), function() {
		t.a2J()
	})]), aPJ = new qv(aPI.vW, ((qx = []).push(function() {
		function aPj() {
			aTN.button.textContent = L(184), aTt.e.readOnly = !1, aTu.e.readOnly = !1, aPi.rM(1), aPi.button.style.color = bD.o5
		}
		var aPc = new qf,
			aTs = (aPc.qo(b0.y.aPd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aPc.qi(L(477)), new rq({
				value: bl.eU.data[105].value,
				eG: -1
			})),
			aTt = (aTs.e.readOnly = !0, aPc.qt(aTs), aPc.qi(L(369), "0.8em"), new rq(bl.eU.data[148], 0, void 0, function(e) {
				aPh(bl.eU.data[149].value, e.target.value)
			})),
			aTu = (aPc.qt(aTt), aPc.qi(L(373), "0.8em"), new rq(bl.eU.data[149], 1, void 0, function(e) {
				aPh(e.target.value, bl.eU.data[148].value)
			})),
			aTN = (aPc.qt(aTu), new w(L(184), function(e) {
				return e.textContent === L(184) ? (e.textContent = L(185), aTt.e.readOnly = !0, aTu.e.readOnly = !0, aPi.rM(0), aPi.button.style.color = bD.p5, bl.pW.pX(149, aTu.e.value), aPh(bl.eU.data[149].value, bl.eU.data[
					148].value)) : aPj(), !0
			})),
			aPi = (aPc.qt(new sV([aTN.button])), new w(L(14), function(e) {
				return aTt.e.readOnly && b0.y.ed(0) && (bC.r2.vJ(e), aPj(), b0.aGP.aGQ({
					tM: 0,
					tI: bl.eU.data[148].value,
					value: parseInt(bl.eU.data[149].value, 10)
				})), !0
			}, 1)),
			ql = aPc.qk(),
			aPh = (aPc.qk(L(478)).style.fontWeight = "bold", function(fb, qj) {
				ql.innerHTML = t.y.aPl(fb, bl.eU.data[105].value, qj)
			});
		return aPc.qt(new sV([aPi.button])), aPh(bl.eU.data[149].value, bl.eU.data[148].value), aPc
	}()), qx))
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
	var aAX, aTw, aTx, aTy, aTv = !1;

	function aTz() {
		aTv = !0, aAX = -1, aTw = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aTw[aB] = !1;
		var yU = Math.floor(1 + .02 * h.min);
		aTx = new Array(4), (aTy = new Array(4))[1] = aTy[3] = aTx[0] = aTx[2] = 0, aTy[0] = aTx[3] = -yU, aTx[1] = aTy[2] = yU
	}

	function aU0() {
		if (-1 !== aAX)
			if (0 !== aD.a18 && aH.nn()) {
				for (var aU1 = !1, aB = 3; 0 <= aB; aB--) aTw[aB] && (aU1 = !0, im += aTx[aB], io += aTy[aB], af.a2g(aTx[aB], aTy[aB]), aS.aAD());
				aU1 ? bh.dp = !0 : ar.nd()
			} else ar.nd()
	}
	this.a3C = function(eG) {
		0 !== aD.a18 && aH.nn() && (aTv || aTz(), aTw[eG] = !0, -1 === aAX) && (aAX = setInterval(aU0, 20), aU0())
	}, this.a3F = function(eG) {
		if (0 !== aD.a18 && (aTv || aTz(), aTw[eG] = !1, -1 !== aAX)) {
			for (var aU1 = !1, aB = 3; 0 <= aB; aB--) aU1 = aU1 || aTw[aB];
			aU1 || this.nd()
		}
	}, this.nd = function() {
		if (aTv && -1 !== aAX) {
			for (var aB = 3; 0 <= aB; aB--) aTw[aB] = !1;
			clearInterval(aAX), aAX = -1
		}
	}
}

function cl() {
	this.y = new aU2, this.mm = new aU3, this.pU = new aU4, this.aFr = new aU5, this.ee = new aU6, this.aGP = new aU7, this.q9 = new aU8, this.aRZ = new aU9, this.a7j = new aUA, this.aUB = new aUC, this.aUD = new aUE, this.aUF = new aUG, this.aUH =
		new aUI, this.dh = function() {
			this.y.dh()
		}
}

function aU2() {
	var aUK, aUL;
	this.aHL = 5, this.aUJ = null, this.a2S = 0, this.a2I = 0;

	function aUT() {
		return 0 === aZ.aHH ? l.e2 ? 1 : 0 : aZ.aHH - 1
	}

	function aUW(a2F, a2P, aUV) {
		aUL[a2F].aTv = !0, aUQ(a2F), aUK[a2F] = new aUZ, aUK[a2F].dh(a2F, a2P, aUV)
	}

	function aUX(aB) {
		return aUL[aB].aTv && aUK[aB].aUX()
	}

	function aUQ(a2F) {
		aUL[a2F].eX = bh.eX, aUL[a2F].aUN = !1
	}
	this.dh = function() {
		this.aUJ = new Array(this.aHL);
		this.aUJ[0] = "territorial.io";
		var aMe = ay.aN0(0);
		ay.a5k(0);
		for (var aB = 1; aB < this.aHL; aB++) this.aUJ[aB] = aK.a0g() + ".territorial.io";
		for (ay.a5k(aMe), aUK = new Array(this.aHL), aUL = new Array(this.aHL), aB = this.aHL - 1; 0 <= aB; aB--) aUL[aB] = {
			aTv: !1,
			eX: 0,
			aUN: !1
		};
		this.aHM(0, 0, 0)
	}, this.aUO = function(aB) {
		return aUK[aB]
	}, this.ec = function() {
		for (var aB = this.aHL - 1; 0 <= aB; aB--) this.ed(aB) && bh.eX > aUL[aB].eX + 15e3 && (b0.pU.aUP(aB, aUL[aB].aUN), aUQ(aB));
		!this.ed(0) && bh.eX > aUL[0].eX + 8e3 && (aUL[0].eX = bh.eX, this.aHM(0, 0, 0))
	}, this.aRW = function(id) {
		return this.aHM(0, id, 0) && this.aUR(0)
	}, this.aTq = function(aUS) {
		return aUS ? aZ.aHI : aUT()
	}, this.a1Y = function() {
		return aUT() ? "game.territorial.io" : "territorial.io"
	}, this.aPd = function(aUU) {
		aUU = this.a1Y() + aUU;
		return "<a href='https://" + aUU + "' target='_blank'>" + aUU + "</a>"
	}, this.aHM = function(a2F, a2P, aUS) {
		aUS = this.aTq(aUS);
		if (aUL[a2F].aTv) {
			if (aUK[a2F].aUX()) return aUK[a2F].aUY(a2P), aUK[a2F].ed();
			aUK[a2F].sJ()
		}
		return aUW(a2F, a2P, aUS), !1
	}, this.aUa = function(a2F, a2P) {
		b0.ee.aUb(a2F)
	}, this.aUR = function(aB) {
		return this.ed(aB) && aUK[aB].aUR()
	}, this.aUc = function(aB) {
		aUK[aB].aUc()
	}, this.ed = function(aB) {
		return aUL[aB].aTv && aUK[aB].ed()
	}, this.send = function(a2F, aC) {
		0 !== a2F && aUQ(a2F), aUK[a2F].send(aC)
	}, this.a2x = function(a2F) {
		8 === aa.a2K() && (aUL[a2F].aUN = !0, b0.mm.aUd = !0)
	}, this.close = function(a2F, aUe) {
		aUX(a2F) && aUK[a2F].close(aUe)
	}, this.aUf = function(a2F, aUe) {
		o.a2V(aUe), aUX(a2F) && aUK[a2F].close(aUe)
	}, this.a2W = function(aUe) {
		for (var aB = this.aHL - 1; 0 <= aB; aB--) this.close(aB, aUe)
	}, this.aUg = function(a2F, aUe) {
		for (var aB = this.aHL - 1; 0 <= aB; aB--) aB !== a2F && this.close(aB, aUe)
	}, this.a5v = function() {
		0 === this.a2S && (aD.ko || aD.hI) || this.close(this.a2S, 3246)
	}, this.aUh = function(a2F, e) {
		aUK[a2F].sJ(), o.a2E(a2F, e.code)
	}
}

function aU3() {
	this.aUd = !1, this.ec = function() {
		bh.kR() % 250 != 249 || aD.hI || (b0.ee.aUi(+(this.aUd && ag.n4[aD.et]), al.l0 + bP.y.mK), this.aUd = !1)
	}
}

function aUA() {
	this.aUk = function(a2F, aC) {
		bJ.dh(aC), 0 === bJ.size ? b0.y.aUf(a2F, 3205) : ((0 === bJ.qA(1) ? function(a2F) {
			var aUo = bJ.qA(6);
			0 === aUo ? function(a2F) {
					if (0 === a2F && 8 !== aa.a2K()) {
						t.y.aT0();
						for (var aV3 = bJ.qA(12), aV4 = bJ.qA(6), g = new Array(aV3), aB = 0; aB < aV3; aB++) g[aB] = bJ.qA(aV4);
						aT.aAd(g)
					}
				}(a2F) : 2 === aUo ? b0.aUB.aUq(a2F) : 3 === aUo || 4 === aUo ? ax.dh() : 5 === aUo ? b0.aUD.aUr() : 9 === aUo ? b0.aUD.aUs(a2F) : 10 === aUo ? b0.aUF.aUt() : 11 === aUo ? b0.aUD.aUu(a2F) : 12 === aUo ? b0.aUF.aUv() :
				13 === aUo ? b0.aUH.aUw() : 14 === aUo ? b0.aUH.aUx() : 15 === aUo ? b0.aUD.aUy() : 16 === aUo ? b0.aUB.aUz(a2F) : 17 === aUo ? b0.aUB.aV0(a2F) : 19 === aUo ? b0.aUB.aV1(a2F) : 20 === aUo && b0.aUD.aV2(a2F)
		} : function(a2F) {
			if (8 !== aa.a2K() && !ax.aHq()) return;
			if (a2F !== b0.y.a2S) b0.y.aUf(a2F, 3244);
			else if (0 === bJ.qA(1)) bh.a1I.aV5(bJ.aC);
			else {
				var aB, a2F = bJ.qA(2);
				if (0 === a2F) {
					var pl, pU = bJ.qA(9);
					0 !== ag.n4[pU] && 0 !== ag.n4[aD.et] && (pl = bJ.qA(10), aN.pk(pU, aD.et, pl), af.qb(pU, 1, pl))
				} else if (1 === a2F) ! function() {
					var pU = bJ.qA(9);
					0 !== ag.n4[pU] && 0 !== ag.n4[aD.et] && b5.aMF(0, [pU], !0) && aN.q2(pU, 1)
				}();
				else if (2 === a2F) ! function() {
					var pU = bJ.qA(9),
						target = bJ.qA(9);
					0 !== ag.n4[pU] && 0 !== ag.n4[target] && 0 !== ag.n4[aD.et] && b5.aMF(1, [pU], !0) && (af.qb(pU, 3, 96), af.qb(target, 4, 96), aN.a7q(pU, target))
				}();
				else if (l.a9 && !l.aA) {
					var f9 = 540;
					for (bF.a7(17287), bF.a8(1, 0), bF.a8(6, 10), f9 = Math.min(bA.pQ.qC.length, 540), aB = 0; aB < f9; aB++) bF.aVB(32, bA.pQ.qC[aB]);
					b0.y.send(b0.y.a2S, bF.aC)
				}
			}
		})(a2F), bh.aUn())
	}
}

function aUG() {
	this.aUt = function() {
		bl.y.wc(), bl.pW.pX(105, bH.tN.tO(bH.tN.tP(5))), bl.pW.pX(106, bH.tN.tO(bH.tN.tP(15))), bl.pW.pX(109, 0), bl.pW.pX(108, bl.eU.data[109].value), bl.pW.pX(111, bl.eU.data[109].value + 1), bl.pW.pX(107, 0), bl.pW.pX(110, "")
	}, this.aUv = function() {
		var data;
		bJ.size < bF.aVC(29) ? b0.y.aUf(0, 3254) : ((data = {
			tJ: bJ.qA(30),
			wq: bJ.qA(16),
			wr: bJ.qA(30),
			ws: bJ.qA(30),
			wt: bJ.qA(30),
			wu: bJ.aVD(32),
			username: bI.x7.xP(5),
			wv: bI.x7.xP(3),
			ww: bI.x7.xP(3),
			wx: bJ.aVD(32),
			wy: bJ.aVD(32),
			wz: bJ.qA(30),
			x0: bJ.aVD(32),
			x1: bJ.aVD(32),
			x2: bJ.aVD(32),
			x3: bJ.aVD(32),
			aPq: bJ.aVD(32),
			aPr: bJ.aVD(30),
			aQ5: bJ.aVD(32),
			aQ6: bI.x7.xP(3),
			aPy: bJ.aVD(2),
			aQ0: bJ.aVD(10),
			aPw: bI.x7.xP(8),
			aPz: bJ.aVD(5),
			aPf: bJ.qA(30),
			aPp: bJ.qA(30),
			a1b: bJ.aVD(32),
			aPu: bJ.qA(3),
			aPt: bJ.qA(8),
			aQ7: bJ.qA(1),
			aQ8: bJ.qA(1)
		}).aQ7 && (data.aQ9 = bJ.aVD(32), data.aQA = bJ.qA(30), data.aQB = bJ.qA(30), data.aQC = bJ.qA(1)), 8 === t.tK && (25 === t.a2O().aRV ? (data.aPK = !0, t.y.aOz = data, t.a2O().aDW(25, !1)) : (data.aPK = !1, bl.pW.pX(160, +(data
			.aQ7 && data.aQC)), data.tI = bl.eU.data[105].value, t.y.aOw = data, bl.pW.wp(data), t.a2O().aDW(16, !0))))
	}
}

function aUI() {
	this.aUw = function() {
		var aB;
		if (bJ.size < bF.aVC(23)) b0.y.aUf(0, 3259);
		else {
			var td = bJ.qA(6),
				f9 = bJ.qA(10),
				data = [];
			if (9 === td || 10 === td || 11 === td) {
				for (aB = 0; aB < f9; aB++) data.push([bJ.qA(30), bI.x7.xP(5), bJ.aVD(32), 0, bJ.qA(30)]);
				8 === t.tK && t.a2O().aDW(21, !0, {
					td: td,
					data: data
				})
			} else if (12 === td) {
				for (aB = 0; aB < f9; aB++) data.push([bJ.qA(20), bJ.qA(30), bJ.qA(30), bJ.aVD(32), bJ.qA(30), bI.x7.xP(5), bI.x7.xP(5)]);
				8 === t.tK && t.a2O().aDW(21, !0, {
					td: td,
					data: data
				})
			} else {
				var i6 = bJ.qA(16);
				if (bJ.aVE(39 + 16 * i6 + f9 * (0 === td ? 111 : 1 === td ? 101 : 2 === td || 3 === td ? 127 : 212))) {
					if (0 === td)
						for (aB = 0; aB < f9; aB++) data.push([bJ.qA(30), bI.x5.x9(bJ.qA(5)), bJ.qA(16), bJ.qA(30), bJ.qA(30)]);
					else if (1 === td)
						for (aB = 0; aB < f9; aB++) data.push([bJ.qA(16), bI.x5.x9(bJ.qA(3)), bJ.qA(16), bI.x5.x9(bJ.qA(5)), bJ.qA(31), bJ.qA(30)]);
					else if (2 === td || 3 === td)
						for (aB = 0; aB < f9; aB++) data.push([bJ.qA(30), bI.x5.x9(bJ.qA(5)), bJ.aVD(32), bJ.qA(30), bJ.qA(30)]);
					else
						for (aB = 0; aB < f9; aB++) data.push([bJ.qA(20), bJ.qA(30), bJ.qA(30), bJ.qA(30), bJ.qA(30), bJ.aVD(32), bJ.qA(30), bI.x5.x9(bJ.qA(5)), bI.x5.x9(bJ.qA(5))]);
					8 === t.tK && t.a2O().aDW(21, !0, {
						td: td,
						data: data
					})
				} else b0.y.aUf(0, 3260)
			}
		}
	}, this.aUx = function() {
		if (bJ.size < bF.aVC(29)) b0.y.aUf(0, 3265);
		else {
			var aVF = bJ.qA(4),
				aVG = bJ.qA(7),
				aVH = bJ.qA(11);
			if (bJ.aVE(29 + 16 * aVG + 16 * aVH + 11 * aVF)) {
				for (var data = [], aB = 0; aB < aVF; aB++) {
					for (var a1q = bI.x5.x9(bJ.qA(3)), aVI = bJ.qA(8), aQj = [], fS = 0; fS < aVI; fS++) aQj.push(bJ.qA(16));
					data.push({
						name: "[" + a1q + "]",
						aQj: aQj
					})
				}
				8 === t.tK && t.a2O().aDW(23, !0, data)
			} else b0.y.aUf(0, 3266)
		}
	}
}

function aUC() {
	function aVK() {
		var id = bJ.qA(3);
		return 0 === id ? {
			id: id,
			tI: bJ.qA(30),
			r: bp.aDx.aFw(bI.x7.xP(7))
		} : 1 === id ? {
			id: id,
			tI: bJ.qA(30),
			aEy: bJ.qA(3),
			value: bJ.qA(30),
			target: bJ.qA(30)
		} : 2 === id ? {
			id: id,
			tI: bJ.qA(30),
			aEy: bJ.qA(3)
		} : 3 === id ? {
			id: id,
			tI: bJ.qA(30),
			aEy: bJ.qA(3),
			value: bJ.qA(4),
			target: bJ.qA(30)
		} : 4 === id ? {
			id: id,
			tI: bJ.qA(30),
			aEy: bJ.qA(3),
			target: bJ.qA(30)
		} : 5 === id ? {
			id: id,
			aEy: bJ.qA(6)
		} : 6 === id ? {
			id: id,
			value: bJ.qA(17)
		} : null
	}
	this.aUq = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3239);
		else if (6 !== aa.a2K()) b0.y.close(a2F, 3271);
		else {
			bp.dh();
			for (var aB = 0; aB < 4; aB++) {
				var s7 = bp.y.s8[aB],
					playerCount = (s7.uC = bJ.qA(10), s7.ep = bJ.qA(6), s7.mapSeed = bJ.qA(14), s7.aEj = bJ.qA(4), s7.aGT = bJ.qA(6), s7.aGU = bJ.qA(14), s7.aGV = bJ.qA(4), s7.aEp = bJ.qA(1), s7.aFX = bJ.qA(12), s7.spawningSeed = bJ.qA(14), bJ
						.qA(16));
				bp.uT.uV[aB] = bJ.qA(16);
				for (var fS = 0; fS < playerCount; fS++) bp.uT.aEB(aB, bJ.qA(30), bI.x7.xP(5), bJ.qA(4), bJ.qA(30), bJ.qA(7), bJ.qA(16), bJ.qA(18), bJ.qA(11), bJ.qA(12))
			}
			t.u(29), bp.y.aFP(!0)
		}
	}, this.aUz = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3239);
		else if (bp.a2H) {
			bp.y.aFN[0] = bJ.qA(20), bp.y.aFN[1] = bJ.qA(20);
			for (var aVJ = bJ.qA(16), fS = 0; fS < aVJ; fS++) {
				var id = bJ.qA(3);
				0 === id ? bp.uT.aEB(bJ.qA(2), bJ.qA(30), bI.x7.xP(5), 0, 1234566, 127, 0, bJ.qA(18), 0, bJ.qA(12)) : 1 === id ? bp.uT.aEU(bJ.qA(16), bJ.qA(2)) : 2 === id ? bp.uT.aEQ(bJ.qA(16), bJ.qA(2), bJ.qA(2)) : 3 === id ? bp.uT.aET(bJ.qA(
					16), bJ.qA(2)) : 4 === id ? bp.uT.aEJ(bJ.qA(16), bJ.qA(2), bJ.qA(4), bJ.qA(30), bJ.qA(7), bJ.qA(16), bJ.qA(11), bJ.qA(18)) : 5 === id && bp.uT.aEK(bJ.qA(16), bJ.qA(2), bJ.qA(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var s7 = bp.y.s8[aB];
				if (s7.uC = bJ.qA(10), s7.aGT = bJ.qA(6), s7.aGU = bJ.qA(14), s7.aGV = bJ.qA(4), 0 === s7.uC) {
					if (s7.a2S = bJ.qA(10), s7.aEn = bJ.qA(10), bp.aDz.dq(aB)) return;
					s7.ep = bJ.qA(6), s7.mapSeed = bJ.qA(14), s7.aEj = bJ.qA(4), s7.aEp = bJ.qA(1), s7.aFX = bJ.qA(12), s7.spawningSeed = bJ.qA(14), s7.aGW.push(s7.aGW[0]), s7.aGW.shift()
				}
			}
			bp.y.aEf()
		} else b0.y.close(a2F, 3251)
	}, this.aV0 = function(a2F) {
		if (a2F !== b0.y.a2I) b0.y.close(a2F, 3272);
		else if (bp.a2H) {
			for (var s5 = bJ.qA(4), s7 = bp.y.s8[s5], s9 = s7.s9, uj = (s7.sA = bJ.qA(20), bJ.qA(6)), aB = 0; aB < uj; aB++) {
				var aGn = aVK();
				bp.sI.aGm(aGn), s9.push(aGn)
			}
			bp.y.aFY(s5)
		} else b0.y.close(a2F, 3273)
	}, this.aV1 = function(a2F) {
		a2F !== b0.y.a2I ? b0.y.close(a2F, 3276) : bp.a2H ? bp.message.aEd(aVK()) : b0.y.close(a2F, 3277)
	}
}

function aUE() {
	this.aUr = function() {
		for (var id = bJ.qA(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bJ.qA(8), bJ.qA(8), bJ.qA(8)]);
		var ej = bI.x7.xP(8);
		bW.eQ.eg({
			id: id,
			colors: colors,
			ej: ej
		})
	}, this.aV2 = function(a2F) {
		var fC = bJ.qA(5),
			fC = bk.aVL.aVM(fC, bJ.qA(30), bJ.qA(30), bJ.qA(30));
		b0.ee.aVN(a2F, fC)
	}, this.aUs = function(a2F) {
		var aV7, rY, aVO;
		bJ.aVE(165) ? (aV7 = bJ.qA(3), rY = bk.aVL.ec(bJ.qA(30), bJ.qA(30)), aVO = bk.aVL.aVM(bJ.qA(5), bJ.qA(30), bJ.qA(30), bJ.qA(30)), b0.ee.aVP(a2F, rY, aVO, aV7), 0 < aV7 || (0 === a2F && 0 === bl.eU.data[105].value.length ? b0.ee.ef(0) : b0
			.aGP.aVQ(a2F), 4 === b0.y.aUO(a2F).aVR() ? 6 === aa.a2K() && b0.aFr.aHN(a2F) : 5 !== b0.y.aUO(a2F).aVR() || 8 !== aa.a2K() && 10 !== aa.a2K() || b0.pU.aHm())) : b0.y.aUf(a2F, 3269)
	}, this.aUu = function(a2F) {
		var id = bJ.qA(6);
		1 === id ? (bl.pW.pX(160, bJ.qA(30)), b0.y.aUc(a2F), aT.aAZ || b0.ee.ef(1), b9.aDS(), 8 === t.tK && t.a2O().aRj()) : 21 === id ? 8 === t.tK && t.a2O().aDW(17) : 22 === id && (bl.pW.pX(106, bl.eU.data[110].value), bl.pW.pX(110, ""), 8 ===
			t.tK) && t.a2O().aDW(15)
	}, this.aUy = function() {
		var f9 = bJ.qA(16),
			aVS = bJ.qA(16);
		if (bJ.aVE(55 + 10 * f9 + 16 * aVS)) {
			for (var g = [], aB = 0; aB < f9; aB++) g.push(bI.x5.x9(bJ.qA(10)));
			b9.aDV(g)
		} else b0.y.aUf(0, 3270)
	}
}

function aU4() {
	this.aUP = function(a2F, aUN) {
		bF.a7(11), bF.a8(1, 0), bF.a8(6, 4), bF.a8(1, aUN ? 1 : 0), bF.a8(3, 0 === aD.a18 ? bp.a2H ? 6 : 0 : aD.hI ? 1 : aD.ko ? 7 : aD.km < 7 ? 2 : 8 === aD.km ? 4 : 9 === aD.km ? 5 : 3), b0.y.send(a2F, bF.aC)
	}, this.aHm = function() {
		bF.a7(58), bF.a8(1, 0), bF.a8(6, 5), bF.a8(8, b0.y.a2I), bF.a8(10, ax.aEn), bF.a8(9, ax.aHf), bF.a8(10, l.e4), bF.a8(14, l.dt), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pV = function(ev) {
		bF.a7(27), bF.a8(1, 1), bF.a8(4, 0), bF.a8(22, ev), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pY = function(il, jd) {
		bF.a7(25), bF.a8(1, 1), bF.a8(4, 1), bF.a8(10, il), bF.a8(10, jd), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pc = function(il, pa) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 2), bF.a8(10, il), bF.a8(9, pa), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pe = function(il, pd) {
		bF.a7(42), bF.a8(1, 1), bF.a8(4, 3), bF.a8(10, il), bF.a8(27, pd), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pg = function(il, nS) {
		bF.a7(31), bF.a8(1, 1), bF.a8(4, 4), bF.a8(10, il), bF.a8(16, nS), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pj = function(jd) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 5), bF.a8(10, jd), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pn = function(eG) {
		bF.a7(15), bF.a8(1, 1), bF.a8(4, 6), bF.a8(10, eG), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pp = function(po) {
		bF.a7(6), bF.a8(1, 1), bF.a8(4, 7), bF.a8(1, po), b0.y.send(b0.y.a2S, bF.aC)
	}, this.pr = function() {
		bF.a7(5), bF.a8(1, 1), bF.a8(4, 8), b0.y.send(b0.y.a2S, bF.aC)
	}, this.ps = function(il, ev, jd) {
		bF.a7(47), bF.a8(1, 1), bF.a8(4, 10), bF.a8(10, il), bF.a8(10, jd), bF.a8(22, ev), b0.y.send(b0.y.a2S, bF.aC)
	}, this.q0 = function(aVT, aVU) {
		bF.a7(24), bF.a8(1, 1), bF.a8(4, 15), bF.a8(9, aVU), bF.a8(10, aVT), b0.y.send(b0.y.a2S, bF.aC)
	}, this.q3 = function(a7j) {
		bF.a7(14), bF.a8(1, 1), bF.a8(4, 14), bF.a8(9, a7j), b0.y.send(b0.y.a2S, bF.aC)
	}, this.q7 = function(aVV, target) {
		var aB, f9 = aVV.length;
		for (bF.a7(14 + 9 * f9), bF.a8(1, 1), bF.a8(4, 13), bF.a8(9, target), aB = 0; aB < f9; aB++) bF.a8(9, aVV[aB]);
		b0.y.send(b0.y.a2S, bF.aC)
	}
}

function aU7() {
	this.aVW = function() {
		bF.a7(39), bF.a8(1, 0), bF.a8(6, 16), b0.ee.aVX(), b0.y.send(0, bF.aC)
	}, this.aVQ = function(a2F) {
		bF.a7(127), bF.a8(1, 0), bF.a8(6, 17), bI.tN.xL(bl.eU.data[105].value, 5), bI.tN.xL(bl.eU.data[106].value, 15), b0.y.send(a2F, bF.aC)
	}, this.aRk = function() {
		bF.a7(97), bF.a8(1, 0), bF.a8(6, 18), bI.tN.xL(bl.eU.data[110].value, 15), b0.y.send(0, bF.aC)
	}, this.aRh = function(a50) {
		var f9 = a50.qj.length;
		bF.a7(21 + 16 * f9), bF.a8(1, 0), bF.a8(6, 29), bF.a8(6, a50.tM), bF.a8(8, f9), bH.x5.xK(a50.qj), b0.y.send(0, bF.aC)
	}, this.aTO = function(wu, colors, aVZ, ej) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 16), bG.a8(20, Math.min(wu, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fS = 0; fS < 3; fS++) bG.a8(8, colors[aB][fS]);
		wu = b9.data.aDZ(aVZ.trim());
		bG.a8(8, -1 === wu ? 255 : wu), bH.x7.a0a(ej.trim().substring(0, 180), 8, bG), b0.y.send(0, bG.aVa())
	}, this.aQ1 = function(data) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 25), bF.a8(6, data.tM), bI.tN.xL(data.tI, 5), b0.y.send(0, bF.aC)
	}, this.aGQ = function(data) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 27), bF.a8(6, data.tM), bI.tN.xL(data.tI, 5), bF.aVB(32, data.value), b0.y.send(0, bF.aC)
	}
}

function aU8() {
	this.q8 = function() {
		for (var f9 = aD.kU, a0x = bT.result.a0x, lP = a0x.length, a1j = (bF.a7(17 + 16 * f9 + 33 * lP), bF.a8(1, 1), bF.a8(4, 12), bF.a8(10, lP), bF.a8(1, +(2 === aD.a15)), bF.a8(1, aD.a1Q % 2), ag.a1j), aB = 0; aB < f9; aB++) bF.a8(16, a1j[
		aB]);
		for (var gx = ag.gx, aB = 0; aB < lP; aB++) {
			var gh = a0x[aB];
			bF.a8(9, gh), bF.a8(24, gx[gh])
		}
		b0.y.send(b0.y.a2S, bF.aC)
	}
}

function aU9() {
	this.aRa = function(td, te, tf) {
		bF.a7(75), bF.a8(1, 0), bF.a8(6, 21), bF.a8(6, td), bF.a8(1, +(te < 0)), bF.a8(1, +(tf < 0)), bF.a8(30, Math.abs(te)), bF.a8(30, Math.abs(tf)), b0.y.send(0, bF.aC)
	}, this.aRb = function(td, aRc, aRd) {
		bF.a7(18 + 16 * aRc.length + 30), bF.a8(1, 0), bF.a8(6, 22), bF.a8(6, td), b0.ee.aVb(aRc), bF.a8(30, aRd), b0.y.send(0, bF.aC)
	}, this.aRg = function(td, aRc, aRd) {
		bF.a7(73), bF.a8(1, 0), bF.a8(6, 28), bF.a8(6, td), bI.tN.xL(aRc, 5), bF.a8(30, aRd), b0.y.send(0, bF.aC)
	}, this.aRe = function(aQi, a1p) {
		for (var f9 = a1p.length, i6 = 0, aB = 0; aB < f9; aB++) i6 += a1p[aB].length;
		for (bF.a7(21 + 3 * f9 + 16 * i6), bF.a8(1, 0), bF.a8(6, 23), bF.a8(3, aQi), bF.a8(4, f9), bF.a8(7, i6), aB = 0; aB < f9; aB++) bF.a8(3, a1p[aB].length), bH.x5.xK(a1p[aB]);
		b0.y.send(0, bF.aC)
	}, this.aRf = function(aQi, te, tf) {
		bF.a7(52), bF.a8(1, 0), bF.a8(6, 24), bF.a8(3, aQi), bF.a8(1, +(te < 0)), bF.a8(1, +(tf < 0)), bF.a8(20, Math.abs(te)), bF.a8(20, Math.abs(tf)), b0.y.send(0, bF.aC)
	}
}

function aU5() {
	this.aHN = function(a2F) {
		var username = bl.eU.data[122].value.slice(0, 20),
			username = (bF.a7(24 + 16 * username.length + 18 + bk.aVc.qA()), bF.a8(1, 0), bF.a8(6, 1), bF.a8(10, l.e4), bF.a8(2, bl.eU.data[158].value), b0.ee.aVb(username), bC.color.a45(bl.y.wj()));
		bF.a8(6, username[0]), bF.a8(6, username[1]), bF.a8(6, username[2]), bk.aVc.a0a(), b0.y.a2I = a2F, b0.y.send(a2F, bF.aC)
	}, this.aFs = function(aVe, a50) {
		bG.dh(), bG.a8(1, 0), bG.a8(6, 2), bG.a8(3, aVe), 2 === aVe ? bG.a8(2, a50) : 3 === aVe ? bH.x7.a0a(a50, 7, bG) : 5 === aVe && (bG.a8(3, a50.id), bG.a8(3, a50.value), bG.a8(30, a50.tI)), b0.y.send(b0.y.a2I, bG.aVa())
	}
}

function aU6() {
	this.aUb = function(a2F) {
		var aVj;
		bF.a7(55), bF.a8(1, 0), bF.a8(6, 13), bF.a8(14, l.dt), bF.a8(4, a0.id), bF.a8(7, a0.e0), bF.a8(1, +l.a9), bF.a8(1, +l.aA), bF.a8(5, (new Date).getHours() % 24), aVj = b9.aDY(), bF.a8(8, aVj[0]), bF.a8(8, aVj[1]), b0.y.send(a2F, bF.aC)
	}, this.aVP = function(a2F, rY, aVO, aV7) {
		bF.a7(100), bF.a8(1, 0), bF.a8(6, 14), bF.a8(3, aV7), bF.a8(30, rY[0]), bF.a8(30, rY[1]), bF.a8(30, aVO), b0.y.send(a2F, bF.aC)
	}, this.aVN = function(a2F, rY) {
		bF.a7(37), bF.a8(1, 0), bF.a8(6, 30), bF.a8(30, rY), b0.y.send(a2F, bF.aC)
	}, this.ef = function(id) {
		bF.a7(13), bF.a8(1, 0), bF.a8(6, 15), bF.a8(6, id), b0.y.send(0, bF.aC)
	}, this.uz = function(id, value) {
		bF.a7(43), bF.a8(1, 0), bF.a8(6, 3), bF.a8(6, id), bF.a8(30, value), b0.y.send(0, bF.aC)
	}, this.aDU = function(id, qj) {
		var f9 = Math.min(qj.length, 63);
		bF.a7(19 + 16 * f9), bF.a8(1, 0), bF.a8(6, 26), bF.a8(6, id), bF.a8(6, f9), bH.x5.xK(qj), b0.y.send(0, bF.aC)
	}, this.aVg = function(aSz, qu) {
		bF.a7(7 + 26 * qu.length), bF.a8(1, 0), bF.a8(6, 9);
		for (var aB = 0; aB < qu.length; aB++) bF.a8(16, qu[aB][0]), bF.a8(10, qu[aB][1]);
		b0.y.send(aSz, bF.aC)
	}, this.aUi = function(aVh, aVi) {
		bF.a7(20), bF.a8(1, 0), bF.a8(6, 19), bF.a8(1, aVh), bF.a8(12, aVi), b0.y.send(b0.y.a2S, bF.aC)
	}, this.aVb = function(username) {
		bF.a8(5, username.length), bH.x5.xK(username)
	}
}

function aUZ() {
	var aVk, aVl, b, aVm = ["wss://", "/s50/", "/s51/", "/s52/"],
		aVn = 0;

	function aUa() {
		b0.y.aUa(aVk, aVl)
	}

	function aVq(e) {
		b0.a7j.aUk(aVk, new Uint8Array(e.data))
	}

	function aVr() {}

	function aUh(e) {
		b0.y.aUh(aVk, e)
	}
	this.dh = function(eG, a2P, aUV) {
		aVk = eG, aVl = a2P,
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
	}, this.aUY = function(a2P) {
		aVl = a2P
	}, this.aVR = function() {
		return aVl
	}, this.send = function(aC) {
		this.ed() && b.send(aC)
	}, this.close = function(aUe) {
		this.aUX() && (this.sJ(), b.close(aUe))
	}, this.sJ = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dO() {
	var gap, aVs = !1,
		aVt = 0,
		i = 0,
		tR = 0,
		canvas = null,
		zH = null,
		a3f = null;

	function aVx() {
		for (var aB = aD.yJ; 0 <= aB; aB--) a3f[aB] = 0;
		for (aB = al.l0 - 1; 0 <= aB; aB--) a3f[bi.f7[al.l5[aB]]] += ag.gx[al.l5[aB]];
		aVs = !0
	}

	function aVv() {
		for (var aW2, aW0 = 0, f9 = 0, eh = Math.floor(i / 2), eF = Math.floor(tR / 2), aW1 = 1.5 * Math.PI, aB = aD.yJ; 0 <= aB; aB--) f9 += a3f[aB], 0 === a3f[aB] && aW0++;
		if (aVs = !1, zH.clearRect(0, 0, i, i), 0 < f9)
			if (aW0 === aD.yJ) {
				for (aB = aD.yJ; 0 <= aB; aB--)
					if (0 < a3f[aB]) {
						! function(aB, eh, eF) {
							zH.fillStyle = bi.aW9[bi.kr[aB]], zH.beginPath(), zH.arc(eh, eh, eF, 0, 2 * Math.PI), zH.fill()
						}(aB, eh, eF);
						break
					}!
				function(eh) {
					var fontSize = eh / 3;
					zH.font = bC.r2.sr(1, fontSize), zH.fillStyle = bD.o5, zH.fillText("100%", eh, eh + .1 * fontSize)
				}(eh)
			} else {
				for (aB = 0; aB <= aD.yJ; aB++) 0 < a3f[aB] && (! function(aB, eh, eF, aW1, aW2) {
					zH.fillStyle = bi.aW9[bi.kr[aB]], zH.beginPath(), zH.arc(eh, eh, eF, aW1, aW2), zH.lineTo(eh, eh), zH.fill()
				}(aB, eh, eF, aW1, aW2 = aW1 + 2 * Math.PI * a3f[aB] / f9), function(eh, eF, aW1, aW2) {
					var fb = (aW2 - aW1) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eF * Math.min(fb, .37);
					fontSize < 8 || (aW1 = (aW1 + aW2) / 2, aW2 = (__fx.settings.detailedTeamPercentage ? (100 * fb).toFixed(2) : Math.floor(100 * fb + .5)) + "%", eF *= .525 - Math.max(.6 * (fb - .7), 0), zH.font = bC.r2.sr(1, fontSize), zH
						.fillStyle = bD.o5, zH.fillText(aW2, eh + Math.cos(aW1) * eF, eh + Math.cos(aW1 + 1.5 * Math.PI) * eF))
				}(eh, eF, aW1, aW2), 0 !== aB && aW7(eh, eF, aW1), aW1 = aW2);
				aW7(eh, eF, 1.5 * Math.PI)
			}!
		function(eh, eF) {
			zH.beginPath(), zH.arc(eh, eh, eF, 0, 2 * Math.PI), zH.stroke()
		}(eh, eF)
	}

	function aW7(eh, eF, aWA) {
		zH.beginPath(), zH.moveTo(eh, eh), zH.lineTo(eh + Math.cos(aWA) * eF, eh + Math.cos(aWA + 1.5 * Math.PI) * eF), zH.stroke()
	}
	this.dh = function() {
		if (aD.i3) {
			aVt = 0, a3f = new Uint32Array(aD.yJ + 1);
			for (var aB = aD.yJ; 0 <= aB; aB--) a3f[aB] = 0;
			for (aB = al.l0 - 1; 0 <= aB; aB--) a3f[bi.f7[al.l5[aB]]] += 1;
			this.resize()
		} else a3f = zH = canvas = null
	}, this.a97 = function() {
		return i
	}, this.resize = function() {
		aD.i3 && (i = Math.floor(.95 * (a0.a1.iI() && !aD.nY ? .18 * h.min : .13 * h.iJ)), i = (i *= 1 + (.5 + .2 * a0.a1.iI()) * aD.nY) + i % 2, gap = Math.max(1, .015 * i), tR = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (zH = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zH.strokeStyle = bD.o5, bC.r2.textAlign(zH, 1), bC.r2.textBaseline(zH, 1), aVv())
	}, this.l1 = function(aVw) {
		aVw && aVx();
		var eY, aVw = this.l3();
		return bi.kr[aVw] || (aVw = function() {
			for (var l2 = -1, aB = aD.yJ; 1 <= aB; aB--)(-1 === l2 || a3f[aB] > a3f[l2]) && (l2 = aB);
			return l2
		}(), eY = ag.gx[m5[0]], -1 !== aVw && a3f[aVw] > eY) ? a3f[aVw] : eY
	}, this.a22 = function() {
		return aVt = 31, this.ec(), this.l3()
	}, this.l3 = function() {
		for (var l2 = 0, aB = aD.yJ; 0 < aB; aB--) a3f[aB] > a3f[l2] && (l2 = aB);
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
	}, this.a4Y = function() {
		for (var gc = 0, aB = aD.yJ; 0 <= aB; aB--) gc += 0 < a3f[aB];
		return gc
	}, this.ec = function() {
		aD.i3 && 32 <= ++aVt && (aVt = 0, aVx())
	}, this.mr = function() {
		aD.i3 && aVs && aVv()
	}, this.vf = function() {
		aD.i3 && (aD.nY ? vg.drawImage(canvas, be.gap, be.gap) : vg.drawImage(canvas, be.gap, a96 + 2 * be.gap))
	}
}

function de() {
	function aWG(fG, f9, fI, a0k, aAO, fZ) {
		if (!(fI < 1 || aAO < fI))
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (a0k(en)) return en >> 2;
				fG += fZ
			}
		return -1
	}

	function aWK(fI, f9, fG, a0k, aWE, fZ) {
		if (!(fG < 1 || aWE < fG)) {
			f9 = Math.max(f9, 0);
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (a0k(en)) return en >> 2;
				fI += fZ
			}
		}
		return -1
	}

	function aWO(ia, ib, aWB) {
		return -1 !== ib && (-1 === ia || bO.ic(ib, aWB) < bO.ic(ia, aWB)) ? ib : ia
	}
	this.hY = function(aWB) {
		return this.a1C(aWB, function(en) {
			return ac.f4(en)
		})
	}, this.he = function(aWB) {
		return this.a1C(aWB, function(en) {
			return ac.aIW(en, aD.et)
		})
	}, this.a1C = function(aWB, a0k) {
		return function(aWB, aWC, a0k) {
			for (var hO = bO.fH(aWB), hQ = bO.fJ(aWB), aWE = bU.fK - 2, aAO = bU.fL - 2, aWF = -1, fC = 0; fC < aWC; fC++) {
				var aAN = Math.max(hO - fC, 1),
					aN8 = Math.max(hQ - fC, 1),
					yu = Math.min(hO + fC, aWE),
					yt = Math.min(hQ + fC, aAO),
					ia = aWG(hO, yu - hO, hQ - fC, a0k, aAO, 1),
					ib = aWG(hO - 1, hO - aAN - 1, hQ - fC, a0k, aAO, -1),
					yu = aWG(hO, yu - hO, hQ + fC, a0k, aAO, 1),
					aAN = aWG(hO - 1, hO - aAN - 1, hQ + fC, a0k, aAO, -1),
					aWJ = aWK(hQ, yt - hQ - 1, hO - fC, a0k, aWE, 1),
					aWL = aWK(hQ - 1, hQ - aN8 - 2, hO - fC, a0k, aWE, -1),
					yt = aWK(hQ, yt - hQ - 1, hO + fC, a0k, aWE, 1),
					aN8 = aWK(hQ - 1, hQ - aN8 - 2, hO + fC, a0k, aWE, -1);
				if (aWF = aWO(aWF, ia, aWB), aWF = aWO(aWF, ib, aWB), aWF = aWO(aWF, yu, aWB), aWF = aWO(aWF, aAN, aWB), aWF = aWO(aWF, aWJ, aWB), aWF = aWO(aWF, aWL, aWB), aWF = aWO(aWF, yt, aWB), 0 <= (aWF = aWO(aWF, aN8, aWB)) && fC *
					fC >= bO.ic(aWF, aWB)) return aWF
			}
			return -1
		}(aWB, bO.iG(), a0k)
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
				return bK.clear(), t.u(8, t.tK, new tL(1e3, {
					tM: 0,
					tI: value,
					tJ: 0
				})), 1
			}()) {
			var value = aWQ("replay");
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
	}, this.aQE = function(key, value) {
		if (0 === a0.id) try {
			var a2C = new URL(window.location.href),
				gh = a2C.searchParams;
			gh.set(key, value), a2C.search = gh.toString(), history.replaceState(null, "", a2C.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cm() {
	var aWS, g;
	this.dh = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bN.fa(32768 * aB, 100);
		this.a5k(0)
	}, this.value = function(gh) {
		return g[gh]
	}, this.aN0 = function() {
		return bN.fa(aWS - 1, 2)
	}, this.a5k = function(aMe) {
		aWS = 2 * aMe % 32768 + 1
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
	this.qM = new aWT, this.a5u = new aWU, this.aKH = new aWV, this.dh = function() {
		aD.hI || this.qM.dh()
	}, this.ec = function() {
		aD.hI || (this.qM.ec(), 3 !== t.tK) || bh.kR() % 15 != 5 && 2 !== aD.a18 || t.a2O().aTR()
	}, this.aTU = function() {
		var aWX = 0 !== aD.a18,
			aWY = aD.a5g;
		aWX || aa.aHX(), aD.a5e.a63(), aD.data.canvas = null, b0.y.close(b0.y.a2S, 3257), b0.y.a2S = 0, aD.data.isReplay = 1, aD.a5i(), aWX && (aD.a5g = aWY)
	}, this.aTT = function(qj) {
		var aB = qj.indexOf("=");
		return 0 <= aB ? qj.substring(aB + 1) : qj
	}, this.aTS = function(qj) {
		return qj
	}
}

function aWT() {
	this.aWZ = null, this.aWa = null, this.aWb = null, this.aWc = null, this.aWd = null, this.aWe = null, this.a5t = "";
	var aWf = 0;
	this.dh = function() {
		this.aWZ = [], this.aWa = [], this.aWb = [], this.aWc = [], this.aWd = [0], this.aWe = [0], aWf = 0, this.a5t = ""
	}, this.qN = function(id, fs, fu, fw) {
		aD.hI || 2 === aD.a18 || (0 === this.aWd[aWf] && (this.aWe[aWf] ? (this.aWd.push(1), this.aWe.push(0), aWf++) : this.aWd[aWf] = 1), this.aWZ.push(id), this.aWa.push(fs), this.aWb.push(void 0 === fu ? 0 : fu), this.aWc.push(void 0 === fw ?
			0 : fw), this.aWe[aWf]++)
	}, this.ec = function() {
		0 === this.aWd[aWf] ? this.aWe[aWf]++ : (this.aWd.push(0), this.aWe.push(0), aWf++)
	}
}

function aWV() {
	var aWg = 0;

	function aWk(qj, id) {
		aWg || (id ? 1 === id ? aN.a7C = L(480) + ": " + qj : t.u(4, 3, new v(L(481), qj, 1)) : t.u(4, 3, new v("⚠️ " + L(479), qj, 1)))
	}
	this.xP = function(qj, aWh) {
		var iS, qu;
		return aWg = aWh, bI.tN.xH(bI.tN.xF(bI.tN.xD(qj))), aN.a7C = "", !! function() {
			if (bJ.size < 10) aWk("File Too Small");
			else {
				var aWm = bJ.qA(12),
					r = (aWm !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aWk(r = (r += "   Found: " + aWm) + ("   Compatible at " + b0.y.a1Y() + "/" + aWm), 1)), bJ.qA(12)),
					aWn = bJ.qA(31);
				if (aWn !== bJ.size) aWk("Size Error: " + aWn + " " + bJ.size);
				else if (function(j, aWm) {
						for (var gh = bJ.aC, f9 = bJ.size, aVi = aWm, aB = 3; aB < f9; aB++) aVi = aVi + gh[aB] & 4095;
						return aVi === j || (aWk("Hash Error: " + aVi + " " + j + " " + f9), !1)
					}(r, aWm)) return 1
			}
			return
		}() && (iS = bJ, (qu = aD.data = new a5d).mapType = iS.qA(2), qu.mapProceduralIndex = iS.qA(8), qu.mapRealisticIndex = iS.qA(8), qu.mapSeed = iS.qA(14), qu.mapName = iS.aWp(5), 2 === qu.mapType && iS.aWq(), qu.passableWater = iS.qA(
			1), qu.passableMountains = iS.qA(1), qu.playerCount = iS.qA(10), qu.humanCount = iS.qA(10), qu.selectedPlayer = iS.qA(9), qu.gameMode = iS.qA(1), qu.playerMode = iS.qA(2), qu.battleRoyaleMode = iS.qA(2), qu.numberTeams = iS.qA(4),
			qu.isZombieMode = iS.qA(1), qu.isContest = iS.qA(1), qu.isReplay = iS.qA(1), qu.elo = iS.aWr(2, 14, 2), qu.colorsType = iS.qA(1), qu.colorsPersonalized = iS.qA(1), qu.colorsData = iS.aWr(10, 18, 512), qu.selectableColor = iS.qA(
			1), qu.teamPlayerCount = iS.aWr(4, 10, 9), qu.neutralBots = iS.qA(1), qu.botDifficultyType = iS.qA(2), qu.botDifficultyValue = iS.qA(4), qu.botDifficultyTeam = iS.aWr(4, 4, 9), qu.botDifficultyData = iS.aWr(10, 4, 512), qu
			.spawningType = iS.qA(2), qu.spawningSeed = iS.qA(14), qu.spawningData = iS.aWr(11, 12, 1024), qu.selectableSpawn = iS.qA(1), qu.playerNamesType = iS.qA(2), qu.playerNamesData = iS.aWs(10, 5, 512), qu.selectableName = iS.qA(1), qu
			.aIncomeType = iS.qA(2), qu.aIncomeValue = iS.qA(8), qu.aIncomeData = iS.aWr(10, 8, 512), qu.tIncomeType = iS.qA(2), qu.tIncomeValue = iS.qA(8), qu.tIncomeData = iS.aWr(10, 8, 512), qu.iIncomeType = iS.qA(2), qu.iIncomeValue = iS
			.qA(8), qu.iIncomeData = iS.aWr(10, 8, 512), qu.sResourcesType = iS.qA(2), qu.sResourcesValue = iS.qA(11), qu.sResourcesData = iS.aWr(10, 11, 512), qu.a61 = iS.aWr(10, 30, 0), !! function() {
				var iS = bJ,
					xQ = iS.qA(5),
					aWt = iS.qA(30),
					aWu = iS.qA(30);
				if (aWt + aWu > 8 * iS.size) return void aWk("Corrupted File");
				return function(f9) {
						var aWx = new Uint8Array(f9),
							aWy = new Uint16Array(f9),
							aWz = new Uint32Array(f9),
							aX0 = new Uint32Array(f9);
						bB.qM.aWZ = aWx, bB.qM.aWa = aWy, bB.qM.aWb = aWz, bB.qM.aWc = aX0;
						for (var aB = 0; aB < f9; aB++) {
							var id = bJ.qA(4);
							aWx[aB] = id, aWy[aB] = bJ.qA(9), 0 === id ? aWz[aB] = bJ.qA(22) : 1 === id ? (aWz[aB] = bJ.qA(10), aX0[aB] = bJ.qA(10)) : 2 === id ? (aWz[aB] = bJ.qA(10), aX0[aB] = bJ.qA(9)) : 3 === id ? (aWz[aB] = bJ.qA(10),
								aX0[aB] = bJ.qA(27)) : 4 === id ? (aWz[aB] = bJ.qA(10), aX0[aB] = bJ.qA(16)) : 5 === id || 6 === id ? aWz[aB] = bJ.qA(10) : 7 === id ? aWz[aB] = bJ.qA(1) : 10 === id && (aWz[aB] = bJ.qA(20), aX0[aB] = bJ
								.qA(22))
						}
					}(aWt),
					function(f9, xQ) {
						var aWd = new Uint8Array(f9),
							aWe = new Array(f9);
						aWe.fill(0), bB.qM.aWd = aWd, bB.qM.aWe = aWe;
						for (var aB = 0; aB < f9; aB++) aWd[aB] = bJ.qA(1), aWe[aB] = bJ.qA(xQ)
					}(aWu, xQ), 1
			}()) && (bJ.eG < 8 * bJ.size - 13 || bJ.eG > 8 * bJ.size ? (aWk("Out Of Bounds Error: " + bJ.eG + " " + 8 * bJ.size), !1) : (bB.qM.a5t = qj, 2 !== aD.data.mapType || (aWk("Load base64 image...", 2), aWh)))
	}, this.aKI = function(aJK, aWl) {
		var a40 = document.createElement("canvas"),
			iB = a40.getContext("2d");
		if (a40.width = aJK.width, a40.height = aJK.height, iB.drawImage(aJK, 0, 0), aD.data.canvas = a40, aWg || aWl) return aD.a18 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		bB.aTU()
	}
}

function aWU() {
	this.a0a = function() {
		var xQ = function() {
				for (var aWe = bB.qM.aWe, f9 = aWe.length, max = 0, aB = 0; aB < f9; aB++) max = Math.max(max, aWe[aB]);
				return xX(Math.max(max, 1))
			}(),
			i = (qu = aD.data, (i = bG).dh(), i.a8(12, l.rVersion), i.eG += 43, i.a8(2, qu.mapType), i.a8(8, qu.mapProceduralIndex), i.a8(8, qu.mapRealisticIndex), i.a8(14, qu.mapSeed), i.aX7(qu.mapName, 5), 2 === qu.mapType && i.aX8(qu.canvas),
				i.a8(1, qu.passableWater), i.a8(1, qu.passableMountains), i.a8(10, qu.playerCount), i.a8(10, qu.humanCount), i.a8(9, qu.selectedPlayer), i.a8(1, qu.gameMode), i.a8(2, qu.playerMode), i.a8(2, qu.battleRoyaleMode), i.a8(4, qu
					.numberTeams), i.a8(1, qu.isZombieMode), i.a8(1, qu.isContest), i.a8(1, qu.isReplay), i.dn(qu.elo, 2, 14), i.a8(1, qu.colorsType), i.a8(1, qu.colorsPersonalized), i.dn(qu.colorsData, 10, 18), i.a8(1, qu.selectableColor), i.dn(
					qu.teamPlayerCount, 4, 10), i.a8(1, qu.neutralBots), i.a8(2, qu.botDifficultyType), i.a8(4, qu.botDifficultyValue), i.dn(qu.botDifficultyTeam, 4, 4), i.dn(qu.botDifficultyData, 10, 4), i.a8(2, qu.spawningType), i.a8(14, qu
					.spawningSeed), i.dn(qu.spawningData, 11, 12), i.a8(1, qu.selectableSpawn), i.a8(2, qu.playerNamesType), i.aX9(qu.playerNamesData, 10, 5), i.a8(1, qu.selectableName), i.a8(2, qu.aIncomeType), i.a8(8, qu.aIncomeValue), i.dn(qu
					.aIncomeData, 10, 8), i.a8(2, qu.tIncomeType), i.a8(8, qu.tIncomeValue), i.dn(qu.tIncomeData, 10, 8), i.a8(2, qu.iIncomeType), i.a8(8, qu.iIncomeValue), i.dn(qu.iIncomeData, 10, 8), i.a8(2, qu.sResourcesType), i.a8(11, qu
					.sResourcesValue), i.dn(qu.sResourcesData, 10, 11), i.dn(qu.a61, 10, 30), ! function(xQ) {
					var i = bG,
						aWZ = bB.qM.aWZ,
						fs = bB.qM.aWa,
						fu = bB.qM.aWb,
						fw = bB.qM.aWc,
						f9 = aWZ.length;
					i.a8(5, xQ), i.a8(30, f9), i.a8(30, bB.qM.aWe.length);
					for (var aB = 0; aB < f9; aB++) {
						var eh = aWZ[aB];
						i.a8(4, eh), i.a8(9, fs[aB]), 0 === eh ? i.a8(22, fu[aB]) : 1 === eh ? (i.a8(10, fu[aB]), i.a8(10, fw[aB])) : 2 === eh ? (i.a8(10, fu[aB]), i.a8(9, fw[aB])) : 3 === eh ? (i.a8(10, fu[aB]), i.a8(27, fw[aB])) : 4 === eh ? (i
							.a8(10, fu[aB]), i.a8(16, fw[aB])) : 5 === eh || 6 === eh ? i.a8(10, fu[aB]) : 7 === eh ? i.a8(1, fu[aB]) : 10 === eh && (i.a8(20, fu[aB]), i.a8(22, fw[aB]))
					}
				}(xQ), ! function(xQ) {
					for (var i = bG, aWd = bB.qM.aWd, aWe = bB.qM.aWe, f9 = aWd.length, aB = 0; aB < f9; aB++) i.a8(1, aWd[aB]), i.a8(xQ, aWe[aB])
				}(xQ), bG.eG),
			qu = bN.fa(i - 1, 6) + 1,
			xQ = (bF.aVC(6 * qu) !== bG.g.length && bG.g.push(0), ! function() {
				var i = bG;
				i.eG = 24, i.a8(31, i.g.length), i.eG = 12, i.a8(12, function() {
					for (var g = bG.g, f9 = g.length, aVi = l.rVersion, aB = 3; aB < f9; aB++) aVi = aVi + g[aB] & 4095;
					return aVi
				}())
			}(), bJ.dh(bG.g), bH.tN.tO(bH.tN.tP(qu)));
		return bJ.uk(), bG.dh(), xQ
	}
}

function cr() {
	var eh, bw = !1,
		aXB = !1,
		aXC = -1e4,
		aXD = -1,
		aXE = 0;

	function resize(aXI) {
		eh = 0, ab.tm() && (aXG(aXI) || bw) && (bw = !1, be.resize(), bY.aD4.resize(), aY.dh(), ba.dh(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a18 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bE.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), bg.resize(), af.resize(), aX.resize(), bj.resize(), aS.aAD()) : (aa.aHZ(), aa.aHa()), bh.dp = !0)
	}

	function aXF(fb) {
		return fb && 128 < fb ? Math.floor(fb) : 128
	}

	function aXG(aXI) {
		var i, j, aXK, tR, a9b;
		if (!(0 < h.sz)) return tR = aXF(document.documentElement.clientWidth), a9b = aXF(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tR, j = a9b, aXK = 0 !== a0.id || i < j ?
			700 : 1200, aXK = Math.min(aXK / ((i + j) / 2), 1), aXK = 0 === bl.eU.data[1].value ? 2 * aXK / 3 : Math.min(aXK + (bl.eU.data[1].value - 1) * (1 - aXK) / 2, 1), h.k = (window.devicePixelRatio || 1) * aXK, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aXI && !aXB ? (aXB = !0, t.removeChild(document.body, a2f)) : aXB && (aXB = !1, document.body.appendChild(a2f)), i = Math.floor(.5 + tR * h.k), j = Math.floor(.5 + a9b * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCg(i, j), h.max = a7R(i, j), h.iJ = bN.fa(i + j, 2), h.vc = i / j, a2f.width = i, a2f.height = j, a2f.style.width = tR + "px", a2f.style.height = a9b + "px", aXD = bh.eX + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iJ = 0, this.vc = 1, this.k = 1, this.sz = 0, this.di = function() {
		this.i = aXF(document.documentElement.clientWidth) + 2, this.j = aXF(document.documentElement.clientHeight) + 2
	}, this.dh = function() {
		eh = 1, a2f = document.getElementById("canvasA"), 2 === a0.id && (a2f.style.webkitUserSelect = "none"), (vg = a2f.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aXG(0)
	}, this.ec = function() {
		50 <= ++eh && resize(0), -1 === aXD || bh.eX < aXD || (aXD = -1, 2e3 * ++aXE >= bh.eX + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.ds = function(jj) {
		bw = !0, resize(jj)
	}, this.a3K = function() {
		aXC + 1e3 > bh.eX || (aXC = bh.eX, resize(0))
	}
}

function dL() {
	this.aVL = new aXM, this.a1y = new aXN, this.aVc = new aXO
}

function aXO() {
	this.qA = function() {
		return 69
	}, this.a0a = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bF.a8(26, (i * j + j) % 67108864), bF.a8(22, 0), bF.a8(21, 0)
	}
}

function aXN() {
	this.a1z = function() {
		for (var gh, f9 = al.l0, a0w = al.l5, a1j = ag.a1j, a9P = this.aJ3(), aB = 0; aB < f9; aB++) gh = a0w[aB], bC.gV.jr(gh) || (a1j[gh] = a9P);
		var qR = ag.qR,
			jX = ag.jX,
			jY = ag.jY,
			a1h = ag.a1h,
			f9 = aD.kU;
		for (aB = 0; aB < f9; aB++)(0 === a1h[aB] || jY[aB] < 1 || 2 * qR[aB] > 3 * (jX[aB] + jY[aB])) && (a1j[aB] = 0);
		var a1w = 0;
		for (aB = 0; aB < f9; aB++) a1w += 0 < a1j[aB];
		return a1w
	}, this.aJ3 = function() {
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
				var aB, a9b = 1,
					uA = 1;
				for (aB = 0; aB < 256; aB += 2) a9b = (1 + a9b) * (g[aB] + 1) % 1073741824, uA = (1 + uA) * (g[aB + 1] + 1) % 1073741824;
				return [a9b, uA]
			}(g)
	}, this.aVM = function(aXX, aXY, aXZ, result) {
		for (var gc = 1 << aXX, aB = 0; aB < gc; aB++)
			if (this.aXa(aB, aXY, aXZ) === result) return aB;
		return 0
	}, this.aXa = function(aXb, aXY, aXZ) {
		for (var yS = aXY + aXb, yb = aXZ + aXb, fb = yS + yb & 2147483647, fS = 1; fS <= 16; fS++) fb = (fb = (fb ^ fb >> fS) >>> 1 + (3 & yS)) * (7 + (1023 & (yS | yb))) & 1073741823, yb >>= 1 + (1 & (yS >>= 1 + (1 & (fb += 65535 & yb))));
		return fb &= 1073741823
	}
}

function co() {
	var aXc, aXd, iN, aXe;
	this.dh = function() {
		var aB, fG, fI, aVd, aXf, i, j, zH, i8, xh, fb, gh, fP, fS, aXi;
		if (function() {
				if (iN = !0, aXe = "rgb(" + bU.xf[0] + "," + bU.xf[1] + "," + bU.xf[2] + ")", bU.aMn(bU.ep)) return 1;
				return iN = !1, 0
			}()) aXd = null;
		else {
			for (aXc = bN.fa(96, 4), aXf = 1 === bU.ep ? (aVd = 0, 160) : (aVd = 128, 32), aXe = "rgb(" + aVd + "," + aVd + "," + aVd + ")", aXd = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aXd[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bU.fK : aXc, j = aB % 2 == 0 ? aXc : bU.fL + 2 * aXc, aXd[aB].width = i, aXd[aB].height = j, xh = (i8 = (zH = aXd[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fI = aXc - 1; 0 <= fI; fI--)
						for (fb = aXf + Math.floor((fI + 1) * (aVd - aXf) / (aXc + 1)), fG = i - 1; 0 <= fG; fG--) xh[gh = 4 * ((0 === aB ? aXc - fI - 1 : fI) * i + fG)] = fb, xh[gh + 1] = fb, xh[gh + 2] = fb, xh[gh + 3] = 255;
				else {
					for (fG = aXc - 1; 0 <= fG; fG--)
						for (fb = aXf + Math.floor((fG + 1) * (aVd - aXf) / (aXc + 1)), fI = j - 1 - aXc; aXc <= fI; fI--) xh[gh = 4 * (fI * i + (3 === aB ? aXc - fG - 1 : fG))] = fb, xh[gh + 1] = fb, xh[gh + 2] = fb, xh[gh + 3] = 255;
					for (fS = 1; 0 <= fS; fS--)
						for (fG = aXc - 1; 0 <= fG; fG--)
							for (fI = aXc - 1; 0 <= fI; fI--) fP = (Math.pow(fG * fG + fI * fI, .5) + 1) / (aXc + 1), fb = aXf + Math.floor((1 < fP ? 1 : fP) * (aVd - aXf)), xh[gh = 4 * ((0 === fS ? aXc - fI - 1 : fI + fS * (j - aXc)) * i + (
								1 === aB ? fG : aXc - fG - 1))] = fb, xh[gh + 1] = fb, xh[gh + 2] = fb, xh[gh + 3] = 255
				}
				zH.putImageData(i8, 0, 0)
			}
			aXi = aXf, bU.xa.fillStyle = "rgb(" + aXi + "," + aXi + "," + aXi + ")", bU.xa.fillRect(0, 0, bU.fK, 1), bU.xa.fillRect(0, bU.fL - 1, bU.fK, 1), bU.xa.fillRect(0, 0, 1, bU.fL), bU.xa.fillRect(bU.fK - 1, 0, 1, bU.fL)
		}
	}, this.zB = function() {
		var fS = iN ? 0 : -aXc;
		aOY(fS, fS, bU.fK - 2 * fS, bU.fL - 2 * fS, bc.aXj, bc.aXk, bc.aXl, bc.aXm) || (vg.fillStyle = aXe, vg.fillRect(0, 0, h.i, h.j))
	}, this.vf = function() {
		iN || (aOX(0, -aXc, bU.fK, aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vg.drawImage(aXd[0], bc.aXn, bc.aXo - aXc), aOX(bU.fK, -aXc, aXc, bU.fL + 2 * aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vg.drawImage(aXd[1], bc.aXn + bU.fK, bc.aXo - aXc),
			aOX(0, bU.fL, bU.fK, aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vg.drawImage(aXd[2], bc.aXn, bc.aXo + bU.fL), aOX(-aXc, -aXc, aXc, bU.fL + 2 * aXc, bc.aXj, bc.aXk, bc.aXl, bc.aXm) && vg.drawImage(aXd[3], bc.aXn - aXc, bc.aXo - aXc))
	}
}

function dA() {
	this.aJ1 = new aXp, this.zE = new aXq, this.y = new aXr, this.iw = new aXs, this.aXi = new aXt, this.mP = new aXu, this.kI = new aXv, this.lH = new aXw, this.aXx = new aXy, this.aXz = new aY0, this.ma = new aY1, this.hj = new aY2, this.lq =
		new aY3, this.lJ = new aY4, this.hm = new aY5, this.mT = new aY6, this.qZ = new aY7, this.dh = function() {
			this.lq.dh(), this.zE.dh(), this.y.dh(), this.iw.dh(), this.aXi.dh(), this.aXz.dh(), this.mT.dh()
		}, this.vf = function() {
			this.aXz.vf(), this.zE.vf()
		}
}

function aXv() {
	this.ec = function(player) {
		return !!bP.ma.mb(player) && !(bP.y.kY[player] >= Math.max(3 * ao.performance.li, aE.ki[aE.hs[player]]) || !bC.gV.mc(player, aE.kg[aE.hs[player]], 32, 0)) && (aW.aCT() ? function(player) {
			var aYA = bP.lJ.aCW(),
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
			}(player, aYA) && !!bP.hm.qY(player, f9, 1) && (bC.gV.me(player), bP.y.mf(player), !0)
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
	}, this.qU = function(aWB) {
		var mP = bQ.fl[1];
		return !(4 <= mP || !bP.lJ.aYa(bO.ez(aWB))) && ac.f4(bO.ez(bO.iy(aWB, mP)))
	}
}

function aXp() {
	this.aJ2 = function(player) {
		for (var a8p = bP.y.a8p, te = player << 3, aB = te + bP.y.kY[player] - 1; te <= aB; aB--) this.aYb(a8p[aB])
	}, this.aYb = function(aYc) {
		var y = bP.y,
			aYd = y.mK - 1,
			aYe = y.mO[aYc],
			aYf = y.aYg[aYc],
			aYh = y.mZ[aYc];
		y.mK = aYd, y.mO[aYc] = y.mO[aYd], y.mZ[aYc] = y.mZ[aYd], y.aYY[aYc] = y.aYY[aYd], y.a7i[aYc] = y.a7i[aYd], y.aYg[aYc] = y.aYg[aYd], y.mN[aYc] = y.mN[aYd], y.mL[aYc] = y.mL[aYd], y.aYi[aYc] = y.aYi[aYd], y.mM[aYc] = y.mM[aYd], y.mY[aYc] =
			y.mY[aYd], y.a8p[y.mO[aYc]] = aYc,
			function(aWA) {
				var player = aWA >> 3,
					y = bP.y,
					f9 = y.kY[player] - 1,
					aYl = (player << 3) + f9;
				y.kY[player] = f9, aYl !== aWA && (y.a8p[aWA] = y.a8p[aYl], y.mO[y.a8p[aWA]] = aWA)
			}(aYe), bP.iw.iw[bO.iv(y.mZ[aYc])][y.aYg[aYc]] = aYc, aYd = bO.iv(aYh), aYe = aYf, aYd = bP.iw.iw[aYd], y = aYd.pop(), aYe !== aYd.length && (aYd[aYe] = y, bP.y.aYg[y] = aYe)
	}
}

function aXq() {
	var aYn, aYo = 8,
		aYp = null;

	function aYu(xh, ev, eG) {
		ev *= 4;
		xh[ev] = 255, xh[1 + ev] = 255, xh[2 + ev] = eG, xh[3 + ev] = 255
	}

	function aYw(iB, aXe) {
		var fG, fI, iT, ev, aYy, aYz, i5 = aYo,
			i8 = bC.r2.getImageData(iB, i5, i5),
			xh = i8.data,
			lP = (i5 >> 1) - .5,
			aZ1 = bC.rA.a3Y(aXe, .5);
		for (bC.rA.a3a(aXe, aZ1, 300) || bC.rA.a3c(aXe, 100), fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) aYz = (i5 - 1.5) * (i5 - 1.5) / 4, xh[ev = 4 * (fI * i5 + fG)] = (aYy = (iT = (iT = fG - lP) * iT + (iT = fI - lP) * iT) <= (i5 - 4.5) * (i5 - 4.5) / 4 ? aZ1 : aXe)[0], xh[1 + ev] = aYy[1], xh[2 + ev] = aYy[2],
				xh[3 + ev] = aYz < iT ? 0 : 255;
		iB.putImageData(i8, 0, 0)
	}
	this.dh = function() {
		var eG, i5, a40, iB, i8, xh;
		(aYn = aYn || new Array(aD.f6)).fill(null), eG = 255, i5 = aYo + 4, a40 = bC.r2.xW(i5, i5), iB = bC.r2.getContext(a40, !0), i8 = bC.r2.getImageData(iB, i5, i5), aYu(xh = i8.data, i5 + 1, eG), aYu(xh, i5 + 2, eG), aYu(xh, 2 * i5 + 1, eG),
			aYu(xh, 2 * i5 - 3, eG), aYu(xh, 2 * i5 - 2, eG), aYu(xh, 3 * i5 - 2, eG), aYu(xh, i5 * (i5 - 3) + 1, eG), aYu(xh, i5 * (i5 - 2) + 1, eG), aYu(xh, i5 * (i5 - 2) + 2, eG), aYu(xh, i5 * (i5 - 2) - 2, eG), aYu(xh, i5 * (i5 - 1) - 3, eG),
			aYu(xh, i5 * (i5 - 1) - 2, eG), iB.putImageData(i8, 0, 0), aYp = a40,
			function() {
				if (aD.i3)
					for (var a40 = new Array(bi.kr.length), f9 = aD.f6, aYs = aYn, aBo = bi.aBo, aB = 0; aB < f9; aB++) {
						var a6S = aBo[aB];
						a40[a6S] || (a40[a6S] = function(a6S) {
							var a40 = bC.r2.xW(aYo, aYo),
								iB = bC.r2.getContext(a40, !0),
								g = bQ.fi;
							return g.set(bi.aYx[a6S]), aYw(iB, g), a40
						}(a6S)), aYs[aB] = a40[a6S]
					}
			}()
	}, this.vf = function() {
		var aB, player, aZ2, aOg, hs, iS, aZ4, aZ6, aZ7, mZ = bP.y.mZ,
			mO = bP.y.mO,
			a7i = bP.y.a7i,
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
			iB = vg;
		for (iB.imageSmoothingEnabled = ey < 9, bC.r2.textAlign(iB, 1), bC.r2.textBaseline(iB, 1), aB = 0; aB < f9; aB++) player = mO[aB] >> 3, hs = a7i[aB], aZ2 = .9 + .1 * Math.log10(hs), aOg = (iS = mZ[aB]) % aZC / 16 - aZ2, iS = aZB * (Math
			.floor(iS / aZC) / 16 - aZ2 - nW) / iW, aZ4 = -2 * (aZ7 = ey * aZ2) * (1 + (aZ6 = +(player === aZ9)) / 8), aZ6 = aZ6 * aZ7 / 4, (aZ7 = aZA * (aOg - nV) / iT) < aZ4 || iS < aZ4 || aZA + aZ6 < aZ7 || aZB + aZ6 < iS || (aOg = 2 *
			aZ2 * en, aZ4 = aZ2 * ey, null === (aZ6 = aZ8[player]) && (aZ8[player] = aZ6 = function(player) {
				var a40 = bC.r2.xW(aYo, aYo);
				return aYw(bC.r2.getContext(a40, !0), ac.a8Q(player)), a40
			}(player)), player === aZ9 && (iB.setTransform(aOg, 0, 0, aOg, aZ7 - 2 * aOg, iS - 2 * aOg), iB.drawImage(aYp, 0, 0)), iB.setTransform(aOg, 0, 0, aOg, aZ7, iS), iB.drawImage(aZ6, 0, 0), (aZ2 = Math.floor(function(hs) {
				if (hs < 1e3) return .42;
				if (hs < 1e4) return .34;
				if (hs < 1e6) return .26;
				if (hs < 1e8) return .19;
				return .15
			}(hs) * aZ4)) < 6) || (iB.setTransform(1, 0, 0, 1, 0, 0), iB.fillStyle = aYi[aB] ? bD.od : bD.o5, iB.font = bC.r2.sr(1, aZ2), iB.fillText(bC.s1.a0P(hs), aZ7 + aZ4, iS + aZ4 + .1 * aZ2));
		iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aY0() {
	var aZF;
	this.dh = function() {
		if (aD.i3) {
			var hz = 1 - aD.yK;
			aZF = new Array(bi.kr.length);
			for (var aB = aD.yJ - 1; 0 <= aB; aB--) {
				var a6S = bi.kr[aB + hz];
				aZF[a6S] = bR.y.aZH(20, bi.aZI[a6S])
			}
			9 === aD.km && (aZF[1] = bR.y.aZH(20, bi.aZI[1]))
		} else aZF = [bR.y.aZH(20, bi.aZI[7])]
	}, this.vf = function() {
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
				aBo = bi.aBo,
				a40 = aZF,
				iB = vg;
			3 < np && (iB.globalAlpha = .5 * (5 - np));
			for (var aB = 0; aB < f9; aB++) {
				var iS = mZ[aB],
					fG = aZA * (iS % aZC / 16 - nV) / (ni - nV) + aZK,
					iS = aZB * (Math.floor(iS / aZC) / 16 - nW) / (nj - nW) + aZK;
				aZA < fG || aZB < iS || fG < gi || iS < gi || (iB.setTransform(np, 0, 0, np, fG, iS), iB.drawImage(a40[aBo[mO[aB] >> 3]], 0, 0))
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
			if (ac.gj(ey) && ac.z9(player, ey)) return !0
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
		for (var te = player << 3, tf = te + bP.y.kY[player], mN = bP.y.mN, a8p = bP.y.a8p, aB = te; aB < tf; aB++) {
			var a8q = a8p[aB];
			if (mN[a8q] === id) return a8q
		}
		return -1
	}, this.nZ = function(player) {
		return 0 === bP.y.kY[player] ? -1 : bP.y.a8p[player << 3]
	}, this.a6k = function(lj, lk) {
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
				aB = 20 * (.9 + .1 * Math.log10(bP.y.a7i[aB]));
			return aB = Math.max(aB, bO.ip(bC.r2.tj(.02, 1.7))), bN.aOf(bO.iU(lj), bO.iX(lk), aZd, aZc, aB)
		}(aQz, lj, lk) ? aQz : -1
	}, this.aYH = function(nS) {
		for (var f9 = bP.y.mK, mN = bP.y.mN, aB = 0; aB < f9; aB++)
			if (mN[aB] === nS) return bQ.fl[2] = aB, !0;
		return !1
	}, this.aIy = function(player) {
		for (var te = player << 3, tf = te + bP.y.kY[player], a8p = bP.y.a8p, a7i = bP.y.a7i, hs = 0, aB = te; aB < tf; aB++) hs += a7i[a8p[aB]];
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
	}, this.aCW = function() {
		for (var aZf = m5[0], mO = bP.y.mO, mK = bP.y.mK, g = [], aB = 0; aB < mK; aB++) bC.gV.l8(aZf, mO[aB] >> 3) && g.push(aB);
		return g
	}, this.lr = function(player, lp) {
		for (var te = player << 3, tf = te + bP.y.kY[player], a8p = bP.y.a8p, mM = bP.y.mM, hb = lp[0], l7 = lp[lp.length - 1], aB = te; aB < tf; aB++) {
			var gh = mM[a8p[aB]];
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
	}, this.pf = function(player, nS) {
		return !!aZg(player) && !!bP.lJ.aYH(nS) && !!aZi(player, bQ.fl[2])
	}, this.qY = function(player, nS, aZj) {
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
							if (bP.lH.qV(player, aZj, 1)) return bQ.fl[1] = 6, 1
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
			if (!bu.f2(player, jd)) return void bA.kW.pu(player, jd, hs)
		}
		ad.jp(player, jd) || ad.k8(player) ? (ag.gb[player].push(aYC << 2), ad.eg(player, hs, jd), aF.jb(player, !0)) : bf.gZ(player, hs, 12)
	}
	this.ec = function() {
		for (var mL = bP.y.mL, mZ = bP.y.mZ, aYY = bP.y.aYY, aB = bP.y.mK - 1; 0 <= aB; aB--) 65535 === aYY[aB] && function(aB, aYC, i0) {
			if (6 === i0) {
				if (bP.mT.aYL(aB, aYC)) return bP.y.mY[aB]++, bP.y.aYY[aB] = 0, 0
			} else {
				var player = bP.y.mO[aB] >> 3,
					aB = bP.y.a7i[aB];
				bf.aZv(player), i0 < 4 ? aZw(player, aB, aYC + bO.iD[i0] << 2, aYC) : 4 === i0 ? function(player, hs, aYC) {
					var aB, fD, iM = bO.iE,
						ey = bO.ez(aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.f0(fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD) && !ac.z9(player, fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD)) return aZw(player, hs, fD, aYC)
				}(player, aB, aYC) : 5 === i0 && function(player, hs, aYC) {
					var aB, fD, iM = bO.iE,
						ey = bO.ez(aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD) && ac.z9(player, fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.gj(fD)) return aZw(player, hs, fD, aYC);
					for (aB = 0; aB < 4; aB++)
						if (fD = ey + iM[aB], ac.f0(fD)) return aZw(player, hs, fD, aYC)
				}(player, aB, aYC)
			}
			return 1
		}(aB, bO.iu(mZ[aB]), mL[aB] % 64) && (bP.mT.aYI(aB), bP.aJ1.aYb(aB))
	}, this.aZt = function(player, ev, i0, nS, hs) {
		if (!(5 <= i0)) {
			var aZ9 = aD.et;
			if (bC.gV.hL(aZ9) && bu.f2(player, aZ9) && player !== aZ9 && 0 !== ag.gq[aZ9].length && bC.gV.a4b(player, 5)) {
				for (var aZu, fN = !1, aB = 0; aB < 4; aB++)
					if (aZu = ev + bO.iD[aB] << 2, ac.f4(aZu) && !ac.f0(aZu) && ac.f1(aZu) === aZ9) {
						fN = !0;
						break
					} fN && (aN.a7r(719, 0), i0 = hs < 25e3 ? L(482) + " (" + bC.s1.a0P(hs) + ") ⛵" : L(483) + " (" + bC.s1.a0P(hs) + ") 🚢", aN.za(180, i0, 719, player, bD.oc, bD.o2, -1, !0, void 0, {
					fT: 1,
					nS: nS
				}))
			}
		}
	}
}

function aXr() {
	this.ki = 512, this.aYZ = 8, this.mK = 0, this.md = 0, this.mO = new Uint16Array(this.ki), this.mZ = new Uint32Array(this.ki), this.aYY = new Uint16Array(this.ki), this.a7i = new Uint32Array(this.ki), this.aYg = new Uint16Array(this.ki), this
		.mN = new Uint16Array(this.ki), this.mL = new Uint8Array(this.ki), this.aYi = new Uint8Array(this.ki), this.mM = new Array(this.ki), this.mY = new Uint16Array(this.ki), this.kY = new Uint8Array(aD.f6), this.a8p = new Uint16Array(this.aYZ * aD
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
			this.mO[f9] = aa2, this.mZ[f9] = aa0, this.aYY[f9] = 0, hs < 60 && (bC.gV.gW(player, 60 - hs), hs = 60), this.a7i[f9] = hs, this.aYg[f9] = bP.iw.mf(f9, bO.iv(aa0)), this.mN[f9] = aZz, this.mL[f9] = mP, this.aYi[f9] = 0, this.mM[f9] = lp,
				this.mY[f9] = 0, this.md = (aZz + 1) % 65536, this.kY[player] = aa1 + 1, this.a8p[aa2] = f9, this.mK++, bP.mP.aZt(player, lp[lp.length - 1], mP, aZz, hs)
		}, this.ec = function() {
			bP.mP.ec();
			for (var gh = aD.et, eY = bP.lJ.aIy(gh), sc = (! function(sc) {
					for (var aa7, mZ = sc.mZ, a7i = sc.a7i, aYi = sc.aYi, aYY = sc.aYY, aYg = sc.aYg, mM = sc.mM, mY = sc.mY, sc = sc.mK, aZC = bU.fK << 4, aB = sc - 1; 0 <= aB; aB--) {
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
							aJv = a7i[aB],
							aJv = (aJv = aYi[aB] ? 4e4 : 25e4 + Math.min(20 * aJv, 3e5) + Math.min(aJv >> 3, 5e4), aYY[aB] + Math.max(~~((aJv + .5) / fC), 1));
						65535 <= aJv ? aa9 + 2 < lp.length ? (mY[aB] = aa9 + 1, mZ[aB] = aa7 = function(aB, aaH, aaB, aaC, aa9, fC, lp, aZC) {
							aaH = Math.min(aaH - 65535, 65535);
							var lp = bO.it(lp[aa9 + 2]),
								aa9 = lp % aZC - aaB,
								lp = ~~((lp + .5) / aZC) - aaC,
								aaK = Math.max(~~Math.sqrt(aa9 * aa9 + lp * lp + .5), 1);
							return aaH = Math.min(Math.floor((fC * aaH + .5) / aaK), 65534), bP.y.aYY[aB] = aaH, aaB + bN.fa(aaH * aa9, 65535) + aZC * (aaC + bN.fa(aaH * lp, 65535))
						}(aB, aJv, aaD, aaE, aa9, fC, lp, aZC)) : (mZ[aB] = aa7 = aaA, aYY[aB] = 65535) : (aYY[aB] = aJv, mZ[aB] = aa7 = aaB + bN.fa(aJv * aaF, 65535) + aZC * (aa0 + bN.fa(aJv * aaG, 65535))), aYg[aB] = bP.iw.aaJ(aYg[aB],
							aa8, aa7)
					}
				}(this), ! function(sc) {
					if (bh.kR() % 2 == 1) {
						var aB, i1, lP, fT, eh, aaL, a03, aaM, hb, nV, nW, aa0, aaN, aAI, aaP, l7, f9 = sc.mK,
							mZ = sc.mZ,
							mO = sc.mO,
							a7i = sc.a7i,
							aYi = sc.aYi,
							iw = bP.iw.iw,
							aaR = iw.length,
							aaS = bP.iw.aaS,
							aZC = bU.fK << 4,
							aaT = aD.i3,
							aVz = bi.f7,
							gi = (f9 - 1) * (bN.fa(bh.kR(), 2) % 2);
						for (aB = 0; aB < f9; aB++)
							for (i1 = Math.abs(aB - gi), aa0 = mZ[i1], lP = bO.iv(aa0), hb = mO[i1] >> 3, nV = aa0 % aZC, nW = ~~((aa0 + .5) / aZC), aaP = a7i[i1], fT = 0; fT < 9; fT++)
								if (!((aaL = lP + aaS[fT]) < 0 || aaR <= aaL))
									for (aaM = iw[aaL], a03 = aaM.length, eh = 0; eh < a03; eh++) aaN = aaM[eh], l7 = mO[aaN] >> 3, hb == l7 || aaT && aVz[hb] === aVz[l7] && aVz[hb] || (l7 = mZ[aaN], (aAI = nV - l7 % aZC) * aAI + (aAI = nW -
										~~((l7 + .5) / aZC)) * aAI < 14400 && (l7 = a7i[aaN], aAI = l7 <= aaP ? Math.max(1, bN.fa(l7 + bN.fa(aaP - l7, 10), 10)) : Math.max(1, bN.fa(aaP, 10)), a7i[aaN] = Math.max(l7 - aAI, 0), aYi[
										aaN] = 4))
					}
				}(this), ! function(sc) {
					if (bh.kR() % 5 == 3)
						for (var a7i = sc.a7i, f9 = sc.mK, aB = 0; aB < f9; aB++) {
							var hs = a7i[aB];
							a7i[aB] = Math.max(hs - Math.max(1, hs >> 7), 0)
						}
				}(this), this), a7i = sc.a7i, aYi = sc.aYi, aB = sc.mK - 1; 0 <= aB; aB--) aYi[aB] = aYi[aB] >> 1, 0 === a7i[aB] && (bP.mT.aYI(aB), bP.aJ1.aYb(aB));
			bf.gZ(gh, eY - bP.lJ.aIy(gh), 15)
		}
}

function aXs() {
	this.aaU = 32, this.fG = 0, this.fI = 0, this.ix = 0, this.aaV = 0, this.aaW = 4, this.iw = null, this.aaS = new Int16Array(9), this.dh = function() {
		this.ix = 1 + bN.fa(bU.fK - 1, this.aaU), this.aaV = 1 + bN.fa(bU.fL - 1, this.aaU), this.iw = new Array(this.ix * this.aaV), bC.rA.a3X(this.iw);
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
		return -1 !== aac && !!bP.lJ.lu(player, aac) && this.qV(player, aac, 0)
	}, this.qV = function(player, aac, aad) {
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
			if (0 <= (ln = bP.aXx.qV(aZn, aac))) return ln;
			return aad ? function(aah, player) {
				var fq = bQ.fq,
					eU = (fq.fill(0), [aah]),
					iF = (fq[aah] = 1, bO.iF),
					aai = -1,
					f9 = eU.length;
				for (; - 1 === aai && f9;) {
					for (var g = [], aB = 0; aB < f9; aB++)
						for (var ev = eU[aB], a5L = fq[ev], fC = 0; fC < 8; fC++) {
							var xG, a1t, fF = ev + iF[fC],
								en = 4 * fF;
							ac.iN(en) ? (xG = fq[fF], a1t = a5L + 5 + ((1 & fC) << 1), 0 === xG ? (g.push(fF), fq[fF] = a1t) : fq[fF] = Math.min(a1t, xG)) : -1 === aai && fC % 2 == 0 && ac.z6(player, en) && (aai = ev)
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
							a5L = fq[ev];
						if (a5L - fq[ev + iF[i0]] != 5 + ((1 & i0) << 1))
							for (var fS = 0; fS < 8; fS++) {
								var fC = fS + i0 + 6 & 7;
								if (a5L - fq[ev + iF[fC]] == 5 + ((1 & fC) << 1)) return fC
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
	this.qV = function(aaf, aac) {
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
	}, this.aYU = function(hb, l7, wk, ev, aat) {
		aat && (wk = (l7 = this.ly(l7)).length - wk - 2);
		aat = l7.subarray(wk + 1 + (ev === l7[wk + 1])), ev = new Uint32Array(hb.length + aat.length);
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
	var zi = 32,
		zh = new Array(2);

	function xW(eh) {
		var fG, fI, ev, iW, iT, i5 = zi,
			a40 = bC.r2.xW(i5, i5),
			iB = bC.r2.getContext(a40, !0),
			i8 = bC.r2.getImageData(iB, i5, i5),
			xh = i8.data,
			lP = (i5 >> 1) - .5,
			lQ = Math.sqrt(lP * lP);
		for (xh.fill(255), fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) iT = fG - lP, iW = fI - lP, ev = 4 * (fI * i5 + fG), iT = 714 * (lQ - Math.sqrt(iT * iT + iW * iW)) / lQ, xh[2 + ev] = eh, xh[3 + ev] = 255 < iT ? 0 : iT;
		return iB.putImageData(i8, 0, 0), a40
	}
	this.aaw = -1, this.dh = function() {
		this.aaw = -1, zh[0] || (zh[0] = xW(255), zh[1] = xW(0))
	}, this.aax = function(iB, en, fG, fI, eF, aB) {
		bC.gV.hL(aD.et) && (iB.setTransform(en *= 4 / 3 * .625, 0, 0, en, fG - (eF *= 4 / 3), fI - eF), iB.drawImage(zh[+(bP.y.mN[aB] === this.aaw)], 0, 0))
	}
}

function aY2() {
	function aWG(fG, f9, fI, aay, aAO, fZ, player) {
		if (!(fI < 1 || aAO < fI))
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (bP.lJ.aYa(en) && !bC.rA.has(aay, ac.er(en)) && ac.yy(en, player)) return en >> 2;
				fG += fZ
			}
		return -1
	}

	function aWK(fI, f9, fG, aay, aWE, fZ, player) {
		if (!(fG < 1 || aWE < fG)) {
			f9 = Math.max(f9, 0);
			for (var aB = 0; aB <= f9; aB++) {
				var en = bO.iq(fG, fI);
				if (bP.lJ.aYa(en) && !bC.rA.has(aay, ac.er(en)) && ac.yy(en, player)) return en >> 2;
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
					for (var hO = bO.fH(aWB), hQ = bO.fJ(aWB), aWE = bU.fK - 2, aAO = bU.fL - 2, aWF = -1, fC = 0; fC < aWC; fC++) {
						var aAN = Math.max(hO - fC, 1),
							aN8 = Math.max(hQ - fC, 1),
							yu = Math.min(hO + fC, aWE),
							yt = Math.min(hQ + fC, aAO),
							ia = aWG(hO, yu - hO, hQ - fC, aay, aAO, 1, player),
							ib = aWG(hO - 1, hO - aAN - 1, hQ - fC, aay, aAO, -1, player),
							yu = aWG(hO, yu - hO, hQ + fC, aay, aAO, 1, player),
							aAN = aWG(hO - 1, hO - aAN - 1, hQ + fC, aay, aAO, -1, player),
							aWJ = aWK(hQ, yt - hQ - 1, hO - fC, aay, aWE, 1, player),
							aWL = aWK(hQ - 1, hQ - aN8 - 2, hO - fC, aay, aWE, -1, player),
							yt = aWK(hQ, yt - hQ - 1, hO + fC, aay, aWE, 1, player),
							aN8 = aWK(hQ - 1, hQ - aN8 - 2, hO + fC, aay, aWE, -1, player);
						if (aWF = aWO(aWF, ia, aWB), aWF = aWO(aWF, ib, aWB), aWF = aWO(aWF, yu, aWB), aWF = aWO(aWF, aAN, aWB), aWF = aWO(aWF, aWJ, aWB), aWF = aWO(aWF, aWL, aWB), aWF = aWO(aWF, yt, aWB), 0 <= (aWF = aWO(aWF, aN8, aWB)) &&
							fC * fC >= bO.ic(aWF, aWB)) return aWF
					}
					return -1
				}(aWB, aWC, aay, player);
				if (-1 === aai) break;
				var id = ac.er(bO.ez(aai));
				if (bP.lJ.aZN(player, id)) return !! function(player, aai, aWB) {
					for (var i0 = bO.j0(aai, aWB), aB = 0; aB < 4; aB++) {
						var ev = bO.iy(aai, i0);
						if (ac.aIW(bO.ez(ev), player)) return bQ.fl[6] = i0, 1;
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
	this.aTa = [L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493), L(494), L(495), L(496), L(497), L(498), L(499)];
	var ab1 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCs = new Array(ab1.length), this.dh = function() {
		var g = bl.eU.data[155].value.split(";"),
			lP = g.length;
		if (function() {
				for (var f9 = ab1.length, aB = 0; aB < f9; aB++) bZ.aCs[aB] = ab1[aB]
			}(), !(lP > ab1.length))
			for (var aB = 0; aB < lP; aB++) g[aB].length && (this.aCs[aB] = g[aB])
	}, this.aTc = function(eG, code) {
		for (var aCs = this.aCs, ab3 = ab1, qj = (aCs[eG] = code, ""), f9 = aCs.length, ab4 = [], aB = 0; aB < f9; aB++) ab4.push(aCs[aB] === ab3[aB] ? "" : aCs[aB]);
		f9--;
		for (aB = 0; aB < f9; aB++) qj += ab4[aB] + ";";
		bl.pW.pX(155, qj += ab4[f9])
	}, this.aTZ = function() {
		bl.pW.pX(155, ""), this.dh()
	}, this.eh = function(code, eG) {
		return code === this.aCs[eG] || code === this.aCs[eG + 1]
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
	}, this.uk = function() {
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
	this.a9N = function() {
		var abD;
		return !(al.l0 < 3 || ag.gx[m5[0]] >= aD.kE >> 1) && (aD.i3 ? 9 !== aD.km && (abD = ae.aKY(), !(2 * ae.aKZ(bj.l3()) >= abD)) : function() {
			if (8 === aD.km) return !1;
			var abD = ae.aKY();
			if (2 * ag.hB[m5[0]] >= abD) return !1;
			return !0
		}())
	}
}

function cC() {
	this.dh = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aa1 = aD.kU, hB = ag.hB, aB = 0; aB < aa1; aB++) hB[aB] = 512;
			var aa2 = aD.yC,
				kh = aE.kh,
				hs = aE.hs;
			for (aB = aa1; aB < aa2; aB++) hB[aB] = kh[hs[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f9 = aD.yC, hB = ag.hB, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f9; aB++) hB[aB] = sResourcesValue
		} : function() {
			for (var f9 = aD.yC, hB = ag.hB, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f9; aB++) hB[aB] = sResourcesData[aB]
		})();
		bf.n0[8] = ag.hB[aD.et]
	}
}

function dT() {
	var aIk = 501,
		abJ = (this.abI = new Uint32Array(aIk), this.a4g = new Uint32Array(aIk), this.aCX = new Uint16Array(aIk), this.aTi = 0, 1),
		ux = 0;

	function abM(self) {
		self.max.fill(0)
	}

	function abO(self, aB) {
		self.max[0] = Math.max(self.abI[aB], self.max[0]), self.max[1] = Math.max(self.a4g[aB], self.max[1]), self.max[2] = Math.max(self.aCX[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.abK = 0, this.n0 = new Array(21), this.abL = null, this.di = function() {
		this.abL = [L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(507), L(324), L(325), L(508), L(509), L(510), L(511), "", L(512), L(513), L(514), L(282), L(515), L(516)]
	}, this.dh = function() {
		this.aTi = 0, abJ = 1, this.abK = 0, ux = 0, abM(this), this.n0.fill(0)
	}, this.qS = function(player, il) {
		bC.gV.a4a(player) && (this.n0[0] += il + 1, this.n0[1]++, this.n0[12] += bQ.fg[1])
	}, this.px = function(player, pa) {
		__fx.donationsTracker.logDonation(player, pa, bQ.fg[0]);
		player === aD.et && (aN.px(bQ.fg[0], bQ.fg[1], pa), this.n0[12] += bQ.fg[1], this.n0[16] += bQ.fg[0]), pa === aD.et && (aN.a7v(bQ.fg[0], player), this.n0[10] += bQ.fg[0])
	}, this.qW = function(player) {
		bC.gV.a4a(player) && (this.n0[2]++, this.n0[12] += bQ.fg[1])
	}, this.qe = function(player) {
		bC.gV.a4a(player) && (this.n0[19]++, this.n0[12] += bQ.fg[1])
	}, this.aZv = function(player) {
		bC.gV.a4a(player) && this.n0[20]++
	}, this.gZ = function(player, a5L, eG) {
		bC.gV.a4a(player) && (this.n0[eG] += a5L)
	}, this.ec = function() {
		var self;
		this.abK || 0 < ux-- || ((self = this).abI[self.aTi] = ag.gx[aD.et], self.a4g[self.aTi] = ag.hB[aD.et], self.aCX[self.aTi] = ae.aCY(aD.et), abO(self, self.aTi), self.aTi++, self.aTi === aIk && function(self) {
			abM(self), abO(self, 0), self.aTi = 1 + bN.fa(aIk, 2);
			for (var aB = 1; aB < self.aTi; aB++) self.abI[aB] = self.abI[2 * aB], self.a4g[aB] = self.a4g[2 * aB], self.aCX[aB] = self.aCX[2 * aB], abO(self, aB);
			abJ *= 2
		}(self), ux = abJ - 1, bg.mr(), 0 === ag.n4[aD.et] && (self.abK = bh.kR()))
	}
}

function dU() {
	this.i = 0, this.j = 0, this.tR = 0, this.tS = 0, this.abQ = 0, this.abR = 0, this.a9b = 0, this.uA = 0;
	var abT = this.abS = 0;
	this.abU = 0, this.abV = 0, this.abW = 0, this.a8w = 0, this.eG = 0, this.aC8 = null, this.hv = !1, this.abX = -1, this.abY = !1, this.abZ = [0, 0], this.di = function() {
		this.aC8 = [L(517), L(124, 0, "Balance"), L(123, 0, "Interest"), L(518)]
	}, this.dh = function() {
		this.hv = !1, this.abX = -1, this.abY = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var fC = a0.a1.iI() && h.i < h.j ? 1 : a0.a1.iI() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(fC * this.i), this.i -= a0.a1.iI() && h.i < h.j ? 2 * be.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8w = Math.floor(this.j / 150), this.a8w = Math.max(this.a8w, 1.5), this.tR = Math.floor(1 + .02 * this
			.i), this.tS = Math.floor(1 + .04 * this.i), this.a9b = this.tS, abT = Math.floor(.75 * this.a9b), this.uA = Math.floor(1 + .075 * this.i), this.abU = Math.floor(1 + .1125 * this.i), this.abV = Math.floor(this.i * (a0.a1.iI() ? .03 :
				.029)), this.abV = Math.max(this.abV, 4), this.abW = Math.floor(.035 * this.i), this.abW = Math.max(this.abW, 4), this.abS = this.j - 2 * this.a9b - this.uA - this.abU, this.hv && this.aba()
	}, this.hM = function(lj, lk) {
		var yF, yE;
		return !!this.hv && (yE = lj, yF = lk, lj -= bN.fa(h.i - this.i, 2), lk -= bN.fa(h.j - this.j, 2), lj < 0 || lk < 0 || lj >= this.i || lk >= this.j || lj >= this.i - this.abU && lk < this.abU ? -1 !== aM.hM(yE, yF) || bE.hM(yE, yF) ||
			this.sJ() : lk < this.abU || (lk < this.j - this.uA ? (this.abY = !0, this.abX = (lj - 2 * this.tR - this.abQ) / this.abR, 3 !== this.eG && (bh.dp = !0)) : (yE = (yE = Math.floor(lj / (this.i / this.aC8.length))) < 0 ? 0 : yE >=
				this.aC8.length ? this.aC8.length - 1 : yE) !== this.eG && (this.eG = yE, this.aba(), bh.dp = !0)), !0)
	}, this.a2g = function(lj, lk) {
		return this.abZ[0] = lj, this.abZ[1] = lk, !(!this.hv || !this.abY || (lj -= bN.fa(h.i - this.i, 2), lk = this.abX, this.abX = (lj - 2 * this.tR - this.abQ) / this.abR, (0 <= this.abX && this.abX <= 1 || 0 <= lk && lk <= 1) && (bh.dp = !
			0), 0))
	}, this.a35 = function() {
		this.abY && (this.abY = !1)
	}, this.a3H = function() {
		this.hv ? this.sJ() : this.show()
	}, this.show = function() {
		bf.aTi < 2 || (this.hv = !0, this.aba())
	}, this.sJ = function() {
		this.hv = !1, this.abX = -1, bh.dp = !0
	}, this.aba = function() {
		this.eG < 2 ? this.abQ = aQ.measureText(bC.s1.a0P(bf.max[this.eG]), bC.r2.sr(0, this.abV)) : 2 === this.eG && (this.abQ = aQ.measureText(bC.s1.a5E(6, 2), bC.r2.sr(0, this.abV))), this.abR = this.i - 2 * this.tR - this.abQ - this.tS
	}, this.mr = function() {
		this.hv && this.aba()
	}, this.vf = function() {
		this.hv && this.a9t()
	}, this.a9t = function() {
		var fG = bN.fa(h.i - this.i, 2),
			fI = bN.fa(h.j - this.j, 2);
		vg.setTransform(1, 0, 0, 1, fG, fI), vg.fillStyle = bD.o2, vg.fillRect(0, this.abU, this.i, this.j - this.abU), this.abb(), this.aSG(), vg.strokeRect(0, 0, this.i, this.j), bC.r2.textAlign(vg, 2), vg.font = bC.r2.sr(0, this.abV), 0 ===
			this.eG ? this.abc(bf.abI, fG, fI) : 1 === this.eG ? this.abc(bf.a4g, fG, fI) : 2 === this.eG ? this.abd(fG, fI) : 3 === this.eG && (this.abe(fG, fI), this.abf(fG, fI)), aM.a72(Math.floor(fG + this.i - .725 * this.abU), Math.floor(
				fI + .275 * this.abU), Math.floor(.45 * this.abU)), vg.setTransform(1, 0, 0, 1, 0, 0)
	}, this.abb = function() {
		var aB, eY;
		for (vg.lineWidth = this.a8w, bC.r2.textBaseline(vg, 1), bC.r2.textAlign(vg, 1), vg.strokeStyle = bD.o5, vg.font = bC.r2.sr(1, this.abW), eY = this.i / this.aC8.length, vg.fillStyle = bD.oR, vg.fillRect(this.eG * eY, this.j - this.uA, eY,
				this.uA), vg.fillStyle = bD.o5, vg.fillRect(0, this.j - this.uA - .5 * this.a8w, this.i, this.a8w), aB = 1; aB <= 3; aB++) vg.fillRect(aB * eY, this.j - this.uA, this.a8w, this.uA);
		for (aB = this.aC8.length - 1; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(this.aC8[aB], 0, .9 * eY), (aB + .5) * eY, this.j - .46 * this.uA)
	}, this.aSG = function() {
		vg.fillStyle = bD.os, vg.fillRect(0, 0, this.i, this.abU), vg.fillStyle = bD.o5, vg.fillRect(0, this.abU - .5 * this.a8w, this.i, this.a8w), vg.font = bC.r2.sr(1, .39 * this.abU), vg.fillText(bC.zH.a4E(L(519), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.abU))
	}, this.abc = function(g, fG, fI) {
		var lP = bf.max[this.eG],
			a3Z = (vg.setTransform(1, 0, 0, 1, fG + 2 * this.tR + this.abQ, fI + this.a9b + this.abU), vg.lineWidth = 2, this.abS / Math.sqrt(lP));
		vg.beginPath(), vg.moveTo(this.abR, this.abS - a3Z * Math.sqrt(g[bf.aTi - 1]));
		for (var aB = bf.aTi - 2; 0 <= aB; aB--) vg.lineTo(aB * this.abR / (bf.aTi - 1), this.abS - a3Z * Math.sqrt(g[aB]));
		vg.stroke();
		fG = this.a72(g, a3Z, .5);
		fG < .95 && vg.fillText(bC.s1.a0P(lP), -this.tR, 0), .05 < Math.abs(fG - .5) && vg.fillText(bC.s1.a0P(Math.floor(lP / 4)), -this.tR, Math.floor(this.abS / 2)), .05 < fG && vg.fillText("0", -this.tR, this.abS)
	}, this.abd = function(fG, fI) {
		vg.setTransform(1, 0, 0, 1, fG + 2 * this.tR + this.abQ, fI + this.a9b + this.abU), vg.lineWidth = 2;
		var a3Z = this.abS / Math.max(bf.max[this.eG], 1);
		vg.beginPath(), vg.moveTo(this.abR, this.abS - a3Z * bf.aCX[bf.aTi - 1]);
		for (var aB = bf.aTi - 2; 0 <= aB; aB--) vg.lineTo(aB * this.abR / (bf.aTi - 1), this.abS - a3Z * bf.aCX[aB]);
		vg.stroke();
		fG = this.a72(bf.aCX, a3Z, 1), fI = bf.max[this.eG] / 100;
		fG < .95 && vg.fillText(bC.s1.a5E(fI, 2), -this.tR, 0), .05 < Math.abs(fG - .5) && vg.fillText(bC.s1.a5E(fI / 2, 2), -this.tR, Math.floor(this.abS / 2)), .05 < fG && vg.fillText(bC.s1.a5E(0, 2), -this.tR, this.abS)
	}, this.abe = function(fG, fI) {
		vg.setTransform(1, 0, 0, 1, fG + .34 * this.i, fI + 2 * abT + this.abU), bC.r2.textAlign(vg, 2);
		for (var aBq = this.j - 4 * abT - this.uA - this.abU, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(bf.abL[g[aB]], 0, .31 * this.i), 0, aB * aBq / 9);
		var fb = bf.n0;
		for (vg.setTransform(1, 0, 0, 1, fG + .39 * this.i, fI + 2 * abT + this.abU), bC.r2.textAlign(vg, 0), vg.fillText(bC.s1.a5E(100 * fb[0] / (1024 * Math.max(fb[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vg.fillText(fb[g[aB]].toString(), 0,
			aB * aBq / 9);
		vg.fillText(bC.s1.a5E(100 * (1 - ag.gx[aD.et] / fb[7]), 0), 0, aBq)
	}, this.abf = function(fG, fI) {
		vg.setTransform(1, 0, 0, 1, fG + .79 * this.i, fI + 2 * abT + this.abU), bC.r2.textAlign(vg, 2);
		var aB, aBq = this.j - 4 * abT - this.uA - this.abU;
		for (vg.fillStyle = bD.oM, aB = 2; 0 <= aB; aB--) vg.fillText(bC.zH.a4E(bf.abL[aB + 8], 0, .31 * this.i), 0, aB * aBq / 9);
		vg.fillText(bC.zH.a4E(bf.abL[18], 0, .31 * this.i), 0, 3 * aBq / 9), vg.fillStyle = bD.oL, vg.fillText(bC.zH.a4E(bf.abL[11], 0, .31 * this.i), 0, 4 * aBq / 9), vg.fillStyle = bD.oe, vg.fillText(bC.zH.a4E(bf.abL[13], 0, .31 * this.i), 0,
				5 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abL[15], 0, .31 * this.i), 0, 6 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abL[16], 0, .31 * this.i), 0, 7 * aBq / 9), vg.fillText(bC.zH.a4E(bf.abL[12], 0, .31 * this.i), 0, 8 * aBq / 9), vg
			.fillStyle = bD.od, vg.fillText(bC.zH.a4E(bf.abL[17], 0, .31 * this.i), 0, aBq), vg.fillStyle = bD.oM;
		var fb = bf.n0,
			aFu = fb[8] + fb[9] + fb[10] + fb[18],
			aFu = bC.s1.a0P(aFu),
			aR4 = vg.measureText(aFu).width,
			fG = (vg.setTransform(1, 0, 0, 1, fG + .83 * this.i + aR4, fI + 2 * abT + this.abU), vg.fillText(bC.s1.a0P(fb[8]), 0, 0), vg.fillText(bC.s1.a0P(fb[9]), 0, aBq / 9), vg.fillText(bC.s1.a0P(fb[10]), 0, 2 * aBq / 9), vg.fillText(bC.s1
				.a0P(fb[18]), 0, 3 * aBq / 9), vg.fillStyle = bD.oL, vg.fillText(aFu, 0, 4 * aBq / 9), vg.fillStyle = bD.oe, vg.fillText(bC.s1.a0P(fb[13]), 0, 5 * aBq / 9), vg.fillText(bC.s1.a0P(fb[15]), 0, 6 * aBq / 9), vg.fillText(bC.s1
				.a0P(fb[16]), 0, 7 * aBq / 9), vg.fillText(bC.s1.a0P(fb[12]), 0, 8 * aBq / 9), fb[12] + fb[13] + fb[15] + fb[16]);
		vg.fillStyle = bD.od, vg.fillText(bC.s1.a0P(fG), 0, aBq), vg.fillStyle = bD.o5
	}, this.a72 = function(g, a3Z, aAW) {
		var aB, e, fs;
		return this.abX < 0 || 1 < this.abX ? .25 : (aB = this.abX * (bf.aTi - 1), fs = g[e = Math.floor(aB)], fs += (aB - e) * (g[e < bf.aTi - 1 ? e + 1 : e] - fs), vg.strokeStyle = bD.o8, .04 < this.abX && this.abh(0, this.abS - a3Z * Math.pow(
				fs, aAW), aB * this.abR / (bf.aTi - 1), this.abS - a3Z * Math.pow(fs, aAW)), .04 < fs / bf.max[this.eG] && this.abh(aB * this.abR / (bf.aTi - 1), this.abS, aB * this.abR / (bf.aTi - 1), this.abS - a3Z * Math.pow(fs, aAW)), vg
			.fillStyle = bD.oh, vg.beginPath(), vg.arc(aB * this.abR / (bf.aTi - 1), this.abS - a3Z * Math.pow(fs, aAW), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vg.fill(), g = this.abX * bh.aCZ, g = 0 === ag.n4[aD.et] ? Math.floor(g * bf
				.abK) : Math.floor(g * bh.kR()), vg.fillStyle = bD.o5, vg.fillText(1 === aAW ? bC.s1.a5E(fs / 100, 2) : bC.s1.a0P(Math.floor(fs)), -this.tR, this.abS - a3Z * Math.pow(fs, aAW)), bC.r2.textAlign(vg, 1), vg.fillText(aW.aCM(g),
				aB * this.abR / (bf.aTi - 1), this.abS + this.abV - (a0.a1.iI() ? 2 : 0) - this.a8w), bC.r2.textAlign(vg, 2), a3Z * Math.pow(fs, aAW) / this.abS)
	}, this.abh = function(nV, nW, ni, nj) {
		vg.beginPath(), vg.moveTo(nV, nW), vg.lineTo(ni, nj), vg.stroke()
	}
}

function c0() {
	this.aTj = "https://territorial.io/changelog", this.aTo = "https://territorial.io/terms", this.aTp = "https://territorial.io/privacy", this.aTn = "https://territorial.io/tutorial", this.aTm = "https://territorial.io/players", this.aTk =
		"https://territorial.io/clans", this.aTl = "https://territorial.io/clan-results", this.aQD = "https://patreon.com/c/territorial", this.aDr = "https://play.google.com/store/apps/details?id=territorial.io", this.a2D =
		"https://apps.apple.com/app/id1581110913", this.aDs = "https://discord.gg/pthqvpTXmh", this.aDt = "https://www.instagram.com/davidtschacher/", this.zx =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dC() {
	this.y = new abi, this.zE = new abj, this.dh = function() {
		this.y.dh()
	}, this.ec = function() {
		0 !== this.y.aVt && this.y.aVt--
	}
}

function abj() {
	this.vf = function() {
		if (0 !== bR.y.aVt && (vg.globalAlpha = Math.min(bR.y.aVt / 580, 1), vg.drawImage(bR.y.abm, 1 + aS.zC(), 1 + aS.zD()), vg.globalAlpha = 1, aD.hX)) {
			for (var nV = im / iK, nW = io / iK, ni = (h.i + im) / iK, nj = (h.j + io) / iK, gi = bR.y.abn * iK, abo = bR.y.abo, aB = aD.kU - 1; 0 <= aB; aB--) ! function(aB, gi, nV, nW, ni, nj, abo) {
				var highlight;
				0 === ag.n4[aB] || 0 === ag.gx[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gi *= 2), ni = h.i * ((ag.j2[aB] + ag.j3[aB] + 1) / 2 - nV) / (ni - nV) - .5 * gi, nV = h.j * ((ag.j4[
					aB] + ag.j5[aB] + 1) / 2 - nW) / (nj - nW) - .5 * gi, ni > h.i) || nV > h.j || ni < -gi || nV < -gi || (highlight ? vg.setTransform(2 * iK, 0, 0, 2 * iK, ni, nV) : vg.setTransform(iK, 0, 0, iK, ni, nV), vg.drawImage(
					abo[aD.i3 ? bi.f7[aB] : 1], 0, 0))
			}(aB, gi, nV, nW, ni, nj, abo);
			vg.setTransform(iK, 0, 0, iK, 0, 0)
		}
	}
}

function abi() {
	this.abn = 28, this.aVt = 0, this.abm = null;
	var abq = this.abo = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function abv(i5, abw) {
		var fG, fI, ev, iT, a40 = bC.r2.xW(i5, i5),
			iB = bC.r2.getContext(a40, !0),
			i8 = bC.r2.getImageData(iB, i5, i5),
			xh = i8.data,
			lP = (i5 >> 1) - .5,
			abx = .5 + lP;
		for (abx *= abx, fI = 0; fI < i5; fI++)
			for (fG = 0; fG < i5; fG++) iT = (iT = fG - lP) * iT + (iT = fI - lP) * iT, xh[ev = 4 * (fI * i5 + fG)] = abw[0], xh[1 + ev] = abw[1], xh[2 + ev] = abw[2], xh[3 + ev] = (abx - iT) * abw[3] / abx;
		return iB.putImageData(i8, 0, 0), a40
	}

	function aax(aB, iB, a40, i5) {
		var highlight, fG, fI;
		0 !== ag.n4[aB] && 0 !== ag.gx[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i5 *= 2), fG = ag.j2[aB] + ag.j3[aB] + 1 - i5 - 2 >> 1, fI = ag.j4[aB] + ag.j5[aB] + 1 - i5 - 2 >> 1, highlight ? iB
			.drawImage(a40[aD.i3 ? 9 === aD.km && 5 === aE.hs[aB] ? 3 : bi.f7[aB] : aB < aD.kU ? 1 : 0], fG, fI, i5, i5) : iB.drawImage(a40[aD.i3 ? 9 === aD.km && 5 === aE.hs[aB] ? 3 : bi.f7[aB] : aB < aD.kU ? 1 : 0], fG, fI))
	}
	this.dh = function() {
		var sc;
		this.aVt = 700,
			function(sc) {
				var i5 = sc.abn;
				if (sc.abo = [], abq = [], aD.i3) {
					for (var aB = 0; aB <= aD.yJ; aB++) sc.abo.push(abv(i5, bi.aZI[bi.kr[aB]])), abq.push(abv(i5 >> 1, bi.aZI[bi.kr[aB]]));
					9 === aD.km && abq.push(abv(i5, bi.aZI[1]))
				} else sc.abo.push(abv(i5, bi.aZI[7])), sc.abo.push(abv(i5, bi.aZI[4])), abq.push(abv(i5 >> 1, bi.aZI[7]))
			}(this),
			function(sc, ac1) {
				var aB, abm = sc.abm,
					iB = bC.r2.getContext(abm, !0),
					f9 = aD.f6,
					i5 = sc.abn >> 1;
				iB.imageSmoothingEnabled = !1, iB.setTransform(1, 0, 0, 1, 0, 0), ac1 && iB.clearRect(0, 0, abm.width, abm.height);
				if (9 === aD.km) {
					i5 <<= 1;
					sc = az.kv[5];
					for (aB = f9 - sc; aB < f9; aB++) aax(aB, iB, abq, i5);
					f9 -= sc, i5 >>= 1
				}
				for (aB = aD.kU; aB < f9; aB++) aax(aB, iB, abq, i5)
			}(this, null !== (sc = this).abm && sc.abm.width === bU.fK - 2 && sc.abm.height === bU.fL - 2 || (sc.abm = bC.r2.xW(bU.fK - 2, bU.fL - 2), !1)), aD.hX || this.a5W()
	}, this.aZH = abv, this.a5W = function() {
		for (var f9 = aD.kU, i5 = this.abn, abo = this.abo, iB = bC.r2.getContext(this.abm, !0), aB = 0; aB < f9; aB++) aax(aB, iB, abo, i5)
	}
}

function dD() {
	function ac4() {
		8 === aD.km && 1 === aD.a18 && bT.a0k.a17()
	}

	function ac3(player) {
		aD.hX ? (ak.aIr(player), al.aMJ(), aD.ko && aD.qO.ec()) : b3.aEB(player)
	}
	this.pq = function(player) {
		aN.a1L(player, player === aD.et ? 21 : 22), ac3(player), ac4()
	}, this.qL = function(player) {
		1 === aD.a18 && 0 !== ag.n4[player] && 2 !== ag.a4W[player] && ac3(player), aD.a1B--, aD.a1A--, aN.a1L(player, 4), bC.gV.hK(2) && aW.mq(!0), ac4()
	}
}

function dN() {
	this.aW9 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBn = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bD.o5, "rgb(170,170,170)"
	], this.ac5 = [bD.o5, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bD.o5, bD.nw], this.ac6 = [bD.nw, bD.o5, bD.o5, bD.o5, bD.nw, bD.nw, bD.nw, bD.nw, bD.o5];
	var aMT = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aLm = ["rgba(" + aMT[0] + ",", "rgba(" + aMT[1] + ",", "rgba(" + aMT[2] + ",", "rgba(" + aMT[3] + ",", "rgba(" + aMT[4] + ",", "rgba(" + aMT[5] + ",", "rgba(" + aMT[6] + ",", "rgba(" + aMT[7] + ",", "rgba(" + aMT[8] + ",", "rgba(" + aMT[9] +
			","
		], this.aLn = ["rgb(" + aMT[0] + ")", "rgb(" + aMT[1] + ")", "rgb(" + aMT[2] + ")", "rgb(" + aMT[3] + ")", "rgb(" + aMT[4] + ")", "rgb(" + aMT[5] + ")", "rgb(" + aMT[6] + ")", "rgb(" + aMT[7] + ")", "rgb(" + aMT[8] + ")", "rgb(" + aMT[9] +
			")"
		], this.a1U = null, this.aZI = [
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
		], this.kr = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f7 = new Uint8Array(aD.f6), this.aBo = new Uint8Array(aD.f6), this.yP = new Uint16Array(aD.f6), this.yQ = new Uint16Array(this.kr.length + 1), this.yR = new Uint16Array(this.kr.length), this.di =
		function() {
			this.a1U = [L(520), L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528)]
		}, this.dh = function() {
			if (this.f7.fill(0), this.aBo.fill(0), this.ac7(), aD.i3) {
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
					for (aB = jk; aB < aD.yC; aB++) {
						var i1 = kr[eh];
						if (acJ[i1]) acJ[i1]--, f7[aB] = acK[i1];
						else if (aB--, 9 <= ++eh) return console.log("error 325")
					}
				}() : this.ec();
				! function() {
					for (var f9 = aD.f6, yP = bi.yP, yQ = bi.yQ, yR = bi.yR, f7 = bi.f7, kr = bi.kr, yI = kr.length, eU = new Array(yI), aB = 0; aB < yI; aB++) eU[aB] = [];
					for (aB = 0; aB < f9; aB++) eU[kr[f7[aB]]].push(aB);
					for (aB = 1; aB <= yI; aB++) yQ[aB] = yQ[aB - 1] + eU[aB - 1].length;
					for (aB = 0; aB < yI; aB++)
						for (var gc = eU[aB].length, lP = yQ[aB], i1 = 0; i1 < gc; i1++) yP[i1 + lP] = eU[aB][i1];
					var kU = aD.kU;
					for (aB = 0; aB < yI; aB++)
						for (gc = eU[aB].length, lP = yQ[aB], i1 = 0; i1 < gc; i1++)
							if (yP[i1 + lP] >= kU) {
								yR[aB] = i1;
								break
							}
				}(), ! function() {
					for (var f9 = aD.f6, f7 = bi.f7, aBo = bi.aBo, kr = bi.kr, aB = 0; aB < f9; aB++) aBo[aB] = kr[f7[aB]];
					9 === aD.km && aBo.fill(1, f9 - az.kv[5])
				}()
			}
		}, this.ac7 = function() {
			for (var aB = this.kr.length - 1; 0 <= aB; aB--) this.kr[aB] = aB
		}, this.ec = function() {
			var a0E = new Uint8Array(aD.kU),
				a0F = new Uint8Array(aD.kU),
				acC = new Uint16Array(8),
				acD = new Uint16Array(this.kr.length);
			this.acE(a0E, a0F, acC, 1), this.aIM(acC), this.acF(acD, a0E, a0F), this.acG(a0E, a0F, acD), this.acH()
		}, this.acE = function(a0E, a0F, acJ, acL) {
			for (var fT, e, acM, f9 = this.kr.length - acL, g = new Uint16Array(f9), aYx = this.aYx, colorsData = aD.data.colorsData, aB = aD.kU - 1; 0 <= aB; aB--) {
				for (fT = f9; acL <= fT; fT--) g[fT - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aYx[fT][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aYx[fT][1]) + Math.abs(4 * (63 & colorsData[aB]) - aYx[fT][2]);
				for (acM = 768, fT = f9 - 1; 0 <= fT; fT--) g[e = (fT + aB) % f9] < acM && (acM = g[e], a0E[aB] = e);
				for (acJ[a0E[aB]] += 4, acM = 768, fT = f9 - 1; 0 <= fT; fT--) g[e = (fT + aB) % f9] < acM && e !== a0E[aB] && (acM = g[e], a0F[aB] = e);
				acJ[a0F[aB]]++
			}
		}, this.aIM = function(acJ) {
			for (var fT, lR, f9 = this.kr.length - 1, aB = f9; 0 <= aB; aB--) this.kr[aB] = aB;
			for (aB = f9 - 1; 0 <= aB; aB--) acJ[aB]++;
			for (aB = 1; aB <= f9; aB++) {
				for (lR = 0, fT = 1; fT < f9; fT++) acJ[fT] > acJ[lR] && (lR = fT);
				acJ[lR] = 0, this.kr[aB] = lR + 1
			}
		}, this.acF = function(acD, a0E, a0F) {
			var fT, a1q, eh, fC, e, nh, ti, acN = this.kr.length - 1,
				rV = new Uint16Array(acN),
				acO = [],
				acP = 0,
				a1p = [],
				acQ = [];
			loop: for (var aB = 0; aB < aD.kU; aB++)
				if (null !== (a1q = bC.s1.a1r(ag.a1o[aB]))) {
					for (fT = a1p.length - 1; 0 <= fT; fT--)
						if (a1q === a1p[fT]) {
							acQ[fT].push(aB), acP = Math.max(acP, acQ[fT].length);
							continue loop
						} a1p.push(a1q), acO.push(!1), acQ.push([aB]), acP = Math.max(acP, 1)
				}
			for (; 2 < aD.yJ && acP > bN.fa(aD.kU, aD.yJ);) aD.yJ--, aD.km--;
			for (fT = a1p.length - 1; 0 <= fT; fT--) {
				for (fC = -1, eh = a1p.length - 1; 0 <= eh; eh--) !acO[eh] && (-1 === fC || acQ[eh].length > acQ[fC].length) && (fC = eh);
				for (eh = acN - 1; 0 <= eh; eh--) rV[eh] = 1;
				for (eh = acQ[fC].length - 1; 0 <= eh; eh--) rV[a0E[acQ[fC][eh]]] += 3, rV[a0F[acQ[fC][eh]]]++;
				for (aB = acN - 1; 0 <= aB; aB--) {
					for (e = fC % acN, eh = acN - 1; 0 <= eh; eh--) rV[eh] > rV[e] && (e = eh);
					for (nh = -1, eh = aD.yJ; 0 < eh; eh--)
						if (this.kr[eh] === e + 1) {
							nh = eh;
							break
						} if (rV[e] = 0, -1 !== nh) {
						for (ti = 0, eh = aD.yJ; 0 < eh; eh--) acD[nh] > acD[eh] && ti++;
						if (ti !== aD.yJ - 1) {
							for (eh = acQ[fC].length - 1; 0 <= eh; eh--) acD[nh]++, this.f7[acQ[fC][eh]] = nh;
							break
						}
					}
				}
				acO[fC] = !0
			}
		}, this.acG = function(a0E, a0F, acD) {
			for (var aB, iS, f9 = this.kr.length - 1, border = bN.fa(aD.kU, aD.yJ), acR = (0 < aD.kU % aD.yJ && border++, new Uint8Array(1 + f9)), fT = f9; 1 <= fT; fT--) acR[this.kr[fT]] = fT;
			for (aB = 0; aB < aD.kU; aB++) iS = acR[a0E[aB] + 1], 0 === this.f7[aB] && iS <= aD.yJ && acD[iS] < border && (acD[iS]++, this.f7[aB] = iS);
			for (aB = 0; aB < aD.kU; aB++) iS = acR[a0F[aB] + 1], 0 === this.f7[aB] && iS <= aD.yJ && acD[iS] < border && (acD[iS]++, this.f7[aB] = iS);
			for (fT = aD.yJ; 1 <= fT; fT--)
				for (aB = aD.kU - 1; 0 <= aB && !(acD[fT] >= border); aB--) 0 === this.f7[aB] && (acD[fT]++, this.f7[aB] = fT)
		}, this.acH = function() {
			if (aD.yJ < 8) aD.yJ++, aD.km++, aD.yK = 1;
			else
				for (var aB = aD.kU; aB < aD.f6; aB++) this.f7[aB] = 1 + aB % aD.yJ
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
				if (ac.aIW(gh, player)) continue loop;
				acS = acS || ac.iN(gh), acT = acT || ac.aIV(gh)
			}
			acS ? gq[player].push(gp[player][aB]) : acT ? fY[player].push(gp[player][aB]) : ac.yl(gp[player][aB], player), gp[player][aB] = gp[player][f9 - 1], gp[player].pop(), f9--
		}
	}, this.gn = function() {
		ag.gx[g4] -= g5
	}, this.go = function(border) {
		for (var f9 = border.length, aB = f9 - 1; 0 <= aB; aB--) ac.z6(g4, border[aB]) || (border[aB] = border[f9 - 1], border.pop(), f9--)
	}, this.gr = function(border) {
		for (var f9 = border.length, aB = f9 - 1; 0 <= aB; aB--) !ac.z6(g4, border[aB]) && ac.f4(border[aB]) && (border[aB] = border[f9 - 1], border.pop(), f9--)
	}, this.gs = function(border) {
		for (var fC, gh, f9 = border.length, fB = ac.fB, aB = f9 - 1; 0 <= aB; aB--)
			for (fC = 3; 0 <= fC; fC--)
				if (gh = border[aB] + fB[fC], ac.aIW(gh, g4)) {
					ag.gp[g4].push(border[aB]), border[aB] = border[f9 - 1], border.pop(), f9--;
					break
				}
	}, this.gt = function() {
		for (var fC, gh, fB = ac.fB, aB = g5 - 1; 0 <= aB; aB--)
			for (fC = 3; 0 <= fC; fC--) gh = g7[aB] + fB[fC], ac.z9(g4, gh) && ac.aIc(gh) && (ag.gp[g4].push(gh), ac.ge(gh, g4))
	}, this.gu = function() {
		var fG, fI;
		loop: for (; ag.j4[g4] < ag.j5[g4];) {
			for (fG = ag.j3[g4]; fG >= ag.j2[g4]; fG--)
				if (ac.z6(g4, 4 * (ag.j4[g4] * bU.fK + fG))) break loop;
			ag.j4[g4]++
		}
		loop: for (; ag.j4[g4] < ag.j5[g4];) {
			for (fG = ag.j3[g4]; fG >= ag.j2[g4]; fG--)
				if (ac.z6(g4, 4 * (ag.j5[g4] * bU.fK + fG))) break loop;
			ag.j5[g4]--
		}
		loop: for (; ag.j2[g4] < ag.j3[g4];) {
			for (fI = ag.j5[g4]; fI >= ag.j4[g4]; fI--)
				if (ac.z6(g4, 4 * (fI * bU.fK + ag.j2[g4]))) break loop;
			ag.j2[g4]++
		}
		loop: for (; ag.j2[g4] < ag.j3[g4];) {
			for (fI = ag.j5[g4]; fI >= ag.j4[g4]; fI--)
				if (ac.z6(g4, 4 * (fI * bU.fK + ag.j3[g4]))) break loop;
			ag.j3[g4]--
		}
	}, this.f2 = function(player, jd) {
		return 0 === bi.f7[player] || bi.f7[player] !== bi.f7[jd]
	}, this.hf = function(player) {
		for (var aB, gi, f9 = ag.gp[player].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < f9; aB++)
				if (ac.f0(ag.gp[player][aB] + gi)) return !0;
		return !1
	}, this.aIn = function(player) {
		for (var aB, gi, f9 = ag.gp[player].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < f9; aB++)
				if (ac.jf(ag.gp[player][aB]) && ac.f0(ag.gp[player][aB] + gi)) return !0;
		return !1
	}, this.hi = function(a4c, a4d) {
		for (var aB, eY, gi, gh, aa1 = ag.gp[a4c].length, aa2 = ag.gp[a4d].length, fB = (aa2 < aa1 && (eY = a4c, a4c = a4d, a4d = eY, eY = aa1, aa1 = aa2, 0), ac.fB), fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < aa1; aB++)
				if (gh = ag.gp[a4c][aB] + gi, ac.gj(gh) && ac.f1(gh) === a4d) return !0;
		return !1
	}, this.aIo = function(a4c, a4d) {
		for (var aB, gi, gh, aa1 = ag.gp[a4c].length, fB = ac.fB, fC = 3; 0 <= fC; fC--)
			for (gi = fB[fC], aB = 0; aB < aa1; aB++)
				if (ac.jf(ag.gp[a4c][aB]) && (gh = ag.gp[a4c][aB] + gi, ac.gj(gh)) && ac.f1(gh) === a4d) return !0;
		return !1
	}
}

function dZ() {
	this.qX = new acU
}

function acU() {
	this.hl = function(player) {
		bC.gV.a4X(player) && aN.za(80, L(529), 637, 0, bD.ov, bD.o2, -1, !1)
	}, this.ho = function(player) {
		bC.gV.a4X(player) && aN.za(80, L(530), 637, 0, bD.ov, bD.o2, -1, !1)
	}
}

function acV() {
	this.acW = 0, this.ec = function() {
		aO.ec(), aZ.ec(), h.ec(), b0.y.ec(), ax.aHr(), bW.eQ.ec(), bh.dp && (bh.dp = !1, aa.vf())
	}
}

function acX() {
	this.eX = bh.eX, this.eG = 0, this.acW = 0, this.aHp = 0, this.acY = null, this.acZ = 7, this.aca = 0, this.dh = function() {
		this.aHp = 0, this.acY = [], this.eG = 0, this.acW = 0
	}, this.aV5 = function(aC) {
		if (aD.hX) this.aCa(aC);
		else if (this.acY.push(aC), 2 === aD.a18) {
			for (var aB = 0; aB < this.acY.length; aB++) bA.pQ.ec(this.acY[aB]);
			this.acY = []
		}
	}, this.aCa = function(aC) {
		2 !== aD.a18 && (bA.pQ.ec(aC), bB.ec(), aW.aCa(this.aHp), this.aHp === aD.a5c ? (aD.qO.ec(), this.aHp = 0, this.eG = 0, this.acW = 0, this.eX = bh.eX) : (this.aHp++, af.a5V(), af.mq(!0), bd.aD9()))
	}, this.ec = function() {
		h.ec(), aD.hX ? (bh.dp = aW.aCa(-1) || bh.dp, ms()) : (0 !== this.eG || bh.eX >= this.eX && (this.eX += bh.aCZ * Math.floor(1 + (bh.eX - this.eX) / bh.aCZ), 2 === aD.a18 ? mg() : this.acb(), this.eG++, 27 < bh.eX - this.aca)) && this
		.acc(), mn(), bh.dp && (bh.dp = !1, zA()), this.aca = bh.eX
	}, this.acc = function() {
		bh.dp = !0, mp(), this.eG = 0
	}, this.acb = function() {
		var wV, aB;
		if (this.acW !== 7 * this.aHp) mi(), bd.aD9();
		else {
			wV = !1;
			loop: for (; this.acd() && (wV = !0, mi(), 2 !== aD.a18) && 0 < this.acY.length;)
				for (aB = this.acZ - 2; 0 <= aB; aB--)
					if (mi(), 2 === aD.a18) break loop;
			wV ? bd.aD9() : (mg(), bd.a5Y())
		}
	}, this.acd = function() {
		return 0 < this.acY.length && (this.aHp++, bA.pQ.ec(this.acY[0]), this.acY.shift(), !0)
	}
}

function ace() {
	var acf, acg, ach, aHp, aci, eG = 0,
		eX = bh.eX;

	function acl() {
		! function() {
			if (!aD.hX) return;
			if (aD.ko) return;
			if (2 !== aD.a18)
				if (aci % 7 != 0) aci++;
				else if (aHp === aD.a5c) {
				if (!aco()) return;
				aW.aCa(aHp), aD.qO.ec()
			} else {
				if (!aco()) return;
				aci++, aHp++, af.a5V(), af.mq(!0)
			}
			return 1
		}() && aco() && mi()
	}

	function acm() {
		eG = 0, (aD.hX ? (bh.dp = aW.aCa(aHp - (aci % 7 == 0 ? 0 : 1) + aci % 7 / 7) || bh.dp, ms) : aM.hJ || !bE.a5z ? ms : (bh.dp = !0, mp))()
	}

	function aco() {
		var aB, f9, acp = bB.qM.aWZ,
			fs = bB.qM.aWa,
			fu = bB.qM.aWb,
			fw = bB.qM.aWc,
			acq = bB.qM.aWd,
			acr = bB.qM.aWe;
		if (!(acf >= acr.length)) {
			if (acr = acr[acf], acq[acf]) {
				for (f9 = acg + acr, aB = acg; aB < f9; aB++) bA.pQ.qB(acp[aB], fs[aB], fu[aB], fw[aB]);
				acg += acr, acf++
			} else ++ach >= acr && (acf++, ach = 0);
			return 1
		}
		aN.a2T("Replay file smaller than expected."), bE.a3I(!1), aD.a18 = 2
	}
	this.acW = 0, this.dh = function() {
		aci = aHp = ach = acg = acf = 0
	}, this.ec = function() {
		var aaR;
		h.ec(), bE.a9n() < 1.7 ? 0 === eG ? bh.eX >= eX && (aaR = bh.aCZ / bE.a9n(), eX += aaR * Math.floor(1 + (bh.eX - eX) / aaR), 2 === aD.a18 || aM.hJ || !bE.a5z ? mg() : (acl(), bd.aD9()), eG++) : acm() : function() {
			var aaR;
			if (bh.eX >= eX)
				if (2 === aD.a18 || aM.hJ || !bE.a5z) mg(), eX = bh.eX;
				else {
					for (aaR = bh.aCZ / bE.a9n(), 16 < (bh.eX - eX) / aaR && (eX = bh.eX - 16 * aaR); bh.eX >= eX && 2 !== aD.a18;) eX += aaR, acl();
					bd.aD9()
				} acm()
		}(), mn(), bh.dp && (bh.dp = !1, zA())
	}, this.a1J = function() {
		bB.qM.aWe.length - acf <= 2 || aN.a2T("Replay file larger than expected.")
	}
}

function acs() {
	var eG = 0,
		eX = bh.eX;
	this.acW = 0, this.ec = function() {
		h.ec(), aD.hX ? ms() : 0 === eG ? bh.eX >= eX && (eX += bh.aCZ * Math.floor(1 + (bh.eX - eX) / bh.aCZ), 2 === aD.a18 || aM.hJ ? mg() : (mi(), bd.aD9()), eG++) : ((aM.hJ ? ms : (bh.dp = !0, mp))(), eG = 0), mn(), bh.dp && (bh.dp = !1,
		zA())
	}
}

function dV() {
	this.a1I = null, this.dp = !1, this.eX = 0, this.aCZ = 56;
	var act = 0;

	function acu() {
		bh.eX = act = performance.now(), bh.a1I.ec(), window.requestAnimationFrame(acu)
	}
	this.dh = function() {
		this.a5w(), window.requestAnimationFrame(acu), this.eX = performance.now()
	}, this.a5o = function() {
		aD.hI ? (this.a1I = new ace, this.a1I.dh()) : aD.ko ? this.a1I = new acs : (this.a1I = new acX, this.a1I.dh())
	}, this.a5w = function() {
		this.a1I = new acV, this.dp = !0
	}, this.ec = function() {
		this.a1I.acW++
	}, this.kR = function() {
		return this.a1I.acW
	}, this.aUn = function() {
		var eY = performance.now();
		eY < act + 1e3 || (this.eX = eY, this.a1I.ec())
	}
}

function cv() {
	var aHB = 0,
		acv = !0;

	function acw(id) {
		id = [L(531), L(532), L(533), L(534)][id];
		aN.a7m(id)
	}
	this.ec = function() {
		var eY, a8B;
		bh.eX < aHB || (aHB = bh.eX + 3e3, aD.hI) || aD.ko || bC.gV.hL(aD.et) || (eY = new Date, a8B = eY.getUTCSeconds(), acv ? a8B < 43 && (acv = !1) : a8B < 43 || (aHB += 52e3, acv = !0, (a8B = (eY.getUTCMinutes() + 2) % 60) % 10 == 0 ? aD
			.km < 7 && acw(0) : a8B % 10 == 5 ? 7 !== aD.km && 10 !== aD.km || acw(1) : a8B % 10 == 7 ? 8 === aD.km && acw(2) : a8B % 10 == 2 && 9 === aD.km && acw(3)))
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
	this.a2k = function(e) {
		return 1 < e.touches.length ? (acy = bh.eX, acx = 3, acz(e), aL.sJ(), !0) : (acx = 0, !1)
	}, this.a2l = function(e) {
		var aJi, iQ, iR;
		return 0 !== aD.a18 && 1 < e.touches.length && (acx = Math.max(acx - 1, 0), aH.nn() && (aJi = ad0(), acz(e), e = ad0(), iQ = Math.floor((nV + ni) / 2), iR = Math.floor((nW + nj) / 2), aS.aAE(iQ, iR, Math.max(.125, e) / Math.max(.125,
			aJi)), bh.dp = !0), !0)
	}, this.a38 = function() {
		var fG, fI;
		return !!(acx && (acx = 0, bh.eX < acy + 500)) && (fG = (nV + ni) / 2, fI = (nW + nj) / 2, aL.a32(fG, fI), aL.click(fG, fI, !0) && (bh.dp = !0), !0)
	}
}

function d6() {
	this.size = 0, this.eG = 0, this.aC = null, this.dh = function(aC) {
		this.eG = 0, this.aC = aC, this.size = aC.length
	}, this.uk = function() {
		this.aC = null
	}, this.qA = function(size) {
		for (var fb = 0, aC = this.aC, nn = this.eG + size - 1, aB = this.eG; aB <= nn; aB++) fb |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nn - aB;
		return this.eG += size, this.eG > 8 * this.size && console.error("Unwrapper Overflow"), fb
	}, this.aVD = function(size) {
		var fT = size >> 1;
		return (1 << fT) * this.qA(size - fT) + this.qA(fT)
	}, this.aVE = function(ad1) {
		return this.size === bF.aVC(ad1)
	}, this.aWr = function(xy, ad2, ad3) {
		var gc = this.qA(xy);
		if (!gc) return null;
		for (var xy = Math.max(gc, ad3), g = new(ad2 <= 8 ? Uint8Array : ad2 <= 16 ? Uint16Array : Uint32Array)(xy), aB = 0; aB < gc; aB++) g[aB] = this.qA(ad2);
		ad3 = g[gc - 1];
		return ad3 && g.fill(ad3, gc), g
	}, this.aWs = function(xy, ad4, ad3) {
		var gc = this.qA(xy);
		if (!gc) return null;
		for (var xy = Math.max(gc, ad3), g = new Array(xy), aB = 0; aB < gc; aB++) g[aB] = this.aWp(ad4);
		return g.fill(g[gc - 1], gc), g
	}, this.aWp = function(xy) {
		return bI.x5.x9(this.qA(xy))
	}, this.aWq = function() {
		var qj = bH.tN.tO(bH.tN.tP(this.qA(30))),
			qj = bC.s1.a5Q(qj, "_", "/");
		qj = bC.s1.a5Q(qj, "-", "+");
		for (var ad5 = "";
			(qj.length + ad5.length) % 4;) ad5 += "=";
		qj = "data:image/png;base64," + qj + ad5;
		var aJK = new Image;
		aJK.onload = function() {
			bB.aKH.aKI(aJK), aJK.onload = null, aJK = null
		}, aJK.src = qj
	}
}

function dP() {
	this.aXn = 0, this.aXo = 0, this.aXj = 0, this.aXk = 0, this.aXl = 0, this.aXm = 0, this.aDA = [0, 0, 0, 0], this.nm = function() {
		this.aXn = aS.zC(), this.aXo = aS.zD(), this.aXj = -this.aXn, this.aXk = -this.aXo, this.aXl = h.i / iK, this.aXm = h.j / iK, this.aDA[0] = Math.floor(this.aXj), this.aDA[1] = Math.floor(this.aXk), this.aDA[2] = Math.floor(this.aDA[0] +
			this.aXl + 1), this.aDA[3] = Math.floor(this.aDA[1] + this.aXm + 1), bd.aD7 = !0
	}
}

function cq() {
	var a8s, nH;
	this.dh = function() {
		a8s = 1, nH = 0
	}, this.ec = function() {
		0 < a8s && (nH = 0 === nH ? bh.eX + 16 : nH, a8s = (a8s -= .001 * (bh.eX - nH)) < 0 ? 0 : a8s, nH = bh.eX, bh.dp = !0)
	}, this.vf = function() {
		0 < a8s && (vg.fillStyle = "rgba(0,0,0," + a8s + ")", vg.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eG = 0, this.aC = null, this.dh = function(aC) {
		this.eG = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(ad1) {
		return this.dh(new Uint8Array(this.aVC(ad1))), this.aC
	}, this.uk = function() {
		this.aC = null
	}, this.a8 = function(size, a8G) {
		for (var aC = this.aC, nn = this.eG + size - 1, aB = this.eG; aB <= nn; aB++) aC[aB >> 3] |= (a8G >> nn - aB & 1) << 7 - (7 & aB);
		this.eG += size, this.eG > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aVB = function(size, a8G) {
		var fT = size >> 1,
			fC = 1 << fT;
		this.a8(size - fT, bN.fa(a8G, fC)), this.a8(fT, a8G % fC)
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
	}, this.dn = function(g, xy, ad2) {
		var adD = bC.rA.a3u(g);
		this.a8(xy, adD);
		for (var aB = 0; aB < adD; aB++) this.a8(ad2, g[aB])
	}, this.aX9 = function(g, xy, ad4) {
		var adD = bC.rA.a3u(g);
		this.a8(xy, adD);
		for (var aB = 0; aB < adD; aB++) this.aX7(g[aB], ad4)
	}, this.aX7 = function(qj, xy) {
		var f9 = qj.length;
		this.a8(xy, f9);
		for (var aB = 0; aB < f9; aB++) this.a8(16, qj.charCodeAt(aB))
	}, this.aX8 = function(a40) {
		var adE = (a40 = a40.toDataURL()).split(",");
		if (adE.length < 2) console.log("error 266");
		else {
			a40 = bC.s1.a5Q(a40 = adE[adE.length - 1], "/", "_"), a40 = bC.s1.a5Q(a40, "\\+", "-");
			var a40 = bC.s1.a5Q(a40, "=", ""),
				xI = bI.tN.xF(a40),
				f9 = xI.length;
			this.a8(30, f9);
			for (var aB = 0; aB < f9; aB++) this.a8(6, xI[aB])
		}
	}
}
a(), self.aiCommand746 = function(fb) {
	0 === fb ? bv() : 1 !== fb || !a0 || 1 !== a0.id || a0.e0 < 14 || bL.fc()
}, setTimeout(bv, 1e4), window.onload = function() {
	bv()
};