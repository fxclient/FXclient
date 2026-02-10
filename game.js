var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fu, fv, fw, fx, fy, fz, g0, g1, g2, g3, g4, g5, g6, iF, ih, ii,
	a8n, m0, kA, a2P, vV, z4, aCs, a5a, a5b, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data", "territorial.io", "0.5em",
		" / ", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "pre", "break-word",
		"50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave",
		"inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload",
		"wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo",
		"loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest",
		"False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, system-ui", "@room", "255,255,255", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy",
		". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
	this.dp = 1117;
	this.rVersion = 17, this.dt = 0, this.dd = function() {
		this.du = 2;
		this.n = "2.15.7", this.dw = "7 Feb 2026 [" + this.n + "]";
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
		e7 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e8 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.e9 = function(id, eA, eB) {
		eA = this.eC(eA);
		return +(e4[eA][id] > eB)
	}, this.eC = function(eA) {
		for (var aB = 0; aB < e3.length; aB++)
			if (e3[aB] <= eA) return aB;
		return e3.length
	}, this.eD = function(eA) {
		return e2[this.eC(eA)]
	}, this.eE = function(id, eF) {
		return e5[id].replace(new RegExp("x", "g"), eF)
	}, this.eG = function(id, eF) {
		return e7[id].replace(new RegExp("x", "g"), eF)
	}, this.eH = function(id, eI) {
		return this.e8[5][id]
	}
}

function dE() {
	this.eJ = new eK, this.eL = new eM, this.dd = function() {
		a0.a1.eN()
	}, this.eO = function() {
		return bj.eP.data[160].value
	}
}

function eK() {
	var eQ = 12e3;
	this.show = function(eR) {
		return !eR && !bU.eO() && (0 === a0.id ? bU.eL.show() : !(bf.eS < eQ) && (eR = 1 === a0.id ? 72e4 : 108e4, eQ = bf.eS + eR, 2 === l.du) && a0.a1.eU(Math.floor(eR)))
	}
}

function eM() {
	var eV = null,
		eQ = 2e4,
		eW = 0;
	this.eX = function() {
		bf.eS < eQ || (eQ = bf.eS + 1e4, 0 !== a0.id) || eV || bU.eO() || (b0.y.eY(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b0.eZ.ea(5) : eQ = bf.eS + 1e3)
	}, this.eb = function(ec) {
		eV = ec
	}, this.show = function() {
		return !(!eV || bf.eS < eW) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eW = bf.eS + 6e4, (new ed).show(eV.ee, eV.colors, eV.id), !(eV = null)))
	}
}

function cX() {
	this.ef = new eg
}

function eg() {
	this.eh = function(ei) {
		var el;
		return bS.ej(bS.ek) && aD.data.passableMountains && (el = ac.em(ei), this.en(aD.eo, el) || this.ep(aD.eo, el)) && 0 !== (el = function(fA) {
			for (var fB = bM.fC(fA), fD = bM.fE(fA), max = Math.max(bS.fF, bS.fG) - 2, fH = max * max, fI = !1, fJ = 0, fK = 0; fK < max; fK++) {
				var fL, eq = function(fB, fD, fK) {
					for (var aB = 0; aB <= fK; aB++)
						for (var fN = -1; fN < 2; fN += 2)
							for (var fO = -1; fO < 2; fO += 2)
								for (var ec = 0; ec < 2; ec++) {
									var ei = function(fB, fD) {
										if (bM.fQ(fB, fD)) {
											fB = bM.fR(fB, fD), fD = bM.eu(fB);
											if (ac.ez(fD) && ac.fS(fD)) return fB
										}
										return 0
									}(fB + ec * fN * aB + (1 - ec) * fO * fK, fD + ec * fO * fK + (1 - ec) * fN * aB);
									if (ei) return ei
								}
					return 0
				}(fB, fD, fK);
				eq && (fL = bM.fM(fB, fD, eq)) < fH && (fJ = eq, fH = fL, fI || (fI = !0, max = Math.floor(Math.sqrt(fL)) + 1))
			}
			return fJ
		}(bM.es(ei))) && (ei = bM.eu(el), ac.ev(ei) || (ei = ac.ew(ei)) !== aD.eo && bs.ex(ei, aD.eo)) ? el : 0
	}, this.ey = function(player, eq) {
		eq = bM.eu(eq);
		if (ac.ez(eq)) {
			if (ac.ev(eq)) bO.f0[0] = aD.f1;
			else if (ac.ew(eq) !== bO.f0[0]) return !1;
			for (var f2 = function(ei) {
					var f6 = ac.f6,
						f2 = [];
					loop: for (var f7 = 3; 0 <= f7; f7--) {
						var f8 = ei + f6[f7];
						if (ac.f9(f8)) {
							for (var id = ac.em(f8), aB = 0; aB < f2.length; aB++)
								if (id === f2[aB]) continue loop;
							bO.f5[f2.length] = f8, f2.push(id)
						}
					}
					return f2
				}(eq), f4 = f2.length, aB = 0; aB < f4; aB++)
				if (this.en(player, f2[aB]) || this.ep(player, f2[aB])) return bO.f5[0] = bO.f5[aB], !0
		}
		return !1
	}, this.en = function(player, el) {
		for (var fT = ag.fT[player], f4 = fT.length, fU = Math.max(bL.fV(f4, 12), 1), f6 = ac.f6, aB = 0; aB < f4; aB += fU)
			for (var et = fT[aB], f7 = 3; 0 <= f7; f7--) {
				var f8 = et + f6[f7];
				if (ac.f9(f8) && el === ac.em(f8)) return !0
			}
		return !1
	}, this.ep = function(player, el) {
		for (var fT = ag.fT[player], f4 = fT.length, f6 = ac.f6, aB = 0; aB < f4; aB++)
			for (var et = fT[aB], f7 = 3; 0 <= f7; f7--) {
				var f8 = et + f6[f7];
				if (ac.f9(f8) && el === ac.em(f8)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fY = new Uint16Array(2), this.fZ = new Uint16Array(2), this.fa = new Int32Array(2), this.fb = new Uint32Array(2), this.fc = new Uint32Array(2), this.fd = new Uint8Array(4), this.fe = new Uint8Array(4), this.f5 =
		new Uint32Array(4), this.ff = new Uint32Array(5), this.f0 = new Uint32Array(8), this.fg = new Uint32Array(8), this.fh = new Uint16Array(16), this.fi = new Uint16Array(512), this.fj = new Uint16Array(512), this.fk = new Uint16Array(512), this
		.fl = new Uint16Array(0), this.dd = function() {
			var f4 = bS.fF * bS.fG;
			this.fl.length !== f4 && (this.fl = new Uint16Array(f4))
		}, this.fm = function(g, fn) {
			return g[0] = fn, g
		}, this.fo = function(g, fn, fp) {
			return g[0] = fn, g[1] = fp, g
		}, this.fq = function(g, fn, fp, fr) {
			return g[0] = fn, g[1] = fp, g[2] = fr, g
		}, this.fs = function(g, fn, fp, fr, ft) {
			return g[0] = fn, g[1] = fp, g[2] = fr, g[3] = ft, g
		}
}

function g7() {
	g0 = 0, g1 = 2048, g2 = new Uint32Array(4 * g1), g3 = 0, g4 = new Uint32Array(g1), g5 = new Uint8Array(bS.fF * bS.fG)
}

function g8(player) {
	fv = player, g6 = !1, g9(), gA();
	for (var aB = ad.gB(fv) - 1; 0 <= aB; aB--) fu = aB, gC();
	g6 && gD()
}

function gD() {
	bs.gE(), bs.gF()
}

function gC() {
	fz = ad.gG(fv, fu), fw = ad.gH(fv, fu), fx = ad.gI(fv, fu), gJ(), (0 !== g0 && (gL(), gM()) ? gN : gK)()
}

function gM() {
	if (!((fy = bL.fV(fw, g0)) > aD.gO)) {
		if (!fx) return !1;
		var gP = g0 * (1 + aD.gO);
		fw += bA.gQ.gR(fv, gP - fw), fy = bL.fV(fw, g0)
	}
	return !0
}

function gL() {
	for (var aB = g0 - 1; 0 <= aB; aB--) g5[bL.fV(g2[aB], 4)] = 0
}

function gK() {
	1 === ad.gB(fv) && aF.gS(fv);
	var eT = bA.gQ.gT(fv, fw);
	bd.gU(fv, fw - eT, 12), ad.gV(fv, fu)
}

function g9() {
	for (var player = fv, gW = ag.gW, f4 = Math.min(gW[player].length, g1), gX = 0, gY = g4, aB = f4 - 1; 0 <= aB; aB--) gY[gX++] = gW[player][aB];
	g3 = gX
}

function gA() {
	for (var aB = ag.gW[fv].length - 1; 0 <= aB; aB--) ac.ez(ag.gW[fv][aB]) && ac.gZ(ag.gW[fv][aB], fv);
	ag.gW[fv] = []
}

function gJ() {
	g0 = 0, (fz === aD.f1 ? ga : gb)()
}

function gb() {
	for (var gc, gd, aB, f6 = ac.f6, f7 = 3; 0 <= f7; f7--)
		for (aB = g3 - 1; 0 <= aB; aB--) gc = g4[aB] + f6[f7], gd = bL.fV(gc, 4), 0 === g5[gd] && ac.ge(gc) && ac.ew(gc) === fz && (g5[gd] = 1, g2[g0++] = gc)
}

function ga() {
	for (var gc, gd, aB, f6 = ac.f6, f7 = 3; 0 <= f7; f7--)
		for (aB = g3 - 1; 0 <= aB; aB--) gc = g4[aB] + f6[f7], gd = bL.fV(gc, 4), 0 === g5[gd] && ac.ev(gc) && (g5[gd] = 1, g2[g0++] = gc)
}

function gN() {
	gf() ? (gg(), fz !== aD.f1 && gh()) : gK()
}

function gh() {
	bs.gi(), bs.gj(ag.gk[fz]), bs.gj(ag.gl[fz]), bS.ej(bS.ek) && bs.gj(ag.fT[fz]), bs.gm(ag.gW[fz]), bs.gn(ag.gl[fz]), bs.gn(ag.fT[fz]), bs.go(), bs.gp()
}

function gg() {
	g6 = !0, ad.gq(fv, fu, fw), ad.gr(fv, fu), ag.gs[fv] += g0, bs.gt(), gu()
}

function gf() {
	return (fz === aD.f1 ? gv : gw)()
}

function gw() {
	var gx = g0 * aD.gO,
		gy = gz(),
		h0 = h1(),
		gy = gx + 2 * gy + h0,
		h3 = fy * g0;
	return gy < h3 ? (fw -= gy, bd.gU(fv, gy, 13), h4(gy - gx, h0), !0) : fx && 0 === h0 ? (fw -= h3, h3 += bA.gQ.gR(fv, gy - h3 + 1), bd.gU(fv, h3, 13), h4(h3 - gx, 0), !0) : (fw -= h3, bd.gU(fv, h3, 13), h4(h3 - gx, h0), !1)
}

function h4(h3, h0) {
	if (0 < h0) {
		if (h3 <= h0) return bd.gU(fz, h3, 13), void ad.h5(fz, fv, h0 - h3);
		ad.h5(fz, fv, 0), h3 -= h0
	}
	h3 = bL.fV(h3, 2), h3 = Math.min(ag.h6[fz], h3), bd.gU(fz, h3, 13), ag.h6[fz] -= h3
}

function h1() {
	return ad.h7(fz, fv)
}

function gz() {
	return bL.fV(g0 * ag.h6[fz], 1 + bL.fV(10 * ag.gs[fz], 16))
}

function gv() {
	var h8 = g0 * aD.gO;
	return fw -= h8, bd.gU(fv, h8, 13), !0
}

function gu() {
	for (var aB = g0 - 1; 0 <= aB; aB--) ag.gW[fv].push(g2[aB]), ag.gk[fv].push(g2[aB]), ac.gZ(g2[aB], fv)
}

function dC() {
	var h9 = 0,
		hA = 0;
	this.hB = function(fB, fD) {
		h9 = fB, hA = fD
	}, this.hC = function(code) {
		var hJ, hL, eq;
		aD.hD || aM.hE || (bA.gQ.hF(0) || bA.gQ.hF(1)) && bA.gQ.hG(aD.eo) && (aR.hH(h9, hA) ? aR.hI = !1 : aP.hH(h9, hA) || (hJ = bM.hK(h9), hL = bM.hM(hA), eq = bM.fR(hJ, hL), bM.hN(hJ, hL) && (0 === code ? function(eq) {
			var hR, ei, et;
			aD.hS ? -1 !== (hR = br.hT(eq)) && b8.hU.hV(eq) : (ei = bM.eu(eq), ac.f9(ei) ? (hR = am.ef.eh(ei)) && (et = bM.eu(hR), et = ac.ev(et) ? aD.f1 : ac.ew(et), b8.hU.hX(aR.hY(), hR, et)) : (hR = br.hZ(eq)) < 0 || (ei = bM
				.eu(hR), ac.ev(ei) ? bs.ha(aD.eo) ? b8.hU.hb(aR.hY(), aD.f1) : ad.gB(aD.eo) && b1.hc(aD.f1, aR.hY()) : (et = ac.ew(ei), bs.ex(et, aD.eo) && (bs.hd(aD.eo, et) ? b8.hU.hb(aR.hY(), et) : ad.gB(aD.eo) && b1.hc(
					et, aR.hY())))))
		}(eq) : 1 === code ? function(eq) {
			bN.he.hf(aD.eo, eq) && b8.hU.hg(aR.hY(), bO.fg[7])
		}(eq) : 2 === code && function(eq) {
			bN.hh.hi(aD.eo, eq) && b8.hU.hj(aR.hY())
		}(eq))))
	}, this.hk = function() {
		if (!aD.hD && !aM.hE && bA.gQ.hF(1)) {
			var gc = aD.eo;
			if (bA.gQ.hG(gc)) {
				var f4 = ad.gB(gc);
				if (f4 < 1) ! function() {
					var gc = aD.eo;
					if (bs.ha(gc)) b8.hU.hb(aR.hY(), aD.f1);
					else
						for (var f6 = ac.f6, gk = ag.gk, f4 = gk[gc].length, hu = Math.floor(Math.random() * f4), aB = 0; aB < f4; aB++)
							for (var hv = 3; 0 <= hv; hv--) {
								var hw = gk[gc][(aB + hu) % f4] + f6[hv];
								if (ac.ge(hw)) {
									hw = ac.ew(hw);
									if (hw !== gc && (!aD.hy || bs.ex(gc, hw))) return b8.hU.hb(aR.hY(), hw)
								}
							}
				}();
				else {
					for (var hm = 0, hn = ad.gH(gc, 0), aB = 1; aB < f4; aB++) {
						var ho = ad.gH(gc, aB);
						ho < hn && (hn = ho, hm = aB)
					}
					b8.hU.hb(aR.hY(), ad.gG(gc, hm))
				}
			}
		}
	}, this.hp = function() {
		if (!aD.hD && !aM.hE && bA.gQ.hG(aD.eo) && bA.gQ.hF(1)) return aw.hq ? aw.hr(aD.eo) ? void b8.hU.hs(1) : void 0 : void(aw.ht(aD.eo) && b8.hU.hp())
	}
}

function hz(i0, size, i1, i2, font) {
	var aB, i5 = .2,
		canvas = document.createElement("canvas"),
		i6 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = i0, canvas.height = i0, i6.font = size + font, i6.textAlign = "center", i6.textBaseline = "middle", i6.fillStyle = "red", aB = 0; aB < i1.length; aB++) i6.fillText(i1[aB], .5 * i0, .5 * i0);
	return -1 < (canvas = function(i3) {
		var aB, eA, f7 = i3.data;
		for (aB = f7.length - 4; 0 <= aB; aB -= 4)
			if (eA = f7[aB], i2 <= eA) return Math.floor(aB / (4 * i0));
		return -1
	}(i6.getImageData(0, 0, i0, i0))) && (i5 = (canvas - .5 * i0 + .1 * size) / size), Math.max(i5, 0)
}

function d5() {
	this.i8 = new Int16Array(4), this.i9 = new Int16Array(4), this.iA = null, this.dd = function() {
		var aB;
		for (this.i8[0] = -bS.fF, this.i8[1] = 1, this.i8[2] = bS.fF, this.i8[3] = -1, this.iA = new Int16Array([-bS.fF, 1 - bS.fF, 1, bS.fF + 1, bS.fF, bS.fF - 1, -1, -bS.fF - 1]), aB = 0; aB < 4; aB++) this.i9[aB] = 4 * this.i8[aB]
	}, this.iB = function() {
		return bL.iC(Math.floor(.15 * (1 + .25 * a0.a1.iD()) * h.iE / iF), 4, 128)
	}, this.iG = function(ei, id) {
		for (var iH = this.i9, aB = 0; aB < 4; aB++) {
			var et = ei + iH[aB];
			if (ac.iI(et) && ac.em(et) === id) return !0
		}
		return !1
	}, this.iJ = function(player, ei) {
		return !ac.ev(ei) && player === ac.ew(ei)
	}, this.fM = function(hJ, hL, eq) {
		return (hJ -= this.fC(eq)) * hJ + (hL -= this.fE(eq)) * hL
	}, this.iK = function(iL, iM, iN) {
		iL = this.iP(iL) - this.iQ(iN), iM = this.iS(iM) - this.iT(iN);
		return Math.sqrt(iL * iL + iM * iM)
	}, this.iU = function(iV, iW) {
		var iO = this.fC(iV) - this.fC(iW),
			iV = this.fE(iV) - this.fE(iW);
		return ~~Math.sqrt(iO * iO + iV * iV + .5)
	}, this.iX = function(iV, iW) {
		var iO = this.fC(iV) - this.fC(iW),
			iV = this.fE(iV) - this.fE(iW);
		return iO * iO + iV * iV
	}, this.iY = function(iZ, ia, ib, ic) {
		return (iZ -= ib) * iZ + (ia -= ic) * ia
	}, this.ie = function(gc, ig) {
		return bL.fV(ig * ag.h6[gc], 1e3)
	}, this.iP = function(iL) {
		return 16 * (iL + ih) / iF
	}, this.iS = function(iM) {
		return 16 * (iM + ii) / iF
	}, this.ij = function(f7) {
		return 16 * f7 / iF
	}, this.hK = function(iL) {
		return Math.floor((iL + ih) / iF)
	}, this.hM = function(iM) {
		return Math.floor((iM + ii) / iF)
	}, this.hN = function(hJ, hL) {
		return 1 <= hJ && 1 <= hL && hJ < bS.fF - 1 && hL < bS.fG - 1
	}, this.fC = function(eq) {
		return eq % bS.fF
	}, this.fE = function(eq) {
		return bL.fV(eq, bS.fF)
	}, this.fR = function(hJ, hL) {
		return hL * bS.fF + hJ
	}, this.ik = function(hJ, hL) {
		return 4 * this.fR(hJ, hL)
	}, this.il = function(eq) {
		return this.fQ(this.fC(eq), this.fE(eq))
	}, this.fQ = function(hJ, hL) {
		return 0 < hJ && hJ < bS.fF - 1 && 0 < hL && hL < bS.fG - 1
	}, this.eu = function(eq) {
		return eq << 2
	}, this.es = function(ei) {
		return ei >> 2
	}, this.im = function(eq) {
		return bS.fF * this.fE(eq) * 256 + (this.fC(eq) << 4)
	}, this.io = function(eq) {
		return this.im(eq) + 8 + (bS.fF << 7)
	}, this.ip = function(iN) {
		return bS.fF * (this.iT(iN) >> 4) + (this.iQ(iN) >> 4)
	}, this.iq = function(iN) {
		iN = this.ip(iN);
		return (this.fC(iN) >> 5) + bN.ir.is * (this.fE(iN) >> 5)
	}, this.iQ = function(iN) {
		return iN % (bS.fF << 4)
	}, this.iT = function(iN) {
		return bL.fV(iN, bS.fF << 4)
	}, this.it = function(eq, hv) {
		return eq + this.i8[hv]
	}, this.iu = function(ei, hv) {
		return ei + this.i9[hv]
	}, this.iv = function(iV, iW) {
		var iO = this.fC(iW) - this.fC(iV),
			iW = this.fE(iW) - this.fE(iV);
		return Math.abs(iO) >= Math.abs(iW) ? 1 + 2 * (iO < 0) : 2 * (0 < iW)
	}, this.iw = function(player) {
		return this.fR(ag.ix[player] + ag.iy[player] >> 1, ag.iz[player] + ag.j0[player] >> 1)
	}, this.j1 = function(player) {
		return this.fR(ay.j2(ag.ix[player], ag.iy[player]), ay.j2(ag.iz[player], ag.j0[player]))
	}
}

function cl() {
	this.j3 = new j4, this.j5 = new j6, this.j7 = new j8, this.performance = new j9, this.jA = new jB, this.jC = new jD, this.jE = new jF, this.jG = new jH, this.jI = new jJ, this.dd = function() {
		this.j3.dd(), this.j7.dd(), this.performance.dd(), this.jA.dd(), this.jC.dd()
	}, this.eX = function() {
		this.performance.eX(), this.j3.eX(), this.j7.jK()
	}
}

function jB() {
	var jL, jN = new Uint16Array(8);

	function jV(size, player) {
		for (var aB = ag.gW[player].length - 1; size <= aB; aB--) ac.jb(ag.gW[player][aB], player)
	}
	this.dd = function() {
		jL = 0
	}, this.jO = function(player, jP) {
		return bO.f0[1] = ag.gW[player].length, bO.f0[0] === aD.f1 ? ao.jA.jQ(player) : this.jR(player, bO.f0[0]), (0 !== bO.f0[1] || 0 !== ag.gW[player].length) && !(!jP && bO.f0[1] === ag.gW[player].length || (bO.f0[0] === aD.f1 ? ag.jS[
			player]++ : ag.jT[player]++, 0))
	}, this.jU = function(player) {
		jV(bO.f0[1], player), ad.eb(player, bO.fb[0], bO.f0[0]), aF.jW(player, !1)
	}, this.jX = function(player, jY, f4, hn) {
		var jZ = bL.fV(12 * ag.h6[player], 1024);
		hn -= hn >= bL.fV(ag.h6[player], 2) ? jZ : 0, jV(f4, player), ad.eb(player, hn, jY), ag.h6[player] -= hn + jZ, aF.jW(player, !1)
	}, this.jR = function(player, jY) {
		for (var hv, f6 = ac.f6, aB = ag.gk[player].length - 1; 0 <= aB; aB--)
			if (ac.ja(ag.gk[player][aB]))
				for (hv = 3; 0 <= hv; hv--)
					if (ac.ge(ag.gk[player][aB] + f6[hv]) && ac.ew(ag.gk[player][aB] + f6[hv]) === jY) {
						ag.gW[player].push(ag.gk[player][aB]);
						break
					}
	}, this.jQ = function(player) {
		for (var f6 = ac.f6, aB = ag.gk[player].length - 1; 0 <= aB; aB--)
			if (ac.ja(ag.gk[player][aB]))
				for (var hv = 3; 0 <= hv; hv--)
					if (ac.ev(ag.gk[player][aB] + f6[hv])) {
						ag.gW[player].push(ag.gk[player][aB]);
						break
					}
	}, this.jc = function(player, jd) {
		var aB, fN, hv, hx, f4 = ag.gk[player].length,
			je = 256 <= f4 ? 12 : 32 <= f4 ? 6 : 1,
			jf = f4 - 1 - ay.jg(je),
			f6 = ac.f6;
		jL = 0;
		loop: for (aB = jf; 0 <= aB; aB -= je)
			for (hv = 3; 0 <= hv; hv--)
				if ((hx = ac.ev(ag.gk[player][aB] + f6[hv]) ? aD.f1 : ac.ew(ag.gk[player][aB] + f6[hv])) === aD.f1 || ac.ge(ag.gk[player][aB] + f6[hv]) && hx !== player && (jd || bs.ex(player, hx))) {
					for (fN = jL - 1; 0 <= fN; fN--)
						if (jN[fN] === hx) continue loop;
					if (jN[jL] = hx, 8 <= ++jL) return !0
				}
		return 0 < jL
	}, this.jh = function(player, jd) {
		var aB, hv, hx, f6 = ac.f6;
		for (jL = 0, aB = ag.gk[player].length - 1; 0 <= aB; aB--)
			for (hv = 3; 0 <= hv; hv--)
				if ((hx = ac.ev(ag.gk[player][aB] + f6[hv]) ? aD.f1 : ac.ew(ag.gk[player][aB] + f6[hv])) === aD.f1 || ac.ge(ag.gk[player][aB] + f6[hv]) && hx !== player && (jd || bs.ex(player, hx))) return jN[jL++] = hx, !0;
		return !1
	}, this.ji = function() {
		for (var fO, aB = jL - 1; 0 <= aB; aB--)
			if (jN[aB] === aD.f1) {
				for (jL--, fO = aB; fO < jL; fO++) jN[fO] = jN[fO + 1];
				return !0
			} return !1
	}, this.jj = function(player) {
		for (var fO, aB = jL - 1; 0 <= aB; aB--)
			if (ad.jk(player, jN[aB]))
				for (jL--, fO = aB; fO < jL; fO++) jN[fO] = jN[fO + 1];
		return 0 === jL
	}, this.jl = function() {
		for (var aB = jL - 1; 0 <= aB; aB--)
			if (bA.gQ.jm(jN[aB])) return !0;
		return !1
	}, this.jn = function() {
		for (var aB = jL - 1; 0 <= aB; aB--) bA.gQ.jm(jN[aB]) || (jN[aB] = jN[--jL]);
		return 0 < jL
	}, this.jo = function(player) {
		for (var fO, jp = jN[0], jq = ag.h6[jp] + ad.h7(jp, player), aB = jL - 1; 1 <= aB; aB--)(fO = ag.h6[jN[aB]] + ad.h7(jN[aB], player)) < jq && (jp = jN[aB], jq = fO);
		return jp
	}, this.jr = function(player) {
		var j, js = jN[0];
		if (1 !== jL)
			for (var jt = bL.fV(ag.iy[player] + ag.ix[player], 2), ju = bL.fV(ag.j0[player] + ag.iz[player], 2), fK = jv(jt - bL.fV(ag.iy[js] + ag.ix[js], 2)) + jv(ju - bL.fV(ag.j0[js] + ag.iz[js], 2)), aB = jL - 1; 1 <= aB; aB--)(j = jv(jt - bL
				.fV(ag.iy[jN[aB]] + ag.ix[jN[aB]], 2)) + jv(ju - bL.fV(ag.j0[jN[aB]] + ag.iz[jN[aB]], 2))) < fK && (fK = j, js = jN[aB]);
		return js
	}, this.jw = function() {
		for (var jx = jN, jy = jx[0], h6 = ag.h6, jz = h6[jy], aB = jL - 1; 1 <= aB; aB--) {
			var gc = jx[aB],
				fO = h6[gc];
			jz < fO && (jy = gc, jz = fO)
		}
		return jy
	}, this.k0 = function() {
		return jN[ay.jg(jL)]
	}
}

function jD() {
	function kG(player, jY, k6) {
		3 <= k6 && 2142 < bf.kM() && (jY === aD.f1 || ag.h6[jY] < bL.fV(ag.h6[player], 20)) && aE.kB(player, 20)
	}

	function kJ(player, hn, jY, k6) {
		3 <= k6 && k6 < 6 && bL.fV(ag.h6[player], 8) > ag.h6[jY] && (hn = Math.max(bL.fV(11 * ag.h6[jY], 5), bL.fV(ag.h6[player], 10)));
		k6 = ag.gW[player].length;
		ao.jA.jR(player, jY), ao.jA.jX(player, jY, k6, hn)
	}

	function kF(player, hn) {
		var jY = aD.f1,
			f4 = ag.gW[player].length;
		ao.jA.jQ(player), ag.gW[player].length !== f4 && ao.jA.jX(player, jY, f4, hn)
	}
	this.k1 = new Uint8Array(aD.f1), this.dd = function() {
		this.k1.fill(0)
	}, this.k2 = function(player, hn) {
		var k4, k6, k7, k8;
		ad.k3(player) && (k4 = ae.k5(player), 3 <= (k6 = aE.hn[player]) && k6 < 6 && (hn = Math.max(ag.h6[player] - k4, hn)), k7 = ag.gl[player].length, k8 = ag.gk[player].length, 30 * ag.gs[player] > aD.k9 && kA[player] < 10 && 100 * k8 <= k7 &&
			aE.kB(player, 10), aD.hy ? function(player, hn, k6, k4) {
				var jY;
				if (ao.jA.jc(player, !1) || ao.jA.jh(player, !1)) {
					if (!ao.jA.jj(player))
						if (ao.jA.ji()) kF(player, hn), kG(player, aD.f1, k6);
						else {
							if (ay.kH(aE.kI[k6])) jY = ao.jA.jo(player);
							else {
								if (ao.jA.jl() && ay.kH(aE.kK[k6]) && ao.jA.jn(), 6 === k6) return kJ(player, hn, ao.jA.k0(), k6);
								jY = ao.jA.jr(player)
							}
							kJ(player, hn, jY, k6), kG(player, jY, k6)
						}
				} else bN.kD.eX(player) || ao.jE.eX(player) || ! function(player, hn, k6, k4) {
					var k1 = ao.jC.k1;
					k1[player] = 0;
					var kN = bg.f2[player];
					if (0 !== kN) {
						var kO = ag.h6[player],
							gs = ag.gs;
						if (player < aD.kP && (hn = kO), !(kO < gs[player] || 5 === k6 && kO < k4 || 4 === k6 && kO < bL.fV(k4, 2))) {
							bh.kQ(kN);
							for (var f4 = bO.fZ[0], fi = bO.fi, aB = ay.jg(f4), fO = 0; fO < f4; fO++) {
								var ec = fi[(fO + aB) % f4];
								if (k1[ec]) return b8.kR.kS(player, ec, hn)
							}
							var kT = bN.y.kT;
							for (fO = 0; fO < f4; fO++)
								if (ec = fi[(fO + aB) % f4], kT[ec] && ec !== player) return b8.kR.kS(player, ec, hn)
						}
					}
				}(player, hn, k6, k4)
			}(player, hn, k6, k4) : (!k8 || k7 && (k7 < k8 && !ay.jg(10) || 100 * k8 <= k7 && ay.jg(3) || !ay.jg(8))) && bN.kD.eX(player) || function(player, hn, k6) {
				ao.jA.jc(player, !0) || ao.jA.jh(player, !0) ? ao.jA.jj(player) || (ao.jA.ji() ? kF(player, hn) : ay.kH(aE.kI[k6]) ? kJ(player, hn, ao.jA.jo(player), k6) : 5 === k6 ? kJ(player, hn, ao.jA.jw(), k6) : (ao.jA.jl() && ay.kH(aE
					.kK[k6]) && ao.jA.jn(), kJ(player, hn, 6 === k6 ? ao.jA.k0() : ao.jA.jr(player), k6))) : ao.jE.eX(player)
			}(player, hn, k6))
	}
}

function c5() {
	var kU = new Uint8Array(aD.f1),
		kV = new Uint16Array(aD.f1),
		kW = new Uint16Array(aD.f1),
		kX = new Uint8Array(aD.f1),
		kY = (this.hn = new Uint8Array(aD.f1), new Uint16Array(aD.f1)),
		kZ = new Uint16Array(aD.f1);

	function ko(aB) {
		kU[aB] = 1 + bL.fV(kY[aB] * ay.random(), 10 * ay.value(100))
	}
	this.ka = null, this.kK = [97, 94, 70, 40, 20, 0, 100], this.kb = [500, 450, 400, 300, 80, 50, 100], this.kI = [0, 0, 5, 25, 50, 100, 0], this.kc = [60, 74, 112, 200, 256, 512, 512], this.kd = [1, 2, 3, 4, 6, 8, 1], this.ke = [500, 450, 400, 300,
		80, 50, 100
	], this.kf = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.ka = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kU.fill(0), kV.fill(0), kW.fill(0), kX.fill(0), this.hn.fill(0), kY.fill(0), kZ.fill(0);
		var kg = aD.kP;
		if (9 === aD.kh) this.ki();
		else if (__fx.customLobby.isActive())
			for (aB = aD.kl - 1; 0 <= aB; aB--) this.hn[aB + kg] = __fx.customLobby.gameInfo.difficulty;
		else if (aD.kj)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kl - 1; 0 <= aB; aB--) {
					var hw = aB + kg;
					this.hn[hw] = aD.data.botDifficultyData[hw]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kl - 1; 0 <= aB; aB--) this.hn[hw = aB + kg] = aD.data.botDifficultyTeam[bg.km[bg.f2[hw]]];
				else if (1 === aD.data.botDifficultyType) {
			var kn = this.ka.length;
			for (aB = aD.kl - 1; 0 <= aB; aB--) this.hn[aB + kg] = aB % kn
		} else
			for (kn = aD.data.botDifficultyValue, aB = aD.kl - 1; 0 <= aB; aB--) this.hn[aB + kg] = kn;
		else
			for (var kk = 8 === aD.kh ? 1 : 0, aB = aD.kl - 1; 0 <= aB; aB--) this.hn[aB + kg] = kk;
		for (aB = 0; aB < kg; aB++) this.hn[aB] = 6;
		var f4 = aD.f1;
		for (aB = 0; aB < f4; aB++) this.hn[aB] <= 2 ? (kX[aB] = 5, kY[aB] = kZ[aB] = 1040, 0 === this.hn[aB] ? (kV[aB] = 980, kW[aB] = 980) : 1 === this.hn[aB] ? (kV[aB] = 980, kW[aB] = 920, kY[aB] = kZ[aB] = 1100) : (kV[aB] = 825, kW[aB] =
			750)) : this.hn[aB] <= 4 ? (kX[aB] = 1 + ay.jg(20), 3 === this.hn[aB] ? (kV[aB] = kW[aB] = 500, kY[aB] = kZ[aB] = 1e3) : (kZ[aB] = 250 + ay.jg(1501), kY[aB] = 500 + ay.jg(501), kV[aB] = 300 + ay.jg(201), kW[aB] = 100 + ay.jg(
			201))) : this.hn[aB] <= 5 ? (kY[aB] = 1e3, kZ[aB] = 1e3, kX[aB] = 35 + ay.jg(16), kV[aB] = 300 + ay.jg(201), kW[aB] = 50 + ay.jg(101)) : (kY[aB] = kZ[aB] = 800, kX[aB] = 5, kV[aB] = 10, kW[aB] = 250), ko(aB)
	}, this.ki = function() {
		for (var ei = az.kp, kg = aD.kP, aB = ei - 1; 0 <= aB; aB--) this.hn[aB + kg] = 0;
		for (var fO = 0; fO < 6; fO++) {
			for (aB = ei + az.kq[fO] - 1; ei <= aB; aB--) this.hn[aB + kg] = fO;
			ei += az.kq[fO]
		}
	}, this.kB = function(gc, value) {
		kU[gc] = Math.min(value, kU[gc])
	}, this.eX = function(gc) {
		0 == --kU[gc] && ! function(gc) {
			(function(gc) {
				kY[gc] !== kZ[gc] && (kY[gc] += kY[gc] < kZ[gc] ? 3 : -3);
				kV[gc] !== kW[gc] && (kV[gc] += kV[gc] < kW[gc] ? kX[gc] : -kX[gc], kV[gc] = (Math.abs(kV[gc] - kW[gc]) <= kX[gc] ? kW : kV)[gc]);
				kU[gc] = bL.fV(kY[gc], 10)
			})(gc), ao.jC.k2(gc, bL.fV(kV[gc] * ag.h6[gc], 1e3))
		}(gc)
	}, this.kt = function(gc, gX) {
		kY[gc] = kZ[gc] = gX
	}
}

function j8() {
	var ku = new Uint16Array(aD.f1);

	function l9(player, l7) {
		for (var f4 = bO.fZ[0], fh = bO.fh, lL = -1, lM = aD.f1, aB = 0; aB < f4; aB++) {
			var fK, gc = fh[aB];
			bs.ex(player, gc) && (fK = bM.iX(l7, bM.iw(gc)), -1 === lL || fK < lL) && (lL = fK, lM = gc)
		}
		return lM
	}

	function lB(l8, l7) {
		if (l8 === aD.f1) return 0;
		var gl = ag.gl[l8],
			lK = gl.length;
		if (0 === lK) return 0;
		for (var f4 = Math.min(lK, 10), lM = 0, lL = bM.iX(gl[lM] >> 2, l7), aB = 0; aB < f4; aB++) {
			var hw = ay.jg(lK),
				fK = bM.iX(gl[hw] >> 2, l7);
			fK < lL && (lL = fK, lM = hw)
		}
		return gl[lM] >> 2
	}

	function lG(player, l7, jY, lO) {
		var lP;
		(lO === aD.f1 || (lP = bM.iw(jY), lO = bM.iw(lO), bM.iX(l7, lP) < bM.iX(l7, lO))) && (ku[player] = jY)
	}
	this.dd = function() {
		ku.fill(aD.f1)
	}, this.jK = function() {
		if (bf.kM() % 109 == 9 && !(al.kv < 20) && aD.hy && !(bh.kw() < bL.fV(8 * aD.k9, 10))) {
			var kx = bh.ky();
			if (bg.km[kx]) {
				bh.kz(kx);
				var f4 = bO.fZ[0];
				if (0 !== f4)
					for (var g = bO.fi, l0 = al.l0, kv = al.kv, l1 = ku, hw = ay.jg(f4), aB = 0; aB < kv; aB++) {
						var hW = l0[aB],
							l2 = g[hw];
						bA.gQ.l3(hW, l2) && 512 === l1[hW] && (l1[hW] = l2, hw = (hw + 1) % f4)
					}
			}
		}
	}, this.eX = function(player) {
		var l7, lA, l8, l4 = function(player) {
			var jY = ku[player];
			if (jY !== aD.f1) {
				if (bA.gQ.lN(jY) && ag.gl[jY]) return jY;
				ku[player] = aD.f1
			}
			return aD.f1
		}(player);
		return function(player) {
			for (var lJ = al.l0, lK = al.kv, f4 = Math.min(lK, lK < 17 && 5 === ay.jg(20) ? 1 : 16), gd = ay.jg(lK), fh = bO.fh, gl = ag.gl, gX = 0, aB = 0; aB < f4; aB++) {
				var gc = lJ[(aB + gd) % lK];
				gc !== player && gl[gc].length && (fh[gX++] = gc)
			}
			bO.fZ[0] = gX
		}(player), 0 !== bO.fZ[0] && (0 < (lA = lB(l8 = l9(player, l7 = bM.j1(player)), l7)) && bN.lC.lD(player, bN.lE.lF(lA, l7)) ? (lG(player, l7, l8, l4), !0) : 0 < (l8 = function(player, l7) {
			for (var f4 = bO.fZ[0], fh = bO.fh, l1 = ku, gd = 0, aB = 0; aB < f4; aB++) {
				var gc = fh[aB],
					gc = l1[gc];
				gc !== aD.f1 && bA.gQ.lN(gc) && player !== gc && bs.ex(player, gc) && (fh[gd++] = gc)
			}
			return 0 !== (bO.fZ[0] = gd) ? lB(l9(player, l7), l7) : 0
		}(player, l7)) && bN.lC.lD(player, bN.lE.lF(l8, l7)) ? (lG(player, l7, ac.ew(l8 << 2), l4), !0) : !!(0 < (lA = lB(l4, l7)) && bN.lC.lD(player, bN.lE.lF(lA, l7))))
	}
}

function jF() {
	function lT(player) {
		for (var fT = ag.fT[player], f4 = fT.length, fU = Math.max(bL.fV(f4, 12), 1), f6 = ac.f6, eA = ay.jg(f4), aB = 0; aB < f4; aB += fU)
			for (var et = fT[(aB + eA) % f4], f7 = 3; 0 <= f7; f7--) {
				var f8 = et + f6[f7];
				if (ac.f9(f8)) return {
					ei: f8,
					id: ac.em(f8),
					gc: player
				}
			}
		return null
	}

	function lY(player, la) {
		var hn = bA.gQ.lb(player, aE.ke[aE.hn[player]]);
		ag.gW[player].push(la.ei), ad.eb(player, hn, la.gc), aF.jW(player, !0)
	}
	this.eX = function(player) {
		return !!bS.ej(bS.ek) && !!aD.data.passableMountains && 0 !== ag.fT[player].length && function(player) {
			var lS = lT(player);
			if (null === lS) return !1;
			! function(player) {
				for (var l0 = al.l0, kv = al.kv, f4 = Math.min(kv, 12), gd = ay.jg(kv), fh = bO.fh, fT = ag.fT, gX = 0, aB = 0; aB < f4; aB++) {
					var gc = l0[(aB + gd) % kv];
					gc !== player && fT[gc].length && bs.ex(player, gc) && (fh[gX++] = gc)
				}
				bO.fZ[0] = gX
			}(player);
			var lV = function(el) {
				for (var f4 = bO.fZ[0], fh = bO.fh, aB = 0; aB < f4; aB++) {
					var la = lT(fh[aB]);
					if (null !== la && la.id === el) return la
				}
				return null
			}(lS.id);
			return null !== lV ? (lY(player, lV), !0) : function(player, el) {
				var f4 = ao.j3.lZ;
				if (0 !== f4)
					for (var ei = ao.j3.eP[ay.jg(f4)] << 2, f6 = ac.f6, f7 = ay.jg(4);;) {
						if (ei += f6[f7], ac.f9(ei)) {
							if (ac.em(ei) === el) return lY(player, {
								ei: ei,
								gc: aD.f1
							}), !0;
							break
						}
						if (!ac.ev(ei)) break
					}
				return !1
			}(player, lS.id)
		}(player)
	}
}

function j6() {
	this.eX = function(player) {
		return bN.lC.lD(player, function(player) {
			var f4 = ao.j3.lZ;
			if (0 === f4) return -1;
			for (var lK = Math.min(f4, ao.performance.ld ? f4 : 10), eP = ao.j3.eP, jf = bL.fV(ay.random() * f4, ay.value(100)), e = jf + lK, le = ay.j2(ag.ix[player], ag.iy[player]), lf = ay.j2(ag.iz[player], ag.j0[player]), lM = -1,
					fK = bM.iY(0, 0, bS.fF, bS.fG), aB = jf; aB < e; aB++) {
				var gd = aB % f4,
					lg = bM.fM(le, lf, eP[gd]);
				lg < fK && (fK = lg, lM = gd)
			}
			return -1 !== lM ? function(eq, le, lf) {
				var hJ = bM.fC(eq),
					hL = bM.fE(eq),
					iO = le - hJ,
					iR = lf - hL;
				Math.abs(iO) >= Math.abs(iR) ? (iR = 0, iO = Math.sign(iO)) : (iO = 0, iR = Math.sign(iR));
				iO === iR && (iO = 1);
				for (;;) {
					if (hJ += iO, hL += iR, !bM.fQ(hJ, hL)) break;
					if (eq = bM.fR(hJ, hL), ac.iI(bM.eu(eq))) return eq
				}
				return -1
			}(eP[lM], le, lf) : -1
		}(player))
	}
}

function jH() {
	this.eX = function(player) {
		var li = function(player) {
			for (var ll = bN.ll.ln(), f4 = ll.length, lK = Math.min(f4, 32), hw = ay.jg(f4), aB = 0; aB < lK; aB++) {
				var li = (aB + hw) % f4,
					lk = ll[li],
					iV = lk[0],
					iW = lk[lk.length - 1];
				if (bN.lE.lo(player, iV) && bN.lE.lp(player, iW)) return li;
				if (bN.lE.lo(player, iW) && bN.lE.lp(player, iV)) return 0 <= (li = bN.ll.lq(iW, iV)) ? li : bN.ll.lr() ? -1 : bN.ll.ls(bN.ll.lt(lk))
			}
			return -1
		}(player);
		return -1 !== li && (li = bN.ll.get(li), !bN.lE.lm(player, li)) && (bO.g[0] = li, !0)
	}
}

function j9() {
	this.ld = 0, this.dd = function() {
		this.ld = 0
	}, this.eX = function() {
		if (!this.ld && bf.kM() % 30 == 7 && bA.gQ.lw(90) && (ao.performance.ld = 1)) {
			if (aD.hy) {
				var kx = bh.ky();
				if (bg.km[kx]) {
					bh.kQ(kx);
					var g = bO.fi,
						f4 = bO.fZ[0];
					if (0 !== f4)
						for (var lz = Math.min(100 + 10 * (f4 - 1), 400), aB = 0; aB < f4; aB++) aE.kt(g[aB], lz)
				}
			}
			aE.kt(m0[0], 100)
		}
	}
}

function j4() {
	var m1 = 0,
		m2 = 0,
		m3 = 300,
		m4 = 300,
		m5 = 0;
	this.lZ = 0, this.eP = new Uint32Array(512), this.dd = function() {
		m2 = m1 = 0, this.lZ = 0, m5 = 0
	}, this.eX = function() {
		if (function() {
				var f4 = ao.j3.lZ;
				if (0 === f4) return 1;
				var eP = ao.j3.eP;
				if (bf.kM() % 35 == 6) {
					for (var aB = f4 - 1; 0 <= aB; aB--) ac.ev(eP[aB] << 2) || (f4--, eP[aB] = eP[f4]);
					ao.j3.lZ = f4
				}
				return f4 < eP.length
			}())
			if (m3 <= m1) {
				var m9 = ao.j3.lZ;
				if (m9) {
					if (bf.kM() % 350 != 1) return;
					if (m5 !== m9) return void(m5 = m9);
					if (!bA.gQ.jm(m0[0])) return
				} else if (bf.kM() % 12 != 8) return;
				bA.gQ.mA() || ao.j3.dd()
			} else {
				var aB, i = bS.fF,
					mB = i - 2,
					m9 = mB * (bS.fG - 2),
					mC = m3,
					eP = ao.j3.eP,
					lK = ao.j3.lZ,
					mD = eP.length,
					gd = Math.min(m2 + mC * ((1 + 19 * ao.performance.ld) * m4), m9);
				for (aB = m2; aB < gd; aB += mC) {
					var ei = 4 * (aB % mB + (bL.fV(aB, mB) + 1) * i + 1);
					if (ac.ev(ei) && (eP[lK] = ei >> 2, ++lK === mD)) {
						aB += mC;
						break
					}
				}(m2 = aB) >= m9 && (m2 = ++m1), ao.j3.lZ = lK
			}
	}
}

function jJ() {
	this.eX = function() {
		if (bf.kM() % 51 == 45)
			for (var f4 = bN.y.mF, mG = bN.y.mG, mH = bN.y.mH, mI = bN.y.mI, mJ = bN.y.mJ, kf = aE.kf, hn = aE.hn, aB = 0; aB < f4; aB++) {
				var lk, player, mN, mK = mG[aB];
				mK % 64 == 6 || (lk = mH[aB], (player = bN.lE.mL(lk[lk.length - 1])) < 0) || !bA.gQ.l3(player, mJ[aB] >> 3) || ay.jg(1e3) >= kf[hn[player]] || ! function(mR, lk) {
					for (var f4 = lk.length - 1, mS = bN.y.mT[mR], fK = 0, aB = mS + 1; aB < f4; aB++) fK += bM.iU(lk[aB], lk[aB + 1]);
					return (fK += bM.iU(bM.ip(bN.y.mU[mR]), lk[mS + 1])) <= 60
				}(aB, lk) || (mN = mI[aB], 64 <= mK && bN.mO.mP(player, mN)) || function(player, lk, mN, mR, mK) {
					bN.mV.mW(player) && bA.gQ.mX(player, aE.kb[aE.hn[player]], 32, 0) && (bN.y.mG[mR] = 64 + mK % 64, bN.mO.eb(mN, bN.y.mY), bO.g[0] = bN.ll.lt(lk), bO.fg[1] = 6, bA.gQ.mZ(player), bN.y.ma(player))
				}(player, lk, mN, aB, mK)
			}
	}
}

function mb() {
	aN.eX(), af.eX(), aW.mc(), b0.y.eX()
}

function md() {
	b1.eX(), aG.eX(), an.eX(), ae.eX(), b4.eX(), aF.eX(), ao.eX(), bN.y.eX(), al.me(), aV.eX(), az.eX(), bV.eX(), af.eX(), af.mf(), aW.eX(), bP.eX(), aU.eX(), aP.eX(), aN.eX(), b5.eX(), aR.eX(), aw.eX(), bd.eX(), bh.eX(), b0.y.eX(), b0.mg.eX(), t
	.eX(), bU.eL.eX(), b9.eX(), bf.eX()
}

function mh() {
	aH.eX(), aX.eX(), aQ.eX(), av.eX(), bC.eX(), ax.mi()
}

function mj() {
	aV.mk(!1), aP.mk(), aW.mk(!1), aU.mk(), aR.mk(), aw.mk(), af.mk(!1), bh.ml()
}

function mm() {
	af.mk(!1) && (bf.dk = !0), b0.y.eX()
}

function c6() {
	var mn, mo, mp;

	function mr(mt) {
		for (var aB = mn - 1; 0 <= aB; aB--) 0 === mp[mo[aB]] && ag.gs[mo[aB]] >= mt && g8(mo[aB])
	}

	function mq(player) {
		var eT;
		64 === mp[player] ? mp[player] = 6 : (eT = ag.gs[player], mp[player] = eT < 1e3 ? 3 : eT < 1e4 ? 2 : eT < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mn = 0, mo = new Uint16Array(aD.f1), mp = new Uint8Array(aD.f1)
	}, this.eX = function() {
		for (var aB = mn - 1; 0 <= aB; aB--) 64 === mp[mo[aB]] ? mq(mo[aB]) : 0 == mp[mo[aB]]-- && (mq(mo[aB]), g8(mo[aB]));
		16e4 <= ag.gs[m0[0]] && (mr(16e4), 3e5 <= ag.gs[m0[0]]) && mr(3e5), bA.gQ.lN(aD.eo) && (bd.mu[7] = Math.max(ag.gs[aD.eo], bd.mu[7]))
	}, this.gS = function(player) {
		for (var fN, aB = mn - 1; 0 <= aB; aB--)
			if (player === mo[aB]) {
				for (mn--, fN = aB; fN < mn; fN++) mo[fN] = mo[fN + 1];
				return
			}
	}, this.jW = function(player, mv) {
		for (var aB = mn - 1; 0 <= aB; aB--)
			if (player === mo[aB]) return;
		mo[mn++] = player, mp[player] = mv ? 2 : 64
	}
}

function c7() {
	var size, kD;
	this.dd = function() {
		size = aD.kl, kD = new Uint16Array(aD.f1);
		for (var kP = aD.kP, aB = aD.kl - 1; 0 <= aB; aB--) kD[aB] = kP + aB
	}, this.eX = function() {
		ao.jI.eX();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.my[kD[aB]]) {
				fN = void 0;
				var fN = aB;
				size--, kD[fN] = kD[size]
			} else aE.eX(kD[aB])
	}, this.mx = function(gc) {
		kD[size++] = gc
	}
}

function c8() {
	var n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, nA, nB, nC, nD = !1,
		nE = !1;

	function nF(eI) {
		nB = bf.eS, n2 = n3 = n1 = 0, n4 = (nC = 33) / eI, n0 = 1 / (eI / nC / 4), n5 = (h.i / 2 + ih) / iF, n6 = (h.j / 2 + ii) / iF, n7 = iF
	}

	function nM(aB) {
		var nO; - 1 !== aB && (aB = bM.ip(bN.y.mU[aB]), nO = bM.fC(aB) - 15, aB = bM.fE(aB) - 15, aH.nI(nO, aB, 29 + nO, 29 + aB))
	}

	function nZ(eF) {
		Math.abs(Math.log(nA / n7)) < .125 && (nA = eF * n7)
	}

	function nY(nO, nP, nb, nc) {
		n8 = (nO + nb + 1) / 2, n9 = (nP + nc + 1) / 2;
		nb = h.i / (nb - nO + 1), nO = h.j / (nc - nP + 1);
		nA = .9 * (nb < nO ? nb : nO)
	}
	this.nG = function() {
		return nD
	}, this.nH = function() {
		nF(1), this.nI(0, 0, bS.fF - 1, bS.fG - 1), aD.hS || aD.hD || this.nJ(aD.eo, 3e3, !0, .3)
	}, this.nK = function(player, nL) {
		nM(bN.lE.nN(player, nL))
	}, this.nJ = function(player, eI, nQ, zoom) {
		aD.nR || nD && !nQ && nE || (0 === ag.gs[player] ? nM(bN.lE.nS(player)) : (aS.nT = !1, nE = nQ, nF(eI), function(player) {
			n8 = (ag.ix[player] + ag.iy[player] + 1) / 2, n9 = (ag.iz[player] + ag.j0[player] + 1) / 2
		}(player), function(zoom, player) {
			var iO = ag.iy[player] - ag.ix[player] + 1,
				player = ag.j0[player] - ag.iz[player] + 1,
				fN = h.i / iO,
				fO = h.j / player,
				fN = (nA = fN < fO ? fN : fO, 0 !== zoom ? zoom : iO < 20 && player < 20 ? .5 : .9);
			nA *= fN, nZ(7 / 8)
		}(zoom, player), nD = !0, ar.nW()))
	}, this.nX = function(eI) {
		aD.hD || aD.nR || (aS.nT = !1, nE = !1, nF(eI), nY(0, 0, bS.fF - 1, bS.fG - 1), nZ(7 / 8), nD = !0, ar.nW())
	}, this.nI = function(nO, nP, nb, nc) {
		nD = !1, nY(nO, nP, nb, nc), iF = nA, aS.nd(n8, h.i / 2), aS.ne(n9, h.j / 2), ba.nf(), bf.dk = !0
	}, this.ng = function() {
		return !(nD && nE || (nD = !1))
	}, this.eX = function() {
		var nj, nk, f7, nn;
		nD && (n1 < .5 ? n3 < n4 && (n3 += n4 * n0, n2 = n1) : 1 - n2 < n1 && (n3 = (n3 -= n4 * n0) < n4 * n0 ? n4 * n0 : n3), nB = nB >= bf.eS ? bf.eS - 1 : nB, f7 = bf.eS - nB, n1 = 1e3 < f7 || 1 < (n1 += n3 * f7 / nC) ? 1 : n1, nB = bf.eS,
			f7 = iF, nj = ih, nk = ii, f7 = (iF = n7 * Math.pow(nA / n7, n1)) / f7, nn = 1 - (n7 * Math.pow(nA / n7, 1 - n1) - n7) / (nA - n7), aS.nd(n5 + nn * (n8 - n5), h.i / 2), aS.ne(n6 + nn * (n9 - n6), h.j / 2), af.zoom(f7, (nj * f7 -
				ih) / (1 - f7), (nk * f7 - ii) / (1 - f7)), ba.nf(), 1 <= n1 && (nD = !1, bb.no = !0), bf.dk = !0)
	}
}

function c0() {
	var ec = bA.color;
	this.np = ec.nq(0, 0, 0), this.nr = ec.ns(0, 0, 0, .7), this.nt = ec.ns(0, 0, 0, .5), this.nu = ec.ns(0, 0, 0, .85), this.nv = ec.ns(0, 0, 0, .75), this.nw = ec.ns(0, 0, 0, .6), this.nx = ec.ns(0, 0, 0, .35), this.ny = ec.nq(255, 255, 255), this
		.nz = ec.ns(255, 255, 255, .3), this.o0 = ec.ns(255, 255, 255, .6), this.o1 = ec.ns(255, 255, 255, .4), this.o2 = ec.ns(255, 255, 255, .25), this.o3 = ec.ns(255, 255, 255, .85), this.o4 = ec.ns(255, 255, 255, .75), this.o5 = ec.ns(255, 255,
			255, .15), this.o6 = ec.ns(255, 255, 255, .11), this.o7 = ec.nq(128, 128, 128), this.o8 = ec.ns(64, 64, 64, .75), this.o9 = ec.ns(88, 88, 88, .83), this.oA = ec.ns(60, 60, 60, .85), this.oB = ec.ns(80, 60, 60, .85), this.oC = ec.nq(170,
			170, 170), this.oD = ec.nq(200, 235, 245), this.oE = ec.nq(30, 255, 30), this.oF = ec.nq(0, 200, 0), this.oG = ec.nq(128, 255, 128), this.oH = ec.ns(10, 65, 10, .75), this.oI = ec.ns(0, 255, 0, .6), this.oJ = ec.ns(0, 255, 0, .5), this
		.oK = ec.ns(0, 200, 0, .5), this.oL = ec.ns(0, 100, 0, .75), this.oM = ec.ns(0, 60, 0, .8), this.oN = ec.ns(0, 255, 0, .3), this.oO = ec.ns(0, 180, 0, .6), this.oP = ec.ns(0, 120, 0, .85), this.oQ = ec.nq(0, 120, 0), this.oR = ec.ns(0, 70, 0,
			.85), this.oS = ec.nq(190, 230, 190), this.oT = ec.nq(0, 255, 0), this.oU = ec.nq(255, 120, 120), this.oV = ec.nq(255, 160, 160), this.oW = ec.nq(255, 70, 70), this.oX = ec.nq(230, 0, 0), this.oY = ec.ns(220, 0, 0, .6), this.oZ = ec.ns(
			255, 100, 100, .8), this.oa = ec.ns(100, 0, 0, .85), this.ob = ec.ns(60, 0, 0, .85), this.oc = ec.ns(200, 0, 0, .6), this.od = ec.ns(120, 0, 0, .85), this.oe = ec.nq(255, 70, 10), this.og = ec.nq(230, 190, 190), this.oh = ec.nq(255, 0,
		0), this.oi = ec.nq(255, 0, 255), this.oj = ec.ns(60, 0, 60, .85), this.ok = ec.ns(0, 60, 60, .85), this.ol = ec.ns(10, 60, 60, .9), this.om = ec.ns(0, 96, 96, .75), this.on = ec.nq(0, 255, 255), this.oo = ec.nq(160, 160, 255), this.op = ec
		.ns(0, 40, 90, .75), this.oq = ec.ns(0, 0, 255, .6), this.or = ec.nq(200, 200, 255), this.os = ec.ns(50, 50, 255, .83), this.ot = ec.ns(20, 90, 150, .75), this.ou = ec.nq(255, 120, 100), this.ov = ec.ns(255, 255, 0, .5), this.ow = ec.ns(255,
			255, 150, .2), this.ox = ec.nq(255, 255, 0), this.oy = ec.nq(255, 255, 200), this.oz = ec.ns(200, 200, 0, .6), this.p0 = ec.ns(140, 120, 0, .75), this.p1 = ec.ns(180, 160, 40, .75), this.p2 = ec.ns(70, 50, 20, .85), this.p3 = ec.ns(30,
			30, 0, .85), this.p4 = ec.ns(60, 60, 0, .85), this.p5 = ec.nq(255, 255, 100), this.p6 = ec.nq(255, 255, 140), this.p7 = ec.ns(255, 140, 0, .75), this.p8 = ec.ns(70, 40, 0, .85), this.p9 = ec.nq(255, 150, 0), this.pA = ec.ns(255, 200, 80,
			.85), this.pB = ec.ns(0, 0, 0, 0), this.pC = ec.ns(255, 255, 255, 0), this.pD = ec.ns(254, 254, 254, 0)
}

function cy() {
	this.hU = new pE, this.gQ = new pF, this.pG = new pH, this.pI = new pJ, this.kR = new pK
}

function pE() {
	this.hV = function(eq) {
		aD.kj ? b8.pG.hV(aD.eo, eq) : b0.pL.pM(eq)
	}, this.hb = function(ig, jY) {
		aD.kj ? b8.pG.hb(aD.eo, ig, jY) : b0.pL.pN(ig, jY)
	}, this.pO = function(ig, pP) {
		aD.kj ? b8.pG.pQ(aD.eo, ig, pP) : b0.pL.pR(ig, pP)
	}, this.hg = function(ig, eq) {
		eq = (eq << 3) + bO.fg[6];
		aD.kj ? b8.pG.hg(aD.eo, ig, eq) : bN.mV.mW(aD.eo) && b0.pL.pT(ig, eq)
	}, this.hj = function(ig) {
		849 === ig && (ig = 850);
		var nL = bO.fg[3];
		aD.kj ? b8.pG.hj(aD.eo, ig, nL) : bN.hh.pU(aD.eo, nL) && b0.pL.pV(ig, nL)
	}, this.pW = function(nL) {
		aD.kj ? b8.pG.pW(aD.eo, nL) : b0.pL.pV(849, nL)
	}, this.pX = function(jY) {
		aD.kj ? b8.pG.pX(aD.eo, jY) : b0.pL.pY(jY)
	}, this.pZ = function(pa) {
		aD.kj ? b8.pG.pb(aD.eo, pa) : b0.pL.pc(pa)
	}, this.hs = function(pd) {
		aD.kj ? b8.pG.hs(aD.eo, pd) : b0.pL.pe(pd)
	}, this.pf = function() {
		aD.kj ? b8.pG.pf(aD.eo) : b0.pL.pg()
	}, this.hp = function() {
		aD.kj ? b8.pG.hp(aD.eo) : b0.pL.pY(513)
	}, this.hX = function(ig, eq, jY) {
		aD.kj ? b8.pG.hX(aD.eo, ig, eq, jY) : b0.pL.ph(ig, eq, jY)
	}
}

function pK() {
	this.kS = function(player, pP, hn) {
		bA.gQ.pi(player, hn, pP) && (ae.pO(player, pP), !bA.gQ.jm(pP)) && ao.jC.k1[pP] && ao.jC.k1[pP]--
	}, this.pj = function(player, pP, hn) {
		bA.gQ.pk(hn, pP) ? an.eb(pP, bO.fb[0]) && (bq.pl(player, pP, bO.fb[0], 1), bA.gQ.gT(pP, bO.fb[0]), bd.pm(player, pP), af.pn(pP, bO.fb[0])) : bd.gU(player, hn, 12)
	}
}

function pF() {
	this.po = function(pa, player) {
		aN.pZ(aD.eo, player, pa), b0.pL.pp(pa, player)
	}, this.pq = function(player) {
		aN.pr(player, 0), b0.pL.ps(player)
	}, this.pt = function(pu, player) {
		aN.pv(pu, player), b0.pL.pw(pu, player)
	}, this.px = function() {
		aD.kj || aD.hD || b0.py.px()
	}
}

function pJ() {
	this.eX = function(aC) {
		var id, fn, ng;
		for (bH.dd(aC), bH.eB += 2, ng = 8 * bH.size; bH.eB + 8 <= ng;) id = bH.pz(4), fn = bH.pz(9), 0 === id ? this.q0(id, fn, bH.pz(22)) : 1 === id ? this.q0(id, fn, bH.pz(10), bH.pz(10)) : 2 === id ? this.q0(id, fn, bH.pz(10), bH.pz(9)) :
			3 === id ? this.q0(id, fn, bH.pz(10), bH.pz(27)) : 4 === id ? this.q0(id, fn, bH.pz(10), bH.pz(16)) : 5 === id || 6 === id ? this.q0(id, fn, bH.pz(10)) : 7 === id ? this.q0(id, fn, bH.pz(1)) : 10 === id ? this.q0(id, fn, bH.pz(20), bH
				.pz(22)) : this.q0(id, fn)
	}, this.q1 = [], this.q2 = function() {
		for (var q4 = 0, q5 = 0, q6 = 0, q7 = 0, q8 = 0, q9 = 0, aB = 0; aB < 512; aB++) q4 += ag.my[aB], q5 += ag.gs[aB], q6 += ag.h6[aB], q7 += bN.y.kT[aB];
		q8 += bN.y.mF, q9 += al.kv, this.q1.push(q6 % 1073741824 * 4 + (q4 + q5 + q7 + q8 + q9) % 4)
	}, this.q0 = function(id, fn, fp, fr) {
		0 === id ? b8.pG.hV(fn, fp) : 1 === id ? b8.pG.hb(fn, fp, fr) : 2 === id ? b8.pG.pQ(fn, fp, fr) : 3 === id ? b8.pG.hg(fn, fp, fr) : 4 === id ? b8.pG.hj(fn, fp, fr) : 5 === id ? b8.pG.pX(fn, fp) : 6 === id ? b8.pG.pb(fn, fp) : 7 === id ?
			b8.pG.hs(fn, fp) : 8 === id ? b8.pG.pf(fn) : 9 === id ? b8.pG.qA(fn) : 10 === id && b8.pG.hX(fn, fp >> 10, fr, fp % 1024)
	}
}

function pH() {
	this.hV = function(player, eq) {
		bA.gQ.hF(0) && bA.gQ.hG(player) && bM.il(eq) && (b9.qB.qC(0, player, eq), aD.qD.eb(player, eq))
	}, this.hb = function(player, ig, jY) {
		bA.gQ.hF(1) && bA.gQ.hG(player) && bA.gQ.qE(player, jY) && bA.gQ.mX(player, ig, 12, 0) && bA.gQ.qF(player, jY) && ((jY = ad.jk(player, bO.f0[0])) || ad.k3(player)) && (ag.qG[player]++, b9.qB.qC(1, player, ig, bO.f0[0]), ao.jA.jO(player,
			jY)) && (bA.gQ.mZ(player), bd.qH(player, ig), ao.jA.jU(player))
	}, this.pQ = function(player, ig, pP) {
		bA.gQ.hF(1) && bA.gQ.hG(player) && aD.hy && bA.gQ.qE(player, pP) && bA.gQ.qI(player, pP) && bA.gQ.pi(player, bA.gQ.ie(player, ig), pP) && an.eb(pP, bO.fb[0]) && (b9.qB.qC(2, player, ig, pP), ae.pO(player, pP))
	}, this.hg = function(player, ig, pS) {
		bO.fg[1] = 7 & pS;
		var eq = pS >> 3;
		bA.gQ.hF(1) && bA.gQ.hG(player) && bM.il(eq) && bN.mV.mW(player) && bN.mV.qJ(eq) && bA.gQ.mX(player, ig, 32, 0) && bN.lC.qK(player, eq, 1) && (bd.qL(player), b9.qB.qC(3, player, ig, pS), bA.gQ.mZ(player), bl.qM.hg(player), bN.y.ma(
			player))
	}, this.hj = function(player, ig, nL) {
		849 === ig ? this.pW(player, nL) : bA.gQ.hF(1) && bA.gQ.hG(player) && bA.gQ.mX(player, ig, 32, 0) && bN.hh.qN(player, nL) && (bd.qL(player), b9.qB.qC(4, player, ig, nL), bA.gQ.mZ(player), bl.qM.hj(player), bN.y.ma(player))
	}, this.pW = function(player, nL) {
		bA.gQ.hF(1) && bA.gQ.hG(player) && bN.qO.eX(player, nL) && b9.qB.qC(4, player, 849, nL)
	}, this.pX = function(player, jY) {
		513 === jY ? this.hp(player) : bA.gQ.hF(1) && bA.gQ.hG(player) && (jY = Math.min(jY, aD.f1), ad.jk(player, jY)) && (b9.qB.qC(5, player, jY), ad.qP(player, jY))
	}, this.pb = function(player, pa) {
		(bA.gQ.hF(1) || bA.gQ.hF(2)) && bA.gQ.hG(player) && (pa = bL.iC(pa, 0, 1023), b9.qB.qC(6, player, pa), af.qQ(player, 0, pa))
	}, this.hs = function(player, pd) {
		aw.hr(player) && (b9.qB.qC(7, player, pd), aw.qR(player, pd))
	}, this.pf = function(player) {
		(bA.gQ.hF(0) || bA.gQ.hF(1)) && bA.gQ.hG(player) && aM.qS(player) && (b9.qB.qC(8, player), bQ.pf(player))
	}, this.qA = function(player) {
		b9.qB.qC(9, player), bQ.qA(player)
	}, this.hp = function(player) {
		aw.ht(player) && (b9.qB.qC(5, player, 513), aw.hp(player))
	}, this.hX = function(player, ig, eq, jY) {
		bA.gQ.hF(1) && bA.gQ.hG(player) && bA.gQ.qE(player, jY) && bA.gQ.qF(player, jY) && bM.il(eq) && am.ef.ey(player, eq) && (ad.jk(player, bO.f0[0]) || ad.k3(player)) && (b9.qB.qC(10, player, (ig << 10) + bO.f0[0], eq), jY = bA.gQ.lb(player,
			ig), ag.gW[player].push(bO.f5[0]), ad.eb(player, jY, bO.f0[0]), aF.jW(player, !0), bd.qT(player))
	}
}

function qU() {
	var qW;
	this.qV = [], this.qW = document.createElement("div"), this.qX = function(qY, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qY, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qW.appendChild(
			title), title
	}, this.qZ = function(qY, marginBottom) {
		var qa = document.createElement("p");
		return qa.textContent = qY, qa.style.fontSize = "0.75em", qa.style.lineHeight = "1.2em", qa.style.marginBottom = marginBottom || "0", this.qW.appendChild(qa), qa
	}, this.qb = function(qY) {
		var qc = document.createElement("p");
		return qc.textContent = qY, qc.style.fontSize = "1em", qc.style.marginBottom = "0", qc.style.whiteSpace = "pre-wrap", qc.style.overflowWrap = "break-word", this.qW.appendChild(qc), qc
	}, this.qd = function(qe, fontSize) {
		var qW = document.createElement("div");
		return qW.innerHTML = qe, qW.style.fontSize = fontSize || "1em", qW.style.lineHeight = "1.2em", this.qW.appendChild(qW), qW
	}, this.qf = function(qg) {
		for (var qh = qg.qh, f4 = qh.length, aB = 0; aB < f4; aB++) this.qW.appendChild(qh[aB])
	}, this.qi = function(qj) {
		return this.qV.push(qj), this.qW.appendChild(qj.e), qj
	}, this.resize = function() {
		for (var f4 = this.qV.length, aB = 0; aB < f4; aB++) this.qV[aB].resize && this.qV[aB].resize()
	}, (qW = this.qW).style.position = "absolute", qW.style.height = "auto", qW.style.padding = "0.5em"
}

function qk(ql, qm) {
	var qW = document.createElement("div");

	function qu() {
		var aB, qv, j, gd, f7, qq = h.k * qW.offsetWidth,
			qw = new Float64Array(function(qq) {
				var i = .25 * bA.qr.qs(.6) * h.iE;
				return Math.max(Math.floor(qq / i), 1)
			}(qq)),
			qx = bc.qx,
			qy = (qq - (qw.length + 1) * bc.gap) / (qw.length * h.k);
		for (qw.fill(qx), aB = 0; aB < qm.length; aB++) qv = (f7 = qm[aB].qW).style, j = bA.qz.min(qw), gd = qw.indexOf(j), qv.top = bA.qr.r0(j), qv.left = bA.qr.r0(qx + gd * (qy + qx)), qv.width = bA.qr.r0(qy), bA.qr.r1(f7, 5), qw[gd] += f7
			.offsetHeight + 3 * qx;
		qW.style.height = bA.qr.r0(bA.qz.max(qw) - 2 * qx)
	}
	this.qn = qW, this.qo = qm, this.resize = function() {
		var aB;
		for (aB = 0; aB < qm.length; aB++) qm[aB].resize();
		qu(), qu()
	}, qW.style.width = "100%", qW.style.maxWidth = "100%", ql.style.lineHeight = "1.5em", ql.style.overflowX = "hidden", ql.style.overflowY = "auto";
	for (var aB = 0; aB < qm.length; aB++) qW.appendChild(qm[aB].qW);
	ql.appendChild(qW)
}

function w(r2, r3, r4, r5, r6) {
	var self, r7 = document.createElement("button");

	function rE() {
		var rK;
		bJ.rJ() || (rK = bA.color.rL(r4), !1 !== r5 && 0 < rK[0] && rK[0] < 255 && rK[0] === rK[1] && rK[0] === rK[2]) || (128 < rK[0] && 128 < rK[1] && 128 < rK[2] ? r7.style.backgroundColor = bA.color.rM(r4, -50) : r7.style.backgroundColor = bA
			.color.rM(r4, rK[3] && rK[3] < 120 ? 150 : 50))
	}

	function rD() {
		if (r5) {
			var rK = bA.color.rL(r4);
			if (rK[0] === rK[1] && rK[0] === rK[2]) return
		}
		r3 && ((rK = r3(this)) ? 2 === rK && rE() : rO(this))
	}

	function rG() {
		this.style.backgroundColor = r4
	}

	function rF() {
		rO(this)
	}

	function rO(f7) {
		f7.style.backgroundColor = r4, f7.blur()
	}
	this.button = r7, this.r8 = r3, this.r9 = r4, this.rC = function(rH) {
		rH = 1.1 - Math.min(.01 * r2.length, .6) + .2 * rH;
		r7.style.fontSize = rH.toFixed(1) + "em"
	}, this.rB = function(ec) {
		ec ? 1 === ec ? ec = bB.oA : 2 === ec && (r5 = 1, ec = bB.oA) : (r5 = 0, ec = bB.nu), this.r9 = r4 = ec, r7.style.backgroundColor = ec
	}, self = this, r7.innerHTML = r2, r7.style.color = r6 ? bB.ox : bB.ny, r7.style.userSelect = "none", r7.style.outline = "none", r7.style.overflowWrap = "break-word", self.rB(r4), r7.style.border = "none", r7.style.font = "inherit", self.rC(
		0), r7.style.padding = "0em 0.3em", r7.onclick = rD, r7.addEventListener("mouseover", rE), r7.addEventListener("mouseout", rF), r7.addEventListener("focus", rE), r7.addEventListener("blur", rG)
}

function rP(rQ, ql) {
	var qW;
	this.resize = function() {
		for (var aB = 0; aB < rQ.length; aB++) bA.qr.r1(rQ[aB].button);
		qW.style.gap = qW.style.padding = bA.qr.r0(bc.qx)
	}, (qW = document.createElement("div")).style.display = "grid", qW.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qW.style.overflowY = "auto", qW.style.gridAutoRows = "5.3em", qW.style.maxHeight = "100%";
	for (var aB = 0; aB < rQ.length; aB++) rQ[aB].rC(1), qW.appendChild(rQ[aB].button);
	ql.appendChild(qW)
}

function rS(rT, rU, rV) {
	this.fB = 0, this.fD = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qr.qs(rV || .5) * rT[1] * h.iE, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rT[0] / rT[1]), h.i - 2 * bc.gap), this.j = rT[1] * this.i / rT[0], this.fB = bc.gap + rU[0] * (h.i - this.i - 2 * bc.gap), this.fD = bc
			.gap + rU[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rW = function() {
		return this.fB + .5 * this.i
	}
}

function rX(rY, rZ) {
	var ri, self, ra = document.createElement("div"),
		rb = document.createElement("div"),
		rc = document.createElement("div"),
		rd = null,
		rj = (this.re = new rf({
			value: "",
			eB: -1
		}, 0, rg, function(e) {
			e.target.value = bA.rq.rr(e.target.value), rd.rp.textContent = 127 - e.target.value.length
		}), 0),
		rk = 1,
		rl = 0,
		rm = 1048575;

	function rg() {
		rY(), rd.rp.textContent = 127
	}

	function s1(s0, qj) {
		qj && (qj.s6 = 1, s0.appendChild(bn.s7.transform(qj)))
	}

	function s4(bu) {
		rk ? ra.scrollTop = ra.scrollHeight : bu && (ra.scrollTop = rl)
	}
	this.rs = function(rt) {
			rm = 1048575, rb.textContent = "", rt || this.ml()
		}, this.ml = function() {
			var ru = bn.y.rv[0],
				ru = bn.y.rx[ru],
				ry = ru.ry,
				f4 = ry.length,
				jf = 1048575 === rm ? 0 : f4 - (ru.rz - rm + 1048575) % 1048575;
			if (rm = ru.rz, !(f4 <= (jf = Math.max(jf, 0)))) {
				for (var s0 = document.createDocumentFragment(), aB = jf; aB < f4; aB++) s1(s0, bn.lE.s2(ry[aB], bn.lE.s3(ry[aB])));
				rb.appendChild(s0), s4()
			}
		}, this.s5 = function(r) {
			var s0 = document.createDocumentFragment();
			s1(s0, r), rb.appendChild(s0), s4()
		}, this.show = function(ql) {
			ql.appendChild(ra), ql.appendChild(rc), this.resize(ql)
		}, this.s8 = function(ql) {
			t.removeChild(ql, ra), t.removeChild(ql, rc)
		}, this.resize = function(ql) {
			rj = ql ? ql.offsetHeight : rj;
			var ql = bA.qr.sA(.04, .75),
				sB = Math.max(ql, rj - ql),
				sC = h.i / h.k,
				sD = .7 * sC,
				sE = bA.qr.r0(rj - ql - sB),
				sB = (rc.style.height = bA.qr.r0(ql), ra.style.height = bA.qr.r0(sB), h.j > h.i || a0.a1.iD() ? (rc.style.top = sE, ra.style.top = bA.qr.r0(rj - sB), bA.qr.r1(ra, 8)) : (ra.style.top = sE, rc.style.top = bA.qr.r0(rj - ql), bA.qr.r1(
						ra, 2)), this.re.e.style.width = bA.qr.r0(sD), this.re.e.style.fontSize = ri.button.style.fontSize = bA.qr.r0(.5 * ql), bA.qr.r1(this.re.e, 6), ri.button.style.left = bA.qr.r0(sD), ri.button.style.width = bA.qr.r0(sC - sD),
					.385 * ql);
			a0.a1.iD() && (sB *= .8 - .12 * (h.i > h.j)), rb.style.marginLeft = rb.style.marginRight = bA.qr.r0(.5 * sB), rb.style.fontSize = bA.qr.r0(sB), s4(1)
		}, (self = this).re.e.rn = 127, ra.style.position = "absolute", ra.style.left = "0", ra.style.width = "100%", ra.style.overflowX = "hidden", ra.style.overflowY = "auto", ra.style.font = "inherit", ra.style.backgroundColor = bB.nw, ra
		.addEventListener("scroll", function() {
			rl = ra.scrollTop, rk = rl < ra.scrollHeight - ra.clientHeight - 2 ? 0 : 1
		}), rb.style.font = "inherit", rc.style.position = "absolute", rc.style.left = "0", rc.style.width = "100%", self.re.e.setAttribute("placeholder", L(13)), self.re.e.style.position = "absolute", self.re.e.style.top = "0", self.re.e.style
		.left = "0", self.re.e.style.height = "100%", self.re.e.style.backgroundColor = bB.nt, self.re.e.style.textAlign = "center", (ri = new w(L(14), rg)).button.top = "0", ri.button.style.position = "absolute", ri.button.style.height = "100%", ri
		.rB(bB.pC), rd = new ro("127", ri.button, 1, 1), ra.appendChild(rb), rc.appendChild(self.re.e), rc.appendChild(ri.button)
}

function sG(sH, r2, sI) {
	function click() {
		var value = 1 - sH.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + r2, void 0 !== sH.eB ? bj.sJ.sK(sH.eB, value) : sH.value = value, sI && sI(value)
	}
	var e;
	r2 = r2 || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sH.value ? "🟩 " : "⬜ ") + r2, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sL(ql, qe) {
	var qW = document.createElement("div");
	this.qn = qW, this.resize = function() {
		qW.style.padding = bA.qr.r0(bc.qx), qW.style.lineHeight = bA.qr.r0(bA.qr.sA(.035))
	}, ql.style.overflowX = "hidden", ql.style.overflowY = "auto", qW.innerHTML = qe, ql.appendChild(qW)
}

function sM(sN) {
	var qW = document.createElement("div");
	this.e = qW, this.sO = sN, this.resize = function() {
		for (var f4 = sN.length, aB = 1; aB < f4; aB++) bA.qr.r1(sN[aB], 4)
	};
	var aB, f4 = sN.length;
	for (qW.style.width = "100%", qW.style.height = "2.7em", qW.style.marginTop = "0.6em", qW.style.border = "inherit", aB = 0; aB < f4; aB++) sN[aB].style.verticalAlign = "top", sN[aB].style.width = (100 / f4).toFixed(2) + "%", sN[aB].style.height =
		"100%", sN[aB].style.fontSize = "0.75em", qW.appendChild(sN[aB])
}

function sP(sQ, r4, sR) {
	this.qW = document.createElement("div"), this.rQ = sQ;
	var sS = 0;
	this.resize = function(ql, sU) {
		var f4 = sQ.length;
		if (!sR)
			for (var aB = 1; aB < f4; aB++) bA.qr.r1(sQ[aB].button, 4);
		for (var sV = 0, aB = 0; aB < f4; aB++) sV += sQ[aB].button.offsetWidth;
		if (ql && (sS = ql.offsetWidth), sU && sV < sS)
			for (aB = 0; aB < f4; aB++) sQ[aB].button.style.width = (100 * sQ[aB].button.offsetWidth / sV).toFixed(2) + "%";
		else
			for (aB = 0; aB < f4; aB++) sQ[aB].button.style.width = "auto";
		sU || this.resize(ql, 1)
	};
	var sT = this;
	sT.qW.style.height = sT.qW.style.maxHeight = "100%";
	for (var aB = 0; aB < sQ.length; aB++) sQ[aB].rB(r4), sQ[aB].button.style.height = "100%", sQ[aB].button.style.padding = "0.0em 0.9em", sT.qW.appendChild(sQ[aB].button)
}

function sW() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qr.r1(this.e, 8, bB.o7)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sX() {
	var sc, sd, sY = document.createElement("div"),
		sZ = document.createElement("div"),
		sa = 0,
		sb = 0;
	this.show = function(fB, fD, qY, se, sf, ec) {
			if (sa) {
				if (!se) return;
				this.s8()
			}
			fB === fD && -1 === fB ? (fB = sc, fD = sd) : (sc = fB, sd = fD);
			var sg = Math.floor(bA.qr.sA(.018)),
				sf = (fB = Math.max(sg + 2, fB), sf || (sb = se), sa = 1, h.i / h.k),
				se = (sY.style.whiteSpace = "pre", sY.textContent = qY, bA.qr.r1(sY, 5), sY.style.font = bA.qr.si(0, bA.qr.sA(.015)), sY.style.padding = "0.3em 0.6em", sY.style.left = fB + "px", sY.style.top = "0px", document.body.appendChild(sY),
					fB + sY.offsetWidth - sf),
				qY = (0 < se && (fB -= se, fB = Math.max(sg + 1, fB), sY.style.left = fB + "px", fB < sg + 2) && (sY.style.whiteSpace = "pre-wrap"), sY.offsetHeight);
			sY.style.top = fD - qY + sb * bc.sk + "px", fB -= sg, sZ.style.backgroundColor = bA.color.nq(ec >> 12 << 2, (ec >> 6 & 63) << 2, (63 & ec) << 2), sZ.style.left = fB + "px", sZ.style.top = sY.style.top, sZ.style.width = sg + "px", sZ.style
				.height = qY + "px", bA.qr.r1(sZ, 4), bA.qr.r1(sZ, 8), bA.qr.r1(sZ, 2), document.body.appendChild(sZ)
		}, this.s8 = function(sl) {
			if (sa) {
				if (sl && sb) return 0;
				sa = 0, t.removeChild(document.body, sY), t.removeChild(document.body, sZ)
			}
			return 1
		}, sY.style.position = "absolute", sY.style.backgroundColor = bB.nu, sY.style.color = bB.ny, sY.style.pointerEvents = "none", sY.style.zIndex = "5", sY.style.maxWidth = "100%", sZ.style.position = "absolute", sZ.style.color = bB.ny, sZ.style
		.pointerEvents = "none", sZ.style.zIndex = "5"
}

function rf(sm, type, sn, so) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sp++, e.value = sm.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.ny, e.style.backgroundColor = bB.nr, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sq++
		}), e.addEventListener("blur", function() {
			h.sq--, -1 !== sm.eB && bj.sJ.sK(sm.eB, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sm.eB && bj.sJ.sK(sm.eB, e.value), sn ? sn() : e.blur())
		}), so && e.addEventListener("input", function(qj) {
			so(qj)
		})
}

function sr(ql, data) {
	var f4 = data.ss.length,
		st = document.createElement("div"),
		su = document.createElement("div"),
		sv = document.createElement("div"),
		sw = new Array(f4),
		qm = new Array(f4),
		sx = new Array(data.sy.length),
		sz = bA.color.ns(70, 70, 0, .35);

	function rM() {
		this.style.backgroundColor = bA.color.rM(sz, 160)
	}

	function t4() {
		this.style.backgroundColor = sz
	}

	function qu() {
		var fN;
		for (ql.style.font = bA.qr.si(0, bA.qr.tE(.026, .5, .03)), aB = 1; aB < sx.length; aB++) bA.qr.r1(sx[aB], 4);
		if (bA.qr.r1(st, 2), f4) {
			for (var hW, tF = st.offsetWidth, tG = sv.offsetWidth, aB = 0; aB < sx.length; aB++) hW = .01 * data.t3[aB] * tG, sx[aB].style.width = (100 * hW / tF).toFixed(2) + "%";
			var lK = data.ss[0].length;
			for (aB = 0; aB < f4; aB++)
				for (bA.qr.r1(sw[aB], 2), fN = 1; fN < lK; fN++) bA.qr.r1(qm[aB][fN], 4);
			su.t0 && (su.scrollTop = su.t0)
		}
	}
	this.resize = function() {
			qu(), qu()
		}, ql.style.display = "flex", ql.style.flexDirection = "column", su.style.overflowX = "hidden", su.style.overflowY = "auto", su.addEventListener("scroll", function() {
			this.t0 = this.scrollTop
		}),
		function() {
			var f7, aB, ss = data.ss,
				lK = f4 ? ss[0].length : 0;
			for (aB = 0; aB < f4; aB++) {
				sw[aB] = document.createElement("div"), sw[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.ns(130, 130, 130, .35) : bB.nx
				}(aB), sw[aB].style.width = "100%", sw[aB].style.display = "flex", qm[aB] = new Array(lK);
				for (var fN = 0; fN < lK; fN++) qm[aB][fN] = f7 = document.createElement("div"), f7.style.display = "flex", f7.style.justifyContent = "center", f7.style.wordBreak = "break-all", f7.style.padding = "0.4em 0em", f7.style.width = data
					.t3[fN] + "%", f7.innerHTML = ss[aB][fN].fW, 1 === ss[aB][fN].eT && (f7.name = "" + aB, f7.style.color = bB.ox, f7.style.backgroundColor = sz, f7.addEventListener("mouseover", rM), f7.addEventListener("mouseout", t4), function(f7,
						t6, t7) {
						2147483647 !== t7 && f7.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, t6), bH.dd(bD.aC), this.style.backgroundColor = sz, t.u(8, t.t8, new t9(25, {
								tA: 0,
								t6: bF.tB.tC(bF.tB.tD(5)),
								t7: t7
							}))
						})
					}(f7, ss[aB][fN].t6, ss[aB][fN].t7)), sw[aB].appendChild(f7)
			}
			for (st.style.display = "flex", st.style.backgroundColor = bA.color.ns(0, 120, 0, .35), aB = 0; aB < sx.length; aB++) sx[aB] = f7 = document.createElement("div"), f7.style.display = "flex", f7.style.justifyContent = "center", f7.style
				.wordBreak = "break-all", f7.style.padding = "0.4em 0em", f7.style.width = data.t3[aB] + "%", f7.innerHTML = data.sy[aB], st.appendChild(f7)
		}();
	for (var aB = 0; aB < f4; aB++) sv.appendChild(sw[aB]);
	su.appendChild(sv), ql.appendChild(st), ql.appendChild(su)
}

function tH() {
	var tL, tM, tI = document.createElement("div"),
		tJ = document.createElement("div"),
		tK = document.createElement("div"),
		sv = document.createElement("div"),
		rQ = [],
		e6 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tN = [1, 2, 3, 0, 9, 10, 11];

	function tP(aB) {
		t.u(8, 0, new t9(21, {
			tR: tN[aB],
			tS: 0,
			tT: 10
		}))
	}
	this.show = function() {
			this.sK(t.y.tU), document.body.appendChild(tI)
		}, this.s8 = function() {
			t.removeChild(document.body, tI)
		}, this.sK = function(tU) {
			for (var tV = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rQ.length; aB++) {
				var i = tU[aB];
				tL[tV[aB]][1].rp.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tW = bc.gap,
				j = bA.qr.tX(.085),
				i = Math.min(4 * j, h.i - 2 * tW),
				f4 = rQ.length;
			for (bA.qr.tY(tI, tW, h.j - tW - j, i, j), bA.qr.r1(tI), bA.qr.r1(tJ, 6), aB = 0; aB < f4 - 1; aB++) bA.qr.r1(rQ[aB].button, 6);
			for (aB = 0; aB < f4; aB++) tL[aB][0].resize(), tL[aB][1].resize();
			for (rQ[0].fB = 0, rQ[0].button.style.left = bA.qr.r0(rQ[0].fB), rQ[0].button.style.width = bA.qr.tZ(1.7 * j), aB = 1; aB < f4; aB++) rQ[aB].fB = rQ[aB - 1].fB + rQ[aB - 1].button.offsetWidth, rQ[aB].button.style.left = bA.qr.r0(rQ[aB]
				.fB);
			if (!tM) {
				if (!ab.ta()) return;
				(tM = ab.get(14)).style.width = "24%", tM.style.position = "absolute", tJ.appendChild(tM)
			}
			tM.style.left = bA.qr.r0(0), tM.style.top = "7%", tK.tb && (tK.scrollLeft = tK.tb)
		}, tI.style.position = "absolute", tJ.style.width = "25%", tJ.style.height = "100%", tJ.style.backgroundColor = bB.nu, tK.style.position = "absolute", tK.style.width = "75%", tK.style.height = "100%", tK.style.backgroundColor = bB.nu, tK
		.style.top = tK.style.right = bA.qr.r0(0), bA.qr.tO(tK), sv.style.height = sv.style.maxHeight = "100%", rQ.push(new w("", function() {
			tP(0)
		}, bB.oj)), rQ.push(new w("", function() {
			tP(1)
		}, bB.ok)), rQ.push(new w("", function() {
			tP(2)
		}, bB.ob)), rQ.push(new w("", function() {
			tP(3)
		}, bB.oM)), rQ.push(new w("", function() {
			tP(4)
		}, bB.p8)), rQ.push(new w("", function() {
			tP(5)
		}, bB.p4)), rQ.push(new w("", function() {
			tP(6)
		}, bB.p8)), tL = new Array(rQ.length);
	for (var aB = 0; aB < rQ.length; aB++) rQ[aB].button.style.position = "absolute", tL[aB] = [new tQ(e6[aB], rQ[aB].button, .25, .45), new tQ("", rQ[aB].button, .53, .84, 1)], rQ[aB].button.style.height = rQ[aB].button.style.maxHeight = "100%", rQ[
		aB].button.top = bA.qr.r0(0), sv.appendChild(rQ[aB].button);
	tK.appendChild(sv), tI.appendChild(tJ), tI.appendChild(tK)
}

function tc(td, te, tf, tg, rY, rZ) {
	var th = document.createElement("div"),
		ti = document.createElement("div"),
		tj = document.createElement("div"),
		tk = document.createElement("div"),
		tl = document.createElement("div"),
		tm = document.createElement("div"),
		tn = document.createElement("div"),
		tp = document.createElement("div"),
		tq = document.createElement("span"),
		tr = document.createElement("div");
	this.ts = new rX(rY, rZ), this.tt = new tu(rZ), this.tv = [td, te, tf, tg], this.tz = function(u0) {
		u0 = (u0 / 10).toFixed(1) + "%";
		tp.style.width = u0, tq.innerHTML = u0
	}, this.u1 = function() {
		this.tt.s8(tm), this.ts.show(tm)
	}, this.u2 = function() {
		this.ts.s8(tm), this.tt.show(tm)
	}, this.u3 = function() {
		return ti
	}, this.show = function() {
		document.body.appendChild(th)
	}, this.s8 = function() {
		t.removeChild(document.body, th)
	}, this.resize = function(u4) {
		var u5 = 1 - .4 * a0.a1.iD() * (h.i > 1.6 * h.j),
			u6 = bA.qr.sA(.05 * u5),
			u7 = h.j > h.i,
			u8 = bA.qr.sA(.06 * u5 + .03 * u7),
			u9 = bA.qr.sA(.08 * u5 + .03 * u7),
			uA = bA.qr.sA(.04 + .02 * u7),
			u7 = bA.qr.sA(.02 * u5 + .01 * u7),
			uC = bA.qr.sA(.025);
		th.style.font = bA.qr.si(0, uC), u5 < 1 && (uC = bA.qr.si(0, u5 * uC), tj.style.font = uC, tl.style.font = uC, tr.style.font = uC, tn.style.font = uC, tk.style.font = uC), ti.style.height = bA.qr.r0(u6), ti.style.font = bA.qr.si(0, .72 *
				u6), bA.qr.r1(ti, 2), tj.style.top = bA.qr.r0(u6), tj.style.height = bA.qr.r0(u9), bA.qr.r1(tj, 2), tk.style.font = bA.qr.si(0, u5 * bA.qr.sA(.02)), tk.style.top = bA.qr.r0(u6 + u9), tk.style.height = bA.qr.r0(uA), bA.qr.r1(tk,
			2), tl.style.top = bA.qr.r0(u6 + u9 + uA), tl.style.height = bA.qr.r0(u8), bA.qr.r1(tl, 2), tm.style.top = bA.qr.r0(u6 + u9 + uA + u8), tm.style.height = bA.qr.r0(h.j / h.k - u6 - u9 - 2 * u8 - uA - u7), tn.style.top = bA.qr.r0(h.j /
				h.k - u8 - u7), tn.style.height = bA.qr.r0(u7), bA.qr.r1(tn, 8), tq.style.font = bA.qr.si(0, .8 * u7), tr.style.top = bA.qr.r0(h.j / h.k - u8), tr.style.height = bA.qr.r0(u8), bA.qr.r1(tr, 8), td.resize(tj), te.resize(tj), tf
			.resize(tj), tg.resize(tj), u4 ? this.ts.resize(tm) : this.tt.resize()
	};
	rY = this;
	th.style.position = "absolute", th.style.top = "0", th.style.left = "0", th.style.width = "100%", th.style.height = "100%", th.style.backgroundColor = bB.nx, bJ.rJ() || (th.style.backdropFilter = "blur(4px)", th.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (th.style.display = "none"), ti.style.position = "absolute", ti.style.top = "0", ti.style.left = "0", ti.style.width = "100%", ti.style.display = "flex", ti.style.alignItems = "center";
	for (var g = [tj, tk, tl, tr], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qr.tO(g[aB]);
	tm.style.position = "absolute", tm.style.left = "0", tm.style.width = "100%", tm.style.font = "inherit", tn.style.position = "absolute", tn.style.left = "0", tn.style.width = "100%", tp.style.position = "absolute", tp.style.top = "0", tp.style
		.left = "0", tp.style.height = "100%", tp.style.width = "50%", tp.style.backgroundColor = bB.oK, tq.innerHTML = "", tq.style.position = "absolute", tq.style.top = "50%", tq.style.left = "50%", tq.style.transform = "translate(-50%, -50%)", ti
		.appendChild(function() {
			var ty = document.createElement("h1");
			return ty.textContent = L(23), ty.style.margin = "0 auto 0.15em auto", ty.style.fontFamily = "Arial Black, system-ui", ty.style.fontSize = "inherit", ty.style.fontWeight = "inherit", ty
		}()), tj.appendChild(td.qW), tk.appendChild(te.qW), tl.appendChild(tf.qW), tn.appendChild(tp), tn.appendChild(tq), tr.appendChild(tg.qW), th.appendChild(ti), th.appendChild(tj), th.appendChild(tk), th.appendChild(tl), th.appendChild(tm), th
		.appendChild(tn), th.appendChild(tr), rY.tt.show(tm)
}

function tu(rZ) {
	var th = document.createElement("div"),
		tm = document.createElement("div");
	this.ml = function() {
			tm.textContent = "", bn.uE.uF && bn.uE.s8(1);
			for (var s0 = document.createDocumentFragment(), uG = bn.y.rv[0], uH = bn.uH.uI[uG], uJ = bn.uH.uJ[uG], aB = 0; aB < uH.length; aB++) ! function(s0, qj, uL, uG) {
				var rp = document.createElement("span");
				rp.textContent = (uL ? "🟢 " : "⚪ ") + bn.lE.uM(qj, uG), rp.style.color = bn.lE.uN(qj.uO), rp.style.cursor = "pointer", rp.style.margin = "0.2em 0.2em 0.2em 0.2em", rp.style.width = rp.style.maxWidth = 2 === uG ? "10em" : "9em",
					rp.style.height = rp.style.maxHeight = "1.4em", rp.style.whiteSpace = "nowrap", rp.style.overflow = "hidden", rp.style.textOverflow = "ellipsis", rp.style.font = "inherit", rp.style.display = "inline-block", bn.lE.uP(qj) && (
						rp.style.textDecoration = "underline"), qj.uQ && (rp.style.textDecorationLine = "underline", rp.style.textDecorationStyle = "dotted");
				rp.onclick = function(e) {
					rZ(e, qj)
				}, bJ.rJ() || (rp.onmouseover = function(e) {
					bn.uE.uR(e.target, qj, 1)
				}), s0.appendChild(rp)
			}(s0, uH[aB], aB < uJ, uG);
			tm.appendChild(s0)
		}, this.show = function(ql) {
			ql.appendChild(th)
		}, this.s8 = function(ql) {
			t.removeChild(ql, th)
		}, this.resize = function() {
			tm.style.fontSize = bA.qr.r0(bA.qr.sA(.02, .3))
		}, th.style.top = "0", th.style.left = "0", th.style.width = th.style.height = "100%", th.style.overflowX = "hidden", th.style.overflowY = "auto", th.style.font = "inherit", tm.style.font = "inherit", tm.style.margin = "0.4em", th
		.appendChild(tm)
}

function uS(uT) {
	var th = document.createElement("div"),
		rc = document.createElement("div"),
		uU = [];

	function rE() {
		bJ.rJ() || (this.style.backgroundColor = bA.color.rM(bB.nu, 50))
	}

	function rF() {
		this.style.backgroundColor = bB.nu
	}
	this.sK = function(uW, uX) {
			uU[2].textContent = uW + 1 + " / " + uX
		}, this.show = function(qj) {
			qj = bn.lE.s2(qj, bn.lE.s3(qj)), rc.appendChild(bn.s7.transform(qj)), document.body.appendChild(th)
		}, this.resize = function() {
			var j = bA.qr.sA(.03, .5);
			th.style.width = 10 * j + "px", th.style.font = bA.qr.si(1, .75 * j), bA.qr.r1(th, 4), rc.style.top = j + "px", rc.style.font = bA.qr.si(0, .55 * j), bA.qr.r1(rc, 2), th.style.height = j + rc.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qr.r1(uU[aB], 6), uU[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uU[aB].style.height = j + "px", bA.qr.r1(uU[aB], 2);
			uU[2].style.width = 4 * j + "px", uU[1].style.left = 2 * j + "px", uU[2].style.left = 4 * j + "px", uU[3].style.left = 8 * j + "px"
		}, this.uY = function() {
			for (var aB = 0; aB < 4; aB++) uU[aB].onclick = null, uU[aB].onmouseover = null, uU[aB].onmouseout = null;
			t.removeChild(document.body, th), th = rc = uU = null
		}, th.style.position = "absolute", th.style.color = bB.ny, th.style.zIndex = "3", th.style.right = "0", th.style.top = "0", rc.style.position = "absolute", rc.style.height = "auto", rc.style.color = bB.ny, rc.style.backgroundColor = bB.nu, rc
		.style.left = "0", rc.style.width = "100%", rc.style.overflowWrap = "break-word", th.appendChild(rc);
	for (var aB = 0; aB < 4; aB++) uU[aB] = document.createElement("div"), uU[aB].style.position = "absolute", uU[aB].style.backgroundColor = bB.nu, uU[aB].style.color = bB.ny, uU[aB].style.top = "0", uU[aB].style.display = "flex", uU[aB].style
		.justifyContent = "center", uU[aB].style.alignItems = "center", uU[aB].style.userSelect = "none", uU[aB].style.outline = "none", uU[aB].style.font = "inherit", 2 !== (uU[aB].uV = aB) && (uU[aB].onclick = uT, uU[aB].onmouseover = rE, uU[aB]
			.onmouseout = rF), th.appendChild(uU[aB]);
	uU[0].textContent = "◀", uU[1].textContent = "▶", uU[3].textContent = "✖"
}

function uZ(uT) {
	var sY = document.createElement("div");

	function rE() {
		bJ.rJ() || (sY.style.backgroundColor = bA.color.rM(bB.nu, 50))
	}

	function rF() {
		sY.style.backgroundColor = bB.nu
	}
	this.sK = function(uX) {
			sY.textContent = uX
		}, this.show = function() {
			document.body.appendChild(sY)
		}, this.resize = function() {
			var j = bA.qr.sA(.03, .5);
			sY.style.width = 2 * j + "px", sY.style.height = j + "px", sY.style.font = bA.qr.si(1, .75 * j), bA.qr.r1(sY, 4), bA.qr.r1(sY, 2)
		}, this.uY = function() {
			sY.onclick = null, sY.onmouseover = null, sY.onmouseout = null, t.removeChild(document.body, sY), sY = null
		}, sY.style.position = "absolute", rF(), sY.style.color = bB.ny, sY.style.zIndex = "3", sY.style.right = "0", sY.style.top = "0", sY.style.display = "flex", sY.style.justifyContent = "center", sY.style.alignItems = "center", sY.style
		.userSelect = "none", sY.style.outline = "none", sY.onclick = uT, sY.onmouseover = rE, sY.onmouseout = rF
}

function ua(sQ) {
	var th = document.createElement("div"),
		ub = document.createElement("div"),
		sa = (this.fB = 0, this.fD = 0);

	function ud() {
		bn.ue.s8()
	}
	this.rQ = sQ, this.show = function(fB, fD, ug) {
		if (sa) return [0, 0];
		sa = 1, this.fB = fB, this.fD = fD,
			function(self, ug) {
				var i = bA.qr.sA(.16, .7),
					j = sQ.length * i / 3,
					ui = h.i / h.k,
					uj = h.j / h.k,
					na = Math.min(1, Math.min(ui / i, uj / j));
				i *= na, j *= na, ug && (self.fB += bA.qr.sA(.03, .5)), self.fB = bL.iC(self.fB, 0, ui - i), self.fD = bL.iC(self.fD, 0, uj - j), ub.style.left = self.fB + "px", ub.style.top = self.fD + "px", ub.style.width = i + "px", ub.style
					.height = j + "px", ub.style.font = bA.qr.si(0, .3 * j / sQ.length), bA.qr.r1(ub, 5);
				for (var aB = 1; aB < sQ.length; aB++) bA.qr.r1(sQ[aB].button, 8)
			}(this, ug), document.body.appendChild(th)
	}, this.s8 = function() {
		sa && (sa = 0, th.removeEventListener("click", ud), t.removeChild(document.body, th))
	};
	for (var aB = 0; aB < sQ.length; aB++) new ro("" + (1 + aB), sQ[aB].button, 0, 1);
	th.style.position = "fixed", th.style.top = "0", th.style.left = "0", th.style.width = "100%", th.style.height = "100%", th.style.zIndex = "5", ub.style.position = "absolute",
		function() {
			for (var uf = (100 / sQ.length).toFixed(2) + "%", aB = 0; aB < sQ.length; aB++) sQ[aB].button.style.width = "100%", sQ[aB].button.style.height = sQ[aB].button.style.maxHeight = uf, sQ[aB].button.style.padding = "0.0em 0.9em", ub
				.appendChild(sQ[aB].button)
		}(), th.appendChild(ub), th.addEventListener("click", ud)
}

function ed() {
	var uk, ul, um;

	function ut(aB) {
		return bA.color.nq(ul[aB][0], ul[aB][1], ul[aB][2])
	}

	function uz(fN, fO) {
		return bA.color.v9(ul[fN], ul[fO]), ut(fO)
	}

	function ur() {
		uk && (uk.remove(), uk = null)
	}
	this.show = function(ee, colors, id) {
		0 <= (um = id) && b0.y.eY(0) && b0.eZ.un(0, id), ee = (ee = (ee = (ee = (ee = (ee = (ee = (ee = (ee = (ee = (ee = (ee = ee.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ul = colors, (uk = document.createElement("div")).style.position = "fixed", uk.style.top = "0", uk.style.left = "0", uk.style.width = "100%", uk.style.height = "100%", uk.style.backgroundColor = bA.color.ns(ul[0][0], ul[0][1], ul[0][
				2], .6), uk.style.zIndex = "6", uk.onclick = function(e) {
				e.target === uk && ur()
			},
			function(ee) {
				var i0, us = document.createElement("div");
				us.style.position = "absolute", us.style.display = "flex", us.style.flexDirection = "column", us.style.top = "50%", us.style.left = "50%", us.style.backgroundColor = ut(2), i0 = a0.a1.iD() ? bA.qr.uu(h.min) : bA.qr.sA(.4);
				i0 = Math.max(i0, 200), us.style.width = bA.qr.r0(i0), us.style.height = bA.qr.r0(i0), us.style.transform = "translate(-50%, -50%)",
					function(us, i0) {
						var uy = document.createElement("div");
						uy.style.flex = "0 0 10%", uy.style.overflow = "hidden", uy.style.backgroundColor = ut(1), uy.style.color = uz(1, 7), uy.style.font = bA.qr.si(1, .05 * i0), uy.style.display = "flex", uy.style.alignItems = "center", uy
							.style.justifyContent = "center", uy.innerHTML = L(24), us.appendChild(uy)
					}(us, i0),
					function(us, ee, i0) {
						var v0 = document.createElement("div");
						v0.style.flex = "0 0 70%", v0.style.overflowY = "auto", v0.style.overflowX = "hidden", v0.style.whiteSpace = "pre-wrap", v0.style.wordWrap = "break-word", v0.style.padding = bA.qr.r0(.02 * i0), v0.style.backgroundColor =
							ut(2), v0.style.color = uz(2, 8), v0.style.font = bA.qr.si(0, .07 * i0), v0.innerHTML = ee, v0.innerHTML = "<style>a { color: inherit; }</style>" + v0.innerHTML, us.appendChild(v0)
					}(us, ee, i0),
					function(us, i0) {
						var v1 = document.createElement("div"),
							v2 = (v1.style.display = "flex", v1.style.flexDirection = "row", v1.style.justifyContent = "space-between", v1.style.alignItems = "stretch", v1.style.backgroundColor = ut(3), v1.style.flex = "1", v1.style.padding = bA
								.qr.r0(.01 * i0), v1.style.gap = bA.qr.r0(.01 * i0), document.createElement("div")),
							v3 = (v2.style.flex = "0 0 60%", v2.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								ur()
							}, ut(4), !1)),
							v3 = (v3.button.style.width = "100%", v3.button.style.height = "100%", v3.button.style.color = uz(4, 9), v3.button.style.font = bA.qr.si(1, .05 * i0), v2.appendChild(v3.button), document.createElement("div")),
							v5 = (v3.style.flex = "0 0 15%", v3.style.height = "100%", v3.style.backgroundColor = ut(5), document.createElement("div")),
							v6 = (v5.style.flex = "1", v5.style.height = "100%", new w(L(26), function(e) {
								return bA.qr.v7(e), um < 0 || b0.y.eY(0) && (b0.eZ.un(1, um), um = -1), !0
							}, ut(6), !1));
						v6.button.style.width = "100%", v6.button.style.height = "100%", v6.button.style.color = uz(6, 10), v6.button.style.font = bA.qr.si(1, .035 * i0), v5.appendChild(v6.button), v1.appendChild(v2), v1.appendChild(v3), v1
							.appendChild(v5), us.appendChild(v1)
					}(us, i0), uk.appendChild(us)
			}(ee), document.body.appendChild(uk)
	}
}

function vA(sm, vB) {
	this.qh = [];
	var vC = this.qh;

	function click() {
		for (var aB = 0; aB < vC.length; aB++) vC[aB].textContent = vC[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eB = parseInt(this.name);
		void 0 !== sm.eB && bj.sJ.sK(sm.eB, eB), vB && vB(eB)
	}
	for (var vD, f4 = sm.vE.length, aB = 0; aB < f4; aB++)(vD = document.createElement("p")).textContent = "⚪ " + sm.vE[aB], vD.style.margin = "0", vD.name = "" + aB, vD.style.cursor = "pointer", vD.style.fontSize = "1em", vD.addEventListener(
		"click", click), vC.push(vD);
	vC[sm.value].textContent = vC[sm.value].textContent.replace("⚪", "🟢")
}

function vF(title, vG, vH) {
	var tI = document.createElement("div"),
		vI = document.createElement("div"),
		sv = document.createElement("div"),
		vJ = document.createElement("div"),
		vK = document.createElement("div");
	this.vL = sv, this.vM = vG, this.show = function() {
			!1 !== vH ? document.body.appendChild(tI) : (document.body.appendChild(vI), document.body.appendChild(vJ))
		}, this.s8 = function() {
			!1 !== vH ? t.removeChild(document.body, tI) : (t.removeChild(document.body, vI), t.removeChild(document.body, vJ))
		}, this.vQ = function() {
			var sB = bA.qr.sA(.1),
				s9 = bA.qr.sA(.08 + .04 * (h.vR < 1), .3);
			return {
				sB: sB,
				s9: s9,
				vS: h.j / h.k - sB - s9
			}
		}, this.resize = function(sU) {
			var f4 = vG.length,
				vT = this.vQ(),
				sB = vT.sB,
				s9 = vT.s9;
			for (vI.style.height = bA.qr.r0(sB), bA.qr.r1(vI, 2), vJ.style.top = bA.qr.r0(h.j / h.k - s9), vJ.style.height = bA.qr.r0(s9), bA.qr.r1(vJ, 8), sv.style.top = bA.qr.r0(sB), sv.style.height = sv.style.maxHeight = bA.qr.r0(vT.vS), vI.style
				.font = bA.qr.si(0, bA.qr.sA(.02, .15)), vJ.style.font = bA.qr.si(0, bA.qr.sA(.02, .7)), sv.style.font = bA.qr.si(0, bA.qr.sA(.02, .35)), aB = 1; aB < f4; aB++) bA.qr.r1(vG[aB].button, 4);
			for (var sV = 0, aB = 0; aB < f4; aB++) sV += vG[aB].button.offsetWidth;
			if (sU && sV < vJ.offsetWidth)
				for (aB = 0; aB < f4; aB++) vG[aB].button.style.width = (100 * vG[aB].button.offsetWidth / sV).toFixed(2) + "%";
			else
				for (aB = 0; aB < f4; aB++) vG[aB].button.style.width = "auto";
			vJ.tb && (vJ.scrollLeft = vJ.tb), sU || this.resize(!0)
		}, this.vU = function() {
			var vT = this.vQ(),
				ec = h.k;
			vV.fillStyle = bB.nu, vV.fillRect(0, ec * vT.sB, h.i, ec * vT.vS)
		}, tI.style.position = "absolute", tI.style.top = "0", tI.style.left = "0", tI.style.width = "100%", tI.style.height = "100%", vI.style.position = "absolute", vI.style.top = "0", vI.style.left = "0", vI.style.width = "100%", vI.style
		.display = "flex", vI.style.backgroundColor = bB.nu, vJ.style.position = "absolute", vJ.style.left = "0", vJ.style.width = "100%", bA.qr.tO(vJ), vK.style.height = vK.style.maxHeight = "100%", sv.style.position = "absolute", sv.style.width =
		"100%", sv.style.backgroundColor = bB.nu,
		function() {
			for (var aB = 0; aB < vG.length; aB++) vG[aB].button.style.height = "100%", vG[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vG.length; aB++) vK.appendChild(vG[aB].button);
	vI.appendChild(function() {
		var vP = document.createElement("h1");
		return vP.textContent = title, vP.style.margin = "auto", vP.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vP.style.fontFamily = "Arial Black, system-ui", vP
	}()), vJ.appendChild(vK), !1 !== vH && (tI.appendChild(sv), tI.appendChild(vI), tI.appendChild(vJ))
}

function ro(vW, vX, vY, vZ) {
	var self;
	this.rp = document.createElement("span"), (self = this).rp.textContent = vW, self.rp.style.color = bB.ny, self.rp.style.position = "absolute", self.rp.style.font = "inherit", vZ ? self.rp.style.bottom = "0.06em" : self.rp.style.top = "0.12em",
		vY ? self.rp.style.left = "0.2em" : self.rp.style.right = "0.2em", self.rp.style.fontSize = "0.6em", self.rp.style.pointerEvents = "none", self.rp.style.whiteSpace = "pre", vX.style.position = "relative", vX.style.overflow = "hidden", vX
		.appendChild(self.rp)
}

function tQ(vW, vX, va, vb, vc) {
	var self;
	this.rp = document.createElement("span"), this.resize = function() {
			this.rp.style.fontSize = ((vb - va) * vX.offsetHeight).toFixed(1) + "px"
		}, (self = this).rp.textContent = vW, self.rp.style.color = bB.ny, self.rp.style.font = "inherit", self.rp.style.margin = "0.1em 0.6em", self.rp.style.pointerEvents = "none", vc && (self.rp.style.fontWeight = "bold"), self.rp.style
		.whiteSpace = "nowrap", self.rp.style.display = "block", vX.appendChild(self.rp)
}

function vd(ve, vf, vg, vh) {
	var vi = document.createElement("textarea"),
		vj = (this.e = vi, !0);

	function vo() {
		vi.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vf && bA.qr.r1(vi, 5)
		}, this.vk = function(ee) {
			vi.value = ee
		}, this.vl = function() {
			return vi.value
		}, this.vm = function() {
			vi.select()
		}, this.clear = function() {
			vi.value = ""
		}, this.vn = function() {
			vj && navigator.clipboard ? (vi.select(), navigator.clipboard.writeText(vi.value).catch(function() {
				vj = !1, vo()
			})) : vo()
		}, vi.setAttribute("id", "textArea" + t.y.sp++), vi.setAttribute("autocomplete", "off"), ve && vi.setAttribute("placeholder", ve), vi.style.top = "0", vi.style.left = "0", vi.style.width = "100%", vi.style.height = "100%", vi.style
		.userSelect = "none", vi.style.outline = "none", vi.style.resize = "none", vi.style.border = "none", vi.style.color = bB.ny, vi.style.backgroundColor = bB.nr, vh ? (vi.style.fontSize = "1em", vi.rows = 6, vi.style.padding = "0.25em") : (vi
			.style.padding = "0.45em", vi.style.fontSize = "1.2em"), vg && vi.addEventListener("input", function(e) {
			vg(e)
		}), vi.addEventListener("focus", function() {
			h.sq++
		}), vi.addEventListener("blur", function() {
			h.sq--
		})
}

function dI() {
	this.r8 = new vp, this.eP = new vq, this.sJ = new vr, this.y = new vs, this.vt = new vu, this.dd = function() {
		this.eP.dd(), (new vv).dd(), this.vt.dd(), this.y.vw()
	}
}

function vq() {
	function vx(aB, type, w3, dw) {
		bj.eP.data.push({
			eB: aB,
			type: type || 0,
			value: w3 || 0,
			w3: w3 || 0,
			dw: dw || 0
		})
	}

	function vy(aB, type, w3, dw) {
		bj.eP.data.push({
			eB: aB,
			type: type,
			value: w3 || "",
			w3: w3 || "",
			dw: dw || 0
		})
	}

	function vz(ng) {
		for (var aB = bj.eP.data.length; aB < ng; aB++) bj.eP.data.push(null)
	}
	this.data = [], this.dd = function() {
		vx(0, 1, 0, 5), vx(1, 1, 1), vx(2, 0), vy(3, 2), vx(4, 1), vy(5, 2, "system-ui", 2), vx(6, 0), vx(7, 0, 0), vx(8, 0), vx(9, 1, 1), vx(10, 1), vx(11, 1, 1), vy(12, 2, navigator.language), vx(13), vx(14), vz(100), vy(100, 2), vy(101, 2),
			vy(102, 2), vy(103, 2), vy(104, 2), vy(105, 2), vy(106, 2), vx(107), vx(108), vx(109), vy(110, 2), vx(111), vx(112), vx(113), vy(114, 2), vx(115), vy(116, 2), vx(117, 1), vy(118, 2, "", 2), vx(119, 1, 0, 1), vy(120, 2), vx(121, 1, ~~(
				262144 * Math.random())), vy(122, 2, "Player " + Math.floor(1e3 * Math.random())), vx(123), vy(124), vx(125, 1), vy(126, 2), vx(127, 0, 1), vx(128), vx(129), vx(130), vx(131), vx(132), vy(133, 2), vx(134, 0, 5), vy(135, 2), vy(
				136, 2), vx(137), vx(138), vx(139), vx(140), vx(141), vx(142), vx(143), vx(144), vy(145, 2), vx(146), vx(147), vy(148, 2), vx(149), vx(150, 0, 1), vy(151, 2), vx(152, 0, 5), vx(153, 1), vx(154, 1), vy(155, 2), vy(156, 2), vx(157),
			vx(158), vx(159), vx(160), vy(161, 2), vx(162, 0, 1024), vy(163, 2, "0,0,0"), vy(164, 2, "100,100,100"), vy(165, 2, "30,30,30"), vy(166, 2, "70,70,70"), vy(167, 2, "100,100,100"), vy(168, 2, "85,85,85"), vy(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) vy(170 + aB, 2, "255,255,255");
		vy(174, 2), vy(175, 2), vx(176, 0, 200), vz(180), vx(180, 0), vx(181, 0)
	}, this.sK = function(eB, value) {
		this.data[eB].value = value
	}, this.w0 = function(eB, value) {
		this.sK(eB, value);
		var value = String(value),
			f4 = value.length;
		5e4 < f4 ? console.log("storage value too large: index " + eB + " size " + f4) : (bj.r8.save(eB, value), bj.r8.save(eB, String(this.data[eB].dw), !0))
	}, this.w1 = function(eB) {
		return Number(this.data[eB].value)
	}, this.w2 = function(eB) {
		return String(this.data[eB].value)
	}
}

function vu() {
	var w4 = [];

	function w8(t6) {
		w4.unshift(t6), bj.sJ.sK(161, w4.join(";"))
	}

	function w7(t6) {
		for (var wA = w4, f4 = wA.length, aB = 0; aB < f4; aB++)
			if (wA[aB] === t6) return wA.splice(aB, 1), bj.sJ.sK(161, wA.join(";")), 1
	}
	this.dd = function() {
		var qY = bj.eP.data[161].value;
		qY.length && (w4 = qY.split(";"))
	}, this.get = function() {
		return w4
	}, this.w5 = function() {
		return {
			vE: w4,
			value: 0
		}
	}, this.uQ = function(t6) {
		return bA.qz.has(w4, t6)
	}, this.w6 = function(t6) {
		return w7(t6) ? 0 : (w8(t6), 1)
	}, this.ml = function(t6) {
		w7(t6) && w8(t6)
	}, this.w9 = function(eB) {
		eB < w4.length && (w4.splice(eB, 1), bj.sJ.sK(161, w4.join(";")))
	}
}

function vp() {
	this.wB = function(eB, dw) {
		return Number(this.wC(eB, dw))
	}, this.wC = function(eB, dw) {
		var fW = null;
		return 0 === a0.id ? a0.wD && (fW = a0.wD.getItem((dw ? "v" : "d") + eB)) : 1 === a0.id ? fW = a0.wE.loadString((dw ? 1e3 : 2e3) + eB) : 2 === a0.id && (fW = a0.wF[(dw ? "v" : "d") + eB]), fW && 0 !== fW.length ? fW : null
	}, this.wG = function(f4, wH) {
		var g = [],
			wI = wH ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wD)
				for (aB = 0; aB < f4; aB++) g.push(a0.wD.getItem(wI + aB))
		} else if (1 === a0.id)
			for (var wJ = wH ? 5e3 : 3e3, aB = 0; aB < f4; aB++) g.push(a0.wE.loadString(wJ + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f4; aB++) g.push(a0.wF[wI + aB]);
		return g
	}, this.save = function(eB, value, dw) {
		var wK = (dw ? "v" : "d") + eB;
		if (0 === a0.id) {
			if (a0.wD && bj.eP.data[140].value) try {
				a0.wD.setItem(wK, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wE.saveString((dw ? 1e3 : 2e3) + eB, value) : 2 === a0.id && (a0.wF[wK] = value, a0.wL.postMessage(wK + " " + value))
	}, this.wM = function(g, wH) {
		var f4 = g.length,
			wI = wH ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wD && bj.eP.data[140].value) try {
				for (aB = 0; aB < f4; aB++) a0.wD.setItem(wI + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wJ = wH ? 5e3 : 3e3, aB = 0; aB < f4; aB++) a0.wE.saveString(wJ + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f4; aB++) a0.wF[wI + aB] = g[aB], a0.wL.postMessage(wI + aB + " " + g[aB])
	}
}

function vv() {
	this.dd = function() {
		! function() {
			var data = bj.eP.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].w3 = 1);
			0 === data[100].dw && (data[100].value = data[100].w3 = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bj.eP.data,
			f4 = data.length;
		for (aB = 0; aB < f4; aB++) {
			var wP = bj.r8.wB(aB, !0);
			data[aB] && data[aB].dw === wP && (null === (wP = bj.r8.wC(aB)) ? data[aB].value = data[aB].w3 : 2 === data[aB].type ? data[aB].value = wP : (wP = Number(wP), isNaN(wP) ? data[aB].value = data[aB].w3 : data[aB].value = wP))
		}
	}
}

function vs() {
	function wU(g) {
		if (0 === g.length) bj.sJ.sK(116, "");
		else {
			for (var wX = g[0], aB = 1; aB < g.length; aB++) wX += ";" + g[aB];
			bj.sJ.sK(116, wX)
		}
	}
	this.wR = function() {
		bj.eP.data[110].value.length && (bj.eP.data[106].value = bj.eP.data[110], bj.sJ.sK(110, ""), this.wS())
	}, this.wS = function() {
		var g = bj.eP.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eP.data[106].value), g.unshift(bj.eP.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wT = [], aB = 0; aB < g.length; aB += 2) wT.push(g[aB]);
		wU(g), bj.eP.data[117].value = 0, bj.eP.data[117].vE = wT
	}, this.wV = function(eB) {
		bj.eP.data[117].vE.splice(eB, 1), bj.eP.data[117].value = Math.min(eB, bj.eP.data[117].vE.length - 1);
		var g = bj.eP.data[116].value.split(";");
		g.splice(2 * eB, 2), wU(g)
	}, this.wW = function(eB) {
		var g = bj.eP.data[116].value.split(";");
		return {
			t6: g[2 * eB],
			password: g[2 * eB + 1]
		}
	}, this.wY = function() {
		var fW = bL.iC(bj.eP.data[121].value, -1, 262143);
		return fW = -1 === fW ? ~~(262144 * Math.random()) : fW
	}, this.vw = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qY = g[aB].trim(),
				wZ = qY.indexOf("="),
				wZ = 0 <= wZ ? qY.substring(0, wZ) : qY;
			document.cookie = wZ + "=;expires=0;path=/", document.cookie = wZ + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wZ + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function vr() {
	this.sK = function(eB, value) {
		2 !== bj.eP.data[eB].type && (value = Math.floor(value)), bj.eP.data[eB].value !== value && (bj.eP.w0(eB, value), 0 === eB ? (t.x(), b7.dd(), t.u(2)) : 1 === eB ? h.dn(1) : 2 === eB ? h.dn(0) : 5 === eB && (bA.qr.wa(), h.dn(0)))
	}, this.wb = function() {
		for (var data = bj.eP.data, aB = 0; aB < 100; aB++) data[aB] && bj.eP.w0(aB, data[aB].w3);
		bA.qr.wa(), h.dn(1)
	}, this.wc = function() {
		for (var data = bj.eP.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eP.sK(aB, data[aB].w3)
	}, this.wd = function() {
		for (var fO = bj.eP, aB = 128; aB < 135; aB++) fO.w0(aB, fO.data[aB].w3)
	}, this.we = function(data) {
		bj.sJ.sK(109, data.t7), bj.sJ.sK(107, data.wf), bj.sJ.sK(108, data.wg), bj.sJ.sK(112, data.wh), bj.sJ.sK(111, data.wi), bj.sJ.sK(113, data.wj), bj.sJ.sK(135, data.wk), bj.sJ.sK(136, data.wl), bj.sJ.sK(137, data.wm), bj.sJ.sK(138, data
			.wn), bj.sJ.sK(139, data.wo), bj.sJ.sK(141, data.wp), bj.sJ.sK(142, data.wq), bj.sJ.sK(143, data.wr), bj.sJ.sK(144, data.ws)
	}
}

function c4() {
	this.tB = new wt, this.wu = new wv, this.ww = new wx, this.dd = function() {
		this.tB.dd()
	}
}

function wv() {
	this.wy = function(size) {
		for (var wz = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wz.pz(16)));
		return g.join("")
	}, this.x0 = function(qY) {
		return 20 < (qY = qY.trim()).length ? qY.substring(0, 20) : qY
	}
}

function wt() {
	var x1 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (x1[50] = 37, aB = 0; aB < 10; aB++) x1[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) x1[aB + 20] = aB + 11, x1[aB + 52] = aB + 38
	}, this.x2 = function(qY) {
		return qY.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.x3 = function(qY, size) {
		if ((qY = this.x2(qY)).length > size) return qY.substring(0, size);
		for (; qY.length < size;) qY = "-" + qY;
		return qY
	}, this.x4 = function(qY) {
		for (var x5 = x1, f4 = qY.length, g = new Uint8Array(f4), aB = 0; aB < f4; aB++) g[aB] = x5[qY.charCodeAt(aB) - 45];
		return g
	}, this.x6 = function(x7) {
		bD.a7(6 * x7.length), this.x8(x7), bH.dd(bD.aC)
	}, this.x8 = function(x7) {
		for (var f4 = x7.length, i = bD, aB = 0; aB < f4; aB++) i.a8(6, x7[aB])
	}, this.x9 = function(qY) {
		this.x8(this.x4(qY))
	}, this.xA = function(qY, size) {
		this.x8(this.x4(this.x3(qY, size)))
	}, this.xB = function(qY, size) {
		for (var g = this.x4(this.x3(qY, size)), fW = 0, na = 1, aB = g.length - 1; 0 <= aB; aB--) fW += na * g[aB], na *= 64;
		return fW
	}
}

function xC() {
	var i, j, xD;

	function xd(hW, f7, xb, xI, xW) {
		f7 = xc(hW, f7 + 1 + 2 * xI & 3);
		! function(hW, l2) {
			return 1 < Math.abs(hW % i - l2 % i) || 1 < Math.abs(xg(hW) - xg(l2))
		}(hW, f7) && 0 === xW[f7 << 2] && (xW[f7 << 2] = xb)
	}

	function xg(gc) {
		return Math.floor((gc + .5) / i) % j
	}

	function xc(gc, f7) {
		return gc + xD[f7]
	}
	this.xE = function(qY) {
		var aB, xF, f4, xG, wz = bH;
		for (bG.tB.x6(bG.tB.x4(qY)), bS.xJ.xK[bS.ek].i = bS.fF = i = wz.pz(12), bS.xJ.xK[bS.ek].j = bS.fG = j = wz.pz(12), xD = [-i, -1, i, 1], bS.xT = document.createElement("canvas"), bS.xT.width = bS.fF, bS.xT.height = bS.fG, bS.xP = bS.xT
			.getContext("2d", {
				alpha: !1
			}), bS.xQ = bS.xU = null, bS.xQ = bS.xP.getImageData(0, 0, bS.fF, bS.fG), bS.xU = bS.xQ.data, bA.qz.xV(bS.xU), f4 = wz.pz(12), xF = wz.pz(5), xG = xM(i * j - 1), aB = 0; aB < f4; aB++) ! function(lK, gc, xH, xI) {
			var aB, f7, wz = bH,
				xW = bS.xU,
				xX = gc,
				xY = gc,
				xZ = 0,
				xa = 1 + xH,
				xb = 2 - xH;
			for (xW[gc << 2] = xa, aB = 0; aB < lK; aB++) f7 = wz.pz(2), gc = xc(gc, f7), xW[gc << 2] === xa ? xZ % 2 == 1 && xd(xY, xZ + 2 * xI + 3, xb, xI, xW) : xW[gc << 2] = xa, xd(gc, f7, xb, xI, xW), xd(xY, f7, xb, xI, xW), xY = gc,
				xZ = f7;
			xc(gc, 0) === xX ? (xd(gc, 0, xb, xI, xW), xd(xX, 0, xb, xI, xW)) : xc(gc, 1) === xX && (xd(gc, 0, xb, xI, xW), xd(xX, 2, xb, xI, xW));
			0 === lK && (xd(xX, 0, xb, xI, xW), xd(xX, 2, xb, xI, xW))
		}(wz.pz(xF), wz.pz(xG), 1 === wz.pz(1), 1 === wz.pz(1));
		var fB, fD, hw, xh, xi, xj, xW = bS.xU,
			xk = !0,
			xl = bS.xJ.xK[bS.ek].xl,
			xm = bS.xJ.xK[bS.ek].xm;
		for (fD = 0; fD < j; fD++)
			for (xh = !0, xi = xk, fB = xj = 0; fB < i; fB++) hw = 4 * fD * i + 4 * fB, xj <= fB && 0 < xW[hw] && (xi = 2 === xW[hw], xh) && (xh = !1, xi !== xk) ? (xk = xi, xj = fB + 1, fB = -1) : (xi ? (xW[hw] = xm[0], xW[1 + hw] = xm[1], xW[
				2 + hw] = xm[2]) : (xW[hw] = xl[0], xW[1 + hw] = xl[1], xW[2 + hw] = xl[2]), xW[3 + hw] = 255);
		bS.xP.putImageData(bS.xQ, 0, 0), bS.xR = !0, bS.xS.dd(), bf.dk = !0
	}
}

function wx() {
	this.xE = function(xn) {
		for (var wz = bH, size = wz.pz(xn), xo = 7 + 9 * wz.pz(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wz.pz(xo)));
		return g.join("")
	}
}

function c9() {
	var sc, sd, xp, xq, xr, xs, xt, xu, xv, xw;

	function xy() {
		var y1 = aD.y1;
		for (xv = y1; xv < aD.f1; xv++) xx();
		for (xv = aD.hS ? aD.kP : 0; xv < y1; xv++) {
			if (!y2()) {
				for (var fO = aD.y6 = xv; fO < y1; fO++) xv = fO, xx();
				return
			}
			y5(xs + sc * xr + bL.fV(xr, 2), xt + sd * xr + bL.fV(xr, 2))
		}
	}

	function yY(player) {
		for (var ix = ag.ix, iz = ag.iz, iy = ag.iy, j0 = ag.j0, fD = iz[player]; fD <= j0[player]; fD++)
			for (var fB = ix[player]; fB <= iy[player]; fB++) {
				var ei = ac.yZ(fB, fD);
				ac.ge(ei) && (ac.ja(ei) ? ac.gZ(ei, player) : ac.ya(ei, player))
			}
	}

	function yX(g, tS, tT) {
		var eT = g[tS];
		g[tS] = g[tT], g[tT] = eT
	}

	function y2() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sc = bL.fV(xp * ay.random(), ay.value(100)), sd = bL.fV(xq * ay.random(), ay.value(100)), yf()) return 1;
			return
		}() || function() {
			var iO, iR, fN, y4, fO, y3;
			for (iO = bL.fV(xp * ay.random(), ay.value(100)), iR = bL.fV(xq * ay.random(), ay.value(100)), fN = 40; 1 <= fN; fN--)
				for (y4 = xq - fN; 0 <= y4; y4 -= 40)
					for (sd = (y4 + iR) % xq, fO = 40; 1 <= fO; fO--)
						for (y3 = xp - fO; 0 <= y3; y3 -= 40)
							if (sc = (y3 + iO) % xp, yf()) return 1;
			return
		}()
	}

	function yf() {
		for (var gc, yh, gap = bL.fV(xr - xu, 2), yi = xt + sd * xr + gap, yj = xs + sc * xr + gap, yg = yi + xu - 1; yi <= yg; yg--)
			for (yh = yj + xu - 1; yj <= yh; yh--)
				if (gc = ac.yZ(yh, yg), !ac.ez(gc) || ac.ja(gc)) return;
		return 1
	}

	function y5(y3, y4) {
		xx(), yk(y3 - 2, y4 - 2)
	}

	function xx() {
		ag.my[xv] = 0, ag.gs[xv] = ag.yV[xv] = 0, ag.gW[xv] = [], ag.gk[xv] = [], ag.gl[xv] = [], ag.fT[xv] = [], ag.ix[xv] = ag.iz[xv] = ag.iy[xv] = ag.j0[xv] = 0
	}

	function yk(y3, y4) {
		var gc, aB, yl, ym;
		for (ag.my[xv] = 1, ag.ix[xv] = y3 + 10, ag.iz[xv] = y4 + 10, ag.j0[xv] = ag.iy[xv] = 0, yl = y3; yl < y3 + 4; yl++)
			for (ym = y4; ym < y4 + 4; ym++)(y3 < yl && yl < y3 + 3 || y4 < ym && ym < y4 + 3) && (gc = ac.yZ(yl, ym), ac.ez(gc)) && (ag.ix[xv] = Math.min(yl, ag.ix[xv]), ag.iy[xv] = Math.max(yl, ag.iy[xv]), ag.iz[xv] = Math.min(ym, ag.iz[xv]), ag
				.j0[xv] = Math.max(ym, ag.j0[xv]), xw[ag.gs[xv]] = gc, ag.gs[xv]++, ac.ya(gc, xv));
		for (ag.yV[xv] = ag.gs[xv], aB = ag.gs[xv] - 1; 0 <= aB; aB--) ac.yn(xw[aB], xv) ? (ac.gZ(xw[aB], xv), ag.gk[xv].push(xw[aB])) : ac.yo(xw[aB]) ? (ac.gZ(xw[aB], xv), ag.gl[xv].push(xw[aB])) : ac.yp(xw[aB]) && (ac.gZ(xw[aB], xv), ag.fT[xv]
			.push(xw[aB]))
	}
	this.dd = function() {
		if (xw = new Array(12), xu = 6, xr = 10, xp = bL.fV(bS.fF, xr), xq = bL.fV(bS.fG, xr), xs = bL.fV(bS.fF - xr * xp, 2), xt = bL.fV(bS.fG - xr * xq, 2), aD.hS)
			for (var aB = 0; aB < aD.kP; aB++) xv = aB, xx(), ag.my[xv] = 1;
		(0 === aD.data.spawningType ? xy : 1 === aD.data.spawningType ? (xy(), function() {
			var y7 = aD.y8;
			aD.y9 || y7++;
			if (!(y7 < 3)) {
				for (var data = aD.data, jf = (aD.hS ? aD.kP : 0) + data.teamPlayerCount[0], ng = aD.y6, yA = new Uint32Array(y7), yB = new Uint32Array(y7), yC = new Uint16Array(y7), yD = new Uint16Array(y7), f2 = bg.f2, ix = ag.ix, iz =
						ag.iz, iy = ag.iy, j0 = ag.j0, fj = bO.fj, fk = bO.fk, aB = jf; aB < ng; aB++) fj[aB] = ix[aB] + iy[aB] >> 1, fk[aB] = iz[aB] + j0[aB] >> 1;
				for (aB = jf; aB < ng; aB++) {
					var id = f2[aB];
					yA[id] += fj[aB], yB[id] += fk[aB]
				}
				var km = bg.km;
				for (aB = 1; aB < y7; aB++) {
					var gX = Math.max(data.teamPlayerCount[km[aB]], 1);
					yC[aB] = bL.fV(yA[aB], gX), yD[aB] = bL.fV(yB[aB], gX)
				}
				var yE = bg.yE,
					yF = bg.yF,
					yG = bg.yG,
					fi = bO.fi;
				for (aB = 0; aB < 512; aB++) fi[aB] = aB;
				for (var eA = 0; eA < 2 + (4 <= y7); eA++)
					for (aB = jf; aB < ng; aB++) {
						for (var hW = aB, yH = fi[hW], yI = 1, fK = bL.yJ(fj[yH] - yC[1], fk[yH] - yD[1]), fN = 2; fN < y7; fN++) {
							var yK = bL.yJ(fj[yH] - yC[fN], fk[yH] - yD[fN]);
							yK < fK && (fK = yK, yI = fN)
						}
						var yL = f2[hW];
						if (yI !== yL) {
							if (2 === eA && 4 <= y7) {
								var yM = Math.max((yI + 1) % y7, 1),
									yN = bL.yJ(fj[yH] - yC[yM], fk[yH] - yD[yM]);
								for (fN = 1; fN < y7; fN++) yK = bL.yJ(fj[yH] - yC[fN], fk[yH] - yD[fN]), fK < yK && yK < yN && (yN = yK, yM = fN);
								yM !== yL && bL.yJ(yC[yL] - yC[yM], yD[yL] - yD[yM]) < bL.yJ(yC[yL] - yC[yI], yD[yL] - yD[yI]) && (yI = yM)
							}
							var yO = km[yI],
								yP = yF[yO] + (aD.hS ? 0 : yG[yO]),
								l2 = yE[yP],
								yQ = fi[l2],
								yR = yF[yO + 1];
							fK = bL.yJ(fj[yQ] - yC[yL], fk[yQ] - yD[yL]);
							for (var ec = yP + 1; ec < yR; ec++) {
								var yS = yE[ec],
									yT = fi[yS];
								(yK = bL.yJ(fj[yT] - yC[yL], fk[yT] - yD[yL])) < fK && (fK = yK, l2 = yS)
							}
							l2 < jf || ng <= l2 || (yQ = fi[l2], yA[yL] += fj[yQ] - fj[yH], yB[yL] += fk[yQ] - fk[yH], yA[yI] += fj[yH] - fj[yQ], yB[yI] += fk[yH] - fk[yQ], gX = data.teamPlayerCount[km[yL]], yC[yL] = bL.fV(yA[yL], gX),
								yD[yL] = bL.fV(yB[yL], gX), gX = data.teamPlayerCount[yO], yC[yI] = bL.fV(yA[yI], gX), yD[yI] = bL.fV(yB[yI], gX), fi[hW] = yQ, fi[l2] = yH)
						}
					}! function() {
						for (var fi = bO.fi, ix = ag.ix, iz = ag.iz, iy = ag.iy, j0 = ag.j0, gs = ag.gs, yV = ag.yV, gk = ag.gk, gl = ag.gl, fT = ag.fT, aB = 0; aB < 512; aB++) {
							var yW = fi[aB];
							if (yW !== aB) {
								yX(ix, aB, yW), yX(iz, aB, yW), yX(iy, aB, yW), yX(j0, aB, yW), yX(gs, aB, yW), yX(yV, aB, yW), yX(gk, aB, yW), yX(gl, aB, yW), yX(fT, aB, yW), yY(aB), yY(yW), fi[aB] = aB;
								for (var j = yW, gd = fi[j]; gd !== aB;) gd = fi[j = gd];
								fi[j] = yW
							}
						}
					}()
			}
		}) : function() {
			var y1 = aD.y1;
			for (xv = y1; xv < aD.f1; xv++) xx();
			for (xv = aD.hS ? aD.kP : 0; xv < y1; xv++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							y3 = spawningData[2 * xv] + 1,
							spawningData = spawningData[2 * xv + 1] + 1;
						if (3 < y3 && y3 < bS.fF - 5 && 3 < spawningData && spawningData < bS.fG - 5 && ac.ez(ac.yZ(y3, spawningData)) && function(y3, y4) {
								var gc, yh, yg;
								for (yg = y4; y4 - 6 < yg; yg--)
									for (yh = y3; y3 - 6 < yh; yh--)
										if (gc = ac.yZ(yh, yg), ac.ja(gc)) return;
								return 1
							}(y3 + 3, spawningData + 3)) return y5(y3 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!y2()) {
						for (var fO = aD.y6 = xv; fO < y1; fO++) xv = fO, xx();
						return
					}
					var y3 = xs + sc * xr + bL.fV(xr, 2),
						y4 = xt + sd * xr + bL.fV(xr, 2);
					y5(y3, y4)
				}
		})(), bd.mu[7] = ag.gs[aD.eo]
	}, this.yq = function(jY, yr, ys) {
		var aB, y3, y4, gc, sc, sd;
		for (xv = jY, aB = 0; aB < 20; aB++)
			for (y3 = yr + aB; yr - aB <= y3; y3--)
				for (y4 = ys + aB; ys - aB <= y4; y4--)
					if ((y3 === yr + aB || y3 === yr - aB || y4 === ys + aB || y4 === ys - aB) && 3 < y3 && y3 < bS.fF - 5 && 3 < y4 && y4 < bS.fG - 5 && ac.ez(ac.yZ(y3, y4)) && function(y3, y4) {
							var gc, yh, yg;
							for (yg = y4; y4 - 6 < yg; yg--)
								for (yh = y3; y3 - 6 < yh; yh--)
									if (gc = ac.yZ(yh, yg), ac.ja(gc) && !ac.yy(xv, gc)) return;
							return 1
						}(y3 + 3, y4 + 3)) {
						if (0 < ag.gs[xv]) {
							for (sd = sc = gc = void 0, sc = ag.iy[xv]; sc >= ag.ix[xv]; sc--)
								for (sd = ag.j0[xv]; sd >= ag.iz[xv]; sd--) gc = 4 * (sd * bS.fF + sc), ac.yv(xv, gc) && (ac.yw(gc), ag.gs[xv]--);
							xx()
						}
						return yk(y3 - 1, y4 - 1), !0
					} return !1
	}, this.yx = function(jY) {
		xv = jY, y2() ? y5(xs + sc * xr + bL.fV(xr, 2), xt + sd * xr + bL.fV(xr, 2)) : xx()
	}
}

function yz() {
	at.z0(), vV.setTransform(iF, 0, 0, iF, 0, 0), vV.imageSmoothingEnabled = iF < 3, vV.drawImage(bS.xT, aS.z1(), aS.z2()), bP.z3.vU(), vV.drawImage(z4, aS.z1(), aS.z2()), at.vU(), bN.vU(), af.vU(), (aD.nR ? (bh.vU(), bC) : (aN.vU(), aV.vU(), aR
	.vU(), bC.vU(), aw.vU(), aW.vU(), aS.vU(), aQ.vU(), bh.vU(), aU.vU(), aP.vU(), aM.vU(), aL.vU(), aX.vU(), be.vU(), av)).vU(), t.vU()
}

function z5(z6, i, j) {
	z6.clearRect(0, 0, i, j), z6.fillStyle = bB.nv, z6.fillRect(0, 0, i, j)
}

function z7(z6, i, j, z8) {
	z6.fillStyle = bB.ny, z6.fillRect(0, 0, i, z8), z6.fillRect(0, 0, z8, j), z6.fillRect(i - z8, 0, z8, j), z6.fillRect(0, j - z8, i, z8)
}

function z9(z6, fB, fD, i0, z8, gc, zA) {
	z6.fillStyle = bB.ny;
	var gc = Math.floor(i0 * gc),
		tG = (gc += (gc - z8) % 2, Math.floor((gc - z8) / 2)),
		i0 = Math.floor((i0 - gc) / 2);
	z6.fillRect(fB + i0, fD + i0 + tG, gc, z8), zA && z6.fillRect(fB + i0 + tG, fD + i0, z8, gc)
}

function zC() {
	this.dd = function() {
		8 === aD.kh && aN.zD()
	}, this.zE = function(zF) {
		var elo = aD.data.elo,
			je = (elo[zF] - elo[1 - zF]) / 10,
			je = 8 / (1 + Math.pow(2, je / 32)),
			je = Math.floor(10 * je + .5),
			zH = elo[zF] + je,
			zH = this.zJ(zH),
			elo = this.zJ(elo[1 - zF] - je);
		0 === zF ? aN.zL(zH, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zL(elo, zH, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.zJ = function(elo) {
		return 16e3 === (elo = bL.iC(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s7 = new zM, this.xW = new zN
}

function zN() {
	this.hq = !1;
	this.zR = [], this.zS = 100;
	var nO, nP, gap, i0, zO, zQ, zT = 0,
		zU = new Array(9),
		zV = [],
		zW = [],
		zX = 0,
		zY = 0,
		zZ = 0,
		za = 0;

	function zm() {
		zU.sort(function(fN, fO) {
			return fO.kU - fN.kU
		});
		for (var qY = "" + zU[0].pa, aB = 1; aB < 9; aB++) qY += "," + zU[aB].pa;
		for (aB = 0; aB < 9; aB++) qY += "," + zU[aB].kU;
		bj.eP.w0(120, qY)
	}
	this.dd = function() {
		for (var zb = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zb.length; aB++) {
			var color = 6 === zb[aB] ? bB.oO : bB.nw;
			this.zR.push(bA.canvas.zc(ab.get(3), zb[aB], color))
		}
		for (aB = 0; aB < aj.s7.zd; aB++) zW.push(aj.s7.ze - aj.s7.zd + aB);
		for (aB = 0; aB < aj.s7.zf; aB++) zW.push(aj.s7.zg + aB);
		var zh = aj.s7.zi(bK.zh);
		for (aB = 0; aB < zh.length; aB++) zW.push(zh[aB]);
		! function() {
			var aB, g = bj.eP.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zU[aB] = {
					pa: 1015 + aB,
					kU: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fW = parseInt(g[aB]),
						ec = (fW = 0 <= fW && fW < aj.s7.ze ? fW : 0, parseInt(g[aB + 9]));
					ec = 0 <= ec && ec < 1e3 ? ec : 0, zU[aB] = {
						pa: fW,
						kU: ec
					}
				}
		}()
	}, this.show = function(le, lf, zn) {
		var aB;
		if (zX = le, zY = lf, zT = zn || 0, this.hq = !0, zV = [], 0 === zT)
			for (aB = 0; aB < 9; aB++) zV.push(zU[aB].pa);
		else {
			var fO = 49 * zT,
				zn = fO - 49;
			for (zn >= zW.length && (zT = 1, zn = 0, fO = 49), aB = zn = (fO = Math.min(fO, zW.length)) - 49; aB < fO; aB++) zV.push(zW[aB])
		}
		zV.push(1024);
		zn = zV.length, i0 = Math.floor((a0.a1.iD() ? .075 : .0468) * h.iE), gap = Math.floor(i0 / 3), (zZ = 10 * (zO = i0 + gap)) > h.i && (zZ = h.i, gap = (zO = zZ / 10) - (i0 = 3 * zO / 4)), zQ = bL.fV(zn, 10) + !!(zn % 10), (za = zQ * zO) > h
			.j && (za = h.j, gap = (zO = za / zQ) - (i0 = 3 * zO / 4)), zn = .5 * gap;
		nO = Math.min(Math.max(le - .5 * zZ + zn, zn), h.i - zZ + zn), nP = Math.min(Math.max(lf - .5 * za + zn, zn), h.j - za + zn)
	}, this.hH = function(le, lf, player) {
		if (!this.hq) return !1;
		if (this.zp(le, lf)) {
			le = bL.iC(bL.fV(le - nO + .5 * gap, zO), 0, 9);
			if ((le += 10 * bL.iC(bL.fV(lf - nP + .5 * gap, zO), 0, 9)) >= zV.length) return aL.s8(), !0;
			lf = zV[le];
			if (1024 === lf) return this.show(zX, zY, zT + 1), !0;
			! function(pa) {
				for (var aB = 0; aB < 9; aB++) zU[aB].kU = Math.floor(.99 * zU[aB].kU);
				for (aB = 0; aB < 9; aB++)
					if (pa === zU[aB].pa) return zU[aB].kU = Math.min(zU[aB].kU + 30, 999), zm();
				zU.splice(5, 0, {
					pa: pa,
					kU: Math.max(zU[4].kU, 30)
				}), zU.pop(), zm()
			}(lf), player === aD.eo ? b8.hU.pZ(lf) : b8.gQ.po(lf, player)
		}
		return aL.s8(), !0
	}, this.zp = function(le, lf) {
		return !(le < nO - .5 * gap || lf < nP - .5 * gap || nO + zZ - .5 * gap <= le || nP + za - .5 * gap <= lf)
	}, this.vU = function() {
		vV.fillStyle = bB.nv, vV.fillRect(nO - .5 * gap, nP - .5 * gap, zZ, za);
		for (var hw = .5 * bc.zq, f4 = (vV.lineWidth = bc.zq, vV.strokeStyle = vV.fillStyle = bB.ny, vV.strokeRect(nO - .5 * gap + hw, nP - .5 * gap + hw, zZ - 2 * hw, za - 2 * hw), vV.imageSmoothingEnabled = !0, zV.length), aB = 0; aB <
			f4; aB++) this.zr(zV[aB], vV, nO + aB % 10 * zO, nP + bL.fV(aB, 10) * zO, i0);
		vV.imageSmoothingEnabled = !1
	}, this.zr = function(pa, i6, fB, fD, i0) {
		var ei;
		pa >= 1024 - aj.s7.zd ? (ei = i0 / this.zS, i6.setTransform(ei, 0, 0, ei, fB, fD), i6.drawImage(this.zR[pa - 1024 + aj.s7.zd], 0, 0), i6.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qr.textAlign(i6, 1), bA.qr.textBaseline(i6, 1), i6.font = bA.qr
			.si(0, .89 * i0), i6.fillText(aj.s7.zs(pa), fB + .5 * i0, fD + (.35 - bA.qr.zt + .56) * i0))
	}
}

function zM() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zd = 13, this.zf = this.emojis.length, this.zg = 676, this.ze = 1024, this.zu = this.emojis.indexOf("💀"), this.zv = this.zu + 1, this.zw = this.emojis.indexOf("🥇"), this.zx = this.emojis.indexOf("😊"), this.zs = function(fW) {
		return fW < this.zg ? String.fromCharCode(55356, 56806 + bL.fV(fW, 26), 55356, 56806 + fW % 26) : this.emojis[Math.min(fW - this.zg, this.zf - 1)]
	}, this.zi = function(qY) {
		for (var f4 = qY.length - 2, g = [], aB = 0; aB < f4; aB++) {
			var zy = qY.charCodeAt(aB) - 56806,
				zz = qY.charCodeAt(aB + 2) - 56806;
			0 <= zy && zy < 26 && 0 <= zz && zz < 26 && (g.push(26 * zy + zz), aB += 3)
		}
		return g
	}, this.a00 = function(fW) {
		return fW < this.zg
	}, this.a01 = function(fW) {
		return fW >= 1024 - this.zd
	}, this.a02 = function(fW) {
		return fW >= this.zg && fW < this.zg + this.zv
	}
}

function c3() {
	this.tB = new a03, this.wu = new a04, this.ww = new a05, this.dd = function() {
		this.tB.dd()
	}
}

function a04() {
	this.x9 = function(qY) {
		for (var f4 = qY.length, i = bD, aB = 0; aB < f4; aB++) i.a8(16, qY.charCodeAt(aB))
	}
}

function a03() {
	var a06 = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (a06[0] = 45, a06[37] = 95, aB = 0; aB < 10; aB++) a06[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a06[aB + 11] = 65 + aB, a06[aB + 38] = 97 + aB
	}, this.tD = function(a07) {
		for (var wz = bH, x7 = new Uint8Array(a07), aB = 0; aB < a07; aB++) x7[aB] = wz.pz(6);
		return x7
	}, this.tC = function(x7) {
		for (var f4 = x7.length, a08 = a06, g = [], aB = 0; aB < f4; aB++) g.push(String.fromCharCode(a08[x7[aB]]));
		return g.join("")
	}, this.a09 = function(value, a0A) {
		for (var a08 = a06, g = [], aB = 0; aB < a0A; aB++) g.push(String.fromCharCode(a08[value >> 6 * (a0A - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a0B, a0C, a0D;
	a0B = [32, 65, 191, 913, 931], a0C = [64, 127, 688, 930, 1155], a0D = new Array(a0B.length + 1);
	for (var aB = 0; aB < a0D.length; aB++) {
		a0D[aB] = 0;
		for (var fN = aB - 1; 0 <= fN; fN--) a0D[aB] += a0C[fN] - a0B[fN]
	}

	function a0J(ec) {
		for (var aB = a0B.length - 1; 0 <= aB; aB--)
			if (ec >= a0B[aB] && ec < a0C[aB]) return aB;
		return -1
	}
	this.x0 = function(qY) {
		return 0 !== (qY = qY.trim()).indexOf("Bot ") && 0 !== qY.indexOf("[Bot] ") && function(qY, a0G, a0H) {
			var f4 = (qY = qY.trim()).length;
			if (f4 < a0G || a0H < f4) return !1;
			for (var ec, a0I = 0, aB = 0; aB < f4; aB++)
				if (ec = qY.charCodeAt(aB), a0I += 65 <= ec && ec <= 90 || 1040 <= ec && ec <= 1071 ? 1 : 0, -1 === a0J(ec)) return !1;
			if (3 < a0I && a0I > Math.floor(f4 / 2)) return !1;
			return !0
		}(qY, 3, 20)
	}, this.a0K = function(qY) {
		for (var f4 = (qY = qY.trim()).length, g = [], aB = 0; aB < f4; aB++) {
			var ec, gc = a0J(ec = qY.charCodeAt(aB));
			g.push(a0D[gc] + ec - a0B[gc])
		}
		return g
	}, this.xE = function(g) {
		for (var ec, fO, qY = "", f4 = g.length, aB = 0; aB < f4; aB++)
			for (fO = 1; fO < a0D.length; fO++)
				if (g[aB] < a0D[fO]) {
					ec = a0B[fO - 1] + g[aB] - a0D[fO - 1], qY += String.fromCharCode(ec);
					break
				} return qY
	}, this.a0L = function(qY) {
		for (var g = this.a0K(qY), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0M = function(qY) {
		for (var g = new Array(Math.floor(qY.length / 3)), aB = 0; aB < qY.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qY.substring(aB, aB + 3));
		return this.xE(g)
	}, this.a0N = function(qY) {
		for (var fW, g = [qY.length], aB = 0; aB < qY.length; aB++) g[aB] = qY.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qY.length; aB++) aB === qY.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fW = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fW + (fW < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0O = function(qY) {
		for (var ec, result = "", aB = 0; aB < qY.length; aB++) 48 <= (ec = qY.charCodeAt(aB)) && ec < 58 ? result += String.fromCharCode(ec) : 65 <= ec && ec < 75 ? result += "0" + (ec - 65).toString() : 75 <= ec && ec < 91 ? result += (ec - 65)
			.toString() : 97 <= ec && ec < 123 && (result += (ec - 71).toString());
		return result
	}, this.a0P = function(qY) {
		for (var f4 = qY.length, g = [], aB = 0; aB < f4; aB++)(ec = qY.charCodeAt(aB)) < 58 ? g.push(qY[aB]) : (ec -= ec < 91 ? 65 : 71, g.push(String(bL.fV(ec, 10))), g.push(String(ec - 10 * bL.fV(ec, 10))));
		var f4 = g.length - 2,
			ec = 0,
			x7 = [];
		for (aB = 0; aB < f4; aB += 3) x7[ec++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return x7
	}, this.a0Q = function() {
		for (var eA, a0R = "", aB = 0; aB < 6; aB++) eA = 48 + ay.random() % 36, eA += 58 <= eA ? 39 : 0, a0R += String.fromCharCode(eA);
		return a0R
	}
}

function a05() {
	this.a0K = function(qY, xn, a0S) {
		for (var a0T = [], f4 = qY.length, max = 0, aB = 0; aB < f4; aB++) {
			var fW = qY.charCodeAt(aB);
			a0T.push(fW), max = Math.max(max, fW)
		}
		var xo = max < 128 ? 7 : 16;
		for (a0S.a8(xn, f4), a0S.a8(1, +(16 == xo)), aB = 0; aB < f4; aB++) a0S.a8(xo, a0T[aB])
	}
}

function dA() {
	this.a0U = new a0V, this.result = new a0W, this.a0X = new a0Y, this.a0Z = new a0a, this.a0b = new a0c, this.a0d = new a0e, this.dd = function() {
		this.result.dd()
	}
}

function a0Y() {
	this.a0f = function() {
		for (var f4 = al.kv, a0g = al.l0, a0h = [], aB = 0; aB < f4; aB++) {
			var gc = a0g[aB];
			bA.gQ.a0i(gc) && a0h.push(gc)
		}
		return a0h
	}, this.a0j = function() {
		if (0 === bg.km[aD.a0k]) return this.a0l();
		bh.kQ(aD.a0k);
		for (var a0h = [], f4 = bO.fZ[0], fi = bO.fi, aB = 0; aB < f4; aB++) {
			var gc = fi[aB];
			bA.gQ.a0i(gc) && a0h.push(gc)
		}
		return a0h
	}, this.a0l = function() {
		var gc = m0[0];
		return bA.gQ.a0i(gc) ? [gc] : []
	}, this.a0m = function(a0h) {
		for (var f4 = a0h.length, eT = 0, gs = ag.gs, aB = 0; aB < f4; aB++) eT += gs[a0h[aB]];
		return eT
	}
}

function a0V() {
	function a0o() {
		if (2 === aD.a0s) return 1;
		aw.a0t(), aD.a0s = 2, aD.a0u = aD.a0v
	}

	function a0q() {
		bR.a0b.a0w(), aX.show(1 === aD.a0x, !1, 2 === aD.a0x), bR.result.a0w(), bR.a0d.eX(), bR.a0Z.eX(), bR.a0Z.a0y(), aN.a0z(!0), aN.a10(247), aN.a10(956), aN.a10(957), aV.mk(!0), aW.mk(!0), aw.mk(), bC.a11(), aD.hD && bf.a12.a13(), bf.dk = !0, bb
			.a14(), a0.a1.setState(0)
	}
	this.a0n = function() {
		a0o() || (aD.a0p = 2, a0q())
	}, this.a0r = function() {
		a0o() || (aD.a0p = 1, a0q())
	}
}

function a0a() {
	this.eX = function() {
		var a1C;
		2 === aD.a0p ? (aN.a15(0, 59), aH.nX(2700)) : aD.kh < 7 ? (a1C = bg.km[aD.a0k], a1C = bg.a1E[a1C], aQ.a1F(L(27, [a1C]), 2, 1, 12), aN.a1G(0, L(28, [a1C]), 40, 0, bB.ny, bB.nv, -1, !1), aH.nX(2700)) : 8 === aD.kh ? (aD.a0x ? aN.a15(aD.a1A,
			2) : aN.a15(1 - aD.eo, 3), aD.a1B.zE(aD.a1A), aH.nJ(aD.a1A, 2700, !1, 0)) : 9 === aD.kh ? (aN.a1H(), aH.nX(2700)) : (aN.a1I(aD.a1A), aH.nJ(aD.a1A, 2700, !1, 0))
	}, this.a0y = function() {
		var qY;
		aD.hD || (qY = b0.y.a1J(), aD.kh < 7 ? qY += "/log/team" : 8 === aD.kh ? qY += "/log/1v1" : 9 === aD.kh ? qY += "/log/zombies" : qY += "/log/br", aN.a1G(720, qY, 736, 0, bB.ny, bB.oM, -1, !1))
	}
}

function a0e() {
	function a1T() {
		var tW;
		return 8 === aD.kh ? 0 : (tW = Math.floor(ag.a1U[aD.eo] / 50), (tW = Math.min(tW, 200)) / 100)
	}

	function a1L() {
		var tW = a1T();
		0 !== tW && aN.a1G(440, L(29, [tW.toFixed(2)]), 40, 0, bB.oG, bB.nv, -1, !1)
	}
	this.eX = function() {
		var a1M;
		0 === bR.result.a1K || 0 === bR.result.a0h.length || 8 === aD.kh ? bA.gQ.hG(aD.eo) && a1L() : (function(a1M) {
			7 !== aD.kh && 10 !== aD.kh || 0 !== aD.a0x && a1M && aN.a1G(600, L(33, [a1M.toFixed(2)]), 40, 0, bB.ny, bB.nv, -1, !1)
		}(a1M = function() {
			aN.a1G(520, L(30), 40, 0, bB.ny, bB.nv, -1, !1);
			for (var a0h = bR.result.a0h, f4 = a0h.length, gs = ag.gs, g = [], aB = 0; aB < f4; aB++) {
				var gc = a0h[aB];
				g.push({
					gc: gc,
					eT: gs[gc]
				})
			}
			g.sort((fN, fO) => fO.eT - fN.eT);
			var a1E = ag.a1V,
				eT = bR.result.a1W,
				tW = bR.result.a1K,
				qY = "",
				a1M = 0;
			for (aB = 0; aB < f4; aB++) {
				var ho = g[aB].eT * tW / (100 * eT),
					a1Y = a1E[g[aB].gc] + ": " + ho.toFixed(2) + "   ";
				g[aB].gc === aD.eo && (a1M = ho), 2 < aB && 4 !== f4 ? 3 === aB && (qY += "(" + L(31, [f4 - 3]) + ")") : qY += a1Y
			}
			aN.a1G(560, bA.rq.a1Z(qY), 40, 0, bB.oG, bB.nv, -1, !1), a1M ? aN.a1G(580, L(32, [a1M.toFixed(2) + " + " + a1T().toFixed(2)]), 40, 0, bB.oG, bB.nv, -1, !1) : bA.gQ.hG(aD.eo) && a1L();
			return a1M
		}()), 2 === aD.a0p || 7 <= aD.kh || function(a1M) {
			var a0h = bR.result.a0h,
				f4 = a0h.length,
				a1a = ag.a1a,
				gs = ag.gs,
				a1b = [];
			loop: for (var aB = 0; aB < f4; aB++) {
				var gc = a0h[aB],
					a1c = bA.rq.a1d(a1a[gc]);
				if (null !== a1c) {
					for (var a1e = gs[gc], fO = a1b.length - 1; 0 <= fO; fO--)
						if (a1c === a1b[fO].name) {
							a1b[fO].eT += a1e, a1b[fO].g.push({
								gc: gc,
								eT: a1e
							});
							continue loop
						} a1b.push({
						name: a1c,
						eT: a1e,
						g: [{
							gc: gc,
							eT: a1e
						}]
					})
				}
			}
			if (0 !== a1b.length) {
				a1b.sort((fN, fO) => fO.eT - fN.eT);
				var g = a1b[0].g,
					a1f = (g.sort((fN, fO) => fO.eT - fN.eT), "[" + a1b[0].name + "]"),
					a1g = 512 * bR.result.a1K / 26214400,
					lK = (aN.a1G(0, L(34, [a1f, a1g.toFixed(4)]), 40, 0, bB.ny, bB.nv, -1, !1), g.length),
					x5 = a1b[0].eT,
					a1h = 1e4 * a1g;
				for (aB = 0; aB < lK; aB++)
					if (g[aB].gc === aD.eo) {
						aN.a1G(600, L(35, [(a1h * g[aB].eT / (10 * x5)).toFixed(2)]), 40, 0, bB.ny, bB.nv, -1, !1), aN.a1G(640, L(36, [(.2 * a1M).toFixed(2), a1f]), 40, 0, bB.ny, bB.nv, -1, !1);
						break
					}
			}
		}(a1M))
	}, this.a1Q = function() {
		var a1R, xX;
		aD.kj || (a1R = ag, xX = aD.eo, 0 === a1R.a1S[xX]) || a1R.jT[xX] < 1 || 2 * a1R.qG[xX] > 3 * (a1R.jS[xX] + a1R.jT[xX]) || a1L()
	}
}

function a0W() {
	this.dd = function() {
		this.a1i = 0, this.a0h = [], this.a1W = 0, this.a1K = 0
	}, this.a0w = function() {
		var sT;
		aD.kj || (sT = this, 2 === aD.a0p ? sT.a0h = bR.a0X.a0f() : aD.hy ? sT.a0h = bR.a0X.a0j() : sT.a0h = bR.a0X.a0l(), sT.a1i = bi.a1k.a1l(), sT.a1W = Math.max(1, bR.a0X.a0m(sT.a0h)), b8.gQ.px(), 8 === aD.kh ? bR.result.a1K = 0 : sT.a1K =
			100 * bR.result.a1i * (1 + aD.a1n))
	}
}

function a0c() {
	this.a0w = function() {
		if (2 === aD.a0p) aD.a0x = 2;
		else {
			if (8 === aD.kh) bA.gQ.jm(0) || 0 === ag.my[0] ? aD.a1A = 1 : bA.gQ.jm(1) || 0 === ag.my[1] ? aD.a1A = 0 : aD.a1A = +(ag.gs[1] > ag.gs[0]);
			else {
				if (aD.hy) {
					var kx = bh.a1p();
					if (aD.a0k = kx, bg.km[kx]) return void(aD.a0x = +(bg.f2[aD.eo] === kx))
				}
				aD.a1A = m0[0]
			}
			aD.a0x = +(aD.a1A === aD.eo)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.wD = null, this.wE = null, this.wF = null, this.wL = null, this.a1 = new a1q, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.wE = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wF = mwIOSdataX, self.wL = window.webkit.messageHandlers.iosCommandA, dw = self
					.wF.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var wD;
				try {
					if (!(wD = window.localStorage)) return;
					wD.setItem("tls7", "1"), wD.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wD = wD
			}(this)
	}
}

function a1q() {
	this.a1u = function() {
		bj.sJ.wb(), bj.sJ.wc(), b0.y.close(0, 3255), 0 === a0.id ? a0.wD && a0.wD.clear() : 1 === a0.id ? a0.wE.saveString(199, "") : 2 === a0.id && a0.wL.postMessage("clear")
	}, this.a1v = function() {
		2 === a0.id ? a0.wL.postMessage("showConsentForm") : 1 === a0.id && a0.wE.setState(7)
	}, this.a1w = function() {
		this.setState(14)
	}, this.iD = function() {
		return 1 === bj.eP.w1(2)
	}, this.a1x = function() {
		bj.eP.w0(102, "")
	}, this.setState = function(a1y) {
		1 === a0.id && 5 <= a0.dw && a0.wE.setState(a1y)
	}, this.a2 = function() {
		var a1z;
		1 === a0.id && 7 <= a0.dw ? a0.wE.setState(5) : ((a1z = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1z.toString())
	}, this.eN = function() {
		0 !== a0.id && (1 === a0.id ? a0.wE.prepareAd("8646194357") : 2 === a0.id && (0 === a0.dw ? a0.wL.postMessage("prepare ad 2904813909") : a0.wL.postMessage("loadAds 2904813909")))
	}, this.eU = function(eT) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.dw && (a0.wE.presentAd(eT), !0) : 2 === a0.id && 0 !== a0.dw && (a0.wL.postMessage("showAd"), !0))
	}, this.dm = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a20 + "' target='_blank'>" + bK
			.a20 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.od)]))
	}
}

function dU() {
	function a23(e) {
		lj(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a26()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oL)]))
	}

	function a2E(e) {
		lj(e), t.u(4, 5, new v(L(38), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a2A(e), !0))
	}

	function a2A(e) {
		var qY = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qY : 4527 === e ? "Player already in lobby" + qY : 4530 === e ? "Lobby Timeout" + qY : 4528 === e ? "Lobby Kick: Another login detected." + qY : 4540 === e ?
			"You have been kicked." + qY : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qY : 4555 === e ? "Invalid Account Error. Please Try Again." + qY : 4557 <= e && e <= 4560 ?
			"Please try again later!" + qY : "Unknown error" + qY
	}

	function lj(e) {
		a28(e), t.y.z()
	}

	function a28(e) {
		var a1y = aa.a27();
		6 === a1y ? b0.y.a2G(e) : bn.a24 ? (t.x(), bn.uY(), b0.y.close(b0.y.a25, 3256)) : 8 === a1y && aD.a2H(!0)
	}
	this.p = [], this.a21 = function(a22, e) {
		if (1 === a22 && __fx.customLobby.isActive() && 6 !== aa.a27() && __fx.customLobby.setActive(!1), this.p.push(e), 8 === t.t8 && 0 === a22)
			if (4211 === e) a23(e);
			else {
				if (bn.a24 && (4495 === e || 4480 === e) && b0.y.a25 !== a22) return void t.a26();
				if (8 !== aa.a27() && a28(), 4480 === e) return bj.sJ.wd(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a2A(e), !0))
			}
		else {
			var a1y = aa.a27();
			if (6 === a1y) {
				if (4211 === e) return void a23(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560)) return void aZ.a2B(a22)
			} else {
				if (!bn.a24) return 8 === a1y ? void(a22 !== b0.y.a2C || aD.kj || 1 !== aD.a0s || aD.hD || aN.a2D(L(39, [e]))) : void 0;
				if (a22 !== b0.y.a25) return
			}
			a2E(e)
		}
	}, this.a2F = function(e) {
		this.p.push(e), 8 === aa.a27() ? aD.kj || 1 !== aD.a0s || aN.a2D(L(39, [e])) : a2E(e)
	}, this.s = function() {
		this.p.push(3268), lj(3268)
	}
}

function d4() {
	var a2I, a2J, a2K = -15e3,
		a2L = !1;

	function hH(e) {
		a2f() || (a2L = !0, a2g(e, 1), b0.y.a2h(b0.y.a2C), a2i(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2U(e) {
		a2K = bf.eS, a2g(e, 1), b0.y.a2h(b0.y.a2C), 0 < e.touches.length && (a2I = Math.floor(h.k * e.touches[0].clientX), a2J = Math.floor(h.k * e.touches[0].clientY), au.a2U(e) || a2i(a2I, a2J))
	}

	function a2i(fB, fD) {
		t.hH(fB, fD), 0 === aD.a0s ? aa.hH(fB, fD) : bC.a2j(fB, fD) || be.hH(fB, fD) || aX.hH(fB, fD) || aL.a2k(fB, fD) || aP.hH(fB, fD) || 0 <= aM.hH(fB, fD) || aw.hH(fB, fD) || bJ.a2l(fB, fD) || aL.a2m(fB, fD)
	}

	function a2Q(e) {
		a2f() || (a2L = !0, a2g(e, 1), a2n(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2V(e) {
		a2K = bf.eS, a2g(e, 1), 0 < e.touches.length && (a2I = Math.floor(h.k * e.touches[0].clientX), a2J = Math.floor(h.k * e.touches[0].clientY), au.a2V(e) || a2n(a2I, a2J))
	}

	function a2n(fB, fD) {
		t.a2Q(fB, fD), 0 === aD.a0s ? aa.a2Q(fB, fD) : (bT.hB(fB, fD), be.a2Q(fB, fD) || (aM.a2Q(fB, fD), aL.hq() ? aL.a2Q(fB, fD) : aR.hI ? aR.a2Q(fB) && (bf.dk = !0) : (aV.a2Q(fB, fD), aS.nT && aS.a2Q(fB, fD) && (bf.dk = !0))))
	}

	function a2S(e) {
		a2f() || (a2g(e, 1), a2o(), 0 === aD.a0s ? (aa.click(-1024, -1024), aT.rs()) : (aV.a2p(-1024, -1024), aM.a2Q(-1024, -1024), aR.a2q(), aS.nT = !1))
	}

	function a2R(e) {
		a2f() || (a2g(e, 1), a2r(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2O && (bJ.a2O = !1, e.preventDefault()))
	}

	function click(e) {
		a2f() || a2g(e, 1)
	}

	function a2W(e) {
		a2K = bf.eS, a2g(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0s ? aS.nT = !1 : au.a2s() || (a2r(a2I, a2J, !1), bJ.a2O && (bJ.a2O = !1, e.preventDefault()))
	}

	function a2X(e) {
		a2K = bf.eS, a2g(e, 1), a2r(a2I, a2J, !1), bJ.a2O && (bJ.a2O = !1, e.preventDefault())
	}

	function a2Y(e) {}

	function a2Z(e) {}

	function a2a(e) {
		a2f() || a2g(e, 0)
	}

	function a2r(fB, fD, a2t) {
		a2o(), 0 === aD.a0s ? aa.click(fB, fD) : (aV.a2p(fB, fD), be.a2p(), aR.a2q(), aS.nT = !1, aL.click(fB, fD, a2t) ? bf.dk = !0 : aM.a2R(fB, fD))
	}

	function a2o() {
		t.a2o()
	}

	function a2T(e) {
		var fB, fD, deltaY;
		a2f() || (a2g(e, 1), b0.y.a2h(b0.y.a2C), fB = Math.floor(h.k * e.clientX), fD = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2T(fB, fD, deltaY), 0 === aD.a0s ? aa.a2T(fB, fD, deltaY) : aV.a2T(fB, fD,
			deltaY) || (aR.a2u(fB, fD) ? aR.a2T(deltaY) && (bf.dk = !0) : aS.a2T(fB, fD, deltaY)))
	}

	function a2b(e) {
		a2g(e, 0)
	}

	function a2g(e, id) {
		0 === id && t.hq() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a27() && e.preventDefault()
	}

	function a2c(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2f() || 0 < h.sq || (e = e.code) && e.length && (bX.ec(e, 18) ? ar.a2w(3) : bX.ec(e, 22) ? ar.a2w(0) : bX.ec(e, 20) ? ar.a2w(1) : bX.ec(e, 24) ? ar.a2w(2) : bX.ec(e, 10) ? aR.a2x(31 / 32) : bX.ec(e, 8) ? aR.a2x(32 / 31) : bX.ec(e, 6) ? aR
			.a2x(7 / 8) : bX.ec(e, 4) ? aR.a2x(8 / 7) : bX.ec(e, 14) ? 0 !== aD.a0s && aS.a2T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.ec(e, 16) ? 0 !== aD.a0s && aS.a2T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.ec(e, 0) ?
			aD.a0s && bT.hC(0) : bX.ec(e, 2) ? aD.a0s && bT.hC(1) : bX.ec(e, 30) ? aD.a0s && bT.hC(2) : bX.ec(e, 26) ? aD.a0s && bT.hk() : bX.ec(e, 28) && aD.a0s && bT.hp())
	}

	function a2d(e) {
		if (!a2f() && !(0 < h.sq || bf.eS < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2y(1) || "Space" === code && t.a2y(0))) return bn.a24 ? bn.ue.a2y(code) ? void 0 : void("Escape" === code && bJ.fX()) : void(8 !== aa.a27() && aa.a2y(e) ? bf.dk = !0 : "Escape" ===
				code ? bJ.fX() : bX.ec(code, 18) ? ar.a2z(3) : bX.ec(code, 22) ? ar.a2z(0) : bX.ec(code, 20) ? ar.a2z(1) : bX.ec(code, 24) ? ar.a2z(2) : bX.ec(code, 12) ? bC.a30(!aD.nR) : "Space" === code && aD.a0s && (aM.hE && aM.a31(), aD
					.hD) && bC.a32(!1))
		}
	}

	function a2e() {
		"hidden" !== document.visibilityState && (bf.dk = !0)
	}

	function a2f() {
		return a2K + 15e3 > bf.eS
	}

	function resize() {
		h.a34()
	}
	this.a2M = 0, this.a2N = "", this.a2O = !1, this.dd = function() {
		a2P.addEventListener("mousedown", hH, {
			passive: !1
		}), a2P.addEventListener("mousemove", a2Q, {
			passive: !1
		}), a2P.addEventListener("mouseup", a2R, {
			passive: !1
		}), a2P.addEventListener("click", click, {
			passive: !1
		}), a2P.addEventListener("mouseleave", a2S, {
			passive: !1
		}), a2P.addEventListener("wheel", a2T, {
			passive: !1
		}), a2P.addEventListener("touchstart", a2U, {
			passive: !1
		}), a2P.addEventListener("touchmove", a2V, {
			passive: !1
		}), a2P.addEventListener("touchend", a2W, {
			passive: !1
		}), a2P.addEventListener("touchcancel", a2X, {
			passive: !1
		}), a2P.addEventListener("dragover", a2Y), a2P.addEventListener("drop", a2Z), a2P.addEventListener("dblclick", a2a), document.addEventListener("contextmenu", a2b), document.addEventListener("keydown", a2c), document.addEventListener(
			"keyup", a2d), document.addEventListener("visibilitychange", a2e), window.addEventListener("resize", resize)
	}, this.a2l = function(fB, fD) {
		return !!bC.hH(fB, fD) || !!(aV.hH(fB, fD) || aS.hH(fB, fD) || aR.hH(fB, fD) || aN.hH(fB, fD))
	}, this.a33 = a2f, this.rJ = function() {
		return !a2L || 0 < a2K
	}, this.fX = function() {
		if (!t.hq()) return 8 === aa.a27() ? aD.nR ? void bC.a30(!1) : be.hq ? void be.a31() : void aM.a31() : void(7 !== aa.a27() && 6 === aa.a27() && aZ.a35());
		t.a2y(2)
	}
}

function bz() {
	this.qr = new a36, this.qz = new a37, this.gQ = new a38, this.rq = new a39, this.z6 = new a3A, this.a3B = new a3C, this.canvas = new a3D, this.color = new a3E, this.a3F = new a3G, this.dd = function() {
		this.qr.wa()
	}
}

function a37() {
	this.xV = function(g) {
		g.fill(0)
	}, this.a3H = function(g) {
		for (var f4 = g.length, aB = 0; aB < f4; aB++) g[aB] = []
	}, this.a3I = function(zy, a3J) {
		for (var zz = bO.fe, aB = 0; aB < 3; aB++) zz[aB] = a3J * zy[aB];
		return zz
	}, this.a3K = function(zy, zz, a3L) {
		for (var je = 0, aB = 0; aB < 3; aB++) je += Math.abs(zy[aB] - zz[aB]);
		return a3L <= je
	}, this.a3M = function(zy, a3N) {
		for (var aB = 0; aB < 3; aB++) zy[aB] = bL.iC(zy[aB] + a3N, 0, 255);
		return zy
	}, this.a3O = function(g, tS, tT) {
		tT = tT || g.length - 1;
		for (var a3P = 0, aB = tS = tS || 0; aB <= tT; aB++) a3P += g[aB];
		return a3P
	}, this.a3Q = function(g, a3R) {
		for (var aB, a3S, f4 = g.length, a3T = [], fN = f4 - 1; 0 <= fN; fN--) {
			for (aB = a3S = 0; aB < f4; aB++) a3R(g[aB]) < a3R(g[a3S]) && (a3S = aB);
			f4--, a3T.push(g[a3S]), g[a3S] = g[f4], g.pop()
		}
		return a3T
	}, this.min = function(g) {
		var aB, fW, f4 = g.length;
		if (0 === f4) return 0;
		for (fW = g[0], aB = 1; aB < f4; aB++) fW = Math.min(fW, g[aB]);
		return fW
	}, this.max = function(g) {
		var f4 = g.length;
		if (0 === f4) return 0;
		for (var fW = g[0], aB = 1; aB < f4; aB++) fW = Math.max(fW, g[aB]);
		return fW
	}, this.a3U = function(g, fW) {
		for (var f4 = g.length, gX = 0, aB = 0; aB < f4; aB++) gX += g[aB] > fW;
		return gX
	}, this.a3V = function(a3W, a3X, min) {
		for (var f4 = a3X[0], aB = f4 - 1; 0 <= aB; aB--) a3W[aB] < min && (a3W[aB] = a3W[--f4]);
		a3X[0] = f4
	}, this.a3Y = function(g, f4, value) {
		for (var aB = 0; aB < f4; aB++) g[aB] -= value
	}, this.a3Z = function(g) {
		for (var f4 = g.length, aB = 0; aB < f4; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3a = function(qY, g, a3b) {
		g.fill(0);
		for (var tW = qY.split(","), f4 = Math.min(tW.length, g.length), aB = 0; aB < f4; aB++) g[aB] = Math.min(parseInt(tW[aB]), a3b)
	}, this.a3c = function(qY, g, rn) {
		g.fill("");
		for (var tW = qY.split('"'), f4 = Math.min(tW.length, 2 * g.length), hw = 0, aB = 1; aB < f4; aB += 2) g[hw++] = tW[aB].slice(0, rn)
	}, this.a3d = function(g, gX) {
		if (0 === gX) g.fill(0);
		else {
			var a3P = this.a3O(g),
				f4 = g.length;
			if (0 === a3P) g.fill(bL.fV(gX, f4));
			else
				for (var aB = 0; aB < f4; aB++) g[aB] = bL.fV(gX * g[aB], a3P);
			if (0 === (a3P = this.a3O(g))) g[1] = gX;
			else
				for (var hw = 0; a3P++ < gX;) g[hw = (hw + 1) % f4] && g[hw]++
		}
	}, this.a3e = function(g) {
		if (!g) return 0;
		var f4 = g.length;
		if (0 === f4) return 0;
		for (var fW = g[f4 - 1], aB = f4 - 2; 0 <= aB; aB--)
			if (g[aB] !== fW) return aB + 2;
		return 1
	}, this.a3f = function(g) {
		for (var a3P = 0, aB = 0; aB < g.length; aB++) a3P += g[aB].length;
		return a3P
	}, this.a3g = function(a3h) {
		for (var g = [], aB = 0; aB < a3h.length; aB++) g = g.concat(a3h[aB]);
		return g
	}, this.has = function(g, fW) {
		for (var f4 = g.length, aB = 0; aB < f4; aB++)
			if (g[aB] === fW) return !0;
		return !1
	}
}

function a3D() {
	this.zc = function(a3i, eB, a3j) {
		var i0 = a3i.height,
			a3k = bA.qr.xL(i0, i0),
			i6 = bA.qr.getContext(a3k);
		return function(i, i6, a3j) {
			i6.fillStyle = a3j, i6.beginPath(), i6.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i6.fill()
		}(i0, i6, a3j), i6.drawImage(a3i, -eB * i0, 0), a3k
	}, this.a3m = function(a3n) {
		var i6, i3, i0 = a3n.height;
		return a3n.width === i0 && (i3 = (i6 = bA.qr.getContext(a3n, !0)).getImageData(0, 0, i0, i0), bA.a3B.a3o(i3.data, i0, i0, .9), i6.putImageData(i3, 0, 0)), a3n
	}
}

function a3E() {
	this.a3p = function(fW) {
		return [fW >> 12 & 63, fW >> 6 & 63, 63 & fW]
	}, this.a3q = function(fW) {
		for (var g = this.a3p(fW), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a3r = function(fW) {
		fW = this.a3q(fW);
		return bA.color.nq(fW[0], fW[1], fW[2])
	}, this.a3s = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nq = function(eA, tW, fO) {
		return "rgb(" + eA + "," + tW + "," + fO + ")"
	}, this.ns = function(eA, tW, fO, fN) {
		return "rgba(" + eA + "," + tW + "," + fO + "," + fN.toFixed(3) + ")"
	}, this.rL = function(ec) {
		for (var g = ec.split("(")[1].split(","), fd = bO.fd, aB = 0; aB < 3; aB++) fd[aB] = parseInt(g[aB]);
		return 4 === g.length ? fd[3] = 255 * parseFloat(g[3].slice(0, -1)) : fd[3] = 255, fd
	}, this.rM = function(a3t, f7) {
		for (var g = a3t.slice(a3t.indexOf("(") + 1, a3t.indexOf(")")).split(","), fd = bO.fd, aB = 0; aB < 3; aB++) fd[aB] = bL.iC(parseInt(g[aB].trim(), 10) + f7, 0, 255);
		return 3 === g.length ? this.nq(fd[0], fd[1], fd[2]) : (a3t = parseFloat(g[3].trim()), this.ns(fd[0], fd[1], fd[2], a3t = 0 === a3t ? .3 : a3t))
	}, this.v9 = function(a3u, a3v) {
		for (var je = 0, aB = 0; aB < 3; aB++) je += Math.abs(a3v[aB] - a3u[aB]);
		if (!(240 <= je))
			for (aB = 0; aB < 3; aB++) a3v[aB] = a3u[aB] + (a3u[aB] < 128 ? 80 : -80)
	}, this.a3w = function(g) {
		for (var qY = "#", aB = 0; aB < 3; aB++) {
			var eA = g[aB].toString(16);
			qY += 1 === eA.length ? "0" + eA : eA
		}
		return qY
	}, this.a3x = function(qY) {
		var eA, tW;
		return qY.length < 7 ? bB.np : (eA = parseInt(qY.slice(1, 3), 16), tW = parseInt(qY.slice(3, 5), 16), qY = parseInt(qY.slice(5, 7), 16), this.nq(eA, tW, qY))
	}
}

function a3A() {
	this.a3y = function(qY, font, maxWidth) {
		if (font && (vV.font = font), vV.measureText(qY).width <= maxWidth) return qY;
		for (var aB = qY.length - 1; 1 <= aB; aB--)
			if (qY = qY.substring(0, aB), vV.measureText(qY + "...").width <= maxWidth) return qY + "...";
		return "..."
	}
}

function a3G() {
	var a40 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a41 = function(eS) {
		var a43, qY = new Date(eS.getTime() - 6e4 * eS.getTimezoneOffset()).toUTCString();
		return qY.length < 12 || (qY = qY.substring(5, qY.length), 0 === (eS = eS.getTimezoneOffset())) ? qY : (a43 = (eS < 0 ? "+" : "-") + bL.fV(Math.abs(eS), 60), 0 == (eS = Math.abs(eS) % 60) ? qY + a43 : qY + a43 + ":" + (eS < 10 ? "0" :
			"") + eS)
	}, this.a44 = function(eS) {
		var qY = eS.toUTCString();
		return qY.length < 12 ? qY : function(eS) {
			return a40[eS.getUTCDay()]
		}(eS) + ", " + qY.substring(5, qY.length - 4)
	}
}

function a36() {
	var a46 = null;
	this.zt = 0, this.wa = function() {
		var fW = bj.eP.data[5].value;
		a46 = "px " + fW, "system-ui" !== fW && (a46 += ", system-ui"), this.zt = hz(32, 32, ["a", "b", "m"], 200, a46)
	}, this.xL = function(i, j) {
		var ec = document.createElement("canvas");
		return ec.width = i, ec.height = j, ec
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(z6, i, j) {
		return z6.getImageData(0, 0, i, j)
	}, this.si = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a46 : 1 === type ? "bold " + size + a46 : 2 === type ? "lighter " + size + a46 : 3 === type ? "italic " + size + a46 : 4 === type ? "oblique " + size + a46 : 5 === type ? "small-caps " +
			size + a46 : "small-caps bold " + size + a46
	}, this.textAlign = function(i6, id) {
		i6.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i6, id) {
		i6.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.r1 = function(e, code, color) {
		color = this.r0(bc.sk) + " solid " + (color || bB.ny);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tY = function(e, fB, fD, i, j) {
		e = e.style;
		e.left = this.tZ(fB), e.top = this.tZ(fD), e.width = this.tZ(i), e.height = this.tZ(j)
	}, this.qs = function(fW) {
		return 1 + fW * a0.a1.iD()
	}, this.sA = function(na, gd) {
		return na * this.qs(void 0 === gd ? .5 : gd) * h.iE / h.k
	}, this.tX = function(na, gd) {
		return na * this.qs(void 0 === gd ? .5 : gd) * h.iE
	}, this.tE = function(na, gd, a47) {
		return this.qs(gd) * Math.min(na * h.iE, a47 * h.i) / h.k
	}, this.r0 = function(fW) {
		return fW.toFixed(1) + "px"
	}, this.tZ = function(fW) {
		return this.uu(fW).toFixed(1) + "px"
	}, this.uu = function(fW) {
		return fW / h.k
	}, this.a49 = function(sy, a4A) {
		for (var qY = "<ul>", f4 = sy.length, aB = 0; aB < f4; aB++) qY += "<li>" + sy[aB] + ": <a href='" + a4A[aB] + "' target='_blank'>" + a4A[aB] + "</a></li>";
		return qY += "</ul>"
	}, this.a4B = function(a4C) {
		return "<a href='" + a4C + "' target='_blank'>" + a4C + "</a>"
	}, this.a4D = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.v7 = function(e) {
		var eT = e.textContent;
		bA.rq.a4E(eT, "✔") || (1 === eT.length ? e.textContent = "✔" : e.textContent = eT + " ✔", setTimeout(function() {
			e.textContent = eT
		}, 500))
	}, this.measureText = function(qY) {
		return vV.measureText(qY).width
	}, this.tO = function(a4F) {
		a4F.style.overflowX = "auto", a4F.style.overflowY = "hidden", a4F.style.whiteSpace = "nowrap", a4F.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tb = this.scrollLeft, e.preventDefault())
		}), a4F.addEventListener("scroll", function() {
			this.tb = this.scrollLeft
		})
	}
}

function a38() {
	this.hF = function(a1y) {
		return 0 === a1y ? 1 === aD.a0s && aD.hS : 1 === a1y ? 1 === aD.a0s && !aD.hS : 2 === aD.a0s
	}, this.hG = function(player) {
		return 0 !== ag.my[player] && 2 !== ag.a4G[player]
	}, this.a4H = function(player) {
		return player === aD.eo && 2 !== ag.a4G[player]
	}, this.l3 = function(player, jY) {
		return player !== jY && (0 === bg.f2[player] || bg.f2[player] !== bg.f2[jY])
	}, this.mA = function() {
		return al.kv < 2 ? 0 : aD.hy ? 1 < bh.a4I() : ag.gs[m0[1]]
	}, this.a4J = function() {
		var kv = al.kv;
		if (0 !== kv) {
			if (!aD.hy) return !this.jm(m0[0]);
			for (var f2 = bg.f2, kx = bh.ky(), l0 = al.l0, aB = kv - 1; 0 <= aB; aB--) {
				var gc = l0[aB];
				if (f2[gc] === kx && !this.jm(gc)) return 1
			}
		}
		return 0
	}, this.a4K = function(player) {
		return player === aD.eo
	}, this.a4L = function(jY, na) {
		return ag.h6[aD.eo] < na * ag.h6[jY]
	}, this.jm = function(player) {
		return player >= aD.kP || 2 === ag.a4G[player]
	}, this.lN = function(player) {
		return 0 !== ag.my[player]
	}, this.a0i = function(player) {
		return player < aD.kP
	}, this.qE = function(a4M, a4N) {
		return a4M !== a4N
	}, this.gT = function(player, fW) {
		var min;
		return fW = this.a4O(player, fW), ag.h6[player] += fW, ag.a4P[player] && (min = Math.min(ag.a4P[player], ag.h6[player]), ag.a4P[player] -= min, ag.h6[player] -= min), fW
	}, this.a4O = function(player, fW) {
		var a4Q = ag.h6[player];
		return fW = Math.min(fW, ag.gs[player] * aD.a4R - a4Q), fW = Math.min(fW, aD.a4S - a4Q), Math.max(fW, 0)
	}, this.mX = function(player, ig, a4T, a4U) {
		var a4Q = ag.h6[player],
			ig = bL.fV(a4Q * (ig + 1), 1024),
			a4T = bL.fV(a4T * a4Q, 1024),
			ig = Math.min(ig, a4Q - a4T);
		return 10 === aD.kh && (ig = b4.a4W(player, ig)), bO.fb[0] = ig, bO.fb[1] = a4T, a4U <= ig
	}, this.pi = function(player, pQ, pP) {
		var player = ag.h6[player],
			a4V = bL.fV(64 * player, 1024);
		return pQ = Math.min(pQ, player - a4V), pQ = this.a4O(pP, pQ), bO.fb[0] = pQ, bO.fb[1] = a4V, 1 <= pQ
	}, this.a4X = function(player, pQ, pP) {
		var player = ag.h6[player],
			a4V = bL.fV(64 * player, 1024);
		return pQ = Math.min(pQ, player - a4V), this.a4O(pP, pQ)
	}, this.pk = function(pQ, pP) {
		return pQ = this.a4O(pP, pQ), bO.fb[0] = pQ, bO.fb[1] = 0, 1 <= pQ
	}, this.ie = function(player, a4Y) {
		return bL.fV(ag.h6[player] * (a4Y + 1), 1024)
	}, this.a4Z = function(player, a4T) {
		a4T = bL.fV(a4T * ag.h6[player], 1024);
		bO.fb[1] = a4T, ag.h6[player] -= a4T
	}, this.gR = function(player, a4a) {
		var fp, fr, fO = ag.h6[player];
		return a4a <= fO ? ag.h6[player] -= a4a : (ag.h6[player] = 0, fr = ag.a4P[player] + (fp = 5 * ((fO = a4a - fO) >> 2)), bd.gU(player, fp - fO, 12), fr <= aD.a4b ? ag.a4P[player] = fr : (ag.a4P[player] = aD.a4b, bd.gU(player, fr - aD.a4b,
			18))), a4a
	}, this.lb = function(player, ig) {
		var h6 = ag.h6,
			a4Q = h6[player],
			ig = bL.fV(a4Q * (ig + 1), 1024),
			a4V = Math.max(bL.fV(a4Q, 10), 1e3);
		return (ig = Math.min(ig, a4Q - a4V)) < 0 ? (h6[player] = 0, a4V = Math.min(1e3, a4Q + aD.a4b - ag.a4P[player]), bO.fb[1] = a4V, ag.a4P[player] += a4V - a4Q, 0) : (bO.fb[1] = a4V, 10 === aD.kh && (ig = b4.a4W(player, ig)), h6[player] -=
			a4V + ig, ig)
	}, this.mZ = function(player) {
		ag.h6[player] -= bO.fb[0] + bO.fb[1]
	}, this.qF = function(player, jY) {
		return (jY = Math.min(jY, aD.f1)) < aD.f1 && 0 === ag.my[jY] && (jY = aD.f1), (bO.f0[0] = jY) === aD.f1 || bs.ex(player, jY)
	}, this.qI = function(player, pP) {
		return 0 !== ag.my[pP] && !bs.ex(player, pP)
	}, this.a4c = function(player, a4d) {
		for (var gc, f4 = al.kv, a4e = 0, a4f = m0, aB = 0; aB < f4; aB++)
			if (gc = a4f[aB], !this.jm(gc)) {
				if (player === gc) return !0;
				if (++a4e > a4d) return !1
			} return !1
	}, this.lw = function(gc) {
		var a4g = aD.hy ? bh.kw() : ag.gs[m0[0]];
		return a4g >= bL.fV(gc * aD.k9, 100)
	}, this.a4h = function(fW, min, max) {
		return Math.floor(bL.iC(isNaN(fW) ? 0 : Number(fW), min, max))
	}
}

function a3C() {
	this.a4i = function(canvas, a4j, a4k) {
		var i = canvas.width,
			j = canvas.height,
			ec = bA.qr.xL(i, j),
			i6 = bA.qr.getContext(ec, !0),
			canvas = (i6.drawImage(canvas, 0, 0), i6.getImageData(0, 0, i, j));
		return a4j(canvas.data, i, j, a4k), i6.putImageData(canvas, 0, 0), ec
	}, this.a4l = function(xW, i, j) {
		for (var fB = i - 1; 0 <= fB; fB--)
			for (var fD = j - 1; 0 <= fD; fD--) {
				var aB = 4 * (fB + fD * i);
				xW[3 + aB] = xW[aB], xW[aB] = xW[1 + aB] = xW[2 + aB] = 255
			}
	}, this.a4m = function(xW, i, j) {
		for (var fB = i - 1; 0 <= fB; fB--)
			for (var fD = j - 1; 0 <= fD; fD--) {
				var aB = 4 * (fB + fD * i);
				xW[1 + aB] > xW[2 + aB] + 10 && (xW[3 + aB] = xW[aB], xW[1 + aB] = xW[2 + aB])
			}
	}, this.a4n = function(xW, i, j, a4k) {
		for (var gap = Math.floor(Math.min(i, j) * a4k), fB = 0; fB < i; fB++)
			for (var aB, fD = 0; fD < j; fD++)(fB < gap || fD < gap || i - gap <= fB || j - gap <= fD) && (xW[3 + (aB = 4 * (fB + fD * i))] = 255 - 255 * (xW[1 + aB] - xW[aB]) / (255 - xW[aB]))
	}, this.a4o = function(xW, i, j, a4k) {
		for (var fB = i - 1; 0 <= fB; fB--)
			for (var fD = j - 1; 0 <= fD; fD--) {
				var aB = 4 * (fB + fD * i);
				xW[aB] = a4k[0], xW[1 + aB] = a4k[1], xW[2 + aB] = a4k[2]
			}
	}, this.a4p = function(xW, i, j, a4k) {
		for (var gap = Math.floor(i * a4k), fB = 0; fB < i; fB++)
			for (var aB, fD = 0; fD < j; fD++)(fB < gap || fD < gap || i - gap <= fB || j - gap <= fD) && (xW[aB = 4 * (fB + fD * i)] = xW[1 + aB] = xW[2 + aB] = 0)
	}, this.a4q = function(xW, i, j) {
		for (var fD, aB, fB = i - 1; 0 <= fB; fB--)
			for (fD = j - 1; 0 <= fD; fD--) 200 < xW[1 + (aB = 4 * (fB + fD * i))] && xW[1 + aB] - 20 > xW[aB] && xW[1 + aB] - 20 > xW[2 + aB] ? xW[aB] + xW[2 + aB] < 40 ? xW[3 + aB] = 0 : (xW[3 + aB] = xW[aB], xW[aB] = 255, xW[1 + aB] = 255, xW[
				2 + aB] = 255) : xW[aB] < 50 && xW[1 + aB] < 50 && xW[2 + aB] < 50 && (xW[aB] + xW[1 + aB] + xW[2 + aB] < 50 ? xW[3 + aB] = 180 : xW[3 + aB] = 180 + Math.floor(75 * (xW[aB] + xW[1 + aB] + xW[2 + aB] - 50) / 100))
	}, this.a4r = function(xW, i, j) {
		for (var fD, aB, fB = i - 1; 0 <= fB; fB--)
			for (fD = j - 1; 0 <= fD; fD--) xW[1 + (aB = 4 * (fB + fD * i))] > xW[aB] + 20 && xW[1 + aB] > xW[2 + aB] + 20 && xW[aB] + xW[2] < 40 && (xW[3 + aB] = 255 - xW[1 + aB], xW[aB] = xW[1 + aB] = xW[2 + aB] = xW[aB])
	}, this.a3o = function(xW, i, j, a4k) {
		for (var eA = i >> 1, fB = 0; fB < i; fB++)
			for (var fD = 0; fD < j; fD++) Math.sqrt((fB - eA) * (fB - eA) + (fD - eA) * (fD - eA)) > a4k * eA && (xW[4 * (fB + fD * i) + 3] = 0)
	}
}

function a39() {
	var a4s = {
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
		a4t = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rr = function(ee) {
		return ee.replace(a4t, function(match) {
			return a4s[match] || match
		})
	}, this.a09 = function(fW) {
		var aB, a4u, a4v, a4w, a4x;
		if (fW < 0) return "-" + this.a09(Math.abs(fW));
		if (fW < 1e3) return fW.toString();
		for (a4u = Math.floor(Math.log(fW + .5) / Math.log(10)) + 1, a4v = Math.floor((a4u - 1) / 3), a4x = (a4w = fW.toString()).substring(a4u - 3, a4u), aB = 1; aB < a4v; aB++) a4x = a4w.substring(a4u - 3 * (aB + 1), a4u - 3 * aB) + " " + a4x;
		return a4w.substring(0, a4u - 3 * a4v) + " " + a4x
	}, this.a4y = function(gc, a4u) {
		return gc.toFixed(a4u) + "%"
	}, this.a4z = function(fW, a50) {
		return fW.toFixed(bL.iC(Math.floor((void 0 === a50 ? 3 : a50) - Math.log10(Math.max(fW, 1))), 0, 8))
	}, this.a51 = function(fW, na, a4u) {
		return (fW * na).toFixed(a4u)
	}, this.a1d = function(username) {
		var f8, et = username.indexOf("[");
		return !(et < 0) && 1 < (f8 = username.indexOf("]")) - et && f8 - et <= 8 ? username.substring(et + 1, f8).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1d;
	this.a52 = function(qY) {
		for (var fN = Math.floor(.5 * qY.length + .5), ng = Math.floor(.5 * (fN - 1)), aB = 0; aB < ng; aB++)
			for (var fO = -1; fO < 2; fO += 2) {
				var ec = fN + fO * aB;
				if (" " === qY[ec]) return [this.a1Z(qY.substring(0, ec)), this.a53(qY.substring(ec))]
			}
		return [qY.substring(0, fN), qY.substring(fN)]
	}, this.a53 = function(qY) {
		for (var f4 = qY.length, aB = 0; aB < f4; aB++)
			if (" " !== qY[aB]) return qY.substring(aB);
		return qY
	}, this.a1Z = function(qY) {
		for (var aB = qY.length - 1; 0 <= aB; aB--)
			if (" " !== qY[aB]) return qY.substring(0, aB + 1);
		return qY
	}, this.a54 = function(qY, a55) {
		return qY.split("(")[0] + "(🧈 " + a55.toFixed(2) + ")"
	}, this.startsWith = function(qY, a56) {
		return qY.substring(0, a56.length) === a56
	}, this.a4E = function(qY, a56) {
		var f4 = qY.length;
		return qY.substring(f4 - a56.length, f4) === a56
	}, this.a57 = function(g, a58, a59) {
		var qY = "",
			f4 = g.length - 1;
		a59 = a59 || "";
		for (var aB = 0; aB < f4; aB++) qY += a59 + g[aB] + a59 + ",", (aB + 1) % a58 == 0 && (qY += "\n");
		return qY += a59 + g[f4] + a59
	}, this.a5A = function(qY, zy, zz) {
		return qY.replace(new RegExp(zy, "g"), zz)
	}
}

function a5B() {
	this.eb = function(player, eq) {
		aI.yq(player, bM.fC(eq), bM.fE(eq)) && (bf.dk = !0), aD.kj && this.eX()
	}, this.eX = function() {
		aD.hS = !1;
		for (var aB = 0; aB < aD.kP; aB++) 0 !== ag.my[aB] && 0 === ag.gs[aB] && aI.yx(aB);
		0 !== ag.my[aD.eo] ? (bd.mu[7] = ag.gs[aD.eo], bd.mu[8] = ag.h6[aD.eo], aR.a5C(), aW.a5D(), aD.hD || aH.nI(ag.ix[aD.eo] - 5, ag.iz[aD.eo] - 5, ag.iy[aD.eo] + 5, ag.j0[aD.eo] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a5E(18), af.a5F(),
			af.mk(!0), bP.y.a5G(), aL.s8(), aD.qD = null, bb.a5H = !0, bb.a5I(), aD.kj && a0.a1.setState(1)
	}
}

function c1() {
	this.f1 = 512, this.a4S = 15e8, this.a5J = 1e9, this.a4b = 5e4, this.a5K = 512, this.gO = 2, this.eo = 0, this.kP = 0, this.a0v = 0, this.kl = 0, this.a0u = 0, this.y1 = 512, this.y6 = 512, this.a4R = 150, this.kj = !0, this.hD = 0, this.a0s = 0,
		this.k9 = 0, this.nR = !1, this.hS = 0, this.a5L = 0, this.hy = !1, this.y8 = 0, this.y9 = 0, this.kh = 0, this.a1n = 0, this.qD = null, this.a1B = new zC, this.a5M = 30, this.a0p = 0, this.a0x = 0, this.a1A = 0, this.a0k = 0, this.data =
		new a5N, this.a5O = new a5P, this.a5Q = 0, this.a5R = "", this.a5S = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0v = this.kP = this.data.humanCount, this.kj = 1 === this.a0v && !__fx.customLobby.isActive(), this.nR = !1, this.hD = this.data.isReplay, this.kh = 0 === this.data.gameMode ? [7, 10, 8][this.data
					.battleRoyaleMode
				] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1n = this.data.isContest, this.hy = this.kh < 7 || 9 === this.kh, this.kh = 10 === this.kh && this.kj ? 7 : this.kh, this.kh = 8 === this.kh && 2 !== this.kP ? 7 : this
				.kh, az.dd(), this.y8 = this.data.numberTeams, this.data.teamPlayerCount ? this.y9 = +(0 < this.data.teamPlayerCount[0]) : (this.y9 = 0, this.hy && this.kj && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount
					.fill(1, 1, this.y8 + 1), aD.a5O.a5T())), this.a5M = this.kP <= 2 ? 30 : this.kP <= 50 ? 40 : 50, this.a5L = this.hS = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.qD =
				this.hS ? new a5B : null, this.y1 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.kP) : 1 === l.du ? this.y1 = this.kP : this.y1 = this.data.playerCount,
				this.y6 = this.y1, this.kl = this.y1 - this.kP, this.a0u = 0, this.eo = this.data.selectedPlayer, this.a0p = 0, this.a0x = 0, this.a1A = 0, this.a0k = 0, ay.a5U(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a5V(), b8.pI
				.q1 = [], bg.dd(), this.a0s = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5W(), ac.de(), ap.a5X(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5Y(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5Z(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5a.putImageData(a5b, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g7(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a1B.dd(), bf.a5Y(), aH.nH(), 0 === ag.my[aD.eo] && aX.show(!1, !0), af.mk(!0), av.dd(), bf.dk = !0, this.hD || this.kj && this.hS || a0.a1.setState(1), this.a5Q = 0
		}, this.a2H = function(eR) {
			b9.qB.a5d.length ? this.a5R = b9.qB.a5d : this.a5R = b9.a5e.a0K(), !1 === __fx.customLobby.isActive() && b0.y.a5f(), bq.clear(), this.a0s = 0, bf.a5g(), a0.a1.setState(0), aa.setState(0), __fx.customLobby.isActive() || bU.eJ.show(eR),
				__fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a5Q ? t.y.a5h() : 1 === this.a5Q ? t.u(19) : t.u(5, 5)
		}, this.a5i = function() {
			return this.hD ? aM.hE || !bC.a5j : this.kj && (aM.hE || this.hS)
		}, this.a5k = function() {
			return 1 === this.a0s && !this.hS
		}
}

function a5N() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5l = null
}

function a5P() {
	this.a5T = function() {
		var a5m = aD.data;
		bA.qz.a3d(a5m.teamPlayerCount, a5m.playerCount), a5m.numberTeams = bA.qz.a3U(a5m.teamPlayerCount, 0), a5m.teamPlayerCount[0] && a5m.teamPlayerCount[7] && (a5m.teamPlayerCount[7] = 0, this.a5T())
	}, this.a5n = function() {
		var a5m = aD.data;
		a5m.mapType < 2 ? bS.a7(bS.a5o(a5m), a5m.mapSeed) : bS.a5p(a5m.canvas)
	}, this.a5q = function() {
		var a5m = aD.data;
		a5m.colorsData || (a5m.colorsData = new Uint32Array(1)), a5m.selectableColor && (a5m.colorsData[0] = bj.y.wY()), a5m.selectableName && (a5m.playerNamesData || (a5m.playerNamesData = new Array(1)), a5m.playerNamesData[0] = bj.eP.data[122]
			.value), a5m.a5l = new Uint32Array(1), a5m.a5l[0] = bG.tB.xB(bj.eP.data[105].value, 5)
	}, this.a5r = function() {
		aD.data = new a5N, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.f1), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a5s = [];
	this.pl = function(player, pP, a5t, a5u) {
		player === aD.eo || pP === aD.eo || !a5u && bA.gQ.jm(player) || bA.gQ.jm(pP) || this.a1G(ag.a1V[player] + " supported " + ag.a1V[pP] + " with " + bA.rq.a09(a5t) + " ressource" + (1 === a5t ? "." : "s."))
	}, this.a1G = function(qY, pa) {
		qY = {
			eS: aW.a5w(),
			qY: qY,
			pa: pa
		};
		a5s.push(qY), 30 === t.t8 && t.a5x().a1G(qY)
	}, this.clear = function() {
		a5s = [];
		var tW = t.a5y(30);
		tW && tW.clear()
	}, this.a5z = function() {
		return a5s
	}
}

function dT() {
	this.zq = 0, this.gap = 0, this.sk = 0, this.qx = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zq = .0022 * bA.qr.qs(.5) * h.iE, this.sk = this.zq / h.k, this.gap = Math.max(Math.floor((a0.a1.iD() ? .0114 : .01296) * h.iE), 2), this.qx = this.gap / h.k
	}
}

function dS() {
	this.a60 = function() {
		return a0.a1.iD() ? 2 : 1
	}
}

function cC() {
	var rQ, fB, fD, a61, a62, a63, eS, a64, a65, a66, a67, gap, zoom, pu, a68;

	function a6M(le, lf, ei) {
		ac.ez(ei) || -1 === (le = bN.lE.a6V(le, lf)) ? aN.a6U(ei) : aN.a6W(le)
	}

	function a6I(a64) {
		for (var aB = pu.length - 1; 0 <= aB; aB--)
			if (pu[aB] === a64) return 1
	}

	function a6G(a6D) {
		var aB, f4;
		if (-1 !== a6D)
			for (f4 = rQ.length, aB = 0; aB < f4; aB++)
				if (rQ[aB].hq && rQ[aB].fB + 1 === a6D % 4 && rQ[aB].fD + 1 === a6D >> 2) return aB;
		return -1
	}

	function a6E(le, lf) {
		var tW = gap / 2;
		return le < fB - a61 - 3 * tW || fB + 3 * a61 + 5 * tW < le || lf < fD - a61 - 3 * tW || fD + 2 * a61 + 3 * tW < lf ? -1 : 4 * (lf < fD - tW ? 0 : lf < fD + a61 + tW ? 1 : 2) + (le < fB - tW ? 0 : le < fB + a61 + tW ? 1 : le < fB + 2 * a61 +
			3 * tW ? 2 : 3)
	}
	this.a69 = function() {
		var aB, fO, a6C = [bB.oO, bB.oc, bB.nw, bB.oz, bB.oq];
		for (rQ = new Array(10), aB = 0; aB < 10; aB++) rQ[aB] = {
			id: aB,
			hq: !1,
			lM: 0,
			canvas: [],
			fB: 0,
			fD: 0
		};
		for (rQ[0].colors = [0, 1, 2, 3], rQ[0].fB = 0, rQ[0].fD = 0, rQ[1].colors = [1, 4], rQ[1].fB = 1, rQ[1].fD = 0, rQ[2].colors = [0, 1], rQ[2].fB = -1, rQ[2].fD = 0, rQ[3].colors = [0], rQ[3].fB = 0, rQ[3].fD = 0, rQ[4].colors = [0, 2],
			rQ[4].fB = 1, rQ[4].fD = 1, rQ[5].colors = [3], rQ[5].fB = 0, rQ[5].fD = -1, rQ[6].id = 20, rQ[6].colors = [0], rQ[6].fB = 1, rQ[6].fD = -1, rQ[7].id = 21, rQ[7].colors = [0], rQ[7].fB = 0, rQ[7].fD = 1, rQ[8].id = 16, rQ[8]
			.colors = [0], rQ[8].fB = 0, rQ[8].fD = 0, rQ[9].id = 10, rQ[9].colors = [4], rQ[9].fB = 2, rQ[9].fD = 0, aB = 0; aB < 10; aB++)
			for (fO = 0; fO < rQ[aB].colors.length; fO++) rQ[aB].canvas.push(function(id, a3j) {
				if (id < 20) return bA.canvas.zc(ab.get(3), id, a3j);
				var a3j = ab.get(3).height,
					a3k = bA.qr.xL(a3j, a3j),
					i6 = bA.qr.getContext(a3k);
				20 === id ? i6.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xW.zr(aj.s7.zg + aj.s7.zx, i6, 0, 0, a3j);
				return a3k
			}(rQ[aB].id, a6C[rQ[aB].colors[fO]]))
	}, this.a6B = function() {
		return rQ
	}, this.dd = function() {
		pu = [], fB = fD = eS = 0, a62 = a63 = -1e3, this.resize()
	}, this.resize = function() {
		a61 = Math.floor((a0.a1.iD() ? .075 : .0468) * h.iE), zoom = a61 / ab.get(3).height, gap = Math.floor(a61 / 3)
	}, this.a2k = function(le, lf) {
		return !!this.hq() && (bf.dk = !0, !!aj.xW.hH(le, lf, a65) || (le = function(le, lf) {
			a63 = a62 = -1e3;
			var a6F = a6G(a6E(le, lf));
			if (-1 === a6F) return 0;
			if (1 !== rQ[a6F].colors[rQ[a6F].lM])
				if (5 === a6F) {
					if (! function() {
							var eT = performance.now();
							a68 + 4e3 < eT && (pu = []);
							a68 = eT
						}(), a6I(a64)) return 1;
					pu.push(a64), 16 < pu.length && pu.shift()
				} else if (6 === a6F) {
				for (var aB = pu.length - 1; 0 <= aB; aB--) 0 === ag.my[pu[aB]] && pu.splice(aB, 1);
				0 < pu.length && (b5.a6J(1, pu, !0) && b8.gQ.pt(pu, a64), pu = [])
			} else if (2 === a6F) an.hi(a64) && b8.hU.pO(aR.hY(), a64);
			else if (3 === a6F) aD.hS && b8.hU.hV(a66);
			else if (0 === a6F)
				if (0 === rQ[0].lM) {
					if (aD.a5L && aW.a5w() < 350) return 1;
					bV.a6K(4), b8.hU.hb(aR.hY(), a64)
				} else b1.hc(a64, aR.hY());
			else if (1 === a6F) b8.hU.hg(aR.hY(), a66);
			else if (9 === a6F) b8.hU.hj(aR.hY());
			else {
				if (7 === a6F) return bV.a6K(0), aj.xW.show(le, lf), 2;
				if (4 === a6F) b5.a6J(0, [a64], !0) && b8.gQ.pq(a64);
				else {
					if (8 !== a6F) return 0;
					b8.hU.hX(aR.hY(), a67, a64)
				}
			}
			return 1
		}(le, lf), this.s8(), 2 === le && (aj.xW.hq = !0), 0 < le))
	}, this.a2m = function(le, lf) {
		this.hq() || (a62 = le, a63 = lf, eS = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hK(mouseX),
			coordY = bM.hM(mouseY),
			coord = bM.fR(coordX, coordY),
			coord = bM.eu(coord);
		bM.hN(coordX, coordY) && a6M(mouseX, mouseY, coord)
	}, this.click = function(le, lf, a2t) {
		var hJ = bM.hK(le),
			hL = bM.hM(lf),
			eq = bM.fR(hJ, hL),
			ei = bM.eu(eq);
		return !(!bM.hN(hJ, hL) || (hJ = (a0.a1.iD() ? .025 : .0144) * h.iE, hL = performance.now(), Math.abs(le - a62) > hJ) || Math.abs(lf - a63) > hJ || eS + 500 < hL) && (eS = hL, a2t ? (a6M(le, lf, ei), !1) : aM.hE || this.hq() || !bA.gQ.hG(
			aD.eo) || aD.hD ? (this.s8(), !1) : (aD.hS ? 0 <= (a66 = br.hT(eq)) && (rQ[3].hq = !0) : 2 === aD.a0s ? ac.ge(ei) && (a64 = ac.ew(ei), bA.gQ.jm(a64) || (rQ[0].hq = !0, rQ[0].lM = 1, rQ[7].hq = !0)) : (bN.hh.hi(aD.eo, eq) && (
			rQ[0].hq = !0, rQ[0].lM = 1, rQ[1].hq = !0, rQ[1].lM = 0, rQ[9].hq = !0, rQ[9].lM = 0), bN.he.hf(aD.eo, eq) && (rQ[0].hq = !0, rQ[0].lM = 1, rQ[1].hq = !0, rQ[1].lM = 1, a66 = bO.fg[7]), ac.f9(ei) ? (a67 = am.ef.eh(
			ei)) && (hJ = bM.eu(a67), rQ[8].hq = !0, a64 = ac.ev(hJ) ? aD.f1 : ac.ew(hJ)) : (ac.yv(aD.eo, ei) && (a65 = aD.eo, rQ[0].hq = !0, rQ[0].lM = 1, rQ[7].hq = !0), -1 !== (hL = br.hZ(eq)) && (ac.ev(hL << 2) ? (a64 = aD.f1,
			bs.ha(aD.eo) ? (rQ[0].hq = !0, rQ[0].lM = 0) : ad.gB(aD.eo) && (rQ[0].hq = !0, rQ[0].lM = 3)) : (a64 = ac.ew(hL << 2), rQ[0].lM = 1, rQ[5].hq = function(a64) {
			return !bA.gQ.jm(a64) && !a6I(a64) && b5.a6J(1, [a64], !1)
		}(a64), rQ[7].hq || bA.gQ.jm(a64) || (a65 = a64, rQ[7].hq = !0), rQ[4].hq = !bA.gQ.jm(a64) && !af.a6Q(a64) && b5.a6J(0, [a64], !1), rQ[6].hq = function(a64) {
			if (0 === pu.length) return !1;
			if (performance.now() > a68 + 4e3) return !(pu = []);
			return !a6I(a64) && ! function(a64) {
				var aB;
				if (aD.hy)
					for (aB = pu.length - 1; 0 <= aB; aB--)
						if (!bs.ex(a64, pu[aB])) return 1;
				return
			}(a64)
		}(a64), bs.ex(a64, aD.eo) ? (bs.hd(aD.eo, a64) ? (rQ[0].lM = 0, rQ[0].hq = !0) : ad.gB(aD.eo) && (rQ[0].lM = 3, rQ[0].hq = !0), rQ[0].hq = this.a6S()) : (rQ[2].hq = !0, an.hi(a64) ? rQ[2].lM = 0 : rQ[2].lM = 1,
			rQ[0].hq = !0))))), this.a6N(le, lf)))
	}, this.a6N = function(le, lf) {
		return fB = le - Math.floor(a61 / 2), fD = lf - Math.floor(a61 / 2), !!this.hq()
	}, this.a2Q = function(le, lf) {
		return !!this.hq() && (aj.xW.hq ? !aj.xW.zp(le, lf) && (aj.xW.hq = !1, bf.dk = !0) : function(sT, le, lf) {
			le = a6E(le, lf);
			if (0 <= a6G(le)) return !1;
			if ((1 === le || 6 === le) && 0 <= a6G(2)) return !1;
			if ((6 === le || 9 === le) && 0 <= a6G(10)) return !1;
			return sT.s8(), bf.dk = !0
		}(this, le, lf))
	}, this.s8 = function() {
		for (var aB = rQ.length - 1; 0 <= aB; aB--) rQ[aB].hq = !1, rQ[aB].lM = 0;
		aj.xW.hq = !1
	}, this.hq = function() {
		return this.a6S() || aj.xW.hq
	}, this.a6S = function() {
		for (var f4 = rQ.length, aB = 0; aB < f4; aB++)
			if (rQ[aB].hq) return !0;
		return !1
	}, this.vU = function() {
		if (this.hq())
			if (aj.xW.hq) aj.xW.vU();
			else {
				var aB, i6 = vV,
					fO = rQ,
					f4 = fO.length,
					a6a = (a61 + gap) / zoom;
				for (i6.imageSmoothingEnabled = !0, i6.setTransform(zoom, 0, 0, zoom, fB, fD), aB = 0; aB < f4; aB++) fO[aB].hq && vV.drawImage(fO[aB].canvas[fO[aB].lM], fO[aB].fB * a6a, fO[aB].fD * a6a);
				i6.imageSmoothingEnabled = !1, i6.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6b, a6c, a6d, a6e = -1;

	function a6f() {
		var a6g, z6 = canvas.getContext("2d", {
			alpha: !0
		});
		z6.clearRect(0, 0, j, j), z6.fillStyle = bB.nu, z6.fillRect(0, 0, j, j), 9 === a6c && (z6.fillStyle = bB.nz, z6.fillRect(0, 0, j, j)), z6.fillStyle = bB.ny, z6.fillRect(0, 0, j, 1), z6.fillRect(0, 0, 1, j), z6.fillRect(0, j - 1, j, 1), z6
			.fillRect(j - 1, 0, 1, j), a6g = .9 * j / ab.get(0).width, z6.imageSmoothingEnabled = !0, z6.setTransform(a6g, 0, 0, a6g, Math.floor((j - a6g * ab.get(0).width) / 2), Math.floor((j - a6g * ab.get(0).height) / 2)), z6.drawImage(ab.get(0),
				0, 0), z6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6i(le, lf) {
		if (!aM.hE) return le <= j + bc.gap && lf >= aR.fD ? 9 : -1;
		if (le <= 4 * j + bc.gap) {
			if (lf >= aR.fD) return 0;
			if (lf >= aR.fD - j - a6d * bc.gap) return 2
		} else if (le <= 7 * j + bc.gap && lf >= aR.fD - j - a6d * bc.gap) return 1;
		return -1
	}
	this.hE = !1, this.dd = function() {
		a6c = -1, this.hE = !1, a6d = a0.a1.iD() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6b = bA.qr.si(1, (a0.a1.iD() ? .5 : .45) * j), a6f()
	}, this.a31 = function() {
		this.hE = !this.hE, this.hE ? (bC.a30(!1), aD.hD && bC.a5j && bC.a32(!0), this.a6h(), 9 === a6c && (a6c = 0)) : (a6c = -1, a6f(), !aD.kj || 1 !== aD.a0s || aD.hS || aD.hD || a0.a1.setState(1)), bf.dk = !0
	}, this.a6h = function() {
		(aD.kj || aD.hD) && 1 === aD.a0s && (aV.mk(!0), aD.hS || setTimeout(function() {
			bb.a14()
		}, 0), a0.a1.setState(0))
	}, this.hH = function(le, lf) {
		return 0 <= (a6e = a6i(le, lf)) || !aM.hE || aD.kj || aD.hD || be.hq || aM.a31(), a6e
	}, this.a2Q = function(le, lf) {
		le = a6i(le, lf);
		le !== a6c && (a6c = le, this.hE || a6f(), bf.dk = !0)
	}, this.a2R = function(le, lf) {
		le = a6i(le, lf);
		return -1 !== le && a6e === le && (this.hE ? aD.nR ? (0 <= le && bC.a30(!1), !aD.hD) : (0 === le ? aD.a2H() : 1 === le ? this.a31() : 2 === le && t.u(1, 0), !0) : 9 === le && (this.a31(), !0))
	}, this.vU = function() {
		var i;
		this.hE ? (i = Math.floor(5.5 * j), vV.setTransform(1, 0, 0, 1, bc.gap, aR.fD), vV.fillStyle = bB.nu, vV.fillRect(0, 0, i, j), 0 === a6c ? (vV.fillStyle = bB.nz, vV.fillRect(0, 0, 4 * j, j)) : 1 === a6c && (vV.fillStyle = bB.nz, vV
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vV.fillStyle = bB.ny, vV.fillRect(0, 0, i, 1), vV.fillRect(0, 0, 1, j), vV.fillRect(4 * j, 0, 1, j), vV.fillRect(0, j - 1, i, 1), vV.fillRect(i - 1, 0, 1, j), vV.font = a6b, bA.qr
			.textBaseline(vV, 1), bA.qr.textAlign(vV, 1), vV.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a6m(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fD + .3 * j, i), i = 1, vV.setTransform(1, 0, 0, 1, bc.gap, aR.fD - i * a6d * bc.gap - i *
				j), vV.fillStyle = bB.nu, vV.fillRect(0, 0, 4 * j, j), a6c === i + 1 && (vV.fillStyle = bB.nz, vV.fillRect(0, 0, 4 * j, j)), vV.fillStyle = bB.ny, vV.fillRect(0, 0, 4 * j, 1), vV.fillRect(0, 0, 1, j), vV.fillRect(4 * j, 0, 1,
				j), vV.fillRect(0, j - 1, 4 * j, 1), vV.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), vV.setTransform(1, 0, 0, 1, 0, 0)) : vV.drawImage(canvas, bc.gap, aR.fD)
	}, this.qS = function(player) {
		return 0 !== ag.my[player] && 2 !== aD.a0s && !bA.gQ.jm(player)
	}, this.a6m = function(fB, fD, f4) {
		vV.setTransform(1, 0, 0, 1, fB, fD), vV.lineWidth = bc.zq, vV.strokeStyle = bB.ny, vV.beginPath(), vV.moveTo(0, 0), vV.lineTo(f4, f4), vV.moveTo(0, f4), vV.lineTo(f4, 0), vV.stroke()
	}
}

function cE() {
	var a6o, j, a6p, a6q, a6r, a6s, a6t, a6u, a6v;

	function z2() {
		return aR.a7D(aN.a79()) ? aw.hq ? __fx.settings.keybindButtons ? aR.fD - 2 * aR.j - 3 * a6p : aR.fD - aR.j - 2 * a6p : __fx.settings.keybindButtons ? aR.fD - aR.j - 2 * a6p : aR.fD - a6p : bC.a7D(aN.a7C()) ? aw.hq ? bC.z2() - aR.j - 2 * a6p :
			bC.z2() - a6p : aw.hq ? h.j - aR.j - (bk.a60() + 1) * a6p : h.j - bk.a60() * bc.gap
	}

	function a70(eT, qY, id, gc, a73, a74, l2, a75, a76, a77, a7H) {
		var aB, z6, a3k, qj, a7I = void 0 !== a76,
			i = Math.floor(aQ.measureText(qY, aN.a6b) + 1.5 * a6q + (a7I ? j : 1.5 * a6q));
		if (bf.dk = !0, a7H || bq.a1G(qY, a76), i + 2 * a6p + aR.j > h.i && !a7I && 50 !== id && 20 < qY.length) a70(eT, (a7H = bA.rq.a52(qY))[0], id, gc, a73, a74, l2, a75, a76, a77, !0), a70(eT, a7H[1], id, gc, a73, a74, l2, a75, a76, a77, !0);
		else if (a7H = i + (50 === id ? a6r : 0), (a3k = document.createElement("canvas")).width = i, a3k.height = j, (z6 = a3k.getContext("2d", {
				alpha: !0
			})).font = aN.a6b, bA.qr.textBaseline(z6, 1), bA.qr.textAlign(z6, 0), z6.clearRect(0, 0, i, j), z6.fillStyle = a74, z6.fillRect(0, 0, i, j), z6.fillStyle = a73, z6.fillText(qY, Math.floor(1.5 * a6q), Math.floor(j / 2)), a7I && (z6
				.imageSmoothingEnabled = !0, aj.xW.zr(a76, z6, i - j, 0, j)), 0 === (qj = {
				eS: eT,
				qY: qY,
				id: id,
				player: gc,
				canvas: a3k,
				a73: a73,
				a74: a74,
				i: i,
				a7A: a7H,
				l2: l2,
				a75: a75,
				a76: a76,
				a77: a77
			}).eS || 0 < a6o.length && 0 < a6o[0].eS) a6o.unshift(qj);
		else {
			for (aB = 1; aB < a6o.length; aB++)
				if (0 < a6o[aB].eS) return void a6o.splice(aB, 0, qj);
			a6o.push(qj)
		}
	}

	function a71(eA, tW, fO) {
		return "rgb(" + eA + "," + tW + "," + fO + ")"
	}

	function a7J(id, gX) {
		for (var f4 = a6o.length, aB = 0; aB < f4; aB++) a6o[aB].id === id && gX-- <= 0 && (a6o.splice(aB, 1), aB--, f4--)
	}

	function a7K(id, player) {
		for (var fI = !1, aB = a6o.length - 1; 0 <= aB; aB--) a6o[aB].id !== id || player !== aD.f1 && a6o[aB].player !== player || (a6o.splice(aB, 1), fI = !0);
		return fI
	}

	function a7g(qY) {
		a70(340, qY, 6, 0, a71(215, 245, 255), bB.nv, -1, !1)
	}
	this.a6w = "", this.dd = function() {
		var self;
		a6u = 0, a6t = a0.a1.iD() ? 7 : 12, a6s = {
			a0g: [0, 0, 0],
			a6x: [0, 0, 0],
			eI: [220, 180, 180],
			vT: [0, 0, 0],
			ec: [0, 0, 0]
		}, a6o = [], this.resize(), aD.hS && this.a15(0, 18), bS.xJ.xK[bS.ek].name.length && a7g(L(86, [bS.xJ.xK[bS.ek].name])), a7g(L(87, [bS.fF - 2 + "x" + (bS.fG - 2)])), a7g(L(88, [bA.rq.a09(ap.a7h)])), ap.a7h !== ap.a7i && a7g(L(89, [bA
			.rq.a09(ap.a7i) + " (" + bA.rq.a4y(100 * ap.a7i / ap.a7h, 1) + ")"
		])), 0 < ap.a7j && a7g(L(66, [bA.rq.a09(ap.a7j) + " (" + bA.rq.a4y(100 * ap.a7j / ap.a7h, 1) + ")"])), 0 < ap.a7k && a7g(L(90, [bA.rq.a09(ap.a7k) + " (" + bA.rq.a4y(100 * ap.a7k / ap.a7h, 1) + ")"])), 10 === aD.kh && a70(120, L(91),
			6, 0, a71(235, 255, 120), bB.nv, -1, !1), 0 !== (self = this).a6w.length && (a70(200, self.a6w, 0, 0, bB.ny, bB.nv, -1, !1), self.a6w = ""), aD.a1n && a70(340, L(44), 6, 0, a71(255, 200, 0), bB.nv, -1, !1)
	}, this.resize = function() {
		var a72, aB;
		if (j = (j = Math.floor((a0.a1.iD() ? .031 : .0249) * h.iE)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6b = bA.qr.si(1, this.fontSize), a6p = bc.gap, a6q = Math.floor(j / 5), 0 < a6o.length)
			for (a72 = a6o, a6o = [], aB = a72.length - 1; 0 <= aB; aB--) a70(a72[aB].eS, a72[aB].qY, a72[aB].id, a72[aB].player, a72[aB].a73, a72[aB].a74, a72[aB].l2, a72[aB].a75, a72[aB].a76, a72[aB].a77, !0);
		this.a78()
	}, this.a78 = function() {
		a6v = document.createElement("canvas");
		var qY = L(45),
			z6 = (a6r = aQ.measureText(qY, this.a6b) + 5 * a6q, a6v.height = j, a6v.width = a6r, a6v.getContext("2d", {
				alpha: !0
			}));
		z6.font = this.a6b, bA.qr.textBaseline(z6, 1), bA.qr.textAlign(z6, 1), z6.clearRect(0, 0, a6r, j), z6.fillStyle = bB.oL, z6.fillRect(0, 0, a6r, j), z6.fillStyle = bB.ny, z6.fillText(qY, Math.floor(a6r / 2), Math.floor(j / 2))
	}, this.a79 = function() {
		var f4;
		return aw.hq ? aw.i : 0 === (f4 = a6o.length) ? 0 : 1 === f4 ? a6o[0].a7A : a7B(a6o[0].a7A, a6o[1].a7A)
	}, this.a7C = function() {
		var f4 = a6o.length;
		return aw.hq ? f4 ? a7B(aw.i, a6o[0].a7A) : aw.i : 0 === f4 ? 0 : 1 === f4 ? a6o[0].a7A : 2 === f4 ? a7B(a6o[0].a7A, a6o[1].a7A) : a7B(a7B(a6o[0].a7A, a6o[1].a7A), a6o[2].a7A)
	}, this.hH = function(fB, fD) {
		for (var nO, a7E, a7F = z2(), aB = a6o.length - 1; 0 <= aB; aB--)
			if ((a7E = a7F - (aB + 1) * j) <= fD && fD < a7E + j) return 50 === a6o[aB].id ? fB >= h.i - a6r - a6p - a6o[aB].i && (fB >= h.i - a6r - a6p ? b8.gQ.pq(a6o[aB].player) : aH.nJ(a6o[aB].player, 800, !1, 0), !0) : fB >= h.i - a6o[aB].i -
				a6p && (736 === a6o[aB].id ? window.open("https://" + a6o[aB].qY, "_blank") : a6o[aB].a75 && (a6o[aB].a77 && a6o[aB].a77.fN ? (a7E = a6o[aB].a77.eq, nO = bM.fC(a7E) - 10, a7E = bM.fE(a7E) - 10, aH.nI(nO, a7E, 19 + nO, 19 +
					a7E)) : a6o[aB].a77 && a6o[aB].a77.fO ? aH.nK(a6o[aB].player, a6o[aB].a77.nL) : (aH.nJ(a6o[aB].player, 800, !1, 0), 0 <= a6o[aB].l2 && (nO = a6o[aB].l2, a6o[aB].l2 = a6o[aB].player, a6o[aB].player = nO))), !0);
		return !1
	}, this.a1G = function(eT, qY, id, gc, a73, a74, l2, a75, a76, a77) {
		a70(eT, qY, id, gc, a73, a74, l2, a75, a76, a77)
	}, this.a7G = function(r) {
		a70(300, r, 252, 0, bB.ny, bB.nv, -1, !1)
	}, this.a5E = function(id) {
		for (var aB = a6o.length - 1; 0 <= aB; aB--) a6o[aB].id === id && (a6o[aB].eS = 1)
	}, this.a15 = function(player, id) {
		0 === id ? (aQ.eb(player, 0), a7J(423, 2), a70(160, L(46, [ag.a1V[player]]), 423, player, "rgb(10,220,10)", bB.nv, -1, !1)) : 1 === id ? (a7K(50, aD.f1), aQ.eb(player, 1), a70(360, L(47, [ag.a1V[player]]), 0, player, bB.oe, bB.nv, -1, !
				0), aH.nJ(player, 2700, !1, 0)) : 2 === id ? (aQ.eb(player, 2), a70(0, L(48), 0, player, "rgb(10,255,255)", bB.nv, -1, !0), aH.nJ(player, 2700, !1, 0)) : 3 === id ? (aQ.eb(player, 2), a70(0, L(49, [ag.a1V[player]]), 0, player, bB
				.ny, bB.nv, -1, !0), aH.nJ(player, 2700, !1, 0)) : 4 === id ? this.a7L(1, player, player) : 5 === id ? bA.gQ.jm(aD.eo) || (function(id, mt) {
				var aB, a7V = 0,
					f4 = a6o.length;
				for (aB = 0; aB < f4; aB++)
					if (a6o[aB].id === id && mt <= ++a7V) return a6o.splice(aB, 1)
			}(1, 5), af.a7N(player) && a70(180, L(50, [ag.a1V[player]]), 1, player, a71(255, 200, 180), bB.nv, -1, !0), bA.gQ.a4L(player, 10) && (a7J(573, 0), a70(180, L(51, [ag.a1V[player]]), 573, player, bB.oe, bB.nv, -1, !0))) : 18 === id ?
			a70(255, L(52), 18, 0, bB.ny, bB.nv, -1, !1) : 21 === id ? a70(220, L(53), id, 0, bB.ny, bB.nv, -1, !1) : 22 === id ? this.a7L(2, player, player) : 59 === id && a70(0, L(54), id, 0, bB.oy, bB.nv, 0, !1)
	}, this.a2D = function(r) {
		a70(200, L(55, [r]), 94, 0, bB.ny, bB.oa, -1, !1)
	}, this.a1I = function(a7O) {
		if (aD.eo === a7O && !aD.kj && !aD.hD)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a70(0, "Your Win Count is now " + __fx.wins.count, 3, a7O, bB.ny, bB.nv, -1, !0);
		ag.gs[a7O] && (aQ.eb(a7O, 2), aD.kP < 100 ? a70(0, L(49, [ag.a1V[a7O]]), 3, a7O, bB.ny, bB.nv, -1, !0) : a70(0, L(56, [ag.a1V[a7O]]), 3, a7O, bB.ny, bB.nv, -1, !0))
	}, this.a6U = function(ei) {
		var qY, a7Q, a7P = "(" + bM.fC(ei >> 2) + ", " + bM.fE(ei >> 2) + ")",
			a75 = !1,
			player = 0;
		ac.ez(ei) ? ac.ev(ei) ? a7P = L(57, [a7P]) : (player = ac.ew(ei), aD.hD && !1 === __fx.hoveringTooltip.active && (aD.eo = player), qY = L(58, [bA.z6.a3y(ag.a1a[player], bA.qr.si(0, 10), 150)]) + "   ", qY = (qY += L(59, [bA.rq.a09(ag.h6[
				player])]) + "   ") + L(60, [bA.rq.a09(ag.gs[player])]) + "   ", aD.hy && (a7Q = bg.a1E[bg.km[bg.f2[player]]], qY += L(61) + ": " + a7Q + "   "), bA.gQ.jm(player) && (qY += L(62) + ": " + aE.ka[aE.hn[player]] + "   "), a7P =
			qY = (qY += L(63, [player]) + "   ") + L(64, [a7P]), a75 = !0) : a7P = ac.f9(ei) ? L(65, [a7P]) + "   #" + ac.em(ei) : L(66, [a7P]), bf.dk = !0, a7J(55, 0), a70(220, a7P, 55, player, bB.ny, bB.nv, -1, a75, void 0, void 0, !0)
	}, this.a6W = function(a7R) {
		var lK = bN.y,
			player = lK.mJ[a7R] >> 3,
			qY = (bf.dk = !0, a7J(55, 0), L(67, [ag.a1V[player]]) + "   ");
		a70(220, qY += L(59, [bA.rq.a09(lK.a7S[a7R])]), 55, player, bB.ny, bB.nv, -1, !0)
	}, this.pZ = function(pL, a7T, pa) {
		pL === aD.eo ? a70(175, " " + L(68, [ag.a1V[a7T]]) + ": ", 1001, a7T, a71(200, 255, 210), bB.nv, -1, !0, pa) : this.a7U(pL, pa)
	}, this.a7U = function(pL, pa) {
		a7J(1e3, 0), a70(175, ag.a1V[pL] + ": ", 1e3, pL, bB.ny, "rgba(5,60,25,0.9)", -1, !0, pa)
	}, this.a1H = function() {
		var r;
		aD.a0x ? (r = L(69), aQ.a1F(L(70), 2, 1, 12), a70(0, r, 40, 0, "rgb(10,220,10)", bB.nv, -1, !1)) : (r = L(71), aQ.a1F(L(72), 2, 0, 16), a70(0, r, 41, 0, bB.ny, bB.nv, -1, !1))
	}, this.zD = function() {
		var gX = ag.a1V,
			f7 = aD.data;
		a70(300, gX[0] + " [" + aD.a1B.zJ(f7.elo[0]) + "] vs " + gX[1] + " [" + aD.a1B.zJ(f7.elo[1]) + "]", 65, 0, bB.np, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7W = function(r) {
		a70(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7X = function(a7Y) {
		a70(0, L(a7Y ? 73 : 74), 247, 0, bB.ox, bB.nv, -1, !1)
	}, this.zL = function(zI, zK, a7Z) {
		var f7 = aD.data,
			gX = ag.a1V;
		a70(0, gX[0] + ": " + aD.a1B.zJ(f7.elo[0]) + " -> " + zI, 66, 0, bB.ny, a7Z[0], -1, !1), a70(0, gX[1] + ": " + aD.a1B.zJ(f7.elo[1]) + " -> " + zK, 66, 1, bB.ny, a7Z[1], -1, !1)
	}, this.pr = function(player, id) {
		0 === id ? a7K(50, player) ? (a70(128, L(75, [ag.a1V[player]]), 52, player, a71(180, 255, 180), bB.nv, -1, !0), af.qQ(player, 2, 255)) : a70(384, L(76, [ag.a1V[player]]), 51, player, a71(210, 210, 255), bB.nv, -1, !0) : a7K(51, player) ?
			(a70(128, L(77, [ag.a1V[player]]), 52, player, bB.ny, "rgba(60,120,10,0.9)", -1, !0), af.qQ(player, 2, 255)) : (a70(384, L(78, [ag.a1V[player]]), 50, player, bB.ny, "rgba(90,90,90,0.9)", -1, !0), af.qQ(player, 2, 96))
	}, this.pv = function(a0g, target) {
		var color = a71(210, 255, 210);
		1 < a0g.length ? a70(230, L(79, [a0g.length, ag.a1V[target]]), 66, target, color, bB.nv, -1, !0) : a70(230, L(80, [ag.a1V[a0g[0]], ag.a1V[target]]), 66, a0g[0], color, bB.nv, target, !0)
	}, this.a7a = function(player, target) {
		a70(230, L(81, [ag.a1V[player], ag.a1V[target]]), 66, player, bB.ny, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7b = function(id, gX) {
		a7J(id, gX)
	}, this.a10 = function(id, player) {
		a7K(id, void 0 === player ? aD.f1 : player)
	}, this.a7c = function(id) {
		for (var aB = a6o.length - 1; 0 <= aB; aB--)
			if (a6o[aB].id === id) return a6o[aB];
		return null
	}, this.pm = function(a5t, a7d, player) {
		2 !== ag.a4G[aD.eo] && a70(200, 1 === a5t ? L(82, [ag.a1V[player]]) : L(83, [bA.rq.a09(a5t), ag.a1V[player]]), 30, player, "rgb(190,255,190)", bB.nv, -1, !0)
	}, this.a7f = function(a5t, player) {
		2 !== ag.a4G[aD.eo] && (a7J(31, 0), a5t = " (" + bA.rq.a09(a5t) + ") 💸", a70(150, a5t = bA.gQ.jm(player) ? L(84) + a5t : L(85, [ag.a1V[player]]) + a5t, 31, player, bB.np, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0z = function(bu) {
		for (var ec = bf.kM(), aB = 2; 0 <= aB; aB--) 0 < a6s.vT[aB] && (bu || a6s.ec[aB] < ec - 220) && this.a7l(aB)
	}, this.a7l = function(id) {
		var qY, f4 = a6s.vT[id],
			player = a6s.a0g[id];
		a6s.vT[id] = 0, 1 === f4 ? (0 === id ? qY = L(92, [ag.a1V[player], ag.a1V[a6s.a6x[0]]]) : 1 === id ? qY = L(93, [ag.a1V[player]]) : 2 === id ? qY = L(94, [ag.a1V[player]]) : 3 === id && (qY = L(95, [ag.a1V[player]])), a7J(7, 0), a70(a6s
			.eI[id], qY, 7, a6s.a6x[id], bB.ny, bB.nv, -1, !0)) : (qY = L(0 === id ? 96 : 1 === id ? 97 : 98, [f4]), a7J(7, 0), a70(a6s.eI[id], qY, 7, player, bB.ny, bB.nv, -1, !1))
	}, this.a7L = function(id, hW, l2) {
		var ec = bf.kM(),
			f4 = a6s.vT[id] + 1;
		a6s.vT[id]++, a6s.a0g[id] = hW, a6s.a6x[id] = l2, 1 === f4 && (a6s.ec[id] = ec), (1 === f4 && (aD.a0v < 32 || 2 === aD.a0s) || 1 < f4 && (a6s.ec[id] < ec - 140 || 2 === aD.a0s)) && this.a7l(id)
	}, this.eX = function() {
		b2.eX();
		for (var je = (je = a6o.length - a6t) <= 1 ? 1 : je * je, aB = a6o.length - 1; 0 <= aB; aB--) 0 < a6o[aB].eS && (a6o[aB].eS -= je, a6o[aB].eS <= 0) && (bf.dk = !0, a6o.splice(aB, 1));
		! function() {
			var gX, aB;
			if (128 !== a6u && !(++a6u < 128))
				for (gX = 5, aB = al.kv - 1; 0 <= aB; aB--) 1 === ag.a4G[al.l0[aB]] && 0 < gX-- && a70(240, L(95, [ag.a1V[al.l0[aB]]]), 1, al.l0[aB], bB.np, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0z(!1)
	}, this.vU = function() {
		for (var y4, fD = z2(), aB = a6o.length - 1; 0 <= aB; aB--) y4 = fD - (aB + 1) * j, 50 === a6o[aB].id ? (vV.drawImage(a6o[aB].canvas, h.i - a6o[aB].i - a6r - a6p, y4), vV.drawImage(a6v, h.i - a6r - a6p, y4)) : vV.drawImage(a6o[aB].canvas,
			h.i - a6o[aB].i - a6p, y4)
	}
}

function cF() {
	var a7o, a7p, vW = "",
		xp = 0,
		xq = 0,
		a7n = -1,
		e6 = ["Team", "Zombie", "BR", "1v1"];

	function a7q() {
		for (var eT = new Date, a7r = eT.getUTCMinutes(), eT = eT.getUTCSeconds(), a7t = [], a7u = 0, aB = 0; aB < 6; aB++) a7t.push(a7u), a7t.push(a7u + 2), a7t.push(a7u + 5), a7t.push(a7u + 7), a7u += 10;
		for (var f4 = a7t.length, aB = 1; aB < f4 && !(a7r < a7t[aB]); aB++);
		aB %= f4;
		eT = (a7t[0] = 60) * (a7t[aB] - a7r) - eT;
		return eT !== a7n && (vW = e6[aB % 4] + " " + a7p + ": " + a7w(Math.floor(eT / 60)) + ":" + a7w(eT % 60), a7n = eT, xp = aQ.measureText(vW, a7o), xp += Math.floor(.4 * xq), 1)
	}

	function a7w(a7x) {
		return a7x < 10 ? "0" + a7x : String(a7x)
	}
	this.dd = function() {
		a7p = L(99)
	}, this.resize = function() {
		xp = Math.floor((a0.a1.iD() ? .53 : .36) * h.iE), xq = Math.floor(.065 * xp), a7o = bA.qr.si(1, Math.floor(.9 * xq)), a7n += 1e3, a7q()
	}, this.eX = function() {
		a7q() && (bf.dk = !0)
	}, this.vU = function(fD) {
		vV.lineWidth = 1 + Math.floor(xq / 15), vV.translate(h.i - xq, fD + xp), vV.rotate(-Math.PI / 2), vV.fillStyle = bB.ny, vV.fillRect(0, 0, xp, xq), vV.strokeStyle = bB.np, vV.strokeRect(0, 0, xp, xq + 10), vV.fillStyle = bB.np, vV.font =
			a7o, bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 1), vV.fillText(vW, Math.floor(xp / 2), Math.floor(.59 * xq)), vV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a5s, a7y, a7z, xq, a80, a81 = 0,
		a82 = 0;

	function a84(aB) {
		var a86 = !0,
			zy = bB.ny,
			i = (1 === a5s[aB].id ? a5s[aB].z6.fillStyle = bB.os : a5s[aB].jY === aD.f1 ? a5s[aB].z6.fillStyle = bB.o9 : (ac.a87(a5s[aB].jY), a5s[aB].z6.fillStyle = bA.color.ns(bO.fd[0], bO.fd[1], bO.fd[2], .87), 400 < bA.qz.a3O(bO.fd, 0, 2) && (
				a86 = !1, zy = bB.np)), a5s[aB].canvas.width),
			tF = (a5s[aB].z6.clearRect(0, 0, i, xq), a5s[aB].z6.fillRect(0, 0, i, xq), a5s[aB].z6.fillStyle = zy, ! function(z6, i, xq) {
				z6.fillRect(0, 0, i, 1), z6.fillRect(0, xq - 1, i, 1), z6.fillRect(0, 0, 1, xq), z6.fillRect(i - 1, 0, 1, xq)
			}(a5s[aB].z6, i, xq), a7y + 2 * xq < i && (a5s[aB].z6.fillRect(i - a7y - xq, 0, 1, xq), a5s[aB].z6.fillText(ag.a1V[a5s[aB].jY], Math.floor((i - a7y) / 2), Math.floor(.57 * xq))), 0 !== a5s[aB].id ? 0 : xq);
		a5s[aB].z6.fillText(bA.rq.a09(a5s[aB].hn), Math.floor(i - a7y / 2 - tF), Math.floor(.57 * xq)),
			function(aB, i, tF, a86) {
				a5s[aB].z6.fillStyle = a86 ? bB.o0 : bB.nw;
				a86 = Math.floor(a7y * a5s[aB].hn / a5s[aB].a8D);
				a5s[aB].z6.fillRect(Math.floor(i - a7y - tF), xq - a80, a86, a80)
			}(aB, i, tF, a86), 0 === a5s[aB].id ? (a8A(aB, i, a86, zy), function(aB, i, a86) {
				a5s[aB].z6.strokeStyle = a86 ? bB.oG : bB.oQ, a5s[aB].z6.fillRect(xq, 0, 1, xq);
				a86 = i - xq;
				a5s[aB].z6.beginPath(), a5s[aB].z6.moveTo(Math.floor(.3 * xq + a86), Math.floor(xq / 2)), a5s[aB].z6.lineTo(Math.floor(xq - .3 * xq + 0 + a86), Math.floor(xq / 2)), a5s[aB].z6.stroke(), a5s[aB].z6.beginPath(), a5s[aB].z6.moveTo(
					Math.floor(xq / 2 + a86), Math.floor(.3 * xq)), a5s[aB].z6.lineTo(Math.floor(xq / 2 + a86), Math.floor(xq - .3 * xq + 0)), a5s[aB].z6.stroke()
			}(aB, i, a86)) : a8A(aB, 2 * xq, a86, zy)
	}

	function a8A(aB, i, a86, zy) {
		a5s[aB].z6.strokeStyle = a5s[aB].a8E ? bB.o7 : a86 ? bB.oW : bB.oX, a5s[aB].z6.fillStyle = zy, a5s[aB].z6.fillRect(i - xq, 0, 1, xq), a5s[aB].z6.lineWidth = Math.max(Math.floor(xq / 12), 3), a5s[aB].z6.lineCap = "round";
		a86 = .35;
		i = xq + 1, a5s[aB].z6.beginPath(), a5s[aB].z6.moveTo(Math.floor(i - a86 * xq + 0), Math.floor(a86 * xq)), a5s[aB].z6.lineTo(Math.floor(i - xq + a86 * xq), Math.floor(xq - a86 * xq + 0)), a5s[aB].z6.stroke(), a5s[aB].z6.beginPath(), a5s[aB]
			.z6.moveTo(Math.floor(i - xq + a86 * xq), Math.floor(a86 * xq)), a5s[aB].z6.lineTo(Math.floor(i - a86 * xq + 0), Math.floor(xq - a86 * xq + 0)), a5s[aB].z6.stroke()
	}

	function a8Q(g, a8O) {
		for (var hn, aB = a8O - 1; 0 <= aB; aB--) hn = ad.gH(aD.eo, aB), g[aB].hn !== hn && (g[aB].hn = hn, g[aB].a8D = Math.max(hn, g[aB].a8D), g[aB].a85 = !0)
	}

	function a8U(g, a8S) {
		for (var tS = aD.eo << 3, a7S = bN.y.a7S, mG = bN.y.mG, a8W = bN.y.a8W, aB = a8S - 1; 0 <= aB; aB--) {
			var a8X = a8W[tS + aB],
				hn = a7S[a8X];
			g[aB].hn !== hn ? (g[aB].hn = hn, g[aB].a8D = Math.max(hn, g[aB].a8D), g[aB].a85 = !0) : g[aB].a8E || mG[a8X] % 64 != 5 || (g[aB].a8E = !0, g[aB].a85 = !0)
		}
	}

	function a83(a5v) {
		a5v.canvas = document.createElement("canvas"), bS.xP.font = a7z;
		var i = a7y;
		a5v.jY < aD.f1 && 0 === a5v.id && (i += Math.floor(bS.xP.measureText(ag.a1V[a5v.jY] + "000").width)), i += xq, 0 === a5v.id && (i += xq), a5v.canvas.width = i, a5v.canvas.height = xq, a5v.z6 = a5v.canvas.getContext("2d", {
			alpha: !0
		}), a5v.z6.font = a7z, bA.qr.textBaseline(a5v.z6, 1), bA.qr.textAlign(a5v.z6, 1)
	}

	function a8K(aB) {
		return aU.a8Y() ? h.i - a5s[aB].canvas.width - bc.gap : aU.fB
	}

	function a8L(aB) {
		return Math.floor(2 * bc.gap + (aU.a8Y() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xq))
	}
	this.dd = function() {
		a81 = a82 = 0, a5s = [], this.resize()
	}, this.resize = function() {
		a7z = aN.a6b, xq = aN.fontSize + 5, xq = Math.floor(1.25 * xq), a0.a1.iD() && (xq = Math.floor(1.25 * xq)), a80 = Math.floor(.15 * xq), bS.xP.font = a7z, a7y = Math.floor(bS.xP.measureText("02 000 000 0000").width);
		for (var aB = a5s.length - 1; 0 <= aB; aB--) a83(a5s[aB]), a84(aB)
	}, this.mk = function() {
		for (var aB = a5s.length - 1; 0 <= aB; aB--) a5s[aB].a85 && (a5s[aB].a85 = !1, a84(aB))
	}, this.hH = function(le, lf) {
		if (2 !== aD.a0s && 0 !== ag.my[aD.eo] && !aD.hD && !bA.gQ.jm(aD.eo))
			for (var a8F, a8G, a8H, a8I = a0.a1.iD() ? xq : 0, a8J = a0.a1.iD() ? Math.floor(.15 * xq) : 0, aB = a5s.length - 1; 0 <= aB; aB--)
				if (a8F = a8K(aB), a8G = a8L(aB), a8H = a5s[aB].canvas.width, a8G - a8J <= lf && lf <= a8G + xq + a8J) {
					if (a8F - a8I <= le && le <= a8F + xq + a8I) return a5s[aB].a8E || (a5s[aB].a85 = !0, a5s[aB].a8E = !0, 0 === a5s[aB].id ? b8.hU.pX(a5s[aB].jY) : b8.hU.pW(a5s[aB].jY)), !0;
					if (0 === a5s[aB].id && a8F + a8H - xq - a8I <= le && le <= a8F + a8H + a8I) return bV.a6K(3), b8.hU.hb(aR.hY(), a5s[aB].jY), !0
				} return !1
	}, this.eX = function() {
		var a3W, a3X, g, a8O;
		0 === ag.my[aD.eo] || bA.gQ.jm(aD.eo) && !aD.hD || (a3W = a5s.slice(0, a81), a3X = a5s.slice(a81, a81 + a82), g = a3W, a8O = ad.gB(aD.eo), function(g, a8O) {
			if (a81 !== a8O) return 1;
			for (var aB = a8O - 1; 0 <= aB; aB--)
				if (g[aB].jY !== ad.gG(aD.eo, aB)) return 1;
			return
		}(g, a8O) ? a8Q(g = function(g, a8O) {
			var aB, jY, fO, hn, a72 = [];
			loop: for (aB = 0; aB < a8O; aB++) {
				for (jY = ad.gG(aD.eo, aB), fO = 0; fO < g.length; fO++)
					if (g[fO].jY === jY) {
						a72.push(g.splice(fO, 1)[0]);
						continue loop
					} hn = ad.gH(aD.eo, aB), a83(hn = {
					jY: jY,
					hn: hn,
					a8D: hn,
					id: 0,
					a85: !0,
					a8E: !1,
					canvas: null,
					z6: null
				}), a72.push(hn)
			}
			return a72
		}(g, a8O), a8O) : a8Q(g, a8O), a3W = g, a3X = function(g) {
			var a8S = bN.y.kT[aD.eo];
			return function(g, a8S) {
				if (a82 !== a8S) return 1;
				for (var tS = aD.eo << 3, mI = bN.y.mI, a8W = bN.y.a8W, aB = a8S - 1; 0 <= aB; aB--) {
					var a8X = a8W[tS + aB];
					if (g[aB].jY !== mI[a8X]) return 1
				}
				return
			}(g, a8S) ? a8U(g = function(g, a8S) {
				var aB, jY, fO, a72 = [],
					tS = aD.eo << 3,
					mI = bN.y.mI,
					a7S = bN.y.a7S,
					a8W = bN.y.a8W;
				loop: for (aB = 0; aB < a8S; aB++) {
					var a8X = a8W[tS + aB];
					for (jY = mI[a8X], fO = 0; fO < g.length; fO++)
						if (g[fO].jY === jY) {
							a72.push(g.splice(fO, 1)[0]);
							continue loop
						} a8X = a7S[a8X], a83(a8X = {
						jY: jY,
						hn: a8X,
						a8D: a8X,
						id: 1,
						a85: !0,
						a8E: !1,
						canvas: null,
						z6: null
					}), a72.push(a8X)
				}
				return a72
			}(g, a8S), a8S) : a8U(g, a8S), g
		}(a3X), a81 = a3W.length, a82 = a3X.length, a5s = a3W.concat(a3X))
	}, this.vU = function() {
		if (0 !== ag.my[aD.eo] && (!bA.gQ.jm(aD.eo) || aD.hD))
			for (var aB = a5s.length - 1; 0 <= aB; aB--) vV.drawImage(a5s[aB].canvas, a8K(aB), a8L(aB))
	}
}

function cH() {
	var a6o, kU, a8Z, a8a, j, a6b, fontSize, a8b, a8c, a8d, a8e, canvas, z6, nB, a8f;

	function vl(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a8m() {
		aD.hy ? a8n + 4 * bc.gap + j + bh.a8o() > aR.fD ? vV.drawImage(canvas, 2 * bc.gap + bh.a8o(), a8n + 2 * bc.gap) : vV.drawImage(canvas, bc.gap, a8n + 3 * bc.gap + bh.a8o()) : vV.drawImage(canvas, bc.gap, a8n + 2 * bc.gap)
	}

	function a8g() {
		canvas.width = a6o[0].width + a8d, canvas.height = j + a8d, (z6 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6o[0].width + a8d, j + a8d), z6.translate(Math.floor(a8d / 2), Math.floor(a8d / 2)), z6.lineWidth = a8d, z6.fillStyle = 1 === a6o[0].a8l ? bB.o3 : bB.nv, a8p(), z6.fill(), z6.strokeStyle = 1 === a6o[0].a8l ? bB.np :
			bB.ny, a8p(), z6.stroke(), bA.qr.textAlign(z6, 1), bA.qr.textBaseline(z6, 1), z6.fillStyle = 1 === a6o[0].a8l ? bB.np : bB.ny, z6.font = a6b[0], z6.fillText(vl(a6o[0].a8k), Math.floor(a6o[0].width / 2), Math.floor(.72 * a8b[0] * j)), z6
			.font = a6b[1], z6.fillText(a6o[0].qY, Math.floor(a6o[0].width / 2), Math.floor((a8b[0] + .48 * a8b[1]) * j))
	}

	function a8p() {
		z6.beginPath(), z6.moveTo(a8e, 0), z6.lineTo(a6o[0].width - a8e, 0), z6.lineTo(a6o[0].width, a8e), z6.lineTo(a6o[0].width, j - a8e), z6.lineTo(a6o[0].width - a8e, j), z6.lineTo(a8e, j), z6.lineTo(0, j - a8e), z6.lineTo(0, a8e), z6.closePath()
	}
	this.dd = function() {
		kU = 4, a8Z = a8a = nB = 0, a6o = [], a6b = new Array(2), fontSize = new Array(2), (a8b = new Array(2))[0] = .3, a8b[1] = .7, a8c = new Array(4), canvas = document.createElement("canvas"), a8f = bf.eS + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iD() ? .062 : .047) * h.iE), fontSize[0] = Math.floor(.85 * a8b[0] * j), fontSize[1] = Math.floor(.85 * a8b[1] * j), a6b[0] = bA.qr.si(1, fontSize[0]), a6b[1] = bA.qr.si(1, fontSize[1]), aB = a8c.length -
			1; 0 <= aB; aB--) a8c[aB] = this.measureText(vl(aB) + "000", a6b[0]);
		if (a8d = Math.floor(1 + .05 * j), a8e = Math.floor(.2 * j), 0 < a6o.length) {
			for (aB = a6o.length - 1; 0 <= aB; aB--) i = this.measureText(a6o[aB].qY + "00", a6b[1]), a6o[aB].width = i < a8c[aB] ? a8c[aB] : i;
			a8g()
		}
	}, this.eX = function() {
		0 !== kU && (4 === kU ? bf.eS > a8f && (kU = 0, 1 === aD.a0s) && aQ.a1F(bS.xJ.xK[bS.ek].name, 3, 1, 9) : (1 === kU ? (0 === a8Z && (a8g(), a8Z = 1e-4), 1 <= (a8Z += .002 * (bf.eS - nB)) && (a8a = 0, kU = 2, a8Z = 1), bf.dk = !0) : 2 ===
			kU ? ((a8a += (bf.eS - nB) / 1e3) > a6o[0].eI || 1 < a8a && 1 < a6o.length) && (kU = 3) : 3 === kU && ((a8Z -= .002 * (bf.eS - nB)) <= 0 && (a8Z = 0, a6o.shift(), kU = 0 < a6o.length ? 1 : 0), bf.dk = !0), nB = bf.eS))
	}, this.measureText = function(qY, a6b) {
		return vV.font = a6b, Math.floor(vV.measureText(qY).width)
	}, this.eb = function(a8j, aB) {
		this.a1F(ag.a1V[a8j], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1F = function(qY, a8k, a8l, eI) {
		var i;
		qY.length && (i = (i = this.measureText(qY + "00", a6b[1])) < a8c[a8k] ? a8c[a8k] : i, a6o.push({
			qY: qY,
			width: i,
			a8k: a8k,
			a8l: a8l,
			eI: eI
		}), 0 === kU) && (a8Z = 0, kU = 1, nB = bf.eS)
	}, this.vU = function() {
		0 !== kU && 0 !== a8Z && (a8Z < 1 ? (vV.globalAlpha = a8Z, a8m(), vV.globalAlpha = 1) : a8m())
	}
}

function cq() {
	var j, canvas, z6, a8q, a8r, a8s, a8t, a85, a8u, a8v, a8w, a8x, a7Y = !1,
		a3k = (this.hq = !1, this.i = 0, new Array(2)),
		a8y = 0;

	function ml() {
		var i = aw.i,
			lK = (a85 = !1, z5(z6, i, j), Math.floor(i / 2));
		1 === a8q ? (z6.fillStyle = bB.oI, z6.fillRect(lK, 0, lK, j)) : -1 === a8q && (z6.fillStyle = bB.oY, z6.fillRect(0, 0, lK, j)), z7(z6, i, j, 2);
		var lK = (lK = Math.floor(.25 * j)) < 2 ? 2 : lK,
			a7h = (z6.fillStyle = bB.o4, Math.floor((j - 4) * a8r[1] / a8s[1]));
		0 < a7h && z6.fillRect(2, j - 2 - a7h, lK, a7h), 0 < (a7h = Math.floor((j - 4) * a8r[0] / a8s[0])) && z6.fillRect(i - 2 - lK, j - 2 - a7h, lK, a7h);
		lK = (lK = Math.floor(j / 8)) < 2 ? 2 : lK, z9(z6, Math.floor(.4 * j), 0, j, lK, .5, !1), z9(z6, Math.floor(i - 1.4 * j), 0, j, lK, .5, !0), a7h = 1.1 * j / a3k[0].width;
		z6.imageSmoothingEnabled = !0, z6.setTransform(a7h, 0, 0, a7h, (i - a7h * a3k[0].width) / 2, -.05 * j), z6.drawImage(a3k[+a7Y], 0, 0), z6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a93() {
		a8x = -1, a7Y = ah.a94(), aN.a5E(257), aN.a7X(a7Y), aw.hq = !0, a85 = !0, a8u = 360;
		for (var fW, eT = 0, aB = al.kv - 1; 0 <= aB; aB--) bA.gQ.jm(al.l0[aB]) || (eT += ag.gs[al.l0[aB]]);
		a7Y ? a8s[0] = Math.max(bL.fV(3 * eT, 4), 1) : aD.hy ? (fW = 9 === aD.kh && 8 === bg.km[bh.ky()] ? 80 : (fW = bL.fV(100 * bh.kw(), aD.k9), bL.iC(200 - 2 * fW, 40, 100)), fW = bL.fV(fW * eT, 100), a8s[0] = Math.max(fW, 1)) : 8 === aD.kh ? a8s[
			0] = Math.max(bL.fV(3 * eT, 4), 1) : a8s[0] = Math.max(bL.fV(3 * eT, 5), 1), a8s[1] = Math.max(eT - a8s[0], 1)
	}

	function a8z() {
		a8w = bf.kM(), a85 = !0, a8u = a8q = 0, a8t = [], aw.hq = !1, aN.a10(247), a8r[0] = a8r[1] = 0, aN.a5E(673)
	}

	function z2() {
		return aR.a7D(aN.a79()) ? __fx.settings.keybindButtons ? aR.fD - 2 * (j + bc.gap) : aR.fD - j - bc.gap : bC.a7D(aN.a7C()) ? bC.z2() - j - bc.gap : h.j - j - bk.a60() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3k[aB] = bA.canvas.zc(ab.get(3), 8 - aB, bB.pB), a3k[aB] = bA.canvas.a3m(a3k[aB])
	}, this.dd = function() {
		a8w = -1e4, a8v = a8y = 0, a8x = -1, this.hq = !1, a85 = a7Y = !1, a8r = [a8q = a8u = 0, 0], a8s = [1, 1], a8t = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, z6 = canvas.getContext("2d", {
			alpha: !0
		}), ml()
	}, this.mk = function() {
		a85 && ml()
	}, this.hH = function(fB, fD) {
		return !!this.hq && !(fB < h.i - this.i - bc.gap || fD < z2() || (aD.hD || this.hr(aD.eo) && (aM.hE && aM.a31(), b8.hU.hs(fB > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eX = function() {
		0 < a8v ? 0 === --a8v && a8z() : this.hq ? 180 == --a8u && 3 * a8r[0] < a8s[0] ? a8z() : a8r[0] >= a8s[0] ? a7Y ? bR.a0U.a0n() : bR.a0U.a0r() : a8r[1] >= a8s[1] ? a8v = 4 : a8u <= 0 && a8z() : ! function() {
			var a96 = bf.kM();
			if (a96 % 40 == 14) {
				if (a8y) return !(a96 < a8y) && !(a96 < a8w + 535) && (a8y = a96 + 1071, bA.gQ.a4J()) ? (a93(), 1) : 0;
				(1 === al.kv || (aD.hy ? bh.kw() : ag.gs[m0[0]]) >= bL.fV(96 * aD.k9, 100)) && (a8y = a96 + 535)
			}
			return
		}() && 0 <= a8x && (aN.a1G(250, L(104, [ag.a1V[a8x]]), 673, a8x, bB.ny, bB.nv, -1, !0), a93())
	}, this.a0t = function() {
		this.hq && a8r[0] < a8s[0] && a8z()
	}, this.qR = function(player, a97) {
		var a98 = L(a97 ? 105 : 106, [ag.a1V[player]]),
			a98 = (aN.a1G(450, a98, 257, player, a97 ? bB.oG : bB.oV, bB.nv, -1, !0), a8t.push(player), a85 = !0, aD.kj ? Math.max(a8s[0], a8s[1]) : ag.gs[player]),
			a98 = Math.max(a98, 1);
		a97 ? a8r[0] += a98 : a8r[1] += a98, player === aD.eo && (a8q = a97 ? 1 : -1)
	}, this.vU = function() {
		var fD;
		this.hq && (fD = z2(), vV.drawImage(canvas, h.i - this.i - bc.gap, fD))
	}, this.ht = function(player) {
		if (0 !== a8u) return !1;
		if (!bA.gQ.hF(1)) return !1;
		if (!bA.gQ.hG(player)) return !1;
		if (10 <= kA[player] && !bA.gQ.a4c(player, 9)) return !1;
		if (!aD.kj) {
			player = bf.kM();
			if (player < a8w + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hr = function(gc) {
		if (!bA.gQ.hF(1)) return !1;
		if (!bA.gQ.hG(gc)) return !1;
		if (!this.hq) return !1;
		for (var aB = a8t.length - 1; 0 <= aB; aB--)
			if (a8t[aB] === gc) return !1;
		return !0
	}, this.hp = function(player) {
		a8x = player
	}
}

function cI() {
	var i, fB, a9A, canvas, z6, hq, ig, a55, a6b, a85, a9B = 11 / 12;

	function a9D() {
		var a8C = Math.floor(ig * (i - 2 * a9A)),
			a9G = 1 + Math.floor(.0625 * aR.j),
			a9H = 1 + Math.floor(.3 * aR.j),
			a9I = Math.floor(.55 * aR.j);
		z6.clearRect(0, 0, i, aR.j), z6.fillStyle = bB.nu, z6.fillRect(0, 0, a9A, aR.j), z6.fillRect(a9A + a8C, 0, i - a9A - a8C, aR.j), z6.fillStyle = ig < 1 / 3 ? "rgba(" + Math.floor(3 * ig * 130) + ",130,0,0.85)" : ig < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ig - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ig - 2 / 3) * 130) + ",0.85)", z6.fillRect(a9A, 0, a8C, aR.j), z6.fillStyle = bB.ny, z6.fillRect(0, 0, i, 1), z6.fillRect(0, aR.j - 1, i, 1), z6
			.fillRect(0, 0, 1, aR.j), z6.fillRect(a9A, 0, 1, aR.j), z6.fillRect(a9A + a8C, 0, 1, aR.j), z6.fillRect(i - a9A, 0, 1, aR.j), z6.fillRect(i - 1, 0, 1, aR.j), z6.fillRect(Math.floor(.25 * aR.j) + a9H, Math.floor((aR.j - a9G) / 2), aR.j -
				2 * a9H, a9G), z6.fillRect(Math.floor(i - 1.25 * aR.j) + a9H, Math.floor((aR.j - a9G) / 2), aR.j - 2 * a9H - a9H % 2, a9G), z6.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9G) / 2), a9H, a9G, aR.j - 2 * a9H - a9H % 2),
			a55 = bA.gQ.ie(aD.eo, aR.hY()), z6.fillText(bA.rq.a09(a55) + " (" + bA.rq.a4y(100 * ig, +(ig < .1)) + ")", Math.floor(.5 * i), a9I)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ig = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2x(arg1);

	function a9N(a3J) {
		return !(1 < a3J && 1 === ig || (1 < a3J && a3J * ig - ig < 1 / 1024 ? a3J = (ig + 1 / 1024) / ig : a3J < 1 && ig - a3J * ig < 1 / 1024 && (a3J = (ig - 1 / 1024) / ig), ig = bL.iC(ig * a3J, 1 / 1024, 1), a9D(), 0))
	}

	function a9O(le) {
		return ig !== (ig = bL.iC((le - fB - a9A) / (i - 2 * a9A), 1 / 1024, 1)) && (a9D(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9D(), bf.dk = !0
	}, this.fD = 0, this.hI = !1, this.dd = function() {
		hq = !aD.hS && !aD.hD, a85 = !1, ig = .5, a55 = 0, this.hI = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iD() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iE), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.iD() ? .65 : .389) * h.iE), i += 12 - i % 12, this.j = Math.floor(i / 12)), a9A = Math.floor(3 * this.j / 2), a6b =
			bA.qr.si(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vV), canvas.height = this.j, (z6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6b, bA.qr.textBaseline(z6, 1), bA.qr.textAlign(z6, 1), this.a9C(), a9D()
	}, this.a9C = function() {
		fB = a0.a1.iD() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fD = h.j - this.j - bk.a60() * bc.gap
	}, this.mk = function() {
		a85 && (a85 = !1, a9D())
	}, this.hq = function() {
		return !(!hq || aM.hE && fB < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a7D = function(a9J) {
		return !!this.hq() && fB + i > h.i - a9J - bc.gap
	}, this.a5C = function() {
		hq = !aD.hD
	}, this.a8z = function() {
		hq = !1
	}, this.hY = function() {
		return bL.iC(Math.floor(1024 * ig + .5) - 1, 0, 1023)
	}, this.a2u = function(le, lf) {
		return this.hq() && fB < le && le < fB + i && lf > this.fD
	}, this.hH = function(le, lf) {
		if (!this.hq()) return !1;
		if (!(__fx.settings.keybindButtons && lf > this.fD - Math.floor(bc.gap / 4) - this.j && lf < this.fD - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(le - fB))) {
			if (!aR.a2u(le, lf)) return !1;
			aS.nT = !1, ! function(sT, le, lf) {
				if (function(le, lf) {
						return fB < le && le < fB + a9A && lf > aR.fD
					}(le, lf)) return a9N(a9B);
				if (function(le, lf) {
						return fB + i - a9A < le && le < fB + i && lf > aR.fD
					}(le, lf)) return a9N(1 / a9B);
				return sT.hI = !0, a9O(le)
			}(this, le, lf) || (bf.dk = !0)
		}
		return !0
	}, this.a2x = function(na) {
		0 !== aD.a0s && this.hq() && a9N(na) && (bf.dk = !0)
	}, this.a2T = function(deltaY) {
		var na;
		return !(0 === deltaY || !this.hq()) && a9N(na = 0 < deltaY ? (na = 400 / (400 + deltaY)) < a9B ? a9B : na : 1 / a9B < (na = (400 - deltaY) / 400) ? 1 / a9B : na)
	}, this.a2Q = function(le) {
		return !!this.hI && a9O(le)
	}, this.a2q = function() {
		this.hI = !1
	}, this.eX = function() {
		this.hq() && a55 !== bA.gQ.ie(aD.eo, this.hY()) && (a85 = !0)
	}, this.vU = function() {
		this.hq() && (vV.drawImage(canvas, fB, this.fD), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vV, fB, this.fD)
	}
}

function d0() {
	var canvas, z6, a9P, font, a9Q = 0,
		a9R = !1,
		a9S = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9T = 5;

	function a9a() {
		if (a9R) {
			var aB, f4 = a9S.length,
				a9I = Math.floor(.5 * a9P.j),
				j = f4 * a9I,
				fB = Math.floor(Math.floor(a9P.fB) + .3 * a9P.i - .5),
				fD = Math.floor(Math.floor(a9P.fD) - j),
				i = Math.floor(.4 * a9P.i + 2.5);
			for (vV.fillStyle = bB.nu, vV.fillRect(fB, fD, i, j), vV.fillStyle = bB.oN, vV.fillRect(fB, fD + a9T * a9I, i, a9I), vV.fillStyle = bB.ny, vV.fillRect(fB, fD, 2, j), vV.fillRect(fB, fD, i, 2), vV.fillRect(fB + i - 2, fD, 2, j), aB =
				1; aB < f4; aB++) vV.fillRect(fB, fD + aB * a9I, i, 2);
			for (vV.fillStyle = bB.ny, bA.qr.textAlign(vV, 1), bA.qr.textBaseline(vV, 1), vV.font = bA.qr.si(0, .6 * a9I), fB += .5 * i, aB = 0; aB < f4; aB++) vV.fillText(a9i(aB), fB, fD + (aB + .6) * a9I)
		}
		vV.drawImage(canvas, Math.floor(a9P.fB), Math.floor(a9P.fD))
	}

	function ml(sT) {
		var fB, nO, nP, a9I;
		z6.clearRect(0, 0, Math.floor(a9P.i), Math.floor(a9P.j)), z6.fillStyle = bB.nu, z6.fillRect(0, 0, Math.floor(a9P.i), Math.floor(a9P.j)), aD.nR && (z6.fillStyle = bB.oN, z6.fillRect(0, 0, Math.floor(.3 * a9P.i), Math.floor(a9P.j))), z6
			.fillStyle = bB.ny, z6.fillText("Hide UI", .15 * a9P.i, .5 * a9P.j), z6.fillRect(Math.floor(.3 * a9P.i - .5), 0, 2, Math.floor(a9P.j)), fB = .5 * a9P.i, z6.fillText("Replay Speed", fB, .31 * a9P.j), z6.fillText(a9i(a9T), fB, .69 * a9P.j),
			z6.fillRect(Math.floor(.7 * a9P.i - .5), 0, 2, Math.floor(a9P.j)), sT.a5j ? (fB = Math.floor(.02 * a9P.i), sT = Math.floor(.025 * a9P.i), nO = Math.floor(.85 * a9P.i - fB - .5 * sT), nP = Math.floor(.25 * a9P.j), a9I = Math.floor(a9P.j) -
				2 * nP, z6.fillRect(nO, nP, fB, a9I), z6.fillRect(nO + fB + sT, nP, fB, a9I)) : function() {
				var i = Math.floor(.46 * a9P.j),
					j = Math.floor(.23 * a9P.j),
					fB = Math.floor(.85 * a9P.i - .5 * i + i / 12),
					fD = Math.floor(.5 * a9P.j - j);
				z6.beginPath(), z6.moveTo(fB, fD), z6.lineTo(fB + i, fD + j), z6.lineTo(fB, fD + (j << 1)), z6.fill()
			}(), z6.fillRect(0, 0, Math.floor(a9P.i), 2), z6.fillRect(0, 0, 2, Math.floor(a9P.j)), z6.fillRect(0, Math.floor(a9P.j) - 2, Math.floor(a9P.i), 2), z6.fillRect(Math.floor(a9P.i - 2), 0, 2, Math.floor(a9P.j))
	}

	function a9i(aB) {
		return 5 === aB ? "Normal" : "" + a9S[aB]
	}
	this.a5j = !1, this.dd = function() {
		aD.hD && (a9T = 5, this.a5j = !1, a9R = !1, a9P = new rS([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9U = function() {
		return a9S[a9T]
	}, this.z2 = function() {
		return a9P.fD
	}, this.a7D = function(a9J) {
		return !!aD.hD && a9P.fB + a9P.i > h.i - a9J - bc.gap
	}, this.resize = function() {
		aD.hD && (a9P.resize(), a9P.fD -= (bk.a60() - 1) * bc.gap, font = bA.qr.si(0, .3 * a9P.j), (canvas = document.createElement("canvas")).width = Math.floor(a9P.i), canvas.height = Math.floor(a9P.j), (z6 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qr.textAlign(z6, 1), bA.qr.textBaseline(z6, 1), ml(this))
	}, this.a30 = function(a9V) {
		0 === aD.a0s || t.hq() || a9V !== aD.nR && (aD.nR = a9V, bh.resize(), bf.dk = !0, aD.hD) && (a9Q = bf.eS + 2e3, ml(this))
	}, this.hH = function(fB, fD) {
		if (!aD.hD) return !1;
		if (fB < a9P.fB || fD < a9P.fD || fB > a9P.fB + a9P.i) return a9R && function(sT, fB, fD) {
			var f4 = a9S.length,
				a9I = Math.floor(.5 * a9P.j),
				j = f4 * a9I,
				nO = Math.floor(Math.floor(a9P.fB) + .3 * a9P.i - .5),
				j = Math.floor(Math.floor(a9P.fD) - j),
				i = Math.floor(.4 * a9P.i + 2.5);
			return a9R = !1, bf.dk = !0, fB < nO || nO + i < fB || fD < j || (a9T = a9Z(0, Math.floor((fD - j) / a9I), f4 - 1), ml(sT)), !0
		}(this, fB, fD);
		if ((fB -= a9P.fB) < .3 * a9P.i) a9R = !1, this.a30(!aD.nR);
		else {
			if (fB < .7 * a9P.i) return a9R = !a9R, bf.dk = !0;
			this.a32(!1)
		}
		return !0
	}, this.a32 = function(a9X) {
		2 === aD.a0s ? (this.a30(!1), t.u(3)) : (a9R = !1, this.a5j = !this.a5j, this.a5j ? (aM.hE && aM.a31(), a0.a1.setState(1)) : a9X || aM.a6h(), bf.dk = !0, ml(this))
	}, this.a9Y = function() {
		this.a5j = !1, aM.a6h(), bf.dk = !0, ml(this)
	}, this.a2j = function(fB, fD) {
		return !!aD.nR && (0 <= aM.hH(fB, fD) || (aD.hD ? ((bf.eS > a9Q || !this.hH(fB, fD)) && aS.hH(fB, fD), bf.dk = !0, a9Q = bf.eS + 2e3) : aS.hH(fB, fD)), !0)
	}, this.eX = function() {
		aD.hD && aD.nR && bf.eS > a9Q - 1e3 && bf.eS < a9Q && (bf.dk = !0)
	}, this.a11 = function() {
		aD.hD && (this.a5j = !1, bf.dk = !0, ml(this))
	}, this.vU = function() {
		if (aD.hD) {
			if (aD.nR) {
				if (bf.eS > a9Q) return;
				if (bf.eS > a9Q - 1e3) return vV.globalAlpha = a9Z(0, (1e3 - (bf.eS - (a9Q - 1e3))) / 1e3, 1), a9a(), void(vV.globalAlpha = 1)
			}
			a9a()
		}
	}
}

function cJ() {
	var a9j, a9k, i, fB, fD, a9l, a9m;
	this.dd = function() {
		a9j = new Array(2), a9k = new Array(2), this.nT = !1, a9m = a9l = ii = ih = 0, iF = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iD() ? .072 : .0502) * h.iE)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9j[aB] = document.createElement("canvas"), a9j[aB].width = i, a9j[aB].height = i, a9k[aB] = a9j[aB].getContext("2d", {
			alpha: !0
		});
		this.a9C(),
			function() {
				for (var aA3 = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9k[aB].clearRect(0, 0, i, i), a9k[aB].fillStyle = bB.nr, a9k[aB].beginPath(), a9k[aB].arc(i / 2, i / 2, i / 2 - aA3, 0, 2 * Math.PI), a9k[aB].fill(), a9k[aB]
					.lineWidth = aA3, a9k[aB].fillStyle = bB.ny, a9k[aB].strokeStyle = bB.ny, a9k[aB].beginPath(), a9k[aB].arc(i / 2, i / 2, i / 2 - aA3, 0, 2 * Math.PI), a9k[aB].stroke(), z9(a9k[aB], 0, 0, i, aA3, .3, 0 === aB)
			}()
	}, this.z1 = function() {
		return -ih / iF
	}, this.z2 = function() {
		return -ii / iF
	}, this.nd = function(a9q, iL) {
		ih = iF * a9q - iL
	}, this.ne = function(a9r, iM) {
		ii = iF * a9r - iM
	}, this.hH = function(a9p, a7E) {
		return aD.nR || ! function(a9p, a7E) {
			return Math.pow(a9p - (fB + i / 2), 2) + Math.pow(a7E - (fD + i / 2), 2) < i * i / 4 || Math.pow(a9p - (fB + i / 2), 2) + Math.pow(a7E - (fD + 2 * i), 2) < i * i / 4
		}(a9p, a7E) || bj.eP.data[8].value ? (aH.ng() && (this.nT = !0, a9l = a9p, a9m = a7E), !1) : a7E < fD + 1.25 * i ? this.a2T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2Q = function(a9p, a7E) {
		var a9s, a9t, iO, iR;
		return !aH.ng() || (a9s = ih, a9t = ii, ih += iO = a9l - a9p, ii += iR = a9m - a7E, af.a2Q(iO, iR), this.a9u(), a9l = a9p, a9m = a7E, a9s !== ih) || a9t !== ii
	}, this.a2T = function(le, lf, deltaY) {
		var na;
		if (aH.ng()) {
			if (0 < deltaY) na = (na = 500 / (500 + deltaY)) < .5 ? .5 : na;
			else {
				if (!(deltaY < 0)) return !1;
				na = 2 < (na = (500 - deltaY) / 500) ? 2 : na
			}
			this.a9v(le, lf, na), bf.dk = !0
		}
		return !0
	}, this.a9v = function(fB, fD, ei) {
		var a3J;
		ei = a3J = (a3J = 1024 < (a3J = ei) * iF ? 1024 / iF : a3J) * iF < .125 ? .125 / iF : a3J, af.zoom(ei, fB, fD),
			function(a3J, le, lf) {
				iF *= a3J, ih = (ih + le) * a3J - le, ii = (ii + lf) * a3J - lf, aS.a9u()
			}(ei, fB, fD)
	}, this.a9u = function() {
		var a9y = h.i / 16,
			a9z = 0,
			aA0 = h.j / 16,
			aA1 = 0;
		ih < -h.i + a9y && (a9z = -h.i + a9y - ih), ih > iF * bS.fF - a9y && (a9z = iF * bS.fF - a9y - ih), ii < -h.j + aA0 && (aA1 = -h.j + aA0 - ii), ii > iF * bS.fG - aA0 && (aA1 = iF * bS.fG - aA0 - ii), ih += a9z, ii += aA1, ba.nf(), af.aA2(
			a9z, aA1)
	}, this.a9C = function() {
		fB = h.i - i - bc.gap, fD = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vU = function() {
		bj.eP.data[8].value || (vV.drawImage(a9j[0], fB, fD), vV.drawImage(a9j[1], fB, Math.floor(fD + 3 * i / 2)))
	}
}

function cK() {
	var g, aA4, aA5, aA6, gap, aA7, aA8, aA9, aAA, aAB, a6b, aAC, h9, aAD, a8C, aAE, aAF;

	function aAJ() {
		aA6 = Math.floor(.2 * (a0.a1.iD() ? .07 : .035) * h.iE), aA6 = a7B(a0.a1.iD() ? 3 : 1, aA6);
		var aAM = h.i / (g.length + gap);
		aA6 = aA6 < aAM ? aAM : aA6, a8C = Math.floor((1 - gap) * aA6), aA4 = 0, aAN()
	}

	function aAN() {
		aA4 = (aA4 = aA4 < -20 ? -20 : aA4) > (g.length - 15) * aA6 ? (g.length - 15) * aA6 : aA4, aA8 = Math.floor(aA4 / aA6), aA9 = (aA9 = aA8 + Math.floor(h.i / aA6)) > g.length - 1 ? g.length - 1 : aA9, aA8 = (aA8 = aA9 < aA8 ? aA9 : aA8) < 0 ?
			0 : aA8;
		var lK = aA9;
		aA7 = aA5 / g[lK];
		for (var aB = aA9 - 1; aA8 <= aB; aB--) g[aB] > g[lK] && (lK = aB, aA7 = aA5 / Math.pow(g[aB], aAD))
	}

	function aAQ(fB) {
		fB = Math.floor((aA4 + h.i - fB - gap * aA6) / aA6);
		return (fB = fB < -1 ? -1 : -1 === fB ? 0 : fB > g.length - 1 ? -1 : fB) !== aAA && (aAA = fB, -1 === aAE && 0 === aAA && aT.aAG && (aAE = setInterval(aAR, 100)), 1)
	}

	function aAS(aB) {
		var aAU = Math.floor(aA7 * Math.pow(g[aB], aAD));
		vV.fillRect(aA4 + h.i - (aB + 1) * aA6, h.j - aAU, a8C, aAU)
	}

	function aAR() {
		var gc;
		0 !== (aAA = 8 === aa.a27() ? -1 : aAA) ? (aAF = (new Date).getTime(), clearInterval(aAE), aAE = -1) : (gc = g[1] / 864e3, -1 !== aAF && (gc += ((new Date).getTime() - aAF) * g[1] / 864e5, aAF = -1), 0 < gc && (g[0] += Math.floor(gc), bf
			.dk = !0))
	}
	this.aAG = !1, this.dd = function() {
		aAF = aAE = -1, aAA = -(aAD = 1), this.aAH = !1, h9 = 0, aAC = new Date, aA4 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aA5 = Math.floor(.15 * h.j), aAB = (aAB = Math.floor((a0.a1.iD() ? .018 : .0137) * h.iE)) < 2 ? 2 : aAB, a6b = bA.qr.si(1, aAB), aAJ()
	}, this.aAK = function(aAL) {
		var aB;
		for (this.aAG = !0, aB = 0; aB < aAL.length; aB++) g.unshift(aAL[aB]);
		aAJ(), bf.dk = !0
	}, this.aAO = function() {
		aAN()
	}, this.a2Q = function(fB, fD) {
		fD > h.j - .6 * aA5 ? this.aAH ? fB !== h9 && (aA4 += fB - h9, h9 = fB, aAN(), aAQ(fB), this.aAH = -1 !== aAA, bf.dk = !0) : aAQ(fB) && (bf.dk = !0) : this.rs()
	}, this.rs = function() {
		-1 !== aAA && (this.aAH = !1, aAA = -1, bf.dk = !0)
	}, this.a2T = function(fB, deltaY) {
		-1 !== aAA && (aA4 += Math.floor(deltaY), aAN(), aAQ(fB), bf.dk = !0)
	}, this.hH = function(fB, fD) {
		this.a2Q(fB, fD), -1 !== aAA && (h9 = fB, this.aAH = !0)
	}, this.a2p = function() {
		-1 !== aAA && (this.aAH = !1)
	}, this.vU = function() {
		vV.fillStyle = bB.o1;
		for (var aAV, month, eT, tG, aAY, aAZ, nP, aAa, aAb, aB = aA9; aA8 <= aB; aB--) aAS(aB);
		this.aAG && 0 === aA8 && (vV.fillStyle = bB.oY, aAS(0)), -1 !== aAA && (vV.fillStyle = bB.o0, aAS(aAA)), -1 !== aAA && (vV.font = a6b, bA.qr.textBaseline(vV, 2), (eT = new Date).setTime(aAC.getTime() - 1e3 * aAA * 60 * 60 * 24), month =
			"month", aAV = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eT), aAV = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eT)), aAV = aAV + ", " + eT.getUTCDate() + " " + month + " " + eT.getFullYear(), month = 1 === g[aAA] ? L(107) : L(108), month = bA.rq.a09(g[aAA]) + " " + month, eT = Math.floor(vV.measureText(aAV).width), tG = Math
			.floor(vV.measureText(month).width), aAY = Math.floor(.5 * (eT + aAB)), aAZ = (aAZ = aA4 + h.i - (aAA + 1) * aA6) < aAY ? aAY : aAZ > h.i - aAY ? h.i - aAY : aAZ, nP = h.j - Math.floor(aA7 * Math.pow(g[aAA], aAD)), aAa = Math
			.floor(1.1 * aAB), aAb = nP > h.j - aAa ? h.j - aAa : nP, vV.fillStyle = bB.nv, vV.fillRect(h.i - tG - aAB, aAb - aAa, tG + aAB, aAa), vV.fillRect(aAZ - aAY, h.j - aAa, eT + aAB, aAa), vV.fillStyle = bB.ny, bA.qr.textAlign(vV, 2),
			vV.fillText(month, Math.floor(h.i - .5 * aAB), aAb), bA.qr.textAlign(vV, 1), vV.fillText(aAV, aAZ, h.j), vV.strokeStyle = bB.o2, vV.lineWidth = 1, vV.beginPath(), vV.moveTo(0, nP), vV.lineTo(h.i, nP), vV.closePath(), vV.stroke())
	}
}

function cL() {
	var a6b, i, fD, aAc, aAd, aAe, canvas, z6, a85, a4Q, aAf, aAg, aAh, aAi;
	this.fB = 0, this.j = 0, this.dd = function() {
		aAe = aD.a5K, aAg = "rgba(0,100,0,0.8)", aAh = "rgba(150,0,0,0.8)", a85 = aAf = !0, a4Q = ag.h6[aD.eo], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iD() ? .305 : .24) * h.iE), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6b = bA.qr.si(1, Math.floor(.8 * this.j)), aAd = bA.qr.si(1, Math.floor(.45 * this.j)), aAi = Math.floor(.5 * this.j), bS.xP
			.font = a6b, fD = bc.gap, aAc = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, z6 = canvas.getContext("2d", {
				alpha: !0
			}), bA.qr.textBaseline(z6, 1), bA.qr.textAlign(z6, 1), this.aAj()
	}, this.a8Y = function() {
		return a0.a1.iD() && h.i < 1.2 * h.j
	}, this.a9C = function() {
		this.a8Y() ? this.fB = h.i - i - bc.gap : this.fB = Math.floor(aV.aAk() + (h.i - aV.aAk() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mk = function() {
		a85 && (a85 = !1, this.aAj())
	}, this.aAj = function() {
		z6.font = a6b, z6.clearRect(0, 0, i, this.j), z6.fillStyle = aAf ? aAg : aAh, z6.fillRect(0, 0, i, this.j), z6.fillStyle = bB.o0;
		var ec = this.aAl(),
			aAn = (this.aAm(), z6.fillStyle = ag.h6[aD.eo] >= ae.k5(aD.eo) ? bB.oV : bB.ny, bA.rq.a09(a4Q)),
			aAn = (z6.fillText(aAn, Math.floor(i / 2), aAi), z6.measureText(aAn).width),
			ec = (z6.font = aAd, z6.fillStyle = 9 === ec ? bB.p5 : bB.ny, ae.aAp),
			aAq = "+" + ec,
			tG = z6.measureText(aAq).width,
			aAr = Math.floor(this.j / 12),
			aAn = .5 * (i + aAn) + aAr;
		(aAn + tG + aAc <= i || 1e3 <= ec && (aAq = "+" + Math.floor(ec / 1e3) + "K", aAn + (tG = z6.measureText(aAq).width) + aAc <= i)) && z6.fillText(aAq, Math.floor(aAn + .5 * tG), Math.floor(.3 * this.j)), z6.fillStyle = bB.ny, z6.fillRect(
			0, 0, i, 1), z6.fillRect(0, 0, 1, this.j), z6.fillRect(0, this.j - 1, i, 1), z6.fillRect(i - 1, 0, 1, this.j)
	}, this.aAl = function() {
		var ec = bf.kM() % 100,
			y4 = (ec = 9 - bL.fV(ec -= ec % 10, 10), Math.floor(ec * (this.j - aAc) / 9));
		return z6.fillRect(0, y4, aAc, this.j - y4), z6.fillRect(i - aAc, y4, aAc, this.j - y4), ec
	}, this.aAm = function() {
		z6.fillRect(aAc, this.j - aAc, Math.floor((i - 2 * aAc) * ag.h6[aD.eo] / aAe), aAc)
	}, this.eX = function() {
		var gc = aD.eo;
		bA.gQ.hG(gc) && (gc = ag.h6[gc] - ag.a4P[gc], a4Q !== gc ? (aAe = a7B(gc, aAe), aAf = a4Q < gc && 10 <= gc, a4Q = gc, a85 = !0) : bf.kM() % 10 == 9 && (a85 = !0))
	}, this.vU = function() {
		0 === ag.my[aD.eo] || aD.hS || 2 === ag.a4G[aD.eo] || vV.drawImage(canvas, this.fB, fD)
	}
}

function cM() {
	var aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5, aB6, aB7, aB8, aB9, aBA, aBB, aBC, aBD, position, aBE, aBF, aBG, aBH, aBI, aBJ = 1,
		aBK = 1,
		aBL = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eo;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kA[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kA[aD.eo]);
	}

	function aBN() {
		aAy.clearRect(0, 0, aAs, a8n),
			aAy.fillStyle = aBI ? bB.ot : bB.op,
			aAy.fillRect(0, 0, aAs, aB3),
			aAy.fillStyle = bB.nu,
			aAy.fillRect(0, aB3, aAs, a8n - aB3);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kA[aD.eo]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBD = -1;
		if (__fx.leaderboardFilter.enabled && aBD >= __fx.leaderboardFilter.filteredLeaderboard.length) aBD = -1;
		playerPos >= position && aBP(playerPos - position, bB.oN),
			0 !== kA[aD.eo] && 0 === position && aBP(0, bB.ow),
			-1 !== aBD && aBP(aBD, bB.nz),
			aAy.fillStyle = bB.nu,
			//console.log("drawing", aBD),
			aAy.clearRect(0, a8n - __fx.leaderboardFilter.tabBarOffset, aAs, __fx.leaderboardFilter.tabBarOffset);
		aAy.fillRect(0, a8n - __fx.leaderboardFilter.tabBarOffset, aAs, __fx.leaderboardFilter.tabBarOffset);
		aAy.fillStyle = bB.ny,
			aAy.fillRect(0, aB3, aAs, 1),
			aAy.fillRect(0, a8n - __fx.leaderboardFilter.tabBarOffset, aAs, 1),
			__fx.leaderboardFilter.drawTabs(aAy, aAs, a8n - __fx.leaderboardFilter.tabBarOffset, bB.oN),
			aAy.fillRect(0, 0, aAs, bc.zq),
			aAy.fillRect(0, 0, bc.zq, a8n),
			aAy.fillRect(aAs - bc.zq, 0, bc.zq, a8n),
			aAy.fillRect(0, a8n - bc.zq, aAs, bc.zq), aAy.font = aAt, bA.qr.textBaseline(aAy, 1), bA.qr.textAlign(aAy, 1), aAy.fillText(aBL, Math.floor((aAs + aB3 - 22) / 2), Math.floor(aB1 + aAu / 2));
		__fx.playerList.drawButton(aAy, 12, 12, aB3 - 22);
		var fN, gd = playerPos < position + aAw - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAw)
				position = (result.length > aAw ? result.length : aAw) - aAw;
			//if (position >= result.length) position = result.length - 1;
			for (aAy.font = aAv, bA.qr.textAlign(aAy, 0), fN = aAw - gd; 0 <= fN; fN--) {
				const pos = result[fN + position];
				if (pos !== undefined)
					aBQ(m0[pos]), aBR(fN, pos, m0[pos]);
			}
			for (bA.qr.textAlign(aAy, 2), fN = aAw - gd; 0 <= fN; fN--) {
				const pos = result[fN + position];
				if (pos !== undefined)
					aBQ(m0[pos]), aBS(fN, m0[pos]);
			}
		} else {
			for (aAy.font = aAv, bA.qr.textAlign(aAy, 0), fN = aAw - gd; 0 <= fN; fN--)
				aBQ(m0[fN + position]), aBR(fN, fN + position, m0[fN + position]);
			for (bA.qr.textAlign(aAy, 2), fN = aAw - gd; 0 <= fN; fN--)
				aBQ(m0[fN + position]), aBS(fN, m0[fN + position]);
		}
		2 == gd && (aBQ(aD.eo), bA.qr.textAlign(aAy, 0), aBR(aAw - 1, kA[aD.eo], aD.eo), bA.qr.textAlign(aAy, 2), aBS(aAw - 1, aD.eo)), 0 === position && (gd = .7 * aB4 / ab.get(4).height, aAy.setTransform(gd, 0, 0, gd, Math.floor(aB5 + .58 * aB4 +
			.5 * gd * ab.get(4).width), Math.floor(aB1 + aAu + .4 * aB4)), aAy.imageSmoothingEnabled = !0, aAy.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAy.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBQ(player) {
		aD.hy && (aAy.fillStyle = bg.aBU[bg.aBV[player]])
	}

	function aBP(aB, aBW) {
		aAy.fillStyle = aBW, aB = aAw - 1 < aB ? aAw - 1 : aB;
		aBW = Math.floor((aB === aAw - 1 ? 2 : 0 === aB ? 1.15 : 1) * aB4), aBW = aB === aAw - 2 ? Math.floor(aB3 + 9.15 * aB4) - Math.floor(aB3 + 8.15 * aB4) : aBW;
		aAy.fillRect(0, Math.floor(aB3 + (aB + (0 === aB ? 0 : .15)) * aB4), aAs, aBW)
	}

	function aBR(wZ, a4e, aB) {
		aAy.fillText(aB9[a4e], aB5, Math.floor(aB1 + aAu + (wZ + .5) * aB4)), 1 === ag.a4G[aB] && (aAy.font = "italic " + aAv);
		a4e = Math.floor(aB1 + aAu + (wZ + .5) * aB4);
		aAy.fillText(ag.a1V[aB], aB6, a4e), 0 !== ag.a4G[aB] && (aAy.font = aAv), aB < aD.kP && 2 !== ag.a4G[aB] || aAy.fillRect(aB6, a4e + .35 * aBJ, aB8[aB], Math.max(1, .1 * aBJ))
	}

	function aBS(wZ, aB) {
		aAy.fillText(ag.gs[aB], aB7, Math.floor(aB1 + aAu + (wZ + .5) * aB4))
	}
	this.dd = function() {
		var aB;
		for (aBH = aBG = aBE = 0, aBI = aBF = !1, aBD = -1, aAw = a0.a1.iD() ? 6 : 10, aBK = (position = 0) === (aBK = bj.eP.data[11].value) ? 10 : 1 === aBK ? 5 : 1, aBC = !1, aBA = new Uint16Array(aAw + 1), aBB = new Uint32Array(aAw + 1), aB0 =
			aD.f1, m0 = new Uint16Array(aB0), kA = new Uint16Array(aB0), aB = aB0 - 1; 0 <= aB; aB--) m0[aB] = aB, kA[aB] = aB;
		this.resize(!0), aB8 = new Uint16Array(aD.f1);
		var aBM = Math.floor(aAs - aB6 - aB5 - aAz);
		for (aB9 = new Array(aD.f1), aAy.font = aAv, aB = aD.f1 - 1; 0 <= aB; aB--) aB9[aB] = aB + 1 + ".", ag.a1V[aB] = bA.z6.a3y(ag.a1a[aB], aAv, aBM), aB8[aB] = Math.floor(aAy.measureText(ag.a1V[aB]).width);
		aBN()
	}, this.resize = function(dd) {
		if (a8n = a0.a1.iD() ? (aAs = Math.floor(.335 * h.iE), Math.floor(aAw * aAs / 8)) : (aAs = Math.floor(.27 * h.iE), Math.floor(aAw * aAs / 10)), aAs = Math.floor(.97 * aAs), (aAx = document.createElement("canvas")).width = aAs, aAx
			.height = a8n, aAy = aAx.getContext("2d", {
				alpha: !0
			}), aB1 = .025 * aAs, aAu = .16 * aAs, aB2 = 0 * aAs, aB3 = Math.floor(.45 * aB1 + aAu), aB4 = (a8n - aAu - 2 * aB1 - aB2) / aAw,
			aAx.height = a8n += aB4, __fx.leaderboardFilter.tabBarOffset = Math.floor(aB4 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8n - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAs,
			aAt = bA.qr.si(1, Math.floor(.55 * aAu)), aBJ = Math.floor((a0.a1.iD() ? .67 : .72) * aB4), aAv = bA.qr.si(0, aBJ), aAy.font = aAv, aB5 = Math.floor(.04 * aAs), aB6 = Math.floor((a0.a1.iD() ? .195 : .18) * aAs), aAz = Math.floor(aAy
				.measureText("00920600").width), aAy.font = aAt, aB7 = aAs - aB5, !dd) {
			aAy.font = aAv;
			for (var aB = aD.f1 - 1; 0 <= aB; aB--) aB8[aB] = Math.floor(aAy.measureText(ag.a1V[aB]).width);
			aBN()
		}
		aBL = bA.z6.a3y(L(109), aAt, .96 * aAs)
	}, this.aAk = function() {
		return aAs
	}, this.mk = function(bu, aBO) {
		(aBO || aBC && (bu || bf.kM() % aBK == 0)) && (aBC = !1, aBN())
	}, this.eX = function() {
		! function() {
			for (var fN = aB0 - 1; 0 <= fN; fN--) 0 === ag.my[m0[fN]] && ! function(fN) {
				var aBe = m0[fN];
				aB0--;
				for (var aB = fN; aB < aB0; aB++) m0[aB] = m0[aB + 1], kA[m0[aB]] = aB;
				m0[aB0] = aBe, kA[m0[aB0]] = aB0
			}(fN)
		}();
		for (var aBc, ng = aB0 - 1, fN = 0; fN < ng; fN++) ag.gs[m0[fN]] < ag.gs[m0[fN + 1]] && (aBc = m0[fN], m0[fN] = m0[fN + 1], m0[fN + 1] = aBc, kA[m0[fN]] = fN, kA[m0[fN + 1]] = fN + 1);
		! function() {
			for (var eT = aBC, gd = (aBC = !0, kA[aD.eo] >= aAw - 1 ? aAw - 2 : aAw - 1), aB = gd; 0 <= aB; aB--)
				if (aBA[aB] !== m0[aB] || aBB[aB] !== ag.gs[m0[aB]]) return;
			(gd != aAw - 2 || aBA[aAw] === kA[aD.eo] && aBB[aAw] === ag.gs[aD.eo]) && (aBC = eT)
		}();
		for (var aB = aAw - 1; 0 <= aB; aB--) aBA[aB] = m0[aB], aBB[aB] = ag.gs[m0[aB]];
		aBA[aAw] = kA[aD.eo], aBB[aAw] = ag.gs[aD.eo];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hH = function(fB, fD) {
		if (zp(fB, fD)) {
			if (__fx.utils.isPointInRectangle(fB, fD, bc.gap + 12, bc.gap + 12, aB3 - 22, aB3 - 22)) __fx.playerList.display(ag.a1a);
			else {
				if (fD - bc.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fB - bc.gap);
				fB = aBg(fD);
				0 <= fB ? (aBE = bf.eS, aBF = !0, aBG = aBH = fB, bJ.a33() && (fB = a9Z(-1, aBH, aAw), aBD !== (fB = fB === aAw ? -1 : fB)) && (aBD = fB, aBN(), bf.dk = !0)) : (aBI && (aBI = !1, aBN(), bf.dk = !0), t.u(10, 0, new aBh({
					aBi: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBN(), bf.dk = !0
	};

	function aBg(fD) {
		return (fD -= bc.gap + aB3) < 0 ? Math.floor(fD / aB4) - 1 : fD < (aAw - 1) * aB4 ? Math.floor(fD / aB4) : fD < a8n - aB3 ? aAw - 1 : (fD -= a8n - aB3, aAw + Math.floor(fD / aB4))
	}

	function zp(fB, fD) {
		return fB >= bc.gap && fB < bc.gap + aAs && fD >= bc.gap && fD < bc.gap + a8n
	}
	this.a2Q = function(fB, fD) {
		var eT, aBf;
		if (__fx.utils.isPointInRectangle(fB, fD, bc.gap + 12, bc.gap + 12, aB3 - 22, aB3 - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fB, fD, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fB - bc.gap)) return aBf = aBg(fD), fB = zp(fB, fD), fD = !(!(aBf < 0 && fB) || bJ.a33()), aBF ? (eT = position, (position = a9Z(0, position += aBG - aBf, aD.f1 - aAw)) !== eT ? (aBI = fD,
			aBf = a9Z(-1, aBG = aBf, aAw), aBD = aBf = aBf !== aAw && fB ? aBf : -1, aBN(), bf.dk = !0) : aBI !== fD && (aBI = fD, aBN(), bf.dk = !0), !0) : (aBf = (aBf = a9Z(-1, aBf, aAw)) === aAw || !fB || bJ.a33() ? -1 : aBf, (aBD !==
			aBf || aBI !== fD) && (aBD = aBf, aBI = fD, aBN(), bf.dk = !0))
	}, this.a2p = function(fB, fD) {
		if (!aBF) return !1;
		aBF = !1;
		var aBf = aBg(fD);
		var isEmptySpace = false;
		return bJ.a33() && -1 !== aBD && (aBD = -1, aBN(), bf.dk = !0), bf.eS - aBE < 350 && aBH === aBf && -1 !== (aBf = (aBf = a9Z(-1, aBf, aAw)) !== aAw && zp(fB, fD) ? aBf : -1) && (fB = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				m0[__fx.leaderboardFilter.filteredLeaderboard[aBf + position] ?? (isEmptySpace = true, kA[aD.eo])]) : m0[aBf + position]), aBf === aAw - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : kA[aD.eo]) >=
			position + aAw - 1 && (fB = aD.eo), !isEmptySpace && aD.hy && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fB, ag.a1a, aD.kj), 0 !== ag.my[fB] && !isEmptySpace) && aH.nJ(fB, 800, !1, 0), !0
	}, this.a2T = function(fB, fD, deltaY) {
		var aBl;
		return !(aBF || aD.nR || (aBl = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zp(fB, fD)) || (fB = (fB = a9Z(-1, aBg(fD), aAw)) === aAw || bJ.a33() ? -1 : fB, 0 < deltaY ? position < aD.f1 - aAw && (position += Math.min(aD.f1 - aAw -
			position, aBl), aBD = fB, aBN(), bf.dk = !0) : 0 < position && (position -= Math.min(position, aBl), aBD = fB, aBN(), bf.dk = !0), 0))
	}, this.vU = function() {
		vV.drawImage(aAx, bc.gap, bc.gap)
	}
}

function cN() {
	var canvas, z6, fB, fD, aAU, aBm, gap, aBn, fontSize, aBo, aBp, aBq, aBr, aBs, aBt, aBu, aBv, aBw;

	function aC0() {
		z6.clearRect(0, 0, aW.i, aW.j), z6.fillStyle = bB.nv, z6.fillRect(0, 0, aW.i, aW.j), z6.fillStyle = bB.oI, ei = 0 < aBu ? aBu : aBr[4] / 1e4, z6.fillRect(0, aW.j - aAU - 1, Math.floor(ei * aW.i), aAU), z6.fillStyle = bB.ny, z6.fillRect(0, 0,
			aW.i, 1), z6.fillRect(0, 0, 1, aW.j), z6.fillRect(aW.i - 1, 0, 1, aW.j), z6.fillRect(0, aW.j - 1, aW.i, 1), z6.fillRect(0, aW.j - aAU - 1, aW.i, 1);
		for (var ei, aC2, eT = 0, aB = 0; aB < aBq.length; aB++) aBs[aB] ? (bA.qr.textAlign(z6, 0), aC2 = Math.floor((aBm - aAU + 2 * aBn) * (aB - eT + 1) / (aBq.length + 1) - .7 * aBn), z6.fillText(aBq[aB], gap, aC2), bA.qr.textAlign(z6, 2), 5 ===
			aB && 0 !== ag.my[aD.eo] && ag.h6[aD.eo] >= ae.k5(aD.eo) ? (z6.fillStyle = bB.ou, z6.fillText(aBy(aB), aW.i - gap, aC2), z6.fillStyle = bB.ny) : z6.fillText(aBy(aB), aW.i - gap, aC2)) : eT++
	}

	function aBy(aB) {
		return aB < 3 ? aBr[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rq.a4y(aBr[aB] / 100, 2) : aB < 7 ? bA.rq.a09(aBr[aB]) : aB === 7 ? aW.aC3(aBr[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gs, aD.eo) : __fx.utils.getDensity(aD.eo)
	}

	function aBx() {
		ag.gs[aD.eo] !== aBr[6] && (aBr[6] = ag.gs[aD.eo], aBo++)
	}
	this.dd = function() {
		aBu = aBv = 0, (aBp = new Array(8))[0] = L(110), aBp[1] = aD.kj ? L(111) : L(112), aBp[2] = L(113), aBp[3] = L(114), aBp[4] = L(115), aBp[5] = L(116, 0, "Interest"), aBp[6] = L(117), aBp[7] = L(118),
			aBp.push("Max Troops", "Density"), // add aBp
			(aBq = new Array(aBp.length)).fill(""), (aBr = new Array(aBp.length))[0] = aD.kj ? 0 : aD.kP, aBr[1] = aD.kj ? al.kv : aD.kl, aBr[2] = aD.a0u, aBr[3] = 0, aBr[4] = bL.fV(1e4 * ag.gs[0], Math.max(aD.k9, 1)), aBr[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.fV(700 * aD.data.iIncomeValue, 64) : bL.fV(700 * aD.data.iIncomeData[aD.eo], 64), aBr[6] = 0, aBx(), aBr[7] = 0, aBt = aBy(6), (aBs = new Array(aBp.length)).fill(!0), aBw = 0, aBw =
			aD.kj ? (aBs[0] = !1, aBs[2] = !1, aBs[3] = !1, 3) : (aBs[3] = !1, 1), aBo = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iD() ? .1646 : .126) * 1.25 * h.iE), this.j = Math.floor(1.18 * this.i), aAU = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBn = .04 * this.i, aBm = this.j, this.j -= Math.floor(aBw * (this.j -
			2 * aAU) / aBp.length), fontSize = Math.floor(.7 * (aBm - aAU) / aBp.length);
		var a6b = bA.qr.si(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6b, i) {
				for (var aB = 0; aB < aBq.length; aB++) aBq[aB] = bA.z6.a3y(aBp[aB], a6b, i)
			}((z6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6b, .575 * this.i), bA.qr.textBaseline(z6, 1), z6.lineWidth = 1, this.a5D(), this.a9C(), aU.a9C(), aC0()
	}, this.a9C = function() {
		fB = h.i - this.i - bc.gap
	}, this.aC1 = function() {
		fD = bc.gap
	}, this.a5D = function() {
		fD = bc.gap + (aU.a8Y() && 0 !== ag.my[aD.eo] && !aD.hS ? aU.j + bc.gap : 0)
	}, this.mk = function(bu) {
		(bu || 100 <= aBo) && (aBo = 0, aC0())
	}, this.a5w = function() {
		return aBr[7]
	}, this.aC3 = function(value) {
		var lK = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lK) / 1e3);
		return value < 10 ? lK + ":0" + value : lK + ":" + value
	}, this.eX = function() {
		var aCE, per;
		aBs[0] && aD.a0v - aD.a0u !== aBr[0] && (aBr[0] = aD.a0v - aD.a0u, aBo++), al.kv - aBr[0] !== aBr[1] && (aBr[1] = al.kv - aBr[0], aBo++), this.mc(), (aCE = ae.aCF(aD.eo)) !== aBr[5] && (aBr[5] = aCE, aBo++), aBx(), aBr[7] += bf.aCG, aCE =
			aBy(7), aBt !== aCE && (aBt = aCE, aBo += 100), aCE = aD.hy ? bh.kw() : ag.gs[m0[0]], per = bL.fV(1e4 * aCE, Math.max(aD.k9, 1)), aBr[3] = aCE, aBr[4] !== per && (aBo++, aBr[4] = per), 8 === aD.kh && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gQ.hG(aB)) return bR.a0U.a0r(), 1;
				return
			}() || aBr[3] < aD.k9 || ! function() {
				for (var aB = al.kv - 1; 0 <= aB; aB--)
					if (0 < ag.gW[al.l0[aB]].length) return;
				return 1
			}() || bN.lE.aCD().length || aD.hy && bh.kw(1) < aD.k9 || bR.a0U.a0r()
	}, this.mc = function() {
		aBs[2] && aD.a0u !== aBr[2] && (aBr[2] = aD.a0u, aBo += 2 === aD.a0s ? 100 : 1)
	}, this.aCA = function() {
		return aBr[3] === aD.k9
	}, this.aCH = function(aB) {
		var tW, aCI, eT;
		return 2 !== aD.a0s && (aB % 2 == 1 && (aV.mk(1, 1), bf.dk = !0), aB === aD.a5M ? (aBu = 0, aC0(), !1) : (-1 !== aB || 0 !== aBv) && (aCI = aBu, aBu = aD.hD ? aB / aD.a5M : (eT = performance.now(), 0 <= aB && (tW = eT - 392 * aB, aBv =
			0 === aB || tW < aBv ? tW : aBv), 1 < (aBu = (eT - aBv) / (392 * aD.a5M)) ? 1 : aBu), aC0(), aBu !== aCI))
	}, this.vU = function() {
		vV.drawImage(canvas, fB, fD)
	}
}

function cO() {
	var hq, aCJ, i, j, a9I, aCK, aCL, a8Z, canvas, nB, aCM;

	function z2() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aCM = hq = !1, a9I = .61, aCK = .07, aCL = .09, nB = a8Z = j = 0
	}, this.resize = function() {
		var z6, nO, ec, aCR, aCS, a6g;
		hq && (i = aCN(i = a0.a1.iD() ? Math.floor(.69 * h.iE) : Math.floor(.5 * h.iE), a7B(h.i - 2 * bc.gap, 10)), i = aCN(i, Math.floor(3.57 * a7B(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, z6 = canvas.getContext("2d", {
				alpha: !0
			}), nO = Math.floor(1 + j / 40), z6.clearRect(0, 0, i, j), z6.fillStyle = bB.nv, z6.fillRect(nO, nO, i - 2 * nO, j - 2 * nO), z6.lineJoin = "bevel", z6.lineWidth = 2 * nO, z6.strokeStyle = bB.ny, z6.strokeRect(nO, nO, i - 2 * nO,
				j - 2 * nO), z6.imageSmoothingEnabled = !1, ec = ab.get(aCJ), aCR = ec.width, a6g = (1 === aCJ ? .85 : 21 === aCJ ? .666 : .9) * a9I * j / (aCS = ec.height), z6.setTransform(a6g, 0, 0, a6g, Math.floor((i - a6g * aCR) / 2),
				Math.floor((j - a6g * aCS) / 2)), z6.drawImage(ec, 0, 0), z6.setTransform(1, 0, 0, 1, Math.floor(i - aCL * j - aCK * j - nO), Math.floor(nO + aCK * j)),
			function(z6, f4) {
				z6.lineWidth = Math.floor(1 + j / 80), z6.strokeStyle = bB.ny, z6.beginPath(), z6.moveTo(0, 0), z6.lineTo(f4, f4), z6.moveTo(0, f4), z6.lineTo(f4, 0), z6.stroke()
			}(z6, Math.floor(aCL * j)), z6.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fW, aCP, a94, aCQ) {
		hq || aCQ && aCM || (aCJ = a94 ? 21 : fW ? 1 : 2, hq = aCM = !0, this.resize(), aL.s8(), aR.a8z(), nB = bf.eS, a8Z = aCP ? 1 : 0)
	}, this.eX = function() {
		!hq || 1 <= a8Z || (a8Z = 1 < (a8Z += 5e-4 * (bf.eS - nB)) ? 1 : a8Z, nB = bf.eS, bf.dk = !0)
	}, this.hH = function(fB, fD) {
		return !(!hq || a8Z <= 0 || (fB -= Math.floor((h.i - i) / 2), fD -= z2(), fB < 0) || fD < 0 || i < fB || j < fD || (i - j / 3 < fB && fD < j / 3 && (hq = !1, bf.dk = !0), 0))
	}, this.vU = function() {
		!hq || a8Z <= 0 || (vV.globalAlpha = a8Z, vV.drawImage(canvas, Math.floor((h.i - i) / 2), z2()), vV.globalAlpha = 1)
	}
}

function dN() {
	var aCU, aCV = new Uint8Array(5),
		aCW = new Uint8Array(5);
	this.aCX = new aCY, this.dd = function() {
		for (var fW = bj.eP.data[119].value, aB = 0; aB < aCV.length; aB++) aCV[aB] = (fW >> 2 * aB) % 4
	}, this.a5Y = function() {
		aCU = [L(119), "", L(120, [bX.aCZ[28]]), L(121, [bX.aCZ[26]]), L(122, [bX.aCZ[0]])], this.aCX.dd()
	}, this.eX = function() {
		this.aCX.eX()
	}, this.a6K = function(id) {
		1 < id && bJ.rJ() || ! function(eB) {
			if (3 === aCV[eB] || 1 === aCW[eB]) return;
			if (aCW[eB] = 1, !(Math.random() < .6)) {
				aCV[eB]++;
				for (var fW = 0, aB = 0; aB < aCV.length; aB++) fW += aCV[aB] << 2 * aB;
				bj.sJ.sK(119, fW)
			}
			return 1
		}(id) || aN.a7G(aCU[id])
	}
}

function aCY() {
	var aCb;
	this.dd = function() {
		aCb = !1
	}, this.eX = function() {
		var gc;
		if (function() {
				if (!aCb) {
					if (bf.kM() % 30 != 9) return;
					if (!bA.gQ.lw(90)) return;
					aCb = !0
				}
				return 1
			}() && (! function() {
				var qj = aN.a7c(956);
				if (qj) {
					if (bA.gQ.lN(qj.player)) return 1;
					aN.a7b(956, 0)
				}
				return
			}() && (-1 === (gc = (aD.hy ? function() {
				var id = bh.ky(),
					f4 = al.kv;
				if (bg.km[id])
					for (var a0g = al.l0, f2 = bg.f2, aB = 0; aB < f4; aB++) {
						var gc = a0g[aB];
						if (f2[gc] !== id) return gc
					} else if (1 < f4) return m0[f4 - 1];
				return -1
			} : function() {
				for (var aCj = al.kv, lJ = al.l0, aCk = kA, aB = 0; aB < aCj; aB++) {
					var gc = lJ[aB];
					if (0 !== aCk[gc]) return gc
				}
				return -1
			})()) ? ! function() {
				var qj = aN.a7c(957);
				if (qj && qj.a77) {
					if (ac.ev(qj.a77.eq << 2)) return 1;
					aN.a7b(957, 0)
				}
				return
			}() : (aN.a1G(0, L(123, [ag.a1V[gc]]), 956, gc, bB.ny, bB.nv, -1, !0), 0)))) {
			var f4 = ao.j3.lZ;
			if (0 !== f4)
				for (var eP = ao.j3.eP, aB = 0; aB < f4; aB++) {
					var eq = eP[aB];
					if (ac.ev(eq << 2)) return void aN.a1G(0, L(124, [bM.fC(eq), bM.fE(eq)]), 957, 0, bB.ny, bB.nv, -1, !0, void 0, {
						fN: 1,
						eq: eq
					})
				}
		}
	}
}

function dO() {
	this.aCl = new aCm, this.dd = function() {
		this.aCl.resize()
	}
}

function aCm() {
	this.resize = function() {
		var aB, aCn = document.head.querySelector("style#ss");
		if (aCn)
			for (aB = aCn.sheet.cssRules.length - 1; 0 <= aB; aB--) aCn.sheet.deleteRule(0);
		else(aCn = document.createElement("style")).id = "ss", document.head.appendChild(aCn);
		var a9Q = "::-webkit-scrollbar",
			dx = bA.qr.r0(bc.sk),
			i0 = bA.qr.r0(Math.max(bA.qr.sA(.012), 8));
		try {
			aCn.sheet.insertRule(a9Q + "{width:" + i0 + ";height:" + i0 + ";}", aCn.sheet.cssRules.length), aCn.sheet.insertRule(a9Q + "-thumb{background-color:white;}", aCn.sheet.cssRules.length), aCn.sheet.insertRule(a9Q +
				"-track{background:" + bB.nu + ";}", aCn.sheet.cssRules.length), aCn.sheet.insertRule(a9Q + "-track:horizontal{border-top:" + dx + " solid white;}", aCn.sheet.cssRules.length), aCn.sheet.insertRule(a9Q +
				"-track:vertical{border-left:" + dx + " solid white;}", aCn.sheet.cssRules.length), aCn.sheet.insertRule(a9Q + "-button{display:none;}", aCn.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCn.sheet.cssRules.length - 1; 0 <= aB; aB--) aCn.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCo = !1, this.no = !1, this.a5H = !1, this.aCp = [0, 0, 0, 0], this.aCq = function() {
		var nO, nP, nb, nc;
		this.a5H = this.a5H || this.no, (this.no || this.aCo && this.a5H) && (nO = ba.aCr[0], nP = ba.aCr[1], nb = ba.aCr[2], nc = ba.aCr[3], nO = nO < this.aCp[0] ? this.aCp[0] : nO, nP = nP < this.aCp[1] ? this.aCp[1] : nP, nb = nb > this.aCp[
				2] ? this.aCp[2] : nb, nc = nc > this.aCp[3] ? this.aCp[3] : nc, this.no = !1, this.aCo = !1, nO === this.aCp[0] && nP === this.aCp[1] && nb === this.aCp[2] && nc === this.aCp[3] ? this.a5I() : nO <= nb && nP <= nc && a5a
			.putImageData(a5b, 0, 0, nO, nP, nb - nO + 1, nc - nP + 1))
	}, this.a5I = function() {
		this.a5H && this.aCp[2] >= this.aCp[0] && this.aCp[3] >= this.aCp[1] && a5a.putImageData(a5b, 0, 0, this.aCp[0], this.aCp[1], this.aCp[2] - this.aCp[0] + 1, this.aCp[3] - this.aCp[1] + 1), this.a5H = !1
	}, this.a14 = function() {
		this.aCp[2] >= this.aCp[0] && this.aCp[3] >= this.aCp[1] && a5a.putImageData(a5b, 0, 0, this.aCp[0], this.aCp[1], this.aCp[2] - this.aCp[0] + 1, this.aCp[3] - this.aCp[1] + 1), this.a5H = !1
	}, this.dd = function() {
		var fB, fD;
		this.aCo = !1, this.no = !1, this.a5H = !1, this.aCp[0] = bS.fF, this.aCp[1] = bS.fG, this.aCp[2] = this.aCp[3] = 0;
		loop: for (fB = 1; fB < bS.fF - 1; fB++)
			for (fD = bS.fG - 2; 1 < fD; fD--)
				if (1 === aCs[ac.yZ(fB, fD) + 2]) {
					this.aCp[0] = fB;
					break loop
				} loop: for (fD = 1; fD < bS.fG - 1; fD++)
			for (fB = bS.fF - 2; 1 < fB; fB--)
				if (1 === aCs[ac.yZ(fB, fD) + 2]) {
					this.aCp[1] = fD;
					break loop
				} loop: for (fB = bS.fF - 2; 0 < fB; fB--)
			for (fD = bS.fG - 2; 1 < fD; fD--)
				if (1 === aCs[ac.yZ(fB, fD) + 2]) {
					this.aCp[2] = fB;
					break loop
				} loop: for (fD = bS.fG - 2; 0 < fD; fD--)
			for (fB = bS.fF - 2; 1 < fB; fB--)
				if (1 === aCs[ac.yZ(fB, fD) + 2]) {
					this.aCp[3] = fD;
					break loop
				}
	}
}

function L(value, aCt, w3, aCu) {
	var qY = "number" == typeof value ? b7.aCv[value] : value;
	if (w3 && b7.aCw() && (qY = w3), !aCt) return aCu ? qY.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qY;
	for (var f4 = aCt.length, aB = 0; aB < f4; aB++)
		for (var fN = 0; fN < 3; fN++) qY = qY.replace("{" + (10 * fN + aB) + "}", aCt[aB]);
	return qY
}

function c2() {
	this.data = new aCx;
	var aCy = (new aCz).L84,
		aD1 = (this.aCv = aCy, !(this.aD0 = "en"));
	this.dd = function() {
		var qY, g;
		aD1 = !1, ("en" === (qY = bj.eP.data[12].value).split("-")[0].toLowerCase() ? (b7.aCv = aCy, b7.aD0 = qY, 1) : bj.eP.data[12].value === bj.eP.data[145].value && 0 < bj.eP.data[146].value && (qY = bj.eP.data[146].value, (g = bj.r8.wG(qY, !
			1)).length === qY) && !!bA.qz.a3Z(g) && function(g) {
			for (var f4 = g.length, j = 0; j < f4; j++) g[j] = g[j].replace("&#39;", "'");
			var aD7 = bj.r8.wG(f4, !0);
			if (f4 !== aD7.length) return !1;
			if (!bA.qz.a3Z(aD7)) return !1;
			for (var lK = aCy.length, aAL = new Array(lK), aD8 = lK === f4, gX = Math.min(f4, lK), aB = 0; aB < lK; aB++)
				if (aAL[aB] = aCy[aB], aB < f4 && aD7[aB] === aAL[aB]) aAL[aB] = g[aB];
				else {
					aD8 = !1;
					for (var fO = 0; fO < gX; fO++)
						if (aD7[fO] === aAL[aB]) {
							aAL[aB] = g[fO];
							break
						}
				} return b7.aCv = aAL, b7.aD0 = bj.eP.data[12].value, aD8
		}(g)) || (aD1 = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new e1
	}, this.aCw = function() {
		return this.aCv === aCy || !aCy.length
	}, this.aD9 = function() {
		var aDA;
		return !!aD1 && (aD1 = !1, 0 !== aCy.length) && (aDA = bj.eP.data[12].value, b0.eZ.aDB(0, aDA.slice(0, 20)), !0)
	}, this.aDC = function(g) {
		g.length !== aCy.length ? 8 === t.t8 && t.a5x().aDD(30, 0, 1) : (this.aCv = g, this.aD0 = bj.eP.data[12].value, bj.sJ.sK(145, this.aD0), bj.sJ.sK(146, g.length), bj.r8.wM(g, !1), bj.r8.wM(aCy, !0), 8 === t.t8 ? t.a5x().aDD(30) : 0 === aa
			.a27() && 5 === t.t8 && t.y.aDE())
	}, this.aDF = function() {
		var wP, g = navigator.languages;
		return g && g.length ? (wP = Math.max(b7.data.aDG(g[0]), 0), 1 === g.length ? [wP, wP] : [wP, Math.max(b7.data.aDG(g[1]), 0)]) : [0, 0]
	}
}

function aCx() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDH = function() {
		for (var aDI = [], g = this.g, f4 = g.length, aB = 0; aB < f4; aB++) aDI.push(g[aB]);
		var aDJ = bj.eP.data[12].w3;
		for (aB = 0; aB < f4; aB++)
			if (aDI[aB] === aDJ) {
				aDI.splice(aB, 1), f4--;
				break
			} aDI.sort(), f4++, aDI.unshift(aDJ);
		try {
			if ("undefined" == typeof Intl) return aDI;
			for (aB = 0; aB < f4; aB++) {
				var qY = new Intl.DisplayNames([aDI[aB]], {
					type: "language"
				}).of(aDI[aB]);
				qY !== aDI[aB] && (aDI[aB] = aDI[aB] + ": " + qY)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDI
	}, this.aDL = function(aDM) {
		for (var qY = bj.eP.data[12].value, f4 = aDM.length, aB = 0; aB < f4; aB++)
			if (qY === aDM[aB].split(":")[0]) return aB;
		return 0
	}, this.aDG = function(aDN) {
		if (aDN && !(aDN.length < 2)) {
			aDN = aDN.split("-")[0].toLowerCase();
			for (var g = this.g, f4 = g.length, aB = 0; aB < f4; aB++)
				if (aDN === g[aB]) return aB
		}
		return -1
	}
}

function aCz() {
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
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}",
		"Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links",
		"Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
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
	var fB, fD, j, u6, aDO, aDP, aDQ, aDR, aDS, i, a4C, aDT;
	this.hq = !1, this.dd = function(qY, aDU) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aDU ? void(a4C = qY) : a4C !== qY ? void 0 : void a0.wE.saveString(200, qY);
		aDU && (a4C = qY, (aDT = document.createElement("a")).appendChild(document.createTextNode(a4C)), this.hq = !0, aDT.title = a4C, aDT.target = "_blank", aDT.href = a4C, aDT.style.textAlign = "center", aDT.style.color = bB.ny, aDT.style
			.position = "absolute", aDT.style.padding = "0px", aDT.style.margin = "0px", this.resize(), document.body.appendChild(aDT), bf.dk = !0)
	}, this.s8 = function() {
		return !(!this.hq || (t.removeChild(document.body, aDT), this.hq = !1))
	}, this.hH = function(iL, iM) {
		return !!this.hq && ((iL < fB || iM < fD || fB + i < iL || fD + j < iM || fB + i - u6 < iL && iM < fD + u6) && (bf.dk = !0, this.hq = !1, t.removeChild(document.body, aDT)), !0)
	}, this.resize = function() {
		var a6b, aDV;
		this.hq && (aDR = Math.floor(.8 * (a0.a1.iD() ? h.i > h.j ? .6 : .55 : .4) * h.iE), u6 = Math.floor(.15 * aDR), aDO = Math.floor(.35 * u6), aDP = Math.floor(.5 * u6), aDQ = Math.floor(2.5 * aDP), j = u6 + aDO + 3 * aDP, a6b = bA.qr.si(1,
			aDO / h.k), aDS = Math.floor(h.k * aQ.measureText(a4C, a6b)), aDV = i = (aDR < aDS ? aDS : aDR) + 2 * aDQ, i = Math.min(i, h.i - 2 * (a0.a1.iD() ? 2 : 1) * bc.gap), a6b = bA.qr.si(1, i / aDV * aDO / h.k), aDS = Math.floor(h
			.k * aQ.measureText(a4C, a6b)), fB = Math.floor((h.i - i) / 2), fD = Math.floor((h.j - j) / 2), aDT.style.font = a6b, aDT.style.top = Math.floor((fD + 1.4 * aDP + u6) / h.k) + "px", aDT.style.left = Math.floor((fB + (i -
			aDS) / 2) / h.k) + "px")
	}, this.vU = function() {
		this.hq && (vV.fillStyle = bB.nv, vV.fillRect(fB, fD + u6, i, j - u6), vV.fillStyle = bB.p7, vV.fillRect(fB, fD, i, u6), vV.fillStyle = bB.ny, vV.lineWidth = bc.zq, vV.strokeStyle = bB.ny, vV.strokeRect(fB, fD, i, j), vV.fillRect(fB, fD +
			u6, i, bc.zq), vV.font = bA.qr.si(1, .48 * u6), bA.qr.textAlign(vV, 1), bA.qr.textBaseline(vV, 1), vV.fillText(L(125), Math.floor(fB + (i - .5 * u6) / 2), Math.floor(fD + .55 * u6)), aM.a6m(Math.floor(fB + i - .8 * u6), Math
			.floor(fD + .25 * u6), Math.floor(.5 * u6)), vV.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBp, fB = [0, 0, 0, 0, 0],
		fD = [0, 0, 0, 0, 0],
		na = [1, 1, 1, 1, 1],
		fW = [!0, !0, !0, !1, !1],
		ec = (this.fr = [!0, !0, !0, !1, !1], null);
	this.aDW = function(a3k, aDX) {
		ec = a3k, fW = aDX, aBp = [bK.aDY, bK.a20, bK.aDZ, bK.aDZ, bK.aDa], this.dd()
	}, this.dd = function() {
		if (ab.ta()) {
			var aB, tF = Math.floor((a0.a1.iD() ? .261 : .195) * h.iE),
				tG = Math.floor(.9 * tF),
				a9I = Math.floor(.17 * tG);
			if (gap = a0.a1.iD() ? 2 * bc.gap : bc.gap, na[0] = tF / ec[0].width, na[1] = tG / ec[1].width, na[2] = a9I / ec[2].height, na[3] = a9I / ec[3].height, na[4] = a9I / ec[4].height, na[2] *= 1.7, na[3] *= 1.07, fB[0] = gap, fB[1] = gap,
				fB[2] = gap, fB[3] = gap, fB[4] = Math.floor(2 * gap + na[3] * ec[3].width), fD[0] = gap, fD[1] = fD[0] + gap + na[0] * ec[0].height, fD[2] = fD[1] + gap + na[1] * ec[1].height, fD[3] = fD[2] + gap + na[2] * ec[2].height, fD[4] =
				fD[3], !fW[0])
				for (aB = 0; aB < 5; aB++) fD[aB] -= na[0] * ec[0].height + gap;
			if (!fW[1])
				for (aB = 2; aB < 5; aB++) fD[aB] -= na[1] * ec[1].height + gap
		}
	}, this.hq = function() {
		return !(7 === aa.a27() && a0.a1.iD())
	}, this.hH = function(iL, iM) {
		if (ec && this.hq())
			for (var aB = fW.length - 1; 0 <= aB; aB--)
				if (fW[aB] && this.fr[aB] && fB[aB] < iL && fD[aB] < iM && iL < fB[aB] + na[aB] * ec[aB].width && iM < fD[aB] + na[aB] * ec[aB].height) return t.u(9, t.t8, new aDb(L(126), bA.qr.a4B(aBp[aB]))), !0;
		return !1
	}, this.vU = function() {
		if (ec && this.hq()) {
			var aB;
			for (vV.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fW[aB] && this.fr[aB] && (vV.setTransform(na[aB], 0, 0, na[aB], fB[aB], fD[aB]), vV.drawImage(ec[aB], 0, 0));
			vV.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDc = 0, this.aDd = null, this.uH = null, this.lE = null, this.y = null, this.ue = null, this.uE = null, this.message = null, this.aDe = null, this.s7 = null, this.aDf = null, this.aDg = new aDh, this.a24 = 0, this.aAC = 0, this.dd =
		function() {
			this.aAC = bf.eS, this.aDc = bG.tB.xB(bj.eP.data[105].value, 5), this.uH = new aDi, this.lE = new aDj, this.y = new aDk, this.ue = new aDl, this.uE = new aDm, this.message = new aDn, this.aDe = new aDo, this.s7 = new aDp, this.aDf =
				new aDq, this.y.dd(), bp.dd(), this.a24 = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uY = function() {
			this.s7 && this.s7.uY(), this.aDd = null, this.uH = null, this.lE = null, this.y = null, this.ue = null, this.uE = null, this.message = null, this.aDe = null, this.s7 = null, this.aDf = null, this.a24 = 0, bp.uY(), a0.a1.setState(0)
		}
}

function aDi() {
	function aED(g, tS, tT) {
		var aEE = g[tS];
		g[tS] = g[tT], g[tT] = aEE
	}
	this.uI = [
		[],
		[],
		[],
		[]
	], this.uJ = [0, 0, 0, 0], this.aDr = [], this.aDs = function(aDt, t6, username, uO, a4e, aDu, elo, color, wj, aDv) {
		username = this.aDx(t6, username, uO, a4e, aDu, elo, color, wj, aDv);
		this.uI[aDt].push(username), bn.aDc === t6 && (bn.aDd = username), bn.aDf.aDy(t6) && (username.uQ = 1), bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === aDt && 1 === bn.y.rv[2]
	}, this.aDx = function(t6, username, uO, a4e, aDu, elo, color, wj, aDv) {
		return {
			t6: t6,
			username: username,
			uO: uO,
			a4e: a4e,
			aDu: aDu,
			elo: elo,
			color: color,
			wj: wj,
			aDv: aDv
		}
	}, this.aE0 = function(eB, aDt, uO, a4e, aDu, elo, wj, color) {
		eB = this.uI[aDt][eB];
		eB.uO = uO, eB.a4e = a4e, eB.aDu = aDu, eB.elo = elo, eB.wj = wj, eB.color = color, bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === aDt && 1 === bn.y.rv[2]
	}, this.aE1 = function(eB, aDt, aE2) {
		var eB = this.uI[aDt][eB],
			aE3 = eB.username,
			aE4 = "Redacted " + bF.tB.a09(eB.t6, 2);
		eB.username = aE2 ? "[" + bA.rq.a1d(aE3) + "] " + aE4 : aE4, aE3.indexOf("Redacted") < 0 && (eB.aE5 = aE3), bn.s7.aE6(eB.t6), bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === aDt && 1 === bn.y.rv[2]
	}, this.aE7 = function(eB, aE8, aE9) {
		var player = this.uI[aE8][eB];
		this.aEA(eB, aE8), this.uI[aE9].push(player), bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === aE9 && 1 === bn.y.rv[2]
	}, this.aEA = function(eB, aE8) {
		var uH = this.uI[aE8];
		this.aDr.push(uH[eB]), 1e3 < this.aDr.length && this.aDr.shift(), eB >= this.uJ[aE8] ? uH[eB] = uH[uH.length - 1] : (this.uJ[aE8]--, 2 === aE8 ? (uH.splice(this.uJ[aE8] + 1, 0, uH[uH.length - 1]), uH.splice(eB, 1)) : (uH[eB] = uH[this.uJ[
			aE8]], uH[this.uJ[aE8]] = uH[uH.length - 1])), uH.pop(), bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === aE8 && 1 === bn.y.rv[2]
	}, this.aEB = function(eB, ru) {
		bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === ru && 1 === bn.y.rv[2];
		var uH = this.uI[ru],
			qj = uH[eB];
		if (2 === ru)
			if (eB >= this.uJ[ru]) {
				bn.aDf.join(qj);
				for (var aEC = this.uJ[ru], elo = qj.elo; aEC && elo > uH[aEC - 1].elo;) aEC--;
				uH[eB] = uH[this.uJ[ru]], uH.splice(this.uJ[ru]++, 1), uH.splice(aEC, 0, qj)
			} else uH.splice(this.uJ[ru]--, 0, qj), uH.splice(eB, 1);
		else eB >= this.uJ[ru] ? (bn.aDf.join(qj), aED(uH, this.uJ[ru]++, eB)) : aED(uH, --this.uJ[ru], eB)
	}, this.aEF = function(t6) {
		for (var uI = this.uI, f4 = uI.length, aB = 0; aB < f4; aB++)
			for (var uH = uI[aB], lK = uH.length, fN = 0; fN < lK; fN++)
				if (t6 === uH[fN].t6) return uH[fN];
		return null
	}
}

function aDq() {
	var aEG = [],
		aEH = [],
		aEI = 0;

	function aEJ(g, a7e, aEN, aEO) {
		var f4 = g.length;
		if (0 === f4) return "";
		var qY = "@" + g[0];
		if (1 === f4) return qY + a7e + aEO;
		for (var aB = 1; aB < f4 - 1; aB++) qY += ", @" + g[aB];
		return qY + " and @" + g[f4 - 1] + aEN + aEO
	}
	this.dd = function() {
		var qY = aEJ(aEH, " is", " are", " in the lobby!");
		qY.length && bn.message.aEK({
			id: 7,
			r: qY
		}), aEG = [], aEH = [], aEI = 0
	}, this.aDy = function(aEL) {
		return bn.aDc !== aEL && (aEL = bF.tB.a09(aEL, 5), !!bj.vt.uQ(aEL)) && (aEH.push(aEL), !0)
	}, this.join = function(player) {
		bn.aDc !== player.t6 && (player = bF.tB.a09(player.t6, 5), bj.vt.uQ(player)) && aEG.push(player)
	}, this.aEM = function() {
		var a7e, aEN;
		++aEI < 3 || (aEI = 0, a7e = aEJ(aEH, "", "", " entered the lobby!"), (a7e = (aEN = aEJ(aEG, "", "", " joined a game!")).length ? a7e.length ? a7e + " " + aEN : aEN : a7e).length && bn.message.aEK({
			id: 7,
			r: a7e
		}), aEG = [], aEH = [])
	}
}

function aDh() {
	this.dl = function(eB) {
		if ((uJ = bn.uH.uJ[eB]) < 2 && !__fx.customLobby.isActive()) return !1;
		var rw = bn.y.rx[eB],
			aEP = 9 === rw.aEQ ? 333 : 512,
			uJ = Math.min(uJ, aEP);
		8 === rw.aEQ && (uJ -= uJ % 2);
		aEP = bn.uH.uI[eB].splice(0, uJ), bn.uH.uJ[eB] -= uJ, uJ = function(aER) {
			if (bn.aDd) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var f4 = aER.length, t6 = bn.aDd.t6, aB = 0; aB < f4; aB++)
					if (aER[aB].t6 === t6) return aB
			}
			return -1
		}(aEP);
		return -1 === uJ ? (bn.uH.aDr = bn.uH.aDr.concat(aEP), 1e3 < bn.uH.aDr.length && bn.uH.aDr.splice(0, bn.uH.aDr.length - 1e3), bn.y.aDz += 29 === t.t8 && bn.y.rv[0] === eB && 1 === bn.y.rv[2], !1) : (8 === rw.aEQ && (rw.aEU = (rw.aEU + (
			uJ >> 1)) % 1024, eB = uJ - uJ % 2, uJ %= 2, aEP = aEP.slice(eB, 2 + eB)), ax.dd(rw, aEP, uJ), !0)
	}, this.aEV = function(rw, aER, aES) {
		var f7 = aD.data = new a5N,
			aEZ = (f7.spawningSeed = rw.spawningSeed, rw.aEQ < 7 ? (f7.gameMode = 1, f7.numberTeams = rw.aEQ + 2) : 9 === rw.aEQ ? (f7.gameMode = f7.isZombieMode = 1, f7.numberTeams = 2) : (f7.gameMode = 0, f7.battleRoyaleMode = 7 === rw.aEQ ?
				0 : 10 === rw.aEQ ? 1 : 2), f7.selectedPlayer = aES, f7.isContest = rw.aEW, f7.mapType = bS.aEX(rw.ek) ? 0 : 1, bS.aEY(f7, rw.ek), f7.mapSeed = rw.mapSeed, f7.humanCount = aER.length);
		f7.selectableSpawn = 1 === f7.gameMode || aEZ < 100, f7.colorsData = new Uint32Array(aEZ), f7.playerNamesData = new Array(aEZ), f7.a5l = new Uint32Array(aEZ);
		for (var aB = 0; aB < aEZ; aB++) f7.colorsData[aB] = aER[aB].color, f7.playerNamesData[aB] = aER[aB].username, f7.a5l[aB] = aER[aB].t6;
		if (2 === f7.battleRoyaleMode)
			for (f7.elo = new Uint16Array(aEZ), aB = 0; aB < aEZ; aB++) f7.elo[aB] = aER[aB].elo;
		aa.setState(8), bS.a7(rw.ek, f7.mapSeed), aD.a5S(), aD.a5Q = 2
	}
}

function aDj() {
	var e2 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEa = [bB.oC, bB.oC, bB.oD, bB.oh, bB.oi, bB.oT, bB.on, bB.oD, bB.p9, bB.ox, bB.p6],
		aEb = [
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
		aEc = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEq(ry, t6, aEs) {
		for (var fO = ry.length - 1; 0 <= fO; fO--) {
			var qj = ry[fO];
			0 === qj.id && qj.t6 === t6 && (qj.r = "[Redacted Message]", aEs) && (qj.aEt = 1)
		}
	}
	this.s3 = function(aEd) {
		var aEe, a1e;
		return aEd.id < 5 && (aEe = "@" + bF.tB.a09(aEd.t6, 5)), 0 === aEd.id ? aEe + ": " + aEd.r : 1 === aEd.id ? (a1e = "@" + bF.tB.a09(aEd.target, 5), 0 === aEd.aEf ? 32768 <= aEd.value ? aEe + " voted with " + (aEd.value - 32768 + 1) +
				" gold against " + a1e + " to weaken the latter's admin position. 📉" : aEe + " voted with " + (aEd.value + 1) + " gold for " + a1e + " to strengthen the latter's admin position. 💪" : 1 === aEd.aEf ? aEe + " sent " + Math.floor(
					aEd.value / 100) + " 🧈 gold to " + a1e + "." : aEe + " voted with " + (aEd.value / 10).toFixed(1) + " points for " + a1e + " to acknowledge the latter as clan leader. ✅") : 2 === aEd.id ? 0 === aEd.aEf ? aEe +
			" was 🔇 muted for 1 Hour." : 1 === aEd.aEf ? "The username of " + aEe + " was ✂️ redacted. Duration: 1 Day" : aEe + " 👢 was kicked." : 3 === aEd.id ? aEe + bo.eE(aEd.aEf, bo.e8[aEd.aEf][aEd.value]) + "@" + bF.tB.a09(aEd.target, 5) +
			bo.eG(aEd.aEf, bo.e8[aEd.aEf][aEd.value]) : 4 === aEd.id ? aEe + bo.eE(5, bo.e8[5][aEd.aEf]) + "@" + bF.tB.a09(aEd.target, 5) + bo.eG(5, bo.e8[5][aEd.aEf]) : 5 === aEd.id ? aEc[aEd.aEf] : 6 === aEd.id ? "You are about to mention " +
			aEd.value + " player" + (1 === aEd.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEd.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEd.id ? aEd.r : void 0
	}, this.s2 = function(aEd, aEg) {
		return {
			aEd: aEd,
			r: aEg,
			aEh: 0,
			fontSize: 1,
			s6: 0,
			aEi: aEd.id ? bB.og : bB.ny
		}
	}, this.uM = function(player, ru) {
		return (2 === ru ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uN = function(uO) {
		return aEa[uO]
	}, this.aEj = function(uO, a4e) {
		return uO < 3 || 7 === uO ? aEb[uO][0] : 4 === uO ? aEb[uO][a4e < 1 ? 0 : a4e < 10 ? 1 : 2] : aEb[uO][a4e < 10 ? 0 : 1]
	}, this.aEk = function(a4e) {
		return 0 === a4e
	}, this.aEF = function(ru, t6) {
		for (var uI = bn.uH.uI, uH = uI[ru], f4 = uH.length, aB = 0; aB < f4; aB++)
			if (t6 === uH[aB].t6) return uH[aB];
		for (var fO = 0; fO < uI.length; fO++)
			if (ru !== fO)
				for (f4 = (uH = uI[fO]).length, aB = 0; aB < f4; aB++)
					if (t6 === uH[aB].t6) return uH[aB];
		return null
	}, this.uP = function(qj) {
		return !!bn.aDd && qj.t6 === bn.aDd.t6
	}, this.aEl = function(uH, aEm, aEn) {
		var a1b = [];
		loop: for (var aB = aEm; aB < aEn; aB++) {
			var a1c = bA.rq.a1d(uH[aB].username);
			if (a1c) {
				for (var fO = a1b.length - 1; 0 <= fO; fO--)
					if (a1c === a1b[fO].name) {
						a1b[fO].gX++;
						continue loop
					} a1b.push({
					name: a1c,
					gX: 1
				})
			}
		}
		if (a1b.sort(function(fN, fO) {
				return fO.gX - fN.gX
			}), 0 === a1b.length) return "";
		for (var qY = a1b[0].name + ": " + a1b[0].gX, aB = 1; aB < a1b.length; aB++) qY += "   " + a1b[aB].name + ": " + a1b[aB].gX;
		return qY
	}, this.aEo = function(uO, a4e, aDu) {
		return 0 === e2[uO].length ? "Rank: " + (a4e + 1) : e2[uO] + " Rank: " + (a4e + 1) + (3 !== uO && aDu < 100 ? "   " + e2[3] + " Rank: " + (aDu + 1) : "")
	}, this.aEp = function(t6) {
		for (var rx = bn.y.rx, aB = 0; aB < rx.length; aB++) aEq(rx[aB].ry, t6);
		aEq(bn.message.aEr(), t6, 1), bn.s7.aEp(t6)
	}
}

function aDm() {
	var sa = 0,
		aEu = 0,
		aEv = 0,
		aEw = null,
		aEx = null;

	function aF0(qj, aF1, aF2) {
		var qY = qj.username;
		return (qY += "   " + bn.lE.aEo(qj.uO, qj.a4e, qj.aDu)) + function(qj) {
			qj = qj.wj;
			if (qj < 1e3) return "   Gold: " + qj;
			if ((qj %= 1024) < 1e3) return "   Gold: " + qj + "k";
			return "   Gold: " + (qj - 999) + "M"
		}(qj) + ("   IP: " + bF.tB.a09(qj.aDv, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aF2 ? aEu : aEz(qj, aF1)])
	}

	function aEz(qj, aF1) {
		return aEu = aF1 || bn.uH.aEF(qj.t6) ? 1 : 0
	}
	this.uF = 0, this.aEy = function() {
		!sa || aEu === aEz(aEx) && aEv === aEx.wj || (aEv = aEx.wj, aEw.show(-1, -1, aF0(aEx, 0, 1), 1, 1, aEx.color))
	}, this.uR = function(e, qj, aF1) {
		var a9P = e.getBoundingClientRect();
		this.show(a9P.left, a9P.top, qj, 0, aF1), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bn.uE && bn.uE.s8(1)
		}), this.uF = aF1
	}, this.show = function(fB, fD, qj, se, aF1) {
		aEw = aEw || new sX, aEv = (aEx = qj).wj, aEw.show(fB, fD, aF0(qj, aF1), se, 0, aEx.color), sa = 1
	}, this.s8 = function(sl) {
		this.uF = 0, aEw && aEw.s8(sl) && (sa = 0, aEx = null)
	}
}

function aDk() {
	function aF7(aF9) {
		bn.y.aDz && 1 === bn.y.rv[2] && t.a5y(29).aFA(), bn.y.aDz = 0, t.a5y(29).aFB(), 0 !== bn.y.rx[bn.y.rv[0]].u0 && !aF9 || t.a5y(29).aFC(), bn.uE.aEy()
	}
	this.rx = new Array(4), this.rv = [0, 0, 1, 0], this.aDz = 0, this.aF4 = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rx.length; aB++) this.rx[aB] = new aF5;
		this.rv[0] = bj.eP.data[158].value
	}, this.aF6 = function() {
		aF7(!0), bn.aDf.dd()
	}, this.aEM = function() {
		bn.aDf.aEM();
		for (var aB = 0; aB < bn.y.rx.length; aB++) {
			var rw = bn.y.rx[aB];
			0 === rw.u0 ? rw.aFD = 0 : (rw.aFE = Math.max(rw.aFE - rw.aFD % 2, 0), rw.aFD++)
		}
		aF7(!1)
	}, this.aFF = function(ru) {
		this.rv[0] !== ru || this.rv[2] || t.a5y(29).aFG()
	}
}

function aDo() {
	var aFH = 0,
		aFI = "",
		aFJ = 0,
		aFK = 0,
		aFL = 0;

	function aFN(aEg) {
		b0.aFY.aFZ(3, aEg)
	}

	function aFW(gX) {
		aFH = 1, bn.message.aEK({
			id: 6,
			value: gX
		})
	}

	function aFQ(r) {
		var aFc = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFc)
	}
	this.a0w = function(r) {
		var aFM, g, aFS;
		if (aFH) return aFH = 0, "yes" === (aFM = r.toLowerCase()) || "y" === aFM ? void aFN(aFI) : void bn.message.aEK({
			id: 5,
			aEf: 7
		});
		!(r.indexOf("@") < 0) && (aFM = aFQ(r)) ? (aFI = r, g = function(aFP) {
			for (var f4 = aFP.length, aFa = [0, 0, 0, 0], aB = 0; aB < f4; aB++)
				for (var i = aFP[aB], fN = 0; fN < 4; fN++) i === "@room" + (fN + 1) && (aFa[fN] = 1);
			if ((aFK = bA.qz.a3O(aFa)) % 4 == 0) return bA.qz.a3g(bn.uH.uI);
			for (fN = 0; fN < 4; fN++) aFa[fN] = aFa[fN] ? bn.uH.uI[fN] : [];
			return bA.qz.a3g(aFa)
		}(aFM), function(aFP, aFS, r) {
			if (!aFJ) return;
			for (var f4 = aFS.length, aB = 0; aB < f4; aB++) 2 === aFS[aB].id && (r = r.replace(aFP[aFS[aB].eB], "@" + aFS[aB].fW));
			return aFH = 1, aFN((aFI = r).slice(0, 126) + "|"), 1
		}(aFM, aFS = function(aFP) {
			for (var aFS = [], f4 = (aFL = aFJ = 0, aFP.length), aB = 0; aB < f4; aB++) {
				var i = aFP[aB],
					lK = i.length;
				bA.rq.startsWith(i, "@[") ? lK <= 9 && bA.rq.a4E(i, "]") && aFS.push({
					id: 0,
					fW: i.substring(2, lK - 1).toUpperCase()
				}) : 6 === lK ? bA.rq.startsWith(i, "@room") || (aFL++, aFS.push({
					id: 1,
					fW: bG.tB.xB(i.substring(1), 5)
				})) : 1 < lK && lK < 5 && 0 <= (lK = b7.data.aDG(i.substring(1))) && (aFS.push({
					id: 2,
					fW: lK,
					eB: aB
				}), aFJ = 1)
			}
			return aFS
		}(aFM), r) || (0 === aFS.length ? aFK || function(aFP) {
			for (var f4 = aFP.length, aB = 0; aB < f4; aB++) {
				var i = aFP[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFM) ? aFW(g.length) : aFN(r) : aFM.length === aFL ? aFN(r) : (function(g, aFS) {
			var lK = aFS.length;
			if (0 === lK) return;
			var f4 = g.length;
			loop: for (var aB = f4 - 1; 0 <= aB; aB--) {
				for (var fN = 0; fN < lK; fN++)
					if (0 === aFS[fN].id) {
						if (aFS[fN].fW === bA.rq.a1d(g[aB].username)) continue loop
					} else if (1 === aFS[fN].id && aFS[fN].fW === g[aB].t6) continue loop;
				g[aB] = g[--f4], g.pop()
			}
		}(g, aFS), aFW(g.length)))) : aFN(r)
	}, this.aFd = function(r) {
		var aFP = aFQ(r);
		if (aFP)
			for (var a5 = new RegExp("^[0-9]+$"), f4 = aFP.length, aB = 0; aB < f4; aB++) {
				var i = aFP[aB].substring(1),
					lK = i.length;
				1 <= lK && lK <= 3 && a5.test(i) && (lK = parseInt(i, 10), !isNaN(lK)) && 0 <= lK && lK < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lK]))
			}
		return r
	}
}

function aDn() {
	var aFe, aFf = [],
		aFg = -1,
		aFh = 0,
		aFi = 0;

	function aFn() {
		aFh = bf.eS, (3 === this.uV ? aFm : (aFg = (aFf.length + aFg + 2 * this.uV - 1) % aFf.length, aFl))()
	}

	function aFl() {
		0 !== aFf.length && (aFi = 0, aFe && aFe.uY(), (aFe = new uS(aFn)).sK(aFg, aFf.length), aFe.show(aFf[aFg]), bn.message.resize())
	}

	function aFm() {
		aFi = 1, aFe && aFe.uY(), (aFe = new uZ(aFl)).sK(aFf.length), aFe.show(), bn.message.resize()
	}
	this.aEK = function(aEd) {
		var qj;
		2 === aEd.id && 3 === aEd.aEf ? bn.lE.aEp(aEd.t6) : (qj = bn.lE.s2(aEd, bn.lE.s3(aEd)), (5 !== aEd.id && 6 !== aEd.id || (t.a5y(29).aFj().s5(qj), 5 === aEd.id)) && (qj = bf.eS < aFh + 2e4, aFg !== aFf.length - 1 && qj || (aFg = aFf
			.length), aFf.push(aEd), bj.eP.data[14].value || 7 === aEd.id || bp.play(), aFe) && (aFi && (bj.eP.data[13].value || qj) ? aFe.sK(aFf.length) : aFl()))
	}, this.show = function() {
		aFm()
	}, this.s8 = function() {
		aFg = aFf.length - 1, aFe && aFe.uY(), aFe = null
	}, this.resize = function() {
		aFe && aFe.resize()
	}, this.aEr = function() {
		return aFf
	}
}

function aDl() {
	var aFo = null,
		aFp = null,
		aFq = 0,
		aFr = 0,
		aFs = null;

	function aFu() {
		0 !== aFp.uO && (bn.ue.s8(), t.u(8, 29, new t9(25, {
			tA: 0,
			t6: bF.tB.a09(aFp.t6, 5),
			t7: 0
		}, 29)))
	}

	function aFw() {
		return !bn.aDd || bn.lE.uP(aFp) ? 1 : 0
	}

	function aFv() {
		var fB = aFo.fB,
			fD = aFo.fD,
			aG5 = (bn.ue.s8(), aFw());
		aFo = new ua([new w(bo.e8[5][0], function() {
			aFz(5, 0)
		}, aG5), new w(bo.e8[5][1], function() {
			aFz(5, 1)
		}, aG5), new w(bo.e8[5][2], function() {
			aFz(5, 2)
		}, aG5), new w(bo.e8[5][3], function() {
			aFz(5, 3)
		}, aG5)]), aFy(fB, fD), aFr = aFq = 2
	}

	function aFx() {
		29 === t.t8 && t.a5x().aDe(bF.tB.a09(aFp.t6, 5))
	}

	function aFz(id, value) {
		5 === id && b0.aG6.aG7({
			tA: 3,
			t6: bF.tB.a09(aFp.t6, 5),
			value: value
		})
	}

	function aFy(fB, fD, ug) {
		aFo.show(fB, fD, ug), bn.uE.show(aFo.fB, aFo.fD, aFp, 1)
	}
	this.aFt = function(e, qj) {
		aFq = 1, aFp = qj, aFo = new ua([new w(L(127), aFu, 0 === qj.uO ? 1 : 0), new w(L(128), aFv, aFw()), new w(L(129), aFx, 0)]), aFy((aFs = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aFs.clientY, 1)
	}, this.a2y = function(code) {
		if (29 !== t.t8) return !1;
		if (!aFp) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.s8();
			else if (bA.rq.startsWith(code, "Numpad") || bA.rq.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFq) this.aFt(aFs, aFp);
				else {
					if (!aFo) return !1;
					1 === aFq ? code <= 1 ? aFu() : 2 === code ? aFv() : (aFx(), this.s8()) : (aFz(aFr, bL.iC(code - 1, 0, bo.e8[aFr].length - 1)), this.s8())
				}
		}
		return !0
	}, this.s8 = function() {
		aFq = 0, aFo && aFo.s8(), aFo = null, bn.uE.s8()
	}
}

function aF5() {
	this.u0 = 0, this.ek = 0, this.mapSeed = 0, this.aEQ = 0, this.aGA = 0, this.aGB = 0, this.aEW = 0, this.aFE = 0, this.spawningSeed = 0, this.a2C = 0, this.aEU = 0, this.ry = [], this.rz = 1048575, this.aFD = 0, this.aGC = [{
		ek: 0,
		mapSeed: 0,
		aEQ: 0,
		eS: 100,
		aEW: 0
	}, {
		ek: 1,
		mapSeed: 0,
		aEQ: 1,
		eS: 200,
		aEW: 0
	}, {
		ek: 2,
		mapSeed: 0,
		aEQ: 2,
		eS: 300,
		aEW: 0
	}, {
		ek: 3,
		mapSeed: 0,
		aEQ: 3,
		eS: 400,
		aEW: 0
	}, {
		ek: 0,
		mapSeed: 0,
		aEQ: 9,
		eS: 500,
		aEW: 0
	}, {
		ek: 1,
		mapSeed: 0,
		aEQ: 10,
		eS: 600,
		aEW: 0
	}, {
		ek: 2,
		mapSeed: 0,
		aEQ: 8,
		eS: 700,
		aEW: 0
	}, {
		ek: 3,
		mapSeed: 0,
		aEQ: 3,
		eS: 800,
		aEW: 0
	}]
}

function aDp() {
	var aGD = [],
		tL = [],
		aGE = [];

	function aGG(qj) {
		for (var r = qj.r, aGF = [];;) {
			var ec = function aGI(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qY = r.substring(position + 1, position + 6);
				if (5 !== qY.length) return aGI(r, position + 1);
				if (bA.rq.startsWith(qY, "room")) return aGI(r, position + 1);
				var aGP = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGP.test(qY)) return aGI(r, position + 1);
				aGP = r.substring(position + 6, position + 7);
				if (1 !== aGP.length) return position;
				qY = new RegExp("^[ :!.]+$");
				if (!qY.test(aGP)) return aGI(r, position + 1);
				return position
			}(r, 0);
			if (-1 === ec) {
				aGF.push(aGJ(r, qj));
				break
			}
			0 === ec ? aGF.push(aGK(r.substring(1, 6), qj, ec)) : (aGF.push(aGJ(r.substring(0, ec), qj)), aGF.push(aGK(r.substring(ec + 1, ec + 6), qj, ec))), r = r.substring(ec + 6)
		}
		return aGF
	}

	function aGK(qY, qj, ec) {
		var aDw = function(qY) {
				var t6 = bG.tB.xB(qY, 5),
					aDw = bn.uH.aEF(t6);
				if (aDw) {
					for (aGD.push(aDw); 75 < aGD.length;) aGD.shift();
					return aDw
				}
				for (var aDr = bn.uH.aDr, aB = aDr.length - 1; 0 <= aB; aB--)
					if (aDw = aDr[aB], t6 === aDw.t6) return aGD.push(aDw), aDw;
				for (aB = aGD.length - 1; 0 <= aB; aB--)
					if (aDw = aGD[aB], t6 === aDw.t6) return aGD.push(aDw), aDw;
				return bn.uH.aDx(t6, qY, 1, 999999, 999999, 0, 0, 0, 0)
			}(qY),
			qY = (0 === ec && 0 === qj.aEd.id && qj.s6 && (qj.fontSize = bn.lE.aEj(aDw.uO, aDw.a4e), qj.aEh = bn.lE.aEk(aDw.a4e)), document.createElement("span"));
		return qY.textContent = function(aDw, qj, ec) {
			if (aDw.aGN) return aDw.aGN--, ec = 2 === qj.aEd.id || (3 === qj.aEd.id || 4 === qj.aEd.id) && 0 !== ec, aDw.username + (ec ? " (" + aDw.aE5 + ")" : "");
			if (qj.aEd.aEt) return "Redacted " + bF.tB.a09(aDw.t6, 2);
			return aDw.username
		}(aDw, qj, ec), qY.style.display = "inline-block", qY.style.color = bn.lE.uN(aDw.uO), qY.style.cursor = "pointer", qY.style.margin = "0", qY.style.font = "inherit", qY.style.minWidth = qY.style.minHeight = "1em", bn.lE.uP(aDw) && (qY
			.style.textDecoration = "underline"), aDw.uQ && (qY.style.textDecorationLine = "underline", qY.style.textDecorationStyle = "dotted"), bn.lE.aEk(aDw.a4e) && (qY.style.fontWeight = "bold"), qY.onclick = function(e) {
			bn.ue.aFt(e, aDw)
		}, bJ.rJ() || (qY.onmouseover = function(e) {
			bn.uE.uR(e.target, aDw)
		}), tL.push(qY), qY
	}

	function aGJ(r, qj) {
		var rp = document.createElement("span");
		return rp.textContent = r, rp.style.color = qj.aEi, rp.style.margin = "0", rp.style.font = "inherit", rp
	}

	function aGU(aDw, aE4, t6) {
		t6 !== aDw.t6 || aDw.aE5 || (aDw.aE5 = aDw.username, aDw.username = aE4)
	}
	this.uY = function() {
		for (var aB = 0; aB < tL.length; aB++) tL[aB].onclick = tL[aB].onmouseover = null;
		aGE = tL = null
	}, this.transform = function(qj) {
		for (var qW = document.createElement("div"), aGF = aGG(qj), aB = 0; aB < aGF.length; aB++) qW.appendChild(aGF[aB]);
		0 === qj.aEd.id && (qW.vx143 = qj.aEd, aGE.push(qW)), qW.style.margin = "0.6em 0.6em", qj.s6 && (qW.style.marginLeft = qW.style.marginRight = "inherit"), qW.style.font = "inherit";
		var aGH = 0 < qj.aEd.id;
		return qj.aEh && (qW.style.fontWeight = "bold"), aGH && (qW.style.paddingLeft = "0.7em"), aGH && (qW.style.fontStyle = "italic"), qW.style.fontSize = qj.fontSize.toFixed(2) + "em", qW
	}, this.aGS = function(aGT) {
		if (aGT && (2 === aGT.id && 1 === aGT.aEf || 3 === aGT.id && 2 === aGT.aEf)) {
			var t6 = 3 === aGT.id ? aGT.target : aGT.t6;
			if (!bn.uH.aEF(t6)) {
				for (var aE4 = "Redacted " + bF.tB.a09(t6, 2), aDr = bn.uH.aDr, aB = aDr.length - 1; 0 <= aB; aB--) aGU(aDr[aB], aE4, t6);
				for (aB = aGD.length - 1; 0 <= aB; aB--) aGU(aGD[aB], aE4, t6)
			}
		}
	}, this.aE6 = function(t6) {
		for (var aGV = aGE, aB = aGV.length - 1; 0 <= aB; aB--) {
			var f7 = aGV[aB];
			if (f7.vx143.t6 === t6) {
				for (; f7.firstChild;) t.removeChild(f7, f7.firstChild);
				for (var aGF = aGG(bn.lE.s2(f7.vx143, bn.lE.s3(f7.vx143))), fN = 0; fN < aGF.length; fN++) f7.appendChild(aGF[fN]);
				aGV.splice(aB, 1)
			}
		}
	}, this.aEp = function(t6) {
		for (var aGV = aGE, aB = aGV.length - 1; 0 <= aB; aB--) {
			var f7 = aGV[aB];
			if (f7.vx143.t6 === t6) {
				for (; f7.firstChild;) t.removeChild(f7, f7.firstChild);
				f7.vx143.r = "[Redacted Message]";
				for (var aGF = aGG(bn.lE.s2(f7.vx143, bn.lE.s3(f7.vx143))), fN = 0; fN < aGF.length; fN++) f7.appendChild(aGF[fN]);
				aGV.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGW, aGX, aGY;

	function aGd(aB) {
		var button = aY.rQ[aB],
			fB = button.fB,
			fD = button.fD,
			i = button.i,
			j = button.j;
		vV.fillStyle = button.aGb, vV.fillRect(fB, fD, i, j), aB === aGW && (vV.fillStyle = aGY, vV.fillRect(fB, fD, i, j)), vV.lineWidth = bc.zq, vV.strokeStyle = aGX, vV.strokeRect(fB, fD, i, j),
			function(button) {
				var fB = button.fB,
					fD = button.fD,
					i = button.i,
					j = button.j;
				bA.qr.textAlign(vV, 1), bA.qr.textBaseline(vV, 1), vV.font = button.font, vV.fillStyle = aGX, vV.fillText(button.aEg, Math.floor(fB + i / 2), Math.floor(fD + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fD = 0, this.gap = 0, this.dd = function() {
		aGW = -1, aGX = bB.ny, aGY = "rgba(255,255,255,0.16)", this.rQ = new Array(7), this.j = Math.floor((a0.a1.iD() ? .123 : .093) * h.iE), this.i = Math.floor((a0.a1.iD() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGZ = Math.floor(.26 * this.j),
			aGa = bA.qr.si(1, aGZ);
		this.rQ[0] = {
			fB: 0,
			fD: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEg: "Multiplayer",
			font: aGa,
			aGb: "rgba(22,88,22,0.8)",
			fontSize: aGZ
		}, aGZ = Math.floor(.18 * this.j), aGa = bA.qr.si(1, aGZ), this.rQ[1] = {
			fB: 0,
			fD: 0,
			i: this.i - this.rQ[0].i - this.gap,
			j: this.j,
			aEg: "Single Player",
			font: aGa,
			aGb: "rgba(22,88,88,0.8)",
			fontSize: aGZ
		}, this.rQ[2] = {
			fB: 0,
			fD: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEg: "",
			font: this.rQ[1].font,
			aGb: "rgba(100,0,0,0.8)",
			fontSize: this.rQ[1].fontSize
		}, this.rQ[3] = {
			fB: 0,
			fD: 0,
			i: this.i,
			j: this.j,
			aEg: "Back",
			font: this.rQ[0].font,
			aGb: "rgba(0,0,0,0.8)",
			fontSize: this.rQ[0].fontSize
		}, this.rQ[4] = {
			fB: 0,
			fD: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEg: "The game was updated!",
			font: this.rQ[1].font,
			aGb: "rgba(100,0,0,0.8)",
			fontSize: this.rQ[1].fontSize
		}, this.rQ[5] = {
			fB: 0,
			fD: 0,
			i: this.rQ[0].i,
			j: Math.floor(.8 * this.j),
			aEg: "Reload",
			font: this.rQ[0].font,
			aGb: "rgba(0,100,0,0.8)",
			fontSize: this.rQ[0].fontSize
		}, this.rQ[6] = {
			fB: 0,
			fD: 0,
			i: this.rQ[1].i,
			j: this.rQ[5].j,
			aEg: "Back",
			font: this.rQ[0].font,
			aGb: "rgba(0,0,0,0.8)",
			fontSize: this.rQ[0].fontSize
		}, this.aAO()
	}, this.aAO = function() {
		this.fD = Math.floor(.54 * h.j), this.rQ[0].fB = Math.floor(.5 * h.i - .5 * this.i), this.rQ[1].fB = this.rQ[0].fB + this.rQ[0].i + this.gap, this.rQ[2].fB = this.rQ[3].fB = this.rQ[0].fB, this.rQ[4].fB = this.rQ[5].fB = this.rQ[0].fB,
			this.rQ[6].fB = this.rQ[1].fB, this.rQ[0].fD = Math.floor(.54 * h.j), this.rQ[1].fD = this.rQ[0].fD, this.rQ[2].fD = Math.floor((h.j - this.rQ[2].j - this.rQ[3].j - this.gap) / 2), this.rQ[3].fD = this.rQ[2].fD + this.rQ[2].j + this
			.gap, this.rQ[4].fD = Math.floor((h.j - this.rQ[4].j - this.rQ[5].j - this.gap) / 2), this.rQ[5].fD = this.rQ[6].fD = this.rQ[4].fD + this.rQ[4].j + this.gap
	}, this.aGc = function() {
		aGd(0), aGd(1)
	}, this.aGe = function() {
		aGd(2), aGd(3)
	}, this.aGf = function() {
		aGd(4), aGd(5), aGd(6)
	}, this.a2Q = function(fB, fD, mk) {
		var aB = -1;
		return 0 === aa.a27() ? aB = this.a2u(fB, fD, 0, 2) : 3 === aa.a27() ? aB = this.a2u(fB, fD, 3, 1) : 5 === aa.a27() && (aB = this.a2u(fB, fD, 5, 2)), aGW !== aB && (aGW = aB, mk) && (bf.dk = !0), -1 !== aB && (aT.rs(), !0)
	}, this.a2u = function(fB, fD, aGg, size) {
		for (var aB = aGg; aB < aGg + size; aB++)
			if (fB >= this.rQ[aB].fB && fD >= this.rQ[aB].fD && fB <= this.rQ[aB].fB + this.rQ[aB].i && fD <= this.rQ[aB].fD + this.rQ[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGi, aGj, a80, aGk, aGl, aGm, aGn, aGo, aGp, a7z, aGq, aGr, aGs, aGt = 1,
		aGu = 0,
		aGv = 0;

	function aGz(aH0) {
		aH0 ? aGs = (aGs + 1) % b0.y.aH1 : (b0.y.close(aGs, 3280), aGt ? aGt = 0 : (aGv = 1 - aGv, 0 === (aGu = (aGu + 1) % 2) && (aGs = (aGs + 1) % b0.y.aH1, b0.y.close(aGs, 3280)))), aGr = bf.eS, aZ.aGy = aGv, b0.y.aH2(aGs, 4, 1) && b0.aFY.aH3(aGs)
	}

	function aH4() {
		if (0 !== aGs) return 1 === aGs && __fx.customLobby.isActive() ? (o.a2F(3249), __fx.customLobby.setActive(!1)) : void aGz();
		o.a2F(3249)
	}

	function aH9(fD, aA6, u0) {
		var nO = Math.floor((h.i - aGk) / 2) + aGn,
			nb = nO + Math.floor(u0 * (aGk - 2 * aGn));
		vV.lineWidth = aA6, vV.beginPath(), vV.moveTo(nO, fD), vV.lineTo(nb, fD), vV.lineTo(Math.floor(nO - aGn + u0 * aGk), fD + a80), vV.lineTo(nO - aGn, fD + a80), vV.closePath()
	}
	this.aGw = 1, this.aGx = 0, this.aGy = 0, this.dd = function() {
		aa.setState(6), aGi = 0, aGj = 1, aGo = "rgba(0,220,120,0.4)", aGp = "rgba(0,0,0,0.8)", this.resize(), bf.dk = !0, aGt = 1, aGu = 0, aGs = this.aGw - 1, aGv = 0 === this.aGx ? l.dy ? 1 : 0 : this.aGx - 1, aGz(1)
	}, this.resize = function() {
		aGk = Math.floor((a0.a1.iD() ? .5 : .25) * h.iE), aGl = aGk + 12, a80 = Math.floor(.125 * aGk), aGn = 3 * a80, aGm = Math.floor(.225 * aGk), aGq = Math.floor(.3 * a80), a7z = bA.qr.si(0, aGq)
	}, this.a2B = function(a22) {
		a22 === aGs && aH4()
	}, this.hH = function(fB, fD) {
		var nO = Math.floor((h.i - aGl) / 2),
			nP = Math.floor(.5 * (h.j - bc.gap - a80 - aGm)) + a80 + bc.gap;
		return nO < fB && fB < nO + aGl && nP < fD && fD < nP + aGm && (this.a35(), aY.a2Q(fB, fD, !1), !0)
	}, this.a35 = function() {
		b0.y.a2G(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.eX = function() {
		6 === aa.a27() && (bf.eS > aGr + 12e3 && aH4(), 100 < (aGi += .07 * aGj * (aGi < 16 ? 5 + aGi : 84 < aGi ? 105 - aGi : 17)) ? (aGi = 100, aGj = -1) : aGi < 0 && (aGi = 0, aGj = 1), aGo = "rgba(0," + Math.floor(190 - 1.9 * aGi) + "," +
			Math.floor(120 - 1.2 * aGi) + "," + (.4 + .004 * aGi) + ")", aGp = "rgba(0," + Math.floor(1.9 * aGi) + "," + Math.floor(1.2 * aGi) + "," + (.8 - .004 * aGi) + ")", bf.dk = !0)
	}, this.vU = function() {
		var fB = Math.floor((h.i - aGl) / 2),
			fD = Math.floor(.5 * (h.j - bc.gap - a80 - aGm));
		! function(title, fD, aA6, u0) {
			vV.fillStyle = aGp, aH9(fD, aA6, 1), vV.fill(), vV.fillStyle = aGo, aH9(fD, aA6, u0), vV.fill(), vV.strokeStyle = bB.ny, aH9(fD, aA6, 1), vV.stroke(),
				function(aHB, fD) {
					bA.qr.textAlign(vV, 1), bA.qr.textBaseline(vV, 1), vV.font = a7z, vV.fillStyle = bB.ny, vV.fillText(aHB, Math.floor(.5 * h.i), Math.floor(fD + .58 * a80))
				}(title, fD)
		}(L(130), fD, 3, aGi / 100),
		function(fB, fD, i, j, aEg) {
			vV.fillStyle = bB.nt, vV.fillRect(fB, fD, i, j), vV.lineWidth = 3, vV.strokeStyle = bB.ny, vV.strokeRect(fB, fD, i, j);
			var f4 = Math.floor(.3 * j);
			bA.qr.textAlign(vV, 1), bA.qr.textBaseline(vV, 1), vV.font = bA.qr.si(0, f4), vV.fillStyle = bB.ny, vV.fillText(aEg, Math.floor(fB + i / 2), Math.floor(fD + j / 2 + .1 * f4))
		}(fB, fD + a80 + bc.gap, aGl, aGm, L(37))
	}
}

function cR() {
	var a1y = 0;
	this.dd = function() {
		aY.dd(), a1y = 0
	}, this.setState = function(aHC) {
		a1y = aHC
	}, this.a27 = function() {
		return a1y
	}, this.aHD = function() {
		this.setState(8), t.x()
	}, this.a2y = function(e) {
		if (!bS.xR) return !1;
		if (!(bf.eS < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHE()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1y) return !0;
					if (7 === a1y) return !0
				}
			}
			return !1
		}
	}, this.aHF = function() {
		bZ.resize()
	}, this.aHE = function() {
		return !!bZ.s8()
	}, this.hH = function(fB, fD) {
		!bS.xR || bZ.hH(fB, fD) || 6 === a1y && aZ.hH(fB, fD) || bY.hH(fB, fD) || aT.hH(fB, fD)
	}, this.a2Q = function(fB, fD) {
		!aT.aAH && aY.a2Q(fB, fD, !0) || aT.a2Q(fB, fD)
	}, this.click = function(fB, fD) {
		aT.a2p()
	}, this.a2T = function(fB, fD, deltaY) {}, this.aHG = function() {
		aY.aAO(), bf.dk = !0
	}, this.vU = function() {
		8 !== a1y && 10 !== a1y && (vV.imageSmoothingEnabled = !0, this.z0(), 0 !== a1y && (aT.vU(), aO.vU(), this.aHH(), bY.vU()), 0 !== a1y && 6 === a1y && aZ.vU(), bZ.vU(), t.vU())
	}, this.z0 = function() {
		var aHJ, aHI;
		if (__fx.makeMainMenuTransparent) vV.clearRect(0, 0, h.i, h.j);
		else bS.xR ? (aHI = h.i / bS.fF, aHJ = h.j / bS.fG, vV.setTransform(aHI = aHJ < aHI ? aHI : aHJ, 0, 0, aHI, Math.floor((h.i - aHI * bS.fF) / 2), Math.floor((h.j - aHI * bS.fG) / 2)), vV.drawImage(bS.xT, 0, 0), vV.setTransform(1, 0, 0, 1,
			0, 0), vV.fillStyle = bB.nt) : vV.fillStyle = bB.np, vV.fillRect(0, 0, h.i, h.j)
	}, this.aHH = function() {
		var fD = Math.floor(.3 * h.j),
			canvas = ab.aHK("territorial.io"),
			i5 = (i5 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i5,
			fB = (vV.globalAlpha = .15, vV.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i5 * canvas.width))),
			fB = Math.floor(fB / i5),
			fD = Math.floor(fD - .5 * canvas.height * i5),
			fD = Math.floor(fD / i5);
		vV.setTransform(i5, 0, 0, i5, fB, fD), vV.drawImage(canvas, fB, fD), vV.setTransform(1, 0, 0, 1, 0, 0), vV.globalAlpha = 1, vV.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aEU = 0;
	var aHM, aHN, aHO, aHP, aHQ, aHR = this.aHL = 0;

	function aHU() {
		aHP = aHQ = null, aHR = 0
	}
	this.dd = function(rw, aER, aES) {
		t.x(), bn.uY(), aa.setState(10), aHP = rw, aHQ = aER, aHR = aES, this.aEU = rw.aEU, this.aHL = aES, aHM = 0, aHN = bf.eS + 4500, b0.y.a2C = rw.a2C, b0.y.a25 === rw.a2C ? (console.log("direct pass"), aHO = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a25, 3247), aHO = 2, b0.y.aH2(rw.a2C, 5, 2) && b0.pL.aHS()), vV.imageSmoothingEnabled = !0, aa.z0();
		aER = ab.aHK("loading"), aES = (a0.a1.iD() ? .396 : .25) * h.iE / aER.width;
		vV.setTransform(aES, 0, 0, aES, Math.floor((h.i - aES * aER.width) / 2), Math.floor((h.j - aES * aER.height) / 2)), vV.imageSmoothingEnabled = !1, vV.drawImage(aER, 0, 0), vV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mi = function() {
		0 < aHO && bf.eS > aHN && (aHO--, aHN += 4500, 0 === bf.aHV) && 0 === bf.kM() && b0.y.aH2(b0.y.a2C, 5, 2)
	}, this.aHW = function() {
		return 10 === aa.a27() && (bn.aDg.aEV(aHP, aHQ, aHR), aHU(), !0)
	}, this.aHX = function() {
		10 === aa.a27() && 2 <= ++aHM && (bn.aDg.aEV(aHP, aHQ, aHR), aHU())
	}
}

function cS() {
	var aHZ, canvas, a1E, aHa;

	function aHg(eB, name, aHh, qY) {
		a1E[eB] = name, canvas[eB] = new Image, canvas[eB].onload = function() {
			! function(eB, aHh) {
				var a4j, a4k = null;
				7 === aHh ? a4j = bA.a3B.a4m : 8 === aHh ? (a4j = bA.a3B.a4p, a4k = .1) : 3 === aHh ? (a4j = bA.a3B.a4n, a4k = .06) : 5 === aHh ? a4j = bA.a3B.a4q : 6 === aHh ? a4j = bA.a3B.a4l : 4 === aHh && (a4j = bA.a3B.a4r);
				canvas[eB] = bA.a3B.a4i(canvas[eB], a4j, a4k)
			}(eB, aHh), aHj()
		}, canvas[eB].onerror = function(e) {
			console.error("Error loading image at index", eB, "Error:", e), aHj()
		}, canvas[eB].src = "data:image/png;base64," + qY
	}

	function aHj() {
		aHZ--, aHd()
	}

	function aHd() {
		0 === aHZ && (aHZ = -1, aHf(), bf.dk = !0, canvas[7] = aHa, canvas[8] = aHa, canvas[9] = aHa, canvas[10] = aHa, 5 === t.t8) && t.a5x().aHl.resize()
	}

	function aHf() {
		aL.a69(), bY.aDW([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xW = new zN, aj.xW.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHZ = 23, canvas = new Array(aHZ), a1E = new Array(aHZ), (aHa = document.createElement("canvas")).width = 1;
			for (var aB = aHZ - (aHa.height = 1); 0 <= aB; aB--) canvas[aB] = aHa;
			aHf(), aHg(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHg(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHg(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(3, "orders", 6,
					"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"
					), aHg(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHg(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHg(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHg(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(8,
					"googleplay", 3,
					"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"
					), aHg(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHg(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHg(14, "bestPlayer", 5,
					"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"
					), aHg(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHg(16, "apple", 3,
					"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"
					), aHg(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHg(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHg(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHg(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHg(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHg(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eB) {
		return canvas[eB]
	}, this.aHK = function(name) {
		for (var aB = a1E.length - 1; 0 <= aB; aB--)
			if (a1E[aB] === name) return canvas[aB];
		return aHa
	}, this.ta = function() {
		return aHZ <= 0
	}, this.aHc = function() {
		aHZ = 0, aHd()
	}
}

function cT() {
	var aHo, aHp, aHq, aHr, aHs, aHt, aHu, aHv, aHw, aHx, aHm = [
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
		aHn = [
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

	function aI3(jf, ng) {
		for (var aB = jf; aB < ng; aB++) aHo[aB] = 4 * bL.fV(64 * ay.random(), ay.value(100)), aHp[aB] = 4 * bL.fV(64 * ay.random(), ay.value(100)), aHq[aB] = 4 * bL.fV(64 * ay.random(), ay.value(100))
	}

	function aI2(jf, ng) {
		for (var colorsData = aD.data.colorsData, aB = jf; aB < ng; aB++) {
			var fW = colorsData[aB];
			aHo[aB] = 4 * (fW >> 12), aHp[aB] = 4 * (fW >> 6 & 63), aHq[aB] = 4 * (63 & fW)
		}
	}

	function aIO(ei, aIQ) {
		aCs[ei] = 0, aCs[ei + 1] = 0, aCs[ei + 2] = aIQ, aCs[ei + 3] = 0, aIR(ei)
	}

	function aIR(ei) {
		var fB;
		bb.no || (fB = ac.z1(ei), ei = ac.z2(ei), bb.no = fB >= ba.aCr[0] && fB <= ba.aCr[2] && ei >= ba.aCr[1] && ei <= ba.aCr[3])
	}
	this.f6 = new Int32Array(4), this.de = function() {
		var f6 = this.f6;
		f6[0] = -4 * bS.fF, f6[1] = 4, f6[2] = -f6[0], f6[3] = -f6[1]
	}, this.dd = function() {
		if (aHo ? (aHo.fill(0), aHp.fill(0), aHq.fill(0), aHr.fill(0), aHs.fill(0), aHt.fill(0), aHu.fill(0), aHv.fill(0), aHw.fill(0), aHx.fill(0), this.a9F.fill(0)) : (aHo = new Uint8Array(aD.f1), aHp = new Uint8Array(aD.f1), aHq =
				new Uint8Array(aD.f1), aHr = new Uint8Array(aD.f1), aHs = new Uint8Array(aD.f1), aHt = new Uint8Array(aD.f1), aHu = new Uint8Array(aD.f1), aHv = new Uint8Array(aD.f1), aHw = new Uint8Array(aD.f1), aHx = new Uint8Array(aD.f1), this
				.a9F = new Uint8Array(aD.f1)), aD.hy)
			for (var aBV = bg.aBV, aB = aD.f1 - 1; 0 <= aB; aB--) {
				var ec = aBV[aB],
					lK = bL.fV((aHn[ec][3] + 1) * ay.random(), ay.value(100));
				aHo[aB] = aHm[ec][0] + lK * aHn[ec][0], aHp[aB] = aHm[ec][1] + lK * aHn[ec][1], aHq[aB] = aHm[ec][2] + lK * aHn[ec][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aI2(0, aD.kP), aI3(aD.kP, aD.f1)) : aI3(0, aD.f1) : aI2(0, aD.f1);
		! function() {
			var aB, f7;
			for (aB = aD.f1 - 1; 0 <= aB; aB--) f7 = bL.fV(aHo[aB] + aHp[aB] + aHq[aB], 3), aHo[aB] += aI9(f7 - aHo[aB], 2), aHp[aB] += aI9(f7 - aHp[aB], 2), aHq[aB] += aI9(f7 - aHq[aB], 2), aHo[aB] -= aHo[aB] % 4, aHp[aB] -= aHp[aB] % 4, aHq[
				aB] -= aHq[aB] % 4
		}(),
		function() {
			for (var f4 = aD.f1, aIA = aHo, aIB = aHp, aIC = aHq, aID = aHr, aB = 0; aB < f4; aB++) aIA[aB] += aB >> 7, aIB[aB] += aB >> 5 & 3, aIC[aB] += aB >> 3 & 3, aID[aB] = 7 & aB
		}(), this.aI6(),
			function() {
				for (var f4 = aD.f1, aIE = aHs, aIF = aHt, aIG = aHu, aIA = aHo, aIB = aHp, aIC = aHq, aB = 0; aB < f4; aB++) {
					var eA = aIA[aB],
						tW = aIB[aB],
						fO = aIC[aB];
					60 <= eA + tW + fO ? (aIE[aB] = Math.max(eA - 40, 3 & eA), aIF[aB] = Math.max(tW - 40, 3 & tW), aIG[aB] = Math.max(fO - 40, 3 & fO)) : (aIE[aB] = eA + 40, aIF[aB] = tW + 40, aIG[aB] = fO + 40)
				}
			}(),
			function() {
				for (var f4 = aD.f1, aIH = aHv, aII = aHw, aIJ = aHx, aIA = aHo, aIB = aHp, aIC = aHq, aB = 0; aB < f4; aB++) {
					var eA = aIA[aB],
						tW = aIB[aB],
						fO = aIC[aB];
					688 <= eA + tW + fO ? (aIH[aB] = eA - 88, aII[aB] = tW - 88, aIJ[aB] = fO - 88) : (aIH[aB] = Math.min(eA + 88, 252 + (3 & eA)), aII[aB] = Math.min(tW + 88, 252 + (3 & tW)), aIJ[aB] = Math.min(fO + 88, 252 + (3 & fO)))
				}
			}()
	}, this.a87 = function(player) {
		var g = bO.fd;
		return g[0] = aHo[player], g[1] = aHp[player], g[2] = aHq[player], g
	}, this.aI6 = function() {
		for (var aB = aD.f1 - 1; 0 <= aB; aB--) this.a9F[aB] = aHo[aB] + aHp[aB] + aHq[aB] < 280 ? 0 : 1
	}, this.z1 = function(ei) {
		return bL.fV(ei, 4) % bS.fF
	}, this.z2 = function(ei) {
		return bL.fV(ei, 4 * bS.fF)
	}, this.yZ = function(fB, fD) {
		return Math.floor(4 * (fD * bS.fF + fB))
	}, this.yp = function(ei) {
		var f6 = this.f6;
		return this.aIK(ei + f6[0]) || this.aIK(ei + f6[1]) || this.aIK(ei + f6[2]) || this.aIK(ei + f6[3])
	}, this.fS = function(ei) {
		var f6 = this.f6;
		return this.f9(ei + f6[0]) || this.f9(ei + f6[1]) || this.f9(ei + f6[2]) || this.f9(ei + f6[3])
	}, this.yn = function(ei, player) {
		var f6 = this.f6;
		return this.aIL(ei + f6[0], player) || this.aIL(ei + f6[1], player) || this.aIL(ei + f6[2], player) || this.aIL(ei + f6[3], player)
	}, this.ge = function(ei) {
		return 208 <= aCs[ei + 3]
	}, this.yv = function(player, ei) {
		return this.ge(ei) && this.yy(player, ei)
	}, this.yy = function(player, ei) {
		return player === this.ew(ei)
	}, this.aIM = function(ei) {
		return 208 <= aCs[ei + 3] && aCs[ei + 3] < 224
	}, this.ja = function(ei) {
		return 224 <= aCs[ei + 3] && aCs[ei + 3] < 248
	}, this.yo = function(ei) {
		for (var f6 = this.f6, aB = 3; 0 <= aB; aB--)
			if (this.iI(ei + f6[aB])) return !0;
		return !1
	}, this.ez = function(ei) {
		return this.ge(ei) || this.ev(ei)
	}, this.iI = function(ei) {
		return 0 === aCs[ei + 3] && 2 === aCs[ei + 2]
	}, this.ev = function(ei) {
		return 0 === aCs[ei + 3] && 1 === aCs[ei + 2]
	}, this.xe = function(ei) {
		return 0 === aCs[ei + 3] && 3 === aCs[ei + 2]
	}, this.f9 = function(ei) {
		return 0 === aCs[ei + 3] && 5 === aCs[ei + 2]
	}, this.aIK = function(ei) {
		return 0 === aCs[ei + 3] && 3 <= aCs[ei + 2]
	}, this.em = function(ei) {
		return (aCs[ei] >> 1 << 8) + aCs[ei + 1]
	}, this.aIN = function(ei) {
		return 1 & aCs[ei]
	}, this.aIL = function(ei, player) {
		return this.ev(ei) || this.ge(ei) && player !== this.ew(ei)
	}, this.ew = function(ei) {
		return aCs[ei] % 4 * 128 + aCs[ei + 1] % 4 * 32 + aCs[ei + 2] % 4 * 8 + aCs[ei + 3] % 8
	}, this.yw = function(ei) {
		aIO(ei, 1)
	}, this.aIP = function(ei) {
		aIO(ei, 2)
	}, this.ya = function(ei, player) {
		aCs[ei] = aHo[player], aCs[ei + 1] = aHp[player], aCs[ei + 2] = aHq[player], aCs[ei + 3] = 208 + aHr[player], aIR(ei)
	}, this.gZ = function(ei, player) {
		aCs[ei] = aHs[player], aCs[ei + 1] = aHt[player], aCs[ei + 2] = aHu[player], aCs[ei + 3] = 224 + aHr[player], aIR(ei)
	}, this.jb = function(ei, player) {
		aCs[ei] = aHv[player], aCs[ei + 1] = aHw[player], aCs[ei + 2] = aHx[player], aCs[ei + 3] = 248 + aHr[player], aIR(ei)
	}
}

function cs() {
	var aIS = 0,
		aIU = new Uint16Array(64);

	function w7(a6D) {
		aIS -= 2;
		for (var aB = a6D; aB < aIS; aB += 2) aIU[aB] = aIU[aB + 2], aIU[aB + 1] = aIU[aB + 3]
	}
	this.dd = function() {
		aIS = 0
	}, this.eX = function() {
		var aB, jY, ig;
		if (0 !== aIS)
			if (0 === ag.my[aD.eo]) aIS = 0;
			else if (0 === ad.gB(aD.eo)) aIS = 0;
		else
			for (aB = aIS - 2; 0 <= aB; aB -= 2)(jY = aIU[aB]) < aD.f1 && 0 === ag.my[jY] ? w7(aB) : (ig = aIU[aB + 1], (jY >= aD.f1 && bs.aIW(aD.eo) || jY < aD.f1 && bs.aIX(aD.eo, jY)) && (b8.hU.hb(ig, jY), w7(aB)))
	}, this.hc = function(jY, ig) {
		! function(jY, ig) {
			for (var aB = 0; aB < aIS; aB += 2)
				if (aIU[aB] === jY) return aIU[aB + 1] = Math.min(aIU[aB + 1] + ig, 1023), 1;
			return
		}(jY, ig) && 64 !== aIS && (aIU[aIS] = jY, aIU[aIS + 1] = ig, aIS += 2)
	}
}

function cU() {
	function aIf(player) {
		var eT;
		bA.gQ.a4K(player) && (eT = ag.h6[player] - ag.a4P[player] + ad.aIh(player), bd.gU(player, Math.abs(eT), eT < 0 ? 18 : 12)), ag.h6[player] = 0, ag.a4P[player] = 0
	}

	function aIo() {
		aX.show(!1, !1, !1, !0), aW.aC1(), bR.a0d.a1Q()
	}

	function aIb(player, aIn) {
		for (var aB = aIn.length - 1; 0 <= aB; aB--) ad.aIq(aIn[aB], player)
	}

	function aId(player) {
		var ix = ag.ix,
			iy = ag.iy,
			iz = ag.iz,
			j0 = ag.j0,
			fF = bS.fF;
		if (ag.gs[player]) {
			ag.gs[player] = 0;
			for (var nO = ix[player], nP = iz[player], fB = iy[player]; nO <= fB; fB--)
				for (var fD = j0[player]; nP <= fD; fD--) {
					var gc = 4 * (fD * fF + fB);
					ac.yv(player, gc) && ac.yw(gc)
				}
		}
		iy[player] = j0[player] = 0, ix[player] = iz[player] = Math.max(fF, bS.fG)
	}
	this.dl = function(gc) {
		var player, eT = ag.gs[gc] + ag.yV[gc];
		bN.y.kT[gc] ? eT && (aIb(player = gc, ad.aIc(player)), aId(player), af.aIe(), aF.gS(player), ad.clear(player), aIf(player), function(player) {
			ag.yV[player] = 0, ag.gW[player] = [], ag.gk[player] = [], ag.gl[player] = [], ag.fT[player] = []
		}(player)) : !eT && ag.gW[gc].length || this.aIa(gc)
	}, this.aIa = function(player) {
		! function(player) {
			bA.gQ.jm(player) || (ag.a1U[player] = bi.a1k.aIm(), aD.a0u++);
			var aIn = ad.aIc(player);
			0 === aIn.length ? bA.gQ.a4H(player) && aIo() : (aIb(player, aIn), function(player, aIn) {
				var aIs = aIn[function(aIn) {
					var aB, eB = 0;
					for (aB = aIn.length - 1; 1 <= aB; aB--) ag.gs[aIn[aB]] > ag.gs[aIn[eB]] && (eB = aB);
					return eB
				}(aIn)];
				9 === aD.kh && (1 === bg.f2[player] ? ay.kH(8) && az.aIt(aIs) : aE.hn[player] && (aN.a7b(765, 0), aN.a1G(280, L(131, [ag.a1V[aIs], ag.a1V[player]]), 765, aIs, bB.np, bB.pA, -1, !0)));
				if (bA.gQ.a4H(player)) aIo(), aN.a15(aIs, 1);
				else {
					for (var aB = aIn.length - 1; 0 <= aB; aB--)
						if (bA.gQ.a4K(aIn[aB]) && (bd.mu[4 - bA.gQ.jm(player)]++, bA.gQ.a4H(aIn[aB]))) return aN.a15(player, 0);
					bA.gQ.jm(player) || aN.a7L(0, player, aIs)
				}
			}(player, aIn))
		}(player), aId(player), af.aIe(), aIf(player),
			function(player) {
				ag.my[player] = 0, ag.gW[player] = null, ag.gk[player] = null, ag.gl[player] = null, ag.fT[player] = null
			}(player), aF.gS(player), ad.clear(player), bN.aIk.aIl(player)
	}
}

function cx() {
	var input;

	function aIu(e) {
		(e = e.target.files) && 0 < e.length && b6.aIx(e[0])
	}

	function aJ1(e) {
		var ec = new Image;
		ec.onload = aJ2, ec.src = e.target.result
	}

	function aJ2(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJ4 = bj.eP.data[162].value,
			max = Math.min(bS.aJ5, aJ4),
			aJ4 = (max = a0.id || bJ.rJ() ? Math.min(1400, aJ4) : max) / Math.max(i, j);
		if (aJ4 < 1 && (i = Math.floor(aJ4 * i + .125), j = Math.floor(aJ4 * j + .125)), max < i || max < j || i < 10 || j < 10) aJ4 = "Invalid Image Dimensions!", a0.wE ? a0.wE.showToast(aJ4) : alert(aJ4);
		else {
			for (var max = document.createElement("canvas"), aJ4 = (max.width = i, max.height = j, max.getContext("2d")), aJ7 = document.createElement("canvas"), aJ8 = (aJ7.width = e.width, aJ7.height = e.height, aJ7.getContext("2d")), e = (aJ8
					.drawImage(e, 0, 0), aJ8.getImageData(0, 0, aJ7.width, aJ7.height)), aJ8 = aJ4.createImageData(i, j), src = e.data, aJB = aJ8.data, a9q = aJ7.width / i, a9r = aJ7.height / j, fD = 0; fD < j; fD++)
				for (var fB = 0; fB < i; fB++) {
					var aJC = Math.floor(fB * a9q),
						aJC = 4 * (Math.floor(fD * a9r) * aJ7.width + aJC),
						aJF = 4 * (fD * i + fB);
					aJB[aJF] = src[aJC], aJB[1 + aJF] = src[1 + aJC], aJB[2 + aJF] = src[2 + aJC], aJB[3 + aJF] = 255
				}
			aJ4.putImageData(aJ8, 0, 0), 20 === t.t8 && t.a5x().aJ2(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aIu
	}, this.uY = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aIv = function() {
		input.click()
	}, this.aIx = function(aIy) {
		var g = aIy.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aJ1, g.readAsDataURL(aIy))
	}
}

function cv() {
	this.aJG = null, this.dd = function() {
		10 !== aD.kh ? this.aJG = null : this.aJG = new Uint32Array(aD.f1)
	}, this.eX = function() {
		10 === aD.kh && this.lE()
	}, this.lE = function() {
		for (var gc, target, aCE, aJG = this.aJG, a0g = al.l0, a4Q = ag.h6, aB = al.kv - 1; 0 <= aB; aB--)(gc = a0g[aB]) >= aD.kP || (target = Math.max(bL.fV(a4Q[gc], 4), 2048), aCE = Math.max(ae.aCF(gc), 100), aJG[gc] += bL.fV(aCE * target,
			1e4), aJG[gc] > target && (aJG[gc] = target))
	}, this.a4W = function(player, hn) {
		return hn > this.aJG[player] ? (hn = this.aJG[player], this.aJG[player] = 0) : this.aJG[player] -= hn, hn
	}
}

function dW() {
	function aJI(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aJQ, g.readAsText(e))
	}

	function aJQ(e) {
		var aJU;
		aD.a0s || (e = JSON.parse(e.target.result), aJU = aD.data = new a5N, aJV(e, aJU, "mapType", 0, 2), aJV(e, aJU, "mapProceduralIndex", 0, 255), aJV(e, aJU, "mapRealisticIndex", 0, 255), aJV(e, aJU, "mapSeed", 0, 16383), function(aJT, aJU, gd,
				max) {
				aJT = aJT[gd];
				aJU[gd] = aJb(aJT) ? aJT.slice(0, max) : aJU[gd]
			}(e, aJU, "mapName", 20), function(aJT, aJU, gd) {
				var aJ3;
				2 === aJU.mapType && (!aJb(aJT = aJT[gd]) || aJT.length <= 20 ? aJU.mapType = 0 : ((aJ3 = new Image).onload = function() {
					b9.aJc.aJd(aJ3, 1), aJ3.onload = null, aJ3 = null
				}, aJ3.src = aJT))
			}(e, aJU, "canvas"), aJV(e, aJU, "passableWater", 0, 1), aJV(e, aJU, "passableMountains", 0, 1), aJV(e, aJU, "playerCount", 1, 512), aJV(e, aJU, "humanCount", 1, 1), aJV(e, aJU, "selectedPlayer", 0, 0), aJV(e, aJU, "gameMode", 0, 1),
			aJV(e, aJU, "playerMode", 0, 0), aJV(e, aJU, "battleRoyaleMode", 0, 0), aJV(e, aJU, "numberTeams", 0, 8), aJV(e, aJU, "isZombieMode", 0, 0), aJV(e, aJU, "isContest", 0, 0), aJV(e, aJU, "isReplay", 0, 0), aJY(e, aJU, "elo", 16, 2,
				16383), aJV(e, aJU, "colorsType", 0, 1), aJV(e, aJU, "colorsPersonalized", 0, 1), aJY(e, aJU, "colorsData", 32, 512, 262143), aJV(e, aJU, "selectableColor", 0, 1), aJY(e, aJU, "teamPlayerCount", 16, 9, 512), aJV(e, aJU,
				"neutralBots", 0, 1), aJV(e, aJU, "botDifficultyType", 0, 3), aJV(e, aJU, "botDifficultyValue", 0, 15), aJY(e, aJU, "botDifficultyTeam", 8, 9, 15), aJY(e, aJU, "botDifficultyData", 8, 512, 15), aJV(e, aJU, "spawningType", 0, 2),
			aJV(e, aJU, "spawningSeed", 0, 16383), aJY(e, aJU, "spawningData", 16, 1024, 4095), aJV(e, aJU, "selectableSpawn", 0, 1), aJV(e, aJU, "playerNamesType", 0, 2),
			function(aJT, aJU, gd, size, max) {
				var a3W = aJT[gd];
				if (Array.isArray(a3W)) {
					for (var a3X = new Array(size), f4 = Math.min(a3W.length, size), aB = 0; aB < f4; aB++) a3X[aB] = aJb(a3W[aB]) ? a3W[aB].slice(0, max) : "";
					a3X.fill("", f4), aJU[gd] = a3X
				}
			}(e, aJU, "playerNamesData", 512, 20), aJV(e, aJU, "selectableName", 0, 1), aJV(e, aJU, "aIncomeType", 0, 2), aJV(e, aJU, "aIncomeValue", 0, 255), aJY(e, aJU, "aIncomeData", 8, 512, 255), aJV(e, aJU, "tIncomeType", 0, 2), aJV(e, aJU,
				"tIncomeValue", 0, 255), aJY(e, aJU, "tIncomeData", 8, 512, 255), aJV(e, aJU, "iIncomeType", 0, 2), aJV(e, aJU, "iIncomeValue", 0, 255), aJY(e, aJU, "iIncomeData", 8, 512, 255), aJV(e, aJU, "sResourcesType", 0, 2), aJV(e, aJU,
				"sResourcesValue", 0, 2047), aJY(e, aJU, "sResourcesData", 16, 512, 2047), t.x(), t.y.aJS[0] = 0, t.u(19))
	}

	function aJV(aJT, aJU, gd, min, max) {
		aJT = aJT[gd];
		aJU[gd] = "number" == typeof aJT && min <= aJT && aJT <= max ? Math.floor(aJT) : aJU[gd]
	}

	function aJb(qY) {
		return "string" == typeof qY
	}

	function aJY(aJT, aJU, gd, aJe, size, max) {
		var a3W = aJT[gd];
		if (Array.isArray(a3W)) {
			for (var a3X = new(8 === aJe ? Uint8Array : 16 === aJe ? Uint16Array : Uint32Array)(size), f4 = Math.min(a3W.length, size), aB = 0; aB < f4; aB++) a3X[aB] = bL.iC(a3W[aB], 0, max);
			aJU[gd] = a3X
		}
	}
	this.aJH = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJI, input.click()
	}, this.aJJ = function() {
		for (var aJM, aDT, a5v = aD.data, keys = Object.keys(a5v), aJK = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a5v[key] instanceof Uint8Array || a5v[key] instanceof Uint16Array || a5v[key] instanceof Uint32Array ? aJK[key] = Array.from(a5v[key]) : aJK[key] = a5v[key]
		}
		aJK.canvas = 2 === aJK.mapType && aJK.canvas ? aJK.canvas.toDataURL() : null, aJM = aJK, aJM = JSON.stringify(aJM, null, 2), aJM = new Blob([aJM], {
			type: "application/json"
		}), (aDT = document.createElement("a")).href = URL.createObjectURL(aJM), aDT.download = "tt_scenario.json", aDT.click()
	}
}

function cY() {
	var aJf, aJg, size, jY, hn, aJh;

	function aJi(player) {
		return player < aD.kP ? aJf * player : aJf * aD.kP + aJg * (player - aD.kP)
	}
	this.dd = function() {
		aJf = aD.kP < 16 ? 12 : 8, aJg = 4;
		var f4 = aJi(aD.f1);
		size = new Uint8Array(aD.f1), jY = new Uint16Array(f4), hn = new Uint32Array(f4), aJh = new Uint8Array(f4)
	}, this.qP = function(a8j, aJj) {
		var aJk = this.h7(a8j, aJj),
			aJj = (this.h5(a8j, aJj, 0), bA.gQ.gT(a8j, aJk));
		bd.gU(a8j, aJk - aJj, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aIq = function(player, aJj) {
		var aJn, aJj = function(player, aJj) {
			var aB, lK = aJi(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jY[lK + aB] === aJj) return aB;
			return size[player]
		}(player, aJj);
		aJj !== size[player] && (aJn = hn[aJi(player) + aJj], this.gV(player, aJj), this.eb(player, aJn, aD.f1))
	}, this.jk = function(player, aJj) {
		for (var lK = aJi(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jY[lK + aB] === aJj) return !0;
		return !1
	}, this.k3 = function(player) {
		return player < aD.kP ? size[player] < aJf : size[player] < aJg
	}, this.gB = function(player) {
		return size[player]
	}, this.gG = function(player, aB) {
		return jY[aJi(player) + aB]
	}, this.gH = function(player, aB) {
		return hn[aJi(player) + aB]
	}, this.h7 = function(player, aJj) {
		for (var lK = aJi(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jY[lK + aB] === aJj) return hn[lK + aB];
		return 0
	}, this.aIh = function(player) {
		for (var lK = aJi(player), fW = 0, aB = size[player] - 1; 0 <= aB; aB--) fW += hn[lK + aB];
		return fW
	}, this.h5 = function(player, aJj, aJn) {
		for (var lK = aJi(player), aB = size[player] - 1; 0 <= aB; aB--) jY[lK + aB] === aJj && (hn[lK + aB] = aJn)
	}, this.gq = function(player, aB, aJn) {
		hn[aJi(player) + aB] = Math.max(aJn, 0)
	}, this.gr = function(player, aB) {
		aJh[aJi(player) + aB] = 0
	}, this.gI = function(player, aB) {
		return aJh[aJi(player) + aB]
	}, this.eb = function(player, aJn, aJj) {
		ao.jC.k1[player] = ao.jC.k1[aJj] = 8, bA.gQ.a4K(aJj) && bd.mu[6 - bA.gQ.jm(player)]++;
		for (var lK = aJi(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jY[lK + aB] === aJj) return hn[lK + aB] += aJn, void(hn[lK + aB] = hn[lK + aB] > aD.a4S ? aD.a4S : hn[lK + aB]);
		jY[lK + size[player]] = aJj, hn[lK + size[player]] = aJn, aJh[lK + size[player]] = 1, size[player]++, aJj === aD.eo ? aN.a15(player, 5) : player < aD.kP && player === aD.eo && af.a7N(aJj)
	}, this.gV = function(player, eB) {
		var fN, lK;
		if (0 !== size[player])
			for (lK = aJi(player), size[player]--, fN = eB; fN < size[player]; fN++) jY[lK + fN] = jY[lK + fN + 1], hn[lK + fN] = hn[lK + fN + 1], aJh[lK + fN] = aJh[lK + fN + 1]
	}, this.aIc = function(player) {
		for (var fN, lK, aIn = [], aB = al.kv - 1; 0 <= aB; aB--)
			for (lK = aJi(al.l0[aB]), fN = size[al.l0[aB]] - 1; 0 <= fN; fN--)
				if (jY[lK + fN] === player) {
					aIn.push(al.l0[aB]);
					break
				} return aIn
	}
}

function cZ() {
	var aJo;

	function aJq(player) {
		var eA, k4;
		return bA.gQ.jm(player) && player < aD.kP ? 0 : (eA = aJo[bL.fV((aD.f1 - 1) * ag.gs[player], aD.k9)], bf.kM() < 1920 && (eA = Math.max(bL.fV(100 * (13440 - 6 * bf.kM()), 1920), eA)), k4 = ae.k5(player), ag.h6[player] > k4 && (eA -= bL.fV(2 *
			eA * (ag.h6[player] - k4), k4)), Math.min(Math.max(eA, 0), 700))
	}

	function aK2(na) {
		for (var gs = ag.gs, l0 = al.l0, aB = al.kv - 1; 0 <= aB; aB--) {
			var gc = l0[aB];
			bA.gQ.gT(gc, bL.fV(na * gs[gc], 32))
		}
	}

	function aJz() {
		var xX = aD.eo;
		bO.fa[0] = ag.h6[xX] - ag.a4P[xX]
	}

	function aK1(eB) {
		var xX = aD.eo,
			xX = ag.h6[xX] - ag.a4P[xX] - bO.fa[0];
		ae.aAp += xX, bd.mu[eB] += xX
	}
	this.aAp = 0, this.dj = function() {
		for (var f4 = aD.f1, aB = (aJo = new Uint16Array(f4), 0); aB < f4; aB++) aJo[aB] = 100 + aJp(bL.fV(25600 * aB, f4 - 4), 9)
	}, this.dd = function() {
		(this.aAp = 0) === aD.data.iIncomeType ? this.aCF = aJq : 1 === aD.data.iIncomeType ? this.aCF = function(player) {
			return bL.fV(aD.data.iIncomeValue * aJq(player), 64)
		} : this.aCF = function(player) {
			return bL.fV(aD.data.iIncomeData[player] * aJq(player), 64)
		}
	}, this.eX = function() {
		if (bf.kM() % 10 == 9 && (ae.aAp = 0, function() {
				aJz();
				for (var l0 = al.l0, h6 = ag.h6, aB = al.kv - 1; 0 <= aB; aB--) {
					var gc = l0[aB],
						aK0 = bL.fV(ae.aCF(gc) * h6[gc], 1e4);
					bA.gQ.gT(gc, Math.max(aK0, 1))
				}
				aK1(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aJz(), 1 === aD.data.aIncomeType)
						for (var gs = ag.gs, l0 = al.l0, na = aD.data.aIncomeValue, aB = al.kv - 1; 0 <= aB; aB--) {
							var gc = l0[aB];
							bA.gQ.gT(gc, bL.fV(na * gs[gc], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gs = ag.gs, l0 = al.l0, na = aD.data.aIncomeData, aB = al.kv - 1; 0 <= aB; aB--) {
								var gc = l0[aB];
								bA.gQ.gT(gc, bL.fV(na[gc] * gs[gc], 128))
							}
						}();
					aK1(18)
				}
			}(), bf.kM() % 100 == 99)) {
			if (aJz(), 0 === aD.data.tIncomeType) aK2(32);
			else if (1 === aD.data.tIncomeType) aK2(aD.data.tIncomeValue);
			else
				for (var gs = ag.gs, l0 = al.l0, na = aD.data.tIncomeData, aB = al.kv - 1; 0 <= aB; aB--) {
					var gc = l0[aB];
					bA.gQ.gT(gc, bL.fV(na[gc] * gs[gc], 32))
				}
			aK1(8)
		}
	}, this.k5 = function(player) {
		return Math.min(100 * ag.gs[player], aD.a5J)
	}, this.pO = function(player, pP) {
		bq.pl(player, pP, bO.fb[0], 0), bA.gQ.gT(pP, bO.fb[0]), bd.pm(player, pP), af.aJs(player, bO.fb[0] + bO.fb[1]), af.pn(pP, bO.fb[0]), bA.gQ.mZ(player)
	}, this.aJt = function() {
		for (var f4 = al.kv, a0g = al.l0, lK = 0, a4Q = ag.h6, aB = 0; aB < f4; aB++) lK += a4Q[a0g[aB]];
		return lK
	}, this.aJu = function(aJv) {
		for (var gc, f4 = al.kv, a0g = al.l0, lK = 0, a4Q = ag.h6, f2 = bg.f2, aB = 0; aB < f4; aB++) f2[gc = a0g[aB]] === aJv && (lK += a4Q[gc]);
		return lK
	}
}

function cb() {
	var aK6, aK7, aK8, aK9, aKA, aKB, aKC, aKD, aKE, aKF, aKG, aKH, aKI, aKJ, aKK, aKL, aKM, aKN, aKP, aKQ, aDM, aKR, aKS, aKY, aKZ, aKO = null,
		aKU = 0,
		aKV = !1,
		aKW = new Float32Array(4),
		aKX = 0,
		aBK = 112,
		aKa = 0;

	function qu() {
		aKE = Math.floor(+h.iE), aKF = Math.floor(.5 * aKE), aKO.width = h.i, aKO.height = h.j, aKP = aKO.getContext("2d", {
			alpha: !0
		}), bA.qr.textAlign(aKP, 1), bA.qr.textBaseline(aKP, 1), aKP.imageSmoothingEnabled = !0
	}

	function aKb() {
		var aB, aKg;
		for (vV.font = bA.qr.si(1, 100 * aKG), aKg = 80 / Math.floor(vV.measureText(bA.rq.a09(aD.a4S)).width), vV.font = bA.qr.si(1, 100), aB = aD.f1 - 1; 0 <= aB; aB--) aKD[aB] = 100 / Math.floor(vV.measureText(ag.a1V[aB]).width), aKC[aB] = Math
			.min(aKg, aKD[aB])
	}

	function aKh(aB) {
		return !aKa || (aB = ag.h6[aB]) < 1e6 ? 1 : aB < 1e7 ? aKW[0] : aKW[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aKf(i6) {
		aKV = !1, aKU = bf.eS, aKN = !1, aKM = 1, aKK = aKL = 0, i6.clearRect(0, 0, h.i, h.j);
		for (var aKn, aKo, aB, aKp, fontSize, aKq, nO = ih / iF, nP = ii / iF, nb = (h.i + ih) / iF, nc = (h.j + ii) / iF, aKr = 0 !== ag.my[aD.eo] && !bA.gQ.jm(aD.eo), fN = al.kv - 1; 0 <= fN; fN--) aB = al.l0[fN], (fontSize = Math.floor(aKJ * iF *
			aKh(aB) * aKC[aB] * aKA[aB])) < aKI || aKE <= fontSize || aK8[aB] + aKA[aB] > nO && aK8[aB] < nb && aK9[aB] + aKB[aB] > nP && aK9[aB] < nc && (aKn = Math.floor(h.i * (aK8[aB] + aKA[aB] / 2 - nO) / (nb - nO)), aKo = Math.floor(h.j * (
			aK9[aB] + aKB[aB] / 2 - nP) / (nc - nP) - .1 * fontSize), aKp = ac.a9F[aB], i6.font = bA.qr.si(1 === ag.a4G[aB] ? 4 : 1, fontSize), i6.fillStyle = aKs(fontSize, aKp % 2), aKa ? aKt(i6, aB, fontSize, aKn, aKo, aKp) : aKu(aB,
			fontSize, aKn, aKo, i6), aKN = !0, 0 < aDM[aB] ? function(aKn, aKo, fontSize, aB, i6) {
			0 === kA[aB] ? aj.s7.a00(aKQ[aB]) ? (function(aKn, aKo, fontSize, player, pa, i6) {
				for (var y4 = aKo, i5 = (i6.globalAlpha = aL2(fontSize), aKh(player) * (aKa ? aKX : aKD[player])), y3 = aKn - .5 * fontSize / i5 - .9 * fontSize, fO = 0; fO < 2; fO++) i6.fillText(aj.s7.zs(pa), y3, y4), y3 = aKn + .5 *
					fontSize / i5 + .9 * fontSize;
				i6.globalAlpha = 1
			}(aKn, aKo, fontSize, aB, aKQ[aB], i6), aKw(aKn, aKo, fontSize, 0, 0, i6)) : aj.s7.a02(aKQ[aB]) ? (aL5(aKn, aKo, fontSize, aKQ[aB], 0, i6), aKw(aKn, aKo, fontSize, 0, 1, i6)) : (aL5(aKn, aKo, fontSize, aKQ[aB], 1, i6), aKw(
				aKn, aKo, fontSize, 1, 0, i6)) : aL5(aKn, aKo, fontSize, aKQ[aB], 0, i6)
		}(aKn, aKo, fontSize, aB, i6) : 0 === kA[aB] && aKw(aKn, aKo, fontSize, 0, 0, i6), aKr && (0 < aDM[aB + aD.f1] || 0 < aDM[aB + 2 * aD.f1] || 0 < aDM[aB + 3 * aD.f1] || 0 < aDM[aB + 4 * aD.f1]) && function(aKn, aKo, fontSize, aB, i6) {
			var ec, gX = -1;
			for (ec = 4; 1 <= ec; ec--) 0 < aDM[aB + ec * aD.f1] && gX++;
			for (ec = 1; ec < 5; ec++) 0 < aDM[aB + ec * aD.f1] && (! function(aKn, aKo, fontSize, ec, aB, aL0, eT, i6) {
				var a3k;
				if (1 === ec) {
					aB = aKQ[aB + aD.f1];
					if (!aj.s7.a01(aB)) return function(aKn, aKo, fontSize, pa, aL0, i6) {
						i6.globalAlpha = aL2(fontSize);
						aKn -= .534 * aL0 * fontSize, aL0 = aKo + 1.59 * fontSize;
						i6.font = bA.qr.si(0, .785 * fontSize), i6.fillText(aj.s7.zs(pa), aKn, aL0), i6.globalAlpha = 1
					}(aKn, aKo, fontSize, aB, aL0, i6);
					a3k = aj.xW.zR[aB - 1024 + aj.s7.zd]
				} else a3k = 2 === ec ? aL.a6B()[4].canvas[+(eT < 255)] : (3 === ec ? aL.a6B()[5] : aL.a6B()[6]).canvas[0];
				aB = aj.xW.zS, eT = .8 * fontSize / aB, ec = aKn - .5 * eT * aB - .534 * aL0 * fontSize, aKn = aKo + 1.4 * eT * aB;
				i6.setTransform(eT, 0, 0, eT, ec, aKn), i6.globalAlpha = aL2(fontSize), i6.drawImage(a3k, 0, 0), i6.globalAlpha = 1, i6.setTransform(1, 0, 0, 1, 0, 0)
			}(aKn, aKo, fontSize, ec, aB, gX, aDM[aB + ec * aD.f1], i6), gX -= 2)
		}(aKn, aKo, fontSize, aB, i6), (aKq = aKG * fontSize) < aKI || (i6.font = bA.qr.si(1, aKq), aKo += Math.floor(.78 * fontSize), aKa ? aKu(aB, aKq, aKn, aKo, i6) : aKt(i6, aB, aKq, aKn, aKo, aKp)))
	}

	function aKu(aB, fontSize, fB, fD, i6) {
		var ___id = aB;
		var showName = aB < aD.kP || !__fx.settings.hideBotNames;
		if (showName) i6.fillText(ag.a1V[aB], fB, fD), aB < aD.kP && 2 !== ag.a4G[aB] || (aB = fontSize / aKD[aB], i6.fillRect(fB - .5 * aB, fD + bA.qr.zt * fontSize, aB, Math.max(1, .1 * fontSize)));
		aKa && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i6.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i6.fillText(__fx.utils.getDensity(___id), fB, showName ? fD + fontSize : fD)
		);
	}

	function aKt(i6, aB, fontSize, aKn, aKo, aKp) {
		var ___id = aB;
		aB = bA.rq.a09(ag.h6[aB]);
		aKp >> 1 & 1 ? (i6.lineWidth = .05 * fontSize, i6.strokeStyle = aKs(fontSize, aKp % 2), i6.strokeText(aB, aKn, aKo)) : (1 < aKp && (i6.lineWidth = .12 * fontSize, i6.strokeStyle = aKs(fontSize, aKp), i6.strokeText(aB, aKn, aKo)), i6.fillText(
			aB, aKn, aKo));
		aKa || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i6.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i6.fillText(__fx.utils.getDensity(___id), aKn, aKo + fontSize))
	}

	function aKw(aKn, aKo, fontSize, aL0, aL1, i6) {
		var a6g = .95 * fontSize / aKS,
			aKn = aKn - .5 * a6g * aKR + .8 * aL0 * fontSize,
			aL0 = aKo - 1.76 * a6g * aKS - (.35 - bA.qr.zt + .7) * aL1 * fontSize;
		i6.setTransform(a6g, 0, 0, a6g, aKn, aL0), i6.globalAlpha = aL2(fontSize), i6.drawImage(ab.get(4), 0, 0), i6.globalAlpha = 1, i6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aL5(aKn, aKo, fontSize, pa, aL0, i6) {
		var i0, y3, a6g;
		i6.globalAlpha = aL2(fontSize), aj.s7.a01(pa) ? (i0 = aj.xW.zS, i6.setTransform(a6g = 1.1 * fontSize / i0, 0, 0, a6g, y3 = aKn - .5 * a6g * i0 - .8 * aL0 * fontSize, a6g = aKo - 1.55 * a6g * i0), i6.drawImage(aj.xW.zR[pa - 1024 + aj.s7.zd],
			0, 0), i6.setTransform(1, 0, 0, 1, 0, 0)) : (y3 = aKn - .8 * aL0 * fontSize, a6g = aKo - (.35 - bA.qr.zt + 1) * fontSize, i6.fillText(aj.s7.zs(pa), y3, a6g)), i6.globalAlpha = 1
	}

	function aKs(fontSize, aKp) {
		return aKF <= fontSize && fontSize < aKE ? bg.aL7[aKp] + aL2(fontSize).toFixed(3) + ")" : bg.aL8[aKp]
	}

	function aL2(fontSize) {
		return aKF <= fontSize && fontSize < aKE ? 1 - (fontSize - aKF) / (aKE - aKF) : 1
	}

	function aLH(i5, i) {
		return 1 + Math.floor(aKH * i5 * i)
	}

	function aLE(aB) {
		for (var left = aK8[aB], fN = aK8[aB] - ag.ix[aB] - 1; 0 <= fN; fN--)
			if (!aLJ(aB, --left, aK9[aB], aKB[aB])) {
				left++;
				break
			} var right = aK8[aB];
		for (fN = ag.iy[aB] - aK8[aB] - aKA[aB]; 0 <= fN; fN--)
			if (!aLJ(aB, ++right + aKA[aB] - 1, aK9[aB], aKB[aB])) {
				right--;
				break
			} var fB = Math.floor((left + right) / 2),
			top = aK9[aB];
		for (fN = aK9[aB] - ag.iz[aB] - 1; 0 <= fN; fN--)
			if (!aLK(aB, fB, --top, aKA[aB])) {
				top++;
				break
			} var bottom = aK9[aB];
		for (fN = ag.j0[aB] - aK9[aB] - aKB[aB]; 0 <= fN; fN--)
			if (!aLK(aB, fB, ++bottom + aKB[aB] - 1, aKA[aB])) {
				bottom--;
				break
			} var fD = Math.floor((top + bottom) / 2);
		aLB(aB, fB, fD, aKA[aB], aKB[aB]) && (aK8[aB] = fB, aK9[aB] = fD)
	}

	function aLB(player, fB, fD, i, j) {
		f7 = Math.floor(.2 * i);
		for (var f7, ec = fB + i - 1; fB <= ec; ec--)
			if (!aLJ(player, ec, fD, j)) return;
		for (ec = fD + j - 1 - (f7 = (f7 = Math.floor(.25 * j)) < 1 ? 1 : f7); fD + f7 <= ec; ec--)
			if (!aLK(player, fB, ec, i)) return;
		return 1
	}

	function aLJ(player, fB, fD, j) {
		return ac.yv(player, 4 * (fD * bS.fF + fB)) && ac.yv(player, 4 * ((fD + j - 1) * bS.fF + fB))
	}

	function aLK(player, fB, fD, i) {
		return ac.yv(player, 4 * (fD * bS.fF + fB)) && ac.yv(player, 4 * (fD * bS.fF + fB + i - 1))
	}
	this.dd = function() {
		if (aKa = bj.eP.data[7].value || 8 === aD.kh, aKN = !1, aKJ = .88, aKG = .5, aKH = 1.8, aKI = 12 - 3 * bj.eP.data[9].value, aK7 = aK6 = 0, aK8 = new Uint16Array(aD.f1), aK9 = new Uint16Array(aD.f1), aKA = new Uint16Array(aD.f1), aKB =
			new Uint16Array(aD.f1), aKC = new Float32Array(aD.f1), aKD = new Float32Array(aD.f1), aKQ = new Uint16Array(2 * aD.f1), aDM = new Uint8Array(5 * aD.f1), aKY = new Uint8Array(aD.f1), aKZ = new Uint8Array(aD.f1), aKO = aKO || document
			.createElement("canvas"), qu(), aKL = aKK = 0, aKM = 1, aKa) {
			var aB, aKg;
			for (aKb(), vV.font = bA.qr.si(1, 100), aKg = 100 / Math.floor(vV.measureText("900 000").width), aB = aD.f1 - 1; 0 <= aB; aB--) aKC[aB] = Math.min(aKg, 2 * aKD[aB]);
			aKX = aKg, aKW[0] = 100 / (aKg * Math.floor(vV.measureText("5 000 000").width)), aKW[1] = 100 / (aKg * Math.floor(vV.measureText("50 000 000").width)), aKW[2] = 100 / (aKg * Math.floor(vV.measureText("500 000 000").width)), aKW[3] =
				100 / (aKg * Math.floor(vV.measureText("1 000 000 000").width))
		} else aKb();
		! function() {
			var aB;
			for (aB = aD.f1 - 1; 0 <= aB; aB--) ag.gs[aB] < 12 ? (aK8[aB] = ag.ix[aB] + 1, aK9[aB] = ag.iz[aB] + 1, aKA[aB] = 1, aKB[aB] = 1) : (aK8[aB] = ag.ix[aB], aK9[aB] = ag.iz[aB] + 1, aKA[aB] = 4, aKB[aB] = 2);
			if (aD.hS)
				for (aB = 0; aB < aD.kP; aB++) aKA[aB] = 0;
			aKR = ab.get(4).width, aKS = ab.get(4).height
		}()
	}, this.aJs = function(gc, a5t) {
		a5t > 18 * ag.gs[gc] ? (aKZ[gc] = 6, ac.a9F[gc] = 2 + ac.a9F[gc] % 2) : (aKY[gc] = 4, (ac.a9F[gc] < 2 || 3 < ac.a9F[gc]) && (ac.a9F[gc] = 6 + ac.a9F[gc] % 2))
	}, this.pn = function(gc, a5t) {
		a5t > 6 * ag.gs[gc] ? (aKZ[gc] = 6, ac.a9F[gc] = 4 + ac.a9F[gc] % 2) : (aKY[gc] = 4, (ac.a9F[gc] < 4 || 5 < ac.a9F[gc]) && (ac.a9F[gc] = 8 + ac.a9F[gc] % 2))
	}, this.resize = function() {
		qu(), aKf(aKP)
	}, this.a5F = function() {
		for (var aB = 0; aB < aD.kP; aB++) ag.iy[aB] - ag.ix[aB] != 3 || ag.j0[aB] - ag.iz[aB] != 3 ? (aK8[aB] = ag.ix[aB] + (ag.iy[aB] !== ag.ix[aB] ? 1 : 0), aK9[aB] = ag.iz[aB], aKA[aB] = 1, aKB[aB] = 1) : (aK8[aB] = ag.ix[aB], aK9[aB] = ag
			.iz[aB] + 1, aKA[aB] = 4, aKB[aB] = 2)
	}, this.qQ = function(player, eB, aKi) {
		! function(player, eB, aKi) {
			player += eB * aD.f1;
			0 === eB ? aKQ[player] === aKi && 0 < aDM[player] ? aDM[player] = 0 : (aKQ[player] = aKi, aDM[player] = aj.s7.a00(aKi) ? 255 : 64) : 1 === eB ? (aDM[player] = 64, aKQ[player] = aKi) : aDM[player] = aKi
		}(player, eB, aKi), 2 === aD.a0s && this.mk(!0)
	}, this.vU = function() {
		aKN && (1 !== aKM ? (vV.imageSmoothingEnabled = !0, vV.setTransform(aKM, 0, 0, aKM, 0, 0), vV.drawImage(aKO, -aKK / aKM, -aKL / aKM), vV.setTransform(1, 0, 0, 1, 0, 0), vV.imageSmoothingEnabled = !1) : vV.drawImage(aKO, -aKK, -aKL))
	}, this.aA2 = function(iO, iR) {
		aKK += iO, aKL += iR
	}, this.a2Q = function(iO, iR) {
		af.aA2(iO, iR)
	}, this.zoom = function(a3J, le, lf) {
		aKM *= a3J, aKK = (aKK + le) * a3J - le, aKL = (aKL + lf) * a3J - lf
	}, this.mk = function(bu) {
		return !(!aKV && !bu && bf.eS < aKU + (1 === aKM && 0 === aKK && 0 === aKL && (aD.a5i() || aD.hS || 2 === aD.a0s) ? 1e3 : aBK) || (aKf(aKP), 0))
	}, this.aKl = function(aB) {
		return aKh(aB) * aKC[aB]
	}, this.aKm = function(player) {
		return aKC[player]
	}, this.aIe = function() {
		aKV = !0
	}, this.eX = function() {
		bf.kM() % 10 == 9 && (aKV = aKV || aD.a5k() && !aD.a5i()), !aD.a5i() && 4 <= ++aK7 && function() {
			var aB, fN, fO;
			for (aK7 = 0, fO = 4; 1 <= fO; fO--)
				for (fN = al.kv - 1; 0 <= fN; fN--) aB = al.l0[fN] + fO * aD.f1, 0 < aDM[aB] && aDM[aB] < 255 && aDM[aB]--;
			if (2 !== aD.a0s)
				for (fN = al.kv - 1; 0 <= fN; fN--) aB = al.l0[fN], 0 < aDM[aB] && aDM[aB] < 255 && aDM[aB]--
		}();
		var aB, fN, f4 = Math.floor(.1 * al.kv);
		for (f4 = (f4 = f4 < 8 ? 8 : f4) > al.kv ? al.kv : f4, aB = aK6 + f4 - 1; aK6 <= aB; aB--) fN = aB % al.kv, ! function(aB) {
			var i5 = aKh(aB) * aKC[aB];
			0 < aKA[aB] && aLB(aB, aK8[aB], aK9[aB], aKA[aB], aKB[aB]) ? ! function(aB) {
				for (var fB, fD, i, j, ei = !1, fO = 0; fO < 8; fO++) {
					if (i = aKA[aB] + 2, j = aKB[aB] + 2, i > ag.iy[aB] - ag.ix[aB] + 1 || j > ag.j0[aB] - ag.iz[aB] + 1) return ei;
					if (fB = aK8[aB] - 1, fD = aK9[aB] - 1, !aLB(aB, fB, fD, i, j)) return ei;
					aK8[aB] = fB, aK9[aB] = fD, aKA[aB] = i, aKB[aB] = j, ei = !0
				}
				return ei
			}(aB) && function(aB, i5) {
				for (var fB, fD, i, j, ei = !1, aDV = aKA[aB], na = 1 + Math.floor(.02 * aDV), fO = 1; fO < 5; fO++) {
					if ((i = aDV + fO * na) > ag.iy[aB] - ag.ix[aB] + 1) return ei;
					if ((j = aLH(i5, i)) > ag.j0[aB] - ag.iz[aB] + 1) return ei;
					fB = ag.ix[aB] + Math.floor(Math.random() * (ag.iy[aB] - ag.ix[aB] + 2 - i)), fD = ag.iz[aB] + Math.floor(Math.random() * (ag.j0[aB] - ag.iz[aB] + 2 - j)), aLB(aB, fB, fD, i, j) && (aK8[aB] = fB, aK9[aB] = fD, aKA[
						aB] = i, aKB[aB] = j, ei = !0)
				}
				return ei
			}(aB, i5) && aLE(aB) : ! function(aB, i5) {
				var j, fB = aK8[aB] + 1,
					fD = aK9[aB] + 1,
					i = aKA[aB] - 2;
				for (;;) {
					if (i < 1) {
						aKA[aB] = 0;
						break
					}
					if (j = aLH(i5, i), aLB(aB, fB, fD, i, j)) return aK8[aB] = fB, aK9[aB] = fD, aKA[aB] = i, aKB[aB] = j, 1;
					fB++, fD++, i -= 2
				}
				return
			}(aB, i5) ? function(aB, i5) {
				var fB, fD, i, j, fO, ng, jf = ag.iy[aB] - ag.ix[aB] + 1,
					aLI = Math.floor(.02 * jf);
				for (ng = -6 * (aLI = aLI < 1 ? 1 : aLI), fO = jf; ng <= fO; fO -= aLI)
					if (j = aLH(i5, i = 0 < fO ? fO : 1), fB = ag.ix[aB] + Math.floor(Math.random() * (ag.iy[aB] - ag.ix[aB] + 2 - i)), fD = ag.iz[aB] + Math.floor(Math.random() * (ag.j0[aB] - ag.iz[aB] + 2 - j)), aLB(aB, fB, fD, i, j))
						return aK8[aB] = fB, aK9[aB] = fD, aKA[aB] = i, aKB[aB] = j
			}(aB, i5) : aLE(aB)
		}(al.l0[fN]);
		aK6 = (aK6 += f4) % al.kv
	}, this.mf = function() {
		var aB, gc, zy, zz;
		if (bf.kM() % 4 == 1)
			for (aB = al.kv - 1; 0 <= aB; aB--) gc = al.l0[aB], ac.a9F[gc] < 2 || ((zy = Math.max(aKY[gc] - 1, 0)) === (zz = Math.max(aKZ[gc] - 1, 0)) ? 0 === zy && (ac.a9F[gc] %= 2) : 0 === zz && ac.a9F[gc] < 6 && (ac.a9F[gc] += 4), aKY[gc] =
				zy, aKZ[gc] = zz)
	}, this.a7N = function(player) {
		var aB = player + 2 * aD.f1,
			eT = aDM[aB];
		return 0 < eT && (aN.a10(50, player), aDM[aB] = 0, 255 === eT)
	}, this.a6Q = function(player) {
		return 255 === aDM[player + 2 * aD.f1]
	}
}

function cd() {
	var aLL, aLM, aLN;
	this.dd = function() {
		aLL =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLM =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aLN = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7e = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEN = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLL.length - 1; 0 <= aB; aB--)
			for (var fN = a7e.length - 1; 0 <= fN; fN--) aLL[aB] = aLL[aB].replace(a7e[fN], aEN[fN]);
		if (__fx.settings.realisticNames) aLL = realisticNames;
	}, this.a5V = function() {
		var f4 = aD.kP,
			a1V = ag.a1V,
			a1a = ag.a1a,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f4)
			for (var aB = 0; aB < f4; aB++) a1V[aB] = a1a[aB] = "Player " + ay.jg(1e3);
		else
			for (aB = 0; aB < f4; aB++) a1V[aB] = a1a[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kh) {
			for (var eA = ay.random(), aLT = aLN, aLU = aLM, hn = aE.hn, f4 = aLT.length, lK = aD.data.teamPlayerCount[7], a1V = ag.a1V, a1a = ag.a1a, aB = lK - 1; aB >= aD.kP; aB--) a1V[aB] = a1a[aB] = aLT[(aB + eA) % f4];
			for (f4 = aLU.length - 1, aB = lK; aB < aD.f1; aB++) a1V[aB] = a1a[aB] = aLU[hn[aB] ? f4 : aB % f4]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f4 = aD.f1, a1V = ag.a1V, a1a = ag.a1a, playerNamesData = aD.data.playerNamesData, aB = aD.kP; aB < f4; aB++) a1V[aB] = a1a[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a1V = ag.a1V, a1a = ag.a1a, aB = aD.kP; aB < aD.f1; aB++) a1V[aB] = a1a[aB] = "Bot " + ay.jg(1e3)
		} : function() {
			for (var aLV = aLL, f4 = aLV.length, eA = ay.random(), a1V = ag.a1V, a1a = ag.a1a, aB = aD.kP; aB < aD.f1; aB++) a1V[aB] = a1a[aB] = aLV[(aB + eA) % f4]
		})()
	}
}

function cw() {
	this.aLW = [], this.aLX = [], this.dd = function() {
		this.aLW = [], this.aLX = []
	}, this.eX = function() {
		0 <= this.aLW.length && this.aLY(this.aLW), 0 <= this.aLX.length && this.aLY(this.aLX)
	}, this.aLY = function(g) {
		for (var fO = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eS--, g[aB].eS <= 0) {
				fO = aB;
				break
			} for (aB = fO; 0 <= aB; aB--) g.shift()
	}, this.a6J = function(id, a0g, aLZ) {
		return this.fP(this.aLW, id, a0g, aLZ)
	}, this.aLa = function(id, a0g, aLZ) {
		return this.fP(this.aLX, id, a0g, aLZ)
	}, this.fP = function(g, id, a0g, aLZ) {
		return ! function(g, id, a0g) {
			var aB, hw;
			for (aB = a0g.length - 1; 0 <= aB; aB--)
				for (hw = g.length - 1; 0 <= hw; hw--)
					if (g[hw].player === a0g[aB] && id === g[hw].id) return 1;
			return
		}(g, id, a0g) && (aLZ && function(g, id, a0g) {
			var aB;
			for (aB = a0g.length - 1; 0 <= aB; aB--) g.push({
				player: a0g[aB],
				id: id,
				eS: 384
			})
		}(g, id, a0g), !0)
	}
}

function cc() {
	this.a1a = new Array(aD.f1), this.a1V = new Array(aD.f1), this.a4G = new Uint8Array(aD.f1), this.my = new Uint8Array(aD.f1), this.ix = new Uint16Array(aD.f1), this.iz = new Uint16Array(aD.f1), this.iy = new Uint16Array(aD.f1), this.j0 =
		new Uint16Array(aD.f1), this.gs = new Uint32Array(aD.f1), this.yV = new Uint32Array(aD.f1), this.h6 = new Uint32Array(aD.f1), this.gW = null, this.gk = null, this.gl = null, this.fT = null, this.qG = new Uint16Array(aD.f1), this.jS =
		new Uint16Array(aD.f1), this.jT = new Uint16Array(aD.f1), this.a1U = new Uint16Array(aD.f1), this.a1S = new Uint8Array(aD.f1), this.a4P = new Uint16Array(aD.f1), this.dd = function() {
			this.a1a.fill(""), this.a1V.fill(""), this.a4G.fill(0), this.my.fill(0), this.ix.fill(0), this.iz.fill(0), this.iy.fill(0), this.j0.fill(0), this.gs.fill(0), this.yV.fill(0), this.h6.fill(0), this.gW = new Array(aD.f1), this.gk =
				new Array(aD.f1), this.gl = new Array(aD.f1), this.fT = new Array(aD.f1), this.qG.fill(0), this.jS.fill(0), this.jT.fill(0), this.a1U.fill(0), this.a1S.fill(0), this.a4P.fill(0)
		}
}

function cu() {
	this.aDs = function(player) {
		aG.mx(player), aD.a0u++, ag.a4G[player] = 2, ag.a1U[player] = bi.a1k.aIm(), player === aD.eo && (aX.show(!1, !1), aW.aC1(), bR.a0d.a1Q()), af.a7N(player)
	}
}

function cV() {
	this.l0 = null, this.kv = 0, this.a5Z = function() {
		for (this.kv = 0, aB = aD.f1 - 1; 0 <= aB; aB--) 0 !== ag.my[aB] && this.kv++;
		this.l0 = new Uint16Array(this.kv);
		for (var f4 = 0, aB = 0; aB < aD.f1; aB++) 0 !== ag.my[aB] && (this.l0[f4++] = aB)
	}, this.me = function() {
		for (var gs = ag.gs, yV = ag.yV, a1S = ag.a1S, l0 = al.l0, aB = al.kv - 1; 0 <= aB; aB--) {
			var gc = l0[aB],
				eT = gs[gc],
				lK = yV[gc];
			eT <= bL.fV(lK, 4) ? ak.dl(gc) : lK <= eT ? 250 <= (yV[gc] = eT) && (a1S[gc] = 1) : yV[gc] = lK - Math.max(1, bL.fV(lK - eT, 1e3))
		}
		this.aLe()
	}, this.aLe = function() {
		for (var my = ag.my, lJ = this.l0, aCj = this.kv, aB = aCj - 1; 0 <= aB; aB--) 0 === my[lJ[aB]] && (lJ[aB] = lJ[--aCj]);
		this.kv = aCj
	}
}

function cW() {
	var aLf = new Uint16Array(aD.f1),
		aLg = 0;

	function aLk(a7T, aLi) {
		var ec = bf.kM();
		return 3213 <= ec ? 4 + bL.fV(100 * aLi, ae.k5(a7T)) : (a7T = 1 + bL.fV(aD.k9, 300), ec < 357 ? 2 + bL.fV(100 * aLi, a7T) : ec < 714 ? 2 + bL.fV(100 * aLi, 4 * a7T) : ec < 1071 ? 2 + bL.fV(100 * aLi, 10 * a7T) : ec < 2142 ? 2 + bL.fV(100 *
			aLi, 30 * a7T) : 2 + bL.fV(100 * aLi, 100 * a7T))
	}

	function aLj(a7T) {
		return aD.kj || 7 <= aD.kh || 4284 <= bf.kM() || bA.gQ.jm(a7T)
	}
	this.dd = function() {
		aLf.fill(0), aLg = 15
	}, this.hi = function(pP) {
		var player = aD.eo;
		return !!bA.gQ.qI(player, pP) && !(!bA.gQ.pi(player, bA.gQ.ie(player, aR.hY()), pP) || (player = pP, pP = bO.fb[0], !aLj(player) && aLf[player] + aLk(player, pP) > aLg))
	}, this.eb = function(a7T, aLi) {
		if (!aLj(a7T)) {
			aLi = aLk(a7T, aLi);
			if (aLf[a7T] + aLi > aLg) return !1;
			aLf[a7T] += aLi
		}
		return !0
	}, this.eX = function() {
		bf.kM() % 100 == 99 && (bf.kM() < 1071 ? aLg += 4 : bf.kM() < 2142 ? aLg += 6 : bf.kM() < 3213 ? aLg += 8 : aLg += 10)
	}
}

function ce() {
	var aLl;
	this.kq = null, this.kp = 0, this.dd = function() {
		aLl = [], 9 === aD.kh && this.aLm()
	}, this.aLm = function() {
		this.kq = [0, 0, 0, 0, 0, 0];
		for (var aLn = [256, 227, 170, 148, 100, this.kp = 0, 0, 0], aLo = [0, 8, 24, 30, 46, 70, 256, 333], aLp = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kP, aB = 1; aB < aLn.length; aB++)
			if (j <= aLo[aB]) {
				this.kp = aLn[aB - 1] - bL.fV((j - aLo[aB - 1]) * (aLn[aB - 1] - aLn[aB]), aLo[aB] - aLo[aB - 1]), this.kq[5] = aLp[aB - 1] - bL.fV((j - aLo[aB - 1]) * (aLp[aB - 1] - aLp[aB]), aLo[aB] - aLo[aB - 1]), this.kq[0] = aD.f1 - j - this
					.kp - this.kq[5];
				break
			} aD.kl = aD.f1 - aD.kP, aD.data.numberTeams = (0 < aD.kP) + (0 < aD.kl), aD.data.playerCount = aD.y1 = aD.kP + aD.kl, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kP + this.kp, aD.kl - this.kp]), aD.a5O.a5T()
	}, this.aIt = function(player) {
		aLl.push({
			player: player,
			gX: 14 + ay.jg(20)
		})
	}, this.eX = function() {
		if (9 === aD.kh)
			for (var aB = aLl.length - 1; 0 <= aB; aB--) --aLl[aB].gX <= 0 && (af.qQ(aLl[aB].player, 0, aj.s7.zg + aj.s7.zu), aLl.splice(aB))
	}
}

function dB() {
	function aM5() {
		return {
			fF: bS.fF,
			fG: bS.fG,
			xT: bS.xT,
			xP: bS.xP,
			xQ: bS.xQ,
			xU: bS.xU,
			ek: bS.ek,
			mapSeed: bS.mapSeed,
			xR: bS.xR
		}
	}

	function aLx(aB) {
		return 1 !== aB && bS.aEX(aB) && aB !== bS.aM7()
	}
	this.aLr = 24, this.aLs = 12, this.aJ5 = 4096, this.fF = 0, this.fG = 0, this.xT = null, this.xP = null, this.xQ = null, this.xU = null, this.ek = 0, this.mapSeed = 0, this.xR = !1, this.xS = new aLt, this.xJ = new aLu, this.a7k = new aLv, this
		.dd = function() {
			this.xJ.dd()
		}, this.a7 = function(map, aLw) {
			((map %= this.aLr) !== this.ek || aLx(this.ek) && aLw !== this.mapSeed) && (this.xR = !1, this.xS.aLy(), ay.a5U(map), this.ek = map, this.mapSeed = aLw, aLx(map) && (bS.xJ.xK[map].aLz = aLw), this.aEX(this.ek) ? (map = bS.xJ.xK[this.ek],
				this.fF = map.i, this.fG = map.j, ay.a5U(map.aLz), aq.a7([this.fF, this.fG, map.n3, map.n0]), aM1(), ap.aM2(), aq.aM3()) : aM0())
		}, this.aM4 = function(map, aLw) {
			var fn = aM5(),
				map = (this.a7(map, aLw), this.xS.aLy(), aM5());
			return aLw = fn, bS.fF = aLw.fF, bS.fG = aLw.fG, bS.xT = aLw.xT, bS.xP = aLw.xP, bS.xQ = aLw.xQ, bS.xU = aLw.xU, bS.ek = aLw.ek, bS.mapSeed = aLw.mapSeed, bS.xR = aLw.xR, map
		}, this.a5p = function(canvas) {
			canvas && this.xT !== canvas && (this.fF = canvas.width, this.fG = canvas.height, this.xT = canvas, this.xP = this.xT.getContext("2d", {
				alpha: !1
			}), this.i3 = this.xP.getImageData(0, 0, this.fF, this.fG), this.xU = this.i3.data, this.ek = this.aM7(), this.mapSeed = 0, bS.xJ.xK[this.ek].name = aD.data.mapName)
		}, this.ej = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aM7()
		}, this.aM8 = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aM9 = function(aB) {
			return 1 === aB
		}, this.aM7 = function() {
			return this.aLr
		}, this.aEX = function(aB) {
			return void 0 === this.xJ.xK[aB].aMA
		}, this.a5o = function(qj) {
			return 0 === qj.mapType ? qj.mapProceduralIndex < 10 ? qj.mapProceduralIndex : 10 + qj.mapProceduralIndex : 1 === qj.mapType ? 10 <= qj.mapRealisticIndex ? 22 + qj.mapRealisticIndex - 10 : qj.mapRealisticIndex + 10 : void 0
		}, this.aEY = function(qj, aMB) {
			0 === qj.mapType ? qj.mapProceduralIndex = aMB < 10 ? aMB : aMB - 10 : 1 === qj.mapType && (qj.mapRealisticIndex = aMB - (22 <= aMB ? 12 : 10))
		}
}

function aLt() {
	function aMK() {
		bS.xS.eX()
	}

	function aMQ(gc, aMP) {
		0 < aMP && (bS.xU[gc] += aMP, bS.xU[gc + 1] += aMP, bS.xU[gc + 2] += aMP)
	}

	function iI(gc) {
		return bS.xU[gc + 2] > bS.xU[gc] && bS.xU[gc + 2] > bS.xU[gc + 1]
	}
	this.aAE = -1, this.a1y = 0, this.aMC = 0, this.aMD = 8, this.aME = 32, this.aMF = 8, this.aMG = 32, this.aMH = [0, 0], this.a9F = [0, 0, 0, 0], this.ir = null, this.aMI = !0, this.aMJ = !1, this.aLy = function() {
		-1 !== this.aAE && clearTimeout(this.aAE), this.aAE = -1, this.ir = null, aq.aM3()
	}, this.dd = function() {
		7 === aa.a27() || this.aMJ || (this.aMI = !0, this.a1y = 0, this.aMC = 1, this.aMH = [bS.xJ.xK[bS.ek].xl[0], bS.xJ.xK[bS.ek].xm[0]], this.a9F = [bS.xJ.xK[bS.ek].aMA[3], bS.xJ.xK[bS.ek].aMA[4], bS.xJ.xK[bS.ek].aMA[5], bS.xJ.xK[bS.ek].aMA[
			6]], this.aMD = bS.xJ.xK[bS.ek].aMA[7], this.aME = bS.xJ.xK[bS.ek].aMA[8], this.aMF = bS.xJ.xK[bS.ek].aMA[9], this.aMG = bS.xJ.xK[bS.ek].aMA[10], this.aMI ? this.aAE = setTimeout(aMK, 16) : this.eX())
	}, this.eX = function() {
		if (8 === aa.a27() && aH.nG()) this.aAE = setTimeout(aMK, 16);
		else {
			if (0 === this.a1y) {
				var aLz = ay.aML();
				if (ay.a5U(bS.xJ.xK[bS.ek].aMA[2]), aq.a7([bS.fF, bS.fG, bS.xJ.xK[bS.ek].aMA[0], bS.xJ.xK[bS.ek].aMA[1]]), ay.a5U(aLz), this.ir = aq.aMM(), this.a1y++, this.aMI) return void(this.aAE = setTimeout(aMK, 16))
			}
			for (var gc, eq, aLz = this.aMI ? 10 : 1e6, aLz = bS.fG - this.aMC - 1 < aLz ? bS.fG - this.aMC - 1 : aLz, yi = this.aMC + aLz, fD = this.aMC; fD < yi; fD++)
				for (var fB = 1; fB < bS.fF - 1; fB++) iI(gc = 4 * (eq = fB + fD * bS.fF)) ? this.aMN(gc, eq, 1) : (this.aMN(gc, eq, 0), function(fB, fD, gc) {
					return 1 < fB && iI(gc - 4) || fB < bS.fF - 2 && iI(gc + 4) || 1 < fD && iI(gc - 4 * bS.fF) || fD < bS.fG - 2 && iI(gc + 4 * bS.fF)
				}(fB, fD, gc) && this.aMO(fB, fD));
			this.aMC = yi, this.aMC >= bS.fG - 1 ? (bS.xP.putImageData(bS.xQ, 0, 0, 1, 1, bS.fF - 2, bS.fG - 2), bf.dk = !0, this.aLy()) : this.aMI && (this.aAE = setTimeout(aMK, 16))
		}
	}, this.aMN = function(gc, eq, eB) {
		aMQ(gc, Math.floor(this.aMH[eB] + this.a9F[eB] * this.ir[eq] / 1e4) - bS.xU[gc])
	}, this.aMR = function(gc, eA, aMS, eB, a9F) {
		aMQ(gc, Math.floor(this.aMH[eB] + (1 - eA / aMS) * a9F) - bS.xU[gc])
	}, this.aMO = function(le, lf) {
		for (var gc, eA, aMS, aA4 = le - this.aME, aMT = lf - this.aME, yj = le + this.aME, yi = lf + this.aME, aA4 = aA4 < 1 ? 1 : aA4, yj = yj > bS.fF - 2 ? bS.fF - 2 : yj, yi = yi > bS.fG - 2 ? bS.fG - 2 : yi, fD = aMT < 1 ? 1 : aMT; fD <=
			yi; fD++)
			for (var fB = aA4; fB <= yj; fB++) iI(gc = 4 * (fB + fD * bS.fF)) ? (aMS = this.aMD + (this.aME - this.aMD) * this.ir[fB + bS.fF * fD] / 1e4, Math.abs(le - fB) > aMS || Math.abs(lf - fD) > aMS || aMS <= (eA = Math.sqrt((le - fB) * (
				le - fB) + (lf - fD) * (lf - fD))) || this.aMR(gc, eA, aMS, 1, this.a9F[3])) : (aMS = this.aMF + (this.aMG - this.aMF) * this.ir[fB + bS.fF * fD] / 1e4, Math.abs(le - fB) > aMS || Math.abs(lf - fD) > aMS || aMS <= (eA = Math
				.sqrt((le - fB) * (le - fB) + (lf - fD) * (lf - fD))) || this.aMR(gc, eA, aMS, 0, this.a9F[2]))
	}
}

function aM1() {
	var vE = aMU(bS.ek);
	vE && aMV(vE[0], vE[1], vE[2], vE[3], vE[4])
}

function aMU(ek) {
	return 2 === ek ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ek ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ek ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ek ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ek ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aMV(aMW, aMX, aMY, aMZ, aMa) {
	for (var fB, fD, aMc, aMd, a3J, aMf, iN = aMW.length - 1, aMb = bS.fF + bS.fG, f4 = (aMb *= aMb, aMY.length), aMe = Array(f4), aB = f4 - 1; 0 <= aB; aB--) aMe[aB] = aMY[aB] * aMY[aB];
	var aMg = new Array(f4),
		aDJ = new Array(f4),
		aMh = new Array(f4),
		fW = aq.aMM();
	if (void 0 === aMa)
		for (aMa = new Array(f4), aB = f4 - 1; 0 <= aB; aB--) aMa[aB] = 0;
	for (aB = 1; aB < f4; aB++) aMg[aB] = aMe[aB] - aMe[aB - 1], aDJ[aB] = aMZ[aB] - aMZ[aB - 1], aMh[aB] = aMa[aB] - aMa[aB - 1];
	for (fB = bS.fF - 1; 0 <= fB; fB--)
		for (fD = bS.fG - 1; 0 <= fD; fD--) {
			for (aMc = aMb, aB = iN; 0 <= aB; aB--) aMc = (aMd = (fB - aMW[aB]) * (fB - aMW[aB]) + (fD - aMX[aB]) * (fD - aMX[aB])) < aMc ? aMd : aMc;
			for (a3J = aMZ[f4 - 1], aMf = aMa[f4 - 1], aB = 1; aB < f4; aB++)
				if (aMc < aMe[aB]) {
					a3J = aMZ[aB - 1] + aI9((aMc - aMe[aB - 1]) * aDJ[aB], aMg[aB]), aMf = aMa[aB - 1] + aI9((aMc - aMe[aB - 1]) * aMh[aB], aMg[aB]);
					break
				} aMi(bS.fF * fD + fB, a3J, aMf, fW)
		}
}

function aMi(eB, a3J, aMf, fW) {
	a3J < 500 ? fW[eB] = bL.fV(fW[eB] * a3J * 2, 1e3) : 500 < a3J && (fW[eB] += bL.fV(2 * (1e4 - fW[eB]) * (a3J - 500), 1e3)), fW[eB] += bL.fV(aMf * (10 * a3J - fW[eB]), 1e3)
}

function cg() {
	var aMj;

	function aMt(a3k, i5, fB, fD, globalAlpha) {
		bS.xP.save(), bS.xP.globalAlpha = globalAlpha, bS.xP.imageSmoothingEnabled = !1, bS.xP.scale(i5, i5), bS.xP.drawImage(a3k, Math.floor(fB * (bS.fF / i5 - a3k.width)), Math.floor(fD * (bS.fG / i5 - a3k.height))), bS.xP.restore()
	}
	this.a7h = 0, this.a7i = 0, this.a7j = 0, this.a7k = 0, this.dd = function() {
		(aMj = new Array(bS.aLr))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			eA: [220, 250, 255, 220],
			tW: [190, 220, 0, 0],
			fO: [170, 200, 0, 0]
		}, aMj[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			eA: [25, 0, 100, 0, 25],
			tW: [25, 0, 0, 0, 25],
			fO: [25, 0, 0, 0, 25]
		}, aMj[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eA: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tW: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fO: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMj[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eA: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tW: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fO: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMj[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eA: [10, 10, 20, 10, 10, 170, 212],
			tW: [20, 20, 60, 100, 100, 110, 170],
			fO: [70, 70, 160, 30, 30, 60, 120]
		}, aMj[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eA: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tW: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fO: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMj[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eA: [10, 10, 60, 255, 255, 200, 200],
			tW: [10, 10, 60, 255, 255, 200, 200],
			fO: [80, 80, 255, 255, 255, 200, 200]
		}, aMj[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eA: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tW: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fO: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMj[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eA: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tW: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fO: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMj[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eA: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tW: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fO: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMj[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eA: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tW: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fO: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMj[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eA: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tW: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fO: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aM2 = function() {
		var aMs, aB, fN, fn, i3 = function() {
				var i3;
				return bS.xT = document.createElement("canvas"), bS.xT.width = bS.fF, bS.xT.height = bS.fG, bS.xP = bS.xT.getContext("2d", {
					alpha: !1
				}), i3 = bS.xP.getImageData(0, 0, bS.fF, bS.fG), bS.xU = i3.data, i3
			}(),
			i = aMj[bS.ek].i,
			eA = aMj[bS.ek].eA,
			tW = aMj[bS.ek].tW,
			fO = aMj[bS.ek].fO,
			fW = aq.aMM(),
			f4 = i.length - 2,
			aMn = new Array(1 + f4),
			aMo = new Array(1 + f4),
			aMp = new Array(1 + f4),
			aMq = new Array(1 + f4);
		for (fN = f4; 0 <= fN; fN--) aMn[fN] = i[fN + 1] - i[fN], aMo[fN] = eA[fN + 1] - eA[fN], aMp[fN] = tW[fN + 1] - tW[fN], aMq[fN] = fO[fN + 1] - fO[fN];
		for (aB = bS.fF * bS.fG - 1; 0 <= aB; aB--)
			for (fN = f4; 0 <= fN; fN--)
				if (fW[aB] >= i[fN]) {
					fn = fW[aB] - i[fN], bS.xU[4 * aB] = eA[fN] + aI9(aMo[fN] * fn, aMn[fN]), bS.xU[4 * aB + 1] = tW[fN] + aI9(aMp[fN] * fn, aMn[fN]), bS.xU[4 * aB + 2] = fO[fN] + aI9(aMq[fN] * fn, aMn[fN]), bS.xU[4 * aB + 3] = 255;
					break
				} bS.xP.putImageData(i3, 0, 0), bS.aM9(bS.ek) && ab.ta() && bS.aM9(bS.ek) && (i3 = ab.aHK("arena"), aMs = ab.aHK("territorial.io"), aMt(i3, 5, .5, .5, .1), aMt(aMs, 2, .5, .45, .1)), bS.xR = !0, bf.dk = !0
	}, this.a5X = function() {
		for (var gc, fB, fD, aMu, hu, fp, a7i = 0, i = bS.fF, j = bS.fG, fn = i * j * 4, aMv = aCs, aMw = bS.xU, aB = i - 1; 0 <= aB; aB--) aMv[(gc = aB << 2) + 2] = aMv[fn - gc - 2] = 3;
		for (fn = 4 * i, aB = j - 1; 0 <= aB; aB--) aMv[(gc = aB * fn) + 2] = aMv[gc + fn - 2] = 3;
		for (aMu = i - 1, hu = j - 1, fD = 1; fD < hu; fD++)
			for (fn = fD * i, fB = 1; fB < aMu; fB++) fp = 1 - (aMw[(gc = fn + fB << 2) + 2] > aMw[gc + 1] && aMw[gc + 2] > aMw[gc]), aMv[gc + 2] = 6 - 5 * fp, a7i += fp;
		this.a7h = (i - 2) * (j - 2), this.a7k = 0, bS.ej(bS.ek) && (bS.a7k.aMx(), bS.a7k.aMy(4, 5)), this.a7i = aD.k9 = a7i - this.a7k, this.a7j = this.a7h - this.a7i - this.a7k, this.a7j && (bS.a7k.aMy(6, 2), bS.a7k.aMz())
	}
}

function aM0() {
	var qY;
	10 === bS.ek ? qY =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.ek ? qY =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.ek ? qY =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.ek ? qY =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.ek ? qY =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.ek ? qY =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.ek ? qY =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.ek ? qY =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.ek ? qY =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.ek ? qY =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.ek ? qY =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.ek && (qY =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new xC).xE(qY)
}

function aLu() {
	this.xK = null, this.aN0 = null, this.aN1 = null, this.dd = function() {
		var aN2 = [120, 105, 92],
			cos = [12, 12, 60],
			aN3 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aN4 = [140, 130, 120],
			aN5 = [12, 12, 76],
			aN6 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aN7 = [130, 117, 106],
			aN8 = [12, 12, 68],
			aN9 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xK = new Array(bS.aLr + 1), __fx.customLobby.setMapInfo(this.xK), this.xK[0] = {
			name: L(132),
			i: 230,
			j: 230,
			n3: 1e3,
			n0: 2e3,
			aLz: 173
		}, this.xK[1] = {
			name: L(133),
			i: 800,
			j: 800,
			n3: 100,
			n0: 50,
			aLz: 43
		}, this.xK[2] = {
			name: L(134),
			i: 512,
			j: 512,
			n3: 128,
			n0: 32,
			aLz: 0
		}, this.xK[3] = {
			name: L(135) + " 1",
			i: 960,
			j: 960,
			n3: 60,
			n0: 8,
			aLz: 0
		}, this.xK[4] = {
			name: L(136),
			i: 900,
			j: 900,
			n3: 100,
			n0: 5,
			aLz: 0
		}, this.xK[5] = {
			name: L(137),
			i: 1e3,
			j: 1e3,
			n3: 100,
			n0: 40,
			aLz: 0
		}, this.xK[6] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			n3: 100,
			n0: 20,
			aLz: 0
		}, this.xK[7] = {
			name: L(139),
			i: 1024,
			j: 1024,
			n3: 128,
			n0: 32,
			aLz: 0
		}, this.xK[8] = {
			name: L(140),
			i: 820,
			j: 820,
			n3: 200,
			n0: 100,
			aLz: 0
		}, this.xK[9] = {
			name: L(141),
			i: 1024,
			j: 1024,
			n3: 128,
			n0: 32,
			aLz: 0
		}, this.xK[10] = {
			name: L(142),
			xl: aN4,
			xm: aN5,
			aMA: aN6
		}, this.xK[11] = {
			name: L(143),
			xl: aN7,
			xm: aN8,
			aMA: aN9
		}, this.xK[12] = {
			name: L(144),
			xl: aN7,
			xm: aN8,
			aMA: aN9
		}, this.xK[13] = {
			name: L(145),
			xl: aN2,
			xm: cos,
			aMA: aN3
		}, this.xK[14] = {
			name: L(146),
			xl: aN2,
			xm: cos,
			aMA: aN3
		}, this.xK[15] = {
			name: L(147),
			xl: aN4,
			xm: aN5,
			aMA: aN6
		}, this.xK[16] = {
			name: L(148),
			xl: aN4,
			xm: aN5,
			aMA: aN6
		}, this.xK[17] = {
			name: L(149),
			xl: aN2,
			xm: cos,
			aMA: aN3
		}, this.xK[18] = {
			name: L(150),
			xl: aN7,
			xm: aN8,
			aMA: aN9
		}, this.xK[19] = {
			name: L(151),
			xl: aN2,
			xm: cos,
			aMA: aN3
		}, this.xK[20] = {
			name: L(152),
			i: 1024,
			j: 1024,
			n3: 128,
			n0: 32,
			aLz: 0
		}, this.xK[21] = {
			name: L(135) + " 2",
			i: 940,
			j: 940,
			n3: 80,
			n0: 8,
			aLz: 0
		}, this.xK[22] = {
			name: L(153),
			xl: aN7,
			xm: aN8,
			aMA: aN9
		}, this.xK[23] = {
			name: L(154),
			xl: aN4,
			xm: aN5,
			aMA: aN6
		}, this.xK[bS.aLr] = {
			name: ""
		}, this.aN0 = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aN0[aB] = aB;
		for (this.aN0[10] = 20, this.aN0[11] = 21, this.aN1 = new Uint8Array(bS.aLs), aB = 0; aB < 10; aB++) this.aN1[aB] = 10 + aB;
		this.aN1[10] = 22, this.aN1[11] = 23
	}
}

function aLv() {
	this.aMx = function() {
		for (var gc, fB, fn, aMv = aCs, aMw = bS.xU, i = bS.fF, aMu = i - 1, hu = bS.fG - 1, gX = 0, fD = 1; fD < hu; fD++)
			for (fn = fD * i, fB = 1; fB < aMu; fB++) aMw[gc = fn + fB << 2] === aMw[1 + gc] && aMw[gc] === aMw[2 + gc] && (gX++, aMv[2 + gc] = 4);
		ap.a7k = gX
	}, this.aMy = function(aNA, aNB) {
		for (var aMv = aCs, i = bS.fF, aMu = i - 1, hu = bS.fG - 1, id = 0, fD = 1; fD < hu; fD++)
			for (var fn = fD * i, fB = 1; fB < aMu; fB++) {
				var ei = 2 + (fn + fB << 2);
				aMv[ei] === aNA && (! function(ei, id, aNA, aNB) {
					var f4 = 1,
						aMv = aCs,
						f6 = ac.f6,
						a3W = [ei],
						aND = id >> 8 << 1,
						aNE = 255 & id;
					aMv[ei - 2] = aND, aMv[ei - 1] = aNE, aMv[ei] = 5;
					for (; f4;) {
						for (var a3X = [], aB = 0; aB < f4; aB++)
							for (var et = a3W[aB], f7 = 3; 0 <= f7; f7--) {
								var f8 = et + f6[f7];
								aMv[f8] === aNA && (aMv[f8 - 2] = aND, aMv[f8 - 1] = aNE, aMv[f8] = aNB, a3X.push(f8))
							}
						f4 = (a3W = a3X).length
					}
				}(ei, id, aNA, aNB), id = (id + 1) % 32768)
			}
	}, this.aMz = function() {
		for (var aMv = aCs, i = bS.fF, aMu = i - 3, hu = bS.fG - 3, aNG = 12 * i, fD = 3; fD < hu; fD++)
			for (var fn = fD * i, fB = 3; fB < aMu; fB++) {
				var ei = 2 + (fn + fB << 2);
				2 !== aMv[ei] || 2 === aMv[ei - 12] && 2 === aMv[12 + ei] && 2 === aMv[ei - aNG] && 2 === aMv[ei + aNG] || (aMv[ei - 2] = 1 | aMv[ei - 2])
			}
	}
}

function a5W() {
	(z4 = void 0 === z4 ? document.createElement("canvas") : z4).width = bS.fF, z4.height = bS.fG, a5a = z4.getContext("2d", {
		alpha: !0
	}), a5b = aCs = null, a5b = a5a.getImageData(0, 0, bS.fF, bS.fG), aCs = a5b.data, bA.qz.xV(aCs)
}

function ch() {
	var fW, i, j, max, aNH, n0, aNJ, aNK, aNL, aNM, aNN, aNO, aNP, aNQ, aNI = 1e4;

	function aNX(aNW, n3, f4) {
		var aB;
		for (aNJ[0] = aNW, aB = 1; aB < f4; aB++) aNJ[aB] = aNJ[aB - 1] + n3, n3 = aNJ[aB] >= aNI ? (aNJ[aB] = aNI - 1, -n3) : aNJ[aB] < 0 ? (aNJ[aB] = 0, -n3) : (n3 += 16384 <= ay.random() ? n0 : -n0) < -aNH ? -aNH : aNH < n3 ? aNH : n3
	}

	function aNZ(fB, fD, aNa, f4) {
		(aNa ? function(fB, fD, f4) {
			var aB;
			for (aB = 0; aB < f4; aB++) fW[fD * i + fB + aB] = aNJ[aB]
		} : function(fB, fD, f4) {
			var aB;
			for (aB = 0; aB < f4; aB++) fW[fD * i + fB + aB * i] = aNJ[aB]
		})(fB, fD, f4)
	}

	function aNd(value, f4) {
		var aB, aLI, ei, je = value - aNJ[f4 - 1];
		if (0 != je) {
			for (aLI = 1 + bL.fV(Math.abs(je), f4 - 1), aLI = je < 0 ? -aLI : aLI, aNJ[f4 - 1] = value, ei = (ei = f4 - 1 - bL.fV(Math.abs(je), Math.abs(aLI))) < 1 ? 1 : f4 - 2 < ei ? f4 - 2 : ei, aB = f4 - 2; ei <= aB; aB--) aNJ[aB] += je - (f4 -
				1 - aB) * aLI;
			(je < 0 ? function(f4) {
				var aB;
				for (aB = f4 - 2; 1 <= aB; aB--) aNJ[aB] < 0 && (aNJ[aB] = -aNJ[aB] - 1)
			} : function(f4) {
				var aB;
				for (aB = f4 - 2; 1 <= aB; aB--) aNJ[aB] >= aNI && (aNJ[aB] = 2 * aNI - aNJ[aB] - 1)
			})(f4)
		}
	}

	function aNg(a3W, a3X, f4) {
		for (var aB = 0; aB < f4; aB++) a3W[aB] = a3X[aB]
	}

	function aNh(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNi(a6D, gap, hv) {
		aNK.push(a6D), aNL.push(gap), aNM.push(hv)
	}
	this.a7 = function(a4k) {
		! function(a4k) {
			var aB;
			for (i = a4k[0], j = a4k[1], aNH = a4k[2], n0 = a4k[3], fW = new Int16Array(i * j), max = j < i ? i : j, aNJ = new Int16Array(max), aNK = [], aNL = [], aNM = [], aNN = new Array(i), aNO = new Array(j), aB = i - 1; 0 <= aB; aB--) aNN[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aNO[aB] = !1;
			aNP = new Int16Array(i), aNQ = new Int16Array(j)
		}(a4k),
		function(f4) {
			var aNW = ay.random() % aNI,
				n3 = ay.random() % (2 * aNH + 1) - aNH;
			aNX(aNW, n3, f4)
		}(max), aNg(aNQ, aNJ, j), aNZ(0, 0, !0, i);
		var fB, fD, a4k = fW[0],
			f4 = max,
			n3 = ay.random() % (2 * aNH + 1) - aNH;
		for (aNX(a4k, n3, f4), aNg(aNP, aNJ, i), aNZ(0, 0, !1, j), aNh(aNP), aNh(aNQ), aNX(fW[i - 1], aNP[i - 1], j), aNZ(i - 1, 0, !1, j), aNX(fW[i * (j - 1)], aNQ[j - 1], i), aNd(fW[i * j - 1], i), aNZ(0, j - 1, !0, i), aNN[i - 1] = aNN[0] = !
			0, aNO[j - 1] = aNO[0] = !0, aNi(0, i, !0), aNi(0, j, !1), ! function() {
				var aNk, a6D;
				for (;;) {
					if (aNk = function() {
							var aB, aNk = aNK.length - 1;
							for (aB = aNk - 1; 0 <= aB; aB--) aNL[aB] > aNL[aNk] && (aNk = aB);
							return aNk
						}(), aNL[aNk] < 5) return;
					a6D = aNK[aNk] + bL.fV(aNL[aNk], 2), (aNM[aNk] ? function(fB) {
						var f4, aNn, aB, aGg = 0,
							aNo = 0;
						for (; aNo < j - 1;) {
							for (aB = aGg + 1; aB < j; aB++)
								if (aNO[aB]) {
									aNo = aB;
									break
								} f4 = aNo - aGg + 1, aNX(fW[fB + i * aGg], 0 === aGg ? aNP[fB] : aNJ[aNn - 1] - aNJ[aNn - 2], f4), aNd(fW[aNo * i + fB], f4), aNZ(fB, aGg, !1, f4), aNn = f4, aGg = aNo
						}
						aNN[fB] = !0
					} : function(fD) {
						var f4, aNn, aB, aGg = 0,
							aNo = 0;
						for (; aNo < i - 1;) {
							for (aB = aGg + 1; aB < i; aB++)
								if (aNN[aB]) {
									aNo = aB;
									break
								} f4 = aNo - aGg + 1, aNX(fW[fD * i + aGg], 0 === aGg ? aNQ[fD] : aNJ[aNn - 1] - aNJ[aNn - 2], f4), aNd(fW[fD * i + aNo], f4), aNZ(aGg, fD, !0, f4), aNn = f4, aGg = aNo
						}
						aNO[fD] = !0
					})(a6D), aNi(a6D, aNK[aNk] + aNL[aNk] - a6D, aNM[aNk]), aNL[aNk] = a6D - aNK[aNk] + 1
				}
			}(), fB = 0; fB < i; fB++)
			if (!aNN[fB])
				for (fD = 0; fD < j; fD++) aNO[fD] || ! function(fB, fD) {
					var value = fW[fD * i + fB - 1] + fW[(fD - 1) * i + fB],
						a7x = 2;
					aNN[fB + 1] && (a7x++, value += fW[fD * i + fB + 1]);
					aNO[fD + 1] && (a7x++, value += fW[(fD + 1) * i + fB]);
					fW[fD * i + fB] = bL.fV(value, a7x)
				}(fB, fD)
	}, this.aMM = function() {
		return fW
	}, this.aM3 = function() {
		fW = null
	}
}

function aI9(fN, fO) {
	return 0 <= fN ? bL.fV(fN, fO) : -bL.fV(-fN, fO)
}

function jv(fW) {
	return fW * fW
}

function a7B(fN, fO) {
	return fO < fN ? fN : fO
}

function aCN(fN, fO) {
	return fN < fO ? fN : fO
}

function a9Z(fN, fW, fO) {
	return fW < fN ? fN : fO < fW ? fO : fW
}

function aNq(fW, f4) {
	for (var ec = bL.fV(fW + 1, 2), aB = 0; aB < f4; aB++) ec = bL.fV(ec + bL.fV(fW, ec), 2);
	return ec
}

function aJp(fW, f4) {
	return fW < 1 ? 0 : aNq(fW, f4)
}

function aNr(nO, nP, tF, a9I, nb, nc, tG, ty) {
	return !(nO + tF <= nb || nP + a9I <= nc || nb + tG <= nO || nc + ty <= nP)
}

function aNs(nO, nP, tF, a9I, nb, nc, tG, ty) {
	return nO <= nb && nP <= nc && nb + tG <= nO + tF && nc + ty <= nP + a9I
}

function xM(fW) {
	return Math.floor(!!fW * (1 + Math.log2(fW + .5)))
}

function bx() {
	this.fV = function(fN, fO) {
		return Math.floor((fN + .5) / fO)
	}, this.aNt = function(fN, fO) {
		return Math.floor(fN * (fO + .5))
	}, this.sqrt = function(fW) {
		return ~~Math.sqrt(fW + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iC = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aNu = function(fn, fp, fr) {
		return Math.max(Math.min(fn, fp), fr)
	}, this.aNv = function(aNw, aNx, fB, fD) {
		fB -= aNw, aNw = fD - aNx, fD = 0;
		return 0 == fB ? fD = 0 <= aNw ? Math.PI : 0 : (fD = Math.atan(aNw / fB), fD += 0 < fB ? .5 * Math.PI : 1.5 * Math.PI), fD
	}, this.log2 = function(fW) {
		return Math.floor(!!fW * (1 + Math.log2(fW + .5)))
	}, this.log10 = function(fW) {
		return Math.floor(Math.log10(fW + .5))
	}, this.aNz = function(aO0, aO1, aO2, aO3, aO4) {
		return aO2 - aO4 < aO0 && aO0 < aO2 + aO4 && aO3 - aO4 < aO1 && aO1 < aO3 + aO4
	}, this.yJ = function(a9z, aA1) {
		return a9z * a9z + aA1 * aA1
	}
}

function dD() {
	this.y = new aO5, this.t8 = 0;
	var aO6 = new Array(32);

	function aOA() {
		for (var f4 = aO6.length, aB = 0; aB < f4; aB++) aO6[aB] = null
	}
	this.dd = function() {
		for (var aO7, aO8 = document.body.firstChild; aO8;) aO7 = aO8.nextSibling, !document.body.contains(aO8) || "DIV" !== aO8.tagName && "INPUT" !== aO8.tagName && "BUTTON" !== aO8.tagName || t.removeChild(document.body, aO8), aO8 = aO7
	}, this.u = function(eB, aO9, a4k) {
		void 0 === aO9 && (aO9 = this.t8), bf.dk = !0, 0 === eB && (0 === aa.a27() ? eB = 5 : a0.a1.setState(13)), this.s8(), this.t8 === eB && (aO9 = aO6[eB].aO9, aO6[eB] = null), this.t8 = eB;
		var lK = aO6[eB];
		if (!lK || 4 === eB || 7 === eB || 8 === eB || 9 === eB || 10 === eB || 11 === eB || 13 === eB || 15 === eB || 18 === eB || 20 <= eB && eB <= 28 || 32 === eB || 33 === eB) {
			if (0 === eB) return void aOA();
			1 === eB ? lK = new aOB : 2 === eB ? lK = new aOC : 3 === eB ? lK = new aOD : 4 === eB || 9 === eB || 10 === eB || 11 === eB || 13 === eB || 33 === eB ? lK = a4k : 5 === eB ? lK = new aOE : 6 === eB ? lK = new aOF : 7 === eB ? lK =
				new aOG(t.y.aOH) : 8 === eB ? lK = a4k : 12 === eB ? lK = new aOI : 14 === eB ? lK = new aOJ : 15 === eB ? lK = new aOG(t.y.aOK) : 16 === eB ? lK = new aOL : 17 === eB ? lK = new aOM : 18 === eB ? lK = new aON : 19 === eB ? lK =
				new aOO : 20 === eB ? lK = new aOP : 21 === eB ? lK = new aOQ : 22 === eB ? lK = new aOR : 23 === eB ? lK = new aOS : 24 === eB ? lK = new aOT : 25 === eB ? lK = new aOU : 26 === eB ? lK = new aOV : 27 === eB ? lK = new aOW :
				28 === eB ? lK = new aOX : 29 === eB ? lK = new aOY : 30 === eB ? lK = new aOZ : 31 === eB && (lK = new aOa), lK.aO9 = aO9, aO6[eB] = lK
		}
		lK.show(a4k)
	}, this.a26 = function() {
		this.hq() && this.aOb(this.a5x().aO9)
	}, this.aOb = function(eB) {
		this.hq() && (aO6[eB] ? (this.s8(), bf.dk = !0, this.t8 = eB, aO6[eB].show()) : this.u(eB))
	}, this.s8 = function() {
		this.hq() && aO6[this.t8].s8()
	}, this.x = function() {
		this.hq() && (aO6[this.t8].s8(), aOA(), this.t8 = 0, a0.a1.setState(13))
	}, this.vU = function() {
		var lK;
		this.hq() && (lK = aO6[this.t8]).vU && lK.vU()
	}, this.resize = function() {
		if (!this.hq()) return !1;
		aO6[this.t8].resize()
	}, this.hH = function(fB, fD) {
		var lK;
		this.hq() && (lK = aO6[this.t8]).hH && lK.hH(fB, fD)
	}, this.a2Q = function(fB, fD) {
		var lK;
		this.hq() && (lK = aO6[this.t8]).a2Q && lK.a2Q(fB, fD)
	}, this.a2o = function() {
		var lK;
		this.hq() && (lK = aO6[this.t8]).a2o && lK.a2o()
	}, this.a2T = function(le, lf, deltaY) {
		var lK;
		this.hq() && (lK = aO6[this.t8]).a2T && lK.a2T(le, lf, deltaY)
	}, this.a2y = function(code) {
		var lK;
		return !!this.hq() && ((lK = aO6[this.t8]).a2y && lK.a2y(code), !0)
	}, this.eX = function() {
		var lK;
		this.hq() && (lK = aO6[this.t8]) && lK.eX && lK.eX()
	}, this.hq = function() {
		return 0 < this.t8
	}, this.a5x = function() {
		return aO6[this.t8]
	}, this.a5y = function(eB) {
		return aO6[eB]
	}, this.aOc = function() {
		return aO6
	}, this.removeChild = function(v1, a4F) {
		try {
			v1.removeChild(a4F)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOG(data) {
	var aOd, aOe;
	this.show = function() {
		data.aOf && bI.aPY("account", data.t6), aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aOe.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a26()
	}), new w(data.aOf ? "🔄 " + L(155) : L(156), function() {
		t.u(8, data.aOf ? t.a5x().aO9 : void 0, new t9(25, {
			tA: 0,
			t6: data.t6,
			t7: data.t7
		}))
	}, 0, 0, 1)]), aOe = new qk(aOd.vL, function() {
		var qm = [];
		qm.push(function() {
				var aOx = new qU,
					a1e = (aOx.qX(L(213)), data.aPE);
				a1e < 1 ? (aOx.qd(L(214)), 0 === data.aPF ? aOx.qZ(L(215)) : 1 === data.aPF ? aOx.qZ(L(216)) : 2 === data.aPF ? aOx.qZ(L(217)) : 3 === data.aPF ? aOx.qZ(L(218)) : 4 === data.aPF ? aOx.qZ(L(219)) : 5 === data.aPF ? aOx.qZ(
					L(220)) : 6 === data.aPF ? aOx.qZ(L(221)) : aOx.qZ(L(222))) : (aOx.qd(L(223)), a1e = a1e < 2 ? L(224) : a1e < 61 ? 2 === a1e ? L(225) : L(226, [a1e - 1]) : a1e < 84 ? 61 === a1e ? L(227) : L(228, [a1e - 60]) :
					a1e < 255 ? 84 === a1e ? L(229) : L(230, [a1e - 83]) : L(231), aOx.qZ(a1e));
				{
					var qa, aP2;
					aOx.qi(new sW), data.aOf && (qa = aOx.qZ(), aOx.qi(new sM([new w(bj.vt.uQ(data.t6) ? L(232) : L(233), function(e) {
						return bj.vt.w6(data.t6) ? (e.textContent = L(232), aP2(1)) : (e.textContent = L(233), aP2(0)), !0
					}).button])), aP2 = function(fW) {
						qa.textContent = fW ? L(234) : ""
					}, bj.vt.uQ(data.t6) && aP2(1), aOx.qi(new sW))
				}
				var re = new rf({
					value: data.username,
					eB: -1
				});
				re.e.readOnly = !0, aOx.qi(re), aOx.qi(new sM([new w(L(179), function(e) {
					return bA.qr.a4D(re.e), bA.qr.v7(e), !0
				}).button])), data.aOf ? (aOx.qi(new sW), aOx.qd(b0.y.aOy("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aOx.qi(new sM([new w(L(236), function(e) {
					return b0.aG6.aG7({
						tA: 3,
						t6: data.t6,
						value: 0
					}), bA.qr.v7(e), !0
				}, bB.od).button])), aOx.qi(new sM([new w(L(237), function(e) {
					return b0.aG6.aG7({
						tA: 3,
						t6: data.t6,
						value: 1
					}), bA.qr.v7(e), !0
				}, bB.od).button])), aOx.qi(new sM([new w("Cheater", function(e) {
					return b0.aG6.aG7({
						tA: 3,
						t6: data.t6,
						value: 2
					}), bA.qr.v7(e), !0
				}, bB.od).button])), aOx.qi(new sM([new w("False Reporter", function(e) {
					return b0.aG6.aG7({
						tA: 3,
						t6: data.t6,
						value: 3
					}), bA.qr.v7(e), !0
				}, bB.od).button]))) : aOx.qZ(L(235));
				return aOx
			}()),
			function(qm) {
				var aOx, qa, aD8, aPH, aP3, aP5, aP4;
				data.aOf || ((aOx = new qU).qX(L(238)), (qa = aOx.qZ(data.aPG.length + " / 160")).style.textAlign = "center", aD8 = !0, (aPH = new vd(0, 1, function(e) {
					e = e.target.value.length;
					qa.textContent = e + " / 160", 160 < e ? aD8 && (aD8 = !1, aP5.rB(1)) : aD8 || (aD8 = !0, aP5.rB(0))
				})).e.rows = 6, aPH.e.style.fontSize = "1em", aPH.vk(data.aPG), aOx.qi(aPH), 0 !== data.aPI ? (aP5 = new w(L(239), function() {
					if (!aD8) return !0;
					t.u(8, t.a5x().aO9, new t9(29, {
						tA: 1,
						qY: aPH.vl().substring(0, 160)
					}))
				}, 0, 0, 1), aOx.qi(new sM([aP5.button])), aOx.qi(new sM([new w(1 === data.aPI ? L(240) : L(241), function() {
					t.u(8, t.a5x().aO9, new t9(29, {
						tA: 0,
						qY: ""
					}))
				}, 0, 0, 1).button])), aOx.qZ(1 === data.aPI ? L(242, [data.aPJ - 1]) : L(243, [data.aPJ - 1])), aOx.qZ(L(244, [data.aPK]))) : (aP3 = new w(L(245), function() {
					if (!aPH.e.readOnly) return !0;
					t.u(8, t.a5x().aO9, new t9(29, {
						tA: 1,
						qY: aPH.vl().substring(0, 160)
					}))
				}, 1), aP5 = new w(L(176), function(e) {
					if (e.textContent === L(176)) {
						if (!aD8) return !0;
						e.textContent = L(177), aPH.e.readOnly = !0, aP3.rB(0), aP3.button.style.color = bB.ox
					} else aP4();
					return !0
				}), aOx.qi(new sM([aP5.button])), aOx.qZ(L(244, [data.aPK])), aP4 = function() {
					aP5.button.textContent = L(176), aPH.e.readOnly = !1, aP3.rB(1), aP3.button.style.color = bB.ny
				}, aOx.qi(new sM([aP3.button]))), qm.push(aOx))
			}(qm),
			function(qm) {
				var aOx;
				data.aOf && 0 !== data.aPI && ((aOx = new qU).qX(L(246)), aOx.qb(data.aPG), aOx.qi(new sM([new w(L(247, 0, "Report"), function(e) {
					return b0.y.eY(0) && (bA.qr.v7(e), b0.aG6.aPL({
						tA: 5,
						t6: data.t6
					})), !0
				}, 0, 0, 1).button])), qm.push(aOx))
			}(qm), qm.push(function() {
				var aOx = new qU,
					aOz = (aOx.qX(L(157)), aOx.qd(b0.y.aOy("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171)]),
					eA = data.aP0;
				return aOx.qd(L(172) + bA.rq.a51(data.wj, .01, 2) + "<br>" + L(173) + (eA + 1) + " / " + data.wi + "<br>" + L(174) + aOz[function(eA, wj) {
					if (eA < 10) return 0;
					if (eA < 30) return 1;
					if (eA < 60) return 2;
					if (3e4 <= (wj = bL.fV(wj, 100))) return 3;
					if (12e3 <= wj) return 4;
					if (7e3 <= wj) return 5;
					if (3e3 <= wj) return 6;
					if (1e3 <= wj) return 7;
					if (500 <= wj) return 8;
					if (200 <= wj) return 9;
					if (70 <= wj) return 10;
					if (20 <= wj) return 11;
					if (3 <= wj) return 12;
					return 13
				}(eA, data.wj)]), aOx
			}()), data.aOf && qm.push(function() {
				var aOx = new qU,
					re = (aOx.qX(L(175)), aOx.qd(b0.y.aOy("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rf({
						value: bj.eP.data[147].value,
						eB: -1
					}, 1, void 0, function(e) {
						bj.sJ.sK(147, aP2(e.target.value))
					})),
					aP3 = (aOx.qi(re), new w(L(14), function(e) {
						return re.e.readOnly && b0.y.eY(0) && (bA.qr.v7(e), aP4(), b0.aG6.aG7({
							tA: 0,
							t6: data.t6,
							value: parseInt(bj.eP.data[147].value, 10)
						})), !0
					}, 1)),
					aP5 = new w(L(176), function(e) {
						return e.textContent === L(176) ? (e.textContent = L(177), re.e.readOnly = !0, aP3.rB(0), aP3.button.style.color = bB.ox, bj.sJ.sK(147, re.e.value), aP2(bj.eP.data[147].value)) : aP4(), !0
					}),
					qa = (aOx.qi(new sM([aP5.button])), aOx.qZ()),
					aP2 = function(fW) {
						qa.innerHTML = t.y.aP6(fW, bj.eP.data[105].value, data.t6)
					},
					aP4 = function() {
						aP5.button.textContent = L(176), re.e.readOnly = !1, aP3.rB(1), aP3.button.style.color = bB.ny
					};
				return aP2(bj.eP.data[147].value), aOx.qi(new sM([aP3.button])), aOx
			}());
		qm.push(function() {
			var aOx = new qU,
				re = (aOx.qX(L(178)), new rf({
					value: data.t6,
					eB: -1
				}));
			return re.e.readOnly = !0, aOx.qi(re), aOx.qi(new sM([new w(L(179), function(e) {
				return bA.qr.a4D(re.e), bA.qr.v7(e), !0
			}).button])), aOx
		}()), data.aOf || (qm.push(function() {
			var aOx = new qU,
				aP7 = (aOx.qX(L(180)), new rf(bj.eP.data[106]));
			return aP7.e.readOnly = !0, aP7.e.type = "password", aOx.qi(aP7), aOx.qi(new sM([new w(L(181), function(e) {
				return e.textContent === L(181) ? (e.textContent = L(182), aP7.e.type = "text") : (e.textContent = L(181), aP7.e.type = "password"), !0
			}).button, new w(L(179), function(e) {
				return bA.qr.a4D(aP7.e), bA.qr.v7(e), !0
			}).button])), aOx.qi(new sM([new w(L(183), function() {
				t.u(8, t.a5x().aO9, new t9(15))
			}).button])), aOx.qX(L(184), "0.8em"), aOx.qZ(L(185)), aOx.qZ(L(186)), aOx.qZ(L(187)), aOx
		}()), qm.push(function() {
			var aOx = new qU;
			return aOx.qX(L(188)), aOx.qi(new sM([new w(L(189), function() {
				t.u(6, t.a5x().aO9)
			}).button])), aOx.qi(new sM([new w(L(190), function() {
				bj.sJ.sK(105, ""), t.u(8, t.a5x().aO9, new t9(18))
			}).button])), aOx.qi(new sM([new w(L(191) + bj.eP.data[105].value, function() {
				t.u(4, 0, new v(L(192), L(193), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a5y(7).aO9)
				})]))
			}, bB.od).button])), aOx
		}()), qm.push(function() {
			function aP9(eB) {
				aP8[0].rB(0 === eB ? bB.oA : bB.oL), aP8[1].rB(0 === eB ? bB.oA : bB.od), aP8[2].rB(eB === qg.qh.length - 1 || eB < 5 ? bB.oA : bB.od)
			}
			var qg, aP8, aOx = new qU;
			aOx.qX(L(198)), aOx.qZ(L(199)), bj.y.wS();
			return aP8 = [new w(L(200), function() {
				var eB = Math.min(bj.eP.data[117].value, qg.qh.length - 1);
				eB < 1 || (eB = bj.y.wW(eB), bj.sJ.sK(105, eB.t6), bj.sJ.sK(106, eB.password), t.u(8, t.a5x().aO9, new t9(18)))
			}, bB.oA, 1), new w(L(196), function() {
				var eB = Math.min(bj.eP.data[117].value, qg.qh.length - 1);
				if (!(eB < 1)) {
					qg.qh[eB].remove(), qg.qh.splice(eB, 1);
					for (var aB = eB; aB < qg.qh.length; aB++) qg.qh[aB].name = "" + aB;
					bj.y.wV(eB), eB = bj.eP.data[117].value, qg.qh[eB].textContent = qg.qh[eB].textContent.replace("⚪", "🟢"), aP9(eB)
				}
			}, bB.oA, 1), new w(L(197), function() {
				var eB = Math.min(bj.eP.data[117].value, qg.qh.length - 1);
				if (eB !== qg.qh.length - 1) {
					for (var aB = qg.qh.length - 1; eB < aB; aB--) qg.qh[aB].remove(), qg.qh.splice(aB, 1), bj.y.wV(aB);
					aP9(eB)
				}
			}, bB.oA, 1)], qg = new vA(bj.eP.data[117], aP9), aP9(0), qg.qh[0].style.marginTop = "0.5em", aOx.qf(qg), aOx.qi(new sM([aP8[0].button])), aOx.qi(new sM([aP8[1].button])), aOx.qi(new sM([aP8[2].button])), aOx
		}()));
		return qm.push(function() {
				var aOx = new qU,
					aOz = (aOx.qX(L(204)), [L(205), L(206), L(207), L(208)]),
					eA = data.aPA;
				return aOx.qd(L(209) + (data.a1M / 100).toFixed(2) + "<br>" + L(173) + (eA + 1) + " / " + data.wi + "<br>" + L(174) + aOz[eA < 10 ? 0 : eA < 50 ? 1 : eA < 200 ? 2 : 3]), aOx
			}()), qm.push(function() {
				var aOx = new qU;
				return aOx.qX(L(201)), aOx.qd(L(202) + bA.rq.a51(data.wf, .1, 1) + "<br>" + L(173) + (data.wg + 1) + " / " + data.wi + "<br>" + L(203) + data.wh), aOx
			}()),
			function(qm) {
				var aOx = new qU,
					aPM = data.wm,
					aPN = (aOx.qX(L(248)), aOx.qd(L(249, [data.wk.length ? "[" + data.wk + "]" : "-"])), aOx.qd(L(250, [bA.rq.a51(aPM, .01, 2)])), aOx.qd(L(251, [data.wo + 1 + " / " + data.wi])), data.wp),
					aPO = (aOx.qd(L(252, [bA.rq.a51(aPN, .1, 1)])), data.wr);
				aOx.qd(L(253, [aPO])), aOx.qd(L(254, [bA.rq.a51(aPN / Math.max(aPO, 1), .1, 2)])), aPM = data.wn, aOx.qX(L(255), "0.8em"), aOx.qd(L(249, [data.wl.length ? "[" + data.wl + "]" : "-"])), aOx.qd(L(250, [bA.rq.a51(aPM, .01, 2)])),
					aPN = data.wq, aOx.qd(L(252, [bA.rq.a51(aPN, .1, 1)])), aPO = data.ws, aOx.qd(L(253, [aPO])), aOx.qd(L(254, [bA.rq.a51(aPN / Math.max(aPO, 1), .1, 2)])), aOx.qd(b0.y.aOy("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qm.push(aOx)
			}(qm),
			function(qm) {
				var aOx = new qU;
				aOx.qX(L(256)), aOx.qd(L(209) + (data.aPP / 10).toFixed(1) + "<br>" + L(174) + (data.aPQ.length ? L(257, [data.aPQ]) : L(258))), data.aOf && aOx.qi(new sM([new w(L(259), function(e) {
					return b0.y.eY(0) && (bA.qr.v7(e), b0.aG6.aPL({
						tA: 4,
						t6: data.t6
					})), !0
				}, 0, 0, 1).button]));
				aOx.qd(b0.y.aOy("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qm.push(aOx)
			}(qm), qm.push(function() {
				var aOx = new qU;
				if (aOx.qX(L(210)), aOx.qd(L(211) + data.aPB + "<br>" + L(173) + (data.aPC + 1) + " / " + data.wi + "<br>" + L(174) + bo.eD(data.aPC)), data.aOf) {
					var re = new rf({
							value: bj.eP.data[157].value,
							eB: -1
						}, 1, void 0, function(e) {
							bj.sJ.sK(157, aP2(e.target.value))
						}),
						aP5 = (re.e.style.marginTop = "0.6em", aOx.qi(re), new w(L(176), function(e) {
							return e.textContent === L(176) ? (e.textContent = L(177), re.e.readOnly = !0, aPD[0].rB(0), aPD[1].rB(0), aPD[0].button.style.color = bB.ox, aPD[1].button.style.color = bB.ox, aP2(bj.eP.data[157]
								.value)) : aP4(), !0
						})),
						aPD = (aOx.qi(new sM([aP5.button])), [new w("−", function(e) {
							return re.e.readOnly && b0.y.eY(0) && (bA.qr.v7(e), aP4(), b0.aG6.aG7({
								tA: 2,
								t6: data.t6,
								value: bL.iC(parseInt(bj.eP.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return re.e.readOnly && b0.y.eY(0) && (bA.qr.v7(e), aP4(), b0.aG6.aG7({
								tA: 1,
								t6: data.t6,
								value: bL.iC(parseInt(bj.eP.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qa = aOx.qZ(),
						aP2 = function(fW) {
							return fW = bA.gQ.a4h(fW, 3, 32767), qa.textContent = L(212, [fW - 1, fW, bj.eP.data[105].value]), fW
						};
					aOx.qi(new sM([aPD[0].button, aPD[1].button]));
					for (var aB = 0; aB < 2; aB++) aPD[aB].button.style.fontSize = "1.6em";
					var aP4 = function() {
						aP5.button.textContent = L(176), re.e.readOnly = !1, aPD[0].rB(1), aPD[1].rB(1), aPD[0].button.style.color = bB.ny, aPD[1].button.style.color = bB.ny
					};
					aP2(bj.eP.data[157].value)
				}
				return aOx
			}()),
			function(qm) {
				var aOx, a4C;
				data.aOf && !data.aPR || (0 === a0.id || data.aOf || data.aPR) && ((aOx = new qU).qX("Patreon"), !data.aOf && data.aPS ? aOx.qi(new sM([new w(L(181), function() {
					b0.aG6.aPL({
						tA: 7,
						t6: data.t6
					}), data.aPS = 0, t.u(7)
				}).button])) : data.aPR ? (aOx.qd(L(260, [(data.aPT / 100).toFixed(2)]) + "<br>" + L(261, [1 + data.aPU + " / " + data.aPV]) + "<br>" + L(262, [data.aPW ? L(263) : L(264)])), data.aOf || aOx.qi(new sM([new w(L(265),
					function() {
						b0.aG6.aPL({
							tA: 8,
							t6: data.t6
						}), data.aPR = 0, bj.sJ.sK(160, 0), t.u(7)
					}).button]))) : (aOx.qd(L(266), "0.75em").style.marginBottom = "0.3em", aOx.qd("  • " + L(267), "0.75em").style.whiteSpace = "pre", aOx.qd("  • " + L(268), "0.75em").style.whiteSpace = "pre", aOx.qd("  • " + L(
						269), "0.75em").style.whiteSpace = "pre", aOx.qd(L(270), "0.75em").style.marginTop = "1.0em", aOx.qd(L(271), "0.75em").style.marginTop = "1.0em", aOx.qd("<a href='" + bK.aPX +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4C = "https://www.patreon.com/oauth2/authorize?state=" + data.t6 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1J() + "/", aOx.qd(L(272), "0.75em").style.marginTop = "1.0em", aOx.qd("<a href='" +
						a4C + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aOf || (aOx.qi(new sW), aOx.qi(new sM([new w(L(182), function() {
						b0.aG6.aPL({
							tA: 6,
							t6: data.t6
						}), data.aPS = 1, t.u(7)
					}).button])), aOx.qd(L(273), "0.75em").style.marginTop = "0.75em")), qm.push(aOx))
			}(qm),
			function(qm) {
				var aOx, qg, aP8, eB, aP9;
				data.aOf || bj.vt.get().length && ((aOx = new qU).qX(L(194)), eB = 0, aP9 = function() {
					var aCn = bj.vt.get().length;
					aP8[0].rB(eB === aCn ? bB.oA : bB.oL), aP8[1].rB(eB === aCn ? bB.oA : bB.od), aP8[2].rB(eB === aCn || aCn - 1 <= eB || eB < 5 ? bB.oA : bB.od)
				}, aP8 = [new w(L(195), function() {
					t.u(8, void 0, new t9(25, {
						tA: 0,
						t6: bj.vt.get()[eB],
						t7: 0
					}))
				}, bB.oA, 1), new w(L(196), function() {
					bj.vt.w9(eB), qg.qh[eB].remove(), qg.qh.splice(eB, 1);
					for (var aB = eB; aB < qg.qh.length; aB++) qg.qh[aB].name = "" + aB;
					bj.vt.get().length && (eB = Math.max(eB - 1, 0), qg.qh[eB].textContent = qg.qh[eB].textContent.replace("⚪", "🟢")), aP9()
				}, bB.oA, 1), new w(L(197), function() {
					for (var hw = qg.qh.length - 1; eB < hw; hw--) bj.vt.w9(hw), qg.qh[hw].remove(), qg.qh.splice(hw, 1);
					aP9()
				}, bB.oA, 1)], aP9(), (qg = new vA(bj.vt.w5(), function(aB) {
					eB = aB, aP9()
				})).qh[0].style.marginTop = "0.5em", aOx.qf(qg), aOx.qi(new sM([aP8[0].button])), aOx.qi(new sM([aP8[1].button])), aOx.qi(new sM([aP8[2].button])), qm.push(aOx))
			}(qm), qm
	}())
}

function aOR() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.aIncomeType ? (bA.qz.a3a(aPb.vl(), aD.data.aIncomeData, 255), bA.qz.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(274), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(276), L(277), L(278)],
			value: aD.data.aIncomeType
		}, function(eB) {
			aPe(), 2 !== eB || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.f1)), aD.data.aIncomeType = eB, t.u(22)
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx;
		1 === aD.data.aIncomeType && ((aOx = new qU).qX("Value"), aOx.qi(new rf({
			eB: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iC(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qm.push(aOx))
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.aIncomeType && ((aOx = new qU).qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.aIncomeData, 4)), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aOU() {
	var aPZ, aPa, aPb;

	function aPc() {
		aPe(), 3 !== aD.data.botDifficultyType || bA.qz.a3O(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		3 === aD.data.botDifficultyType && bA.qz.a3a(aPb.vl(), aD.data.botDifficultyData, aE.ka.length - 1)
	}

	function aPj(qm, eB) {
		var aOx = new qU,
			value = (aOx.qX(eB < 0 ? L(62) : L(61) + " " + bg.a1E[eB % 9]), 0 <= eB && (aOx.qd(L(281) + ": " + aD.data.teamPlayerCount[eB]).style.marginBottom = "1em"), eB < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eB]);
		aOx.qf(new vA({
			vE: aE.ka,
			value: value
		}, function(hw) {
			eB < 0 ? aD.data.botDifficultyValue = hw : aD.data.botDifficultyTeam[eB] = hw
		})), qm.push(aOx)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(62), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, function() {
		var qm = [];
		if (function(qm) {
				var aOx = new qU,
					vE = (aOx.qX(L(275)), [L(277), L(279), L(280), L(278)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), vE.splice(2, 1));
				aOx.qf(new vA({
					vE: vE,
					value: value
				}, function(eB) {
					aPe(), aD.data.botDifficultyType = eB, 0 === aD.data.gameMode && 2 === eB && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.f1)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qm.push(aOx)
			}(qm), 0 === aD.data.botDifficultyType) aPj(qm, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPj(qm, aB);
		else 3 === aD.data.botDifficultyType && ! function(qm) {
			var aOx = new qU;
			aOx.qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.botDifficultyData, 8)), aOx.qi(aPb), qm.push(aOx)
		}(qm);
		return qm
	}())
}

function aPk(data) {
	var aOd, aPl, aPm, aPn, aPo, aPp, aPq, colors, aPr, aPs, aPt = 0,
		aPu = 0,
		aPv = !1,
		aPw = !1,
		aPx = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQR(le, lf) {
		! function(le, lf) {
			return aPl < le && le < aPl + aPn && aPm < lf && lf < aPm + aPo
		}(aPt = le, aPu = lf) ? (aPv && (bf.dk = !0), aPv = !1) : (aPv = !0, bf.dk = !0)
	}
	this.show = function() {
		aPw = bj.eP.data[127].value, aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize();
		var ec = h.k,
			vT = aOd.vQ(),
			aQ6 = ec * vT.vS,
			ec = ec * vT.sB;
		aPp = bA.qr.tX(.06), aPq = bA.qr.tX(.04), aPl = bA.qr.tX(.06), aPm = ec + aPp, aPn = h.i - aPl - aPq, aPo = aQ6 + ec - aPm - aPq
	}, this.vU = function() {
		aOd.vU(),
			function() {
				var aB, aQ3, gX, fB, fN, g = data.data,
					aQA = 1,
					aQB = .125,
					aQC = aPw ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQ3 = g[aB].aQ3, gX = aQ3.length, aQA = Math.max(gX, aQA), fN = 0; fN < gX; fN++) aQB = Math.max(aQ3[fN], aQB), aQC = Math.min(aQ3[fN], aQC);
				var nP = aPm + aPo,
					ys = aPo / (aQB - aQC),
					yr = 1 / (aQA - 1);
				for (vV.lineWidth = bc.zq, aB = 0; aB < g.length; aB++) {
					for (aQ3 = g[aB].aQ3, gX = aQ3.length, fB = aPl, vV.beginPath(), vV.moveTo(fB + aPn, nP - ys * (aQ3[gX - 1] - aQC)), fN = gX - 2; 0 <= fN; fN--) vV.lineTo(fB + yr * fN * aPn, nP - ys * (aQ3[fN] - aQC));
					vV.strokeStyle = colors[aB], vV.stroke()
				}(function(aQC, aQB, nP, ys) {
					vV.font = bA.qr.si(0, .25 * aPl), bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 2), vV.fillStyle = colors[0];
					for (var fB = .92 * aPl, aB = 0; aB < 3; aB++) {
						var fW = aQC + aB * (aQB - aQC) / 2;
						vV.fillText((fW / 1e3).toFixed(3), fB, nP - ys * (fW - aQC))
					}
				})(aQC, aQB, nP, ys),
				function(aQA) {
					var fD = aPm + aPo + .15 * aPq;
					vV.font = bA.qr.si(0, Math.min(.4 * aPq, .028 * h.i)), bA.qr.textBaseline(vV, 0), bA.qr.textAlign(vV, 2), vV.fillStyle = colors[0], vV.fillText(bA.a3F.a44(aPr), aPl + aPn, fD), bA.qr.textAlign(vV, 0), vV.fillText(bA.a3F.a44(
						new Date(aPs.getTime() - 6e4 * (aQA - 1) * aPx[data.aQ2])), aPl, fD)
				}(aQA),
				function(aQA, aQC, aQB) {
					if (aPv && !(aQA < 2)) {
						for (var a9Q, eB = (aPt - aPl) / aPn * (aQA - 1), aQF = Math.floor(eB), aQG = Math.floor(1 + eB), aQH = eB - aQF, aQI = 1e5, aQJ = -1, aQK = -1, aQL = aQB - (aQB - aQC) * (aPu - aPm) / aPo, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDJ, aQ3 = g[aB].aQ3;
							aQ3.length <= aQG || (aQ3 = aQ3[aQF] + aQH * (aQ3[aQG] - aQ3[aQF]), (aDJ = Math.abs(aQL - aQ3)) < aQI && (aQI = aDJ, aQJ = aB, aQK = aQ3))
						} - 1 !== aQJ && (aQB = aPm + aPo - (aQK - aQC) / (aQB - aQC) * aPo, vV.lineWidth = .5 * bc.zq, vV.strokeStyle = colors[aQJ], vV.beginPath(), vV.moveTo(aPl, aQB), vV.lineTo(aPt, aQB), vV.lineTo(aPt, aPm + aPo), vV
						.stroke(), vV.beginPath(), vV.arc(aPt, aQB, .1 * aPl, 0, 2 * Math.PI), vV.fillStyle = colors[aQJ], vV.fill(), aQC = aPm + aPo + .15 * aPq, bA.qr.textAlign(vV, 1), a9Q = aQA - 2 < eB ? (a9Q = aPs.getTime() - 6e4 * aPx[
								data.aQ2], new Date(a9Q + (eB - (aQA - 2)) * (aPr.getTime() - a9Q))) : new Date(aPs.getTime() - 6e4 * (aQA - eB - 1) * aPx[data.aQ2]), aQA = bA.a3F.a44(a9Q), eB = bA.qr.measureText(aQA), a9Q = bL.iC(aPt, aPl +
								.5 * eB, aPl + aPn - .5 * eB), vV.fillStyle = bA.color.nq(70, 50, 20), vV.fillRect(a9Q - .52 * eB, aPm + aPo, 1.04 * eB, .55 * aPq), vV.fillStyle = colors[0], vV.fillText(aQA, a9Q, aQC), vV.font = bA.qr.si(0,
								.25 * aPl), bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 2), a9Q = .92 * aPl, aQA = (aQK / 1e3).toFixed(3), eB = bA.qr.measureText(aQA), aQC = a9Q - 1.04 * eB, vV.fillStyle = bA.color.nq(70, 50, 20), vV
							.fillRect(aQC, aQB - .1625 * aPl, aPl - aQC, .275 * aPl), vV.fillStyle = colors[aQJ], vV.fillText(aQA, a9Q, aQB))
					}
				}(aQA, aQC, aQB)
			}(), vV.lineWidth = bc.zq, vV.strokeStyle = bB.ny, vV.beginPath(), vV.moveTo(aPl, aPm), vV.lineTo(aPl, aPm + aPo), vV.lineTo(aPl + aPn, aPm + aPo), vV.stroke();
		var aB, fontSize = .5 * aPp,
			g = (vV.font = bA.qr.si(0, fontSize), bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 0), data.data),
			f4 = g.length,
			fD = aPm - .5 * aPp,
			qY = "";
		for (aB = 0; aB < f4; aB++) qY += g[aB].name + "  ";
		qY = qY.trim();
		var aQO = bA.qr.measureText(qY),
			fB = .5 * (h.i - aQO);
		for (aQO > h.i && (fB = 0, vV.font = bA.qr.si(0, h.i / aQO * fontSize)), aB = 0; aB < f4; aB++) vV.fillStyle = colors[aB], vV.fillText(g[aB].name, fB, fD), fB += bA.qr.measureText(g[aB].name + "  ")
	}, this.hH = function(le, lf) {
		aQR(le, lf)
	}, this.a2Q = function(le, lf) {
		aQR(le, lf)
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	};
	var aB, eT, a42, hw, f7 = data.data,
		f4 = f7.length,
		max = 1;
	for (aB = 0; aB < f4; aB++) max = Math.max(max, f7[aB].aQ3.length);
	for (aB = 0; aB < f4; aB++)
		for (; f7[aB].aQ3.length < max;) f7[aB].aQ3.unshift(0);
	eT = new Date, a42 = 6e4 * eT.getTimezoneOffset(), hw = eT.getTime() - a42, aPr = new Date(hw), 6 === data.aQ2 ? function(eT, a42) {
		var aQ5 = eT.getUTCFullYear(),
			eT = eT.getUTCMonth() + 1;
		aPs = eT < 12 ? new Date(Date.UTC(aQ5, eT) - a42) : new Date(Date.UTC(aQ5 + 1, 0) - a42)
	}(eT, a42) : (a42 = 6e4 * aPx[data.aQ2], aPs = data.aQ2 <= 4 ? new Date(hw + a42 - eT.getTime() % a42) : new Date(hw + a42 - (eT.getTime() + 2592e5) % a42)), hw = bA.color, colors = [bB.ny, hw.nq(255, 0, 0), hw.nq(0, 200, 0), hw.nq(80, 80,
		255), hw.nq(255, 255, 0), hw.nq(255, 0, 255), hw.nq(0, 255, 255), hw.nq(255, 140, 0), hw.nq(128, 128, 128), hw.nq(0, 255, 140)], aOd = new vF(L(282) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aQ2] + ", " + bA.a3F.a41(aPr), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(283), function() {
			t.u(14)
		})
	], !1)
}

function aOJ() {
	var aOd, aOe, qm;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aOe.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(284), [new w("⬅️ " + L(37), function() {
		t.aOb(13)
	})]), aOe = new qk(aOd.vL, ((qm = []).push(function() {
		var aOx = new qU,
			aP5 = (aOx.qX(L(285)), aOx.qZ(L(286)), new w(L(287), function() {
				bj.sJ.sK(130, 0), t.y.aQW()
			}, 0, 0, 1)),
			re = new rf(bj.eP.data[126], 0, function() {
				aP5.button.click()
			});
		return aOx.qi(re), re.e.placeholder = "a,b,c", re.e.style.marginTop = "0.5em", aOx.qi(new sM([aP5.button])), aOx
	}()), qm.push(function() {
		var aOx = new qU,
			aP5 = new w(L(287), function() {
				bj.sJ.sK(130, 1), t.y.aQW()
			}, 0, 0, 1),
			aQX = new rf(bj.eP.data[129], 1, function() {
				aQX.e.focus()
			}),
			aQY = new rf(bj.eP.data[128], 1, function() {
				aP5.button.click()
			});
		return aOx.qX(L(288)), aOx.qi(aQY), aQY.e.style.marginBottom = "0.5em", aOx.qX(L(289)), aOx.qi(aQX), aOx.qi(new sM([aP5.button])), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		return aOx.qX(L(290)), bj.eP.data[125].vE = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aOx.qf(new vA(bj.eP.data[125])), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		return aOx.qX(L(291)), aOx.qi(new sG(bj.eP.data[127], L(292))), aOx
	}()), qm))
}

function aOI() {
	var aOd, aQZ, aPn, aQa, aQb, aQc, colors = [0, 0, 0],
		aQd = -1;

	function aQg(aB) {
		var aQh = aQZ.fD + aB * (bc.gap + aQc);
		vV.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vV.fillRect(aQa, aQh, colors[aB] * aQb, aQc), vV.strokeStyle = bB.ny, vV.strokeRect(aQa, aQh, aQb,
			aQc), vV.fillStyle = bB.ny, vV.font = bA.qr.si(0, .32 * aQc), bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 0), vV.fillText(L(0 === aB ? 295 : 1 === aB ? 296 : 297) + aQe(aB), aQa + bc.gap, aQh + .53 * aQc)
	}

	function aQe(aB, aQi) {
		return aQi = aQi || 256, bL.iC(Math.floor(aQi * colors[aB]), 0, aQi - 1)
	}

	function a2u(le, lf) {
		return !(le < aQa || lf < aQZ.fD || le > aQZ.fB + aQZ.i || lf > aQZ.fD + aQZ.j)
	}
	this.show = function() {
		var fW = bj.eP.data[121].value;
		colors[0] = (fW >> 12) / 63, colors[1] = (fW >> 6 & 63) / 63, colors[2] = (63 & fW) / 63, aOd.show(), this.resize()
	}, this.s8 = function() {
		bj.sJ.sK(121, (aQe(0, 64) << 12) + (aQe(1, 64) << 6) + aQe(2, 64)), aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aQZ.resize();
		var ec = h.k,
			vT = aOd.vQ(),
			aQf = (aQZ.fD = Math.max(aQZ.fD, ec * vT.sB + bc.gap), ec * vT.vS - 2 * bc.gap);
		aQZ.j = Math.min(aQZ.j, aQf), aQZ.i = 2 * aQZ.j, aQZ.fD = ec * vT.sB + .5 * (ec * vT.vS - aQZ.j), aQZ.fB = .5 * (h.i - aQZ.i), aPn = .25 * aQZ.i, aQa = aQZ.fB + aPn + bc.gap, aQb = aQZ.i - aPn - bc.gap, aQc = (aQZ.j - 2 * bc.gap) / 3
	}, this.vU = function() {
		var eA, tW, fO;
		aOd.vU(), vV.lineWidth = bc.zq, eA = aQe(0), tW = aQe(1), fO = aQe(2), vV.fillStyle = "rgb(" + eA + "," + tW + "," + fO + ")", vV.fillRect(aQZ.fB, aQZ.fD, aPn, aQZ.j), vV.strokeStyle = bB.ny, vV.strokeRect(aQZ.fB, aQZ.fD, aPn, aQZ.j), vV
			.fillStyle = eA + tW + fO < 306 && tW < 150 ? bB.ny : bB.np, bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 1), vV.font = bA.qr.si(0, .1 * aQZ.j), vV.rotate(-Math.PI / 2), vV.fillText(L(294), -aQZ.fD - .5 * aQZ.j, aQZ.fB + .5 * aPn),
			vV.setTransform(1, 0, 0, 1, 0, 0), aQg(0), aQg(1), aQg(2)
	}, this.hH = function(le, lf) {
		a2u(le, lf) && (aQd = bL.iC(Math.floor((lf - aQZ.fD) / (aQc + .75 * bc.gap)), 0, 2), colors[aQd] = bL.iC((le - aQa) / aQb, 0, 1), bf.dk = !0)
	}, this.a2Q = function(le) {
		-1 !== aQd && (colors[aQd] = bL.iC((le - aQa) / aQb, 0, 1), bf.dk = !0)
	}, this.a2T = function(le, lf, deltaY) {
		a2u(le, lf) && (le = bL.iC(Math.floor((lf - aQZ.fD) / (aQc + .75 * bc.gap)), 0, 2), colors[le] = bL.iC(colors[le] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dk = !0)
	}, this.a2o = function() {
		0 <= aQd && (aQd = -1, bf.dk = !0)
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(293), [new w("⬅️ " + L(37), function() {
		t.y.aDE()
	})], !1), aQZ = new rS([.5, .25], [.5, .5], 1)
}

function aOQ() {
	var aPZ, aPa, aPb, rQ;

	function aPc() {
		aPe(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aOc()[19] = null, t.a26()
	}

	function aQj() {
		aPe(), t.u(21)
	}

	function aPe() {
		1 === aD.data.gameMode ? aD.a5O.a5T() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qz.a3a(aPb.vl(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, rQ = [new w("⬅️ " + L(37), aPc)], 1 === aD.data.gameMode && rQ.push(new w(L(298), aQj, 1, 1)), aPZ = new vF(L(299), rQ), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), 0 === aD.data.gameMode && (aOx.qf(new vA({
			vE: [L(300), L(278)],
			value: aD.data.colorsType
		}, function(eB) {
			aPe(), aD.data.colorsType = eB, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.f1 || (aD.data.colorsData = new Uint32Array(aD.f1)), t.u(21)
		})), aOx.qi(new sW));
		aOx.qi(new sG({
			value: aD.data.selectableColor
		}, L(301), function(value) {
			aD.data.selectableColor = value
		})), qm.push(aOx)
	}(rQ = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qm) {
		var aOx = new qU;
		aOx.qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.colorsData, 1)), aOx.qi(aPb), qm.push(aOx)
	}(rQ) : (aD.a5O.a5T(), rQ.push(function() {
		var aOx = new qU;
		aOx.qX(L(281));
		for (var aB = 0; aB < bg.a1E.length; aB++) {
			var hw = (aB + 1) % bg.a1E.length,
				e = aOx.qd((0 == hw ? "" : "Team ") + bg.a1E[hw]);
			aB && (e.style.marginTop = "0.5em"), aOx.qi(new rf({
				eB: -1,
				value: aD.data.teamPlayerCount[hw]
			}, 1, 0, function(e) {
				aPZ.vM[1].rB(0);
				var playerCount = bL.iC(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQl] = playerCount
			})).e.aQl = hw
		}
		return aOx
	}())), rQ))
}

function t9(id, a4k, aQm) {
	var aOd, aQn;

	function aQs() {
		aQn.qn.innerHTML += "<br>" + L(304)
	}

	function aR2() {
		var fO = 1;
		t.u(4, 1, new v(L(305), L(306), !1, [new w("🔄 Reload", function() {
			fO && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fO = 0
		}, bB.oL)]))
	}

	function aQr() {
		bD.a7(90), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bH.dd(bD.aC), bj.sJ.sK(110, bF.tB.tC(bF.tB.tD(15))), b0.aG6.aR4()
	}
	this.aQo = !0, this.aQp = id, this.show = function() {
		aOd.show(), this.resize(), 15 === id ? (b0.y.aQq(id) ? aQr : aQs)() : 16 === id ? b0.y.aQq(id) ? b0.eZ.ea(2) : aQs() : 17 === id ? b0.y.aQq(id) ? b0.eZ.ea(3) : aQs() : 18 === id ? (b0.y.close(0, 3253), b0.y.aH2(0, id, 0), aQs()) : 21 ===
			id ? b0.y.aQq(id) ? b0.aQt.aQu(a4k.tR, a4k.tS, a4k.tT) : aQs() : 22 === id ? b0.y.aQq(id) ? b0.aQt.aQv(a4k.tR, a4k.aQw, a4k.aQx) : aQs() : 23 === id ? b0.y.aQq(id) ? b0.aQt.aQy(a4k.aQ2, a4k.a1b) : aQs() : 24 === id ? b0.y.aQq(id) ? b0
			.aQt.aQz(a4k.aQ2, a4k.tS, a4k.tT) : aQs() : 25 === id ? b0.y.aQq(id) ? b0.aG6.aPL(a4k) : aQs() : 28 === id ? b0.y.aQq(id) ? b0.aQt.aR0(a4k.tR, a4k.aQw, a4k.aQx) : aQs() : 29 === id ? b0.y.aQq(id) ? b0.aG6.aR1(a4k) : aQs() : 30 ===
			id && (b0.y.aQq(id) ? b7.aD9() || aR2() : aQs())
	}, this.aR3 = function() {
		15 === id ? aQr() : 16 === id ? b0.eZ.ea(2) : 17 === id ? b0.eZ.ea(3) : 18 === id ? t.u(8, this.aO9, new t9(16)) : 21 === id ? b0.aQt.aQu(a4k.tR, a4k.tS, a4k.tT) : 22 === id ? b0.aQt.aQv(a4k.tR, a4k.aQw, a4k.aQx) : 23 === id ? b0.aQt.aQy(
			a4k.aQ2, a4k.a1b) : 24 === id ? b0.aQt.aQz(a4k.aQ2, a4k.tS, a4k.tT) : 25 === id ? b0.aG6.aPL(a4k) : 28 === id ? b0.aQt.aR0(a4k.tR, a4k.aQw, a4k.aQx) : 29 === id ? b0.aG6.aR1(a4k) : 30 === id ? b7.aD9() || aR2() : 1e3 === id && (
			this.aQp = id = 25, b0.aG6.aPL(a4k))
	}, this.aDD = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aO9) : 17 === code ? (b0.y.close(0, 3252), bj.y.wV(0), bj.eP.data[117].vE && 0 < bj.eP.data[117].vE.length ? (bu = bj.y.wW(0), bj.sJ.sK(105, bu.t6), bj.sJ.sK(106, bu
			.password), t.u(8, this.aO9, new t9(16))) : (bj.sJ.sK(105, ""), t.y.aDE())) : 21 === code ? t.u(10, this.aO9, new aBh(data)) : 23 === code ? t.u(13, this.aO9, new aPk({
			data: data,
			aQ2: a4k.aQ2
		})) : 25 === code ? (t.y.aOK.t6 = a4k.t6, bj.vt.ml(a4k.t6), t.u(15, this.aO9)) : 30 === code && (data ? t.u(1) : aR2()))
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aQn.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(302), [new w("⬅️ " + L(37), function() {
		aQm ? t.u(29) : t.y.aDE()
	})]), aQn = new sL(aOd.vL, L(303))
}

function aOO() {
	var aPZ, aPa, qm;

	function aR7() {
		var gX;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5O.a5T()), gX = bA.qz.a3U(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gX) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aPc() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aR9(), aD.data.canvas = null, t.u(5, 5)
	}

	function aR9() {
		b9.qB.dd(), bj.sJ.sK(156, b9.a5e.a0K())
	}

	function aR5() {
		aD.data.isReplay = 0, aR9(), aD.a5O.a5q(), aa.aHD(), aD.a5O.a5n(), aD.data.canvas = 2 === aD.data.mapType ? bS.xT : null, aD.a5S(), aD.a5Q = 1
	}

	function aRL() {
		aR7();
		for (var g = [aRC(), aRD(), aRE()], aB = 3; aB < 6; aB++) t.removeChild(aPa.qn, aPa.qo[aB].qW), aPa.qo[aB] = g[aB - 3], aPa.qn.appendChild(aPa.qo[aB].qW);
		aPa.resize()
	}

	function aRC() {
		var aRM, aOx = new qU;
		return aOx.qX(L(299)), aRM = 0 === aD.data.gameMode ? [L(300), L(278)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aOx.qd(aRM), aOx.qi(new sM([new w(L(310), function() {
			t.u(21)
		}).button])), aOx
	}

	function aRD() {
		var aOx = new qU,
			g = (aOx.qX(L(62)), [L(277) + ": " + aE.ka[aD.data.botDifficultyValue], L(279), L(280), L(278)]);
		return aOx.qd(g[aD.data.botDifficultyType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(25)
		}).button])), aOx
	}

	function aRE() {
		var aOx = new qU,
			g = (aOx.qX("Spawning"), [L(300), L(312), L(278)]);
		return aOx.qd(g[aD.data.spawningType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(24)
		}).button])), aOx
	}
	this.show = function() {
		aPZ.show(), this.resize(), aPZ.vL.scrollTop = t.y.aJS[0]
	}, this.s8 = function() {
		t.y.aJS[0] = aPZ.vL.scrollTop, aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF("🔧 " + L(307), [new w("⬅️ " + L(37), aPc), new w(L(308), aR5)]), aR7(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xT : 1 === aD.data.mapType ? aD.data.canvas = bS.aM4(bS.a5o(aD.data), 0).xT : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aM4(bS.a5o(aD.data), aD.data.mapSeed).xT)), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU,
			a3k = (aOx.qX(L(309)), aD.data.canvas);
		a3k.style.width = "100%", aOx.qi({
			e: a3k
		}), aOx.qi(new sM([new w(L(310), function() {
			t.u(20)
		}).button])), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx = new qU;
		aOx.qX(L(281)), aOx.qi(new rf({
			eB: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.iC(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qz.a3U(aD.data.teamPlayerCount, 0), aD.a5O.a5T(), bA.qz.a3U(aD.data.teamPlayerCount, 0) !== e) && aRL()
		})), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU;
		aOx.qX(L(311)), aOx.qf(new vA({
			vE: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eB) {
			aD.data.gameMode !== eB && (aD.data.gameMode = eB, aRL())
		})), qm.push(aOx)
	}(qm), qm.push(aRC()), qm.push(aRD()), qm.push(aRE()), function(qm) {
		var aOx = new qU,
			g = (aOx.qX(L(313)), [L(314), L(315), L(278)]);
		aOx.qd(g[aD.data.playerNamesType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(23)
		}).button])), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU,
			g = (aOx.qX(L(274)), [L(276), L(277) + ": " + aD.data.aIncomeValue, L(278)]);
		aOx.qd(g[aD.data.aIncomeType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(22)
		}).button])), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU,
			g = (aOx.qX(L(316)), [L(276), L(277) + ": " + aD.data.tIncomeValue, L(278)]);
		aOx.qd(g[aD.data.tIncomeType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(26)
		}).button])), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU,
			g = (aOx.qX(L(317)), [L(276), L(277) + ": " + aD.data.iIncomeValue, L(278)]);
		aOx.qd(g[aD.data.iIncomeType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(27)
		}).button])), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU,
			g = (aOx.qX(L(318)), [L(276), L(277) + ": " + aD.data.sResourcesValue, L(278)]);
		aOx.qd(g[aD.data.sResourcesType]), aOx.qi(new sM([new w(L(310), function() {
			t.u(28)
		}).button])), qm.push(aOx)
	}(qm), function(qm) {
		var aOx = new qU;
		aOx.qX(L(319)), aOx.qi(new sM([new w(L(320), function() {
			t.x(), aD.a5O.a5r(), t.y.aJS[0] = 0, t.u(19)
		}).button])), aOx.qi(new sM([new w(L(321), function() {
			bm.aJH()
		}).button])), aOx.qi(new sM([new w(L(322), function() {
			return bm.aJJ(), !0
		}).button])), qm.push(aOx)
	}(qm), qm))
}

function aOZ() {
	var aPZ, rk = !0;

	function s1(s0, a5v) {
		var qW = document.createElement("div"),
			aRO = document.createElement("span"),
			aRP = document.createElement("span");
		aRO.textContent = aW.aC3(a5v.eS) + ":", aRO.style.color = bB.oD, aRO.style.paddingRight = "0.4em", aRO.style.display = "table-cell", aRO.style.width = "6ch", aRO.style.textAlign = "end", qW.appendChild(aRO), aRP.textContent = a5v.qY, qW
			.appendChild(aRP), qW.style.display = "table", a5v.pa && function(qW, pa) {
				{
					var aJ3;
					pa >= 1024 - aj.s7.zd ? ((aJ3 = document.createElement("img")).src = aj.xW.zR[pa - 1024 + aj.s7.zd].toDataURL(), aJ3.style.width = "1.5em", aJ3.style.height = "1.5em", aJ3.style.verticalAlign = "middle", qW.appendChild(aJ3)) : ((
						aJ3 = document.createElement("span")).textContent = aj.s7.zs(pa), aJ3.style.display = "inline-block", aJ3.style.fontSize = "1.5em", aJ3.style.lineHeight = "1em", aJ3.style.verticalAlign = "middle", qW.appendChild(aJ3))
				}
			}(qW, a5v.pa), s0.appendChild(qW)
	}

	function s4() {
		rk && (aPZ.vL.scrollTop = aPZ.vL.scrollHeight)
	}
	this.clear = function() {
		aPZ.vL.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6o = bq.a5z(), f4 = a6o.length, s0 = document.createDocumentFragment(), aB = 0; aB < f4; aB++) s1(s0, a6o[aB]);
		aPZ.vL.appendChild(s0), s4(), aPZ.show(), this.resize(), rk = !0, s4()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPZ.vL.style.padding = "0.4em " + bA.qr.r0(bc.qx)
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, this.a1G = function(a5v) {
		var s0 = document.createDocumentFragment();
		s1(s0, a5v), aPZ.vL.appendChild(s0), s4()
	}, (aPZ = new vF(L(323), [new w("⬅️ " + L(37), function() {
		t.aOb(1)
	})])).vL.style.overflowY = "auto", aPZ.vL.addEventListener("scroll", function() {
		rk = aPZ.vL.scrollTop >= aPZ.vL.scrollHeight - aPZ.vL.clientHeight - 2
	})
}

function aOW() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.iIncomeType && bA.qz.a3a(aPb.vl(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(317), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(276), L(277), L(278)],
			value: aD.data.iIncomeType
		}, function(eB) {
			aPe(), 2 !== eB || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.f1), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eB, t.u(27)
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx;
		1 === aD.data.iIncomeType && ((aOx = new qU).qX("Value"), aOx.qi(new rf({
			eB: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iC(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qm.push(aOx))
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.iIncomeType && ((aOx = new qU).qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.iIncomeData, 4)), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aOE() {
	var aRR, aRS, aQZ, re, aRT, sd = 0;
	this.aHl = new tH, aQZ = new rS([.45, .27], [.5, .5], 2 / 3), aRS = [new w("⚔️<br>" + L(324), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aRU(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bB.oR), new w("🗡️<br>" + L(307), function() {
			aRU(1)
		}, bB.ok), new w("🔑<br>" + L(325), function() {
			aRU(2)
		}, bB.p2), new w("☰<br>" + L(326), function() {
			aRU(3)
		}, bB.oB), new w("", function() {
			t.u(12)
		}, bB.nu, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], re = new rf(bj.eP.data[122]);
	for (var aB = 0; aB < aRS.length; aB++) aRS[aB].button.style.position = "absolute";

	function aRU(eB) {
		a0.a1.setState(10), ab.ta() || ab.aHc(), 0 === eB ? t.y.a5h() : 1 === eB ? (b9.aJc.xE(bj.eP.data[156].value, 1) || aD.a5O.a5r(), t.u(19)) : 2 === eB ? 0 !== a0.id || bj.eP.data[140].value ? t.u(8, t.t8, new t9(16)) : t.y.aRV(t.t8, 16) : 3 ===
			eB && t.u(1)
	}
	re.e.style.position = "absolute", re.e.style.textAlign = "center", re.e.placeholder = L(327), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHl.show(), aRS[4].rB(bA.color.a3r(bj.eP.data[121].value)), this.resize(), document.body.appendChild(re.e);
		for (var aB = 0; aB < aRS.length; aB++) document.body.appendChild(aRS[aB].button);
		1 !== a0.id || a0.dw < 5 || (aRT && bf.eS > aRT + 144e5 ? a0.wE.setState(14) : aRT = bf.eS)
	}, this.s8 = function() {
		this.aHl.s8(), t.removeChild(document.body, re.e);
		for (var aB = 0; aB < aRS.length; aB++) t.removeChild(document.body, aRS[aB].button)
	}, this.resize = function() {
		this.aHl.resize(), this.aHl.resize(), aQZ.resize();
		var gap = .5 * bc.gap,
			u6 = 10 / 99 * .84 * aQZ.i,
			aRY = .16 * aQZ.j,
			a9y = .19 * aQZ.i,
			fB = aQZ.fB + a9y,
			u6 = aQZ.fD + u6 + 3 * gap,
			i = .5 * (aQZ.i - gap) - a9y,
			a9y = aQZ.i - 2 * a9y - aRY - gap,
			a9y = (bA.qr.tY(re.e, fB, u6, a9y, aRY), bA.qr.tY(aRS[4].button, fB + a9y + gap, u6, aRY, aRY), sd = u6, .5 * (aQZ.fD + aQZ.j - (u6 += aRY + gap) - gap));
		bA.qr.tY(aRS[0].button, fB, u6, i, a9y), bA.qr.tY(aRS[1].button, fB + i + gap, u6, i, a9y), bA.qr.tY(aRS[2].button, fB, u6 + a9y + gap, i, a9y), bA.qr.tY(aRS[3].button, fB + i + gap, u6 + a9y + gap, i, a9y);
		bA.qr.tY(aRS[5].button, fB, u6 + a9y * 2 + gap * 2, i * 2 + gap, a9y / 3);
		bA.qr.tY(aRS[6].button, fB, u6 + a9y * 2.33 + gap * 3, i * 2 + gap, a9y / 3);
		for (var aB = 0; aB < aRS.length; aB++) aRS[aB].button.style.font = bA.qr.si(0, bA.qr.uu(.065 * aQZ.j)), bA.qr.r1(aRS[aB].button, 5);
		re.e.style.font = bA.qr.si(0, bA.qr.uu(.08 * aQZ.j)), bA.qr.r1(re.e, 5)
	}, this.vU = function() {
		if (aa.aHH(), aT.vU(), f4 = Math.floor((a0.a1.iD() ? .018 : .0137) * h.iE), vV.font = bA.qr.si(0, Math.max(5, f4)), bA.qr.textBaseline(vV, 0), bA.qr.textAlign(vV, 2), vV.fillStyle = bB.ny, vV.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vV.measureText(text).width, f4 = Math.max(5, f4), vV.textAlign = "left", vV.textBaseline = "middle", vV.fillText(text, vV.canvas.width - textLength - f4 / 2, 2 * f4), aO.vU(sd), bY.vU(), ab.ta()) {
			vV.imageSmoothingEnabled = !1;
			var text = ab.aHK("territorial.io"),
				textLength = .84 * aQZ.i / text.width;
			vV.setTransform(textLength, 0, 0, textLength, aQZ.fB + .08 * aQZ.i, aQZ.fD), aRR = aRR || bA.a3B.a4i(text, bA.a3B.a4o, [0, 0, 0]);
			for (var fB = -1; fB <= 1; fB += 2)
				for (var fD = -1; fD <= 1; fD += 2) vV.drawImage(aRR, fB, fD);
			vV.drawImage(text, 0, 0), vV.imageSmoothingEnabled = !0;
			var f4 = ab.aHK("logo"),
				aRb = .6666 * textLength * text.height / f4.height,
				nb = .5 * h.i,
				nc = aQZ.fD + .5 * textLength * text.height - .5 * aRb * f4.height;
			vV.setTransform(aRb, 0, 0, aRb, nb - .6 * textLength * text.width, nc), vV.drawImage(f4, 0, 0), vV.setTransform(aRb, 0, 0, aRb, nb + .6 * textLength * text.width - aRb * f4.width, nc), vV.drawImage(f4, 0, 0), vV.setTransform(1, 0, 0,
				1, 0, 0), vV.imageSmoothingEnabled = !0
		}
	}
}

function aOL() {
	var aOd, aRc, aRd, vG;

	function aRe(aB) {
		t.u(8, t.t8, new t9(21, {
			tR: aB,
			tS: 0,
			tT: 10
		}))
	}
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aRc.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aRd = [new w(L(328), function() {
		aRe(1)
	}, 0, 0, 1), new w(L(329), function() {
		aRe(2)
	}, 0, 0, 1), new w(L(330), function() {
		aRe(3)
	}, 0, 0, 1), new w(L(331), function() {
		aRe(0)
	}, 0, 0, 1), new w(L(332), function() {
		aRe(9)
	}, 0, 0, 1), new w(L(333), function() {
		aRe(10)
	}, 0, 0, 1), new w(L(334), function() {
		aRe(11)
	}, 0, 0, 1)], vG = [new w("⬅️ " + L(37), function() {
		t.a26()
	})], aOd = new vF(L(335), vG), aRc = new rP(aRd, aOd.vL)
}

function aDb(title, qe, aRf) {
	var aOd, aQn;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aQn.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aRf = aRf || [new w("⬅️ " + L(37), function() {
		t.a26()
	}, bB.od)], aOd = new vF(title, aRf), aQn = new sL(aOd.vL, qe), bA.qr.textAlign(aOd.vL.style, 1)
}

function aBh(data) {
	var aOd, aRg;

	function aRi(je) {
		var f4 = data.data.length;
		if (f4) {
			for (var tS, max = min = parseInt(data.data[0][0]), aB = 1; aB < f4; aB++) var aFb = parseInt(data.data[aB][0]),
				min = Math.min(aFb, min),
				max = Math.max(aFb, max);
			tS = je < 0 ? min + je : max + 1, t.u(8, t.a5x().aO9, new t9(21, {
				tR: data.tR,
				tS: tS,
				tT: tS + Math.abs(je)
			}))
		}
	}
	if (this.show = function() {
			aOd.show(), this.resize()
		}, this.s8 = function() {
			aOd.s8()
		}, this.resize = function() {
			aOd.resize(), aRg.resize()
		}, this.a2y = function(ec) {
			2 === ec && aOd.vM[0].r8()
		}, data.aBi) {
		aOd = new vF(L(111), [new w("⬅️ " + L(37), function() {
			t.a26()
		})]);
		var f7 = {
				ss: [],
				sy: [L(348), L(349), L(350) + " ↗"],
				t3: [12, 50, 38]
			},
			a5l = aD.data.a5l;
		if (a5l)
			for (var f4 = a5l.length, ss = f7.ss, a1V = ag.a1V, aB = 0; aB < f4; aB++) ss.push([{
				fW: aB + 1 + ".",
				eT: 0
			}, {
				fW: a1V[aB],
				eT: 0
			}, {
				fW: bF.tB.a09(a5l[aB], 5),
				eT: 1,
				t6: a5l[aB],
				t7: 0
			}]);
		aRg = new sr(aOd.vL, f7)
	} else {
		var f7 = data.data.length ? 0 : 1,
			aRf = [new w("⬅️ " + L(37), function() {
				t.a26()
			}), new w(L(336), function() {
				aRi(-10)
			}, f7, 0, 1), new w(L(337), function() {
				aRi(10)
			}, f7, 0, 1), new w(L(283), function() {
				t.u(11, 10, new aRj({
					tR: data.tR
				}))
			})],
			sy = [L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346), L(347), L(333), L(334), "Audit Log"];
		aOd = new vF(sy[data.tR], aRf), ! function() {
			var aB, f7 = {
					ss: []
				},
				ss = f7.ss,
				aRl = data.data,
				f4 = aRl.length;
			f4 && 0 === aRl[0][0] && 0 <= (eB = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tR]) && (t.y.tU[eB] = aRl[0][1]);
			var na = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tR],
				a4u = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tR],
				eB = [
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
			if (f7.sy = eB[data.tR], f7.t3 = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 13, 25, 25, 25]
				][data.tR], 0 === data.tR || 2 === data.tR || 3 === data.tR || 9 === data.tR || 10 === data.tR || 11 === data.tR)
				for (aB = 0; aB < f4; aB++) ss.push([{
					fW: aRl[aB][0] + 1 + ".",
					eT: 0
				}, {
					fW: aRl[aB][1],
					eT: 1,
					t6: aRl[aB][4],
					t7: aRl[aB][3]
				}, {
					fW: (na * aRl[aB][2]).toFixed(a4u),
					eT: 0
				}]);
			else if (12 === data.tR)
				for (aB = 0; aB < f4; aB++) {
					var aRo = aRl[aB][3];
					ss.push([{
						fW: "" + aRl[aB][0],
						eT: 0
					}, {
						fW: "" + aRl[aB][4],
						eT: 0
					}, {
						fW: aRl[aB][5],
						eT: 1,
						t6: aRl[aB][1],
						t7: 0
					}, {
						fW: aRl[aB][6],
						eT: 1,
						t6: aRl[aB][2],
						t7: 0
					}, {
						fW: bo.eH(aRo),
						eT: 0
					}])
				} else if (1 === data.tR)
					for (aB = 0; aB < f4; aB++) ss.push([{
						fW: aRl[aB][0] + 1 + ".",
						eT: 0
					}, {
						fW: aRl[aB][1],
						eT: 0
					}, {
						fW: (na * aRl[aB][2]).toFixed(a4u),
						eT: 0
					}, {
						fW: aRl[aB][3],
						eT: 1,
						t6: aRl[aB][5],
						t7: aRl[aB][4]
					}]);
				else if (4 === data.tR || 5 === data.tR || 6 === data.tR || 7 === data.tR || 8 === data.tR)
				for (aB = 0; aB < f4; aB++) {
					var aRp = aRl[aB][5];
					4 === data.tR || 8 === data.tR ? "100%" === (aRp = (aRp % 64 * 100 / (aRp >> 6)).toFixed(0) + "%") && (4 === data.tR ? aRp += " (" + L(369) + ")" : aRp += " (" + L(370) + ")") : 5 === data.tR ? 32768 <= aRp && (aRp = -(aRp -
						32768)) : aRp = (na * aRp).toFixed(a4u), ss.push([{
						fW: "" + aRl[aB][0],
						eT: 0
					}, {
						fW: "" + aRl[aB][6],
						eT: 0
					}, {
						fW: aRl[aB][7],
						eT: 1,
						t6: aRl[aB][1],
						t7: aRl[aB][2]
					}, {
						fW: aRl[aB][8],
						eT: 1,
						t6: aRl[aB][3],
						t7: aRl[aB][4]
					}, {
						fW: "" + aRp,
						eT: 0
					}])
				}
			aRg = new sr(aOd.vL, f7)
		}()
	}
}

function aRj(a4k) {
	var aOd, aOe, qm;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aOe.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(371), [new w("⬅️ " + L(37), function() {
		t.aOb(10)
	})]), aOe = new qk(aOd.vL, ((qm = []).push(function() {
		var aP5, aOx = new qU,
			aQX = new rf(bj.eP.data[132], 1, function() {
				aP5.button.click()
			}),
			aQY = new rf(bj.eP.data[131], 1, function() {
				aQX.e.focus()
			});
		aOx.qX(L(288)), aOx.qi(aQY), aQY.e.style.marginBottom = "0.8em", aOx.qX(L(289)), aOx.qi(aQX);
		return aP5 = new w(L(287), function() {
			tS = Math.floor(aQY.e.value), tT = Math.floor(aQX.e.value);
			var tT, tS = {
				a3S: Math.min(tS, tT),
				aNk: Math.max(tS, tT)
			};
			t.u(8, t.a5y(10).aO9, new t9(21, {
				tR: a4k.tR,
				tS: tS.a3S,
				tT: tS.aNk
			}))
		}, 0, 0, 1), aOx.qi(new sM([aP5.button])), aOx
	}()), qm.push(function() {
		var aP5, aOx = new qU,
			aQX = new rf(bj.eP.data[134], 1, function() {
				aP5.button.click()
			}),
			aQY = new rf(bj.eP.data[133], 0, function() {
				aQX.e.focus()
			});
		return aOx.qX(1 === a4k.tR ? L(372) : L(373)), aOx.qi(aQY), aQY.e.style.marginBottom = "0.8em", aOx.qX(L(374)), aOx.qi(aQX), aP5 = new w(L(287), function() {
			var aQw = aQY.e.value.slice(0, 20),
				aQx = Math.abs(Math.floor(aQX.e.value));
			t.u(8, t.a5y(10).aO9, new t9(22, {
				tR: a4k.tR,
				aQw: aQw,
				aQx: aQx
			}))
		}, 0, 0, 1), aOx.qi(new sM([aP5.button])), aOx
	}()), qm.push(function() {
		var aP5, aOx = new qU,
			aQX = new rf(bj.eP.data[152], 1, function() {
				aP5.button.click()
			}),
			aQY = new rf(bj.eP.data[151], 0, function() {
				aQX.e.focus()
			});
		return aOx.qX(L(375)), aOx.qi(aQY), aQY.e.style.marginBottom = "0.8em", aOx.qX(L(374)), aOx.qi(aQX), aP5 = new w(L(287), function() {
			var aQw = aQY.e.value.slice(0, 5),
				aQx = Math.abs(Math.floor(aQX.e.value));
			t.u(8, t.a5y(10).aO9, new t9(28, {
				tR: a4k.tR,
				aQw: aQw,
				aQx: aQx
			}))
		}, 0, 0, 1), aOx.qi(new sM([aP5.button])), aOx
	}()), qm))
}

function aOY() {
	var aRt, te, aRw, td, tg, aRu = [new Array(4), [], new Array(2), new Array(2)],
		aRv = new Array(4),
		aRx = new Array(2),
		aRy = [L(61), L(332), L(376), L(377)];

	function aFN() {
		var aEg;
		!bn.a24 || (aEg = aRt.ts.re.e.value.trim().slice(0, 127)).length < 1 || (aRt.ts.re.e.value = "", bn.aDe.a0w(aEg))
	}

	function aS1(aS3) {
		bn.y.rv[3] = 1 - bn.y.rv[3], aS2(3, 1, bn.y.rv[3]), aS3 && b0.aFY.aFZ(4), bn.y.rv[3] && bj.sJ.sK(158, bn.y.rv[0])
	}

	function aRz(fN, fO) {
		bn.y.rv[fN] !== fO && (0 === fN && bn.y.rv[3] && aS1(0), aS2(fN, bn.y.rv[fN], 0), aS2(fN, fO, 1), bn.y.rv[fN] = fO, 0 === fN ? (b0.aFY.aFZ(2, fO), bn.y.rv[2] ? (aRt.tt.ml(), aRt.ts.rs(1)) : aRt.ts.rs(0), t.a5x().aFC(), t.a5x().aFB()) : 2 ===
			fN && (0 === fO ? (b0.aFY.aFZ(0), aRt.ts.ml(), aRt.u1()) : (b0.aFY.aFZ(1), aRt.tt.ml(), aRt.u2())))
	}

	function aS2(fN, fO, color) {
		aRt.tv[fN].rQ[fO].rB(color ? bB.oN : bB.pC)
	}

	function aS6(aEQ) {
		return aEQ < 7 ? aEQ + 2 + " " + L(383) : 7 === aEQ || 10 === aEQ ? L(332) + " (Full-Sending: " + L(7 === aEQ ? 384 : 385) + ")" : 8 === aEQ ? "1v1" : L(386)
	}

	function aS7(fW) {
		var a7r = bL.fV(fW, 60),
			fW = fW % 60;
		return (a7r < 10 ? "0" : "") + a7r + ":" + (fW < 10 ? "0" : "") + fW
	}
	this.aFj = function() {
		return aRt.ts
	}, this.aDe = function(t6) {
		aRz(2, 0);
		var qY = aRt.ts.re.e.value,
			t6 = "@" + t6 + " ";
		qY.length && !bA.rq.a4E(qY, " ") && (t6 = " " + t6), aRt.ts.re.e.value = qY += t6, aRt.ts.re.e.focus()
	}, this.aFA = function() {
		aRt.tt.ml()
	}, this.aFC = function() {
		var aS5 = bn.y.rv[0],
			aS5 = bn.y.rx[aS5];
		bS.a7(aS5.ek, aS5.mapSeed), te.rQ[0].button.textContent = L(309) + ": " + bS.xJ.xK[aS5.ek].name, te.rQ[1].button.textContent = L(311, 0, "Mode") + ": " + aS6(aS5.aEQ), te.rQ[2].button.textContent = L(380) + ": " + bS.xJ.xK[aS5.aGA].name,
			te.rQ[3].button.textContent = L(381, 0, "Next Mode") + ": " + aS6(aS5.aGB), te.rQ[4].button.textContent = L(382) + ": " + aS7(aS5.aFE), te.resize()
	}, this.aFB = function() {
		var aS5 = bn.y.rv[0],
			rw = bn.y.rx[aS5];
		aRt.tz(rw.u0);
		for (var aB = 0; aB < bn.uH.uI.length; aB++) aRu[0][aB].rp.textContent = "" + bn.uH.uI[aB].length;
		var uH = bn.uH.uI[aS5],
			aS8 = uH.length,
			aS9 = bn.uH.uJ[aS5];
		aRu[2][1].rp.textContent = "" + aS8, aRu[3][1].rp.textContent = "" + aS9, te.rQ[4].button.textContent = L(382) + ": " + aS7(rw.aFE);
		for (aB = 0; aB < 4; aB++) {
			var aSA = bn.y.rx[aB];
			aRv[aB] ? 0 === aSA.u0 && (aRv[aB].rp.textContent = bS.xJ.xK[aSA.ek].name) : aRv[aB] = new ro(bS.xJ.xK[aSA.ek].name, td.rQ[aB].button, 1, 1), bA.rq.startsWith(aRy[aB], "🏆 ") ? aSA.aEW || (aRy[aB] = aRy[aB].substring(3), td.rQ[aB]
				.button.textContent = aRy[aB], td.rQ[aB].button.appendChild(aRu[0][aB].rp), td.rQ[aB].button.appendChild(aRv[aB].rp)) : aSA.aEW && (aRy[aB] = "🏆 " + aRy[aB], td.rQ[aB].button.textContent = aRy[aB], td.rQ[aB].button
				.appendChild(aRu[0][aB].rp), td.rQ[aB].button.appendChild(aRv[aB].rp))
		}
		var rw = "",
			aSC = "";
		0 === aS5 && (rw = bn.lE.aEl(uH, 0, aS8), aSC = bn.lE.aEl(uH, 0, aS9)), aRw[0].rp.textContent = rw, aRw[1].rp.textContent = aSC, aRx[1].rp.textContent = "MP: " + bn.y.aF4[0] + "   SP: " + bn.y.aF4[1] + "   Lobby: " + bA.qz.a3f(bn.uH.uI)
	}, this.aFG = function() {
		aRt.ts.ml()
	}, this.show = function() {
		aRt.show(), this.resize(), bn.message.show()
	}, this.s8 = function() {
		aRt.s8(), bn.ue.s8(), bn.uE.s8(), bn.message.s8()
	}, this.resize = function() {
		aRt.resize(1 - bn.y.rv[2]), bn.message.resize()
	}, this.a2y = function(ec) {
		2 === ec ? bn.y.rv[3] ? aS1(1) : aRt.tv[3].rQ[0].r8() : ec < 2 && aS1(1)
	}, td = new sP([new w(aRy[0], function() {
		return aRz(0, 0), 2
	}), new w(aRy[1], function() {
		return aRz(0, 1), 2
	}), new w(aRy[2], function() {
		return aRz(0, 2), 2
	}), new w(aRy[3], function() {
		return aRz(0, 3), 2
	})], bB.pC), te = new sP([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.pD, 1);
	var aS0 = new sP([new w(L(378), function() {
		return aRz(2, 0), 2
	}), new w(L(111), function() {
		return aRz(2, 1), 2
	})], bB.pC);
	tg = new sP([new w(L(25, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.uY(), b0.y.a2G(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.uY(), b0.y.a2G(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(379), function() {
		return aS1(1), 2
	})], bB.pC), aRt = new tc(td, te, aS0, tg, aFN, bn.ue.aFt);
	for (var aB = 0; aB < 4; aB++) aRu[0][aB] = new ro("0", td.rQ[aB].button);
	aRu[2][1] = new ro("0", aS0.rQ[1].button), aRu[3][1] = new ro("0", tg.rQ[1].button), aRw = [new ro("", aS0.rQ[1].button, 1, 1), new ro("", tg.rQ[1].button, 1, 1)], aS2(0, bn.y.rv[0], 1), aS2(2, bn.y.rv[2], 1), (aRx = [new ro(L(281), aRt.u3(), 1,
		0), new ro("", aRt.u3(), 1, 1)])[0].rp.style.fontSize = "0.4em", aRx[1].rp.style.fontSize = "0.4em"
}

function aOF() {
	var aOd, aOe, qm;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aOe.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(387), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a5y(7).aO9)
	}), new w(L(200), function() {
		bj.sJ.sK(105, bG.tB.x3(aOe.qo[0].qV[0].e.value, 5)), bj.sJ.sK(106, bG.tB.x3(aOe.qo[1].qV[0].e.value, 15)), t.u(8, t.a5y(7).aO9, new t9(18))
	})]), aOe = new qk(aOd.vL, ((qm = []).push(function() {
		var aOx = new qU;
		return aOx.qX(L(178)), aOx.qi(new rf({
			value: "",
			eB: -1
		})), aOx
	}()), qm.push(function() {
		var aOx = new qU,
			aP7 = (aOx.qX(L(180)), new rf({
				value: "",
				eB: -1
			}));
		return aP7.e.type = "password", aOx.qi(aP7), aOx.qi(new sM([new w(L(181), function(e) {
			return e.textContent === L(181) ? (e.textContent = L(182), aP7.e.type = "text") : (e.textContent = L(181), aP7.e.type = "password"), !0
		}).button])), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		return aOx.qX(L(184)), aOx.qZ(L(388)), aOx.qZ(L(389)), aOx.qZ(L(390)), aOx
	}()), qm))
}

function aOM() {
	var aOd, aRc, aRd, vG;

	function aRe(aB) {
		t.u(8, t.t8, new t9(21, {
			tR: aB,
			tS: 0,
			tT: 10
		}))
	}
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aRc.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aRd = [new w(L(343), function() {
		aRe(5)
	}, 0, 0, 1), new w(L(344), function() {
		aRe(6)
	}, 0, 0, 1), new w(L(345), function() {
		aRe(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aRe(12)
	}, 0, 0, 1)], vG = [new w("⬅️ " + L(37), function() {
		t.a26()
	})], aOd = new vF(L(391), vG), aRc = new rP(aRd, aOd.vL)
}

function aO5() {
	this.eP = {}, this.tU = new Array(7), this.aOK = null, this.aOH = null, this.sp = 0, this.aJS = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5h = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aDE = function() {
		t.u(0 === aa.a27() ? 5 : 0)
	}, this.aQW = function() {
		if (1 === bj.eP.data[130].value) t.u(8, t.a5x().aO9, new t9(24, {
			aQ2: bj.eP.data[125].value,
			tS: bj.eP.data[128].value,
			tT: bj.eP.data[129].value
		}));
		else {
			for (var g = (g = bj.eP.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5x().aO9, new t9(23, {
				aQ2: bj.eP.data[125].value,
				a1b: g
			}))
		}
	}, this.aRV = function(aO9, target) {
		t.u(4, aO9, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aOy(
				"/privacy"), !1, [new w("⬅️ " + L(37), function() {
				t.u(aO9)
			}), new w("✅ Accept", function() {
				bj.sJ.sK(140, 1), 0 === target ? t.u(2, aO9) : t.u(8, aO9, new t9(target))
			})]))
	}, this.aSF = function() {
		for (var aB = 0; aB < 7; aB++) this.tU[aB] = bG.wu.wy(bH.pz(5));
		this.tU[1] = "[" + this.tU[1] + "]", 5 === t.t8 && (t.a5x().aHl.sK(this.tU), t.a5x().resize())
	}, this.aP6 = function(fW, pL, a7T) {
		fW = bA.gQ.a4h(fW, 1, 1e6);
		var aSG = Math.max(1, 1 + Math.floor(.01 * (fW - 100))),
			pL = L(392, [pL]);
		return (pL += "<br>") + L(393, [a7T]) + "<br>" + L(394, [aSG < 20 ? fW + aSG + "–" + (fW + 20) : fW + aSG]) + "<br>" + L(395, [fW])
	}
}

function aOP() {
	var aPZ, aPa, aSH, qm;

	function aPc() {
		b6.uY(), t.aOc()[19] = null, t.a26()
	}

	function aSO() {
		aSR(), aSP()
	}

	function aSR() {
		aSH.qW.lastChild && t.removeChild(aSH.qW, aSH.qW.lastChild)
	}

	function aSP() {
		var aSS = bS.a5o(aD.data);
		aD.data.canvas = bS.aM4(aSS, aD.data.mapSeed).xT, aSQ()
	}

	function aSQ() {
		var a3k = aD.data.canvas;
		a3k.style.width = "100%", aSH.qW.appendChild(a3k)
	}
	this.aJ2 = function(a3k) {
		aD.data.canvas && aSR(), aD.data.canvas = a3k, aSQ()
	}, this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(309), [new w("⬅️ " + L(37), aPc)]), 2 === aD.data.mapType && b6.dd(), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(396), L(397), L(398)],
			value: aD.data.mapType
		}, function(eB) {
			2 === (aD.data.mapType = eB) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uY()), t.u(20)
		})), 2 <= aD.data.mapType && (aOx.qi(new sW), aOx.qi(new sG({
			value: aD.data.passableWater
		}, L(399), function(value) {
			aD.data.passableWater = value
		})), aOx.qi(new sG({
			value: aD.data.passableMountains
		}, L(400), function(value) {
			aD.data.passableMountains = value
		})));
		qm.push(aOx)
	}(qm = []), function(qm) {
		if (0 === aD.data.mapType) {
			for (var aOx = new qU, vE = (aOx.qX(L(309)), []), aB = 0; aB < bS.xJ.aN0.length; aB++) vE.push(bS.xJ.xK[bS.xJ.aN0[aB]].name);
			aOx.qf(new vA({
				vE: vE,
				value: aD.data.mapProceduralIndex
			}, function(eB) {
				aD.data.mapProceduralIndex = eB, aSO()
			})), qm.push(aOx)
		}
	}(qm), function(qm) {
		if (1 === aD.data.mapType) {
			for (var aOx = new qU, vE = (aOx.qX(L(309)), []), aB = 0; aB < bS.xJ.aN1.length; aB++) vE.push(bS.xJ.xK[bS.xJ.aN1[aB]].name);
			aOx.qf(new vA({
				vE: vE,
				value: aD.data.mapRealisticIndex
			}, function(eB) {
				aD.data.mapRealisticIndex = eB, aSO()
			})), qm.push(aOx)
		}
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.mapType && ((aOx = new qU).qX(L(401)), aOx.qi(new rf(bj.eP.data[162], 1)), aOx.qX(L(402), "0.8em"), aOx.qi(new sM([new w(L(403), function() {
			return b6.aIv(), !0
		}).button])), qm.push(aOx))
	}(qm), function(qm) {
		var aOx, re;
		2 === aD.data.mapType && ((aOx = new qU).qX(L(404)), re = new rf({
			eB: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aOx.qi(re), qm.push(aOx))
	}(qm), function(qm) {
		var aOx, re, aP5;
		0 === aD.data.mapType && ((aOx = new qU).qX("Seed"), re = new rf({
			eB: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aSO())
		}), aP5 = new w(L(300), function(e) {
			var aLz = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aLz) return re.e.value = aD.data.mapSeed = aLz, aSO(), !0
		}), aOx.qi(re), aOx.qi(new sM([aP5.button])), qm.push(aOx))
	}(qm), function(qm) {
		(aSH = new qU).qX(L(405)), 2 !== aD.data.mapType ? aSP() : aD.data.canvas && aSQ();
		qm.push(aSH)
	}(qm), qm))
}

function v(title, qe, aST, aRf) {
	var aOd, aQn;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aQn.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aRf = aRf || [new w("⬅️ " + L(37), function() {
		t.a26()
	})], aOd = new vF(title, aRf), aQn = new sL(aOd.vL, qe), aST && bA.qr.textAlign(aOd.vL.style, 1)
}

function aOS() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 === aD.data.playerNamesType && 1 === bA.qz.a3O(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.playerNamesType && bA.qz.a3c(aPb.vl(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(313), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(314), L(315), L(278)],
			value: aD.data.playerNamesType
		}, function(eB) {
			aPe(), aD.data.playerNamesType = eB, t.u(23)
		})), aOx.qi(new sW), aOx.qi(new sG({
			value: aD.data.selectableName
		}, L(406), function(value) {
			aD.data.selectableName = value
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx;
		2 === aD.data.playerNamesType && ((aOx = new qU).qX("Data"), aPb = new vd(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.f1 || (aD.data.playerNamesData = new Array(aD.f1), aD.data.playerNamesData
			.fill("")), aPb.vk(bA.rq.a57(aD.data.playerNamesData, 1, '"')), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aOa() {
	var aPZ, aPa, qm;

	function aSZ() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eP.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fN = 0; fN < 3; fN++) fN < g.length && (colors[aB][fN] = Number(g[fN]))
		}
		return colors
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(407), [new w("⬅️ " + L(37), function() {
		t.a26()
	})]), aPa = new qk(aPZ.vL, ((qm = []).push(function() {
		var aOx = new qU;
		return aOx.qX(L(408)), aOx.qd(b0.y.aOy("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aOx.qd("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aOx
	}()), qm.push(function() {
		var aOx = new qU,
			ee = (aOx.qX(L(409)), bj.eP.data[174].value),
			qa = aOx.qZ(ee.length + " / 180"),
			aPH = (qa.style.textAlign = "center", new vd(0, 1, function(e) {
				var e = e.target.value,
					gX = e.length;
				qa.textContent = gX + " / 180", gX <= 180 && bj.sJ.sK(174, e)
			}));
		return aPH.e.rows = 6, aPH.e.style.fontSize = "1em", aPH.vk(ee), aOx.qi(aPH), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		aOx.qX(L(299));
		for (var aB = 0; aB < 11; aB++) {
			var iN = aOx.qi(new rf(bj.eP.data[163 + aB]));
			aB && (iN.e.style.marginTop = "0.6em")
		}
		return aOx.qi(new sM([new w(L(410), function() {
			for (var data = bj.eP.data, aB = 163; aB < 174; aB++) data[aB] && bj.eP.w0(aB, data[aB].w3);
			t.a26(), t.aOc()[31] = null, t.u(31)
		}).button])), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		return aOx.qX("Targeting"), aOx.qd(L(411)), aOx.qi(new rf(bj.eP.data[175], 0, 0)), aOx
	}()), qm.push(function() {
		var aOx = new qU;
		return aOx.qX(L(405)), aOx.qi(new sM([new w(L(181), function() {
			(new ed).show(bj.eP.data[174].value, aSZ(), -1)
		}).button])), aOx
	}()), qm.push(function() {
		var aOx = new qU,
			aSa = (aOx.qX(L(412)), aOx.qd(L(413)), new rf(bj.eP.data[176], 1, 0)),
			aSb = (aOx.qi(aSa), new w(L(414), function(e) {
				return aSc.button.textContent === L(177) && b0.y.eY(0) && (bA.qr.v7(e), aP4(), b0.aG6.aSd(bj.eP.data[176].value, aSZ(), bj.eP.data[175].value, bj.eP.data[174].value)), !0
			}, 1)),
			aP4 = function() {
				aSc.button.textContent = L(176), aSb.rB(1), aSb.button.style.color = bB.ny
			},
			aSc = new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aSb.rB(0), aSb.button.style.color = bB.ox) : aP4(), !0
			});
		return aOx.qi(new sM([aSc.button, aSb.button])), aOx
	}()), qm))
}

function aOD() {
	var aPZ, vi;

	function aSe() {
		t.x();
		var qY = b9.aSi(vi.vl());
		(aD.a0s && 0 < qY.length && qY === b9.qB.a5d || b9.aJc.xE(qY)) && b9.aSj()
	}
	this.show = function(aSf) {
		this.aSg(aSf), aPZ.show(), this.resize()
	}, this.aSg = function(aSf) {
		0 === aD.a0s ? aSf ? vi.vk(aSf) : aD.a5R.length && vi.vk(aD.a5R) : (aD.hD || (b9.qB.a5d = b9.a5e.a0K()), vi.vk(b9.aSh(b9.qB.a5d)))
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), vi.resize()
	}, this.a2y = function(ec) {
		2 === ec ? aPZ.vM[0].r8() : aSe()
	}, aPZ = new vF(L(415), [new w("⬅️ " + L(37), function() {
		t.aOb(1)
	}), new w(L(416), function() {
		vi.vm()
	}), new w(L(417), function() {
		vi.vn()
	}), new w(L(418), function() {
		vi.clear()
	}), new w(L(419), function() {
		aSe()
	})]), vi = new vd(L(420)), aPZ.vL.appendChild(vi.e)
}

function aOC() {
	var aOd, aOe, qm, aOx;

	function aSk() {
		b7.aD0 !== bj.eP.data[12].value ? (b7.dd(), t.u(8, 1, new t9(30))) : t.u(1)
	}
	this.show = function() {
			aOd.show(), this.resize()
		}, this.s8 = function() {
			aOd.s8()
		}, this.resize = function() {
			aOd.resize(), aOe.resize()
		}, this.a2y = function(ec) {
			2 === ec && aOd.vM[0].r8()
		}, aOd = new vF(L(421), [new w("⬅️ " + L(37), aSk), new w(L(422), function() {
			t.x(), bj.sJ.wb(), t.u(2)
		})]), qm = [], (aOx = new qU).qX(L(423)), aOx.qZ(L(424)), qm.push(aOx),
		function(qm) {
			var aOx = new qU,
				g = (aOx.qX(L(411)), b7.data.aDH());
			aOx.qf(new vA({
				vE: g,
				value: b7.data.aDL(g)
			}, function(eB) {
				return bj.sJ.sK(12, g[eB].split(":")[0]), !0
			})), qm.push(aOx)
		}(qm),
		function(qm) {
			var aOx = new qU,
				aSn = (aOx.qX(L(447)), []);
			aOx.qi(new sM([new w(L(410), function(e) {
				bX.aSo();
				for (var aB = 0; aB < aSn.length; aB++) aSn[aB].e.value = bX.aCZ[aB];
				return bA.qr.v7(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aSp.length; aB++) {
				aOx.qZ(bX.aSp[aB]);
				for (var fN = 0; fN < 2; fN++) {
					var eB = 2 * aB + fN,
						re = new rf({
							value: bX.aCZ[eB],
							eB: -1
						});
					re.e.aSq = eB, aSn.push(re), re.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aSr(e.target.aSq, code)
					}), fN && (re.e.style.marginLeft = "4%"), re.e.style.width = "48%", aOx.qi(re)
				}
			}
			qm.push(aOx)
		}(qm), (aOx = new qU).qX(L(23)), aOx.qf(new vA({
			vE: ["1", "2"],
			value: aZ.aGw - 1
		}, function(aB) {
			aZ.aGw = aB + 1
		})), qm.push(aOx), (aOx = new qU).qX(L(425)), bj.eP.data[1].vE = [L(426), L(427), L(428), L(429)], aOx.qf(new vA(bj.eP.data[1])), qm.push(aOx), (aOx = new qU).qX(L(430)), bj.eP.data[9].vE = [L(427), L(431), L(432)], aOx.qf(new vA(bj.eP.data[
			9])), qm.push(aOx), (aOx = new qU).qX(L(433)), bj.eP.data[11].vE = [L(434), L(9), L(435)], aOx.qf(new vA(bj.eP.data[11])), qm.push(aOx), (aOx = new qU).qX(L(436)), aOx.qi(new sG(bj.eP.data[2])), qm.push(aOx), (aOx = new qU).qX(L(437)),
		aOx.qi(new sG(bj.eP.data[7])), qm.push(aOx), (aOx = new qU).qX(L(438)), aOx.qi(new sG(bj.eP.data[8])), qm.push(aOx), (aOx = new qU).qX(L(439)), aOx.qi(new rf(bj.eP.data[5])), qm.push(aOx), (aOx = new qU).qX(L(440)), aOx.qi(new sG(bj.eP.data[
			13], L(441))), aOx.qi(new sG(bj.eP.data[14], L(442))), qm.push(aOx), (aOx = new qU).qX(L(443)), aOx.qf(new vA({
			vE: [L(444), L(445), L(446)],
			value: aZ.aGx
		}, function(aB) {
			aZ.aGx = aB
		})), qm.push(aOx), aOe = new qk(aOd.vL, qm)
}

function aOT() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 !== aD.data.spawningType || bA.qz.a3O(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.spawningType && bA.qz.a3a(aPb.vl(), aD.data.spawningData, bS.aJ5 - 1)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(448), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU,
			vE = (aOx.qX(L(275)), [L(300), L(312), L(278)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (vE.splice(1, 1), 0 < value) && (value = 1);
		aOx.qf(new vA({
			vE: vE,
			value: value
		}, function(eB) {
			aPe(), aD.data.spawningType = eB, 0 === aD.data.gameMode && 1 === eB && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.f1)), t.u(24)
		})), aOx.qi(new sW), aOx.qi(new sG({
			value: aD.data.selectableSpawn
		}, L(449), function(value) {
			aD.data.selectableSpawn = value
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx = new qU;
		aOx.qX("Seed"), aOx.qi(new rf({
			eB: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qm.push(aOx)
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.spawningType && ((aOx = new qU).qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.spawningData, 2)), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aOB() {
	var aOd, aRc, aRd, vG;

	function aSs(id) {
		0 !== a0.id || bj.eP.data[140].value ? 0 === id ? t.u(8, 1, new t9(16)) : t.u(2) : t.y.aRV(t.t8, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aOd.show(), this.resize(), this.eX()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aRc.resize()
	}, this.eX = function() {
		8 === aa.a27() && (2 <= bd.aSx ? aRd[2].r9 === bB.oA && aRd[2].rB(0) : aRd[2].r9 !== bB.oA && aRd[2].rB(bB.oA), !aD.hD && aM.qS(aD.eo) ? aRd[1].r9 === bB.oA && aRd[1].rB(0) : aRd[1].r9 !== bB.oA && aRd[1].rB(bB.oA), !aD.hD && aw.ht(aD
			.eo) ? aRd[0].r9 === bB.oA && aRd[0].rB(0) : aRd[0].r9 !== bB.oA && aRd[0].rB(bB.oA))
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aRd = [new w(L(450), function() {
		aSs(0)
	}), new w(L(335), function() {
		t.u(16)
	}), new w(L(391), function() {
		t.u(17)
	}), new w(L(451), function() {
		t.y.aQW()
	}, 0, 0, 1), new w(L(415), function() {
		t.u(3, 1)
	}), new w(L(452), function() {
		t.u(18)
	}), new w(L(407), function() {
		t.u(31)
	}), new w(L(421), function() {
		aSs(1)
	}), new w(L(453), function() {
		var sy = ["Patreon", L(462), L(463), "YouTube Tutorial", "Discord", L(464), L(328), L(465), L(331), L(466), "Terms", "Privacy"],
			a4A = [bK.aPX, bK.aDY, bK.a20, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDZ, bK.aSy, bK.aSz, bK.aT0, bK.aT1, bK.aT2, bK.aT3, bK.aT4];
		if (b0.y.aT5(0))
			for (var aB = 0; aB < a4A.length; aB++) a4A[aB] = a4A[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (sy.splice(2, 1), sy.splice(0, 1), a4A.splice(2, 1), a4A.splice(0, 1)) : 2 === a0.id && (sy.splice(1, 1), sy.splice(0, 1), a4A.splice(1, 1), a4A.splice(0, 1)), t.u(4, 1, new v(L(453), bA.qr.a49(sy, a4A), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(454), function() {
		t.u(4, 1, new v(L(454), l.dw + "<br>" + b0.y.aOy("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(37),
				function() {
					t.u(1)
				})]))
	}), new w(L(455), function() {
		t.u(4, 1, new v(L(455), L(467) + "<br>" + L(468), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(469), function() {
			a0.a1.a1u(), t.u(1)
		})]))
	}), new w(L(456), function() {
		a0.a1.a1v(), t.u(4, 1, new v(L(470), L(471) + " " + b0.y.aOy("/privacy"), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], vG = [new w("⬅️ " + L(37), function() {
		t.y.aDE()
	})], 8 === aa.a27() && (aRd.unshift(new w(L(323), function() {
		t.u(30)
	})), aRd.unshift(new w(L(459), function() {
		2 <= bd.aSx && (t.x(), be.a31(), bf.dk = !0)
	}, 0, 1)), aRd.unshift(new w(L(460), function() {
		!aD.hD && aM.qS(aD.eo) && (b8.hU.pf(), t.x(), aM.hE) && aM.a31()
	}, 0, 1)), aRd.unshift(new w(L(461), function() {
		!aD.hD && aw.ht(aD.eo) && (bV.a6K(2), b8.hU.hp(), t.x(), aM.hE) && aM.a31()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aRd.push(new w(L(457), function() {
		a0.a1.a1w()
	})), aOd = new vF(L(458), vG), aRc = new rP(aRd, aOd.vL)
}

function aOX() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.sResourcesType && bA.qz.a3a(aPb.vl(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(318), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(276), L(277), L(278)],
			value: aD.data.sResourcesType
		}, function(eB) {
			aPe(), 2 !== eB || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.f1)), aD.data.sResourcesType = eB, t.u(28)
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx;
		1 === aD.data.sResourcesType && ((aOx = new qU).qX("Value"), aOx.qi(new rf({
			eB: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.iC(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qm.push(aOx))
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.sResourcesType && ((aOx = new qU).qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.sResourcesData, 2)), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aOV() {
	var aPZ, aPa, aPb, qm;

	function aPc() {
		aPe(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aOc()[19] = null, t.a26()
	}

	function aPe() {
		2 === aD.data.tIncomeType && bA.qz.a3a(aPb.vl(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aPZ.show(), this.resize()
	}, this.s8 = function() {
		aPZ.s8()
	}, this.resize = function() {
		aPZ.resize(), aPa.resize()
	}, this.a2y = function(ec) {
		2 === ec && aPZ.vM[0].r8()
	}, aPZ = new vF(L(316), [new w("⬅️ " + L(37), aPc)]), aPa = new qk(aPZ.vL, (function(qm) {
		var aOx = new qU;
		aOx.qX(L(275)), aOx.qf(new vA({
			vE: [L(276), L(277), L(278)],
			value: aD.data.tIncomeType
		}, function(eB) {
			aPe(), 2 !== eB || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.f1), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eB, t.u(26)
		})), qm.push(aOx)
	}(qm = []), function(qm) {
		var aOx;
		1 === aD.data.tIncomeType && ((aOx = new qU).qX("Value"), aOx.qi(new rf({
			eB: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.iC(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qm.push(aOx))
	}(qm), function(qm) {
		var aOx;
		2 === aD.data.tIncomeType && ((aOx = new qU).qX("Data"), (aPb = new vd(0, 1, 0, 1)).vk(bA.rq.a57(aD.data.tIncomeData, 4)), aOx.qi(aPb), qm.push(aOx))
	}(qm), qm))
}

function aON() {
	var aOd, aOe, qm;
	this.show = function() {
		aOd.show(), this.resize()
	}, this.s8 = function() {
		aOd.s8()
	}, this.resize = function() {
		aOd.resize(), aOe.resize()
	}, this.a2y = function(ec) {
		2 === ec && aOd.vM[0].r8()
	}, aOd = new vF(L(452), [new w("⬅️ " + L(37), function() {
		t.a26()
	})]), aOe = new qk(aOd.vL, ((qm = []).push(function() {
		function aP4() {
			aSc.button.textContent = L(176), aT8.e.readOnly = !1, aT9.e.readOnly = !1, aP3.rB(1), aP3.button.style.color = bB.ny
		}
		var aOx = new qU,
			aT7 = (aOx.qd(b0.y.aOy("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aOx.qX(L(472)), new rf({
				value: bj.eP.data[105].value,
				eB: -1
			})),
			aT8 = (aT7.e.readOnly = !0, aOx.qi(aT7), aOx.qX(L(361), "0.8em"), new rf(bj.eP.data[148], 0, void 0, function(e) {
				aP2(bj.eP.data[149].value, e.target.value)
			})),
			aT9 = (aOx.qi(aT8), aOx.qX(L(365), "0.8em"), new rf(bj.eP.data[149], 1, void 0, function(e) {
				aP2(e.target.value, bj.eP.data[148].value)
			})),
			aSc = (aOx.qi(aT9), new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aT8.e.readOnly = !0, aT9.e.readOnly = !0, aP3.rB(0), aP3.button.style.color = bB.ox, bj.sJ.sK(149, aT9.e.value), aP2(bj.eP.data[149].value, bj.eP.data[
					148].value)) : aP4(), !0
			})),
			aP3 = (aOx.qi(new sM([aSc.button])), new w(L(14), function(e) {
				return aT8.e.readOnly && b0.y.eY(0) && (bA.qr.v7(e), aP4(), b0.aG6.aG7({
					tA: 0,
					t6: bj.eP.data[148].value,
					value: parseInt(bj.eP.data[149].value, 10)
				})), !0
			}, 1)),
			qa = aOx.qZ(),
			aP2 = (aOx.qZ(L(473)).style.fontWeight = "bold", function(fW, qY) {
				qa.innerHTML = t.y.aP6(fW, bj.eP.data[105].value, qY)
			});
		return aOx.qi(new sM([aP3.button])), aP2(bj.eP.data[149].value, bj.eP.data[148].value), aOx
	}()), qm))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(fB) {
		return Math.log(fB) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fB) {
		return Math.log(fB) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fB) {
		return 0 < fB ? 1 : fB < 0 ? -1 : 0
	})
}

function ci() {
	var aAE, aTB, aTC, aTD, aTA = !1;

	function aTE() {
		aTA = !0, aAE = -1, aTB = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aTB[aB] = !1;
		var yJ = Math.floor(1 + .02 * h.min);
		aTC = new Array(4), (aTD = new Array(4))[1] = aTD[3] = aTC[0] = aTC[2] = 0, aTD[0] = aTC[3] = -yJ, aTC[1] = aTD[2] = yJ
	}

	function aTF() {
		if (-1 !== aAE)
			if (0 !== aD.a0s && aH.ng()) {
				for (var aTG = !1, aB = 3; 0 <= aB; aB--) aTB[aB] && (aTG = !0, ih += aTC[aB], ii += aTD[aB], af.a2Q(aTC[aB], aTD[aB]), aS.a9u());
				aTG ? bf.dk = !0 : ar.nW()
			} else ar.nW()
	}
	this.a2w = function(eB) {
		0 !== aD.a0s && aH.ng() && (aTA || aTE(), aTB[eB] = !0, -1 === aAE) && (aAE = setInterval(aTF, 20), aTF())
	}, this.a2z = function(eB) {
		if (0 !== aD.a0s && (aTA || aTE(), aTB[eB] = !1, -1 !== aAE)) {
			for (var aTG = !1, aB = 3; 0 <= aB; aB--) aTG = aTG || aTB[aB];
			aTG || this.nW()
		}
	}, this.nW = function() {
		if (aTA && -1 !== aAE) {
			for (var aB = 3; 0 <= aB; aB--) aTB[aB] = !1;
			clearInterval(aAE), aAE = -1
		}
	}
}

function cj() {
	this.y = new aTH, this.mg = new aTI, this.pL = new aTJ, this.aFY = new aTK, this.eZ = new aTL, this.aG6 = new aTM, this.py = new aTN, this.aQt = new aTO, this.a7T = new aTP, this.aTQ = new aTR, this.aTS = new aTT, this.aTU = new aTV, this.aTW =
		new aTX, this.dd = function() {
			this.y.dd()
		}
}

function aTH() {
	var aTZ, aTa;
	this.aH1 = 5, this.aTY = null, this.a2C = 0, this.a25 = 0;

	function aTi() {
		return 0 === aZ.aGx ? l.dy ? 1 : 0 : aZ.aGx - 1
	}

	function aTl(a22, aO9, aTk) {
		aTa[a22].aTA = !0, aTf(a22), aTZ[a22] = new aTo, aTZ[a22].dd(a22, aO9, aTk)
	}

	function aTm(aB) {
		return aTa[aB].aTA && aTZ[aB].aTm()
	}

	function aTf(a22) {
		aTa[a22].eS = bf.eS, aTa[a22].aTc = !1
	}
	this.dd = function() {
		this.aTY = new Array(this.aH1);
		this.aTY[0] = "territorial.io";
		var aLz = ay.aML(0);
		ay.a5U(0);
		for (var aB = 1; aB < this.aH1; aB++) this.aTY[aB] = aK.a0Q() + ".territorial.io";
		for (ay.a5U(aLz), aTZ = new Array(this.aH1), aTa = new Array(this.aH1), aB = this.aH1 - 1; 0 <= aB; aB--) aTa[aB] = {
			aTA: !1,
			eS: 0,
			aTc: !1
		};
		this.aH2(0, 0, 0)
	}, this.aTd = function(aB) {
		return aTZ[aB]
	}, this.eX = function() {
		for (var aB = this.aH1 - 1; 0 <= aB; aB--) this.eY(aB) && bf.eS > aTa[aB].eS + 15e3 && (b0.pL.aTe(aB, aTa[aB].aTc), aTf(aB));
		!this.eY(0) && bf.eS > aTa[0].eS + 8e3 && (aTa[0].eS = bf.eS, this.aH2(0, 0, 0))
	}, this.aQq = function(id) {
		return this.aH2(0, id, 0) && this.aTg(0)
	}, this.aT5 = function(aTh) {
		return aTh ? aZ.aGy : aTi()
	}, this.a1J = function() {
		return aTi() ? "game.territorial.io" : "territorial.io"
	}, this.aOy = function(aTj) {
		aTj = this.a1J() + aTj;
		return "<a href='https://" + aTj + "' target='_blank'>" + aTj + "</a>"
	}, this.aH2 = function(a22, aO9, aTh) {
		aTh = this.aT5(aTh);
		if (aTa[a22].aTA) {
			if (aTZ[a22].aTm()) return aTZ[a22].aTn(aO9), aTZ[a22].eY();
			aTZ[a22].s8()
		}
		return aTl(a22, aO9, aTh), !1
	}, this.aTp = function(a22, aO9) {
		b0.eZ.aTq(a22)
	}, this.aTg = function(aB) {
		return this.eY(aB) && aTZ[aB].aTg()
	}, this.aTr = function(aB) {
		aTZ[aB].aTr()
	}, this.eY = function(aB) {
		return aTa[aB].aTA && aTZ[aB].eY()
	}, this.send = function(a22, aC) {
		0 !== a22 && aTf(a22), aTZ[a22].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a2h = function(a22) {
		8 === aa.a27() && (aTa[a22].aTc = !0, b0.mg.aTs = !0)
	}, this.close = function(a22, aTt) {
		aTm(a22) && aTZ[a22].close(aTt)
	}, this.aTu = function(a22, aTt) {
		o.a2F(aTt), aTm(a22) && aTZ[a22].close(aTt)
	}, this.a2G = function(aTt) {
		for (var aB = this.aH1 - 1; 0 <= aB; aB--) this.close(aB, aTt)
	}, this.aTv = function(a22, aTt) {
		for (var aB = this.aH1 - 1; 0 <= aB; aB--) aB !== a22 && this.close(aB, aTt)
	}, this.a5f = function() {
		0 === this.a2C && (aD.kj || aD.hD) || this.close(this.a2C, 3246)
	}, this.aTw = function(a22, e) {
		aTZ[a22].s8(), o.a21(a22, e.code)
	}
}

function aTI() {
	this.aTs = !1, this.eX = function() {
		bf.kM() % 250 != 249 || aD.hD || (b0.eZ.aTx(+(this.aTs && ag.my[aD.eo]), al.kv + bN.y.mF), this.aTs = !1)
	}
}

function aTP() {
	this.aTz = function(a22, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aTu(a22, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.pz(1) ? function(a22) {
			var aU3 = bH.pz(6);
			0 === aU3 ? function(a22) {
					if (0 === a22 && 8 !== aa.a27()) {
						t.y.aSF();
						for (var aUI = bH.pz(12), aUJ = bH.pz(6), g = new Array(aUI), aB = 0; aB < aUI; aB++) g[aB] = bH.pz(aUJ);
						aT.aAK(g)
					}
				}(a22) : 2 === aU3 ? b0.aTQ.aU5(a22) : 3 === aU3 || 4 === aU3 ? ax.dd() : 5 === aU3 ? b0.aTS.aU6() : 9 === aU3 ? b0.aTS.aU7(a22) : 10 === aU3 ? b0.aTU.aU8() : 11 === aU3 ? b0.aTS.aU9(a22) : 12 === aU3 ? b0.aTU.aUA() :
				13 === aU3 ? b0.aTW.aUB() : 14 === aU3 ? b0.aTW.aUC() : 15 === aU3 ? b0.aTS.aUD() : 16 === aU3 ? b0.aTQ.aUE(a22) : 17 === aU3 ? b0.aTQ.aUF(a22) : 19 === aU3 ? b0.aTQ.aUG(a22) : 20 === aU3 && b0.aTS.aUH(a22)
		} : function(a22) {
			if (8 !== aa.a27() && !ax.aHW()) return;
			if (a22 !== b0.y.a2C) b0.y.aTu(a22, 3244);
			else if (0 === bH.pz(1)) bf.a12.aUK(bH.aC);
			else {
				var aB, a22 = bH.pz(2);
				if (0 === a22) {
					var pa, pL = bH.pz(9);
					0 !== ag.my[pL] && 0 !== ag.my[aD.eo] && (pa = bH.pz(10), aN.pZ(pL, aD.eo, pa), af.qQ(pL, 1, pa))
				} else if (1 === a22) ! function() {
					var pL = bH.pz(9);
					0 !== ag.my[pL] && 0 !== ag.my[aD.eo] && b5.aLa(0, [pL], !0) && aN.pr(pL, 1)
				}();
				else if (2 === a22) ! function() {
					var pL = bH.pz(9),
						target = bH.pz(9);
					0 !== ag.my[pL] && 0 !== ag.my[target] && 0 !== ag.my[aD.eo] && b5.aLa(1, [pL], !0) && (af.qQ(pL, 3, 96), af.qQ(target, 4, 96), aN.a7a(pL, target))
				}();
				else if (l.a9 && !l.aA) {
					var f4 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f4 = Math.min(b8.pI.q1.length, 540), aB = 0; aB < f4; aB++) bD.aUQ(32, b8.pI.q1[aB]);
					b0.y.send(b0.y.a2C, bD.aC)
				}
			}
		})(a22), bf.aU2())
	}
}

function aTV() {
	this.aU8 = function() {
		bj.y.wR(), bj.sJ.sK(105, bF.tB.tC(bF.tB.tD(5))), bj.sJ.sK(106, bF.tB.tC(bF.tB.tD(15))), bj.sJ.sK(109, 0), bj.sJ.sK(108, bj.eP.data[109].value), bj.sJ.sK(111, bj.eP.data[109].value + 1), bj.sJ.sK(107, 0), bj.sJ.sK(110, "")
	}, this.aUA = function() {
		var data;
		bH.size < bD.aUR(29) ? b0.y.aTu(0, 3254) : ((data = {
			t7: bH.pz(30),
			wf: bH.pz(16),
			wg: bH.pz(30),
			wh: bH.pz(30),
			wi: bH.pz(30),
			wj: bH.aUS(32),
			username: bG.ww.xE(5),
			wk: bG.ww.xE(3),
			wl: bG.ww.xE(3),
			wm: bH.aUS(32),
			wn: bH.aUS(32),
			wo: bH.pz(30),
			wp: bH.aUS(32),
			wq: bH.aUS(32),
			wr: bH.aUS(32),
			ws: bH.aUS(32),
			aPB: bH.aUS(32),
			aPC: bH.aUS(30),
			aPP: bH.aUS(32),
			aPQ: bG.ww.xE(3),
			aPI: bH.aUS(2),
			aPK: bH.aUS(10),
			aPG: bG.ww.xE(8),
			aPJ: bH.aUS(5),
			aP0: bH.pz(30),
			aPA: bH.pz(30),
			a1M: bH.aUS(32),
			aPF: bH.pz(3),
			aPE: bH.pz(8),
			aPR: bH.pz(1),
			aPS: bH.pz(1)
		}).aPR && (data.aPT = bH.aUS(32), data.aPU = bH.pz(30), data.aPV = bH.pz(30), data.aPW = bH.pz(1)), 8 === t.t8 && (25 === t.a5x().aQp ? (data.aOf = !0, t.y.aOK = data, t.a5x().aDD(25, !1)) : (data.aOf = !1, bj.sJ.sK(160, +(data
			.aPR && data.aPW)), data.t6 = bj.eP.data[105].value, t.y.aOH = data, bj.sJ.we(data), t.a5x().aDD(16, !0))))
	}
}

function aTX() {
	this.aUB = function() {
		var aB;
		if (bH.size < bD.aUR(23)) b0.y.aTu(0, 3259);
		else {
			var tR = bH.pz(6),
				f4 = bH.pz(10),
				data = [];
			if (9 === tR || 10 === tR || 11 === tR) {
				for (aB = 0; aB < f4; aB++) data.push([bH.pz(30), bG.ww.xE(5), bH.aUS(32), 0, bH.pz(30)]);
				8 === t.t8 && t.a5x().aDD(21, !0, {
					tR: tR,
					data: data
				})
			} else if (12 === tR) {
				for (aB = 0; aB < f4; aB++) data.push([bH.pz(20), bH.pz(30), bH.pz(30), bH.aUS(32), bH.pz(30), bG.ww.xE(5), bG.ww.xE(5)]);
				8 === t.t8 && t.a5x().aDD(21, !0, {
					tR: tR,
					data: data
				})
			} else {
				var i1 = bH.pz(16);
				if (bH.aUT(39 + 16 * i1 + f4 * (0 === tR ? 111 : 1 === tR ? 101 : 2 === tR || 3 === tR ? 127 : 212))) {
					if (0 === tR)
						for (aB = 0; aB < f4; aB++) data.push([bH.pz(30), bG.wu.wy(bH.pz(5)), bH.pz(16), bH.pz(30), bH.pz(30)]);
					else if (1 === tR)
						for (aB = 0; aB < f4; aB++) data.push([bH.pz(16), bG.wu.wy(bH.pz(3)), bH.pz(16), bG.wu.wy(bH.pz(5)), bH.pz(31), bH.pz(30)]);
					else if (2 === tR || 3 === tR)
						for (aB = 0; aB < f4; aB++) data.push([bH.pz(30), bG.wu.wy(bH.pz(5)), bH.aUS(32), bH.pz(30), bH.pz(30)]);
					else
						for (aB = 0; aB < f4; aB++) data.push([bH.pz(20), bH.pz(30), bH.pz(30), bH.pz(30), bH.pz(30), bH.aUS(32), bH.pz(30), bG.wu.wy(bH.pz(5)), bG.wu.wy(bH.pz(5))]);
					8 === t.t8 && t.a5x().aDD(21, !0, {
						tR: tR,
						data: data
					})
				} else b0.y.aTu(0, 3260)
			}
		}
	}, this.aUC = function() {
		if (bH.size < bD.aUR(29)) b0.y.aTu(0, 3265);
		else {
			var aUU = bH.pz(4),
				aUV = bH.pz(7),
				aUW = bH.pz(11);
			if (bH.aUT(29 + 16 * aUV + 16 * aUW + 11 * aUU)) {
				for (var data = [], aB = 0; aB < aUU; aB++) {
					for (var a1c = bG.wu.wy(bH.pz(3)), aUX = bH.pz(8), aQ3 = [], fN = 0; fN < aUX; fN++) aQ3.push(bH.pz(16));
					data.push({
						name: "[" + a1c + "]",
						aQ3: aQ3
					})
				}
				8 === t.t8 && t.a5x().aDD(23, !0, data)
			} else b0.y.aTu(0, 3266)
		}
	}
}

function aTR() {
	function aUZ() {
		var id = bH.pz(3);
		return 0 === id ? {
			id: id,
			t6: bH.pz(30),
			r: bn.aDe.aFd(bG.ww.xE(7))
		} : 1 === id ? {
			id: id,
			t6: bH.pz(30),
			aEf: bH.pz(3),
			value: bH.pz(30),
			target: bH.pz(30)
		} : 2 === id ? {
			id: id,
			t6: bH.pz(30),
			aEf: bH.pz(3)
		} : 3 === id ? {
			id: id,
			t6: bH.pz(30),
			aEf: bH.pz(3),
			value: bH.pz(4),
			target: bH.pz(30)
		} : 4 === id ? {
			id: id,
			t6: bH.pz(30),
			aEf: bH.pz(3),
			target: bH.pz(30)
		} : 5 === id ? {
			id: id,
			aEf: bH.pz(6)
		} : 6 === id ? {
			id: id,
			value: bH.pz(17)
		} : null
	}
	this.aU5 = function(a22) {
		if (a22 !== b0.y.a25) b0.y.close(a22, 3239);
		else if (6 !== aa.a27()) b0.y.close(a22, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rw = bn.y.rx[aB],
					playerCount = (rw.u0 = bH.pz(10), rw.ek = bH.pz(6), rw.mapSeed = bH.pz(14), rw.aEQ = bH.pz(4), rw.aGA = bH.pz(6), rw.aGB = bH.pz(4), rw.aEW = bH.pz(1), rw.aFE = bH.pz(12), rw.spawningSeed = bH.pz(14), bH.pz(16));
				bn.uH.uJ[aB] = bH.pz(16);
				for (var fN = 0; fN < playerCount; fN++) bn.uH.aDs(aB, bH.pz(30), bG.ww.xE(5), bH.pz(4), bH.pz(30), bH.pz(7), bH.pz(16), bH.pz(18), bH.pz(11), bH.pz(12))
			}
			t.u(29), bn.y.aF6(!0)
		}
	}, this.aUE = function(a22) {
		if (a22 !== b0.y.a25) b0.y.close(a22, 3239);
		else if (bn.a24) {
			bn.y.aF4[0] = bH.pz(20), bn.y.aF4[1] = bH.pz(20);
			for (var aUY = bH.pz(16), fN = 0; fN < aUY; fN++) {
				var id = bH.pz(3);
				0 === id ? bn.uH.aDs(bH.pz(2), bH.pz(30), bG.ww.xE(5), 0, 1234566, 127, 0, bH.pz(18), 0, bH.pz(12)) : 1 === id ? bn.uH.aEB(bH.pz(16), bH.pz(2)) : 2 === id ? bn.uH.aE7(bH.pz(16), bH.pz(2), bH.pz(2)) : 3 === id ? bn.uH.aEA(bH.pz(
					16), bH.pz(2)) : 4 === id ? bn.uH.aE0(bH.pz(16), bH.pz(2), bH.pz(4), bH.pz(30), bH.pz(7), bH.pz(16), bH.pz(11), bH.pz(18)) : 5 === id && bn.uH.aE1(bH.pz(16), bH.pz(2), bH.pz(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rw = bn.y.rx[aB];
				if (rw.u0 = bH.pz(10), 0 === rw.u0) {
					if (rw.a2C = bH.pz(10), rw.aEU = bH.pz(10), bn.aDg.dl(aB)) return;
					rw.ek = bH.pz(6), rw.mapSeed = bH.pz(14), rw.aEQ = bH.pz(4), rw.aGA = bH.pz(6), rw.aGB = bH.pz(4), rw.aEW = bH.pz(1), rw.aFE = bH.pz(12), rw.spawningSeed = bH.pz(14), rw.aGC.push(rw.aGC[0]), rw.aGC.shift()
				}
			}
			bn.y.aEM()
		} else b0.y.close(a22, 3251)
	}, this.aUF = function(a22) {
		if (a22 !== b0.y.a25) b0.y.close(a22, 3272);
		else if (bn.a24) {
			for (var ru = bH.pz(4), rw = bn.y.rx[ru], ry = rw.ry, uX = (rw.rz = bH.pz(20), bH.pz(6)), aB = 0; aB < uX; aB++) {
				var aGT = aUZ();
				bn.s7.aGS(aGT), ry.push(aGT)
			}
			bn.y.aFF(ru)
		} else b0.y.close(a22, 3273)
	}, this.aUG = function(a22) {
		a22 !== b0.y.a25 ? b0.y.close(a22, 3276) : bn.a24 ? bn.message.aEK(aUZ()) : b0.y.close(a22, 3277)
	}
}

function aTT() {
	this.aU6 = function() {
		for (var id = bH.pz(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.pz(8), bH.pz(8), bH.pz(8)]);
		var ee = bG.ww.xE(8);
		bU.eL.eb({
			id: id,
			colors: colors,
			ee: ee
		})
	}, this.aUH = function(a22) {
		var f7 = bH.pz(5),
			f7 = bi.aUa.aUb(f7, bH.pz(30), bH.pz(30), bH.pz(30));
		b0.eZ.aUc(a22, f7)
	}, this.aU7 = function(a22) {
		var aUM, rN, aUd;
		bH.aUT(165) ? (aUM = bH.pz(3), rN = bi.aUa.eX(bH.pz(30), bH.pz(30)), aUd = bi.aUa.aUb(bH.pz(5), bH.pz(30), bH.pz(30), bH.pz(30)), b0.eZ.aUe(a22, rN, aUd, aUM), 0 < aUM || (0 === a22 && 0 === bj.eP.data[105].value.length ? b0.eZ.ea(0) : b0
			.aG6.aUf(a22), 4 === b0.y.aTd(a22).aUg() ? 6 === aa.a27() && b0.aFY.aH3(a22) : 5 !== b0.y.aTd(a22).aUg() || 8 !== aa.a27() && 10 !== aa.a27() || b0.pL.aHS())) : b0.y.aTu(a22, 3269)
	}, this.aU9 = function(a22) {
		var id = bH.pz(6);
		1 === id ? (bj.sJ.sK(160, bH.pz(30)), b0.y.aTr(a22), aT.aAG || b0.eZ.ea(1), b7.aD9(), 8 === t.t8 && t.a5x().aR3()) : 21 === id ? 8 === t.t8 && t.a5x().aDD(17) : 22 === id && (bj.sJ.sK(106, bj.eP.data[110].value), bj.sJ.sK(110, ""), 8 ===
			t.t8) && t.a5x().aDD(15)
	}, this.aUD = function() {
		var f4 = bH.pz(16),
			aUh = bH.pz(16);
		if (bH.aUT(55 + 10 * f4 + 16 * aUh)) {
			for (var g = [], aB = 0; aB < f4; aB++) g.push(bG.wu.wy(bH.pz(10)));
			b7.aDC(g)
		} else b0.y.aTu(0, 3270)
	}
}

function aTJ() {
	this.aTe = function(a22, aTc) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aTc ? 1 : 0), bD.a8(3, 0 === aD.a0s ? bn.a24 ? 6 : 0 : aD.hD ? 1 : aD.kj ? 7 : aD.kh < 7 ? 2 : 8 === aD.kh ? 4 : 9 === aD.kh ? 5 : 3), b0.y.send(a22, bD.aC)
	}, this.aHS = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a25), bD.a8(10, ax.aEU), bD.a8(9, ax.aHL), bD.a8(10, l.e0), bD.a8(14, l.dp), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pM = function(eq) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eq), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pN = function(ig, jY) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ig), bD.a8(10, jY), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pR = function(ig, pP) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ig), bD.a8(9, pP), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pT = function(ig, pS) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ig), bD.a8(27, pS), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pV = function(ig, nL) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ig), bD.a8(16, nL), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pY = function(jY) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jY), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pc = function(eB) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, eB), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pe = function(pd) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pd), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pg = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a2C, bD.aC)
	}, this.ph = function(ig, eq, jY) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ig), bD.a8(10, jY), bD.a8(22, eq), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pp = function(aUi, aUj) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aUj), bD.a8(10, aUi), b0.y.send(b0.y.a2C, bD.aC)
	}, this.ps = function(a7T) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7T), b0.y.send(b0.y.a2C, bD.aC)
	}, this.pw = function(aUk, target) {
		var aB, f4 = aUk.length;
		for (bD.a7(14 + 9 * f4), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f4; aB++) bD.a8(9, aUk[aB]);
		b0.y.send(b0.y.a2C, bD.aC)
	}
}

function aTM() {
	this.aUl = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.eZ.aUm(), b0.y.send(0, bD.aC)
	}, this.aUf = function(a22) {
		bD.a7(127), bD.a8(1, 0), bD.a8(6, 17), bG.tB.xA(bj.eP.data[105].value, 5), bG.tB.xA(bj.eP.data[106].value, 15), b0.y.send(a22, bD.aC)
	}, this.aR4 = function() {
		bD.a7(97), bD.a8(1, 0), bD.a8(6, 18), bG.tB.xA(bj.eP.data[110].value, 15), b0.y.send(0, bD.aC)
	}, this.aR1 = function(a4k) {
		var f4 = a4k.qY.length;
		bD.a7(21 + 16 * f4), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4k.tA), bD.a8(8, f4), bF.wu.x9(a4k.qY), b0.y.send(0, bD.aC)
	}, this.aSd = function(wj, colors, aUo, ee) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wj, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fN = 0; fN < 3; fN++) bE.a8(8, colors[aB][fN]);
		wj = b7.data.aDG(aUo.trim());
		bE.a8(8, -1 === wj ? 255 : wj), bF.ww.a0K(ee.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aUp())
	}, this.aPL = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.tA), bG.tB.xA(data.t6, 5), b0.y.send(0, bD.aC)
	}, this.aG7 = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.tA), bG.tB.xA(data.t6, 5), bD.aUQ(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aTN() {
	this.px = function() {
		for (var f4 = aD.kP, a0h = bR.result.a0h, lK = a0h.length, a1U = (bD.a7(17 + 16 * f4 + 33 * lK), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lK), bD.a8(1, +(2 === aD.a0p)), bD.a8(1, aD.a1A % 2), ag.a1U), aB = 0; aB < f4; aB++) bD.a8(16, a1U[
		aB]);
		for (var gs = ag.gs, aB = 0; aB < lK; aB++) {
			var gc = a0h[aB];
			bD.a8(9, gc), bD.a8(24, gs[gc])
		}
		b0.y.send(b0.y.a2C, bD.aC)
	}
}

function aTO() {
	this.aQu = function(tR, tS, tT) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tR), bD.a8(1, +(tS < 0)), bD.a8(1, +(tT < 0)), bD.a8(30, Math.abs(tS)), bD.a8(30, Math.abs(tT)), b0.y.send(0, bD.aC)
	}, this.aQv = function(tR, aQw, aQx) {
		bD.a7(18 + 16 * aQw.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tR), b0.eZ.aUq(aQw), bD.a8(30, aQx), b0.y.send(0, bD.aC)
	}, this.aR0 = function(tR, aQw, aQx) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tR), bG.tB.xA(aQw, 5), bD.a8(30, aQx), b0.y.send(0, bD.aC)
	}, this.aQy = function(aQ2, a1b) {
		for (var f4 = a1b.length, i1 = 0, aB = 0; aB < f4; aB++) i1 += a1b[aB].length;
		for (bD.a7(21 + 3 * f4 + 16 * i1), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aQ2), bD.a8(4, f4), bD.a8(7, i1), aB = 0; aB < f4; aB++) bD.a8(3, a1b[aB].length), bF.wu.x9(a1b[aB]);
		b0.y.send(0, bD.aC)
	}, this.aQz = function(aQ2, tS, tT) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aQ2), bD.a8(1, +(tS < 0)), bD.a8(1, +(tT < 0)), bD.a8(20, Math.abs(tS)), bD.a8(20, Math.abs(tT)), b0.y.send(0, bD.aC)
	}
}

function aTK() {
	this.aH3 = function(a22) {
		var username = bj.eP.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aUr.pz()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.e0), bD.a8(2, bj.eP.data[158].value), b0.eZ.aUq(username), bA.color.a3p(bj.y.wY()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aUr.a0K(), b0.y.a25 = a22, b0.y.send(a22, bD.aC)
	}, this.aFZ = function(aUt, a4k) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aUt), 2 === aUt ? bE.a8(2, a4k) : 3 === aUt ? bF.ww.a0K(a4k, 7, bE) : 5 === aUt && (bE.a8(3, a4k.id), bE.a8(3, a4k.value), bE.a8(30, a4k.t6)), b0.y.send(b0.y.a25, bE.aUp())
	}
}

function aTL() {
	this.aTq = function(a22) {
		var aUz;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dp), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aUz = b7.aDF(), bD.a8(8, aUz[0]), bD.a8(8, aUz[1]), b0.y.send(a22, bD.aC)
	}, this.aUe = function(a22, rN, aUd, aUM) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aUM), bD.a8(30, rN[0]), bD.a8(30, rN[1]), bD.a8(30, aUd), b0.y.send(a22, bD.aC)
	}, this.aUc = function(a22, rN) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rN), b0.y.send(a22, bD.aC)
	}, this.ea = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.un = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aDB = function(id, qY) {
		var f4 = Math.min(qY.length, 63);
		bD.a7(19 + 16 * f4), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f4), bF.wu.x9(qY), b0.y.send(0, bD.aC)
	}, this.aUv = function(aUw, qj) {
		bD.a7(7 + 26 * qj.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qj.length; aB++) bD.a8(16, qj[aB][0]), bD.a8(10, qj[aB][1]);
		b0.y.send(aUw, bD.aC)
	}, this.aTx = function(aUx, aUy) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aUx), bD.a8(12, aUy), b0.y.send(b0.y.a2C, bD.aC)
	}, this.aUq = function(username) {
		bD.a8(5, username.length), bF.wu.x9(username)
	}
}

function aTo() {
	var aV0, aV1, b, aV2 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aV3 = 0;

	function aTp() {
		b0.y.aTp(aV0, aV1)
	}

	function aV6(e) {
		b0.a7T.aTz(aV0, new Uint8Array(e.data))
	}

	function aV7() {}

	function aTw(e) {
		b0.y.aTw(aV0, e)
	}
	this.dd = function(eB, aO9, aTk) {
		aV0 = eB, aV1 = aO9,
			function(aTk) {
				aTk = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : l.dt ? "ws://localhost:" + (7130 + aV0) + "/" : aTk ? aV2[0] + "game.territorial.io/x0" + aV0 + "/" : aV2[0] + b0.y.aTY[aV0] + aV2[1 + l.du];
				(b = new WebSocket(aTk)).binaryType = "arraybuffer", b.onopen = aTp, b.onmessage = aV6, b.onclose = aTw, b.onerror = aV7
			}(aTk)
	}, this.aV5 = function() {
		return b.readyState === b.CONNECTING
	}, this.eY = function() {
		return b.readyState === b.OPEN
	}, this.aTg = function() {
		return aV3
	}, this.aTr = function() {
		aV3 = 1
	}, this.aTm = function() {
		return this.aV5() || this.eY()
	}, this.aTn = function(aO9) {
		aV1 = aO9
	}, this.aUg = function() {
		return aV1
	}, this.send = function(aC) {
		this.eY() && b.send(aC)
	}, this.close = function(aTt) {
		this.aTm() && (this.s8(), b.close(aTt))
	}, this.s8 = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dK() {
	var gap, aV8 = !1,
		aV9 = 0,
		i = 0,
		tF = 0,
		canvas = null,
		z6 = null,
		a3P = null;

	function aVD() {
		for (var aB = aD.y8; 0 <= aB; aB--) a3P[aB] = 0;
		for (aB = al.kv - 1; 0 <= aB; aB--) a3P[bg.f2[al.l0[aB]]] += ag.gs[al.l0[aB]];
		aV8 = !0
	}

	function aVB() {
		for (var aVI, aVG = 0, f4 = 0, ec = Math.floor(i / 2), eA = Math.floor(tF / 2), aVH = 1.5 * Math.PI, aB = aD.y8; 0 <= aB; aB--) f4 += a3P[aB], 0 === a3P[aB] && aVG++;
		if (aV8 = !1, z6.clearRect(0, 0, i, i), 0 < f4)
			if (aVG === aD.y8) {
				for (aB = aD.y8; 0 <= aB; aB--)
					if (0 < a3P[aB]) {
						! function(aB, ec, eA) {
							z6.fillStyle = bg.aVP[bg.km[aB]], z6.beginPath(), z6.arc(ec, ec, eA, 0, 2 * Math.PI), z6.fill()
						}(aB, ec, eA);
						break
					}!
				function(ec) {
					var fontSize = ec / 3;
					z6.font = bA.qr.si(1, fontSize), z6.fillStyle = bB.ny, z6.fillText("100%", ec, ec + .1 * fontSize)
				}(ec)
			} else {
				for (aB = 0; aB <= aD.y8; aB++) 0 < a3P[aB] && (! function(aB, ec, eA, aVH, aVI) {
					z6.fillStyle = bg.aVP[bg.km[aB]], z6.beginPath(), z6.arc(ec, ec, eA, aVH, aVI), z6.lineTo(ec, ec), z6.fill()
				}(aB, ec, eA, aVH, aVI = aVH + 2 * Math.PI * a3P[aB] / f4), function(ec, eA, aVH, aVI) {
					var fW = (aVI - aVH) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eA * Math.min(fW, .37);
					fontSize < 8 || (aVH = (aVH + aVI) / 2, aVI = (__fx.settings.detailedTeamPercentage ? (100 * fW).toFixed(2) : Math.floor(100 * fW + .5)) + "%", eA *= .525 - Math.max(.6 * (fW - .7), 0), z6.font = bA.qr.si(1, fontSize), z6
						.fillStyle = bB.ny, z6.fillText(aVI, ec + Math.cos(aVH) * eA, ec + Math.cos(aVH + 1.5 * Math.PI) * eA))
				}(ec, eA, aVH, aVI), 0 !== aB && aVN(ec, eA, aVH), aVH = aVI);
				aVN(ec, eA, 1.5 * Math.PI)
			}!
		function(ec, eA) {
			z6.beginPath(), z6.arc(ec, ec, eA, 0, 2 * Math.PI), z6.stroke()
		}(ec, eA)
	}

	function aVN(ec, eA, aVQ) {
		z6.beginPath(), z6.moveTo(ec, ec), z6.lineTo(ec + Math.cos(aVQ) * eA, ec + Math.cos(aVQ + 1.5 * Math.PI) * eA), z6.stroke()
	}
	this.dd = function() {
		if (aD.hy) {
			aV9 = 0, a3P = new Uint32Array(aD.y8 + 1);
			for (var aB = aD.y8; 0 <= aB; aB--) a3P[aB] = 0;
			for (aB = al.kv - 1; 0 <= aB; aB--) a3P[bg.f2[al.l0[aB]]] += 1;
			this.resize()
		} else a3P = z6 = canvas = null
	}, this.a8o = function() {
		return i
	}, this.resize = function() {
		aD.hy && (i = Math.floor(.95 * (a0.a1.iD() && !aD.nR ? .18 * h.min : .13 * h.iE)), i = (i *= 1 + (.5 + .2 * a0.a1.iD()) * aD.nR) + i % 2, gap = Math.max(1, .015 * i), tF = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (z6 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, z6.strokeStyle = bB.ny, bA.qr.textAlign(z6, 1), bA.qr.textBaseline(z6, 1), aVB())
	}, this.kw = function(aVC) {
		aVC && aVD();
		var eT, aVC = this.ky();
		return bg.km[aVC] || (aVC = function() {
			for (var kx = -1, aB = aD.y8; 1 <= aB; aB--)(-1 === kx || a3P[aB] > a3P[kx]) && (kx = aB);
			return kx
		}(), eT = ag.gs[m0[0]], -1 !== aVC && a3P[aVC] > eT) ? a3P[aVC] : eT
	}, this.a1p = function() {
		return aV9 = 31, this.eX(), this.ky()
	}, this.ky = function() {
		for (var kx = 0, aB = aD.y8; 0 < aB; aB--) a3P[aB] > a3P[kx] && (kx = aB);
		return kx
	}, this.kQ = function(aVF) {
		for (var gX = 0, l0 = al.l0, f2 = bg.f2, f4 = al.kv, fi = bO.fi, aB = 0; aB < f4; aB++) {
			var gc = l0[aB];
			f2[gc] === aVF && (fi[gX++] = gc)
		}
		bO.fZ[0] = gX
	}, this.kz = function(aVF) {
		for (var gX = 0, l0 = al.l0, f2 = bg.f2, f4 = al.kv, fi = bO.fi, aB = 0; aB < f4; aB++) {
			var gc = l0[aB];
			f2[gc] !== aVF && (fi[gX++] = gc)
		}
		bO.fZ[0] = gX
	}, this.a4I = function() {
		for (var gX = 0, aB = aD.y8; 0 <= aB; aB--) gX += 0 < a3P[aB];
		return gX
	}, this.eX = function() {
		aD.hy && 32 <= ++aV9 && (aV9 = 0, aVD())
	}, this.ml = function() {
		aD.hy && aV8 && aVB()
	}, this.vU = function() {
		aD.hy && (aD.nR ? vV.drawImage(canvas, bc.gap, bc.gap) : vV.drawImage(canvas, bc.gap, a8n + 2 * bc.gap))
	}
}

function da() {
	function aVW(fB, f4, fD, a0U, aA5, fU) {
		if (!(fD < 1 || aA5 < fD))
			for (var aB = 0; aB <= f4; aB++) {
				var ei = bM.ik(fB, fD);
				if (a0U(ei)) return ei >> 2;
				fB += fU
			}
		return -1
	}

	function aVa(fD, f4, fB, a0U, aVU, fU) {
		if (!(fB < 1 || aVU < fB)) {
			f4 = Math.max(f4, 0);
			for (var aB = 0; aB <= f4; aB++) {
				var ei = bM.ik(fB, fD);
				if (a0U(ei)) return ei >> 2;
				fD += fU
			}
		}
		return -1
	}

	function aVe(iV, iW, aVR) {
		return -1 !== iW && (-1 === iV || bM.iX(iW, aVR) < bM.iX(iV, aVR)) ? iW : iV
	}
	this.hT = function(aVR) {
		return this.a0w(aVR, function(ei) {
			return ac.ez(ei)
		})
	}, this.hZ = function(aVR) {
		return this.a0w(aVR, function(ei) {
			return ac.aIL(ei, aD.eo)
		})
	}, this.a0w = function(aVR, a0U) {
		return function(aVR, aVS, a0U) {
			for (var hJ = bM.fC(aVR), hL = bM.fE(aVR), aVU = bS.fF - 2, aA5 = bS.fG - 2, aVV = -1, f7 = 0; f7 < aVS; f7++) {
				var aA4 = Math.max(hJ - f7, 1),
					aMT = Math.max(hL - f7, 1),
					yj = Math.min(hJ + f7, aVU),
					yi = Math.min(hL + f7, aA5),
					iV = aVW(hJ, yj - hJ, hL - f7, a0U, aA5, 1),
					iW = aVW(hJ - 1, hJ - aA4 - 1, hL - f7, a0U, aA5, -1),
					yj = aVW(hJ, yj - hJ, hL + f7, a0U, aA5, 1),
					aA4 = aVW(hJ - 1, hJ - aA4 - 1, hL + f7, a0U, aA5, -1),
					aVZ = aVa(hL, yi - hL - 1, hJ - f7, a0U, aVU, 1),
					aVb = aVa(hL - 1, hL - aMT - 2, hJ - f7, a0U, aVU, -1),
					yi = aVa(hL, yi - hL - 1, hJ + f7, a0U, aVU, 1),
					aMT = aVa(hL - 1, hL - aMT - 2, hJ + f7, a0U, aVU, -1);
				if (aVV = aVe(aVV, iV, aVR), aVV = aVe(aVV, iW, aVR), aVV = aVe(aVV, yj, aVR), aVV = aVe(aVV, aA4, aVR), aVV = aVe(aVV, aVZ, aVR), aVV = aVe(aVV, aVb, aVR), aVV = aVe(aVV, yi, aVR), 0 <= (aVV = aVe(aVV, aMT, aVR)) && f7 *
					f7 >= bM.iX(aVV, aVR)) return aVV
			}
			return -1
		}(aVR, bM.iB(), a0U)
	}
}

function d3() {
	function aVg(key) {
		var aSf;
		return "undefined" == typeof URLSearchParams || (aSf = window.location.search, "string" != typeof(aSf = new URLSearchParams(aSf).get(key))) || aSf.length < 1 ? null : aSf
	}
	this.dl = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aVg("account");
				if (!value && !(value = aVg("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.t8, new t9(1e3, {
					tA: 0,
					t6: value,
					t7: 0
				})), 1
			}()) {
			var value = aVg("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1z = new URL(window.location.href);
		a1z.search = "";
		try {
			return history.replaceState(null, "", a1z.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aPY = function(key, value) {
		if (0 === a0.id) try {
			var a1z = new URL(window.location.href),
				gc = a1z.searchParams;
			gc.set(key, value), a1z.search = gc.toString(), history.replaceState(null, "", a1z.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVi, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.fV(32768 * aB, 100);
		this.a5U(0)
	}, this.value = function(gc) {
		return g[gc]
	}, this.aML = function() {
		return bL.fV(aVi - 1, 2)
	}, this.a5U = function(aLz) {
		aVi = 2 * aLz % 32768 + 1
	}, this.random = function() {
		return aVi = 167 * aVi % 32768
	}, this.jg = function(mt) {
		return bL.fV(mt * this.random(), 32768)
	}, this.kH = function(gc) {
		return 0 !== gc && this.random() < this.value(gc)
	}, this.j2 = function(fN, fO) {
		return fN + this.jg(fO - fN)
	}
}

function cz() {
	this.qB = new aVj, this.a5e = new aVk, this.aJc = new aVl, this.dd = function() {
		aD.hD || this.qB.dd()
	}, this.eX = function() {
		aD.hD || (this.qB.eX(), 3 !== t.t8) || bf.kM() % 15 != 5 && 2 !== aD.a0s || t.a5x().aSg()
	}, this.aSj = function() {
		0 === aD.a0s && aa.aHD(), aD.a5O.a5n(), aD.data.canvas = null, b0.y.close(b0.y.a2C, 3257), b0.y.a2C = 0, aD.data.isReplay = 1, aD.a5S()
	}, this.aSi = function(qY) {
		var aB = qY.indexOf("=");
		return 0 <= aB ? qY.substring(aB + 1) : qY
	}, this.aSh = function(qY) {
		return qY
	}
}

function aVj() {
	this.aVn = null, this.aVo = null, this.aVp = null, this.aVq = null, this.aVr = null, this.aVs = null, this.a5d = "";
	var aVt = 0;
	this.dd = function() {
		this.aVn = [], this.aVo = [], this.aVp = [], this.aVq = [], this.aVr = [0], this.aVs = [0], aVt = 0, this.a5d = ""
	}, this.qC = function(id, fn, fp, fr) {
		aD.hD || 2 === aD.a0s || (0 === this.aVr[aVt] && (this.aVs[aVt] ? (this.aVr.push(1), this.aVs.push(0), aVt++) : this.aVr[aVt] = 1), this.aVn.push(id), this.aVo.push(fn), this.aVp.push(void 0 === fp ? 0 : fp), this.aVq.push(void 0 === fr ?
			0 : fr), this.aVs[aVt]++)
	}, this.eX = function() {
		0 === this.aVr[aVt] ? this.aVs[aVt]++ : (this.aVr.push(0), this.aVs.push(0), aVt++)
	}
}

function aVl() {
	var aVu = 0;

	function aVy(qY, id) {
		aVu || (id ? 1 === id ? aN.a6w = L(475) + ": " + qY : t.u(4, 3, new v(L(476), qY, 1)) : t.u(4, 3, new v("⚠️ " + L(474), qY, 1)))
	}
	this.xE = function(qY, aVv) {
		var iN, qj;
		return aVu = aVv, bG.tB.x6(bG.tB.x4(bG.tB.x2(qY))), aN.a6w = "", !! function() {
			if (bH.size < 10) aVy("File Too Small");
			else {
				var aW0 = bH.pz(12),
					r = (aW0 !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aVy(r = (r += "   Found: " + aW0) + ("   Compatible at " + b0.y.a1J() + "/" + aW0), 1)), bH.pz(12)),
					aW1 = bH.pz(31);
				if (aW1 !== bH.size) aVy("Size Error: " + aW1 + " " + bH.size);
				else if (function(j, aW0) {
						for (var gc = bH.aC, f4 = bH.size, aUy = aW0, aB = 3; aB < f4; aB++) aUy = aUy + gc[aB] & 4095;
						return aUy === j || (aVy("Hash Error: " + aUy + " " + j + " " + f4), !1)
					}(r, aW0)) return 1
			}
			return
		}() && (iN = bH, (qj = aD.data = new a5N).mapType = iN.pz(2), qj.mapProceduralIndex = iN.pz(8), qj.mapRealisticIndex = iN.pz(8), qj.mapSeed = iN.pz(14), qj.mapName = iN.aW3(5), 2 === qj.mapType && iN.aW4(), qj.passableWater = iN.pz(
			1), qj.passableMountains = iN.pz(1), qj.playerCount = iN.pz(10), qj.humanCount = iN.pz(10), qj.selectedPlayer = iN.pz(9), qj.gameMode = iN.pz(1), qj.playerMode = iN.pz(2), qj.battleRoyaleMode = iN.pz(2), qj.numberTeams = iN.pz(4),
			qj.isZombieMode = iN.pz(1), qj.isContest = iN.pz(1), qj.isReplay = iN.pz(1), qj.elo = iN.aW5(2, 14, 2), qj.colorsType = iN.pz(1), qj.colorsPersonalized = iN.pz(1), qj.colorsData = iN.aW5(10, 18, 512), qj.selectableColor = iN.pz(
			1), qj.teamPlayerCount = iN.aW5(4, 10, 9), qj.neutralBots = iN.pz(1), qj.botDifficultyType = iN.pz(2), qj.botDifficultyValue = iN.pz(4), qj.botDifficultyTeam = iN.aW5(4, 4, 9), qj.botDifficultyData = iN.aW5(10, 4, 512), qj
			.spawningType = iN.pz(2), qj.spawningSeed = iN.pz(14), qj.spawningData = iN.aW5(11, 12, 1024), qj.selectableSpawn = iN.pz(1), qj.playerNamesType = iN.pz(2), qj.playerNamesData = iN.aW6(10, 5, 512), qj.selectableName = iN.pz(1), qj
			.aIncomeType = iN.pz(2), qj.aIncomeValue = iN.pz(8), qj.aIncomeData = iN.aW5(10, 8, 512), qj.tIncomeType = iN.pz(2), qj.tIncomeValue = iN.pz(8), qj.tIncomeData = iN.aW5(10, 8, 512), qj.iIncomeType = iN.pz(2), qj.iIncomeValue = iN
			.pz(8), qj.iIncomeData = iN.aW5(10, 8, 512), qj.sResourcesType = iN.pz(2), qj.sResourcesValue = iN.pz(11), qj.sResourcesData = iN.aW5(10, 11, 512), qj.a5l = iN.aW5(10, 30, 0), !! function() {
				var iN = bH,
					xF = iN.pz(5),
					aW7 = iN.pz(30),
					aW8 = iN.pz(30);
				if (aW7 + aW8 > 8 * iN.size) return void aVy("Corrupted File");
				return function(f4) {
						var aWB = new Uint8Array(f4),
							aWC = new Uint16Array(f4),
							aWD = new Uint32Array(f4),
							aWE = new Uint32Array(f4);
						b9.qB.aVn = aWB, b9.qB.aVo = aWC, b9.qB.aVp = aWD, b9.qB.aVq = aWE;
						for (var aB = 0; aB < f4; aB++) {
							var id = bH.pz(4);
							aWB[aB] = id, aWC[aB] = bH.pz(9), 0 === id ? aWD[aB] = bH.pz(22) : 1 === id ? (aWD[aB] = bH.pz(10), aWE[aB] = bH.pz(10)) : 2 === id ? (aWD[aB] = bH.pz(10), aWE[aB] = bH.pz(9)) : 3 === id ? (aWD[aB] = bH.pz(10),
								aWE[aB] = bH.pz(27)) : 4 === id ? (aWD[aB] = bH.pz(10), aWE[aB] = bH.pz(16)) : 5 === id || 6 === id ? aWD[aB] = bH.pz(10) : 7 === id ? aWD[aB] = bH.pz(1) : 10 === id && (aWD[aB] = bH.pz(20), aWE[aB] = bH
								.pz(22))
						}
					}(aW7),
					function(f4, xF) {
						var aVr = new Uint8Array(f4),
							aVs = new Array(f4);
						aVs.fill(0), b9.qB.aVr = aVr, b9.qB.aVs = aVs;
						for (var aB = 0; aB < f4; aB++) aVr[aB] = bH.pz(1), aVs[aB] = bH.pz(xF)
					}(aW8, xF), 1
			}()) && (bH.eB < 8 * bH.size - 13 || bH.eB > 8 * bH.size ? (aVy("Out Of Bounds Error: " + bH.eB + " " + 8 * bH.size), !1) : (b9.qB.a5d = qY, 2 !== aD.data.mapType || (aVy("Load base64 image...", 2), aVv)))
	}, this.aJd = function(aJ3, aVz) {
		var a3k = document.createElement("canvas"),
			i6 = a3k.getContext("2d");
		if (a3k.width = aJ3.width, a3k.height = aJ3.height, i6.drawImage(aJ3, 0, 0), aD.data.canvas = a3k, aVu || aVz) return aD.a0s ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aSj()
	}
}

function aVk() {
	this.a0K = function() {
		var xF = function() {
				for (var aVs = b9.qB.aVs, f4 = aVs.length, max = 0, aB = 0; aB < f4; aB++) max = Math.max(max, aVs[aB]);
				return xM(Math.max(max, 1))
			}(),
			i = (qj = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.eB += 43, i.a8(2, qj.mapType), i.a8(8, qj.mapProceduralIndex), i.a8(8, qj.mapRealisticIndex), i.a8(14, qj.mapSeed), i.aWL(qj.mapName, 5), 2 === qj.mapType && i.aWM(qj.canvas),
				i.a8(1, qj.passableWater), i.a8(1, qj.passableMountains), i.a8(10, qj.playerCount), i.a8(10, qj.humanCount), i.a8(9, qj.selectedPlayer), i.a8(1, qj.gameMode), i.a8(2, qj.playerMode), i.a8(2, qj.battleRoyaleMode), i.a8(4, qj
					.numberTeams), i.a8(1, qj.isZombieMode), i.a8(1, qj.isContest), i.a8(1, qj.isReplay), i.dj(qj.elo, 2, 14), i.a8(1, qj.colorsType), i.a8(1, qj.colorsPersonalized), i.dj(qj.colorsData, 10, 18), i.a8(1, qj.selectableColor), i.dj(
					qj.teamPlayerCount, 4, 10), i.a8(1, qj.neutralBots), i.a8(2, qj.botDifficultyType), i.a8(4, qj.botDifficultyValue), i.dj(qj.botDifficultyTeam, 4, 4), i.dj(qj.botDifficultyData, 10, 4), i.a8(2, qj.spawningType), i.a8(14, qj
					.spawningSeed), i.dj(qj.spawningData, 11, 12), i.a8(1, qj.selectableSpawn), i.a8(2, qj.playerNamesType), i.aWN(qj.playerNamesData, 10, 5), i.a8(1, qj.selectableName), i.a8(2, qj.aIncomeType), i.a8(8, qj.aIncomeValue), i.dj(qj
					.aIncomeData, 10, 8), i.a8(2, qj.tIncomeType), i.a8(8, qj.tIncomeValue), i.dj(qj.tIncomeData, 10, 8), i.a8(2, qj.iIncomeType), i.a8(8, qj.iIncomeValue), i.dj(qj.iIncomeData, 10, 8), i.a8(2, qj.sResourcesType), i.a8(11, qj
					.sResourcesValue), i.dj(qj.sResourcesData, 10, 11), i.dj(qj.a5l, 10, 30), ! function(xF) {
					var i = bE,
						aVn = b9.qB.aVn,
						fn = b9.qB.aVo,
						fp = b9.qB.aVp,
						fr = b9.qB.aVq,
						f4 = aVn.length;
					i.a8(5, xF), i.a8(30, f4), i.a8(30, b9.qB.aVs.length);
					for (var aB = 0; aB < f4; aB++) {
						var ec = aVn[aB];
						i.a8(4, ec), i.a8(9, fn[aB]), 0 === ec ? i.a8(22, fp[aB]) : 1 === ec ? (i.a8(10, fp[aB]), i.a8(10, fr[aB])) : 2 === ec ? (i.a8(10, fp[aB]), i.a8(9, fr[aB])) : 3 === ec ? (i.a8(10, fp[aB]), i.a8(27, fr[aB])) : 4 === ec ? (i
							.a8(10, fp[aB]), i.a8(16, fr[aB])) : 5 === ec || 6 === ec ? i.a8(10, fp[aB]) : 7 === ec ? i.a8(1, fp[aB]) : 10 === ec && (i.a8(20, fp[aB]), i.a8(22, fr[aB]))
					}
				}(xF), ! function(xF) {
					for (var i = bE, aVr = b9.qB.aVr, aVs = b9.qB.aVs, f4 = aVr.length, aB = 0; aB < f4; aB++) i.a8(1, aVr[aB]), i.a8(xF, aVs[aB])
				}(xF), bE.eB),
			qj = bL.fV(i - 1, 6) + 1,
			xF = (bD.aUR(6 * qj) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.eB = 24, i.a8(31, i.g.length), i.eB = 12, i.a8(12, function() {
					for (var g = bE.g, f4 = g.length, aUy = l.rVersion, aB = 3; aB < f4; aB++) aUy = aUy + g[aB] & 4095;
					return aUy
				}())
			}(), bH.dd(bE.g), bF.tB.tC(bF.tB.tD(qj)));
		return bH.uY(), bE.dd(), xF
	}
}

function cp() {
	var ec, bu = !1,
		aWP = !1,
		aWQ = -1e4,
		aWR = -1,
		aWS = 0;

	function resize(aWW) {
		ec = 0, ab.ta() && (aWU(aWW) || bu) && (bu = !1, bc.resize(), bW.aCl.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0s ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a9u()) : (aa.aHF(), aa.aHG()), bf.dk = !0)
	}

	function aWT(fW) {
		return fW && 128 < fW ? Math.floor(fW) : 128
	}

	function aWU(aWW) {
		var i, j, aWY, tF, a9I;
		if (!(0 < h.sq)) return tF = aWT(document.documentElement.clientWidth), a9I = aWT(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tF, j = a9I, aWY = 0 !== a0.id || i < j ?
			700 : 1200, aWY = Math.min(aWY / ((i + j) / 2), 1), aWY = 0 === bj.eP.data[1].value ? 2 * aWY / 3 : Math.min(aWY + (bj.eP.data[1].value - 1) * (1 - aWY) / 2, 1), h.k = (window.devicePixelRatio || 1) * aWY, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aWW && !aWP ? (aWP = !0, t.removeChild(document.body, a2P)) : aWP && (aWP = !1, document.body.appendChild(a2P)), i = Math.floor(.5 + tF * h.k), j = Math.floor(.5 + a9I * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCN(i, j), h.max = a7B(i, j), h.iE = bL.fV(i + j, 2), h.vR = i / j, a2P.width = i, a2P.height = j, a2P.style.width = tF + "px", a2P.style.height = a9I + "px", aWR = bf.eS + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iE = 0, this.vR = 1, this.k = 1, this.sq = 0, this.de = function() {
		this.i = aWT(document.documentElement.clientWidth) + 2, this.j = aWT(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		ec = 1, a2P = document.getElementById("canvasA"), 2 === a0.id && (a2P.style.webkitUserSelect = "none"), (vV = a2P.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aWU(0)
	}, this.eX = function() {
		50 <= ++ec && resize(0), -1 === aWR || bf.eS < aWR || (aWR = -1, 2e3 * ++aWS >= bf.eS + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dn = function(je) {
		bu = !0, resize(je)
	}, this.a34 = function() {
		aWQ + 1e3 > bf.eS || (aWQ = bf.eS, resize(0))
	}
}

function dH() {
	this.aUa = new aWa, this.a1k = new aWb, this.aUr = new aWc
}

function aWc() {
	this.pz = function() {
		return 69
	}, this.a0K = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aWb() {
	this.a1l = function() {
		for (var gc, f4 = al.kv, a0g = al.l0, a1U = ag.a1U, a96 = this.aIm(), aB = 0; aB < f4; aB++) gc = a0g[aB], bA.gQ.jm(gc) || (a1U[gc] = a96);
		var qG = ag.qG,
			jS = ag.jS,
			jT = ag.jT,
			a1S = ag.a1S,
			f4 = aD.kP;
		for (aB = 0; aB < f4; aB++)(0 === a1S[aB] || jT[aB] < 1 || 2 * qG[aB] > 3 * (jS[aB] + jT[aB])) && (a1U[aB] = 0);
		var a1i = 0;
		for (aB = 0; aB < f4; aB++) a1i += 0 < a1U[aB];
		return a1i
	}, this.aIm = function() {
		return Math.min(65535, bf.kM())
	}
}

function aWa() {
	function aWg(g, fW, hw) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fW >> (aB + hw) % 30 & 1)) % 256
	}
	this.eX = function(aWd, aWe) {
		var g = new Uint8Array(256);
		return function(g, aWd, aWe) {
				var aB, aWi = 3 + (4 + aWd) % 32768,
					aWj = 12 + aWe % 32768,
					aWk = 17 + ((aWd & aWe) + (aWd | aWe) + aWd) % 32768;
				for (aB = 0; aB < 256; aB++) aWi = 1 + aWi * aWj % aWk, g[aB] = aWi % 256
			}(g, aWd, aWe), aWg(g, aWd, 2), aWg(g, aWe, 7),
			function(g) {
				var aB, fW, eB = 0;
				for (aB = 0; aB < 3e4; aB++) fW = g[eB], g[eB] = (fW + aB + g[(eB + aB) % 256]) % 256, eB = (fW + aB + eB + (fW & eB)) % 256
			}(g),
			function(g) {
				var aB, a9I = 1,
					ty = 1;
				for (aB = 0; aB < 256; aB += 2) a9I = (1 + a9I) * (g[aB] + 1) % 1073741824, ty = (1 + ty) * (g[aB + 1] + 1) % 1073741824;
				return [a9I, ty]
			}(g)
	}, this.aUb = function(aWl, aWm, aWn, result) {
		for (var gX = 1 << aWl, aB = 0; aB < gX; aB++)
			if (this.aWo(aB, aWm, aWn) === result) return aB;
		return 0
	}, this.aWo = function(aWp, aWm, aWn) {
		for (var yH = aWm + aWp, yQ = aWn + aWp, fW = yH + yQ & 2147483647, fN = 1; fN <= 16; fN++) fW = (fW = (fW ^ fW >> fN) >>> 1 + (3 & yH)) * (7 + (1023 & (yH | yQ))) & 1073741823, yQ >>= 1 + (1 & (yH >>= 1 + (1 & (fW += 65535 & yQ))));
		return fW &= 1073741823
	}
}

function cm() {
	var aWq, aWr, iI, aWs;
	this.dd = function() {
		var aB, fB, fD, aUs, aWt, i, j, z6, i3, xW, fW, gc, fK, fN, aWw;
		if (function() {
				if (iI = !0, aWs = "rgb(" + bS.xU[0] + "," + bS.xU[1] + "," + bS.xU[2] + ")", bS.aM8(bS.ek)) return 1;
				return iI = !1, 0
			}()) aWr = null;
		else {
			for (aWq = bL.fV(96, 4), aWt = 1 === bS.ek ? (aUs = 0, 160) : (aUs = 128, 32), aWs = "rgb(" + aUs + "," + aUs + "," + aUs + ")", aWr = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aWr[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fF : aWq, j = aB % 2 == 0 ? aWq : bS.fG + 2 * aWq, aWr[aB].width = i, aWr[aB].height = j, xW = (i3 = (z6 = aWr[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fD = aWq - 1; 0 <= fD; fD--)
						for (fW = aWt + Math.floor((fD + 1) * (aUs - aWt) / (aWq + 1)), fB = i - 1; 0 <= fB; fB--) xW[gc = 4 * ((0 === aB ? aWq - fD - 1 : fD) * i + fB)] = fW, xW[gc + 1] = fW, xW[gc + 2] = fW, xW[gc + 3] = 255;
				else {
					for (fB = aWq - 1; 0 <= fB; fB--)
						for (fW = aWt + Math.floor((fB + 1) * (aUs - aWt) / (aWq + 1)), fD = j - 1 - aWq; aWq <= fD; fD--) xW[gc = 4 * (fD * i + (3 === aB ? aWq - fB - 1 : fB))] = fW, xW[gc + 1] = fW, xW[gc + 2] = fW, xW[gc + 3] = 255;
					for (fN = 1; 0 <= fN; fN--)
						for (fB = aWq - 1; 0 <= fB; fB--)
							for (fD = aWq - 1; 0 <= fD; fD--) fK = (Math.pow(fB * fB + fD * fD, .5) + 1) / (aWq + 1), fW = aWt + Math.floor((1 < fK ? 1 : fK) * (aUs - aWt)), xW[gc = 4 * ((0 === fN ? aWq - fD - 1 : fD + fN * (j - aWq)) * i + (
								1 === aB ? fB : aWq - fB - 1))] = fW, xW[gc + 1] = fW, xW[gc + 2] = fW, xW[gc + 3] = 255
				}
				z6.putImageData(i3, 0, 0)
			}
			aWw = aWt, bS.xP.fillStyle = "rgb(" + aWw + "," + aWw + "," + aWw + ")", bS.xP.fillRect(0, 0, bS.fF, 1), bS.xP.fillRect(0, bS.fG - 1, bS.fF, 1), bS.xP.fillRect(0, 0, 1, bS.fG), bS.xP.fillRect(bS.fF - 1, 0, 1, bS.fG)
		}
	}, this.z0 = function() {
		var fN = iI ? 0 : -aWq;
		aNs(fN, fN, bS.fF - 2 * fN, bS.fG - 2 * fN, ba.aWx, ba.aWy, ba.aWz, ba.aX0) || (vV.fillStyle = aWs, vV.fillRect(0, 0, h.i, h.j))
	}, this.vU = function() {
		iI || (aNr(0, -aWq, bS.fF, aWq, ba.aWx, ba.aWy, ba.aWz, ba.aX0) && vV.drawImage(aWr[0], ba.aX1, ba.aX2 - aWq), aNr(bS.fF, -aWq, aWq, bS.fG + 2 * aWq, ba.aWx, ba.aWy, ba.aWz, ba.aX0) && vV.drawImage(aWr[1], ba.aX1 + bS.fF, ba.aX2 - aWq),
			aNr(0, bS.fG, bS.fF, aWq, ba.aWx, ba.aWy, ba.aWz, ba.aX0) && vV.drawImage(aWr[2], ba.aX1, ba.aX2 + bS.fG), aNr(-aWq, -aWq, aWq, bS.fG + 2 * aWq, ba.aWx, ba.aWy, ba.aWz, ba.aX0) && vV.drawImage(aWr[3], ba.aX1 - aWq, ba.aX2 - aWq))
	}
}

function d6() {
	this.aIk = new aX3, this.z3 = new aX4, this.y = new aX5, this.ir = new aX6, this.aWw = new aX7, this.mK = new aX8, this.kD = new aX9, this.lC = new aXA, this.aXB = new aXC, this.aXD = new aXE, this.mV = new aXF, this.he = new aXG, this.ll =
		new aXH, this.lE = new aXI, this.hh = new aXJ, this.mO = new aXK, this.qO = new aXL, this.dd = function() {
			this.ll.dd(), this.z3.dd(), this.y.dd(), this.ir.dd(), this.aWw.dd(), this.aXD.dd(), this.mO.dd()
		}, this.vU = function() {
			this.aXD.vU(), this.z3.vU()
		}
}

function aX9() {
	this.eX = function(player) {
		return !!bN.mV.mW(player) && !(bN.y.kT[player] >= Math.max(3 * ao.performance.ld, aE.kd[aE.hn[player]]) || !bA.gQ.mX(player, aE.kb[aE.hn[player]], 32, 0)) && (aW.aCA() ? function(player) {
			var aXO = bN.lE.aCD(),
				f4 = aXO.length;
			if (0 === f4) return !1;
			aXO = aXO[ay.jg(f4)], f4 = bN.y.mI[aXO];
			if (bN.mO.mP(player, f4)) return !1;
			return !! function(player, mR) {
				var mR = bM.ip(bN.y.mU[mR]),
					hJ = bM.fC(mR),
					mR = bM.fE(mR),
					nO = ag.ix[player],
					nP = ag.iz[player],
					nb = ag.iy[player],
					player = ag.j0[player],
					nb = Math.max(hJ - nb, nO - hJ),
					nO = Math.max(mR - player, nP - mR);
				return nb < 100 && nO < 100
			}(player, aXO) && !!bN.hh.qN(player, f4, 1) && (bA.gQ.mZ(player), bN.y.ma(player), !0)
		}(player) : !!(ao.jG.eX(player) || ao.j5.eX(player) || ao.j7.eX(player)) && (function(player) {
			bO.fg[1] = 4, bA.gQ.mZ(player), bN.y.ma(player)
		}(player), !0))
	}
}

function aXK() {
	var aXR = 0,
		aXS = null;
	this.dd = function() {
		null === aXS && (aXS = new Uint16Array(2 * bN.y.kd)), aXR = 0
	}, this.eb = function(aXT, mO) {
		var aXU = aXS;
		aXU[aXR++] = aXT, aXU[aXR++] = mO
	}, this.mP = function(player, mN) {
		for (var aXU = aXS, f4 = aXR, aB = 0; aB < f4; aB += 2)
			if (aXU[aB] === mN && bN.lE.aXV(aXU[aB + 1]) && player === bN.y.mJ[bO.fg[2]] >> 3) return !0;
		return !1
	}, this.aXW = function(aXX) {
		var mK = bN.y.mG[aXX];
		if (!(mK < 64)) {
			for (var mN = bN.y.mI[aXX], aXU = aXS, f4 = aXR, aB = f4 - 2; 0 <= aB; aB -= 2)
				if (aXU[aB] === mN) {
					{
						aXc = void 0;
						var aXc = aXU[aB + 1];
						bN.lE.aXV(aXc) && bN.mO.aXk(bO.fg[2])
					}
					aXU[aB] = aXU[f4 - 2], aXU[aB + 1] = aXU[f4 - 1], f4 -= 2
				} aXR = f4
		}
	}, this.aXZ = function(aXa, aXb) {
		for (var aXc = bN.y.mI[aXa], mN = -1, aXU = aXS, f4 = aXR, aB = 1; aB < f4; aB += 2)
			if (aXU[aB] === aXc) {
				mN = aXU[aB - 1];
				break
			} if (-1 === mN) return !1;
		if (!bN.lE.aXV(mN)) return !1;
		var aXX = bO.fg[2],
			lk = bN.y.mH[aXX];
		if (aXb === lk[lk.length - 1]) bN.y.mH[aXa] = bN.ll.aXd(bN.y.mH[aXa], bN.ll.lt(lk));
		else {
			var aXe = bN.lE.aXf(lk, aXb);
			if (-1 === aXe) return !1;
			var aXg = bN.y.mT[aXX];
			aXe === aXg ? (aXX = bM.ip(bN.y.mU[aXX]), bN.y.mH[aXa] = bN.ll.aXi(bN.y.mH[aXa], lk, aXe, aXb, bM.iU(lk[aXe], aXb) > bM.iU(lk[aXe], aXX))) : bN.y.mH[aXa] = bN.ll.aXi(bN.y.mH[aXa], lk, aXe, aXb, aXg < aXe)
		}
		return !0
	}, this.aXk = function(aXl) {
		var lk, lK = bN.y,
			mK = lK.mG[aXl];
		return mK % 64 != 5 && (lk = lK.mH[aXl], lK.aXm[aXl] = 65535 - lK.aXm[aXl], lK.mT[aXl] = lk.length - lK.mT[aXl] - 2, lK.mH[aXl] = bN.ll.lt(lk), lK.mG[aXl] = mK - mK % 64 + 5, !0)
	}
}

function aXF() {
	this.mW = function(player) {
		return !!aD.data.passableWater && bN.y.mF !== bN.y.kd && bN.y.kT[player] !== bN.y.aXn && 0 !== ag.gl[player].length
	}, this.qJ = function(aVR) {
		var mK = bO.fg[1];
		return !(4 <= mK || !bN.lE.aXo(bM.eu(aVR))) && ac.ez(bM.eu(bM.it(aVR, mK)))
	}
}

function aX3() {
	this.aIl = function(player) {
		for (var a8W = bN.y.a8W, tS = player << 3, aB = tS + bN.y.kT[player] - 1; tS <= aB; aB--) this.aXp(a8W[aB])
	}, this.aXp = function(aXq) {
		var y = bN.y,
			aXr = y.mF - 1,
			aXs = y.mJ[aXq],
			aXt = y.aXu[aXq],
			aXv = y.mU[aXq];
		y.mF = aXr, y.mJ[aXq] = y.mJ[aXr], y.mU[aXq] = y.mU[aXr], y.aXm[aXq] = y.aXm[aXr], y.a7S[aXq] = y.a7S[aXr], y.aXu[aXq] = y.aXu[aXr], y.mI[aXq] = y.mI[aXr], y.mG[aXq] = y.mG[aXr], y.aXw[aXq] = y.aXw[aXr], y.mH[aXq] = y.mH[aXr], y.mT[aXq] =
			y.mT[aXr], y.a8W[y.mJ[aXq]] = aXq,
			function(aVQ) {
				var player = aVQ >> 3,
					y = bN.y,
					f4 = y.kT[player] - 1,
					aXz = (player << 3) + f4;
				y.kT[player] = f4, aXz !== aVQ && (y.a8W[aVQ] = y.a8W[aXz], y.mJ[y.a8W[aVQ]] = aVQ)
			}(aXs), bN.ir.ir[bM.iq(y.mU[aXq])][y.aXu[aXq]] = aXq, aXr = bM.iq(aXv), aXs = aXt, aXr = bN.ir.ir[aXr], y = aXr.pop(), aXs !== aXr.length && (aXr[aXs] = y, bN.y.aXu[y] = aXs)
	}
}

function aX4() {
	var aY1, aY2 = 8,
		aY3 = null;

	function aY8(xW, eq, eB) {
		eq *= 4;
		xW[eq] = 255, xW[1 + eq] = 255, xW[2 + eq] = eB, xW[3 + eq] = 255
	}

	function aYA(i6, aWs) {
		var fB, fD, iO, eq, aYC, aYD, i0 = aY2,
			i3 = bA.qr.getImageData(i6, i0, i0),
			xW = i3.data,
			lK = (i0 >> 1) - .5,
			aYF = bA.qz.a3I(aWs, .5);
		for (bA.qz.a3K(aWs, aYF, 300) || bA.qz.a3M(aWs, 100), fD = 0; fD < i0; fD++)
			for (fB = 0; fB < i0; fB++) aYD = (i0 - 1.5) * (i0 - 1.5) / 4, xW[eq = 4 * (fD * i0 + fB)] = (aYC = (iO = (iO = fB - lK) * iO + (iO = fD - lK) * iO) <= (i0 - 4.5) * (i0 - 4.5) / 4 ? aYF : aWs)[0], xW[1 + eq] = aYC[1], xW[2 + eq] = aYC[2],
				xW[3 + eq] = aYD < iO ? 0 : 255;
		i6.putImageData(i3, 0, 0)
	}
	this.dd = function() {
		var eB, i0, a3k, i6, i3, xW;
		(aY1 = aY1 || new Array(aD.f1)).fill(null), eB = 255, i0 = aY2 + 4, a3k = bA.qr.xL(i0, i0), i6 = bA.qr.getContext(a3k, !0), i3 = bA.qr.getImageData(i6, i0, i0), aY8(xW = i3.data, i0 + 1, eB), aY8(xW, i0 + 2, eB), aY8(xW, 2 * i0 + 1, eB),
			aY8(xW, 2 * i0 - 3, eB), aY8(xW, 2 * i0 - 2, eB), aY8(xW, 3 * i0 - 2, eB), aY8(xW, i0 * (i0 - 3) + 1, eB), aY8(xW, i0 * (i0 - 2) + 1, eB), aY8(xW, i0 * (i0 - 2) + 2, eB), aY8(xW, i0 * (i0 - 2) - 2, eB), aY8(xW, i0 * (i0 - 1) - 3, eB),
			aY8(xW, i0 * (i0 - 1) - 2, eB), i6.putImageData(i3, 0, 0), aY3 = a3k,
			function() {
				if (aD.hy)
					for (var a3k = new Array(bg.km.length), f4 = aD.f1, aY6 = aY1, aBV = bg.aBV, aB = 0; aB < f4; aB++) {
						var a6D = aBV[aB];
						a3k[a6D] || (a3k[a6D] = function(a6D) {
							var a3k = bA.qr.xL(aY2, aY2),
								i6 = bA.qr.getContext(a3k, !0),
								g = bO.fd;
							return g.set(bg.aYB[a6D]), aYA(i6, g), a3k
						}(a6D)), aY6[aB] = a3k[a6D]
					}
			}()
	}, this.vU = function() {
		var aB, player, aYG, aO0, hn, iN, aYI, aYK, aYL, mU = bN.y.mU,
			mJ = bN.y.mJ,
			a7S = bN.y.a7S,
			aXw = bN.y.aXw,
			aYM = aY1,
			aYN = aD.eo,
			f4 = bN.y.mF,
			aYO = h.i,
			aYP = h.j,
			aYQ = bS.fF << 4,
			et = iF,
			ei = et / aY2,
			nO = ih / et,
			nP = ii / et,
			iO = (aYO + ih) / et - nO,
			iR = (aYP + ii) / et - nP,
			i6 = vV;
		for (i6.imageSmoothingEnabled = et < 9, bA.qr.textAlign(i6, 1), bA.qr.textBaseline(i6, 1), aB = 0; aB < f4; aB++) player = mJ[aB] >> 3, hn = a7S[aB], aYG = .9 + .1 * Math.log10(hn), aO0 = (iN = mU[aB]) % aYQ / 16 - aYG, iN = aYP * (Math
			.floor(iN / aYQ) / 16 - aYG - nP) / iR, aYI = -2 * (aYL = et * aYG) * (1 + (aYK = +(player === aYN)) / 8), aYK = aYK * aYL / 4, (aYL = aYO * (aO0 - nO) / iO) < aYI || iN < aYI || aYO + aYK < aYL || aYP + aYK < iN || (aO0 = 2 *
			aYG * ei, aYI = aYG * et, null === (aYK = aYM[player]) && (aYM[player] = aYK = function(player) {
				var a3k = bA.qr.xL(aY2, aY2);
				return aYA(bA.qr.getContext(a3k, !0), ac.a87(player)), a3k
			}(player)), player === aYN && (i6.setTransform(aO0, 0, 0, aO0, aYL - 2 * aO0, iN - 2 * aO0), i6.drawImage(aY3, 0, 0)), i6.setTransform(aO0, 0, 0, aO0, aYL, iN), i6.drawImage(aYK, 0, 0), (aYG = Math.floor(function(hn) {
				if (hn < 1e3) return .42;
				if (hn < 1e4) return .34;
				if (hn < 1e6) return .26;
				if (hn < 1e8) return .19;
				return .15
			}(hn) * aYI)) < 6) || (i6.setTransform(1, 0, 0, 1, 0, 0), i6.fillStyle = aXw[aB] ? bB.oW : bB.ny, i6.font = bA.qr.si(1, aYG), i6.fillText(bA.rq.a09(hn), aYL + aYI, iN + aYI + .1 * aYG));
		i6.imageSmoothingEnabled = !1, i6.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aXE() {
	var aYT;
	this.dd = function() {
		if (aD.hy) {
			var hu = 1 - aD.y9;
			aYT = new Array(bg.km.length);
			for (var aB = aD.y8 - 1; 0 <= aB; aB--) {
				var a6D = bg.km[aB + hu];
				aYT[a6D] = bP.y.aYV(20, bg.aYW[a6D])
			}
			9 === aD.kh && (aYT[1] = bP.y.aYV(20, bg.aYW[1]))
		} else aYT = [bP.y.aYV(20, bg.aYW[7])]
	}, this.vU = function() {
		var ni = iF;
		if (!(5 <= ni)) {
			var aYO = h.i,
				aYP = h.j,
				nO = ih / ni,
				nP = ii / ni,
				nb = (aYO + ih) / ni,
				nc = (aYP + ii) / ni,
				gd = -20 * ni,
				aYY = .5 * gd,
				aYQ = bS.fF << 4,
				f4 = bN.y.mF,
				mU = bN.y.mU,
				mJ = bN.y.mJ,
				aBV = bg.aBV,
				a3k = aYT,
				i6 = vV;
			3 < ni && (i6.globalAlpha = .5 * (5 - ni));
			for (var aB = 0; aB < f4; aB++) {
				var iN = mU[aB],
					fB = aYO * (iN % aYQ / 16 - nO) / (nb - nO) + aYY,
					iN = aYP * (Math.floor(iN / aYQ) / 16 - nP) / (nc - nP) + aYY;
				aYO < fB || aYP < iN || fB < gd || iN < gd || (i6.setTransform(ni, 0, 0, ni, fB, iN), i6.drawImage(a3k[aBV[mJ[aB] >> 3]], 0, 0))
			}
			i6.globalAlpha = 1, i6.setTransform(ni, 0, 0, ni, 0, 0)
		}
	}
}

function aXI() {
	this.aYb = function(player, id) {
		for (var aYc = ag.gl[player], f4 = aYc.length, aB = 0; aB < f4; aB++)
			if (bM.iG(aYc[aB], id)) return !0;
		return !1
	}, this.aYd = function(player, eq) {
		for (var iW, aYe, ei, aYc = ag.gl[player], f4 = aYc.length, i = bS.fF, aYg = bM.fC(eq), aYh = bM.fE(eq), fA = -1, min = bS.fF * bS.fF + bS.fG * bS.fG, id = ac.em(bM.eu(eq)), aB = 0; aB < f4; aB++)(aYe = (aYe = aYg - (iW = (ei = aYc[
			aB]) >> 2) % i) * aYe + (aYe = aYh - ~~((.5 + iW) / i)) * aYe) < min && bM.iG(ei, id) && (min = aYe, fA = iW);
		return fA
	}, this.lF = function(iV, iW) {
		for (var id = ac.em(bM.eu(iW)), iH = bM.i9, ei = bM.eu(iV), aYi = -1, aB = 0; aB < 4; aB++) {
			var et = ei + iH[aB];
			ac.iI(et) && ac.em(et) === id && (-1 === aYi || bM.iX(bM.es(et), iW) < bM.iX(aYi, iW)) && (aYi = bM.es(et))
		}
		return aYi
	}, this.lo = function(player, eq) {
		for (var iH = bM.i9, ei = bM.eu(eq), aB = 0; aB < 4; aB++) {
			var et = ei + iH[aB];
			if (ac.ge(et) && ac.yy(player, et)) return !0
		}
		return !1
	}, this.lp = function(player, eq) {
		for (var iH = bM.i9, ei = bM.eu(eq), aB = 0; aB < 4; aB++) {
			var et = ei + iH[aB];
			if (ac.ev(et)) return !0;
			if (ac.ge(et)) {
				et = ac.ew(et);
				if (player !== et && bs.ex(player, et)) return !0
			}
		}
		return !1
	}, this.mL = function(eq) {
		for (var iH = bM.i9, ei = bM.eu(eq), aB = 0; aB < 4; aB++) {
			var et = ei + iH[aB];
			if (ac.ge(et)) {
				et = ac.ew(et);
				if (bA.gQ.jm(et)) return et
			}
		}
		return -1
	}, this.aXo = function(ei) {
		if (ac.iI(ei))
			for (var iH = bM.i9, aB = 0; aB < 4; aB++)
				if (ac.ez(ei + iH[aB])) return !0;
		return !1
	}, this.nN = function(player, id) {
		for (var tS = player << 3, tT = tS + bN.y.kT[player], mI = bN.y.mI, a8W = bN.y.a8W, aB = tS; aB < tT; aB++) {
			var a8X = a8W[aB];
			if (mI[a8X] === id) return a8X
		}
		return -1
	}, this.nS = function(player) {
		return 0 === bN.y.kT[player] ? -1 : bN.y.a8W[player << 3]
	}, this.a6V = function(le, lf) {
		var f4 = bN.y.mF;
		if (f4 < 1) return -1;
		for (var mU = bN.y.mU, aYj = 80, aQJ = -1, aB = 0; aB < f4; aB++) {
			var fK = bM.iK(le, lf, mU[aB]);
			fK < aYj && (aYj = fK, aQJ = aB)
		}
		return function(aB, le, lf) {
			if (aB < 0) return;
			var aYq = bN.y.mU[aB],
				aYr = bM.iQ(aYq),
				aYq = bM.iT(aYq),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7S[aB]));
			return aB = Math.max(aB, bM.ij(bA.qr.tX(.02, 1.7))), bL.aNz(bM.iP(le), bM.iS(lf), aYr, aYq, aB)
		}(aQJ, le, lf) ? aQJ : -1
	}, this.aXV = function(nL) {
		for (var f4 = bN.y.mF, mI = bN.y.mI, aB = 0; aB < f4; aB++)
			if (mI[aB] === nL) return bO.fg[2] = aB, !0;
		return !1
	}, this.aIh = function(player) {
		for (var tS = player << 3, tT = tS + bN.y.kT[player], a8W = bN.y.a8W, a7S = bN.y.a7S, hn = 0, aB = tS; aB < tT; aB++) hn += a7S[a8W[aB]];
		return hn
	}, this.aYl = function(player, aXl) {
		aXl = bN.y.mH[aXl];
		return this.lo(player, aXl[aXl.length - 1])
	}, this.aYm = function(iV, iW, fK, aYn) {
		var iZ = bM.fC(iV),
			iV = bM.fE(iV),
			ib = bM.fC(iW),
			iW = bM.fE(iW),
			ib = (fK = Math.max(fK, 1), ib - iZ),
			iW = iW - iV,
			iO = bL.fV(Math.abs(ib) * aYn, fK),
			aYn = bL.fV(Math.abs(iW) * aYn, fK);
		return bM.fR(iZ + Math.sign(ib) * iO, iV + Math.sign(iW) * aYn)
	}, this.aXf = function(lk, eq) {
		for (var f4 = lk.length - 1, fB = bM.fC(eq), fD = bM.fE(eq), aB = 0; aB < f4; aB++) {
			var iV = lk[aB],
				iW = lk[aB + 1],
				nO = bM.fC(iV),
				iV = bM.fE(iV),
				nb = bM.fC(iW),
				iW = bM.fE(iW);
			if (!(fB !== nO && fB !== nb && Math.sign(fB - nO) === Math.sign(fB - nb) || fD !== iV && fD !== iW && Math.sign(fD - iV) === Math.sign(fD - iW))) {
				if (nO === nb || iV === iW) return aB;
				if (Math.abs(fB - nO) === Math.abs(fD - iV) && Math.abs(fB - nb) === Math.abs(fD - iW)) return aB
			}
		}
		return -1
	}, this.aCD = function() {
		for (var aYt = m0[0], mJ = bN.y.mJ, mF = bN.y.mF, g = [], aB = 0; aB < mF; aB++) bA.gQ.l3(aYt, mJ[aB] >> 3) && g.push(aB);
		return g
	}, this.lm = function(player, lk) {
		for (var tS = player << 3, tT = tS + bN.y.kT[player], a8W = bN.y.a8W, mH = bN.y.mH, hW = lk[0], l2 = lk[lk.length - 1], aB = tS; aB < tT; aB++) {
			var gc = mH[a8W[aB]];
			if (gc[0] === hW && gc[gc.length - 1] === l2) return !0
		}
		return !1
	}
}

function aXJ() {
	function aYw(player, aXl) {
		aXl = bM.ip(bN.y.mU[aXl]), aXl = ac.em(bM.eu(aXl));
		return !!bN.lE.aYb(player, aXl)
	}

	function aYu(player) {
		return bN.mV.mW(player) && !bN.ll.lr()
	}
	this.hi = function(player, eq) {
		return !!aYu(player) && -1 !== (eq = function(player, eq) {
			for (var f4 = bN.y.mF, mU = bN.y.mU, mJ = bN.y.mJ, aYj = bM.iB(), aQJ = -1, aB = 0; aB < f4; aB++) {
				var fK = bM.iU(eq, bM.ip(mU[aB]));
				fK < aYj && bA.gQ.l3(player, mJ[aB] >> 3) && (aYj = fK, aQJ = aB)
			}
			return aQJ
		}(player, eq)) && !!aYw(player, eq) && (bO.fg[3] = bN.y.mI[eq], !0)
	}, this.pU = function(player, nL) {
		return !!aYu(player) && !!bN.lE.aXV(nL) && !!aYw(player, bO.fg[2])
	}, this.qN = function(player, nL, aYx) {
		return !! function(player, nL, aYx) {
			if (aYu(player) && bN.lE.aXV(nL)) {
				nL = bO.fg[2];
				if (bA.gQ.l3(player, bN.y.mJ[nL] >> 3)) {
					if (function(player, aXl) {
							return bN.lE.aYl(player, aXl) && (bO.g[0] = bN.ll.lt(bN.y.mH[aXl]), bO.fg[1] = 6, !0)
						}(player, nL)) return 1;
					var aXQ = bM.ip(bN.y.mU[nL]),
						aZ1 = bN.lE.aYd(player, aXQ);
					if (-1 !== aZ1) {
						aZ1 = bM.iU(aZ1, aXQ);
						if (!(aYx && 120 < aZ1)) {
							aYx = function(aXl, aZ2, aXQ) {
								var lk = bN.y.mH[aXl],
									aXl = bN.y.mT[aXl],
									aZ4 = bM.iU(aXQ, lk[aXl + 1]);
								if (aZ2 <= aZ4) return bN.lE.aYm(aXQ, lk[aXl + 1], aZ4, aZ2);
								for (var fK = aZ2 - aZ4, f4 = lk.length - 1, aB = aXl + 1; aB < f4; aB++) {
									var aZ5 = bM.iU(lk[aB], lk[aB + 1]);
									if (fK <= aZ5) return bN.lE.aYm(lk[aB], lk[aB + 1], aZ5, fK);
									fK -= aZ5
								}
								return lk[f4]
							}(nL, aZ1, aXQ);
							if (bN.lC.qK(player, aYx, 1)) return bO.fg[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nL, aYx) && (player = bO.fg[2], bN.y.mG[player] = 64 + bN.y.mG[player] % 64, bN.mO.eb(nL, bN.y.mY), !0)
	}
}

function aX8() {
	function aZA(player, hn, aZ8, aXQ) {
		var jY;
		if (ac.ev(aZ8)) jY = aD.f1;
		else {
			if ((jY = ac.ew(aZ8)) === player) return void bd.gU(player, hn - bA.gQ.gT(player, hn), 12);
			if (!bs.ex(player, jY)) return void b8.kR.pj(player, jY, hn)
		}
		ad.jk(player, jY) || ad.k3(player) ? (ag.gW[player].push(aXQ << 2), ad.eb(player, hn, jY), aF.jW(player, !0)) : bd.gU(player, hn, 12)
	}
	this.eX = function() {
		for (var mG = bN.y.mG, mU = bN.y.mU, aXm = bN.y.aXm, aB = bN.y.mF - 1; 0 <= aB; aB--) 65535 === aXm[aB] && function(aB, aXQ, hv) {
			if (6 === hv) {
				if (bN.mO.aXZ(aB, aXQ)) return bN.y.mT[aB]++, bN.y.aXm[aB] = 0, 0
			} else {
				var player = bN.y.mJ[aB] >> 3,
					aB = bN.y.a7S[aB];
				bd.aZ9(player), hv < 4 ? aZA(player, aB, aXQ + bM.i8[hv] << 2, aXQ) : 4 === hv ? function(player, hn, aXQ) {
					var aB, f8, iH = bM.i9,
						et = bM.eu(aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ev(f8)) return aZA(player, hn, f8, aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ge(f8) && !ac.yy(player, f8)) return aZA(player, hn, f8, aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ge(f8)) return aZA(player, hn, f8, aXQ)
				}(player, aB, aXQ) : 5 === hv && function(player, hn, aXQ) {
					var aB, f8, iH = bM.i9,
						et = bM.eu(aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ge(f8) && ac.yy(player, f8)) return aZA(player, hn, f8, aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ge(f8)) return aZA(player, hn, f8, aXQ);
					for (aB = 0; aB < 4; aB++)
						if (f8 = et + iH[aB], ac.ev(f8)) return aZA(player, hn, f8, aXQ)
				}(player, aB, aXQ)
			}
			return 1
		}(aB, bM.ip(mU[aB]), mG[aB] % 64) && (bN.mO.aXW(aB), bN.aIk.aXp(aB))
	}, this.aZ7 = function(player, eq, hv, nL, hn) {
		if (!(5 <= hv)) {
			var aYN = aD.eo;
			if (bA.gQ.hG(aYN) && bs.ex(player, aYN) && player !== aYN && 0 !== ag.gl[aYN].length && bA.gQ.a4L(player, 5)) {
				for (var aZ8, fI = !1, aB = 0; aB < 4; aB++)
					if (aZ8 = eq + bM.i8[aB] << 2, ac.ez(aZ8) && !ac.ev(aZ8) && ac.ew(aZ8) === aYN) {
						fI = !0;
						break
					} fI && (aN.a7b(719, 0), hv = hn < 25e3 ? L(477) + " (" + bA.rq.a09(hn) + ") ⛵" : L(478) + " (" + bA.rq.a09(hn) + ") 🚢", aN.a1G(180, hv, 719, player, bB.oV, bB.nv, -1, !0, void 0, {
					fO: 1,
					nL: nL
				}))
			}
		}
	}
}

function aX5() {
	this.kd = 512, this.aXn = 8, this.mF = 0, this.mY = 0, this.mJ = new Uint16Array(this.kd), this.mU = new Uint32Array(this.kd), this.aXm = new Uint16Array(this.kd), this.a7S = new Uint32Array(this.kd), this.aXu = new Uint16Array(this.kd), this
		.mI = new Uint16Array(this.kd), this.mG = new Uint8Array(this.kd), this.aXw = new Uint8Array(this.kd), this.mH = new Array(this.kd), this.mT = new Uint16Array(this.kd), this.kT = new Uint8Array(aD.f1), this.a8W = new Uint16Array(this.aXn * aD
			.f1), this.dd = function() {
			this.mF = 0, this.mY = 0, this.kT.fill(0), this.mH.fill(null)
		}, this.ma = function(player) {
			var hn = bO.fb[0],
				mK = bO.fg[1],
				lk = bO.g[0],
				aZD = this.mY,
				f4 = this.mF,
				aZE = bM.io(lk[0]),
				aZF = this.kT[player],
				aZG = (player << 3) + aZF;
			this.mJ[f4] = aZG, this.mU[f4] = aZE, this.aXm[f4] = 0, hn < 60 && (bA.gQ.gR(player, 60 - hn), hn = 60), this.a7S[f4] = hn, this.aXu[f4] = bN.ir.ma(f4, bM.iq(aZE)), this.mI[f4] = aZD, this.mG[f4] = mK, this.aXw[f4] = 0, this.mH[f4] = lk,
				this.mT[f4] = 0, this.mY = (aZD + 1) % 65536, this.kT[player] = aZF + 1, this.a8W[aZG] = f4, this.mF++, bN.mK.aZ7(player, lk[lk.length - 1], mK, aZD, hn)
		}, this.eX = function() {
			bN.mK.eX();
			for (var gc = aD.eo, eT = bN.lE.aIh(gc), sT = (! function(sT) {
					for (var aZL, mU = sT.mU, a7S = sT.a7S, aXw = sT.aXw, aXm = sT.aXm, aXu = sT.aXu, mH = sT.mH, mT = sT.mT, sT = sT.mF, aYQ = bS.fF << 4, aB = sT - 1; 0 <= aB; aB--) {
						var aZM = mU[aB],
							lk = mH[aB],
							aZN = mT[aB],
							aZE = bM.io(lk[aZN]),
							aZO = bM.io(lk[aZN + 1]),
							aZP = aZE % aYQ,
							aZE = ~~((aZE + .5) / aYQ),
							aZR = aZO % aYQ,
							aZS = ~~((aZO + .5) / aYQ),
							aZT = aZR - aZP,
							aZU = aZS - aZE,
							f7 = Math.max(~~Math.sqrt(aZT * aZT + aZU * aZU + .5), 1),
							aZV = a7S[aB],
							aZV = (aZV = aXw[aB] ? 4e4 : 25e4 + Math.min(20 * aZV, 3e5) + Math.min(aZV >> 3, 5e4), aXm[aB] + Math.max(~~((aZV + .5) / f7), 1));
						65535 <= aZV ? aZN + 2 < lk.length ? (mT[aB] = aZN + 1, mU[aB] = aZL = function(aB, aZW, aZP, aZQ, aZN, f7, lk, aYQ) {
							aZW = Math.min(aZW - 65535, 65535);
							var lk = bM.io(lk[aZN + 2]),
								aZN = lk % aYQ - aZP,
								lk = ~~((lk + .5) / aYQ) - aZQ,
								aZZ = Math.max(~~Math.sqrt(aZN * aZN + lk * lk + .5), 1);
							return aZW = Math.min(Math.floor((f7 * aZW + .5) / aZZ), 65534), bN.y.aXm[aB] = aZW, aZP + bL.fV(aZW * aZN, 65535) + aYQ * (aZQ + bL.fV(aZW * lk, 65535))
						}(aB, aZV, aZR, aZS, aZN, f7, lk, aYQ)) : (mU[aB] = aZL = aZO, aXm[aB] = 65535) : (aXm[aB] = aZV, mU[aB] = aZL = aZP + bL.fV(aZV * aZT, 65535) + aYQ * (aZE + bL.fV(aZV * aZU, 65535))), aXu[aB] = bN.ir.aZY(aXu[aB],
							aZM, aZL)
					}
				}(this), ! function(sT) {
					if (bf.kM() % 2 == 1) {
						var aB, hw, lK, fO, ec, aZa, zn, aZb, hW, nO, nP, aZE, aZc, a9z, aZe, l2, f4 = sT.mF,
							mU = sT.mU,
							mJ = sT.mJ,
							a7S = sT.a7S,
							aXw = sT.aXw,
							ir = bN.ir.ir,
							aZg = ir.length,
							aZh = bN.ir.aZh,
							aYQ = bS.fF << 4,
							aZi = aD.hy,
							aVF = bg.f2,
							gd = (f4 - 1) * (bL.fV(bf.kM(), 2) % 2);
						for (aB = 0; aB < f4; aB++)
							for (hw = Math.abs(aB - gd), aZE = mU[hw], lK = bM.iq(aZE), hW = mJ[hw] >> 3, nO = aZE % aYQ, nP = ~~((aZE + .5) / aYQ), aZe = a7S[hw], fO = 0; fO < 9; fO++)
								if (!((aZa = lK + aZh[fO]) < 0 || aZg <= aZa))
									for (aZb = ir[aZa], zn = aZb.length, ec = 0; ec < zn; ec++) aZc = aZb[ec], l2 = mJ[aZc] >> 3, hW == l2 || aZi && aVF[hW] === aVF[l2] && aVF[hW] || (l2 = mU[aZc], (a9z = nO - l2 % aYQ) * a9z + (a9z = nP - ~~
										((l2 + .5) / aYQ)) * a9z < 14400 && (l2 = a7S[aZc], a9z = l2 <= aZe ? Math.max(1, bL.fV(l2 + bL.fV(aZe - l2, 10), 10)) : Math.max(1, bL.fV(aZe, 10)), a7S[aZc] = Math.max(l2 - a9z, 0), aXw[aZc] =
										4))
					}
				}(this), ! function(sT) {
					if (bf.kM() % 5 == 3)
						for (var a7S = sT.a7S, f4 = sT.mF, aB = 0; aB < f4; aB++) {
							var hn = a7S[aB];
							a7S[aB] = Math.max(hn - Math.max(1, hn >> 7), 0)
						}
				}(this), this), a7S = sT.a7S, aXw = sT.aXw, aB = sT.mF - 1; 0 <= aB; aB--) aXw[aB] = aXw[aB] >> 1, 0 === a7S[aB] && (bN.mO.aXW(aB), bN.aIk.aXp(aB));
			bd.gU(gc, eT - bN.lE.aIh(gc), 15)
		}
}

function aX6() {
	this.aZj = 32, this.fB = 0, this.fD = 0, this.is = 0, this.aZk = 0, this.aZl = 4, this.ir = null, this.aZh = new Int16Array(9), this.dd = function() {
		this.is = 1 + bL.fV(bS.fF - 1, this.aZj), this.aZk = 1 + bL.fV(bS.fG - 1, this.aZj), this.ir = new Array(this.is * this.aZk), bA.qz.a3H(this.ir);
		var fB, fD, aZh = this.aZh,
			i = this.is;
		for (fB = -1; fB <= 1; fB++)
			for (fD = -1; fD <= 1; fD++) aZh[3 * (1 + fD) + 1 + fB] = fD * i + fB
	}, this.ma = function(aZn, aB) {
		return this.ir[aB].push(aZn), this.ir[aB].length - 1
	}, this.aZY = function(aZo, aZE, aZO) {
		var aZp, aZq, aZE = bM.iq(aZE),
			aZO = bM.iq(aZO);
		return aZE === aZO ? aZo : (aZp = this.ir[aZE].pop(), this.ir[aZE].length === aZo ? this.ma(aZp, aZO) : (aZq = this.ir[aZE][aZo], this.ir[aZE][aZo] = aZp, bN.y.aXu[aZp] = aZo, this.ma(aZq, aZO)))
	}
}

function aXA() {
	this.lD = function(player, aZr) {
		return -1 !== aZr && !!bN.lE.lp(player, aZr) && this.qK(player, aZr, 0)
	}, this.qK = function(player, aZr, aZs) {
		player = function(player, aZr, aZs) {
			var aZ1 = bN.lE.aYd(player, aZr);
			if (-1 === aZ1) return -1;
			aZ1 = bN.lE.lF(aZ1, aZr);
			if (-1 === aZ1) return -1;
			var li = bN.ll.lq(aZ1, aZr);
			if (0 <= li) return li;
			if (bN.ll.lr()) return -1;
			if (0 <= (li = bN.ll.lq(aZr, aZ1))) return bN.ll.ls(bN.ll.lt(bN.ll.get(li)));
			if (aZ1 === aZr) return bN.ll.ls(new Uint32Array([aZ1, aZr]));
			if (0 <= (li = bN.aXB.qK(aZ1, aZr))) return li;
			return aZs ? function(aZw, player) {
				var fl = bO.fl,
					eP = (fl.fill(0), [aZw]),
					iA = (fl[aZw] = 1, bM.iA),
					aZx = -1,
					f4 = eP.length;
				for (; - 1 === aZx && f4;) {
					for (var g = [], aB = 0; aB < f4; aB++)
						for (var eq = eP[aB], a55 = fl[eq], f7 = 0; f7 < 8; f7++) {
							var x5, a1f, fA = eq + iA[f7],
								ei = 4 * fA;
							ac.iI(ei) ? (x5 = fl[fA], a1f = a55 + 5 + ((1 & f7) << 1), 0 === x5 ? (g.push(fA), fl[fA] = a1f) : fl[fA] = Math.min(a1f, x5)) : -1 === aZx && f7 % 2 == 0 && ac.yv(player, ei) && (aZx = eq)
						}
					f4 = (eP = g).length
				}
				return -1 !== aZx ? function(iV, aZz) {
					var iA = bM.iA,
						aa0 = -1,
						hv = 0,
						mu = [];
					for (; aZz !== iV;)(hv = function(eq, hv) {
						var fl = bO.fl,
							iA = bM.iA,
							a55 = fl[eq];
						if (a55 - fl[eq + iA[hv]] != 5 + ((1 & hv) << 1))
							for (var fN = 0; fN < 8; fN++) {
								var f7 = fN + hv + 6 & 7;
								if (a55 - fl[eq + iA[f7]] == 5 + ((1 & f7) << 1)) return f7
							}
						return hv
					}(aZz, hv)) !== aa0 && (mu.push(aZz), aa0 = hv), aZz += iA[hv];
					mu.push(iV);
					var li = bN.ll.lq(mu[0], iV);
					if (0 <= li) return li;
					return bN.ll.ls(new Uint32Array(mu))
				}(aZw, aZx) : -1
			}(aZr, player) : -1
		}(player, aZr, aZs);
		return -1 !== player && (bO.g[0] = bN.ll.get(player), !0)
	}
}

function aXC() {
	function aa2(hJ, ia, ic) {
		for (var jf = Math.min(ia, ic), ng = Math.max(ia, ic), fD = jf + 1; fD < ng; fD++)
			if (!ac.iI(bM.ik(hJ, fD))) return;
		return 1
	}

	function aa3(hL, iZ, ib) {
		for (var jf = Math.min(iZ, ib), ng = Math.max(iZ, ib), fB = jf + 1; fB < ng; fB++)
			if (!ac.iI(bM.ik(fB, hL))) return;
		return 1
	}

	function aa4(iZ, ia, ib, ic, aZu, aZr) {
		for (var f4 = Math.min(Math.abs(ib - iZ), Math.abs(ic - ia)), iO = Math.sign(ib - iZ), iR = Math.sign(ic - ia), aB = 0; aB < f4; aB++)
			if (!ac.iI(bM.ik(iZ += iO, ia += iR))) return null;
		return iZ === ib ? aa2(iZ, ia, ic) ? new Uint32Array([aZu, bM.fR(iZ, ia), aZr]) : null : aa3(ia, iZ, ib) ? new Uint32Array([aZu, bM.fR(iZ, ia), aZr]) : null
	}
	this.qK = function(aZu, aZr) {
		aZu = function(aZu, aZr) {
			var iZ = bM.fC(aZu),
				ia = bM.fE(aZu),
				ib = bM.fC(aZr),
				ic = bM.fE(aZr);
			if (iZ === ib) {
				if (aa2(iZ, ia, ic)) return new Uint32Array([aZu, aZr])
			} else {
				if (ia !== ic) return aa4(iZ, ia, ib, ic, aZu, aZr) || aa4(ib, ic, iZ, ia, aZu, aZr);
				if (aa3(ia, iZ, ib)) return new Uint32Array([aZu, aZr])
			}
			return null
		}(aZu, aZr);
		return null === aZu ? -1 : bN.ll.ls(aZu)
	}
}

function aXH() {
	var aa5 = [];
	this.dd = function() {
		aa5 = []
	}, this.lr = function() {
		return 65536 === aa5.length
	}, this.lq = function(aZu, aZr) {
		for (var ll = aa5, f4 = ll.length, aB = 0; aB < f4; aB++) {
			var gc = ll[aB];
			if (gc[0] === aZu && gc[gc.length - 1] === aZr) return aB
		}
		return -1
	}, this.lt = function(lk) {
		var aa6 = new Uint32Array(lk.length);
		return aa6.set(lk), aa6.reverse()
	}, this.aXd = function(hW, l2) {
		var gX = hW.length - 1,
			aa7 = new Uint32Array(gX + l2.length);
		return aa7.set(hW, 0), aa7.set(l2, gX), aa7
	}, this.aXi = function(hW, l2, wZ, eq, aa8) {
		aa8 && (wZ = (l2 = this.lt(l2)).length - wZ - 2);
		aa8 = l2.subarray(wZ + 1 + (eq === l2[wZ + 1])), eq = new Uint32Array(hW.length + aa8.length);
		return eq.set(hW, 0), eq.set(aa8, hW.length), eq
	}, this.ls = function(lk) {
		return aa5.push(lk), aa5.length - 1
	}, this.get = function(aB) {
		return aa5[aB]
	}, this.ln = function() {
		return aa5
	}, this.aaA = function(aZu, aZr) {
		return null
	}
}

function aXL() {
	this.eX = function(player, nL) {
		player = bN.lE.nN(player, nL);
		return !(player < 0 || !bN.mO.aXk(player) || (bN.mO.aXW(player), 0))
	}
}

function aX7() {
	var zS = 32,
		zR = new Array(2);

	function xL(ec) {
		var fB, fD, eq, iR, iO, i0 = zS,
			a3k = bA.qr.xL(i0, i0),
			i6 = bA.qr.getContext(a3k, !0),
			i3 = bA.qr.getImageData(i6, i0, i0),
			xW = i3.data,
			lK = (i0 >> 1) - .5,
			lL = Math.sqrt(lK * lK);
		for (xW.fill(255), fD = 0; fD < i0; fD++)
			for (fB = 0; fB < i0; fB++) iO = fB - lK, iR = fD - lK, eq = 4 * (fD * i0 + fB), iO = 714 * (lL - Math.sqrt(iO * iO + iR * iR)) / lL, xW[2 + eq] = ec, xW[3 + eq] = 255 < iO ? 0 : iO;
		return i6.putImageData(i3, 0, 0), a3k
	}
	this.aaB = -1, this.dd = function() {
		this.aaB = -1, zR[0] || (zR[0] = xL(255), zR[1] = xL(0))
	}, this.aaC = function(i6, ei, fB, fD, eA, aB) {
		bA.gQ.hG(aD.eo) && (i6.setTransform(ei *= 4 / 3 * .625, 0, 0, ei, fB - (eA *= 4 / 3), fD - eA), i6.drawImage(zR[+(bN.y.mI[aB] === this.aaB)], 0, 0))
	}
}

function aXG() {
	function aVW(fB, f4, fD, aaD, aA5, fU, player) {
		if (!(fD < 1 || aA5 < fD))
			for (var aB = 0; aB <= f4; aB++) {
				var ei = bM.ik(fB, fD);
				if (bN.lE.aXo(ei) && !bA.qz.has(aaD, ac.em(ei)) && ac.yn(ei, player)) return ei >> 2;
				fB += fU
			}
		return -1
	}

	function aVa(fD, f4, fB, aaD, aVU, fU, player) {
		if (!(fB < 1 || aVU < fB)) {
			f4 = Math.max(f4, 0);
			for (var aB = 0; aB <= f4; aB++) {
				var ei = bM.ik(fB, fD);
				if (bN.lE.aXo(ei) && !bA.qz.has(aaD, ac.em(ei)) && ac.yn(ei, player)) return ei >> 2;
				fD += fU
			}
		}
		return -1
	}

	function aVe(iV, iW, aVR) {
		return -1 !== iW && (-1 === iV || bM.iX(iW, aVR) < bM.iX(iV, aVR)) ? iW : iV
	}
	this.hf = function(player, aVR) {
		if (bN.mV.mW(player))
			for (var aVS = bM.iB(), aaD = [];;) {
				var aZx = function(aVR, aVS, aaD, player) {
					for (var hJ = bM.fC(aVR), hL = bM.fE(aVR), aVU = bS.fF - 2, aA5 = bS.fG - 2, aVV = -1, f7 = 0; f7 < aVS; f7++) {
						var aA4 = Math.max(hJ - f7, 1),
							aMT = Math.max(hL - f7, 1),
							yj = Math.min(hJ + f7, aVU),
							yi = Math.min(hL + f7, aA5),
							iV = aVW(hJ, yj - hJ, hL - f7, aaD, aA5, 1, player),
							iW = aVW(hJ - 1, hJ - aA4 - 1, hL - f7, aaD, aA5, -1, player),
							yj = aVW(hJ, yj - hJ, hL + f7, aaD, aA5, 1, player),
							aA4 = aVW(hJ - 1, hJ - aA4 - 1, hL + f7, aaD, aA5, -1, player),
							aVZ = aVa(hL, yi - hL - 1, hJ - f7, aaD, aVU, 1, player),
							aVb = aVa(hL - 1, hL - aMT - 2, hJ - f7, aaD, aVU, -1, player),
							yi = aVa(hL, yi - hL - 1, hJ + f7, aaD, aVU, 1, player),
							aMT = aVa(hL - 1, hL - aMT - 2, hJ + f7, aaD, aVU, -1, player);
						if (aVV = aVe(aVV, iV, aVR), aVV = aVe(aVV, iW, aVR), aVV = aVe(aVV, yj, aVR), aVV = aVe(aVV, aA4, aVR), aVV = aVe(aVV, aVZ, aVR), aVV = aVe(aVV, aVb, aVR), aVV = aVe(aVV, yi, aVR), 0 <= (aVV = aVe(aVV, aMT, aVR)) &&
							f7 * f7 >= bM.iX(aVV, aVR)) return aVV
					}
					return -1
				}(aVR, aVS, aaD, player);
				if (-1 === aZx) break;
				var id = ac.em(bM.eu(aZx));
				if (bN.lE.aYb(player, id)) return !! function(player, aZx, aVR) {
					for (var hv = bM.iv(aZx, aVR), aB = 0; aB < 4; aB++) {
						var eq = bM.it(aZx, hv);
						if (ac.aIL(bM.eu(eq), player)) return bO.fg[6] = hv, 1;
						hv = (hv + 1) % 4
					}
					return
				}(player, aZx, aVR) && (bO.fg[7] = aZx, !0);
				aaD.push(id)
			}
		return !1
	}
}

function dg() {
	this.aSp = [L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493), L(494)];
	var aaG = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCZ = new Array(aaG.length), this.dd = function() {
		var g = bj.eP.data[155].value.split(";"),
			lK = g.length;
		if (function() {
				for (var f4 = aaG.length, aB = 0; aB < f4; aB++) bX.aCZ[aB] = aaG[aB]
			}(), !(lK > aaG.length))
			for (var aB = 0; aB < lK; aB++) g[aB].length && (this.aCZ[aB] = g[aB])
	}, this.aSr = function(eB, code) {
		for (var aCZ = this.aCZ, aaI = aaG, qY = (aCZ[eB] = code, ""), f4 = aCZ.length, aaJ = [], aB = 0; aB < f4; aB++) aaJ.push(aCZ[aB] === aaI[aB] ? "" : aCZ[aB]);
		f4--;
		for (aB = 0; aB < f4; aB++) qY += aaJ[aB] + ";";
		bj.sJ.sK(155, qY += aaJ[f4])
	}, this.aSo = function() {
		bj.sJ.sK(155, ""), this.dd()
	}, this.ec = function(code, eB) {
		return code === this.aCZ[eB] || code === this.aCZ[eB + 1]
	}
}

function dY() {
	var aaK = new Array(1),
		aaL = new Array(1),
		aaM = 20,
		eQ = 0,
		aaN = !1;

	function aaP() {
		aaM++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aaL[aB] = 0, aaK[aB] = document.createElement("audio"), aaK[aB].src = src, aaK[aB].setAttribute("preload", "auto"), aaK[aB].setAttribute("controls", "none"), aaK[aB].style.display = "none", aaK[aB].onpause = function() {
					aaL[aB] = 1
				}, aaK[aB].oncanplaythrough = function() {
					aaL[aB] = 0 === aaL[aB] ? 1 : aaL[aB]
				}, document.body.appendChild(aaK[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aaN = !0
		}
	}, this.uY = function() {
		if (aaN) {
			aaN = !1;
			for (var aB = 0; 0 <= aB; aB--) aaK[aB].onpause = null, aaK[aB].oncanplaythrough = null, t.removeChild(document.body, aaK[aB]), aaK[aB] = null
		}
	}, this.play = function() {
		if (aaN) {
			var eT = performance.now();
			if (eQ + 66 < eT)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aaL[aB]) return eQ = eT, aaL[aB] = 2, void aaK[aB].play();
			0 < aaM && (aaM--, setTimeout(aaP, 66))
		}
	}
}

function ca() {
	this.a94 = function() {
		var aaS;
		return !(al.kv < 3 || ag.gs[m0[0]] >= aD.k9 >> 1) && (aD.hy ? 9 !== aD.kh && (aaS = ae.aJt(), !(2 * ae.aJu(bh.ky()) >= aaS)) : function() {
			if (8 === aD.kh) return !1;
			var aaS = ae.aJt();
			if (2 * ag.h6[m0[0]] >= aaS) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aZF = aD.kP, h6 = ag.h6, aB = 0; aB < aZF; aB++) h6[aB] = 512;
			var aZG = aD.y1,
				kc = aE.kc,
				hn = aE.hn;
			for (aB = aZF; aB < aZG; aB++) h6[aB] = kc[hn[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f4 = aD.y1, h6 = ag.h6, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f4; aB++) h6[aB] = sResourcesValue
		} : function() {
			for (var f4 = aD.y1, h6 = ag.h6, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f4; aB++) h6[aB] = sResourcesData[aB]
		})();
		bd.mu[8] = ag.h6[aD.eo]
	}
}

function dP() {
	var aIT = 501,
		aaY = (this.aaX = new Uint32Array(aIT), this.a4Q = new Uint32Array(aIT), this.aCE = new Uint16Array(aIT), this.aSx = 0, 1),
		ul = 0;

	function aab(self) {
		self.max.fill(0)
	}

	function aad(self, aB) {
		self.max[0] = Math.max(self.aaX[aB], self.max[0]), self.max[1] = Math.max(self.a4Q[aB], self.max[1]), self.max[2] = Math.max(self.aCE[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aaZ = 0, this.mu = new Array(21), this.aaa = null, this.de = function() {
		this.aaa = [L(495), L(496), L(497), L(498), L(499), L(500), L(501), L(502), L(316), L(317), L(503), L(504), L(505), L(506), "", L(507), L(508), L(509), L(274), L(510), L(511)]
	}, this.dd = function() {
		this.aSx = 0, aaY = 1, this.aaZ = 0, ul = 0, aab(this), this.mu.fill(0)
	}, this.qH = function(player, ig) {
		bA.gQ.a4K(player) && (this.mu[0] += ig + 1, this.mu[1]++, this.mu[12] += bO.fb[1])
	}, this.pm = function(player, pP) {
		__fx.donationsTracker.logDonation(player, pP, bO.fb[0]);
		player === aD.eo && (aN.pm(bO.fb[0], bO.fb[1], pP), this.mu[12] += bO.fb[1], this.mu[16] += bO.fb[0]), pP === aD.eo && (aN.a7f(bO.fb[0], player), this.mu[10] += bO.fb[0])
	}, this.qL = function(player) {
		bA.gQ.a4K(player) && (this.mu[2]++, this.mu[12] += bO.fb[1])
	}, this.qT = function(player) {
		bA.gQ.a4K(player) && (this.mu[19]++, this.mu[12] += bO.fb[1])
	}, this.aZ9 = function(player) {
		bA.gQ.a4K(player) && this.mu[20]++
	}, this.gU = function(player, a55, eB) {
		bA.gQ.a4K(player) && (this.mu[eB] += a55)
	}, this.eX = function() {
		var self;
		this.aaZ || 0 < ul-- || ((self = this).aaX[self.aSx] = ag.gs[aD.eo], self.a4Q[self.aSx] = ag.h6[aD.eo], self.aCE[self.aSx] = ae.aCF(aD.eo), aad(self, self.aSx), self.aSx++, self.aSx === aIT && function(self) {
			aab(self), aad(self, 0), self.aSx = 1 + bL.fV(aIT, 2);
			for (var aB = 1; aB < self.aSx; aB++) self.aaX[aB] = self.aaX[2 * aB], self.a4Q[aB] = self.a4Q[2 * aB], self.aCE[aB] = self.aCE[2 * aB], aad(self, aB);
			aaY *= 2
		}(self), ul = aaY - 1, be.ml(), 0 === ag.my[aD.eo] && (self.aaZ = bf.kM()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.tF = 0, this.tG = 0, this.aaf = 0, this.aag = 0, this.a9I = 0, this.ty = 0;
	var aai = this.aah = 0;
	this.aaj = 0, this.aak = 0, this.aal = 0, this.a8d = 0, this.eB = 0, this.aBp = null, this.hq = !1, this.aam = -1, this.aan = !1, this.aao = [0, 0], this.de = function() {
		this.aBp = [L(512), L(117, 0, "Balance"), L(116, 0, "Interest"), L(513)]
	}, this.dd = function() {
		this.hq = !1, this.aam = -1, this.aan = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f7 = a0.a1.iD() && h.i < h.j ? 1 : a0.a1.iD() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f7 * this.i), this.i -= a0.a1.iD() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8d = Math.floor(this.j / 150), this.a8d = Math.max(this.a8d, 1.5), this.tF = Math.floor(1 + .02 * this
			.i), this.tG = Math.floor(1 + .04 * this.i), this.a9I = this.tG, aai = Math.floor(.75 * this.a9I), this.ty = Math.floor(1 + .075 * this.i), this.aaj = Math.floor(1 + .1125 * this.i), this.aak = Math.floor(this.i * (a0.a1.iD() ? .03 :
				.029)), this.aak = Math.max(this.aak, 4), this.aal = Math.floor(.035 * this.i), this.aal = Math.max(this.aal, 4), this.aah = this.j - 2 * this.a9I - this.ty - this.aaj, this.hq && this.aap()
	}, this.hH = function(le, lf) {
		var y4, y3;
		return !!this.hq && (y3 = le, y4 = lf, le -= bL.fV(h.i - this.i, 2), lf -= bL.fV(h.j - this.j, 2), le < 0 || lf < 0 || le >= this.i || lf >= this.j || le >= this.i - this.aaj && lf < this.aaj ? -1 !== aM.hH(y3, y4) || bC.hH(y3, y4) ||
			this.s8() : lf < this.aaj || (lf < this.j - this.ty ? (this.aan = !0, this.aam = (le - 2 * this.tF - this.aaf) / this.aag, 3 !== this.eB && (bf.dk = !0)) : (y3 = (y3 = Math.floor(le / (this.i / this.aBp.length))) < 0 ? 0 : y3 >=
				this.aBp.length ? this.aBp.length - 1 : y3) !== this.eB && (this.eB = y3, this.aap(), bf.dk = !0)), !0)
	}, this.a2Q = function(le, lf) {
		return this.aao[0] = le, this.aao[1] = lf, !(!this.hq || !this.aan || (le -= bL.fV(h.i - this.i, 2), lf = this.aam, this.aam = (le - 2 * this.tF - this.aaf) / this.aag, (0 <= this.aam && this.aam <= 1 || 0 <= lf && lf <= 1) && (bf.dk = !
			0), 0))
	}, this.a2p = function() {
		this.aan && (this.aan = !1)
	}, this.a31 = function() {
		this.hq ? this.s8() : this.show()
	}, this.show = function() {
		bd.aSx < 2 || (this.hq = !0, this.aap())
	}, this.s8 = function() {
		this.hq = !1, this.aam = -1, bf.dk = !0
	}, this.aap = function() {
		this.eB < 2 ? this.aaf = aQ.measureText(bA.rq.a09(bd.max[this.eB]), bA.qr.si(0, this.aak)) : 2 === this.eB && (this.aaf = aQ.measureText(bA.rq.a4y(6, 2), bA.qr.si(0, this.aak))), this.aag = this.i - 2 * this.tF - this.aaf - this.tG
	}, this.ml = function() {
		this.hq && this.aap()
	}, this.vU = function() {
		this.hq && this.a9a()
	}, this.a9a = function() {
		var fB = bL.fV(h.i - this.i, 2),
			fD = bL.fV(h.j - this.j, 2);
		vV.setTransform(1, 0, 0, 1, fB, fD), vV.fillStyle = bB.nv, vV.fillRect(0, this.aaj, this.i, this.j - this.aaj), this.aaq(), this.aRa(), vV.strokeRect(0, 0, this.i, this.j), bA.qr.textAlign(vV, 2), vV.font = bA.qr.si(0, this.aak), 0 ===
			this.eB ? this.aar(bd.aaX, fB, fD) : 1 === this.eB ? this.aar(bd.a4Q, fB, fD) : 2 === this.eB ? this.aas(fB, fD) : 3 === this.eB && (this.aat(fB, fD), this.aau(fB, fD)), aM.a6m(Math.floor(fB + this.i - .725 * this.aaj), Math.floor(
				fD + .275 * this.aaj), Math.floor(.45 * this.aaj)), vV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aaq = function() {
		var aB, eT;
		for (vV.lineWidth = this.a8d, bA.qr.textBaseline(vV, 1), bA.qr.textAlign(vV, 1), vV.strokeStyle = bB.ny, vV.font = bA.qr.si(1, this.aal), eT = this.i / this.aBp.length, vV.fillStyle = bB.oK, vV.fillRect(this.eB * eT, this.j - this.ty, eT,
				this.ty), vV.fillStyle = bB.ny, vV.fillRect(0, this.j - this.ty - .5 * this.a8d, this.i, this.a8d), aB = 1; aB <= 3; aB++) vV.fillRect(aB * eT, this.j - this.ty, this.a8d, this.ty);
		for (aB = this.aBp.length - 1; 0 <= aB; aB--) vV.fillText(bA.z6.a3y(this.aBp[aB], 0, .9 * eT), (aB + .5) * eT, this.j - .46 * this.ty)
	}, this.aRa = function() {
		vV.fillStyle = bB.ol, vV.fillRect(0, 0, this.i, this.aaj), vV.fillStyle = bB.ny, vV.fillRect(0, this.aaj - .5 * this.a8d, this.i, this.a8d), vV.font = bA.qr.si(1, .39 * this.aaj), vV.fillText(bA.z6.a3y(L(514), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aaj))
	}, this.aar = function(g, fB, fD) {
		var lK = bd.max[this.eB],
			a3J = (vV.setTransform(1, 0, 0, 1, fB + 2 * this.tF + this.aaf, fD + this.a9I + this.aaj), vV.lineWidth = 2, this.aah / Math.sqrt(lK));
		vV.beginPath(), vV.moveTo(this.aag, this.aah - a3J * Math.sqrt(g[bd.aSx - 1]));
		for (var aB = bd.aSx - 2; 0 <= aB; aB--) vV.lineTo(aB * this.aag / (bd.aSx - 1), this.aah - a3J * Math.sqrt(g[aB]));
		vV.stroke();
		fB = this.a6m(g, a3J, .5);
		fB < .95 && vV.fillText(bA.rq.a09(lK), -this.tF, 0), .05 < Math.abs(fB - .5) && vV.fillText(bA.rq.a09(Math.floor(lK / 4)), -this.tF, Math.floor(this.aah / 2)), .05 < fB && vV.fillText("0", -this.tF, this.aah)
	}, this.aas = function(fB, fD) {
		vV.setTransform(1, 0, 0, 1, fB + 2 * this.tF + this.aaf, fD + this.a9I + this.aaj), vV.lineWidth = 2;
		var a3J = this.aah / Math.max(bd.max[this.eB], 1);
		vV.beginPath(), vV.moveTo(this.aag, this.aah - a3J * bd.aCE[bd.aSx - 1]);
		for (var aB = bd.aSx - 2; 0 <= aB; aB--) vV.lineTo(aB * this.aag / (bd.aSx - 1), this.aah - a3J * bd.aCE[aB]);
		vV.stroke();
		fB = this.a6m(bd.aCE, a3J, 1), fD = bd.max[this.eB] / 100;
		fB < .95 && vV.fillText(bA.rq.a4y(fD, 2), -this.tF, 0), .05 < Math.abs(fB - .5) && vV.fillText(bA.rq.a4y(fD / 2, 2), -this.tF, Math.floor(this.aah / 2)), .05 < fB && vV.fillText(bA.rq.a4y(0, 2), -this.tF, this.aah)
	}, this.aat = function(fB, fD) {
		vV.setTransform(1, 0, 0, 1, fB + .34 * this.i, fD + 2 * aai + this.aaj), bA.qr.textAlign(vV, 2);
		for (var aBX = this.j - 4 * aai - this.ty - this.aaj, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vV.fillText(bA.z6.a3y(bd.aaa[g[aB]], 0, .31 * this.i), 0, aB * aBX / 9);
		var fW = bd.mu;
		for (vV.setTransform(1, 0, 0, 1, fB + .39 * this.i, fD + 2 * aai + this.aaj), bA.qr.textAlign(vV, 0), vV.fillText(bA.rq.a4y(100 * fW[0] / (1024 * Math.max(fW[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vV.fillText(fW[g[aB]].toString(), 0,
			aB * aBX / 9);
		vV.fillText(bA.rq.a4y(100 * (1 - ag.gs[aD.eo] / fW[7]), 0), 0, aBX)
	}, this.aau = function(fB, fD) {
		vV.setTransform(1, 0, 0, 1, fB + .79 * this.i, fD + 2 * aai + this.aaj), bA.qr.textAlign(vV, 2);
		var aB, aBX = this.j - 4 * aai - this.ty - this.aaj;
		for (vV.fillStyle = bB.oF, aB = 2; 0 <= aB; aB--) vV.fillText(bA.z6.a3y(bd.aaa[aB + 8], 0, .31 * this.i), 0, aB * aBX / 9);
		vV.fillText(bA.z6.a3y(bd.aaa[18], 0, .31 * this.i), 0, 3 * aBX / 9), vV.fillStyle = bB.oE, vV.fillText(bA.z6.a3y(bd.aaa[11], 0, .31 * this.i), 0, 4 * aBX / 9), vV.fillStyle = bB.oX, vV.fillText(bA.z6.a3y(bd.aaa[13], 0, .31 * this.i), 0,
				5 * aBX / 9), vV.fillText(bA.z6.a3y(bd.aaa[15], 0, .31 * this.i), 0, 6 * aBX / 9), vV.fillText(bA.z6.a3y(bd.aaa[16], 0, .31 * this.i), 0, 7 * aBX / 9), vV.fillText(bA.z6.a3y(bd.aaa[12], 0, .31 * this.i), 0, 8 * aBX / 9), vV
			.fillStyle = bB.oW, vV.fillText(bA.z6.a3y(bd.aaa[17], 0, .31 * this.i), 0, aBX), vV.fillStyle = bB.oF;
		var fW = bd.mu,
			aFb = fW[8] + fW[9] + fW[10] + fW[18],
			aFb = bA.rq.a09(aFb),
			aQO = vV.measureText(aFb).width,
			fB = (vV.setTransform(1, 0, 0, 1, fB + .83 * this.i + aQO, fD + 2 * aai + this.aaj), vV.fillText(bA.rq.a09(fW[8]), 0, 0), vV.fillText(bA.rq.a09(fW[9]), 0, aBX / 9), vV.fillText(bA.rq.a09(fW[10]), 0, 2 * aBX / 9), vV.fillText(bA.rq
				.a09(fW[18]), 0, 3 * aBX / 9), vV.fillStyle = bB.oE, vV.fillText(aFb, 0, 4 * aBX / 9), vV.fillStyle = bB.oX, vV.fillText(bA.rq.a09(fW[13]), 0, 5 * aBX / 9), vV.fillText(bA.rq.a09(fW[15]), 0, 6 * aBX / 9), vV.fillText(bA.rq
				.a09(fW[16]), 0, 7 * aBX / 9), vV.fillText(bA.rq.a09(fW[12]), 0, 8 * aBX / 9), fW[12] + fW[13] + fW[15] + fW[16]);
		vV.fillStyle = bB.oW, vV.fillText(bA.rq.a09(fB), 0, aBX), vV.fillStyle = bB.ny
	}, this.a6m = function(g, a3J, aAD) {
		var aB, e, fn;
		return this.aam < 0 || 1 < this.aam ? .25 : (aB = this.aam * (bd.aSx - 1), fn = g[e = Math.floor(aB)], fn += (aB - e) * (g[e < bd.aSx - 1 ? e + 1 : e] - fn), vV.strokeStyle = bB.o1, .04 < this.aam && this.aaw(0, this.aah - a3J * Math.pow(
				fn, aAD), aB * this.aag / (bd.aSx - 1), this.aah - a3J * Math.pow(fn, aAD)), .04 < fn / bd.max[this.eB] && this.aaw(aB * this.aag / (bd.aSx - 1), this.aah, aB * this.aag / (bd.aSx - 1), this.aah - a3J * Math.pow(fn, aAD)), vV
			.fillStyle = bB.oZ, vV.beginPath(), vV.arc(aB * this.aag / (bd.aSx - 1), this.aah - a3J * Math.pow(fn, aAD), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vV.fill(), g = this.aam * bf.aCG, g = 0 === ag.my[aD.eo] ? Math.floor(g * bd
				.aaZ) : Math.floor(g * bf.kM()), vV.fillStyle = bB.ny, vV.fillText(1 === aAD ? bA.rq.a4y(fn / 100, 2) : bA.rq.a09(Math.floor(fn)), -this.tF, this.aah - a3J * Math.pow(fn, aAD)), bA.qr.textAlign(vV, 1), vV.fillText(aW.aC3(g),
				aB * this.aag / (bd.aSx - 1), this.aah + this.aak - (a0.a1.iD() ? 2 : 0) - this.a8d), bA.qr.textAlign(vV, 2), a3J * Math.pow(fn, aAD) / this.aah)
	}, this.aaw = function(nO, nP, nb, nc) {
		vV.beginPath(), vV.moveTo(nO, nP), vV.lineTo(nb, nc), vV.stroke()
	}
}

function by() {
	this.aSy = "https://territorial.io/changelog", this.aT3 = "https://territorial.io/terms", this.aT4 = "https://territorial.io/privacy", this.aT2 = "https://territorial.io/tutorial", this.aT1 = "https://territorial.io/players", this.aSz =
		"https://territorial.io/clans", this.aT0 = "https://territorial.io/clan-results", this.aPX = "https://patreon.com/c/territorial", this.aDY = "https://play.google.com/store/apps/details?id=territorial.io", this.a20 =
		"https://apps.apple.com/app/id1581110913", this.aDZ = "https://discord.gg/pthqvpTXmh", this.aDa = "https://www.instagram.com/davidtschacher/", this.zh =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aax, this.z3 = new aay, this.dd = function() {
		this.y.dd()
	}, this.eX = function() {
		0 !== this.y.aV9 && this.y.aV9--
	}
}

function aay() {
	this.vU = function() {
		if (0 !== bP.y.aV9 && (vV.globalAlpha = Math.min(bP.y.aV9 / 580, 1), vV.drawImage(bP.y.ab1, 1 + aS.z1(), 1 + aS.z2()), vV.globalAlpha = 1, aD.hS)) {
			for (var nO = ih / iF, nP = ii / iF, nb = (h.i + ih) / iF, nc = (h.j + ii) / iF, gd = bP.y.ab2 * iF, ab3 = bP.y.ab3, aB = aD.kP - 1; 0 <= aB; aB--) ! function(aB, gd, nO, nP, nb, nc, ab3) {
				var highlight;
				0 === ag.my[aB] || 0 === ag.gs[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gd *= 2), nb = h.i * ((ag.ix[aB] + ag.iy[aB] + 1) / 2 - nO) / (nb - nO) - .5 * gd, nO = h.j * ((ag.iz[
					aB] + ag.j0[aB] + 1) / 2 - nP) / (nc - nP) - .5 * gd, nb > h.i) || nO > h.j || nb < -gd || nO < -gd || (highlight ? vV.setTransform(2 * iF, 0, 0, 2 * iF, nb, nO) : vV.setTransform(iF, 0, 0, iF, nb, nO), vV.drawImage(
					ab3[aD.hy ? bg.f2[aB] : 1], 0, 0))
			}(aB, gd, nO, nP, nb, nc, ab3);
			vV.setTransform(iF, 0, 0, iF, 0, 0)
		}
	}
}

function aax() {
	this.ab2 = 28, this.aV9 = 0, this.ab1 = null;
	var ab5 = this.ab3 = null;

	function ab8(i0, ab9) {
		var fB, fD, eq, iO, a3k = bA.qr.xL(i0, i0),
			i6 = bA.qr.getContext(a3k, !0),
			i3 = bA.qr.getImageData(i6, i0, i0),
			xW = i3.data,
			lK = (i0 >> 1) - .5,
			abA = .5 + lK;
		for (abA *= abA, fD = 0; fD < i0; fD++)
			for (fB = 0; fB < i0; fB++) iO = (iO = fB - lK) * iO + (iO = fD - lK) * iO, xW[eq = 4 * (fD * i0 + fB)] = ab9[0], xW[1 + eq] = ab9[1], xW[2 + eq] = ab9[2], xW[3 + eq] = (abA - iO) * ab9[3] / abA;
		return i6.putImageData(i3, 0, 0), a3k
	}

	function aaC(aB, i6, a3k, i0) {
		var highlight, fB, fD;
		0 !== ag.my[aB] && 0 !== ag.gs[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (i0 *= 2), fB = ag.ix[aB] + ag.iy[aB] + 1 - i0 - 2 >> 1, fD = ag.iz[aB] + ag.j0[aB] + 1 - i0 - 2 >> 1, highlight ? i6
			.drawImage(a3k[aD.hy ? 9 === aD.kh && 5 === aE.hn[aB] ? 3 : bg.f2[aB] : aB < aD.kP ? 1 : 0], fB, fD, i0, i0) : i6.drawImage(a3k[aD.hy ? 9 === aD.kh && 5 === aE.hn[aB] ? 3 : bg.f2[aB] : aB < aD.kP ? 1 : 0], fB, fD))
	}
	this.dd = function() {
		var sT;
		this.aV9 = 700,
			function(sT) {
				var i0 = sT.ab2;
				if (sT.ab3 = [], ab5 = [], aD.hy) {
					for (var aB = 0; aB <= aD.y8; aB++) sT.ab3.push(ab8(i0, bg.aYW[bg.km[aB]])), ab5.push(ab8(i0 >> 1, bg.aYW[bg.km[aB]]));
					9 === aD.kh && ab5.push(ab8(i0, bg.aYW[1]))
				} else sT.ab3.push(ab8(i0, bg.aYW[7])), sT.ab3.push(ab8(i0, bg.aYW[4])), ab5.push(ab8(i0 >> 1, bg.aYW[7]))
			}(this),
			function(sT, abB) {
				var aB, ab1 = sT.ab1,
					i6 = bA.qr.getContext(ab1, !0),
					f4 = aD.f1,
					i0 = sT.ab2 >> 1;
				i6.imageSmoothingEnabled = !1, i6.setTransform(1, 0, 0, 1, 0, 0), abB && i6.clearRect(0, 0, ab1.width, ab1.height);
				if (9 === aD.kh) {
					i0 <<= 1;
					sT = az.kq[5];
					for (aB = f4 - sT; aB < f4; aB++) aaC(aB, i6, ab5, i0);
					f4 -= sT, i0 >>= 1
				}
				for (aB = aD.kP; aB < f4; aB++) aaC(aB, i6, ab5, i0)
			}(this, null !== (sT = this).ab1 && sT.ab1.width === bS.fF - 2 && sT.ab1.height === bS.fG - 2 || (sT.ab1 = bA.qr.xL(bS.fF - 2, bS.fG - 2), !1)), aD.hS || this.a5G()
	}, this.aYV = ab8, this.a5G = function() {
		for (var f4 = aD.kP, i0 = this.ab2, ab3 = this.ab3, i6 = bA.qr.getContext(this.ab1, !0), aB = 0; aB < f4; aB++) aaC(aB, i6, ab3, i0)
	}
}

function d9() {
	function abE() {
		8 === aD.kh && 1 === aD.a0s && bR.a0U.a0r()
	}

	function abD(player) {
		aD.hS ? (ak.aIa(player), al.aLe(), aD.kj && aD.qD.eX()) : b3.aDs(player)
	}
	this.pf = function(player) {
		aN.a15(player, player === aD.eo ? 21 : 22), abD(player), abE()
	}, this.qA = function(player) {
		1 === aD.a0s && 0 !== ag.my[player] && 2 !== ag.a4G[player] && abD(player), aD.a0v--, aD.a0u--, aN.a15(player, 4), bA.gQ.hF(2) && aW.mk(!0), abE()
	}
}

function dJ() {
	this.aVP = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBU = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.ny, "rgb(170,170,170)"
	], this.abF = [bB.ny, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.ny, bB.np], this.abG = [bB.np, bB.ny, bB.ny, bB.ny, bB.np, bB.np, bB.np, bB.np, bB.ny];
	var aLo = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aL7 = ["rgba(" + aLo[0] + ",", "rgba(" + aLo[1] + ",", "rgba(" + aLo[2] + ",", "rgba(" + aLo[3] + ",", "rgba(" + aLo[4] + ",", "rgba(" + aLo[5] + ",", "rgba(" + aLo[6] + ",", "rgba(" + aLo[7] + ",", "rgba(" + aLo[8] + ",", "rgba(" + aLo[9] +
			","
		], this.aL8 = ["rgb(" + aLo[0] + ")", "rgb(" + aLo[1] + ")", "rgb(" + aLo[2] + ")", "rgb(" + aLo[3] + ")", "rgb(" + aLo[4] + ")", "rgb(" + aLo[5] + ")", "rgb(" + aLo[6] + ")", "rgb(" + aLo[7] + ")", "rgb(" + aLo[8] + ")", "rgb(" + aLo[9] +
			")"
		], this.a1E = null, this.aYW = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aYB = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.km = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f2 = new Uint8Array(aD.f1), this.aBV = new Uint8Array(aD.f1), this.yE = new Uint16Array(aD.f1), this.yF = new Uint16Array(this.km.length + 1), this.yG = new Uint16Array(this.km.length), this.de =
		function() {
			this.a1E = [L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523)]
		}, this.dd = function() {
			if (this.f2.fill(0), this.aBV.fill(0), this.abH(), aD.hy) {
				if (9 === aD.kh) {
					for (var f2 = bg.f2, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f2[aB] = 1;
					var f4 = aD.f1;
					for (aB = aD.data.teamPlayerCount[7]; aB < f4; aB++) f2[aB] = 2;
					bg.km[1] = 7, bg.km[2] = 8
				} else aD.kj ? function() {
					var aYB = bg.aYB,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kP - 1; 0 <= aB; aB--) colorsData[aB] = ay.jg(262144);
					var abS = 0,
						fK = 768,
						aUs = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f7 = 0, fO = 0; fO < 3; fO++) f7 += Math.abs(aYB[aB][fO] - aUs[fO]);
							f7 < fK && (abS = aB, fK = f7)
						} var abT = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) abT[aB] = teamPlayerCount[aB];
					var km = bg.km,
						abU = new Uint8Array(9),
						gX = (km[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) abT[aB] && (abU[aB] = gX, km[gX++] = aB);
					var jf = aD.kP,
						f2 = bg.f2;
					abT[abS] ? (abT[abS]--, f2[0] = abU[abS]) : jf = 0;
					var ec = 0;
					for (aB = jf; aB < aD.y1; aB++) {
						var hw = km[ec];
						if (abT[hw]) abT[hw]--, f2[aB] = abU[hw];
						else if (aB--, 9 <= ++ec) return console.log("error 325")
					}
				}() : this.eX();
				! function() {
					for (var f4 = aD.f1, yE = bg.yE, yF = bg.yF, yG = bg.yG, f2 = bg.f2, km = bg.km, y7 = km.length, eP = new Array(y7), aB = 0; aB < y7; aB++) eP[aB] = [];
					for (aB = 0; aB < f4; aB++) eP[km[f2[aB]]].push(aB);
					for (aB = 1; aB <= y7; aB++) yF[aB] = yF[aB - 1] + eP[aB - 1].length;
					for (aB = 0; aB < y7; aB++)
						for (var gX = eP[aB].length, lK = yF[aB], hw = 0; hw < gX; hw++) yE[hw + lK] = eP[aB][hw];
					var kP = aD.kP;
					for (aB = 0; aB < y7; aB++)
						for (gX = eP[aB].length, lK = yF[aB], hw = 0; hw < gX; hw++)
							if (yE[hw + lK] >= kP) {
								yG[aB] = hw;
								break
							}
				}(), ! function() {
					for (var f4 = aD.f1, f2 = bg.f2, aBV = bg.aBV, km = bg.km, aB = 0; aB < f4; aB++) aBV[aB] = km[f2[aB]];
					9 === aD.kh && aBV.fill(1, f4 - az.kq[5])
				}()
			}
		}, this.abH = function() {
			for (var aB = this.km.length - 1; 0 <= aB; aB--) this.km[aB] = aB
		}, this.eX = function() {
			var zy = new Uint8Array(aD.kP),
				zz = new Uint8Array(aD.kP),
				abM = new Uint16Array(8),
				abN = new Uint16Array(this.km.length);
			this.abO(zy, zz, abM, 1), this.aI1(abM), this.abP(abN, zy, zz), this.abQ(zy, zz, abN), this.abR()
		}, this.abO = function(zy, zz, abT, abV) {
			for (var fO, e, abW, f4 = this.km.length - abV, g = new Uint16Array(f4), aYB = this.aYB, colorsData = aD.data.colorsData, aB = aD.kP - 1; 0 <= aB; aB--) {
				for (fO = f4; abV <= fO; fO--) g[fO - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aYB[fO][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aYB[fO][1]) + Math.abs(4 * (63 & colorsData[aB]) - aYB[fO][2]);
				for (abW = 768, fO = f4 - 1; 0 <= fO; fO--) g[e = (fO + aB) % f4] < abW && (abW = g[e], zy[aB] = e);
				for (abT[zy[aB]] += 4, abW = 768, fO = f4 - 1; 0 <= fO; fO--) g[e = (fO + aB) % f4] < abW && e !== zy[aB] && (abW = g[e], zz[aB] = e);
				abT[zz[aB]]++
			}
		}, this.aI1 = function(abT) {
			for (var fO, lM, f4 = this.km.length - 1, aB = f4; 0 <= aB; aB--) this.km[aB] = aB;
			for (aB = f4 - 1; 0 <= aB; aB--) abT[aB]++;
			for (aB = 1; aB <= f4; aB++) {
				for (lM = 0, fO = 1; fO < f4; fO++) abT[fO] > abT[lM] && (lM = fO);
				abT[lM] = 0, this.km[aB] = lM + 1
			}
		}, this.abP = function(abN, zy, zz) {
			var fO, a1c, ec, f7, e, na, tW, abX = this.km.length - 1,
				rK = new Uint16Array(abX),
				abY = [],
				abZ = 0,
				a1b = [],
				aba = [];
			loop: for (var aB = 0; aB < aD.kP; aB++)
				if (null !== (a1c = bA.rq.a1d(ag.a1a[aB]))) {
					for (fO = a1b.length - 1; 0 <= fO; fO--)
						if (a1c === a1b[fO]) {
							aba[fO].push(aB), abZ = Math.max(abZ, aba[fO].length);
							continue loop
						} a1b.push(a1c), abY.push(!1), aba.push([aB]), abZ = Math.max(abZ, 1)
				}
			for (; 2 < aD.y8 && abZ > bL.fV(aD.kP, aD.y8);) aD.y8--, aD.kh--;
			for (fO = a1b.length - 1; 0 <= fO; fO--) {
				for (f7 = -1, ec = a1b.length - 1; 0 <= ec; ec--) !abY[ec] && (-1 === f7 || aba[ec].length > aba[f7].length) && (f7 = ec);
				for (ec = abX - 1; 0 <= ec; ec--) rK[ec] = 1;
				for (ec = aba[f7].length - 1; 0 <= ec; ec--) rK[zy[aba[f7][ec]]] += 3, rK[zz[aba[f7][ec]]]++;
				for (aB = abX - 1; 0 <= aB; aB--) {
					for (e = f7 % abX, ec = abX - 1; 0 <= ec; ec--) rK[ec] > rK[e] && (e = ec);
					for (na = -1, ec = aD.y8; 0 < ec; ec--)
						if (this.km[ec] === e + 1) {
							na = ec;
							break
						} if (rK[e] = 0, -1 !== na) {
						for (tW = 0, ec = aD.y8; 0 < ec; ec--) abN[na] > abN[ec] && tW++;
						if (tW !== aD.y8 - 1) {
							for (ec = aba[f7].length - 1; 0 <= ec; ec--) abN[na]++, this.f2[aba[f7][ec]] = na;
							break
						}
					}
				}
				abY[f7] = !0
			}
		}, this.abQ = function(zy, zz, abN) {
			for (var aB, iN, f4 = this.km.length - 1, border = bL.fV(aD.kP, aD.y8), abb = (0 < aD.kP % aD.y8 && border++, new Uint8Array(1 + f4)), fO = f4; 1 <= fO; fO--) abb[this.km[fO]] = fO;
			for (aB = 0; aB < aD.kP; aB++) iN = abb[zy[aB] + 1], 0 === this.f2[aB] && iN <= aD.y8 && abN[iN] < border && (abN[iN]++, this.f2[aB] = iN);
			for (aB = 0; aB < aD.kP; aB++) iN = abb[zz[aB] + 1], 0 === this.f2[aB] && iN <= aD.y8 && abN[iN] < border && (abN[iN]++, this.f2[aB] = iN);
			for (fO = aD.y8; 1 <= fO; fO--)
				for (aB = aD.kP - 1; 0 <= aB && !(abN[fO] >= border); aB--) 0 === this.f2[aB] && (abN[fO]++, this.f2[aB] = fO)
		}, this.abR = function() {
			for (var aB = aD.kP; aB < aD.f1; aB++) this.f2[aB] = 1 + aB % aD.y8
		}
}

function db() {
	this.gt = function() {
		for (var fB, fD, aB = g0 - 1; 0 <= aB; aB--) fB = bL.fV(g2[aB], 4) % bS.fF, fD = bL.fV(g2[aB], 4 * bS.fF), ag.ix[fv] = Math.min(fB, ag.ix[fv]), ag.iz[fv] = Math.min(fD, ag.iz[fv]), ag.iy[fv] = Math.max(fB, ag.iy[fv]), ag.j0[fv] = Math
			.max(fD, ag.j0[fv])
	}, this.gE = function() {
		var f7, gc, aB, f4 = ag.gW[fv].length,
			f6 = ac.f6;
		loop: for (aB = f4 - 1; 0 <= aB; aB--) {
			for (f7 = 3; 0 <= f7; f7--)
				if (gc = ag.gW[fv][aB] + f6[f7], ac.ev(gc) || ac.ge(gc) && ac.ew(gc) !== fv) {
					ac.jb(ag.gW[fv][aB], fv);
					continue loop
				} ag.gW[fv][aB] = ag.gW[fv][f4 - 1], ag.gW[fv].pop(), f4--
		}
	}, this.gF = function() {
		var player = fv,
			gk = ag.gk,
			gl = ag.gl,
			fT = ag.fT,
			f4 = gk[player].length,
			f6 = ac.f6;
		loop: for (var aB = f4 - 1; 0 <= aB; aB--) {
			for (var abc = !1, abd = !1, f7 = 3; 0 <= f7; f7--) {
				var gc = gk[player][aB] + f6[f7];
				if (ac.aIL(gc, player)) continue loop;
				abc = abc || ac.iI(gc), abd = abd || ac.aIK(gc)
			}
			abc ? gl[player].push(gk[player][aB]) : abd ? fT[player].push(gk[player][aB]) : ac.ya(gk[player][aB], player), gk[player][aB] = gk[player][f4 - 1], gk[player].pop(), f4--
		}
	}, this.gi = function() {
		ag.gs[fz] -= g0
	}, this.gj = function(border) {
		for (var f4 = border.length, aB = f4 - 1; 0 <= aB; aB--) ac.yv(fz, border[aB]) || (border[aB] = border[f4 - 1], border.pop(), f4--)
	}, this.gm = function(border) {
		for (var f4 = border.length, aB = f4 - 1; 0 <= aB; aB--) !ac.yv(fz, border[aB]) && ac.ez(border[aB]) && (border[aB] = border[f4 - 1], border.pop(), f4--)
	}, this.gn = function(border) {
		for (var f7, gc, f4 = border.length, f6 = ac.f6, aB = f4 - 1; 0 <= aB; aB--)
			for (f7 = 3; 0 <= f7; f7--)
				if (gc = border[aB] + f6[f7], ac.aIL(gc, fz)) {
					ag.gk[fz].push(border[aB]), border[aB] = border[f4 - 1], border.pop(), f4--;
					break
				}
	}, this.go = function() {
		for (var f7, gc, f6 = ac.f6, aB = g0 - 1; 0 <= aB; aB--)
			for (f7 = 3; 0 <= f7; f7--) gc = g2[aB] + f6[f7], ac.yy(fz, gc) && ac.aIM(gc) && (ag.gk[fz].push(gc), ac.gZ(gc, fz))
	}, this.gp = function() {
		var fB, fD;
		loop: for (; ag.iz[fz] < ag.j0[fz];) {
			for (fB = ag.iy[fz]; fB >= ag.ix[fz]; fB--)
				if (ac.yv(fz, 4 * (ag.iz[fz] * bS.fF + fB))) break loop;
			ag.iz[fz]++
		}
		loop: for (; ag.iz[fz] < ag.j0[fz];) {
			for (fB = ag.iy[fz]; fB >= ag.ix[fz]; fB--)
				if (ac.yv(fz, 4 * (ag.j0[fz] * bS.fF + fB))) break loop;
			ag.j0[fz]--
		}
		loop: for (; ag.ix[fz] < ag.iy[fz];) {
			for (fD = ag.j0[fz]; fD >= ag.iz[fz]; fD--)
				if (ac.yv(fz, 4 * (fD * bS.fF + ag.ix[fz]))) break loop;
			ag.ix[fz]++
		}
		loop: for (; ag.ix[fz] < ag.iy[fz];) {
			for (fD = ag.j0[fz]; fD >= ag.iz[fz]; fD--)
				if (ac.yv(fz, 4 * (fD * bS.fF + ag.iy[fz]))) break loop;
			ag.iy[fz]--
		}
	}, this.ex = function(player, jY) {
		return 0 === bg.f2[player] || bg.f2[player] !== bg.f2[jY]
	}, this.ha = function(player) {
		for (var aB, gd, f4 = ag.gk[player].length, f6 = ac.f6, f7 = 3; 0 <= f7; f7--)
			for (gd = f6[f7], aB = 0; aB < f4; aB++)
				if (ac.ev(ag.gk[player][aB] + gd)) return !0;
		return !1
	}, this.aIW = function(player) {
		for (var aB, gd, f4 = ag.gk[player].length, f6 = ac.f6, f7 = 3; 0 <= f7; f7--)
			for (gd = f6[f7], aB = 0; aB < f4; aB++)
				if (ac.ja(ag.gk[player][aB]) && ac.ev(ag.gk[player][aB] + gd)) return !0;
		return !1
	}, this.hd = function(a4M, a4N) {
		for (var aB, eT, gd, gc, aZF = ag.gk[a4M].length, aZG = ag.gk[a4N].length, f6 = (aZG < aZF && (eT = a4M, a4M = a4N, a4N = eT, eT = aZF, aZF = aZG, 0), ac.f6), f7 = 3; 0 <= f7; f7--)
			for (gd = f6[f7], aB = 0; aB < aZF; aB++)
				if (gc = ag.gk[a4M][aB] + gd, ac.ge(gc) && ac.ew(gc) === a4N) return !0;
		return !1
	}, this.aIX = function(a4M, a4N) {
		for (var aB, gd, gc, aZF = ag.gk[a4M].length, f6 = ac.f6, f7 = 3; 0 <= f7; f7--)
			for (gd = f6[f7], aB = 0; aB < aZF; aB++)
				if (ac.ja(ag.gk[a4M][aB]) && (gc = ag.gk[a4M][aB] + gd, ac.ge(gc)) && ac.ew(gc) === a4N) return !0;
		return !1
	}
}

function dV() {
	this.qM = new abe
}

function abe() {
	this.hg = function(player) {
		bA.gQ.a4H(player) && aN.a1G(80, L(524), 637, 0, bB.oo, bB.nv, -1, !1)
	}, this.hj = function(player) {
		bA.gQ.a4H(player) && aN.a1G(80, L(525), 637, 0, bB.oo, bB.nv, -1, !1)
	}
}

function abf() {
	this.abg = 0, this.eX = function() {
		aO.eX(), aZ.eX(), h.eX(), b0.y.eX(), ax.aHX(), bU.eL.eX(), bf.dk && (bf.dk = !1, aa.vU())
	}
}

function abh() {
	this.eS = bf.eS, this.eB = 0, this.abg = 0, this.aHV = 0, this.abi = null, this.abj = 7, this.abk = 0, this.dd = function() {
		this.aHV = 0, this.abi = [], this.eB = 0, this.abg = 0
	}, this.aUK = function(aC) {
		if (aD.hS) this.aCH(aC);
		else if (this.abi.push(aC), 2 === aD.a0s) {
			for (var aB = 0; aB < this.abi.length; aB++) b8.pI.eX(this.abi[aB]);
			this.abi = []
		}
	}, this.aCH = function(aC) {
		2 !== aD.a0s && (b8.pI.eX(aC), b9.eX(), aW.aCH(this.aHV), this.aHV === aD.a5M ? (aD.qD.eX(), this.aHV = 0, this.eB = 0, this.abg = 0, this.eS = bf.eS) : (this.aHV++, af.a5F(), af.mk(!0), bb.aCq()))
	}, this.eX = function() {
		h.eX(), aD.hS ? (bf.dk = aW.aCH(-1) || bf.dk, mm()) : (0 !== this.eB || bf.eS >= this.eS && (this.eS += bf.aCG * Math.floor(1 + (bf.eS - this.eS) / bf.aCG), 2 === aD.a0s ? mb() : this.abl(), this.eB++, 27 < bf.eS - this.abk)) && this
		.abm(), mh(), bf.dk && (bf.dk = !1, yz()), this.abk = bf.eS
	}, this.abm = function() {
		bf.dk = !0, mj(), this.eB = 0
	}, this.abl = function() {
		var wK, aB;
		if (this.abg !== 7 * this.aHV) md(), bb.aCq();
		else {
			wK = !1;
			loop: for (; this.abn() && (wK = !0, md(), 2 !== aD.a0s) && 0 < this.abi.length;)
				for (aB = this.abj - 2; 0 <= aB; aB--)
					if (md(), 2 === aD.a0s) break loop;
			wK ? bb.aCq() : (mb(), bb.a5I())
		}
	}, this.abn = function() {
		return 0 < this.abi.length && (this.aHV++, b8.pI.eX(this.abi[0]), this.abi.shift(), !0)
	}
}

function abo() {
	var abp, abq, abr, aHV, abt, eB = 0,
		eS = bf.eS;

	function abw() {
		! function() {
			if (!aD.hS) return;
			if (aD.kj) return;
			if (2 !== aD.a0s)
				if (abt % 7 != 0) abt++;
				else if (aHV === aD.a5M) {
				if (!abz()) return;
				aW.aCH(aHV), aD.qD.eX()
			} else {
				if (!abz()) return;
				abt++, aHV++, af.a5F(), af.mk(!0)
			}
			return 1
		}() && abz() && md()
	}

	function abx() {
		eB = 0, (aD.hS ? (bf.dk = aW.aCH(aHV - (abt % 7 == 0 ? 0 : 1) + abt % 7 / 7) || bf.dk, mm) : aM.hE || !bC.a5j ? mm : (bf.dk = !0, mj))()
	}

	function abz() {
		var aB, f4, ac0 = b9.qB.aVn,
			fn = b9.qB.aVo,
			fp = b9.qB.aVp,
			fr = b9.qB.aVq,
			ac1 = b9.qB.aVr,
			ac2 = b9.qB.aVs;
		if (!(abp >= ac2.length)) {
			if (ac2 = ac2[abp], ac1[abp]) {
				for (f4 = abq + ac2, aB = abq; aB < f4; aB++) b8.pI.q0(ac0[aB], fn[aB], fp[aB], fr[aB]);
				abq += ac2, abp++
			} else ++abr >= ac2 && (abp++, abr = 0);
			return 1
		}
		aN.a2D("Replay file smaller than expected."), bC.a32(!1), aD.a0s = 2
	}
	this.abg = 0, this.dd = function() {
		abt = aHV = abr = abq = abp = 0
	}, this.eX = function() {
		var aZg;
		h.eX(), bC.a9U() < 1.7 ? 0 === eB ? bf.eS >= eS && (aZg = bf.aCG / bC.a9U(), eS += aZg * Math.floor(1 + (bf.eS - eS) / aZg), 2 === aD.a0s || aM.hE || !bC.a5j ? mb() : (abw(), bb.aCq()), eB++) : abx() : function() {
			var aZg;
			if (bf.eS >= eS)
				if (2 === aD.a0s || aM.hE || !bC.a5j) mb(), eS = bf.eS;
				else {
					for (aZg = bf.aCG / bC.a9U(), 16 < (bf.eS - eS) / aZg && (eS = bf.eS - 16 * aZg); bf.eS >= eS && 2 !== aD.a0s;) eS += aZg, abw();
					bb.aCq()
				} abx()
		}(), mh(), bf.dk && (bf.dk = !1, yz())
	}, this.a13 = function() {
		b9.qB.aVs.length - abp <= 2 || aN.a2D("Replay file larger than expected.")
	}
}

function ac3() {
	var eB = 0,
		eS = bf.eS;
	this.abg = 0, this.eX = function() {
		h.eX(), aD.hS ? mm() : 0 === eB ? bf.eS >= eS && (eS += bf.aCG * Math.floor(1 + (bf.eS - eS) / bf.aCG), 2 === aD.a0s || aM.hE ? mb() : (md(), bb.aCq()), eB++) : ((aM.hE ? mm : (bf.dk = !0, mj))(), eB = 0), mh(), bf.dk && (bf.dk = !1,
		yz())
	}
}

function dR() {
	this.a12 = null, this.dk = !1, this.eS = 0, this.aCG = 56;
	var ac4 = 0;

	function ac5() {
		bf.eS = ac4 = performance.now(), bf.a12.eX(), window.requestAnimationFrame(ac5)
	}
	this.dd = function() {
		this.a5g(), window.requestAnimationFrame(ac5), this.eS = performance.now()
	}, this.a5Y = function() {
		aD.hD ? (this.a12 = new abo, this.a12.dd()) : aD.kj ? this.a12 = new ac3 : (this.a12 = new abh, this.a12.dd())
	}, this.a5g = function() {
		this.a12 = new abf, this.dk = !0
	}, this.eX = function() {
		this.a12.abg++
	}, this.kM = function() {
		return this.a12.abg
	}, this.aU2 = function() {
		var eT = performance.now();
		eT < ac4 + 1e3 || (this.eS = eT, this.a12.eX())
	}
}

function ct() {
	var aGr = 0,
		ac6 = !0;

	function ac7(id) {
		id = [L(526), L(527), L(528), L(529)][id];
		aN.a7W(id)
	}
	this.eX = function() {
		var eT, a7s;
		bf.eS < aGr || (aGr = bf.eS + 3e3, aD.hD) || aD.kj || bA.gQ.hG(aD.eo) || (eT = new Date, a7s = eT.getUTCSeconds(), ac6 ? a7s < 43 && (ac6 = !1) : a7s < 43 || (aGr += 52e3, ac6 = !0, (a7s = (eT.getUTCMinutes() + 1) % 60) % 10 == 0 ? aD
			.kh < 7 && ac7(0) : a7s % 10 == 5 ? 7 !== aD.kh && 10 !== aD.kh || ac7(1) : a7s % 10 == 7 ? 8 === aD.kh && ac7(2) : a7s % 10 == 2 && 9 === aD.kh && ac7(3)))
	}
}

function cn() {
	var nO, nP, nb, nc, ac8 = 0,
		ac9 = 0;

	function acB() {
		return Math.pow(Math.pow(nb - nO, 2) + Math.pow(nc - nP, 2), .5)
	}

	function acA(e) {
		nO = h.k * e.touches[0].clientX, nP = h.k * e.touches[0].clientY, nb = h.k * e.touches[1].clientX, nc = h.k * e.touches[1].clientY
	}
	this.a2U = function(e) {
		return 1 < e.touches.length ? (ac9 = bf.eS, ac8 = 3, acA(e), aL.s8(), !0) : (ac8 = 0, !1)
	}, this.a2V = function(e) {
		var aMc, iL, iM;
		return 0 !== aD.a0s && 1 < e.touches.length && (ac8 = Math.max(ac8 - 1, 0), aH.ng() && (aMc = acB(), acA(e), e = acB(), iL = Math.floor((nO + nb) / 2), iM = Math.floor((nP + nc) / 2), aS.a9v(iL, iM, Math.max(.125, e) / Math.max(.125,
			aMc)), bf.dk = !0), !0)
	}, this.a2s = function() {
		var fB, fD;
		return !!(ac8 && (ac8 = 0, bf.eS < ac9 + 500)) && (fB = (nO + nb) / 2, fD = (nP + nc) / 2, aL.a2m(fB, fD), aL.click(fB, fD, !0) && (bf.dk = !0), !0)
	}
}

function d2() {
	this.size = 0, this.eB = 0, this.aC = null, this.dd = function(aC) {
		this.eB = 0, this.aC = aC, this.size = aC.length
	}, this.uY = function() {
		this.aC = null
	}, this.pz = function(size) {
		for (var fW = 0, aC = this.aC, ng = this.eB + size - 1, aB = this.eB; aB <= ng; aB++) fW |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << ng - aB;
		return this.eB += size, this.eB > 8 * this.size && console.error("Unwrapper Overflow"), fW
	}, this.aUS = function(size) {
		var fO = size >> 1;
		return (1 << fO) * this.pz(size - fO) + this.pz(fO)
	}, this.aUT = function(acC) {
		return this.size === bD.aUR(acC)
	}, this.aW5 = function(xn, acD, acE) {
		var gX = this.pz(xn);
		if (!gX) return null;
		for (var xn = Math.max(gX, acE), g = new(acD <= 8 ? Uint8Array : acD <= 16 ? Uint16Array : Uint32Array)(xn), aB = 0; aB < gX; aB++) g[aB] = this.pz(acD);
		acE = g[gX - 1];
		return acE && g.fill(acE, gX), g
	}, this.aW6 = function(xn, acF, acE) {
		var gX = this.pz(xn);
		if (!gX) return null;
		for (var xn = Math.max(gX, acE), g = new Array(xn), aB = 0; aB < gX; aB++) g[aB] = this.aW3(acF);
		return g.fill(g[gX - 1], gX), g
	}, this.aW3 = function(xn) {
		return bG.wu.wy(this.pz(xn))
	}, this.aW4 = function() {
		var qY = bF.tB.tC(bF.tB.tD(this.pz(30))),
			qY = bA.rq.a5A(qY, "_", "/");
		qY = bA.rq.a5A(qY, "-", "+");
		for (var acG = "";
			(qY.length + acG.length) % 4;) acG += "=";
		qY = "data:image/png;base64," + qY + acG;
		var aJ3 = new Image;
		aJ3.onload = function() {
			b9.aJc.aJd(aJ3), aJ3.onload = null, aJ3 = null
		}, aJ3.src = qY
	}
}

function dL() {
	this.aX1 = 0, this.aX2 = 0, this.aWx = 0, this.aWy = 0, this.aWz = 0, this.aX0 = 0, this.aCr = [0, 0, 0, 0], this.nf = function() {
		this.aX1 = aS.z1(), this.aX2 = aS.z2(), this.aWx = -this.aX1, this.aWy = -this.aX2, this.aWz = h.i / iF, this.aX0 = h.j / iF, this.aCr[0] = Math.floor(this.aWx), this.aCr[1] = Math.floor(this.aWy), this.aCr[2] = Math.floor(this.aCr[0] +
			this.aWz + 1), this.aCr[3] = Math.floor(this.aCr[1] + this.aX0 + 1), bb.aCo = !0
	}
}

function co() {
	var a8Z, nB;
	this.dd = function() {
		a8Z = 1, nB = 0
	}, this.eX = function() {
		0 < a8Z && (nB = 0 === nB ? bf.eS + 16 : nB, a8Z = (a8Z -= .001 * (bf.eS - nB)) < 0 ? 0 : a8Z, nB = bf.eS, bf.dk = !0)
	}, this.vU = function() {
		0 < a8Z && (vV.fillStyle = "rgba(0,0,0," + a8Z + ")", vV.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eB = 0, this.aC = null, this.dd = function(aC) {
		this.eB = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(acC) {
		return this.dd(new Uint8Array(this.aUR(acC))), this.aC
	}, this.uY = function() {
		this.aC = null
	}, this.a8 = function(size, a7x) {
		for (var aC = this.aC, ng = this.eB + size - 1, aB = this.eB; aB <= ng; aB++) aC[aB >> 3] |= (a7x >> ng - aB & 1) << 7 - (7 & aB);
		this.eB += size, this.eB > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aUQ = function(size, a7x) {
		var fO = size >> 1,
			f7 = 1 << fO;
		this.a8(size - fO, bL.fV(a7x, f7)), this.a8(fO, a7x % f7)
	}, this.acJ = function(size) {
		for (var aC = this.aC, ng = this.eB + size, aB = this.eB; aB < ng; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aUR = function(acC) {
		return acC + 7 >> 3
	}, this.acK = function(g, jf, ng, acL) {
		for (var aB = jf; aB < ng; aB++) this.a8(acL, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.eB = 0
	}, this.aUp = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(acM, value) {
		for (var g = this.g, ng = this.eB + acM - 1, acN = 1 + (ng >> 3); g.length < acN;) g.push(0);
		for (var aB = this.eB; aB <= ng; aB++) g[aB >> 3] |= (value >> ng - aB & 1) << 7 - (7 & aB);
		this.eB += acM
	}, this.dj = function(g, xn, acD) {
		var acO = bA.qz.a3e(g);
		this.a8(xn, acO);
		for (var aB = 0; aB < acO; aB++) this.a8(acD, g[aB])
	}, this.aWN = function(g, xn, acF) {
		var acO = bA.qz.a3e(g);
		this.a8(xn, acO);
		for (var aB = 0; aB < acO; aB++) this.aWL(g[aB], acF)
	}, this.aWL = function(qY, xn) {
		var f4 = qY.length;
		this.a8(xn, f4);
		for (var aB = 0; aB < f4; aB++) this.a8(16, qY.charCodeAt(aB))
	}, this.aWM = function(a3k) {
		var acP = (a3k = a3k.toDataURL()).split(",");
		if (acP.length < 2) console.log("error 266");
		else {
			a3k = bA.rq.a5A(a3k = acP[acP.length - 1], "/", "_"), a3k = bA.rq.a5A(a3k, "\\+", "-");
			var a3k = bA.rq.a5A(a3k, "=", ""),
				x7 = bG.tB.x4(a3k),
				f4 = x7.length;
			this.a8(30, f4);
			for (var aB = 0; aB < f4; aB++) this.a8(6, x7[aB])
		}
	}
}
a(), self.aiCommand746 = function(fW) {
	0 === fW ? bt() : 1 !== fW || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fX()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};