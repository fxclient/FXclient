var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fv, fw, fx, fy, fz, g0, g1, g2, g3, g4, g5, g6, g7, iG, ii, ij,
	a8w, m1, kB, a2Y, vZ, z8, aD1, a5j, a5k, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "   ", "flex", "hidden", "1em", "span", "Data", "territorial.io", "0.5em",
		" / ", "pre", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "break-word",
		"50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave",
		"inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ",
		"🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long",
		"logo", "loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon",
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
	this.dp = 1120;
	this.rVersion = 19, this.dt = 0, this.dd = function() {
		this.du = 2;
		this.n = "2.15.19", this.dw = "25 Apr 2026 [" + this.n + "]";
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
		], ["Offensive Name", "Hate Speech", "Block Account", "Ban IP", "Gold Seizure"]);
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

function st(qn, data, su) {
	var f5 = data.sv.length,
		sw = document.createElement("div"),
		sx = document.createElement("div"),
		sy = document.createElement("div"),
		sz = new Array(f5),
		qo = new Array(f5),
		t0 = new Array(data.t1.length),
		t2 = bA.color.nu(70, 70, 0, .35);

	function rO() {
		this.style.backgroundColor = bA.color.rO(t2, 160)
	}

	function t9() {
		this.style.backgroundColor = t2
	}

	function qw() {
		var fO;
		for (qn.style.font = bA.qt.sk(0, bA.qt.tJ(.026, .5, .03)), aB = 1; aB < t0.length; aB++) bA.qt.r3(t0[aB], 4);
		if (bA.qt.r3(sw, 2), f5) {
			for (var hX, tK = sw.offsetWidth, tL = sy.offsetWidth, aB = 0; aB < t0.length; aB++) hX = .01 * data.t8[aB] * tL, t0[aB].style.width = (100 * hX / tK).toFixed(2) + "%";
			var lL = data.sv[0].length;
			for (aB = 0; aB < f5; aB++)
				for (bA.qt.r3(sz[aB], 2), fO = 1; fO < lL; fO++) bA.qt.r3(qo[aB][fO], 4);
			sx.t3 && (sx.scrollTop = sx.t3)
		}
	}
	this.resize = function() {
			qw(), qw()
		}, qn.style.display = "flex", qn.style.flexDirection = "column", sx.style.overflowX = "hidden", sx.style.overflowY = "auto", sx.addEventListener("scroll", function() {
			this.t3 = this.scrollTop, su && su.t4 && (t.y.t5[su.t4] = this.scrollTop)
		}),
		function() {
			var f8, aB, sv = data.sv,
				lL = f5 ? sv[0].length : 0;
			for (aB = 0; aB < f5; aB++) {
				sz[aB] = document.createElement("div"), sz[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nu(130, 130, 130, .35) : bB.nz
				}(aB), sz[aB].style.width = "100%", sz[aB].style.display = "flex", qo[aB] = new Array(lL);
				for (var fO = 0; fO < lL; fO++) qo[aB][fO] = f8 = document.createElement("div"), f8.style.display = "flex", f8.style.justifyContent = "center", f8.style.wordBreak = "break-all", f8.style.padding = "0.4em 0em", f8.style.width = data
					.t8[fO] + "%", f8.innerHTML = sv[aB][fO].fX, 1 === sv[aB][fO].eU && (f8.name = "" + aB, f8.style.color = bB.oz, f8.style.backgroundColor = t2, f8.addEventListener("mouseover", rO), f8.addEventListener("mouseout", t9), function(f8,
						tB, tC) {
						2147483647 !== tC && f8.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, tB), bH.dd(bD.aC), this.style.backgroundColor = t2, t.u(8, t.tD, new tE(25, {
								tF: 0,
								tB: bF.tG.tH(bF.tG.tI(5)),
								tC: tC
							}))
						})
					}(f8, sv[aB][fO].tB, sv[aB][fO].tC)), sz[aB].appendChild(f8)
			}
			for (sw.style.display = "flex", sw.style.backgroundColor = bA.color.nu(0, 120, 0, .35), aB = 0; aB < t0.length; aB++) t0[aB] = f8 = document.createElement("div"), f8.style.display = "flex", f8.style.justifyContent = "center", f8.style
				.wordBreak = "break-all", f8.style.padding = "0.4em 0em", f8.style.width = data.t8[aB] + "%", f8.innerHTML = data.t1[aB], sw.appendChild(f8)
		}();
	for (var aB = 0; aB < f5; aB++) sy.appendChild(sz[aB]);
	sx.appendChild(sy), qn.appendChild(sw), qn.appendChild(sx), su && su.t4 && (sx.t3 = t.y.t5[su.t4])
}

function tM() {
	var tQ, tR, tN = document.createElement("div"),
		tO = document.createElement("div"),
		tP = document.createElement("div"),
		sy = document.createElement("div"),
		rS = [],
		e6 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tS = [1, 2, 3, 0, 9, 10, 11];

	function tU(aB) {
		t.u(8, 0, new tE(21, {
			tW: tS[aB],
			tX: 0,
			tY: 10
		}))
	}
	this.show = function() {
			this.sM(t.y.tZ), document.body.appendChild(tN)
		}, this.sA = function() {
			t.removeChild(document.body, tN)
		}, this.sM = function(tZ) {
			for (var ta = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rS.length; aB++) {
				var i = tZ[aB];
				tQ[ta[aB]][1].rr.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tb = bc.gap,
				j = bA.qt.tc(.085),
				i = Math.min(4 * j, h.i - 2 * tb),
				f5 = rS.length;
			for (bA.qt.td(tN, tb, h.j - tb - j, i, j), bA.qt.r3(tN), bA.qt.r3(tO, 6), aB = 0; aB < f5 - 1; aB++) bA.qt.r3(rS[aB].button, 6);
			for (aB = 0; aB < f5; aB++) tQ[aB][0].resize(), tQ[aB][1].resize();
			for (rS[0].fC = 0, rS[0].button.style.left = bA.qt.r2(rS[0].fC), rS[0].button.style.width = bA.qt.te(1.7 * j), aB = 1; aB < f5; aB++) rS[aB].fC = rS[aB - 1].fC + rS[aB - 1].button.offsetWidth, rS[aB].button.style.left = bA.qt.r2(rS[aB]
				.fC);
			if (!tR) {
				if (!ab.tf()) return;
				(tR = ab.get(14)).style.width = "24%", tR.style.position = "absolute", tO.appendChild(tR)
			}
			tR.style.left = bA.qt.r2(0), tR.style.top = "7%", tP.tg && (tP.scrollLeft = tP.tg)
		}, tN.style.position = "absolute", tO.style.width = "25%", tO.style.height = "100%", tO.style.backgroundColor = bB.nw, tP.style.position = "absolute", tP.style.width = "75%", tP.style.height = "100%", tP.style.backgroundColor = bB.nw, tP
		.style.top = tP.style.right = bA.qt.r2(0), bA.qt.tT(tP), sy.style.height = sy.style.maxHeight = "100%", rS.push(new w("", function() {
			tU(0)
		}, bB.ol)), rS.push(new w("", function() {
			tU(1)
		}, bB.om)), rS.push(new w("", function() {
			tU(2)
		}, bB.od)), rS.push(new w("", function() {
			tU(3)
		}, bB.oO)), rS.push(new w("", function() {
			tU(4)
		}, bB.pA)), rS.push(new w("", function() {
			tU(5)
		}, bB.p6)), rS.push(new w("", function() {
			tU(6)
		}, bB.pA)), tQ = new Array(rS.length);
	for (var aB = 0; aB < rS.length; aB++) rS[aB].button.style.position = "absolute", tQ[aB] = [new tV(e6[aB], rS[aB].button, .25, .45), new tV("", rS[aB].button, .53, .84, 1)], rS[aB].button.style.height = rS[aB].button.style.maxHeight = "100%", rS[
		aB].button.top = bA.qt.r2(0), sy.appendChild(rS[aB].button);
	tP.appendChild(sy), tN.appendChild(tO), tN.appendChild(tP)
}

function th(ti, tj, tk, tl, ra, rb) {
	var tm = document.createElement("div"),
		tn = document.createElement("div"),
		tp = document.createElement("div"),
		tq = document.createElement("div"),
		tr = document.createElement("div"),
		ts = document.createElement("div"),
		tt = document.createElement("div"),
		tu = document.createElement("div"),
		tv = document.createElement("span"),
		tw = document.createElement("div");
	this.tx = new rZ(ra, rb), this.ty = new tz(rb), this.u0 = [ti, tj, tk, tl], this.u4 = function(u5) {
		u5 = (u5 / 10).toFixed(1) + "%";
		tu.style.width = u5, tv.innerHTML = u5
	}, this.u6 = function() {
		this.ty.sA(ts), this.tx.show(ts)
	}, this.u7 = function() {
		this.tx.sA(ts), this.ty.show(ts)
	}, this.u8 = function() {
		return tn
	}, this.show = function() {
		document.body.appendChild(tm)
	}, this.sA = function() {
		t.removeChild(document.body, tm)
	}, this.resize = function(u9) {
		var uA = 1 - .4 * a0.a1.iE() * (h.i > 1.6 * h.j),
			uB = bA.qt.sC(.05 * uA),
			uC = h.j > h.i,
			uD = bA.qt.sC(.06 * uA + .03 * uC),
			uE = bA.qt.sC(.08 * uA + .03 * uC),
			uF = bA.qt.sC(.04 + .02 * uC),
			uC = bA.qt.sC(.02 * uA + .01 * uC),
			uH = bA.qt.sC(.025);
		tm.style.font = bA.qt.sk(0, uH), tr.style.font = bA.qt.sk(0, .9 * uH), tw.style.font = bA.qt.sk(0, .9 * uH), uA < 1 && (uH = bA.qt.sk(0, uA * uH), tp.style.font = uH, tr.style.font = uH, tw.style.font = uH, tt.style.font = uH, tq.style
				.font = uH), tn.style.height = bA.qt.r2(uB), tn.style.font = bA.qt.sk(0, .72 * uB), bA.qt.r3(tn, 2), tp.style.top = bA.qt.r2(uB), tp.style.height = bA.qt.r2(uE), bA.qt.r3(tp, 2), tq.style.font = bA.qt.sk(0, uA * bA.qt.sC(.02)), tq
			.style.top = bA.qt.r2(uB + uE), tq.style.height = bA.qt.r2(uF), bA.qt.r3(tq, 2), tr.style.top = bA.qt.r2(uB + uE + uF), tr.style.height = bA.qt.r2(uD), bA.qt.r3(tr, 2), ts.style.top = bA.qt.r2(uB + uE + uF + uD), ts.style.height = bA
			.qt.r2(h.j / h.k - uB - uE - 2 * uD - uF - uC), tt.style.top = bA.qt.r2(h.j / h.k - uD - uC), tt.style.height = bA.qt.r2(uC), bA.qt.r3(tt, 8), tv.style.font = bA.qt.sk(0, .8 * uC), tw.style.top = bA.qt.r2(h.j / h.k - uD), tw.style
			.height = bA.qt.r2(uD), bA.qt.r3(tw, 8), ti.resize(tp), tj.resize(tp), tk.resize(tp), tl.resize(tp), u9 ? this.tx.resize(ts) : this.ty.resize()
	};
	ra = this;
	tm.style.position = "absolute", tm.style.top = "0", tm.style.left = "0", tm.style.width = "100%", tm.style.height = "100%", tm.style.backgroundColor = bB.nz, bJ.rL() || (tm.style.backdropFilter = "blur(4px)", tm.style.webkitBackdropFilter =
		"blur(4px)"), tn.style.position = "absolute", tn.style.top = "0", tn.style.left = "0", tn.style.width = "100%", tn.style.display = "flex", tn.style.alignItems = "center";
	for (var g = [tp, tq, tr, tw], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qt.tT(g[aB]);
	ts.style.position = "absolute", ts.style.left = "0", ts.style.width = "100%", ts.style.font = "inherit", tt.style.position = "absolute", tt.style.left = "0", tt.style.width = "100%", tu.style.position = "absolute", tu.style.top = "0", tu.style
		.left = "0", tu.style.height = "100%", tu.style.width = "50%", tu.style.backgroundColor = bB.oM, tv.innerHTML = "", tv.style.position = "absolute", tv.style.top = "50%", tv.style.left = "50%", tv.style.transform = "translate(-50%, -50%)", tn
		.appendChild(function() {
			var u3 = document.createElement("h1");
			return u3.textContent = L(23), u3.style.margin = "0 auto 0.15em auto", u3.style.fontFamily = "Arial Black, system-ui", u3.style.fontSize = "inherit", u3.style.fontWeight = "inherit", u3
		}()), tp.appendChild(ti.qY), tq.appendChild(tj.qY), tr.appendChild(tk.qY), tt.appendChild(tu), tt.appendChild(tv), tw.appendChild(tl.qY), tm.appendChild(tn), tm.appendChild(tp), tm.appendChild(tq), tm.appendChild(tr), tm.appendChild(ts), tm
		.appendChild(tt), tm.appendChild(tw), ra.ty.show(ts)
}

function tz(rb) {
	var tm = document.createElement("div"),
		ts = document.createElement("div");
	this.mm = function() {
			ts.textContent = "", bn.uJ.uK && bn.uJ.sA(1);
			for (var s2 = document.createDocumentFragment(), uL = bn.y.rx[0], uM = bn.uM.uN[uL], uO = bn.uM.uO[uL], aB = 0; aB < uM.length; aB++) ! function(s2, ql, uQ, uL) {
				var rr = document.createElement("span");
				rr.textContent = (uQ ? "🟢 " : "⚪ ") + bn.lF.uR(ql, uL), rr.style.color = bn.lF.uS(ql.uT), rr.style.cursor = "pointer", rr.style.margin = "0.2em 0.2em 0.2em 0.2em", rr.style.width = rr.style.maxWidth = 2 === uL ? "10em" : "9em",
					rr.style.height = rr.style.maxHeight = "1.4em", rr.style.whiteSpace = "nowrap", rr.style.overflow = "hidden", rr.style.textOverflow = "ellipsis", rr.style.font = "inherit", rr.style.display = "inline-block", bn.lF.uU(ql) && (
						rr.style.textDecoration = "underline"), ql.uV && (rr.style.textDecorationLine = "underline", rr.style.textDecorationStyle = "dotted");
				rr.onclick = function(e) {
					rb(e, ql)
				}, bJ.rL() || (rr.onmouseover = function(e) {
					bn.uJ.uW(e.target, ql, 1)
				}), s2.appendChild(rr)
			}(s2, uM[aB], aB < uO, uL);
			ts.appendChild(s2)
		}, this.show = function(qn) {
			qn.appendChild(tm)
		}, this.sA = function(qn) {
			t.removeChild(qn, tm)
		}, this.resize = function() {
			ts.style.fontSize = bA.qt.r2(bA.qt.sC(.02, .3))
		}, tm.style.top = "0", tm.style.left = "0", tm.style.width = tm.style.height = "100%", tm.style.overflowX = "hidden", tm.style.overflowY = "auto", tm.style.font = "inherit", ts.style.font = "inherit", ts.style.margin = "0.4em", tm
		.appendChild(ts)
}

function uX(uY) {
	var tm = document.createElement("div"),
		re = document.createElement("div"),
		uZ = [];

	function rG() {
		bJ.rL() || (this.style.backgroundColor = bA.color.rO(bB.nw, 50))
	}

	function rH() {
		this.style.backgroundColor = bB.nw
	}
	this.sM = function(ub, uc) {
			uZ[2].textContent = ub + 1 + " / " + uc
		}, this.show = function(ql) {
			ql = bn.lF.s4(ql, bn.lF.s5(ql)), re.appendChild(bn.s9.transform(ql)), document.body.appendChild(tm)
		}, this.resize = function() {
			var j = bA.qt.sC(.03, .5);
			tm.style.width = 10 * j + "px", tm.style.font = bA.qt.sk(1, .75 * j), bA.qt.r3(tm, 4), re.style.top = j + "px", re.style.font = bA.qt.sk(0, .55 * j), bA.qt.r3(re, 2), tm.style.height = j + re.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qt.r3(uZ[aB], 6), uZ[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uZ[aB].style.height = j + "px", bA.qt.r3(uZ[aB], 2);
			uZ[2].style.width = 4 * j + "px", uZ[1].style.left = 2 * j + "px", uZ[2].style.left = 4 * j + "px", uZ[3].style.left = 8 * j + "px"
		}, this.ud = function() {
			for (var aB = 0; aB < 4; aB++) uZ[aB].onclick = null, uZ[aB].onmouseover = null, uZ[aB].onmouseout = null;
			t.removeChild(document.body, tm), tm = re = uZ = null
		}, tm.style.position = "absolute", tm.style.color = bB.o0, tm.style.zIndex = "3", tm.style.right = "0", tm.style.top = "0", re.style.position = "absolute", re.style.height = "auto", re.style.color = bB.o0, re.style.backgroundColor = bB.nw, re
		.style.left = "0", re.style.width = "100%", re.style.overflowWrap = "break-word", tm.appendChild(re);
	for (var aB = 0; aB < 4; aB++) uZ[aB] = document.createElement("div"), uZ[aB].style.position = "absolute", uZ[aB].style.backgroundColor = bB.nw, uZ[aB].style.color = bB.o0, uZ[aB].style.top = "0", uZ[aB].style.display = "flex", uZ[aB].style
		.justifyContent = "center", uZ[aB].style.alignItems = "center", uZ[aB].style.userSelect = "none", uZ[aB].style.outline = "none", uZ[aB].style.font = "inherit", 2 !== (uZ[aB].ua = aB) && (uZ[aB].onclick = uY, uZ[aB].onmouseover = rG, uZ[aB]
			.onmouseout = rH), tm.appendChild(uZ[aB]);
	uZ[0].textContent = "◀", uZ[1].textContent = "▶", uZ[3].textContent = "✖"
}

function ue(uY) {
	var sa = document.createElement("div");

	function rG() {
		bJ.rL() || (sa.style.backgroundColor = bA.color.rO(bB.nw, 50))
	}

	function rH() {
		sa.style.backgroundColor = bB.nw
	}
	this.sM = function(uc) {
			sa.textContent = uc
		}, this.show = function() {
			document.body.appendChild(sa)
		}, this.resize = function() {
			var j = bA.qt.sC(.03, .5);
			sa.style.width = 2 * j + "px", sa.style.height = j + "px", sa.style.font = bA.qt.sk(1, .75 * j), bA.qt.r3(sa, 4), bA.qt.r3(sa, 2)
		}, this.ud = function() {
			sa.onclick = null, sa.onmouseover = null, sa.onmouseout = null, t.removeChild(document.body, sa), sa = null
		}, sa.style.position = "absolute", rH(), sa.style.color = bB.o0, sa.style.zIndex = "3", sa.style.right = "0", sa.style.top = "0", sa.style.display = "flex", sa.style.justifyContent = "center", sa.style.alignItems = "center", sa.style
		.userSelect = "none", sa.style.outline = "none", sa.onclick = uY, sa.onmouseover = rG, sa.onmouseout = rH
}

function uf(sS) {
	var tm = document.createElement("div"),
		ug = document.createElement("div"),
		sc = (this.fC = 0, this.fE = 0);

	function ui() {
		bn.uj.sA()
	}
	this.rS = sS, this.show = function(fC, fE, ul) {
		if (sc) return [0, 0];
		sc = 1, this.fC = fC, this.fE = fE,
			function(self, ul) {
				var i = bA.qt.sC(.16, .7),
					j = sS.length * i / 3,
					un = h.i / h.k,
					uo = h.j / h.k,
					nc = Math.min(1, Math.min(un / i, uo / j));
				i *= nc, j *= nc, ul && (self.fC += bA.qt.sC(.03, .5)), self.fC = bL.iD(self.fC, 0, un - i), self.fE = bL.iD(self.fE, 0, uo - j), ug.style.left = self.fC + "px", ug.style.top = self.fE + "px", ug.style.width = i + "px", ug.style
					.height = j + "px", ug.style.font = bA.qt.sk(0, .3 * j / sS.length), bA.qt.r3(ug, 5);
				for (var aB = 1; aB < sS.length; aB++) bA.qt.r3(sS[aB].button, 8)
			}(this, ul), document.body.appendChild(tm)
	}, this.sA = function() {
		sc && (sc = 0, tm.removeEventListener("click", ui), t.removeChild(document.body, tm))
	};
	for (var aB = 0; aB < sS.length; aB++) new rq("" + (1 + aB), sS[aB].button, 0, 1);
	tm.style.position = "fixed", tm.style.top = "0", tm.style.left = "0", tm.style.width = "100%", tm.style.height = "100%", tm.style.zIndex = "5", ug.style.position = "absolute",
		function() {
			for (var uk = (100 / sS.length).toFixed(2) + "%", aB = 0; aB < sS.length; aB++) sS[aB].button.style.width = "100%", sS[aB].button.style.height = sS[aB].button.style.maxHeight = uk, sS[aB].button.style.padding = "0.0em 0.9em", ug
				.appendChild(sS[aB].button)
		}(), tm.appendChild(ug), tm.addEventListener("click", ui)
}

function ee() {
	var up, uq, ur;

	function uy(aB) {
		return bA.color.ns(uq[aB][0], uq[aB][1], uq[aB][2])
	}

	function v4(fO, fP) {
		return bA.color.vE(uq[fO], uq[fP]), uy(fP)
	}

	function uw() {
		up && (up.remove(), up = null)
	}
	this.show = function(ef, colors, id) {
		0 <= (ur = id) && b0.y.eZ(0) && b0.ea.us(0, id), ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = (ef = ef.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			uq = colors, (up = document.createElement("div")).style.position = "fixed", up.style.top = "0", up.style.left = "0", up.style.width = "100%", up.style.height = "100%", up.style.backgroundColor = bA.color.nu(uq[0][0], uq[0][1], uq[0][
				2], .6), up.style.zIndex = "6", up.onclick = function(e) {
				e.target === up && uw()
			},
			function(ef) {
				var i1, ux = document.createElement("div");
				ux.style.position = "absolute", ux.style.display = "flex", ux.style.flexDirection = "column", ux.style.top = "50%", ux.style.left = "50%", ux.style.backgroundColor = uy(2), i1 = a0.a1.iE() ? bA.qt.uz(h.min) : bA.qt.sC(.4);
				i1 = Math.max(i1, 200), ux.style.width = bA.qt.r2(i1), ux.style.height = bA.qt.r2(i1), ux.style.transform = "translate(-50%, -50%)",
					function(ux, i1) {
						var v3 = document.createElement("div");
						v3.style.flex = "0 0 10%", v3.style.overflow = "hidden", v3.style.backgroundColor = uy(1), v3.style.color = v4(1, 7), v3.style.font = bA.qt.sk(1, .05 * i1), v3.style.display = "flex", v3.style.alignItems = "center", v3
							.style.justifyContent = "center", v3.innerHTML = L(24), ux.appendChild(v3)
					}(ux, i1),
					function(ux, ef, i1) {
						var v5 = document.createElement("div");
						v5.style.flex = "0 0 70%", v5.style.overflowY = "auto", v5.style.overflowX = "hidden", v5.style.whiteSpace = "pre-wrap", v5.style.wordWrap = "break-word", v5.style.padding = bA.qt.r2(.02 * i1), v5.style.backgroundColor =
							uy(2), v5.style.color = v4(2, 8), v5.style.font = bA.qt.sk(0, .07 * i1), v5.innerHTML = ef, v5.innerHTML = "<style>a { color: inherit; }</style>" + v5.innerHTML, ux.appendChild(v5)
					}(ux, ef, i1),
					function(ux, i1) {
						var v6 = document.createElement("div"),
							v7 = (v6.style.display = "flex", v6.style.flexDirection = "row", v6.style.justifyContent = "space-between", v6.style.alignItems = "stretch", v6.style.backgroundColor = uy(3), v6.style.flex = "1", v6.style.padding = bA
								.qt.r2(.01 * i1), v6.style.gap = bA.qt.r2(.01 * i1), document.createElement("div")),
							v8 = (v7.style.flex = "0 0 60%", v7.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								uw()
							}, uy(4), !1)),
							v8 = (v8.button.style.width = "100%", v8.button.style.height = "100%", v8.button.style.color = v4(4, 9), v8.button.style.font = bA.qt.sk(1, .05 * i1), v7.appendChild(v8.button), document.createElement("div")),
							vA = (v8.style.flex = "0 0 15%", v8.style.height = "100%", v8.style.backgroundColor = uy(5), document.createElement("div")),
							vB = (vA.style.flex = "1", vA.style.height = "100%", new w(L(26), function(e) {
								return bA.qt.vC(e), ur < 0 || b0.y.eZ(0) && (b0.ea.us(1, ur), ur = -1), !0
							}, uy(6), !1));
						vB.button.style.width = "100%", vB.button.style.height = "100%", vB.button.style.color = v4(6, 10), vB.button.style.font = bA.qt.sk(1, .035 * i1), vA.appendChild(vB.button), v6.appendChild(v7), v6.appendChild(v8), v6
							.appendChild(vA), ux.appendChild(v6)
					}(ux, i1), up.appendChild(ux)
			}(ef), document.body.appendChild(up)
	}
}

function vF(so, vG) {
	this.qj = [];
	var vH = this.qj;

	function click() {
		for (var aB = 0; aB < vH.length; aB++) vH[aB].textContent = vH[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eC = parseInt(this.name);
		void 0 !== so.eC && bj.sL.sM(so.eC, eC), vG && vG(eC)
	}
	for (var vI, f5 = so.su.length, aB = 0; aB < f5; aB++)(vI = document.createElement("p")).textContent = "⚪ " + so.su[aB], vI.style.margin = "0", vI.name = "" + aB, vI.style.cursor = "pointer", vI.style.fontSize = "1em", vI.addEventListener(
		"click", click), vH.push(vI);
	vH[so.value].textContent = vH[so.value].textContent.replace("⚪", "🟢")
}

function vJ(title, vK, vL) {
	var tN = document.createElement("div"),
		vM = document.createElement("div"),
		sy = document.createElement("div"),
		vN = document.createElement("div"),
		vO = document.createElement("div");
	this.vP = sy, this.vQ = vK, this.show = function() {
			!1 !== vL ? document.body.appendChild(tN) : (document.body.appendChild(vM), document.body.appendChild(vN))
		}, this.sA = function() {
			!1 !== vL ? t.removeChild(document.body, tN) : (t.removeChild(document.body, vM), t.removeChild(document.body, vN))
		}, this.vU = function() {
			var sD = bA.qt.sC(.1),
				sB = bA.qt.sC(.08 + .04 * (h.vV < 1), .3);
			return {
				sD: sD,
				sB: sB,
				vW: h.j / h.k - sD - sB
			}
		}, this.resize = function(sW) {
			var f5 = vK.length,
				vX = this.vU(),
				sD = vX.sD,
				sB = vX.sB;
			for (vM.style.height = bA.qt.r2(sD), bA.qt.r3(vM, 2), vN.style.top = bA.qt.r2(h.j / h.k - sB), vN.style.height = bA.qt.r2(sB), bA.qt.r3(vN, 8), sy.style.top = bA.qt.r2(sD), sy.style.height = sy.style.maxHeight = bA.qt.r2(vX.vW), vM.style
				.font = bA.qt.sk(0, bA.qt.sC(.02, .15)), vN.style.font = bA.qt.sk(0, bA.qt.sC(.02, .7)), sy.style.font = bA.qt.sk(0, bA.qt.sC(.02, .35)), aB = 1; aB < f5; aB++) bA.qt.r3(vK[aB].button, 4);
			for (var sX = 0, aB = 0; aB < f5; aB++) sX += vK[aB].button.offsetWidth;
			if (sW && sX < vN.offsetWidth)
				for (aB = 0; aB < f5; aB++) vK[aB].button.style.width = (100 * vK[aB].button.offsetWidth / sX).toFixed(2) + "%";
			else
				for (aB = 0; aB < f5; aB++) vK[aB].button.style.width = "auto";
			vN.tg && (vN.scrollLeft = vN.tg), sW || this.resize(!0)
		}, this.vY = function() {
			var vX = this.vU(),
				ed = h.k;
			vZ.fillStyle = bB.nw, vZ.fillRect(0, ed * vX.sD, h.i, ed * vX.vW)
		}, tN.style.position = "absolute", tN.style.top = "0", tN.style.left = "0", tN.style.width = "100%", tN.style.height = "100%", vM.style.position = "absolute", vM.style.top = "0", vM.style.left = "0", vM.style.width = "100%", vM.style
		.display = "flex", vM.style.backgroundColor = bB.nw, vN.style.position = "absolute", vN.style.left = "0", vN.style.width = "100%", bA.qt.tT(vN), vO.style.height = vO.style.maxHeight = "100%", sy.style.position = "absolute", sy.style.width =
		"100%", sy.style.backgroundColor = bB.nw,
		function() {
			for (var aB = 0; aB < vK.length; aB++) vK[aB].button.style.height = "100%", vK[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vK.length; aB++) vO.appendChild(vK[aB].button);
	vM.appendChild(function() {
		var vT = document.createElement("h1");
		return vT.textContent = title, vT.style.margin = "auto", vT.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vT.style.fontFamily = "Arial Black, system-ui", vT
	}()), vN.appendChild(vO), !1 !== vL && (tN.appendChild(sy), tN.appendChild(vM), tN.appendChild(vN))
}

function rq(va, vb, vc, vd) {
	var self;
	this.rr = document.createElement("span"), (self = this).rr.textContent = va, self.rr.style.color = bB.o0, self.rr.style.position = "absolute", self.rr.style.font = "inherit", vd ? self.rr.style.bottom = "0.06em" : self.rr.style.top = "0.12em",
		vc ? self.rr.style.left = "0.2em" : self.rr.style.right = "0.2em", self.rr.style.fontSize = "0.6em", self.rr.style.pointerEvents = "none", self.rr.style.whiteSpace = "pre", vb.style.position = "relative", vb.style.overflow = "hidden", vb
		.appendChild(self.rr)
}

function tV(va, vb, ve, vf, vg) {
	var self;
	this.rr = document.createElement("span"), this.resize = function() {
			this.rr.style.fontSize = ((vf - ve) * vb.offsetHeight).toFixed(1) + "px"
		}, (self = this).rr.textContent = va, self.rr.style.color = bB.o0, self.rr.style.font = "inherit", self.rr.style.margin = "0.1em 0.6em", self.rr.style.pointerEvents = "none", vg && (self.rr.style.fontWeight = "bold"), self.rr.style
		.whiteSpace = "nowrap", self.rr.style.display = "block", vb.appendChild(self.rr)
}

function vh(vi, vj, vk, vl) {
	var vm = document.createElement("textarea"),
		vn = (this.e = vm, !0);

	function vs() {
		vm.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vj && bA.qt.r3(vm, 5)
		}, this.vo = function(ef) {
			vm.value = ef
		}, this.vp = function() {
			return vm.value
		}, this.vq = function() {
			vm.select()
		}, this.clear = function() {
			vm.value = ""
		}, this.vr = function() {
			vn && navigator.clipboard ? (vm.select(), navigator.clipboard.writeText(vm.value).catch(function() {
				vn = !1, vs()
			})) : vs()
		}, vm.setAttribute("id", "textArea" + t.y.sr++), vm.setAttribute("autocomplete", "off"), vi && vm.setAttribute("placeholder", vi), vm.style.top = "0", vm.style.left = "0", vm.style.width = "100%", vm.style.height = "100%", vm.style
		.userSelect = "none", vm.style.outline = "none", vm.style.resize = "none", vm.style.border = "none", vm.style.color = bB.o0, vm.style.backgroundColor = bB.nt, vl ? (vm.style.fontSize = "1em", vm.rows = 6, vm.style.padding = "0.25em") : (vm
			.style.padding = "0.45em", vm.style.fontSize = "1.2em"), vk && vm.addEventListener("input", function(e) {
			vk(e)
		}), vm.addEventListener("focus", function() {
			h.ss++
		}), vm.addEventListener("blur", function() {
			h.ss--
		})
}

function dI() {
	this.rA = new vt, this.eQ = new vu, this.sL = new vv, this.y = new vw, this.vx = new vy, this.dd = function() {
		this.eQ.dd(), (new vz).dd(), this.vx.dd(), this.y.w0()
	}
}

function vu() {
	function w1(aB, type, w7, dw) {
		bj.eQ.data.push({
			eC: aB,
			type: type || 0,
			value: w7 || 0,
			w7: w7 || 0,
			dw: dw || 0
		})
	}

	function w2(aB, type, w7, dw) {
		bj.eQ.data.push({
			eC: aB,
			type: type,
			value: w7 || "",
			w7: w7 || "",
			dw: dw || 0
		})
	}

	function w3(ni) {
		for (var aB = bj.eQ.data.length; aB < ni; aB++) bj.eQ.data.push(null)
	}
	this.data = [], this.dd = function() {
		w1(0, 1, 0, 5), w1(1, 1, 1), w1(2, 0), w2(3, 2), w1(4, 1), w2(5, 2, "system-ui", 2), w1(6, 0), w1(7, 0, 0), w1(8, 0), w1(9, 1, 1), w1(10, 1), w1(11, 1, 1), w2(12, 2, navigator.language), w1(13), w1(14), w3(100), w2(100, 2), w2(101, 2),
			w2(102, 2), w2(103, 2), w2(104, 2), w2(105, 2), w2(106, 2), w1(107), w1(108), w1(109), w2(110, 2), w1(111), w1(112), w1(113), w2(114, 2), w1(115), w2(116, 2), w1(117, 1), w2(118, 2, "", 2), w1(119, 1, 0, 1), w2(120, 2), w1(121, 1, ~~(
				262144 * Math.random())), w2(122, 2, "Player " + Math.floor(1e3 * Math.random())), w1(123), w2(124), w1(125, 1), w2(126, 2), w1(127, 0, 1), w1(128), w1(129), w1(130), w1(131), w1(132), w2(133, 2), w1(134, 0, 5), w2(135, 2), w2(
				136, 2), w1(137), w1(138), w1(139), w1(140), w1(141), w1(142), w1(143), w1(144), w2(145, 2), w1(146), w1(147), w2(148, 2), w1(149), w1(150, 0, 1), w2(151, 2), w1(152, 0, 5), w1(153, 1), w1(154, 1), w2(155, 2), w2(156, 2), w1(157),
			w1(158), w1(159), w1(160), w2(161, 2), w1(162, 0, 1024), w2(163, 2, "0,0,0"), w2(164, 2, "100,100,100"), w2(165, 2, "30,30,30"), w2(166, 2, "70,70,70"), w2(167, 2, "100,100,100"), w2(168, 2, "85,85,85"), w2(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) w2(170 + aB, 2, "255,255,255");
		w2(174, 2), w2(175, 2), w1(176, 0, 200), w3(180), w1(180, 0), w1(181, 0)
	}, this.sM = function(eC, value) {
		this.data[eC].value = value
	}, this.w4 = function(eC, value) {
		this.sM(eC, value);
		var value = String(value),
			f5 = value.length;
		5e4 < f5 ? console.log("storage value too large: index " + eC + " size " + f5) : (bj.rA.save(eC, value), bj.rA.save(eC, String(this.data[eC].dw), !0))
	}, this.w5 = function(eC) {
		return Number(this.data[eC].value)
	}, this.w6 = function(eC) {
		return String(this.data[eC].value)
	}
}

function vy() {
	var w8 = [];

	function wC(tB) {
		w8.unshift(tB), bj.sL.sM(161, w8.join(";"))
	}

	function wB(tB) {
		for (var wE = w8, f5 = wE.length, aB = 0; aB < f5; aB++)
			if (wE[aB] === tB) return wE.splice(aB, 1), bj.sL.sM(161, wE.join(";")), 1
	}
	this.dd = function() {
		var qa = bj.eQ.data[161].value;
		qa.length && (w8 = qa.split(";"))
	}, this.get = function() {
		return w8
	}, this.w9 = function() {
		return {
			su: w8,
			value: 0
		}
	}, this.uV = function(tB) {
		return bA.r1.has(w8, tB)
	}, this.wA = function(tB) {
		return wB(tB) ? 0 : (wC(tB), 1)
	}, this.mm = function(tB) {
		wB(tB) && wC(tB)
	}, this.wD = function(eC) {
		eC < w8.length && (w8.splice(eC, 1), bj.sL.sM(161, w8.join(";")))
	}
}

function vt() {
	this.wF = function(eC, dw) {
		return Number(this.wG(eC, dw))
	}, this.wG = function(eC, dw) {
		var fX = null;
		return 0 === a0.id ? a0.wH && (fX = a0.wH.getItem((dw ? "v" : "d") + eC)) : 1 === a0.id ? fX = a0.wI.loadString((dw ? 1e3 : 2e3) + eC) : 2 === a0.id && (fX = a0.wJ[(dw ? "v" : "d") + eC]), fX && 0 !== fX.length ? fX : null
	}, this.wK = function(f5, wL) {
		var g = [],
			wM = wL ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wH)
				for (aB = 0; aB < f5; aB++) g.push(a0.wH.getItem(wM + aB))
		} else if (1 === a0.id)
			for (var wN = wL ? 5e3 : 3e3, aB = 0; aB < f5; aB++) g.push(a0.wI.loadString(wN + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f5; aB++) g.push(a0.wJ[wM + aB]);
		return g
	}, this.save = function(eC, value, dw) {
		var wO = (dw ? "v" : "d") + eC;
		if (0 === a0.id) {
			if (a0.wH && bj.eQ.data[140].value) try {
				a0.wH.setItem(wO, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wI.saveString((dw ? 1e3 : 2e3) + eC, value) : 2 === a0.id && (a0.wJ[wO] = value, a0.wP.postMessage(wO + " " + value))
	}, this.wQ = function(g, wL) {
		var f5 = g.length,
			wM = wL ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wH && bj.eQ.data[140].value) try {
				for (aB = 0; aB < f5; aB++) a0.wH.setItem(wM + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wN = wL ? 5e3 : 3e3, aB = 0; aB < f5; aB++) a0.wI.saveString(wN + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f5; aB++) a0.wJ[wM + aB] = g[aB], a0.wP.postMessage(wM + aB + " " + g[aB])
	}
}

function vz() {
	this.dd = function() {
		! function() {
			var data = bj.eQ.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].w7 = 1);
			0 === data[100].dw && (data[100].value = data[100].w7 = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bj.eQ.data,
			f5 = data.length;
		for (aB = 0; aB < f5; aB++) {
			var wT = bj.rA.wF(aB, !0);
			data[aB] && data[aB].dw === wT && (null === (wT = bj.rA.wG(aB)) ? data[aB].value = data[aB].w7 : 2 === data[aB].type ? data[aB].value = wT : (wT = Number(wT), isNaN(wT) ? data[aB].value = data[aB].w7 : data[aB].value = wT))
		}
	}
}

function vw() {
	function wY(g) {
		if (0 === g.length) bj.sL.sM(116, "");
		else {
			for (var wb = g[0], aB = 1; aB < g.length; aB++) wb += ";" + g[aB];
			bj.sL.sM(116, wb)
		}
	}
	this.wV = function() {
		bj.eQ.data[110].value.length && (bj.eQ.data[106].value = bj.eQ.data[110], bj.sL.sM(110, ""), this.wW())
	}, this.wW = function() {
		var g = bj.eQ.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eQ.data[106].value), g.unshift(bj.eQ.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wX = [], aB = 0; aB < g.length; aB += 2) wX.push(g[aB]);
		wY(g), bj.eQ.data[117].value = 0, bj.eQ.data[117].su = wX
	}, this.wZ = function(eC) {
		bj.eQ.data[117].su.splice(eC, 1), bj.eQ.data[117].value = Math.min(eC, bj.eQ.data[117].su.length - 1);
		var g = bj.eQ.data[116].value.split(";");
		g.splice(2 * eC, 2), wY(g)
	}, this.wa = function(eC) {
		var g = bj.eQ.data[116].value.split(";");
		return {
			tB: g[2 * eC],
			password: g[2 * eC + 1]
		}
	}, this.wc = function() {
		var fX = bL.iD(bj.eQ.data[121].value, -1, 262143);
		return fX = -1 === fX ? ~~(262144 * Math.random()) : fX
	}, this.w0 = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qa = g[aB].trim(),
				wd = qa.indexOf("="),
				wd = 0 <= wd ? qa.substring(0, wd) : qa;
			document.cookie = wd + "=;expires=0;path=/", document.cookie = wd + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wd + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function vv() {
	this.sM = function(eC, value) {
		2 !== bj.eQ.data[eC].type && (value = Math.floor(value)), bj.eQ.data[eC].value !== value && (bj.eQ.w4(eC, value), 0 === eC ? (t.x(), b7.dd(), t.u(2)) : 1 === eC ? h.dn(1) : 2 === eC ? h.dn(0) : 5 === eC && (bA.qt.we(), h.dn(0)))
	}, this.wf = function() {
		for (var data = bj.eQ.data, aB = 0; aB < 100; aB++) data[aB] && bj.eQ.w4(aB, data[aB].w7);
		bA.qt.we(), h.dn(1)
	}, this.wg = function() {
		for (var data = bj.eQ.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eQ.sM(aB, data[aB].w7)
	}, this.wh = function() {
		for (var fP = bj.eQ, aB = 128; aB < 135; aB++) fP.w4(aB, fP.data[aB].w7)
	}, this.wi = function(data) {
		bj.sL.sM(109, data.tC), bj.sL.sM(107, data.wj), bj.sL.sM(108, data.wk), bj.sL.sM(112, data.wl), bj.sL.sM(111, data.wm), bj.sL.sM(113, data.wn), bj.sL.sM(135, data.wo), bj.sL.sM(136, data.wp), bj.sL.sM(137, data.wq), bj.sL.sM(138, data
			.wr), bj.sL.sM(139, data.ws), bj.sL.sM(141, data.wt), bj.sL.sM(142, data.wu), bj.sL.sM(143, data.wv), bj.sL.sM(144, data.ww)
	}
}

function c4() {
	this.tG = new wx, this.wy = new wz, this.x0 = new x1, this.dd = function() {
		this.tG.dd()
	}
}

function wz() {
	this.x2 = function(size) {
		for (var x3 = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x3.q1(16)));
		return g.join("")
	}, this.x4 = function(qa) {
		return 20 < (qa = qa.trim()).length ? qa.substring(0, 20) : qa
	}
}

function wx() {
	var x5 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (x5[50] = 37, aB = 0; aB < 10; aB++) x5[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) x5[aB + 20] = aB + 11, x5[aB + 52] = aB + 38
	}, this.x6 = function(qa) {
		return qa.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.x7 = function(qa, size) {
		if ((qa = this.x6(qa)).length > size) return qa.substring(0, size);
		for (; qa.length < size;) qa = "-" + qa;
		return qa
	}, this.x8 = function(qa) {
		for (var x9 = x5, f5 = qa.length, g = new Uint8Array(f5), aB = 0; aB < f5; aB++) g[aB] = x9[qa.charCodeAt(aB) - 45];
		return g
	}, this.xA = function(xB) {
		bD.a7(6 * xB.length), this.xC(xB), bH.dd(bD.aC)
	}, this.xC = function(xB) {
		for (var f5 = xB.length, i = bD, aB = 0; aB < f5; aB++) i.a8(6, xB[aB])
	}, this.xD = function(qa) {
		this.xC(this.x8(qa))
	}, this.xE = function(qa, size) {
		this.xC(this.x8(this.x7(qa, size)))
	}, this.xF = function(qa, size) {
		for (var g = this.x8(this.x7(qa, size)), fX = 0, nc = 1, aB = g.length - 1; 0 <= aB; aB--) fX += nc * g[aB], nc *= 64;
		return fX
	}
}

function xG() {
	var i, j, xH;

	function xh(hX, f8, xf, xM, xa) {
		f8 = xg(hX, f8 + 1 + 2 * xM & 3);
		! function(hX, l3) {
			return 1 < Math.abs(hX % i - l3 % i) || 1 < Math.abs(xk(hX) - xk(l3))
		}(hX, f8) && 0 === xa[f8 << 2] && (xa[f8 << 2] = xf)
	}

	function xk(gd) {
		return Math.floor((gd + .5) / i) % j
	}

	function xg(gd, f8) {
		return gd + xH[f8]
	}
	this.xI = function(qa) {
		var aB, xJ, f5, xK, x3 = bH;
		for (bG.tG.xA(bG.tG.x8(qa)), bS.xN.xO[bS.el].i = bS.fG = i = x3.q1(12), bS.xN.xO[bS.el].j = bS.fH = j = x3.q1(12), xH = [-i, -1, i, 1], bS.xX = document.createElement("canvas"), bS.xX.width = bS.fG, bS.xX.height = bS.fH, bS.xT = bS.xX
			.getContext("2d", {
				alpha: !1
			}), bS.xU = bS.xY = null, bS.xU = bS.xT.getImageData(0, 0, bS.fG, bS.fH), bS.xY = bS.xU.data, bA.r1.xZ(bS.xY), f5 = x3.q1(12), xJ = x3.q1(5), xK = xQ(i * j - 1), aB = 0; aB < f5; aB++) ! function(lL, gd, xL, xM) {
			var aB, f8, x3 = bH,
				xa = bS.xY,
				xb = gd,
				xc = gd,
				xd = 0,
				xe = 1 + xL,
				xf = 2 - xL;
			for (xa[gd << 2] = xe, aB = 0; aB < lL; aB++) f8 = x3.q1(2), gd = xg(gd, f8), xa[gd << 2] === xe ? xd % 2 == 1 && xh(xc, xd + 2 * xM + 3, xf, xM, xa) : xa[gd << 2] = xe, xh(gd, f8, xf, xM, xa), xh(xc, f8, xf, xM, xa), xc = gd,
				xd = f8;
			xg(gd, 0) === xb ? (xh(gd, 0, xf, xM, xa), xh(xb, 0, xf, xM, xa)) : xg(gd, 1) === xb && (xh(gd, 0, xf, xM, xa), xh(xb, 2, xf, xM, xa));
			0 === lL && (xh(xb, 0, xf, xM, xa), xh(xb, 2, xf, xM, xa))
		}(x3.q1(xJ), x3.q1(xK), 1 === x3.q1(1), 1 === x3.q1(1));
		var fC, fE, hx, xl, xm, xn, xa = bS.xY,
			xo = !0,
			xp = bS.xN.xO[bS.el].xp,
			xq = bS.xN.xO[bS.el].xq;
		for (fE = 0; fE < j; fE++)
			for (xl = !0, xm = xo, fC = xn = 0; fC < i; fC++) hx = 4 * fE * i + 4 * fC, xn <= fC && 0 < xa[hx] && (xm = 2 === xa[hx], xl) && (xl = !1, xm !== xo) ? (xo = xm, xn = fC + 1, fC = -1) : (xm ? (xa[hx] = xq[0], xa[1 + hx] = xq[1], xa[
				2 + hx] = xq[2]) : (xa[hx] = xp[0], xa[1 + hx] = xp[1], xa[2 + hx] = xp[2]), xa[3 + hx] = 255);
		bS.xT.putImageData(bS.xU, 0, 0), bS.xV = !0, bS.xW.dd(), bf.dk = !0
	}
}

function x1() {
	this.xI = function(xr) {
		for (var x3 = bH, size = x3.q1(xr), xs = 7 + 9 * x3.q1(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(x3.q1(xs)));
		return g.join("")
	}
}

function c9() {
	var se, sf, xt, xu, xv, xw, xx, xy, xz, y0;

	function y2() {
		var y5 = aD.y5;
		for (xz = y5; xz < aD.f2; xz++) y1();
		for (xz = aD.hT ? aD.kQ : 0; xz < y5; xz++) {
			if (!y6()) {
				for (var fP = aD.yA = xz; fP < y5; fP++) xz = fP, y1();
				return
			}
			y9(xw + se * xv + bL.fW(xv, 2), xx + sf * xv + bL.fW(xv, 2))
		}
	}

	function yc(player) {
		for (var iy = ag.iy, j0 = ag.j0, iz = ag.iz, j1 = ag.j1, fE = j0[player]; fE <= j1[player]; fE++)
			for (var fC = iy[player]; fC <= iz[player]; fC++) {
				var ej = ac.yd(fC, fE);
				ac.gf(ej) && (ac.jb(ej) ? ac.ga(ej, player) : ac.ye(ej, player))
			}
	}

	function yb(g, tX, tY) {
		var eU = g[tX];
		g[tX] = g[tY], g[tY] = eU
	}

	function y6() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (se = bL.fW(xt * ay.random(), ay.value(100)), sf = bL.fW(xu * ay.random(), ay.value(100)), yj()) return 1;
			return
		}() || function() {
			var iP, iS, fO, y8, fP, y7;
			for (iP = bL.fW(xt * ay.random(), ay.value(100)), iS = bL.fW(xu * ay.random(), ay.value(100)), fO = 40; 1 <= fO; fO--)
				for (y8 = xu - fO; 0 <= y8; y8 -= 40)
					for (sf = (y8 + iS) % xu, fP = 40; 1 <= fP; fP--)
						for (y7 = xt - fP; 0 <= y7; y7 -= 40)
							if (se = (y7 + iP) % xt, yj()) return 1;
			return
		}()
	}

	function yj() {
		for (var gd, yl, gap = bL.fW(xv - xy, 2), ym = xx + sf * xv + gap, yn = xw + se * xv + gap, yk = ym + xy - 1; ym <= yk; yk--)
			for (yl = yn + xy - 1; yn <= yl; yl--)
				if (gd = ac.yd(yl, yk), !ac.f0(gd) || ac.jb(gd)) return;
		return 1
	}

	function y9(y7, y8) {
		y1(), yo(y7 - 2, y8 - 2)
	}

	function y1() {
		ag.mz[xz] = 0, ag.gt[xz] = ag.yZ[xz] = 0, ag.gX[xz] = [], ag.gl[xz] = [], ag.gm[xz] = [], ag.fU[xz] = [], ag.iy[xz] = ag.j0[xz] = ag.iz[xz] = ag.j1[xz] = 0
	}

	function yo(y7, y8) {
		var gd, aB, yp, yq;
		for (ag.mz[xz] = 1, ag.iy[xz] = y7 + 10, ag.j0[xz] = y8 + 10, ag.j1[xz] = ag.iz[xz] = 0, yp = y7; yp < y7 + 4; yp++)
			for (yq = y8; yq < y8 + 4; yq++)(y7 < yp && yp < y7 + 3 || y8 < yq && yq < y8 + 3) && (gd = ac.yd(yp, yq), ac.f0(gd)) && (ag.iy[xz] = Math.min(yp, ag.iy[xz]), ag.iz[xz] = Math.max(yp, ag.iz[xz]), ag.j0[xz] = Math.min(yq, ag.j0[xz]), ag
				.j1[xz] = Math.max(yq, ag.j1[xz]), y0[ag.gt[xz]] = gd, ag.gt[xz]++, ac.ye(gd, xz));
		for (ag.yZ[xz] = ag.gt[xz], aB = ag.gt[xz] - 1; 0 <= aB; aB--) ac.yr(y0[aB], xz) ? (ac.ga(y0[aB], xz), ag.gl[xz].push(y0[aB])) : ac.ys(y0[aB]) ? (ac.ga(y0[aB], xz), ag.gm[xz].push(y0[aB])) : ac.yt(y0[aB]) && (ac.ga(y0[aB], xz), ag.fU[xz]
			.push(y0[aB]))
	}
	this.dd = function() {
		if (y0 = new Array(12), xy = 6, xv = 10, xt = bL.fW(bS.fG, xv), xu = bL.fW(bS.fH, xv), xw = bL.fW(bS.fG - xv * xt, 2), xx = bL.fW(bS.fH - xv * xu, 2), aD.hT)
			for (var aB = 0; aB < aD.kQ; aB++) xz = aB, y1(), ag.mz[xz] = 1;
		(0 === aD.data.spawningType ? y2 : 1 === aD.data.spawningType ? (y2(), function() {
			var yB = aD.yC;
			aD.yD || yB++;
			if (!(yB < 3)) {
				for (var data = aD.data, jg = (aD.hT ? aD.kQ : 0) + data.teamPlayerCount[0], ni = aD.yA, yE = new Uint32Array(yB), yF = new Uint32Array(yB), yG = new Uint16Array(yB), yH = new Uint16Array(yB), f3 = bg.f3, iy = ag.iy, j0 =
						ag.j0, iz = ag.iz, j1 = ag.j1, fk = bO.fk, fl = bO.fl, aB = jg; aB < ni; aB++) fk[aB] = iy[aB] + iz[aB] >> 1, fl[aB] = j0[aB] + j1[aB] >> 1;
				for (aB = jg; aB < ni; aB++) {
					var id = f3[aB];
					yE[id] += fk[aB], yF[id] += fl[aB]
				}
				var kn = bg.kn;
				for (aB = 1; aB < yB; aB++) {
					var gY = Math.max(data.teamPlayerCount[kn[aB]], 1);
					yG[aB] = bL.fW(yE[aB], gY), yH[aB] = bL.fW(yF[aB], gY)
				}
				var yI = bg.yI,
					yJ = bg.yJ,
					yK = bg.yK,
					fj = bO.fj;
				for (aB = 0; aB < 512; aB++) fj[aB] = aB;
				for (var eB = 0; eB < 2 + (4 <= yB); eB++)
					for (aB = jg; aB < ni; aB++) {
						for (var hX = aB, yL = fj[hX], yM = 1, fL = bL.yN(fk[yL] - yG[1], fl[yL] - yH[1]), fO = 2; fO < yB; fO++) {
							var yO = bL.yN(fk[yL] - yG[fO], fl[yL] - yH[fO]);
							yO < fL && (fL = yO, yM = fO)
						}
						var yP = f3[hX];
						if (yM !== yP) {
							if (2 === eB && 4 <= yB) {
								var yQ = Math.max((yM + 1) % yB, 1),
									yR = bL.yN(fk[yL] - yG[yQ], fl[yL] - yH[yQ]);
								for (fO = 1; fO < yB; fO++) yO = bL.yN(fk[yL] - yG[fO], fl[yL] - yH[fO]), fL < yO && yO < yR && (yR = yO, yQ = fO);
								yQ !== yP && bL.yN(yG[yP] - yG[yQ], yH[yP] - yH[yQ]) < bL.yN(yG[yP] - yG[yM], yH[yP] - yH[yM]) && (yM = yQ)
							}
							var yS = kn[yM],
								yT = yJ[yS] + (aD.hT ? 0 : yK[yS]),
								l3 = yI[yT],
								yU = fj[l3],
								yV = yJ[yS + 1];
							fL = bL.yN(fk[yU] - yG[yP], fl[yU] - yH[yP]);
							for (var ed = yT + 1; ed < yV; ed++) {
								var yW = yI[ed],
									yX = fj[yW];
								(yO = bL.yN(fk[yX] - yG[yP], fl[yX] - yH[yP])) < fL && (fL = yO, l3 = yW)
							}
							l3 < jg || ni <= l3 || (yU = fj[l3], yE[yP] += fk[yU] - fk[yL], yF[yP] += fl[yU] - fl[yL], yE[yM] += fk[yL] - fk[yU], yF[yM] += fl[yL] - fl[yU], gY = data.teamPlayerCount[kn[yP]], yG[yP] = bL.fW(yE[yP], gY),
								yH[yP] = bL.fW(yF[yP], gY), gY = data.teamPlayerCount[yS], yG[yM] = bL.fW(yE[yM], gY), yH[yM] = bL.fW(yF[yM], gY), fj[hX] = yU, fj[l3] = yL)
						}
					}! function() {
						for (var fj = bO.fj, iy = ag.iy, j0 = ag.j0, iz = ag.iz, j1 = ag.j1, gt = ag.gt, yZ = ag.yZ, gl = ag.gl, gm = ag.gm, fU = ag.fU, aB = 0; aB < 512; aB++) {
							var ya = fj[aB];
							if (ya !== aB) {
								yb(iy, aB, ya), yb(j0, aB, ya), yb(iz, aB, ya), yb(j1, aB, ya), yb(gt, aB, ya), yb(yZ, aB, ya), yb(gl, aB, ya), yb(gm, aB, ya), yb(fU, aB, ya), yc(aB), yc(ya), fj[aB] = aB;
								for (var j = ya, ge = fj[j]; ge !== aB;) ge = fj[j = ge];
								fj[j] = ya
							}
						}
					}()
			}
		}) : function() {
			var y5 = aD.y5;
			for (xz = y5; xz < aD.f2; xz++) y1();
			for (xz = aD.hT ? aD.kQ : 0; xz < y5; xz++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							y7 = spawningData[2 * xz] + 1,
							spawningData = spawningData[2 * xz + 1] + 1;
						if (3 < y7 && y7 < bS.fG - 5 && 3 < spawningData && spawningData < bS.fH - 5 && ac.f0(ac.yd(y7, spawningData)) && function(y7, y8) {
								var gd, yl, yk;
								for (yk = y8; y8 - 6 < yk; yk--)
									for (yl = y7; y7 - 6 < yl; yl--)
										if (gd = ac.yd(yl, yk), ac.jb(gd)) return;
								return 1
							}(y7 + 3, spawningData + 3)) return y9(y7 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!y6()) {
						for (var fP = aD.yA = xz; fP < y5; fP++) xz = fP, y1();
						return
					}
					var y7 = xw + se * xv + bL.fW(xv, 2),
						y8 = xx + sf * xv + bL.fW(xv, 2);
					y9(y7, y8)
				}
		})(), bd.mv[7] = ag.gt[aD.ep]
	}, this.yu = function(jZ, yv, yw) {
		var aB, y7, y8, gd, se, sf;
		for (xz = jZ, aB = 0; aB < 20; aB++)
			for (y7 = yv + aB; yv - aB <= y7; y7--)
				for (y8 = yw + aB; yw - aB <= y8; y8--)
					if ((y7 === yv + aB || y7 === yv - aB || y8 === yw + aB || y8 === yw - aB) && 3 < y7 && y7 < bS.fG - 5 && 3 < y8 && y8 < bS.fH - 5 && ac.f0(ac.yd(y7, y8)) && function(y7, y8) {
							var gd, yl, yk;
							for (yk = y8; y8 - 6 < yk; yk--)
								for (yl = y7; y7 - 6 < yl; yl--)
									if (gd = ac.yd(yl, yk), ac.jb(gd) && !ac.z2(xz, gd)) return;
							return 1
						}(y7 + 3, y8 + 3)) {
						if (0 < ag.gt[xz]) {
							for (sf = se = gd = void 0, se = ag.iz[xz]; se >= ag.iy[xz]; se--)
								for (sf = ag.j1[xz]; sf >= ag.j0[xz]; sf--) gd = 4 * (sf * bS.fG + se), ac.yz(xz, gd) && (ac.z0(gd), ag.gt[xz]--);
							y1()
						}
						return yo(y7 - 1, y8 - 1), !0
					} return !1
	}, this.z1 = function(jZ) {
		xz = jZ, y6() ? y9(xw + se * xv + bL.fW(xv, 2), xx + sf * xv + bL.fW(xv, 2)) : y1()
	}
}

function z3() {
	at.z4(), vZ.setTransform(iG, 0, 0, iG, 0, 0), vZ.imageSmoothingEnabled = iG < 3, vZ.drawImage(bS.xX, aS.z5(), aS.z6()), bP.z7.vY(), vZ.drawImage(z8, aS.z5(), aS.z6()), at.vY(), bN.vY(), af.vY(), (aD.nT ? (bh.vY(), bC) : (aN.vY(), aV.vY(), aR
	.vY(), bC.vY(), aw.vY(), aW.vY(), aS.vY(), aQ.vY(), bh.vY(), aU.vY(), aP.vY(), aM.vY(), aL.vY(), aX.vY(), be.vY(), av)).vY(), t.vY()
}

function z9(zA, i, j) {
	zA.clearRect(0, 0, i, j), zA.fillStyle = bB.nx, zA.fillRect(0, 0, i, j)
}

function zB(zA, i, j, zC) {
	zA.fillStyle = bB.o0, zA.fillRect(0, 0, i, zC), zA.fillRect(0, 0, zC, j), zA.fillRect(i - zC, 0, zC, j), zA.fillRect(0, j - zC, i, zC)
}

function zD(zA, fC, fE, i1, zC, gd, zE) {
	zA.fillStyle = bB.o0;
	var gd = Math.floor(i1 * gd),
		tL = (gd += (gd - zC) % 2, Math.floor((gd - zC) / 2)),
		i1 = Math.floor((i1 - gd) / 2);
	zA.fillRect(fC + i1, fE + i1 + tL, gd, zC), zE && zA.fillRect(fC + i1 + tL, fE + i1, zC, gd)
}

function zG() {
	this.dd = function() {
		8 === aD.ki && aN.zH()
	}, this.zI = function(zJ) {
		var elo = aD.data.elo,
			jf = (elo[zJ] - elo[1 - zJ]) / 10,
			jf = 8 / (1 + Math.pow(2, jf / 32)),
			jf = Math.floor(10 * jf + .5),
			zL = elo[zJ] + jf,
			zM = this.zN(zL),
			elo = this.zN(elo[1 - zJ] - jf),
			jf = (0 === zJ ? aN.zP(zM, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zP(elo, zM, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zL * bL.sqrt(zL) >> 8),
			elo = ((1 + aD.zS) * jf / 100).toFixed(2);
		zJ === aD.ep ? aN.zT(640, L(27, [elo]), 40, 0, bB.o0, bB.nx, -1, !1) : aN.zT(640, L(28, [ag.zU[zJ], elo]), 40, 0, bB.o0, bB.nx, -1, !1)
	}, this.zN = function(elo) {
		return 16e3 === (elo = bL.iD(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s9 = new zV, this.xa = new zW
}

function zW() {
	this.hr = !1;
	this.za = [], this.zb = 100;
	var nQ, nR, gap, i1, zX, zZ, zc = 0,
		zd = new Array(9),
		ze = [],
		zf = [],
		zg = 0,
		zh = 0,
		zi = 0,
		zj = 0;

	function zv() {
		zd.sort(function(fO, fP) {
			return fP.kV - fO.kV
		});
		for (var qa = "" + zd[0].pc, aB = 1; aB < 9; aB++) qa += "," + zd[aB].pc;
		for (aB = 0; aB < 9; aB++) qa += "," + zd[aB].kV;
		bj.eQ.w4(120, qa)
	}
	this.dd = function() {
		for (var zk = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zk.length; aB++) {
			var color = 6 === zk[aB] ? bB.oQ : bB.ny;
			this.za.push(bA.canvas.zl(ab.get(3), zk[aB], color))
		}
		for (aB = 0; aB < aj.s9.zm; aB++) zf.push(aj.s9.zn - aj.s9.zm + aB);
		for (aB = 0; aB < aj.s9.zo; aB++) zf.push(aj.s9.zp + aB);
		var zq = aj.s9.zr(bK.zq);
		for (aB = 0; aB < zq.length; aB++) zf.push(zq[aB]);
		! function() {
			var aB, g = bj.eQ.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zd[aB] = {
					pc: 1015 + aB,
					kV: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fX = parseInt(g[aB]),
						ed = (fX = 0 <= fX && fX < aj.s9.zn ? fX : 0, parseInt(g[aB + 9]));
					ed = 0 <= ed && ed < 1e3 ? ed : 0, zd[aB] = {
						pc: fX,
						kV: ed
					}
				}
		}()
	}, this.show = function(lf, lg, zw) {
		var aB;
		if (zg = lf, zh = lg, zc = zw || 0, this.hr = !0, ze = [], 0 === zc)
			for (aB = 0; aB < 9; aB++) ze.push(zd[aB].pc);
		else {
			var fP = 49 * zc,
				zw = fP - 49;
			for (zw >= zf.length && (zc = 1, zw = 0, fP = 49), aB = zw = (fP = Math.min(fP, zf.length)) - 49; aB < fP; aB++) ze.push(zf[aB])
		}
		ze.push(1024);
		zw = ze.length, i1 = Math.floor((a0.a1.iE() ? .075 : .0468) * h.iF), gap = Math.floor(i1 / 3), (zi = 10 * (zX = i1 + gap)) > h.i && (zi = h.i, gap = (zX = zi / 10) - (i1 = 3 * zX / 4)), zZ = bL.fW(zw, 10) + !!(zw % 10), (zj = zZ * zX) > h
			.j && (zj = h.j, gap = (zX = zj / zZ) - (i1 = 3 * zX / 4)), zw = .5 * gap;
		nQ = Math.min(Math.max(lf - .5 * zi + zw, zw), h.i - zi + zw), nR = Math.min(Math.max(lg - .5 * zj + zw, zw), h.j - zj + zw)
	}, this.hI = function(lf, lg, player) {
		if (!this.hr) return !1;
		if (this.zy(lf, lg)) {
			lf = bL.iD(bL.fW(lf - nQ + .5 * gap, zX), 0, 9);
			if ((lf += 10 * bL.iD(bL.fW(lg - nR + .5 * gap, zX), 0, 9)) >= ze.length) return aL.sA(), !0;
			lg = ze[lf];
			if (1024 === lg) return this.show(zg, zh, zc + 1), !0;
			! function(pc) {
				for (var aB = 0; aB < 9; aB++) zd[aB].kV = Math.floor(.99 * zd[aB].kV);
				for (aB = 0; aB < 9; aB++)
					if (pc === zd[aB].pc) return zd[aB].kV = Math.min(zd[aB].kV + 30, 999), zv();
				zd.splice(5, 0, {
					pc: pc,
					kV: Math.max(zd[4].kV, 30)
				}), zd.pop(), zv()
			}(lg), player === aD.ep ? b8.hV.pb(lg) : b8.gR.pq(lg, player)
		}
		return aL.sA(), !0
	}, this.zy = function(lf, lg) {
		return !(lf < nQ - .5 * gap || lg < nR - .5 * gap || nQ + zi - .5 * gap <= lf || nR + zj - .5 * gap <= lg)
	}, this.vY = function() {
		vZ.fillStyle = bB.nx, vZ.fillRect(nQ - .5 * gap, nR - .5 * gap, zi, zj);
		for (var hx = .5 * bc.zz, f5 = (vZ.lineWidth = bc.zz, vZ.strokeStyle = vZ.fillStyle = bB.o0, vZ.strokeRect(nQ - .5 * gap + hx, nR - .5 * gap + hx, zi - 2 * hx, zj - 2 * hx), vZ.imageSmoothingEnabled = !0, ze.length), aB = 0; aB <
			f5; aB++) this.a00(ze[aB], vZ, nQ + aB % 10 * zX, nR + bL.fW(aB, 10) * zX, i1);
		vZ.imageSmoothingEnabled = !1
	}, this.a00 = function(pc, i7, fC, fE, i1) {
		var ej;
		pc >= 1024 - aj.s9.zm ? (ej = i1 / this.zb, i7.setTransform(ej, 0, 0, ej, fC, fE), i7.drawImage(this.za[pc - 1024 + aj.s9.zm], 0, 0), i7.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qt.textAlign(i7, 1), bA.qt.textBaseline(i7, 1), i7.font = bA.qt
			.sk(0, .89 * i1), i7.fillText(aj.s9.a01(pc), fC + .5 * i1, fE + (.35 - bA.qt.a02 + .56) * i1))
	}
}

function zV() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zm = 13, this.zo = this.emojis.length, this.zp = 676, this.zn = 1024, this.a03 = this.emojis.indexOf("💀"), this.a04 = this.a03 + 1, this.a05 = this.emojis.indexOf("🥇"), this.a06 = this.emojis.indexOf("😊"), this.a01 = function(fX) {
		return fX < this.zp ? String.fromCharCode(55356, 56806 + bL.fW(fX, 26), 55356, 56806 + fX % 26) : this.emojis[Math.min(fX - this.zp, this.zo - 1)]
	}, this.zr = function(qa) {
		for (var f5 = qa.length - 2, g = [], aB = 0; aB < f5; aB++) {
			var a07 = qa.charCodeAt(aB) - 56806,
				a08 = qa.charCodeAt(aB + 2) - 56806;
			0 <= a07 && a07 < 26 && 0 <= a08 && a08 < 26 && (g.push(26 * a07 + a08), aB += 3)
		}
		return g
	}, this.a09 = function(fX) {
		return fX < this.zp
	}, this.a0A = function(fX) {
		return fX >= 1024 - this.zm
	}, this.a0B = function(fX) {
		return fX >= this.zp && fX < this.zp + this.a04
	}
}

function c3() {
	this.tG = new a0C, this.wy = new a0D, this.x0 = new a0E, this.dd = function() {
		this.tG.dd()
	}
}

function a0D() {
	this.xD = function(qa) {
		for (var f5 = qa.length, i = bD, aB = 0; aB < f5; aB++) i.a8(16, qa.charCodeAt(aB))
	}
}

function a0C() {
	var a0F = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (a0F[0] = 45, a0F[37] = 95, aB = 0; aB < 10; aB++) a0F[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a0F[aB + 11] = 65 + aB, a0F[aB + 38] = 97 + aB
	}, this.tI = function(a0G) {
		for (var x3 = bH, xB = new Uint8Array(a0G), aB = 0; aB < a0G; aB++) xB[aB] = x3.q1(6);
		return xB
	}, this.tH = function(xB) {
		for (var f5 = xB.length, a0H = a0F, g = [], aB = 0; aB < f5; aB++) g.push(String.fromCharCode(a0H[xB[aB]]));
		return g.join("")
	}, this.a0I = function(value, a0J) {
		for (var a0H = a0F, g = [], aB = 0; aB < a0J; aB++) g.push(String.fromCharCode(a0H[value >> 6 * (a0J - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a0K, a0L, a0M;
	a0K = [32, 65, 191, 913, 931], a0L = [64, 127, 688, 930, 1155], a0M = new Array(a0K.length + 1);
	for (var aB = 0; aB < a0M.length; aB++) {
		a0M[aB] = 0;
		for (var fO = aB - 1; 0 <= fO; fO--) a0M[aB] += a0L[fO] - a0K[fO]
	}

	function a0S(ed) {
		for (var aB = a0K.length - 1; 0 <= aB; aB--)
			if (ed >= a0K[aB] && ed < a0L[aB]) return aB;
		return -1
	}
	this.x4 = function(qa) {
		return 0 !== (qa = qa.trim()).indexOf("Bot ") && 0 !== qa.indexOf("[Bot] ") && function(qa, a0P, a0Q) {
			var f5 = (qa = qa.trim()).length;
			if (f5 < a0P || a0Q < f5) return !1;
			for (var ed, a0R = 0, aB = 0; aB < f5; aB++)
				if (ed = qa.charCodeAt(aB), a0R += 65 <= ed && ed <= 90 || 1040 <= ed && ed <= 1071 ? 1 : 0, -1 === a0S(ed)) return !1;
			if (3 < a0R && a0R > Math.floor(f5 / 2)) return !1;
			return !0
		}(qa, 3, 20)
	}, this.a0T = function(qa) {
		for (var f5 = (qa = qa.trim()).length, g = [], aB = 0; aB < f5; aB++) {
			var ed, gd = a0S(ed = qa.charCodeAt(aB));
			g.push(a0M[gd] + ed - a0K[gd])
		}
		return g
	}, this.xI = function(g) {
		for (var ed, fP, qa = "", f5 = g.length, aB = 0; aB < f5; aB++)
			for (fP = 1; fP < a0M.length; fP++)
				if (g[aB] < a0M[fP]) {
					ed = a0K[fP - 1] + g[aB] - a0M[fP - 1], qa += String.fromCharCode(ed);
					break
				} return qa
	}, this.a0U = function(qa) {
		for (var g = this.a0T(qa), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0V = function(qa) {
		for (var g = new Array(Math.floor(qa.length / 3)), aB = 0; aB < qa.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qa.substring(aB, aB + 3));
		return this.xI(g)
	}, this.a0W = function(qa) {
		for (var fX, g = [qa.length], aB = 0; aB < qa.length; aB++) g[aB] = qa.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qa.length; aB++) aB === qa.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fX = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fX + (fX < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0X = function(qa) {
		for (var ed, result = "", aB = 0; aB < qa.length; aB++) 48 <= (ed = qa.charCodeAt(aB)) && ed < 58 ? result += String.fromCharCode(ed) : 65 <= ed && ed < 75 ? result += "0" + (ed - 65).toString() : 75 <= ed && ed < 91 ? result += (ed - 65)
			.toString() : 97 <= ed && ed < 123 && (result += (ed - 71).toString());
		return result
	}, this.a0Y = function(qa) {
		for (var f5 = qa.length, g = [], aB = 0; aB < f5; aB++)(ed = qa.charCodeAt(aB)) < 58 ? g.push(qa[aB]) : (ed -= ed < 91 ? 65 : 71, g.push(String(bL.fW(ed, 10))), g.push(String(ed - 10 * bL.fW(ed, 10))));
		var f5 = g.length - 2,
			ed = 0,
			xB = [];
		for (aB = 0; aB < f5; aB += 3) xB[ed++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return xB
	}, this.a0Z = function() {
		for (var eB, a0a = "", aB = 0; aB < 6; aB++) eB = 48 + ay.random() % 36, eB += 58 <= eB ? 39 : 0, a0a += String.fromCharCode(eB);
		return a0a
	}
}

function a0E() {
	this.a0T = function(qa, xr, a0b) {
		for (var a0c = [], f5 = qa.length, max = 0, aB = 0; aB < f5; aB++) {
			var fX = qa.charCodeAt(aB);
			a0c.push(fX), max = Math.max(max, fX)
		}
		var xs = max < 128 ? 7 : 16;
		for (a0b.a8(xr, f5), a0b.a8(1, +(16 == xs)), aB = 0; aB < f5; aB++) a0b.a8(xs, a0c[aB])
	}
}

function dA() {
	this.a0d = new a0e, this.result = new a0f, this.a0g = new a0h, this.a0i = new a0j, this.a0k = new a0l, this.a0m = new a0n, this.dd = function() {
		this.result.dd()
	}
}

function a0h() {
	this.a0o = function() {
		for (var f5 = al.kw, a0p = al.l1, a0q = [], aB = 0; aB < f5; aB++) {
			var gd = a0p[aB];
			bA.gR.a0r(gd) && a0q.push(gd)
		}
		return a0q
	}, this.a0s = function() {
		if (0 === bg.kn[aD.a0t]) return this.a0u();
		bh.kR(aD.a0t);
		for (var a0q = [], f5 = bO.fa[0], fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = fj[aB];
			bA.gR.a0r(gd) && a0q.push(gd)
		}
		return a0q
	}, this.a0u = function() {
		var gd = m1[0];
		return bA.gR.a0r(gd) ? [gd] : []
	}, this.a0v = function(a0q) {
		for (var f5 = a0q.length, eU = 0, gt = ag.gt, aB = 0; aB < f5; aB++) eU += gt[a0q[aB]];
		return eU
	}
}

function a0e() {
	function a0x() {
		if (2 === aD.a11) return 1;
		aw.a12(), aD.a11 = 2, aD.a13 = aD.a14
	}

	function a0z() {
		bR.a0k.a15(), aX.show(1 === aD.a16, !1, 2 === aD.a16), bR.result.a15(), bR.a0m.eY(), bR.a0i.eY(), bR.a0i.a17(), aN.a18(!0), aN.a19(247), aN.a19(956), aN.a19(957), aV.ml(!0), aW.ml(!0), aw.ml(), bC.a1A(), aD.hE && bf.a1B.a1C(), bf.dk = !0, bb
			.a1D(), a0.a1.setState(0)
	}
	this.a0w = function() {
		a0x() || (aD.a0y = 2, a0z())
	}, this.a10 = function() {
		a0x() || (aD.a0y = 1, a0z())
	}
}

function a0j() {
	this.eY = function() {
		var a1L;
		2 === aD.a0y ? (aN.a1E(0, 59), aH.nZ(2700)) : aD.ki < 7 ? (a1L = bg.kn[aD.a0t], a1L = bg.a1N[a1L], aQ.a1O(L(29, [a1L]), 2, 1, 12), aN.zT(0, L(30, [a1L]), 40, 0, bB.o0, bB.nx, -1, !1), aH.nZ(2700)) : 8 === aD.ki ? (aD.a16 ? aN.a1E(aD.a1J,
			2) : aN.a1E(1 - aD.ep, 3), aD.a1K.zI(aD.a1J), aH.nL(aD.a1J, 2700, !1, 0)) : 9 === aD.ki ? (aN.a1P(), aH.nZ(2700)) : (aN.a1Q(aD.a1J), aH.nL(aD.a1J, 2700, !1, 0))
	}, this.a17 = function() {
		var qa;
		aD.hE || (qa = b0.y.a1R(), aD.ki < 7 ? qa += "/log/team" : 8 === aD.ki ? qa += "/log/1v1" : 9 === aD.ki ? qa += "/log/zombies" : qa += "/log/br", aN.zT(720, qa, 736, 0, bB.o0, bB.oO, -1, !1))
	}
}

function a0n() {
	function a1b() {
		var tb;
		return 8 === aD.ki ? 0 : (tb = Math.floor(ag.a1c[aD.ep] / 50), (tb = Math.min(tb, 200)) / 100)
	}

	function a1T() {
		var tb = a1b();
		0 !== tb && aN.zT(440, L(31, [tb.toFixed(2)]), 40, 0, bB.oI, bB.nx, -1, !1)
	}
	this.eY = function() {
		var a1U;
		0 === bR.result.a1S || 0 === bR.result.a0q.length || 8 === aD.ki ? bA.gR.hH(aD.ep) && a1T() : (function(a1U) {
			7 !== aD.ki && 10 !== aD.ki || 0 !== aD.a16 && a1U && aN.zT(600, L(35, [a1U.toFixed(2)]), 40, 0, bB.o0, bB.nx, -1, !1)
		}(a1U = function() {
			aN.zT(520, L(32), 40, 0, bB.o0, bB.nx, -1, !1);
			for (var a0q = bR.result.a0q, f5 = a0q.length, gt = ag.gt, g = [], aB = 0; aB < f5; aB++) {
				var gd = a0q[aB];
				g.push({
					gd: gd,
					eU: gt[gd]
				})
			}
			g.sort((fO, fP) => fP.eU - fO.eU);
			var a1N = ag.zU,
				eU = bR.result.a1d,
				tb = bR.result.a1S,
				qa = "",
				a1U = 0;
			for (aB = 0; aB < f5; aB++) {
				var hp = g[aB].eU * tb / (100 * eU),
					a1f = a1N[g[aB].gd] + ": " + hp.toFixed(2) + "   ";
				g[aB].gd === aD.ep && (a1U = hp), 2 < aB && 4 !== f5 ? 3 === aB && (qa += "(" + L(33, [f5 - 3]) + ")") : qa += a1f
			}
			aN.zT(560, bA.rs.a1g(qa), 40, 0, bB.oI, bB.nx, -1, !1), a1U ? aN.zT(580, L(34, [a1U.toFixed(2) + " + " + a1b().toFixed(2)]), 40, 0, bB.oI, bB.nx, -1, !1) : bA.gR.hH(aD.ep) && a1T();
			return a1U
		}()), 2 === aD.a0y || 7 <= aD.ki || function(a1U) {
			var a0q = bR.result.a0q,
				f5 = a0q.length,
				a1h = ag.a1h,
				gt = ag.gt,
				a1i = [];
			loop: for (var aB = 0; aB < f5; aB++) {
				var gd = a0q[aB],
					a1j = bA.rs.a1k(a1h[gd]);
				if (null !== a1j) {
					for (var a1l = gt[gd], fP = a1i.length - 1; 0 <= fP; fP--)
						if (a1j === a1i[fP].name) {
							a1i[fP].eU += a1l, a1i[fP].g.push({
								gd: gd,
								eU: a1l
							});
							continue loop
						} a1i.push({
						name: a1j,
						eU: a1l,
						g: [{
							gd: gd,
							eU: a1l
						}]
					})
				}
			}
			if (0 !== a1i.length) {
				a1i.sort((fO, fP) => fP.eU - fO.eU);
				var g = a1i[0].g,
					a1m = (g.sort((fO, fP) => fP.eU - fO.eU), "[" + a1i[0].name + "]"),
					a1n = 512 * bR.result.a1S / 26214400,
					lL = (aN.zT(0, L(36, [a1m, a1n.toFixed(4)]), 40, 0, bB.o0, bB.nx, -1, !1), g.length),
					x9 = a1i[0].eU,
					a1o = 1e4 * a1n;
				for (aB = 0; aB < lL; aB++)
					if (g[aB].gd === aD.ep) {
						aN.zT(600, L(37, [(a1o * g[aB].eU / (10 * x9)).toFixed(2)]), 40, 0, bB.o0, bB.nx, -1, !1), aN.zT(640, L(38, [(.2 * a1U).toFixed(2), a1m]), 40, 0, bB.o0, bB.nx, -1, !1);
						break
					}
			}
		}(a1U))
	}, this.a1Y = function() {
		var a1Z, xb;
		aD.kk || (a1Z = ag, xb = aD.ep, 0 === a1Z.a1a[xb]) || a1Z.jU[xb] < 1 || 2 * a1Z.qI[xb] > 3 * (a1Z.jT[xb] + a1Z.jU[xb]) || a1T()
	}
}

function a0f() {
	this.dd = function() {
		this.a1p = 0, this.a0q = [], this.a1d = 0, this.a1S = 0
	}, this.a15 = function() {
		var sV;
		aD.kk || (sV = this, 2 === aD.a0y ? sV.a0q = bR.a0g.a0o() : aD.hz ? sV.a0q = bR.a0g.a0s() : sV.a0q = bR.a0g.a0u(), sV.a1p = bi.a1r.a1s(), sV.a1d = Math.max(1, bR.a0g.a0v(sV.a0q)), b8.gR.pz(), 8 === aD.ki ? bR.result.a1S = 0 : sV.a1S =
			100 * bR.result.a1p * (1 + aD.zS))
	}
}

function a0l() {
	this.a15 = function() {
		if (2 === aD.a0y) aD.a16 = 2;
		else {
			if (8 === aD.ki) bA.gR.jn(0) || 0 === ag.mz[0] ? aD.a1J = 1 : bA.gR.jn(1) || 0 === ag.mz[1] ? aD.a1J = 0 : aD.a1J = +(ag.gt[1] > ag.gt[0]);
			else {
				if (aD.hz) {
					var ky = bh.a1v();
					if (aD.a0t = ky, bg.kn[ky]) return void(aD.a16 = +(bg.f3[aD.ep] === ky))
				}
				aD.a1J = m1[0]
			}
			aD.a16 = +(aD.a1J === aD.ep)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.wH = null, this.wI = null, this.wJ = null, this.wP = null, this.a1 = new a1w, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.wI = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wJ = mwIOSdataX, self.wP = window.webkit.messageHandlers.iosCommandA, dw = self
					.wJ.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var wH;
				try {
					if (!(wH = window.localStorage)) return;
					wH.setItem("tls7", "1"), wH.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wH = wH
			}(this)
	}
}

function a1w() {
	this.a20 = function() {
		bj.sL.wf(), bj.sL.wg(), b0.y.close(0, 3255), 0 === a0.id ? a0.wH && a0.wH.clear() : 1 === a0.id ? a0.wI.saveString(199, "") : 2 === a0.id && a0.wP.postMessage("clear")
	}, this.a21 = function() {
		2 === a0.id ? a0.wP.postMessage("showConsentForm") : 1 === a0.id && a0.wI.setState(7)
	}, this.a22 = function() {
		this.setState(14)
	}, this.iE = function() {
		return 1 === bj.eQ.w5(2)
	}, this.a23 = function() {
		bj.eQ.w4(102, "")
	}, this.setState = function(a24) {
		1 === a0.id && 5 <= a0.dw && a0.wI.setState(a24)
	}, this.a2 = function() {
		var a25;
		1 === a0.id && 7 <= a0.dw ? a0.wI.setState(5) : ((a25 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a25.toString())
	}, this.eO = function() {
		0 !== a0.id && (1 === a0.id ? a0.wI.prepareAd("8646194357") : 2 === a0.id && (0 === a0.dw ? a0.wP.postMessage("prepare ad 2904813909") : a0.wP.postMessage("loadAds 2904813909")))
	}, this.eV = function(eU) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.dw && (a0.wI.presentAd(eU), !0) : 2 === a0.id && 0 !== a0.dw && (a0.wP.postMessage("showAd"), !0))
	}, this.dm = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a26 + "' target='_blank'>" + bK
			.a26 + "</a>", !0, [new w("⬅️ " + L(39), function() {
				t.u(0)
			}, bB.og)]))
	}
}

function dU() {
	function a29(e) {
		lk(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(39), function() {
				t.a2C()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oN)]))
	}

	function a2N(e) {
		lk(e), t.u(4, 5, new v(L(40), a2J(e), !0))
	}

	function a2J(e) {
		var qa = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + qa : 4527 === e ? "Player already in lobby" + qa : 4577 === e ? "Your IP is banned." + qa : 4530 === e ? "Lobby Timeout" + qa : 4528 === e ?
			"Lobby Kick: Another login detected." + qa : 4540 === e ? "You have been kicked." + qa : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qa : 4555 === e ?
			"Invalid Account Error. Please Try Again." + qa : 4557 <= e && e <= 4560 ? "Please try again later!" + qa : "Unknown error" + qa
	}

	function lk(e) {
		a2E(e), t.y.z()
	}

	function a2E(e) {
		var a24 = aa.a2D();
		6 === a24 ? b0.y.a2P(e) : bn.a2A ? (t.x(), bn.ud(), b0.y.close(b0.y.a2B, 3256)) : 8 === a24 && aD.a2Q(!0)
	}
	this.p = [], this.a27 = function(a28, e) {
		if (this.p.push(e), 8 === t.tD && 0 === a28)
			if (4211 === e) a29(e);
			else {
				if (bn.a2A && (4495 === e || 4480 === e) && b0.y.a2B !== a28) return void t.a2C();
				if (8 !== aa.a2D() && a2E(), 4480 === e) return bj.sL.wh(), void t.u(4, 0, new v(L(42), L(43), !0));
				var a2G = 0;
				10 === t.a2H().a2I && (a2G = t.a2H().a2I), t.u(4, a2G, new v(L(40), a2J(e), !0))
			}
		else {
			a2G = aa.a2D();
			if (6 === a2G) {
				if (4211 === e) return void a29(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aZ.a2K(a28)
			} else {
				if (!bn.a2A) return 8 === a2G ? void(a28 !== b0.y.a2L || aD.kk || 1 !== aD.a11 || aD.hE || aN.a2M(L(41, [e]))) : void 0;
				if (a28 !== b0.y.a2B) return
			}
			a2N(e)
		}
	}, this.a2O = function(e) {
		this.p.push(e), 8 === aa.a2D() ? aD.kk || 1 !== aD.a11 || aN.a2M(L(41, [e])) : a2N(e)
	}, this.s = function() {
		this.p.push(3268), lk(3268)
	}
}

function d4() {
	var a2R, a2S, a2T = -15e3,
		a2U = !1;

	function hI(e) {
		a2o() || (a2U = !0, a2p(e, 1), b0.y.a2q(b0.y.a2L), a2r(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2d(e) {
		a2T = bf.eT, a2p(e, 1), b0.y.a2q(b0.y.a2L), 0 < e.touches.length && (a2R = Math.floor(h.k * e.touches[0].clientX), a2S = Math.floor(h.k * e.touches[0].clientY), au.a2d(e) || a2r(a2R, a2S))
	}

	function a2r(fC, fE) {
		t.hI(fC, fE), 0 === aD.a11 ? aa.hI(fC, fE) : bC.a2s(fC, fE) || be.hI(fC, fE) || aX.hI(fC, fE) || aL.a2t(fC, fE) || aP.hI(fC, fE) || 0 <= aM.hI(fC, fE) || aw.hI(fC, fE) || bJ.a2u(fC, fE) || aL.a2v(fC, fE)
	}

	function a2Z(e) {
		a2o() || (a2U = !0, a2p(e, 1), a2w(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2e(e) {
		a2T = bf.eT, a2p(e, 1), 0 < e.touches.length && (a2R = Math.floor(h.k * e.touches[0].clientX), a2S = Math.floor(h.k * e.touches[0].clientY), au.a2e(e) || a2w(a2R, a2S))
	}

	function a2w(fC, fE) {
		t.a2Z(fC, fE), 0 === aD.a11 ? aa.a2Z(fC, fE) : (bT.hC(fC, fE), be.a2Z(fC, fE) || (aM.a2Z(fC, fE), aL.hr() ? aL.a2Z(fC, fE) : aR.hJ ? aR.a2Z(fC) && (bf.dk = !0) : (aV.a2Z(fC, fE), aS.nV && aS.a2Z(fC, fE) && (bf.dk = !0))))
	}

	function a2b(e) {
		a2o() || (a2p(e, 1), a2x(), 0 === aD.a11 ? (aa.click(-1024, -1024), aT.ru()) : (aV.a2y(-1024, -1024), aM.a2Z(-1024, -1024), aR.a2z(), aS.nV = !1))
	}

	function a2a(e) {
		a2o() || (a2p(e, 1), a30(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2X && (bJ.a2X = !1, e.preventDefault()))
	}

	function click(e) {
		a2o() || a2p(e, 1)
	}

	function a2f(e) {
		a2T = bf.eT, a2p(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a11 ? aS.nV = !1 : au.a31() || (a30(a2R, a2S, !1), bJ.a2X && (bJ.a2X = !1, e.preventDefault()))
	}

	function a2g(e) {
		a2T = bf.eT, a2p(e, 1), a30(a2R, a2S, !1), bJ.a2X && (bJ.a2X = !1, e.preventDefault())
	}

	function a2h(e) {}

	function a2i(e) {}

	function a2j(e) {
		a2o() || a2p(e, 0)
	}

	function a30(fC, fE, a32) {
		a2x(), 0 === aD.a11 ? aa.click(fC, fE) : (aV.a2y(fC, fE), be.a2y(), aR.a2z(), aS.nV = !1, aL.click(fC, fE, a32) ? bf.dk = !0 : aM.a2a(fC, fE))
	}

	function a2x() {
		t.a2x()
	}

	function a2c(e) {
		var fC, fE, deltaY;
		a2o() || (a2p(e, 1), b0.y.a2q(b0.y.a2L), fC = Math.floor(h.k * e.clientX), fE = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2c(fC, fE, deltaY), 0 === aD.a11 ? aa.a2c(fC, fE, deltaY) : aV.a2c(fC, fE,
			deltaY) || (aR.a33(fC, fE) ? aR.a2c(deltaY) && (bf.dk = !0) : aS.a2c(fC, fE, deltaY)))
	}

	function a2k(e) {
		a2p(e, 0)
	}

	function a2p(e, id) {
		0 === id && t.hr() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a2D() && e.preventDefault()
	}

	function a2l(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2o() || 0 < h.ss || (e = e.code) && e.length && (bX.ed(e, 18) ? ar.a35(3) : bX.ed(e, 22) ? ar.a35(0) : bX.ed(e, 20) ? ar.a35(1) : bX.ed(e, 24) ? ar.a35(2) : bX.ed(e, 10) ? aR.a36(31 / 32) : bX.ed(e, 8) ? aR.a36(32 / 31) : bX.ed(e, 6) ? aR
			.a36(7 / 8) : bX.ed(e, 4) ? aR.a36(8 / 7) : bX.ed(e, 14) ? 0 !== aD.a11 && aS.a2c(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.ed(e, 16) ? 0 !== aD.a11 && aS.a2c(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.ed(e, 0) ?
			aD.a11 && bT.hD(0) : bX.ed(e, 2) ? aD.a11 && bT.hD(1) : bX.ed(e, 30) ? aD.a11 && bT.hD(2) : bX.ed(e, 26) ? aD.a11 && bT.hl() : bX.ed(e, 28) && aD.a11 && bT.hq())
	}

	function a2m(e) {
		if (!a2o() && !(0 < h.ss || bf.eT < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a37(1) || "Space" === code && t.a37(0))) return bn.a2A ? bn.uj.a37(code) ? void 0 : void("Escape" === code && bJ.fY()) : void(8 !== aa.a2D() && aa.a37(e) ? bf.dk = !0 : "Escape" ===
				code ? bJ.fY() : bX.ed(code, 18) ? ar.a38(3) : bX.ed(code, 22) ? ar.a38(0) : bX.ed(code, 20) ? ar.a38(1) : bX.ed(code, 24) ? ar.a38(2) : bX.ed(code, 12) ? bC.a39(!aD.nT) : "Space" === code && aD.a11 && (aM.hF && aM.a3A(), aD
					.hE) && bC.a3B(!1))
		}
	}

	function a2n() {
		"hidden" !== document.visibilityState && (bf.dk = !0)
	}

	function a2o() {
		return a2T + 15e3 > bf.eT
	}

	function resize() {
		h.a3D()
	}
	this.a2V = 0, this.a2W = "", this.a2X = !1, this.dd = function() {
		a2Y.addEventListener("mousedown", hI, {
			passive: !1
		}), a2Y.addEventListener("mousemove", a2Z, {
			passive: !1
		}), a2Y.addEventListener("mouseup", a2a, {
			passive: !1
		}), a2Y.addEventListener("click", click, {
			passive: !1
		}), a2Y.addEventListener("mouseleave", a2b, {
			passive: !1
		}), a2Y.addEventListener("wheel", a2c, {
			passive: !1
		}), a2Y.addEventListener("touchstart", a2d, {
			passive: !1
		}), a2Y.addEventListener("touchmove", a2e, {
			passive: !1
		}), a2Y.addEventListener("touchend", a2f, {
			passive: !1
		}), a2Y.addEventListener("touchcancel", a2g, {
			passive: !1
		}), a2Y.addEventListener("dragover", a2h), a2Y.addEventListener("drop", a2i), a2Y.addEventListener("dblclick", a2j), document.addEventListener("contextmenu", a2k), document.addEventListener("keydown", a2l), document.addEventListener(
			"keyup", a2m), document.addEventListener("visibilitychange", a2n), window.addEventListener("resize", resize)
	}, this.a2u = function(fC, fE) {
		return !!bC.hI(fC, fE) || !!(aV.hI(fC, fE) || aS.hI(fC, fE) || aR.hI(fC, fE) || aN.hI(fC, fE))
	}, this.a3C = a2o, this.rL = function() {
		return !a2U || 0 < a2T
	}, this.fY = function() {
		if (!t.hr()) return 8 === aa.a2D() ? aD.nT ? void bC.a39(!1) : be.hr ? void be.a3A() : void aM.a3A() : void(7 !== aa.a2D() && 6 === aa.a2D() && aZ.a3E());
		t.a37(2)
	}
}

function bz() {
	this.qt = new a3F, this.r1 = new a3G, this.gR = new a3H, this.rs = new a3I, this.zA = new a3J, this.a3K = new a3L, this.canvas = new a3M, this.color = new a3N, this.a3O = new a3P, this.dd = function() {
		this.qt.we()
	}
}

function a3G() {
	this.xZ = function(g) {
		g.fill(0)
	}, this.a3Q = function(g) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++) g[aB] = []
	}, this.a3R = function(a07, a3S) {
		for (var a08 = bO.ff, aB = 0; aB < 3; aB++) a08[aB] = a3S * a07[aB];
		return a08
	}, this.a3T = function(a07, a08, a3U) {
		for (var jf = 0, aB = 0; aB < 3; aB++) jf += Math.abs(a07[aB] - a08[aB]);
		return a3U <= jf
	}, this.a3V = function(a07, a3W) {
		for (var aB = 0; aB < 3; aB++) a07[aB] = bL.iD(a07[aB] + a3W, 0, 255);
		return a07
	}, this.a3X = function(g, tX, tY) {
		tY = tY || g.length - 1;
		for (var a3Y = 0, aB = tX = tX || 0; aB <= tY; aB++) a3Y += g[aB];
		return a3Y
	}, this.a3Z = function(g, a3a) {
		for (var aB, a3b, f5 = g.length, a3c = [], fO = f5 - 1; 0 <= fO; fO--) {
			for (aB = a3b = 0; aB < f5; aB++) a3a(g[aB]) < a3a(g[a3b]) && (a3b = aB);
			f5--, a3c.push(g[a3b]), g[a3b] = g[f5], g.pop()
		}
		return a3c
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
	}, this.a3d = function(g, fX) {
		for (var f5 = g.length, gY = 0, aB = 0; aB < f5; aB++) gY += g[aB] > fX;
		return gY
	}, this.a3e = function(a3f, a3g, min) {
		for (var f5 = a3g[0], aB = f5 - 1; 0 <= aB; aB--) a3f[aB] < min && (a3f[aB] = a3f[--f5]);
		a3g[0] = f5
	}, this.a3h = function(g, f5, value) {
		for (var aB = 0; aB < f5; aB++) g[aB] -= value
	}, this.a3i = function(g) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3j = function(qa, g, a3k) {
		g.fill(0);
		for (var tb = qa.split(","), f5 = Math.min(tb.length, g.length), aB = 0; aB < f5; aB++) g[aB] = Math.min(parseInt(tb[aB]), a3k)
	}, this.a3l = function(qa, g, rp) {
		g.fill("");
		for (var tb = qa.split('"'), f5 = Math.min(tb.length, 2 * g.length), hx = 0, aB = 1; aB < f5; aB += 2) g[hx++] = tb[aB].slice(0, rp)
	}, this.a3m = function(g, gY) {
		if (0 === gY) g.fill(0);
		else {
			var a3Y = this.a3X(g),
				f5 = g.length;
			if (0 === a3Y) g.fill(bL.fW(gY, f5));
			else
				for (var aB = 0; aB < f5; aB++) g[aB] = bL.fW(gY * g[aB], a3Y);
			if (0 === (a3Y = this.a3X(g))) g[1] = gY;
			else
				for (var hx = 0; a3Y++ < gY;) g[hx = (hx + 1) % f5] && g[hx]++
		}
	}, this.a3n = function(g) {
		if (!g) return 0;
		var f5 = g.length;
		if (0 === f5) return 0;
		for (var fX = g[f5 - 1], aB = f5 - 2; 0 <= aB; aB--)
			if (g[aB] !== fX) return aB + 2;
		return 1
	}, this.a3o = function(g) {
		for (var a3Y = 0, aB = 0; aB < g.length; aB++) a3Y += g[aB].length;
		return a3Y
	}, this.a3p = function(a3q) {
		for (var g = [], aB = 0; aB < a3q.length; aB++) g = g.concat(a3q[aB]);
		return g
	}, this.has = function(g, fX) {
		for (var f5 = g.length, aB = 0; aB < f5; aB++)
			if (g[aB] === fX) return !0;
		return !1
	}
}

function a3M() {
	this.zl = function(a3r, eC, a3s) {
		var i1 = a3r.height,
			a3t = bA.qt.xP(i1, i1),
			i7 = bA.qt.getContext(a3t);
		return function(i, i7, a3s) {
			i7.fillStyle = a3s, i7.beginPath(), i7.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i7.fill()
		}(i1, i7, a3s), i7.drawImage(a3r, -eC * i1, 0), a3t
	}, this.a3v = function(a3w) {
		var i7, i4, i1 = a3w.height;
		return a3w.width === i1 && (i4 = (i7 = bA.qt.getContext(a3w, !0)).getImageData(0, 0, i1, i1), bA.a3K.a3x(i4.data, i1, i1, .9), i7.putImageData(i4, 0, 0)), a3w
	}
}

function a3N() {
	this.a3y = function(fX) {
		return [fX >> 12 & 63, fX >> 6 & 63, 63 & fX]
	}, this.a3z = function(fX) {
		for (var g = this.a3y(fX), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a40 = function(fX) {
		fX = this.a3z(fX);
		return bA.color.ns(fX[0], fX[1], fX[2])
	}, this.a41 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.ns = function(eB, tb, fP) {
		return "rgb(" + eB + "," + tb + "," + fP + ")"
	}, this.nu = function(eB, tb, fP, fO) {
		return "rgba(" + eB + "," + tb + "," + fP + "," + fO.toFixed(3) + ")"
	}, this.rN = function(ed) {
		for (var g = ed.split("(")[1].split(","), fe = bO.fe, aB = 0; aB < 3; aB++) fe[aB] = parseInt(g[aB]);
		return 4 === g.length ? fe[3] = 255 * parseFloat(g[3].slice(0, -1)) : fe[3] = 255, fe
	}, this.rO = function(a42, f8) {
		for (var g = a42.slice(a42.indexOf("(") + 1, a42.indexOf(")")).split(","), fe = bO.fe, aB = 0; aB < 3; aB++) fe[aB] = bL.iD(parseInt(g[aB].trim(), 10) + f8, 0, 255);
		return 3 === g.length ? this.ns(fe[0], fe[1], fe[2]) : (a42 = parseFloat(g[3].trim()), this.nu(fe[0], fe[1], fe[2], a42 = 0 === a42 ? .3 : a42))
	}, this.vE = function(a43, a44) {
		for (var jf = 0, aB = 0; aB < 3; aB++) jf += Math.abs(a44[aB] - a43[aB]);
		if (!(240 <= jf))
			for (aB = 0; aB < 3; aB++) a44[aB] = a43[aB] + (a43[aB] < 128 ? 80 : -80)
	}, this.a45 = function(g) {
		for (var qa = "#", aB = 0; aB < 3; aB++) {
			var eB = g[aB].toString(16);
			qa += 1 === eB.length ? "0" + eB : eB
		}
		return qa
	}, this.a46 = function(qa) {
		var eB, tb;
		return qa.length < 7 ? bB.nr : (eB = parseInt(qa.slice(1, 3), 16), tb = parseInt(qa.slice(3, 5), 16), qa = parseInt(qa.slice(5, 7), 16), this.ns(eB, tb, qa))
	}
}

function a3J() {
	this.a47 = function(qa, font, maxWidth) {
		if (font && (vZ.font = font), vZ.measureText(qa).width <= maxWidth) return qa;
		for (var aB = qa.length - 1; 1 <= aB; aB--)
			if (qa = qa.substring(0, aB), vZ.measureText(qa + "...").width <= maxWidth) return qa + "...";
		return "..."
	}
}

function a3P() {
	var a49 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4A = function(eT) {
		var a4C, qa = new Date(eT.getTime() - 6e4 * eT.getTimezoneOffset()).toUTCString();
		return qa.length < 12 || (qa = qa.substring(5, qa.length), 0 === (eT = eT.getTimezoneOffset())) ? qa : (a4C = (eT < 0 ? "+" : "-") + bL.fW(Math.abs(eT), 60), 0 == (eT = Math.abs(eT) % 60) ? qa + a4C : qa + a4C + ":" + (eT < 10 ? "0" :
			"") + eT)
	}, this.a4D = function(eT) {
		var qa = eT.toUTCString();
		return qa.length < 12 ? qa : function(eT) {
			return a49[eT.getUTCDay()]
		}(eT) + ", " + qa.substring(5, qa.length - 4)
	}
}

function a3F() {
	var a4F = null;
	this.a02 = 0, this.we = function() {
		var fX = bj.eQ.data[5].value;
		a4F = "px " + fX, "system-ui" !== fX && (a4F += ", system-ui"), this.a02 = i0(32, 32, ["a", "b", "m"], 200, a4F)
	}, this.xP = function(i, j) {
		var ed = document.createElement("canvas");
		return ed.width = i, ed.height = j, ed
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zA, i, j) {
		return zA.getImageData(0, 0, i, j)
	}, this.sk = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4F : 1 === type ? "bold " + size + a4F : 2 === type ? "lighter " + size + a4F : 3 === type ? "italic " + size + a4F : 4 === type ? "oblique " + size + a4F : 5 === type ? "small-caps " +
			size + a4F : "small-caps bold " + size + a4F
	}, this.textAlign = function(i7, id) {
		i7.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i7, id) {
		i7.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.r3 = function(e, code, color) {
		color = this.r2(bc.sm) + " solid " + (color || bB.o0);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.td = function(e, fC, fE, i, j) {
		e = e.style;
		e.left = this.te(fC), e.top = this.te(fE), e.width = this.te(i), e.height = this.te(j)
	}, this.qu = function(fX) {
		return 1 + fX * a0.a1.iE()
	}, this.sC = function(nc, ge) {
		return nc * this.qu(void 0 === ge ? .5 : ge) * h.iF / h.k
	}, this.tc = function(nc, ge) {
		return nc * this.qu(void 0 === ge ? .5 : ge) * h.iF
	}, this.tJ = function(nc, ge, a4G) {
		return this.qu(ge) * Math.min(nc * h.iF, a4G * h.i) / h.k
	}, this.r2 = function(fX) {
		return fX.toFixed(1) + "px"
	}, this.te = function(fX) {
		return this.uz(fX).toFixed(1) + "px"
	}, this.uz = function(fX) {
		return fX / h.k
	}, this.a4I = function(t1, a4J) {
		for (var qa = "<ul>", f5 = t1.length, aB = 0; aB < f5; aB++) qa += "<li>" + t1[aB] + ": <a href='" + a4J[aB] + "' target='_blank'>" + a4J[aB] + "</a></li>";
		return qa += "</ul>"
	}, this.a4K = function(a4L) {
		return "<a href='" + a4L + "' target='_blank'>" + a4L + "</a>"
	}, this.a4M = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.vC = function(e) {
		var eU = e.textContent;
		bA.rs.a4N(eU, "✔") || (1 === eU.length ? e.textContent = "✔" : e.textContent = eU + " ✔", setTimeout(function() {
			e.textContent = eU
		}, 500))
	}, this.measureText = function(qa) {
		return vZ.measureText(qa).width
	}, this.tT = function(a4O) {
		a4O.style.overflowX = "auto", a4O.style.overflowY = "hidden", a4O.style.whiteSpace = "nowrap", a4O.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tg = this.scrollLeft, e.preventDefault())
		}), a4O.addEventListener("scroll", function() {
			this.tg = this.scrollLeft
		})
	}
}

function a3H() {
	this.hG = function(a24) {
		return 0 === a24 ? 1 === aD.a11 && aD.hT : 1 === a24 ? 1 === aD.a11 && !aD.hT : 2 === aD.a11
	}, this.hH = function(player) {
		return 0 !== ag.mz[player] && 2 !== ag.a4P[player]
	}, this.a4Q = function(player) {
		return player === aD.ep && 2 !== ag.a4P[player]
	}, this.l4 = function(player, jZ) {
		return player !== jZ && (0 === bg.f3[player] || bg.f3[player] !== bg.f3[jZ])
	}, this.mB = function() {
		return al.kw < 2 ? 0 : aD.hz ? 1 < bh.a4R() : ag.gt[m1[1]]
	}, this.a4S = function() {
		var kw = al.kw;
		if (0 !== kw) {
			if (!aD.hz) return !this.jn(m1[0]);
			for (var f3 = bg.f3, ky = bh.kz(), l1 = al.l1, aB = kw - 1; 0 <= aB; aB--) {
				var gd = l1[aB];
				if (f3[gd] === ky && !this.jn(gd)) return 1
			}
		}
		return 0
	}, this.a4T = function(player) {
		return player === aD.ep
	}, this.a4U = function(jZ, nc) {
		return ag.h7[aD.ep] < nc * ag.h7[jZ]
	}, this.jn = function(player) {
		return player >= aD.kQ || 2 === ag.a4P[player]
	}, this.lO = function(player) {
		return 0 !== ag.mz[player]
	}, this.a0r = function(player) {
		return player < aD.kQ
	}, this.qG = function(a4V, a4W) {
		return a4V !== a4W
	}, this.gU = function(player, fX) {
		var min;
		return fX = this.a4X(player, fX), ag.h7[player] += fX, ag.a4Y[player] && (min = Math.min(ag.a4Y[player], ag.h7[player]), ag.a4Y[player] -= min, ag.h7[player] -= min), fX
	}, this.a4X = function(player, fX) {
		var a4Z = ag.h7[player];
		return fX = Math.min(fX, ag.gt[player] * aD.a4a - a4Z), fX = Math.min(fX, aD.a4b - a4Z), Math.max(fX, 0)
	}, this.mY = function(player, ih, a4c, a4d) {
		var a4Z = ag.h7[player],
			ih = bL.fW(a4Z * (ih + 1), 1024),
			a4c = bL.fW(a4c * a4Z, 1024),
			ih = Math.min(ih, a4Z - a4c);
		return 10 === aD.ki && (ih = b4.a4f(player, ih)), bO.fc[0] = ih, bO.fc[1] = a4c, a4d <= ih
	}, this.pk = function(player, pS, pR) {
		var player = ag.h7[player],
			a4e = bL.fW(64 * player, 1024);
		return pS = Math.min(pS, player - a4e), pS = this.a4X(pR, pS), bO.fc[0] = pS, bO.fc[1] = a4e, 1 <= pS
	}, this.a4g = function(player, pS, pR) {
		var player = ag.h7[player],
			a4e = bL.fW(64 * player, 1024);
		return pS = Math.min(pS, player - a4e), this.a4X(pR, pS)
	}, this.pm = function(pS, pR) {
		return pS = this.a4X(pR, pS), bO.fc[0] = pS, bO.fc[1] = 0, 1 <= pS
	}, this.ig = function(player, a4h) {
		return bL.fW(ag.h7[player] * (a4h + 1), 1024)
	}, this.a4i = function(player, a4c) {
		a4c = bL.fW(a4c * ag.h7[player], 1024);
		bO.fc[1] = a4c, ag.h7[player] -= a4c
	}, this.gS = function(player, a4j) {
		var fq, fs, fP = ag.h7[player];
		return a4j <= fP ? ag.h7[player] -= a4j : (ag.h7[player] = 0, fs = ag.a4Y[player] + (fq = 5 * ((fP = a4j - fP) >> 2)), bd.gV(player, fq - fP, 12), fs <= aD.a4k ? ag.a4Y[player] = fs : (ag.a4Y[player] = aD.a4k, bd.gV(player, fs - aD.a4k,
			18))), a4j
	}, this.lc = function(player, ih) {
		var h7 = ag.h7,
			a4Z = h7[player],
			ih = bL.fW(a4Z * (ih + 1), 1024),
			a4e = Math.max(bL.fW(a4Z, 10), 1e3);
		return (ih = Math.min(ih, a4Z - a4e)) < 0 ? (h7[player] = 0, a4e = Math.min(1e3, a4Z + aD.a4k - ag.a4Y[player]), bO.fc[1] = a4e, ag.a4Y[player] += a4e - a4Z, 0) : (bO.fc[1] = a4e, 10 === aD.ki && (ih = b4.a4f(player, ih)), h7[player] -=
			a4e + ih, ih)
	}, this.ma = function(player) {
		ag.h7[player] -= bO.fc[0] + bO.fc[1]
	}, this.qH = function(player, jZ) {
		return (jZ = Math.min(jZ, aD.f2)) < aD.f2 && 0 === ag.mz[jZ] && (jZ = aD.f2), (bO.f1[0] = jZ) === aD.f2 || bs.ey(player, jZ)
	}, this.qK = function(player, pR) {
		return 0 !== ag.mz[pR] && !bs.ey(player, pR)
	}, this.a4l = function(player, a4m) {
		for (var gd, f5 = al.kw, a4n = 0, a4o = m1, aB = 0; aB < f5; aB++)
			if (gd = a4o[aB], !this.jn(gd)) {
				if (player === gd) return !0;
				if (++a4n > a4m) return !1
			} return !1
	}, this.lx = function(gd) {
		var a4p = aD.hz ? bh.kx() : ag.gt[m1[0]];
		return a4p >= bL.fW(gd * aD.kA, 100)
	}, this.a4q = function(fX, min, max) {
		return Math.floor(bL.iD(isNaN(fX) ? 0 : Number(fX), min, max))
	}
}

function a3L() {
	this.a4r = function(canvas, a4s, a4t) {
		var i = canvas.width,
			j = canvas.height,
			ed = bA.qt.xP(i, j),
			i7 = bA.qt.getContext(ed, !0),
			canvas = (i7.drawImage(canvas, 0, 0), i7.getImageData(0, 0, i, j));
		return a4s(canvas.data, i, j, a4t), i7.putImageData(canvas, 0, 0), ed
	}, this.a4u = function(xa, i, j) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xa[3 + aB] = xa[aB], xa[aB] = xa[1 + aB] = xa[2 + aB] = 255
			}
	}, this.a4v = function(xa, i, j) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xa[1 + aB] > xa[2 + aB] + 10 && (xa[3 + aB] = xa[aB], xa[1 + aB] = xa[2 + aB])
			}
	}, this.a4w = function(xa, i, j, a4t) {
		for (var gap = Math.floor(Math.min(i, j) * a4t), fC = 0; fC < i; fC++)
			for (var aB, fE = 0; fE < j; fE++)(fC < gap || fE < gap || i - gap <= fC || j - gap <= fE) && (xa[3 + (aB = 4 * (fC + fE * i))] = 255 - 255 * (xa[1 + aB] - xa[aB]) / (255 - xa[aB]))
	}, this.a4x = function(xa, i, j, a4t) {
		for (var fC = i - 1; 0 <= fC; fC--)
			for (var fE = j - 1; 0 <= fE; fE--) {
				var aB = 4 * (fC + fE * i);
				xa[aB] = a4t[0], xa[1 + aB] = a4t[1], xa[2 + aB] = a4t[2]
			}
	}, this.a4y = function(xa, i, j, a4t) {
		for (var gap = Math.floor(i * a4t), fC = 0; fC < i; fC++)
			for (var aB, fE = 0; fE < j; fE++)(fC < gap || fE < gap || i - gap <= fC || j - gap <= fE) && (xa[aB = 4 * (fC + fE * i)] = xa[1 + aB] = xa[2 + aB] = 0)
	}, this.a4z = function(xa, i, j) {
		for (var fE, aB, fC = i - 1; 0 <= fC; fC--)
			for (fE = j - 1; 0 <= fE; fE--) 200 < xa[1 + (aB = 4 * (fC + fE * i))] && xa[1 + aB] - 20 > xa[aB] && xa[1 + aB] - 20 > xa[2 + aB] ? xa[aB] + xa[2 + aB] < 40 ? xa[3 + aB] = 0 : (xa[3 + aB] = xa[aB], xa[aB] = 255, xa[1 + aB] = 255, xa[
				2 + aB] = 255) : xa[aB] < 50 && xa[1 + aB] < 50 && xa[2 + aB] < 50 && (xa[aB] + xa[1 + aB] + xa[2 + aB] < 50 ? xa[3 + aB] = 180 : xa[3 + aB] = 180 + Math.floor(75 * (xa[aB] + xa[1 + aB] + xa[2 + aB] - 50) / 100))
	}, this.a50 = function(xa, i, j) {
		for (var fE, aB, fC = i - 1; 0 <= fC; fC--)
			for (fE = j - 1; 0 <= fE; fE--) xa[1 + (aB = 4 * (fC + fE * i))] > xa[aB] + 20 && xa[1 + aB] > xa[2 + aB] + 20 && xa[aB] + xa[2] < 40 && (xa[3 + aB] = 255 - xa[1 + aB], xa[aB] = xa[1 + aB] = xa[2 + aB] = xa[aB])
	}, this.a3x = function(xa, i, j, a4t) {
		for (var eB = i >> 1, fC = 0; fC < i; fC++)
			for (var fE = 0; fE < j; fE++) Math.sqrt((fC - eB) * (fC - eB) + (fE - eB) * (fE - eB)) > a4t * eB && (xa[4 * (fC + fE * i) + 3] = 0)
	}
}

function a3I() {
	var a51 = {
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
		a52 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rt = function(ef) {
		return ef.replace(a52, function(match) {
			return a51[match] || match
		})
	}, this.a0I = function(fX) {
		var aB, a53, a54, a55, a56;
		if (fX < 0) return "-" + this.a0I(Math.abs(fX));
		if (fX < 1e3) return fX.toString();
		for (a53 = Math.floor(Math.log(fX + .5) / Math.log(10)) + 1, a54 = Math.floor((a53 - 1) / 3), a56 = (a55 = fX.toString()).substring(a53 - 3, a53), aB = 1; aB < a54; aB++) a56 = a55.substring(a53 - 3 * (aB + 1), a53 - 3 * aB) + " " + a56;
		return a55.substring(0, a53 - 3 * a54) + " " + a56
	}, this.a57 = function(gd, a53) {
		return gd.toFixed(a53) + "%"
	}, this.a58 = function(fX, a59) {
		return fX.toFixed(bL.iD(Math.floor((void 0 === a59 ? 3 : a59) - Math.log10(Math.max(fX, 1))), 0, 8))
	}, this.a5A = function(fX, nc, a53) {
		return (fX * nc).toFixed(a53)
	}, this.a1k = function(username) {
		var f9, eu = username.indexOf("[");
		return !(eu < 0) && 1 < (f9 = username.indexOf("]")) - eu && f9 - eu <= 8 ? username.substring(eu + 1, f9).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1k;
	this.a5B = function(qa) {
		for (var fO = Math.floor(.5 * qa.length + .5), ni = Math.floor(.5 * (fO - 1)), aB = 0; aB < ni; aB++)
			for (var fP = -1; fP < 2; fP += 2) {
				var ed = fO + fP * aB;
				if (" " === qa[ed]) return [this.a1g(qa.substring(0, ed)), this.a5C(qa.substring(ed))]
			}
		return [qa.substring(0, fO), qa.substring(fO)]
	}, this.a5C = function(qa) {
		for (var f5 = qa.length, aB = 0; aB < f5; aB++)
			if (" " !== qa[aB]) return qa.substring(aB);
		return qa
	}, this.a1g = function(qa) {
		for (var aB = qa.length - 1; 0 <= aB; aB--)
			if (" " !== qa[aB]) return qa.substring(0, aB + 1);
		return qa
	}, this.a5D = function(qa, a5E) {
		return qa.split("(")[0] + "(🧈 " + a5E.toFixed(2) + ")"
	}, this.startsWith = function(qa, a5F) {
		return qa.substring(0, a5F.length) === a5F
	}, this.a4N = function(qa, a5F) {
		var f5 = qa.length;
		return qa.substring(f5 - a5F.length, f5) === a5F
	}, this.a5G = function(g, a5H, a5I) {
		var qa = "",
			f5 = g.length - 1;
		a5I = a5I || "";
		for (var aB = 0; aB < f5; aB++) qa += a5I + g[aB] + a5I + ",", (aB + 1) % a5H == 0 && (qa += "\n");
		return qa += a5I + g[f5] + a5I
	}, this.a5J = function(qa, a07, a08) {
		return qa.replace(new RegExp(a07, "g"), a08)
	}
}

function a5K() {
	this.ec = function(player, er) {
		aI.yu(player, bM.fD(er), bM.fF(er)) && (bf.dk = !0), aD.kk && this.eY()
	}, this.eY = function() {
		aD.hT = !1;
		for (var aB = 0; aB < aD.kQ; aB++) 0 !== ag.mz[aB] && 0 === ag.gt[aB] && aI.z1(aB);
		0 !== ag.mz[aD.ep] ? (bd.mv[7] = ag.gt[aD.ep], bd.mv[8] = ag.h7[aD.ep], aR.a5L(), aW.a5M(), aD.hE || aH.nK(ag.iy[aD.ep] - 5, ag.j0[aD.ep] - 5, ag.iz[aD.ep] + 5, ag.j1[aD.ep] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a5N(18), af.a5O(),
			af.ml(!0), bP.y.a5P(), aL.sA(), aD.qF = null, bb.a5Q = !0, bb.a5R(), aD.kk && a0.a1.setState(1)
	}
}

function c1() {
	this.f2 = 512, this.a4b = 15e8, this.a5S = 1e9, this.a4k = 5e4, this.a5T = 512, this.gP = 2, this.ep = 0, this.kQ = 0, this.a14 = 0, this.km = 0, this.a13 = 0, this.y5 = 512, this.yA = 512, this.a4a = 150, this.kk = !0, this.hE = 0, this.a11 = 0,
		this.kA = 0, this.nT = !1, this.hT = 0, this.a5U = 0, this.hz = !1, this.yC = 0, this.yD = 0, this.ki = 0, this.zS = 0, this.qF = null, this.a1K = new zG, this.a5V = 30, this.a0y = 0, this.a16 = 0, this.a1J = 0, this.a0t = 0, this.data =
		new a5W, this.a5X = new a5Y, this.a5Z = 0, this.a5a = "", this.a5b = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a14 = this.kQ = this.data.humanCount, this.kk = 1 === this.a14, this.nT = !1, this.hE = this.data.isReplay, this.ki = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zS = this.data.isContest, this.hz = this.ki < 7 || 9 === this.ki, this.ki = 10 === this.ki && this.kk ? 7 : this.ki, this.ki = 8 === this.ki && 2 !== this.kQ ? 7 : this.ki, az.dd(),
				this.yC = this.data.numberTeams, this.data.teamPlayerCount ? this.yD = +(0 < this.data.teamPlayerCount[0]) : (this.yD = 0, this.hz && this.kk && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yC + 1), aD.a5X.a5c())), this.a5V = this.kQ <= 2 ? 30 : this.kQ <= 50 ? 40 : 50, this.a5U = this.hT = this.data.selectableSpawn, this.qF = this.hT ? new a5K : null, 1 === l.du ? this.y5 = this.kQ : this.y5 = this.data
				.playerCount, this.yA = this.y5, this.km = this.y5 - this.kQ, this.a13 = 0, this.ep = this.data.selectedPlayer, this.a0y = 0, this.a16 = 0, this.a1J = 0, this.a0t = 0, ay.a5d(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a5e(), b8.pK.q3 = [], bg.dd(), this.a11 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5f(), ac.de(), ap.a5g(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5h(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5i(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5j.putImageData(a5k, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g8(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a1K.dd(), bf.a5h(), aH.nJ(), 0 === ag.mz[aD.ep] && aX.show(!1, !0), af.ml(!0), av.dd(), bf.dk = !0, this.hE || this.kk && this.hT || a0.a1.setState(1), this.a5Z = 0
		}, this.a2Q = function(eS) {
			b9.qD.a5m.length ? this.a5a = b9.qD.a5m : this.a5a = b9.a5n.a0T(), b0.y.a5o(), bq.clear(), this.a11 = 0, bf.a5p(), a0.a1.setState(0), aa.setState(0), bU.eK.show(eS), 2 === this.a5Z ? t.y.a5q(0) : 1 === this.a5Z ? t.u(19) : t.u(5, 5)
		}, this.a5r = function() {
			return this.hE ? aM.hF || !bC.a5s : this.kk && (aM.hF || this.hT)
		}, this.a5t = function() {
			return 1 === this.a11 && !this.hT
		}
}

function a5W() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5u = null
}

function a5Y() {
	this.a5c = function() {
		var a5v = aD.data;
		bA.r1.a3m(a5v.teamPlayerCount, a5v.playerCount), a5v.numberTeams = bA.r1.a3d(a5v.teamPlayerCount, 0), a5v.teamPlayerCount[0] && a5v.teamPlayerCount[7] && (a5v.teamPlayerCount[7] = 0, this.a5c())
	}, this.a5w = function() {
		var a5v = aD.data;
		a5v.mapType < 2 ? bS.a7(bS.a5x(a5v), a5v.mapSeed) : bS.a5y(a5v.canvas)
	}, this.a5z = function() {
		var a5v = aD.data;
		a5v.colorsData || (a5v.colorsData = new Uint32Array(1)), a5v.selectableColor && (a5v.colorsData[0] = bj.y.wc()), a5v.selectableName && (a5v.playerNamesData || (a5v.playerNamesData = new Array(1)), a5v.playerNamesData[0] = bj.eQ.data[122]
			.value), a5v.a5u = new Uint32Array(1), a5v.a5u[0] = bG.tG.xF(bj.eQ.data[105].value, 5)
	}, this.a60 = function() {
		aD.data = new a5W, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.f2), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a61 = [];
	this.pn = function(player, pR, a62, a63) {
		player === aD.ep || pR === aD.ep || !a63 && bA.gR.jn(player) || bA.gR.jn(pR) || this.zT(ag.zU[player] + " supported " + ag.zU[pR] + " with " + bA.rs.a0I(a62) + " ressource" + (1 === a62 ? "." : "s."))
	}, this.zT = function(qa, pc) {
		qa = {
			eT: aW.a65(),
			qa: qa,
			pc: pc
		};
		a61.push(qa), 30 === t.tD && t.a2H().zT(qa)
	}, this.clear = function() {
		a61 = [];
		var tb = t.a66(30);
		tb && tb.clear()
	}, this.a67 = function() {
		return a61
	}
}

function dT() {
	this.zz = 0, this.gap = 0, this.sm = 0, this.qz = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zz = .0022 * bA.qt.qu(.5) * h.iF, this.sm = this.zz / h.k, this.gap = Math.max(Math.floor((a0.a1.iE() ? .0114 : .01296) * h.iF), 2), this.qz = this.gap / h.k
	}
}

function dS() {
	this.a68 = function() {
		return a0.a1.iE() ? 2 : 1
	}
}

function cC() {
	var rS, fC, fE, a69, a6A, a6B, eT, a6C, a6D, a6E, a6F, gap, zoom, pw, a6G;

	function a6U(lf, lg, ej) {
		ac.f0(ej) || -1 === (lf = bN.lF.a6d(lf, lg)) ? aN.a6c(ej) : aN.a6e(lf)
	}

	function a6Q(a6C) {
		for (var aB = pw.length - 1; 0 <= aB; aB--)
			if (pw[aB] === a6C) return 1
	}

	function a6O(a6L) {
		var aB, f5;
		if (-1 !== a6L)
			for (f5 = rS.length, aB = 0; aB < f5; aB++)
				if (rS[aB].hr && rS[aB].fC + 1 === a6L % 4 && rS[aB].fE + 1 === a6L >> 2) return aB;
		return -1
	}

	function a6M(lf, lg) {
		var tb = gap / 2;
		return lf < fC - a69 - 3 * tb || fC + 3 * a69 + 5 * tb < lf || lg < fE - a69 - 3 * tb || fE + 2 * a69 + 3 * tb < lg ? -1 : 4 * (lg < fE - tb ? 0 : lg < fE + a69 + tb ? 1 : 2) + (lf < fC - tb ? 0 : lf < fC + a69 + tb ? 1 : lf < fC + 2 * a69 +
			3 * tb ? 2 : 3)
	}
	this.a6H = function() {
		var aB, fP, a6K = [bB.oQ, bB.oe, bB.ny, bB.p1, bB.os];
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
			for (fP = 0; fP < rS[aB].colors.length; fP++) rS[aB].canvas.push(function(id, a3s) {
				if (id < 20) return bA.canvas.zl(ab.get(3), id, a3s);
				var a3s = ab.get(3).height,
					a3t = bA.qt.xP(a3s, a3s),
					i7 = bA.qt.getContext(a3t);
				20 === id ? i7.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xa.a00(aj.s9.zp + aj.s9.a06, i7, 0, 0, a3s);
				return a3t
			}(rS[aB].id, a6K[rS[aB].colors[fP]]))
	}, this.a6J = function() {
		return rS
	}, this.dd = function() {
		pw = [], fC = fE = eT = 0, a6A = a6B = -1e3, this.resize()
	}, this.resize = function() {
		a69 = Math.floor((a0.a1.iE() ? .075 : .0468) * h.iF), zoom = a69 / ab.get(3).height, gap = Math.floor(a69 / 3)
	}, this.a2t = function(lf, lg) {
		return !!this.hr() && (bf.dk = !0, !!aj.xa.hI(lf, lg, a6D) || (lf = function(lf, lg) {
			a6B = a6A = -1e3;
			var a6N = a6O(a6M(lf, lg));
			if (-1 === a6N) return 0;
			if (1 !== rS[a6N].colors[rS[a6N].lN])
				if (5 === a6N) {
					if (! function() {
							var eU = performance.now();
							a6G + 4e3 < eU && (pw = []);
							a6G = eU
						}(), a6Q(a6C)) return 1;
					pw.push(a6C), 16 < pw.length && pw.shift()
				} else if (6 === a6N) {
				for (var aB = pw.length - 1; 0 <= aB; aB--) 0 === ag.mz[pw[aB]] && pw.splice(aB, 1);
				0 < pw.length && (b5.a6R(1, pw, !0) && b8.gR.pv(pw, a6C), pw = [])
			} else if (2 === a6N) an.hj(a6C) && b8.hV.pQ(aR.hZ(), a6C);
			else if (3 === a6N) aD.hT && b8.hV.hW(a6E);
			else if (0 === a6N)
				if (0 === rS[0].lN) {
					if (aD.a5U && aW.a65() < 350) return 1;
					bV.a6S(4), b8.hV.hc(aR.hZ(), a6C)
				} else b1.hd(a6C, aR.hZ());
			else if (1 === a6N) b8.hV.hh(aR.hZ(), a6E);
			else if (9 === a6N) b8.hV.hk(aR.hZ());
			else {
				if (7 === a6N) return bV.a6S(0), aj.xa.show(lf, lg), 2;
				if (4 === a6N) b5.a6R(0, [a6C], !0) && b8.gR.ps(a6C);
				else {
					if (8 !== a6N) return 0;
					b8.hV.hY(aR.hZ(), a6F, a6C)
				}
			}
			return 1
		}(lf, lg), this.sA(), 2 === lf && (aj.xa.hr = !0), 0 < lf))
	}, this.a2v = function(lf, lg) {
		this.hr() || (a6A = lf, a6B = lg, eT = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hL(mouseX),
			coordY = bM.hN(mouseY),
			coord = bM.fS(coordX, coordY),
			coord = bM.ev(coord);
		bM.hO(coordX, coordY) && a6U(mouseX, mouseY, coord)
	}, this.click = function(lf, lg, a32) {
		var hK = bM.hL(lf),
			hM = bM.hN(lg),
			er = bM.fS(hK, hM),
			ej = bM.ev(er);
		return !(!bM.hO(hK, hM) || (hK = (a0.a1.iE() ? .025 : .0144) * h.iF, hM = performance.now(), Math.abs(lf - a6A) > hK) || Math.abs(lg - a6B) > hK || eT + 500 < hM) && (eT = hM, a32 ? (a6U(lf, lg, ej), !1) : aM.hF || this.hr() || !bA.gR.hH(
			aD.ep) || aD.hE ? (this.sA(), !1) : (aD.hT ? 0 <= (a6E = br.hU(er)) && (rS[3].hr = !0) : 2 === aD.a11 ? ac.gf(ej) && (a6C = ac.ex(ej), bA.gR.jn(a6C) || (rS[0].hr = !0, rS[0].lN = 1, rS[7].hr = !0)) : (bN.hi.hj(aD.ep, er) && (
			rS[0].hr = !0, rS[0].lN = 1, rS[1].hr = !0, rS[1].lN = 0, rS[9].hr = !0, rS[9].lN = 0), bN.hf.hg(aD.ep, er) && (rS[0].hr = !0, rS[0].lN = 1, rS[1].hr = !0, rS[1].lN = 1, a6E = bO.fh[7]), ac.fA(ej) ? (a6F = am.eg.ei(
			ej)) && (hK = bM.ev(a6F), rS[8].hr = !0, a6C = ac.ew(hK) ? aD.f2 : ac.ex(hK)) : (ac.yz(aD.ep, ej) && (a6D = aD.ep, rS[0].hr = !0, rS[0].lN = 1, rS[7].hr = !0), -1 !== (hM = br.ha(er)) && (ac.ew(hM << 2) ? (a6C = aD.f2,
			bs.hb(aD.ep) ? (rS[0].hr = !0, rS[0].lN = 0) : ad.gC(aD.ep) && (rS[0].hr = !0, rS[0].lN = 3)) : (a6C = ac.ex(hM << 2), rS[0].lN = 1, rS[5].hr = function(a6C) {
			return !bA.gR.jn(a6C) && !a6Q(a6C) && b5.a6R(1, [a6C], !1)
		}(a6C), rS[7].hr || bA.gR.jn(a6C) || (a6D = a6C, rS[7].hr = !0), rS[4].hr = !bA.gR.jn(a6C) && !af.a6Y(a6C) && b5.a6R(0, [a6C], !1), rS[6].hr = function(a6C) {
			if (0 === pw.length) return !1;
			if (performance.now() > a6G + 4e3) return !(pw = []);
			return !a6Q(a6C) && ! function(a6C) {
				var aB;
				if (aD.hz)
					for (aB = pw.length - 1; 0 <= aB; aB--)
						if (!bs.ey(a6C, pw[aB])) return 1;
				return
			}(a6C)
		}(a6C), bs.ey(a6C, aD.ep) ? (bs.he(aD.ep, a6C) ? (rS[0].lN = 0, rS[0].hr = !0) : ad.gC(aD.ep) && (rS[0].lN = 3, rS[0].hr = !0), rS[0].hr = this.a6a()) : (rS[2].hr = !0, an.hj(a6C) ? rS[2].lN = 0 : rS[2].lN = 1,
			rS[0].hr = !0))))), this.a6V(lf, lg)))
	}, this.a6V = function(lf, lg) {
		return fC = lf - Math.floor(a69 / 2), fE = lg - Math.floor(a69 / 2), !!this.hr()
	}, this.a2Z = function(lf, lg) {
		return !!this.hr() && (aj.xa.hr ? !aj.xa.zy(lf, lg) && (aj.xa.hr = !1, bf.dk = !0) : function(sV, lf, lg) {
			lf = a6M(lf, lg);
			if (0 <= a6O(lf)) return !1;
			if ((1 === lf || 6 === lf) && 0 <= a6O(2)) return !1;
			if ((6 === lf || 9 === lf) && 0 <= a6O(10)) return !1;
			return sV.sA(), bf.dk = !0
		}(this, lf, lg))
	}, this.sA = function() {
		for (var aB = rS.length - 1; 0 <= aB; aB--) rS[aB].hr = !1, rS[aB].lN = 0;
		aj.xa.hr = !1
	}, this.hr = function() {
		return this.a6a() || aj.xa.hr
	}, this.a6a = function() {
		for (var f5 = rS.length, aB = 0; aB < f5; aB++)
			if (rS[aB].hr) return !0;
		return !1
	}, this.vY = function() {
		if (this.hr())
			if (aj.xa.hr) aj.xa.vY();
			else {
				var aB, i7 = vZ,
					fP = rS,
					f5 = fP.length,
					a6i = (a69 + gap) / zoom;
				for (i7.imageSmoothingEnabled = !0, i7.setTransform(zoom, 0, 0, zoom, fC, fE), aB = 0; aB < f5; aB++) fP[aB].hr && vZ.drawImage(fP[aB].canvas[fP[aB].lN], fP[aB].fC * a6i, fP[aB].fE * a6i);
				i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6j, a6k, a6l, a6m = -1;

	function a6n() {
		var a6o, zA = canvas.getContext("2d", {
			alpha: !0
		});
		zA.clearRect(0, 0, j, j), zA.fillStyle = bB.nw, zA.fillRect(0, 0, j, j), 9 === a6k && (zA.fillStyle = bB.o1, zA.fillRect(0, 0, j, j)), zA.fillStyle = bB.o0, zA.fillRect(0, 0, j, 1), zA.fillRect(0, 0, 1, j), zA.fillRect(0, j - 1, j, 1), zA
			.fillRect(j - 1, 0, 1, j), a6o = .9 * j / ab.get(0).width, zA.imageSmoothingEnabled = !0, zA.setTransform(a6o, 0, 0, a6o, Math.floor((j - a6o * ab.get(0).width) / 2), Math.floor((j - a6o * ab.get(0).height) / 2)), zA.drawImage(ab.get(0),
				0, 0), zA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6q(lf, lg) {
		if (!aM.hF) return lf <= j + bc.gap && lg >= aR.fE ? 9 : -1;
		if (lf <= 4 * j + bc.gap) {
			if (lg >= aR.fE) return 0;
			if (lg >= aR.fE - j - a6l * bc.gap) return 2
		} else if (lf <= 7 * j + bc.gap && lg >= aR.fE - j - a6l * bc.gap) return 1;
		return -1
	}
	this.hF = !1, this.dd = function() {
		a6k = -1, this.hF = !1, a6l = a0.a1.iE() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6j = bA.qt.sk(1, (a0.a1.iE() ? .5 : .45) * j), a6n()
	}, this.a3A = function() {
		this.hF = !this.hF, this.hF ? (bC.a39(!1), aD.hE && bC.a5s && bC.a3B(!0), this.a6p(), 9 === a6k && (a6k = 0)) : (a6k = -1, a6n(), !aD.kk || 1 !== aD.a11 || aD.hT || aD.hE || a0.a1.setState(1)), bf.dk = !0
	}, this.a6p = function() {
		(aD.kk || aD.hE) && 1 === aD.a11 && (aV.ml(!0), aD.hT || setTimeout(function() {
			bb.a1D()
		}, 0), a0.a1.setState(0))
	}, this.hI = function(lf, lg) {
		return 0 <= (a6m = a6q(lf, lg)) || !aM.hF || aD.kk || aD.hE || be.hr || aM.a3A(), a6m
	}, this.a2Z = function(lf, lg) {
		lf = a6q(lf, lg);
		lf !== a6k && (a6k = lf, this.hF || a6n(), bf.dk = !0)
	}, this.a2a = function(lf, lg) {
		lf = a6q(lf, lg);
		return -1 !== lf && a6m === lf && (this.hF ? aD.nT ? (0 <= lf && bC.a39(!1), !aD.hE) : (0 === lf ? aD.a2Q() : 1 === lf ? this.a3A() : 2 === lf && t.u(1, 0), !0) : 9 === lf && (this.a3A(), !0))
	}, this.vY = function() {
		var i;
		this.hF ? (i = Math.floor(5.5 * j), vZ.setTransform(1, 0, 0, 1, bc.gap, aR.fE), vZ.fillStyle = bB.nw, vZ.fillRect(0, 0, i, j), 0 === a6k ? (vZ.fillStyle = bB.o1, vZ.fillRect(0, 0, 4 * j, j)) : 1 === a6k && (vZ.fillStyle = bB.o1, vZ
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vZ.fillStyle = bB.o0, vZ.fillRect(0, 0, i, 1), vZ.fillRect(0, 0, 1, j), vZ.fillRect(4 * j, 0, 1, j), vZ.fillRect(0, j - 1, i, 1), vZ.fillRect(i - 1, 0, 1, j), vZ.font = a6j, bA.qt
			.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 1), vZ.fillText(L(44), 2 * j, .54 * j), i = .4 * j, aM.a6u(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fE + .3 * j, i), i = 1, vZ.setTransform(1, 0, 0, 1, bc.gap, aR.fE - i * a6l * bc.gap - i *
				j), vZ.fillStyle = bB.nw, vZ.fillRect(0, 0, 4 * j, j), a6k === i + 1 && (vZ.fillStyle = bB.o1, vZ.fillRect(0, 0, 4 * j, j)), vZ.fillStyle = bB.o0, vZ.fillRect(0, 0, 4 * j, 1), vZ.fillRect(0, 0, 1, j), vZ.fillRect(4 * j, 0, 1,
				j), vZ.fillRect(0, j - 1, 4 * j, 1), vZ.fillText(L(0 === i ? 44 : 45), 2 * j, .54 * j), vZ.setTransform(1, 0, 0, 1, 0, 0)) : vZ.drawImage(canvas, bc.gap, aR.fE)
	}, this.qU = function(player) {
		return 0 !== ag.mz[player] && 2 !== aD.a11 && !bA.gR.jn(player)
	}, this.a6u = function(fC, fE, f5) {
		vZ.setTransform(1, 0, 0, 1, fC, fE), vZ.lineWidth = bc.zz, vZ.strokeStyle = bB.o0, vZ.beginPath(), vZ.moveTo(0, 0), vZ.lineTo(f5, f5), vZ.moveTo(0, f5), vZ.lineTo(f5, 0), vZ.stroke()
	}
}

function cE() {
	var a6w, j, a6x, a6y, a6z, a70, a71, a72, a73;

	function z6() {
		return aR.a7L(aN.a7H()) ? aw.hr ? __fx.settings.keybindButtons ? aR.fE - 2 * aR.j - 3 * a6x : aR.fE - aR.j - 2 * a6x : __fx.settings.keybindButtons ? aR.fE - aR.j - 2 * a6x : aR.fE - a6x : bC.a7L(aN.a7K()) ? aw.hr ? bC.z6() - aR.j - 2 * a6x :
			bC.z6() - a6x : aw.hr ? h.j - aR.j - (bk.a68() + 1) * a6x : h.j - bk.a68() * bc.gap
	}

	function a78(eU, qa, id, gd, a7B, a7C, l3, a7D, a7E, a7F, a7P) {
		var aB, zA, a3t, ql, a7Q = void 0 !== a7E,
			i = Math.floor(aQ.measureText(qa, aN.a6j) + 1.5 * a6y + (a7Q ? j : 1.5 * a6y));
		if (bf.dk = !0, a7P || bq.zT(qa, a7E), i + 2 * a6x + aR.j > h.i && !a7Q && 50 !== id && 20 < qa.length) a78(eU, (a7P = bA.rs.a5B(qa))[0], id, gd, a7B, a7C, l3, a7D, a7E, a7F, !0), a78(eU, a7P[1], id, gd, a7B, a7C, l3, a7D, a7E, a7F, !0);
		else if (a7P = i + (50 === id ? a6z : 0), (a3t = document.createElement("canvas")).width = i, a3t.height = j, (zA = a3t.getContext("2d", {
				alpha: !0
			})).font = aN.a6j, bA.qt.textBaseline(zA, 1), bA.qt.textAlign(zA, 0), zA.clearRect(0, 0, i, j), zA.fillStyle = a7C, zA.fillRect(0, 0, i, j), zA.fillStyle = a7B, zA.fillText(qa, Math.floor(1.5 * a6y), Math.floor(j / 2)), a7Q && (zA
				.imageSmoothingEnabled = !0, aj.xa.a00(a7E, zA, i - j, 0, j)), 0 === (ql = {
				eT: eU,
				qa: qa,
				id: id,
				player: gd,
				canvas: a3t,
				a7B: a7B,
				a7C: a7C,
				i: i,
				a7I: a7P,
				l3: l3,
				a7D: a7D,
				a7E: a7E,
				a7F: a7F
			}).eT || 0 < a6w.length && 0 < a6w[0].eT) a6w.unshift(ql);
		else {
			for (aB = 1; aB < a6w.length; aB++)
				if (0 < a6w[aB].eT) return void a6w.splice(aB, 0, ql);
			a6w.push(ql)
		}
	}

	function a79(eB, tb, fP) {
		return "rgb(" + eB + "," + tb + "," + fP + ")"
	}

	function a7R(id, gY) {
		for (var f5 = a6w.length, aB = 0; aB < f5; aB++) a6w[aB].id === id && gY-- <= 0 && (a6w.splice(aB, 1), aB--, f5--)
	}

	function a7S(id, player) {
		for (var fJ = !1, aB = a6w.length - 1; 0 <= aB; aB--) a6w[aB].id !== id || player !== aD.f2 && a6w[aB].player !== player || (a6w.splice(aB, 1), fJ = !0);
		return fJ
	}

	function a7o(qa) {
		a78(340, qa, 6, 0, a79(215, 245, 255), bB.nx, -1, !1)
	}
	this.a74 = "", this.dd = function() {
		var self;
		a72 = 0, a71 = a0.a1.iE() ? 7 : 12, a70 = {
				a0p: [0, 0, 0],
				a75: [0, 0, 0],
				nH: [220, 180, 180],
				vX: [0, 0, 0],
				ed: [0, 0, 0]
			}, a6w = [], this.resize(), aD.hT && this.a1E(0, 18), bS.xN.xO[bS.el].name.length && a7o(L(88, [bS.xN.xO[bS.el].name])), bS.xN.xO[bS.el].a7p && a7o(L(89, [bS.xN.xO[bS.el].a7p])), a7o(L(90, [bS.fG - 2 + "x" + (bS.fH - 2)])), a7o(L(91,
				[bA.rs.a0I(ap.a7q)])), ap.a7q !== ap.a7r && a7o(L(92, [bA.rs.a0I(ap.a7r) + " (" + bA.rs.a57(100 * ap.a7r / ap.a7q, 1) + ")"])), 0 < ap.a7s && a7o(L(68, [bA.rs.a0I(ap.a7s) + " (" + bA.rs.a57(100 * ap.a7s / ap.a7q, 1) + ")"])), 0 <
			ap.a7t && a7o(L(93, [bA.rs.a0I(ap.a7t) + " (" + bA.rs.a57(100 * ap.a7t / ap.a7q, 1) + ")"])), 10 === aD.ki && a78(120, L(94), 6, 0, a79(235, 255, 120), bB.nx, -1, !1), 0 !== (self = this).a74.length && (a78(200, self.a74, 0, 0, bB.o0,
				bB.nx, -1, !1), self.a74 = ""), aD.zS && a78(340, L(46), 6, 0, a79(255, 200, 0), bB.nx, -1, !1)
	}, this.resize = function() {
		var a7A, aB;
		if (j = (j = Math.floor((a0.a1.iE() ? .031 : .0249) * h.iF)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6j = bA.qt.sk(1, this.fontSize), a6x = bc.gap, a6y = Math.floor(j / 5), 0 < a6w.length)
			for (a7A = a6w, a6w = [], aB = a7A.length - 1; 0 <= aB; aB--) a78(a7A[aB].eT, a7A[aB].qa, a7A[aB].id, a7A[aB].player, a7A[aB].a7B, a7A[aB].a7C, a7A[aB].l3, a7A[aB].a7D, a7A[aB].a7E, a7A[aB].a7F, !0);
		this.a7G()
	}, this.a7G = function() {
		a73 = document.createElement("canvas");
		var qa = L(47),
			zA = (a6z = aQ.measureText(qa, this.a6j) + 5 * a6y, a73.height = j, a73.width = a6z, a73.getContext("2d", {
				alpha: !0
			}));
		zA.font = this.a6j, bA.qt.textBaseline(zA, 1), bA.qt.textAlign(zA, 1), zA.clearRect(0, 0, a6z, j), zA.fillStyle = bB.oN, zA.fillRect(0, 0, a6z, j), zA.fillStyle = bB.o0, zA.fillText(qa, Math.floor(a6z / 2), Math.floor(j / 2))
	}, this.a7H = function() {
		var f5;
		return aw.hr ? aw.i : 0 === (f5 = a6w.length) ? 0 : 1 === f5 ? a6w[0].a7I : a7J(a6w[0].a7I, a6w[1].a7I)
	}, this.a7K = function() {
		var f5 = a6w.length;
		return aw.hr ? f5 ? a7J(aw.i, a6w[0].a7I) : aw.i : 0 === f5 ? 0 : 1 === f5 ? a6w[0].a7I : 2 === f5 ? a7J(a6w[0].a7I, a6w[1].a7I) : a7J(a7J(a6w[0].a7I, a6w[1].a7I), a6w[2].a7I)
	}, this.hI = function(fC, fE) {
		for (var nQ, a7M, a7N = z6(), aB = a6w.length - 1; 0 <= aB; aB--)
			if ((a7M = a7N - (aB + 1) * j) <= fE && fE < a7M + j) return 50 === a6w[aB].id ? fC >= h.i - a6z - a6x - a6w[aB].i && (fC >= h.i - a6z - a6x ? b8.gR.ps(a6w[aB].player) : aH.nL(a6w[aB].player, 800, !1, 0), !0) : fC >= h.i - a6w[aB].i -
				a6x && (736 === a6w[aB].id ? window.open("https://" + a6w[aB].qa, "_blank") : a6w[aB].a7D && (a6w[aB].a7F && a6w[aB].a7F.fO ? (a7M = a6w[aB].a7F.er, nQ = bM.fD(a7M) - 10, a7M = bM.fF(a7M) - 10, aH.nK(nQ, a7M, 19 + nQ, 19 +
					a7M)) : a6w[aB].a7F && a6w[aB].a7F.fP ? aH.nM(a6w[aB].player, a6w[aB].a7F.nN) : (aH.nL(a6w[aB].player, 800, !1, 0), 0 <= a6w[aB].l3 && (nQ = a6w[aB].l3, a6w[aB].l3 = a6w[aB].player, a6w[aB].player = nQ))), !0);
		return !1
	}, this.zT = function(eU, qa, id, gd, a7B, a7C, l3, a7D, a7E, a7F) {
		a78(eU, qa, id, gd, a7B, a7C, l3, a7D, a7E, a7F)
	}, this.a7O = function(r) {
		a78(300, r, 252, 0, bB.o0, bB.nx, -1, !1)
	}, this.a5N = function(id) {
		for (var aB = a6w.length - 1; 0 <= aB; aB--) a6w[aB].id === id && (a6w[aB].eT = 1)
	}, this.a1E = function(player, id) {
		0 === id ? (aQ.ec(player, 0), a7R(423, 2), a78(160, L(48, [ag.zU[player]]), 423, player, "rgb(10,220,10)", bB.nx, -1, !1)) : 1 === id ? (a7S(50, aD.f2), aQ.ec(player, 1), a78(360, L(49, [ag.zU[player]]), 0, player, bB.oh, bB.nx, -1, !0),
			aH.nL(player, 2700, !1, 0)) : 2 === id ? (aQ.ec(player, 2), a78(0, L(50), 0, player, "rgb(10,255,255)", bB.nx, -1, !0), aH.nL(player, 2700, !1, 0)) : 3 === id ? (aQ.ec(player, 2), a78(0, L(51, [ag.zU[player]]), 0, player, bB.o0,
			bB.nx, -1, !0), aH.nL(player, 2700, !1, 0)) : 4 === id ? this.a7T(1, player, player) : 5 === id ? bA.gR.jn(aD.ep) || (function(id, mu) {
			var aB, a7d = 0,
				f5 = a6w.length;
			for (aB = 0; aB < f5; aB++)
				if (a6w[aB].id === id && mu <= ++a7d) return a6w.splice(aB, 1)
		}(1, 5), af.a7V(player) && a78(180, L(52, [ag.zU[player]]), 1, player, a79(255, 200, 180), bB.nx, -1, !0), bA.gR.a4U(player, 10) && (a7R(573, 0), a78(180, L(53, [ag.zU[player]]), 573, player, bB.oh, bB.nx, -1, !0))) : 18 === id ? a78(
			255, L(54), 18, 0, bB.o0, bB.nx, -1, !1) : 21 === id ? a78(220, L(55), id, 0, bB.o0, bB.nx, -1, !1) : 22 === id ? this.a7T(2, player, player) : 59 === id && a78(0, L(56), id, 0, bB.p0, bB.nx, 0, !1)
	}, this.a2M = function(r) {
		a78(200, L(57, [r]), 94, 0, bB.o0, bB.oc, -1, !1)
	}, this.a1Q = function(a7W) {
		if (aD.ep === a7W && !aD.kk && !aD.hE)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a78(0, "Your Win Count is now " + __fx.wins.count, 3, a7W, bB.o0, bB.nx, -1, !0);
		ag.gt[a7W] && (aQ.ec(a7W, 2), aD.kQ < 100 ? a78(0, L(51, [ag.zU[a7W]]), 3, a7W, bB.o0, bB.nx, -1, !0) : a78(0, L(58, [ag.zU[a7W]]), 3, a7W, bB.o0, bB.nx, -1, !0))
	}, this.a6c = function(ej) {
		var qa, a7Y, a7X = "(" + bM.fD(ej >> 2) + ", " + bM.fF(ej >> 2) + ")",
			a7D = !1,
			player = 0;
		ac.f0(ej) ? ac.ew(ej) ? a7X = L(59, [a7X]) : (player = ac.ex(ej), aD.hE && !1 === __fx.hoveringTooltip.active && (aD.ep = player), qa = L(60, [bA.zA.a47(ag.a1h[player], bA.qt.sk(0, 10), 150)]) + "   ", qa = (qa += L(61, [bA.rs.a0I(ag.h7[
				player])]) + "   ") + L(62, [bA.rs.a0I(ag.gt[player])]) + "   ", aD.hz && (a7Y = bg.a1N[bg.kn[bg.f3[player]]], qa += L(63) + ": " + a7Y + "   "), bA.gR.jn(player) && (qa += L(64) + ": " + aE.kb[aE.ho[player]] + "   "), a7X =
			qa = (qa += L(65, [player]) + "   ") + L(66, [a7X]), a7D = !0) : a7X = ac.fA(ej) ? L(67, [a7X]) + "   #" + ac.en(ej) : L(68, [a7X]), bf.dk = !0, a7R(55, 0), a78(220, a7X, 55, player, bB.o0, bB.nx, -1, a7D, void 0, void 0, !0)
	}, this.a6e = function(a7Z) {
		var lL = bN.y,
			player = lL.mK[a7Z] >> 3,
			qa = (bf.dk = !0, a7R(55, 0), L(69, [ag.zU[player]]) + "   ");
		a78(220, qa += L(61, [bA.rs.a0I(lL.a7a[a7Z])]), 55, player, bB.o0, bB.nx, -1, !0)
	}, this.pb = function(pN, a7b, pc) {
		pN === aD.ep ? a78(175, " " + L(70, [ag.zU[a7b]]) + ": ", 1001, a7b, a79(200, 255, 210), bB.nx, -1, !0, pc) : this.a7c(pN, pc)
	}, this.a7c = function(pN, pc) {
		a7R(1e3, 0), a78(175, ag.zU[pN] + ": ", 1e3, pN, bB.o0, "rgba(5,60,25,0.9)", -1, !0, pc)
	}, this.a1P = function() {
		var r;
		aD.a16 ? (r = L(71), aQ.a1O(L(72), 2, 1, 12), a78(0, r, 40, 0, "rgb(10,220,10)", bB.nx, -1, !1)) : (r = L(73), aQ.a1O(L(74), 2, 0, 16), a78(0, r, 41, 0, bB.o0, bB.nx, -1, !1))
	}, this.zH = function() {
		var gY = ag.zU,
			f8 = aD.data;
		a78(300, gY[0] + " [" + aD.a1K.zN(f8.elo[0]) + "] vs " + gY[1] + " [" + aD.a1K.zN(f8.elo[1]) + "]", 65, 0, bB.nr, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7e = function(r) {
		a78(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7f = function(a7g) {
		a78(0, L(a7g ? 75 : 76), 247, 0, bB.oz, bB.nx, -1, !1)
	}, this.zP = function(zM, zO, a7h) {
		var f8 = aD.data,
			gY = ag.zU;
		a78(0, gY[0] + ": " + aD.a1K.zN(f8.elo[0]) + " -> " + zM, 66, 0, bB.o0, a7h[0], -1, !1), a78(0, gY[1] + ": " + aD.a1K.zN(f8.elo[1]) + " -> " + zO, 66, 1, bB.o0, a7h[1], -1, !1)
	}, this.pt = function(player, id) {
		0 === id ? a7S(50, player) ? (a78(128, L(77, [ag.zU[player]]), 52, player, a79(180, 255, 180), bB.nx, -1, !0), af.qS(player, 2, 255)) : a78(384, L(78, [ag.zU[player]]), 51, player, a79(210, 210, 255), bB.nx, -1, !0) : a7S(51, player) ? (
			a78(128, L(79, [ag.zU[player]]), 52, player, bB.o0, "rgba(60,120,10,0.9)", -1, !0), af.qS(player, 2, 255)) : (a78(384, L(80, [ag.zU[player]]), 50, player, bB.o0, "rgba(90,90,90,0.9)", -1, !0), af.qS(player, 2, 96))
	}, this.px = function(a0p, target) {
		var color = a79(210, 255, 210);
		1 < a0p.length ? a78(230, L(81, [a0p.length, ag.zU[target]]), 66, target, color, bB.nx, -1, !0) : a78(230, L(82, [ag.zU[a0p[0]], ag.zU[target]]), 66, a0p[0], color, bB.nx, target, !0)
	}, this.a7i = function(player, target) {
		a78(230, L(83, [ag.zU[player], ag.zU[target]]), 66, player, bB.o0, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7j = function(id, gY) {
		a7R(id, gY)
	}, this.a19 = function(id, player) {
		a7S(id, void 0 === player ? aD.f2 : player)
	}, this.a7k = function(id) {
		for (var aB = a6w.length - 1; 0 <= aB; aB--)
			if (a6w[aB].id === id) return a6w[aB];
		return null
	}, this.po = function(a62, a7l, player) {
		2 !== ag.a4P[aD.ep] && a78(200, 1 === a62 ? L(84, [ag.zU[player]]) : L(85, [bA.rs.a0I(a62), ag.zU[player]]), 30, player, "rgb(190,255,190)", bB.nx, -1, !0)
	}, this.a7n = function(a62, player) {
		2 !== ag.a4P[aD.ep] && (a7R(31, 0), a62 = " (" + bA.rs.a0I(a62) + ") 💸", a78(150, a62 = bA.gR.jn(player) ? L(86) + a62 : L(87, [ag.zU[player]]) + a62, 31, player, bB.nr, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a18 = function(bu) {
		for (var ed = bf.kN(), aB = 2; 0 <= aB; aB--) 0 < a70.vX[aB] && (bu || a70.ed[aB] < ed - 220) && this.a7u(aB)
	}, this.a7u = function(id) {
		var qa, f5 = a70.vX[id],
			player = a70.a0p[id];
		a70.vX[id] = 0, 1 === f5 ? (0 === id ? qa = L(95, [ag.zU[player], ag.zU[a70.a75[0]]]) : 1 === id ? qa = L(96, [ag.zU[player]]) : 2 === id ? qa = L(97, [ag.zU[player]]) : 3 === id && (qa = L(98, [ag.zU[player]])), a7R(7, 0), a78(a70.nH[
			id], qa, 7, a70.a75[id], bB.o0, bB.nx, -1, !0)) : (qa = L(0 === id ? 99 : 1 === id ? 100 : 101, [f5]), a7R(7, 0), a78(a70.nH[id], qa, 7, player, bB.o0, bB.nx, -1, !1))
	}, this.a7T = function(id, hX, l3) {
		var ed = bf.kN(),
			f5 = a70.vX[id] + 1;
		a70.vX[id]++, a70.a0p[id] = hX, a70.a75[id] = l3, 1 === f5 && (a70.ed[id] = ed), (1 === f5 && (aD.a14 < 32 || 2 === aD.a11) || 1 < f5 && (a70.ed[id] < ed - 140 || 2 === aD.a11)) && this.a7u(id)
	}, this.eY = function() {
		b2.eY();
		for (var jf = (jf = a6w.length - a71) <= 1 ? 1 : jf * jf, aB = a6w.length - 1; 0 <= aB; aB--) 0 < a6w[aB].eT && (a6w[aB].eT -= jf, a6w[aB].eT <= 0) && (bf.dk = !0, a6w.splice(aB, 1));
		! function() {
			var gY, aB;
			if (128 !== a72 && !(++a72 < 128))
				for (gY = 5, aB = al.kw - 1; 0 <= aB; aB--) 1 === ag.a4P[al.l1[aB]] && 0 < gY-- && a78(240, L(98, [ag.zU[al.l1[aB]]]), 1, al.l1[aB], bB.nr, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a18(!1)
	}, this.vY = function() {
		for (var y8, fE = z6(), aB = a6w.length - 1; 0 <= aB; aB--) y8 = fE - (aB + 1) * j, 50 === a6w[aB].id ? (vZ.drawImage(a6w[aB].canvas, h.i - a6w[aB].i - a6z - a6x, y8), vZ.drawImage(a73, h.i - a6z - a6x, y8)) : vZ.drawImage(a6w[aB].canvas,
			h.i - a6w[aB].i - a6x, y8)
	}
}

function cF() {
	var a7x, a7y, va = "",
		xt = 0,
		xu = 0,
		a7w = -1,
		e6 = ["Team", "Zombie", "BR", "1v1"];

	function a7z() {
		for (var eU = new Date, a80 = eU.getUTCMinutes(), eU = eU.getUTCSeconds(), a82 = [], a83 = 0, aB = 0; aB < 6; aB++) a82.push(a83), a82.push(a83 + 2), a82.push(a83 + 5), a82.push(a83 + 7), a83 += 10;
		for (var f5 = a82.length, aB = 1; aB < f5 && !(a80 < a82[aB]); aB++);
		aB %= f5;
		eU = (a82[0] = 60) * (a82[aB] - a80) - eU;
		return eU !== a7w && (va = e6[aB % 4] + " " + a7y + ": " + a85(Math.floor(eU / 60)) + ":" + a85(eU % 60), a7w = eU, xt = aQ.measureText(va, a7x), xt += Math.floor(.4 * xu), 1)
	}

	function a85(a86) {
		return a86 < 10 ? "0" + a86 : String(a86)
	}
	this.dd = function() {
		a7y = L(102)
	}, this.resize = function() {
		xt = Math.floor((a0.a1.iE() ? .53 : .36) * h.iF), xu = Math.floor(.065 * xt), a7x = bA.qt.sk(1, Math.floor(.9 * xu)), a7w += 1e3, a7z()
	}, this.eY = function() {
		a7z() && (bf.dk = !0)
	}, this.vY = function(fE) {
		vZ.lineWidth = 1 + Math.floor(xu / 15), vZ.translate(h.i - xu, fE + xt), vZ.rotate(-Math.PI / 2), vZ.fillStyle = bB.o0, vZ.fillRect(0, 0, xt, xu), vZ.strokeStyle = bB.nr, vZ.strokeRect(0, 0, xt, xu + 10), vZ.fillStyle = bB.nr, vZ.font =
			a7x, bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 1), vZ.fillText(va, Math.floor(xt / 2), Math.floor(.59 * xu)), vZ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a61, a87, a88, xu, a89, a8A = 0,
		a8B = 0;

	function a8D(aB) {
		var a8F = !0,
			a07 = bB.o0,
			i = (1 === a61[aB].id ? a61[aB].zA.fillStyle = bB.ou : a61[aB].jZ === aD.f2 ? a61[aB].zA.fillStyle = bB.oB : (ac.a8G(a61[aB].jZ), a61[aB].zA.fillStyle = bA.color.nu(bO.fe[0], bO.fe[1], bO.fe[2], .87), 400 < bA.r1.a3X(bO.fe, 0, 2) && (
				a8F = !1, a07 = bB.nr)), a61[aB].canvas.width),
			tK = (a61[aB].zA.clearRect(0, 0, i, xu), a61[aB].zA.fillRect(0, 0, i, xu), a61[aB].zA.fillStyle = a07, ! function(zA, i, xu) {
				zA.fillRect(0, 0, i, 1), zA.fillRect(0, xu - 1, i, 1), zA.fillRect(0, 0, 1, xu), zA.fillRect(i - 1, 0, 1, xu)
			}(a61[aB].zA, i, xu), a87 + 2 * xu < i && (a61[aB].zA.fillRect(i - a87 - xu, 0, 1, xu), a61[aB].zA.fillText(ag.zU[a61[aB].jZ], Math.floor((i - a87) / 2), Math.floor(.57 * xu))), 0 !== a61[aB].id ? 0 : xu);
		a61[aB].zA.fillText(bA.rs.a0I(a61[aB].ho), Math.floor(i - a87 / 2 - tK), Math.floor(.57 * xu)),
			function(aB, i, tK, a8F) {
				a61[aB].zA.fillStyle = a8F ? bB.o2 : bB.ny;
				a8F = Math.floor(a87 * a61[aB].ho / a61[aB].a8M);
				a61[aB].zA.fillRect(Math.floor(i - a87 - tK), xu - a89, a8F, a89)
			}(aB, i, tK, a8F), 0 === a61[aB].id ? (a8J(aB, i, a8F, a07), function(aB, i, a8F) {
				a61[aB].zA.strokeStyle = a8F ? bB.oI : bB.oS, a61[aB].zA.fillRect(xu, 0, 1, xu);
				a8F = i - xu;
				a61[aB].zA.beginPath(), a61[aB].zA.moveTo(Math.floor(.3 * xu + a8F), Math.floor(xu / 2)), a61[aB].zA.lineTo(Math.floor(xu - .3 * xu + 0 + a8F), Math.floor(xu / 2)), a61[aB].zA.stroke(), a61[aB].zA.beginPath(), a61[aB].zA.moveTo(
					Math.floor(xu / 2 + a8F), Math.floor(.3 * xu)), a61[aB].zA.lineTo(Math.floor(xu / 2 + a8F), Math.floor(xu - .3 * xu + 0)), a61[aB].zA.stroke()
			}(aB, i, a8F)) : a8J(aB, 2 * xu, a8F, a07)
	}

	function a8J(aB, i, a8F, a07) {
		a61[aB].zA.strokeStyle = a61[aB].a8N ? bB.o9 : a8F ? bB.oY : bB.oZ, a61[aB].zA.fillStyle = a07, a61[aB].zA.fillRect(i - xu, 0, 1, xu), a61[aB].zA.lineWidth = Math.max(Math.floor(xu / 12), 3), a61[aB].zA.lineCap = "round";
		a8F = .35;
		i = xu + 1, a61[aB].zA.beginPath(), a61[aB].zA.moveTo(Math.floor(i - a8F * xu + 0), Math.floor(a8F * xu)), a61[aB].zA.lineTo(Math.floor(i - xu + a8F * xu), Math.floor(xu - a8F * xu + 0)), a61[aB].zA.stroke(), a61[aB].zA.beginPath(), a61[aB]
			.zA.moveTo(Math.floor(i - xu + a8F * xu), Math.floor(a8F * xu)), a61[aB].zA.lineTo(Math.floor(i - a8F * xu + 0), Math.floor(xu - a8F * xu + 0)), a61[aB].zA.stroke()
	}

	function a8Z(g, a8X) {
		for (var ho, aB = a8X - 1; 0 <= aB; aB--) ho = ad.gI(aD.ep, aB), g[aB].ho !== ho && (g[aB].ho = ho, g[aB].a8M = Math.max(ho, g[aB].a8M), g[aB].a8E = !0)
	}

	function a8d(g, a8b) {
		for (var tX = aD.ep << 3, a7a = bN.y.a7a, mH = bN.y.mH, a8f = bN.y.a8f, aB = a8b - 1; 0 <= aB; aB--) {
			var a8g = a8f[tX + aB],
				ho = a7a[a8g];
			g[aB].ho !== ho ? (g[aB].ho = ho, g[aB].a8M = Math.max(ho, g[aB].a8M), g[aB].a8E = !0) : g[aB].a8N || mH[a8g] % 64 != 5 || (g[aB].a8N = !0, g[aB].a8E = !0)
		}
	}

	function a8C(a64) {
		a64.canvas = document.createElement("canvas"), bS.xT.font = a88;
		var i = a87;
		a64.jZ < aD.f2 && 0 === a64.id && (i += Math.floor(bS.xT.measureText(ag.zU[a64.jZ] + "000").width)), i += xu, 0 === a64.id && (i += xu), a64.canvas.width = i, a64.canvas.height = xu, a64.zA = a64.canvas.getContext("2d", {
			alpha: !0
		}), a64.zA.font = a88, bA.qt.textBaseline(a64.zA, 1), bA.qt.textAlign(a64.zA, 1)
	}

	function a8T(aB) {
		return aU.a8h() ? h.i - a61[aB].canvas.width - bc.gap : aU.fC
	}

	function a8U(aB) {
		return Math.floor(2 * bc.gap + (aU.a8h() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xu))
	}
	this.dd = function() {
		a8A = a8B = 0, a61 = [], this.resize()
	}, this.resize = function() {
		a88 = aN.a6j, xu = aN.fontSize + 5, xu = Math.floor(1.25 * xu), a0.a1.iE() && (xu = Math.floor(1.25 * xu)), a89 = Math.floor(.15 * xu), bS.xT.font = a88, a87 = Math.floor(bS.xT.measureText("02 000 000 0000").width);
		for (var aB = a61.length - 1; 0 <= aB; aB--) a8C(a61[aB]), a8D(aB)
	}, this.ml = function() {
		for (var aB = a61.length - 1; 0 <= aB; aB--) a61[aB].a8E && (a61[aB].a8E = !1, a8D(aB))
	}, this.hI = function(lf, lg) {
		if (2 !== aD.a11 && 0 !== ag.mz[aD.ep] && !aD.hE && !bA.gR.jn(aD.ep))
			for (var a8O, a8P, a8Q, a8R = a0.a1.iE() ? xu : 0, a8S = a0.a1.iE() ? Math.floor(.15 * xu) : 0, aB = a61.length - 1; 0 <= aB; aB--)
				if (a8O = a8T(aB), a8P = a8U(aB), a8Q = a61[aB].canvas.width, a8P - a8S <= lg && lg <= a8P + xu + a8S) {
					if (a8O - a8R <= lf && lf <= a8O + xu + a8R) return a61[aB].a8N || (a61[aB].a8E = !0, a61[aB].a8N = !0, 0 === a61[aB].id ? b8.hV.pZ(a61[aB].jZ) : b8.hV.pY(a61[aB].jZ)), !0;
					if (0 === a61[aB].id && a8O + a8Q - xu - a8R <= lf && lf <= a8O + a8Q + a8R) return bV.a6S(3), b8.hV.hc(aR.hZ(), a61[aB].jZ), !0
				} return !1
	}, this.eY = function() {
		var a3f, a3g, g, a8X;
		0 === ag.mz[aD.ep] || bA.gR.jn(aD.ep) && !aD.hE || (a3f = a61.slice(0, a8A), a3g = a61.slice(a8A, a8A + a8B), g = a3f, a8X = ad.gC(aD.ep), function(g, a8X) {
			if (a8A !== a8X) return 1;
			for (var aB = a8X - 1; 0 <= aB; aB--)
				if (g[aB].jZ !== ad.gH(aD.ep, aB)) return 1;
			return
		}(g, a8X) ? a8Z(g = function(g, a8X) {
			var aB, jZ, fP, ho, a7A = [];
			loop: for (aB = 0; aB < a8X; aB++) {
				for (jZ = ad.gH(aD.ep, aB), fP = 0; fP < g.length; fP++)
					if (g[fP].jZ === jZ) {
						a7A.push(g.splice(fP, 1)[0]);
						continue loop
					} ho = ad.gI(aD.ep, aB), a8C(ho = {
					jZ: jZ,
					ho: ho,
					a8M: ho,
					id: 0,
					a8E: !0,
					a8N: !1,
					canvas: null,
					zA: null
				}), a7A.push(ho)
			}
			return a7A
		}(g, a8X), a8X) : a8Z(g, a8X), a3f = g, a3g = function(g) {
			var a8b = bN.y.kU[aD.ep];
			return function(g, a8b) {
				if (a8B !== a8b) return 1;
				for (var tX = aD.ep << 3, mJ = bN.y.mJ, a8f = bN.y.a8f, aB = a8b - 1; 0 <= aB; aB--) {
					var a8g = a8f[tX + aB];
					if (g[aB].jZ !== mJ[a8g]) return 1
				}
				return
			}(g, a8b) ? a8d(g = function(g, a8b) {
				var aB, jZ, fP, a7A = [],
					tX = aD.ep << 3,
					mJ = bN.y.mJ,
					a7a = bN.y.a7a,
					a8f = bN.y.a8f;
				loop: for (aB = 0; aB < a8b; aB++) {
					var a8g = a8f[tX + aB];
					for (jZ = mJ[a8g], fP = 0; fP < g.length; fP++)
						if (g[fP].jZ === jZ) {
							a7A.push(g.splice(fP, 1)[0]);
							continue loop
						} a8g = a7a[a8g], a8C(a8g = {
						jZ: jZ,
						ho: a8g,
						a8M: a8g,
						id: 1,
						a8E: !0,
						a8N: !1,
						canvas: null,
						zA: null
					}), a7A.push(a8g)
				}
				return a7A
			}(g, a8b), a8b) : a8d(g, a8b), g
		}(a3g), a8A = a3f.length, a8B = a3g.length, a61 = a3f.concat(a3g))
	}, this.vY = function() {
		if (0 !== ag.mz[aD.ep] && (!bA.gR.jn(aD.ep) || aD.hE))
			for (var aB = a61.length - 1; 0 <= aB; aB--) vZ.drawImage(a61[aB].canvas, a8T(aB), a8U(aB))
	}
}

function cH() {
	var a6w, kV, a8i, a8j, j, a6j, fontSize, a8k, a8l, a8m, a8n, canvas, zA, nC, a8o;

	function vp(aB) {
		return L(0 === aB ? 103 : 1 === aB ? 104 : 2 === aB ? 105 : 106)
	}

	function a8v() {
		aD.hz ? a8w + 4 * bc.gap + j + bh.a8x() > aR.fE ? vZ.drawImage(canvas, 2 * bc.gap + bh.a8x(), a8w + 2 * bc.gap) : vZ.drawImage(canvas, bc.gap, a8w + 3 * bc.gap + bh.a8x()) : vZ.drawImage(canvas, bc.gap, a8w + 2 * bc.gap)
	}

	function a8p() {
		canvas.width = a6w[0].width + a8m, canvas.height = j + a8m, (zA = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6w[0].width + a8m, j + a8m), zA.translate(Math.floor(a8m / 2), Math.floor(a8m / 2)), zA.lineWidth = a8m, zA.fillStyle = 1 === a6w[0].a8u ? bB.o5 : bB.nx, a8y(), zA.fill(), zA.strokeStyle = 1 === a6w[0].a8u ? bB.nr :
			bB.o0, a8y(), zA.stroke(), bA.qt.textAlign(zA, 1), bA.qt.textBaseline(zA, 1), zA.fillStyle = 1 === a6w[0].a8u ? bB.nr : bB.o0, zA.font = a6j[0], zA.fillText(vp(a6w[0].a8t), Math.floor(a6w[0].width / 2), Math.floor(.72 * a8k[0] * j)), zA
			.font = a6j[1], zA.fillText(a6w[0].qa, Math.floor(a6w[0].width / 2), Math.floor((a8k[0] + .48 * a8k[1]) * j))
	}

	function a8y() {
		zA.beginPath(), zA.moveTo(a8n, 0), zA.lineTo(a6w[0].width - a8n, 0), zA.lineTo(a6w[0].width, a8n), zA.lineTo(a6w[0].width, j - a8n), zA.lineTo(a6w[0].width - a8n, j), zA.lineTo(a8n, j), zA.lineTo(0, j - a8n), zA.lineTo(0, a8n), zA.closePath()
	}
	this.dd = function() {
		kV = 4, a8i = a8j = nC = 0, a6w = [], a6j = new Array(2), fontSize = new Array(2), (a8k = new Array(2))[0] = .3, a8k[1] = .7, a8l = new Array(4), canvas = document.createElement("canvas"), a8o = bf.eT + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iE() ? .062 : .047) * h.iF), fontSize[0] = Math.floor(.85 * a8k[0] * j), fontSize[1] = Math.floor(.85 * a8k[1] * j), a6j[0] = bA.qt.sk(1, fontSize[0]), a6j[1] = bA.qt.sk(1, fontSize[1]), aB = a8l.length -
			1; 0 <= aB; aB--) a8l[aB] = this.measureText(vp(aB) + "000", a6j[0]);
		if (a8m = Math.floor(1 + .05 * j), a8n = Math.floor(.2 * j), 0 < a6w.length) {
			for (aB = a6w.length - 1; 0 <= aB; aB--) i = this.measureText(a6w[aB].qa + "00", a6j[1]), a6w[aB].width = i < a8l[aB] ? a8l[aB] : i;
			a8p()
		}
	}, this.eY = function() {
		0 !== kV && (4 === kV ? bf.eT > a8o && (kV = 0, 1 === aD.a11) && aQ.a1O(bS.xN.xO[bS.el].name, 3, 1, 9) : (1 === kV ? (0 === a8i && (a8p(), a8i = 1e-4), 1 <= (a8i += .002 * (bf.eT - nC)) && (a8j = 0, kV = 2, a8i = 1), bf.dk = !0) : 2 ===
			kV ? ((a8j += (bf.eT - nC) / 1e3) > a6w[0].nH || 1 < a8j && 1 < a6w.length) && (kV = 3) : 3 === kV && ((a8i -= .002 * (bf.eT - nC)) <= 0 && (a8i = 0, a6w.shift(), kV = 0 < a6w.length ? 1 : 0), bf.dk = !0), nC = bf.eT))
	}, this.measureText = function(qa, a6j) {
		return vZ.font = a6j, Math.floor(vZ.measureText(qa).width)
	}, this.ec = function(a8s, aB) {
		this.a1O(ag.zU[a8s], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1O = function(qa, a8t, a8u, nH) {
		var i;
		qa.length && (i = (i = this.measureText(qa + "00", a6j[1])) < a8l[a8t] ? a8l[a8t] : i, a6w.push({
			qa: qa,
			width: i,
			a8t: a8t,
			a8u: a8u,
			nH: nH
		}), 0 === kV) && (a8i = 0, kV = 1, nC = bf.eT)
	}, this.vY = function() {
		0 !== kV && 0 !== a8i && (a8i < 1 ? (vZ.globalAlpha = a8i, a8v(), vZ.globalAlpha = 1) : a8v())
	}
}

function cq() {
	var j, canvas, zA, a8z, a90, a91, a92, a8E, a93, a94, a95, a96, a7g = !1,
		a3t = (this.hr = !1, this.i = 0, new Array(2)),
		a97 = 0;

	function mm() {
		var i = aw.i,
			lL = (a8E = !1, z9(zA, i, j), Math.floor(i / 2));
		1 === a8z ? (zA.fillStyle = bB.oK, zA.fillRect(lL, 0, lL, j)) : -1 === a8z && (zA.fillStyle = bB.oa, zA.fillRect(0, 0, lL, j)), zB(zA, i, j, 2);
		var lL = (lL = Math.floor(.25 * j)) < 2 ? 2 : lL,
			a7q = (zA.fillStyle = bB.o6, Math.floor((j - 4) * a90[1] / a91[1]));
		0 < a7q && zA.fillRect(2, j - 2 - a7q, lL, a7q), 0 < (a7q = Math.floor((j - 4) * a90[0] / a91[0])) && zA.fillRect(i - 2 - lL, j - 2 - a7q, lL, a7q);
		lL = (lL = Math.floor(j / 8)) < 2 ? 2 : lL, zD(zA, Math.floor(.4 * j), 0, j, lL, .5, !1), zD(zA, Math.floor(i - 1.4 * j), 0, j, lL, .5, !0), a7q = 1.1 * j / a3t[0].width;
		zA.imageSmoothingEnabled = !0, zA.setTransform(a7q, 0, 0, a7q, (i - a7q * a3t[0].width) / 2, -.05 * j), zA.drawImage(a3t[+a7g], 0, 0), zA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9C() {
		a96 = -1, a7g = ah.a9D(), aN.a5N(257), aN.a7f(a7g), aw.hr = !0, a8E = !0, a93 = 360;
		for (var fX, eU = 0, aB = al.kw - 1; 0 <= aB; aB--) bA.gR.jn(al.l1[aB]) || (eU += ag.gt[al.l1[aB]]);
		a7g ? a91[0] = Math.max(bL.fW(3 * eU, 4), 1) : aD.hz ? (fX = 9 === aD.ki && 8 === bg.kn[bh.kz()] ? 80 : (fX = bL.fW(100 * bh.kx(), aD.kA), bL.iD(200 - 2 * fX, 40, 100)), fX = bL.fW(fX * eU, 100), a91[0] = Math.max(fX, 1)) : 8 === aD.ki ? a91[
			0] = Math.max(bL.fW(3 * eU, 4), 1) : a91[0] = Math.max(bL.fW(3 * eU, 5), 1), a91[1] = Math.max(eU - a91[0], 1)
	}

	function a98() {
		a95 = bf.kN(), a8E = !0, a93 = a8z = 0, a92 = [], aw.hr = !1, aN.a19(247), a90[0] = a90[1] = 0, aN.a5N(673)
	}

	function z6() {
		return aR.a7L(aN.a7H()) ? __fx.settings.keybindButtons ? aR.fE - 2 * (j + bc.gap) : aR.fE - j - bc.gap : bC.a7L(aN.a7K()) ? bC.z6() - j - bc.gap : h.j - j - bk.a68() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3t[aB] = bA.canvas.zl(ab.get(3), 8 - aB, bB.pD), a3t[aB] = bA.canvas.a3v(a3t[aB])
	}, this.dd = function() {
		a95 = -1e4, a94 = a97 = 0, a96 = -1, this.hr = !1, a8E = a7g = !1, a90 = [a8z = a93 = 0, 0], a91 = [1, 1], a92 = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, zA = canvas.getContext("2d", {
			alpha: !0
		}), mm()
	}, this.ml = function() {
		a8E && mm()
	}, this.hI = function(fC, fE) {
		return !!this.hr && !(fC < h.i - this.i - bc.gap || fE < z6() || (aD.hE || this.hs(aD.ep) && (aM.hF && aM.a3A(), b8.hV.ht(fC > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eY = function() {
		0 < a94 ? 0 === --a94 && a98() : this.hr ? 180 == --a93 && 3 * a90[0] < a91[0] ? a98() : a90[0] >= a91[0] ? a7g ? bR.a0d.a0w() : bR.a0d.a10() : a90[1] >= a91[1] ? a94 = 4 : a93 <= 0 && a98() : ! function() {
			var a9F = bf.kN();
			if (a9F % 40 == 14) {
				if (a97) return !(a9F < a97) && !(a9F < a95 + 535) && (a97 = a9F + 1071, bA.gR.a4S()) ? (a9C(), 1) : 0;
				(1 === al.kw || (aD.hz ? bh.kx() : ag.gt[m1[0]]) >= bL.fW(96 * aD.kA, 100)) && (a97 = a9F + 535)
			}
			return
		}() && 0 <= a96 && (aN.zT(250, L(107, [ag.zU[a96]]), 673, a96, bB.o0, bB.nx, -1, !0), a9C())
	}, this.a12 = function() {
		this.hr && a90[0] < a91[0] && a98()
	}, this.qT = function(player, a9G) {
		var a9H = L(a9G ? 108 : 109, [ag.zU[player]]),
			a9H = (aN.zT(450, a9H, 257, player, a9G ? bB.oI : bB.oX, bB.nx, -1, !0), a92.push(player), a8E = !0, aD.kk ? Math.max(a91[0], a91[1]) : ag.gt[player]),
			a9H = Math.max(a9H, 1);
		a9G ? a90[0] += a9H : a90[1] += a9H, player === aD.ep && (a8z = a9G ? 1 : -1)
	}, this.vY = function() {
		var fE;
		this.hr && (fE = z6(), vZ.drawImage(canvas, h.i - this.i - bc.gap, fE))
	}, this.hu = function(player) {
		if (0 !== a93) return !1;
		if (!bA.gR.hG(1)) return !1;
		if (!bA.gR.hH(player)) return !1;
		if (10 <= kB[player] && !bA.gR.a4l(player, 9)) return !1;
		if (!aD.kk) {
			player = bf.kN();
			if (player < a95 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hs = function(gd) {
		if (!bA.gR.hG(1)) return !1;
		if (!bA.gR.hH(gd)) return !1;
		if (!this.hr) return !1;
		for (var aB = a92.length - 1; 0 <= aB; aB--)
			if (a92[aB] === gd) return !1;
		return !0
	}, this.hq = function(player) {
		a96 = player
	}
}

function cI() {
	var i, fC, a9J, canvas, zA, hr, ih, a5E, a6j, a8E, a9K = 11 / 12;

	function a9M() {
		var a8L = Math.floor(ih * (i - 2 * a9J)),
			a9P = 1 + Math.floor(.0625 * aR.j),
			a9Q = 1 + Math.floor(.3 * aR.j),
			a9R = Math.floor(.55 * aR.j);
		zA.clearRect(0, 0, i, aR.j), zA.fillStyle = bB.nw, zA.fillRect(0, 0, a9J, aR.j), zA.fillRect(a9J + a8L, 0, i - a9J - a8L, aR.j), zA.fillStyle = ih < 1 / 3 ? "rgba(" + Math.floor(3 * ih * 130) + ",130,0,0.85)" : ih < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ih - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ih - 2 / 3) * 130) + ",0.85)", zA.fillRect(a9J, 0, a8L, aR.j), zA.fillStyle = bB.o0, zA.fillRect(0, 0, i, 1), zA.fillRect(0, aR.j - 1, i, 1), zA
			.fillRect(0, 0, 1, aR.j), zA.fillRect(a9J, 0, 1, aR.j), zA.fillRect(a9J + a8L, 0, 1, aR.j), zA.fillRect(i - a9J, 0, 1, aR.j), zA.fillRect(i - 1, 0, 1, aR.j), zA.fillRect(Math.floor(.25 * aR.j) + a9Q, Math.floor((aR.j - a9P) / 2), aR.j -
				2 * a9Q, a9P), zA.fillRect(Math.floor(i - 1.25 * aR.j) + a9Q, Math.floor((aR.j - a9P) / 2), aR.j - 2 * a9Q - a9Q % 2, a9P), zA.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9P) / 2), a9Q, a9P, aR.j - 2 * a9Q - a9Q % 2),
			a5E = bA.gR.ig(aD.ep, aR.hZ()), zA.fillText(bA.rs.a0I(a5E) + " (" + bA.rs.a57(100 * ih, +(ih < .1)) + ")", Math.floor(.5 * i), a9R)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ih = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a36(arg1);

	function a9W(a3S) {
		return !(1 < a3S && 1 === ih || (1 < a3S && a3S * ih - ih < 1 / 1024 ? a3S = (ih + 1 / 1024) / ih : a3S < 1 && ih - a3S * ih < 1 / 1024 && (a3S = (ih - 1 / 1024) / ih), ih = bL.iD(ih * a3S, 1 / 1024, 1), a9M(), 0))
	}

	function a9X(lf) {
		return ih !== (ih = bL.iD((lf - fC - a9J) / (i - 2 * a9J), 1 / 1024, 1)) && (a9M(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9M(), bf.dk = !0
	}, this.fE = 0, this.hJ = !1, this.dd = function() {
		hr = !aD.hT && !aD.hE, a8E = !1, ih = .5, a5E = 0, this.hJ = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iE() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iF), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.iE() ? .65 : .389) * h.iF), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9J = Math.floor(3 * this.j / 2), a6j =
			bA.qt.sk(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vZ), canvas.height = this.j, (zA = canvas.getContext("2d", {
				alpha: !0
			})).font = a6j, bA.qt.textBaseline(zA, 1), bA.qt.textAlign(zA, 1), this.a9L(), a9M()
	}, this.a9L = function() {
		fC = a0.a1.iE() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fE = h.j - this.j - bk.a68() * bc.gap
	}, this.ml = function() {
		a8E && (a8E = !1, a9M())
	}, this.hr = function() {
		return !(!hr || aM.hF && fC < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a7L = function(a9S) {
		return !!this.hr() && fC + i > h.i - a9S - bc.gap
	}, this.a5L = function() {
		hr = !aD.hE
	}, this.a98 = function() {
		hr = !1
	}, this.hZ = function() {
		return bL.iD(Math.floor(1024 * ih + .5) - 1, 0, 1023)
	}, this.a33 = function(lf, lg) {
		return this.hr() && fC < lf && lf < fC + i && lg > this.fE
	}, this.hI = function(lf, lg) {
		if (!this.hr()) return !1;
		if (!(__fx.settings.keybindButtons && lg > this.fE - Math.floor(bc.gap / 4) - this.j && lg < this.fE - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lf - fC))) {
			if (!aR.a33(lf, lg)) return !1;
			aS.nV = !1, ! function(sV, lf, lg) {
				if (function(lf, lg) {
						return fC < lf && lf < fC + a9J && lg > aR.fE
					}(lf, lg)) return a9W(a9K);
				if (function(lf, lg) {
						return fC + i - a9J < lf && lf < fC + i && lg > aR.fE
					}(lf, lg)) return a9W(1 / a9K);
				return sV.hJ = !0, a9X(lf)
			}(this, lf, lg) || (bf.dk = !0)
		}
		return !0
	}, this.a36 = function(nc) {
		0 !== aD.a11 && this.hr() && a9W(nc) && (bf.dk = !0)
	}, this.a2c = function(deltaY) {
		var nc;
		return !(0 === deltaY || !this.hr()) && a9W(nc = 0 < deltaY ? (nc = 400 / (400 + deltaY)) < a9K ? a9K : nc : 1 / a9K < (nc = (400 - deltaY) / 400) ? 1 / a9K : nc)
	}, this.a2Z = function(lf) {
		return !!this.hJ && a9X(lf)
	}, this.a2z = function() {
		this.hJ = !1
	}, this.eY = function() {
		this.hr() && a5E !== bA.gR.ig(aD.ep, this.hZ()) && (a8E = !0)
	}, this.vY = function() {
		this.hr() && (vZ.drawImage(canvas, fC, this.fE), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vZ, fC, this.fE)
	}
}

function d0() {
	var canvas, zA, a9Y, font, a9Z = 0,
		a9a = !1,
		a9b = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9c = 5;

	function a9j() {
		if (a9a) {
			var aB, f5 = a9b.length,
				a9R = Math.floor(.5 * a9Y.j),
				j = f5 * a9R,
				fC = Math.floor(Math.floor(a9Y.fC) + .3 * a9Y.i - .5),
				fE = Math.floor(Math.floor(a9Y.fE) - j),
				i = Math.floor(.4 * a9Y.i + 2.5);
			for (vZ.fillStyle = bB.nw, vZ.fillRect(fC, fE, i, j), vZ.fillStyle = bB.oP, vZ.fillRect(fC, fE + a9c * a9R, i, a9R), vZ.fillStyle = bB.o0, vZ.fillRect(fC, fE, 2, j), vZ.fillRect(fC, fE, i, 2), vZ.fillRect(fC + i - 2, fE, 2, j), aB =
				1; aB < f5; aB++) vZ.fillRect(fC, fE + aB * a9R, i, 2);
			for (vZ.fillStyle = bB.o0, bA.qt.textAlign(vZ, 1), bA.qt.textBaseline(vZ, 1), vZ.font = bA.qt.sk(0, .6 * a9R), fC += .5 * i, aB = 0; aB < f5; aB++) vZ.fillText(a9r(aB), fC, fE + (aB + .6) * a9R)
		}
		vZ.drawImage(canvas, Math.floor(a9Y.fC), Math.floor(a9Y.fE))
	}

	function mm(sV) {
		var fC, nQ, nR, a9R;
		zA.clearRect(0, 0, Math.floor(a9Y.i), Math.floor(a9Y.j)), zA.fillStyle = bB.nw, zA.fillRect(0, 0, Math.floor(a9Y.i), Math.floor(a9Y.j)), aD.nT && (zA.fillStyle = bB.oP, zA.fillRect(0, 0, Math.floor(.3 * a9Y.i), Math.floor(a9Y.j))), zA
			.fillStyle = bB.o0, zA.fillText("Hide UI", .15 * a9Y.i, .5 * a9Y.j), zA.fillRect(Math.floor(.3 * a9Y.i - .5), 0, 2, Math.floor(a9Y.j)), fC = .5 * a9Y.i, zA.fillText("Replay Speed", fC, .31 * a9Y.j), zA.fillText(a9r(a9c), fC, .69 * a9Y.j),
			zA.fillRect(Math.floor(.7 * a9Y.i - .5), 0, 2, Math.floor(a9Y.j)), sV.a5s ? (fC = Math.floor(.02 * a9Y.i), sV = Math.floor(.025 * a9Y.i), nQ = Math.floor(.85 * a9Y.i - fC - .5 * sV), nR = Math.floor(.25 * a9Y.j), a9R = Math.floor(a9Y.j) -
				2 * nR, zA.fillRect(nQ, nR, fC, a9R), zA.fillRect(nQ + fC + sV, nR, fC, a9R)) : function() {
				var i = Math.floor(.46 * a9Y.j),
					j = Math.floor(.23 * a9Y.j),
					fC = Math.floor(.85 * a9Y.i - .5 * i + i / 12),
					fE = Math.floor(.5 * a9Y.j - j);
				zA.beginPath(), zA.moveTo(fC, fE), zA.lineTo(fC + i, fE + j), zA.lineTo(fC, fE + (j << 1)), zA.fill()
			}(), zA.fillRect(0, 0, Math.floor(a9Y.i), 2), zA.fillRect(0, 0, 2, Math.floor(a9Y.j)), zA.fillRect(0, Math.floor(a9Y.j) - 2, Math.floor(a9Y.i), 2), zA.fillRect(Math.floor(a9Y.i - 2), 0, 2, Math.floor(a9Y.j))
	}

	function a9r(aB) {
		return 5 === aB ? "Normal" : "" + a9b[aB]
	}
	this.a5s = !1, this.dd = function() {
		aD.hE && (a9c = 5, this.a5s = !1, a9a = !1, a9Y = new rU([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9d = function() {
		return a9b[a9c]
	}, this.z6 = function() {
		return a9Y.fE
	}, this.a7L = function(a9S) {
		return !!aD.hE && a9Y.fC + a9Y.i > h.i - a9S - bc.gap
	}, this.resize = function() {
		aD.hE && (a9Y.resize(), a9Y.fE -= (bk.a68() - 1) * bc.gap, font = bA.qt.sk(0, .3 * a9Y.j), (canvas = document.createElement("canvas")).width = Math.floor(a9Y.i), canvas.height = Math.floor(a9Y.j), (zA = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qt.textAlign(zA, 1), bA.qt.textBaseline(zA, 1), mm(this))
	}, this.a39 = function(a9e) {
		0 === aD.a11 || t.hr() || a9e !== aD.nT && (aD.nT = a9e, bh.resize(), bf.dk = !0, aD.hE) && (a9Z = bf.eT + 2e3, mm(this))
	}, this.hI = function(fC, fE) {
		if (!aD.hE) return !1;
		if (fC < a9Y.fC || fE < a9Y.fE || fC > a9Y.fC + a9Y.i) return a9a && function(sV, fC, fE) {
			var f5 = a9b.length,
				a9R = Math.floor(.5 * a9Y.j),
				j = f5 * a9R,
				nQ = Math.floor(Math.floor(a9Y.fC) + .3 * a9Y.i - .5),
				j = Math.floor(Math.floor(a9Y.fE) - j),
				i = Math.floor(.4 * a9Y.i + 2.5);
			return a9a = !1, bf.dk = !0, fC < nQ || nQ + i < fC || fE < j || (a9c = a9i(0, Math.floor((fE - j) / a9R), f5 - 1), mm(sV)), !0
		}(this, fC, fE);
		if ((fC -= a9Y.fC) < .3 * a9Y.i) a9a = !1, this.a39(!aD.nT);
		else {
			if (fC < .7 * a9Y.i) return a9a = !a9a, bf.dk = !0;
			this.a3B(!1)
		}
		return !0
	}, this.a3B = function(a9g) {
		2 === aD.a11 ? (this.a39(!1), t.u(3)) : (a9a = !1, this.a5s = !this.a5s, this.a5s ? (aM.hF && aM.a3A(), a0.a1.setState(1)) : a9g || aM.a6p(), bf.dk = !0, mm(this))
	}, this.a9h = function() {
		this.a5s = !1, aM.a6p(), bf.dk = !0, mm(this)
	}, this.a2s = function(fC, fE) {
		return !!aD.nT && (0 <= aM.hI(fC, fE) || (aD.hE ? ((bf.eT > a9Z || !this.hI(fC, fE)) && aS.hI(fC, fE), bf.dk = !0, a9Z = bf.eT + 2e3) : aS.hI(fC, fE)), !0)
	}, this.eY = function() {
		aD.hE && aD.nT && bf.eT > a9Z - 1e3 && bf.eT < a9Z && (bf.dk = !0)
	}, this.a1A = function() {
		aD.hE && (this.a5s = !1, bf.dk = !0, mm(this))
	}, this.vY = function() {
		if (aD.hE) {
			if (aD.nT) {
				if (bf.eT > a9Z) return;
				if (bf.eT > a9Z - 1e3) return vZ.globalAlpha = a9i(0, (1e3 - (bf.eT - (a9Z - 1e3))) / 1e3, 1), a9j(), void(vZ.globalAlpha = 1)
			}
			a9j()
		}
	}
}

function cJ() {
	var a9s, a9t, i, fC, fE, a9u, a9v;
	this.dd = function() {
		a9s = new Array(2), a9t = new Array(2), this.nV = !1, a9v = a9u = ij = ii = 0, iG = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iE() ? .072 : .0502) * h.iF)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9s[aB] = document.createElement("canvas"), a9s[aB].width = i, a9s[aB].height = i, a9t[aB] = a9s[aB].getContext("2d", {
			alpha: !0
		});
		this.a9L(),
			function() {
				for (var aAC = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9t[aB].clearRect(0, 0, i, i), a9t[aB].fillStyle = bB.nt, a9t[aB].beginPath(), a9t[aB].arc(i / 2, i / 2, i / 2 - aAC, 0, 2 * Math.PI), a9t[aB].fill(), a9t[aB]
					.lineWidth = aAC, a9t[aB].fillStyle = bB.o0, a9t[aB].strokeStyle = bB.o0, a9t[aB].beginPath(), a9t[aB].arc(i / 2, i / 2, i / 2 - aAC, 0, 2 * Math.PI), a9t[aB].stroke(), zD(a9t[aB], 0, 0, i, aAC, .3, 0 === aB)
			}()
	}, this.z5 = function() {
		return -ii / iG
	}, this.z6 = function() {
		return -ij / iG
	}, this.nf = function(a9z, iM) {
		ii = iG * a9z - iM
	}, this.ng = function(aA0, iN) {
		ij = iG * aA0 - iN
	}, this.hI = function(a9y, a7M) {
		return aD.nT || ! function(a9y, a7M) {
			return Math.pow(a9y - (fC + i / 2), 2) + Math.pow(a7M - (fE + i / 2), 2) < i * i / 4 || Math.pow(a9y - (fC + i / 2), 2) + Math.pow(a7M - (fE + 2 * i), 2) < i * i / 4
		}(a9y, a7M) || bj.eQ.data[8].value ? (aH.ni() && (this.nV = !0, a9u = a9y, a9v = a7M), !1) : a7M < fE + 1.25 * i ? this.a2c(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2c(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2Z = function(a9y, a7M) {
		var aA1, aA2, iP, iS;
		return !aH.ni() || (aA1 = ii, aA2 = ij, ii += iP = a9u - a9y, ij += iS = a9v - a7M, af.a2Z(iP, iS), this.aA3(), a9u = a9y, a9v = a7M, aA1 !== ii) || aA2 !== ij
	}, this.a2c = function(lf, lg, deltaY) {
		var nc;
		if (aH.ni()) {
			if (0 < deltaY) nc = (nc = 500 / (500 + deltaY)) < .5 ? .5 : nc;
			else {
				if (!(deltaY < 0)) return !1;
				nc = 2 < (nc = (500 - deltaY) / 500) ? 2 : nc
			}
			this.aA4(lf, lg, nc), bf.dk = !0
		}
		return !0
	}, this.aA4 = function(fC, fE, ej) {
		var a3S;
		ej = a3S = (a3S = 1024 < (a3S = ej) * iG ? 1024 / iG : a3S) * iG < .125 ? .125 / iG : a3S, af.zoom(ej, fC, fE),
			function(a3S, lf, lg) {
				iG *= a3S, ii = (ii + lf) * a3S - lf, ij = (ij + lg) * a3S - lg, aS.aA3()
			}(ej, fC, fE)
	}, this.aA3 = function() {
		var aA7 = h.i / 16,
			aA8 = 0,
			aA9 = h.j / 16,
			aAA = 0;
		ii < -h.i + aA7 && (aA8 = -h.i + aA7 - ii), ii > iG * bS.fG - aA7 && (aA8 = iG * bS.fG - aA7 - ii), ij < -h.j + aA9 && (aAA = -h.j + aA9 - ij), ij > iG * bS.fH - aA9 && (aAA = iG * bS.fH - aA9 - ij), ii += aA8, ij += aAA, ba.nh(), af.aAB(
			aA8, aAA)
	}, this.a9L = function() {
		fC = h.i - i - bc.gap, fE = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vY = function() {
		bj.eQ.data[8].value || (vZ.drawImage(a9s[0], fC, fE), vZ.drawImage(a9s[1], fC, Math.floor(fE + 3 * i / 2)))
	}
}

function cK() {
	var g, aAD, aAE, aAF, gap, aAG, aAH, aAI, aAJ, aAK, a6j, aAL, hA, aAM, a8L, aAN, aAO;

	function aAS() {
		aAF = Math.floor(.2 * (a0.a1.iE() ? .07 : .035) * h.iF), aAF = a7J(a0.a1.iE() ? 3 : 1, aAF);
		var aAV = h.i / (g.length + gap);
		aAF = aAF < aAV ? aAV : aAF, a8L = Math.floor((1 - gap) * aAF), aAD = 0, aAW()
	}

	function aAW() {
		aAD = (aAD = aAD < -20 ? -20 : aAD) > (g.length - 15) * aAF ? (g.length - 15) * aAF : aAD, aAH = Math.floor(aAD / aAF), aAI = (aAI = aAH + Math.floor(h.i / aAF)) > g.length - 1 ? g.length - 1 : aAI, aAH = (aAH = aAI < aAH ? aAI : aAH) < 0 ?
			0 : aAH;
		var lL = aAI;
		aAG = aAE / g[lL];
		for (var aB = aAI - 1; aAH <= aB; aB--) g[aB] > g[lL] && (lL = aB, aAG = aAE / Math.pow(g[aB], aAM))
	}

	function aAZ(fC) {
		fC = Math.floor((aAD + h.i - fC - gap * aAF) / aAF);
		return (fC = fC < -1 ? -1 : -1 === fC ? 0 : fC > g.length - 1 ? -1 : fC) !== aAJ && (aAJ = fC, -1 === aAN && 0 === aAJ && aT.aAP && (aAN = setInterval(aAa, 100)), 1)
	}

	function aAb(aB) {
		var aAd = Math.floor(aAG * Math.pow(g[aB], aAM));
		vZ.fillRect(aAD + h.i - (aB + 1) * aAF, h.j - aAd, a8L, aAd)
	}

	function aAa() {
		var gd;
		0 !== (aAJ = 8 === aa.a2D() ? -1 : aAJ) ? (aAO = (new Date).getTime(), clearInterval(aAN), aAN = -1) : (gd = g[1] / 864e3, -1 !== aAO && (gd += ((new Date).getTime() - aAO) * g[1] / 864e5, aAO = -1), 0 < gd && (g[0] += Math.floor(gd), bf
			.dk = !0))
	}
	this.aAP = !1, this.dd = function() {
		aAO = aAN = -1, aAJ = -(aAM = 1), this.aAQ = !1, hA = 0, aAL = new Date, aAD = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAE = Math.floor(.15 * h.j), aAK = (aAK = Math.floor((a0.a1.iE() ? .018 : .0137) * h.iF)) < 2 ? 2 : aAK, a6j = bA.qt.sk(1, aAK), aAS()
	}, this.aAT = function(aAU) {
		var aB;
		for (this.aAP = !0, aB = 0; aB < aAU.length; aB++) g.unshift(aAU[aB]);
		aAS(), bf.dk = !0
	}, this.aAX = function() {
		aAW()
	}, this.a2Z = function(fC, fE) {
		fE > h.j - .6 * aAE ? this.aAQ ? fC !== hA && (aAD += fC - hA, hA = fC, aAW(), aAZ(fC), this.aAQ = -1 !== aAJ, bf.dk = !0) : aAZ(fC) && (bf.dk = !0) : this.ru()
	}, this.ru = function() {
		-1 !== aAJ && (this.aAQ = !1, aAJ = -1, bf.dk = !0)
	}, this.a2c = function(fC, deltaY) {
		-1 !== aAJ && (aAD += Math.floor(deltaY), aAW(), aAZ(fC), bf.dk = !0)
	}, this.hI = function(fC, fE) {
		this.a2Z(fC, fE), -1 !== aAJ && (hA = fC, this.aAQ = !0)
	}, this.a2y = function() {
		-1 !== aAJ && (this.aAQ = !1)
	}, this.vY = function() {
		vZ.fillStyle = bB.o3;
		for (var aAe, month, eU, tL, aAh, aAi, nR, aAj, aAk, aB = aAI; aAH <= aB; aB--) aAb(aB);
		this.aAP && 0 === aAH && (vZ.fillStyle = bB.oa, aAb(0)), -1 !== aAJ && (vZ.fillStyle = bB.o2, aAb(aAJ)), -1 !== aAJ && (vZ.font = a6j, bA.qt.textBaseline(vZ, 2), (eU = new Date).setTime(aAL.getTime() - 1e3 * aAJ * 60 * 60 * 24), month =
			"month", aAe = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eU), aAe = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eU)), aAe = aAe + ", " + eU.getUTCDate() + " " + month + " " + eU.getFullYear(), month = 1 === g[aAJ] ? L(110) : L(111), month = bA.rs.a0I(g[aAJ]) + " " + month, eU = Math.floor(vZ.measureText(aAe).width), tL = Math
			.floor(vZ.measureText(month).width), aAh = Math.floor(.5 * (eU + aAK)), aAi = (aAi = aAD + h.i - (aAJ + 1) * aAF) < aAh ? aAh : aAi > h.i - aAh ? h.i - aAh : aAi, nR = h.j - Math.floor(aAG * Math.pow(g[aAJ], aAM)), aAj = Math
			.floor(1.1 * aAK), aAk = nR > h.j - aAj ? h.j - aAj : nR, vZ.fillStyle = bB.nx, vZ.fillRect(h.i - tL - aAK, aAk - aAj, tL + aAK, aAj), vZ.fillRect(aAi - aAh, h.j - aAj, eU + aAK, aAj), vZ.fillStyle = bB.o0, bA.qt.textAlign(vZ, 2),
			vZ.fillText(month, Math.floor(h.i - .5 * aAK), aAk), bA.qt.textAlign(vZ, 1), vZ.fillText(aAe, aAi, h.j), vZ.strokeStyle = bB.o4, vZ.lineWidth = 1, vZ.beginPath(), vZ.moveTo(0, nR), vZ.lineTo(h.i, nR), vZ.closePath(), vZ.stroke())
	}
}

function cL() {
	var a6j, i, fE, aAl, aAm, aAn, canvas, zA, a8E, a4Z, aAo, aAp, aAq, aAr;
	this.fC = 0, this.j = 0, this.dd = function() {
		aAn = aD.a5T, aAp = "rgba(0,100,0,0.8)", aAq = "rgba(150,0,0,0.8)", a8E = aAo = !0, a4Z = ag.h7[aD.ep], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iE() ? .305 : .24) * h.iF), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6j = bA.qt.sk(1, Math.floor(.8 * this.j)), aAm = bA.qt.sk(1, Math.floor(.45 * this.j)), aAr = Math.floor(.5 * this.j), bS.xT
			.font = a6j, fE = bc.gap, aAl = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, zA = canvas.getContext("2d", {
				alpha: !0
			}), bA.qt.textBaseline(zA, 1), bA.qt.textAlign(zA, 1), this.aAs()
	}, this.a8h = function() {
		return a0.a1.iE() && h.i < 1.2 * h.j
	}, this.a9L = function() {
		this.a8h() ? this.fC = h.i - i - bc.gap : this.fC = Math.floor(aV.aAt() + (h.i - aV.aAt() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.ml = function() {
		a8E && (a8E = !1, this.aAs())
	}, this.aAs = function() {
		zA.font = a6j, zA.clearRect(0, 0, i, this.j), zA.fillStyle = aAo ? aAp : aAq, zA.fillRect(0, 0, i, this.j), zA.fillStyle = bB.o2;
		var ed = this.aAu(),
			aAw = (this.aAv(), zA.fillStyle = ag.h7[aD.ep] >= ae.k6(aD.ep) ? bB.oX : bB.o0, bA.rs.a0I(a4Z)),
			aAw = (zA.fillText(aAw, Math.floor(i / 2), aAr), zA.measureText(aAw).width),
			ed = (zA.font = aAm, zA.fillStyle = 9 === ed ? bB.p7 : bB.o0, ae.aAy),
			aAz = "+" + ed,
			tL = zA.measureText(aAz).width,
			aB0 = Math.floor(this.j / 12),
			aAw = .5 * (i + aAw) + aB0;
		(aAw + tL + aAl <= i || 1e3 <= ed && (aAz = "+" + Math.floor(ed / 1e3) + "K", aAw + (tL = zA.measureText(aAz).width) + aAl <= i)) && zA.fillText(aAz, Math.floor(aAw + .5 * tL), Math.floor(.3 * this.j)), zA.fillStyle = bB.o0, zA.fillRect(
			0, 0, i, 1), zA.fillRect(0, 0, 1, this.j), zA.fillRect(0, this.j - 1, i, 1), zA.fillRect(i - 1, 0, 1, this.j)
	}, this.aAu = function() {
		var ed = bf.kN() % 100,
			y8 = (ed = 9 - bL.fW(ed -= ed % 10, 10), Math.floor(ed * (this.j - aAl) / 9));
		return zA.fillRect(0, y8, aAl, this.j - y8), zA.fillRect(i - aAl, y8, aAl, this.j - y8), ed
	}, this.aAv = function() {
		zA.fillRect(aAl, this.j - aAl, Math.floor((i - 2 * aAl) * ag.h7[aD.ep] / aAn), aAl)
	}, this.eY = function() {
		var gd = aD.ep;
		bA.gR.hH(gd) && (gd = ag.h7[gd] - ag.a4Y[gd], a4Z !== gd ? (aAn = a7J(gd, aAn), aAo = a4Z < gd && 10 <= gd, a4Z = gd, a8E = !0) : bf.kN() % 10 == 9 && (a8E = !0))
	}, this.vY = function() {
		0 === ag.mz[aD.ep] || aD.hT || 2 === ag.a4P[aD.ep] || vZ.drawImage(canvas, this.fC, fE)
	}
}

function cM() {
	var aB1, aB2, aB3, aB4, aB5, aB6, aB7, aB8, aB9, aBA, aBB, aBC, aBD, aBE, aBF, aBG, aBH, aBI, aBJ, aBK, aBL, aBM, position, aBN, aBO, aBP, aBQ, aBR, aBS = 1,
		aBT = 1,
		aBU = "";
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

	function aBW() {
		aB7.clearRect(0, 0, aB1, a8w),
			aB7.fillStyle = aBR ? bB.ov : bB.or,
			aB7.fillRect(0, 0, aB1, aBC),
			aB7.fillStyle = bB.nw,
			aB7.fillRect(0, aBC, aB1, a8w - aBC);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kB[aD.ep]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBM = -1;
		if (__fx.leaderboardFilter.enabled && aBM >= __fx.leaderboardFilter.filteredLeaderboard.length) aBM = -1;
		playerPos >= position && aBY(playerPos - position, bB.oP),
			0 !== kB[aD.ep] && 0 === position && aBY(0, bB.oy),
			-1 !== aBM && aBY(aBM, bB.o1),
			aB7.fillStyle = bB.nw,
			//console.log("drawing", aBM),
			aB7.clearRect(0, a8w - __fx.leaderboardFilter.tabBarOffset, aB1, __fx.leaderboardFilter.tabBarOffset);
		aB7.fillRect(0, a8w - __fx.leaderboardFilter.tabBarOffset, aB1, __fx.leaderboardFilter.tabBarOffset);
		aB7.fillStyle = bB.o0,
			aB7.fillRect(0, aBC, aB1, 1),
			aB7.fillRect(0, a8w - __fx.leaderboardFilter.tabBarOffset, aB1, 1),
			__fx.leaderboardFilter.drawTabs(aB7, aB1, a8w - __fx.leaderboardFilter.tabBarOffset, bB.oP),
			aB7.fillRect(0, 0, aB1, bc.zz),
			aB7.fillRect(0, 0, bc.zz, a8w),
			aB7.fillRect(aB1 - bc.zz, 0, bc.zz, a8w),
			aB7.fillRect(0, a8w - bc.zz, aB1, bc.zz), aB7.font = aB2, bA.qt.textBaseline(aB7, 1), bA.qt.textAlign(aB7, 1), aB7.fillText(aBU, Math.floor((aB1 + aBC - 22) / 2), Math.floor(aBA + aB3 / 2));
		__fx.playerList.drawButton(aB7, 12, 12, aBC - 22);
		var fO, ge = playerPos < position + aB5 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aB5)
				position = (result.length > aB5 ? result.length : aB5) - aB5;
			//if (position >= result.length) position = result.length - 1;
			for (aB7.font = aB4, bA.qt.textAlign(aB7, 0), fO = aB5 - ge; 0 <= fO; fO--) {
				const pos = result[fO + position];
				if (pos !== undefined)
					aBZ(m1[pos]), aBa(fO, pos, m1[pos]);
			}
			for (bA.qt.textAlign(aB7, 2), fO = aB5 - ge; 0 <= fO; fO--) {
				const pos = result[fO + position];
				if (pos !== undefined)
					aBZ(m1[pos]), aBb(fO, m1[pos]);
			}
		} else {
			for (aB7.font = aB4, bA.qt.textAlign(aB7, 0), fO = aB5 - ge; 0 <= fO; fO--)
				aBZ(m1[fO + position]), aBa(fO, fO + position, m1[fO + position]);
			for (bA.qt.textAlign(aB7, 2), fO = aB5 - ge; 0 <= fO; fO--)
				aBZ(m1[fO + position]), aBb(fO, m1[fO + position]);
		}
		2 == ge && (aBZ(aD.ep), bA.qt.textAlign(aB7, 0), aBa(aB5 - 1, kB[aD.ep], aD.ep), bA.qt.textAlign(aB7, 2), aBb(aB5 - 1, aD.ep)), 0 === position && (ge = .7 * aBD / ab.get(4).height, aB7.setTransform(ge, 0, 0, ge, Math.floor(aBE + .58 * aBD +
			.5 * ge * ab.get(4).width), Math.floor(aBA + aB3 + .4 * aBD)), aB7.imageSmoothingEnabled = !0, aB7.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aB7.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBZ(player) {
		aD.hz && (aB7.fillStyle = bg.aBd[bg.aBe[player]])
	}

	function aBY(aB, aBf) {
		aB7.fillStyle = aBf, aB = aB5 - 1 < aB ? aB5 - 1 : aB;
		aBf = Math.floor((aB === aB5 - 1 ? 2 : 0 === aB ? 1.15 : 1) * aBD), aBf = aB === aB5 - 2 ? Math.floor(aBC + 9.15 * aBD) - Math.floor(aBC + 8.15 * aBD) : aBf;
		aB7.fillRect(0, Math.floor(aBC + (aB + (0 === aB ? 0 : .15)) * aBD), aB1, aBf)
	}

	function aBa(wd, a4n, aB) {
		aB7.fillText(aBI[a4n], aBE, Math.floor(aBA + aB3 + (wd + .5) * aBD)), 1 === ag.a4P[aB] && (aB7.font = "italic " + aB4);
		a4n = Math.floor(aBA + aB3 + (wd + .5) * aBD);
		aB7.fillText(ag.zU[aB], aBF, a4n), 0 !== ag.a4P[aB] && (aB7.font = aB4), aB < aD.kQ && 2 !== ag.a4P[aB] || aB7.fillRect(aBF, a4n + .35 * aBS, aBH[aB], Math.max(1, .1 * aBS))
	}

	function aBb(wd, aB) {
		aB7.fillText(ag.gt[aB], aBG, Math.floor(aBA + aB3 + (wd + .5) * aBD))
	}
	this.dd = function() {
		var aB;
		for (t.y.t5[0] = 0, aBQ = aBP = aBN = 0, aBR = aBO = !1, aBM = -1, aB5 = a0.a1.iE() ? 6 : 10, aBT = (position = 0) === (aBT = bj.eQ.data[11].value) ? 10 : 1 === aBT ? 5 : 1, aBL = !1, aBJ = new Uint16Array(aB5 + 1), aBK = new Uint32Array(
				aB5 + 1), aB9 = aD.f2, m1 = new Uint16Array(aB9), kB = new Uint16Array(aB9), aB = aB9 - 1; 0 <= aB; aB--) m1[aB] = aB, kB[aB] = aB;
		this.resize(!0), aBH = new Uint16Array(aD.f2);
		var aBV = Math.floor(aB1 - aBF - aBE - aB8);
		for (aBI = new Array(aD.f2), aB7.font = aB4, aB = aD.f2 - 1; 0 <= aB; aB--) aBI[aB] = aB + 1 + ".", ag.zU[aB] = bA.zA.a47(ag.a1h[aB], aB4, aBV), aBH[aB] = Math.floor(aB7.measureText(ag.zU[aB]).width);
		aBW()
	}, this.resize = function(dd) {
		if (a8w = a0.a1.iE() ? (aB1 = Math.floor(.335 * h.iF), Math.floor(aB5 * aB1 / 8)) : (aB1 = Math.floor(.27 * h.iF), Math.floor(aB5 * aB1 / 10)), aB1 = Math.floor(.97 * aB1), (aB6 = document.createElement("canvas")).width = aB1, aB6
			.height = a8w, aB7 = aB6.getContext("2d", {
				alpha: !0
			}), aBA = .025 * aB1, aB3 = .16 * aB1, aBB = 0 * aB1, aBC = Math.floor(.45 * aBA + aB3), aBD = (a8w - aB3 - 2 * aBA - aBB) / aB5,
			aB6.height = a8w += aBD, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBD * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8w - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aB1,
			aB2 = bA.qt.sk(1, Math.floor(.55 * aB3)), aBS = Math.floor((a0.a1.iE() ? .67 : .72) * aBD), aB4 = bA.qt.sk(0, aBS), aB7.font = aB4, aBE = Math.floor(.04 * aB1), aBF = Math.floor((a0.a1.iE() ? .195 : .18) * aB1), aB8 = Math.floor(aB7
				.measureText("00920600").width), aB7.font = aB2, aBG = aB1 - aBE, !dd) {
			aB7.font = aB4;
			for (var aB = aD.f2 - 1; 0 <= aB; aB--) aBH[aB] = Math.floor(aB7.measureText(ag.zU[aB]).width);
			aBW()
		}
		aBU = bA.zA.a47(L(112), aB2, .96 * aB1)
	}, this.aAt = function() {
		return aB1
	}, this.ml = function(bu, aBX) {
		(aBX || aBL && (bu || bf.kN() % aBT == 0)) && (aBL = !1, aBW())
	}, this.eY = function() {
		! function() {
			for (var fO = aB9 - 1; 0 <= fO; fO--) 0 === ag.mz[m1[fO]] && ! function(fO) {
				var aBn = m1[fO];
				aB9--;
				for (var aB = fO; aB < aB9; aB++) m1[aB] = m1[aB + 1], kB[m1[aB]] = aB;
				m1[aB9] = aBn, kB[m1[aB9]] = aB9
			}(fO)
		}();
		for (var aBl, ni = aB9 - 1, fO = 0; fO < ni; fO++) ag.gt[m1[fO]] < ag.gt[m1[fO + 1]] && (aBl = m1[fO], m1[fO] = m1[fO + 1], m1[fO + 1] = aBl, kB[m1[fO]] = fO, kB[m1[fO + 1]] = fO + 1);
		! function() {
			for (var eU = aBL, ge = (aBL = !0, kB[aD.ep] >= aB5 - 1 ? aB5 - 2 : aB5 - 1), aB = ge; 0 <= aB; aB--)
				if (aBJ[aB] !== m1[aB] || aBK[aB] !== ag.gt[m1[aB]]) return;
			(ge != aB5 - 2 || aBJ[aB5] === kB[aD.ep] && aBK[aB5] === ag.gt[aD.ep]) && (aBL = eU)
		}();
		for (var aB = aB5 - 1; 0 <= aB; aB--) aBJ[aB] = m1[aB], aBK[aB] = ag.gt[m1[aB]];
		aBJ[aB5] = kB[aD.ep], aBK[aB5] = ag.gt[aD.ep];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hI = function(fC, fE) {
		if (zy(fC, fE)) {
			if (__fx.utils.isPointInRectangle(fC, fE, bc.gap + 12, bc.gap + 12, aBC - 22, aBC - 22)) __fx.playerList.display(ag.a1h);
			else {
				if (fE - bc.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fC - bc.gap);
				fC = aBp(fE);
				0 <= fC ? (aBN = bf.eT, aBO = !0, aBP = aBQ = fC, bJ.a3C() && (fC = a9i(-1, aBQ, aB5), aBM !== (fC = fC === aB5 ? -1 : fC)) && (aBM = fC, aBW(), bf.dk = !0)) : (aBR && (aBR = !1, aBW(), bf.dk = !0), t.u(10, 0, new aBq({
					aBr: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBW(), bf.dk = !0
	};

	function aBp(fE) {
		return (fE -= bc.gap + aBC) < 0 ? Math.floor(fE / aBD) - 1 : fE < (aB5 - 1) * aBD ? Math.floor(fE / aBD) : fE < a8w - aBC ? aB5 - 1 : (fE -= a8w - aBC, aB5 + Math.floor(fE / aBD))
	}

	function zy(fC, fE) {
		return fC >= bc.gap && fC < bc.gap + aB1 && fE >= bc.gap && fE < bc.gap + a8w
	}
	this.a2Z = function(fC, fE) {
		var eU, aBo;
		if (__fx.utils.isPointInRectangle(fC, fE, bc.gap + 12, bc.gap + 12, aBC - 22, aBC - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fC, fE, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fC - bc.gap)) return aBo = aBp(fE), fC = zy(fC, fE), fE = !(!(aBo < 0 && fC) || bJ.a3C()), aBO ? (eU = position, (position = a9i(0, position += aBP - aBo, aD.f2 - aB5)) !== eU ? (aBR = fE,
			aBo = a9i(-1, aBP = aBo, aB5), aBM = aBo = aBo !== aB5 && fC ? aBo : -1, aBW(), bf.dk = !0) : aBR !== fE && (aBR = fE, aBW(), bf.dk = !0), !0) : (aBo = (aBo = a9i(-1, aBo, aB5)) === aB5 || !fC || bJ.a3C() ? -1 : aBo, (aBM !==
			aBo || aBR !== fE) && (aBM = aBo, aBR = fE, aBW(), bf.dk = !0))
	}, this.a2y = function(fC, fE) {
		if (!aBO) return !1;
		aBO = !1;
		var aBo = aBp(fE);
		var isEmptySpace = false;
		return bJ.a3C() && -1 !== aBM && (aBM = -1, aBW(), bf.dk = !0), bf.eT - aBN < 350 && aBQ === aBo && -1 !== (aBo = (aBo = a9i(-1, aBo, aB5)) !== aB5 && zy(fC, fE) ? aBo : -1) && (fC = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m1[__fx.leaderboardFilter.filteredLeaderboard[aBo + position] ?? (isEmptySpace = true, kB[aD.ep])]) : m1[aBo + position]), aBo === aB5 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kB[aD.ep]) >=
			position + aB5 - 1 && (fC = aD.ep), !isEmptySpace && aD.hz && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fC, ag.a1h, aD.kk), 0 !== ag.mz[fC] && !isEmptySpace) && aH.nL(fC, 800, !1, 0), !0
	}, this.a2c = function(fC, fE, deltaY) {
		var aBu;
		return !(aBO || aD.nT || (aBu = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zy(fC, fE)) || (fC = (fC = a9i(-1, aBp(fE), aB5)) === aB5 || bJ.a3C() ? -1 : fC, 0 < deltaY ? position < aD.f2 - aB5 && (position += Math.min(aD.f2 - aB5 -
			position, aBu), aBM = fC, aBW(), bf.dk = !0) : 0 < position && (position -= Math.min(position, aBu), aBM = fC, aBW(), bf.dk = !0), 0))
	}, this.vY = function() {
		vZ.drawImage(aB6, bc.gap, bc.gap)
	}
}

function cN() {
	var canvas, zA, fC, fE, aAd, aBv, gap, aBw, fontSize, aBx, aBy, aBz, aC0, aC1, aC2, aC3, aC4, aC5;

	function aC9() {
		zA.clearRect(0, 0, aW.i, aW.j), zA.fillStyle = bB.nx, zA.fillRect(0, 0, aW.i, aW.j), zA.fillStyle = bB.oK, ej = 0 < aC3 ? aC3 : aC0[4] / 1e4, zA.fillRect(0, aW.j - aAd - 1, Math.floor(ej * aW.i), aAd), zA.fillStyle = bB.o0, zA.fillRect(0, 0,
			aW.i, 1), zA.fillRect(0, 0, 1, aW.j), zA.fillRect(aW.i - 1, 0, 1, aW.j), zA.fillRect(0, aW.j - 1, aW.i, 1), zA.fillRect(0, aW.j - aAd - 1, aW.i, 1);
		for (var ej, aCB, eU = 0, aB = 0; aB < aBz.length; aB++) aC1[aB] ? (bA.qt.textAlign(zA, 0), aCB = Math.floor((aBv - aAd + 2 * aBw) * (aB - eU + 1) / (aBz.length + 1) - .7 * aBw), zA.fillText(aBz[aB], gap, aCB), bA.qt.textAlign(zA, 2), 5 ===
			aB && 0 !== ag.mz[aD.ep] && ag.h7[aD.ep] >= ae.k6(aD.ep) ? (zA.fillStyle = bB.ow, zA.fillText(aC7(aB), aW.i - gap, aCB), zA.fillStyle = bB.o0) : zA.fillText(aC7(aB), aW.i - gap, aCB)) : eU++
	}

	function aC7(aB) {
		return aB < 3 ? aC0[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rs.a57(aC0[aB] / 100, 2) : aB < 7 ? bA.rs.a0I(aC0[aB]) : aB === 7 ? aW.aCC(aC0[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gt, aD.ep) : __fx.utils.getDensity(aD.ep)
	}

	function aC6() {
		ag.gt[aD.ep] !== aC0[6] && (aC0[6] = ag.gt[aD.ep], aBx++)
	}
	this.dd = function() {
		aC3 = aC4 = 0, (aBy = new Array(8))[0] = L(113), aBy[1] = aD.kk ? L(114) : L(115), aBy[2] = L(116), aBy[3] = L(117), aBy[4] = L(118), aBy[5] = L(119, 0, "Interest"), aBy[6] = L(120), aBy[7] = L(121),
			aBy.push("Max Troops", "Density"), // add aBy
			(aBz = new Array(aBy.length)).fill(""), (aC0 = new Array(aBy.length))[0] = aD.kk ? 0 : aD.kQ, aC0[1] = aD.kk ? al.kw : aD.km, aC0[2] = aD.a13, aC0[3] = 0, aC0[4] = bL.fW(1e4 * ag.gt[0], Math.max(aD.kA, 1)), aC0[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.fW(700 * aD.data.iIncomeValue, 64) : bL.fW(700 * aD.data.iIncomeData[aD.ep], 64), aC0[6] = 0, aC6(), aC0[7] = 0, aC2 = aC7(6), (aC1 = new Array(aBy.length)).fill(!0), aC5 = 0, aC5 =
			aD.kk ? (aC1[0] = !1, aC1[2] = !1, aC1[3] = !1, 3) : (aC1[3] = !1, 1), aBx = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iE() ? .1646 : .126) * 1.25 * h.iF), this.j = Math.floor(1.18 * this.i), aAd = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBw = .04 * this.i, aBv = this.j, this.j -= Math.floor(aC5 * (this.j -
			2 * aAd) / aBy.length), fontSize = Math.floor(.7 * (aBv - aAd) / aBy.length);
		var a6j = bA.qt.sk(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6j, i) {
				for (var aB = 0; aB < aBz.length; aB++) aBz[aB] = bA.zA.a47(aBy[aB], a6j, i)
			}((zA = canvas.getContext("2d", {
				alpha: !0
			})).font = a6j, .575 * this.i), bA.qt.textBaseline(zA, 1), zA.lineWidth = 1, this.a5M(), this.a9L(), aU.a9L(), aC9()
	}, this.a9L = function() {
		fC = h.i - this.i - bc.gap
	}, this.aCA = function() {
		fE = bc.gap
	}, this.a5M = function() {
		fE = bc.gap + (aU.a8h() && 0 !== ag.mz[aD.ep] && !aD.hT ? aU.j + bc.gap : 0)
	}, this.ml = function(bu) {
		(bu || 100 <= aBx) && (aBx = 0, aC9())
	}, this.a65 = function() {
		return aC0[7]
	}, this.aCC = function(value) {
		var lL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lL) / 1e3);
		return value < 10 ? lL + ":0" + value : lL + ":" + value
	}, this.eY = function() {
		var aCN, per;
		aC1[0] && aD.a14 - aD.a13 !== aC0[0] && (aC0[0] = aD.a14 - aD.a13, aBx++), al.kw - aC0[0] !== aC0[1] && (aC0[1] = al.kw - aC0[0], aBx++), this.md(), (aCN = ae.aCO(aD.ep)) !== aC0[5] && (aC0[5] = aCN, aBx++), aC6(), aC0[7] += bf.aCP, aCN =
			aC7(7), aC2 !== aCN && (aC2 = aCN, aBx += 100), aCN = aD.hz ? bh.kx() : ag.gt[m1[0]], per = bL.fW(1e4 * aCN, Math.max(aD.kA, 1)), aC0[3] = aCN, aC0[4] !== per && (aBx++, aC0[4] = per), 8 === aD.ki && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gR.hH(aB)) return bR.a0d.a10(), 1;
				return
			}() || aC0[3] < aD.kA || ! function() {
				for (var aB = al.kw - 1; 0 <= aB; aB--)
					if (0 < ag.gX[al.l1[aB]].length) return;
				return 1
			}() || bN.lF.aCM().length || aD.hz && bh.kx(1) < aD.kA || bR.a0d.a10()
	}, this.md = function() {
		aC1[2] && aD.a13 !== aC0[2] && (aC0[2] = aD.a13, aBx += 2 === aD.a11 ? 100 : 1)
	}, this.aCJ = function() {
		return aC0[3] === aD.kA
	}, this.aCQ = function(aB) {
		var tb, aCR, eU;
		return 2 !== aD.a11 && (aB % 2 == 1 && (aV.ml(1, 1), bf.dk = !0), aB === aD.a5V ? (aC3 = 0, aC9(), !1) : (-1 !== aB || 0 !== aC4) && (aCR = aC3, aC3 = aD.hE ? aB / aD.a5V : (eU = performance.now(), 0 <= aB && (tb = eU - 392 * aB, aC4 =
			0 === aB || tb < aC4 ? tb : aC4), 1 < (aC3 = (eU - aC4) / (392 * aD.a5V)) ? 1 : aC3), aC9(), aC3 !== aCR))
	}, this.vY = function() {
		vZ.drawImage(canvas, fC, fE)
	}
}

function cO() {
	var hr, aCS, i, j, a9R, aCT, aCU, a8i, canvas, nC, aCV;

	function z6() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aCV = hr = !1, a9R = .61, aCT = .07, aCU = .09, nC = a8i = j = 0
	}, this.resize = function() {
		var zA, nQ, ed, aCa, aCb, a6o;
		hr && (i = aCW(i = a0.a1.iE() ? Math.floor(.69 * h.iF) : Math.floor(.5 * h.iF), a7J(h.i - 2 * bc.gap, 10)), i = aCW(i, Math.floor(3.57 * a7J(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, zA = canvas.getContext("2d", {
				alpha: !0
			}), nQ = Math.floor(1 + j / 40), zA.clearRect(0, 0, i, j), zA.fillStyle = bB.nx, zA.fillRect(nQ, nQ, i - 2 * nQ, j - 2 * nQ), zA.lineJoin = "bevel", zA.lineWidth = 2 * nQ, zA.strokeStyle = bB.o0, zA.strokeRect(nQ, nQ, i - 2 * nQ,
				j - 2 * nQ), zA.imageSmoothingEnabled = !1, ed = ab.get(aCS), aCa = ed.width, a6o = (1 === aCS ? .85 : 21 === aCS ? .666 : .9) * a9R * j / (aCb = ed.height), zA.setTransform(a6o, 0, 0, a6o, Math.floor((i - a6o * aCa) / 2),
				Math.floor((j - a6o * aCb) / 2)), zA.drawImage(ed, 0, 0), zA.setTransform(1, 0, 0, 1, Math.floor(i - aCU * j - aCT * j - nQ), Math.floor(nQ + aCT * j)),
			function(zA, f5) {
				zA.lineWidth = Math.floor(1 + j / 80), zA.strokeStyle = bB.o0, zA.beginPath(), zA.moveTo(0, 0), zA.lineTo(f5, f5), zA.moveTo(0, f5), zA.lineTo(f5, 0), zA.stroke()
			}(zA, Math.floor(aCU * j)), zA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fX, aCY, a9D, aCZ) {
		hr || aCZ && aCV || (aCS = a9D ? 21 : fX ? 1 : 2, hr = aCV = !0, this.resize(), aL.sA(), aR.a98(), nC = bf.eT, a8i = aCY ? 1 : 0)
	}, this.eY = function() {
		!hr || 1 <= a8i || (a8i = 1 < (a8i += 5e-4 * (bf.eT - nC)) ? 1 : a8i, nC = bf.eT, bf.dk = !0)
	}, this.hI = function(fC, fE) {
		return !(!hr || a8i <= 0 || (fC -= Math.floor((h.i - i) / 2), fE -= z6(), fC < 0) || fE < 0 || i < fC || j < fE || (i - j / 3 < fC && fE < j / 3 && (hr = !1, bf.dk = !0), 0))
	}, this.vY = function() {
		!hr || a8i <= 0 || (vZ.globalAlpha = a8i, vZ.drawImage(canvas, Math.floor((h.i - i) / 2), z6()), vZ.globalAlpha = 1)
	}
}

function dN() {
	var aCd, aCe = new Uint8Array(5),
		aCf = new Uint8Array(5);
	this.aCg = new aCh, this.dd = function() {
		for (var fX = bj.eQ.data[119].value, aB = 0; aB < aCe.length; aB++) aCe[aB] = (fX >> 2 * aB) % 4
	}, this.a5h = function() {
		aCd = [L(122), "", L(123, [bX.aCi[28]]), L(124, [bX.aCi[26]]), L(125, [bX.aCi[0]])], this.aCg.dd()
	}, this.eY = function() {
		this.aCg.eY()
	}, this.a6S = function(id) {
		1 < id && bJ.rL() || ! function(eC) {
			if (3 === aCe[eC] || 1 === aCf[eC]) return;
			if (aCf[eC] = 1, !(Math.random() < .6)) {
				aCe[eC]++;
				for (var fX = 0, aB = 0; aB < aCe.length; aB++) fX += aCe[aB] << 2 * aB;
				bj.sL.sM(119, fX)
			}
			return 1
		}(id) || aN.a7O(aCd[id])
	}
}

function aCh() {
	var aCk;
	this.dd = function() {
		aCk = !1
	}, this.eY = function() {
		var gd;
		if (function() {
				if (!aCk) {
					if (bf.kN() % 30 != 9) return;
					if (!bA.gR.lx(90)) return;
					aCk = !0
				}
				return 1
			}() && (! function() {
				var ql = aN.a7k(956);
				if (ql) {
					if (bA.gR.lO(ql.player)) return 1;
					aN.a7j(956, 0)
				}
				return
			}() && (-1 === (gd = (aD.hz ? function() {
				var id = bh.kz(),
					f5 = al.kw;
				if (bg.kn[id])
					for (var a0p = al.l1, f3 = bg.f3, aB = 0; aB < f5; aB++) {
						var gd = a0p[aB];
						if (f3[gd] !== id) return gd
					} else if (1 < f5) return m1[f5 - 1];
				return -1
			} : function() {
				for (var aCs = al.kw, lK = al.l1, aCt = kB, aB = 0; aB < aCs; aB++) {
					var gd = lK[aB];
					if (0 !== aCt[gd]) return gd
				}
				return -1
			})()) ? ! function() {
				var ql = aN.a7k(957);
				if (ql && ql.a7F) {
					if (ac.ew(ql.a7F.er << 2)) return 1;
					aN.a7j(957, 0)
				}
				return
			}() : (aN.zT(0, L(126, [ag.zU[gd]]), 956, gd, bB.o0, bB.nx, -1, !0), 0)))) {
			var f5 = ao.j4.la;
			if (0 !== f5)
				for (var eQ = ao.j4.eQ, aB = 0; aB < f5; aB++) {
					var er = eQ[aB];
					if (ac.ew(er << 2)) return void aN.zT(0, L(127, [bM.fD(er), bM.fF(er)]), 957, 0, bB.o0, bB.nx, -1, !0, void 0, {
						fO: 1,
						er: er
					})
				}
		}
	}
}

function dO() {
	this.aCu = new aCv, this.dd = function() {
		this.aCu.resize()
	}
}

function aCv() {
	this.resize = function() {
		var aB, aCw = document.head.querySelector("style#ss");
		if (aCw)
			for (aB = aCw.sheet.cssRules.length - 1; 0 <= aB; aB--) aCw.sheet.deleteRule(0);
		else(aCw = document.createElement("style")).id = "ss", document.head.appendChild(aCw);
		var a9Z = "::-webkit-scrollbar",
			dx = bA.qt.r2(bc.sm),
			i1 = bA.qt.r2(Math.max(bA.qt.sC(.012), 8));
		try {
			aCw.sheet.insertRule(a9Z + "{width:" + i1 + ";height:" + i1 + ";}", aCw.sheet.cssRules.length), aCw.sheet.insertRule(a9Z + "-thumb{background-color:white;}", aCw.sheet.cssRules.length), aCw.sheet.insertRule(a9Z +
				"-track{background:" + bB.nw + ";}", aCw.sheet.cssRules.length), aCw.sheet.insertRule(a9Z + "-track:horizontal{border-top:" + dx + " solid white;}", aCw.sheet.cssRules.length), aCw.sheet.insertRule(a9Z +
				"-track:vertical{border-left:" + dx + " solid white;}", aCw.sheet.cssRules.length), aCw.sheet.insertRule(a9Z + "-button{display:none;}", aCw.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCw.sheet.cssRules.length - 1; 0 <= aB; aB--) aCw.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCx = !1, this.nq = !1, this.a5Q = !1, this.aCy = [0, 0, 0, 0], this.aCz = function() {
		var nQ, nR, nd, ne;
		this.a5Q = this.a5Q || this.nq, (this.nq || this.aCx && this.a5Q) && (nQ = ba.aD0[0], nR = ba.aD0[1], nd = ba.aD0[2], ne = ba.aD0[3], nQ = nQ < this.aCy[0] ? this.aCy[0] : nQ, nR = nR < this.aCy[1] ? this.aCy[1] : nR, nd = nd > this.aCy[
				2] ? this.aCy[2] : nd, ne = ne > this.aCy[3] ? this.aCy[3] : ne, this.nq = !1, this.aCx = !1, nQ === this.aCy[0] && nR === this.aCy[1] && nd === this.aCy[2] && ne === this.aCy[3] ? this.a5R() : nQ <= nd && nR <= ne && a5j
			.putImageData(a5k, 0, 0, nQ, nR, nd - nQ + 1, ne - nR + 1))
	}, this.a5R = function() {
		this.a5Q && this.aCy[2] >= this.aCy[0] && this.aCy[3] >= this.aCy[1] && a5j.putImageData(a5k, 0, 0, this.aCy[0], this.aCy[1], this.aCy[2] - this.aCy[0] + 1, this.aCy[3] - this.aCy[1] + 1), this.a5Q = !1
	}, this.a1D = function() {
		this.aCy[2] >= this.aCy[0] && this.aCy[3] >= this.aCy[1] && a5j.putImageData(a5k, 0, 0, this.aCy[0], this.aCy[1], this.aCy[2] - this.aCy[0] + 1, this.aCy[3] - this.aCy[1] + 1), this.a5Q = !1
	}, this.dd = function() {
		var fC, fE;
		this.aCx = !1, this.nq = !1, this.a5Q = !1, this.aCy[0] = bS.fG, this.aCy[1] = bS.fH, this.aCy[2] = this.aCy[3] = 0;
		loop: for (fC = 1; fC < bS.fG - 1; fC++)
			for (fE = bS.fH - 2; 1 < fE; fE--)
				if (1 === aD1[ac.yd(fC, fE) + 2]) {
					this.aCy[0] = fC;
					break loop
				} loop: for (fE = 1; fE < bS.fH - 1; fE++)
			for (fC = bS.fG - 2; 1 < fC; fC--)
				if (1 === aD1[ac.yd(fC, fE) + 2]) {
					this.aCy[1] = fE;
					break loop
				} loop: for (fC = bS.fG - 2; 0 < fC; fC--)
			for (fE = bS.fH - 2; 1 < fE; fE--)
				if (1 === aD1[ac.yd(fC, fE) + 2]) {
					this.aCy[2] = fC;
					break loop
				} loop: for (fE = bS.fH - 2; 0 < fE; fE--)
			for (fC = bS.fG - 2; 1 < fC; fC--)
				if (1 === aD1[ac.yd(fC, fE) + 2]) {
					this.aCy[3] = fE;
					break loop
				}
	}
}

function L(value, aD2, w7, aD3) {
	var qa = "number" == typeof value ? b7.aD4[value] : value;
	if (w7 && b7.aD5() && (qa = w7), !aD2) return aD3 ? qa.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qa;
	for (var f5 = aD2.length, aB = 0; aB < f5; aB++)
		for (var fO = 0; fO < 3; fO++) qa = qa.replace("{" + (10 * fO + aB) + "}", aD2[aB]);
	return qa
}

function c2() {
	this.data = new aD6;
	var aD7 = (new aD8).L84,
		aDA = (this.aD4 = aD7, !(this.aD9 = "en"));
	this.dd = function() {
		var qa, g;
		aDA = !1, ("en" === (qa = bj.eQ.data[12].value).split("-")[0].toLowerCase() ? (b7.aD4 = aD7, b7.aD9 = qa, 1) : bj.eQ.data[12].value === bj.eQ.data[145].value && 0 < bj.eQ.data[146].value && (qa = bj.eQ.data[146].value, (g = bj.rA.wK(qa, !
			1)).length === qa) && !!bA.r1.a3i(g) && function(g) {
			for (var f5 = g.length, j = 0; j < f5; j++) g[j] = g[j].replace("&#39;", "'");
			var aDG = bj.rA.wK(f5, !0);
			if (f5 !== aDG.length) return !1;
			if (!bA.r1.a3i(aDG)) return !1;
			for (var lL = aD7.length, aAU = new Array(lL), aDH = lL === f5, gY = Math.min(f5, lL), aB = 0; aB < lL; aB++)
				if (aAU[aB] = aD7[aB], aB < f5 && aDG[aB] === aAU[aB]) aAU[aB] = g[aB];
				else {
					aDH = !1;
					for (var fP = 0; fP < gY; fP++)
						if (aDG[fP] === aAU[aB]) {
							aAU[aB] = g[fP];
							break
						}
				} return b7.aD4 = aAU, b7.aD9 = bj.eQ.data[12].value, aDH
		}(g)) || (aDA = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new e1
	}, this.aD5 = function() {
		return this.aD4 === aD7 || !aD7.length
	}, this.aDI = function() {
		var aDJ;
		return !!aDA && (aDA = !1, 0 !== aD7.length) && (aDJ = bj.eQ.data[12].value, b0.ea.aDK(0, aDJ.slice(0, 20)), !0)
	}, this.aDL = function(g) {
		g.length !== aD7.length ? 8 === t.tD && t.a2H().aDM(30, 0, 1) : (this.aD4 = g, this.aD9 = bj.eQ.data[12].value, bj.sL.sM(145, this.aD9), bj.sL.sM(146, g.length), bj.rA.wQ(g, !1), bj.rA.wQ(aD7, !0), 8 === t.tD ? t.a2H().aDM(30) : 0 === aa
			.a2D() && 5 === t.tD && t.y.aDN())
	}, this.aDO = function() {
		var wT, g = navigator.languages;
		return g && g.length ? (wT = Math.max(b7.data.aDP(g[0]), 0), 1 === g.length ? [wT, wT] : [wT, Math.max(b7.data.aDP(g[1]), 0)]) : [0, 0]
	}
}

function aD6() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDQ = function() {
		for (var aDR = [], g = this.g, f5 = g.length, aB = 0; aB < f5; aB++) aDR.push(g[aB]);
		var aDS = bj.eQ.data[12].w7;
		for (aB = 0; aB < f5; aB++)
			if (aDR[aB] === aDS) {
				aDR.splice(aB, 1), f5--;
				break
			} aDR.sort(), f5++, aDR.unshift(aDS);
		try {
			if ("undefined" == typeof Intl) return aDR;
			for (aB = 0; aB < f5; aB++) {
				var qa = new Intl.DisplayNames([aDR[aB]], {
					type: "language"
				}).of(aDR[aB]);
				qa !== aDR[aB] && (aDR[aB] = aDR[aB] + ": " + qa)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDR
	}, this.aDU = function(aDV) {
		for (var qa = bj.eQ.data[12].value, f5 = aDV.length, aB = 0; aB < f5; aB++)
			if (qa === aDV[aB].split(":")[0]) return aB;
		return 0
	}, this.aDP = function(aDW) {
		if (aDW && !(aDW.length < 2)) {
			aDW = aDW.split("-")[0].toLowerCase();
			for (var g = this.g, f5 = g.length, aB = 0; aB < f5; aB++)
				if (aDW === g[aB]) return aB
		}
		return -1
	}
}

function aD8() {
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
		"{10} players left the game.", "{10} players surrendered.", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played",
		"seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!",
		"White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia",
		"Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker",
		"Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
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
		"Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!"
	]
}

function di() {
	var fC, fE, j, uB, aDX, aDY, aDZ, aDa, aDb, i, a4L, aDc;
	this.hr = !1, this.dd = function(qa, aDd) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aDd ? void(a4L = qa) : a4L !== qa ? void 0 : void a0.wI.saveString(200, qa);
		aDd && (a4L = qa, (aDc = document.createElement("a")).appendChild(document.createTextNode(a4L)), this.hr = !0, aDc.title = a4L, aDc.target = "_blank", aDc.href = a4L, aDc.style.textAlign = "center", aDc.style.color = bB.o0, aDc.style
			.position = "absolute", aDc.style.padding = "0px", aDc.style.margin = "0px", this.resize(), document.body.appendChild(aDc), bf.dk = !0)
	}, this.sA = function() {
		return !(!this.hr || (t.removeChild(document.body, aDc), this.hr = !1))
	}, this.hI = function(iM, iN) {
		return !!this.hr && ((iM < fC || iN < fE || fC + i < iM || fE + j < iN || fC + i - uB < iM && iN < fE + uB) && (bf.dk = !0, this.hr = !1, t.removeChild(document.body, aDc)), !0)
	}, this.resize = function() {
		var a6j, aDe;
		this.hr && (aDa = Math.floor(.8 * (a0.a1.iE() ? h.i > h.j ? .6 : .55 : .4) * h.iF), uB = Math.floor(.15 * aDa), aDX = Math.floor(.35 * uB), aDY = Math.floor(.5 * uB), aDZ = Math.floor(2.5 * aDY), j = uB + aDX + 3 * aDY, a6j = bA.qt.sk(1,
			aDX / h.k), aDb = Math.floor(h.k * aQ.measureText(a4L, a6j)), aDe = i = (aDa < aDb ? aDb : aDa) + 2 * aDZ, i = Math.min(i, h.i - 2 * (a0.a1.iE() ? 2 : 1) * bc.gap), a6j = bA.qt.sk(1, i / aDe * aDX / h.k), aDb = Math.floor(h
			.k * aQ.measureText(a4L, a6j)), fC = Math.floor((h.i - i) / 2), fE = Math.floor((h.j - j) / 2), aDc.style.font = a6j, aDc.style.top = Math.floor((fE + 1.4 * aDY + uB) / h.k) + "px", aDc.style.left = Math.floor((fC + (i -
			aDb) / 2) / h.k) + "px")
	}, this.vY = function() {
		this.hr && (vZ.fillStyle = bB.nx, vZ.fillRect(fC, fE + uB, i, j - uB), vZ.fillStyle = bB.p9, vZ.fillRect(fC, fE, i, uB), vZ.fillStyle = bB.o0, vZ.lineWidth = bc.zz, vZ.strokeStyle = bB.o0, vZ.strokeRect(fC, fE, i, j), vZ.fillRect(fC, fE +
			uB, i, bc.zz), vZ.font = bA.qt.sk(1, .48 * uB), bA.qt.textAlign(vZ, 1), bA.qt.textBaseline(vZ, 1), vZ.fillText(L(128), Math.floor(fC + (i - .5 * uB) / 2), Math.floor(fE + .55 * uB)), aM.a6u(Math.floor(fC + i - .8 * uB), Math
			.floor(fE + .25 * uB), Math.floor(.5 * uB)), vZ.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBy, fC = [0, 0, 0, 0, 0],
		fE = [0, 0, 0, 0, 0],
		nc = [1, 1, 1, 1, 1],
		fX = [!0, !0, !0, !1, !1],
		ed = (this.fs = [!0, !0, !0, !1, !1], null);
	this.aDf = function(a3t, aDg) {
		ed = a3t, fX = aDg, aBy = [bK.aDh, bK.a26, bK.aDi, bK.aDi, bK.aDj], this.dd()
	}, this.dd = function() {
		if (ab.tf()) {
			var aB, tK = Math.floor((a0.a1.iE() ? .261 : .195) * h.iF),
				tL = Math.floor(.9 * tK),
				a9R = Math.floor(.17 * tL);
			if (gap = a0.a1.iE() ? 2 * bc.gap : bc.gap, nc[0] = tK / ed[0].width, nc[1] = tL / ed[1].width, nc[2] = a9R / ed[2].height, nc[3] = a9R / ed[3].height, nc[4] = a9R / ed[4].height, nc[2] *= 1.7, nc[3] *= 1.07, fC[0] = gap, fC[1] = gap,
				fC[2] = gap, fC[3] = gap, fC[4] = Math.floor(2 * gap + nc[3] * ed[3].width), fE[0] = gap, fE[1] = fE[0] + gap + nc[0] * ed[0].height, fE[2] = fE[1] + gap + nc[1] * ed[1].height, fE[3] = fE[2] + gap + nc[2] * ed[2].height, fE[4] =
				fE[3], !fX[0])
				for (aB = 0; aB < 5; aB++) fE[aB] -= nc[0] * ed[0].height + gap;
			if (!fX[1])
				for (aB = 2; aB < 5; aB++) fE[aB] -= nc[1] * ed[1].height + gap
		}
	}, this.hr = function() {
		return !(7 === aa.a2D() && a0.a1.iE())
	}, this.hI = function(iM, iN) {
		if (ed && this.hr())
			for (var aB = fX.length - 1; 0 <= aB; aB--)
				if (fX[aB] && this.fs[aB] && fC[aB] < iM && fE[aB] < iN && iM < fC[aB] + nc[aB] * ed[aB].width && iN < fE[aB] + nc[aB] * ed[aB].height) return t.u(9, t.tD, new aDk(L(129), bA.qt.a4K(aBy[aB]))), !0;
		return !1
	}, this.vY = function() {
		if (ed && this.hr()) {
			var aB;
			for (vZ.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fX[aB] && this.fs[aB] && (vZ.setTransform(nc[aB], 0, 0, nc[aB], fC[aB], fE[aB]), vZ.drawImage(ed[aB], 0, 0));
			vZ.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDl = 0, this.aDm = null, this.uM = null, this.lF = null, this.y = null, this.uj = null, this.uJ = null, this.message = null, this.aDn = null, this.s9 = null, this.aDo = null, this.aDp = new aDq, this.a2A = 0, this.aAL = 0, this.dd =
		function() {
			this.aAL = bf.eT, this.aDl = bG.tG.xF(bj.eQ.data[105].value, 5), this.uM = new aDr, this.lF = new aDs, this.y = new aDt, this.uj = new aDu, this.uJ = new aDv, this.message = new aDw, this.aDn = new aDx, this.s9 = new aDy, this.aDo =
				new aDz, this.y.dd(), bp.dd(), this.a2A = 1, a0.a1.setState(1), aa.setState(0)
		}, this.ud = function() {
			this.s9 && this.s9.ud(), this.aDm = null, this.uM = null, this.lF = null, this.y = null, this.uj = null, this.uJ = null, this.message = null, this.aDn = null, this.s9 = null, this.aDo = null, this.a2A = 0, bp.ud(), a0.a1.setState(0)
		}
}

function aDr() {
	function aEM(g, tX, tY) {
		var aEN = g[tX];
		g[tX] = g[tY], g[tY] = aEN
	}
	this.uN = [
		[],
		[],
		[],
		[]
	], this.uO = [0, 0, 0, 0], this.aE0 = [], this.aE1 = function(aE2, tB, username, uT, a4n, aE3, elo, color, wn, aE4) {
		username = this.aE6(tB, username, uT, a4n, aE3, elo, color, wn, aE4);
		this.uN[aE2].push(username), bn.aDl === tB && (bn.aDm = username), bn.aDo.aE7(tB) && (username.uV = 1), bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === aE2 && 1 === bn.y.rx[2]
	}, this.aE6 = function(tB, username, uT, a4n, aE3, elo, color, wn, aE4) {
		return {
			tB: tB,
			username: username,
			uT: uT,
			a4n: a4n,
			aE3: aE3,
			elo: elo,
			color: color,
			wn: wn,
			aE4: aE4
		}
	}, this.aE9 = function(eC, aE2, uT, a4n, aE3, elo, wn, color) {
		eC = this.uN[aE2][eC];
		eC.uT = uT, eC.a4n = a4n, eC.aE3 = aE3, eC.elo = elo, eC.wn = wn, eC.color = color, bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === aE2 && 1 === bn.y.rx[2]
	}, this.aEA = function(eC, aE2, aEB) {
		var eC = this.uN[aE2][eC],
			aEC = eC.username,
			aED = "Redacted " + bF.tG.a0I(eC.tB, 2);
		eC.username = aEB ? "[" + bA.rs.a1k(aEC) + "] " + aED : aED, aEC.indexOf("Redacted") < 0 && (eC.aEE = aEC), bn.s9.aEF(eC.tB), bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === aE2 && 1 === bn.y.rx[2]
	}, this.aEG = function(eC, aEH, aEI) {
		var player = this.uN[aEH][eC];
		this.aEJ(eC, aEH), this.uN[aEI].push(player), bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === aEI && 1 === bn.y.rx[2]
	}, this.aEJ = function(eC, aEH) {
		var uM = this.uN[aEH];
		this.aE0.push(uM[eC]), 1e3 < this.aE0.length && this.aE0.shift(), eC >= this.uO[aEH] ? uM[eC] = uM[uM.length - 1] : (this.uO[aEH]--, 2 === aEH ? (uM.splice(this.uO[aEH] + 1, 0, uM[uM.length - 1]), uM.splice(eC, 1)) : (uM[eC] = uM[this.uO[
			aEH]], uM[this.uO[aEH]] = uM[uM.length - 1])), uM.pop(), bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === aEH && 1 === bn.y.rx[2]
	}, this.aEK = function(eC, rw) {
		bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === rw && 1 === bn.y.rx[2];
		var uM = this.uN[rw],
			ql = uM[eC];
		if (2 === rw)
			if (eC >= this.uO[rw]) {
				bn.aDo.join(ql);
				for (var aEL = this.uO[rw], elo = ql.elo; aEL && elo > uM[aEL - 1].elo;) aEL--;
				uM[eC] = uM[this.uO[rw]], uM.splice(this.uO[rw]++, 1), uM.splice(aEL, 0, ql)
			} else uM.splice(this.uO[rw]--, 0, ql), uM.splice(eC, 1);
		else eC >= this.uO[rw] ? (bn.aDo.join(ql), aEM(uM, this.uO[rw]++, eC)) : aEM(uM, --this.uO[rw], eC)
	}, this.aEO = function(tB) {
		for (var uN = this.uN, f5 = uN.length, aB = 0; aB < f5; aB++)
			for (var uM = uN[aB], lL = uM.length, fO = 0; fO < lL; fO++)
				if (tB === uM[fO].tB) return uM[fO];
		return null
	}
}

function aDz() {
	var aEP = [],
		aEQ = [],
		aER = 0;

	function aES(g, a7m, aEW, aEX) {
		var f5 = g.length;
		if (0 === f5) return "";
		var qa = "@" + g[0];
		if (1 === f5) return qa + a7m + aEX;
		for (var aB = 1; aB < f5 - 1; aB++) qa += ", @" + g[aB];
		return qa + " and @" + g[f5 - 1] + aEW + aEX
	}
	this.dd = function() {
		var qa = aES(aEQ, " is", " are", " in the lobby!");
		qa.length && bn.message.aET({
			id: 7,
			r: qa
		}), aEP = [], aEQ = [], aER = 0
	}, this.aE7 = function(aEU) {
		return bn.aDl !== aEU && (aEU = bF.tG.a0I(aEU, 5), !!bj.vx.uV(aEU)) && (aEQ.push(aEU), !0)
	}, this.join = function(player) {
		bn.aDl !== player.tB && (player = bF.tG.a0I(player.tB, 5), bj.vx.uV(player)) && aEP.push(player)
	}, this.aEV = function() {
		var a7m, aEW;
		++aER < 3 || (aER = 0, a7m = aES(aEQ, "", "", " entered the lobby!"), (a7m = (aEW = aES(aEP, "", "", " joined a game!")).length ? a7m.length ? a7m + " " + aEW : aEW : a7m).length && bn.message.aET({
			id: 7,
			r: a7m
		}), aEP = [], aEQ = [])
	}
}

function aDq() {
	this.dl = function(eC) {
		if ((uO = bn.uM.uO[eC]) < 2) return !1;
		var ry = bn.y.rz[eC],
			aEY = 9 === ry.aEZ ? 333 : 512,
			uO = Math.min(uO, aEY);
		8 === ry.aEZ && (uO -= uO % 2);
		aEY = bn.uM.uN[eC].splice(0, uO), bn.uM.uO[eC] -= uO, uO = function(aEa) {
			if (bn.aDm)
				for (var f5 = aEa.length, tB = bn.aDm.tB, aB = 0; aB < f5; aB++)
					if (aEa[aB].tB === tB) return aB;
			return -1
		}(aEY);
		return -1 === uO ? (bn.uM.aE0 = bn.uM.aE0.concat(aEY), 1e3 < bn.uM.aE0.length && bn.uM.aE0.splice(0, bn.uM.aE0.length - 1e3), bn.y.aE8 += 29 === t.tD && bn.y.rx[0] === eC && 1 === bn.y.rx[2], !1) : (8 === ry.aEZ && (ry.aEd = (ry.aEd + (
			uO >> 1)) % 1024, eC = uO - uO % 2, uO %= 2, aEY = aEY.slice(eC, 2 + eC)), ax.dd(ry, aEY, uO), !0)
	}, this.aEe = function(ry, aEa, aEb) {
		var f8 = aD.data = new a5W,
			aEi = (f8.spawningSeed = ry.spawningSeed, ry.aEZ < 7 ? (f8.gameMode = 1, f8.numberTeams = ry.aEZ + 2) : 9 === ry.aEZ ? (f8.gameMode = f8.isZombieMode = 1, f8.numberTeams = 2) : (f8.gameMode = 0, f8.battleRoyaleMode = 7 === ry.aEZ ?
				0 : 10 === ry.aEZ ? 1 : 2), f8.selectedPlayer = aEb, f8.isContest = ry.aEf, f8.mapType = bS.aEg(ry.el) ? 0 : 1, bS.aEh(f8, ry.el), f8.mapSeed = ry.mapSeed, f8.humanCount = aEa.length);
		f8.selectableSpawn = 1 === f8.gameMode || aEi < 100, f8.colorsData = new Uint32Array(aEi), f8.playerNamesData = new Array(aEi), f8.a5u = new Uint32Array(aEi);
		for (var aB = 0; aB < aEi; aB++) f8.colorsData[aB] = aEa[aB].color, f8.playerNamesData[aB] = aEa[aB].username, f8.a5u[aB] = aEa[aB].tB;
		if (2 === f8.battleRoyaleMode)
			for (f8.elo = new Uint16Array(aEi), aB = 0; aB < aEi; aB++) f8.elo[aB] = aEa[aB].elo;
		aa.setState(8), bS.a7(ry.el, f8.mapSeed), aD.a5b(), aD.a5Z = 2
	}
}

function aDs() {
	var e2 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEj = [bB.oE, bB.oE, bB.oF, bB.oj, bB.ok, bB.oV, bB.op, bB.oF, bB.pB, bB.oz, bB.p8],
		aEk = [
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
		aEl = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEz(s0, tB, aF1) {
		for (var fP = s0.length - 1; 0 <= fP; fP--) {
			var ql = s0[fP];
			0 === ql.id && ql.tB === tB && (ql.r = "[Redacted Message]", aF1) && (ql.aF2 = 1)
		}
	}
	this.s5 = function(aEm) {
		var aEn, a1l;
		return aEm.id < 5 && (aEn = "@" + bF.tG.a0I(aEm.tB, 5)), 0 === aEm.id ? aEn + ": " + aEm.r : 1 === aEm.id ? (a1l = "@" + bF.tG.a0I(aEm.target, 5), 0 === aEm.aEo ? 32768 <= aEm.value ? aEn + " voted with " + (aEm.value - 32768 + 1) +
				" gold against " + a1l + " to weaken the latter's admin position. 📉" : aEn + " voted with " + (aEm.value + 1) + " gold for " + a1l + " to strengthen the latter's admin position. 💪" : 1 === aEm.aEo ? aEn + " sent " + Math.floor(
					aEm.value / 100) + " 🧈 gold to " + a1l + "." : aEn + " voted with " + (aEm.value / 10).toFixed(1) + " points for " + a1l + " to acknowledge the latter as clan leader. ✅") : 2 === aEm.id ? 0 === aEm.aEo ? aEn +
			" was 🔇 muted for 1 Hour." : 1 === aEm.aEo ? "The username of " + aEn + " was ✂️ redacted. Duration: 1 Day" : aEn + " 👢 was kicked." : 3 === aEm.id ? aEn + bo.eF(aEm.aEo, bo.e8[aEm.aEo][aEm.value]) + "@" + bF.tG.a0I(aEm.target, 5) +
			bo.eH(aEm.aEo, bo.e8[aEm.aEo][aEm.value]) : 4 === aEm.id ? aEn + bo.eF(5, bo.e8[5][aEm.aEo]) + "@" + bF.tG.a0I(aEm.target, 5) + bo.eH(5, bo.e8[5][aEm.aEo]) : 5 === aEm.id ? aEl[aEm.aEo] : 6 === aEm.id ? "You are about to mention " +
			aEm.value + " player" + (1 === aEm.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEm.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEm.id ? aEm.r : void 0
	}, this.s4 = function(aEm, aEp) {
		return {
			aEm: aEm,
			r: aEp,
			aEq: 0,
			fontSize: 1,
			s8: 0,
			aEr: aEm.id ? bB.oi : bB.o0
		}
	}, this.uR = function(player, rw) {
		return (2 === rw ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uS = function(uT) {
		return aEj[uT]
	}, this.aEs = function(uT, a4n) {
		return uT < 3 || 7 === uT ? aEk[uT][0] : 4 === uT ? aEk[uT][a4n < 1 ? 0 : a4n < 10 ? 1 : 2] : aEk[uT][a4n < 10 ? 0 : 1]
	}, this.aEt = function(a4n) {
		return 0 === a4n
	}, this.aEO = function(rw, tB) {
		for (var uN = bn.uM.uN, uM = uN[rw], f5 = uM.length, aB = 0; aB < f5; aB++)
			if (tB === uM[aB].tB) return uM[aB];
		for (var fP = 0; fP < uN.length; fP++)
			if (rw !== fP)
				for (f5 = (uM = uN[fP]).length, aB = 0; aB < f5; aB++)
					if (tB === uM[aB].tB) return uM[aB];
		return null
	}, this.uU = function(ql) {
		return !!bn.aDm && ql.tB === bn.aDm.tB
	}, this.aEu = function(uM, aEv, aEw) {
		var a1i = [];
		loop: for (var aB = aEv; aB < aEw; aB++) {
			var a1j = bA.rs.a1k(uM[aB].username);
			if (a1j) {
				for (var fP = a1i.length - 1; 0 <= fP; fP--)
					if (a1j === a1i[fP].name) {
						a1i[fP].gY++;
						continue loop
					} a1i.push({
					name: a1j,
					gY: 1
				})
			}
		}
		if (a1i.sort(function(fO, fP) {
				return fP.gY - fO.gY
			}), 0 === a1i.length) return "";
		for (var qa = a1i[0].name + ": " + a1i[0].gY, aB = 1; aB < a1i.length; aB++) qa += "   " + a1i[aB].name + ": " + a1i[aB].gY;
		return qa
	}, this.aEx = function(uT, a4n, aE3) {
		return 0 === e2[uT].length ? "Rank: " + (a4n + 1) : e2[uT] + " Rank: " + (a4n + 1) + (3 !== uT && aE3 < 100 ? "   " + e2[3] + " Rank: " + (aE3 + 1) : "")
	}, this.aEy = function(tB) {
		for (var rz = bn.y.rz, aB = 0; aB < rz.length; aB++) aEz(rz[aB].s0, tB);
		aEz(bn.message.aF0(), tB, 1), bn.s9.aEy(tB)
	}
}

function aDv() {
	var sc = 0,
		aF3 = 0,
		aF4 = 0,
		aF5 = null,
		aF6 = null;

	function aF9(ql, aFA, aFB) {
		var qa = ql.username;
		return (qa += "   " + bn.lF.aEx(ql.uT, ql.a4n, ql.aE3)) + function(ql) {
			ql = ql.wn;
			if (ql < 1e3) return "   Gold: " + ql;
			if ((ql %= 1024) < 1e3) return "   Gold: " + ql + "k";
			return "   Gold: " + (ql - 999) + "M"
		}(ql) + ("   IP: " + bF.tG.a0I(ql.aE4, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFB ? aF3 : aF8(ql, aFA)])
	}

	function aF8(ql, aFA) {
		return aF3 = aFA || bn.uM.aEO(ql.tB) ? 1 : 0
	}
	this.uK = 0, this.aF7 = function() {
		!sc || aF3 === aF8(aF6) && aF4 === aF6.wn || (aF4 = aF6.wn, aF5.show(-1, -1, aF9(aF6, 0, 1), 1, 1, aF6.color))
	}, this.uW = function(e, ql, aFA) {
		var a9Y = e.getBoundingClientRect();
		this.show(a9Y.left, a9Y.top, ql, 0, aFA), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bn.uJ && bn.uJ.sA(1)
		}), this.uK = aFA
	}, this.show = function(fC, fE, ql, sg, aFA) {
		aF5 = aF5 || new sZ, aF4 = (aF6 = ql).wn, aF5.show(fC, fE, aF9(ql, aFA), sg, 0, aF6.color), sc = 1
	}, this.sA = function(sn) {
		this.uK = 0, aF5 && aF5.sA(sn) && (sc = 0, aF6 = null)
	}
}

function aDt() {
	function aFG() {
		bn.y.aE8 && 1 === bn.y.rx[2] && t.a66(29).aFJ(), bn.y.aE8 = 0, t.a66(29).aFK(), t.a66(29).aFL(), bn.uJ.aF7()
	}
	this.rz = new Array(4), this.rx = [0, 0, 1, 0], this.aE8 = 0, this.aFD = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rz.length; aB++) this.rz[aB] = new aFE;
		this.rx[0] = bj.eQ.data[158].value
	}, this.aFF = function() {
		aFG(), bn.aDo.dd()
	}, this.aEV = function() {
		bn.aDo.aEV();
		for (var aB = 0; aB < bn.y.rz.length; aB++) {
			var ry = bn.y.rz[aB];
			0 === ry.u5 ? ry.aFM = 0 : (ry.aFN = Math.max(ry.aFN - ry.aFM % 2, 0), ry.aFM++)
		}
		aFG()
	}, this.aFO = function(rw) {
		this.rx[0] !== rw || this.rx[2] || t.a66(29).aFP()
	}
}

function aDx() {
	var aFQ = 0,
		aFR = "",
		aFS = 0,
		aFT = 0,
		aFU = 0;

	function aFW(aEp) {
		b0.aFh.aFi(3, aEp)
	}

	function aFf(gY) {
		aFQ = 1, bn.message.aET({
			id: 6,
			value: gY
		})
	}

	function aFZ(r) {
		var aFl = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFl)
	}
	this.a15 = function(r) {
		var aFV, g, aFb;
		if (aFQ) return aFQ = 0, "yes" === (aFV = r.toLowerCase()) || "y" === aFV ? void aFW(aFR) : void bn.message.aET({
			id: 5,
			aEo: 7
		});
		!(r.indexOf("@") < 0) && (aFV = aFZ(r)) ? (aFR = r, g = function(aFY) {
			for (var f5 = aFY.length, aFj = [0, 0, 0, 0], aB = 0; aB < f5; aB++)
				for (var i = aFY[aB], fO = 0; fO < 4; fO++) i === "@room" + (fO + 1) && (aFj[fO] = 1);
			if ((aFT = bA.r1.a3X(aFj)) % 4 == 0) return bA.r1.a3p(bn.uM.uN);
			for (fO = 0; fO < 4; fO++) aFj[fO] = aFj[fO] ? bn.uM.uN[fO] : [];
			return bA.r1.a3p(aFj)
		}(aFV), function(aFY, aFb, r) {
			if (!aFS) return;
			for (var f5 = aFb.length, aB = 0; aB < f5; aB++) 2 === aFb[aB].id && (r = r.replace(aFY[aFb[aB].eC], "@" + aFb[aB].fX));
			return aFQ = 1, aFW((aFR = r).slice(0, 126) + "|"), 1
		}(aFV, aFb = function(aFY) {
			for (var aFb = [], f5 = (aFU = aFS = 0, aFY.length), aB = 0; aB < f5; aB++) {
				var i = aFY[aB],
					lL = i.length;
				bA.rs.startsWith(i, "@[") ? lL <= 9 && bA.rs.a4N(i, "]") && aFb.push({
					id: 0,
					fX: i.substring(2, lL - 1).toUpperCase()
				}) : 6 === lL ? bA.rs.startsWith(i, "@room") || (aFU++, aFb.push({
					id: 1,
					fX: bG.tG.xF(i.substring(1), 5)
				})) : 1 < lL && lL < 5 && 0 <= (lL = b7.data.aDP(i.substring(1))) && (aFb.push({
					id: 2,
					fX: lL,
					eC: aB
				}), aFS = 1)
			}
			return aFb
		}(aFV), r) || (0 === aFb.length ? aFT || function(aFY) {
			for (var f5 = aFY.length, aB = 0; aB < f5; aB++) {
				var i = aFY[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFV) ? aFf(g.length) : aFW(r) : aFV.length === aFU ? aFW(r) : (function(g, aFb) {
			var lL = aFb.length;
			if (0 === lL) return;
			var f5 = g.length;
			loop: for (var aB = f5 - 1; 0 <= aB; aB--) {
				for (var fO = 0; fO < lL; fO++)
					if (0 === aFb[fO].id) {
						if (aFb[fO].fX === bA.rs.a1k(g[aB].username)) continue loop
					} else if (1 === aFb[fO].id && aFb[fO].fX === g[aB].tB) continue loop;
				g[aB] = g[--f5], g.pop()
			}
		}(g, aFb), aFf(g.length)))) : aFW(r)
	}, this.aFm = function(r) {
		var aFY = aFZ(r);
		if (aFY)
			for (var a5 = new RegExp("^[0-9]+$"), f5 = aFY.length, aB = 0; aB < f5; aB++) {
				var i = aFY[aB].substring(1),
					lL = i.length;
				1 <= lL && lL <= 3 && a5.test(i) && (lL = parseInt(i, 10), !isNaN(lL)) && 0 <= lL && lL < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lL]))
			}
		return r
	}
}

function aDw() {
	var aFn, aFo = [],
		aFp = -1,
		aFq = 0,
		aFr = 0;

	function aFw() {
		aFq = bf.eT, (3 === this.ua ? aFv : (aFp = (aFo.length + aFp + 2 * this.ua - 1) % aFo.length, aFu))()
	}

	function aFu() {
		0 !== aFo.length && (aFr = 0, aFn && aFn.ud(), (aFn = new uX(aFw)).sM(aFp, aFo.length), aFn.show(aFo[aFp]), bn.message.resize())
	}

	function aFv() {
		aFr = 1, aFn && aFn.ud(), (aFn = new ue(aFu)).sM(aFo.length), aFn.show(), bn.message.resize()
	}
	this.aET = function(aEm) {
		var ql;
		2 === aEm.id && 3 === aEm.aEo ? bn.lF.aEy(aEm.tB) : (ql = bn.lF.s4(aEm, bn.lF.s5(aEm)), (5 !== aEm.id && 6 !== aEm.id || (t.a66(29).aFs().s7(ql), 5 === aEm.id)) && (ql = bf.eT < aFq + 2e4, aFp !== aFo.length - 1 && ql || (aFp = aFo
			.length), aFo.push(aEm), bj.eQ.data[14].value || 7 === aEm.id || bp.play(), aFn) && (aFr && (bj.eQ.data[13].value || ql) ? aFn.sM(aFo.length) : aFu()))
	}, this.show = function() {
		aFv()
	}, this.sA = function() {
		aFp = aFo.length - 1, aFn && aFn.ud(), aFn = null
	}, this.resize = function() {
		aFn && aFn.resize()
	}, this.aF0 = function() {
		return aFo
	}
}

function aDu() {
	var aFx = null,
		aFy = null,
		aFz = 0,
		aG0 = 0,
		aG1 = null;

	function aG3() {
		0 !== aFy.uT && (bn.uj.sA(), t.u(8, 29, new tE(25, {
			tF: 0,
			tB: bF.tG.a0I(aFy.tB, 5),
			tC: 0
		}, 29)))
	}

	function aG5() {
		return !bn.aDm || bn.lF.uU(aFy) ? 1 : 0
	}

	function aG4() {
		var fC = aFx.fC,
			fE = aFx.fE,
			aGE = (bn.uj.sA(), aG5());
		aFx = new uf([new w(bo.e8[5][0], function() {
			aG8(5, 0)
		}, aGE), new w(bo.e8[5][1], function() {
			aG8(5, 1)
		}, aGE), new w(bo.e8[5][2], function() {
			aG8(5, 2)
		}, aGE), new w(bo.e8[5][3], function() {
			aG8(5, 3)
		}, aGE)]), aG7(fC, fE), aG0 = aFz = 2
	}

	function aG6() {
		29 === t.tD && t.a2H().aDn(bF.tG.a0I(aFy.tB, 5))
	}

	function aG8(id, value) {
		5 === id && b0.aGF.aGG({
			tF: 3,
			tB: bF.tG.a0I(aFy.tB, 5),
			value: value
		})
	}

	function aG7(fC, fE, ul) {
		aFx.show(fC, fE, ul), bn.uJ.show(aFx.fC, aFx.fE, aFy, 1)
	}
	this.aG2 = function(e, ql) {
		aFz = 1, aFy = ql, aFx = new uf([new w(L(130), aG3, 0 === ql.uT ? 1 : 0), new w(L(131), aG4, aG5()), new w(L(132), aG6, 0)]), aG7((aG1 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aG1.clientY, 1)
	}, this.a37 = function(code) {
		if (29 !== t.tD) return !1;
		if (!aFy) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sA();
			else if (bA.rs.startsWith(code, "Numpad") || bA.rs.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFz) this.aG2(aG1, aFy);
				else {
					if (!aFx) return !1;
					1 === aFz ? code <= 1 ? aG3() : 2 === code ? aG4() : (aG6(), this.sA()) : (aG8(aG0, bL.iD(code - 1, 0, bo.e8[aG0].length - 1)), this.sA())
				}
		}
		return !0
	}, this.sA = function() {
		aFz = 0, aFx && aFx.sA(), aFx = null, bn.uJ.sA()
	}
}

function aFE() {
	this.u5 = 0, this.el = 0, this.mapSeed = 0, this.aEZ = 0, this.aGJ = 0, this.aGK = 0, this.aGL = 0, this.aEf = 0, this.aFN = 0, this.spawningSeed = 0, this.a2L = 0, this.aEd = 0, this.s0 = [], this.s1 = 1048575, this.aFM = 0, this.aGM = [{
		el: 0,
		mapSeed: 0,
		aEZ: 0,
		eT: 100,
		aEf: 0
	}, {
		el: 1,
		mapSeed: 0,
		aEZ: 1,
		eT: 200,
		aEf: 0
	}, {
		el: 2,
		mapSeed: 0,
		aEZ: 2,
		eT: 300,
		aEf: 0
	}, {
		el: 3,
		mapSeed: 0,
		aEZ: 3,
		eT: 400,
		aEf: 0
	}, {
		el: 0,
		mapSeed: 0,
		aEZ: 9,
		eT: 500,
		aEf: 0
	}, {
		el: 1,
		mapSeed: 0,
		aEZ: 10,
		eT: 600,
		aEf: 0
	}, {
		el: 2,
		mapSeed: 0,
		aEZ: 8,
		eT: 700,
		aEf: 0
	}, {
		el: 3,
		mapSeed: 0,
		aEZ: 3,
		eT: 800,
		aEf: 0
	}]
}

function aDy() {
	var aGN = [],
		tQ = [],
		aGO = [];

	function aGQ(ql) {
		for (var r = ql.r, aGP = [];;) {
			var ed = function aGS(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qa = r.substring(position + 1, position + 6);
				if (5 !== qa.length) return aGS(r, position + 1);
				if (bA.rs.startsWith(qa, "room")) return aGS(r, position + 1);
				var aGZ = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGZ.test(qa)) return aGS(r, position + 1);
				aGZ = r.substring(position + 6, position + 7);
				if (1 !== aGZ.length) return position;
				qa = new RegExp("^[ :!.]+$");
				if (!qa.test(aGZ)) return aGS(r, position + 1);
				return position
			}(r, 0);
			if (-1 === ed) {
				aGP.push(aGT(r, ql));
				break
			}
			0 === ed ? aGP.push(aGU(r.substring(1, 6), ql, ed)) : (aGP.push(aGT(r.substring(0, ed), ql)), aGP.push(aGU(r.substring(ed + 1, ed + 6), ql, ed))), r = r.substring(ed + 6)
		}
		return aGP
	}

	function aGU(qa, ql, ed) {
		var aE5 = function(qa) {
				var tB = bG.tG.xF(qa, 5),
					aE5 = bn.uM.aEO(tB);
				if (aE5) {
					for (aGN.push(aE5); 75 < aGN.length;) aGN.shift();
					return aE5
				}
				for (var aE0 = bn.uM.aE0, aB = aE0.length - 1; 0 <= aB; aB--)
					if (aE5 = aE0[aB], tB === aE5.tB) return aGN.push(aE5), aE5;
				for (aB = aGN.length - 1; 0 <= aB; aB--)
					if (aE5 = aGN[aB], tB === aE5.tB) return aGN.push(aE5), aE5;
				return bn.uM.aE6(tB, qa, 1, 999999, 999999, 0, 0, 0, 0)
			}(qa),
			qa = (0 === ed && 0 === ql.aEm.id && ql.s8 && (ql.fontSize = bn.lF.aEs(aE5.uT, aE5.a4n), ql.aEq = bn.lF.aEt(aE5.a4n)), document.createElement("span"));
		return qa.textContent = function(aE5, ql, ed) {
			if (aE5.aGX) return aE5.aGX--, ed = 2 === ql.aEm.id || (3 === ql.aEm.id || 4 === ql.aEm.id) && 0 !== ed, aE5.username + (ed ? " (" + aE5.aEE + ")" : "");
			if (ql.aEm.aF2) return "Redacted " + bF.tG.a0I(aE5.tB, 2);
			return aE5.username
		}(aE5, ql, ed), qa.style.display = "inline-block", qa.style.color = bn.lF.uS(aE5.uT), qa.style.cursor = "pointer", qa.style.margin = "0", qa.style.font = "inherit", qa.style.minWidth = qa.style.minHeight = "1em", bn.lF.uU(aE5) && (qa
			.style.textDecoration = "underline"), aE5.uV && (qa.style.textDecorationLine = "underline", qa.style.textDecorationStyle = "dotted"), bn.lF.aEt(aE5.a4n) && (qa.style.fontWeight = "bold"), qa.onclick = function(e) {
			bn.uj.aG2(e, aE5)
		}, bJ.rL() || (qa.onmouseover = function(e) {
			bn.uJ.uW(e.target, aE5)
		}), tQ.push(qa), qa
	}

	function aGT(r, ql) {
		var rr = document.createElement("span");
		return rr.textContent = r, rr.style.color = ql.aEr, rr.style.margin = "0", rr.style.font = "inherit", rr
	}

	function aGe(aE5, aED, tB) {
		tB !== aE5.tB || aE5.aEE || (aE5.aEE = aE5.username, aE5.username = aED)
	}
	this.ud = function() {
		for (var aB = 0; aB < tQ.length; aB++) tQ[aB].onclick = tQ[aB].onmouseover = null;
		aGO = tQ = null
	}, this.transform = function(ql) {
		for (var qY = document.createElement("div"), aGP = aGQ(ql), aB = 0; aB < aGP.length; aB++) qY.appendChild(aGP[aB]);
		0 === ql.aEm.id && (qY.vx143 = ql.aEm, aGO.push(qY)), qY.style.margin = "0.6em 0.6em", ql.s8 && (qY.style.marginLeft = qY.style.marginRight = "inherit"), qY.style.font = "inherit";
		var aGR = 0 < ql.aEm.id;
		return ql.aEq && (qY.style.fontWeight = "bold"), aGR && (qY.style.paddingLeft = "0.7em"), aGR && (qY.style.fontStyle = "italic"), qY.style.fontSize = ql.fontSize.toFixed(2) + "em", qY
	}, this.aGc = function(aGd) {
		if (aGd && (2 === aGd.id && 1 === aGd.aEo || 3 === aGd.id && 2 === aGd.aEo)) {
			var tB = 3 === aGd.id ? aGd.target : aGd.tB;
			if (!bn.uM.aEO(tB)) {
				for (var aED = "Redacted " + bF.tG.a0I(tB, 2), aE0 = bn.uM.aE0, aB = aE0.length - 1; 0 <= aB; aB--) aGe(aE0[aB], aED, tB);
				for (aB = aGN.length - 1; 0 <= aB; aB--) aGe(aGN[aB], aED, tB)
			}
		}
	}, this.aEF = function(tB) {
		for (var aGf = aGO, aB = aGf.length - 1; 0 <= aB; aB--) {
			var f8 = aGf[aB];
			if (f8.vx143.tB === tB) {
				for (; f8.firstChild;) t.removeChild(f8, f8.firstChild);
				for (var aGP = aGQ(bn.lF.s4(f8.vx143, bn.lF.s5(f8.vx143))), fO = 0; fO < aGP.length; fO++) f8.appendChild(aGP[fO]);
				aGf.splice(aB, 1)
			}
		}
	}, this.aEy = function(tB) {
		for (var aGf = aGO, aB = aGf.length - 1; 0 <= aB; aB--) {
			var f8 = aGf[aB];
			if (f8.vx143.tB === tB) {
				for (; f8.firstChild;) t.removeChild(f8, f8.firstChild);
				f8.vx143.r = "[Redacted Message]";
				for (var aGP = aGQ(bn.lF.s4(f8.vx143, bn.lF.s5(f8.vx143))), fO = 0; fO < aGP.length; fO++) f8.appendChild(aGP[fO]);
				aGf.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGg, aGh, aGi;

	function aGn(aB) {
		var button = aY.rS[aB],
			fC = button.fC,
			fE = button.fE,
			i = button.i,
			j = button.j;
		vZ.fillStyle = button.aGl, vZ.fillRect(fC, fE, i, j), aB === aGg && (vZ.fillStyle = aGi, vZ.fillRect(fC, fE, i, j)), vZ.lineWidth = bc.zz, vZ.strokeStyle = aGh, vZ.strokeRect(fC, fE, i, j),
			function(button) {
				var fC = button.fC,
					fE = button.fE,
					i = button.i,
					j = button.j;
				bA.qt.textAlign(vZ, 1), bA.qt.textBaseline(vZ, 1), vZ.font = button.font, vZ.fillStyle = aGh, vZ.fillText(button.aEp, Math.floor(fC + i / 2), Math.floor(fE + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fE = 0, this.gap = 0, this.dd = function() {
		aGg = -1, aGh = bB.o0, aGi = "rgba(255,255,255,0.16)", this.rS = new Array(7), this.j = Math.floor((a0.a1.iE() ? .123 : .093) * h.iF), this.i = Math.floor((a0.a1.iE() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGj = Math.floor(.26 * this.j),
			aGk = bA.qt.sk(1, aGj);
		this.rS[0] = {
			fC: 0,
			fE: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEp: "Multiplayer",
			font: aGk,
			aGl: "rgba(22,88,22,0.8)",
			fontSize: aGj
		}, aGj = Math.floor(.18 * this.j), aGk = bA.qt.sk(1, aGj), this.rS[1] = {
			fC: 0,
			fE: 0,
			i: this.i - this.rS[0].i - this.gap,
			j: this.j,
			aEp: "Single Player",
			font: aGk,
			aGl: "rgba(22,88,88,0.8)",
			fontSize: aGj
		}, this.rS[2] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEp: "",
			font: this.rS[1].font,
			aGl: "rgba(100,0,0,0.8)",
			fontSize: this.rS[1].fontSize
		}, this.rS[3] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: this.j,
			aEp: "Back",
			font: this.rS[0].font,
			aGl: "rgba(0,0,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.rS[4] = {
			fC: 0,
			fE: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEp: "The game was updated!",
			font: this.rS[1].font,
			aGl: "rgba(100,0,0,0.8)",
			fontSize: this.rS[1].fontSize
		}, this.rS[5] = {
			fC: 0,
			fE: 0,
			i: this.rS[0].i,
			j: Math.floor(.8 * this.j),
			aEp: "Reload",
			font: this.rS[0].font,
			aGl: "rgba(0,100,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.rS[6] = {
			fC: 0,
			fE: 0,
			i: this.rS[1].i,
			j: this.rS[5].j,
			aEp: "Back",
			font: this.rS[0].font,
			aGl: "rgba(0,0,0,0.8)",
			fontSize: this.rS[0].fontSize
		}, this.aAX()
	}, this.aAX = function() {
		this.fE = Math.floor(.54 * h.j), this.rS[0].fC = Math.floor(.5 * h.i - .5 * this.i), this.rS[1].fC = this.rS[0].fC + this.rS[0].i + this.gap, this.rS[2].fC = this.rS[3].fC = this.rS[0].fC, this.rS[4].fC = this.rS[5].fC = this.rS[0].fC,
			this.rS[6].fC = this.rS[1].fC, this.rS[0].fE = Math.floor(.54 * h.j), this.rS[1].fE = this.rS[0].fE, this.rS[2].fE = Math.floor((h.j - this.rS[2].j - this.rS[3].j - this.gap) / 2), this.rS[3].fE = this.rS[2].fE + this.rS[2].j + this
			.gap, this.rS[4].fE = Math.floor((h.j - this.rS[4].j - this.rS[5].j - this.gap) / 2), this.rS[5].fE = this.rS[6].fE = this.rS[4].fE + this.rS[4].j + this.gap
	}, this.aGm = function() {
		aGn(0), aGn(1)
	}, this.aGo = function() {
		aGn(2), aGn(3)
	}, this.aGp = function() {
		aGn(4), aGn(5), aGn(6)
	}, this.a2Z = function(fC, fE, ml) {
		var aB = -1;
		return 0 === aa.a2D() ? aB = this.a33(fC, fE, 0, 2) : 3 === aa.a2D() ? aB = this.a33(fC, fE, 3, 1) : 5 === aa.a2D() && (aB = this.a33(fC, fE, 5, 2)), aGg !== aB && (aGg = aB, ml) && (bf.dk = !0), -1 !== aB && (aT.ru(), !0)
	}, this.a33 = function(fC, fE, aGq, size) {
		for (var aB = aGq; aB < aGq + size; aB++)
			if (fC >= this.rS[aB].fC && fE >= this.rS[aB].fE && fC <= this.rS[aB].fC + this.rS[aB].i && fE <= this.rS[aB].fE + this.rS[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGs, aGt, a89, aGu, aGv, aGw, aGx, aGy, aGz, a88, aH0, aH1, aH2, aH3 = 1,
		aH4 = 0,
		aH5 = 0;

	function aH9(aHA) {
		aHA ? aH2 = (aH2 + 1) % b0.y.aHB : (b0.y.close(aH2, 3280), aH3 ? aH3 = 0 : (aH5 = 1 - aH5, 0 === (aH4 = (aH4 + 1) % 2) && (aH2 = (aH2 + 1) % b0.y.aHB, b0.y.close(aH2, 3280)))), aH1 = bf.eT, aZ.aH8 = aH5, b0.y.aHC(aH2, 4, 1) && b0.aFh.aHD(aH2)
	}

	function aHE() {
		0 === aH2 ? o.a2O(3249) : aH9()
	}

	function aHJ(fE, aAF, u5) {
		var nQ = Math.floor((h.i - aGu) / 2) + aGx,
			nd = nQ + Math.floor(u5 * (aGu - 2 * aGx));
		vZ.lineWidth = aAF, vZ.beginPath(), vZ.moveTo(nQ, fE), vZ.lineTo(nd, fE), vZ.lineTo(Math.floor(nQ - aGx + u5 * aGu), fE + a89), vZ.lineTo(nQ - aGx, fE + a89), vZ.closePath()
	}
	this.aH6 = 1, this.aH7 = 0, this.aH8 = 0, this.dd = function() {
		aa.setState(6), aGs = 0, aGt = 1, aGy = "rgba(0,220,120,0.4)", aGz = "rgba(0,0,0,0.8)", this.resize(), bf.dk = !0, aH3 = 1, aH4 = 0, aH2 = this.aH6 - 1, aH5 = 0 === this.aH7 ? l.dy ? 1 : 0 : this.aH7 - 1, aH9(1)
	}, this.resize = function() {
		aGu = Math.floor((a0.a1.iE() ? .5 : .25) * h.iF), aGv = aGu + 12, a89 = Math.floor(.125 * aGu), aGx = 3 * a89, aGw = Math.floor(.225 * aGu), aH0 = Math.floor(.3 * a89), a88 = bA.qt.sk(0, aH0)
	}, this.a2K = function(a28) {
		a28 === aH2 && aHE()
	}, this.hI = function(fC, fE) {
		var nQ = Math.floor((h.i - aGv) / 2),
			nR = Math.floor(.5 * (h.j - bc.gap - a89 - aGw)) + a89 + bc.gap;
		return nQ < fC && fC < nQ + aGv && nR < fE && fE < nR + aGw && (this.a3E(), aY.a2Z(fC, fE, !1), !0)
	}, this.a3E = function() {
		b0.y.a2P(3260), t.y.z()
	}, this.eY = function() {
		6 === aa.a2D() && (bf.eT > aH1 + 12e3 && aHE(), 100 < (aGs += .07 * aGt * (aGs < 16 ? 5 + aGs : 84 < aGs ? 105 - aGs : 17)) ? (aGs = 100, aGt = -1) : aGs < 0 && (aGs = 0, aGt = 1), aGy = "rgba(0," + Math.floor(190 - 1.9 * aGs) + "," +
			Math.floor(120 - 1.2 * aGs) + "," + (.4 + .004 * aGs) + ")", aGz = "rgba(0," + Math.floor(1.9 * aGs) + "," + Math.floor(1.2 * aGs) + "," + (.8 - .004 * aGs) + ")", bf.dk = !0)
	}, this.vY = function() {
		var fC = Math.floor((h.i - aGv) / 2),
			fE = Math.floor(.5 * (h.j - bc.gap - a89 - aGw));
		! function(title, fE, aAF, u5) {
			vZ.fillStyle = aGz, aHJ(fE, aAF, 1), vZ.fill(), vZ.fillStyle = aGy, aHJ(fE, aAF, u5), vZ.fill(), vZ.strokeStyle = bB.o0, aHJ(fE, aAF, 1), vZ.stroke(),
				function(aHL, fE) {
					bA.qt.textAlign(vZ, 1), bA.qt.textBaseline(vZ, 1), vZ.font = a88, vZ.fillStyle = bB.o0, vZ.fillText(aHL, Math.floor(.5 * h.i), Math.floor(fE + .58 * a89))
				}(title, fE)
		}(L(133), fE, 3, aGs / 100),
		function(fC, fE, i, j, aEp) {
			vZ.fillStyle = bB.nv, vZ.fillRect(fC, fE, i, j), vZ.lineWidth = 3, vZ.strokeStyle = bB.o0, vZ.strokeRect(fC, fE, i, j);
			var f5 = Math.floor(.3 * j);
			bA.qt.textAlign(vZ, 1), bA.qt.textBaseline(vZ, 1), vZ.font = bA.qt.sk(0, f5), vZ.fillStyle = bB.o0, vZ.fillText(aEp, Math.floor(fC + i / 2), Math.floor(fE + j / 2 + .1 * f5))
		}(fC, fE + a89 + bc.gap, aGv, aGw, L(39))
	}
}

function cR() {
	var a24 = 0;
	this.dd = function() {
		aY.dd(), a24 = 0
	}, this.setState = function(aHM) {
		a24 = aHM
	}, this.a2D = function() {
		return a24
	}, this.aHN = function() {
		this.setState(8), t.x()
	}, this.a37 = function(e) {
		if (!bS.xV) return !1;
		if (!(bf.eT < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHO()) return !0;
				if ("Enter" === e.key) {
					if (0 === a24) return !0;
					if (7 === a24) return !0
				}
			}
			return !1
		}
	}, this.aHP = function() {
		bZ.resize()
	}, this.aHO = function() {
		return !!bZ.sA()
	}, this.hI = function(fC, fE) {
		!bS.xV || bZ.hI(fC, fE) || 6 === a24 && aZ.hI(fC, fE) || bY.hI(fC, fE) || aT.hI(fC, fE)
	}, this.a2Z = function(fC, fE) {
		!aT.aAQ && aY.a2Z(fC, fE, !0) || aT.a2Z(fC, fE)
	}, this.click = function(fC, fE) {
		aT.a2y()
	}, this.a2c = function(fC, fE, deltaY) {}, this.aHQ = function() {
		aY.aAX(), bf.dk = !0
	}, this.vY = function() {
		8 !== a24 && 10 !== a24 && (vZ.imageSmoothingEnabled = !0, this.z4(), 0 !== a24 && (aT.vY(), aO.vY(), this.aHR(), bY.vY()), 0 !== a24 && 6 === a24 && aZ.vY(), bZ.vY(), t.vY())
	}, this.z4 = function() {
		var aHT, aHS;
		if (__fx.makeMainMenuTransparent) vZ.clearRect(0, 0, h.i, h.j);
		else bS.xV ? (aHS = h.i / bS.fG, aHT = h.j / bS.fH, vZ.setTransform(aHS = aHT < aHS ? aHS : aHT, 0, 0, aHS, Math.floor((h.i - aHS * bS.fG) / 2), Math.floor((h.j - aHS * bS.fH) / 2)), vZ.drawImage(bS.xX, 0, 0), vZ.setTransform(1, 0, 0, 1,
			0, 0), vZ.fillStyle = bB.nv) : vZ.fillStyle = bB.nr, vZ.fillRect(0, 0, h.i, h.j)
	}, this.aHR = function() {
		var fE = Math.floor(.3 * h.j),
			canvas = ab.aHU("territorial.io"),
			i6 = (i6 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i6,
			fC = (vZ.globalAlpha = .15, vZ.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i6 * canvas.width))),
			fC = Math.floor(fC / i6),
			fE = Math.floor(fE - .5 * canvas.height * i6),
			fE = Math.floor(fE / i6);
		vZ.setTransform(i6, 0, 0, i6, fC, fE), vZ.drawImage(canvas, fC, fE), vZ.setTransform(1, 0, 0, 1, 0, 0), vZ.globalAlpha = 1, vZ.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aEd = 0;
	var aHW, aHX, aHY, aHZ, aHa, aHb = this.aHV = 0;

	function aHe() {
		aHZ = aHa = null, aHb = 0
	}
	this.dd = function(ry, aEa, aEb) {
		t.x(), bn.ud(), aa.setState(10), aHZ = ry, aHa = aEa, aHb = aEb, this.aEd = ry.aEd, this.aHV = aEb, aHW = 0, aHX = bf.eT + 4500, b0.y.a2L = ry.a2L, b0.y.a2B === ry.a2L ? (console.log("direct pass"), aHY = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a2B, 3247), aHY = 2, b0.y.aHC(ry.a2L, 5, 2) && b0.pN.aHc()), vZ.imageSmoothingEnabled = !0, aa.z4();
		aEa = ab.aHU("loading"), aEb = (a0.a1.iE() ? .396 : .25) * h.iF / aEa.width;
		vZ.setTransform(aEb, 0, 0, aEb, Math.floor((h.i - aEb * aEa.width) / 2), Math.floor((h.j - aEb * aEa.height) / 2)), vZ.imageSmoothingEnabled = !1, vZ.drawImage(aEa, 0, 0), vZ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mj = function() {
		0 < aHY && bf.eT > aHX && (aHY--, aHX += 4500, 0 === bf.aHf) && 0 === bf.kN() && b0.y.aHC(b0.y.a2L, 5, 2)
	}, this.aHg = function() {
		return 10 === aa.a2D() && (bn.aDp.aEe(aHZ, aHa, aHb), aHe(), !0)
	}, this.aHh = function() {
		10 === aa.a2D() && 2 <= ++aHW && (bn.aDp.aEe(aHZ, aHa, aHb), aHe())
	}
}

function cS() {
	var aHj, canvas, a1N, aHk;

	function aHq(eC, name, aHr, qa) {
		a1N[eC] = name, canvas[eC] = new Image, canvas[eC].onload = function() {
			! function(eC, aHr) {
				var a4s, a4t = null;
				7 === aHr ? a4s = bA.a3K.a4v : 8 === aHr ? (a4s = bA.a3K.a4y, a4t = .1) : 3 === aHr ? (a4s = bA.a3K.a4w, a4t = .06) : 5 === aHr ? a4s = bA.a3K.a4z : 6 === aHr ? a4s = bA.a3K.a4u : 4 === aHr && (a4s = bA.a3K.a50);
				canvas[eC] = bA.a3K.a4r(canvas[eC], a4s, a4t)
			}(eC, aHr), aHt()
		}, canvas[eC].onerror = function(e) {
			console.error("Error loading image at index", eC, "Error:", e), aHt()
		}, canvas[eC].src = "data:image/png;base64," + qa
	}

	function aHt() {
		aHj--, aHn()
	}

	function aHn() {
		0 === aHj && (aHj = -1, aHp(), bf.dk = !0, canvas[7] = aHk, canvas[8] = aHk, canvas[9] = aHk, canvas[10] = aHk, 5 === t.tD) && t.a2H().aHv.resize()
	}

	function aHp() {
		aL.a6H(), bY.aDf([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xa = new zW, aj.xa.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHj = 23, canvas = new Array(aHj), a1N = new Array(aHj), (aHk = document.createElement("canvas")).width = 1;
			for (var aB = aHj - (aHk.height = 1); 0 <= aB; aB--) canvas[aB] = aHk;
			aHp(), aHq(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHq(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHq(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(3, "orders", 6,
					"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"
					), aHq(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHq(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHq(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aHq(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(8,
					"googleplay", 3,
					"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"
					), aHq(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHq(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHq(14, "bestPlayer", 5,
					"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"
					), aHq(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHq(16, "apple", 3,
					"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"
					), aHq(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHq(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHq(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHq(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHq(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHq(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eC) {
		return canvas[eC]
	}, this.aHU = function(name) {
		for (var aB = a1N.length - 1; 0 <= aB; aB--)
			if (a1N[aB] === name) return canvas[aB];
		return aHk
	}, this.tf = function() {
		return aHj <= 0
	}, this.aHm = function() {
		aHj = 0, aHn()
	}
}

function cT() {
	var aHy, aHz, aI0, aI1, aI2, aI3, aI4, aI5, aI6, aI7, aHw = [
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
		aHx = [
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

	function aIE(jg, ni) {
		for (var aB = jg; aB < ni; aB++) aHy[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100)), aHz[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100)), aI0[aB] = 4 * bL.fW(64 * ay.random(), ay.value(100))
	}

	function aID(jg, ni) {
		for (var colorsData = aD.data.colorsData, aB = jg; aB < ni; aB++) {
			var fX = colorsData[aB];
			aHy[aB] = 4 * (fX >> 12), aHz[aB] = 4 * (fX >> 6 & 63), aI0[aB] = 4 * (63 & fX)
		}
	}

	function aIZ(ej, aIb) {
		aD1[ej] = 0, aD1[ej + 1] = 0, aD1[ej + 2] = aIb, aD1[ej + 3] = 0, aIc(ej)
	}

	function aIc(ej) {
		var fC;
		bb.nq || (fC = ac.z5(ej), ej = ac.z6(ej), bb.nq = fC >= ba.aD0[0] && fC <= ba.aD0[2] && ej >= ba.aD0[1] && ej <= ba.aD0[3])
	}
	this.f7 = new Int32Array(4), this.aIB = new Int32Array(8), this.de = function() {
		var f7 = this.f7,
			f7 = (f7[0] = -4 * bS.fG, f7[1] = 4, f7[2] = -f7[0], f7[3] = -f7[1], this.aIB);
		f7[0] = -4 * bS.fG - 4, f7[1] = -4 * bS.fG, f7[2] = -4 * bS.fG + 4, f7[3] = -4, f7[4] = 4, f7[5] = 4 * bS.fG - 4, f7[6] = 4 * bS.fG, f7[7] = 4 * bS.fG + 4
	}, this.dd = function() {
		if (aHy ? (aHy.fill(0), aHz.fill(0), aI0.fill(0), aI1.fill(0), aI2.fill(0), aI3.fill(0), aI4.fill(0), aI5.fill(0), aI6.fill(0), aI7.fill(0), this.a9O.fill(0)) : (aHy = new Uint8Array(aD.f2), aHz = new Uint8Array(aD.f2), aI0 =
				new Uint8Array(aD.f2), aI1 = new Uint8Array(aD.f2), aI2 = new Uint8Array(aD.f2), aI3 = new Uint8Array(aD.f2), aI4 = new Uint8Array(aD.f2), aI5 = new Uint8Array(aD.f2), aI6 = new Uint8Array(aD.f2), aI7 = new Uint8Array(aD.f2), this
				.a9O = new Uint8Array(aD.f2)), aD.hz)
			for (var aBe = bg.aBe, aB = aD.f2 - 1; 0 <= aB; aB--) {
				var ed = aBe[aB],
					lL = bL.fW((aHx[ed][3] + 1) * ay.random(), ay.value(100));
				aHy[aB] = aHw[ed][0] + lL * aHx[ed][0], aHz[aB] = aHw[ed][1] + lL * aHx[ed][1], aI0[aB] = aHw[ed][2] + lL * aHx[ed][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aID(0, aD.kQ), aIE(aD.kQ, aD.f2)) : aIE(0, aD.f2) : aID(0, aD.f2);
		! function() {
			var aB, f8;
			for (aB = aD.f2 - 1; 0 <= aB; aB--) f8 = bL.fW(aHy[aB] + aHz[aB] + aI0[aB], 3), aHy[aB] += aIK(f8 - aHy[aB], 2), aHz[aB] += aIK(f8 - aHz[aB], 2), aI0[aB] += aIK(f8 - aI0[aB], 2), aHy[aB] -= aHy[aB] % 4, aHz[aB] -= aHz[aB] % 4, aI0[
				aB] -= aI0[aB] % 4
		}(),
		function() {
			for (var f5 = aD.f2, aIL = aHy, aIM = aHz, aIN = aI0, aIO = aI1, aB = 0; aB < f5; aB++) aIL[aB] += aB >> 7, aIM[aB] += aB >> 5 & 3, aIN[aB] += aB >> 3 & 3, aIO[aB] = 7 & aB
		}(), this.aIH(),
			function() {
				for (var f5 = aD.f2, aIP = aI2, aIQ = aI3, aIR = aI4, aIL = aHy, aIM = aHz, aIN = aI0, aB = 0; aB < f5; aB++) {
					var eB = aIL[aB],
						tb = aIM[aB],
						fP = aIN[aB];
					60 <= eB + tb + fP ? (aIP[aB] = Math.max(eB - 40, 3 & eB), aIQ[aB] = Math.max(tb - 40, 3 & tb), aIR[aB] = Math.max(fP - 40, 3 & fP)) : (aIP[aB] = eB + 40, aIQ[aB] = tb + 40, aIR[aB] = fP + 40)
				}
			}(),
			function() {
				for (var f5 = aD.f2, aIS = aI5, aIT = aI6, aIU = aI7, aIL = aHy, aIM = aHz, aIN = aI0, aB = 0; aB < f5; aB++) {
					var eB = aIL[aB],
						tb = aIM[aB],
						fP = aIN[aB];
					688 <= eB + tb + fP ? (aIS[aB] = eB - 88, aIT[aB] = tb - 88, aIU[aB] = fP - 88) : (aIS[aB] = Math.min(eB + 88, 252 + (3 & eB)), aIT[aB] = Math.min(tb + 88, 252 + (3 & tb)), aIU[aB] = Math.min(fP + 88, 252 + (3 & fP)))
				}
			}()
	}, this.a8G = function(player) {
		var g = bO.fe;
		return g[0] = aHy[player], g[1] = aHz[player], g[2] = aI0[player], g
	}, this.aIH = function() {
		for (var aB = aD.f2 - 1; 0 <= aB; aB--) this.a9O[aB] = aHy[aB] + aHz[aB] + aI0[aB] < 280 ? 0 : 1
	}, this.z5 = function(ej) {
		return bL.fW(ej, 4) % bS.fG
	}, this.z6 = function(ej) {
		return bL.fW(ej, 4 * bS.fG)
	}, this.yd = function(fC, fE) {
		return Math.floor(4 * (fE * bS.fG + fC))
	}, this.yt = function(ej) {
		var f7 = this.f7;
		return this.aIV(ej + f7[0]) || this.aIV(ej + f7[1]) || this.aIV(ej + f7[2]) || this.aIV(ej + f7[3])
	}, this.fT = function(ej) {
		var f7 = this.f7;
		return this.fA(ej + f7[0]) || this.fA(ej + f7[1]) || this.fA(ej + f7[2]) || this.fA(ej + f7[3])
	}, this.yr = function(ej, player) {
		var f7 = this.f7;
		return this.aIW(ej + f7[0], player) || this.aIW(ej + f7[1], player) || this.aIW(ej + f7[2], player) || this.aIW(ej + f7[3], player)
	}, this.gf = function(ej) {
		return 208 <= aD1[ej + 3]
	}, this.yz = function(player, ej) {
		return this.gf(ej) && this.z2(player, ej)
	}, this.z2 = function(player, ej) {
		return player === this.ex(ej)
	}, this.aIX = function(ej) {
		return 208 <= aD1[ej + 3] && aD1[ej + 3] < 224
	}, this.jb = function(ej) {
		return 224 <= aD1[ej + 3] && aD1[ej + 3] < 248
	}, this.ys = function(ej) {
		for (var f7 = this.f7, aB = 3; 0 <= aB; aB--)
			if (this.iJ(ej + f7[aB])) return !0;
		return !1
	}, this.f0 = function(ej) {
		return this.gf(ej) || this.ew(ej)
	}, this.iJ = function(ej) {
		return 0 === aD1[ej + 3] && 2 === aD1[ej + 2]
	}, this.ew = function(ej) {
		return 0 === aD1[ej + 3] && 1 === aD1[ej + 2]
	}, this.xi = function(ej) {
		return 0 === aD1[ej + 3] && 3 === aD1[ej + 2]
	}, this.fA = function(ej) {
		return 0 === aD1[ej + 3] && 5 === aD1[ej + 2]
	}, this.aIV = function(ej) {
		return 0 === aD1[ej + 3] && 3 <= aD1[ej + 2]
	}, this.en = function(ej) {
		return (aD1[ej] >> 1 << 8) + aD1[ej + 1]
	}, this.aIY = function(ej) {
		return 1 & aD1[ej]
	}, this.aIW = function(ej, player) {
		return this.ew(ej) || this.gf(ej) && player !== this.ex(ej)
	}, this.ex = function(ej) {
		return aD1[ej] % 4 * 128 + aD1[ej + 1] % 4 * 32 + aD1[ej + 2] % 4 * 8 + aD1[ej + 3] % 8
	}, this.z0 = function(ej) {
		aIZ(ej, 1)
	}, this.aIa = function(ej) {
		aIZ(ej, 2)
	}, this.ye = function(ej, player) {
		aD1[ej] = aHy[player], aD1[ej + 1] = aHz[player], aD1[ej + 2] = aI0[player], aD1[ej + 3] = 208 + aI1[player], aIc(ej)
	}, this.ga = function(ej, player) {
		aD1[ej] = aI2[player], aD1[ej + 1] = aI3[player], aD1[ej + 2] = aI4[player], aD1[ej + 3] = 224 + aI1[player], aIc(ej)
	}, this.jc = function(ej, player) {
		aD1[ej] = aI5[player], aD1[ej + 1] = aI6[player], aD1[ej + 2] = aI7[player], aD1[ej + 3] = 248 + aI1[player], aIc(ej)
	}
}

function cs() {
	var aId = 0,
		aIf = new Uint16Array(64);

	function wB(a6L) {
		aId -= 2;
		for (var aB = a6L; aB < aId; aB += 2) aIf[aB] = aIf[aB + 2], aIf[aB + 1] = aIf[aB + 3]
	}
	this.dd = function() {
		aId = 0
	}, this.eY = function() {
		var aB, jZ, ih;
		if (0 !== aId)
			if (0 === ag.mz[aD.ep]) aId = 0;
			else if (0 === ad.gC(aD.ep)) aId = 0;
		else
			for (aB = aId - 2; 0 <= aB; aB -= 2)(jZ = aIf[aB]) < aD.f2 && 0 === ag.mz[jZ] ? wB(aB) : (ih = aIf[aB + 1], (jZ >= aD.f2 && bs.aIh(aD.ep) || jZ < aD.f2 && bs.aIi(aD.ep, jZ)) && (b8.hV.hc(ih, jZ), wB(aB)))
	}, this.hd = function(jZ, ih) {
		! function(jZ, ih) {
			for (var aB = 0; aB < aId; aB += 2)
				if (aIf[aB] === jZ) return aIf[aB + 1] = Math.min(aIf[aB + 1] + ih, 1023), 1;
			return
		}(jZ, ih) && 64 !== aId && (aIf[aId] = jZ, aIf[aId + 1] = ih, aId += 2)
	}
}

function cU() {
	function aIq(player) {
		var eU;
		bA.gR.a4T(player) && (eU = ag.h7[player] - ag.a4Y[player] + ad.aIs(player), bd.gV(player, Math.abs(eU), eU < 0 ? 18 : 12)), ag.h7[player] = 0, ag.a4Y[player] = 0
	}

	function aIz() {
		aX.show(!1, !1, !1, !0), aW.aCA(), bR.a0m.a1Y()
	}

	function aIm(player, aIy) {
		for (var aB = aIy.length - 1; 0 <= aB; aB--) ad.aJ1(aIy[aB], player)
	}

	function aIo(player) {
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
					ac.yz(player, gd) && ac.z0(gd)
				}
		}
		iz[player] = j1[player] = 0, iy[player] = j0[player] = Math.max(fG, bS.fH)
	}
	this.dl = function(gd) {
		var player, eU = ag.gt[gd] + ag.yZ[gd];
		bN.y.kU[gd] ? eU && (aIm(player = gd, ad.aIn(player)), aIo(player), af.aIp(), aF.gT(player), ad.clear(player), aIq(player), function(player) {
			ag.yZ[player] = 0, ag.gX[player] = [], ag.gl[player] = [], ag.gm[player] = [], ag.fU[player] = []
		}(player)) : !eU && ag.gX[gd].length || this.aIl(gd)
	}, this.aIl = function(player) {
		! function(player) {
			bA.gR.jn(player) || (ag.a1c[player] = bi.a1r.aIx(), aD.a13++);
			var aIy = ad.aIn(player);
			0 === aIy.length ? bA.gR.a4Q(player) && aIz() : (aIm(player, aIy), function(player, aIy) {
				var aJ3 = aIy[function(aIy) {
					var aB, eC = 0;
					for (aB = aIy.length - 1; 1 <= aB; aB--) ag.gt[aIy[aB]] > ag.gt[aIy[eC]] && (eC = aB);
					return eC
				}(aIy)];
				9 === aD.ki && (1 === bg.f3[player] ? ay.kI(8) && az.aJ4(aJ3) : aE.ho[player] && (aN.a7j(765, 0), aN.zT(280, L(134, [ag.zU[aJ3], ag.zU[player]]), 765, aJ3, bB.nr, bB.pC, -1, !0)));
				if (bA.gR.a4Q(player)) aIz(), aN.a1E(aJ3, 1);
				else {
					for (var aB = aIy.length - 1; 0 <= aB; aB--)
						if (bA.gR.a4T(aIy[aB]) && (bd.mv[4 - bA.gR.jn(player)]++, bA.gR.a4Q(aIy[aB]))) return aN.a1E(player, 0);
					bA.gR.jn(player) || aN.a7T(0, player, aJ3)
				}
			}(player, aIy))
		}(player), aIo(player), af.aIp(), aIq(player),
			function(player) {
				ag.mz[player] = 0, ag.gX[player] = null, ag.gl[player] = null, ag.gm[player] = null, ag.fU[player] = null
			}(player), aF.gT(player), ad.clear(player), bN.aIv.aIw(player)
	}
}

function cx() {
	var input;

	function aJ5(e) {
		(e = e.target.files) && 0 < e.length && b6.aJ8(e[0])
	}

	function aJC(e) {
		var ed = new Image;
		ed.onload = aJD, ed.src = e.target.result
	}

	function aJD(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJF = bj.eQ.data[162].value,
			max = Math.min(bS.aJG, aJF),
			aJF = (max = a0.id || bJ.rL() ? Math.min(1400, aJF) : max) / Math.max(i, j);
		if (aJF < 1 && (i = Math.floor(aJF * i + .125), j = Math.floor(aJF * j + .125)), max < i || max < j || i < 10 || j < 10) aJF = "Invalid Image Dimensions!", a0.wI ? a0.wI.showToast(aJF) : alert(aJF);
		else {
			for (var max = document.createElement("canvas"), aJF = (max.width = i, max.height = j, max.getContext("2d")), aJI = document.createElement("canvas"), aJJ = (aJI.width = e.width, aJI.height = e.height, aJI.getContext("2d")), e = (aJJ
					.drawImage(e, 0, 0), aJJ.getImageData(0, 0, aJI.width, aJI.height)), aJJ = aJF.createImageData(i, j), src = e.data, aJM = aJJ.data, a9z = aJI.width / i, aA0 = aJI.height / j, fE = 0; fE < j; fE++)
				for (var fC = 0; fC < i; fC++) {
					var aJN = Math.floor(fC * a9z),
						aJN = 4 * (Math.floor(fE * aA0) * aJI.width + aJN),
						aJQ = 4 * (fE * i + fC);
					aJM[aJQ] = src[aJN], aJM[1 + aJQ] = src[1 + aJN], aJM[2 + aJQ] = src[2 + aJN], aJM[3 + aJQ] = 255
				}
			aJF.putImageData(aJJ, 0, 0), 20 === t.tD && t.a2H().aJD(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJ5
	}, this.ud = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJ6 = function() {
		input.click()
	}, this.aJ8 = function(aJ9) {
		var g = aJ9.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJC, g.readAsDataURL(aJ9))
	}
}

function cv() {
	this.aJR = null, this.dd = function() {
		10 !== aD.ki ? this.aJR = null : this.aJR = new Uint32Array(aD.f2)
	}, this.eY = function() {
		10 === aD.ki && this.lF()
	}, this.lF = function() {
		for (var gd, target, aCN, aJR = this.aJR, a0p = al.l1, a4Z = ag.h7, aB = al.kw - 1; 0 <= aB; aB--)(gd = a0p[aB]) >= aD.kQ || (target = Math.max(bL.fW(a4Z[gd], 4), 2048), aCN = Math.max(ae.aCO(gd), 100), aJR[gd] += bL.fW(aCN * target,
			1e4), aJR[gd] > target && (aJR[gd] = target))
	}, this.a4f = function(player, ho) {
		return ho > this.aJR[player] ? (ho = this.aJR[player], this.aJR[player] = 0) : this.aJR[player] -= ho, ho
	}
}

function dW() {
	function aJT(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aJb, g.readAsText(e))
	}

	function aJb(e) {
		var aJe;
		aD.a11 || (e = JSON.parse(e.target.result), aJe = aD.data = new a5W, aJf(e, aJe, "mapType", 0, 2), aJf(e, aJe, "mapProceduralIndex", 0, 255), aJf(e, aJe, "mapRealisticIndex", 0, 255), aJf(e, aJe, "mapSeed", 0, 16383), function(aJd, aJe, ge,
				max) {
				aJd = aJd[ge];
				aJe[ge] = aJl(aJd) ? aJd.slice(0, max) : aJe[ge]
			}(e, aJe, "mapName", 20), function(aJd, aJe, ge) {
				var aJE;
				2 === aJe.mapType && (!aJl(aJd = aJd[ge]) || aJd.length <= 20 ? aJe.mapType = 0 : ((aJE = new Image).onload = function() {
					b9.aJm.aJn(aJE, 1), aJE.onload = null, aJE = null
				}, aJE.src = aJd))
			}(e, aJe, "canvas"), aJf(e, aJe, "passableWater", 0, 1), aJf(e, aJe, "passableMountains", 0, 1), aJf(e, aJe, "playerCount", 1, 512), aJf(e, aJe, "humanCount", 1, 1), aJf(e, aJe, "selectedPlayer", 0, 0), aJf(e, aJe, "gameMode", 0, 1),
			aJf(e, aJe, "playerMode", 0, 0), aJf(e, aJe, "battleRoyaleMode", 0, 0), aJf(e, aJe, "numberTeams", 0, 8), aJf(e, aJe, "isZombieMode", 0, 0), aJf(e, aJe, "isContest", 0, 0), aJf(e, aJe, "isReplay", 0, 0), aJi(e, aJe, "elo", 16, 2,
				16383), aJf(e, aJe, "colorsType", 0, 1), aJf(e, aJe, "colorsPersonalized", 0, 1), aJi(e, aJe, "colorsData", 32, 512, 262143), aJf(e, aJe, "selectableColor", 0, 1), aJi(e, aJe, "teamPlayerCount", 16, 9, 512), aJf(e, aJe,
				"neutralBots", 0, 1), aJf(e, aJe, "botDifficultyType", 0, 3), aJf(e, aJe, "botDifficultyValue", 0, 15), aJi(e, aJe, "botDifficultyTeam", 8, 9, 15), aJi(e, aJe, "botDifficultyData", 8, 512, 15), aJf(e, aJe, "spawningType", 0, 2),
			aJf(e, aJe, "spawningSeed", 0, 16383), aJi(e, aJe, "spawningData", 16, 1024, 4095), aJf(e, aJe, "selectableSpawn", 0, 1), aJf(e, aJe, "playerNamesType", 0, 2),
			function(aJd, aJe, ge, size, max) {
				var a3f = aJd[ge];
				if (Array.isArray(a3f)) {
					for (var a3g = new Array(size), f5 = Math.min(a3f.length, size), aB = 0; aB < f5; aB++) a3g[aB] = aJl(a3f[aB]) ? a3f[aB].slice(0, max) : "";
					a3g.fill("", f5), aJe[ge] = a3g
				}
			}(e, aJe, "playerNamesData", 512, 20), aJf(e, aJe, "selectableName", 0, 1), aJf(e, aJe, "aIncomeType", 0, 2), aJf(e, aJe, "aIncomeValue", 0, 255), aJi(e, aJe, "aIncomeData", 8, 512, 255), aJf(e, aJe, "tIncomeType", 0, 2), aJf(e, aJe,
				"tIncomeValue", 0, 255), aJi(e, aJe, "tIncomeData", 8, 512, 255), aJf(e, aJe, "iIncomeType", 0, 2), aJf(e, aJe, "iIncomeValue", 0, 255), aJi(e, aJe, "iIncomeData", 8, 512, 255), aJf(e, aJe, "sResourcesType", 0, 2), aJf(e, aJe,
				"sResourcesValue", 0, 2047), aJi(e, aJe, "sResourcesData", 16, 512, 2047), t.x(), t.y.t5[0] = 0, t.u(19))
	}

	function aJf(aJd, aJe, ge, min, max) {
		aJd = aJd[ge];
		aJe[ge] = "number" == typeof aJd && min <= aJd && aJd <= max ? Math.floor(aJd) : aJe[ge]
	}

	function aJl(qa) {
		return "string" == typeof qa
	}

	function aJi(aJd, aJe, ge, aJo, size, max) {
		var a3f = aJd[ge];
		if (Array.isArray(a3f)) {
			for (var a3g = new(8 === aJo ? Uint8Array : 16 === aJo ? Uint16Array : Uint32Array)(size), f5 = Math.min(a3f.length, size), aB = 0; aB < f5; aB++) a3g[aB] = bL.iD(a3f[aB], 0, max);
			aJe[ge] = a3g
		}
	}
	this.aJS = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJT, input.click()
	}, this.aJU = function() {
		for (var aJX, aDc, a64 = aD.data, keys = Object.keys(a64), aJV = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a64[key] instanceof Uint8Array || a64[key] instanceof Uint16Array || a64[key] instanceof Uint32Array ? aJV[key] = Array.from(a64[key]) : aJV[key] = a64[key]
		}
		aJV.canvas = 2 === aJV.mapType && aJV.canvas ? aJV.canvas.toDataURL() : null, aJX = aJV, aJX = JSON.stringify(aJX, null, 2), aJX = new Blob([aJX], {
			type: "application/json"
		}), (aDc = document.createElement("a")).href = URL.createObjectURL(aJX), aDc.download = "tt_scenario.json", aDc.click()
	}
}

function cY() {
	var aJp, aJq, size, jZ, ho, aJr;

	function aJs(player) {
		return player < aD.kQ ? aJp * player : aJp * aD.kQ + aJq * (player - aD.kQ)
	}
	this.dd = function() {
		aJp = aD.kQ < 16 ? 12 : 8, aJq = 4;
		var f5 = aJs(aD.f2);
		size = new Uint8Array(aD.f2), jZ = new Uint16Array(f5), ho = new Uint32Array(f5), aJr = new Uint8Array(f5)
	}, this.qR = function(a8s, aJt) {
		var aJu = this.h8(a8s, aJt),
			aJt = (this.h6(a8s, aJt, 0), bA.gR.gU(a8s, aJu));
		bd.gV(a8s, aJu - aJt, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJ1 = function(player, aJt) {
		var aJx, aJt = function(player, aJt) {
			var aB, lL = aJs(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jZ[lL + aB] === aJt) return aB;
			return size[player]
		}(player, aJt);
		aJt !== size[player] && (aJx = ho[aJs(player) + aJt], this.gW(player, aJt), this.ec(player, aJx, aD.f2))
	}, this.jl = function(player, aJt) {
		for (var lL = aJs(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJt) return !0;
		return !1
	}, this.k4 = function(player) {
		return player < aD.kQ ? size[player] < aJp : size[player] < aJq
	}, this.gC = function(player) {
		return size[player]
	}, this.gH = function(player, aB) {
		return jZ[aJs(player) + aB]
	}, this.gI = function(player, aB) {
		return ho[aJs(player) + aB]
	}, this.h8 = function(player, aJt) {
		for (var lL = aJs(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJt) return ho[lL + aB];
		return 0
	}, this.aIs = function(player) {
		for (var lL = aJs(player), fX = 0, aB = size[player] - 1; 0 <= aB; aB--) fX += ho[lL + aB];
		return fX
	}, this.h6 = function(player, aJt, aJx) {
		for (var lL = aJs(player), aB = size[player] - 1; 0 <= aB; aB--) jZ[lL + aB] === aJt && (ho[lL + aB] = aJx)
	}, this.gr = function(player, aB, aJx) {
		ho[aJs(player) + aB] = Math.max(aJx, 0)
	}, this.gs = function(player, aB) {
		aJr[aJs(player) + aB] = 0
	}, this.gJ = function(player, aB) {
		return aJr[aJs(player) + aB]
	}, this.ec = function(player, aJx, aJt) {
		ao.jD.k2[player] = ao.jD.k2[aJt] = 8, bA.gR.a4T(aJt) && bd.mv[6 - bA.gR.jn(player)]++;
		for (var lL = aJs(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jZ[lL + aB] === aJt) return ho[lL + aB] += aJx, void(ho[lL + aB] = ho[lL + aB] > aD.a4b ? aD.a4b : ho[lL + aB]);
		jZ[lL + size[player]] = aJt, ho[lL + size[player]] = aJx, aJr[lL + size[player]] = 1, size[player]++, aJt === aD.ep ? aN.a1E(player, 5) : player < aD.kQ && player === aD.ep && af.a7V(aJt)
	}, this.gW = function(player, eC) {
		var fO, lL;
		if (0 !== size[player])
			for (lL = aJs(player), size[player]--, fO = eC; fO < size[player]; fO++) jZ[lL + fO] = jZ[lL + fO + 1], ho[lL + fO] = ho[lL + fO + 1], aJr[lL + fO] = aJr[lL + fO + 1]
	}, this.aIn = function(player) {
		for (var fO, lL, aIy = [], aB = al.kw - 1; 0 <= aB; aB--)
			for (lL = aJs(al.l1[aB]), fO = size[al.l1[aB]] - 1; 0 <= fO; fO--)
				if (jZ[lL + fO] === player) {
					aIy.push(al.l1[aB]);
					break
				} return aIy
	}
}

function cZ() {
	var aJy;

	function aK0(player) {
		var eB, k5;
		return bA.gR.jn(player) && player < aD.kQ ? 0 : (eB = aJy[bL.fW((aD.f2 - 1) * ag.gt[player], aD.kA)], bf.kN() < 1920 && (eB = Math.max(bL.fW(100 * (13440 - 6 * bf.kN()), 1920), eB)), k5 = ae.k6(player), ag.h7[player] > k5 && (eB -= bL.fW(2 *
			eB * (ag.h7[player] - k5), k5)), Math.min(Math.max(eB, 0), 700))
	}

	function aKC(nc) {
		for (var gt = ag.gt, l1 = al.l1, aB = al.kw - 1; 0 <= aB; aB--) {
			var gd = l1[aB];
			bA.gR.gU(gd, bL.fW(nc * gt[gd], 32))
		}
	}

	function aK9() {
		var xb = aD.ep;
		bO.fb[0] = ag.h7[xb] - ag.a4Y[xb]
	}

	function aKB(eC) {
		var xb = aD.ep,
			xb = ag.h7[xb] - ag.a4Y[xb] - bO.fb[0];
		ae.aAy += xb, bd.mv[eC] += xb
	}
	this.aAy = 0, this.dj = function() {
		for (var f5 = aD.f2, aB = (aJy = new Uint16Array(f5), 0); aB < f5; aB++) aJy[aB] = 100 + aJz(bL.fW(25600 * aB, f5 - 4), 9)
	}, this.dd = function() {
		(this.aAy = 0) === aD.data.iIncomeType ? this.aCO = aK0 : 1 === aD.data.iIncomeType ? this.aCO = function(player) {
			return bL.fW(aD.data.iIncomeValue * aK0(player), 64)
		} : this.aCO = function(player) {
			return bL.fW(aD.data.iIncomeData[player] * aK0(player), 64)
		}
	}, this.eY = function() {
		if (bf.kN() % 10 == 9 && (ae.aAy = 0, function() {
				aK9();
				for (var l1 = al.l1, h7 = ag.h7, aB = al.kw - 1; 0 <= aB; aB--) {
					var gd = l1[aB],
						aKA = bL.fW(ae.aCO(gd) * h7[gd], 1e4);
					bA.gR.gU(gd, Math.max(aKA, 1))
				}
				aKB(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aK9(), 1 === aD.data.aIncomeType)
						for (var gt = ag.gt, l1 = al.l1, nc = aD.data.aIncomeValue, aB = al.kw - 1; 0 <= aB; aB--) {
							var gd = l1[aB];
							bA.gR.gU(gd, bL.fW(nc * gt[gd], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gt = ag.gt, l1 = al.l1, nc = aD.data.aIncomeData, aB = al.kw - 1; 0 <= aB; aB--) {
								var gd = l1[aB];
								bA.gR.gU(gd, bL.fW(nc[gd] * gt[gd], 128))
							}
						}();
					aKB(18)
				}
			}(), bf.kN() % 100 == 99)) {
			if (aK9(), 0 === aD.data.tIncomeType) aKC(32);
			else if (1 === aD.data.tIncomeType) aKC(aD.data.tIncomeValue);
			else
				for (var gt = ag.gt, l1 = al.l1, nc = aD.data.tIncomeData, aB = al.kw - 1; 0 <= aB; aB--) {
					var gd = l1[aB];
					bA.gR.gU(gd, bL.fW(nc[gd] * gt[gd], 32))
				}
			aKB(8)
		}
	}, this.k6 = function(player) {
		return Math.min(100 * ag.gt[player], aD.a5S)
	}, this.pQ = function(player, pR) {
		bq.pn(player, pR, bO.fc[0], 0), bA.gR.gU(pR, bO.fc[0]), bd.po(player, pR), af.aK2(player, bO.fc[0] + bO.fc[1]), af.pp(pR, bO.fc[0]), bA.gR.ma(player)
	}, this.aK3 = function() {
		for (var f5 = al.kw, a0p = al.l1, lL = 0, a4Z = ag.h7, aB = 0; aB < f5; aB++) lL += a4Z[a0p[aB]];
		return lL
	}, this.aK4 = function(aK5) {
		for (var gd, f5 = al.kw, a0p = al.l1, lL = 0, a4Z = ag.h7, f3 = bg.f3, aB = 0; aB < f5; aB++) f3[gd = a0p[aB]] === aK5 && (lL += a4Z[gd]);
		return lL
	}
}

function cb() {
	var aKG, aKH, aKI, aKJ, aKK, aKL, aKM, aKN, aKO, aKP, aKQ, aKR, aKS, aKT, aKU, aKV, aKW, aKX, aKZ, aKa, aDV, aKb, aKc, aKi, aKj, aKY = null,
		aKe = 0,
		aKf = !1,
		aKg = new Float32Array(4),
		aKh = 0,
		aBT = 112,
		aKk = 0;

	function qw() {
		aKO = Math.floor(+h.iF), aKP = Math.floor(.5 * aKO), aKY.width = h.i, aKY.height = h.j, aKZ = aKY.getContext("2d", {
			alpha: !0
		}), bA.qt.textAlign(aKZ, 1), bA.qt.textBaseline(aKZ, 1), aKZ.imageSmoothingEnabled = !0
	}

	function aKl() {
		var aB, aKq;
		for (vZ.font = bA.qt.sk(1, 100 * aKQ), aKq = 80 / Math.floor(vZ.measureText(bA.rs.a0I(aD.a4b)).width), vZ.font = bA.qt.sk(1, 100), aB = aD.f2 - 1; 0 <= aB; aB--) aKN[aB] = 100 / Math.floor(vZ.measureText(ag.zU[aB]).width), aKM[aB] = Math.min(
			aKq, aKN[aB])
	}

	function aKr(aB) {
		return !aKk || (aB = ag.h7[aB]) < 1e6 ? 1 : aB < 1e7 ? aKg[0] : aKg[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aKp(i7) {
		aKf = !1, aKe = bf.eT, aKX = !1, aKW = 1, aKU = aKV = 0, i7.clearRect(0, 0, h.i, h.j);
		for (var aKx, aKy, aB, aKz, fontSize, aL0, nQ = ii / iG, nR = ij / iG, nd = (h.i + ii) / iG, ne = (h.j + ij) / iG, aL1 = 0 !== ag.mz[aD.ep] && !bA.gR.jn(aD.ep), fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO], (fontSize = Math.floor(aKT * iG *
			aKr(aB) * aKM[aB] * aKK[aB])) < aKS || aKO <= fontSize || aKI[aB] + aKK[aB] > nQ && aKI[aB] < nd && aKJ[aB] + aKL[aB] > nR && aKJ[aB] < ne && (aKx = Math.floor(h.i * (aKI[aB] + aKK[aB] / 2 - nQ) / (nd - nQ)), aKy = Math.floor(h.j * (
			aKJ[aB] + aKL[aB] / 2 - nR) / (ne - nR) - .1 * fontSize), aKz = ac.a9O[aB], i7.font = bA.qt.sk(1 === ag.a4P[aB] ? 4 : 1, fontSize), i7.fillStyle = aL2(fontSize, aKz % 2), aKk ? aL3(i7, aB, fontSize, aKx, aKy, aKz) : aL4(aB,
			fontSize, aKx, aKy, i7), aKX = !0, 0 < aDV[aB] ? function(aKx, aKy, fontSize, aB, i7) {
			0 === kB[aB] ? aj.s9.a09(aKa[aB]) ? (function(aKx, aKy, fontSize, player, pc, i7) {
				for (var y8 = aKy, i6 = (i7.globalAlpha = aLC(fontSize), aKr(player) * (aKk ? aKh : aKN[player])), y7 = aKx - .5 * fontSize / i6 - .9 * fontSize, fP = 0; fP < 2; fP++) i7.fillText(aj.s9.a01(pc), y7, y8), y7 = aKx +
					.5 * fontSize / i6 + .9 * fontSize;
				i7.globalAlpha = 1
			}(aKx, aKy, fontSize, aB, aKa[aB], i7), aL6(aKx, aKy, fontSize, 0, 0, i7)) : aj.s9.a0B(aKa[aB]) ? (aLF(aKx, aKy, fontSize, aKa[aB], 0, i7), aL6(aKx, aKy, fontSize, 0, 1, i7)) : (aLF(aKx, aKy, fontSize, aKa[aB], 1, i7), aL6(
				aKx, aKy, fontSize, 1, 0, i7)) : aLF(aKx, aKy, fontSize, aKa[aB], 0, i7)
		}(aKx, aKy, fontSize, aB, i7) : 0 === kB[aB] && aL6(aKx, aKy, fontSize, 0, 0, i7), aL1 && (0 < aDV[aB + aD.f2] || 0 < aDV[aB + 2 * aD.f2] || 0 < aDV[aB + 3 * aD.f2] || 0 < aDV[aB + 4 * aD.f2]) && function(aKx, aKy, fontSize, aB, i7) {
			var ed, gY = -1;
			for (ed = 4; 1 <= ed; ed--) 0 < aDV[aB + ed * aD.f2] && gY++;
			for (ed = 1; ed < 5; ed++) 0 < aDV[aB + ed * aD.f2] && (! function(aKx, aKy, fontSize, ed, aB, aLA, eU, i7) {
				var a3t;
				if (1 === ed) {
					aB = aKa[aB + aD.f2];
					if (!aj.s9.a0A(aB)) return function(aKx, aKy, fontSize, pc, aLA, i7) {
						i7.globalAlpha = aLC(fontSize);
						aKx -= .534 * aLA * fontSize, aLA = aKy + 1.59 * fontSize;
						i7.font = bA.qt.sk(0, .785 * fontSize), i7.fillText(aj.s9.a01(pc), aKx, aLA), i7.globalAlpha = 1
					}(aKx, aKy, fontSize, aB, aLA, i7);
					a3t = aj.xa.za[aB - 1024 + aj.s9.zm]
				} else a3t = 2 === ed ? aL.a6J()[4].canvas[+(eU < 255)] : (3 === ed ? aL.a6J()[5] : aL.a6J()[6]).canvas[0];
				aB = aj.xa.zb, eU = .8 * fontSize / aB, ed = aKx - .5 * eU * aB - .534 * aLA * fontSize, aKx = aKy + 1.4 * eU * aB;
				i7.setTransform(eU, 0, 0, eU, ed, aKx), i7.globalAlpha = aLC(fontSize), i7.drawImage(a3t, 0, 0), i7.globalAlpha = 1, i7.setTransform(1, 0, 0, 1, 0, 0)
			}(aKx, aKy, fontSize, ed, aB, gY, aDV[aB + ed * aD.f2], i7), gY -= 2)
		}(aKx, aKy, fontSize, aB, i7), (aL0 = aKQ * fontSize) < aKS || (i7.font = bA.qt.sk(1, aL0), aKy += Math.floor(.78 * fontSize), aKk ? aL4(aB, aL0, aKx, aKy, i7) : aL3(i7, aB, aL0, aKx, aKy, aKz)))
	}

	function aL4(aB, fontSize, fC, fE, i7) {
		var ___id = aB;
		var showName = aB < aD.kQ || !__fx.settings.hideBotNames;
		if (showName) i7.fillText(ag.zU[aB], fC, fE), aB < aD.kQ && 2 !== ag.a4P[aB] || (aB = fontSize / aKN[aB], i7.fillRect(fC - .5 * aB, fE + bA.qt.a02 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aKk && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i7.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i7.fillText(__fx.utils.getDensity(___id), fC, showName ? fE + fontSize : fE)
		);
	}

	function aL3(i7, aB, fontSize, aKx, aKy, aKz) {
		var ___id = aB;
		aB = bA.rs.a0I(ag.h7[aB]);
		aKz >> 1 & 1 ? (i7.lineWidth = .05 * fontSize, i7.strokeStyle = aL2(fontSize, aKz % 2), i7.strokeText(aB, aKx, aKy)) : (1 < aKz && (i7.lineWidth = .12 * fontSize, i7.strokeStyle = aL2(fontSize, aKz), i7.strokeText(aB, aKx, aKy)), i7.fillText(
			aB, aKx, aKy));
		aKk || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i7.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i7.fillText(__fx.utils.getDensity(___id), aKx, aKy + fontSize))
	}

	function aL6(aKx, aKy, fontSize, aLA, aLB, i7) {
		var a6o = .95 * fontSize / aKc,
			aKx = aKx - .5 * a6o * aKb + .8 * aLA * fontSize,
			aLA = aKy - 1.76 * a6o * aKc - (.35 - bA.qt.a02 + .7) * aLB * fontSize;
		i7.setTransform(a6o, 0, 0, a6o, aKx, aLA), i7.globalAlpha = aLC(fontSize), i7.drawImage(ab.get(4), 0, 0), i7.globalAlpha = 1, i7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLF(aKx, aKy, fontSize, pc, aLA, i7) {
		var i1, y7, a6o;
		i7.globalAlpha = aLC(fontSize), aj.s9.a0A(pc) ? (i1 = aj.xa.zb, i7.setTransform(a6o = 1.1 * fontSize / i1, 0, 0, a6o, y7 = aKx - .5 * a6o * i1 - .8 * aLA * fontSize, a6o = aKy - 1.55 * a6o * i1), i7.drawImage(aj.xa.za[pc - 1024 + aj.s9.zm],
			0, 0), i7.setTransform(1, 0, 0, 1, 0, 0)) : (y7 = aKx - .8 * aLA * fontSize, a6o = aKy - (.35 - bA.qt.a02 + 1) * fontSize, i7.fillText(aj.s9.a01(pc), y7, a6o)), i7.globalAlpha = 1
	}

	function aL2(fontSize, aKz) {
		return aKP <= fontSize && fontSize < aKO ? bg.aLH[aKz] + aLC(fontSize).toFixed(3) + ")" : bg.aLI[aKz]
	}

	function aLC(fontSize) {
		return aKP <= fontSize && fontSize < aKO ? 1 - (fontSize - aKP) / (aKO - aKP) : 1
	}

	function aLR(i6, i) {
		return 1 + Math.floor(aKR * i6 * i)
	}

	function aLO(aB) {
		for (var left = aKI[aB], fO = aKI[aB] - ag.iy[aB] - 1; 0 <= fO; fO--)
			if (!aLT(aB, --left, aKJ[aB], aKL[aB])) {
				left++;
				break
			} var right = aKI[aB];
		for (fO = ag.iz[aB] - aKI[aB] - aKK[aB]; 0 <= fO; fO--)
			if (!aLT(aB, ++right + aKK[aB] - 1, aKJ[aB], aKL[aB])) {
				right--;
				break
			} var fC = Math.floor((left + right) / 2),
			top = aKJ[aB];
		for (fO = aKJ[aB] - ag.j0[aB] - 1; 0 <= fO; fO--)
			if (!aLU(aB, fC, --top, aKK[aB])) {
				top++;
				break
			} var bottom = aKJ[aB];
		for (fO = ag.j1[aB] - aKJ[aB] - aKL[aB]; 0 <= fO; fO--)
			if (!aLU(aB, fC, ++bottom + aKL[aB] - 1, aKK[aB])) {
				bottom--;
				break
			} var fE = Math.floor((top + bottom) / 2);
		aLL(aB, fC, fE, aKK[aB], aKL[aB]) && (aKI[aB] = fC, aKJ[aB] = fE)
	}

	function aLL(player, fC, fE, i, j) {
		f8 = Math.floor(.2 * i);
		for (var f8, ed = fC + i - 1; fC <= ed; ed--)
			if (!aLT(player, ed, fE, j)) return;
		for (ed = fE + j - 1 - (f8 = (f8 = Math.floor(.25 * j)) < 1 ? 1 : f8); fE + f8 <= ed; ed--)
			if (!aLU(player, fC, ed, i)) return;
		return 1
	}

	function aLT(player, fC, fE, j) {
		return ac.yz(player, 4 * (fE * bS.fG + fC)) && ac.yz(player, 4 * ((fE + j - 1) * bS.fG + fC))
	}

	function aLU(player, fC, fE, i) {
		return ac.yz(player, 4 * (fE * bS.fG + fC)) && ac.yz(player, 4 * (fE * bS.fG + fC + i - 1))
	}
	this.dd = function() {
		if (aKk = bj.eQ.data[7].value || 8 === aD.ki, aKX = !1, aKT = .88, aKQ = .5, aKR = 1.8, aKS = 12 - 3 * bj.eQ.data[9].value, aKH = aKG = 0, aKI = new Uint16Array(aD.f2), aKJ = new Uint16Array(aD.f2), aKK = new Uint16Array(aD.f2), aKL =
			new Uint16Array(aD.f2), aKM = new Float32Array(aD.f2), aKN = new Float32Array(aD.f2), aKa = new Uint16Array(2 * aD.f2), aDV = new Uint8Array(5 * aD.f2), aKi = new Uint8Array(aD.f2), aKj = new Uint8Array(aD.f2), aKY = aKY || document
			.createElement("canvas"), qw(), aKV = aKU = 0, aKW = 1, aKk) {
			var aB, aKq;
			for (aKl(), vZ.font = bA.qt.sk(1, 100), aKq = 100 / Math.floor(vZ.measureText("900 000").width), aB = aD.f2 - 1; 0 <= aB; aB--) aKM[aB] = Math.min(aKq, 2 * aKN[aB]);
			aKh = aKq, aKg[0] = 100 / (aKq * Math.floor(vZ.measureText("5 000 000").width)), aKg[1] = 100 / (aKq * Math.floor(vZ.measureText("50 000 000").width)), aKg[2] = 100 / (aKq * Math.floor(vZ.measureText("500 000 000").width)), aKg[3] =
				100 / (aKq * Math.floor(vZ.measureText("1 000 000 000").width))
		} else aKl();
		! function() {
			var aB;
			for (aB = aD.f2 - 1; 0 <= aB; aB--) ag.gt[aB] < 12 ? (aKI[aB] = ag.iy[aB] + 1, aKJ[aB] = ag.j0[aB] + 1, aKK[aB] = 1, aKL[aB] = 1) : (aKI[aB] = ag.iy[aB], aKJ[aB] = ag.j0[aB] + 1, aKK[aB] = 4, aKL[aB] = 2);
			if (aD.hT)
				for (aB = 0; aB < aD.kQ; aB++) aKK[aB] = 0;
			aKb = ab.get(4).width, aKc = ab.get(4).height
		}()
	}, this.aK2 = function(gd, a62) {
		a62 > 18 * ag.gt[gd] ? (aKj[gd] = 6, ac.a9O[gd] = 2 + ac.a9O[gd] % 2) : (aKi[gd] = 4, (ac.a9O[gd] < 2 || 3 < ac.a9O[gd]) && (ac.a9O[gd] = 6 + ac.a9O[gd] % 2))
	}, this.pp = function(gd, a62) {
		a62 > 6 * ag.gt[gd] ? (aKj[gd] = 6, ac.a9O[gd] = 4 + ac.a9O[gd] % 2) : (aKi[gd] = 4, (ac.a9O[gd] < 4 || 5 < ac.a9O[gd]) && (ac.a9O[gd] = 8 + ac.a9O[gd] % 2))
	}, this.resize = function() {
		qw(), aKp(aKZ)
	}, this.a5O = function() {
		for (var aB = 0; aB < aD.kQ; aB++) ag.iz[aB] - ag.iy[aB] != 3 || ag.j1[aB] - ag.j0[aB] != 3 ? (aKI[aB] = ag.iy[aB] + (ag.iz[aB] !== ag.iy[aB] ? 1 : 0), aKJ[aB] = ag.j0[aB], aKK[aB] = 1, aKL[aB] = 1) : (aKI[aB] = ag.iy[aB], aKJ[aB] = ag
			.j0[aB] + 1, aKK[aB] = 4, aKL[aB] = 2)
	}, this.qS = function(player, eC, aKs) {
		! function(player, eC, aKs) {
			player += eC * aD.f2;
			0 === eC ? aKa[player] === aKs && 0 < aDV[player] ? aDV[player] = 0 : (aKa[player] = aKs, aDV[player] = aj.s9.a09(aKs) ? 255 : 64) : 1 === eC ? (aDV[player] = 64, aKa[player] = aKs) : aDV[player] = aKs
		}(player, eC, aKs), 2 === aD.a11 && this.ml(!0)
	}, this.vY = function() {
		aKX && (1 !== aKW ? (vZ.imageSmoothingEnabled = !0, vZ.setTransform(aKW, 0, 0, aKW, 0, 0), vZ.drawImage(aKY, -aKU / aKW, -aKV / aKW), vZ.setTransform(1, 0, 0, 1, 0, 0), vZ.imageSmoothingEnabled = !1) : vZ.drawImage(aKY, -aKU, -aKV))
	}, this.aAB = function(iP, iS) {
		aKU += iP, aKV += iS
	}, this.a2Z = function(iP, iS) {
		af.aAB(iP, iS)
	}, this.zoom = function(a3S, lf, lg) {
		aKW *= a3S, aKU = (aKU + lf) * a3S - lf, aKV = (aKV + lg) * a3S - lg
	}, this.ml = function(bu) {
		return !(!aKf && !bu && bf.eT < aKe + (1 === aKW && 0 === aKU && 0 === aKV && (aD.a5r() || aD.hT || 2 === aD.a11) ? 1e3 : aBT) || (aKp(aKZ), 0))
	}, this.aKv = function(aB) {
		return aKr(aB) * aKM[aB]
	}, this.aKw = function(player) {
		return aKM[player]
	}, this.aIp = function() {
		aKf = !0
	}, this.eY = function() {
		bf.kN() % 10 == 9 && (aKf = aKf || aD.a5t() && !aD.a5r()), !aD.a5r() && 4 <= ++aKH && function() {
			var aB, fO, fP;
			for (aKH = 0, fP = 4; 1 <= fP; fP--)
				for (fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO] + fP * aD.f2, 0 < aDV[aB] && aDV[aB] < 255 && aDV[aB]--;
			if (2 !== aD.a11)
				for (fO = al.kw - 1; 0 <= fO; fO--) aB = al.l1[fO], 0 < aDV[aB] && aDV[aB] < 255 && aDV[aB]--
		}();
		var aB, fO, f5 = Math.floor(.1 * al.kw);
		for (f5 = (f5 = f5 < 8 ? 8 : f5) > al.kw ? al.kw : f5, aB = aKG + f5 - 1; aKG <= aB; aB--) fO = aB % al.kw, ! function(aB) {
			var i6 = aKr(aB) * aKM[aB];
			0 < aKK[aB] && aLL(aB, aKI[aB], aKJ[aB], aKK[aB], aKL[aB]) ? ! function(aB) {
				for (var fC, fE, i, j, ej = !1, fP = 0; fP < 8; fP++) {
					if (i = aKK[aB] + 2, j = aKL[aB] + 2, i > ag.iz[aB] - ag.iy[aB] + 1 || j > ag.j1[aB] - ag.j0[aB] + 1) return ej;
					if (fC = aKI[aB] - 1, fE = aKJ[aB] - 1, !aLL(aB, fC, fE, i, j)) return ej;
					aKI[aB] = fC, aKJ[aB] = fE, aKK[aB] = i, aKL[aB] = j, ej = !0
				}
				return ej
			}(aB) && function(aB, i6) {
				for (var fC, fE, i, j, ej = !1, aDe = aKK[aB], nc = 1 + Math.floor(.02 * aDe), fP = 1; fP < 5; fP++) {
					if ((i = aDe + fP * nc) > ag.iz[aB] - ag.iy[aB] + 1) return ej;
					if ((j = aLR(i6, i)) > ag.j1[aB] - ag.j0[aB] + 1) return ej;
					fC = ag.iy[aB] + Math.floor(Math.random() * (ag.iz[aB] - ag.iy[aB] + 2 - i)), fE = ag.j0[aB] + Math.floor(Math.random() * (ag.j1[aB] - ag.j0[aB] + 2 - j)), aLL(aB, fC, fE, i, j) && (aKI[aB] = fC, aKJ[aB] = fE, aKK[
						aB] = i, aKL[aB] = j, ej = !0)
				}
				return ej
			}(aB, i6) && aLO(aB) : ! function(aB, i6) {
				var j, fC = aKI[aB] + 1,
					fE = aKJ[aB] + 1,
					i = aKK[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKK[aB] = 0;
						break
					}
					if (j = aLR(i6, i), aLL(aB, fC, fE, i, j)) return aKI[aB] = fC, aKJ[aB] = fE, aKK[aB] = i, aKL[aB] = j, 1;
					fC++, fE++, i -= 2
				}
				return
			}(aB, i6) ? function(aB, i6) {
				var fC, fE, i, j, fP, ni, jg = ag.iz[aB] - ag.iy[aB] + 1,
					aLS = Math.floor(.02 * jg);
				for (ni = -6 * (aLS = aLS < 1 ? 1 : aLS), fP = jg; ni <= fP; fP -= aLS)
					if (j = aLR(i6, i = 0 < fP ? fP : 1), fC = ag.iy[aB] + Math.floor(Math.random() * (ag.iz[aB] - ag.iy[aB] + 2 - i)), fE = ag.j0[aB] + Math.floor(Math.random() * (ag.j1[aB] - ag.j0[aB] + 2 - j)), aLL(aB, fC, fE, i, j))
						return aKI[aB] = fC, aKJ[aB] = fE, aKK[aB] = i, aKL[aB] = j
			}(aB, i6) : aLO(aB)
		}(al.l1[fO]);
		aKG = (aKG += f5) % al.kw
	}, this.mg = function() {
		var aB, gd, a07, a08;
		if (bf.kN() % 4 == 1)
			for (aB = al.kw - 1; 0 <= aB; aB--) gd = al.l1[aB], ac.a9O[gd] < 2 || ((a07 = Math.max(aKi[gd] - 1, 0)) === (a08 = Math.max(aKj[gd] - 1, 0)) ? 0 === a07 && (ac.a9O[gd] %= 2) : 0 === a08 && ac.a9O[gd] < 6 && (ac.a9O[gd] += 4), aKi[
				gd] = a07, aKj[gd] = a08)
	}, this.a7V = function(player) {
		var aB = player + 2 * aD.f2,
			eU = aDV[aB];
		return 0 < eU && (aN.a19(50, player), aDV[aB] = 0, 255 === eU)
	}, this.a6Y = function(player) {
		return 255 === aDV[player + 2 * aD.f2]
	}
}

function cd() {
	var aLV, aLW, aLX;
	this.dd = function() {
		aLV =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLW =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aLX = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7m = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEW = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLV.length - 1; 0 <= aB; aB--)
			for (var fO = a7m.length - 1; 0 <= fO; fO--) aLV[aB] = aLV[aB].replace(a7m[fO], aEW[fO]);
		if (__fx.settings.realisticNames) aLV = realisticNames;
	}, this.a5e = function() {
		var f5 = aD.kQ,
			zU = ag.zU,
			a1h = ag.a1h,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f5)
			for (var aB = 0; aB < f5; aB++) zU[aB] = a1h[aB] = "Player " + ay.jh(1e3);
		else
			for (aB = 0; aB < f5; aB++) zU[aB] = a1h[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.ki) {
			for (var eB = ay.random(), aLd = aLX, aLe = aLW, ho = aE.ho, f5 = aLd.length, lL = aD.data.teamPlayerCount[7], zU = ag.zU, a1h = ag.a1h, aB = lL - 1; aB >= aD.kQ; aB--) zU[aB] = a1h[aB] = aLd[(aB + eB) % f5];
			for (f5 = aLe.length - 1, aB = lL; aB < aD.f2; aB++) zU[aB] = a1h[aB] = aLe[ho[aB] ? f5 : aB % f5]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f5 = aD.f2, zU = ag.zU, a1h = ag.a1h, playerNamesData = aD.data.playerNamesData, aB = aD.kQ; aB < f5; aB++) zU[aB] = a1h[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var zU = ag.zU, a1h = ag.a1h, aB = aD.kQ; aB < aD.f2; aB++) zU[aB] = a1h[aB] = "Bot " + ay.jh(1e3)
		} : function() {
			for (var aLf = aLV, f5 = aLf.length, eB = ay.random(), zU = ag.zU, a1h = ag.a1h, aB = aD.kQ; aB < aD.f2; aB++) zU[aB] = a1h[aB] = aLf[(aB + eB) % f5]
		})()
	}
}

function cw() {
	this.aLg = [], this.aLh = [], this.dd = function() {
		this.aLg = [], this.aLh = []
	}, this.eY = function() {
		0 <= this.aLg.length && this.aLi(this.aLg), 0 <= this.aLh.length && this.aLi(this.aLh)
	}, this.aLi = function(g) {
		for (var fP = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eT--, g[aB].eT <= 0) {
				fP = aB;
				break
			} for (aB = fP; 0 <= aB; aB--) g.shift()
	}, this.a6R = function(id, a0p, aLj) {
		return this.fQ(this.aLg, id, a0p, aLj)
	}, this.aLk = function(id, a0p, aLj) {
		return this.fQ(this.aLh, id, a0p, aLj)
	}, this.fQ = function(g, id, a0p, aLj) {
		return ! function(g, id, a0p) {
			var aB, hx;
			for (aB = a0p.length - 1; 0 <= aB; aB--)
				for (hx = g.length - 1; 0 <= hx; hx--)
					if (g[hx].player === a0p[aB] && id === g[hx].id) return 1;
			return
		}(g, id, a0p) && (aLj && function(g, id, a0p) {
			var aB;
			for (aB = a0p.length - 1; 0 <= aB; aB--) g.push({
				player: a0p[aB],
				id: id,
				eT: 384
			})
		}(g, id, a0p), !0)
	}
}

function cc() {
	this.a1h = new Array(aD.f2), this.zU = new Array(aD.f2), this.a4P = new Uint8Array(aD.f2), this.mz = new Uint8Array(aD.f2), this.iy = new Uint16Array(aD.f2), this.j0 = new Uint16Array(aD.f2), this.iz = new Uint16Array(aD.f2), this.j1 =
		new Uint16Array(aD.f2), this.gt = new Uint32Array(aD.f2), this.yZ = new Uint32Array(aD.f2), this.h7 = new Uint32Array(aD.f2), this.gX = null, this.gl = null, this.gm = null, this.fU = null, this.qI = new Uint16Array(aD.f2), this.jT =
		new Uint16Array(aD.f2), this.jU = new Uint16Array(aD.f2), this.a1c = new Uint16Array(aD.f2), this.a1a = new Uint8Array(aD.f2), this.a4Y = new Uint16Array(aD.f2), this.dd = function() {
			this.a1h.fill(""), this.zU.fill(""), this.a4P.fill(0), this.mz.fill(0), this.iy.fill(0), this.j0.fill(0), this.iz.fill(0), this.j1.fill(0), this.gt.fill(0), this.yZ.fill(0), this.h7.fill(0), this.gX = new Array(aD.f2), this.gl =
				new Array(aD.f2), this.gm = new Array(aD.f2), this.fU = new Array(aD.f2), this.qI.fill(0), this.jT.fill(0), this.jU.fill(0), this.a1c.fill(0), this.a1a.fill(0), this.a4Y.fill(0)
		}
}

function cu() {
	this.aE1 = function(player) {
		aG.my(player), aD.a13++, ag.a4P[player] = 2, ag.a1c[player] = bi.a1r.aIx(), player === aD.ep && (aX.show(!1, !1), aW.aCA(), bR.a0m.a1Y()), af.a7V(player)
	}
}

function cV() {
	this.l1 = null, this.kw = 0, this.a5i = function() {
		for (this.kw = 0, aB = aD.f2 - 1; 0 <= aB; aB--) 0 !== ag.mz[aB] && this.kw++;
		this.l1 = new Uint16Array(this.kw);
		for (var f5 = 0, aB = 0; aB < aD.f2; aB++) 0 !== ag.mz[aB] && (this.l1[f5++] = aB)
	}, this.mf = function() {
		for (var gt = ag.gt, yZ = ag.yZ, a1a = ag.a1a, l1 = al.l1, aB = al.kw - 1; 0 <= aB; aB--) {
			var gd = l1[aB],
				eU = gt[gd],
				lL = yZ[gd];
			eU <= bL.fW(lL, 4) ? ak.dl(gd) : lL <= eU ? 250 <= (yZ[gd] = eU) && (a1a[gd] = 1) : yZ[gd] = lL - Math.max(1, bL.fW(lL - eU, 1e3))
		}
		this.aLo()
	}, this.aLo = function() {
		for (var mz = ag.mz, lK = this.l1, aCs = this.kw, aB = aCs - 1; 0 <= aB; aB--) 0 === mz[lK[aB]] && (lK[aB] = lK[--aCs]);
		this.kw = aCs
	}
}

function cW() {
	var aLp = new Uint16Array(aD.f2),
		aLq = 0;

	function aLu(a7b, aLs) {
		var ed = bf.kN();
		return 3213 <= ed ? 4 + bL.fW(100 * aLs, ae.k6(a7b)) : (a7b = 1 + bL.fW(aD.kA, 300), ed < 357 ? 2 + bL.fW(100 * aLs, a7b) : ed < 714 ? 2 + bL.fW(100 * aLs, 4 * a7b) : ed < 1071 ? 2 + bL.fW(100 * aLs, 10 * a7b) : ed < 2142 ? 2 + bL.fW(100 *
			aLs, 30 * a7b) : 2 + bL.fW(100 * aLs, 100 * a7b))
	}

	function aLt(a7b) {
		return aD.kk || 7 <= aD.ki || 4284 <= bf.kN() || bA.gR.jn(a7b)
	}
	this.dd = function() {
		aLp.fill(0), aLq = 15
	}, this.hj = function(pR) {
		var player = aD.ep;
		return !!bA.gR.qK(player, pR) && !(!bA.gR.pk(player, bA.gR.ig(player, aR.hZ()), pR) || (player = pR, pR = bO.fc[0], !aLt(player) && aLp[player] + aLu(player, pR) > aLq))
	}, this.ec = function(a7b, aLs) {
		if (!aLt(a7b)) {
			aLs = aLu(a7b, aLs);
			if (aLp[a7b] + aLs > aLq) return !1;
			aLp[a7b] += aLs
		}
		return !0
	}, this.eY = function() {
		bf.kN() % 100 == 99 && (bf.kN() < 1071 ? aLq += 4 : bf.kN() < 2142 ? aLq += 6 : bf.kN() < 3213 ? aLq += 8 : aLq += 10)
	}
}

function ce() {
	var aLv;
	this.kr = null, this.kq = 0, this.dd = function() {
		aLv = [], 9 === aD.ki && this.aLw()
	}, this.aLw = function() {
		this.kr = [0, 0, 0, 0, 0, 0];
		for (var aLx = [256, 227, 170, 148, 100, this.kq = 0, 0, 0], aLy = [0, 8, 24, 30, 46, 70, 256, 333], aLz = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kQ, aB = 1; aB < aLx.length; aB++)
			if (j <= aLy[aB]) {
				this.kq = aLx[aB - 1] - bL.fW((j - aLy[aB - 1]) * (aLx[aB - 1] - aLx[aB]), aLy[aB] - aLy[aB - 1]), this.kr[5] = aLz[aB - 1] - bL.fW((j - aLy[aB - 1]) * (aLz[aB - 1] - aLz[aB]), aLy[aB] - aLy[aB - 1]), this.kr[0] = aD.f2 - j - this
					.kq - this.kr[5];
				break
			} aD.km = aD.f2 - aD.kQ, aD.data.numberTeams = (0 < aD.kQ) + (0 < aD.km), aD.data.playerCount = aD.y5 = aD.kQ + aD.km, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kQ + this.kq, aD.km - this.kq]), aD.a5X.a5c()
	}, this.aJ4 = function(player) {
		aLv.push({
			player: player,
			gY: 14 + ay.jh(20)
		})
	}, this.eY = function() {
		if (9 === aD.ki)
			for (var aB = aLv.length - 1; 0 <= aB; aB--) --aLv[aB].gY <= 0 && (af.qS(aLv[aB].player, 0, aj.s9.zp + aj.s9.a03), aLv.splice(aB))
	}
}

function dB() {
	function aMF() {
		return {
			fG: bS.fG,
			fH: bS.fH,
			xX: bS.xX,
			xT: bS.xT,
			xU: bS.xU,
			xY: bS.xY,
			el: bS.el,
			mapSeed: bS.mapSeed,
			xV: bS.xV
		}
	}

	function aM7(aB) {
		return 1 !== aB && bS.aEg(aB) && aB !== bS.aMH()
	}
	this.aM1 = 25, this.aM2 = 13, this.aJG = 4096, this.fG = 0, this.fH = 0, this.xX = null, this.xT = null, this.xU = null, this.xY = null, this.el = 0, this.mapSeed = 0, this.xV = !1, this.xW = new aM3, this.xN = new aM4, this.a7t = new aM5, this
		.dd = function() {
			this.xN.dd()
		}, this.a7 = function(map, aM6) {
			((map %= this.aM1) !== this.el || aM7(this.el) && aM6 !== this.mapSeed) && (this.xV = !1, this.xW.aM8(), ay.a5d(map), this.el = map, this.mapSeed = aM6, aM7(map) && (bS.xN.xO[map].aM9 = aM6), this.aEg(this.el) ? (map = bS.xN.xO[this.el],
				this.fG = map.i, this.fH = map.j, ay.a5d(map.aM9), aq.a7([this.fG, this.fH, map.n4, map.n1]), aMB(), ap.aMC(), aq.aMD()) : aMA())
		}, this.aME = function(map, aM6) {
			var fo = aMF(),
				map = (this.a7(map, aM6), this.xW.aM8(), aMF());
			return aM6 = fo, bS.fG = aM6.fG, bS.fH = aM6.fH, bS.xX = aM6.xX, bS.xT = aM6.xT, bS.xU = aM6.xU, bS.xY = aM6.xY, bS.el = aM6.el, bS.mapSeed = aM6.mapSeed, bS.xV = aM6.xV, map
		}, this.a5y = function(canvas) {
			canvas && this.xX !== canvas && (this.fG = canvas.width, this.fH = canvas.height, this.xX = canvas, this.xT = this.xX.getContext("2d", {
				alpha: !1
			}), this.i4 = this.xT.getImageData(0, 0, this.fG, this.fH), this.xY = this.i4.data, this.el = this.aMH(), this.mapSeed = 0, bS.xN.xO[this.el].name = aD.data.mapName)
		}, this.ek = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aMH()
		}, this.aMI = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aMJ = function(aB) {
			return 1 === aB
		}, this.aMH = function() {
			return this.aM1
		}, this.aEg = function(aB) {
			return void 0 === this.xN.xO[aB].aMK
		}, this.a5x = function(ql) {
			return 0 === ql.mapType ? ql.mapProceduralIndex < 10 ? ql.mapProceduralIndex : 10 + ql.mapProceduralIndex : 1 === ql.mapType ? 10 <= ql.mapRealisticIndex ? 22 + ql.mapRealisticIndex - 10 : ql.mapRealisticIndex + 10 : void 0
		}, this.aEh = function(ql, aML) {
			0 === ql.mapType ? ql.mapProceduralIndex = aML < 10 ? aML : aML - 10 : 1 === ql.mapType && (ql.mapRealisticIndex = aML - (22 <= aML ? 12 : 10))
		}
}

function aM3() {
	function aMU() {
		bS.xW.eY()
	}

	function aMa(gd, aMZ) {
		0 < aMZ && (bS.xY[gd] += aMZ, bS.xY[gd + 1] += aMZ, bS.xY[gd + 2] += aMZ)
	}

	function iJ(gd) {
		return bS.xY[gd + 2] > bS.xY[gd] && bS.xY[gd + 2] > bS.xY[gd + 1]
	}
	this.aAN = -1, this.a24 = 0, this.aMM = 0, this.aMN = 8, this.aMO = 32, this.aMP = 8, this.aMQ = 32, this.aMR = [0, 0], this.a9O = [0, 0, 0, 0], this.is = null, this.aMS = !0, this.aMT = !1, this.aM8 = function() {
		-1 !== this.aAN && clearTimeout(this.aAN), this.aAN = -1, this.is = null, aq.aMD()
	}, this.dd = function() {
		7 === aa.a2D() || this.aMT || (this.aMS = !0, this.a24 = 0, this.aMM = 1, this.aMR = [bS.xN.xO[bS.el].xp[0], bS.xN.xO[bS.el].xq[0]], this.a9O = [bS.xN.xO[bS.el].aMK[3], bS.xN.xO[bS.el].aMK[4], bS.xN.xO[bS.el].aMK[5], bS.xN.xO[bS.el].aMK[
			6]], this.aMN = bS.xN.xO[bS.el].aMK[7], this.aMO = bS.xN.xO[bS.el].aMK[8], this.aMP = bS.xN.xO[bS.el].aMK[9], this.aMQ = bS.xN.xO[bS.el].aMK[10], this.aMS ? this.aAN = setTimeout(aMU, 16) : this.eY())
	}, this.eY = function() {
		if (8 === aa.a2D() && aH.nI()) this.aAN = setTimeout(aMU, 16);
		else {
			if (0 === this.a24) {
				var aM9 = ay.aMV();
				if (ay.a5d(bS.xN.xO[bS.el].aMK[2]), aq.a7([bS.fG, bS.fH, bS.xN.xO[bS.el].aMK[0], bS.xN.xO[bS.el].aMK[1]]), ay.a5d(aM9), this.is = aq.aMW(), this.a24++, this.aMS) return void(this.aAN = setTimeout(aMU, 16))
			}
			for (var gd, er, aM9 = this.aMS ? 10 : 1e6, aM9 = bS.fH - this.aMM - 1 < aM9 ? bS.fH - this.aMM - 1 : aM9, ym = this.aMM + aM9, fE = this.aMM; fE < ym; fE++)
				for (var fC = 1; fC < bS.fG - 1; fC++) iJ(gd = 4 * (er = fC + fE * bS.fG)) ? this.aMX(gd, er, 1) : (this.aMX(gd, er, 0), function(fC, fE, gd) {
					return 1 < fC && iJ(gd - 4) || fC < bS.fG - 2 && iJ(gd + 4) || 1 < fE && iJ(gd - 4 * bS.fG) || fE < bS.fH - 2 && iJ(gd + 4 * bS.fG)
				}(fC, fE, gd) && this.aMY(fC, fE));
			this.aMM = ym, this.aMM >= bS.fH - 1 ? (bS.xT.putImageData(bS.xU, 0, 0, 1, 1, bS.fG - 2, bS.fH - 2), bf.dk = !0, this.aM8()) : this.aMS && (this.aAN = setTimeout(aMU, 16))
		}
	}, this.aMX = function(gd, er, eC) {
		aMa(gd, Math.floor(this.aMR[eC] + this.a9O[eC] * this.is[er] / 1e4) - bS.xY[gd])
	}, this.aMb = function(gd, eB, aMc, eC, a9O) {
		aMa(gd, Math.floor(this.aMR[eC] + (1 - eB / aMc) * a9O) - bS.xY[gd])
	}, this.aMY = function(lf, lg) {
		for (var gd, eB, aMc, aAD = lf - this.aMO, aMd = lg - this.aMO, yn = lf + this.aMO, ym = lg + this.aMO, aAD = aAD < 1 ? 1 : aAD, yn = yn > bS.fG - 2 ? bS.fG - 2 : yn, ym = ym > bS.fH - 2 ? bS.fH - 2 : ym, fE = aMd < 1 ? 1 : aMd; fE <=
			ym; fE++)
			for (var fC = aAD; fC <= yn; fC++) iJ(gd = 4 * (fC + fE * bS.fG)) ? (aMc = this.aMN + (this.aMO - this.aMN) * this.is[fC + bS.fG * fE] / 1e4, Math.abs(lf - fC) > aMc || Math.abs(lg - fE) > aMc || aMc <= (eB = Math.sqrt((lf - fC) * (
				lf - fC) + (lg - fE) * (lg - fE))) || this.aMb(gd, eB, aMc, 1, this.a9O[3])) : (aMc = this.aMP + (this.aMQ - this.aMP) * this.is[fC + bS.fG * fE] / 1e4, Math.abs(lf - fC) > aMc || Math.abs(lg - fE) > aMc || aMc <= (eB = Math
				.sqrt((lf - fC) * (lf - fC) + (lg - fE) * (lg - fE))) || this.aMb(gd, eB, aMc, 0, this.a9O[2]))
	}
}

function aMB() {
	var su = aMe(bS.el);
	su && aMf(su[0], su[1], su[2], su[3], su[4])
}

function aMe(el) {
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

function aMf(aMg, aMh, aMi, aMj, aMk) {
	for (var fC, fE, aMm, aMn, a3S, aMp, iO = aMg.length - 1, aMl = bS.fG + bS.fH, f5 = (aMl *= aMl, aMi.length), aMo = Array(f5), aB = f5 - 1; 0 <= aB; aB--) aMo[aB] = aMi[aB] * aMi[aB];
	var aMq = new Array(f5),
		aDS = new Array(f5),
		aMr = new Array(f5),
		fX = aq.aMW();
	if (void 0 === aMk)
		for (aMk = new Array(f5), aB = f5 - 1; 0 <= aB; aB--) aMk[aB] = 0;
	for (aB = 1; aB < f5; aB++) aMq[aB] = aMo[aB] - aMo[aB - 1], aDS[aB] = aMj[aB] - aMj[aB - 1], aMr[aB] = aMk[aB] - aMk[aB - 1];
	for (fC = bS.fG - 1; 0 <= fC; fC--)
		for (fE = bS.fH - 1; 0 <= fE; fE--) {
			for (aMm = aMl, aB = iO; 0 <= aB; aB--) aMm = (aMn = (fC - aMg[aB]) * (fC - aMg[aB]) + (fE - aMh[aB]) * (fE - aMh[aB])) < aMm ? aMn : aMm;
			for (a3S = aMj[f5 - 1], aMp = aMk[f5 - 1], aB = 1; aB < f5; aB++)
				if (aMm < aMo[aB]) {
					a3S = aMj[aB - 1] + aIK((aMm - aMo[aB - 1]) * aDS[aB], aMq[aB]), aMp = aMk[aB - 1] + aIK((aMm - aMo[aB - 1]) * aMr[aB], aMq[aB]);
					break
				} aMs(bS.fG * fE + fC, a3S, aMp, fX)
		}
}

function aMs(eC, a3S, aMp, fX) {
	a3S < 500 ? fX[eC] = bL.fW(fX[eC] * a3S * 2, 1e3) : 500 < a3S && (fX[eC] += bL.fW(2 * (1e4 - fX[eC]) * (a3S - 500), 1e3)), fX[eC] += bL.fW(aMp * (10 * a3S - fX[eC]), 1e3)
}

function cg() {
	var aMt;

	function aN3(a3t, i6, fC, fE, globalAlpha) {
		bS.xT.save(), bS.xT.globalAlpha = globalAlpha, bS.xT.imageSmoothingEnabled = !1, bS.xT.scale(i6, i6), bS.xT.drawImage(a3t, Math.floor(fC * (bS.fG / i6 - a3t.width)), Math.floor(fE * (bS.fH / i6 - a3t.height))), bS.xT.restore()
	}
	this.a7q = 0, this.a7r = 0, this.a7s = 0, this.a7t = 0, this.dd = function() {
		(aMt = new Array(bS.aM1))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eB: [220, 250, 255, 220],
			tb: [190, 220, 0, 0],
			fP: [170, 200, 0, 0]
		}, aMt[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eB: [25, 0, 100, 0, 25],
			tb: [25, 0, 0, 0, 25],
			fP: [25, 0, 0, 0, 25]
		}, aMt[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eB: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tb: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fP: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMt[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eB: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tb: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fP: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMt[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eB: [10, 10, 20, 10, 10, 170, 212],
			tb: [20, 20, 60, 100, 100, 110, 170],
			fP: [70, 70, 160, 30, 30, 60, 120]
		}, aMt[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eB: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tb: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fP: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMt[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eB: [10, 10, 60, 255, 255, 200, 200],
			tb: [10, 10, 60, 255, 255, 200, 200],
			fP: [80, 80, 255, 255, 255, 200, 200]
		}, aMt[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eB: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tb: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fP: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMt[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eB: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tb: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fP: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMt[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eB: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tb: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fP: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMt[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eB: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tb: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fP: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMt[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eB: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tb: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fP: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMC = function() {
		var aN2, aB, fO, fo, i4 = function() {
				var i4;
				return bS.xX = document.createElement("canvas"), bS.xX.width = bS.fG, bS.xX.height = bS.fH, bS.xT = bS.xX.getContext("2d", {
					alpha: !1
				}), i4 = bS.xT.getImageData(0, 0, bS.fG, bS.fH), bS.xY = i4.data, i4
			}(),
			i = aMt[bS.el].i,
			eB = aMt[bS.el].eB,
			tb = aMt[bS.el].tb,
			fP = aMt[bS.el].fP,
			fX = aq.aMW(),
			f5 = i.length - 2,
			aMx = new Array(1 + f5),
			aMy = new Array(1 + f5),
			aMz = new Array(1 + f5),
			aN0 = new Array(1 + f5);
		for (fO = f5; 0 <= fO; fO--) aMx[fO] = i[fO + 1] - i[fO], aMy[fO] = eB[fO + 1] - eB[fO], aMz[fO] = tb[fO + 1] - tb[fO], aN0[fO] = fP[fO + 1] - fP[fO];
		for (aB = bS.fG * bS.fH - 1; 0 <= aB; aB--)
			for (fO = f5; 0 <= fO; fO--)
				if (fX[aB] >= i[fO]) {
					fo = fX[aB] - i[fO], bS.xY[4 * aB] = eB[fO] + aIK(aMy[fO] * fo, aMx[fO]), bS.xY[4 * aB + 1] = tb[fO] + aIK(aMz[fO] * fo, aMx[fO]), bS.xY[4 * aB + 2] = fP[fO] + aIK(aN0[fO] * fo, aMx[fO]), bS.xY[4 * aB + 3] = 255;
					break
				} bS.xT.putImageData(i4, 0, 0), bS.aMJ(bS.el) && ab.tf() && bS.aMJ(bS.el) && (i4 = ab.aHU("arena"), aN2 = ab.aHU("territorial.io"), aN3(i4, 5, .5, .5, .1), aN3(aN2, 2, .5, .45, .1)), bS.xV = !0, bf.dk = !0
	}, this.a5g = function() {
		for (var gd, fC, fE, aN4, hv, fq, a7r = 0, i = bS.fG, j = bS.fH, fo = i * j * 4, aN5 = aD1, aN6 = bS.xY, aB = i - 1; 0 <= aB; aB--) aN5[(gd = aB << 2) + 2] = aN5[fo - gd - 2] = 3;
		for (fo = 4 * i, aB = j - 1; 0 <= aB; aB--) aN5[(gd = aB * fo) + 2] = aN5[gd + fo - 2] = 3;
		for (aN4 = i - 1, hv = j - 1, fE = 1; fE < hv; fE++)
			for (fo = fE * i, fC = 1; fC < aN4; fC++) fq = 1 - (aN6[(gd = fo + fC << 2) + 2] > aN6[gd + 1] && aN6[gd + 2] > aN6[gd]), aN5[gd + 2] = 6 - 5 * fq, a7r += fq;
		this.a7q = (i - 2) * (j - 2), this.a7t = 0, bS.ek(bS.el) && (bS.a7t.aN7(), bS.a7t.aN8(4, 5)), this.a7r = aD.kA = a7r - this.a7t, this.a7s = this.a7q - this.a7r - this.a7t, this.a7s && (bS.a7t.aN8(6, 2), bS.a7t.aN9())
	}
}

function aMA() {
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
		23 === bS.el ? qa =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bS.el && (qa =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xG).xI(qa)
}

function aM4() {
	this.xO = null, this.aNA = null, this.aNB = null, this.dd = function() {
		this.aNC = [L(135), L(136), L(137), L(138), L(139), L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), "Mare Nostrum"];
		var aND = [120, 105, 92],
			cos = [12, 12, 60],
			aNE = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aNF = [140, 130, 120],
			aNG = [12, 12, 76],
			aNH = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aNI = [130, 117, 106],
			aNJ = [12, 12, 68],
			aNK = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xO = new Array(bS.aM1 + 1), this.xO[0] = {
			i: 230,
			j: 230,
			n4: 1e3,
			n1: 2e3,
			aM9: 173
		}, this.xO[1] = {
			i: 800,
			j: 800,
			n4: 100,
			n1: 50,
			aM9: 43
		}, this.xO[2] = {
			i: 512,
			j: 512,
			n4: 128,
			n1: 32,
			aM9: 0
		}, this.xO[3] = {
			i: 960,
			j: 960,
			n4: 60,
			n1: 8,
			aM9: 0
		}, this.xO[4] = {
			i: 900,
			j: 900,
			n4: 100,
			n1: 5,
			aM9: 0
		}, this.xO[5] = {
			i: 1e3,
			j: 1e3,
			n4: 100,
			n1: 40,
			aM9: 0
		}, this.xO[6] = {
			i: 1e3,
			j: 1e3,
			n4: 100,
			n1: 20,
			aM9: 0
		}, this.xO[7] = {
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM9: 0
		}, this.xO[8] = {
			i: 820,
			j: 820,
			n4: 200,
			n1: 100,
			aM9: 0
		}, this.xO[9] = {
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM9: 0
		}, this.xO[10] = {
			xp: aNF,
			xq: aNG,
			aMK: aNH
		}, this.xO[11] = {
			xp: aNI,
			xq: aNJ,
			aMK: aNK
		}, this.xO[12] = {
			xp: aNI,
			xq: aNJ,
			aMK: aNK
		}, this.xO[13] = {
			xp: aND,
			xq: cos,
			aMK: aNE
		}, this.xO[14] = {
			xp: aND,
			xq: cos,
			aMK: aNE
		}, this.xO[15] = {
			xp: aNF,
			xq: aNG,
			aMK: aNH
		}, this.xO[16] = {
			xp: aNF,
			xq: aNG,
			aMK: aNH
		}, this.xO[17] = {
			xp: aND,
			xq: cos,
			aMK: aNE
		}, this.xO[18] = {
			xp: aNI,
			xq: aNJ,
			aMK: aNK
		}, this.xO[19] = {
			xp: aND,
			xq: cos,
			aMK: aNE
		}, this.xO[20] = {
			i: 1024,
			j: 1024,
			n4: 128,
			n1: 32,
			aM9: 0
		}, this.xO[21] = {
			i: 940,
			j: 940,
			n4: 80,
			n1: 8,
			aM9: 0
		}, this.xO[22] = {
			xp: aNI,
			xq: aNJ,
			aMK: aNK
		}, this.xO[23] = {
			xp: aNF,
			xq: aNG,
			aMK: aNH
		}, this.xO[24] = {
			xp: [157, 136, 117],
			xq: [16, 13, 68],
			aMK: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a7p: "[OG] Neutronian"
		};
		for (var aB = 0; aB < bS.aM1; aB++) this.xO[aB].name = this.aNC[aB];
		this.xO[bS.aM1] = {
			name: ""
		}, this.aNA = new Uint8Array(12);
		for (aB = 0; aB < 10; aB++) this.aNA[aB] = aB;
		for (this.aNA[10] = 20, this.aNA[11] = 21, this.aNB = new Uint8Array(bS.aM2), aB = 0; aB < 10; aB++) this.aNB[aB] = 10 + aB;
		this.aNB[10] = 22, this.aNB[11] = 23, this.aNB[12] = 24
	}
}

function aM5() {
	this.aN7 = function() {
		for (var gd, fC, fo, aN5 = aD1, aN6 = bS.xY, i = bS.fG, aN4 = i - 1, hv = bS.fH - 1, gY = 0, fE = 1; fE < hv; fE++)
			for (fo = fE * i, fC = 1; fC < aN4; fC++) aN6[gd = fo + fC << 2] === aN6[1 + gd] && aN6[gd] === aN6[2 + gd] && (gY++, aN5[2 + gd] = 4);
		ap.a7t = gY
	}, this.aN8 = function(aNN, aNO) {
		for (var aN5 = aD1, i = bS.fG, aN4 = i - 1, hv = bS.fH - 1, id = 0, fE = 1; fE < hv; fE++)
			for (var fo = fE * i, fC = 1; fC < aN4; fC++) {
				var ej = 2 + (fo + fC << 2);
				aN5[ej] === aNN && (! function(ej, id, aNN, aNO) {
					var f5 = 1,
						aN5 = aD1,
						f7 = ac.aIB,
						a3f = [ej],
						aNQ = id >> 8 << 1,
						aNR = 255 & id;
					aN5[ej - 2] = aNQ, aN5[ej - 1] = aNR, aN5[ej] = 5;
					for (; f5;) {
						for (var a3g = [], aB = 0; aB < f5; aB++)
							for (var eu = a3f[aB], f8 = 0; f8 < 8; f8++) {
								var f9 = eu + f7[f8];
								aN5[f9] === aNN && (aN5[f9 - 2] = aNQ, aN5[f9 - 1] = aNR, aN5[f9] = aNO, a3g.push(f9))
							}
						f5 = (a3f = a3g).length
					}
				}(ej, id, aNN, aNO), id = (id + 1) % 32768)
			}
	}, this.aN9 = function() {
		for (var aN5 = aD1, i = bS.fG, aN4 = i - 3, hv = bS.fH - 3, aNT = 12 * i, fE = 3; fE < hv; fE++)
			for (var fo = fE * i, fC = 3; fC < aN4; fC++) {
				var ej = 2 + (fo + fC << 2);
				2 !== aN5[ej] || 2 === aN5[ej - 12] && 2 === aN5[12 + ej] && 2 === aN5[ej - aNT] && 2 === aN5[ej + aNT] || (aN5[ej - 2] = 1 | aN5[ej - 2])
			}
	}
}

function a5f() {
	(z8 = void 0 === z8 ? document.createElement("canvas") : z8).width = bS.fG, z8.height = bS.fH, a5j = z8.getContext("2d", {
		alpha: !0
	}), a5k = aD1 = null, a5k = a5j.getImageData(0, 0, bS.fG, bS.fH), aD1 = a5k.data, bA.r1.xZ(aD1)
}

function ch() {
	var fX, i, j, max, aNU, n1, aNW, aNX, aNY, aNZ, aNa, aNb, aNc, aNd, aNV = 1e4;

	function aNk(aNj, n4, f5) {
		var aB;
		for (aNW[0] = aNj, aB = 1; aB < f5; aB++) aNW[aB] = aNW[aB - 1] + n4, n4 = aNW[aB] >= aNV ? (aNW[aB] = aNV - 1, -n4) : aNW[aB] < 0 ? (aNW[aB] = 0, -n4) : (n4 += 16384 <= ay.random() ? n1 : -n1) < -aNU ? -aNU : aNU < n4 ? aNU : n4
	}

	function aNm(fC, fE, aNn, f5) {
		(aNn ? function(fC, fE, f5) {
			var aB;
			for (aB = 0; aB < f5; aB++) fX[fE * i + fC + aB] = aNW[aB]
		} : function(fC, fE, f5) {
			var aB;
			for (aB = 0; aB < f5; aB++) fX[fE * i + fC + aB * i] = aNW[aB]
		})(fC, fE, f5)
	}

	function aNq(value, f5) {
		var aB, aLS, ej, jf = value - aNW[f5 - 1];
		if (0 != jf) {
			for (aLS = 1 + bL.fW(Math.abs(jf), f5 - 1), aLS = jf < 0 ? -aLS : aLS, aNW[f5 - 1] = value, ej = (ej = f5 - 1 - bL.fW(Math.abs(jf), Math.abs(aLS))) < 1 ? 1 : f5 - 2 < ej ? f5 - 2 : ej, aB = f5 - 2; ej <= aB; aB--) aNW[aB] += jf - (f5 -
				1 - aB) * aLS;
			(jf < 0 ? function(f5) {
				var aB;
				for (aB = f5 - 2; 1 <= aB; aB--) aNW[aB] < 0 && (aNW[aB] = -aNW[aB] - 1)
			} : function(f5) {
				var aB;
				for (aB = f5 - 2; 1 <= aB; aB--) aNW[aB] >= aNV && (aNW[aB] = 2 * aNV - aNW[aB] - 1)
			})(f5)
		}
	}

	function aNt(a3f, a3g, f5) {
		for (var aB = 0; aB < f5; aB++) a3f[aB] = a3g[aB]
	}

	function aNu(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNv(a6L, gap, hw) {
		aNX.push(a6L), aNY.push(gap), aNZ.push(hw)
	}
	this.a7 = function(a4t) {
		! function(a4t) {
			var aB;
			for (i = a4t[0], j = a4t[1], aNU = a4t[2], n1 = a4t[3], fX = new Int16Array(i * j), max = j < i ? i : j, aNW = new Int16Array(max), aNX = [], aNY = [], aNZ = [], aNa = new Array(i), aNb = new Array(j), aB = i - 1; 0 <= aB; aB--) aNa[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aNb[aB] = !1;
			aNc = new Int16Array(i), aNd = new Int16Array(j)
		}(a4t),
		function(f5) {
			var aNj = ay.random() % aNV,
				n4 = ay.random() % (2 * aNU + 1) - aNU;
			aNk(aNj, n4, f5)
		}(max), aNt(aNd, aNW, j), aNm(0, 0, !0, i);
		var fC, fE, a4t = fX[0],
			f5 = max,
			n4 = ay.random() % (2 * aNU + 1) - aNU;
		for (aNk(a4t, n4, f5), aNt(aNc, aNW, i), aNm(0, 0, !1, j), aNu(aNc), aNu(aNd), aNk(fX[i - 1], aNc[i - 1], j), aNm(i - 1, 0, !1, j), aNk(fX[i * (j - 1)], aNd[j - 1], i), aNq(fX[i * j - 1], i), aNm(0, j - 1, !0, i), aNa[i - 1] = aNa[0] = !
			0, aNb[j - 1] = aNb[0] = !0, aNv(0, i, !0), aNv(0, j, !1), ! function() {
				var aNx, a6L;
				for (;;) {
					if (aNx = function() {
							var aB, aNx = aNX.length - 1;
							for (aB = aNx - 1; 0 <= aB; aB--) aNY[aB] > aNY[aNx] && (aNx = aB);
							return aNx
						}(), aNY[aNx] < 5) return;
					a6L = aNX[aNx] + bL.fW(aNY[aNx], 2), (aNZ[aNx] ? function(fC) {
						var f5, aO0, aB, aGq = 0,
							aO1 = 0;
						for (; aO1 < j - 1;) {
							for (aB = aGq + 1; aB < j; aB++)
								if (aNb[aB]) {
									aO1 = aB;
									break
								} f5 = aO1 - aGq + 1, aNk(fX[fC + i * aGq], 0 === aGq ? aNc[fC] : aNW[aO0 - 1] - aNW[aO0 - 2], f5), aNq(fX[aO1 * i + fC], f5), aNm(fC, aGq, !1, f5), aO0 = f5, aGq = aO1
						}
						aNa[fC] = !0
					} : function(fE) {
						var f5, aO0, aB, aGq = 0,
							aO1 = 0;
						for (; aO1 < i - 1;) {
							for (aB = aGq + 1; aB < i; aB++)
								if (aNa[aB]) {
									aO1 = aB;
									break
								} f5 = aO1 - aGq + 1, aNk(fX[fE * i + aGq], 0 === aGq ? aNd[fE] : aNW[aO0 - 1] - aNW[aO0 - 2], f5), aNq(fX[fE * i + aO1], f5), aNm(aGq, fE, !0, f5), aO0 = f5, aGq = aO1
						}
						aNb[fE] = !0
					})(a6L), aNv(a6L, aNX[aNx] + aNY[aNx] - a6L, aNZ[aNx]), aNY[aNx] = a6L - aNX[aNx] + 1
				}
			}(), fC = 0; fC < i; fC++)
			if (!aNa[fC])
				for (fE = 0; fE < j; fE++) aNb[fE] || ! function(fC, fE) {
					var value = fX[fE * i + fC - 1] + fX[(fE - 1) * i + fC],
						a86 = 2;
					aNa[fC + 1] && (a86++, value += fX[fE * i + fC + 1]);
					aNb[fE + 1] && (a86++, value += fX[(fE + 1) * i + fC]);
					fX[fE * i + fC] = bL.fW(value, a86)
				}(fC, fE)
	}, this.aMW = function() {
		return fX
	}, this.aMD = function() {
		fX = null
	}
}

function aIK(fO, fP) {
	return 0 <= fO ? bL.fW(fO, fP) : -bL.fW(-fO, fP)
}

function jw(fX) {
	return fX * fX
}

function a7J(fO, fP) {
	return fP < fO ? fO : fP
}

function aCW(fO, fP) {
	return fO < fP ? fO : fP
}

function a9i(fO, fX, fP) {
	return fX < fO ? fO : fP < fX ? fP : fX
}

function aO3(fX, f5) {
	for (var ed = bL.fW(fX + 1, 2), aB = 0; aB < f5; aB++) ed = bL.fW(ed + bL.fW(fX, ed), 2);
	return ed
}

function aJz(fX, f5) {
	return fX < 1 ? 0 : aO3(fX, f5)
}

function aO4(nQ, nR, tK, a9R, nd, ne, tL, u3) {
	return !(nQ + tK <= nd || nR + a9R <= ne || nd + tL <= nQ || ne + u3 <= nR)
}

function aO5(nQ, nR, tK, a9R, nd, ne, tL, u3) {
	return nQ <= nd && nR <= ne && nd + tL <= nQ + tK && ne + u3 <= nR + a9R
}

function xQ(fX) {
	return Math.floor(!!fX * (1 + Math.log2(fX + .5)))
}

function bx() {
	this.fW = function(fO, fP) {
		return Math.floor((fO + .5) / fP)
	}, this.aO6 = function(fO, fP) {
		return Math.floor(fO * (fP + .5))
	}, this.sqrt = function(fX) {
		return ~~Math.sqrt(fX + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iD = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aO7 = function(fo, fq, fs) {
		return Math.max(Math.min(fo, fq), fs)
	}, this.aO8 = function(aO9, aOA, fC, fE) {
		fC -= aO9, aO9 = fE - aOA, fE = 0;
		return 0 == fC ? fE = 0 <= aO9 ? Math.PI : 0 : (fE = Math.atan(aO9 / fC), fE += 0 < fC ? .5 * Math.PI : 1.5 * Math.PI), fE
	}, this.log2 = function(fX) {
		return Math.floor(!!fX * (1 + Math.log2(fX + .5)))
	}, this.log10 = function(fX) {
		return Math.floor(Math.log10(fX + .5))
	}, this.aOC = function(aOD, aOE, aOF, aOG, aOH) {
		return aOF - aOH < aOD && aOD < aOF + aOH && aOG - aOH < aOE && aOE < aOG + aOH
	}, this.yN = function(aA8, aAA) {
		return aA8 * aA8 + aAA * aAA
	}
}

function dD() {
	this.y = new aOI, this.tD = 0;
	var aOJ = new Array(32);

	function aOM() {
		for (var f5 = aOJ.length, aB = 0; aB < f5; aB++) aOJ[aB] = null
	}
	this.dd = function() {
		for (var aOK, aOL = document.body.firstChild; aOL;) aOK = aOL.nextSibling, !document.body.contains(aOL) || "DIV" !== aOL.tagName && "INPUT" !== aOL.tagName && "BUTTON" !== aOL.tagName || t.removeChild(document.body, aOL), aOL = aOK
	}, this.u = function(eC, a2I, a4t) {
		void 0 === a2I && (a2I = this.tD), bf.dk = !0, 0 === eC && (0 === aa.a2D() ? eC = 5 : a0.a1.setState(13)), this.sA(), this.tD === eC && (a2I = aOJ[eC].a2I, aOJ[eC] = null), this.tD = eC;
		var lL = aOJ[eC];
		if (!lL || 4 === eC || 7 === eC || 8 === eC || 9 === eC || 10 === eC || 11 === eC || 13 === eC || 15 === eC || 18 === eC || 20 <= eC && eC <= 28 || 32 === eC || 33 === eC) {
			if (0 === eC) return void aOM();
			1 === eC ? lL = new aON : 2 === eC ? lL = new aOO : 3 === eC ? lL = new aOP : 4 === eC || 9 === eC || 10 === eC || 11 === eC || 13 === eC || 33 === eC ? lL = a4t : 5 === eC ? lL = new aOQ : 6 === eC ? lL = new aOR : 7 === eC ? lL =
				new aOS(t.y.aOT) : 8 === eC ? lL = a4t : 12 === eC ? lL = new aOU : 14 === eC ? lL = new aOV : 15 === eC ? lL = new aOS(t.y.aOW) : 16 === eC ? lL = new aOX : 17 === eC ? lL = new aOY : 18 === eC ? lL = new aOZ : 19 === eC ? lL =
				new aOa : 20 === eC ? lL = new aOb : 21 === eC ? lL = new aOc : 22 === eC ? lL = new aOd : 23 === eC ? lL = new aOe : 24 === eC ? lL = new aOf : 25 === eC ? lL = new aOg : 26 === eC ? lL = new aOh : 27 === eC ? lL = new aOi :
				28 === eC ? lL = new aOj : 29 === eC ? lL = new aOk : 30 === eC ? lL = new aOl : 31 === eC && (lL = new aOm), lL.a2I = a2I, aOJ[eC] = lL
		}
		lL.show(a4t)
	}, this.a2C = function() {
		this.hr() && this.aOn(this.a2H().a2I)
	}, this.aOn = function(eC) {
		this.hr() && (aOJ[eC] ? (this.sA(), bf.dk = !0, this.tD = eC, aOJ[eC].show()) : this.u(eC))
	}, this.sA = function() {
		this.hr() && aOJ[this.tD].sA()
	}, this.x = function() {
		this.hr() && (aOJ[this.tD].sA(), aOM(), this.tD = 0, a0.a1.setState(13))
	}, this.vY = function() {
		var lL;
		this.hr() && (lL = aOJ[this.tD]).vY && lL.vY()
	}, this.resize = function() {
		if (!this.hr()) return !1;
		aOJ[this.tD].resize()
	}, this.hI = function(fC, fE) {
		var lL;
		this.hr() && (lL = aOJ[this.tD]).hI && lL.hI(fC, fE)
	}, this.a2Z = function(fC, fE) {
		var lL;
		this.hr() && (lL = aOJ[this.tD]).a2Z && lL.a2Z(fC, fE)
	}, this.a2x = function() {
		var lL;
		this.hr() && (lL = aOJ[this.tD]).a2x && lL.a2x()
	}, this.a2c = function(lf, lg, deltaY) {
		var lL;
		this.hr() && (lL = aOJ[this.tD]).a2c && lL.a2c(lf, lg, deltaY)
	}, this.a37 = function(code) {
		var lL;
		return !!this.hr() && ((lL = aOJ[this.tD]).a37 && lL.a37(code), !0)
	}, this.eY = function() {
		var lL;
		this.hr() && (lL = aOJ[this.tD]) && lL.eY && lL.eY()
	}, this.hr = function() {
		return 0 < this.tD
	}, this.a2H = function() {
		return aOJ[this.tD]
	}, this.a66 = function(eC) {
		return aOJ[eC]
	}, this.aOo = function() {
		return aOJ
	}, this.removeChild = function(v6, a4O) {
		try {
			v6.removeChild(a4O)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOS(data) {
	var aOp, aOq;
	this.show = function() {
		data.aOr && bI.aPl("account", data.tB), aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aOq.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(data.username, [new w("⬅️ " + L(39), function() {
		bI.clear(), t.a2C()
	}), new w(data.aOr ? "🔄 " + L(159) : L(160), function() {
		t.u(8, data.aOr ? t.a2H().a2I : void 0, new tE(25, {
			tF: 0,
			tB: data.tB,
			tC: data.tC
		}))
	}, 0, 0, 1)]), aOq = new qm(aOp.vP, function() {
		var qo = [];
		qo.push(function() {
				var aP9 = new qW,
					a1l = (aP9.qZ(L(217)), data.aPQ);
				a1l < 1 ? (aP9.qf(L(218)), 0 === data.aPR ? aP9.qb(L(219)) : 1 === data.aPR ? aP9.qb(L(220)) : 2 === data.aPR ? aP9.qb(L(221)) : 3 === data.aPR ? aP9.qb(L(222)) : 4 === data.aPR ? aP9.qb(L(223)) : 5 === data.aPR ? aP9.qb(
					L(224)) : 6 === data.aPR ? aP9.qb(L(225)) : aP9.qb(L(226))) : (aP9.qf(L(227)), a1l = a1l < 2 ? L(228) : a1l < 61 ? 2 === a1l ? L(229) : L(230, [a1l - 1]) : a1l < 84 ? 61 === a1l ? L(231) : L(232, [a1l - 60]) :
					a1l < 255 ? 84 === a1l ? L(233) : L(234, [a1l - 83]) : L(235), aP9.qb(a1l));
				{
					var qc, aPE;
					aP9.qk(new sY), data.aOr && (qc = aP9.qb(), aP9.qk(new sO([new w(bj.vx.uV(data.tB) ? L(236) : L(237), function(e) {
						return bj.vx.wA(data.tB) ? (e.textContent = L(236), aPE(1)) : (e.textContent = L(237), aPE(0)), !0
					}).button])), aPE = function(fX) {
						qc.textContent = fX ? L(238) : ""
					}, bj.vx.uV(data.tB) && aPE(1), aP9.qk(new sY))
				}
				var rg = new rh({
					value: data.username,
					eC: -1
				});
				rg.e.readOnly = !0, aP9.qk(rg), aP9.qk(new sO([new w(L(183), function(e) {
					return bA.qt.a4M(rg.e), bA.qt.vC(e), !0
				}).button])), data.aOr ? (aP9.qk(new sY), aP9.qf(b0.y.aPA("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aP9.qk(new sO([new w(L(240), function(e) {
					return b0.aGF.aGG({
						tF: 3,
						tB: data.tB,
						value: 0
					}), bA.qt.vC(e), !0
				}, bB.og).button])), aP9.qk(new sO([new w(L(241), function(e) {
					return b0.aGF.aGG({
						tF: 3,
						tB: data.tB,
						value: 1
					}), bA.qt.vC(e), !0
				}, bB.og).button])), a1l = "CRTOR" === (a1l = bj.eQ.data[105].value) || "ADMIN" === a1l, aP9.qk(new sO([new w(a1l ? "Block Account" : "Cheater", function(e) {
					return b0.aGF.aGG({
						tF: 3,
						tB: data.tB,
						value: 2
					}), bA.qt.vC(e), !0
				}, a1l ? bB.od : bB.og).button])), aP9.qk(new sO([new w(a1l ? "Ban IP" : "False Reporter", function(e) {
					return b0.aGF.aGG({
						tF: 3,
						tB: data.tB,
						value: 3
					}), bA.qt.vC(e), !0
				}, a1l ? bB.od : bB.og).button])), a1l && aP9.qk(new sO([new w("Gold Seizure", function(e) {
					return b0.aGF.aGG({
						tF: 3,
						tB: data.tB,
						value: 4
					}), bA.qt.vC(e), !0
				}, bB.od).button]))) : aP9.qb(L(239));
				return aP9
			}()),
			function(qo) {
				var aP9, qc, aDH, aPU, aPF, aPH, aPG;
				data.aOr || ((aP9 = new qW).qZ(L(242)), (qc = aP9.qb(data.aPT.length + " / 160")).style.textAlign = "center", aDH = !0, (aPU = new vh(0, 1, function(e) {
					e = e.target.value.length;
					qc.textContent = e + " / 160", 160 < e ? aDH && (aDH = !1, aPH.rD(1)) : aDH || (aDH = !0, aPH.rD(0))
				})).e.rows = 6, aPU.e.style.fontSize = "1em", aPU.vo(data.aPT), aP9.qk(aPU), 0 !== data.aPV ? (aPH = new w(L(243), function() {
					if (!aDH) return !0;
					t.u(8, t.a2H().a2I, new tE(29, {
						tF: 1,
						qa: aPU.vp().substring(0, 160)
					}))
				}, 0, 0, 1), aP9.qk(new sO([aPH.button])), aP9.qk(new sO([new w(1 === data.aPV ? L(244) : L(245), function() {
					t.u(8, t.a2H().a2I, new tE(29, {
						tF: 0,
						qa: ""
					}))
				}, 0, 0, 1).button])), aP9.qb(1 === data.aPV ? L(246, [data.aPW - 1]) : L(247, [data.aPW - 1])), aP9.qb(L(248, [data.aPX]))) : (aPF = new w(L(249), function() {
					if (!aPU.e.readOnly) return !0;
					t.u(8, t.a2H().a2I, new tE(29, {
						tF: 1,
						qa: aPU.vp().substring(0, 160)
					}))
				}, 1), aPH = new w(L(180), function(e) {
					if (e.textContent === L(180)) {
						if (!aDH) return !0;
						e.textContent = L(181), aPU.e.readOnly = !0, aPF.rD(0), aPF.button.style.color = bB.oz
					} else aPG();
					return !0
				}), aP9.qk(new sO([aPH.button])), aP9.qb(L(248, [data.aPX])), aPG = function() {
					aPH.button.textContent = L(180), aPU.e.readOnly = !1, aPF.rD(1), aPF.button.style.color = bB.o0
				}, aP9.qk(new sO([aPF.button]))), qo.push(aP9))
			}(qo),
			function(qo) {
				var aP9;
				data.aOr && 0 !== data.aPV && ((aP9 = new qW).qZ(L(250)), aP9.qd(data.aPT), aP9.qk(new sO([new w(L(251, 0, "Report"), function(e) {
					return b0.y.eZ(0) && (bA.qt.vC(e), b0.aGF.aPY({
						tF: 5,
						tB: data.tB
					})), !0
				}, 0, 0, 1).button])), qo.push(aP9))
			}(qo), qo.push(function() {
				var aP9 = new qW,
					aPB = (aP9.qZ(L(161)), aP9.qf(b0.y.aPA("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175)]),
					eB = data.aPC;
				return aP9.qf(L(176) + bA.rs.a5A(data.wn, .01, 2) + "<br>" + L(177) + (eB + 1) + " / " + data.wm + "<br>" + L(178) + aPB[function(eB, wn) {
					if (eB < 10) return 0;
					if (eB < 30) return 1;
					if (eB < 60) return 2;
					if (3e4 <= (wn = bL.fW(wn, 100))) return 3;
					if (12e3 <= wn) return 4;
					if (7e3 <= wn) return 5;
					if (3e3 <= wn) return 6;
					if (1e3 <= wn) return 7;
					if (500 <= wn) return 8;
					if (200 <= wn) return 9;
					if (70 <= wn) return 10;
					if (20 <= wn) return 11;
					if (3 <= wn) return 12;
					return 13
				}(eB, data.wn)]), aP9
			}()), data.aOr && qo.push(function() {
				var aP9 = new qW,
					rg = (aP9.qZ(L(179)), aP9.qf(b0.y.aPA("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rh({
						value: bj.eQ.data[147].value,
						eC: -1
					}, 1, void 0, function(e) {
						bj.sL.sM(147, aPE(e.target.value))
					})),
					aPF = (aP9.qk(rg), new w(L(14), function(e) {
						return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.vC(e), aPG(), b0.aGF.aGG({
							tF: 0,
							tB: data.tB,
							value: parseInt(bj.eQ.data[147].value, 10)
						})), !0
					}, 1)),
					aPH = new w(L(180), function(e) {
						return e.textContent === L(180) ? (e.textContent = L(181), rg.e.readOnly = !0, aPF.rD(0), aPF.button.style.color = bB.oz, bj.sL.sM(147, rg.e.value), aPE(bj.eQ.data[147].value)) : aPG(), !0
					}),
					qc = (aP9.qk(new sO([aPH.button])), aP9.qb()),
					aPE = function(fX) {
						qc.innerHTML = t.y.aPI(fX, bj.eQ.data[105].value, data.tB)
					},
					aPG = function() {
						aPH.button.textContent = L(180), rg.e.readOnly = !1, aPF.rD(1), aPF.button.style.color = bB.o0
					};
				return aPE(bj.eQ.data[147].value), aP9.qk(new sO([aPF.button])), aP9
			}());
		qo.push(function() {
			var aP9 = new qW,
				rg = (aP9.qZ(L(182)), new rh({
					value: data.tB,
					eC: -1
				}));
			return rg.e.readOnly = !0, aP9.qk(rg), aP9.qk(new sO([new w(L(183), function(e) {
				return bA.qt.a4M(rg.e), bA.qt.vC(e), !0
			}).button])), aP9
		}()), data.aOr || (qo.push(function() {
			var aP9 = new qW,
				aPJ = (aP9.qZ(L(184)), new rh(bj.eQ.data[106]));
			return aPJ.e.readOnly = !0, aPJ.e.type = "password", aP9.qk(aPJ), aP9.qk(new sO([new w(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aPJ.e.type = "text") : (e.textContent = L(185), aPJ.e.type = "password"), !0
			}).button, new w(L(183), function(e) {
				return bA.qt.a4M(aPJ.e), bA.qt.vC(e), !0
			}).button])), aP9.qk(new sO([new w(L(187), function() {
				t.u(8, t.a2H().a2I, new tE(15))
			}).button])), aP9.qZ(L(188), "0.8em"), aP9.qb(L(189)), aP9.qb(L(190)), aP9.qb(L(191)), aP9
		}()), qo.push(function() {
			var aP9 = new qW;
			return aP9.qZ(L(192)), aP9.qk(new sO([new w(L(193), function() {
				t.u(6, t.a2H().a2I)
			}).button])), aP9.qk(new sO([new w(L(194), function() {
				bj.sL.sM(105, ""), t.u(8, t.a2H().a2I, new tE(18))
			}).button])), aP9.qk(new sO([new w(L(195) + bj.eQ.data[105].value, function() {
				t.u(4, 0, new v(L(196), L(197), !0, [new w("⬅️ " + L(39), function() {
					t.u(7, t.a66(7).a2I)
				})]))
			}, bB.og).button])), aP9
		}()), qo.push(function() {
			function aPL(eC) {
				aPK[0].rD(0 === eC ? bB.oC : bB.oN), aPK[1].rD(0 === eC ? bB.oC : bB.og), aPK[2].rD(eC === qi.qj.length - 1 || eC < 5 ? bB.oC : bB.og)
			}
			var qi, aPK, aP9 = new qW;
			aP9.qZ(L(202)), aP9.qb(L(203)), bj.y.wW();
			return aPK = [new w(L(204), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				eC < 1 || (eC = bj.y.wa(eC), bj.sL.sM(105, eC.tB), bj.sL.sM(106, eC.password), t.u(8, t.a2H().a2I, new tE(18)))
			}, bB.oC, 1), new w(L(200), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				if (!(eC < 1)) {
					qi.qj[eC].remove(), qi.qj.splice(eC, 1);
					for (var aB = eC; aB < qi.qj.length; aB++) qi.qj[aB].name = "" + aB;
					bj.y.wZ(eC), eC = bj.eQ.data[117].value, qi.qj[eC].textContent = qi.qj[eC].textContent.replace("⚪", "🟢"), aPL(eC)
				}
			}, bB.oC, 1), new w(L(201), function() {
				var eC = Math.min(bj.eQ.data[117].value, qi.qj.length - 1);
				if (eC !== qi.qj.length - 1) {
					for (var aB = qi.qj.length - 1; eC < aB; aB--) qi.qj[aB].remove(), qi.qj.splice(aB, 1), bj.y.wZ(aB);
					aPL(eC)
				}
			}, bB.oC, 1)], qi = new vF(bj.eQ.data[117], aPL), aPL(0), qi.qj[0].style.marginTop = "0.5em", aP9.qh(qi), aP9.qk(new sO([aPK[0].button])), aP9.qk(new sO([aPK[1].button])), aP9.qk(new sO([aPK[2].button])), aP9
		}()));
		return qo.push(function() {
				var aP9 = new qW,
					aPB = (aP9.qZ(L(208)), [L(209), L(210), L(211), L(212)]),
					eB = data.aPM;
				return aP9.qf(L(213) + (data.a1U / 100).toFixed(2) + "<br>" + L(177) + (eB + 1) + " / " + data.wm + "<br>" + L(178) + aPB[eB < 10 ? 0 : eB < 50 ? 1 : eB < 200 ? 2 : 3]), aP9
			}()), qo.push(function() {
				var aP9 = new qW;
				return aP9.qZ(L(205)), aP9.qf(L(206) + bA.rs.a5A(data.wj, .1, 1) + "<br>" + L(177) + (data.wk + 1) + " / " + data.wm + "<br>" + L(207) + data.wl), aP9
			}()),
			function(qo) {
				var aP9 = new qW,
					aPZ = data.wq,
					aPa = (aP9.qZ(L(252)), aP9.qf(L(253, [data.wo.length ? "[" + data.wo + "]" : "-"])), aP9.qf(L(254, [bA.rs.a5A(aPZ, .01, 2)])), aP9.qf(L(255, [data.ws + 1 + " / " + data.wm])), data.wt),
					aPb = (aP9.qf(L(256, [bA.rs.a5A(aPa, .1, 1)])), data.wv);
				aP9.qf(L(257, [aPb])), aP9.qf(L(258, [bA.rs.a5A(aPa / Math.max(aPb, 1), .1, 2)])), aPZ = data.wr, aP9.qZ(L(259), "0.8em"), aP9.qf(L(253, [data.wp.length ? "[" + data.wp + "]" : "-"])), aP9.qf(L(254, [bA.rs.a5A(aPZ, .01, 2)])),
					aPa = data.wu, aP9.qf(L(256, [bA.rs.a5A(aPa, .1, 1)])), aPb = data.ww, aP9.qf(L(257, [aPb])), aP9.qf(L(258, [bA.rs.a5A(aPa / Math.max(aPb, 1), .1, 2)])), aP9.qf(b0.y.aPA("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qo.push(aP9)
			}(qo),
			function(qo) {
				var aP9 = new qW;
				aP9.qZ(L(260)), aP9.qf(L(213) + (data.aPc / 10).toFixed(1) + "<br>" + L(178) + (data.aPd.length ? L(261, [data.aPd]) : L(262))), data.aOr && aP9.qk(new sO([new w(L(263), function(e) {
					return b0.y.eZ(0) && (bA.qt.vC(e), b0.aGF.aPY({
						tF: 4,
						tB: data.tB
					})), !0
				}, 0, 0, 1).button]));
				aP9.qf(b0.y.aPA("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qo.push(aP9)
			}(qo), qo.push(function() {
				var aP9 = new qW;
				if (aP9.qZ(L(214)), aP9.qf(L(215) + data.aPN + "<br>" + L(177) + (data.aPO + 1) + " / " + data.wm + "<br>" + L(178) + bo.eE(data.aPO)), data.aOr) {
					var rg = new rh({
							value: bj.eQ.data[157].value,
							eC: -1
						}, 1, void 0, function(e) {
							bj.sL.sM(157, aPE(e.target.value))
						}),
						aPH = (rg.e.style.marginTop = "0.6em", aP9.qk(rg), new w(L(180), function(e) {
							return e.textContent === L(180) ? (e.textContent = L(181), rg.e.readOnly = !0, aPP[0].rD(0), aPP[1].rD(0), aPP[0].button.style.color = bB.oz, aPP[1].button.style.color = bB.oz, aPE(bj.eQ.data[157]
								.value)) : aPG(), !0
						})),
						aPP = (aP9.qk(new sO([aPH.button])), [new w("−", function(e) {
							return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.vC(e), aPG(), b0.aGF.aGG({
								tF: 2,
								tB: data.tB,
								value: bL.iD(parseInt(bj.eQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rg.e.readOnly && b0.y.eZ(0) && (bA.qt.vC(e), aPG(), b0.aGF.aGG({
								tF: 1,
								tB: data.tB,
								value: bL.iD(parseInt(bj.eQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qc = aP9.qb(),
						aPE = function(fX) {
							return fX = bA.gR.a4q(fX, 3, 32767), qc.textContent = L(216, [fX - 1, fX, bj.eQ.data[105].value]), fX
						};
					aP9.qk(new sO([aPP[0].button, aPP[1].button]));
					for (var aB = 0; aB < 2; aB++) aPP[aB].button.style.fontSize = "1.6em";
					var aPG = function() {
						aPH.button.textContent = L(180), rg.e.readOnly = !1, aPP[0].rD(1), aPP[1].rD(1), aPP[0].button.style.color = bB.o0, aPP[1].button.style.color = bB.o0
					};
					aPE(bj.eQ.data[157].value)
				}
				return aP9
			}()),
			function(qo) {
				var aP9, a4L;
				data.aOr && !data.aPe || (0 === a0.id || data.aOr || data.aPe) && ((aP9 = new qW).qZ("Patreon"), !data.aOr && data.aPf ? aP9.qk(new sO([new w(L(185), function() {
					b0.aGF.aPY({
						tF: 7,
						tB: data.tB
					}), data.aPf = 0, t.u(7)
				}).button])) : data.aPe ? (aP9.qf(L(264, [(data.aPg / 100).toFixed(2)]) + "<br>" + L(265, [1 + data.aPh + " / " + data.aPi]) + "<br>" + L(266, [data.aPj ? L(267) : L(268)])), data.aOr || aP9.qk(new sO([new w(L(269),
					function() {
						b0.aGF.aPY({
							tF: 8,
							tB: data.tB
						}), data.aPe = 0, bj.sL.sM(160, 0), t.u(7)
					}).button]))) : (aP9.qf(L(270), "0.75em").style.marginBottom = "0.3em", aP9.qf("  • " + L(271), "0.75em").style.whiteSpace = "pre", aP9.qf("  • " + L(272), "0.75em").style.whiteSpace = "pre", aP9.qf("  • " + L(
						273), "0.75em").style.whiteSpace = "pre", aP9.qf(L(274), "0.75em").style.marginTop = "1.0em", aP9.qf(L(275), "0.75em").style.marginTop = "1.0em", aP9.qf("<a href='" + bK.aPk +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4L = "https://www.patreon.com/oauth2/authorize?state=" + data.tB +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1R() + "/", aP9.qf(L(276), "0.75em").style.marginTop = "1.0em", aP9.qf("<a href='" +
						a4L + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aOr || (aP9.qk(new sY), aP9.qk(new sO([new w(L(186), function() {
						b0.aGF.aPY({
							tF: 6,
							tB: data.tB
						}), data.aPf = 1, t.u(7)
					}).button])), aP9.qf(L(277), "0.75em").style.marginTop = "0.75em")), qo.push(aP9))
			}(qo),
			function(qo) {
				var aP9, qi, aPK, eC, aPL;
				data.aOr || bj.vx.get().length && ((aP9 = new qW).qZ(L(198)), eC = 0, aPL = function() {
					var aCw = bj.vx.get().length;
					aPK[0].rD(eC === aCw ? bB.oC : bB.oN), aPK[1].rD(eC === aCw ? bB.oC : bB.og), aPK[2].rD(eC === aCw || aCw - 1 <= eC || eC < 5 ? bB.oC : bB.og)
				}, aPK = [new w(L(199), function() {
					t.u(8, void 0, new tE(25, {
						tF: 0,
						tB: bj.vx.get()[eC],
						tC: 0
					}))
				}, bB.oC, 1), new w(L(200), function() {
					bj.vx.wD(eC), qi.qj[eC].remove(), qi.qj.splice(eC, 1);
					for (var aB = eC; aB < qi.qj.length; aB++) qi.qj[aB].name = "" + aB;
					bj.vx.get().length && (eC = Math.max(eC - 1, 0), qi.qj[eC].textContent = qi.qj[eC].textContent.replace("⚪", "🟢")), aPL()
				}, bB.oC, 1), new w(L(201), function() {
					for (var hx = qi.qj.length - 1; eC < hx; hx--) bj.vx.wD(hx), qi.qj[hx].remove(), qi.qj.splice(hx, 1);
					aPL()
				}, bB.oC, 1)], aPL(), (qi = new vF(bj.vx.w9(), function(aB) {
					eC = aB, aPL()
				})).qj[0].style.marginTop = "0.5em", aP9.qh(qi), aP9.qk(new sO([aPK[0].button])), aP9.qk(new sO([aPK[1].button])), aP9.qk(new sO([aPK[2].button])), qo.push(aP9))
			}(qo), qo
	}())
}

function aOd() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.aIncomeType ? (bA.r1.a3j(aPo.vp(), aD.data.aIncomeData, 255), bA.r1.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(278), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(280), L(281), L(282)],
			value: aD.data.aIncomeType
		}, function(eC) {
			aPr(), 2 !== eC || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f2)), aD.data.aIncomeType = eC, t.u(22)
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9;
		1 === aD.data.aIncomeType && ((aP9 = new qW).qZ("Value"), aP9.qk(new rh({
			eC: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qo.push(aP9))
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.aIncomeType && ((aP9 = new qW).qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.aIncomeData, 4)), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aOg() {
	var aPm, aPn, aPo;

	function aPp() {
		aPr(), 3 !== aD.data.botDifficultyType || bA.r1.a3X(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		3 === aD.data.botDifficultyType && bA.r1.a3j(aPo.vp(), aD.data.botDifficultyData, aE.kb.length - 1)
	}

	function aPw(qo, eC) {
		var aP9 = new qW,
			value = (aP9.qZ(eC < 0 ? L(64) : L(63) + " " + bg.a1N[eC % 9]), 0 <= eC && (aP9.qf(L(285) + ": " + aD.data.teamPlayerCount[eC]).style.marginBottom = "1em"), eC < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eC]);
		aP9.qh(new vF({
			su: aE.kb,
			value: value
		}, function(hx) {
			eC < 0 ? aD.data.botDifficultyValue = hx : aD.data.botDifficultyTeam[eC] = hx
		})), qo.push(aP9)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(64), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, function() {
		var qo = [];
		if (function(qo) {
				var aP9 = new qW,
					su = (aP9.qZ(L(279)), [L(281), L(283), L(284), L(282)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), su.splice(2, 1));
				aP9.qh(new vF({
					su: su,
					value: value
				}, function(eC) {
					aPr(), aD.data.botDifficultyType = eC, 0 === aD.data.gameMode && 2 === eC && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f2)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qo.push(aP9)
			}(qo), 0 === aD.data.botDifficultyType) aPw(qo, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPw(qo, aB);
		else 3 === aD.data.botDifficultyType && ! function(qo) {
			var aP9 = new qW;
			aP9.qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.botDifficultyData, 8)), aP9.qk(aPo), qo.push(aP9)
		}(qo);
		return qo
	}())
}

function aPx(data) {
	var aOp, aPy, aPz, aQ0, aQ1, aQ2, aQ3, colors, aQ4, aQ5, aQ6 = 0,
		aQ7 = 0,
		aQ8 = !1,
		aQ9 = !1,
		aQA = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQe(lf, lg) {
		! function(lf, lg) {
			return aPy < lf && lf < aPy + aQ0 && aPz < lg && lg < aPz + aQ1
		}(aQ6 = lf, aQ7 = lg) ? (aQ8 && (bf.dk = !0), aQ8 = !1) : (aQ8 = !0, bf.dk = !0)
	}
	this.show = function() {
		aQ9 = bj.eQ.data[127].value, aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize();
		var ed = h.k,
			vX = aOp.vU(),
			aQJ = ed * vX.vW,
			ed = ed * vX.sD;
		aQ2 = bA.qt.tc(.06), aQ3 = bA.qt.tc(.04), aPy = bA.qt.tc(.06), aPz = ed + aQ2, aQ0 = h.i - aPy - aQ3, aQ1 = aQJ + ed - aPz - aQ3
	}, this.vY = function() {
		aOp.vY(),
			function() {
				var aB, aQG, gY, fC, fO, g = data.data,
					aQN = 1,
					aQO = .125,
					aQP = aQ9 ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQG = g[aB].aQG, gY = aQG.length, aQN = Math.max(gY, aQN), fO = 0; fO < gY; fO++) aQO = Math.max(aQG[fO], aQO), aQP = Math.min(aQG[fO], aQP);
				var nR = aPz + aQ1,
					yw = aQ1 / (aQO - aQP),
					yv = 1 / (aQN - 1);
				for (vZ.lineWidth = bc.zz, aB = 0; aB < g.length; aB++) {
					for (aQG = g[aB].aQG, gY = aQG.length, fC = aPy, vZ.beginPath(), vZ.moveTo(fC + aQ0, nR - yw * (aQG[gY - 1] - aQP)), fO = gY - 2; 0 <= fO; fO--) vZ.lineTo(fC + yv * fO * aQ0, nR - yw * (aQG[fO] - aQP));
					vZ.strokeStyle = colors[aB], vZ.stroke()
				}(function(aQP, aQO, nR, yw) {
					vZ.font = bA.qt.sk(0, .25 * aPy), bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 2), vZ.fillStyle = colors[0];
					for (var fC = .92 * aPy, aB = 0; aB < 3; aB++) {
						var fX = aQP + aB * (aQO - aQP) / 2;
						vZ.fillText((fX / 1e3).toFixed(3), fC, nR - yw * (fX - aQP))
					}
				})(aQP, aQO, nR, yw),
				function(aQN) {
					var fE = aPz + aQ1 + .15 * aQ3;
					vZ.font = bA.qt.sk(0, Math.min(.4 * aQ3, .028 * h.i)), bA.qt.textBaseline(vZ, 0), bA.qt.textAlign(vZ, 2), vZ.fillStyle = colors[0], vZ.fillText(bA.a3O.a4D(aQ4), aPy + aQ0, fE), bA.qt.textAlign(vZ, 0), vZ.fillText(bA.a3O.a4D(
						new Date(aQ5.getTime() - 6e4 * (aQN - 1) * aQA[data.aQF])), aPy, fE)
				}(aQN),
				function(aQN, aQP, aQO) {
					if (aQ8 && !(aQN < 2)) {
						for (var a9Z, eC = (aQ6 - aPy) / aQ0 * (aQN - 1), aQS = Math.floor(eC), aQT = Math.floor(1 + eC), aQU = eC - aQS, aQV = 1e5, aQW = -1, aQX = -1, aQY = aQO - (aQO - aQP) * (aQ7 - aPz) / aQ1, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDS, aQG = g[aB].aQG;
							aQG.length <= aQT || (aQG = aQG[aQS] + aQU * (aQG[aQT] - aQG[aQS]), (aDS = Math.abs(aQY - aQG)) < aQV && (aQV = aDS, aQW = aB, aQX = aQG))
						} - 1 !== aQW && (aQO = aPz + aQ1 - (aQX - aQP) / (aQO - aQP) * aQ1, vZ.lineWidth = .5 * bc.zz, vZ.strokeStyle = colors[aQW], vZ.beginPath(), vZ.moveTo(aPy, aQO), vZ.lineTo(aQ6, aQO), vZ.lineTo(aQ6, aPz + aQ1), vZ
						.stroke(), vZ.beginPath(), vZ.arc(aQ6, aQO, .1 * aPy, 0, 2 * Math.PI), vZ.fillStyle = colors[aQW], vZ.fill(), aQP = aPz + aQ1 + .15 * aQ3, bA.qt.textAlign(vZ, 1), a9Z = aQN - 2 < eC ? (a9Z = aQ5.getTime() - 6e4 * aQA[
								data.aQF], new Date(a9Z + (eC - (aQN - 2)) * (aQ4.getTime() - a9Z))) : new Date(aQ5.getTime() - 6e4 * (aQN - eC - 1) * aQA[data.aQF]), aQN = bA.a3O.a4D(a9Z), eC = bA.qt.measureText(aQN), a9Z = bL.iD(aQ6, aPy +
								.5 * eC, aPy + aQ0 - .5 * eC), vZ.fillStyle = bA.color.ns(70, 50, 20), vZ.fillRect(a9Z - .52 * eC, aPz + aQ1, 1.04 * eC, .55 * aQ3), vZ.fillStyle = colors[0], vZ.fillText(aQN, a9Z, aQP), vZ.font = bA.qt.sk(0,
								.25 * aPy), bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 2), a9Z = .92 * aPy, aQN = (aQX / 1e3).toFixed(3), eC = bA.qt.measureText(aQN), aQP = a9Z - 1.04 * eC, vZ.fillStyle = bA.color.ns(70, 50, 20), vZ
							.fillRect(aQP, aQO - .1625 * aPy, aPy - aQP, .275 * aPy), vZ.fillStyle = colors[aQW], vZ.fillText(aQN, a9Z, aQO))
					}
				}(aQN, aQP, aQO)
			}(), vZ.lineWidth = bc.zz, vZ.strokeStyle = bB.o0, vZ.beginPath(), vZ.moveTo(aPy, aPz), vZ.lineTo(aPy, aPz + aQ1), vZ.lineTo(aPy + aQ0, aPz + aQ1), vZ.stroke();
		var aB, fontSize = .5 * aQ2,
			g = (vZ.font = bA.qt.sk(0, fontSize), bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 0), data.data),
			f5 = g.length,
			fE = aPz - .5 * aQ2,
			qa = "";
		for (aB = 0; aB < f5; aB++) qa += g[aB].name + "  ";
		qa = qa.trim();
		var aQb = bA.qt.measureText(qa),
			fC = .5 * (h.i - aQb);
		for (aQb > h.i && (fC = 0, vZ.font = bA.qt.sk(0, h.i / aQb * fontSize)), aB = 0; aB < f5; aB++) vZ.fillStyle = colors[aB], vZ.fillText(g[aB].name, fC, fE), fC += bA.qt.measureText(g[aB].name + "  ")
	}, this.hI = function(lf, lg) {
		aQe(lf, lg)
	}, this.a2Z = function(lf, lg) {
		aQe(lf, lg)
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	};
	var aB, eU, a4B, hx, f8 = data.data,
		f5 = f8.length,
		max = 1;
	for (aB = 0; aB < f5; aB++) max = Math.max(max, f8[aB].aQG.length);
	for (aB = 0; aB < f5; aB++)
		for (; f8[aB].aQG.length < max;) f8[aB].aQG.unshift(0);
	eU = new Date, a4B = 6e4 * eU.getTimezoneOffset(), hx = eU.getTime() - a4B, aQ4 = new Date(hx), 6 === data.aQF ? function(eU, a4B) {
		var aQI = eU.getUTCFullYear(),
			eU = eU.getUTCMonth() + 1;
		aQ5 = eU < 12 ? new Date(Date.UTC(aQI, eU) - a4B) : new Date(Date.UTC(aQI + 1, 0) - a4B)
	}(eU, a4B) : (a4B = 6e4 * aQA[data.aQF], aQ5 = data.aQF <= 4 ? new Date(hx + a4B - eU.getTime() % a4B) : new Date(hx + a4B - (eU.getTime() + 2592e5) % a4B)), hx = bA.color, colors = [bB.o0, hx.ns(255, 0, 0), hx.ns(0, 200, 0), hx.ns(80, 80,
		255), hx.ns(255, 255, 0), hx.ns(255, 0, 255), hx.ns(0, 255, 255), hx.ns(255, 140, 0), hx.ns(128, 128, 128), hx.ns(0, 255, 140)], aOp = new vJ(L(286) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQF] + ", " + bA.a3O.a4A(aQ4), [
		new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(287), function() {
			t.u(14)
		})
	], !1)
}

function aOV() {
	var aOp, aOq, qo;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aOq.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(288), [new w("⬅️ " + L(39), function() {
		t.aOn(13)
	})]), aOq = new qm(aOp.vP, ((qo = []).push(function() {
		var aP9 = new qW,
			aPH = (aP9.qZ(L(289)), aP9.qb(L(290)), new w(L(291), function() {
				bj.sL.sM(130, 0), t.y.aQj()
			}, 0, 0, 1)),
			rg = new rh(bj.eQ.data[126], 0, function() {
				aPH.button.click()
			});
		return aP9.qk(rg), rg.e.placeholder = "a,b,c", rg.e.style.marginTop = "0.5em", aP9.qk(new sO([aPH.button])), aP9
	}()), qo.push(function() {
		var aP9 = new qW,
			aPH = new w(L(291), function() {
				bj.sL.sM(130, 1), t.y.aQj()
			}, 0, 0, 1),
			aQk = new rh(bj.eQ.data[129], 1, function() {
				aQk.e.focus()
			}),
			aQl = new rh(bj.eQ.data[128], 1, function() {
				aPH.button.click()
			});
		return aP9.qZ(L(292)), aP9.qk(aQl), aQl.e.style.marginBottom = "0.5em", aP9.qZ(L(293)), aP9.qk(aQk), aP9.qk(new sO([aPH.button])), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(294)), bj.eQ.data[125].su = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aP9.qh(new vF(bj.eQ.data[125])), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(295)), aP9.qk(new sI(bj.eQ.data[127], L(296))), aP9
	}()), qo))
}

function aOU() {
	var aOp, aQm, aQ0, aQn, aQo, aQp, colors = [0, 0, 0],
		aQq = -1;

	function aQt(aB) {
		var aQu = aQm.fE + aB * (bc.gap + aQp);
		vZ.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vZ.fillRect(aQn, aQu, colors[aB] * aQo, aQp), vZ.strokeStyle = bB.o0, vZ.strokeRect(aQn, aQu, aQo,
			aQp), vZ.fillStyle = bB.o0, vZ.font = bA.qt.sk(0, .32 * aQp), bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 0), vZ.fillText(L(0 === aB ? 299 : 1 === aB ? 300 : 301) + aQr(aB), aQn + bc.gap, aQu + .53 * aQp)
	}

	function aQr(aB, aQv) {
		return aQv = aQv || 256, bL.iD(Math.floor(aQv * colors[aB]), 0, aQv - 1)
	}

	function a33(lf, lg) {
		return !(lf < aQn || lg < aQm.fE || lf > aQm.fC + aQm.i || lg > aQm.fE + aQm.j)
	}
	this.show = function() {
		var fX = bj.eQ.data[121].value;
		colors[0] = (fX >> 12) / 63, colors[1] = (fX >> 6 & 63) / 63, colors[2] = (63 & fX) / 63, aOp.show(), this.resize()
	}, this.sA = function() {
		bj.sL.sM(121, (aQr(0, 64) << 12) + (aQr(1, 64) << 6) + aQr(2, 64)), aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aQm.resize();
		var ed = h.k,
			vX = aOp.vU(),
			aQs = (aQm.fE = Math.max(aQm.fE, ed * vX.sD + bc.gap), ed * vX.vW - 2 * bc.gap);
		aQm.j = Math.min(aQm.j, aQs), aQm.i = 2 * aQm.j, aQm.fE = ed * vX.sD + .5 * (ed * vX.vW - aQm.j), aQm.fC = .5 * (h.i - aQm.i), aQ0 = .25 * aQm.i, aQn = aQm.fC + aQ0 + bc.gap, aQo = aQm.i - aQ0 - bc.gap, aQp = (aQm.j - 2 * bc.gap) / 3
	}, this.vY = function() {
		var eB, tb, fP;
		aOp.vY(), vZ.lineWidth = bc.zz, eB = aQr(0), tb = aQr(1), fP = aQr(2), vZ.fillStyle = "rgb(" + eB + "," + tb + "," + fP + ")", vZ.fillRect(aQm.fC, aQm.fE, aQ0, aQm.j), vZ.strokeStyle = bB.o0, vZ.strokeRect(aQm.fC, aQm.fE, aQ0, aQm.j), vZ
			.fillStyle = eB + tb + fP < 306 && tb < 150 ? bB.o0 : bB.nr, bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 1), vZ.font = bA.qt.sk(0, .1 * aQm.j), vZ.rotate(-Math.PI / 2), vZ.fillText(L(298), -aQm.fE - .5 * aQm.j, aQm.fC + .5 * aQ0),
			vZ.setTransform(1, 0, 0, 1, 0, 0), aQt(0), aQt(1), aQt(2)
	}, this.hI = function(lf, lg) {
		a33(lf, lg) && (aQq = bL.iD(Math.floor((lg - aQm.fE) / (aQp + .75 * bc.gap)), 0, 2), colors[aQq] = bL.iD((lf - aQn) / aQo, 0, 1), bf.dk = !0)
	}, this.a2Z = function(lf) {
		-1 !== aQq && (colors[aQq] = bL.iD((lf - aQn) / aQo, 0, 1), bf.dk = !0)
	}, this.a2c = function(lf, lg, deltaY) {
		a33(lf, lg) && (lf = bL.iD(Math.floor((lg - aQm.fE) / (aQp + .75 * bc.gap)), 0, 2), colors[lf] = bL.iD(colors[lf] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dk = !0)
	}, this.a2x = function() {
		0 <= aQq && (aQq = -1, bf.dk = !0)
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(297), [new w("⬅️ " + L(39), function() {
		t.y.aDN()
	})], !1), aQm = new rU([.5, .25], [.5, .5], 1)
}

function aOc() {
	var aPm, aPn, aPo, rS;

	function aPp() {
		aPr(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aOo()[19] = null, t.a2C()
	}

	function aQw() {
		aPr(), t.u(21)
	}

	function aPr() {
		1 === aD.data.gameMode ? aD.a5X.a5c() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.r1.a3j(aPo.vp(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, rS = [new w("⬅️ " + L(39), aPp)], 1 === aD.data.gameMode && rS.push(new w(L(302), aQw, 1, 1)), aPm = new vJ(L(303), rS), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), 0 === aD.data.gameMode && (aP9.qh(new vF({
			su: [L(304), L(282)],
			value: aD.data.colorsType
		}, function(eC) {
			aPr(), aD.data.colorsType = eC, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f2 || (aD.data.colorsData = new Uint32Array(aD.f2)), t.u(21)
		})), aP9.qk(new sY));
		aP9.qk(new sI({
			value: aD.data.selectableColor
		}, L(305), function(value) {
			aD.data.selectableColor = value
		})), qo.push(aP9)
	}(rS = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qo) {
		var aP9 = new qW;
		aP9.qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.colorsData, 1)), aP9.qk(aPo), qo.push(aP9)
	}(rS) : (aD.a5X.a5c(), rS.push(function() {
		var aP9 = new qW;
		aP9.qZ(L(285));
		for (var aB = 0; aB < bg.a1N.length; aB++) {
			var hx = (aB + 1) % bg.a1N.length,
				e = aP9.qf((0 == hx ? "" : "Team ") + bg.a1N[hx]);
			aB && (e.style.marginTop = "0.5em"), aP9.qk(new rh({
				eC: -1,
				value: aD.data.teamPlayerCount[hx]
			}, 1, 0, function(e) {
				aPm.vQ[1].rD(0);
				var playerCount = bL.iD(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQy] = playerCount
			})).e.aQy = hx
		}
		return aP9
	}())), rS))
}

function tE(id, a4t, aQz) {
	var aOp, aR0;

	function aR5() {
		aR0.qp.innerHTML += "<br>" + L(308)
	}

	function aRF() {
		var fP = 1;
		t.u(4, 1, new v(L(309), L(310), !1, [new w("🔄 Reload", function() {
			fP && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fP = 0
		}, bB.oN)]))
	}

	function aR4() {
		bD.a7(90), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bH.dd(bD.aC), bj.sL.sM(110, bF.tG.tH(bF.tG.tI(15))), b0.aGF.aRH()
	}
	this.aR1 = !0, this.aR2 = id, this.show = function() {
		aOp.show(), this.resize(), 15 === id ? (b0.y.aR3(id) ? aR4 : aR5)() : 16 === id ? b0.y.aR3(id) ? b0.ea.eb(2) : aR5() : 17 === id ? b0.y.aR3(id) ? b0.ea.eb(3) : aR5() : 18 === id ? (b0.y.close(0, 3253), b0.y.aHC(0, id, 0), aR5()) : 21 ===
			id ? b0.y.aR3(id) ? b0.aR6.aR7(a4t.tW, a4t.tX, a4t.tY) : aR5() : 22 === id ? b0.y.aR3(id) ? b0.aR6.aR8(a4t.tW, a4t.aR9, a4t.aRA) : aR5() : 23 === id ? b0.y.aR3(id) ? b0.aR6.aRB(a4t.aQF, a4t.a1i) : aR5() : 24 === id ? b0.y.aR3(id) ? b0
			.aR6.aRC(a4t.aQF, a4t.tX, a4t.tY) : aR5() : 25 === id ? b0.y.aR3(id) ? b0.aGF.aPY(a4t) : aR5() : 28 === id ? b0.y.aR3(id) ? b0.aR6.aRD(a4t.tW, a4t.aR9, a4t.aRA) : aR5() : 29 === id ? b0.y.aR3(id) ? b0.aGF.aRE(a4t) : aR5() : 30 ===
			id && (b0.y.aR3(id) ? b7.aDI() || aRF() : aR5())
	}, this.aRG = function() {
		15 === id ? aR4() : 16 === id ? b0.ea.eb(2) : 17 === id ? b0.ea.eb(3) : 18 === id ? t.u(8, this.a2I, new tE(16)) : 21 === id ? b0.aR6.aR7(a4t.tW, a4t.tX, a4t.tY) : 22 === id ? b0.aR6.aR8(a4t.tW, a4t.aR9, a4t.aRA) : 23 === id ? b0.aR6.aRB(
			a4t.aQF, a4t.a1i) : 24 === id ? b0.aR6.aRC(a4t.aQF, a4t.tX, a4t.tY) : 25 === id ? b0.aGF.aPY(a4t) : 28 === id ? b0.aR6.aRD(a4t.tW, a4t.aR9, a4t.aRA) : 29 === id ? b0.aGF.aRE(a4t) : 30 === id ? b7.aDI() || aRF() : 1e3 === id && (
			this.aR2 = id = 25, b0.aGF.aPY(a4t))
	}, this.aDM = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.a2I) : 17 === code ? (b0.y.close(0, 3252), bj.y.wZ(0), bj.eQ.data[117].su && 0 < bj.eQ.data[117].su.length ? (bu = bj.y.wa(0), bj.sL.sM(105, bu.tB), bj.sL.sM(106, bu
			.password), t.u(8, this.a2I, new tE(16))) : (bj.sL.sM(105, ""), t.y.aDN())) : 21 === code ? t.u(10, this.a2I, new aBq(data)) : 23 === code ? t.u(13, this.a2I, new aPx({
			data: data,
			aQF: a4t.aQF
		})) : 25 === code ? (t.y.aOW.tB = a4t.tB, bj.vx.mm(a4t.tB), t.u(15, this.a2I)) : 30 === code && (data ? t.u(1) : aRF()))
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aR0.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(306), [new w("⬅️ " + L(39), function() {
		aQz ? t.u(29) : t.y.aDN()
	})]), aR0 = new sN(aOp.vP, L(307))
}

function aOa() {
	var aPm, aPn, qo;

	function aRK() {
		var gY;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5X.a5c()), gY = bA.r1.a3d(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gY) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aPp() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aRM(), aD.data.canvas = null, t.u(5, 5)
	}

	function aRM() {
		b9.qD.dd(), bj.sL.sM(156, b9.a5n.a0T())
	}

	function aRI() {
		aD.data.isReplay = 0, aRM(), aD.a5X.a5z(), aa.aHN(), aD.a5X.a5w(), aD.data.canvas = 2 === aD.data.mapType ? bS.xX : null, aD.a5b(), aD.a5Z = 1
	}

	function aRY() {
		aRK();
		for (var g = [aRP(), aRQ(), aRR()], aB = 3; aB < 6; aB++) t.removeChild(aPn.qp, aPn.qq[aB].qY), aPn.qq[aB] = g[aB - 3], aPn.qp.appendChild(aPn.qq[aB].qY);
		aPn.resize()
	}

	function aRP() {
		var aRZ, aP9 = new qW;
		return aP9.qZ(L(303)), aRZ = 0 === aD.data.gameMode ? [L(304), L(282)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aP9.qf(aRZ), aP9.qk(new sO([new w(L(314), function() {
			t.u(21)
		}).button])), aP9
	}

	function aRQ() {
		var aP9 = new qW,
			g = (aP9.qZ(L(64)), [L(281) + ": " + aE.kb[aD.data.botDifficultyValue], L(283), L(284), L(282)]);
		return aP9.qf(g[aD.data.botDifficultyType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(25)
		}).button])), aP9
	}

	function aRR() {
		var aP9 = new qW,
			g = (aP9.qZ("Spawning"), [L(304), L(316), L(282)]);
		return aP9.qf(g[aD.data.spawningType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(24)
		}).button])), aP9
	}
	this.show = function() {
		aPm.show(), this.resize(), aPm.vP.scrollTop = t.y.t5[0]
	}, this.sA = function() {
		t.y.t5[0] = aPm.vP.scrollTop, aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ("🔧 " + L(311), [new w("⬅️ " + L(39), aPp), new w(L(312), aRI)]), aRK(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xX : 1 === aD.data.mapType ? aD.data.canvas = bS.aME(bS.a5x(aD.data), 0).xX : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aME(bS.a5x(aD.data), aD.data.mapSeed).xX)), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW,
			a3t = (aP9.qZ(L(313)), aD.data.canvas);
		a3t.style.width = "100%", aP9.qk({
			e: a3t
		}), aP9.qk(new sO([new w(L(314), function() {
			t.u(20)
		}).button])), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(285)), aP9.qk(new rh({
			eC: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.iD(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.r1.a3d(aD.data.teamPlayerCount, 0), aD.a5X.a5c(), bA.r1.a3d(aD.data.teamPlayerCount, 0) !== e) && aRY()
		})), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(315)), aP9.qh(new vF({
			su: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eC) {
			aD.data.gameMode !== eC && (aD.data.gameMode = eC, aRY())
		})), qo.push(aP9)
	}(qo), qo.push(aRP()), qo.push(aRQ()), qo.push(aRR()), function(qo) {
		var aP9 = new qW,
			g = (aP9.qZ(L(317)), [L(318), L(319), L(282)]);
		aP9.qf(g[aD.data.playerNamesType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(23)
		}).button])), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW,
			g = (aP9.qZ(L(278)), [L(280), L(281) + ": " + aD.data.aIncomeValue, L(282)]);
		aP9.qf(g[aD.data.aIncomeType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(22)
		}).button])), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW,
			g = (aP9.qZ(L(320)), [L(280), L(281) + ": " + aD.data.tIncomeValue, L(282)]);
		aP9.qf(g[aD.data.tIncomeType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(26)
		}).button])), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW,
			g = (aP9.qZ(L(321)), [L(280), L(281) + ": " + aD.data.iIncomeValue, L(282)]);
		aP9.qf(g[aD.data.iIncomeType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(27)
		}).button])), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW,
			g = (aP9.qZ(L(322)), [L(280), L(281) + ": " + aD.data.sResourcesValue, L(282)]);
		aP9.qf(g[aD.data.sResourcesType]), aP9.qk(new sO([new w(L(314), function() {
			t.u(28)
		}).button])), qo.push(aP9)
	}(qo), function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(323)), aP9.qk(new sO([new w(L(324), function() {
			t.x(), aD.a5X.a60(), t.y.t5[0] = 0, t.u(19)
		}).button])), aP9.qk(new sO([new w(L(325), function() {
			bm.aJS()
		}).button])), aP9.qk(new sO([new w(L(326), function() {
			return bm.aJU(), !0
		}).button])), qo.push(aP9)
	}(qo), qo))
}

function aOl() {
	var aPm, rm = !0;

	function s3(s2, a64) {
		var qY = document.createElement("div"),
			aRb = document.createElement("span"),
			aRc = document.createElement("span");
		aRb.textContent = aW.aCC(a64.eT) + ":", aRb.style.color = bB.oF, aRb.style.paddingRight = "0.4em", aRb.style.display = "table-cell", aRb.style.width = "6ch", aRb.style.textAlign = "end", qY.appendChild(aRb), aRc.textContent = a64.qa, qY
			.appendChild(aRc), qY.style.display = "table", a64.pc && function(qY, pc) {
				{
					var aJE;
					pc >= 1024 - aj.s9.zm ? ((aJE = document.createElement("img")).src = aj.xa.za[pc - 1024 + aj.s9.zm].toDataURL(), aJE.style.width = "1.5em", aJE.style.height = "1.5em", aJE.style.verticalAlign = "middle", qY.appendChild(aJE)) : ((
							aJE = document.createElement("span")).textContent = aj.s9.a01(pc), aJE.style.display = "inline-block", aJE.style.fontSize = "1.5em", aJE.style.lineHeight = "1em", aJE.style.verticalAlign = "middle", qY.appendChild(
						aJE))
				}
			}(qY, a64.pc), s2.appendChild(qY)
	}

	function s6() {
		rm && (aPm.vP.scrollTop = aPm.vP.scrollHeight)
	}
	this.clear = function() {
		aPm.vP.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6w = bq.a67(), f5 = a6w.length, s2 = document.createDocumentFragment(), aB = 0; aB < f5; aB++) s3(s2, a6w[aB]);
		aPm.vP.appendChild(s2), s6(), aPm.show(), this.resize(), rm = !0, s6()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPm.vP.style.padding = "0.4em " + bA.qt.r2(bc.qz)
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, this.zT = function(a64) {
		var s2 = document.createDocumentFragment();
		s3(s2, a64), aPm.vP.appendChild(s2), s6()
	}, (aPm = new vJ(L(327), [new w("⬅️ " + L(39), function() {
		t.aOn(1)
	})])).vP.style.overflowY = "auto", aPm.vP.addEventListener("scroll", function() {
		rm = aPm.vP.scrollTop >= aPm.vP.scrollHeight - aPm.vP.clientHeight - 2
	})
}

function aOi() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.iIncomeType && bA.r1.a3j(aPo.vp(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(321), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(280), L(281), L(282)],
			value: aD.data.iIncomeType
		}, function(eC) {
			aPr(), 2 !== eC || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f2), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eC, t.u(27)
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9;
		1 === aD.data.iIncomeType && ((aP9 = new qW).qZ("Value"), aP9.qk(new rh({
			eC: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qo.push(aP9))
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.iIncomeType && ((aP9 = new qW).qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.iIncomeData, 4)), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aOQ() {
	var aRe, aRf, aQm, rg, aRg, sf = 0;
	this.aHv = new tM, aQm = new rU([.45, .27], [.5, .5], 2 / 3), aRf = [new w("⚔️<br>" + L(328), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aRh(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bB.oT), new w("🗡️<br>" + L(311), function() {
			aRh(1)
		}, bB.om), new w("🔑<br>" + L(329), function() {
			aRh(2)
		}, bB.p4), new w("☰<br>" + L(330), function() {
			aRh(3)
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
	for (var aB = 0; aB < aRf.length; aB++) aRf[aB].button.style.position = "absolute";

	function aRh(eC) {
		a0.a1.setState(10), ab.tf() || ab.aHm(), 0 === eC ? t.y.a5q(1) : 1 === eC ? (b9.aJm.xI(bj.eQ.data[156].value, 1) || aD.a5X.a60(), t.u(19)) : 2 === eC ? 0 !== a0.id || bj.eQ.data[140].value ? t.u(8, t.tD, new tE(16)) : t.y.aRi(t.tD, 16) :
			3 === eC && t.u(1)
	}
	rg.e.style.position = "absolute", rg.e.style.textAlign = "center", rg.e.placeholder = L(331), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHv.show(), aRf[4].rD(bA.color.a40(bj.eQ.data[121].value)), this.resize(), document.body.appendChild(rg.e);
		for (var aB = 0; aB < aRf.length; aB++) document.body.appendChild(aRf[aB].button);
		1 !== a0.id || a0.dw < 5 || (aRg && bf.eT > aRg + 144e5 ? a0.wI.setState(14) : aRg = bf.eT)
	}, this.sA = function() {
		this.aHv.sA(), t.removeChild(document.body, rg.e);
		for (var aB = 0; aB < aRf.length; aB++) t.removeChild(document.body, aRf[aB].button)
	}, this.resize = function() {
		this.aHv.resize(), this.aHv.resize(), aQm.resize();
		var gap = .5 * bc.gap,
			uB = 10 / 99 * .84 * aQm.i,
			aRl = .16 * aQm.j,
			aA7 = .19 * aQm.i,
			fC = aQm.fC + aA7,
			uB = aQm.fE + uB + 3 * gap,
			i = .5 * (aQm.i - gap) - aA7,
			aA7 = aQm.i - 2 * aA7 - aRl - gap,
			aA7 = (bA.qt.td(rg.e, fC, uB, aA7, aRl), bA.qt.td(aRf[4].button, fC + aA7 + gap, uB, aRl, aRl), sf = uB, .5 * (aQm.fE + aQm.j - (uB += aRl + gap) - gap));
		bA.qt.td(aRf[0].button, fC, uB, i, aA7), bA.qt.td(aRf[1].button, fC + i + gap, uB, i, aA7), bA.qt.td(aRf[2].button, fC, uB + aA7 + gap, i, aA7), bA.qt.td(aRf[3].button, fC + i + gap, uB + aA7 + gap, i, aA7);
		bA.qt.td(aRf[5].button, fC, uB + aA7 * 2 + gap * 2, i * 2 + gap, aA7 / 3);
		bA.qt.td(aRf[6].button, fC, uB + aA7 * 2.33 + gap * 3, i * 2 + gap, aA7 / 3);
		for (var aB = 0; aB < aRf.length; aB++) aRf[aB].button.style.font = bA.qt.sk(0, bA.qt.uz(.065 * aQm.j)), bA.qt.r3(aRf[aB].button, 5);
		rg.e.style.font = bA.qt.sk(0, bA.qt.uz(.08 * aQm.j)), bA.qt.r3(rg.e, 5)
	}, this.vY = function() {
		if (aa.aHR(), aT.vY(), f5 = Math.floor((a0.a1.iE() ? .018 : .0137) * h.iF), vZ.font = bA.qt.sk(0, Math.max(5, f5)), bA.qt.textBaseline(vZ, 0), bA.qt.textAlign(vZ, 2), vZ.fillStyle = bB.o0, vZ.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vZ.measureText(text).width, f5 = Math.max(5, f5), vZ.textAlign = "left", vZ.textBaseline = "middle", vZ.fillText(text, vZ.canvas.width - textLength - f5 / 2, 2 * f5), aO.vY(sf), bY.vY(), ab.tf()) {
			vZ.imageSmoothingEnabled = !1;
			var text = ab.aHU("territorial.io"),
				textLength = .84 * aQm.i / text.width;
			vZ.setTransform(textLength, 0, 0, textLength, aQm.fC + .08 * aQm.i, aQm.fE), aRe = aRe || bA.a3K.a4r(text, bA.a3K.a4x, [0, 0, 0]);
			for (var fC = -1; fC <= 1; fC += 2)
				for (var fE = -1; fE <= 1; fE += 2) vZ.drawImage(aRe, fC, fE);
			vZ.drawImage(text, 0, 0), vZ.imageSmoothingEnabled = !0;
			var f5 = ab.aHU("logo"),
				aRo = .6666 * textLength * text.height / f5.height,
				nd = .5 * h.i,
				ne = aQm.fE + .5 * textLength * text.height - .5 * aRo * f5.height;
			vZ.setTransform(aRo, 0, 0, aRo, nd - .6 * textLength * text.width, ne), vZ.drawImage(f5, 0, 0), vZ.setTransform(aRo, 0, 0, aRo, nd + .6 * textLength * text.width - aRo * f5.width, ne), vZ.drawImage(f5, 0, 0), vZ.setTransform(1, 0, 0,
				1, 0, 0), vZ.imageSmoothingEnabled = !0
		}
	}
}

function aOX() {
	var aOp, aRp, aRq, vK;

	function aRr(aB) {
		t.u(8, t.tD, new tE(21, {
			tW: aB,
			tX: 0,
			tY: 10
		}))
	}
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aRp.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aRq = [new w(L(332), function() {
		aRr(1)
	}, 0, 0, 1), new w(L(333), function() {
		aRr(2)
	}, 0, 0, 1), new w(L(334), function() {
		aRr(3)
	}, 0, 0, 1), new w(L(335), function() {
		aRr(0)
	}, 0, 0, 1), new w(L(336), function() {
		aRr(9)
	}, 0, 0, 1), new w(L(337), function() {
		aRr(10)
	}, 0, 0, 1), new w(L(338), function() {
		aRr(11)
	}, 0, 0, 1)], vK = [new w("⬅️ " + L(39), function() {
		t.a2C()
	})], aOp = new vJ(L(339), vK), aRp = new rR(aRq, aOp.vP)
}

function aDk(title, qg, aRs) {
	var aOp, aR0;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aR0.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aRs = aRs || [new w("⬅️ " + L(39), function() {
		t.a2C()
	}, bB.og)], aOp = new vJ(title, aRs), aR0 = new sN(aOp.vP, qg), bA.qt.textAlign(aOp.vP.style, 1)
}

function aBq(data) {
	var aOp, aRt;

	function aS2(f5) {
		return f5 < 60 ? 1 === f5 ? f5 + " Second" : f5 + " Seconds" : f5 < 3600 ? 1 === (f5 = Math.floor(f5 / 60)) ? f5 + " Minute" : f5 + " Minutes" : f5 < 172800 ? 1 === (f5 = Math.floor(f5 / 3600)) ? f5 + " Hour" : f5 + " Hours" : (f5 = Math
			.floor(f5 / 172800)) + " Days"
	}

	function aRv(jf) {
		var f5 = data.data.length;
		if (f5) {
			for (var tX, max = min = parseInt(data.data[0][0]), aB = 1; aB < f5; aB++) var aFk = parseInt(data.data[aB][0]),
				min = Math.min(aFk, min),
				max = Math.max(aFk, max);
			tX = jf < 0 ? min + jf : max + 1, t.u(8, t.a2H().a2I, new tE(21, {
				tW: data.tW,
				tX: tX,
				tY: tX + Math.abs(jf)
			}))
		}
	}
	if (this.show = function() {
			aOp.show(), this.resize()
		}, this.sA = function() {
			aOp.sA()
		}, this.resize = function() {
			aOp.resize(), aRt.resize()
		}, this.a37 = function(ed) {
			2 === ed && aOp.vQ[0].rA()
		}, data.aBr) {
		aOp = new vJ(L(114), [new w("⬅️ " + L(39), function() {
			t.a2C()
		})]);
		var f8 = {
				sv: [],
				t1: [L(352), L(353), L(354) + " ↗"],
				t8: [12, 50, 38]
			},
			a5u = aD.data.a5u;
		if (a5u) {
			for (var f5 = a5u.length, sv = f8.sv, zU = ag.zU, aB = 0; aB < f5; aB++) sv.push([{
				fX: aB + 1 + ".",
				eU: 0
			}, {
				fX: zU[aB],
				eU: 0
			}, {
				fX: bF.tG.a0I(a5u[aB], 5),
				eU: 1,
				tB: a5u[aB],
				tC: 0
			}]);
			aRt = new st(aOp.vP, f8, {
				t4: 1
			})
		} else aRt = new st(aOp.vP, f8)
	} else {
		var f8 = data.data.length ? 0 : 1,
			aRs = [new w("⬅️ " + L(39), function() {
				t.a2C()
			}), new w(L(340), function() {
				aRv(-10)
			}, f8, 0, 1), new w(L(341), function() {
				aRv(10)
			}, f8, 0, 1), new w(L(287), function() {
				t.u(11, 10, new aRw({
					tW: data.tW
				}))
			})],
			t1 = [L(342), L(343), L(344), L(345), L(346), L(347), L(348), L(349), L(350), L(351), L(337), L(338), "Audit Log"];
		aOp = new vJ(t1[data.tW], aRs), ! function() {
			var aB, f8 = {
					sv: []
				},
				sv = f8.sv,
				aRy = data.data,
				f5 = aRy.length;
			f5 && 0 === aRy[0][0] && 0 <= (eC = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tW]) && (t.y.tZ[eC] = aRy[0][1]);
			var nc = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tW],
				a53 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tW],
				eC = [
					[L(355), L(356) + " ↗", L(357)],
					[L(355), L(358), L(359), L(360) + " ↗"],
					[L(355), L(356) + " ↗", L(359)],
					[L(355), L(356) + " ↗", L(359)],
					[L(352), L(361), L(362) + " ↗", L(363) + " ↗", L(118)],
					[L(352), L(361), L(364) + " ↗", L(365) + " ↗", L(366)],
					[L(352), L(361), L(367) + " ↗", L(368) + " ↗", L(369)],
					[L(352), L(361), L(364) + " ↗", L(365) + " ↗", L(370)],
					[L(352), L(361), L(362) + " ↗", L(363) + " ↗", L(118)],
					[L(355), L(356) + " ↗", L(359)],
					[L(355), L(356) + " ↗", L(371)],
					[L(355), L(356) + " ↗", L(359)],
					[L(352), L(361), L(362) + " ↗", L(363) + " ↗", L(372)]
				];
			if (f8.t1 = eC[data.tW], f8.t8 = [
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
				][data.tW], 0 === data.tW || 2 === data.tW || 3 === data.tW || 9 === data.tW || 10 === data.tW || 11 === data.tW)
				for (aB = 0; aB < f5; aB++) sv.push([{
					fX: aRy[aB][0] + 1 + ".",
					eU: 0
				}, {
					fX: aRy[aB][1],
					eU: 1,
					tB: aRy[aB][4],
					tC: aRy[aB][3]
				}, {
					fX: (nc * aRy[aB][2]).toFixed(a53),
					eU: 0
				}]);
			else if (12 === data.tW)
				for (aB = 0; aB < f5; aB++) {
					var aS1 = aRy[aB][3];
					sv.push([{
						fX: "" + aRy[aB][0],
						eU: 0
					}, {
						fX: aS2(aRy[aB][4]),
						eU: 0
					}, {
						fX: aRy[aB][5],
						eU: 1,
						tB: aRy[aB][1],
						tC: 0
					}, {
						fX: aRy[aB][6],
						eU: 1,
						tB: aRy[aB][2],
						tC: 0
					}, {
						fX: bo.eI(aS1, bF.tG.a0I(aRy[aB][1], 5)),
						eU: 0
					}])
				} else if (1 === data.tW)
					for (aB = 0; aB < f5; aB++) sv.push([{
						fX: aRy[aB][0] + 1 + ".",
						eU: 0
					}, {
						fX: aRy[aB][1],
						eU: 0
					}, {
						fX: (nc * aRy[aB][2]).toFixed(a53),
						eU: 0
					}, {
						fX: aRy[aB][3],
						eU: 1,
						tB: aRy[aB][5],
						tC: aRy[aB][4]
					}]);
				else if (4 === data.tW || 5 === data.tW || 6 === data.tW || 7 === data.tW || 8 === data.tW)
				for (aB = 0; aB < f5; aB++) {
					var aS3 = aRy[aB][5];
					4 === data.tW || 8 === data.tW ? "100%" === (aS3 = (aS3 % 64 * 100 / (aS3 >> 6)).toFixed(0) + "%") && (4 === data.tW ? aS3 += " (" + L(373) + ")" : aS3 += " (" + L(374) + ")") : 5 === data.tW ? 32768 <= aS3 && (aS3 = -(aS3 -
						32768)) : aS3 = (nc * aS3).toFixed(a53), sv.push([{
						fX: "" + aRy[aB][0],
						eU: 0
					}, {
						fX: aS2(aRy[aB][6]),
						eU: 0
					}, {
						fX: aRy[aB][7],
						eU: 1,
						tB: aRy[aB][1],
						tC: aRy[aB][2]
					}, {
						fX: aRy[aB][8],
						eU: 1,
						tB: aRy[aB][3],
						tC: aRy[aB][4]
					}, {
						fX: "" + aS3,
						eU: 0
					}])
				}
			aRt = new st(aOp.vP, f8)
		}()
	}
}

function aRw(a4t) {
	var aOp, aOq, qo;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aOq.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(375), [new w("⬅️ " + L(39), function() {
		t.aOn(10)
	})]), aOq = new qm(aOp.vP, ((qo = []).push(function() {
		var aPH, aP9 = new qW,
			aQk = new rh(bj.eQ.data[132], 1, function() {
				aPH.button.click()
			}),
			aQl = new rh(bj.eQ.data[131], 1, function() {
				aQk.e.focus()
			});
		aP9.qZ(L(292)), aP9.qk(aQl), aQl.e.style.marginBottom = "0.8em", aP9.qZ(L(293)), aP9.qk(aQk);
		return aPH = new w(L(291), function() {
			tX = Math.floor(aQl.e.value), tY = Math.floor(aQk.e.value);
			var tY, tX = {
				a3b: Math.min(tX, tY),
				aNx: Math.max(tX, tY)
			};
			t.u(8, t.a66(10).a2I, new tE(21, {
				tW: a4t.tW,
				tX: tX.a3b,
				tY: tX.aNx
			}))
		}, 0, 0, 1), aP9.qk(new sO([aPH.button])), aP9
	}()), qo.push(function() {
		var aPH, aP9 = new qW,
			aQk = new rh(bj.eQ.data[134], 1, function() {
				aPH.button.click()
			}),
			aQl = new rh(bj.eQ.data[133], 0, function() {
				aQk.e.focus()
			});
		return aP9.qZ(1 === a4t.tW ? L(376) : L(377)), aP9.qk(aQl), aQl.e.style.marginBottom = "0.8em", aP9.qZ(L(378)), aP9.qk(aQk), aPH = new w(L(291), function() {
			var aR9 = aQl.e.value.slice(0, 20),
				aRA = Math.abs(Math.floor(aQk.e.value));
			t.u(8, t.a66(10).a2I, new tE(22, {
				tW: a4t.tW,
				aR9: aR9,
				aRA: aRA
			}))
		}, 0, 0, 1), aP9.qk(new sO([aPH.button])), aP9
	}()), qo.push(function() {
		var aPH, aP9 = new qW,
			aQk = new rh(bj.eQ.data[152], 1, function() {
				aPH.button.click()
			}),
			aQl = new rh(bj.eQ.data[151], 0, function() {
				aQk.e.focus()
			});
		return aP9.qZ(L(379)), aP9.qk(aQl), aQl.e.style.marginBottom = "0.8em", aP9.qZ(L(378)), aP9.qk(aQk), aPH = new w(L(291), function() {
			var aR9 = aQl.e.value.slice(0, 5),
				aRA = Math.abs(Math.floor(aQk.e.value));
			t.u(8, t.a66(10).a2I, new tE(28, {
				tW: a4t.tW,
				aR9: aR9,
				aRA: aRA
			}))
		}, 0, 0, 1), aP9.qk(new sO([aPH.button])), aP9
	}()), qo))
}

function aOk() {
	var aS7, tj, aSA, ti, tl, aS8 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aS9 = new Array(4),
		aSB = new Array(2),
		aSC = [L(63), L(336), L(380), L(381)];

	function aFW() {
		var aEp;
		!bn.a2A || (aEp = aS7.tx.rg.e.value.trim().slice(0, 127)).length < 1 || (aS7.tx.rg.e.value = "", bn.aDn.a15(aEp))
	}

	function aSF(aSH) {
		bn.y.rx[3] = 1 - bn.y.rx[3], aSG(3, 1, bn.y.rx[3]), aSH && b0.aFh.aFi(4), bn.y.rx[3] && bj.sL.sM(158, bn.y.rx[0])
	}

	function aSD(fO, fP) {
		bn.y.rx[fO] !== fP && (0 === fO && bn.y.rx[3] && aSF(0), aSG(fO, bn.y.rx[fO], 0), aSG(fO, fP, 1), bn.y.rx[fO] = fP, 0 === fO ? (b0.aFh.aFi(2, fP), bn.y.rx[2] ? (aS7.ty.mm(), aS7.tx.ru(1)) : aS7.tx.ru(0), t.a2H().aFL(), t.a2H().aFK()) : 2 ===
			fO && (0 === fP ? (b0.aFh.aFi(0), aS7.tx.mm(), aS7.u6()) : (b0.aFh.aFi(1), aS7.ty.mm(), aS7.u7())))
	}

	function aSG(fO, fP, color) {
		aS7.u0[fO].rS[fP].rD(color ? bB.oP : bB.pE)
	}

	function aSK(el) {
		return bS.xN.aNC[el]
	}

	function aSL(aEZ) {
		return aEZ < 7 ? "   " + (aEZ + 2) + " Teams" : 10 === aEZ ? "   No Full-Sending" : ""
	}

	function aSM(aFN, aST) {
		return aST ? aFN <= 90 && 60 < aFN ? "   Contest" : "" : aFN <= 60 ? "   Contest" : ""
	}
	this.aFs = function() {
		return aS7.tx
	}, this.aDn = function(tB) {
		aSD(2, 0);
		var qa = aS7.tx.rg.e.value,
			tB = "@" + tB + " ";
		qa.length && !bA.rs.a4N(qa, " ") && (tB = " " + tB), aS7.tx.rg.e.value = qa += tB, aS7.tx.rg.e.focus()
	}, this.aFJ = function() {
		aS7.ty.mm()
	}, this.aFL = function() {
		var aSJ = bn.y.rx[0],
			aSJ = bn.y.rz[aSJ],
			fP = (bS.a7(aSJ.el, aSJ.mapSeed), tj.rS),
			a7m = aSK(aSJ.el, aSJ.mapSeed) + aSL(aSJ.aEZ) + aSM(aSJ.aFN),
			aSJ = L(384) + "   " + aSK(aSJ.aGJ, aSJ.aGK) + aSL(aSJ.aGL) + aSM(aSJ.aFN, 1);
		fP[0].button.textContent === a7m && fP[1].button.textContent === aSJ || (fP[0].button.textContent = a7m, fP[1].button.textContent = aSJ, tj.resize())
	}, this.aFK = function() {
		var aSJ = bn.y.rx[0],
			ry = bn.y.rz[aSJ];
		aS7.u4(ry.u5);
		for (var fX, a80, aB = 0; aB < bn.uM.uN.length; aB++) aS8[0][aB].rr.textContent = bn.uM.uN[aB].length, aS8[1][aB].rr.textContent = (fX = bn.y.rz[aB].aFN, a80 = void 0, ((a80 = bL.fW(fX, 60)) < 10 ? "0" : "") + a80 + ":" + ((fX %= 60) <
			10 ? "0" : "") + fX);
		var ry = bn.uM.uN[aSJ],
			aSO = ry.length,
			aSP = bn.uM.uO[aSJ];
		aS8[2][1].rr.textContent = "" + aSO, aS8[3][1].rr.textContent = "" + aSP;
		for (aB = 0; aB < 4; aB++) {
			var aSQ = bn.y.rz[aB];
			aS9[aB] ? 0 === aSQ.u5 && (aS9[aB].rr.textContent = bS.xN.aNC[aSQ.el]) : aS9[aB] = new rq(bS.xN.aNC[aSQ.el], ti.rS[aB].button, 1, 1), bA.rs.startsWith(aSC[aB], "🏆 ") ? aSQ.aEf || (aSC[aB] = aSC[aB].substring(3), ti.rS[aB].button
				.textContent = aSC[aB], ti.rS[aB].button.appendChild(aS8[1][aB].rr), ti.rS[aB].button.appendChild(aS8[0][aB].rr), ti.rS[aB].button.appendChild(aS9[aB].rr)) : aSQ.aEf && (aSC[aB] = "🏆 " + aSC[aB], ti.rS[aB].button
				.textContent = aSC[aB], ti.rS[aB].button.appendChild(aS8[1][aB].rr), ti.rS[aB].button.appendChild(aS8[0][aB].rr), ti.rS[aB].button.appendChild(aS9[aB].rr))
		}
		var aSR = "",
			aSS = "";
		0 === aSJ && (aSR = bn.lF.aEu(ry, 0, aSO), aSS = bn.lF.aEu(ry, 0, aSP)), aSA[0].rr.textContent = aSR, aSA[1].rr.textContent = aSS, aSB[1].rr.textContent = "MP: " + bn.y.aFD[0] + "   SP: " + bn.y.aFD[1] + "   Lobby: " + bA.r1.a3o(bn.uM.uN)
	}, this.aFP = function() {
		aS7.tx.mm()
	}, this.show = function() {
		aS7.show(), this.resize(), bn.message.show()
	}, this.sA = function() {
		aS7.sA(), bn.uj.sA(), bn.uJ.sA(), bn.message.sA()
	}, this.resize = function() {
		aS7.resize(1 - bn.y.rx[2]), bn.message.resize()
	}, this.a37 = function(ed) {
		2 === ed ? bn.y.rx[3] ? aSF(1) : aS7.u0[3].rS[0].rA() : ed < 2 && aSF(1)
	}, ti = new sR([new w(aSC[0], function() {
		return aSD(0, 0), 2
	}), new w(aSC[1], function() {
		return aSD(0, 1), 2
	}), new w(aSC[2], function() {
		return aSD(0, 2), 2
	}), new w(aSC[3], function() {
		return aSD(0, 3), 2
	})], bB.pE), tj = new sR([new w("", 0, 2), new w("", 0, 2)], bB.pF, 1);
	var aSE = new sR([new w(L(382), function() {
		return aSD(2, 0), 2
	}), new w(L(114), function() {
		return aSD(2, 1), 2
	})], bB.pE);
	tl = new sR([new w(L(25, 0, 0, 1), function() {
		t.x(), bn.ud(), b0.y.a2P(3240), t.u(5, 5)
	}), new w(L(383), function() {
		return aSF(1), 2
	})], bB.pE), aS7 = new th(ti, tj, aSE, tl, aFW, bn.uj.aG2);
	for (var aB = 0; aB < 4; aB++) aS8[0][aB] = new rq("0", ti.rS[aB].button), aS8[1][aB] = new rq("0", ti.rS[aB].button, 1);
	aS8[2][1] = new rq("0", aSE.rS[1].button), aS8[3][1] = new rq("0", tl.rS[1].button), (aSA = [new rq("", aSE.rS[1].button, 1, 1), new rq("", tl.rS[1].button, 1, 1)])[0].rr.style.bottom = "0em", aSA[1].rr.style.bottom = "0em", aSG(0, bn.y.rx[0],
		1), aSG(2, bn.y.rx[2], 1), (aSB = [new rq(L(285), aS7.u8(), 1, 0), new rq("", aS7.u8(), 1, 1)])[0].rr.style.fontSize = "0.4em", aSB[1].rr.style.fontSize = "0.4em"
}

function aOR() {
	var aOp, aOq, qo;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aOq.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(385), [new w("⬅️ " + L(39), function() {
		t.u(7, t.a66(7).a2I)
	}), new w(L(204), function() {
		bj.sL.sM(105, bG.tG.x7(aOq.qq[0].qX[0].e.value, 5)), bj.sL.sM(106, bG.tG.x7(aOq.qq[1].qX[0].e.value, 15)), t.u(8, t.a66(7).a2I, new tE(18))
	})]), aOq = new qm(aOp.vP, ((qo = []).push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(182)), aP9.qk(new rh({
			value: "",
			eC: -1
		})), aP9
	}()), qo.push(function() {
		var aP9 = new qW,
			aPJ = (aP9.qZ(L(184)), new rh({
				value: "",
				eC: -1
			}));
		return aPJ.e.type = "password", aP9.qk(aPJ), aP9.qk(new sO([new w(L(185), function(e) {
			return e.textContent === L(185) ? (e.textContent = L(186), aPJ.e.type = "text") : (e.textContent = L(185), aPJ.e.type = "password"), !0
		}).button])), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(188)), aP9.qb(L(386)), aP9.qb(L(387)), aP9.qb(L(388)), aP9
	}()), qo))
}

function aOY() {
	var aOp, aRp, aRq, vK;

	function aRr(aB) {
		t.u(8, t.tD, new tE(21, {
			tW: aB,
			tX: 0,
			tY: 10
		}))
	}
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aRp.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aRq = [new w(L(347), function() {
		aRr(5)
	}, 0, 0, 1), new w(L(348), function() {
		aRr(6)
	}, 0, 0, 1), new w(L(349), function() {
		aRr(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aRr(12)
	}, 0, 0, 1)], vK = [new w("⬅️ " + L(39), function() {
		t.a2C()
	})], aOp = new vJ(L(389), vK), aRp = new rR(aRq, aOp.vP)
}

function aOI() {
	this.eQ = {}, this.tZ = new Array(7), this.aOW = null, this.aOT = null, this.sr = 0, this.t5 = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5q = function(aSW) {
		aSW && (aZ.aH6 = aSW), t.x(), aZ.dd()
	}, this.aDN = function() {
		t.u(0 === aa.a2D() ? 5 : 0)
	}, this.aQj = function() {
		if (1 === bj.eQ.data[130].value) t.u(8, t.a2H().a2I, new tE(24, {
			aQF: bj.eQ.data[125].value,
			tX: bj.eQ.data[128].value,
			tY: bj.eQ.data[129].value
		}));
		else {
			for (var g = (g = bj.eQ.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a2H().a2I, new tE(23, {
				aQF: bj.eQ.data[125].value,
				a1i: g
			}))
		}
	}, this.aRi = function(a2I, target) {
		t.u(4, a2I, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aPA(
				"/privacy"), !1, [new w("⬅️ " + L(39), function() {
				t.u(a2I)
			}), new w("✅ Accept", function() {
				bj.sL.sM(140, 1), 0 === target ? t.u(2, a2I) : t.u(8, a2I, new tE(target))
			})]))
	}, this.aSX = function() {
		for (var aB = 0; aB < 7; aB++) this.tZ[aB] = bG.wy.x2(bH.q1(5));
		this.tZ[1] = "[" + this.tZ[1] + "]", 5 === t.tD && (t.a2H().aHv.sM(this.tZ), t.a2H().resize())
	}, this.aPI = function(fX, pN, a7b) {
		fX = bA.gR.a4q(fX, 1, 1e6);
		var aSY = Math.max(1, 1 + Math.floor(.01 * (fX - 100))),
			pN = L(390, [pN]);
		return (pN += "<br>") + L(391, [a7b]) + "<br>" + L(392, [aSY < 20 ? fX + aSY + "–" + (fX + 20) : fX + aSY]) + "<br>" + L(393, [fX])
	}
}

function aOb() {
	var aPm, aPn, aSZ, qo;

	function aPp() {
		b6.ud(), t.aOo()[19] = null, t.a2C()
	}

	function aSg() {
		aSj(), aSh()
	}

	function aSj() {
		aSZ.qY.lastChild && t.removeChild(aSZ.qY, aSZ.qY.lastChild)
	}

	function aSh() {
		var aSk = bS.a5x(aD.data);
		aD.data.canvas = bS.aME(aSk, aD.data.mapSeed).xX, aSi()
	}

	function aSi() {
		var a3t = aD.data.canvas;
		a3t.style.width = "100%", aSZ.qY.appendChild(a3t)
	}
	this.aJD = function(a3t) {
		aD.data.canvas && aSj(), aD.data.canvas = a3t, aSi()
	}, this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(313), [new w("⬅️ " + L(39), aPp)]), 2 === aD.data.mapType && b6.dd(), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(394), L(395), L(396)],
			value: aD.data.mapType
		}, function(eC) {
			2 === (aD.data.mapType = eC) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.ud()), t.u(20)
		})), 2 <= aD.data.mapType && (aP9.qk(new sY), aP9.qk(new sI({
			value: aD.data.passableWater
		}, L(397), function(value) {
			aD.data.passableWater = value
		})), aP9.qk(new sI({
			value: aD.data.passableMountains
		}, L(398), function(value) {
			aD.data.passableMountains = value
		})));
		qo.push(aP9)
	}(qo = []), function(qo) {
		if (0 === aD.data.mapType) {
			for (var aP9 = new qW, su = (aP9.qZ(L(313)), []), aB = 0; aB < bS.xN.aNA.length; aB++) su.push(bS.xN.xO[bS.xN.aNA[aB]].name);
			aP9.qh(new vF({
				su: su,
				value: aD.data.mapProceduralIndex
			}, function(eC) {
				aD.data.mapProceduralIndex = eC, aSg()
			})), qo.push(aP9)
		}
	}(qo), function(qo) {
		if (1 === aD.data.mapType) {
			for (var aP9 = new qW, su = (aP9.qZ(L(313)), []), aB = 0; aB < bS.xN.aNB.length; aB++) su.push(bS.xN.xO[bS.xN.aNB[aB]].name);
			aP9.qh(new vF({
				su: su,
				value: aD.data.mapRealisticIndex
			}, function(eC) {
				aD.data.mapRealisticIndex = eC, aSg()
			})), qo.push(aP9)
		}
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.mapType && ((aP9 = new qW).qZ(L(399)), aP9.qk(new rh(bj.eQ.data[162], 1)), aP9.qZ(L(400), "0.8em"), aP9.qk(new sO([new w(L(401), function() {
			return b6.aJ6(), !0
		}).button])), qo.push(aP9))
	}(qo), function(qo) {
		var aP9, rg;
		2 === aD.data.mapType && ((aP9 = new qW).qZ(L(402)), rg = new rh({
			eC: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aP9.qk(rg), qo.push(aP9))
	}(qo), function(qo) {
		var aP9, rg, aPH;
		0 === aD.data.mapType && ((aP9 = new qW).qZ("Seed"), rg = new rh({
			eC: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aSg())
		}), aPH = new w(L(304), function(e) {
			var aM9 = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aM9) return rg.e.value = aD.data.mapSeed = aM9, aSg(), !0
		}), aP9.qk(rg), aP9.qk(new sO([aPH.button])), qo.push(aP9))
	}(qo), function(qo) {
		(aSZ = new qW).qZ(L(403)), 2 !== aD.data.mapType ? aSh() : aD.data.canvas && aSi();
		qo.push(aSZ)
	}(qo), qo))
}

function v(title, qg, aSl, aRs) {
	var aOp, aR0;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aR0.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aRs = aRs || [new w("⬅️ " + L(39), function() {
		t.a2C()
	})], aOp = new vJ(title, aRs), aR0 = new sN(aOp.vP, qg), aSl && bA.qt.textAlign(aOp.vP.style, 1)
}

function aOe() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 === aD.data.playerNamesType && 1 === bA.r1.a3X(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.playerNamesType && bA.r1.a3l(aPo.vp(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(317), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(318), L(319), L(282)],
			value: aD.data.playerNamesType
		}, function(eC) {
			aPr(), aD.data.playerNamesType = eC, t.u(23)
		})), aP9.qk(new sY), aP9.qk(new sI({
			value: aD.data.selectableName
		}, L(404), function(value) {
			aD.data.selectableName = value
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9;
		2 === aD.data.playerNamesType && ((aP9 = new qW).qZ("Data"), aPo = new vh(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f2 || (aD.data.playerNamesData = new Array(aD.f2), aD.data.playerNamesData
			.fill("")), aPo.vo(bA.rs.a5G(aD.data.playerNamesData, 1, '"')), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aOm() {
	var aPm, aPn, qo;

	function aSr() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eQ.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fO = 0; fO < 3; fO++) fO < g.length && (colors[aB][fO] = Number(g[fO]))
		}
		return colors
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(405), [new w("⬅️ " + L(39), function() {
		t.a2C()
	})]), aPn = new qm(aPm.vP, ((qo = []).push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(406)), aP9.qf(b0.y.aPA("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aP9.qf("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aP9
	}()), qo.push(function() {
		var aP9 = new qW,
			ef = (aP9.qZ(L(407)), bj.eQ.data[174].value),
			qc = aP9.qb(ef.length + " / 180"),
			aPU = (qc.style.textAlign = "center", new vh(0, 1, function(e) {
				var e = e.target.value,
					gY = e.length;
				qc.textContent = gY + " / 180", gY <= 180 && bj.sL.sM(174, e)
			}));
		return aPU.e.rows = 6, aPU.e.style.fontSize = "1em", aPU.vo(ef), aP9.qk(aPU), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		aP9.qZ(L(303));
		for (var aB = 0; aB < 11; aB++) {
			var iO = aP9.qk(new rh(bj.eQ.data[163 + aB]));
			aB && (iO.e.style.marginTop = "0.6em")
		}
		return aP9.qk(new sO([new w(L(408), function() {
			for (var data = bj.eQ.data, aB = 163; aB < 174; aB++) data[aB] && bj.eQ.w4(aB, data[aB].w7);
			t.a2C(), t.aOo()[31] = null, t.u(31)
		}).button])), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		return aP9.qZ("Targeting"), aP9.qf(L(409)), aP9.qk(new rh(bj.eQ.data[175], 0, 0)), aP9
	}()), qo.push(function() {
		var aP9 = new qW;
		return aP9.qZ(L(403)), aP9.qk(new sO([new w(L(185), function() {
			(new ee).show(bj.eQ.data[174].value, aSr(), -1)
		}).button])), aP9
	}()), qo.push(function() {
		var aP9 = new qW,
			aSs = (aP9.qZ(L(410)), aP9.qf(L(411)), new rh(bj.eQ.data[176], 1, 0)),
			aSt = (aP9.qk(aSs), new w(L(412), function(e) {
				return aSu.button.textContent === L(181) && b0.y.eZ(0) && (bA.qt.vC(e), aPG(), b0.aGF.aSv(bj.eQ.data[176].value, aSr(), bj.eQ.data[175].value, bj.eQ.data[174].value)), !0
			}, 1)),
			aPG = function() {
				aSu.button.textContent = L(180), aSt.rD(1), aSt.button.style.color = bB.o0
			},
			aSu = new w(L(180), function(e) {
				return e.textContent === L(180) ? (e.textContent = L(181), aSt.rD(0), aSt.button.style.color = bB.oz) : aPG(), !0
			});
		return aP9.qk(new sO([aSu.button, aSt.button])), aP9
	}()), qo))
}

function aOP() {
	var aPm, vm;

	function aSw() {
		t.x();
		var qa = b9.aT0(vm.vp());
		(aD.a11 && 0 < qa.length && qa === b9.qD.a5m || b9.aJm.xI(qa)) && b9.aT1()
	}
	this.show = function(aSx) {
		this.aSy(aSx), aPm.show(), this.resize()
	}, this.aSy = function(aSx) {
		0 === aD.a11 ? aSx ? vm.vo(aSx) : aD.a5a.length && vm.vo(aD.a5a) : (aD.hE || (b9.qD.a5m = b9.a5n.a0T()), vm.vo(b9.aSz(b9.qD.a5m)))
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), vm.resize()
	}, this.a37 = function(ed) {
		2 === ed ? aPm.vQ[0].rA() : aSw()
	}, aPm = new vJ(L(413), [new w("⬅️ " + L(39), function() {
		t.aOn(1)
	}), new w(L(414), function() {
		vm.vq()
	}), new w(L(415), function() {
		vm.vr()
	}), new w(L(416), function() {
		vm.clear()
	}), new w(L(417), function() {
		aSw()
	})]), vm = new vh(L(418)), aPm.vP.appendChild(vm.e)
}

function aOO() {
	var aOp, aOq, qo, aP9;

	function aT2() {
		b7.aD9 !== bj.eQ.data[12].value ? (b7.dd(), t.u(8, 1, new tE(30))) : t.u(1)
	}
	this.show = function() {
			aOp.show(), this.resize()
		}, this.sA = function() {
			aOp.sA()
		}, this.resize = function() {
			aOp.resize(), aOq.resize()
		}, this.a37 = function(ed) {
			2 === ed && aOp.vQ[0].rA()
		}, aOp = new vJ(L(419), [new w("⬅️ " + L(39), aT2), new w(L(420), function() {
			t.x(), bj.sL.wf(), t.u(2)
		})]), qo = [], (aP9 = new qW).qZ(L(421)), aP9.qb(L(422)), qo.push(aP9),
		function(qo) {
			var aP9 = new qW,
				g = (aP9.qZ(L(409)), b7.data.aDQ());
			aP9.qh(new vF({
				su: g,
				value: b7.data.aDU(g)
			}, function(eC) {
				return bj.sL.sM(12, g[eC].split(":")[0]), !0
			})), qo.push(aP9)
		}(qo),
		function(qo) {
			var aP9 = new qW,
				aT5 = (aP9.qZ(L(445)), []);
			aP9.qk(new sO([new w(L(408), function(e) {
				bX.aT6();
				for (var aB = 0; aB < aT5.length; aB++) aT5[aB].e.value = bX.aCi[aB];
				return bA.qt.vC(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aT7.length; aB++) {
				aP9.qb(bX.aT7[aB]);
				for (var fO = 0; fO < 2; fO++) {
					var eC = 2 * aB + fO,
						rg = new rh({
							value: bX.aCi[eC],
							eC: -1
						});
					rg.e.aT8 = eC, aT5.push(rg), rg.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aT9(e.target.aT8, code)
					}), fO && (rg.e.style.marginLeft = "4%"), rg.e.style.width = "48%", aP9.qk(rg)
				}
			}
			qo.push(aP9)
		}(qo), (aP9 = new qW).qZ(L(423)), bj.eQ.data[1].su = [L(424), L(425), L(426), L(427)], aP9.qh(new vF(bj.eQ.data[1])), qo.push(aP9), (aP9 = new qW).qZ(L(428)), bj.eQ.data[9].su = [L(425), L(429), L(430)], aP9.qh(new vF(bj.eQ.data[9])), qo
		.push(aP9), (aP9 = new qW).qZ(L(431)), bj.eQ.data[11].su = [L(432), L(9), L(433)], aP9.qh(new vF(bj.eQ.data[11])), qo.push(aP9), (aP9 = new qW).qZ(L(434)), aP9.qk(new sI(bj.eQ.data[2])), qo.push(aP9), (aP9 = new qW).qZ(L(435)), aP9.qk(new sI(
			bj.eQ.data[7])), qo.push(aP9), (aP9 = new qW).qZ(L(436)), aP9.qk(new sI(bj.eQ.data[8])), qo.push(aP9), (aP9 = new qW).qZ(L(437)), aP9.qk(new rh(bj.eQ.data[5])), qo.push(aP9), (aP9 = new qW).qZ(L(438)), aP9.qk(new sI(bj.eQ.data[13], L(
			439))), aP9.qk(new sI(bj.eQ.data[14], L(440))), qo.push(aP9), (aP9 = new qW).qZ(L(441)), aP9.qh(new vF({
			su: [L(442), L(443), L(444)],
			value: aZ.aH7
		}, function(aB) {
			aZ.aH7 = aB
		})), qo.push(aP9), aOq = new qm(aOp.vP, qo)
}

function aOf() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 !== aD.data.spawningType || bA.r1.a3X(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.spawningType && bA.r1.a3j(aPo.vp(), aD.data.spawningData, bS.aJG - 1)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(446), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW,
			su = (aP9.qZ(L(279)), [L(304), L(316), L(282)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (su.splice(1, 1), 0 < value) && (value = 1);
		aP9.qh(new vF({
			su: su,
			value: value
		}, function(eC) {
			aPr(), aD.data.spawningType = eC, 0 === aD.data.gameMode && 1 === eC && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f2)), t.u(24)
		})), aP9.qk(new sY), aP9.qk(new sI({
			value: aD.data.selectableSpawn
		}, L(447), function(value) {
			aD.data.selectableSpawn = value
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9 = new qW;
		aP9.qZ("Seed"), aP9.qk(new rh({
			eC: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qo.push(aP9)
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.spawningType && ((aP9 = new qW).qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.spawningData, 2)), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aON() {
	var aOp, aRp, aRq, vK;

	function aTA(id) {
		0 !== a0.id || bj.eQ.data[140].value ? 0 === id ? t.u(8, 1, new tE(16)) : t.u(2) : t.y.aRi(t.tD, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aOp.show(), this.resize(), this.eY()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aRp.resize()
	}, this.eY = function() {
		8 === aa.a2D() && (2 <= bd.aTF ? aRq[2].rB === bB.oC && aRq[2].rD(0) : aRq[2].rB !== bB.oC && aRq[2].rD(bB.oC), !aD.hE && aM.qU(aD.ep) ? aRq[1].rB === bB.oC && aRq[1].rD(0) : aRq[1].rB !== bB.oC && aRq[1].rD(bB.oC), !aD.hE && aw.hu(aD
			.ep) ? aRq[0].rB === bB.oC && aRq[0].rD(0) : aRq[0].rB !== bB.oC && aRq[0].rD(bB.oC))
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aRq = [new w(L(448), function() {
		aTA(0)
	}), new w(L(339), function() {
		t.u(16)
	}), new w(L(389), function() {
		t.u(17)
	}), new w(L(449), function() {
		t.y.aQj()
	}, 0, 0, 1), new w(L(413), function() {
		t.u(3, 1)
	}), new w(L(450), function() {
		t.u(18)
	}), new w(L(405), function() {
		t.u(31)
	}), new w(L(451), function() {
		t.y.a5q(2)
	}), new w(L(419), function() {
		aTA(1)
	}), new w(L(452), function() {
		var t1 = ["Patreon", L(461), L(462), "YouTube Tutorial", "Discord", L(463), L(332), L(464), L(335), L(465), "Terms", "Privacy"],
			a4J = [bK.aPk, bK.aDh, bK.a26, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDi, bK.aTG, bK.aTH, bK.aTI, bK.aTJ, bK.aTK, bK.aTL, bK.aTM];
		if (b0.y.aTN(0))
			for (var aB = 0; aB < a4J.length; aB++) a4J[aB] = a4J[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (t1.splice(2, 1), t1.splice(0, 1), a4J.splice(2, 1), a4J.splice(0, 1)) : 2 === a0.id && (t1.splice(1, 1), t1.splice(0, 1), a4J.splice(1, 1), a4J.splice(0, 1)), t.u(4, 1, new v(L(452), bA.qt.a4I(t1, a4J), !1, [new w(
			"⬅️ " + L(39),
			function() {
				t.u(1)
			})]))
	}), new w(L(453), function() {
		t.u(4, 1, new v(L(453), l.dw + "<br>" + b0.y.aPA("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(39),
				function() {
					t.u(1)
				})]))
	}), new w(L(454), function() {
		t.u(4, 1, new v(L(454), L(466) + "<br>" + L(467), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		}), new w(L(468), function() {
			a0.a1.a20(), t.u(1)
		})]))
	}), new w(L(455), function() {
		a0.a1.a21(), t.u(4, 1, new v(L(469), L(470) + " " + b0.y.aPA("/privacy"), !1, [new w("⬅️ " + L(39), function() {
			t.u(1)
		})]))
	})], vK = [new w("⬅️ " + L(39), function() {
		t.y.aDN()
	})], 8 === aa.a2D() && (aRq.unshift(new w(L(327), function() {
		t.u(30)
	})), aRq.unshift(new w(L(458), function() {
		2 <= bd.aTF && (t.x(), be.a3A(), bf.dk = !0)
	}, 0, 1)), aRq.unshift(new w(L(459), function() {
		!aD.hE && aM.qU(aD.ep) && (b8.hV.ph(), t.x(), aM.hF) && aM.a3A()
	}, 0, 1)), aRq.unshift(new w(L(460), function() {
		!aD.hE && aw.hu(aD.ep) && (bV.a6S(2), b8.hV.hq(), t.x(), aM.hF) && aM.a3A()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aRq.push(new w(L(456), function() {
		a0.a1.a22()
	})), aOp = new vJ(L(457), vK), aRp = new rR(aRq, aOp.vP)
}

function aOj() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.sResourcesType && bA.r1.a3j(aPo.vp(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(322), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(280), L(281), L(282)],
			value: aD.data.sResourcesType
		}, function(eC) {
			aPr(), 2 !== eC || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f2)), aD.data.sResourcesType = eC, t.u(28)
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9;
		1 === aD.data.sResourcesType && ((aP9 = new qW).qZ("Value"), aP9.qk(new rh({
			eC: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qo.push(aP9))
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.sResourcesType && ((aP9 = new qW).qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.sResourcesData, 2)), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aOh() {
	var aPm, aPn, aPo, qo;

	function aPp() {
		aPr(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aOo()[19] = null, t.a2C()
	}

	function aPr() {
		2 === aD.data.tIncomeType && bA.r1.a3j(aPo.vp(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aPm.show(), this.resize()
	}, this.sA = function() {
		aPm.sA()
	}, this.resize = function() {
		aPm.resize(), aPn.resize()
	}, this.a37 = function(ed) {
		2 === ed && aPm.vQ[0].rA()
	}, aPm = new vJ(L(320), [new w("⬅️ " + L(39), aPp)]), aPn = new qm(aPm.vP, (function(qo) {
		var aP9 = new qW;
		aP9.qZ(L(279)), aP9.qh(new vF({
			su: [L(280), L(281), L(282)],
			value: aD.data.tIncomeType
		}, function(eC) {
			aPr(), 2 !== eC || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f2), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eC, t.u(26)
		})), qo.push(aP9)
	}(qo = []), function(qo) {
		var aP9;
		1 === aD.data.tIncomeType && ((aP9 = new qW).qZ("Value"), aP9.qk(new rh({
			eC: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iD(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qo.push(aP9))
	}(qo), function(qo) {
		var aP9;
		2 === aD.data.tIncomeType && ((aP9 = new qW).qZ("Data"), (aPo = new vh(0, 1, 0, 1)).vo(bA.rs.a5G(aD.data.tIncomeData, 4)), aP9.qk(aPo), qo.push(aP9))
	}(qo), qo))
}

function aOZ() {
	var aOp, aOq, qo;
	this.show = function() {
		aOp.show(), this.resize()
	}, this.sA = function() {
		aOp.sA()
	}, this.resize = function() {
		aOp.resize(), aOq.resize()
	}, this.a37 = function(ed) {
		2 === ed && aOp.vQ[0].rA()
	}, aOp = new vJ(L(450), [new w("⬅️ " + L(39), function() {
		t.a2C()
	})]), aOq = new qm(aOp.vP, ((qo = []).push(function() {
		function aPG() {
			aSu.button.textContent = L(180), aTQ.e.readOnly = !1, aTR.e.readOnly = !1, aPF.rD(1), aPF.button.style.color = bB.o0
		}
		var aP9 = new qW,
			aTP = (aP9.qf(b0.y.aPA("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aP9.qZ(L(471)), new rh({
				value: bj.eQ.data[105].value,
				eC: -1
			})),
			aTQ = (aTP.e.readOnly = !0, aP9.qk(aTP), aP9.qZ(L(365), "0.8em"), new rh(bj.eQ.data[148], 0, void 0, function(e) {
				aPE(bj.eQ.data[149].value, e.target.value)
			})),
			aTR = (aP9.qk(aTQ), aP9.qZ(L(369), "0.8em"), new rh(bj.eQ.data[149], 1, void 0, function(e) {
				aPE(e.target.value, bj.eQ.data[148].value)
			})),
			aSu = (aP9.qk(aTR), new w(L(180), function(e) {
				return e.textContent === L(180) ? (e.textContent = L(181), aTQ.e.readOnly = !0, aTR.e.readOnly = !0, aPF.rD(0), aPF.button.style.color = bB.oz, bj.sL.sM(149, aTR.e.value), aPE(bj.eQ.data[149].value, bj.eQ.data[
					148].value)) : aPG(), !0
			})),
			aPF = (aP9.qk(new sO([aSu.button])), new w(L(14), function(e) {
				return aTQ.e.readOnly && b0.y.eZ(0) && (bA.qt.vC(e), aPG(), b0.aGF.aGG({
					tF: 0,
					tB: bj.eQ.data[148].value,
					value: parseInt(bj.eQ.data[149].value, 10)
				})), !0
			}, 1)),
			qc = aP9.qb(),
			aPE = (aP9.qb(L(472)).style.fontWeight = "bold", function(fX, qa) {
				qc.innerHTML = t.y.aPI(fX, bj.eQ.data[105].value, qa)
			});
		return aP9.qk(new sO([aPF.button])), aPE(bj.eQ.data[149].value, bj.eQ.data[148].value), aP9
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
	var aAN, aTT, aTU, aTV, aTS = !1;

	function aTW() {
		aTS = !0, aAN = -1, aTT = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aTT[aB] = !1;
		var yN = Math.floor(1 + .02 * h.min);
		aTU = new Array(4), (aTV = new Array(4))[1] = aTV[3] = aTU[0] = aTU[2] = 0, aTV[0] = aTU[3] = -yN, aTU[1] = aTV[2] = yN
	}

	function aTX() {
		if (-1 !== aAN)
			if (0 !== aD.a11 && aH.ni()) {
				for (var aTY = !1, aB = 3; 0 <= aB; aB--) aTT[aB] && (aTY = !0, ii += aTU[aB], ij += aTV[aB], af.a2Z(aTU[aB], aTV[aB]), aS.aA3());
				aTY ? bf.dk = !0 : ar.nY()
			} else ar.nY()
	}
	this.a35 = function(eC) {
		0 !== aD.a11 && aH.ni() && (aTS || aTW(), aTT[eC] = !0, -1 === aAN) && (aAN = setInterval(aTX, 20), aTX())
	}, this.a38 = function(eC) {
		if (0 !== aD.a11 && (aTS || aTW(), aTT[eC] = !1, -1 !== aAN)) {
			for (var aTY = !1, aB = 3; 0 <= aB; aB--) aTY = aTY || aTT[aB];
			aTY || this.nY()
		}
	}, this.nY = function() {
		if (aTS && -1 !== aAN) {
			for (var aB = 3; 0 <= aB; aB--) aTT[aB] = !1;
			clearInterval(aAN), aAN = -1
		}
	}
}

function cj() {
	this.y = new aTZ, this.mh = new aTa, this.pN = new aTb, this.aFh = new aTc, this.ea = new aTd, this.aGF = new aTe, this.q0 = new aTf, this.aR6 = new aTg, this.a7b = new aTh, this.aTi = new aTj, this.aTk = new aTl, this.aTm = new aTn, this.aTo =
		new aTp, this.dd = function() {
			this.y.dd()
		}
}

function aTZ() {
	var aTr, aTs;
	this.aHB = 5, this.aTq = null, this.a2L = 0, this.a2B = 0;

	function aU0() {
		return 0 === aZ.aH7 ? l.dy ? 1 : 0 : aZ.aH7 - 1
	}

	function aU3(a28, a2I, aU2) {
		aTs[a28].aTS = !0, aTx(a28), aTr[a28] = new aU6, aTr[a28].dd(a28, a2I, aU2)
	}

	function aU4(aB) {
		return aTs[aB].aTS && aTr[aB].aU4()
	}

	function aTx(a28) {
		aTs[a28].eT = bf.eT, aTs[a28].aTu = !1
	}
	this.dd = function() {
		this.aTq = new Array(this.aHB);
		this.aTq[0] = "territorial.io";
		var aM9 = ay.aMV(0);
		ay.a5d(0);
		for (var aB = 1; aB < this.aHB; aB++) this.aTq[aB] = aK.a0Z() + ".territorial.io";
		for (ay.a5d(aM9), aTr = new Array(this.aHB), aTs = new Array(this.aHB), aB = this.aHB - 1; 0 <= aB; aB--) aTs[aB] = {
			aTS: !1,
			eT: 0,
			aTu: !1
		};
		this.aHC(0, 0, 0)
	}, this.aTv = function(aB) {
		return aTr[aB]
	}, this.eY = function() {
		for (var aB = this.aHB - 1; 0 <= aB; aB--) this.eZ(aB) && bf.eT > aTs[aB].eT + 15e3 && (b0.pN.aTw(aB, aTs[aB].aTu), aTx(aB));
		!this.eZ(0) && bf.eT > aTs[0].eT + 8e3 && (aTs[0].eT = bf.eT, this.aHC(0, 0, 0))
	}, this.aR3 = function(id) {
		return this.aHC(0, id, 0) && this.aTy(0)
	}, this.aTN = function(aTz) {
		return aTz ? aZ.aH8 : aU0()
	}, this.a1R = function() {
		return aU0() ? "game.territorial.io" : "territorial.io"
	}, this.aPA = function(aU1) {
		aU1 = this.a1R() + aU1;
		return "<a href='https://" + aU1 + "' target='_blank'>" + aU1 + "</a>"
	}, this.aHC = function(a28, a2I, aTz) {
		aTz = this.aTN(aTz);
		if (aTs[a28].aTS) {
			if (aTr[a28].aU4()) return aTr[a28].aU5(a2I), aTr[a28].eZ();
			aTr[a28].sA()
		}
		return aU3(a28, a2I, aTz), !1
	}, this.aU7 = function(a28, a2I) {
		b0.ea.aU8(a28)
	}, this.aTy = function(aB) {
		return this.eZ(aB) && aTr[aB].aTy()
	}, this.aU9 = function(aB) {
		aTr[aB].aU9()
	}, this.eZ = function(aB) {
		return aTs[aB].aTS && aTr[aB].eZ()
	}, this.send = function(a28, aC) {
		0 !== a28 && aTx(a28), aTr[a28].send(aC)
	}, this.a2q = function(a28) {
		8 === aa.a2D() && (aTs[a28].aTu = !0, b0.mh.aUA = !0)
	}, this.close = function(a28, aUB) {
		aU4(a28) && aTr[a28].close(aUB)
	}, this.aUC = function(a28, aUB) {
		o.a2O(aUB), aU4(a28) && aTr[a28].close(aUB)
	}, this.a2P = function(aUB) {
		for (var aB = this.aHB - 1; 0 <= aB; aB--) this.close(aB, aUB)
	}, this.aUD = function(a28, aUB) {
		for (var aB = this.aHB - 1; 0 <= aB; aB--) aB !== a28 && this.close(aB, aUB)
	}, this.a5o = function() {
		0 === this.a2L && (aD.kk || aD.hE) || this.close(this.a2L, 3246)
	}, this.aUE = function(a28, e) {
		aTr[a28].sA(), o.a27(a28, e.code)
	}
}

function aTa() {
	this.aUA = !1, this.eY = function() {
		bf.kN() % 250 != 249 || aD.hE || (b0.ea.aUF(+(this.aUA && ag.mz[aD.ep]), al.kw + bN.y.mG), this.aUA = !1)
	}
}

function aTh() {
	this.aUH = function(a28, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aUC(a28, 3205) : ((0 === bH.q1(1) ? function(a28) {
			var aUL = bH.q1(6);
			0 === aUL ? function(a28) {
					if (0 === a28 && 8 !== aa.a2D()) {
						t.y.aSX();
						for (var aUa = bH.q1(12), aUb = bH.q1(6), g = new Array(aUa), aB = 0; aB < aUa; aB++) g[aB] = bH.q1(aUb);
						aT.aAT(g)
					}
				}(a28) : 2 === aUL ? b0.aTi.aUN(a28) : 3 === aUL || 4 === aUL ? ax.dd() : 5 === aUL ? b0.aTk.aUO() : 9 === aUL ? b0.aTk.aUP(a28) : 10 === aUL ? b0.aTm.aUQ() : 11 === aUL ? b0.aTk.aUR(a28) : 12 === aUL ? b0.aTm.aUS() :
				13 === aUL ? b0.aTo.aUT() : 14 === aUL ? b0.aTo.aUU() : 15 === aUL ? b0.aTk.aUV() : 16 === aUL ? b0.aTi.aUW(a28) : 17 === aUL ? b0.aTi.aUX(a28) : 19 === aUL ? b0.aTi.aUY(a28) : 20 === aUL && b0.aTk.aUZ(a28)
		} : function(a28) {
			if (8 !== aa.a2D() && !ax.aHg()) return;
			if (a28 !== b0.y.a2L) b0.y.aUC(a28, 3244);
			else if (0 === bH.q1(1)) bf.a1B.aUc(bH.aC);
			else {
				var aB, a28 = bH.q1(2);
				if (0 === a28) {
					var pc, pN = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[aD.ep] && (pc = bH.q1(10), aN.pb(pN, aD.ep, pc), af.qS(pN, 1, pc))
				} else if (1 === a28) ! function() {
					var pN = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[aD.ep] && b5.aLk(0, [pN], !0) && aN.pt(pN, 1)
				}();
				else if (2 === a28) ! function() {
					var pN = bH.q1(9),
						target = bH.q1(9);
					0 !== ag.mz[pN] && 0 !== ag.mz[target] && 0 !== ag.mz[aD.ep] && b5.aLk(1, [pN], !0) && (af.qS(pN, 3, 96), af.qS(target, 4, 96), aN.a7i(pN, target))
				}();
				else if (l.a9 && !l.aA) {
					var f5 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f5 = Math.min(b8.pK.q3.length, 540), aB = 0; aB < f5; aB++) bD.aUi(32, b8.pK.q3[aB]);
					b0.y.send(b0.y.a2L, bD.aC)
				}
			}
		})(a28), bf.aUK())
	}
}

function aTn() {
	this.aUQ = function() {
		bj.y.wV(), bj.sL.sM(105, bF.tG.tH(bF.tG.tI(5))), bj.sL.sM(106, bF.tG.tH(bF.tG.tI(15))), bj.sL.sM(109, 0), bj.sL.sM(108, bj.eQ.data[109].value), bj.sL.sM(111, bj.eQ.data[109].value + 1), bj.sL.sM(107, 0), bj.sL.sM(110, "")
	}, this.aUS = function() {
		var data;
		bH.size < bD.aUj(29) ? b0.y.aUC(0, 3254) : ((data = {
			tC: bH.q1(30),
			wj: bH.q1(16),
			wk: bH.q1(30),
			wl: bH.q1(30),
			wm: bH.q1(30),
			wn: bH.aUk(32),
			username: bG.x0.xI(5),
			wo: bG.x0.xI(3),
			wp: bG.x0.xI(3),
			wq: bH.aUk(32),
			wr: bH.aUk(32),
			ws: bH.q1(30),
			wt: bH.aUk(32),
			wu: bH.aUk(32),
			wv: bH.aUk(32),
			ww: bH.aUk(32),
			aPN: bH.aUk(32),
			aPO: bH.aUk(30),
			aPc: bH.aUk(32),
			aPd: bG.x0.xI(3),
			aPV: bH.aUk(2),
			aPX: bH.aUk(10),
			aPT: bG.x0.xI(8),
			aPW: bH.aUk(5),
			aPC: bH.q1(30),
			aPM: bH.q1(30),
			a1U: bH.aUk(32),
			aPR: bH.q1(3),
			aPQ: bH.q1(8),
			aPe: bH.q1(1),
			aPf: bH.q1(1)
		}).aPe && (data.aPg = bH.aUk(32), data.aPh = bH.q1(30), data.aPi = bH.q1(30), data.aPj = bH.q1(1)), 8 === t.tD && (25 === t.a2H().aR2 ? (data.aOr = !0, t.y.aOW = data, t.a2H().aDM(25, !1)) : (data.aOr = !1, bj.sL.sM(160, +(data
			.aPe && data.aPj)), data.tB = bj.eQ.data[105].value, t.y.aOT = data, bj.sL.wi(data), t.a2H().aDM(16, !0))))
	}
}

function aTp() {
	this.aUT = function() {
		var aB;
		if (bH.size < bD.aUj(23)) b0.y.aUC(0, 3259);
		else {
			var tW = bH.q1(6),
				f5 = bH.q1(10),
				data = [];
			if (9 === tW || 10 === tW || 11 === tW) {
				for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.x0.xI(5), bH.aUk(32), 0, bH.q1(30)]);
				8 === t.tD && t.a2H().aDM(21, !0, {
					tW: tW,
					data: data
				})
			} else if (12 === tW) {
				for (aB = 0; aB < f5; aB++) data.push([bH.q1(20), bH.q1(30), bH.q1(30), bH.aUk(32), bH.q1(30), bG.x0.xI(5), bG.x0.xI(5)]);
				8 === t.tD && t.a2H().aDM(21, !0, {
					tW: tW,
					data: data
				})
			} else {
				var i2 = bH.q1(16);
				if (bH.aUl(39 + 16 * i2 + f5 * (0 === tW ? 111 : 1 === tW ? 101 : 2 === tW || 3 === tW ? 127 : 212))) {
					if (0 === tW)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.wy.x2(bH.q1(5)), bH.q1(16), bH.q1(30), bH.q1(30)]);
					else if (1 === tW)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(16), bG.wy.x2(bH.q1(3)), bH.q1(16), bG.wy.x2(bH.q1(5)), bH.q1(31), bH.q1(30)]);
					else if (2 === tW || 3 === tW)
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(30), bG.wy.x2(bH.q1(5)), bH.aUk(32), bH.q1(30), bH.q1(30)]);
					else
						for (aB = 0; aB < f5; aB++) data.push([bH.q1(20), bH.q1(30), bH.q1(30), bH.q1(30), bH.q1(30), bH.aUk(32), bH.q1(30), bG.wy.x2(bH.q1(5)), bG.wy.x2(bH.q1(5))]);
					8 === t.tD && t.a2H().aDM(21, !0, {
						tW: tW,
						data: data
					})
				} else b0.y.aUC(0, 3260)
			}
		}
	}, this.aUU = function() {
		if (bH.size < bD.aUj(29)) b0.y.aUC(0, 3265);
		else {
			var aUm = bH.q1(4),
				aUn = bH.q1(7),
				aUo = bH.q1(11);
			if (bH.aUl(29 + 16 * aUn + 16 * aUo + 11 * aUm)) {
				for (var data = [], aB = 0; aB < aUm; aB++) {
					for (var a1j = bG.wy.x2(bH.q1(3)), aUp = bH.q1(8), aQG = [], fO = 0; fO < aUp; fO++) aQG.push(bH.q1(16));
					data.push({
						name: "[" + a1j + "]",
						aQG: aQG
					})
				}
				8 === t.tD && t.a2H().aDM(23, !0, data)
			} else b0.y.aUC(0, 3266)
		}
	}
}

function aTj() {
	function aUr() {
		var id = bH.q1(3);
		return 0 === id ? {
			id: id,
			tB: bH.q1(30),
			r: bn.aDn.aFm(bG.x0.xI(7))
		} : 1 === id ? {
			id: id,
			tB: bH.q1(30),
			aEo: bH.q1(3),
			value: bH.q1(30),
			target: bH.q1(30)
		} : 2 === id ? {
			id: id,
			tB: bH.q1(30),
			aEo: bH.q1(3)
		} : 3 === id ? {
			id: id,
			tB: bH.q1(30),
			aEo: bH.q1(3),
			value: bH.q1(4),
			target: bH.q1(30)
		} : 4 === id ? {
			id: id,
			tB: bH.q1(30),
			aEo: bH.q1(3),
			target: bH.q1(30)
		} : 5 === id ? {
			id: id,
			aEo: bH.q1(6)
		} : 6 === id ? {
			id: id,
			value: bH.q1(17)
		} : null
	}
	this.aUN = function(a28) {
		if (a28 !== b0.y.a2B) b0.y.close(a28, 3239);
		else if (6 !== aa.a2D()) b0.y.close(a28, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var ry = bn.y.rz[aB],
					playerCount = (ry.u5 = bH.q1(10), ry.el = bH.q1(6), ry.mapSeed = bH.q1(14), ry.aEZ = bH.q1(4), ry.aGJ = bH.q1(6), ry.aGK = bH.q1(14), ry.aGL = bH.q1(4), ry.aEf = bH.q1(1), ry.aFN = bH.q1(12), ry.spawningSeed = bH.q1(14), bH
						.q1(16));
				bn.uM.uO[aB] = bH.q1(16);
				for (var fO = 0; fO < playerCount; fO++) bn.uM.aE1(aB, bH.q1(30), bG.x0.xI(5), bH.q1(4), bH.q1(30), bH.q1(7), bH.q1(16), bH.q1(18), bH.q1(11), bH.q1(12))
			}
			t.u(29), bn.y.aFF(!0)
		}
	}, this.aUW = function(a28) {
		if (a28 !== b0.y.a2B) b0.y.close(a28, 3239);
		else if (bn.a2A) {
			bn.y.aFD[0] = bH.q1(20), bn.y.aFD[1] = bH.q1(20);
			for (var aUq = bH.q1(16), fO = 0; fO < aUq; fO++) {
				var id = bH.q1(3);
				0 === id ? bn.uM.aE1(bH.q1(2), bH.q1(30), bG.x0.xI(5), 0, 1234566, 127, 0, bH.q1(18), 0, bH.q1(12)) : 1 === id ? bn.uM.aEK(bH.q1(16), bH.q1(2)) : 2 === id ? bn.uM.aEG(bH.q1(16), bH.q1(2), bH.q1(2)) : 3 === id ? bn.uM.aEJ(bH.q1(
					16), bH.q1(2)) : 4 === id ? bn.uM.aE9(bH.q1(16), bH.q1(2), bH.q1(4), bH.q1(30), bH.q1(7), bH.q1(16), bH.q1(11), bH.q1(18)) : 5 === id && bn.uM.aEA(bH.q1(16), bH.q1(2), bH.q1(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var ry = bn.y.rz[aB];
				if (ry.u5 = bH.q1(10), ry.aGJ = bH.q1(6), ry.aGK = bH.q1(14), ry.aGL = bH.q1(4), 0 === ry.u5) {
					if (ry.a2L = bH.q1(10), ry.aEd = bH.q1(10), bn.aDp.dl(aB)) return;
					ry.el = bH.q1(6), ry.mapSeed = bH.q1(14), ry.aEZ = bH.q1(4), ry.aEf = bH.q1(1), ry.aFN = bH.q1(12), ry.spawningSeed = bH.q1(14), ry.aGM.push(ry.aGM[0]), ry.aGM.shift()
				}
			}
			bn.y.aEV()
		} else b0.y.close(a28, 3251)
	}, this.aUX = function(a28) {
		if (a28 !== b0.y.a2B) b0.y.close(a28, 3272);
		else if (bn.a2A) {
			for (var rw = bH.q1(4), ry = bn.y.rz[rw], s0 = ry.s0, uc = (ry.s1 = bH.q1(20), bH.q1(6)), aB = 0; aB < uc; aB++) {
				var aGd = aUr();
				bn.s9.aGc(aGd), s0.push(aGd)
			}
			bn.y.aFO(rw)
		} else b0.y.close(a28, 3273)
	}, this.aUY = function(a28) {
		a28 !== b0.y.a2B ? b0.y.close(a28, 3276) : bn.a2A ? bn.message.aET(aUr()) : b0.y.close(a28, 3277)
	}
}

function aTl() {
	this.aUO = function() {
		for (var id = bH.q1(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.q1(8), bH.q1(8), bH.q1(8)]);
		var ef = bG.x0.xI(8);
		bU.eM.ec({
			id: id,
			colors: colors,
			ef: ef
		})
	}, this.aUZ = function(a28) {
		var f8 = bH.q1(5),
			f8 = bi.aUs.aUt(f8, bH.q1(30), bH.q1(30), bH.q1(30));
		b0.ea.aUu(a28, f8)
	}, this.aUP = function(a28) {
		var aUe, rP, aUv;
		bH.aUl(165) ? (aUe = bH.q1(3), rP = bi.aUs.eY(bH.q1(30), bH.q1(30)), aUv = bi.aUs.aUt(bH.q1(5), bH.q1(30), bH.q1(30), bH.q1(30)), b0.ea.aUw(a28, rP, aUv, aUe), 0 < aUe || (0 === a28 && 0 === bj.eQ.data[105].value.length ? b0.ea.eb(0) : b0
			.aGF.aUx(a28), 4 === b0.y.aTv(a28).aUy() ? 6 === aa.a2D() && b0.aFh.aHD(a28) : 5 !== b0.y.aTv(a28).aUy() || 8 !== aa.a2D() && 10 !== aa.a2D() || b0.pN.aHc())) : b0.y.aUC(a28, 3269)
	}, this.aUR = function(a28) {
		var id = bH.q1(6);
		1 === id ? (bj.sL.sM(160, bH.q1(30)), b0.y.aU9(a28), aT.aAP || b0.ea.eb(1), b7.aDI(), 8 === t.tD && t.a2H().aRG()) : 21 === id ? 8 === t.tD && t.a2H().aDM(17) : 22 === id && (bj.sL.sM(106, bj.eQ.data[110].value), bj.sL.sM(110, ""), 8 ===
			t.tD) && t.a2H().aDM(15)
	}, this.aUV = function() {
		var f5 = bH.q1(16),
			aUz = bH.q1(16);
		if (bH.aUl(55 + 10 * f5 + 16 * aUz)) {
			for (var g = [], aB = 0; aB < f5; aB++) g.push(bG.wy.x2(bH.q1(10)));
			b7.aDL(g)
		} else b0.y.aUC(0, 3270)
	}
}

function aTb() {
	this.aTw = function(a28, aTu) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aTu ? 1 : 0), bD.a8(3, 0 === aD.a11 ? bn.a2A ? 6 : 0 : aD.hE ? 1 : aD.kk ? 7 : aD.ki < 7 ? 2 : 8 === aD.ki ? 4 : 9 === aD.ki ? 5 : 3), b0.y.send(a28, bD.aC)
	}, this.aHc = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a2B), bD.a8(10, ax.aEd), bD.a8(9, ax.aHV), bD.a8(10, l.e0), bD.a8(14, l.dp), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pO = function(er) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, er), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pP = function(ih, jZ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ih), bD.a8(10, jZ), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pT = function(ih, pR) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ih), bD.a8(9, pR), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pV = function(ih, pU) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ih), bD.a8(27, pU), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pX = function(ih, nN) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ih), bD.a8(16, nN), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pa = function(jZ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jZ), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pe = function(eC) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, eC), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pg = function(pf) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pf), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pi = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pj = function(ih, er, jZ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ih), bD.a8(10, jZ), bD.a8(22, er), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pr = function(aV0, aV1) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aV1), bD.a8(10, aV0), b0.y.send(b0.y.a2L, bD.aC)
	}, this.pu = function(a7b) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7b), b0.y.send(b0.y.a2L, bD.aC)
	}, this.py = function(aV2, target) {
		var aB, f5 = aV2.length;
		for (bD.a7(14 + 9 * f5), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f5; aB++) bD.a8(9, aV2[aB]);
		b0.y.send(b0.y.a2L, bD.aC)
	}
}

function aTe() {
	this.aV3 = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.ea.aV4(), b0.y.send(0, bD.aC)
	}, this.aUx = function(a28) {
		bD.a7(127), bD.a8(1, 0), bD.a8(6, 17), bG.tG.xE(bj.eQ.data[105].value, 5), bG.tG.xE(bj.eQ.data[106].value, 15), b0.y.send(a28, bD.aC)
	}, this.aRH = function() {
		bD.a7(97), bD.a8(1, 0), bD.a8(6, 18), bG.tG.xE(bj.eQ.data[110].value, 15), b0.y.send(0, bD.aC)
	}, this.aRE = function(a4t) {
		var f5 = a4t.qa.length;
		bD.a7(21 + 16 * f5), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4t.tF), bD.a8(8, f5), bF.wy.xD(a4t.qa), b0.y.send(0, bD.aC)
	}, this.aSv = function(wn, colors, aV6, ef) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wn, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fO = 0; fO < 3; fO++) bE.a8(8, colors[aB][fO]);
		wn = b7.data.aDP(aV6.trim());
		bE.a8(8, -1 === wn ? 255 : wn), bF.x0.a0T(ef.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aV7())
	}, this.aPY = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.tF), bG.tG.xE(data.tB, 5), b0.y.send(0, bD.aC)
	}, this.aGG = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.tF), bG.tG.xE(data.tB, 5), bD.aUi(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aTf() {
	this.pz = function() {
		for (var f5 = aD.kQ, a0q = bR.result.a0q, lL = a0q.length, a1c = (bD.a7(17 + 16 * f5 + 33 * lL), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lL), bD.a8(1, +(2 === aD.a0y)), bD.a8(1, aD.a1J % 2), ag.a1c), aB = 0; aB < f5; aB++) bD.a8(16, a1c[
		aB]);
		for (var gt = ag.gt, aB = 0; aB < lL; aB++) {
			var gd = a0q[aB];
			bD.a8(9, gd), bD.a8(24, gt[gd])
		}
		b0.y.send(b0.y.a2L, bD.aC)
	}
}

function aTg() {
	this.aR7 = function(tW, tX, tY) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tW), bD.a8(1, +(tX < 0)), bD.a8(1, +(tY < 0)), bD.a8(30, Math.abs(tX)), bD.a8(30, Math.abs(tY)), b0.y.send(0, bD.aC)
	}, this.aR8 = function(tW, aR9, aRA) {
		bD.a7(18 + 16 * aR9.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tW), b0.ea.aV8(aR9), bD.a8(30, aRA), b0.y.send(0, bD.aC)
	}, this.aRD = function(tW, aR9, aRA) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tW), bG.tG.xE(aR9, 5), bD.a8(30, aRA), b0.y.send(0, bD.aC)
	}, this.aRB = function(aQF, a1i) {
		for (var f5 = a1i.length, i2 = 0, aB = 0; aB < f5; aB++) i2 += a1i[aB].length;
		for (bD.a7(21 + 3 * f5 + 16 * i2), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aQF), bD.a8(4, f5), bD.a8(7, i2), aB = 0; aB < f5; aB++) bD.a8(3, a1i[aB].length), bF.wy.xD(a1i[aB]);
		b0.y.send(0, bD.aC)
	}, this.aRC = function(aQF, tX, tY) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aQF), bD.a8(1, +(tX < 0)), bD.a8(1, +(tY < 0)), bD.a8(20, Math.abs(tX)), bD.a8(20, Math.abs(tY)), b0.y.send(0, bD.aC)
	}
}

function aTc() {
	this.aHD = function(a28) {
		var username = bj.eQ.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aV9.q1()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.e0), bD.a8(2, bj.eQ.data[158].value), b0.ea.aV8(username), bA.color.a3y(bj.y.wc()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aV9.a0T(), b0.y.a2B = a28, b0.y.send(a28, bD.aC)
	}, this.aFi = function(aVB, a4t) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aVB), 2 === aVB ? bE.a8(2, a4t) : 3 === aVB ? bF.x0.a0T(a4t, 7, bE) : 5 === aVB && (bE.a8(3, a4t.id), bE.a8(3, a4t.value), bE.a8(30, a4t.tB)), b0.y.send(b0.y.a2B, bE.aV7())
	}
}

function aTd() {
	this.aU8 = function(a28) {
		var aVG;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dp), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aVG = b7.aDO(), bD.a8(8, aVG[0]), bD.a8(8, aVG[1]), b0.y.send(a28, bD.aC)
	}, this.aUw = function(a28, rP, aUv, aUe) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aUe), bD.a8(30, rP[0]), bD.a8(30, rP[1]), bD.a8(30, aUv), b0.y.send(a28, bD.aC)
	}, this.aUu = function(a28, rP) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rP), b0.y.send(a28, bD.aC)
	}, this.eb = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.us = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aDK = function(id, qa) {
		var f5 = Math.min(qa.length, 63);
		bD.a7(19 + 16 * f5), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f5), bF.wy.xD(qa), b0.y.send(0, bD.aC)
	}, this.aVD = function(aSW, ql) {
		bD.a7(7 + 26 * ql.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < ql.length; aB++) bD.a8(16, ql[aB][0]), bD.a8(10, ql[aB][1]);
		b0.y.send(aSW, bD.aC)
	}, this.aUF = function(aVE, aVF) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aVE), bD.a8(12, aVF), b0.y.send(b0.y.a2L, bD.aC)
	}, this.aV8 = function(username) {
		bD.a8(5, username.length), bF.wy.xD(username)
	}
}

function aU6() {
	var aVH, aVI, b, aVJ = ["wss://", "/s50/", "/s51/", "/s52/"],
		aVK = 0;

	function aU7() {
		b0.y.aU7(aVH, aVI)
	}

	function aVN(e) {
		b0.a7b.aUH(aVH, new Uint8Array(e.data))
	}

	function aVO() {}

	function aUE(e) {
		b0.y.aUE(aVH, e)
	}
	this.dd = function(eC, a2I, aU2) {
		aVH = eC, aVI = a2I,
			function(aU2) {
				aU2 = l.dt ? "ws://localhost:" + (7130 + aVH) + "/" : aU2 ? aVJ[0] + "game.territorial.io/x0" + aVH + "/" : aVJ[0] + b0.y.aTq[aVH] + aVJ[1 + l.du];
				(b = new WebSocket(aU2)).binaryType = "arraybuffer", b.onopen = aU7, b.onmessage = aVN, b.onclose = aUE, b.onerror = aVO
			}(aU2)
	}, this.aVM = function() {
		return b.readyState === b.CONNECTING
	}, this.eZ = function() {
		return b.readyState === b.OPEN
	}, this.aTy = function() {
		return aVK
	}, this.aU9 = function() {
		aVK = 1
	}, this.aU4 = function() {
		return this.aVM() || this.eZ()
	}, this.aU5 = function(a2I) {
		aVI = a2I
	}, this.aUy = function() {
		return aVI
	}, this.send = function(aC) {
		this.eZ() && b.send(aC)
	}, this.close = function(aUB) {
		this.aU4() && (this.sA(), b.close(aUB))
	}, this.sA = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dK() {
	var gap, aVP = !1,
		aVQ = 0,
		i = 0,
		tK = 0,
		canvas = null,
		zA = null,
		a3Y = null;

	function aVU() {
		for (var aB = aD.yC; 0 <= aB; aB--) a3Y[aB] = 0;
		for (aB = al.kw - 1; 0 <= aB; aB--) a3Y[bg.f3[al.l1[aB]]] += ag.gt[al.l1[aB]];
		aVP = !0
	}

	function aVS() {
		for (var aVZ, aVX = 0, f5 = 0, ed = Math.floor(i / 2), eB = Math.floor(tK / 2), aVY = 1.5 * Math.PI, aB = aD.yC; 0 <= aB; aB--) f5 += a3Y[aB], 0 === a3Y[aB] && aVX++;
		if (aVP = !1, zA.clearRect(0, 0, i, i), 0 < f5)
			if (aVX === aD.yC) {
				for (aB = aD.yC; 0 <= aB; aB--)
					if (0 < a3Y[aB]) {
						! function(aB, ed, eB) {
							zA.fillStyle = bg.aVg[bg.kn[aB]], zA.beginPath(), zA.arc(ed, ed, eB, 0, 2 * Math.PI), zA.fill()
						}(aB, ed, eB);
						break
					}!
				function(ed) {
					var fontSize = ed / 3;
					zA.font = bA.qt.sk(1, fontSize), zA.fillStyle = bB.o0, zA.fillText("100%", ed, ed + .1 * fontSize)
				}(ed)
			} else {
				for (aB = 0; aB <= aD.yC; aB++) 0 < a3Y[aB] && (! function(aB, ed, eB, aVY, aVZ) {
					zA.fillStyle = bg.aVg[bg.kn[aB]], zA.beginPath(), zA.arc(ed, ed, eB, aVY, aVZ), zA.lineTo(ed, ed), zA.fill()
				}(aB, ed, eB, aVY, aVZ = aVY + 2 * Math.PI * a3Y[aB] / f5), function(ed, eB, aVY, aVZ) {
					var fX = (aVZ - aVY) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eB * Math.min(fX, .37);
					fontSize < 8 || (aVY = (aVY + aVZ) / 2, aVZ = (__fx.settings.detailedTeamPercentage ? (100 * fX).toFixed(2) : Math.floor(100 * fX + .5)) + "%", eB *= .525 - Math.max(.6 * (fX - .7), 0), zA.font = bA.qt.sk(1, fontSize), zA
						.fillStyle = bB.o0, zA.fillText(aVZ, ed + Math.cos(aVY) * eB, ed + Math.cos(aVY + 1.5 * Math.PI) * eB))
				}(ed, eB, aVY, aVZ), 0 !== aB && aVe(ed, eB, aVY), aVY = aVZ);
				aVe(ed, eB, 1.5 * Math.PI)
			}!
		function(ed, eB) {
			zA.beginPath(), zA.arc(ed, ed, eB, 0, 2 * Math.PI), zA.stroke()
		}(ed, eB)
	}

	function aVe(ed, eB, aVh) {
		zA.beginPath(), zA.moveTo(ed, ed), zA.lineTo(ed + Math.cos(aVh) * eB, ed + Math.cos(aVh + 1.5 * Math.PI) * eB), zA.stroke()
	}
	this.dd = function() {
		if (aD.hz) {
			aVQ = 0, a3Y = new Uint32Array(aD.yC + 1);
			for (var aB = aD.yC; 0 <= aB; aB--) a3Y[aB] = 0;
			for (aB = al.kw - 1; 0 <= aB; aB--) a3Y[bg.f3[al.l1[aB]]] += 1;
			this.resize()
		} else a3Y = zA = canvas = null
	}, this.a8x = function() {
		return i
	}, this.resize = function() {
		aD.hz && (i = Math.floor(.95 * (a0.a1.iE() && !aD.nT ? .18 * h.min : .13 * h.iF)), i = (i *= 1 + (.5 + .2 * a0.a1.iE()) * aD.nT) + i % 2, gap = Math.max(1, .015 * i), tK = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (zA = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zA.strokeStyle = bB.o0, bA.qt.textAlign(zA, 1), bA.qt.textBaseline(zA, 1), aVS())
	}, this.kx = function(aVT) {
		aVT && aVU();
		var eU, aVT = this.kz();
		return bg.kn[aVT] || (aVT = function() {
			for (var ky = -1, aB = aD.yC; 1 <= aB; aB--)(-1 === ky || a3Y[aB] > a3Y[ky]) && (ky = aB);
			return ky
		}(), eU = ag.gt[m1[0]], -1 !== aVT && a3Y[aVT] > eU) ? a3Y[aVT] : eU
	}, this.a1v = function() {
		return aVQ = 31, this.eY(), this.kz()
	}, this.kz = function() {
		for (var ky = 0, aB = aD.yC; 0 < aB; aB--) a3Y[aB] > a3Y[ky] && (ky = aB);
		return ky
	}, this.kR = function(aVW) {
		for (var gY = 0, l1 = al.l1, f3 = bg.f3, f5 = al.kw, fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = l1[aB];
			f3[gd] === aVW && (fj[gY++] = gd)
		}
		bO.fa[0] = gY
	}, this.l0 = function(aVW) {
		for (var gY = 0, l1 = al.l1, f3 = bg.f3, f5 = al.kw, fj = bO.fj, aB = 0; aB < f5; aB++) {
			var gd = l1[aB];
			f3[gd] !== aVW && (fj[gY++] = gd)
		}
		bO.fa[0] = gY
	}, this.a4R = function() {
		for (var gY = 0, aB = aD.yC; 0 <= aB; aB--) gY += 0 < a3Y[aB];
		return gY
	}, this.eY = function() {
		aD.hz && 32 <= ++aVQ && (aVQ = 0, aVU())
	}, this.mm = function() {
		aD.hz && aVP && aVS()
	}, this.vY = function() {
		aD.hz && (aD.nT ? vZ.drawImage(canvas, bc.gap, bc.gap) : vZ.drawImage(canvas, bc.gap, a8w + 2 * bc.gap))
	}
}

function da() {
	function aVn(fC, f5, fE, a0d, aAE, fV) {
		if (!(fE < 1 || aAE < fE))
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (a0d(ej)) return ej >> 2;
				fC += fV
			}
		return -1
	}

	function aVr(fE, f5, fC, a0d, aVl, fV) {
		if (!(fC < 1 || aVl < fC)) {
			f5 = Math.max(f5, 0);
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (a0d(ej)) return ej >> 2;
				fE += fV
			}
		}
		return -1
	}

	function aVv(iW, iX, aVi) {
		return -1 !== iX && (-1 === iW || bM.iY(iX, aVi) < bM.iY(iW, aVi)) ? iX : iW
	}
	this.hU = function(aVi) {
		return this.a15(aVi, function(ej) {
			return ac.f0(ej)
		})
	}, this.ha = function(aVi) {
		return this.a15(aVi, function(ej) {
			return ac.aIW(ej, aD.ep)
		})
	}, this.a15 = function(aVi, a0d) {
		return function(aVi, aVj, a0d) {
			for (var hK = bM.fD(aVi), hM = bM.fF(aVi), aVl = bS.fG - 2, aAE = bS.fH - 2, aVm = -1, f8 = 0; f8 < aVj; f8++) {
				var aAD = Math.max(hK - f8, 1),
					aMd = Math.max(hM - f8, 1),
					yn = Math.min(hK + f8, aVl),
					ym = Math.min(hM + f8, aAE),
					iW = aVn(hK, yn - hK, hM - f8, a0d, aAE, 1),
					iX = aVn(hK - 1, hK - aAD - 1, hM - f8, a0d, aAE, -1),
					yn = aVn(hK, yn - hK, hM + f8, a0d, aAE, 1),
					aAD = aVn(hK - 1, hK - aAD - 1, hM + f8, a0d, aAE, -1),
					aVq = aVr(hM, ym - hM - 1, hK - f8, a0d, aVl, 1),
					aVs = aVr(hM - 1, hM - aMd - 2, hK - f8, a0d, aVl, -1),
					ym = aVr(hM, ym - hM - 1, hK + f8, a0d, aVl, 1),
					aMd = aVr(hM - 1, hM - aMd - 2, hK + f8, a0d, aVl, -1);
				if (aVm = aVv(aVm, iW, aVi), aVm = aVv(aVm, iX, aVi), aVm = aVv(aVm, yn, aVi), aVm = aVv(aVm, aAD, aVi), aVm = aVv(aVm, aVq, aVi), aVm = aVv(aVm, aVs, aVi), aVm = aVv(aVm, ym, aVi), 0 <= (aVm = aVv(aVm, aMd, aVi)) && f8 *
					f8 >= bM.iY(aVm, aVi)) return aVm
			}
			return -1
		}(aVi, bM.iC(), a0d)
	}
}

function d3() {
	function aVx(key) {
		var aSx;
		return "undefined" == typeof URLSearchParams || (aSx = window.location.search, "string" != typeof(aSx = new URLSearchParams(aSx).get(key))) || aSx.length < 1 ? null : aSx
	}
	this.dl = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aVx("account");
				if (!value && !(value = aVx("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.tD, new tE(1e3, {
					tF: 0,
					tB: value,
					tC: 0
				})), 1
			}()) {
			var value = aVx("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a25 = new URL(window.location.href);
		a25.search = "";
		try {
			return history.replaceState(null, "", a25.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aPl = function(key, value) {
		if (0 === a0.id) try {
			var a25 = new URL(window.location.href),
				gd = a25.searchParams;
			gd.set(key, value), a25.search = gd.toString(), history.replaceState(null, "", a25.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVz, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.fW(32768 * aB, 100);
		this.a5d(0)
	}, this.value = function(gd) {
		return g[gd]
	}, this.aMV = function() {
		return bL.fW(aVz - 1, 2)
	}, this.a5d = function(aM9) {
		aVz = 2 * aM9 % 32768 + 1
	}, this.random = function() {
		return aVz = 167 * aVz % 32768
	}, this.jh = function(mu) {
		return bL.fW(mu * this.random(), 32768)
	}, this.kI = function(gd) {
		return 0 !== gd && this.random() < this.value(gd)
	}, this.j3 = function(fO, fP) {
		return fO + this.jh(fP - fO)
	}
}

function cz() {
	this.qD = new aW0, this.a5n = new aW1, this.aJm = new aW2, this.dd = function() {
		aD.hE || this.qD.dd()
	}, this.eY = function() {
		aD.hE || (this.qD.eY(), 3 !== t.tD) || bf.kN() % 15 != 5 && 2 !== aD.a11 || t.a2H().aSy()
	}, this.aT1 = function() {
		var aW4 = 0 !== aD.a11,
			aW5 = aD.a5Z;
		aW4 || aa.aHN(), aD.a5X.a5w(), aD.data.canvas = null, b0.y.close(b0.y.a2L, 3257), b0.y.a2L = 0, aD.data.isReplay = 1, aD.a5b(), aW4 && (aD.a5Z = aW5)
	}, this.aT0 = function(qa) {
		var aB = qa.indexOf("=");
		return 0 <= aB ? qa.substring(aB + 1) : qa
	}, this.aSz = function(qa) {
		return qa
	}
}

function aW0() {
	this.aW6 = null, this.aW7 = null, this.aW8 = null, this.aW9 = null, this.aWA = null, this.aWB = null, this.a5m = "";
	var aWC = 0;
	this.dd = function() {
		this.aW6 = [], this.aW7 = [], this.aW8 = [], this.aW9 = [], this.aWA = [0], this.aWB = [0], aWC = 0, this.a5m = ""
	}, this.qE = function(id, fo, fq, fs) {
		aD.hE || 2 === aD.a11 || (0 === this.aWA[aWC] && (this.aWB[aWC] ? (this.aWA.push(1), this.aWB.push(0), aWC++) : this.aWA[aWC] = 1), this.aW6.push(id), this.aW7.push(fo), this.aW8.push(void 0 === fq ? 0 : fq), this.aW9.push(void 0 === fs ?
			0 : fs), this.aWB[aWC]++)
	}, this.eY = function() {
		0 === this.aWA[aWC] ? this.aWB[aWC]++ : (this.aWA.push(0), this.aWB.push(0), aWC++)
	}
}

function aW2() {
	var aWD = 0;

	function aWH(qa, id) {
		aWD || (id ? 1 === id ? aN.a74 = L(474) + ": " + qa : t.u(4, 3, new v(L(475), qa, 1)) : t.u(4, 3, new v("⚠️ " + L(473), qa, 1)))
	}
	this.xI = function(qa, aWE) {
		var iO, ql;
		return aWD = aWE, bG.tG.xA(bG.tG.x8(bG.tG.x6(qa))), aN.a74 = "", !! function() {
			if (bH.size < 10) aWH("File Too Small");
			else {
				var aWJ = bH.q1(12),
					r = (aWJ !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aWH(r = (r += "   Found: " + aWJ) + ("   Compatible at " + b0.y.a1R() + "/" + aWJ), 1)), bH.q1(12)),
					aWK = bH.q1(31);
				if (aWK !== bH.size) aWH("Size Error: " + aWK + " " + bH.size);
				else if (function(j, aWJ) {
						for (var gd = bH.aC, f5 = bH.size, aVF = aWJ, aB = 3; aB < f5; aB++) aVF = aVF + gd[aB] & 4095;
						return aVF === j || (aWH("Hash Error: " + aVF + " " + j + " " + f5), !1)
					}(r, aWJ)) return 1
			}
			return
		}() && (iO = bH, (ql = aD.data = new a5W).mapType = iO.q1(2), ql.mapProceduralIndex = iO.q1(8), ql.mapRealisticIndex = iO.q1(8), ql.mapSeed = iO.q1(14), ql.mapName = iO.aWM(5), 2 === ql.mapType && iO.aWN(), ql.passableWater = iO.q1(
			1), ql.passableMountains = iO.q1(1), ql.playerCount = iO.q1(10), ql.humanCount = iO.q1(10), ql.selectedPlayer = iO.q1(9), ql.gameMode = iO.q1(1), ql.playerMode = iO.q1(2), ql.battleRoyaleMode = iO.q1(2), ql.numberTeams = iO.q1(4),
			ql.isZombieMode = iO.q1(1), ql.isContest = iO.q1(1), ql.isReplay = iO.q1(1), ql.elo = iO.aWO(2, 14, 2), ql.colorsType = iO.q1(1), ql.colorsPersonalized = iO.q1(1), ql.colorsData = iO.aWO(10, 18, 512), ql.selectableColor = iO.q1(
			1), ql.teamPlayerCount = iO.aWO(4, 10, 9), ql.neutralBots = iO.q1(1), ql.botDifficultyType = iO.q1(2), ql.botDifficultyValue = iO.q1(4), ql.botDifficultyTeam = iO.aWO(4, 4, 9), ql.botDifficultyData = iO.aWO(10, 4, 512), ql
			.spawningType = iO.q1(2), ql.spawningSeed = iO.q1(14), ql.spawningData = iO.aWO(11, 12, 1024), ql.selectableSpawn = iO.q1(1), ql.playerNamesType = iO.q1(2), ql.playerNamesData = iO.aWP(10, 5, 512), ql.selectableName = iO.q1(1), ql
			.aIncomeType = iO.q1(2), ql.aIncomeValue = iO.q1(8), ql.aIncomeData = iO.aWO(10, 8, 512), ql.tIncomeType = iO.q1(2), ql.tIncomeValue = iO.q1(8), ql.tIncomeData = iO.aWO(10, 8, 512), ql.iIncomeType = iO.q1(2), ql.iIncomeValue = iO
			.q1(8), ql.iIncomeData = iO.aWO(10, 8, 512), ql.sResourcesType = iO.q1(2), ql.sResourcesValue = iO.q1(11), ql.sResourcesData = iO.aWO(10, 11, 512), ql.a5u = iO.aWO(10, 30, 0), !! function() {
				var iO = bH,
					xJ = iO.q1(5),
					aWQ = iO.q1(30),
					aWR = iO.q1(30);
				if (aWQ + aWR > 8 * iO.size) return void aWH("Corrupted File");
				return function(f5) {
						var aWU = new Uint8Array(f5),
							aWV = new Uint16Array(f5),
							aWW = new Uint32Array(f5),
							aWX = new Uint32Array(f5);
						b9.qD.aW6 = aWU, b9.qD.aW7 = aWV, b9.qD.aW8 = aWW, b9.qD.aW9 = aWX;
						for (var aB = 0; aB < f5; aB++) {
							var id = bH.q1(4);
							aWU[aB] = id, aWV[aB] = bH.q1(9), 0 === id ? aWW[aB] = bH.q1(22) : 1 === id ? (aWW[aB] = bH.q1(10), aWX[aB] = bH.q1(10)) : 2 === id ? (aWW[aB] = bH.q1(10), aWX[aB] = bH.q1(9)) : 3 === id ? (aWW[aB] = bH.q1(10),
								aWX[aB] = bH.q1(27)) : 4 === id ? (aWW[aB] = bH.q1(10), aWX[aB] = bH.q1(16)) : 5 === id || 6 === id ? aWW[aB] = bH.q1(10) : 7 === id ? aWW[aB] = bH.q1(1) : 10 === id && (aWW[aB] = bH.q1(20), aWX[aB] = bH
								.q1(22))
						}
					}(aWQ),
					function(f5, xJ) {
						var aWA = new Uint8Array(f5),
							aWB = new Array(f5);
						aWB.fill(0), b9.qD.aWA = aWA, b9.qD.aWB = aWB;
						for (var aB = 0; aB < f5; aB++) aWA[aB] = bH.q1(1), aWB[aB] = bH.q1(xJ)
					}(aWR, xJ), 1
			}()) && (bH.eC < 8 * bH.size - 13 || bH.eC > 8 * bH.size ? (aWH("Out Of Bounds Error: " + bH.eC + " " + 8 * bH.size), !1) : (b9.qD.a5m = qa, 2 !== aD.data.mapType || (aWH("Load base64 image...", 2), aWE)))
	}, this.aJn = function(aJE, aWI) {
		var a3t = document.createElement("canvas"),
			i7 = a3t.getContext("2d");
		if (a3t.width = aJE.width, a3t.height = aJE.height, i7.drawImage(aJE, 0, 0), aD.data.canvas = a3t, aWD || aWI) return aD.a11 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aT1()
	}
}

function aW1() {
	this.a0T = function() {
		var xJ = function() {
				for (var aWB = b9.qD.aWB, f5 = aWB.length, max = 0, aB = 0; aB < f5; aB++) max = Math.max(max, aWB[aB]);
				return xQ(Math.max(max, 1))
			}(),
			i = (ql = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.eC += 43, i.a8(2, ql.mapType), i.a8(8, ql.mapProceduralIndex), i.a8(8, ql.mapRealisticIndex), i.a8(14, ql.mapSeed), i.aWe(ql.mapName, 5), 2 === ql.mapType && i.aWf(ql.canvas),
				i.a8(1, ql.passableWater), i.a8(1, ql.passableMountains), i.a8(10, ql.playerCount), i.a8(10, ql.humanCount), i.a8(9, ql.selectedPlayer), i.a8(1, ql.gameMode), i.a8(2, ql.playerMode), i.a8(2, ql.battleRoyaleMode), i.a8(4, ql
					.numberTeams), i.a8(1, ql.isZombieMode), i.a8(1, ql.isContest), i.a8(1, ql.isReplay), i.dj(ql.elo, 2, 14), i.a8(1, ql.colorsType), i.a8(1, ql.colorsPersonalized), i.dj(ql.colorsData, 10, 18), i.a8(1, ql.selectableColor), i.dj(
					ql.teamPlayerCount, 4, 10), i.a8(1, ql.neutralBots), i.a8(2, ql.botDifficultyType), i.a8(4, ql.botDifficultyValue), i.dj(ql.botDifficultyTeam, 4, 4), i.dj(ql.botDifficultyData, 10, 4), i.a8(2, ql.spawningType), i.a8(14, ql
					.spawningSeed), i.dj(ql.spawningData, 11, 12), i.a8(1, ql.selectableSpawn), i.a8(2, ql.playerNamesType), i.aWg(ql.playerNamesData, 10, 5), i.a8(1, ql.selectableName), i.a8(2, ql.aIncomeType), i.a8(8, ql.aIncomeValue), i.dj(ql
					.aIncomeData, 10, 8), i.a8(2, ql.tIncomeType), i.a8(8, ql.tIncomeValue), i.dj(ql.tIncomeData, 10, 8), i.a8(2, ql.iIncomeType), i.a8(8, ql.iIncomeValue), i.dj(ql.iIncomeData, 10, 8), i.a8(2, ql.sResourcesType), i.a8(11, ql
					.sResourcesValue), i.dj(ql.sResourcesData, 10, 11), i.dj(ql.a5u, 10, 30), ! function(xJ) {
					var i = bE,
						aW6 = b9.qD.aW6,
						fo = b9.qD.aW7,
						fq = b9.qD.aW8,
						fs = b9.qD.aW9,
						f5 = aW6.length;
					i.a8(5, xJ), i.a8(30, f5), i.a8(30, b9.qD.aWB.length);
					for (var aB = 0; aB < f5; aB++) {
						var ed = aW6[aB];
						i.a8(4, ed), i.a8(9, fo[aB]), 0 === ed ? i.a8(22, fq[aB]) : 1 === ed ? (i.a8(10, fq[aB]), i.a8(10, fs[aB])) : 2 === ed ? (i.a8(10, fq[aB]), i.a8(9, fs[aB])) : 3 === ed ? (i.a8(10, fq[aB]), i.a8(27, fs[aB])) : 4 === ed ? (i
							.a8(10, fq[aB]), i.a8(16, fs[aB])) : 5 === ed || 6 === ed ? i.a8(10, fq[aB]) : 7 === ed ? i.a8(1, fq[aB]) : 10 === ed && (i.a8(20, fq[aB]), i.a8(22, fs[aB]))
					}
				}(xJ), ! function(xJ) {
					for (var i = bE, aWA = b9.qD.aWA, aWB = b9.qD.aWB, f5 = aWA.length, aB = 0; aB < f5; aB++) i.a8(1, aWA[aB]), i.a8(xJ, aWB[aB])
				}(xJ), bE.eC),
			ql = bL.fW(i - 1, 6) + 1,
			xJ = (bD.aUj(6 * ql) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.eC = 24, i.a8(31, i.g.length), i.eC = 12, i.a8(12, function() {
					for (var g = bE.g, f5 = g.length, aVF = l.rVersion, aB = 3; aB < f5; aB++) aVF = aVF + g[aB] & 4095;
					return aVF
				}())
			}(), bH.dd(bE.g), bF.tG.tH(bF.tG.tI(ql)));
		return bH.ud(), bE.dd(), xJ
	}
}

function cp() {
	var ed, bu = !1,
		aWi = !1,
		aWj = -1e4,
		aWk = -1,
		aWl = 0;

	function resize(aWp) {
		ed = 0, ab.tf() && (aWn(aWp) || bu) && (bu = !1, bc.resize(), bW.aCu.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a11 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.aA3()) : (aa.aHP(), aa.aHQ()), bf.dk = !0)
	}

	function aWm(fX) {
		return fX && 128 < fX ? Math.floor(fX) : 128
	}

	function aWn(aWp) {
		var i, j, aWr, tK, a9R;
		if (!(0 < h.ss)) return tK = aWm(document.documentElement.clientWidth), a9R = aWm(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tK, j = a9R, aWr = 0 !== a0.id || i < j ?
			700 : 1200, aWr = Math.min(aWr / ((i + j) / 2), 1), aWr = 0 === bj.eQ.data[1].value ? 2 * aWr / 3 : Math.min(aWr + (bj.eQ.data[1].value - 1) * (1 - aWr) / 2, 1), h.k = (window.devicePixelRatio || 1) * aWr, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aWp && !aWi ? (aWi = !0, t.removeChild(document.body, a2Y)) : aWi && (aWi = !1, document.body.appendChild(a2Y)), i = Math.floor(.5 + tK * h.k), j = Math.floor(.5 + a9R * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCW(i, j), h.max = a7J(i, j), h.iF = bL.fW(i + j, 2), h.vV = i / j, a2Y.width = i, a2Y.height = j, a2Y.style.width = tK + "px", a2Y.style.height = a9R + "px", aWk = bf.eT + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iF = 0, this.vV = 1, this.k = 1, this.ss = 0, this.de = function() {
		this.i = aWm(document.documentElement.clientWidth) + 2, this.j = aWm(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		ed = 1, a2Y = document.getElementById("canvasA"), 2 === a0.id && (a2Y.style.webkitUserSelect = "none"), (vZ = a2Y.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aWn(0)
	}, this.eY = function() {
		50 <= ++ed && resize(0), -1 === aWk || bf.eT < aWk || (aWk = -1, 2e3 * ++aWl >= bf.eT + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dn = function(jf) {
		bu = !0, resize(jf)
	}, this.a3D = function() {
		aWj + 1e3 > bf.eT || (aWj = bf.eT, resize(0))
	}
}

function dH() {
	this.aUs = new aWt, this.a1r = new aWu, this.aV9 = new aWv
}

function aWv() {
	this.q1 = function() {
		return 69
	}, this.a0T = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aWu() {
	this.a1s = function() {
		for (var gd, f5 = al.kw, a0p = al.l1, a1c = ag.a1c, a9F = this.aIx(), aB = 0; aB < f5; aB++) gd = a0p[aB], bA.gR.jn(gd) || (a1c[gd] = a9F);
		var qI = ag.qI,
			jT = ag.jT,
			jU = ag.jU,
			a1a = ag.a1a,
			f5 = aD.kQ;
		for (aB = 0; aB < f5; aB++)(0 === a1a[aB] || jU[aB] < 1 || 2 * qI[aB] > 3 * (jT[aB] + jU[aB])) && (a1c[aB] = 0);
		var a1p = 0;
		for (aB = 0; aB < f5; aB++) a1p += 0 < a1c[aB];
		return a1p
	}, this.aIx = function() {
		return Math.min(65535, bf.kN())
	}
}

function aWt() {
	function aWz(g, fX, hx) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fX >> (aB + hx) % 30 & 1)) % 256
	}
	this.eY = function(aWw, aWx) {
		var g = new Uint8Array(256);
		return function(g, aWw, aWx) {
				var aB, aX1 = 3 + (4 + aWw) % 32768,
					aX2 = 12 + aWx % 32768,
					aX3 = 17 + ((aWw & aWx) + (aWw | aWx) + aWw) % 32768;
				for (aB = 0; aB < 256; aB++) aX1 = 1 + aX1 * aX2 % aX3, g[aB] = aX1 % 256
			}(g, aWw, aWx), aWz(g, aWw, 2), aWz(g, aWx, 7),
			function(g) {
				var aB, fX, eC = 0;
				for (aB = 0; aB < 3e4; aB++) fX = g[eC], g[eC] = (fX + aB + g[(eC + aB) % 256]) % 256, eC = (fX + aB + eC + (fX & eC)) % 256
			}(g),
			function(g) {
				var aB, a9R = 1,
					u3 = 1;
				for (aB = 0; aB < 256; aB += 2) a9R = (1 + a9R) * (g[aB] + 1) % 1073741824, u3 = (1 + u3) * (g[aB + 1] + 1) % 1073741824;
				return [a9R, u3]
			}(g)
	}, this.aUt = function(aX4, aX5, aX6, result) {
		for (var gY = 1 << aX4, aB = 0; aB < gY; aB++)
			if (this.aX7(aB, aX5, aX6) === result) return aB;
		return 0
	}, this.aX7 = function(aX8, aX5, aX6) {
		for (var yL = aX5 + aX8, yU = aX6 + aX8, fX = yL + yU & 2147483647, fO = 1; fO <= 16; fO++) fX = (fX = (fX ^ fX >> fO) >>> 1 + (3 & yL)) * (7 + (1023 & (yL | yU))) & 1073741823, yU >>= 1 + (1 & (yL >>= 1 + (1 & (fX += 65535 & yU))));
		return fX &= 1073741823
	}
}

function cm() {
	var aX9, aXA, iJ, aXB;
	this.dd = function() {
		var aB, fC, fE, aVA, aXC, i, j, zA, i4, xa, fX, gd, fL, fO, aXF;
		if (function() {
				if (iJ = !0, aXB = "rgb(" + bS.xY[0] + "," + bS.xY[1] + "," + bS.xY[2] + ")", bS.aMI(bS.el)) return 1;
				return iJ = !1, 0
			}()) aXA = null;
		else {
			for (aX9 = bL.fW(96, 4), aXC = 1 === bS.el ? (aVA = 0, 160) : (aVA = 128, 32), aXB = "rgb(" + aVA + "," + aVA + "," + aVA + ")", aXA = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aXA[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fG : aX9, j = aB % 2 == 0 ? aX9 : bS.fH + 2 * aX9, aXA[aB].width = i, aXA[aB].height = j, xa = (i4 = (zA = aXA[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fE = aX9 - 1; 0 <= fE; fE--)
						for (fX = aXC + Math.floor((fE + 1) * (aVA - aXC) / (aX9 + 1)), fC = i - 1; 0 <= fC; fC--) xa[gd = 4 * ((0 === aB ? aX9 - fE - 1 : fE) * i + fC)] = fX, xa[gd + 1] = fX, xa[gd + 2] = fX, xa[gd + 3] = 255;
				else {
					for (fC = aX9 - 1; 0 <= fC; fC--)
						for (fX = aXC + Math.floor((fC + 1) * (aVA - aXC) / (aX9 + 1)), fE = j - 1 - aX9; aX9 <= fE; fE--) xa[gd = 4 * (fE * i + (3 === aB ? aX9 - fC - 1 : fC))] = fX, xa[gd + 1] = fX, xa[gd + 2] = fX, xa[gd + 3] = 255;
					for (fO = 1; 0 <= fO; fO--)
						for (fC = aX9 - 1; 0 <= fC; fC--)
							for (fE = aX9 - 1; 0 <= fE; fE--) fL = (Math.pow(fC * fC + fE * fE, .5) + 1) / (aX9 + 1), fX = aXC + Math.floor((1 < fL ? 1 : fL) * (aVA - aXC)), xa[gd = 4 * ((0 === fO ? aX9 - fE - 1 : fE + fO * (j - aX9)) * i + (
								1 === aB ? fC : aX9 - fC - 1))] = fX, xa[gd + 1] = fX, xa[gd + 2] = fX, xa[gd + 3] = 255
				}
				zA.putImageData(i4, 0, 0)
			}
			aXF = aXC, bS.xT.fillStyle = "rgb(" + aXF + "," + aXF + "," + aXF + ")", bS.xT.fillRect(0, 0, bS.fG, 1), bS.xT.fillRect(0, bS.fH - 1, bS.fG, 1), bS.xT.fillRect(0, 0, 1, bS.fH), bS.xT.fillRect(bS.fG - 1, 0, 1, bS.fH)
		}
	}, this.z4 = function() {
		var fO = iJ ? 0 : -aX9;
		aO5(fO, fO, bS.fG - 2 * fO, bS.fH - 2 * fO, ba.aXG, ba.aXH, ba.aXI, ba.aXJ) || (vZ.fillStyle = aXB, vZ.fillRect(0, 0, h.i, h.j))
	}, this.vY = function() {
		iJ || (aO4(0, -aX9, bS.fG, aX9, ba.aXG, ba.aXH, ba.aXI, ba.aXJ) && vZ.drawImage(aXA[0], ba.aXK, ba.aXL - aX9), aO4(bS.fG, -aX9, aX9, bS.fH + 2 * aX9, ba.aXG, ba.aXH, ba.aXI, ba.aXJ) && vZ.drawImage(aXA[1], ba.aXK + bS.fG, ba.aXL - aX9),
			aO4(0, bS.fH, bS.fG, aX9, ba.aXG, ba.aXH, ba.aXI, ba.aXJ) && vZ.drawImage(aXA[2], ba.aXK, ba.aXL + bS.fH), aO4(-aX9, -aX9, aX9, bS.fH + 2 * aX9, ba.aXG, ba.aXH, ba.aXI, ba.aXJ) && vZ.drawImage(aXA[3], ba.aXK - aX9, ba.aXL - aX9))
	}
}

function d6() {
	this.aIv = new aXM, this.z7 = new aXN, this.y = new aXO, this.is = new aXP, this.aXF = new aXQ, this.mL = new aXR, this.kE = new aXS, this.lD = new aXT, this.aXU = new aXV, this.aXW = new aXX, this.mW = new aXY, this.hf = new aXZ, this.lm =
		new aXa, this.lF = new aXb, this.hi = new aXc, this.mP = new aXd, this.qQ = new aXe, this.dd = function() {
			this.lm.dd(), this.z7.dd(), this.y.dd(), this.is.dd(), this.aXF.dd(), this.aXW.dd(), this.mP.dd()
		}, this.vY = function() {
			this.aXW.vY(), this.z7.vY()
		}
}

function aXS() {
	this.eY = function(player) {
		return !!bN.mW.mX(player) && !(bN.y.kU[player] >= Math.max(3 * ao.performance.le, aE.ke[aE.ho[player]]) || !bA.gR.mY(player, aE.kc[aE.ho[player]], 32, 0)) && (aW.aCJ() ? function(player) {
			var aXh = bN.lF.aCM(),
				f5 = aXh.length;
			if (0 === f5) return !1;
			aXh = aXh[ay.jh(f5)], f5 = bN.y.mJ[aXh];
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
			}(player, aXh) && !!bN.hi.qP(player, f5, 1) && (bA.gR.ma(player), bN.y.mb(player), !0)
		}(player) : !!(ao.jH.eY(player) || ao.j6.eY(player) || ao.j8.eY(player)) && (function(player) {
			bO.fh[1] = 4, bA.gR.ma(player), bN.y.mb(player)
		}(player), !0))
	}
}

function aXd() {
	var aXk = 0,
		aXl = null;
	this.dd = function() {
		null === aXl && (aXl = new Uint16Array(2 * bN.y.ke)), aXk = 0
	}, this.ec = function(aXm, mP) {
		var aXn = aXl;
		aXn[aXk++] = aXm, aXn[aXk++] = mP
	}, this.mQ = function(player, mO) {
		for (var aXn = aXl, f5 = aXk, aB = 0; aB < f5; aB += 2)
			if (aXn[aB] === mO && bN.lF.aXo(aXn[aB + 1]) && player === bN.y.mK[bO.fh[2]] >> 3) return !0;
		return !1
	}, this.aXp = function(aXq) {
		var mL = bN.y.mH[aXq];
		if (!(mL < 64)) {
			for (var mO = bN.y.mJ[aXq], aXn = aXl, f5 = aXk, aB = f5 - 2; 0 <= aB; aB -= 2)
				if (aXn[aB] === mO) {
					{
						aXv = void 0;
						var aXv = aXn[aB + 1];
						bN.lF.aXo(aXv) && bN.mP.aY3(bO.fh[2])
					}
					aXn[aB] = aXn[f5 - 2], aXn[aB + 1] = aXn[f5 - 1], f5 -= 2
				} aXk = f5
		}
	}, this.aXs = function(aXt, aXu) {
		for (var aXv = bN.y.mJ[aXt], mO = -1, aXn = aXl, f5 = aXk, aB = 1; aB < f5; aB += 2)
			if (aXn[aB] === aXv) {
				mO = aXn[aB - 1];
				break
			} if (-1 === mO) return !1;
		if (!bN.lF.aXo(mO)) return !1;
		var aXq = bO.fh[2],
			ll = bN.y.mI[aXq];
		if (aXu === ll[ll.length - 1]) bN.y.mI[aXt] = bN.lm.aXw(bN.y.mI[aXt], bN.lm.lu(ll));
		else {
			var aXx = bN.lF.aXy(ll, aXu);
			if (-1 === aXx) return !1;
			var aXz = bN.y.mU[aXq];
			aXx === aXz ? (aXq = bM.iq(bN.y.mV[aXq]), bN.y.mI[aXt] = bN.lm.aY1(bN.y.mI[aXt], ll, aXx, aXu, bM.iV(ll[aXx], aXu) > bM.iV(ll[aXx], aXq))) : bN.y.mI[aXt] = bN.lm.aY1(bN.y.mI[aXt], ll, aXx, aXu, aXz < aXx)
		}
		return !0
	}, this.aY3 = function(aY4) {
		var ll, lL = bN.y,
			mL = lL.mH[aY4];
		return mL % 64 != 5 && (ll = lL.mI[aY4], lL.aY5[aY4] = 65535 - lL.aY5[aY4], lL.mU[aY4] = ll.length - lL.mU[aY4] - 2, lL.mI[aY4] = bN.lm.lu(ll), lL.mH[aY4] = mL - mL % 64 + 5, !0)
	}
}

function aXY() {
	this.mX = function(player) {
		return !!aD.data.passableWater && bN.y.mG !== bN.y.ke && bN.y.kU[player] !== bN.y.aY6 && 0 !== ag.gm[player].length
	}, this.qL = function(aVi) {
		var mL = bO.fh[1];
		return !(4 <= mL || !bN.lF.aY7(bM.ev(aVi))) && ac.f0(bM.ev(bM.iu(aVi, mL)))
	}
}

function aXM() {
	this.aIw = function(player) {
		for (var a8f = bN.y.a8f, tX = player << 3, aB = tX + bN.y.kU[player] - 1; tX <= aB; aB--) this.aY8(a8f[aB])
	}, this.aY8 = function(aY9) {
		var y = bN.y,
			aYA = y.mG - 1,
			aYB = y.mK[aY9],
			aYC = y.aYD[aY9],
			aYE = y.mV[aY9];
		y.mG = aYA, y.mK[aY9] = y.mK[aYA], y.mV[aY9] = y.mV[aYA], y.aY5[aY9] = y.aY5[aYA], y.a7a[aY9] = y.a7a[aYA], y.aYD[aY9] = y.aYD[aYA], y.mJ[aY9] = y.mJ[aYA], y.mH[aY9] = y.mH[aYA], y.aYF[aY9] = y.aYF[aYA], y.mI[aY9] = y.mI[aYA], y.mU[aY9] =
			y.mU[aYA], y.a8f[y.mK[aY9]] = aY9,
			function(aVh) {
				var player = aVh >> 3,
					y = bN.y,
					f5 = y.kU[player] - 1,
					aYI = (player << 3) + f5;
				y.kU[player] = f5, aYI !== aVh && (y.a8f[aVh] = y.a8f[aYI], y.mK[y.a8f[aVh]] = aVh)
			}(aYB), bN.is.is[bM.ir(y.mV[aY9])][y.aYD[aY9]] = aY9, aYA = bM.ir(aYE), aYB = aYC, aYA = bN.is.is[aYA], y = aYA.pop(), aYB !== aYA.length && (aYA[aYB] = y, bN.y.aYD[y] = aYB)
	}
}

function aXN() {
	var aYK, aYL = 8,
		aYM = null;

	function aYR(xa, er, eC) {
		er *= 4;
		xa[er] = 255, xa[1 + er] = 255, xa[2 + er] = eC, xa[3 + er] = 255
	}

	function aYT(i7, aXB) {
		var fC, fE, iP, er, aYV, aYW, i1 = aYL,
			i4 = bA.qt.getImageData(i7, i1, i1),
			xa = i4.data,
			lL = (i1 >> 1) - .5,
			aYY = bA.r1.a3R(aXB, .5);
		for (bA.r1.a3T(aXB, aYY, 300) || bA.r1.a3V(aXB, 100), fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) aYW = (i1 - 1.5) * (i1 - 1.5) / 4, xa[er = 4 * (fE * i1 + fC)] = (aYV = (iP = (iP = fC - lL) * iP + (iP = fE - lL) * iP) <= (i1 - 4.5) * (i1 - 4.5) / 4 ? aYY : aXB)[0], xa[1 + er] = aYV[1], xa[2 + er] = aYV[2],
				xa[3 + er] = aYW < iP ? 0 : 255;
		i7.putImageData(i4, 0, 0)
	}
	this.dd = function() {
		var eC, i1, a3t, i7, i4, xa;
		(aYK = aYK || new Array(aD.f2)).fill(null), eC = 255, i1 = aYL + 4, a3t = bA.qt.xP(i1, i1), i7 = bA.qt.getContext(a3t, !0), i4 = bA.qt.getImageData(i7, i1, i1), aYR(xa = i4.data, i1 + 1, eC), aYR(xa, i1 + 2, eC), aYR(xa, 2 * i1 + 1, eC),
			aYR(xa, 2 * i1 - 3, eC), aYR(xa, 2 * i1 - 2, eC), aYR(xa, 3 * i1 - 2, eC), aYR(xa, i1 * (i1 - 3) + 1, eC), aYR(xa, i1 * (i1 - 2) + 1, eC), aYR(xa, i1 * (i1 - 2) + 2, eC), aYR(xa, i1 * (i1 - 2) - 2, eC), aYR(xa, i1 * (i1 - 1) - 3, eC),
			aYR(xa, i1 * (i1 - 1) - 2, eC), i7.putImageData(i4, 0, 0), aYM = a3t,
			function() {
				if (aD.hz)
					for (var a3t = new Array(bg.kn.length), f5 = aD.f2, aYP = aYK, aBe = bg.aBe, aB = 0; aB < f5; aB++) {
						var a6L = aBe[aB];
						a3t[a6L] || (a3t[a6L] = function(a6L) {
							var a3t = bA.qt.xP(aYL, aYL),
								i7 = bA.qt.getContext(a3t, !0),
								g = bO.fe;
							return g.set(bg.aYU[a6L]), aYT(i7, g), a3t
						}(a6L)), aYP[aB] = a3t[a6L]
					}
			}()
	}, this.vY = function() {
		var aB, player, aYZ, aOD, ho, iO, aYb, aYd, aYe, mV = bN.y.mV,
			mK = bN.y.mK,
			a7a = bN.y.a7a,
			aYF = bN.y.aYF,
			aYf = aYK,
			aYg = aD.ep,
			f5 = bN.y.mG,
			aYh = h.i,
			aYi = h.j,
			aYj = bS.fG << 4,
			eu = iG,
			ej = eu / aYL,
			nQ = ii / eu,
			nR = ij / eu,
			iP = (aYh + ii) / eu - nQ,
			iS = (aYi + ij) / eu - nR,
			i7 = vZ;
		for (i7.imageSmoothingEnabled = eu < 9, bA.qt.textAlign(i7, 1), bA.qt.textBaseline(i7, 1), aB = 0; aB < f5; aB++) player = mK[aB] >> 3, ho = a7a[aB], aYZ = .9 + .1 * Math.log10(ho), aOD = (iO = mV[aB]) % aYj / 16 - aYZ, iO = aYi * (Math
			.floor(iO / aYj) / 16 - aYZ - nR) / iS, aYb = -2 * (aYe = eu * aYZ) * (1 + (aYd = +(player === aYg)) / 8), aYd = aYd * aYe / 4, (aYe = aYh * (aOD - nQ) / iP) < aYb || iO < aYb || aYh + aYd < aYe || aYi + aYd < iO || (aOD = 2 *
			aYZ * ej, aYb = aYZ * eu, null === (aYd = aYf[player]) && (aYf[player] = aYd = function(player) {
				var a3t = bA.qt.xP(aYL, aYL);
				return aYT(bA.qt.getContext(a3t, !0), ac.a8G(player)), a3t
			}(player)), player === aYg && (i7.setTransform(aOD, 0, 0, aOD, aYe - 2 * aOD, iO - 2 * aOD), i7.drawImage(aYM, 0, 0)), i7.setTransform(aOD, 0, 0, aOD, aYe, iO), i7.drawImage(aYd, 0, 0), (aYZ = Math.floor(function(ho) {
				if (ho < 1e3) return .42;
				if (ho < 1e4) return .34;
				if (ho < 1e6) return .26;
				if (ho < 1e8) return .19;
				return .15
			}(ho) * aYb)) < 6) || (i7.setTransform(1, 0, 0, 1, 0, 0), i7.fillStyle = aYF[aB] ? bB.oY : bB.o0, i7.font = bA.qt.sk(1, aYZ), i7.fillText(bA.rs.a0I(ho), aYe + aYb, iO + aYb + .1 * aYZ));
		i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aXX() {
	var aYm;
	this.dd = function() {
		if (aD.hz) {
			var hv = 1 - aD.yD;
			aYm = new Array(bg.kn.length);
			for (var aB = aD.yC - 1; 0 <= aB; aB--) {
				var a6L = bg.kn[aB + hv];
				aYm[a6L] = bP.y.aYo(20, bg.aYp[a6L])
			}
			9 === aD.ki && (aYm[1] = bP.y.aYo(20, bg.aYp[1]))
		} else aYm = [bP.y.aYo(20, bg.aYp[7])]
	}, this.vY = function() {
		var nk = iG;
		if (!(5 <= nk)) {
			var aYh = h.i,
				aYi = h.j,
				nQ = ii / nk,
				nR = ij / nk,
				nd = (aYh + ii) / nk,
				ne = (aYi + ij) / nk,
				ge = -20 * nk,
				aYr = .5 * ge,
				aYj = bS.fG << 4,
				f5 = bN.y.mG,
				mV = bN.y.mV,
				mK = bN.y.mK,
				aBe = bg.aBe,
				a3t = aYm,
				i7 = vZ;
			3 < nk && (i7.globalAlpha = .5 * (5 - nk));
			for (var aB = 0; aB < f5; aB++) {
				var iO = mV[aB],
					fC = aYh * (iO % aYj / 16 - nQ) / (nd - nQ) + aYr,
					iO = aYi * (Math.floor(iO / aYj) / 16 - nR) / (ne - nR) + aYr;
				aYh < fC || aYi < iO || fC < ge || iO < ge || (i7.setTransform(nk, 0, 0, nk, fC, iO), i7.drawImage(a3t[aBe[mK[aB] >> 3]], 0, 0))
			}
			i7.globalAlpha = 1, i7.setTransform(nk, 0, 0, nk, 0, 0)
		}
	}
}

function aXb() {
	this.aYu = function(player, id) {
		for (var aYv = ag.gm[player], f5 = aYv.length, aB = 0; aB < f5; aB++)
			if (bM.iH(aYv[aB], id)) return !0;
		return !1
	}, this.aYw = function(player, er) {
		for (var iX, aYx, ej, aYv = ag.gm[player], f5 = aYv.length, i = bS.fG, aYz = bM.fD(er), aZ0 = bM.fF(er), fB = -1, min = bS.fG * bS.fG + bS.fH * bS.fH, id = ac.en(bM.ev(er)), aB = 0; aB < f5; aB++)(aYx = (aYx = aYz - (iX = (ej = aYv[
			aB]) >> 2) % i) * aYx + (aYx = aZ0 - ~~((.5 + iX) / i)) * aYx) < min && bM.iH(ej, id) && (min = aYx, fB = iX);
		return fB
	}, this.lG = function(iW, iX) {
		for (var id = ac.en(bM.ev(iX)), iI = bM.iA, ej = bM.ev(iW), aZ1 = -1, aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			ac.iJ(eu) && ac.en(eu) === id && (-1 === aZ1 || bM.iY(bM.et(eu), iX) < bM.iY(aZ1, iX)) && (aZ1 = bM.et(eu))
		}
		return aZ1
	}, this.lp = function(player, er) {
		for (var iI = bM.iA, ej = bM.ev(er), aB = 0; aB < 4; aB++) {
			var eu = ej + iI[aB];
			if (ac.gf(eu) && ac.z2(player, eu)) return !0
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
	}, this.aY7 = function(ej) {
		if (ac.iJ(ej))
			for (var iI = bM.iA, aB = 0; aB < 4; aB++)
				if (ac.f0(ej + iI[aB])) return !0;
		return !1
	}, this.nP = function(player, id) {
		for (var tX = player << 3, tY = tX + bN.y.kU[player], mJ = bN.y.mJ, a8f = bN.y.a8f, aB = tX; aB < tY; aB++) {
			var a8g = a8f[aB];
			if (mJ[a8g] === id) return a8g
		}
		return -1
	}, this.nU = function(player) {
		return 0 === bN.y.kU[player] ? -1 : bN.y.a8f[player << 3]
	}, this.a6d = function(lf, lg) {
		var f5 = bN.y.mG;
		if (f5 < 1) return -1;
		for (var mV = bN.y.mV, aZ2 = 80, aQW = -1, aB = 0; aB < f5; aB++) {
			var fL = bM.iL(lf, lg, mV[aB]);
			fL < aZ2 && (aZ2 = fL, aQW = aB)
		}
		return function(aB, lf, lg) {
			if (aB < 0) return;
			var aZ9 = bN.y.mV[aB],
				aZA = bM.iR(aZ9),
				aZ9 = bM.iU(aZ9),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7a[aB]));
			return aB = Math.max(aB, bM.ik(bA.qt.tc(.02, 1.7))), bL.aOC(bM.iQ(lf), bM.iT(lg), aZA, aZ9, aB)
		}(aQW, lf, lg) ? aQW : -1
	}, this.aXo = function(nN) {
		for (var f5 = bN.y.mG, mJ = bN.y.mJ, aB = 0; aB < f5; aB++)
			if (mJ[aB] === nN) return bO.fh[2] = aB, !0;
		return !1
	}, this.aIs = function(player) {
		for (var tX = player << 3, tY = tX + bN.y.kU[player], a8f = bN.y.a8f, a7a = bN.y.a7a, ho = 0, aB = tX; aB < tY; aB++) ho += a7a[a8f[aB]];
		return ho
	}, this.aZ4 = function(player, aY4) {
		aY4 = bN.y.mI[aY4];
		return this.lp(player, aY4[aY4.length - 1])
	}, this.aZ5 = function(iW, iX, fL, aZ6) {
		var ia = bM.fD(iW),
			iW = bM.fF(iW),
			ic = bM.fD(iX),
			iX = bM.fF(iX),
			ic = (fL = Math.max(fL, 1), ic - ia),
			iX = iX - iW,
			iP = bL.fW(Math.abs(ic) * aZ6, fL),
			aZ6 = bL.fW(Math.abs(iX) * aZ6, fL);
		return bM.fS(ia + Math.sign(ic) * iP, iW + Math.sign(iX) * aZ6)
	}, this.aXy = function(ll, er) {
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
	}, this.aCM = function() {
		for (var aZC = m1[0], mK = bN.y.mK, mG = bN.y.mG, g = [], aB = 0; aB < mG; aB++) bA.gR.l4(aZC, mK[aB] >> 3) && g.push(aB);
		return g
	}, this.ln = function(player, ll) {
		for (var tX = player << 3, tY = tX + bN.y.kU[player], a8f = bN.y.a8f, mI = bN.y.mI, hX = ll[0], l3 = ll[ll.length - 1], aB = tX; aB < tY; aB++) {
			var gd = mI[a8f[aB]];
			if (gd[0] === hX && gd[gd.length - 1] === l3) return !0
		}
		return !1
	}
}

function aXc() {
	function aZF(player, aY4) {
		aY4 = bM.iq(bN.y.mV[aY4]), aY4 = ac.en(bM.ev(aY4));
		return !!bN.lF.aYu(player, aY4)
	}

	function aZD(player) {
		return bN.mW.mX(player) && !bN.lm.ls()
	}
	this.hj = function(player, er) {
		return !!aZD(player) && -1 !== (er = function(player, er) {
			for (var f5 = bN.y.mG, mV = bN.y.mV, mK = bN.y.mK, aZ2 = bM.iC(), aQW = -1, aB = 0; aB < f5; aB++) {
				var fL = bM.iV(er, bM.iq(mV[aB]));
				fL < aZ2 && bA.gR.l4(player, mK[aB] >> 3) && (aZ2 = fL, aQW = aB)
			}
			return aQW
		}(player, er)) && !!aZF(player, er) && (bO.fh[3] = bN.y.mJ[er], !0)
	}, this.pW = function(player, nN) {
		return !!aZD(player) && !!bN.lF.aXo(nN) && !!aZF(player, bO.fh[2])
	}, this.qP = function(player, nN, aZG) {
		return !! function(player, nN, aZG) {
			if (aZD(player) && bN.lF.aXo(nN)) {
				nN = bO.fh[2];
				if (bA.gR.l4(player, bN.y.mK[nN] >> 3)) {
					if (function(player, aY4) {
							return bN.lF.aZ4(player, aY4) && (bO.g[0] = bN.lm.lu(bN.y.mI[aY4]), bO.fh[1] = 6, !0)
						}(player, nN)) return 1;
					var aXj = bM.iq(bN.y.mV[nN]),
						aZK = bN.lF.aYw(player, aXj);
					if (-1 !== aZK) {
						aZK = bM.iV(aZK, aXj);
						if (!(aZG && 120 < aZK)) {
							aZG = function(aY4, aZL, aXj) {
								var ll = bN.y.mI[aY4],
									aY4 = bN.y.mU[aY4],
									aZN = bM.iV(aXj, ll[aY4 + 1]);
								if (aZL <= aZN) return bN.lF.aZ5(aXj, ll[aY4 + 1], aZN, aZL);
								for (var fL = aZL - aZN, f5 = ll.length - 1, aB = aY4 + 1; aB < f5; aB++) {
									var aZO = bM.iV(ll[aB], ll[aB + 1]);
									if (fL <= aZO) return bN.lF.aZ5(ll[aB], ll[aB + 1], aZO, fL);
									fL -= aZO
								}
								return ll[f5]
							}(nN, aZK, aXj);
							if (bN.lD.qM(player, aZG, 1)) return bO.fh[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nN, aZG) && (player = bO.fh[2], bN.y.mH[player] = 64 + bN.y.mH[player] % 64, bN.mP.ec(nN, bN.y.mZ), !0)
	}
}

function aXR() {
	function aZT(player, ho, aZR, aXj) {
		var jZ;
		if (ac.ew(aZR)) jZ = aD.f2;
		else {
			if ((jZ = ac.ex(aZR)) === player) return void bd.gV(player, ho - bA.gR.gU(player, ho), 12);
			if (!bs.ey(player, jZ)) return void b8.kS.pl(player, jZ, ho)
		}
		ad.jl(player, jZ) || ad.k4(player) ? (ag.gX[player].push(aXj << 2), ad.ec(player, ho, jZ), aF.jX(player, !0)) : bd.gV(player, ho, 12)
	}
	this.eY = function() {
		for (var mH = bN.y.mH, mV = bN.y.mV, aY5 = bN.y.aY5, aB = bN.y.mG - 1; 0 <= aB; aB--) 65535 === aY5[aB] && function(aB, aXj, hw) {
			if (6 === hw) {
				if (bN.mP.aXs(aB, aXj)) return bN.y.mU[aB]++, bN.y.aY5[aB] = 0, 0
			} else {
				var player = bN.y.mK[aB] >> 3,
					aB = bN.y.a7a[aB];
				bd.aZS(player), hw < 4 ? aZT(player, aB, aXj + bM.i9[hw] << 2, aXj) : 4 === hw ? function(player, ho, aXj) {
					var aB, f9, iI = bM.iA,
						eu = bM.ev(aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.ew(f9)) return aZT(player, ho, f9, aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9) && !ac.z2(player, f9)) return aZT(player, ho, f9, aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9)) return aZT(player, ho, f9, aXj)
				}(player, aB, aXj) : 5 === hw && function(player, ho, aXj) {
					var aB, f9, iI = bM.iA,
						eu = bM.ev(aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9) && ac.z2(player, f9)) return aZT(player, ho, f9, aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.gf(f9)) return aZT(player, ho, f9, aXj);
					for (aB = 0; aB < 4; aB++)
						if (f9 = eu + iI[aB], ac.ew(f9)) return aZT(player, ho, f9, aXj)
				}(player, aB, aXj)
			}
			return 1
		}(aB, bM.iq(mV[aB]), mH[aB] % 64) && (bN.mP.aXp(aB), bN.aIv.aY8(aB))
	}, this.aZQ = function(player, er, hw, nN, ho) {
		if (!(5 <= hw)) {
			var aYg = aD.ep;
			if (bA.gR.hH(aYg) && bs.ey(player, aYg) && player !== aYg && 0 !== ag.gm[aYg].length && bA.gR.a4U(player, 5)) {
				for (var aZR, fJ = !1, aB = 0; aB < 4; aB++)
					if (aZR = er + bM.i9[aB] << 2, ac.f0(aZR) && !ac.ew(aZR) && ac.ex(aZR) === aYg) {
						fJ = !0;
						break
					} fJ && (aN.a7j(719, 0), hw = ho < 25e3 ? L(476) + " (" + bA.rs.a0I(ho) + ") ⛵" : L(477) + " (" + bA.rs.a0I(ho) + ") 🚢", aN.zT(180, hw, 719, player, bB.oX, bB.nx, -1, !0, void 0, {
					fP: 1,
					nN: nN
				}))
			}
		}
	}
}

function aXO() {
	this.ke = 512, this.aY6 = 8, this.mG = 0, this.mZ = 0, this.mK = new Uint16Array(this.ke), this.mV = new Uint32Array(this.ke), this.aY5 = new Uint16Array(this.ke), this.a7a = new Uint32Array(this.ke), this.aYD = new Uint16Array(this.ke), this
		.mJ = new Uint16Array(this.ke), this.mH = new Uint8Array(this.ke), this.aYF = new Uint8Array(this.ke), this.mI = new Array(this.ke), this.mU = new Uint16Array(this.ke), this.kU = new Uint8Array(aD.f2), this.a8f = new Uint16Array(this.aY6 * aD
			.f2), this.dd = function() {
			this.mG = 0, this.mZ = 0, this.kU.fill(0), this.mI.fill(null)
		}, this.mb = function(player) {
			var ho = bO.fc[0],
				mL = bO.fh[1],
				ll = bO.g[0],
				aZW = this.mZ,
				f5 = this.mG,
				aZX = bM.ip(ll[0]),
				aZY = this.kU[player],
				aZZ = (player << 3) + aZY;
			this.mK[f5] = aZZ, this.mV[f5] = aZX, this.aY5[f5] = 0, ho < 60 && (bA.gR.gS(player, 60 - ho), ho = 60), this.a7a[f5] = ho, this.aYD[f5] = bN.is.mb(f5, bM.ir(aZX)), this.mJ[f5] = aZW, this.mH[f5] = mL, this.aYF[f5] = 0, this.mI[f5] = ll,
				this.mU[f5] = 0, this.mZ = (aZW + 1) % 65536, this.kU[player] = aZY + 1, this.a8f[aZZ] = f5, this.mG++, bN.mL.aZQ(player, ll[ll.length - 1], mL, aZW, ho)
		}, this.eY = function() {
			bN.mL.eY();
			for (var gd = aD.ep, eU = bN.lF.aIs(gd), sV = (! function(sV) {
					for (var aZe, mV = sV.mV, a7a = sV.a7a, aYF = sV.aYF, aY5 = sV.aY5, aYD = sV.aYD, mI = sV.mI, mU = sV.mU, sV = sV.mG, aYj = bS.fG << 4, aB = sV - 1; 0 <= aB; aB--) {
						var aZf = mV[aB],
							ll = mI[aB],
							aZg = mU[aB],
							aZX = bM.ip(ll[aZg]),
							aZh = bM.ip(ll[aZg + 1]),
							aZi = aZX % aYj,
							aZX = ~~((aZX + .5) / aYj),
							aZk = aZh % aYj,
							aZl = ~~((aZh + .5) / aYj),
							aZm = aZk - aZi,
							aZn = aZl - aZX,
							f8 = Math.max(~~Math.sqrt(aZm * aZm + aZn * aZn + .5), 1),
							aZo = a7a[aB],
							aZo = (aZo = aYF[aB] ? 4e4 : 25e4 + Math.min(20 * aZo, 3e5) + Math.min(aZo >> 3, 5e4), aY5[aB] + Math.max(~~((aZo + .5) / f8), 1));
						65535 <= aZo ? aZg + 2 < ll.length ? (mU[aB] = aZg + 1, mV[aB] = aZe = function(aB, aZp, aZi, aZj, aZg, f8, ll, aYj) {
							aZp = Math.min(aZp - 65535, 65535);
							var ll = bM.ip(ll[aZg + 2]),
								aZg = ll % aYj - aZi,
								ll = ~~((ll + .5) / aYj) - aZj,
								aZs = Math.max(~~Math.sqrt(aZg * aZg + ll * ll + .5), 1);
							return aZp = Math.min(Math.floor((f8 * aZp + .5) / aZs), 65534), bN.y.aY5[aB] = aZp, aZi + bL.fW(aZp * aZg, 65535) + aYj * (aZj + bL.fW(aZp * ll, 65535))
						}(aB, aZo, aZk, aZl, aZg, f8, ll, aYj)) : (mV[aB] = aZe = aZh, aY5[aB] = 65535) : (aY5[aB] = aZo, mV[aB] = aZe = aZi + bL.fW(aZo * aZm, 65535) + aYj * (aZX + bL.fW(aZo * aZn, 65535))), aYD[aB] = bN.is.aZr(aYD[aB],
							aZf, aZe)
					}
				}(this), ! function(sV) {
					if (bf.kN() % 2 == 1) {
						var aB, hx, lL, fP, ed, aZt, zw, aZu, hX, nQ, nR, aZX, aZv, aA8, aZx, l3, f5 = sV.mG,
							mV = sV.mV,
							mK = sV.mK,
							a7a = sV.a7a,
							aYF = sV.aYF,
							is = bN.is.is,
							aZz = is.length,
							aa0 = bN.is.aa0,
							aYj = bS.fG << 4,
							aa1 = aD.hz,
							aVW = bg.f3,
							ge = (f5 - 1) * (bL.fW(bf.kN(), 2) % 2);
						for (aB = 0; aB < f5; aB++)
							for (hx = Math.abs(aB - ge), aZX = mV[hx], lL = bM.ir(aZX), hX = mK[hx] >> 3, nQ = aZX % aYj, nR = ~~((aZX + .5) / aYj), aZx = a7a[hx], fP = 0; fP < 9; fP++)
								if (!((aZt = lL + aa0[fP]) < 0 || aZz <= aZt))
									for (aZu = is[aZt], zw = aZu.length, ed = 0; ed < zw; ed++) aZv = aZu[ed], l3 = mK[aZv] >> 3, hX == l3 || aa1 && aVW[hX] === aVW[l3] && aVW[hX] || (l3 = mV[aZv], (aA8 = nQ - l3 % aYj) * aA8 + (aA8 = nR - ~~
										((l3 + .5) / aYj)) * aA8 < 14400 && (l3 = a7a[aZv], aA8 = l3 <= aZx ? Math.max(1, bL.fW(l3 + bL.fW(aZx - l3, 10), 10)) : Math.max(1, bL.fW(aZx, 10)), a7a[aZv] = Math.max(l3 - aA8, 0), aYF[aZv] =
										4))
					}
				}(this), ! function(sV) {
					if (bf.kN() % 5 == 3)
						for (var a7a = sV.a7a, f5 = sV.mG, aB = 0; aB < f5; aB++) {
							var ho = a7a[aB];
							a7a[aB] = Math.max(ho - Math.max(1, ho >> 7), 0)
						}
				}(this), this), a7a = sV.a7a, aYF = sV.aYF, aB = sV.mG - 1; 0 <= aB; aB--) aYF[aB] = aYF[aB] >> 1, 0 === a7a[aB] && (bN.mP.aXp(aB), bN.aIv.aY8(aB));
			bd.gV(gd, eU - bN.lF.aIs(gd), 15)
		}
}

function aXP() {
	this.aa2 = 32, this.fC = 0, this.fE = 0, this.it = 0, this.aa3 = 0, this.aa4 = 4, this.is = null, this.aa0 = new Int16Array(9), this.dd = function() {
		this.it = 1 + bL.fW(bS.fG - 1, this.aa2), this.aa3 = 1 + bL.fW(bS.fH - 1, this.aa2), this.is = new Array(this.it * this.aa3), bA.r1.a3Q(this.is);
		var fC, fE, aa0 = this.aa0,
			i = this.it;
		for (fC = -1; fC <= 1; fC++)
			for (fE = -1; fE <= 1; fE++) aa0[3 * (1 + fE) + 1 + fC] = fE * i + fC
	}, this.mb = function(aa6, aB) {
		return this.is[aB].push(aa6), this.is[aB].length - 1
	}, this.aZr = function(aa7, aZX, aZh) {
		var aa8, aa9, aZX = bM.ir(aZX),
			aZh = bM.ir(aZh);
		return aZX === aZh ? aa7 : (aa8 = this.is[aZX].pop(), this.is[aZX].length === aa7 ? this.mb(aa8, aZh) : (aa9 = this.is[aZX][aa7], this.is[aZX][aa7] = aa8, bN.y.aYD[aa8] = aa7, this.mb(aa9, aZh)))
	}
}

function aXT() {
	this.lE = function(player, aaA) {
		return -1 !== aaA && !!bN.lF.lq(player, aaA) && this.qM(player, aaA, 0)
	}, this.qM = function(player, aaA, aaB) {
		player = function(player, aaA, aaB) {
			var aZK = bN.lF.aYw(player, aaA);
			if (-1 === aZK) return -1;
			aZK = bN.lF.lG(aZK, aaA);
			if (-1 === aZK) return -1;
			var lj = bN.lm.lr(aZK, aaA);
			if (0 <= lj) return lj;
			if (bN.lm.ls()) return -1;
			if (0 <= (lj = bN.lm.lr(aaA, aZK))) return bN.lm.lt(bN.lm.lu(bN.lm.get(lj)));
			if (aZK === aaA) return bN.lm.lt(new Uint32Array([aZK, aaA]));
			if (0 <= (lj = bN.aXU.qM(aZK, aaA))) return lj;
			return aaB ? function(aaF, player) {
				var fm = bO.fm,
					eQ = (fm.fill(0), [aaF]),
					iB = (fm[aaF] = 1, bM.iB),
					aaG = -1,
					f5 = eQ.length;
				for (; - 1 === aaG && f5;) {
					for (var g = [], aB = 0; aB < f5; aB++)
						for (var er = eQ[aB], a5E = fm[er], f8 = 0; f8 < 8; f8++) {
							var x9, a1m, fB = er + iB[f8],
								ej = 4 * fB;
							ac.iJ(ej) ? (x9 = fm[fB], a1m = a5E + 5 + ((1 & f8) << 1), 0 === x9 ? (g.push(fB), fm[fB] = a1m) : fm[fB] = Math.min(a1m, x9)) : -1 === aaG && f8 % 2 == 0 && ac.yz(player, ej) && (aaG = er)
						}
					f5 = (eQ = g).length
				}
				return -1 !== aaG ? function(iW, aaI) {
					var iB = bM.iB,
						aaJ = -1,
						hw = 0,
						mv = [];
					for (; aaI !== iW;)(hw = function(er, hw) {
						var fm = bO.fm,
							iB = bM.iB,
							a5E = fm[er];
						if (a5E - fm[er + iB[hw]] != 5 + ((1 & hw) << 1))
							for (var fO = 0; fO < 8; fO++) {
								var f8 = fO + hw + 6 & 7;
								if (a5E - fm[er + iB[f8]] == 5 + ((1 & f8) << 1)) return f8
							}
						return hw
					}(aaI, hw)) !== aaJ && (mv.push(aaI), aaJ = hw), aaI += iB[hw];
					mv.push(iW);
					var lj = bN.lm.lr(mv[0], iW);
					if (0 <= lj) return lj;
					return bN.lm.lt(new Uint32Array(mv))
				}(aaF, aaG) : -1
			}(aaA, player) : -1
		}(player, aaA, aaB);
		return -1 !== player && (bO.g[0] = bN.lm.get(player), !0)
	}
}

function aXV() {
	function aaL(hK, ib, ie) {
		for (var jg = Math.min(ib, ie), ni = Math.max(ib, ie), fE = jg + 1; fE < ni; fE++)
			if (!ac.iJ(bM.il(hK, fE))) return;
		return 1
	}

	function aaM(hM, ia, ic) {
		for (var jg = Math.min(ia, ic), ni = Math.max(ia, ic), fC = jg + 1; fC < ni; fC++)
			if (!ac.iJ(bM.il(fC, hM))) return;
		return 1
	}

	function aaN(ia, ib, ic, ie, aaD, aaA) {
		for (var f5 = Math.min(Math.abs(ic - ia), Math.abs(ie - ib)), iP = Math.sign(ic - ia), iS = Math.sign(ie - ib), aB = 0; aB < f5; aB++)
			if (!ac.iJ(bM.il(ia += iP, ib += iS))) return null;
		return ia === ic ? aaL(ia, ib, ie) ? new Uint32Array([aaD, bM.fS(ia, ib), aaA]) : null : aaM(ib, ia, ic) ? new Uint32Array([aaD, bM.fS(ia, ib), aaA]) : null
	}
	this.qM = function(aaD, aaA) {
		aaD = function(aaD, aaA) {
			var ia = bM.fD(aaD),
				ib = bM.fF(aaD),
				ic = bM.fD(aaA),
				ie = bM.fF(aaA);
			if (ia === ic) {
				if (aaL(ia, ib, ie)) return new Uint32Array([aaD, aaA])
			} else {
				if (ib !== ie) return aaN(ia, ib, ic, ie, aaD, aaA) || aaN(ic, ie, ia, ib, aaD, aaA);
				if (aaM(ib, ia, ic)) return new Uint32Array([aaD, aaA])
			}
			return null
		}(aaD, aaA);
		return null === aaD ? -1 : bN.lm.lt(aaD)
	}
}

function aXa() {
	var aaO = [];
	this.dd = function() {
		aaO = []
	}, this.ls = function() {
		return 65536 === aaO.length
	}, this.lr = function(aaD, aaA) {
		for (var lm = aaO, f5 = lm.length, aB = 0; aB < f5; aB++) {
			var gd = lm[aB];
			if (gd[0] === aaD && gd[gd.length - 1] === aaA) return aB
		}
		return -1
	}, this.lu = function(ll) {
		var aaP = new Uint32Array(ll.length);
		return aaP.set(ll), aaP.reverse()
	}, this.aXw = function(hX, l3) {
		var gY = hX.length - 1,
			aaQ = new Uint32Array(gY + l3.length);
		return aaQ.set(hX, 0), aaQ.set(l3, gY), aaQ
	}, this.aY1 = function(hX, l3, wd, er, aaR) {
		aaR && (wd = (l3 = this.lu(l3)).length - wd - 2);
		aaR = l3.subarray(wd + 1 + (er === l3[wd + 1])), er = new Uint32Array(hX.length + aaR.length);
		return er.set(hX, 0), er.set(aaR, hX.length), er
	}, this.lt = function(ll) {
		return aaO.push(ll), aaO.length - 1
	}, this.get = function(aB) {
		return aaO[aB]
	}, this.lo = function() {
		return aaO
	}, this.aaT = function(aaD, aaA) {
		return null
	}
}

function aXe() {
	this.eY = function(player, nN) {
		player = bN.lF.nP(player, nN);
		return !(player < 0 || !bN.mP.aY3(player) || (bN.mP.aXp(player), 0))
	}
}

function aXQ() {
	var zb = 32,
		za = new Array(2);

	function xP(ed) {
		var fC, fE, er, iS, iP, i1 = zb,
			a3t = bA.qt.xP(i1, i1),
			i7 = bA.qt.getContext(a3t, !0),
			i4 = bA.qt.getImageData(i7, i1, i1),
			xa = i4.data,
			lL = (i1 >> 1) - .5,
			lM = Math.sqrt(lL * lL);
		for (xa.fill(255), fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) iP = fC - lL, iS = fE - lL, er = 4 * (fE * i1 + fC), iP = 714 * (lM - Math.sqrt(iP * iP + iS * iS)) / lM, xa[2 + er] = ed, xa[3 + er] = 255 < iP ? 0 : iP;
		return i7.putImageData(i4, 0, 0), a3t
	}
	this.aaU = -1, this.dd = function() {
		this.aaU = -1, za[0] || (za[0] = xP(255), za[1] = xP(0))
	}, this.aaV = function(i7, ej, fC, fE, eB, aB) {
		bA.gR.hH(aD.ep) && (i7.setTransform(ej *= 4 / 3 * .625, 0, 0, ej, fC - (eB *= 4 / 3), fE - eB), i7.drawImage(za[+(bN.y.mJ[aB] === this.aaU)], 0, 0))
	}
}

function aXZ() {
	function aVn(fC, f5, fE, aaW, aAE, fV, player) {
		if (!(fE < 1 || aAE < fE))
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (bN.lF.aY7(ej) && !bA.r1.has(aaW, ac.en(ej)) && ac.yr(ej, player)) return ej >> 2;
				fC += fV
			}
		return -1
	}

	function aVr(fE, f5, fC, aaW, aVl, fV, player) {
		if (!(fC < 1 || aVl < fC)) {
			f5 = Math.max(f5, 0);
			for (var aB = 0; aB <= f5; aB++) {
				var ej = bM.il(fC, fE);
				if (bN.lF.aY7(ej) && !bA.r1.has(aaW, ac.en(ej)) && ac.yr(ej, player)) return ej >> 2;
				fE += fV
			}
		}
		return -1
	}

	function aVv(iW, iX, aVi) {
		return -1 !== iX && (-1 === iW || bM.iY(iX, aVi) < bM.iY(iW, aVi)) ? iX : iW
	}
	this.hg = function(player, aVi) {
		if (bN.mW.mX(player))
			for (var aVj = bM.iC(), aaW = [];;) {
				var aaG = function(aVi, aVj, aaW, player) {
					for (var hK = bM.fD(aVi), hM = bM.fF(aVi), aVl = bS.fG - 2, aAE = bS.fH - 2, aVm = -1, f8 = 0; f8 < aVj; f8++) {
						var aAD = Math.max(hK - f8, 1),
							aMd = Math.max(hM - f8, 1),
							yn = Math.min(hK + f8, aVl),
							ym = Math.min(hM + f8, aAE),
							iW = aVn(hK, yn - hK, hM - f8, aaW, aAE, 1, player),
							iX = aVn(hK - 1, hK - aAD - 1, hM - f8, aaW, aAE, -1, player),
							yn = aVn(hK, yn - hK, hM + f8, aaW, aAE, 1, player),
							aAD = aVn(hK - 1, hK - aAD - 1, hM + f8, aaW, aAE, -1, player),
							aVq = aVr(hM, ym - hM - 1, hK - f8, aaW, aVl, 1, player),
							aVs = aVr(hM - 1, hM - aMd - 2, hK - f8, aaW, aVl, -1, player),
							ym = aVr(hM, ym - hM - 1, hK + f8, aaW, aVl, 1, player),
							aMd = aVr(hM - 1, hM - aMd - 2, hK + f8, aaW, aVl, -1, player);
						if (aVm = aVv(aVm, iW, aVi), aVm = aVv(aVm, iX, aVi), aVm = aVv(aVm, yn, aVi), aVm = aVv(aVm, aAD, aVi), aVm = aVv(aVm, aVq, aVi), aVm = aVv(aVm, aVs, aVi), aVm = aVv(aVm, ym, aVi), 0 <= (aVm = aVv(aVm, aMd, aVi)) &&
							f8 * f8 >= bM.iY(aVm, aVi)) return aVm
					}
					return -1
				}(aVi, aVj, aaW, player);
				if (-1 === aaG) break;
				var id = ac.en(bM.ev(aaG));
				if (bN.lF.aYu(player, id)) return !! function(player, aaG, aVi) {
					for (var hw = bM.iw(aaG, aVi), aB = 0; aB < 4; aB++) {
						var er = bM.iu(aaG, hw);
						if (ac.aIW(bM.ev(er), player)) return bO.fh[6] = hw, 1;
						hw = (hw + 1) % 4
					}
					return
				}(player, aaG, aVi) && (bO.fh[7] = aaG, !0);
				aaW.push(id)
			}
		return !1
	}
}

function dg() {
	this.aT7 = [L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493)];
	var aaZ = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCi = new Array(aaZ.length), this.dd = function() {
		var g = bj.eQ.data[155].value.split(";"),
			lL = g.length;
		if (function() {
				for (var f5 = aaZ.length, aB = 0; aB < f5; aB++) bX.aCi[aB] = aaZ[aB]
			}(), !(lL > aaZ.length))
			for (var aB = 0; aB < lL; aB++) g[aB].length && (this.aCi[aB] = g[aB])
	}, this.aT9 = function(eC, code) {
		for (var aCi = this.aCi, aab = aaZ, qa = (aCi[eC] = code, ""), f5 = aCi.length, aac = [], aB = 0; aB < f5; aB++) aac.push(aCi[aB] === aab[aB] ? "" : aCi[aB]);
		f5--;
		for (aB = 0; aB < f5; aB++) qa += aac[aB] + ";";
		bj.sL.sM(155, qa += aac[f5])
	}, this.aT6 = function() {
		bj.sL.sM(155, ""), this.dd()
	}, this.ed = function(code, eC) {
		return code === this.aCi[eC] || code === this.aCi[eC + 1]
	}
}

function dY() {
	var aad = new Array(1),
		aae = new Array(1),
		aaf = 20,
		eR = 0,
		aag = !1;

	function aai() {
		aaf++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aae[aB] = 0, aad[aB] = document.createElement("audio"), aad[aB].src = src, aad[aB].setAttribute("preload", "auto"), aad[aB].setAttribute("controls", "none"), aad[aB].style.display = "none", aad[aB].onpause = function() {
					aae[aB] = 1
				}, aad[aB].oncanplaythrough = function() {
					aae[aB] = 0 === aae[aB] ? 1 : aae[aB]
				}, document.body.appendChild(aad[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aag = !0
		}
	}, this.ud = function() {
		if (aag) {
			aag = !1;
			for (var aB = 0; 0 <= aB; aB--) aad[aB].onpause = null, aad[aB].oncanplaythrough = null, t.removeChild(document.body, aad[aB]), aad[aB] = null
		}
	}, this.play = function() {
		if (aag) {
			var eU = performance.now();
			if (eR + 66 < eU)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aae[aB]) return eR = eU, aae[aB] = 2, void aad[aB].play();
			0 < aaf && (aaf--, setTimeout(aai, 66))
		}
	}
}

function ca() {
	this.a9D = function() {
		var aal;
		return !(al.kw < 3 || ag.gt[m1[0]] >= aD.kA >> 1) && (aD.hz ? 9 !== aD.ki && (aal = ae.aK3(), !(2 * ae.aK4(bh.kz()) >= aal)) : function() {
			if (8 === aD.ki) return !1;
			var aal = ae.aK3();
			if (2 * ag.h7[m1[0]] >= aal) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aZY = aD.kQ, h7 = ag.h7, aB = 0; aB < aZY; aB++) h7[aB] = 512;
			var aZZ = aD.y5,
				kd = aE.kd,
				ho = aE.ho;
			for (aB = aZY; aB < aZZ; aB++) h7[aB] = kd[ho[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f5 = aD.y5, h7 = ag.h7, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f5; aB++) h7[aB] = sResourcesValue
		} : function() {
			for (var f5 = aD.y5, h7 = ag.h7, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f5; aB++) h7[aB] = sResourcesData[aB]
		})();
		bd.mv[8] = ag.h7[aD.ep]
	}
}

function dP() {
	var aIe = 501,
		aar = (this.aaq = new Uint32Array(aIe), this.a4Z = new Uint32Array(aIe), this.aCN = new Uint16Array(aIe), this.aTF = 0, 1),
		uq = 0;

	function aau(self) {
		self.max.fill(0)
	}

	function aaw(self, aB) {
		self.max[0] = Math.max(self.aaq[aB], self.max[0]), self.max[1] = Math.max(self.a4Z[aB], self.max[1]), self.max[2] = Math.max(self.aCN[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aas = 0, this.mv = new Array(21), this.aat = null, this.de = function() {
		this.aat = [L(494), L(495), L(496), L(497), L(498), L(499), L(500), L(501), L(320), L(321), L(502), L(503), L(504), L(505), "", L(506), L(507), L(508), L(278), L(509), L(510)]
	}, this.dd = function() {
		this.aTF = 0, aar = 1, this.aas = 0, uq = 0, aau(this), this.mv.fill(0)
	}, this.qJ = function(player, ih) {
		bA.gR.a4T(player) && (this.mv[0] += ih + 1, this.mv[1]++, this.mv[12] += bO.fc[1])
	}, this.po = function(player, pR) {
		__fx.donationsTracker.logDonation(player, pR, bO.fc[0]);
		player === aD.ep && (aN.po(bO.fc[0], bO.fc[1], pR), this.mv[12] += bO.fc[1], this.mv[16] += bO.fc[0]), pR === aD.ep && (aN.a7n(bO.fc[0], player), this.mv[10] += bO.fc[0])
	}, this.qN = function(player) {
		bA.gR.a4T(player) && (this.mv[2]++, this.mv[12] += bO.fc[1])
	}, this.qV = function(player) {
		bA.gR.a4T(player) && (this.mv[19]++, this.mv[12] += bO.fc[1])
	}, this.aZS = function(player) {
		bA.gR.a4T(player) && this.mv[20]++
	}, this.gV = function(player, a5E, eC) {
		bA.gR.a4T(player) && (this.mv[eC] += a5E)
	}, this.eY = function() {
		var self;
		this.aas || 0 < uq-- || ((self = this).aaq[self.aTF] = ag.gt[aD.ep], self.a4Z[self.aTF] = ag.h7[aD.ep], self.aCN[self.aTF] = ae.aCO(aD.ep), aaw(self, self.aTF), self.aTF++, self.aTF === aIe && function(self) {
			aau(self), aaw(self, 0), self.aTF = 1 + bL.fW(aIe, 2);
			for (var aB = 1; aB < self.aTF; aB++) self.aaq[aB] = self.aaq[2 * aB], self.a4Z[aB] = self.a4Z[2 * aB], self.aCN[aB] = self.aCN[2 * aB], aaw(self, aB);
			aar *= 2
		}(self), uq = aar - 1, be.mm(), 0 === ag.mz[aD.ep] && (self.aas = bf.kN()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.tK = 0, this.tL = 0, this.aay = 0, this.aaz = 0, this.a9R = 0, this.u3 = 0;
	var ab1 = this.ab0 = 0;
	this.ab2 = 0, this.ab3 = 0, this.ab4 = 0, this.a8m = 0, this.eC = 0, this.aBy = null, this.hr = !1, this.ab5 = -1, this.ab6 = !1, this.ab7 = [0, 0], this.de = function() {
		this.aBy = [L(511), L(120, 0, "Balance"), L(119, 0, "Interest"), L(512)]
	}, this.dd = function() {
		this.hr = !1, this.ab5 = -1, this.ab6 = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f8 = a0.a1.iE() && h.i < h.j ? 1 : a0.a1.iE() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f8 * this.i), this.i -= a0.a1.iE() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8m = Math.floor(this.j / 150), this.a8m = Math.max(this.a8m, 1.5), this.tK = Math.floor(1 + .02 * this
			.i), this.tL = Math.floor(1 + .04 * this.i), this.a9R = this.tL, ab1 = Math.floor(.75 * this.a9R), this.u3 = Math.floor(1 + .075 * this.i), this.ab2 = Math.floor(1 + .1125 * this.i), this.ab3 = Math.floor(this.i * (a0.a1.iE() ? .03 :
				.029)), this.ab3 = Math.max(this.ab3, 4), this.ab4 = Math.floor(.035 * this.i), this.ab4 = Math.max(this.ab4, 4), this.ab0 = this.j - 2 * this.a9R - this.u3 - this.ab2, this.hr && this.ab8()
	}, this.hI = function(lf, lg) {
		var y8, y7;
		return !!this.hr && (y7 = lf, y8 = lg, lf -= bL.fW(h.i - this.i, 2), lg -= bL.fW(h.j - this.j, 2), lf < 0 || lg < 0 || lf >= this.i || lg >= this.j || lf >= this.i - this.ab2 && lg < this.ab2 ? -1 !== aM.hI(y7, y8) || bC.hI(y7, y8) ||
			this.sA() : lg < this.ab2 || (lg < this.j - this.u3 ? (this.ab6 = !0, this.ab5 = (lf - 2 * this.tK - this.aay) / this.aaz, 3 !== this.eC && (bf.dk = !0)) : (y7 = (y7 = Math.floor(lf / (this.i / this.aBy.length))) < 0 ? 0 : y7 >=
				this.aBy.length ? this.aBy.length - 1 : y7) !== this.eC && (this.eC = y7, this.ab8(), bf.dk = !0)), !0)
	}, this.a2Z = function(lf, lg) {
		return this.ab7[0] = lf, this.ab7[1] = lg, !(!this.hr || !this.ab6 || (lf -= bL.fW(h.i - this.i, 2), lg = this.ab5, this.ab5 = (lf - 2 * this.tK - this.aay) / this.aaz, (0 <= this.ab5 && this.ab5 <= 1 || 0 <= lg && lg <= 1) && (bf.dk = !
			0), 0))
	}, this.a2y = function() {
		this.ab6 && (this.ab6 = !1)
	}, this.a3A = function() {
		this.hr ? this.sA() : this.show()
	}, this.show = function() {
		bd.aTF < 2 || (this.hr = !0, this.ab8())
	}, this.sA = function() {
		this.hr = !1, this.ab5 = -1, bf.dk = !0
	}, this.ab8 = function() {
		this.eC < 2 ? this.aay = aQ.measureText(bA.rs.a0I(bd.max[this.eC]), bA.qt.sk(0, this.ab3)) : 2 === this.eC && (this.aay = aQ.measureText(bA.rs.a57(6, 2), bA.qt.sk(0, this.ab3))), this.aaz = this.i - 2 * this.tK - this.aay - this.tL
	}, this.mm = function() {
		this.hr && this.ab8()
	}, this.vY = function() {
		this.hr && this.a9j()
	}, this.a9j = function() {
		var fC = bL.fW(h.i - this.i, 2),
			fE = bL.fW(h.j - this.j, 2);
		vZ.setTransform(1, 0, 0, 1, fC, fE), vZ.fillStyle = bB.nx, vZ.fillRect(0, this.ab2, this.i, this.j - this.ab2), this.ab9(), this.aRn(), vZ.strokeRect(0, 0, this.i, this.j), bA.qt.textAlign(vZ, 2), vZ.font = bA.qt.sk(0, this.ab3), 0 ===
			this.eC ? this.abA(bd.aaq, fC, fE) : 1 === this.eC ? this.abA(bd.a4Z, fC, fE) : 2 === this.eC ? this.abB(fC, fE) : 3 === this.eC && (this.abC(fC, fE), this.abD(fC, fE)), aM.a6u(Math.floor(fC + this.i - .725 * this.ab2), Math.floor(
				fE + .275 * this.ab2), Math.floor(.45 * this.ab2)), vZ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ab9 = function() {
		var aB, eU;
		for (vZ.lineWidth = this.a8m, bA.qt.textBaseline(vZ, 1), bA.qt.textAlign(vZ, 1), vZ.strokeStyle = bB.o0, vZ.font = bA.qt.sk(1, this.ab4), eU = this.i / this.aBy.length, vZ.fillStyle = bB.oM, vZ.fillRect(this.eC * eU, this.j - this.u3, eU,
				this.u3), vZ.fillStyle = bB.o0, vZ.fillRect(0, this.j - this.u3 - .5 * this.a8m, this.i, this.a8m), aB = 1; aB <= 3; aB++) vZ.fillRect(aB * eU, this.j - this.u3, this.a8m, this.u3);
		for (aB = this.aBy.length - 1; 0 <= aB; aB--) vZ.fillText(bA.zA.a47(this.aBy[aB], 0, .9 * eU), (aB + .5) * eU, this.j - .46 * this.u3)
	}, this.aRn = function() {
		vZ.fillStyle = bB.on, vZ.fillRect(0, 0, this.i, this.ab2), vZ.fillStyle = bB.o0, vZ.fillRect(0, this.ab2 - .5 * this.a8m, this.i, this.a8m), vZ.font = bA.qt.sk(1, .39 * this.ab2), vZ.fillText(bA.zA.a47(L(513), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.ab2))
	}, this.abA = function(g, fC, fE) {
		var lL = bd.max[this.eC],
			a3S = (vZ.setTransform(1, 0, 0, 1, fC + 2 * this.tK + this.aay, fE + this.a9R + this.ab2), vZ.lineWidth = 2, this.ab0 / Math.sqrt(lL));
		vZ.beginPath(), vZ.moveTo(this.aaz, this.ab0 - a3S * Math.sqrt(g[bd.aTF - 1]));
		for (var aB = bd.aTF - 2; 0 <= aB; aB--) vZ.lineTo(aB * this.aaz / (bd.aTF - 1), this.ab0 - a3S * Math.sqrt(g[aB]));
		vZ.stroke();
		fC = this.a6u(g, a3S, .5);
		fC < .95 && vZ.fillText(bA.rs.a0I(lL), -this.tK, 0), .05 < Math.abs(fC - .5) && vZ.fillText(bA.rs.a0I(Math.floor(lL / 4)), -this.tK, Math.floor(this.ab0 / 2)), .05 < fC && vZ.fillText("0", -this.tK, this.ab0)
	}, this.abB = function(fC, fE) {
		vZ.setTransform(1, 0, 0, 1, fC + 2 * this.tK + this.aay, fE + this.a9R + this.ab2), vZ.lineWidth = 2;
		var a3S = this.ab0 / Math.max(bd.max[this.eC], 1);
		vZ.beginPath(), vZ.moveTo(this.aaz, this.ab0 - a3S * bd.aCN[bd.aTF - 1]);
		for (var aB = bd.aTF - 2; 0 <= aB; aB--) vZ.lineTo(aB * this.aaz / (bd.aTF - 1), this.ab0 - a3S * bd.aCN[aB]);
		vZ.stroke();
		fC = this.a6u(bd.aCN, a3S, 1), fE = bd.max[this.eC] / 100;
		fC < .95 && vZ.fillText(bA.rs.a57(fE, 2), -this.tK, 0), .05 < Math.abs(fC - .5) && vZ.fillText(bA.rs.a57(fE / 2, 2), -this.tK, Math.floor(this.ab0 / 2)), .05 < fC && vZ.fillText(bA.rs.a57(0, 2), -this.tK, this.ab0)
	}, this.abC = function(fC, fE) {
		vZ.setTransform(1, 0, 0, 1, fC + .34 * this.i, fE + 2 * ab1 + this.ab2), bA.qt.textAlign(vZ, 2);
		for (var aBg = this.j - 4 * ab1 - this.u3 - this.ab2, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vZ.fillText(bA.zA.a47(bd.aat[g[aB]], 0, .31 * this.i), 0, aB * aBg / 9);
		var fX = bd.mv;
		for (vZ.setTransform(1, 0, 0, 1, fC + .39 * this.i, fE + 2 * ab1 + this.ab2), bA.qt.textAlign(vZ, 0), vZ.fillText(bA.rs.a57(100 * fX[0] / (1024 * Math.max(fX[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vZ.fillText(fX[g[aB]].toString(), 0,
			aB * aBg / 9);
		vZ.fillText(bA.rs.a57(100 * (1 - ag.gt[aD.ep] / fX[7]), 0), 0, aBg)
	}, this.abD = function(fC, fE) {
		vZ.setTransform(1, 0, 0, 1, fC + .79 * this.i, fE + 2 * ab1 + this.ab2), bA.qt.textAlign(vZ, 2);
		var aB, aBg = this.j - 4 * ab1 - this.u3 - this.ab2;
		for (vZ.fillStyle = bB.oH, aB = 2; 0 <= aB; aB--) vZ.fillText(bA.zA.a47(bd.aat[aB + 8], 0, .31 * this.i), 0, aB * aBg / 9);
		vZ.fillText(bA.zA.a47(bd.aat[18], 0, .31 * this.i), 0, 3 * aBg / 9), vZ.fillStyle = bB.oG, vZ.fillText(bA.zA.a47(bd.aat[11], 0, .31 * this.i), 0, 4 * aBg / 9), vZ.fillStyle = bB.oZ, vZ.fillText(bA.zA.a47(bd.aat[13], 0, .31 * this.i), 0,
				5 * aBg / 9), vZ.fillText(bA.zA.a47(bd.aat[15], 0, .31 * this.i), 0, 6 * aBg / 9), vZ.fillText(bA.zA.a47(bd.aat[16], 0, .31 * this.i), 0, 7 * aBg / 9), vZ.fillText(bA.zA.a47(bd.aat[12], 0, .31 * this.i), 0, 8 * aBg / 9), vZ
			.fillStyle = bB.oY, vZ.fillText(bA.zA.a47(bd.aat[17], 0, .31 * this.i), 0, aBg), vZ.fillStyle = bB.oH;
		var fX = bd.mv,
			aFk = fX[8] + fX[9] + fX[10] + fX[18],
			aFk = bA.rs.a0I(aFk),
			aQb = vZ.measureText(aFk).width,
			fC = (vZ.setTransform(1, 0, 0, 1, fC + .83 * this.i + aQb, fE + 2 * ab1 + this.ab2), vZ.fillText(bA.rs.a0I(fX[8]), 0, 0), vZ.fillText(bA.rs.a0I(fX[9]), 0, aBg / 9), vZ.fillText(bA.rs.a0I(fX[10]), 0, 2 * aBg / 9), vZ.fillText(bA.rs
				.a0I(fX[18]), 0, 3 * aBg / 9), vZ.fillStyle = bB.oG, vZ.fillText(aFk, 0, 4 * aBg / 9), vZ.fillStyle = bB.oZ, vZ.fillText(bA.rs.a0I(fX[13]), 0, 5 * aBg / 9), vZ.fillText(bA.rs.a0I(fX[15]), 0, 6 * aBg / 9), vZ.fillText(bA.rs
				.a0I(fX[16]), 0, 7 * aBg / 9), vZ.fillText(bA.rs.a0I(fX[12]), 0, 8 * aBg / 9), fX[12] + fX[13] + fX[15] + fX[16]);
		vZ.fillStyle = bB.oY, vZ.fillText(bA.rs.a0I(fC), 0, aBg), vZ.fillStyle = bB.o0
	}, this.a6u = function(g, a3S, aAM) {
		var aB, e, fo;
		return this.ab5 < 0 || 1 < this.ab5 ? .25 : (aB = this.ab5 * (bd.aTF - 1), fo = g[e = Math.floor(aB)], fo += (aB - e) * (g[e < bd.aTF - 1 ? e + 1 : e] - fo), vZ.strokeStyle = bB.o3, .04 < this.ab5 && this.abF(0, this.ab0 - a3S * Math.pow(
				fo, aAM), aB * this.aaz / (bd.aTF - 1), this.ab0 - a3S * Math.pow(fo, aAM)), .04 < fo / bd.max[this.eC] && this.abF(aB * this.aaz / (bd.aTF - 1), this.ab0, aB * this.aaz / (bd.aTF - 1), this.ab0 - a3S * Math.pow(fo, aAM)), vZ
			.fillStyle = bB.ob, vZ.beginPath(), vZ.arc(aB * this.aaz / (bd.aTF - 1), this.ab0 - a3S * Math.pow(fo, aAM), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vZ.fill(), g = this.ab5 * bf.aCP, g = 0 === ag.mz[aD.ep] ? Math.floor(g * bd
				.aas) : Math.floor(g * bf.kN()), vZ.fillStyle = bB.o0, vZ.fillText(1 === aAM ? bA.rs.a57(fo / 100, 2) : bA.rs.a0I(Math.floor(fo)), -this.tK, this.ab0 - a3S * Math.pow(fo, aAM)), bA.qt.textAlign(vZ, 1), vZ.fillText(aW.aCC(g),
				aB * this.aaz / (bd.aTF - 1), this.ab0 + this.ab3 - (a0.a1.iE() ? 2 : 0) - this.a8m), bA.qt.textAlign(vZ, 2), a3S * Math.pow(fo, aAM) / this.ab0)
	}, this.abF = function(nQ, nR, nd, ne) {
		vZ.beginPath(), vZ.moveTo(nQ, nR), vZ.lineTo(nd, ne), vZ.stroke()
	}
}

function by() {
	this.aTG = "https://territorial.io/changelog", this.aTL = "https://territorial.io/terms", this.aTM = "https://territorial.io/privacy", this.aTK = "https://territorial.io/tutorial", this.aTJ = "https://territorial.io/players", this.aTH =
		"https://territorial.io/clans", this.aTI = "https://territorial.io/clan-results", this.aPk = "https://patreon.com/c/territorial", this.aDh = "https://play.google.com/store/apps/details?id=territorial.io", this.a26 =
		"https://apps.apple.com/app/id1581110913", this.aDi = "https://discord.gg/pthqvpTXmh", this.aDj = "https://www.instagram.com/davidtschacher/", this.zq =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new abG, this.z7 = new abH, this.dd = function() {
		this.y.dd()
	}, this.eY = function() {
		0 !== this.y.aVQ && this.y.aVQ--
	}
}

function abH() {
	this.vY = function() {
		if (0 !== bP.y.aVQ && (vZ.globalAlpha = Math.min(bP.y.aVQ / 580, 1), vZ.drawImage(bP.y.abK, 1 + aS.z5(), 1 + aS.z6()), vZ.globalAlpha = 1, aD.hT)) {
			for (var nQ = ii / iG, nR = ij / iG, nd = (h.i + ii) / iG, ne = (h.j + ij) / iG, ge = bP.y.abL * iG, abM = bP.y.abM, aB = aD.kQ - 1; 0 <= aB; aB--) ! function(aB, ge, nQ, nR, nd, ne, abM) {
				var highlight;
				0 === ag.mz[aB] || 0 === ag.gt[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (ge *= 2), nd = h.i * ((ag.iy[aB] + ag.iz[aB] + 1) / 2 - nQ) / (nd - nQ) - .5 * ge, nQ = h.j * ((ag.j0[
					aB] + ag.j1[aB] + 1) / 2 - nR) / (ne - nR) - .5 * ge, nd > h.i) || nQ > h.j || nd < -ge || nQ < -ge || (highlight ? vZ.setTransform(2 * iG, 0, 0, 2 * iG, nd, nQ) : vZ.setTransform(iG, 0, 0, iG, nd, nQ), vZ.drawImage(
					abM[aD.hz ? bg.f3[aB] : 1], 0, 0))
			}(aB, ge, nQ, nR, nd, ne, abM);
			vZ.setTransform(iG, 0, 0, iG, 0, 0)
		}
	}
}

function abG() {
	this.abL = 28, this.aVQ = 0, this.abK = null;
	var abO = this.abM = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function abS(i1, abT) {
		var fC, fE, er, iP, a3t = bA.qt.xP(i1, i1),
			i7 = bA.qt.getContext(a3t, !0),
			i4 = bA.qt.getImageData(i7, i1, i1),
			xa = i4.data,
			lL = (i1 >> 1) - .5,
			abU = .5 + lL;
		for (abU *= abU, fE = 0; fE < i1; fE++)
			for (fC = 0; fC < i1; fC++) iP = (iP = fC - lL) * iP + (iP = fE - lL) * iP, xa[er = 4 * (fE * i1 + fC)] = abT[0], xa[1 + er] = abT[1], xa[2 + er] = abT[2], xa[3 + er] = (abU - iP) * abT[3] / abU;
		return i7.putImageData(i4, 0, 0), a3t
	}

	function aaV(aB, i7, a3t, i1) {
		var highlight, fC, fE;
		0 !== ag.mz[aB] && 0 !== ag.gt[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i1 *= 2), fC = ag.iy[aB] + ag.iz[aB] + 1 - i1 - 2 >> 1, fE = ag.j0[aB] + ag.j1[aB] + 1 - i1 - 2 >> 1, highlight ? i7
			.drawImage(a3t[aD.hz ? 9 === aD.ki && 5 === aE.ho[aB] ? 3 : bg.f3[aB] : aB < aD.kQ ? 1 : 0], fC, fE, i1, i1) : i7.drawImage(a3t[aD.hz ? 9 === aD.ki && 5 === aE.ho[aB] ? 3 : bg.f3[aB] : aB < aD.kQ ? 1 : 0], fC, fE))
	}
	this.dd = function() {
		var sV;
		this.aVQ = 700,
			function(sV) {
				var i1 = sV.abL;
				if (sV.abM = [], abO = [], aD.hz) {
					for (var aB = 0; aB <= aD.yC; aB++) sV.abM.push(abS(i1, bg.aYp[bg.kn[aB]])), abO.push(abS(i1 >> 1, bg.aYp[bg.kn[aB]]));
					9 === aD.ki && abO.push(abS(i1, bg.aYp[1]))
				} else sV.abM.push(abS(i1, bg.aYp[7])), sV.abM.push(abS(i1, bg.aYp[4])), abO.push(abS(i1 >> 1, bg.aYp[7]))
			}(this),
			function(sV, abY) {
				var aB, abK = sV.abK,
					i7 = bA.qt.getContext(abK, !0),
					f5 = aD.f2,
					i1 = sV.abL >> 1;
				i7.imageSmoothingEnabled = !1, i7.setTransform(1, 0, 0, 1, 0, 0), abY && i7.clearRect(0, 0, abK.width, abK.height);
				if (9 === aD.ki) {
					i1 <<= 1;
					sV = az.kr[5];
					for (aB = f5 - sV; aB < f5; aB++) aaV(aB, i7, abO, i1);
					f5 -= sV, i1 >>= 1
				}
				for (aB = aD.kQ; aB < f5; aB++) aaV(aB, i7, abO, i1)
			}(this, null !== (sV = this).abK && sV.abK.width === bS.fG - 2 && sV.abK.height === bS.fH - 2 || (sV.abK = bA.qt.xP(bS.fG - 2, bS.fH - 2), !1)), aD.hT || this.a5P()
	}, this.aYo = abS, this.a5P = function() {
		for (var f5 = aD.kQ, i1 = this.abL, abM = this.abM, i7 = bA.qt.getContext(this.abK, !0), aB = 0; aB < f5; aB++) aaV(aB, i7, abM, i1)
	}
}

function d9() {
	function abb() {
		8 === aD.ki && 1 === aD.a11 && bR.a0d.a10()
	}

	function aba(player) {
		aD.hT ? (ak.aIl(player), al.aLo(), aD.kk && aD.qF.eY()) : b3.aE1(player)
	}
	this.ph = function(player) {
		aN.a1E(player, player === aD.ep ? 21 : 22), aba(player), abb()
	}, this.qC = function(player) {
		1 === aD.a11 && 0 !== ag.mz[player] && 2 !== ag.a4P[player] && aba(player), aD.a14--, aD.a13--, aN.a1E(player, 4), bA.gR.hG(2) && aW.ml(!0), abb()
	}
}

function dJ() {
	this.aVg = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBd = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.o0, "rgb(170,170,170)"
	], this.abc = [bB.o0, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.o0, bB.nr], this.abd = [bB.nr, bB.o0, bB.o0, bB.o0, bB.nr, bB.nr, bB.nr, bB.nr, bB.o0];
	var aLy = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aLH = ["rgba(" + aLy[0] + ",", "rgba(" + aLy[1] + ",", "rgba(" + aLy[2] + ",", "rgba(" + aLy[3] + ",", "rgba(" + aLy[4] + ",", "rgba(" + aLy[5] + ",", "rgba(" + aLy[6] + ",", "rgba(" + aLy[7] + ",", "rgba(" + aLy[8] + ",", "rgba(" + aLy[9] +
			","
		], this.aLI = ["rgb(" + aLy[0] + ")", "rgb(" + aLy[1] + ")", "rgb(" + aLy[2] + ")", "rgb(" + aLy[3] + ")", "rgb(" + aLy[4] + ")", "rgb(" + aLy[5] + ")", "rgb(" + aLy[6] + ")", "rgb(" + aLy[7] + ")", "rgb(" + aLy[8] + ")", "rgb(" + aLy[9] +
			")"
		], this.a1N = null, this.aYp = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aYU = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kn = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f3 = new Uint8Array(aD.f2), this.aBe = new Uint8Array(aD.f2), this.yI = new Uint16Array(aD.f2), this.yJ = new Uint16Array(this.kn.length + 1), this.yK = new Uint16Array(this.kn.length), this.de =
		function() {
			this.a1N = [L(514), L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522)]
		}, this.dd = function() {
			if (this.f3.fill(0), this.aBe.fill(0), this.abe(), aD.hz) {
				if (9 === aD.ki) {
					for (var f3 = bg.f3, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f3[aB] = 1;
					var f5 = aD.f2;
					for (aB = aD.data.teamPlayerCount[7]; aB < f5; aB++) f3[aB] = 2;
					bg.kn[1] = 7, bg.kn[2] = 8
				} else aD.kk ? function() {
					var aYU = bg.aYU,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kQ - 1; 0 <= aB; aB--) colorsData[aB] = ay.jh(262144);
					var abp = 0,
						fL = 768,
						aVA = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f8 = 0, fP = 0; fP < 3; fP++) f8 += Math.abs(aYU[aB][fP] - aVA[fP]);
							f8 < fL && (abp = aB, fL = f8)
						} var abq = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) abq[aB] = teamPlayerCount[aB];
					var kn = bg.kn,
						abr = new Uint8Array(9),
						gY = (kn[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) abq[aB] && (abr[aB] = gY, kn[gY++] = aB);
					var jg = aD.kQ,
						f3 = bg.f3;
					abq[abp] ? (abq[abp]--, f3[0] = abr[abp]) : jg = 0;
					var ed = 0;
					for (aB = jg; aB < aD.y5; aB++) {
						var hx = kn[ed];
						if (abq[hx]) abq[hx]--, f3[aB] = abr[hx];
						else if (aB--, 9 <= ++ed) return console.log("error 325")
					}
				}() : this.eY();
				! function() {
					for (var f5 = aD.f2, yI = bg.yI, yJ = bg.yJ, yK = bg.yK, f3 = bg.f3, kn = bg.kn, yB = kn.length, eQ = new Array(yB), aB = 0; aB < yB; aB++) eQ[aB] = [];
					for (aB = 0; aB < f5; aB++) eQ[kn[f3[aB]]].push(aB);
					for (aB = 1; aB <= yB; aB++) yJ[aB] = yJ[aB - 1] + eQ[aB - 1].length;
					for (aB = 0; aB < yB; aB++)
						for (var gY = eQ[aB].length, lL = yJ[aB], hx = 0; hx < gY; hx++) yI[hx + lL] = eQ[aB][hx];
					var kQ = aD.kQ;
					for (aB = 0; aB < yB; aB++)
						for (gY = eQ[aB].length, lL = yJ[aB], hx = 0; hx < gY; hx++)
							if (yI[hx + lL] >= kQ) {
								yK[aB] = hx;
								break
							}
				}(), ! function() {
					for (var f5 = aD.f2, f3 = bg.f3, aBe = bg.aBe, kn = bg.kn, aB = 0; aB < f5; aB++) aBe[aB] = kn[f3[aB]];
					9 === aD.ki && aBe.fill(1, f5 - az.kr[5])
				}()
			}
		}, this.abe = function() {
			for (var aB = this.kn.length - 1; 0 <= aB; aB--) this.kn[aB] = aB
		}, this.eY = function() {
			var a07 = new Uint8Array(aD.kQ),
				a08 = new Uint8Array(aD.kQ),
				abj = new Uint16Array(8),
				abk = new Uint16Array(this.kn.length);
			this.abl(a07, a08, abj, 1), this.aIC(abj), this.abm(abk, a07, a08), this.abn(a07, a08, abk), this.abo()
		}, this.abl = function(a07, a08, abq, abt) {
			for (var fP, e, abu, f5 = this.kn.length - abt, g = new Uint16Array(f5), aYU = this.aYU, colorsData = aD.data.colorsData, aB = aD.kQ - 1; 0 <= aB; aB--) {
				for (fP = f5; abt <= fP; fP--) g[fP - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aYU[fP][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aYU[fP][1]) + Math.abs(4 * (63 & colorsData[aB]) - aYU[fP][2]);
				for (abu = 768, fP = f5 - 1; 0 <= fP; fP--) g[e = (fP + aB) % f5] < abu && (abu = g[e], a07[aB] = e);
				for (abq[a07[aB]] += 4, abu = 768, fP = f5 - 1; 0 <= fP; fP--) g[e = (fP + aB) % f5] < abu && e !== a07[aB] && (abu = g[e], a08[aB] = e);
				abq[a08[aB]]++
			}
		}, this.aIC = function(abq) {
			for (var fP, lN, f5 = this.kn.length - 1, aB = f5; 0 <= aB; aB--) this.kn[aB] = aB;
			for (aB = f5 - 1; 0 <= aB; aB--) abq[aB]++;
			for (aB = 1; aB <= f5; aB++) {
				for (lN = 0, fP = 1; fP < f5; fP++) abq[fP] > abq[lN] && (lN = fP);
				abq[lN] = 0, this.kn[aB] = lN + 1
			}
		}, this.abm = function(abk, a07, a08) {
			var fP, a1j, ed, f8, e, nc, tb, abv = this.kn.length - 1,
				rM = new Uint16Array(abv),
				abw = [],
				abx = 0,
				a1i = [],
				aby = [];
			loop: for (var aB = 0; aB < aD.kQ; aB++)
				if (null !== (a1j = bA.rs.a1k(ag.a1h[aB]))) {
					for (fP = a1i.length - 1; 0 <= fP; fP--)
						if (a1j === a1i[fP]) {
							aby[fP].push(aB), abx = Math.max(abx, aby[fP].length);
							continue loop
						} a1i.push(a1j), abw.push(!1), aby.push([aB]), abx = Math.max(abx, 1)
				}
			for (; 2 < aD.yC && abx > bL.fW(aD.kQ, aD.yC);) aD.yC--, aD.ki--;
			for (fP = a1i.length - 1; 0 <= fP; fP--) {
				for (f8 = -1, ed = a1i.length - 1; 0 <= ed; ed--) !abw[ed] && (-1 === f8 || aby[ed].length > aby[f8].length) && (f8 = ed);
				for (ed = abv - 1; 0 <= ed; ed--) rM[ed] = 1;
				for (ed = aby[f8].length - 1; 0 <= ed; ed--) rM[a07[aby[f8][ed]]] += 3, rM[a08[aby[f8][ed]]]++;
				for (aB = abv - 1; 0 <= aB; aB--) {
					for (e = f8 % abv, ed = abv - 1; 0 <= ed; ed--) rM[ed] > rM[e] && (e = ed);
					for (nc = -1, ed = aD.yC; 0 < ed; ed--)
						if (this.kn[ed] === e + 1) {
							nc = ed;
							break
						} if (rM[e] = 0, -1 !== nc) {
						for (tb = 0, ed = aD.yC; 0 < ed; ed--) abk[nc] > abk[ed] && tb++;
						if (tb !== aD.yC - 1) {
							for (ed = aby[f8].length - 1; 0 <= ed; ed--) abk[nc]++, this.f3[aby[f8][ed]] = nc;
							break
						}
					}
				}
				abw[f8] = !0
			}
		}, this.abn = function(a07, a08, abk) {
			for (var aB, iO, f5 = this.kn.length - 1, border = bL.fW(aD.kQ, aD.yC), abz = (0 < aD.kQ % aD.yC && border++, new Uint8Array(1 + f5)), fP = f5; 1 <= fP; fP--) abz[this.kn[fP]] = fP;
			for (aB = 0; aB < aD.kQ; aB++) iO = abz[a07[aB] + 1], 0 === this.f3[aB] && iO <= aD.yC && abk[iO] < border && (abk[iO]++, this.f3[aB] = iO);
			for (aB = 0; aB < aD.kQ; aB++) iO = abz[a08[aB] + 1], 0 === this.f3[aB] && iO <= aD.yC && abk[iO] < border && (abk[iO]++, this.f3[aB] = iO);
			for (fP = aD.yC; 1 <= fP; fP--)
				for (aB = aD.kQ - 1; 0 <= aB && !(abk[fP] >= border); aB--) 0 === this.f3[aB] && (abk[fP]++, this.f3[aB] = fP)
		}, this.abo = function() {
			if (aD.yC < 8) aD.yC++, aD.ki++, aD.yD = 1;
			else
				for (var aB = aD.kQ; aB < aD.f2; aB++) this.f3[aB] = 1 + aB % aD.yC
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
			for (var ac0 = !1, ac1 = !1, f8 = 3; 0 <= f8; f8--) {
				var gd = gl[player][aB] + f7[f8];
				if (ac.aIW(gd, player)) continue loop;
				ac0 = ac0 || ac.iJ(gd), ac1 = ac1 || ac.aIV(gd)
			}
			ac0 ? gm[player].push(gl[player][aB]) : ac1 ? fU[player].push(gl[player][aB]) : ac.ye(gl[player][aB], player), gl[player][aB] = gl[player][f5 - 1], gl[player].pop(), f5--
		}
	}, this.gj = function() {
		ag.gt[g0] -= g1
	}, this.gk = function(border) {
		for (var f5 = border.length, aB = f5 - 1; 0 <= aB; aB--) ac.yz(g0, border[aB]) || (border[aB] = border[f5 - 1], border.pop(), f5--)
	}, this.gn = function(border) {
		for (var f5 = border.length, aB = f5 - 1; 0 <= aB; aB--) !ac.yz(g0, border[aB]) && ac.f0(border[aB]) && (border[aB] = border[f5 - 1], border.pop(), f5--)
	}, this.go = function(border) {
		for (var f8, gd, f5 = border.length, f7 = ac.f7, aB = f5 - 1; 0 <= aB; aB--)
			for (f8 = 3; 0 <= f8; f8--)
				if (gd = border[aB] + f7[f8], ac.aIW(gd, g0)) {
					ag.gl[g0].push(border[aB]), border[aB] = border[f5 - 1], border.pop(), f5--;
					break
				}
	}, this.gp = function() {
		for (var f8, gd, f7 = ac.f7, aB = g1 - 1; 0 <= aB; aB--)
			for (f8 = 3; 0 <= f8; f8--) gd = g3[aB] + f7[f8], ac.z2(g0, gd) && ac.aIX(gd) && (ag.gl[g0].push(gd), ac.ga(gd, g0))
	}, this.gq = function() {
		var fC, fE;
		loop: for (; ag.j0[g0] < ag.j1[g0];) {
			for (fC = ag.iz[g0]; fC >= ag.iy[g0]; fC--)
				if (ac.yz(g0, 4 * (ag.j0[g0] * bS.fG + fC))) break loop;
			ag.j0[g0]++
		}
		loop: for (; ag.j0[g0] < ag.j1[g0];) {
			for (fC = ag.iz[g0]; fC >= ag.iy[g0]; fC--)
				if (ac.yz(g0, 4 * (ag.j1[g0] * bS.fG + fC))) break loop;
			ag.j1[g0]--
		}
		loop: for (; ag.iy[g0] < ag.iz[g0];) {
			for (fE = ag.j1[g0]; fE >= ag.j0[g0]; fE--)
				if (ac.yz(g0, 4 * (fE * bS.fG + ag.iy[g0]))) break loop;
			ag.iy[g0]++
		}
		loop: for (; ag.iy[g0] < ag.iz[g0];) {
			for (fE = ag.j1[g0]; fE >= ag.j0[g0]; fE--)
				if (ac.yz(g0, 4 * (fE * bS.fG + ag.iz[g0]))) break loop;
			ag.iz[g0]--
		}
	}, this.ey = function(player, jZ) {
		return 0 === bg.f3[player] || bg.f3[player] !== bg.f3[jZ]
	}, this.hb = function(player) {
		for (var aB, ge, f5 = ag.gl[player].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < f5; aB++)
				if (ac.ew(ag.gl[player][aB] + ge)) return !0;
		return !1
	}, this.aIh = function(player) {
		for (var aB, ge, f5 = ag.gl[player].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < f5; aB++)
				if (ac.jb(ag.gl[player][aB]) && ac.ew(ag.gl[player][aB] + ge)) return !0;
		return !1
	}, this.he = function(a4V, a4W) {
		for (var aB, eU, ge, gd, aZY = ag.gl[a4V].length, aZZ = ag.gl[a4W].length, f7 = (aZZ < aZY && (eU = a4V, a4V = a4W, a4W = eU, eU = aZY, aZY = aZZ, 0), ac.f7), f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < aZY; aB++)
				if (gd = ag.gl[a4V][aB] + ge, ac.gf(gd) && ac.ex(gd) === a4W) return !0;
		return !1
	}, this.aIi = function(a4V, a4W) {
		for (var aB, ge, gd, aZY = ag.gl[a4V].length, f7 = ac.f7, f8 = 3; 0 <= f8; f8--)
			for (ge = f7[f8], aB = 0; aB < aZY; aB++)
				if (ac.jb(ag.gl[a4V][aB]) && (gd = ag.gl[a4V][aB] + ge, ac.gf(gd)) && ac.ex(gd) === a4W) return !0;
		return !1
	}
}

function dV() {
	this.qO = new ac2
}

function ac2() {
	this.hh = function(player) {
		bA.gR.a4Q(player) && aN.zT(80, L(523), 637, 0, bB.oq, bB.nx, -1, !1)
	}, this.hk = function(player) {
		bA.gR.a4Q(player) && aN.zT(80, L(524), 637, 0, bB.oq, bB.nx, -1, !1)
	}
}

function ac3() {
	this.ac4 = 0, this.eY = function() {
		aO.eY(), aZ.eY(), h.eY(), b0.y.eY(), ax.aHh(), bU.eM.eY(), bf.dk && (bf.dk = !1, aa.vY())
	}
}

function ac5() {
	this.eT = bf.eT, this.eC = 0, this.ac4 = 0, this.aHf = 0, this.ac6 = null, this.ac7 = 7, this.ac8 = 0, this.dd = function() {
		this.aHf = 0, this.ac6 = [], this.eC = 0, this.ac4 = 0
	}, this.aUc = function(aC) {
		if (aD.hT) this.aCQ(aC);
		else if (this.ac6.push(aC), 2 === aD.a11) {
			for (var aB = 0; aB < this.ac6.length; aB++) b8.pK.eY(this.ac6[aB]);
			this.ac6 = []
		}
	}, this.aCQ = function(aC) {
		2 !== aD.a11 && (b8.pK.eY(aC), b9.eY(), aW.aCQ(this.aHf), this.aHf === aD.a5V ? (aD.qF.eY(), this.aHf = 0, this.eC = 0, this.ac4 = 0, this.eT = bf.eT) : (this.aHf++, af.a5O(), af.ml(!0), bb.aCz()))
	}, this.eY = function() {
		h.eY(), aD.hT ? (bf.dk = aW.aCQ(-1) || bf.dk, mn()) : (0 !== this.eC || bf.eT >= this.eT && (this.eT += bf.aCP * Math.floor(1 + (bf.eT - this.eT) / bf.aCP), 2 === aD.a11 ? mc() : this.ac9(), this.eC++, 27 < bf.eT - this.ac8)) && this
		.acA(), mi(), bf.dk && (bf.dk = !1, z3()), this.ac8 = bf.eT
	}, this.acA = function() {
		bf.dk = !0, mk(), this.eC = 0
	}, this.ac9 = function() {
		var wO, aB;
		if (this.ac4 !== 7 * this.aHf) me(), bb.aCz();
		else {
			wO = !1;
			loop: for (; this.acB() && (wO = !0, me(), 2 !== aD.a11) && 0 < this.ac6.length;)
				for (aB = this.ac7 - 2; 0 <= aB; aB--)
					if (me(), 2 === aD.a11) break loop;
			wO ? bb.aCz() : (mc(), bb.a5R())
		}
	}, this.acB = function() {
		return 0 < this.ac6.length && (this.aHf++, b8.pK.eY(this.ac6[0]), this.ac6.shift(), !0)
	}
}

function acC() {
	var acD, acE, acF, aHf, acG, eC = 0,
		eT = bf.eT;

	function acJ() {
		! function() {
			if (!aD.hT) return;
			if (aD.kk) return;
			if (2 !== aD.a11)
				if (acG % 7 != 0) acG++;
				else if (aHf === aD.a5V) {
				if (!acM()) return;
				aW.aCQ(aHf), aD.qF.eY()
			} else {
				if (!acM()) return;
				acG++, aHf++, af.a5O(), af.ml(!0)
			}
			return 1
		}() && acM() && me()
	}

	function acK() {
		eC = 0, (aD.hT ? (bf.dk = aW.aCQ(aHf - (acG % 7 == 0 ? 0 : 1) + acG % 7 / 7) || bf.dk, mn) : aM.hF || !bC.a5s ? mn : (bf.dk = !0, mk))()
	}

	function acM() {
		var aB, f5, acN = b9.qD.aW6,
			fo = b9.qD.aW7,
			fq = b9.qD.aW8,
			fs = b9.qD.aW9,
			acO = b9.qD.aWA,
			acP = b9.qD.aWB;
		if (!(acD >= acP.length)) {
			if (acP = acP[acD], acO[acD]) {
				for (f5 = acE + acP, aB = acE; aB < f5; aB++) b8.pK.q2(acN[aB], fo[aB], fq[aB], fs[aB]);
				acE += acP, acD++
			} else ++acF >= acP && (acD++, acF = 0);
			return 1
		}
		aN.a2M("Replay file smaller than expected."), bC.a3B(!1), aD.a11 = 2
	}
	this.ac4 = 0, this.dd = function() {
		acG = aHf = acF = acE = acD = 0
	}, this.eY = function() {
		var aZz;
		h.eY(), bC.a9d() < 1.7 ? 0 === eC ? bf.eT >= eT && (aZz = bf.aCP / bC.a9d(), eT += aZz * Math.floor(1 + (bf.eT - eT) / aZz), 2 === aD.a11 || aM.hF || !bC.a5s ? mc() : (acJ(), bb.aCz()), eC++) : acK() : function() {
			var aZz;
			if (bf.eT >= eT)
				if (2 === aD.a11 || aM.hF || !bC.a5s) mc(), eT = bf.eT;
				else {
					for (aZz = bf.aCP / bC.a9d(), 16 < (bf.eT - eT) / aZz && (eT = bf.eT - 16 * aZz); bf.eT >= eT && 2 !== aD.a11;) eT += aZz, acJ();
					bb.aCz()
				} acK()
		}(), mi(), bf.dk && (bf.dk = !1, z3())
	}, this.a1C = function() {
		b9.qD.aWB.length - acD <= 2 || aN.a2M("Replay file larger than expected.")
	}
}

function acQ() {
	var eC = 0,
		eT = bf.eT;
	this.ac4 = 0, this.eY = function() {
		h.eY(), aD.hT ? mn() : 0 === eC ? bf.eT >= eT && (eT += bf.aCP * Math.floor(1 + (bf.eT - eT) / bf.aCP), 2 === aD.a11 || aM.hF ? mc() : (me(), bb.aCz()), eC++) : ((aM.hF ? mn : (bf.dk = !0, mk))(), eC = 0), mi(), bf.dk && (bf.dk = !1,
		z3())
	}
}

function dR() {
	this.a1B = null, this.dk = !1, this.eT = 0, this.aCP = 56;
	var acR = 0;

	function acS() {
		bf.eT = acR = performance.now(), bf.a1B.eY(), window.requestAnimationFrame(acS)
	}
	this.dd = function() {
		this.a5p(), window.requestAnimationFrame(acS), this.eT = performance.now()
	}, this.a5h = function() {
		aD.hE ? (this.a1B = new acC, this.a1B.dd()) : aD.kk ? this.a1B = new acQ : (this.a1B = new ac5, this.a1B.dd())
	}, this.a5p = function() {
		this.a1B = new ac3, this.dk = !0
	}, this.eY = function() {
		this.a1B.ac4++
	}, this.kN = function() {
		return this.a1B.ac4
	}, this.aUK = function() {
		var eU = performance.now();
		eU < acR + 1e3 || (this.eT = eU, this.a1B.eY())
	}
}

function ct() {
	var aH1 = 0,
		acT = !0;

	function acU(id) {
		id = [L(525), L(526), L(527), L(528)][id];
		aN.a7e(id)
	}
	this.eY = function() {
		var eU, a81;
		bf.eT < aH1 || (aH1 = bf.eT + 3e3, aD.hE) || aD.kk || bA.gR.hH(aD.ep) || (eU = new Date, a81 = eU.getUTCSeconds(), acT ? a81 < 43 && (acT = !1) : a81 < 43 || (aH1 += 52e3, acT = !0, (a81 = (eU.getUTCMinutes() + 2) % 60) % 10 == 0 ? aD
			.ki < 7 && acU(0) : a81 % 10 == 5 ? 7 !== aD.ki && 10 !== aD.ki || acU(1) : a81 % 10 == 7 ? 8 === aD.ki && acU(2) : a81 % 10 == 2 && 9 === aD.ki && acU(3)))
	}
}

function cn() {
	var nQ, nR, nd, ne, acV = 0,
		acW = 0;

	function acY() {
		return Math.pow(Math.pow(nd - nQ, 2) + Math.pow(ne - nR, 2), .5)
	}

	function acX(e) {
		nQ = h.k * e.touches[0].clientX, nR = h.k * e.touches[0].clientY, nd = h.k * e.touches[1].clientX, ne = h.k * e.touches[1].clientY
	}
	this.a2d = function(e) {
		return 1 < e.touches.length ? (acW = bf.eT, acV = 3, acX(e), aL.sA(), !0) : (acV = 0, !1)
	}, this.a2e = function(e) {
		var aMm, iM, iN;
		return 0 !== aD.a11 && 1 < e.touches.length && (acV = Math.max(acV - 1, 0), aH.ni() && (aMm = acY(), acX(e), e = acY(), iM = Math.floor((nQ + nd) / 2), iN = Math.floor((nR + ne) / 2), aS.aA4(iM, iN, Math.max(.125, e) / Math.max(.125,
			aMm)), bf.dk = !0), !0)
	}, this.a31 = function() {
		var fC, fE;
		return !!(acV && (acV = 0, bf.eT < acW + 500)) && (fC = (nQ + nd) / 2, fE = (nR + ne) / 2, aL.a2v(fC, fE), aL.click(fC, fE, !0) && (bf.dk = !0), !0)
	}
}

function d2() {
	this.size = 0, this.eC = 0, this.aC = null, this.dd = function(aC) {
		this.eC = 0, this.aC = aC, this.size = aC.length
	}, this.ud = function() {
		this.aC = null
	}, this.q1 = function(size) {
		for (var fX = 0, aC = this.aC, ni = this.eC + size - 1, aB = this.eC; aB <= ni; aB++) fX |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << ni - aB;
		return this.eC += size, this.eC > 8 * this.size && console.error("Unwrapper Overflow"), fX
	}, this.aUk = function(size) {
		var fP = size >> 1;
		return (1 << fP) * this.q1(size - fP) + this.q1(fP)
	}, this.aUl = function(acZ) {
		return this.size === bD.aUj(acZ)
	}, this.aWO = function(xr, aca, acb) {
		var gY = this.q1(xr);
		if (!gY) return null;
		for (var xr = Math.max(gY, acb), g = new(aca <= 8 ? Uint8Array : aca <= 16 ? Uint16Array : Uint32Array)(xr), aB = 0; aB < gY; aB++) g[aB] = this.q1(aca);
		acb = g[gY - 1];
		return acb && g.fill(acb, gY), g
	}, this.aWP = function(xr, acc, acb) {
		var gY = this.q1(xr);
		if (!gY) return null;
		for (var xr = Math.max(gY, acb), g = new Array(xr), aB = 0; aB < gY; aB++) g[aB] = this.aWM(acc);
		return g.fill(g[gY - 1], gY), g
	}, this.aWM = function(xr) {
		return bG.wy.x2(this.q1(xr))
	}, this.aWN = function() {
		var qa = bF.tG.tH(bF.tG.tI(this.q1(30))),
			qa = bA.rs.a5J(qa, "_", "/");
		qa = bA.rs.a5J(qa, "-", "+");
		for (var acd = "";
			(qa.length + acd.length) % 4;) acd += "=";
		qa = "data:image/png;base64," + qa + acd;
		var aJE = new Image;
		aJE.onload = function() {
			b9.aJm.aJn(aJE), aJE.onload = null, aJE = null
		}, aJE.src = qa
	}
}

function dL() {
	this.aXK = 0, this.aXL = 0, this.aXG = 0, this.aXH = 0, this.aXI = 0, this.aXJ = 0, this.aD0 = [0, 0, 0, 0], this.nh = function() {
		this.aXK = aS.z5(), this.aXL = aS.z6(), this.aXG = -this.aXK, this.aXH = -this.aXL, this.aXI = h.i / iG, this.aXJ = h.j / iG, this.aD0[0] = Math.floor(this.aXG), this.aD0[1] = Math.floor(this.aXH), this.aD0[2] = Math.floor(this.aD0[0] +
			this.aXI + 1), this.aD0[3] = Math.floor(this.aD0[1] + this.aXJ + 1), bb.aCx = !0
	}
}

function co() {
	var a8i, nC;
	this.dd = function() {
		a8i = 1, nC = 0
	}, this.eY = function() {
		0 < a8i && (nC = 0 === nC ? bf.eT + 16 : nC, a8i = (a8i -= .001 * (bf.eT - nC)) < 0 ? 0 : a8i, nC = bf.eT, bf.dk = !0)
	}, this.vY = function() {
		0 < a8i && (vZ.fillStyle = "rgba(0,0,0," + a8i + ")", vZ.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eC = 0, this.aC = null, this.dd = function(aC) {
		this.eC = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(acZ) {
		return this.dd(new Uint8Array(this.aUj(acZ))), this.aC
	}, this.ud = function() {
		this.aC = null
	}, this.a8 = function(size, a86) {
		for (var aC = this.aC, ni = this.eC + size - 1, aB = this.eC; aB <= ni; aB++) aC[aB >> 3] |= (a86 >> ni - aB & 1) << 7 - (7 & aB);
		this.eC += size, this.eC > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aUi = function(size, a86) {
		var fP = size >> 1,
			f8 = 1 << fP;
		this.a8(size - fP, bL.fW(a86, f8)), this.a8(fP, a86 % f8)
	}, this.acg = function(size) {
		for (var aC = this.aC, ni = this.eC + size, aB = this.eC; aB < ni; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aUj = function(acZ) {
		return acZ + 7 >> 3
	}, this.ach = function(g, jg, ni, aci) {
		for (var aB = jg; aB < ni; aB++) this.a8(aci, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.eC = 0
	}, this.aV7 = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(acj, value) {
		for (var g = this.g, ni = this.eC + acj - 1, ack = 1 + (ni >> 3); g.length < ack;) g.push(0);
		for (var aB = this.eC; aB <= ni; aB++) g[aB >> 3] |= (value >> ni - aB & 1) << 7 - (7 & aB);
		this.eC += acj
	}, this.dj = function(g, xr, aca) {
		var acl = bA.r1.a3n(g);
		this.a8(xr, acl);
		for (var aB = 0; aB < acl; aB++) this.a8(aca, g[aB])
	}, this.aWg = function(g, xr, acc) {
		var acl = bA.r1.a3n(g);
		this.a8(xr, acl);
		for (var aB = 0; aB < acl; aB++) this.aWe(g[aB], acc)
	}, this.aWe = function(qa, xr) {
		var f5 = qa.length;
		this.a8(xr, f5);
		for (var aB = 0; aB < f5; aB++) this.a8(16, qa.charCodeAt(aB))
	}, this.aWf = function(a3t) {
		var acm = (a3t = a3t.toDataURL()).split(",");
		if (acm.length < 2) console.log("error 266");
		else {
			a3t = bA.rs.a5J(a3t = acm[acm.length - 1], "/", "_"), a3t = bA.rs.a5J(a3t, "\\+", "-");
			var a3t = bA.rs.a5J(a3t, "=", ""),
				xB = bG.tG.x8(a3t),
				f5 = xB.length;
			this.a8(30, f5);
			for (var aB = 0; aB < f5; aB++) this.a8(6, xB[aB])
		}
	}
}
a(), self.aiCommand746 = function(fX) {
	0 === fX ? bt() : 1 !== fX || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fY()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};