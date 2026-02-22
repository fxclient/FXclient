var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fv, fw, fx, fy, fz, g0, g1, g2, g3, g4, g5, g6, g7, iG, ii, ij,
	a8p, m1, kB, a2R, vX, z6, aCu, a5c, a5d, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "   ", "flex", "hidden", "1em", "span", "Data", "territorial.io", "0.5em",
		" / ", "pre", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "break-word",
		"50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave",
		"inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload",
		"wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo",
		"loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon",
		"Offensive Name", "Interest", "Hate Speech", "False Reporter", "Cheater", "CRTOR", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "ADMIN", "@room", "255,255,255", "1v1", "1 Minute",
		"1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
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

function bt(bu) {
	l && !bu || (bw(), bL = new bx, bK = new by, bA = new bz, bB = new c0, aD = new c1, b7 = new c2, bF = new c3, bG = new c4, aE = new c5, aF = new c6, aG = new c7, aH = new c8, aI = new c9, aJ = new cA, aK = new cB, aL = new cC, aM = new cD, aN =
		new cE, aO = new cF, aP = new cG, aQ = new cH, aR = new cI, aS = new cJ, aT = new cK, aU = new cL, aV = new cM, aW = new cN, aX = new cO, aY = new cP, aZ = new cQ, aa = new cR, ab = new cS, ac = new cT, ak = new cU, al = new cV, an =
		new cW, am = new cX, ad = new cY, ae = new cZ, ah = new ca, af = new cb, ag = new cc, ai = new cd, az = new ce, aj = new cf, ap = new cg, aq = new ch, ar = new ci, b0 = new cj, ay = new ck, ao = new cl, at = new cm, au = new cn, av =
		new co, h = new cp, aw = new cq, ax = new cr, b1 = new cs, b2 = new ct, b3 = new cu, b4 = new cv, b5 = new cw, b6 = new cx, b8 = new cy, b9 = new cz, bC = new d0, bD = new a6, bE = new d1, bH = new d2, bI = new d3, bJ = new d4, bM =
		new d5, bN = new d6, bO = new d7, bP = new d8, bQ = new d9, bR = new dA, bS = new dB, bT = new dC, t = new dD, bU = new dE, a0 = new dF, l = new dG, bi = new dH, bj = new dI, bg = new dJ, bh = new dK, ba = new dL, bb = new dM, bV =
		new dN, bW = new dO, bd = new dP, be = new dQ, bf = new dR, bk = new dS, bc = new dT, o = new dU, bl = new dV, bm = new dW, bn = new dX, bp = new dY, bq = new dZ, br = new da, bs = new db, l.dd(), a0.dd(), h.de(), bj.dd(), b7.dd(), b7
		.df(), (bX = new dg).dd(), bA.dd(), bV.dd(), b0.dd(), bF.dd(), bG.dd(), bS.dd(), t.dd(), bY = new dh, h.dd(), bf.dd(), bc.dd(), bW.dd(), bZ = new di, ay.dd(), ae.dj(), bU.dd(), ap.dd(), aa.dd(), aT.dd(), ai.dd(), bJ.dd(), ab.dd(), bf
		.dk = !0, setTimeout(function() {
			bS.a7(2, 14071)
		}, 0), t.u(5, 5), bI.dl() || a0.a1.dm(), h.dn(), l.m = 1)
}

function dG() {
	this.dp = 1118;
	this.rVersion = 17, this.dt = 0, this.dd = function() {
		this.du = 2;
		this.n = "2.15.10", this.dw = "22 Feb 2026 [" + this.n + "]";
		var dx = window.location.hostname.toLowerCase();
		this.a9 = !0, this.dy = 0 <= dx.indexOf("game.territorial.io"), this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.e0 = (new Date).getTime() % 1048576
	}, this.m = 0
}

function e1() {
	var e2 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e3 = [100, 60, 30, 15, 6, 1],
		e4 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e5 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e7 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"],
		e9 = (this.e8 = [
			["", "", ""],
			["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
			["1 Minute", "1 Hour", "1 Day"],
			["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
			["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
			["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
		], ["Offensive Name", "Hate Speech", "Block Account", "Ban IP"]);
	this.eA = function(id, eB, eC) {
		eB = this.eD(eB);
		return +(e4[eB][id] > eC)
	}, this.eD = function(eB) {
		for (var aB = 0; aB < e3.length; aB++)
			if (e3[aB] <= eB) return aB;
		return e3.length
	}, this.eE = function(eB) {
		return e2[this.eD(eB)]
	}, this.eF = function(id, eG) {
		return e5[id].replace(new RegExp("x", "g"), eG)
	}, this.eH = function(id, eG) {
		return e7[id].replace(new RegExp("x", "g"), eG)
	}, this.eI = function(id, eJ) {
		return ("CRTOR" === eJ || "ADMIN" === eJ ? e9 : this.e8[5])[id]
	}
}

function dE() {
	this.eK = new eL, this.eM = new eN, this.dd = function() {
		a0.a1.eO()
	}, this.eP = function() {
		return bj.eQ.data[160].value
	}
}

function eL() {
	var eR = 12e3;
	this.show = function(eS) {
		return !eS && !bU.eP() && (0 === a0.id ? bU.eM.show() : !(bf.eT < eR) && (eS = 1 === a0.id ? 72e4 : 108e4, eR = bf.eT + eS, 2 === l.du) && a0.a1.eV(Math.floor(eS)))
	}
}

function eN() {
	var eW = null,
		eR = 2e4,
		eX = 0;
	this.eY = function() {
		bf.eT < eR || (eR = bf.eT + 1e4, 0 !== a0.id) || eW || bU.eP() || (b0.y.eZ(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b0.ea.eb(5) : eR = bf.eT + 1e3)
	}, this.ec = function(ed) {
		eW = ed
	}, this.show = function() {
		return !(!eW || bf.eT < eX) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eX = bf.eT + 6e4, (new ee).show(eW.ef, eW.colors, eW.id), !(eW = null)))
	}
}

function cX() {
	this.eg = new eh
}

function eh() {
	this.ei = function(ej) {
		var em;
		return bS.ek(bS.el) && aD.data.passableMountains && (em = ac.en(ej), this.eo(aD.ep, em) || this.eq(aD.ep, em)) && 0 !== (em = function(fB) {
			for (var fC = bM.fD(fB), fE = bM.fF(fB), max = Math.max(bS.fG, bS.fH) - 2, fI = max * max, fJ = !1, fK = 0, fL = 0; fL < max; fL++) {
				var fM, er = function(fC, fE, fL) {
					for (var aB = 0; aB <= fL; aB++)
						for (var fO = -1; fO < 2; fO += 2)
							for (var fP = -1; fP < 2; fP += 2)
								for (var ed = 0; ed < 2; ed++) {
									var ej = function(fC, fE) {
										if (bM.fR(fC, fE)) {
											fC = bM.fS(fC, fE), fE = bM.ev(fC);
											if (ac.f0(fE) && ac.fT(fE)) return fC
										}
										return 0
									}(fC + ed * fO * aB + (1 - ed) * fP * fL, fE + ed * fP * fL + (1 - ed) * fO * aB);
									if (ej) return ej
								}
					return 0
				}(fC, fE, fL);
				er && (fM = bM.fN(fC, fE, er)) < fI && (fK = er, fI = fM, fJ || (fJ = !0, max = Math.floor(Math.sqrt(fM)) + 1))
			}
			return fK
		}(bM.et(ej))) && (ej = bM.ev(em), ac.ew(ej) || (ej = ac.ex(ej)) !== aD.ep && bs.ey(ej, aD.ep)) ? em : 0
	}, this.ez = function(player, er) {
		er = bM.ev(er);
		if (ac.f0(er)) {
			if (ac.ew(er)) bO.f1[0] = aD.f2;
			else if (ac.ex(er) !== bO.f1[0]) return !1;
			for (var f3 = function(ej) {
					var f7 = ac.f7,
						f3 = [];
					loop: for (var f8 = 3; 0 <= f8; f8--) {
						var f9 = ej + f7[f8];
						if (ac.fA(f9)) {
							for (var id = ac.en(f9), aB = 0; aB < f3.length; aB++)
								if (id === f3[aB]) continue loop;
							bO.f6[f3.length] = f9, f3.push(id)
						}
					}
					return f3
				}(er), f5 = f3.length, aB = 0; aB < f5; aB++)
				if (this.eo(player, f3[aB]) || this.eq(player, f3[aB])) return bO.f6[0] = bO.f6[aB], !0
		}
		return !1
	}, this.eo = function(player, em) {
		for (var fU = ag.fU[player], f5 = fU.length, fV = Math.max(bL.fW(f5, 12), 1), f7 = ac.f7, aB = 0; aB < f5; aB += fV)
			for (var eu = fU[aB], f8 = 3; 0 <= f8; f8--) {
				var f9 = eu + f7[f8];
				if (ac.fA(f9) && em === ac.en(f9)) return !0
			}
		return !1
	}, this.eq = function(player, em) {
		for (var fU = ag.fU[player], f5 = fU.length, f7 = ac.f7, aB = 0; aB < f5; aB++)
			for (var eu = fU[aB], f8 = 3; 0 <= f8; f8--) {
				var f9 = eu + f7[f8];
				if (ac.fA(f9) && em === ac.en(f9)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fZ = new Uint16Array(2), this.fa = new Uint16Array(2), this.fb = new Int32Array(2), this.fc = new Uint32Array(2), this.fd = new Uint32Array(2), this.fe = new Uint8Array(4), this.ff = new Uint8Array(4), this.f6 =
		new Uint32Array(4), this.fg = new Uint32Array(5), this.f1 = new Uint32Array(8), this.fh = new Uint32Array(8), this.fi = new Uint16Array(16), this.fj = new Uint16Array(512), this.fk = new Uint16Array(512), this.fl = new Uint16Array(512), this
		.fm = new Uint16Array(0), this.dd = function() {
			var f5 = bS.fG * bS.fH;
			this.fm.length !== f5 && (this.fm = new Uint16Array(f5))
		}, this.fn = function(g, fo) {
			return g[0] = fo, g
		}, this.fp = function(g, fo, fq) {
			return g[0] = fo, g[1] = fq, g
		}, this.fr = function(g, fo, fq, fs) {
			return g[0] = fo, g[1] = fq, g[2] = fs, g
		}, this.ft = function(g, fo, fq, fs, fu) {
			return g[0] = fo, g[1] = fq, g[2] = fs, g[3] = fu, g
		}
}

function g8() {
	g1 = 0, g2 = 2048, g3 = new Uint32Array(4 * g2), g4 = 0, g5 = new Uint32Array(g2), g6 = new Uint8Array(bS.fG * bS.fH)
}

function g9(player) {
	fw = player, g7 = !1, gA(), gB();
	for (var aB = ad.gC(fw) - 1; 0 <= aB; aB--) fv = aB, gD();
	g7 && gE()
}

function gE() {
	bs.gF(), bs.gG()
}

function gD() {
	g0 = ad.gH(fw, fv), fx = ad.gI(fw, fv), fy = ad.gJ(fw, fv), gK(), (0 !== g1 && (gM(), gN()) ? gO : gL)()
}

function gN() {
	if (!((fz = bL.fW(fx, g1)) > aD.gP)) {
		if (!fy) return !1;
		var gQ = g1 * (1 + aD.gP);
		fx += bA.gR.gS(fw, gQ - fx), fz = bL.fW(fx, g1)
	}
	return !0
}

function gM() {
	for (var aB = g1 - 1; 0 <= aB; aB--) g6[bL.fW(g3[aB], 4)] = 0
}

function gL() {
	1 === ad.gC(fw) && aF.gT(fw);
	var eU = bA.gR.gU(fw, fx);
	bd.gV(fw, fx - eU, 12), ad.gW(fw, fv)
}

function gA() {
	for (var player = fw, gX = ag.gX, f5 = Math.min(gX[player].length, g2), gY = 0, gZ = g5, aB = f5 - 1; 0 <= aB; aB--) gZ[gY++] = gX[player][aB];
	g4 = gY
}

function gB() {
	for (var aB = ag.gX[fw].length - 1; 0 <= aB; aB--) ac.f0(ag.gX[fw][aB]) && ac.ga(ag.gX[fw][aB], fw);
	ag.gX[fw] = []
}

function gK() {
	g1 = 0, (g0 === aD.f2 ? gb : gc)()
}

function gc() {
	for (var gd, ge, aB, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
		for (aB = g4 - 1; 0 <= aB; aB--) gd = g5[aB] + f7[f8], ge = bL.fW(gd, 4), 0 === g6[ge] && ac.gf(gd) && ac.ex(gd) === g0 && (g6[ge] = 1, g3[g1++] = gd)
}

function gb() {
	for (var gd, ge, aB, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
		for (aB = g4 - 1; 0 <= aB; aB--) gd = g5[aB] + f7[f8], ge = bL.fW(gd, 4), 0 === g6[ge] && ac.ew(gd) && (g6[ge] = 1, g3[g1++] = gd)
}

function gO() {
	gg() ? (gh(), g0 !== aD.f2 && gi()) : gL()
}

function gi() {
	bs.gj(), bs.gk(ag.gl[g0]), bs.gk(ag.gm[g0]), bS.ek(bS.el) && bs.gk(ag.fU[g0]), bs.gn(ag.gX[g0]), bs.go(ag.gm[g0]), bs.go(ag.fU[g0]), bs.gp(), bs.gq()
}

function gh() {
	g7 = !0, ad.gr(fw, fv, fx), ad.gs(fw, fv), ag.gt[fw] += g1, bs.gu(), gv()
}

function gg() {
	return (g0 === aD.f2 ? gw : gx)()
}

function gx() {
	var gy = g1 * aD.gP,
		gz = h0(),
		h1 = h2(),
		gz = gy + 2 * gz + h1,
		h4 = fz * g1;
	return gz < h4 ? (fx -= gz, bd.gV(fw, gz, 13), h5(gz - gy, h1), !0) : fy && 0 === h1 ? (fx -= h4, h4 += bA.gR.gS(fw, gz - h4 + 1), bd.gV(fw, h4, 13), h5(h4 - gy, 0), !0) : (fx -= h4, bd.gV(fw, h4, 13), h5(h4 - gy, h1), !1)
}

function h5(h4, h1) {
	if (0 < h1) {
		if (h4 <= h1) return bd.gV(g0, h4, 13), void ad.h6(g0, fw, h1 - h4);
		ad.h6(g0, fw, 0), h4 -= h1
	}
	h4 = bL.fW(h4, 2), h4 = Math.min(ag.h7[g0], h4), bd.gV(g0, h4, 13), ag.h7[g0] -= h4
}

function h2() {
	return ad.h8(g0, fw)
}

function h0() {
	return bL.fW(g1 * ag.h7[g0], 1 + bL.fW(10 * ag.gt[g0], 16))
}

function gw() {
	var h9 = g1 * aD.gP;
	return fx -= h9, bd.gV(fw, h9, 13), !0
}

function gv() {
	for (var aB = g1 - 1; 0 <= aB; aB--) ag.gX[fw].push(g3[aB]), ag.gl[fw].push(g3[aB]), ac.ga(g3[aB], fw)
}

function dC() {
	var hA = 0,
		hB = 0;
	this.hC = function(fC, fE) {
		hA = fC, hB = fE
	}, this.hD = function(code) {
		var hK, hM, er;
		aD.hE || aM.hF || (bA.gR.hG(0) || bA.gR.hG(1)) && bA.gR.hH(aD.ep) && (aR.hI(hA, hB) ? aR.hJ = !1 : aP.hI(hA, hB) || (hK = bM.hL(hA), hM = bM.hN(hB), er = bM.fS(hK, hM), bM.hO(hK, hM) && (0 === code ? function(er) {
			var hS, ej, eu;
			aD.hT ? -1 !== (hS = br.hU(er)) && b8.hV.hW(er) : (ej = bM.ev(er), ac.fA(ej) ? (hS = am.eg.ei(ej)) && (eu = bM.ev(hS), eu = ac.ew(eu) ? aD.f2 : ac.ex(eu), b8.hV.hY(aR.hZ(), hS, eu)) : (hS = br.ha(er)) < 0 || (ej = bM
				.ev(hS), ac.ew(ej) ? bs.hb(aD.ep) ? b8.hV.hc(aR.hZ(), aD.f2) : ad.gC(aD.ep) && b1.hd(aD.f2, aR.hZ()) : (eu = ac.ex(ej), bs.ey(eu, aD.ep) && (bs.he(aD.ep, eu) ? b8.hV.hc(aR.hZ(), eu) : ad.gC(aD.ep) && b1.hd(
					eu, aR.hZ())))))
		}(er) : 1 === code ? function(er) {
			bN.hf.hg(aD.ep, er) && b8.hV.hh(aR.hZ(), bO.fh[7])
		}(er) : 2 === code && function(er) {
			bN.hi.hj(aD.ep, er) && b8.hV.hk(aR.hZ())
		}(er))))
	}, this.hl = function() {
		if (!aD.hE && !aM.hF && bA.gR.hG(1)) {
			var gd = aD.ep;
			if (bA.gR.hH(gd)) {
				var f5 = ad.gC(gd);
				if (f5 < 1) ! function() {
					var gd = aD.ep;
					if (bs.hb(gd)) b8.hV.hc(aR.hZ(), aD.f2);
					else
						for (var f7 = ac.f7, gl = ag.gl, f5 = gl[gd].length, hv = Math.floor(Math.random() * f5), aB = 0; aB < f5; aB++)
							for (var hw = 3; 0 <= hw; hw--) {
								var hx = gl[gd][(aB + hv) % f5] + f7[hw];
								if (ac.gf(hx)) {
									hx = ac.ex(hx);
									if (hx !== gd && (!aD.hz || bs.ey(gd, hx))) return b8.hV.hc(aR.hZ(), hx)
								}
							}
				}();
				else {
					for (var hn = 0, ho = ad.gI(gd, 0), aB = 1; aB < f5; aB++) {
						var hp = ad.gI(gd, aB);
						hp < ho && (ho = hp, hn = aB)
					}
					b8.hV.hc(aR.hZ(), ad.gH(gd, hn))
				}
			}
		}
	}, this.hq = function() {
		if (!aD.hE && !aM.hF && bA.gR.hH(aD.ep) && bA.gR.hG(1)) return aw.hr ? aw.hs(aD.ep) ? void b8.hV.ht(1) : void 0 : void(aw.hu(aD.ep) && b8.hV.hq())
	}
}

function i0(i1, size, i2, i3, font) {
	var aB, i6 = .2,
		canvas = document.createElement("canvas"),
		i7 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = i1, canvas.height = i1, i7.font = size + font, i7.textAlign = "center", i7.textBaseline = "middle", i7.fillStyle = "red", aB = 0; aB < i2.length; aB++) i7.fillText(i2[aB], .5 * i1, .5 * i1);
	return -1 < (canvas = function(i4) {
		var aB, eB, f8 = i4.data;
		for (aB = f8.length - 4; 0 <= aB; aB -= 4)
			if (eB = f8[aB], i3 <= eB) return Math.floor(aB / (4 * i1));
		return -1
	}(i7.getImageData(0, 0, i1, i1))) && (i6 = (canvas - .5 * i1 + .1 * size) / size), Math.max(i6, 0)
}

function d5() {
	this.i9 = new Int16Array(4), this.iA = new Int16Array(4), this.iB = null, this.dd = function() {
		var aB;
		for (this.i9[0] = -bS.fG, this.i9[1] = 1, this.i9[2] = bS.fG, this.i9[3] = -1, this.iB = new Int16Array([-bS.fG, 1 - bS.fG, 1, bS.fG + 1, bS.fG, bS.fG - 1, -1, -bS.fG - 1]), aB = 0; aB < 4; aB++) this.iA[aB] = 4 * this.i9[aB]
	}, this.iC = function() {
		return bL.iD(Math.floor(.15 * (1 + .25 * a0.a1.iE()) * h.iF / iG), 4, 128)
	}, this.iH = function(ej, id) {
		for (var iI = this.iA, aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			if (ac.iJ(eu) && ac.en(eu) === id) return !0
		}
		return !1
	}, this.iK = function(player, ej) {
		return !ac.ew(ej) && player === ac.ex(ej)
	}, this.fN = function(hK, hM, er) {
		return (hK -= this.fD(er)) * hK + (hM -= this.fF(er)) * hM
	}, this.iL = function(iM, iN, iO) {
		iM = this.iQ(iM) - this.iR(iO), iN = this.iT(iN) - this.iU(iO);
		return Math.sqrt(iM * iM + iN * iN)
	}, this.iV = function(iW, iX) {
		var iP = this.fD(iW) - this.fD(iX),
			iW = this.fF(iW) - this.fF(iX);
		return ~~Math.sqrt(iP * iP + iW * iW + .5)
	}, this.iY = function(iW, iX) {
		var iP = this.fD(iW) - this.fD(iX),
			iW = this.fF(iW) - this.fF(iX);
		return iP * iP + iW * iW
	}, this.iZ = function(ia, ib, ic, ie) {
		return (ia -= ic) * ia + (ib -= ie) * ib
	}, this.ig = function(gd, ih) {
		return bL.fW(ih * ag.h7[gd], 1e3)
	}, this.iQ = function(iM) {
		return 16 * (iM + ii) / iG
	}, this.iT = function(iN) {
		return 16 * (iN + ij) / iG
	}, this.ik = function(f8) {
		return 16 * f8 / iG
	}, this.hL = function(iM) {
		return Math.floor((iM + ii) / iG)
	}, this.hN = function(iN) {
		return Math.floor((iN + ij) / iG)
	}, this.hO = function(hK, hM) {
		return 1 <= hK && 1 <= hM && hK < bS.fG - 1 && hM < bS.fH - 1
	}, this.fD = function(er) {
		return er % bS.fG
	}, this.fF = function(er) {
		return bL.fW(er, bS.fG)
	}, this.fS = function(hK, hM) {
		return hM * bS.fG + hK
	}, this.il = function(hK, hM) {
		return 4 * this.fS(hK, hM)
	}, this.im = function(er) {
		return this.fR(this.fD(er), this.fF(er))
	}, this.fR = function(hK, hM) {
		return 0 < hK && hK < bS.fG - 1 && 0 < hM && hM < bS.fH - 1
	}, this.ev = function(er) {
		return er << 2
	}, this.et = function(ej) {
		return ej >> 2
	}, this.io = function(er) {
		return bS.fG * this.fF(er) * 256 + (this.fD(er) << 4)
	}, this.ip = function(er) {
		return this.io(er) + 8 + (bS.fG << 7)
	}, this.iq = function(iO) {
		return bS.fG * (this.iU(iO) >> 4) + (this.iR(iO) >> 4)
	}, this.ir = function(iO) {
		iO = this.iq(iO);
		return (this.fD(iO) >> 5) + bN.is.it * (this.fF(iO) >> 5)
	}, this.iR = function(iO) {
		return iO % (bS.fG << 4)
	}, this.iU = function(iO) {
		return bL.fW(iO, bS.fG << 4)
	}, this.iu = function(er, hw) {
		return er + this.i9[hw]
	}, this.iv = function(ej, hw) {
		return ej + this.iA[hw]
	}, this.iw = function(iW, iX) {
		var iP = this.fD(iX) - this.fD(iW),
			iX = this.fF(iX) - this.fF(iW);
		return Math.abs(iP) >= Math.abs(iX) ? 1 + 2 * (iP < 0) : 2 * (0 < iX)
	}, this.ix = function(player) {
		return this.fS(ag.iy[player] + ag.iz[player] >> 1, ag.j0[player] + ag.j1[player] >> 1)
	}, this.j2 = function(player) {
		return this.fS(ay.j3(ag.iy[player], ag.iz[player]), ay.j3(ag.j0[player], ag.j1[player]))
	}
}

function cl() {
	this.j4 = new j5, this.j6 = new j7, this.j8 = new j9, this.performance = new jA, this.jB = new jC, this.jD = new jE, this.jF = new jG, this.jH = new jI, this.jJ = new jK, this.dd = function() {
		this.j4.dd(), this.j8.dd(), this.performance.dd(), this.jB.dd(), this.jD.dd()
	}, this.eY = function() {
		this.performance.eY(), this.j4.eY(), this.j8.jL()
	}
}

function jC() {
	var jM, jO = new Uint16Array(8);

	function jW(size, player) {
		for (var aB = ag.gX[player].length - 1; size <= aB; aB--) ac.jc(ag.gX[player][aB], player)
	}
	this.dd = function() {
		jM = 0
	}, this.jP = function(player, jQ) {
		return bO.f1[1] = ag.gX[player].length, bO.f1[0] === aD.f2 ? ao.jB.jR(player) : this.jS(player, bO.f1[0]), (0 !== bO.f1[1] || 0 !== ag.gX[player].length) && !(!jQ && bO.f1[1] === ag.gX[player].length || (bO.f1[0] === aD.f2 ? ag.jT[
			player]++ : ag.jU[player]++, 0))
	}, this.jV = function(player) {
		jW(bO.f1[1], player), ad.ec(player, bO.fc[0], bO.f1[0]), aF.jX(player, !1)
	}, this.jY = function(player, jZ, f5, ho) {
		var ja = bL.fW(12 * ag.h7[player], 1024);
		ho -= ho >= bL.fW(ag.h7[player], 2) ? ja : 0, jW(f5, player), ad.ec(player, ho, jZ), ag.h7[player] -= ho + ja, aF.jX(player, !1)
	}, this.jS = function(player, jZ) {
		for (var hw, f7 = ac.f7, aB = ag.gl[player].length - 1; 0 <= aB; aB--)
			if (ac.jb(ag.gl[player][aB]))
				for (hw = 3; 0 <= hw; hw--)
					if (ac.gf(ag.gl[player][aB] + f7[hw]) && ac.ex(ag.gl[player][aB] + f7[hw]) === jZ) {
						ag.gX[player].push(ag.gl[player][aB]);
						break
					}
	}, this.jR = function(player) {
		for (var f7 = ac.f7, aB = ag.gl[player].length - 1; 0 <= aB; aB--)
			if (ac.jb(ag.gl[player][aB]))
				for (var hw = 3; 0 <= hw; hw--)
					if (ac.ew(ag.gl[player][aB] + f7[hw])) {
						ag.gX[player].push(ag.gl[player][aB]);
						break
					}
	}, this.jd = function(player, je) {
		var aB, fO, hw, hy, f5 = ag.gl[player].length,
			jf = 256 <= f5 ? 12 : 32 <= f5 ? 6 : 1,
			jg = f5 - 1 - ay.jh(jf),
			f7 = ac.f7;
		jM = 0;
		loop: for (aB = jg; 0 <= aB; aB -= jf)
			for (hw = 3; 0 <= hw; hw--)
				if ((hy = ac.ew(ag.gl[player][aB] + f7[hw]) ? aD.f2 : ac.ex(ag.gl[player][aB] + f7[hw])) === aD.f2 || ac.gf(ag.gl[player][aB] + f7[hw]) && hy !== player && (je || bs.ey(player, hy))) {
					for (fO = jM - 1; 0 <= fO; fO--)
						if (jO[fO] === hy) continue loop;
					if (jO[jM] = hy, 8 <= ++jM) return !0
				}
		return 0 < jM
	}, this.ji = function(player, je) {
		var aB, hw, hy, f7 = ac.f7;
		for (jM = 0, aB = ag.gl[player].length - 1; 0 <= aB; aB--)
			for (hw = 3; 0 <= hw; hw--)
				if ((hy = ac.ew(ag.gl[player][aB] + f7[hw]) ? aD.f2 : ac.ex(ag.gl[player][aB] + f7[hw])) === aD.f2 || ac.gf(ag.gl[player][aB] + f7[hw]) && hy !== player && (je || bs.ey(player, hy))) return jO[jM++] = hy, !0;
		return !1
	}, this.jj = function() {
		for (var fP, aB = jM - 1; 0 <= aB; aB--)
			if (jO[aB] === aD.f2) {
				for (jM--, fP = aB; fP < jM; fP++) jO[fP] = jO[fP + 1];
				return !0
			} return !1
	}, this.jk = function(player) {
		for (var fP, aB = jM - 1; 0 <= aB; aB--)
			if (ad.jl(player, jO[aB]))
				for (jM--, fP = aB; fP < jM; fP++) jO[fP] = jO[fP + 1];
		return 0 === jM
	}, this.jm = function() {
		for (var aB = jM - 1; 0 <= aB; aB--)
			if (bA.gR.jn(jO[aB])) return !0;
		return !1
	}, this.jo = function() {
		for (var aB = jM - 1; 0 <= aB; aB--) bA.gR.jn(jO[aB]) || (jO[aB] = jO[--jM]);
		return 0 < jM
	}, this.jp = function(player) {
		for (var fP, jq = jO[0], jr = ag.h7[jq] + ad.h8(jq, player), aB = jM - 1; 1 <= aB; aB--)(fP = ag.h7[jO[aB]] + ad.h8(jO[aB], player)) < jr && (jq = jO[aB], jr = fP);
		return jq
	}, this.js = function(player) {
		var j, jt = jO[0];
		if (1 !== jM)
			for (var ju = bL.fW(ag.iz[player] + ag.iy[player], 2), jv = bL.fW(ag.j1[player] + ag.j0[player], 2), fL = jw(ju - bL.fW(ag.iz[jt] + ag.iy[jt], 2)) + jw(jv - bL.fW(ag.j1[jt] + ag.j0[jt], 2)), aB = jM - 1; 1 <= aB; aB--)(j = jw(ju - bL
				.fW(ag.iz[jO[aB]] + ag.iy[jO[aB]], 2)) + jw(jv - bL.fW(ag.j1[jO[aB]] + ag.j0[jO[aB]], 2))) < fL && (fL = j, jt = jO[aB]);
		return jt
	}, this.jx = function() {
		for (var jy = jO, jz = jy[0], h7 = ag.h7, k0 = h7[jz], aB = jM - 1; 1 <= aB; aB--) {
			var gd = jy[aB],
				fP = h7[gd];
			k0 < fP && (jz = gd, k0 = fP)
		}
		return jz
	}, this.k1 = function() {
		return jO[ay.jh(jM)]
	}
}

function jE() {
	function kH(player, jZ, k7) {
		3 <= k7 && 2142 < bf.kN() && (jZ === aD.f2 || ag.h7[jZ] < bL.fW(ag.h7[player], 20)) && aE.kC(player, 20)
	}

	function kK(player, ho, jZ, k7) {
		3 <= k7 && k7 < 6 && bL.fW(ag.h7[player], 8) > ag.h7[jZ] && (ho = Math.max(bL.fW(11 * ag.h7[jZ], 5), bL.fW(ag.h7[player], 10)));
		k7 = ag.gX[player].length;
		ao.jB.jS(player, jZ), ao.jB.jY(player, jZ, k7, ho)
	}

	function kG(player, ho) {
		var jZ = aD.f2,
			f5 = ag.gX[player].length;
		ao.jB.jR(player), ag.gX[player].length !== f5 && ao.jB.jY(player, jZ, f5, ho)
	}
	this.k2 = new Uint8Array(aD.f2), this.dd = function() {
		this.k2.fill(0)
	}, this.k3 = function(player, ho) {
		var k5, k7, k8, k9;
		ad.k4(player) && (k5 = ae.k6(player), 3 <= (k7 = aE.ho[player]) && k7 < 6 && (ho = Math.max(ag.h7[player] - k5, ho)), k8 = ag.gm[player].length, k9 = ag.gl[player].length, 30 * ag.gt[player] > aD.kA && kB[player] < 10 && 100 * k9 <= k8 &&
			aE.kC(player, 10), aD.hz ? function(player, ho, k7, k5) {
				var jZ;
				if (ao.jB.jd(player, !1) || ao.jB.ji(player, !1)) {
					if (!ao.jB.jk(player))
						if (ao.jB.jj()) kG(player, ho), kH(player, aD.f2, k7);
						else {
							if (ay.kI(aE.kJ[k7])) jZ = ao.jB.jp(player);
							else {
								if (ao.jB.jm() && ay.kI(aE.kL[k7]) && ao.jB.jo(), 6 === k7) return kK(player, ho, ao.jB.k1(), k7);
								jZ = ao.jB.js(player)
							}
							kK(player, ho, jZ, k7), kH(player, jZ, k7)
						}
				} else bN.kE.eY(player) || ao.jF.eY(player) || ! function(player, ho, k7, k5) {
					var k2 = ao.jD.k2;
					k2[player] = 0;
					var kO = bg.f3[player];
					if (0 !== kO) {
						var kP = ag.h7[player],
							gt = ag.gt;
						if (player < aD.kQ && (ho = kP), !(kP < gt[player] || 5 === k7 && kP < k5 || 4 === k7 && kP < bL.fW(k5, 2))) {
							bh.kR(kO);
							for (var f5 = bO.fa[0], fj = bO.fj, aB = ay.jh(f5), fP = 0; fP < f5; fP++) {
								var ed = fj[(fP + aB) % f5];
								if (k2[ed]) return b8.kS.kT(player, ed, ho)
							}
							var kU = bN.y.kU;
							for (fP = 0; fP < f5; fP++)
								if (ed = fj[(fP + aB) % f5], kU[ed] && ed !== player) return b8.kS.kT(player, ed, ho)
						}
					}
				}(player, ho, k7, k5)
			}(player, ho, k7, k5) : (!k9 || k8 && (k8 < k9 && !ay.jh(10) || 100 * k9 <= k8 && ay.jh(3) || !ay.jh(8))) && bN.kE.eY(player) || function(player, ho, k7) {
				ao.jB.jd(player, !0) || ao.jB.ji(player, !0) ? ao.jB.jk(player) || (ao.jB.jj() ? kG(player, ho) : ay.kI(aE.kJ[k7]) ? kK(player, ho, ao.jB.jp(player), k7) : 5 === k7 ? kK(player, ho, ao.jB.jx(), k7) : (ao.jB.jm() && ay.kI(aE
					.kL[k7]) && ao.jB.jo(), kK(player, ho, 6 === k7 ? ao.jB.k1() : ao.jB.js(player), k7))) : ao.jF.eY(player)
			}(player, ho, k7))
	}
}

function c5() {
	var kV = new Uint8Array(aD.f2),
		kW = new Uint16Array(aD.f2),
		kX = new Uint16Array(aD.f2),
		kY = new Uint8Array(aD.f2),
		kZ = (this.ho = new Uint8Array(aD.f2), new Uint16Array(aD.f2)),
		ka = new Uint16Array(aD.f2);

	function kp(aB) {
		kV[aB] = 1 + bL.fW(kZ[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kb = null, this.kL = [97, 94, 70, 40, 20, 0, 100], this.kc = [500, 450, 400, 300, 80, 50, 100], this.kJ = [0, 0, 5, 25, 50, 100, 0], this.kd = [60, 74, 112, 200, 256, 512, 512], this.ke = [1, 2, 3, 4, 6, 8, 1], this.kf = [500, 450, 400, 300,
		80, 50, 100
	], this.kg = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.kb = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kV.fill(0), kW.fill(0), kX.fill(0), kY.fill(0), this.ho.fill(0), kZ.fill(0), ka.fill(0);
		var kh = aD.kQ;
		if (9 === aD.ki) this.kj();
		else if (__fx.customLobby.isActive())
			for (aB = aD.km - 1; 0 <= aB; aB--) this.ho[aB + kh] = __fx.customLobby.gameInfo.difficulty;
		else if (aD.kk)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.km - 1; 0 <= aB; aB--) {
					var hx = aB + kh;
					this.ho[hx] = aD.data.botDifficultyData[hx]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.km - 1; 0 <= aB; aB--) this.ho[hx = aB + kh] = aD.data.botDifficultyTeam[bg.kn[bg.f3[hx]]];
				else if (1 === aD.data.botDifficultyType) {
			var ko = this.kb.length;
			for (aB = aD.km - 1; 0 <= aB; aB--) this.ho[aB + kh] = aB % ko
		} else
			for (ko = aD.data.botDifficultyValue, aB = aD.km - 1; 0 <= aB; aB--) this.ho[aB + kh] = ko;
		else
			for (var kl = 8 === aD.ki ? 1 : 0, aB = aD.km - 1; 0 <= aB; aB--) this.ho[aB + kh] = kl;
		for (aB = 0; aB < kh; aB++) this.ho[aB] = 6;
		var f5 = aD.f2;
		for (aB = 0; aB < f5; aB++) this.ho[aB] <= 2 ? (kY[aB] = 5, kZ[aB] = ka[aB] = 1040, 0 === this.ho[aB] ? (kW[aB] = 980, kX[aB] = 980) : 1 === this.ho[aB] ? (kW[aB] = 980, kX[aB] = 920, kZ[aB] = ka[aB] = 1100) : (kW[aB] = 825, kX[aB] =
			750)) : this.ho[aB] <= 4 ? (kY[aB] = 1 + ay.jh(20), 3 === this.ho[aB] ? (kW[aB] = kX[aB] = 500, kZ[aB] = ka[aB] = 1e3) : (ka[aB] = 250 + ay.jh(1501), kZ[aB] = 500 + ay.jh(501), kW[aB] = 300 + ay.jh(201), kX[aB] = 100 + ay.jh(
			201))) : this.ho[aB] <= 5 ? (kZ[aB] = 1e3, ka[aB] = 1e3, kY[aB] = 35 + ay.jh(16), kW[aB] = 300 + ay.jh(201), kX[aB] = 50 + ay.jh(101)) : (kZ[aB] = ka[aB] = 800, kY[aB] = 5, kW[aB] = 10, kX[aB] = 250), kp(aB)
	}, this.kj = function() {
		for (var ej = az.kq, kh = aD.kQ, aB = ej - 1; 0 <= aB; aB--) this.ho[aB + kh] = 0;
		for (var fP = 0; fP < 6; fP++) {
			for (aB = ej + az.kr[fP] - 1; ej <= aB; aB--) this.ho[aB + kh] = fP;
			ej += az.kr[fP]
		}
	}, this.kC = function(gd, value) {
		kV[gd] = Math.min(value, kV[gd])
	}, this.eY = function(gd) {
		0 == --kV[gd] && ! function(gd) {
			(function(gd) {
				kZ[gd] !== ka[gd] && (kZ[gd] += kZ[gd] < ka[gd] ? 3 : -3);
				kW[gd] !== kX[gd] && (kW[gd] += kW[gd] < kX[gd] ? kY[gd] : -kY[gd], kW[gd] = (Math.abs(kW[gd] - kX[gd]) <= kY[gd] ? kX : kW)[gd]);
				kV[gd] = bL.fW(kZ[gd], 10)
			})(gd), ao.jD.k3(gd, bL.fW(kW[gd] * ag.h7[gd], 1e3))
		}(gd)
	}, this.ku = function(gd, gY) {
		kZ[gd] = ka[gd] = gY
	}
}

function j9() {
	var kv = new Uint16Array(aD.f2);

	function lA(player, l8) {
		for (var f5 = bO.fa[0], fi = bO.fi, lM = -1, lN = aD.f2, aB = 0; aB < f5; aB++) {
			var fL, gd = fi[aB];
			bs.ey(player, gd) && (fL = bM.iY(l8, bM.ix(gd)), -1 === lM || fL < lM) && (lM = fL, lN = gd)
		}
		return lN
	}

	function lC(l9, l8) {
		if (l9 === aD.f2) return 0;
		var gm = ag.gm[l9],
			lL = gm.length;
		if (0 === lL) return 0;
		for (var f5 = Math.min(lL, 10), lN = 0, lM = bM.iY(gm[lN] >> 2, l8), aB = 0; aB < f5; aB++) {
			var hx = ay.jh(lL),
				fL = bM.iY(gm[hx] >> 2, l8);
			fL < lM && (lM = fL, lN = hx)
		}
		return gm[lN] >> 2
	}

	function lH(player, l8, jZ, lP) {
		var lQ;
		(lP === aD.f2 || (lQ = bM.ix(jZ), lP = bM.ix(lP), bM.iY(l8, lQ) < bM.iY(l8, lP))) && (kv[player] = jZ)
	}
	this.dd = function() {
		kv.fill(aD.f2)
	}, this.jL = function() {
		if (bf.kN() % 109 == 9 && !(al.kw < 20) && aD.hz && !(bh.kx() < bL.fW(8 * aD.kA, 10))) {
			var ky = bh.kz();
			if (bg.kn[ky]) {
				bh.l0(ky);
				var f5 = bO.fa[0];
				if (0 !== f5)
					for (var g = bO.fj, l1 = al.l1, kw = al.kw, l2 = kv, hx = ay.jh(f5), aB = 0; aB < kw; aB++) {
						var hX = l1[aB],
							l3 = g[hx];
						bA.gR.l4(hX, l3) && 512 === l2[hX] && (l2[hX] = l3, hx = (hx + 1) % f5)
					}
			}
		}
	}, this.eY = function(player) {
		var l8, lB, l9, l5 = function(player) {
			var jZ = kv[player];
			if (jZ !== aD.f2) {
				if (bA.gR.lO(jZ) && ag.gm[jZ]) return jZ;
				kv[player] = aD.f2
			}
			return aD.f2
		}(player);
		return function(player) {
			for (var lK = al.l1, lL = al.kw, f5 = Math.min(lL, lL < 17 && 5 === ay.jh(20) ? 1 : 16), ge = ay.jh(lL), fi = bO.fi, gm = ag.gm, gY = 0, aB = 0; aB < f5; aB++) {
				var gd = lK[(aB + ge) % lL];
				gd !== player && gm[gd].length && (fi[gY++] = gd)
			}
			bO.fa[0] = gY
		}(player), 0 !== bO.fa[0] && (0 < (lB = lC(l9 = lA(player, l8 = bM.j2(player)), l8)) && bN.lD.lE(player, bN.lF.lG(lB, l8)) ? (lH(player, l8, l9, l5), !0) : 0 < (l9 = function(player, l8) {
			for (var f5 = bO.fa[0], fi = bO.fi, l2 = kv, ge = 0, aB = 0; aB < f5; aB++) {
				var gd = fi[aB],
					gd = l2[gd];
				gd !== aD.f2 && bA.gR.lO(gd) && player !== gd && bs.ey(player, gd) && (fi[ge++] = gd)
			}
			return 0 !== (bO.fa[0] = ge) ? lC(lA(player, l8), l8) : 0
		}(player, l8)) && bN.lD.lE(player, bN.lF.lG(l9, l8)) ? (lH(player, l8, ac.ex(l9 << 2), l5), !0) : !!(0 < (lB = lC(l5, l8)) && bN.lD.lE(player, bN.lF.lG(lB, l8))))
	}
}

function jG() {
	function lU(player) {
		for (var fU = ag.fU[player], f5 = fU.length, fV = Math.max(bL.fW(f5, 12), 1), f7 = ac.f7, eB = ay.jh(f5), aB = 0; aB < f5; aB += fV)
			for (var eu = fU[(aB + eB) % f5], f8 = 3; 0 <= f8; f8--) {
				var f9 = eu + f7[f8];
				if (ac.fA(f9)) return {
					ej: f9,
					id: ac.en(f9),
					gd: player
				}
			}
		return null
	}

	function lZ(player, lb) {
		var ho = bA.gR.lc(player, aE.kf[aE.ho[player]]);
		ag.gX[player].push(lb.ej), ad.ec(player, ho, lb.gd), aF.jX(player, !0)
	}
	this.eY = function(player) {
		return !!bS.ek(bS.el) && !!aD.data.passableMountains && 0 !== ag.fU[player].length && function(player) {
			var lT = lU(player);
			if (null === lT) return !1;
			! function(player) {
				for (var l1 = al.l1, kw = al.kw, f5 = Math.min(kw, 12), ge = ay.jh(kw), fi = bO.fi, fU = ag.fU, gY = 0, aB = 0; aB < f5; aB++) {
					var gd = l1[(aB + ge) % kw];
					gd !== player && fU[gd].length && bs.ey(player, gd) && (fi[gY++] = gd)
				}
				bO.fa[0] = gY
			}(player);
			var lW = function(em) {
				for (var f5 = bO.fa[0], fi = bO.fi, aB = 0; aB < f5; aB++) {
					var lb = lU(fi[aB]);
					if (null !== lb && lb.id === em) return lb
				}
				return null
			}(lT.id);
			return null !== lW ? (lZ(player, lW), !0) : function(player, em) {
				var f5 = ao.j4.la;
				if (0 !== f5)
					for (var ej = ao.j4.eQ[ay.jh(f5)] << 2, f7 = ac.f7, f8 = ay.jh(4);;) {
						if (ej += f7[f8], ac.fA(ej)) {
							if (ac.en(ej) === em) return lZ(player, {
								ej: ej,
								gd: aD.f2
							}), !0;
							break
						}
						if (!ac.ew(ej)) break
					}
				return !1
			}(player, lT.id)
		}(player)
	}
}

function j7() {
	this.eY = function(player) {
		return bN.lD.lE(player, function(player) {
			var f5 = ao.j4.la;
			if (0 === f5) return -1;
			for (var lL = Math.min(f5, ao.performance.le ? f5 : 10), eQ = ao.j4.eQ, jg = bL.fW(ay.random() * f5, ay.value(100)), e = jg + lL, lf = ay.j3(ag.iy[player], ag.iz[player]), lg = ay.j3(ag.j0[player], ag.j1[player]), lN = -1,
					fL = bM.iZ(0, 0, bS.fG, bS.fH), aB = jg; aB < e; aB++) {
				var ge = aB % f5,
					lh = bM.fN(lf, lg, eQ[ge]);
				lh < fL && (fL = lh, lN = ge)
			}
			return -1 !== lN ? function(er, lf, lg) {
				var hK = bM.fD(er),
					hM = bM.fF(er),
					iP = lf - hK,
					iS = lg - hM;
				Math.abs(iP) >= Math.abs(iS) ? (iS = 0, iP = Math.sign(iP)) : (iP = 0, iS = Math.sign(iS));
				iP === iS && (iP = 1);
				for (;;) {
					if (hK += iP, hM += iS, !bM.fR(hK, hM)) break;
					if (er = bM.fS(hK, hM), ac.iJ(bM.ev(er))) return er
				}
				return -1
			}(eQ[lN], lf, lg) : -1
		}(player))
	}
}

function jI() {
	this.eY = function(player) {
		var lj = function(player) {
			for (var lm = bN.lm.lo(), f5 = lm.length, lL = Math.min(f5, 32), hx = ay.jh(f5), aB = 0; aB < lL; aB++) {
				var lj = (aB + hx) % f5,
					ll = lm[lj],
					iW = ll[0],
					iX = ll[ll.length - 1];
				if (bN.lF.lp(player, iW) && bN.lF.lq(player, iX)) return lj;
				if (bN.lF.lp(player, iX) && bN.lF.lq(player, iW)) return 0 <= (lj = bN.lm.lr(iX, iW)) ? lj : bN.lm.ls() ? -1 : bN.lm.lt(bN.lm.lu(ll))
			}
			return -1
		}(player);
		return -1 !== lj && (lj = bN.lm.get(lj), !bN.lF.ln(player, lj)) && (bO.g[0] = lj, !0)
	}
}

function jA() {
	this.le = 0, this.dd = function() {
		this.le = 0
	}, this.eY = function() {
		if (!this.le && bf.kN() % 30 == 7 && bA.gR.lx(90) && (ao.performance.le = 1)) {
			if (aD.hz) {
				var ky = bh.kz();
				if (bg.kn[ky]) {
					bh.kR(ky);
					var g = bO.fj,
						f5 = bO.fa[0];
					if (0 !== f5)
						for (var m0 = Math.min(100 + 10 * (f5 - 1), 400), aB = 0; aB < f5; aB++) aE.ku(g[aB], m0)
				}
			}
			aE.ku(m1[0], 100)
		}
	}
}

function j5() {
	var m2 = 0,
		m3 = 0,
		m4 = 300,
		m5 = 300,
		m6 = 0;
	this.la = 0, this.eQ = new Uint32Array(512), this.dd = function() {
		m3 = m2 = 0, this.la = 0, m6 = 0
	}, this.eY = function() {
		if (function() {
				var f5 = ao.j4.la;
				if (0 === f5) return 1;
				var eQ = ao.j4.eQ;
				if (bf.kN() % 35 == 6) {
					for (var aB = f5 - 1; 0 <= aB; aB--) ac.ew(eQ[aB] << 2) || (f5--, eQ[aB] = eQ[f5]);
					ao.j4.la = f5
				}
				return f5 < eQ.length
			}())
			if (m4 <= m2) {
				var mA = ao.j4.la;
				if (mA) {
					if (bf.kN() % 350 != 1) return;
					if (m6 !== mA) return void(m6 = mA);
					if (!bA.gR.jn(m1[0])) return
				} else if (bf.kN() % 12 != 8) return;
				bA.gR.mB() || ao.j4.dd()
			} else {
				var aB, i = bS.fG,
					mC = i - 2,
					mA = mC * (bS.fH - 2),
					mD = m4,
					eQ = ao.j4.eQ,
					lL = ao.j4.la,
					mE = eQ.length,
					ge = Math.min(m3 + mD * ((1 + 19 * ao.performance.le) * m5), mA);
				for (aB = m3; aB < ge; aB += mD) {
					var ej = 4 * (aB % mC + (bL.fW(aB, mC) + 1) * i + 1);
					if (ac.ew(ej) && (eQ[lL] = ej >> 2, ++lL === mE)) {
						aB += mD;
						break
					}
				}(m3 = aB) >= mA && (m3 = ++m2), ao.j4.la = lL
			}
	}
}

function jK() {
	this.eY = function() {
		if (bf.kN() % 51 == 45)
			for (var f5 = bN.y.mG, mH = bN.y.mH, mI = bN.y.mI, mJ = bN.y.mJ, mK = bN.y.mK, kg = aE.kg, ho = aE.ho, aB = 0; aB < f5; aB++) {
				var ll, player, mO, mL = mH[aB];
				mL % 64 == 6 || (ll = mI[aB], (player = bN.lF.mM(ll[ll.length - 1])) < 0) || !bA.gR.l4(player, mK[aB] >> 3) || ay.jh(1e3) >= kg[ho[player]] || ! function(mS, ll) {
					for (var f5 = ll.length - 1, mT = bN.y.mU[mS], fL = 0, aB = mT + 1; aB < f5; aB++) fL += bM.iV(ll[aB], ll[aB + 1]);
					return (fL += bM.iV(bM.iq(bN.y.mV[mS]), ll[mT + 1])) <= 60
				}(aB, ll) || (mO = mJ[aB], 64 <= mL && bN.mP.mQ(player, mO)) || function(player, ll, mO, mS, mL) {
					bN.mW.mX(player) && bA.gR.mY(player, aE.kc[aE.ho[player]], 32, 0) && (bN.y.mH[mS] = 64 + mL % 64, bN.mP.ec(mO, bN.y.mZ), bO.g[0] = bN.lm.lu(ll), bO.fh[1] = 6, bA.gR.ma(player), bN.y.mb(player))
				}(player, ll, mO, aB, mL)
			}
	}
}

function mc() {
	aN.eY(), af.eY(), aW.md(), b0.y.eY()
}

function me() {
	b1.eY(), aG.eY(), an.eY(), ae.eY(), b4.eY(), aF.eY(), ao.eY(), bN.y.eY(), al.mf(), aV.eY(), az.eY(), bV.eY(), af.eY(), af.mg(), aW.eY(), bP.eY(), aU.eY(), aP.eY(), aN.eY(), b5.eY(), aR.eY(), aw.eY(), bd.eY(), bh.eY(), b0.y.eY(), b0.mh.eY(), t
	.eY(), bU.eM.eY(), b9.eY(), bf.eY()
}

function mi() {
	aH.eY(), aX.eY(), aQ.eY(), av.eY(), bC.eY(), ax.mj()
}

function mk() {
	aV.ml(!1), aP.ml(), aW.ml(!1), aU.ml(), aR.ml(), aw.ml(), af.ml(!1), bh.mm()
}

function mn() {
	af.ml(!1) && (bf.dk = !0), b0.y.eY()
}

function c6() {
	var mo, mp, mq;

	function ms(mu) {
		for (var aB = mo - 1; 0 <= aB; aB--) 0 === mq[mp[aB]] && ag.gt[mp[aB]] >= mu && g9(mp[aB])
	}

	function mr(player) {
		var eU;
		64 === mq[player] ? mq[player] = 6 : (eU = ag.gt[player], mq[player] = eU < 1e3 ? 3 : eU < 1e4 ? 2 : eU < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mo = 0, mp = new Uint16Array(aD.f2), mq = new Uint8Array(aD.f2)
	}, this.eY = function() {
		for (var aB = mo - 1; 0 <= aB; aB--) 64 === mq[mp[aB]] ? mr(mp[aB]) : 0 == mq[mp[aB]]-- && (mr(mp[aB]), g9(mp[aB]));
		16e4 <= ag.gt[m1[0]] && (ms(16e4), 3e5 <= ag.gt[m1[0]]) && ms(3e5), bA.gR.lO(aD.ep) && (bd.mv[7] = Math.max(ag.gt[aD.ep], bd.mv[7]))
	}, this.gT = function(player) {
		for (var fO, aB = mo - 1; 0 <= aB; aB--)
			if (player === mp[aB]) {
				for (mo--, fO = aB; fO < mo; fO++) mp[fO] = mp[fO + 1];
				return
			}
	}, this.jX = function(player, mw) {
		for (var aB = mo - 1; 0 <= aB; aB--)
			if (player === mp[aB]) return;
		mp[mo++] = player, mq[player] = mw ? 2 : 64
	}
}

function c7() {
	var size, kE;
	this.dd = function() {
		size = aD.km, kE = new Uint16Array(aD.f2);
		for (var kQ = aD.kQ, aB = aD.km - 1; 0 <= aB; aB--) kE[aB] = kQ + aB
	}, this.eY = function() {
		ao.jJ.eY();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.mz[kE[aB]]) {
				fO = void 0;
				var fO = aB;
				size--, kE[fO] = kE[size]
			} else aE.eY(kE[aB])
	}, this.my = function(gd) {
		kE[size++] = gd
	}
}

function c8() {
	var n1, n2, n3, n4, n5, n6, n7, n8, n9, nA, nB, nC, nD, nE = !1,
		nF = !1;

	function nG(nH) {
		nC = bf.eT, n3 = n4 = n2 = 0, n5 = (nD = 33) / nH, n1 = 1 / (nH / nD / 4), n6 = (h.i / 2 + ii) / iG, n7 = (h.j / 2 + ij) / iG, n8 = iG
	}

	function nO(aB) {
		var nQ; - 1 !== aB && (aB = bM.iq(bN.y.mV[aB]), nQ = bM.fD(aB) - 15, aB = bM.fF(aB) - 15, aH.nK(nQ, aB, 29 + nQ, 29 + aB))
	}

	function nb(eG) {
		Math.abs(Math.log(nB / n8)) < .125 && (nB = eG * n8)
	}

	function na(nQ, nR, nd, ne) {
		n9 = (nQ + nd + 1) / 2, nA = (nR + ne + 1) / 2;
		nd = h.i / (nd - nQ + 1), nQ = h.j / (ne - nR + 1);
		nB = .9 * (nd < nQ ? nd : nQ)
	}
	this.nI = function() {
		return nE
	}, this.nJ = function() {
		nG(1), this.nK(0, 0, bS.fG - 1, bS.fH - 1), aD.hT || aD.hE || this.nL(aD.ep, 3e3, !0, .3)
	}, this.nM = function(player, nN) {
		nO(bN.lF.nP(player, nN))
	}, this.nL = function(player, nH, nS, zoom) {
		aD.nT || nE && !nS && nF || (0 === ag.gt[player] ? nO(bN.lF.nU(player)) : (aS.nV = !1, nF = nS, nG(nH), function(player) {
			n9 = (ag.iy[player] + ag.iz[player] + 1) / 2, nA = (ag.j0[player] + ag.j1[player] + 1) / 2
		}(player), function(zoom, player) {
			var iP = ag.iz[player] - ag.iy[player] + 1,
				player = ag.j1[player] - ag.j0[player] + 1,
				fO = h.i / iP,
				fP = h.j / player,
				fO = (nB = fO < fP ? fO : fP, 0 !== zoom ? zoom : iP < 20 && player < 20 ? .5 : .9);
			nB *= fO, nb(7 / 8)
		}(zoom, player), nE = !0, ar.nY()))
	}, this.nZ = function(nH) {
		aD.hE || aD.nT || (aS.nV = !1, nF = !1, nG(nH), na(0, 0, bS.fG - 1, bS.fH - 1), nb(7 / 8), nE = !0, ar.nY())
	}, this.nK = function(nQ, nR, nd, ne) {
		nE = !1, na(nQ, nR, nd, ne), iG = nB, aS.nf(n9, h.i / 2), aS.ng(nA, h.j / 2), ba.nh(), bf.dk = !0
	}, this.ni = function() {
		return !(nE && nF || (nE = !1))
	}, this.eY = function() {
		var nl, nm, f8, np;
		nE && (n2 < .5 ? n4 < n5 && (n4 += n5 * n1, n3 = n2) : 1 - n3 < n2 && (n4 = (n4 -= n5 * n1) < n5 * n1 ? n5 * n1 : n4), nC = nC >= bf.eT ? bf.eT - 1 : nC, f8 = bf.eT - nC, n2 = 1e3 < f8 || 1 < (n2 += n4 * f8 / nD) ? 1 : n2, nC = bf.eT,
			f8 = iG, nl = ii, nm = ij, f8 = (iG = n8 * Math.pow(nB / n8, n2)) / f8, np = 1 - (n8 * Math.pow(nB / n8, 1 - n2) - n8) / (nB - n8), aS.nf(n6 + np * (n9 - n6), h.i / 2), aS.ng(n7 + np * (nA - n7), h.j / 2), af.zoom(f8, (nl * f8 -
				ii) / (1 - f8), (nm * f8 - ij) / (1 - f8)), ba.nh(), 1 <= n2 && (nE = !1, bb.nq = !0), bf.dk = !0)
	}
}

function c0() {
	var ed = bA.color;
	this.nr = ed.ns(0, 0, 0), this.nt = ed.nu(0, 0, 0, .7), this.nv = ed.nu(0, 0, 0, .5), this.nw = ed.nu(0, 0, 0, .85), this.nx = ed.nu(0, 0, 0, .75), this.ny = ed.nu(0, 0, 0, .6), this.nz = ed.nu(0, 0, 0, .35), this.o0 = ed.ns(255, 255, 255), this
		.o1 = ed.nu(255, 255, 255, .3), this.o2 = ed.nu(255, 255, 255, .6), this.o3 = ed.nu(255, 255, 255, .4), this.o4 = ed.nu(255, 255, 255, .25), this.o5 = ed.nu(255, 255, 255, .85), this.o6 = ed.nu(255, 255, 255, .75), this.o7 = ed.nu(255, 255,
			255, .15), this.o8 = ed.nu(255, 255, 255, .11), this.o9 = ed.ns(128, 128, 128), this.oA = ed.nu(64, 64, 64, .75), this.oB = ed.nu(88, 88, 88, .83), this.oC = ed.nu(60, 60, 60, .85), this.oD = ed.nu(80, 60, 60, .85), this.oE = ed.ns(170,
			170, 170), this.oF = ed.ns(200, 235, 245), this.oG = ed.ns(30, 255, 30), this.oH = ed.ns(0, 200, 0), this.oI = ed.ns(128, 255, 128), this.oJ = ed.nu(10, 65, 10, .75), this.oK = ed.nu(0, 255, 0, .6), this.oL = ed.nu(0, 255, 0, .5), this
		.oM = ed.nu(0, 200, 0, .5), this.oN = ed.nu(0, 100, 0, .75), this.oO = ed.nu(0, 60, 0, .8), this.oP = ed.nu(0, 255, 0, .3), this.oQ = ed.nu(0, 180, 0, .6), this.oR = ed.nu(0, 120, 0, .85), this.oS = ed.ns(0, 120, 0), this.oT = ed.nu(0, 70, 0,
			.85), this.oU = ed.ns(190, 230, 190), this.oV = ed.ns(0, 255, 0), this.oW = ed.ns(255, 120, 120), this.oX = ed.ns(255, 160, 160), this.oY = ed.ns(255, 70, 70), this.oZ = ed.ns(230, 0, 0), this.oa = ed.nu(220, 0, 0, .6), this.ob = ed.nu(
			255, 100, 100, .8), this.oc = ed.nu(100, 0, 0, .85), this.od = ed.nu(60, 0, 0, .85), this.oe = ed.nu(200, 0, 0, .6), this.og = ed.nu(120, 0, 0, .85), this.oh = ed.ns(255, 70, 10), this.oi = ed.ns(230, 190, 190), this.oj = ed.ns(255, 0,
		0), this.ok = ed.ns(255, 0, 255), this.ol = ed.nu(60, 0, 60, .85), this.om = ed.nu(0, 60, 60, .85), this.on = ed.nu(10, 60, 60, .9), this.oo = ed.nu(0, 96, 96, .75), this.op = ed.ns(0, 255, 255), this.oq = ed.ns(160, 160, 255), this.or = ed
		.nu(0, 40, 90, .75), this.os = ed.nu(0, 0, 255, .6), this.ot = ed.ns(200, 200, 255), this.ou = ed.nu(50, 50, 255, .83), this.ov = ed.nu(20, 90, 150, .75), this.ow = ed.ns(255, 120, 100), this.ox = ed.nu(255, 255, 0, .5), this.oy = ed.nu(255,
			255, 150, .2), this.oz = ed.ns(255, 255, 0), this.p0 = ed.ns(255, 255, 200), this.p1 = ed.nu(200, 200, 0, .6), this.p2 = ed.nu(140, 120, 0, .75), this.p3 = ed.nu(180, 160, 40, .75), this.p4 = ed.nu(70, 50, 20, .85), this.p5 = ed.nu(30,
			30, 0, .85), this.p6 = ed.nu(60, 60, 0, .85), this.p7 = ed.ns(255, 255, 100), this.p8 = ed.ns(255, 255, 140), this.p9 = ed.nu(255, 140, 0, .75), this.pA = ed.nu(70, 40, 0, .85), this.pB = ed.ns(255, 150, 0), this.pC = ed.nu(255, 200, 80,
			.85), this.pD = ed.nu(0, 0, 0, 0), this.pE = ed.nu(255, 255, 255, 0), this.pF = ed.nu(254, 254, 254, 0)
}

function cy() {
	this.hV = new pG, this.gR = new pH, this.pI = new pJ, this.pK = new pL, this.kS = new pM
}

function pG() {
	this.hW = function(er) {
		aD.kk ? b8.pI.hW(aD.ep, er) : b0.pN.pO(er)
	}, this.hc = function(ih, jZ) {
		aD.kk ? b8.pI.hc(aD.ep, ih, jZ) : b0.pN.pP(ih, jZ)
	}, this.pQ = function(ih, pR) {
		aD.kk ? b8.pI.pS(aD.ep, ih, pR) : b0.pN.pT(ih, pR)
	}, this.hh = function(ih, er) {
		er = (er << 3) + bO.fh[6];
		aD.kk ? b8.pI.hh(aD.ep, ih, er) : bN.mW.mX(aD.ep) && b0.pN.pV(ih, er)
	}, this.hk = function(ih) {
		849 === ih && (ih = 850);
		var nN = bO.fh[3];
		aD.kk ? b8.pI.hk(aD.ep, ih, nN) : bN.hi.pW(aD.ep, nN) && b0.pN.pX(ih, nN)
	}, this.pY = function(nN) {
		aD.kk ? b8.pI.pY(aD.ep, nN) : b0.pN.pX(849, nN)
	}, this.pZ = function(jZ) {
		aD.kk ? b8.pI.pZ(aD.ep, jZ) : b0.pN.pa(jZ)
	}, this.pb = function(pc) {
		aD.kk ? b8.pI.pd(aD.ep, pc) : b0.pN.pe(pc)
	}, this.ht = function(pf) {
		aD.kk ? b8.pI.ht(aD.ep, pf) : b0.pN.pg(pf)
	}, this.ph = function() {
		aD.kk ? b8.pI.ph(aD.ep) : b0.pN.pi()
	}, this.hq = function() {
		aD.kk ? b8.pI.hq(aD.ep) : b0.pN.pa(513)
	}, this.hY = function(ih, er, jZ) {
		aD.kk ? b8.pI.hY(aD.ep, ih, er, jZ) : b0.pN.pj(ih, er, jZ)
	}
}

function pM() {
	this.kT = function(player, pR, ho) {
		bA.gR.pk(player, ho, pR) && (ae.pQ(player, pR), !bA.gR.jn(pR)) && ao.jD.k2[pR] && ao.jD.k2[pR]--
	}, this.pl = function(player, pR, ho) {
		bA.gR.pm(ho, pR) ? an.ec(pR, bO.fc[0]) && (bq.pn(player, pR, bO.fc[0], 1), bA.gR.gU(pR, bO.fc[0]), bd.po(player, pR), af.pp(pR, bO.fc[0])) : bd.gV(player, ho, 12)
	}
}

function pH() {
	this.pq = function(pc, player) {
		aN.pb(aD.ep, player, pc), b0.pN.pr(pc, player)
	}, this.ps = function(player) {
		aN.pt(player, 0), b0.pN.pu(player)
	}, this.pv = function(pw, player) {
		aN.px(pw, player), b0.pN.py(pw, player)
	}, this.pz = function() {
		aD.kk || aD.hE || b0.q0.pz()
	}
}

function pL() {
	this.eY = function(aC) {
		var id, fo, ni;
		for (bH.dd(aC), bH.eC += 2, ni = 8 * bH.size; bH.eC + 8 <= ni;) id = bH.q1(4), fo = bH.q1(9), 0 === id ? this.q2(id, fo, bH.q1(22)) : 1 === id ? this.q2(id, fo, bH.q1(10), bH.q1(10)) : 2 === id ? this.q2(id, fo, bH.q1(10), bH.q1(9)) :
			3 === id ? this.q2(id, fo, bH.q1(10), bH.q1(27)) : 4 === id ? this.q2(id, fo, bH.q1(10), bH.q1(16)) : 5 === id || 6 === id ? this.q2(id, fo, bH.q1(10)) : 7 === id ? this.q2(id, fo, bH.q1(1)) : 10 === id ? this.q2(id, fo, bH.q1(20), bH
				.q1(22)) : this.q2(id, fo)
	}, this.q3 = [], this.q4 = function() {
		for (var q6 = 0, q7 = 0, q8 = 0, q9 = 0, qA = 0, qB = 0, aB = 0; aB < 512; aB++) q6 += ag.mz[aB], q7 += ag.gt[aB], q8 += ag.h7[aB], q9 += bN.y.kU[aB];
		qA += bN.y.mG, qB += al.kw, this.q3.push(q8 % 1073741824 * 4 + (q6 + q7 + q9 + qA + qB) % 4)
	}, this.q2 = function(id, fo, fq, fs) {
		0 === id ? b8.pI.hW(fo, fq) : 1 === id ? b8.pI.hc(fo, fq, fs) : 2 === id ? b8.pI.pS(fo, fq, fs) : 3 === id ? b8.pI.hh(fo, fq, fs) : 4 === id ? b8.pI.hk(fo, fq, fs) : 5 === id ? b8.pI.pZ(fo, fq) : 6 === id ? b8.pI.pd(fo, fq) : 7 === id ?
			b8.pI.ht(fo, fq) : 8 === id ? b8.pI.ph(fo) : 9 === id ? b8.pI.qC(fo) : 10 === id && b8.pI.hY(fo, fq >> 10, fs, fq % 1024)
	}
}

function pJ() {
	this.hW = function(player, er) {
		bA.gR.hG(0) && bA.gR.hH(player) && bM.im(er) && (b9.qD.qE(0, player, er), aD.qF.ec(player, er))
	}, this.hc = function(player, ih, jZ) {
		bA.gR.hG(1) && bA.gR.hH(player) && bA.gR.qG(player, jZ) && bA.gR.mY(player, ih, 12, 0) && bA.gR.qH(player, jZ) && ((jZ = ad.jl(player, bO.f1[0])) || ad.k4(player)) && (ag.qI[player]++, b9.qD.qE(1, player, ih, bO.f1[0]), ao.jB.jP(player,
			jZ)) && (bA.gR.ma(player), bd.qJ(player, ih), ao.jB.jV(player))
	}, this.pS = function(player, ih, pR) {
		bA.gR.hG(1) && bA.gR.hH(player) && aD.hz && bA.gR.qG(player, pR) && bA.gR.qK(player, pR) && bA.gR.pk(player, bA.gR.ig(player, ih), pR) && an.ec(pR, bO.fc[0]) && (b9.qD.qE(2, player, ih, pR), ae.pQ(player, pR))
	}, this.hh = function(player, ih, pU) {
		bO.fh[1] = 7 & pU;
		var er = pU >> 3;
		bA.gR.hG(1) && bA.gR.hH(player) && bM.im(er) && bN.mW.mX(player) && bN.mW.qL(er) && bA.gR.mY(player, ih, 32, 0) && bN.lD.qM(player, er, 1) && (bd.qN(player), b9.qD.qE(3, player, ih, pU), bA.gR.ma(player), bl.qO.hh(player), bN.y.mb(
			player))
	}, this.hk = function(player, ih, nN) {
		849 === ih ? this.pY(player, nN) : bA.gR.hG(1) && bA.gR.hH(player) && bA.gR.mY(player, ih, 32, 0) && bN.hi.qP(player, nN) && (bd.qN(player), b9.qD.qE(4, player, ih, nN), bA.gR.ma(player), bl.qO.hk(player), bN.y.mb(player))
	}, this.pY = function(player, nN) {
		bA.gR.hG(1) && bA.gR.hH(player) && bN.qQ.eY(player, nN) && b9.qD.qE(4, player, 849, nN)
	}, this.pZ = function(player, jZ) {
		513 === jZ ? this.hq(player) : bA.gR.hG(1) && bA.gR.hH(player) && (jZ = Math.min(jZ, aD.f2), ad.jl(player, jZ)) && (b9.qD.qE(5, player, jZ), ad.qR(player, jZ))
	}, this.pd = function(player, pc) {
		(bA.gR.hG(1) || bA.gR.hG(2)) && bA.gR.hH(player) && (pc = bL.iD(pc, 0, 1023), b9.qD.qE(6, player, pc), af.qS(player, 0, pc))
	}, this.ht = function(player, pf) {
		aw.hs(player) && (b9.qD.qE(7, player, pf), aw.qT(player, pf))
	}, this.ph = function(player) {
		(bA.gR.hG(0) || bA.gR.hG(1)) && bA.gR.hH(player) && aM.qU(player) && (b9.qD.qE(8, player), bQ.ph(player))
	}, this.qC = function(player) {
		b9.qD.qE(9, player), bQ.qC(player)
	}, this.hq = function(player) {
		aw.hu(player) && (b9.qD.qE(5, player, 513), aw.hq(player))
	}, this.hY = function(player, ih, er, jZ) {
		bA.gR.hG(1) && bA.gR.hH(player) && bA.gR.qG(player, jZ) && bA.gR.qH(player, jZ) && bM.im(er) && am.eg.ez(player, er) && (ad.jl(player, bO.f1[0]) || ad.k4(player)) && (b9.qD.qE(10, player, (ih << 10) + bO.f1[0], er), jZ = bA.gR.lc(player,
			ih), ag.gX[player].push(bO.f6[0]), ad.ec(player, jZ, bO.f1[0]), aF.jX(player, !0), bd.qV(player))
	}
}

function qW() {
	var qY;
	this.qX = [], this.qY = document.createElement("div"), this.qZ = function(qa, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qa, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qY.appendChild(
			title), title
	}, this.qb = function(qa, marginBottom) {
		var qc = document.createElement("p");
		return qc.textContent = qa, qc.style.fontSize = "0.75em", qc.style.lineHeight = "1.2em", qc.style.marginBottom = marginBottom || "0", this.qY.appendChild(qc), qc
	}, this.qd = function(qa) {
		var qe = document.createElement("p");
		return qe.textContent = qa, qe.style.fontSize = "1em", qe.style.marginBottom = "0", qe.style.whiteSpace = "pre-wrap", qe.style.overflowWrap = "break-word", this.qY.appendChild(qe), qe
	}, this.qf = function(qg, fontSize) {
		var qY = document.createElement("div");
		return qY.innerHTML = qg, qY.style.fontSize = fontSize || "1em", qY.style.lineHeight = "1.2em", this.qY.appendChild(qY), qY
	}, this.qh = function(qi) {
		for (var qj = qi.qj, f5 = qj.length, aB = 0; aB < f5; aB++) this.qY.appendChild(qj[aB])
	}, this.qk = function(ql) {
		return this.qX.push(ql), this.qY.appendChild(ql.e), ql
	}, this.resize = function() {
		for (var f5 = this.qX.length, aB = 0; aB < f5; aB++) this.qX[aB].resize && this.qX[aB].resize()
	}, (qY = this.qY).style.position = "absolute", qY.style.height = "auto", qY.style.padding = "0.5em"
}

function qm(qn, qo) {
	var qY = document.createElement("div");

	function qw() {
		var aB, qx, j, ge, f8, qs = h.k * qY.offsetWidth,
			qy = new Float64Array(function(qs) {
				var i = .25 * bA.qt.qu(.6) * h.iF;
				return Math.max(Math.floor(qs / i), 1)
			}(qs)),
			qz = bc.qz,
			r0 = (qs - (qy.length + 1) * bc.gap) / (qy.length * h.k);
		for (qy.fill(qz), aB = 0; aB < qo.length; aB++) qx = (f8 = qo[aB].qY).style, j = bA.r1.min(qy), ge = qy.indexOf(j), qx.top = bA.qt.r2(j), qx.left = bA.qt.r2(qz + ge * (r0 + qz)), qx.width = bA.qt.r2(r0), bA.qt.r3(f8, 5), qy[ge] += f8
			.offsetHeight + 3 * qz;
		qY.style.height = bA.qt.r2(bA.r1.max(qy) - 2 * qz)
	}
	this.qp = qY, this.qq = qo, this.resize = function() {
		var aB;
		for (aB = 0; aB < qo.length; aB++) qo[aB].resize();
		qw(), qw()
	}, qY.style.width = "100%", qY.style.maxWidth = "100%", qn.style.lineHeight = "1.5em", qn.style.overflowX = "hidden", qn.style.overflowY = "auto";
	for (var aB = 0; aB < qo.length; aB++) qY.appendChild(qo[aB].qY);
	qn.appendChild(qY)
}

function w(r4, r5, r6, r7, r8) {
	var self, r9 = document.createElement("button");

	function rG() {
		var rM;
		bJ.rL() || (rM = bA.color.rN(r6), !1 !== r7 && 0 < rM[0] && rM[0] < 255 && rM[0] === rM[1] && rM[0] === rM[2]) || (128 < rM[0] && 128 < rM[1] && 128 < rM[2] ? r9.style.backgroundColor = bA.color.rO(r6, -50) : r9.style.backgroundColor = bA
			.color.rO(r6, rM[3] && rM[3] < 120 ? 150 : 50))
	}

	function rF() {
		if (r7) {
			var rM = bA.color.rN(r6);
			if (rM[0] === rM[1] && rM[0] === rM[2]) return
		}
		r5 && ((rM = r5(this)) ? 2 === rM && rG() : rQ(this))
	}

	function rI() {
		this.style.backgroundColor = r6
	}

	function rH() {
		rQ(this)
	}

	function rQ(f8) {
		f8.style.backgroundColor = r6, f8.blur()
	}
	this.button = r9, this.rA = r5, this.rB = r6, this.rE = function(rJ) {
		rJ = 1.1 - Math.min(.01 * r4.length, .6) + .2 * rJ;
		r9.style.fontSize = rJ.toFixed(1) + "em"
	}, this.rD = function(ed) {
		ed ? 1 === ed ? ed = bB.oC : 2 === ed && (r7 = 1, ed = bB.oC) : (r7 = 0, ed = bB.nw), this.rB = r6 = ed, r9.style.backgroundColor = ed
	}, self = this, r9.innerHTML = r4, r9.style.color = r8 ? bB.oz : bB.o0, r9.style.userSelect = "none", r9.style.outline = "none", r9.style.overflowWrap = "break-word", self.rD(r6), r9.style.border = "none", r9.style.font = "inherit", self.rE(
		0), r9.style.padding = "0em 0.3em", r9.onclick = rF, r9.addEventListener("mouseover", rG), r9.addEventListener("mouseout", rH), r9.addEventListener("focus", rG), r9.addEventListener("blur", rI)
}

function rR(rS, qn) {
	var qY;
	this.resize = function() {
		for (var aB = 0; aB < rS.length; aB++) bA.qt.r3(rS[aB].button);
		qY.style.gap = qY.style.padding = bA.qt.r2(bc.qz)
	}, (qY = document.createElement("div")).style.display = "grid", qY.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qY.style.overflowY = "auto", qY.style.gridAutoRows = "5.3em", qY.style.maxHeight = "100%";
	for (var aB = 0; aB < rS.length; aB++) rS[aB].rE(1), qY.appendChild(rS[aB].button);
	qn.appendChild(qY)
}

function rU(rV, rW, rX) {
	this.fC = 0, this.fE = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qt.qu(rX || .5) * rV[1] * h.iF, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rV[0] / rV[1]), h.i - 2 * bc.gap), this.j = rV[1] * this.i / rV[0], this.fC = bc.gap + rW[0] * (h.i - this.i - 2 * bc.gap), this.fE = bc
			.gap + rW[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rY = function() {
		return this.fC + .5 * this.i
	}
}

function rZ(ra, rb) {
	var rk, self, rc = document.createElement("div"),
		rd = document.createElement("div"),
		re = document.createElement("div"),
		rf = null,
		rl = (this.rg = new rh({
			value: "",
			eC: -1
		}, 0, ri, function(e) {
			e.target.value = bA.rs.rt(e.target.value), rf.rr.textContent = 127 - e.target.value.length
		}), 0),
		rm = 1,
		rn = 0,
		ro = 1048575;

	function ri() {
		ra(), rf.rr.textContent = 127
	}

	function s3(s2, ql) {
		ql && (ql.s8 = 1, s2.appendChild(bn.s9.transform(ql)))
	}

	function s6(bu) {
		rm ? rc.scrollTop = rc.scrollHeight : bu && (rc.scrollTop = rn)
	}
	this.ru = function(rv) {
			ro = 1048575, rd.textContent = "", rv || this.mm()
		}, this.mm = function() {
			var rw = bn.y.rx[0],
				rw = bn.y.rz[rw],
				s0 = rw.s0,
				f5 = s0.length,
				jg = 1048575 === ro ? 0 : f5 - (rw.s1 - ro + 1048575) % 1048575;
			if (ro = rw.s1, !(f5 <= (jg = Math.max(jg, 0)))) {
				for (var s2 = document.createDocumentFragment(), aB = jg; aB < f5; aB++) s3(s2, bn.lF.s4(s0[aB], bn.lF.s5(s0[aB])));
				rd.appendChild(s2), s6()
			}
		}, this.s7 = function(r) {
			var s2 = document.createDocumentFragment();
			s3(s2, r), rd.appendChild(s2), s6()
		}, this.show = function(qn) {
			qn.appendChild(rc), qn.appendChild(re), this.resize(qn)
		}, this.sA = function(qn) {
			t.removeChild(qn, rc), t.removeChild(qn, re)
		}, this.resize = function(qn) {
			rl = qn ? qn.offsetHeight : rl;
			var qn = bA.qt.sC(.04, .75),
				sD = Math.max(qn, rl - qn),
				sE = h.i / h.k,
				sF = .7 * sE,
				sG = bA.qt.r2(rl - qn - sD),
				sD = (re.style.height = bA.qt.r2(qn), rc.style.height = bA.qt.r2(sD), h.j > h.i || a0.a1.iE() ? (re.style.top = sG, rc.style.top = bA.qt.r2(rl - sD), bA.qt.r3(rc, 8)) : (rc.style.top = sG, re.style.top = bA.qt.r2(rl - qn), bA.qt.r3(
						rc, 2)), this.rg.e.style.width = bA.qt.r2(sF), this.rg.e.style.fontSize = rk.button.style.fontSize = bA.qt.r2(.5 * qn), bA.qt.r3(this.rg.e, 6), rk.button.style.left = bA.qt.r2(sF), rk.button.style.width = bA.qt.r2(sE - sF),
					.385 * qn);
			a0.a1.iE() && (sD *= .8 - .12 * (h.i > h.j)), rd.style.marginLeft = rd.style.marginRight = bA.qt.r2(.5 * sD), rd.style.fontSize = bA.qt.r2(sD), s6(1)
		}, (self = this).rg.e.rp = 127, rc.style.position = "absolute", rc.style.left = "0", rc.style.width = "100%", rc.style.overflowX = "hidden", rc.style.overflowY = "auto", rc.style.font = "inherit", rc.style.backgroundColor = bB.ny, rc
		.addEventListener("scroll", function() {
			rn = rc.scrollTop, rm = rn < rc.scrollHeight - rc.clientHeight - 2 ? 0 : 1
		}), rd.style.font = "inherit", re.style.position = "absolute", re.style.left = "0", re.style.width = "100%", self.rg.e.setAttribute("placeholder", L(13)), self.rg.e.style.position = "absolute", self.rg.e.style.top = "0", self.rg.e.style
		.left = "0", self.rg.e.style.height = "100%", self.rg.e.style.backgroundColor = bB.nv, self.rg.e.style.textAlign = "center", (rk = new w(L(14), ri)).button.top = "0", rk.button.style.position = "absolute", rk.button.style.height = "100%", rk
		.rD(bB.pE), rf = new rq("127", rk.button, 1, 1), rc.appendChild(rd), re.appendChild(self.rg.e), re.appendChild(rk.button)
}

function sI(sJ, r4, sK) {
	function click() {
		var value = 1 - sJ.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + r4, void 0 !== sJ.eC ? bj.sL.sM(sJ.eC, value) : sJ.value = value, sK && sK(value)
	}
	var e;
	r4 = r4 || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sJ.value ? "🟩 " : "⬜ ") + r4, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sN(qn, qg) {
	var qY = document.createElement("div");
	this.qp = qY, this.resize = function() {
		qY.style.padding = bA.qt.r2(bc.qz), qY.style.lineHeight = bA.qt.r2(bA.qt.sC(.035))
	}, qn.style.overflowX = "hidden", qn.style.overflowY = "auto", qY.innerHTML = qg, qn.appendChild(qY)
}

function sO(sP) {
	var qY = document.createElement("div");
	this.e = qY, this.sQ = sP, this.resize = function() {
		for (var f5 = sP.length, aB = 1; aB < f5; aB++) bA.qt.r3(sP[aB], 4)
	};
	var aB, f5 = sP.length;
	for (qY.style.width = "100%", qY.style.height = "2.7em", qY.style.marginTop = "0.6em", qY.style.border = "inherit", aB = 0; aB < f5; aB++) sP[aB].style.verticalAlign = "top", sP[aB].style.width = (100 / f5).toFixed(2) + "%", sP[aB].style.height =
		"100%", sP[aB].style.fontSize = "0.75em", qY.appendChild(sP[aB])
}

function sR(sS, r6, sT) {
	this.qY = document.createElement("div"), this.rS = sS;
	var sU = 0;
	this.resize = function(qn, sW) {
		var f5 = sS.length;
		if (!sT)
			for (var aB = 1; aB < f5; aB++) bA.qt.r3(sS[aB].button, 4);
		for (var sX = 0, aB = 0; aB < f5; aB++) sX += sS[aB].button.offsetWidth;
		if (qn && (sU = qn.offsetWidth), sW && sX < sU)
			for (aB = 0; aB < f5; aB++) sS[aB].button.style.width = (100 * sS[aB].button.offsetWidth / sX).toFixed(2) + "%";
		else
			for (aB = 0; aB < f5; aB++) sS[aB].button.style.width = "auto";
		sW || this.resize(qn, 1)
	};
	var sV = this;
	sV.qY.style.height = sV.qY.style.maxHeight = "100%";
	for (var aB = 0; aB < sS.length; aB++) sS[aB].rD(r6), sS[aB].button.style.height = "100%", sS[aB].button.style.padding = "0.0em 0.9em", sS[aB].button.style.whiteSpace = "pre", sV.qY.appendChild(sS[aB].button)
}

function sY() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qt.r3(this.e, 8, bB.o9)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sZ() {
	var se, sf, sa = document.createElement("div"),
		sb = document.createElement("div"),
		sc = 0,
		sd = 0;
	this.show = function(fC, fE, qa, sg, sh, ed) {
			if (sc) {
				if (!sg) return;
				this.sA()
			}
			fC === fE && -1 === fC ? (fC = se, fE = sf) : (se = fC, sf = fE);
			var si = Math.floor(bA.qt.sC(.018)),
				sh = (fC = Math.max(si + 2, fC), sh || (sd = sg), sc = 1, h.i / h.k),
				sg = (sa.style.whiteSpace = "pre", sa.textContent = qa, bA.qt.r3(sa, 5), sa.style.font = bA.qt.sk(0, bA.qt.sC(.015)), sa.style.padding = "0.3em 0.6em", sa.style.left = fC + "px", sa.style.top = "0px", document.body.appendChild(sa),
					fC + sa.offsetWidth - sh),
				qa = (0 < sg && (fC -= sg, fC = Math.max(si + 1, fC), sa.style.left = fC + "px", fC < si + 2) && (sa.style.whiteSpace = "pre-wrap"), sa.offsetHeight);
			sa.style.top = fE - qa + sd * bc.sm + "px", fC -= si, sb.style.backgroundColor = bA.color.ns(ed >> 12 << 2, (ed >> 6 & 63) << 2, (63 & ed) << 2), sb.style.left = fC + "px", sb.style.top = sa.style.top, sb.style.width = si + "px", sb.style
				.height = qa + "px", bA.qt.r3(sb, 4), bA.qt.r3(sb, 8), bA.qt.r3(sb, 2), document.body.appendChild(sb)
		}, this.sA = function(sn) {
			if (sc) {
				if (sn && sd) return 0;
				sc = 0, t.removeChild(document.body, sa), t.removeChild(document.body, sb)
			}
			return 1
		}, sa.style.position = "absolute", sa.style.backgroundColor = bB.nw, sa.style.color = bB.o0, sa.style.pointerEvents = "none", sa.style.zIndex = "5", sa.style.maxWidth = "100%", sb.style.position = "absolute", sb.style.color = bB.o0, sb.style
		.pointerEvents = "none", sb.style.zIndex = "5"
}

function rh(so, type, sp, sq) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sr++, e.value = so.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.o0, e.style.backgroundColor = bB.nt, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.ss++
		}), e.addEventListener("blur", function() {
			h.ss--, -1 !== so.eC && bj.sL.sM(so.eC, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== so.eC && bj.sL.sM(so.eC, e.value), sp ? sp() : e.blur())
		}), sq && e.addEventListener("input", function(ql) {
			sq(ql)
		})
}

function st(qn, data) {
	var f5 = data.su.length,
		sv = document.createElement("div"),
		sw = document.createElement("div"),
		sx = document.createElement("div"),
		sy = new Array(f5),
		qo = new Array(f5),
		sz = new Array(data.t0.length),
		t1 = bA.color.nu(70, 70, 0, .35);

	function rO() {
		this.style.backgroundColor = bA.color.rO(t1, 160)
	}

	function t6() {
		this.style.backgroundColor = t1
	}

	function qw() {
		var fO;
		for (qn.style.font = bA.qt.sk(0, bA.qt.tG(.026, .5, .03)), aB = 1; aB < sz.length; aB++) bA.qt.r3(sz[aB], 4);
		if (bA.qt.r3(sv, 2), f5) {
			for (var hX, tH = sv.offsetWidth, tI = sx.offsetWidth, aB = 0; aB < sz.length; aB++) hX = .01 * data.t5[aB] * tI, sz[aB].style.width = (100 * hX / tH).toFixed(2) + "%";
			var lL = data.su[0].length;
			for (aB = 0; aB < f5; aB++)
				for (bA.qt.r3(sy[aB], 2), fO = 1; fO < lL; fO++) bA.qt.r3(qo[aB][fO], 4);
			sw.t2 && (sw.scrollTop = sw.t2)
		}
	}
	this.resize = function() {
			qw(), qw()
		}, qn.style.display = "flex", qn.style.flexDirection = "column", sw.style.overflowX = "hidden", sw.style.overflowY = "auto", sw.addEventListener("scroll", function() {
			this.t2 = this.scrollTop
		}),
		function() {
			var f8, aB, su = data.su,
				lL = f5 ? su[0].length : 0;
			for (aB = 0; aB < f5; aB++) {
				sy[aB] = document.createElement("div"), sy[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nu(130, 130, 130, .35) : bB.nz
				}(aB), sy[aB].style.width = "100%", sy[aB].style.display = "flex", qo[aB] = new Array(lL);
				for (var fO = 0; fO < lL; fO++) qo[aB][fO] = f8 = document.createElement("div"), f8.style.display = "flex", f8.style.justifyContent = "center", f8.style.wordBreak = "break-all", f8.style.padding = "0.4em 0em", f8.style.width = data
					.t5[fO] + "%", f8.innerHTML = su[aB][fO].fX, 1 === su[aB][fO].eU && (f8.name = "" + aB, f8.style.color = bB.oz, f8.style.backgroundColor = t1, f8.addEventListener("mouseover", rO), f8.addEventListener("mouseout", t6), function(f8,
						t8, t9) {
						2147483647 !== t9 && f8.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, t8), bH.dd(bD.aC), this.style.backgroundColor = t1, t.u(8, t.tA, new tB(25, {
								tC: 0,
								t8: bF.tD.tE(bF.tD.tF(5)),
								t9: t9
							}))
						})
					}(f8, su[aB][fO].t8, su[aB][fO].t9)), sy[aB].appendChild(f8)
			}
			for (sv.style.display = "flex", sv.style.backgroundColor = bA.color.nu(0, 120, 0, .35), aB = 0; aB < sz.length; aB++) sz[aB] = f8 = document.createElement("div"), f8.style.display = "flex", f8.style.justifyContent = "center", f8.style
				.wordBreak = "break-all", f8.style.padding = "0.4em 0em", f8.style.width = data.t5[aB] + "%", f8.innerHTML = data.t0[aB], sv.appendChild(f8)
		}();
	for (var aB = 0; aB < f5; aB++) sx.appendChild(sy[aB]);
	sw.appendChild(sx), qn.appendChild(sv), qn.appendChild(sw)
}

function tJ() {
	var tN, tO, tK = document.createElement("div"),
		tL = document.createElement("div"),
		tM = document.createElement("div"),
		sx = document.createElement("div"),
		rS = [],
		e6 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tP = [1, 2, 3, 0, 9, 10, 11];

	function tR(aB) {
		t.u(8, 0, new tB(21, {
			tT: tP[aB],
			tU: 0,
			tV: 10
		}))
	}
	this.show = function() {
			this.sM(t.y.tW), document.body.appendChild(tK)
		}, this.sA = function() {
			t.removeChild(document.body, tK)
		}, this.sM = function(tW) {
			for (var tX = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rS.length; aB++) {
				var i = tW[aB];
				tN[tX[aB]][1].rr.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tY = bc.gap,
				j = bA.qt.tZ(.085),
				i = Math.min(4 * j, h.i - 2 * tY),
				f5 = rS.length;
			for (bA.qt.ta(tK, tY, h.j - tY - j, i, j), bA.qt.r3(tK), bA.qt.r3(tL, 6), aB = 0; aB < f5 - 1; aB++) bA.qt.r3(rS[aB].button, 6);
			for (aB = 0; aB < f5; aB++) tN[aB][0].resize(), tN[aB][1].resize();
			for (rS[0].fC = 0, rS[0].button.style.left = bA.qt.r2(rS[0].fC), rS[0].button.style.width = bA.qt.tb(1.7 * j), aB = 1; aB < f5; aB++) rS[aB].fC = rS[aB - 1].fC + rS[aB - 1].button.offsetWidth, rS[aB].button.style.left = bA.qt.r2(rS[aB]
				.fC);
			if (!tO) {
				if (!ab.tc()) return;
				(tO = ab.get(14)).style.width = "24%", tO.style.position = "absolute", tL.appendChild(tO)
			}
			tO.style.left = bA.qt.r2(0), tO.style.top = "7%", tM.td && (tM.scrollLeft = tM.td)
		}, tK.style.position = "absolute", tL.style.width = "25%", tL.style.height = "100%", tL.style.backgroundColor = bB.nw, tM.style.position = "absolute", tM.style.width = "75%", tM.style.height = "100%", tM.style.backgroundColor = bB.nw, tM
		.style.top = tM.style.right = bA.qt.r2(0), bA.qt.tQ(tM), sx.style.height = sx.style.maxHeight = "100%", rS.push(new w("", function() {
			tR(0)
		}, bB.ol)), rS.push(new w("", function() {
			tR(1)
		}, bB.om)), rS.push(new w("", function() {
			tR(2)
		}, bB.od)), rS.push(new w("", function() {
			tR(3)
		}, bB.oO)), rS.push(new w("", function() {
			tR(4)
		}, bB.pA)), rS.push(new w("", function() {
			tR(5)
		}, bB.p6)), rS.push(new w("", function() {
			tR(6)
		}, bB.pA)), tN = new Array(rS.length);
	for (var aB = 0; aB < rS.length; aB++) rS[aB].button.style.position = "absolute", tN[aB] = [new tS(e6[aB], rS[aB].button, .25, .45), new tS("", rS[aB].button, .53, .84, 1)], rS[aB].button.style.height = rS[aB].button.style.maxHeight = "100%", rS[
		aB].button.top = bA.qt.r2(0), sx.appendChild(rS[aB].button);
	tM.appendChild(sx), tK.appendChild(tL), tK.appendChild(tM)
}

function te(tf, tg, th, ti, ra, rb) {
	var tj = document.createElement("div"),
		tk = document.createElement("div"),
		tl = document.createElement("div"),
		tm = document.createElement("div"),
		tn = document.createElement("div"),
		tp = document.createElement("div"),
		tq = document.createElement("div"),
		tr = document.createElement("div"),
		ts = document.createElement("span"),
		tt = document.createElement("div");
	this.tu = new rZ(ra, rb), this.tv = new tw(rb), this.tx = [tf, tg, th, ti], this.u1 = function(u2) {
		u2 = (u2 / 10).toFixed(1) + "%";
		tr.style.width = u2, ts.innerHTML = u2
	}, this.u3 = function() {
		this.tv.sA(tp), this.tu.show(tp)
	}, this.u4 = function() {
		this.tu.sA(tp), this.tv.show(tp)
	}, this.u5 = function() {
		return tk
	}, this.show = function() {
		document.body.appendChild(tj)
	}, this.sA = function() {
		t.removeChild(document.body, tj)
	}, this.resize = function(u6) {
		var u7 = 1 - .4 * a0.a1.iE() * (h.i > 1.6 * h.j),
			u8 = bA.qt.sC(.05 * u7),
			u9 = h.j > h.i,
			uA = bA.qt.sC(.06 * u7 + .03 * u9),
			uB = bA.qt.sC(.08 * u7 + .03 * u9),
			uC = bA.qt.sC(.04 + .02 * u9),
			u9 = bA.qt.sC(.02 * u7 + .01 * u9),
			uE = bA.qt.sC(.025);
		tj.style.font = bA.qt.sk(0, uE), tn.style.font = bA.qt.sk(0, .9 * uE), tt.style.font = bA.qt.sk(0, .9 * uE), u7 < 1 && (uE = bA.qt.sk(0, u7 * uE), tl.style.font = uE, tn.style.font = uE, tt.style.font = uE, tq.style.font = uE, tm.style
				.font = uE), tk.style.height = bA.qt.r2(u8), tk.style.font = bA.qt.sk(0, .72 * u8), bA.qt.r3(tk, 2), tl.style.top = bA.qt.r2(u8), tl.style.height = bA.qt.r2(uB), bA.qt.r3(tl, 2), tm.style.font = bA.qt.sk(0, u7 * bA.qt.sC(.02)), tm
			.style.top = bA.qt.r2(u8 + uB), tm.style.height = bA.qt.r2(uC), bA.qt.r3(tm, 2), tn.style.top = bA.qt.r2(u8 + uB + uC), tn.style.height = bA.qt.r2(uA), bA.qt.r3(tn, 2), tp.style.top = bA.qt.r2(u8 + uB + uC + uA), tp.style.height = bA
			.qt.r2(h.j / h.k - u8 - uB - 2 * uA - uC - u9), tq.style.top = bA.qt.r2(h.j / h.k - uA - u9), tq.style.height = bA.qt.r2(u9), bA.qt.r3(tq, 8), ts.style.font = bA.qt.sk(0, .8 * u9), tt.style.top = bA.qt.r2(h.j / h.k - uA), tt.style
			.height = bA.qt.r2(uA), bA.qt.r3(tt, 8), tf.resize(tl), tg.resize(tl), th.resize(tl), ti.resize(tl), u6 ? this.tu.resize(tp) : this.tv.resize()
	};
	ra = this;
	tj.style.position = "absolute", tj.style.top = "0", tj.style.left = "0", tj.style.width = "100%", tj.style.height = "100%", tj.style.backgroundColor = bB.nz, bJ.rL() || (tj.style.backdropFilter = "blur(4px)", tj.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (tj.style.display = "none"), tk.style.position = "absolute", tk.style.top = "0", tk.style.left = "0", tk.style.width = "100%", tk.style.display = "flex", tk.style.alignItems = "center";
	for (var g = [tl, tm, tn, tt], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qt.tQ(g[aB]);
	tp.style.position = "absolute", tp.style.left = "0", tp.style.width = "100%", tp.style.font = "inherit", tq.style.position = "absolute", tq.style.left = "0", tq.style.width = "100%", tr.style.position = "absolute", tr.style.top = "0", tr.style
		.left = "0", tr.style.height = "100%", tr.style.width = "50%", tr.style.backgroundColor = bB.oM, ts.innerHTML = "", ts.style.position = "absolute", ts.style.top = "50%", ts.style.left = "50%", ts.style.transform = "translate(-50%, -50%)", tk
		.appendChild(function() {
			var u0 = document.createElement("h1");
			return u0.textContent = L(23), u0.style.margin = "0 auto 0.15em auto", u0.style.fontFamily = "Arial Black, system-ui", u0.style.fontSize = "inherit", u0.style.fontWeight = "inherit", u0
		}()), tl.appendChild(tf.qY), tm.appendChild(tg.qY), tn.appendChild(th.qY), tq.appendChild(tr), tq.appendChild(ts), tt.appendChild(ti.qY), tj.appendChild(tk), tj.appendChild(tl), tj.appendChild(tm), tj.appendChild(tn), tj.appendChild(tp), tj
		.appendChild(tq), tj.appendChild(tt), ra.tv.show(tp)
}

function tw(rb) {
	var tj = document.createElement("div"),
		tp = document.createElement("div");
	this.mm = function() {
			tp.textContent = "", bn.uG.uH && bn.uG.sA(1);
			for (var s2 = document.createDocumentFragment(), uI = bn.y.rx[0], uJ = bn.uJ.uK[uI], uL = bn.uJ.uL[uI], aB = 0; aB < uJ.length; aB++) ! function(s2, ql, uN, uI) {
				var rr = document.createElement("span");
				rr.textContent = (uN ? "🟢 " : "⚪ ") + bn.lF.uO(ql, uI), rr.style.color = bn.lF.uP(ql.uQ), rr.style.cursor = "pointer", rr.style.margin = "0.2em 0.2em 0.2em 0.2em", rr.style.width = rr.style.maxWidth = 2 === uI ? "10em" : "9em",
					rr.style.height = rr.style.maxHeight = "1.4em", rr.style.whiteSpace = "nowrap", rr.style.overflow = "hidden", rr.style.textOverflow = "ellipsis", rr.style.font = "inherit", rr.style.display = "inline-block", bn.lF.uR(ql) && (
						rr.style.textDecoration = "underline"), ql.uS && (rr.style.textDecorationLine = "underline", rr.style.textDecorationStyle = "dotted");
				rr.onclick = function(e) {
					rb(e, ql)
				}, bJ.rL() || (rr.onmouseover = function(e) {
					bn.uG.uT(e.target, ql, 1)
				}), s2.appendChild(rr)
			}(s2, uJ[aB], aB < uL, uI);
			tp.appendChild(s2)
		}, this.show = function(qn) {
			qn.appendChild(tj)
		}, this.sA = function(qn) {
			t.removeChild(qn, tj)
		}, this.resize = function() {
			tp.style.fontSize = bA.qt.r2(bA.qt.sC(.02, .3))
		}, tj.style.top = "0", tj.style.left = "0", tj.style.width = tj.style.height = "100%", tj.style.overflowX = "hidden", tj.style.overflowY = "auto", tj.style.font = "inherit", tp.style.font = "inherit", tp.style.margin = "0.4em", tj
		.appendChild(tp)
}

function uU(uV) {
	var tj = document.createElement("div"),
		re = document.createElement("div"),
		uW = [];

	function rG() {
		bJ.rL() || (this.style.backgroundColor = bA.color.rO(bB.nw, 50))
	}

	function rH() {
		this.style.backgroundColor = bB.nw
	}
	this.sM = function(uY, uZ) {
			uW[2].textContent = uY + 1 + " / " + uZ
		}, this.show = function(ql) {
			ql = bn.lF.s4(ql, bn.lF.s5(ql)), re.appendChild(bn.s9.transform(ql)), document.body.appendChild(tj)
		}, this.resize = function() {
			var j = bA.qt.sC(.03, .5);
			tj.style.width = 10 * j + "px", tj.style.font = bA.qt.sk(1, .75 * j), bA.qt.r3(tj, 4), re.style.top = j + "px", re.style.font = bA.qt.sk(0, .55 * j), bA.qt.r3(re, 2), tj.style.height = j + re.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qt.r3(uW[aB], 6), uW[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uW[aB].style.height = j + "px", bA.qt.r3(uW[aB], 2);
			uW[2].style.width = 4 * j + "px", uW[1].style.left = 2 * j + "px", uW[2].style.left = 4 * j + "px", uW[3].style.left = 8 * j + "px"
		}, this.ua = function() {
			for (var aB = 0; aB < 4; aB++) uW[aB].onclick = null, uW[aB].onmouseover = null, uW[aB].onmouseout = null;
			t.removeChild(document.body, tj), tj = re = uW = null
		}, tj.style.position = "absolute", tj.style.color = bB.o0, tj.style.zIndex = "3", tj.style.right = "0", tj.style.top = "0", re.style.position = "absolute", re.style.height = "auto", re.style.color = bB.o0, re.style.backgroundColor = bB.nw, re
		.style.left = "0", re.style.width = "100%", re.style.overflowWrap = "break-word", tj.appendChild(re);
	for (var aB = 0; aB < 4; aB++) uW[aB] = document.createElement("div"), uW[aB].style.position = "absolute", uW[aB].style.backgroundColor = bB.nw, uW[aB].style.color = bB.o0, uW[aB].style.top = "0", uW[aB].style.display = "flex", uW[aB].style
		.justifyContent = "center", uW[aB].style.alignItems = "center", uW[aB].style.userSelect = "none", uW[aB].style.outline = "none", uW[aB].style.font = "inherit", 2 !== (uW[aB].uX = aB) && (uW[aB].onclick = uV, uW[aB].onmouseover = rG, uW[aB]
			.onmouseout = rH), tj.appendChild(uW[aB]);
	uW[0].textContent = "◀", uW[1].textContent = "▶", uW[3].textContent = "✖"
}

function ub(uV) {
	var sa = document.createElement("div");

	function rG() {
		bJ.rL() || (sa.style.backgroundColor = bA.color.rO(bB.nw, 50))
	}

	function rH() {
		sa.style.backgroundColor = bB.nw
	}
	this.sM = function(uZ) {
			sa.textContent = uZ
		}, this.show = function() {
			document.body.appendChild(sa)
		}, this.resize = function() {
			var j = bA.qt.sC(.03, .5);
			sa.style.width = 2 * j + "px", sa.style.height = j + "px", sa.style.font = bA.qt.sk(1, .75 * j), bA.qt.r3(sa, 4), bA.qt.r3(sa, 2)
		}, this.ua = function() {
			sa.onclick = null, sa.onmouseover = null, sa.onmouseout = null, t.removeChild(document.body, sa), sa = null
		}, sa.style.position = "absolute", rH(), sa.style.color = bB.o0, sa.style.zIndex = "3", sa.style.right = "0", sa.style.top = "0", sa.style.display = "flex", sa.style.justifyContent = "center", sa.style.alignItems = "center", sa.style
		.userSelect = "none", sa.style.outline = "none", sa.onclick = uV, sa.onmouseover = rG, sa.onmouseout = rH
}

function uc(sS) {
	var tj = document.createElement("div"),
		ud = document.createElement("div"),
		sc = (this.fC = 0, this.fE = 0);

	function uf() {
		bn.ug.sA()
	}
	this.rS = sS, this.show = function(fC, fE, ui) {
		if (sc) return [0, 0];
		sc = 1, this.fC = fC, this.fE = fE,
			function(self, ui) {
				var i = bA.qt.sC(.16, .7),
					j = sS.length * i / 3,
					uk = h.i / h.k,
					ul = h.j / h.k,
					nc = Math.min(1, Math.min(uk / i, ul / j));
				i *= nc, j *= nc, ui && (self.fC += bA.qt.sC(.03, .5)), self.fC = bL.iD(self.fC, 0, uk - i), self.fE = bL.iD(self.fE, 0, ul - j), ud.style.left = self.fC + "px", ud.style.top = self.fE + "px", ud.style.width = i + "px", ud.style
					.height = j + "px", ud.style.font = bA.qt.sk(0, .3 * j / sS.length), bA.qt.r3(ud, 5);
				for (var aB = 1; aB < sS.length; aB++) bA.qt.r3(sS[aB].button, 8)
			}(this, ui), document.body.appendChild(tj)
	}, this.sA = function() {
		sc && (sc = 0, tj.removeEventListener("click", uf), t.removeChild(document.body, tj))
	};
	for (var aB = 0; aB < sS.length; aB++) new rq("" + (1 + aB), sS[aB].button, 0, 1);
	tj.style.position = "fixed", tj.style.top = "0", tj.style.left = "0", tj.style.width = "100%", tj.style.height = "100%", tj.style.zIndex = "5", ud.style.position = "absolute",
		function() {
			for (var uh = (100 / sS.length).toFixed(2) + "%", aB = 0; aB < sS.length; aB++) sS[aB].button.style.width = "100%", sS[aB].button.style.height = sS[aB].button.style.maxHeight = uh, sS[aB].button.style.padding = "0.0em 0.9em", ud
				.appendChild(sS[aB].button)
		}(), tj.appendChild(ud), tj.addEventListener("click", uf)
}

function ee() {
	var um, un, uo;

	function uv(aB) {
		return bA.color.ns(un[aB][0], un[aB][1], un[aB][2])
	}

	function v1(fO, fP) {
		return bA.color.vB(un[fO], un[fP]), uv(fP)
	}

	function ut() {
		um && (um.remove(), um = null)
	}
	this.show = function(ef, colors, id) {
		0 <= (uo = id) && b0.y.eZ(0) && b0.ea.up(0, id), ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = ef.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			un = colors, (um = document.createElement("div")).style.position = "fixed", um.style.top = "0", um.style.left = "0", um.style.width = "100%", um.style.height = "100%", um.style.backgroundColor = bA.color.nu(un[0][0], un[0][1], un[0][
				2], .6), um.style.zIndex = "6", um.onclick = function(e) {
				e.target === um && ut()
			},
			function(ef) {
				var i1, uu = document.createElement("div");
				uu.style.position = "absolute", uu.style.display = "flex", uu.style.flexDirection = "column", uu.style.top = "50%", uu.style.left = "50%", uu.style.backgroundColor = uv(2), i1 = a0.a1.iE() ? bA.qt.uw(h.min) : bA.qt.sC(.4);
				i1 = Math.max(i1, 200), uu.style.width = bA.qt.r2(i1), uu.style.height = bA.qt.r2(i1), uu.style.transform = "translate(-50%, -50%)",
					function(uu, i1) {
						var v0 = document.createElement("div");
						v0.style.flex = "0 0 10%", v0.style.overflow = "hidden", v0.style.backgroundColor = uv(1), v0.style.color = v1(1, 7), v0.style.font = bA.qt.sk(1, .05 * i1), v0.style.display = "flex", v0.style.alignItems = "center", v0
							.style.justifyContent = "center", v0.innerHTML = L(24), uu.appendChild(v0)
					}(uu, i1),
					function(uu, ef, i1) {
						var v2 = document.createElement("div");
						v2.style.flex = "0 0 70%", v2.style.overflowY = "auto", v2.style.overflowX = "hidden", v2.style.whiteSpace = "pre-wrap", v2.style.wordWrap = "break-word", v2.style.padding = bA.qt.r2(.02 * i1), v2.style.backgroundColor =
							uv(2), v2.style.color = v1(2, 8), v2.style.font = bA.qt.sk(0, .07 * i1), v2.innerHTML = ef, v2.innerHTML = "<style>a { color: inherit; }</style>" + v2.innerHTML, uu.appendChild(v2)
					}(uu, ef, i1),
					function(uu, i1) {
						var v3 = document.createElement("div"),
							v4 = (v3.style.display = "flex", v3.style.flexDirection = "row", v3.style.justifyContent = "space-between", v3.style.alignItems = "stretch", v3.style.backgroundColor = uv(3), v3.style.flex = "1", v3.style.padding = bA
								.qt.r2(.01 * i1), v3.style.gap = bA.qt.r2(.01 * i1), document.createElement("div")),
							v5 = (v4.style.flex = "0 0 60%", v4.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								ut()
							}, uv(4), !1)),
							v5 = (v5.button.style.width = "100%", v5.button.style.height = "100%", v5.button.style.color = v1(4, 9), v5.button.style.font = bA.qt.sk(1, .05 * i1), v4.appendChild(v5.button), document.createElement("div")),
							v7 = (v5.style.flex = "0 0 15%", v5.style.height = "100%", v5.style.backgroundColor = uv(5), document.createElement("div")),
							v8 = (v7.style.flex = "1", v7.style.height = "100%", new w(L(26), function(e) {
								return bA.qt.v9(e), uo < 0 || b0.y.eZ(0) && (b0.ea.up(1, uo), uo = -1), !0
							}, uv(6), !1));
						v8.button.style.width = "100%", v8.button.style.height = "100%", v8.button.style.color = v1(6, 10), v8.button.style.font = bA.qt.sk(1, .035 * i1), v7.appendChild(v8.button), v3.appendChild(v4), v3.appendChild(v5), v3
							.appendChild(v7), uu.appendChild(v3)
					}(uu, i1), um.appendChild(uu)
			}(ef), document.body.appendChild(um)
	}
}

function vC(so, vD) {
	this.qj = [];
	var vE = this.qj;

	function click() {
		for (var aB = 0; aB < vE.length; aB++) vE[aB].textContent = vE[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eC = parseInt(this.name);
		void 0 !== so.eC && bj.sL.sM(so.eC, eC), vD && vD(eC)
	}
	for (var vF, f5 = so.vG.length, aB = 0; aB < f5; aB++)(vF = document.createElement("p")).textContent = "⚪ " + so.vG[aB], vF.style.margin = "0", vF.name = "" + aB, vF.style.cursor = "pointer", vF.style.fontSize = "1em", vF.addEventListener(
		"click", click), vE.push(vF);
	vE[so.value].textContent = vE[so.value].textContent.replace("⚪", "🟢")
}

function vH(title, vI, vJ) {
	var tK = document.createElement("div"),
		vK = document.createElement("div"),
		sx = document.createElement("div"),
		vL = document.createElement("div"),
		vM = document.createElement("div");
	this.vN = sx, this.vO = vI, this.show = function() {
			!1 !== vJ ? document.body.appendChild(tK) : (document.body.appendChild(vK), document.body.appendChild(vL))
		}, this.sA = function() {
			!1 !== vJ ? t.removeChild(document.body, tK) : (t.removeChild(document.body, vK), t.removeChild(document.body, vL))
		}, this.vS = function() {
			var sD = bA.qt.sC(.1),
				sB = bA.qt.sC(.08 + .04 * (h.vT < 1), .3);
			return {
				sD: sD,
				sB: sB,
				vU: h.j / h.k - sD - sB
			}
		}, this.resize = function(sW) {
			var f5 = vI.length,
				vV = this.vS(),
				sD = vV.sD,
				sB = vV.sB;
			for (vK.style.height = bA.qt.r2(sD), bA.qt.r3(vK, 2), vL.style.top = bA.qt.r2(h.j / h.k - sB), vL.style.height = bA.qt.r2(sB), bA.qt.r3(vL, 8), sx.style.top = bA.qt.r2(sD), sx.style.height = sx.style.maxHeight = bA.qt.r2(vV.vU), vK.style
				.font = bA.qt.sk(0, bA.qt.sC(.02, .15)), vL.style.font = bA.qt.sk(0, bA.qt.sC(.02, .7)), sx.style.font = bA.qt.sk(0, bA.qt.sC(.02, .35)), aB = 1; aB < f5; aB++) bA.qt.r3(vI[aB].button, 4);
			for (var sX = 0, aB = 0; aB < f5; aB++) sX += vI[aB].button.offsetWidth;
			if (sW && sX < vL.offsetWidth)
				for (aB = 0; aB < f5; aB++) vI[aB].button.style.width = (100 * vI[aB].button.offsetWidth / sX).toFixed(2) + "%";
			else
				for (aB = 0; aB < f5; aB++) vI[aB].button.style.width = "auto";
			vL.td && (vL.scrollLeft = vL.td), sW || this.resize(!0)
		}, this.vW = function() {
			var vV = this.vS(),
				ed = h.k;
			vX.fillStyle = bB.nw, vX.fillRect(0, ed * vV.sD, h.i, ed * vV.vU)
		}, tK.style.position = "absolute", tK.style.top = "0", tK.style.left = "0", tK.style.width = "100%", tK.style.height = "100%", vK.style.position = "absolute", vK.style.top = "0", vK.style.left = "0", vK.style.width = "100%", vK.style
		.display = "flex", vK.style.backgroundColor = bB.nw, vL.style.position = "absolute", vL.style.left = "0", vL.style.width = "100%", bA.qt.tQ(vL), vM.style.height = vM.style.maxHeight = "100%", sx.style.position = "absolute", sx.style.width =
		"100%", sx.style.backgroundColor = bB.nw,
		function() {
			for (var aB = 0; aB < vI.length; aB++) vI[aB].button.style.height = "100%", vI[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vI.length; aB++) vM.appendChild(vI[aB].button);
	vK.appendChild(function() {
		var vR = document.createElement("h1");
		return vR.textContent = title, vR.style.margin = "auto", vR.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vR.style.fontFamily = "Arial Black, system-ui", vR
	}()), vL.appendChild(vM), !1 !== vJ && (tK.appendChild(sx), tK.appendChild(vK), tK.appendChild(vL))
}

function rq(vY, vZ, va, vb) {
	var self;
	this.rr = document.createElement("span"), (self = this).rr.textContent = vY, self.rr.style.color = bB.o0, self.rr.style.position = "absolute", self.rr.style.font = "inherit", vb ? self.rr.style.bottom = "0.06em" : self.rr.style.top = "0.12em",
		va ? self.rr.style.left = "0.2em" : self.rr.style.right = "0.2em", self.rr.style.fontSize = "0.6em", self.rr.style.pointerEvents = "none", self.rr.style.whiteSpace = "pre", vZ.style.position = "relative", vZ.style.overflow = "hidden", vZ
		.appendChild(self.rr)
}

function tS(vY, vZ, vc, vd, ve) {
	var self;
	this.rr = document.createElement("span"), this.resize = function() {
			this.rr.style.fontSize = ((vd - vc) * vZ.offsetHeight).toFixed(1) + "px"
		}, (self = this).rr.textContent = vY, self.rr.style.color = bB.o0, self.rr.style.font = "inherit", self.rr.style.margin = "0.1em 0.6em", self.rr.style.pointerEvents = "none", ve && (self.rr.style.fontWeight = "bold"), self.rr.style
		.whiteSpace = "nowrap", self.rr.style.display = "block", vZ.appendChild(self.rr)
}

function vf(vg, vh, vi, vj) {
	var vk = document.createElement("textarea"),
		vl = (this.e = vk, !0);

	function vq() {
		vk.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vh && bA.qt.r3(vk, 5)
		}, this.vm = function(ef) {
			vk.value = ef
		}, this.vn = function() {
			return vk.value
		}, this.vo = function() {
			vk.select()
		}, this.clear = function() {
			vk.value = ""
		}, this.vp = function() {
			vl && navigator.clipboard ? (vk.select(), navigator.clipboard.writeText(vk.value).catch(function() {
				vl = !1, vq()
			})) : vq()
		}, vk.setAttribute("id", "textArea" + t.y.sr++), vk.setAttribute("autocomplete", "off"), vg && vk.setAttribute("placeholder", vg), vk.style.top = "0", vk.style.left = "0", vk.style.width = "100%", vk.style.height = "100%", vk.style
		.userSelect = "none", vk.style.outline = "none", vk.style.resize = "none", vk.style.border = "none", vk.style.color = bB.o0, vk.style.backgroundColor = bB.nt, vj ? (vk.style.fontSize = "1em", vk.rows = 6, vk.style.padding = "0.25em") : (vk
			.style.padding = "0.45em", vk.style.fontSize = "1.2em"), vi && vk.addEventListener("input", function(e) {
			vi(e)
		}), vk.addEventListener("focus", function() {
			h.ss++
		}), vk.addEventListener("blur", function() {
			h.ss--
		})
}

function dI() {
	this.rA = new vr, this.eQ = new vs, this.sL = new vt, this.y = new vu, this.vv = new vw, this.dd = function() {
		this.eQ.dd(), (new vx).dd(), this.vv.dd(), this.y.vy()
	}
}

function vs() {
	function vz(aB, type, w5, dw) {
		bj.eQ.data.push({
			eC: aB,
			type: type || 0,
			value: w5 || 0,
			w5: w5 || 0,
			dw: dw || 0
		})
	}

	function w0(aB, type, w5, dw) {
		bj.eQ.data.push({
			eC: aB,
			type: type,
			value: w5 || "",
			w5: w5 || "",
			dw: dw || 0
		})
	}

	function w1(ni) {
		for (var aB = bj.eQ.data.length; aB < ni; aB++) bj.eQ.data.push(null)
	}
	this.data = [], this.dd = function() {
		vz(0, 1, 0, 5), vz(1, 1, 1), vz(2, 0), w0(3, 2), vz(4, 1), w0(5, 2, "system-ui", 2), vz(6, 0), vz(7, 0, 0), vz(8, 0), vz(9, 1, 1), vz(10, 1), vz(11, 1, 1), w0(12, 2, navigator.language), vz(13), vz(14), w1(100), w0(100, 2), w0(101, 2),
			w0(102, 2), w0(103, 2), w0(104, 2), w0(105, 2), w0(106, 2), vz(107), vz(108), vz(109), w0(110, 2), vz(111), vz(112), vz(113), w0(114, 2), vz(115), w0(116, 2), vz(117, 1), w0(118, 2, "", 2), vz(119, 1, 0, 1), w0(120, 2), vz(121, 1, ~~(
				262144 * Math.random())), w0(122, 2, "Player " + Math.floor(1e3 * Math.random())), vz(123), w0(124), vz(125, 1), w0(126, 2), vz(127, 0, 1), vz(128), vz(129), vz(130), vz(131), vz(132), w0(133, 2), vz(134, 0, 5), w0(135, 2), w0(
				136, 2), vz(137), vz(138), vz(139), vz(140), vz(141), vz(142), vz(143), vz(144), w0(145, 2), vz(146), vz(147), w0(148, 2), vz(149), vz(150, 0, 1), w0(151, 2), vz(152, 0, 5), vz(153, 1), vz(154, 1), w0(155, 2), w0(156, 2), vz(157),
			vz(158), vz(159), vz(160), w0(161, 2), vz(162, 0, 1024), w0(163, 2, "0,0,0"), w0(164, 2, "100,100,100"), w0(165, 2, "30,30,30"), w0(166, 2, "70,70,70"), w0(167, 2, "100,100,100"), w0(168, 2, "85,85,85"), w0(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) w0(170 + aB, 2, "255,255,255");
		w0(174, 2), w0(175, 2), vz(176, 0, 200), w1(180), vz(180, 0), vz(181, 0)
	}, this.sM = function(eC, value) {
		this.data[eC].value = value
	}, this.w2 = function(eC, value) {
		this.sM(eC, value);
		var value = String(value),
			f5 = value.length;
		5e4 < f5 ? console.log("storage value too large: index " + eC + " size " + f5) : (bj.rA.save(eC, value), bj.rA.save(eC, String(this.data[eC].dw), !0))
	}, this.w3 = function(eC) {
		return Number(this.data[eC].value)
	}, this.w4 = function(eC) {
		return String(this.data[eC].value)
	}
}

function vw() {
	var w6 = [];

	function wA(t8) {
		w6.unshift(t8), bj.sL.sM(161, w6.join(";"))
	}

	function w9(t8) {
		for (var wC = w6, f5 = wC.length, aB = 0; aB < f5; aB++)
			if (wC[aB] === t8) return wC.splice(aB, 1), bj.sL.sM(161, wC.join(";")), 1
	}
	this.dd = function() {
		var qa = bj.eQ.data[161].value;
		qa.length && (w6 = qa.split(";"))
	}, this.get = function() {
		return w6
	}, this.w7 = function() {
		return {
			vG: w6,
			value: 0
		}
	}, this.uS = function(t8) {
		return bA.r1.has(w6, t8)
	}, this.w8 = function(t8) {
		return w9(t8) ? 0 : (wA(t8), 1)
	}, this.mm = function(t8) {
		w9(t8) && wA(t8)
	}, this.wB = function(eC) {
		eC < w6.length && (w6.splice(eC, 1), bj.sL.sM(161, w6.join(";")))
	}
}

function vr() {
	this.wD = function(eC, dw) {
		return Number(this.wE(eC, dw))
	}, this.wE = function(eC, dw) {
		var fX = null;
		return 0 === a0.id ? a0.wF && (fX = a0.wF.getItem((dw ? "v" : "d") + eC)) : 1 === a0.id ? fX = a0.wG.loadString((dw ? 1e3 : 2e3) + eC) : 2 === a0.id && (fX = a0.wH[(dw ? "v" : "d") + eC]), fX && 0 !== fX.length ? fX : null
	}, this.wI = function(f5, wJ) {
		var g = [],
			wK = wJ ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wF)
				for (aB = 0; aB < f5; aB++) g.push(a0.wF.getItem(wK + aB))
		} else if (1 === a0.id)
			for (var wL = wJ ? 5e3 : 3e3, aB = 0; aB < f5; aB++) g.push(a0.wG.loadString(wL + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f5; aB++) g.push(a0.wH[wK + aB]);
		return g
	}, this.save = function(eC, value, dw) {
		var wM = (dw ? "v" : "d") + eC;
		if (0 === a0.id) {
			if (a0.wF && bj.eQ.data[140].value) try {
				a0.wF.setItem(wM, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wG.saveString((dw ? 1e3 : 2e3) + eC, value) : 2 === a0.id && (a0.wH[wM] = value, a0.wN.postMessage(wM + " " + value))
	}, this.wO = function(g, wJ) {
		var f5 = g.length,
			wK = wJ ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wF && bj.eQ.data[140].value) try {
				for (aB = 0; aB < f5; aB++) a0.wF.setItem(wK + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wL = wJ ? 5e3 : 3e3, aB = 0; aB < f5; aB++) a0.wG.saveString(wL + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f5; aB++) a0.wH[wK + aB] = g[aB], a0.wN.postMessage(wK + aB + " " + g[aB])
	}
}

function vx() {
	this.dd = function() {
		! function() {
			var data = bj.eQ.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].w5 = 1);
			0 === data[100].dw && (data[100].value = data[100].w5 = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bj.eQ.data,
			f5 = data.length;
		for (aB = 0; aB < f5; aB++) {
			var wR = bj.rA.wD(aB, !0);
			data[aB] && data[aB].dw === wR && (null === (wR = bj.rA.wE(aB)) ? data[aB].value = data[aB].w5 : 2 === data[aB].type ? data[aB].value = wR : (wR = Number(wR), isNaN(wR) ? data[aB].value = data[aB].w5 : data[aB].value = wR))
		}
	}
}

function vu() {
	function wW(g) {
		if (0 === g.length) bj.sL.sM(116, "");
		else {
			for (var wZ = g[0], aB = 1; aB < g.length; aB++) wZ += ";" + g[aB];
			bj.sL.sM(116, wZ)
		}
	}
	this.wT = function() {
		bj.eQ.data[110].value.length && (bj.eQ.data[106].value = bj.eQ.data[110], bj.sL.sM(110, ""), this.wU())
	}, this.wU = function() {
		var g = bj.eQ.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eQ.data[106].value), g.unshift(bj.eQ.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wV = [], aB = 0; aB < g.length; aB += 2) wV.push(g[aB]);
		wW(g), bj.eQ.data[117].value = 0, bj.eQ.data[117].vG = wV
	}, this.wX = function(eC) {
		bj.eQ.data[117].vG.splice(eC, 1), bj.eQ.data[117].value = Math.min(eC, bj.eQ.data[117].vG.length - 1);
		var g = bj.eQ.data[116].value.split(";");
		g.splice(2 * eC, 2), wW(g)
	}, this.wY = function(eC) {
		var g = bj.eQ.data[116].value.split(";");
		return {
			t8: g[2 * eC],
			password: g[2 * eC + 1]
		}
	}, this.wa = function() {
		var fX = bL.iD(bj.eQ.data[121].value, -1, 262143);
		return fX = -1 === fX ? ~~(262144 * Math.random()) : fX
	}, this.vy = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qa = g[aB].trim(),
				wb = qa.indexOf("="),
				wb = 0 <= wb ? qa.substring(0, wb) : qa;
			document.cookie = wb + "=;expires=0;path=/", document.cookie = wb + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wb + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function vt() {
	this.sM = function(eC, value) {
		2 !== bj.eQ.data[eC].type && (value = Math.floor(value)), bj.eQ.data[eC].value !== value && (bj.eQ.w2(eC, value), 0 === eC ? (t.x(), b7.dd(), t.u(2)) : 1 === eC ? h.dn(1) : 2 === eC ? h.dn(0) : 5 === eC && (bA.qt.wc(), h.dn(0)))
	}, this.wd = function() {
		for (var data = bj.eQ.data, aB = 0; aB < 100; aB++) data[aB] && bj.eQ.w2(aB, data[aB].w5);
		bA.qt.wc(), h.dn(1)
	}, this.we = function() {
		for (var data = bj.eQ.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eQ.sM(aB, data[aB].w5)
	}, this.wf = function() {
		for (var fP = bj.eQ, aB = 128; aB < 135; aB++) fP.w2(aB, fP.data[aB].w5)
	}, this.wg = function(data) {
		bj.sL.sM(109, data.t9), bj.sL.sM(107, data.wh), bj.sL.sM(108, data.wi), bj.sL.sM(112, data.wj), bj.sL.sM(111, data.wk), bj.sL.sM(113, data.wl), bj.sL.sM(135, data.wm), bj.sL.sM(136, data.wn), bj.sL.sM(137, data.wo), bj.sL.sM(138, data
			.wp), bj.sL.sM(139, data.wq), bj.sL.sM(141, data.wr), bj.sL.sM(142, data.ws), bj.sL.sM(143, data.wt), bj.sL.sM(144, data.wu)
	}
}

function c4() {
	this.tD = new wv, this.ww = new wx, this.wy = new wz, this.dd = function() {
		this.tD.dd()
	}
}

function wx() {
	this.x0 = function(size) {
		for (var x1 = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x1.q1(16)));
		return g.join("")
	}, this.x2 = function(qa) {
		return 20 < (qa = qa.trim()).length ? qa.substring(0, 20) : qa
	}
}

function wv() {
	var x3 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (x3[50] = 37, aB = 0; aB < 10; aB++) x3[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) x3[aB + 20] = aB + 11, x3[aB + 52] = aB + 38
	}, this.x4 = function(qa) {
		return qa.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.x5 = function(qa, size) {
		if ((qa = this.x4(qa)).length > size) return qa.substring(0, size);
		for (; qa.length < size;) qa = "-" + qa;
		return qa
	}, this.x6 = function(qa) {
		for (var x7 = x3, f5 = qa.length, g = new Uint8Array(f5), aB = 0; aB < f5; aB++) g[aB] = x7[qa.charCodeAt(aB) - 45];
		return g
	}, this.x8 = function(x9) {
		bD.a7(6 * x9.length), this.xA(x9), bH.dd(bD.aC)
	}, this.xA = function(x9) {
		for (var f5 = x9.length, i = bD, aB = 0; aB < f5; aB++) i.a8(6, x9[aB])
	}, this.xB = function(qa) {
		this.xA(this.x6(qa))
	}, this.xC = function(qa, size) {
		this.xA(this.x6(this.x5(qa, size)))
	}, this.xD = function(qa, size) {
		for (var g = this.x6(this.x5(qa, size)), fX = 0, nc = 1, aB = g.length - 1; 0 <= aB; aB--) fX += nc * g[aB], nc *= 64;
		return fX
	}
}

function xE() {
	var i, j, xF;

	function xf(hX, f8, xd, xK, xY) {
		f8 = xe(hX, f8 + 1 + 2 * xK & 3);
		! function(hX, l3) {
			return 1 < Math.abs(hX % i - l3 % i) || 1 < Math.abs(xi(hX) - xi(l3))
		}(hX, f8) && 0 === xY[f8 << 2] && (xY[f8 << 2] = xd)
	}

	function xi(gd) {
		return Math.floor((gd + .5) / i) % j
	}

	function xe(gd, f8) {
		return gd + xF[f8]
	}
	this.xG = function(qa) {
		var aB, xH, f5, xI, x1 = bH;
		for (bG.tD.x8(bG.tD.x6(qa)), bS.xL.xM[bS.el].i = bS.fG = i = x1.q1(12), bS.xL.xM[bS.el].j = bS.fH = j = x1.q1(12), xF = [-i, -1, i, 1], bS.xV = document.createElement("canvas"), bS.xV.width = bS.fG, bS.xV.height = bS.fH, bS.xR = bS.xV
			.getContext("2d", {
				alpha: !1
			}), bS.xS = bS.xW = null, bS.xS = bS.xR.getImageData(0, 0, bS.fG, bS.fH), bS.xW = bS.xS.data, bA.r1.xX(bS.xW), f5 = x1.q1(12), xH = x1.q1(5), xI = xO(i * j - 1), aB = 0; aB < f5; aB++) ! function(lL, gd, xJ, xK) {
			var aB, f8, x1 = bH,
				xY = bS.xW,
				xZ = gd,
				xa = gd,
				xb = 0,
				xc = 1 + xJ,
				xd = 2 - xJ;
			for (xY[gd << 2] = xc, aB = 0; aB < lL; aB++) f8 = x1.q1(2), gd = xe(gd, f8), xY[gd << 2] === xc ? xb % 2 == 1 && xf(xa, xb + 2 * xK + 3, xd, xK, xY) : xY[gd << 2] = xc, xf(gd, f8, xd, xK, xY), xf(xa, f8, xd, xK, xY), xa = gd,
				xb = f8;
			xe(gd, 0) === xZ ? (xf(gd, 0, xd, xK, xY), xf(xZ, 0, xd, xK, xY)) : xe(gd, 1) === xZ && (xf(gd, 0, xd, xK, xY), xf(xZ, 2, xd, xK, xY));
			0 === lL && (xf(xZ, 0, xd, xK, xY), xf(xZ, 2, xd, xK, xY))
		}(x1.q1(xH), x1.q1(xI), 1 === x1.q1(1), 1 === x1.q1(1));
		var fC, fE, hx, xj, xk, xl, xY = bS.xW,
			xm = !0,
			xn = bS.xL.xM[bS.el].xn,
			xo = bS.xL.xM[bS.el].xo;
		for (fE = 0; fE < j; fE++)
			for (xj = !0, xk = xm, fC = xl = 0; fC < i; fC++) hx = 4 * fE * i + 4 * fC, xl <= fC && 0 < xY[hx] && (xk = 2 === xY[hx], xj) && (xj = !1, xk !== xm) ? (xm = xk, xl = fC + 1, fC = -1) : (xk ? (xY[hx] = xo[0], xY[1 + hx] = xo[1], xY[
				2 + hx] = xo[2]) : (xY[hx] = xn[0], xY[1 + hx] = xn[1], xY[2 + hx] = xn[2]), xY[3 + hx] = 255);
		bS.xR.putImageData(bS.xS, 0, 0), bS.xT = !0, bS.xU.dd(), bf.dk = !0
	}
}

function wz() {
	this.xG = function(xp) {
		for (var x1 = bH, size = x1.q1(xp), xq = 7 + 9 * x1.q1(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x1.q1(xq)));
		return g.join("")
	}
}

function c9() {
	var se, sf, xr, xs, xt, xu, xv, xw, xx, xy;

	function y0() {
		var y3 = aD.y3;
		for (xx = y3; xx < aD.f2; xx++) xz();
		for (xx = aD.hT ? aD.kQ : 0; xx < y3; xx++) {
			if (!y4()) {
				for (var fP = aD.y8 = xx; fP < y3; fP++) xx = fP, xz();
				return
			}
			y7(xu + se * xt + bL.fW(xt, 2), xv + sf * xt + bL.fW(xt, 2))
		}
	}

	function ya(player) {
		for (var iy = ag.iy, j0 = ag.j0, iz = ag.iz, j1 = ag.j1, fE = j0[player]; fE <= j1[player]; fE++)
			for (var fC = iy[player]; fC <= iz[player]; fC++) {
				var ej = ac.yb(fC, fE);
				ac.gf(ej) && (ac.jb(ej) ? ac.ga(ej, player) : ac.yc(ej, player))
			}
	}

	function yZ(g, tU, tV) {
		var eU = g[tU];
		g[tU] = g[tV], g[tV] = eU
	}

	function y4() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (se = bL.fW(xr * ay.random(), ay.value(100)), sf = bL.fW(xs * ay.random(), ay.value(100)), yh()) return 1;
			return
		}() || function() {
			var iP, iS, fO, y6, fP, y5;
			for (iP = bL.fW(xr * ay.random(), ay.value(100)), iS = bL.fW(xs * ay.random(), ay.value(100)), fO = 40; 1 <= fO; fO--)
				for (y6 = xs - fO; 0 <= y6; y6 -= 40)
					for (sf = (y6 + iS) % xs, fP = 40; 1 <= fP; fP--)
						for (y5 = xr - fP; 0 <= y5; y5 -= 40)
							if (se = (y5 + iP) % xr, yh()) return 1;
			return
		}()
	}

	function yh() {
		for (var gd, yj, gap = bL.fW(xt - xw, 2), yk = xv + sf * xt + gap, yl = xu + se * xt + gap, yi = yk + xw - 1; yk <= yi; yi--)
			for (yj = yl + xw - 1; yl <= yj; yj--)
				if (gd = ac.yb(yj, yi), !ac.f0(gd) || ac.jb(gd)) return;
		return 1
	}

	function y7(y5, y6) {
		xz(), ym(y5 - 2, y6 - 2)
	}

	function xz() {
		ag.mz[xx] = 0, ag.gt[xx] = ag.yX[xx] = 0, ag.gX[xx] = [], ag.gl[xx] = [], ag.gm[xx] = [], ag.fU[xx] = [], ag.iy[xx] = ag.j0[xx] = ag.iz[xx] = ag.j1[xx] = 0
	}

	function ym(y5, y6) {
		var gd, aB, yn, yo;
		for (ag.mz[xx] = 1, ag.iy[xx] = y5 + 10, ag.j0[xx] = y6 + 10, ag.j1[xx] = ag.iz[xx] = 0, yn = y5; yn < y5 + 4; yn++)
			for (yo = y6; yo < y6 + 4; yo++)(y5 < yn && yn < y5 + 3 || y6 < yo && yo < y6 + 3) && (gd = ac.yb(yn, yo), ac.f0(gd)) && (ag.iy[xx] = Math.min(yn, ag.iy[xx]), ag.iz[xx] = Math.max(yn, ag.iz[xx]), ag.j0[xx] = Math.min(yo, ag.j0[xx]), ag
				.j1[xx] = Math.max(yo, ag.j1[xx]), xy[ag.gt[xx]] = gd, ag.gt[xx]++, ac.yc(gd, xx));
		for (ag.yX[xx] = ag.gt[xx], aB = ag.gt[xx] - 1; 0 <= aB; aB--) ac.yp(xy[aB], xx) ? (ac.ga(xy[aB], xx), ag.gl[xx].push(xy[aB])) : ac.yq(xy[aB]) ? (ac.ga(xy[aB], xx), ag.gm[xx].push(xy[aB])) : ac.yr(xy[aB]) && (ac.ga(xy[aB], xx), ag.fU[xx]
			.push(xy[aB]))
	}
	this.dd = function() {
		if (xy = new Array(12), xw = 6, xt = 10, xr = bL.fW(bS.fG, xt), xs = bL.fW(bS.fH, xt), xu = bL.fW(bS.fG - xt * xr, 2), xv = bL.fW(bS.fH - xt * xs, 2), aD.hT)
			for (var aB = 0; aB < aD.kQ; aB++) xx = aB, xz(), ag.mz[xx] = 1;
		(0 === aD.data.spawningType ? y0 : 1 === aD.data.spawningType ? (y0(), function() {
			var y9 = aD.yA;
			aD.yB || y9++;
			if (!(y9 < 3)) {
				for (var data = aD.data, jg = (aD.hT ? aD.kQ : 0) + data.teamPlayerCount[0], ni = aD.y8, yC = new Uint32Array(y9), yD = new Uint32Array(y9), yE = new Uint16Array(y9), yF = new Uint16Array(y9), f3 = bg.f3, iy = ag.iy, j0 =
						ag.j0, iz = ag.iz, j1 = ag.j1, fk = bO.fk, fl = bO.fl, aB = jg; aB < ni; aB++) fk[aB] = iy[aB] + iz[aB] >> 1, fl[aB] = j0[aB] + j1[aB] >> 1;
				for (aB = jg; aB < ni; aB++) {
					var id = f3[aB];
					yC[id] += fk[aB], yD[id] += fl[aB]
				}
				var kn = bg.kn;
				for (aB = 1; aB < y9; aB++) {
					var gY = Math.max(data.teamPlayerCount[kn[aB]], 1);
					yE[aB] = bL.fW(yC[aB], gY), yF[aB] = bL.fW(yD[aB], gY)
				}
				var yG = bg.yG,
					yH = bg.yH,
					yI = bg.yI,
					fj = bO.fj;
				for (aB = 0; aB < 512; aB++) fj[aB] = aB;
				for (var eB = 0; eB < 2 + (4 <= y9); eB++)
					for (aB = jg; aB < ni; aB++) {
						for (var hX = aB, yJ = fj[hX], yK = 1, fL = bL.yL(fk[yJ] - yE[1], fl[yJ] - yF[1]), fO = 2; fO < y9; fO++) {
							var yM = bL.yL(fk[yJ] - yE[fO], fl[yJ] - yF[fO]);
							yM < fL && (fL = yM, yK = fO)
						}
						var yN = f3[hX];
						if (yK !== yN) {
							if (2 === eB && 4 <= y9) {
								var yO = Math.max((yK + 1) % y9, 1),
									yP = bL.yL(fk[yJ] - yE[yO], fl[yJ] - yF[yO]);
								for (fO = 1; fO < y9; fO++) yM = bL.yL(fk[yJ] - yE[fO], fl[yJ] - yF[fO]), fL < yM && yM < yP && (yP = yM, yO = fO);
								yO !== yN && bL.yL(yE[yN] - yE[yO], yF[yN] - yF[yO]) < bL.yL(yE[yN] - yE[yK], yF[yN] - yF[yK]) && (yK = yO)
							}
							var yQ = kn[yK],
								yR = yH[yQ] + (aD.hT ? 0 : yI[yQ]),
								l3 = yG[yR],
								yS = fj[l3],
								yT = yH[yQ + 1];
							fL = bL.yL(fk[yS] - yE[yN], fl[yS] - yF[yN]);
							for (var ed = yR + 1; ed < yT; ed++) {
								var yU = yG[ed],
									yV = fj[yU];
								(yM = bL.yL(fk[yV] - yE[yN], fl[yV] - yF[yN])) < fL && (fL = yM, l3 = yU)
							}
							l3 < jg || ni <= l3 || (yS = fj[l3], yC[yN] += fk[yS] - fk[yJ], yD[yN] += fl[yS] - fl[yJ], yC[yK] += fk[yJ] - fk[yS], yD[yK] += fl[yJ] - fl[yS], gY = data.teamPlayerCount[kn[yN]], yE[yN] = bL.fW(yC[yN], gY),
								yF[yN] = bL.fW(yD[yN], gY), gY = data.teamPlayerCount[yQ], yE[yK] = bL.fW(yC[yK], gY), yF[yK] = bL.fW(yD[yK], gY), fj[hX] = yS, fj[l3] = yJ)
						}
					}! function() {
						for (var fj = bO.fj, iy = ag.iy, j0 = ag.j0, iz = ag.iz, j1 = ag.j1, gt = ag.gt, yX = ag.yX, gl = ag.gl, gm = ag.gm, fU = ag.fU, aB = 0; aB < 512; aB++) {
							var yY = fj[aB];
							if (yY !== aB) {
								yZ(iy, aB, yY), yZ(j0, aB, yY), yZ(iz, aB, yY), yZ(j1, aB, yY), yZ(gt, aB, yY), yZ(yX, aB, yY), yZ(gl, aB, yY), yZ(gm, aB, yY), yZ(fU, aB, yY), ya(aB), ya(yY), fj[aB] = aB;
								for (var j = yY, ge = fj[j]; ge !== aB;) ge = fj[j = ge];
								fj[j] = yY
							}
						}
					}()
			}
		}) : function() {
			var y3 = aD.y3;
			for (xx = y3; xx < aD.f2; xx++) xz();
			for (xx = aD.hT ? aD.kQ : 0; xx < y3; xx++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							y5 = spawningData[2 * xx] + 1,
							spawningData = spawningData[2 * xx + 1] + 1;
						if (3 < y5 && y5 < bS.fG - 5 && 3 < spawningData && spawningData < bS.fH - 5 && ac.f0(ac.yb(y5, spawningData)) && function(y5, y6) {
								var gd, yj, yi;
								for (yi = y6; y6 - 6 < yi; yi--)
									for (yj = y5; y5 - 6 < yj; yj--)
										if (gd = ac.yb(yj, yi), ac.jb(gd)) return;
								return 1
							}(y5 + 3, spawningData + 3)) return y7(y5 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!y4()) {
						for (var fP = aD.y8 = xx; fP < y3; fP++) xx = fP, xz();
						return
					}
					var y5 = xu + se * xt + bL.fW(xt, 2),
						y6 = xv + sf * xt + bL.fW(xt, 2);
					y7(y5, y6)
				}
		})(), bd.mv[7] = ag.gt[aD.ep]
	}, this.ys = function(jZ, yt, yu) {
		var aB, y5, y6, gd, se, sf;
		for (xx = jZ, aB = 0; aB < 20; aB++)
			for (y5 = yt + aB; yt - aB <= y5; y5--)
				for (y6 = yu + aB; yu - aB <= y6; y6--)
					if ((y5 === yt + aB || y5 === yt - aB || y6 === yu + aB || y6 === yu - aB) && 3 < y5 && y5 < bS.fG - 5 && 3 < y6 && y6 < bS.fH - 5 && ac.f0(ac.yb(y5, y6)) && function(y5, y6) {
							var gd, yj, yi;
							for (yi = y6; y6 - 6 < yi; yi--)
								for (yj = y5; y5 - 6 < yj; yj--)
									if (gd = ac.yb(yj, yi), ac.jb(gd) && !ac.z0(xx, gd)) return;
							return 1
						}(y5 + 3, y6 + 3)) {
						if (0 < ag.gt[xx]) {
							for (sf = se = gd = void 0, se = ag.iz[xx]; se >= ag.iy[xx]; se--)
								for (sf = ag.j1[xx]; sf >= ag.j0[xx]; sf--) gd = 4 * (sf * bS.fG + se), ac.yx(xx, gd) && (ac.yy(gd), ag.gt[xx]--);
							xz()
						}
						return ym(y5 - 1, y6 - 1), !0
					} return !1
	}, this.yz = function(jZ) {
		xx = jZ, y4() ? y7(xu + se * xt + bL.fW(xt, 2), xv + sf * xt + bL.fW(xt, 2)) : xz()
	}
}

function z1() {
	at.z2(), vX.setTransform(iG, 0, 0, iG, 0, 0), vX.imageSmoothingEnabled = iG < 3, vX.drawImage(bS.xV, aS.z3(), aS.z4()), bP.z5.vW(), vX.drawImage(z6, aS.z3(), aS.z4()), at.vW(), bN.vW(), af.vW(), (aD.nT ? (bh.vW(), bC) : (aN.vW(), aV.vW(), aR
	.vW(), bC.vW(), aw.vW(), aW.vW(), aS.vW(), aQ.vW(), bh.vW(), aU.vW(), aP.vW(), aM.vW(), aL.vW(), aX.vW(), be.vW(), av)).vW(), t.vW()
}

function z7(z8, i, j) {
	z8.clearRect(0, 0, i, j), z8.fillStyle = bB.nx, z8.fillRect(0, 0, i, j)
}

function z9(z8, i, j, zA) {
	z8.fillStyle = bB.o0, z8.fillRect(0, 0, i, zA), z8.fillRect(0, 0, zA, j), z8.fillRect(i - zA, 0, zA, j), z8.fillRect(0, j - zA, i, zA)
}

function zB(z8, fC, fE, i1, zA, gd, zC) {
	z8.fillStyle = bB.o0;
	var gd = Math.floor(i1 * gd),
		tI = (gd += (gd - zA) % 2, Math.floor((gd - zA) / 2)),
		i1 = Math.floor((i1 - gd) / 2);
	z8.fillRect(fC + i1, fE + i1 + tI, gd, zA), zC && z8.fillRect(fC + i1 + tI, fE + i1, zA, gd)
}

function zE() {
	this.dd = function() {
		8 === aD.ki && aN.zF()
	}, this.zG = function(zH) {
		var elo = aD.data.elo,
			jf = (elo[zH] - elo[1 - zH]) / 10,
			jf = 8 / (1 + Math.pow(2, jf / 32)),
			jf = Math.floor(10 * jf + .5),
			zJ = elo[zH] + jf,
			zJ = this.zL(zJ),
			elo = this.zL(elo[1 - zH] - jf);
		0 === zH ? aN.zN(zJ, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zN(elo, zJ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.zL = function(elo) {
		return 16e3 === (elo = bL.iD(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s9 = new zO, this.xY = new zP
}

function zP() {
	this.hr = !1;
	this.zT = [], this.zU = 100;
	var nQ, nR, gap, i1, zQ, zS, zV = 0,
		zW = new Array(9),
		zX = [],
		zY = [],
		zZ = 0,
		za = 0,
		zb = 0,
		zc = 0;

	function zo() {
		zW.sort(function(fO, fP) {
			return fP.kV - fO.kV
		});
		for (var qa = "" + zW[0].pc, aB = 1; aB < 9; aB++) qa += "," + zW[aB].pc;
		for (aB = 0; aB < 9; aB++) qa += "," + zW[aB].kV;
		bj.eQ.w2(120, qa)
	}
	this.dd = function() {
		for (var zd = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zd.length; aB++) {
			var color = 6 === zd[aB] ? bB.oQ : bB.ny;
			this.zT.push(bA.canvas.ze(ab.get(3), zd[aB], color))
		}
		for (aB = 0; aB < aj.s9.zf; aB++) zY.push(aj.s9.zg - aj.s9.zf + aB);
		for (aB = 0; aB < aj.s9.zh; aB++) zY.push(aj.s9.zi + aB);
		var zj = aj.s9.zk(bK.zj);
		for (aB = 0; aB < zj.length; aB++) zY.push(zj[aB]);
		! function() {
			var aB, g = bj.eQ.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zW[aB] = {
					pc: 1015 + aB,
					kV: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fX = parseInt(g[aB]),
						ed = (fX = 0 <= fX && fX < aj.s9.zg ? fX : 0, parseInt(g[aB + 9]));
					ed = 0 <= ed && ed < 1e3 ? ed : 0, zW[aB] = {
						pc: fX,
						kV: ed
					}
				}
		}()
	}, this.show = function(lf, lg, zp) {
		var aB;
		if (zZ = lf, za = lg, zV = zp || 0, this.hr = !0, zX = [], 0 === zV)
			for (aB = 0; aB < 9; aB++) zX.push(zW[aB].pc);
		else {
			var fP = 49 * zV,
				zp = fP - 49;
			for (zp >= zY.length && (zV = 1, zp = 0, fP = 49), aB = zp = (fP = Math.min(fP, zY.length)) - 49; aB < fP; aB++) zX.push(zY[aB])
		}
		zX.push(1024);
		zp = zX.length, i1 = Math.floor((a0.a1.iE() ? .075 : .0468) * h.iF), gap = Math.floor(i1 / 3), (zb = 10 * (zQ = i1 + gap)) > h.i && (zb = h.i, gap = (zQ = zb / 10) - (i1 = 3 * zQ / 4)), zS = bL.fW(zp, 10) + !!(zp % 10), (zc = zS * zQ) > h
			.j && (zc = h.j, gap = (zQ = zc / zS) - (i1 = 3 * zQ / 4)), zp = .5 * gap;
		nQ = Math.min(Math.max(lf - .5 * zb + zp, zp), h.i - zb + zp), nR = Math.min(Math.max(lg - .5 * zc + zp, zp), h.j - zc + zp)
	}, this.hI = function(lf, lg, player) {
		if (!this.hr) return !1;
		if (this.zr(lf, lg)) {
			lf = bL.iD(bL.fW(lf - nQ + .5 * gap, zQ), 0, 9);
			if ((lf += 10 * bL.iD(bL.fW(lg - nR + .5 * gap, zQ), 0, 9)) >= zX.length) return aL.sA(), !0;
			lg = zX[lf];
			if (1024 === lg) return this.show(zZ, za, zV + 1), !0;
			! function(pc) {
				for (var aB = 0; aB < 9; aB++) zW[aB].kV = Math.floor(.99 * zW[aB].kV);
				for (aB = 0; aB < 9; aB++)
					if (pc === zW[aB].pc) return zW[aB].kV = Math.min(zW[aB].kV + 30, 999), zo();
				zW.splice(5, 0, {
					pc: pc,
					kV: Math.max(zW[4].kV, 30)
				}), zW.pop(), zo()
			}(lg), player === aD.ep ? b8.hV.pb(lg) : b8.gR.pq(lg, player)
		}
		return aL.sA(), !0
	}, this.zr = function(lf, lg) {
		return !(lf < nQ - .5 * gap || lg < nR - .5 * gap || nQ + zb - .5 * gap <= lf || nR + zc - .5 * gap <= lg)
	}, this.vW = function() {
		vX.fillStyle = bB.nx, vX.fillRect(nQ - .5 * gap, nR - .5 * gap, zb, zc);
		for (var hx = .5 * bc.zs, f5 = (vX.lineWidth = bc.zs, vX.strokeStyle = vX.fillStyle = bB.o0, vX.strokeRect(nQ - .5 * gap + hx, nR - .5 * gap + hx, zb - 2 * hx, zc - 2 * hx), vX.imageSmoothingEnabled = !0, zX.length), aB = 0; aB <
			f5; aB++) this.zt(zX[aB], vX, nQ + aB % 10 * zQ, nR + bL.fW(aB, 10) * zQ, i1);
		vX.imageSmoothingEnabled = !1
	}, this.zt = function(pc, i7, fC, fE, i1) {
		var ej;
		pc >= 1024 - aj.s9.zf ? (ej = i1 / this.zU, i7.setTransform(ej, 0, 0, ej, fC, fE), i7.drawImage(this.zT[pc - 1024 + aj.s9.zf], 0, 0), i7.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qt.textAlign(i7, 1), bA.qt.textBaseline(i7, 1), i7.font = bA.qt
			.sk(0, .89 * i1), i7.fillText(aj.s9.zu(pc), fC + .5 * i1, fE + (.35 - bA.qt.zv + .56) * i1))
	}
}

function zO() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zf = 13, this.zh = this.emojis.length, this.zi = 676, this.zg = 1024, this.zw = this.emojis.indexOf("💀"), this.zx = this.zw + 1, this.zy = this.emojis.indexOf("🥇"), this.zz = this.emojis.indexOf("😊"), this.zu = function(fX) {
		return fX < this.zi ? String.fromCharCode(55356, 56806 + bL.fW(fX, 26), 55356, 56806 + fX % 26) : this.emojis[Math.min(fX - this.zi, this.zh - 1)]
	}, this.zk = function(qa) {
		for (var f5 = qa.length - 2, g = [], aB = 0; aB < f5; aB++) {
			var a00 = qa.charCodeAt(aB) - 56806,
				a01 = qa.charCodeAt(aB + 2) - 56806;
			0 <= a00 && a00 < 26 && 0 <= a01 && a01 < 26 && (g.push(26 * a00 + a01), aB += 3)
		}
		return g
	}, this.a02 = function(fX) {
		return fX < this.zi
	}, this.a03 = function(fX) {
		return fX >= 1024 - this.zf
	}, this.a04 = function(fX) {
		return fX >= this.zi && fX < this.zi + this.zx
	}
}

function c3() {
	this.tD = new a05, this.ww = new a06, this.wy = new a07, this.dd = function() {
		this.tD.dd()
	}
}

function a06() {
	this.xB = function(qa) {
		for (var f5 = qa.length, i = bD, aB = 0; aB < f5; aB++) i.a8(16, qa.charCodeAt(aB))
	}
}

function a05() {
	var a08 = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (a08[0] = 45, a08[37] = 95, aB = 0; aB < 10; aB++) a08[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a08[aB + 11] = 65 + aB, a08[aB + 38] = 97 + aB
	}, this.tF = function(a09) {
		for (var x1 = bH, x9 = new Uint8Array(a09), aB = 0; aB < a09; aB++) x9[aB] = x1.q1(6);
		return x9
	}, this.tE = function(x9) {
		for (var f5 = x9.length, a0A = a08, g = [], aB = 0; aB < f5; aB++) g.push(String.fromCharCode(a0A[x9[aB]]));
		return g.join("")
	}, this.a0B = function(value, a0C) {
		for (var a0A = a08, g = [], aB = 0; aB < a0C; aB++) g.push(String.fromCharCode(a0A[value >> 6 * (a0C - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a0D, a0E, a0F;
	a0D = [32, 65, 191, 913, 931], a0E = [64, 127, 688, 930, 1155], a0F = new Array(a0D.length + 1);
	for (var aB = 0; aB < a0F.length; aB++) {
		a0F[aB] = 0;
		for (var fO = aB - 1; 0 <= fO; fO--) a0F[aB] += a0E[fO] - a0D[fO]
	}

	function a0L(ed) {
		for (var aB = a0D.length - 1; 0 <= aB; aB--)
			if (ed >= a0D[aB] && ed < a0E[aB]) return aB;
		return -1
	}
	this.x2 = function(qa) {
		return 0 !== (qa = qa.trim()).indexOf("Bot ") && 0 !== qa.indexOf("[Bot] ") && function(qa, a0I, a0J) {
			var f5 = (qa = qa.trim()).length;
			if (f5 < a0I || a0J < f5) return !1;
			for (var ed, a0K = 0, aB = 0; aB < f5; aB++)
				if (ed = qa.charCodeAt(aB), a0K += 65 <= ed && ed <= 90 || 1040 <= ed && ed <= 1071 ? 1 : 0, -1 === a0L(ed)) return !1;
			if (3 < a0K && a0K > Math.floor(f5 / 2)) return !1;
			return !0
		}(qa, 3, 20)
	}, this.a0M = function(qa) {
		for (var f5 = (qa = qa.trim()).length, g = [], aB = 0; aB < f5; aB++) {
			var ed, gd = a0L(ed = qa.charCodeAt(aB));
			g.push(a0F[gd] + ed - a0D[gd])
		}
		return g
	}, this.xG = function(g) {
		for (var ed, fP, qa = "", f5 = g.length, aB = 0; aB < f5; aB++)
			for (fP = 1; fP < a0F.length; fP++)
				if (g[aB] < a0F[fP]) {
					ed = a0D[fP - 1] + g[aB] - a0F[fP - 1], qa += String.fromCharCode(ed);
					break
				} return qa
	}, this.a0N = function(qa) {
		for (var g = this.a0M(qa), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0O = function(qa) {
		for (var g = new Array(Math.floor(qa.length / 3)), aB = 0; aB < qa.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qa.substring(aB, aB + 3));
		return this.xG(g)
	}, this.a0P = function(qa) {
		for (var fX, g = [qa.length], aB = 0; aB < qa.length; aB++) g[aB] = qa.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qa.length; aB++) aB === qa.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fX = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fX + (fX < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0Q = function(qa) {
		for (var ed, result = "", aB = 0; aB < qa.length; aB++) 48 <= (ed = qa.charCodeAt(aB)) && ed < 58 ? result += String.fromCharCode(ed) : 65 <= ed && ed < 75 ? result += "0" + (ed - 65).toString() : 75 <= ed && ed < 91 ? result += (ed - 65)
			.toString() : 97 <= ed && ed < 123 && (result += (ed - 71).toString());
		return result
	}, this.a0R = function(qa) {
		for (var f5 = qa.length, g = [], aB = 0; aB < f5; aB++)(ed = qa.charCodeAt(aB)) < 58 ? g.push(qa[aB]) : (ed -= ed < 91 ? 65 : 71, g.push(String(bL.fW(ed, 10))), g.push(String(ed - 10 * bL.fW(ed, 10))));
		var f5 = g.length - 2,
			ed = 0,
			x9 = [];
		for (aB = 0; aB < f5; aB += 3) x9[ed++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return x9
	}, this.a0S = function() {
		for (var eB, a0T = "", aB = 0; aB < 6; aB++) eB = 48 + ay.random() % 36, eB += 58 <= eB ? 39 : 0, a0T += String.fromCharCode(eB);
		return a0T
	}
}

function a07() {
	this.a0M = function(qa, xp, a0U) {
		for (var a0V = [], f5 = qa.length, max = 0, aB = 0; aB < f5; aB++) {
			var fX = qa.charCodeAt(aB);
			a0V.push(fX), max = Math.max(max, fX)
		}
		var xq = max < 128 ? 7 : 16;
		for (a0U.a8(xp, f5), a0U.a8(1, +(16 == xq)), aB = 0; aB < f5; aB++) a0U.a8(xq, a0V[aB])
	}
}

function dA() {
	this.a0W = new a0X, this.result = new a0Y, this.a0Z = new a0a, this.a0b = new a0c, this.a0d = new a0e, this.a0f = new a0g, this.dd = function() {
		this.result.dd()
	}
}

function a0a() {
	this.a0h = function() {
		for (var f5 = al.kw, a0i = al.l1, a0j = [], aB = 0; aB < f5; aB++) {
			var gd = a0i[aB];
			bA.gR.a0k(gd) && a0j.push(gd)
		}
		return a0j
	}, this.a0l = function() {
		if (0 === bg.kn[aD.a0m]) return this.a0n();
		bh.kR(aD.a0m);
		for (var a0j = [], f5 = bO.fa[0], fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = fj[aB];
			bA.gR.a0k(gd) && a0j.push(gd)
		}
		return a0j
	}, this.a0n = function() {
		var gd = m1[0];
		return bA.gR.a0k(gd) ? [gd] : []
	}, this.a0o = function(a0j) {
		for (var f5 = a0j.length, eU = 0, gt = ag.gt, aB = 0; aB < f5; aB++) eU += gt[a0j[aB]];
		return eU
	}
}

function a0X() {
	function a0q() {
		if (2 === aD.a0u) return 1;
		aw.a0v(), aD.a0u = 2, aD.a0w = aD.a0x
	}

	function a0s() {
		bR.a0d.a0y(), aX.show(1 === aD.a0z, !1, 2 === aD.a0z), bR.result.a0y(), bR.a0f.eY(), bR.a0b.eY(), bR.a0b.a10(), aN.a11(!0), aN.a12(247), aN.a12(956), aN.a12(957), aV.ml(!0), aW.ml(!0), aw.ml(), bC.a13(), aD.hE && bf.a14.a15(), bf.dk = !0, bb
			.a16(), a0.a1.setState(0)
	}
	this.a0p = function() {
		a0q() || (aD.a0r = 2, a0s())
	}, this.a0t = function() {
		a0q() || (aD.a0r = 1, a0s())
	}
}

function a0c() {
	this.eY = function() {
		var a1E;
		2 === aD.a0r ? (aN.a17(0, 59), aH.nZ(2700)) : aD.ki < 7 ? (a1E = bg.kn[aD.a0m], a1E = bg.a1G[a1E], aQ.a1H(L(27, [a1E]), 2, 1, 12), aN.a1I(0, L(28, [a1E]), 40, 0, bB.o0, bB.nx, -1, !1), aH.nZ(2700)) : 8 === aD.ki ? (aD.a0z ? aN.a17(aD.a1C,
			2) : aN.a17(1 - aD.ep, 3), aD.a1D.zG(aD.a1C), aH.nL(aD.a1C, 2700, !1, 0)) : 9 === aD.ki ? (aN.a1J(), aH.nZ(2700)) : (aN.a1K(aD.a1C), aH.nL(aD.a1C, 2700, !1, 0))
	}, this.a10 = function() {
		var qa;
		aD.hE || (qa = b0.y.a1L(), aD.ki < 7 ? qa += "/log/team" : 8 === aD.ki ? qa += "/log/1v1" : 9 === aD.ki ? qa += "/log/zombies" : qa += "/log/br", aN.a1I(720, qa, 736, 0, bB.o0, bB.oO, -1, !1))
	}
}

function a0g() {
	function a1V() {
		var tY;
		return 8 === aD.ki ? 0 : (tY = Math.floor(ag.a1W[aD.ep] / 50), (tY = Math.min(tY, 200)) / 100)
	}

	function a1N() {
		var tY = a1V();
		0 !== tY && aN.a1I(440, L(29, [tY.toFixed(2)]), 40, 0, bB.oI, bB.nx, -1, !1)
	}
	this.eY = function() {
		var a1O;
		0 === bR.result.a1M || 0 === bR.result.a0j.length || 8 === aD.ki ? bA.gR.hH(aD.ep) && a1N() : (function(a1O) {
			7 !== aD.ki && 10 !== aD.ki || 0 !== aD.a0z && a1O && aN.a1I(600, L(33, [a1O.toFixed(2)]), 40, 0, bB.o0, bB.nx, -1, !1)
		}(a1O = function() {
			aN.a1I(520, L(30), 40, 0, bB.o0, bB.nx, -1, !1);
			for (var a0j = bR.result.a0j, f5 = a0j.length, gt = ag.gt, g = [], aB = 0; aB < f5; aB++) {
				var gd = a0j[aB];
				g.push({
					gd: gd,
					eU: gt[gd]
				})
			}
			g.sort((fO, fP) => fP.eU - fO.eU);
			var a1G = ag.a1X,
				eU = bR.result.a1Y,
				tY = bR.result.a1M,
				qa = "",
				a1O = 0;
			for (aB = 0; aB < f5; aB++) {
				var hp = g[aB].eU * tY / (100 * eU),
					a1a = a1G[g[aB].gd] + ": " + hp.toFixed(2) + "   ";
				g[aB].gd === aD.ep && (a1O = hp), 2 < aB && 4 !== f5 ? 3 === aB && (qa += "(" + L(31, [f5 - 3]) + ")") : qa += a1a
			}
			aN.a1I(560, bA.rs.a1b(qa), 40, 0, bB.oI, bB.nx, -1, !1), a1O ? aN.a1I(580, L(32, [a1O.toFixed(2) + " + " + a1V().toFixed(2)]), 40, 0, bB.oI, bB.nx, -1, !1) : bA.gR.hH(aD.ep) && a1N();
			return a1O
		}()), 2 === aD.a0r || 7 <= aD.ki || function(a1O) {
			var a0j = bR.result.a0j,
				f5 = a0j.length,
				a1c = ag.a1c,
				gt = ag.gt,
				a1d = [];
			loop: for (var aB = 0; aB < f5; aB++) {
				var gd = a0j[aB],
					a1e = bA.rs.a1f(a1c[gd]);
				if (null !== a1e) {
					for (var a1g = gt[gd], fP = a1d.length - 1; 0 <= fP; fP--)
						if (a1e === a1d[fP].name) {
							a1d[fP].eU += a1g, a1d[fP].g.push({
								gd: gd,
								eU: a1g
							});
							continue loop
						} a1d.push({
						name: a1e,
						eU: a1g,
						g: [{
							gd: gd,
							eU: a1g
						}]
					})
				}
			}
			if (0 !== a1d.length) {
				a1d.sort((fO, fP) => fP.eU - fO.eU);
				var g = a1d[0].g,
					a1h = (g.sort((fO, fP) => fP.eU - fO.eU), "[" + a1d[0].name + "]"),
					a1i = 512 * bR.result.a1M / 26214400,
					lL = (aN.a1I(0, L(34, [a1h, a1i.toFixed(4)]), 40, 0, bB.o0, bB.nx, -1, !1), g.length),
					x7 = a1d[0].eU,
					a1j = 1e4 * a1i;
				for (aB = 0; aB < lL; aB++)
					if (g[aB].gd === aD.ep) {
						aN.a1I(600, L(35, [(a1j * g[aB].eU / (10 * x7)).toFixed(2)]), 40, 0, bB.o0, bB.nx, -1, !1), aN.a1I(640, L(36, [(.2 * a1O).toFixed(2), a1h]), 40, 0, bB.o0, bB.nx, -1, !1);
						break
					}
			}
		}(a1O))
	}, this.a1S = function() {
		var a1T, xZ;
		aD.kk || (a1T = ag, xZ = aD.ep, 0 === a1T.a1U[xZ]) || a1T.jU[xZ] < 1 || 2 * a1T.qI[xZ] > 3 * (a1T.jT[xZ] + a1T.jU[xZ]) || a1N()
	}
}

function a0Y() {
	this.dd = function() {
		this.a1k = 0, this.a0j = [], this.a1Y = 0, this.a1M = 0
	}, this.a0y = function() {
		var sV;
		aD.kk || (sV = this, 2 === aD.a0r ? sV.a0j = bR.a0Z.a0h() : aD.hz ? sV.a0j = bR.a0Z.a0l() : sV.a0j = bR.a0Z.a0n(), sV.a1k = bi.a1m.a1n(), sV.a1Y = Math.max(1, bR.a0Z.a0o(sV.a0j)), b8.gR.pz(), 8 === aD.ki ? bR.result.a1M = 0 : sV.a1M =
			100 * bR.result.a1k * (1 + aD.a1p))
	}
}

function a0e() {
	this.a0y = function() {
		if (2 === aD.a0r) aD.a0z = 2;
		else {
			if (8 === aD.ki) bA.gR.jn(0) || 0 === ag.mz[0] ? aD.a1C = 1 : bA.gR.jn(1) || 0 === ag.mz[1] ? aD.a1C = 0 : aD.a1C = +(ag.gt[1] > ag.gt[0]);
			else {
				if (aD.hz) {
					var ky = bh.a1r();
					if (aD.a0m = ky, bg.kn[ky]) return void(aD.a0z = +(bg.f3[aD.ep] === ky))
				}
				aD.a1C = m1[0]
			}
			aD.a0z = +(aD.a1C === aD.ep)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.wF = null, this.wG = null, this.wH = null, this.wN = null, this.a1 = new a1s, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.wG = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wH = mwIOSdataX, self.wN = window.webkit.messageHandlers.iosCommandA, dw = self
					.wH.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var wF;
				try {
					if (!(wF = window.localStorage)) return;
					wF.setItem("tls7", "1"), wF.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wF = wF
			}(this)
	}
}

function a1s() {
	this.a1w = function() {
		bj.sL.wd(), bj.sL.we(), b0.y.close(0, 3255), 0 === a0.id ? a0.wF && a0.wF.clear() : 1 === a0.id ? a0.wG.saveString(199, "") : 2 === a0.id && a0.wN.postMessage("clear")
	}, this.a1x = function() {
		2 === a0.id ? a0.wN.postMessage("showConsentForm") : 1 === a0.id && a0.wG.setState(7)
	}, this.a1y = function() {
		this.setState(14)
	}, this.iE = function() {
		return 1 === bj.eQ.w3(2)
	}, this.a1z = function() {
		bj.eQ.w2(102, "")
	}, this.setState = function(a20) {
		1 === a0.id && 5 <= a0.dw && a0.wG.setState(a20)
	}, this.a2 = function() {
		var a21;
		1 === a0.id && 7 <= a0.dw ? a0.wG.setState(5) : ((a21 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a21.toString())
	}, this.eO = function() {
		0 !== a0.id && (1 === a0.id ? a0.wG.prepareAd("8646194357") : 2 === a0.id && (0 === a0.dw ? a0.wN.postMessage("prepare ad 2904813909") : a0.wN.postMessage("loadAds 2904813909")))
	}, this.eV = function(eU) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.dw && (a0.wG.presentAd(eU), !0) : 2 === a0.id && 0 !== a0.dw && (a0.wN.postMessage("showAd"), !0))
	}, this.dm = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a22 + "' target='_blank'>" + bK
			.a22 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.og)]))
	}
}

function dU() {
	function a25(e) {
		lk(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a28()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oN)]))
	}

	function a2G(e) {
		lk(e), t.u(4, 5, new v(L(38), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a2C(e), !0))
	}

	function a2C(e) {
		var qa = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + qa : 4527 === e ? "Player already in lobby" + qa : 4577 === e ? "Your IP is banned." + qa : 4530 === e ? "Lobby Timeout" + qa : 4528 === e ?
			"Lobby Kick: Another login detected." + qa : 4540 === e ? "You have been kicked." + qa : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qa : 4555 === e ?
			"Invalid Account Error. Please Try Again." + qa : 4557 <= e && e <= 4560 ? "Please try again later!" + qa : "Unknown error" + qa
	}

	function lk(e) {
		a2A(e), t.y.z()
	}

	function a2A(e) {
		var a20 = aa.a29();
		6 === a20 ? b0.y.a2I(e) : bn.a26 ? (t.x(), bn.ua(), b0.y.close(b0.y.a27, 3256)) : 8 === a20 && aD.a2J(!0)
	}
	this.p = [], this.a23 = function(a24, e) {
		if (1 === a24 && __fx.customLobby.isActive() && 6 !== aa.a29() && __fx.customLobby.setActive(!1), this.p.push(e), 8 === t.tA && 0 === a24)
			if (4211 === e) a25(e);
			else {
				if (bn.a26 && (4495 === e || 4480 === e) && b0.y.a27 !== a24) return void t.a28();
				if (8 !== aa.a29() && a2A(), 4480 === e) return bj.sL.wf(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a2C(e), !0))
			}
		else {
			var a20 = aa.a29();
			if (6 === a20) {
				if (4211 === e) return void a25(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aZ.a2D(a24)
			} else {
				if (!bn.a26) return 8 === a20 ? void(a24 !== b0.y.a2E || aD.kk || 1 !== aD.a0u || aD.hE || aN.a2F(L(39, [e]))) : void 0;
				if (a24 !== b0.y.a27) return
			}
			a2G(e)
		}
	}, this.a2H = function(e) {
		this.p.push(e), 8 === aa.a29() ? aD.kk || 1 !== aD.a0u || aN.a2F(L(39, [e])) : a2G(e)
	}, this.s = function() {
		this.p.push(3268), lk(3268)
	}
}

function d4() {
	var a2K, a2L, a2M = -15e3,
		a2N = !1;

	function hI(e) {
		a2h() || (a2N = !0, a2i(e, 1), b0.y.a2j(b0.y.a2E), a2k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2W(e) {
		a2M = bf.eT, a2i(e, 1), b0.y.a2j(b0.y.a2E), 0 < e.touches.length && (a2K = Math.floor(h.k * e.touches[0].clientX), a2L = Math.floor(h.k * e.touches[0].clientY), au.a2W(e) || a2k(a2K, a2L))
	}

	function a2k(fC, fE) {
		t.hI(fC, fE), 0 === aD.a0u ? aa.hI(fC, fE) : bC.a2l(fC, fE) || be.hI(fC, fE) || aX.hI(fC, fE) || aL.a2m(fC, fE) || aP.hI(fC, fE) || 0 <= aM.hI(fC, fE) || aw.hI(fC, fE) || bJ.a2n(fC, fE) || aL.a2o(fC, fE)
	}

	function a2S(e) {
		a2h() || (a2N = !0, a2i(e, 1), a2p(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2X(e) {
		a2M = bf.eT, a2i(e, 1), 0 < e.touches.length && (a2K = Math.floor(h.k * e.touches[0].clientX), a2L = Math.floor(h.k * e.touches[0].clientY), au.a2X(e) || a2p(a2K, a2L))
	}

	function a2p(fC, fE) {
		t.a2S(fC, fE), 0 === aD.a0u ? aa.a2S(fC, fE) : (bT.hC(fC, fE), be.a2S(fC, fE) || (aM.a2S(fC, fE), aL.hr() ? aL.a2S(fC, fE) : aR.hJ ? aR.a2S(fC) && (bf.dk = !0) : (aV.a2S(fC, fE), aS.nV && aS.a2S(fC, fE) && (bf.dk = !0))))
	}

	function a2U(e) {
		a2h() || (a2i(e, 1), a2q(), 0 === aD.a0u ? (aa.click(-1024, -1024), aT.ru()) : (aV.a2r(-1024, -1024), aM.a2S(-1024, -1024), aR.a2s(), aS.nV = !1))
	}

	function a2T(e) {
		a2h() || (a2i(e, 1), a2t(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2Q && (bJ.a2Q = !1, e.preventDefault()))
	}

	function click(e) {
		a2h() || a2i(e, 1)
	}

	function a2Y(e) {
		a2M = bf.eT, a2i(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0u ? aS.nV = !1 : au.a2u() || (a2t(a2K, a2L, !1), bJ.a2Q && (bJ.a2Q = !1, e.preventDefault()))
	}

	function a2Z(e) {
		a2M = bf.eT, a2i(e, 1), a2t(a2K, a2L, !1), bJ.a2Q && (bJ.a2Q = !1, e.preventDefault())
	}

	function a2a(e) {}

	function a2b(e) {}

	function a2c(e) {
		a2h() || a2i(e, 0)
	}

	function a2t(fC, fE, a2v) {
		a2q(), 0 === aD.a0u ? aa.click(fC, fE) : (aV.a2r(fC, fE), be.a2r(), aR.a2s(), aS.nV = !1, aL.click(fC, fE, a2v) ? bf.dk = !0 : aM.a2T(fC, fE))
	}

	function a2q() {
		t.a2q()
	}

	function a2V(e) {
		var fC, fE, deltaY;
		a2h() || (a2i(e, 1), b0.y.a2j(b0.y.a2E), fC = Math.floor(h.k * e.clientX), fE = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2V(fC, fE, deltaY), 0 === aD.a0u ? aa.a2V(fC, fE, deltaY) : aV.a2V(fC, fE,
			deltaY) || (aR.a2w(fC, fE) ? aR.a2V(deltaY) && (bf.dk = !0) : aS.a2V(fC, fE, deltaY)))
	}

	function a2d(e) {
		a2i(e, 0)
	}

	function a2i(e, id) {
		0 === id && t.hr() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a29() && e.preventDefault()
	}

	function a2e(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2h() || 0 < h.ss || (e = e.code) && e.length && (bX.ed(e, 18) ? ar.a2y(3) : bX.ed(e, 22) ? ar.a2y(0) : bX.ed(e, 20) ? ar.a2y(1) : bX.ed(e, 24) ? ar.a2y(2) : bX.ed(e, 10) ? aR.a2z(31 / 32) : bX.ed(e, 8) ? aR.a2z(32 / 31) : bX.ed(e, 6) ? aR
			.a2z(7 / 8) : bX.ed(e, 4) ? aR.a2z(8 / 7) : bX.ed(e, 14) ? 0 !== aD.a0u && aS.a2V(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.ed(e, 16) ? 0 !== aD.a0u && aS.a2V(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.ed(e, 0) ?
			aD.a0u && bT.hD(0) : bX.ed(e, 2) ? aD.a0u && bT.hD(1) : bX.ed(e, 30) ? aD.a0u && bT.hD(2) : bX.ed(e, 26) ? aD.a0u && bT.hl() : bX.ed(e, 28) && aD.a0u && bT.hq())
	}

	function a2f(e) {
		if (!a2h() && !(0 < h.ss || bf.eT < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a30(1) || "Space" === code && t.a30(0))) return bn.a26 ? bn.ug.a30(code) ? void 0 : void("Escape" === code && bJ.fY()) : void(8 !== aa.a29() && aa.a30(e) ? bf.dk = !0 : "Escape" ===
				code ? bJ.fY() : bX.ed(code, 18) ? ar.a31(3) : bX.ed(code, 22) ? ar.a31(0) : bX.ed(code, 20) ? ar.a31(1) : bX.ed(code, 24) ? ar.a31(2) : bX.ed(code, 12) ? bC.a32(!aD.nT) : "Space" === code && aD.a0u && (aM.hF && aM.a33(), aD
					.hE) && bC.a34(!1))
		}
	}

	function a2g() {
		"hidden" !== document.visibilityState && (bf.dk = !0)
	}

	function a2h() {
		return a2M + 15e3 > bf.eT
	}

	function resize() {
		h.a36()
	}
	this.a2O = 0, this.a2P = "", this.a2Q = !1, this.dd = function() {
		a2R.addEventListener("mousedown", hI, {
			passive: !1
		}), a2R.addEventListener("mousemove", a2S, {
			passive: !1
		}), a2R.addEventListener("mouseup", a2T, {
			passive: !1
		}), a2R.addEventListener("click", click, {
			passive: !1
		}), a2R.addEventListener("mouseleave", a2U, {
			passive: !1
		}), a2R.addEventListener("wheel", a2V, {
			passive: !1
		}), a2R.addEventListener("touchstart", a2W, {
			passive: !1
		}), a2R.addEventListener("touchmove", a2X, {
			passive: !1
		}), a2R.addEventListener("touchend", a2Y, {
			passive: !1
		}), a2R.addEventListener("touchcancel", a2Z, {
			passive: !1
		}), a2R.addEventListener("dragover", a2a), a2R.addEventListener("drop", a2b), a2R.addEventListener("dblclick", a2c), document.addEventListener("contextmenu", a2d), document.addEventListener("keydown", a2e), document.addEventListener(
			"keyup", a2f), document.addEventListener("visibilitychange", a2g), window.addEventListener("resize", resize)
	}, this.a2n = function(fC, fE) {
		return !!bC.hI(fC, fE) || !!(aV.hI(fC, fE) || aS.hI(fC, fE) || aR.hI(fC, fE) || aN.hI(fC, fE))
	}, this.a35 = a2h, this.rL = function() {
		return !a2N || 0 < a2M
	}, this.fY = function() {
		if (!t.hr()) return 8 === aa.a29() ? aD.nT ? void bC.a32(!1) : be.hr ? void be.a33() : void aM.a33() : void(7 !== aa.a29() && 6 === aa.a29() && aZ.a37());
		t.a30(2)
	}
}

function bz() {
	this.qt = new a38, this.r1 = new a39, this.gR = new a3A, this.rs = new a3B, this.z8 = new a3C, this.a3D = new a3E, this.canvas = new a3F, this.color = new a3G, this.a3H = new a3I, this.dd = function() {
		this.qt.wc()
	}
}

function a39() {
	this.xX = function(g) {
		g.fill(0)
	}, this.a3J = function(g) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++) g[aB] = []
	}, this.a3K = function(a00, a3L) {
		for (var a01 = bO.ff, aB = 0; aB < 3; aB++) a01[aB] = a3L * a00[aB];
		return a01
	}, this.a3M = function(a00, a01, a3N) {
		for (var jf = 0, aB = 0; aB < 3; aB++) jf += Math.abs(a00[aB] - a01[aB]);
		return a3N <= jf
	}, this.a3O = function(a00, a3P) {
		for (var aB = 0; aB < 3; aB++) a00[aB] = bL.iD(a00[aB] + a3P, 0, 255);
		return a00
	}, this.a3Q = function(g, tU, tV) {
		tV = tV || g.length - 1;
		for (var a3R = 0, aB = tU = tU || 0; aB <= tV; aB++) a3R += g[aB];
		return a3R
	}, this.a3S = function(g, a3T) {
		for (var aB, a3U, f5 = g.length, a3V = [], fO = f5 - 1; 0 <= fO; fO--) {
			for (aB = a3U = 0; aB < f5; aB++) a3T(g[aB]) < a3T(g[a3U]) && (a3U = aB);
			f5--, a3V.push(g[a3U]), g[a3U] = g[f5], g.pop()
		}
		return a3V
	}, this.min = function(g) {
		var aB, fX, f5 = g.length;
		if (0 === f5) return 0;
		for (fX = g[0], aB = 1; aB < f5; aB++) fX = Math.min(fX, g[aB]);
		return fX
	}, this.max = function(g) {
		var f5 = g.length;
		if (0 === f5) return 0;
		for (var fX = g[0], aB = 1; aB < f5; aB++) fX = Math.max(fX, g[aB]);
		return fX
	}, this.a3W = function(g, fX) {
		for (var f5 = g.length, gY = 0, aB = 0; aB < f5; aB++) gY += g[aB] > fX;
		return gY
	}, this.a3X = function(a3Y, a3Z, min) {
		for (var f5 = a3Z[0], aB = f5 - 1; 0 <= aB; aB--) a3Y[aB] < min && (a3Y[aB] = a3Y[--f5]);
		a3Z[0] = f5
	}, this.a3a = function(g, f5, value) {
		for (var aB = 0; aB < f5; aB++) g[aB] -= value
	}, this.a3b = function(g) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3c = function(qa, g, a3d) {
		g.fill(0);
		for (var tY = qa.split(","), f5 = Math.min(tY.length, g.length), aB = 0; aB < f5; aB++) g[aB] = Math.min(parseInt(tY[aB]), a3d)
	}, this.a3e = function(qa, g, rp) {
		g.fill("");
		for (var tY = qa.split('"'), f5 = Math.min(tY.length, 2 * g.length), hx = 0, aB = 1; aB < f5; aB += 2) g[hx++] = tY[aB].slice(0, rp)
	}, this.a3f = function(g, gY) {
		if (0 === gY) g.fill(0);
		else {
			var a3R = this.a3Q(g),
				f5 = g.length;
			if (0 === a3R) g.fill(bL.fW(gY, f5));
			else
				for (var aB = 0; aB < f5; aB++) g[aB] = bL.fW(gY * g[aB], a3R);
			if (0 === (a3R = this.a3Q(g))) g[1] = gY;
			else
				for (var hx = 0; a3R++ < gY;) g[hx = (hx + 1) % f5] && g[hx]++
		}
	}, this.a3g = function(g) {
		if (!g) return 0;
		var f5 = g.length;
		if (0 === f5) return 0;
		for (var fX = g[f5 - 1], aB = f5 - 2; 0 <= aB; aB--)
			if (g[aB] !== fX) return aB + 2;
		return 1
	}, this.a3h = function(g) {
		for (var a3R = 0, aB = 0; aB < g.length; aB++) a3R += g[aB].length;
		return a3R
	}, this.a3i = function(a3j) {
		for (var g = [], aB = 0; aB < a3j.length; aB++) g = g.concat(a3j[aB]);
		return g
	}, this.has = function(g, fX) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++)
			if (g[aB] === fX) return !0;
		return !1
	}
}

function a3F() {
	this.ze = function(a3k, eC, a3l) {
		var i1 = a3k.height,
			a3m = bA.qt.xN(i1, i1),
			i7 = bA.qt.getContext(a3m);
		return function(i, i7, a3l) {
			i7.fillStyle = a3l, i7.beginPath(), i7.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i7.fill()
		}(i1, i7, a3l), i7.drawImage(a3k, -eC * i1, 0), a3m
	}, this.a3o = function(a3p) {
		var i7, i4, i1 = a3p.height;
		return a3p.width === i1 && (i4 = (i7 = bA.qt.getContext(a3p, !0)).getImageData(0, 0, i1, i1), bA.a3D.a3q(i4.data, i1, i1, .9), i7.putImageData(i4, 0, 0)), a3p
	}
}

function a3G() {
	this.a3r = function(fX) {
		return [fX >> 12 & 63, fX >> 6 & 63, 63 & fX]
	}, this.a3s = function(fX) {
		for (var g = this.a3r(fX), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a3t = function(fX) {
		fX = this.a3s(fX);
		return bA.color.ns(fX[0], fX[1], fX[2])
	}, this.a3u = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.ns = function(eB, tY, fP) {
		return "rgb(" + eB + "," + tY + "," + fP + ")"
	}, this.nu = function(eB, tY, fP, fO) {
		return "rgba(" + eB + "," + tY + "," + fP + "," + fO.toFixed(3) + ")"
	}, this.rN = function(ed) {
		for (var g = ed.split("(")[1].split(","), fe = bO.fe, aB = 0; aB < 3; aB++) fe[aB] = parseInt(g[aB]);
		return 4 === g.length ? fe[3] = 255 * parseFloat(g[3].slice(0, -1)) : fe[3] = 255, fe
	}, this.rO = function(a3v, f8) {
		for (var g = a3v.slice(a3v.indexOf("(") + 1, a3v.indexOf(")")).split(","), fe = bO.fe, aB = 0; aB < 3; aB++) fe[aB] = bL.iD(parseInt(g[aB].trim(), 10) + f8, 0, 255);
		return 3 === g.length ? this.ns(fe[0], fe[1], fe[2]) : (a3v = parseFloat(g[3].trim()), this.nu(fe[0], fe[1], fe[2], a3v = 0 === a3v ? .3 : a3v))
	}, this.vB = function(a3w, a3x) {
		for (var jf = 0, aB = 0; aB < 3; aB++) jf += Math.abs(a3x[aB] - a3w[aB]);
		if (!(240 <= jf))
			for (aB = 0; aB < 3; aB++) a3x[aB] = a3w[aB] + (a3w[aB] < 128 ? 80 : -80)
	}, this.a3y = function(g) {
		for (var qa = "#", aB = 0; aB < 3; aB++) {
			var eB = g[aB].toString(16);
			qa += 1 === eB.length ? "0" + eB : eB
		}
		return qa
	}, this.a3z = function(qa) {
		var eB, tY;
		return qa.length < 7 ? bB.nr : (eB = parseInt(qa.slice(1, 3), 16), tY = parseInt(qa.slice(3, 5), 16), qa = parseInt(qa.slice(5, 7), 16), this.ns(eB, tY, qa))
	}
}

function a3C() {
	this.a40 = function(qa, font, maxWidth) {
		if (font && (vX.font = font), vX.measureText(qa).width <= maxWidth) return qa;
		for (var aB = qa.length - 1; 1 <= aB; aB--)
			if (qa = qa.substring(0, aB), vX.measureText(qa + "...").width <= maxWidth) return qa + "...";
		return "..."
	}
}

function a3I() {
	var a42 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a43 = function(eT) {
		var a45, qa = new Date(eT.getTime() - 6e4 * eT.getTimezoneOffset()).toUTCString();
		return qa.length < 12 || (qa = qa.substring(5, qa.length), 0 === (eT = eT.getTimezoneOffset())) ? qa : (a45 = (eT < 0 ? "+" : "-") + bL.fW(Math.abs(eT), 60), 0 == (eT = Math.abs(eT) % 60) ? qa + a45 : qa + a45 + ":" + (eT < 10 ? "0" :
			"") + eT)
	}, this.a46 = function(eT) {
		var qa = eT.toUTCString();
		return qa.length < 12 ? qa : function(eT) {
			return a42[eT.getUTCDay()]
		}(eT) + ", " + qa.substring(5, qa.length - 4)
	}
}

function a38() {
	var a48 = null;
	this.zv = 0, this.wc = function() {
		var fX = bj.eQ.data[5].value;
		a48 = "px " + fX, "system-ui" !== fX && (a48 += ", system-ui"), this.zv = i0(32, 32, ["a", "b", "m"], 200, a48)
	}, this.xN = function(i, j) {
		var ed = document.createElement("canvas");
		return ed.width = i, ed.height = j, ed
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(z8, i, j) {
		return z8.getImageData(0, 0, i, j)
	}, this.sk = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a48 : 1 === type ? "bold " + size + a48 : 2 === type ? "lighter " + size + a48 : 3 === type ? "italic " + size + a48 : 4 === type ? "oblique " + size + a48 : 5 === type ? "small-caps " +
			size + a48 : "small-caps bold " + size + a48
	}, this.textAlign = function(i7, id) {
		i7.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i7, id) {
		i7.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.r3 = function(e, code, color) {
		color = this.r2(bc.sm) + " solid " + (color || bB.o0);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.ta = function(e, fC, fE, i, j) {
		e = e.style;
		e.left = this.tb(fC), e.top = this.tb(fE), e.width = this.tb(i), e.height = this.tb(j)
	}, this.qu = function(fX) {
		return 1 + fX * a0.a1.iE()
	}, this.sC = function(nc, ge) {
		return nc * this.qu(void 0 === ge ? .5 : ge) * h.iF / h.k
	}, this.tZ = function(nc, ge) {
		return nc * this.qu(void 0 === ge ? .5 : ge) * h.iF
	}, this.tG = function(nc, ge, a49) {
		return this.qu(ge) * Math.min(nc * h.iF, a49 * h.i) / h.k
	}, this.r2 = function(fX) {
		return fX.toFixed(1) + "px"
	}, this.tb = function(fX) {
		return this.uw(fX).toFixed(1) + "px"
	}, this.uw = function(fX) {
		return fX / h.k
	}, this.a4B = function(t0, a4C) {
		for (var qa = "<ul>", f5 = t0.length, aB = 0; aB < f5; aB++) qa += "<li>" + t0[aB] + ": <a href='" + a4C[aB] + "' target='_blank'>" + a4C[aB] + "</a></li>";
		return qa += "</ul>"
	}, this.a4D = function(a4E) {
		return "<a href='" + a4E + "' target='_blank'>" + a4E + "</a>"
	}, this.a4F = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.v9 = function(e) {
		var eU = e.textContent;
		bA.rs.a4G(eU, "✔") || (1 === eU.length ? e.textContent = "✔" : e.textContent = eU + " ✔", setTimeout(function() {
			e.textContent = eU
		}, 500))
	}, this.measureText = function(qa) {
		return vX.measureText(qa).width
	}, this.tQ = function(a4H) {
		a4H.style.overflowX = "auto", a4H.style.overflowY = "hidden", a4H.style.whiteSpace = "nowrap", a4H.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.td = this.scrollLeft, e.preventDefault())
		}), a4H.addEventListener("scroll", function() {
			this.td = this.scrollLeft
		})
	}
}

function a3A() {
	this.hG = function(a20) {
		return 0 === a20 ? 1 === aD.a0u && aD.hT : 1 === a20 ? 1 === aD.a0u && !aD.hT : 2 === aD.a0u
	}, this.hH = function(player) {
		return 0 !== ag.mz[player] && 2 !== ag.a4I[player]
	}, this.a4J = function(player) {
		return player === aD.ep && 2 !== ag.a4I[player]
	}, this.l4 = function(player, jZ) {
		return player !== jZ && (0 === bg.f3[player] || bg.f3[player] !== bg.f3[jZ])
	}, this.mB = function() {
		return al.kw < 2 ? 0 : aD.hz ? 1 < bh.a4K() : ag.gt[m1[1]]
	}, this.a4L = function() {
		var kw = al.kw;
		if (0 !== kw) {
			if (!aD.hz) return !this.jn(m1[0]);
			for (var f3 = bg.f3, ky = bh.kz(), l1 = al.l1, aB = kw - 1; 0 <= aB; aB--) {
				var gd = l1[aB];
				if (f3[gd] === ky && !this.jn(gd)) return 1
			}
		}
		return 0
	}, this.a4M = function(player) {
		return player === aD.ep
	}, this.a4N = function(jZ, nc) {
		return ag.h7[aD.ep] < nc * ag.h7[jZ]
	}, this.jn = function(player) {
		return player >= aD.kQ || 2 === ag.a4I[player]
	}, this.lO = function(player) {
		return 0 !== ag.mz[player]
	}, this.a0k = function(player) {
		return player < aD.kQ
	}, this.qG = function(a4O, a4P) {
		return a4O !== a4P
	}, this.gU = function(player, fX) {
		var min;
		return fX = this.a4Q(player, fX), ag.h7[player] += fX, ag.a4R[player] && (min = Math.min(ag.a4R[player], ag.h7[player]), ag.a4R[player] -= min, ag.h7[player] -= min), fX
	}, this.a4Q = function(player, fX) {
		var a4S = ag.h7[player];
		return fX = Math.min(fX, ag.gt[player] * aD.a4T - a4S), fX = Math.min(fX, aD.a4U - a4S), Math.max(fX, 0)
	}, this.mY = function(player, ih, a4V, a4W) {
		var a4S = ag.h7[player],
			ih = bL.fW(a4S * (ih + 1), 1024),
			a4V = bL.fW(a4V * a4S, 1024),
			ih = Math.min(ih, a4S - a4V);
		return 10 === aD.ki && (ih = b4.a4Y(player, ih)), bO.fc[0] = ih, bO.fc[1] = a4V, a4W <= ih
	}, this.pk = function(player, pS, pR) {
		var player = ag.h7[player],
			a4X = bL.fW(64 * player, 1024);
		return pS = Math.min(pS, player - a4X), pS = this.a4Q(pR, pS), bO.fc[0] = pS, bO.fc[1] = a4X, 1 <= pS
	}, this.a4Z = function(player, pS, pR) {
		var player = ag.h7[player],
			a4X = bL.fW(64 * player, 1024);
		return pS = Math.min(pS, player - a4X), this.a4Q(pR, pS)
	}, this.pm = function(pS, pR) {
		return pS = this.a4Q(pR, pS), bO.fc[0] = pS, bO.fc[1] = 0, 1 <= pS
	}, this.ig = function(player, a4a) {
		return bL.fW(ag.h7[player] * (a4a + 1), 1024)
	}, this.a4b = function(player, a4V) {
		a4V = bL.fW(a4V * ag.h7[player], 1024);
		bO.fc[1] = a4V, ag.h7[player] -= a4V
	}, this.gS = function(player, a4c) {
		var fq, fs, fP = ag.h7[player];
		return a4c <= fP ? ag.h7[player] -= a4c : (ag.h7[player] = 0, fs = ag.a4R[player] + (fq = 5 * ((fP = a4c - fP) >> 2)), bd.gV(player, fq - fP, 12), fs <= aD.a4d ? ag.a4R[player] = fs : (ag.a4R[player] = aD.a4d, bd.gV(player, fs - aD.a4d,
			18))), a4c
	}, this.lc = function(player, ih) {
		var h7 = ag.h7,
			a4S = h7[player],
			ih = bL.fW(a4S * (ih + 1), 1024),
			a4X = Math.max(bL.fW(a4S, 10), 1e3);
		return (ih = Math.min(ih, a4S - a4X)) < 0 ? (h7[player] = 0, a4X = Math.min(1e3, a4S + aD.a4d - ag.a4R[player]), bO.fc[1] = a4X, ag.a4R[player] += a4X - a4S, 0) : (bO.fc[1] = a4X, 10 === aD.ki && (ih = b4.a4Y(player, ih)), h7[player] -=
			a4X + ih, ih)
	}, this.ma = function(player) {
		ag.h7[player] -= bO.fc[0] + bO.fc[1]
	}, this.qH = function(player, jZ) {
		return (jZ = Math.min(jZ, aD.f2)) < aD.f2 && 0 === ag.mz[jZ] && (jZ = aD.f2), (bO.f1[0] = jZ) === aD.f2 || bs.ey(player, jZ)
	}, this.qK = function(player, pR) {
		return 0 !== ag.mz[pR] && !bs.ey(player, pR)
	}, this.a4e = function(player, a4f) {
		for (var gd, f5 = al.kw, a4g = 0, a4h = m1, aB = 0; aB < f5; aB++)
			if (gd = a4h[aB], !this.jn(gd)) {
				if (player === gd) return !0;
				if (++a4g > a4f) return !1
			} return !1
	}, this.lx = function(gd) {
		var a4i = aD.hz ? bh.kx() : ag.gt[m1[0]];
		return a4i >= bL.fW(gd * aD.kA, 100)
	}, this.a4j = function(fX, min, max) {
		return Math.floor(bL.iD(isNaN(fX) ? 0 : Number(fX), min, max))
	}
}

function a3E() {
	this.a4k = function(canvas, a4l, a4m) {
		var i = canvas.width,
			j = canvas.height,
			ed = bA.qt.xN(i, j),
			i7 = bA.qt.getContext(ed, !0),
			canvas = (i7.drawImage(canvas, 0, 0), i7.getImageData(0, 0, i, j));
		return a4l(canvas.data, i, j, a4m), i7.putImageData(canvas, 0, 0), ed
	}, this.a4n = function(xY, i, j) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xY[3 + aB] = xY[aB], xY[aB] = xY[1 + aB] = xY[2 + aB] = 255
			}
	}, this.a4o = function(xY, i, j) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xY[1 + aB] > xY[2 + aB] + 10 && (xY[3 + aB] = xY[aB], xY[1 + aB] = xY[2 + aB])
			}
	}, this.a4p = function(xY, i, j, a4m) {
		for (var gap = Math.floor(Math.min(i, j) * a4m), fC = 0; fC < i; fC++)
			for (var aB, fE = 0; fE < j; fE++)(fC < gap || fE < gap || i - gap <= fC || j - gap <= fE) && (xY[3 + (aB = 4 * (fC + fE * i))] = 255 - 255 * (xY[1 + aB] - xY[aB]) / (255 - xY[aB]))
	}, this.a4q = function(xY, i, j, a4m) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xY[aB] = a4m[0], xY[1 + aB] = a4m[1], xY[2 + aB] = a4m[2]
			}
	}, this.a4r = function(xY, i, j, a4m) {
		for (var gap = Math.floor(i * a4m), fC = 0; fC < i; fC++)
			for (var aB, fE = 0; fE < j; fE++)(fC < gap || fE < gap || i - gap <= fC || j - gap <= fE) && (xY[aB = 4 * (fC + fE * i)] = xY[1 + aB] = xY[2 + aB] = 0)
	}, this.a4s = function(xY, i, j) {
		for (var fE, aB, fC = i - 1; 0 <= fC; fC--)
			for (fE = j - 1; 0 <= fE; fE--) 200 < xY[1 + (aB = 4 * (fC + fE * i))] && xY[1 + aB] - 20 > xY[aB] && xY[1 + aB] - 20 > xY[2 + aB] ? xY[aB] + xY[2 + aB] < 40 ? xY[3 + aB] = 0 : (xY[3 + aB] = xY[aB], xY[aB] = 255, xY[1 + aB] = 255, xY[
				2 + aB] = 255) : xY[aB] < 50 && xY[1 + aB] < 50 && xY[2 + aB] < 50 && (xY[aB] + xY[1 + aB] + xY[2 + aB] < 50 ? xY[3 + aB] = 180 : xY[3 + aB] = 180 + Math.floor(75 * (xY[aB] + xY[1 + aB] + xY[2 + aB] - 50) / 100))
	}, this.a4t = function(xY, i, j) {
		for (var fE, aB, fC = i - 1; 0 <= fC; fC--)
			for (fE = j - 1; 0 <= fE; fE--) xY[1 + (aB = 4 * (fC + fE * i))] > xY[aB] + 20 && xY[1 + aB] > xY[2 + aB] + 20 && xY[aB] + xY[2] < 40 && (xY[3 + aB] = 255 - xY[1 + aB], xY[aB] = xY[1 + aB] = xY[2 + aB] = xY[aB])
	}, this.a3q = function(xY, i, j, a4m) {
		for (var eB = i >> 1, fC = 0; fC < i; fC++)
			for (var fE = 0; fE < j; fE++) Math.sqrt((fC - eB) * (fC - eB) + (fE - eB) * (fE - eB)) > a4m * eB && (xY[4 * (fC + fE * i) + 3] = 0)
	}
}

function a3B() {
	var a4u = {
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
		a4v = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rt = function(ef) {
		return ef.replace(a4v, function(match) {
			return a4u[match] || match
		})
	}, this.a0B = function(fX) {
		var aB, a4w, a4x, a4y, a4z;
		if (fX < 0) return "-" + this.a0B(Math.abs(fX));
		if (fX < 1e3) return fX.toString();
		for (a4w = Math.floor(Math.log(fX + .5) / Math.log(10)) + 1, a4x = Math.floor((a4w - 1) / 3), a4z = (a4y = fX.toString()).substring(a4w - 3, a4w), aB = 1; aB < a4x; aB++) a4z = a4y.substring(a4w - 3 * (aB + 1), a4w - 3 * aB) + " " + a4z;
		return a4y.substring(0, a4w - 3 * a4x) + " " + a4z
	}, this.a50 = function(gd, a4w) {
		return gd.toFixed(a4w) + "%"
	}, this.a51 = function(fX, a52) {
		return fX.toFixed(bL.iD(Math.floor((void 0 === a52 ? 3 : a52) - Math.log10(Math.max(fX, 1))), 0, 8))
	}, this.a53 = function(fX, nc, a4w) {
		return (fX * nc).toFixed(a4w)
	}, this.a1f = function(username) {
		var f9, eu = username.indexOf("[");
		return !(eu < 0) && 1 < (f9 = username.indexOf("]")) - eu && f9 - eu <= 8 ? username.substring(eu + 1, f9).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1f;
	this.a54 = function(qa) {
		for (var fO = Math.floor(.5 * qa.length + .5), ni = Math.floor(.5 * (fO - 1)), aB = 0; aB < ni; aB++)
			for (var fP = -1; fP < 2; fP += 2) {
				var ed = fO + fP * aB;
				if (" " === qa[ed]) return [this.a1b(qa.substring(0, ed)), this.a55(qa.substring(ed))]
			}
		return [qa.substring(0, fO), qa.substring(fO)]
	}, this.a55 = function(qa) {
		for (var f5 = qa.length, aB = 0; aB < f5; aB++)
			if (" " !== qa[aB]) return qa.substring(aB);
		return qa
	}, this.a1b = function(qa) {
		for (var aB = qa.length - 1; 0 <= aB; aB--)
			if (" " !== qa[aB]) return qa.substring(0, aB + 1);
		return qa
	}, this.a56 = function(qa, a57) {
		return qa.split("(")[0] + "(🧈 " + a57.toFixed(2) + ")"
	}, this.startsWith = function(qa, a58) {
		return qa.substring(0, a58.length) === a58
	}, this.a4G = function(qa, a58) {
		var f5 = qa.length;
		return qa.substring(f5 - a58.length, f5) === a58
	}, this.a59 = function(g, a5A, a5B) {
		var qa = "",
			f5 = g.length - 1;
		a5B = a5B || "";
		for (var aB = 0; aB < f5; aB++) qa += a5B + g[aB] + a5B + ",", (aB + 1) % a5A == 0 && (qa += "\n");
		return qa += a5B + g[f5] + a5B
	}, this.a5C = function(qa, a00, a01) {
		return qa.replace(new RegExp(a00, "g"), a01)
	}
}

function a5D() {
	this.ec = function(player, er) {
		aI.ys(player, bM.fD(er), bM.fF(er)) && (bf.dk = !0), aD.kk && this.eY()
	}, this.eY = function() {
		aD.hT = !1;
		for (var aB = 0; aB < aD.kQ; aB++) 0 !== ag.mz[aB] && 0 === ag.gt[aB] && aI.yz(aB);
		0 !== ag.mz[aD.ep] ? (bd.mv[7] = ag.gt[aD.ep], bd.mv[8] = ag.h7[aD.ep], aR.a5E(), aW.a5F(), aD.hE || aH.nK(ag.iy[aD.ep] - 5, ag.j0[aD.ep] - 5, ag.iz[aD.ep] + 5, ag.j1[aD.ep] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a5G(18), af.a5H(),
			af.ml(!0), bP.y.a5I(), aL.sA(), aD.qF = null, bb.a5J = !0, bb.a5K(), aD.kk && a0.a1.setState(1)
	}
}

function c1() {
	this.f2 = 512, this.a4U = 15e8, this.a5L = 1e9, this.a4d = 5e4, this.a5M = 512, this.gP = 2, this.ep = 0, this.kQ = 0, this.a0x = 0, this.km = 0, this.a0w = 0, this.y3 = 512, this.y8 = 512, this.a4T = 150, this.kk = !0, this.hE = 0, this.a0u = 0,
		this.kA = 0, this.nT = !1, this.hT = 0, this.a5N = 0, this.hz = !1, this.yA = 0, this.yB = 0, this.ki = 0, this.a1p = 0, this.qF = null, this.a1D = new zE, this.a5O = 30, this.a0r = 0, this.a0z = 0, this.a1C = 0, this.a0m = 0, this.data =
		new a5P, this.a5Q = new a5R, this.a5S = 0, this.a5T = "", this.a5U = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0x = this.kQ = this.data.humanCount, this.kk = 1 === this.a0x && !__fx.customLobby.isActive(), this.nT = !1, this.hE = this.data.isReplay, this.ki = 0 === this.data.gameMode ? [7, 10, 8][this.data
					.battleRoyaleMode
				] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1p = this.data.isContest, this.hz = this.ki < 7 || 9 === this.ki, this.ki = 10 === this.ki && this.kk ? 7 : this.ki, this.ki = 8 === this.ki && 2 !== this.kQ ? 7 : this
				.ki, az.dd(), this.yA = this.data.numberTeams, this.data.teamPlayerCount ? this.yB = +(0 < this.data.teamPlayerCount[0]) : (this.yB = 0, this.hz && this.kk && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount
					.fill(1, 1, this.yA + 1), aD.a5Q.a5V())), this.a5O = this.kQ <= 2 ? 30 : this.kQ <= 50 ? 40 : 50, this.a5N = this.hT = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.qF =
				this.hT ? new a5D : null, this.y3 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.kQ) : 1 === l.du ? this.y3 = this.kQ : this.y3 = this.data.playerCount,
				this.y8 = this.y3, this.km = this.y3 - this.kQ, this.a0w = 0, this.ep = this.data.selectedPlayer, this.a0r = 0, this.a0z = 0, this.a1C = 0, this.a0m = 0, ay.a5W(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a5X(), b8.pK
				.q3 = [], bg.dd(), this.a0u = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5Y(), ac.de(), ap.a5Z(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5a(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5b(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5c.putImageData(a5d, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g8(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a1D.dd(), bf.a5a(), aH.nJ(), 0 === ag.mz[aD.ep] && aX.show(!1, !0), af.ml(!0), av.dd(), bf.dk = !0, this.hE || this.kk && this.hT || a0.a1.setState(1), this.a5S = 0
		}, this.a2J = function(eS) {
			b9.qD.a5f.length ? this.a5T = b9.qD.a5f : this.a5T = b9.a5g.a0M(), !1 === __fx.customLobby.isActive() && b0.y.a5h(), bq.clear(), this.a0u = 0, bf.a5i(), a0.a1.setState(0), aa.setState(0), __fx.customLobby.isActive() || bU.eK.show(eS),
				__fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a5S ? t.y.a5j() : 1 === this.a5S ? t.u(19) : t.u(5, 5)
		}, this.a5k = function() {
			return this.hE ? aM.hF || !bC.a5l : this.kk && (aM.hF || this.hT)
		}, this.a5m = function() {
			return 1 === this.a0u && !this.hT
		}
}

function a5P() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5n = null
}

function a5R() {
	this.a5V = function() {
		var a5o = aD.data;
		bA.r1.a3f(a5o.teamPlayerCount, a5o.playerCount), a5o.numberTeams = bA.r1.a3W(a5o.teamPlayerCount, 0), a5o.teamPlayerCount[0] && a5o.teamPlayerCount[7] && (a5o.teamPlayerCount[7] = 0, this.a5V())
	}, this.a5p = function() {
		var a5o = aD.data;
		a5o.mapType < 2 ? bS.a7(bS.a5q(a5o), a5o.mapSeed) : bS.a5r(a5o.canvas)
	}, this.a5s = function() {
		var a5o = aD.data;
		a5o.colorsData || (a5o.colorsData = new Uint32Array(1)), a5o.selectableColor && (a5o.colorsData[0] = bj.y.wa()), a5o.selectableName && (a5o.playerNamesData || (a5o.playerNamesData = new Array(1)), a5o.playerNamesData[0] = bj.eQ.data[122]
			.value), a5o.a5n = new Uint32Array(1), a5o.a5n[0] = bG.tD.xD(bj.eQ.data[105].value, 5)
	}, this.a5t = function() {
		aD.data = new a5P, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.f2), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a5u = [];
	this.pn = function(player, pR, a5v, a5w) {
		player === aD.ep || pR === aD.ep || !a5w && bA.gR.jn(player) || bA.gR.jn(pR) || this.a1I(ag.a1X[player] + " supported " + ag.a1X[pR] + " with " + bA.rs.a0B(a5v) + " ressource" + (1 === a5v ? "." : "s."))
	}, this.a1I = function(qa, pc) {
		qa = {
			eT: aW.a5y(),
			qa: qa,
			pc: pc
		};
		a5u.push(qa), 30 === t.tA && t.a5z().a1I(qa)
	}, this.clear = function() {
		a5u = [];
		var tY = t.a60(30);
		tY && tY.clear()
	}, this.a61 = function() {
		return a5u
	}
}

function dT() {
	this.zs = 0, this.gap = 0, this.sm = 0, this.qz = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zs = .0022 * bA.qt.qu(.5) * h.iF, this.sm = this.zs / h.k, this.gap = Math.max(Math.floor((a0.a1.iE() ? .0114 : .01296) * h.iF), 2), this.qz = this.gap / h.k
	}
}

function dS() {
	this.a62 = function() {
		return a0.a1.iE() ? 2 : 1
	}
}

function cC() {
	var rS, fC, fE, a63, a64, a65, eT, a66, a67, a68, a69, gap, zoom, pw, a6A;

	function a6O(lf, lg, ej) {
		ac.f0(ej) || -1 === (lf = bN.lF.a6X(lf, lg)) ? aN.a6W(ej) : aN.a6Y(lf)
	}

	function a6K(a66) {
		for (var aB = pw.length - 1; 0 <= aB; aB--)
			if (pw[aB] === a66) return 1
	}

	function a6I(a6F) {
		var aB, f5;
		if (-1 !== a6F)
			for (f5 = rS.length, aB = 0; aB < f5; aB++)
				if (rS[aB].hr && rS[aB].fC + 1 === a6F % 4 && rS[aB].fE + 1 === a6F >> 2) return aB;
		return -1
	}

	function a6G(lf, lg) {
		var tY = gap / 2;
		return lf < fC - a63 - 3 * tY || fC + 3 * a63 + 5 * tY < lf || lg < fE - a63 - 3 * tY || fE + 2 * a63 + 3 * tY < lg ? -1 : 4 * (lg < fE - tY ? 0 : lg < fE + a63 + tY ? 1 : 2) + (lf < fC - tY ? 0 : lf < fC + a63 + tY ? 1 : lf < fC + 2 * a63 +
			3 * tY ? 2 : 3)
	}
	this.a6B = function() {
		var aB, fP, a6E = [bB.oQ, bB.oe, bB.ny, bB.p1, bB.os];
		for (rS = new Array(10), aB = 0; aB < 10; aB++) rS[aB] = {
			id: aB,
			hr: !1,
			lN: 0,
			canvas: [],
			fC: 0,
			fE: 0
		};
		for (rS[0].colors = [0, 1, 2, 3], rS[0].fC = 0, rS[0].fE = 0, rS[1].colors = [1, 4], rS[1].fC = 1, rS[1].fE = 0, rS[2].colors = [0, 1], rS[2].fC = -1, rS[2].fE = 0, rS[3].colors = [0], rS[3].fC = 0, rS[3].fE = 0, rS[4].colors = [0, 2],
			rS[4].fC = 1, rS[4].fE = 1, rS[5].colors = [3], rS[5].fC = 0, rS[5].fE = -1, rS[6].id = 20, rS[6].colors = [0], rS[6].fC = 1, rS[6].fE = -1, rS[7].id = 21, rS[7].colors = [0], rS[7].fC = 0, rS[7].fE = 1, rS[8].id = 16, rS[8]
			.colors = [0], rS[8].fC = 0, rS[8].fE = 0, rS[9].id = 10, rS[9].colors = [4], rS[9].fC = 2, rS[9].fE = 0, aB = 0; aB < 10; aB++)
			for (fP = 0; fP < rS[aB].colors.length; fP++) rS[aB].canvas.push(function(id, a3l) {
				if (id < 20) return bA.canvas.ze(ab.get(3), id, a3l);
				var a3l = ab.get(3).height,
					a3m = bA.qt.xN(a3l, a3l),
					i7 = bA.qt.getContext(a3m);
				20 === id ? i7.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xY.zt(aj.s9.zi + aj.s9.zz, i7, 0, 0, a3l);
				return a3m
			}(rS[aB].id, a6E[rS[aB].colors[fP]]))
	}, this.a6D = function() {
		return rS
	}, this.dd = function() {
		pw = [], fC = fE = eT = 0, a64 = a65 = -1e3, this.resize()
	}, this.resize = function() {
		a63 = Math.floor((a0.a1.iE() ? .075 : .0468) * h.iF), zoom = a63 / ab.get(3).height, gap = Math.floor(a63 / 3)
	}, this.a2m = function(lf, lg) {
		return !!this.hr() && (bf.dk = !0, !!aj.xY.hI(lf, lg, a67) || (lf = function(lf, lg) {
			a65 = a64 = -1e3;
			var a6H = a6I(a6G(lf, lg));
			if (-1 === a6H) return 0;
			if (1 !== rS[a6H].colors[rS[a6H].lN])
				if (5 === a6H) {
					if (! function() {
							var eU = performance.now();
							a6A + 4e3 < eU && (pw = []);
							a6A = eU
						}(), a6K(a66)) return 1;
					pw.push(a66), 16 < pw.length && pw.shift()
				} else if (6 === a6H) {
				for (var aB = pw.length - 1; 0 <= aB; aB--) 0 === ag.mz[pw[aB]] && pw.splice(aB, 1);
				0 < pw.length && (b5.a6L(1, pw, !0) && b8.gR.pv(pw, a66), pw = [])
			} else if (2 === a6H) an.hj(a66) && b8.hV.pQ(aR.hZ(), a66);
			else if (3 === a6H) aD.hT && b8.hV.hW(a68);
			else if (0 === a6H)
				if (0 === rS[0].lN) {
					if (aD.a5N && aW.a5y() < 350) return 1;
					bV.a6M(4), b8.hV.hc(aR.hZ(), a66)
				} else b1.hd(a66, aR.hZ());
			else if (1 === a6H) b8.hV.hh(aR.hZ(), a68);
			else if (9 === a6H) b8.hV.hk(aR.hZ());
			else {
				if (7 === a6H) return bV.a6M(0), aj.xY.show(lf, lg), 2;
				if (4 === a6H) b5.a6L(0, [a66], !0) && b8.gR.ps(a66);
				else {
					if (8 !== a6H) return 0;
					b8.hV.hY(aR.hZ(), a69, a66)
				}
			}
			return 1
		}(lf, lg), this.sA(), 2 === lf && (aj.xY.hr = !0), 0 < lf))
	}, this.a2o = function(lf, lg) {
		this.hr() || (a64 = lf, a65 = lg, eT = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hL(mouseX),
			coordY = bM.hN(mouseY),
			coord = bM.fS(coordX, coordY),
			coord = bM.ev(coord);
		bM.hO(coordX, coordY) && a6O(mouseX, mouseY, coord)
	}, this.click = function(lf, lg, a2v) {
		var hK = bM.hL(lf),
			hM = bM.hN(lg),
			er = bM.fS(hK, hM),
			ej = bM.ev(er);
		return !(!bM.hO(hK, hM) || (hK = (a0.a1.iE() ? .025 : .0144) * h.iF, hM = performance.now(), Math.abs(lf - a64) > hK) || Math.abs(lg - a65) > hK || eT + 500 < hM) && (eT = hM, a2v ? (a6O(lf, lg, ej), !1) : aM.hF || this.hr() || !bA.gR.hH(
			aD.ep) || aD.hE ? (this.sA(), !1) : (aD.hT ? 0 <= (a68 = br.hU(er)) && (rS[3].hr = !0) : 2 === aD.a0u ? ac.gf(ej) && (a66 = ac.ex(ej), bA.gR.jn(a66) || (rS[0].hr = !0, rS[0].lN = 1, rS[7].hr = !0)) : (bN.hi.hj(aD.ep, er) && (
			rS[0].hr = !0, rS[0].lN = 1, rS[1].hr = !0, rS[1].lN = 0, rS[9].hr = !0, rS[9].lN = 0), bN.hf.hg(aD.ep, er) && (rS[0].hr = !0, rS[0].lN = 1, rS[1].hr = !0, rS[1].lN = 1, a68 = bO.fh[7]), ac.fA(ej) ? (a69 = am.eg.ei(
			ej)) && (hK = bM.ev(a69), rS[8].hr = !0, a66 = ac.ew(hK) ? aD.f2 : ac.ex(hK)) : (ac.yx(aD.ep, ej) && (a67 = aD.ep, rS[0].hr = !0, rS[0].lN = 1, rS[7].hr = !0), -1 !== (hM = br.ha(er)) && (ac.ew(hM << 2) ? (a66 = aD.f2,
			bs.hb(aD.ep) ? (rS[0].hr = !0, rS[0].lN = 0) : ad.gC(aD.ep) && (rS[0].hr = !0, rS[0].lN = 3)) : (a66 = ac.ex(hM << 2), rS[0].lN = 1, rS[5].hr = function(a66) {
			return !bA.gR.jn(a66) && !a6K(a66) && b5.a6L(1, [a66], !1)
		}(a66), rS[7].hr || bA.gR.jn(a66) || (a67 = a66, rS[7].hr = !0), rS[4].hr = !bA.gR.jn(a66) && !af.a6S(a66) && b5.a6L(0, [a66], !1), rS[6].hr = function(a66) {
			if (0 === pw.length) return !1;
			if (performance.now() > a6A + 4e3) return !(pw = []);
			return !a6K(a66) && ! function(a66) {
				var aB;
				if (aD.hz)
					for (aB = pw.length - 1; 0 <= aB; aB--)
						if (!bs.ey(a66, pw[aB])) return 1;
				return
			}(a66)
		}(a66), bs.ey(a66, aD.ep) ? (bs.he(aD.ep, a66) ? (rS[0].lN = 0, rS[0].hr = !0) : ad.gC(aD.ep) && (rS[0].lN = 3, rS[0].hr = !0), rS[0].hr = this.a6U()) : (rS[2].hr = !0, an.hj(a66) ? rS[2].lN = 0 : rS[2].lN = 1,
			rS[0].hr = !0))))), this.a6P(lf, lg)))
	}, this.a6P = function(lf, lg) {
		return fC = lf - Math.floor(a63 / 2), fE = lg - Math.floor(a63 / 2), !!this.hr()
	}, this.a2S = function(lf, lg) {
		return !!this.hr() && (aj.xY.hr ? !aj.xY.zr(lf, lg) && (aj.xY.hr = !1, bf.dk = !0) : function(sV, lf, lg) {
			lf = a6G(lf, lg);
			if (0 <= a6I(lf)) return !1;
			if ((1 === lf || 6 === lf) && 0 <= a6I(2)) return !1;
			if ((6 === lf || 9 === lf) && 0 <= a6I(10)) return !1;
			return sV.sA(), bf.dk = !0
		}(this, lf, lg))
	}, this.sA = function() {
		for (var aB = rS.length - 1; 0 <= aB; aB--) rS[aB].hr = !1, rS[aB].lN = 0;
		aj.xY.hr = !1
	}, this.hr = function() {
		return this.a6U() || aj.xY.hr
	}, this.a6U = function() {
		for (var f5 = rS.length, aB = 0; aB < f5; aB++)
			if (rS[aB].hr) return !0;
		return !1
	}, this.vW = function() {
		if (this.hr())
			if (aj.xY.hr) aj.xY.vW();
			else {
				var aB, i7 = vX,
					fP = rS,
					f5 = fP.length,
					a6c = (a63 + gap) / zoom;
				for (i7.imageSmoothingEnabled = !0, i7.setTransform(zoom, 0, 0, zoom, fC, fE), aB = 0; aB < f5; aB++) fP[aB].hr && vX.drawImage(fP[aB].canvas[fP[aB].lN], fP[aB].fC * a6c, fP[aB].fE * a6c);
				i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6d, a6e, a6f, a6g = -1;

	function a6h() {
		var a6i, z8 = canvas.getContext("2d", {
			alpha: !0
		});
		z8.clearRect(0, 0, j, j), z8.fillStyle = bB.nw, z8.fillRect(0, 0, j, j), 9 === a6e && (z8.fillStyle = bB.o1, z8.fillRect(0, 0, j, j)), z8.fillStyle = bB.o0, z8.fillRect(0, 0, j, 1), z8.fillRect(0, 0, 1, j), z8.fillRect(0, j - 1, j, 1), z8
			.fillRect(j - 1, 0, 1, j), a6i = .9 * j / ab.get(0).width, z8.imageSmoothingEnabled = !0, z8.setTransform(a6i, 0, 0, a6i, Math.floor((j - a6i * ab.get(0).width) / 2), Math.floor((j - a6i * ab.get(0).height) / 2)), z8.drawImage(ab.get(0),
				0, 0), z8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6k(lf, lg) {
		if (!aM.hF) return lf <= j + bc.gap && lg >= aR.fE ? 9 : -1;
		if (lf <= 4 * j + bc.gap) {
			if (lg >= aR.fE) return 0;
			if (lg >= aR.fE - j - a6f * bc.gap) return 2
		} else if (lf <= 7 * j + bc.gap && lg >= aR.fE - j - a6f * bc.gap) return 1;
		return -1
	}
	this.hF = !1, this.dd = function() {
		a6e = -1, this.hF = !1, a6f = a0.a1.iE() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6d = bA.qt.sk(1, (a0.a1.iE() ? .5 : .45) * j), a6h()
	}, this.a33 = function() {
		this.hF = !this.hF, this.hF ? (bC.a32(!1), aD.hE && bC.a5l && bC.a34(!0), this.a6j(), 9 === a6e && (a6e = 0)) : (a6e = -1, a6h(), !aD.kk || 1 !== aD.a0u || aD.hT || aD.hE || a0.a1.setState(1)), bf.dk = !0
	}, this.a6j = function() {
		(aD.kk || aD.hE) && 1 === aD.a0u && (aV.ml(!0), aD.hT || setTimeout(function() {
			bb.a16()
		}, 0), a0.a1.setState(0))
	}, this.hI = function(lf, lg) {
		return 0 <= (a6g = a6k(lf, lg)) || !aM.hF || aD.kk || aD.hE || be.hr || aM.a33(), a6g
	}, this.a2S = function(lf, lg) {
		lf = a6k(lf, lg);
		lf !== a6e && (a6e = lf, this.hF || a6h(), bf.dk = !0)
	}, this.a2T = function(lf, lg) {
		lf = a6k(lf, lg);
		return -1 !== lf && a6g === lf && (this.hF ? aD.nT ? (0 <= lf && bC.a32(!1), !aD.hE) : (0 === lf ? aD.a2J() : 1 === lf ? this.a33() : 2 === lf && t.u(1, 0), !0) : 9 === lf && (this.a33(), !0))
	}, this.vW = function() {
		var i;
		this.hF ? (i = Math.floor(5.5 * j), vX.setTransform(1, 0, 0, 1, bc.gap, aR.fE), vX.fillStyle = bB.nw, vX.fillRect(0, 0, i, j), 0 === a6e ? (vX.fillStyle = bB.o1, vX.fillRect(0, 0, 4 * j, j)) : 1 === a6e && (vX.fillStyle = bB.o1, vX
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vX.fillStyle = bB.o0, vX.fillRect(0, 0, i, 1), vX.fillRect(0, 0, 1, j), vX.fillRect(4 * j, 0, 1, j), vX.fillRect(0, j - 1, i, 1), vX.fillRect(i - 1, 0, 1, j), vX.font = a6d, bA.qt
			.textBaseline(vX, 1), bA.qt.textAlign(vX, 1), vX.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a6o(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fE + .3 * j, i), i = 1, vX.setTransform(1, 0, 0, 1, bc.gap, aR.fE - i * a6f * bc.gap - i *
				j), vX.fillStyle = bB.nw, vX.fillRect(0, 0, 4 * j, j), a6e === i + 1 && (vX.fillStyle = bB.o1, vX.fillRect(0, 0, 4 * j, j)), vX.fillStyle = bB.o0, vX.fillRect(0, 0, 4 * j, 1), vX.fillRect(0, 0, 1, j), vX.fillRect(4 * j, 0, 1,
				j), vX.fillRect(0, j - 1, 4 * j, 1), vX.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), vX.setTransform(1, 0, 0, 1, 0, 0)) : vX.drawImage(canvas, bc.gap, aR.fE)
	}, this.qU = function(player) {
		return 0 !== ag.mz[player] && 2 !== aD.a0u && !bA.gR.jn(player)
	}, this.a6o = function(fC, fE, f5) {
		vX.setTransform(1, 0, 0, 1, fC, fE), vX.lineWidth = bc.zs, vX.strokeStyle = bB.o0, vX.beginPath(), vX.moveTo(0, 0), vX.lineTo(f5, f5), vX.moveTo(0, f5), vX.lineTo(f5, 0), vX.stroke()
	}
}

function cE() {
	var a6q, j, a6r, a6s, a6t, a6u, a6v, a6w, a6x;

	function z4() {
		return aR.a7F(aN.a7B()) ? aw.hr ? __fx.settings.keybindButtons ? aR.fE - 2 * aR.j - 3 * a6r : aR.fE - aR.j - 2 * a6r : __fx.settings.keybindButtons ? aR.fE - aR.j - 2 * a6r : aR.fE - a6r : bC.a7F(aN.a7E()) ? aw.hr ? bC.z4() - aR.j - 2 * a6r :
			bC.z4() - a6r : aw.hr ? h.j - aR.j - (bk.a62() + 1) * a6r : h.j - bk.a62() * bc.gap
	}

	function a72(eU, qa, id, gd, a75, a76, l3, a77, a78, a79, a7J) {
		var aB, z8, a3m, ql, a7K = void 0 !== a78,
			i = Math.floor(aQ.measureText(qa, aN.a6d) + 1.5 * a6s + (a7K ? j : 1.5 * a6s));
		if (bf.dk = !0, a7J || bq.a1I(qa, a78), i + 2 * a6r + aR.j > h.i && !a7K && 50 !== id && 20 < qa.length) a72(eU, (a7J = bA.rs.a54(qa))[0], id, gd, a75, a76, l3, a77, a78, a79, !0), a72(eU, a7J[1], id, gd, a75, a76, l3, a77, a78, a79, !0);
		else if (a7J = i + (50 === id ? a6t : 0), (a3m = document.createElement("canvas")).width = i, a3m.height = j, (z8 = a3m.getContext("2d", {
				alpha: !0
			})).font = aN.a6d, bA.qt.textBaseline(z8, 1), bA.qt.textAlign(z8, 0), z8.clearRect(0, 0, i, j), z8.fillStyle = a76, z8.fillRect(0, 0, i, j), z8.fillStyle = a75, z8.fillText(qa, Math.floor(1.5 * a6s), Math.floor(j / 2)), a7K && (z8
				.imageSmoothingEnabled = !0, aj.xY.zt(a78, z8, i - j, 0, j)), 0 === (ql = {
				eT: eU,
				qa: qa,
				id: id,
				player: gd,
				canvas: a3m,
				a75: a75,
				a76: a76,
				i: i,
				a7C: a7J,
				l3: l3,
				a77: a77,
				a78: a78,
				a79: a79
			}).eT || 0 < a6q.length && 0 < a6q[0].eT) a6q.unshift(ql);
		else {
			for (aB = 1; aB < a6q.length; aB++)
				if (0 < a6q[aB].eT) return void a6q.splice(aB, 0, ql);
			a6q.push(ql)
		}
	}

	function a73(eB, tY, fP) {
		return "rgb(" + eB + "," + tY + "," + fP + ")"
	}

	function a7L(id, gY) {
		for (var f5 = a6q.length, aB = 0; aB < f5; aB++) a6q[aB].id === id && gY-- <= 0 && (a6q.splice(aB, 1), aB--, f5--)
	}

	function a7M(id, player) {
		for (var fJ = !1, aB = a6q.length - 1; 0 <= aB; aB--) a6q[aB].id !== id || player !== aD.f2 && a6q[aB].player !== player || (a6q.splice(aB, 1), fJ = !0);
		return fJ
	}

	function a7i(qa) {
		a72(340, qa, 6, 0, a73(215, 245, 255), bB.nx, -1, !1)
	}
	this.a6y = "", this.dd = function() {
		var self;
		a6w = 0, a6v = a0.a1.iE() ? 7 : 12, a6u = {
			a0i: [0, 0, 0],
			a6z: [0, 0, 0],
			nH: [220, 180, 180],
			vV: [0, 0, 0],
			ed: [0, 0, 0]
		}, a6q = [], this.resize(), aD.hT && this.a17(0, 18), bS.xL.xM[bS.el].name.length && a7i(L(86, [bS.xL.xM[bS.el].name])), a7i(L(87, [bS.fG - 2 + "x" + (bS.fH - 2)])), a7i(L(88, [bA.rs.a0B(ap.a7j)])), ap.a7j !== ap.a7k && a7i(L(89, [bA
			.rs.a0B(ap.a7k) + " (" + bA.rs.a50(100 * ap.a7k / ap.a7j, 1) + ")"
		])), 0 < ap.a7l && a7i(L(66, [bA.rs.a0B(ap.a7l) + " (" + bA.rs.a50(100 * ap.a7l / ap.a7j, 1) + ")"])), 0 < ap.a7m && a7i(L(90, [bA.rs.a0B(ap.a7m) + " (" + bA.rs.a50(100 * ap.a7m / ap.a7j, 1) + ")"])), 10 === aD.ki && a72(120, L(91),
			6, 0, a73(235, 255, 120), bB.nx, -1, !1), 0 !== (self = this).a6y.length && (a72(200, self.a6y, 0, 0, bB.o0, bB.nx, -1, !1), self.a6y = ""), aD.a1p && a72(340, L(44), 6, 0, a73(255, 200, 0), bB.nx, -1, !1)
	}, this.resize = function() {
		var a74, aB;
		if (j = (j = Math.floor((a0.a1.iE() ? .031 : .0249) * h.iF)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6d = bA.qt.sk(1, this.fontSize), a6r = bc.gap, a6s = Math.floor(j / 5), 0 < a6q.length)
			for (a74 = a6q, a6q = [], aB = a74.length - 1; 0 <= aB; aB--) a72(a74[aB].eT, a74[aB].qa, a74[aB].id, a74[aB].player, a74[aB].a75, a74[aB].a76, a74[aB].l3, a74[aB].a77, a74[aB].a78, a74[aB].a79, !0);
		this.a7A()
	}, this.a7A = function() {
		a6x = document.createElement("canvas");
		var qa = L(45),
			z8 = (a6t = aQ.measureText(qa, this.a6d) + 5 * a6s, a6x.height = j, a6x.width = a6t, a6x.getContext("2d", {
				alpha: !0
			}));
		z8.font = this.a6d, bA.qt.textBaseline(z8, 1), bA.qt.textAlign(z8, 1), z8.clearRect(0, 0, a6t, j), z8.fillStyle = bB.oN, z8.fillRect(0, 0, a6t, j), z8.fillStyle = bB.o0, z8.fillText(qa, Math.floor(a6t / 2), Math.floor(j / 2))
	}, this.a7B = function() {
		var f5;
		return aw.hr ? aw.i : 0 === (f5 = a6q.length) ? 0 : 1 === f5 ? a6q[0].a7C : a7D(a6q[0].a7C, a6q[1].a7C)
	}, this.a7E = function() {
		var f5 = a6q.length;
		return aw.hr ? f5 ? a7D(aw.i, a6q[0].a7C) : aw.i : 0 === f5 ? 0 : 1 === f5 ? a6q[0].a7C : 2 === f5 ? a7D(a6q[0].a7C, a6q[1].a7C) : a7D(a7D(a6q[0].a7C, a6q[1].a7C), a6q[2].a7C)
	}, this.hI = function(fC, fE) {
		for (var nQ, a7G, a7H = z4(), aB = a6q.length - 1; 0 <= aB; aB--)
			if ((a7G = a7H - (aB + 1) * j) <= fE && fE < a7G + j) return 50 === a6q[aB].id ? fC >= h.i - a6t - a6r - a6q[aB].i && (fC >= h.i - a6t - a6r ? b8.gR.ps(a6q[aB].player) : aH.nL(a6q[aB].player, 800, !1, 0), !0) : fC >= h.i - a6q[aB].i -
				a6r && (736 === a6q[aB].id ? window.open("https://" + a6q[aB].qa, "_blank") : a6q[aB].a77 && (a6q[aB].a79 && a6q[aB].a79.fO ? (a7G = a6q[aB].a79.er, nQ = bM.fD(a7G) - 10, a7G = bM.fF(a7G) - 10, aH.nK(nQ, a7G, 19 + nQ, 19 +
					a7G)) : a6q[aB].a79 && a6q[aB].a79.fP ? aH.nM(a6q[aB].player, a6q[aB].a79.nN) : (aH.nL(a6q[aB].player, 800, !1, 0), 0 <= a6q[aB].l3 && (nQ = a6q[aB].l3, a6q[aB].l3 = a6q[aB].player, a6q[aB].player = nQ))), !0);
		return !1
	}, this.a1I = function(eU, qa, id, gd, a75, a76, l3, a77, a78, a79) {
		a72(eU, qa, id, gd, a75, a76, l3, a77, a78, a79)
	}, this.a7I = function(r) {
		a72(300, r, 252, 0, bB.o0, bB.nx, -1, !1)
	}, this.a5G = function(id) {
		for (var aB = a6q.length - 1; 0 <= aB; aB--) a6q[aB].id === id && (a6q[aB].eT = 1)
	}, this.a17 = function(player, id) {
		0 === id ? (aQ.ec(player, 0), a7L(423, 2), a72(160, L(46, [ag.a1X[player]]), 423, player, "rgb(10,220,10)", bB.nx, -1, !1)) : 1 === id ? (a7M(50, aD.f2), aQ.ec(player, 1), a72(360, L(47, [ag.a1X[player]]), 0, player, bB.oh, bB.nx, -1, !
				0), aH.nL(player, 2700, !1, 0)) : 2 === id ? (aQ.ec(player, 2), a72(0, L(48), 0, player, "rgb(10,255,255)", bB.nx, -1, !0), aH.nL(player, 2700, !1, 0)) : 3 === id ? (aQ.ec(player, 2), a72(0, L(49, [ag.a1X[player]]), 0, player, bB
				.o0, bB.nx, -1, !0), aH.nL(player, 2700, !1, 0)) : 4 === id ? this.a7N(1, player, player) : 5 === id ? bA.gR.jn(aD.ep) || (function(id, mu) {
				var aB, a7X = 0,
					f5 = a6q.length;
				for (aB = 0; aB < f5; aB++)
					if (a6q[aB].id === id && mu <= ++a7X) return a6q.splice(aB, 1)
			}(1, 5), af.a7P(player) && a72(180, L(50, [ag.a1X[player]]), 1, player, a73(255, 200, 180), bB.nx, -1, !0), bA.gR.a4N(player, 10) && (a7L(573, 0), a72(180, L(51, [ag.a1X[player]]), 573, player, bB.oh, bB.nx, -1, !0))) : 18 === id ?
			a72(255, L(52), 18, 0, bB.o0, bB.nx, -1, !1) : 21 === id ? a72(220, L(53), id, 0, bB.o0, bB.nx, -1, !1) : 22 === id ? this.a7N(2, player, player) : 59 === id && a72(0, L(54), id, 0, bB.p0, bB.nx, 0, !1)
	}, this.a2F = function(r) {
		a72(200, L(55, [r]), 94, 0, bB.o0, bB.oc, -1, !1)
	}, this.a1K = function(a7Q) {
		if (aD.ep === a7Q && !aD.kk && !aD.hE)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a72(0, "Your Win Count is now " + __fx.wins.count, 3, a7Q, bB.o0, bB.nx, -1, !0);
		ag.gt[a7Q] && (aQ.ec(a7Q, 2), aD.kQ < 100 ? a72(0, L(49, [ag.a1X[a7Q]]), 3, a7Q, bB.o0, bB.nx, -1, !0) : a72(0, L(56, [ag.a1X[a7Q]]), 3, a7Q, bB.o0, bB.nx, -1, !0))
	}, this.a6W = function(ej) {
		var qa, a7S, a7R = "(" + bM.fD(ej >> 2) + ", " + bM.fF(ej >> 2) + ")",
			a77 = !1,
			player = 0;
		ac.f0(ej) ? ac.ew(ej) ? a7R = L(57, [a7R]) : (player = ac.ex(ej), aD.hE && !1 === __fx.hoveringTooltip.active && (aD.ep = player), qa = L(58, [bA.z8.a40(ag.a1c[player], bA.qt.sk(0, 10), 150)]) + "   ", qa = (qa += L(59, [bA.rs.a0B(ag.h7[
				player])]) + "   ") + L(60, [bA.rs.a0B(ag.gt[player])]) + "   ", aD.hz && (a7S = bg.a1G[bg.kn[bg.f3[player]]], qa += L(61) + ": " + a7S + "   "), bA.gR.jn(player) && (qa += L(62) + ": " + aE.kb[aE.ho[player]] + "   "), a7R =
			qa = (qa += L(63, [player]) + "   ") + L(64, [a7R]), a77 = !0) : a7R = ac.fA(ej) ? L(65, [a7R]) + "   #" + ac.en(ej) : L(66, [a7R]), bf.dk = !0, a7L(55, 0), a72(220, a7R, 55, player, bB.o0, bB.nx, -1, a77, void 0, void 0, !0)
	}, this.a6Y = function(a7T) {
		var lL = bN.y,
			player = lL.mK[a7T] >> 3,
			qa = (bf.dk = !0, a7L(55, 0), L(67, [ag.a1X[player]]) + "   ");
		a72(220, qa += L(59, [bA.rs.a0B(lL.a7U[a7T])]), 55, player, bB.o0, bB.nx, -1, !0)
	}, this.pb = function(pN, a7V, pc) {
		pN === aD.ep ? a72(175, " " + L(68, [ag.a1X[a7V]]) + ": ", 1001, a7V, a73(200, 255, 210), bB.nx, -1, !0, pc) : this.a7W(pN, pc)
	}, this.a7W = function(pN, pc) {
		a7L(1e3, 0), a72(175, ag.a1X[pN] + ": ", 1e3, pN, bB.o0, "rgba(5,60,25,0.9)", -1, !0, pc)
	}, this.a1J = function() {
		var r;
		aD.a0z ? (r = L(69), aQ.a1H(L(70), 2, 1, 12), a72(0, r, 40, 0, "rgb(10,220,10)", bB.nx, -1, !1)) : (r = L(71), aQ.a1H(L(72), 2, 0, 16), a72(0, r, 41, 0, bB.o0, bB.nx, -1, !1))
	}, this.zF = function() {
		var gY = ag.a1X,
			f8 = aD.data;
		a72(300, gY[0] + " [" + aD.a1D.zL(f8.elo[0]) + "] vs " + gY[1] + " [" + aD.a1D.zL(f8.elo[1]) + "]", 65, 0, bB.nr, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7Y = function(r) {
		a72(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7Z = function(a7a) {
		a72(0, L(a7a ? 73 : 74), 247, 0, bB.oz, bB.nx, -1, !1)
	}, this.zN = function(zK, zM, a7b) {
		var f8 = aD.data,
			gY = ag.a1X;
		a72(0, gY[0] + ": " + aD.a1D.zL(f8.elo[0]) + " -> " + zK, 66, 0, bB.o0, a7b[0], -1, !1), a72(0, gY[1] + ": " + aD.a1D.zL(f8.elo[1]) + " -> " + zM, 66, 1, bB.o0, a7b[1], -1, !1)
	}, this.pt = function(player, id) {
		0 === id ? a7M(50, player) ? (a72(128, L(75, [ag.a1X[player]]), 52, player, a73(180, 255, 180), bB.nx, -1, !0), af.qS(player, 2, 255)) : a72(384, L(76, [ag.a1X[player]]), 51, player, a73(210, 210, 255), bB.nx, -1, !0) : a7M(51, player) ?
			(a72(128, L(77, [ag.a1X[player]]), 52, player, bB.o0, "rgba(60,120,10,0.9)", -1, !0), af.qS(player, 2, 255)) : (a72(384, L(78, [ag.a1X[player]]), 50, player, bB.o0, "rgba(90,90,90,0.9)", -1, !0), af.qS(player, 2, 96))
	}, this.px = function(a0i, target) {
		var color = a73(210, 255, 210);
		1 < a0i.length ? a72(230, L(79, [a0i.length, ag.a1X[target]]), 66, target, color, bB.nx, -1, !0) : a72(230, L(80, [ag.a1X[a0i[0]], ag.a1X[target]]), 66, a0i[0], color, bB.nx, target, !0)
	}, this.a7c = function(player, target) {
		a72(230, L(81, [ag.a1X[player], ag.a1X[target]]), 66, player, bB.o0, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7d = function(id, gY) {
		a7L(id, gY)
	}, this.a12 = function(id, player) {
		a7M(id, void 0 === player ? aD.f2 : player)
	}, this.a7e = function(id) {
		for (var aB = a6q.length - 1; 0 <= aB; aB--)
			if (a6q[aB].id === id) return a6q[aB];
		return null
	}, this.po = function(a5v, a7f, player) {
		2 !== ag.a4I[aD.ep] && a72(200, 1 === a5v ? L(82, [ag.a1X[player]]) : L(83, [bA.rs.a0B(a5v), ag.a1X[player]]), 30, player, "rgb(190,255,190)", bB.nx, -1, !0)
	}, this.a7h = function(a5v, player) {
		2 !== ag.a4I[aD.ep] && (a7L(31, 0), a5v = " (" + bA.rs.a0B(a5v) + ") 💸", a72(150, a5v = bA.gR.jn(player) ? L(84) + a5v : L(85, [ag.a1X[player]]) + a5v, 31, player, bB.nr, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a11 = function(bu) {
		for (var ed = bf.kN(), aB = 2; 0 <= aB; aB--) 0 < a6u.vV[aB] && (bu || a6u.ed[aB] < ed - 220) && this.a7n(aB)
	}, this.a7n = function(id) {
		var qa, f5 = a6u.vV[id],
			player = a6u.a0i[id];
		a6u.vV[id] = 0, 1 === f5 ? (0 === id ? qa = L(92, [ag.a1X[player], ag.a1X[a6u.a6z[0]]]) : 1 === id ? qa = L(93, [ag.a1X[player]]) : 2 === id ? qa = L(94, [ag.a1X[player]]) : 3 === id && (qa = L(95, [ag.a1X[player]])), a7L(7, 0), a72(a6u
			.nH[id], qa, 7, a6u.a6z[id], bB.o0, bB.nx, -1, !0)) : (qa = L(0 === id ? 96 : 1 === id ? 97 : 98, [f5]), a7L(7, 0), a72(a6u.nH[id], qa, 7, player, bB.o0, bB.nx, -1, !1))
	}, this.a7N = function(id, hX, l3) {
		var ed = bf.kN(),
			f5 = a6u.vV[id] + 1;
		a6u.vV[id]++, a6u.a0i[id] = hX, a6u.a6z[id] = l3, 1 === f5 && (a6u.ed[id] = ed), (1 === f5 && (aD.a0x < 32 || 2 === aD.a0u) || 1 < f5 && (a6u.ed[id] < ed - 140 || 2 === aD.a0u)) && this.a7n(id)
	}, this.eY = function() {
		b2.eY();
		for (var jf = (jf = a6q.length - a6v) <= 1 ? 1 : jf * jf, aB = a6q.length - 1; 0 <= aB; aB--) 0 < a6q[aB].eT && (a6q[aB].eT -= jf, a6q[aB].eT <= 0) && (bf.dk = !0, a6q.splice(aB, 1));
		! function() {
			var gY, aB;
			if (128 !== a6w && !(++a6w < 128))
				for (gY = 5, aB = al.kw - 1; 0 <= aB; aB--) 1 === ag.a4I[al.l1[aB]] && 0 < gY-- && a72(240, L(95, [ag.a1X[al.l1[aB]]]), 1, al.l1[aB], bB.nr, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a11(!1)
	}, this.vW = function() {
		for (var y6, fE = z4(), aB = a6q.length - 1; 0 <= aB; aB--) y6 = fE - (aB + 1) * j, 50 === a6q[aB].id ? (vX.drawImage(a6q[aB].canvas, h.i - a6q[aB].i - a6t - a6r, y6), vX.drawImage(a6x, h.i - a6t - a6r, y6)) : vX.drawImage(a6q[aB].canvas,
			h.i - a6q[aB].i - a6r, y6)
	}
}

function cF() {
	var a7q, a7r, vY = "",
		xr = 0,
		xs = 0,
		a7p = -1,
		e6 = ["Team", "Zombie", "BR", "1v1"];

	function a7s() {
		for (var eU = new Date, a7t = eU.getUTCMinutes(), eU = eU.getUTCSeconds(), a7v = [], a7w = 0, aB = 0; aB < 6; aB++) a7v.push(a7w), a7v.push(a7w + 2), a7v.push(a7w + 5), a7v.push(a7w + 7), a7w += 10;
		for (var f5 = a7v.length, aB = 1; aB < f5 && !(a7t < a7v[aB]); aB++);
		aB %= f5;
		eU = (a7v[0] = 60) * (a7v[aB] - a7t) - eU;
		return eU !== a7p && (vY = e6[aB % 4] + " " + a7r + ": " + a7y(Math.floor(eU / 60)) + ":" + a7y(eU % 60), a7p = eU, xr = aQ.measureText(vY, a7q), xr += Math.floor(.4 * xs), 1)
	}

	function a7y(a7z) {
		return a7z < 10 ? "0" + a7z : String(a7z)
	}
	this.dd = function() {
		a7r = L(99)
	}, this.resize = function() {
		xr = Math.floor((a0.a1.iE() ? .53 : .36) * h.iF), xs = Math.floor(.065 * xr), a7q = bA.qt.sk(1, Math.floor(.9 * xs)), a7p += 1e3, a7s()
	}, this.eY = function() {
		a7s() && (bf.dk = !0)
	}, this.vW = function(fE) {
		vX.lineWidth = 1 + Math.floor(xs / 15), vX.translate(h.i - xs, fE + xr), vX.rotate(-Math.PI / 2), vX.fillStyle = bB.o0, vX.fillRect(0, 0, xr, xs), vX.strokeStyle = bB.nr, vX.strokeRect(0, 0, xr, xs + 10), vX.fillStyle = bB.nr, vX.font =
			a7q, bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 1), vX.fillText(vY, Math.floor(xr / 2), Math.floor(.59 * xs)), vX.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a5u, a80, a81, xs, a82, a83 = 0,
		a84 = 0;

	function a86(aB) {
		var a88 = !0,
			a00 = bB.o0,
			i = (1 === a5u[aB].id ? a5u[aB].z8.fillStyle = bB.ou : a5u[aB].jZ === aD.f2 ? a5u[aB].z8.fillStyle = bB.oB : (ac.a89(a5u[aB].jZ), a5u[aB].z8.fillStyle = bA.color.nu(bO.fe[0], bO.fe[1], bO.fe[2], .87), 400 < bA.r1.a3Q(bO.fe, 0, 2) && (
				a88 = !1, a00 = bB.nr)), a5u[aB].canvas.width),
			tH = (a5u[aB].z8.clearRect(0, 0, i, xs), a5u[aB].z8.fillRect(0, 0, i, xs), a5u[aB].z8.fillStyle = a00, ! function(z8, i, xs) {
				z8.fillRect(0, 0, i, 1), z8.fillRect(0, xs - 1, i, 1), z8.fillRect(0, 0, 1, xs), z8.fillRect(i - 1, 0, 1, xs)
			}(a5u[aB].z8, i, xs), a80 + 2 * xs < i && (a5u[aB].z8.fillRect(i - a80 - xs, 0, 1, xs), a5u[aB].z8.fillText(ag.a1X[a5u[aB].jZ], Math.floor((i - a80) / 2), Math.floor(.57 * xs))), 0 !== a5u[aB].id ? 0 : xs);
		a5u[aB].z8.fillText(bA.rs.a0B(a5u[aB].ho), Math.floor(i - a80 / 2 - tH), Math.floor(.57 * xs)),
			function(aB, i, tH, a88) {
				a5u[aB].z8.fillStyle = a88 ? bB.o2 : bB.ny;
				a88 = Math.floor(a80 * a5u[aB].ho / a5u[aB].a8F);
				a5u[aB].z8.fillRect(Math.floor(i - a80 - tH), xs - a82, a88, a82)
			}(aB, i, tH, a88), 0 === a5u[aB].id ? (a8C(aB, i, a88, a00), function(aB, i, a88) {
				a5u[aB].z8.strokeStyle = a88 ? bB.oI : bB.oS, a5u[aB].z8.fillRect(xs, 0, 1, xs);
				a88 = i - xs;
				a5u[aB].z8.beginPath(), a5u[aB].z8.moveTo(Math.floor(.3 * xs + a88), Math.floor(xs / 2)), a5u[aB].z8.lineTo(Math.floor(xs - .3 * xs + 0 + a88), Math.floor(xs / 2)), a5u[aB].z8.stroke(), a5u[aB].z8.beginPath(), a5u[aB].z8.moveTo(
					Math.floor(xs / 2 + a88), Math.floor(.3 * xs)), a5u[aB].z8.lineTo(Math.floor(xs / 2 + a88), Math.floor(xs - .3 * xs + 0)), a5u[aB].z8.stroke()
			}(aB, i, a88)) : a8C(aB, 2 * xs, a88, a00)
	}

	function a8C(aB, i, a88, a00) {
		a5u[aB].z8.strokeStyle = a5u[aB].a8G ? bB.o9 : a88 ? bB.oY : bB.oZ, a5u[aB].z8.fillStyle = a00, a5u[aB].z8.fillRect(i - xs, 0, 1, xs), a5u[aB].z8.lineWidth = Math.max(Math.floor(xs / 12), 3), a5u[aB].z8.lineCap = "round";
		a88 = .35;
		i = xs + 1, a5u[aB].z8.beginPath(), a5u[aB].z8.moveTo(Math.floor(i - a88 * xs + 0), Math.floor(a88 * xs)), a5u[aB].z8.lineTo(Math.floor(i - xs + a88 * xs), Math.floor(xs - a88 * xs + 0)), a5u[aB].z8.stroke(), a5u[aB].z8.beginPath(), a5u[aB]
			.z8.moveTo(Math.floor(i - xs + a88 * xs), Math.floor(a88 * xs)), a5u[aB].z8.lineTo(Math.floor(i - a88 * xs + 0), Math.floor(xs - a88 * xs + 0)), a5u[aB].z8.stroke()
	}

	function a8S(g, a8Q) {
		for (var ho, aB = a8Q - 1; 0 <= aB; aB--) ho = ad.gI(aD.ep, aB), g[aB].ho !== ho && (g[aB].ho = ho, g[aB].a8F = Math.max(ho, g[aB].a8F), g[aB].a87 = !0)
	}

	function a8W(g, a8U) {
		for (var tU = aD.ep << 3, a7U = bN.y.a7U, mH = bN.y.mH, a8Y = bN.y.a8Y, aB = a8U - 1; 0 <= aB; aB--) {
			var a8Z = a8Y[tU + aB],
				ho = a7U[a8Z];
			g[aB].ho !== ho ? (g[aB].ho = ho, g[aB].a8F = Math.max(ho, g[aB].a8F), g[aB].a87 = !0) : g[aB].a8G || mH[a8Z] % 64 != 5 || (g[aB].a8G = !0, g[aB].a87 = !0)
		}
	}

	function a85(a5x) {
		a5x.canvas = document.createElement("canvas"), bS.xR.font = a81;
		var i = a80;
		a5x.jZ < aD.f2 && 0 === a5x.id && (i += Math.floor(bS.xR.measureText(ag.a1X[a5x.jZ] + "000").width)), i += xs, 0 === a5x.id && (i += xs), a5x.canvas.width = i, a5x.canvas.height = xs, a5x.z8 = a5x.canvas.getContext("2d", {
			alpha: !0
		}), a5x.z8.font = a81, bA.qt.textBaseline(a5x.z8, 1), bA.qt.textAlign(a5x.z8, 1)
	}

	function a8M(aB) {
		return aU.a8a() ? h.i - a5u[aB].canvas.width - bc.gap : aU.fC
	}

	function a8N(aB) {
		return Math.floor(2 * bc.gap + (aU.a8a() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xs))
	}
	this.dd = function() {
		a83 = a84 = 0, a5u = [], this.resize()
	}, this.resize = function() {
		a81 = aN.a6d, xs = aN.fontSize + 5, xs = Math.floor(1.25 * xs), a0.a1.iE() && (xs = Math.floor(1.25 * xs)), a82 = Math.floor(.15 * xs), bS.xR.font = a81, a80 = Math.floor(bS.xR.measureText("02 000 000 0000").width);
		for (var aB = a5u.length - 1; 0 <= aB; aB--) a85(a5u[aB]), a86(aB)
	}, this.ml = function() {
		for (var aB = a5u.length - 1; 0 <= aB; aB--) a5u[aB].a87 && (a5u[aB].a87 = !1, a86(aB))
	}, this.hI = function(lf, lg) {
		if (2 !== aD.a0u && 0 !== ag.mz[aD.ep] && !aD.hE && !bA.gR.jn(aD.ep))
			for (var a8H, a8I, a8J, a8K = a0.a1.iE() ? xs : 0, a8L = a0.a1.iE() ? Math.floor(.15 * xs) : 0, aB = a5u.length - 1; 0 <= aB; aB--)
				if (a8H = a8M(aB), a8I = a8N(aB), a8J = a5u[aB].canvas.width, a8I - a8L <= lg && lg <= a8I + xs + a8L) {
					if (a8H - a8K <= lf && lf <= a8H + xs + a8K) return a5u[aB].a8G || (a5u[aB].a87 = !0, a5u[aB].a8G = !0, 0 === a5u[aB].id ? b8.hV.pZ(a5u[aB].jZ) : b8.hV.pY(a5u[aB].jZ)), !0;
					if (0 === a5u[aB].id && a8H + a8J - xs - a8K <= lf && lf <= a8H + a8J + a8K) return bV.a6M(3), b8.hV.hc(aR.hZ(), a5u[aB].jZ), !0
				} return !1
	}, this.eY = function() {
		var a3Y, a3Z, g, a8Q;
		0 === ag.mz[aD.ep] || bA.gR.jn(aD.ep) && !aD.hE || (a3Y = a5u.slice(0, a83), a3Z = a5u.slice(a83, a83 + a84), g = a3Y, a8Q = ad.gC(aD.ep), function(g, a8Q) {
			if (a83 !== a8Q) return 1;
			for (var aB = a8Q - 1; 0 <= aB; aB--)
				if (g[aB].jZ !== ad.gH(aD.ep, aB)) return 1;
			return
		}(g, a8Q) ? a8S(g = function(g, a8Q) {
			var aB, jZ, fP, ho, a74 = [];
			loop: for (aB = 0; aB < a8Q; aB++) {
				for (jZ = ad.gH(aD.ep, aB), fP = 0; fP < g.length; fP++)
					if (g[fP].jZ === jZ) {
						a74.push(g.splice(fP, 1)[0]);
						continue loop
					} ho = ad.gI(aD.ep, aB), a85(ho = {
					jZ: jZ,
					ho: ho,
					a8F: ho,
					id: 0,
					a87: !0,
					a8G: !1,
					canvas: null,
					z8: null
				}), a74.push(ho)
			}
			return a74
		}(g, a8Q), a8Q) : a8S(g, a8Q), a3Y = g, a3Z = function(g) {
			var a8U = bN.y.kU[aD.ep];
			return function(g, a8U) {
				if (a84 !== a8U) return 1;
				for (var tU = aD.ep << 3, mJ = bN.y.mJ, a8Y = bN.y.a8Y, aB = a8U - 1; 0 <= aB; aB--) {
					var a8Z = a8Y[tU + aB];
					if (g[aB].jZ !== mJ[a8Z]) return 1
				}
				return
			}(g, a8U) ? a8W(g = function(g, a8U) {
				var aB, jZ, fP, a74 = [],
					tU = aD.ep << 3,
					mJ = bN.y.mJ,
					a7U = bN.y.a7U,
					a8Y = bN.y.a8Y;
				loop: for (aB = 0; aB < a8U; aB++) {
					var a8Z = a8Y[tU + aB];
					for (jZ = mJ[a8Z], fP = 0; fP < g.length; fP++)
						if (g[fP].jZ === jZ) {
							a74.push(g.splice(fP, 1)[0]);
							continue loop
						} a8Z = a7U[a8Z], a85(a8Z = {
						jZ: jZ,
						ho: a8Z,
						a8F: a8Z,
						id: 1,
						a87: !0,
						a8G: !1,
						canvas: null,
						z8: null
					}), a74.push(a8Z)
				}
				return a74
			}(g, a8U), a8U) : a8W(g, a8U), g
		}(a3Z), a83 = a3Y.length, a84 = a3Z.length, a5u = a3Y.concat(a3Z))
	}, this.vW = function() {
		if (0 !== ag.mz[aD.ep] && (!bA.gR.jn(aD.ep) || aD.hE))
			for (var aB = a5u.length - 1; 0 <= aB; aB--) vX.drawImage(a5u[aB].canvas, a8M(aB), a8N(aB))
	}
}

function cH() {
	var a6q, kV, a8b, a8c, j, a6d, fontSize, a8d, a8e, a8f, a8g, canvas, z8, nC, a8h;

	function vn(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a8o() {
		aD.hz ? a8p + 4 * bc.gap + j + bh.a8q() > aR.fE ? vX.drawImage(canvas, 2 * bc.gap + bh.a8q(), a8p + 2 * bc.gap) : vX.drawImage(canvas, bc.gap, a8p + 3 * bc.gap + bh.a8q()) : vX.drawImage(canvas, bc.gap, a8p + 2 * bc.gap)
	}

	function a8i() {
		canvas.width = a6q[0].width + a8f, canvas.height = j + a8f, (z8 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6q[0].width + a8f, j + a8f), z8.translate(Math.floor(a8f / 2), Math.floor(a8f / 2)), z8.lineWidth = a8f, z8.fillStyle = 1 === a6q[0].a8n ? bB.o5 : bB.nx, a8r(), z8.fill(), z8.strokeStyle = 1 === a6q[0].a8n ? bB.nr :
			bB.o0, a8r(), z8.stroke(), bA.qt.textAlign(z8, 1), bA.qt.textBaseline(z8, 1), z8.fillStyle = 1 === a6q[0].a8n ? bB.nr : bB.o0, z8.font = a6d[0], z8.fillText(vn(a6q[0].a8m), Math.floor(a6q[0].width / 2), Math.floor(.72 * a8d[0] * j)), z8
			.font = a6d[1], z8.fillText(a6q[0].qa, Math.floor(a6q[0].width / 2), Math.floor((a8d[0] + .48 * a8d[1]) * j))
	}

	function a8r() {
		z8.beginPath(), z8.moveTo(a8g, 0), z8.lineTo(a6q[0].width - a8g, 0), z8.lineTo(a6q[0].width, a8g), z8.lineTo(a6q[0].width, j - a8g), z8.lineTo(a6q[0].width - a8g, j), z8.lineTo(a8g, j), z8.lineTo(0, j - a8g), z8.lineTo(0, a8g), z8.closePath()
	}
	this.dd = function() {
		kV = 4, a8b = a8c = nC = 0, a6q = [], a6d = new Array(2), fontSize = new Array(2), (a8d = new Array(2))[0] = .3, a8d[1] = .7, a8e = new Array(4), canvas = document.createElement("canvas"), a8h = bf.eT + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iE() ? .062 : .047) * h.iF), fontSize[0] = Math.floor(.85 * a8d[0] * j), fontSize[1] = Math.floor(.85 * a8d[1] * j), a6d[0] = bA.qt.sk(1, fontSize[0]), a6d[1] = bA.qt.sk(1, fontSize[1]), aB = a8e.length -
			1; 0 <= aB; aB--) a8e[aB] = this.measureText(vn(aB) + "000", a6d[0]);
		if (a8f = Math.floor(1 + .05 * j), a8g = Math.floor(.2 * j), 0 < a6q.length) {
			for (aB = a6q.length - 1; 0 <= aB; aB--) i = this.measureText(a6q[aB].qa + "00", a6d[1]), a6q[aB].width = i < a8e[aB] ? a8e[aB] : i;
			a8i()
		}
	}, this.eY = function() {
		0 !== kV && (4 === kV ? bf.eT > a8h && (kV = 0, 1 === aD.a0u) && aQ.a1H(bS.xL.xM[bS.el].name, 3, 1, 9) : (1 === kV ? (0 === a8b && (a8i(), a8b = 1e-4), 1 <= (a8b += .002 * (bf.eT - nC)) && (a8c = 0, kV = 2, a8b = 1), bf.dk = !0) : 2 ===
			kV ? ((a8c += (bf.eT - nC) / 1e3) > a6q[0].nH || 1 < a8c && 1 < a6q.length) && (kV = 3) : 3 === kV && ((a8b -= .002 * (bf.eT - nC)) <= 0 && (a8b = 0, a6q.shift(), kV = 0 < a6q.length ? 1 : 0), bf.dk = !0), nC = bf.eT))
	}, this.measureText = function(qa, a6d) {
		return vX.font = a6d, Math.floor(vX.measureText(qa).width)
	}, this.ec = function(a8l, aB) {
		this.a1H(ag.a1X[a8l], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1H = function(qa, a8m, a8n, nH) {
		var i;
		qa.length && (i = (i = this.measureText(qa + "00", a6d[1])) < a8e[a8m] ? a8e[a8m] : i, a6q.push({
			qa: qa,
			width: i,
			a8m: a8m,
			a8n: a8n,
			nH: nH
		}), 0 === kV) && (a8b = 0, kV = 1, nC = bf.eT)
	}, this.vW = function() {
		0 !== kV && 0 !== a8b && (a8b < 1 ? (vX.globalAlpha = a8b, a8o(), vX.globalAlpha = 1) : a8o())
	}
}

function cq() {
	var j, canvas, z8, a8s, a8t, a8u, a8v, a87, a8w, a8x, a8y, a8z, a7a = !1,
		a3m = (this.hr = !1, this.i = 0, new Array(2)),
		a90 = 0;

	function mm() {
		var i = aw.i,
			lL = (a87 = !1, z7(z8, i, j), Math.floor(i / 2));
		1 === a8s ? (z8.fillStyle = bB.oK, z8.fillRect(lL, 0, lL, j)) : -1 === a8s && (z8.fillStyle = bB.oa, z8.fillRect(0, 0, lL, j)), z9(z8, i, j, 2);
		var lL = (lL = Math.floor(.25 * j)) < 2 ? 2 : lL,
			a7j = (z8.fillStyle = bB.o6, Math.floor((j - 4) * a8t[1] / a8u[1]));
		0 < a7j && z8.fillRect(2, j - 2 - a7j, lL, a7j), 0 < (a7j = Math.floor((j - 4) * a8t[0] / a8u[0])) && z8.fillRect(i - 2 - lL, j - 2 - a7j, lL, a7j);
		lL = (lL = Math.floor(j / 8)) < 2 ? 2 : lL, zB(z8, Math.floor(.4 * j), 0, j, lL, .5, !1), zB(z8, Math.floor(i - 1.4 * j), 0, j, lL, .5, !0), a7j = 1.1 * j / a3m[0].width;
		z8.imageSmoothingEnabled = !0, z8.setTransform(a7j, 0, 0, a7j, (i - a7j * a3m[0].width) / 2, -.05 * j), z8.drawImage(a3m[+a7a], 0, 0), z8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a95() {
		a8z = -1, a7a = ah.a96(), aN.a5G(257), aN.a7Z(a7a), aw.hr = !0, a87 = !0, a8w = 360;
		for (var fX, eU = 0, aB = al.kw - 1; 0 <= aB; aB--) bA.gR.jn(al.l1[aB]) || (eU += ag.gt[al.l1[aB]]);
		a7a ? a8u[0] = Math.max(bL.fW(3 * eU, 4), 1) : aD.hz ? (fX = 9 === aD.ki && 8 === bg.kn[bh.kz()] ? 80 : (fX = bL.fW(100 * bh.kx(), aD.kA), bL.iD(200 - 2 * fX, 40, 100)), fX = bL.fW(fX * eU, 100), a8u[0] = Math.max(fX, 1)) : 8 === aD.ki ? a8u[
			0] = Math.max(bL.fW(3 * eU, 4), 1) : a8u[0] = Math.max(bL.fW(3 * eU, 5), 1), a8u[1] = Math.max(eU - a8u[0], 1)
	}

	function a91() {
		a8y = bf.kN(), a87 = !0, a8w = a8s = 0, a8v = [], aw.hr = !1, aN.a12(247), a8t[0] = a8t[1] = 0, aN.a5G(673)
	}

	function z4() {
		return aR.a7F(aN.a7B()) ? __fx.settings.keybindButtons ? aR.fE - 2 * (j + bc.gap) : aR.fE - j - bc.gap : bC.a7F(aN.a7E()) ? bC.z4() - j - bc.gap : h.j - j - bk.a62() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3m[aB] = bA.canvas.ze(ab.get(3), 8 - aB, bB.pD), a3m[aB] = bA.canvas.a3o(a3m[aB])
	}, this.dd = function() {
		a8y = -1e4, a8x = a90 = 0, a8z = -1, this.hr = !1, a87 = a7a = !1, a8t = [a8s = a8w = 0, 0], a8u = [1, 1], a8v = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, z8 = canvas.getContext("2d", {
			alpha: !0
		}), mm()
	}, this.ml = function() {
		a87 && mm()
	}, this.hI = function(fC, fE) {
		return !!this.hr && !(fC < h.i - this.i - bc.gap || fE < z4() || (aD.hE || this.hs(aD.ep) && (aM.hF && aM.a33(), b8.hV.ht(fC > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eY = function() {
		0 < a8x ? 0 === --a8x && a91() : this.hr ? 180 == --a8w && 3 * a8t[0] < a8u[0] ? a91() : a8t[0] >= a8u[0] ? a7a ? bR.a0W.a0p() : bR.a0W.a0t() : a8t[1] >= a8u[1] ? a8x = 4 : a8w <= 0 && a91() : ! function() {
			var a98 = bf.kN();
			if (a98 % 40 == 14) {
				if (a90) return !(a98 < a90) && !(a98 < a8y + 535) && (a90 = a98 + 1071, bA.gR.a4L()) ? (a95(), 1) : 0;
				(1 === al.kw || (aD.hz ? bh.kx() : ag.gt[m1[0]]) >= bL.fW(96 * aD.kA, 100)) && (a90 = a98 + 535)
			}
			return
		}() && 0 <= a8z && (aN.a1I(250, L(104, [ag.a1X[a8z]]), 673, a8z, bB.o0, bB.nx, -1, !0), a95())
	}, this.a0v = function() {
		this.hr && a8t[0] < a8u[0] && a91()
	}, this.qT = function(player, a99) {
		var a9A = L(a99 ? 105 : 106, [ag.a1X[player]]),
			a9A = (aN.a1I(450, a9A, 257, player, a99 ? bB.oI : bB.oX, bB.nx, -1, !0), a8v.push(player), a87 = !0, aD.kk ? Math.max(a8u[0], a8u[1]) : ag.gt[player]),
			a9A = Math.max(a9A, 1);
		a99 ? a8t[0] += a9A : a8t[1] += a9A, player === aD.ep && (a8s = a99 ? 1 : -1)
	}, this.vW = function() {
		var fE;
		this.hr && (fE = z4(), vX.drawImage(canvas, h.i - this.i - bc.gap, fE))
	}, this.hu = function(player) {
		if (0 !== a8w) return !1;
		if (!bA.gR.hG(1)) return !1;
		if (!bA.gR.hH(player)) return !1;
		if (10 <= kB[player] && !bA.gR.a4e(player, 9)) return !1;
		if (!aD.kk) {
			player = bf.kN();
			if (player < a8y + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hs = function(gd) {
		if (!bA.gR.hG(1)) return !1;
		if (!bA.gR.hH(gd)) return !1;
		if (!this.hr) return !1;
		for (var aB = a8v.length - 1; 0 <= aB; aB--)
			if (a8v[aB] === gd) return !1;
		return !0
	}, this.hq = function(player) {
		a8z = player
	}
}

function cI() {
	var i, fC, a9C, canvas, z8, hr, ih, a57, a6d, a87, a9D = 11 / 12;

	function a9F() {
		var a8E = Math.floor(ih * (i - 2 * a9C)),
			a9I = 1 + Math.floor(.0625 * aR.j),
			a9J = 1 + Math.floor(.3 * aR.j),
			a9K = Math.floor(.55 * aR.j);
		z8.clearRect(0, 0, i, aR.j), z8.fillStyle = bB.nw, z8.fillRect(0, 0, a9C, aR.j), z8.fillRect(a9C + a8E, 0, i - a9C - a8E, aR.j), z8.fillStyle = ih < 1 / 3 ? "rgba(" + Math.floor(3 * ih * 130) + ",130,0,0.85)" : ih < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ih - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ih - 2 / 3) * 130) + ",0.85)", z8.fillRect(a9C, 0, a8E, aR.j), z8.fillStyle = bB.o0, z8.fillRect(0, 0, i, 1), z8.fillRect(0, aR.j - 1, i, 1), z8
			.fillRect(0, 0, 1, aR.j), z8.fillRect(a9C, 0, 1, aR.j), z8.fillRect(a9C + a8E, 0, 1, aR.j), z8.fillRect(i - a9C, 0, 1, aR.j), z8.fillRect(i - 1, 0, 1, aR.j), z8.fillRect(Math.floor(.25 * aR.j) + a9J, Math.floor((aR.j - a9I) / 2), aR.j -
				2 * a9J, a9I), z8.fillRect(Math.floor(i - 1.25 * aR.j) + a9J, Math.floor((aR.j - a9I) / 2), aR.j - 2 * a9J - a9J % 2, a9I), z8.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9I) / 2), a9J, a9I, aR.j - 2 * a9J - a9J % 2),
			a57 = bA.gR.ig(aD.ep, aR.hZ()), z8.fillText(bA.rs.a0B(a57) + " (" + bA.rs.a50(100 * ih, +(ih < .1)) + ")", Math.floor(.5 * i), a9K)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ih = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2z(arg1);

	function a9P(a3L) {
		return !(1 < a3L && 1 === ih || (1 < a3L && a3L * ih - ih < 1 / 1024 ? a3L = (ih + 1 / 1024) / ih : a3L < 1 && ih - a3L * ih < 1 / 1024 && (a3L = (ih - 1 / 1024) / ih), ih = bL.iD(ih * a3L, 1 / 1024, 1), a9F(), 0))
	}

	function a9Q(lf) {
		return ih !== (ih = bL.iD((lf - fC - a9C) / (i - 2 * a9C), 1 / 1024, 1)) && (a9F(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9F(), bf.dk = !0
	}, this.fE = 0, this.hJ = !1, this.dd = function() {
		hr = !aD.hT && !aD.hE, a87 = !1, ih = .5, a57 = 0, this.hJ = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iE() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iF), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.iE() ? .65 : .389) * h.iF), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9C = Math.floor(3 * this.j / 2), a6d =
			bA.qt.sk(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vX), canvas.height = this.j, (z8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6d, bA.qt.textBaseline(z8, 1), bA.qt.textAlign(z8, 1), this.a9E(), a9F()
	}, this.a9E = function() {
		fC = a0.a1.iE() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fE = h.j - this.j - bk.a62() * bc.gap
	}, this.ml = function() {
		a87 && (a87 = !1, a9F())
	}, this.hr = function() {
		return !(!hr || aM.hF && fC < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a7F = function(a9L) {
		return !!this.hr() && fC + i > h.i - a9L - bc.gap
	}, this.a5E = function() {
		hr = !aD.hE
	}, this.a91 = function() {
		hr = !1
	}, this.hZ = function() {
		return bL.iD(Math.floor(1024 * ih + .5) - 1, 0, 1023)
	}, this.a2w = function(lf, lg) {
		return this.hr() && fC < lf && lf < fC + i && lg > this.fE
	}, this.hI = function(lf, lg) {
		if (!this.hr()) return !1;
		if (!(__fx.settings.keybindButtons && lg > this.fE - Math.floor(bc.gap / 4) - this.j && lg < this.fE - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lf - fC))) {
			if (!aR.a2w(lf, lg)) return !1;
			aS.nV = !1, ! function(sV, lf, lg) {
				if (function(lf, lg) {
						return fC < lf && lf < fC + a9C && lg > aR.fE
					}(lf, lg)) return a9P(a9D);
				if (function(lf, lg) {
						return fC + i - a9C < lf && lf < fC + i && lg > aR.fE
					}(lf, lg)) return a9P(1 / a9D);
				return sV.hJ = !0, a9Q(lf)
			}(this, lf, lg) || (bf.dk = !0)
		}
		return !0
	}, this.a2z = function(nc) {
		0 !== aD.a0u && this.hr() && a9P(nc) && (bf.dk = !0)
	}, this.a2V = function(deltaY) {
		var nc;
		return !(0 === deltaY || !this.hr()) && a9P(nc = 0 < deltaY ? (nc = 400 / (400 + deltaY)) < a9D ? a9D : nc : 1 / a9D < (nc = (400 - deltaY) / 400) ? 1 / a9D : nc)
	}, this.a2S = function(lf) {
		return !!this.hJ && a9Q(lf)
	}, this.a2s = function() {
		this.hJ = !1
	}, this.eY = function() {
		this.hr() && a57 !== bA.gR.ig(aD.ep, this.hZ()) && (a87 = !0)
	}, this.vW = function() {
		this.hr() && (vX.drawImage(canvas, fC, this.fE), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vX, fC, this.fE)
	}
}

function d0() {
	var canvas, z8, a9R, font, a9S = 0,
		a9T = !1,
		a9U = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9V = 5;

	function a9c() {
		if (a9T) {
			var aB, f5 = a9U.length,
				a9K = Math.floor(.5 * a9R.j),
				j = f5 * a9K,
				fC = Math.floor(Math.floor(a9R.fC) + .3 * a9R.i - .5),
				fE = Math.floor(Math.floor(a9R.fE) - j),
				i = Math.floor(.4 * a9R.i + 2.5);
			for (vX.fillStyle = bB.nw, vX.fillRect(fC, fE, i, j), vX.fillStyle = bB.oP, vX.fillRect(fC, fE + a9V * a9K, i, a9K), vX.fillStyle = bB.o0, vX.fillRect(fC, fE, 2, j), vX.fillRect(fC, fE, i, 2), vX.fillRect(fC + i - 2, fE, 2, j), aB =
				1; aB < f5; aB++) vX.fillRect(fC, fE + aB * a9K, i, 2);
			for (vX.fillStyle = bB.o0, bA.qt.textAlign(vX, 1), bA.qt.textBaseline(vX, 1), vX.font = bA.qt.sk(0, .6 * a9K), fC += .5 * i, aB = 0; aB < f5; aB++) vX.fillText(a9k(aB), fC, fE + (aB + .6) * a9K)
		}
		vX.drawImage(canvas, Math.floor(a9R.fC), Math.floor(a9R.fE))
	}

	function mm(sV) {
		var fC, nQ, nR, a9K;
		z8.clearRect(0, 0, Math.floor(a9R.i), Math.floor(a9R.j)), z8.fillStyle = bB.nw, z8.fillRect(0, 0, Math.floor(a9R.i), Math.floor(a9R.j)), aD.nT && (z8.fillStyle = bB.oP, z8.fillRect(0, 0, Math.floor(.3 * a9R.i), Math.floor(a9R.j))), z8
			.fillStyle = bB.o0, z8.fillText("Hide UI", .15 * a9R.i, .5 * a9R.j), z8.fillRect(Math.floor(.3 * a9R.i - .5), 0, 2, Math.floor(a9R.j)), fC = .5 * a9R.i, z8.fillText("Replay Speed", fC, .31 * a9R.j), z8.fillText(a9k(a9V), fC, .69 * a9R.j),
			z8.fillRect(Math.floor(.7 * a9R.i - .5), 0, 2, Math.floor(a9R.j)), sV.a5l ? (fC = Math.floor(.02 * a9R.i), sV = Math.floor(.025 * a9R.i), nQ = Math.floor(.85 * a9R.i - fC - .5 * sV), nR = Math.floor(.25 * a9R.j), a9K = Math.floor(a9R.j) -
				2 * nR, z8.fillRect(nQ, nR, fC, a9K), z8.fillRect(nQ + fC + sV, nR, fC, a9K)) : function() {
				var i = Math.floor(.46 * a9R.j),
					j = Math.floor(.23 * a9R.j),
					fC = Math.floor(.85 * a9R.i - .5 * i + i / 12),
					fE = Math.floor(.5 * a9R.j - j);
				z8.beginPath(), z8.moveTo(fC, fE), z8.lineTo(fC + i, fE + j), z8.lineTo(fC, fE + (j << 1)), z8.fill()
			}(), z8.fillRect(0, 0, Math.floor(a9R.i), 2), z8.fillRect(0, 0, 2, Math.floor(a9R.j)), z8.fillRect(0, Math.floor(a9R.j) - 2, Math.floor(a9R.i), 2), z8.fillRect(Math.floor(a9R.i - 2), 0, 2, Math.floor(a9R.j))
	}

	function a9k(aB) {
		return 5 === aB ? "Normal" : "" + a9U[aB]
	}
	this.a5l = !1, this.dd = function() {
		aD.hE && (a9V = 5, this.a5l = !1, a9T = !1, a9R = new rU([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9W = function() {
		return a9U[a9V]
	}, this.z4 = function() {
		return a9R.fE
	}, this.a7F = function(a9L) {
		return !!aD.hE && a9R.fC + a9R.i > h.i - a9L - bc.gap
	}, this.resize = function() {
		aD.hE && (a9R.resize(), a9R.fE -= (bk.a62() - 1) * bc.gap, font = bA.qt.sk(0, .3 * a9R.j), (canvas = document.createElement("canvas")).width = Math.floor(a9R.i), canvas.height = Math.floor(a9R.j), (z8 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qt.textAlign(z8, 1), bA.qt.textBaseline(z8, 1), mm(this))
	}, this.a32 = function(a9X) {
		0 === aD.a0u || t.hr() || a9X !== aD.nT && (aD.nT = a9X, bh.resize(), bf.dk = !0, aD.hE) && (a9S = bf.eT + 2e3, mm(this))
	}, this.hI = function(fC, fE) {
		if (!aD.hE) return !1;
		if (fC < a9R.fC || fE < a9R.fE || fC > a9R.fC + a9R.i) return a9T && function(sV, fC, fE) {
			var f5 = a9U.length,
				a9K = Math.floor(.5 * a9R.j),
				j = f5 * a9K,
				nQ = Math.floor(Math.floor(a9R.fC) + .3 * a9R.i - .5),
				j = Math.floor(Math.floor(a9R.fE) - j),
				i = Math.floor(.4 * a9R.i + 2.5);
			return a9T = !1, bf.dk = !0, fC < nQ || nQ + i < fC || fE < j || (a9V = a9b(0, Math.floor((fE - j) / a9K), f5 - 1), mm(sV)), !0
		}(this, fC, fE);
		if ((fC -= a9R.fC) < .3 * a9R.i) a9T = !1, this.a32(!aD.nT);
		else {
			if (fC < .7 * a9R.i) return a9T = !a9T, bf.dk = !0;
			this.a34(!1)
		}
		return !0
	}, this.a34 = function(a9Z) {
		2 === aD.a0u ? (this.a32(!1), t.u(3)) : (a9T = !1, this.a5l = !this.a5l, this.a5l ? (aM.hF && aM.a33(), a0.a1.setState(1)) : a9Z || aM.a6j(), bf.dk = !0, mm(this))
	}, this.a9a = function() {
		this.a5l = !1, aM.a6j(), bf.dk = !0, mm(this)
	}, this.a2l = function(fC, fE) {
		return !!aD.nT && (0 <= aM.hI(fC, fE) || (aD.hE ? ((bf.eT > a9S || !this.hI(fC, fE)) && aS.hI(fC, fE), bf.dk = !0, a9S = bf.eT + 2e3) : aS.hI(fC, fE)), !0)
	}, this.eY = function() {
		aD.hE && aD.nT && bf.eT > a9S - 1e3 && bf.eT < a9S && (bf.dk = !0)
	}, this.a13 = function() {
		aD.hE && (this.a5l = !1, bf.dk = !0, mm(this))
	}, this.vW = function() {
		if (aD.hE) {
			if (aD.nT) {
				if (bf.eT > a9S) return;
				if (bf.eT > a9S - 1e3) return vX.globalAlpha = a9b(0, (1e3 - (bf.eT - (a9S - 1e3))) / 1e3, 1), a9c(), void(vX.globalAlpha = 1)
			}
			a9c()
		}
	}
}

function cJ() {
	var a9l, a9m, i, fC, fE, a9n, a9o;
	this.dd = function() {
		a9l = new Array(2), a9m = new Array(2), this.nV = !1, a9o = a9n = ij = ii = 0, iG = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iE() ? .072 : .0502) * h.iF)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9l[aB] = document.createElement("canvas"), a9l[aB].width = i, a9l[aB].height = i, a9m[aB] = a9l[aB].getContext("2d", {
			alpha: !0
		});
		this.a9E(),
			function() {
				for (var aA5 = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9m[aB].clearRect(0, 0, i, i), a9m[aB].fillStyle = bB.nt, a9m[aB].beginPath(), a9m[aB].arc(i / 2, i / 2, i / 2 - aA5, 0, 2 * Math.PI), a9m[aB].fill(), a9m[aB]
					.lineWidth = aA5, a9m[aB].fillStyle = bB.o0, a9m[aB].strokeStyle = bB.o0, a9m[aB].beginPath(), a9m[aB].arc(i / 2, i / 2, i / 2 - aA5, 0, 2 * Math.PI), a9m[aB].stroke(), zB(a9m[aB], 0, 0, i, aA5, .3, 0 === aB)
			}()
	}, this.z3 = function() {
		return -ii / iG
	}, this.z4 = function() {
		return -ij / iG
	}, this.nf = function(a9s, iM) {
		ii = iG * a9s - iM
	}, this.ng = function(a9t, iN) {
		ij = iG * a9t - iN
	}, this.hI = function(a9r, a7G) {
		return aD.nT || ! function(a9r, a7G) {
			return Math.pow(a9r - (fC + i / 2), 2) + Math.pow(a7G - (fE + i / 2), 2) < i * i / 4 || Math.pow(a9r - (fC + i / 2), 2) + Math.pow(a7G - (fE + 2 * i), 2) < i * i / 4
		}(a9r, a7G) || bj.eQ.data[8].value ? (aH.ni() && (this.nV = !0, a9n = a9r, a9o = a7G), !1) : a7G < fE + 1.25 * i ? this.a2V(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2V(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2S = function(a9r, a7G) {
		var a9u, a9v, iP, iS;
		return !aH.ni() || (a9u = ii, a9v = ij, ii += iP = a9n - a9r, ij += iS = a9o - a7G, af.a2S(iP, iS), this.a9w(), a9n = a9r, a9o = a7G, a9u !== ii) || a9v !== ij
	}, this.a2V = function(lf, lg, deltaY) {
		var nc;
		if (aH.ni()) {
			if (0 < deltaY) nc = (nc = 500 / (500 + deltaY)) < .5 ? .5 : nc;
			else {
				if (!(deltaY < 0)) return !1;
				nc = 2 < (nc = (500 - deltaY) / 500) ? 2 : nc
			}
			this.a9x(lf, lg, nc), bf.dk = !0
		}
		return !0
	}, this.a9x = function(fC, fE, ej) {
		var a3L;
		ej = a3L = (a3L = 1024 < (a3L = ej) * iG ? 1024 / iG : a3L) * iG < .125 ? .125 / iG : a3L, af.zoom(ej, fC, fE),
			function(a3L, lf, lg) {
				iG *= a3L, ii = (ii + lf) * a3L - lf, ij = (ij + lg) * a3L - lg, aS.a9w()
			}(ej, fC, fE)
	}, this.a9w = function() {
		var aA0 = h.i / 16,
			aA1 = 0,
			aA2 = h.j / 16,
			aA3 = 0;
		ii < -h.i + aA0 && (aA1 = -h.i + aA0 - ii), ii > iG * bS.fG - aA0 && (aA1 = iG * bS.fG - aA0 - ii), ij < -h.j + aA2 && (aA3 = -h.j + aA2 - ij), ij > iG * bS.fH - aA2 && (aA3 = iG * bS.fH - aA2 - ij), ii += aA1, ij += aA3, ba.nh(), af.aA4(
			aA1, aA3)
	}, this.a9E = function() {
		fC = h.i - i - bc.gap, fE = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vW = function() {
		bj.eQ.data[8].value || (vX.drawImage(a9l[0], fC, fE), vX.drawImage(a9l[1], fC, Math.floor(fE + 3 * i / 2)))
	}
}

function cK() {
	var g, aA6, aA7, aA8, gap, aA9, aAA, aAB, aAC, aAD, a6d, aAE, hA, aAF, a8E, aAG, aAH;

	function aAL() {
		aA8 = Math.floor(.2 * (a0.a1.iE() ? .07 : .035) * h.iF), aA8 = a7D(a0.a1.iE() ? 3 : 1, aA8);
		var aAO = h.i / (g.length + gap);
		aA8 = aA8 < aAO ? aAO : aA8, a8E = Math.floor((1 - gap) * aA8), aA6 = 0, aAP()
	}

	function aAP() {
		aA6 = (aA6 = aA6 < -20 ? -20 : aA6) > (g.length - 15) * aA8 ? (g.length - 15) * aA8 : aA6, aAA = Math.floor(aA6 / aA8), aAB = (aAB = aAA + Math.floor(h.i / aA8)) > g.length - 1 ? g.length - 1 : aAB, aAA = (aAA = aAB < aAA ? aAB : aAA) < 0 ?
			0 : aAA;
		var lL = aAB;
		aA9 = aA7 / g[lL];
		for (var aB = aAB - 1; aAA <= aB; aB--) g[aB] > g[lL] && (lL = aB, aA9 = aA7 / Math.pow(g[aB], aAF))
	}

	function aAS(fC) {
		fC = Math.floor((aA6 + h.i - fC - gap * aA8) / aA8);
		return (fC = fC < -1 ? -1 : -1 === fC ? 0 : fC > g.length - 1 ? -1 : fC) !== aAC && (aAC = fC, -1 === aAG && 0 === aAC && aT.aAI && (aAG = setInterval(aAT, 100)), 1)
	}

	function aAU(aB) {
		var aAW = Math.floor(aA9 * Math.pow(g[aB], aAF));
		vX.fillRect(aA6 + h.i - (aB + 1) * aA8, h.j - aAW, a8E, aAW)
	}

	function aAT() {
		var gd;
		0 !== (aAC = 8 === aa.a29() ? -1 : aAC) ? (aAH = (new Date).getTime(), clearInterval(aAG), aAG = -1) : (gd = g[1] / 864e3, -1 !== aAH && (gd += ((new Date).getTime() - aAH) * g[1] / 864e5, aAH = -1), 0 < gd && (g[0] += Math.floor(gd), bf
			.dk = !0))
	}
	this.aAI = !1, this.dd = function() {
		aAH = aAG = -1, aAC = -(aAF = 1), this.aAJ = !1, hA = 0, aAE = new Date, aA6 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aA7 = Math.floor(.15 * h.j), aAD = (aAD = Math.floor((a0.a1.iE() ? .018 : .0137) * h.iF)) < 2 ? 2 : aAD, a6d = bA.qt.sk(1, aAD), aAL()
	}, this.aAM = function(aAN) {
		var aB;
		for (this.aAI = !0, aB = 0; aB < aAN.length; aB++) g.unshift(aAN[aB]);
		aAL(), bf.dk = !0
	}, this.aAQ = function() {
		aAP()
	}, this.a2S = function(fC, fE) {
		fE > h.j - .6 * aA7 ? this.aAJ ? fC !== hA && (aA6 += fC - hA, hA = fC, aAP(), aAS(fC), this.aAJ = -1 !== aAC, bf.dk = !0) : aAS(fC) && (bf.dk = !0) : this.ru()
	}, this.ru = function() {
		-1 !== aAC && (this.aAJ = !1, aAC = -1, bf.dk = !0)
	}, this.a2V = function(fC, deltaY) {
		-1 !== aAC && (aA6 += Math.floor(deltaY), aAP(), aAS(fC), bf.dk = !0)
	}, this.hI = function(fC, fE) {
		this.a2S(fC, fE), -1 !== aAC && (hA = fC, this.aAJ = !0)
	}, this.a2r = function() {
		-1 !== aAC && (this.aAJ = !1)
	}, this.vW = function() {
		vX.fillStyle = bB.o3;
		for (var aAX, month, eU, tI, aAa, aAb, nR, aAc, aAd, aB = aAB; aAA <= aB; aB--) aAU(aB);
		this.aAI && 0 === aAA && (vX.fillStyle = bB.oa, aAU(0)), -1 !== aAC && (vX.fillStyle = bB.o2, aAU(aAC)), -1 !== aAC && (vX.font = a6d, bA.qt.textBaseline(vX, 2), (eU = new Date).setTime(aAE.getTime() - 1e3 * aAC * 60 * 60 * 24), month =
			"month", aAX = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eU), aAX = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eU)), aAX = aAX + ", " + eU.getUTCDate() + " " + month + " " + eU.getFullYear(), month = 1 === g[aAC] ? L(107) : L(108), month = bA.rs.a0B(g[aAC]) + " " + month, eU = Math.floor(vX.measureText(aAX).width), tI = Math
			.floor(vX.measureText(month).width), aAa = Math.floor(.5 * (eU + aAD)), aAb = (aAb = aA6 + h.i - (aAC + 1) * aA8) < aAa ? aAa : aAb > h.i - aAa ? h.i - aAa : aAb, nR = h.j - Math.floor(aA9 * Math.pow(g[aAC], aAF)), aAc = Math
			.floor(1.1 * aAD), aAd = nR > h.j - aAc ? h.j - aAc : nR, vX.fillStyle = bB.nx, vX.fillRect(h.i - tI - aAD, aAd - aAc, tI + aAD, aAc), vX.fillRect(aAb - aAa, h.j - aAc, eU + aAD, aAc), vX.fillStyle = bB.o0, bA.qt.textAlign(vX, 2),
			vX.fillText(month, Math.floor(h.i - .5 * aAD), aAd), bA.qt.textAlign(vX, 1), vX.fillText(aAX, aAb, h.j), vX.strokeStyle = bB.o4, vX.lineWidth = 1, vX.beginPath(), vX.moveTo(0, nR), vX.lineTo(h.i, nR), vX.closePath(), vX.stroke())
	}
}

function cL() {
	var a6d, i, fE, aAe, aAf, aAg, canvas, z8, a87, a4S, aAh, aAi, aAj, aAk;
	this.fC = 0, this.j = 0, this.dd = function() {
		aAg = aD.a5M, aAi = "rgba(0,100,0,0.8)", aAj = "rgba(150,0,0,0.8)", a87 = aAh = !0, a4S = ag.h7[aD.ep], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iE() ? .305 : .24) * h.iF), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6d = bA.qt.sk(1, Math.floor(.8 * this.j)), aAf = bA.qt.sk(1, Math.floor(.45 * this.j)), aAk = Math.floor(.5 * this.j), bS.xR
			.font = a6d, fE = bc.gap, aAe = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, z8 = canvas.getContext("2d", {
				alpha: !0
			}), bA.qt.textBaseline(z8, 1), bA.qt.textAlign(z8, 1), this.aAl()
	}, this.a8a = function() {
		return a0.a1.iE() && h.i < 1.2 * h.j
	}, this.a9E = function() {
		this.a8a() ? this.fC = h.i - i - bc.gap : this.fC = Math.floor(aV.aAm() + (h.i - aV.aAm() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.ml = function() {
		a87 && (a87 = !1, this.aAl())
	}, this.aAl = function() {
		z8.font = a6d, z8.clearRect(0, 0, i, this.j), z8.fillStyle = aAh ? aAi : aAj, z8.fillRect(0, 0, i, this.j), z8.fillStyle = bB.o2;
		var ed = this.aAn(),
			aAp = (this.aAo(), z8.fillStyle = ag.h7[aD.ep] >= ae.k6(aD.ep) ? bB.oX : bB.o0, bA.rs.a0B(a4S)),
			aAp = (z8.fillText(aAp, Math.floor(i / 2), aAk), z8.measureText(aAp).width),
			ed = (z8.font = aAf, z8.fillStyle = 9 === ed ? bB.p7 : bB.o0, ae.aAr),
			aAs = "+" + ed,
			tI = z8.measureText(aAs).width,
			aAt = Math.floor(this.j / 12),
			aAp = .5 * (i + aAp) + aAt;
		(aAp + tI + aAe <= i || 1e3 <= ed && (aAs = "+" + Math.floor(ed / 1e3) + "K", aAp + (tI = z8.measureText(aAs).width) + aAe <= i)) && z8.fillText(aAs, Math.floor(aAp + .5 * tI), Math.floor(.3 * this.j)), z8.fillStyle = bB.o0, z8.fillRect(
			0, 0, i, 1), z8.fillRect(0, 0, 1, this.j), z8.fillRect(0, this.j - 1, i, 1), z8.fillRect(i - 1, 0, 1, this.j)
	}, this.aAn = function() {
		var ed = bf.kN() % 100,
			y6 = (ed = 9 - bL.fW(ed -= ed % 10, 10), Math.floor(ed * (this.j - aAe) / 9));
		return z8.fillRect(0, y6, aAe, this.j - y6), z8.fillRect(i - aAe, y6, aAe, this.j - y6), ed
	}, this.aAo = function() {
		z8.fillRect(aAe, this.j - aAe, Math.floor((i - 2 * aAe) * ag.h7[aD.ep] / aAg), aAe)
	}, this.eY = function() {
		var gd = aD.ep;
		bA.gR.hH(gd) && (gd = ag.h7[gd] - ag.a4R[gd], a4S !== gd ? (aAg = a7D(gd, aAg), aAh = a4S < gd && 10 <= gd, a4S = gd, a87 = !0) : bf.kN() % 10 == 9 && (a87 = !0))
	}, this.vW = function() {
		0 === ag.mz[aD.ep] || aD.hT || 2 === ag.a4I[aD.ep] || vX.drawImage(canvas, this.fC, fE)
	}
}

function cM() {
	var aAu, aAv, aAw, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5, aB6, aB7, aB8, aB9, aBA, aBB, aBC, aBD, aBE, aBF, position, aBG, aBH, aBI, aBJ, aBK, aBL = 1,
		aBM = 1,
		aBN = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.ep;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kB[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kB[aD.ep]);
	}

	function aBP() {
		aB0.clearRect(0, 0, aAu, a8p),
			aB0.fillStyle = aBK ? bB.ov : bB.or,
			aB0.fillRect(0, 0, aAu, aB5),
			aB0.fillStyle = bB.nw,
			aB0.fillRect(0, aB5, aAu, a8p - aB5);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kB[aD.ep]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBF = -1;
		if (__fx.leaderboardFilter.enabled && aBF >= __fx.leaderboardFilter.filteredLeaderboard.length) aBF = -1;
		playerPos >= position && aBR(playerPos - position, bB.oP),
			0 !== kB[aD.ep] && 0 === position && aBR(0, bB.oy),
			-1 !== aBF && aBR(aBF, bB.o1),
			aB0.fillStyle = bB.nw,
			//console.log("drawing", aBF),
			aB0.clearRect(0, a8p - __fx.leaderboardFilter.tabBarOffset, aAu, __fx.leaderboardFilter.tabBarOffset);
		aB0.fillRect(0, a8p - __fx.leaderboardFilter.tabBarOffset, aAu, __fx.leaderboardFilter.tabBarOffset);
		aB0.fillStyle = bB.o0,
			aB0.fillRect(0, aB5, aAu, 1),
			aB0.fillRect(0, a8p - __fx.leaderboardFilter.tabBarOffset, aAu, 1),
			__fx.leaderboardFilter.drawTabs(aB0, aAu, a8p - __fx.leaderboardFilter.tabBarOffset, bB.oP),
			aB0.fillRect(0, 0, aAu, bc.zs),
			aB0.fillRect(0, 0, bc.zs, a8p),
			aB0.fillRect(aAu - bc.zs, 0, bc.zs, a8p),
			aB0.fillRect(0, a8p - bc.zs, aAu, bc.zs), aB0.font = aAv, bA.qt.textBaseline(aB0, 1), bA.qt.textAlign(aB0, 1), aB0.fillText(aBN, Math.floor((aAu + aB5 - 22) / 2), Math.floor(aB3 + aAw / 2));
		__fx.playerList.drawButton(aB0, 12, 12, aB5 - 22);
		var fO, ge = playerPos < position + aAy - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAy)
				position = (result.length > aAy ? result.length : aAy) - aAy;
			//if (position >= result.length) position = result.length - 1;
			for (aB0.font = aAx, bA.qt.textAlign(aB0, 0), fO = aAy - ge; 0 <= fO; fO--) {
				const pos = result[fO + position];
				if (pos !== undefined)
					aBS(m1[pos]), aBT(fO, pos, m1[pos]);
			}
			for (bA.qt.textAlign(aB0, 2), fO = aAy - ge; 0 <= fO; fO--) {
				const pos = result[fO + position];
				if (pos !== undefined)
					aBS(m1[pos]), aBU(fO, m1[pos]);
			}
		} else {
			for (aB0.font = aAx, bA.qt.textAlign(aB0, 0), fO = aAy - ge; 0 <= fO; fO--)
				aBS(m1[fO + position]), aBT(fO, fO + position, m1[fO + position]);
			for (bA.qt.textAlign(aB0, 2), fO = aAy - ge; 0 <= fO; fO--)
				aBS(m1[fO + position]), aBU(fO, m1[fO + position]);
		}
		2 == ge && (aBS(aD.ep), bA.qt.textAlign(aB0, 0), aBT(aAy - 1, kB[aD.ep], aD.ep), bA.qt.textAlign(aB0, 2), aBU(aAy - 1, aD.ep)), 0 === position && (ge = .7 * aB6 / ab.get(4).height, aB0.setTransform(ge, 0, 0, ge, Math.floor(aB7 + .58 * aB6 +
			.5 * ge * ab.get(4).width), Math.floor(aB3 + aAw + .4 * aB6)), aB0.imageSmoothingEnabled = !0, aB0.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aB0.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBS(player) {
		aD.hz && (aB0.fillStyle = bg.aBW[bg.aBX[player]])
	}

	function aBR(aB, aBY) {
		aB0.fillStyle = aBY, aB = aAy - 1 < aB ? aAy - 1 : aB;
		aBY = Math.floor((aB === aAy - 1 ? 2 : 0 === aB ? 1.15 : 1) * aB6), aBY = aB === aAy - 2 ? Math.floor(aB5 + 9.15 * aB6) - Math.floor(aB5 + 8.15 * aB6) : aBY;
		aB0.fillRect(0, Math.floor(aB5 + (aB + (0 === aB ? 0 : .15)) * aB6), aAu, aBY)
	}

	function aBT(wb, a4g, aB) {
		aB0.fillText(aBB[a4g], aB7, Math.floor(aB3 + aAw + (wb + .5) * aB6)), 1 === ag.a4I[aB] && (aB0.font = "italic " + aAx);
		a4g = Math.floor(aB3 + aAw + (wb + .5) * aB6);
		aB0.fillText(ag.a1X[aB], aB8, a4g), 0 !== ag.a4I[aB] && (aB0.font = aAx), aB < aD.kQ && 2 !== ag.a4I[aB] || aB0.fillRect(aB8, a4g + .35 * aBL, aBA[aB], Math.max(1, .1 * aBL))
	}

	function aBU(wb, aB) {
		aB0.fillText(ag.gt[aB], aB9, Math.floor(aB3 + aAw + (wb + .5) * aB6))
	}
	this.dd = function() {
		var aB;
		for (aBJ = aBI = aBG = 0, aBK = aBH = !1, aBF = -1, aAy = a0.a1.iE() ? 6 : 10, aBM = (position = 0) === (aBM = bj.eQ.data[11].value) ? 10 : 1 === aBM ? 5 : 1, aBE = !1, aBC = new Uint16Array(aAy + 1), aBD = new Uint32Array(aAy + 1), aB2 =
			aD.f2, m1 = new Uint16Array(aB2), kB = new Uint16Array(aB2), aB = aB2 - 1; 0 <= aB; aB--) m1[aB] = aB, kB[aB] = aB;
		this.resize(!0), aBA = new Uint16Array(aD.f2);
		var aBO = Math.floor(aAu - aB8 - aB7 - aB1);
		for (aBB = new Array(aD.f2), aB0.font = aAx, aB = aD.f2 - 1; 0 <= aB; aB--) aBB[aB] = aB + 1 + ".", ag.a1X[aB] = bA.z8.a40(ag.a1c[aB], aAx, aBO), aBA[aB] = Math.floor(aB0.measureText(ag.a1X[aB]).width);
		aBP()
	}, this.resize = function(dd) {
		if (a8p = a0.a1.iE() ? (aAu = Math.floor(.335 * h.iF), Math.floor(aAy * aAu / 8)) : (aAu = Math.floor(.27 * h.iF), Math.floor(aAy * aAu / 10)), aAu = Math.floor(.97 * aAu), (aAz = document.createElement("canvas")).width = aAu, aAz
			.height = a8p, aB0 = aAz.getContext("2d", {
				alpha: !0
			}), aB3 = .025 * aAu, aAw = .16 * aAu, aB4 = 0 * aAu, aB5 = Math.floor(.45 * aB3 + aAw), aB6 = (a8p - aAw - 2 * aB3 - aB4) / aAy,
			aAz.height = a8p += aB6, __fx.leaderboardFilter.tabBarOffset = Math.floor(aB6 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8p - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAu,
			aAv = bA.qt.sk(1, Math.floor(.55 * aAw)), aBL = Math.floor((a0.a1.iE() ? .67 : .72) * aB6), aAx = bA.qt.sk(0, aBL), aB0.font = aAx, aB7 = Math.floor(.04 * aAu), aB8 = Math.floor((a0.a1.iE() ? .195 : .18) * aAu), aB1 = Math.floor(aB0
				.measureText("00920600").width), aB0.font = aAv, aB9 = aAu - aB7, !dd) {
			aB0.font = aAx;
			for (var aB = aD.f2 - 1; 0 <= aB; aB--) aBA[aB] = Math.floor(aB0.measureText(ag.a1X[aB]).width);
			aBP()
		}
		aBN = bA.z8.a40(L(109), aAv, .96 * aAu)
	}, this.aAm = function() {
		return aAu
	}, this.ml = function(bu, aBQ) {
		(aBQ || aBE && (bu || bf.kN() % aBM == 0)) && (aBE = !1, aBP())
	}, this.eY = function() {
		! function() {
			for (var fO = aB2 - 1; 0 <= fO; fO--) 0 === ag.mz[m1[fO]] && ! function(fO) {
				var aBg = m1[fO];
				aB2--;
				for (var aB = fO; aB < aB2; aB++) m1[aB] = m1[aB + 1], kB[m1[aB]] = aB;
				m1[aB2] = aBg, kB[m1[aB2]] = aB2
			}(fO)
		}();
		for (var aBe, ni = aB2 - 1, fO = 0; fO < ni; fO++) ag.gt[m1[fO]] < ag.gt[m1[fO + 1]] && (aBe = m1[fO], m1[fO] = m1[fO + 1], m1[fO + 1] = aBe, kB[m1[fO]] = fO, kB[m1[fO + 1]] = fO + 1);
		! function() {
			for (var eU = aBE, ge = (aBE = !0, kB[aD.ep] >= aAy - 1 ? aAy - 2 : aAy - 1), aB = ge; 0 <= aB; aB--)
				if (aBC[aB] !== m1[aB] || aBD[aB] !== ag.gt[m1[aB]]) return;
			(ge != aAy - 2 || aBC[aAy] === kB[aD.ep] && aBD[aAy] === ag.gt[aD.ep]) && (aBE = eU)
		}();
		for (var aB = aAy - 1; 0 <= aB; aB--) aBC[aB] = m1[aB], aBD[aB] = ag.gt[m1[aB]];
		aBC[aAy] = kB[aD.ep], aBD[aAy] = ag.gt[aD.ep];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hI = function(fC, fE) {
		if (zr(fC, fE)) {
			if (__fx.utils.isPointInRectangle(fC, fE, bc.gap + 12, bc.gap + 12, aB5 - 22, aB5 - 22)) __fx.playerList.display(ag.a1c);
			else {
				if (fE - bc.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fC - bc.gap);
				fC = aBi(fE);
				0 <= fC ? (aBG = bf.eT, aBH = !0, aBI = aBJ = fC, bJ.a35() && (fC = a9b(-1, aBJ, aAy), aBF !== (fC = fC === aAy ? -1 : fC)) && (aBF = fC, aBP(), bf.dk = !0)) : (aBK && (aBK = !1, aBP(), bf.dk = !0), t.u(10, 0, new aBj({
					aBk: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBP(), bf.dk = !0
	};

	function aBi(fE) {
		return (fE -= bc.gap + aB5) < 0 ? Math.floor(fE / aB6) - 1 : fE < (aAy - 1) * aB6 ? Math.floor(fE / aB6) : fE < a8p - aB5 ? aAy - 1 : (fE -= a8p - aB5, aAy + Math.floor(fE / aB6))
	}

	function zr(fC, fE) {
		return fC >= bc.gap && fC < bc.gap + aAu && fE >= bc.gap && fE < bc.gap + a8p
	}
	this.a2S = function(fC, fE) {
		var eU, aBh;
		if (__fx.utils.isPointInRectangle(fC, fE, bc.gap + 12, bc.gap + 12, aB5 - 22, aB5 - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fC, fE, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fC - bc.gap)) return aBh = aBi(fE), fC = zr(fC, fE), fE = !(!(aBh < 0 && fC) || bJ.a35()), aBH ? (eU = position, (position = a9b(0, position += aBI - aBh, aD.f2 - aAy)) !== eU ? (aBK = fE,
			aBh = a9b(-1, aBI = aBh, aAy), aBF = aBh = aBh !== aAy && fC ? aBh : -1, aBP(), bf.dk = !0) : aBK !== fE && (aBK = fE, aBP(), bf.dk = !0), !0) : (aBh = (aBh = a9b(-1, aBh, aAy)) === aAy || !fC || bJ.a35() ? -1 : aBh, (aBF !==
			aBh || aBK !== fE) && (aBF = aBh, aBK = fE, aBP(), bf.dk = !0))
	}, this.a2r = function(fC, fE) {
		if (!aBH) return !1;
		aBH = !1;
		var aBh = aBi(fE);
		var isEmptySpace = false;
		return bJ.a35() && -1 !== aBF && (aBF = -1, aBP(), bf.dk = !0), bf.eT - aBG < 350 && aBJ === aBh && -1 !== (aBh = (aBh = a9b(-1, aBh, aAy)) !== aAy && zr(fC, fE) ? aBh : -1) && (fC = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m1[__fx.leaderboardFilter.filteredLeaderboard[aBh + position] ?? (isEmptySpace = true, kB[aD.ep])]) : m1[aBh + position]), aBh === aAy - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kB[aD.ep]) >=
			position + aAy - 1 && (fC = aD.ep), !isEmptySpace && aD.hz && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fC, ag.a1c, aD.kk), 0 !== ag.mz[fC] && !isEmptySpace) && aH.nL(fC, 800, !1, 0), !0
	}, this.a2V = function(fC, fE, deltaY) {
		var aBn;
		return !(aBH || aD.nT || (aBn = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zr(fC, fE)) || (fC = (fC = a9b(-1, aBi(fE), aAy)) === aAy || bJ.a35() ? -1 : fC, 0 < deltaY ? position < aD.f2 - aAy && (position += Math.min(aD.f2 - aAy -
			position, aBn), aBF = fC, aBP(), bf.dk = !0) : 0 < position && (position -= Math.min(position, aBn), aBF = fC, aBP(), bf.dk = !0), 0))
	}, this.vW = function() {
		vX.drawImage(aAz, bc.gap, bc.gap)
	}
}

function cN() {
	var canvas, z8, fC, fE, aAW, aBo, gap, aBp, fontSize, aBq, aBr, aBs, aBt, aBu, aBv, aBw, aBx, aBy;

	function aC2() {
		z8.clearRect(0, 0, aW.i, aW.j), z8.fillStyle = bB.nx, z8.fillRect(0, 0, aW.i, aW.j), z8.fillStyle = bB.oK, ej = 0 < aBw ? aBw : aBt[4] / 1e4, z8.fillRect(0, aW.j - aAW - 1, Math.floor(ej * aW.i), aAW), z8.fillStyle = bB.o0, z8.fillRect(0, 0,
			aW.i, 1), z8.fillRect(0, 0, 1, aW.j), z8.fillRect(aW.i - 1, 0, 1, aW.j), z8.fillRect(0, aW.j - 1, aW.i, 1), z8.fillRect(0, aW.j - aAW - 1, aW.i, 1);
		for (var ej, aC4, eU = 0, aB = 0; aB < aBs.length; aB++) aBu[aB] ? (bA.qt.textAlign(z8, 0), aC4 = Math.floor((aBo - aAW + 2 * aBp) * (aB - eU + 1) / (aBs.length + 1) - .7 * aBp), z8.fillText(aBs[aB], gap, aC4), bA.qt.textAlign(z8, 2), 5 ===
			aB && 0 !== ag.mz[aD.ep] && ag.h7[aD.ep] >= ae.k6(aD.ep) ? (z8.fillStyle = bB.ow, z8.fillText(aC0(aB), aW.i - gap, aC4), z8.fillStyle = bB.o0) : z8.fillText(aC0(aB), aW.i - gap, aC4)) : eU++
	}

	function aC0(aB) {
		return aB < 3 ? aBt[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rs.a50(aBt[aB] / 100, 2) : aB < 7 ? bA.rs.a0B(aBt[aB]) : aB === 7 ? aW.aC5(aBt[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gt, aD.ep) : __fx.utils.getDensity(aD.ep)
	}

	function aBz() {
		ag.gt[aD.ep] !== aBt[6] && (aBt[6] = ag.gt[aD.ep], aBq++)
	}
	this.dd = function() {
		aBw = aBx = 0, (aBr = new Array(8))[0] = L(110), aBr[1] = aD.kk ? L(111) : L(112), aBr[2] = L(113), aBr[3] = L(114), aBr[4] = L(115), aBr[5] = L(116, 0, "Interest"), aBr[6] = L(117), aBr[7] = L(118),
			aBr.push("Max Troops", "Density"), // add aBr
			(aBs = new Array(aBr.length)).fill(""), (aBt = new Array(aBr.length))[0] = aD.kk ? 0 : aD.kQ, aBt[1] = aD.kk ? al.kw : aD.km, aBt[2] = aD.a0w, aBt[3] = 0, aBt[4] = bL.fW(1e4 * ag.gt[0], Math.max(aD.kA, 1)), aBt[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.fW(700 * aD.data.iIncomeValue, 64) : bL.fW(700 * aD.data.iIncomeData[aD.ep], 64), aBt[6] = 0, aBz(), aBt[7] = 0, aBv = aC0(6), (aBu = new Array(aBr.length)).fill(!0), aBy = 0, aBy =
			aD.kk ? (aBu[0] = !1, aBu[2] = !1, aBu[3] = !1, 3) : (aBu[3] = !1, 1), aBq = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iE() ? .1646 : .126) * 1.25 * h.iF), this.j = Math.floor(1.18 * this.i), aAW = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBp = .04 * this.i, aBo = this.j, this.j -= Math.floor(aBy * (this.j -
			2 * aAW) / aBr.length), fontSize = Math.floor(.7 * (aBo - aAW) / aBr.length);
		var a6d = bA.qt.sk(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6d, i) {
				for (var aB = 0; aB < aBs.length; aB++) aBs[aB] = bA.z8.a40(aBr[aB], a6d, i)
			}((z8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6d, .575 * this.i), bA.qt.textBaseline(z8, 1), z8.lineWidth = 1, this.a5F(), this.a9E(), aU.a9E(), aC2()
	}, this.a9E = function() {
		fC = h.i - this.i - bc.gap
	}, this.aC3 = function() {
		fE = bc.gap
	}, this.a5F = function() {
		fE = bc.gap + (aU.a8a() && 0 !== ag.mz[aD.ep] && !aD.hT ? aU.j + bc.gap : 0)
	}, this.ml = function(bu) {
		(bu || 100 <= aBq) && (aBq = 0, aC2())
	}, this.a5y = function() {
		return aBt[7]
	}, this.aC5 = function(value) {
		var lL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lL) / 1e3);
		return value < 10 ? lL + ":0" + value : lL + ":" + value
	}, this.eY = function() {
		var aCG, per;
		aBu[0] && aD.a0x - aD.a0w !== aBt[0] && (aBt[0] = aD.a0x - aD.a0w, aBq++), al.kw - aBt[0] !== aBt[1] && (aBt[1] = al.kw - aBt[0], aBq++), this.md(), (aCG = ae.aCH(aD.ep)) !== aBt[5] && (aBt[5] = aCG, aBq++), aBz(), aBt[7] += bf.aCI, aCG =
			aC0(7), aBv !== aCG && (aBv = aCG, aBq += 100), aCG = aD.hz ? bh.kx() : ag.gt[m1[0]], per = bL.fW(1e4 * aCG, Math.max(aD.kA, 1)), aBt[3] = aCG, aBt[4] !== per && (aBq++, aBt[4] = per), 8 === aD.ki && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gR.hH(aB)) return bR.a0W.a0t(), 1;
				return
			}() || aBt[3] < aD.kA || ! function() {
				for (var aB = al.kw - 1; 0 <= aB; aB--)
					if (0 < ag.gX[al.l1[aB]].length) return;
				return 1
			}() || bN.lF.aCF().length || aD.hz && bh.kx(1) < aD.kA || bR.a0W.a0t()
	}, this.md = function() {
		aBu[2] && aD.a0w !== aBt[2] && (aBt[2] = aD.a0w, aBq += 2 === aD.a0u ? 100 : 1)
	}, this.aCC = function() {
		return aBt[3] === aD.kA
	}, this.aCJ = function(aB) {
		var tY, aCK, eU;
		return 2 !== aD.a0u && (aB % 2 == 1 && (aV.ml(1, 1), bf.dk = !0), aB === aD.a5O ? (aBw = 0, aC2(), !1) : (-1 !== aB || 0 !== aBx) && (aCK = aBw, aBw = aD.hE ? aB / aD.a5O : (eU = performance.now(), 0 <= aB && (tY = eU - 392 * aB, aBx =
			0 === aB || tY < aBx ? tY : aBx), 1 < (aBw = (eU - aBx) / (392 * aD.a5O)) ? 1 : aBw), aC2(), aBw !== aCK))
	}, this.vW = function() {
		vX.drawImage(canvas, fC, fE)
	}
}

function cO() {
	var hr, aCL, i, j, a9K, aCM, aCN, a8b, canvas, nC, aCO;

	function z4() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aCO = hr = !1, a9K = .61, aCM = .07, aCN = .09, nC = a8b = j = 0
	}, this.resize = function() {
		var z8, nQ, ed, aCT, aCU, a6i;
		hr && (i = aCP(i = a0.a1.iE() ? Math.floor(.69 * h.iF) : Math.floor(.5 * h.iF), a7D(h.i - 2 * bc.gap, 10)), i = aCP(i, Math.floor(3.57 * a7D(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, z8 = canvas.getContext("2d", {
				alpha: !0
			}), nQ = Math.floor(1 + j / 40), z8.clearRect(0, 0, i, j), z8.fillStyle = bB.nx, z8.fillRect(nQ, nQ, i - 2 * nQ, j - 2 * nQ), z8.lineJoin = "bevel", z8.lineWidth = 2 * nQ, z8.strokeStyle = bB.o0, z8.strokeRect(nQ, nQ, i - 2 * nQ,
				j - 2 * nQ), z8.imageSmoothingEnabled = !1, ed = ab.get(aCL), aCT = ed.width, a6i = (1 === aCL ? .85 : 21 === aCL ? .666 : .9) * a9K * j / (aCU = ed.height), z8.setTransform(a6i, 0, 0, a6i, Math.floor((i - a6i * aCT) / 2),
				Math.floor((j - a6i * aCU) / 2)), z8.drawImage(ed, 0, 0), z8.setTransform(1, 0, 0, 1, Math.floor(i - aCN * j - aCM * j - nQ), Math.floor(nQ + aCM * j)),
			function(z8, f5) {
				z8.lineWidth = Math.floor(1 + j / 80), z8.strokeStyle = bB.o0, z8.beginPath(), z8.moveTo(0, 0), z8.lineTo(f5, f5), z8.moveTo(0, f5), z8.lineTo(f5, 0), z8.stroke()
			}(z8, Math.floor(aCN * j)), z8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fX, aCR, a96, aCS) {
		hr || aCS && aCO || (aCL = a96 ? 21 : fX ? 1 : 2, hr = aCO = !0, this.resize(), aL.sA(), aR.a91(), nC = bf.eT, a8b = aCR ? 1 : 0)
	}, this.eY = function() {
		!hr || 1 <= a8b || (a8b = 1 < (a8b += 5e-4 * (bf.eT - nC)) ? 1 : a8b, nC = bf.eT, bf.dk = !0)
	}, this.hI = function(fC, fE) {
		return !(!hr || a8b <= 0 || (fC -= Math.floor((h.i - i) / 2), fE -= z4(), fC < 0) || fE < 0 || i < fC || j < fE || (i - j / 3 < fC && fE < j / 3 && (hr = !1, bf.dk = !0), 0))
	}, this.vW = function() {
		!hr || a8b <= 0 || (vX.globalAlpha = a8b, vX.drawImage(canvas, Math.floor((h.i - i) / 2), z4()), vX.globalAlpha = 1)
	}
}

function dN() {
	var aCW, aCX = new Uint8Array(5),
		aCY = new Uint8Array(5);
	this.aCZ = new aCa, this.dd = function() {
		for (var fX = bj.eQ.data[119].value, aB = 0; aB < aCX.length; aB++) aCX[aB] = (fX >> 2 * aB) % 4
	}, this.a5a = function() {
		aCW = [L(119), "", L(120, [bX.aCb[28]]), L(121, [bX.aCb[26]]), L(122, [bX.aCb[0]])], this.aCZ.dd()
	}, this.eY = function() {
		this.aCZ.eY()
	}, this.a6M = function(id) {
		1 < id && bJ.rL() || ! function(eC) {
			if (3 === aCX[eC] || 1 === aCY[eC]) return;
			if (aCY[eC] = 1, !(Math.random() < .6)) {
				aCX[eC]++;
				for (var fX = 0, aB = 0; aB < aCX.length; aB++) fX += aCX[aB] << 2 * aB;
				bj.sL.sM(119, fX)
			}
			return 1
		}(id) || aN.a7I(aCW[id])
	}
}

function aCa() {
	var aCd;
	this.dd = function() {
		aCd = !1
	}, this.eY = function() {
		var gd;
		if (function() {
				if (!aCd) {
					if (bf.kN() % 30 != 9) return;
					if (!bA.gR.lx(90)) return;
					aCd = !0
				}
				return 1
			}() && (! function() {
				var ql = aN.a7e(956);
				if (ql) {
					if (bA.gR.lO(ql.player)) return 1;
					aN.a7d(956, 0)
				}
				return
			}() && (-1 === (gd = (aD.hz ? function() {
				var id = bh.kz(),
					f5 = al.kw;
				if (bg.kn[id])
					for (var a0i = al.l1, f3 = bg.f3, aB = 0; aB < f5; aB++) {
						var gd = a0i[aB];
						if (f3[gd] !== id) return gd
					} else if (1 < f5) return m1[f5 - 1];
				return -1
			} : function() {
				for (var aCl = al.kw, lK = al.l1, aCm = kB, aB = 0; aB < aCl; aB++) {
					var gd = lK[aB];
					if (0 !== aCm[gd]) return gd
				}
				return -1
			})()) ? ! function() {
				var ql = aN.a7e(957);
				if (ql && ql.a79) {
					if (ac.ew(ql.a79.er << 2)) return 1;
					aN.a7d(957, 0)
				}
				return
			}() : (aN.a1I(0, L(123, [ag.a1X[gd]]), 956, gd, bB.o0, bB.nx, -1, !0), 0)))) {
			var f5 = ao.j4.la;
			if (0 !== f5)
				for (var eQ = ao.j4.eQ, aB = 0; aB < f5; aB++) {
					var er = eQ[aB];
					if (ac.ew(er << 2)) return void aN.a1I(0, L(124, [bM.fD(er), bM.fF(er)]), 957, 0, bB.o0, bB.nx, -1, !0, void 0, {
						fO: 1,
						er: er
					})
				}
		}
	}
}

function dO() {
	this.aCn = new aCo, this.dd = function() {
		this.aCn.resize()
	}
}

function aCo() {
	this.resize = function() {
		var aB, aCp = document.head.querySelector("style#ss");
		if (aCp)
			for (aB = aCp.sheet.cssRules.length - 1; 0 <= aB; aB--) aCp.sheet.deleteRule(0);
		else(aCp = document.createElement("style")).id = "ss", document.head.appendChild(aCp);
		var a9S = "::-webkit-scrollbar",
			dx = bA.qt.r2(bc.sm),
			i1 = bA.qt.r2(Math.max(bA.qt.sC(.012), 8));
		try {
			aCp.sheet.insertRule(a9S + "{width:" + i1 + ";height:" + i1 + ";}", aCp.sheet.cssRules.length), aCp.sheet.insertRule(a9S + "-thumb{background-color:white;}", aCp.sheet.cssRules.length), aCp.sheet.insertRule(a9S +
				"-track{background:" + bB.nw + ";}", aCp.sheet.cssRules.length), aCp.sheet.insertRule(a9S + "-track:horizontal{border-top:" + dx + " solid white;}", aCp.sheet.cssRules.length), aCp.sheet.insertRule(a9S +
				"-track:vertical{border-left:" + dx + " solid white;}", aCp.sheet.cssRules.length), aCp.sheet.insertRule(a9S + "-button{display:none;}", aCp.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCp.sheet.cssRules.length - 1; 0 <= aB; aB--) aCp.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCq = !1, this.nq = !1, this.a5J = !1, this.aCr = [0, 0, 0, 0], this.aCs = function() {
		var nQ, nR, nd, ne;
		this.a5J = this.a5J || this.nq, (this.nq || this.aCq && this.a5J) && (nQ = ba.aCt[0], nR = ba.aCt[1], nd = ba.aCt[2], ne = ba.aCt[3], nQ = nQ < this.aCr[0] ? this.aCr[0] : nQ, nR = nR < this.aCr[1] ? this.aCr[1] : nR, nd = nd > this.aCr[
				2] ? this.aCr[2] : nd, ne = ne > this.aCr[3] ? this.aCr[3] : ne, this.nq = !1, this.aCq = !1, nQ === this.aCr[0] && nR === this.aCr[1] && nd === this.aCr[2] && ne === this.aCr[3] ? this.a5K() : nQ <= nd && nR <= ne && a5c
			.putImageData(a5d, 0, 0, nQ, nR, nd - nQ + 1, ne - nR + 1))
	}, this.a5K = function() {
		this.a5J && this.aCr[2] >= this.aCr[0] && this.aCr[3] >= this.aCr[1] && a5c.putImageData(a5d, 0, 0, this.aCr[0], this.aCr[1], this.aCr[2] - this.aCr[0] + 1, this.aCr[3] - this.aCr[1] + 1), this.a5J = !1
	}, this.a16 = function() {
		this.aCr[2] >= this.aCr[0] && this.aCr[3] >= this.aCr[1] && a5c.putImageData(a5d, 0, 0, this.aCr[0], this.aCr[1], this.aCr[2] - this.aCr[0] + 1, this.aCr[3] - this.aCr[1] + 1), this.a5J = !1
	}, this.dd = function() {
		var fC, fE;
		this.aCq = !1, this.nq = !1, this.a5J = !1, this.aCr[0] = bS.fG, this.aCr[1] = bS.fH, this.aCr[2] = this.aCr[3] = 0;
		loop: for (fC = 1; fC < bS.fG - 1; fC++)
			for (fE = bS.fH - 2; 1 < fE; fE--)
				if (1 === aCu[ac.yb(fC, fE) + 2]) {
					this.aCr[0] = fC;
					break loop
				} loop: for (fE = 1; fE < bS.fH - 1; fE++)
			for (fC = bS.fG - 2; 1 < fC; fC--)
				if (1 === aCu[ac.yb(fC, fE) + 2]) {
					this.aCr[1] = fE;
					break loop
				} loop: for (fC = bS.fG - 2; 0 < fC; fC--)
			for (fE = bS.fH - 2; 1 < fE; fE--)
				if (1 === aCu[ac.yb(fC, fE) + 2]) {
					this.aCr[2] = fC;
					break loop
				} loop: for (fE = bS.fH - 2; 0 < fE; fE--)
			for (fC = bS.fG - 2; 1 < fC; fC--)
				if (1 === aCu[ac.yb(fC, fE) + 2]) {
					this.aCr[3] = fE;
					break loop
				}
	}
}

function L(value, aCv, w5, aCw) {
	var qa = "number" == typeof value ? b7.aCx[value] : value;
	if (w5 && b7.aCy() && (qa = w5), !aCv) return aCw ? qa.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qa;
	for (var f5 = aCv.length, aB = 0; aB < f5; aB++)
		for (var fO = 0; fO < 3; fO++) qa = qa.replace("{" + (10 * fO + aB) + "}", aCv[aB]);
	return qa
}

function c2() {
	this.data = new aCz;
	var aD0 = (new aD1).L84,
		aD3 = (this.aCx = aD0, !(this.aD2 = "en"));
	this.dd = function() {
		var qa, g;
		aD3 = !1, ("en" === (qa = bj.eQ.data[12].value).split("-")[0].toLowerCase() ? (b7.aCx = aD0, b7.aD2 = qa, 1) : bj.eQ.data[12].value === bj.eQ.data[145].value && 0 < bj.eQ.data[146].value && (qa = bj.eQ.data[146].value, (g = bj.rA.wI(qa, !
			1)).length === qa) && !!bA.r1.a3b(g) && function(g) {
			for (var f5 = g.length, j = 0; j < f5; j++) g[j] = g[j].replace("&#39;", "'");
			var aD9 = bj.rA.wI(f5, !0);
			if (f5 !== aD9.length) return !1;
			if (!bA.r1.a3b(aD9)) return !1;
			for (var lL = aD0.length, aAN = new Array(lL), aDA = lL === f5, gY = Math.min(f5, lL), aB = 0; aB < lL; aB++)
				if (aAN[aB] = aD0[aB], aB < f5 && aD9[aB] === aAN[aB]) aAN[aB] = g[aB];
				else {
					aDA = !1;
					for (var fP = 0; fP < gY; fP++)
						if (aD9[fP] === aAN[aB]) {
							aAN[aB] = g[fP];
							break
						}
				} return b7.aCx = aAN, b7.aD2 = bj.eQ.data[12].value, aDA
		}(g)) || (aD3 = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new e1
	}, this.aCy = function() {
		return this.aCx === aD0 || !aD0.length
	}, this.aDB = function() {
		var aDC;
		return !!aD3 && (aD3 = !1, 0 !== aD0.length) && (aDC = bj.eQ.data[12].value, b0.ea.aDD(0, aDC.slice(0, 20)), !0)
	}, this.aDE = function(g) {
		g.length !== aD0.length ? 8 === t.tA && t.a5z().aDF(30, 0, 1) : (this.aCx = g, this.aD2 = bj.eQ.data[12].value, bj.sL.sM(145, this.aD2), bj.sL.sM(146, g.length), bj.rA.wO(g, !1), bj.rA.wO(aD0, !0), 8 === t.tA ? t.a5z().aDF(30) : 0 === aa
			.a29() && 5 === t.tA && t.y.aDG())
	}, this.aDH = function() {
		var wR, g = navigator.languages;
		return g && g.length ? (wR = Math.max(b7.data.aDI(g[0]), 0), 1 === g.length ? [wR, wR] : [wR, Math.max(b7.data.aDI(g[1]), 0)]) : [0, 0]
	}
}

function aCz() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDJ = function() {
		for (var aDK = [], g = this.g, f5 = g.length, aB = 0; aB < f5; aB++) aDK.push(g[aB]);
		var aDL = bj.eQ.data[12].w5;
		for (aB = 0; aB < f5; aB++)
			if (aDK[aB] === aDL) {
				aDK.splice(aB, 1), f5--;
				break
			} aDK.sort(), f5++, aDK.unshift(aDL);
		try {
			if ("undefined" == typeof Intl) return aDK;
			for (aB = 0; aB < f5; aB++) {
				var qa = new Intl.DisplayNames([aDK[aB]], {
					type: "language"
				}).of(aDK[aB]);
				qa !== aDK[aB] && (aDK[aB] = aDK[aB] + ": " + qa)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDK
	}, this.aDN = function(aDO) {
		for (var qa = bj.eQ.data[12].value, f5 = aDO.length, aB = 0; aB < f5; aB++)
			if (qa === aDO[aB].split(":")[0]) return aB;
		return 0
	}, this.aDI = function(aDP) {
		if (aDP && !(aDP.length < 2)) {
			aDP = aDP.split("-")[0].toLowerCase();
			for (var g = this.g, f5 = g.length, aB = 0; aB < f5; aB++)
				if (aDP === g[aB]) return aB
		}
		return -1
	}
}

function aD1() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "Team {0}", "Team {0} won the game!",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!",
		"Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!",
		"You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}",
		"Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY",
		"MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention",
		"Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer",
		"Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader",
		"Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!",
		"If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map",
		"Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment",
		"Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics",
		"🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function di() {
	var fC, fE, j, u8, aDQ, aDR, aDS, aDT, aDU, i, a4E, aDV;
	this.hr = !1, this.dd = function(qa, aDW) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aDW ? void(a4E = qa) : a4E !== qa ? void 0 : void a0.wG.saveString(200, qa);
		aDW && (a4E = qa, (aDV = document.createElement("a")).appendChild(document.createTextNode(a4E)), this.hr = !0, aDV.title = a4E, aDV.target = "_blank", aDV.href = a4E, aDV.style.textAlign = "center", aDV.style.color = bB.o0, aDV.style
			.position = "absolute", aDV.style.padding = "0px", aDV.style.margin = "0px", this.resize(), document.body.appendChild(aDV), bf.dk = !0)
	}, this.sA = function() {
		return !(!this.hr || (t.removeChild(document.body, aDV), this.hr = !1))
	}, this.hI = function(iM, iN) {
		return !!this.hr && ((iM < fC || iN < fE || fC + i < iM || fE + j < iN || fC + i - u8 < iM && iN < fE + u8) && (bf.dk = !0, this.hr = !1, t.removeChild(document.body, aDV)), !0)
	}, this.resize = function() {
		var a6d, aDX;
		this.hr && (aDT = Math.floor(.8 * (a0.a1.iE() ? h.i > h.j ? .6 : .55 : .4) * h.iF), u8 = Math.floor(.15 * aDT), aDQ = Math.floor(.35 * u8), aDR = Math.floor(.5 * u8), aDS = Math.floor(2.5 * aDR), j = u8 + aDQ + 3 * aDR, a6d = bA.qt.sk(1,
			aDQ / h.k), aDU = Math.floor(h.k * aQ.measureText(a4E, a6d)), aDX = i = (aDT < aDU ? aDU : aDT) + 2 * aDS, i = Math.min(i, h.i - 2 * (a0.a1.iE() ? 2 : 1) * bc.gap), a6d = bA.qt.sk(1, i / aDX * aDQ / h.k), aDU = Math.floor(h
			.k * aQ.measureText(a4E, a6d)), fC = Math.floor((h.i - i) / 2), fE = Math.floor((h.j - j) / 2), aDV.style.font = a6d, aDV.style.top = Math.floor((fE + 1.4 * aDR + u8) / h.k) + "px", aDV.style.left = Math.floor((fC + (i -
			aDU) / 2) / h.k) + "px")
	}, this.vW = function() {
		this.hr && (vX.fillStyle = bB.nx, vX.fillRect(fC, fE + u8, i, j - u8), vX.fillStyle = bB.p9, vX.fillRect(fC, fE, i, u8), vX.fillStyle = bB.o0, vX.lineWidth = bc.zs, vX.strokeStyle = bB.o0, vX.strokeRect(fC, fE, i, j), vX.fillRect(fC, fE +
			u8, i, bc.zs), vX.font = bA.qt.sk(1, .48 * u8), bA.qt.textAlign(vX, 1), bA.qt.textBaseline(vX, 1), vX.fillText(L(125), Math.floor(fC + (i - .5 * u8) / 2), Math.floor(fE + .55 * u8)), aM.a6o(Math.floor(fC + i - .8 * u8), Math
			.floor(fE + .25 * u8), Math.floor(.5 * u8)), vX.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBr, fC = [0, 0, 0, 0, 0],
		fE = [0, 0, 0, 0, 0],
		nc = [1, 1, 1, 1, 1],
		fX = [!0, !0, !0, !1, !1],
		ed = (this.fs = [!0, !0, !0, !1, !1], null);
	this.aDY = function(a3m, aDZ) {
		ed = a3m, fX = aDZ, aBr = [bK.aDa, bK.a22, bK.aDb, bK.aDb, bK.aDc], this.dd()
	}, this.dd = function() {
		if (ab.tc()) {
			var aB, tH = Math.floor((a0.a1.iE() ? .261 : .195) * h.iF),
				tI = Math.floor(.9 * tH),
				a9K = Math.floor(.17 * tI);
			if (gap = a0.a1.iE() ? 2 * bc.gap : bc.gap, nc[0] = tH / ed[0].width, nc[1] = tI / ed[1].width, nc[2] = a9K / ed[2].height, nc[3] = a9K / ed[3].height, nc[4] = a9K / ed[4].height, nc[2] *= 1.7, nc[3] *= 1.07, fC[0] = gap, fC[1] = gap,
				fC[2] = gap, fC[3] = gap, fC[4] = Math.floor(2 * gap + nc[3] * ed[3].width), fE[0] = gap, fE[1] = fE[0] + gap + nc[0] * ed[0].height, fE[2] = fE[1] + gap + nc[1] * ed[1].height, fE[3] = fE[2] + gap + nc[2] * ed[2].height, fE[4] =
				fE[3], !fX[0])
				for (aB = 0; aB < 5; aB++) fE[aB] -= nc[0] * ed[0].height + gap;
			if (!fX[1])
				for (aB = 2; aB < 5; aB++) fE[aB] -= nc[1] * ed[1].height + gap
		}
	}, this.hr = function() {
		return !(7 === aa.a29() && a0.a1.iE())
	}, this.hI = function(iM, iN) {
		if (ed && this.hr())
			for (var aB = fX.length - 1; 0 <= aB; aB--)
				if (fX[aB] && this.fs[aB] && fC[aB] < iM && fE[aB] < iN && iM < fC[aB] + nc[aB] * ed[aB].width && iN < fE[aB] + nc[aB] * ed[aB].height) return t.u(9, t.tA, new aDd(L(126), bA.qt.a4D(aBr[aB]))), !0;
		return !1
	}, this.vW = function() {
		if (ed && this.hr()) {
			var aB;
			for (vX.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fX[aB] && this.fs[aB] && (vX.setTransform(nc[aB], 0, 0, nc[aB], fC[aB], fE[aB]), vX.drawImage(ed[aB], 0, 0));
			vX.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDe = 0, this.aDf = null, this.uJ = null, this.lF = null, this.y = null, this.ug = null, this.uG = null, this.message = null, this.aDg = null, this.s9 = null, this.aDh = null, this.aDi = new aDj, this.a26 = 0, this.aAE = 0, this.dd =
		function() {
			this.aAE = bf.eT, this.aDe = bG.tD.xD(bj.eQ.data[105].value, 5), this.uJ = new aDk, this.lF = new aDl, this.y = new aDm, this.ug = new aDn, this.uG = new aDo, this.message = new aDp, this.aDg = new aDq, this.s9 = new aDr, this.aDh =
				new aDs, this.y.dd(), bp.dd(), this.a26 = 1, a0.a1.setState(1), aa.setState(0)
		}, this.ua = function() {
			this.s9 && this.s9.ua(), this.aDf = null, this.uJ = null, this.lF = null, this.y = null, this.ug = null, this.uG = null, this.message = null, this.aDg = null, this.s9 = null, this.aDh = null, this.a26 = 0, bp.ua(), a0.a1.setState(0)
		}
}

function aDk() {
	function aEF(g, tU, tV) {
		var aEG = g[tU];
		g[tU] = g[tV], g[tV] = aEG
	}
	this.uK = [
		[],
		[],
		[],
		[]
	], this.uL = [0, 0, 0, 0], this.aDt = [], this.aDu = function(aDv, t8, username, uQ, a4g, aDw, elo, color, wl, aDx) {
		username = this.aDz(t8, username, uQ, a4g, aDw, elo, color, wl, aDx);
		this.uK[aDv].push(username), bn.aDe === t8 && (bn.aDf = username), bn.aDh.aE0(t8) && (username.uS = 1), bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === aDv && 1 === bn.y.rx[2]
	}, this.aDz = function(t8, username, uQ, a4g, aDw, elo, color, wl, aDx) {
		return {
			t8: t8,
			username: username,
			uQ: uQ,
			a4g: a4g,
			aDw: aDw,
			elo: elo,
			color: color,
			wl: wl,
			aDx: aDx
		}
	}, this.aE2 = function(eC, aDv, uQ, a4g, aDw, elo, wl, color) {
		eC = this.uK[aDv][eC];
		eC.uQ = uQ, eC.a4g = a4g, eC.aDw = aDw, eC.elo = elo, eC.wl = wl, eC.color = color, bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === aDv && 1 === bn.y.rx[2]
	}, this.aE3 = function(eC, aDv, aE4) {
		var eC = this.uK[aDv][eC],
			aE5 = eC.username,
			aE6 = "Redacted " + bF.tD.a0B(eC.t8, 2);
		eC.username = aE4 ? "[" + bA.rs.a1f(aE5) + "] " + aE6 : aE6, aE5.indexOf("Redacted") < 0 && (eC.aE7 = aE5), bn.s9.aE8(eC.t8), bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === aDv && 1 === bn.y.rx[2]
	}, this.aE9 = function(eC, aEA, aEB) {
		var player = this.uK[aEA][eC];
		this.aEC(eC, aEA), this.uK[aEB].push(player), bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === aEB && 1 === bn.y.rx[2]
	}, this.aEC = function(eC, aEA) {
		var uJ = this.uK[aEA];
		this.aDt.push(uJ[eC]), 1e3 < this.aDt.length && this.aDt.shift(), eC >= this.uL[aEA] ? uJ[eC] = uJ[uJ.length - 1] : (this.uL[aEA]--, 2 === aEA ? (uJ.splice(this.uL[aEA] + 1, 0, uJ[uJ.length - 1]), uJ.splice(eC, 1)) : (uJ[eC] = uJ[this.uL[
			aEA]], uJ[this.uL[aEA]] = uJ[uJ.length - 1])), uJ.pop(), bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === aEA && 1 === bn.y.rx[2]
	}, this.aED = function(eC, rw) {
		bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === rw && 1 === bn.y.rx[2];
		var uJ = this.uK[rw],
			ql = uJ[eC];
		if (2 === rw)
			if (eC >= this.uL[rw]) {
				bn.aDh.join(ql);
				for (var aEE = this.uL[rw], elo = ql.elo; aEE && elo > uJ[aEE - 1].elo;) aEE--;
				uJ[eC] = uJ[this.uL[rw]], uJ.splice(this.uL[rw]++, 1), uJ.splice(aEE, 0, ql)
			} else uJ.splice(this.uL[rw]--, 0, ql), uJ.splice(eC, 1);
		else eC >= this.uL[rw] ? (bn.aDh.join(ql), aEF(uJ, this.uL[rw]++, eC)) : aEF(uJ, --this.uL[rw], eC)
	}, this.aEH = function(t8) {
		for (var uK = this.uK, f5 = uK.length, aB = 0; aB < f5; aB++)
			for (var uJ = uK[aB], lL = uJ.length, fO = 0; fO < lL; fO++)
				if (t8 === uJ[fO].t8) return uJ[fO];
		return null
	}
}

function aDs() {
	var aEI = [],
		aEJ = [],
		aEK = 0;

	function aEL(g, a7g, aEP, aEQ) {
		var f5 = g.length;
		if (0 === f5) return "";
		var qa = "@" + g[0];
		if (1 === f5) return qa + a7g + aEQ;
		for (var aB = 1; aB < f5 - 1; aB++) qa += ", @" + g[aB];
		return qa + " and @" + g[f5 - 1] + aEP + aEQ
	}
	this.dd = function() {
		var qa = aEL(aEJ, " is", " are", " in the lobby!");
		qa.length && bn.message.aEM({
			id: 7,
			r: qa
		}), aEI = [], aEJ = [], aEK = 0
	}, this.aE0 = function(aEN) {
		return bn.aDe !== aEN && (aEN = bF.tD.a0B(aEN, 5), !!bj.vv.uS(aEN)) && (aEJ.push(aEN), !0)
	}, this.join = function(player) {
		bn.aDe !== player.t8 && (player = bF.tD.a0B(player.t8, 5), bj.vv.uS(player)) && aEI.push(player)
	}, this.aEO = function() {
		var a7g, aEP;
		++aEK < 3 || (aEK = 0, a7g = aEL(aEJ, "", "", " entered the lobby!"), (a7g = (aEP = aEL(aEI, "", "", " joined a game!")).length ? a7g.length ? a7g + " " + aEP : aEP : a7g).length && bn.message.aEM({
			id: 7,
			r: a7g
		}), aEI = [], aEJ = [])
	}
}

function aDj() {
	this.dl = function(eC) {
		if ((uL = bn.uJ.uL[eC]) < 2 && !__fx.customLobby.isActive()) return !1;
		var ry = bn.y.rz[eC],
			aER = 9 === ry.aES ? 333 : 512,
			uL = Math.min(uL, aER);
		8 === ry.aES && (uL -= uL % 2);
		aER = bn.uJ.uK[eC].splice(0, uL), bn.uJ.uL[eC] -= uL, uL = function(aET) {
			if (bn.aDf) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var f5 = aET.length, t8 = bn.aDf.t8, aB = 0; aB < f5; aB++)
					if (aET[aB].t8 === t8) return aB
			}
			return -1
		}(aER);
		return -1 === uL ? (bn.uJ.aDt = bn.uJ.aDt.concat(aER), 1e3 < bn.uJ.aDt.length && bn.uJ.aDt.splice(0, bn.uJ.aDt.length - 1e3), bn.y.aE1 += 29 === t.tA && bn.y.rx[0] === eC && 1 === bn.y.rx[2], !1) : (8 === ry.aES && (ry.aEW = (ry.aEW + (
			uL >> 1)) % 1024, eC = uL - uL % 2, uL %= 2, aER = aER.slice(eC, 2 + eC)), ax.dd(ry, aER, uL), !0)
	}, this.aEX = function(ry, aET, aEU) {
		var f8 = aD.data = new a5P,
			aEb = (f8.spawningSeed = ry.spawningSeed, ry.aES < 7 ? (f8.gameMode = 1, f8.numberTeams = ry.aES + 2) : 9 === ry.aES ? (f8.gameMode = f8.isZombieMode = 1, f8.numberTeams = 2) : (f8.gameMode = 0, f8.battleRoyaleMode = 7 === ry.aES ?
				0 : 10 === ry.aES ? 1 : 2), f8.selectedPlayer = aEU, f8.isContest = ry.aEY, f8.mapType = bS.aEZ(ry.el) ? 0 : 1, bS.aEa(f8, ry.el), f8.mapSeed = ry.mapSeed, f8.humanCount = aET.length);
		f8.selectableSpawn = 1 === f8.gameMode || aEb < 100, f8.colorsData = new Uint32Array(aEb), f8.playerNamesData = new Array(aEb), f8.a5n = new Uint32Array(aEb);
		for (var aB = 0; aB < aEb; aB++) f8.colorsData[aB] = aET[aB].color, f8.playerNamesData[aB] = aET[aB].username, f8.a5n[aB] = aET[aB].t8;
		if (2 === f8.battleRoyaleMode)
			for (f8.elo = new Uint16Array(aEb), aB = 0; aB < aEb; aB++) f8.elo[aB] = aET[aB].elo;
		aa.setState(8), bS.a7(ry.el, f8.mapSeed), aD.a5U(), aD.a5S = 2
	}
}

function aDl() {
	var e2 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEc = [bB.oE, bB.oE, bB.oF, bB.oj, bB.ok, bB.oV, bB.op, bB.oF, bB.pB, bB.oz, bB.p8],
		aEd = [
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
		aEe = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEs(s0, t8, aEu) {
		for (var fP = s0.length - 1; 0 <= fP; fP--) {
			var ql = s0[fP];
			0 === ql.id && ql.t8 === t8 && (ql.r = "[Redacted Message]", aEu) && (ql.aEv = 1)
		}
	}
	this.s5 = function(aEf) {
		var aEg, a1g;
		return aEf.id < 5 && (aEg = "@" + bF.tD.a0B(aEf.t8, 5)), 0 === aEf.id ? aEg + ": " + aEf.r : 1 === aEf.id ? (a1g = "@" + bF.tD.a0B(aEf.target, 5), 0 === aEf.aEh ? 32768 <= aEf.value ? aEg + " voted with " + (aEf.value - 32768 + 1) +
				" gold against " + a1g + " to weaken the latter's admin position. 📉" : aEg + " voted with " + (aEf.value + 1) + " gold for " + a1g + " to strengthen the latter's admin position. 💪" : 1 === aEf.aEh ? aEg + " sent " + Math.floor(
					aEf.value / 100) + " 🧈 gold to " + a1g + "." : aEg + " voted with " + (aEf.value / 10).toFixed(1) + " points for " + a1g + " to acknowledge the latter as clan leader. ✅") : 2 === aEf.id ? 0 === aEf.aEh ? aEg +
			" was 🔇 muted for 1 Hour." : 1 === aEf.aEh ? "The username of " + aEg + " was ✂️ redacted. Duration: 1 Day" : aEg + " 👢 was kicked." : 3 === aEf.id ? aEg + bo.eF(aEf.aEh, bo.e8[aEf.aEh][aEf.value]) + "@" + bF.tD.a0B(aEf.target, 5) +
			bo.eH(aEf.aEh, bo.e8[aEf.aEh][aEf.value]) : 4 === aEf.id ? aEg + bo.eF(5, bo.e8[5][aEf.aEh]) + "@" + bF.tD.a0B(aEf.target, 5) + bo.eH(5, bo.e8[5][aEf.aEh]) : 5 === aEf.id ? aEe[aEf.aEh] : 6 === aEf.id ? "You are about to mention " +
			aEf.value + " player" + (1 === aEf.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEf.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEf.id ? aEf.r : void 0
	}, this.s4 = function(aEf, aEi) {
		return {
			aEf: aEf,
			r: aEi,
			aEj: 0,
			fontSize: 1,
			s8: 0,
			aEk: aEf.id ? bB.oi : bB.o0
		}
	}, this.uO = function(player, rw) {
		return (2 === rw ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uP = function(uQ) {
		return aEc[uQ]
	}, this.aEl = function(uQ, a4g) {
		return uQ < 3 || 7 === uQ ? aEd[uQ][0] : 4 === uQ ? aEd[uQ][a4g < 1 ? 0 : a4g < 10 ? 1 : 2] : aEd[uQ][a4g < 10 ? 0 : 1]
	}, this.aEm = function(a4g) {
		return 0 === a4g
	}, this.aEH = function(rw, t8) {
		for (var uK = bn.uJ.uK, uJ = uK[rw], f5 = uJ.length, aB = 0; aB < f5; aB++)
			if (t8 === uJ[aB].t8) return uJ[aB];
		for (var fP = 0; fP < uK.length; fP++)
			if (rw !== fP)
				for (f5 = (uJ = uK[fP]).length, aB = 0; aB < f5; aB++)
					if (t8 === uJ[aB].t8) return uJ[aB];
		return null
	}, this.uR = function(ql) {
		return !!bn.aDf && ql.t8 === bn.aDf.t8
	}, this.aEn = function(uJ, aEo, aEp) {
		var a1d = [];
		loop: for (var aB = aEo; aB < aEp; aB++) {
			var a1e = bA.rs.a1f(uJ[aB].username);
			if (a1e) {
				for (var fP = a1d.length - 1; 0 <= fP; fP--)
					if (a1e === a1d[fP].name) {
						a1d[fP].gY++;
						continue loop
					} a1d.push({
					name: a1e,
					gY: 1
				})
			}
		}
		if (a1d.sort(function(fO, fP) {
				return fP.gY - fO.gY
			}), 0 === a1d.length) return "";
		for (var qa = a1d[0].name + ": " + a1d[0].gY, aB = 1; aB < a1d.length; aB++) qa += "   " + a1d[aB].name + ": " + a1d[aB].gY;
		return qa
	}, this.aEq = function(uQ, a4g, aDw) {
		return 0 === e2[uQ].length ? "Rank: " + (a4g + 1) : e2[uQ] + " Rank: " + (a4g + 1) + (3 !== uQ && aDw < 100 ? "   " + e2[3] + " Rank: " + (aDw + 1) : "")
	}, this.aEr = function(t8) {
		for (var rz = bn.y.rz, aB = 0; aB < rz.length; aB++) aEs(rz[aB].s0, t8);
		aEs(bn.message.aEt(), t8, 1), bn.s9.aEr(t8)
	}
}

function aDo() {
	var sc = 0,
		aEw = 0,
		aEx = 0,
		aEy = null,
		aEz = null;

	function aF2(ql, aF3, aF4) {
		var qa = ql.username;
		return (qa += "   " + bn.lF.aEq(ql.uQ, ql.a4g, ql.aDw)) + function(ql) {
			ql = ql.wl;
			if (ql < 1e3) return "   Gold: " + ql;
			if ((ql %= 1024) < 1e3) return "   Gold: " + ql + "k";
			return "   Gold: " + (ql - 999) + "M"
		}(ql) + ("   IP: " + bF.tD.a0B(ql.aDx, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aF4 ? aEw : aF1(ql, aF3)])
	}

	function aF1(ql, aF3) {
		return aEw = aF3 || bn.uJ.aEH(ql.t8) ? 1 : 0
	}
	this.uH = 0, this.aF0 = function() {
		!sc || aEw === aF1(aEz) && aEx === aEz.wl || (aEx = aEz.wl, aEy.show(-1, -1, aF2(aEz, 0, 1), 1, 1, aEz.color))
	}, this.uT = function(e, ql, aF3) {
		var a9R = e.getBoundingClientRect();
		this.show(a9R.left, a9R.top, ql, 0, aF3), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bn.uG && bn.uG.sA(1)
		}), this.uH = aF3
	}, this.show = function(fC, fE, ql, sg, aF3) {
		aEy = aEy || new sZ, aEx = (aEz = ql).wl, aEy.show(fC, fE, aF2(ql, aF3), sg, 0, aEz.color), sc = 1
	}, this.sA = function(sn) {
		this.uH = 0, aEy && aEy.sA(sn) && (sc = 0, aEz = null)
	}
}

function aDm() {
	function aF9() {
		bn.y.aE1 && 1 === bn.y.rx[2] && t.a60(29).aFC(), bn.y.aE1 = 0, t.a60(29).aFD(), t.a60(29).aFE(), bn.uG.aF0()
	}
	this.rz = new Array(4), this.rx = [0, 0, 1, 0], this.aE1 = 0, this.aF6 = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rz.length; aB++) this.rz[aB] = new aF7;
		this.rx[0] = bj.eQ.data[158].value
	}, this.aF8 = function() {
		aF9(), bn.aDh.dd()
	}, this.aEO = function() {
		bn.aDh.aEO();
		for (var aB = 0; aB < bn.y.rz.length; aB++) {
			var ry = bn.y.rz[aB];
			0 === ry.u2 ? ry.aFF = 0 : (ry.aFG = Math.max(ry.aFG - ry.aFF % 2, 0), ry.aFF++)
		}
		aF9()
	}, this.aFH = function(rw) {
		this.rx[0] !== rw || this.rx[2] || t.a60(29).aFI()
	}
}

function aDq() {
	var aFJ = 0,
		aFK = "",
		aFL = 0,
		aFM = 0,
		aFN = 0;

	function aFP(aEi) {
		b0.aFa.aFb(3, aEi)
	}

	function aFY(gY) {
		aFJ = 1, bn.message.aEM({
			id: 6,
			value: gY
		})
	}

	function aFS(r) {
		var aFe = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFe)
	}
	this.a0y = function(r) {
		var aFO, g, aFU;
		if (aFJ) return aFJ = 0, "yes" === (aFO = r.toLowerCase()) || "y" === aFO ? void aFP(aFK) : void bn.message.aEM({
			id: 5,
			aEh: 7
		});
		!(r.indexOf("@") < 0) && (aFO = aFS(r)) ? (aFK = r, g = function(aFR) {
			for (var f5 = aFR.length, aFc = [0, 0, 0, 0], aB = 0; aB < f5; aB++)
				for (var i = aFR[aB], fO = 0; fO < 4; fO++) i === "@room" + (fO + 1) && (aFc[fO] = 1);
			if ((aFM = bA.r1.a3Q(aFc)) % 4 == 0) return bA.r1.a3i(bn.uJ.uK);
			for (fO = 0; fO < 4; fO++) aFc[fO] = aFc[fO] ? bn.uJ.uK[fO] : [];
			return bA.r1.a3i(aFc)
		}(aFO), function(aFR, aFU, r) {
			if (!aFL) return;
			for (var f5 = aFU.length, aB = 0; aB < f5; aB++) 2 === aFU[aB].id && (r = r.replace(aFR[aFU[aB].eC], "@" + aFU[aB].fX));
			return aFJ = 1, aFP((aFK = r).slice(0, 126) + "|"), 1
		}(aFO, aFU = function(aFR) {
			for (var aFU = [], f5 = (aFN = aFL = 0, aFR.length), aB = 0; aB < f5; aB++) {
				var i = aFR[aB],
					lL = i.length;
				bA.rs.startsWith(i, "@[") ? lL <= 9 && bA.rs.a4G(i, "]") && aFU.push({
					id: 0,
					fX: i.substring(2, lL - 1).toUpperCase()
				}) : 6 === lL ? bA.rs.startsWith(i, "@room") || (aFN++, aFU.push({
					id: 1,
					fX: bG.tD.xD(i.substring(1), 5)
				})) : 1 < lL && lL < 5 && 0 <= (lL = b7.data.aDI(i.substring(1))) && (aFU.push({
					id: 2,
					fX: lL,
					eC: aB
				}), aFL = 1)
			}
			return aFU
		}(aFO), r) || (0 === aFU.length ? aFM || function(aFR) {
			for (var f5 = aFR.length, aB = 0; aB < f5; aB++) {
				var i = aFR[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFO) ? aFY(g.length) : aFP(r) : aFO.length === aFN ? aFP(r) : (function(g, aFU) {
			var lL = aFU.length;
			if (0 === lL) return;
			var f5 = g.length;
			loop: for (var aB = f5 - 1; 0 <= aB; aB--) {
				for (var fO = 0; fO < lL; fO++)
					if (0 === aFU[fO].id) {
						if (aFU[fO].fX === bA.rs.a1f(g[aB].username)) continue loop
					} else if (1 === aFU[fO].id && aFU[fO].fX === g[aB].t8) continue loop;
				g[aB] = g[--f5], g.pop()
			}
		}(g, aFU), aFY(g.length)))) : aFP(r)
	}, this.aFf = function(r) {
		var aFR = aFS(r);
		if (aFR)
			for (var a5 = new RegExp("^[0-9]+$"), f5 = aFR.length, aB = 0; aB < f5; aB++) {
				var i = aFR[aB].substring(1),
					lL = i.length;
				1 <= lL && lL <= 3 && a5.test(i) && (lL = parseInt(i, 10), !isNaN(lL)) && 0 <= lL && lL < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lL]))
			}
		return r
	}
}

function aDp() {
	var aFg, aFh = [],
		aFi = -1,
		aFj = 0,
		aFk = 0;

	function aFp() {
		aFj = bf.eT, (3 === this.uX ? aFo : (aFi = (aFh.length + aFi + 2 * this.uX - 1) % aFh.length, aFn))()
	}

	function aFn() {
		0 !== aFh.length && (aFk = 0, aFg && aFg.ua(), (aFg = new uU(aFp)).sM(aFi, aFh.length), aFg.show(aFh[aFi]), bn.message.resize())
	}

	function aFo() {
		aFk = 1, aFg && aFg.ua(), (aFg = new ub(aFn)).sM(aFh.length), aFg.show(), bn.message.resize()
	}
	this.aEM = function(aEf) {
		var ql;
		2 === aEf.id && 3 === aEf.aEh ? bn.lF.aEr(aEf.t8) : (ql = bn.lF.s4(aEf, bn.lF.s5(aEf)), (5 !== aEf.id && 6 !== aEf.id || (t.a60(29).aFl().s7(ql), 5 === aEf.id)) && (ql = bf.eT < aFj + 2e4, aFi !== aFh.length - 1 && ql || (aFi = aFh
			.length), aFh.push(aEf), bj.eQ.data[14].value || 7 === aEf.id || bp.play(), aFg) && (aFk && (bj.eQ.data[13].value || ql) ? aFg.sM(aFh.length) : aFn()))
	}, this.show = function() {
		aFo()
	}, this.sA = function() {
		aFi = aFh.length - 1, aFg && aFg.ua(), aFg = null
	}, this.resize = function() {
		aFg && aFg.resize()
	}, this.aEt = function() {
		return aFh
	}
}

function aDn() {
	var aFq = null,
		aFr = null,
		aFs = 0,
		aFt = 0,
		aFu = null;

	function aFw() {
		0 !== aFr.uQ && (bn.ug.sA(), t.u(8, 29, new tB(25, {
			tC: 0,
			t8: bF.tD.a0B(aFr.t8, 5),
			t9: 0
		}, 29)))
	}

	function aFy() {
		return !bn.aDf || bn.lF.uR(aFr) ? 1 : 0
	}

	function aFx() {
		var fC = aFq.fC,
			fE = aFq.fE,
			aG7 = (bn.ug.sA(), aFy());
		aFq = new uc([new w(bo.e8[5][0], function() {
			aG1(5, 0)
		}, aG7), new w(bo.e8[5][1], function() {
			aG1(5, 1)
		}, aG7), new w(bo.e8[5][2], function() {
			aG1(5, 2)
		}, aG7), new w(bo.e8[5][3], function() {
			aG1(5, 3)
		}, aG7)]), aG0(fC, fE), aFt = aFs = 2
	}

	function aFz() {
		29 === t.tA && t.a5z().aDg(bF.tD.a0B(aFr.t8, 5))
	}

	function aG1(id, value) {
		5 === id && b0.aG8.aG9({
			tC: 3,
			t8: bF.tD.a0B(aFr.t8, 5),
			value: value
		})
	}

	function aG0(fC, fE, ui) {
		aFq.show(fC, fE, ui), bn.uG.show(aFq.fC, aFq.fE, aFr, 1)
	}
	this.aFv = function(e, ql) {
		aFs = 1, aFr = ql, aFq = new uc([new w(L(127), aFw, 0 === ql.uQ ? 1 : 0), new w(L(128), aFx, aFy()), new w(L(129), aFz, 0)]), aG0((aFu = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aFu.clientY, 1)
	}, this.a30 = function(code) {
		if (29 !== t.tA) return !1;
		if (!aFr) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sA();
			else if (bA.rs.startsWith(code, "Numpad") || bA.rs.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFs) this.aFv(aFu, aFr);
				else {
					if (!aFq) return !1;
					1 === aFs ? code <= 1 ? aFw() : 2 === code ? aFx() : (aFz(), this.sA()) : (aG1(aFt, bL.iD(code - 1, 0, bo.e8[aFt].length - 1)), this.sA())
				}
		}
		return !0
	}, this.sA = function() {
		aFs = 0, aFq && aFq.sA(), aFq = null, bn.uG.sA()
	}
}

function aF7() {
	this.u2 = 0, this.el = 0, this.mapSeed = 0, this.aES = 0, this.aGC = 0, this.aGD = 0, this.aGE = 0, this.aEY = 0, this.aFG = 0, this.spawningSeed = 0, this.a2E = 0, this.aEW = 0, this.s0 = [], this.s1 = 1048575, this.aFF = 0, this.aGF = [{
		el: 0,
		mapSeed: 0,
		aES: 0,
		eT: 100,
		aEY: 0
	}, {
		el: 1,
		mapSeed: 0,
		aES: 1,
		eT: 200,
		aEY: 0
	}, {
		el: 2,
		mapSeed: 0,
		aES: 2,
		eT: 300,
		aEY: 0
	}, {
		el: 3,
		mapSeed: 0,
		aES: 3,
		eT: 400,
		aEY: 0
	}, {
		el: 0,
		mapSeed: 0,
		aES: 9,
		eT: 500,
		aEY: 0
	}, {
		el: 1,
		mapSeed: 0,
		aES: 10,
		eT: 600,
		aEY: 0
	}, {
		el: 2,
		mapSeed: 0,
		aES: 8,
		eT: 700,
		aEY: 0
	}, {
		el: 3,
		mapSeed: 0,
		aES: 3,
		eT: 800,
		aEY: 0
	}]
}

function aDr() {
	var aGG = [],
		tN = [],
		aGH = [];

	function aGJ(ql) {
		for (var r = ql.r, aGI = [];;) {
			var ed = function aGL(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qa = r.substring(position + 1, position + 6);
				if (5 !== qa.length) return aGL(r, position + 1);
				if (bA.rs.startsWith(qa, "room")) return aGL(r, position + 1);
				var aGS = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGS.test(qa)) return aGL(r, position + 1);
				aGS = r.substring(position + 6, position + 7);
				if (1 !== aGS.length) return position;
				qa = new RegExp("^[ :!.]+$");
				if (!qa.test(aGS)) return aGL(r, position + 1);
				return position
			}(r, 0);
			if (-1 === ed) {
				aGI.push(aGM(r, ql));
				break
			}
			0 === ed ? aGI.push(aGN(r.substring(1, 6), ql, ed)) : (aGI.push(aGM(r.substring(0, ed), ql)), aGI.push(aGN(r.substring(ed + 1, ed + 6), ql, ed))), r = r.substring(ed + 6)
		}
		return aGI
	}

	function aGN(qa, ql, ed) {
		var aDy = function(qa) {
				var t8 = bG.tD.xD(qa, 5),
					aDy = bn.uJ.aEH(t8);
				if (aDy) {
					for (aGG.push(aDy); 75 < aGG.length;) aGG.shift();
					return aDy
				}
				for (var aDt = bn.uJ.aDt, aB = aDt.length - 1; 0 <= aB; aB--)
					if (aDy = aDt[aB], t8 === aDy.t8) return aGG.push(aDy), aDy;
				for (aB = aGG.length - 1; 0 <= aB; aB--)
					if (aDy = aGG[aB], t8 === aDy.t8) return aGG.push(aDy), aDy;
				return bn.uJ.aDz(t8, qa, 1, 999999, 999999, 0, 0, 0, 0)
			}(qa),
			qa = (0 === ed && 0 === ql.aEf.id && ql.s8 && (ql.fontSize = bn.lF.aEl(aDy.uQ, aDy.a4g), ql.aEj = bn.lF.aEm(aDy.a4g)), document.createElement("span"));
		return qa.textContent = function(aDy, ql, ed) {
			if (aDy.aGQ) return aDy.aGQ--, ed = 2 === ql.aEf.id || (3 === ql.aEf.id || 4 === ql.aEf.id) && 0 !== ed, aDy.username + (ed ? " (" + aDy.aE7 + ")" : "");
			if (ql.aEf.aEv) return "Redacted " + bF.tD.a0B(aDy.t8, 2);
			return aDy.username
		}(aDy, ql, ed), qa.style.display = "inline-block", qa.style.color = bn.lF.uP(aDy.uQ), qa.style.cursor = "pointer", qa.style.margin = "0", qa.style.font = "inherit", qa.style.minWidth = qa.style.minHeight = "1em", bn.lF.uR(aDy) && (qa
			.style.textDecoration = "underline"), aDy.uS && (qa.style.textDecorationLine = "underline", qa.style.textDecorationStyle = "dotted"), bn.lF.aEm(aDy.a4g) && (qa.style.fontWeight = "bold"), qa.onclick = function(e) {
			bn.ug.aFv(e, aDy)
		}, bJ.rL() || (qa.onmouseover = function(e) {
			bn.uG.uT(e.target, aDy)
		}), tN.push(qa), qa
	}

	function aGM(r, ql) {
		var rr = document.createElement("span");
		return rr.textContent = r, rr.style.color = ql.aEk, rr.style.margin = "0", rr.style.font = "inherit", rr
	}

	function aGX(aDy, aE6, t8) {
		t8 !== aDy.t8 || aDy.aE7 || (aDy.aE7 = aDy.username, aDy.username = aE6)
	}
	this.ua = function() {
		for (var aB = 0; aB < tN.length; aB++) tN[aB].onclick = tN[aB].onmouseover = null;
		aGH = tN = null
	}, this.transform = function(ql) {
		for (var qY = document.createElement("div"), aGI = aGJ(ql), aB = 0; aB < aGI.length; aB++) qY.appendChild(aGI[aB]);
		0 === ql.aEf.id && (qY.vx143 = ql.aEf, aGH.push(qY)), qY.style.margin = "0.6em 0.6em", ql.s8 && (qY.style.marginLeft = qY.style.marginRight = "inherit"), qY.style.font = "inherit";
		var aGK = 0 < ql.aEf.id;
		return ql.aEj && (qY.style.fontWeight = "bold"), aGK && (qY.style.paddingLeft = "0.7em"), aGK && (qY.style.fontStyle = "italic"), qY.style.fontSize = ql.fontSize.toFixed(2) + "em", qY
	}, this.aGV = function(aGW) {
		if (aGW && (2 === aGW.id && 1 === aGW.aEh || 3 === aGW.id && 2 === aGW.aEh)) {
			var t8 = 3 === aGW.id ? aGW.target : aGW.t8;
			if (!bn.uJ.aEH(t8)) {
				for (var aE6 = "Redacted " + bF.tD.a0B(t8, 2), aDt = bn.uJ.aDt, aB = aDt.length - 1; 0 <= aB; aB--) aGX(aDt[aB], aE6, t8);
				for (aB = aGG.length - 1; 0 <= aB; aB--) aGX(aGG[aB], aE6, t8)
			}
		}
	}, this.aE8 = function(t8) {
		for (var aGY = aGH, aB = aGY.length - 1; 0 <= aB; aB--) {
			var f8 = aGY[aB];
			if (f8.vx143.t8 === t8) {
				for (; f8.firstChild;) t.removeChild(f8, f8.firstChild);
				for (var aGI = aGJ(bn.lF.s4(f8.vx143, bn.lF.s5(f8.vx143))), fO = 0; fO < aGI.length; fO++) f8.appendChild(aGI[fO]);
				aGY.splice(aB, 1)
			}
		}
	}, this.aEr = function(t8) {
		for (var aGY = aGH, aB = aGY.length - 1; 0 <= aB; aB--) {
			var f8 = aGY[aB];
			if (f8.vx143.t8 === t8) {
				for (; f8.firstChild;) t.removeChild(f8, f8.firstChild);
				f8.vx143.r = "[Redacted Message]";
				for (var aGI = aGJ(bn.lF.s4(f8.vx143, bn.lF.s5(f8.vx143))), fO = 0; fO < aGI.length; fO++) f8.appendChild(aGI[fO]);
				aGY.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGZ, aGa, aGb;

	function aGg(aB) {
		var button = aY.rS[aB],
			fC = button.fC,
			fE = button.fE,
			i = button.i,
			j = button.j;
		vX.fillStyle = button.aGe, vX.fillRect(fC, fE, i, j), aB === aGZ && (vX.fillStyle = aGb, vX.fillRect(fC, fE, i, j)), vX.lineWidth = bc.zs, vX.strokeStyle = aGa, vX.strokeRect(fC, fE, i, j),
			function(button) {
				var fC = button.fC,
					fE = button.fE,
					i = button.i,
					j = button.j;
				bA.qt.textAlign(vX, 1), bA.qt.textBaseline(vX, 1), vX.font = button.font, vX.fillStyle = aGa, vX.fillText(button.aEi, Math.floor(fC + i / 2), Math.floor(fE + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fE = 0, this.gap = 0, this.dd = function() {
		aGZ = -1, aGa = bB.o0, aGb = "rgba(255,255,255,0.16)", this.rS = new Array(7), this.j = Math.floor((a0.a1.iE() ? .123 : .093) * h.iF), this.i = Math.floor((a0.a1.iE() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGc = Math.floor(.26 * this.j),
			aGd = bA.qt.sk(1, aGc);
		this.rS[0] = {
			fC: 0,
			fE: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEi: "Multiplayer",
			font: aGd,
			aGe: "rgba(22,88,22,0.8)",
			fontSize: aGc
		}, aGc = Math.floor(.18 * this.j), aGd = bA.qt.sk(1, aGc), this.rS[1] = {
			fC: 0,
			fE: 0,
			i: this.i - this.rS[0].i - this.gap,
			j: this.j,
			aEi: "Single Player",
			font: aGd,
			aGe: "rgba(22,88,88,0.8)",
			fontSize: aGc
		}, this.rS[2] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEi: "",
			font: this.rS[1].font,
			aGe: "rgba(100,0,0,0.8)",
			fontSize: this.rS[1].fontSize
		}, this.rS[3] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: this.j,
			aEi: "Back",
			font: this.rS[0].font,
			aGe: "rgba(0,0,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.rS[4] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEi: "The game was updated!",
			font: this.rS[1].font,
			aGe: "rgba(100,0,0,0.8)",
			fontSize: this.rS[1].fontSize
		}, this.rS[5] = {
			fC: 0,
			fE: 0,
			i: this.rS[0].i,
			j: Math.floor(.8 * this.j),
			aEi: "Reload",
			font: this.rS[0].font,
			aGe: "rgba(0,100,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.rS[6] = {
			fC: 0,
			fE: 0,
			i: this.rS[1].i,
			j: this.rS[5].j,
			aEi: "Back",
			font: this.rS[0].font,
			aGe: "rgba(0,0,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.aAQ()
	}, this.aAQ = function() {
		this.fE = Math.floor(.54 * h.j), this.rS[0].fC = Math.floor(.5 * h.i - .5 * this.i), this.rS[1].fC = this.rS[0].fC + this.rS[0].i + this.gap, this.rS[2].fC = this.rS[3].fC = this.rS[0].fC, this.rS[4].fC = this.rS[5].fC = this.rS[0].fC,
			this.rS[6].fC = this.rS[1].fC, this.rS[0].fE = Math.floor(.54 * h.j), this.rS[1].fE = this.rS[0].fE, this.rS[2].fE = Math.floor((h.j - this.rS[2].j - this.rS[3].j - this.gap) / 2), this.rS[3].fE = this.rS[2].fE + this.rS[2].j + this
			.gap, this.rS[4].fE = Math.floor((h.j - this.rS[4].j - this.rS[5].j - this.gap) / 2), this.rS[5].fE = this.rS[6].fE = this.rS[4].fE + this.rS[4].j + this.gap
	}, this.aGf = function() {
		aGg(0), aGg(1)
	}, this.aGh = function() {
		aGg(2), aGg(3)
	}, this.aGi = function() {
		aGg(4), aGg(5), aGg(6)
	}, this.a2S = function(fC, fE, ml) {
		var aB = -1;
		return 0 === aa.a29() ? aB = this.a2w(fC, fE, 0, 2) : 3 === aa.a29() ? aB = this.a2w(fC, fE, 3, 1) : 5 === aa.a29() && (aB = this.a2w(fC, fE, 5, 2)), aGZ !== aB && (aGZ = aB, ml) && (bf.dk = !0), -1 !== aB && (aT.ru(), !0)
	}, this.a2w = function(fC, fE, aGj, size) {
		for (var aB = aGj; aB < aGj + size; aB++)
			if (fC >= this.rS[aB].fC && fE >= this.rS[aB].fE && fC <= this.rS[aB].fC + this.rS[aB].i && fE <= this.rS[aB].fE + this.rS[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGl, aGm, a82, aGn, aGo, aGp, aGq, aGr, aGs, a81, aGt, aGu, aGv, aGw = 1,
		aGx = 0,
		aGy = 0;

	function aH2(aH3) {
		aH3 ? aGv = (aGv + 1) % b0.y.aH4 : (b0.y.close(aGv, 3280), aGw ? aGw = 0 : (aGy = 1 - aGy, 0 === (aGx = (aGx + 1) % 2) && (aGv = (aGv + 1) % b0.y.aH4, b0.y.close(aGv, 3280)))), aGu = bf.eT, aZ.aH1 = aGy, b0.y.aH5(aGv, 4, 1) && b0.aFa.aH6(aGv)
	}

	function aH7() {
		if (0 !== aGv) return 1 === aGv && __fx.customLobby.isActive() ? (o.a2H(3249), __fx.customLobby.setActive(!1)) : void aH2();
		o.a2H(3249)
	}

	function aHC(fE, aA8, u2) {
		var nQ = Math.floor((h.i - aGn) / 2) + aGq,
			nd = nQ + Math.floor(u2 * (aGn - 2 * aGq));
		vX.lineWidth = aA8, vX.beginPath(), vX.moveTo(nQ, fE), vX.lineTo(nd, fE), vX.lineTo(Math.floor(nQ - aGq + u2 * aGn), fE + a82), vX.lineTo(nQ - aGq, fE + a82), vX.closePath()
	}
	this.aGz = 1, this.aH0 = 0, this.aH1 = 0, this.dd = function() {
		aa.setState(6), aGl = 0, aGm = 1, aGr = "rgba(0,220,120,0.4)", aGs = "rgba(0,0,0,0.8)", this.resize(), bf.dk = !0, aGw = 1, aGx = 0, aGv = this.aGz - 1, aGy = 0 === this.aH0 ? l.dy ? 1 : 0 : this.aH0 - 1, aH2(1)
	}, this.resize = function() {
		aGn = Math.floor((a0.a1.iE() ? .5 : .25) * h.iF), aGo = aGn + 12, a82 = Math.floor(.125 * aGn), aGq = 3 * a82, aGp = Math.floor(.225 * aGn), aGt = Math.floor(.3 * a82), a81 = bA.qt.sk(0, aGt)
	}, this.a2D = function(a24) {
		a24 === aGv && aH7()
	}, this.hI = function(fC, fE) {
		var nQ = Math.floor((h.i - aGo) / 2),
			nR = Math.floor(.5 * (h.j - bc.gap - a82 - aGp)) + a82 + bc.gap;
		return nQ < fC && fC < nQ + aGo && nR < fE && fE < nR + aGp && (this.a37(), aY.a2S(fC, fE, !1), !0)
	}, this.a37 = function() {
		b0.y.a2I(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.eY = function() {
		6 === aa.a29() && (bf.eT > aGu + 12e3 && aH7(), 100 < (aGl += .07 * aGm * (aGl < 16 ? 5 + aGl : 84 < aGl ? 105 - aGl : 17)) ? (aGl = 100, aGm = -1) : aGl < 0 && (aGl = 0, aGm = 1), aGr = "rgba(0," + Math.floor(190 - 1.9 * aGl) + "," +
			Math.floor(120 - 1.2 * aGl) + "," + (.4 + .004 * aGl) + ")", aGs = "rgba(0," + Math.floor(1.9 * aGl) + "," + Math.floor(1.2 * aGl) + "," + (.8 - .004 * aGl) + ")", bf.dk = !0)
	}, this.vW = function() {
		var fC = Math.floor((h.i - aGo) / 2),
			fE = Math.floor(.5 * (h.j - bc.gap - a82 - aGp));
		! function(title, fE, aA8, u2) {
			vX.fillStyle = aGs, aHC(fE, aA8, 1), vX.fill(), vX.fillStyle = aGr, aHC(fE, aA8, u2), vX.fill(), vX.strokeStyle = bB.o0, aHC(fE, aA8, 1), vX.stroke(),
				function(aHE, fE) {
					bA.qt.textAlign(vX, 1), bA.qt.textBaseline(vX, 1), vX.font = a81, vX.fillStyle = bB.o0, vX.fillText(aHE, Math.floor(.5 * h.i), Math.floor(fE + .58 * a82))
				}(title, fE)
		}(L(130), fE, 3, aGl / 100),
		function(fC, fE, i, j, aEi) {
			vX.fillStyle = bB.nv, vX.fillRect(fC, fE, i, j), vX.lineWidth = 3, vX.strokeStyle = bB.o0, vX.strokeRect(fC, fE, i, j);
			var f5 = Math.floor(.3 * j);
			bA.qt.textAlign(vX, 1), bA.qt.textBaseline(vX, 1), vX.font = bA.qt.sk(0, f5), vX.fillStyle = bB.o0, vX.fillText(aEi, Math.floor(fC + i / 2), Math.floor(fE + j / 2 + .1 * f5))
		}(fC, fE + a82 + bc.gap, aGo, aGp, L(37))
	}
}

function cR() {
	var a20 = 0;
	this.dd = function() {
		aY.dd(), a20 = 0
	}, this.setState = function(aHF) {
		a20 = aHF
	}, this.a29 = function() {
		return a20
	}, this.aHG = function() {
		this.setState(8), t.x()
	}, this.a30 = function(e) {
		if (!bS.xT) return !1;
		if (!(bf.eT < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHH()) return !0;
				if ("Enter" === e.key) {
					if (0 === a20) return !0;
					if (7 === a20) return !0
				}
			}
			return !1
		}
	}, this.aHI = function() {
		bZ.resize()
	}, this.aHH = function() {
		return !!bZ.sA()
	}, this.hI = function(fC, fE) {
		!bS.xT || bZ.hI(fC, fE) || 6 === a20 && aZ.hI(fC, fE) || bY.hI(fC, fE) || aT.hI(fC, fE)
	}, this.a2S = function(fC, fE) {
		!aT.aAJ && aY.a2S(fC, fE, !0) || aT.a2S(fC, fE)
	}, this.click = function(fC, fE) {
		aT.a2r()
	}, this.a2V = function(fC, fE, deltaY) {}, this.aHJ = function() {
		aY.aAQ(), bf.dk = !0
	}, this.vW = function() {
		8 !== a20 && 10 !== a20 && (vX.imageSmoothingEnabled = !0, this.z2(), 0 !== a20 && (aT.vW(), aO.vW(), this.aHK(), bY.vW()), 0 !== a20 && 6 === a20 && aZ.vW(), bZ.vW(), t.vW())
	}, this.z2 = function() {
		var aHM, aHL;
		if (__fx.makeMainMenuTransparent) vX.clearRect(0, 0, h.i, h.j);
		else bS.xT ? (aHL = h.i / bS.fG, aHM = h.j / bS.fH, vX.setTransform(aHL = aHM < aHL ? aHL : aHM, 0, 0, aHL, Math.floor((h.i - aHL * bS.fG) / 2), Math.floor((h.j - aHL * bS.fH) / 2)), vX.drawImage(bS.xV, 0, 0), vX.setTransform(1, 0, 0, 1,
			0, 0), vX.fillStyle = bB.nv) : vX.fillStyle = bB.nr, vX.fillRect(0, 0, h.i, h.j)
	}, this.aHK = function() {
		var fE = Math.floor(.3 * h.j),
			canvas = ab.aHN("territorial.io"),
			i6 = (i6 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i6,
			fC = (vX.globalAlpha = .15, vX.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i6 * canvas.width))),
			fC = Math.floor(fC / i6),
			fE = Math.floor(fE - .5 * canvas.height * i6),
			fE = Math.floor(fE / i6);
		vX.setTransform(i6, 0, 0, i6, fC, fE), vX.drawImage(canvas, fC, fE), vX.setTransform(1, 0, 0, 1, 0, 0), vX.globalAlpha = 1, vX.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aEW = 0;
	var aHP, aHQ, aHR, aHS, aHT, aHU = this.aHO = 0;

	function aHX() {
		aHS = aHT = null, aHU = 0
	}
	this.dd = function(ry, aET, aEU) {
		t.x(), bn.ua(), aa.setState(10), aHS = ry, aHT = aET, aHU = aEU, this.aEW = ry.aEW, this.aHO = aEU, aHP = 0, aHQ = bf.eT + 4500, b0.y.a2E = ry.a2E, b0.y.a27 === ry.a2E ? (console.log("direct pass"), aHR = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a27, 3247), aHR = 2, b0.y.aH5(ry.a2E, 5, 2) && b0.pN.aHV()), vX.imageSmoothingEnabled = !0, aa.z2();
		aET = ab.aHN("loading"), aEU = (a0.a1.iE() ? .396 : .25) * h.iF / aET.width;
		vX.setTransform(aEU, 0, 0, aEU, Math.floor((h.i - aEU * aET.width) / 2), Math.floor((h.j - aEU * aET.height) / 2)), vX.imageSmoothingEnabled = !1, vX.drawImage(aET, 0, 0), vX.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mj = function() {
		0 < aHR && bf.eT > aHQ && (aHR--, aHQ += 4500, 0 === bf.aHY) && 0 === bf.kN() && b0.y.aH5(b0.y.a2E, 5, 2)
	}, this.aHZ = function() {
		return 10 === aa.a29() && (bn.aDi.aEX(aHS, aHT, aHU), aHX(), !0)
	}, this.aHa = function() {
		10 === aa.a29() && 2 <= ++aHP && (bn.aDi.aEX(aHS, aHT, aHU), aHX())
	}
}

function cS() {
	var aHc, canvas, a1G, aHd;

	function aHj(eC, name, aHk, qa) {
		a1G[eC] = name, canvas[eC] = new Image, canvas[eC].onload = function() {
			! function(eC, aHk) {
				var a4l, a4m = null;
				7 === aHk ? a4l = bA.a3D.a4o : 8 === aHk ? (a4l = bA.a3D.a4r, a4m = .1) : 3 === aHk ? (a4l = bA.a3D.a4p, a4m = .06) : 5 === aHk ? a4l = bA.a3D.a4s : 6 === aHk ? a4l = bA.a3D.a4n : 4 === aHk && (a4l = bA.a3D.a4t);
				canvas[eC] = bA.a3D.a4k(canvas[eC], a4l, a4m)
			}(eC, aHk), aHm()
		}, canvas[eC].onerror = function(e) {
			console.error("Error loading image at index", eC, "Error:", e), aHm()
		}, canvas[eC].src = "data:image/png;base64," + qa
	}

	function aHm() {
		aHc--, aHg()
	}

	function aHg() {
		0 === aHc && (aHc = -1, aHi(), bf.dk = !0, canvas[7] = aHd, canvas[8] = aHd, canvas[9] = aHd, canvas[10] = aHd, 5 === t.tA) && t.a5z().aHo.resize()
	}

	function aHi() {
		aL.a6B(), bY.aDY([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xY = new zP, aj.xY.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHc = 23, canvas = new Array(aHc), a1G = new Array(aHc), (aHd = document.createElement("canvas")).width = 1;
			for (var aB = aHc - (aHd.height = 1); 0 <= aB; aB--) canvas[aB] = aHd;
			aHi(), aHj(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHj(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHj(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(3, "orders", 6,
					"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"
					), aHj(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHj(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHj(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHj(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(8,
					"googleplay", 3,
					"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"
					), aHj(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHj(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHj(14, "bestPlayer", 5,
					"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"
					), aHj(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHj(16, "apple", 3,
					"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"
					), aHj(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHj(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHj(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHj(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHj(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHj(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eC) {
		return canvas[eC]
	}, this.aHN = function(name) {
		for (var aB = a1G.length - 1; 0 <= aB; aB--)
			if (a1G[aB] === name) return canvas[aB];
		return aHd
	}, this.tc = function() {
		return aHc <= 0
	}, this.aHf = function() {
		aHc = 0, aHg()
	}
}

function cT() {
	var aHr, aHs, aHt, aHu, aHv, aHw, aHx, aHy, aHz, aI0, aHp = [
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
		aHq = [
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

	function aI6(jg, ni) {
		for (var aB = jg; aB < ni; aB++) aHr[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100)), aHs[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100)), aHt[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100))
	}

	function aI5(jg, ni) {
		for (var colorsData = aD.data.colorsData, aB = jg; aB < ni; aB++) {
			var fX = colorsData[aB];
			aHr[aB] = 4 * (fX >> 12), aHs[aB] = 4 * (fX >> 6 & 63), aHt[aB] = 4 * (63 & fX)
		}
	}

	function aIR(ej, aIT) {
		aCu[ej] = 0, aCu[ej + 1] = 0, aCu[ej + 2] = aIT, aCu[ej + 3] = 0, aIU(ej)
	}

	function aIU(ej) {
		var fC;
		bb.nq || (fC = ac.z3(ej), ej = ac.z4(ej), bb.nq = fC >= ba.aCt[0] && fC <= ba.aCt[2] && ej >= ba.aCt[1] && ej <= ba.aCt[3])
	}
	this.f7 = new Int32Array(4), this.de = function() {
		var f7 = this.f7;
		f7[0] = -4 * bS.fG, f7[1] = 4, f7[2] = -f7[0], f7[3] = -f7[1]
	}, this.dd = function() {
		if (aHr ? (aHr.fill(0), aHs.fill(0), aHt.fill(0), aHu.fill(0), aHv.fill(0), aHw.fill(0), aHx.fill(0), aHy.fill(0), aHz.fill(0), aI0.fill(0), this.a9H.fill(0)) : (aHr = new Uint8Array(aD.f2), aHs = new Uint8Array(aD.f2), aHt =
				new Uint8Array(aD.f2), aHu = new Uint8Array(aD.f2), aHv = new Uint8Array(aD.f2), aHw = new Uint8Array(aD.f2), aHx = new Uint8Array(aD.f2), aHy = new Uint8Array(aD.f2), aHz = new Uint8Array(aD.f2), aI0 = new Uint8Array(aD.f2), this
				.a9H = new Uint8Array(aD.f2)), aD.hz)
			for (var aBX = bg.aBX, aB = aD.f2 - 1; 0 <= aB; aB--) {
				var ed = aBX[aB],
					lL = bL.fW((aHq[ed][3] + 1) * ay.random(), ay.value(100));
				aHr[aB] = aHp[ed][0] + lL * aHq[ed][0], aHs[aB] = aHp[ed][1] + lL * aHq[ed][1], aHt[aB] = aHp[ed][2] + lL * aHq[ed][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aI5(0, aD.kQ), aI6(aD.kQ, aD.f2)) : aI6(0, aD.f2) : aI5(0, aD.f2);
		! function() {
			var aB, f8;
			for (aB = aD.f2 - 1; 0 <= aB; aB--) f8 = bL.fW(aHr[aB] + aHs[aB] + aHt[aB], 3), aHr[aB] += aIC(f8 - aHr[aB], 2), aHs[aB] += aIC(f8 - aHs[aB], 2), aHt[aB] += aIC(f8 - aHt[aB], 2), aHr[aB] -= aHr[aB] % 4, aHs[aB] -= aHs[aB] % 4, aHt[
				aB] -= aHt[aB] % 4
		}(),
		function() {
			for (var f5 = aD.f2, aID = aHr, aIE = aHs, aIF = aHt, aIG = aHu, aB = 0; aB < f5; aB++) aID[aB] += aB >> 7, aIE[aB] += aB >> 5 & 3, aIF[aB] += aB >> 3 & 3, aIG[aB] = 7 & aB
		}(), this.aI9(),
			function() {
				for (var f5 = aD.f2, aIH = aHv, aII = aHw, aIJ = aHx, aID = aHr, aIE = aHs, aIF = aHt, aB = 0; aB < f5; aB++) {
					var eB = aID[aB],
						tY = aIE[aB],
						fP = aIF[aB];
					60 <= eB + tY + fP ? (aIH[aB] = Math.max(eB - 40, 3 & eB), aII[aB] = Math.max(tY - 40, 3 & tY), aIJ[aB] = Math.max(fP - 40, 3 & fP)) : (aIH[aB] = eB + 40, aII[aB] = tY + 40, aIJ[aB] = fP + 40)
				}
			}(),
			function() {
				for (var f5 = aD.f2, aIK = aHy, aIL = aHz, aIM = aI0, aID = aHr, aIE = aHs, aIF = aHt, aB = 0; aB < f5; aB++) {
					var eB = aID[aB],
						tY = aIE[aB],
						fP = aIF[aB];
					688 <= eB + tY + fP ? (aIK[aB] = eB - 88, aIL[aB] = tY - 88, aIM[aB] = fP - 88) : (aIK[aB] = Math.min(eB + 88, 252 + (3 & eB)), aIL[aB] = Math.min(tY + 88, 252 + (3 & tY)), aIM[aB] = Math.min(fP + 88, 252 + (3 & fP)))
				}
			}()
	}, this.a89 = function(player) {
		var g = bO.fe;
		return g[0] = aHr[player], g[1] = aHs[player], g[2] = aHt[player], g
	}, this.aI9 = function() {
		for (var aB = aD.f2 - 1; 0 <= aB; aB--) this.a9H[aB] = aHr[aB] + aHs[aB] + aHt[aB] < 280 ? 0 : 1
	}, this.z3 = function(ej) {
		return bL.fW(ej, 4) % bS.fG
	}, this.z4 = function(ej) {
		return bL.fW(ej, 4 * bS.fG)
	}, this.yb = function(fC, fE) {
		return Math.floor(4 * (fE * bS.fG + fC))
	}, this.yr = function(ej) {
		var f7 = this.f7;
		return this.aIN(ej + f7[0]) || this.aIN(ej + f7[1]) || this.aIN(ej + f7[2]) || this.aIN(ej + f7[3])
	}, this.fT = function(ej) {
		var f7 = this.f7;
		return this.fA(ej + f7[0]) || this.fA(ej + f7[1]) || this.fA(ej + f7[2]) || this.fA(ej + f7[3])
	}, this.yp = function(ej, player) {
		var f7 = this.f7;
		return this.aIO(ej + f7[0], player) || this.aIO(ej + f7[1], player) || this.aIO(ej + f7[2], player) || this.aIO(ej + f7[3], player)
	}, this.gf = function(ej) {
		return 208 <= aCu[ej + 3]
	}, this.yx = function(player, ej) {
		return this.gf(ej) && this.z0(player, ej)
	}, this.z0 = function(player, ej) {
		return player === this.ex(ej)
	}, this.aIP = function(ej) {
		return 208 <= aCu[ej + 3] && aCu[ej + 3] < 224
	}, this.jb = function(ej) {
		return 224 <= aCu[ej + 3] && aCu[ej + 3] < 248
	}, this.yq = function(ej) {
		for (var f7 = this.f7, aB = 3; 0 <= aB; aB--)
			if (this.iJ(ej + f7[aB])) return !0;
		return !1
	}, this.f0 = function(ej) {
		return this.gf(ej) || this.ew(ej)
	}, this.iJ = function(ej) {
		return 0 === aCu[ej + 3] && 2 === aCu[ej + 2]
	}, this.ew = function(ej) {
		return 0 === aCu[ej + 3] && 1 === aCu[ej + 2]
	}, this.xg = function(ej) {
		return 0 === aCu[ej + 3] && 3 === aCu[ej + 2]
	}, this.fA = function(ej) {
		return 0 === aCu[ej + 3] && 5 === aCu[ej + 2]
	}, this.aIN = function(ej) {
		return 0 === aCu[ej + 3] && 3 <= aCu[ej + 2]
	}, this.en = function(ej) {
		return (aCu[ej] >> 1 << 8) + aCu[ej + 1]
	}, this.aIQ = function(ej) {
		return 1 & aCu[ej]
	}, this.aIO = function(ej, player) {
		return this.ew(ej) || this.gf(ej) && player !== this.ex(ej)
	}, this.ex = function(ej) {
		return aCu[ej] % 4 * 128 + aCu[ej + 1] % 4 * 32 + aCu[ej + 2] % 4 * 8 + aCu[ej + 3] % 8
	}, this.yy = function(ej) {
		aIR(ej, 1)
	}, this.aIS = function(ej) {
		aIR(ej, 2)
	}, this.yc = function(ej, player) {
		aCu[ej] = aHr[player], aCu[ej + 1] = aHs[player], aCu[ej + 2] = aHt[player], aCu[ej + 3] = 208 + aHu[player], aIU(ej)
	}, this.ga = function(ej, player) {
		aCu[ej] = aHv[player], aCu[ej + 1] = aHw[player], aCu[ej + 2] = aHx[player], aCu[ej + 3] = 224 + aHu[player], aIU(ej)
	}, this.jc = function(ej, player) {
		aCu[ej] = aHy[player], aCu[ej + 1] = aHz[player], aCu[ej + 2] = aI0[player], aCu[ej + 3] = 248 + aHu[player], aIU(ej)
	}
}

function cs() {
	var aIV = 0,
		aIX = new Uint16Array(64);

	function w9(a6F) {
		aIV -= 2;
		for (var aB = a6F; aB < aIV; aB += 2) aIX[aB] = aIX[aB + 2], aIX[aB + 1] = aIX[aB + 3]
	}
	this.dd = function() {
		aIV = 0
	}, this.eY = function() {
		var aB, jZ, ih;
		if (0 !== aIV)
			if (0 === ag.mz[aD.ep]) aIV = 0;
			else if (0 === ad.gC(aD.ep)) aIV = 0;
		else
			for (aB = aIV - 2; 0 <= aB; aB -= 2)(jZ = aIX[aB]) < aD.f2 && 0 === ag.mz[jZ] ? w9(aB) : (ih = aIX[aB + 1], (jZ >= aD.f2 && bs.aIZ(aD.ep) || jZ < aD.f2 && bs.aIa(aD.ep, jZ)) && (b8.hV.hc(ih, jZ), w9(aB)))
	}, this.hd = function(jZ, ih) {
		! function(jZ, ih) {
			for (var aB = 0; aB < aIV; aB += 2)
				if (aIX[aB] === jZ) return aIX[aB + 1] = Math.min(aIX[aB + 1] + ih, 1023), 1;
			return
		}(jZ, ih) && 64 !== aIV && (aIX[aIV] = jZ, aIX[aIV + 1] = ih, aIV += 2)
	}
}

function cU() {
	function aIi(player) {
		var eU;
		bA.gR.a4M(player) && (eU = ag.h7[player] - ag.a4R[player] + ad.aIk(player), bd.gV(player, Math.abs(eU), eU < 0 ? 18 : 12)), ag.h7[player] = 0, ag.a4R[player] = 0
	}

	function aIr() {
		aX.show(!1, !1, !1, !0), aW.aC3(), bR.a0f.a1S()
	}

	function aIe(player, aIq) {
		for (var aB = aIq.length - 1; 0 <= aB; aB--) ad.aIt(aIq[aB], player)
	}

	function aIg(player) {
		var iy = ag.iy,
			iz = ag.iz,
			j0 = ag.j0,
			j1 = ag.j1,
			fG = bS.fG;
		if (ag.gt[player]) {
			ag.gt[player] = 0;
			for (var nQ = iy[player], nR = j0[player], fC = iz[player]; nQ <= fC; fC--)
				for (var fE = j1[player]; nR <= fE; fE--) {
					var gd = 4 * (fE * fG + fC);
					ac.yx(player, gd) && ac.yy(gd)
				}
		}
		iz[player] = j1[player] = 0, iy[player] = j0[player] = Math.max(fG, bS.fH)
	}
	this.dl = function(gd) {
		var player, eU = ag.gt[gd] + ag.yX[gd];
		bN.y.kU[gd] ? eU && (aIe(player = gd, ad.aIf(player)), aIg(player), af.aIh(), aF.gT(player), ad.clear(player), aIi(player), function(player) {
			ag.yX[player] = 0, ag.gX[player] = [], ag.gl[player] = [], ag.gm[player] = [], ag.fU[player] = []
		}(player)) : !eU && ag.gX[gd].length || this.aId(gd)
	}, this.aId = function(player) {
		! function(player) {
			bA.gR.jn(player) || (ag.a1W[player] = bi.a1m.aIp(), aD.a0w++);
			var aIq = ad.aIf(player);
			0 === aIq.length ? bA.gR.a4J(player) && aIr() : (aIe(player, aIq), function(player, aIq) {
				var aIv = aIq[function(aIq) {
					var aB, eC = 0;
					for (aB = aIq.length - 1; 1 <= aB; aB--) ag.gt[aIq[aB]] > ag.gt[aIq[eC]] && (eC = aB);
					return eC
				}(aIq)];
				9 === aD.ki && (1 === bg.f3[player] ? ay.kI(8) && az.aIw(aIv) : aE.ho[player] && (aN.a7d(765, 0), aN.a1I(280, L(131, [ag.a1X[aIv], ag.a1X[player]]), 765, aIv, bB.nr, bB.pC, -1, !0)));
				if (bA.gR.a4J(player)) aIr(), aN.a17(aIv, 1);
				else {
					for (var aB = aIq.length - 1; 0 <= aB; aB--)
						if (bA.gR.a4M(aIq[aB]) && (bd.mv[4 - bA.gR.jn(player)]++, bA.gR.a4J(aIq[aB]))) return aN.a17(player, 0);
					bA.gR.jn(player) || aN.a7N(0, player, aIv)
				}
			}(player, aIq))
		}(player), aIg(player), af.aIh(), aIi(player),
			function(player) {
				ag.mz[player] = 0, ag.gX[player] = null, ag.gl[player] = null, ag.gm[player] = null, ag.fU[player] = null
			}(player), aF.gT(player), ad.clear(player), bN.aIn.aIo(player)
	}
}

function cx() {
	var input;

	function aIx(e) {
		(e = e.target.files) && 0 < e.length && b6.aJ0(e[0])
	}

	function aJ4(e) {
		var ed = new Image;
		ed.onload = aJ5, ed.src = e.target.result
	}

	function aJ5(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJ7 = bj.eQ.data[162].value,
			max = Math.min(bS.aJ8, aJ7),
			aJ7 = (max = a0.id || bJ.rL() ? Math.min(1400, aJ7) : max) / Math.max(i, j);
		if (aJ7 < 1 && (i = Math.floor(aJ7 * i + .125), j = Math.floor(aJ7 * j + .125)), max < i || max < j || i < 10 || j < 10) aJ7 = "Invalid Image Dimensions!", a0.wG ? a0.wG.showToast(aJ7) : alert(aJ7);
		else {
			for (var max = document.createElement("canvas"), aJ7 = (max.width = i, max.height = j, max.getContext("2d")), aJA = document.createElement("canvas"), aJB = (aJA.width = e.width, aJA.height = e.height, aJA.getContext("2d")), e = (aJB
					.drawImage(e, 0, 0), aJB.getImageData(0, 0, aJA.width, aJA.height)), aJB = aJ7.createImageData(i, j), src = e.data, aJE = aJB.data, a9s = aJA.width / i, a9t = aJA.height / j, fE = 0; fE < j; fE++)
				for (var fC = 0; fC < i; fC++) {
					var aJF = Math.floor(fC * a9s),
						aJF = 4 * (Math.floor(fE * a9t) * aJA.width + aJF),
						aJI = 4 * (fE * i + fC);
					aJE[aJI] = src[aJF], aJE[1 + aJI] = src[1 + aJF], aJE[2 + aJI] = src[2 + aJF], aJE[3 + aJI] = 255
				}
			aJ7.putImageData(aJB, 0, 0), 20 === t.tA && t.a5z().aJ5(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aIx
	}, this.ua = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aIy = function() {
		input.click()
	}, this.aJ0 = function(aJ1) {
		var g = aJ1.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJ4, g.readAsDataURL(aJ1))
	}
}

function cv() {
	this.aJJ = null, this.dd = function() {
		10 !== aD.ki ? this.aJJ = null : this.aJJ = new Uint32Array(aD.f2)
	}, this.eY = function() {
		10 === aD.ki && this.lF()
	}, this.lF = function() {
		for (var gd, target, aCG, aJJ = this.aJJ, a0i = al.l1, a4S = ag.h7, aB = al.kw - 1; 0 <= aB; aB--)(gd = a0i[aB]) >= aD.kQ || (target = Math.max(bL.fW(a4S[gd], 4), 2048), aCG = Math.max(ae.aCH(gd), 100), aJJ[gd] += bL.fW(aCG * target,
			1e4), aJJ[gd] > target && (aJJ[gd] = target))
	}, this.a4Y = function(player, ho) {
		return ho > this.aJJ[player] ? (ho = this.aJJ[player], this.aJJ[player] = 0) : this.aJJ[player] -= ho, ho
	}
}

function dW() {
	function aJL(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aJT, g.readAsText(e))
	}

	function aJT(e) {
		var aJX;
		aD.a0u || (e = JSON.parse(e.target.result), aJX = aD.data = new a5P, aJY(e, aJX, "mapType", 0, 2), aJY(e, aJX, "mapProceduralIndex", 0, 255), aJY(e, aJX, "mapRealisticIndex", 0, 255), aJY(e, aJX, "mapSeed", 0, 16383), function(aJW, aJX, ge,
				max) {
				aJW = aJW[ge];
				aJX[ge] = aJe(aJW) ? aJW.slice(0, max) : aJX[ge]
			}(e, aJX, "mapName", 20), function(aJW, aJX, ge) {
				var aJ6;
				2 === aJX.mapType && (!aJe(aJW = aJW[ge]) || aJW.length <= 20 ? aJX.mapType = 0 : ((aJ6 = new Image).onload = function() {
					b9.aJf.aJg(aJ6, 1), aJ6.onload = null, aJ6 = null
				}, aJ6.src = aJW))
			}(e, aJX, "canvas"), aJY(e, aJX, "passableWater", 0, 1), aJY(e, aJX, "passableMountains", 0, 1), aJY(e, aJX, "playerCount", 1, 512), aJY(e, aJX, "humanCount", 1, 1), aJY(e, aJX, "selectedPlayer", 0, 0), aJY(e, aJX, "gameMode", 0, 1),
			aJY(e, aJX, "playerMode", 0, 0), aJY(e, aJX, "battleRoyaleMode", 0, 0), aJY(e, aJX, "numberTeams", 0, 8), aJY(e, aJX, "isZombieMode", 0, 0), aJY(e, aJX, "isContest", 0, 0), aJY(e, aJX, "isReplay", 0, 0), aJb(e, aJX, "elo", 16, 2,
				16383), aJY(e, aJX, "colorsType", 0, 1), aJY(e, aJX, "colorsPersonalized", 0, 1), aJb(e, aJX, "colorsData", 32, 512, 262143), aJY(e, aJX, "selectableColor", 0, 1), aJb(e, aJX, "teamPlayerCount", 16, 9, 512), aJY(e, aJX,
				"neutralBots", 0, 1), aJY(e, aJX, "botDifficultyType", 0, 3), aJY(e, aJX, "botDifficultyValue", 0, 15), aJb(e, aJX, "botDifficultyTeam", 8, 9, 15), aJb(e, aJX, "botDifficultyData", 8, 512, 15), aJY(e, aJX, "spawningType", 0, 2),
			aJY(e, aJX, "spawningSeed", 0, 16383), aJb(e, aJX, "spawningData", 16, 1024, 4095), aJY(e, aJX, "selectableSpawn", 0, 1), aJY(e, aJX, "playerNamesType", 0, 2),
			function(aJW, aJX, ge, size, max) {
				var a3Y = aJW[ge];
				if (Array.isArray(a3Y)) {
					for (var a3Z = new Array(size), f5 = Math.min(a3Y.length, size), aB = 0; aB < f5; aB++) a3Z[aB] = aJe(a3Y[aB]) ? a3Y[aB].slice(0, max) : "";
					a3Z.fill("", f5), aJX[ge] = a3Z
				}
			}(e, aJX, "playerNamesData", 512, 20), aJY(e, aJX, "selectableName", 0, 1), aJY(e, aJX, "aIncomeType", 0, 2), aJY(e, aJX, "aIncomeValue", 0, 255), aJb(e, aJX, "aIncomeData", 8, 512, 255), aJY(e, aJX, "tIncomeType", 0, 2), aJY(e, aJX,
				"tIncomeValue", 0, 255), aJb(e, aJX, "tIncomeData", 8, 512, 255), aJY(e, aJX, "iIncomeType", 0, 2), aJY(e, aJX, "iIncomeValue", 0, 255), aJb(e, aJX, "iIncomeData", 8, 512, 255), aJY(e, aJX, "sResourcesType", 0, 2), aJY(e, aJX,
				"sResourcesValue", 0, 2047), aJb(e, aJX, "sResourcesData", 16, 512, 2047), t.x(), t.y.aJV[0] = 0, t.u(19))
	}

	function aJY(aJW, aJX, ge, min, max) {
		aJW = aJW[ge];
		aJX[ge] = "number" == typeof aJW && min <= aJW && aJW <= max ? Math.floor(aJW) : aJX[ge]
	}

	function aJe(qa) {
		return "string" == typeof qa
	}

	function aJb(aJW, aJX, ge, aJh, size, max) {
		var a3Y = aJW[ge];
		if (Array.isArray(a3Y)) {
			for (var a3Z = new(8 === aJh ? Uint8Array : 16 === aJh ? Uint16Array : Uint32Array)(size), f5 = Math.min(a3Y.length, size), aB = 0; aB < f5; aB++) a3Z[aB] = bL.iD(a3Y[aB], 0, max);
			aJX[ge] = a3Z
		}
	}
	this.aJK = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJL, input.click()
	}, this.aJM = function() {
		for (var aJP, aDV, a5x = aD.data, keys = Object.keys(a5x), aJN = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a5x[key] instanceof Uint8Array || a5x[key] instanceof Uint16Array || a5x[key] instanceof Uint32Array ? aJN[key] = Array.from(a5x[key]) : aJN[key] = a5x[key]
		}
		aJN.canvas = 2 === aJN.mapType && aJN.canvas ? aJN.canvas.toDataURL() : null, aJP = aJN, aJP = JSON.stringify(aJP, null, 2), aJP = new Blob([aJP], {
			type: "application/json"
		}), (aDV = document.createElement("a")).href = URL.createObjectURL(aJP), aDV.download = "tt_scenario.json", aDV.click()
	}
}

function cY() {
	var aJi, aJj, size, jZ, ho, aJk;

	function aJl(player) {
		return player < aD.kQ ? aJi * player : aJi * aD.kQ + aJj * (player - aD.kQ)
	}
	this.dd = function() {
		aJi = aD.kQ < 16 ? 12 : 8, aJj = 4;
		var f5 = aJl(aD.f2);
		size = new Uint8Array(aD.f2), jZ = new Uint16Array(f5), ho = new Uint32Array(f5), aJk = new Uint8Array(f5)
	}, this.qR = function(a8l, aJm) {
		var aJn = this.h8(a8l, aJm),
			aJm = (this.h6(a8l, aJm, 0), bA.gR.gU(a8l, aJn));
		bd.gV(a8l, aJn - aJm, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aIt = function(player, aJm) {
		var aJq, aJm = function(player, aJm) {
			var aB, lL = aJl(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jZ[lL + aB] === aJm) return aB;
			return size[player]
		}(player, aJm);
		aJm !== size[player] && (aJq = ho[aJl(player) + aJm], this.gW(player, aJm), this.ec(player, aJq, aD.f2))
	}, this.jl = function(player, aJm) {
		for (var lL = aJl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJm) return !0;
		return !1
	}, this.k4 = function(player) {
		return player < aD.kQ ? size[player] < aJi : size[player] < aJj
	}, this.gC = function(player) {
		return size[player]
	}, this.gH = function(player, aB) {
		return jZ[aJl(player) + aB]
	}, this.gI = function(player, aB) {
		return ho[aJl(player) + aB]
	}, this.h8 = function(player, aJm) {
		for (var lL = aJl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJm) return ho[lL + aB];
		return 0
	}, this.aIk = function(player) {
		for (var lL = aJl(player), fX = 0, aB = size[player] - 1; 0 <= aB; aB--) fX += ho[lL + aB];
		return fX
	}, this.h6 = function(player, aJm, aJq) {
		for (var lL = aJl(player), aB = size[player] - 1; 0 <= aB; aB--) jZ[lL + aB] === aJm && (ho[lL + aB] = aJq)
	}, this.gr = function(player, aB, aJq) {
		ho[aJl(player) + aB] = Math.max(aJq, 0)
	}, this.gs = function(player, aB) {
		aJk[aJl(player) + aB] = 0
	}, this.gJ = function(player, aB) {
		return aJk[aJl(player) + aB]
	}, this.ec = function(player, aJq, aJm) {
		ao.jD.k2[player] = ao.jD.k2[aJm] = 8, bA.gR.a4M(aJm) && bd.mv[6 - bA.gR.jn(player)]++;
		for (var lL = aJl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJm) return ho[lL + aB] += aJq, void(ho[lL + aB] = ho[lL + aB] > aD.a4U ? aD.a4U : ho[lL + aB]);
		jZ[lL + size[player]] = aJm, ho[lL + size[player]] = aJq, aJk[lL + size[player]] = 1, size[player]++, aJm === aD.ep ? aN.a17(player, 5) : player < aD.kQ && player === aD.ep && af.a7P(aJm)
	}, this.gW = function(player, eC) {
		var fO, lL;
		if (0 !== size[player])
			for (lL = aJl(player), size[player]--, fO = eC; fO < size[player]; fO++) jZ[lL + fO] = jZ[lL + fO + 1], ho[lL + fO] = ho[lL + fO + 1], aJk[lL + fO] = aJk[lL + fO + 1]
	}, this.aIf = function(player) {
		for (var fO, lL, aIq = [], aB = al.kw - 1; 0 <= aB; aB--)
			for (lL = aJl(al.l1[aB]), fO = size[al.l1[aB]] - 1; 0 <= fO; fO--)
				if (jZ[lL + fO] === player) {
					aIq.push(al.l1[aB]);
					break
				} return aIq
	}
}

function cZ() {
	var aJr;

	function aJt(player) {
		var eB, k5;
		return bA.gR.jn(player) && player < aD.kQ ? 0 : (eB = aJr[bL.fW((aD.f2 - 1) * ag.gt[player], aD.kA)], bf.kN() < 1920 && (eB = Math.max(bL.fW(100 * (13440 - 6 * bf.kN()), 1920), eB)), k5 = ae.k6(player), ag.h7[player] > k5 && (eB -= bL.fW(2 *
			eB * (ag.h7[player] - k5), k5)), Math.min(Math.max(eB, 0), 700))
	}

	function aK5(nc) {
		for (var gt = ag.gt, l1 = al.l1, aB = al.kw - 1; 0 <= aB; aB--) {
			var gd = l1[aB];
			bA.gR.gU(gd, bL.fW(nc * gt[gd], 32))
		}
	}

	function aK2() {
		var xZ = aD.ep;
		bO.fb[0] = ag.h7[xZ] - ag.a4R[xZ]
	}

	function aK4(eC) {
		var xZ = aD.ep,
			xZ = ag.h7[xZ] - ag.a4R[xZ] - bO.fb[0];
		ae.aAr += xZ, bd.mv[eC] += xZ
	}
	this.aAr = 0, this.dj = function() {
		for (var f5 = aD.f2, aB = (aJr = new Uint16Array(f5), 0); aB < f5; aB++) aJr[aB] = 100 + aJs(bL.fW(25600 * aB, f5 - 4), 9)
	}, this.dd = function() {
		(this.aAr = 0) === aD.data.iIncomeType ? this.aCH = aJt : 1 === aD.data.iIncomeType ? this.aCH = function(player) {
			return bL.fW(aD.data.iIncomeValue * aJt(player), 64)
		} : this.aCH = function(player) {
			return bL.fW(aD.data.iIncomeData[player] * aJt(player), 64)
		}
	}, this.eY = function() {
		if (bf.kN() % 10 == 9 && (ae.aAr = 0, function() {
				aK2();
				for (var l1 = al.l1, h7 = ag.h7, aB = al.kw - 1; 0 <= aB; aB--) {
					var gd = l1[aB],
						aK3 = bL.fW(ae.aCH(gd) * h7[gd], 1e4);
					bA.gR.gU(gd, Math.max(aK3, 1))
				}
				aK4(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aK2(), 1 === aD.data.aIncomeType)
						for (var gt = ag.gt, l1 = al.l1, nc = aD.data.aIncomeValue, aB = al.kw - 1; 0 <= aB; aB--) {
							var gd = l1[aB];
							bA.gR.gU(gd, bL.fW(nc * gt[gd], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gt = ag.gt, l1 = al.l1, nc = aD.data.aIncomeData, aB = al.kw - 1; 0 <= aB; aB--) {
								var gd = l1[aB];
								bA.gR.gU(gd, bL.fW(nc[gd] * gt[gd], 128))
							}
						}();
					aK4(18)
				}
			}(), bf.kN() % 100 == 99)) {
			if (aK2(), 0 === aD.data.tIncomeType) aK5(32);
			else if (1 === aD.data.tIncomeType) aK5(aD.data.tIncomeValue);
			else
				for (var gt = ag.gt, l1 = al.l1, nc = aD.data.tIncomeData, aB = al.kw - 1; 0 <= aB; aB--) {
					var gd = l1[aB];
					bA.gR.gU(gd, bL.fW(nc[gd] * gt[gd], 32))
				}
			aK4(8)
		}
	}, this.k6 = function(player) {
		return Math.min(100 * ag.gt[player], aD.a5L)
	}, this.pQ = function(player, pR) {
		bq.pn(player, pR, bO.fc[0], 0), bA.gR.gU(pR, bO.fc[0]), bd.po(player, pR), af.aJv(player, bO.fc[0] + bO.fc[1]), af.pp(pR, bO.fc[0]), bA.gR.ma(player)
	}, this.aJw = function() {
		for (var f5 = al.kw, a0i = al.l1, lL = 0, a4S = ag.h7, aB = 0; aB < f5; aB++) lL += a4S[a0i[aB]];
		return lL
	}, this.aJx = function(aJy) {
		for (var gd, f5 = al.kw, a0i = al.l1, lL = 0, a4S = ag.h7, f3 = bg.f3, aB = 0; aB < f5; aB++) f3[gd = a0i[aB]] === aJy && (lL += a4S[gd]);
		return lL
	}
}

function cb() {
	var aK9, aKA, aKB, aKC, aKD, aKE, aKF, aKG, aKH, aKI, aKJ, aKK, aKL, aKM, aKN, aKO, aKP, aKQ, aKS, aKT, aDO, aKU, aKV, aKb, aKc, aKR = null,
		aKX = 0,
		aKY = !1,
		aKZ = new Float32Array(4),
		aKa = 0,
		aBM = 112,
		aKd = 0;

	function qw() {
		aKH = Math.floor(+h.iF), aKI = Math.floor(.5 * aKH), aKR.width = h.i, aKR.height = h.j, aKS = aKR.getContext("2d", {
			alpha: !0
		}), bA.qt.textAlign(aKS, 1), bA.qt.textBaseline(aKS, 1), aKS.imageSmoothingEnabled = !0
	}

	function aKe() {
		var aB, aKj;
		for (vX.font = bA.qt.sk(1, 100 * aKJ), aKj = 80 / Math.floor(vX.measureText(bA.rs.a0B(aD.a4U)).width), vX.font = bA.qt.sk(1, 100), aB = aD.f2 - 1; 0 <= aB; aB--) aKG[aB] = 100 / Math.floor(vX.measureText(ag.a1X[aB]).width), aKF[aB] = Math
			.min(aKj, aKG[aB])
	}

	function aKk(aB) {
		return !aKd || (aB = ag.h7[aB]) < 1e6 ? 1 : aB < 1e7 ? aKZ[0] : aKZ[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aKi(i7) {
		aKY = !1, aKX = bf.eT, aKQ = !1, aKP = 1, aKN = aKO = 0, i7.clearRect(0, 0, h.i, h.j);
		for (var aKq, aKr, aB, aKs, fontSize, aKt, nQ = ii / iG, nR = ij / iG, nd = (h.i + ii) / iG, ne = (h.j + ij) / iG, aKu = 0 !== ag.mz[aD.ep] && !bA.gR.jn(aD.ep), fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO], (fontSize = Math.floor(aKM * iG *
			aKk(aB) * aKF[aB] * aKD[aB])) < aKL || aKH <= fontSize || aKB[aB] + aKD[aB] > nQ && aKB[aB] < nd && aKC[aB] + aKE[aB] > nR && aKC[aB] < ne && (aKq = Math.floor(h.i * (aKB[aB] + aKD[aB] / 2 - nQ) / (nd - nQ)), aKr = Math.floor(h.j * (
			aKC[aB] + aKE[aB] / 2 - nR) / (ne - nR) - .1 * fontSize), aKs = ac.a9H[aB], i7.font = bA.qt.sk(1 === ag.a4I[aB] ? 4 : 1, fontSize), i7.fillStyle = aKv(fontSize, aKs % 2), aKd ? aKw(i7, aB, fontSize, aKq, aKr, aKs) : aKx(aB,
			fontSize, aKq, aKr, i7), aKQ = !0, 0 < aDO[aB] ? function(aKq, aKr, fontSize, aB, i7) {
			0 === kB[aB] ? aj.s9.a02(aKT[aB]) ? (function(aKq, aKr, fontSize, player, pc, i7) {
				for (var y6 = aKr, i6 = (i7.globalAlpha = aL5(fontSize), aKk(player) * (aKd ? aKa : aKG[player])), y5 = aKq - .5 * fontSize / i6 - .9 * fontSize, fP = 0; fP < 2; fP++) i7.fillText(aj.s9.zu(pc), y5, y6), y5 = aKq + .5 *
					fontSize / i6 + .9 * fontSize;
				i7.globalAlpha = 1
			}(aKq, aKr, fontSize, aB, aKT[aB], i7), aKz(aKq, aKr, fontSize, 0, 0, i7)) : aj.s9.a04(aKT[aB]) ? (aL8(aKq, aKr, fontSize, aKT[aB], 0, i7), aKz(aKq, aKr, fontSize, 0, 1, i7)) : (aL8(aKq, aKr, fontSize, aKT[aB], 1, i7), aKz(
				aKq, aKr, fontSize, 1, 0, i7)) : aL8(aKq, aKr, fontSize, aKT[aB], 0, i7)
		}(aKq, aKr, fontSize, aB, i7) : 0 === kB[aB] && aKz(aKq, aKr, fontSize, 0, 0, i7), aKu && (0 < aDO[aB + aD.f2] || 0 < aDO[aB + 2 * aD.f2] || 0 < aDO[aB + 3 * aD.f2] || 0 < aDO[aB + 4 * aD.f2]) && function(aKq, aKr, fontSize, aB, i7) {
			var ed, gY = -1;
			for (ed = 4; 1 <= ed; ed--) 0 < aDO[aB + ed * aD.f2] && gY++;
			for (ed = 1; ed < 5; ed++) 0 < aDO[aB + ed * aD.f2] && (! function(aKq, aKr, fontSize, ed, aB, aL3, eU, i7) {
				var a3m;
				if (1 === ed) {
					aB = aKT[aB + aD.f2];
					if (!aj.s9.a03(aB)) return function(aKq, aKr, fontSize, pc, aL3, i7) {
						i7.globalAlpha = aL5(fontSize);
						aKq -= .534 * aL3 * fontSize, aL3 = aKr + 1.59 * fontSize;
						i7.font = bA.qt.sk(0, .785 * fontSize), i7.fillText(aj.s9.zu(pc), aKq, aL3), i7.globalAlpha = 1
					}(aKq, aKr, fontSize, aB, aL3, i7);
					a3m = aj.xY.zT[aB - 1024 + aj.s9.zf]
				} else a3m = 2 === ed ? aL.a6D()[4].canvas[+(eU < 255)] : (3 === ed ? aL.a6D()[5] : aL.a6D()[6]).canvas[0];
				aB = aj.xY.zU, eU = .8 * fontSize / aB, ed = aKq - .5 * eU * aB - .534 * aL3 * fontSize, aKq = aKr + 1.4 * eU * aB;
				i7.setTransform(eU, 0, 0, eU, ed, aKq), i7.globalAlpha = aL5(fontSize), i7.drawImage(a3m, 0, 0), i7.globalAlpha = 1, i7.setTransform(1, 0, 0, 1, 0, 0)
			}(aKq, aKr, fontSize, ed, aB, gY, aDO[aB + ed * aD.f2], i7), gY -= 2)
		}(aKq, aKr, fontSize, aB, i7), (aKt = aKJ * fontSize) < aKL || (i7.font = bA.qt.sk(1, aKt), aKr += Math.floor(.78 * fontSize), aKd ? aKx(aB, aKt, aKq, aKr, i7) : aKw(i7, aB, aKt, aKq, aKr, aKs)))
	}

	function aKx(aB, fontSize, fC, fE, i7) {
		var ___id = aB;
		var showName = aB < aD.kQ || !__fx.settings.hideBotNames;
		if (showName) i7.fillText(ag.a1X[aB], fC, fE), aB < aD.kQ && 2 !== ag.a4I[aB] || (aB = fontSize / aKG[aB], i7.fillRect(fC - .5 * aB, fE + bA.qt.zv * fontSize, aB, Math.max(1, .1 * fontSize)));
		aKd && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i7.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i7.fillText(__fx.utils.getDensity(___id), fC, showName ? fE + fontSize : fE)
		);
	}

	function aKw(i7, aB, fontSize, aKq, aKr, aKs) {
		var ___id = aB;
		aB = bA.rs.a0B(ag.h7[aB]);
		aKs >> 1 & 1 ? (i7.lineWidth = .05 * fontSize, i7.strokeStyle = aKv(fontSize, aKs % 2), i7.strokeText(aB, aKq, aKr)) : (1 < aKs && (i7.lineWidth = .12 * fontSize, i7.strokeStyle = aKv(fontSize, aKs), i7.strokeText(aB, aKq, aKr)), i7.fillText(
			aB, aKq, aKr));
		aKd || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i7.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i7.fillText(__fx.utils.getDensity(___id), aKq, aKr + fontSize))
	}

	function aKz(aKq, aKr, fontSize, aL3, aL4, i7) {
		var a6i = .95 * fontSize / aKV,
			aKq = aKq - .5 * a6i * aKU + .8 * aL3 * fontSize,
			aL3 = aKr - 1.76 * a6i * aKV - (.35 - bA.qt.zv + .7) * aL4 * fontSize;
		i7.setTransform(a6i, 0, 0, a6i, aKq, aL3), i7.globalAlpha = aL5(fontSize), i7.drawImage(ab.get(4), 0, 0), i7.globalAlpha = 1, i7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aL8(aKq, aKr, fontSize, pc, aL3, i7) {
		var i1, y5, a6i;
		i7.globalAlpha = aL5(fontSize), aj.s9.a03(pc) ? (i1 = aj.xY.zU, i7.setTransform(a6i = 1.1 * fontSize / i1, 0, 0, a6i, y5 = aKq - .5 * a6i * i1 - .8 * aL3 * fontSize, a6i = aKr - 1.55 * a6i * i1), i7.drawImage(aj.xY.zT[pc - 1024 + aj.s9.zf],
			0, 0), i7.setTransform(1, 0, 0, 1, 0, 0)) : (y5 = aKq - .8 * aL3 * fontSize, a6i = aKr - (.35 - bA.qt.zv + 1) * fontSize, i7.fillText(aj.s9.zu(pc), y5, a6i)), i7.globalAlpha = 1
	}

	function aKv(fontSize, aKs) {
		return aKI <= fontSize && fontSize < aKH ? bg.aLA[aKs] + aL5(fontSize).toFixed(3) + ")" : bg.aLB[aKs]
	}

	function aL5(fontSize) {
		return aKI <= fontSize && fontSize < aKH ? 1 - (fontSize - aKI) / (aKH - aKI) : 1
	}

	function aLK(i6, i) {
		return 1 + Math.floor(aKK * i6 * i)
	}

	function aLH(aB) {
		for (var left = aKB[aB], fO = aKB[aB] - ag.iy[aB] - 1; 0 <= fO; fO--)
			if (!aLM(aB, --left, aKC[aB], aKE[aB])) {
				left++;
				break
			} var right = aKB[aB];
		for (fO = ag.iz[aB] - aKB[aB] - aKD[aB]; 0 <= fO; fO--)
			if (!aLM(aB, ++right + aKD[aB] - 1, aKC[aB], aKE[aB])) {
				right--;
				break
			} var fC = Math.floor((left + right) / 2),
			top = aKC[aB];
		for (fO = aKC[aB] - ag.j0[aB] - 1; 0 <= fO; fO--)
			if (!aLN(aB, fC, --top, aKD[aB])) {
				top++;
				break
			} var bottom = aKC[aB];
		for (fO = ag.j1[aB] - aKC[aB] - aKE[aB]; 0 <= fO; fO--)
			if (!aLN(aB, fC, ++bottom + aKE[aB] - 1, aKD[aB])) {
				bottom--;
				break
			} var fE = Math.floor((top + bottom) / 2);
		aLE(aB, fC, fE, aKD[aB], aKE[aB]) && (aKB[aB] = fC, aKC[aB] = fE)
	}

	function aLE(player, fC, fE, i, j) {
		f8 = Math.floor(.2 * i);
		for (var f8, ed = fC + i - 1; fC <= ed; ed--)
			if (!aLM(player, ed, fE, j)) return;
		for (ed = fE + j - 1 - (f8 = (f8 = Math.floor(.25 * j)) < 1 ? 1 : f8); fE + f8 <= ed; ed--)
			if (!aLN(player, fC, ed, i)) return;
		return 1
	}

	function aLM(player, fC, fE, j) {
		return ac.yx(player, 4 * (fE * bS.fG + fC)) && ac.yx(player, 4 * ((fE + j - 1) * bS.fG + fC))
	}

	function aLN(player, fC, fE, i) {
		return ac.yx(player, 4 * (fE * bS.fG + fC)) && ac.yx(player, 4 * (fE * bS.fG + fC + i - 1))
	}
	this.dd = function() {
		if (aKd = bj.eQ.data[7].value || 8 === aD.ki, aKQ = !1, aKM = .88, aKJ = .5, aKK = 1.8, aKL = 12 - 3 * bj.eQ.data[9].value, aKA = aK9 = 0, aKB = new Uint16Array(aD.f2), aKC = new Uint16Array(aD.f2), aKD = new Uint16Array(aD.f2), aKE =
			new Uint16Array(aD.f2), aKF = new Float32Array(aD.f2), aKG = new Float32Array(aD.f2), aKT = new Uint16Array(2 * aD.f2), aDO = new Uint8Array(5 * aD.f2), aKb = new Uint8Array(aD.f2), aKc = new Uint8Array(aD.f2), aKR = aKR || document
			.createElement("canvas"), qw(), aKO = aKN = 0, aKP = 1, aKd) {
			var aB, aKj;
			for (aKe(), vX.font = bA.qt.sk(1, 100), aKj = 100 / Math.floor(vX.measureText("900 000").width), aB = aD.f2 - 1; 0 <= aB; aB--) aKF[aB] = Math.min(aKj, 2 * aKG[aB]);
			aKa = aKj, aKZ[0] = 100 / (aKj * Math.floor(vX.measureText("5 000 000").width)), aKZ[1] = 100 / (aKj * Math.floor(vX.measureText("50 000 000").width)), aKZ[2] = 100 / (aKj * Math.floor(vX.measureText("500 000 000").width)), aKZ[3] =
				100 / (aKj * Math.floor(vX.measureText("1 000 000 000").width))
		} else aKe();
		! function() {
			var aB;
			for (aB = aD.f2 - 1; 0 <= aB; aB--) ag.gt[aB] < 12 ? (aKB[aB] = ag.iy[aB] + 1, aKC[aB] = ag.j0[aB] + 1, aKD[aB] = 1, aKE[aB] = 1) : (aKB[aB] = ag.iy[aB], aKC[aB] = ag.j0[aB] + 1, aKD[aB] = 4, aKE[aB] = 2);
			if (aD.hT)
				for (aB = 0; aB < aD.kQ; aB++) aKD[aB] = 0;
			aKU = ab.get(4).width, aKV = ab.get(4).height
		}()
	}, this.aJv = function(gd, a5v) {
		a5v > 18 * ag.gt[gd] ? (aKc[gd] = 6, ac.a9H[gd] = 2 + ac.a9H[gd] % 2) : (aKb[gd] = 4, (ac.a9H[gd] < 2 || 3 < ac.a9H[gd]) && (ac.a9H[gd] = 6 + ac.a9H[gd] % 2))
	}, this.pp = function(gd, a5v) {
		a5v > 6 * ag.gt[gd] ? (aKc[gd] = 6, ac.a9H[gd] = 4 + ac.a9H[gd] % 2) : (aKb[gd] = 4, (ac.a9H[gd] < 4 || 5 < ac.a9H[gd]) && (ac.a9H[gd] = 8 + ac.a9H[gd] % 2))
	}, this.resize = function() {
		qw(), aKi(aKS)
	}, this.a5H = function() {
		for (var aB = 0; aB < aD.kQ; aB++) ag.iz[aB] - ag.iy[aB] != 3 || ag.j1[aB] - ag.j0[aB] != 3 ? (aKB[aB] = ag.iy[aB] + (ag.iz[aB] !== ag.iy[aB] ? 1 : 0), aKC[aB] = ag.j0[aB], aKD[aB] = 1, aKE[aB] = 1) : (aKB[aB] = ag.iy[aB], aKC[aB] = ag
			.j0[aB] + 1, aKD[aB] = 4, aKE[aB] = 2)
	}, this.qS = function(player, eC, aKl) {
		! function(player, eC, aKl) {
			player += eC * aD.f2;
			0 === eC ? aKT[player] === aKl && 0 < aDO[player] ? aDO[player] = 0 : (aKT[player] = aKl, aDO[player] = aj.s9.a02(aKl) ? 255 : 64) : 1 === eC ? (aDO[player] = 64, aKT[player] = aKl) : aDO[player] = aKl
		}(player, eC, aKl), 2 === aD.a0u && this.ml(!0)
	}, this.vW = function() {
		aKQ && (1 !== aKP ? (vX.imageSmoothingEnabled = !0, vX.setTransform(aKP, 0, 0, aKP, 0, 0), vX.drawImage(aKR, -aKN / aKP, -aKO / aKP), vX.setTransform(1, 0, 0, 1, 0, 0), vX.imageSmoothingEnabled = !1) : vX.drawImage(aKR, -aKN, -aKO))
	}, this.aA4 = function(iP, iS) {
		aKN += iP, aKO += iS
	}, this.a2S = function(iP, iS) {
		af.aA4(iP, iS)
	}, this.zoom = function(a3L, lf, lg) {
		aKP *= a3L, aKN = (aKN + lf) * a3L - lf, aKO = (aKO + lg) * a3L - lg
	}, this.ml = function(bu) {
		return !(!aKY && !bu && bf.eT < aKX + (1 === aKP && 0 === aKN && 0 === aKO && (aD.a5k() || aD.hT || 2 === aD.a0u) ? 1e3 : aBM) || (aKi(aKS), 0))
	}, this.aKo = function(aB) {
		return aKk(aB) * aKF[aB]
	}, this.aKp = function(player) {
		return aKF[player]
	}, this.aIh = function() {
		aKY = !0
	}, this.eY = function() {
		bf.kN() % 10 == 9 && (aKY = aKY || aD.a5m() && !aD.a5k()), !aD.a5k() && 4 <= ++aKA && function() {
			var aB, fO, fP;
			for (aKA = 0, fP = 4; 1 <= fP; fP--)
				for (fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO] + fP * aD.f2, 0 < aDO[aB] && aDO[aB] < 255 && aDO[aB]--;
			if (2 !== aD.a0u)
				for (fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO], 0 < aDO[aB] && aDO[aB] < 255 && aDO[aB]--
		}();
		var aB, fO, f5 = Math.floor(.1 * al.kw);
		for (f5 = (f5 = f5 < 8 ? 8 : f5) > al.kw ? al.kw : f5, aB = aK9 + f5 - 1; aK9 <= aB; aB--) fO = aB % al.kw, ! function(aB) {
			var i6 = aKk(aB) * aKF[aB];
			0 < aKD[aB] && aLE(aB, aKB[aB], aKC[aB], aKD[aB], aKE[aB]) ? ! function(aB) {
				for (var fC, fE, i, j, ej = !1, fP = 0; fP < 8; fP++) {
					if (i = aKD[aB] + 2, j = aKE[aB] + 2, i > ag.iz[aB] - ag.iy[aB] + 1 || j > ag.j1[aB] - ag.j0[aB] + 1) return ej;
					if (fC = aKB[aB] - 1, fE = aKC[aB] - 1, !aLE(aB, fC, fE, i, j)) return ej;
					aKB[aB] = fC, aKC[aB] = fE, aKD[aB] = i, aKE[aB] = j, ej = !0
				}
				return ej
			}(aB) && function(aB, i6) {
				for (var fC, fE, i, j, ej = !1, aDX = aKD[aB], nc = 1 + Math.floor(.02 * aDX), fP = 1; fP < 5; fP++) {
					if ((i = aDX + fP * nc) > ag.iz[aB] - ag.iy[aB] + 1) return ej;
					if ((j = aLK(i6, i)) > ag.j1[aB] - ag.j0[aB] + 1) return ej;
					fC = ag.iy[aB] + Math.floor(Math.random() * (ag.iz[aB] - ag.iy[aB] + 2 - i)), fE = ag.j0[aB] + Math.floor(Math.random() * (ag.j1[aB] - ag.j0[aB] + 2 - j)), aLE(aB, fC, fE, i, j) && (aKB[aB] = fC, aKC[aB] = fE, aKD[
						aB] = i, aKE[aB] = j, ej = !0)
				}
				return ej
			}(aB, i6) && aLH(aB) : ! function(aB, i6) {
				var j, fC = aKB[aB] + 1,
					fE = aKC[aB] + 1,
					i = aKD[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKD[aB] = 0;
						break
					}
					if (j = aLK(i6, i), aLE(aB, fC, fE, i, j)) return aKB[aB] = fC, aKC[aB] = fE, aKD[aB] = i, aKE[aB] = j, 1;
					fC++, fE++, i -= 2
				}
				return
			}(aB, i6) ? function(aB, i6) {
				var fC, fE, i, j, fP, ni, jg = ag.iz[aB] - ag.iy[aB] + 1,
					aLL = Math.floor(.02 * jg);
				for (ni = -6 * (aLL = aLL < 1 ? 1 : aLL), fP = jg; ni <= fP; fP -= aLL)
					if (j = aLK(i6, i = 0 < fP ? fP : 1), fC = ag.iy[aB] + Math.floor(Math.random() * (ag.iz[aB] - ag.iy[aB] + 2 - i)), fE = ag.j0[aB] + Math.floor(Math.random() * (ag.j1[aB] - ag.j0[aB] + 2 - j)), aLE(aB, fC, fE, i, j))
						return aKB[aB] = fC, aKC[aB] = fE, aKD[aB] = i, aKE[aB] = j
			}(aB, i6) : aLH(aB)
		}(al.l1[fO]);
		aK9 = (aK9 += f5) % al.kw
	}, this.mg = function() {
		var aB, gd, a00, a01;
		if (bf.kN() % 4 == 1)
			for (aB = al.kw - 1; 0 <= aB; aB--) gd = al.l1[aB], ac.a9H[gd] < 2 || ((a00 = Math.max(aKb[gd] - 1, 0)) === (a01 = Math.max(aKc[gd] - 1, 0)) ? 0 === a00 && (ac.a9H[gd] %= 2) : 0 === a01 && ac.a9H[gd] < 6 && (ac.a9H[gd] += 4), aKb[
				gd] = a00, aKc[gd] = a01)
	}, this.a7P = function(player) {
		var aB = player + 2 * aD.f2,
			eU = aDO[aB];
		return 0 < eU && (aN.a12(50, player), aDO[aB] = 0, 255 === eU)
	}, this.a6S = function(player) {
		return 255 === aDO[player + 2 * aD.f2]
	}
}

function cd() {
	var aLO, aLP, aLQ;
	this.dd = function() {
		aLO =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLP =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aLQ = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7g = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEP = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLO.length - 1; 0 <= aB; aB--)
			for (var fO = a7g.length - 1; 0 <= fO; fO--) aLO[aB] = aLO[aB].replace(a7g[fO], aEP[fO]);
		if (__fx.settings.realisticNames) aLO = realisticNames;
	}, this.a5X = function() {
		var f5 = aD.kQ,
			a1X = ag.a1X,
			a1c = ag.a1c,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f5)
			for (var aB = 0; aB < f5; aB++) a1X[aB] = a1c[aB] = "Player " + ay.jh(1e3);
		else
			for (aB = 0; aB < f5; aB++) a1X[aB] = a1c[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.ki) {
			for (var eB = ay.random(), aLW = aLQ, aLX = aLP, ho = aE.ho, f5 = aLW.length, lL = aD.data.teamPlayerCount[7], a1X = ag.a1X, a1c = ag.a1c, aB = lL - 1; aB >= aD.kQ; aB--) a1X[aB] = a1c[aB] = aLW[(aB + eB) % f5];
			for (f5 = aLX.length - 1, aB = lL; aB < aD.f2; aB++) a1X[aB] = a1c[aB] = aLX[ho[aB] ? f5 : aB % f5]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f5 = aD.f2, a1X = ag.a1X, a1c = ag.a1c, playerNamesData = aD.data.playerNamesData, aB = aD.kQ; aB < f5; aB++) a1X[aB] = a1c[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a1X = ag.a1X, a1c = ag.a1c, aB = aD.kQ; aB < aD.f2; aB++) a1X[aB] = a1c[aB] = "Bot " + ay.jh(1e3)
		} : function() {
			for (var aLY = aLO, f5 = aLY.length, eB = ay.random(), a1X = ag.a1X, a1c = ag.a1c, aB = aD.kQ; aB < aD.f2; aB++) a1X[aB] = a1c[aB] = aLY[(aB + eB) % f5]
		})()
	}
}

function cw() {
	this.aLZ = [], this.aLa = [], this.dd = function() {
		this.aLZ = [], this.aLa = []
	}, this.eY = function() {
		0 <= this.aLZ.length && this.aLb(this.aLZ), 0 <= this.aLa.length && this.aLb(this.aLa)
	}, this.aLb = function(g) {
		for (var fP = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eT--, g[aB].eT <= 0) {
				fP = aB;
				break
			} for (aB = fP; 0 <= aB; aB--) g.shift()
	}, this.a6L = function(id, a0i, aLc) {
		return this.fQ(this.aLZ, id, a0i, aLc)
	}, this.aLd = function(id, a0i, aLc) {
		return this.fQ(this.aLa, id, a0i, aLc)
	}, this.fQ = function(g, id, a0i, aLc) {
		return ! function(g, id, a0i) {
			var aB, hx;
			for (aB = a0i.length - 1; 0 <= aB; aB--)
				for (hx = g.length - 1; 0 <= hx; hx--)
					if (g[hx].player === a0i[aB] && id === g[hx].id) return 1;
			return
		}(g, id, a0i) && (aLc && function(g, id, a0i) {
			var aB;
			for (aB = a0i.length - 1; 0 <= aB; aB--) g.push({
				player: a0i[aB],
				id: id,
				eT: 384
			})
		}(g, id, a0i), !0)
	}
}

function cc() {
	this.a1c = new Array(aD.f2), this.a1X = new Array(aD.f2), this.a4I = new Uint8Array(aD.f2), this.mz = new Uint8Array(aD.f2), this.iy = new Uint16Array(aD.f2), this.j0 = new Uint16Array(aD.f2), this.iz = new Uint16Array(aD.f2), this.j1 =
		new Uint16Array(aD.f2), this.gt = new Uint32Array(aD.f2), this.yX = new Uint32Array(aD.f2), this.h7 = new Uint32Array(aD.f2), this.gX = null, this.gl = null, this.gm = null, this.fU = null, this.qI = new Uint16Array(aD.f2), this.jT =
		new Uint16Array(aD.f2), this.jU = new Uint16Array(aD.f2), this.a1W = new Uint16Array(aD.f2), this.a1U = new Uint8Array(aD.f2), this.a4R = new Uint16Array(aD.f2), this.dd = function() {
			this.a1c.fill(""), this.a1X.fill(""), this.a4I.fill(0), this.mz.fill(0), this.iy.fill(0), this.j0.fill(0), this.iz.fill(0), this.j1.fill(0), this.gt.fill(0), this.yX.fill(0), this.h7.fill(0), this.gX = new Array(aD.f2), this.gl =
				new Array(aD.f2), this.gm = new Array(aD.f2), this.fU = new Array(aD.f2), this.qI.fill(0), this.jT.fill(0), this.jU.fill(0), this.a1W.fill(0), this.a1U.fill(0), this.a4R.fill(0)
		}
}

function cu() {
	this.aDu = function(player) {
		aG.my(player), aD.a0w++, ag.a4I[player] = 2, ag.a1W[player] = bi.a1m.aIp(), player === aD.ep && (aX.show(!1, !1), aW.aC3(), bR.a0f.a1S()), af.a7P(player)
	}
}

function cV() {
	this.l1 = null, this.kw = 0, this.a5b = function() {
		for (this.kw = 0, aB = aD.f2 - 1; 0 <= aB; aB--) 0 !== ag.mz[aB] && this.kw++;
		this.l1 = new Uint16Array(this.kw);
		for (var f5 = 0, aB = 0; aB < aD.f2; aB++) 0 !== ag.mz[aB] && (this.l1[f5++] = aB)
	}, this.mf = function() {
		for (var gt = ag.gt, yX = ag.yX, a1U = ag.a1U, l1 = al.l1, aB = al.kw - 1; 0 <= aB; aB--) {
			var gd = l1[aB],
				eU = gt[gd],
				lL = yX[gd];
			eU <= bL.fW(lL, 4) ? ak.dl(gd) : lL <= eU ? 250 <= (yX[gd] = eU) && (a1U[gd] = 1) : yX[gd] = lL - Math.max(1, bL.fW(lL - eU, 1e3))
		}
		this.aLh()
	}, this.aLh = function() {
		for (var mz = ag.mz, lK = this.l1, aCl = this.kw, aB = aCl - 1; 0 <= aB; aB--) 0 === mz[lK[aB]] && (lK[aB] = lK[--aCl]);
		this.kw = aCl
	}
}

function cW() {
	var aLi = new Uint16Array(aD.f2),
		aLj = 0;

	function aLn(a7V, aLl) {
		var ed = bf.kN();
		return 3213 <= ed ? 4 + bL.fW(100 * aLl, ae.k6(a7V)) : (a7V = 1 + bL.fW(aD.kA, 300), ed < 357 ? 2 + bL.fW(100 * aLl, a7V) : ed < 714 ? 2 + bL.fW(100 * aLl, 4 * a7V) : ed < 1071 ? 2 + bL.fW(100 * aLl, 10 * a7V) : ed < 2142 ? 2 + bL.fW(100 *
			aLl, 30 * a7V) : 2 + bL.fW(100 * aLl, 100 * a7V))
	}

	function aLm(a7V) {
		return aD.kk || 7 <= aD.ki || 4284 <= bf.kN() || bA.gR.jn(a7V)
	}
	this.dd = function() {
		aLi.fill(0), aLj = 15
	}, this.hj = function(pR) {
		var player = aD.ep;
		return !!bA.gR.qK(player, pR) && !(!bA.gR.pk(player, bA.gR.ig(player, aR.hZ()), pR) || (player = pR, pR = bO.fc[0], !aLm(player) && aLi[player] + aLn(player, pR) > aLj))
	}, this.ec = function(a7V, aLl) {
		if (!aLm(a7V)) {
			aLl = aLn(a7V, aLl);
			if (aLi[a7V] + aLl > aLj) return !1;
			aLi[a7V] += aLl
		}
		return !0
	}, this.eY = function() {
		bf.kN() % 100 == 99 && (bf.kN() < 1071 ? aLj += 4 : bf.kN() < 2142 ? aLj += 6 : bf.kN() < 3213 ? aLj += 8 : aLj += 10)
	}
}

function ce() {
	var aLo;
	this.kr = null, this.kq = 0, this.dd = function() {
		aLo = [], 9 === aD.ki && this.aLp()
	}, this.aLp = function() {
		this.kr = [0, 0, 0, 0, 0, 0];
		for (var aLq = [256, 227, 170, 148, 100, this.kq = 0, 0, 0], aLr = [0, 8, 24, 30, 46, 70, 256, 333], aLs = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kQ, aB = 1; aB < aLq.length; aB++)
			if (j <= aLr[aB]) {
				this.kq = aLq[aB - 1] - bL.fW((j - aLr[aB - 1]) * (aLq[aB - 1] - aLq[aB]), aLr[aB] - aLr[aB - 1]), this.kr[5] = aLs[aB - 1] - bL.fW((j - aLr[aB - 1]) * (aLs[aB - 1] - aLs[aB]), aLr[aB] - aLr[aB - 1]), this.kr[0] = aD.f2 - j - this
					.kq - this.kr[5];
				break
			} aD.km = aD.f2 - aD.kQ, aD.data.numberTeams = (0 < aD.kQ) + (0 < aD.km), aD.data.playerCount = aD.y3 = aD.kQ + aD.km, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kQ + this.kq, aD.km - this.kq]), aD.a5Q.a5V()
	}, this.aIw = function(player) {
		aLo.push({
			player: player,
			gY: 14 + ay.jh(20)
		})
	}, this.eY = function() {
		if (9 === aD.ki)
			for (var aB = aLo.length - 1; 0 <= aB; aB--) --aLo[aB].gY <= 0 && (af.qS(aLo[aB].player, 0, aj.s9.zi + aj.s9.zw), aLo.splice(aB))
	}
}

function dB() {
	function aM8() {
		return {
			fG: bS.fG,
			fH: bS.fH,
			xV: bS.xV,
			xR: bS.xR,
			xS: bS.xS,
			xW: bS.xW,
			el: bS.el,
			mapSeed: bS.mapSeed,
			xT: bS.xT
		}
	}

	function aM0(aB) {
		return 1 !== aB && bS.aEZ(aB) && aB !== bS.aMA()
	}
	this.aLu = 24, this.aLv = 12, this.aJ8 = 4096, this.fG = 0, this.fH = 0, this.xV = null, this.xR = null, this.xS = null, this.xW = null, this.el = 0, this.mapSeed = 0, this.xT = !1, this.xU = new aLw, this.xL = new aLx, this.a7m = new aLy, this
		.dd = function() {
			this.xL.dd()
		}, this.a7 = function(map, aLz) {
			((map %= this.aLu) !== this.el || aM0(this.el) && aLz !== this.mapSeed) && (this.xT = !1, this.xU.aM1(), ay.a5W(map), this.el = map, this.mapSeed = aLz, aM0(map) && (bS.xL.xM[map].aM2 = aLz), this.aEZ(this.el) ? (map = bS.xL.xM[this.el],
				this.fG = map.i, this.fH = map.j, ay.a5W(map.aM2), aq.a7([this.fG, this.fH, map.n4, map.n1]), aM4(), ap.aM5(), aq.aM6()) : aM3())
		}, this.aM7 = function(map, aLz) {
			var fo = aM8(),
				map = (this.a7(map, aLz), this.xU.aM1(), aM8());
			return aLz = fo, bS.fG = aLz.fG, bS.fH = aLz.fH, bS.xV = aLz.xV, bS.xR = aLz.xR, bS.xS = aLz.xS, bS.xW = aLz.xW, bS.el = aLz.el, bS.mapSeed = aLz.mapSeed, bS.xT = aLz.xT, map
		}, this.a5r = function(canvas) {
			canvas && this.xV !== canvas && (this.fG = canvas.width, this.fH = canvas.height, this.xV = canvas, this.xR = this.xV.getContext("2d", {
				alpha: !1
			}), this.i4 = this.xR.getImageData(0, 0, this.fG, this.fH), this.xW = this.i4.data, this.el = this.aMA(), this.mapSeed = 0, bS.xL.xM[this.el].name = aD.data.mapName)
		}, this.ek = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aMA()
		}, this.aMB = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aMC = function(aB) {
			return 1 === aB
		}, this.aMA = function() {
			return this.aLu
		}, this.aEZ = function(aB) {
			return void 0 === this.xL.xM[aB].aMD
		}, this.a5q = function(ql) {
			return 0 === ql.mapType ? ql.mapProceduralIndex < 10 ? ql.mapProceduralIndex : 10 + ql.mapProceduralIndex : 1 === ql.mapType ? 10 <= ql.mapRealisticIndex ? 22 + ql.mapRealisticIndex - 10 : ql.mapRealisticIndex + 10 : void 0
		}, this.aEa = function(ql, aME) {
			0 === ql.mapType ? ql.mapProceduralIndex = aME < 10 ? aME : aME - 10 : 1 === ql.mapType && (ql.mapRealisticIndex = aME - (22 <= aME ? 12 : 10))
		}
}

function aLw() {
	function aMN() {
		bS.xU.eY()
	}

	function aMT(gd, aMS) {
		0 < aMS && (bS.xW[gd] += aMS, bS.xW[gd + 1] += aMS, bS.xW[gd + 2] += aMS)
	}

	function iJ(gd) {
		return bS.xW[gd + 2] > bS.xW[gd] && bS.xW[gd + 2] > bS.xW[gd + 1]
	}
	this.aAG = -1, this.a20 = 0, this.aMF = 0, this.aMG = 8, this.aMH = 32, this.aMI = 8, this.aMJ = 32, this.aMK = [0, 0], this.a9H = [0, 0, 0, 0], this.is = null, this.aML = !0, this.aMM = !1, this.aM1 = function() {
		-1 !== this.aAG && clearTimeout(this.aAG), this.aAG = -1, this.is = null, aq.aM6()
	}, this.dd = function() {
		7 === aa.a29() || this.aMM || (this.aML = !0, this.a20 = 0, this.aMF = 1, this.aMK = [bS.xL.xM[bS.el].xn[0], bS.xL.xM[bS.el].xo[0]], this.a9H = [bS.xL.xM[bS.el].aMD[3], bS.xL.xM[bS.el].aMD[4], bS.xL.xM[bS.el].aMD[5], bS.xL.xM[bS.el].aMD[
			6]], this.aMG = bS.xL.xM[bS.el].aMD[7], this.aMH = bS.xL.xM[bS.el].aMD[8], this.aMI = bS.xL.xM[bS.el].aMD[9], this.aMJ = bS.xL.xM[bS.el].aMD[10], this.aML ? this.aAG = setTimeout(aMN, 16) : this.eY())
	}, this.eY = function() {
		if (8 === aa.a29() && aH.nI()) this.aAG = setTimeout(aMN, 16);
		else {
			if (0 === this.a20) {
				var aM2 = ay.aMO();
				if (ay.a5W(bS.xL.xM[bS.el].aMD[2]), aq.a7([bS.fG, bS.fH, bS.xL.xM[bS.el].aMD[0], bS.xL.xM[bS.el].aMD[1]]), ay.a5W(aM2), this.is = aq.aMP(), this.a20++, this.aML) return void(this.aAG = setTimeout(aMN, 16))
			}
			for (var gd, er, aM2 = this.aML ? 10 : 1e6, aM2 = bS.fH - this.aMF - 1 < aM2 ? bS.fH - this.aMF - 1 : aM2, yk = this.aMF + aM2, fE = this.aMF; fE < yk; fE++)
				for (var fC = 1; fC < bS.fG - 1; fC++) iJ(gd = 4 * (er = fC + fE * bS.fG)) ? this.aMQ(gd, er, 1) : (this.aMQ(gd, er, 0), function(fC, fE, gd) {
					return 1 < fC && iJ(gd - 4) || fC < bS.fG - 2 && iJ(gd + 4) || 1 < fE && iJ(gd - 4 * bS.fG) || fE < bS.fH - 2 && iJ(gd + 4 * bS.fG)
				}(fC, fE, gd) && this.aMR(fC, fE));
			this.aMF = yk, this.aMF >= bS.fH - 1 ? (bS.xR.putImageData(bS.xS, 0, 0, 1, 1, bS.fG - 2, bS.fH - 2), bf.dk = !0, this.aM1()) : this.aML && (this.aAG = setTimeout(aMN, 16))
		}
	}, this.aMQ = function(gd, er, eC) {
		aMT(gd, Math.floor(this.aMK[eC] + this.a9H[eC] * this.is[er] / 1e4) - bS.xW[gd])
	}, this.aMU = function(gd, eB, aMV, eC, a9H) {
		aMT(gd, Math.floor(this.aMK[eC] + (1 - eB / aMV) * a9H) - bS.xW[gd])
	}, this.aMR = function(lf, lg) {
		for (var gd, eB, aMV, aA6 = lf - this.aMH, aMW = lg - this.aMH, yl = lf + this.aMH, yk = lg + this.aMH, aA6 = aA6 < 1 ? 1 : aA6, yl = yl > bS.fG - 2 ? bS.fG - 2 : yl, yk = yk > bS.fH - 2 ? bS.fH - 2 : yk, fE = aMW < 1 ? 1 : aMW; fE <=
			yk; fE++)
			for (var fC = aA6; fC <= yl; fC++) iJ(gd = 4 * (fC + fE * bS.fG)) ? (aMV = this.aMG + (this.aMH - this.aMG) * this.is[fC + bS.fG * fE] / 1e4, Math.abs(lf - fC) > aMV || Math.abs(lg - fE) > aMV || aMV <= (eB = Math.sqrt((lf - fC) * (
				lf - fC) + (lg - fE) * (lg - fE))) || this.aMU(gd, eB, aMV, 1, this.a9H[3])) : (aMV = this.aMI + (this.aMJ - this.aMI) * this.is[fC + bS.fG * fE] / 1e4, Math.abs(lf - fC) > aMV || Math.abs(lg - fE) > aMV || aMV <= (eB = Math
				.sqrt((lf - fC) * (lf - fC) + (lg - fE) * (lg - fE))) || this.aMU(gd, eB, aMV, 0, this.a9H[2]))
	}
}

function aM4() {
	var vG = aMX(bS.el);
	vG && aMY(vG[0], vG[1], vG[2], vG[3], vG[4])
}

function aMX(el) {
	return 2 === el ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === el ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === el ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === el ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === el ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aMY(aMZ, aMa, aMb, aMc, aMd) {
	for (var fC, fE, aMf, aMg, a3L, aMi, iO = aMZ.length - 1, aMe = bS.fG + bS.fH, f5 = (aMe *= aMe, aMb.length), aMh = Array(f5), aB = f5 - 1; 0 <= aB; aB--) aMh[aB] = aMb[aB] * aMb[aB];
	var aMj = new Array(f5),
		aDL = new Array(f5),
		aMk = new Array(f5),
		fX = aq.aMP();
	if (void 0 === aMd)
		for (aMd = new Array(f5), aB = f5 - 1; 0 <= aB; aB--) aMd[aB] = 0;
	for (aB = 1; aB < f5; aB++) aMj[aB] = aMh[aB] - aMh[aB - 1], aDL[aB] = aMc[aB] - aMc[aB - 1], aMk[aB] = aMd[aB] - aMd[aB - 1];
	for (fC = bS.fG - 1; 0 <= fC; fC--)
		for (fE = bS.fH - 1; 0 <= fE; fE--) {
			for (aMf = aMe, aB = iO; 0 <= aB; aB--) aMf = (aMg = (fC - aMZ[aB]) * (fC - aMZ[aB]) + (fE - aMa[aB]) * (fE - aMa[aB])) < aMf ? aMg : aMf;
			for (a3L = aMc[f5 - 1], aMi = aMd[f5 - 1], aB = 1; aB < f5; aB++)
				if (aMf < aMh[aB]) {
					a3L = aMc[aB - 1] + aIC((aMf - aMh[aB - 1]) * aDL[aB], aMj[aB]), aMi = aMd[aB - 1] + aIC((aMf - aMh[aB - 1]) * aMk[aB], aMj[aB]);
					break
				} aMl(bS.fG * fE + fC, a3L, aMi, fX)
		}
}

function aMl(eC, a3L, aMi, fX) {
	a3L < 500 ? fX[eC] = bL.fW(fX[eC] * a3L * 2, 1e3) : 500 < a3L && (fX[eC] += bL.fW(2 * (1e4 - fX[eC]) * (a3L - 500), 1e3)), fX[eC] += bL.fW(aMi * (10 * a3L - fX[eC]), 1e3)
}

function cg() {
	var aMm;

	function aMw(a3m, i6, fC, fE, globalAlpha) {
		bS.xR.save(), bS.xR.globalAlpha = globalAlpha, bS.xR.imageSmoothingEnabled = !1, bS.xR.scale(i6, i6), bS.xR.drawImage(a3m, Math.floor(fC * (bS.fG / i6 - a3m.width)), Math.floor(fE * (bS.fH / i6 - a3m.height))), bS.xR.restore()
	}
	this.a7j = 0, this.a7k = 0, this.a7l = 0, this.a7m = 0, this.dd = function() {
		(aMm = new Array(bS.aLu))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eB: [220, 250, 255, 220],
			tY: [190, 220, 0, 0],
			fP: [170, 200, 0, 0]
		}, aMm[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eB: [25, 0, 100, 0, 25],
			tY: [25, 0, 0, 0, 25],
			fP: [25, 0, 0, 0, 25]
		}, aMm[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eB: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tY: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fP: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMm[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eB: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tY: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fP: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMm[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eB: [10, 10, 20, 10, 10, 170, 212],
			tY: [20, 20, 60, 100, 100, 110, 170],
			fP: [70, 70, 160, 30, 30, 60, 120]
		}, aMm[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eB: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tY: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fP: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMm[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eB: [10, 10, 60, 255, 255, 200, 200],
			tY: [10, 10, 60, 255, 255, 200, 200],
			fP: [80, 80, 255, 255, 255, 200, 200]
		}, aMm[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eB: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tY: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fP: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMm[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eB: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tY: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fP: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMm[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eB: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tY: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fP: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMm[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eB: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tY: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fP: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMm[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eB: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tY: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fP: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aM5 = function() {
		var aMv, aB, fO, fo, i4 = function() {
				var i4;
				return bS.xV = document.createElement("canvas"), bS.xV.width = bS.fG, bS.xV.height = bS.fH, bS.xR = bS.xV.getContext("2d", {
					alpha: !1
				}), i4 = bS.xR.getImageData(0, 0, bS.fG, bS.fH), bS.xW = i4.data, i4
			}(),
			i = aMm[bS.el].i,
			eB = aMm[bS.el].eB,
			tY = aMm[bS.el].tY,
			fP = aMm[bS.el].fP,
			fX = aq.aMP(),
			f5 = i.length - 2,
			aMq = new Array(1 + f5),
			aMr = new Array(1 + f5),
			aMs = new Array(1 + f5),
			aMt = new Array(1 + f5);
		for (fO = f5; 0 <= fO; fO--) aMq[fO] = i[fO + 1] - i[fO], aMr[fO] = eB[fO + 1] - eB[fO], aMs[fO] = tY[fO + 1] - tY[fO], aMt[fO] = fP[fO + 1] - fP[fO];
		for (aB = bS.fG * bS.fH - 1; 0 <= aB; aB--)
			for (fO = f5; 0 <= fO; fO--)
				if (fX[aB] >= i[fO]) {
					fo = fX[aB] - i[fO], bS.xW[4 * aB] = eB[fO] + aIC(aMr[fO] * fo, aMq[fO]), bS.xW[4 * aB + 1] = tY[fO] + aIC(aMs[fO] * fo, aMq[fO]), bS.xW[4 * aB + 2] = fP[fO] + aIC(aMt[fO] * fo, aMq[fO]), bS.xW[4 * aB + 3] = 255;
					break
				} bS.xR.putImageData(i4, 0, 0), bS.aMC(bS.el) && ab.tc() && bS.aMC(bS.el) && (i4 = ab.aHN("arena"), aMv = ab.aHN("territorial.io"), aMw(i4, 5, .5, .5, .1), aMw(aMv, 2, .5, .45, .1)), bS.xT = !0, bf.dk = !0
	}, this.a5Z = function() {
		for (var gd, fC, fE, aMx, hv, fq, a7k = 0, i = bS.fG, j = bS.fH, fo = i * j * 4, aMy = aCu, aMz = bS.xW, aB = i - 1; 0 <= aB; aB--) aMy[(gd = aB << 2) + 2] = aMy[fo - gd - 2] = 3;
		for (fo = 4 * i, aB = j - 1; 0 <= aB; aB--) aMy[(gd = aB * fo) + 2] = aMy[gd + fo - 2] = 3;
		for (aMx = i - 1, hv = j - 1, fE = 1; fE < hv; fE++)
			for (fo = fE * i, fC = 1; fC < aMx; fC++) fq = 1 - (aMz[(gd = fo + fC << 2) + 2] > aMz[gd + 1] && aMz[gd + 2] > aMz[gd]), aMy[gd + 2] = 6 - 5 * fq, a7k += fq;
		this.a7j = (i - 2) * (j - 2), this.a7m = 0, bS.ek(bS.el) && (bS.a7m.aN0(), bS.a7m.aN1(4, 5)), this.a7k = aD.kA = a7k - this.a7m, this.a7l = this.a7j - this.a7k - this.a7m, this.a7l && (bS.a7m.aN1(6, 2), bS.a7m.aN2())
	}
}

function aM3() {
	var qa;
	10 === bS.el ? qa =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.el ? qa =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.el ? qa =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.el ? qa =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.el ? qa =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.el ? qa =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.el ? qa =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.el ? qa =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.el ? qa =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.el ? qa =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.el ? qa =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.el && (qa =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new xE).xG(qa)
}

function aLx() {
	this.xM = null, this.aN3 = null, this.aN4 = null, this.aN5 = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles"
	], this.dd = function() {
		var aN6 = [120, 105, 92],
			cos = [12, 12, 60],
			aN7 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aN8 = [140, 130, 120],
			aN9 = [12, 12, 76],
			aNA = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aNB = [130, 117, 106],
			aNC = [12, 12, 68],
			aND = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xM = new Array(bS.aLu + 1), __fx.customLobby.setMapInfo(this.xM), this.xM[0] = {
			name: L(132),
			i: 230,
			j: 230,
			n4: 1e3,
			n1: 2e3,
			aM2: 173
		}, this.xM[1] = {
			name: L(133),
			i: 800,
			j: 800,
			n4: 100,
			n1: 50,
			aM2: 43
		}, this.xM[2] = {
			name: L(134),
			i: 512,
			j: 512,
			n4: 128,
			n1: 32,
			aM2: 0
		}, this.xM[3] = {
			name: L(135) + " 1",
			i: 960,
			j: 960,
			n4: 60,
			n1: 8,
			aM2: 0
		}, this.xM[4] = {
			name: L(136),
			i: 900,
			j: 900,
			n4: 100,
			n1: 5,
			aM2: 0
		}, this.xM[5] = {
			name: L(137),
			i: 1e3,
			j: 1e3,
			n4: 100,
			n1: 40,
			aM2: 0
		}, this.xM[6] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			n4: 100,
			n1: 20,
			aM2: 0
		}, this.xM[7] = {
			name: L(139),
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM2: 0
		}, this.xM[8] = {
			name: L(140),
			i: 820,
			j: 820,
			n4: 200,
			n1: 100,
			aM2: 0
		}, this.xM[9] = {
			name: L(141),
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM2: 0
		}, this.xM[10] = {
			name: L(142),
			xn: aN8,
			xo: aN9,
			aMD: aNA
		}, this.xM[11] = {
			name: L(143),
			xn: aNB,
			xo: aNC,
			aMD: aND
		}, this.xM[12] = {
			name: L(144),
			xn: aNB,
			xo: aNC,
			aMD: aND
		}, this.xM[13] = {
			name: L(145),
			xn: aN6,
			xo: cos,
			aMD: aN7
		}, this.xM[14] = {
			name: L(146),
			xn: aN6,
			xo: cos,
			aMD: aN7
		}, this.xM[15] = {
			name: L(147),
			xn: aN8,
			xo: aN9,
			aMD: aNA
		}, this.xM[16] = {
			name: L(148),
			xn: aN8,
			xo: aN9,
			aMD: aNA
		}, this.xM[17] = {
			name: L(149),
			xn: aN6,
			xo: cos,
			aMD: aN7
		}, this.xM[18] = {
			name: L(150),
			xn: aNB,
			xo: aNC,
			aMD: aND
		}, this.xM[19] = {
			name: L(151),
			xn: aN6,
			xo: cos,
			aMD: aN7
		}, this.xM[20] = {
			name: L(152),
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM2: 0
		}, this.xM[21] = {
			name: L(135) + " 2",
			i: 940,
			j: 940,
			n4: 80,
			n1: 8,
			aM2: 0
		}, this.xM[22] = {
			name: L(153),
			xn: aNB,
			xo: aNC,
			aMD: aND
		}, this.xM[23] = {
			name: L(154),
			xn: aN8,
			xo: aN9,
			aMD: aNA
		}, this.xM[bS.aLu] = {
			name: ""
		}, this.aN3 = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aN3[aB] = aB;
		for (this.aN3[10] = 20, this.aN3[11] = 21, this.aN4 = new Uint8Array(bS.aLv), aB = 0; aB < 10; aB++) this.aN4[aB] = 10 + aB;
		this.aN4[10] = 22, this.aN4[11] = 23
	}
}

function aLy() {
	this.aN0 = function() {
		for (var gd, fC, fo, aMy = aCu, aMz = bS.xW, i = bS.fG, aMx = i - 1, hv = bS.fH - 1, gY = 0, fE = 1; fE < hv; fE++)
			for (fo = fE * i, fC = 1; fC < aMx; fC++) aMz[gd = fo + fC << 2] === aMz[1 + gd] && aMz[gd] === aMz[2 + gd] && (gY++, aMy[2 + gd] = 4);
		ap.a7m = gY
	}, this.aN1 = function(aNE, aNF) {
		for (var aMy = aCu, i = bS.fG, aMx = i - 1, hv = bS.fH - 1, id = 0, fE = 1; fE < hv; fE++)
			for (var fo = fE * i, fC = 1; fC < aMx; fC++) {
				var ej = 2 + (fo + fC << 2);
				aMy[ej] === aNE && (! function(ej, id, aNE, aNF) {
					var f5 = 1,
						aMy = aCu,
						f7 = ac.f7,
						a3Y = [ej],
						aNH = id >> 8 << 1,
						aNI = 255 & id;
					aMy[ej - 2] = aNH, aMy[ej - 1] = aNI, aMy[ej] = 5;
					for (; f5;) {
						for (var a3Z = [], aB = 0; aB < f5; aB++)
							for (var eu = a3Y[aB], f8 = 3; 0 <= f8; f8--) {
								var f9 = eu + f7[f8];
								aMy[f9] === aNE && (aMy[f9 - 2] = aNH, aMy[f9 - 1] = aNI, aMy[f9] = aNF, a3Z.push(f9))
							}
						f5 = (a3Y = a3Z).length
					}
				}(ej, id, aNE, aNF), id = (id + 1) % 32768)
			}
	}, this.aN2 = function() {
		for (var aMy = aCu, i = bS.fG, aMx = i - 3, hv = bS.fH - 3, aNK = 12 * i, fE = 3; fE < hv; fE++)
			for (var fo = fE * i, fC = 3; fC < aMx; fC++) {
				var ej = 2 + (fo + fC << 2);
				2 !== aMy[ej] || 2 === aMy[ej - 12] && 2 === aMy[12 + ej] && 2 === aMy[ej - aNK] && 2 === aMy[ej + aNK] || (aMy[ej - 2] = 1 | aMy[ej - 2])
			}
	}
}

function a5Y() {
	(z6 = void 0 === z6 ? document.createElement("canvas") : z6).width = bS.fG, z6.height = bS.fH, a5c = z6.getContext("2d", {
		alpha: !0
	}), a5d = aCu = null, a5d = a5c.getImageData(0, 0, bS.fG, bS.fH), aCu = a5d.data, bA.r1.xX(aCu)
}

function ch() {
	var fX, i, j, max, aNL, n1, aNN, aNO, aNP, aNQ, aNR, aNS, aNT, aNU, aNM = 1e4;

	function aNb(aNa, n4, f5) {
		var aB;
		for (aNN[0] = aNa, aB = 1; aB < f5; aB++) aNN[aB] = aNN[aB - 1] + n4, n4 = aNN[aB] >= aNM ? (aNN[aB] = aNM - 1, -n4) : aNN[aB] < 0 ? (aNN[aB] = 0, -n4) : (n4 += 16384 <= ay.random() ? n1 : -n1) < -aNL ? -aNL : aNL < n4 ? aNL : n4
	}

	function aNd(fC, fE, aNe, f5) {
		(aNe ? function(fC, fE, f5) {
			var aB;
			for (aB = 0; aB < f5; aB++) fX[fE * i + fC + aB] = aNN[aB]
		} : function(fC, fE, f5) {
			var aB;
			for (aB = 0; aB < f5; aB++) fX[fE * i + fC + aB * i] = aNN[aB]
		})(fC, fE, f5)
	}

	function aNh(value, f5) {
		var aB, aLL, ej, jf = value - aNN[f5 - 1];
		if (0 != jf) {
			for (aLL = 1 + bL.fW(Math.abs(jf), f5 - 1), aLL = jf < 0 ? -aLL : aLL, aNN[f5 - 1] = value, ej = (ej = f5 - 1 - bL.fW(Math.abs(jf), Math.abs(aLL))) < 1 ? 1 : f5 - 2 < ej ? f5 - 2 : ej, aB = f5 - 2; ej <= aB; aB--) aNN[aB] += jf - (f5 -
				1 - aB) * aLL;
			(jf < 0 ? function(f5) {
				var aB;
				for (aB = f5 - 2; 1 <= aB; aB--) aNN[aB] < 0 && (aNN[aB] = -aNN[aB] - 1)
			} : function(f5) {
				var aB;
				for (aB = f5 - 2; 1 <= aB; aB--) aNN[aB] >= aNM && (aNN[aB] = 2 * aNM - aNN[aB] - 1)
			})(f5)
		}
	}

	function aNk(a3Y, a3Z, f5) {
		for (var aB = 0; aB < f5; aB++) a3Y[aB] = a3Z[aB]
	}

	function aNl(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNm(a6F, gap, hw) {
		aNO.push(a6F), aNP.push(gap), aNQ.push(hw)
	}
	this.a7 = function(a4m) {
		! function(a4m) {
			var aB;
			for (i = a4m[0], j = a4m[1], aNL = a4m[2], n1 = a4m[3], fX = new Int16Array(i * j), max = j < i ? i : j, aNN = new Int16Array(max), aNO = [], aNP = [], aNQ = [], aNR = new Array(i), aNS = new Array(j), aB = i - 1; 0 <= aB; aB--) aNR[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aNS[aB] = !1;
			aNT = new Int16Array(i), aNU = new Int16Array(j)
		}(a4m),
		function(f5) {
			var aNa = ay.random() % aNM,
				n4 = ay.random() % (2 * aNL + 1) - aNL;
			aNb(aNa, n4, f5)
		}(max), aNk(aNU, aNN, j), aNd(0, 0, !0, i);
		var fC, fE, a4m = fX[0],
			f5 = max,
			n4 = ay.random() % (2 * aNL + 1) - aNL;
		for (aNb(a4m, n4, f5), aNk(aNT, aNN, i), aNd(0, 0, !1, j), aNl(aNT), aNl(aNU), aNb(fX[i - 1], aNT[i - 1], j), aNd(i - 1, 0, !1, j), aNb(fX[i * (j - 1)], aNU[j - 1], i), aNh(fX[i * j - 1], i), aNd(0, j - 1, !0, i), aNR[i - 1] = aNR[0] = !
			0, aNS[j - 1] = aNS[0] = !0, aNm(0, i, !0), aNm(0, j, !1), ! function() {
				var aNo, a6F;
				for (;;) {
					if (aNo = function() {
							var aB, aNo = aNO.length - 1;
							for (aB = aNo - 1; 0 <= aB; aB--) aNP[aB] > aNP[aNo] && (aNo = aB);
							return aNo
						}(), aNP[aNo] < 5) return;
					a6F = aNO[aNo] + bL.fW(aNP[aNo], 2), (aNQ[aNo] ? function(fC) {
						var f5, aNr, aB, aGj = 0,
							aNs = 0;
						for (; aNs < j - 1;) {
							for (aB = aGj + 1; aB < j; aB++)
								if (aNS[aB]) {
									aNs = aB;
									break
								} f5 = aNs - aGj + 1, aNb(fX[fC + i * aGj], 0 === aGj ? aNT[fC] : aNN[aNr - 1] - aNN[aNr - 2], f5), aNh(fX[aNs * i + fC], f5), aNd(fC, aGj, !1, f5), aNr = f5, aGj = aNs
						}
						aNR[fC] = !0
					} : function(fE) {
						var f5, aNr, aB, aGj = 0,
							aNs = 0;
						for (; aNs < i - 1;) {
							for (aB = aGj + 1; aB < i; aB++)
								if (aNR[aB]) {
									aNs = aB;
									break
								} f5 = aNs - aGj + 1, aNb(fX[fE * i + aGj], 0 === aGj ? aNU[fE] : aNN[aNr - 1] - aNN[aNr - 2], f5), aNh(fX[fE * i + aNs], f5), aNd(aGj, fE, !0, f5), aNr = f5, aGj = aNs
						}
						aNS[fE] = !0
					})(a6F), aNm(a6F, aNO[aNo] + aNP[aNo] - a6F, aNQ[aNo]), aNP[aNo] = a6F - aNO[aNo] + 1
				}
			}(), fC = 0; fC < i; fC++)
			if (!aNR[fC])
				for (fE = 0; fE < j; fE++) aNS[fE] || ! function(fC, fE) {
					var value = fX[fE * i + fC - 1] + fX[(fE - 1) * i + fC],
						a7z = 2;
					aNR[fC + 1] && (a7z++, value += fX[fE * i + fC + 1]);
					aNS[fE + 1] && (a7z++, value += fX[(fE + 1) * i + fC]);
					fX[fE * i + fC] = bL.fW(value, a7z)
				}(fC, fE)
	}, this.aMP = function() {
		return fX
	}, this.aM6 = function() {
		fX = null
	}
}

function aIC(fO, fP) {
	return 0 <= fO ? bL.fW(fO, fP) : -bL.fW(-fO, fP)
}

function jw(fX) {
	return fX * fX
}

function a7D(fO, fP) {
	return fP < fO ? fO : fP
}

function aCP(fO, fP) {
	return fO < fP ? fO : fP
}

function a9b(fO, fX, fP) {
	return fX < fO ? fO : fP < fX ? fP : fX
}

function aNu(fX, f5) {
	for (var ed = bL.fW(fX + 1, 2), aB = 0; aB < f5; aB++) ed = bL.fW(ed + bL.fW(fX, ed), 2);
	return ed
}

function aJs(fX, f5) {
	return fX < 1 ? 0 : aNu(fX, f5)
}

function aNv(nQ, nR, tH, a9K, nd, ne, tI, u0) {
	return !(nQ + tH <= nd || nR + a9K <= ne || nd + tI <= nQ || ne + u0 <= nR)
}

function aNw(nQ, nR, tH, a9K, nd, ne, tI, u0) {
	return nQ <= nd && nR <= ne && nd + tI <= nQ + tH && ne + u0 <= nR + a9K
}

function xO(fX) {
	return Math.floor(!!fX * (1 + Math.log2(fX + .5)))
}

function bx() {
	this.fW = function(fO, fP) {
		return Math.floor((fO + .5) / fP)
	}, this.aNx = function(fO, fP) {
		return Math.floor(fO * (fP + .5))
	}, this.sqrt = function(fX) {
		return ~~Math.sqrt(fX + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iD = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aNy = function(fo, fq, fs) {
		return Math.max(Math.min(fo, fq), fs)
	}, this.aNz = function(aO0, aO1, fC, fE) {
		fC -= aO0, aO0 = fE - aO1, fE = 0;
		return 0 == fC ? fE = 0 <= aO0 ? Math.PI : 0 : (fE = Math.atan(aO0 / fC), fE += 0 < fC ? .5 * Math.PI : 1.5 * Math.PI), fE
	}, this.log2 = function(fX) {
		return Math.floor(!!fX * (1 + Math.log2(fX + .5)))
	}, this.log10 = function(fX) {
		return Math.floor(Math.log10(fX + .5))
	}, this.aO3 = function(aO4, aO5, aO6, aO7, aO8) {
		return aO6 - aO8 < aO4 && aO4 < aO6 + aO8 && aO7 - aO8 < aO5 && aO5 < aO7 + aO8
	}, this.yL = function(aA1, aA3) {
		return aA1 * aA1 + aA3 * aA3
	}
}

function dD() {
	this.y = new aO9, this.tA = 0;
	var aOA = new Array(32);

	function aOE() {
		for (var f5 = aOA.length, aB = 0; aB < f5; aB++) aOA[aB] = null
	}
	this.dd = function() {
		for (var aOB, aOC = document.body.firstChild; aOC;) aOB = aOC.nextSibling, !document.body.contains(aOC) || "DIV" !== aOC.tagName && "INPUT" !== aOC.tagName && "BUTTON" !== aOC.tagName || t.removeChild(document.body, aOC), aOC = aOB
	}, this.u = function(eC, aOD, a4m) {
		void 0 === aOD && (aOD = this.tA), bf.dk = !0, 0 === eC && (0 === aa.a29() ? eC = 5 : a0.a1.setState(13)), this.sA(), this.tA === eC && (aOD = aOA[eC].aOD, aOA[eC] = null), this.tA = eC;
		var lL = aOA[eC];
		if (!lL || 4 === eC || 7 === eC || 8 === eC || 9 === eC || 10 === eC || 11 === eC || 13 === eC || 15 === eC || 18 === eC || 20 <= eC && eC <= 28 || 32 === eC || 33 === eC) {
			if (0 === eC) return void aOE();
			1 === eC ? lL = new aOF : 2 === eC ? lL = new aOG : 3 === eC ? lL = new aOH : 4 === eC || 9 === eC || 10 === eC || 11 === eC || 13 === eC || 33 === eC ? lL = a4m : 5 === eC ? lL = new aOI : 6 === eC ? lL = new aOJ : 7 === eC ? lL =
				new aOK(t.y.aOL) : 8 === eC ? lL = a4m : 12 === eC ? lL = new aOM : 14 === eC ? lL = new aON : 15 === eC ? lL = new aOK(t.y.aOO) : 16 === eC ? lL = new aOP : 17 === eC ? lL = new aOQ : 18 === eC ? lL = new aOR : 19 === eC ? lL =
				new aOS : 20 === eC ? lL = new aOT : 21 === eC ? lL = new aOU : 22 === eC ? lL = new aOV : 23 === eC ? lL = new aOW : 24 === eC ? lL = new aOX : 25 === eC ? lL = new aOY : 26 === eC ? lL = new aOZ : 27 === eC ? lL = new aOa :
				28 === eC ? lL = new aOb : 29 === eC ? lL = new aOc : 30 === eC ? lL = new aOd : 31 === eC && (lL = new aOe), lL.aOD = aOD, aOA[eC] = lL
		}
		lL.show(a4m)
	}, this.a28 = function() {
		this.hr() && this.aOf(this.a5z().aOD)
	}, this.aOf = function(eC) {
		this.hr() && (aOA[eC] ? (this.sA(), bf.dk = !0, this.tA = eC, aOA[eC].show()) : this.u(eC))
	}, this.sA = function() {
		this.hr() && aOA[this.tA].sA()
	}, this.x = function() {
		this.hr() && (aOA[this.tA].sA(), aOE(), this.tA = 0, a0.a1.setState(13))
	}, this.vW = function() {
		var lL;
		this.hr() && (lL = aOA[this.tA]).vW && lL.vW()
	}, this.resize = function() {
		if (!this.hr()) return !1;
		aOA[this.tA].resize()
	}, this.hI = function(fC, fE) {
		var lL;
		this.hr() && (lL = aOA[this.tA]).hI && lL.hI(fC, fE)
	}, this.a2S = function(fC, fE) {
		var lL;
		this.hr() && (lL = aOA[this.tA]).a2S && lL.a2S(fC, fE)
	}, this.a2q = function() {
		var lL;
		this.hr() && (lL = aOA[this.tA]).a2q && lL.a2q()
	}, this.a2V = function(lf, lg, deltaY) {
		var lL;
		this.hr() && (lL = aOA[this.tA]).a2V && lL.a2V(lf, lg, deltaY)
	}, this.a30 = function(code) {
		var lL;
		return !!this.hr() && ((lL = aOA[this.tA]).a30 && lL.a30(code), !0)
	}, this.eY = function() {
		var lL;
		this.hr() && (lL = aOA[this.tA]) && lL.eY && lL.eY()
	}, this.hr = function() {
		return 0 < this.tA
	}, this.a5z = function() {
		return aOA[this.tA]
	}, this.a60 = function(eC) {
		return aOA[eC]
	}, this.aOg = function() {
		return aOA
	}, this.removeChild = function(v3, a4H) {
		try {
			v3.removeChild(a4H)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOK(data) {
	var aOh, aOi;
	this.show = function() {
		data.aOj && bI.aPd("account", data.t8), aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aOi.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a28()
	}), new w(data.aOj ? "🔄 " + L(155) : L(156), function() {
		t.u(8, data.aOj ? t.a5z().aOD : void 0, new tB(25, {
			tC: 0,
			t8: data.t8,
			t9: data.t9
		}))
	}, 0, 0, 1)]), aOi = new qm(aOh.vN, function() {
		var qo = [];
		qo.push(function() {
				var aP1 = new qW,
					a1g = (aP1.qZ(L(213)), data.aPI);
				a1g < 1 ? (aP1.qf(L(214)), 0 === data.aPJ ? aP1.qb(L(215)) : 1 === data.aPJ ? aP1.qb(L(216)) : 2 === data.aPJ ? aP1.qb(L(217)) : 3 === data.aPJ ? aP1.qb(L(218)) : 4 === data.aPJ ? aP1.qb(L(219)) : 5 === data.aPJ ? aP1.qb(
					L(220)) : 6 === data.aPJ ? aP1.qb(L(221)) : aP1.qb(L(222))) : (aP1.qf(L(223)), a1g = a1g < 2 ? L(224) : a1g < 61 ? 2 === a1g ? L(225) : L(226, [a1g - 1]) : a1g < 84 ? 61 === a1g ? L(227) : L(228, [a1g - 60]) :
					a1g < 255 ? 84 === a1g ? L(229) : L(230, [a1g - 83]) : L(231), aP1.qb(a1g));
				{
					var qc, aP6;
					aP1.qk(new sY), data.aOj && (qc = aP1.qb(), aP1.qk(new sO([new w(bj.vv.uS(data.t8) ? L(232) : L(233), function(e) {
						return bj.vv.w8(data.t8) ? (e.textContent = L(232), aP6(1)) : (e.textContent = L(233), aP6(0)), !0
					}).button])), aP6 = function(fX) {
						qc.textContent = fX ? L(234) : ""
					}, bj.vv.uS(data.t8) && aP6(1), aP1.qk(new sY))
				}
				var rg = new rh({
					value: data.username,
					eC: -1
				});
				rg.e.readOnly = !0, aP1.qk(rg), aP1.qk(new sO([new w(L(179), function(e) {
					return bA.qt.a4F(rg.e), bA.qt.v9(e), !0
				}).button])), data.aOj ? (aP1.qk(new sY), aP1.qf(b0.y.aP2("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aP1.qk(new sO([new w(L(236), function(e) {
					return b0.aG8.aG9({
						tC: 3,
						t8: data.t8,
						value: 0
					}), bA.qt.v9(e), !0
				}, bB.og).button])), aP1.qk(new sO([new w(L(237), function(e) {
					return b0.aG8.aG9({
						tC: 3,
						t8: data.t8,
						value: 1
					}), bA.qt.v9(e), !0
				}, bB.og).button])), a1g = "CRTOR" === (a1g = bj.eQ.data[105].value) || "ADMIN" === a1g, aP1.qk(new sO([new w(a1g ? "Block Account" : "Cheater", function(e) {
					return b0.aG8.aG9({
						tC: 3,
						t8: data.t8,
						value: 2
					}), bA.qt.v9(e), !0
				}, a1g ? bB.od : bB.og).button])), aP1.qk(new sO([new w(a1g ? "Ban IP" : "False Reporter", function(e) {
					return b0.aG8.aG9({
						tC: 3,
						t8: data.t8,
						value: 3
					}), bA.qt.v9(e), !0
				}, a1g ? bB.od : bB.og).button]))) : aP1.qb(L(235));
				return aP1
			}()),
			function(qo) {
				var aP1, qc, aDA, aPM, aP7, aP9, aP8;
				data.aOj || ((aP1 = new qW).qZ(L(238)), (qc = aP1.qb(data.aPL.length + " / 160")).style.textAlign = "center", aDA = !0, (aPM = new vf(0, 1, function(e) {
					e = e.target.value.length;
					qc.textContent = e + " / 160", 160 < e ? aDA && (aDA = !1, aP9.rD(1)) : aDA || (aDA = !0, aP9.rD(0))
				})).e.rows = 6, aPM.e.style.fontSize = "1em", aPM.vm(data.aPL), aP1.qk(aPM), 0 !== data.aPN ? (aP9 = new w(L(239), function() {
					if (!aDA) return !0;
					t.u(8, t.a5z().aOD, new tB(29, {
						tC: 1,
						qa: aPM.vn().substring(0, 160)
					}))
				}, 0, 0, 1), aP1.qk(new sO([aP9.button])), aP1.qk(new sO([new w(1 === data.aPN ? L(240) : L(241), function() {
					t.u(8, t.a5z().aOD, new tB(29, {
						tC: 0,
						qa: ""
					}))
				}, 0, 0, 1).button])), aP1.qb(1 === data.aPN ? L(242, [data.aPO - 1]) : L(243, [data.aPO - 1])), aP1.qb(L(244, [data.aPP]))) : (aP7 = new w(L(245), function() {
					if (!aPM.e.readOnly) return !0;
					t.u(8, t.a5z().aOD, new tB(29, {
						tC: 1,
						qa: aPM.vn().substring(0, 160)
					}))
				}, 1), aP9 = new w(L(176), function(e) {
					if (e.textContent === L(176)) {
						if (!aDA) return !0;
						e.textContent = L(177), aPM.e.readOnly = !0, aP7.rD(0), aP7.button.style.color = bB.oz
					} else aP8();
					return !0
				}), aP1.qk(new sO([aP9.button])), aP1.qb(L(244, [data.aPP])), aP8 = function() {
					aP9.button.textContent = L(176), aPM.e.readOnly = !1, aP7.rD(1), aP7.button.style.color = bB.o0
				}, aP1.qk(new sO([aP7.button]))), qo.push(aP1))
			}(qo),
			function(qo) {
				var aP1;
				data.aOj && 0 !== data.aPN && ((aP1 = new qW).qZ(L(246)), aP1.qd(data.aPL), aP1.qk(new sO([new w(L(247, 0, "Report"), function(e) {
					return b0.y.eZ(0) && (bA.qt.v9(e), b0.aG8.aPQ({
						tC: 5,
						t8: data.t8
					})), !0
				}, 0, 0, 1).button])), qo.push(aP1))
			}(qo), qo.push(function() {
				var aP1 = new qW,
					aP3 = (aP1.qZ(L(157)), aP1.qf(b0.y.aP2("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171)]),
					eB = data.aP4;
				return aP1.qf(L(172) + bA.rs.a53(data.wl, .01, 2) + "<br>" + L(173) + (eB + 1) + " / " + data.wk + "<br>" + L(174) + aP3[function(eB, wl) {
					if (eB < 10) return 0;
					if (eB < 30) return 1;
					if (eB < 60) return 2;
					if (3e4 <= (wl = bL.fW(wl, 100))) return 3;
					if (12e3 <= wl) return 4;
					if (7e3 <= wl) return 5;
					if (3e3 <= wl) return 6;
					if (1e3 <= wl) return 7;
					if (500 <= wl) return 8;
					if (200 <= wl) return 9;
					if (70 <= wl) return 10;
					if (20 <= wl) return 11;
					if (3 <= wl) return 12;
					return 13
				}(eB, data.wl)]), aP1
			}()), data.aOj && qo.push(function() {
				var aP1 = new qW,
					rg = (aP1.qZ(L(175)), aP1.qf(b0.y.aP2("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rh({
						value: bj.eQ.data[147].value,
						eC: -1
					}, 1, void 0, function(e) {
						bj.sL.sM(147, aP6(e.target.value))
					})),
					aP7 = (aP1.qk(rg), new w(L(14), function(e) {
						return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.v9(e), aP8(), b0.aG8.aG9({
							tC: 0,
							t8: data.t8,
							value: parseInt(bj.eQ.data[147].value, 10)
						})), !0
					}, 1)),
					aP9 = new w(L(176), function(e) {
						return e.textContent === L(176) ? (e.textContent = L(177), rg.e.readOnly = !0, aP7.rD(0), aP7.button.style.color = bB.oz, bj.sL.sM(147, rg.e.value), aP6(bj.eQ.data[147].value)) : aP8(), !0
					}),
					qc = (aP1.qk(new sO([aP9.button])), aP1.qb()),
					aP6 = function(fX) {
						qc.innerHTML = t.y.aPA(fX, bj.eQ.data[105].value, data.t8)
					},
					aP8 = function() {
						aP9.button.textContent = L(176), rg.e.readOnly = !1, aP7.rD(1), aP7.button.style.color = bB.o0
					};
				return aP6(bj.eQ.data[147].value), aP1.qk(new sO([aP7.button])), aP1
			}());
		qo.push(function() {
			var aP1 = new qW,
				rg = (aP1.qZ(L(178)), new rh({
					value: data.t8,
					eC: -1
				}));
			return rg.e.readOnly = !0, aP1.qk(rg), aP1.qk(new sO([new w(L(179), function(e) {
				return bA.qt.a4F(rg.e), bA.qt.v9(e), !0
			}).button])), aP1
		}()), data.aOj || (qo.push(function() {
			var aP1 = new qW,
				aPB = (aP1.qZ(L(180)), new rh(bj.eQ.data[106]));
			return aPB.e.readOnly = !0, aPB.e.type = "password", aP1.qk(aPB), aP1.qk(new sO([new w(L(181), function(e) {
				return e.textContent === L(181) ? (e.textContent = L(182), aPB.e.type = "text") : (e.textContent = L(181), aPB.e.type = "password"), !0
			}).button, new w(L(179), function(e) {
				return bA.qt.a4F(aPB.e), bA.qt.v9(e), !0
			}).button])), aP1.qk(new sO([new w(L(183), function() {
				t.u(8, t.a5z().aOD, new tB(15))
			}).button])), aP1.qZ(L(184), "0.8em"), aP1.qb(L(185)), aP1.qb(L(186)), aP1.qb(L(187)), aP1
		}()), qo.push(function() {
			var aP1 = new qW;
			return aP1.qZ(L(188)), aP1.qk(new sO([new w(L(189), function() {
				t.u(6, t.a5z().aOD)
			}).button])), aP1.qk(new sO([new w(L(190), function() {
				bj.sL.sM(105, ""), t.u(8, t.a5z().aOD, new tB(18))
			}).button])), aP1.qk(new sO([new w(L(191) + bj.eQ.data[105].value, function() {
				t.u(4, 0, new v(L(192), L(193), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a60(7).aOD)
				})]))
			}, bB.og).button])), aP1
		}()), qo.push(function() {
			function aPD(eC) {
				aPC[0].rD(0 === eC ? bB.oC : bB.oN), aPC[1].rD(0 === eC ? bB.oC : bB.og), aPC[2].rD(eC === qi.qj.length - 1 || eC < 5 ? bB.oC : bB.og)
			}
			var qi, aPC, aP1 = new qW;
			aP1.qZ(L(198)), aP1.qb(L(199)), bj.y.wU();
			return aPC = [new w(L(200), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				eC < 1 || (eC = bj.y.wY(eC), bj.sL.sM(105, eC.t8), bj.sL.sM(106, eC.password), t.u(8, t.a5z().aOD, new tB(18)))
			}, bB.oC, 1), new w(L(196), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				if (!(eC < 1)) {
					qi.qj[eC].remove(), qi.qj.splice(eC, 1);
					for (var aB = eC; aB < qi.qj.length; aB++) qi.qj[aB].name = "" + aB;
					bj.y.wX(eC), eC = bj.eQ.data[117].value, qi.qj[eC].textContent = qi.qj[eC].textContent.replace("⚪", "🟢"), aPD(eC)
				}
			}, bB.oC, 1), new w(L(197), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				if (eC !== qi.qj.length - 1) {
					for (var aB = qi.qj.length - 1; eC < aB; aB--) qi.qj[aB].remove(), qi.qj.splice(aB, 1), bj.y.wX(aB);
					aPD(eC)
				}
			}, bB.oC, 1)], qi = new vC(bj.eQ.data[117], aPD), aPD(0), qi.qj[0].style.marginTop = "0.5em", aP1.qh(qi), aP1.qk(new sO([aPC[0].button])), aP1.qk(new sO([aPC[1].button])), aP1.qk(new sO([aPC[2].button])), aP1
		}()));
		return qo.push(function() {
				var aP1 = new qW,
					aP3 = (aP1.qZ(L(204)), [L(205), L(206), L(207), L(208)]),
					eB = data.aPE;
				return aP1.qf(L(209) + (data.a1O / 100).toFixed(2) + "<br>" + L(173) + (eB + 1) + " / " + data.wk + "<br>" + L(174) + aP3[eB < 10 ? 0 : eB < 50 ? 1 : eB < 200 ? 2 : 3]), aP1
			}()), qo.push(function() {
				var aP1 = new qW;
				return aP1.qZ(L(201)), aP1.qf(L(202) + bA.rs.a53(data.wh, .1, 1) + "<br>" + L(173) + (data.wi + 1) + " / " + data.wk + "<br>" + L(203) + data.wj), aP1
			}()),
			function(qo) {
				var aP1 = new qW,
					aPR = data.wo,
					aPS = (aP1.qZ(L(248)), aP1.qf(L(249, [data.wm.length ? "[" + data.wm + "]" : "-"])), aP1.qf(L(250, [bA.rs.a53(aPR, .01, 2)])), aP1.qf(L(251, [data.wq + 1 + " / " + data.wk])), data.wr),
					aPT = (aP1.qf(L(252, [bA.rs.a53(aPS, .1, 1)])), data.wt);
				aP1.qf(L(253, [aPT])), aP1.qf(L(254, [bA.rs.a53(aPS / Math.max(aPT, 1), .1, 2)])), aPR = data.wp, aP1.qZ(L(255), "0.8em"), aP1.qf(L(249, [data.wn.length ? "[" + data.wn + "]" : "-"])), aP1.qf(L(250, [bA.rs.a53(aPR, .01, 2)])),
					aPS = data.ws, aP1.qf(L(252, [bA.rs.a53(aPS, .1, 1)])), aPT = data.wu, aP1.qf(L(253, [aPT])), aP1.qf(L(254, [bA.rs.a53(aPS / Math.max(aPT, 1), .1, 2)])), aP1.qf(b0.y.aP2("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qo.push(aP1)
			}(qo),
			function(qo) {
				var aP1 = new qW;
				aP1.qZ(L(256)), aP1.qf(L(209) + (data.aPU / 10).toFixed(1) + "<br>" + L(174) + (data.aPV.length ? L(257, [data.aPV]) : L(258))), data.aOj && aP1.qk(new sO([new w(L(259), function(e) {
					return b0.y.eZ(0) && (bA.qt.v9(e), b0.aG8.aPQ({
						tC: 4,
						t8: data.t8
					})), !0
				}, 0, 0, 1).button]));
				aP1.qf(b0.y.aP2("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qo.push(aP1)
			}(qo), qo.push(function() {
				var aP1 = new qW;
				if (aP1.qZ(L(210)), aP1.qf(L(211) + data.aPF + "<br>" + L(173) + (data.aPG + 1) + " / " + data.wk + "<br>" + L(174) + bo.eE(data.aPG)), data.aOj) {
					var rg = new rh({
							value: bj.eQ.data[157].value,
							eC: -1
						}, 1, void 0, function(e) {
							bj.sL.sM(157, aP6(e.target.value))
						}),
						aP9 = (rg.e.style.marginTop = "0.6em", aP1.qk(rg), new w(L(176), function(e) {
							return e.textContent === L(176) ? (e.textContent = L(177), rg.e.readOnly = !0, aPH[0].rD(0), aPH[1].rD(0), aPH[0].button.style.color = bB.oz, aPH[1].button.style.color = bB.oz, aP6(bj.eQ.data[157]
								.value)) : aP8(), !0
						})),
						aPH = (aP1.qk(new sO([aP9.button])), [new w("−", function(e) {
							return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.v9(e), aP8(), b0.aG8.aG9({
								tC: 2,
								t8: data.t8,
								value: bL.iD(parseInt(bj.eQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.v9(e), aP8(), b0.aG8.aG9({
								tC: 1,
								t8: data.t8,
								value: bL.iD(parseInt(bj.eQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qc = aP1.qb(),
						aP6 = function(fX) {
							return fX = bA.gR.a4j(fX, 3, 32767), qc.textContent = L(212, [fX - 1, fX, bj.eQ.data[105].value]), fX
						};
					aP1.qk(new sO([aPH[0].button, aPH[1].button]));
					for (var aB = 0; aB < 2; aB++) aPH[aB].button.style.fontSize = "1.6em";
					var aP8 = function() {
						aP9.button.textContent = L(176), rg.e.readOnly = !1, aPH[0].rD(1), aPH[1].rD(1), aPH[0].button.style.color = bB.o0, aPH[1].button.style.color = bB.o0
					};
					aP6(bj.eQ.data[157].value)
				}
				return aP1
			}()),
			function(qo) {
				var aP1, a4E;
				data.aOj && !data.aPW || (0 === a0.id || data.aOj || data.aPW) && ((aP1 = new qW).qZ("Patreon"), !data.aOj && data.aPX ? aP1.qk(new sO([new w(L(181), function() {
					b0.aG8.aPQ({
						tC: 7,
						t8: data.t8
					}), data.aPX = 0, t.u(7)
				}).button])) : data.aPW ? (aP1.qf(L(260, [(data.aPY / 100).toFixed(2)]) + "<br>" + L(261, [1 + data.aPZ + " / " + data.aPa]) + "<br>" + L(262, [data.aPb ? L(263) : L(264)])), data.aOj || aP1.qk(new sO([new w(L(265),
					function() {
						b0.aG8.aPQ({
							tC: 8,
							t8: data.t8
						}), data.aPW = 0, bj.sL.sM(160, 0), t.u(7)
					}).button]))) : (aP1.qf(L(266), "0.75em").style.marginBottom = "0.3em", aP1.qf("  • " + L(267), "0.75em").style.whiteSpace = "pre", aP1.qf("  • " + L(268), "0.75em").style.whiteSpace = "pre", aP1.qf("  • " + L(
						269), "0.75em").style.whiteSpace = "pre", aP1.qf(L(270), "0.75em").style.marginTop = "1.0em", aP1.qf(L(271), "0.75em").style.marginTop = "1.0em", aP1.qf("<a href='" + bK.aPc +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4E = "https://www.patreon.com/oauth2/authorize?state=" + data.t8 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1L() + "/", aP1.qf(L(272), "0.75em").style.marginTop = "1.0em", aP1.qf("<a href='" +
						a4E + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aOj || (aP1.qk(new sY), aP1.qk(new sO([new w(L(182), function() {
						b0.aG8.aPQ({
							tC: 6,
							t8: data.t8
						}), data.aPX = 1, t.u(7)
					}).button])), aP1.qf(L(273), "0.75em").style.marginTop = "0.75em")), qo.push(aP1))
			}(qo),
			function(qo) {
				var aP1, qi, aPC, eC, aPD;
				data.aOj || bj.vv.get().length && ((aP1 = new qW).qZ(L(194)), eC = 0, aPD = function() {
					var aCp = bj.vv.get().length;
					aPC[0].rD(eC === aCp ? bB.oC : bB.oN), aPC[1].rD(eC === aCp ? bB.oC : bB.og), aPC[2].rD(eC === aCp || aCp - 1 <= eC || eC < 5 ? bB.oC : bB.og)
				}, aPC = [new w(L(195), function() {
					t.u(8, void 0, new tB(25, {
						tC: 0,
						t8: bj.vv.get()[eC],
						t9: 0
					}))
				}, bB.oC, 1), new w(L(196), function() {
					bj.vv.wB(eC), qi.qj[eC].remove(), qi.qj.splice(eC, 1);
					for (var aB = eC; aB < qi.qj.length; aB++) qi.qj[aB].name = "" + aB;
					bj.vv.get().length && (eC = Math.max(eC - 1, 0), qi.qj[eC].textContent = qi.qj[eC].textContent.replace("⚪", "🟢")), aPD()
				}, bB.oC, 1), new w(L(197), function() {
					for (var hx = qi.qj.length - 1; eC < hx; hx--) bj.vv.wB(hx), qi.qj[hx].remove(), qi.qj.splice(hx, 1);
					aPD()
				}, bB.oC, 1)], aPD(), (qi = new vC(bj.vv.w7(), function(aB) {
					eC = aB, aPD()
				})).qj[0].style.marginTop = "0.5em", aP1.qh(qi), aP1.qk(new sO([aPC[0].button])), aP1.qk(new sO([aPC[1].button])), aP1.qk(new sO([aPC[2].button])), qo.push(aP1))
			}(qo), qo
	}())
}

function aOV() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.aIncomeType ? (bA.r1.a3c(aPg.vn(), aD.data.aIncomeData, 255), bA.r1.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(274), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(276), L(277), L(278)],
			value: aD.data.aIncomeType
		}, function(eC) {
			aPj(), 2 !== eC || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f2)), aD.data.aIncomeType = eC, t.u(22)
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1;
		1 === aD.data.aIncomeType && ((aP1 = new qW).qZ("Value"), aP1.qk(new rh({
			eC: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qo.push(aP1))
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.aIncomeType && ((aP1 = new qW).qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.aIncomeData, 4)), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOY() {
	var aPe, aPf, aPg;

	function aPh() {
		aPj(), 3 !== aD.data.botDifficultyType || bA.r1.a3Q(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		3 === aD.data.botDifficultyType && bA.r1.a3c(aPg.vn(), aD.data.botDifficultyData, aE.kb.length - 1)
	}

	function aPo(qo, eC) {
		var aP1 = new qW,
			value = (aP1.qZ(eC < 0 ? L(62) : L(61) + " " + bg.a1G[eC % 9]), 0 <= eC && (aP1.qf(L(281) + ": " + aD.data.teamPlayerCount[eC]).style.marginBottom = "1em"), eC < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eC]);
		aP1.qh(new vC({
			vG: aE.kb,
			value: value
		}, function(hx) {
			eC < 0 ? aD.data.botDifficultyValue = hx : aD.data.botDifficultyTeam[eC] = hx
		})), qo.push(aP1)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(62), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, function() {
		var qo = [];
		if (function(qo) {
				var aP1 = new qW,
					vG = (aP1.qZ(L(275)), [L(277), L(279), L(280), L(278)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), vG.splice(2, 1));
				aP1.qh(new vC({
					vG: vG,
					value: value
				}, function(eC) {
					aPj(), aD.data.botDifficultyType = eC, 0 === aD.data.gameMode && 2 === eC && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f2)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qo.push(aP1)
			}(qo), 0 === aD.data.botDifficultyType) aPo(qo, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPo(qo, aB);
		else 3 === aD.data.botDifficultyType && ! function(qo) {
			var aP1 = new qW;
			aP1.qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.botDifficultyData, 8)), aP1.qk(aPg), qo.push(aP1)
		}(qo);
		return qo
	}())
}

function aPp(data) {
	var aOh, aPq, aPr, aPs, aPt, aPu, aPv, colors, aPw, aPx, aPy = 0,
		aPz = 0,
		aQ0 = !1,
		aQ1 = !1,
		aQ2 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQW(lf, lg) {
		! function(lf, lg) {
			return aPq < lf && lf < aPq + aPs && aPr < lg && lg < aPr + aPt
		}(aPy = lf, aPz = lg) ? (aQ0 && (bf.dk = !0), aQ0 = !1) : (aQ0 = !0, bf.dk = !0)
	}
	this.show = function() {
		aQ1 = bj.eQ.data[127].value, aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize();
		var ed = h.k,
			vV = aOh.vS(),
			aQB = ed * vV.vU,
			ed = ed * vV.sD;
		aPu = bA.qt.tZ(.06), aPv = bA.qt.tZ(.04), aPq = bA.qt.tZ(.06), aPr = ed + aPu, aPs = h.i - aPq - aPv, aPt = aQB + ed - aPr - aPv
	}, this.vW = function() {
		aOh.vW(),
			function() {
				var aB, aQ8, gY, fC, fO, g = data.data,
					aQF = 1,
					aQG = .125,
					aQH = aQ1 ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQ8 = g[aB].aQ8, gY = aQ8.length, aQF = Math.max(gY, aQF), fO = 0; fO < gY; fO++) aQG = Math.max(aQ8[fO], aQG), aQH = Math.min(aQ8[fO], aQH);
				var nR = aPr + aPt,
					yu = aPt / (aQG - aQH),
					yt = 1 / (aQF - 1);
				for (vX.lineWidth = bc.zs, aB = 0; aB < g.length; aB++) {
					for (aQ8 = g[aB].aQ8, gY = aQ8.length, fC = aPq, vX.beginPath(), vX.moveTo(fC + aPs, nR - yu * (aQ8[gY - 1] - aQH)), fO = gY - 2; 0 <= fO; fO--) vX.lineTo(fC + yt * fO * aPs, nR - yu * (aQ8[fO] - aQH));
					vX.strokeStyle = colors[aB], vX.stroke()
				}(function(aQH, aQG, nR, yu) {
					vX.font = bA.qt.sk(0, .25 * aPq), bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 2), vX.fillStyle = colors[0];
					for (var fC = .92 * aPq, aB = 0; aB < 3; aB++) {
						var fX = aQH + aB * (aQG - aQH) / 2;
						vX.fillText((fX / 1e3).toFixed(3), fC, nR - yu * (fX - aQH))
					}
				})(aQH, aQG, nR, yu),
				function(aQF) {
					var fE = aPr + aPt + .15 * aPv;
					vX.font = bA.qt.sk(0, Math.min(.4 * aPv, .028 * h.i)), bA.qt.textBaseline(vX, 0), bA.qt.textAlign(vX, 2), vX.fillStyle = colors[0], vX.fillText(bA.a3H.a46(aPw), aPq + aPs, fE), bA.qt.textAlign(vX, 0), vX.fillText(bA.a3H.a46(
						new Date(aPx.getTime() - 6e4 * (aQF - 1) * aQ2[data.aQ7])), aPq, fE)
				}(aQF),
				function(aQF, aQH, aQG) {
					if (aQ0 && !(aQF < 2)) {
						for (var a9S, eC = (aPy - aPq) / aPs * (aQF - 1), aQK = Math.floor(eC), aQL = Math.floor(1 + eC), aQM = eC - aQK, aQN = 1e5, aQO = -1, aQP = -1, aQQ = aQG - (aQG - aQH) * (aPz - aPr) / aPt, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDL, aQ8 = g[aB].aQ8;
							aQ8.length <= aQL || (aQ8 = aQ8[aQK] + aQM * (aQ8[aQL] - aQ8[aQK]), (aDL = Math.abs(aQQ - aQ8)) < aQN && (aQN = aDL, aQO = aB, aQP = aQ8))
						} - 1 !== aQO && (aQG = aPr + aPt - (aQP - aQH) / (aQG - aQH) * aPt, vX.lineWidth = .5 * bc.zs, vX.strokeStyle = colors[aQO], vX.beginPath(), vX.moveTo(aPq, aQG), vX.lineTo(aPy, aQG), vX.lineTo(aPy, aPr + aPt), vX
						.stroke(), vX.beginPath(), vX.arc(aPy, aQG, .1 * aPq, 0, 2 * Math.PI), vX.fillStyle = colors[aQO], vX.fill(), aQH = aPr + aPt + .15 * aPv, bA.qt.textAlign(vX, 1), a9S = aQF - 2 < eC ? (a9S = aPx.getTime() - 6e4 * aQ2[
								data.aQ7], new Date(a9S + (eC - (aQF - 2)) * (aPw.getTime() - a9S))) : new Date(aPx.getTime() - 6e4 * (aQF - eC - 1) * aQ2[data.aQ7]), aQF = bA.a3H.a46(a9S), eC = bA.qt.measureText(aQF), a9S = bL.iD(aPy, aPq +
								.5 * eC, aPq + aPs - .5 * eC), vX.fillStyle = bA.color.ns(70, 50, 20), vX.fillRect(a9S - .52 * eC, aPr + aPt, 1.04 * eC, .55 * aPv), vX.fillStyle = colors[0], vX.fillText(aQF, a9S, aQH), vX.font = bA.qt.sk(0,
								.25 * aPq), bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 2), a9S = .92 * aPq, aQF = (aQP / 1e3).toFixed(3), eC = bA.qt.measureText(aQF), aQH = a9S - 1.04 * eC, vX.fillStyle = bA.color.ns(70, 50, 20), vX
							.fillRect(aQH, aQG - .1625 * aPq, aPq - aQH, .275 * aPq), vX.fillStyle = colors[aQO], vX.fillText(aQF, a9S, aQG))
					}
				}(aQF, aQH, aQG)
			}(), vX.lineWidth = bc.zs, vX.strokeStyle = bB.o0, vX.beginPath(), vX.moveTo(aPq, aPr), vX.lineTo(aPq, aPr + aPt), vX.lineTo(aPq + aPs, aPr + aPt), vX.stroke();
		var aB, fontSize = .5 * aPu,
			g = (vX.font = bA.qt.sk(0, fontSize), bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 0), data.data),
			f5 = g.length,
			fE = aPr - .5 * aPu,
			qa = "";
		for (aB = 0; aB < f5; aB++) qa += g[aB].name + "  ";
		qa = qa.trim();
		var aQT = bA.qt.measureText(qa),
			fC = .5 * (h.i - aQT);
		for (aQT > h.i && (fC = 0, vX.font = bA.qt.sk(0, h.i / aQT * fontSize)), aB = 0; aB < f5; aB++) vX.fillStyle = colors[aB], vX.fillText(g[aB].name, fC, fE), fC += bA.qt.measureText(g[aB].name + "  ")
	}, this.hI = function(lf, lg) {
		aQW(lf, lg)
	}, this.a2S = function(lf, lg) {
		aQW(lf, lg)
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	};
	var aB, eU, a44, hx, f8 = data.data,
		f5 = f8.length,
		max = 1;
	for (aB = 0; aB < f5; aB++) max = Math.max(max, f8[aB].aQ8.length);
	for (aB = 0; aB < f5; aB++)
		for (; f8[aB].aQ8.length < max;) f8[aB].aQ8.unshift(0);
	eU = new Date, a44 = 6e4 * eU.getTimezoneOffset(), hx = eU.getTime() - a44, aPw = new Date(hx), 6 === data.aQ7 ? function(eU, a44) {
		var aQA = eU.getUTCFullYear(),
			eU = eU.getUTCMonth() + 1;
		aPx = eU < 12 ? new Date(Date.UTC(aQA, eU) - a44) : new Date(Date.UTC(aQA + 1, 0) - a44)
	}(eU, a44) : (a44 = 6e4 * aQ2[data.aQ7], aPx = data.aQ7 <= 4 ? new Date(hx + a44 - eU.getTime() % a44) : new Date(hx + a44 - (eU.getTime() + 2592e5) % a44)), hx = bA.color, colors = [bB.o0, hx.ns(255, 0, 0), hx.ns(0, 200, 0), hx.ns(80, 80,
		255), hx.ns(255, 255, 0), hx.ns(255, 0, 255), hx.ns(0, 255, 255), hx.ns(255, 140, 0), hx.ns(128, 128, 128), hx.ns(0, 255, 140)], aOh = new vH(L(282) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQ7] + ", " + bA.a3H.a43(aPw), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(283), function() {
			t.u(14)
		})
	], !1)
}

function aON() {
	var aOh, aOi, qo;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aOi.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(284), [new w("⬅️ " + L(37), function() {
		t.aOf(13)
	})]), aOi = new qm(aOh.vN, ((qo = []).push(function() {
		var aP1 = new qW,
			aP9 = (aP1.qZ(L(285)), aP1.qb(L(286)), new w(L(287), function() {
				bj.sL.sM(130, 0), t.y.aQb()
			}, 0, 0, 1)),
			rg = new rh(bj.eQ.data[126], 0, function() {
				aP9.button.click()
			});
		return aP1.qk(rg), rg.e.placeholder = "a,b,c", rg.e.style.marginTop = "0.5em", aP1.qk(new sO([aP9.button])), aP1
	}()), qo.push(function() {
		var aP1 = new qW,
			aP9 = new w(L(287), function() {
				bj.sL.sM(130, 1), t.y.aQb()
			}, 0, 0, 1),
			aQc = new rh(bj.eQ.data[129], 1, function() {
				aQc.e.focus()
			}),
			aQd = new rh(bj.eQ.data[128], 1, function() {
				aP9.button.click()
			});
		return aP1.qZ(L(288)), aP1.qk(aQd), aQd.e.style.marginBottom = "0.5em", aP1.qZ(L(289)), aP1.qk(aQc), aP1.qk(new sO([aP9.button])), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(290)), bj.eQ.data[125].vG = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aP1.qh(new vC(bj.eQ.data[125])), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(291)), aP1.qk(new sI(bj.eQ.data[127], L(292))), aP1
	}()), qo))
}

function aOM() {
	var aOh, aQe, aPs, aQf, aQg, aQh, colors = [0, 0, 0],
		aQi = -1;

	function aQl(aB) {
		var aQm = aQe.fE + aB * (bc.gap + aQh);
		vX.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vX.fillRect(aQf, aQm, colors[aB] * aQg, aQh), vX.strokeStyle = bB.o0, vX.strokeRect(aQf, aQm, aQg,
			aQh), vX.fillStyle = bB.o0, vX.font = bA.qt.sk(0, .32 * aQh), bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 0), vX.fillText(L(0 === aB ? 295 : 1 === aB ? 296 : 297) + aQj(aB), aQf + bc.gap, aQm + .53 * aQh)
	}

	function aQj(aB, aQn) {
		return aQn = aQn || 256, bL.iD(Math.floor(aQn * colors[aB]), 0, aQn - 1)
	}

	function a2w(lf, lg) {
		return !(lf < aQf || lg < aQe.fE || lf > aQe.fC + aQe.i || lg > aQe.fE + aQe.j)
	}
	this.show = function() {
		var fX = bj.eQ.data[121].value;
		colors[0] = (fX >> 12) / 63, colors[1] = (fX >> 6 & 63) / 63, colors[2] = (63 & fX) / 63, aOh.show(), this.resize()
	}, this.sA = function() {
		bj.sL.sM(121, (aQj(0, 64) << 12) + (aQj(1, 64) << 6) + aQj(2, 64)), aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aQe.resize();
		var ed = h.k,
			vV = aOh.vS(),
			aQk = (aQe.fE = Math.max(aQe.fE, ed * vV.sD + bc.gap), ed * vV.vU - 2 * bc.gap);
		aQe.j = Math.min(aQe.j, aQk), aQe.i = 2 * aQe.j, aQe.fE = ed * vV.sD + .5 * (ed * vV.vU - aQe.j), aQe.fC = .5 * (h.i - aQe.i), aPs = .25 * aQe.i, aQf = aQe.fC + aPs + bc.gap, aQg = aQe.i - aPs - bc.gap, aQh = (aQe.j - 2 * bc.gap) / 3
	}, this.vW = function() {
		var eB, tY, fP;
		aOh.vW(), vX.lineWidth = bc.zs, eB = aQj(0), tY = aQj(1), fP = aQj(2), vX.fillStyle = "rgb(" + eB + "," + tY + "," + fP + ")", vX.fillRect(aQe.fC, aQe.fE, aPs, aQe.j), vX.strokeStyle = bB.o0, vX.strokeRect(aQe.fC, aQe.fE, aPs, aQe.j), vX
			.fillStyle = eB + tY + fP < 306 && tY < 150 ? bB.o0 : bB.nr, bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 1), vX.font = bA.qt.sk(0, .1 * aQe.j), vX.rotate(-Math.PI / 2), vX.fillText(L(294), -aQe.fE - .5 * aQe.j, aQe.fC + .5 * aPs),
			vX.setTransform(1, 0, 0, 1, 0, 0), aQl(0), aQl(1), aQl(2)
	}, this.hI = function(lf, lg) {
		a2w(lf, lg) && (aQi = bL.iD(Math.floor((lg - aQe.fE) / (aQh + .75 * bc.gap)), 0, 2), colors[aQi] = bL.iD((lf - aQf) / aQg, 0, 1), bf.dk = !0)
	}, this.a2S = function(lf) {
		-1 !== aQi && (colors[aQi] = bL.iD((lf - aQf) / aQg, 0, 1), bf.dk = !0)
	}, this.a2V = function(lf, lg, deltaY) {
		a2w(lf, lg) && (lf = bL.iD(Math.floor((lg - aQe.fE) / (aQh + .75 * bc.gap)), 0, 2), colors[lf] = bL.iD(colors[lf] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dk = !0)
	}, this.a2q = function() {
		0 <= aQi && (aQi = -1, bf.dk = !0)
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(293), [new w("⬅️ " + L(37), function() {
		t.y.aDG()
	})], !1), aQe = new rU([.5, .25], [.5, .5], 1)
}

function aOU() {
	var aPe, aPf, aPg, rS;

	function aPh() {
		aPj(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aOg()[19] = null, t.a28()
	}

	function aQo() {
		aPj(), t.u(21)
	}

	function aPj() {
		1 === aD.data.gameMode ? aD.a5Q.a5V() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.r1.a3c(aPg.vn(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, rS = [new w("⬅️ " + L(37), aPh)], 1 === aD.data.gameMode && rS.push(new w(L(298), aQo, 1, 1)), aPe = new vH(L(299), rS), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), 0 === aD.data.gameMode && (aP1.qh(new vC({
			vG: [L(300), L(278)],
			value: aD.data.colorsType
		}, function(eC) {
			aPj(), aD.data.colorsType = eC, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f2 || (aD.data.colorsData = new Uint32Array(aD.f2)), t.u(21)
		})), aP1.qk(new sY));
		aP1.qk(new sI({
			value: aD.data.selectableColor
		}, L(301), function(value) {
			aD.data.selectableColor = value
		})), qo.push(aP1)
	}(rS = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qo) {
		var aP1 = new qW;
		aP1.qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.colorsData, 1)), aP1.qk(aPg), qo.push(aP1)
	}(rS) : (aD.a5Q.a5V(), rS.push(function() {
		var aP1 = new qW;
		aP1.qZ(L(281));
		for (var aB = 0; aB < bg.a1G.length; aB++) {
			var hx = (aB + 1) % bg.a1G.length,
				e = aP1.qf((0 == hx ? "" : "Team ") + bg.a1G[hx]);
			aB && (e.style.marginTop = "0.5em"), aP1.qk(new rh({
				eC: -1,
				value: aD.data.teamPlayerCount[hx]
			}, 1, 0, function(e) {
				aPe.vO[1].rD(0);
				var playerCount = bL.iD(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQq] = playerCount
			})).e.aQq = hx
		}
		return aP1
	}())), rS))
}

function tB(id, a4m, aQr) {
	var aOh, aQs;

	function aQx() {
		aQs.qp.innerHTML += "<br>" + L(304)
	}

	function aR7() {
		var fP = 1;
		t.u(4, 1, new v(L(305), L(306), !1, [new w("🔄 Reload", function() {
			fP && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fP = 0
		}, bB.oN)]))
	}

	function aQw() {
		bD.a7(90), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bH.dd(bD.aC), bj.sL.sM(110, bF.tD.tE(bF.tD.tF(15))), b0.aG8.aR9()
	}
	this.aQt = !0, this.aQu = id, this.show = function() {
		aOh.show(), this.resize(), 15 === id ? (b0.y.aQv(id) ? aQw : aQx)() : 16 === id ? b0.y.aQv(id) ? b0.ea.eb(2) : aQx() : 17 === id ? b0.y.aQv(id) ? b0.ea.eb(3) : aQx() : 18 === id ? (b0.y.close(0, 3253), b0.y.aH5(0, id, 0), aQx()) : 21 ===
			id ? b0.y.aQv(id) ? b0.aQy.aQz(a4m.tT, a4m.tU, a4m.tV) : aQx() : 22 === id ? b0.y.aQv(id) ? b0.aQy.aR0(a4m.tT, a4m.aR1, a4m.aR2) : aQx() : 23 === id ? b0.y.aQv(id) ? b0.aQy.aR3(a4m.aQ7, a4m.a1d) : aQx() : 24 === id ? b0.y.aQv(id) ? b0
			.aQy.aR4(a4m.aQ7, a4m.tU, a4m.tV) : aQx() : 25 === id ? b0.y.aQv(id) ? b0.aG8.aPQ(a4m) : aQx() : 28 === id ? b0.y.aQv(id) ? b0.aQy.aR5(a4m.tT, a4m.aR1, a4m.aR2) : aQx() : 29 === id ? b0.y.aQv(id) ? b0.aG8.aR6(a4m) : aQx() : 30 ===
			id && (b0.y.aQv(id) ? b7.aDB() || aR7() : aQx())
	}, this.aR8 = function() {
		15 === id ? aQw() : 16 === id ? b0.ea.eb(2) : 17 === id ? b0.ea.eb(3) : 18 === id ? t.u(8, this.aOD, new tB(16)) : 21 === id ? b0.aQy.aQz(a4m.tT, a4m.tU, a4m.tV) : 22 === id ? b0.aQy.aR0(a4m.tT, a4m.aR1, a4m.aR2) : 23 === id ? b0.aQy.aR3(
			a4m.aQ7, a4m.a1d) : 24 === id ? b0.aQy.aR4(a4m.aQ7, a4m.tU, a4m.tV) : 25 === id ? b0.aG8.aPQ(a4m) : 28 === id ? b0.aQy.aR5(a4m.tT, a4m.aR1, a4m.aR2) : 29 === id ? b0.aG8.aR6(a4m) : 30 === id ? b7.aDB() || aR7() : 1e3 === id && (
			this.aQu = id = 25, b0.aG8.aPQ(a4m))
	}, this.aDF = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aOD) : 17 === code ? (b0.y.close(0, 3252), bj.y.wX(0), bj.eQ.data[117].vG && 0 < bj.eQ.data[117].vG.length ? (bu = bj.y.wY(0), bj.sL.sM(105, bu.t8), bj.sL.sM(106, bu
			.password), t.u(8, this.aOD, new tB(16))) : (bj.sL.sM(105, ""), t.y.aDG())) : 21 === code ? t.u(10, this.aOD, new aBj(data)) : 23 === code ? t.u(13, this.aOD, new aPp({
			data: data,
			aQ7: a4m.aQ7
		})) : 25 === code ? (t.y.aOO.t8 = a4m.t8, bj.vv.mm(a4m.t8), t.u(15, this.aOD)) : 30 === code && (data ? t.u(1) : aR7()))
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aQs.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(302), [new w("⬅️ " + L(37), function() {
		aQr ? t.u(29) : t.y.aDG()
	})]), aQs = new sN(aOh.vN, L(303))
}

function aOS() {
	var aPe, aPf, qo;

	function aRC() {
		var gY;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5Q.a5V()), gY = bA.r1.a3W(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gY) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aPh() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aRE(), aD.data.canvas = null, t.u(5, 5)
	}

	function aRE() {
		b9.qD.dd(), bj.sL.sM(156, b9.a5g.a0M())
	}

	function aRA() {
		aD.data.isReplay = 0, aRE(), aD.a5Q.a5s(), aa.aHG(), aD.a5Q.a5p(), aD.data.canvas = 2 === aD.data.mapType ? bS.xV : null, aD.a5U(), aD.a5S = 1
	}

	function aRQ() {
		aRC();
		for (var g = [aRH(), aRI(), aRJ()], aB = 3; aB < 6; aB++) t.removeChild(aPf.qp, aPf.qq[aB].qY), aPf.qq[aB] = g[aB - 3], aPf.qp.appendChild(aPf.qq[aB].qY);
		aPf.resize()
	}

	function aRH() {
		var aRR, aP1 = new qW;
		return aP1.qZ(L(299)), aRR = 0 === aD.data.gameMode ? [L(300), L(278)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aP1.qf(aRR), aP1.qk(new sO([new w(L(310), function() {
			t.u(21)
		}).button])), aP1
	}

	function aRI() {
		var aP1 = new qW,
			g = (aP1.qZ(L(62)), [L(277) + ": " + aE.kb[aD.data.botDifficultyValue], L(279), L(280), L(278)]);
		return aP1.qf(g[aD.data.botDifficultyType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(25)
		}).button])), aP1
	}

	function aRJ() {
		var aP1 = new qW,
			g = (aP1.qZ("Spawning"), [L(300), L(312), L(278)]);
		return aP1.qf(g[aD.data.spawningType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(24)
		}).button])), aP1
	}
	this.show = function() {
		aPe.show(), this.resize(), aPe.vN.scrollTop = t.y.aJV[0]
	}, this.sA = function() {
		t.y.aJV[0] = aPe.vN.scrollTop, aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH("🔧 " + L(307), [new w("⬅️ " + L(37), aPh), new w(L(308), aRA)]), aRC(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xV : 1 === aD.data.mapType ? aD.data.canvas = bS.aM7(bS.a5q(aD.data), 0).xV : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aM7(bS.a5q(aD.data), aD.data.mapSeed).xV)), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW,
			a3m = (aP1.qZ(L(309)), aD.data.canvas);
		a3m.style.width = "100%", aP1.qk({
			e: a3m
		}), aP1.qk(new sO([new w(L(310), function() {
			t.u(20)
		}).button])), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(281)), aP1.qk(new rh({
			eC: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.iD(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.r1.a3W(aD.data.teamPlayerCount, 0), aD.a5Q.a5V(), bA.r1.a3W(aD.data.teamPlayerCount, 0) !== e) && aRQ()
		})), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(311)), aP1.qh(new vC({
			vG: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eC) {
			aD.data.gameMode !== eC && (aD.data.gameMode = eC, aRQ())
		})), qo.push(aP1)
	}(qo), qo.push(aRH()), qo.push(aRI()), qo.push(aRJ()), function(qo) {
		var aP1 = new qW,
			g = (aP1.qZ(L(313)), [L(314), L(315), L(278)]);
		aP1.qf(g[aD.data.playerNamesType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(23)
		}).button])), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW,
			g = (aP1.qZ(L(274)), [L(276), L(277) + ": " + aD.data.aIncomeValue, L(278)]);
		aP1.qf(g[aD.data.aIncomeType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(22)
		}).button])), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW,
			g = (aP1.qZ(L(316)), [L(276), L(277) + ": " + aD.data.tIncomeValue, L(278)]);
		aP1.qf(g[aD.data.tIncomeType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(26)
		}).button])), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW,
			g = (aP1.qZ(L(317)), [L(276), L(277) + ": " + aD.data.iIncomeValue, L(278)]);
		aP1.qf(g[aD.data.iIncomeType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(27)
		}).button])), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW,
			g = (aP1.qZ(L(318)), [L(276), L(277) + ": " + aD.data.sResourcesValue, L(278)]);
		aP1.qf(g[aD.data.sResourcesType]), aP1.qk(new sO([new w(L(310), function() {
			t.u(28)
		}).button])), qo.push(aP1)
	}(qo), function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(319)), aP1.qk(new sO([new w(L(320), function() {
			t.x(), aD.a5Q.a5t(), t.y.aJV[0] = 0, t.u(19)
		}).button])), aP1.qk(new sO([new w(L(321), function() {
			bm.aJK()
		}).button])), aP1.qk(new sO([new w(L(322), function() {
			return bm.aJM(), !0
		}).button])), qo.push(aP1)
	}(qo), qo))
}

function aOd() {
	var aPe, rm = !0;

	function s3(s2, a5x) {
		var qY = document.createElement("div"),
			aRT = document.createElement("span"),
			aRU = document.createElement("span");
		aRT.textContent = aW.aC5(a5x.eT) + ":", aRT.style.color = bB.oF, aRT.style.paddingRight = "0.4em", aRT.style.display = "table-cell", aRT.style.width = "6ch", aRT.style.textAlign = "end", qY.appendChild(aRT), aRU.textContent = a5x.qa, qY
			.appendChild(aRU), qY.style.display = "table", a5x.pc && function(qY, pc) {
				{
					var aJ6;
					pc >= 1024 - aj.s9.zf ? ((aJ6 = document.createElement("img")).src = aj.xY.zT[pc - 1024 + aj.s9.zf].toDataURL(), aJ6.style.width = "1.5em", aJ6.style.height = "1.5em", aJ6.style.verticalAlign = "middle", qY.appendChild(aJ6)) : ((
						aJ6 = document.createElement("span")).textContent = aj.s9.zu(pc), aJ6.style.display = "inline-block", aJ6.style.fontSize = "1.5em", aJ6.style.lineHeight = "1em", aJ6.style.verticalAlign = "middle", qY.appendChild(aJ6))
				}
			}(qY, a5x.pc), s2.appendChild(qY)
	}

	function s6() {
		rm && (aPe.vN.scrollTop = aPe.vN.scrollHeight)
	}
	this.clear = function() {
		aPe.vN.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6q = bq.a61(), f5 = a6q.length, s2 = document.createDocumentFragment(), aB = 0; aB < f5; aB++) s3(s2, a6q[aB]);
		aPe.vN.appendChild(s2), s6(), aPe.show(), this.resize(), rm = !0, s6()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPe.vN.style.padding = "0.4em " + bA.qt.r2(bc.qz)
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, this.a1I = function(a5x) {
		var s2 = document.createDocumentFragment();
		s3(s2, a5x), aPe.vN.appendChild(s2), s6()
	}, (aPe = new vH(L(323), [new w("⬅️ " + L(37), function() {
		t.aOf(1)
	})])).vN.style.overflowY = "auto", aPe.vN.addEventListener("scroll", function() {
		rm = aPe.vN.scrollTop >= aPe.vN.scrollHeight - aPe.vN.clientHeight - 2
	})
}

function aOa() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.iIncomeType && bA.r1.a3c(aPg.vn(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(317), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(276), L(277), L(278)],
			value: aD.data.iIncomeType
		}, function(eC) {
			aPj(), 2 !== eC || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f2), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eC, t.u(27)
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1;
		1 === aD.data.iIncomeType && ((aP1 = new qW).qZ("Value"), aP1.qk(new rh({
			eC: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qo.push(aP1))
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.iIncomeType && ((aP1 = new qW).qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.iIncomeData, 4)), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOI() {
	var aRW, aRX, aQe, rg, aRY, sf = 0;
	this.aHo = new tJ, aQe = new rU([.45, .27], [.5, .5], 2 / 3), aRX = [new w("⚔️<br>" + L(324), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aRZ(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bB.oT), new w("🗡️<br>" + L(307), function() {
			aRZ(1)
		}, bB.om), new w("🔑<br>" + L(325), function() {
			aRZ(2)
		}, bB.p4), new w("☰<br>" + L(326), function() {
			aRZ(3)
		}, bB.oD), new w("", function() {
			t.u(12)
		}, bB.nw, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rg = new rh(bj.eQ.data[122]);
	for (var aB = 0; aB < aRX.length; aB++) aRX[aB].button.style.position = "absolute";

	function aRZ(eC) {
		a0.a1.setState(10), ab.tc() || ab.aHf(), 0 === eC ? t.y.a5j() : 1 === eC ? (b9.aJf.xG(bj.eQ.data[156].value, 1) || aD.a5Q.a5t(), t.u(19)) : 2 === eC ? 0 !== a0.id || bj.eQ.data[140].value ? t.u(8, t.tA, new tB(16)) : t.y.aRa(t.tA, 16) : 3 ===
			eC && t.u(1)
	}
	rg.e.style.position = "absolute", rg.e.style.textAlign = "center", rg.e.placeholder = L(327), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHo.show(), aRX[4].rD(bA.color.a3t(bj.eQ.data[121].value)), this.resize(), document.body.appendChild(rg.e);
		for (var aB = 0; aB < aRX.length; aB++) document.body.appendChild(aRX[aB].button);
		1 !== a0.id || a0.dw < 5 || (aRY && bf.eT > aRY + 144e5 ? a0.wG.setState(14) : aRY = bf.eT)
	}, this.sA = function() {
		this.aHo.sA(), t.removeChild(document.body, rg.e);
		for (var aB = 0; aB < aRX.length; aB++) t.removeChild(document.body, aRX[aB].button)
	}, this.resize = function() {
		this.aHo.resize(), this.aHo.resize(), aQe.resize();
		var gap = .5 * bc.gap,
			u8 = 10 / 99 * .84 * aQe.i,
			aRd = .16 * aQe.j,
			aA0 = .19 * aQe.i,
			fC = aQe.fC + aA0,
			u8 = aQe.fE + u8 + 3 * gap,
			i = .5 * (aQe.i - gap) - aA0,
			aA0 = aQe.i - 2 * aA0 - aRd - gap,
			aA0 = (bA.qt.ta(rg.e, fC, u8, aA0, aRd), bA.qt.ta(aRX[4].button, fC + aA0 + gap, u8, aRd, aRd), sf = u8, .5 * (aQe.fE + aQe.j - (u8 += aRd + gap) - gap));
		bA.qt.ta(aRX[0].button, fC, u8, i, aA0), bA.qt.ta(aRX[1].button, fC + i + gap, u8, i, aA0), bA.qt.ta(aRX[2].button, fC, u8 + aA0 + gap, i, aA0), bA.qt.ta(aRX[3].button, fC + i + gap, u8 + aA0 + gap, i, aA0);
		bA.qt.ta(aRX[5].button, fC, u8 + aA0 * 2 + gap * 2, i * 2 + gap, aA0 / 3);
		bA.qt.ta(aRX[6].button, fC, u8 + aA0 * 2.33 + gap * 3, i * 2 + gap, aA0 / 3);
		for (var aB = 0; aB < aRX.length; aB++) aRX[aB].button.style.font = bA.qt.sk(0, bA.qt.uw(.065 * aQe.j)), bA.qt.r3(aRX[aB].button, 5);
		rg.e.style.font = bA.qt.sk(0, bA.qt.uw(.08 * aQe.j)), bA.qt.r3(rg.e, 5)
	}, this.vW = function() {
		if (aa.aHK(), aT.vW(), f5 = Math.floor((a0.a1.iE() ? .018 : .0137) * h.iF), vX.font = bA.qt.sk(0, Math.max(5, f5)), bA.qt.textBaseline(vX, 0), bA.qt.textAlign(vX, 2), vX.fillStyle = bB.o0, vX.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vX.measureText(text).width, f5 = Math.max(5, f5), vX.textAlign = "left", vX.textBaseline = "middle", vX.fillText(text, vX.canvas.width - textLength - f5 / 2, 2 * f5), aO.vW(sf), bY.vW(), ab.tc()) {
			vX.imageSmoothingEnabled = !1;
			var text = ab.aHN("territorial.io"),
				textLength = .84 * aQe.i / text.width;
			vX.setTransform(textLength, 0, 0, textLength, aQe.fC + .08 * aQe.i, aQe.fE), aRW = aRW || bA.a3D.a4k(text, bA.a3D.a4q, [0, 0, 0]);
			for (var fC = -1; fC <= 1; fC += 2)
				for (var fE = -1; fE <= 1; fE += 2) vX.drawImage(aRW, fC, fE);
			vX.drawImage(text, 0, 0), vX.imageSmoothingEnabled = !0;
			var f5 = ab.aHN("logo"),
				aRg = .6666 * textLength * text.height / f5.height,
				nd = .5 * h.i,
				ne = aQe.fE + .5 * textLength * text.height - .5 * aRg * f5.height;
			vX.setTransform(aRg, 0, 0, aRg, nd - .6 * textLength * text.width, ne), vX.drawImage(f5, 0, 0), vX.setTransform(aRg, 0, 0, aRg, nd + .6 * textLength * text.width - aRg * f5.width, ne), vX.drawImage(f5, 0, 0), vX.setTransform(1, 0, 0,
				1, 0, 0), vX.imageSmoothingEnabled = !0
		}
	}
}

function aOP() {
	var aOh, aRh, aRi, vI;

	function aRj(aB) {
		t.u(8, t.tA, new tB(21, {
			tT: aB,
			tU: 0,
			tV: 10
		}))
	}
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aRh.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aRi = [new w(L(328), function() {
		aRj(1)
	}, 0, 0, 1), new w(L(329), function() {
		aRj(2)
	}, 0, 0, 1), new w(L(330), function() {
		aRj(3)
	}, 0, 0, 1), new w(L(331), function() {
		aRj(0)
	}, 0, 0, 1), new w(L(332), function() {
		aRj(9)
	}, 0, 0, 1), new w(L(333), function() {
		aRj(10)
	}, 0, 0, 1), new w(L(334), function() {
		aRj(11)
	}, 0, 0, 1)], vI = [new w("⬅️ " + L(37), function() {
		t.a28()
	})], aOh = new vH(L(335), vI), aRh = new rR(aRi, aOh.vN)
}

function aDd(title, qg, aRk) {
	var aOh, aQs;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aQs.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aRk = aRk || [new w("⬅️ " + L(37), function() {
		t.a28()
	}, bB.og)], aOh = new vH(title, aRk), aQs = new sN(aOh.vN, qg), bA.qt.textAlign(aOh.vN.style, 1)
}

function aBj(data) {
	var aOh, aRl;

	function aRu(f5) {
		return f5 < 60 ? 1 === f5 ? f5 + " Second" : f5 + " Seconds" : f5 < 3600 ? 1 === (f5 = Math.floor(f5 / 60)) ? f5 + " Minute" : f5 + " Minutes" : f5 < 172800 ? 1 === (f5 = Math.floor(f5 / 3600)) ? f5 + " Hour" : f5 + " Hours" : (f5 = Math
			.floor(f5 / 172800)) + " Days"
	}

	function aRn(jf) {
		var f5 = data.data.length;
		if (f5) {
			for (var tU, max = min = parseInt(data.data[0][0]), aB = 1; aB < f5; aB++) var aFd = parseInt(data.data[aB][0]),
				min = Math.min(aFd, min),
				max = Math.max(aFd, max);
			tU = jf < 0 ? min + jf : max + 1, t.u(8, t.a5z().aOD, new tB(21, {
				tT: data.tT,
				tU: tU,
				tV: tU + Math.abs(jf)
			}))
		}
	}
	if (this.show = function() {
			aOh.show(), this.resize()
		}, this.sA = function() {
			aOh.sA()
		}, this.resize = function() {
			aOh.resize(), aRl.resize()
		}, this.a30 = function(ed) {
			2 === ed && aOh.vO[0].rA()
		}, data.aBk) {
		aOh = new vH(L(111), [new w("⬅️ " + L(37), function() {
			t.a28()
		})]);
		var f8 = {
				su: [],
				t0: [L(348), L(349), L(350) + " ↗"],
				t5: [12, 50, 38]
			},
			a5n = aD.data.a5n;
		if (a5n)
			for (var f5 = a5n.length, su = f8.su, a1X = ag.a1X, aB = 0; aB < f5; aB++) su.push([{
				fX: aB + 1 + ".",
				eU: 0
			}, {
				fX: a1X[aB],
				eU: 0
			}, {
				fX: bF.tD.a0B(a5n[aB], 5),
				eU: 1,
				t8: a5n[aB],
				t9: 0
			}]);
		aRl = new st(aOh.vN, f8)
	} else {
		var f8 = data.data.length ? 0 : 1,
			aRk = [new w("⬅️ " + L(37), function() {
				t.a28()
			}), new w(L(336), function() {
				aRn(-10)
			}, f8, 0, 1), new w(L(337), function() {
				aRn(10)
			}, f8, 0, 1), new w(L(283), function() {
				t.u(11, 10, new aRo({
					tT: data.tT
				}))
			})],
			t0 = [L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346), L(347), L(333), L(334), "Audit Log"];
		aOh = new vH(t0[data.tT], aRk), ! function() {
			var aB, f8 = {
					su: []
				},
				su = f8.su,
				aRq = data.data,
				f5 = aRq.length;
			f5 && 0 === aRq[0][0] && 0 <= (eC = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tT]) && (t.y.tW[eC] = aRq[0][1]);
			var nc = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tT],
				a4w = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tT],
				eC = [
					[L(351), L(352) + " ↗", L(353)],
					[L(351), L(354), L(355), L(356) + " ↗"],
					[L(351), L(352) + " ↗", L(355)],
					[L(351), L(352) + " ↗", L(355)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(115)],
					[L(348), L(357), L(360) + " ↗", L(361) + " ↗", L(362)],
					[L(348), L(357), L(363) + " ↗", L(364) + " ↗", L(365)],
					[L(348), L(357), L(360) + " ↗", L(361) + " ↗", L(366)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(115)],
					[L(351), L(352) + " ↗", L(355)],
					[L(351), L(352) + " ↗", L(367)],
					[L(351), L(352) + " ↗", L(355)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(368)]
				];
			if (f8.t0 = eC[data.tT], f8.t5 = [
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
				][data.tT], 0 === data.tT || 2 === data.tT || 3 === data.tT || 9 === data.tT || 10 === data.tT || 11 === data.tT)
				for (aB = 0; aB < f5; aB++) su.push([{
					fX: aRq[aB][0] + 1 + ".",
					eU: 0
				}, {
					fX: aRq[aB][1],
					eU: 1,
					t8: aRq[aB][4],
					t9: aRq[aB][3]
				}, {
					fX: (nc * aRq[aB][2]).toFixed(a4w),
					eU: 0
				}]);
			else if (12 === data.tT)
				for (aB = 0; aB < f5; aB++) {
					var aRt = aRq[aB][3];
					su.push([{
						fX: "" + aRq[aB][0],
						eU: 0
					}, {
						fX: aRu(aRq[aB][4]),
						eU: 0
					}, {
						fX: aRq[aB][5],
						eU: 1,
						t8: aRq[aB][1],
						t9: 0
					}, {
						fX: aRq[aB][6],
						eU: 1,
						t8: aRq[aB][2],
						t9: 0
					}, {
						fX: bo.eI(aRt, bF.tD.a0B(aRq[aB][1], 5)),
						eU: 0
					}])
				} else if (1 === data.tT)
					for (aB = 0; aB < f5; aB++) su.push([{
						fX: aRq[aB][0] + 1 + ".",
						eU: 0
					}, {
						fX: aRq[aB][1],
						eU: 0
					}, {
						fX: (nc * aRq[aB][2]).toFixed(a4w),
						eU: 0
					}, {
						fX: aRq[aB][3],
						eU: 1,
						t8: aRq[aB][5],
						t9: aRq[aB][4]
					}]);
				else if (4 === data.tT || 5 === data.tT || 6 === data.tT || 7 === data.tT || 8 === data.tT)
				for (aB = 0; aB < f5; aB++) {
					var aRv = aRq[aB][5];
					4 === data.tT || 8 === data.tT ? "100%" === (aRv = (aRv % 64 * 100 / (aRv >> 6)).toFixed(0) + "%") && (4 === data.tT ? aRv += " (" + L(369) + ")" : aRv += " (" + L(370) + ")") : 5 === data.tT ? 32768 <= aRv && (aRv = -(aRv -
						32768)) : aRv = (nc * aRv).toFixed(a4w), su.push([{
						fX: "" + aRq[aB][0],
						eU: 0
					}, {
						fX: aRu(aRq[aB][6]),
						eU: 0
					}, {
						fX: aRq[aB][7],
						eU: 1,
						t8: aRq[aB][1],
						t9: aRq[aB][2]
					}, {
						fX: aRq[aB][8],
						eU: 1,
						t8: aRq[aB][3],
						t9: aRq[aB][4]
					}, {
						fX: "" + aRv,
						eU: 0
					}])
				}
			aRl = new st(aOh.vN, f8)
		}()
	}
}

function aRo(a4m) {
	var aOh, aOi, qo;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aOi.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(371), [new w("⬅️ " + L(37), function() {
		t.aOf(10)
	})]), aOi = new qm(aOh.vN, ((qo = []).push(function() {
		var aP9, aP1 = new qW,
			aQc = new rh(bj.eQ.data[132], 1, function() {
				aP9.button.click()
			}),
			aQd = new rh(bj.eQ.data[131], 1, function() {
				aQc.e.focus()
			});
		aP1.qZ(L(288)), aP1.qk(aQd), aQd.e.style.marginBottom = "0.8em", aP1.qZ(L(289)), aP1.qk(aQc);
		return aP9 = new w(L(287), function() {
			tU = Math.floor(aQd.e.value), tV = Math.floor(aQc.e.value);
			var tV, tU = {
				a3U: Math.min(tU, tV),
				aNo: Math.max(tU, tV)
			};
			t.u(8, t.a60(10).aOD, new tB(21, {
				tT: a4m.tT,
				tU: tU.a3U,
				tV: tU.aNo
			}))
		}, 0, 0, 1), aP1.qk(new sO([aP9.button])), aP1
	}()), qo.push(function() {
		var aP9, aP1 = new qW,
			aQc = new rh(bj.eQ.data[134], 1, function() {
				aP9.button.click()
			}),
			aQd = new rh(bj.eQ.data[133], 0, function() {
				aQc.e.focus()
			});
		return aP1.qZ(1 === a4m.tT ? L(372) : L(373)), aP1.qk(aQd), aQd.e.style.marginBottom = "0.8em", aP1.qZ(L(374)), aP1.qk(aQc), aP9 = new w(L(287), function() {
			var aR1 = aQd.e.value.slice(0, 20),
				aR2 = Math.abs(Math.floor(aQc.e.value));
			t.u(8, t.a60(10).aOD, new tB(22, {
				tT: a4m.tT,
				aR1: aR1,
				aR2: aR2
			}))
		}, 0, 0, 1), aP1.qk(new sO([aP9.button])), aP1
	}()), qo.push(function() {
		var aP9, aP1 = new qW,
			aQc = new rh(bj.eQ.data[152], 1, function() {
				aP9.button.click()
			}),
			aQd = new rh(bj.eQ.data[151], 0, function() {
				aQc.e.focus()
			});
		return aP1.qZ(L(375)), aP1.qk(aQd), aQd.e.style.marginBottom = "0.8em", aP1.qZ(L(374)), aP1.qk(aQc), aP9 = new w(L(287), function() {
			var aR1 = aQd.e.value.slice(0, 5),
				aR2 = Math.abs(Math.floor(aQc.e.value));
			t.u(8, t.a60(10).aOD, new tB(28, {
				tT: a4m.tT,
				aR1: aR1,
				aR2: aR2
			}))
		}, 0, 0, 1), aP1.qk(new sO([aP9.button])), aP1
	}()), qo))
}

function aOc() {
	var aRz, tg, aS2, tf, ti, aS0 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aS1 = new Array(4),
		aS3 = new Array(2),
		aS4 = [L(61), L(332), L(376), L(377)];

	function aFP() {
		var aEi;
		!bn.a26 || (aEi = aRz.tu.rg.e.value.trim().slice(0, 127)).length < 1 || (aRz.tu.rg.e.value = "", bn.aDg.a0y(aEi))
	}

	function aS7(aS9) {
		bn.y.rx[3] = 1 - bn.y.rx[3], aS8(3, 1, bn.y.rx[3]), aS9 && b0.aFa.aFb(4), bn.y.rx[3] && bj.sL.sM(158, bn.y.rx[0])
	}

	function aS5(fO, fP) {
		bn.y.rx[fO] !== fP && (0 === fO && bn.y.rx[3] && aS7(0), aS8(fO, bn.y.rx[fO], 0), aS8(fO, fP, 1), bn.y.rx[fO] = fP, 0 === fO ? (b0.aFa.aFb(2, fP), bn.y.rx[2] ? (aRz.tv.mm(), aRz.tu.ru(1)) : aRz.tu.ru(0), t.a5z().aFE(), t.a5z().aFD()) : 2 ===
			fO && (0 === fP ? (b0.aFa.aFb(0), aRz.tu.mm(), aRz.u3()) : (b0.aFa.aFb(1), aRz.tv.mm(), aRz.u4())))
	}

	function aS8(fO, fP, color) {
		aRz.tx[fO].rS[fP].rD(color ? bB.oP : bB.pE)
	}

	function aSC(el, aM2) {
		return bS.aEZ(el) ? bS.xL.aN5[el] + "   Seed " + aM2 : bS.xL.aN5[el]
	}

	function aSD(aES) {
		return aES < 7 ? "   " + (aES + 2) + " Teams" : 10 === aES ? "   No Full-Sending" : ""
	}

	function aSE(aFG, aSL) {
		return aSL ? aFG <= 90 && 60 < aFG ? "   Contest" : "" : aFG <= 60 ? "   Contest" : ""
	}
	this.aFl = function() {
		return aRz.tu
	}, this.aDg = function(t8) {
		aS5(2, 0);
		var qa = aRz.tu.rg.e.value,
			t8 = "@" + t8 + " ";
		qa.length && !bA.rs.a4G(qa, " ") && (t8 = " " + t8), aRz.tu.rg.e.value = qa += t8, aRz.tu.rg.e.focus()
	}, this.aFC = function() {
		aRz.tv.mm()
	}, this.aFE = function() {
		var aSB = bn.y.rx[0],
			aSB = bn.y.rz[aSB],
			fP = (bS.a7(aSB.el, aSB.mapSeed), tg.rS),
			a7g = aSC(aSB.el, aSB.mapSeed) + aSD(aSB.aES) + aSE(aSB.aFG),
			aSB = "Next Game   " + aSC(aSB.aGC, aSB.aGD) + aSD(aSB.aGE) + aSE(aSB.aFG, 1);
		fP[0].button.textContent === a7g && fP[1].button.textContent === aSB || (fP[0].button.textContent = a7g, fP[1].button.textContent = aSB, tg.resize())
	}, this.aFD = function() {
		var aSB = bn.y.rx[0],
			ry = bn.y.rz[aSB];
		aRz.u1(ry.u2);
		for (var fX, a7t, aB = 0; aB < bn.uJ.uK.length; aB++) aS0[0][aB].rr.textContent = bn.uJ.uK[aB].length, aS0[1][aB].rr.textContent = (fX = bn.y.rz[aB].aFG, a7t = void 0, ((a7t = bL.fW(fX, 60)) < 10 ? "0" : "") + a7t + ":" + ((fX %= 60) <
			10 ? "0" : "") + fX);
		var ry = bn.uJ.uK[aSB],
			aSG = ry.length,
			aSH = bn.uJ.uL[aSB];
		aS0[2][1].rr.textContent = "" + aSG, aS0[3][1].rr.textContent = "" + aSH;
		for (aB = 0; aB < 4; aB++) {
			var aSI = bn.y.rz[aB];
			aS1[aB] ? 0 === aSI.u2 && (aS1[aB].rr.textContent = bS.xL.aN5[aSI.el]) : aS1[aB] = new rq(bS.xL.aN5[aSI.el], tf.rS[aB].button, 1, 1), bA.rs.startsWith(aS4[aB], "🏆 ") ? aSI.aEY || (aS4[aB] = aS4[aB].substring(3), tf.rS[aB].button
				.textContent = aS4[aB], tf.rS[aB].button.appendChild(aS0[1][aB].rr), tf.rS[aB].button.appendChild(aS0[0][aB].rr), tf.rS[aB].button.appendChild(aS1[aB].rr)) : aSI.aEY && (aS4[aB] = "🏆 " + aS4[aB], tf.rS[aB].button
				.textContent = aS4[aB], tf.rS[aB].button.appendChild(aS0[1][aB].rr), tf.rS[aB].button.appendChild(aS0[0][aB].rr), tf.rS[aB].button.appendChild(aS1[aB].rr))
		}
		var aSJ = "",
			aSK = "";
		0 === aSB && (aSJ = bn.lF.aEn(ry, 0, aSG), aSK = bn.lF.aEn(ry, 0, aSH)), aS2[0].rr.textContent = aSJ, aS2[1].rr.textContent = aSK, aS3[1].rr.textContent = "MP: " + bn.y.aF6[0] + "   SP: " + bn.y.aF6[1] + "   Lobby: " + bA.r1.a3h(bn.uJ.uK)
	}, this.aFI = function() {
		aRz.tu.mm()
	}, this.show = function() {
		aRz.show(), this.resize(), bn.message.show()
	}, this.sA = function() {
		aRz.sA(), bn.ug.sA(), bn.uG.sA(), bn.message.sA()
	}, this.resize = function() {
		aRz.resize(1 - bn.y.rx[2]), bn.message.resize()
	}, this.a30 = function(ed) {
		2 === ed ? bn.y.rx[3] ? aS7(1) : aRz.tx[3].rS[0].rA() : ed < 2 && aS7(1)
	}, tf = new sR([new w(aS4[0], function() {
		return aS5(0, 0), 2
	}), new w(aS4[1], function() {
		return aS5(0, 1), 2
	}), new w(aS4[2], function() {
		return aS5(0, 2), 2
	}), new w(aS4[3], function() {
		return aS5(0, 3), 2
	})], bB.pE), tg = new sR([new w("", 0, 2), new w("", 0, 2)], bB.pF, 1);
	var aS6 = new sR([new w(L(378), function() {
		return aS5(2, 0), 2
	}), new w(L(111), function() {
		return aS5(2, 1), 2
	})], bB.pE);
	ti = new sR([new w(L(25, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.ua(), b0.y.a2I(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.ua(), b0.y.a2I(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(379), function() {
		return aS7(1), 2
	})], bB.pE), aRz = new te(tf, tg, aS6, ti, aFP, bn.ug.aFv);
	for (var aB = 0; aB < 4; aB++) aS0[0][aB] = new rq("0", tf.rS[aB].button), aS0[1][aB] = new rq("0", tf.rS[aB].button, 1);
	aS0[2][1] = new rq("0", aS6.rS[1].button), aS0[3][1] = new rq("0", ti.rS[1].button), (aS2 = [new rq("", aS6.rS[1].button, 1, 1), new rq("", ti.rS[1].button, 1, 1)])[0].rr.style.bottom = "0em", aS2[1].rr.style.bottom = "0em", aS8(0, bn.y.rx[0],
		1), aS8(2, bn.y.rx[2], 1), (aS3 = [new rq(L(281), aRz.u5(), 1, 0), new rq("", aRz.u5(), 1, 1)])[0].rr.style.fontSize = "0.4em", aS3[1].rr.style.fontSize = "0.4em"
}

function aOJ() {
	var aOh, aOi, qo;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aOi.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(380), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a60(7).aOD)
	}), new w(L(200), function() {
		bj.sL.sM(105, bG.tD.x5(aOi.qq[0].qX[0].e.value, 5)), bj.sL.sM(106, bG.tD.x5(aOi.qq[1].qX[0].e.value, 15)), t.u(8, t.a60(7).aOD, new tB(18))
	})]), aOi = new qm(aOh.vN, ((qo = []).push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(178)), aP1.qk(new rh({
			value: "",
			eC: -1
		})), aP1
	}()), qo.push(function() {
		var aP1 = new qW,
			aPB = (aP1.qZ(L(180)), new rh({
				value: "",
				eC: -1
			}));
		return aPB.e.type = "password", aP1.qk(aPB), aP1.qk(new sO([new w(L(181), function(e) {
			return e.textContent === L(181) ? (e.textContent = L(182), aPB.e.type = "text") : (e.textContent = L(181), aPB.e.type = "password"), !0
		}).button])), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(184)), aP1.qb(L(381)), aP1.qb(L(382)), aP1.qb(L(383)), aP1
	}()), qo))
}

function aOQ() {
	var aOh, aRh, aRi, vI;

	function aRj(aB) {
		t.u(8, t.tA, new tB(21, {
			tT: aB,
			tU: 0,
			tV: 10
		}))
	}
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aRh.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aRi = [new w(L(343), function() {
		aRj(5)
	}, 0, 0, 1), new w(L(344), function() {
		aRj(6)
	}, 0, 0, 1), new w(L(345), function() {
		aRj(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aRj(12)
	}, 0, 0, 1)], vI = [new w("⬅️ " + L(37), function() {
		t.a28()
	})], aOh = new vH(L(384), vI), aRh = new rR(aRi, aOh.vN)
}

function aO9() {
	this.eQ = {}, this.tW = new Array(7), this.aOO = null, this.aOL = null, this.sr = 0, this.aJV = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5j = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aDG = function() {
		t.u(0 === aa.a29() ? 5 : 0)
	}, this.aQb = function() {
		if (1 === bj.eQ.data[130].value) t.u(8, t.a5z().aOD, new tB(24, {
			aQ7: bj.eQ.data[125].value,
			tU: bj.eQ.data[128].value,
			tV: bj.eQ.data[129].value
		}));
		else {
			for (var g = (g = bj.eQ.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5z().aOD, new tB(23, {
				aQ7: bj.eQ.data[125].value,
				a1d: g
			}))
		}
	}, this.aRa = function(aOD, target) {
		t.u(4, aOD, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aP2(
				"/privacy"), !1, [new w("⬅️ " + L(37), function() {
				t.u(aOD)
			}), new w("✅ Accept", function() {
				bj.sL.sM(140, 1), 0 === target ? t.u(2, aOD) : t.u(8, aOD, new tB(target))
			})]))
	}, this.aSO = function() {
		for (var aB = 0; aB < 7; aB++) this.tW[aB] = bG.ww.x0(bH.q1(5));
		this.tW[1] = "[" + this.tW[1] + "]", 5 === t.tA && (t.a5z().aHo.sM(this.tW), t.a5z().resize())
	}, this.aPA = function(fX, pN, a7V) {
		fX = bA.gR.a4j(fX, 1, 1e6);
		var aSP = Math.max(1, 1 + Math.floor(.01 * (fX - 100))),
			pN = L(385, [pN]);
		return (pN += "<br>") + L(386, [a7V]) + "<br>" + L(387, [aSP < 20 ? fX + aSP + "–" + (fX + 20) : fX + aSP]) + "<br>" + L(388, [fX])
	}
}

function aOT() {
	var aPe, aPf, aSQ, qo;

	function aPh() {
		b6.ua(), t.aOg()[19] = null, t.a28()
	}

	function aSX() {
		aSa(), aSY()
	}

	function aSa() {
		aSQ.qY.lastChild && t.removeChild(aSQ.qY, aSQ.qY.lastChild)
	}

	function aSY() {
		var aSb = bS.a5q(aD.data);
		aD.data.canvas = bS.aM7(aSb, aD.data.mapSeed).xV, aSZ()
	}

	function aSZ() {
		var a3m = aD.data.canvas;
		a3m.style.width = "100%", aSQ.qY.appendChild(a3m)
	}
	this.aJ5 = function(a3m) {
		aD.data.canvas && aSa(), aD.data.canvas = a3m, aSZ()
	}, this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(309), [new w("⬅️ " + L(37), aPh)]), 2 === aD.data.mapType && b6.dd(), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(389), L(390), L(391)],
			value: aD.data.mapType
		}, function(eC) {
			2 === (aD.data.mapType = eC) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.ua()), t.u(20)
		})), 2 <= aD.data.mapType && (aP1.qk(new sY), aP1.qk(new sI({
			value: aD.data.passableWater
		}, L(392), function(value) {
			aD.data.passableWater = value
		})), aP1.qk(new sI({
			value: aD.data.passableMountains
		}, L(393), function(value) {
			aD.data.passableMountains = value
		})));
		qo.push(aP1)
	}(qo = []), function(qo) {
		if (0 === aD.data.mapType) {
			for (var aP1 = new qW, vG = (aP1.qZ(L(309)), []), aB = 0; aB < bS.xL.aN3.length; aB++) vG.push(bS.xL.xM[bS.xL.aN3[aB]].name);
			aP1.qh(new vC({
				vG: vG,
				value: aD.data.mapProceduralIndex
			}, function(eC) {
				aD.data.mapProceduralIndex = eC, aSX()
			})), qo.push(aP1)
		}
	}(qo), function(qo) {
		if (1 === aD.data.mapType) {
			for (var aP1 = new qW, vG = (aP1.qZ(L(309)), []), aB = 0; aB < bS.xL.aN4.length; aB++) vG.push(bS.xL.xM[bS.xL.aN4[aB]].name);
			aP1.qh(new vC({
				vG: vG,
				value: aD.data.mapRealisticIndex
			}, function(eC) {
				aD.data.mapRealisticIndex = eC, aSX()
			})), qo.push(aP1)
		}
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.mapType && ((aP1 = new qW).qZ(L(394)), aP1.qk(new rh(bj.eQ.data[162], 1)), aP1.qZ(L(395), "0.8em"), aP1.qk(new sO([new w(L(396), function() {
			return b6.aIy(), !0
		}).button])), qo.push(aP1))
	}(qo), function(qo) {
		var aP1, rg;
		2 === aD.data.mapType && ((aP1 = new qW).qZ(L(397)), rg = new rh({
			eC: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aP1.qk(rg), qo.push(aP1))
	}(qo), function(qo) {
		var aP1, rg, aP9;
		0 === aD.data.mapType && ((aP1 = new qW).qZ("Seed"), rg = new rh({
			eC: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aSX())
		}), aP9 = new w(L(300), function(e) {
			var aM2 = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aM2) return rg.e.value = aD.data.mapSeed = aM2, aSX(), !0
		}), aP1.qk(rg), aP1.qk(new sO([aP9.button])), qo.push(aP1))
	}(qo), function(qo) {
		(aSQ = new qW).qZ(L(398)), 2 !== aD.data.mapType ? aSY() : aD.data.canvas && aSZ();
		qo.push(aSQ)
	}(qo), qo))
}

function v(title, qg, aSc, aRk) {
	var aOh, aQs;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aQs.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aRk = aRk || [new w("⬅️ " + L(37), function() {
		t.a28()
	})], aOh = new vH(title, aRk), aQs = new sN(aOh.vN, qg), aSc && bA.qt.textAlign(aOh.vN.style, 1)
}

function aOW() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 === aD.data.playerNamesType && 1 === bA.r1.a3Q(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.playerNamesType && bA.r1.a3e(aPg.vn(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(313), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(314), L(315), L(278)],
			value: aD.data.playerNamesType
		}, function(eC) {
			aPj(), aD.data.playerNamesType = eC, t.u(23)
		})), aP1.qk(new sY), aP1.qk(new sI({
			value: aD.data.selectableName
		}, L(399), function(value) {
			aD.data.selectableName = value
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1;
		2 === aD.data.playerNamesType && ((aP1 = new qW).qZ("Data"), aPg = new vf(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f2 || (aD.data.playerNamesData = new Array(aD.f2), aD.data.playerNamesData
			.fill("")), aPg.vm(bA.rs.a59(aD.data.playerNamesData, 1, '"')), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOe() {
	var aPe, aPf, qo;

	function aSi() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eQ.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fO = 0; fO < 3; fO++) fO < g.length && (colors[aB][fO] = Number(g[fO]))
		}
		return colors
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(400), [new w("⬅️ " + L(37), function() {
		t.a28()
	})]), aPf = new qm(aPe.vN, ((qo = []).push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(401)), aP1.qf(b0.y.aP2("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aP1.qf("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aP1
	}()), qo.push(function() {
		var aP1 = new qW,
			ef = (aP1.qZ(L(402)), bj.eQ.data[174].value),
			qc = aP1.qb(ef.length + " / 180"),
			aPM = (qc.style.textAlign = "center", new vf(0, 1, function(e) {
				var e = e.target.value,
					gY = e.length;
				qc.textContent = gY + " / 180", gY <= 180 && bj.sL.sM(174, e)
			}));
		return aPM.e.rows = 6, aPM.e.style.fontSize = "1em", aPM.vm(ef), aP1.qk(aPM), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		aP1.qZ(L(299));
		for (var aB = 0; aB < 11; aB++) {
			var iO = aP1.qk(new rh(bj.eQ.data[163 + aB]));
			aB && (iO.e.style.marginTop = "0.6em")
		}
		return aP1.qk(new sO([new w(L(403), function() {
			for (var data = bj.eQ.data, aB = 163; aB < 174; aB++) data[aB] && bj.eQ.w2(aB, data[aB].w5);
			t.a28(), t.aOg()[31] = null, t.u(31)
		}).button])), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		return aP1.qZ("Targeting"), aP1.qf(L(404)), aP1.qk(new rh(bj.eQ.data[175], 0, 0)), aP1
	}()), qo.push(function() {
		var aP1 = new qW;
		return aP1.qZ(L(398)), aP1.qk(new sO([new w(L(181), function() {
			(new ee).show(bj.eQ.data[174].value, aSi(), -1)
		}).button])), aP1
	}()), qo.push(function() {
		var aP1 = new qW,
			aSj = (aP1.qZ(L(405)), aP1.qf(L(406)), new rh(bj.eQ.data[176], 1, 0)),
			aSk = (aP1.qk(aSj), new w(L(407), function(e) {
				return aSl.button.textContent === L(177) && b0.y.eZ(0) && (bA.qt.v9(e), aP8(), b0.aG8.aSm(bj.eQ.data[176].value, aSi(), bj.eQ.data[175].value, bj.eQ.data[174].value)), !0
			}, 1)),
			aP8 = function() {
				aSl.button.textContent = L(176), aSk.rD(1), aSk.button.style.color = bB.o0
			},
			aSl = new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aSk.rD(0), aSk.button.style.color = bB.oz) : aP8(), !0
			});
		return aP1.qk(new sO([aSl.button, aSk.button])), aP1
	}()), qo))
}

function aOH() {
	var aPe, vk;

	function aSn() {
		t.x();
		var qa = b9.aSr(vk.vn());
		(aD.a0u && 0 < qa.length && qa === b9.qD.a5f || b9.aJf.xG(qa)) && b9.aSs()
	}
	this.show = function(aSo) {
		this.aSp(aSo), aPe.show(), this.resize()
	}, this.aSp = function(aSo) {
		0 === aD.a0u ? aSo ? vk.vm(aSo) : aD.a5T.length && vk.vm(aD.a5T) : (aD.hE || (b9.qD.a5f = b9.a5g.a0M()), vk.vm(b9.aSq(b9.qD.a5f)))
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), vk.resize()
	}, this.a30 = function(ed) {
		2 === ed ? aPe.vO[0].rA() : aSn()
	}, aPe = new vH(L(408), [new w("⬅️ " + L(37), function() {
		t.aOf(1)
	}), new w(L(409), function() {
		vk.vo()
	}), new w(L(410), function() {
		vk.vp()
	}), new w(L(411), function() {
		vk.clear()
	}), new w(L(412), function() {
		aSn()
	})]), vk = new vf(L(413)), aPe.vN.appendChild(vk.e)
}

function aOG() {
	var aOh, aOi, qo, aP1;

	function aSt() {
		b7.aD2 !== bj.eQ.data[12].value ? (b7.dd(), t.u(8, 1, new tB(30))) : t.u(1)
	}
	this.show = function() {
			aOh.show(), this.resize()
		}, this.sA = function() {
			aOh.sA()
		}, this.resize = function() {
			aOh.resize(), aOi.resize()
		}, this.a30 = function(ed) {
			2 === ed && aOh.vO[0].rA()
		}, aOh = new vH(L(414), [new w("⬅️ " + L(37), aSt), new w(L(415), function() {
			t.x(), bj.sL.wd(), t.u(2)
		})]), qo = [], (aP1 = new qW).qZ(L(416)), aP1.qb(L(417)), qo.push(aP1),
		function(qo) {
			var aP1 = new qW,
				g = (aP1.qZ(L(404)), b7.data.aDJ());
			aP1.qh(new vC({
				vG: g,
				value: b7.data.aDN(g)
			}, function(eC) {
				return bj.sL.sM(12, g[eC].split(":")[0]), !0
			})), qo.push(aP1)
		}(qo),
		function(qo) {
			var aP1 = new qW,
				aSw = (aP1.qZ(L(440)), []);
			aP1.qk(new sO([new w(L(403), function(e) {
				bX.aSx();
				for (var aB = 0; aB < aSw.length; aB++) aSw[aB].e.value = bX.aCb[aB];
				return bA.qt.v9(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aSy.length; aB++) {
				aP1.qb(bX.aSy[aB]);
				for (var fO = 0; fO < 2; fO++) {
					var eC = 2 * aB + fO,
						rg = new rh({
							value: bX.aCb[eC],
							eC: -1
						});
					rg.e.aSz = eC, aSw.push(rg), rg.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aT0(e.target.aSz, code)
					}), fO && (rg.e.style.marginLeft = "4%"), rg.e.style.width = "48%", aP1.qk(rg)
				}
			}
			qo.push(aP1)
		}(qo), (aP1 = new qW).qZ(L(23)), aP1.qh(new vC({
			vG: ["1", "2"],
			value: aZ.aGz - 1
		}, function(aB) {
			aZ.aGz = aB + 1
		})), qo.push(aP1), (aP1 = new qW).qZ(L(418)), bj.eQ.data[1].vG = [L(419), L(420), L(421), L(422)], aP1.qh(new vC(bj.eQ.data[1])), qo.push(aP1), (aP1 = new qW).qZ(L(423)), bj.eQ.data[9].vG = [L(420), L(424), L(425)], aP1.qh(new vC(bj.eQ.data[
			9])), qo.push(aP1), (aP1 = new qW).qZ(L(426)), bj.eQ.data[11].vG = [L(427), L(9), L(428)], aP1.qh(new vC(bj.eQ.data[11])), qo.push(aP1), (aP1 = new qW).qZ(L(429)), aP1.qk(new sI(bj.eQ.data[2])), qo.push(aP1), (aP1 = new qW).qZ(L(430)),
		aP1.qk(new sI(bj.eQ.data[7])), qo.push(aP1), (aP1 = new qW).qZ(L(431)), aP1.qk(new sI(bj.eQ.data[8])), qo.push(aP1), (aP1 = new qW).qZ(L(432)), aP1.qk(new rh(bj.eQ.data[5])), qo.push(aP1), (aP1 = new qW).qZ(L(433)), aP1.qk(new sI(bj.eQ.data[
			13], L(434))), aP1.qk(new sI(bj.eQ.data[14], L(435))), qo.push(aP1), (aP1 = new qW).qZ(L(436)), aP1.qh(new vC({
			vG: [L(437), L(438), L(439)],
			value: aZ.aH0
		}, function(aB) {
			aZ.aH0 = aB
		})), qo.push(aP1), aOi = new qm(aOh.vN, qo)
}

function aOX() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 !== aD.data.spawningType || bA.r1.a3Q(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.spawningType && bA.r1.a3c(aPg.vn(), aD.data.spawningData, bS.aJ8 - 1)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(441), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW,
			vG = (aP1.qZ(L(275)), [L(300), L(312), L(278)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (vG.splice(1, 1), 0 < value) && (value = 1);
		aP1.qh(new vC({
			vG: vG,
			value: value
		}, function(eC) {
			aPj(), aD.data.spawningType = eC, 0 === aD.data.gameMode && 1 === eC && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f2)), t.u(24)
		})), aP1.qk(new sY), aP1.qk(new sI({
			value: aD.data.selectableSpawn
		}, L(442), function(value) {
			aD.data.selectableSpawn = value
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1 = new qW;
		aP1.qZ("Seed"), aP1.qk(new rh({
			eC: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qo.push(aP1)
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.spawningType && ((aP1 = new qW).qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.spawningData, 2)), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOF() {
	var aOh, aRh, aRi, vI;

	function aT1(id) {
		0 !== a0.id || bj.eQ.data[140].value ? 0 === id ? t.u(8, 1, new tB(16)) : t.u(2) : t.y.aRa(t.tA, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aOh.show(), this.resize(), this.eY()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aRh.resize()
	}, this.eY = function() {
		8 === aa.a29() && (2 <= bd.aT6 ? aRi[2].rB === bB.oC && aRi[2].rD(0) : aRi[2].rB !== bB.oC && aRi[2].rD(bB.oC), !aD.hE && aM.qU(aD.ep) ? aRi[1].rB === bB.oC && aRi[1].rD(0) : aRi[1].rB !== bB.oC && aRi[1].rD(bB.oC), !aD.hE && aw.hu(aD
			.ep) ? aRi[0].rB === bB.oC && aRi[0].rD(0) : aRi[0].rB !== bB.oC && aRi[0].rD(bB.oC))
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aRi = [new w(L(443), function() {
		aT1(0)
	}), new w(L(335), function() {
		t.u(16)
	}), new w(L(384), function() {
		t.u(17)
	}), new w(L(444), function() {
		t.y.aQb()
	}, 0, 0, 1), new w(L(408), function() {
		t.u(3, 1)
	}), new w(L(445), function() {
		t.u(18)
	}), new w(L(400), function() {
		t.u(31)
	}), new w(L(414), function() {
		aT1(1)
	}), new w(L(446), function() {
		var t0 = ["Patreon", L(455), L(456), "YouTube Tutorial", "Discord", L(457), L(328), L(458), L(331), L(459), "Terms", "Privacy"],
			a4C = [bK.aPc, bK.aDa, bK.a22, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDb, bK.aT7, bK.aT8, bK.aT9, bK.aTA, bK.aTB, bK.aTC, bK.aTD];
		if (b0.y.aTE(0))
			for (var aB = 0; aB < a4C.length; aB++) a4C[aB] = a4C[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (t0.splice(2, 1), t0.splice(0, 1), a4C.splice(2, 1), a4C.splice(0, 1)) : 2 === a0.id && (t0.splice(1, 1), t0.splice(0, 1), a4C.splice(1, 1), a4C.splice(0, 1)), t.u(4, 1, new v(L(446), bA.qt.a4B(t0, a4C), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(447), function() {
		t.u(4, 1, new v(L(447), l.dw + "<br>" + b0.y.aP2("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(37),
				function() {
					t.u(1)
				})]))
	}), new w(L(448), function() {
		t.u(4, 1, new v(L(448), L(460) + "<br>" + L(461), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(462), function() {
			a0.a1.a1w(), t.u(1)
		})]))
	}), new w(L(449), function() {
		a0.a1.a1x(), t.u(4, 1, new v(L(463), L(464) + " " + b0.y.aP2("/privacy"), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], vI = [new w("⬅️ " + L(37), function() {
		t.y.aDG()
	})], 8 === aa.a29() && (aRi.unshift(new w(L(323), function() {
		t.u(30)
	})), aRi.unshift(new w(L(452), function() {
		2 <= bd.aT6 && (t.x(), be.a33(), bf.dk = !0)
	}, 0, 1)), aRi.unshift(new w(L(453), function() {
		!aD.hE && aM.qU(aD.ep) && (b8.hV.ph(), t.x(), aM.hF) && aM.a33()
	}, 0, 1)), aRi.unshift(new w(L(454), function() {
		!aD.hE && aw.hu(aD.ep) && (bV.a6M(2), b8.hV.hq(), t.x(), aM.hF) && aM.a33()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aRi.push(new w(L(450), function() {
		a0.a1.a1y()
	})), aOh = new vH(L(451), vI), aRh = new rR(aRi, aOh.vN)
}

function aOb() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.sResourcesType && bA.r1.a3c(aPg.vn(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(318), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(276), L(277), L(278)],
			value: aD.data.sResourcesType
		}, function(eC) {
			aPj(), 2 !== eC || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f2)), aD.data.sResourcesType = eC, t.u(28)
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1;
		1 === aD.data.sResourcesType && ((aP1 = new qW).qZ("Value"), aP1.qk(new rh({
			eC: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qo.push(aP1))
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.sResourcesType && ((aP1 = new qW).qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.sResourcesData, 2)), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOZ() {
	var aPe, aPf, aPg, qo;

	function aPh() {
		aPj(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aOg()[19] = null, t.a28()
	}

	function aPj() {
		2 === aD.data.tIncomeType && bA.r1.a3c(aPg.vn(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aPe.show(), this.resize()
	}, this.sA = function() {
		aPe.sA()
	}, this.resize = function() {
		aPe.resize(), aPf.resize()
	}, this.a30 = function(ed) {
		2 === ed && aPe.vO[0].rA()
	}, aPe = new vH(L(316), [new w("⬅️ " + L(37), aPh)]), aPf = new qm(aPe.vN, (function(qo) {
		var aP1 = new qW;
		aP1.qZ(L(275)), aP1.qh(new vC({
			vG: [L(276), L(277), L(278)],
			value: aD.data.tIncomeType
		}, function(eC) {
			aPj(), 2 !== eC || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f2), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eC, t.u(26)
		})), qo.push(aP1)
	}(qo = []), function(qo) {
		var aP1;
		1 === aD.data.tIncomeType && ((aP1 = new qW).qZ("Value"), aP1.qk(new rh({
			eC: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qo.push(aP1))
	}(qo), function(qo) {
		var aP1;
		2 === aD.data.tIncomeType && ((aP1 = new qW).qZ("Data"), (aPg = new vf(0, 1, 0, 1)).vm(bA.rs.a59(aD.data.tIncomeData, 4)), aP1.qk(aPg), qo.push(aP1))
	}(qo), qo))
}

function aOR() {
	var aOh, aOi, qo;
	this.show = function() {
		aOh.show(), this.resize()
	}, this.sA = function() {
		aOh.sA()
	}, this.resize = function() {
		aOh.resize(), aOi.resize()
	}, this.a30 = function(ed) {
		2 === ed && aOh.vO[0].rA()
	}, aOh = new vH(L(445), [new w("⬅️ " + L(37), function() {
		t.a28()
	})]), aOi = new qm(aOh.vN, ((qo = []).push(function() {
		function aP8() {
			aSl.button.textContent = L(176), aTH.e.readOnly = !1, aTI.e.readOnly = !1, aP7.rD(1), aP7.button.style.color = bB.o0
		}
		var aP1 = new qW,
			aTG = (aP1.qf(b0.y.aP2("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aP1.qZ(L(465)), new rh({
				value: bj.eQ.data[105].value,
				eC: -1
			})),
			aTH = (aTG.e.readOnly = !0, aP1.qk(aTG), aP1.qZ(L(361), "0.8em"), new rh(bj.eQ.data[148], 0, void 0, function(e) {
				aP6(bj.eQ.data[149].value, e.target.value)
			})),
			aTI = (aP1.qk(aTH), aP1.qZ(L(365), "0.8em"), new rh(bj.eQ.data[149], 1, void 0, function(e) {
				aP6(e.target.value, bj.eQ.data[148].value)
			})),
			aSl = (aP1.qk(aTI), new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aTH.e.readOnly = !0, aTI.e.readOnly = !0, aP7.rD(0), aP7.button.style.color = bB.oz, bj.sL.sM(149, aTI.e.value), aP6(bj.eQ.data[149].value, bj.eQ.data[
					148].value)) : aP8(), !0
			})),
			aP7 = (aP1.qk(new sO([aSl.button])), new w(L(14), function(e) {
				return aTH.e.readOnly && b0.y.eZ(0) && (bA.qt.v9(e), aP8(), b0.aG8.aG9({
					tC: 0,
					t8: bj.eQ.data[148].value,
					value: parseInt(bj.eQ.data[149].value, 10)
				})), !0
			}, 1)),
			qc = aP1.qb(),
			aP6 = (aP1.qb(L(466)).style.fontWeight = "bold", function(fX, qa) {
				qc.innerHTML = t.y.aPA(fX, bj.eQ.data[105].value, qa)
			});
		return aP1.qk(new sO([aP7.button])), aP6(bj.eQ.data[149].value, bj.eQ.data[148].value), aP1
	}()), qo))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(fC) {
		return Math.log(fC) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fC) {
		return Math.log(fC) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fC) {
		return 0 < fC ? 1 : fC < 0 ? -1 : 0
	})
}

function ci() {
	var aAG, aTK, aTL, aTM, aTJ = !1;

	function aTN() {
		aTJ = !0, aAG = -1, aTK = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aTK[aB] = !1;
		var yL = Math.floor(1 + .02 * h.min);
		aTL = new Array(4), (aTM = new Array(4))[1] = aTM[3] = aTL[0] = aTL[2] = 0, aTM[0] = aTL[3] = -yL, aTL[1] = aTM[2] = yL
	}

	function aTO() {
		if (-1 !== aAG)
			if (0 !== aD.a0u && aH.ni()) {
				for (var aTP = !1, aB = 3; 0 <= aB; aB--) aTK[aB] && (aTP = !0, ii += aTL[aB], ij += aTM[aB], af.a2S(aTL[aB], aTM[aB]), aS.a9w());
				aTP ? bf.dk = !0 : ar.nY()
			} else ar.nY()
	}
	this.a2y = function(eC) {
		0 !== aD.a0u && aH.ni() && (aTJ || aTN(), aTK[eC] = !0, -1 === aAG) && (aAG = setInterval(aTO, 20), aTO())
	}, this.a31 = function(eC) {
		if (0 !== aD.a0u && (aTJ || aTN(), aTK[eC] = !1, -1 !== aAG)) {
			for (var aTP = !1, aB = 3; 0 <= aB; aB--) aTP = aTP || aTK[aB];
			aTP || this.nY()
		}
	}, this.nY = function() {
		if (aTJ && -1 !== aAG) {
			for (var aB = 3; 0 <= aB; aB--) aTK[aB] = !1;
			clearInterval(aAG), aAG = -1
		}
	}
}

function cj() {
	this.y = new aTQ, this.mh = new aTR, this.pN = new aTS, this.aFa = new aTT, this.ea = new aTU, this.aG8 = new aTV, this.q0 = new aTW, this.aQy = new aTX, this.a7V = new aTY, this.aTZ = new aTa, this.aTb = new aTc, this.aTd = new aTe, this.aTf =
		new aTg, this.dd = function() {
			this.y.dd()
		}
}

function aTQ() {
	var aTi, aTj;
	this.aH4 = 5, this.aTh = null, this.a2E = 0, this.a27 = 0;

	function aTr() {
		return 0 === aZ.aH0 ? l.dy ? 1 : 0 : aZ.aH0 - 1
	}

	function aTu(a24, aOD, aTt) {
		aTj[a24].aTJ = !0, aTo(a24), aTi[a24] = new aTx, aTi[a24].dd(a24, aOD, aTt)
	}

	function aTv(aB) {
		return aTj[aB].aTJ && aTi[aB].aTv()
	}

	function aTo(a24) {
		aTj[a24].eT = bf.eT, aTj[a24].aTl = !1
	}
	this.dd = function() {
		this.aTh = new Array(this.aH4);
		this.aTh[0] = "territorial.io";
		var aM2 = ay.aMO(0);
		ay.a5W(0);
		for (var aB = 1; aB < this.aH4; aB++) this.aTh[aB] = aK.a0S() + ".territorial.io";
		for (ay.a5W(aM2), aTi = new Array(this.aH4), aTj = new Array(this.aH4), aB = this.aH4 - 1; 0 <= aB; aB--) aTj[aB] = {
			aTJ: !1,
			eT: 0,
			aTl: !1
		};
		this.aH5(0, 0, 0)
	}, this.aTm = function(aB) {
		return aTi[aB]
	}, this.eY = function() {
		for (var aB = this.aH4 - 1; 0 <= aB; aB--) this.eZ(aB) && bf.eT > aTj[aB].eT + 15e3 && (b0.pN.aTn(aB, aTj[aB].aTl), aTo(aB));
		!this.eZ(0) && bf.eT > aTj[0].eT + 8e3 && (aTj[0].eT = bf.eT, this.aH5(0, 0, 0))
	}, this.aQv = function(id) {
		return this.aH5(0, id, 0) && this.aTp(0)
	}, this.aTE = function(aTq) {
		return aTq ? aZ.aH1 : aTr()
	}, this.a1L = function() {
		return aTr() ? "game.territorial.io" : "territorial.io"
	}, this.aP2 = function(aTs) {
		aTs = this.a1L() + aTs;
		return "<a href='https://" + aTs + "' target='_blank'>" + aTs + "</a>"
	}, this.aH5 = function(a24, aOD, aTq) {
		aTq = this.aTE(aTq);
		if (aTj[a24].aTJ) {
			if (aTi[a24].aTv()) return aTi[a24].aTw(aOD), aTi[a24].eZ();
			aTi[a24].sA()
		}
		return aTu(a24, aOD, aTq), !1
	}, this.aTy = function(a24, aOD) {
		b0.ea.aTz(a24)
	}, this.aTp = function(aB) {
		return this.eZ(aB) && aTi[aB].aTp()
	}, this.aU0 = function(aB) {
		aTi[aB].aU0()
	}, this.eZ = function(aB) {
		return aTj[aB].aTJ && aTi[aB].eZ()
	}, this.send = function(a24, aC) {
		0 !== a24 && aTo(a24), aTi[a24].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a2j = function(a24) {
		8 === aa.a29() && (aTj[a24].aTl = !0, b0.mh.aU1 = !0)
	}, this.close = function(a24, aU2) {
		aTv(a24) && aTi[a24].close(aU2)
	}, this.aU3 = function(a24, aU2) {
		o.a2H(aU2), aTv(a24) && aTi[a24].close(aU2)
	}, this.a2I = function(aU2) {
		for (var aB = this.aH4 - 1; 0 <= aB; aB--) this.close(aB, aU2)
	}, this.aU4 = function(a24, aU2) {
		for (var aB = this.aH4 - 1; 0 <= aB; aB--) aB !== a24 && this.close(aB, aU2)
	}, this.a5h = function() {
		0 === this.a2E && (aD.kk || aD.hE) || this.close(this.a2E, 3246)
	}, this.aU5 = function(a24, e) {
		aTi[a24].sA(), o.a23(a24, e.code)
	}
}

function aTR() {
	this.aU1 = !1, this.eY = function() {
		bf.kN() % 250 != 249 || aD.hE || (b0.ea.aU6(+(this.aU1 && ag.mz[aD.ep]), al.kw + bN.y.mG), this.aU1 = !1)
	}
}

function aTY() {
	this.aU8 = function(a24, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aU3(a24, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.q1(1) ? function(a24) {
			var aUC = bH.q1(6);
			0 === aUC ? function(a24) {
					if (0 === a24 && 8 !== aa.a29()) {
						t.y.aSO();
						for (var aUR = bH.q1(12), aUS = bH.q1(6), g = new Array(aUR), aB = 0; aB < aUR; aB++) g[aB] = bH.q1(aUS);
						aT.aAM(g)
					}
				}(a24) : 2 === aUC ? b0.aTZ.aUE(a24) : 3 === aUC || 4 === aUC ? ax.dd() : 5 === aUC ? b0.aTb.aUF() : 9 === aUC ? b0.aTb.aUG(a24) : 10 === aUC ? b0.aTd.aUH() : 11 === aUC ? b0.aTb.aUI(a24) : 12 === aUC ? b0.aTd.aUJ() :
				13 === aUC ? b0.aTf.aUK() : 14 === aUC ? b0.aTf.aUL() : 15 === aUC ? b0.aTb.aUM() : 16 === aUC ? b0.aTZ.aUN(a24) : 17 === aUC ? b0.aTZ.aUO(a24) : 19 === aUC ? b0.aTZ.aUP(a24) : 20 === aUC && b0.aTb.aUQ(a24)
		} : function(a24) {
			if (8 !== aa.a29() && !ax.aHZ()) return;
			if (a24 !== b0.y.a2E) b0.y.aU3(a24, 3244);
			else if (0 === bH.q1(1)) bf.a14.aUT(bH.aC);
			else {
				var aB, a24 = bH.q1(2);
				if (0 === a24) {
					var pc, pN = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[aD.ep] && (pc = bH.q1(10), aN.pb(pN, aD.ep, pc), af.qS(pN, 1, pc))
				} else if (1 === a24) ! function() {
					var pN = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[aD.ep] && b5.aLd(0, [pN], !0) && aN.pt(pN, 1)
				}();
				else if (2 === a24) ! function() {
					var pN = bH.q1(9),
						target = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[target] && 0 !== ag.mz[aD.ep] && b5.aLd(1, [pN], !0) && (af.qS(pN, 3, 96), af.qS(target, 4, 96), aN.a7c(pN, target))
				}();
				else if (l.a9 && !l.aA) {
					var f5 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f5 = Math.min(b8.pK.q3.length, 540), aB = 0; aB < f5; aB++) bD.aUZ(32, b8.pK.q3[aB]);
					b0.y.send(b0.y.a2E, bD.aC)
				}
			}
		})(a24), bf.aUB())
	}
}

function aTe() {
	this.aUH = function() {
		bj.y.wT(), bj.sL.sM(105, bF.tD.tE(bF.tD.tF(5))), bj.sL.sM(106, bF.tD.tE(bF.tD.tF(15))), bj.sL.sM(109, 0), bj.sL.sM(108, bj.eQ.data[109].value), bj.sL.sM(111, bj.eQ.data[109].value + 1), bj.sL.sM(107, 0), bj.sL.sM(110, "")
	}, this.aUJ = function() {
		var data;
		bH.size < bD.aUa(29) ? b0.y.aU3(0, 3254) : ((data = {
			t9: bH.q1(30),
			wh: bH.q1(16),
			wi: bH.q1(30),
			wj: bH.q1(30),
			wk: bH.q1(30),
			wl: bH.aUb(32),
			username: bG.wy.xG(5),
			wm: bG.wy.xG(3),
			wn: bG.wy.xG(3),
			wo: bH.aUb(32),
			wp: bH.aUb(32),
			wq: bH.q1(30),
			wr: bH.aUb(32),
			ws: bH.aUb(32),
			wt: bH.aUb(32),
			wu: bH.aUb(32),
			aPF: bH.aUb(32),
			aPG: bH.aUb(30),
			aPU: bH.aUb(32),
			aPV: bG.wy.xG(3),
			aPN: bH.aUb(2),
			aPP: bH.aUb(10),
			aPL: bG.wy.xG(8),
			aPO: bH.aUb(5),
			aP4: bH.q1(30),
			aPE: bH.q1(30),
			a1O: bH.aUb(32),
			aPJ: bH.q1(3),
			aPI: bH.q1(8),
			aPW: bH.q1(1),
			aPX: bH.q1(1)
		}).aPW && (data.aPY = bH.aUb(32), data.aPZ = bH.q1(30), data.aPa = bH.q1(30), data.aPb = bH.q1(1)), 8 === t.tA && (25 === t.a5z().aQu ? (data.aOj = !0, t.y.aOO = data, t.a5z().aDF(25, !1)) : (data.aOj = !1, bj.sL.sM(160, +(data
			.aPW && data.aPb)), data.t8 = bj.eQ.data[105].value, t.y.aOL = data, bj.sL.wg(data), t.a5z().aDF(16, !0))))
	}
}

function aTg() {
	this.aUK = function() {
		var aB;
		if (bH.size < bD.aUa(23)) b0.y.aU3(0, 3259);
		else {
			var tT = bH.q1(6),
				f5 = bH.q1(10),
				data = [];
			if (9 === tT || 10 === tT || 11 === tT) {
				for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.wy.xG(5), bH.aUb(32), 0, bH.q1(30)]);
				8 === t.tA && t.a5z().aDF(21, !0, {
					tT: tT,
					data: data
				})
			} else if (12 === tT) {
				for (aB = 0; aB < f5; aB++) data.push([bH.q1(20), bH.q1(30), bH.q1(30), bH.aUb(32), bH.q1(30), bG.wy.xG(5), bG.wy.xG(5)]);
				8 === t.tA && t.a5z().aDF(21, !0, {
					tT: tT,
					data: data
				})
			} else {
				var i2 = bH.q1(16);
				if (bH.aUc(39 + 16 * i2 + f5 * (0 === tT ? 111 : 1 === tT ? 101 : 2 === tT || 3 === tT ? 127 : 212))) {
					if (0 === tT)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.ww.x0(bH.q1(5)), bH.q1(16), bH.q1(30), bH.q1(30)]);
					else if (1 === tT)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(16), bG.ww.x0(bH.q1(3)), bH.q1(16), bG.ww.x0(bH.q1(5)), bH.q1(31), bH.q1(30)]);
					else if (2 === tT || 3 === tT)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.ww.x0(bH.q1(5)), bH.aUb(32), bH.q1(30), bH.q1(30)]);
					else
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(20), bH.q1(30), bH.q1(30), bH.q1(30), bH.q1(30), bH.aUb(32), bH.q1(30), bG.ww.x0(bH.q1(5)), bG.ww.x0(bH.q1(5))]);
					8 === t.tA && t.a5z().aDF(21, !0, {
						tT: tT,
						data: data
					})
				} else b0.y.aU3(0, 3260)
			}
		}
	}, this.aUL = function() {
		if (bH.size < bD.aUa(29)) b0.y.aU3(0, 3265);
		else {
			var aUd = bH.q1(4),
				aUe = bH.q1(7),
				aUf = bH.q1(11);
			if (bH.aUc(29 + 16 * aUe + 16 * aUf + 11 * aUd)) {
				for (var data = [], aB = 0; aB < aUd; aB++) {
					for (var a1e = bG.ww.x0(bH.q1(3)), aUg = bH.q1(8), aQ8 = [], fO = 0; fO < aUg; fO++) aQ8.push(bH.q1(16));
					data.push({
						name: "[" + a1e + "]",
						aQ8: aQ8
					})
				}
				8 === t.tA && t.a5z().aDF(23, !0, data)
			} else b0.y.aU3(0, 3266)
		}
	}
}

function aTa() {
	function aUi() {
		var id = bH.q1(3);
		return 0 === id ? {
			id: id,
			t8: bH.q1(30),
			r: bn.aDg.aFf(bG.wy.xG(7))
		} : 1 === id ? {
			id: id,
			t8: bH.q1(30),
			aEh: bH.q1(3),
			value: bH.q1(30),
			target: bH.q1(30)
		} : 2 === id ? {
			id: id,
			t8: bH.q1(30),
			aEh: bH.q1(3)
		} : 3 === id ? {
			id: id,
			t8: bH.q1(30),
			aEh: bH.q1(3),
			value: bH.q1(4),
			target: bH.q1(30)
		} : 4 === id ? {
			id: id,
			t8: bH.q1(30),
			aEh: bH.q1(3),
			target: bH.q1(30)
		} : 5 === id ? {
			id: id,
			aEh: bH.q1(6)
		} : 6 === id ? {
			id: id,
			value: bH.q1(17)
		} : null
	}
	this.aUE = function(a24) {
		if (a24 !== b0.y.a27) b0.y.close(a24, 3239);
		else if (6 !== aa.a29()) b0.y.close(a24, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var ry = bn.y.rz[aB],
					playerCount = (ry.u2 = bH.q1(10), ry.el = bH.q1(6), ry.mapSeed = bH.q1(14), ry.aES = bH.q1(4), ry.aGC = bH.q1(6), ry.aGD = bH.q1(14), ry.aGE = bH.q1(4), ry.aEY = bH.q1(1), ry.aFG = bH.q1(12), ry.spawningSeed = bH.q1(14), bH
						.q1(16));
				bn.uJ.uL[aB] = bH.q1(16);
				for (var fO = 0; fO < playerCount; fO++) bn.uJ.aDu(aB, bH.q1(30), bG.wy.xG(5), bH.q1(4), bH.q1(30), bH.q1(7), bH.q1(16), bH.q1(18), bH.q1(11), bH.q1(12))
			}
			t.u(29), bn.y.aF8(!0)
		}
	}, this.aUN = function(a24) {
		if (a24 !== b0.y.a27) b0.y.close(a24, 3239);
		else if (bn.a26) {
			bn.y.aF6[0] = bH.q1(20), bn.y.aF6[1] = bH.q1(20);
			for (var aUh = bH.q1(16), fO = 0; fO < aUh; fO++) {
				var id = bH.q1(3);
				0 === id ? bn.uJ.aDu(bH.q1(2), bH.q1(30), bG.wy.xG(5), 0, 1234566, 127, 0, bH.q1(18), 0, bH.q1(12)) : 1 === id ? bn.uJ.aED(bH.q1(16), bH.q1(2)) : 2 === id ? bn.uJ.aE9(bH.q1(16), bH.q1(2), bH.q1(2)) : 3 === id ? bn.uJ.aEC(bH.q1(
					16), bH.q1(2)) : 4 === id ? bn.uJ.aE2(bH.q1(16), bH.q1(2), bH.q1(4), bH.q1(30), bH.q1(7), bH.q1(16), bH.q1(11), bH.q1(18)) : 5 === id && bn.uJ.aE3(bH.q1(16), bH.q1(2), bH.q1(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var ry = bn.y.rz[aB];
				if (ry.u2 = bH.q1(10), ry.aGC = bH.q1(6), ry.aGD = bH.q1(14), ry.aGE = bH.q1(4), 0 === ry.u2) {
					if (ry.a2E = bH.q1(10), ry.aEW = bH.q1(10), bn.aDi.dl(aB)) return;
					ry.el = bH.q1(6), ry.mapSeed = bH.q1(14), ry.aES = bH.q1(4), ry.aEY = bH.q1(1), ry.aFG = bH.q1(12), ry.spawningSeed = bH.q1(14), ry.aGF.push(ry.aGF[0]), ry.aGF.shift()
				}
			}
			bn.y.aEO()
		} else b0.y.close(a24, 3251)
	}, this.aUO = function(a24) {
		if (a24 !== b0.y.a27) b0.y.close(a24, 3272);
		else if (bn.a26) {
			for (var rw = bH.q1(4), ry = bn.y.rz[rw], s0 = ry.s0, uZ = (ry.s1 = bH.q1(20), bH.q1(6)), aB = 0; aB < uZ; aB++) {
				var aGW = aUi();
				bn.s9.aGV(aGW), s0.push(aGW)
			}
			bn.y.aFH(rw)
		} else b0.y.close(a24, 3273)
	}, this.aUP = function(a24) {
		a24 !== b0.y.a27 ? b0.y.close(a24, 3276) : bn.a26 ? bn.message.aEM(aUi()) : b0.y.close(a24, 3277)
	}
}

function aTc() {
	this.aUF = function() {
		for (var id = bH.q1(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.q1(8), bH.q1(8), bH.q1(8)]);
		var ef = bG.wy.xG(8);
		bU.eM.ec({
			id: id,
			colors: colors,
			ef: ef
		})
	}, this.aUQ = function(a24) {
		var f8 = bH.q1(5),
			f8 = bi.aUj.aUk(f8, bH.q1(30), bH.q1(30), bH.q1(30));
		b0.ea.aUl(a24, f8)
	}, this.aUG = function(a24) {
		var aUV, rP, aUm;
		bH.aUc(165) ? (aUV = bH.q1(3), rP = bi.aUj.eY(bH.q1(30), bH.q1(30)), aUm = bi.aUj.aUk(bH.q1(5), bH.q1(30), bH.q1(30), bH.q1(30)), b0.ea.aUn(a24, rP, aUm, aUV), 0 < aUV || (0 === a24 && 0 === bj.eQ.data[105].value.length ? b0.ea.eb(0) : b0
			.aG8.aUo(a24), 4 === b0.y.aTm(a24).aUp() ? 6 === aa.a29() && b0.aFa.aH6(a24) : 5 !== b0.y.aTm(a24).aUp() || 8 !== aa.a29() && 10 !== aa.a29() || b0.pN.aHV())) : b0.y.aU3(a24, 3269)
	}, this.aUI = function(a24) {
		var id = bH.q1(6);
		1 === id ? (bj.sL.sM(160, bH.q1(30)), b0.y.aU0(a24), aT.aAI || b0.ea.eb(1), b7.aDB(), 8 === t.tA && t.a5z().aR8()) : 21 === id ? 8 === t.tA && t.a5z().aDF(17) : 22 === id && (bj.sL.sM(106, bj.eQ.data[110].value), bj.sL.sM(110, ""), 8 ===
			t.tA) && t.a5z().aDF(15)
	}, this.aUM = function() {
		var f5 = bH.q1(16),
			aUq = bH.q1(16);
		if (bH.aUc(55 + 10 * f5 + 16 * aUq)) {
			for (var g = [], aB = 0; aB < f5; aB++) g.push(bG.ww.x0(bH.q1(10)));
			b7.aDE(g)
		} else b0.y.aU3(0, 3270)
	}
}

function aTS() {
	this.aTn = function(a24, aTl) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aTl ? 1 : 0), bD.a8(3, 0 === aD.a0u ? bn.a26 ? 6 : 0 : aD.hE ? 1 : aD.kk ? 7 : aD.ki < 7 ? 2 : 8 === aD.ki ? 4 : 9 === aD.ki ? 5 : 3), b0.y.send(a24, bD.aC)
	}, this.aHV = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a27), bD.a8(10, ax.aEW), bD.a8(9, ax.aHO), bD.a8(10, l.e0), bD.a8(14, l.dp), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pO = function(er) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, er), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pP = function(ih, jZ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ih), bD.a8(10, jZ), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pT = function(ih, pR) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ih), bD.a8(9, pR), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pV = function(ih, pU) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ih), bD.a8(27, pU), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pX = function(ih, nN) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ih), bD.a8(16, nN), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pa = function(jZ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jZ), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pe = function(eC) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, eC), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pg = function(pf) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pf), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pi = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pj = function(ih, er, jZ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ih), bD.a8(10, jZ), bD.a8(22, er), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pr = function(aUr, aUs) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aUs), bD.a8(10, aUr), b0.y.send(b0.y.a2E, bD.aC)
	}, this.pu = function(a7V) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7V), b0.y.send(b0.y.a2E, bD.aC)
	}, this.py = function(aUt, target) {
		var aB, f5 = aUt.length;
		for (bD.a7(14 + 9 * f5), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f5; aB++) bD.a8(9, aUt[aB]);
		b0.y.send(b0.y.a2E, bD.aC)
	}
}

function aTV() {
	this.aUu = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.ea.aUv(), b0.y.send(0, bD.aC)
	}, this.aUo = function(a24) {
		bD.a7(127), bD.a8(1, 0), bD.a8(6, 17), bG.tD.xC(bj.eQ.data[105].value, 5), bG.tD.xC(bj.eQ.data[106].value, 15), b0.y.send(a24, bD.aC)
	}, this.aR9 = function() {
		bD.a7(97), bD.a8(1, 0), bD.a8(6, 18), bG.tD.xC(bj.eQ.data[110].value, 15), b0.y.send(0, bD.aC)
	}, this.aR6 = function(a4m) {
		var f5 = a4m.qa.length;
		bD.a7(21 + 16 * f5), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4m.tC), bD.a8(8, f5), bF.ww.xB(a4m.qa), b0.y.send(0, bD.aC)
	}, this.aSm = function(wl, colors, aUx, ef) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wl, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fO = 0; fO < 3; fO++) bE.a8(8, colors[aB][fO]);
		wl = b7.data.aDI(aUx.trim());
		bE.a8(8, -1 === wl ? 255 : wl), bF.wy.a0M(ef.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aUy())
	}, this.aPQ = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.tC), bG.tD.xC(data.t8, 5), b0.y.send(0, bD.aC)
	}, this.aG9 = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.tC), bG.tD.xC(data.t8, 5), bD.aUZ(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aTW() {
	this.pz = function() {
		for (var f5 = aD.kQ, a0j = bR.result.a0j, lL = a0j.length, a1W = (bD.a7(17 + 16 * f5 + 33 * lL), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lL), bD.a8(1, +(2 === aD.a0r)), bD.a8(1, aD.a1C % 2), ag.a1W), aB = 0; aB < f5; aB++) bD.a8(16, a1W[
		aB]);
		for (var gt = ag.gt, aB = 0; aB < lL; aB++) {
			var gd = a0j[aB];
			bD.a8(9, gd), bD.a8(24, gt[gd])
		}
		b0.y.send(b0.y.a2E, bD.aC)
	}
}

function aTX() {
	this.aQz = function(tT, tU, tV) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tT), bD.a8(1, +(tU < 0)), bD.a8(1, +(tV < 0)), bD.a8(30, Math.abs(tU)), bD.a8(30, Math.abs(tV)), b0.y.send(0, bD.aC)
	}, this.aR0 = function(tT, aR1, aR2) {
		bD.a7(18 + 16 * aR1.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tT), b0.ea.aUz(aR1), bD.a8(30, aR2), b0.y.send(0, bD.aC)
	}, this.aR5 = function(tT, aR1, aR2) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tT), bG.tD.xC(aR1, 5), bD.a8(30, aR2), b0.y.send(0, bD.aC)
	}, this.aR3 = function(aQ7, a1d) {
		for (var f5 = a1d.length, i2 = 0, aB = 0; aB < f5; aB++) i2 += a1d[aB].length;
		for (bD.a7(21 + 3 * f5 + 16 * i2), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aQ7), bD.a8(4, f5), bD.a8(7, i2), aB = 0; aB < f5; aB++) bD.a8(3, a1d[aB].length), bF.ww.xB(a1d[aB]);
		b0.y.send(0, bD.aC)
	}, this.aR4 = function(aQ7, tU, tV) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aQ7), bD.a8(1, +(tU < 0)), bD.a8(1, +(tV < 0)), bD.a8(20, Math.abs(tU)), bD.a8(20, Math.abs(tV)), b0.y.send(0, bD.aC)
	}
}

function aTT() {
	this.aH6 = function(a24) {
		var username = bj.eQ.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aV0.q1()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.e0), bD.a8(2, bj.eQ.data[158].value), b0.ea.aUz(username), bA.color.a3r(bj.y.wa()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aV0.a0M(), b0.y.a27 = a24, b0.y.send(a24, bD.aC)
	}, this.aFb = function(aV2, a4m) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aV2), 2 === aV2 ? bE.a8(2, a4m) : 3 === aV2 ? bF.wy.a0M(a4m, 7, bE) : 5 === aV2 && (bE.a8(3, a4m.id), bE.a8(3, a4m.value), bE.a8(30, a4m.t8)), b0.y.send(b0.y.a27, bE.aUy())
	}
}

function aTU() {
	this.aTz = function(a24) {
		var aV8;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dp), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aV8 = b7.aDH(), bD.a8(8, aV8[0]), bD.a8(8, aV8[1]), b0.y.send(a24, bD.aC)
	}, this.aUn = function(a24, rP, aUm, aUV) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aUV), bD.a8(30, rP[0]), bD.a8(30, rP[1]), bD.a8(30, aUm), b0.y.send(a24, bD.aC)
	}, this.aUl = function(a24, rP) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rP), b0.y.send(a24, bD.aC)
	}, this.eb = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.up = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aDD = function(id, qa) {
		var f5 = Math.min(qa.length, 63);
		bD.a7(19 + 16 * f5), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f5), bF.ww.xB(qa), b0.y.send(0, bD.aC)
	}, this.aV4 = function(aV5, ql) {
		bD.a7(7 + 26 * ql.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < ql.length; aB++) bD.a8(16, ql[aB][0]), bD.a8(10, ql[aB][1]);
		b0.y.send(aV5, bD.aC)
	}, this.aU6 = function(aV6, aV7) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aV6), bD.a8(12, aV7), b0.y.send(b0.y.a2E, bD.aC)
	}, this.aUz = function(username) {
		bD.a8(5, username.length), bF.ww.xB(username)
	}
}

function aTx() {
	var aV9, aVA, b, aVB = ["wss://", "/s50/", "/s51/", "/s52/"],
		aVC = 0;

	function aTy() {
		b0.y.aTy(aV9, aVA)
	}

	function aVF(e) {
		b0.a7V.aU8(aV9, new Uint8Array(e.data))
	}

	function aVG() {}

	function aU5(e) {
		b0.y.aU5(aV9, e)
	}
	this.dd = function(eC, aOD, aTt) {
		aV9 = eC, aVA = aOD,
			function(aTt) {
				aTt = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : l.dt ? "ws://localhost:" + (7130 + aV9) + "/" : aTt ? aVB[0] + "game.territorial.io/x0" + aV9 + "/" : aVB[0] + b0.y.aTh[aV9] + aVB[1 + l.du];
				(b = new WebSocket(aTt)).binaryType = "arraybuffer", b.onopen = aTy, b.onmessage = aVF, b.onclose = aU5, b.onerror = aVG
			}(aTt)
	}, this.aVE = function() {
		return b.readyState === b.CONNECTING
	}, this.eZ = function() {
		return b.readyState === b.OPEN
	}, this.aTp = function() {
		return aVC
	}, this.aU0 = function() {
		aVC = 1
	}, this.aTv = function() {
		return this.aVE() || this.eZ()
	}, this.aTw = function(aOD) {
		aVA = aOD
	}, this.aUp = function() {
		return aVA
	}, this.send = function(aC) {
		this.eZ() && b.send(aC)
	}, this.close = function(aU2) {
		this.aTv() && (this.sA(), b.close(aU2))
	}, this.sA = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dK() {
	var gap, aVH = !1,
		aVI = 0,
		i = 0,
		tH = 0,
		canvas = null,
		z8 = null,
		a3R = null;

	function aVM() {
		for (var aB = aD.yA; 0 <= aB; aB--) a3R[aB] = 0;
		for (aB = al.kw - 1; 0 <= aB; aB--) a3R[bg.f3[al.l1[aB]]] += ag.gt[al.l1[aB]];
		aVH = !0
	}

	function aVK() {
		for (var aVR, aVP = 0, f5 = 0, ed = Math.floor(i / 2), eB = Math.floor(tH / 2), aVQ = 1.5 * Math.PI, aB = aD.yA; 0 <= aB; aB--) f5 += a3R[aB], 0 === a3R[aB] && aVP++;
		if (aVH = !1, z8.clearRect(0, 0, i, i), 0 < f5)
			if (aVP === aD.yA) {
				for (aB = aD.yA; 0 <= aB; aB--)
					if (0 < a3R[aB]) {
						! function(aB, ed, eB) {
							z8.fillStyle = bg.aVY[bg.kn[aB]], z8.beginPath(), z8.arc(ed, ed, eB, 0, 2 * Math.PI), z8.fill()
						}(aB, ed, eB);
						break
					}!
				function(ed) {
					var fontSize = ed / 3;
					z8.font = bA.qt.sk(1, fontSize), z8.fillStyle = bB.o0, z8.fillText("100%", ed, ed + .1 * fontSize)
				}(ed)
			} else {
				for (aB = 0; aB <= aD.yA; aB++) 0 < a3R[aB] && (! function(aB, ed, eB, aVQ, aVR) {
					z8.fillStyle = bg.aVY[bg.kn[aB]], z8.beginPath(), z8.arc(ed, ed, eB, aVQ, aVR), z8.lineTo(ed, ed), z8.fill()
				}(aB, ed, eB, aVQ, aVR = aVQ + 2 * Math.PI * a3R[aB] / f5), function(ed, eB, aVQ, aVR) {
					var fX = (aVR - aVQ) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eB * Math.min(fX, .37);
					fontSize < 8 || (aVQ = (aVQ + aVR) / 2, aVR = (__fx.settings.detailedTeamPercentage ? (100 * fX).toFixed(2) : Math.floor(100 * fX + .5)) + "%", eB *= .525 - Math.max(.6 * (fX - .7), 0), z8.font = bA.qt.sk(1, fontSize), z8
						.fillStyle = bB.o0, z8.fillText(aVR, ed + Math.cos(aVQ) * eB, ed + Math.cos(aVQ + 1.5 * Math.PI) * eB))
				}(ed, eB, aVQ, aVR), 0 !== aB && aVW(ed, eB, aVQ), aVQ = aVR);
				aVW(ed, eB, 1.5 * Math.PI)
			}!
		function(ed, eB) {
			z8.beginPath(), z8.arc(ed, ed, eB, 0, 2 * Math.PI), z8.stroke()
		}(ed, eB)
	}

	function aVW(ed, eB, aVZ) {
		z8.beginPath(), z8.moveTo(ed, ed), z8.lineTo(ed + Math.cos(aVZ) * eB, ed + Math.cos(aVZ + 1.5 * Math.PI) * eB), z8.stroke()
	}
	this.dd = function() {
		if (aD.hz) {
			aVI = 0, a3R = new Uint32Array(aD.yA + 1);
			for (var aB = aD.yA; 0 <= aB; aB--) a3R[aB] = 0;
			for (aB = al.kw - 1; 0 <= aB; aB--) a3R[bg.f3[al.l1[aB]]] += 1;
			this.resize()
		} else a3R = z8 = canvas = null
	}, this.a8q = function() {
		return i
	}, this.resize = function() {
		aD.hz && (i = Math.floor(.95 * (a0.a1.iE() && !aD.nT ? .18 * h.min : .13 * h.iF)), i = (i *= 1 + (.5 + .2 * a0.a1.iE()) * aD.nT) + i % 2, gap = Math.max(1, .015 * i), tH = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (z8 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, z8.strokeStyle = bB.o0, bA.qt.textAlign(z8, 1), bA.qt.textBaseline(z8, 1), aVK())
	}, this.kx = function(aVL) {
		aVL && aVM();
		var eU, aVL = this.kz();
		return bg.kn[aVL] || (aVL = function() {
			for (var ky = -1, aB = aD.yA; 1 <= aB; aB--)(-1 === ky || a3R[aB] > a3R[ky]) && (ky = aB);
			return ky
		}(), eU = ag.gt[m1[0]], -1 !== aVL && a3R[aVL] > eU) ? a3R[aVL] : eU
	}, this.a1r = function() {
		return aVI = 31, this.eY(), this.kz()
	}, this.kz = function() {
		for (var ky = 0, aB = aD.yA; 0 < aB; aB--) a3R[aB] > a3R[ky] && (ky = aB);
		return ky
	}, this.kR = function(aVO) {
		for (var gY = 0, l1 = al.l1, f3 = bg.f3, f5 = al.kw, fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = l1[aB];
			f3[gd] === aVO && (fj[gY++] = gd)
		}
		bO.fa[0] = gY
	}, this.l0 = function(aVO) {
		for (var gY = 0, l1 = al.l1, f3 = bg.f3, f5 = al.kw, fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = l1[aB];
			f3[gd] !== aVO && (fj[gY++] = gd)
		}
		bO.fa[0] = gY
	}, this.a4K = function() {
		for (var gY = 0, aB = aD.yA; 0 <= aB; aB--) gY += 0 < a3R[aB];
		return gY
	}, this.eY = function() {
		aD.hz && 32 <= ++aVI && (aVI = 0, aVM())
	}, this.mm = function() {
		aD.hz && aVH && aVK()
	}, this.vW = function() {
		aD.hz && (aD.nT ? vX.drawImage(canvas, bc.gap, bc.gap) : vX.drawImage(canvas, bc.gap, a8p + 2 * bc.gap))
	}
}

function da() {
	function aVf(fC, f5, fE, a0W, aA7, fV) {
		if (!(fE < 1 || aA7 < fE))
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (a0W(ej)) return ej >> 2;
				fC += fV
			}
		return -1
	}

	function aVj(fE, f5, fC, a0W, aVd, fV) {
		if (!(fC < 1 || aVd < fC)) {
			f5 = Math.max(f5, 0);
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (a0W(ej)) return ej >> 2;
				fE += fV
			}
		}
		return -1
	}

	function aVn(iW, iX, aVa) {
		return -1 !== iX && (-1 === iW || bM.iY(iX, aVa) < bM.iY(iW, aVa)) ? iX : iW
	}
	this.hU = function(aVa) {
		return this.a0y(aVa, function(ej) {
			return ac.f0(ej)
		})
	}, this.ha = function(aVa) {
		return this.a0y(aVa, function(ej) {
			return ac.aIO(ej, aD.ep)
		})
	}, this.a0y = function(aVa, a0W) {
		return function(aVa, aVb, a0W) {
			for (var hK = bM.fD(aVa), hM = bM.fF(aVa), aVd = bS.fG - 2, aA7 = bS.fH - 2, aVe = -1, f8 = 0; f8 < aVb; f8++) {
				var aA6 = Math.max(hK - f8, 1),
					aMW = Math.max(hM - f8, 1),
					yl = Math.min(hK + f8, aVd),
					yk = Math.min(hM + f8, aA7),
					iW = aVf(hK, yl - hK, hM - f8, a0W, aA7, 1),
					iX = aVf(hK - 1, hK - aA6 - 1, hM - f8, a0W, aA7, -1),
					yl = aVf(hK, yl - hK, hM + f8, a0W, aA7, 1),
					aA6 = aVf(hK - 1, hK - aA6 - 1, hM + f8, a0W, aA7, -1),
					aVi = aVj(hM, yk - hM - 1, hK - f8, a0W, aVd, 1),
					aVk = aVj(hM - 1, hM - aMW - 2, hK - f8, a0W, aVd, -1),
					yk = aVj(hM, yk - hM - 1, hK + f8, a0W, aVd, 1),
					aMW = aVj(hM - 1, hM - aMW - 2, hK + f8, a0W, aVd, -1);
				if (aVe = aVn(aVe, iW, aVa), aVe = aVn(aVe, iX, aVa), aVe = aVn(aVe, yl, aVa), aVe = aVn(aVe, aA6, aVa), aVe = aVn(aVe, aVi, aVa), aVe = aVn(aVe, aVk, aVa), aVe = aVn(aVe, yk, aVa), 0 <= (aVe = aVn(aVe, aMW, aVa)) && f8 *
					f8 >= bM.iY(aVe, aVa)) return aVe
			}
			return -1
		}(aVa, bM.iC(), a0W)
	}
}

function d3() {
	function aVp(key) {
		var aSo;
		return "undefined" == typeof URLSearchParams || (aSo = window.location.search, "string" != typeof(aSo = new URLSearchParams(aSo).get(key))) || aSo.length < 1 ? null : aSo
	}
	this.dl = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aVp("account");
				if (!value && !(value = aVp("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.tA, new tB(1e3, {
					tC: 0,
					t8: value,
					t9: 0
				})), 1
			}()) {
			var value = aVp("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a21 = new URL(window.location.href);
		a21.search = "";
		try {
			return history.replaceState(null, "", a21.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aPd = function(key, value) {
		if (0 === a0.id) try {
			var a21 = new URL(window.location.href),
				gd = a21.searchParams;
			gd.set(key, value), a21.search = gd.toString(), history.replaceState(null, "", a21.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVr, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.fW(32768 * aB, 100);
		this.a5W(0)
	}, this.value = function(gd) {
		return g[gd]
	}, this.aMO = function() {
		return bL.fW(aVr - 1, 2)
	}, this.a5W = function(aM2) {
		aVr = 2 * aM2 % 32768 + 1
	}, this.random = function() {
		return aVr = 167 * aVr % 32768
	}, this.jh = function(mu) {
		return bL.fW(mu * this.random(), 32768)
	}, this.kI = function(gd) {
		return 0 !== gd && this.random() < this.value(gd)
	}, this.j3 = function(fO, fP) {
		return fO + this.jh(fP - fO)
	}
}

function cz() {
	this.qD = new aVs, this.a5g = new aVt, this.aJf = new aVu, this.dd = function() {
		aD.hE || this.qD.dd()
	}, this.eY = function() {
		aD.hE || (this.qD.eY(), 3 !== t.tA) || bf.kN() % 15 != 5 && 2 !== aD.a0u || t.a5z().aSp()
	}, this.aSs = function() {
		0 === aD.a0u && aa.aHG(), aD.a5Q.a5p(), aD.data.canvas = null, b0.y.close(b0.y.a2E, 3257), b0.y.a2E = 0, aD.data.isReplay = 1, aD.a5U()
	}, this.aSr = function(qa) {
		var aB = qa.indexOf("=");
		return 0 <= aB ? qa.substring(aB + 1) : qa
	}, this.aSq = function(qa) {
		return qa
	}
}

function aVs() {
	this.aVw = null, this.aVx = null, this.aVy = null, this.aVz = null, this.aW0 = null, this.aW1 = null, this.a5f = "";
	var aW2 = 0;
	this.dd = function() {
		this.aVw = [], this.aVx = [], this.aVy = [], this.aVz = [], this.aW0 = [0], this.aW1 = [0], aW2 = 0, this.a5f = ""
	}, this.qE = function(id, fo, fq, fs) {
		aD.hE || 2 === aD.a0u || (0 === this.aW0[aW2] && (this.aW1[aW2] ? (this.aW0.push(1), this.aW1.push(0), aW2++) : this.aW0[aW2] = 1), this.aVw.push(id), this.aVx.push(fo), this.aVy.push(void 0 === fq ? 0 : fq), this.aVz.push(void 0 === fs ?
			0 : fs), this.aW1[aW2]++)
	}, this.eY = function() {
		0 === this.aW0[aW2] ? this.aW1[aW2]++ : (this.aW0.push(0), this.aW1.push(0), aW2++)
	}
}

function aVu() {
	var aW3 = 0;

	function aW7(qa, id) {
		aW3 || (id ? 1 === id ? aN.a6y = L(468) + ": " + qa : t.u(4, 3, new v(L(469), qa, 1)) : t.u(4, 3, new v("⚠️ " + L(467), qa, 1)))
	}
	this.xG = function(qa, aW4) {
		var iO, ql;
		return aW3 = aW4, bG.tD.x8(bG.tD.x6(bG.tD.x4(qa))), aN.a6y = "", !! function() {
			if (bH.size < 10) aW7("File Too Small");
			else {
				var aW9 = bH.q1(12),
					r = (aW9 !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aW7(r = (r += "   Found: " + aW9) + ("   Compatible at " + b0.y.a1L() + "/" + aW9), 1)), bH.q1(12)),
					aWA = bH.q1(31);
				if (aWA !== bH.size) aW7("Size Error: " + aWA + " " + bH.size);
				else if (function(j, aW9) {
						for (var gd = bH.aC, f5 = bH.size, aV7 = aW9, aB = 3; aB < f5; aB++) aV7 = aV7 + gd[aB] & 4095;
						return aV7 === j || (aW7("Hash Error: " + aV7 + " " + j + " " + f5), !1)
					}(r, aW9)) return 1
			}
			return
		}() && (iO = bH, (ql = aD.data = new a5P).mapType = iO.q1(2), ql.mapProceduralIndex = iO.q1(8), ql.mapRealisticIndex = iO.q1(8), ql.mapSeed = iO.q1(14), ql.mapName = iO.aWC(5), 2 === ql.mapType && iO.aWD(), ql.passableWater = iO.q1(
			1), ql.passableMountains = iO.q1(1), ql.playerCount = iO.q1(10), ql.humanCount = iO.q1(10), ql.selectedPlayer = iO.q1(9), ql.gameMode = iO.q1(1), ql.playerMode = iO.q1(2), ql.battleRoyaleMode = iO.q1(2), ql.numberTeams = iO.q1(4),
			ql.isZombieMode = iO.q1(1), ql.isContest = iO.q1(1), ql.isReplay = iO.q1(1), ql.elo = iO.aWE(2, 14, 2), ql.colorsType = iO.q1(1), ql.colorsPersonalized = iO.q1(1), ql.colorsData = iO.aWE(10, 18, 512), ql.selectableColor = iO.q1(
			1), ql.teamPlayerCount = iO.aWE(4, 10, 9), ql.neutralBots = iO.q1(1), ql.botDifficultyType = iO.q1(2), ql.botDifficultyValue = iO.q1(4), ql.botDifficultyTeam = iO.aWE(4, 4, 9), ql.botDifficultyData = iO.aWE(10, 4, 512), ql
			.spawningType = iO.q1(2), ql.spawningSeed = iO.q1(14), ql.spawningData = iO.aWE(11, 12, 1024), ql.selectableSpawn = iO.q1(1), ql.playerNamesType = iO.q1(2), ql.playerNamesData = iO.aWF(10, 5, 512), ql.selectableName = iO.q1(1), ql
			.aIncomeType = iO.q1(2), ql.aIncomeValue = iO.q1(8), ql.aIncomeData = iO.aWE(10, 8, 512), ql.tIncomeType = iO.q1(2), ql.tIncomeValue = iO.q1(8), ql.tIncomeData = iO.aWE(10, 8, 512), ql.iIncomeType = iO.q1(2), ql.iIncomeValue = iO
			.q1(8), ql.iIncomeData = iO.aWE(10, 8, 512), ql.sResourcesType = iO.q1(2), ql.sResourcesValue = iO.q1(11), ql.sResourcesData = iO.aWE(10, 11, 512), ql.a5n = iO.aWE(10, 30, 0), !! function() {
				var iO = bH,
					xH = iO.q1(5),
					aWG = iO.q1(30),
					aWH = iO.q1(30);
				if (aWG + aWH > 8 * iO.size) return void aW7("Corrupted File");
				return function(f5) {
						var aWK = new Uint8Array(f5),
							aWL = new Uint16Array(f5),
							aWM = new Uint32Array(f5),
							aWN = new Uint32Array(f5);
						b9.qD.aVw = aWK, b9.qD.aVx = aWL, b9.qD.aVy = aWM, b9.qD.aVz = aWN;
						for (var aB = 0; aB < f5; aB++) {
							var id = bH.q1(4);
							aWK[aB] = id, aWL[aB] = bH.q1(9), 0 === id ? aWM[aB] = bH.q1(22) : 1 === id ? (aWM[aB] = bH.q1(10), aWN[aB] = bH.q1(10)) : 2 === id ? (aWM[aB] = bH.q1(10), aWN[aB] = bH.q1(9)) : 3 === id ? (aWM[aB] = bH.q1(10),
								aWN[aB] = bH.q1(27)) : 4 === id ? (aWM[aB] = bH.q1(10), aWN[aB] = bH.q1(16)) : 5 === id || 6 === id ? aWM[aB] = bH.q1(10) : 7 === id ? aWM[aB] = bH.q1(1) : 10 === id && (aWM[aB] = bH.q1(20), aWN[aB] = bH
								.q1(22))
						}
					}(aWG),
					function(f5, xH) {
						var aW0 = new Uint8Array(f5),
							aW1 = new Array(f5);
						aW1.fill(0), b9.qD.aW0 = aW0, b9.qD.aW1 = aW1;
						for (var aB = 0; aB < f5; aB++) aW0[aB] = bH.q1(1), aW1[aB] = bH.q1(xH)
					}(aWH, xH), 1
			}()) && (bH.eC < 8 * bH.size - 13 || bH.eC > 8 * bH.size ? (aW7("Out Of Bounds Error: " + bH.eC + " " + 8 * bH.size), !1) : (b9.qD.a5f = qa, 2 !== aD.data.mapType || (aW7("Load base64 image...", 2), aW4)))
	}, this.aJg = function(aJ6, aW8) {
		var a3m = document.createElement("canvas"),
			i7 = a3m.getContext("2d");
		if (a3m.width = aJ6.width, a3m.height = aJ6.height, i7.drawImage(aJ6, 0, 0), aD.data.canvas = a3m, aW3 || aW8) return aD.a0u ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aSs()
	}
}

function aVt() {
	this.a0M = function() {
		var xH = function() {
				for (var aW1 = b9.qD.aW1, f5 = aW1.length, max = 0, aB = 0; aB < f5; aB++) max = Math.max(max, aW1[aB]);
				return xO(Math.max(max, 1))
			}(),
			i = (ql = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.eC += 43, i.a8(2, ql.mapType), i.a8(8, ql.mapProceduralIndex), i.a8(8, ql.mapRealisticIndex), i.a8(14, ql.mapSeed), i.aWU(ql.mapName, 5), 2 === ql.mapType && i.aWV(ql.canvas),
				i.a8(1, ql.passableWater), i.a8(1, ql.passableMountains), i.a8(10, ql.playerCount), i.a8(10, ql.humanCount), i.a8(9, ql.selectedPlayer), i.a8(1, ql.gameMode), i.a8(2, ql.playerMode), i.a8(2, ql.battleRoyaleMode), i.a8(4, ql
					.numberTeams), i.a8(1, ql.isZombieMode), i.a8(1, ql.isContest), i.a8(1, ql.isReplay), i.dj(ql.elo, 2, 14), i.a8(1, ql.colorsType), i.a8(1, ql.colorsPersonalized), i.dj(ql.colorsData, 10, 18), i.a8(1, ql.selectableColor), i.dj(
					ql.teamPlayerCount, 4, 10), i.a8(1, ql.neutralBots), i.a8(2, ql.botDifficultyType), i.a8(4, ql.botDifficultyValue), i.dj(ql.botDifficultyTeam, 4, 4), i.dj(ql.botDifficultyData, 10, 4), i.a8(2, ql.spawningType), i.a8(14, ql
					.spawningSeed), i.dj(ql.spawningData, 11, 12), i.a8(1, ql.selectableSpawn), i.a8(2, ql.playerNamesType), i.aWW(ql.playerNamesData, 10, 5), i.a8(1, ql.selectableName), i.a8(2, ql.aIncomeType), i.a8(8, ql.aIncomeValue), i.dj(ql
					.aIncomeData, 10, 8), i.a8(2, ql.tIncomeType), i.a8(8, ql.tIncomeValue), i.dj(ql.tIncomeData, 10, 8), i.a8(2, ql.iIncomeType), i.a8(8, ql.iIncomeValue), i.dj(ql.iIncomeData, 10, 8), i.a8(2, ql.sResourcesType), i.a8(11, ql
					.sResourcesValue), i.dj(ql.sResourcesData, 10, 11), i.dj(ql.a5n, 10, 30), ! function(xH) {
					var i = bE,
						aVw = b9.qD.aVw,
						fo = b9.qD.aVx,
						fq = b9.qD.aVy,
						fs = b9.qD.aVz,
						f5 = aVw.length;
					i.a8(5, xH), i.a8(30, f5), i.a8(30, b9.qD.aW1.length);
					for (var aB = 0; aB < f5; aB++) {
						var ed = aVw[aB];
						i.a8(4, ed), i.a8(9, fo[aB]), 0 === ed ? i.a8(22, fq[aB]) : 1 === ed ? (i.a8(10, fq[aB]), i.a8(10, fs[aB])) : 2 === ed ? (i.a8(10, fq[aB]), i.a8(9, fs[aB])) : 3 === ed ? (i.a8(10, fq[aB]), i.a8(27, fs[aB])) : 4 === ed ? (i
							.a8(10, fq[aB]), i.a8(16, fs[aB])) : 5 === ed || 6 === ed ? i.a8(10, fq[aB]) : 7 === ed ? i.a8(1, fq[aB]) : 10 === ed && (i.a8(20, fq[aB]), i.a8(22, fs[aB]))
					}
				}(xH), ! function(xH) {
					for (var i = bE, aW0 = b9.qD.aW0, aW1 = b9.qD.aW1, f5 = aW0.length, aB = 0; aB < f5; aB++) i.a8(1, aW0[aB]), i.a8(xH, aW1[aB])
				}(xH), bE.eC),
			ql = bL.fW(i - 1, 6) + 1,
			xH = (bD.aUa(6 * ql) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.eC = 24, i.a8(31, i.g.length), i.eC = 12, i.a8(12, function() {
					for (var g = bE.g, f5 = g.length, aV7 = l.rVersion, aB = 3; aB < f5; aB++) aV7 = aV7 + g[aB] & 4095;
					return aV7
				}())
			}(), bH.dd(bE.g), bF.tD.tE(bF.tD.tF(ql)));
		return bH.ua(), bE.dd(), xH
	}
}

function cp() {
	var ed, bu = !1,
		aWY = !1,
		aWZ = -1e4,
		aWa = -1,
		aWb = 0;

	function resize(aWf) {
		ed = 0, ab.tc() && (aWd(aWf) || bu) && (bu = !1, bc.resize(), bW.aCn.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0u ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a9w()) : (aa.aHI(), aa.aHJ()), bf.dk = !0)
	}

	function aWc(fX) {
		return fX && 128 < fX ? Math.floor(fX) : 128
	}

	function aWd(aWf) {
		var i, j, aWh, tH, a9K;
		if (!(0 < h.ss)) return tH = aWc(document.documentElement.clientWidth), a9K = aWc(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tH, j = a9K, aWh = 0 !== a0.id || i < j ?
			700 : 1200, aWh = Math.min(aWh / ((i + j) / 2), 1), aWh = 0 === bj.eQ.data[1].value ? 2 * aWh / 3 : Math.min(aWh + (bj.eQ.data[1].value - 1) * (1 - aWh) / 2, 1), h.k = (window.devicePixelRatio || 1) * aWh, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aWf && !aWY ? (aWY = !0, t.removeChild(document.body, a2R)) : aWY && (aWY = !1, document.body.appendChild(a2R)), i = Math.floor(.5 + tH * h.k), j = Math.floor(.5 + a9K * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCP(i, j), h.max = a7D(i, j), h.iF = bL.fW(i + j, 2), h.vT = i / j, a2R.width = i, a2R.height = j, a2R.style.width = tH + "px", a2R.style.height = a9K + "px", aWa = bf.eT + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iF = 0, this.vT = 1, this.k = 1, this.ss = 0, this.de = function() {
		this.i = aWc(document.documentElement.clientWidth) + 2, this.j = aWc(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		ed = 1, a2R = document.getElementById("canvasA"), 2 === a0.id && (a2R.style.webkitUserSelect = "none"), (vX = a2R.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aWd(0)
	}, this.eY = function() {
		50 <= ++ed && resize(0), -1 === aWa || bf.eT < aWa || (aWa = -1, 2e3 * ++aWb >= bf.eT + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dn = function(jf) {
		bu = !0, resize(jf)
	}, this.a36 = function() {
		aWZ + 1e3 > bf.eT || (aWZ = bf.eT, resize(0))
	}
}

function dH() {
	this.aUj = new aWj, this.a1m = new aWk, this.aV0 = new aWl
}

function aWl() {
	this.q1 = function() {
		return 69
	}, this.a0M = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aWk() {
	this.a1n = function() {
		for (var gd, f5 = al.kw, a0i = al.l1, a1W = ag.a1W, a98 = this.aIp(), aB = 0; aB < f5; aB++) gd = a0i[aB], bA.gR.jn(gd) || (a1W[gd] = a98);
		var qI = ag.qI,
			jT = ag.jT,
			jU = ag.jU,
			a1U = ag.a1U,
			f5 = aD.kQ;
		for (aB = 0; aB < f5; aB++)(0 === a1U[aB] || jU[aB] < 1 || 2 * qI[aB] > 3 * (jT[aB] + jU[aB])) && (a1W[aB] = 0);
		var a1k = 0;
		for (aB = 0; aB < f5; aB++) a1k += 0 < a1W[aB];
		return a1k
	}, this.aIp = function() {
		return Math.min(65535, bf.kN())
	}
}

function aWj() {
	function aWp(g, fX, hx) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fX >> (aB + hx) % 30 & 1)) % 256
	}
	this.eY = function(aWm, aWn) {
		var g = new Uint8Array(256);
		return function(g, aWm, aWn) {
				var aB, aWr = 3 + (4 + aWm) % 32768,
					aWs = 12 + aWn % 32768,
					aWt = 17 + ((aWm & aWn) + (aWm | aWn) + aWm) % 32768;
				for (aB = 0; aB < 256; aB++) aWr = 1 + aWr * aWs % aWt, g[aB] = aWr % 256
			}(g, aWm, aWn), aWp(g, aWm, 2), aWp(g, aWn, 7),
			function(g) {
				var aB, fX, eC = 0;
				for (aB = 0; aB < 3e4; aB++) fX = g[eC], g[eC] = (fX + aB + g[(eC + aB) % 256]) % 256, eC = (fX + aB + eC + (fX & eC)) % 256
			}(g),
			function(g) {
				var aB, a9K = 1,
					u0 = 1;
				for (aB = 0; aB < 256; aB += 2) a9K = (1 + a9K) * (g[aB] + 1) % 1073741824, u0 = (1 + u0) * (g[aB + 1] + 1) % 1073741824;
				return [a9K, u0]
			}(g)
	}, this.aUk = function(aWu, aWv, aWw, result) {
		for (var gY = 1 << aWu, aB = 0; aB < gY; aB++)
			if (this.aWx(aB, aWv, aWw) === result) return aB;
		return 0
	}, this.aWx = function(aWy, aWv, aWw) {
		for (var yJ = aWv + aWy, yS = aWw + aWy, fX = yJ + yS & 2147483647, fO = 1; fO <= 16; fO++) fX = (fX = (fX ^ fX >> fO) >>> 1 + (3 & yJ)) * (7 + (1023 & (yJ | yS))) & 1073741823, yS >>= 1 + (1 & (yJ >>= 1 + (1 & (fX += 65535 & yS))));
		return fX &= 1073741823
	}
}

function cm() {
	var aWz, aX0, iJ, aX1;
	this.dd = function() {
		var aB, fC, fE, aV1, aX2, i, j, z8, i4, xY, fX, gd, fL, fO, aX5;
		if (function() {
				if (iJ = !0, aX1 = "rgb(" + bS.xW[0] + "," + bS.xW[1] + "," + bS.xW[2] + ")", bS.aMB(bS.el)) return 1;
				return iJ = !1, 0
			}()) aX0 = null;
		else {
			for (aWz = bL.fW(96, 4), aX2 = 1 === bS.el ? (aV1 = 0, 160) : (aV1 = 128, 32), aX1 = "rgb(" + aV1 + "," + aV1 + "," + aV1 + ")", aX0 = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aX0[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fG : aWz, j = aB % 2 == 0 ? aWz : bS.fH + 2 * aWz, aX0[aB].width = i, aX0[aB].height = j, xY = (i4 = (z8 = aX0[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fE = aWz - 1; 0 <= fE; fE--)
						for (fX = aX2 + Math.floor((fE + 1) * (aV1 - aX2) / (aWz + 1)), fC = i - 1; 0 <= fC; fC--) xY[gd = 4 * ((0 === aB ? aWz - fE - 1 : fE) * i + fC)] = fX, xY[gd + 1] = fX, xY[gd + 2] = fX, xY[gd + 3] = 255;
				else {
					for (fC = aWz - 1; 0 <= fC; fC--)
						for (fX = aX2 + Math.floor((fC + 1) * (aV1 - aX2) / (aWz + 1)), fE = j - 1 - aWz; aWz <= fE; fE--) xY[gd = 4 * (fE * i + (3 === aB ? aWz - fC - 1 : fC))] = fX, xY[gd + 1] = fX, xY[gd + 2] = fX, xY[gd + 3] = 255;
					for (fO = 1; 0 <= fO; fO--)
						for (fC = aWz - 1; 0 <= fC; fC--)
							for (fE = aWz - 1; 0 <= fE; fE--) fL = (Math.pow(fC * fC + fE * fE, .5) + 1) / (aWz + 1), fX = aX2 + Math.floor((1 < fL ? 1 : fL) * (aV1 - aX2)), xY[gd = 4 * ((0 === fO ? aWz - fE - 1 : fE + fO * (j - aWz)) * i + (
								1 === aB ? fC : aWz - fC - 1))] = fX, xY[gd + 1] = fX, xY[gd + 2] = fX, xY[gd + 3] = 255
				}
				z8.putImageData(i4, 0, 0)
			}
			aX5 = aX2, bS.xR.fillStyle = "rgb(" + aX5 + "," + aX5 + "," + aX5 + ")", bS.xR.fillRect(0, 0, bS.fG, 1), bS.xR.fillRect(0, bS.fH - 1, bS.fG, 1), bS.xR.fillRect(0, 0, 1, bS.fH), bS.xR.fillRect(bS.fG - 1, 0, 1, bS.fH)
		}
	}, this.z2 = function() {
		var fO = iJ ? 0 : -aWz;
		aNw(fO, fO, bS.fG - 2 * fO, bS.fH - 2 * fO, ba.aX6, ba.aX7, ba.aX8, ba.aX9) || (vX.fillStyle = aX1, vX.fillRect(0, 0, h.i, h.j))
	}, this.vW = function() {
		iJ || (aNv(0, -aWz, bS.fG, aWz, ba.aX6, ba.aX7, ba.aX8, ba.aX9) && vX.drawImage(aX0[0], ba.aXA, ba.aXB - aWz), aNv(bS.fG, -aWz, aWz, bS.fH + 2 * aWz, ba.aX6, ba.aX7, ba.aX8, ba.aX9) && vX.drawImage(aX0[1], ba.aXA + bS.fG, ba.aXB - aWz),
			aNv(0, bS.fH, bS.fG, aWz, ba.aX6, ba.aX7, ba.aX8, ba.aX9) && vX.drawImage(aX0[2], ba.aXA, ba.aXB + bS.fH), aNv(-aWz, -aWz, aWz, bS.fH + 2 * aWz, ba.aX6, ba.aX7, ba.aX8, ba.aX9) && vX.drawImage(aX0[3], ba.aXA - aWz, ba.aXB - aWz))
	}
}

function d6() {
	this.aIn = new aXC, this.z5 = new aXD, this.y = new aXE, this.is = new aXF, this.aX5 = new aXG, this.mL = new aXH, this.kE = new aXI, this.lD = new aXJ, this.aXK = new aXL, this.aXM = new aXN, this.mW = new aXO, this.hf = new aXP, this.lm =
		new aXQ, this.lF = new aXR, this.hi = new aXS, this.mP = new aXT, this.qQ = new aXU, this.dd = function() {
			this.lm.dd(), this.z5.dd(), this.y.dd(), this.is.dd(), this.aX5.dd(), this.aXM.dd(), this.mP.dd()
		}, this.vW = function() {
			this.aXM.vW(), this.z5.vW()
		}
}

function aXI() {
	this.eY = function(player) {
		return !!bN.mW.mX(player) && !(bN.y.kU[player] >= Math.max(3 * ao.performance.le, aE.ke[aE.ho[player]]) || !bA.gR.mY(player, aE.kc[aE.ho[player]], 32, 0)) && (aW.aCC() ? function(player) {
			var aXX = bN.lF.aCF(),
				f5 = aXX.length;
			if (0 === f5) return !1;
			aXX = aXX[ay.jh(f5)], f5 = bN.y.mJ[aXX];
			if (bN.mP.mQ(player, f5)) return !1;
			return !! function(player, mS) {
				var mS = bM.iq(bN.y.mV[mS]),
					hK = bM.fD(mS),
					mS = bM.fF(mS),
					nQ = ag.iy[player],
					nR = ag.j0[player],
					nd = ag.iz[player],
					player = ag.j1[player],
					nd = Math.max(hK - nd, nQ - hK),
					nQ = Math.max(mS - player, nR - mS);
				return nd < 100 && nQ < 100
			}(player, aXX) && !!bN.hi.qP(player, f5, 1) && (bA.gR.ma(player), bN.y.mb(player), !0)
		}(player) : !!(ao.jH.eY(player) || ao.j6.eY(player) || ao.j8.eY(player)) && (function(player) {
			bO.fh[1] = 4, bA.gR.ma(player), bN.y.mb(player)
		}(player), !0))
	}
}

function aXT() {
	var aXa = 0,
		aXb = null;
	this.dd = function() {
		null === aXb && (aXb = new Uint16Array(2 * bN.y.ke)), aXa = 0
	}, this.ec = function(aXc, mP) {
		var aXd = aXb;
		aXd[aXa++] = aXc, aXd[aXa++] = mP
	}, this.mQ = function(player, mO) {
		for (var aXd = aXb, f5 = aXa, aB = 0; aB < f5; aB += 2)
			if (aXd[aB] === mO && bN.lF.aXe(aXd[aB + 1]) && player === bN.y.mK[bO.fh[2]] >> 3) return !0;
		return !1
	}, this.aXf = function(aXg) {
		var mL = bN.y.mH[aXg];
		if (!(mL < 64)) {
			for (var mO = bN.y.mJ[aXg], aXd = aXb, f5 = aXa, aB = f5 - 2; 0 <= aB; aB -= 2)
				if (aXd[aB] === mO) {
					{
						aXl = void 0;
						var aXl = aXd[aB + 1];
						bN.lF.aXe(aXl) && bN.mP.aXt(bO.fh[2])
					}
					aXd[aB] = aXd[f5 - 2], aXd[aB + 1] = aXd[f5 - 1], f5 -= 2
				} aXa = f5
		}
	}, this.aXi = function(aXj, aXk) {
		for (var aXl = bN.y.mJ[aXj], mO = -1, aXd = aXb, f5 = aXa, aB = 1; aB < f5; aB += 2)
			if (aXd[aB] === aXl) {
				mO = aXd[aB - 1];
				break
			} if (-1 === mO) return !1;
		if (!bN.lF.aXe(mO)) return !1;
		var aXg = bO.fh[2],
			ll = bN.y.mI[aXg];
		if (aXk === ll[ll.length - 1]) bN.y.mI[aXj] = bN.lm.aXm(bN.y.mI[aXj], bN.lm.lu(ll));
		else {
			var aXn = bN.lF.aXo(ll, aXk);
			if (-1 === aXn) return !1;
			var aXp = bN.y.mU[aXg];
			aXn === aXp ? (aXg = bM.iq(bN.y.mV[aXg]), bN.y.mI[aXj] = bN.lm.aXr(bN.y.mI[aXj], ll, aXn, aXk, bM.iV(ll[aXn], aXk) > bM.iV(ll[aXn], aXg))) : bN.y.mI[aXj] = bN.lm.aXr(bN.y.mI[aXj], ll, aXn, aXk, aXp < aXn)
		}
		return !0
	}, this.aXt = function(aXu) {
		var ll, lL = bN.y,
			mL = lL.mH[aXu];
		return mL % 64 != 5 && (ll = lL.mI[aXu], lL.aXv[aXu] = 65535 - lL.aXv[aXu], lL.mU[aXu] = ll.length - lL.mU[aXu] - 2, lL.mI[aXu] = bN.lm.lu(ll), lL.mH[aXu] = mL - mL % 64 + 5, !0)
	}
}

function aXO() {
	this.mX = function(player) {
		return !!aD.data.passableWater && bN.y.mG !== bN.y.ke && bN.y.kU[player] !== bN.y.aXw && 0 !== ag.gm[player].length
	}, this.qL = function(aVa) {
		var mL = bO.fh[1];
		return !(4 <= mL || !bN.lF.aXx(bM.ev(aVa))) && ac.f0(bM.ev(bM.iu(aVa, mL)))
	}
}

function aXC() {
	this.aIo = function(player) {
		for (var a8Y = bN.y.a8Y, tU = player << 3, aB = tU + bN.y.kU[player] - 1; tU <= aB; aB--) this.aXy(a8Y[aB])
	}, this.aXy = function(aXz) {
		var y = bN.y,
			aY0 = y.mG - 1,
			aY1 = y.mK[aXz],
			aY2 = y.aY3[aXz],
			aY4 = y.mV[aXz];
		y.mG = aY0, y.mK[aXz] = y.mK[aY0], y.mV[aXz] = y.mV[aY0], y.aXv[aXz] = y.aXv[aY0], y.a7U[aXz] = y.a7U[aY0], y.aY3[aXz] = y.aY3[aY0], y.mJ[aXz] = y.mJ[aY0], y.mH[aXz] = y.mH[aY0], y.aY5[aXz] = y.aY5[aY0], y.mI[aXz] = y.mI[aY0], y.mU[aXz] =
			y.mU[aY0], y.a8Y[y.mK[aXz]] = aXz,
			function(aVZ) {
				var player = aVZ >> 3,
					y = bN.y,
					f5 = y.kU[player] - 1,
					aY8 = (player << 3) + f5;
				y.kU[player] = f5, aY8 !== aVZ && (y.a8Y[aVZ] = y.a8Y[aY8], y.mK[y.a8Y[aVZ]] = aVZ)
			}(aY1), bN.is.is[bM.ir(y.mV[aXz])][y.aY3[aXz]] = aXz, aY0 = bM.ir(aY4), aY1 = aY2, aY0 = bN.is.is[aY0], y = aY0.pop(), aY1 !== aY0.length && (aY0[aY1] = y, bN.y.aY3[y] = aY1)
	}
}

function aXD() {
	var aYA, aYB = 8,
		aYC = null;

	function aYH(xY, er, eC) {
		er *= 4;
		xY[er] = 255, xY[1 + er] = 255, xY[2 + er] = eC, xY[3 + er] = 255
	}

	function aYJ(i7, aX1) {
		var fC, fE, iP, er, aYL, aYM, i1 = aYB,
			i4 = bA.qt.getImageData(i7, i1, i1),
			xY = i4.data,
			lL = (i1 >> 1) - .5,
			aYO = bA.r1.a3K(aX1, .5);
		for (bA.r1.a3M(aX1, aYO, 300) || bA.r1.a3O(aX1, 100), fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) aYM = (i1 - 1.5) * (i1 - 1.5) / 4, xY[er = 4 * (fE * i1 + fC)] = (aYL = (iP = (iP = fC - lL) * iP + (iP = fE - lL) * iP) <= (i1 - 4.5) * (i1 - 4.5) / 4 ? aYO : aX1)[0], xY[1 + er] = aYL[1], xY[2 + er] = aYL[2],
				xY[3 + er] = aYM < iP ? 0 : 255;
		i7.putImageData(i4, 0, 0)
	}
	this.dd = function() {
		var eC, i1, a3m, i7, i4, xY;
		(aYA = aYA || new Array(aD.f2)).fill(null), eC = 255, i1 = aYB + 4, a3m = bA.qt.xN(i1, i1), i7 = bA.qt.getContext(a3m, !0), i4 = bA.qt.getImageData(i7, i1, i1), aYH(xY = i4.data, i1 + 1, eC), aYH(xY, i1 + 2, eC), aYH(xY, 2 * i1 + 1, eC),
			aYH(xY, 2 * i1 - 3, eC), aYH(xY, 2 * i1 - 2, eC), aYH(xY, 3 * i1 - 2, eC), aYH(xY, i1 * (i1 - 3) + 1, eC), aYH(xY, i1 * (i1 - 2) + 1, eC), aYH(xY, i1 * (i1 - 2) + 2, eC), aYH(xY, i1 * (i1 - 2) - 2, eC), aYH(xY, i1 * (i1 - 1) - 3, eC),
			aYH(xY, i1 * (i1 - 1) - 2, eC), i7.putImageData(i4, 0, 0), aYC = a3m,
			function() {
				if (aD.hz)
					for (var a3m = new Array(bg.kn.length), f5 = aD.f2, aYF = aYA, aBX = bg.aBX, aB = 0; aB < f5; aB++) {
						var a6F = aBX[aB];
						a3m[a6F] || (a3m[a6F] = function(a6F) {
							var a3m = bA.qt.xN(aYB, aYB),
								i7 = bA.qt.getContext(a3m, !0),
								g = bO.fe;
							return g.set(bg.aYK[a6F]), aYJ(i7, g), a3m
						}(a6F)), aYF[aB] = a3m[a6F]
					}
			}()
	}, this.vW = function() {
		var aB, player, aYP, aO4, ho, iO, aYR, aYT, aYU, mV = bN.y.mV,
			mK = bN.y.mK,
			a7U = bN.y.a7U,
			aY5 = bN.y.aY5,
			aYV = aYA,
			aYW = aD.ep,
			f5 = bN.y.mG,
			aYX = h.i,
			aYY = h.j,
			aYZ = bS.fG << 4,
			eu = iG,
			ej = eu / aYB,
			nQ = ii / eu,
			nR = ij / eu,
			iP = (aYX + ii) / eu - nQ,
			iS = (aYY + ij) / eu - nR,
			i7 = vX;
		for (i7.imageSmoothingEnabled = eu < 9, bA.qt.textAlign(i7, 1), bA.qt.textBaseline(i7, 1), aB = 0; aB < f5; aB++) player = mK[aB] >> 3, ho = a7U[aB], aYP = .9 + .1 * Math.log10(ho), aO4 = (iO = mV[aB]) % aYZ / 16 - aYP, iO = aYY * (Math
			.floor(iO / aYZ) / 16 - aYP - nR) / iS, aYR = -2 * (aYU = eu * aYP) * (1 + (aYT = +(player === aYW)) / 8), aYT = aYT * aYU / 4, (aYU = aYX * (aO4 - nQ) / iP) < aYR || iO < aYR || aYX + aYT < aYU || aYY + aYT < iO || (aO4 = 2 *
			aYP * ej, aYR = aYP * eu, null === (aYT = aYV[player]) && (aYV[player] = aYT = function(player) {
				var a3m = bA.qt.xN(aYB, aYB);
				return aYJ(bA.qt.getContext(a3m, !0), ac.a89(player)), a3m
			}(player)), player === aYW && (i7.setTransform(aO4, 0, 0, aO4, aYU - 2 * aO4, iO - 2 * aO4), i7.drawImage(aYC, 0, 0)), i7.setTransform(aO4, 0, 0, aO4, aYU, iO), i7.drawImage(aYT, 0, 0), (aYP = Math.floor(function(ho) {
				if (ho < 1e3) return .42;
				if (ho < 1e4) return .34;
				if (ho < 1e6) return .26;
				if (ho < 1e8) return .19;
				return .15
			}(ho) * aYR)) < 6) || (i7.setTransform(1, 0, 0, 1, 0, 0), i7.fillStyle = aY5[aB] ? bB.oY : bB.o0, i7.font = bA.qt.sk(1, aYP), i7.fillText(bA.rs.a0B(ho), aYU + aYR, iO + aYR + .1 * aYP));
		i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aXN() {
	var aYc;
	this.dd = function() {
		if (aD.hz) {
			var hv = 1 - aD.yB;
			aYc = new Array(bg.kn.length);
			for (var aB = aD.yA - 1; 0 <= aB; aB--) {
				var a6F = bg.kn[aB + hv];
				aYc[a6F] = bP.y.aYe(20, bg.aYf[a6F])
			}
			9 === aD.ki && (aYc[1] = bP.y.aYe(20, bg.aYf[1]))
		} else aYc = [bP.y.aYe(20, bg.aYf[7])]
	}, this.vW = function() {
		var nk = iG;
		if (!(5 <= nk)) {
			var aYX = h.i,
				aYY = h.j,
				nQ = ii / nk,
				nR = ij / nk,
				nd = (aYX + ii) / nk,
				ne = (aYY + ij) / nk,
				ge = -20 * nk,
				aYh = .5 * ge,
				aYZ = bS.fG << 4,
				f5 = bN.y.mG,
				mV = bN.y.mV,
				mK = bN.y.mK,
				aBX = bg.aBX,
				a3m = aYc,
				i7 = vX;
			3 < nk && (i7.globalAlpha = .5 * (5 - nk));
			for (var aB = 0; aB < f5; aB++) {
				var iO = mV[aB],
					fC = aYX * (iO % aYZ / 16 - nQ) / (nd - nQ) + aYh,
					iO = aYY * (Math.floor(iO / aYZ) / 16 - nR) / (ne - nR) + aYh;
				aYX < fC || aYY < iO || fC < ge || iO < ge || (i7.setTransform(nk, 0, 0, nk, fC, iO), i7.drawImage(a3m[aBX[mK[aB] >> 3]], 0, 0))
			}
			i7.globalAlpha = 1, i7.setTransform(nk, 0, 0, nk, 0, 0)
		}
	}
}

function aXR() {
	this.aYk = function(player, id) {
		for (var aYl = ag.gm[player], f5 = aYl.length, aB = 0; aB < f5; aB++)
			if (bM.iH(aYl[aB], id)) return !0;
		return !1
	}, this.aYm = function(player, er) {
		for (var iX, aYn, ej, aYl = ag.gm[player], f5 = aYl.length, i = bS.fG, aYp = bM.fD(er), aYq = bM.fF(er), fB = -1, min = bS.fG * bS.fG + bS.fH * bS.fH, id = ac.en(bM.ev(er)), aB = 0; aB < f5; aB++)(aYn = (aYn = aYp - (iX = (ej = aYl[
			aB]) >> 2) % i) * aYn + (aYn = aYq - ~~((.5 + iX) / i)) * aYn) < min && bM.iH(ej, id) && (min = aYn, fB = iX);
		return fB
	}, this.lG = function(iW, iX) {
		for (var id = ac.en(bM.ev(iX)), iI = bM.iA, ej = bM.ev(iW), aYr = -1, aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			ac.iJ(eu) && ac.en(eu) === id && (-1 === aYr || bM.iY(bM.et(eu), iX) < bM.iY(aYr, iX)) && (aYr = bM.et(eu))
		}
		return aYr
	}, this.lp = function(player, er) {
		for (var iI = bM.iA, ej = bM.ev(er), aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			if (ac.gf(eu) && ac.z0(player, eu)) return !0
		}
		return !1
	}, this.lq = function(player, er) {
		for (var iI = bM.iA, ej = bM.ev(er), aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			if (ac.ew(eu)) return !0;
			if (ac.gf(eu)) {
				eu = ac.ex(eu);
				if (player !== eu && bs.ey(player, eu)) return !0
			}
		}
		return !1
	}, this.mM = function(er) {
		for (var iI = bM.iA, ej = bM.ev(er), aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			if (ac.gf(eu)) {
				eu = ac.ex(eu);
				if (bA.gR.jn(eu)) return eu
			}
		}
		return -1
	}, this.aXx = function(ej) {
		if (ac.iJ(ej))
			for (var iI = bM.iA, aB = 0; aB < 4; aB++)
				if (ac.f0(ej + iI[aB])) return !0;
		return !1
	}, this.nP = function(player, id) {
		for (var tU = player << 3, tV = tU + bN.y.kU[player], mJ = bN.y.mJ, a8Y = bN.y.a8Y, aB = tU; aB < tV; aB++) {
			var a8Z = a8Y[aB];
			if (mJ[a8Z] === id) return a8Z
		}
		return -1
	}, this.nU = function(player) {
		return 0 === bN.y.kU[player] ? -1 : bN.y.a8Y[player << 3]
	}, this.a6X = function(lf, lg) {
		var f5 = bN.y.mG;
		if (f5 < 1) return -1;
		for (var mV = bN.y.mV, aYs = 80, aQO = -1, aB = 0; aB < f5; aB++) {
			var fL = bM.iL(lf, lg, mV[aB]);
			fL < aYs && (aYs = fL, aQO = aB)
		}
		return function(aB, lf, lg) {
			if (aB < 0) return;
			var aYz = bN.y.mV[aB],
				aZ0 = bM.iR(aYz),
				aYz = bM.iU(aYz),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7U[aB]));
			return aB = Math.max(aB, bM.ik(bA.qt.tZ(.02, 1.7))), bL.aO3(bM.iQ(lf), bM.iT(lg), aZ0, aYz, aB)
		}(aQO, lf, lg) ? aQO : -1
	}, this.aXe = function(nN) {
		for (var f5 = bN.y.mG, mJ = bN.y.mJ, aB = 0; aB < f5; aB++)
			if (mJ[aB] === nN) return bO.fh[2] = aB, !0;
		return !1
	}, this.aIk = function(player) {
		for (var tU = player << 3, tV = tU + bN.y.kU[player], a8Y = bN.y.a8Y, a7U = bN.y.a7U, ho = 0, aB = tU; aB < tV; aB++) ho += a7U[a8Y[aB]];
		return ho
	}, this.aYu = function(player, aXu) {
		aXu = bN.y.mI[aXu];
		return this.lp(player, aXu[aXu.length - 1])
	}, this.aYv = function(iW, iX, fL, aYw) {
		var ia = bM.fD(iW),
			iW = bM.fF(iW),
			ic = bM.fD(iX),
			iX = bM.fF(iX),
			ic = (fL = Math.max(fL, 1), ic - ia),
			iX = iX - iW,
			iP = bL.fW(Math.abs(ic) * aYw, fL),
			aYw = bL.fW(Math.abs(iX) * aYw, fL);
		return bM.fS(ia + Math.sign(ic) * iP, iW + Math.sign(iX) * aYw)
	}, this.aXo = function(ll, er) {
		for (var f5 = ll.length - 1, fC = bM.fD(er), fE = bM.fF(er), aB = 0; aB < f5; aB++) {
			var iW = ll[aB],
				iX = ll[aB + 1],
				nQ = bM.fD(iW),
				iW = bM.fF(iW),
				nd = bM.fD(iX),
				iX = bM.fF(iX);
			if (!(fC !== nQ && fC !== nd && Math.sign(fC - nQ) === Math.sign(fC - nd) || fE !== iW && fE !== iX && Math.sign(fE - iW) === Math.sign(fE - iX))) {
				if (nQ === nd || iW === iX) return aB;
				if (Math.abs(fC - nQ) === Math.abs(fE - iW) && Math.abs(fC - nd) === Math.abs(fE - iX)) return aB
			}
		}
		return -1
	}, this.aCF = function() {
		for (var aZ2 = m1[0], mK = bN.y.mK, mG = bN.y.mG, g = [], aB = 0; aB < mG; aB++) bA.gR.l4(aZ2, mK[aB] >> 3) && g.push(aB);
		return g
	}, this.ln = function(player, ll) {
		for (var tU = player << 3, tV = tU + bN.y.kU[player], a8Y = bN.y.a8Y, mI = bN.y.mI, hX = ll[0], l3 = ll[ll.length - 1], aB = tU; aB < tV; aB++) {
			var gd = mI[a8Y[aB]];
			if (gd[0] === hX && gd[gd.length - 1] === l3) return !0
		}
		return !1
	}
}

function aXS() {
	function aZ5(player, aXu) {
		aXu = bM.iq(bN.y.mV[aXu]), aXu = ac.en(bM.ev(aXu));
		return !!bN.lF.aYk(player, aXu)
	}

	function aZ3(player) {
		return bN.mW.mX(player) && !bN.lm.ls()
	}
	this.hj = function(player, er) {
		return !!aZ3(player) && -1 !== (er = function(player, er) {
			for (var f5 = bN.y.mG, mV = bN.y.mV, mK = bN.y.mK, aYs = bM.iC(), aQO = -1, aB = 0; aB < f5; aB++) {
				var fL = bM.iV(er, bM.iq(mV[aB]));
				fL < aYs && bA.gR.l4(player, mK[aB] >> 3) && (aYs = fL, aQO = aB)
			}
			return aQO
		}(player, er)) && !!aZ5(player, er) && (bO.fh[3] = bN.y.mJ[er], !0)
	}, this.pW = function(player, nN) {
		return !!aZ3(player) && !!bN.lF.aXe(nN) && !!aZ5(player, bO.fh[2])
	}, this.qP = function(player, nN, aZ6) {
		return !! function(player, nN, aZ6) {
			if (aZ3(player) && bN.lF.aXe(nN)) {
				nN = bO.fh[2];
				if (bA.gR.l4(player, bN.y.mK[nN] >> 3)) {
					if (function(player, aXu) {
							return bN.lF.aYu(player, aXu) && (bO.g[0] = bN.lm.lu(bN.y.mI[aXu]), bO.fh[1] = 6, !0)
						}(player, nN)) return 1;
					var aXZ = bM.iq(bN.y.mV[nN]),
						aZA = bN.lF.aYm(player, aXZ);
					if (-1 !== aZA) {
						aZA = bM.iV(aZA, aXZ);
						if (!(aZ6 && 120 < aZA)) {
							aZ6 = function(aXu, aZB, aXZ) {
								var ll = bN.y.mI[aXu],
									aXu = bN.y.mU[aXu],
									aZD = bM.iV(aXZ, ll[aXu + 1]);
								if (aZB <= aZD) return bN.lF.aYv(aXZ, ll[aXu + 1], aZD, aZB);
								for (var fL = aZB - aZD, f5 = ll.length - 1, aB = aXu + 1; aB < f5; aB++) {
									var aZE = bM.iV(ll[aB], ll[aB + 1]);
									if (fL <= aZE) return bN.lF.aYv(ll[aB], ll[aB + 1], aZE, fL);
									fL -= aZE
								}
								return ll[f5]
							}(nN, aZA, aXZ);
							if (bN.lD.qM(player, aZ6, 1)) return bO.fh[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nN, aZ6) && (player = bO.fh[2], bN.y.mH[player] = 64 + bN.y.mH[player] % 64, bN.mP.ec(nN, bN.y.mZ), !0)
	}
}

function aXH() {
	function aZJ(player, ho, aZH, aXZ) {
		var jZ;
		if (ac.ew(aZH)) jZ = aD.f2;
		else {
			if ((jZ = ac.ex(aZH)) === player) return void bd.gV(player, ho - bA.gR.gU(player, ho), 12);
			if (!bs.ey(player, jZ)) return void b8.kS.pl(player, jZ, ho)
		}
		ad.jl(player, jZ) || ad.k4(player) ? (ag.gX[player].push(aXZ << 2), ad.ec(player, ho, jZ), aF.jX(player, !0)) : bd.gV(player, ho, 12)
	}
	this.eY = function() {
		for (var mH = bN.y.mH, mV = bN.y.mV, aXv = bN.y.aXv, aB = bN.y.mG - 1; 0 <= aB; aB--) 65535 === aXv[aB] && function(aB, aXZ, hw) {
			if (6 === hw) {
				if (bN.mP.aXi(aB, aXZ)) return bN.y.mU[aB]++, bN.y.aXv[aB] = 0, 0
			} else {
				var player = bN.y.mK[aB] >> 3,
					aB = bN.y.a7U[aB];
				bd.aZI(player), hw < 4 ? aZJ(player, aB, aXZ + bM.i9[hw] << 2, aXZ) : 4 === hw ? function(player, ho, aXZ) {
					var aB, f9, iI = bM.iA,
						eu = bM.ev(aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.ew(f9)) return aZJ(player, ho, f9, aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9) && !ac.z0(player, f9)) return aZJ(player, ho, f9, aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9)) return aZJ(player, ho, f9, aXZ)
				}(player, aB, aXZ) : 5 === hw && function(player, ho, aXZ) {
					var aB, f9, iI = bM.iA,
						eu = bM.ev(aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9) && ac.z0(player, f9)) return aZJ(player, ho, f9, aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9)) return aZJ(player, ho, f9, aXZ);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.ew(f9)) return aZJ(player, ho, f9, aXZ)
				}(player, aB, aXZ)
			}
			return 1
		}(aB, bM.iq(mV[aB]), mH[aB] % 64) && (bN.mP.aXf(aB), bN.aIn.aXy(aB))
	}, this.aZG = function(player, er, hw, nN, ho) {
		if (!(5 <= hw)) {
			var aYW = aD.ep;
			if (bA.gR.hH(aYW) && bs.ey(player, aYW) && player !== aYW && 0 !== ag.gm[aYW].length && bA.gR.a4N(player, 5)) {
				for (var aZH, fJ = !1, aB = 0; aB < 4; aB++)
					if (aZH = er + bM.i9[aB] << 2, ac.f0(aZH) && !ac.ew(aZH) && ac.ex(aZH) === aYW) {
						fJ = !0;
						break
					} fJ && (aN.a7d(719, 0), hw = ho < 25e3 ? L(470) + " (" + bA.rs.a0B(ho) + ") ⛵" : L(471) + " (" + bA.rs.a0B(ho) + ") 🚢", aN.a1I(180, hw, 719, player, bB.oX, bB.nx, -1, !0, void 0, {
					fP: 1,
					nN: nN
				}))
			}
		}
	}
}

function aXE() {
	this.ke = 512, this.aXw = 8, this.mG = 0, this.mZ = 0, this.mK = new Uint16Array(this.ke), this.mV = new Uint32Array(this.ke), this.aXv = new Uint16Array(this.ke), this.a7U = new Uint32Array(this.ke), this.aY3 = new Uint16Array(this.ke), this
		.mJ = new Uint16Array(this.ke), this.mH = new Uint8Array(this.ke), this.aY5 = new Uint8Array(this.ke), this.mI = new Array(this.ke), this.mU = new Uint16Array(this.ke), this.kU = new Uint8Array(aD.f2), this.a8Y = new Uint16Array(this.aXw * aD
			.f2), this.dd = function() {
			this.mG = 0, this.mZ = 0, this.kU.fill(0), this.mI.fill(null)
		}, this.mb = function(player) {
			var ho = bO.fc[0],
				mL = bO.fh[1],
				ll = bO.g[0],
				aZM = this.mZ,
				f5 = this.mG,
				aZN = bM.ip(ll[0]),
				aZO = this.kU[player],
				aZP = (player << 3) + aZO;
			this.mK[f5] = aZP, this.mV[f5] = aZN, this.aXv[f5] = 0, ho < 60 && (bA.gR.gS(player, 60 - ho), ho = 60), this.a7U[f5] = ho, this.aY3[f5] = bN.is.mb(f5, bM.ir(aZN)), this.mJ[f5] = aZM, this.mH[f5] = mL, this.aY5[f5] = 0, this.mI[f5] = ll,
				this.mU[f5] = 0, this.mZ = (aZM + 1) % 65536, this.kU[player] = aZO + 1, this.a8Y[aZP] = f5, this.mG++, bN.mL.aZG(player, ll[ll.length - 1], mL, aZM, ho)
		}, this.eY = function() {
			bN.mL.eY();
			for (var gd = aD.ep, eU = bN.lF.aIk(gd), sV = (! function(sV) {
					for (var aZU, mV = sV.mV, a7U = sV.a7U, aY5 = sV.aY5, aXv = sV.aXv, aY3 = sV.aY3, mI = sV.mI, mU = sV.mU, sV = sV.mG, aYZ = bS.fG << 4, aB = sV - 1; 0 <= aB; aB--) {
						var aZV = mV[aB],
							ll = mI[aB],
							aZW = mU[aB],
							aZN = bM.ip(ll[aZW]),
							aZX = bM.ip(ll[aZW + 1]),
							aZY = aZN % aYZ,
							aZN = ~~((aZN + .5) / aYZ),
							aZa = aZX % aYZ,
							aZb = ~~((aZX + .5) / aYZ),
							aZc = aZa - aZY,
							aZd = aZb - aZN,
							f8 = Math.max(~~Math.sqrt(aZc * aZc + aZd * aZd + .5), 1),
							aZe = a7U[aB],
							aZe = (aZe = aY5[aB] ? 4e4 : 25e4 + Math.min(20 * aZe, 3e5) + Math.min(aZe >> 3, 5e4), aXv[aB] + Math.max(~~((aZe + .5) / f8), 1));
						65535 <= aZe ? aZW + 2 < ll.length ? (mU[aB] = aZW + 1, mV[aB] = aZU = function(aB, aZf, aZY, aZZ, aZW, f8, ll, aYZ) {
							aZf = Math.min(aZf - 65535, 65535);
							var ll = bM.ip(ll[aZW + 2]),
								aZW = ll % aYZ - aZY,
								ll = ~~((ll + .5) / aYZ) - aZZ,
								aZi = Math.max(~~Math.sqrt(aZW * aZW + ll * ll + .5), 1);
							return aZf = Math.min(Math.floor((f8 * aZf + .5) / aZi), 65534), bN.y.aXv[aB] = aZf, aZY + bL.fW(aZf * aZW, 65535) + aYZ * (aZZ + bL.fW(aZf * ll, 65535))
						}(aB, aZe, aZa, aZb, aZW, f8, ll, aYZ)) : (mV[aB] = aZU = aZX, aXv[aB] = 65535) : (aXv[aB] = aZe, mV[aB] = aZU = aZY + bL.fW(aZe * aZc, 65535) + aYZ * (aZN + bL.fW(aZe * aZd, 65535))), aY3[aB] = bN.is.aZh(aY3[aB],
							aZV, aZU)
					}
				}(this), ! function(sV) {
					if (bf.kN() % 2 == 1) {
						var aB, hx, lL, fP, ed, aZj, zp, aZk, hX, nQ, nR, aZN, aZl, aA1, aZn, l3, f5 = sV.mG,
							mV = sV.mV,
							mK = sV.mK,
							a7U = sV.a7U,
							aY5 = sV.aY5,
							is = bN.is.is,
							aZp = is.length,
							aZq = bN.is.aZq,
							aYZ = bS.fG << 4,
							aZr = aD.hz,
							aVO = bg.f3,
							ge = (f5 - 1) * (bL.fW(bf.kN(), 2) % 2);
						for (aB = 0; aB < f5; aB++)
							for (hx = Math.abs(aB - ge), aZN = mV[hx], lL = bM.ir(aZN), hX = mK[hx] >> 3, nQ = aZN % aYZ, nR = ~~((aZN + .5) / aYZ), aZn = a7U[hx], fP = 0; fP < 9; fP++)
								if (!((aZj = lL + aZq[fP]) < 0 || aZp <= aZj))
									for (aZk = is[aZj], zp = aZk.length, ed = 0; ed < zp; ed++) aZl = aZk[ed], l3 = mK[aZl] >> 3, hX == l3 || aZr && aVO[hX] === aVO[l3] && aVO[hX] || (l3 = mV[aZl], (aA1 = nQ - l3 % aYZ) * aA1 + (aA1 = nR - ~~
										((l3 + .5) / aYZ)) * aA1 < 14400 && (l3 = a7U[aZl], aA1 = l3 <= aZn ? Math.max(1, bL.fW(l3 + bL.fW(aZn - l3, 10), 10)) : Math.max(1, bL.fW(aZn, 10)), a7U[aZl] = Math.max(l3 - aA1, 0), aY5[aZl] =
										4))
					}
				}(this), ! function(sV) {
					if (bf.kN() % 5 == 3)
						for (var a7U = sV.a7U, f5 = sV.mG, aB = 0; aB < f5; aB++) {
							var ho = a7U[aB];
							a7U[aB] = Math.max(ho - Math.max(1, ho >> 7), 0)
						}
				}(this), this), a7U = sV.a7U, aY5 = sV.aY5, aB = sV.mG - 1; 0 <= aB; aB--) aY5[aB] = aY5[aB] >> 1, 0 === a7U[aB] && (bN.mP.aXf(aB), bN.aIn.aXy(aB));
			bd.gV(gd, eU - bN.lF.aIk(gd), 15)
		}
}

function aXF() {
	this.aZs = 32, this.fC = 0, this.fE = 0, this.it = 0, this.aZt = 0, this.aZu = 4, this.is = null, this.aZq = new Int16Array(9), this.dd = function() {
		this.it = 1 + bL.fW(bS.fG - 1, this.aZs), this.aZt = 1 + bL.fW(bS.fH - 1, this.aZs), this.is = new Array(this.it * this.aZt), bA.r1.a3J(this.is);
		var fC, fE, aZq = this.aZq,
			i = this.it;
		for (fC = -1; fC <= 1; fC++)
			for (fE = -1; fE <= 1; fE++) aZq[3 * (1 + fE) + 1 + fC] = fE * i + fC
	}, this.mb = function(aZw, aB) {
		return this.is[aB].push(aZw), this.is[aB].length - 1
	}, this.aZh = function(aZx, aZN, aZX) {
		var aZy, aZz, aZN = bM.ir(aZN),
			aZX = bM.ir(aZX);
		return aZN === aZX ? aZx : (aZy = this.is[aZN].pop(), this.is[aZN].length === aZx ? this.mb(aZy, aZX) : (aZz = this.is[aZN][aZx], this.is[aZN][aZx] = aZy, bN.y.aY3[aZy] = aZx, this.mb(aZz, aZX)))
	}
}

function aXJ() {
	this.lE = function(player, aa0) {
		return -1 !== aa0 && !!bN.lF.lq(player, aa0) && this.qM(player, aa0, 0)
	}, this.qM = function(player, aa0, aa1) {
		player = function(player, aa0, aa1) {
			var aZA = bN.lF.aYm(player, aa0);
			if (-1 === aZA) return -1;
			aZA = bN.lF.lG(aZA, aa0);
			if (-1 === aZA) return -1;
			var lj = bN.lm.lr(aZA, aa0);
			if (0 <= lj) return lj;
			if (bN.lm.ls()) return -1;
			if (0 <= (lj = bN.lm.lr(aa0, aZA))) return bN.lm.lt(bN.lm.lu(bN.lm.get(lj)));
			if (aZA === aa0) return bN.lm.lt(new Uint32Array([aZA, aa0]));
			if (0 <= (lj = bN.aXK.qM(aZA, aa0))) return lj;
			return aa1 ? function(aa5, player) {
				var fm = bO.fm,
					eQ = (fm.fill(0), [aa5]),
					iB = (fm[aa5] = 1, bM.iB),
					aa6 = -1,
					f5 = eQ.length;
				for (; - 1 === aa6 && f5;) {
					for (var g = [], aB = 0; aB < f5; aB++)
						for (var er = eQ[aB], a57 = fm[er], f8 = 0; f8 < 8; f8++) {
							var x7, a1h, fB = er + iB[f8],
								ej = 4 * fB;
							ac.iJ(ej) ? (x7 = fm[fB], a1h = a57 + 5 + ((1 & f8) << 1), 0 === x7 ? (g.push(fB), fm[fB] = a1h) : fm[fB] = Math.min(a1h, x7)) : -1 === aa6 && f8 % 2 == 0 && ac.yx(player, ej) && (aa6 = er)
						}
					f5 = (eQ = g).length
				}
				return -1 !== aa6 ? function(iW, aa8) {
					var iB = bM.iB,
						aa9 = -1,
						hw = 0,
						mv = [];
					for (; aa8 !== iW;)(hw = function(er, hw) {
						var fm = bO.fm,
							iB = bM.iB,
							a57 = fm[er];
						if (a57 - fm[er + iB[hw]] != 5 + ((1 & hw) << 1))
							for (var fO = 0; fO < 8; fO++) {
								var f8 = fO + hw + 6 & 7;
								if (a57 - fm[er + iB[f8]] == 5 + ((1 & f8) << 1)) return f8
							}
						return hw
					}(aa8, hw)) !== aa9 && (mv.push(aa8), aa9 = hw), aa8 += iB[hw];
					mv.push(iW);
					var lj = bN.lm.lr(mv[0], iW);
					if (0 <= lj) return lj;
					return bN.lm.lt(new Uint32Array(mv))
				}(aa5, aa6) : -1
			}(aa0, player) : -1
		}(player, aa0, aa1);
		return -1 !== player && (bO.g[0] = bN.lm.get(player), !0)
	}
}

function aXL() {
	function aaB(hK, ib, ie) {
		for (var jg = Math.min(ib, ie), ni = Math.max(ib, ie), fE = jg + 1; fE < ni; fE++)
			if (!ac.iJ(bM.il(hK, fE))) return;
		return 1
	}

	function aaC(hM, ia, ic) {
		for (var jg = Math.min(ia, ic), ni = Math.max(ia, ic), fC = jg + 1; fC < ni; fC++)
			if (!ac.iJ(bM.il(fC, hM))) return;
		return 1
	}

	function aaD(ia, ib, ic, ie, aa3, aa0) {
		for (var f5 = Math.min(Math.abs(ic - ia), Math.abs(ie - ib)), iP = Math.sign(ic - ia), iS = Math.sign(ie - ib), aB = 0; aB < f5; aB++)
			if (!ac.iJ(bM.il(ia += iP, ib += iS))) return null;
		return ia === ic ? aaB(ia, ib, ie) ? new Uint32Array([aa3, bM.fS(ia, ib), aa0]) : null : aaC(ib, ia, ic) ? new Uint32Array([aa3, bM.fS(ia, ib), aa0]) : null
	}
	this.qM = function(aa3, aa0) {
		aa3 = function(aa3, aa0) {
			var ia = bM.fD(aa3),
				ib = bM.fF(aa3),
				ic = bM.fD(aa0),
				ie = bM.fF(aa0);
			if (ia === ic) {
				if (aaB(ia, ib, ie)) return new Uint32Array([aa3, aa0])
			} else {
				if (ib !== ie) return aaD(ia, ib, ic, ie, aa3, aa0) || aaD(ic, ie, ia, ib, aa3, aa0);
				if (aaC(ib, ia, ic)) return new Uint32Array([aa3, aa0])
			}
			return null
		}(aa3, aa0);
		return null === aa3 ? -1 : bN.lm.lt(aa3)
	}
}

function aXQ() {
	var aaE = [];
	this.dd = function() {
		aaE = []
	}, this.ls = function() {
		return 65536 === aaE.length
	}, this.lr = function(aa3, aa0) {
		for (var lm = aaE, f5 = lm.length, aB = 0; aB < f5; aB++) {
			var gd = lm[aB];
			if (gd[0] === aa3 && gd[gd.length - 1] === aa0) return aB
		}
		return -1
	}, this.lu = function(ll) {
		var aaF = new Uint32Array(ll.length);
		return aaF.set(ll), aaF.reverse()
	}, this.aXm = function(hX, l3) {
		var gY = hX.length - 1,
			aaG = new Uint32Array(gY + l3.length);
		return aaG.set(hX, 0), aaG.set(l3, gY), aaG
	}, this.aXr = function(hX, l3, wb, er, aaH) {
		aaH && (wb = (l3 = this.lu(l3)).length - wb - 2);
		aaH = l3.subarray(wb + 1 + (er === l3[wb + 1])), er = new Uint32Array(hX.length + aaH.length);
		return er.set(hX, 0), er.set(aaH, hX.length), er
	}, this.lt = function(ll) {
		return aaE.push(ll), aaE.length - 1
	}, this.get = function(aB) {
		return aaE[aB]
	}, this.lo = function() {
		return aaE
	}, this.aaJ = function(aa3, aa0) {
		return null
	}
}

function aXU() {
	this.eY = function(player, nN) {
		player = bN.lF.nP(player, nN);
		return !(player < 0 || !bN.mP.aXt(player) || (bN.mP.aXf(player), 0))
	}
}

function aXG() {
	var zU = 32,
		zT = new Array(2);

	function xN(ed) {
		var fC, fE, er, iS, iP, i1 = zU,
			a3m = bA.qt.xN(i1, i1),
			i7 = bA.qt.getContext(a3m, !0),
			i4 = bA.qt.getImageData(i7, i1, i1),
			xY = i4.data,
			lL = (i1 >> 1) - .5,
			lM = Math.sqrt(lL * lL);
		for (xY.fill(255), fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) iP = fC - lL, iS = fE - lL, er = 4 * (fE * i1 + fC), iP = 714 * (lM - Math.sqrt(iP * iP + iS * iS)) / lM, xY[2 + er] = ed, xY[3 + er] = 255 < iP ? 0 : iP;
		return i7.putImageData(i4, 0, 0), a3m
	}
	this.aaK = -1, this.dd = function() {
		this.aaK = -1, zT[0] || (zT[0] = xN(255), zT[1] = xN(0))
	}, this.aaL = function(i7, ej, fC, fE, eB, aB) {
		bA.gR.hH(aD.ep) && (i7.setTransform(ej *= 4 / 3 * .625, 0, 0, ej, fC - (eB *= 4 / 3), fE - eB), i7.drawImage(zT[+(bN.y.mJ[aB] === this.aaK)], 0, 0))
	}
}

function aXP() {
	function aVf(fC, f5, fE, aaM, aA7, fV, player) {
		if (!(fE < 1 || aA7 < fE))
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (bN.lF.aXx(ej) && !bA.r1.has(aaM, ac.en(ej)) && ac.yp(ej, player)) return ej >> 2;
				fC += fV
			}
		return -1
	}

	function aVj(fE, f5, fC, aaM, aVd, fV, player) {
		if (!(fC < 1 || aVd < fC)) {
			f5 = Math.max(f5, 0);
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (bN.lF.aXx(ej) && !bA.r1.has(aaM, ac.en(ej)) && ac.yp(ej, player)) return ej >> 2;
				fE += fV
			}
		}
		return -1
	}

	function aVn(iW, iX, aVa) {
		return -1 !== iX && (-1 === iW || bM.iY(iX, aVa) < bM.iY(iW, aVa)) ? iX : iW
	}
	this.hg = function(player, aVa) {
		if (bN.mW.mX(player))
			for (var aVb = bM.iC(), aaM = [];;) {
				var aa6 = function(aVa, aVb, aaM, player) {
					for (var hK = bM.fD(aVa), hM = bM.fF(aVa), aVd = bS.fG - 2, aA7 = bS.fH - 2, aVe = -1, f8 = 0; f8 < aVb; f8++) {
						var aA6 = Math.max(hK - f8, 1),
							aMW = Math.max(hM - f8, 1),
							yl = Math.min(hK + f8, aVd),
							yk = Math.min(hM + f8, aA7),
							iW = aVf(hK, yl - hK, hM - f8, aaM, aA7, 1, player),
							iX = aVf(hK - 1, hK - aA6 - 1, hM - f8, aaM, aA7, -1, player),
							yl = aVf(hK, yl - hK, hM + f8, aaM, aA7, 1, player),
							aA6 = aVf(hK - 1, hK - aA6 - 1, hM + f8, aaM, aA7, -1, player),
							aVi = aVj(hM, yk - hM - 1, hK - f8, aaM, aVd, 1, player),
							aVk = aVj(hM - 1, hM - aMW - 2, hK - f8, aaM, aVd, -1, player),
							yk = aVj(hM, yk - hM - 1, hK + f8, aaM, aVd, 1, player),
							aMW = aVj(hM - 1, hM - aMW - 2, hK + f8, aaM, aVd, -1, player);
						if (aVe = aVn(aVe, iW, aVa), aVe = aVn(aVe, iX, aVa), aVe = aVn(aVe, yl, aVa), aVe = aVn(aVe, aA6, aVa), aVe = aVn(aVe, aVi, aVa), aVe = aVn(aVe, aVk, aVa), aVe = aVn(aVe, yk, aVa), 0 <= (aVe = aVn(aVe, aMW, aVa)) &&
							f8 * f8 >= bM.iY(aVe, aVa)) return aVe
					}
					return -1
				}(aVa, aVb, aaM, player);
				if (-1 === aa6) break;
				var id = ac.en(bM.ev(aa6));
				if (bN.lF.aYk(player, id)) return !! function(player, aa6, aVa) {
					for (var hw = bM.iw(aa6, aVa), aB = 0; aB < 4; aB++) {
						var er = bM.iu(aa6, hw);
						if (ac.aIO(bM.ev(er), player)) return bO.fh[6] = hw, 1;
						hw = (hw + 1) % 4
					}
					return
				}(player, aa6, aVa) && (bO.fh[7] = aa6, !0);
				aaM.push(id)
			}
		return !1
	}
}

function dg() {
	this.aSy = [L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487)];
	var aaP = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCb = new Array(aaP.length), this.dd = function() {
		var g = bj.eQ.data[155].value.split(";"),
			lL = g.length;
		if (function() {
				for (var f5 = aaP.length, aB = 0; aB < f5; aB++) bX.aCb[aB] = aaP[aB]
			}(), !(lL > aaP.length))
			for (var aB = 0; aB < lL; aB++) g[aB].length && (this.aCb[aB] = g[aB])
	}, this.aT0 = function(eC, code) {
		for (var aCb = this.aCb, aaR = aaP, qa = (aCb[eC] = code, ""), f5 = aCb.length, aaS = [], aB = 0; aB < f5; aB++) aaS.push(aCb[aB] === aaR[aB] ? "" : aCb[aB]);
		f5--;
		for (aB = 0; aB < f5; aB++) qa += aaS[aB] + ";";
		bj.sL.sM(155, qa += aaS[f5])
	}, this.aSx = function() {
		bj.sL.sM(155, ""), this.dd()
	}, this.ed = function(code, eC) {
		return code === this.aCb[eC] || code === this.aCb[eC + 1]
	}
}

function dY() {
	var aaT = new Array(1),
		aaU = new Array(1),
		aaV = 20,
		eR = 0,
		aaW = !1;

	function aaY() {
		aaV++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aaU[aB] = 0, aaT[aB] = document.createElement("audio"), aaT[aB].src = src, aaT[aB].setAttribute("preload", "auto"), aaT[aB].setAttribute("controls", "none"), aaT[aB].style.display = "none", aaT[aB].onpause = function() {
					aaU[aB] = 1
				}, aaT[aB].oncanplaythrough = function() {
					aaU[aB] = 0 === aaU[aB] ? 1 : aaU[aB]
				}, document.body.appendChild(aaT[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aaW = !0
		}
	}, this.ua = function() {
		if (aaW) {
			aaW = !1;
			for (var aB = 0; 0 <= aB; aB--) aaT[aB].onpause = null, aaT[aB].oncanplaythrough = null, t.removeChild(document.body, aaT[aB]), aaT[aB] = null
		}
	}, this.play = function() {
		if (aaW) {
			var eU = performance.now();
			if (eR + 66 < eU)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aaU[aB]) return eR = eU, aaU[aB] = 2, void aaT[aB].play();
			0 < aaV && (aaV--, setTimeout(aaY, 66))
		}
	}
}

function ca() {
	this.a96 = function() {
		var aab;
		return !(al.kw < 3 || ag.gt[m1[0]] >= aD.kA >> 1) && (aD.hz ? 9 !== aD.ki && (aab = ae.aJw(), !(2 * ae.aJx(bh.kz()) >= aab)) : function() {
			if (8 === aD.ki) return !1;
			var aab = ae.aJw();
			if (2 * ag.h7[m1[0]] >= aab) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aZO = aD.kQ, h7 = ag.h7, aB = 0; aB < aZO; aB++) h7[aB] = 512;
			var aZP = aD.y3,
				kd = aE.kd,
				ho = aE.ho;
			for (aB = aZO; aB < aZP; aB++) h7[aB] = kd[ho[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f5 = aD.y3, h7 = ag.h7, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f5; aB++) h7[aB] = sResourcesValue
		} : function() {
			for (var f5 = aD.y3, h7 = ag.h7, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f5; aB++) h7[aB] = sResourcesData[aB]
		})();
		bd.mv[8] = ag.h7[aD.ep]
	}
}

function dP() {
	var aIW = 501,
		aah = (this.aag = new Uint32Array(aIW), this.a4S = new Uint32Array(aIW), this.aCG = new Uint16Array(aIW), this.aT6 = 0, 1),
		un = 0;

	function aak(self) {
		self.max.fill(0)
	}

	function aam(self, aB) {
		self.max[0] = Math.max(self.aag[aB], self.max[0]), self.max[1] = Math.max(self.a4S[aB], self.max[1]), self.max[2] = Math.max(self.aCG[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aai = 0, this.mv = new Array(21), this.aaj = null, this.de = function() {
		this.aaj = [L(488), L(489), L(490), L(491), L(492), L(493), L(494), L(495), L(316), L(317), L(496), L(497), L(498), L(499), "", L(500), L(501), L(502), L(274), L(503), L(504)]
	}, this.dd = function() {
		this.aT6 = 0, aah = 1, this.aai = 0, un = 0, aak(this), this.mv.fill(0)
	}, this.qJ = function(player, ih) {
		bA.gR.a4M(player) && (this.mv[0] += ih + 1, this.mv[1]++, this.mv[12] += bO.fc[1])
	}, this.po = function(player, pR) {
		__fx.donationsTracker.logDonation(player, pR, bO.fc[0]);
		player === aD.ep && (aN.po(bO.fc[0], bO.fc[1], pR), this.mv[12] += bO.fc[1], this.mv[16] += bO.fc[0]), pR === aD.ep && (aN.a7h(bO.fc[0], player), this.mv[10] += bO.fc[0])
	}, this.qN = function(player) {
		bA.gR.a4M(player) && (this.mv[2]++, this.mv[12] += bO.fc[1])
	}, this.qV = function(player) {
		bA.gR.a4M(player) && (this.mv[19]++, this.mv[12] += bO.fc[1])
	}, this.aZI = function(player) {
		bA.gR.a4M(player) && this.mv[20]++
	}, this.gV = function(player, a57, eC) {
		bA.gR.a4M(player) && (this.mv[eC] += a57)
	}, this.eY = function() {
		var self;
		this.aai || 0 < un-- || ((self = this).aag[self.aT6] = ag.gt[aD.ep], self.a4S[self.aT6] = ag.h7[aD.ep], self.aCG[self.aT6] = ae.aCH(aD.ep), aam(self, self.aT6), self.aT6++, self.aT6 === aIW && function(self) {
			aak(self), aam(self, 0), self.aT6 = 1 + bL.fW(aIW, 2);
			for (var aB = 1; aB < self.aT6; aB++) self.aag[aB] = self.aag[2 * aB], self.a4S[aB] = self.a4S[2 * aB], self.aCG[aB] = self.aCG[2 * aB], aam(self, aB);
			aah *= 2
		}(self), un = aah - 1, be.mm(), 0 === ag.mz[aD.ep] && (self.aai = bf.kN()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.tH = 0, this.tI = 0, this.aao = 0, this.aap = 0, this.a9K = 0, this.u0 = 0;
	var aar = this.aaq = 0;
	this.aas = 0, this.aat = 0, this.aau = 0, this.a8f = 0, this.eC = 0, this.aBr = null, this.hr = !1, this.aav = -1, this.aaw = !1, this.aax = [0, 0], this.de = function() {
		this.aBr = [L(505), L(117, 0, "Balance"), L(116, 0, "Interest"), L(506)]
	}, this.dd = function() {
		this.hr = !1, this.aav = -1, this.aaw = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f8 = a0.a1.iE() && h.i < h.j ? 1 : a0.a1.iE() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f8 * this.i), this.i -= a0.a1.iE() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8f = Math.floor(this.j / 150), this.a8f = Math.max(this.a8f, 1.5), this.tH = Math.floor(1 + .02 * this
			.i), this.tI = Math.floor(1 + .04 * this.i), this.a9K = this.tI, aar = Math.floor(.75 * this.a9K), this.u0 = Math.floor(1 + .075 * this.i), this.aas = Math.floor(1 + .1125 * this.i), this.aat = Math.floor(this.i * (a0.a1.iE() ? .03 :
				.029)), this.aat = Math.max(this.aat, 4), this.aau = Math.floor(.035 * this.i), this.aau = Math.max(this.aau, 4), this.aaq = this.j - 2 * this.a9K - this.u0 - this.aas, this.hr && this.aay()
	}, this.hI = function(lf, lg) {
		var y6, y5;
		return !!this.hr && (y5 = lf, y6 = lg, lf -= bL.fW(h.i - this.i, 2), lg -= bL.fW(h.j - this.j, 2), lf < 0 || lg < 0 || lf >= this.i || lg >= this.j || lf >= this.i - this.aas && lg < this.aas ? -1 !== aM.hI(y5, y6) || bC.hI(y5, y6) ||
			this.sA() : lg < this.aas || (lg < this.j - this.u0 ? (this.aaw = !0, this.aav = (lf - 2 * this.tH - this.aao) / this.aap, 3 !== this.eC && (bf.dk = !0)) : (y5 = (y5 = Math.floor(lf / (this.i / this.aBr.length))) < 0 ? 0 : y5 >=
				this.aBr.length ? this.aBr.length - 1 : y5) !== this.eC && (this.eC = y5, this.aay(), bf.dk = !0)), !0)
	}, this.a2S = function(lf, lg) {
		return this.aax[0] = lf, this.aax[1] = lg, !(!this.hr || !this.aaw || (lf -= bL.fW(h.i - this.i, 2), lg = this.aav, this.aav = (lf - 2 * this.tH - this.aao) / this.aap, (0 <= this.aav && this.aav <= 1 || 0 <= lg && lg <= 1) && (bf.dk = !
			0), 0))
	}, this.a2r = function() {
		this.aaw && (this.aaw = !1)
	}, this.a33 = function() {
		this.hr ? this.sA() : this.show()
	}, this.show = function() {
		bd.aT6 < 2 || (this.hr = !0, this.aay())
	}, this.sA = function() {
		this.hr = !1, this.aav = -1, bf.dk = !0
	}, this.aay = function() {
		this.eC < 2 ? this.aao = aQ.measureText(bA.rs.a0B(bd.max[this.eC]), bA.qt.sk(0, this.aat)) : 2 === this.eC && (this.aao = aQ.measureText(bA.rs.a50(6, 2), bA.qt.sk(0, this.aat))), this.aap = this.i - 2 * this.tH - this.aao - this.tI
	}, this.mm = function() {
		this.hr && this.aay()
	}, this.vW = function() {
		this.hr && this.a9c()
	}, this.a9c = function() {
		var fC = bL.fW(h.i - this.i, 2),
			fE = bL.fW(h.j - this.j, 2);
		vX.setTransform(1, 0, 0, 1, fC, fE), vX.fillStyle = bB.nx, vX.fillRect(0, this.aas, this.i, this.j - this.aas), this.aaz(), this.aRf(), vX.strokeRect(0, 0, this.i, this.j), bA.qt.textAlign(vX, 2), vX.font = bA.qt.sk(0, this.aat), 0 ===
			this.eC ? this.ab0(bd.aag, fC, fE) : 1 === this.eC ? this.ab0(bd.a4S, fC, fE) : 2 === this.eC ? this.ab1(fC, fE) : 3 === this.eC && (this.ab2(fC, fE), this.ab3(fC, fE)), aM.a6o(Math.floor(fC + this.i - .725 * this.aas), Math.floor(
				fE + .275 * this.aas), Math.floor(.45 * this.aas)), vX.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aaz = function() {
		var aB, eU;
		for (vX.lineWidth = this.a8f, bA.qt.textBaseline(vX, 1), bA.qt.textAlign(vX, 1), vX.strokeStyle = bB.o0, vX.font = bA.qt.sk(1, this.aau), eU = this.i / this.aBr.length, vX.fillStyle = bB.oM, vX.fillRect(this.eC * eU, this.j - this.u0, eU,
				this.u0), vX.fillStyle = bB.o0, vX.fillRect(0, this.j - this.u0 - .5 * this.a8f, this.i, this.a8f), aB = 1; aB <= 3; aB++) vX.fillRect(aB * eU, this.j - this.u0, this.a8f, this.u0);
		for (aB = this.aBr.length - 1; 0 <= aB; aB--) vX.fillText(bA.z8.a40(this.aBr[aB], 0, .9 * eU), (aB + .5) * eU, this.j - .46 * this.u0)
	}, this.aRf = function() {
		vX.fillStyle = bB.on, vX.fillRect(0, 0, this.i, this.aas), vX.fillStyle = bB.o0, vX.fillRect(0, this.aas - .5 * this.a8f, this.i, this.a8f), vX.font = bA.qt.sk(1, .39 * this.aas), vX.fillText(bA.z8.a40(L(507), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aas))
	}, this.ab0 = function(g, fC, fE) {
		var lL = bd.max[this.eC],
			a3L = (vX.setTransform(1, 0, 0, 1, fC + 2 * this.tH + this.aao, fE + this.a9K + this.aas), vX.lineWidth = 2, this.aaq / Math.sqrt(lL));
		vX.beginPath(), vX.moveTo(this.aap, this.aaq - a3L * Math.sqrt(g[bd.aT6 - 1]));
		for (var aB = bd.aT6 - 2; 0 <= aB; aB--) vX.lineTo(aB * this.aap / (bd.aT6 - 1), this.aaq - a3L * Math.sqrt(g[aB]));
		vX.stroke();
		fC = this.a6o(g, a3L, .5);
		fC < .95 && vX.fillText(bA.rs.a0B(lL), -this.tH, 0), .05 < Math.abs(fC - .5) && vX.fillText(bA.rs.a0B(Math.floor(lL / 4)), -this.tH, Math.floor(this.aaq / 2)), .05 < fC && vX.fillText("0", -this.tH, this.aaq)
	}, this.ab1 = function(fC, fE) {
		vX.setTransform(1, 0, 0, 1, fC + 2 * this.tH + this.aao, fE + this.a9K + this.aas), vX.lineWidth = 2;
		var a3L = this.aaq / Math.max(bd.max[this.eC], 1);
		vX.beginPath(), vX.moveTo(this.aap, this.aaq - a3L * bd.aCG[bd.aT6 - 1]);
		for (var aB = bd.aT6 - 2; 0 <= aB; aB--) vX.lineTo(aB * this.aap / (bd.aT6 - 1), this.aaq - a3L * bd.aCG[aB]);
		vX.stroke();
		fC = this.a6o(bd.aCG, a3L, 1), fE = bd.max[this.eC] / 100;
		fC < .95 && vX.fillText(bA.rs.a50(fE, 2), -this.tH, 0), .05 < Math.abs(fC - .5) && vX.fillText(bA.rs.a50(fE / 2, 2), -this.tH, Math.floor(this.aaq / 2)), .05 < fC && vX.fillText(bA.rs.a50(0, 2), -this.tH, this.aaq)
	}, this.ab2 = function(fC, fE) {
		vX.setTransform(1, 0, 0, 1, fC + .34 * this.i, fE + 2 * aar + this.aas), bA.qt.textAlign(vX, 2);
		for (var aBZ = this.j - 4 * aar - this.u0 - this.aas, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vX.fillText(bA.z8.a40(bd.aaj[g[aB]], 0, .31 * this.i), 0, aB * aBZ / 9);
		var fX = bd.mv;
		for (vX.setTransform(1, 0, 0, 1, fC + .39 * this.i, fE + 2 * aar + this.aas), bA.qt.textAlign(vX, 0), vX.fillText(bA.rs.a50(100 * fX[0] / (1024 * Math.max(fX[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vX.fillText(fX[g[aB]].toString(), 0,
			aB * aBZ / 9);
		vX.fillText(bA.rs.a50(100 * (1 - ag.gt[aD.ep] / fX[7]), 0), 0, aBZ)
	}, this.ab3 = function(fC, fE) {
		vX.setTransform(1, 0, 0, 1, fC + .79 * this.i, fE + 2 * aar + this.aas), bA.qt.textAlign(vX, 2);
		var aB, aBZ = this.j - 4 * aar - this.u0 - this.aas;
		for (vX.fillStyle = bB.oH, aB = 2; 0 <= aB; aB--) vX.fillText(bA.z8.a40(bd.aaj[aB + 8], 0, .31 * this.i), 0, aB * aBZ / 9);
		vX.fillText(bA.z8.a40(bd.aaj[18], 0, .31 * this.i), 0, 3 * aBZ / 9), vX.fillStyle = bB.oG, vX.fillText(bA.z8.a40(bd.aaj[11], 0, .31 * this.i), 0, 4 * aBZ / 9), vX.fillStyle = bB.oZ, vX.fillText(bA.z8.a40(bd.aaj[13], 0, .31 * this.i), 0,
				5 * aBZ / 9), vX.fillText(bA.z8.a40(bd.aaj[15], 0, .31 * this.i), 0, 6 * aBZ / 9), vX.fillText(bA.z8.a40(bd.aaj[16], 0, .31 * this.i), 0, 7 * aBZ / 9), vX.fillText(bA.z8.a40(bd.aaj[12], 0, .31 * this.i), 0, 8 * aBZ / 9), vX
			.fillStyle = bB.oY, vX.fillText(bA.z8.a40(bd.aaj[17], 0, .31 * this.i), 0, aBZ), vX.fillStyle = bB.oH;
		var fX = bd.mv,
			aFd = fX[8] + fX[9] + fX[10] + fX[18],
			aFd = bA.rs.a0B(aFd),
			aQT = vX.measureText(aFd).width,
			fC = (vX.setTransform(1, 0, 0, 1, fC + .83 * this.i + aQT, fE + 2 * aar + this.aas), vX.fillText(bA.rs.a0B(fX[8]), 0, 0), vX.fillText(bA.rs.a0B(fX[9]), 0, aBZ / 9), vX.fillText(bA.rs.a0B(fX[10]), 0, 2 * aBZ / 9), vX.fillText(bA.rs
				.a0B(fX[18]), 0, 3 * aBZ / 9), vX.fillStyle = bB.oG, vX.fillText(aFd, 0, 4 * aBZ / 9), vX.fillStyle = bB.oZ, vX.fillText(bA.rs.a0B(fX[13]), 0, 5 * aBZ / 9), vX.fillText(bA.rs.a0B(fX[15]), 0, 6 * aBZ / 9), vX.fillText(bA.rs
				.a0B(fX[16]), 0, 7 * aBZ / 9), vX.fillText(bA.rs.a0B(fX[12]), 0, 8 * aBZ / 9), fX[12] + fX[13] + fX[15] + fX[16]);
		vX.fillStyle = bB.oY, vX.fillText(bA.rs.a0B(fC), 0, aBZ), vX.fillStyle = bB.o0
	}, this.a6o = function(g, a3L, aAF) {
		var aB, e, fo;
		return this.aav < 0 || 1 < this.aav ? .25 : (aB = this.aav * (bd.aT6 - 1), fo = g[e = Math.floor(aB)], fo += (aB - e) * (g[e < bd.aT6 - 1 ? e + 1 : e] - fo), vX.strokeStyle = bB.o3, .04 < this.aav && this.ab5(0, this.aaq - a3L * Math.pow(
				fo, aAF), aB * this.aap / (bd.aT6 - 1), this.aaq - a3L * Math.pow(fo, aAF)), .04 < fo / bd.max[this.eC] && this.ab5(aB * this.aap / (bd.aT6 - 1), this.aaq, aB * this.aap / (bd.aT6 - 1), this.aaq - a3L * Math.pow(fo, aAF)), vX
			.fillStyle = bB.ob, vX.beginPath(), vX.arc(aB * this.aap / (bd.aT6 - 1), this.aaq - a3L * Math.pow(fo, aAF), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vX.fill(), g = this.aav * bf.aCI, g = 0 === ag.mz[aD.ep] ? Math.floor(g * bd
				.aai) : Math.floor(g * bf.kN()), vX.fillStyle = bB.o0, vX.fillText(1 === aAF ? bA.rs.a50(fo / 100, 2) : bA.rs.a0B(Math.floor(fo)), -this.tH, this.aaq - a3L * Math.pow(fo, aAF)), bA.qt.textAlign(vX, 1), vX.fillText(aW.aC5(g),
				aB * this.aap / (bd.aT6 - 1), this.aaq + this.aat - (a0.a1.iE() ? 2 : 0) - this.a8f), bA.qt.textAlign(vX, 2), a3L * Math.pow(fo, aAF) / this.aaq)
	}, this.ab5 = function(nQ, nR, nd, ne) {
		vX.beginPath(), vX.moveTo(nQ, nR), vX.lineTo(nd, ne), vX.stroke()
	}
}

function by() {
	this.aT7 = "https://territorial.io/changelog", this.aTC = "https://territorial.io/terms", this.aTD = "https://territorial.io/privacy", this.aTB = "https://territorial.io/tutorial", this.aTA = "https://territorial.io/players", this.aT8 =
		"https://territorial.io/clans", this.aT9 = "https://territorial.io/clan-results", this.aPc = "https://patreon.com/c/territorial", this.aDa = "https://play.google.com/store/apps/details?id=territorial.io", this.a22 =
		"https://apps.apple.com/app/id1581110913", this.aDb = "https://discord.gg/pthqvpTXmh", this.aDc = "https://www.instagram.com/davidtschacher/", this.zj =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new ab6, this.z5 = new ab7, this.dd = function() {
		this.y.dd()
	}, this.eY = function() {
		0 !== this.y.aVI && this.y.aVI--
	}
}

function ab7() {
	this.vW = function() {
		if (0 !== bP.y.aVI && (vX.globalAlpha = Math.min(bP.y.aVI / 580, 1), vX.drawImage(bP.y.abA, 1 + aS.z3(), 1 + aS.z4()), vX.globalAlpha = 1, aD.hT)) {
			for (var nQ = ii / iG, nR = ij / iG, nd = (h.i + ii) / iG, ne = (h.j + ij) / iG, ge = bP.y.abB * iG, abC = bP.y.abC, aB = aD.kQ - 1; 0 <= aB; aB--) ! function(aB, ge, nQ, nR, nd, ne, abC) {
				var highlight;
				0 === ag.mz[aB] || 0 === ag.gt[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (ge *= 2), nd = h.i * ((ag.iy[aB] + ag.iz[aB] + 1) / 2 - nQ) / (nd - nQ) - .5 * ge, nQ = h.j * ((ag.j0[
					aB] + ag.j1[aB] + 1) / 2 - nR) / (ne - nR) - .5 * ge, nd > h.i) || nQ > h.j || nd < -ge || nQ < -ge || (highlight ? vX.setTransform(2 * iG, 0, 0, 2 * iG, nd, nQ) : vX.setTransform(iG, 0, 0, iG, nd, nQ), vX.drawImage(
					abC[aD.hz ? bg.f3[aB] : 1], 0, 0))
			}(aB, ge, nQ, nR, nd, ne, abC);
			vX.setTransform(iG, 0, 0, iG, 0, 0)
		}
	}
}

function ab6() {
	this.abB = 28, this.aVI = 0, this.abA = null;
	var abE = this.abC = null;

	function abH(i1, abI) {
		var fC, fE, er, iP, a3m = bA.qt.xN(i1, i1),
			i7 = bA.qt.getContext(a3m, !0),
			i4 = bA.qt.getImageData(i7, i1, i1),
			xY = i4.data,
			lL = (i1 >> 1) - .5,
			abJ = .5 + lL;
		for (abJ *= abJ, fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) iP = (iP = fC - lL) * iP + (iP = fE - lL) * iP, xY[er = 4 * (fE * i1 + fC)] = abI[0], xY[1 + er] = abI[1], xY[2 + er] = abI[2], xY[3 + er] = (abJ - iP) * abI[3] / abJ;
		return i7.putImageData(i4, 0, 0), a3m
	}

	function aaL(aB, i7, a3m, i1) {
		var highlight, fC, fE;
		0 !== ag.mz[aB] && 0 !== ag.gt[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i1 *= 2), fC = ag.iy[aB] + ag.iz[aB] + 1 - i1 - 2 >> 1, fE = ag.j0[aB] + ag.j1[aB] + 1 - i1 - 2 >> 1, highlight ? i7
			.drawImage(a3m[aD.hz ? 9 === aD.ki && 5 === aE.ho[aB] ? 3 : bg.f3[aB] : aB < aD.kQ ? 1 : 0], fC, fE, i1, i1) : i7.drawImage(a3m[aD.hz ? 9 === aD.ki && 5 === aE.ho[aB] ? 3 : bg.f3[aB] : aB < aD.kQ ? 1 : 0], fC, fE))
	}
	this.dd = function() {
		var sV;
		this.aVI = 700,
			function(sV) {
				var i1 = sV.abB;
				if (sV.abC = [], abE = [], aD.hz) {
					for (var aB = 0; aB <= aD.yA; aB++) sV.abC.push(abH(i1, bg.aYf[bg.kn[aB]])), abE.push(abH(i1 >> 1, bg.aYf[bg.kn[aB]]));
					9 === aD.ki && abE.push(abH(i1, bg.aYf[1]))
				} else sV.abC.push(abH(i1, bg.aYf[7])), sV.abC.push(abH(i1, bg.aYf[4])), abE.push(abH(i1 >> 1, bg.aYf[7]))
			}(this),
			function(sV, abK) {
				var aB, abA = sV.abA,
					i7 = bA.qt.getContext(abA, !0),
					f5 = aD.f2,
					i1 = sV.abB >> 1;
				i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0), abK && i7.clearRect(0, 0, abA.width, abA.height);
				if (9 === aD.ki) {
					i1 <<= 1;
					sV = az.kr[5];
					for (aB = f5 - sV; aB < f5; aB++) aaL(aB, i7, abE, i1);
					f5 -= sV, i1 >>= 1
				}
				for (aB = aD.kQ; aB < f5; aB++) aaL(aB, i7, abE, i1)
			}(this, null !== (sV = this).abA && sV.abA.width === bS.fG - 2 && sV.abA.height === bS.fH - 2 || (sV.abA = bA.qt.xN(bS.fG - 2, bS.fH - 2), !1)), aD.hT || this.a5I()
	}, this.aYe = abH, this.a5I = function() {
		for (var f5 = aD.kQ, i1 = this.abB, abC = this.abC, i7 = bA.qt.getContext(this.abA, !0), aB = 0; aB < f5; aB++) aaL(aB, i7, abC, i1)
	}
}

function d9() {
	function abN() {
		8 === aD.ki && 1 === aD.a0u && bR.a0W.a0t()
	}

	function abM(player) {
		aD.hT ? (ak.aId(player), al.aLh(), aD.kk && aD.qF.eY()) : b3.aDu(player)
	}
	this.ph = function(player) {
		aN.a17(player, player === aD.ep ? 21 : 22), abM(player), abN()
	}, this.qC = function(player) {
		1 === aD.a0u && 0 !== ag.mz[player] && 2 !== ag.a4I[player] && abM(player), aD.a0x--, aD.a0w--, aN.a17(player, 4), bA.gR.hG(2) && aW.ml(!0), abN()
	}
}

function dJ() {
	this.aVY = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBW = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.o0, "rgb(170,170,170)"
	], this.abO = [bB.o0, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.o0, bB.nr], this.abP = [bB.nr, bB.o0, bB.o0, bB.o0, bB.nr, bB.nr, bB.nr, bB.nr, bB.o0];
	var aLr = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aLA = ["rgba(" + aLr[0] + ",", "rgba(" + aLr[1] + ",", "rgba(" + aLr[2] + ",", "rgba(" + aLr[3] + ",", "rgba(" + aLr[4] + ",", "rgba(" + aLr[5] + ",", "rgba(" + aLr[6] + ",", "rgba(" + aLr[7] + ",", "rgba(" + aLr[8] + ",", "rgba(" + aLr[9] +
			","
		], this.aLB = ["rgb(" + aLr[0] + ")", "rgb(" + aLr[1] + ")", "rgb(" + aLr[2] + ")", "rgb(" + aLr[3] + ")", "rgb(" + aLr[4] + ")", "rgb(" + aLr[5] + ")", "rgb(" + aLr[6] + ")", "rgb(" + aLr[7] + ")", "rgb(" + aLr[8] + ")", "rgb(" + aLr[9] +
			")"
		], this.a1G = null, this.aYf = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aYK = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kn = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f3 = new Uint8Array(aD.f2), this.aBX = new Uint8Array(aD.f2), this.yG = new Uint16Array(aD.f2), this.yH = new Uint16Array(this.kn.length + 1), this.yI = new Uint16Array(this.kn.length), this.de =
		function() {
			this.a1G = [L(508), L(509), L(510), L(511), L(512), L(513), L(514), L(515), L(516)]
		}, this.dd = function() {
			if (this.f3.fill(0), this.aBX.fill(0), this.abQ(), aD.hz) {
				if (9 === aD.ki) {
					for (var f3 = bg.f3, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f3[aB] = 1;
					var f5 = aD.f2;
					for (aB = aD.data.teamPlayerCount[7]; aB < f5; aB++) f3[aB] = 2;
					bg.kn[1] = 7, bg.kn[2] = 8
				} else aD.kk ? function() {
					var aYK = bg.aYK,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kQ - 1; 0 <= aB; aB--) colorsData[aB] = ay.jh(262144);
					var abb = 0,
						fL = 768,
						aV1 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f8 = 0, fP = 0; fP < 3; fP++) f8 += Math.abs(aYK[aB][fP] - aV1[fP]);
							f8 < fL && (abb = aB, fL = f8)
						} var abc = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) abc[aB] = teamPlayerCount[aB];
					var kn = bg.kn,
						abd = new Uint8Array(9),
						gY = (kn[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) abc[aB] && (abd[aB] = gY, kn[gY++] = aB);
					var jg = aD.kQ,
						f3 = bg.f3;
					abc[abb] ? (abc[abb]--, f3[0] = abd[abb]) : jg = 0;
					var ed = 0;
					for (aB = jg; aB < aD.y3; aB++) {
						var hx = kn[ed];
						if (abc[hx]) abc[hx]--, f3[aB] = abd[hx];
						else if (aB--, 9 <= ++ed) return console.log("error 325")
					}
				}() : this.eY();
				! function() {
					for (var f5 = aD.f2, yG = bg.yG, yH = bg.yH, yI = bg.yI, f3 = bg.f3, kn = bg.kn, y9 = kn.length, eQ = new Array(y9), aB = 0; aB < y9; aB++) eQ[aB] = [];
					for (aB = 0; aB < f5; aB++) eQ[kn[f3[aB]]].push(aB);
					for (aB = 1; aB <= y9; aB++) yH[aB] = yH[aB - 1] + eQ[aB - 1].length;
					for (aB = 0; aB < y9; aB++)
						for (var gY = eQ[aB].length, lL = yH[aB], hx = 0; hx < gY; hx++) yG[hx + lL] = eQ[aB][hx];
					var kQ = aD.kQ;
					for (aB = 0; aB < y9; aB++)
						for (gY = eQ[aB].length, lL = yH[aB], hx = 0; hx < gY; hx++)
							if (yG[hx + lL] >= kQ) {
								yI[aB] = hx;
								break
							}
				}(), ! function() {
					for (var f5 = aD.f2, f3 = bg.f3, aBX = bg.aBX, kn = bg.kn, aB = 0; aB < f5; aB++) aBX[aB] = kn[f3[aB]];
					9 === aD.ki && aBX.fill(1, f5 - az.kr[5])
				}()
			}
		}, this.abQ = function() {
			for (var aB = this.kn.length - 1; 0 <= aB; aB--) this.kn[aB] = aB
		}, this.eY = function() {
			var a00 = new Uint8Array(aD.kQ),
				a01 = new Uint8Array(aD.kQ),
				abV = new Uint16Array(8),
				abW = new Uint16Array(this.kn.length);
			this.abX(a00, a01, abV, 1), this.aI4(abV), this.abY(abW, a00, a01), this.abZ(a00, a01, abW), this.aba()
		}, this.abX = function(a00, a01, abc, abe) {
			for (var fP, e, abf, f5 = this.kn.length - abe, g = new Uint16Array(f5), aYK = this.aYK, colorsData = aD.data.colorsData, aB = aD.kQ - 1; 0 <= aB; aB--) {
				for (fP = f5; abe <= fP; fP--) g[fP - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aYK[fP][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aYK[fP][1]) + Math.abs(4 * (63 & colorsData[aB]) - aYK[fP][2]);
				for (abf = 768, fP = f5 - 1; 0 <= fP; fP--) g[e = (fP + aB) % f5] < abf && (abf = g[e], a00[aB] = e);
				for (abc[a00[aB]] += 4, abf = 768, fP = f5 - 1; 0 <= fP; fP--) g[e = (fP + aB) % f5] < abf && e !== a00[aB] && (abf = g[e], a01[aB] = e);
				abc[a01[aB]]++
			}
		}, this.aI4 = function(abc) {
			for (var fP, lN, f5 = this.kn.length - 1, aB = f5; 0 <= aB; aB--) this.kn[aB] = aB;
			for (aB = f5 - 1; 0 <= aB; aB--) abc[aB]++;
			for (aB = 1; aB <= f5; aB++) {
				for (lN = 0, fP = 1; fP < f5; fP++) abc[fP] > abc[lN] && (lN = fP);
				abc[lN] = 0, this.kn[aB] = lN + 1
			}
		}, this.abY = function(abW, a00, a01) {
			var fP, a1e, ed, f8, e, nc, tY, abg = this.kn.length - 1,
				rM = new Uint16Array(abg),
				abh = [],
				abi = 0,
				a1d = [],
				abj = [];
			loop: for (var aB = 0; aB < aD.kQ; aB++)
				if (null !== (a1e = bA.rs.a1f(ag.a1c[aB]))) {
					for (fP = a1d.length - 1; 0 <= fP; fP--)
						if (a1e === a1d[fP]) {
							abj[fP].push(aB), abi = Math.max(abi, abj[fP].length);
							continue loop
						} a1d.push(a1e), abh.push(!1), abj.push([aB]), abi = Math.max(abi, 1)
				}
			for (; 2 < aD.yA && abi > bL.fW(aD.kQ, aD.yA);) aD.yA--, aD.ki--;
			for (fP = a1d.length - 1; 0 <= fP; fP--) {
				for (f8 = -1, ed = a1d.length - 1; 0 <= ed; ed--) !abh[ed] && (-1 === f8 || abj[ed].length > abj[f8].length) && (f8 = ed);
				for (ed = abg - 1; 0 <= ed; ed--) rM[ed] = 1;
				for (ed = abj[f8].length - 1; 0 <= ed; ed--) rM[a00[abj[f8][ed]]] += 3, rM[a01[abj[f8][ed]]]++;
				for (aB = abg - 1; 0 <= aB; aB--) {
					for (e = f8 % abg, ed = abg - 1; 0 <= ed; ed--) rM[ed] > rM[e] && (e = ed);
					for (nc = -1, ed = aD.yA; 0 < ed; ed--)
						if (this.kn[ed] === e + 1) {
							nc = ed;
							break
						} if (rM[e] = 0, -1 !== nc) {
						for (tY = 0, ed = aD.yA; 0 < ed; ed--) abW[nc] > abW[ed] && tY++;
						if (tY !== aD.yA - 1) {
							for (ed = abj[f8].length - 1; 0 <= ed; ed--) abW[nc]++, this.f3[abj[f8][ed]] = nc;
							break
						}
					}
				}
				abh[f8] = !0
			}
		}, this.abZ = function(a00, a01, abW) {
			for (var aB, iO, f5 = this.kn.length - 1, border = bL.fW(aD.kQ, aD.yA), abk = (0 < aD.kQ % aD.yA && border++, new Uint8Array(1 + f5)), fP = f5; 1 <= fP; fP--) abk[this.kn[fP]] = fP;
			for (aB = 0; aB < aD.kQ; aB++) iO = abk[a00[aB] + 1], 0 === this.f3[aB] && iO <= aD.yA && abW[iO] < border && (abW[iO]++, this.f3[aB] = iO);
			for (aB = 0; aB < aD.kQ; aB++) iO = abk[a01[aB] + 1], 0 === this.f3[aB] && iO <= aD.yA && abW[iO] < border && (abW[iO]++, this.f3[aB] = iO);
			for (fP = aD.yA; 1 <= fP; fP--)
				for (aB = aD.kQ - 1; 0 <= aB && !(abW[fP] >= border); aB--) 0 === this.f3[aB] && (abW[fP]++, this.f3[aB] = fP)
		}, this.aba = function() {
			for (var aB = aD.kQ; aB < aD.f2; aB++) this.f3[aB] = 1 + aB % aD.yA
		}
}

function db() {
	this.gu = function() {
		for (var fC, fE, aB = g1 - 1; 0 <= aB; aB--) fC = bL.fW(g3[aB], 4) % bS.fG, fE = bL.fW(g3[aB], 4 * bS.fG), ag.iy[fw] = Math.min(fC, ag.iy[fw]), ag.j0[fw] = Math.min(fE, ag.j0[fw]), ag.iz[fw] = Math.max(fC, ag.iz[fw]), ag.j1[fw] = Math
			.max(fE, ag.j1[fw])
	}, this.gF = function() {
		var f8, gd, aB, f5 = ag.gX[fw].length,
			f7 = ac.f7;
		loop: for (aB = f5 - 1; 0 <= aB; aB--) {
			for (f8 = 3; 0 <= f8; f8--)
				if (gd = ag.gX[fw][aB] + f7[f8], ac.ew(gd) || ac.gf(gd) && ac.ex(gd) !== fw) {
					ac.jc(ag.gX[fw][aB], fw);
					continue loop
				} ag.gX[fw][aB] = ag.gX[fw][f5 - 1], ag.gX[fw].pop(), f5--
		}
	}, this.gG = function() {
		var player = fw,
			gl = ag.gl,
			gm = ag.gm,
			fU = ag.fU,
			f5 = gl[player].length,
			f7 = ac.f7;
		loop: for (var aB = f5 - 1; 0 <= aB; aB--) {
			for (var abl = !1, abm = !1, f8 = 3; 0 <= f8; f8--) {
				var gd = gl[player][aB] + f7[f8];
				if (ac.aIO(gd, player)) continue loop;
				abl = abl || ac.iJ(gd), abm = abm || ac.aIN(gd)
			}
			abl ? gm[player].push(gl[player][aB]) : abm ? fU[player].push(gl[player][aB]) : ac.yc(gl[player][aB], player), gl[player][aB] = gl[player][f5 - 1], gl[player].pop(), f5--
		}
	}, this.gj = function() {
		ag.gt[g0] -= g1
	}, this.gk = function(border) {
		for (var f5 = border.length, aB = f5 - 1; 0 <= aB; aB--) ac.yx(g0, border[aB]) || (border[aB] = border[f5 - 1], border.pop(), f5--)
	}, this.gn = function(border) {
		for (var f5 = border.length, aB = f5 - 1; 0 <= aB; aB--) !ac.yx(g0, border[aB]) && ac.f0(border[aB]) && (border[aB] = border[f5 - 1], border.pop(), f5--)
	}, this.go = function(border) {
		for (var f8, gd, f5 = border.length, f7 = ac.f7, aB = f5 - 1; 0 <= aB; aB--)
			for (f8 = 3; 0 <= f8; f8--)
				if (gd = border[aB] + f7[f8], ac.aIO(gd, g0)) {
					ag.gl[g0].push(border[aB]), border[aB] = border[f5 - 1], border.pop(), f5--;
					break
				}
	}, this.gp = function() {
		for (var f8, gd, f7 = ac.f7, aB = g1 - 1; 0 <= aB; aB--)
			for (f8 = 3; 0 <= f8; f8--) gd = g3[aB] + f7[f8], ac.z0(g0, gd) && ac.aIP(gd) && (ag.gl[g0].push(gd), ac.ga(gd, g0))
	}, this.gq = function() {
		var fC, fE;
		loop: for (; ag.j0[g0] < ag.j1[g0];) {
			for (fC = ag.iz[g0]; fC >= ag.iy[g0]; fC--)
				if (ac.yx(g0, 4 * (ag.j0[g0] * bS.fG + fC))) break loop;
			ag.j0[g0]++
		}
		loop: for (; ag.j0[g0] < ag.j1[g0];) {
			for (fC = ag.iz[g0]; fC >= ag.iy[g0]; fC--)
				if (ac.yx(g0, 4 * (ag.j1[g0] * bS.fG + fC))) break loop;
			ag.j1[g0]--
		}
		loop: for (; ag.iy[g0] < ag.iz[g0];) {
			for (fE = ag.j1[g0]; fE >= ag.j0[g0]; fE--)
				if (ac.yx(g0, 4 * (fE * bS.fG + ag.iy[g0]))) break loop;
			ag.iy[g0]++
		}
		loop: for (; ag.iy[g0] < ag.iz[g0];) {
			for (fE = ag.j1[g0]; fE >= ag.j0[g0]; fE--)
				if (ac.yx(g0, 4 * (fE * bS.fG + ag.iz[g0]))) break loop;
			ag.iz[g0]--
		}
	}, this.ey = function(player, jZ) {
		return 0 === bg.f3[player] || bg.f3[player] !== bg.f3[jZ]
	}, this.hb = function(player) {
		for (var aB, ge, f5 = ag.gl[player].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < f5; aB++)
				if (ac.ew(ag.gl[player][aB] + ge)) return !0;
		return !1
	}, this.aIZ = function(player) {
		for (var aB, ge, f5 = ag.gl[player].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < f5; aB++)
				if (ac.jb(ag.gl[player][aB]) && ac.ew(ag.gl[player][aB] + ge)) return !0;
		return !1
	}, this.he = function(a4O, a4P) {
		for (var aB, eU, ge, gd, aZO = ag.gl[a4O].length, aZP = ag.gl[a4P].length, f7 = (aZP < aZO && (eU = a4O, a4O = a4P, a4P = eU, eU = aZO, aZO = aZP, 0), ac.f7), f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < aZO; aB++)
				if (gd = ag.gl[a4O][aB] + ge, ac.gf(gd) && ac.ex(gd) === a4P) return !0;
		return !1
	}, this.aIa = function(a4O, a4P) {
		for (var aB, ge, gd, aZO = ag.gl[a4O].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < aZO; aB++)
				if (ac.jb(ag.gl[a4O][aB]) && (gd = ag.gl[a4O][aB] + ge, ac.gf(gd)) && ac.ex(gd) === a4P) return !0;
		return !1
	}
}

function dV() {
	this.qO = new abn
}

function abn() {
	this.hh = function(player) {
		bA.gR.a4J(player) && aN.a1I(80, L(517), 637, 0, bB.oq, bB.nx, -1, !1)
	}, this.hk = function(player) {
		bA.gR.a4J(player) && aN.a1I(80, L(518), 637, 0, bB.oq, bB.nx, -1, !1)
	}
}

function abo() {
	this.abp = 0, this.eY = function() {
		aO.eY(), aZ.eY(), h.eY(), b0.y.eY(), ax.aHa(), bU.eM.eY(), bf.dk && (bf.dk = !1, aa.vW())
	}
}

function abq() {
	this.eT = bf.eT, this.eC = 0, this.abp = 0, this.aHY = 0, this.abr = null, this.abt = 7, this.abu = 0, this.dd = function() {
		this.aHY = 0, this.abr = [], this.eC = 0, this.abp = 0
	}, this.aUT = function(aC) {
		if (aD.hT) this.aCJ(aC);
		else if (this.abr.push(aC), 2 === aD.a0u) {
			for (var aB = 0; aB < this.abr.length; aB++) b8.pK.eY(this.abr[aB]);
			this.abr = []
		}
	}, this.aCJ = function(aC) {
		2 !== aD.a0u && (b8.pK.eY(aC), b9.eY(), aW.aCJ(this.aHY), this.aHY === aD.a5O ? (aD.qF.eY(), this.aHY = 0, this.eC = 0, this.abp = 0, this.eT = bf.eT) : (this.aHY++, af.a5H(), af.ml(!0), bb.aCs()))
	}, this.eY = function() {
		h.eY(), aD.hT ? (bf.dk = aW.aCJ(-1) || bf.dk, mn()) : (0 !== this.eC || bf.eT >= this.eT && (this.eT += bf.aCI * Math.floor(1 + (bf.eT - this.eT) / bf.aCI), 2 === aD.a0u ? mc() : this.abv(), this.eC++, 27 < bf.eT - this.abu)) && this
		.abw(), mi(), bf.dk && (bf.dk = !1, z1()), this.abu = bf.eT
	}, this.abw = function() {
		bf.dk = !0, mk(), this.eC = 0
	}, this.abv = function() {
		var wM, aB;
		if (this.abp !== 7 * this.aHY) me(), bb.aCs();
		else {
			wM = !1;
			loop: for (; this.abx() && (wM = !0, me(), 2 !== aD.a0u) && 0 < this.abr.length;)
				for (aB = this.abt - 2; 0 <= aB; aB--)
					if (me(), 2 === aD.a0u) break loop;
			wM ? bb.aCs() : (mc(), bb.a5K())
		}
	}, this.abx = function() {
		return 0 < this.abr.length && (this.aHY++, b8.pK.eY(this.abr[0]), this.abr.shift(), !0)
	}
}

function aby() {
	var abz, ac0, ac1, aHY, ac2, eC = 0,
		eT = bf.eT;

	function ac5() {
		! function() {
			if (!aD.hT) return;
			if (aD.kk) return;
			if (2 !== aD.a0u)
				if (ac2 % 7 != 0) ac2++;
				else if (aHY === aD.a5O) {
				if (!ac8()) return;
				aW.aCJ(aHY), aD.qF.eY()
			} else {
				if (!ac8()) return;
				ac2++, aHY++, af.a5H(), af.ml(!0)
			}
			return 1
		}() && ac8() && me()
	}

	function ac6() {
		eC = 0, (aD.hT ? (bf.dk = aW.aCJ(aHY - (ac2 % 7 == 0 ? 0 : 1) + ac2 % 7 / 7) || bf.dk, mn) : aM.hF || !bC.a5l ? mn : (bf.dk = !0, mk))()
	}

	function ac8() {
		var aB, f5, ac9 = b9.qD.aVw,
			fo = b9.qD.aVx,
			fq = b9.qD.aVy,
			fs = b9.qD.aVz,
			acA = b9.qD.aW0,
			acB = b9.qD.aW1;
		if (!(abz >= acB.length)) {
			if (acB = acB[abz], acA[abz]) {
				for (f5 = ac0 + acB, aB = ac0; aB < f5; aB++) b8.pK.q2(ac9[aB], fo[aB], fq[aB], fs[aB]);
				ac0 += acB, abz++
			} else ++ac1 >= acB && (abz++, ac1 = 0);
			return 1
		}
		aN.a2F("Replay file smaller than expected."), bC.a34(!1), aD.a0u = 2
	}
	this.abp = 0, this.dd = function() {
		ac2 = aHY = ac1 = ac0 = abz = 0
	}, this.eY = function() {
		var aZp;
		h.eY(), bC.a9W() < 1.7 ? 0 === eC ? bf.eT >= eT && (aZp = bf.aCI / bC.a9W(), eT += aZp * Math.floor(1 + (bf.eT - eT) / aZp), 2 === aD.a0u || aM.hF || !bC.a5l ? mc() : (ac5(), bb.aCs()), eC++) : ac6() : function() {
			var aZp;
			if (bf.eT >= eT)
				if (2 === aD.a0u || aM.hF || !bC.a5l) mc(), eT = bf.eT;
				else {
					for (aZp = bf.aCI / bC.a9W(), 16 < (bf.eT - eT) / aZp && (eT = bf.eT - 16 * aZp); bf.eT >= eT && 2 !== aD.a0u;) eT += aZp, ac5();
					bb.aCs()
				} ac6()
		}(), mi(), bf.dk && (bf.dk = !1, z1())
	}, this.a15 = function() {
		b9.qD.aW1.length - abz <= 2 || aN.a2F("Replay file larger than expected.")
	}
}

function acC() {
	var eC = 0,
		eT = bf.eT;
	this.abp = 0, this.eY = function() {
		h.eY(), aD.hT ? mn() : 0 === eC ? bf.eT >= eT && (eT += bf.aCI * Math.floor(1 + (bf.eT - eT) / bf.aCI), 2 === aD.a0u || aM.hF ? mc() : (me(), bb.aCs()), eC++) : ((aM.hF ? mn : (bf.dk = !0, mk))(), eC = 0), mi(), bf.dk && (bf.dk = !1,
		z1())
	}
}

function dR() {
	this.a14 = null, this.dk = !1, this.eT = 0, this.aCI = 56;
	var acD = 0;

	function acE() {
		bf.eT = acD = performance.now(), bf.a14.eY(), window.requestAnimationFrame(acE)
	}
	this.dd = function() {
		this.a5i(), window.requestAnimationFrame(acE), this.eT = performance.now()
	}, this.a5a = function() {
		aD.hE ? (this.a14 = new aby, this.a14.dd()) : aD.kk ? this.a14 = new acC : (this.a14 = new abq, this.a14.dd())
	}, this.a5i = function() {
		this.a14 = new abo, this.dk = !0
	}, this.eY = function() {
		this.a14.abp++
	}, this.kN = function() {
		return this.a14.abp
	}, this.aUB = function() {
		var eU = performance.now();
		eU < acD + 1e3 || (this.eT = eU, this.a14.eY())
	}
}

function ct() {
	var aGu = 0,
		acF = !0;

	function acG(id) {
		id = [L(519), L(520), L(521), L(522)][id];
		aN.a7Y(id)
	}
	this.eY = function() {
		var eU, a7u;
		bf.eT < aGu || (aGu = bf.eT + 3e3, aD.hE) || aD.kk || bA.gR.hH(aD.ep) || (eU = new Date, a7u = eU.getUTCSeconds(), acF ? a7u < 43 && (acF = !1) : a7u < 43 || (aGu += 52e3, acF = !0, (a7u = (eU.getUTCMinutes() + 1) % 60) % 10 == 0 ? aD
			.ki < 7 && acG(0) : a7u % 10 == 5 ? 7 !== aD.ki && 10 !== aD.ki || acG(1) : a7u % 10 == 7 ? 8 === aD.ki && acG(2) : a7u % 10 == 2 && 9 === aD.ki && acG(3)))
	}
}

function cn() {
	var nQ, nR, nd, ne, acH = 0,
		acI = 0;

	function acK() {
		return Math.pow(Math.pow(nd - nQ, 2) + Math.pow(ne - nR, 2), .5)
	}

	function acJ(e) {
		nQ = h.k * e.touches[0].clientX, nR = h.k * e.touches[0].clientY, nd = h.k * e.touches[1].clientX, ne = h.k * e.touches[1].clientY
	}
	this.a2W = function(e) {
		return 1 < e.touches.length ? (acI = bf.eT, acH = 3, acJ(e), aL.sA(), !0) : (acH = 0, !1)
	}, this.a2X = function(e) {
		var aMf, iM, iN;
		return 0 !== aD.a0u && 1 < e.touches.length && (acH = Math.max(acH - 1, 0), aH.ni() && (aMf = acK(), acJ(e), e = acK(), iM = Math.floor((nQ + nd) / 2), iN = Math.floor((nR + ne) / 2), aS.a9x(iM, iN, Math.max(.125, e) / Math.max(.125,
			aMf)), bf.dk = !0), !0)
	}, this.a2u = function() {
		var fC, fE;
		return !!(acH && (acH = 0, bf.eT < acI + 500)) && (fC = (nQ + nd) / 2, fE = (nR + ne) / 2, aL.a2o(fC, fE), aL.click(fC, fE, !0) && (bf.dk = !0), !0)
	}
}

function d2() {
	this.size = 0, this.eC = 0, this.aC = null, this.dd = function(aC) {
		this.eC = 0, this.aC = aC, this.size = aC.length
	}, this.ua = function() {
		this.aC = null
	}, this.q1 = function(size) {
		for (var fX = 0, aC = this.aC, ni = this.eC + size - 1, aB = this.eC; aB <= ni; aB++) fX |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << ni - aB;
		return this.eC += size, this.eC > 8 * this.size && console.error("Unwrapper Overflow"), fX
	}, this.aUb = function(size) {
		var fP = size >> 1;
		return (1 << fP) * this.q1(size - fP) + this.q1(fP)
	}, this.aUc = function(acL) {
		return this.size === bD.aUa(acL)
	}, this.aWE = function(xp, acM, acN) {
		var gY = this.q1(xp);
		if (!gY) return null;
		for (var xp = Math.max(gY, acN), g = new(acM <= 8 ? Uint8Array : acM <= 16 ? Uint16Array : Uint32Array)(xp), aB = 0; aB < gY; aB++) g[aB] = this.q1(acM);
		acN = g[gY - 1];
		return acN && g.fill(acN, gY), g
	}, this.aWF = function(xp, acO, acN) {
		var gY = this.q1(xp);
		if (!gY) return null;
		for (var xp = Math.max(gY, acN), g = new Array(xp), aB = 0; aB < gY; aB++) g[aB] = this.aWC(acO);
		return g.fill(g[gY - 1], gY), g
	}, this.aWC = function(xp) {
		return bG.ww.x0(this.q1(xp))
	}, this.aWD = function() {
		var qa = bF.tD.tE(bF.tD.tF(this.q1(30))),
			qa = bA.rs.a5C(qa, "_", "/");
		qa = bA.rs.a5C(qa, "-", "+");
		for (var acP = "";
			(qa.length + acP.length) % 4;) acP += "=";
		qa = "data:image/png;base64," + qa + acP;
		var aJ6 = new Image;
		aJ6.onload = function() {
			b9.aJf.aJg(aJ6), aJ6.onload = null, aJ6 = null
		}, aJ6.src = qa
	}
}

function dL() {
	this.aXA = 0, this.aXB = 0, this.aX6 = 0, this.aX7 = 0, this.aX8 = 0, this.aX9 = 0, this.aCt = [0, 0, 0, 0], this.nh = function() {
		this.aXA = aS.z3(), this.aXB = aS.z4(), this.aX6 = -this.aXA, this.aX7 = -this.aXB, this.aX8 = h.i / iG, this.aX9 = h.j / iG, this.aCt[0] = Math.floor(this.aX6), this.aCt[1] = Math.floor(this.aX7), this.aCt[2] = Math.floor(this.aCt[0] +
			this.aX8 + 1), this.aCt[3] = Math.floor(this.aCt[1] + this.aX9 + 1), bb.aCq = !0
	}
}

function co() {
	var a8b, nC;
	this.dd = function() {
		a8b = 1, nC = 0
	}, this.eY = function() {
		0 < a8b && (nC = 0 === nC ? bf.eT + 16 : nC, a8b = (a8b -= .001 * (bf.eT - nC)) < 0 ? 0 : a8b, nC = bf.eT, bf.dk = !0)
	}, this.vW = function() {
		0 < a8b && (vX.fillStyle = "rgba(0,0,0," + a8b + ")", vX.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eC = 0, this.aC = null, this.dd = function(aC) {
		this.eC = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(acL) {
		return this.dd(new Uint8Array(this.aUa(acL))), this.aC
	}, this.ua = function() {
		this.aC = null
	}, this.a8 = function(size, a7z) {
		for (var aC = this.aC, ni = this.eC + size - 1, aB = this.eC; aB <= ni; aB++) aC[aB >> 3] |= (a7z >> ni - aB & 1) << 7 - (7 & aB);
		this.eC += size, this.eC > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aUZ = function(size, a7z) {
		var fP = size >> 1,
			f8 = 1 << fP;
		this.a8(size - fP, bL.fW(a7z, f8)), this.a8(fP, a7z % f8)
	}, this.acS = function(size) {
		for (var aC = this.aC, ni = this.eC + size, aB = this.eC; aB < ni; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aUa = function(acL) {
		return acL + 7 >> 3
	}, this.acT = function(g, jg, ni, acU) {
		for (var aB = jg; aB < ni; aB++) this.a8(acU, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.eC = 0
	}, this.aUy = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(acV, value) {
		for (var g = this.g, ni = this.eC + acV - 1, acW = 1 + (ni >> 3); g.length < acW;) g.push(0);
		for (var aB = this.eC; aB <= ni; aB++) g[aB >> 3] |= (value >> ni - aB & 1) << 7 - (7 & aB);
		this.eC += acV
	}, this.dj = function(g, xp, acM) {
		var acX = bA.r1.a3g(g);
		this.a8(xp, acX);
		for (var aB = 0; aB < acX; aB++) this.a8(acM, g[aB])
	}, this.aWW = function(g, xp, acO) {
		var acX = bA.r1.a3g(g);
		this.a8(xp, acX);
		for (var aB = 0; aB < acX; aB++) this.aWU(g[aB], acO)
	}, this.aWU = function(qa, xp) {
		var f5 = qa.length;
		this.a8(xp, f5);
		for (var aB = 0; aB < f5; aB++) this.a8(16, qa.charCodeAt(aB))
	}, this.aWV = function(a3m) {
		var acY = (a3m = a3m.toDataURL()).split(",");
		if (acY.length < 2) console.log("error 266");
		else {
			a3m = bA.rs.a5C(a3m = acY[acY.length - 1], "/", "_"), a3m = bA.rs.a5C(a3m, "\\+", "-");
			var a3m = bA.rs.a5C(a3m, "=", ""),
				x9 = bG.tD.x6(a3m),
				f5 = x9.length;
			this.a8(30, f5);
			for (var aB = 0; aB < f5; aB++) this.a8(6, x9[aB])
		}
	}
}
a(), self.aiCommand746 = function(fX) {
	0 === fX ? bt() : 1 !== fX || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fY()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};